import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";
import App from "./App";
import { AuthProvider, useAuth } from "react-oidc-context";
import { userManager } from "./auth";
import "./index.css";

const JustAuthConsumer = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const [hasTriedSignin, setHasTriedSignin] = useState(false);

  //login logic
  useEffect(() => {
    if (auth.isLoading || auth.activeNavigator) return;

    if (!auth.isAuthenticated && !hasTriedSignin) {
      setHasTriedSignin(true);
      void auth.signinRedirect();
    }
  }, [auth.isLoading, auth.activeNavigator, auth.isAuthenticated, hasTriedSignin]);

  //  try: Listen for logout from main app
  useEffect(() => {
    const remove = userManager.events.addUserSignedOut(async () => {
      console.log("User signed out from identity provider");
      await userManager.removeUser();
      setHasTriedSignin(false); // Reset signin attempt flag
      auth.removeUser(); // Clear auth context
      window.location.href = auth.settings.authority; // Redirect to IDP
    });

    return () => remove();
  }, [auth]);

  // Periodic token validation
  useEffect(() => {
    if (!auth.isAuthenticated) return;

    let validationAttempts = 0;
    const MAX_ATTEMPTS = 3;

    const validateToken = async () => {
      try {
        const user = await userManager.getUser();
        if (!user || user.expired) {
          validationAttempts++;
          console.log(`Token expired or user invalid (attempt ${validationAttempts}/${MAX_ATTEMPTS})`);

          if (validationAttempts >= MAX_ATTEMPTS) {
            await userManager.removeUser();
            window.location.reload();
          }
        } else {
          validationAttempts = 0; // Reset counter on successful validation
        }
      } catch (error) {
        console.error("Token validation failed:", error);
        await userManager.removeUser();
        window.location.reload();
      }
    };

    const interval = setInterval(validateToken, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [auth.isAuthenticated]);


  if (!auth.isAuthenticated) {
    return <div>Redirecting to login...</div>;
  }

  return <>{children}</>;
};


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider
      userManager={userManager}
      onSigninCallback={() => {
        window.history.replaceState({}, document.title, window.location.origin);
      }}
    >
      <JustAuthConsumer>
        <App />
      </JustAuthConsumer>
    </AuthProvider>
  </React.StrictMode>
);
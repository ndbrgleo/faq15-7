import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";
import App from "./App";
import { AuthProvider, useAuth } from "react-oidc-context";
import { userManager } from "./auth";
import "./index.css";

const JustAuthConsumer = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const [hasTriedSignin, setHasTriedSignin] = useState(false);

  // ⬇️ Your existing login logic
  useEffect(() => {
    if (auth.isLoading || auth.activeNavigator) return;

    if (!auth.isAuthenticated && !hasTriedSignin) {
      setHasTriedSignin(true);
      void auth.signinRedirect();
    }
  }, [auth.isLoading, auth.activeNavigator, auth.isAuthenticated, hasTriedSignin]);

  // ✅ New: Listen for logout from main app
  useEffect(() => {
    const remove = userManager.events.addUserSignedOut(() => {
      console.log("User signed out from identity provider");
      userManager.removeUser();
      window.location.reload(); // Force login again
    });

    return () => remove(); // Clean up listener on unmount
  }, []);

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

import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";
import App from "./App";
import { AuthProvider, hasAuthParams, useAuth } from "react-oidc-context";
import { userManager, handleLoginCallback } from "./auth";

const JustAuthConsumer = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const [hasTriedSignin, setHasTriedSignin] = useState(false);

  useEffect(() => {
    const handleAuth = async () => {
      try {
        if (hasAuthParams()) {
          await handleLoginCallback();
          return;
        }

        if (
          !auth.isAuthenticated &&
          !auth.activeNavigator &&
          !auth.isLoading &&
          !hasTriedSignin
        ) {
          setHasTriedSignin(true);
          await auth.signinRedirect();
        }
      } catch (err) {
        console.error("Auth error:", err);
        // Clear stale state to recover from broken auth state
        window.localStorage.removeItem('oidc.state');
        window.history.replaceState({}, document.title, window.location.origin);
      }
    };

    handleAuth();
  }, [
    auth.isAuthenticated,
    auth.activeNavigator,
    auth.isLoading,
    hasTriedSignin
  ]);

  if (!auth.isAuthenticated) {
    return <div>Redirecting to login...</div>;
  }

  return <>{children}</>;
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider userManager={userManager}>
      <JustAuthConsumer>
        <App />
      </JustAuthConsumer>
    </AuthProvider>
  </React.StrictMode>
);

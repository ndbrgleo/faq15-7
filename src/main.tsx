import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";
import App from "./App";
import { AuthProvider, hasAuthParams, useAuth } from "react-oidc-context";
import { userManager, handleLoginCallback } from "./auth";
import "./index.css";

const JustAuthConsumer = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const [hasTriedSignin, setHasTriedSignin] = useState(false);

  useEffect(() => {
    const handleAuth = async () => {
      if (auth.isLoading) return;

      try {
        if (hasAuthParams()) {
          await handleLoginCallback();
          return;
        }

        if (!auth.isAuthenticated && 
            !auth.activeNavigator && 
            !hasTriedSignin && 
            !window.location.pathname.includes('/callback')) {
          setHasTriedSignin(true);
          await auth.signinRedirect();
        }
      } catch (err) {
        console.error("Auth error:", err);
        // Only reset on actual errors, not user cancellations
        if (err.message !== 'Login canceled') {
          setHasTriedSignin(false);
          window.location.href = window.location.origin;
        }
      }
    };

    handleAuth();
  }, [auth.isLoading, auth.isAuthenticated, auth.activeNavigator, hasTriedSignin]);

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
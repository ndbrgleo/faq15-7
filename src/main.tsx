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
      try {
        if (hasAuthParams() && !auth.isAuthenticated) {
          await handleLoginCallback();
        } else if (
          !auth.isAuthenticated &&
          !auth.activeNavigator &&
          !auth.isLoading &&
          !window.location.pathname.includes("/callback") &&
          !hasTriedSignin
        ) {
          setHasTriedSignin(true);
          await auth.signinRedirect();
        }
      } catch (err) {
        console.error("Auth error:", err);
      }
    };

    handleAuth();
  }, [auth.isAuthenticated, auth.activeNavigator, auth.isLoading, hasTriedSignin]);

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

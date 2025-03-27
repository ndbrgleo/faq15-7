import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { AuthProvider, hasAuthParams, useAuth } from "react-oidc-context";
import { userManager, handleLoginCallback } from "./auth";

const JustAuthConsumer = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();

  React.useEffect(() => {
    const handleAuth = async () => {
      try {
        if (hasAuthParams()) {
          await handleLoginCallback();
        } else if (
          !auth.isAuthenticated &&
          !auth.activeNavigator &&
          !auth.isLoading
        ) {
          await auth.signinRedirect();
        }
      } catch (err) {
        console.error("Auth error:", err);
      }
    };

    handleAuth();
  }, [auth]);

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

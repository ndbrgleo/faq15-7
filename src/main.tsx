import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";
import App from "./App";
import { AuthProvider, useAuth } from "react-oidc-context";
import { userManager } from "./auth";
import "./index.css";

const JustAuthConsumer = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const [hasTriedSignin, setHasTriedSignin] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        if (!auth.isLoading && auth.isAuthenticated) {
          await auth.querySessionStatus();
        }
      } catch {
        await auth.removeUser();
        await auth.signinRedirect();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        void checkSession();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    auth.events?.addUserSignedOut(() => {
      void auth.removeUser();
      void auth.signinRedirect();
    });

    if (!auth.isLoading && !auth.activeNavigator && !auth.isAuthenticated && !hasTriedSignin) {
      setHasTriedSignin(true);
      void auth.signinRedirect();
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [auth, hasTriedSignin]);

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

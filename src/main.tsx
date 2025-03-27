import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { AuthProvider, hasAuthParams, useAuth } from "react-oidc-context";
import { userManager } from "./auth"; // adjust path if needed

const JustAuthConsumer = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
console.log(auth)
  React.useEffect(() => {
    if (
      !(
        hasAuthParams() ||
        auth.isAuthenticated ||
        auth.activeNavigator ||
        auth.isLoading
      )
    ) {
      void auth.signinRedirect();
    }
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

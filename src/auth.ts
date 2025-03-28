import { UserManager, WebStorageStateStore, UserManagerSettings } from 'oidc-client-ts';

const settings: UserManagerSettings = {
  authority: 'https://accounts.dev.gojust.eu/realms/just',
  client_id: 'sassy-saddles',
  redirect_uri: window.location.origin,
  post_logout_redirect_uri: window.location.origin,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  monitorSession: false,
  response_type: 'code',
  scope: 'openid profile email',
  staleStateAgeInSeconds: 3600,
  silentRequestTimeoutInSeconds: 10,
};

export const userManager = new UserManager(settings);

export const login = async () => {
  await userManager.signinRedirect();
};

export const signout = async () => {
  await userManager.signoutRedirect();
};

//manually trigger callback (not needed if using onSigninCallback in main)
export const handleLoginCallback = async () => {
  try {
    const url = window.location.href;
    await userManager.signinCallback(url);
    window.history.replaceState({}, document.title, window.location.origin);
  } catch (err) {
    console.error("Signin callback error:", err);
    throw err;
  }
};

import { UserManager, WebStorageStateStore, UserManagerSettings } from 'oidc-client-ts';

const settings: UserManagerSettings = {
  authority: 'https://accounts.dev.gojust.eu/realms/just',
  client_id: 'sassy-saddles',
  redirect_uri: window.location.origin,
  post_logout_redirect_uri: window.location.origin,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  monitorSession: true,
  response_type: 'code',
  scope: 'openid profile email',
};

export const userManager = new UserManager(settings);

export const login = async () => {
  await userManager.signinRedirect();
};

export const handleLoginCallback = async () => {
  try {
    // Get current URL and clear any stale state first
    const url = window.location.href;
    await userManager.clearStaleState();
    
    // Attempt the callback
    await userManager.signinCallback(url);
    
    // Clean up URL
    window.history.replaceState({}, document.title, window.location.origin);
  } catch (err) {
    console.error('Signin callback error:', err);
    // Clear all auth state and storage
    await userManager.clearStaleState();
    await userManager.removeUser();
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.history.replaceState({}, document.title, window.location.origin);
    throw err;
  }
};
export const signout = async () => {
  await userManager.signoutRedirect();
};
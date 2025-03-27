import { UserManager, WebStorageStateStore, UserManagerSettings } from 'oidc-client-ts';

const settings: UserManagerSettings = {
  authority: 'https://accounts.dev.gojust.eu/realms/just',
  client_id: 'sassy-saddles',
  redirect_uri: window.location.origin, // Must match OIDC config
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
  await userManager.signinCallback();
  window.history.replaceState({}, document.title, window.location.pathname);
};

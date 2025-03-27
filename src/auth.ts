import { UserManager, WebStorageStateStore, UserManagerSettings } from 'oidc-client-ts';

const settings: UserManagerSettings = {
  authority: 'https://accounts.dev.gojust.eu',
  client_id: 'sassy-saddles',
  redirect_uri: window.location.origin,
  post_logout_redirect_uri: window.location.origin,
  userStore: new WebStorageStateStore({ store: window.sessionStorage }),
  monitorSession: true,
};

export const userManager = new UserManager(settings);
export const login = async () => {
  await userManager.signinRedirect();
};
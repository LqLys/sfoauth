import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://qqq40-dev-ed.my.salesforce.com',
  tokenEndpoint: 'https://login.salesforce.com/services/oauth2/token',


  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/login',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: '3MVG9t0sl2P.pByoV2gynx54gVDICDlEnyeHjAzkRkLscEhn8Bz_v0IstnCHKFdzDrffncznwwTtKj6irmGeA',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  // scope: 'openid profile email offline_access api',
  scope: 'openid',

  showDebugInformation: true,
};

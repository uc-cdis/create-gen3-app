export const authorize = (clientId, redirectUrl, commonsName) => {
  // would in theory be a url that would then do this functionality
  window.location = redirectUrl + `?token=abc123&commons=${commonsName}`;
}

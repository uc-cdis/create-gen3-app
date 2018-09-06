import { clientId, redirectUrl } from '../config';

export const getToken = (commonsName, location) => {
  let url = redirectUrl;
  if (!url) {
    // redirect back to same location
    url = location.pathname
  }
  // hit Fence, get token back
  sessionStorage.setItem(commonsName, '1234');
  return url;
};

export const tokenIsExpired = (commonsName) => {
  // need to decode and check date
  return !sessionStorage.getItem(commonsName);
};

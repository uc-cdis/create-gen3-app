import { clientId, redirectUrl } from '../config';
import { authorize } from './mockService';

export const getToken = (commons, location) => {
  let url = redirectUrl;
  if (!url) {
    // redirect back to same location
    url = location.pathname
  }
  // hit Fence, get token back
  if (tokenIsExpired(commons)) {
    const authToken = authorize(clientId);
    sessionStorage.setItem(commons, authToken);
  }
  return url;
};

export const tokenIsExpired = (commons) => {
  // TODO - this will change, need to decode and check date
  if (sessionStorage.getItem(commons)) {
    return Date.now() - JSON.parse(sessionStorage.getItem(commons)).iad > 5000;
  } else {
    return true;
  }
};

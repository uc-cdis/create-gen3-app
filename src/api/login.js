import querystring from 'querystring';
import { clientId } from '../config';

/**
 Fetches the user's access token for a specific commons from session storage.
 @param { string } commonsName - the name of the commons.
 @return { object } - the token stored for that commons OR
 @return { null }
 */
export const getToken = (commonsName) => {
  return sessionStorage.getItem(commonsName) || null;
};

/**
 Redirects the user to the authorization endpoint for a specific commons.
 Before doing this, stores the commons to be logged into and the current location
 in session storage for later use.
 @param { object } comons - an object containing information about the commons to log into.
 @param { string } location - the current url location.
 */
export const loginRedirect = (commons, location) => {
  const base_url = location.split('?')[0].split('#')[0];
  const redirectUri = encodeURIComponent(`${base_url}`);
  const responseType='id_token+token';
  const scope='openid+user'
  sessionStorage.setItem('commonsLogin', commons.tokenPath);
  sessionStorage.setItem('origin', location);
  window.location = `${commons.authUrl}?client_id=${commons.clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
};

/**
 Saves the token for a specific commons to session storage.
 @param { string } commonsName - the name of the commons to save a token for.
 @param { object } token - the token to be saved.
 */
export const saveToken = (commonsName, token) => {
  const authToken = JSON.stringify(token);
  sessionStorage.setItem(commonsName, authToken);
};

/**
 Handles actions needed after the token is returned by OAuth - saves the token
 and redirects the user back to the original location. Also removes the temporary
 variables stored in session storage - the name of the commons being logged into
 and the location of the user when login initiated.
 */
export const handleLoginCompletion = () => {
  const fragments = window.location.href.split('#');
  if (fragments.length === 1) {
    return
  }
  const responseValues = fragments[1];
  const tokenParams = querystring.parse(responseValues);
  const origin = sessionStorage.getItem('origin');
  const commons = sessionStorage.getItem('commonsLogin');
  saveToken(commons, tokenParams);
  sessionStorage.removeItem('commonsLogin');
  sessionStorage.removeItem('origin');
  window.location = origin;
};

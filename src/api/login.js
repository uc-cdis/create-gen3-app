import querystring from 'querystring';
import { clientId, commonsUrls } from '../config';

export const getToken = (commons) => {
  return sessionStorage.getItem(commons) || null;
};

export const loginRedirect = (commons, location) => {
  const authUrl = commonsUrls[commons];
  const redirectUri = encodeURI(`${location}login`);
  sessionStorage.setItem('commonsLogin', commons);
  sessionStorage.setItem('origin', location);
  window.location = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=openid`
};

export const saveToken = (commons, token) => {
  const authToken = JSON.stringify({
    token: token
  });
  sessionStorage.setItem(commons, authToken);
}

export const handleLoginCompletion = () => {
  const responseValues = window.location.href.split('#').pop();
  const tokenParams = querystring.parse(responseValues);
  const origin = sessionStorage.getItem('origin');
  const commons = sessionStorage.getItem('commonsLogin');
  saveToken(commons, tokenParams);
  sessionStorage.removeItem('commonsLogin');
  sessionStorage.removeItem('origin');
  window.location = origin;
}

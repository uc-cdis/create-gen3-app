import querystring from 'querystring';

export const getToken = (commons) => {
  return sessionStorage.getItem(commons) || null;
};

export const saveToken = (commons, token) => {
  const authToken = JSON.stringify({
    token: token
  });
  sessionStorage.setItem(commons, authToken);
}

export const handleLoginCompletion = () => {
  const params = querystring.parse(window.location.search.slice(1));
  saveToken(params.commons, params.token);
}

export const authorize = (clientId) => {
  return JSON.stringify({
    'sub': clientId,
    'username': 'testuser@gmail.com',
    'iad': Date.now(),
  });
}

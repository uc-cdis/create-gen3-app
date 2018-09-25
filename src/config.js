const commonsList = [
  {
    'name': 'Brain Commons',
    'tokenPath': 'bhc',
    'authUrl': 'https://accounts.google.com/o/oauth2/v2/auth',
  },
  {
    'name': 'DCP',
    'tokenPath': 'dcp',
    'authUrl': 'https://accounts.google.com/o/oauth2/v2/auth',
  },
];

module.exports = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  commonsList,
};

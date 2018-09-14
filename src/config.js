const commonsList = [
  {
    'name': 'Brain Commons',
    'tokenPath': 'bhc',
  },
  {
    'name': 'DCP',
    'tokenPath': 'dcp',
  },
];

const commonsUrls = {
  bhc: 'https://accounts.google.com/o/oauth2/v2/auth',
  dcp: 'https://accounts.google.com/o/oauth2/v2/auth',
};

module.exports = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  commonsList: commonsList,
  commonsUrls: commonsUrls,
};

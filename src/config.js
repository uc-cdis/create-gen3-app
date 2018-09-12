const commonsList = [
  {
    'name': 'Brain Commons',
    'tokenPath': 'bhc',
    'url': 'https://qa-brain.planx-pla.net',
  },
  {
    'name': 'DCP',
    'tokenPath': 'dcp',
    'url': 'https://qa-dcp.planx-pla.net',
  },
];

module.exports = {
  clientId: process.env.CLIENT_ID || 'client123',
  commonsList: commonsList,
  redirectUrl: process.env.REDIRECT_URL,
};

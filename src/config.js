const commonsList = [
  {
    'name': 'Kids First',
    'tokenPath': 'kf',
    'authUrl': 'https://qa-kidsfirst.planx-pla.net/user/oauth2/authorize',
    'clientId': process.env.REACT_APP_CLIENT_ID_KF,
  },
  {
    'name': 'DCP & Data STAGE',
    'tokenPath': 'dcp',
    'authUrl': 'https://qa-dcp.planx-pla.net/user/oauth2/authorize',
    'clientId': process.env.REACT_APP_CLIENT_ID_DCP,
  },
];

module.exports = {
  commonsList,
};

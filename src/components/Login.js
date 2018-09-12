import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getToken } from '../api/login';

class Login extends Component {
  render() {
    const { origin, commonsPath } = this.props.location.query;
    const redirectUrl = getToken(commonsPath, origin);
    return (
      <Redirect to={redirectUrl} />
    );
  }
}

export default Login;

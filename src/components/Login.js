import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getToken } from '../api/login';

class Login extends Component {
  render() {
    const { origin, commonsName } = this.props.location.query;
    const redirectUrl = getToken(commonsName, origin);
    return (
      <Redirect to={redirectUrl} />
    );
  }
}

export default Login;

import React, { Component } from 'react';
import Button from '@gen3/ui-component/dist/components/Button';
import { getToken, loginRedirect } from '../api/login';
import { commonsList } from '../config';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <h1>Welcome to Gen3!</h1>
        {
          commonsList.map((commons, i) =>
          getToken(commons.tokenPath) ?
            null
            :
            <Button
              key={i}
              className='homepage__login-button btn-primary-orange'
              label={`Log into ${commons.name}`}
              onClick={() => loginRedirect(commons.tokenPath, window.location.href)}
            />
          )
        }
      </div>
    );
  }
}

export default Homepage;

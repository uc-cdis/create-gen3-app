import React, { Component } from 'react';
import Button from '@gen3/ui-component/dist/components/Button';
import { getToken } from '../api/login';
import { authorize } from '../api/mockService';
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
              onClick={() => authorize('123', this.props.location.pathname + 'login', commons.tokenPath)}
            />
          )
        }
      </div>
    );
  }
}

export default Homepage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@gen3/ui-component/dist/components/Button';
import { tokenIsExpired } from '../api/login';
import { commonsList } from '../config';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <h1>Welcome to Gen3!</h1>
        {
          commonsList.map((commons, i) => (
            tokenIsExpired(commons.tokenPath) ?
              <Link
                key={i}
                to={{
                  pathname: "/login",
                  query: {
                    commonsPath: commons.tokenPath,
                    origin: this.props.location
                  }
                }}
              >
                <Button
                  className='homepage__login-button btn-primary-orange'
                  label={`Log into ${commons.name}`}
                />
              </Link>
            :
            null
          ))
        }
      </div>
    );
  }
}

export default Homepage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@gen3/ui-component/dist/components/Button';
import { tokenIsExpired } from '../api/login';
import './Homepage.css';

class Homepage extends Component {
  render() {
    const commonsNames = [
      'bloodPAC',
      'brain',
      'dcp',
    ]
    return (
      <div className='homepage'>
        <h1>Welcome to Gen3!</h1>
        {
          commonsNames.map((commons, i) => (
            tokenIsExpired(commons) ?
              <Link
                key={i}
                to={{
                  pathname: "/login",
                  query: {
                    commonsName: commons,
                    origin: this.props.location
                  }
                }}
              >
                <Button
                  className='homepage__login-button btn-primary-orange'
                  label={`Log into ${commons}`}
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

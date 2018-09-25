import React, { Component } from 'react';
import CommonsLogin from '@gen3/ui-component/dist/components/CommonsLogin';
import Header from '@gen3/ui-component/dist/components/Header';
import { getToken, loginRedirect } from '../api/login';
import { commonsList } from '../config';
import bhcLogo from '../images/bhc-logo.png';
import dcpLogo from '../images/dcp-logo.png';
import gen3Logo from '../images/gen3.png';
import './Homepage.css';

class Homepage extends Component {
  render() {
    const images = { bhcLogo, dcpLogo, gen3Logo };
    return (
      <div className='homepage'>
        <Header title='Welcome to Gen3' logoSrc={gen3Logo} />
        <div className='homepage__login'>
          {
            commonsList.map((commons, i) => {
              const connected = getToken(commons.tokenPath);
              return (
                <div className='homepage__login-button' key={i}>
                  <CommonsLogin
                    logoSrc={images[`${commons.tokenPath}Logo`]}
                    title={commons.name}
                    buttonTitle={connected ? 'Connected!' : 'Connect'}
                    onButtonClick={() => loginRedirect(commons, window.location.href)}
                    buttonEnabled={!connected}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Homepage;

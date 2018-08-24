import React, { Component } from 'react';
import Button from '@gen3/ui-component/dist/components/button/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Welcome to Gen3!</h1>
        <br />
        <Button className='btn-primary-orange' label='Login' />
      </div>
    );
  }
}

export default App;

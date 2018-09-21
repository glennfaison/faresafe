import React from 'react';
import { withRouter } from 'react-router-dom';

import logo from './logo.svg';
import './ErrorView.css';


let ErrorView = (props) => {
  return (
    <div className="container-fluid text-center">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <h1>Oops! We've encountered a problem.</h1>
      <h3>Please, try again</h3>
    </div>
  );
};

export default withRouter(ErrorView);
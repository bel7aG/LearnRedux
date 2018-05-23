import React, { Component } from 'react';
// import Header from './components/Header';
import './styles/main.css';
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="heading">
            <span className="heading-primary">bel7a<span>G</span></span>

          </h1>
          <h2 className="heading-secondary">Open Console</h2>
        </header>
      </div>
    );
  }
}

export { App as default, AppRouter};

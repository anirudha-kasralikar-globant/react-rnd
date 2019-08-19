// @flow
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import { routes } from '../routes';
import './App.less';

class App extends Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    return (
      <Container fluid>
        <div className="position-relative js-header-wrapper">
          <Header />
        </div>
        <div id="start-of-content" className="show-on-focus" />
        <div id="js-flash-container" />

        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Container>
    );
  }
}

export default App;

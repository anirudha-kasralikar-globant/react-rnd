// @flow

import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import * as ROUTES from '../constants/routes';
import MyIssues from './MyIssues';
import Explore from './Explore';
import HelloAsyncButton from './hello-async-button';
import HelloButton from './hello-button';
import Message from './message';
import MessageAsync from './message-async';
import CreatePost from './CreatePost';
import PostList from './PostList';

const stylesApp = {
  marginTop: 40,
};

function App() {
  return (
    <Container fluid>
      <div className="position-relative js-header-wrapper">
        <Header />
      </div>
      <div id="start-of-content" className="show-on-focus" />
      <div id="js-flash-container" />
      <Message />
      <MessageAsync />
      <HelloButton />
      <HelloAsyncButton />
      <div className="container">
        <div className="row" style={stylesApp}>
          <div className="col-md-6">
            <CreatePost />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
        </div>
      </div>
      <Switch>
        <Route path={ROUTES.ISSUES} render={() => <MyIssues />} />
        <Route path={ROUTES.EXPLORE} render={() => <Explore />} />
      </Switch>
    </Container>
  );
}

export default App;

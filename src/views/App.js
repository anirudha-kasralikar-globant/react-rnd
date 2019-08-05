// @flow

import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import * as ROUTES from '../routes/routes';
import MyIssues from './containers/MyIssues';
import Explore from './containers/Explore';
import HelloAsyncButton from './containers/hello-async-button';
import HelloButton from './containers/hello-button';
import Message from './containers/message';
import MessageAsync from './containers/message-async';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import './App.less';

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

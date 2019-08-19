// @flow
import React from 'react';
import Message from './message';
import MessageAsync from './message-async';
import HelloButton from './hello-button';
import HelloAsyncButton from './hello-async-button';

const HelloPresenter = props => {
  return (
    <React.Fragment>
      <Message />
      <MessageAsync />
      <HelloButton />
      <HelloAsyncButton />
    </React.Fragment>
  );
};

export default HelloPresenter;

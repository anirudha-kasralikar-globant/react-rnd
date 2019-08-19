// @flow
import React from 'react';
import Topics from './Topics';
import CreateTopic from './CreateTopic';

const stylesApp = {
  marginTop: 40,
};

function ManageTopicsPresenter() {
  return (
    <div className="container">
      <div className="row" style={stylesApp}>
        <div style={{ float: 'left', width: '49%' }}>
          <CreateTopic />
        </div>
        <div style={{ float: 'right', width: '49%' }}>
          <Topics />
        </div>
      </div>
    </div>
  );
}

export default ManageTopicsPresenter;

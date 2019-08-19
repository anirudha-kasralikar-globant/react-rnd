// @flow
import React from 'react';
import Posts from './Posts';
import CreatePost from './CreatePost';

const stylesApp = {
  marginTop: 40,
};

function ManagePostsPresenter() {
  return (
    <div className="container">
      <div className="row" style={stylesApp}>
        <div style={{ float: 'left', width: '49%' }}>
          <CreatePost />
        </div>
        <div style={{ float: 'right', width: '49%' }}>
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default ManagePostsPresenter;

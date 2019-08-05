// @flow

import React from 'react';
import GithubSvgLogo from '../../../../assets/images/logoHeader.svg';

function Logo() {
  return (
    <div className="Header-item d-none d-lg-flex">
      <a
        className="Header-link"
        href="https://github.com/"
        data-hotkey="g d"
        aria-label="Homepage"
        data-ga-click="Header, go to dashboard, icon:logo"
      >
        <GithubSvgLogo />
      </a>
    </div>
  );
}

export default Logo;

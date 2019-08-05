// @flow

import React from 'react';
import Logo from './Navigation/Logo';
import GlobalSearch from './Navigation/GlobalSearch';
import NavItems from './Navigation/NavItems';

function Header() {
  return (
    <header className="Header js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">
      <Logo />
      <div className="Header-item Header-item--full">
        <GlobalSearch />
        <NavItems />
      </div>
    </header>
  );
}

export default Header;

// @flow

import React from 'react';

function GlobalSearch() {
  return (
    <div
      className="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 js-site-search position-relative js-jump-to"
      role="combobox"
      aria-owns="jump-to-results"
      aria-controls="expandable"
      aria-label="Search or jump to"
      aria-haspopup="listbox"
      aria-expanded="false"
      style={{ marginRight: '10px' }}
    >
      {' '}
      Search Text Field Will Come Here..{' '}
    </div>
  );
}

export default GlobalSearch;

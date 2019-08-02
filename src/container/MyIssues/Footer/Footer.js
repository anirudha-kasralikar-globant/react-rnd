// @flow

import React from 'react';
import LogoFooter from '../../../assets/images/logoFooter.svg';

const footerLinksLeft = [
  {
    label: 'Terms',
    endpoint: 'https://github.com/site/terms',
    gaClickData: 'Footer, go to terms, text:terms',
  },
  {
    label: 'Privacy',
    endpoint: 'https://github.com/site/privacy',
    gaClickData: 'Footer, go to privacy, text:privacy',
  },
  {
    label: 'Security',
    endpoint: 'https://github.com/security',
    gaClickData: 'Footer, go to security, text:security',
  },
  {
    label: 'Status',
    endpoint: 'https://githubstatus.com/',
    gaClickData: 'Footer, go to status, text:status',
  },
  {
    label: 'Help',
    endpoint: 'https://help.github.com/',
    gaClickData: 'Footer, go to help, text:help',
  },
];

const footerLinksRight = [
  {
    label: 'Contact GitHub',
    endpoint: 'https://github.com/contact',
    gaClickData: 'Footer, go to contact, text:contact',
  },
  {
    label: 'Pricing',
    endpoint: 'https://github.com/pricing',
    gaClickData: 'Footer, go to Pricing, text:Pricing',
  },
  {
    label: 'API',
    endpoint: 'https://developer.github.com',
    gaClickData: 'Footer, go to api, text:api',
  },
  {
    label: 'Training',
    endpoint: 'https://training.github.com',
    gaClickData: 'Footer, go to training, text:training',
  },
  {
    label: 'Blog',
    endpoint: 'https://github.blog',
    gaClickData: 'Footer, go to blog, text:blog',
  },
  {
    label: 'About',
    endpoint: 'https://github.com/about',
    gaClickData: 'Footer, go to about, text:about',
  },
];

function Footer() {
  return (
    <div className="footer container-lg width-full px-3" role="contentinfo">
      <div className="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
        <ul className="list-style-none d-flex flex-wrap ">
          <li className="mr-3">
            © 2019{' '}
            <span title="0.33044s from unicorn-75ccc6548-4h2lk">GitHub</span>,
            Inc.
          </li>

          {footerLinksLeft.map(link => (
            <li className="mr-3" key={link.endpoint}>
              <a data-ga-click={link.gaClickData} href={link.endpoint}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          aria-label="Homepage"
          title="GitHub"
          className="footer-octicon d-none d-lg-block mx-lg-4"
          href="https://github.com"
        >
          <LogoFooter />
        </a>
        <ul className="list-style-none d-flex flex-wrap ">
          {footerLinksRight.map(link => (
            <li className="mr-3" key={link.endpoint}>
              <a data-ga-click={link.gaClickData} href={link.endpoint}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex flex-justify-center pb-6">
        <span className="f6 text-gray-light" />
      </div>
    </div>
  );
}

export default Footer;

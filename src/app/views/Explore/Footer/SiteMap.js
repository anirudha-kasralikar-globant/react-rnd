// @flow
import React from 'react';
import GithubIcon from '../../../../assets/images/logoSiteMap.svg';

const productLinks = [
  {
    label: 'Features',
    endpoint: 'https://github.com/features',
    gaClickData: 'Footer, go to features, text:features',
  },
  {
    label: 'Security',
    endpoint: 'https://github.com/security',
    gaClickData: 'Footer, go to security, text:security',
  },
  {
    label: 'Enterprise',
    endpoint: 'https://github.com/enterprise',
    gaClickData: 'Footer, go to enterprise, text:enterprise',
  },
  {
    label: 'Customer stories',
    endpoint: 'https://github.com/customer-stories',
    gaClickData: 'Footer, go to customer stories, text:customer stories',
  },
  {
    label: 'Pricing',
    endpoint: 'https://github.com/pricing',
    gaClickData: 'Footer, go to pricing, text:pricing',
  },
  {
    label: 'Resources',
    endpoint: 'https://resources.github.com',
    gaClickData: 'Footer, go to resources, text:resources',
  },
];
const platformLinks = [
  {
    label: 'Developer API',
    endpoint: 'https://developer.github.com',
    gaClickData: 'Footer, go to api, text:api',
  },
  {
    label: 'Partners',
    endpoint: 'http://partner.github.com/',
    gaClickData: 'Footer, go to partner, text:partner',
  },
  {
    label: 'Atom',
    endpoint: 'https://atom.io',
    gaClickData: 'Footer, go to atom, text:atom',
  },
  {
    label: 'Electron',
    endpoint: 'http://electron.atom.io/',
    gaClickData: 'Footer, go to electron, text:electron',
  },
  {
    label: 'GitHub Desktop',
    endpoint: 'https://desktop.github.com/',
    gaClickData: 'Footer, go to desktop, text:desktop',
  },
];
const supportLinks = [
  {
    label: 'Help',
    endpoint: 'https://help.github.com',
    gaClickData: 'Footer, go to help, text:help',
  },
  {
    label: 'Community Forum',
    endpoint: 'https://github.community',
    gaClickData: 'Footer, go to community, text:community',
  },
  {
    label: 'Training',
    endpoint: 'https://services.github.com/',
    gaClickData: 'Footer, go to training, text:training',
  },
  {
    label: 'Status',
    endpoint: 'https://githubstatus.com/',
    gaClickData: 'Footer, go to status, text:status',
  },
  {
    label: 'Contact GitHub',
    endpoint: 'https://github.com/contact',
    gaClickData: 'Footer, go to contact, text:contact',
  },
];
const companyLinks = [
  {
    label: 'About',
    endpoint: 'https://github.com/about',
    gaClickData: 'Footer, go to about, text:about',
  },
  {
    label: 'Blog',
    endpoint: 'https://github.blog',
    gaClickData: 'Footer, go to blog, text:blog',
  },
  {
    label: 'Careers',
    endpoint: 'https://github.com/about/careers',
    gaClickData: 'Footer, go to careers, text:careers',
  },
  {
    label: 'Press',
    endpoint: 'https://github.com/about/press',
    gaClickData: 'Footer, go to press, text:press',
  },
  {
    label: 'Shop',
    endpoint: 'https://shop.github.com',
    gaClickData: 'Footer, go to shop, text:shop',
  },
];

const siteMapLinks = [
  { title: 'Products', links: productLinks },
  { title: 'Platform', links: platformLinks },
  { title: 'Support', links: supportLinks },
  { title: 'Company', links: companyLinks },
];

function SiteMap() {
  return (
    <React.Fragment>
      <div className="col-12 col-lg-4 mb-5">
        <a
          href="https://github.com/"
          data-ga-click="Footer, go to home, text:home"
          className="text-gray-dark"
          aria-label="Go to GitHub homepage"
        >
          <GithubIcon />
        </a>
      </div>

      {siteMapLinks.map(siteMap => (
        <div key={siteMap.title} className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-lg-0 pl-lg-4">
          <h2 className="h5 mb-3 text-mono text-gray-light text-normal">{siteMap.title}</h2>
          <ul className="list-style-none text-gray f5">
            {siteMap.links.map(link => (
              <li className="lh-condensed mb-3" key={link.endpoint}>
                <a data-ga-click={link.gaClickData} href={link.endpoint} className="link-gray">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </React.Fragment>
  );
}

export default SiteMap;

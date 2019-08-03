// @flow

import React from 'react';
import TwitterIcon from '../../../assets/images/social-twitter.svg';
import FacebookIcon from '../../../assets/images/social-facebook.svg';
import YoutubeIcon from '../../../assets/images/social-youtube.svg';
import LinkedInIcon from '../../../assets/images/social-linkedin.svg';
import GithubIcon from '../../../assets/images/social-github.svg';

import SiteMap from './SiteMap';

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
];

const footerLinksRight = [
  {
    svgIcon: 'TwitterIcon',
    endpoint: 'https://twitter.com/github',
    gaClickData: 'Footer, go to Twitter, text:twitter',
    title: 'GitHub on Twitter',
  },
  {
    svgIcon: 'FacebookIcon',
    endpoint: 'https://www.facebook.com/GitHub',
    gaClickData: 'Footer, go to Facebook, text:facebook',
    title: 'GitHub on Facebook',
  },
  {
    svgIcon: 'YoutubeIcon',
    endpoint: 'https://www.youtube.com/github',
    gaClickData: 'Footer, go to YouTube, text:youtube',
    title: 'GitHub on YouTube',
  },
  {
    svgIcon: 'LinkedInIcon',
    endpoint: 'https://www.linkedin.com/company/github',
    gaClickData: 'Footer, go to Linkedin, text:linkedin',
    title: 'GitHub on Linkedin',
  },
  {
    svgIcon: 'GithubIcon',
    endpoint: 'https://github.com/github',
    // eslint-disable-next-line quotes
    gaClickData: "Footer, go to github's org, text:github",
    // eslint-disable-next-line quotes
    title: "GitHub's organization",
  },
];

const socialIcons = {
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedInIcon,
  GithubIcon,
};

function Footer() {
  return (
    <footer className="footer mt-6">
      <div className="container-xl p-responsive">
        <div className="d-flex flex-wrap py-5 mb-5">
          <SiteMap />
        </div>
      </div>
      <div className="bg-gray-light">
        <div className="container-xl p-responsive f6 py-4 d-sm-flex flex-justify-between flex-row-reverse flex-items-center">
          <ul className="list-style-none d-flex flex-items-center mb-3 mb-sm-0 lh-condensed-ultra">
            {footerLinksRight.map(link => {
              const SocialIcon = socialIcons[link.svgIcon];
              return (
                <li key={link.endpoint} className="mr-3">
                  <a
                    href={link.endpoint}
                    data-ga-click={link.gaClickData}
                    title={link.title}
                    style={{ color: '#959da5' }}
                  >
                    <SocialIcon />
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="list-style-none d-flex text-gray">
            <li className="mr-3">© 2019 GitHub, Inc.</li>

            {footerLinksLeft.map(link => (
              <li key={link.endpoint} className="mr-3">
                <a
                  href={link.endpoint}
                  data-ga-click={link.gaClickData}
                  className="link-gray"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

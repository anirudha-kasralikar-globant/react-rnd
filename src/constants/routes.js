// @flow

export const LANDING: string = '/';
export const CALCULATOR: string = '/calculator';
export const EXPLORE: string = '/explore';
export const TRENDING: string = '/trending';
export const ISSUES: string = '/issues';

// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num: ?number) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `http://localhost:3000/hellos/${num || ':num'}`;

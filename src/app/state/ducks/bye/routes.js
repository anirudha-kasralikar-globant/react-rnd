// @flow
const byeEndpointRoute = (num: ?number) => `http://localhost:3000/byes/${num || ':num'}`;
export { byeEndpointRoute as default };

// @flow
const helloEndpointRoute = (num: ?number) => `http://localhost:3000/hellos/${num || ':num'}`;
export { helloEndpointRoute as default };

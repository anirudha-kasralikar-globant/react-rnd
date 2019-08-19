// @flow
// Handle HTTP errors since fetch won't.
export default response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

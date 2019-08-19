// @flow
export const fetchPostsEndpointRoute = () => 'http://localhost:3000/posts';
export const createPostEndpointRoute = () => 'http://localhost:3000/posts';
export const deletePostEndpointRoute = (id: ?number) => `http://localhost:3000/posts/${id || ':id'}`;

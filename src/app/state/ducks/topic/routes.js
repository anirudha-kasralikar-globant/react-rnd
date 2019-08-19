// @flow
export const fetchTopicsEndpointRoute = () => 'http://localhost:3000/topics';
export const createTopicEndpointRoute = () => 'http://localhost:3000/topics';
export const deleteTopicEndpointRoute = id => `http://localhost:3000/topics/${id || ':id'}`;

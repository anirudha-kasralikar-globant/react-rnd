// @flow
export default createReducer => {
  return function(reducerMap) {
    return (state = createReducer, action) => {
      const reducer = reducerMap[action.type];
      return reducer ? reducer(state, action) : state;
    };
  };
};

// @flow

export default initialState => {
  return function(reducerMap: Object) {
    return (state: Object = initialState, action: Object) => {
      const reducer = reducerMap[action.type];
      return reducer ? reducer(state, action) : state;
    };
  };
};

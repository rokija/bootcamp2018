const SET_USER = "SET_USER";

export const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

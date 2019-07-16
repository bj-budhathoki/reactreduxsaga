import postActionTypes from "./postTypes";
const initailState = {
  fetching: false,
  posts: [],
  errors: null
};
const postReducer = (state = initailState, action) => {
  switch (action.type) {
    case postActionTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case postActionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        fetching: false,
        posts: action.payload
      };
    case postActionTypes.FETCH_POST_FAIL:
      return {
        ...state,
        fetching: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
export default postReducer;

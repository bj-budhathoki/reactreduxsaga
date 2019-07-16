import postActionsTypes from "./postTypes";

export const getPosts = () => {
  return {
    type: postActionsTypes.FETCH_POST_REQUEST
  };
};

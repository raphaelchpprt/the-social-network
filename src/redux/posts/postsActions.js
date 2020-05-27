import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  ADD_NEW_POST,
  DELETE_POST,
} from "./postsTypes";

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts,
  };
};

export const fetchPostsFailed = (error) => {
  return {
    type: FETCH_POSTS_FAILED,
    error,
  };
};

export const addNewPost = (post) => {
  return {
    type: ADD_NEW_POST,
    post,
  };
};

export const deletePost = (post) => {
  return {
    type: DELETE_POST,
    post,
  };
};

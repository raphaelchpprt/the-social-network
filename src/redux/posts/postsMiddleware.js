import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailed,
} from "./postsActions";

export const fetchPosts = ({ url }) => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "error") {
          dispatch(fetchPostsFailed(response.message));
        } else {
          dispatch(fetchPostsSuccess(response));
        }
      });
  };
};

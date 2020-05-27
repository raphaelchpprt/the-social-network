import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  ADD_NEW_POST,
  DELETE_POST,
} from "./postsTypes";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.post),
      };
    default:
      return state;
  }
};

export default postsReducer;

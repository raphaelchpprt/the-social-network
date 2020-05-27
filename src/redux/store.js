import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import postsReducer from "./posts/postsReducer";
import registrationReducer from "./registration/registrationReducer";
import loginReducer from "./login/loginReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  posts: postsReducer,
  registration: registrationReducer,
  login: loginReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

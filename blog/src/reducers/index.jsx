import { combineReducers } from "redux";
import { FetchPost } from "./FetchPost";
import { FetchUser } from "./FetchUser";

export default combineReducers({
  posts: FetchPost,
  users: FetchUser,
});

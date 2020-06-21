import jsonPlaceholderApi from "../apis/JsonPlaceholder";
import _ from "lodash";

export const fetchPostAndUser = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPost());

    //Without chain way
    // const userIds = _.uniq(_.map(getState().posts, "UserId"));
    // userIds.forEach((userId) => dispatch(fetchUser(userId)));

    _.chain(getState().posts)
      .map("userId")
      .uniq()
      .forEach((userId) => dispatch(fetchUser(userId)))
      .value();
  };
};

export const fetchPost = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholderApi.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (id) => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholderApi.get("/users/" + id);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};

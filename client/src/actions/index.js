import axios from "axios";
import { FETCH_USER, FETCH_PROFILES, SET_SELECTED } from "./types";

//
// user actions

export const fetchUser = () => async dispatch => {
  const user = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: user.data });
};

export const handleToken = token => async dispatch => {
  const user = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: user.data });
};

export const setNewUserFlag = (flag, history = null) => async dispatch => {
  const user = await axios.post("/api/new_user", { flag });

  dispatch({ type: FETCH_USER, payload: user.data });
  if (history) {
    history.push("/affinities");
  }
};

export const ejectUser = history => async dispatch => {
  await axios.delete("/api/current_user");

  dispatch({ type: FETCH_USER, payload: null });
  history.push("/");
};

//
// selection Actions

export const setPrimary = id => async dispatch => {
  const user = await axios.post("/api/profiles/set", { id });

  dispatch({ type: SET_SELECTED, payload: id });
  dispatch({ type: FETCH_USER, payload: user.data });
};

export const setSelected = id => async dispatch => {
  dispatch({ type: SET_SELECTED, payload: id });
};

//
// profile actions

export const submitProfile = (values, history) => async dispatch => {
  const response = await axios.post("/api/profiles", values),
    { user, profiles, id } = response.data;

  dispatch({ type: SET_SELECTED, payload: id });
  dispatch({ type: FETCH_PROFILES, payload: profiles });
  dispatch({ type: FETCH_USER, payload: user });
  history.push("/affinities");
};

export const removeProfile = id => async dispatch => {
  const response = await axios.delete("/api/profiles", { data: { id } }),
    { user, profiles } = response.data;

  if (profiles && profiles.length > 0) {
    dispatch({ type: SET_SELECTED, payload: user.primary });
  }

  // update the list of profiles
  dispatch({ type: FETCH_PROFILES, payload: profiles });
  // update the count of slots
  dispatch({ type: FETCH_USER, payload: user });
};

export const fetchProfiles = () => async dispatch => {
  const profiles = await axios.get("/api/profiles");

  dispatch({ type: FETCH_PROFILES, payload: profiles.data });
};

import axios from "axios";
import { FETCH_USER, FETCH_PROFILES, SET_SELECTED } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const user = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: user.data });
};

export const submitProfile = (values, history) => async dispatch => {
  const user = await axios.post("/api/profiles", values);

  history.push("/affinities");
  dispatch({ type: FETCH_USER, payload: user.data });
};

export const removeProfile = id => async dispatch => {
  const user = await axios.delete("/api/profiles", { data: { id } }),
    profiles = await axios.get("/api/profiles");

  dispatch({ type: FETCH_USER, payload: user.data });

  dispatch({ type: FETCH_PROFILES, payload: profiles.data });
};

export const fetchProfiles = () => async dispatch => {
  const profiles = await axios.get("/api/profiles");

  dispatch({ type: FETCH_PROFILES, payload: profiles.data });
};

export const setSelected = id => async dispatch => {
  dispatch({ type: SET_SELECTED, payload: id });
};

export const setPrimary = id => async dispatch => {

  const profiles = await axios.post("/api/profiles/set", { id });

  dispatch({ type: FETCH_USER, payload: profiles.data });
};

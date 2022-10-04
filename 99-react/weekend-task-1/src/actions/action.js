import axios from "axios";

export const searchUniAction = (name) => {
  return async (dispatch) => {
    dispatch({ type: "SEARCH_START" });
    await axios
      .get("http://universities.hipolabs.com/search?name=" + name)
      .then((res) => {
        dispatch({
          type: "SEARCH_SUCCES",
          payload: res.data,
        });
      })
      .catch((err) => dispatch({ type: "SEARCH_ERROR", payload: err }));
  };
};

import { getPayload } from "../utils";
import axios from "axios";

export const getData = (name) => {
  const type = "listData";
  //   const link = "http://universities.hipolabs.com/search?name";
  //   const link = "http://universities.hipolabs.com/search?name" + name;
  //   console.log("name", link);

  return async (dispatch) => {
    dispatch({ type: type, payload: getPayload("pending", null) });
    await axios
      .get("http://universities.hipolabs.com/search?name" + name)
      .then((res) => {
        dispatch({
          type: type,
          payload: getPayload("success", res.data),
        });
      })
      .catch((err) =>
        dispatch({ type: type, payload: getPayload("error", err) })
      );
  };
};

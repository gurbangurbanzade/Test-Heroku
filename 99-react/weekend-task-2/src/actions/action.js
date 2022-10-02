import { getPayload } from "../utils";
import axios from "axios";

export const getData = () => {
  const type = "listData";

  return async (dispatch) => {
    dispatch({ type: type, payload: getPayload("pending", null) });
    await axios
      .get("http://ergast.com/api/f1/drivers.json")
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

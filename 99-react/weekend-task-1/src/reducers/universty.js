// export const universty = (
//   listOfData = { data: null, status: "idle", error: null },
//   action
// ) => {
//   return action.type === "listData" ? action.payload : listOfData;
// };

const initialState = {
  loading: false,
  data: null,
  error: null,
  state: "",
};

export const universtyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_START":
      return { ...state, loading: true };
    case "SEARCH_SUCCES":
      return { ...state, loading: false, data: action.payload };
    case "SEARCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "INPUT_VALUE":
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

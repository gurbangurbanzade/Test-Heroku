export const universty = (
  listOfData = { data: null, status: "idle", error: null },
  action
) => {
  return action.type === "listData" ? action.payload : listOfData;
};

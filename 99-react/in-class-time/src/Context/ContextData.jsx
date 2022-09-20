import { createContext, useState } from "react";

export const ContextData = createContext(null);

export const ContextDataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  //"public" values
  const values = {
    data,
    setData,
  };

  return <ContextData.Provider value={values}>{children}</ContextData.Provider>;
};

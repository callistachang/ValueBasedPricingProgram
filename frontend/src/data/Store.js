import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const stateGet = window.localStorage.getItem("state");

const initialState = JSON.parse(localStorage.getItem("state")) || {
  USPPrices: ["100"],
  USPs: ["usp1"],
  competitor: "",
  costPrice: "",
  product: "",
  subproduct: "",
  targetSellingPrice: "",
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;

import React, { createContext, useReducer, useState } from "react";
import { initialState, reducer } from "./Reducer";
export const GuitarContext = createContext();

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function add_item(item) {
    dispatch({ type: "ADD_ITEM", payload: item });
    update_total();
  }

  function remove_item(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    update_total();
  }

  function update_total() {
    dispatch({ type: "UPDATE_TOTAL" });
  }

  return (
    <GuitarContext.Provider value={{ add_item, remove_item, state }}>
      {children}
    </GuitarContext.Provider>
  );
}

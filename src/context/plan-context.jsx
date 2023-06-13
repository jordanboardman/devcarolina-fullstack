import React, { createContext, useState } from "react";
// import { DATA } from "../data";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const [planItems, setPlanItems] = useState([]);

  // const addToPlan = (itemId) => {
  //   setPlanItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  // };

  // Matt's
  const addToPlan = (newItem) => {
    setPlanItems((prev) => [...prev, newItem]);
  };

  // const removeFromPlan = (itemId) => {
  //   setPlanItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // };

  // Matt's
  const removeFromPlan = (itemToRemove) => {
    setPlanItems((prev) => prev.filter((item) => item.id !== itemToRemove.id));
  };

  const contextValue = { planItems, addToPlan, removeFromPlan };

  console.log(planItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

import React, { createContext, useState } from "react";
// import { DATA } from "../data";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const [planItems, setPlanItems] = useState([]);

  const addToPlan = (newItem) => {
    setPlanItems((prev) => [...prev, newItem]);
  };

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

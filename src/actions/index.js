export const addToPlan = (book) => {
  return { type: "ADD_TO_PLAN", payload: book };
};

export const removeItem = (id) => {
  return { type: "REMOVE_ITEM", payload: id };
};

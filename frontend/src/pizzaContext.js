import React from "react";

export const initialState = {
  pizza: {
    crust: "",
    size: "",
    hasSauce: true,
    topping: "",
  },
  handleSelectChange: () => {},
  handleCheckboxToggle: () => {},
};

const Context = React.createContext(initialState);

export default Context;

import React from "react";

export const StoreContext = React.createContext('')


export const Providers = (props:any) => {
  return (
    <StoreContext.Provider value={props.value}>
      {props.children}
    </StoreContext.Provider>
  );
}
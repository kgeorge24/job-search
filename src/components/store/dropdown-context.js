import { createContext, useState } from "react";

export const DropdownContext = createContext({
  isActive: "",
  setIsActive: () => {},
  clearClickHandler: () => {},
});

const DropdownContextProvider = (props) => {
  const [isActive, setIsActive] = useState("");

  const clearClickHandler = () => {
    console.log("I work");
  };

  
  return (
    <DropdownContext.Provider
      value={{
        isActive: isActive,
        setIsActive: setIsActive,
        clearClickHandler: clearClickHandler,
      }}
    >
      {props.children}
    </DropdownContext.Provider>
  );
};

export default DropdownContextProvider;

import { createContext, useState } from "react";

export const DropdownContext = createContext({
  isActive: "",
  setIsActive: () => {},
});

const DropdownContextProvider = (props) => {
  const [isActive, setIsActive] = useState("");

  return (
    <DropdownContext.Provider
      value={{
        isActive: isActive,
        setIsActive: setIsActive,
      }}
    >
      {props.children}
    </DropdownContext.Provider>
  );
};

export default DropdownContextProvider;

import React, { useState } from "react";

export const CasesTypeContext = React.createContext();

export const CasesProvider = ({ children }) => {
  const [casesType, setCasesType] = useState("cases");
  return (
    <CasesTypeContext.Provider value={{ cases: [casesType, setCasesType] }}>
      {children}
    </CasesTypeContext.Provider>
  );
};

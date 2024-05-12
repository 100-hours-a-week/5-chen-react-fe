import React, { createContext, useContext, useState } from 'react';

const ValidationContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [allValid, setAllValid] = useState(false);

  function check(valid) {
    setAllValid(allValid && valid);
  }

  return (
    <ValidationContext.Provider value={{ allValid, check }}>
      {children}
    </ValidationContext.Provider>
  );
};

export const useValidation = () => useContext(ValidationContext);

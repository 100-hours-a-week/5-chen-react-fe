import React, { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userInfo) => {
    setUser(userInfo); // 로그인 처리
  };

  const logout = () => {
    setUser(null); // 로그아웃 처리
  };

  const userMemo = useMemo(() => {
    return { user, login, logout }
  }, [user])

  return (
    <AuthContext.Provider value={userMemo}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

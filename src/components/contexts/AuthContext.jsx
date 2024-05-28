import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fetchGET, fetchPOST } from "components/FetchFromServer";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userInfo) => {
    setUser(userInfo); // 로그인 처리
  };

  const logout = () => {
    setUser(null); // 로그아웃 처리
    fetchPOST("/logout");
    navigate("/");
  };

  const initAuth = () => {
    console.log("ME");
    fetchGET("/users/me")
      .then(data => login(data.user))
      .catch(reason => navigate("/login"))
  }

  const userMemo = useMemo(() => {
    return { user, login, logout, initAuth }
  }, [user])

  useEffect(initAuth, [])

  return (
    <AuthContext.Provider value={userMemo}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

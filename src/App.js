import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import { LoginPage } from "components/pages/LoginPage";
import { AuthProvider } from "components/contexts/AuthContext";
import GlobalStyle from "css/GlobalStyle";
import SignUpPage from "components/pages/SignUpPage";

function App() {
  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

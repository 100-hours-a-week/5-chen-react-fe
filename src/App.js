import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import { LoginPage } from "components/pages/LoginPage";
import { AuthProvider } from "components/contexts/AuthContext";
import GlobalStyle from "css/GlobalStyle";
import SignUpPage from "components/pages/SignUpPage";
import { PostListPage } from "components/pages/PostListPage";
import { PostWritePage } from "components/pages/PostWritePage";
import { PostEditPage } from "components/pages/PostEditPage";
import UserEditPage from "components/pages/UserEditPage";

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
            <Route path="/posts" element={<PostListPage/>}/>
            <Route path="/posts/write" element={<PostWritePage/>}/>
            <Route path="/posts/edit" element={<PostEditPage/>}/>
            <Route path="/me/edit" element={<UserEditPage/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

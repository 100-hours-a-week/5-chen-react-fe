import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "components/pages/LoginPage";
import { AuthProvider } from "components/contexts/AuthContext";
import GlobalStyle from "css/GlobalStyle";
import SignUpPage from "components/pages/SignUpPage";
import { PostListPage } from "components/pages/PostListPage";
import { PostWritePage } from "components/pages/PostWritePage";
import { PostEditPage } from "components/pages/PostEditPage";
import UserEditPage from "components/pages/UserEditPage";
import PasswordEditPage from "components/pages/PasswordEditPage";
import PostDetailPage from "components/pages/PostDetailPage";
import TestRootPage from "components/pages/TestRootPage";

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<TestRootPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/posts" element={<PostListPage/>}/>
            <Route path="/posts/detail" element={<PostDetailPage/>}/>
            <Route path="/posts/write" element={<PostWritePage/>}/>
            <Route path="/posts/edit" element={<PostEditPage/>}/>
            <Route path="/me/edit" element={<UserEditPage/>}/>
            <Route path="/me/edit-password" element={<PasswordEditPage/>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

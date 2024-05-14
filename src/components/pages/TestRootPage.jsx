import { Link } from "react-router-dom";

function TestRootPage() {
  const style = {
    fontSize: "32px",
    margin: "10px 10px",
  }
  return <>
    <Link to="/login" style={style}>로그인</Link>
    <Link to="/signup" style={style}>회원가입</Link>
    <Link to="/posts" style={style}>글 목록</Link>
    <Link to="/posts/detail" style={style}>글 상세</Link>
    <Link to="/posts/write" style={style}>글 쓰기</Link>
    <Link to="/posts/edit" style={style}>글 수정</Link>
    <Link to="/me/edit" style={style}>회원정보 수정</Link>
    <Link to="/me/edit-password" style={style}>비밀번호 수정</Link>
  </>
}

export default TestRootPage;
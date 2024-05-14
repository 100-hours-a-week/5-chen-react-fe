import { Link } from "react-router-dom";
import SmallLayout from "components/layouts/SmallLayout";
import LongButton from "components/buttons/LongButton";

function TestRootPage() {
  const style = {
    fontSize: "32px",
    margin: "10px 10px",
  }
  return <SmallLayout>
    <Link to="/login" style={style}><LongButton>로그인</LongButton></Link>
    <Link to="/signup" style={style}><LongButton>회원가입</LongButton></Link>
    <Link to="/posts" style={style}><LongButton>글 목록</LongButton></Link>
    <Link to="/posts/detail" style={style}><LongButton>글 상세</LongButton></Link>
    <Link to="/posts/write" style={style}><LongButton>글 쓰기</LongButton></Link>
    <Link to="/posts/edit" style={style}><LongButton>글 수정</LongButton></Link>
    <Link to="/me/edit" style={style}><LongButton>회원정보 수정</LongButton></Link>
    <Link to="/me/edit-password" style={style}><LongButton>비밀번호 수정</LongButton></Link>
  </SmallLayout>
}

export default TestRootPage;
import styles from "css/LoginPage.module.css"
import { Link, useNavigate } from "react-router-dom";
import SmallLayout from "components/layouts/SmallLayout.jsx";
import InputBox from "components/inputs/InputBox.jsx";
import { MakeInputForm } from "components/MakeInputForm.jsx";
import { emptyOrUndefined } from "util.js";
import LongButton from "components/buttons/LongButton";
import { useAuth } from "components/contexts/AuthContext";
import { useMemo, useState } from "react";


export function LoginPage() {
  let { user, login } = useAuth();
  let navigate = useNavigate();

  const [values, setValues] = useState({})
  const validateFunctions = {
    email: useMemo(() => {
      if (emptyOrUndefined(values.email)) {
        return "이메일을 입력해주세요.";
      } else {
        return null;
      }
    }, [values.email]),
    password: useMemo(() => {
      if (emptyOrUndefined(values.password)) {
        return "비밀번호를 입력해주세요.";
      } else {
        return null;
      }
    }, [values.password])
  }

  const { errorBag, BlurHandlerFactory, validateAll } = MakeInputForm(validateFunctions, values, setValues)

  const handleLogin = () => {
    let valid = validateAll();
    if (!valid) {
      return;
    }
    login({
      id: 1,
      nickname: "DummyUser",
      profile_image: "/images/default.png"
    });
    navigate("/posts")
  }


  return (
    <SmallLayout>
      <h1 className={styles.pageTitle}>로그인</h1>
      <form className={styles.loginForm}>
        <InputBox
          type="text" name="email"
          subject="이메일"
          placeholderText="이메일을 입력하세요"

          errorBag={errorBag}
          BlurHandlerFactory={BlurHandlerFactory}
        />
        <InputBox
          type="password" name="password"
          subject="비밀번호"
          placeholderText="비밀번호를 입력하세요"

          errorBag={errorBag}
          BlurHandlerFactory={BlurHandlerFactory}
        />
      </form>
      <LongButton handleOnclick={handleLogin}>로그인</LongButton>
      <Link to="/signup">회원가입</Link>
    </SmallLayout>
  );
}

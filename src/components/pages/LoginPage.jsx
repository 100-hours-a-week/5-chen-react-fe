import styles from "css/LoginPage.module.css"
import { Link, useNavigate } from "react-router-dom";
import SmallLayout from "components/layouts/SmallLayout.jsx";
import InputBox from "components/inputs/InputBox.jsx";
import { MakeInputForm } from "components/MakeInputForm.jsx";
import { emptyOrUndefined } from "components/util";
import LongButton from "components/buttons/LongButton";
import { useAuth } from "components/contexts/AuthContext";
import { useMemo, useState } from "react";
import { fetchPOST } from "../FetchFromServer";


export function LoginPage() {
  let { initAuth } = useAuth();
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

  const { errorBag, appendError, BlurHandlerFactory, validateAll } = MakeInputForm(validateFunctions, values, setValues)

  const handleLogin = () => {
    let valid = validateAll();
    if (!valid) {
      return;
    }
    fetchPOST("/login", { email: values.email, password: values.password })
      .then(data => {
        initAuth()
        navigate("/posts")
      }).catch(reason => {
      console.warn("로그인 실패 : " + reason);
      appendError("email", '이메일 또는 비밀번호가 다릅니다.')
    })
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

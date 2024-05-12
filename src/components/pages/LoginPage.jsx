import styles from "css/LoginPage.module.css"
import { Link } from "react-router-dom";
import SmallLayout from "components/layouts/SmallLayout.jsx";
import InputBox from "components/inputs/InputBox.jsx";
import { MakeInputForm } from "components/MakeInputForm.jsx";
import { emptyOrUndefined } from "util.js";


export function LoginPage() {
  const validateFunctions = {
    email: (value) => {
      if (value === "" || value === undefined) {
        return "이메일을 입력해주세요.";
      } else {
        return null;
      }
    },
    password: (value) => {
      if (emptyOrUndefined(value)) {
        return "비밀번호를 입력해주세요.";
      } else {
        return null;
      }
    }
  }

  const { values, errorBag, BlurHandlerFactory, validateAll } = MakeInputForm(validateFunctions)


  return (
    <SmallLayout>
      <form>
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
      <button onClick={validateAll}>로그인</button>
      <Link to="/signup">회원가입</Link>
    </SmallLayout>
  );
}

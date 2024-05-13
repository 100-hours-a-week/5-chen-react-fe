import styles from "css/SignUpPage.module.css"
import SmallLayout from "components/layouts/SmallLayout";
import { MakeInputForm } from "components/MakeInputForm";
import InputBox from "components/inputs/InputBox";
import { emptyOrUndefined } from "components/util";
import LongButton from "components/buttons/LongButton";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [values, setValues] = useState({})

  const validateFunctions = {
    profile_image: useMemo(() => {
      console.log("validate profile_image")
      console.log(values.profile_image)
      if (emptyOrUndefined(values.profile_image)) {
        return "프로필 사진을 추가해주세요."
      }
      return null;
    }, [values.profile_image]),
    email: useMemo(() => {
      console.log("validate email")
      if (emptyOrUndefined(values.email)) {
        return "프로필 사진을 추가해주세요."
      }
      return null;
    }, [values.email]),
    password: useMemo(() => {
      console.log("validate pw")
      if (emptyOrUndefined(values.password)) {
        return "프로필 사진을 추가해주세요."
      }
      return null;
    }, [values.password]),
    password_confirmation: useMemo(() => {
      console.log("validate pw_c")
      if (emptyOrUndefined(values.password_confirmation)) {
        return "프로필 사진을 추가해주세요."
      }
      return null;
    }, [values.password_confirmation]),
    nickname: useMemo(() => {
      console.log("validate nickname")
      if (emptyOrUndefined(values.nickname)) {
        return "프로필 사진을 추가해주세요."
      }
      return null;
    }, [values.nickname]),
  }
  let { errorBag, BlurHandlerFactory, validateAll, } = MakeInputForm(validateFunctions, values, setValues);

  return <SmallLayout>
    <h1 className={styles.pageTitle}>회원가입</h1>
    <form className={styles.signUpForm}>
      <InputBox
        type="profile_image" name="profile_image"
        subject="프로필 사진"
        BlurHandlerFactory={BlurHandlerFactory}
        errorBag={errorBag}
      >
      </InputBox>
      <InputBox
        type="text" name="email"
        subject="이메일"
        placeholderText="이메일을 입력하세요."
        BlurHandlerFactory={BlurHandlerFactory}
        errorBag={errorBag}
      >
      </InputBox>
      <InputBox
        type="password" name="password"
        subject="비밀번호"
        placeholderText="비밀번호를 입력하세요."
        BlurHandlerFactory={BlurHandlerFactory}
        errorBag={errorBag}
      >
      </InputBox>
      <InputBox
        type="password" name="password_confirmation"
        subject="비밀번호 확인"
        placeholderText="비밀번호를 한번 더 입력하세요."
        BlurHandlerFactory={BlurHandlerFactory}
        errorBag={errorBag}
      >
      </InputBox>
      <InputBox
        type="text" name="nickname"
        subject="닉네임"
        placeholderText="닉네임을 입력하세요."
        BlurHandlerFactory={BlurHandlerFactory}
        errorBag={errorBag}
      >
      </InputBox>
    </form>
    <LongButton handleOnclick={validateAll}>회원가입</LongButton>
    <Link to="/login">로그인하러 가기</Link>
  </SmallLayout>;
}

export default SignUpPage;
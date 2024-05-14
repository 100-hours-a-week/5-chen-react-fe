import SmallLayout from "components/layouts/SmallLayout";
import InputBox from "components/inputs/InputBox";
import { useMemo, useState } from "react";
import { emptyOrUndefined } from "components/util";
import { MakeInputForm } from "components/MakeInputForm";
import LongButton from "components/buttons/LongButton";
import styles from "css/PasswordEditPage.module.css";

function PasswordEditPage() {
  const [values, setValues] = useState({})

  const validateFunctions = {
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
  }
  let { errorBag, BlurHandlerFactory, validateAll, } = MakeInputForm(validateFunctions, values, setValues);
  return <SmallLayout>
    <h1 className={styles.pageTitle}>비밀번호 수정</h1>
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
    <LongButton>비밀번호 수정</LongButton>
  </SmallLayout>
}

export default PasswordEditPage;

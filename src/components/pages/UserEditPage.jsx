import styles from "css/UserEditPage.module.css";
import SmallLayout from "components/layouts/SmallLayout";
import InputBox from "components/inputs/InputBox";
import { useMemo, useState } from "react";
import { emptyOrUndefined } from "components/util";
import { MakeInputForm } from "components/MakeInputForm";
import LongButton from "components/buttons/LongButton";
import { Link, useNavigate } from "react-router-dom";
import ShortButton from "components/buttons/ShortButton";
import { UserEmail, UserImageInput } from "components/inputs/UserInputs";

function UserEditPage() {
  let navigate = useNavigate();
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
    nickname: useMemo(() => {
      console.log("validate nickname")
      if (emptyOrUndefined(values.nickname)) {
        return "닉네임을 수정해주세요."
      }
      return null;
    }, [values.nickname]),
  }
  let { errorBag, BlurHandlerFactory, validateAll, } = MakeInputForm(validateFunctions, values, setValues);

  return <SmallLayout>
    <h1 className={styles.pageTitle}>회원정보 수정</h1>
    <UserImageInput
      type="profile_image" name="profile_image"
      subject="프로필 사진*"
      BlurHandlerFactory={BlurHandlerFactory}
      errorBag={errorBag}
      image="/images/default.png"
    />
    <UserEmail subject="이메일" name="email" email="zz3n.dev@gmail.com"/>
    <InputBox
      type="text" name="nickname"
      subject="닉네임*"
      placeholderText="닉네임을 입력하세요."
      BlurHandlerFactory={BlurHandlerFactory}
      errorBag={errorBag}
    />
    <LongButton handleOnclick={validateAll}>수정하기</LongButton>
    <Link>회원 탈퇴</Link>
    <ShortButton handleOnClick={() => navigate("/posts")} className={styles.editDone}>수정 완료</ShortButton>
  </SmallLayout>
}

export default UserEditPage;
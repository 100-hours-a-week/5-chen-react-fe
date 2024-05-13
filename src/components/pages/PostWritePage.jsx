import styles from "css/PostWritePage.module.css"
import BigLayout from "components/layouts/BigLayout";
import LongButton from "components/buttons/LongButton";
import { MakeInputForm } from "components/MakeInputForm";
import { useMemo, useState } from "react";
import { emptyOrUndefined } from "components/util";
import { PostContentInput, PostImageInput, PostTitleInput } from "components/inputs/PostInputs";

export function PostWritePage() {
  const [values, setValues] = useState({});
  const validateFunctions = {
    title: useMemo(() => {
      if (emptyOrUndefined(values.title)) {
        return "제목을 입력해주세요.";
      } else {
        return null;
      }
    }, [values.title]),
    content: useMemo(() => {
      if (emptyOrUndefined(values.content)) {
        return "내용을 입력해주세요.";
      } else {
        return null;
      }
    }, [values.content]),
    image: useMemo(() => {
      if (emptyOrUndefined(values.image)) {
        return "이미지를 추가해주세요.";
      } else {
        return null;
      }
    }, [values.image])
  }

  let { errorBag, validateAll, BlurHandlerFactory } = MakeInputForm(validateFunctions, values, setValues);

  return <BigLayout>
    <h1 className={styles.pageTitle}>게시글 작성</h1>
    <PostTitleInput
      name="title"
      subject="제목*"
      placeholderText="제목을 입력해주세요. (최대 26글자)"
      BlurHandlerFactory={BlurHandlerFactory}
      errorBag={errorBag}
    />
    <PostContentInput
      name="content"
      subject="내용*"
      placeholderText="내용을 입력해주세요."
      BlurHandlerFactory={BlurHandlerFactory}
      errorBag={errorBag}
    />
    <PostImageInput
      name="image"
      subject="이미지*"
      BlurHandlerFactory={BlurHandlerFactory}
      errorBag={errorBag}
    />
    <LongButton handleOnclick={validateAll}>게시글 작성</LongButton>
  </BigLayout>
}
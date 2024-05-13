import styles from "css/InputBox.module.css";


let maker = (subject, name, errorBag, PostInput) => {
  const PostLabel = <label htmlFor={name} className={`${styles.postLabel} ${styles.postPadding}`}>
    {subject}
  </label>;

  const PostHelperText = <p className={`${styles.helperText} ${styles.postPadding}`}>
    {errorBag[name]}
  </p>;

  return (
    <div className={styles.container}>
      {PostLabel}
      {PostInput}
      {PostHelperText}
    </div>
  )
};

export const PostTitleInput = ({ subject, name, placeholderText, BlurHandlerFactory, errorBag }) => {
  const titleInput = <input
    id={name}
    type="text" name={name}
    placeholder={placeholderText}
    className={`${styles.postTitleInput} ${styles.postInput} ${styles.postPadding}`}
    onBlur={BlurHandlerFactory(name)}
  />

  return maker(subject, name, errorBag, titleInput)
}

export const PostContentInput = ({ subject, name, placeholderText, BlurHandlerFactory, errorBag }) => {
  const contentInput = <textarea
    id={name} name={name}
    placeholder={placeholderText}
    className={`${styles.postContentInput} ${styles.postInput} ${styles.postPadding}`}
    onBlur={BlurHandlerFactory(name)}
  ></textarea>

  return maker(subject, name, errorBag, contentInput);
}

export const PostImageInput = ({ subject, name, BlurHandlerFactory, errorBag }) => {
  const imageInput = <input
    id={name}
    type="file" name={name}
    className={`${styles.postPadding}`}
    onChange={BlurHandlerFactory(name)}
  />;

  return maker(subject, name, errorBag, imageInput);
}


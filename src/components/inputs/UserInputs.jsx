import styles from "css/InputBox.module.css";


let maker = (subject, name, errorBag, UserInput) => {
  const UserLabel = <label htmlFor={name} className={`${styles.postLabel}`}>
    {subject}
  </label>;

  const HelperText = <p className={`${styles.helperText}`}>
    {errorBag[name]}
  </p>;

  return (
    <div className={styles.container}>
      {UserLabel}
      {UserInput}
      {HelperText}
    </div>
  )
};
export const UserEmail = ({ subject, name, email }) => {
  return <div className={styles.container}>
    <label htmlFor={name} className={`${styles.postLabel}`}>
      {subject}
    </label>
    <p>{email}</p>
  </div>
}

export const UserImageInput = ({ subject, name, BlurHandlerFactory, errorBag, image }) => {
  console.log(image)
  const imageInput = <>

    <label className={styles.circleBox} htmlFor={name}>
      <div className={styles.circle} style={{ background: `url(${image}) center`, backgroundSize: 'cover' }}>
        <span className={styles.userProfileChange}>변경</span>
      </div>
    </label>
    <input
      id={name}
      type="file" name={name}
      className={styles.hiddenImageInput}
      onChange={BlurHandlerFactory}
    />
  </>;

  return maker(subject, name, errorBag, imageInput);
}


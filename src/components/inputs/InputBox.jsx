import styles from "css/InputBox.module.css"

function InputBox({ subject, type, name, placeholderText, BlurHandlerFactory, errorBag }) {
  const handleBlur = BlurHandlerFactory(name);
  const SubjectLabel = <label htmlFor={name} className={styles.inputLabel}>
    {subject}
  </label>;

  const HelperText = <p className={styles.helperText}>
    {errorBag[name]}
  </p>;


  if (type === "profile_image") {
    type = "file"

    return (
      <div className={styles.container}>
        {SubjectLabel}
        <div className={styles.circleBox}>
          <label htmlFor={name} className={styles.circle}>
            <span className={styles.ltCross}/>
            <span className={styles.rtCross}/>
            <span className={styles.lbCross}/>
            <span className={styles.rbCross}/>
          </label>
        </div>
        <input
          id={name}
          type={type} name={name}
          className={styles.profileImageInput}
          onChange={handleBlur}
        />
        {HelperText}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {SubjectLabel}
      <input
        id={name}
        type={type} name={name}
        placeholder={placeholderText}
        className={styles.inputHere}
        onBlur={handleBlur}
      />
      {HelperText}
    </div>
  )

}

export default InputBox;
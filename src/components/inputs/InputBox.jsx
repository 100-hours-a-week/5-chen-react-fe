import styles from "css/InputBox.module.css"
import { useMemo } from "react";

function InputBox({subject, type, name, placeholderText, BlurHandlerFactory, errorBag}) {
  const handleBlur = BlurHandlerFactory(name);

  const SubjectLabel = useMemo(
    () => <label htmlFor={name} className={styles.inputLabel}>{subject}</label>,
    [subject, name]
  );
  const HelperText = useMemo(() => <p className={styles.helperText}>{errorBag[name]}</p>, [errorBag, name]);

  if (type === "profile_image") {
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
          type="file" name={name}
          className={styles.hiddenImageInput}
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
        className={styles.inputDefault}
        onBlur={handleBlur}
      />
      {HelperText}
    </div>
  )

}

export default InputBox;
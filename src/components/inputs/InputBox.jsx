import styles from "css/InputBox.module.css"

function InputBox({ subject, type, name, placeholderText, BlurHandlerFactory, errorBag }) {
  const handleBlur = BlurHandlerFactory(name);
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.inputLabel}>
        {subject}
      </label>
      <input
        type={type} name={name}
        placeholder={placeholderText}
        className={styles.inputHere}
        onBlur={handleBlur}
      />
      <p className={styles.helperText}>
        {errorBag[name]}
      </p>
    </div>
  )

}

export default InputBox;
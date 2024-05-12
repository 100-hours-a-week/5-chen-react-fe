function InputBox({ subject, type, name, placeholderText, BlurHandlerFactory, errorBag }) {
  const handleBlur = BlurHandlerFactory(name);
  return (
    <>
      <label htmlFor={name}>
        {subject}
      </label>
      <input
        type={type} name={name}
        placeholder={placeholderText}
        className="default-input"
        onBlur={handleBlur}
      />
      <p className="helper-text">
        {errorBag[name]}
      </p>
    </>
  )

}

export default InputBox;
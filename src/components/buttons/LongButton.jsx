import styles from "css/LongButton.module.css"

function LongButton({ handleOnclick, children }) {
  return <button onClick={handleOnclick} className={styles.longButton}>
    {children}
  </button>
}

export default LongButton;
import styles from "css/LongButton.module.css"

function LongButton({ onclick, children }) {
  return <button onClick={onclick} className={styles.longButton}>
    {children}
  </button>
}

export default LongButton;
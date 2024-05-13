import styles from "css/ShortButton.module.css"

function ShortButton({ onclick, children }) {
  return <button onClick={onclick} className={styles.shortButton}>
    {children}
  </button>
}

export default ShortButton;
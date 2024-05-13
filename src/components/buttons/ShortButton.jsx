import styles from "css/ShortButton.module.css"

function ShortButton({ onclick, children, className }) {
  return <button onClick={onclick} className={`${styles.shortButton} ${className}`}>
    {children}
  </button>
}

export default ShortButton;
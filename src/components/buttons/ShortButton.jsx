import styles from "css/ShortButton.module.css"

function ShortButton({ onClick, children, className }) {
  return <button onClick={onClick} className={`${styles.shortButton} ${className}`}>
    {children}
  </button>
}

export default ShortButton;
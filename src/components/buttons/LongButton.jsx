import styles from "css/LongButton.module.css"
import { emptyOrUndefined } from "util.js";

function LongButton({ handleOnclick, className, children }) {
  if (emptyOrUndefined(className)) {
    className = "";
  }
  return <button onClick={handleOnclick} className={`${styles.longButton} ${className}`}>
    {children}
  </button>
}

export default LongButton;
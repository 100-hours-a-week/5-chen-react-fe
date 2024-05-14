import styles from "css/ShortButton.module.css"
import { emptyOrUndefined } from "components/util";

function ShortButton({ handleOnClick, children, className }) {
  if (emptyOrUndefined(className)) {
    className = "";
  }
  return <button onClick={handleOnClick} className={`${styles.shortButton} ${className}`}>
    {children}
  </button>
}

export default ShortButton;
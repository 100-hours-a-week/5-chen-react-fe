import styles from "css/BigLayout.module.css";
import { emptyOrUndefined } from "components/util";

function BigLayout({ className, children }) {
  if (emptyOrUndefined(className)) {
    className = "";
  }

  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  )
}

export default BigLayout;
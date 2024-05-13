import styles from "css/SmallLayout.module.css";
import { emptyOrUndefined } from "util";

function SmallLayout({ className, children }) {
  if (emptyOrUndefined(className)) {
    className = "";
  }

  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  )
}

export default SmallLayout;
import styles from "css/SmallLayout.module.css";
import Header from "components/Header"
import { emptyOrUndefined } from "components/util";

function SmallLayout({className, children}) {
  if (emptyOrUndefined(className)) {
    className = "";
  }

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <div className={`${styles.container} ${className}`}>
          {children}
        </div>
      </div>
    </>
  )
}

export default SmallLayout;
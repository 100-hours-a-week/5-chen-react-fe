import styles from "css/BigLayout.module.css";
import { emptyOrUndefined } from "components/util";
import Header from "components/Header";

function BigLayout({className, children}) {
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

export default BigLayout;
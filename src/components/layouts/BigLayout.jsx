import styles from "css/BigLayout.module.css";

function BigLayout({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default BigLayout;
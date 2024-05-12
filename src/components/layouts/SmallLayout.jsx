import styles from "css/SmallLayout.module.css";

function SmallLayout({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default SmallLayout;
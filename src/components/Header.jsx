import styles from "css/Header.module.css";
import { Link } from "react-router-dom";
import ProfileImage from "components/ProfileImage";
import { useAuth } from "./contexts/AuthContext";

function Header({ hasBack = true }) {
  const { user } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {hasBack && <p className={styles.back} id={styles.back}><span>&lt;</span></p>}
        <Link to="/" className={styles.title}>
          아무말 대잔치
        </Link>
        {user && <ProfileImage hasDropDown={true} src={user.profile_image}/>}
      </div>
    </div>
  );
}

export default Header;
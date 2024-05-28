import styles from "css/Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import ProfileImage from "components/ProfileImage";
import { useAuth } from "./contexts/AuthContext";
import { useMemo } from "react";

function Header() {
  const { user } = useAuth();
  const navigate = useNavigate()
  const profileImageMemo = useMemo(() => {
    if (user) {
      return <ProfileImage hasDropDown={true} src={user.profile_image}/>
    }
    return <></>
  }, [user]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p onClick={() => navigate(-1)} className={styles.back} id={styles.back}><span>&lt;</span></p>
        <Link to="/" className={styles.title}>
          아무말 대잔치
        </Link>
        {profileImageMemo}
      </div>
    </div>
  );
}

export default Header;
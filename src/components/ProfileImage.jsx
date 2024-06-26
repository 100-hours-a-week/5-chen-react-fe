import styles from "css/ProfileImage.module.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { emptyOrUndefined } from "components/util";
import { useAuth } from "./contexts/AuthContext";

function ProfileImage({className, hasDropDown = false, src = "/images/default.png"}) {
  if (emptyOrUndefined(className)) {
    className = "";
  }
  const {logout} = useAuth();
  const [showDropDown, setShowDropDown] = useState(false)
  const imageElement = useRef();
  const dropdownElement = useRef();

  useEffect(() => {
    const removeDropDown = (e) => {
      if (!dropdownElement.current.contains(e.target) && !imageElement.current.contains(e.target)) {
        setShowDropDown(false);
      }
    };
    if (showDropDown) {
      document.addEventListener("mousedown", removeDropDown)
    }
    return () => {
      document.removeEventListener("mousedown", removeDropDown);
    };
  }, [showDropDown])

  const handleDropdown = (e) => {
    if (!hasDropDown) return;
    setShowDropDown(!showDropDown);
    e.preventDefault()
  }

  const dropdown = (
    <div className={styles.profile_menu} ref={dropdownElement}>
      <Link to="/me/edit">회원정보수정</Link>
      <Link to="/me/edit-password">비밀번호수정</Link>
      <p onClick={logout}>로그아웃</p>
    </div>)

  return (
    <div className={`${styles.profile_img_container} ${className}`}>
      <img src={src}
           ref={imageElement}
           alt="profile"
           onClick={handleDropdown}
           className={styles.profile_img}
      />
      {showDropDown && dropdown}
    </div>
  );
}

export default ProfileImage;
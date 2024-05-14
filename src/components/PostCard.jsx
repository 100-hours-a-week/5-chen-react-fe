import styles from "css/PostCard.module.css"
import ProfileImage from "components/ProfileImage";
import { Link } from "react-router-dom";
import { formatDateTime } from "components/util";

export function PostCard({ post }) {
  const title = post.title;
  const author = post.author
  const comment_count = post.comment_count
  const view_count = post.view_count
  const created_at = formatDateTime(post.created_at)
  return <Link to="/posts/detail" className={styles.post}>
    <div className={styles.postTop}>
      <h1 className={styles.postTitle}>{title}</h1>
      <div className={styles.postMetadata}>
        <div className={styles.postCountsContainer}>
          <span className={styles.postCounts}>댓글 {comment_count}</span>
          <span className={styles.postCounts}>조회수 {view_count}</span>
        </div>
        <time className={styles.postCreatedAt}>{created_at}</time>
      </div>
    </div>
    <div className={styles.postBottom}>
      <ProfileImage className={styles.profileImage} hasDropDown={false} src="/images/default.png"></ProfileImage>
      <span>{author.nickname}</span>
    </div>
  </Link>;
}
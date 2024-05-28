import styles from "css/PostListPage.module.css";
import BigLayout from "components/layouts/BigLayout";
import ShortButton from "components/buttons/ShortButton";
import { PostCard } from "components/PostCard";
import { useNavigate } from "react-router-dom";

export function PostListPage() {
  let navigate = useNavigate();
  const post = {
    title: "제목 제목 제목 123",
    author: {id: 1, nickname: "닉네임", profile_image: "/images/default.png"},
    comment_count: 1234,
    view_count: 4321,
    created_at: new Date(),
  }
  return (
    <BigLayout>
      <div className={styles.pageTitle}>
        <h1>안녕하세요,</h1>
        <h1>아무말 대잔치 <span className={styles.titleBold}>게시판</span> 입니다.</h1>
      </div>
      <ShortButton handleOnClick={() => navigate("/posts/write")} className={styles.postWriteButton}>게시글
        작성</ShortButton>
      <div className={styles.postsContainer}>

      </div>
      <PostCard post={post}/>
      <PostCard post={post}/>
      <PostCard post={post}/>
      <PostCard post={post}/><PostCard post={post}/><PostCard post={post}/>
      <PostCard post={post}/><PostCard post={post}/><PostCard post={post}/><PostCard post={post}/><PostCard
      post={post}/><PostCard post={post}/>

    </BigLayout>
  )
}
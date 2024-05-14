import styles from "css/PostDetailPage.module.css"
import BigLayout from "components/layouts/BigLayout";
import ProfileImage from "components/ProfileImage";
import ShortButton from "components/buttons/ShortButton";

function PostDetailPage() {

  return <BigLayout>
    <h1 className={styles.postTitle}>제목</h1>
    <div className={styles.postMetaData}>
      <div className={styles.authorContainer}>
        <ProfileImage src="/images/default.png"/>
        <span className={styles.author}>이름</span>
        <span className={styles.createdAt}>2021-20-33 22:34:33</span>
      </div>
      <div className={styles.actionBox}>
        <button className={styles.actions}>수정</button>
        <button className={styles.actions}>삭제</button>
      </div>
    </div>
    <div className={styles.postMain}>
      <img src="/images/default.png" alt="" className={styles.postImage}/>
      <div className={styles.postContent}>
        zhsxpscma
      </div>

      <div className={styles.countContainer}>
        <div className={styles.counts}>
          <span className={styles.font20700}>123</span>
          <span className={styles.font16700}>조회수</span>
        </div>
        <div className={styles.counts}>
          <span className={styles.font20700}>123</span>
          <span className={styles.font16700}>댓글</span>
        </div>
      </div>
    </div>
    <div className={styles.commentArea}>
      <div className={styles.commentWrite}>
        <textarea className={styles.commentInput}
                  name="" id="" cols="30" rows="10"
                  placeholder="댓글을 남겨주세요!"></textarea>
        <ShortButton className={styles.commentButton}>댓글 등록</ShortButton>
      </div>
      <div className={styles.commentContainer}>
        <div className={styles.comments}>
          <div>
            <div className={styles.commentMetaData}>
              <div className={styles.authorContainer}>
                <ProfileImage src="/images/default.png"/>
                <span className={styles.author}>이름</span>
                <span className={styles.createdAt}>2021-20-33 22:34:33</span>
              </div>
            </div>
            <div className={styles.commentContent}>
              댓글 내용
            </div>
          </div>
          <div className={styles.actionBox}>
            <button className={styles.actions}>수정</button>
            <button className={styles.actions}>삭제</button>
          </div>
        </div>
        <div className={styles.comments}>
          <div>
            <div className={styles.commentMetaData}>
              <div className={styles.authorContainer}>
                <ProfileImage src="/images/default.png"/>
                <span className={styles.author}>이름</span>
                <span className={styles.createdAt}>2021-20-33 22:34:33</span>
              </div>
            </div>
            <div className={styles.commentContent}>
              댓글 내용
            </div>
          </div>
          <div className={styles.actionBox}>
            <button className={styles.actions}>수정</button>
            <button className={styles.actions}>삭제</button>
          </div>
        </div>
        <div className={styles.comments}>
          <div>
            <div className={styles.commentMetaData}>
              <div className={styles.authorContainer}>
                <ProfileImage src="/images/default.png"/>
                <span className={styles.author}>이름</span>
                <span className={styles.createdAt}>2021-20-33 22:34:33</span>
              </div>
            </div>
            <div className={styles.commentContent}>
              댓글 내용
            </div>
          </div>
          <div className={styles.actionBox}>
            <button className={styles.actions}>수정</button>
            <button className={styles.actions}>삭제</button>
          </div>
        </div>
      </div>
    </div>


  </BigLayout>
}

export default PostDetailPage;
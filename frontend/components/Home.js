import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import FormTweet from "./FormTweet";
import Publication from "./Publication";
import TrendList from "./TrendList";
import Hashtag from "./Hashtag";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPublications } from "../reducers/publications";
import { userLogout } from "../reducers/user";
import { useRouter } from "next/router";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const publicationList = useSelector(
    (state) => state.publication.value.publications
  );
  const router = useRouter();

  const handleUserLogout = () => {
    dispatch(userLogout());
    router.push("/");
  };

  // console.log(publicationList)

  useEffect(() => {
    fetch("http://localhost:3000/publications")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(getAllPublications(data.publicationList));
      });
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftSide}>
        <FontAwesomeIcon className={styles.twitterLogo} icon={faTwitter} />
        <div className={styles.profileContainer}>
          <div className={styles.profileWrapper}>
            <img
              className={styles.profilePic}
              src="/icon-profile-pic.png"
              alt="profilePic"
            />
            <div className={styles.userDataContainer}>
              <p className={styles.profileName}>{user.firstName}</p>
              <p className={styles.profileUsername}>{user.userName}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleUserLogout()}
            className={styles.btnLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className={styles.mainContent}>
        <FormTweet />
        <Hashtag />
        {publicationList.map((publication, i) => {
          return (
            <Publication
              key={i}
              publicationMessage={publication.message}
              publicationFirstName={publication.userId.firstName}
              publicationUserName={publication.userId.firstName}
              publicationDate={publication.createdAt}
            />
          );
        })}
      </div>

      <div className={styles.rightSide}>
        <TrendList />
      </div>
    </div>
  );
}

import styles from "../styles/Publication.module.css";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Publication(props) {
  return (
    <>
      <div className={styles.publicationContainer}>
        <div className={styles.headerPublication}>
          <img
            className={styles.profilePicPublication}
            src="icon-profile-pic.png"
            alt="profile pic"
          />
          <p className={styles.publicationFirstName}>
            {props.publicationFirstName}
          </p>
          <p className={styles.publicationUserName}>
            @{props.publicationUserName}
          </p>
          <p className={styles.publicationDate}>
            <span>-</span> {props.publicationDate}
          </p>
        </div>
        <div className={styles.publicationMessage}>
          <p>{props.publicationMessage}</p>
        </div>
        <div className={styles.footerMessage}>
          <div className={styles.likeContainerLiked}>
            <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} />
            <span className={styles.likeCounterPublication}>1</span>
          </div>

          <FontAwesomeIcon className={styles.trashIcon} icon={faTrash} />
        </div>
      </div>
    </>
  );
}

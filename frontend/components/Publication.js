import styles from "../styles/Publication.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { deletePublication } from "../reducers/publications";

import moment from "moment";
import 'moment/locale/fr';

export default function Publication(props) {

    const dispatch = useDispatch();

    const handleDeletePublication = () => {

        fetch('http://localhost:3000/publications', {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({publicationId: props.publicationId})
        })
        .then(res => res.json())
        .then(res => {
            dispatch(deletePublication({publicationId: props.publicationId}));
        })
    }

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
                        <span>-</span> {moment(props.publicationDate).fromNow()}
                    </p>
                </div>
                <div className={styles.publicationMessage}>
                    <p>{props.publicationMessage}</p>
                </div>
                <div className={styles.footerMessage}>
                    <div className={styles.likeContainerLiked}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={styles.heartIcon}
                        />
                        <span className={styles.likeCounterPublication}>1</span>
                    </div>

                    <FontAwesomeIcon onClick={() => handleDeletePublication(props.publicationId)}
                        className={styles.trashIcon}
                        icon={faTrash}
                    />
                </div>
            </div>
        </>
    );
}

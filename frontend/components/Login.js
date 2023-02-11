import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import SignUp from "./SignUp";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalSignUp, toggleModalSignIn } from "../reducers/loginModals";
import SignIn from "./SignIn";

export default function LoginPage() {
    const signUpModal = useSelector(
        (state) => state.loginModals.value.signUpModal
    );
    const signInModal = useSelector(
        (state) => state.loginModals.value.signInModal
    );

    const dispatch = useDispatch();

    const handleToggleModalSignUp = () => {
        dispatch(toggleModalSignUp());
    };

    const handleToggleModalSignIn = () => {
        dispatch(toggleModalSignIn());
    };

    return (
        <>
            <div className={styles.loginContainer}>
                <div className={styles.leftSide}></div>
                <div className={styles.rightSide}>
                    <FontAwesomeIcon
                        className={styles.twitterLogo}
                        icon={faTwitter}
                    />
                    <h1 className={styles.title}>See what's<br/> happening</h1>
                    <h3 className={styles.callToActionMsg}>
                        Join Hackatweet today.
                    </h3>
                    <button
                        type="button"
                        onClick={() => handleToggleModalSignUp()}
                        className={`${styles.btnGlobalStyle} ${styles.signupBtn}`}
                    >
                        Sign up
                    </button>
                    <p className={styles.alreadyAccountLink}>
                        Already have an account?
                    </p>
                    <button
                        type="button"
                        onClick={() => handleToggleModalSignIn()}
                        className={`${styles.btnGlobalStyle} ${styles.signinBtn}`}
                    >
                        Sign in
                    </button>
                </div>
                {signUpModal ? <SignUp /> : ""}
                {signInModal ? <SignIn /> : ""}
            </div>
        </>
    );
}

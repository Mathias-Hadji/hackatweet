import styles from "../styles/SignUp.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { updateUserData } from "../reducers/user";

import { useDispatch } from "react-redux";
import { toggleModalSignUp } from "../reducers/loginModals";
import { useState } from "react";

import { useRouter } from "next/router";

export default function Signup() {
    const router = useRouter();

    const [inputFirstName, setInputFirstName] = useState("");
    const [inputUserName, setInputUserName] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const dispatch = useDispatch();

    const handleToggleModalSignUp = () => {
        dispatch(toggleModalSignUp());
    };

    const handleSignUp = () => {
        const user = {
            firstName: inputFirstName,
            userName: inputUserName,
            password: inputPassword,
        };

        fetch("http://localhost:3000/users/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setInputFirstName("");
                setInputUserName("");
                setInputPassword("");
                if (data.result) {
                    dispatch(
                        updateUserData({
                            userId: data.userId,
                            userName: data.userName,
                            firstName: data.firstName,
                            token: data.token,
                        })
                    );
                    router.push("/home");
                }
            });
    };

    return (
        <>
            <div className={styles.signUpContainer}>
                <div className={styles.signUpCard}>
                    <FontAwesomeIcon
                        onClick={() => handleToggleModalSignUp()}
                        className={styles.closeIcon}
                        icon={faXmark}
                    />
                    <FontAwesomeIcon
                        className={styles.twitterLogo}
                        icon={faTwitter}
                    />
                    <h3 className={styles.title}>
                        Create your hackatweet account
                    </h3>

                    <form className={styles.signupForm}>
                        <input
                            onChange={(e) => setInputFirstName(e.target.value)}
                            className={styles.inputForm}
                            value={inputFirstName}
                            type="text"
                            placeholder="Firstname"
                        />
                        <input
                            onChange={(e) => setInputUserName(e.target.value)}
                            className={styles.inputForm}
                            value={inputUserName}
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            onChange={(e) => setInputPassword(e.target.value)}
                            className={styles.inputForm}
                            value={inputPassword}
                            type="password"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            className={styles.btnSignUp}
                            onClick={() => handleSignUp()}
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

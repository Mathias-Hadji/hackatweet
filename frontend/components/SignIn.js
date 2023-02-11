import styles from "../styles/SignIn.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { toggleModalSignIn } from "../reducers/loginModals";
import { useState } from "react";

import { useRouter } from "next/router";
import { updateUserData } from "../reducers/user";

export default function SignIn() {
  const router = useRouter();

  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const dispatch = useDispatch();

  const handleToggleModalSignIn = () => {
    dispatch(toggleModalSignIn());
  };

  const handleSignIn = () => {
    const user = {
      userName: inputUserName,
      password: inputPassword,
    };

    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInputUserName("");
        setInputPassword("");
        if (data.result) {
          console.log(data.firstName);
          dispatch(
            updateUserData({
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
            onClick={() => {
              handleToggleModalSignIn();
            }}
            className={styles.closeIcon}
            icon={faXmark}
          />
          <FontAwesomeIcon className={styles.twitterLogo} icon={faTwitter} />
          <h3 className={styles.title}>Connect to Hackatweet</h3>

          <form className={styles.signupForm}>
            <input
              onChange={(e) => setInputUserName(e.target.value)}
              value={inputUserName}
              className={styles.inputForm}
              type="text"
              placeholder="Username"
            />
            <input
              onChange={(e) => setInputPassword(e.target.value)}
              value={inputPassword}
              className={styles.inputForm}
              type="text"
              placeholder="Password"
            />
            <button
              type="button"
              className={styles.btnSignUp}
              onClick={() => handleSignIn()}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

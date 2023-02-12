import { useState } from "react";
import styles from "../styles/FormTweet.module.css";

import { useSelector, useDispatch } from 'react-redux';

import { addNewPublication } from "../reducers/publications";

export default function FormTweet() {
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user.value);

    const [inputMessage, setInputMessage] = useState('');



    const handleCreatePublication = () => {

        if(inputMessage.length <= 280){

            const publication = {
                userId: user.userId,
                message: inputMessage
                // token: token,
            };
    
            fetch("http://localhost:3000/publications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(publication),
            })
                .then((res) => res.json())
                .then((data) => {
                    dispatch(addNewPublication(data.publication))
                    setInputMessage('');
                });
        }
    }

    return (
        <>
            <h1 className={styles.title}>Home</h1>
            <div className={styles.containerNewTweet}>
                <form>
                    <textarea value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}
                        className={styles.inputTweet}
                        placeholder="What's up?"
                    ></textarea>
                    <div className={styles.footerForm}>
                        {inputMessage.length <= 280 ? <p className={styles.counterCharTweet}>{inputMessage.length}/280</p> : <p className={styles.counterCharTweetOver}>{inputMessage.length}/280</p>}
                        
                        <button onClick={() => handleCreatePublication()} type="button" className={styles.btnPublishTweet}>
                            Tweet
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

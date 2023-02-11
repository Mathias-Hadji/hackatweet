import { useState } from "react";
import styles from "../styles/Hashtag.module.css";

export default function Hashtag() {
    const [inputHashtag, setInputHashtag] = useState("#hackatweet");
    const [isToggle, setIsToggle] = useState(false);

    return (
        <>
            {isToggle ? (
                <>
                    <h1 className={styles.title}>Hashtag</h1>
                    <div className={styles.containerHashtag}>
                        <form>
                            <input
                                onChange={(e) =>
                                    setInputHashtag(e.target.value)
                                }
                                className={styles.inputHashtag}
                                type="text"
                                value={inputHashtag}
                            />
                        </form>
                    </div>
                </>
            ) : (
                ""
            )}
        </>
    );
}

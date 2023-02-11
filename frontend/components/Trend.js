import styles from '../styles/Trend.module.css'

export default function Trend() {
    return (
        <>
            <div className={styles.trendWrapper}>
                <p className={styles.trendName}>#hackatweet</p>
                <p className={styles.numberOfTweets}>2 Tweets</p>
            </div>
        </>
    );
}

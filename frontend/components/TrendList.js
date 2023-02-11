import styles from "../styles/TrendList.module.css";
import Trend from "./Trend";

export default function TrendList() {
    return (
        <>
            <h1 className={styles.title}>Trends</h1>
            <div className={styles.trendsContainer}>
                <Trend />
                <Trend />
                <Trend />
            </div>
        </>
    );
}

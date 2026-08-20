import { Link } from "react-router-dom";
import styles from "./GalleryHeader.module.css";
import { modelName } from "../data/modelInfo";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                {modelName}
            </Link>
            <Link to="/" className={styles.link}>
                Back to Home
            </Link>
        </header>
    )
}
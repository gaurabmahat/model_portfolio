import { Link } from "react-router-dom";
import styles from "./GalleryHeader.module.css";
import { modelName } from "../data/modelInfo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                {modelName}
            </Link>
            <LanguageSwitcher />
            <Link to="/" className={styles.link}>
                {t("galleryHeader.backToHome")}
            </Link>
        </header>
    )
}
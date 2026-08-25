import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: "en" | "fi") => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <div className={styles.switcher}>
            <button
                onClick={() => changeLanguage("en")}
                className={i18n.language === "en" ? styles.active : ""}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage("fi")}
                className={i18n.language === "fi" ? styles.active : ""}
            >
                FI
            </button>
        </div>
    )
}

export default LanguageSwitcher;
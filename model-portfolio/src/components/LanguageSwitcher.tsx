import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LANGUAGES = [
    { code: "en", flag: "gb", label: "English" },
    { code: "fi", flag: "fi", label: "Suomi" },
] as const;

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: "en" | "fi") => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <div className={styles.switcher}>
            {LANGUAGES.map((language) => (
                <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`${styles.flagButton} ${i18n.language === language.code ? styles.active : ""}`}
                    aria-label={`Switch to ${language.label}`}
                    aria-pressed={i18n.language === language.code}
                    title={language.label}
                >
                    <span className={`fi fi-${language.flag} ${styles.flagIcon}`} />
                </button>
            ))}
        </div>
    )
}

export default LanguageSwitcher;
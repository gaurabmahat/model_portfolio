import { Link } from "react-router-dom";
import { navItems } from "../data/navItems";
import styles from "./Header.module.css";
import { modelName } from "../data/modelInfo";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation();
    
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    }

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo} onClick={closeMenu}>
                {modelName}
            </Link>
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
                <LanguageSwitcher />
                {navItems.map((navItem) =>
                    navItem.type === "route" ? (
                        <Link key={t(navItem.label)} to={navItem.href} className={styles.navLink} onClick={closeMenu}>
                            {t(navItem.label)}
                        </Link>
                    ) : (
                        <button
                            key={t(navItem.label)}
                            className={styles.navLink}
                            onClick={() => scrollToSection(navItem.href)}
                        >
                            {t(navItem.label)}
                        </button>
                    )
                )}
            </nav>
            <button
                className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    )
}
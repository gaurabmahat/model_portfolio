import { Link } from "react-router-dom";
import { navItems } from "../data/navItems";
import styles from "./Header.module.css";
import { modelName } from "../data/modelInfo";
import { useState } from "react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    
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
                {navItems.map((item) =>
                    item.type === "route" ? (
                        <Link key={item.label} to={item.href} className={styles.navLink} onClick={closeMenu}>
                            {item.label}
                        </Link>
                    ) : (
                        <button
                            key={item.label}
                            className={styles.navLink}
                            onClick={() => scrollToSection(item.href)}
                        >
                            {item.label}
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
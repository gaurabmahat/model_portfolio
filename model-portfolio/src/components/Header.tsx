import { Link } from "react-router-dom";
import { navItems } from "../data/navItems";
import styles from "./Header.module.css";
import { modelName } from "../data/modelInfo";

export default function Header() {
    
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                {modelName}
            </Link>
            <nav className={styles.nav}>
                {navItems.map((item) =>
                    item.type === "route" ? (
                        <Link key={item.label} to={item.href} className={styles.navLink}>
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
        </header>
    )
}
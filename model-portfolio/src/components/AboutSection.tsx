import { FaInstagram, FaTiktok } from "react-icons/fa";
import { bio, stats, ModelContact,SocialMediaInfo } from "../data/modelInfo";
import styles from "./AboutSection.module.css";

const icons = {
    instagram: FaInstagram,
    tiktok: FaTiktok,
}

const AboutSection = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.inner}>
                <h2 className={styles.heading}>
                    About
                </h2>
                <div className={styles.bio}>
                    {bio.map((paragraph, i) => (
                        <p key={i} className={styles.bioRow}>
                            {paragraph}
                        </p>
                    ))}
                </div>
                <dl className={styles.statRow}>
                    {stats.map((stat) => (
                        <div key={stat.label} className={styles.stat}>
                            <dt className={styles.statLabel}>
                                {stat.label}
                            </dt>
                            <dd className={styles.statValue}>
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>

                <ul className={styles.contactList}>
                    {ModelContact.map((contact) => (
                        <li key={contact.label} className={styles.contactItem}>
                            <span className={styles.contactLabel}>{contact.label}</span>
                            {contact.href ? (
                                <a
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.contactValue}
                                >
                                    {contact.value}
                                </a>
                            ) : (
                                <span className={styles.contactValue}>{contact.value}</span> 
                            )}
                        </li>
                    ))}
                </ul>

                <ul className={styles.socialList}>
                    {SocialMediaInfo.map((socialMedia) => {
                        const Icon = icons[socialMedia.icon as keyof typeof icons];
                        return (
                            <li key={socialMedia.label}>
                                <a 
                                    href={socialMedia.href}
                                    className={styles.socialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {Icon && <Icon className={styles.socialIcon}/>}
                                    <span className={styles.socialHandle}>{socialMedia.value}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default AboutSection;
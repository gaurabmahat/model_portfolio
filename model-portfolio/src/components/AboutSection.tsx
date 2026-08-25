import { FaInstagram, FaTiktok } from "react-icons/fa";
import { bio, stats, ModelContact,SocialMediaInfo } from "../data/modelInfo";
import styles from "./AboutSection.module.css";
import { useTranslation } from "react-i18next";
import React from "react";

const icons = {
    instagram: FaInstagram,
    tiktok: FaTiktok,
}

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className={styles.about}>
            <div className={styles.inner}>
                <h2 className={styles.heading}>
                    {t("about.sectionTitle")}
                </h2>
                <div className={styles.bio}>
                    {bio.map((paragraph, i) => (
                        <p key={i} className={styles.bioRow}>
                            {t(paragraph)}
                        </p>
                    ))}
                </div>
                <dl className={styles.statRow}>
                    {stats.map((stat) => (
                        <div key={stat.label} className={styles.stat}>
                            <dt className={styles.statLabel}>
                                {t(stat.label)}
                            </dt>
                            <dd className={styles.statValue}>
                                {t(stat.value)}
                            </dd>
                        </div>
                    ))}
                </dl>

                <ul className={styles.contactList}>
                    {ModelContact.map((contact) => (
                        <li key={contact.label} className={styles.contactItem}>
                            <span className={styles.contactLabel}>{t(contact.label)}</span>
                            {Array.isArray(contact.value) ? (
                                <span className={styles.contactValue}>
                                    {contact.value.map((lang, index) => (
                                        <React.Fragment key={lang.language}>
                                            {lang.language} ({t(lang.languageLevel)})
                                            {index < contact.value.length - 1 ? ", " : ""}
                                        </React.Fragment>
                                    ))}
                                </span>
                            ) : contact.href ? (
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
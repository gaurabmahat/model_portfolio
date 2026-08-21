import { bio, stats } from "../data/modelInfo";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.inner}>
                <h2 className={styles.heading}>
                    About
                </h2>
                <p className={styles.bio}>
                    {bio}
                </p>
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
            </div>
        </section>
    )
}

export default AboutSection;
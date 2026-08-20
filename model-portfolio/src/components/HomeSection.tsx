import { modelName, homeImage } from "../data/modelInfo"
import styles from "./HomeSection.module.css"

const HomeSection = () => {
    return (
        <section id="home" className={styles.home}>
            <div className={styles.imageWrapper}>
                <img src={homeImage} alt={modelName} className={styles.image} />
            </div>
            <div className={styles.nameWrapper}>
                <h1 className={styles.name}>
                    {modelName}
                </h1>
            </div>
        </section>
    )
}

export default HomeSection;
import { Link } from "react-router-dom";
import { photos } from "../data/photosSectionPhotos";
import styles from "./PhotosSection.module.css";

const PhotosSection = () => {
    return (
        <section id="photos" className={styles.photos}>
            <h2 className={styles.heading}>Photos</h2>
            <div className={styles.grid}>
                {photos.map((photo) => (
                    <div key={photo.id} className={styles.card}>
                        <img src={photo.url} alt={photo.alt} className={styles.image} loading="lazy" />
                    </div>
                ))}
            </div>
            <Link to="/gallery" className={styles.viewAll}>
                View Full Gallery
            </Link>
        </section>
    )
}

export default PhotosSection;
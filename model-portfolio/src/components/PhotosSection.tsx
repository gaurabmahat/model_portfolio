import { Link } from "react-router-dom";
import { fetchPhotoSectionPhotos, type Photo } from "../data/fetchCloudinaryPhotos";
import styles from "./PhotosSection.module.css";
import { useEffect, useState } from "react";

type Status = "loading" | "loaded" | "error";

const PhotosSection = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [status, setStatus] = useState<Status>("loading");

    useEffect(() => {
        fetchPhotoSectionPhotos()
            .then((data) => {
                setPhotos(data);
                setStatus("loaded")
            })
            .catch (() => {
                setStatus("error")
            })
    }, []);

    return (
        <section id="photos" className={styles.photos}>
            <h2 className={styles.heading}>Photos</h2>
            <div className={styles.grid}>
                {status === "loading" && <p>Loading photos...</p>}
                {status === "error" && <p>Couldn't load the photos. Please try again later.</p>}
                {status === "loaded" &&
                photos.map((photo) => (
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
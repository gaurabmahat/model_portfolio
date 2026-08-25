import { Link } from "react-router-dom";
import { fetchPhotoSectionPhotos, type Photo } from "../data/fetchCloudinaryPhotos";
import styles from "./PhotosSection.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Status = "loading" | "loaded" | "error";

const PhotosSection = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [status, setStatus] = useState<Status>("loading");
    const { t } = useTranslation();

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
            <h2 className={styles.heading}>{t("photos.sectionTitle")}</h2>
            <div className={styles.grid}>
                {status === "loading" && <p>{t("photos.errors.loading")}</p>}
                {status === "error" && <p>{t("photos.errors.loadingError")}</p>}
                {status === "loaded" &&
                photos.map((photo) => (
                    <div key={photo.id} className={styles.card}>
                        <img src={photo.url} alt={photo.alt} className={styles.image} loading="lazy" />
                    </div>
                ))}
            </div>
            <Link to="/gallery" className={styles.viewAll}>
                {t("photos.viewAllGalleryLink")}
            </Link>
        </section>
    )
}

export default PhotosSection;
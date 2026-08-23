import { useEffect, useState } from "react";
import GalleryHeader from "../components/GalleryHeader";
import { type Photo, fetchGalleryPhotos } from "../data/fetchCloudinaryPhotos";
import styles from "./GalleryPage.module.css";
import PhotoCard from "../components/PhotoCard";

type Status = "loading" | "loaded" | "error";

export default function GalleryPage() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [status, setStatus] = useState<Status>("loading");

    useEffect(() => {
        fetchGalleryPhotos()
            .then ((data) => {
                setPhotos(data);
                setStatus("loaded");
            })
            .catch (() => {
                setStatus("error");
            })
    }, []);

    return (
        <div>
            <GalleryHeader />
            <main className={styles.gallery}>
                {status === "loading" && <p>Loading photos...</p>}
                {status === "error" && <p>Couldn't load the gallery. Please try again later.</p>}
                {status === "loaded" &&
                photos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </main>
        </div>
    )
}
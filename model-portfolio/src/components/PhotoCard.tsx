import type { Photo } from "../data/fetchCloudinaryPhotos";
import styles from "./PhotoCard.module.css";

interface PhotoCardProps {
    photo: Photo;
    onClick?: (photo: Photo) => void;
}

const PhotoCard = ({ photo, onClick }: PhotoCardProps) => {
    return (
        <div className={styles.card} onClick={() => onClick?.(photo)}>
            <img src={photo.url} alt={photo.alt} className={styles.image} loading="lazy" />
        </div>
    )
}

export default PhotoCard;
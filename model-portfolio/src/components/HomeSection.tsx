import { useEffect, useState } from "react"
import { modelName } from "../data/modelInfo"
import styles from "./HomeSection.module.css"
import { fetchHomePagePhoto, type Photo } from "../data/fetchCloudinaryPhotos"

type Status = "loading" | "loaded" | "error";

const HomeSection = () => {
    const [photo, setPhoto] = useState<Photo>();
    const [status, setStatus] = useState<Status>("loading");

    useEffect(() => {
        fetchHomePagePhoto()
            .then((data) => {
                setPhoto(data);
                setStatus("loaded")
            })
            .catch (() => {
                setStatus("error")
            })
    }, [])
    return (
        <section id="home" className={styles.home}>
            <div className={styles.imageWrapper}>
                {status === "loading" && <p>Loading photos...</p>}
                {status === "error" && <p>Couldn't load the photo. Please try again later.</p>}
                {status === "loaded" &&
                    <img src={photo?.url} alt={photo?.alt} className={styles.image} />
                }
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
import GalleryHeader from "../components/GalleryHeader";

export default function GalleryPage() {
    return (
        <div>
            <GalleryHeader />
            <main style={{ paddingTop: "var(--header-height)" }}>
                <h1>Gallery Page</h1>
            </main>
        </div>
    )
}
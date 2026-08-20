import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import PhotosSection from "../components/PhotosSection";

export default function HomePage() {
    return (
        <div>
            <Header />
            <main style={{ paddingTop: "var(--header-height)" }}>
                <HomeSection />
                <PhotosSection />
                <section id="about" style={{ minHeight: "100vh"}}><h1>About</h1></section>
                <section id="contact" style={{ minHeight: "100vh"}}><h1>Contact</h1></section>
            </main>
        </div>
    )
}
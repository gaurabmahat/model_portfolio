import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import PhotosSection from "../components/PhotosSection";
import AboutSection from "../components/AboutSection";

export default function HomePage() {
    return (
        <div>
            <Header />
            <main style={{ paddingTop: "var(--header-height)" }}>
                <HomeSection />
                <PhotosSection />
                <AboutSection />
                <section id="contact" style={{ minHeight: "100vh"}}><h1>Contact</h1></section>
            </main>
        </div>
    )
}
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import PhotosSection from "../components/PhotosSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
    return (
        <div>
            <Header />
            <main style={{ paddingTop: "var(--header-height)" }}>
                <HomeSection />
                <PhotosSection />
                <AboutSection />
                <ContactSection />
            </main>
        </div>
    )
}
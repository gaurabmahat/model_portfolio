import Header from "../components/Header";
import HomeSection from "../components/HomeSection";

export default function HomePage() {
    return (
        <div>
            <Header />
            <main style={{ paddingTop: "var(--header-height)" }}>
                <HomeSection />
                <section id="photos" style={{ minHeight: "100vh"}}><h1>Photos</h1></section>
                <section id="about" style={{ minHeight: "100vh"}}><h1>About</h1></section>
                <section id="contact" style={{ minHeight: "100vh"}}><h1>Contact</h1></section>
            </main>
        </div>
    )
}
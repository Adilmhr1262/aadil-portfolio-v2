import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Research from "@/components/Research";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="border-y border-line bg-paper-deep/50">
          <Profile />
        </div>
        <Research />
        <div className="border-y border-line bg-paper-deep/50">
          <Work />
        </div>
        <Experience />
        <div className="bg-ink">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

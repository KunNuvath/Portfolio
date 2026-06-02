import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import ProjectsSection from "@/components/Projects";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home () {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />
 
      <div id="home">
        <Herosection />
      </div>
 
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
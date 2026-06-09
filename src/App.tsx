import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import GrowingForest from "./components/GrowingForest";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-pine min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <GrowingForest />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  );
}
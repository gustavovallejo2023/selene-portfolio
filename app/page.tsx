import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />

      <WhatsappButton />
    </>
  );
}

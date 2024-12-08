import About from "@/sections/About";
import Contact from "@/sections/Contact/Contact";
import Experiences from "@/sections/Experiences/Experiences";
import Hero from "@/sections/Hero/Hero";
import MarqueeSection from "@/sections/MarqueeSection";
import Projects from "@/sections/Projects";
import Navbar from "@/sections/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <main>
        <section className="mb-0 h-[70vh]">
          <Hero />
        </section>
        <section>
          <Navbar />
        </section>
        <section>
          <MarqueeSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experiences">
          <Experiences />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

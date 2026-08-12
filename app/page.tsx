import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Mentorship from "@/components/Mentorship";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Projects />
      <Writing />
      <Mentorship />
      <Stack />
      <About />
      <Contact />
      <Footer />
      <ScrollReveal />
    </main>
  );
}

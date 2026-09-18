import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Jali from "@/components/Jali";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Story from "@/components/Story";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Jali />
      <Gallery />
      <Story />
      <Menu />
      <Reviews />
      <Contact />
    </main>
  );
}

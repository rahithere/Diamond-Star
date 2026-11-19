import WhyChooseUs from "@/components/pages/chooseUs";
import Contact from "@/components/pages/contact";
import Gallery from "@/components/pages/gallery";
import Hero from "@/components/pages/hero";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Gallery />
      <Contact />
    </>
  );
}

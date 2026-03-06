import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Marquee from "@/components/sections/Marquee";
import DualBrand from "@/components/sections/DualBrand";
import Services from "@/components/sections/Services";
import Booking from "@/components/sections/Booking";
import Team from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Marquee />
      <DualBrand />
      <Services />
      <Booking />
      <Team />
      <Gallery />
      <Contact />
    </>
  );
}

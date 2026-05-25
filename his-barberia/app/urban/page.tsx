import LocationHero from "@/components/sections/LocationHero";
import LocationServices from "@/components/sections/LocationServices";
import LocationBooking from "@/components/sections/LocationBooking";
import Haircuts from "@/components/sections/Haircuts";
import LocationContact from "@/components/sections/LocationContact";

export const metadata = {
  title: "HIS Barbería Urban — Barbería & Peluquería en Madrid",
  description: "HIS Barbería Urban: barbería y peluquería contemporánea en Malasaña, Madrid. Fades, tapers y los estilos más modernos de la ciudad.",
};

export default function UrbanPage() {
  return (
    <>
      <LocationHero brand="urban" />
      <LocationServices brand="urban" />
      <LocationBooking brand="urban" />
      <Haircuts brand="urban" />
      <LocationContact brand="urban" />
    </>
  );
}

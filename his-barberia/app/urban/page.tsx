import LocationHero from "@/components/sections/LocationHero";
import LocationServices from "@/components/sections/LocationServices";
import LocationBooking from "@/components/sections/LocationBooking";
import Haircuts from "@/components/sections/Haircuts";
import LocationContact from "@/components/sections/LocationContact";

export const metadata = {
  title: "HIS Urban — Barbería & Peluquería en Madrid",
  description: "HIS Urban: barbería y peluquería contemporánea en Malasaña, Madrid. Fades, tapers, coloración y los estilos más modernos de la ciudad.",
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

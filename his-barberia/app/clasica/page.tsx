import LocationHero from "@/components/sections/LocationHero";
import LocationServices from "@/components/sections/LocationServices";
import LocationBooking from "@/components/sections/LocationBooking";
import Haircuts from "@/components/sections/Haircuts";
import LocationContact from "@/components/sections/LocationContact";

export const metadata = {
  title: "HIS Classic — Barbería & Estética en Madrid",
  description: "HIS Classic: barbería y estética masculina de alta gama en el barrio de Salamanca, Madrid. Cortes clásicos, afeitado tradicional y ritual completo.",
};

export default function ClasicaPage() {
  return (
    <>
      <LocationHero brand="clasica" />
      <LocationServices brand="clasica" />
      <LocationBooking brand="clasica" />
      <Haircuts brand="clasica" />
      <LocationContact brand="clasica" />
    </>
  );
}

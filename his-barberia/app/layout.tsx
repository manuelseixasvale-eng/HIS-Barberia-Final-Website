import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HIS Barbería — Classic & Urban | Barbería Premium Madrid",
  description:
    "HIS Barbería es una plataforma premium de cuidado masculino con dos espacios únicos en Madrid: Classic, elegancia atemporal; y Urban, estilo contemporáneo. Reserva tu cita.",
  keywords: "barbería madrid, barbería premium, HIS barbería, corte de pelo madrid, afeitado clásico",
  openGraph: {
    title: "HIS Barbería — Classic & Urban",
    description: "El arte del detalle. En dos expresiones.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-his-black text-his-white overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

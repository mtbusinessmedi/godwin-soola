import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import BookingProvider from "@/components/booking/BookingProvider";
import { site } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const title = "Godwin Soola — Transforme ton savoir-faire en business qui rapporte";
const description =
  "Formations, coaching et communauté Les Rentables pour créer et vendre tes produits digitaux depuis l'Afrique. Programme 21 jours pour viser +500 000 FCFA/mois. Réserve ton appel stratégique.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: "Godwin Soola",
  authors: [{ name: "Godwin Soola" }],
  keywords: [
    "Godwin Soola",
    "Les Rentables",
    "produits digitaux Afrique",
    "vendre une formation en ligne",
    "business en ligne Afrique",
    "Chariow",
    "publicité Facebook",
    "infopreneur",
    "FCFA",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Godwin Soola",
    title,
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Godwin Soola — Les Rentables" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07060b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${manrope.variable} antialiased`}>
      <body>
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}

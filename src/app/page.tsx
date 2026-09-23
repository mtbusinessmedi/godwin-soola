import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Problem from "@/components/sections/Problem";
import Method from "@/components/sections/Method";
import Program from "@/components/sections/Program";
import Shop from "@/components/sections/Shop";
import Community from "@/components/sections/Community";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import BookingCTA from "@/components/sections/BookingCTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import FloatingBookButton from "@/components/booking/FloatingBookButton";
import { faq, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Godwin Soola",
      url: site.url,
      image: `${site.url}/images/godwin.png`,
      jobTitle: "Créateur digital, fondateur de Les Rentables",
      email: site.email,
      sameAs: site.socials.map((s) => s.href),
    },
    {
      "@type": "Course",
      name: "Transforme ton savoir-faire en 21 jours",
      description: "Accompagnement de 21 jours en petit groupe pour transformer son savoir-faire en business en ligne visant +500 000 FCFA par mois.",
      provider: { "@type": "Person", name: "Godwin Soola" },
      url: site.program,
      offers: { "@type": "Offer", price: "55000", priceCurrency: "XOF", url: site.program },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Method />
        <Program />
        <Shop />
        <Community />
        <About />
        <Testimonials />
        <BookingCTA />
        <FAQ />
      </main>
      <Footer />
      <FloatingBookButton />
    </>
  );
}

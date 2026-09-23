import { Sparkle } from "@/components/ui/icons";

const items = [
  "Produits digitaux",
  "Boutique Chariow",
  "Publicité Facebook",
  "Pages de vente",
  "WhatsApp Business",
  "Offre irrésistible",
  "Contenu organique",
  "Mobile Money",
  "Automatisation",
];

export default function Marquee() {
  return (
    <div className="relative -rotate-1 overflow-hidden border-y border-white/10 bg-brand py-4 shadow-[0_20px_60px_-20px_rgba(236,72,153,0.6)]" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-[19px] font-bold whitespace-nowrap text-white sm:text-[22px]">
            {t}
            <Sparkle className="h-4 w-4 text-white/80" />
          </span>
        ))}
      </div>
    </div>
  );
}

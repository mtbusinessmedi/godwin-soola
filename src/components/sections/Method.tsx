import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Cart, Megaphone, Target } from "@/components/ui/icons";

const pillars = [
  {
    n: "01",
    Icon: Target,
    title: "Une offre claire",
    text: "On transforme ton savoir-faire en un produit digital que les gens ont envie d'acheter : la bonne cible, la bonne promesse, le bon prix.",
    tags: ["Positionnement", "Promesse", "Prix"],
  },
  {
    n: "02",
    Icon: Cart,
    title: "Un système de vente",
    text: "Ta boutique, ta page de vente et tes messages WhatsApp travaillent pour toi. Tu encaisses même quand tu dors.",
    tags: ["Boutique", "Page de vente", "Relances"],
  },
  {
    n: "03",
    Icon: Megaphone,
    title: "Une promotion qui attire",
    text: "Contenu organique et publicité Facebook pour faire venir chaque jour des prospects qui sont prêts à acheter.",
    tags: ["Contenu", "Pub Facebook", "Audience"],
  },
];

export default function Method() {
  return (
    <section id="methode" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="La méthode"
          title={
            <>
              Un business qui rapporte suit <span className="text-gradient">toujours 3 étapes.</span>
            </>
          }
          intro="Tu fais ces 3 étapes dans l'ordre, et le revenu suit. Tu les fais dans le désordre, et tu t'épuises pour rien."
        />

        <div className="relative mt-16 grid gap-5 lg:grid-cols-3">
          {pillars.map(({ n, Icon, title, text, tags }, i) => (
            <Reveal key={n} delay={i * 140} as="article" className="card-glow relative rounded-[28px] p-8 sm:p-9">
              <div className="flex items-center justify-between">
                <span className="relative grid h-[60px] w-[60px] place-items-center rounded-2xl bg-brand text-white shadow-[0_14px_40px_-12px_rgba(236,72,153,0.9)]">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="text-gradient font-display text-[64px] leading-none font-extrabold opacity-90">{n}</span>
              </div>
              <h3 className="mt-8 text-[26px] font-bold">{title}</h3>
              <p className="mt-3 leading-relaxed text-paper/60">{text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <li key={t} className="rounded-full border border-line-strong px-3 py-1 text-[12.5px] font-semibold text-paper/70">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

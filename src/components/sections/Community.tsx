import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { ArrowUpRight, Check, Crown } from "@/components/ui/icons";

const plans = [
  {
    name: "Membre Standard",
    href: site.communityStandard,
    price: "17,93 $",
    oldPrice: "26,89 $",
    period: "/ mois",
    pitch: "Environ 10 000 FCFA par mois pour avancer semaine après semaine avec une communauté qui transforme ses compétences en business.",
    perks: [
      "4 rendez-vous chaque semaine avec la communauté",
      "Module 0 + modules débloqués en montant de rang",
      "Rubriques, leaderboard et codes promo exclusifs",
      "30% de commission sur ton lien affilié",
    ],
    featured: false,
  },
  {
    name: "Membre VIP",
    href: site.communityVip,
    price: "44,81 $",
    oldPrice: "89,61 $",
    period: "/ mois",
    pitch: "Le raccourci stratégique vers les résultats : tout est débloqué dès le jour 1, et c'est TON business qu'on diagnostique.",
    perks: [
      "Tout le Classroom et les replays des Cliniques dès le jour 1",
      "1 hot seat garanti par mois avec Godwin ou un Patron",
      "Groupe WhatsApp privé : réponses dans l'heure",
      "Événements physiques tous les 2 mois",
      "Templates premium + Débrief mensuel de Godwin",
      "50% de commission sur ton lien affilié",
    ],
    featured: true,
  },
];

export default function Community() {
  return (
    <section id="communaute" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[32px] border border-line-strong">
          <Image
            src="/images/les-rentables-cover.png"
            alt="Les Rentables — la communauté de Godwin Soola"
            width={1377}
            height={786}
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="h-[220px] w-full object-cover sm:h-[300px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        </Reveal>

        <div className="relative -mt-16 sm:-mt-20">
          <SectionHeading
            eyebrow="Communauté privée"
            title={
              <>
                Rejoins <span className="text-gradient">Les Rentables.</span>
              </>
            }
            intro="La communauté N°1 du business en ligne en Afrique. Ici, on n'apprend pas seul : on applique, on partage ses résultats et on avance ensemble, chaque mois."
          />
        </div>

        <div className="mx-auto mt-14 grid max-w-[960px] gap-5 md:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 130} as="article">
              <div
                className={`relative flex h-full flex-col rounded-[28px] p-8 sm:p-9 ${
                  p.featured
                    ? "bg-brand text-white shadow-[0_40px_90px_-30px_rgba(236,72,153,0.8)]"
                    : "card-glow"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 right-7 flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-[12px] font-bold text-gold">
                    <Crown className="h-3.5 w-3.5" /> Le plus complet
                  </span>
                )}
                <h3 className="text-[26px] font-bold">{p.name}</h3>
                <p className={`mt-2.5 text-[15px] leading-relaxed ${p.featured ? "text-white/85" : "text-paper/60"}`}>{p.pitch}</p>
                <p className="mt-6 font-display text-[40px] leading-none font-extrabold">
                  {p.price}
                  <span className={`ml-1.5 text-[15px] font-semibold ${p.featured ? "text-white/75" : "text-paper/50"}`}>{p.period}</span>
                </p>
                {p.oldPrice && (
                  <p className={`mt-1.5 text-[14px] line-through ${p.featured ? "text-white/60" : "text-paper/40"}`}>{p.oldPrice} / mois</p>
                )}
                <ul className="mt-7 grid gap-3">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex gap-3 text-[15px]">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${p.featured ? "bg-white text-rose" : "bg-rose/15 text-rose"}`}>
                        <Check className="h-3 w-3" />
                      </span>
                      <span className={p.featured ? "text-white/95" : "text-paper/80"}>{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-9 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold transition hover:-translate-y-0.5 ${
                    p.featured ? "bg-ink text-white hover:bg-black" : "border border-line-strong bg-white/[0.05] hover:bg-white/10"
                  }`}
                >
                  Rejoindre en {p.name.replace("Membre ", "")}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

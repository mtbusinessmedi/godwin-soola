import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { BookCallButton } from "@/components/ui/Buttons";
import { site } from "@/lib/site";
import { ArrowUpRight, Chat, Check, Gift, Live, Replay, Shield, Users } from "@/components/ui/icons";

const weeks = [
  {
    week: "Semaine 1",
    title: "On clarifie ton offre",
    text: "Pour que ton produit devienne facile à vendre : ta cible, ta promesse, ton format et ton prix.",
  },
  {
    week: "Semaine 2",
    title: "On monte ton système de vente",
    text: "Ta boutique, ta page de vente et ton tunnel de conversion — pour encaisser sans effort.",
  },
  {
    week: "Semaine 3",
    title: "On lance ta promotion",
    text: "Ton contenu organique et tes publicités Facebook pour faire venir les clients chaque jour.",
  },
];

const included = [
  { Icon: Live, text: "2 séances en direct par semaine avec moi" },
  { Icon: Chat, text: "Un groupe privé où je réponds chaque jour" },
  { Icon: Replay, text: "Les rediffusions de chaque séance" },
  { Icon: Users, text: "Petit groupe de 20 personnes maximum" },
];

const bonuses = [
  "Mon guide pour construire une offre irrésistible",
  "Mes modèles de page de vente prêts à copier",
  "Mon système de contenu pour ne jamais manquer d'idées",
];

export default function Program() {
  return (
    <section id="programme" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Programme phare · 21 jours"
          title={
            <>
              21 jours pour transformer ton savoir-faire en <span className="text-gradient">+500 000 FCFA/mois.</span>
            </>
          }
          intro="Pendant 21 jours, je prends 20 personnes par la main et on installe ce système ensemble. Tu n'avances plus seul : tu avances avec moi, en direct, jusqu'à ta première vente et au-delà."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* Timeline */}
          <div>
            <ol className="relative grid gap-5 border-l border-line pl-8 sm:pl-10">
              {weeks.map((w, i) => (
                <Reveal key={w.week} as="li" delay={i * 120} className="relative">
                  <span className="bg-brand absolute top-7 -left-[41px] grid h-5 w-5 place-items-center rounded-full ring-8 ring-ink sm:-left-[49px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <div className="card-glow rounded-[24px] p-6 sm:p-7">
                    <p className="text-[12px] font-bold tracking-[0.2em] text-coral uppercase">{w.week}</p>
                    <h3 className="mt-2 text-[24px] font-bold">{w.title}</h3>
                    <p className="mt-2 leading-relaxed text-paper/60">{w.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="mt-8 grid gap-3 sm:grid-cols-2">
              {included.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3.5 rounded-2xl border border-line bg-white/[0.02] p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-rose/15 text-rose">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[14.5px] font-semibold text-paper/85">{text}</span>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Carte prix */}
          <Reveal delay={150} className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-[32px] border border-line-strong bg-ink-2 p-7 shadow-[0_40px_100px_-30px_rgba(236,72,153,0.45)] sm:p-9">
              <div className="bg-brand absolute inset-x-0 top-0 h-1" />
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.3),transparent_65%)]" />

              <div className="relative flex items-center justify-between gap-3">
                <span className="rounded-full bg-gold/15 px-3 py-1.5 text-[12px] font-bold text-gold">Prix de lancement</span>
                <span className="flex items-center gap-2 text-[12.5px] font-semibold text-paper/60">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#25D366]" /> 20 places seulement
                </span>
              </div>

              <p className="relative mt-7 text-paper/50 line-through decoration-rose decoration-2">97 000 FCFA</p>
              <p className="relative font-display text-[56px] leading-none font-extrabold tracking-tight sm:text-[64px]">
                55 000 <span className="text-[22px] text-paper/60">FCFA</span>
              </p>
              <p className="relative mt-3 text-[14.5px] text-paper/55">
                Quelques ventes de ton futur produit suffisent à te rembourser. Ensuite, tu répètes.
              </p>

              <div className="relative mt-7 rounded-2xl border border-line bg-white/[0.03] p-5">
                <p className="flex items-center gap-2 text-[13px] font-bold tracking-[0.12em] text-paper/70 uppercase">
                  <Gift className="h-4 w-4 text-flame" /> Tes bonus offerts
                </p>
                <ul className="mt-3.5 grid gap-2.5">
                  {bonuses.map((b) => (
                    <li key={b} className="flex gap-2.5 text-[14.5px] text-paper/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={site.program}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand group relative mt-7 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-6 py-[18px] text-[16px] font-extrabold text-white transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(236,72,153,0.9)]"
              >
                <span className="animate-shine absolute inset-y-0 left-0 w-1/3 bg-white/25" />
                <span className="relative">Je réserve ma place à 55 000 FCFA</span>
                <ArrowUpRight className="relative h-4 w-4" />
              </a>

              <div className="relative mt-5 flex gap-3.5 rounded-2xl bg-[#25D366]/[0.08] p-4">
                <Shield className="h-6 w-6 shrink-0 text-[#25D366]" />
                <p className="text-[13.5px] leading-relaxed text-paper/70">
                  <b className="text-paper">Garantie « première vente ».</b> Tu suis le programme, tu appliques, et si tu ne fais pas ta
                  première vente, je te rembourse et tu gardes tout.
                </p>
              </div>

              <p className="relative mt-6 text-center text-[13.5px] text-paper/50">Pas sûr que ce soit pour toi ?</p>
              <BookCallButton source="programme 21 jours" size="md" variant="ghost" className="relative mt-3 w-full">
                Réserver un appel pour en parler
              </BookCallButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

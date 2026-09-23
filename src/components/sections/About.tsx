import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { BookCallButton } from "@/components/ui/Buttons";
import { site } from "@/lib/site";
import { SocialIcon } from "@/components/ui/icons";

const milestones = [
  { value: "+100 M", label: "FCFA générés avec mes propres business en ligne" },
  { value: "+17 M", label: "FCFA en 9 mois avec les produits digitaux" },
  { value: "15 000+", label: "personnes ont appliqué mes méthodes depuis 2025" },
  { value: "620", label: "avis clients, dont 95% positifs" },
];

export default function About() {
  return (
    <section id="apropos" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute -inset-4 rounded-[40px] border border-dashed border-white/10" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,#ec4899_0%,#f2616b_45%,#f97316_100%)]">
            <div className="grid-bg absolute inset-0 opacity-70 [mask-image:none]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent" />
            <Image
              src="/images/godwin.png"
              alt="Portrait de Godwin Soola"
              fill
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-contain object-bottom"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-ink/60 p-4 backdrop-blur-xl">
              <p className="font-display text-[20px] font-bold">Godwin Soola</p>
              <p className="text-[13px] text-paper/65">Créateur digital · Fondateur de Les Rentables</p>
            </div>
          </div>
          <span className="font-display absolute -top-6 -right-3 rotate-6 rounded-2xl bg-ink-3 px-4 py-2.5 text-[14px] font-bold shadow-2xl ring-1 ring-line-strong sm:-right-8">
            57K abonnés 🔥
          </span>
        </Reveal>

        <div>
          <Reveal>
            <p className="inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.22em] text-coral uppercase">
              <span className="bg-brand h-px w-7" /> Qui est Godwin ?
            </p>
            <h2 className="mt-5 text-[clamp(32px,4.6vw,54px)] font-extrabold">
              Je ne te donne pas de la théorie. <span className="text-gradient">Je te donne ce que je fais chaque jour.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-6 grid gap-4 text-[17px] leading-relaxed text-paper/65">
            <p>
              J&apos;aide les freelances, experts et entrepreneurs africains à <b className="text-paper">créer et vendre des produits digitaux
              rentables</b>. Formations, guides, coachings, communautés : je vends moi-même ce que j&apos;enseigne, depuis l&apos;Afrique.
            </p>
            <p>
              Mon objectif pour toi est simple : t&apos;aider à passer de <b className="text-paper">200 000 FCFA à plus de 5 millions de FCFA par
              mois</b> avec des étapes claires. Si tu cherches des résultats concrets et pas juste des promesses, tu es au bon endroit.
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-10 grid grid-cols-2 gap-3.5">
            {milestones.map((m) => (
              <div key={m.label} className="card-glow rounded-2xl p-5">
                <p className="text-gradient font-display text-[30px] leading-none font-extrabold sm:text-[34px]">{m.value}</p>
                <p className="mt-2 text-[13.5px] leading-snug text-paper/60">{m.label}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <BookCallButton source="à propos" size="md">
              Échanger avec Godwin
            </BookCallButton>
            <ul className="flex gap-2">
              {site.socials.slice(0, 5).map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-paper/70 transition hover:-translate-y-0.5 hover:border-transparent hover:bg-brand hover:text-white"
                  >
                    <SocialIcon name={s.name} className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { stats } from "@/lib/site";
import { BookCallButton, GhostLink } from "@/components/ui/Buttons";
import CountUp from "@/components/ui/CountUp";
import HeroPortrait from "./HeroPortrait";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Décor */}
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(236,72,153,0.22),transparent_65%)]" />
      <div className="pointer-events-none absolute right-[-10%] bottom-[-20%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.16),transparent_62%)]" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.035]" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <p
            className="hero-in inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/[0.04] px-4 py-2 text-[12.5px] font-semibold text-paper/80 backdrop-blur"
            style={delay(0)}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-rose" />
              <span className="relative h-2 w-2 rounded-full bg-rose" />
            </span>
            Fondateur de la communauté <b className="text-paper">Les Rentables</b>
          </p>

          <h1 className="hero-in mt-6 text-[clamp(40px,6.4vw,78px)] font-extrabold" style={delay(120)}>
            Transforme ton savoir-faire en <span className="text-gradient">business qui rapporte.</span>
          </h1>

          <p className="hero-in mx-auto mt-6 max-w-[560px] text-[17px] leading-relaxed text-paper/65 sm:text-[18.5px] lg:mx-0" style={delay(240)}>
            J&apos;aide les experts, freelances et créateurs africains à <b className="font-semibold text-paper">créer, vendre et automatiser</b>{" "}
            leurs produits digitaux. Une méthode claire, testée par plus de <b className="font-semibold text-paper">15 000 personnes</b> — sans théorie
            compliquée.
          </p>

          <div className="hero-in mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center lg:justify-start" style={delay(360)}>
            <BookCallButton source="hero" />
            <GhostLink href="#boutique">Voir mes formations</GhostLink>
          </div>

          <dl
            className="hero-in mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-4"
            style={delay(480)}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-[28px] font-extrabold tracking-tight sm:text-[32px]">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
                <dd className="mt-1 text-[11.5px] font-semibold tracking-[0.12em] text-paper/50 uppercase">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-in" style={delay(200)}>
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}

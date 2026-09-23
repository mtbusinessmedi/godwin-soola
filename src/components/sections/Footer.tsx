import Image from "next/image";
import { BookCallButton, GhostLink } from "@/components/ui/Buttons";
import { nav, site } from "@/lib/site";
import { Mail, SocialIcon } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-24">
      {/* CTA final */}
      <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-8">
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(236,72,153,0.22),transparent_65%)]" />
        <h2 className="relative text-[clamp(36px,6vw,76px)] font-extrabold">
          Dans 21 jours, tu peux être au même point.
          <br />
          <span className="text-gradient">Ou avoir un business qui te paie.</span>
        </h2>
        <p className="relative mx-auto mt-6 max-w-[560px] text-[17px] text-paper/60">
          Le choix t&apos;appartient. Si tu veux que je t&apos;aide à choisir la bonne prochaine étape, réserve ton appel.
        </p>
        <div className="relative mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <BookCallButton source="footer" />
          <GhostLink href={site.program}>Voir le programme 21 jours</GhostLink>
        </div>
      </div>

      <div className="mx-auto mt-28 max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 border-t border-line py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-rose/60">
                <Image src="/images/godwin-logo.jpg" alt="" fill sizes="44px" className="object-cover" />
              </span>
              <span className="font-display text-[20px] font-bold">
                Godwin<span className="text-gradient"> Soola</span>
              </span>
            </a>
            <p className="mt-4 max-w-[340px] text-[14.5px] leading-relaxed text-paper/55">{site.tagline}. Formations, coachings et communauté pour gagner réellement de l&apos;argent sur Internet en Afrique.</p>
            <a href={`mailto:${site.email}`} className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-semibold text-paper/80 hover:text-paper">
              <Mail className="h-4 w-4 text-rose" /> {site.email}
            </a>
          </div>

          <div>
            <p className="text-[12px] font-bold tracking-[0.2em] text-paper/45 uppercase">Navigation</p>
            <ul className="mt-4 grid gap-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[14.5px] text-paper/70 hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.shop} target="_blank" rel="noopener noreferrer" className="text-[14.5px] text-paper/70 hover:text-paper">
                  Boutique Chariow ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-bold tracking-[0.2em] text-paper/45 uppercase">Suis-moi</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.socials.map((s) => (
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
            <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-[14px] font-semibold text-coral hover:underline">
              Rejoindre la communauté Telegram gratuite →
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-8 text-[12.5px] text-paper/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Godwin Soola. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {site.legal.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper/70">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="pb-10 text-[11.5px] leading-relaxed text-paper/30">
          Ce site n&apos;est en aucun cas affilié à Facebook ou Meta. Les résultats mentionnés dépendent de l&apos;implication de chacun et ne
          constituent pas une garantie de gains ni un conseil financier.
        </p>
      </div>
    </footer>
  );
}

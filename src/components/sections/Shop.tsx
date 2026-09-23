import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { GhostLink } from "@/components/ui/Buttons";
import { products, site } from "@/lib/site";
import { ArrowUpRight, Star } from "@/components/ui/icons";

export default function Shop() {
  return (
    <section id="boutique" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="La boutique"
            title={
              <>
                Commence aujourd&apos;hui. <span className="text-gradient">Même gratuitement.</span>
              </>
            }
            intro="Formations, guides et coaching : des ressources concrètes pour gagner réellement de l'argent sur Internet depuis l'Afrique. Accès immédiat après achat."
          />
          <Reveal>
            <GhostLink href={site.shop} size="md">
              Toute la boutique
            </GhostLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.href} delay={(i % 3) * 110} as="article" className={i === 0 ? "sm:col-span-2" : ""}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-glow group flex h-full flex-col overflow-hidden rounded-[26px] transition duration-500 hover:-translate-y-1.5 ${i === 0 ? "sm:flex-row" : ""}`}
              >
                <div className={`relative shrink-0 overflow-hidden ${i === 0 ? "aspect-square sm:w-1/2" : "aspect-[16/10]"}`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  {p.badge && (
                    <span className="bg-brand absolute top-4 left-4 rounded-full px-3 py-1 text-[12px] font-extrabold text-white">{p.badge}</span>
                  )}
                  {p.price === "Gratuit" && (
                    <span className="absolute top-4 left-4 rounded-full bg-[#25D366] px-3 py-1 text-[12px] font-extrabold text-[#062b14]">Gratuit</span>
                  )}
                </div>
                <div className={`flex flex-1 flex-col p-6 ${i === 0 ? "sm:justify-center sm:p-8" : ""}`}>
                  <p className="text-[11.5px] font-bold tracking-[0.16em] text-coral uppercase">{p.kind}</p>
                  <h3 className={`mt-2 font-sans leading-snug font-bold tracking-normal ${i === 0 ? "text-[22px] sm:text-[26px]" : "text-[17.5px]"}`}>{p.title}</h3>
                  {i === 0 && (
                    <p className="mt-3 text-[15px] leading-relaxed text-paper/60">
                      Une heure en tête-à-tête avec Godwin pour diagnostiquer ton business, lever tes blocages et repartir avec un plan d&apos;action clair.
                    </p>
                  )}
                  <div className={`flex items-end justify-between gap-3 pt-6 ${i === 0 ? "sm:mt-8" : "mt-auto"}`}>
                    <div>
                      <p className="flex items-center gap-1.5 text-[12.5px] text-paper/55">
                        <Star className="h-3.5 w-3.5 text-gold" /> {p.rating} · {p.reviews} avis
                      </p>
                      <p className="mt-1 font-display text-[22px] font-extrabold">
                        {p.price}
                        {p.oldPrice && <span className="ml-2 text-[14px] font-semibold text-paper/40 line-through">{p.oldPrice}</span>}
                      </p>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-strong transition group-hover:border-transparent group-hover:bg-brand">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

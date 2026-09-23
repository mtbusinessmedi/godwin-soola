import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site";
import { Star } from "@/components/ui/icons";

const colors = ["#ec4899", "#f2616b", "#f97316", "#a855f7"];

export default function Testimonials() {
  return (
    <section id="avis" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Ils en parlent"
          title={
            <>
              17 661 clients. <span className="text-gradient">95% d&apos;avis positifs.</span>
            </>
          }
          intro="Quelques retours laissés sur la boutique par des participants au programme et des clients."
        />

        <div className="mt-16 columns-1 gap-5 md:columns-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 120} className="mb-5 break-inside-avoid">
              <figure className="card-glow rounded-[26px] p-7 sm:p-8">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-5 text-[17.5px] leading-relaxed text-paper/85">« {t.quote} »</blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line pt-5">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-full font-bold text-white"
                    style={{ background: colors[i % colors.length] }}
                  >
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <span>
                    <span className="block font-bold">{t.name}</span>
                    <span className="text-[13px] text-paper/50">{t.role} · Avis vérifié</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

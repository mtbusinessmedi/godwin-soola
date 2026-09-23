import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faq } from "@/lib/site";
import { Plus } from "@/components/ui/icons";

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">
        <SectionHeading eyebrow="Questions fréquentes" title={<>Tu te poses encore <span className="text-gradient">des questions ?</span></>} />

        <div className="mt-14 grid gap-3">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="group card-glow rounded-[22px] open:bg-white/[0.05]" {...(i === 0 ? { open: true } : {})}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-[17.5px] font-bold sm:px-7 [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line-strong transition duration-300 group-open:rotate-45 group-open:border-transparent group-open:bg-brand">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-paper/65 sm:px-7">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

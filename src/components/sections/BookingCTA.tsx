import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { BookCallButton } from "@/components/ui/Buttons";
import { Check, WhatsApp } from "@/components/ui/icons";

const steps = [
  { n: "1", title: "Tu remplis le formulaire", text: "2 minutes pour me dire où tu en es et ce que tu veux atteindre." },
  { n: "2", title: "Ta demande arrive sur WhatsApp", text: "Ton message est pré-rempli, tu n'as qu'à appuyer sur Envoyer." },
  { n: "3", title: "On fixe ton appel", text: "Je te réponds pour choisir un créneau, et je te dis quoi faire ensuite." },
];

export default function BookingCTA() {
  return (
    <section id="appel" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[36px] border border-line-strong bg-ink-2">
          <div className="pointer-events-none absolute -top-1/2 -left-1/4 h-[160%] w-[80%] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.28),rgba(249,115,22,0.1)_40%,transparent_65%)]" />
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />

          <div className="relative grid items-center gap-10 p-7 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:p-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/12 px-3.5 py-1.5 text-[12.5px] font-bold text-[#25D366]">
                <WhatsApp className="h-4 w-4" /> Appel stratégique offert
              </p>
              <h2 className="mt-5 text-[clamp(32px,4.8vw,58px)] font-extrabold">
                Dis-moi où tu en es. <span className="text-gradient">Je te dis quoi faire.</span>
              </h2>
              <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-paper/65">
                Tu ne sais pas par quel produit commencer, ni si le programme est fait pour toi ? Réserve un appel : on fait le point sur ta
                situation et tu repars avec un plan clair.
              </p>

              <ol className="mt-9 grid gap-4">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="bg-brand grid h-9 w-9 shrink-0 place-items-center rounded-full font-display font-extrabold text-white">{s.n}</span>
                    <div>
                      <p className="font-bold">{s.title}</p>
                      <p className="text-[14.5px] text-paper/55">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <BookCallButton source="section appel" className="mt-10 w-full sm:w-auto">
                Réserver mon appel maintenant
              </BookCallButton>
            </div>

            {/* Aperçu conversation WhatsApp */}
            <div className="relative mx-auto w-full max-w-[380px]">
              <div className="animate-float overflow-hidden rounded-[30px] border border-line-strong bg-[#0b141a] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
                <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3.5">
                  <span className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-rose to-flame">
                    <Image src="/images/godwin.png" alt="" fill sizes="40px" className="object-cover object-top" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[15px] font-bold">Godwin Soola</p>
                    <p className="text-[12px] text-[#25D366]">en ligne</p>
                  </div>
                </div>
                <div className="grid gap-2.5 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.03),transparent_40%)] p-4 text-[13.5px]">
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[#005c4b] px-3.5 py-2.5">
                    <p>
                      Bonjour Godwin 👋 Je souhaite réserver un <b>appel stratégique</b>.
                    </p>
                    <p className="mt-1.5 text-white/80">💼 Mon savoir-faire : Couture</p>
                    <p className="text-white/80">🎯 Objectif : Faire ma première vente en ligne</p>
                    <p className="mt-1 flex items-center justify-end gap-1 text-[10.5px] text-white/55">
                      19:42 <Check className="h-3 w-3 text-[#53bdeb]" />
                    </p>
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#1f2c34] px-3.5 py-2.5">
                    <p>Top ! Merci pour ces infos 🙏 On cale l&apos;appel demain à 19h ?</p>
                    <p className="mt-1 text-right text-[10.5px] text-white/45">19:44</p>
                  </div>
                  <div className="flex w-16 items-center gap-1 rounded-2xl rounded-tl-sm bg-[#1f2c34] px-3.5 py-3">
                    {[0, 150, 300].map((d) => (
                      <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50" style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-[12px] text-paper/40">Exemple de conversation</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

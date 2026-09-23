"use client";

import Image from "next/image";
import { useRef } from "react";
import { Check, Star } from "@/components/ui/icons";

/** Portrait animé du hero : cercle dégradé, anneaux en rotation, cadre et cartes flottantes avec parallaxe. */
export default function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width - 0.5).toFixed(3)}`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height - 0.5).toFixed(3)}`);
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--mx", "0");
    ref.current?.style.setProperty("--my", "0");
  };

  const layer = (depth: number): React.CSSProperties => ({
    transform: `translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth}px), 0)`,
    transition: "transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1)",
  });

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto aspect-[1/1.08] w-full max-w-[560px] select-none"
    >
      {/* Halo lumineux */}
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.55),rgba(249,115,22,0.25)_45%,transparent_70%)]" />

      {/* Cadre rectangulaire + coins */}
      <div className="absolute inset-x-[9%] top-[4%] bottom-[2%] rounded-[36px] border border-line-strong bg-gradient-to-b from-white/[0.04] to-transparent" style={layer(-10)}>
        {["top-0 left-0 border-t-2 border-l-2 rounded-tl-[36px]", "top-0 right-0 border-t-2 border-r-2 rounded-tr-[36px]", "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-[36px]", "bottom-0 right-0 border-b-2 border-r-2 rounded-br-[36px]"].map((c) => (
          <span key={c} className={`absolute h-12 w-12 border-coral ${c}`} />
        ))}
      </div>

      {/* Cercle principal + anneaux */}
      <div className="absolute inset-x-[11%] top-[21%] aspect-square" style={layer(-18)}>
        <div className="animate-spin-slow absolute -inset-[3%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#ec4899_70deg,#f97316_150deg,transparent_220deg)] p-[3px] [mask:radial-gradient(farthest-side,transparent_calc(100%-3px),#000_calc(100%-2px))]" />
        <div className="animate-spin-slower absolute -inset-[9%] rounded-full border border-dashed border-white/15">
          <span className="absolute top-[8%] left-[18%] h-3 w-3 rounded-full bg-flame shadow-[0_0_18px_4px_rgba(249,115,22,0.8)]" />
          <span className="absolute right-[4%] bottom-[30%] h-2 w-2 rounded-full bg-rose shadow-[0_0_14px_3px_rgba(236,72,153,0.8)]" />
          <span className="absolute bottom-[2%] left-[40%] h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_14px_3px_rgba(251,191,36,0.7)]" />
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_25%,#f472b6_0%,#ec4899_28%,#c2185b_55%,#5b0a2e_100%)]">
          <div className="grid-bg absolute inset-0 opacity-60 [mask-image:none]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.55),transparent_55%)]" />
        </div>
      </div>

      {/* Godwin — déborde du cercle par le haut, fondu en bas */}
      <div className="absolute -inset-x-[7%] bottom-0 h-[106%]" style={layer(8)}>
        <Image
          src="/images/godwin.png"
          alt="Godwin Soola, créateur digital et fondateur de Les Rentables"
          fill
          preload
          sizes="(max-width: 1024px) 90vw, 560px"
          className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)] [mask-image:linear-gradient(to_bottom,#000_80%,transparent_99%)]"
        />
      </div>

      {/* Carte : revenus */}
      <div className="absolute top-[20%] -left-[2%] sm:-left-[8%]" style={layer(26)}>
        <div className="animate-float w-[168px] rounded-2xl border border-line-strong bg-ink-2/95 p-3.5 shadow-2xl sm:w-[190px]">
          <p className="text-[10.5px] font-bold tracking-[0.14em] text-paper/50 uppercase">Objectif revenus</p>
          <p className="mt-1 font-display text-xl font-extrabold sm:text-2xl">
            +500K <span className="text-[12px] font-bold text-paper/60">FCFA/mois</span>
          </p>
          <div className="mt-3 flex h-10 items-end gap-1.5">
            {[28, 40, 34, 55, 48, 72, 100].map((h, i) => (
              <span
                key={i}
                className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-rose to-flame"
                style={{ height: `${h}%`, animation: `grow 1.2s ${0.4 + i * 0.12}s cubic-bezier(0.2,0.8,0.2,1) both` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Carte : avis */}
      <div className="absolute top-[46%] -right-[1%] sm:-right-[6%]" style={layer(34)}>
        <div className="animate-float-late rounded-2xl border border-line-strong bg-ink-2/95 px-4 py-3 shadow-2xl">
          <div className="flex gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5" />
            ))}
          </div>
          <p className="mt-1.5 font-display text-lg font-extrabold">95% avis positifs</p>
          <p className="text-[12px] text-paper/55">sur 620 avis clients</p>
        </div>
      </div>

      {/* Carte : clients */}
      <div className="absolute bottom-[9%] left-[1%] sm:-left-[4%]" style={layer(20)}>
        <div className="animate-float-late flex items-center gap-3 rounded-full border border-line-strong bg-ink-2/95 py-2 pr-5 pl-2 shadow-2xl">
          <div className="flex -space-x-2.5">
            {["IM", "CD", "EA", "KD"].map((i, idx) => (
              <span
                key={i}
                className="grid h-8 w-8 place-items-center rounded-full border-2 border-ink-2 text-[10px] font-bold text-white"
                style={{ background: ["#ec4899", "#f2616b", "#f97316", "#a855f7"][idx] }}
              >
                {i}
              </span>
            ))}
          </div>
          <div className="leading-tight">
            <p className="font-display text-[15px] font-extrabold">17 661 clients</p>
            <p className="text-[11px] text-paper/55">font confiance à sa méthode</p>
          </div>
        </div>
      </div>

      {/* Badge vérifié */}
      <div className="absolute top-[6%] right-[8%]" style={layer(30)}>
        <div className="animate-float flex items-center gap-2 rounded-full border border-line-strong bg-ink-3/95 px-3.5 py-2 text-[12.5px] font-bold">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-[#1877F2] text-white">
            <Check className="h-3 w-3" />
          </span>
          Créateur digital
        </div>
      </div>
    </div>
  );
}

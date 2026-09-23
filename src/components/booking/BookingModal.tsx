"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/lib/site";
import { ArrowRight, Check, Close, WhatsApp } from "@/components/ui/icons";

const SITUATIONS = [
  "Je n'ai pas encore de produit digital",
  "J'ai une idée mais je ne sais pas par où commencer",
  "J'ai un produit, mais je ne vends pas (ou peu)",
  "Je vends déjà, je veux passer à l'échelle",
];

const REVENUS = [
  "0 FCFA pour l'instant",
  "Moins de 100 000 FCFA / mois",
  "100 000 – 500 000 FCFA / mois",
  "500 000 – 2 000 000 FCFA / mois",
  "Plus de 2 000 000 FCFA / mois",
];

const OBJECTIFS = [
  "Faire ma première vente en ligne",
  "Atteindre +500 000 FCFA / mois",
  "Lancer ma pub Facebook rentable",
  "Structurer et automatiser mon business",
];

const BUDGETS = [
  "Je préfère ne pas répondre",
  "Moins de 50 000 FCFA",
  "50 000 – 150 000 FCFA",
  "150 000 – 500 000 FCFA",
  "Plus de 500 000 FCFA",
];

type Props = { open: boolean; onClose: () => void; source: string };

type FormState = Record<
  "nom" | "pays" | "tel" | "domaine" | "situation" | "revenu" | "objectif" | "budget" | "dispo" | "message",
  string
>;

const EMPTY: FormState = {
  nom: "",
  pays: "",
  tel: "",
  domaine: "",
  situation: "",
  revenu: "",
  objectif: "",
  budget: "",
  dispo: "",
  message: "",
};

function buildMessage(f: FormState, source: string) {
  const optional = (value: string, line: string) => (value.trim() ? line : null);
  const lines = [
    "Bonjour Godwin 👋",
    "Je souhaite réserver un *appel stratégique*. Voici mes infos :",
    "",
    `👤 *Nom :* ${f.nom}`,
    optional(f.pays, `📍 *Pays / ville :* ${f.pays}`),
    `📱 *WhatsApp :* ${f.tel}`,
    `💼 *Mon savoir-faire :* ${f.domaine}`,
    `📊 *Où j'en suis :* ${f.situation}`,
    optional(f.revenu, `💰 *Revenus en ligne actuels :* ${f.revenu}`),
    `🎯 *Objectif principal :* ${f.objectif}`,
    optional(f.budget, `💳 *Budget pour me faire accompagner :* ${f.budget}`),
    `🗓️ *Disponibilité :* ${f.dispo}`,
    optional(f.message, `✍️ *Mon blocage :* ${f.message}`),
    "",
    `_Envoyé depuis le site — ${source}_`,
  ];
  return lines.filter((l) => l !== null).join("\n");
}

export function whatsappUrl(text: string) {
  const base = site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function BookingModal({ open, onClose, source }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [consent, setConsent] = useState(true);
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  // Verrouille le scroll, gère Échap et le focus
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 80);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  // Réinitialise l'écran de confirmation à la fermeture
  useEffect(() => {
    if (!open) {
      const t = window.setTimeout(() => setSentUrl(null), 300);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = whatsappUrl(buildMessage(form, source));
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
    setForm(EMPTY);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${
          open ? "opacity-100 backdrop-blur-sm" : "opacity-0"
        }`}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative flex max-h-[94dvh] w-full max-w-[720px] flex-col overflow-hidden rounded-t-[28px] border border-line-strong bg-ink-2 shadow-[0_40px_120px_-20px_rgba(236,72,153,0.35)] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] sm:rounded-[28px] ${
          open ? "translate-y-0 opacity-100 sm:scale-100" : "translate-y-10 opacity-0 sm:scale-95"
        }`}
      >
        <div className="bg-brand h-1 w-full shrink-0" />
        <div className="pointer-events-none absolute -top-40 -right-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.3),transparent_65%)]" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-white/5 text-paper/70 transition hover:rotate-90 hover:bg-white/10 hover:text-paper"
        >
          <Close className="h-4 w-4" />
        </button>

        <div className="relative overflow-y-auto px-5 pt-7 pb-6 sm:px-9 sm:pt-9 sm:pb-8">
          {sentUrl ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="relative mb-7 grid h-20 w-20 place-items-center">
                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]/40" />
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-[#25D366] text-white">
                  <Check className="h-9 w-9" />
                </span>
              </div>
              <h2 id={titleId} className="text-3xl font-bold sm:text-4xl">
                Ta demande est prête !
              </h2>
              <p className="mt-4 max-w-md text-paper/65">
                WhatsApp s&apos;est ouvert avec ton message pré-rempli. Il ne te reste plus qu&apos;à appuyer sur{" "}
                <b className="text-paper">Envoyer</b>. Je te réponds personnellement pour fixer le créneau.
              </p>
              <a
                href={sentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-4 font-bold text-[#062b14] transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_rgba(37,211,102,0.7)]"
              >
                <WhatsApp className="h-5 w-5" /> WhatsApp ne s&apos;est pas ouvert ? Clique ici
              </a>
              <button type="button" onClick={onClose} className="mt-5 text-sm text-paper/50 underline-offset-4 hover:underline">
                Revenir au site
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4 pr-12">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-line-strong bg-gradient-to-br from-rose/60 to-flame/60">
                  <Image src="/images/godwin.png" alt="" fill sizes="56px" className="object-cover object-top" />
                  <span className="absolute right-0.5 bottom-0.5 h-3 w-3 rounded-full border-2 border-ink-2 bg-[#25D366]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.2em] text-gold uppercase">Appel stratégique · 100% offert</p>
                  <h2 id={titleId} className="mt-1 text-2xl font-bold sm:text-[28px]">
                    Dis-moi où tu en es, <span className="text-gradient">je te dis quoi faire.</span>
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-[15px] text-paper/60">
                Remplis ces quelques infos (2 minutes). Ta demande arrive directement sur mon WhatsApp et je te réponds
                pour fixer l&apos;appel.
              </p>

              <form onSubmit={onSubmit} className="mt-7 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nom et prénom" required htmlFor="b-nom">
                    <input ref={firstFieldRef} id="b-nom" required autoComplete="name" placeholder="Ton nom complet" className="field" value={form.nom} onChange={update("nom")} />
                  </Field>
                  <Field label="Numéro WhatsApp" required htmlFor="b-tel">
                    <input id="b-tel" required type="tel" inputMode="tel" autoComplete="tel" pattern="\+?[0-9 \(\)\.\-]{8,20}" title="Numéro avec indicatif, ex. +225 07 00 00 00 00" placeholder="+225 07 00 00 00 00" className="field" value={form.tel} onChange={update("tel")} />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Pays / ville" htmlFor="b-pays">
                    <input id="b-pays" autoComplete="country-name" placeholder="Ex. Abidjan, Côte d'Ivoire" className="field" value={form.pays} onChange={update("pays")} />
                  </Field>
                  <Field label="Ton savoir-faire" required htmlFor="b-domaine">
                    <input id="b-domaine" required placeholder="Ex. couture, coaching, graphisme…" className="field" value={form.domaine} onChange={update("domaine")} />
                  </Field>
                </div>
                <Field label="Où en es-tu aujourd'hui ?" required htmlFor="b-situation">
                  <Select id="b-situation" required value={form.situation} onChange={update("situation")} options={SITUATIONS} />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Tes revenus en ligne actuels" htmlFor="b-revenu">
                    <Select id="b-revenu" value={form.revenu} onChange={update("revenu")} options={REVENUS} />
                  </Field>
                  <Field label="Ton objectif principal" required htmlFor="b-objectif">
                    <Select id="b-objectif" required value={form.objectif} onChange={update("objectif")} options={OBJECTIFS} />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Budget pour te faire accompagner" htmlFor="b-budget">
                    <Select id="b-budget" value={form.budget} onChange={update("budget")} options={BUDGETS} />
                  </Field>
                  <Field label="Ta disponibilité pour l'appel" required htmlFor="b-dispo">
                    <input id="b-dispo" required placeholder="Ex. en semaine après 18 h" className="field" value={form.dispo} onChange={update("dispo")} />
                  </Field>
                </div>
                <Field label="Ton plus gros blocage en une phrase" htmlFor="b-msg">
                  <textarea id="b-msg" rows={3} placeholder="Ce qui t'empêche d'avancer aujourd'hui…" className="field min-h-[88px] resize-y" value={form.message} onChange={update("message")} />
                </Field>

                <label htmlFor="b-ok" className="flex cursor-pointer items-start gap-3 text-[13.5px] text-paper/55">
                  <input id="b-ok" type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-rose" />
                  J&apos;accepte d&apos;être recontacté(e) sur WhatsApp au sujet de ma demande.
                </label>

                <button
                  type="submit"
                  className="group relative mt-2 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#25D366] px-6 py-[18px] text-[16px] font-extrabold text-[#062b14] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(37,211,102,0.75)]"
                >
                  <span className="animate-shine absolute inset-y-0 left-0 w-1/3 bg-white/35" />
                  <WhatsApp className="h-5 w-5" />
                  Envoyer ma demande sur WhatsApp
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs text-paper/40">🔒 Tes infos restent confidentielles. Réponse sous 24 h ouvrées.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, required, htmlFor, children }: { label: string; required?: boolean; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-[11.5px] font-bold tracking-[0.14em] text-paper/55 uppercase">
        {label} {required && <span className="text-rose">*</span>}
      </label>
      {children}
    </div>
  );
}

function Select({
  id,
  required,
  value,
  onChange,
  options,
}: {
  id: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <select id={id} required={required} value={value} onChange={onChange} className="field">
      <option value="">Choisir…</option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

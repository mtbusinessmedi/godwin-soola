"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import { Close, Menu } from "@/components/ui/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { open } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Navigation principale"
        className={`mx-auto flex max-w-[1240px] items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-500 sm:px-4 ${
          scrolled || menu ? "border-line-strong bg-ink/75 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 pl-1" aria-label="Godwin Soola — accueil">
          <span className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-rose/60">
            <Image src="/images/godwin-logo.jpg" alt="" fill sizes="36px" className="object-cover" />
          </span>
          <span className="font-display text-[17px] font-bold tracking-tight">
            Godwin<span className="text-gradient"> Soola</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-4 py-2 text-[14px] font-semibold text-paper/65 transition hover:bg-white/5 hover:text-paper">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => open("navbar")}
            className="bg-brand hidden rounded-full px-5 py-2.5 text-[14px] font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(236,72,153,0.9)] sm:inline-flex"
          >
            Réserver un appel
          </button>
          <button
            type="button"
            onClick={() => setMenu((m) => !m)}
            aria-expanded={menu}
            aria-controls="mobile-menu"
            aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-white/5 lg:hidden"
          >
            {menu ? <Close className="h-4 w-4" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-[1240px] overflow-hidden rounded-3xl border border-line-strong bg-ink/90 backdrop-blur-xl transition-all duration-400 lg:hidden ${
          menu ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="grid gap-1 p-3">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenu(false)} className="block rounded-2xl px-4 py-3 font-semibold text-paper/80 hover:bg-white/5">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMenu(false);
                open("menu mobile");
              }}
              className="bg-brand w-full rounded-2xl px-4 py-3.5 font-bold text-white"
            >
              Réserver mon appel stratégique
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

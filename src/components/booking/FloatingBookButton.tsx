"use client";

import { useEffect, useState } from "react";
import { useBooking } from "./BookingProvider";
import { WhatsApp } from "@/components/ui/icons";

export default function FloatingBookButton() {
  const { open } = useBooking();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => open("bouton flottant")}
      aria-label="Réserver un appel via WhatsApp"
      className={`group fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full bg-[#25D366] p-3.5 text-[#062b14] shadow-[0_16px_40px_-10px_rgba(37,211,102,0.7)] transition-all duration-500 hover:-translate-y-1 sm:right-6 sm:bottom-6 sm:pr-5 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="relative grid place-items-center">
        <span className="animate-pulse-ring absolute h-7 w-7 rounded-full bg-white/60" />
        <WhatsApp className="relative h-7 w-7" />
      </span>
      <span className="hidden text-[14.5px] font-extrabold sm:inline">Réserver un appel</span>
    </button>
  );
}

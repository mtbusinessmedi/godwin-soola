"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import BookingModal from "./BookingModal";

type BookingContextValue = { open: (source?: string) => void };

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking doit être utilisé dans <BookingProvider>");
  return ctx;
}

export default function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("site");

  const open = useCallback((from = "site") => {
    setSource(from);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
    if (window.location.hash === "#reserver") history.replaceState(null, "", window.location.pathname + window.location.search);
  }, []);
  const value = useMemo(() => ({ open }), [open]);

  // Lien direct vers le formulaire : https://…/#reserver (bio Instagram, pubs, WhatsApp…)
  useEffect(() => {
    const check = () => {
      if (window.location.hash === "#reserver") open("lien direct");
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, [open]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal open={isOpen} onClose={close} source={source} />
    </BookingContext.Provider>
  );
}

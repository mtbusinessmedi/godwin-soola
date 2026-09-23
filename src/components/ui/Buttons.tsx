"use client";

import { useBooking } from "@/components/booking/BookingProvider";
import { ArrowRight, ArrowUpRight, Calendar } from "./icons";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-bold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose";

const sizes = {
  md: "px-6 py-3.5 text-[14.5px]",
  lg: "px-7 py-[18px] text-[15.5px] sm:px-8",
};

export function BookCallButton({
  children = "Réserver mon appel stratégique",
  source,
  size = "lg",
  variant = "brand",
  className = "",
}: {
  children?: React.ReactNode;
  source: string;
  size?: keyof typeof sizes;
  variant?: "brand" | "ghost";
  className?: string;
}) {
  const { open } = useBooking();
  const look =
    variant === "brand"
      ? "bg-brand text-white shadow-[0_18px_50px_-14px_rgba(236,72,153,0.8)] hover:shadow-[0_22px_60px_-12px_rgba(249,115,22,0.8)]"
      : "border border-line-strong bg-white/[0.04] text-paper hover:border-white/30 hover:bg-white/[0.08]";
  return (
    <button type="button" onClick={() => open(source)} className={`${base} ${sizes[size]} ${look} ${className}`}>
      {variant === "brand" && <span className="animate-shine absolute inset-y-0 left-0 w-1/3 bg-white/25" />}
      <Calendar className="relative h-[18px] w-[18px]" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-1" />
    </button>
  );
}

export function GhostLink({
  href,
  children,
  size = "lg",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${sizes[size]} border border-line-strong bg-white/[0.04] text-paper backdrop-blur hover:border-white/30 hover:bg-white/[0.08] ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

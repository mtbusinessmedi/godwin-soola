import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-[760px] text-center" : "max-w-[640px]"}>
      <p className={`inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.22em] text-coral uppercase ${centered ? "justify-center" : ""}`}>
        <span className="bg-brand h-px w-7" />
        {eyebrow}
        {centered && <span className="bg-brand h-px w-7" />}
      </p>
      <h2 className="mt-5 text-[clamp(32px,4.6vw,54px)] font-extrabold">{title}</h2>
      {intro && <p className="mt-5 text-[17px] leading-relaxed text-paper/60">{intro}</p>}
    </Reveal>
  );
}

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const pains = [
  {
    n: "01",
    title: "Tu publies au hasard",
    text: "Tu postes, tu fais des lives, tu te montres… mais personne n'achète. Le mois passe et le compte ne bouge pas.",
  },
  {
    n: "02",
    title: "Ton offre n'est pas claire",
    text: "Les gens aiment ton contenu, mais ils ne comprennent pas ce que tu vends, ni pourquoi ils devraient payer maintenant.",
  },
  {
    n: "03",
    title: "Tu n'as aucun système",
    text: "Pas de boutique, pas de page de vente, pas de relance WhatsApp. Chaque vente te demande un effort énorme.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Le vrai problème"
          title={
            <>
              Tu as une compétence. <span className="text-paper/40">Elle ne te rapporte encore rien.</span>
            </>
          }
          intro="Ton blocage ne vient ni de ton talent, ni de ton prix, ni de ton marché. Il vient de ton système. Tu n'as pas besoin de plus d'efforts : tu as besoin du bon chemin."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.n} delay={i * 120} as="article" className="card-glow group rounded-[26px] p-7 sm:p-8">
              <span className="font-display text-[56px] leading-none font-extrabold text-white/[0.07] transition group-hover:text-rose/30">{p.n}</span>
              <h3 className="mt-4 text-[23px] font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-paper/60">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SHOP = "https://boutique.godwinsoola.com";

export const site = {
  name: "Godwin Soola",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://godwin-soola.vercel.app",
  tagline: "Je t'aide à faire de l'argent avec ton savoir-faire",
  email: "hello@godwinsoola.com",
  // Numéro WhatsApp au format international, sans "+" ni espaces (ex. 2250576792525).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2250576792525",
  shop: SHOP,
  program: `${SHOP}/monetise`,
  coaching: `${SHOP}/prd_czb7mz`,
  communityStandard: `${SHOP}/prd_w3z7vj`,
  communityVip: `${SHOP}/prd_pztk3o`,
  telegram: "https://t.me/+eBmH_0ccOxkxNWRk",
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/godwinparlebusiness" },
    { name: "Instagram", href: "https://www.instagram.com/godwin_soola/" },
    { name: "TikTok", href: "https://www.tiktok.com/@godwinsoola" },
    { name: "YouTube", href: "https://www.youtube.com/@godwin_parle_business" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/godwinsoola/" },
    { name: "Telegram", href: "https://t.me/+eBmH_0ccOxkxNWRk" },
  ],
  legal: [
    { name: "Mentions légales", href: `${SHOP}/legal-notice` },
    { name: "Conditions d'utilisation", href: `${SHOP}/terms-of-service` },
    { name: "Confidentialité", href: `${SHOP}/privacy-policy` },
  ],
} as const;

export type SocialName = (typeof site.socials)[number]["name"];

export const nav = [
  { label: "Méthode", href: "#methode" },
  { label: "Programme 21 jours", href: "#programme" },
  { label: "Boutique", href: "#boutique" },
  { label: "Communauté", href: "#communaute" },
  { label: "Avis", href: "#avis" },
];

export const stats = [
  { value: 17661, suffix: "", label: "Clients servis" },
  { value: 57, suffix: "K", label: "Abonnés Facebook" },
  { value: 97, suffix: "%", label: "Clients satisfaits" },
  { value: 100, suffix: "M+", label: "FCFA générés en ligne" },
];

export type Product = {
  title: string;
  kind: string;
  image: string;
  href: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  rating: string;
  reviews: number;
};

export const products: Product[] = [
  {
    title: "Fast Coaching d'1 heure pour débloquer ton business aujourd'hui",
    kind: "Coaching privé",
    image: "/images/products/fast-coaching.jpg",
    href: `${SHOP}/prd_czb7mz`,
    price: "89,61 $",
    oldPrice: "179,22 $",
    badge: "-50%",
    rating: "83%",
    reviews: 6,
  },
  {
    title: "Rejoins la communauté N°1 du business en ligne en Afrique",
    kind: "Communauté · mensuel",
    image: "/images/products/communaute-standard.jpg",
    href: `${SHOP}/prd_w3z7vj`,
    price: "17,93 $",
    oldPrice: "26,89 $",
    badge: "-33%",
    rating: "100%",
    reviews: 23,
  },
  {
    title: "Copie-colle les 50 messages WhatsApp qui rapportent tes premiers 10 000 à 100 000 FCFA",
    kind: "Guide prêt à l'emploi",
    image: "/images/products/whatsapp-50-messages.png",
    href: `${SHOP}/prd_u32lzkdw`,
    price: "Gratuit",
    rating: "90%",
    reviews: 10,
  },
  {
    title: "La formation de 45 min à suivre si tu fais la pub Facebook (mise à jour Andromeda)",
    kind: "Formation vidéo",
    image: "/images/products/pub-andromeda.jpg",
    href: `${SHOP}/prd_cfahm2`,
    price: "Gratuit",
    rating: "84%",
    reviews: 74,
  },
  {
    title: "Apprends à lancer des campagnes publicitaires Facebook (édition 2026) — Les bases",
    kind: "Formation vidéo",
    image: "/images/products/pub-facebook-bases.jpg",
    href: `${SHOP}/prd_95gnmn`,
    price: "Gratuit",
    rating: "96%",
    reviews: 111,
  },
];

export const testimonials = [
  {
    name: "Issakha M.",
    role: "Programme 21 jours",
    quote:
      "L'accompagnement est bien structuré et pratique. J'ai pu reformuler les promesses de mes offres avec un langage qui résonne auprès de ma cible. Il a aussi pointé les erreurs à éviter et partagé des astuces pour mieux utiliser l'IA.",
  },
  {
    name: "Cadnel D.",
    role: "Programme 21 jours",
    quote:
      "C'est le meilleur accompagnement que je connaisse. C'est un excellent coach. Je vous recommande vivement ses services.",
  },
  {
    name: "Edwige A.",
    role: "Programme 21 jours",
    quote: "Bonne expérience. Service client réactif et à l'écoute du client.",
  },
  {
    name: "Kevin Désiré D.",
    role: "Programme 21 jours",
    quote:
      "J'ai été ravi à l'annonce de cette formation. C'est un programme que je cherchais depuis longtemps pour avoir un complément de revenus. J'ai hâte de commencer !",
  },
];

export const faq = [
  {
    q: "Je suis débutant, est-ce que c'est pour moi ?",
    a: "Oui, si tu as déjà une compétence, une expérience ou un savoir-faire à partager. Tu n'as pas besoin d'être expert en marketing : on part de ce que tu sais faire, et je te donne les étapes dans l'ordre, sans jargon.",
  },
  {
    q: "Je n'ai pas beaucoup de temps. Est-ce que je peux suivre ?",
    a: "Oui. Les séances en direct sont enregistrées et tu retrouves chaque rediffusion dans l'espace membre. Compte environ 30 à 60 minutes par jour pour appliquer. C'est l'application qui fait les résultats, pas le nombre d'heures.",
  },
  {
    q: "Quand commence la prochaine session ?",
    a: "Les dates de la prochaine cohorte sont affichées sur la page d'inscription. Les places sont limitées à 20 personnes par session : si c'est complet, tu peux réserver un appel pour être prévenu en priorité.",
  },
  {
    q: "Et si ça ne marche pas pour moi ?",
    a: "Tu suis le programme, tu appliques, et si tu ne fais pas ta première vente, tu es remboursé et tu gardes tout. Le risque est de mon côté, parce que je sais que ce système marche.",
  },
  {
    q: "Comment se passe l'appel stratégique ?",
    a: "Tu remplis le court formulaire, ta demande arrive directement sur WhatsApp. On fixe ensemble un créneau, puis on fait le point sur ta situation et je te dis clairement quoi faire ensuite — même si ce n'est pas avec moi.",
  },
  {
    q: "Comment je paie et comment j'accède aux produits ?",
    a: "Tous les produits sont vendus sur ma boutique sécurisée (Chariow), avec paiement par Mobile Money ou carte. L'accès est envoyé automatiquement par e-mail juste après l'achat.",
  },
];

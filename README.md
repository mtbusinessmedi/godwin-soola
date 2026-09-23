# Godwin Soola — Landing page

Landing page premium pour Godwin Soola (Les Rentables) : programme 21 jours, boutique Chariow, communauté, et réservation d'appel via WhatsApp.

**Stack :** Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Vercel

## Démarrer

```bash
npm install
npm run dev
```

## Modifier le contenu

Tout le contenu (liens boutique, produits, avis, FAQ, réseaux, numéro WhatsApp) est centralisé dans `src/lib/site.ts`.

## Réservation d'appel

Les boutons « Réserver un appel » ouvrent un formulaire (`src/components/booking/BookingModal.tsx`). À l'envoi, un message pré-rempli s'ouvre dans WhatsApp vers le numéro défini dans `site.whatsappNumber` (modifiable aussi via la variable d'environnement `NEXT_PUBLIC_WHATSAPP_NUMBER`).

Lien direct vers le formulaire : `https://<domaine>/#reserver`

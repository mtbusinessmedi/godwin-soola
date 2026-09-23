type P = React.SVGProps<SVGSVGElement>;

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Check = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.4} {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const Close = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.2} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Plus = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" /></svg>
);
export const Calendar = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="3.5" y="5" width="17" height="15.5" rx="3" /><path d="M8 3v4M16 3v4M3.5 10h17" /></svg>
);
export const Target = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>
);
export const Cart = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M3 4h2.2l2.3 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6.2" /><circle cx="9.5" cy="20" r="1.2" /><circle cx="17.5" cy="20" r="1.2" /></svg>
);
export const Megaphone = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M4 10v4a1 1 0 0 0 1 1h2l8 4.5V4.5L7 9H5a1 1 0 0 0-1 1ZM18.5 9a4 4 0 0 1 0 6M7.5 15l1.2 5" /></svg>
);
export const Shield = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.3 7.5 9.5 4.4-1.2 7.5-4.9 7.5-9.5V6Z" /><path d="m8.8 12 2.2 2.2 4.3-4.4" /></svg>
);
export const Users = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.8c1.7.7 2.8 2.4 3 5.2" /></svg>
);
export const Live = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="2.5" y="5.5" width="14" height="13" rx="3" /><path d="m16.5 10 5-3v10l-5-3" /></svg>
);
export const Replay = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.5M4 4v4.5h4.5" /><path d="m10.5 9 4.5 3-4.5 3z" fill="currentColor" /></svg>
);
export const Chat = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4A2.5 2.5 0 0 1 4 13.5Z" /><path d="M8.5 8.5h7M8.5 11.5h4.5" /></svg>
);
export const Gift = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="3.5" y="8" width="17" height="4" rx="1" /><path d="M5 12v7.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V12M12 8v12.5M12 8S10.8 3.5 8 3.5a2.2 2.2 0 0 0 0 4.5M12 8s1.2-4.5 4-4.5a2.2 2.2 0 0 1 0 4.5" /></svg>
);
export const Crown = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="m3.5 8 4.5 4 4-6.5 4 6.5 4.5-4-1.8 10.5H5.3Z" /><path d="M6 21h12" /></svg>
);
export const Bolt = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><path d="M13 2.5 4.5 13.5h6.5l-1 8 8.5-11h-6.5z" /></svg>
);
export const Sparkle = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 1.5c.6 4.9 2.6 8.9 10.5 10.5-7.9 1.6-9.9 5.6-10.5 10.5C11.4 17.6 9.4 13.6 1.5 12 9.4 10.4 11.4 6.4 12 1.5Z" /></svg>
);
export const Menu = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2} {...p}><path d="M4 7h16M4 12h16M4 17h10" /></svg>
);
export const Mail = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
);

export const WhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7 6.3 6.3 0 0 0 1.3 3.3 14.3 14.3 0 0 0 5.5 4.9c2 .9 2.8 1 3.9.8a3.3 3.3 0 0 0 2.1-1.5 2.7 2.7 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.3ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.6Z" />
  </svg>
);

export const SocialIcon = ({ name, ...p }: P & { name: string }) => {
  switch (name) {
    case "Facebook":
      return <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13.5 21v-7.5H16l.4-3h-2.9V8.7c0-.9.3-1.5 1.5-1.5h1.5V4.5a20 20 0 0 0-2.3-.1c-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.4V21Z" /></svg>;
    case "Instagram":
      return <svg viewBox="0 0 24 24" {...stroke} {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" /></svg>;
    case "TikTok":
      return <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M16.6 3c.4 2.2 1.8 3.7 4 3.9v3.2a7.3 7.3 0 0 1-4-1.3v6.3a5.9 5.9 0 1 1-5.9-5.9l.9.1v3.3a2.7 2.7 0 1 0 1.8 2.5V3Z" /></svg>;
    case "YouTube":
      return <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.8A27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3Z" /></svg>;
    case "LinkedIn":
      return <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M6.9 8.8H3.6V20h3.3ZM5.3 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.4 13.6c0-3-.7-5.1-4.2-5.1a3.6 3.6 0 0 0-3.3 1.8V8.8H9.8V20h3.3v-5.5c0-1.5.3-2.9 2.1-2.9s1.9 1.7 1.9 3V20h3.3Z" /></svg>;
    case "Telegram":
      return <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M21.4 4.2 2.9 11.3c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.1.9.8.9.5 0 .7-.2 1-.5l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.3-.5-1.9-1.4-1.5Zm-3 3.4-8.7 7.9-.3 3.5-1.6-5.1 10-6.3c.5-.3.9-.1.6 0Z" /></svg>;
    default:
      return null;
  }
};

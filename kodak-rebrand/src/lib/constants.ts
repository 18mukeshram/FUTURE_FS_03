// src/lib/constants.ts

export const SITE_CONFIG = {
  name: "Kodak",
  tagline: "Capture the Moment. Create the Future.",
  description:
    "Revolutionary imaging technology for creators, innovators, and visionaries.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kodak-rebrand.vercel.app",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://twitter.com/kodak", label: "Twitter", icon: "twitter" },
  {
    href: "https://instagram.com/kodak",
    label: "Instagram",
    icon: "instagram",
  },
  { href: "https://youtube.com/kodak", label: "YouTube", icon: "youtube" },
  {
    href: "https://linkedin.com/company/kodak",
    label: "LinkedIn",
    icon: "linkedin",
  },
] as const;

export const FOOTER_LINKS = {
  products: [
    { href: "/products/cameras", label: "Cameras" },
    { href: "/products/film", label: "Film" },
    { href: "/products/printers", label: "Printers" },
    { href: "/products/accessories", label: "Accessories" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/press", label: "Press" },
    { href: "/sustainability", label: "Sustainability" },
  ],
  support: [
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/shipping", label: "Shipping" },
    { href: "/returns", label: "Returns" },
  ],
} as const;

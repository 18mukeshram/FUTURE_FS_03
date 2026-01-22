// src/types/index.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar?: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  backgroundVideo?: string;
}

export interface SiteContent {
  hero: HeroContent;
  features: Feature[];
  products: Product[];
  testimonials: Testimonial[];
}

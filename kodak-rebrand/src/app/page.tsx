// src/app/page.tsx
import {
  Hero,
  Features,
  Products,
  Testimonials,
  CTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <CTA />
    </>
  );
}

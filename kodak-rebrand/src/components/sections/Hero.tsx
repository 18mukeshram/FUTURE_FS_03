// src/components/sections/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";
// import { cn } from "@/lib/utils";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaPrimaryText?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
}

export function Hero({
  headline = "Capture the Moment.\nCreate the Future.",
  subheadline = "Revolutionary imaging technology for creators, innovators, and visionaries. Experience photography reimagined for the digital age.",
  ctaPrimaryText = "Explore Products",
  ctaPrimaryHref = "/products",
  ctaSecondaryText = "Watch Story",
  ctaSecondaryHref = "#video",
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-kodak-cream via-white to-kodak-warm-gray" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-kodak-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-kodak-gold/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0A0A0A 1px, transparent 1px),
              linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative z-10 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-kodak-gold/10 text-kodak-black text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-kodak-gold rounded-full mr-2 animate-pulse" />
              Introducing the New Era of Imaging
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-kodak-black leading-[0.9] tracking-tight mb-8"
          >
            {headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line.includes("Future") ? (
                  <>
                    {line.replace("Future.", "")}
                    <span className="text-kodak-gold">Future.</span>
                  </>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-kodak-mid-gray max-w-2xl mb-10"
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href={ctaPrimaryHref}>
              <Button variant="primary" size="lg" className="group">
                {ctaPrimaryText}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href={ctaSecondaryHref}>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 w-5 h-5" />
                {ctaSecondaryText}
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-16 border-t border-gray-200"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: "130+", label: "Years of Innovation" },
                { value: "50M+", label: "Photos Captured Daily" },
                { value: "190+", label: "Countries Served" },
                { value: "4.9★", label: "Customer Rating" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl sm:text-4xl font-bold text-kodak-black">
                    {stat.value}
                  </div>
                  <div className="text-sm text-kodak-mid-gray mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-kodak-mid-gray">
          <span className="text-xs font-medium mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-kodak-mid-gray rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-kodak-gold rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// src/components/sections/Testimonials.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Kodak's new imaging technology has completely transformed how we capture and preserve memories. The quality is simply unmatched.",
    author: "Sarah Chen",
    title: "Professional Photographer",
    company: "Chen Studios",
  },
  {
    id: "2",
    quote:
      "The blend of heritage and innovation is remarkable. These cameras feel like they're from the future while honoring photography's rich past.",
    author: "Marcus Rodriguez",
    title: "Creative Director",
    company: "Aperture Agency",
  },
  {
    id: "3",
    quote:
      "From amateur to professional, Kodak equipment has been with me every step of the way. The reliability is incredible.",
    author: "Emily Watson",
    title: "Travel Photographer",
    company: "National Geographic",
  },
];

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export function Testimonials({
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      className="py-24 lg:py-32 bg-kodak-black text-white overflow-hidden"
      ref={ref}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Loved by <span className="text-kodak-gold">Creators</span>
          </h2>
          <p className="text-lg text-gray-400">
            See what photographers around the world are saying
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-0 opacity-20">
            <Quote className="w-24 h-24 text-kodak-gold" />
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center px-8"
              >
                <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>
                <div className="flex flex-col items-center">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 rounded-full bg-kodak-gold/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-kodak-gold">
                      {testimonials[activeIndex].author.charAt(0)}
                    </span>
                  </div>
                  <div className="font-semibold text-lg">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[activeIndex].title},{" "}
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className={cn(
                "p-3 rounded-full border border-white/20",
                "hover:bg-white/10 transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-kodak-gold",
              )}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-8 bg-kodak-gold"
                      : "bg-white/30 hover:bg-white/50",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className={cn(
                "p-3 rounded-full border border-white/20",
                "hover:bg-white/10 transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-kodak-gold",
              )}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

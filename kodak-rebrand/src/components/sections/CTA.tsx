// src/components/sections/CTA.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Button } from "@/components/ui";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-kodak-gold" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-kodak-black mb-6">
            Ready to Capture Your Vision?
          </h2>
          <p className="text-xl text-kodak-black/70 mb-10">
            Join millions of creators who trust Kodak for their most important
            moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button variant="secondary" size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-kodak-black hover:bg-kodak-black hover:text-kodak-gold"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

// src/components/sections/Features.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Zap, Shield, Sparkles, Globe, Award } from "lucide-react";
import { Container, Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Feature } from "@/types";

const defaultFeatures: Feature[] = [
  {
    id: "1",
    title: "Professional Quality",
    description:
      "Industry-leading sensors and optics deliver stunning clarity in every shot.",
    icon: "camera",
  },
  {
    id: "2",
    title: "Lightning Fast",
    description:
      "Advanced processing captures moments instantly with zero shutter lag.",
    icon: "zap",
  },
  {
    id: "3",
    title: "Built to Last",
    description: "Weather-sealed construction withstands any environment.",
    icon: "shield",
  },
  {
    id: "4",
    title: "AI-Powered",
    description: "Smart features enhance your photography automatically.",
    icon: "sparkles",
  },
  {
    id: "5",
    title: "Global Network",
    description: "Cloud connectivity keeps your memories safe and accessible.",
    icon: "globe",
  },
  {
    id: "6",
    title: "Award Winning",
    description: "Recognized by industry experts for innovation and design.",
    icon: "award",
  },
];

const iconMap = {
  camera: Camera,
  zap: Zap,
  shield: Shield,
  sparkles: Sparkles,
  globe: Globe,
  award: Award,
};

interface FeaturesProps {
  features?: Feature[];
  title?: string;
  subtitle?: string;
}

export function Features({
  features = defaultFeatures,
  title = "Why Choose Kodak",
  subtitle = "Combining heritage craftsmanship with cutting-edge technology",
}: FeaturesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-white" ref={ref}>
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-kodak-black mb-4">
            {title}
          </h2>
          <p className="text-lg text-kodak-mid-gray">{subtitle}</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent =
              iconMap[feature.icon as keyof typeof iconMap] || Camera;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex-shrink-0 w-12 h-12 rounded-xl",
                        "bg-kodak-gold/10 flex items-center justify-center",
                        "group-hover:bg-kodak-gold group-hover:scale-110",
                        "transition-all duration-300",
                      )}
                    >
                      <IconComponent
                        className={cn(
                          "w-6 h-6 text-kodak-gold",
                          "group-hover:text-kodak-black",
                          "transition-colors duration-300",
                        )}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-kodak-black mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-kodak-mid-gray">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

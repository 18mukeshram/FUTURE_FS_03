// src/components/sections/Products.tsx
"use client";

import { useRef } from "react";
// import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Button, Card } from "@/components/ui";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "KODAK PIXPRO AZ528",
    description:
      "Astro Zoom Bridge Camera with 52x optical zoom and 1080p video.",
    price: 299.99,
    image: "/images/products/camera-1.jpg",
    category: "Cameras",
    features: ["52x Optical Zoom", "16MP Sensor", "1080p Video"],
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "KODAK Mini Shot 3",
    description:
      "Instant camera and photo printer combo with Bluetooth connectivity.",
    price: 129.99,
    image: "/images/products/camera-2.jpg",
    category: "Instant",
    features: ["3x3 Prints", "Bluetooth", "App Connected"],
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "KODAK EKTAR H35",
    description: "Half-frame 35mm film camera for creative analog photography.",
    price: 49.99,
    image: "/images/products/camera-3.jpg",
    category: "Film",
    features: ["Half Frame", "Built-in Flash", "72 Exposures"],
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

interface ProductsProps {
  products?: Product[];
  title?: string;
  subtitle?: string;
}

export function Products({
  products = defaultProducts,
  title = "Featured Products",
  subtitle = "Discover our latest innovations in imaging technology",
}: ProductsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-kodak-warm-gray" ref={ref}>
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-kodak-black mb-4">
              {title}
            </h2>
            <p className="text-lg text-kodak-mid-gray max-w-xl">{subtitle}</p>
          </div>
          <Link href="/products" className="mt-4 sm:mt-0">
            <Button variant="ghost" className="group">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card padding="none" className="overflow-hidden group">
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for product image */}
                    <div className="w-3/4 h-3/4 bg-gradient-to-br from-kodak-gold/20 to-transparent rounded-2xl flex items-center justify-center">
                      <span className="text-6xl">📷</span>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-kodak-black/0 group-hover:bg-kodak-black/10 transition-all duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <span className="text-xs font-medium text-kodak-gold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-kodak-black mt-2 mb-2 group-hover:text-kodak-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-kodak-mid-gray text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-kodak-warm-gray rounded-full text-xs text-kodak-mid-gray"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-kodak-black">
                      {formatPrice(product.price)}
                    </span>
                    <Link href={`/products/${product.id}`}>
                      <Button variant="secondary" size="sm">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

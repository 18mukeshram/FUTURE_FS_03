// src/app/products/page.tsx
import type { Metadata } from "next";
import { Container, Card, Button } from "@/components/ui";
import { formatPrice } from "@/lib/utils";
// import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the complete range of Kodak cameras, film, and imaging products.",
};

const products = [
  {
    id: "1",
    name: "KODAK PIXPRO AZ528",
    description: "Astro Zoom Bridge Camera with 52x optical zoom.",
    price: 299.99,
    category: "Digital Cameras",
  },
  {
    id: "2",
    name: "KODAK Mini Shot 3",
    description: "Instant camera and photo printer combo.",
    price: 129.99,
    category: "Instant Cameras",
  },
  {
    id: "3",
    name: "KODAK EKTAR H35",
    description: "Half-frame 35mm film camera.",
    price: 49.99,
    category: "Film Cameras",
  },
  {
    id: "4",
    name: "KODAK Gold 200",
    description: "Classic color negative film, 3-pack.",
    price: 24.99,
    category: "Film",
  },
  {
    id: "5",
    name: "KODAK Step Printer",
    description: "Portable instant photo printer.",
    price: 69.99,
    category: "Printers",
  },
  {
    id: "6",
    name: "KODAK Luma 150",
    description: "Portable projector with built-in speaker.",
    price: 199.99,
    category: "Projectors",
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-kodak-warm-gray">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-kodak-black mb-6">
              Our Products
            </h1>
            <p className="text-xl text-kodak-mid-gray">
              From professional cameras to instant printers, discover the
              complete range of Kodak imaging solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} padding="none" className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <span className="text-6xl">📷</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-kodak-gold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-kodak-black mt-2 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-kodak-mid-gray text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-kodak-black">
                      {formatPrice(product.price)}
                    </span>
                    <Button variant="secondary" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

// src/app/about/page.tsx
import type { Metadata } from "next";
import { Container, Card } from "@/components/ui";
import { Camera, Heart, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kodak's 130+ year history of innovation in imaging technology.",
};

const values = [
  {
    icon: Camera,
    title: "Innovation",
    description: "Pioneering imaging technology since 1888.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Dedicated to helping people capture their moments.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving creators in over 190 countries.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest quality standards.",
  },
];

const timeline = [
  { year: "1888", event: "George Eastman introduces the Kodak camera" },
  { year: "1935", event: "Kodachrome color film is launched" },
  { year: "1963", event: "Instamatic camera revolutionizes photography" },
  { year: "1975", event: "First digital camera prototype developed at Kodak" },
  { year: "2024", event: "Kodak redefines imaging for the digital age" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-kodak-black text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              130 Years of <span className="text-kodak-gold">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300">
              From the invention of roll film to pioneering digital imaging,
              Kodak has been at the forefront of capturing life&#39;s moments.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-kodak-black mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-kodak-mid-gray">
                <p>
                  In 1888, George Eastman revolutionized photography with a
                  simple idea: &quot;You press the button, we do the rest.&quot; This
                  philosophy of making imaging accessible to everyone has guided
                  Kodak for over a century.
                </p>
                <p>
                  Today, we continue that legacy by combining our heritage of
                  craftsmanship with cutting-edge technology. From professional
                  cinematography to instant consumer cameras, Kodak remains
                  committed to helping people capture and share their stories.
                </p>
                <p>
                  As we look to the future, we&#39;re embracing new technologies
                  while honoring the timeless art of photography. The Kodak
                  moment continues to evolve.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-kodak-gold/20 to-kodak-cream rounded-3xl flex items-center justify-center">
                <span className="text-9xl">📸</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-kodak-warm-gray">
        <Container>
          <h2 className="text-4xl font-bold text-kodak-black mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-kodak-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-kodak-gold" />
                </div>
                <h3 className="text-xl font-bold text-kodak-black mb-2">
                  {value.title}
                </h3>
                <p className="text-kodak-mid-gray">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-4xl font-bold text-kodak-black mb-12 text-center">
            Our History
          </h2>
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-bold text-kodak-gold text-lg">
                    {item.year}
                  </span>
                </div>
                <div className="relative flex-grow pb-8 border-l-2 border-kodak-gold pl-6">
                  <div className="absolute left-[-9px] top-1 w-4 h-4 bg-kodak-gold rounded-full" />
                  <p className="text-kodak-black">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

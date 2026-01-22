// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { Container, Card, Input, Button } from "@/components/ui";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// Note: Metadata must be in a separate server component for client components
// For this demo, we'll include the form functionality

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@kodak.com",
    href: "mailto:hello@kodak.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (888) KODAK-00",
    href: "tel:+18885632500",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Rochester, NY, USA",
    href: "#",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-kodak-warm-gray">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-kodak-black mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-kodak-mid-gray">
              Have a question or want to learn more? We&rsquo;d love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-kodak-black mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-kodak-gold/10 rounded-xl flex items-center justify-center group-hover:bg-kodak-gold transition-colors">
                      <item.icon className="w-5 h-5 text-kodak-gold group-hover:text-kodak-black transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-medium text-kodak-black">
                        {item.title}
                      </h3>
                      <p className="text-kodak-mid-gray group-hover:text-kodak-gold transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-12">
                <h3 className="font-bold text-kodak-black mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-kodak-mid-gray">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-kodak-black mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-kodak-mid-gray mb-6">
                      Thank you for reaching out. We&rsquo;ll get back to you shortly.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Input
                      label="Subject"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-kodak-black mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-kodak-black placeholder:text-kodak-mid-gray transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-kodak-gold focus:border-transparent hover:border-gray-300 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

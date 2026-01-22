// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container, Button } from "@/components/ui";
import { KodakLogo } from "@/components/icons";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent",
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 transform transition-transform hover:scale-105"
          >
            <KodakLogo
              variant="full"
              color={isScrolled || isMobileMenuOpen ? "default" : "default"}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium",
                  "transition-all duration-200",
                  pathname === link.href
                    ? "text-kodak-gold bg-kodak-black"
                    : "text-kodak-black hover:bg-kodak-warm-gray",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden relative z-10",
              "p-2 rounded-lg",
              "transition-colors duration-200",
              "hover:bg-kodak-warm-gray",
            )}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-kodak-black" />
            ) : (
              <Menu className="w-6 h-6 text-kodak-black" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40",
          "bg-white",
          "transition-all duration-300 ease-out",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <Container className="pt-24">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-4 rounded-xl text-xl font-medium",
                  "transition-all duration-200",
                  "transform",
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0",
                  pathname === link.href
                    ? "text-kodak-gold bg-kodak-black"
                    : "text-kodak-black hover:bg-kodak-warm-gray",
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div
              className={cn(
                "pt-4 transform transition-all duration-300",
                isMobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0",
              )}
              style={{ transitionDelay: `${NAV_LINKS.length * 50}ms` }}
            >
              <Button variant="primary" size="lg" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

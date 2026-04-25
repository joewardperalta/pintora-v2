"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Collections", path: "/collections" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl tracking-tight text-[#1c1b21]">
            Pintora
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-sm text-[#1c1b21]/70 hover:text-[#1c1b21] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#1c1b21] text-white text-sm hover:bg-[#1c1b21]/90 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1c1b21] cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#1c1b21]/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="block text-sm text-[#1c1b21]/70 hover:text-[#1c1b21] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full px-6 py-2.5 bg-[#1c1b21] text-white text-sm text-center hover:bg-[#1c1b21]/90 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

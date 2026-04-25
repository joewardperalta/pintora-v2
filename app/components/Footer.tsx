import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1b21] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl tracking-tight">Pintora</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium custom apparel for churches and brands in Toronto.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm mb-4 text-white/90">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Custom Printing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Design Assistance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm mb-4 text-white/90">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm mb-4 text-white/90">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-white/60 shrink-0" />
                <span className="text-sm text-white/60">Toronto, Canada</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-white/60 shrink-0" />
                <a
                  href="mailto:hello@pintora.ca"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  hello@pintora.ca
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-white/60 shrink-0" />
                <a
                  href="tel:+14165551234"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  (416) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} Pintora. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white/40 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Home } from "lucide-react";
import BackButton from "./components/ui/buttons/BackButton";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-white flex items-center">
      <div className="w-full py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <p className="text-8xl md:text-9xl text-[#1c1b21]/10 mb-6">404</p>
            <h1 className="text-4xl md:text-5xl text-[#1c1b21] mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-[#1c1b21]/60 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1c1b21] text-white hover:bg-[#1c1b21]/90 transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <BackButton />
          </div>

          <div className="mt-16 pt-16 border-t border-[#1c1b21]/10">
            <p className="text-[#1c1b21]/60 mb-6">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services" className="text-[#1c1b21] hover:underline">
                Services
              </Link>
              <Link
                href="/collections"
                className="text-[#1c1b21] hover:underline"
              >
                Collections
              </Link>
              <Link href="/about" className="text-[#1c1b21] hover:underline">
                About
              </Link>
              <Link href="/contact" className="text-[#1c1b21] hover:underline">
                Contact
              </Link>
              <Link href="/faq" className="text-[#1c1b21] hover:underline">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

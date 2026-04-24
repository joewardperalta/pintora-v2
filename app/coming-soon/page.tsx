"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-[#1c1b21] text-white flex items-center">
      <div className="w-full py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl tracking-tight mb-6">
              Pintora
            </h1>
            <div className="w-24 h-1 bg-[#c9b896] mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl text-white/80 mb-4">
              Something premium is coming
            </p>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Premium custom apparel for churches and brands. Clean,
              high-quality prints that represent your message with excellence.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-16">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-white/80 mb-4">
                  Be the first to know when we launch
                </p>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-[#1c1b21] hover:bg-white/90 transition-colors whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-8">
                <div className="w-12 h-12 bg-[#c9b896] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="text-xl text-white/90 mb-2">
                  You&apos;re on the list!
                </p>
                <p className="text-white/60">
                  We&apos;ll notify you as soon as we launch.
                </p>
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Premium Quality",
                description: "High-grade DTF printing on quality apparel",
              },
              {
                title: "Church Focused",
                description: "Specialized service for ministries and events",
              },
              {
                title: "Toronto Based",
                description: "Local service with nationwide shipping",
              },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <h3 className="text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-white/10">
            <p className="text-white/40 text-sm">
              Questions?{" "}
              <a
                href="mailto:hello@pintora.ca"
                className="text-white/60 hover:text-white transition-colors"
              >
                hello@pintora.ca
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

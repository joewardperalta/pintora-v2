"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    quantity: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      <section className="bg-[#1c1b21] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl tracking-tight mb-6">
              Get a Quote
            </h1>
            <p className="text-xl text-white/70">
              Tell us about your project and we&apos;ll get back to you within
              24 hours
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl text-[#1c1b21] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#c9b896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1c1b21] mb-1">Email</p>
                    <a
                      href="mailto:hello@pintora.ca"
                      className="text-[#1c1b21]/60 hover:text-[#1c1b21] transition-colors"
                    >
                      hello@pintora.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#c9b896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1c1b21] mb-1">Phone</p>
                    <a
                      href="tel:+14165551234"
                      className="text-[#1c1b21]/60 hover:text-[#1c1b21] transition-colors"
                    >
                      (416) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#c9b896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1c1b21] mb-1">Location</p>
                    <p className="text-[#1c1b21]/60">
                      Toronto, Ontario, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#c9b896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1c1b21] mb-1">Hours</p>
                    <p className="text-[#1c1b21]/60">Mon-Fri: 9am - 6pm EST</p>
                    <p className="text-[#1c1b21]/60">Sat-Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#fafaf9] p-8 border border-[#1c1b21]/10">
                <h3 className="text-xl text-[#1c1b21] mb-4">
                  Why Choose Pintora?
                </h3>
                <ul className="space-y-3">
                  {[
                    "24-hour quote response time",
                    "No minimum order (12+ pieces recommended)",
                    "Free design consultation",
                    "Premium DTF printing technology",
                    "Transparent pricing",
                    "On-time delivery guarantee",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#c9b896] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1c1b21]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-[#1c1b21] mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#1c1b21]/20 bg-white focus:outline-none focus:border-[#1c1b21] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-[#1c1b21] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#1c1b21]/20 bg-white focus:outline-none focus:border-[#1c1b21] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-[#1c1b21] mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#1c1b21]/20 bg-white focus:outline-none focus:border-[#1c1b21] transition-colors"
                    placeholder="(416) 555-1234"
                  />
                </div>

                <div>
                  <label
                    htmlFor="orderType"
                    className="block text-sm text-[#1c1b21] mb-2"
                  >
                    Order Type *
                  </label>
                  <select
                    id="orderType"
                    name="orderType"
                    required
                    value={formData.orderType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#1c1b21]/20 bg-white focus:outline-none focus:border-[#1c1b21] transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="church">Church / Ministry</option>
                    <option value="event">Event / Conference</option>
                    <option value="business">Small Business</option>
                    <option value="custom">Custom Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm text-[#1c1b21] mb-2"
                  >
                    Estimated Quantity *
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#1c1b21]/20 bg-white focus:outline-none focus:border-[#1c1b21] transition-colors"
                    placeholder="e.g., 50 t-shirts, 25 hoodies"
                  />
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm text-[#1c1b21] mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={6}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#1c1b21]/20 bg-white focus:outline-none focus:border-[#1c1b21] transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, design ideas, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#1c1b21] text-white hover:bg-[#1c1b21]/90 transition-colors"
                >
                  Submit Quote Request
                </button>

                <p className="text-sm text-[#1c1b21]/60 text-center">
                  We&apos;ll respond within 24 hours with a custom quote
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

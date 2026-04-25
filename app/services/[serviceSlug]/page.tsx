"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Check, ArrowLeft } from "lucide-react";

const serviceData = {
  "custom-printing": {
    title: "Custom Printing",
    subtitle: "Premium DTF printing for your unique designs",
    description:
      "Our custom printing service uses state-of-the-art DTF (Direct-to-Film) technology to produce vibrant, durable prints on premium apparel. Perfect for churches, events, and brands that demand excellence.",
    included: [
      "High-resolution DTF printing",
      "Premium quality apparel (Gildan, Bella+Canvas, or equivalent)",
      'Front chest print up to 12x16"',
      "Unlimited colors and gradients",
      "Soft, flexible prints that move with fabric",
      "Pre-production digital mockup",
      "Quality inspection before shipment",
    ],
    process: [
      {
        step: "Submit Your Design",
        description:
          "Send us your artwork or work with our design team to create something custom",
      },
      {
        step: "Review & Approve",
        description:
          "We'll send a digital mockup for your approval before production begins",
      },
      {
        step: "Production",
        description:
          "Your order goes into production with our premium DTF printing process",
      },
      {
        step: "Quality Check",
        description:
          "Every piece is inspected to ensure it meets our high standards",
      },
      {
        step: "Delivery",
        description: "Your order arrives ready to wear, on time as promised",
      },
    ],
  },
  "bulk-orders": {
    title: "Bulk Orders",
    subtitle: "Special pricing for churches and organizations",
    description:
      "We specialize in bulk orders for churches, ministries, events, and organizations. Our volume pricing and dedicated support make it easy to outfit your entire team with premium custom apparel.",
    included: [
      "Volume discounts starting at 25 pieces",
      "Dedicated account manager",
      "Flexible payment terms available",
      "Priority production scheduling",
      "Individual bagging and labeling options",
      "Size chart and fitting guidance",
      "Bulk reorder discounts",
    ],
    process: [
      {
        step: "Initial Consultation",
        description:
          "Discuss your needs, timeline, and budget with your account manager",
      },
      {
        step: "Design & Sizing",
        description: "Finalize your design and collect sizes from your team",
      },
      {
        step: "Deposit & Production",
        description:
          "50% deposit starts production, balance due before shipping",
      },
      {
        step: "Quality Control",
        description: "Every order undergoes rigorous quality inspection",
      },
      {
        step: "Delivery & Follow-up",
        description:
          "Receive your order and we'll follow up to ensure satisfaction",
      },
    ],
  },
  "design-assistance": {
    title: "Design Assistance",
    subtitle: "Professional design support for your vision",
    description:
      "Not sure where to start with your design? Our team of experienced designers will help bring your ideas to life with clean, modern graphics that represent your brand or message with excellence.",
    included: [
      "Initial design consultation",
      "Up to 3 design concepts",
      "2 rounds of revisions",
      "Typography and color guidance",
      "Logo refinement and optimization",
      "Print-ready file preparation",
      "Mockup previews on actual apparel",
    ],
    process: [
      {
        step: "Discovery Call",
        description:
          "We'll discuss your vision, audience, and design preferences",
      },
      {
        step: "Concept Development",
        description:
          "Our designers create initial concepts based on your input",
      },
      {
        step: "Review & Refine",
        description:
          "You provide feedback and we refine the design to perfection",
      },
      {
        step: "Final Approval",
        description:
          "Approve the final design and receive all print-ready files",
      },
      {
        step: "Production Ready",
        description: "Your approved design moves directly to production",
      },
    ],
  },
};

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = serviceData[serviceSlug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-[#1c1b21] mb-4">Service Not Found</h1>
          <Link
            href="/services"
            className="text-[#1c1b21]/60 hover:text-[#1c1b21]"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="bg-[#1c1b21] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/70">{service.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#1c1b21] mb-6">
                Overview
              </h2>
              <p className="text-lg text-[#1c1b21]/70 leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="aspect-4/3 bg-[#fafaf9]"></div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-[#1c1b21] mb-12">
            What&apos;s Included
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {service.included.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#c9b896] shrink-0 mt-1" />
                <span className="text-[#1c1b21]/80 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-[#1c1b21] mb-12 text-center">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {service.process.map((item, i) => (
              <div key={i} className="flex gap-8">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#c9b896] text-white flex items-center justify-center text-lg">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#1c1b21] mb-2">{item.step}</h3>
                  <p className="text-[#1c1b21]/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#1c1b21] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to get started?</h2>
          <p className="text-xl text-white/60 mb-12">
            Let&apos;s discuss your project and create something exceptional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-[#1c1b21] text-center hover:bg-white/90 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/book-call"
              className="px-8 py-4 border border-white/20 text-white text-center hover:bg-white/10 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

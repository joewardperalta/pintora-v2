import Link from "next/link";
import {
  MessageSquare,
  Palette,
  Factory,
  Package,
  Clock,
  Check,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Consultation",
      description:
        "Tell us about your project, quantities, and timeline. We'll provide guidance on apparel selection, print locations, and pricing options.",
      duration: "15-30 minutes",
      deliverable: "Custom quote and timeline",
    },
    {
      number: "02",
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description:
        "Submit your artwork or work with our design team. We'll prepare your design for printing and send a digital mockup for your approval.",
      duration: "1-3 days",
      deliverable: "Print-ready design and mockup",
    },
    {
      number: "03",
      icon: <Factory className="w-8 h-8" />,
      title: "Production",
      description:
        "Your order enters production using our premium DTF printing process. Every piece is carefully printed and quality-checked before moving forward.",
      duration: "3-7 days",
      deliverable: "Completed apparel order",
    },
    {
      number: "04",
      icon: <Package className="w-8 h-8" />,
      title: "Delivery",
      description:
        "Your order is packaged and shipped or arranged for local pickup. We'll provide tracking information and follow up to ensure satisfaction.",
      duration: "1-3 days",
      deliverable: "Your premium apparel",
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-[#1c1b21] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl tracking-tight mb-6">
              How It Works
            </h1>
            <p className="text-xl text-white/70">
              A simple, transparent process that delivers premium results every
              time
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-4/3 bg-[#fafaf9] flex items-center justify-center">
                    <div className="text-[#1c1b21]/20">{step.icon}</div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="text-6xl text-[#1c1b21]/10 mb-4">
                    {step.number}
                  </div>
                  <h2 className="text-4xl text-[#1c1b21] mb-4">{step.title}</h2>
                  <p className="text-lg text-[#1c1b21]/70 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#1c1b21]/60">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Timeline: {step.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1c1b21]/60">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">
                        Deliverable: {step.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              Timeline Expectations
            </h2>
            <p className="text-xl text-[#1c1b21]/60 max-w-2xl mx-auto">
              Clear timelines you can count on
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Standard",
                timeline: "7-10 business days",
                description: "Perfect for most orders with flexible timelines",
                price: "Included",
              },
              {
                name: "Priority",
                timeline: "5-7 business days",
                description: "For orders that need a faster turnaround",
                price: "+$25",
              },
              {
                name: "Rush",
                timeline: "3-5 business days",
                description: "When you need it as soon as possible",
                price: "+$50",
              },
            ].map((option, i) => (
              <div key={i} className="bg-white p-8 border border-[#1c1b21]/10">
                <h3 className="text-2xl text-[#1c1b21] mb-2">{option.name}</h3>
                <p className="text-[#c9b896] mb-4">{option.timeline}</p>
                <p className="text-[#1c1b21]/70 mb-4">{option.description}</p>
                <p className="text-[#1c1b21]">{option.price}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#1c1b21]/60 mt-8 max-w-2xl mx-auto">
            Timelines begin after design approval and deposit payment. Shipping
            time not included.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                q: "What if I don't have a design ready?",
                a: "No problem! Our design assistance service will help you create something custom. We can start from scratch or refine existing ideas.",
              },
              {
                q: "Can I see a sample before ordering in bulk?",
                a: "Absolutely. We can produce a sample print for approval before proceeding with your full order. Sample fees are typically credited toward your final order.",
              },
              {
                q: "What happens if I need to make changes after approval?",
                a: "Minor tweaks can usually be accommodated before production begins. Major changes may require a new mockup and could affect the timeline.",
              },
              {
                q: "Do you offer local pickup in Toronto?",
                a: "Yes! Local pickup is available and can save you shipping costs. We'll coordinate a convenient pickup time once your order is ready.",
              },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="text-xl text-[#1c1b21] mb-3">{faq.q}</h3>
                <p className="text-[#1c1b21]/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-block px-8 py-4 bg-[#1c1b21] text-white hover:bg-[#1c1b21]/90 transition-colors"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#1c1b21] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to start your order?
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Get a custom quote in minutes
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

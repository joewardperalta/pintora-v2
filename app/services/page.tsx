import Link from "next/link";
import {
  Shirt,
  Users,
  Palette,
  Clock,
  Package,
  Zap,
  Check,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      slug: "custom-printing",
      icon: <Shirt className="w-10 h-10" />,
      title: "Custom Printing",
      description:
        "Premium DTF printing on t-shirts, hoodies, and apparel. Perfect for churches, events, and brands.",
      features: [
        "High-quality DTF printing",
        "Vibrant, long-lasting colors",
        "Soft hand feel",
        "Detailed graphics and gradients",
      ],
    },
    {
      slug: "bulk-orders",
      icon: <Users className="w-10 h-10" />,
      title: "Bulk Orders",
      description:
        "Special pricing for churches, ministries, and organizations ordering in quantity.",
      features: [
        "Volume discounts",
        "Dedicated account support",
        "Flexible payment terms",
        "Consistent quality across orders",
      ],
    },
    {
      slug: "design-assistance",
      icon: <Palette className="w-10 h-10" />,
      title: "Design Assistance",
      description:
        "Professional design support to bring your vision to life with clean, modern graphics.",
      features: [
        "Custom design creation",
        "Logo refinement",
        "Typography selection",
        "Mockup previews",
      ],
    },
  ];

  const addOns = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rush Production",
      description: "Expedited turnaround for time-sensitive orders",
      price: "Starting at $50",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Large Format Prints",
      description: "Oversized designs for maximum impact",
      price: "Starting at $3/print",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Sleeve & Pocket Prints",
      description: "Additional print locations for enhanced branding",
      price: "Starting at $2/location",
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-[#1c1b21] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl tracking-tight mb-6">
              Premium Printing Services
            </h1>
            <p className="text-xl text-white/70 mb-8">
              From custom designs to bulk orders, we deliver excellence at every
              scale
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#1c1b21] hover:bg-white/90 transition-colors"
            >
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              Our Services
            </h2>
            <p className="text-xl text-[#1c1b21]/60 max-w-2xl mx-auto">
              Everything you need for premium custom apparel
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-4/3 bg-[#fafaf9] flex items-center justify-center">
                    <div className="text-[#1c1b21]/20">{service.icon}</div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-3xl md:text-4xl text-[#1c1b21] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#1c1b21]/70 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#c9b896] shrink-0 mt-0.5" />
                        <span className="text-[#1c1b21]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block px-6 py-3 bg-[#1c1b21] text-white hover:bg-[#1c1b21]/90 transition-colors"
                  >
                    Learn More
                  </Link>
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
              Add-Ons & Upgrades
            </h2>
            <p className="text-xl text-[#1c1b21]/60 max-w-2xl mx-auto">
              Enhance your order with these premium options
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {addOns.map((addOn, i) => (
              <div key={i} className="bg-white p-8 border border-[#1c1b21]/10">
                <div className="w-12 h-12 bg-[#c9b896] text-white flex items-center justify-center mb-6">
                  {addOn.icon}
                </div>
                <h3 className="text-xl text-[#1c1b21] mb-3">{addOn.title}</h3>
                <p className="text-[#1c1b21]/60 mb-4">{addOn.description}</p>
                <p className="text-[#1c1b21]">{addOn.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              Pricing Overview
            </h2>
            <p className="text-xl text-[#1c1b21]/60 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                quantity: "12-24 pieces",
                price: "$18-22",
                unit: "per piece",
                features: [
                  'Front chest print (up to 8x10")',
                  "Standard turnaround (7-10 days)",
                  "Basic design consultation",
                  "Quality apparel selection",
                ],
              },
              {
                name: "Church / Event",
                quantity: "25-99 pieces",
                price: "$15-18",
                unit: "per piece",
                features: [
                  "Front & back prints",
                  "Priority turnaround (5-7 days)",
                  "Design assistance included",
                  "Dedicated support",
                ],
                highlighted: true,
              },
              {
                name: "Ministry / Bulk",
                quantity: "100+ pieces",
                price: "Custom",
                unit: "contact us",
                features: [
                  "Multiple print locations",
                  "Fastest turnaround (3-5 days)",
                  "Full design service",
                  "Account management",
                ],
              },
            ].map((tier, i) => (
              <div
                key={i}
                className={`p-8 ${
                  tier.highlighted
                    ? "bg-[#1c1b21] text-white border-2 border-[#c9b896]"
                    : "bg-[#fafaf9] border border-[#1c1b21]/10"
                }`}
              >
                <h3
                  className={`text-sm uppercase tracking-wider mb-2 ${
                    tier.highlighted ? "text-[#c9b896]" : "text-[#1c1b21]/60"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    tier.highlighted ? "text-white/70" : "text-[#1c1b21]/60"
                  }`}
                >
                  {tier.quantity}
                </p>
                <div className="mb-6">
                  <span
                    className={`text-4xl ${
                      tier.highlighted ? "text-white" : "text-[#1c1b21]"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`ml-2 ${
                      tier.highlighted ? "text-white/60" : "text-[#1c1b21]/60"
                    }`}
                  >
                    {tier.unit}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          tier.highlighted ? "text-[#c9b896]" : "text-[#c9b896]"
                        }`}
                      />
                      <span
                        className={
                          tier.highlighted
                            ? "text-white/80"
                            : "text-[#1c1b21]/80"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full px-6 py-3 text-center transition-colors ${
                    tier.highlighted
                      ? "bg-white text-[#1c1b21] hover:bg-white/90"
                      : "bg-[#1c1b21] text-white hover:bg-[#1c1b21]/90"
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#1c1b21] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to bring your vision to life?
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Get a custom quote tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-[#1c1b21] text-center hover:bg-white/90 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-4 border border-white/20 text-white text-center hover:bg-white/10 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

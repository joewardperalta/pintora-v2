import Link from "next/link";
import { Shirt, Users, Palette, ArrowRight, Check } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      <section className="bg-[#1c1b21] text-white py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl tracking-tight mb-6">
              Premium custom apparel for churches and brands
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl">
              Clean, high-quality prints that represent your message with
              excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              The Problem with Most Print Services
            </h2>
            <p className="text-xl text-[#1c1b21]/60 max-w-2xl mx-auto">
              You deserve better than subpar quality and broken promises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Cheap prints fade",
                description:
                  "Low-quality materials that wash out after a few cycles",
              },
              {
                title: "Poor communication",
                description:
                  "Unreliable vendors who leave you guessing about timelines",
              },
              {
                title: "Inconsistent quality",
                description:
                  "Colors don't match, prints are misaligned, details are lost",
              },
            ].map((problem, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-[#1c1b21]/5 rounded-full mx-auto mb-4" />
                <h3 className="text-xl text-[#1c1b21] mb-3">{problem.title}</h3>
                <p className="text-[#1c1b21]/60">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              Our Solution
            </h2>
            <p className="text-xl text-[#1c1b21]/60 max-w-2xl mx-auto">
              Premium materials, reliable service, and exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: <Check className="w-6 h-6" />,
                title: "Premium Materials",
                description:
                  "We use only high-grade DTF printing on quality apparel that lasts",
              },
              {
                icon: <Check className="w-6 h-6" />,
                title: "Reliable Turnaround",
                description:
                  "Clear timelines and consistent communication from quote to delivery",
              },
              {
                icon: <Check className="w-6 h-6" />,
                title: "Clean, Modern Designs",
                description:
                  "Professional design assistance to help your vision come to life",
              },
            ].map((solution, i) => (
              <div key={i} className="bg-white p-8 border border-[#1c1b21]/10">
                <div className="w-12 h-12 bg-[#c9b896] text-white flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl text-[#1c1b21] mb-3">
                  {solution.title}
                </h3>
                <p className="text-[#1c1b21]/60">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shirt className="w-8 h-8" />,
                title: "Custom Printing",
                description:
                  "Bring your designs to life on premium t-shirts, hoodies, and more",
                link: "/services/custom-printing",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Bulk Orders",
                description:
                  "Special pricing for churches, events, and organizations",
                link: "/services/bulk-orders",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Design Assistance",
                description:
                  "Professional design support to create impactful graphics",
                link: "/services/design-assistance",
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.link}
                className="group bg-[#fafaf9] p-8 hover:bg-[#1c1b21] transition-all duration-300"
              >
                <div className="text-[#1c1b21] group-hover:text-white mb-6 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl text-[#1c1b21] group-hover:text-white mb-4 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#1c1b21]/60 group-hover:text-white/70 mb-6 transition-colors">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[#1c1b21] group-hover:text-white transition-colors">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1c1b21] text-white hover:bg-[#1c1b21]/90 transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#1c1b21] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Built to Scale</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Our proven process ensures quality results every time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your needs, quantities, and timeline",
              },
              {
                step: "02",
                title: "Design",
                description: "Create or refine your design with our assistance",
              },
              {
                step: "03",
                title: "Production",
                description: "Premium DTF printing on quality apparel",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Receive your order on time, exactly as promised",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl text-white/10 mb-4">{item.step}</div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1c1b21] hover:bg-white/90 transition-colors"
            >
              See How It Works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              Featured Collections
            </h2>
            <p className="text-xl text-[#1c1b21]/60 max-w-2xl mx-auto">
              Browse our curated collections designed for churches and brands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Church Essentials",
                description:
                  "Minimalist designs for worship teams and ministries",
                category: "church-essentials",
              },
              {
                title: "Word-Based Designs",
                description: "Scripture and faith-inspired typography",
                category: "word-based",
              },
              {
                title: "Fellowship & Athletic",
                description:
                  "Active wear for church events and sports ministries",
                category: "fellowship",
              },
            ].map((collection, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-[#fafaf9] mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-[#1c1b21]/20">
                    <Shirt className="w-24 h-24" />
                  </div>
                  <div className="absolute inset-0 bg-[#1c1b21]/0 group-hover:bg-[#1c1b21]/10 transition-all duration-300" />
                </div>
                <h3 className="text-xl text-[#1c1b21] mb-2">
                  {collection.title}
                </h3>
                <p className="text-[#1c1b21]/60 mb-4">
                  {collection.description}
                </p>
                <Link
                  href={`/collections#${collection.category}`}
                  className="inline-flex items-center gap-2 text-[#1c1b21] hover:gap-3 transition-all"
                >
                  <span className="text-sm">View Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1c1b21] text-white hover:bg-[#1c1b21]/90 transition-colors"
            >
              Browse All Collections
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Pintora delivered exactly what we needed for our worship team. The quality is outstanding and the prints still look fresh after dozens of washes.",
                author: "Pastor Michael Chen",
                role: "Grace Community Church",
              },
              {
                quote:
                  "Finally found a printing service that understands what quality means. They guided us through the entire process and delivered ahead of schedule.",
                author: "Sarah Williams",
                role: "Event Coordinator",
              },
              {
                quote:
                  "The attention to detail and customer service is unmatched. Pintora has become our go-to for all church apparel needs.",
                author: "David Okonkwo",
                role: "Victory Chapel",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 border border-[#1c1b21]/10">
                <p className="text-[#1c1b21]/80 mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="text-[#1c1b21]">{testimonial.author}</p>
                  <p className="text-sm text-[#1c1b21]/60">
                    {testimonial.role}
                  </p>
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
            Let&apos;s bring your vision to life with premium custom apparel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-[#1c1b21] text-center hover:bg-white/90 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/book-call"
              className="px-8 py-4 border border-white/20 text-white text-center hover:bg-white/10 transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

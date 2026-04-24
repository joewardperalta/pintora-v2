import { Calendar, Video, Phone, Clock, Check } from "lucide-react";

export default function BookCall() {
  return (
    <div className="pt-20">
      <section className="bg-[#1c1b21] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl tracking-tight mb-6">
              Book a Call
            </h1>
            <p className="text-xl text-white/70">
              Schedule a 30-minute consultation to discuss your custom apparel
              needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl text-[#1c1b21] mb-6">What to Expect</h2>
              <p className="text-lg text-[#1c1b21]/70 mb-8 leading-relaxed">
                During our call, we&apos;ll discuss your project in detail,
                answer any questions, and provide guidance on the best approach
                for your needs.
              </p>

              <h3 className="text-xl text-[#1c1b21] mb-4">We&apos;ll Cover:</h3>
              <ul className="space-y-3 mb-12">
                {[
                  "Your vision and project goals",
                  "Quantity and apparel selection",
                  "Design needs and options",
                  "Timeline and turnaround",
                  "Pricing and payment terms",
                  "Next steps to move forward",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#c9b896] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1c1b21]/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#c9b896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1c1b21] mb-1">Duration</p>
                    <p className="text-[#1c1b21]/60">30 minutes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Video className="w-6 h-6 text-[#c9b896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1c1b21] mb-1">Format</p>
                    <p className="text-[#1c1b21]/60">
                      Video call (Zoom or Google Meet)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#c9b896] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1c1b21] mb-1">Alternative</p>
                    <p className="text-[#1c1b21]/60">
                      Phone call available upon request
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#fafaf9] p-12 border border-[#1c1b21]/10 min-h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-[#1c1b21]/20 mx-auto mb-6" />
                  <h3 className="text-2xl text-[#1c1b21] mb-4">
                    Calendar Integration
                  </h3>
                  <p className="text-[#1c1b21]/60 mb-8 max-w-sm mx-auto">
                    This is where your calendar booking system (like Calendly)
                    would be embedded.
                  </p>
                  <div className="space-y-3">
                    <p className="text-sm text-[#1c1b21]/60">
                      Available slots:
                    </p>
                    <p className="text-[#1c1b21]/80">
                      Monday - Friday
                      <br />
                      9:00 AM - 5:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#1c1b21]/60 mt-6 text-center">
                Can&apos;t find a time that works? Email us at{" "}
                <a
                  href="mailto:hello@pintora.ca"
                  className="text-[#1c1b21] hover:underline"
                >
                  hello@pintora.ca
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              Before Your Call
            </h2>
            <p className="text-xl text-[#1c1b21]/60 max-w-2xl mx-auto">
              Help us make the most of our time together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Gather Your Details",
                description:
                  "Have an idea of your quantities, timeline, and budget range",
              },
              {
                title: "Think About Design",
                description:
                  "Any reference images, color preferences, or existing brand assets",
              },
              {
                title: "Prepare Questions",
                description:
                  "Write down any specific questions or concerns you'd like to address",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-[#1c1b21]/10">
                <div className="w-10 h-10 bg-[#c9b896] text-white flex items-center justify-center text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl text-[#1c1b21] mb-3">{item.title}</h3>
                <p className="text-[#1c1b21]/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
            Prefer to email instead?
          </h2>
          <p className="text-xl text-[#1c1b21]/60 mb-12">
            Send us your project details and we&apos;ll respond with a custom
            quote
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#1c1b21] text-white hover:bg-[#1c1b21]/90 transition-colors"
          >
            Submit Quote Request
          </a>
        </div>
      </section>
    </div>
  );
}

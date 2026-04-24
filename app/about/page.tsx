import { Heart, Award, Target } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      <section className="bg-[#1c1b21] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl tracking-tight mb-6">
              About Pintora
            </h1>
            <p className="text-xl text-white/70">
              Premium custom apparel for those who refuse to settle for less
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-[#1c1b21]/70 leading-relaxed">
                <p>
                  Pintora was born out of frustration with the custom apparel
                  industry. Too many churches and organizations were settling
                  for subpar quality, dealing with unreliable vendors, and
                  receiving prints that didn&apos;t represent their message with
                  excellence.
                </p>
                <p>
                  We saw churches ordering apparel for their worship teams, only
                  to have the prints fade after a few washes. We witnessed event
                  organizers dealing with vendors who overpromised and
                  underdelivered. We knew there had to be a better way.
                </p>
                <p>
                  Based in Toronto, we&Aapos;ve built Pintora on a simple
                  principle: if you&apos;re going to represent your church,
                  brand, or message, it should be done with excellence. No
                  compromises, no excuses.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-[#fafaf9]"></div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-[#1c1b21]/60 max-w-3xl mx-auto">
              To serve churches and brands with premium custom apparel that
              represents their message with excellence, every single time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Quality",
                description:
                  "We use only premium materials and cutting-edge DTF technology. Every print is inspected before it leaves our facility. Your reputation depends on it.",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Integrity",
                description:
                  "We say what we mean and do what we say. Clear timelines, transparent pricing, and honest communication at every step of the process.",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Purpose",
                description:
                  "We're here to serve churches and organizations making a difference. Your mission matters, and we're honored to support it with excellence.",
              },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#c9b896] text-white flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl text-[#1c1b21] mb-4">{value.title}</h3>
                <p className="text-[#1c1b21]/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-white order-2 md:order-1"></div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
                Behind the Scenes
              </h2>
              <p className="text-lg text-[#1c1b21]/70 leading-relaxed mb-6">
                Our Toronto-based facility is equipped with state-of-the-art DTF
                printing technology and staffed by a team that genuinely cares
                about your project.
              </p>
              <p className="text-lg text-[#1c1b21]/70 leading-relaxed">
                From the moment you submit your quote request to the day your
                order arrives, you&apos;ll experience the Pintora difference:
                premium quality, reliable communication, and results that exceed
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#1c1b21] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Ready to experience premium custom apparel done right?
          </p>
          <button className="px-8 py-4 bg-white text-[#1c1b21] hover:bg-white/90 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

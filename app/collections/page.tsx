import { Shirt } from "lucide-react";

export default function Collections() {
  const collections = [
    {
      id: "church-essentials",
      name: "Church Essentials",
      description: "Clean, minimalist designs for worship teams and ministries",
      products: [
        { name: "Worship Team Tee", price: "$28" },
        { name: "Ministry Hoodie", price: "$48" },
        { name: "Youth Leader Crew", price: "$32" },
        { name: "Pastor Polo", price: "$38" },
      ],
    },
    {
      id: "word-based",
      name: "Word-Based Designs",
      description: "Scripture and faith-inspired typography",
      products: [
        { name: "Faith Over Fear Tee", price: "$25" },
        { name: "Proverbs 3:5-6 Hoodie", price: "$45" },
        { name: "Grace & Truth Crew", price: "$30" },
        { name: "Romans 8:28 Long Sleeve", price: "$35" },
      ],
    },
    {
      id: "fellowship",
      name: "Fellowship & Athletic",
      description: "Active wear for church events and sports ministries",
      products: [
        { name: "Church League Jersey", price: "$32" },
        { name: "Youth Camp Tee", price: "$22" },
        { name: "Fellowship Event Hoodie", price: "$42" },
        { name: "Sports Ministry Tank", price: "$24" },
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-[#1c1b21] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl tracking-tight mb-6">
              Our Collections
            </h1>
            <p className="text-xl text-white/70">
              Curated apparel collections designed for churches, ministries, and
              faith-based organizations
            </p>
          </div>
        </div>
      </section>

      {collections.map((collection, collectionIndex) => (
        <section
          key={collection.id}
          id={collection.id}
          className={`py-24 md:py-32 ${
            collectionIndex % 2 === 0 ? "bg-white" : "bg-[#fafaf9]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-4">
                {collection.name}
              </h2>
              <p className="text-xl text-[#1c1b21]/60 max-w-2xl mx-auto">
                {collection.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {collection.products.map((product, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-[#fafaf9] border border-[#1c1b21]/10 mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-[#1c1b21]/20">
                      <Shirt className="w-16 h-16" />
                    </div>
                    <div className="absolute inset-0 bg-[#1c1b21]/0 group-hover:bg-[#1c1b21]/5 transition-all duration-300" />
                  </div>
                  <h3 className="text-lg text-[#1c1b21] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#1c1b21]/60">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-[#1c1b21] text-white hover:bg-[#1c1b21]/90 transition-colors">
                Shop {collection.name}
              </button>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 md:py-32 bg-[#1c1b21] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Need something custom?</h2>
          <p className="text-xl text-white/60 mb-12">
            We can create a completely unique design tailored to your brand or
            ministry
          </p>
          <button className="px-8 py-4 bg-white text-[#1c1b21] hover:bg-white/90 transition-colors">
            Start Custom Order
          </button>
        </div>
      </section>
    </div>
  );
}

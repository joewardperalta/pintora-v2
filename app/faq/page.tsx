"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-[#1c1b21]/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#1c1b21]/70 transition-colors"
      >
        <span className="text-lg text-[#1c1b21] pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#1c1b21]/40 flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-[#1c1b21]/70 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Pricing & Orders",
      questions: [
        {
          q: "What's the minimum order quantity?",
          a: "While we can accommodate orders as small as 1 piece, our pricing is optimized for orders of 12+ pieces. We recommend minimum quantities of 12-24 pieces for the best value.",
        },
        {
          q: "How much does custom printing cost?",
          a: "Pricing depends on quantity, apparel type, and print complexity. Generally, expect $18-22 per piece for small orders (12-24), $15-18 for medium orders (25-99), and custom pricing for bulk orders (100+). Contact us for a detailed quote.",
        },
        {
          q: "Do you offer discounts for churches and nonprofits?",
          a: "Yes! We offer special pricing for churches, ministries, and nonprofit organizations. Our bulk order pricing already provides significant savings, and we can work with you on payment terms for larger orders.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept credit cards, debit cards, e-transfers, and for bulk orders, we can arrange invoicing with flexible payment terms. A 50% deposit is typically required to begin production.",
        },
      ],
    },
    {
      category: "Turnaround & Delivery",
      questions: [
        {
          q: "How long does production take?",
          a: "Standard turnaround is 7-10 business days after design approval and deposit. We also offer priority (5-7 days) and rush (3-5 days) production for an additional fee.",
        },
        {
          q: "When does the timeline start?",
          a: "The production timeline begins once you've approved the final design mockup and the deposit has been received. Design consultation and mockup creation typically takes 1-3 days.",
        },
        {
          q: "Do you ship across Canada?",
          a: "Yes, we ship throughout Canada. We're based in Toronto and also offer local pickup to save on shipping costs. Shipping typically takes 1-3 business days within Canada.",
        },
        {
          q: "Can you accommodate rush orders?",
          a: "Absolutely. Rush production (3-5 days) is available for an additional $50. Contact us to confirm availability for your specific timeline.",
        },
      ],
    },
    {
      category: "Design & Printing",
      questions: [
        {
          q: "What if I don't have a design?",
          a: "No problem! Our design assistance service includes initial consultation, up to 3 design concepts, and 2 rounds of revisions. We'll work with you to create something that represents your vision perfectly.",
        },
        {
          q: "What file format do you need for my design?",
          a: "We prefer vector files (AI, EPS, PDF) for the best quality, but we can also work with high-resolution PNG or JPG files (300 DPI minimum). If you're unsure, send us what you have and we'll let you know if it's print-ready.",
        },
        {
          q: "What printing method do you use?",
          a: "We use DTF (Direct-to-Film) printing, which produces vibrant colors, handles gradients beautifully, and creates a soft, flexible print that moves with the fabric. It's far superior to traditional screen printing for detailed designs.",
        },
        {
          q: "Can you print on both sides?",
          a: "Yes! We can print on front, back, sleeves, and pockets. Each additional print location has its own pricing, which we'll include in your custom quote.",
        },
      ],
    },
    {
      category: "Materials & Quality",
      questions: [
        {
          q: "What brands of apparel do you use?",
          a: "We primarily use Gildan, Bella+Canvas, and similar quality brands. We can also source specific brands upon request. All apparel is pre-shrunk and ready to wear.",
        },
        {
          q: "How durable are the prints?",
          a: "Our DTF prints are extremely durable when cared for properly. They can withstand hundreds of washes without fading, cracking, or peeling. We provide care instructions with every order.",
        },
        {
          q: "What colors and sizes are available?",
          a: "We offer a wide range of apparel colors and sizes from XS to 5XL. Specific availability depends on the garment style. We'll provide a full color and size chart during the quote process.",
        },
        {
          q: "Can I see a sample before ordering in bulk?",
          a: "Yes! We can produce a sample print for your approval before proceeding with the full order. Sample fees are typically credited toward your final order total.",
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-[#1c1b21] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/70">
              Everything you need to know about custom apparel printing with
              Pintora
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <h2 className="text-3xl text-[#1c1b21] mb-8">
                {category.category}
              </h2>
              <div>
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex =
                    faqs
                      .slice(0, categoryIndex)
                      .reduce((acc, cat) => acc + cat.questions.length, 0) +
                    questionIndex;
                  return (
                    <FAQItem
                      key={globalIndex}
                      question={faq.q}
                      answer={faq.a}
                      isOpen={openIndex === globalIndex}
                      onClick={() =>
                        setOpenIndex(
                          openIndex === globalIndex ? null : globalIndex,
                        )
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#fafaf9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-[#1c1b21] mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-[#1c1b21]/60 mb-12">
            We&apos;re here to help. Get in touch and we&apos;ll answer any
            questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#1c1b21] text-white text-center hover:bg-[#1c1b21]/90 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/book-call"
              className="px-8 py-4 border border-[#1c1b21]/20 text-[#1c1b21] text-center hover:bg-[#1c1b21]/5 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

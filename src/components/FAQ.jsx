import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-beige/30 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg md:text-xl text-brand-olive font-serif normal-case">
          {question}
        </span>
        <span className={`text-[#999b7b] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
      >
        <p className="text-brand-sage text-sm md:text-base leading-relaxed font-sans mb-4">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Ritual bowls different?",
      answer: "Ritual bowls are crafted by nutritionists and chefs using the freshest locally-sourced ingredients in Chennai. We focus on balanced macros, zero preservatives, and incredible flavors that change your view of healthy eating.",
    },
    {
      question: "How does the subscription plan work?",
      answer: "Our subscription is fluid and adapts to your life. You can choose your delivery days, pause anytime, or swap meals through our user dashboard. Subscribers also enjoy up to 25% savings and free delivery.",
    },
    {
      question: "Where do you deliver in Chennai?",
      answer: "Currently, we cover almost all major areas in Chennai including Adyar, Besant Nagar, OMR, Velachery, Anna Nagar, T. Nagar, and Mylapore. We are constantly expanding our reach!",
    },
    {
      question: "Is your packaging eco-friendly?",
      answer: "Sustainability is part of our ritual. All our meal containers are made from compostable kraft paper and our juice bottles are recyclable glass. We are committed to a zero-plastic future.",
    },
    {
      question: "Can I customize my meals?",
      answer: "Yes! While our bowls are chef-designed for optimal balance, you can mention allergies or specific dietary preferences in your profile, and our kitchen will adjust your meals accordingly.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-brand-sage mx-auto opacity-30"></div>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

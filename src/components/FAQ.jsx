import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-olive/20 py-5">
      <button
        className="w-full flex justify-between items-center text-left transition-colors normal-case"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-brand-sage' : 'text-brand-olive'}`}>
          {question}
        </span>
        <span className="ml-4 flex-shrink-0">
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-sage' : 'text-brand-olive'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 12H6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m6-6H6" />
            )}
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-brand-sage text-sm md:text-base leading-relaxed font-sans">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Ritual?",
      answer: "Ritual is a curated wellness meal subscription designed to nourish your body with balanced bowls, functional wellness shots, infused hydration, and mindful ingredients — delivered fresh daily. Each Ritual is built around consistency, helping you build healthy eating habits effortlessly.",
    },
    {
      question: "How does the Ritual subscription work?",
      answer: "Choose your Ritual plan duration (3, 7, 14, or 28 days) and submit your details. Once submitted, you will be redirected to our WhatsApp Business account, where our team will assist with payment and finalize your subscription. Your Ritual cycle will begin once the payment is confirmed.",
    },
    {
      question: "What does each Ritual delivery include?",
      answer: "Every Ritual includes a complete functional wellness experience: a balanced wellness bowl, a 60ml functional wellness shot, 350ml infused detox water, and a portion of nuts. Each day features a different curated combination designed to support overall wellness.",
    },
    {
      question: "Are the meals prepared fresh?",
      answer: "Yes. All Ritual meals are freshly prepared daily using locally sourced ingredients and delivered on the same day. We do not use preservatives and every meal is cooked the same day it is delivered.",
    },
    {
      question: "Where do you deliver?",
      answer: "Currently, Ritual delivers within a 5 km radius of our kitchen in Chennai. You can enter your pincode on the website to check delivery availability.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-[#fef2f4] py-12 md:py-16 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-16">

        {/* Left Side: Title */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start gap-6">
          <h2 className="normal-case md:text-5xl text-3xl leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-olive/60 text-sm leading-relaxed">
            Everything you need to know about your Ritual subscription. Can't find your answer?
          </p>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-brand-sage font-bold text-xs uppercase tracking-widest hover:text-brand-olive transition-colors group"
          >
            View all FAQs
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

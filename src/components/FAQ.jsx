import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-olive/20 py-5">
      <button
        className="w-full flex justify-between items-center text-left transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-brand-olive' : 'text-brand-olive'}`}>
          {question}
        </span>
        <span className="text-brand-olive ml-4 flex-shrink-0">
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
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
      question: "Will I lose weight by following Fresh n Fit meals?",
      answer: "Yes, you can achieve your weight loss goals if you follow our structured meal plans. The amount of weight lost depends on various factors including your starting point, health status, physical activity level, and habits.",
    },
    {
      question: "How many calories should I consume per day?",
      answer: "Every individual is unique. Our plans are designed to provide nutrient density. We recommend consulting with our nutritionists to determine the best calorie intake for your specific goals.",
    },
    {
      question: "When can I expect results?",
      answer: "Consistency is key. Most users see energy improvements within the first week and physical changes within 3-4 weeks of consistent adherence to our meal rituals.",
    },
    {
      question: "How often does the menu change?",
      answer: "We follow a 30-day rotation, ensuring you get variety and seasonal flavors every single day of the month. We never compromise on freshness or excitement.",
    },
    {
      question: "What ingredients do you use?",
      answer: "We use premium, locally sourced produce, organic grains, and high-quality protein. Zero refined sugars, zero preservatives, and minimal healthy oils only.",
    },
    {
      question: "What meal types are available?",
      answer: "We offer Functional Bowls, High-Protein options, Vegan rituals, and Keto-friendly selections to suit diverse healthy lifestyles.",
    },
    {
      question: "How do I pay for my order?",
      answer: "We support all major UPI platforms, Credit/Debit Cards, and Net Banking through our secure payment gateway.",
    },
    {
      question: "How is the delivery handled?",
      answer: "Meals are delivered daily in temperature-controlled bags by our own logistics team across Chennai to ensure maximum freshness.",
    },
  ];

  return (
    <section className="w-full bg-[#fef2f4] py-12 md:py-16 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

        {/* Left Side: Title & Illustration */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start">
          <h2 className="normal-case md:text-6xl text-3xl md:leading-22">
            FREQUENTLY {"\n"} ASKED {"\n"} QUESTIONS
          </h2>

          <div className="mt-auto hidden lg:block opacity-80 scale-125 origin-left">
          </div>
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

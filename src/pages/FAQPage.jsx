import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const ALL_FAQS = [
  {
    category: "About Ritual",
    items: [
      {
        question: "What is Ritual?",
        answer: "Ritual is a curated wellness meal subscription designed to nourish your body with balanced bowls, functional wellness shots, infused hydration, and mindful ingredients — delivered fresh daily. Each Ritual is built around consistency, helping you build healthy eating habits effortlessly.",
      },
      {
        question: "Why is Ritual a subscription and not single orders?",
        answer: "Ritual is designed around consistency and habit-building. Our subscription model allows us to plan ingredients, maintain quality, and offer a more cost-effective wellness experience compared to one-time orders.",
      },
      {
        question: "Is Ritual suitable for busy professionals?",
        answer: "Yes — Ritual was designed specifically for busy lifestyles. Each delivery provides a complete functional meal experience so you don't have to plan, cook, or track your nutrition daily.",
      },
    ],
  },
  {
    category: "Subscription & Plans",
    items: [
      {
        question: "How does the Ritual subscription work?",
        answer: "Choose your Ritual plan duration (3, 7, 14, or 28 days) and submit your details. Once submitted, you will be redirected to our WhatsApp Business account, where our team will assist with payment and finalize your subscription. Your Ritual cycle will begin once the payment is confirmed.",
      },
      {
        question: "Can I choose vegetarian or non-vegetarian plans?",
        answer: "Yes. Ritual supports multiple dietary preferences: Plant-based / Vegan, Vegetarian, and Non-Vegetarian. Our nutrition team will confirm your preference during onboarding.",
      },
      {
        question: "Can I upgrade or extend my plan?",
        answer: "Yes. You can upgrade or extend your Ritual plan anytime by contacting us via WhatsApp.",
      },
      {
        question: "Will I receive a reminder before my plan ends?",
        answer: "Yes. We will send you a WhatsApp reminder before your Ritual cycle ends so you can renew your plan easily.",
      },
      {
        question: "Can I gift a Ritual plan to someone?",
        answer: "Yes. Ritual subscriptions can also be purchased as a wellness gift for friends, family, or colleagues. Simply contact us on WhatsApp and we'll help you set it up.",
      },
    ],
  },
  {
    category: "Your Ritual Delivery",
    items: [
      {
        question: "What does each Ritual delivery include?",
        answer: "Every Ritual includes a complete functional wellness experience: a balanced wellness bowl, a 60ml functional wellness shot, 350ml infused detox water, and a portion of nuts. Each day features a different curated combination designed to support overall wellness.",
      },
      {
        question: "Do the meals change every day?",
        answer: "Yes. Our bowls, wellness shots, and hydration rotate throughout the week to ensure variety, balanced nutrition, and functional benefits.",
      },
      {
        question: "When will my Ritual deliveries start?",
        answer: "Your Ritual cycle will begin on the next available delivery day after payment confirmation. Our team will confirm your start date on WhatsApp once your subscription is activated.",
      },
      {
        question: "What time are Ritual deliveries made?",
        answer: "Deliveries are typically scheduled during our morning wellness delivery window to ensure you receive your Ritual fresh for the day. The exact delivery slot will be shared when your subscription is confirmed.",
      },
      {
        question: "Where do you deliver?",
        answer: "Currently, Ritual delivers within a 5 km radius of our kitchen in Chennai. You can enter your pincode on the website to check delivery availability.",
      },
    ],
  },
  {
    category: "Food & Nutrition",
    items: [
      {
        question: "Are the meals prepared fresh?",
        answer: "Yes. All Ritual meals are freshly prepared daily using locally sourced ingredients and delivered on the same day. We do not use preservatives and every meal is cooked the same day it is delivered.",
      },
      {
        question: "Are the meals calorie counted?",
        answer: "Ritual meals are designed with balanced nutrition in mind, focusing on whole ingredients, quality proteins, good fats, and fiber. Instead of strict calorie counting, we focus on nutritional balance and functional wellness.",
      },
      {
        question: "Are your ingredients fresh?",
        answer: "Yes. All Ritual meals are prepared fresh daily using high-quality, locally sourced ingredients. We do not use preservatives, and every meal is cooked the same day it is delivered.",
      },
      {
        question: "Are the bowls suitable for weight loss?",
        answer: "Ritual meals are designed to support overall wellness, balanced nutrition, and healthy habits. Many customers include Ritual as part of their weight management or clean eating routine, but results depend on your overall lifestyle and diet.",
      },
      {
        question: "Do you customize meals based on allergies?",
        answer: "If you have specific allergies or dietary restrictions, please inform us before your subscription begins. While we try our best to accommodate requests, we cannot guarantee a completely allergen-free kitchen environment.",
      },
    ],
  },
  {
    category: "Managing Deliveries",
    items: [
      {
        question: "Can I pause or skip a delivery?",
        answer: "Yes. You may pause or skip a delivery by informing us at least 24 hours in advance via WhatsApp.",
      },
      {
        question: "How far in advance should I pause or reschedule deliveries?",
        answer: "Please inform us at least 24 hours in advance via WhatsApp so we can adjust your delivery schedule. This helps us avoid food waste and maintain fresh preparation.",
      },
      {
        question: "What happens if I miss my delivery?",
        answer: "If you are unavailable at the scheduled delivery time and the delivery has not been paused or rescheduled at least 24 hours prior, that day's Ritual will be considered fulfilled.",
      },
      {
        question: "Can I cancel my subscription?",
        answer: "Once a Ritual plan is activated, refunds are generally not provided. However, we can help with pausing deliveries, rescheduling delivery dates, and adjusting your plan for the next cycle.",
      },
    ],
  },
  {
    category: "Support",
    items: [
      {
        question: "How do I contact Ritual support?",
        answer: "You can reach us directly through WhatsApp, which is also where all subscriptions are confirmed. Our team will assist you with plan activation, delivery changes, and subscription support.",
      },
    ],
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-olive/10 py-4">
      <button
        className="w-full flex justify-between items-center text-left gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-base font-medium transition-colors normal-case duration-300 ${isOpen ? 'text-brand-sage' : 'text-brand-olive'}`}>
          {question}
        </span>
        <span className="flex-shrink-0">
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-sage' : 'text-brand-olive/40'}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
        <p className="text-brand-olive/70 text-sm leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = ALL_FAQS.map(c => c.category);
  const filtered = activeCategory
    ? ALL_FAQS.filter(c => c.category === activeCategory)
    : ALL_FAQS;

  const totalCount = ALL_FAQS.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <div className="pb-12 md:pb-14">
      <SEO
        title="FAQ & Support | Ritual Wellness Chennai"
        description="Everything you need to know about Ritual — subscriptions, functional meals, delivery schedules, and nutrition support in Chennai."
        keywords="Ritual FAQ, Wellness Meal FAQ Chennai, Subscription Questions, Delivery Time Chennai, Functional Meal Plans"
      />
      <PageHeader
        title="FAQ"
        subtitle="Everything you need to know about your Ritual."
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 mt-12 md:mt-16">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { num: totalCount, label: "Questions Answered" },
            { num: "6", label: "Topics Covered" },
            { num: "24h", label: "Support Response" },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-brand-beige/20 rounded-2xl p-5 text-center shadow-sm">
              <span className="text-3xl font-serif font-bold text-brand-olive block">{s.num}</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-sage font-bold">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-colors ${!activeCategory ? 'bg-brand-olive text-white' : 'bg-brand-beige/30 text-brand-olive hover:bg-brand-beige/50'}`}
          >
            All Topics
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-colors ${activeCategory === cat ? 'bg-brand-olive text-white' : 'bg-brand-beige/30 text-brand-olive hover:bg-brand-beige/50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion by Category */}
        <div className="space-y-10">
          {filtered.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-2xl border border-brand-beige/20 shadow-sm overflow-hidden">
              {/* Category Header */}
              <div className="flex items-center gap-3 px-5 py-3 bg-brand-olive/5 border-b border-brand-beige/20">
                <div className="w-2 h-6 bg-brand-sage rounded-full"></div>
                <h3 className="text-brand-olive font-serif text-lg font-medium">{category.category}</h3>
                <span className="ml-auto text-[10px] text-brand-sage bg-brand-sage/10 px-2 py-1 rounded-full font-bold uppercase tracking-widest w-[120px] text-center">
                  {category.items.length} {category.items.length === 1 ? 'question' : 'questions'}
                </span>
              </div>
              {/* Items */}
              <div className="px-5 divide-y divide-brand-beige/10">
                {category.items.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 bg-brand-olive rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full mb-4">
              <span className="text-[10px] text-white uppercase tracking-[3px] font-bold">Still have questions?</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">We're here to help</h3>
            <p className="text-brand-beige/70 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Can't find what you're looking for? Reach out to us on WhatsApp and our team will get back to you quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-sage text-white px-8 py-3 rounded-md text-sm font-medium uppercase tracking-widest hover:bg-white hover:text-brand-olive transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-3 rounded-md text-sm font-medium uppercase tracking-widest hover:bg-white/20 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;

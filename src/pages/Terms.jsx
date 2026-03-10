import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const Terms = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: [
        'By accessing or using the Ritual Wellness website (ritualwellness.in) and subscribing to our meal delivery services, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you must not access or use our services.',
        'These Terms constitute a legally binding agreement between you ("Subscriber", "you", or "your") and Ritual Wellness ("Ritual", "we", "us", or "our"), a food delivery service based in Chennai, Tamil Nadu, India.',
      ],
    },
    {
      id: 'service-description',
      title: 'Service Description',
      content: [
        'Ritual Wellness provides a subscription-based meal delivery service offering nutrient-dense, functional meals. By subscribing, you acknowledge and agree to the following service parameters:',
      ],
      list: [
        'All meals are designed and portioned as a single serving (meal for 1 person)',
        'Each delivery includes one Power Bowl, one 60ml Functional Shot, and one 350ml Herb-Infused Water Bottle',
        'Our menu operates on a 30-day rotating cycle, curated by certified nutritionists',
        'Meals are prepared fresh on the day of delivery using locally sourced, organic ingredients',
        'Dietary options include Non-Vegetarian, Vegetarian, and Vegan — your preference must be specified at the time of subscription',
      ],
    },
    {
      id: 'subscription-plans',
      title: 'Subscription Plans & Pricing',
      content: [
        'We offer multiple subscription plans to suit your lifestyle. All plans are prepaid in full at the time of purchase:',
      ],
      list: [
        'Plans are available in 7-day, 15-day, and 30-day durations',
        'Pricing is clearly displayed on our website and is inclusive of all applicable taxes',
        'Delivery charges are included in the subscription price for all serviceable areas',
        'Promotional discounts and referral credits, if any, are applied at the time of purchase and cannot be combined with other offers unless explicitly stated',
        'Ritual reserves the right to modify plan pricing. Any price changes will not affect active subscriptions and will only apply to new or renewed subscriptions',
      ],
    },
    {
      id: 'delivery',
      title: 'Delivery Terms',
      content: [
        'Timely and reliable delivery is central to our service. Please review the following delivery terms carefully:',
      ],
      list: [
        'Delivery Window: All meals are delivered between 12:00 PM and 1:30 PM, Monday through Saturday',
        'Delivery is available only within our designated service areas in Chennai. You can check your pincode eligibility on our website',
        'Serviceable areas include select neighborhoods in T. Nagar, West Mambalam, Nungambakkam, Alwarpet, Mylapore, Vadapalani, Anna Nagar, and surrounding zones',
        'You must provide a valid delivery address within a serviceable pincode at the time of subscription. Subscriptions cannot be activated for non-serviceable areas',
        'A valid phone number must be provided for delivery coordination. Our delivery partner may call or message you at the time of delivery',
        'If you are unavailable at the delivery address, the meal will be left at the reception, security desk, or a pre-designated safe spot as instructed by you',
        'Ritual is not responsible for food quality deterioration after delivery has been completed and the meal has been handed over or placed at the designated location',
      ],
    },
    {
      id: 'schedule-changes',
      title: 'Schedule Changes & Pauses',
      content: [
        'We understand that plans change. However, to ensure smooth operations and minimize food waste, the following rules apply:',
      ],
      highlights: [
        {
          label: 'Critical',
          text: 'Any changes to your delivery schedule (pauses, address changes, or dietary switches) must be communicated at least 24 hours in advance.',
        },
        {
          label: 'Important',
          text: 'Requests for schedule changes received less than 24 hours before the next delivery will not be entertained. The meal will be prepared and delivered as per the original schedule.',
        },
      ],
      list: [
        'Schedule changes can be communicated via WhatsApp or by contacting us through the Contact page',
        'Pauses are limited to a maximum of 3 days per 30-day subscription. Paused days will be added to the end of your subscription period',
        'Address changes within the same serviceable area are permitted with 24-hour notice',
        'Address changes to a non-serviceable area cannot be accommodated',
        'Dietary preference changes (e.g., Non-Veg to Veg) require a minimum of 48 hours notice',
      ],
    },
    {
      id: 'cancellation',
      title: 'Cancellation Policy',
      content: [
        'Please read this section carefully before subscribing:',
      ],
      highlights: [
        {
          label: 'No Cancellation',
          text: 'Once a subscription plan has been purchased and activated, it cannot be cancelled. There are no partial cancellations, early terminations, or prorated refunds under any circumstances.',
        },
      ],
      list: [
        'Subscriptions are non-cancellable once payment has been processed',
        'This policy exists because we procure fresh, organic ingredients daily based on active subscriber count. Cancellations result in food waste that contradicts our sustainability values',
        'If you are unsure about committing, we recommend starting with a 7-day plan',
        'In exceptional circumstances (medical emergencies with documentation), Ritual may, at its sole discretion, offer a credit towards a future subscription. This is not guaranteed and will be evaluated on a case-by-case basis',
      ],
    },
    {
      id: 'refund',
      title: 'Refund Policy',
      content: [
        'Our refund policy is clearly stated below. By purchasing any plan or service, you acknowledge and accept this policy:',
      ],
      highlights: [
        {
          label: 'No Refunds',
          text: 'Items and services once purchased cannot be refunded. All sales are final.',
        },
        {
          label: 'No Returns',
          text: 'Items and services once purchased cannot be returned. Meals, once delivered, cannot be taken back or exchanged.',
        },
      ],
      list: [
        'No refunds will be issued for any subscription plan, gift card, or service purchased through our website',
        'No refunds for unused delivery days within a subscription period',
        'No refunds for meals that were delivered but not consumed',
        'No refunds for dissatisfaction with meal taste or presentation — however, we welcome feedback to improve our service',
        'In the event of a delivery failure caused solely by Ritual (not due to incorrect address, subscriber unavailability, or force majeure), we will provide a replacement meal or extend your subscription by one day at our discretion',
        'Referral credits and promotional discounts are non-refundable and non-transferable',
      ],
    },
    {
      id: 'quality',
      title: 'Quality & Food Safety',
      content: [
        'We maintain the highest standards of food safety and hygiene:',
      ],
      list: [
        'All meals are prepared in a FSSAI-licensed kitchen facility',
        'We follow strict HACCP (Hazard Analysis Critical Control Points) protocols',
        'Ingredients are sourced from verified organic farms and undergo quality inspection',
        'Meals are packed in food-grade, BPA-free containers immediately after preparation',
        'Cold chain integrity is maintained during delivery',
        'If you receive a meal that appears damaged, contaminated, or substantially different from the described menu item, please report it within 2 hours of delivery with photographic evidence via WhatsApp or email',
      ],
    },
    {
      id: 'allergies',
      title: 'Allergies & Dietary Disclaimers',
      content: [
        'While we take every precaution, please be aware of the following:',
      ],
      list: [
        'Our kitchen handles multiple allergens including nuts, dairy, gluten, soy, and seafood. Cross-contamination may occur despite our best efforts',
        'If you have severe food allergies, please inform us at the time of subscription. We will make reasonable efforts to accommodate your needs, but cannot guarantee a completely allergen-free environment',
        'Nutritional information provided is approximate and may vary slightly based on seasonal ingredient availability',
        'Ritual is not liable for allergic reactions if the subscriber has not disclosed their allergies in advance',
        'Our Functional Shots contain concentrated plant-based ingredients. Consult your physician before consuming if you are pregnant, nursing, or on medication',
      ],
    },
    {
      id: 'service-area',
      title: 'Service Area Restrictions',
      content: [
        'Our delivery service is currently available only within designated areas of Chennai, Tamil Nadu:',
      ],
      highlights: [
        {
          label: 'Important',
          text: 'Subscriptions are only valid for designated delivery areas. If your pincode is not in our serviceable zone, we cannot process your subscription.',
        },
      ],
      list: [
        'Serviceable pincodes include: 600017, 600033, 600024, 600034, 600018, 600035, 600015, 600004, 600028, 600006, 600014, 600086, 600083, 600029, 600030, 600031, 600026, 600005, 600002, 600010, 600040, 600102, 600101',
        'We are actively expanding our delivery zones. You can register your interest for new areas on our Delivery Area page',
        'Service availability may be temporarily affected during extreme weather events, public holidays, or government-imposed restrictions',
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      content: [
        'All content on the Ritual Wellness website — including but not limited to text, images, logos, recipes, menu designs, brand assets, and code — is the intellectual property of Ritual Wellness and is protected under Indian copyright and trademark laws.',
      ],
      list: [
        'You may not reproduce, distribute, modify, or create derivative works from any content on our website without prior written permission',
        'The "Ritual" name, logo, and "Eat Your Skin Care" campaign are trademarks of Ritual Wellness',
        'User-submitted content (reviews, testimonials) may be used by Ritual for marketing purposes with attribution',
      ],
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      content: [
        'To the maximum extent permitted by applicable law:',
      ],
      list: [
        'Ritual Wellness shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services',
        'Our total liability for any claim arising under these Terms shall not exceed the amount paid by you for the specific subscription plan in question',
        'We are not liable for delays or failures in delivery caused by force majeure events (natural disasters, strikes, government orders, pandemics)',
        'We are not responsible for health outcomes resulting from our meals, as individual results vary based on overall lifestyle and medical conditions',
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing Law & Disputes',
      content: [
        'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.',
        'Before initiating any legal proceedings, both parties agree to attempt resolution through good-faith negotiation for a period of 30 days.',
      ],
    },
    {
      id: 'amendments',
      title: 'Amendments',
      content: [
        'Ritual Wellness reserves the right to modify these Terms at any time. Changes will be effective upon posting to our website with an updated "Last Modified" date. Your continued use of our services after any modification constitutes acceptance of the revised Terms.',
        'For material changes that significantly affect your rights, we will make reasonable efforts to notify active subscribers via WhatsApp or email.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: [
        'For questions, concerns, or clarifications regarding these Terms and Conditions, please reach out:',
      ],
      list: [
        'Email: hello@ritualwellness.in',
        'Phone: +91 98400 12345',
        'WhatsApp: Available during business hours (Mon–Sat, 8 AM – 8 PM)',
        'Website: ritualwellness.in/contact',
      ],
    },
  ];

  return (
    <div className="pb-12">
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services."
      />

      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Table of Contents — Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/40 mb-4">Contents</p>
              <nav className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-brand-olive/60 hover:text-brand-olive transition-colors py-1 font-normal"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-10">
            <div className="bg-[#fcfaf7] rounded-[20px] p-6 md:p-8 border border-brand-beige/30">
              <p className="text-sm text-brand-olive/80 font-normal leading-relaxed">
                <span className="font-medium text-brand-olive">Effective Date:</span> March 1, 2025 &nbsp;•&nbsp;
                <span className="font-medium text-brand-olive">Last Modified:</span> March 8, 2025 &nbsp;•&nbsp;
                <span className="font-medium text-brand-olive">Jurisdiction:</span> Chennai, Tamil Nadu, India
              </p>
            </div>

            {/* Key Policy Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-red-50 border border-red-200/50 rounded-[16px] p-5 text-center">
                <svg className="w-6 h-6 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                <span className="text-sm font-serif font-medium text-red-800 block mb-1">No Cancellation</span>
                <span className="text-[11px] text-red-600/70 font-normal">Once purchased, plans cannot be cancelled</span>
              </div>
              <div className="bg-red-50 border border-red-200/50 rounded-[16px] p-5 text-center">
                <svg className="w-6 h-6 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-sm font-serif font-medium text-red-800 block mb-1">No Refunds</span>
                <span className="text-[11px] text-red-600/70 font-normal">All sales are final, no exceptions</span>
              </div>
              <div className="bg-amber-50 border border-amber-200/50 rounded-[16px] p-5 text-center">
                <svg className="w-6 h-6 text-amber-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-sm font-serif font-medium text-amber-800 block mb-1">24hr Notice</span>
                <span className="text-[11px] text-amber-600/70 font-normal">Schedule changes need 24hr advance notice</span>
              </div>
            </div>

            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-xl md:text-2xl text-brand-olive font-serif font-medium tracking-wider mb-4">{section.title}</h2>
                {section.content.map((para, idx) => (
                  <p key={idx} className="text-sm md:text-base text-brand-olive/70 font-normal leading-relaxed mb-4">{para}</p>
                ))}
                {section.highlights && section.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-red-50/60 border-l-4 border-red-400 rounded-r-xl p-4 mb-4">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-red-500 block mb-1">{highlight.label}</span>
                    <p className="text-sm text-red-900/80 font-medium leading-relaxed">{highlight.text}</p>
                  </div>
                ))}
                {section.list && (
                  <ul className="space-y-3 mt-2">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-brand-olive/70 font-normal leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-brand-sage/30 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Bottom CTA */}
            <div className="bg-brand-olive text-white p-8 rounded-[20px] shadow-xl relative overflow-hidden mt-12">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-serif font-medium mb-1">Have questions about our terms?</h3>
                  <p className="text-brand-beige/70 text-sm">We're happy to clarify anything before you subscribe.</p>
                </div>
                <Link to="/contact" className="inline-block bg-brand-beige text-brand-olive px-8 py-3 rounded-md font-medium uppercase tracking-[2px] hover:bg-white transition-all shadow-md text-sm whitespace-nowrap">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;

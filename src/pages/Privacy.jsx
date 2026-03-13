import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const Privacy = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: [
        'At Ritual Wellness ("Ritual", "we", "us", or "our"), we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ritualwellness.in and use our meal delivery services.',
        'By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.',
      ],
    },
    {
      id: 'information-collected',
      title: 'Information We Collect',
      content: [
        'We collect personal information that you voluntarily provide to us when you interact with our website or services. This includes:',
      ],
      list: [
        'Personal Identification: Full name, phone number, email address',
        'Delivery Information: Delivery address, pincode, delivery instructions',
        'Dietary Preferences: Vegetarian, non-vegetarian, or vegan selection; allergies and dietary restrictions',
        'Payment Information: We do not store payment card details directly. All transactions are processed through secure third-party payment gateways (Razorpay/Stripe)',
        'Corporate Inquiries: Company name, contact person, team size, and organizational requirements',
        'Referral Data: Your name and phone number, and the name and phone number of the person you refer',
        'Communication Data: Messages sent through our contact forms, email correspondence, and WhatsApp interactions',
      ],
    },
    {
      id: 'automatic-data',
      title: 'Automatically Collected Data',
      content: [
        'When you visit our website, we may automatically collect certain information about your device and usage patterns:',
      ],
      list: [
        'Device Information: Browser type, operating system, screen resolution',
        'Log Data: IP address, pages visited, time and date of visit, time spent on pages',
        'Cookies: We use essential cookies for website functionality. We do not use advertising or tracking cookies',
        'Analytics: Anonymized usage statistics to improve our website experience',
      ],
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      content: [
        'We use the information we collect for the following purposes:',
      ],
      list: [
        'Order Fulfillment: Processing your meal subscriptions, managing delivery schedules, and handling dietary customizations',
        'Communication: Sending order confirmations, delivery updates, and responding to your inquiries within 2 hours during business hours',
        'Service Improvement: Analyzing feedback and usage patterns to improve our menu, delivery routes, and website experience',
        'Marketing: Sending promotional offers, new menu alerts, and referral rewards — only with your explicit consent. You can opt out at any time',
        'Legal Compliance: Meeting regulatory requirements, preventing fraud, and enforcing our terms of service',
        'Corporate Services: Managing corporate meal plans, generating invoices, and coordinating with your organization\'s point of contact',
      ],
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing & Third Parties',
      content: [
        'We do not sell, rent, or trade your personal information to third parties. We may share your data only in the following circumstances:',
      ],
      list: [
        'Delivery Partners: Your name, phone number, and delivery address are shared with our delivery personnel solely for order fulfillment',
        'Payment Processors: Transaction data is securely processed by Razorpay/Stripe under their own privacy policies',
        'Cloud Infrastructure: Your data is stored on Supabase (hosted on AWS), which maintains SOC 2 Type II compliance',
        'Communication Tools: We use WhatsApp Business API for delivery updates and customer support',
        'Legal Requirements: We may disclose information if required by law, court order, or government regulation',
      ],
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: [
        'We implement appropriate technical and organizational security measures to protect your personal information:',
      ],
      list: [
        'All data transmission is encrypted using TLS/SSL (HTTPS)',
        'Database access is restricted through Row Level Security (RLS) policies',
        'Admin dashboard access requires authenticated sessions',
        'Payment processing is PCI-DSS compliant through our payment partners',
        'We conduct regular security reviews of our infrastructure',
        'Employee access to personal data is limited on a need-to-know basis',
      ],
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      content: [
        'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy:',
      ],
      list: [
        'Active Account Data: Retained for the duration of your subscription plus 12 months after your last order',
        'Inquiry & Contact Data: Retained for 24 months for service quality and follow-up purposes',
        'Transaction Records: Retained for 7 years as required by Indian tax and accounting regulations',
        'You may request deletion of your data at any time by contacting us at hello@ritualwellness.in',
      ],
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      content: [
        'Under applicable Indian data protection laws (including the Digital Personal Data Protection Act, 2023), you have the following rights:',
      ],
      list: [
        'Right to Access: Request a copy of all personal data we hold about you',
        'Right to Correction: Request correction of any inaccurate or incomplete data',
        'Right to Erasure: Request deletion of your personal data, subject to legal retention requirements',
        'Right to Withdraw Consent: Withdraw consent for marketing communications at any time',
        'Right to Grievance Redressal: File a complaint with our Data Protection Officer or the relevant authority',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies Policy',
      content: [
        'Our website uses minimal, essential cookies to ensure proper functionality:',
      ],
      list: [
        'Session Cookies: Required for authentication and maintaining your login state on the admin dashboard',
        'Preference Cookies: Remember your dietary preference selection and delivery area',
        'We do not use third-party advertising cookies, social media tracking pixels, or cross-site tracking technologies',
        'You can control cookie settings through your browser preferences. Disabling essential cookies may affect website functionality',
      ],
    },
    {
      id: 'children',
      title: 'Children\'s Privacy',
      content: [
        'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information promptly.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: [
        'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website with a revised "Last Updated" date.',
        'We encourage you to review this policy periodically to stay informed about how we are protecting your information.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: [
        'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
      ],
      list: [
        'Email: hello@ritualwellness.in',
        'Phone: +91 98401 86878',
        'Instagram: @ritualwellness.in',
        'Address: Chennai, Tamil Nadu, India',
      ],
    },
  ];

  return (
    <div className="pb-12">
      <SEO 
        title="Privacy Policy | Ritual Wellness Data Protection" 
        description="Learn how Ritual Wellness handles your personal data and protects your privacy in accordance with Indian regulations."
      />
      <PageHeader
        title="Privacy Policy"
        subtitle="Your trust is our most important ingredient."
      />

      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Table of Contents — Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/40 mb-4">Contents</p>
              <nav className="space-y-2">
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
                <span className="font-medium text-brand-olive">Last Updated:</span> March 8, 2025 &nbsp;•&nbsp;
                <span className="font-medium text-brand-olive">Jurisdiction:</span> Republic of India
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-xl md:text-2xl text-brand-olive font-serif font-medium tracking-wider mb-4">{section.title}</h2>
                {section.content.map((para, idx) => (
                  <p key={idx} className="text-sm md:text-base text-brand-olive/70 font-normal leading-relaxed mb-4">{para}</p>
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
                  <h3 className="text-xl font-serif font-medium mb-1">Have questions about your data?</h3>
                  <p className="text-brand-beige/70 text-sm">We're transparent about everything — including this.</p>
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

export default Privacy;

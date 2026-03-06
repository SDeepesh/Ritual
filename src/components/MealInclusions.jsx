import footerBg from '../assets/footer_bg.png';
import detoxImg from '../assets/detox.jpg';

const InclusionItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-brand-olive/80">
    <div className="w-6 h-6 flex-shrink-0 opacity-70">
      {icon}
    </div>
    <span className="text-sm md:text-base font-serif tracking-wide">{text}</span>
  </div>
);

const MealInclusions = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-16 relative overflow-hidden bg-[#fdfdfd]">
      {/* Soft background texture/overlay */}

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-serif text-brand-olive tracking-[6px] mb-2 uppercase opacity-90">
            RITUAL
          </h1>
          <p className="font-serif italic text-brand-sage text-xl md:text-2xl mb-8">
            Eat Your Skincare
          </p>
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-xl md:text-2xl text-brand-olive normal-case tracking-normal font-serif">
              Chennai's First Functional Meal Ritual
            </h2>
            <p className="text-brand-sage text-sm md:text-base font-sans font-light">
              Nutrition designed for energy, skin, <span className="font-medium text-brand-olive">gut health</span> and focus.
            </p>
          </div>
        </div>

        {/* Main Composition Image placeholder - Responsive */}
        <div className="mb-8">
          <img
            src={detoxImg}
            alt="Ritual Meal Composition"
            className=""
          />
        </div>

        {/* Inclusions List */}
        <div className="mb-16">
          <h3 className="text-xl font-serif text-brand-olive mb-8 italic">Every meal includes:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 max-w-2xl mx-auto px-4">
            <InclusionItem
              text="Power Bowl"
              icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM12 8V4m0 0a2 2 0 100-4 2 2 0 000 4z" /></svg>}
            />
            <InclusionItem
              text="60ml Functional Shot"
              icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
            />
            <InclusionItem
              text="20g Superfood Nuts"
              icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>}
            />
            <InclusionItem
              text="350ml Infused Detox Water"
              icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7-7-7m14-8l-7 7-7-7" /></svg>}
            />
          </div>

          <p className="text-brand-sage text-sm mt-12 font-light">
            Delivered fresh daily across Chennai.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-brand-sage hover:bg-brand-olive text-white px-8 py-3 rounded-md text-sm transition-colors duration-300 shadow-sm hover:shadow-md">
            Start Subscription
          </button>
        </div>
      </div>
    </section>
  );
};

export default MealInclusions;

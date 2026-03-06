import React, { useState, useEffect } from 'react';

const TestimonialCard = ({ quote, author, role, avatar, itemsPerView }) => (
  <div
    className="flex-shrink-0 px-3 md:px-4"
    style={{ width: `${100 / itemsPerView}%` }}
  >
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm flex flex-col h-full transition-all duration-500 hover:shadow-md border border-brand-beige/20">
      <div className="text-brand-sage mb-4 md:mb-6">
        <svg className="w-8 h-8 opacity-40 text-brand-sage" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8c-4.411 0-8 3.589-8 8s3.589 8 8 8c1.117 0 2.164-.236 3.121-.645C13.847 21.848 15 19.124 15 16v-8h-5zm12 0c-4.411 0-8 3.589-8 8s3.589 8 8 8c1.117 0 2.164-.236 3.121-.645C25.847 21.848 27 19.124 27 16v-8h-5z" />
        </svg>
      </div>
      <p className="text-brand-olive text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow opacity-90">
        "{quote}"
      </p>
      <div className="flex items-center gap-4 border-t border-brand-beige/10 pt-5 md:pt-6 mt-auto">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-brand-beige/20 flex-shrink-0 border border-brand-beige/30">
          <img src={avatar} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-brand-olive font-bold text-xs md:text-sm tracking-wide">{author}</h4>
          <p className="text-brand-sage text-[9px] md:text-[10px] tracking-[2px] font-medium">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const testimonials = [
    {
      quote: "Finally, a meal ritual that actually feels like a ritual. The presentation is stunning, and the flavors are so sophisticated. It's not just food; it's self-care in a bowl.",
      author: "Vikram Malhotra",
      role: "Creative Director",
      avatar: "https://i.pravatar.cc/150?u=vikram"
    },
    {
      quote: "As a fitness coach, I'm very picky about my macros. Ritual gets it right every time. The balance of proteins and healthy fats keeps me fueled without the mid-day slump.",
      author: "Neha Kapoor",
      role: "Wellness Coach",
      avatar: "https://i.pravatar.cc/150?u=neha"
    },
    {
      quote: "Ritual has completely simplified my mornings. I no longer have to worry about meal prep, and I know I'm getting high-quality ingredients that support my active lifestyle.",
      author: "Rohan Gupta",
      role: "Software Engineer",
      avatar: "https://i.pravatar.cc/150?u=rohan"
    },
    {
      quote: "The flavors are simply exquisite. Each bowl is a new discovery. I love how they incorporate seasonal ingredients and functional superfoods into every meal.",
      author: "Ananya Iyer",
      role: "Yoga Instructor",
      avatar: "https://i.pravatar.cc/150?u=ananya"
    },
    {
      quote: "The best investment I've made for my health this year. The delivery is punctual, and the customer service is exceptional. Highly recommend to anyone in Chennai.",
      author: "Karan Singh",
      role: "Entrepreneur",
      avatar: "https://i.pravatar.cc/150?u=karan"
    },
    {
      quote: "Finally, a meal ritual that actually feels like a ritual. The presentation is stunning, and the flavors are so sophisticated. It's not just food; it's self-care in a bowl.",
      author: "Vikram Malhotra",
      role: "Creative Director",
      avatar: "https://i.pravatar.cc/150?u=vikram"
    }
  ];

  const totalItems = testimonials.length;

  // Handle responsive view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(totalItems / itemsPerView);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const slideToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-brand-sage/10 py-12 md:py-16 px-4 md:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-olive mb-4 text-3xl md:text-4xl">Our Community Loves Ritual</h2>
          <div className="w-24 h-1 bg-brand-sage mx-auto opacity-30"></div>
        </div>

        <div className="mb-12 mx-[-12px] md:mx-[-16px]">
          <div
            className="flex items-stretch transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
              width: `${(totalItems / itemsPerView) * 100}%`
            }}
          >
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} {...t} itemsPerView={totalItems} />
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-3">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => slideToIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx
                ? 'bg-brand-olive scale-125'
                : 'bg-brand-olive/20 hover:bg-brand-olive/40'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-beige/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-sage/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default Testimonials;

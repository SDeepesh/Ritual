import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';
import { blogData } from '../data/blogData';

const BlogCard = ({ slug, title, excerpt, image, author, date, readTime, itemsPerView }) => (
  <div
    className="flex-shrink-0 px-3 md:px-4"
    style={{ width: `${100 / itemsPerView}%` }}
  >
    <div className="bg-white rounded-xl shadow-sm flex flex-col h-full transition-all duration-500 hover:shadow-xl border border-brand-beige/20 overflow-hidden group">

      <div className="aspect-[16/10] overflow-hidden relative">
        <LazyImage
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-brand-olive font-bold">
          {readTime}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4 text-xs font-medium text-brand-sage">
          <span>{date}</span>
          <span>•</span>
          <span>{author}</span>
        </div>

        <h3 className="text-lg font-serif text-brand-olive leading-tight mb-4 group-hover:text-brand-sage transition-colors duration-300">
          <Link to={`/blog/${slug}`} className="focus:outline-none">
            {title}
          </Link>
        </h3>

        {/* <p className="text-brand-olive/80 text-sm leading-relaxed mb-4 flex-grow">
          {excerpt}
        </p> */}

        <div className="mt-auto pt-4 border-t border-brand-beige/20">
          <Link
            to={`/blog/${slug}`}
            className="inline-flex items-center gap-2 text-brand-sage font-bold text-xs uppercase tracking-widest hover:text-brand-olive transition-colors"
          >
            Read Article
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsPerView, setItemsPerView] = React.useState(1);
  const totalItems = blogData.length;

  React.useEffect(() => {
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

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 8000); // Slower slide time for reading
    return () => clearInterval(timer);
  }, [totalSlides]);

  const slideToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="community" className="w-full bg-brand-beige/20 py-12 md:py-16 px-4 md:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-4">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">RITUAL JOURNAL</span>
            </div>
            <h2 className="text-brand-olive">
              Thoughts on Wellness
            </h2>
            <p className="mt-4 text-brand-olive/80 text-lg">
              Science-backed insights on functional nutrition, hydration, and clean eating designed for the modern Chennai lifestyle.
            </p>
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => setCurrentIndex(prev => prev > 0 ? prev - 1 : totalSlides - 1)}
              className="w-12 h-12 rounded-full border border-brand-olive/20 flex items-center justify-center text-brand-olive hover:bg-brand-olive hover:text-white transition-all"
              aria-label="Previous posts"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentIndex(prev => (prev + 1) % totalSlides)}
              className="w-12 h-12 rounded-full border border-brand-olive/20 flex items-center justify-center text-brand-olive hover:bg-brand-olive hover:text-white transition-all"
              aria-label="Next posts"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mx-[-12px] md:mx-[-16px]">
          <div
            className="flex items-stretch pb-4 transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
              width: `${(totalItems / itemsPerView) * 100}%`
            }}
          >
            {blogData.map((blog) => (
              <BlogCard key={blog.id} {...blog} itemsPerView={totalItems} />
            ))}
          </div>
        </div>

        {/* Carousel Dots - Mobile only */}
        <div className="flex md:hidden justify-center gap-3">
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

      {/* Subtle Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-brand-sage/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default BlogSection;

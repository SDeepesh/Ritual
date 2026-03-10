import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className, placeholder = 'bg-brand-beige/10', objectFit = 'cover' }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Reset loaded state when src changes
  useEffect(() => {
    setLoaded(false);
  }, [src]);

  // Map objectFit prop to tailwind class
  const objectFitClass = objectFit === 'contain' ? 'object-contain' : 'object-cover';

  const positionClass = (className.includes('absolute') || className.includes('fixed') || className.includes('relative')) 
    ? '' 
    : 'relative';

  return (
    <div 
      ref={imgRef}
      className={`${positionClass} ${className} ${!loaded ? placeholder : ''} ${!className.includes('h-') ? 'h-full' : ''} ${!className.includes('w-') ? 'w-full' : ''} overflow-hidden`}
    >
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full ${objectFitClass} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
      )}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-brand-sage/20 border-t-brand-sage rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;

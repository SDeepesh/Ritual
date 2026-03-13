import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { menuByDay } from './RitualMenuJson';
import foodImages from '../utils/foodImages';
import productBowl from '../assets/product_bowl.png'; // Fallback
import LazyImage from './LazyImage';

const MealModal = ({ meal, onClose }) => {
  if (!meal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-olive/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-brand-olive transition-all shadow-lg hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-auto bg-[#f9f7f4] relative">
          <LazyImage
            src={meal.img}
            alt={meal.title}
            width={600}
            height={600}
            className="absolute inset-0 w-full h-full"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden"></div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col">
          <div className="inline-block px-3 py-1 bg-brand-sage/10 text-brand-sage text-[10px] font-bold tracking-[2px] uppercase rounded-full mb-4 md:mb-6 w-fit">
            {meal.type}
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-brand-olive mb-3 md:mb-4 leading-[1.1]">{meal.title}</h2>

          <p className="text-brand-sage text-sm md:text-lg mb-4 opacity-80">
            {meal.description}
          </p>

          <div className="mb-4">
            <h4 className="text-[16px] text-brand-olive uppercase tracking-[2px] font-bold mb-4 border-b border-brand-beige/30 pb-3">Nutritional Profile</h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-brand-beige/5 p-2 md:p-3 rounded-2xl border border-brand-beige/20">
                <p className="text-[9px] text-brand-sage uppercase font-bold tracking-wider mb-1">Calories</p>
                <p className="text-md md:text-xl font-serif font-bold text-brand-olive">{meal.cal}</p>
              </div>
              <div className="bg-brand-beige/5 p-2 md:p-3 rounded-2xl border border-brand-beige/20">
                <p className="text-[9px] text-brand-sage uppercase font-bold tracking-wider mb-1">Protein</p>
                <p className="text-md md:text-xl font-serif font-bold text-brand-olive">{meal.pro}g</p>
              </div>
              <div className="bg-brand-beige/5 p-2 md:p-3 rounded-2xl border border-brand-beige/20">
                <p className="text-[9px] text-brand-sage uppercase font-bold tracking-wider mb-1">Carbs</p>
                <p className="text-md md:text-xl font-serif font-bold text-brand-olive">{meal.carb}g</p>
              </div>
              <div className="bg-brand-beige/5 p-2 md:p-3 rounded-2xl border border-brand-beige/20">
                <p className="text-[9px] text-brand-sage uppercase font-bold tracking-wider mb-1">Fats</p>
                <p className="text-md md:text-xl font-serif font-bold text-brand-olive">{meal.fat}g</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-[16px] text-brand-olive uppercase tracking-[2px] font-bold mb-4 border-b border-brand-beige/30 pb-3">Artisanal Ingredients</h4>
            <div className="flex flex-wrap gap-2">
              {meal.ingredients.map((ing, i) => (
                <span key={i} className="text-[11px] px-4 py-2 bg-white text-brand-olive rounded-md border border-brand-beige/40 shadow-sm font-medium">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* <button className="mt-auto w-full bg-brand-sage hover:bg-brand-olive text-white py-5 rounded-md font-bold tracking-[3px] uppercase transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Add to My Ritual Plan
          </button> */}
        </div>
      </div>
    </div>
  );
};

const DailyMenu = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Calculate total days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const [selectedDayOffset, setSelectedDayOffset] = useState(today.getDate() - 1);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const scrollRef = useRef(null);

  // Generate all dates for the current month
  const getDates = () => {
    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(new Date(currentYear, currentMonth, i));
    }
    return dates;
  };

  const dates = getDates();

  const getDailyMeals = (date) => {
    const dayNum = date.getDate();
    // Rotation logic: menuByDay has 28 days. Wrap around if month has 29, 30, or 31 days.
    const menuDayKey = `Day ${((dayNum - 1) % 28) + 1}`;
    const dayMeals = menuByDay[menuDayKey] || [];

    return dayMeals.map((meal) => ({
      ...meal,
      // Map images: use the 'img' key from JSON to look up in our foodImages map
      // e.g., if meal.img is "image1", foodImages["image1"] will be the imported asset
      img: foodImages[meal.img] || productBowl
    }));
  };

  const currentMeals = getDailyMeals(dates[selectedDayOffset]);

  const formatDate = (date) => {
    return {
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
      day: date.getDate()
    };
  };

  // Scroll to today's date on mount
  useEffect(() => {
    if (scrollRef.current) {
      const activeElement = scrollRef.current.children[selectedDayOffset];
      if (activeElement) {
        scrollRef.current.scrollTo({
          left: activeElement.offsetLeft - scrollRef.current.offsetWidth / 2 + activeElement.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  return (
    <section id="menu" className="w-full bg-[#fdfaf6] py-12 md:py-16 px-4 md:px-16 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sage/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 md:mb-12">
          <h2 className="text-brand-olive mb-2">Today's Ritual</h2>
          <p className="text-brand-sage">A rotating menu of balanced bowls crafted fresh each day.</p>
        </div>

        {/* Dynamic Month Calendar Selector */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto mb-8 md:mb-12 gap-3 no-scrollbar scroll-smooth"
        >
          {dates.map((date, idx) => {
            const isActive = selectedDayOffset === idx;
            const isToday = date.getDate() === today.getDate();
            const { weekday, day } = formatDate(date);

            return (
              <button
                key={idx}
                onClick={() => setSelectedDayOffset(idx)}
                className={`flex-shrink-0 w-[calc((100%-48px)/7)] min-w-[70px] h-10 flex items-center justify-center rounded transition-all duration-300 border text-xs md:text-sm font-medium tracking-widest ${isActive
                  ? 'bg-[#1a2e1a] text-white border-[#1a2e1a] shadow-md'
                  : 'bg-white text-[#6F785F] border-brand-beige/30 hover:border-brand-sage/50'
                  } ${isToday && !isActive ? 'ring-1 ring-brand-sage/20' : ''}`}
              >
                {day} {weekday}
              </button>
            );
          })}
        </div>

        {/* 4-Meal Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
          {currentMeals.map((meal, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMeal(meal)}
              className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col cursor-pointer hover:-translate-y-1"
            >
              <div className="relative w-full pt-[80%] overflow-hidden bg-[#f9f7f4]">
                <LazyImage
                  src={meal.img}
                  alt={meal.title}
                  width={400}
                  height={320}
                  className="absolute inset-0 w-full h-full group-hover:scale-110 transition-transform duration-700"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-brand-olive/0 group-hover:bg-brand-olive/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-brand-olive text-[10px] font-bold tracking-[2px] uppercase py-2.5 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">View Details</span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-[10px] text-brand-sage uppercase tracking-widest mb-2 font-bold opacity-70">
                  {meal.type}
                </div>
                <h3 className="text-lg font-serif font-medium text-brand-olive mb-4 leading-tight flex-grow group-hover:text-brand-sage transition-colors">
                  {meal.title}
                </h3>

                {/* Nutritional Details */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-brand-beige/20 mb-4">
                  <div className="text-center">
                    <p className="text-[10px] text-brand-sage uppercase tracking-tighter font-bold">Calories</p>
                    <p className="text-sm font-bold text-brand-olive">{meal.cal}</p>
                  </div>
                  <div className="text-center border-x border-brand-beige/10">
                    <p className="text-[10px] text-brand-sage uppercase tracking-tighter font-bold">Protein</p>
                    <p className="text-sm font-bold text-brand-olive">{meal.pro}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-brand-sage uppercase tracking-tighter font-bold">Carbs</p>
                    <p className="text-sm font-bold text-brand-olive">{meal.carb}g</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-brand-sage uppercase tracking-widest font-bold">View details</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-sage/20 group-hover:bg-brand-sage transition-all"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/start-ritual"
            className="bg-brand-olive hover:bg-brand-sage text-white px-10 py-3 rounded-md text-sm transition-all duration-500 shadow-xl hover:shadow-2xl font-medium tracking-[2px] uppercase hover:-translate-y-1 block"
          >
            Start My Ritual Plan
          </Link>
        </div>
      </div>

      {/* Meal Modal */}
      <MealModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
    </section>
  );
};

export default DailyMenu;

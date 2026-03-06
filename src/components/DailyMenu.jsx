import React, { useState } from 'react';
import mealOats from '../assets/meal_oats.png';
import mealTurkey from '../assets/meal_turkey.png';
import mealFish from '../assets/meal_fish.png';
import productBowl from '../assets/product_bowl.png';
import heroBg from '../assets/bg.png';

const DailyMenu = () => {
  const [selectedDayOffset, setSelectedDayOffset] = useState(0);

  // Helper to get formatted dates for the 7-day header
  const getDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      dates.push(d);
    }
    return dates;
  };

  const dates = getDates();

  // Mock data for 30 unique dishes (represented by 4 types for the portfolio display)
  // In a real app, this would be 30 unique items.
  const menuItems = [
    { title: "Berry Oat Porridge", type: "Breakfast", img: mealOats },
    { title: "Turkey Veggie Stew", type: "Lunch", img: mealTurkey },
    { title: "Herb Seared Fish", type: "Dinner", img: mealFish },
    { title: "Avocado Power Toast", type: "Snack", img: productBowl },
    { title: "Berry Oat Porridge 2", type: "Breakfast", img: mealOats },
    { title: "Turkey Veggie Stew 2", type: "Lunch", img: mealTurkey },
    { title: "Herb Seared Fish 2", type: "Dinner", img: mealFish },
    { title: "Avocado Power Toast 2", type: "Snack", img: productBowl },
    { title: "Berry Oat Porridge 3", type: "Breakfast", img: mealOats },
    { title: "Turkey Veggie Stew 3", type: "Lunch", img: mealTurkey },
    { title: "Herb Seared Fish 3", type: "Dinner", img: mealFish },
    { title: "Avocado Power Toast 3", type: "Snack", img: productBowl },
    { title: "Berry Oat Porridge 4", type: "Breakfast", img: mealOats },
    { title: "Turkey Veggie Stew 4", type: "Lunch", img: mealTurkey },
    { title: "Herb Seared Fish 4", type: "Dinner", img: mealFish },
    { title: "Avocado Power Toast 4", type: "Snack", img: productBowl },
    { title: "Berry Oat Porridge 5", type: "Breakfast", img: mealOats },
    { title: "Turkey Veggie Stew 5", type: "Lunch", img: mealTurkey },
    { title: "Herb Seared Fish 5", type: "Dinner", img: mealFish },
    { title: "Avocado Power Toast 5", type: "Snack", img: productBowl },
    { title: "Berry Oat Porridge 6", type: "Breakfast", img: mealOats },
    { title: "Turkey Veggie Stew 6", type: "Lunch", img: mealTurkey },
    { title: "Herb Seared Fish 6", type: "Dinner", img: mealFish },
    { title: "Avocado Power Toast 6", type: "Snack", img: productBowl },
    { title: "Berry Oat Porridge 7", type: "Breakfast", img: mealOats },
    { title: "Turkey Veggie Stew 7", type: "Lunch", img: mealTurkey },
    { title: "Herb Seared Fish 7", type: "Dinner", img: mealFish },
    { title: "Avocado Power Toast 7", type: "Snack", img: productBowl },
    { title: "Berry Oat Porridge 8", type: "Breakfast", img: mealOats },
    { title: "Turkey Veggie Stew 8", type: "Lunch", img: mealTurkey },
    { title: "Herb Seared Fish 8", type: "Dinner", img: mealFish },
    { title: "Avocado Power Toast 8", type: "Snack", img: productBowl },
    // Repeat or vary for the sake of the 30-day demo
  ];

  // Logic to "rotate" the menu based on the day of the month
  const getDailyMeals = (date) => {
    const day = date.getDate();
    // Calculate a unique starting index for each day of the month
    // This ensures that as you click through the 7-day calendar, you see different sets of dishes
    const startIndex = ((day - 1) * 4) % menuItems.length;
    return menuItems.slice(startIndex, startIndex + 4);
  };

  const currentMeals = getDailyMeals(dates[selectedDayOffset]);

  const formatDate = (date) => {
    const options = { weekday: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <section className="w-full bg-[#fdfaf6] py-12 md:py-16 px-4 md:px-16 bg-center bg-cover">
      <div className="max-w-7xl mx-auto">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-brand-olive">
            Today's Ritual
          </h2>
        </div>

        {/* 7-Day Calendar Selector */}
        <div className="flex overflow-x-auto md:overflow-visible pl-2 md:pl-0 pb-2 mb-10 gap-3 no-scrollbar">
          {dates.map((date, idx) => {
            const isActive = selectedDayOffset === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedDayOffset(idx)}
                className={`flex-shrink-0 md:flex-1 px-4 py-3 rounded-lg text-xs transition-all duration-300 ${isActive
                  ? 'bg-brand-sage text-white shadow-md transform scale-105'
                  : 'bg-white text-brand-olive border border-brand-beige/50 hover:border-brand-sage text-opacity-80'
                  }`}
              >
                {formatDate(date)}
              </button>
            );
          })}
        </div>

        {/* 4-Meal Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentMeals.map((meal, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative pt-[80%] overflow-hidden bg-[#f9f7f4]">
                <img
                  src={meal.img}
                  alt={meal.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-medium text-brand-olive mb-2 leading-tight">
                  {meal.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] text-brand-sage uppercase">
                  <span>{meal.type}</span>
                  <button className="hover:text-brand-olive transition-colors underline-offset-4">Swap</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <button className="bg-brand-sage hover:bg-brand-olive text-white px-8 py-3 rounded-md text-sm transition-colors duration-300 shadow-sm hover:shadow-md">
            Add to Ritual
          </button>
        </div>
      </div>
    </section>
  );
};

export default DailyMenu;

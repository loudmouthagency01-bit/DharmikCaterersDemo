import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          // Adjust scroll position to account for fixed navbar
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  const deluxItems = [
    { name: 'Soup', count: 2 }, { name: 'Soup Starter', count: 1 }, { name: 'Chaat House', count: 1 },
    { name: 'Indian Live Counter', count: 3 }, { name: 'Salad Flavour', count: 1 }, { name: 'Farsan', count: 1 },
    { name: 'Sweet Liquid', count: 1 }, { name: 'Sweet Live', count: 1 }, { name: 'Sabji Regular', count: 1 },
    { name: 'Sabji Live', count: 1 }, { name: 'Roti Live', count: 2 }, { name: 'Dal Preparation', count: 1 },
    { name: 'Rice Preparation', count: 1 }, { name: 'Butter Milk', count: 1 }, { name: 'Mineral Water - 200 ML', count: 1 },
    { name: 'Mukhwas Flavour', count: 2 }
  ];

  const premiumItems = [
    { name: 'Fresh Welcome Drinks', count: 2 }, { name: 'Starter on Rotation', count: 1 }, { name: 'Soup', count: 2 },
    { name: 'Soup Starter', count: 1 }, { name: 'Chaat House', count: 1 }, { name: 'Indian Live Counter', count: 2 },
    { name: 'Salad Flavour', count: 5 }, { name: 'Farsan', count: 1 }, { name: 'Sweet Liquid', count: 1 },
    { name: 'Sweet Live', count: 1 }, { name: 'Sabji Regular', count: 1 }, { name: 'Sabji Live', count: 1 },
    { name: 'Roti Live', count: 2 }, { name: 'Dal Preparation', count: 1 }, { name: 'Rice Preparation', count: 1 },
    { name: 'Butter Milk', count: 1 }, { name: 'Mineral Water - 200 ML', count: 1 }, { name: 'Mukhwas Flavour', count: 2 },
    { name: 'Ice Cream Dessert', count: 1 }
  ];

  const goldItems = [
    { name: 'Special Mocktail Bar', count: 1 }, { name: 'Starter on Rotation', count: 2 }, { name: 'Soup', count: 2 },
    { name: 'Soup Starter', count: 2 }, { name: 'Chaat House', count: 2 }, { name: 'Indian Live Counter', count: 2 },
    { name: 'International Live Counter', count: 2 }, { name: 'Salad Flavour', count: 8 }, { name: 'Farsan / Back Dish', count: 2 },
    { name: 'Sweet Liquid', count: 1 }, { name: 'Sweet Any', count: 2 }, { name: 'Sabji Regular', count: 1 },
    { name: 'Sabji Live', count: 2 }, { name: 'Roti Live', count: 3 }, { name: 'Dal Preparation', count: 2 },
    { name: 'Rice Preparation', count: 2 }, { name: 'Butter Milk', count: 1 }, { name: 'Mineral Water - 200 ML', count: 1 },
    { name: 'Mukhwas Flavour', count: 2 }, { name: 'Regular Dessert', count: 2 }, { name: 'Special Fruit Counter', count: 1 }
  ];

  const silverItems = [
    { name: 'Fresh Welcome Drinks', count: 2 }, { name: 'Starter on Rotation', count: 2 }, { name: 'Soup', count: 2 },
    { name: 'Soup Starter', count: 2 }, { name: 'Chaat House', count: 1 }, { name: 'Indian Live Counter', count: 2 },
    { name: 'International Live Counter', count: 1 }, { name: 'Salad Flavour', count: 5 }, { name: 'Farsan', count: 1 },
    { name: 'Sweet Liquid', count: 1 }, { name: 'Sweet Any', count: 2 }, { name: 'Sabji Regular', count: 1 },
    { name: 'Sabji Live', count: 2 }, { name: 'Roti Live', count: 3 }, { name: 'Dal Preparation', count: 1 },
    { name: 'Rice Preparation', count: 1 }, { name: 'Butter Milk', count: 1 }, { name: 'Mineral Water - 200 ML', count: 1 },
    { name: 'Mukhwas Flavour', count: 2 }, { name: 'Regular Dessert', count: 2 }
  ];

  const diamondItems = [
    { name: 'Special Mocktail Bar', count: 1 }, { name: 'Starter on Rotation', count: 3 }, { name: 'Soup', count: 4 },
    { name: 'Soup Starter', count: 3 }, { name: 'Chaat House', count: 3 }, { name: 'Indian Live Counter', count: 3 },
    { name: 'International Live Counter', count: 3 }, { name: 'Kathiyawadi Counter', count: 1 }, { name: 'Salad Flavour', count: 10 },
    { name: 'Farsan / Back Dish', count: 2 }, { name: 'Sweet Liquid', count: 2 }, { name: 'Sweet Any', count: 3 },
    { name: 'Sabji Regular', count: 2 }, { name: 'Sabji Live', count: 2 }, { name: 'Roti Live', count: 2 },
    { name: 'Dal Preparation', count: 4 }, { name: 'Rice Preparation', count: 2 }, { name: 'Butter Milk', count: 2 },
    { name: 'Mineral Water - 200 ML', count: 1 }, { name: 'Mukhwas Flavour', count: 1 }, { name: 'Regular Dessert', count: 2 },
    { name: 'Special Fruit Counter', count: 3 }, { name: 'Special Coffee Bar', count: 1 }
  ];

  const renderMenu = (title, items, themeClass, id) => (
    <div className={`menu-board ${themeClass}`} id={id}>
      <div className="menu-header">
        <h2>{title}</h2>
      </div>
      <ul className="menu-list">
        {items.map((item, index) => (
          <li key={index}>
            <span className="item-name">{item.name}</span>
            <span className="dots"></span>
            <span className="item-count">{item.count}</span>
          </li>
        ))}
      </ul>
      <div className="menu-footer">
        <p>:: EXTRA CHARGEABLE ::</p>
        <p>PRO GIRLS | BOMBAY SERVICE BOYZ | COUNTER DISPLAY THEME | GST CHARGE</p>
      </div>
    </div>
  );

  return (
    <div className="packages-page page-container animate-fade-in">
      <h1 className="section-title">Our Packages</h1>
      <p className="text-center mb-4">Discover our meticulously crafted menus designed to elevate your celebrations.</p>
      
      <div className="menus-container">
        {renderMenu('Delux Package', deluxItems, 'theme-pink', 'delux-package')}
        {renderMenu('Premium Package', premiumItems, 'theme-green', 'premium-package')}
        {renderMenu('Gold Package', goldItems, 'theme-gold', 'gold-package')}
        {renderMenu('Silver Package', silverItems, 'theme-silver', 'silver-package')}
        {renderMenu('Diamond Package', diamondItems, 'theme-diamond', 'diamond-package')}
      </div>
    </div>
  );
};

export default Packages;

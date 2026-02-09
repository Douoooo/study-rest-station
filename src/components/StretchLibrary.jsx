import React, { useState } from 'react';
import StretchCard from './StretchCard';
import { stretchesData } from '../data/stretches';
import './StretchLibrary.css';

const StretchLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('shoulder');

  return (
    <div className="stretch-library">
      <div className="library-header">
        <h2 className="library-title">🧘 久坐无声拉伸库</h2>
        <p className="library-subtitle">自习室友好型拉伸动作 · 无声 · 小幅度 · 无工具</p>
      </div>

      <div className="category-tabs">
        {Object.entries(stretchesData).map(([key, category]) => (
          <button
            key={key}
            className={`category-tab ${activeCategory === key ? 'active' : ''}`}
            onClick={() => setActiveCategory(key)}
          >
            <span className="tab-icon">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      <div className="stretches-container">
        {stretchesData[activeCategory].stretches.map(stretch => (
          <StretchCard
            key={stretch.id}
            stretch={stretch}
            category={stretchesData[activeCategory]}
          />
        ))}
      </div>

      <div className="library-footer">
        <p>💡 所有动作均可在自习室/图书馆进行，保持安静</p>
      </div>
    </div>
  );
};

export default StretchLibrary;

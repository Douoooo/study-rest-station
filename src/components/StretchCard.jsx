import React, { useState } from 'react';
import './StretchCard.css';

const StretchCard = ({ stretch, category }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="stretch-card">
      <div className="stretch-header" onClick={() => setShowDetails(!showDetails)}>
        <div className="stretch-info">
          <h3 className="stretch-name">{stretch.name}</h3>
          <span className="stretch-duration">⏱️ {stretch.duration}秒</span>
        </div>
        <button className="expand-button">{showDetails ? '▲' : '▼'}</button>
      </div>
      
      {showDetails && (
        <div className="stretch-details">
          <div className="stretch-steps">
            <h4>📋 动作步骤</h4>
            <ol>
              {stretch.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="stretch-tips">
            <h4>💡 小贴士</h4>
            <p>{stretch.tips}</p>
          </div>
          <div className="stretch-image">
            <div className="image-placeholder">
              <div className="placeholder-icon">{category.icon}</div>
              <p>高清动作示意图</p>
              <span className="image-tag">{stretch.image}</span>
            </div>
          </div>
          <button className="download-button" onClick={() => alert('下载功能开发中...')}>
            ⬇️ 下载动作卡片
          </button>
        </div>
      )}
    </div>
  );
};

export default StretchCard;

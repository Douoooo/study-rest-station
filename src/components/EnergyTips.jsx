import React, { useState } from 'react';
import { energyTips, eyeExercises, tipsByTime } from '../data/tips';
import './EnergyTips.css';

const EnergyTips = () => {
  const [activeTab, setActiveTab] = useState('energy');
  const [selectedTip, setSelectedTip] = useState(null);

  return (
    <div className="energy-tips">
      <div className="tips-header">
        <h2 className="tips-title">⚡ 久坐提神小技巧</h2>
        <p className="tips-subtitle">无咖啡因 · 无声提神 · 适配自习室场景</p>
      </div>

      <div className="tips-tabs">
        <button
          className={`tab-btn ${activeTab === 'energy' ? 'active' : ''}`}
          onClick={() => setActiveTab('energy')}
        >
          🎯 提神技巧
        </button>
        <button
          className={`tab-btn ${activeTab === 'eye' ? 'active' : ''}`}
          onClick={() => setActiveTab('eye')}
        >
          👁️ 护眼动作
        </button>
        <button
          className={`tab-btn ${activeTab === 'time' ? 'active' : ''}`}
          onClick={() => setActiveTab('time')}
        >
          ⏰ 时间推荐
        </button>
      </div>

      {activeTab === 'energy' && (
        <div className="tips-grid">
          {energyTips.map(tip => (
            <div key={tip.id} className="tip-card" onClick={() => setSelectedTip(tip)}>
              <div className="tip-header">
                <span className="tip-icon">{tip.icon}</span>
                <div className="tip-info">
                  <h3 className="tip-name">{tip.name}</h3>
                  <span className="tip-duration">⏱️ {tip.duration}秒</span>
                </div>
              </div>
              <p className="tip-description">{tip.description}</p>
              <div className="tip-tags">
                <span className={`tag ${tip.sound === '无声' ? 'silent' : 'quiet'}`}>
                  {tip.sound}
                </span>
                <span className="tag scene">{tip.scene}</span>
                <span className="tag effect">{tip.effect}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'eye' && (
        <div className="tips-grid">
          {eyeExercises.map(exercise => (
            <div key={exercise.id} className="tip-card" onClick={() => setSelectedTip(exercise)}>
              <div className="tip-header">
                <span className="tip-icon">{exercise.icon}</span>
                <div className="tip-info">
                  <h3 className="tip-name">{exercise.name}</h3>
                  <span className="tip-duration">⏱️ {exercise.duration}秒</span>
                </div>
              </div>
              <p className="tip-description">{exercise.description}</p>
              <div className="tip-tags">
                <span className={`tag ${exercise.sound === '无声' ? 'silent' : 'quiet'}`}>
                  {exercise.sound}
                </span>
                <span className="tag effect">{exercise.effect}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'time' && (
        <div className="time-recommendations">
          <div className="time-section">
            <h3 className="time-title">🌅 上午 (7:00-12:00)</h3>
            <div className="time-tips">
              {tipsByTime.morning.map(tip => (
                <div key={tip.id} className="time-tip-card">
                  <span className="time-tip-icon">{tip.icon}</span>
                  <div className="time-tip-content">
                    <h4>{tip.name}</h4>
                    <span className="time-tip-duration">{tip.duration}秒</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="time-section">
            <h3 className="time-title">🌤️ 下午 (12:00-18:00)</h3>
            <div className="time-tips">
              {tipsByTime.afternoon.map(tip => (
                <div key={tip.id} className="time-tip-card">
                  <span className="time-tip-icon">{tip.icon}</span>
                  <div className="time-tip-content">
                    <h4>{tip.name}</h4>
                    <span className="time-tip-duration">{tip.duration}秒</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="time-section">
            <h3 className="time-title">🌙 晚上 (18:00-23:00)</h3>
            <div className="time-tips">
              {tipsByTime.evening.map(tip => (
                <div key={tip.id} className="time-tip-card">
                  <span className="time-tip-icon">{tip.icon}</span>
                  <div className="time-tip-content">
                    <h4>{tip.name}</h4>
                    <span className="time-tip-duration">{tip.duration}秒</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTip && (
        <div className="tip-modal" onClick={() => setSelectedTip(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <span className="modal-icon">{selectedTip.icon}</span>
                <h2 className="modal-title">{selectedTip.name}</h2>
              </div>
              <button className="close-button" onClick={() => setSelectedTip(null)}>✕</button>
            </div>
            
            <div className="modal-body">
              <div className="modal-description">
                <p>{selectedTip.description}</p>
              </div>
              
              <div className="modal-info">
                <div className="info-item">
                  <span className="info-label">⏱️ 时长</span>
                  <span className="info-value">{selectedTip.duration}秒</span>
                </div>
                {selectedTip.effect && (
                  <div className="info-item">
                    <span className="info-label">💪 效果</span>
                    <span className="info-value">{selectedTip.effect}</span>
                  </div>
                )}
                <div className="info-item">
                  <span className="info-label">🔊 声音</span>
                  <span className="info-value">{selectedTip.sound}</span>
                </div>
                {selectedTip.scene && (
                  <div className="info-item">
                    <span className="info-label">📍 场景</span>
                    <span className="info-value">{selectedTip.scene}</span>
                  </div>
                )}
              </div>

              {selectedTip.steps && (
                <div className="modal-steps">
                  <h3>📋 执行步骤</h3>
                  <ol>
                    {selectedTip.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="modal-actions">
                <button 
                  className="modal-action-btn primary"
                  onClick={() => {
                    setSelectedTip(null);
                    alert(`开始${selectedTip.name}！\n建议设置${selectedTip.duration}秒定时器`);
                  }}
                >
                  ⏰ 开始计时
                </button>
                <button 
                  className="modal-action-btn secondary"
                  onClick={() => {
                    setSelectedTip(null);
                    alert('收藏功能开发中...');
                  }}
                >
                  ⭐ 收藏
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="tips-footer">
        <p>💡 提神小技巧可在自习室随时使用，不影响他人</p>
      </div>
    </div>
  );
};

export default EnergyTips;

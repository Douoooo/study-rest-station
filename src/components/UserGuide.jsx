import React from 'react';
import './UserGuide.css';

const UserGuide = ({ onStart }) => {
  return (
    <div className="user-guide">
      <div className="guide-intro">
        <h2 className="guide-title">🎯 推荐使用流程</h2>
        <p className="guide-subtitle">按顺序使用，效果最佳</p>
      </div>

      <div className="guide-steps">
        <div className="guide-step" onClick={() => onStart('posture')}>
          <div className="step-number">1</div>
          <div className="step-content">
            <div className="step-header">
              <span className="step-icon">🪑</span>
              <h3 className="step-title">调整坐姿</h3>
              <span className="step-time">5分钟</span>
            </div>
            <p className="step-description">
              学习前先调整好桌椅高度、腰部支撑和整体坐姿，为长时间学习打好基础
            </p>
            <div className="step-features">
              <span className="feature-tag">5大模块</span>
              <span className="feature-tag">快速自检</span>
              <span className="feature-tag">疼痛缓解</span>
            </div>
            <button className="step-button">查看坐姿指南 →</button>
          </div>
        </div>

        <div className="guide-connector">
          <div className="connector-arrow">↓</div>
        </div>

        <div className="guide-step" onClick={() => onStart('plan')}>
          <div className="step-number">2</div>
          <div className="step-content">
            <div className="step-header">
              <span className="step-icon">📊</span>
              <h3 className="step-title">规划时间</h3>
              <span className="step-time">3分钟</span>
            </div>
            <p className="step-description">
              根据当前学习状态选择合适的时间规划模式，下载打印贴在书桌
            </p>
            <div className="step-features">
              <span className="feature-tag">4种模式</span>
              <span className="feature-tag">可视化时间</span>
              <span className="feature-tag">可下载</span>
            </div>
            <button className="step-button">查看规划表 →</button>
          </div>
        </div>

        <div className="guide-connector">
          <div className="connector-arrow">↓</div>
        </div>

        <div className="guide-step" onClick={() => onStart('library')}>
          <div className="step-number">3</div>
          <div className="step-content">
            <div className="step-header">
              <span className="step-icon">🧘</span>
              <h3 className="step-title">选择拉伸动作</h3>
              <span className="step-time">随时</span>
            </div>
            <p className="step-description">
              每次休息时间从拉伸库中选择1-2个动作，每个动作≤30秒
            </p>
            <div className="step-features">
              <span className="feature-tag">12个动作</span>
              <span className="feature-tag">4个部位</span>
              <span className="feature-tag">无声小幅度</span>
            </div>
            <button className="step-button">查看拉伸库 →</button>
          </div>
        </div>

        <div className="guide-connector">
          <div className="connector-arrow">↓</div>
        </div>

        <div className="guide-step" onClick={() => onStart('tips')}>
          <div className="step-number">4</div>
          <div className="step-content">
            <div className="step-header">
              <span className="step-icon">⚡</span>
              <h3 className="step-title">提神技巧</h3>
              <span className="step-time">随时</span>
            </div>
            <p className="step-description">
              感到困倦或疲劳时，使用无咖啡因提神技巧，保持专注
            </p>
            <div className="step-features">
              <span className="feature-tag">12种技巧</span>
              <span className="feature-tag">护眼动作</span>
              <span className="feature-tag">计时功能</span>
            </div>
            <button className="step-button">查看提神技巧 →</button>
          </div>
        </div>
      </div>

      <div className="guide-tips">
        <h3>💡 使用建议</h3>
        <ul className="tips-list">
          <li>建议每45分钟学习后，休息5分钟进行拉伸</li>
          <li>感觉身体不适时，立即检查坐姿并进行调整</li>
          <li>提神技巧可以在任何时间使用，不影响他人</li>
          <li>所有动作均为无声、小幅度，适合自习室场景</li>
        </ul>
      </div>

      <div className="guide-actions">
        <button className="start-all-button" onClick={() => onStart('posture')}>
          🚀 按推荐顺序开始使用
        </button>
      </div>
    </div>
  );
};

export default UserGuide;

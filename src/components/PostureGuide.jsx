import React, { useState } from 'react';
import { postureGuide, quickChecklist, painRelief } from '../data/posture';
import './PostureGuide.css';

const PostureGuide = () => {
  const [activeSection, setActiveSection] = useState('guide');

  return (
    <div className="posture-guide">
      <div className="guide-header">
        <h2 className="guide-title">🪑 自习坐姿优化指南</h2>
        <p className="guide-subtitle">利用书本/靠垫调整坐姿 · 无需额外工具 · 贴合自习室/宿舍场景</p>
      </div>

      <div className="guide-tabs">
        <button
          className={`tab-button ${activeSection === 'guide' ? 'active' : ''}`}
          onClick={() => setActiveSection('guide')}
        >
          📚 完整指南
        </button>
        <button
          className={`tab-button ${activeSection === 'checklist' ? 'active' : ''}`}
          onClick={() => setActiveSection('checklist')}
        >
          ✅ 快速检查
        </button>
        <button
          className={`tab-button ${activeSection === 'relief' ? 'active' : ''}`}
          onClick={() => setActiveSection('relief')}
        >
          💊 疼痛缓解
        </button>
      </div>

      {activeSection === 'guide' && (
        <div className="guide-content">
          {postureGuide.map((section, index) => (
            <div key={section.id} className="guide-section">
              <div className="section-header">
                <div className="section-icon">{section.icon}</div>
                <div className="section-title-group">
                  <h3 className="section-title">{section.title}</h3>
                  <span className="section-category">{section.category}</span>
                </div>
                <span className={`importance-badge ${section.importance === '高' ? 'high' : 'medium'}`}>
                  {section.importance}重要性
                </span>
              </div>

              <div className="section-steps">
                <h4 className="steps-title">📋 调整步骤</h4>
                {section.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="step-item">
                    <div className="step-number">{stepIndex + 1}</div>
                    <div className="step-content">
                      <h5 className="step-title">{step.title}</h5>
                      <p className="step-description">{step.description}</p>
                      <div className="step-image-placeholder">
                        <span className="placeholder-text">示意图: {step.image}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="section-tips">
                <h4 className="tips-title">💡 专业建议</h4>
                <ul className="tips-list">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="tip-item">{tip}</li>
                  ))}
                </ul>
              </div>

              <div className="section-mistakes">
                <h4 className="mistakes-title">⚠️ 常见错误</h4>
                <ul className="mistakes-list">
                  {section.commonMistakes.map((mistake, mistakeIndex) => (
                    <li key={mistakeIndex} className="mistake-item">{mistake}</li>
                  ))}
                </ul>
              </div>

              {index < postureGuide.length - 1 && <div className="section-divider"></div>}
            </div>
          ))}
        </div>
      )}

      {activeSection === 'checklist' && (
        <div className="checklist-content">
          <div className="checklist-intro">
            <h3>📋 每30分钟快速自检</h3>
            <p>勾选以下项目，确保你的坐姿正确</p>
          </div>
          <div className="checklist-items">
            {quickChecklist.map((item, index) => (
              <label key={index} className="checklist-item">
                <input type="checkbox" className="checklist-checkbox" />
                <span className="checklist-text">{item}</span>
              </label>
            ))}
          </div>
          <div className="checklist-actions">
            <button className="action-button" onClick={() => {
              const checkboxes = document.querySelectorAll('.checklist-checkbox');
              checkboxes.forEach(cb => cb.checked = false);
              alert('已重置检查列表');
            }}>
              🔄 重置列表
            </button>
            <button className="action-button primary" onClick={() => alert('保存功能开发中...')}>
              💾 保存当前状态
            </button>
          </div>
        </div>
      )}

      {activeSection === 'relief' && (
        <div className="relief-content">
          <div className="relief-intro">
            <h3>💊 身体疼痛快速缓解</h3>
            <p>根据你感到疼痛的部位，选择对应的缓解方法</p>
          </div>
          <div className="relief-cards">
            {painRelief.map((item, index) => (
              <div key={index} className="relief-card">
                <div className="relief-card-header">
                  <span className="relief-icon">{item.area === '腰部' ? '🪑' : item.area === '肩颈' ? '👆' : '🤚'}</span>
                  <h4 className="relief-title">{item.area}疼痛</h4>
                </div>
                <div className="relief-causes">
                  <h5>可能原因:</h5>
                  <div className="causes-list">
                    {item.causes.map((cause, i) => (
                      <span key={i} className="cause-tag">{cause}</span>
                    ))}
                  </div>
                </div>
                <div className="relief-solutions">
                  <h5>缓解方法:</h5>
                  <ul className="solutions-list">
                    {item.solutions.map((solution, i) => (
                      <li key={i} className="solution-item">{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="guide-footer">
        <p>💡 定期检查坐姿可以预防90%的久坐相关疾病</p>
      </div>
    </div>
  );
};

export default PostureGuide;

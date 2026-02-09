import React, { useState } from 'react';
import { studyPlans } from '../data/plans';
import './StudyPlan.css';

const StudyPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(studyPlans[0]);
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  const handleDownload = () => {
    alert('下载功能开发中...\n将生成可打印的规划表图片');
  };

  return (
    <div className="study-plan">
      <div className="plan-header">
        <h2 className="plan-title">📊 无痛久坐规划表</h2>
        <p className="plan-subtitle">学习 + 活动时间模板 · 适配考研/考公学习节奏</p>
      </div>

      <div className="plan-selection">
        <div className="plan-cards">
          {studyPlans.map(plan => (
            <div
              key={plan.id}
              className={`plan-card ${selectedPlan.id === plan.id ? 'selected' : ''}`}
              onClick={() => setSelectedPlan(plan)}
            >
              <div className="plan-card-header">
                <h3 className="plan-card-title">{plan.name}</h3>
                <span
                  className="plan-tag"
                  style={{ backgroundColor: plan.tagColor }}
                >
                  {plan.tag}
                </span>
              </div>
              <p className="plan-card-description">{plan.description}</p>
              <div className="plan-card-stats">
                <div className="stat-item">
                  <span className="stat-label">学习时长</span>
                  <span className="stat-value">{plan.studyDuration}分钟</span>
                </div>
                <div className="stat-divider">|</div>
                <div className="stat-item">
                  <span className="stat-label">活动时长</span>
                  <span className="stat-value">{plan.breakDuration}分钟</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="selected-plan-details">
        <div className="plan-overview">
          <div className="overview-item">
            <span className="overview-icon">⏰</span>
            <div className="overview-text">
              <div className="overview-label">单循环时长</div>
              <div className="overview-value">{selectedPlan.totalDuration}</div>
            </div>
          </div>
          <div className="overview-item">
            <span className="overview-icon">🔄</span>
            <div className="overview-text">
              <div className="overview-label">循环次数</div>
              <div className="overview-value">{selectedPlan.cycleCount}次</div>
            </div>
          </div>
          <div className="overview-item">
            <span className="overview-icon">⚡</span>
            <div className="overview-text">
              <div className="overview-label">专注效率</div>
              <div className="overview-value">
                {Math.round((selectedPlan.studyDuration / (selectedPlan.studyDuration + selectedPlan.breakDuration)) * 100)}%
              </div>
            </div>
          </div>
        </div>

        <div className="schedule-section">
          <div className="schedule-header">
            <h3>📅 时间安排</h3>
            <button
              className="toggle-button"
              onClick={() => setShowFullSchedule(!showFullSchedule)}
            >
              {showFullSchedule ? '收起 ▲' : '展开更多 ▼'}
            </button>
          </div>
          
          <div className="schedule-list">
            {selectedPlan.schedule.slice(0, showFullSchedule ? selectedPlan.schedule.length : 4).map((item, index) => (
              <div key={index} className={`schedule-item ${item.activity}`}>
                <div className="schedule-time">{item.time}</div>
                <div className="schedule-activity">
                  <span className={`activity-badge ${item.activity}`}>
                    {item.activity === '学习' ? '📚' : item.activity === '拉伸' ? '🧘' : '☕'}
                  </span>
                  <span className="activity-name">{item.activity}</span>
                </div>
                <div className="schedule-details">
                  {item.subject && <span className="subject">{item.subject}</span>}
                  {item.exercises && (
                    <div className="exercises">
                      {item.exercises.map((exercise, i) => (
                        <span key={i} className="exercise-tag">{exercise}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="plan-actions">
          <button className="action-button primary" onClick={handleDownload}>
            📥 下载规划表图片
          </button>
          <button className="action-button secondary">
            🖨️ 打印贴在书桌
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;

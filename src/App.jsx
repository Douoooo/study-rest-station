import React, { useState } from 'react';
import StretchLibrary from './components/StretchLibrary';
import StudyPlan from './components/StudyPlan';
import PostureGuide from './components/PostureGuide';
import EnergyTips from './components/EnergyTips';
import UserGuide from './components/UserGuide';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', name: '首页', icon: '🏠' },
    { id: 'library', name: '拉伸库', icon: '🧘' },
    { id: 'plan', name: '规划表', icon: '📊' },
    { id: 'posture', name: '坐姿指南', icon: '🪑' },
    { id: 'tips', name: '提神技巧', icon: '⚡' },
  ];

  const handleStart = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">📚</span>
            <div className="logo-text">
              <h1>考研/考公党</h1>
              <p>「无痛」久坐搭子</p>
            </div>
          </div>
          
          <div className="problem-statement">
            <div className="problem-item">
              <span className="problem-icon">😣</span>
              <span className="problem-text">久坐腰酸背痛</span>
            </div>
            <div className="problem-item">
              <span className="problem-icon">😵</span>
              <span className="problem-text">颈椎眼睛酸痛</span>
            </div>
            <div className="problem-item">
              <span className="problem-icon">😴</span>
              <span className="problem-text">学习注意力不集中</span>
            </div>
          </div>

          <p className="header-subtitle">
            专为20-26岁考研/考公党设计 · 自习室友好 · 无声 · 小幅度
          </p>
        </div>
      </header>

      <nav className="app-nav">
        <div className="nav-container">
          {sections.map(section => (
            <button
              key={section.id}
              className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => handleStart(section.id)}
            >
              <span className="nav-icon">{section.icon}</span>
              <span className="nav-text">{section.name}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="app-main">
        {activeSection === 'home' && (
          <div className="home-content">
            <UserGuide onStart={handleStart} />
            
            <div className="modules-preview">
              <h2 className="preview-title">📦 功能模块</h2>
              <div className="preview-grid">
                <div className="preview-card" onClick={() => handleStart('posture')}>
                  <div className="preview-icon">🪑</div>
                  <h3 className="preview-name">坐姿优化指南</h3>
                  <p className="preview-desc">利用书本/靠垫调整坐姿，无需额外工具</p>
                  <div className="preview-features">
                    <span className="preview-tag">5大模块</span>
                    <span className="preview-tag">快速自检</span>
                    <span className="preview-tag">疼痛缓解</span>
                  </div>
                  <button className="preview-button">查看 →</button>
                </div>

                <div className="preview-card" onClick={() => handleStart('plan')}>
                  <div className="preview-icon">📊</div>
                  <h3 className="preview-name">久坐规划表</h3>
                  <p className="preview-desc">学习+活动时间模板，适配考研/考公节奏</p>
                  <div className="preview-features">
                    <span className="preview-tag">4种模式</span>
                    <span className="preview-tag">可视化</span>
                    <span className="preview-tag">可下载</span>
                  </div>
                  <button className="preview-button">查看 →</button>
                </div>

                <div className="preview-card" onClick={() => handleStart('library')}>
                  <div className="preview-icon">🧘</div>
                  <h3 className="preview-name">无声拉伸库</h3>
                  <p className="preview-desc">12个拉伸动作，适合自习室场景使用</p>
                  <div className="preview-features">
                    <span className="preview-tag">12个动作</span>
                    <span className="preview-tag">4个部位</span>
                    <span className="preview-tag">≤30秒</span>
                  </div>
                  <button className="preview-button">查看 →</button>
                </div>

                <div className="preview-card" onClick={() => handleStart('tips')}>
                  <div className="preview-icon">⚡</div>
                  <h3 className="preview-name">提神技巧</h3>
                  <p className="preview-desc">无咖啡因提神方法，保持专注不疲劳</p>
                  <div className="preview-features">
                    <span className="preview-tag">12种技巧</span>
                    <span className="preview-tag">护眼动作</span>
                    <span className="preview-tag">计时功能</span>
                  </div>
                  <button className="preview-button">查看 →</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'library' && <StretchLibrary />}
        {activeSection === 'plan' && <StudyPlan />}
        {activeSection === 'posture' && <PostureGuide />}
        {activeSection === 'tips' && <EnergyTips />}
      </main>

      <footer className="app-footer">
        <p>💪 学习是终身的事业，健康是最大的财富</p>
        <p className="footer-tip">建议每45分钟休息5分钟，进行一次拉伸</p>
      </footer>
    </div>
  );
}

export default App;

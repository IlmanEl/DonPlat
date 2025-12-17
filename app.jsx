import React, { useState } from 'react';
import { Bookmark, Users, Clock, ArrowUp, Award, Plus, Menu, CheckCircle, Sparkles, Video, File } from 'lucide-react';

export default function ReferendumSVGBased() {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('active');

  const SVGCard = ({ children, gradient, hasNotch = true, arrowColor = "#374151" }) => {
    return (
      <div className="svg-card-wrapper">
        {hasNotch ? (
          <svg width="344" height="315" viewBox="0 0 344 315" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-svg">
            <path d="M311 0C329.225 0 344 14.7746 344 33V177C344 202.405 323.405 223 298 223C272.595 223 252 243.595 252 269C252 294.405 231.405 315 206 315H33C14.7746 315 2.0537e-07 300.225 0 282V33C0 14.7746 14.7746 1.93278e-07 33 0H311Z" fill={`url(#${gradient})`}/>
            <defs>
              <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA"/>
                <stop offset="50%" stopColor="#8B5CF6"/>
                <stop offset="100%" stopColor="#7C3AED"/>
              </linearGradient>
              <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FB923C"/>
                <stop offset="50%" stopColor="#F97316"/>
                <stop offset="100%" stopColor="#EA580C"/>
              </linearGradient>
              <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399"/>
                <stop offset="50%" stopColor="#10B981"/>
                <stop offset="100%" stopColor="#059669"/>
              </linearGradient>
              <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA"/>
                <stop offset="50%" stopColor="#3B82F6"/>
                <stop offset="100%" stopColor="#2563EB"/>
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg width="344" height="275" viewBox="0 0 344 275" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-svg">
            <rect width="344" height="275" rx="33" fill={`url(#${gradient})`}/>
            <defs>
              <linearGradient id="gradient-purple-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA"/>
                <stop offset="50%" stopColor="#8B5CF6"/>
                <stop offset="100%" stopColor="#7C3AED"/>
              </linearGradient>
              <linearGradient id="gradient-orange-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FB923C"/>
                <stop offset="50%" stopColor="#F97316"/>
                <stop offset="100%" stopColor="#EA580C"/>
              </linearGradient>
              <linearGradient id="gradient-green-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399"/>
                <stop offset="50%" stopColor="#10B981"/>
                <stop offset="100%" stopColor="#059669"/>
              </linearGradient>
              <linearGradient id="gradient-blue-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA"/>
                <stop offset="50%" stopColor="#3B82F6"/>
                <stop offset="100%" stopColor="#2563EB"/>
              </linearGradient>
            </defs>
          </svg>
        )}
        
        <div className="card-content">
          {children}
        </div>
        
        {hasNotch && (
          <button className="notch-button" style={{color: arrowColor}}>
            <ArrowUp size={28} strokeWidth={3} />
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="app-container">
      <div className="bg-gradient-1"></div>
      <div className="bg-gradient-2"></div>
      <div className="bg-gradient-3"></div>
      <div className="noise-texture"></div>
      
      <header className="header">
        <div className="profile-section">
          <div className="avatar">
            <img src="data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23374151'/%3E%3Ctext x='24' y='30' font-family='Inter' font-weight='700' font-size='18' fill='white' text-anchor='middle'%3ETB%3C/text%3E%3C/svg%3E" alt="avatar" />
          </div>
          <div className="profile-info">
            <h1 className="username">@techblogger</h1>
            <p className="bio">Tech & Gadgets Reviews</p>
          </div>
        </div>
        <button className="icon-btn">
          <Menu size={20} strokeWidth={2.5} />
        </button>
      </header>

      <div className="stats-bar">
        <div className="stat">
          <div className="stat-value">32</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat">
          <div className="stat-value">2.4K</div>
          <div className="stat-label">Supporters</div>
        </div>
        <div className="stat">
          <div className="stat-value">$8.2K</div>
          <div className="stat-label">Funded</div>
        </div>
      </div>

      <div className="filters">
        <button 
          className={`filter-btn ${activeFilter === 'active' ? 'active' : ''}`}
          onClick={() => setActiveFilter('active')}
        >
          Active
          <span className="count">5</span>
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveFilter('completed')}
        >
          Completed
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
      </div>

      <div className="topics-grid">
        {/* Card 1 - Purple */}
        <SVGCard gradient="gradient-purple" hasNotch={true} arrowColor="#8B5CF6">
          <div className="format-badge">
            <Video size={12} strokeWidth={2.5} />
            <span>VIDEO</span>
          </div>

          <div className="card-header-simple">
            <button className="bookmark-icon">
              <Bookmark size={14} strokeWidth={2} />
            </button>
          </div>

          <h2 className="card-title">iPhone 16 Pro Deep Dive</h2>

          <div className="progress-section">
            <div className="progress-header">
              <span className="progress-percent">75%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{width: '75%'}}></div>
            </div>
            <div className="progress-info">
              <span className="funded">$75</span>
              <span className="divider">/</span>
              <span className="goal">$100</span>
            </div>
          </div>

          <div className="card-meta">
            <div className="meta-item">
              <Users size={16} />
              <span>22</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>5 days left</span>
            </div>
          </div>
        </SVGCard>

        {/* Card 2 - Orange (Author Pick) */}
        <SVGCard gradient="gradient-orange" hasNotch={true} arrowColor="#F97316">
          <div className="card-badges">
            <div className="author-badge">
              <Award size={12} />
              <span>Creator Pick</span>
            </div>
            <div className="format-icon-badge">
              <File size={12} strokeWidth={2.5} />
            </div>
          </div>

          <div className="card-header-simple">
            <button className="bookmark-icon">
              <Bookmark size={14} strokeWidth={2} />
            </button>
          </div>

          <h2 className="card-title">MacBook M4 Review</h2>
          
          <div className="progress-section">
            <div className="progress-header">
              <span className="progress-percent">15%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{width: '15%'}}></div>
            </div>
            <div className="progress-info">
              <span className="funded">$15</span>
              <span className="divider">/</span>
              <span className="goal">$100</span>
            </div>
          </div>

          <div className="card-meta">
            <div className="meta-item">
              <Users size={16} />
              <span>4</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>25 days left</span>
            </div>
          </div>
        </SVGCard>

        {/* Card 3 - Green (Completed, NO notch) */}
        <SVGCard gradient="gradient-green" hasNotch={false}>
          <div className="card-badges">
            <div className="complete-badge">
              <CheckCircle size={12} strokeWidth={2.5} />
              <span>Completed</span>
            </div>
            <div className="format-icon-badge">
              <Video size={12} strokeWidth={2.5} />
            </div>
          </div>

          <div className="card-header-simple">
            <button className="bookmark-icon">
              <Bookmark size={14} strokeWidth={2} />
            </button>
          </div>

          <h2 className="card-title">Investment Guide 2025</h2>

          <div className="progress-section compact">
            <div className="progress-track complete">
              <div className="progress-fill" style={{width: '100%'}}></div>
            </div>
            <div className="progress-info success">
              <CheckCircle size={18} strokeWidth={2.5} style={{color: 'white'}} />
              <span className="funded">$120 Funded</span>
            </div>
          </div>

          <div className="card-meta compact">
            <div className="meta-item">
              <Users size={16} />
              <span>31</span>
            </div>
            <div className="status-badge">In Progress</div>
          </div>
        </SVGCard>

        {/* Card 4 - Blue */}
        <SVGCard gradient="gradient-blue" hasNotch={true} arrowColor="#3B82F6">
          <div className="format-badge">
            <File size={12} strokeWidth={2.5} />
            <span>ARTICLE</span>
          </div>

          <div className="card-header-simple">
            <button className="bookmark-icon">
              <Bookmark size={14} strokeWidth={2} />
            </button>
          </div>

          <h2 className="card-title">AI Tools Comparison 2025</h2>

          <div className="progress-section">
            <div className="progress-header">
              <span className="progress-percent">60%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{width: '60%'}}></div>
            </div>
            <div className="progress-info">
              <span className="funded">$60</span>
              <span className="divider">/</span>
              <span className="goal">$100</span>
            </div>
          </div>

          <div className="card-meta">
            <div className="meta-item">
              <Users size={16} />
              <span>18</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>12 days left</span>
            </div>
          </div>
        </SVGCard>

        {/* Card 5 - Purple */}
        <SVGCard gradient="gradient-purple" hasNotch={true} arrowColor="#8B5CF6">
          <div className="format-badge">
            <Video size={12} strokeWidth={2.5} />
            <span>VIDEO</span>
          </div>

          <div className="card-header-simple">
            <button className="bookmark-icon">
              <Bookmark size={14} strokeWidth={2} />
            </button>
          </div>

          <h2 className="card-title">Best Budget Laptops</h2>

          <div className="progress-section">
            <div className="progress-header">
              <span className="progress-percent">30%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{width: '30%'}}></div>
            </div>
            <div className="progress-info">
              <span className="funded">$30</span>
              <span className="divider">/</span>
              <span className="goal">$100</span>
            </div>
          </div>

          <div className="card-meta">
            <div className="meta-item">
              <Users size={16} />
              <span>9</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>18 days left</span>
            </div>
          </div>
        </SVGCard>

        <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
          <span>{showAll ? 'Show Less' : 'View 8 More Topics'}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease'}}>
            <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="leaderboard-section">
        <div className="section-header">
          <div className="section-title">
            <Award size={20} />
            <h3>Top Supporters</h3>
          </div>
          <button className="view-all-link">View All</button>
        </div>
        
        <div className="leaders-list">
          <div className="leader-row">
            <div className="leader-rank gold">1</div>
            <span className="leader-name">@whale</span>
            <span className="leader-amount">$150</span>
          </div>
          <div className="leader-row">
            <div className="leader-rank silver">2</div>
            <span className="leader-name">@supporter</span>
            <span className="leader-amount">$85</span>
          </div>
          <div className="leader-row">
            <div className="leader-rank bronze">3</div>
            <span className="leader-name">@fan</span>
            <span className="leader-amount">$60</span>
          </div>
        </div>
      </div>

      <button className="fab">
        <div className="fab-icon">
          <Plus size={24} strokeWidth={2.5} />
        </div>
        <span className="fab-label">Suggest Topic</span>
      </button>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
        }

        .app-container {
          width: 375px;
          min-height: 812px;
          background: #F5F6F8;
          font-family: 'Inter', -apple-system, sans-serif;
          padding: 16px;
          padding-bottom: 100px;
          position: relative;
          overflow: hidden;
        }

        .bg-gradient-1 {
          position: fixed;
          top: -150px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        .bg-gradient-2 {
          position: fixed;
          bottom: -100px;
          left: -150px;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .bg-gradient-3 {
          position: fixed;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .noise-texture {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.02;
          pointer-events: none;
          z-index: 1;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
        }

        .profile-section {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(55, 65, 81, 0.25);
        }

        .avatar img {
          width: 100%;
          height: 100%;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .username {
          font-size: 17px;
          font-weight: 700;
          color: #0F1419;
          letter-spacing: -0.4px;
        }

        .bio {
          font-size: 13px;
          font-weight: 500;
          color: #536471;
        }

        .icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: none;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #0F1419;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.2s ease;
        }

        .stats-bar {
          display: flex;
          gap: 16px;
          padding: 16px 20px;
          background: white;
          border-radius: 16px;
          margin-bottom: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 2;
        }

        .stat {
          flex: 1;
          text-align: center;
        }

        .stat-value {
          font-size: 20px;
          font-weight: 800;
          color: #0F1419;
          letter-spacing: -0.5px;
        }

        .stat-label {
          font-size: 11px;
          font-weight: 600;
          color: #536471;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .filters {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
        }

        .filter-btn {
          padding: 10px 16px;
          border-radius: 12px;
          border: none;
          background: white;
          font-size: 14px;
          font-weight: 600;
          color: #536471;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.2s ease;
        }

        .filter-btn.active {
          background: #374151;
          color: white;
          box-shadow: 0 4px 16px rgba(55, 65, 81, 0.25);
        }

        .count {
          background: rgba(255, 255, 255, 0.25);
          padding: 2px 8px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
        }

        .filter-btn:not(.active) .count {
          background: #E8ECEF;
          color: #536471;
        }

        .topics-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
        }

        /* SVG CARD SYSTEM */
        .svg-card-wrapper {
          width: 344px;
          height: 315px;
          transition: all 0.4s ease;
          filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.12));
        }

        .svg-card-wrapper:not(:has(.notch-button)) {
          height: 275px;
        }

        .svg-card-wrapper:hover {
          transform: translateY(-6px);
          filter: drop-shadow(0 16px 48px rgba(0, 0, 0, 0.18));
        }

        .card-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .card-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 20px 24px 24px 24px;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .card-header-simple {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 16px;
        }

        .topic-category {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .bookmark-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: none;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: all 0.2s ease;
        }

        .bookmark-icon:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        }

        .card-title {
          font-size: 28px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.8px;
          margin-bottom: 20px;
          color: white;
          min-height: 68px;
          display: flex;
          align-items: center;
        }

        .svg-card-wrapper:has(.notch-button) .card-title {
          margin-bottom: 12px;
        }

        .progress-section {
          margin-bottom: 16px;
        }

        .progress-section.compact {
          margin-bottom: 16px;
        }

        .card-meta.compact {
          margin-top: 8px;
        }

        .progress-header {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 6px;
        }

        .progress-percent {
          font-size: 15px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.5px;
        }

        .progress-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          overflow: visible;
          margin-bottom: 10px;
        }

        .progress-fill {
          height: 100%;
          background: white;
          border-radius: 10px;
          transition: width 1.2s ease;
          filter: blur(0.5px);
          box-shadow:
            0 0 20px 4px rgba(255, 255, 255, 0.6),
            0 0 40px 8px rgba(255, 255, 255, 0.3),
            0 0 60px 12px rgba(255, 255, 255, 0.1),
            0 0 80px 16px rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .progress-info {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .progress-info.success {
          align-items: center;
          gap: 8px;
        }

        .funded {
          font-size: 24px;
          font-weight: 800;
          color: white;
          letter-spacing: -0.7px;
        }

        .divider {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
        }

        .goal {
          font-size: 18px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
        }

        .card-meta {
          display: flex;
          gap: 10px;
          margin-top: auto;
          padding-bottom: 4px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          font-size: 14px;
          font-weight: 600;
          color: white;
        }

        /* NOTCH BUTTON - EXACTLY IN CENTER OF CIRCULAR CUTOUT */
        .notch-button {
          position: absolute;
          bottom: 8px;
          right: 7px;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: none;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          z-index: 3;
        }

        .notch-button:hover {
          transform: scale(1.15);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
        }

        .notch-button:active {
          transform: scale(0.95);
        }

        /* BADGES */
        .card-badges {
          position: absolute;
          top: 22px;
          left: 24px;
          display: flex;
          gap: 8px;
          align-items: center;
          z-index: 2;
        }

        .format-badge,
        .format-icon-badge,
        .author-badge,
        .complete-badge {
          padding: 6px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          color: white;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .format-badge {
          position: absolute;
          top: 22px;
          left: 24px;
          z-index: 2;
        }

        .format-icon-badge {
          padding: 7px 8px;
        }

        .format-badge svg,
        .format-icon-badge svg {
          opacity: 0.85;
        }

        .author-badge,
        .complete-badge {
          padding: 6px 12px;
          font-size: 11px;
          gap: 5px;
        }

        .status-badge {
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          color: white;
          font-size: 13px;
          font-weight: 700;
        }

        .view-more-btn {
          width: 100%;
          padding: 16px;
          border-radius: 16px;
          border: none;
          background: white;
          font-size: 14px;
          font-weight: 600;
          color: #536471;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.2s ease;
        }

        .view-more-btn:hover {
          color: #374151;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }

        .leaderboard-section {
          background: white;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .section-title svg {
          color: #F59E0B;
        }

        .section-title h3 {
          font-size: 17px;
          font-weight: 700;
          color: #0F1419;
          letter-spacing: -0.3px;
        }

        .view-all-link {
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          cursor: pointer;
        }

        .leaders-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .leader-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          background: #F8F9FA;
          transition: all 0.2s ease;
        }

        .leader-row:hover {
          background: #E8ECEF;
          transform: translateX(4px);
        }

        .leader-rank {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          color: white;
        }

        .leader-rank.gold {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
        }

        .leader-rank.silver {
          background: linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 100%);
          box-shadow: 0 4px 12px rgba(156, 163, 175, 0.4);
        }

        .leader-rank.bronze {
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
        }

        .leader-name {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          color: #0F1419;
        }

        .leader-amount {
          font-size: 16px;
          font-weight: 800;
          color: #374151;
          letter-spacing: -0.3px;
        }

        .fab {
          position: fixed;
          bottom: 32px;
          left: 16px;
          right: 16px;
          height: 64px;
          border-radius: 20px;
          border: none;
          background: #0F1419;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          box-shadow: 0 12px 40px rgba(15, 20, 25, 0.3);
          transition: all 0.3s ease;
          z-index: 10;
        }

        .fab:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(15, 20, 25, 0.4);
        }

        .fab-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0F1419;
        }

        .fab-label {
          font-size: 16px;
          font-weight: 700;
          color: white;
          letter-spacing: -0.3px;
        }
      `}</style>
    </div>
  );
}


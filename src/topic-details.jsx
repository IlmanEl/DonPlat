import React, { useState, useEffect } from 'react';
import { ArrowLeft, MoreVertical, Clock, Trophy } from 'lucide-react';

const TelegramStar = ({ size = 20, withParticles = false, color = 'gold', className = '' }) => {
  const uniqueId = `starGradient-${size}-${Math.random().toString(36).substr(2, 9)}`;
  const starPath = "M438.875 31.7736C459.784 -10.5911 520.194 -10.5913 541.103 31.7736L648.359 249.101C656.662 265.924 672.712 277.584 691.277 280.281L931.111 315.132C977.864 321.926 996.532 379.38 962.701 412.357L789.155 581.522C775.721 594.617 769.591 613.484 772.763 631.974L813.731 870.839C821.718 917.403 772.844 952.911 731.027 930.927L516.513 818.151C499.907 809.421 480.069 809.421 463.464 818.151L248.95 930.927C207.133 952.911 158.26 917.403 166.246 870.839L198.937 680.235L201 676.5C209.599 667.475 219.641 659.945 230.713 654.218L344.488 595.368L515.206 511.395C523.632 507.25 528.226 497.965 526.409 488.752C524.229 477.695 513.623 470.397 502.517 472.312L290.488 508.868L199.106 525.241C180.273 528.616 160.919 527.679 142.5 522.5L101.306 494.266L17.2754 412.357C-16.555 379.38 2.11369 321.926 48.8663 315.132L288.7 280.281C307.265 277.584 323.314 265.924 331.617 249.101L438.875 31.7736Z";

  return (
    <div className={`telegram-star-container ${className}`} style={{ width: size, height: size, position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 980 938"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: '100%', position: 'relative', zIndex: 2 }}
        preserveAspectRatio="xMidYMid meet"
        shapeRendering="geometricPrecision"
      >
        <defs>
          <linearGradient id={uniqueId} x1="490" y1="0" x2="490" y2="938" gradientUnits="userSpaceOnUse">
            {color === 'black' ? (
              <>
                <stop offset="0%" stopColor="#3A3A3A" />
                <stop offset="25%" stopColor="#2D2D2D" />
                <stop offset="50%" stopColor="#1F1F1F" />
                <stop offset="75%" stopColor="#0F0F0F" />
                <stop offset="100%" stopColor="#050505" />
              </>
            ) : color === 'white' ? (
              <>
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FAFAFA" />
                <stop offset="100%" stopColor="#F5F5F5" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#FFC837" />
                <stop offset="25%" stopColor="#FFB332" />
                <stop offset="50%" stopColor="#FFA726" />
                <stop offset="75%" stopColor="#FF9800" />
                <stop offset="100%" stopColor="#F57C00" />
              </>
            )}
          </linearGradient>
          <filter id={`glow-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d={starPath}
          fill={`url(#${uniqueId})`}
          filter={(color === 'white' || color === 'black') ? 'none' : `url(#glow-${uniqueId})`}
        />
      </svg>
    </div>
  );
};

export default function TopicDetails() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const [sponsors] = useState([
    {
      id: 1,
      username: '@top_fan',
      amount: 25,
      message: 'Сравни камеру с Samsung!',
      medal: '🥇',
      rank: 1
    },
    {
      id: 2,
      username: '@supporter',
      amount: 20,
      message: 'Интересует автономность батареи в реальном использовании',
      medal: '🥈',
      rank: 2
    },
    {
      id: 3,
      username: '@regular',
      amount: 15,
      message: 'Жду с нетерпением!',
      medal: '🥉',
      rank: 3
    },
    {
      id: 4,
      username: '@user4',
      amount: 10,
      message: null
    },
    {
      id: 5,
      username: '@user5',
      amount: 5,
      message: null
    },
    {
      id: 6,
      username: '@user6',
      amount: 5,
      message: null
    }
  ]);

  const progress = 85;
  const raised = 85;
  const goal = 100;

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <div className="theme-toggle-track">
          <div className="theme-toggle-thumb" />
          <div className="theme-toggle-icon">
            {isDark ? '☀️' : '🌙'}
          </div>
        </div>
      </button>

      {/* Header */}
      <header className="detail-header">
        <button className="back-btn">
          <ArrowLeft size={20} strokeWidth={2.5} />
          <span>Назад</span>
        </button>
        <button className="menu-btn">
          <MoreVertical size={20} strokeWidth={2.5} />
        </button>
      </header>

      {/* Topic Info */}
      <section className="topic-section">
        <h1 className="topic-main-title">Разбор iPhone 16 Pro</h1>

        <div className="format-tag">
          <span className="format-icon">📝</span>
          <span>Формат: Видео</span>
        </div>

        <div className="description-quote">
          <div className="quote-content">
            Хочу узнать, стоит ли менять iPhone 14 на 16 Pro. Особенно интересует камера и батарея.
          </div>
          <div className="quote-author">— @original_author</div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="progress-section-main">
        <h2 className="progress-title">ПРОГРЕСС СБОРА</h2>

        <div className="progress-card">
          <div className="progress-track-large">
            <div
              className="progress-fill-large"
              style={{ width: `${progress}%` }}
            >
              <div className="progress-shine" />
            </div>
          </div>

          <div className="progress-stats">
            <div className="progress-amount-display">
              <TelegramStar size={32} />
              <span className="amount-current">${raised}</span>
              <span className="amount-separator">из</span>
              <span className="amount-goal">${goal}</span>
            </div>
            <div className="progress-percent">{progress}%</div>
          </div>

          <div className="timer-large">
            <Clock size={20} strokeWidth={2.5} />
            <span>Осталось 3 дня</span>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors-section">
        <h2 className="sponsors-title">
          <span className="sponsors-icon">👥</span>
          СПОНСОРЫ
          <span className="sponsors-count">(22)</span>
        </h2>

        <div className="sponsors-list">
          {/* Top 3 Sponsors */}
          {sponsors.slice(0, 3).map((sponsor, index) => (
            <div
              key={sponsor.id}
              className={`sponsor-card top-sponsor rank-${sponsor.rank}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: mounted ? 1 : 0
              }}
            >
              <div className="sponsor-header">
                <div className="sponsor-medal">{sponsor.medal}</div>
                <div className="sponsor-info">
                  <div className="sponsor-username">{sponsor.username}</div>
                  <div className="sponsor-amount-small">
                    <TelegramStar size={16} />
                    <span>${sponsor.amount}</span>
                  </div>
                </div>
              </div>
              {sponsor.message && (
                <div className="sponsor-message">
                  <div className="message-quote-icon">"</div>
                  <div className="message-text">{sponsor.message}</div>
                </div>
              )}
            </div>
          ))}

          {/* Other Sponsors */}
          {sponsors.slice(3).map((sponsor, index) => (
            <div
              key={sponsor.id}
              className="sponsor-card regular-sponsor"
              style={{
                animationDelay: `${(index + 3) * 0.05}s`,
                opacity: mounted ? 1 : 0
              }}
            >
              <div className="sponsor-username">{sponsor.username}</div>
              <div className="sponsor-amount-small">
                <TelegramStar size={14} />
                <span>${sponsor.amount}</span>
              </div>
              {!sponsor.message && (
                <span className="no-message">(без сообщения)</span>
              )}
            </div>
          ))}

          {/* More Sponsors */}
          <div
            className="more-sponsors"
            style={{
              animationDelay: '0.6s',
              opacity: mounted ? 1 : 0
            }}
          >
            и ещё 16 человек...
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="actions-section">
        <button className="action-primary">
          <span className="action-icon">📝</span>
          Опубликовать контент
        </button>

        <div className="actions-secondary">
          <button className="action-secondary">Взять в работу</button>
          <button className="action-secondary">Отклонить</button>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* DARK THEME */
        .app.dark {
          --color-bg: #0A0A0A;
          --color-surface: #141414;
          --color-text: #FFFFFF;
          --color-text-dim: #888888;
          --color-accent-start: #FF6B2C;
          --color-accent-mid: #FF8C42;
          --color-accent-end: #FFB366;
          --color-success: #00FF88;
          --color-border: #222222;
          --gradient-main: linear-gradient(135deg, #FF6B2C 0%, #FF8C42 50%, #FFB366 100%);
          --card-shadow: rgba(0, 0, 0, 0.6);
          --text-shadow: 0 2px 12px rgba(0, 0, 0, 0.7);
        }

        /* LIGHT THEME */
        .app.light {
          --color-bg: #F5F5F5;
          --color-surface: #FFFFFF;
          --color-text: #0A0A0A;
          --color-text-dim: #4A4A4A;
          --color-accent-start: #FF6B2C;
          --color-accent-mid: #FF8C42;
          --color-accent-end: #FFB366;
          --color-success: #00B963;
          --color-border: #D0D0D0;
          --gradient-main: linear-gradient(135deg, #FF6B2C 0%, #FF8C42 50%, #FFB366 100%);
          --card-shadow: rgba(0, 0, 0, 0.15);
          --text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        }

        .app {
          min-height: 100vh;
          background: var(--color-bg);
          font-family: 'Manrope', sans-serif;
          padding: 20px;
          padding-bottom: 120px;
          transition: background-color 0.3s ease;
        }

        /* THEME TOGGLE */
        .theme-toggle {
          position: fixed;
          top: 24px;
          right: 24px;
          width: 56px;
          height: 32px;
          border: none;
          background: transparent;
          cursor: pointer;
          z-index: 1000;
          padding: 0;
        }

        .theme-toggle-track {
          position: relative;
          width: 100%;
          height: 100%;
          background: var(--gradient-main);
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(255, 107, 53, 0.3);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .theme-toggle:hover .theme-toggle-track {
          box-shadow: 0 6px 24px rgba(255, 107, 53, 0.5);
          transform: translateY(-2px);
        }

        .theme-toggle-thumb {
          position: absolute;
          top: 4px;
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .app.dark .theme-toggle-thumb {
          left: 4px;
        }

        .app.light .theme-toggle-thumb {
          transform: translateX(24px);
          left: 4px;
        }

        .theme-toggle-icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          transition: all 0.3s;
        }

        .app.dark .theme-toggle-icon {
          right: 8px;
        }

        .app.light .theme-toggle-icon {
          left: 8px;
        }

        /* HEADER */
        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 11px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 700;
          color: var(--color-text);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .back-btn:hover {
          border-color: var(--color-accent-start);
          transform: translateX(-4px);
        }

        .menu-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 11px;
          color: var(--color-text);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .menu-btn:hover {
          border-color: var(--color-accent-start);
          transform: translateY(-2px);
        }

        /* TOPIC INFO */
        .topic-section {
          margin-bottom: 32px;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s backwards;
        }

        .topic-main-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(36px, 10vw, 48px);
          line-height: 1.1;
          color: var(--color-text);
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .format-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.3);
          border-radius: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--color-accent-start);
          margin-bottom: 24px;
        }

        .format-icon {
          font-size: 16px;
        }

        .description-quote {
          background: var(--color-surface);
          border-left: 4px solid var(--color-accent-start);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 16px var(--card-shadow);
        }

        .quote-content {
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: var(--color-text);
          margin-bottom: 16px;
          font-style: italic;
        }

        .quote-author {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 700;
          color: var(--color-text-dim);
        }

        /* PROGRESS SECTION */
        .progress-section-main {
          margin-bottom: 32px;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
        }

        .progress-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 800;
          color: var(--color-text-dim);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .progress-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 32px 24px;
        }

        .progress-track-large {
          height: 16px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 24px;
          position: relative;
        }

        .app.light .progress-track-large {
          background: rgba(0, 0, 0, 0.08);
        }

        .progress-fill-large {
          height: 100%;
          background: var(--gradient-main);
          border-radius: 8px;
          position: relative;
          transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .progress-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shine 2s ease-in-out infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .progress-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .progress-amount-display {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .amount-current {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          line-height: 1;
          color: var(--color-text);
          letter-spacing: 1px;
        }

        .amount-separator {
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          color: var(--color-text-dim);
        }

        .amount-goal {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          line-height: 1;
          color: var(--color-text-dim);
        }

        .progress-percent {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 40px;
          line-height: 1;
          background: var(--gradient-main);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .timer-large {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          background: rgba(255, 107, 53, 0.1);
          border-radius: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 700;
          color: var(--color-accent-start);
        }

        /* SPONSORS SECTION */
        .sponsors-section {
          margin-bottom: 32px;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;
        }

        .sponsors-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 800;
          color: var(--color-text-dim);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sponsors-icon {
          font-size: 16px;
        }

        .sponsors-count {
          color: var(--color-accent-start);
        }

        .sponsors-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sponsor-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 20px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }

        .sponsor-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-accent-start);
          box-shadow: 0 8px 24px var(--card-shadow);
        }

        .top-sponsor {
          padding: 24px;
        }

        .top-sponsor.rank-1 {
          border-color: #FFD700;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), transparent);
        }

        .top-sponsor.rank-2 {
          border-color: #C0C0C0;
          background: linear-gradient(135deg, rgba(192, 192, 192, 0.05), transparent);
        }

        .top-sponsor.rank-3 {
          border-color: #CD7F32;
          background: linear-gradient(135deg, rgba(205, 127, 50, 0.05), transparent);
        }

        .sponsor-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .sponsor-medal {
          font-size: 32px;
          flex-shrink: 0;
        }

        .sponsor-info {
          flex: 1;
        }

        .sponsor-username {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 6px;
        }

        .sponsor-amount-small {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          color: var(--color-text-dim);
        }

        .sponsor-message {
          position: relative;
          padding: 16px 20px;
          background: rgba(255, 107, 53, 0.08);
          border-left: 3px solid var(--color-accent-start);
          border-radius: 8px;
        }

        .message-quote-icon {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 32px;
          color: var(--color-accent-start);
          opacity: 0.3;
        }

        .message-text {
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: var(--color-text);
          font-style: italic;
          padding-left: 32px;
        }

        .regular-sponsor {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
        }

        .regular-sponsor .sponsor-username {
          margin-bottom: 0;
          font-size: 14px;
        }

        .regular-sponsor .sponsor-amount-small {
          font-size: 16px;
        }

        .no-message {
          font-family: 'Manrope', sans-serif;
          font-size: 12px;
          color: var(--color-text-dim);
          font-style: italic;
        }

        .more-sponsors {
          padding: 16px 20px;
          text-align: center;
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          color: var(--color-text-dim);
          font-style: italic;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }

        /* ACTIONS */
        .actions-section {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
        }

        .action-primary {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 20px;
          background: var(--gradient-main);
          border: none;
          border-radius: 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 800;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          margin-bottom: 12px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
        }

        .action-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(255, 107, 53, 0.5);
        }

        .action-icon {
          font-size: 18px;
        }

        .actions-secondary {
          display: flex;
          gap: 12px;
        }

        .action-secondary {
          flex: 1;
          padding: 16px;
          background: transparent;
          border: 2px solid var(--color-border);
          border-radius: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 800;
          color: var(--color-text);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .action-secondary:hover {
          border-color: var(--color-accent-start);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

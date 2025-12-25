import { useState, useEffect } from 'react';
import { Settings, Copy, Share2, ChevronRight, Clock, CheckCircle, XCircle, Ban, Users, DollarSign, TrendingUp, Sparkles, ArrowUpRight } from 'lucide-react';

const TelegramStar = ({ size = 20, withParticles = false, color = 'gold', className = '' }) => {
  const uniqueId = `starGradient-${size}-${Math.random().toString(36).substr(2, 9)}`;
  const starPath = "M438.875 31.7736C459.784 -10.5911 520.194 -10.5913 541.103 31.7736L648.359 249.101C656.662 265.924 672.712 277.584 691.277 280.281L931.111 315.132C977.864 321.926 996.532 379.38 962.701 412.357L789.155 581.522C775.721 594.617 769.591 613.484 772.763 631.974L813.731 870.839C821.718 917.403 772.844 952.911 731.027 930.927L516.513 818.151C499.907 809.421 480.069 809.421 463.464 818.151L248.95 930.927C207.133 952.911 158.26 917.403 166.246 870.839L198.937 680.235L201 676.5C209.599 667.475 219.641 659.945 230.713 654.218L344.488 595.368L515.206 511.395C523.632 507.25 528.226 497.965 526.409 488.752C524.229 477.695 513.623 470.397 502.517 472.312L290.488 508.868L199.106 525.241C180.273 528.616 160.919 527.679 142.5 522.5L101.306 494.266L17.2754 412.357C-16.555 379.38 2.11369 321.926 48.8663 315.132L288.7 280.281C307.265 277.584 323.314 265.924 331.617 249.101L438.875 31.7736Z";

  return (
    <div className={`telegram-star-container ${className}`} style={{ width: size, height: size, position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width={size} height={size} viewBox="0 0 980 938" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: '100%', position: 'relative', zIndex: 2 }} preserveAspectRatio="xMidYMid meet" shapeRendering="geometricPrecision">
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
        <path d={starPath} fill={`url(#${uniqueId})`} filter={(color === 'white' || color === 'black') ? 'none' : `url(#glow-${uniqueId})`} />
      </svg>
      {withParticles && (
        <>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`star-particle mini-tg-star mini-tg-star-${i + 1}`}>
              <svg width="5" height="5" viewBox="0 0 980 938" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={starPath} fill="currentColor"/>
              </svg>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default function BloggerDashboard() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

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

  const handleCopyLink = () => {
    navigator.clipboard.writeText('t.me/referendum_bot/app?start=techblogger');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const [moderationTopics] = useState([
    {
      id: 1,
      title: 'Обзор Android 15',
      description: 'Хочу узнать, что нового и стоит ли обновляться. Особенно интересуют новые функции безопасности и производительность.',
      from: '@user123',
      amount: 25,
      message: 'Сравни с iOS, пожалуйста. Хочу понять, стоит ли переходить с iPhone.',
      timeLeft: '68ч',
      urgent: true
    },
    {
      id: 2,
      title: 'Лучшие наушники 2025',
      description: 'Подскажите наушники с активным шумоподавлением до $300. Нужны для работы и путешествий.',
      from: '@music_lover',
      amount: 30,
      message: 'Сравни Sony WH-1000XM6 с Bose QuietComfort Ultra',
      timeLeft: '42ч',
      urgent: false
    }
  ]);

  const [readyTopics] = useState([
    {
      id: 1,
      title: 'Инвестиции 2025',
      raised: 120,
      goal: 100,
      sponsors: 31,
      completed: true
    }
  ]);

  const [activeCollections] = useState([
    { title: 'Разбор iPhone 16 Pro', current: 85, goal: 100, percent: 85, timeLeft: '3 дня', sponsors: 22, daysLeft: 3 },
    { title: 'Обзор MacBook M4', current: 45, goal: 100, percent: 45, timeLeft: '12 дней', sponsors: 14, daysLeft: 12 },
    { title: 'Тест Samsung Galaxy S25', current: 67, goal: 100, percent: 67, timeLeft: '8 дней', sponsors: 18, daysLeft: 8 },
    { title: 'Crypto Portfolio 2025', current: 38, goal: 100, percent: 38, timeLeft: '15 дней', sponsors: 11, daysLeft: 15 },
    { title: 'Tesla Model Y Обзор', current: 92, goal: 100, percent: 92, timeLeft: '2 дня', sponsors: 27, daysLeft: 2 }
  ]);

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
      <header className="dashboard-header">
        <div className="header-glow"></div>

        <div className="header-top">
          <div className="user-info">
            <div className="avatar-large">
              <div className="avatar-ring"></div>
              <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop&crop=faces" alt="User" />
            </div>
            <div className="user-details">
              <div className="username">@techblogger</div>
              <div className="user-stats">
                <span>32 темы выполнено</span>
              </div>
            </div>
          </div>
          <button className="settings-btn">
            <Settings size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="balance-card">
          <div className="balance-decoration"></div>
          <div className="balance-content">
            <div className="balance-label">💰 Ваш баланс</div>
            <div className="balance-amount-wrapper">
              <div className="balance-amount">$245.00</div>
              <div className="balance-shine"></div>
            </div>
            <button className="withdraw-btn">
              <DollarSign size={18} strokeWidth={2.5} />
              <span>Вывести средства</span>
              <ArrowUpRight size={18} strokeWidth={2.5} className="withdraw-arrow" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat-card" style={{ animationDelay: '0.1s' }}>
            <div className="stat-icon pending">📬</div>
            <div className="stat-content">
              <div className="stat-value">2</div>
              <div className="stat-label">На модерации</div>
            </div>
          </div>
          <div className="stat-card" style={{ animationDelay: '0.2s' }}>
            <div className="stat-icon ready">🎯</div>
            <div className="stat-content">
              <div className="stat-value">1</div>
              <div className="stat-label">Готовы к работе</div>
            </div>
          </div>
          <div className="stat-card" style={{ animationDelay: '0.3s' }}>
            <div className="stat-icon active">⏳</div>
            <div className="stat-content">
              <div className="stat-value">5</div>
              <div className="stat-label">Активные сборы</div>
            </div>
          </div>
        </div>
      </header>

      {/* Moderation Section */}
      <section className="dashboard-section moderation-section">
        <h2 className="section-title">
          <span className="section-icon">📬</span>
          НА МОДЕРАЦИИ
          <span className="section-badge urgent">{moderationTopics.length}</span>
        </h2>

        {moderationTopics.map((topic, index) => (
          <div key={topic.id} className={`moderation-card ${topic.urgent ? 'urgent' : ''}`} style={{ animationDelay: `${0.4 + index * 0.1}s`, opacity: mounted ? 1 : 0 }}>
            {topic.urgent && <div className="urgency-indicator"></div>}

            <div className="card-header">
              <h3 className="topic-title">{topic.title}</h3>
              {topic.urgent && <div className="urgent-badge"><Sparkles size={14} />Срочно</div>}
            </div>

            <p className="topic-description">{topic.description}</p>

            <div className="topic-meta">
              <div className="meta-item">
                <Users size={14} strokeWidth={2.5} />
                <span>От: <strong>{topic.from}</strong></span>
              </div>
              <div className="meta-separator">•</div>
              <div className="meta-item">
                <TelegramStar size={14} />
                <span>Взнос: <strong>${topic.amount}</strong></span>
              </div>
            </div>

            <div className="user-message">
              <div className="quote-mark">"</div>
              <div className="message-content">
                <div className="message-icon">💬</div>
                <div className="message-text">{topic.message}</div>
              </div>
            </div>

            <div className={`timer-display ${topic.urgent ? 'pulsing' : ''}`}>
              <Clock size={16} strokeWidth={2.5} className="timer-icon" />
              <span>Ответить в течение: <strong>{topic.timeLeft}</strong></span>
            </div>

            <div className="action-buttons">
              <button className="action-btn approve">
                <CheckCircle size={18} strokeWidth={2.5} />
                Одобрить
              </button>
              <button className="action-btn reject">
                <XCircle size={18} strokeWidth={2.5} />
                Отклонить
              </button>
              <button className="action-btn ban">
                <Ban size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Ready to Work Section */}
      <section className="dashboard-section ready-section">
        <h2 className="section-title">
          <span className="section-icon">🎯</span>
          ГОТОВЫ К РАБОТЕ
          <span className="section-badge success">{readyTopics.length}</span>
        </h2>

        {readyTopics.map((topic, index) => (
          <div key={topic.id} className="ready-card" style={{ animationDelay: `${0.6 + index * 0.1}s`, opacity: mounted ? 1 : 0 }}>
            <div className="celebration-confetti">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`confetti confetti-${i + 1}`}></div>
              ))}
            </div>

            <div className="success-badge">
              <CheckCircle size={16} strokeWidth={2.5} fill="currentColor" />
              <span>100% собрано</span>
            </div>

            <h3 className="ready-title">{topic.title}</h3>

            <div className="ready-info">
              <TelegramStar size={24} withParticles={true} />
              <span className="ready-amount">${topic.raised}</span>
              <span className="ready-separator">·</span>
              <span className="ready-sponsors">{topic.sponsors} спонсоров</span>
            </div>

            <div className="ready-progress">
              <div className="ready-progress-bar">
                <div className="ready-progress-fill">
                  <div className="progress-shine"></div>
                </div>
              </div>
              <div className="ready-progress-label">Цель превышена на {Math.round(((topic.raised - topic.goal) / topic.goal) * 100)}%</div>
            </div>

            <div className="ready-actions">
              <button className="ready-btn primary">
                <TrendingUp size={18} strokeWidth={2.5} />
                Взять в работу
              </button>
              <button className="ready-btn secondary">
                <Sparkles size={18} strokeWidth={2.5} />
                Опубликовать контент
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Active Collections */}
      <section className="dashboard-section collections-section">
        <h2 className="section-title">
          <span className="section-icon">⏳</span>
          АКТИВНЫЕ СБОРЫ
          <span className="section-badge">{activeCollections.length}</span>
          <button className="view-all">
            Все
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </h2>

        <div className="collections-grid">
          {activeCollections.map((collection, index) => (
            <div key={index} className="collection-card" style={{ animationDelay: `${0.7 + index * 0.05}s`, opacity: mounted ? 1 : 0 }}>
              <div className="collection-header">
                <h4 className="collection-title">{collection.title}</h4>
                <div className={`collection-days ${collection.daysLeft <= 3 ? 'urgent' : ''}`}>
                  <Clock size={12} strokeWidth={2.5} />
                  <span>{collection.timeLeft}</span>
                </div>
              </div>

              <div className="collection-progress-bar">
                <div className="collection-progress-fill" style={{ width: `${collection.percent}%` }}>
                  <div className="progress-shine"></div>
                </div>
              </div>

              <div className="collection-stats">
                <div className="collection-amount">
                  <TelegramStar size={14} />
                  <span className="amount-current">${collection.current}</span>
                  <span className="amount-separator">/</span>
                  <span className="amount-goal">${collection.goal}</span>
                </div>
                <div className="collection-percent">{collection.percent}%</div>
              </div>

              <div className="collection-footer">
                <div className="collection-sponsors">
                  <Users size={12} strokeWidth={2.5} />
                  <span>{collection.sponsors} спонсоров</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Link */}
      <section className="dashboard-section showcase-section">
        <h2 className="section-title">
          <span className="section-icon">🔗</span>
          ВАША ВИТРИНА
        </h2>

        <div className="showcase-card" style={{ animationDelay: '1s', opacity: mounted ? 1 : 0 }}>
          <div className="showcase-label">Поделитесь этой ссылкой со своими подписчиками</div>

          <div className="showcase-link-container">
            <div className="showcase-link">
              t.me/referendum_bot/app?start=techblogger
            </div>
            <div className="link-decoration"></div>
          </div>

          <div className="showcase-actions">
            <button className={`showcase-btn ${copiedLink ? 'success' : ''}`} onClick={handleCopyLink}>
              {copiedLink ? <CheckCircle size={18} strokeWidth={2.5} /> : <Copy size={18} strokeWidth={2.5} />}
              <span>{copiedLink ? 'Скопировано!' : 'Копировать'}</span>
            </button>
            <button className="showcase-btn">
              <Share2 size={18} strokeWidth={2.5} />
              <span>Поделиться</span>
            </button>
          </div>
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

        .app.dark {
          --color-bg: #0A0A0A;
          --color-surface: #141414;
          --color-text: #FFFFFF;
          --color-text-dim: #888888;
          --color-accent-start: #FF6B2C;
          --color-accent-mid: #FF8C42;
          --color-accent-end: #FFB366;
          --color-success: #00FF88;
          --color-error: #FF4444;
          --color-border: #222222;
          --gradient-main: linear-gradient(135deg, #FF6B2C 0%, #FF8C42 50%, #FFB366 100%);
          --card-shadow: rgba(0, 0, 0, 0.6);
          --glow-orange: rgba(255, 107, 44, 0.2);
        }

        .app.light {
          --color-bg: #F5F5F5;
          --color-surface: #FFFFFF;
          --color-text: #0A0A0A;
          --color-text-dim: #4A4A4A;
          --color-accent-start: #FF6B2C;
          --color-accent-mid: #FF8C42;
          --color-accent-end: #FFB366;
          --color-success: #00B963;
          --color-error: #DC2626;
          --color-border: #D0D0D0;
          --gradient-main: linear-gradient(135deg, #FF6B2C 0%, #FF8C42 50%, #FFB366 100%);
          --card-shadow: rgba(0, 0, 0, 0.15);
          --glow-orange: rgba(255, 107, 44, 0.15);
        }

        .app {
          min-height: 100vh;
          background: var(--color-bg);
          font-family: 'Manrope', sans-serif;
          padding: 20px;
          padding-bottom: 120px;
          transition: background-color 0.3s ease;
          position: relative;
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

        /* ANIMATIONS */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100px) rotate(360deg);
            opacity: 0;
          }
        }

        /* HEADER */
        .dashboard-header {
          position: relative;
          margin-bottom: 32px;
          animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .header-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--glow-orange), transparent);
          filter: blur(80px);
          pointer-events: none;
          opacity: 0.5;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar-large {
          position: relative;
          width: 64px;
          height: 64px;
        }

        .avatar-ring {
          position: absolute;
          inset: -6px;
          border-radius: 18px;
          background: var(--gradient-main);
          opacity: 0.3;
          animation: pulse 3s ease-in-out infinite;
        }

        .avatar-large img {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 0 0 4px var(--color-bg), 0 0 0 5px var(--color-accent-start), 0 8px 24px rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .user-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .username {
          font-family: 'JetBrains Mono', monospace;
          font-size: 18px;
          font-weight: 700;
          color: var(--color-text);
        }

        .user-stats {
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          color: var(--color-text-dim);
        }

        .settings-btn {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          color: var(--color-text);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .settings-btn:hover {
          border-color: var(--color-accent-start);
          transform: translateY(-3px) rotate(90deg);
          box-shadow: 0 8px 20px var(--card-shadow);
        }

        .balance-card {
          position: relative;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          padding: 32px 28px;
          margin-bottom: 24px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .balance-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px var(--card-shadow);
        }

        .balance-decoration {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: var(--gradient-main);
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.1;
          pointer-events: none;
        }

        .balance-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .balance-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 700;
          color: var(--color-text-dim);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .balance-amount-wrapper {
          position: relative;
          margin-bottom: 24px;
        }

        .balance-amount {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 72px;
          line-height: 1;
          background: var(--gradient-main);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
          position: relative;
        }

        .balance-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shine 3s ease-in-out infinite;
        }

        .withdraw-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: var(--gradient-main);
          border: none;
          border-radius: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 800;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
        }

        .withdraw-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255, 107, 53, 0.5);
        }

        .withdraw-arrow {
          transition: transform 0.3s;
        }

        .withdraw-btn:hover .withdraw-arrow {
          transform: translate(3px, -3px);
        }

        /* QUICK STATS */
        .quick-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 20px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-accent-start);
          box-shadow: 0 8px 24px var(--card-shadow);
        }

        .stat-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          font-size: 20px;
          flex-shrink: 0;
        }

        .stat-icon.pending {
          background: rgba(255, 107, 53, 0.15);
          border: 1px solid rgba(255, 107, 53, 0.3);
        }

        .stat-icon.ready {
          background: rgba(0, 255, 136, 0.15);
          border: 1px solid rgba(0, 255, 136, 0.3);
        }

        .stat-icon.active {
          background: rgba(100, 120, 255, 0.15);
          border: 1px solid rgba(100, 120, 255, 0.3);
        }

        .stat-content {
          flex: 1;
          min-width: 0;
        }

        .stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          line-height: 1;
          color: var(--color-text);
          margin-bottom: 2px;
        }

        .stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 700;
          color: var(--color-text-dim);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* SECTIONS */
        .dashboard-section {
          margin-bottom: 32px;
        }

        .section-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 800;
          color: var(--color-text-dim);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-icon {
          font-size: 18px;
        }

        .section-badge {
          padding: 4px 10px;
          background: rgba(255, 107, 53, 0.15);
          border: 1px solid rgba(255, 107, 53, 0.3);
          border-radius: 8px;
          font-size: 11px;
          font-weight: 800;
          color: var(--color-accent-start);
        }

        .section-badge.urgent {
          background: rgba(255, 68, 68, 0.15);
          border-color: rgba(255, 68, 68, 0.3);
          color: var(--color-error);
          animation: pulse 2s ease-in-out infinite;
        }

        .section-badge.success {
          background: rgba(0, 255, 136, 0.15);
          border-color: rgba(0, 255, 136, 0.3);
          color: var(--color-success);
        }

        .view-all {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-accent-start);
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-all:hover {
          transform: translateX(4px);
          gap: 8px;
        }

        /* MODERATION CARD */
        .moderation-card {
          position: relative;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          padding: 28px;
          margin-bottom: 20px;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .moderation-card.urgent {
          border-color: rgba(255, 107, 53, 0.5);
        }

        .moderation-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-accent-start);
          box-shadow: 0 16px 48px var(--card-shadow);
        }

        .urgency-indicator {
          position: absolute;
          top: 0;
          right: 0;
          width: 60px;
          height: 60px;
          background: var(--gradient-main);
          border-radius: 0 24px 0 100%;
          opacity: 0.1;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          gap: 12px;
        }

        .topic-title {
          font-family: 'Manrope', sans-serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--color-text);
          line-height: 1.3;
          flex: 1;
        }

        .urgent-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--gradient-main);
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 800;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }

        .topic-description {
          font-family: 'Manrope', sans-serif;
          font-size: 15px;
          color: var(--color-text-dim);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .topic-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          color: var(--color-text-dim);
        }

        .meta-item strong {
          color: var(--color-text);
          font-weight: 600;
        }

        .meta-separator {
          color: var(--color-border);
          font-size: 10px;
        }

        .user-message {
          position: relative;
          padding: 20px 24px;
          background: rgba(255, 107, 53, 0.08);
          border-left: 4px solid var(--color-accent-start);
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .quote-mark {
          position: absolute;
          top: -10px;
          left: 16px;
          font-size: 48px;
          color: var(--color-accent-start);
          opacity: 0.2;
          font-family: Georgia, serif;
        }

        .message-content {
          display: flex;
          gap: 12px;
          position: relative;
          z-index: 1;
        }

        .message-icon {
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .message-text {
          font-family: 'Manrope', sans-serif;
          font-size: 15px;
          font-style: italic;
          color: var(--color-text);
          line-height: 1.6;
        }

        .timer-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 20px;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.2);
          border-radius: 12px;
          margin-bottom: 24px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 700;
          color: var(--color-accent-start);
        }

        .timer-display.pulsing {
          animation: pulse 2s ease-in-out infinite;
        }

        .timer-icon {
          animation: float 2s ease-in-out infinite;
        }

        .timer-display strong {
          font-weight: 800;
        }

        .action-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 24px;
          border: 2px solid;
          border-radius: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .action-btn.approve {
          background: var(--color-success);
          border-color: var(--color-success);
          color: white;
          box-shadow: 0 4px 12px rgba(0, 255, 136, 0.2);
        }

        .action-btn.approve:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 255, 136, 0.4);
        }

        .action-btn.reject {
          background: transparent;
          border-color: var(--color-border);
          color: var(--color-text);
        }

        .action-btn.reject:hover {
          border-color: var(--color-text-dim);
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-3px);
        }

        .action-btn.ban {
          background: transparent;
          border-color: var(--color-error);
          color: var(--color-error);
          padding: 16px;
        }

        .action-btn.ban:hover {
          background: var(--color-error);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(255, 68, 68, 0.4);
        }

        /* READY CARD */
        .ready-card {
          position: relative;
          background: var(--color-surface);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 24px;
          padding: 32px 28px;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .ready-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px var(--card-shadow), 0 0 40px rgba(0, 255, 136, 0.2);
        }

        .celebration-confetti {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .confetti {
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--gradient-main);
          border-radius: 2px;
          opacity: 0;
          animation: confettiFall 3s ease-in infinite;
        }

        .confetti-1 { top: -20px; left: 10%; animation-delay: 0s; }
        .confetti-2 { top: -20px; left: 20%; animation-delay: 0.3s; background: var(--color-success); }
        .confetti-3 { top: -20px; left: 30%; animation-delay: 0.6s; }
        .confetti-4 { top: -20px; left: 40%; animation-delay: 0.9s; background: var(--color-success); }
        .confetti-5 { top: -20px; left: 50%; animation-delay: 1.2s; }
        .confetti-6 { top: -20px; left: 60%; animation-delay: 1.5s; background: var(--color-success); }
        .confetti-7 { top: -20px; left: 70%; animation-delay: 1.8s; }
        .confetti-8 { top: -20px; left: 80%; animation-delay: 2.1s; background: var(--color-success); }
        .confetti-9 { top: -20px; left: 90%; animation-delay: 2.4s; }
        .confetti-10 { top: -20px; left: 15%; animation-delay: 2.7s; background: var(--color-success); }
        .confetti-11 { top: -20px; left: 55%; animation-delay: 0.4s; }
        .confetti-12 { top: -20px; left: 75%; animation-delay: 1.1s; background: var(--color-success); }

        .success-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0, 255, 136, 0.15);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 800;
          color: var(--color-success);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .ready-title {
          font-family: 'Manrope', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .ready-info {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .ready-amount {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          line-height: 1;
          color: var(--color-text);
          letter-spacing: 1px;
        }

        .ready-separator {
          color: var(--color-text-dim);
          font-size: 18px;
        }

        .ready-sponsors {
          font-family: 'Manrope', sans-serif;
          font-size: 15px;
          color: var(--color-text-dim);
        }

        .ready-progress {
          margin-bottom: 24px;
        }

        .ready-progress-bar {
          height: 12px;
          background: rgba(0, 255, 136, 0.15);
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .ready-progress-fill {
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg, var(--color-success), #00D9A3);
          border-radius: 6px;
          position: relative;
        }

        .progress-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shine 2s ease-in-out infinite;
        }

        .ready-progress-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-success);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .ready-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .ready-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 24px;
          border: 2px solid;
          border-radius: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ready-btn.primary {
          background: var(--gradient-main);
          border-color: transparent;
          color: white;
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
        }

        .ready-btn.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.5);
        }

        .ready-btn.secondary {
          background: transparent;
          border-color: var(--color-border);
          color: var(--color-text);
        }

        .ready-btn.secondary:hover {
          border-color: var(--color-accent-start);
          background: rgba(255, 107, 53, 0.1);
          transform: translateY(-3px);
        }

        /* COLLECTIONS GRID */
        .collections-grid {
          display: grid;
          gap: 16px;
        }

        .collection-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 20px;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .collection-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-accent-start);
          box-shadow: 0 12px 36px var(--card-shadow);
        }

        .collection-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          gap: 12px;
        }

        .collection-title {
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--color-text);
          line-height: 1.4;
          flex: 1;
        }

        .collection-days {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 10px;
          background: rgba(100, 120, 255, 0.1);
          border: 1px solid rgba(100, 120, 255, 0.2);
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          color: #6878FF;
          text-transform: uppercase;
          flex-shrink: 0;
        }

        .collection-days.urgent {
          background: rgba(255, 68, 68, 0.1);
          border-color: rgba(255, 68, 68, 0.2);
          color: var(--color-error);
          animation: pulse 2s ease-in-out infinite;
        }

        .collection-progress-bar {
          height: 8px;
          background: rgba(255, 107, 53, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .collection-progress-fill {
          height: 100%;
          background: var(--gradient-main);
          border-radius: 4px;
          position: relative;
          transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .collection-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .collection-amount {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text);
        }

        .amount-current {
          color: var(--color-text);
        }

        .amount-separator {
          color: var(--color-text-dim);
          font-size: 12px;
        }

        .amount-goal {
          color: var(--color-text-dim);
        }

        .collection-percent {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          line-height: 1;
          background: var(--gradient-main);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .collection-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .collection-sponsors {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Manrope', sans-serif;
          font-size: 12px;
          color: var(--color-text-dim);
        }

        /* SHOWCASE */
        .showcase-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          padding: 28px;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .showcase-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px var(--card-shadow);
        }

        .showcase-label {
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          color: var(--color-text-dim);
          margin-bottom: 16px;
        }

        .showcase-link-container {
          position: relative;
          margin-bottom: 20px;
        }

        .showcase-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--color-text);
          padding: 18px 20px;
          background: rgba(255, 107, 53, 0.08);
          border: 1px solid rgba(255, 107, 53, 0.2);
          border-radius: 12px;
          word-break: break-all;
          position: relative;
          z-index: 1;
        }

        .link-decoration {
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 60px;
          height: 60px;
          background: var(--gradient-main);
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.2;
          pointer-events: none;
        }

        .showcase-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .showcase-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 24px;
          background: transparent;
          border: 2px solid var(--color-border);
          border-radius: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 800;
          color: var(--color-text);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .showcase-btn:hover {
          border-color: var(--color-accent-start);
          background: rgba(255, 107, 53, 0.1);
          transform: translateY(-3px);
        }

        .showcase-btn.success {
          border-color: var(--color-success);
          background: rgba(0, 255, 136, 0.1);
          color: var(--color-success);
        }

        .showcase-btn.success:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 255, 136, 0.3);
        }

        /* TELEGRAM STAR PARTICLES */
        .star-particle {
          position: absolute;
          color: #FFA726;
          opacity: 0;
          pointer-events: none;
        }

        .mini-tg-star-1 { top: -5px; left: -8px; animation: burstParticle 1.5s ease-out infinite; }
        .mini-tg-star-2 { top: 2px; left: -10px; animation: burstParticle 1.5s ease-out 0.2s infinite; }
        .mini-tg-star-3 { top: -8px; left: 0px; animation: burstParticle 1.5s ease-out 0.4s infinite; }
        .mini-tg-star-4 { top: -6px; right: -8px; animation: burstParticle 1.5s ease-out 0.6s infinite; }
        .mini-tg-star-5 { top: 0px; right: -10px; animation: burstParticle 1.5s ease-out 0.8s infinite; }
        .mini-tg-star-6 { bottom: -8px; left: -6px; animation: burstParticle 1.5s ease-out 1s infinite; }
        .mini-tg-star-7 { bottom: -6px; right: -8px; animation: burstParticle 1.5s ease-out 1.2s infinite; }
        .mini-tg-star-8 { top: -10px; left: 50%; animation: burstParticle 1.5s ease-out 0.3s infinite; }

        @keyframes burstParticle {
          0% {
            opacity: 0;
            transform: scale(0) translateY(0);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(1.2) translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}

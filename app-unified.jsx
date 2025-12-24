import React, { useState, useEffect } from 'react';
import { Plus, Users, TrendingUp, Award, Crown, Sparkles, ArrowUpRight, Zap, MessageCircle, Heart, Moon, Sun } from 'lucide-react';

export default function ProjectsUnified() {
  const [activeFilter, setActiveFilter] = useState('active');
  const [showMore, setShowMore] = useState(false);
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

  const [projects] = useState([
    {
      id: 1,
      title: 'Лучше до 30 я думаю делать запросы',
      funded: 85,
      goal: 100,
      supporters: 34,
      daysLeft: 3,
      background: '/abstract-second.png',
      type: 'ОПРОС',
      urgency: 'high'
    },
    {
      id: 2,
      title: 'Куда бы вложил $1000 прямо сейчас?',
      funded: 92,
      goal: 100,
      supporters: 47,
      daysLeft: 2,
      background: '/abstract-first.png',
      type: 'ВИДЕО',
      urgency: 'high'
    },
    {
      id: 3,
      title: 'Кого из блогеров смотришь и почему?',
      funded: 120,
      goal: 100,
      supporters: 56,
      completed: true,
      background: '/abstract-green.png',
      type: 'ОПРОС',
      icon: 'message'
    },
    {
      id: 4,
      title: 'Как ты справляешься с выгоранием?',
      funded: 78,
      goal: 100,
      supporters: 29,
      daysLeft: 8,
      background: '/Gemini_Generated_Image_sakktfsakktfsakk.png',
      type: 'ВИДЕО',
      icon: 'heart'
    },
    {
      id: 5,
      title: 'Покажи экран: какими аппами живешь?',
      funded: 65,
      goal: 100,
      supporters: 23,
      daysLeft: 12,
      background: '/Gemini_Generated_Image_tp1quatp1quatp1q.png',
      type: 'ОПРОС'
    },
    {
      id: 6,
      title: 'Что думаешь про твит Маска?',
      funded: 110,
      goal: 100,
      supporters: 62,
      completed: true,
      background: '/abstract-first.png',
      type: 'ВИДЕО'
    },
    {
      id: 7,
      title: 'Лучшая покупка до $100, которую юзаешь каждый день',
      funded: 88,
      goal: 100,
      supporters: 41,
      daysLeft: 6,
      background: '/abstract-second.png',
      type: 'ОПРОС'
    },
    {
      id: 8,
      title: 'Разбери интервью у Дудя. Кто прав?',
      funded: 95,
      goal: 100,
      supporters: 52,
      daysLeft: 1,
      background: '/abstract-green.png',
      type: 'ВИДЕО',
      urgency: 'high'
    },
    {
      id: 9,
      title: 'Тиндер в Европе: Реально найти кого-то?',
      funded: 73,
      goal: 100,
      supporters: 31,
      daysLeft: 10,
      background: '/Gemini_Generated_Image_sakktfsakktfsakk.png',
      type: 'ОПРОС'
    },
    {
      id: 10,
      title: 'Твой самый дорогой факап?',
      funded: 82,
      goal: 100,
      supporters: 38,
      daysLeft: 7,
      background: '/Gemini_Generated_Image_tp1quatp1quatp1q.png',
      type: 'ОПРОС'
    }
  ]);

  const [topDonors] = useState([
    {
      id: 1,
      name: 'Александр К.',
      avatar: 'АК',
      amount: 1250,
      badge: 'gold',
      contributions: 47,
      streak: 12
    },
    {
      id: 2,
      name: 'Мария С.',
      avatar: 'МС',
      amount: 980,
      badge: 'silver',
      contributions: 38,
      streak: 8
    },
    {
      id: 3,
      name: 'Дмитрий П.',
      avatar: 'ДП',
      amount: 750,
      badge: 'bronze',
      contributions: 29,
      streak: 6
    },
    {
      id: 4,
      name: 'Елена В.',
      avatar: 'ЕВ',
      amount: 620,
      contributions: 24,
      streak: 5
    },
    {
      id: 5,
      name: 'Игорь М.',
      avatar: 'ИМ',
      amount: 540,
      contributions: 19,
      streak: 4
    }
  ]);

  const visibleProjects = showMore ? projects : projects.slice(0, 4);

  const ProjectCard = ({ project, index }) => {
    const progress = Math.min((project.funded / project.goal) * 100, 100);
    const isOverfunded = project.funded > project.goal;

    const getCardIcon = () => {
      if (project.icon === 'message') return MessageCircle;
      if (project.icon === 'heart') return Heart;
      if (project.urgency === 'high' && !project.completed) return Zap;
      return null;
    };

    const CardIcon = getCardIcon();

    return (
      <div
        className="project-card"
        style={{
          animationDelay: `${index * 0.1}s`,
          opacity: mounted ? 1 : 0
        }}
      >
        <div className="card-container">
          <div className="card-bg" style={{ backgroundImage: `url(${project.background})` }}>
            <div className="gradient-overlay" />

            {CardIcon && (
              <div className="urgency-pulse">
                <CardIcon size={16} />
              </div>
            )}

            {project.completed ? (
              <div className="badge completed">
                <Award size={14} strokeWidth={2.5} />
                <span>ЗАВЕРШЁН</span>
              </div>
            ) : (
              <div className="badge active">
                <Sparkles size={14} strokeWidth={2.5} />
                <span>{project.type}</span>
              </div>
            )}

            <h2 className="title">{project.title}</h2>

            <div className="stats-row">
              <div className="stat-pill">
                <Users size={16} strokeWidth={2.5} />
                <span>{project.supporters}</span>
              </div>
              {!project.completed && (
                <div className="stat-pill">
                  <TrendingUp size={16} strokeWidth={2.5} />
                  <span>{project.daysLeft}д</span>
                </div>
              )}
            </div>

            <div className="progress-section">
              <div className="progress-header">
                <div className="amount-display">
                  <span className="currency">⭐</span>
                  <span className="amount">{project.funded}</span>
                  <span className="goal">/{project.goal}</span>
                </div>
                {isOverfunded && (
                  <div className="overfunded-badge">
                    +{Math.round(((project.funded - project.goal) / project.goal) * 100)}%
                  </div>
                )}
              </div>
              <div className="progress-track">
                <div
                  className={`progress-fill ${isOverfunded ? 'overfunded' : ''}`}
                  style={{ width: `${Math.min(progress, 100)}%` }}
                >
                  <div className="progress-shine" />
                </div>
              </div>
            </div>

            <button className="donate-btn">
              <span className="donate-text">Поддержать</span>
              <div className="donate-amount">5⭐</div>
              <ArrowUpRight className="donate-arrow" size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const DonorCard = ({ donor, rank }) => {
    const getBadgeConfig = () => {
      if (donor.badge === 'gold') return {
        color: '#FFD700',
        gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        glow: 'rgba(255, 215, 0, 0.4)',
        icon: Crown
      };
      if (donor.badge === 'silver') return {
        color: '#C0C0C0',
        gradient: 'linear-gradient(135deg, #E8E8E8 0%, #A0A0A0 100%)',
        glow: 'rgba(192, 192, 192, 0.4)',
        icon: Award
      };
      if (donor.badge === 'bronze') return {
        color: '#CD7F32',
        gradient: 'linear-gradient(135deg, #CD7F32 0%, #B5651D 100%)',
        glow: 'rgba(205, 127, 50, 0.4)',
        icon: Award
      };
      return {
        color: '#6366F1',
        gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        glow: 'rgba(99, 102, 241, 0.4)'
      };
    };

    const config = getBadgeConfig();
    const Icon = config.icon;

    return (
      <div
        className={`donor-card rank-${rank}`}
        style={{
          animationDelay: `${rank * 0.05}s`,
          opacity: mounted ? 1 : 0
        }}
      >
        {rank <= 3 && <div className="podium-glow" style={{ background: config.glow }} />}

        <div className="donor-rank-display">
          <div className="rank-number" style={{ background: config.gradient }}>
            {rank}
          </div>
        </div>

        <div className="donor-avatar-container">
          <div className="donor-avatar" style={{ background: config.gradient }}>
            <span>{donor.avatar}</span>
            {Icon && (
              <div className="badge-icon">
                <Icon size={18} strokeWidth={2.5} color={config.color} />
              </div>
            )}
          </div>
          {donor.streak > 0 && (
            <div className="streak-badge">
              <Zap size={10} fill="currentColor" />
              {donor.streak}
            </div>
          )}
        </div>

        <div className="donor-details">
          <div className="donor-name">{donor.name}</div>
          <div className="donor-meta">
            {donor.contributions} донатов
          </div>
        </div>

        <div className="donor-amount-display">
          <div className="amount-large" style={{ background: config.gradient }}>
            {donor.amount.toLocaleString()}⭐
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <div className="theme-toggle-track">
          <div className="theme-toggle-thumb" />
          <div className="theme-toggle-icon">
            {isDark ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />}
          </div>
        </div>
      </button>

      {/* Header */}
      <header className="header">
        <div className="header-bg">
          <div className="header-glow header-glow-1" />
          <div className="header-glow header-glow-2" />
          <div className="header-gradient" />
        </div>

        <div className="header-content">
          <div className="header-text">
            <div className="greeting">
              <span className="greeting-text">DonPlat</span>
              <div className="greeting-line" />
            </div>
            <h1 className="page-title">
              <span className="title-main">Михаил</span>
              <span className="title-sub">Проекты & Идеи</span>
            </h1>
          </div>

          <div className="avatar-section">
            <div className="avatar-container">
              <div className="avatar-ring" />
              <div className="avatar-ring-2" />
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop&crop=faces"
                alt="Михаил"
                className="avatar-image"
              />
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href="#" className="social-btn twitter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="social-btn instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="#" className="social-btn youtube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-icon completed">✓</div>
          <div className="stat-content">
            <div className="stat-value">32</div>
            <div className="stat-label">Завершено</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon supporters">♥</div>
          <div className="stat-content">
            <div className="stat-value">2.4K</div>
            <div className="stat-label">Донатеров</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon raised">⭐</div>
          <div className="stat-content">
            <div className="stat-value">8.2K</div>
            <div className="stat-label">Собрано</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <button
          className={`filter-btn ${activeFilter === 'active' ? 'active' : ''}`}
          onClick={() => setActiveFilter('active')}
        >
          <span>Активные</span>
          <span className="filter-count">8</span>
        </button>
        <button
          className={`filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveFilter('completed')}
        >
          <span>Завершенные</span>
        </button>
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          <span>Все</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Show More */}
      {!showMore && projects.length > 4 && (
        <button className="show-more-btn" onClick={() => setShowMore(true)}>
          <span>Показать все проекты</span>
          <div className="show-more-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      )}

      {/* Top Donors Section */}
      <div className="top-donors-section">
        <div className="section-header">
          <div className="section-icon">
            <Crown size={32} strokeWidth={2.5} />
          </div>
          <div className="section-text">
            <h2 className="section-title">Топ Донатеров</h2>
            <p className="section-subtitle">Герои нашего сообщества</p>
          </div>
        </div>

        <div className="donors-podium">
          {topDonors[1] && (
            <div className="podium-position second">
              <div className="podium-rank">2</div>
              <div className="podium-avatar" style={{ background: 'linear-gradient(135deg, #E8E8E8 0%, #A0A0A0 100%)' }}>
                <span>{topDonors[1].avatar}</span>
                <div className="podium-badge">
                  <Award size={20} strokeWidth={2.5} color="#C0C0C0" />
                </div>
              </div>
              <div className="podium-name">{topDonors[1].name}</div>
              <div className="podium-amount">{topDonors[1].amount.toLocaleString()}⭐</div>
              <div className="podium-base silver">
                <div className="podium-height" />
              </div>
            </div>
          )}

          {topDonors[0] && (
            <div className="podium-position first">
              <div className="champion-glow" />
              <div className="podium-rank">1</div>
              <div className="podium-avatar" style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' }}>
                <span>{topDonors[0].avatar}</span>
                <div className="podium-badge">
                  <Crown size={24} strokeWidth={2.5} color="#FFD700" />
                </div>
              </div>
              <div className="podium-name">{topDonors[0].name}</div>
              <div className="podium-amount">{topDonors[0].amount.toLocaleString()}⭐</div>
              <div className="podium-base gold">
                <div className="podium-height" />
              </div>
            </div>
          )}

          {topDonors[2] && (
            <div className="podium-position third">
              <div className="podium-rank">3</div>
              <div className="podium-avatar" style={{ background: 'linear-gradient(135deg, #CD7F32 0%, #B5651D 100%)' }}>
                <span>{topDonors[2].avatar}</span>
                <div className="podium-badge">
                  <Award size={20} strokeWidth={2.5} color="#CD7F32" />
                </div>
              </div>
              <div className="podium-name">{topDonors[2].name}</div>
              <div className="podium-amount">{topDonors[2].amount.toLocaleString()}⭐</div>
              <div className="podium-base bronze">
                <div className="podium-height" />
              </div>
            </div>
          )}
        </div>

        <div className="donors-list">
          {topDonors.slice(3).map((donor, index) => (
            <DonorCard key={donor.id} donor={donor} rank={index + 4} />
          ))}
        </div>
      </div>

      {/* FAB */}
      <button className="fab">
        <div className="fab-bg" />
        <div className="fab-content">
          <Plus size={20} strokeWidth={2.5} />
          <span>Предложить тему</span>
        </div>
      </button>

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
          --gradient-overlay: linear-gradient(180deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.4) 50%, rgba(10, 10, 10, 0.9) 100%);
          --card-shadow: rgba(0, 0, 0, 0.6);
          --text-shadow: 0 2px 12px rgba(0, 0, 0, 0.7);
          --greeting-opacity: 1;
          --badge-text: #FF6B35;
          --stat-pill-bg: rgba(255, 255, 255, 0.1);
          --stat-pill-border: rgba(255, 255, 255, 0.2);
          --currency-color: #FF6B35;
          --progress-bg: rgba(255, 255, 255, 0.1);
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
          --gradient-overlay: linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.92) 100%);
          --card-shadow: rgba(0, 0, 0, 0.15);
          --text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
          --greeting-opacity: 0.9;
          --badge-text: #D84315;
          --stat-pill-bg: rgba(0, 0, 0, 0.08);
          --stat-pill-border: rgba(0, 0, 0, 0.15);
          --currency-color: #D84315;
          --progress-bg: rgba(0, 0, 0, 0.08);
        }

        .app {
          min-height: 100vh;
          background: var(--color-bg);
          font-family: 'Manrope', sans-serif;
          padding-bottom: 120px;
          position: relative;
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
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .app.dark .theme-toggle-icon {
          right: 8px;
        }

        .app.light .theme-toggle-icon {
          left: 8px;
        }

        /* HEADER */
        .header {
          position: relative;
          padding: 32px 20px 24px;
          margin-bottom: 24px;
          overflow: hidden;
        }

        .header-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .header-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          pointer-events: none;
        }

        .header-glow-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #FF6B35, transparent);
          top: -100px;
          left: -50px;
        }

        .header-glow-2 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #FF6B9D, transparent);
          top: -80px;
          right: -30px;
        }

        .header-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(255, 107, 53, 0.08) 0%,
            rgba(255, 107, 53, 0) 100%
          );
        }

        .header-content {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
        }

        .header-text {
          flex: 1;
        }

        .greeting {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .greeting-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-accent-start);
          text-transform: uppercase;
          letter-spacing: 2px;
          opacity: var(--greeting-opacity);
        }

        .greeting-line {
          height: 1px;
          flex: 1;
          background: linear-gradient(90deg, var(--color-accent-start), transparent);
          opacity: 0.5;
        }

        .page-title {
          display: flex;
          flex-direction: column;
          gap: -4px;
        }

        .title-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 12vw, 64px);
          font-weight: 400;
          line-height: 0.95;
          color: var(--color-text);
          letter-spacing: 1px;
          text-transform: uppercase;
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s backwards;
        }

        .title-sub {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(13px, 2.8vw, 16px);
          font-weight: 600;
          color: var(--color-text-dim);
          letter-spacing: 0.5px;
          margin-top: 6px;
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .avatar-section {
          flex-shrink: 0;
          animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .avatar-container {
          position: relative;
          width: 64px;
          height: 64px;
        }

        .avatar-image {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          z-index: 2;
          object-fit: cover;
          box-shadow:
            0 0 0 3px var(--color-bg),
            0 0 0 4px var(--color-accent-start),
            0 16px 32px rgba(0, 0, 0, 0.3);
        }

        .avatar-ring {
          position: absolute;
          inset: -5px;
          border-radius: 20px;
          background: var(--gradient-main);
          opacity: 0.3;
          z-index: 1;
          animation: pulse 3s ease-in-out infinite;
        }

        .avatar-ring-2 {
          position: absolute;
          inset: -10px;
          border-radius: 24px;
          background: var(--gradient-main);
          opacity: 0.15;
          z-index: 0;
          animation: pulse 3s ease-in-out infinite 0.5s;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.15;
          }
        }

        /* SOCIAL LINKS */
        .social-links {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 10px;
          margin: 20px 20px 0;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
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

        .social-btn {
          position: relative;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 11px;
          color: var(--color-text);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .social-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-main);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .social-btn svg {
          position: relative;
          z-index: 1;
          transition: all 0.3s;
        }

        .social-btn:hover {
          border-color: var(--color-accent-start);
          transform: translateY(-4px);
          box-shadow: 0 0 20px rgba(255, 107, 53, 0.3), 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .social-btn:hover::before {
          opacity: 0.15;
        }

        .social-btn:hover svg {
          color: var(--color-accent-start);
          transform: scale(1.1);
        }

        /* STATS BAR */
        .stats-bar {
          position: relative;
          display: flex;
          align-items: center;
          margin: 0 20px 24px;
          padding: 18px 14px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 14px;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s backwards;
        }

        .stat-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--color-border);
        }

        .stat-icon.completed {
          color: var(--color-success);
          border-color: rgba(0, 255, 136, 0.2);
          background: rgba(0, 255, 136, 0.05);
        }

        .app.light .stat-icon.completed {
          border-color: rgba(0, 185, 99, 0.2);
          background: rgba(0, 185, 99, 0.08);
        }

        .stat-icon.supporters {
          color: #FF6B9D;
          border-color: rgba(255, 107, 157, 0.2);
          background: rgba(255, 107, 157, 0.05);
        }

        .app.light .stat-icon.supporters {
          border-color: rgba(255, 107, 157, 0.25);
          background: rgba(255, 107, 157, 0.08);
        }

        .stat-icon.raised {
          color: var(--color-accent-start);
          border-color: rgba(255, 107, 53, 0.2);
          background: rgba(255, 107, 53, 0.05);
        }

        .app.light .stat-icon.raised {
          border-color: rgba(255, 107, 53, 0.25);
          background: rgba(255, 107, 53, 0.08);
        }

        .stat-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          overflow: hidden;
        }

        .stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          line-height: 1;
          color: var(--color-text);
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 700;
          color: var(--color-text-dim);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* FILTERS */
        .filters {
          display: flex;
          gap: 10px;
          margin: 0 20px 24px;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s backwards;
        }

        .filter-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 11px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-dim);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .filter-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-main);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .filter-btn > * {
          position: relative;
          z-index: 1;
        }

        .filter-btn:hover {
          border-color: var(--color-accent-start);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          border-color: var(--color-accent-start);
          color: var(--color-bg);
        }

        .filter-btn.active::before {
          opacity: 1;
        }

        .filter-count {
          padding: 4px 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          font-size: 11px;
          font-weight: 800;
        }

        .filter-btn.active .filter-count {
          background: rgba(0, 0, 0, 0.2);
        }

        /* PROJECTS GRID */
        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 0 20px 24px;
        }

        .project-card {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }

        .card-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.4s;
          z-index: 1;
          pointer-events: none;
        }

        .card-container:hover {
          transform: translateY(-8px);
          border-color: var(--color-accent-start);
        }

        .app.dark .card-container:hover {
          box-shadow: 0 0 40px rgba(255, 107, 53, 0.3), 0 20px 60px var(--card-shadow);
        }

        .app.light .card-container:hover {
          box-shadow: 0 8px 32px rgba(255, 107, 53, 0.15), 0 20px 60px var(--card-shadow);
        }

        .card-container:hover::before {
          opacity: 1;
        }

        .card-bg {
          position: relative;
          height: 450px;
          background-size: cover;
          background-position: center;
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: var(--gradient-overlay);
          z-index: 1;
        }

        .urgency-pulse {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-main);
          border-radius: 10px;
          color: white;
          z-index: 3;
          animation: urgencyPulse 2s ease-in-out infinite;
        }

        @keyframes urgencyPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(255, 107, 53, 0);
          }
        }

        .badge {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          border-radius: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          z-index: 3;
          backdrop-filter: blur(10px);
        }

        .app.dark .badge.active {
          background: rgba(255, 107, 44, 0.25);
          border: 1px solid rgba(255, 140, 66, 0.5);
          color: #FFB366;
        }

        .app.light .badge.active {
          background: rgba(255, 107, 44, 0.18);
          border: 1px solid rgba(255, 107, 44, 0.35);
          color: var(--badge-text);
          font-weight: 900;
        }

        .badge.completed {
          background: rgba(0, 255, 136, 0.2);
          border: 1px solid rgba(0, 255, 136, 0.4);
          color: var(--color-success);
        }

        .app.light .badge.completed {
          background: rgba(0, 185, 99, 0.15);
          border: 1px solid rgba(0, 185, 99, 0.3);
          color: #00874A;
          font-weight: 900;
        }

        .title {
          position: relative;
          font-family: 'Manrope', sans-serif;
          font-size: clamp(26px, 5.5vw, 34px);
          line-height: 1.2;
          font-weight: 700;
          color: var(--color-text);
          letter-spacing: -0.5px;
          margin-top: 70px;
          margin-bottom: auto;
          z-index: 2;
          text-shadow: var(--text-shadow);
        }

        .stats-row {
          position: relative;
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          z-index: 2;
        }

        .stat-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: var(--stat-pill-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--stat-pill-border);
          border-radius: 10px;
          color: var(--color-text);
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 700;
        }

        .progress-section {
          position: relative;
          z-index: 2;
          margin-bottom: 16px;
        }

        .progress-header {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 10px;
        }

        .amount-display {
          display: flex;
          align-items: baseline;
          gap: 3px;
        }

        .currency {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          color: var(--currency-color);
          font-weight: 700;
        }

        .amount {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 40px;
          line-height: 1;
          color: var(--color-text);
          letter-spacing: 0.5px;
        }

        .goal {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          color: var(--color-text-dim);
        }

        .overfunded-badge {
          padding: 5px 10px;
          background: var(--color-success);
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 800;
        }

        .app.dark .overfunded-badge {
          color: #000000;
        }

        .app.light .overfunded-badge {
          color: #FFFFFF;
        }

        .progress-track {
          height: 10px;
          background: var(--progress-bg);
          border-radius: 5px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: var(--gradient-main);
          border-radius: 5px;
          position: relative;
          transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .progress-fill.overfunded {
          background: linear-gradient(90deg, var(--color-success), #00D9A3);
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

        .donate-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
          padding: 16px 24px;
          background: var(--color-text);
          border: none;
          border-radius: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 800;
          color: var(--color-bg);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          z-index: 2;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }

        .donate-btn:hover {
          transform: translateY(-3px);
          background: var(--gradient-main);
          color: white;
        }

        .app.dark .donate-btn:hover {
          box-shadow: 0 0 30px rgba(255, 107, 53, 0.4), 0 12px 36px rgba(0, 0, 0, 0.4);
        }

        .app.light .donate-btn:hover {
          box-shadow: 0 0 20px rgba(255, 107, 53, 0.3), 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .donate-text {
          flex: 1;
        }

        .donate-amount {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.5px;
        }

        .donate-arrow {
          transition: transform 0.3s;
        }

        .donate-btn:hover .donate-arrow {
          transform: translate(3px, -3px);
        }

        /* SHOW MORE */
        .show-more-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: calc(100% - 40px);
          margin: 0 20px 24px;
          padding: 16px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 800;
          color: var(--color-text);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .show-more-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-main);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .show-more-btn > * {
          position: relative;
          z-index: 1;
        }

        .show-more-btn:hover {
          border-color: var(--color-accent-start);
          transform: translateY(-4px);
          box-shadow: 0 0 30px rgba(255, 107, 53, 0.2);
        }

        .show-more-btn:hover::before {
          opacity: 0.15;
        }

        .show-more-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.1);
          transition: transform 0.3s;
        }

        .show-more-btn:hover .show-more-icon {
          transform: translateY(4px);
        }

        /* TOP DONORS */
        .top-donors-section {
          margin: 32px 20px 24px;
          padding: 32px 24px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
        }

        .top-donors-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(180deg, rgba(255, 107, 53, 0.05), transparent);
          pointer-events: none;
        }

        .section-header {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 36px;
        }

        .section-icon {
          color: var(--color-accent-start);
          filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.5));
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .section-text {
          flex: 1;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          line-height: 1;
          color: var(--color-text);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 6px;
          white-space: nowrap;
        }

        .section-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-dim);
        }

        /* PODIUM */
        .donors-podium {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
          padding: 0 12px;
        }

        .podium-position {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex: 1;
          max-width: 140px;
          animation: podiumRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }

        .podium-position.first {
          animation-delay: 0.2s;
        }

        .podium-position.second {
          animation-delay: 0.1s;
        }

        .podium-position.third {
          animation-delay: 0.15s;
        }

        @keyframes podiumRise {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .champion-glow {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent);
          border-radius: 50%;
          animation: championGlow 2s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes championGlow {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.8; transform: translateX(-50%) scale(1.2); }
        }

        .podium-rank {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-bg);
          border: 2px solid var(--color-border);
          border-radius: 8px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          color: var(--color-text);
          z-index: 2;
        }

        .podium-position.first .podium-rank {
          border-color: #FFD700;
          color: #FFD700;
        }

        .podium-avatar {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          color: white;
          box-shadow:
            0 0 0 4px var(--color-bg),
            0 0 0 5px var(--color-border),
            0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .podium-position.first .podium-avatar {
          width: 96px;
          height: 96px;
          font-size: 28px;
          box-shadow:
            0 0 0 4px var(--color-bg),
            0 0 0 6px #FFD700,
            0 0 40px rgba(255, 215, 0, 0.3),
            0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .podium-badge {
          position: absolute;
          bottom: -8px;
          right: -8px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-bg);
          border: 2px solid var(--color-border);
          border-radius: 10px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .podium-position.first .podium-badge {
          width: 44px;
          height: 44px;
          border-color: #FFD700;
        }

        .podium-name {
          font-family: 'Manrope', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--color-text);
          text-align: center;
        }

        .podium-amount {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          line-height: 1;
          background: var(--gradient-main);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .podium-position.first .podium-amount {
          font-size: 28px;
        }

        .podium-base {
          width: 100%;
          border-radius: 12px 12px 0 0;
          border: 1px solid var(--color-border);
          border-bottom: none;
          position: relative;
          overflow: hidden;
        }

        .podium-base::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.1;
        }

        .podium-base.gold {
          background: linear-gradient(180deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
          border-color: rgba(255, 215, 0, 0.3);
        }

        .podium-base.gold::before {
          background: linear-gradient(180deg, #FFD700, transparent);
        }

        .podium-base.silver {
          background: linear-gradient(180deg, rgba(192, 192, 192, 0.1), rgba(192, 192, 192, 0.05));
          border-color: rgba(192, 192, 192, 0.3);
        }

        .podium-base.silver::before {
          background: linear-gradient(180deg, #C0C0C0, transparent);
        }

        .podium-base.bronze {
          background: linear-gradient(180deg, rgba(205, 127, 50, 0.1), rgba(205, 127, 50, 0.05));
          border-color: rgba(205, 127, 50, 0.3);
        }

        .podium-base.bronze::before {
          background: linear-gradient(180deg, #CD7F32, transparent);
        }

        .podium-height {
          width: 100%;
        }

        .podium-position.first .podium-height {
          height: 140px;
        }

        .podium-position.second .podium-height {
          height: 100px;
        }

        .podium-position.third .podium-height {
          height: 70px;
        }

        /* DONORS LIST */
        .donors-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .donor-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }

        .donor-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--color-accent-start);
          transform: translateX(8px);
          box-shadow: 0 0 30px rgba(255, 107, 53, 0.2);
        }

        .donor-rank-display {
          flex-shrink: 0;
        }

        .rank-number {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          color: white;
        }

        .donor-avatar-container {
          position: relative;
          flex-shrink: 0;
        }

        .donor-avatar {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          color: white;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .badge-icon {
          position: absolute;
          bottom: -6px;
          right: -6px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-bg);
          border: 2px solid var(--color-border);
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .streak-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 4px 8px;
          background: var(--gradient-main);
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 800;
          color: white;
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
        }

        .donor-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .donor-name {
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--color-text);
        }

        .donor-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-dim);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .donor-amount-display {
          flex-shrink: 0;
        }

        .amount-large {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          line-height: 1;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* FAB */
        .fab {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 48px);
          max-width: 382px;
          padding: 0;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          z-index: 100;
          overflow: hidden;
          box-shadow:
            0 0 0 1px var(--color-accent-start),
            0 16px 48px rgba(255, 107, 53, 0.3);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fab-bg {
          position: absolute;
          inset: 0;
          background: var(--gradient-main);
        }

        .fab-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 24px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 800;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          z-index: 1;
        }

        .fab:hover {
          transform: translateX(-50%) translateY(-4px);
          box-shadow:
            0 0 0 1px var(--color-accent-start),
            0 0 50px rgba(255, 107, 53, 0.5),
            0 24px 64px rgba(255, 107, 53, 0.4);
        }

        /* RESPONSIVE */
        @media (min-width: 640px) {
          .app {
            max-width: 430px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}

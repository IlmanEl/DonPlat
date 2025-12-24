import React, { useState, useEffect } from 'react';
import { Plus, Users, TrendingUp, Award, Crown, Sparkles, ArrowUpRight, Zap, MessageCircle, Heart, Moon, Sun } from 'lucide-react';

export default function ProjectsUnified() {
  const [activeFilter, setActiveFilter] = useState('active');
  const [showMore, setShowMore] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for theme preference
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

            {/* Icon Indicator */}
            {CardIcon && (
              <div className={`card-icon-indicator ${project.icon || 'urgency'}`}>
                <CardIcon size={16} strokeWidth={2.5} />
              </div>
            )}

            {/* Badge */}
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

            {/* Title */}
            <h2 className="title">{project.title}</h2>

            {/* Stats Row */}
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

            {/* Progress Section */}
            <div className="progress-section">
              <div className="progress-header">
                <div className="amount-display">
                  <span className="currency">$</span>
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

            {/* Donate Button */}
            <button className="donate-btn">
              <span className="donate-text">Поддержать</span>
              <div className="donate-amount">$5</div>
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
        color: isDark ? '#FFD700' : '#D4AF37',
        gradient: isDark ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' : 'linear-gradient(135deg, #F4E4B7 0%, #D4AF37 100%)',
        glow: isDark ? 'rgba(255, 215, 0, 0.4)' : 'rgba(212, 175, 55, 0.25)',
        icon: Crown
      };
      if (donor.badge === 'silver') return {
        color: isDark ? '#C0C0C0' : '#94A3B8',
        gradient: isDark ? 'linear-gradient(135deg, #E8E8E8 0%, #A0A0A0 100%)' : 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)',
        glow: isDark ? 'rgba(192, 192, 192, 0.4)' : 'rgba(148, 163, 184, 0.25)',
        icon: Award
      };
      if (donor.badge === 'bronze') return {
        color: isDark ? '#CD7F32' : '#B87333',
        gradient: isDark ? 'linear-gradient(135deg, #CD7F32 0%, #B5651D 100%)' : 'linear-gradient(135deg, #E5C5A8 0%, #B87333 100%)',
        glow: isDark ? 'rgba(205, 127, 50, 0.4)' : 'rgba(184, 115, 51, 0.25)',
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
            ${donor.amount.toLocaleString()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <div className="theme-toggle-bg" />
        <div className="theme-toggle-content">
          {isDark ? (
            <Sun size={20} strokeWidth={2.5} />
          ) : (
            <Moon size={20} strokeWidth={2.5} />
          )}
        </div>
      </button>

      {/* Header */}
      <header className="header">
        <div className="header-bg">
          <div className="header-pattern" />
          <div className="header-gradient" />
        </div>

        <div className="header-content">
          <div className="header-text">
            <div className="greeting">
              <span className="greeting-text">Платформа</span>
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
                src={isDark ?
                  "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23000000;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23434343;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='16' fill='url(%23grad)'/%3E%3Ctext x='32' y='42' font-family='Arial' font-weight='900' font-size='22' fill='%23FFD700' text-anchor='middle'%3EMB%3C/text%3E%3C/svg%3E"
                  :
                  "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D4AF37;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23B8860B;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='16' fill='url(%23grad)'/%3E%3Ctext x='32' y='42' font-family='Arial' font-weight='900' font-size='22' fill='%23FFFFFF' text-anchor='middle'%3EMB%3C/text%3E%3C/svg%3E"
                }
                alt="Михаил"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
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
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-icon supporters">♥</div>
          <div className="stat-content">
            <div className="stat-value">2.4K</div>
            <div className="stat-label">Донатеров</div>
          </div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-icon raised">$</div>
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
          {/* Second Place */}
          {topDonors[1] && (
            <div className="podium-position second">
              <div className="podium-rank">2</div>
              <div className="podium-avatar" style={{
                background: isDark ?
                  'linear-gradient(135deg, #E8E8E8 0%, #A0A0A0 100%)' :
                  'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)'
              }}>
                <span>{topDonors[1].avatar}</span>
                <div className="podium-badge">
                  <Award size={20} strokeWidth={2.5} color={isDark ? '#C0C0C0' : '#94A3B8'} />
                </div>
              </div>
              <div className="podium-name">{topDonors[1].name}</div>
              <div className="podium-amount">${topDonors[1].amount.toLocaleString()}</div>
              <div className="podium-base silver">
                <div className="podium-height" />
              </div>
            </div>
          )}

          {/* First Place */}
          {topDonors[0] && (
            <div className="podium-position first">
              <div className="champion-glow" />
              <div className="podium-rank">1</div>
              <div className="podium-avatar" style={{
                background: isDark ?
                  'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' :
                  'linear-gradient(135deg, #F4E4B7 0%, #D4AF37 100%)'
              }}>
                <span>{topDonors[0].avatar}</span>
                <div className="podium-badge">
                  <Crown size={24} strokeWidth={2.5} color={isDark ? '#FFD700' : '#D4AF37'} />
                </div>
              </div>
              <div className="podium-name">{topDonors[0].name}</div>
              <div className="podium-amount">${topDonors[0].amount.toLocaleString()}</div>
              <div className="podium-base gold">
                <div className="podium-height" />
              </div>
            </div>
          )}

          {/* Third Place */}
          {topDonors[2] && (
            <div className="podium-position third">
              <div className="podium-rank">3</div>
              <div className="podium-avatar" style={{
                background: isDark ?
                  'linear-gradient(135deg, #CD7F32 0%, #B5651D 100%)' :
                  'linear-gradient(135deg, #E5C5A8 0%, #B87333 100%)'
              }}>
                <span>{topDonors[2].avatar}</span>
                <div className="podium-badge">
                  <Award size={20} strokeWidth={2.5} color={isDark ? '#CD7F32' : '#B87333'} />
                </div>
              </div>
              <div className="podium-name">{topDonors[2].name}</div>
              <div className="podium-amount">${topDonors[2].amount.toLocaleString()}</div>
              <div className="podium-base bronze">
                <div className="podium-height" />
              </div>
            </div>
          )}
        </div>

        {/* Rest of donors */}
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
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700;800&family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Dark Theme Variables */
        .app.dark {
          --color-bg: #0A0A0A;
          --color-surface: #141414;
          --color-text: #FFFFFF;
          --color-text-secondary: #888888;
          --color-text-tertiary: #666666;
          --color-accent: #FFD700;
          --color-accent-alt: #00D9FF;
          --color-accent-dark: #FFA500;
          --color-success: #00FF88;
          --color-border: #222222;
          --color-shadow: rgba(0, 0, 0, 0.5);
          --font-display: 'Bebas Neue', sans-serif;
          --font-body: 'Manrope', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
          --gradient-overlay: linear-gradient(180deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.4) 50%, rgba(10, 10, 10, 0.9) 100%);
        }

        /* Light Theme Variables */
        .app.light {
          --color-bg: #FAFAFA;
          --color-surface: #FFFFFF;
          --color-text: #0A0A0A;
          --color-text-secondary: #525252;
          --color-text-tertiary: #A3A3A3;
          --color-accent: #D4AF37;
          --color-accent-alt: #B8860B;
          --color-accent-dark: #B8860B;
          --color-success: #059669;
          --color-border: #E5E5E5;
          --color-shadow: rgba(0, 0, 0, 0.08);
          --font-display: 'Archivo Black', sans-serif;
          --font-body: 'DM Sans', sans-serif;
          --font-mono: 'Space Mono', monospace;
          --gradient-overlay: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.95) 100%);
        }

        .app {
          min-height: 100vh;
          background: var(--color-bg);
          font-family: var(--font-body);
          padding-bottom: 120px;
          position: relative;
          transition: background-color 0.3s ease;
        }

        /* THEME TOGGLE */
        .theme-toggle {
          position: fixed;
          top: 24px;
          right: 24px;
          width: 52px;
          height: 52px;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          z-index: 1000;
          overflow: hidden;
          box-shadow: 0 4px 16px var(--color-shadow);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .theme-toggle-bg {
          position: absolute;
          inset: 0;
          background: var(--color-surface);
          border: 2px solid var(--color-border);
          border-radius: 50%;
        }

        .theme-toggle-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: var(--color-accent);
          z-index: 1;
        }

        .theme-toggle:hover {
          transform: scale(1.1) rotate(15deg);
          box-shadow: 0 6px 24px var(--color-shadow);
        }

        .theme-toggle:active {
          transform: scale(0.95) rotate(-15deg);
        }

        /* HEADER */
        .header {
          position: relative;
          padding: 32px 20px 24px;
          margin-bottom: 24px;
          overflow: hidden;
          background: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
        }

        .header-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .header-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(90deg, var(--color-accent) 1px, transparent 1px),
            linear-gradient(var(--color-accent) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.03;
        }

        .header-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(var(--accent-rgb, 212, 175, 55), 0.05) 0%,
            transparent 100%
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
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: var(--color-accent-dark);
          text-transform: uppercase;
          letter-spacing: 2.5px;
        }

        .greeting-line {
          height: 2px;
          flex: 1;
          background: linear-gradient(90deg, var(--color-accent), transparent);
          opacity: 0.3;
        }

        .page-title {
          display: flex;
          flex-direction: column;
          gap: -4px;
        }

        .title-main {
          font-family: var(--font-display);
          font-size: clamp(52px, 13vw, 72px);
          font-weight: 400;
          line-height: 0.9;
          color: var(--color-text);
          letter-spacing: -1px;
          text-transform: uppercase;
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s backwards;
        }

        .title-sub {
          font-family: var(--font-body);
          font-size: clamp(13px, 3vw, 17px);
          font-weight: 600;
          color: var(--color-text-secondary);
          letter-spacing: -0.2px;
          margin-top: 8px;
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

        .avatar-container img {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          z-index: 2;
          box-shadow:
            0 0 0 3px var(--color-surface),
            0 0 0 4px var(--color-accent),
            0 8px 24px var(--color-shadow);
        }

        .avatar-ring {
          position: absolute;
          inset: -5px;
          border-radius: 20px;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-alt));
          opacity: 0.2;
          z-index: 1;
          animation: pulse 3s ease-in-out infinite;
        }

        .avatar-ring-2 {
          position: absolute;
          inset: -10px;
          border-radius: 24px;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-alt));
          opacity: 0.1;
          z-index: 0;
          animation: pulse 3s ease-in-out infinite 0.5s;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
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
          border: 1.5px solid var(--color-border);
          border-radius: 12px;
          color: var(--color-text-secondary);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          box-shadow: 0 1px 3px var(--color-shadow);
        }

        .social-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--color-accent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .social-btn svg {
          position: relative;
          z-index: 1;
          transition: all 0.3s;
        }

        .social-btn:hover {
          border-color: var(--color-accent);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
        }

        .social-btn:hover::before {
          opacity: 0.1;
        }

        .social-btn:hover svg {
          color: var(--color-accent-dark);
          transform: scale(1.1);
        }

        /* STATS BAR */
        .stats-bar {
          position: relative;
          display: flex;
          align-items: center;
          margin: 0 20px 24px;
          padding: 20px 16px;
          background: var(--color-surface);
          border: 1.5px solid var(--color-border);
          border-radius: 16px;
          box-shadow: 0 2px 8px var(--color-shadow);
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s backwards;
        }

        .stat-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .stat-divider {
          width: 1.5px;
          height: 44px;
          background: var(--color-border);
          flex-shrink: 0;
        }

        .stat-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          border-radius: 12px;
          border: 1.5px solid var(--color-border);
        }

        .app.dark .stat-icon {
          background: rgba(255, 255, 255, 0.05);
        }

        .app.light .stat-icon {
          background: var(--color-bg);
        }

        .stat-icon.completed {
          color: var(--color-success);
          border-color: rgba(5, 150, 105, 0.2);
        }

        .app.dark .stat-icon.completed {
          background: rgba(0, 255, 136, 0.05);
        }

        .app.light .stat-icon.completed {
          background: #D1FAE5;
        }

        .stat-icon.supporters {
          border-color: rgba(255, 107, 157, 0.2);
        }

        .app.dark .stat-icon.supporters {
          color: #FF6B9D;
          background: rgba(255, 107, 157, 0.05);
        }

        .app.light .stat-icon.supporters {
          color: #DC2626;
          background: #FEE2E2;
        }

        .stat-icon.raised {
          color: var(--color-accent-dark);
          border-color: rgba(212, 175, 55, 0.2);
        }

        .app.dark .stat-icon.raised {
          background: rgba(255, 215, 0, 0.05);
        }

        .app.light .stat-icon.raised {
          background: #F4E4B7;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          overflow: hidden;
        }

        .stat-value {
          font-family: var(--font-display);
          font-size: 26px;
          line-height: 1;
          color: var(--color-text);
          letter-spacing: -0.5px;
          white-space: nowrap;
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.8px;
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
          padding: 13px 20px;
          background: var(--color-surface);
          border: 1.5px solid var(--color-border);
          border-radius: 12px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          box-shadow: 0 1px 3px var(--color-shadow);
        }

        .filter-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-alt));
          opacity: 0;
          transition: opacity 0.3s;
        }

        .filter-btn > * {
          position: relative;
          z-index: 1;
        }

        .filter-btn:hover {
          border-color: var(--color-accent);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.15);
        }

        .filter-btn.active {
          border-color: var(--color-accent-dark);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.25);
        }

        .app.dark .filter-btn.active {
          color: var(--color-bg);
        }

        .app.light .filter-btn.active {
          color: var(--color-surface);
        }

        .filter-btn.active::before {
          opacity: 1;
        }

        .filter-count {
          padding: 4px 9px;
          background: rgba(0, 0, 0, 0.06);
          border-radius: 7px;
          font-size: 11px;
          font-weight: 700;
        }

        .filter-btn.active .filter-count {
          background: rgba(255, 255, 255, 0.25);
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
          border: 1.5px solid var(--color-border);
          box-shadow: 0 2px 12px var(--color-shadow);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--color-accent) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s;
          z-index: 1;
          pointer-events: none;
        }

        .app.dark .card-container::before {
          opacity: 0;
        }

        .app.light .card-container::before {
          opacity: 0;
        }

        .card-container:hover {
          transform: translateY(-8px);
          border-color: var(--color-accent);
          box-shadow: 0 12px 40px rgba(212, 175, 55, 0.2);
        }

        .card-container:hover::before {
          opacity: 0.08;
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
          backdrop-filter: blur(1px);
        }

        .card-icon-indicator {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          z-index: 3;
          box-shadow: 0 4px 16px var(--color-shadow);
          backdrop-filter: blur(12px);
          border: 1.5px solid;
        }

        .card-icon-indicator.urgency {
          background: rgba(212, 175, 55, 0.15);
          border-color: rgba(212, 175, 55, 0.3);
          color: var(--color-accent-dark);
          animation: urgencyPulse 2s ease-in-out infinite;
        }

        .card-icon-indicator.message {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.3);
          color: #1D4ED8;
        }

        .card-icon-indicator.heart {
          background: rgba(220, 38, 38, 0.15);
          border-color: rgba(220, 38, 38, 0.3);
          color: #DC2626;
        }

        @keyframes urgencyPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 16px var(--color-shadow), 0 0 0 0 rgba(212, 175, 55, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 4px 16px var(--color-shadow), 0 0 0 8px rgba(212, 175, 55, 0);
          }
        }

        .badge {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 11px 17px;
          border-radius: 11px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          z-index: 3;
          backdrop-filter: blur(12px);
          border: 1.5px solid;
          box-shadow: 0 4px 16px var(--color-shadow);
        }

        .badge.active {
          background: rgba(212, 175, 55, 0.15);
          border-color: rgba(212, 175, 55, 0.3);
          color: var(--color-accent-dark);
        }

        .badge.completed {
          background: rgba(5, 150, 105, 0.15);
          border-color: rgba(5, 150, 105, 0.3);
          color: var(--color-success);
        }

        .title {
          position: relative;
          font-family: var(--font-body);
          font-size: clamp(26px, 5.5vw, 34px);
          line-height: 1.2;
          font-weight: 900;
          color: var(--color-text);
          letter-spacing: -0.8px;
          margin-top: 76px;
          margin-bottom: auto;
          z-index: 2;
        }

        .app.dark .title {
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.7);
        }

        .app.light .title {
          text-shadow: 0 2px 8px rgba(255, 255, 255, 0.8);
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
          padding: 11px 17px;
          backdrop-filter: blur(12px);
          border: 1.5px solid;
          border-radius: 11px;
          color: var(--color-text);
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 2px 8px var(--color-shadow);
        }

        .app.dark .stat-pill {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .app.light .stat-pill {
          background: rgba(255, 255, 255, 0.7);
          border-color: rgba(0, 0, 0, 0.08);
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
          font-family: var(--font-display);
          font-size: 20px;
          color: var(--color-accent-dark);
        }

        .amount {
          font-family: var(--font-display);
          font-size: 44px;
          line-height: 0.95;
          color: var(--color-text);
          letter-spacing: -1px;
        }

        .goal {
          font-family: var(--font-display);
          font-size: 26px;
          color: var(--color-text-secondary);
        }

        .overfunded-badge {
          padding: 6px 11px;
          background: var(--color-success);
          border-radius: 7px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: white;
          box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);
        }

        .progress-track {
          height: 11px;
          border-radius: 6px;
          overflow: hidden;
          position: relative;
        }

        .app.dark .progress-track {
          background: rgba(255, 255, 255, 0.1);
        }

        .app.light .progress-track {
          background: rgba(0, 0, 0, 0.06);
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-accent-dark), var(--color-accent));
          border-radius: 6px;
          position: relative;
          transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .progress-fill.overfunded {
          background: linear-gradient(90deg, var(--color-success), #34D399);
        }

        .progress-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
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
          padding: 17px 24px;
          background: var(--color-text);
          border: none;
          border-radius: 13px;
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          cursor: pointer;
          z-index: 2;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .app.dark .donate-btn {
          color: var(--color-bg);
        }

        .app.light .donate-btn {
          color: var(--color-surface);
        }

        .donate-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4);
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent));
        }

        .donate-text {
          flex: 1;
        }

        .donate-amount {
          font-family: var(--font-display);
          font-size: 19px;
          letter-spacing: -0.5px;
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
          padding: 17px;
          background: var(--color-surface);
          border: 1.5px solid var(--color-border);
          border-radius: 13px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 8px var(--color-shadow);
        }

        .show-more-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-alt));
          opacity: 0;
          transition: opacity 0.3s;
        }

        .show-more-btn > * {
          position: relative;
          z-index: 1;
        }

        .show-more-btn:hover {
          border-color: var(--color-accent);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.2);
        }

        .show-more-btn:hover::before {
          opacity: 0.1;
        }

        .show-more-icon {
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          background: rgba(0, 0, 0, 0.05);
          transition: transform 0.3s;
        }

        .show-more-btn:hover .show-more-icon {
          transform: translateY(3px);
        }

        /* TOP DONORS */
        .top-donors-section {
          margin: 40px 20px 24px;
          padding: 36px 24px;
          background: var(--color-surface);
          border: 1.5px solid var(--color-border);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 12px var(--color-shadow);
        }

        .top-donors-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(180deg, rgba(212, 175, 55, 0.06), transparent);
          pointer-events: none;
        }

        .section-header {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }

        .section-icon {
          color: var(--color-accent-dark);
          filter: drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3));
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .section-text {
          flex: 1;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 34px;
          line-height: 0.95;
          color: var(--color-text);
          letter-spacing: -0.5px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .section-subtitle {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text-secondary);
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
          background: radial-gradient(circle, rgba(212, 175, 55, 0.25), transparent);
          border-radius: 50%;
          animation: championGlow 2s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes championGlow {
          0%, 100% { opacity: 0.4; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.7; transform: translateX(-50%) scale(1.15); }
        }

        .podium-rank {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-surface);
          border: 2px solid var(--color-border);
          border-radius: 9px;
          font-family: var(--font-display);
          font-size: 18px;
          color: var(--color-text);
          z-index: 2;
          box-shadow: 0 2px 8px var(--color-shadow);
        }

        .podium-position.first .podium-rank {
          border-color: var(--color-accent-dark);
          color: var(--color-accent-dark);
        }

        .podium-avatar {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          font-family: var(--font-display);
          font-size: 24px;
          color: white;
          box-shadow:
            0 0 0 4px var(--color-surface),
            0 0 0 5.5px var(--color-border),
            0 8px 24px var(--color-shadow);
        }

        .podium-position.first .podium-avatar {
          width: 96px;
          height: 96px;
          font-size: 28px;
          box-shadow:
            0 0 0 4px var(--color-surface),
            0 0 0 6px var(--color-accent-dark),
            0 0 20px rgba(212, 175, 55, 0.3),
            0 12px 32px var(--color-shadow);
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
          background: var(--color-surface);
          border: 2px solid var(--color-border);
          border-radius: 10px;
          box-shadow: 0 4px 12px var(--color-shadow);
        }

        .podium-position.first .podium-badge {
          width: 44px;
          height: 44px;
          border-color: var(--color-accent-dark);
        }

        .podium-name {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          color: var(--color-text);
          text-align: center;
        }

        .podium-amount {
          font-family: var(--font-display);
          font-size: 24px;
          line-height: 1;
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent));
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
          border: 1.5px solid var(--color-border);
          border-bottom: none;
          position: relative;
          overflow: hidden;
        }

        .podium-base::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.15;
        }

        .podium-base.gold {
          border-color: rgba(212, 175, 55, 0.3);
        }

        .app.dark .podium-base.gold {
          background: linear-gradient(180deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
        }

        .app.light .podium-base.gold {
          background: linear-gradient(180deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05));
        }

        .podium-base.gold::before {
          background: linear-gradient(180deg, var(--color-accent), transparent);
        }

        .podium-base.silver {
          border-color: rgba(148, 163, 184, 0.3);
        }

        .app.dark .podium-base.silver {
          background: linear-gradient(180deg, rgba(192, 192, 192, 0.1), rgba(192, 192, 192, 0.05));
        }

        .app.light .podium-base.silver {
          background: linear-gradient(180deg, rgba(148, 163, 184, 0.15), rgba(148, 163, 184, 0.05));
        }

        .podium-base.silver::before {
          background: linear-gradient(180deg, #94A3B8, transparent);
        }

        .podium-base.bronze {
          border-color: rgba(184, 115, 51, 0.3);
        }

        .app.dark .podium-base.bronze {
          background: linear-gradient(180deg, rgba(205, 127, 50, 0.1), rgba(205, 127, 50, 0.05));
        }

        .app.light .podium-base.bronze {
          background: linear-gradient(180deg, rgba(184, 115, 51, 0.15), rgba(184, 115, 51, 0.05));
        }

        .podium-base.bronze::before {
          background: linear-gradient(180deg, #B87333, transparent);
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
          border: 1.5px solid var(--color-border);
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }

        .app.dark .donor-card {
          background: rgba(255, 255, 255, 0.02);
        }

        .app.light .donor-card {
          background: var(--color-bg);
        }

        .donor-card:hover {
          border-color: var(--color-accent);
          transform: translateX(6px);
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.15);
        }

        .app.light .donor-card:hover {
          background: var(--color-surface);
        }

        .app.dark .donor-card:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .donor-rank-display {
          flex-shrink: 0;
        }

        .rank-number {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          font-family: var(--font-display);
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
          font-family: var(--font-display);
          font-size: 20px;
          color: white;
          box-shadow: 0 4px 16px var(--color-shadow);
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
          background: var(--color-surface);
          border: 2px solid var(--color-border);
          border-radius: 8px;
          box-shadow: 0 2px 8px var(--color-shadow);
        }

        .streak-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 5px 9px;
          background: var(--color-accent-dark);
          border-radius: 7px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: white;
          box-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);
        }

        .donor-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .donor-name {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 700;
          color: var(--color-text);
        }

        .donor-meta {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .donor-amount-display {
          flex-shrink: 0;
        }

        .amount-large {
          font-family: var(--font-display);
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
          border-radius: 15px;
          cursor: pointer;
          z-index: 100;
          overflow: hidden;
          box-shadow:
            0 0 0 1.5px var(--color-accent-dark),
            0 8px 32px rgba(212, 175, 55, 0.3);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fab-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent));
        }

        .fab-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 19px 24px;
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          z-index: 1;
        }

        .fab:hover {
          transform: translateX(-50%) translateY(-4px);
          box-shadow:
            0 0 0 1.5px var(--color-accent-dark),
            0 0 40px rgba(212, 175, 55, 0.5),
            0 16px 48px rgba(212, 175, 55, 0.3);
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

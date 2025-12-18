import React, { useState } from 'react';
import { Plus, Users, Twitter, Instagram, Youtube } from 'lucide-react';

export default function ProjectsV2() {
  const [activeFilter, setActiveFilter] = useState('active');
  const [projects] = useState([
    {
      id: 1,
      title: 'скрипт который при мал кол-ве символов делает шрифт больше и наоборот ?',
      funded: 75,
      goal: 100,
      supporters: 22,
      daysLeft: 5,
      background: '/abstract-second.png',
      type: 'VIDEO'
    },
    {
      id: 2,
      title: 'MacBook M4 Review',
      funded: 15,
      goal: 100,
      supporters: 4,
      daysLeft: 25,
      background: '/abstract-first.png',
      type: 'ARTICLE'
    },
    {
      id: 3,
      title: 'Tech Guide 2025',
      funded: 120,
      goal: 100,
      supporters: 31,
      completed: true,
      background: '/abstract-green.png',
      type: 'VIDEO'
    },
    {
      id: 4,
      title: 'AI Tools Review',
      funded: 60,
      goal: 100,
      supporters: 18,
      daysLeft: 12,
      background: '/abstract-first.png',
      type: 'ARTICLE'
    }
  ]);

  const ProjectCard = ({ project }) => {
    const progress = Math.min((project.funded / project.goal) * 100, 100);

    return (
      <div className="project-card">
        <div className="card-bg" style={{ backgroundImage: `url(${project.background})` }}>

          {/* Title - Top Left */}
          <h2 className="title">
            {project.title}
            {project.title.includes('...') && (
              <button className="read-more-btn">
                <span>Read more</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </h2>

          {/* Badge - Top Right */}
          {project.completed ? (
            <div className="badge completed">Completed</div>
          ) : (
            <div className="badge info">{project.type}</div>
          )}

          {/* Progress Bar - Under Title */}
          <div className="progress-section">
            <div className="progress-capsule">
              <div className="progress-bar">
                <div className="progress-fill" style={{ height: `${progress}%` }} />
              </div>
            </div>
            <div className="progress-text">
              <div className="amount">${project.funded}/${project.goal}</div>
              <div className="label">dollars</div>
            </div>
          </div>

          {/* Stats - Under Progress */}
          <div className="stats">
            <div className="stat">
              <Users size={14} strokeWidth={2.5} />
              <span>{project.supporters}</span>
            </div>
            {!project.completed && (
              <div className="stat">
                <span>{project.daysLeft} days left</span>
              </div>
            )}
          </div>

          {/* Donate Button - Bottom Right */}
          <button className="plus-btn">
            <span className="donate-amount">$5</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div>
          <p className="greeting">Hello</p>
          <h1 className="page-title">Michael's Projects</h1>
        </div>
        <div className="avatar">
          <img src="data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32' cy='32' r='32' fill='%236B7FDB'/%3E%3Ctext x='32' y='40' font-family='Inter' font-weight='700' font-size='22' fill='white' text-anchor='middle'%3ETB%3C/text%3E%3C/svg%3E" alt="avatar" />
        </div>
      </header>

      {/* Social Links */}
      <div className="social-links">
        <a href="#" className="social-icon">
          <Twitter size={18} strokeWidth={2} />
        </a>
        <a href="#" className="social-icon">
          <Instagram size={18} strokeWidth={2} />
        </a>
        <a href="#" className="social-icon">
          <Youtube size={18} strokeWidth={2} />
        </a>
      </div>

      {/* Stats Bar */}
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

      {/* Filters */}
      <div className="filters">
        <button
          className={`filter-btn ${activeFilter === 'active' ? 'active' : ''}`}
          onClick={() => setActiveFilter('active')}
        >
          Active
          <span className="count">4</span>
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

      {/* Projects Grid */}
      <div className="grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Suggest Topic Button */}
      <button className="fab">
        <div className="fab-icon">
          <Plus size={24} strokeWidth={2.5} />
        </div>
        <span className="fab-label">Suggest Topic</span>
      </button>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
        }

        .app {
          min-height: 100vh;
          background: linear-gradient(to bottom, #FFFFFF 0%, #F3F4F6 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          padding: 24px 0 80px 0;
          max-width: 100vw;
          overflow-x: hidden;
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          padding: 0 16px;
        }

        .greeting {
          font-size: 15px;
          font-weight: 500;
          color: #6B7280;
          margin-bottom: 2px;
        }

        .page-title {
          font-size: 42px;
          font-weight: 900;
          color: #111827;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Projects Grid */
        .grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 0 16px;
        }

        /* Project Card */
        .project-card {
          width: 100%;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
        }

        .card-bg {
          position: relative;
          width: 100%;
          height: 400px;
          background-size: cover;
          background-position: center;
          padding: 32px 24px 24px 24px;
        }

        /* Title - Top Left */
        .title {
          position: absolute;
          top: 32px;
          left: 24px;
          right: 140px;
          font-size: 48px;
          font-weight: 900;
          color: white;
          line-height: 0.95;
          letter-spacing: -1.4px;
          text-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          border-radius: 12px;
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          align-self: flex-start;
          margin-top: 4px;
        }

        .read-more-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .read-more-btn svg {
          transition: transform 0.2s ease;
        }

        .read-more-btn:hover svg {
          transform: translateY(2px);
        }

        /* Badge - Top Right */
        .badge {
          position: absolute;
          top: 24px;
          right: 20px;
          padding: 10px 16px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          border-radius: 20px;
          color: white;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          z-index: 3;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .badge.info {
          background: rgba(255, 255, 255, 0.22);
        }

        .badge.completed {
          background: rgba(16, 185, 129, 0.95);
          border-color: rgba(16, 185, 129, 0.6);
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
        }

        /* Progress Section - Under Title */
        .progress-section {
          position: absolute;
          top: 200px;
          left: 24px;
          display: flex;
          align-items: flex-end;
          gap: 12px;
          z-index: 2;
        }

        .progress-capsule {
          width: 56px;
          height: 96px;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.5);
          border-radius: 28px;
          padding: 10px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .progress-bar {
          width: 28px;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .progress-fill {
          width: 100%;
          background: white;
          border-radius: 12px;
          transition: height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 -2px 12px rgba(255, 255, 255, 0.4);
        }

        .progress-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .amount {
          font-size: 18px;
          font-weight: 900;
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          letter-spacing: -0.5px;
        }

        .label {
          font-size: 11px;
          font-weight: 600;
          color: white;
          opacity: 0.85;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
        }

        /* Stats - Under Progress */
        .stats {
          position: absolute;
          top: 345px;
          left: 24px;
          display: flex;
          gap: 10px;
          z-index: 2;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          border-radius: 18px;
          color: white;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        /* Donate Button - Bottom Right */
        .plus-btn {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 76px;
          height: 76px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.97);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 4;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
        }

        .donate-amount {
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #374151;
          letter-spacing: -0.5px;
        }

        .plus-btn:hover {
          transform: scale(1.1);
          background: white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .plus-btn:active {
          transform: scale(0.95);
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          padding: 0 16px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #374151;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          transition: all 0.2s ease;
        }

        .social-icon:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          color: #111827;
        }

        /* Stats Bar */
        .stats-bar {
          display: flex;
          gap: 8px;
          padding: 10px;
          background: linear-gradient(to bottom, #FFFFFF, #F9FAFB);
          border-radius: 20px;
          margin: 0 16px 20px 16px;
          box-shadow:
            0 4px 16px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .stats-bar .stat {
          flex: 1;
          text-align: center;
          padding: 10px 8px;
          background: white;
          border-radius: 12px;
          box-shadow:
            0 2px 8px rgba(0, 0, 0, 0.04),
            inset 0 -1px 2px rgba(0, 0, 0, 0.02);
        }

        .stats-bar .stat-value {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.3px;
          margin-bottom: 2px;
        }

        .stats-bar .stat-label {
          font-size: 8px;
          font-weight: 600;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        /* Filters */
        .filters {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          padding: 0 16px;
        }

        .filter-btn {
          padding: 12px 18px;
          border-radius: 14px;
          border: none;
          background: white;
          font-size: 14px;
          font-weight: 600;
          color: #6B7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          background: #374151;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(55, 65, 81, 0.15);
        }

        .filter-btn.active {
          background: #374151;
          color: white;
          box-shadow: 0 4px 16px rgba(55, 65, 81, 0.25);
        }

        .count {
          padding: 3px 9px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
        }

        .filter-btn.active .count,
        .filter-btn:hover .count {
          background: rgba(255, 255, 255, 0.25);
          color: white;
        }

        .filter-btn:not(.active):not(:hover) .count {
          background: #F3F4F6;
          color: #6B7280;
        }

        /* Suggest Topic FAB */
        .fab {
          position: fixed;
          bottom: 32px;
          left: 16px;
          right: 16px;
          max-width: 398px;
          margin: 0 auto;
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

        /* Responsive */
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

import React from 'react';
import { useTranslation } from 'react-i18next';

const Mission = () => {
  const { t } = useTranslation();
  return (
    <section id="initiative" className="initiative-section section-padding">
      <div className="container">
        <div className="mission-grid-3">
          <div className="mission-item fade-in" style={{ '--item-accent': 'var(--gt-cyan)' }}>
            <div className="mission-number" style={{ color: 'var(--gt-cyan)' }}>01</div>
            <div className="mission-box glass">
              <div className="mission-icon-3">✨</div>
              <h3>{t('mission_title_1')}</h3>
              <p>{t('mission_text_1')}</p>
            </div>
          </div>

          <div className="mission-item featured fade-in" style={{ animationDelay: '0.2s', '--item-accent': 'var(--gv-red)' }}>
            <div className="mission-number" style={{ color: 'var(--gv-red)' }}>02</div>
            <div className="mission-box glass">
              <div className="mission-icon-3">🧡</div>
              <h3>{t('mission_title_2')}</h3>
              <p>{t('mission_text_2')}</p>
            </div>
          </div>

          <div className="mission-item fade-in" style={{ animationDelay: '0.4s', '--item-accent': 'var(--gte-orange)' }}>
            <div className="mission-number" style={{ color: 'var(--gte-orange)' }}>03</div>
            <div className="mission-box glass">
              <div className="mission-icon-3">🚀</div>
              <h3>{t('mission_title_3')}</h3>
              <p>{t('mission_text_3')}</p>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .mission-overhaul {
          position: relative;
          background: var(--bg);
          overflow: hidden;
        }
        .mission-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          position: relative;
          z-index: 1;
        }
        .mission-item {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .mission-item.featured {
          transform: translateY(60px);
        }
        .mission-number {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-style: italic;
          color: var(--primary);
          opacity: 0.3;
        }
        .mission-box {
          padding: 4rem 3rem;
          border-radius: 40px;
          height: 100%;
          transition: var(--transition);
        }
        .mission-box:hover {
          transform: translateY(-15px);
          background: var(--white);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-light);
        }
        .mission-icon-3 {
          font-size: 3.5rem;
          margin-bottom: 2.5rem;
        }
        .mission-box h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: var(--secondary);
          letter-spacing: -0.02em;
        }
        .mission-box p {
          color: var(--text-light);
          font-size: 1.05rem;
          line-height: 1.8;
        }

        @media (max-width: 1100px) {
          .mission-grid-3 {
            grid-template-columns: 1fr;
            gap: 6rem;
          }
          .mission-item.featured { transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default Mission;

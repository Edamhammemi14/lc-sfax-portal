import React from 'react';
import { useTranslation } from 'react-i18next';

const SfaxStory = () => {
  const { t } = useTranslation();
  return (
    <section id="sfax" className="sfax-overhaul section-padding">
      <div className="container">
        <div className="sfax-grid-3">
          <div className="sfax-text-content fade-in">
            <div className="artistic-title-wrapper fade-in">
              <div className="tagline">{t('sfax_story_tagline')}</div>
              <h1 className="title-main artistic-type">
                <span className="type-row">{t('sfax_story_title_1')}</span>
                <span className="type-row accent-serif">{t('sfax_story_title_2')}</span>
              </h1>
            </div>
            
            <p className="subtitle fade-in" style={{ animationDelay: '0.2s' }}>{t('sfax_story_subtitle')}</p>
            
            <div className="sfax-features fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="sfax-stat artistic-stat">
                <div className="stat-icon">🏛️</div>
                <div className="stat-info">
                  <span className="stat-number">{t('sfax_stat_1_val')}</span>
                  <p>{t('sfax_stat_1_label')}</p>
                </div>
              </div>
              <div className="sfax-stat artistic-stat">
                <div className="stat-icon">⚓</div>
                <div className="stat-info">
                  <span className="stat-number">{t('sfax_stat_2_val')}</span>
                  <p>{t('sfax_stat_2_label')}</p>
                </div>
              </div>
            </div>
            
            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="/projects" className="btn btn-primary artistic-btn">{t('sfax_btn_projects')}</a>
            </div>
          </div>

          <div className="sfax-visual-video-container fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="video-decoration bg-shape-1"></div>
            <div className="video-decoration bg-shape-2"></div>
            <div className="video-decoration bg-shape-3"></div>
            
            <div className="sfax-visual-video glass">
              {/* Cinematic Viewfinder Overlay */}
              <div className="viewfinder-overlay">
                <div className="vf-corner tl"></div>
                <div className="vf-corner tr"></div>
                <div className="vf-corner bl"></div>
                <div className="vf-corner br"></div>
                <div className="vf-rec-box">
                  <div className="rec-dot"></div>
                  <span>REC</span>
                </div>
                <div className="vf-center-cross"></div>
              </div>

              <div className="video-frame-overlay"></div>
              <video 
                src="/videos/sfax-promo.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="sfax-promo-vid"
              ></video>
              <div className="artistic-badge">
                <span>SCENE</span>
                <strong>01</strong>
              </div>
            </div>
            <div className="offset-border"></div>

            {/* Floating Info Cards */}
            <div className="floating-card info-1 glass fade-in">
              <strong>{t('sfax_card_1_title')}</strong>
              <span>{t('sfax_card_1_label')}</span>
            </div>
            <div className="floating-card info-2 glass fade-in">
              <strong>{t('sfax_card_2_title')}</strong>
              <span>{t('sfax_card_2_label')}</span>
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .sfax-overhaul {
          background-color: var(--white);
          position: relative;
          overflow: hidden;
        }
        .sfax-grid-3 {
          display: grid;
          grid-template-columns: 0.8fr 1.8fr; /* Much bigger video column */
          gap: 4rem;
          align-items: center;
        }
        .sfax-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin: 3rem 0;
        }
        .sfax-stat {
          padding-left: 1.5rem;
          border-left: 3px solid var(--primary-light);
        }
        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--secondary);
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .sfax-stat p {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-light);
        }

        /* Artistic Typography */
        .artistic-type {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .type-row {
          display: block;
        }
        .accent-serif {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.1em;
          padding-left: 10%;
          color: var(--primary);
        }

        .sfax-promo-vid {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 40px;
        }

        .artistic-stat {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem;
          border-radius: 20px;
          background: rgba(var(--p-h), var(--p-s), var(--p-l), 0.02);
          border: 1px solid rgba(var(--p-h), var(--p-s), var(--p-l), 0.05);
        }
        .stat-icon {
          font-size: 2rem;
          background: var(--white);
          width: 60px; height: 60px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 15px;
          box-shadow: var(--shadow-sm);
        }
        .stat-info .stat-number { margin-bottom: 0; }

        .artistic-btn {
          margin-top: 1rem;
          position: relative;
          overflow: hidden;
        }
        .artistic-btn::after {
          content: ''; position: absolute; top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: rotate(45deg);
          animation: btnShine 3s infinite;
        }
        @keyframes btnShine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }

        .sfax-visual-video-container {
          position: relative;
          width: 100%;
          padding: 2rem;
          perspective: 1000px;
        }

        .video-decoration {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          z-index: 0;
          opacity: 0.6;
          animation: floatBlob 10s infinite alternate ease-in-out;
        }

        .bg-shape-1 {
          top: -10%; left: -10%;
          width: 300px; height: 300px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
        }

        .bg-shape-2 {
          bottom: -10%; right: -10%;
          width: 250px; height: 250px;
          background: linear-gradient(135deg, var(--accent), var(--secondary));
          animation-delay: -5s;
        }

        .bg-shape-3 {
          top: 40%; left: 50%;
          width: 400px; height: 400px;
          background: radial-gradient(circle, var(--primary-light), transparent);
          filter: blur(100px);
          opacity: 0.3;
          animation-delay: -2s;
        }

        @keyframes floatBlob {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.15); }
          100% { transform: translate(-30px, 50px) scale(0.9); }
        }

        /* Viewfinder Styling */
        .viewfinder-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          padding: 40px;
          z-index: 12;
          pointer-events: none;
        }
        .vf-corner {
          position: absolute;
          width: 30px; height: 30px;
          border: 2px solid rgba(255,255,255,0.4);
        }
        .vf-corner.tl { top: 40px; left: 40px; border-right: 0; border-bottom: 0; }
        .vf-corner.tr { top: 40px; right: 40px; border-left: 0; border-bottom: 0; }
        .vf-corner.bl { bottom: 40px; left: 40px; border-right: 0; border-top: 0; }
        .vf-corner.br { bottom: 40px; right: 40px; border-left: 0; border-top: 0; }
        
        .vf-rec-box {
          position: absolute;
          top: 45px; right: 80px;
          display: flex; align-items: center; gap: 10px;
          color: white; font-size: 0.8rem; font-weight: 700; letter-spacing: 2px;
        }
        .rec-dot {
          width: 10px; height: 10px; background: #ff4d4d; border-radius: 50%;
          animation: blink 1s infinite;
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .vf-center-cross {
          position: absolute;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 20px; height: 20px;
          opacity: 0.3;
        }
        .vf-center-cross::before, .vf-center-cross::after {
          content: ''; position: absolute; background: white;
        }
        .vf-center-cross::before { width: 100%; height: 1px; top: 50%; }
        .vf-center-cross::after { height: 100%; width: 1px; left: 50%; }

        .sfax-visual-video {
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.3);
          background-color: #000;
          display: block; /* changed from flex */
          position: relative;
          z-index: 2;
          aspect-ratio: 16/9; /* enforce cinematic wide ratio */
          transform: rotateY(-10deg) rotateX(5deg) scale(0.95);
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .sfax-visual-video-container:hover .sfax-visual-video {
          transform: rotateY(0deg) rotateX(0deg) scale(1.02);
        }

        .opp-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          min-height: 520px; /* Bigger cards */
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .floating-card {
          position: absolute;
          padding: 1.5rem;
          border-radius: 20px;
          z-index: 20;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          animation: float 6s infinite ease-in-out;
        }
        .info-1 { top: 10%; right: -10%; animation-delay: -1s; }
        .info-2 { bottom: 15%; left: -8%; animation-delay: -3s; }
        
        .floating-card strong { color: var(--secondary); font-size: 0.9rem; }
        .floating-card span { color: var(--text-light); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 1100px) {
          .sfax-grid-3 {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .sfax-visual-video { transform: none; }
          .offset-border { height: 400px; display: none; }
          .sfax-visual-video-container { padding: 0; }
          .floating-card { display: none; }
          .accent-serif { padding-left: 0; }
        }
      `}} />
    </section>
  );
};

export default SfaxStory;

import React from 'react';
import { useTranslation } from 'react-i18next';

const TunisiaExperience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="experience-overhaul section-padding">
      <div className="experience-cinematic">
        <div className="experience-video-bg">
          <video src="/videos/discover-tunisia.mp4" autoPlay loop muted playsInline></video>
          <div className="video-overlay-3"></div>
        </div>
        
        <div className="container experience-content-3">
          <div className="cinema-header fade-in">
            <div className="tagline">{t('exp_tagline')}</div>
            <h2 className="title-main text-white">{t('exp_title_1')} <span className="highlight">{t('exp_title_2')}</span></h2>
            <p className="subtitle text-white">{t('exp_subtitle')}</p>
          </div>
        </div>
      </div>

      <div className="experience-guides section-padding">
        <div className="container">
          <div className="guide-grid-3">
            <div className="guide-info-text fade-in">
              <h3>{t('exp_guides_title')}</h3>
              <p>{t('exp_guides_text')}</p>
            </div>
            
            <div className="guide-card-container fade-in">
              <a href="/docs/Safety_booklet_Tunisia.pdf" target="_blank" className="guide-card glass">
                <div className="guide-icon-3">🛡️</div>
                <div className="guide-details">
                  <h4>{t('exp_guide_1_name')}</h4>
                  <span>{t('exp_guide_1_desc')}</span>
                </div>
                <div className="download-arrow">↓</div>
              </a>
              <a href="/docs/Arrival_Booklet_Sfax.pdf" target="_blank" className="guide-card glass">
                <div className="guide-icon-3">✈️</div>
                <div className="guide-details">
                  <h4>{t('exp_guide_2_name')}</h4>
                  <span>{t('exp_guide_2_desc')}</span>
                </div>
                <div className="download-arrow">↓</div>
              </a>
            </div>
          </div>
          
          <div className="experience-video-grid fade-in">
            <div className="highlight-video-card glass">
              <video src="/videos/safety-review.mp4" controls poster="/projects/14.png"></video>
              <div className="v-label">{t('exp_video_label_1')}</div>
            </div>
            <div className="highlight-video-card glass">
              <video src="/videos/visit-tunisia.mp4" controls poster="/projects/15.png"></video>
              <div className="v-label">{t('exp_video_label_2')}</div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .experience-overhaul {
          padding: 0;
          background-color: var(--secondary);
        }
        .experience-cinematic {
          height: 80vh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .experience-video-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 0;
        }
        .experience-video-bg video {
          width: 100%; height: 100%; object-fit: cover;
        }
        .video-overlay-3 {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), var(--secondary));
        }
        .experience-content-3 {
          position: relative;
          z-index: 10;
          text-align: center;
        }
        .text-white { color: var(--white) !important; }
        .cinema-header .subtitle { margin: 1.5rem auto 0; }

        .experience-guides {
          background-color: var(--secondary);
          color: var(--white);
        }
        .guide-grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          margin-bottom: 8rem;
        }
        .guide-info-text h3 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 2rem;
          line-height: 1;
        }
        .guide-info-text p {
          color: rgba(255,255,255,0.7);
          font-size: 1.2rem;
          max-width: 400px;
        }
        .guide-card-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .guide-card {
           background: rgba(255, 255, 255, 0.05);
           backdrop-filter: blur(10px);
           border: 1px solid rgba(255, 255, 255, 0.1);
           display: flex;
           align-items: center;
           padding: 2.5rem;
           border-radius: 24px;
           color: var(--white);
           transition: var(--transition);
           text-decoration: none;
        }
        .guide-card:hover {
          background: rgba(255,255,255,0.15);
          transform: translateX(10px);
        }
        .guide-icon-3 { font-size: 3rem; margin-right: 2rem; }
        .guide-details h4 { font-size: 1.5rem; margin-bottom: 0.3rem; margin-top: 0; }
        .guide-details span { font-size: 0.85rem; opacity: 0.6; text-transform: uppercase; letter-spacing: 1.5px; }
        .download-arrow { margin-left: auto; font-size: 2rem; opacity: 0.5; }

        .experience-video-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .highlight-video-card {
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .highlight-video-card video {
          width: 100%;
          border-radius: 24px;
          display: block;
        }
        .v-label {
          padding: 1.5rem;
          text-align: center;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--white);
          opacity: 0.8;
        }

        @media (max-width: 968px) {
          .guide-grid-3 { grid-template-columns: 1fr; gap: 4rem; }
          .experience-video-grid { grid-template-columns: 1fr; }
          .guide-info-text h3 { font-size: 3rem; }
          .guide-card { padding: 1.5rem; }
        }
      `}} />
    </section>
  );
};

export default TunisiaExperience;

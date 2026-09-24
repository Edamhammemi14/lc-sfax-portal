import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero">
      <div className="hero-video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
          src="/videos/discover-tunisia.mp4"
        ></video>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-main">
          <h1 className="hero-title fade-in">
            {t('hero_title_1')}<br />
            <span className="highlight">{t('hero_title_2')}</span>
          </h1>


        </div>


      </div>



      <style dangerouslySetInnerHTML={{ __html: `
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: var(--white);
          overflow: hidden;
        }
        .hero-video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.85);
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top, 
            rgba(var(--s-h), var(--s-s), var(--s-l), 0.9) 0%, 
            rgba(var(--p-h), var(--p-s), var(--p-l), 0.3) 100%
          );
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .hero-main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-title {
          font-size: clamp(3.5rem, 10vw, 7.5rem);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.05em;
          margin-bottom: 2.5rem;
        }
        
        .hero-actions {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 968px) {
          .hero-content {
            padding-top: 80px;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;

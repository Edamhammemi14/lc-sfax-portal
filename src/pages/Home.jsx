import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';


const Home = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Hero />
      
      {/* My LC Section */}
      <section className="my-lc-section section-padding">
        <div className="container">
          <div className="my-lc-grid">
            {/* Text Side */}
            <div className="my-lc-text fade-in">
              <div className="tagline">{t('lc_tagline')}</div>
              <h2 className="title-main">
                <span className="highlight">{t('lc_title')}</span>
              </h2>
              <p className="subtitle">
                {t('lc_description')}
              </p>
            </div>

            {/* Video Side */}
            <div className="my-lc-video-wrap fade-in">
              <div className="lc-video-frame">
                <img
                  src="/lc-sfax-team.jpeg"
                  alt="LC Sfax Team"
                  className="lc-video"
                />
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .my-lc-section {
            background: var(--bg);
            position: relative;
            overflow: hidden;
          }
          .my-lc-grid {
            display: grid;
            grid-template-columns: 1fr 1.3fr;
            gap: 5rem;
            align-items: center;
          }
          .my-lc-text .subtitle {
            text-align: left;
            max-width: 100%;
            margin-top: 1.5rem;
            line-height: 1.8;
          }

          .my-lc-video-wrap {
            position: relative;
          }
          .lc-video-frame {
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 30px 80px rgba(0,0,0,0.15);
            background: #000;
            position: relative;
          }
          .lc-video-frame::before {
            content: '';
            position: absolute;
            top: -3px; left: -3px;
            width: calc(100% + 6px);
            height: calc(100% + 6px);
            border-radius: 26px;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            z-index: -1;
          }
          .lc-video {
            width: 100%;
            aspect-ratio: 16/9;
            object-fit: cover;
            display: block;
            border-radius: 24px;
          }

          @media (max-width: 900px) {
            .my-lc-grid {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
          }
        `}} />
      </section>


    </main>
  );
};

export default Home;

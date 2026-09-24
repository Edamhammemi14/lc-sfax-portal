import React from 'react';
import { useTranslation } from 'react-i18next';
import SfaxStory from '../components/SfaxStory';

const Sfax = () => {
  const { t } = useTranslation();
  const videos = [
    { src: "/videos/discover-tunisia.mp4", title: "Discover Tunisia" },
    { src: "/videos/safety-review.mp4", title: "Safety Review & Experience" },
    { src: "/videos/sfax-promo.mp4", title: "Sfax City & Culture Promo" },
    { src: "/videos/solo-travel.mp4", title: "Solo Traveling to Tunisia" },
    { src: "/videos/visit-tunisia.mp4", title: "Visit Tunisia & Mediterranean Sea" }
  ];

  return (
    <main style={{ paddingTop: '80px' }}>
      <SfaxStory />
      
      <section className="video-gallery-alt section-padding">
        <div className="container">
          <div className="title-stack text-center fade-in">
            <div className="artistic-tag">{t('sfax_tagline')}</div>
            <h2 className="title-main artistic-type">
              <span className="type-row">{t('sfax_title')}</span>
            </h2>
            <p className="subtitle" style={{ margin: '0 auto' }}>{t('sfax_subtitle')}</p>
          </div>

          <div className="artistic-video-grid">
            {videos.map((video, index) => (
              <div 
                key={index} 
                className="artistic-video-card glass fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="video-inner">
                  <div className="video-loader"></div>
                  <video 
                    src={video.src} 
                    controls 
                    loading="lazy"
                    className="gallery-vid"
                  ></video>
                  <div className="video-hover-overlay">
                    <div className="play-icon-box">▶</div>
                  </div>
                </div>
                <div className="artistic-video-info">
                  <div className="vid-meta">
                    <span className="vid-tag">ARCHIVE {(index + 1).toString().padStart(2, '0')}</span>
                    <span className="vid-duration">00:00:{(((index * 7 + 13) % 40) + 15).toString().padStart(2, '0')}</span>
                  </div>
                  <h4>{video.title}</h4>
                  <div className="artistic-barcode"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .video-gallery-alt {
            position: relative;
            background: transparent;
          }
          .artistic-tag {
            font-size: 0.7rem;
            font-weight: 800;
            letter-spacing: 4px;
            color: var(--primary);
            margin-bottom: 1rem;
          }
          .artistic-video-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 3rem;
            margin-top: 5rem;
          }
          .artistic-video-card {
            position: relative;
            background: var(--white);
            padding: 1rem 1rem 0 1rem;
            border-radius: 4px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            transform: translateY(0);
          }
          
          /* The 'Card' becomes a stylized frame */
          .artistic-video-card::before {
            content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 5px;
            background: linear-gradient(90deg, var(--primary), var(--accent));
          }

          .artistic-video-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          }

          .video-inner {
            position: relative;
            width: 100%;
            background: #000;
            aspect-ratio: 16/9;
            border-radius: 2px;
            overflow: hidden;
          }
          .gallery-vid {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(100%) contrast(1.1);
            transition: var(--transition);
          }
          .artistic-video-card:hover .gallery-vid {
            filter: grayscale(0%) contrast(1.05);
            transform: scale(1.03);
          }
          
          .video-hover-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(var(--s-h), var(--s-s), var(--s-l), 0.4);
            display: flex; align-items: center; justify-content: center;
            opacity: 1; transition: var(--transition);
            pointer-events: none;
          }
          .artistic-video-card:hover .video-hover-overlay {
            opacity: 0;
          }
          
          .play-icon-box {
            width: 70px; height: 70px;
            border: 1px solid rgba(255,255,255,0.6);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.5rem; color: var(--white);
            backdrop-filter: blur(5px);
            transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .play-icon-box::before {
            content: ''; position: absolute; top: -5px; left: -5px; width: calc(100% + 10px); height: calc(100% + 10px);
            border: 1px dashed rgba(255,255,255,0.5); border-radius: 50%;
            animation: spin 10s linear infinite;
          }
          @keyframes spin { 100% { transform: rotate(360deg); } }

          .artistic-video-info {
            padding: 1.5rem 0.5rem;
          }
          .vid-meta {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 0.5rem; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 0.5rem;
          }
          .vid-tag {
            font-family: 'Playfair Display', serif;
            font-size: 0.75rem;
            font-style: italic;
            font-weight: 700;
            color: var(--primary);
          }
          .vid-duration {
            font-family: monospace;
            font-size: 0.7rem;
            color: var(--text-light);
            letter-spacing: 1px;
          }
          .artistic-video-info h4 {
            font-size: 1.1rem;
            font-weight: 800;
            margin-top: 0.5rem;
            color: var(--secondary);
            line-height: 1.4;
          }
          .artistic-barcode {
            margin-top: 1rem;
            height: 20px;
            background-image: repeating-linear-gradient(to right, 
              var(--text-light) 0, var(--text-light) 2px, 
              transparent 2px, transparent 5px, 
              var(--text-light) 5px, var(--text-light) 6px,
              transparent 6px, transparent 10px);
            opacity: 0.2;
            width: 60%;
          }

          @media (max-width: 768px) {
            .artistic-video-grid { grid-template-columns: 1fr; }
          }
        `}} />
      </section>
    </main>
  );
};

export default Sfax;

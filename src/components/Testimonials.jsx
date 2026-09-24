import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonial-overhaul section-padding">
      <div className="container">
        <div className="section-header fade-in text-center">
          <div className="tagline">The LC Sfax Legacy</div>
          <h2 className="title-main">Human <span className="highlight">Impact</span></h2>
        </div>

        <div className="spotlight-grid-3">
          <div className="spotlight-main fade-in">
            <div className="cinema-frame glass">
              <div className="video-player">
                <video src="/videos/sfax-promo.mp4" controls poster="/projects/16.png"></video>
              </div>
              <div className="cinema-label">
                <h4>Spotlight: Assia's Journey</h4>
                <p>"An experience that redefined my perspective on global leadership."</p>
              </div>
            </div>
          </div>

          <div className="spotlight-sidebar fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="story-card glass">
              <div className="quote">"Sfax felt like home from day one. The LC Sfax team is family."</div>
              <div className="author">
                <strong>John D.</strong>
                <span>Volunteer 2023</span>
              </div>
            </div>
            <div className="story-card glass highlighted">
              <div className="quote">"The safest and most organized exchange I've ever been part of."</div>
              <div className="author">
                <strong>Sara L.</strong>
                <span>Global Talent 2024</span>
              </div>
            </div>
            <div className="story-card glass">
              <div className="quote">"Sfax bridges cultures in a way words cannot describe."</div>
              <div className="author">
                <strong>Ahmed K.</strong>
                <span>Sfax Local Host</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonial-overhaul {
          background-color: var(--bg);
        }
        .spotlight-grid-3 {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          margin-top: 5rem;
          align-items: start;
        }
        .cinema-frame {
          padding: 1.5rem;
          border-radius: 40px;
          box-shadow: var(--shadow-lg);
          background: var(--white);
        }
        .video-player {
          width: 100%;
          border-radius: 28px;
          overflow: hidden;
          background: black;
          aspect-ratio: 16/9;
        }
        .video-player video {
          width: 100%;
          height: 100%;
        }
        .cinema-label {
          padding: 2.5rem 1rem 1rem;
        }
        .cinema-label h4 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: var(--secondary);
        }
        .cinema-label p {
          font-style: italic;
          color: var(--primary);
          font-size: 1.1rem;
        }

        .spotlight-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .story-card {
          padding: 2.5rem;
          border-radius: 32px;
          transition: var(--transition);
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: var(--shadow-md);
        }
        .story-card.highlighted {
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: var(--white);
        }
        .story-card.highlighted .author span { color: rgba(255,255,255,0.7); }
        
        .quote {
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .author strong {
          display: block;
          font-size: 1.1rem;
        }
        .author span {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-light);
        }

        .story-card:hover {
          transform: scale(1.03);
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 1100px) {
          .spotlight-grid-3 { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default Testimonials;

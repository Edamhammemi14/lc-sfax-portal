import React from 'react';

const Editorial = () => {
  return (
    <section id="insights" className="editorial-section section-padding">
      <div className="container">
        <div className="editorial-grid-3">
          <div className="editorial-main fade-in">
            <div className="editorial-tag">The Insider Perspective</div>
            <h2 className="title-main">Living Sfax: <br />Beyond the <span className="highlight">Posters</span></h2>
            
            <div className="editorial-content-box glass">
              <div className="editorial-header-info">
                <span className="p-badge">Project Spotlight</span>
                <h3>The "Safe City" Philosophy</h3>
              </div>
              <p>
                At LC Sfax, your safety is our priority. Our <strong>"Sfax Safety Protocol"</strong> ensures a gold standard in participant protection, from the Medina to the Startup Hub. You are part of a global story waiting to be written.
              </p>
              <div className="editorial-footer">
                <div className="author-row">
                  <div className="author-circle">M</div>
                  <div className="author-meta">
                    <strong>Mahsouna</strong>
                    <span>President, LC Sfax</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="editorial-side fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mini-card-3 glass">
              <div className="mini-icon">📖</div>
              <h4>Official Guides</h4>
              <p>Download our 2024 Safety & Logistics handbooks.</p>
              <a href="#experience" className="btn btn-sm btn-primary">Download Docs</a>
            </div>
            <div className="mini-card-3 glass highlighted">
              <div className="mini-icon">🌍</div>
              <h4>Global Impact</h4>
              <p>17 SDGs, 1 goal: A better world through Sfax.</p>
              <a href="#projects" className="btn btn-sm btn-secondary-white">View Map</a>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .editorial-section {
          background-color: var(--white);
          position: relative;
        }
        .editorial-grid-3 {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 6rem;
          align-items: start;
        }
        .editorial-tag {
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        .editorial-content-box {
          margin-top: 4rem;
          padding: 5rem;
          border-radius: 48px;
          position: relative;
          background: rgba(255, 255, 255, 0.4);
        }
        .editorial-header-info { margin-bottom: 2.5rem; }
        .p-badge {
          background: var(--primary-light);
          color: var(--primary);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 1rem;
        }
        .editorial-header-info h3 { font-size: 2.2rem; font-weight: 800; color: var(--secondary); }
        .editorial-content-box p {
          font-size: 1.15rem;
          line-height: 1.9;
          color: var(--text-light);
          margin-bottom: 2rem;
        }
        .editorial-footer { margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(0,0,0,0.05); }
        .author-row { display: flex; align-items: center; gap: 1.5rem; }
        .author-circle { width: 45px; height: 45px; border-radius: 50%; background: var(--secondary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; }
        .author-meta strong { display: block; font-size: 1rem; }
        .author-meta span { font-size: 0.8rem; opacity: 0.6; text-transform: uppercase; letter-spacing: 1px; }

        .editorial-side { display: flex; flex-direction: column; gap: 2rem; }
        .mini-card-3 { padding: 3rem; border-radius: 32px; transition: var(--transition); border: 1px solid rgba(0,0,0,0.03); }
        .mini-card-3.highlighted { background: var(--secondary); color: var(--white); }
        .mini-card-3 h4 { font-size: 1.4rem; font-weight: 800; margin: 1.5rem 0 0.5rem; }
        .mini-card-3 p { font-size: 0.95rem; opacity: 0.8; margin-bottom: 2rem; line-height: 1.5; }
        .mini-icon { font-size: 2.5rem; }

        @media (max-width: 968px) {
          .editorial-grid-3 { grid-template-columns: 1fr; gap: 4rem; }
          .editorial-content-box { padding: 3rem; }
        }
      `}} />
    </section>
  );
};

export default Editorial;

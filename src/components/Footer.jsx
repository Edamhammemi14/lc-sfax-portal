import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-overhaul">
      <div className="container">
        <div className="footer-credits-top fade-in">
          <a href="https://www.instagram.com/im.dm.sfax/?hl=fr" target="_blank" rel="noopener noreferrer" className="footer-credits-minimal">
            <span>Created by IM&DM SFAX</span>
            <img src="/flex-logo.png" alt="IM&DM Logo" className="flex-logo-minimal" />
          </a>
        </div>
        <div className="footer-grid-3">
          <div className="footer-brand fade-in">
            <div className="f-logo">
              <img src="/lc-sfax-logo.png" alt="LC Sfax Logo" />
              <span>Exchange Portal</span>
            </div>
            <p className="f-desc">Empowering the youth of Sfax through international exchange and professional growth.</p>
          </div>

          <div className="footer-links-3 fade-in" style={{ animationDelay: '0.1s' }}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/sfax">The Sfax Story</a></li>


            </ul>
          </div>

          <div className="footer-resources-3 fade-in" style={{ animationDelay: '0.2s' }}>
            <h4>Participant Desk</h4>
            <ul>
              <li><a href="/booklets/Safety Booklet iGV Tunisia.pdf" target="_blank">Safety Protocol</a></li>
              <li><a href="/booklets/Arrival Pick-Up Booklet.pdf" target="_blank">Arrival Guide</a></li>
              <li><a href="/contact">Contact Support</a></li>
            </ul>
          </div>

          <div className="footer-social-3 fade-in" style={{ animationDelay: '0.3s' }}>
            <h4>Follow LC Sfax</h4>
            <div className="social-row">
              <a href="https://www.instagram.com/eb_sfax/?hl=fr" target="_blank" rel="noopener noreferrer" className="social-icon-box">IG</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} LC Sfax • Exchange Portal. All rights reserved. 
            <span className="footer-divider">|</span>
            <a href="https://www.instagram.com/edamhammami9/?hl=fr" target="_blank" rel="noopener noreferrer" className="dev-credit">Developed by Edam Hammami</a>
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-overhaul {
          background-color: var(--secondary);
          color: var(--white);
          padding: 8rem 0 4rem;
        }
        .footer-grid-3 {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 6rem;
        }
        .f-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 800;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }
        .f-logo img { width: 40px; }
        .f-desc { color: rgba(255,255,255,0.6); max-width: 300px; line-height: 1.8; margin-bottom: 2rem; }
        
        .footer-credits-top {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 5rem;
          padding-top: 2rem;
        }
        .footer-credits-minimal {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          text-decoration: none;
          color: rgba(255,255,255,0.8);
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          transition: var(--transition);
        }
        .footer-credits-minimal:hover {
          color: var(--white);
          transform: translateY(-2px);
          letter-spacing: 5px;
        }
        .flex-logo-minimal {
          height: 60px;
          opacity: 0.9;
          filter: brightness(1.2);
        }

        .footer-grid-3 h4 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--primary-light);
        }
        .footer-grid-3 ul { list-style: none; }
        .footer-grid-3 ul li { margin-bottom: 1rem; }
        .footer-grid-3 ul li a {
          color: rgba(255,255,255,0.7);
          transition: var(--transition);
          text-decoration: none;
        }
        .footer-grid-3 ul li a:hover { color: var(--white); transform: translateX(5px); }

        .social-row { display: flex; gap: 1rem; }
        .social-icon-box {
          width: 45px; height: 45px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 0.8rem;
          cursor: pointer; transition: var(--transition);
        }
        .social-icon-box:hover { background: var(--primary); transform: translateY(-5px); }

        .footer-bottom {
          padding-top: 4rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          text-align: center;
          color: rgba(255,255,255,0.4);
          font-size: 0.9rem;
        }
        .footer-divider {
          margin: 0 1rem;
          opacity: 0.3;
        }
        .dev-credit {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: var(--transition);
          font-weight: 600;
        }
        .dev-credit:hover {
          color: var(--primary-light);
          opacity: 1;
        }

        @media (max-width: 1100px) {
          .footer-grid-3 { grid-template-columns: repeat(2, 1fr); gap: 4rem; }
        }
        @media (max-width: 600px) {
          .footer-grid-3 { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 2rem; }
        }
      `}} />
    </footer>
  );
};

export default Footer;

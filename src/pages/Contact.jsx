import React from 'react';
import { useTranslation } from 'react-i18next';

const teamMembers = [
  {
    name: "Mahsouna Drira",
    role: "LCVP iGV",
    image: "/team/mahsouna-drira.png"
  },
  {
    name: "Mohamed Masmoudi",
    role: "TL CXP",
    image: "/team/mohamed-masmoudi.png"
  }
];

const igtMembers = [
  {
    name: "Amal Sadouli",
    role: "LCVP iGT",
    image: "/team/amal-sadouli.png"
  },
  {
    name: "Amine Kharrat",
    role: "TL Sales & CXP",
    image: "/team/amine-kharrat.png"
  }
];

const Contact = () => {
  const { t } = useTranslation();
  return (
    <main className="contact-page">
      <div className="container contact-container">
        {/* Left Sidebar Info */}
        <div className="contact-sidebar fade-in">
          <div className="sidebar-card glass">
            <div className="featured-image-wrap" style={{ height: 'auto' }}>
              <img src="/team/igv-core.png" alt="IGV Core Team" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div className="riseup-overlay">
                <span>M A R M O U D</span>
              </div>
            </div>
            
            <div className="sidebar-content">
              <div className="igv-branding">
                <h1 className="igv-logo-text">iGV</h1>
                <p className="igv-tagline">{t('contact_igv_tagline')}</p>
              </div>
              
              <div className="sidebar-desc">
                <p>{t('contact_igv_desc')}</p>
              </div>
              
              <div className="sidebar-cta">
                <a href="mailto:volunteerwithsfax@gmail.com" className="btn btn-primary w-100">{t('contact_btn_email')}</a>
              </div>
            </div>
          </div>

          <div className="sidebar-card glass igt-sidebar-card">
            <div className="featured-image-wrap" style={{ height: 'auto' }}>
              <img src="/team/igt-core.png" alt="IGT Core Team" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div className="riseup-overlay" style={{ background: 'linear-gradient(to top, var(--primary) 0%, transparent 70%)' }}>
                <span>A H J I N</span>
              </div>
            </div>
            
            <div className="sidebar-content">
              <div className="igv-branding">
                <h1 className="igv-logo-text" style={{ color: 'var(--secondary)' }}>iGT</h1>
                <p className="igv-tagline">{t('contact_igt_tagline')}</p>
              </div>
              
              <div className="sidebar-desc">
                <p>{t('contact_igt_desc')}</p>
              </div>
              
              <div className="sidebar-cta">
                <a href="mailto:sfax.igt@aiesec.org.tn" className="btn btn-secondary w-100">{t('contact_btn_partner')}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="contact-main">
          <header className="team-header fade-in">
            <h2 className="team-title">{t('contact_igv_core')}</h2>
            <div className="quote-box">
              <p>{t('contact_igv_quote')}</p>
            </div>
          </header>

          <div className="member-grid">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="member-card fade-in" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="member-image-wrap">
                  <div 
                    className="member-image" 
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <div className="image-overlay"></div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <header className="team-header fade-in" style={{ marginTop: '6rem' }}>
            <h2 className="team-title">{t('contact_igt_core')}</h2>
            <div className="quote-box" style={{ borderColor: 'var(--accent)' }}>
              <p>{t('contact_igt_quote')}</p>
            </div>
          </header>

          <div className="member-grid">
            {igtMembers.map((member, index) => (
              <div 
                key={index} 
                className="member-card fade-in" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="member-image-wrap">
                  <div 
                    className="member-image" 
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <div className="image-overlay"></div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-bottom-cta fade-in">
             <p>{t('contact_join_desc')}</p>
             <div className="social-links-minimal">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                <span>•</span>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                <span>•</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
             </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-page {
          padding-top: 120px;
          padding-bottom: 100px;
          background: var(--bg);
          min-height: 100vh;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* Sidebar Styles */
        .sidebar-card {
          border-radius: 24px;
          overflow: hidden;
          background: var(--white);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .featured-image-wrap {
          position: relative;
          height: 450px;
        }

        .featured-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .igt-sidebar-card {
           margin-top: 38rem;
        }

        .riseup-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--secondary) 0%, transparent 70%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 2rem;
        }

        .riseup-overlay span {
          font-size: 2.5rem;
          font-weight: 900;
          color: white;
          letter-spacing: 5px;
          text-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .sidebar-content {
          padding: 2.5rem;
        }

        .igv-logo-text {
          font-size: 3rem;
          font-weight: 900;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 0.2rem;
        }

        .igv-tagline {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--text-light);
          margin-bottom: 2rem;
        }

        .sidebar-desc p {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--text);
          margin-bottom: 2rem;
        }

        /* Main Content Styles */
        .team-header {
          margin-bottom: 4rem;
        }

        .team-title {
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -2px;
          margin-bottom: 1.5rem;
          color: var(--secondary);
        }

        .quote-box {
          position: relative;
          padding-left: 2rem;
          border-left: 4px solid var(--primary);
          max-width: 650px;
        }

        .quote-box p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--primary);
          font-weight: 500;
        }

        .arabic-quote {
          font-family: inherit;
          font-weight: 700;
          color: var(--primary);
        }

        /* Member Grid */
        .member-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2.5rem;
        }

        .member-card {
          text-align: center;
        }

        .member-image-wrap {
          position: relative;
          aspect-ratio: 3/4;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: var(--transition);
        }

        .member-card:hover .member-image-wrap {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .member-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .member-card:hover .member-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%);
          opacity: 0.3;
        }

        .member-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 0.3rem;
        }

        .member-role {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-light);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .contact-bottom-cta {
          margin-top: 6rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(0,0,0,0.05);
          text-align: center;
        }

        .contact-bottom-cta p {
          font-size: 1rem;
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }

        .social-links-minimal {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          align-items: center;
        }

        .social-links-minimal a {
          text-decoration: none;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .social-links-minimal a:hover {
          color: var(--secondary);
        }

        .social-links-minimal span {
          color: rgba(0,0,0,0.1);
        }

        @media (max-width: 1100px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .contact-sidebar {
            order: 2;
          }
          .contact-main {
            order: 1;
          }
          .team-title {
            font-size: 2.8rem;
          }
          .sidebar-card {
            max-width: 500px;
            margin: 0 auto;
          }
          .igt-sidebar-card {
            margin-top: 2rem;
          }
        }
      `}} />
    </main>
  );
};

export default Contact;

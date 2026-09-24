import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [opportunitiesOpen, setOpportunitiesOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      
      <nav className={`navbar ${scrolled ? 'glass scrolled' : ''}`}>
        <div className="container nav-content">
          <Link to="/" className="logo fade-in" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer', textDecoration: 'none' }}>
            <img src="/lc-sfax-logo.png" alt="LC Sfax Logo" className="logo-svg" />
            <div className="logo-text">
              <span className="brand">LC Sfax</span>
              <span className="sub-brand">Exchange Portal</span>
            </div>
          </Link>
          
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t('nav_home')}</Link></li>
            <li><Link to="/sfax" className={location.pathname === '/sfax' ? 'active' : ''}>{t('nav_stories')}</Link></li>
            
            <li 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setOpportunitiesOpen(true)}
              onMouseLeave={() => setOpportunitiesOpen(false)}
            >
              <Link to="/opportunities" className={`nav-dropdown-btn ${opportunitiesOpen ? 'active' : ''}`} style={{ textDecoration: 'none' }} onClick={() => setOpportunitiesOpen(false)}>
                {t('nav_opportunities')}
                <svg className={`chevron ${opportunitiesOpen ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
              </Link>
              
              <div className={`nav-dropdown-menu glass ${opportunitiesOpen ? 'show' : ''}`}>
                <Link to="/opportunities#volunteer" className="dropdown-item" onClick={() => setOpportunitiesOpen(false)}>
                  <div className="item-text">
                    <strong>Global Volunteer</strong>
                    <span>Social Impact Projects</span>
                  </div>
                </Link>
                <Link to="/opportunities#talent" className="dropdown-item" onClick={() => setOpportunitiesOpen(false)}>
                  <div className="item-text">
                    <strong>Global Talent</strong>
                    <span>Professional Internships</span>
                  </div>
                </Link>
                <Link to="/opportunities#teacher" className="dropdown-item" onClick={() => setOpportunitiesOpen(false)}>
                  <div className="item-text">
                    <strong>Global Teacher</strong>
                    <span>Education Opportunities</span>
                  </div>
                </Link>
              </div>
            </li>

            <li><Link to="/booklets" className={`booklets-nav-link ${location.pathname === '/booklets' ? 'active' : ''}`}>Booklets</Link></li>
            <li><Link to="/contact" className="btn btn-primary nav-btn">{t('nav_contact')}</Link></li>
          </ul>

          <div className="nav-extra">
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation menu">
              <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-links">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>{t('nav_home')}</Link></li>
            <li><Link to="/sfax" onClick={() => setMobileMenuOpen(false)}>{t('nav_stories')}</Link></li>
            <li><Link to="/opportunities" onClick={() => setMobileMenuOpen(false)}>{t('nav_opportunities')}</Link></li>
            <li><Link to="/booklets" onClick={() => setMobileMenuOpen(false)}>Booklets</Link></li>
            <li><Link to="/contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>{t('nav_contact')}</Link></li>
          </ul>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .scroll-progress-bar {
            position: fixed;
            top: 0; left: 0; height: 3.5px;
            background: linear-gradient(to right, var(--gv-red) 0%, var(--gte-orange) 50%, var(--gt-cyan) 100%);
            z-index: 10001;
            box-shadow: 0 0 12px var(--gt-cyan);
            transition: width 0.1s ease-out;
          }
          .navbar {
            position: fixed;
            top: 2rem;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 1300px;
            padding: 1rem 2.5rem;
            border-radius: 100px;
            z-index: 1000;
            transition: var(--transition);
          }
          .navbar.scrolled {
            top: 1rem;
            background: rgba(255, 255, 255, 0.88);
            backdrop-filter: blur(25px);
            box-shadow: var(--shadow-md);
            padding: 0.8rem 2.5rem;
          }
          .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 !important;
          }
          .logo { display: flex; align-items: center; gap: 1rem; }
          .logo-svg { width: 35px; }
          .logo-text { display: flex; flex-direction: column; line-height: 1; }
          .brand { font-size: 1.2rem; font-weight: 800; color: var(--secondary); }
          .sub-brand { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: var(--gt-cyan); }

          .nav-links { display: flex; align-items: center; gap: 3rem; list-style: none; }
          .nav-links li a {
            font-weight: 600; font-size: 0.95rem; color: var(--text-light);
            position: relative; transition: var(--transition);
          }
          .nav-links li a:hover, .nav-links li a.active { color: var(--secondary); }
          .nav-links li a.active::after {
            content: ''; position: absolute; bottom: -5px; left: 0;
            width: 100%; height: 2px; background: var(--gt-cyan);
          }

          /* Dropdown Styles */
          .nav-dropdown-wrapper {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .nav-dropdown-btn {
            background: none;
            border: none;
            font-family: inherit;
            font-weight: 600;
            font-size: 0.95rem;
            color: var(--text-light);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: var(--transition);
            padding: 0.5rem 0;
          }
          .nav-dropdown-btn:hover, .nav-dropdown-btn.active {
            color: var(--secondary);
          }
          .chevron {
            transition: transform 0.3s ease;
          }
          .chevron.rotated {
            transform: rotate(180deg);
          }

          .nav-dropdown-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            min-width: 280px;
            padding: 1rem;
            border-radius: 20px;
            opacity: 0;
            pointer-events: none;
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            box-shadow: var(--shadow-lg);
            border: 1px solid var(--glass-border);
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
          }
          .nav-dropdown-menu.show {
            opacity: 1;
            pointer-events: auto;
            transform: translateX(-50%) translateY(10px);
          }

          .dropdown-item {
            display: flex;
            align-items: center;
            padding: 0.8rem 1rem;
            border-radius: 12px;
            text-decoration: none;
            transition: var(--transition);
          }
          .dropdown-item:hover {
            background: rgba(12, 185, 193, 0.08);
          }
          .item-text {
            display: flex;
            flex-direction: column;
          }
          .item-text strong {
            color: var(--secondary);
            font-size: 0.9rem;
          }
          .item-text span {
            color: var(--text-light);
            font-size: 0.75rem;
          }

          .nav-extra { display: flex; align-items: center; }
          .nav-btn { padding: 0.8rem 2rem !important; color: white !important; font-size: 0.85rem !important; }

          .mobile-toggle { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; z-index: 1001; }
          .hamburger { display: block; width: 24px; height: 2px; background: var(--secondary); position: relative; transition: 0.3s; }
          .hamburger::before, .hamburger::after { content: ''; position: absolute; width: 100%; height: 2px; background: var(--secondary); transition: 0.3s; left: 0; }
          .hamburger::before { top: -8px; }
          .hamburger::after { bottom: -8px; }
          .hamburger.active { background: transparent; }
          .hamburger.active::before { top: 0; transform: rotate(45deg); }
          .hamburger.active::after { bottom: 0; transform: rotate(-45deg); }

          .mobile-menu {
            position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            z-index: 999;
            display: flex; align-items: center; justify-content: center;
            opacity: 0; pointer-events: none;
            transition: 0.4s ease-in-out;
          }
          .mobile-menu.open { opacity: 1; pointer-events: auto; }
          .mobile-links { list-style: none; text-align: center; display: flex; flex-direction: column; gap: 2rem; padding: 0; }
          .mobile-links li a { font-size: 1.5rem; font-weight: 700; color: var(--secondary); text-decoration: none; }

          @media (max-width: 1100px) {
            .nav-links { display: none; }
            .mobile-toggle { display: block; }
          }
          @media (max-width: 768px) {
            .navbar { width: 95%; padding: 0.8rem 1.5rem; }
            .logo-svg { width: 30px; }
            .brand { font-size: 1rem; }
            .sub-brand { font-size: 0.65rem; }
          }
        `}} />
      </nav>
    </>
  );
};

export default Navbar;

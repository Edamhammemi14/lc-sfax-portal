import React, { useState } from 'react';

const DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1BCa3nISuLer-iJlUqt4IcZAYR8ycslA-?usp=drive_link";

const Booklets = () => {
  const [activeTab, setActiveTab] = useState('all');

  const booklets = [
    {
      id: 'arrival',
      category: 'booklets',
      title: 'Arrival & Pick-Up Booklet',
      subtitle: 'Your First 48 Hours in Sfax',
      description: 'Comprehensive guide covering airport arrival protocols, transportation, currency exchange, local customs, SIM card setup, and first steps in Sfax.',
      file: '/booklets/Arrival Pick-Up Booklet.pdf',
      coverImage: '/booklets/arrival_cover.png',
      color: 'var(--gt-cyan)',
      icon: '✈️',
      pages: '12 Pages',
      tag: 'Essential Arrival Guide',
      fileSize: '25 MB'
    },
    {
      id: 'safety',
      category: 'booklets',
      title: 'Safety Booklet iGV Tunisia',
      subtitle: 'Official Protocol & Emergency Contacts',
      description: 'Official national security and safety manual containing 24/7 emergency numbers, health advice, hospital locations, local emergency protocols, and safety tips.',
      file: '/booklets/Safety Booklet iGV Tunisia.pdf',
      coverImage: '/booklets/safety_cover.png',
      color: 'var(--gv-red)',
      icon: '🛡️',
      pages: '20+ Pages',
      tag: 'Safety & Health Protocol',
      fileSize: '24 MB'
    }
  ];

  const attractionMaterials = [
    {
      id: 'attraction-26-27',
      category: 'attraction',
      title: 'Attraction Materials 26.27',
      subtitle: 'Volunteer Stories & Exchange Experiences',
      description: 'Authentic testimonials, participant experience stories, Assia’s Experience reels, and promotional materials from LC Sfax projects.',
      image: '/lc-sfax-team.jpeg',
      icon: '✨',
      badge: 'Experience Kit',
      format: 'Video Reels & Stories',
      color: 'var(--gte-orange)',
      link: DRIVE_FOLDER_URL,
      actionLabel: 'Open Material Kit'
    },
    {
      id: 'country-experience',
      category: 'attraction',
      title: 'Tunisia as a Country Experience Kit',
      subtitle: 'Heritage, Destinations & Culture',
      description: 'High-definition video library, Mediterranean coastlines, Sahara tours, Medina architectural walkthroughs, and authentic cultural showcases.',
      image: '/sfax-landing.png',
      icon: '🇹🇳',
      badge: 'Country Kit',
      format: '8+ HD Videos & Guides',
      color: 'var(--gv-red)',
      link: DRIVE_FOLDER_URL,
      actionLabel: 'Explore Country Kit'
    }
  ];

  const showBooklets = activeTab === 'all' || activeTab === 'booklets';
  const showAttraction = activeTab === 'all' || activeTab === 'attraction';

  return (
    <main className="booklets-page">
      {/* Header / Hero */}
      <section className="booklet-hero">
        <div className="container">
          <div className="hero-content-wrapper text-center fade-in">
            <div className="tagline">Resource Hub & Document Archive</div>
            <h1 className="title-main">
              Official <span className="highlight">Booklets & Materials</span>
            </h1>
            <p className="subtitle mx-auto">
              Everything you need for your exchange in Sfax: official orientation booklets, arrival guides, safety protocols, and promotional attraction materials.
            </p>

            {/* Quick Filter Navigation */}
            <div className="tab-filters-nav">
              <button 
                className={`tab-filter-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                <span>All Materials</span>
                <span className="count-pill">{booklets.length + attractionMaterials.length}</span>
              </button>
              <button 
                className={`tab-filter-btn ${activeTab === 'booklets' ? 'active' : ''}`}
                onClick={() => setActiveTab('booklets')}
              >
                <span>Official Booklets</span>
                <span className="count-pill">{booklets.length}</span>
              </button>
              <button 
                className={`tab-filter-btn ${activeTab === 'attraction' ? 'active' : ''}`}
                onClick={() => setActiveTab('attraction')}
              >
                <span>Attraction Materials</span>
                <span className="count-pill">{attractionMaterials.length}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Official Participant Booklets */}
      {showBooklets && (
        <section className="section-block container">
          <div className="section-header-modern fade-in">
            <div className="header-badge-wrap">
              <span className="section-badge-pill">📘 Document Center</span>
            </div>
            <div className="header-titles">
              <h2 className="section-title">Official Participant Booklets</h2>
              <p className="section-desc">Interactive live PDF previews, complete guides, and direct downloads for incoming participants.</p>
            </div>
          </div>

          <div className="booklet-grid-modern">
            {booklets.map((booklet, index) => (
              <div 
                key={booklet.id} 
                className="modern-booklet-card glass fade-in"
                style={{ animationDelay: `${index * 0.15}s`, '--accent-color': booklet.color }}
              >
                {/* Visual Preview Side */}
                <div className="booklet-visual-pane">
                  <div className="book-cover-card">
                    <img 
                      src={booklet.coverImage} 
                      alt={booklet.title} 
                      className="book-cover-img" 
                    />
                    <div className="book-spine-shine" />
                  </div>
                </div>

                {/* Details Side */}
                <div className="booklet-details-pane">
                  <div className="pane-top">
                    <div className="meta-badges">
                      <span className="pill-badge type-pdf">PDF Document</span>
                      <span 
                        className="pill-badge tag-highlight" 
                        style={{ 
                          backgroundColor: `${booklet.color}15`, 
                          color: booklet.color,
                          borderColor: `${booklet.color}30` 
                        }}
                      >
                        {booklet.tag}
                      </span>
                      <span className="pill-badge">{booklet.pages}</span>
                      <span className="pill-badge">{booklet.fileSize}</span>
                    </div>
                    <h3 className="card-title">{booklet.title}</h3>
                    <h4 className="card-subtitle">{booklet.subtitle}</h4>
                    <p className="card-desc">{booklet.description}</p>
                  </div>

                  <div className="pane-actions">
                    <a 
                      href={booklet.file} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-action btn-view"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      <span>Read Online</span>
                    </a>
                    <a 
                      href={booklet.file} 
                      download 
                      className="btn-action btn-download"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: Attraction Materials & Experience Kits */}
      {showAttraction && (
        <section className="section-block container">
          <div className="section-header-modern fade-in">
            <div className="header-badge-wrap">
              <span className="section-badge-pill" style={{ color: 'var(--gte-orange)', borderColor: 'rgba(244, 137, 36, 0.3)', background: 'rgba(244, 137, 36, 0.1)' }}>
                ✨ Media & Attraction Vault
              </span>
            </div>
            <div className="header-titles">
              <h2 className="section-title">Attraction Materials & Media Kits</h2>
              <p className="section-desc">Explore exchange testimonials, video archives, cultural discovery reels, and official promotional kits.</p>
            </div>
          </div>

          <div className="attraction-grid-modern">
            {attractionMaterials.map((item, index) => (
              <div 
                key={item.id} 
                className="attraction-card-modern glass fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card Banner Image */}
                <div className="attraction-img-wrapper">
                  <img src={item.image} alt={item.title} className="attraction-img" />
                  <div className="attraction-overlay" />
                  
                  <div className="attraction-top-badges">
                    <span className="attraction-badge" style={{ backgroundColor: item.color }}>
                      {item.badge}
                    </span>
                    <span className="attraction-format">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                      {item.format}
                    </span>
                  </div>

                  <div className="attraction-icon-floating" style={{ borderColor: item.color }}>
                    {item.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="attraction-body">
                  <div>
                    <h3 className="attraction-title">{item.title}</h3>
                    <h4 className="attraction-subtitle">{item.subtitle}</h4>
                    <p className="attraction-desc">{item.description}</p>
                  </div>

                  <div className="attraction-footer">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-drive-action"
                      style={{ '--item-color': item.color }}
                    >
                      <span>{item.actionLabel}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: Google Drive Cloud Master Hub */}
      <section className="section-block container">
        <div className="cloud-hub-card glass fade-in">
          <div className="cloud-hub-content">
            <div className="cloud-icon-circle">
              <svg width="44" height="44" viewBox="0 0 87.3 78" fill="none">
                <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066DA"/>
                <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00AC47"/>
                <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 10.15z" fill="#EA4335"/>
                <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.4-4.5 1.2z" fill="#00832D"/>
                <path d="m59.8 53h27.5c0-1.55-.4-3.1-1.2-4.5l-13.75-23.8c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8z" fill="#2684FC"/>
                <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3H13.75c-1.35 0-2.5.35-3.3.8l13.75 23.8h35.6z" fill="#FFBA00"/>
              </svg>
            </div>
            <div className="cloud-text">
              <span className="cloud-badge">CENTRAL DRIVE FOLDER</span>
              <h3>Need all assets at once?</h3>
              <p>Access the complete cloud drive with all raw video footage, printable PDF booklets, high-resolution branding emblems, and media kits.</p>
            </div>
          </div>

          <div className="cloud-hub-action">
            <a 
              href={DRIVE_FOLDER_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-cloud-cta"
            >
              <span>Open Google Drive Folder</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .booklets-page {
          padding-top: 120px;
          padding-bottom: 100px;
          min-height: 100vh;
        }

        .booklet-hero {
          padding-bottom: 3.5rem;
        }

        .hero-content-wrapper {
          max-width: 850px;
          margin: 0 auto;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        /* Filter Tabs */
        .tab-filters-nav {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 100px;
          box-shadow: var(--shadow-sm);
          margin-top: 2.5rem;
        }

        .tab-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 1.4rem;
          border-radius: 100px;
          border: none;
          background: transparent;
          color: var(--text-light);
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }

        .tab-filter-btn:hover {
          color: var(--secondary);
        }

        .tab-filter-btn.active {
          background: var(--gt-cyan);
          color: white;
          box-shadow: 0 4px 15px rgba(12, 185, 193, 0.35);
        }

        .count-pill {
          font-size: 0.75rem;
          padding: 0.15rem 0.5rem;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.06);
          color: inherit;
        }

        .tab-filter-btn.active .count-pill {
          background: rgba(255, 255, 255, 0.25);
          color: white;
        }

        /* Section Layouts */
        .section-block {
          margin-top: 4.5rem;
        }

        .section-header-modern {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
        }

        .section-badge-pill {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--gt-cyan);
          background: rgba(12, 185, 193, 0.1);
          padding: 0.35rem 0.9rem;
          border-radius: 30px;
          border: 1px solid rgba(12, 185, 193, 0.2);
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--secondary);
          letter-spacing: -0.02em;
        }

        .section-desc {
          font-size: 1rem;
          color: var(--text-light);
          max-width: 650px;
        }

        /* Booklet Cards (Side by Side Modern Layout) */
        .booklet-grid-modern {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        .modern-booklet-card {
          display: grid;
          grid-template-columns: 240px 1fr;
          border-radius: 28px;
          background: var(--white);
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          transition: var(--transition);
        }

        .modern-booklet-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(12, 185, 193, 0.3);
        }

        .booklet-visual-pane {
          position: relative;
          background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.2rem 1.8rem;
        }

        .book-cover-card {
          position: relative;
          width: 155px;
          height: 220px;
          border-radius: 4px 14px 14px 4px;
          overflow: hidden;
          box-shadow: 8px 14px 30px rgba(11, 25, 36, 0.2);
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: transform 0.4s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .book-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .book-spine-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 8%, rgba(0,0,0,0.12) 12%, transparent 25%);
          pointer-events: none;
        }

        .modern-booklet-card:hover .book-cover-card {
          transform: translateY(-8px) rotate(-1.5deg) scale(1.03);
          box-shadow: 14px 22px 40px rgba(11, 25, 36, 0.28);
        }

        .pill-badge.tag-highlight {
          font-weight: 800;
          border: 1px solid transparent;
        }

        .booklet-details-pane {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .meta-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
          flex-wrap: wrap;
        }

        .pill-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-light);
          background: rgba(0,0,0,0.04);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
        }

        .pill-badge.type-pdf {
          background: rgba(12, 185, 193, 0.12);
          color: var(--gt-cyan);
          font-weight: 800;
        }

        .card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 0.2rem;
        }

        .card-subtitle {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--gte-orange);
          margin-bottom: 0.8rem;
        }

        .card-desc {
          font-size: 0.88rem;
          color: var(--text-light);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .pane-actions {
          display: flex;
          gap: 0.8rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .btn-action {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.4rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition);
          cursor: pointer;
        }

        .btn-view {
          background: var(--secondary);
          color: white;
        }

        .btn-view:hover {
          background: var(--gt-cyan);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(12, 185, 193, 0.3);
        }

        .btn-download {
          background: rgba(0,0,0,0.04);
          color: var(--secondary);
          border: 1px solid rgba(0,0,0,0.08);
        }

        .btn-download:hover {
          background: var(--gv-red);
          color: white;
          border-color: var(--gv-red);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(248, 90, 64, 0.3);
        }

        /* Attraction Materials Grid */
        .attraction-grid-modern {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        .attraction-card-modern {
          border-radius: 24px;
          background: var(--white);
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
        }

        .attraction-card-modern:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(12, 185, 193, 0.3);
        }

        .attraction-img-wrapper {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: #f1f5f9;
        }

        .attraction-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .attraction-card-modern:hover .attraction-img {
          transform: scale(1.08);
        }

        .attraction-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11, 25, 36, 0.6) 0%, transparent 60%);
        }

        .attraction-top-badges {
          position: absolute;
          top: 1rem;
          left: 1rem;
          right: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 2;
        }

        .attraction-badge {
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          color: white;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .attraction-format {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 800;
          color: white;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          padding: 0.3rem 0.7rem;
          border-radius: 20px;
        }

        .attraction-icon-floating {
          position: absolute;
          bottom: 1rem;
          left: 1.2rem;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          border: 2px solid;
          z-index: 2;
        }

        .attraction-body {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }

        .attraction-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 0.2rem;
        }

        .attraction-subtitle {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--gt-cyan);
          margin-bottom: 0.7rem;
        }

        .attraction-desc {
          font-size: 0.88rem;
          color: var(--text-light);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .attraction-footer {
          padding-top: 1rem;
          border-top: 1px solid rgba(0,0,0,0.06);
        }

        .btn-drive-action {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--secondary);
          text-decoration: none;
          transition: var(--transition);
        }

        .btn-drive-action:hover {
          color: var(--gt-cyan);
          transform: translateX(4px);
        }

        /* Master Cloud Hub Card */
        .cloud-hub-card {
          padding: 2.8rem 3.5rem;
          border-radius: 32px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.9) 100%);
          border: 1.5px solid rgba(12, 185, 193, 0.25);
          box-shadow: 0 20px 50px rgba(12, 185, 193, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
        }

        .cloud-hub-content {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .cloud-icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 24px;
          background: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cloud-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--gt-cyan);
          background: rgba(12, 185, 193, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          margin-bottom: 0.4rem;
        }

        .cloud-text h3 {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 0.3rem;
        }

        .cloud-text p {
          font-size: 0.92rem;
          color: var(--text-light);
          margin: 0;
          max-width: 580px;
        }

        .btn-cloud-cta {
          padding: 1.1rem 2.2rem;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
          border-radius: 16px;
        }

        @media (max-width: 1100px) {
          .booklet-grid-modern {
            grid-template-columns: 1fr;
          }
          .attraction-grid-modern {
            grid-template-columns: repeat(2, 1fr);
          }
          .cloud-hub-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 2.2rem;
          }
          .cloud-hub-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .btn-cloud-cta {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .modern-booklet-card {
            grid-template-columns: 1fr;
          }
          .attraction-grid-modern {
            grid-template-columns: 1fr;
          }
          .tab-filters-nav {
            flex-wrap: wrap;
            border-radius: 20px;
          }
        }
      `}} />
    </main>
  );
};

export default Booklets;

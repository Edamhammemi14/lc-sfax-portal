import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SkeletonLoader from '../components/SkeletonLoader';

const Opportunities = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);

  const programs = [
    {
      id: 'volunteer',
      title: 'Global Volunteer',
      subtitle: 'Social Impact Projects',
      color: '#F85A40',
      hoverColor: '#E13B22',
      description: 'Make a real difference through volunteering. Join impactful social projects across the globe and develop leadership skills while creating sustainable change in communities.',
      features: ['6-8 Week Programs', 'Social Impact Focus', 'Leadership Development', 'Cultural Exchange'],
      tag: 'GV',
      bgImage: '/products/gv-card.png'
    },
    {
      id: 'talent',
      title: 'Global Talent',
      subtitle: 'Professional Internships',
      color: '#0CB9C1',
      hoverColor: '#009AA2',
      description: 'Kickstart your career with a professional internship abroad. Work in an international environment, gain real experience, and build a global professional network.',
      features: ['3-18 Month Internships', 'Professional Skills', 'Global Network', 'Career Growth'],
      tag: 'GT',
      bgImage: '/products/gt-card.png'
    },
    {
      id: 'teacher',
      title: 'Global Teacher',
      subtitle: 'Education Opportunities',
      color: '#F48924',
      hoverColor: '#D96F0E',
      description: 'Share your knowledge and passion for education on a global scale. Teach English or other subjects to students worldwide and shape the next generation of leaders.',
      features: ['3-18 Month Programs', 'Teaching Experience', 'Educational Impact', 'Cultural Immersion'],
      tag: 'GTe',
      bgImage: '/products/gte-card.png'
    }
  ];

  // Dynamic Data State
  const [oppsData, setOppsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [accommFilter, setAccommFilter] = useState('All');

  useEffect(() => {
    const fetchOpportunities = async (retries = 3) => {
      try {
        setLoading(true);
        const baseUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:3001';
        const [gv, gt, gte] = await Promise.all([
          fetch(`${baseUrl}/api/igv`).then(res => res.json()),
          fetch(`${baseUrl}/api/igta`).then(res => res.json()),
          fetch(`${baseUrl}/api/igte`).then(res => res.json())
        ]);

        const formatData = (source, tag, gradient) => {
          if (!source?.data) return [];
          return source.data.map(opp => ({ ...opp, tag, gradient }));
        };

        const allOpps = [
          ...formatData(gv, 'GV', 'linear-gradient(135deg, rgba(248,90,64,0.12), rgba(248,90,64,0.05))'),
          ...formatData(gt, 'GT', 'linear-gradient(135deg, rgba(12,185,193,0.12), rgba(12,185,193,0.05))'),
          ...formatData(gte, 'GTe', 'linear-gradient(135deg, rgba(244,137,36,0.12), rgba(244,137,36,0.05))')
        ];

        setOppsData(allOpps);
        setLoading(false);
        setError(null); // Clear error on success
      } catch (err) {
        if (retries > 0) {
          console.warn(`Fetch failed, retrying in 2s... (${retries} retries left)`);
          setTimeout(() => fetchOpportunities(retries - 1), 2000);
        } else {
          console.error("Failed to load opportunities after retries", err);
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchOpportunities();
  }, []);

  const filteredOpps = oppsData.filter(opp => {
    const matchesTab = activeFilter === 'All' || opp.tag === activeFilter;
    const matchesAccomm = accommFilter === 'All' || opp.accommodation === accommFilter;

    return matchesTab && matchesAccomm;
  });

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="opp-hero section-padding" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="opp-hero-text text-center fade-in">
            <div className="tagline">{t('opp_tagline')}</div>
            <h1 className="title-main">Global <span className="highlight">Opportunities</span></h1>
            <p className="subtitle" style={{ margin: '0 auto' }}>
              {t('opp_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="opp-cards-section section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="opp-grid">
            {programs.map((prog, i) => (
              <div
                key={prog.id}
                id={prog.id}
                className={`opp-card fade-in ${active === prog.id ? 'expanded' : ''}`}
                style={{ '--prog-color': prog.color, '--prog-hover': prog.hoverColor, backgroundImage: `url(${prog.bgImage})`, animationDelay: `${i * 0.15}s` }}
                onMouseEnter={() => setActive(prog.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => {
                  setActiveFilter(prog.tag);
                  document.getElementById('live-opps').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="opp-card-bg">
                  <div className="opp-color-overlay" />
                  <div className="opp-card-pattern" />
                </div>

                <div className="opp-card-inner">
                  {/* Expanded Info - Just the button now */}
                  <div className="prog-details" style={{ marginTop: 'auto' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveFilter(prog.tag);
                        document.getElementById('live-opps').scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="opp-cta-btn"
                    >
                      {t('opp_cta_view_live')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Opportunities Tracking */}
      <section id="live-opps" className="live-opps-section section-padding" style={{ background: 'var(--secondary)', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: '3rem' }}>
            <h2 className="title-main" style={{ fontSize: '2.5rem', color: 'white' }}>Current <span className="highlight">Openings</span></h2>
            <p className="subtitle" style={{ margin: '0 auto', maxWidth: '600px', color: 'rgba(255,255,255,0.6)' }}>
              {t('opp_openings_subtitle')}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs fade-in">
            {['All', 'GV', 'GT', 'GTe'].map(tab => (
              <button
                key={tab}
                className={`filter-btn ${activeFilter === tab ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab)}
              >
                {tab === 'All' ? t('opp_filter_all') : tab + ' ' + t('opp_filter_program')}
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          <div className="filter-panel fade-in">

            <div className="advanced-filters">

              <div className="filter-group">
                <label>Accommodation</label>
                <select
                  className="filter-select glass"
                  value={accommFilter}
                  onChange={(e) => setAccommFilter(e.target.value)}
                >
                  <option value="All">Any Status</option>
                  <option value="Covered">Covered</option>
                  <option value="Provided">Provided</option>
                  <option value="None">None</option>
                </select>
              </div>

              {(accommFilter !== 'All') && (
                <button
                  className="reset-all-btn"
                  onClick={() => {
                    setAccommFilter('All');
                  }}
                >
                  Reset
                </button>
              )}
            </div>

            <div className="results-count">
              {t('opp_results_found')} <strong>{filteredOpps.length}</strong> {t('opp_results_count')}
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="error-banner">
              <p>{t('opp_error_data')} ({error})</p>
            </div>
          )}

          {/* Data Grid */}
          <div className="live-grid">
            {loading ? (
              // Loading Skeletons
              Array(6).fill().map((_, idx) => (
                <div key={idx} className="live-card skeleton-wrapper">
                  <SkeletonLoader type="card" />
                </div>
              ))
            ) : filteredOpps.length > 0 ? (
              // Dynamic Cards
              filteredOpps.map((opp, idx) => {
                const programMap = { 'GV': 'global-volunteer', 'GT': 'global-talent', 'GTe': 'global-teacher' };
                const programPath = programMap[opp.tag] || 'global-volunteer';
                const oppUrl = `https://aiesec.org/opportunity/${programPath}/${opp.id}`;

                return (
                  <div
                    key={opp.id}
                    className={`live-card fade-in`}
                    style={{
                      animationDelay: `${(idx % 10) * 0.05}s`,
                      backgroundColor: 'white',
                      boxShadow: 'var(--shadow-md)',
                      cursor: 'pointer'
                    }}
                    onClick={() => window.open(oppUrl, '_blank')}
                  >
                    <div className="live-card-head">
                      <span className={`live-badge badge-${opp.tag.toLowerCase()}`}>{opp.tag}</span>
                      <span className="live-badge badge-sdg" style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--text-light)' }}>{opp.sdgs.split(',')[0] || 'SDG 17'}</span>
                    </div>

                    <h3 className="live-title" style={{
                      color: 'var(--secondary)',
                      fontWeight: '700'
                    }}>{opp.title}</h3>

                    <p className="live-company" style={{
                      color: 'var(--text-light)',
                      fontWeight: '600'
                    }}>
                      <i className="bx bx-building"></i> {opp.provider}
                    </p>

                    <div className="live-meta" style={{
                      color: 'var(--text)',
                      fontWeight: '500',
                      borderBottom: '1px solid rgba(0,0,0,0.1)'
                    }}>
                      <div className="meta-item" style={{ color: 'inherit' }}><i className="bx bx-calendar"></i> {opp.start_date || 'TBD'}</div>
                      <div className="meta-item" style={{ color: 'inherit' }}><i className="bx bx-group"></i> {opp.openings} {t('opp_openings_label')}</div>
                    </div>

                  <div className="live-logistics">
                    {opp.tag !== 'GT' && opp.tag !== 'GTe' && (
                      <span className={`log-pill ${opp.accommodation?.toLowerCase() === 'covered' ? 'highlight-pill' : ''}`} style={{ 
                        backgroundColor: 'rgba(0,0,0,0.04)', 
                        color: 'var(--text)',
                        fontWeight: '600',
                        border: '1px solid rgba(0,0,0,0.1)'
                      }}>
                        <i className="bx bx-bed"></i> {t('opp_logistics_accomm')}: {opp.accommodation}
                      </span>
                    )}
                      <span className="log-pill" style={{
                        backgroundColor: 'rgba(0,0,0,0.04)',
                        color: 'var(--text)',
                        fontWeight: '600',
                        border: '1px solid rgba(0,0,0,0.1)'
                      }}>
                        <i className="bx bx-restaurant"></i> {t('opp_logistics_meals')}: {opp.meals ? 'Provided' : 'None'}
                      </span>
                      <span className="log-pill" style={{
                        backgroundColor: 'rgba(0,0,0,0.04)',
                        color: 'var(--text)',
                        fontWeight: '600',
                        border: '1px solid rgba(0,0,0,0.1)'
                      }}>
                        <i className="bx bx-wallet"></i> {t('opp_logistics_fee')}: {opp.fee}
                      </span>
                    </div>

                    {/* Action */}
                    <div className="live-action">
                      <a
                        href={oppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn"
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'white',
                          fontWeight: '700'
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t('opp_action_view')}
                      </a>
                    </div>
                  </div>
                )
              })
            ) : (
              // Empty State
              <div className="empty-state">
                <i className="bx bx-search-alt"></i>
                <p>{t('opp_empty_state')}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .opp-hero { background: var(--bg); }
        .opp-hero-text { max-width: 700px; margin: 0 auto; }

        .opp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: start;
        }

        .opp-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          min-height: 480px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        .opp-card:hover {
          min-height: 580px;
          transform: translateY(-10px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.25);
        }

        .opp-card-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: 24px;
        }
        .opp-color-overlay {
          position: absolute; inset: 0;
          background: var(--prog-color);
          transition: background 0.4s ease;
          opacity: 0.1; /* Dimmed so image acts as main background */
          mix-blend-mode: multiply;
        }
        .opp-card:hover .opp-color-overlay {
          background: var(--prog-hover);
        }
        .opp-card {
           background-size: cover;
           background-position: center;
           background-repeat: no-repeat;
           border: none;
        }
        .opp-card-pattern {
          position: absolute; inset: 0;
          background-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
        }

        .opp-card-inner {
          position: relative;
          z-index: 2;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0;
          height: 100%;
          color: white;
          justify-content: center;
          align-items: center;
        }

        .prog-details {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .opp-card:hover .prog-details {
          opacity: 1;
          transform: translateY(0);
        }

        .opp-cta-btn {
          display: inline-block;
          padding: 0.8rem 2rem;
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 100px;
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          backdrop-filter: blur(10px);
          transition: var(--transition);
        }
        .opp-cta-btn:hover {
          background: white;
          color: var(--secondary);
        }

        @media (max-width: 1100px) {
          .opp-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
          .opp-card { min-height: 300px; }
          .opp-card:hover { min-height: 520px; }
        }

        /* Live Opportunities Section CSS */
        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.8rem 2rem;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .filter-btn:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-2px);
        }
        .filter-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(0, 171, 190, 0.3);
        }

        .filter-panel {
          max-width: 900px;
          margin: 0 auto 4rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
        }

        .search-box {
          display: flex;
          align-items: center;
          padding: 0.5rem 1.5rem;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          width: 100%;
          max-width: 600px;
          transition: var(--transition);
        }
        .search-box:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(0, 171, 190, 0.2);
          background: rgba(255,255,255,0.08);
        }
        .search-icon {
          font-size: 1.4rem;
          color: rgba(255,255,255,0.4);
          margin-right: 1rem;
        }
        .search-box input {
          flex: 1;
          background: none;
          border: none;
          color: white;
          padding: 1rem 0;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
        }
        .search-box input::placeholder {
          color: rgba(255,255,255,0.5);
        }
        .clear-search {
          background: none;
          border: none;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          font-size: 1.2rem;
          padding: 0.5rem;
          transition: var(--transition);
        }

        .advanced-filters {
          display: flex;
          gap: 2rem;
          align-items: flex-end;
          flex-wrap: wrap;
          justify-content: center;
        }
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }
        .filter-group label {
          font-size: 0.75rem;
          font-weight: 800;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
          padding-left: 0.5rem;
        }
        .filter-select {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          cursor: pointer;
          transition: var(--transition);
          min-width: 180px;
        }
        .filter-select:hover {
          background: rgba(255,255,255,0.15);
          border-color: var(--primary);
        }
        .filter-select option {
          background: var(--secondary);
          color: white;
        }

        .reset-all-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.8);
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: var(--transition);
        }
        .reset-all-btn:hover {
          background: rgba(232,83,74,0.15);
          color: #E8534A;
          border-color: #E8534A;
        }

        .results-count {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.8);
        }
        .results-count strong {
          color: var(--primary);
          font-weight: 800;
        }

        .live-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .live-card {
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .live-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .live-card-head {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }
        .live-badge {
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .badge-gv { background: rgba(232,83,74,0.15); color: #E8534A; }
        .badge-gt { background: rgba(0,171,190,0.15); color: #00ABBE; }
        .badge-gte { background: rgba(240,165,0,0.15); color: #F0A500; }
        .badge-sdg { background: rgba(255,255,255,0.1); color: #ccc; }

        .live-title {
          font-size: 1.3rem;
          line-height: 1.4;
          margin: 0 0 0.5rem 0;
          font-weight: 700;
          color: white;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .live-company {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .live-meta {
          display: flex;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 1.5rem;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.8);
        }

        .live-logistics {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .log-pill {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.4rem 0.8rem;
          border-radius: 100px;
          font-size: 0.8rem;
          color: #aaa;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .highlight-pill {
          background: rgba(76, 175, 80, 0.1);
          border-color: rgba(76, 175, 80, 0.3);
          color: #4CAF50;
        }

        .live-action {
          margin-top: auto;
        }
        .action-btn {
          display: block;
          width: 100%;
          text-align: center;
          background: white;
          color: var(--secondary);
          padding: 1rem;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .action-btn:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 171, 190, 0.3);
        }

        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(255,255,255,0.02);
          border-radius: 20px;
          border: 1px dashed rgba(255,255,255,0.1);
        }
        .empty-state i {
          font-size: 3rem;
          color: rgba(255,255,255,0.2);
          margin-bottom: 1rem;
        }
        .empty-state p {
           color: rgba(255,255,255,0.6);
        }
        
        .error-banner {
          background: rgba(232,83,74,0.1);
          border: 1px solid rgba(232,83,74,0.3);
          color: #E8534A;
          padding: 1rem;
          border-radius: 12px;
          text-align: center;
          margin-bottom: 2rem;
        }

        .skeleton-wrapper .skeleton-card {
           height: 100%;
           aspect-ratio: unset;
           min-height: 400px;
           border-radius: 20px;
        }
      `}} />
    </main>
  );
};

export default Opportunities;

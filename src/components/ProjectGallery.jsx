import React, { useState } from 'react';

const projectsData = [
  { id: 14, title: "Aquatica", sdgs: [14], impact: "Protecting and restoring marine ecosystems in the Sfax coastal region." },
  { id: 15, title: "Global Classroom", sdgs: [4, 17], impact: "Facilitating cross-cultural education and global citizenship in local schools." },
  { id: 16, title: "On The Map", sdgs: [11], impact: "Promoting sustainable tourism and local heritage in the Sfax Medina." },
  { id: 17, title: "Fingerprint", sdgs: [10], impact: "Reducing inequalities and fostering social inclusion through community projects." },
  { id: 18, title: "Skill Up", sdgs: [4, 8], impact: "Providing vocational training and soft skills to empower the youth of Sfax." },
  { id: 19, title: "Scale Up", sdgs: [8, 9], impact: "Accelerating local startups and small businesses through global mentorship." },
  { id: 20, title: "Rooted", sdgs: [15], impact: "Reforestation and environmental awareness projects in rural Sfax." },
  { id: 21, title: "Happy Bus", sdgs: [4, 10], impact: "Mobile education unit reaching children in underserved areas." },
  { id: 22, title: "Heartbeat", sdgs: [3], impact: "Raising health awareness and supporting community wellness initiatives." },
  { id: 23, title: "Youth 4 Impact", sdgs: [17], impact: "Collaborative leadership workshops to drive community-led change." },
  { id: 24, title: "Green Leaders", sdgs: [13], impact: "Training the next generation of climate activists and eco-entrepreneurs." },
  { id: 25, title: "Eat 4 Change", sdgs: [12, 2], impact: "Promoting sustainable food systems and reducing food waste." },
  { id: 26, title: "My Self My Word", sdgs: [5, 4], impact: "Empowering women and girls through self-expression and education." },
];

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const _posters = Array.from({ length: 13 }, (_, i) => `${i + 14}.png`);

  const openModal = (id) => {
    const project = projectsData.find(p => p.id === id);
    setSelectedProject(project);
  };
  const closeModal = () => setSelectedProject(null);

  const getSdgColor = (n) => {
    const colors = {
      2: '#DDA01E', 3: '#4C9F38', 4: '#C5192D', 5: '#FF3A21', 8: '#A21942', 
      9: '#F36D25', 10: '#DD1367', 11: '#FD9D24', 12: '#BF8B2E', 
      13: '#3F7E44', 14: '#0A97D9', 15: '#56C02B', 16: '#00689D', 17: '#19486A'
    };
    return colors[n] || '#333';
  };

  return (
    <section id="projects" className="project-gallery-3 section-padding">
      <div className="container">
        <div className="header-bento fade-in">
          <div className="title-stack">
            <h2 className="title-main">Our <span className="highlight">Impact</span></h2>
            <p className="subtitle">Every project is aligned with the UN Sustainable Development Goals for global relevance and local impact.</p>
          </div>
          <div className="bento-stats glass">
            <div className="stat">
              <strong>17</strong>
              <span>SDGs Targeted</span>
            </div>
            <div className="stat">
              <strong>500+</strong>
              <span>Lives Touched</span>
            </div>
          </div>
        </div>
        
        <div className="bento-grid">
          {projectsData.map((project, index) => {
            const isLarge = index === 0 || index === 7;
            const isWide = index === 3 || index === 10;
            
            return (
              <div 
                key={project.id} 
                className={`bento-item fade-in ${isLarge ? 'bento-large' : ''} ${isWide ? 'bento-wide' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openModal(project.id)}
              >
                <div className="bento-card glass">
                  <div className="bento-image">
                    <img src={`/projects/${project.id}.png`} alt={project.title} loading="lazy" />
                  </div>
                  <div className="bento-info">
                    <div className="sdg-dots">
                      {project.sdgs.map(s => (
                        <span key={s} className="sdg-dot" style={{ background: getSdgColor(s) }}></span>
                      ))}
                    </div>
                    <h4>{project.title}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal with SDG Details */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass spotlight-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-layout">
              <div className="modal-visual">
                <img src={`/projects/${selectedProject.id}.png`} alt={selectedProject.title} />
              </div>
              <div className="modal-details">
                <div className="modal-header">
                  <span className="tagline">Project Impact Report</span>
                  <h2>{selectedProject.title}</h2>
                </div>
                
                <div className="impact-description">
                  <p>{selectedProject.impact}</p>
                </div>

                <div className="sdg-badges-container">
                  <h4>Global Alignment (SDGs)</h4>
                  <div className="sdg-badges">
                    {selectedProject.sdgs.map(s => (
                      <div key={s} className="sdg-badge" style={{ borderColor: getSdgColor(s) }}>
                        <span className="sdg-number" style={{ background: getSdgColor(s) }}>{s}</span>
                        <span className="sdg-name">SDG Goal #{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a href="#contact" className="btn btn-primary" onClick={closeModal}>Inquire About This Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{ __html: `
        .header-bento {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 5rem;
          gap: 3rem;
        }
        .bento-stats {
          display: flex;
          gap: 3rem;
          padding: 2.5rem 4rem;
          border-radius: 32px;
        }
        .stat strong {
          display: block;
          font-size: 2.5rem;
          color: var(--primary);
        }
        .stat span {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-light);
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 280px;
          gap: 2rem;
        }
        .bento-item {
          cursor: pointer;
        }
        .bento-card {
          width: 100%; height: 100%;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          transition: var(--transition);
        }
        .bento-image { width: 100%; height: 100%; }
        .bento-image img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        .bento-info {
          position: absolute;
          bottom: 0; left: 0; width: 100%;
          padding: 2.5rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: var(--white);
          opacity: 0;
          transform: translateY(20px);
          transition: var(--transition);
        }
        .bento-item:hover .bento-info { opacity: 1; transform: translateY(0); }
        .bento-item:hover .bento-image img { transform: scale(1.1); filter: brightness(0.7); }
        
        .sdg-dots { display: flex; gap: 0.5rem; margin-bottom: 0.5rem; }
        .sdg-dot { width: 8px; height: 8px; border-radius: 50%; display: block; }
        .bento-item h4 { font-size: 1.25rem; font-weight: 700; }

        .bento-large { grid-column: span 2; grid-row: span 2; }
        .bento-wide { grid-column: span 2; }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.95);
          display: flex; align-items: center; justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(20px);
          animation: fadeIn 0.4s ease;
        }
        .spotlight-modal {
          max-width: 1100px; width: 95%;
          padding: 2rem; border-radius: 40px;
          animation: bentoZoom 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .modal-layout { display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; }
        .modal-visual img { width: 100%; border-radius: 24px; box-shadow: var(--shadow-lg); }
        
        .modal-details { display: flex; flex-direction: column; justify-content: center; }
        .modal-header h2 { font-size: 3rem; font-weight: 800; margin: 0.5rem 0 2rem; color: var(--secondary); line-height: 1; }
        .impact-description p { font-size: 1.2rem; line-height: 1.8; color: var(--text-light); margin-bottom: 3rem; }
        
        .sdg-badges-container h4 { text-transform: uppercase; font-size: 0.75rem; letter-spacing: 2px; color: var(--primary); margin-bottom: 1.5rem; }
        .sdg-badges { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 3rem; }
        .sdg-badge {
          display: flex; align-items: center; gap: 1rem; padding: 0.5rem 1.5rem 0.5rem 0.5rem;
          border: 1px solid #eee; border-radius: 100px; font-size: 0.9rem; font-weight: 700;
        }
        .sdg-number { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; }
        
        .modal-close {
          position: absolute; top: 30px; right: 30px; width: 50px; height: 50px;
          background: var(--white); color: var(--secondary); border: none; border-radius: 50%;
          font-size: 30px; cursor: pointer; display: flex; align-items: center; justify-content: center;
          z-index: 2001; transition: var(--transition);
        }
        .modal-close:hover { transform: rotate(90deg); }

        @media (max-width: 968px) {
          .modal-layout { grid-template-columns: 1fr; gap: 2rem; }
          .modal-header h2 { font-size: 2rem; }
          .bento-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-large, .bento-wide { grid-column: span 1; grid-row: span 1; }
        }
      `}} />
    </section>
  );
};

export default ProjectGallery;

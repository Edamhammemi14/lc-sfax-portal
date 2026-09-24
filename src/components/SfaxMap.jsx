import React, { useState } from 'react';

const SfaxMap = () => {
  const [activeZone, setActiveZone] = useState(null);

  const zones = [
    { 
      id: 'medina', 
      name: 'The Historic Medina', 
      desc: 'One of the best-preserved medinas in the Arab world. Focus: Heritage & Culture.', 
      path: 'M 40,60 Q 50,40 60,60 Q 50,80 40,60', 
      color: 'var(--primary)' 
    },
    { 
      id: 'coast', 
      name: 'Coastal Belt', 
      desc: 'The vital maritime lungs of Sfax. Focus: Environmental Sustainability & Ecology.', 
      path: 'M 70,30 Q 90,50 80,80 Q 60,70 70,30', 
      color: 'var(--accent)' 
    },
    { 
      id: 'industrial', 
      name: 'Economic Hub', 
      desc: 'The industrial powerhouse of Tunisia. Focus: Innovation & Economic Growth.', 
      path: 'M 20,20 Q 40,30 30,50 Q 10,40 20,20', 
      color: 'var(--secondary)' 
    }
  ];

  return (
    <div className="sfax-map-container glass">
      <div className="map-sidebar">
        <div className="sidebar-header">
          <span className="tagline">Sfax Impact Zones</span>
          <h3>Interactive <br />Canvas</h3>
        </div>
        
        <div className="zones-list">
          {zones.map(zone => (
            <div 
              key={zone.id} 
              className={`zone-item ${activeZone === zone.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveZone(zone.id)}
              onMouseLeave={() => setActiveZone(null)}
            >
              <div className="zone-indicator" style={{ background: zone.color }}></div>
              <div className="zone-text">
                <strong>{zone.name}</strong>
                <p>{zone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="map-visual">
        <svg viewBox="0 0 100 100" className="sfax-svg">
          {/* Base Map Shape (Abstract Sfax) */}
          <path d="M 10,10 L 90,10 L 90,90 L 10,90 Z" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
          
          {/* Grid Lines */}
          <line x1="10" y1="30" x2="90" y2="30" stroke="rgba(0,0,0,0.02)" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(0,0,0,0.02)" />
          <line x1="10" y1="70" x2="90" y2="70" stroke="rgba(0,0,0,0.02)" />

          {/* Interactive Zones */}
          {zones.map(zone => (
            <path
              key={zone.id}
              d={zone.path}
              className={`map-path ${activeZone === zone.id ? 'active' : ''}`}
              fill={activeZone === zone.id ? zone.color : 'rgba(0,0,0,0.1)'}
              stroke={zone.color}
              strokeWidth="0.5"
              onMouseEnter={() => setActiveZone(zone.id)}
              onMouseLeave={() => setActiveZone(null)}
            />
          ))}
        </svg>
        
        <div className="map-legend">
          <span>* Abstract architectural representation of Sfax impact zones.</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .sfax-map-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          padding: 4rem;
          border-radius: 40px;
          margin-top: 5rem;
          align-items: center;
        }
        .sidebar-header { margin-bottom: 3rem; }
        .sidebar-header h3 { font-size: 2.5rem; color: var(--secondary); line-height: 1.1; margin-top: 0.5rem; }
        
        .zones-list { display: flex; flex-direction: column; gap: 2rem; }
        .zone-item {
          display: flex; gap: 1.5rem; padding: 1.5rem; border-radius: 20px;
          transition: var(--transition); cursor: pointer;
        }
        .zone-item.active { background: var(--white); box-shadow: var(--shadow-md); }
        
        .zone-indicator { width: 12px; height: 12px; border-radius: 50%; margin-top: 5px; flex-shrink: 0; }
        .zone-text strong { display: block; font-size: 1.1rem; margin-bottom: 0.3rem; color: var(--secondary); }
        .zone-text p { font-size: 0.85rem; color: var(--text-light); line-height: 1.5; }

        .map-visual { position: relative; display: flex; flex-direction: column; align-items: center; }
        .sfax-svg { width: 100%; max-width: 500px; height: auto; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.05)); }
        
        .map-path { cursor: pointer; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); opacity: 0.4; }
        .map-path.active { transform: scale(1.05); opacity: 0.8; }

        .map-legend { margin-top: 2rem; font-size: 0.75rem; opacity: 0.4; font-style: italic; }

        @media (max-width: 968px) {
          .sfax-map-container { grid-template-columns: 1fr; padding: 2.5rem; }
          .map-visual { order: -1; }
        }
      `}} />
    </div>
  );
};

export default SfaxMap;

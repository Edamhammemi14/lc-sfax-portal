import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return Math.min(oldProgress + Math.random() * 20, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-overlay">
      <div className="preloader-content">
        <div className="logo-animation">
          <img src="/lc-sfax-logo.png" alt="LC Sfax Logo" className="p-logo" />
          <div className="logo-circles">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        
        <div className="loader-info">
          <div className="loader-text">Connecting Sfax to the World</div>
          <div className="loader-bar-container">
            <div className="loader-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="loader-percentage">{Math.round(progress)}%</div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .preloader-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: var(--secondary);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }
        .preloader-content {
          text-align: center;
          width: 300px;
        }
        .logo-animation {
          position: relative;
          margin-bottom: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .p-logo {
          width: 80px;
          z-index: 10;
          animation: logoPulse 2s infinite ease-in-out;
        }
        .logo-circles {
          position: absolute;
          width: 150px;
          height: 150px;
        }
        .circle {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          border: 2px solid var(--primary-light);
          border-radius: 50%;
          opacity: 0.3;
          animation: circleRipple 3s infinite ease-out;
        }
        .circle:last-child {
          animation-delay: 1.5s;
        }

        .loader-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .loader-text {
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.8rem;
          color: var(--primary-light);
        }
        .loader-bar-container {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.05);
          overflow: hidden;
          border-radius: 2px;
        }
        .loader-bar {
          height: 100%;
          background: linear-gradient(to right, var(--primary), var(--accent));
          transition: width 0.3s ease;
          box-shadow: 0 0 10px var(--primary);
        }
        .loader-percentage {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          opacity: 0.4;
          font-size: 1.5rem;
        }

        @keyframes logoPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0px var(--primary)); }
          50% { transform: scale(1.1); filter: drop-shadow(0 0 20px var(--primary)); }
        }
        @keyframes circleRipple {
          0% { transform: scale(0.5); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default Preloader;

import React from 'react';

const SkeletonLoader = ({ type = 'card' }) => {
  return (
    <div className={`skeleton-loader skeleton-${type}`}>
      <div className="skeleton-shine"></div>
      <style dangerouslySetInnerHTML={{ __html: `
        .skeleton-loader {
          position: relative;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 12px;
        }
        .skeleton-card {
          width: 100%;
          border-radius: 24px;
          aspect-ratio: 3/4;
        }
        .skeleton-video {
          width: 100%;
          border-radius: 32px;
          aspect-ratio: 16/9;
        }
        .skeleton-text {
          height: 1rem;
          margin-bottom: 0.5rem;
          width: 80%;
          border-radius: 4px;
        }
        .skeleton-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .skeleton-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: skeleton-shimmer 1.5s infinite;
        }
        @keyframes skeleton-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default SkeletonLoader;

import React from 'react';

const Card = ({ title, description, image, icon, label, link }) => {
  return (
    <div className="card fade-in">
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
          {label && <span className="card-label">{label}</span>}
        </div>
      )}
      <div className="card-body">
        {icon && <div className="card-icon">{icon}</div>}
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        {link && (
          <a href={link} className="card-link">
            Learn More <span className="arrow">→</span>
          </a>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .card {
          background: var(--white);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-light);
        }
        .card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        .card:hover .card-image img {
          transform: scale(1.1);
        }
        .card-label {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--secondary);
          color: var(--white);
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .card-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-icon {
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }
        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary);
        }
        .card-text {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .card-link {
          font-weight: 600;
          color: var(--primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .card-link .arrow {
          transition: var(--transition);
        }
        .card-link:hover .arrow {
          transform: translateX(5px);
        }
      `}} />
    </div>
  );
};

export default Card;

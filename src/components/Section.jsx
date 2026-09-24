import React from 'react';

const Section = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="title-main">{title}</h2>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
        <div className="section-content">
          {children}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-header .title-main {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
      `}} />
    </section>
  );
};

export default Section;

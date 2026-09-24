import React, { useState } from 'react';

const TeamContact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="contact-overhaul section-padding">
      <div className="container">
        <div className="contact-grid-3">
          <div className="contact-info-3 fade-in">
            <div className="tagline">Join the Movement</div>
            <h2 className="title-main">Let's build <br />the <span className="highlight">future</span>.</h2>
            <p className="subtitle">Whether you're a curious student or a potential partner, the LC Sfax team is here to guide you.</p>
            
            <div className="team-heads fade-in">
              <div className="team-head">
                <div className="head-avatar glass">MA</div>
                <div className="head-details">
                  <strong>Mahsouna</strong>
                  <span>President</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-3 fade-in">
            <div className="form-card-3 glass">
              {!isSubmitted ? (
                <>
                  <div className="form-header-3">
                    <h3>Get in Touch</h3>
                    <p>Expect a response within 24 hours.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="actual-form-3">
                    <div className="input-group-3">
                      <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="input-group-3">
                      <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="input-group-3">
                      <textarea placeholder="How can we help you?" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                  </form>
                </>
              ) : (
                <div className="form-success-3 fade-in">
                  <div className="success-pulse">✨</div>
                  <h3>Message Received!</h3>
                  <p>The LC Sfax team has been notified. We'll reach out to you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary-white">Send Another</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-overhaul {
          background-color: var(--white);
          position: relative;
        }
        .contact-grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10rem;
          align-items: center;
        }
        .team-heads {
          margin-top: 4rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .team-head {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .head-avatar {
          width: 60px; height: 60px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; color: var(--primary);
          border: 2px solid var(--primary-light);
        }
        .head-details strong { display: block; font-size: 1.1rem; }
        .head-details span { font-size: 0.85rem; color: var(--text-light); text-transform: uppercase; letter-spacing: 1px; }

        .form-card-3 {
          padding: 5rem;
          border-radius: 40px;
          box-shadow: var(--shadow-lg);
          border-color: rgba(0,0,0,0.05);
          min-height: 600px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .form-header-3 { margin-bottom: 3rem; }
        .form-header-3 h3 { font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem; }
        
        .input-group-3 { margin-bottom: 2rem; }
        .input-group-3 input, .input-group-3 textarea {
          width: 100%;
          padding: 1.5rem;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.05);
          background: rgba(255,255,255,0.5);
          font-family: inherit; font-size: 1rem;
          transition: var(--transition);
        }
        .input-group-3 input:focus, .input-group-3 textarea:focus {
          outline: none; border-color: var(--primary); background: var(--white);
          box-shadow: 0 10px 30px rgba(var(--p-h), var(--p-s), var(--p-l), 0.1);
        }
        .input-group-3 textarea { min-height: 150px; resize: none; }
        
        .form-success-3 { text-align: center; }
        .success-pulse {
          font-size: 5rem; margin-bottom: 2rem;
          animation: successPulse 2s infinite ease-in-out;
        }
        @keyframes successPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }

        @media (max-width: 968px) {
          .contact-grid-3 { grid-template-columns: 1fr; gap: 6rem; }
          .form-card-3 { padding: 3rem; }
        }
      `}} />
    </section>
  );
};

export default TeamContact;

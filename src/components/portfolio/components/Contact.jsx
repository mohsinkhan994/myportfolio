import React from 'react';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section className="pf-section" id="contact">
      <Reveal className="pf-contactpanel">
        <h2 className="pf-h2">Let's work together</h2>
        <p>
          Open to full-time Java Full-Stack / Backend roles with exposure
          to AI-enabled systems. Reach out any time.
        </p>
        <div className="pf-contactlinks">
          <a className="pf-contactlink" href="mailto:mkhan5332@gmail.com">
            <span className="pf-m">@</span>mkhan5332@gmail.com
          </a>
          <a className="pf-contactlink" href="tel:+919721325225">
            <span className="pf-m">#</span>+91-9721325225
          </a>
           <a className="pf-contactlink" href="tel:+79058872042">
            <span className="pf-m">#</span>+7-9058872042
          </a>
          <a
            className="pf-contactlink"
            href="https://linkedin.com/in/mohsin-khan-1960ba128"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="pf-m">in/</span>mohsin-khan-1960ba128
          </a>
        </div>
      </Reveal>
    </section>
  );
}
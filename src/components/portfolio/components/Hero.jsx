import React from 'react';
import useTypewriter from './useTypewriter';
import Reveal from './Reveal';

export default function Hero() {
  const heroLine = useTypewriter(
    "Hi, I'm Mohsin — I build backend systems that don't fall over.",
    28
  );

  const heroParts = heroLine.split("Mohsin");
  const showAccent = heroLine.includes("Mohsin");

  return (
    <section className="pf-hero">
      <div>
        <h1 className="pf-h1">
          {showAccent ? (
            <>
              {heroParts[0]}
              <span className="pf-accent">Mohsin</span>
              {heroParts[1]}
            </>
          ) : (
            heroLine
          )}
          <span className="pf-cursor"></span>
        </h1>
        <p className="pf-lede">
          5.5+ years building backend systems and full-stack products with
          Java &amp; Spring Boot, and more recently shipping AI-powered
          document intelligence with Python, FastAPI, and RAG pipelines.
        </p>
        <div className="pf-ctarow">
          <a className="pf-btn pf-btn-primary" href="#experience">
            View experience →
          </a>
          <a className="pf-btn pf-btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <Reveal className="pf-statuspanel" style={{ padding: 0 }}>
        <div className="pf-statushead">
          <span className="pf-traffic"></span>
          <span className="pf-statuspath">Current Status</span>
        </div>
        <div className="pf-statusbody">
          <div className="pf-statusrow">
            <span className="pf-k">Role</span>
            <span className="pf-v">Full-Stack Developer</span>
          </div>
          <div className="pf-statusrow">
            <span className="pf-k">Based In</span>
            <span className="pf-v">Orenburg, Russia</span>
          </div>
          <div className="pf-statusrow">
            <span className="pf-k">Experience</span>
            <span className="pf-v pf-amber">5.5 years</span>
          </div>
          <div className="pf-statusrow">
            <span className="pf-k">Open to work</span>
            <span className="pf-v pf-ok">Yes</span>
          </div>
          <div className="pf-statusrow">
            <span className="pf-k">Core Stack</span>
            <span className="pf-v pf-tagrow">
              <span className="pf-tag">Java</span>
              <span className="pf-tag">Spring</span>
              <span className="pf-tag">React</span>
            </span>
          </div>
          <div className="pf-statusrow">
            <span className="pf-k">Also Hands on </span>
            <span className="pf-v pf-tagrow">
              <span className="pf-tag">Python</span>
              <span className="pf-tag">FastAPI</span>
              <span className="pf-tag">RAG</span>
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
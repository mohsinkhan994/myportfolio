import React from 'react';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section className="pf-section" id="projects">
      <Reveal className="pf-sectionhead">
        <h2 className="pf-h2">Other Projects</h2>
      </Reveal>
      <div className="pf-projgrid">
        <Reveal className="pf-projcard" style={{ padding: 0 }}>
          <div style={{ padding: 22 }}>
            <div className="pf-name">USR, LLC</div>
            <div className="pf-desc">
              Dynamic corporate website for a construction company in St.
              Petersburg.
            </div>
            <div className="pf-stack" style={{ margin: "10px 0" }}>
              <span className="pf-tag">React</span>
              <span className="pf-tag">React Admin</span>
              <span className="pf-tag">Kotlin</span>
            </div>
            <a
              className="pf-link"
              href="https://usrspb.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              usrspb.ru →
            </a>
          </div>
        </Reveal>
        <Reveal className="pf-projcard" style={{ padding: 0 }}>
          <div style={{ padding: 22 }}>
            <div className="pf-name">ГИБАР (Gibar, LLC)</div>
            <div className="pf-desc">
              Full-stack corporate site with content &amp; service
              management delivered through a Telegram bot.
            </div>
            <div className="pf-stack" style={{ margin: "10px 0" }}>
              <span className="pf-tag">Java 21</span>
              <span className="pf-tag">Spring Boot</span>
              <span className="pf-tag">Next.js</span>
            </div>
            <a
              className="pf-link"
              href="https://gibar.tomsk-center.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              gibar.tomsk-center.ru →
            </a>
          </div>
        </Reveal>
        <Reveal className="pf-projcard" style={{ padding: 0 }}>
          <div style={{ padding: 22 }}>
            <div className="pf-name">Personal Portfolio (v1)</div>
            <div className="pf-desc">
              An earlier personal portfolio site, deployed on Vercel.
            </div>
            <div className="pf-stack" style={{ margin: "10px 0" }}>
              <span className="pf-tag">React</span>
              <span className="pf-tag">Bootstrap</span>
            </div>
            <a
              className="pf-link"
              href="https://mohsinkhanportfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              mohsinkhanportfolio.vercel.app →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
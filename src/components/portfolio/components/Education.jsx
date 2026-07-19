import React from 'react';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section className="pf-section" id="education">
      <Reveal className="pf-sectionhead">
        <h2 className="pf-h2">Education &amp; certifications</h2>
      </Reveal>
      <Reveal className="pf-split">
        <div>
          <div className="pf-label" style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--text-faint)", marginBottom: 6, textTransform: "uppercase" }}>
            Education
          </div>
          <div className="pf-record">
            <div className="pf-rtitle">
              Post Graduation Diploma in Advanced Computing
            </div>
            <div className="pf-rsub">
              Centre for Development of Advanced Computing (C-DAC), Pune
            </div>
            <div className="pf-rmeta">02/2019 — 08/2019</div>
          </div>
          <div className="pf-record">
            <div className="pf-rtitle">Bachelor of Technology in  Electrical Engineering</div>
            <div className="pf-rsub">
              Dr. A.P.J. Abdul Kalam Technical University, Lucknow
            </div>
            <div className="pf-rmeta">08/2013 — 08/2017</div>
          </div>
        </div>
        <div>
          <div className="pf-label" style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--text-faint)", marginBottom: 6, textTransform: "uppercase" }}>
            Certifications
          </div>
          <div className="pf-record">
            <div className="pf-rtitle">
              Docker Essentials: A Developer Introduction
            </div>
            <div className="pf-rsub">IBM</div>
            <div className="pf-rmeta">2024</div>
          </div>
          <div className="pf-record">
            <div className="pf-rtitle">RU102J — Redis for Java Developers</div>
            <div className="pf-rsub">Redis</div>
            <div className="pf-rmeta">2024</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
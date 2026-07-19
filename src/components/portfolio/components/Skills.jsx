import React from 'react';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section className="pf-section" id="skills">
      <Reveal className="pf-sectionhead">
        <h2 className="pf-h2">Stack</h2>
      </Reveal>
      <Reveal>
        <div className="pf-skillgroup">
          <div className="pf-label">Languages &amp; Frameworks</div>
          <div className="pf-skilltags">
            {[
              "Java",
              "Spring Boot",
              "Spring Security",
              "Hibernate",
              "React",
              "Next.js",
              "Python",
              "FastAPI",
              "HTML/CSS",
            ].map((s) => (
              <span className="pf-skilltag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="pf-skillgroup">
          <div className="pf-label">Data &amp; AI</div>
          <div className="pf-skilltags">
            {["LLM Integration", "RAG", "Elasticsearch", "PostgreSQL", "Oracle DB"].map(
              (s) => (
                <span className="pf-skilltag" key={s}>
                  {s}
                </span>
              )
            )}
          </div>
        </div>
        <div className="pf-skillgroup">
          <div className="pf-label">Infra &amp; Tooling</div>
          <div className="pf-skilltags">
            {[
              "Microservices",
              "Docker",
              "Drone CI/CD",
              "Maven",
              "JUnit",
              "Mockito",
              "Git",
              "Telegram API",
            ].map((s) => (
              <span className="pf-skilltag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
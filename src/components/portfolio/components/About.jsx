import React from 'react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section className="pf-section" id="about">
      <Reveal className="pf-sectionhead">
        <h2 className="pf-h2">About</h2>
      </Reveal>
      <Reveal className="pf-about">
        I'm a <strong>Java full-stack developer</strong> with{" "}
        <strong>5.5 years</strong> of experience designing and shipping
        scalable web applications and microservices using{" "}
        <strong>Java, Spring Boot, Hibernate, and React</strong>. Over the
        last 6 months I've also been building an{" "}
        <strong>AI-powered document intelligence platform</strong> with
        Python and FastAPI — combining hybrid retrieval, semantic search,
        and LLM-based document analysis. I care about RESTful API design,
        JWT-based security, CI/CD, asynchronous processing, and
        cloud-ready architecture, and I work well inside Agile teams
        delivering production-grade software. Currently looking for
        full-time Java Full-Stack / Backend roles with room to keep
        working on modern, AI-enabled systems.
      </Reveal>
    </section>
  );
}
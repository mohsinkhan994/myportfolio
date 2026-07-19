import React from 'react';
import Reveal from './Reveal';
import ServiceCard from './ServiceCard';

export default function Experience() {
  return (
    <section className="pf-section" id="experience">
      <Reveal className="pf-sectionhead">

        <h2 className="pf-h2">Experience</h2>
        <p className="pf-sectionsub">
          Reverse chronological — click a service to expand project detail.
        </p>
      </Reveal>

      <ServiceCard
        dotType="live"
        name="Binary Brains Corporation"
        role="Senior Software Developer"
        dateRange="01/2025 — present"
        location="Moscow, Russia"
        projects={[
          {
            title:
              "Rosgranstroy SED Analyzer — AI-powered document intelligence platform",
            bullets: [
              "Designed an enterprise document analysis platform using Python (FastAPI) microservices for semantic search, document classification, and real-time AI chat over large document collections.",
              "Built hybrid RAG retrieval combining Elasticsearch BM25 and vector search (ChromaDB) with Reciprocal Rank Fusion, improving search relevance over single-method approaches.",
              "Implemented an end-to-end document pipeline (PDF, DOCX, XLSX, images) with OCR (pytesseract), semantic chunking, and ML-based classification using PyTorch & HuggingFace.",
              "Built 5 Dockerized microservices — API Gateway (JWT/LDAP), Document Service (MinIO S3), Indexer, ML Classification, and LLM Service (RAG + Ollama).",
              "Integrated local LLM inference (Ollama) with optional GPU acceleration and WebSocket streaming for real-time document Q&A.",
              "Implemented JWT/LDAP/RBAC auth, PostgreSQL 17, Redis caching, and Alembic migrations.",
              "Supported multi-model embeddings (paraphrase-multilingual-MiniLM, Giga-Embeddings, FRIDA) with hot-swappable configuration for A/B testing.",
              "Deployed via Docker Compose, Kubernetes-ready, on Linux (Ubuntu).",
              "Built the React + TypeScript + Ant Design front-end with WebSocket integration for document search, preview, and real-time AI chat.",
            ],
          },
          {
            title: "AISOG — Automated Information System for Dangerous Goods",
            bullets: [
              "Built a microservices platform for managing dangerous goods transport through seaports (Administration of Sea Ports of the Sea of Okhotsk and the Tatar Strait) using Java 21, Spring Boot, Vue.js, and PostgreSQL.",
              "Secured the system with Spring Security, JWT, and email-based 2FA, including password recovery and multi-attempt protection.",
              "Built user approval workflows with automated email notifications for registration, approvals, and application updates.",
              "Applied the Proxy pattern and Dependency Injection for secure, testable, layered services.",
              "Deployed microservices with Docker and Eureka service discovery for scalability and fault tolerance.",
              "Conducted code reviews, mentored junior developers, and contributed to ER modeling and service boundary design.",
            ],
          },
        ]}
      />

      <ServiceCard
        dotType="archived"
        name="John Deere"
        role="Software Engineer II"
        dateRange="11/2022 — 08/2023"
        location="Pune, India"
        projects={[
          {
            title: "Base Station Manager",
            bullets: [
              "Designed and deployed REST APIs using Java 8, Spring Boot, and Hibernate for remote configuration of Starfire RTK stations.",
              "Improved API execution time by 20% by integrating Micrometer metrics and AWS logging.",
              "Led migration of Node.js services from version 10 to 18, improving performance and compatibility.",
              "Automated testing with JUnit and Mockito, reaching 90%+ code coverage.",
              "Improved security with API encryption and secure user access.",
              "Collaborated with US-based teams in Agile sprints.",
            ],
          },
        ]}
      />

      <ServiceCard
        dotType="archived"
        name="Digital Management Inc"
        role="Software Engineer"
        dateRange="10/2019 — 11/2022"
        location="Noida, India"
        projects={[
          {
            title: "Extranet Admin",
            bullets: [
              "Migrated the Extranet Admin tool from JSP to Java 8, Spring Boot, and React, modernizing the stack and improving performance.",
              "Built reusable React UI components and Java business logic modules, reducing duplication.",
              "Integrated third-party Visual Compliance APIs to automate regulatory access checks.",
              "Added batch processing, export functionality, and improved access control.",
              "Maintained code quality with test-driven development across regular Agile sprints.",
            ],
          },
        ]}
      />
    </section>
  );
}
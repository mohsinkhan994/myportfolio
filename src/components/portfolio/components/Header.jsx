import React, { useState } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="pf-header">
      <nav className="pf-nav">
        <div className="pf-logo">
          <span className="pf-dot"></span>Mohsin Khan
        </div>
        <button className="pf-navtoggle" onClick={() => setNavOpen((o) => !o)}>
          menu
        </button>
        <div className={`pf-navlinks ${navOpen ? "pf-open" : ""}`}>
          <a href="#about" onClick={() => setNavOpen(false)}>About</a>
          <a href="#experience" onClick={() => setNavOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setNavOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setNavOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
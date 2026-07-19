import React, { useState } from 'react';
import Reveal from './Reveal';

export default function ServiceCard({ dotType, name, role, dateRange, location, projects }) {
  const [open, setOpen] = useState(true);
  return (
    <Reveal className="pf-service" style={{ padding: 0 }}>
      <div className="pf-servicetop" onClick={() => setOpen((o) => !o)}>
        <div className="pf-serviceid">
          <span className={`pf-statusdot pf-${dotType}`}></span>
          <div>
            <div className="pf-servicename">{name}</div>
            <div className="pf-servicerole">{role}</div>
          </div>
        </div>
        <div className="pf-servicemeta">
          <div>{dateRange}</div>
          <div>{location}</div>
        </div>
      </div>
      {open && (
        <div className="pf-serviceprojects">
          {projects.map((p, idx) => (
            <div className="pf-projblock" key={idx}>
              <div className="pf-projtitle">{p.title}</div>
              <ul className="pf-bullets">
                {p.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Reveal>
  );
}
import React, { useEffect, useRef } from 'react';

/**
 * Matrix digital-rain background — faithful port of the canvas script from
 * the standalone index.html. Drawn on a fixed, full-viewport <canvas> that
 * sits behind all content (z-index handled by .pf-matrix in Portfolio.css).
 * Honors prefers-reduced-motion.
 */
export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const fontSize = 15;
    let columns = 0;
    let drops = [];
    const chars = '01';

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -50));
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      ctx.fillStyle = 'rgba(5, 8, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + 'px "JetBrains Mono", monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (Math.random() > 0.985) {
          ctx.fillStyle = '#baffc9';
        } else {
          ctx.fillStyle = 'rgba(61, 255, 133, 0.85)';
        }
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    let intervalId = null;
    if (!reduceMotion) {
      intervalId = setInterval(draw, 45);
    } else {
      ctx.fillStyle = '#05080a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return <canvas ref={canvasRef} className="pf-matrix" aria-hidden="true" />;
}

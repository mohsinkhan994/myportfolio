import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * HoloScene — the holographic 3D backdrop for the portfolio.
 *
 * A fixed full-viewport WebGL canvas (z-index 0) sitting behind all content:
 *   • a rotating wireframe "terminal cube" with a faint inner shell
 *   • a ring of skill chips orbiting it (CanvasTexture text sprites)
 *   • a drifting green particle field for depth
 *   • camera parallax toward the mouse + a scroll-driven dolly/orbit tilt
 *
 * Vanilla three.js in a single useEffect (no react-three-fiber) so it stays
 * compatible with React 17 + react-scripts 4. Honors prefers-reduced-motion
 * (renders one static frame), pauses the rAF loop when the tab is hidden,
 * and disposes all GPU resources on unmount.
 */
const SKILL_CHIPS = [
  'Java',
  'Spring Boot',
  'Python',
  'React',
  'FastAPI',
  'RAG',
  'Kafka',
  'Docker',
  'K8s',
  'PostgreSQL',
];

export default function HoloScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- renderer + scene + camera ---------- */
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05080a, 0.018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 14);

    /* ---------- colors ---------- */
    const GREEN = new THREE.Color(0x3dff85);
    const GREEN_DIM = new THREE.Color(0x1c8a4a);
    const AMBER = new THREE.Color(0xffb454);

    /* ---------- lights ---------- */
    scene.add(new THREE.AmbientLight(0x335544, 1.1));

    const greenLight = new THREE.PointLight(0x3dff85, 2.2, 60);
    greenLight.position.set(4, 3, 5);
    scene.add(greenLight);

    const amberLight = new THREE.PointLight(0xffb454, 1.1, 50);
    amberLight.position.set(-6, -2, 3);
    scene.add(amberLight);

    /* ---------- central holographic cube ---------- */
    // outer wireframe (glowing green edges)
    const cubeSize = 3.2;
    const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const edges = new THREE.EdgesGeometry(cubeGeo);
    const cubeLineMat = new THREE.LineBasicMaterial({
      color: GREEN,
      transparent: true,
      opacity: 0.9,
    });
    const cubeWire = new THREE.LineSegments(edges, cubeLineMat);
    scene.add(cubeWire);

    // faint inner translucent shell for depth
    const cubeFaceMat = new THREE.MeshBasicMaterial({
      color: GREEN_DIM,
      transparent: true,
      opacity: 0.06,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const cubeFace = new THREE.Mesh(cubeGeo, cubeFaceMat);
    scene.add(cubeFace);

    // a smaller nested cube for a richer hologram
    const innerGeo = new THREE.BoxGeometry(cubeSize * 0.5, cubeSize * 0.5, cubeSize * 0.5);
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const innerLineMat = new THREE.LineBasicMaterial({
      color: AMBER,
      transparent: true,
      opacity: 0.45,
    });
    const innerWire = new THREE.LineSegments(innerEdges, innerLineMat);
    scene.add(innerWire);

    /* ---------- orbiting skill chips ---------- */
    const ring = new THREE.Group();
    scene.add(ring);

    const chipPlane = new THREE.PlaneGeometry(1.4, 0.5);
    const ringRadius = 5.6;
    const chipMaterials = [];
    const chipMeshes = [];

    SKILL_CHIPS.forEach((label, i) => {
      const texture = makeChipTexture(label);
      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      chipMaterials.push(mat);
      const mesh = new THREE.Mesh(chipPlane, mat);

      const angle = (i / SKILL_CHIPS.length) * Math.PI * 2;
      mesh.position.set(
        Math.cos(angle) * ringRadius,
        Math.sin(angle) * 1.1, // slight vertical spread -> feels 3D, not flat
        Math.sin(angle) * ringRadius
      );
      mesh.userData.baseAngle = angle;
      chipMeshes.push(mesh);
      ring.add(mesh);
    });

    /* ---------- particle field ---------- */
    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // distribute in a spherical shell around the scene
      const r = 8 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: GREEN,
      size: 0.06,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    /* ---------- interaction state ---------- */
    const target = { x: 0, y: 0, scroll: 0 };   // desired camera offsets
    const current = { x: 0, y: 0, scroll: 0 };   // lerped actual offsets

    function onMouseMove(e) {
      // normalize to -1..1
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    function onScroll() {
      // 0 at top, grows with page scroll (normalized by viewport height)
      target.scroll = window.scrollY / window.innerHeight;
    }
    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    /* ---------- animation ---------- */
    const clock = new THREE.Clock();
    let rafId = null;
    let running = true;

    function renderOnce() {
      const t = clock.getElapsedTime();

      // cube rotation
      cubeWire.rotation.x = t * 0.25;
      cubeWire.rotation.y = t * 0.35;
      cubeFace.rotation.copy(cubeWire.rotation);
      innerWire.rotation.x = -t * 0.4;
      innerWire.rotation.y = -t * 0.5;

      // orbiting ring
      ring.rotation.y = t * 0.18;
      ring.rotation.x = Math.sin(t * 0.3) * 0.25;
      // billboard each chip slightly toward camera so labels stay legible
      for (let i = 0; i < chipMeshes.length; i++) {
        chipMeshes[i].lookAt(camera.position);
      }

      // particle drift
      particles.rotation.y = t * 0.02;
      particles.rotation.x = t * 0.01;

      // camera parallax (lerp toward target) + scroll dolly
      current.x += (target.x - current.x) * 0.05;
      current.y += (target.y - current.y) * 0.05;
      current.scroll += (target.scroll - current.scroll) * 0.06;

      camera.position.x = current.x * 1.6;
      camera.position.y = -current.y * 1.2 - current.scroll * 1.2;
      camera.position.z = 14 - current.scroll * 2.5; // subtle dolly-in on scroll
      camera.lookAt(0, current.scroll * 0.6, 0);

      // gentle light orbit for life
      greenLight.position.x = Math.cos(t * 0.5) * 5;
      greenLight.position.z = Math.sin(t * 0.5) * 5;

      renderer.render(scene, camera);
    }

    function loop() {
      if (!running) return;
      renderOnce();
      rafId = requestAnimationFrame(loop);
    }

    // pause when tab hidden (saves GPU/CPU)
    function onVisibility() {
      if (document.hidden) {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
      } else if (!reduceMotion) {
        running = true;
        clock.getDelta(); // reset delta so we don't jump
        rafId = requestAnimationFrame(loop);
      }
    }
    document.addEventListener('visibilitychange', onVisibility);

    if (reduceMotion) {
      renderOnce(); // one static frame, no loop
    } else {
      loop();
    }

    /* ---------- cleanup ---------- */
    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);

      // dispose geometries
      cubeGeo.dispose();
      edges.dispose();
      innerGeo.dispose();
      innerEdges.dispose();
      chipPlane.dispose();
      pGeo.dispose();

      // dispose materials
      cubeLineMat.dispose();
      cubeFaceMat.dispose();
      innerLineMat.dispose();
      pMat.dispose();
      chipMaterials.forEach((m) => {
        if (m.map) m.map.dispose();
        m.dispose();
      });

      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="pf-holo" aria-hidden="true" />;
}

/* ----------------------------------------------------------------
 * Build a text label as a Three.js texture (drawn on a 2D canvas).
 * Looks like a glowing terminal chip: dark bg, green border + text.
 * ---------------------------------------------------------------- */
function makeChipTexture(label) {
  const w = 256;
  const h = 96;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');

  // background
  ctx.fillStyle = 'rgba(6, 16, 11, 0.85)';
  ctx.fillRect(0, 0, w, h);

  // border
  ctx.strokeStyle = 'rgba(61, 255, 133, 0.85)';
  ctx.lineWidth = 3;
  ctx.strokeRect(2, 2, w - 4, h - 4);

  // prompt glyph
  ctx.fillStyle = '#1c8a4a';
  ctx.font = '600 30px "JetBrains Mono", monospace';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  ctx.fillText('›', 18, h / 2);

  // label
  ctx.fillStyle = '#eafff0';
  ctx.font = '700 30px "JetBrains Mono", monospace';
  ctx.fillText(label, 42, h / 2 + 1);

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

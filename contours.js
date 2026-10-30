/* ============================================================
   HERO CONTOUR LINES
   Faint topographic lines, like a Fontainebleau climbing map,
   drifting slowly behind the hero. Drawn on a canvas from a
   gently changing noise field.

   - Pauses when the hero is off screen or the tab is hidden
   - Draws one still frame when reduced motion is on
   You shouldn't need to edit this file.
   ============================================================ */
(function () {
  "use strict";

  const canvas = document.getElementById("heroContours");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const hero = canvas.parentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Perlin noise (3D) ---------- */
  const perm = new Uint8Array(512);
  (function seed() {
    const p = Array.from({ length: 256 }, (_, i) => i);
    let s = 1731; // fixed seed, so the map looks the same on every visit
    for (let i = 255; i > 0; i--) {
      s = (s * 16807) % 2147483647;
      const j = s % (i + 1);
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  })();
  const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a, b, t) => a + t * (b - a);
  function grad(h, x, y, z) {
    const u = (h & 15) < 8 ? x : y;
    const v = (h & 15) < 4 ? y : ((h & 15) === 12 || (h & 15) === 14 ? x : z);
    return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
  }
  function noise(x, y, z) {
    const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
    x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
    const u = fade(x), v = fade(y), w = fade(z);
    const A = perm[X] + Y, AA = perm[A] + Z, AB = perm[A + 1] + Z;
    const B = perm[X + 1] + Y, BA = perm[B] + Z, BB = perm[B + 1] + Z;
    return lerp(
      lerp(lerp(grad(perm[AA], x, y, z), grad(perm[BA], x - 1, y, z), u),
           lerp(grad(perm[AB], x, y - 1, z), grad(perm[BB], x - 1, y - 1, z), u), v),
      lerp(lerp(grad(perm[AA + 1], x, y, z - 1), grad(perm[BA + 1], x - 1, y, z - 1), u),
           lerp(grad(perm[AB + 1], x, y - 1, z - 1), grad(perm[BB + 1], x - 1, y - 1, z - 1), u), v),
      w);
  }

  /* ---------- Settings ---------- */
  const CELL = 12;            // grid size in CSS pixels
  const SCALE = 1 / 260;      // how zoomed-in the "terrain" is
  const LEVELS = 11;          // number of contour heights
  const LINE = "rgba(233, 221, 196, 0.075)";   // sand, very faint
  const INDEX_LINE = "rgba(140, 195, 221, 0.16)"; // every fifth line in lake blue, like a map's index contours

  let w = 0, h = 0, cols = 0, rows = 0, field = new Float32Array(0);
  let z = 0, running = false, visible = true, last = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.clientWidth; h = hero.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / CELL) + 1; rows = Math.ceil(h / CELL) + 1;
    field = new Float32Array(cols * rows);
    draw();
  }

  function draw() {
    // Sample the terrain, with a little second octave for natural detail
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const x = i * CELL * SCALE, y = j * CELL * SCALE;
        field[j * cols + i] = noise(x, y, z) + 0.35 * noise(x * 2.1 + 40, y * 2.1, z * 1.3);
      }
    }
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;
    for (let l = 0; l < LEVELS; l++) {
      const iso = -0.75 + (1.5 * l) / (LEVELS - 1);
      ctx.strokeStyle = l % 5 === 0 ? INDEX_LINE : LINE;
      ctx.beginPath();
      for (let j = 0; j < rows - 1; j++) {
        for (let i = 0; i < cols - 1; i++) {
          // Marching squares: find where this height crosses the cell's edges
          const a = field[j * cols + i], b = field[j * cols + i + 1];
          const c = field[(j + 1) * cols + i + 1], d = field[(j + 1) * cols + i];
          const idx = (a > iso ? 8 : 0) | (b > iso ? 4 : 0) | (c > iso ? 2 : 0) | (d > iso ? 1 : 0);
          if (idx === 0 || idx === 15) continue;
          const x0 = i * CELL, y0 = j * CELL;
          const t = (p, q) => (iso - p) / (q - p);
          const top = [x0 + CELL * t(a, b), y0];
          const right = [x0 + CELL, y0 + CELL * t(b, c)];
          const bottom = [x0 + CELL * t(d, c), y0 + CELL];
          const left = [x0, y0 + CELL * t(a, d)];
          const seg = (p, q) => { ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); };
          switch (idx) {
            case 1: case 14: seg(left, bottom); break;
            case 2: case 13: seg(bottom, right); break;
            case 3: case 12: seg(left, right); break;
            case 4: case 11: seg(top, right); break;
            case 5: seg(left, top); seg(bottom, right); break;
            case 6: case 9: seg(top, bottom); break;
            case 7: case 8: seg(left, top); break;
            case 10: seg(left, bottom); seg(top, right); break;
          }
        }
      }
      ctx.stroke();
    }
  }

  // ~30 frames a second is plenty for something this slow
  function frame(now) {
    if (!running) return;
    if (now - last > 33) {
      z += 0.0016 * Math.min(4, (now - last) / 33);
      last = now;
      draw();
    }
    requestAnimationFrame(frame);
  }
  function setRunning() {
    const should = visible && !document.hidden && !reduceMotion;
    if (should && !running) { running = true; last = performance.now(); requestAnimationFrame(frame); }
    if (!should) running = false;
  }

  resize();
  canvas.classList.add("is-ready");
  let resizeTimer;
  window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); });
  document.addEventListener("visibilitychange", setRunning);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; setRunning(); }).observe(hero);
  }
  setRunning();
})();

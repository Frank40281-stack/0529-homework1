/* ═══════════════════════════════════════════════
   Frank — Personal Portfolio  |  script.js
   ═══════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   LIVE CLOCK — updates every second
───────────────────────────────────────── */
const clockH    = document.getElementById('clock-h');
const clockM    = document.getElementById('clock-m');
const clockS    = document.getElementById('clock-s');
const clockAmpm = document.getElementById('clock-ampm');
const clockDate = document.getElementById('clock-date');

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

function pad(n) {
  return String(n).padStart(2, '0');
}

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;

  clockH.textContent    = pad(h);
  clockM.textContent    = pad(m);
  clockS.textContent    = pad(s);
  clockAmpm.textContent = ampm;

  const day  = DAYS[now.getDay()];
  const date = now.getDate();
  const mon  = MONTHS[now.getMonth()];
  const yr   = now.getFullYear();
  clockDate.textContent = `${day}, ${mon} ${date}, ${yr}`;
}

updateClock();
setInterval(updateClock, 1000);


/* ─────────────────────────────────────────
   CHERRY BLOSSOM ANIMATION
───────────────────────────────────────── */
const canvas = document.getElementById('blossom-canvas');
const ctx    = canvas.getContext('2d');
let petals   = [];
let W, H;

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

/* Petal shapes drawn as layered arcs */
function drawPetal(x, y, size, angle, alpha, colorIdx) {
  const colors = [
    `rgba(244, 167, 185, ${alpha})`,  // soft pink
    `rgba(248, 200, 210, ${alpha})`,  // blush
    `rgba(224, 125, 148, ${alpha})`,  // deep rose
    `rgba(255, 220, 230, ${alpha})`,  // very light pink
    `rgba(210, 150, 175, ${alpha})`,  // mauve
  ];
  const col = colors[colorIdx % colors.length];

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.globalAlpha = alpha;

  /* Draw a five-petal blossom */
  for (let i = 0; i < 5; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI * 2) / 5);
    ctx.beginPath();
    ctx.ellipse(0, -size * 0.55, size * 0.3, size * 0.55, 0, 0, Math.PI * 2);
    ctx.fillStyle = col;
    ctx.fill();
    ctx.restore();
  }

  /* Center dot */
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.18, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 240, 200, ${alpha * 0.9})`;
  ctx.fill();

  ctx.restore();
}

/* Petal factory */
function spawnPetal() {
  return {
    x:        Math.random() * W,
    y:        -20,
    size:     6 + Math.random() * 9,
    speed:    0.6 + Math.random() * 1.2,
    wind:     -0.6 + Math.random() * 1.2,
    angle:    Math.random() * Math.PI * 2,
    spin:     (Math.random() - 0.5) * 0.04,
    sway:     Math.random() * Math.PI * 2,
    swaySpd:  0.012 + Math.random() * 0.018,
    swayAmp:  0.8 + Math.random() * 1.8,
    alpha:    0.55 + Math.random() * 0.45,
    colorIdx: Math.floor(Math.random() * 5),
  };
}

/* Initialise pool — scatter petals on first load */
for (let i = 0; i < 60; i++) {
  const p = spawnPetal();
  p.y = Math.random() * H;
  petals.push(p);
}

function animatePetals() {
  ctx.clearRect(0, 0, W, H);

  /* Occasionally add a new petal */
  if (petals.length < 80 && Math.random() < 0.35) {
    petals.push(spawnPetal());
  }

  petals.forEach((p, i) => {
    p.sway  += p.swaySpd;
    p.x     += p.wind + Math.sin(p.sway) * p.swayAmp;
    p.y     += p.speed;
    p.angle += p.spin;

    /* Fade out near the bottom */
    const fadeZone = H * 0.85;
    const alpha = p.y > fadeZone
      ? p.alpha * (1 - (p.y - fadeZone) / (H * 0.15))
      : p.alpha;

    if (alpha > 0) drawPetal(p.x, p.y, p.size, p.angle, alpha, p.colorIdx);

    /* Recycle when off-screen */
    if (p.y > H + 20 || p.x < -50 || p.x > W + 50) {
      petals[i] = spawnPetal();
    }
  });

  requestAnimationFrame(animatePetals);
}

animatePetals();

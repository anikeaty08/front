import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
// Custom 3D utilities used by provided design
tailwind.config = {
theme: { extend: {} },
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),var(--tw-translate-z,0))
rotateX(var(--tw-rotate-x,0)) rotateY(var(--tw-rotate-y,0)) rotateZ(var(--tw-rotate-z,0))
skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))
`.replace(/\s+/g,' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),var(--tw-translate-z,0))
rotateX(var(--tw-rotate-x,0)) rotateY(var(--tw-rotate-y,0)) rotateZ(var(--tw-rotate-z,0))
skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))
`.replace(/\s+/g,' ').trim(),
};
}
});
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),var(--tw-translate-z,0))
rotateX(var(--tw-rotate-x,0)) rotateY(var(--tw-rotate-y,0)) rotateZ(var(--tw-rotate-z,0))
skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))
`.replace(/\s+/g,' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),var(--tw-translate-z,0))
rotateX(var(--tw-rotate-x,0)) rotateY(var(--tw-rotate-y,0)) rotateZ(var(--tw-rotate-z,0))
skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))
`.replace(/\s+/g,' ').trim(),
};
}
});
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),var(--tw-translate-z,0))
rotateX(var(--tw-rotate-x,0)) rotateY(var(--tw-rotate-y,0)) rotateZ(var(--tw-rotate-z,0))
skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))
`.replace(/\s+/g,' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),var(--tw-translate-z,0))
rotateX(var(--tw-rotate-x,0)) rotateY(var(--tw-rotate-y,0)) rotateZ(var(--tw-rotate-z,0))
skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))
`.replace(/\s+/g,' ').trim(),
};
}
});
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



    // State
    const state = {
      uploaded: { reference: null, vocal: null },
      arcs: { reference: document.getElementById('arc-ref'), vocal: document.getElementById('arc-vocal') },
      labels: { reference: document.getElementById('ref-file-label'), vocal: document.getElementById('vocal-file-label') },
      ripples: { reference: document.getElementById('ripple-ref'), vocal: document.getElementById('ripple-vocal') },
      stageEl: document.getElementById('stageLabel'),
      screens: {
        upload: document.getElementById('screen-upload'),
        transition: document.getElementById('screen-transition'),
        extract: document.getElementById('screen-extract'),
        results: document.getElementById('screen-results'),
      },
      progressEl: document.getElementById('bar'),
      pulseEl: document.getElementById('barPulse'),
      confEl: document.getElementById('conf-bar'),
      fx: {
        gate: document.getElementById('fx-gate'),
        eq: document.getElementById('fx-eq'),
        comp: document.getElementById('fx-comp'),
        reverb: document.getElementById('fx-reverb'),
      },
      toast: document.getElementById('toast-extract'),
      dnaCanvas: document.getElementById('dnaCanvas'),
      starCanvas: document.getElementById('starfield'),
      tonalChart: null,
    };

    /* Drag + Drop */
    function handleDrag(e) {
      e.preventDefault();
      e.currentTarget.classList.add('ring-fuchsia-400/30');
      const rect = e.currentTarget.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 100;
      const my = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty('--mx', mx + '%');
      e.currentTarget.style.setProperty('--my', my + '%');
    }
    function handleDragLeave(e) {
      e.preventDefault();
      e.currentTarget.classList.remove('ring-fuchsia-400/30');
    }
    function handleDrop(e, type) {
      e.preventDefault();
      e.currentTarget.classList.remove('ring-fuchsia-400/30');
      const file = e.dataTransfer.files && e.dataTransfer.files[0];
      if (file) {
        handleFile(file, type);
        ripple(e, type);
      }
    }
    function ripple(e, type) {
      const container = state.ripples[type];
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const r = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 1.2;
      r.style.position = 'absolute';
      r.style.left = (x - size/2) + 'px';
      r.style.top = (y - size/2) + 'px';
      r.style.width = size + 'px';
      r.style.height = size + 'px';
      r.style.borderRadius = '9999px';
      r.style.pointerEvents = 'none';
      r.style.background = 'radial-gradient(circle, rgba(236,72,153,0.15), transparent 60%)';
      r.style.transform = 'scale(0.6)';
      r.style.opacity = '0.9';
      r.style.transition = 'transform 600ms ease, opacity 650ms ease';
      container.appendChild(r);
      requestAnimationFrame(() => {
        r.style.transform = 'scale(1.15)';
        r.style.opacity = '0';
      });
      setTimeout(() => r.remove(), 700);
    }
    function handleFile(file, type) {
      state.uploaded[type] = file;
      state.labels[type].textContent = file.name;
      simulateArc(type);
      if (state.uploaded.reference && state.uploaded.vocal) {
        setTimeout(startTransition, 400);
      }
    }
    function simulateArc(type) {
      const arc = state.arcs[type];
      const total = 188.5;
      let progress = 0;
      const step = () => {
        progress += Math.random() * 40 + 20;
        const pct = Math.min(progress, 100);
        const offset = total * (1 - pct / 100);
        arc.style.strokeDashoffset = String(offset);
        if (pct < 100) {
          setTimeout(step, 140);
        }
      };
      step();
    }

    /* 3D Tilt */
    function tilt3D(e) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rY = (x - 0.5) * 10; // rotateY
      const rX = -(y - 0.5) * 8;  // rotateX
      card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`;
      card.style.setProperty('--mx', (x*100)+'%');
      card.style.setProperty('--my', (y*100)+'%');
    }
    function resetTilt(e) {
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }

    /* Screens flow */
    function startTransition() {
      swapScreen('upload', 'transition');
      runProgress().then(() => {
        swapScreen('transition', 'extract');
        startDNA();
        sequenceFX().then(() => {
          showToast();
          setTimeout(() => {
            stopDNA();
            buildTonalChart();
            swapScreen('extract', 'results');
            // fun final touch
            setTimeout(() => {
              state.confEl.style.width = (58 + Math.round(Math.random()*14)) + '%';
            }, 400);
          }, 1000);
        });
      });
    }
    function swapScreen(from, to) {
      const a = state.screens[from];
      const b = state.screens[to];
      if (!a || !b) return;
      a.classList.add('opacity-0', 'scale-[0.995]');
      a.classList.add('transition', 'duration-300');
      setTimeout(() => {
        a.classList.add('hidden');
        b.classList.remove('hidden');
        b.classList.add('opacity-0', 'translate-y-2');
        requestAnimationFrame(() => {
          b.classList.add('transition', 'duration-300');
          b.classList.remove('opacity-0', 'translate-y-2');
        });
      }, 220);
    }
    function runProgress() {
      return new Promise((resolve) => {
        const stages = [
          'Initializing…',
          'Analyzing spectral content…',
          'Detecting transients…',
          'Estimating dynamics…',
          'Extracting EQ curve…',
          'Modeling compressor…',
          'Measuring space & reverb…',
          'Reconstructing chain…',
          'Verifying match…',
          'Finalizing…'
        ];
        let i = 0;
        let pct = 0;
        const tick = () => {
          pct += Math.random() * 10 + 6;
          pct = Math.min(pct, 100);
          state.progressEl.style.width = pct + '%';
          state.pulseEl.textContent = stages[Math.min(i, stages.length - 1)];
          state.stageEl.textContent = `Stage ${Math.min(i+1, 10)}/10`;
          i++;
          if (pct >= 100) {
            setTimeout(resolve, 250);
          } else {
            setTimeout(tick, 300);
          }
        };
        tick();
      });
    }
    function sequenceFX() {
      const order = ['gate', 'eq', 'comp', 'reverb'];
      const glow = (el) => {
        el.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.10) inset, 0 0 24px rgba(20,242,199,0.22)';
        el.classList.add('ring-teal-400/30');
        el.classList.add('scale-[1.01]');
        el.classList.add('transition', 'duration-300');
        setTimeout(() => el.classList.remove('scale-[1.01]'), 300);
      };
      return new Promise((resolve) => {
        let idx = 0;
        const step = () => {
          const key = order[idx];
          if (!key) { resolve(); return; }
          glow(state.fx[key]);
          idx++;
          setTimeout(step, 350);
        };
        step();
      });
    }
    function showToast() {
      state.toast.style.opacity = '1';
      state.toast.style.transform = 'translateX(-50%) translateY(0)';
      setTimeout(() => {
        state.toast.style.opacity = '0';
        state.toast.style.transform = 'translateX(-50%) translateY(16px)';
      }, 1400);
    }

    /* Starfield */
    let starCtx, stars = [], starRAF;
    function initStarfield() {
      const c = state.starCanvas;
      starCtx = c.getContext('2d');
      resizeStarfield();
      const count = Math.floor((c.width * c.height) / 14000);
      stars = Array.from({ length: count }).map(() => ({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        z: Math.random() * 0.8 + 0.2,
        s: Math.random() * 1.1 + 0.2,
      }));
      animateStarfield();
      window.addEventListener('resize', resizeStarfield);
      c.addEventListener('pointermove', (e) => {
        const rect = c.getBoundingClientRect();
        const cx = (e.clientX - rect.left) / rect.width - 0.5;
        const cy = (e.clientY - rect.top) / rect.height - 0.5;
        stars.forEach(star => {
          star.x += cx * star.z * 0.6;
          star.y += cy * star.z * 0.6;
        });
      });
    }
    function resizeStarfield() {
      const c = state.starCanvas;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = Math.floor(c.clientWidth * dpr);
      c.height = Math.floor(c.clientHeight * dpr);
      if (starCtx) starCtx.scale(dpr, dpr);
    }
    function animateStarfield() {
      const c = state.starCanvas;
      const ctx = starCtx;
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.save();
      ctx.globalAlpha = 0.9;
      stars.forEach(star => {
        star.y += star.z * 0.25;
        if (star.y > c.height) star.y = 0;
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.fillRect(star.x, star.y, star.s, star.s);
      });
      ctx.restore();
      starRAF = requestAnimationFrame(animateStarfield);
    }

    /* DNA Canvas */
    let dnaCtx, dnaRAF, dnaRunning = false;
    function startDNA() {
      const canvas = state.dnaCanvas;
      dnaCtx = canvas.getContext('2d');
      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.floor(rect.width * dpr);
        canvas.height = Math.floor(rect.height * dpr);
        dnaCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      resize();
      window.addEventListener('resize', resize);
      dnaRunning = true;
      let t = 0;
      const particles = Array.from({ length: 38 }).map((_, i) => ({ i, hue: 170 + Math.random()*50 }));
      function draw() {
        if (!dnaRunning) return;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        dnaCtx.clearRect(0, 0, w, h);
        const midX = w / 2;
        const amp = Math.min(w, h) * 0.22;
        const spacing = 10;
        // Helix strands
        for (let y = 0; y < h; y += spacing) {
          const phase = (t/12 + y/90);
          const x1 = midX + Math.sin(phase) * amp;
          const x2 = midX - Math.sin(phase) * amp;
          const alpha = 0.15 + 0.35 * (1 - Math.abs((y - h/2) / (h/2)));
          dnaCtx.strokeStyle = `rgba(20,242,199,${alpha})`;
          dnaCtx.lineWidth = 1.25;
          dnaCtx.beginPath();
          dnaCtx.moveTo(x1, y);
          dnaCtx.lineTo(x2, y);
          dnaCtx.stroke();
        }
        // Particles traveling along the helix
        particles.forEach(p => {
          const py = (t*1.4 + p.i * 20) % (h + 40) - 20;
          const phase = (t/12 + py/90);
          const px = midX + Math.sin(phase) * amp * (p.i % 2 ? 1 : -1);
          dnaCtx.fillStyle = `hsla(${p.hue}, 90%, 60%, 0.85)`;
          dnaCtx.beginPath();
          dnaCtx.arc(px, py, 2.2, 0, Math.PI*2);
          dnaCtx.fill();
        });
        t += 1.6;
        dnaRAF = requestAnimationFrame(draw);
      }
      draw();
    }
    function stopDNA() {
      dnaRunning = false;
      if (dnaRAF) cancelAnimationFrame(dnaRAF);
    }

    /* Chart.js Tonal Profile */
    function buildTonalChart() {
      const ctx = document.getElementById('tonalChart').getContext('2d');
      if (state.tonalChart) {
        state.tonalChart.destroy();
      }
      const labels = ['Sub', 'Bass', 'Low‑Mid', 'Mid', 'High‑Mid', 'Air'];
      const reference = [58, 70, 64, 60, 68, 72];
      const vocal = reference.map(v => Math.max(40, Math.min(82, v + (Math.random()*10 - 5))));
      state.tonalChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels,
          datasets: [
            { label: 'Reference', data: reference, borderColor: 'rgba(236,72,153,0.8)', backgroundColor: 'rgba(236,72,153,0.15)', pointRadius: 0, borderWidth: 2 },
            { label: 'Your Vocal', data: vocal, borderColor: 'rgba(20,242,199,0.85)', backgroundColor: 'rgba(20,242,199,0.15)', pointRadius: 0, borderWidth: 2 },
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            r: {
              angleLines: { color: 'rgba(255,255,255,0.08)' },
              grid: { color: 'rgba(255,255,255,0.10)' },
              suggestedMin: 30,
              suggestedMax: 90,
              ticks: { display: false },
              pointLabels: { color: 'rgba(255,255,255,0.7)', font: { size: 11 } }
            }
          }
        }
      });
      // ensure height
      const canvas = document.getElementById('tonalChart');
      canvas.parentElement.style.height = '220px';
    }

    /* Buttons */
    document.getElementById('btn-rerun')?.addEventListener('click', () => {
      // reset and rerun
      Object.keys(state.uploaded).forEach(k => state.uploaded[k] = null);
      state.labels.reference.textContent = 'Drag & drop or click to select';
      state.labels.vocal.textContent = 'Drag & drop or click to select';
      state.arcs.reference.style.strokeDashoffset = '188.5';
      state.arcs.vocal.style.strokeDashoffset = '188.5';
      state.progressEl.style.width = '0%';
      state.pulseEl.textContent = 'Initializing…';
      state.stageEl.textContent = 'Stage 1/10';
      swapScreen('results', 'upload');
    });
    document.getElementById('btn-export')?.addEventListener('click', () => {
      const data = {
        gate: { threshold: -48, hold: 80 },
        eq: [{ f:120, gain:-3 }, { f:2500, gain:2.5 }, { f:8000, gain:3 }],
        comp: { attack: 8, release: 60, ratio: 3.2 },
        reverb: { decay: 1.7, predelay: 12, mix: 14 },
        confidence: parseInt(state.confEl.style.width) || 62
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'Arisyn_Vocal_Chain.json';
      a.click();
      URL.revokeObjectURL(a.href);
    });

    // Initialize
    window.addEventListener('DOMContentLoaded', () => {
      initStarfield();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      <div className="top-0 w-full h-screen bg-cover bg-center -z-10 blur-sm absolute hue-rotate-15" id="aura-image" style={{backgroundImage: `url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c4cad3af-aa22-4b54-a533-ecbea523307a_3840w.jpg")`}}></div>


<canvas className="fixed inset-0 -z-10" height="620" id="starfield" style={{width: `100vw`, height: `100vh`, touchAction: `none`}} width="840"></canvas>

<header className="fixed top-0 left-0 right-0 z-40 supports-[backdrop-filter]:bg-green-950/60 backdrop-blur border-b border-white/10" style={{paddingTop: `env(safe-area-inset-top)`}}>
<div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-dna h-4 w-4 text-teal-300" data-lucide="dna" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 16 1.5 1.5"></path><path d="m14 8-1.5-1.5"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="m16.5 10.5 1 1"></path><path d="m17 6-2.891-2.891"></path><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="m20 9 .891.891"></path><path d="M3.109 14.109 4 15"></path><path d="m6.5 12.5 1 1"></path><path d="m7 18 2.891 2.891"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path></svg>
</div>
<div className="text-base font-semibold tracking-tight font-sans">Arisyn OS</div>
</div>
<div className="flex items-center gap-4 text-xs text-white/70">
<div className="hidden md:flex items-center gap-2">
<svg className="lucide lucide-shield h-4 w-4 text-white/60" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="font-sans">Zero‑touch Autopilot</span>
</div>
<div className="hidden md:flex items-center gap-2">
<svg className="lucide lucide-activity h-4 w-4 text-white/60" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="tabular-nums font-sans" id="stageLabel">Stage 1/10</span>
</div>
</div>
</div>
</header>

<main className="pt-20 md:pt-24" id="app">

<section className="max-w-7xl mx-auto px-6 py-10 md:py-16" id="screen-upload">
<div className="max-w-3xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight font-roboto -rotate-x-15">Vocal DNA Lab</h1>
<p className="mt-3 text-white/70 text-base md:text-lg font-sans">Your Vocal DNA Journey Starts Now.</p>
</div>
<div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">

<label className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-6 md:p-8 cursor-pointer transition hover:bg-emerald-50/10" id="drop-ref" ondragleave="handleDragLeave(event)" ondragover="handleDrag(event)" ondrop="handleDrop(event,'reference')" onMouseLeave={(e) => { resetTilt(event) }} onMouseMove={(e) => { tilt3D(event) }} style={{transformStyle: `preserve-3d`, perspective: `1000px`}}>
<input accept="audio/*" className="hidden" id="file-ref" onChange={(e) => { handleFile(e.currentTarget.files[0],'reference') }} type="file" />
<div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{background: `radial-gradient(800px 300px at var(--mx,50%) var(--my,50%), rgba(236,72,153,0.15), transparent 60%)`}}></div>
<div className="flex items-center gap-4">
<div className="relative">
<svg className="block" height="72" viewBox="0 0 72 72" width="72">
<circle cx="36" cy="36" fill="none" r="30" stroke="rgb(30,41,59)" strokeWidth="6"></circle>
<circle cx="36" cy="36" fill="none" id="arc-ref" r="30" stroke="#14F2C7" strokeDasharray="188.5" strokeDashoffset="188.5" strokeLinecap="round" strokeWidth="6" style={{filter: `drop-shadow(0 0 6px rgba(20,242,199,0.6))`, transition: `stroke-dashoffset .35s ease`}}></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-music h-5 w-5 text-slate-300" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
</div>
</div>
<div className="min-w-0">
<div className="text-lg font-semibold tracking-tight font-sans">Upload Reference Song</div>
<div className="text-sm text-white/60 truncate font-sans" id="ref-file-label">Drag & drop or click to select</div>
</div>
<div className="ml-auto">
<button className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs transition font-sans hover:bg-emerald-50/10" onClick={(e) => { document.getElementById('file-ref').click() }} type="button">Browse</button>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: `0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 24px rgba(236,72,153,0.18)`}}></div>
<div className="pointer-events-none absolute inset-0" id="ripple-ref"></div>
</label>

<label className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-6 md:p-8 cursor-pointer transition hover:bg-emerald-50/10" id="drop-vocal" ondragleave="handleDragLeave(event)" ondragover="handleDrag(event)" ondrop="handleDrop(event,'vocal')" onMouseLeave={(e) => { resetTilt(event) }} onMouseMove={(e) => { tilt3D(event) }} style={{transformStyle: `preserve-3d`, perspective: `1000px`}}>
<input accept="audio/*" className="hidden" id="file-vocal" onChange={(e) => { handleFile(e.currentTarget.files[0],'vocal') }} type="file" />
<div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{background: `radial-gradient(800px 300px at var(--mx,50%) var(--my,50%), rgba(20,242,199,0.15), transparent 60%)`}}></div>
<div className="flex items-center gap-4">
<div className="relative">
<svg className="block" height="72" viewBox="0 0 72 72" width="72">
<circle cx="36" cy="36" fill="none" r="30" stroke="rgb(30,41,59)" strokeWidth="6"></circle>
<circle cx="36" cy="36" fill="none" id="arc-vocal" r="30" stroke="#14F2C7" strokeDasharray="188.5" strokeDashoffset="188.5" strokeLinecap="round" strokeWidth="6" style={{filter: `drop-shadow(0 0 6px rgba(20,242,199,0.6))`, transition: `stroke-dashoffset .35s ease`}}></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-mic h-5 w-5 text-teal-300" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
</div>
</div>
<div className="min-w-0">
<div className="text-lg font-semibold tracking-tight font-sans">Upload Your Vocals</div>
<div className="text-sm text-white/60 truncate font-sans" id="vocal-file-label">Drag & drop or click to select</div>
</div>
<div className="ml-auto">
<button className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs transition font-sans hover:bg-emerald-50/10" onClick={(e) => { document.getElementById('file-vocal').click() }} type="button">Browse</button>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: `0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 24px rgba(20,242,199,0.18)`}}></div>
<div className="pointer-events-none absolute inset-0" id="ripple-vocal"></div>
</label>
</div>
<div className="max-w-3xl mx-auto text-center mt-8 text-xs text-white/60 font-sans">
        Drag both files to launch Autopilot. No taps needed.
      </div>
</section>

<section className="hidden max-w-3xl mx-auto px-6 py-16" id="screen-transition">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-10 backdrop-blur-xl">
<div className="flex items-center gap-3">
<svg className="lucide lucide-cpu h-5 w-5 text-slate-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<div className="text-lg md:text-xl font-semibold tracking-tight font-sans">Extracting Vocal Chain…</div>
</div>
<div className="mt-6">
<div className="h-3 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full rounded-full" id="bar" style={{background: `linear-gradient(90deg,#ec4899 0%, #06b6d4 100%)`, width: `0%`, filter: `drop-shadow(0 0 10px rgba(236,72,153,0.35)) drop-shadow(0 0 10px rgba(6,182,212,0.35))`}}></div>
</div>
<div className="mt-3 text-xs text-white/60 font-sans" id="barPulse">Initializing…</div>
</div>
</div>
</section>

<section className="hidden max-w-6xl mx-auto px-6 py-12 md:py-16" id="screen-extract">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

<div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-4 overflow-hidden">
<div className="flex items-center justify-between px-2">
<div className="text-sm text-white/70 font-sans">DNA Synthesis</div>
<div className="flex items-center gap-2 text-xs text-white/60 font-sans">
<svg className="lucide lucide-waves h-4 w-4 text-teal-300" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
              Waveform Particles
            </div>
</div>
<div className="mt-3 rounded-xl ring-1 ring-white/10 overflow-hidden">
<div className="p-2 bg-green-950/30">
<div className="relative">
<div style={{height: `340px`}}>
<canvas className="absolute inset-0" id="dnaCanvas"></canvas>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed left-1/2 -translate-x-1/2 bottom-6 opacity-0 transition transform" id="toast-extract" style={{transform: `translateX(-50%) translateY(16px)`}}>
<div className="rounded-xl bg-white/10 ring-1 ring-white/15 px-4 py-2 backdrop-blur flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-teal-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-sans">Chain extracted successfully.</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-5 flex flex-col">
<div className="flex items-center gap-2">
<svg className="lucide lucide-sliders-vertical h-5 w-5 text-slate-300" data-lucide="sliders-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg>
<div className="text-lg font-semibold tracking-tight font-sans">FX Chain Breakdown</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-4">
<div className="rounded-xl bg-[#120a1a]/60 ring-1 ring-white/10 p-4 transition" id="fx-gate">
<div className="flex items-center gap-2">
<svg className="lucide lucide-lock h-4 w-4 text-white/60" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<div className="text-sm font-medium tracking-tight font-sans">Gate</div>
</div>
<div className="mt-2 text-xs text-white/60 font-sans">Threshold: −48 dB</div>
</div>
<div className="rounded-xl bg-[#120a1a]/60 ring-1 ring-white/10 p-4 transition" id="fx-eq">
<div className="flex items-center gap-2">
<svg className="lucide lucide-equal h-4 w-4 text-white/60" data-lucide="equal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="9" y2="9"></line><line x1="5" x2="19" y1="15" y2="15"></line></svg>
<div className="text-sm font-medium tracking-tight font-sans">EQ</div>
</div>
<div className="mt-2 text-xs text-white/60 font-sans">Bands: 120Hz, 2.5k, 8k</div>
</div>
<div className="rounded-xl bg-[#120a1a]/60 ring-1 ring-white/10 p-4 transition" id="fx-comp">
<div className="flex items-center gap-2">
<svg className="lucide lucide-circle-equal h-4 w-4 text-white/60" data-lucide="circle-equal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10h10"></path><path d="M7 14h10"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="text-sm font-medium tracking-tight font-sans">Comp</div>
</div>
<div className="mt-2 text-xs text-white/60 font-sans">Ratio: 3.2:1</div>
</div>
<div className="rounded-xl bg-[#120a1a]/60 ring-1 ring-white/10 p-4 transition" id="fx-reverb">
<div className="flex items-center gap-2">
<svg className="lucide lucide-library h-4 w-4 text-white/60" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
<div className="text-sm font-medium tracking-tight font-sans">Reverb</div>
</div>
<div className="mt-2 text-xs text-white/60 font-sans">Decay: 1.7s</div>
</div>
</div>
<div className="mt-auto pt-5 text-xs text-white/50 font-sans">
            Modules light up as the chain activates.
          </div>
</div>
</div>
</section>

<section className="hidden max-w-5xl mx-auto px-6 py-12" id="screen-results">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-6 md:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-2xl md:text-3xl tracking-tight font-manrope font-medium">Extracted Vocal Chain</div>
<div className="mt-2 text-sm text-white/60 font-sans">Parameters inferred from your reference.</div>
</div>
<div className="text-right">
<div className="text-xs text-white/60 mb-1 font-sans">Confidence</div>
<div className="h-2 w-40 bg-white/5 ring-1 ring-white/10 rounded-full overflow-hidden">
<div className="h-full transition-all bg-emerald-50/80" id="conf-bar" style={{width: `62%`, filter: `drop-shadow(0 0 8px rgba(236,72,153,0.4))`}}></div>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-white/60 font-sans">Gate</div>
<div className="mt-1 text-sky-300 text-sm font-sans" id="param-gate">Threshold −48 dB, Hold 80ms</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-white/60 font-sans">EQ</div>
<div className="mt-1 text-sky-300 text-sm font-sans" id="param-eq">120Hz −3dB, 2.5k +2.5dB, 8k +3dB</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-white/60 font-sans">Comp</div>
<div className="mt-1 text-sky-300 text-sm font-sans" id="param-comp">Attack 8ms, Release 60ms, Ratio 3.2:1</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-white/60 font-sans">Reverb</div>
<div className="mt-1 text-sky-300 text-sm font-sans" id="param-reverb">Decay 1.7s, Pre‑delay 12ms, Mix 14%</div>
</div>

<div className="md:col-span-2 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-white/60 font-sans">Tonal Profile</div>
<div className="text-[11px] text-white/50 font-sans">Reference vs Your Vocal</div>
</div>
<div className="mt-2 rounded-lg ring-1 ring-white/10">
<div className="p-3">
<div className="relative">
<div>
<canvas height="120" id="tonalChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="text-xs text-white/60 font-sans">Tip: Export preset to use in your DAW.</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm transition font-sans hover:bg-emerald-50/10" id="btn-rerun">Rerun Autopilot</button>
<button className="px-4 py-2 rounded-lg ring-1 text-sm transition font-sans hover:bg-yellow-50 bg-yellow-500/80 ring-yellow-400/50" id="btn-export">Export Preset</button>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}

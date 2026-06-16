import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icon render
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Build grid dynamically: rows A–F, cols 1–10
      const poolGrid = document.getElementById('poolGrid');
      const rows = ['A','B','C','D','E','F'];
      const cols = Array.from({ length: 10 }, (_, i) => i + 1);

      const cellClass = "pool-cell relative bg-white/70 text-neutral-700 border border-slate-500/40 flex items-start justify-start";
      rows.forEach((r, ri) => {
        cols.forEach((c) => {
          const id = `${r}${c}`;
          const cell = document.createElement('div');
          cell.className = cellClass;
          cell.dataset.cell = id;

          // Label
          const label = document.createElement('span');
          label.className = "select-none p-1.5 md:p-2 text-[10px] md:text-xs font-medium text-neutral-700/80";
          label.textContent = id;
          cell.appendChild(label);

          // Alert overlay (hidden by default)
          const overlay = document.createElement('div');
          overlay.className = "alert-overlay absolute inset-0 rounded-sm";
          overlay.innerHTML = `
            <div class="alert-stripes"></div>
            <div class="alert-glow"></div>
            <div class="beacon-wrap">
              <span class="beacon-core"></span>
              <span class="beacon-ping"></span>
            </div>
          `;
          cell.appendChild(overlay);

          poolGrid.appendChild(cell);
        });
      });

      // Alert palette
      const palette = {
        prealarm: { soft: "rgba(250, 204, 21, 0.45)", solid: "#facc15" },   // pale yellow
        warning:  { soft: "rgba(251, 146, 60, 0.50)", solid: "#fb923c" },   // orange
        danger:   { soft: "rgba(239, 68, 68, 0.55)",  solid: "#ef4444" }    // red
      };

      function randomCell() {
        const cells = document.querySelectorAll('.pool-cell');
        return cells[Math.floor(Math.random() * cells.length)];
      }

      function setAlert(cell, type) {
        const overlay = cell.querySelector('.alert-overlay');
        const { soft, solid } = palette[type];

        overlay.style.setProperty('--alert-soft', soft);
        overlay.style.setProperty('--alert-solid', solid);

        // Reveal overlay
        overlay.classList.add('visible');

        // Make sure beacon colors match
        const core = overlay.querySelector('.beacon-core');
        const ping = overlay.querySelector('.beacon-ping');
        core.style.backgroundColor = solid;
        ping.style.borderColor = solid;
      }

      // Button bindings
      const btnPre = document.getElementById('btn-pre');
      const btnWar = document.getElementById('btn-war');
      const btnDan = document.getElementById('btn-dang');

      btnPre.addEventListener('click', () => setAlert(randomCell(), 'prealarm'));
      btnWar.addEventListener('click', () => setAlert(randomCell(), 'warning'));
      btnDan.addEventListener('click', () => setAlert(randomCell(), 'danger'));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex items-start md:items-center justify-center px-4 py-8">
<div className="w-full max-w-6xl">

<div className="mb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Pool Risk Monitor</h1>
<p className="text-sm text-neutral-600">Tap a test button to simulate an alert in a random tile.</p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="group inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium tracking-tight border border-yellow-300/70 bg-yellow-50 text-yellow-900 hover:bg-yellow-100 transition shadow-sm" id="btn-pre">
<i className="w-4.5 h-4.5 text-yellow-700" data-lucide="bell-ring"></i>
              Prealarm
            </button>
<button className="group inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium tracking-tight border border-orange-300/70 bg-orange-50 text-orange-900 hover:bg-orange-100 transition shadow-sm" id="btn-war">
<i className="w-4.5 h-4.5 text-orange-700" data-lucide="alert-triangle"></i>
              Warning
            </button>
<button className="group inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium tracking-tight border border-red-300/70 bg-red-50 text-red-900 hover:bg-red-100 transition shadow-sm" id="btn-dang">
<i className="w-4.5 h-4.5 text-red-700" data-lucide="alert-octagon"></i>
              Danger
            </button>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white backdrop-blur-md shadow-2xl overflow-hidden">
<div className="p-4 md:p-6">

<div className="water-bg rounded-xl ring-1 ring-black/10 shadow-xl" id="pool" style={{aspectRatio: '10 / 6'}}>

<div className="absolute inset-2 md:inset-3 grid grid-cols-10 grid-rows-6 bg-sky-100/60 rounded-lg overflow-hidden" id="poolGrid">

</div>
</div>
</div>

<div className="px-4 md:px-6 pb-5">
<div className="flex flex-wrap gap-4 text-xs text-neutral-600">
<div className="inline-flex items-center gap-2">
<span className="inline-block h-3 w-3 rounded-sm bg-yellow-400/70 ring-2 ring-yellow-500/70"></span>
                Prealarm
              </div>
<div className="inline-flex items-center gap-2">
<span className="inline-block h-3 w-3 rounded-sm bg-orange-400/70 ring-2 ring-orange-500/70"></span>
                Warning
              </div>
<div className="inline-flex items-center gap-2">
<span className="inline-block h-3 w-3 rounded-sm bg-red-500/70 ring-2 ring-red-600/70"></span>
                Danger
              </div>
<div className="ml-auto text-neutral-400">A1–F10 grid</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}

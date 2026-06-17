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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Data and dimensions
      const skills = [
        { skill: "Communication",    score: 78 },
        { skill: "Technical Skills", score: 85 },
        { skill: "Leadership",       score: 67 },
        { skill: "Creativity",       score: 72 },
        { skill: "Teamwork",         score: 89 },
        { skill: "Time Management",  score: 77 }
      ];
      const N = skills.length, MAX = 100;
      // SVG geometry
      const SVG_SIZE = 480,   // SVG & container dimensions
            CX = SVG_SIZE/2, CY = SVG_SIZE/2,
            RAD = 180,
            MIN_R = 55,
            LABEL_MARGIN = 48, // How far labels are beyond main radius (increase for safety)
            LABEL_R = RAD + LABEL_MARGIN;

      function polar(i, r) {
        const a = (2 * Math.PI) * (i / N) - Math.PI/2;
        return [CX + r * Math.cos(a), CY + r * Math.sin(a)];
      }
      function drawRadar() {
        const svg = document.getElementById('radar');
        svg.innerHTML = '';
        // Grid circles
        [0.25,0.5,0.75,1].forEach(f=>{
          svg.innerHTML += `<circle cx="${CX}" cy="${CY}" r="${MIN_R+f*(RAD-MIN_R)}"
           fill="none" stroke="#e5e7eb" stroke-dasharray="2 5" stroke-width="1" opacity="0.13"/>`
        });
        // Axes
        for(let i=0;i<N;++i){
          const [x,y] = polar(i, RAD);
          svg.innerHTML += `<line x1="${CX}" y1="${CY}" x2="${x}" y2="${y}" stroke="#e5e7eb" stroke-width="1.2" opacity="0.18"/>`
        }
        // Radar polygon
        const pts = skills.map((d,i)=>polar(i,MIN_R+Math.max(0,Math.min(d.score/MAX,1))*(RAD-MIN_R)));
        svg.innerHTML += `
          <polygon points="${pts.map(p=>p.join(',')).join(' ')}"
            fill="#67e8f94a" stroke="#00e9ea" stroke-width="2.2" stroke-linejoin="round" opacity="0.98"/>`;
        // Points and labels
        pts.forEach((p,i)=>{
          svg.innerHTML += `<circle cx="${p[0]}" cy="${p[1]}" r="10" fill="#101420" stroke="#06b6d4" stroke-width="2.5"/>`;
          // Outward label, subtle, never cropped
          const [lx,ly]=polar(i,LABEL_R);
          svg.innerHTML += `<text x="${lx}" y="${ly}" text-anchor="middle" alignment-baseline="middle"
            font-size="1rem" font-weight="500" fill="#a1a1aa"
            style="letter-spacing:0.01em;font-family:inherit;dominant-baseline:middle;">${skills[i].skill}</text>`;
        });
      }
      drawRadar();
      function mean(arr) {return arr.reduce((a,b)=>a+b,0)/arr.length;}
      document.getElementById('avgScore').textContent = mean(skills.map(d=>d.score)).toFixed(1);
      document.getElementById('viewData').onclick = ()=>{
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modalTable').innerHTML =
          skills.map(d=>`<tr>
            <td class="py-2">${d.skill}</td>
            <td class="py-2 text-right font-bold">${d.score}</td>
          </tr>`).join('');
        document.getElementById('modalAvg').textContent = mean(skills.map(d=>d.score)).toFixed(1);
      };
      document.getElementById('closeModal').onclick = ()=>{document.getElementById('modal').classList.add('hidden');};
      document.getElementById('modal').onclick = e=>{if(e.target.id==='modal') document.getElementById('modal').classList.add('hidden');};
    
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
      
<div className="max-w-2xl w-full rounded-3xl p-8 bg-white/5 border border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col gap-8 relative">
<header className="flex flex-col gap-2 items-center">
<h2 className="text-3xl font-bold text-white tracking-tight">Employee Skill Assessment</h2>
<p className="text-center text-white/60 text-lg font-medium">2024 Competency Radar</p>
</header>
<div className="w-full flex justify-center items-center">
<div className="relative w-[480px] h-[480px]">
<svg className="block select-none" height="480" id="radar" viewbox="0 0 480 480" width="480"></svg>
</div>
</div>
<div className="flex flex-row justify-between items-center mt-7">
<div>
<div className="text-5xl font-bold text-cyan-400" id="avgScore">–</div>
<div className="text-sm text-white/60 tracking-wide font-semibold uppercase">Avg. Skill Score</div>
</div>
<button className="font-bold text-base px-6 py-3 rounded-xl bg-white/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 shadow transition" id="viewData">Raw Data</button>
</div>
<div className="fixed hidden inset-0 bg-black/70 flex items-center justify-center z-50" id="modal">
<div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-12 py-10 shadow-2xl max-w-md mx-auto relative">
<button className="absolute right-8 top-5 text-white text-3xl hover:text-cyan-400 font-bold" id="closeModal">×</button>
<h3 className="text-2xl font-bold text-cyan-400 mb-5">Skill Scores</h3>
<table className="w-full text-left text-xl text-white mb-3">
<thead>
<tr><th className="font-medium pb-3">Skill</th><th className="font-medium pb-3 text-right">Score</th></tr>
</thead>
<tbody id="modalTable"></tbody>
</table>
<div className="w-full mt-5 text-right text-cyan-400 font-bold text-xl">Avg: <span id="modalAvg"></span></div>
</div>
</div>

</div>

    </>
  );
}

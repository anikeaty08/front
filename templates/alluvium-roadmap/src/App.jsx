import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // 1. Initialize Icons
        lucide.createIcons();

        // 2. Generate Floating Particles
        const particleContainer = document.getElementById('particles-container');
        for(let i = 0; i < 20; i++) {
            const span = document.createElement('span');
            span.classList.add('particle');
            const size = Math.random() * 3 + 1; // 1-4px
            span.style.width = `${size}px`;
            span.style.height = `${size}px`;
            span.style.left = `${Math.random() * 100}vw`;
            span.style.animationDuration = `${Math.random() * 10 + 10}s`;
            span.style.animationDelay = `-${Math.random() * 10}s`;
            particleContainer.appendChild(span);
        }

        // 3. Draw Winding Stream Path
        function updateRiverPath() {
            const path = document.getElementById('riverPath');
            const sections = document.querySelectorAll('section');
            if (sections.length < 3) return;

            const box1 = sections[0].getBoundingClientRect();
            const box2 = sections[1].getBoundingClientRect();
            const box3 = sections[2].getBoundingClientRect();
            
            // Container offset
            const mainTop = document.querySelector('main').getBoundingClientRect().top;
            
            // Centers relative to container
            const y1 = (box1.top + box1.height/2) - mainTop;
            const y2 = (box2.top + box2.height/2) - mainTop;
            const y3 = (box3.top + box3.height/2) - mainTop;
            
            // X center is roughly 50% since we are centered, 
            // but let's make it wind slightly based on screen width
            const w = document.querySelector('main').offsetWidth;
            const xCenter = w / 2;
            
            // Organic Curve Points
            // M x1 y1 C cp1x cp1y, cp2x cp2y, x2 y2
            const d = `
                M ${xCenter} 0 
                L ${xCenter} ${y1 - 70}
                C ${xCenter} ${y1 - 50}, ${xCenter - 40} ${y1 - 50}, ${xCenter - 20} ${y1}
                S ${xCenter + 30} ${y2 - 50}, ${xCenter + 10} ${y2}
                S ${xCenter - 20} ${y3 - 50}, ${xCenter} ${y3}
                L ${xCenter} ${y3 + 100}
            `;
            
            path.setAttribute('d', d);
        }

        window.addEventListener('resize', updateRiverPath);
        // Delay slightly to ensure layout is ready
        setTimeout(updateRiverPath, 100);

        // 4. Interaction Logic
        function revealSection(id) {
            const boulder = document.getElementById(`boulder-${id}`);
            const card = document.getElementById(`card-${id}`);

            if (boulder && card) {
                boulder.classList.add('rolled');
                // Play sound effect here ideally
                setTimeout(() => {
                    card.classList.add('revealed');
                }, 200); 
            }
        }

        function resetSection(id) {
            const boulder = document.getElementById(`boulder-${id}`);
            const card = document.getElementById(`card-${id}`);

            if (boulder && card) {
                card.classList.remove('revealed');
                setTimeout(() => {
                    boulder.classList.remove('rolled');
                }, 400);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="river-bed"></div>
<div className="water-flow"></div>

<div id="particles-container"></div>

<header className="fixed top-0 w-full z-50 pt-8 pb-12 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent pointer-events-none">
<div className="flex justify-center items-center pointer-events-auto">
<div className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/5 shadow-xl">
<i className="text-cyan-400 w-5 h-5" data-lucide="waves"></i>
<h1 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">Alluvium</h1>
</div>
</div>
</header>

<main className="relative z-10 w-full max-w-md mx-auto pt-32 pb-32 px-6 min-h-screen flex flex-col justify-center items-center">

<svg className="stream-svg" preserveaspectratio="none">
<defs>
<lineargradient id="streamGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#38bdf8" stop-opacity="0"></stop>
<stop offset="20%" stop-color="#38bdf8" stop-opacity="0.3"></stop>
<stop offset="80%" stop-color="#38bdf8" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#38bdf8" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="stream-path" d="M 50 0 C 50 0 50 100 50 100" id="riverPath"></path>
</svg>

<section className="relative w-full mb-32 min-h-[160px] flex items-center justify-center" id="section-now">

<div className="pebble-container absolute z-20" id="boulder-now" onclick="revealSection('now')">
<div className="ripple"></div>
<div className="ripple"></div>
<div className="pebble group">
<span className="text-[10px] text-cyan-200/70 font-bold tracking-widest uppercase mb-1 drop-shadow-lg">Current</span>
<span className="text-xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">NOW</span>
<i className="w-4 h-4 text-cyan-400 mt-2 opacity-60 group-hover:opacity-100 transition-all duration-500" data-lucide="droplets"></i>
</div>
</div>

<div className="oasis-card w-full" id="card-now">
<div className="glass-panel rounded-2xl p-1 overflow-hidden">
<div className="px-5 py-3 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/30">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
<h2 className="text-xs font-bold tracking-widest text-cyan-100 uppercase">Surface Flow</h2>
</div>
<button className="text-slate-500 hover:text-cyan-400 transition-colors p-1" onclick="resetSection('now')">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-2 space-y-2">

<div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-cyan-500/30 transition-colors">
<div className="flex justify-between items-start gap-3">
<div>
<h3 className="text-sm font-medium text-slate-100">NetSuite Automation</h3>
<p className="text-xs text-slate-400 mt-1">Auto-generating monthly CFO Board Reports via AI.</p>
</div>
<i className="w-4 h-4 text-emerald-400 mt-1 shrink-0" data-lucide="check-circle-2"></i>
</div>
</div>

<div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-cyan-500/30 transition-colors">
<div className="flex justify-between items-start gap-3">
<div>
<h3 className="text-sm font-medium text-slate-100">HubSpot Audit</h3>
<p className="text-xs text-slate-400 mt-1">Analyzing "Breeze AI" vs. "ZoomInfo" data ingestion quality.</p>
</div>
<i className="w-4 h-4 text-amber-400 mt-1 shrink-0 animate-spin" data-lucide="loader-2"></i>
</div>
</div>

<div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-cyan-500/30 transition-colors">
<div className="flex justify-between items-start gap-3">
<div>
<h3 className="text-sm font-medium text-slate-100">The Product Pulse</h3>
<p className="text-xs text-slate-400 mt-1">VS Code-to-Teams connector to stop internal blindsides.</p>
</div>
<span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded-full border border-cyan-800">ALPHA</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full mb-32 min-h-[160px] flex items-center justify-center" id="section-next">
<div className="pebble-container absolute z-20" id="boulder-next" onclick="revealSection('next')">
<div className="ripple"></div>
<div className="ripple"></div>
<div className="pebble group" style={{borderRadius: '50% 60% 60% 40% / 40% 50% 60% 50%'}}>
<span className="text-[10px] text-blue-200/70 font-bold tracking-widest uppercase mb-1 drop-shadow-lg">Sediment</span>
<span className="text-xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">NEXT</span>
<i className="w-4 h-4 text-blue-400 mt-2 opacity-60 group-hover:opacity-100 transition-all duration-500" data-lucide="arrow-down"></i>
</div>
</div>
<div className="oasis-card w-full" id="card-next">
<div className="glass-panel rounded-2xl p-1 overflow-hidden">
<div className="px-5 py-3 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/30">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6]"></div>
<h2 className="text-xs font-bold tracking-widest text-blue-100 uppercase">Sediment Layer</h2>
</div>
<button className="text-slate-500 hover:text-blue-400 transition-colors p-1" onclick="resetSection('next')">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-2 space-y-2">
<div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-colors">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" data-lucide="activity"></i>
<div>
<h3 className="text-sm font-medium text-slate-100">Common Spirit</h3>
<p className="text-xs text-slate-400 mt-1">Scaling "Get Care Now" &amp; online scheduling analytics.</p>
</div>
</div>
</div>
<div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-colors">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" data-lucide="calendar"></i>
<div>
<h3 className="text-sm font-medium text-slate-100">Orchestrate Launch</h3>
<p className="text-xs text-slate-400 mt-1">Onsite implementation scheduled for Jan 27-29.</p>
</div>
</div>
</div>
<div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-colors">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" data-lucide="network"></i>
<div>
<h3 className="text-sm font-medium text-slate-100">GTM Architecture</h3>
<p className="text-xs text-slate-400 mt-1">Rebuilding Sales/Marketing data foundation.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full mb-12 min-h-[160px] flex items-center justify-center" id="section-later">
<div className="pebble-container absolute z-20" id="boulder-later" onclick="revealSection('later')">
<div className="ripple"></div>
<div className="ripple"></div>
<div className="pebble group" style={{borderRadius: '45% 55% 45% 55% / 55% 45% 55% 45%'}}>
<span className="text-[10px] text-purple-200/70 font-bold tracking-widest uppercase mb-1 drop-shadow-lg">Deep Water</span>
<span className="text-xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">LATER</span>
<i className="w-4 h-4 text-purple-400 mt-2 opacity-60 group-hover:opacity-100 transition-all duration-500" data-lucide="anchor"></i>
</div>
</div>
<div className="oasis-card w-full" id="card-later">
<div className="glass-panel rounded-2xl p-1 overflow-hidden">
<div className="px-5 py-3 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/30">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]"></div>
<h2 className="text-xs font-bold tracking-widest text-purple-100 uppercase">Deep Future</h2>
</div>
<button className="text-slate-500 hover:text-purple-400 transition-colors p-1" onclick="resetSection('later')">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-2 space-y-2">
<div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-purple-500/30 transition-colors">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" data-lucide="bot"></i>
<div>
<h3 className="text-sm font-medium text-slate-100">Full AI GTM Stack</h3>
<p className="text-xs text-slate-400 mt-1">Autonomous prospecting agents.</p>
</div>
</div>
</div>
<div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-purple-500/30 transition-colors">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" data-lucide="smartphone"></i>
<div>
<h3 className="text-sm font-medium text-slate-100">Mobile App v2</h3>
<p className="text-xs text-slate-400 mt-1">Expanding 4.5-star rating features.</p>
</div>
</div>
</div>
<div className="p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-purple-500/30 transition-colors">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" data-lucide="trash-2"></i>
<div>
<h3 className="text-sm font-medium text-slate-100">Ghost Data Cleanup</h3>
<p className="text-xs text-slate-400 mt-1">Purging legacy database entries.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}

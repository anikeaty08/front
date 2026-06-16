import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
navy: '#002147',
cyan: '#00D1FF',
dark: '#0a0a0a',
panel: '#111111',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function startJourney() {
            const btn = document.getElementById('start-btn');
            const path = document.getElementById('journey-path');
            const icon = document.getElementById('travel-icon');
            const status = document.getElementById('status-text');
            const dots = {
                hyd: document.getElementById('dot-hyd'),
                kurnool: document.getElementById('dot-kurnool'),
                anantapur: document.getElementById('dot-anantapur'),
                blr: document.getElementById('dot-blr')
            };

            // Disable button
            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');
            btn.innerHTML = '<iconify-icon icon="solar:refresh-linear" class="animate-spin"></iconify-icon> Traveling...';

            // Reset
            path.classList.remove('animate-path');
            icon.classList.remove('bus-moving');
            Object.values(dots).forEach(d => d.classList.remove('milestone-active'));

            // Force reflow
            void path.offsetWidth;

            // Start Animation
            path.classList.add('animate-path');
            icon.classList.add('bus-moving');

            // Timeline Events
            updateStatus("Departing Hyderabad... Engine Start.", 0);
            activateDot(dots.hyd, 100);

            setTimeout(() => {
                updateStatus("Crossing Kurnool... Speed optimal.", 0);
                activateDot(dots.kurnool, 0);
            }, 1200);

            setTimeout(() => {
                updateStatus("Entering Anantapur... Logic gates open.", 0);
                activateDot(dots.anantapur, 0);
            }, 2400);

            setTimeout(() => {
                updateStatus("Approaching Silk Board... The Final Boss.", 0);
            }, 3200);

            setTimeout(() => {
                updateStatus("WELCOME TO JUSPAY! Unlocking ₹27 LPA...", 0);
                activateDot(dots.blr, 0);
                
                // Re-enable button state (visual only)
                btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Offer Secured';
                btn.classList.replace('bg-brand-cyan', 'bg-emerald-500');
                btn.classList.replace('text-brand-navy', 'text-white');
                
                document.body.style.overflow = 'hidden'; // prevent scroll for a sec
            }, 4000);
        }

        function updateStatus(text, delay) {
            const status = document.getElementById('status-text');
            status.style.opacity = 0;
            setTimeout(() => {
                status.innerText = text;
                status.style.opacity = 1;
            }, 200);
        }

        function activateDot(element, delay) {
            setTimeout(() => {
                element.classList.add('milestone-active');
            }, delay);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-brand-navy to-brand-cyan flex items-center justify-center font-mono text-xs font-semibold text-white tracking-tighter">
                    RT
                </div>
<span className="text-sm font-medium tracking-tight text-white/80">Road to Juspay</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
</span>
<span className="text-xs font-mono text-brand-cyan tracking-wide">STATUS: ROCKSTAR</span>
</div>
</div>
</div>
</header>
<main className="flex-grow pt-24 pb-12 px-6 w-full max-w-3xl mx-auto flex flex-col items-center">

<section className="w-full text-center mb-16 relative">

<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-cyan/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex flex-wrap justify-center gap-3 mb-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<iconify-icon className="text-brand-cyan" icon="solar:gamepad-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Round: Final Boss</span>
</div>

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<iconify-icon className="text-emerald-400" icon="solar:bag-dollar-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">Bounty: ₹27 LPA</span>
</div>
</div>
<h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4 leading-[1.1]">
                Target: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white text-glow">JUSPAY</span>
</h1>
<p className="text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
                Ravi Teja (The <span className="text-white font-medium">ROCK</span> star) is en route to Bengaluru. 
                <br className="hidden sm:block"/>Prepare the logic gates.
            </p>
</section>

<section className="w-full glass-panel rounded-2xl p-6 sm:p-8 mb-12 border border-white/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-brand-cyan" icon="solar:map-point-wave-linear" width="64"></iconify-icon>
</div>
<div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between mb-8">
<div>
<h2 className="text-xl font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-brand-cyan" icon="solar:route-linear" width="20"></iconify-icon>
                        Journey Log
                    </h2>
<p className="text-sm text-gray-500 mt-1">Live tracking: HYD <span className="text-gray-700 mx-1">→</span> BLR</p>
</div>
<button className="w-full sm:w-auto px-6 py-2.5 bg-brand-cyan text-brand-navy font-semibold text-sm rounded-lg btn-glow flex items-center justify-center gap-2" id="start-btn" onclick="startJourney()">
<iconify-icon icon="solar:rocket-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Start Journey
                </button>
</div>

<div className="relative h-[400px] w-full bg-black/20 rounded-xl border border-white/5 flex justify-center overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml', backgroundSize: '100px', animation: 'moveClouds 20s linear infinite'}}></div>
<style>
                    @keyframes moveClouds { from { background-position: 0 0; } to { background-position: 0 400px; } }
                </style>

<svg className="relative z-10" height="400" viewbox="0 0 100 400" width="100">

<path d="M50 20 L50 380" fill="none" stroke="#333" stroke-dasharray="4 4" strokeWidth="2"></path>

<path className="path-line" d="M50 20 L50 380" fill="none" id="journey-path" stroke="#00D1FF" strokeWidth="2"></path>

<circle className="milestone-dot" cx="50" cy="20" fill="#1a1a1a" id="dot-hyd" r="4" stroke="#555" strokeWidth="2"></circle>
<circle className="milestone-dot" cx="50" cy="140" fill="#1a1a1a" id="dot-kurnool" r="4" stroke="#555" strokeWidth="2"></circle>
<circle className="milestone-dot" cx="50" cy="260" fill="#1a1a1a" id="dot-anantapur" r="4" stroke="#555" strokeWidth="2"></circle>
<circle className="milestone-dot" cx="50" cy="380" fill="#1a1a1a" id="dot-blr" r="4" stroke="#555" strokeWidth="2"></circle>

<g className="bus-marker" id="travel-icon">
<circle fill="#000" r="12" stroke="#00D1FF" strokeWidth="1.5"></circle>
<foreignobject height="16" width="16" x="-8" y="-8">
<div className="flex items-center justify-center h-full w-full text-brand-cyan">
<iconify-icon height="14" icon="solar:bus-linear" width="14"></iconify-icon>
</div>
</foreignobject>
</g>
</svg>

<div className="absolute top-[10px] left-[55%] text-xs font-mono text-gray-400">HYD <span className="text-gray-600">0km</span></div>
<div className="absolute top-[130px] right-[55%] text-xs font-mono text-gray-500 text-right w-24">KURNOOL</div>
<div className="absolute top-[250px] left-[55%] text-xs font-mono text-gray-500">ANANTAPUR</div>
<div className="absolute bottom-[10px] right-[55%] text-xs font-mono text-brand-cyan font-bold text-right w-24">BENGALURU</div>
</div>

<div className="mt-4 p-3 bg-black/40 border border-brand-cyan/10 rounded-lg font-mono text-xs text-brand-cyan/90 h-10 flex items-center">
<span className="mr-2 text-gray-600">&gt;</span>
<span className="typing-effect" id="status-text">Waiting for departure...</span>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-16">

<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-brand-cyan/30 transition-colors group">
<div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/10 transition-colors">
<iconify-icon className="text-gray-300 group-hover:text-brand-cyan transition-colors" icon="solar:music-library-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">The Rockstar Mindset</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                    Ravi, you've passed every test. This isn't just an interview; it's your stage. Play your best chords and let the code sing.
                </p>
</div>

<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-brand-cyan/30 transition-colors group">
<div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/10 transition-colors">
<iconify-icon className="text-gray-300 group-hover:text-brand-cyan transition-colors" icon="solar:code-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Juspay Logic</h3>
<p className="text-sm text-gray-400 leading-relaxed">
<code className="text-brand-cyan bg-brand-cyan/5 px-1 py-0.5 rounded text-xs">Success = map(win, Ravi)</code>. Filter out the stress. You are the 'Pure Function' of success!
                </p>
</div>
</div>
</main>

<footer className="w-full border-t border-white/5 py-8 mt-auto bg-black/20">
<div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center text-center">
<p className="text-base font-medium text-white mb-2">We have full faith in you, Rockstar.</p>
<p className="text-sm text-gray-500 mb-6">See you in Bengaluru with the offer letter!</p>
<div className="flex items-center gap-2 text-xs text-gray-600 font-mono uppercase tracking-wider">
<iconify-icon className="text-red-500" icon="solar:heart-linear" width="12"></iconify-icon>
                Designed by your IARE squad
            </div>
</div>
</footer>


    </>
  );
}

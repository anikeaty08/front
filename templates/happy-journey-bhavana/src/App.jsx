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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
sky: '#A8DAFF',
peach: '#FFD4C4',
mint: '#C4F4D4',
lavender: '#E6D4FF',
cream: '#FFF8E7',
gold: '#FFE5B4',
darkGold: '#D4AF37',
},
letterSpacing: {
tightest: '-0.05em',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. Reveal Interaction ---
            const revealBtn = document.getElementById('revealBtn');
            const revealedName = document.getElementById('revealedName');

            revealBtn.addEventListener('click', () => {
                revealBtn.classList.add('hidden');
                revealedName.classList.remove('hidden');
                void revealedName.offsetWidth; 
                revealedName.classList.remove('opacity-0', 'translate-y-4');
                revealedName.classList.add('opacity-100', 'translate-y-0');
            });

            // --- 2. Map & Flight Logic ---
            const hydCoords = [17.3850, 78.4867];
            const dxbCoords = [25.2048, 55.2708];

            const map = L.map('map', {
                zoomControl: false,
                scrollWheelZoom: false,
                dragging: false,
                attributionControl: false
            }).setView([21.5, 66], 4);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);

            const createCustomIcon = (color) => L.divIcon({
                className: 'custom-pin',
                html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative;">
                        <div style="position: absolute; inset: -4px; border-radius: 50%; border: 1px solid ${color}; opacity: 0.5; animation: pulse 2s infinite;"></div>
                       </div>`,
                iconSize: [12, 12],
                iconAnchor: [6, 6]
            });

            const hydMarker = L.marker(hydCoords, { icon: createCustomIcon('#FFD4C4') }).addTo(map);
            const dxbMarker = L.marker(dxbCoords, { icon: createCustomIcon('#C4F4D4') }).addTo(map);

            const flyBtn = document.getElementById('flyBtn');
            const plane = document.getElementById('plane');
            const flightPathSvg = document.getElementById('flightPath');

            flyBtn.addEventListener('click', () => {
                const startPoint = map.latLngToContainerPoint(hydCoords);
                const endPoint = map.latLngToContainerPoint(dxbCoords);
                
                const cx = (startPoint.x + endPoint.x) / 2;
                const cy = Math.min(startPoint.y, endPoint.y) - 100;

                const pathString = `M${startPoint.x},${startPoint.y} Q${cx},${cy} ${endPoint.x},${endPoint.y}`;
                flightPathSvg.setAttribute('d', pathString);

                plane.style.left = '0px'; 
                plane.style.top = '0px';
                plane.style.opacity = '1';
                plane.style.offsetPath = `path('${pathString}')`;
                
                plane.classList.remove('flying');
                void plane.offsetWidth;
                plane.classList.add('flying');

                flyBtn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2"></span> Flying...`;
                flyBtn.disabled = true;

                setTimeout(() => {
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#A8DAFF', '#FFD4C4', '#C4F4D4', '#E6D4FF']
                    });
                    
                    flyBtn.innerHTML = `<span class="iconify" data-icon="lucide:check"></span> Arrived!`;
                    flyBtn.classList.remove('bg-slate-900');
                    flyBtn.classList.add('bg-mint', 'text-slate-800');
                    
                    const popup = L.popup({closeButton: false, className: 'pastel-popup'})
                        .setLatLng(dxbCoords)
                        .setContent('<span style="font-family: Inter; font-weight: 500; color: #333;">Welcome to Dubai! 🇦🇪</span>')
                        .openOn(map);

                }, 4000);
            });

            // --- 3. Chocolate Reveal ---
            const chocoBtn = document.getElementById('chocoBtn');
            const chocoReveal = document.getElementById('chocoReveal');

            chocoBtn.addEventListener('click', () => {
                chocoBtn.style.display = 'none';
                chocoReveal.classList.remove('hidden');
                confetti({
                    particleCount: 30,
                    spread: 40,
                    origin: { y: 0.9 },
                    scalar: 0.7,
                    shapes: ['circle']
                });
            });
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
      

<nav className="w-full flex justify-between items-center py-6 px-6 max-w-5xl mx-auto">
<div className="flex items-center gap-2">
<span className="iconify text-2xl text-slate-800" data-icon="lucide:plane"></span>
<span className="text-sm font-medium tracking-tight text-slate-800 uppercase">Project: Dubai Pitch</span>
</div>
<div className="text-xs font-medium bg-white/60 px-3 py-1 rounded-full border border-slate-100 shadow-sm text-slate-500">
            Farewell Edition
        </div>
</nav>

<main className="max-w-3xl mx-auto px-6 pb-24 space-y-24">

<section className="text-center pt-10 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-peach/30 rounded-full blur-3xl -z-10"></div>
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint/30 text-slate-700 text-xs font-medium border border-mint/50 animate-pulse">
<span className="iconify" data-icon="lucide:sparkles"></span>
<span>Marhaba, Dubai!</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-800 leading-[1.1]">
                    Wishing You an <br/>
<span className="bg-gradient-to-r from-sky to-lavender bg-clip-text text-transparent pb-2">Amazing Journey!</span>
</h1>

<p className="text-lg md:text-xl text-slate-500 max-w-lg mx-auto font-light leading-relaxed">
                    All the best for the project pitch! 
                    <br/><span className="text-slate-800 font-medium">Go perform well and make it happen.</span>
</p>

<div className="pt-8 flex flex-col items-center justify-center min-h-[120px]">
<button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-peach to-lavender text-slate-800 text-sm font-medium tracking-wide transition-all duration-500 hover:shadow-lg hover:shadow-lavender/50 hover:-translate-y-0.5 overflow-hidden" id="revealBtn">
<div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative flex items-center gap-2">
<span className="iconify" data-icon="lucide:user"></span>
                            Who's Flying?
                        </span>
</button>
<div className="hidden flex-col items-center mt-2 transition-all duration-1000 ease-out transform opacity-0 translate-y-4" id="revealedName">
<p className="text-xs text-slate-400 uppercase tracking-widest mb-2">The Traveler</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-800 font-serif italic">
                            D.Bhavana <span className="text-peach mx-2 not-italic font-light">×</span> Dubai Bhavana
                        </h2>
</div>
</div>
</div>
</section>

<section className="relative space-y-8">
<div className="flex flex-col md:flex-row justify-between items-end gap-4">
<div>
<h3 className="text-xl font-medium text-slate-800 tracking-tight">The Route</h3>
<p className="text-sm text-slate-500">~3,000 km • Hyderabad <span className="text-peach">→</span> Dubai</p>
</div>
<button className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg shadow-slate-200" id="flyBtn">
<span className="iconify" data-icon="lucide:plane-takeoff"></span>
                    Take Flight!
                </button>
</div>

<div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl shadow-sky/10 border border-white/50 z-0">
<div className="w-full h-full z-0" id="map"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-20" style={{overflow: 'visible'}}>
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#FFD4C4', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#A8DAFF', stopOpacity: '1'}}></stop>
</lineargradient>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="2.5"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path className="opacity-80" d="" fill="none" filter="url(#glow)" id="flightPath" stroke="url(#lineGradient)" stroke-dasharray="8,8" strokeLinecap="round" strokeWidth="3"></path>
</svg>

<div className="absolute z-30 opacity-0 pointer-events-none transition-opacity duration-300" id="plane">
<div className="relative">
<div className="absolute -inset-4 bg-white/40 blur-xl rounded-full"></div>
<span className="iconify text-3xl text-slate-800 drop-shadow-md" data-icon="lucide:plane"></span>
<div className="absolute top-1/2 right-full mr-2 w-12 h-0.5 bg-gradient-to-l from-white to-transparent opacity-50"></div>
</div>
</div>

<div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/50 text-xs font-medium text-slate-600 shadow-sm z-[400]">
                    From: Hyderabad
                </div>
<div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/50 text-xs font-medium text-slate-600 shadow-sm z-[400]">
                    To: Dubai
                </div>
</div>
</section>

<section>
<div className="relative bg-gradient-to-br from-white to-cream rounded-3xl p-8 md:p-12 shadow-xl shadow-peach/10 border border-white">

<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-2xl shadow-sm border border-slate-50">
<span className="iconify text-3xl text-peach" data-icon="lucide:heart-handshake"></span>
</div>
<div className="text-center space-y-8 mt-4">
<div>
<h2 className="text-2xl font-medium text-slate-800 tracking-tight mb-3">You've Got This, Bhavana!</h2>
<p className="text-slate-500 font-light leading-relaxed max-w-md mx-auto">
                            May your pitch shine as bright as the Dubai skyline. Knock them out with your brilliant ideas and return with a success story!
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-sky/20 p-4 rounded-2xl border border-sky/30 hover:scale-[1.02] transition-transform duration-300">
<span className="iconify text-2xl text-slate-700 mb-2 mx-auto" data-icon="lucide:building-2"></span>
<p className="text-xs text-slate-600 font-medium">Home to the tallest building</p>
</div>
<div className="bg-lavender/20 p-4 rounded-2xl border border-lavender/30 hover:scale-[1.02] transition-transform duration-300">
<span className="iconify text-2xl text-slate-700 mb-2 mx-auto" data-icon="lucide:lightbulb"></span>
<p className="text-xs text-slate-600 font-medium">Where dreams become reality</p>
</div>
<div className="bg-mint/20 p-4 rounded-2xl border border-mint/30 hover:scale-[1.02] transition-transform duration-300">
<span className="iconify text-2xl text-slate-700 mb-2 mx-auto" data-icon="lucide:rocket"></span>
<p className="text-xs text-slate-600 font-medium">Innovation meets tradition</p>
</div>
</div>
</div>
</div>
</section>

<section className="pb-12 flex flex-col items-center justify-center text-center">
<button className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-medium transition-all duration-300" id="chocoBtn">
<span>One More Thing...</span>
<span className="iconify group-hover:rotate-12 transition-transform" data-icon="lucide:gift"></span>
</button>
<div className="hidden mt-6 relative w-full max-w-sm" id="chocoReveal">
<div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 relative overflow-hidden transform transition-all animate-[bounce_1s_ease-out]">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<h3 className="text-lg font-medium text-slate-800 mb-2 relative z-10">Don't Forget to Bring Chocolates! 🍫</h3>
<p className="text-xs text-slate-500 font-light relative z-10">Sweet memories for sweet people back home!</p>
<div className="flex justify-center gap-4 mt-4 relative z-10 text-2xl">
<span className="animate-bounce delay-75">🍫</span>
<span className="animate-bounce delay-150">🍬</span>
<span className="animate-bounce delay-300">🍪</span>
</div>
</div>
</div>
</section>
</main>

<footer className="text-center py-8 text-xs text-slate-400 font-light tracking-wide">
        Safe Travels • Good Luck • Dubai 2024
    </footer>




    </>
  );
}

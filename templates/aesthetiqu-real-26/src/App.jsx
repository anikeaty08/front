import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const exploreBtn = document.getElementById('explore-btn');
        const backBtn = document.getElementById('back-btn');
        const mainInterface = document.getElementById('main-interface');
        const globeContainer = document.getElementById('globe-container');
        const searchContainer = document.getElementById('search-container');
        const mapLayer = document.getElementById('map-layer');

        exploreBtn.addEventListener('click', () => {
            // 1. Zoom Globe Effect
            mainInterface.classList.add('scale-[3]', 'opacity-0');
            mainInterface.classList.add('pointer-events-none');
            
            // 2. Hide Search immediately so it doesn't zoom weirdly
            searchContainer.style.opacity = '0';

            // 3. Show Map after short delay
            setTimeout(() => {
                mapLayer.classList.remove('opacity-0', 'pointer-events-none', 'scale-105');
                mapLayer.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
            }, 800);
        });

        backBtn.addEventListener('click', () => {
            // 1. Hide Map
            mapLayer.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
            mapLayer.classList.add('opacity-0', 'pointer-events-none', 'scale-105');

            // 2. Reset Main Interface
            setTimeout(() => {
                mainInterface.classList.remove('scale-[3]', 'opacity-0');
                mainInterface.classList.remove('pointer-events-none');
                searchContainer.style.opacity = '1';
            }, 300);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-50 pointer-events-none">
<div className="pointer-events-auto cursor-pointer group">
<span className="text-sm font-medium tracking-[0.2em] text-white group-hover:text-cyan-400 transition-colors duration-300">AESTHETIQUE</span>
</div>
<div className="flex items-center gap-6 pointer-events-auto">
<button className="text-xs font-medium text-white/60 hover:text-white transition-colors tracking-wide">RESIDENCES</button>
<button className="text-xs font-medium text-white/60 hover:text-white transition-colors tracking-wide">COMMERCIAL</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</nav>

<div className="absolute inset-0 z-20 opacity-0 pointer-events-none scale-105 fade-transition bg-[#080808]" id="map-layer">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

<div className="absolute top-32 left-12">
<h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-2">Dubai <span className="text-white/40">Marina</span></h1>
<p className="text-sm text-white/60 max-w-xs font-light leading-relaxed">Experience the pinnacle of luxury living. Browse exclusive off-plan projects and penthouses.</p>
</div>

<div className="absolute top-[40%] left-[55%] group cursor-pointer">
<div className="relative flex items-center justify-center w-4 h-4">
<div className="absolute w-full h-full rounded-full bg-cyan-500/50 pin-pulse"></div>
<div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
</div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-max">
<div className="glass-panel px-3 py-2 rounded-lg flex flex-col">
<span className="text-xs font-medium text-white">The Royal Atlantis</span>
<span className="text-[10px] text-white/60">Palm Jumeirah • Starts $5.2M</span>
</div>
</div>
</div>
<div className="absolute top-[60%] left-[35%] group cursor-pointer">
<div className="relative flex items-center justify-center w-4 h-4">
<div className="absolute w-full h-full rounded-full bg-white/50 pin-pulse" style={{animationDelay: '0.5s'}}></div>
<div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
</div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-max">
<div className="glass-panel px-3 py-2 rounded-lg flex flex-col">
<span className="text-xs font-medium text-white">Burj Khalifa Zone</span>
<span className="text-[10px] text-white/60">Downtown • Starts $3.1M</span>
</div>
</div>
</div>

<button className="absolute bottom-12 right-12 glass-panel px-6 py-3 rounded-full text-xs font-medium text-white hover:bg-white/10 transition-colors pointer-events-auto flex items-center gap-2" id="back-btn">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="16"></iconify-icon>
            RETURN TO ORBIT
        </button>
</div>

<main className="relative z-10 flex flex-col items-center justify-center w-full h-full zoom-transition" id="main-interface">

<div className="relative w-[50vh] h-[50vh] md:w-[60vh] md:h-[60vh] rounded-full flex-shrink-0 group" id="globe-container">

<div className="absolute inset-0 rounded-full overflow-hidden border border-white/5 z-0 globe-sphere">

<div className="absolute inset-0 globe-texture rounded-full"></div>
</div>

<div className="absolute inset-[-40px] rounded-full border border-white/5 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out"></div>

<div className="absolute inset-0 flex items-center justify-center z-20">
<button className="relative group/btn flex items-center justify-center w-24 h-24 rounded-full bg-white text-black hover:scale-110 transition-transform duration-500 ease-out shadow-[0_0_40px_rgba(255,255,255,0.15)]" id="explore-btn">
<div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></div>
<span className="relative text-xs font-medium tracking-tight z-10 flex flex-col items-center gap-1">
                        Explore
                        <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="mt-12 flex flex-col items-center gap-6 w-full max-w-md px-6 transition-all duration-700 delay-100" id="search-container">

<div className="w-full glass-panel rounded-full p-1.5 flex items-center shadow-lg shadow-black/20">
<div className="pl-4 pr-2 text-white/40">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="bg-transparent border-none outline-none text-sm text-white placeholder-white/30 flex-1 w-full h-10 font-light" placeholder="Search city, project, or region..." type="text"/>
<button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white/60 transition-colors">
<iconify-icon icon="solar:tuning-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full justify-center">
<span className="text-[10px] uppercase tracking-wider text-white/30 font-medium">Recent</span>
<button className="glass-panel rounded-full px-3 py-1.5 flex items-center gap-2 hover:bg-white/5 transition-colors group">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.5)]"></div>
<span className="text-xs text-white/70 group-hover:text-white transition-colors">Dubai</span>
</button>
<button className="glass-panel rounded-full px-3 py-1.5 flex items-center gap-2 hover:bg-white/5 transition-colors group">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_5px_rgba(192,132,252,0.5)]"></div>
<span className="text-xs text-white/70 group-hover:text-white transition-colors">New York</span>
</button>
<button className="glass-panel rounded-full px-3 py-1.5 flex items-center gap-2 hover:bg-white/5 transition-colors group">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_5px_rgba(251,146,60,0.5)]"></div>
<span className="text-xs text-white/70 group-hover:text-white transition-colors">London</span>
</button>
</div>
</div>

<div className="absolute bottom-8 flex justify-between w-full px-12 text-[10px] text-white/20 font-mono tracking-widest uppercase">
<span>25.2048° N, 55.2708° E</span>
<span className="hidden md:inline">System Status: Online</span>
</div>
</main>


    </>
  );
}

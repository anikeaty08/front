import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 3D Scene Controller ---
        const solarSystem = document.querySelector('.solar-system');
        const scroller = document.getElementById('content-scroll');
        const sections = document.querySelectorAll('section');
        const orbits = document.querySelectorAll('.orbit');
        const speedSlider = document.getElementById('speed-slider');
        const speedDisplay = document.getElementById('speed-display');

        // Camera Transforms for each Planet Focus
        const transforms = {
            'system':  { rotateX: 60, rotateZ: 0, scale: 0.8 },
            'mercury': { rotateX: 30, rotateZ: 20, scale: 2.5 },
            'venus':   { rotateX: 35, rotateZ: 10, scale: 2.2 },
            'earth':   { rotateX: 45, rotateZ: 0, scale: 1.8 },
            'mars':    { rotateX: 50, rotateZ: -10, scale: 1.6 },
            'jupiter': { rotateX: 55, rotateZ: 0, scale: 1.1 },
            'saturn':  { rotateX: 65, rotateZ: 0, scale: 0.9 }
        };

        // Scroll Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.dataset.focus;
                    
                    // Activate Text Section
                    sections.forEach(s => s.classList.remove('active-section', 'opacity-100'));
                    entry.target.classList.add('active-section', 'opacity-100');
                    entry.target.classList.remove('opacity-40');

                    // Move Camera
                    const t = transforms[id] || transforms['system'];
                    solarSystem.style.transform = `rotateX(${t.rotateX}deg) rotateZ(${t.rotateZ}deg) scale(${t.scale})`;

                    // Highlight Orbit
                    orbits.forEach(o => o.classList.remove('active'));
                    if (id !== 'system') {
                        const activeOrbit = document.querySelector(`.o-${id}`);
                        if(activeOrbit) activeOrbit.classList.add('active');
                    }
                } else {
                    entry.target.classList.add('opacity-40');
                }
            });
        }, {
            root: scroller,
            threshold: 0.6
        });

        sections.forEach(section => observer.observe(section));

        // Animation Speed Control
        speedSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            speedDisplay.innerText = val + 'x';
            
            const wrappers = document.querySelectorAll('.planet-orbit-wrapper');
            
            if(val == 0) {
                wrappers.forEach(w => w.style.animationPlayState = 'paused');
            } else {
                wrappers.forEach(w => w.style.animationPlayState = 'running');
                // Adjust timings
                const baseSpeeds = {
                    'o-mercury': 8, 'o-venus': 12, 'o-earth': 20, 
                    'o-mars': 30, 'o-jupiter': 60, 'o-saturn': 90
                };
                
                Object.keys(baseSpeeds).forEach(cls => {
                    const el = document.querySelector(`.${cls} .planet-orbit-wrapper`);
                    if(el) {
                        // Note: changing duration mid-animation causes jumps in pure CSS
                        // For a smoother effect in a real app, we'd use Web Animations API
                        // keeping it simple here for the single-file constraint
                        el.style.animationDuration = `${baseSpeeds[cls] / val}s`;
                    }
                });
            }
        });

        // Click Planet to Scroll
        document.querySelectorAll('.planet-visual').forEach(planet => {
            planet.addEventListener('click', function(e) {
                e.stopPropagation();
                const orbit = this.closest('.orbit');
                const id = orbit.dataset.id;
                const section = document.getElementById(id);
                if(section) section.scrollIntoView({ behavior: 'smooth' });
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-[#050507] z-0"></div>

<div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050507] to-[#050507] opacity-60"></div>
<div className="fixed bottom-0 left-0 right-0 h-1/2 z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>

<div className="fixed inset-0 z-0 stars pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-start pointer-events-none">
<div className="pointer-events-auto flex items-center gap-4">
<div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
<iconify-icon className="text-white text-xl animate-[spin_8s_linear_infinite]" icon="lucide:orbit"></iconify-icon>
</div>
<div>
<h1 className="font-display font-medium text-sm tracking-widest text-white uppercase leading-none">Aura Cosmos</h1>
<span className="text-[10px] text-indigo-400 font-mono tracking-tighter">SYS.V.2.4 // LIVE</span>
</div>
</div>
<div className="pointer-events-auto hidden md:flex flex-col items-end gap-2">
<div className="glass-panel px-5 py-2 rounded-full flex gap-6 backdrop-blur-md">
<button className="text-[10px] font-medium text-slate-400 hover:text-white uppercase tracking-widest transition-colors">Orbit</button>
<button className="text-[10px] font-medium text-slate-400 hover:text-white uppercase tracking-widest transition-colors">Surface</button>
<button className="text-[10px] font-medium text-indigo-400 hover:text-indigo-300 uppercase tracking-widest transition-colors flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse"></span> Data
                </button>
</div>
</div>
</nav>
<main className="relative z-10 h-full w-full flex flex-col md:flex-row">

<div className="flex-1 relative h-[50vh] md:h-full flex items-center justify-center overflow-hidden cursor-move" id="scene-wrapper">

<div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,#050507_100%)]"></div>

<div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px'}}>
</div>

<div className="absolute bottom-8 left-8 z-30 pointer-events-auto glass-panel p-4 rounded-xl flex flex-col gap-3 w-56 border border-white/5">
<div className="flex justify-between items-center">
<span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Time Dilation</span>
<span className="text-[10px] font-mono text-indigo-300" id="speed-display">1.0x</span>
</div>
<input id="speed-slider" max="4" min="0" step="0.1" type="range" value="1"/>
<div className="flex justify-between text-[8px] text-slate-600 font-mono uppercase">
<span>Pause</span>
<span>Max</span>
</div>
</div>

<div className="scene-container w-full h-full flex items-center justify-center">
<div className="solar-system relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sun-body rounded-full z-10"></div>


<div className="orbit o-mercury" data-id="mercury">
<div className="planet-orbit-wrapper">
<div className="planet-visual p-mercury"></div>
</div>
</div>

<div className="orbit o-venus" data-id="venus">
<div className="planet-orbit-wrapper">
<div className="planet-visual p-venus"></div>
</div>
</div>

<div className="orbit o-earth active" data-id="earth">
<div className="planet-orbit-wrapper">
<div className="planet-visual p-earth"></div>
</div>
</div>

<div className="orbit o-mars" data-id="mars">
<div className="planet-orbit-wrapper">
<div className="planet-visual p-mars"></div>
</div>
</div>

<div className="orbit o-jupiter" data-id="jupiter">
<div className="planet-orbit-wrapper">
<div className="planet-visual p-jupiter"></div>
</div>
</div>

<div className="orbit o-saturn" data-id="saturn">
<div className="planet-orbit-wrapper">
<div className="planet-visual p-saturn">
<div className="saturn-rings"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-[500px] h-[50vh] md:h-full glass-panel border-l border-white/5 flex flex-col relative z-30 shadow-2xl">

<div className="px-8 py-6 border-b border-white/5 bg-white/[0.01]">
<div className="flex items-center gap-2 mb-1">
<span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
<span className="text-[10px] uppercase tracking-widest text-slate-400">System Database</span>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth snap-y snap-mandatory relative" id="content-scroll">
<div className="px-8 md:px-12 py-12 space-y-32">

<section className="min-h-[40vh] flex flex-col justify-center snap-center group" data-focus="system" id="system">
<div className="relative pl-6 border-l border-white/10 transition-colors group-hover:border-indigo-500/50 duration-500">
<div className="active-dot"></div>
<h1 className="text-5xl font-display font-medium text-white tracking-tight mb-4 leading-tight">Solar<br/><span className="text-slate-500">System</span></h1>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-8 max-w-xs">
                                Our cosmic neighborhood. A gravitationally bound system comprising the Sun and the objects that orbit it, born from a giant interstellar molecular cloud 4.6 billion years ago.
                            </p>
<div className="grid grid-cols-2 gap-3">
<div className="glass-card p-4 rounded-lg">
<iconify-icon className="text-amber-400 mb-2" icon="lucide:star"></iconify-icon>
<div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Classification</div>
<div className="text-sm font-mono text-white">G2V Star System</div>
</div>
<div className="glass-card p-4 rounded-lg">
<iconify-icon className="text-indigo-400 mb-2" icon="lucide:infinity"></iconify-icon>
<div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Diameter</div>
<div className="text-sm font-mono text-white">~287 Billion km</div>
</div>
</div>
</div>
</section>

<section className="min-h-[40vh] flex flex-col justify-center snap-center group opacity-40 hover:opacity-100 transition-opacity duration-500" data-focus="mercury" id="mercury">
<div className="relative pl-6 border-l border-white/10">
<div className="active-dot"></div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-slate-500">01</span>
<span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-white/5 text-slate-300">Terrestrial</span>
</div>
<h2 className="text-3xl font-display text-slate-300 mb-4">Mercury</h2>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                                The smallest planet in the Solar System and the closest to the Sun. Its surface is heavily cratered and similar in appearance to the Moon.
                            </p>
<div className="space-y-2">
<div className="glass-card px-4 py-3 rounded flex justify-between items-center">
<span className="text-[10px] uppercase text-slate-500 tracking-wider">Orbital Period</span>
<span className="text-xs font-mono text-indigo-200">88 Days</span>
</div>
<div className="glass-card px-4 py-3 rounded flex justify-between items-center">
<span className="text-[10px] uppercase text-slate-500 tracking-wider">Temp Range</span>
<span className="text-xs font-mono text-indigo-200">-173° / 427°C</span>
</div>
</div>
</div>
</section>

<section className="min-h-[40vh] flex flex-col justify-center snap-center group opacity-40 hover:opacity-100 transition-opacity duration-500" data-focus="venus" id="venus">
<div className="relative pl-6 border-l border-white/10">
<div className="active-dot"></div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-amber-200">02</span>
<span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-amber-500/10 text-amber-200">Terrestrial</span>
</div>
<h2 className="text-3xl font-display text-slate-300 mb-4">Venus</h2>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                                Has a dense, toxic atmosphere primarily consisting of carbon dioxide with clouds of sulfuric acid, trapping heat in a runaway greenhouse effect.
                            </p>
<div className="grid grid-cols-2 gap-3">
<div className="glass-card p-3 rounded text-center">
<div className="text-xl font-display text-white mb-1">462°C</div>
<div className="text-[9px] text-slate-500 uppercase tracking-widest">Avg Temp</div>
</div>
<div className="glass-card p-3 rounded text-center">
<div className="text-xl font-display text-white mb-1">0.72</div>
<div className="text-[9px] text-slate-500 uppercase tracking-widest">AU Distance</div>
</div>
</div>
</div>
</section>

<section className="min-h-[40vh] flex flex-col justify-center snap-center group opacity-40 hover:opacity-100 transition-opacity duration-500" data-focus="earth" id="earth">
<div className="relative pl-6 border-l border-white/10">
<div className="active-dot"></div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-blue-400">03</span>
<iconify-icon className="text-blue-400" icon="lucide:globe-2"></iconify-icon>
</div>
<h2 className="text-3xl font-display text-slate-300 mb-4">Earth</h2>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                                The only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water.
                            </p>
<div className="glass-card p-4 rounded-lg mb-4 border-l-2 border-l-blue-500">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] uppercase text-slate-400 tracking-wider">Atmosphere N2/O2</span>
<span className="text-xs font-bold text-white">Optimal</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-blue-500 h-1 rounded-full w-[78%]"></div>
</div>
</div>
<button className="w-full py-3 glass-card rounded text-[10px] font-medium uppercase tracking-widest hover:bg-white/5 transition-colors text-blue-200">
                                View Satellite Telemetry
                            </button>
</div>
</section>

<section className="min-h-[40vh] flex flex-col justify-center snap-center group opacity-40 hover:opacity-100 transition-opacity duration-500" data-focus="mars" id="mars">
<div className="relative pl-6 border-l border-white/10">
<div className="active-dot"></div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-red-400">04</span>
<span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-red-500/10 text-red-300">Red Planet</span>
</div>
<h2 className="text-3xl font-display text-slate-300 mb-4">Mars</h2>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                                A dusty, cold, desert world with a very thin atmosphere. There is strong evidence that billions of years ago Mars was wetter and warmer, with a thick atmosphere.
                            </p>
<div className="space-y-2">
<div className="glass-card px-4 py-3 rounded flex justify-between items-center">
<span className="text-[10px] uppercase text-slate-500 tracking-wider">Moons</span>
<span className="text-xs font-mono text-white">Phobos, Deimos</span>
</div>
<div className="glass-card px-4 py-3 rounded flex justify-between items-center">
<span className="text-[10px] uppercase text-slate-500 tracking-wider">Gravity</span>
<span className="text-xs font-mono text-white">3.721 m/s²</span>
</div>
</div>
</div>
</section>

<section className="min-h-[40vh] flex flex-col justify-center snap-center group opacity-40 hover:opacity-100 transition-opacity duration-500" data-focus="jupiter" id="jupiter">
<div className="relative pl-6 border-l border-white/10">
<div className="active-dot"></div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-orange-300">05</span>
<span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-orange-500/10 text-orange-300">Gas Giant</span>
</div>
<h2 className="text-3xl font-display text-slate-300 mb-4">Jupiter</h2>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                                More than twice as massive as all the other planets combined. The Great Red Spot is a giant storm that has raged for hundreds of years.
                            </p>
<div className="glass-card p-5 rounded-lg flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-orange-500/20 flex items-center justify-center bg-orange-500/5">
<iconify-icon className="text-orange-400" icon="lucide:wind"></iconify-icon>
</div>
<div>
<div className="text-xs font-mono text-white">Storm System Active</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest">Wind speeds &gt; 400mph</div>
</div>
</div>
</div>
</section>

<section className="min-h-[40vh] flex flex-col justify-center snap-center group opacity-40 hover:opacity-100 transition-opacity duration-500" data-focus="saturn" id="saturn">
<div className="relative pl-6 border-l border-white/10">
<div className="active-dot"></div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-yellow-200">06</span>
<iconify-icon className="text-yellow-200" icon="lucide:disc-3"></iconify-icon>
</div>
<h2 className="text-3xl font-display text-slate-300 mb-4">Saturn</h2>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                                Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.
                            </p>
<div className="grid grid-cols-2 gap-3">
<div className="glass-card p-3 rounded">
<span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">Day Length</span>
<span className="block text-sm text-white font-mono">10.7 Hours</span>
</div>
<div className="glass-card p-3 rounded">
<span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">Year Length</span>
<span className="block text-sm text-white font-mono">29 Earth Years</span>
</div>
</div>
</div>
</section>
<div className="h-20"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050507] to-transparent pointer-events-none z-10"></div>
</div>
</main>


    </>
  );
}

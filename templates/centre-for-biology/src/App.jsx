import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
mono: ['"Space Mono"', 'monospace'],
},
colors: {
forest: {
950: '#0a1410', // Deepest green/black
900: '#13241c',
800: '#1c3329',
},
copper: {
400: '#5eead4', // Oxidized Copper (Cyan/Teal mix)
500: '#2dd4bf',
900: '#134e4a',
},
bronze: {
400: '#d4a373', // Warm Bronze
500: '#b08968',
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            // Reveal Animation
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));

            // Firefly Cursor Logic
            const cursorGlow = document.getElementById('cursor-glow');
            const cursorDot = document.getElementById('cursor-dot');

            document.addEventListener('mousemove', (e) => {
                const x = e.clientX;
                const y = e.clientY;

                // Dot follows instantly
                cursorDot.style.left = x + 'px';
                cursorDot.style.top = y + 'px';

                // Glow follows with slight delay logic can be added, but standard transform is smoother
                // For simplicity in this single block, we move both directly but CSS transition on Glow handles the "drift" feel
                cursorGlow.style.left = x + 'px';
                cursorGlow.style.top = y + 'px';
            });

            // Add hover effect to expand cursor
            const hoverElements = document.querySelectorAll('a, button, .group');
            hoverElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursorGlow.style.width = '400px';
                    cursorGlow.style.height = '400px';
                    cursorGlow.style.background = 'radial-gradient(circle, rgba(94, 234, 212, 0.25) 0%, rgba(94, 234, 212, 0) 70%)';
                });
                el.addEventListener('mouseleave', () => {
                    cursorGlow.style.width = '300px';
                    cursorGlow.style.height = '300px';
                    cursorGlow.style.background = 'radial-gradient(circle, rgba(94, 234, 212, 0.15) 0%, rgba(94, 234, 212, 0) 70%)';
                });
            });
        });

        // Toggle Login Modal
        function toggleLogin() {
            const modal = document.getElementById('login-modal');
            if (modal.classList.contains('hidden-modal')) {
                modal.classList.remove('hidden-modal');
                modal.classList.add('visible-modal');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                modal.classList.remove('visible-modal');
                modal.classList.add('hidden-modal');
                document.body.style.overflow = ''; // Restore scrolling
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-glow"></div>
<div id="cursor-dot"></div>

<div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-noise mix-blend-overlay"></div>

<nav className="fixed top-0 left-0 right-0 z-40 px-8 py-6 flex justify-between items-center text-stone-200">

<div className="font-mono text-xs tracking-widest uppercase mix-blend-difference z-50 relative">CBM / Deep Nature</div>

<div className="hidden md:flex gap-8 font-mono text-xs tracking-widest uppercase absolute left-1/2 -translate-x-1/2 mix-blend-difference z-50">
<a className="hover:text-copper-400 transition-colors" href="#">The Protocol</a>
<a className="hover:text-copper-400 transition-colors" href="#">The Terrain</a>
<a className="hover:text-copper-400 transition-colors" href="#">Locations</a>
</div>

<div className="flex items-center gap-6 z-50">

<button className="group relative flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full border border-white/5 bg-forest-950/40 backdrop-blur-xl transition-all duration-500 hover:border-copper-400/30 hover:bg-forest-900/60 cursor-none" onclick="toggleLogin()">

<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/5 text-stone-400 group-hover:text-copper-400 group-hover:border-copper-400/30 transition-all duration-500">
<span className="icon-[lucide--fingerprint] w-3 h-3"></span>
</div>

<div className="flex items-center gap-2">
<span className="font-mono text-[9px] uppercase tracking-widest text-stone-400 group-hover:text-stone-200 transition-colors">Member Access</span>
<span className="w-1 h-1 rounded-full bg-stone-600 group-hover:bg-copper-400 group-hover:shadow-[0_0_8px_rgba(94,234,212,0.8)] transition-all duration-500"></span>
</div>
</button>

<div className="w-8 h-8 flex flex-col justify-center gap-1.5 items-end mix-blend-difference cursor-pointer group">
<span className="w-8 h-px bg-current group-hover:w-6 transition-all duration-300"></span>
<span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-300"></span>
</div>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-forest-950/40 z-10"></div>

<img alt="Glass House in Forest" className="w-full h-full object-cover animate-pan opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-20 text-center px-6 reveal active">
<div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-copper-400/30 rounded-full bg-forest-950/30 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-copper-400 animate-pulse box-shadow-[0_0_10px_rgba(94,234,212,0.8)]"></span>
<span className="font-mono text-[10px] tracking-widest uppercase text-copper-400 hologram-text">System Status: Biological Terrain Optimized</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-100 tracking-tight leading-none mb-6 drop-shadow-2xl">
                Where Nature <br/>
<span className="italic font-light text-white/90">Meets Intelligence</span>
</h1>
<p className="max-w-md mx-auto font-mono text-xs md:text-sm text-stone-300 leading-relaxed tracking-wide mt-8 border-t border-white/20 pt-8">
                BIOLOGICAL MEDICINE REDEFINED. <br/>
                CATALOGING THE SILENT RHYTHMS OF BIO-ADVANCEMENT.
            </p>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="font-mono text-[9px] uppercase tracking-[0.2em]">Scroll to Enter</span>
<div className="h-12 w-px bg-gradient-to-b from-copper-400 to-transparent"></div>
</div>
</header>
<main>

<section className="relative py-32 md:py-48 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Forest Floor" className="w-full h-full object-cover opacity-20 saturate-0" src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/80 to-forest-950"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full z-10 pointer-events-none opacity-10">
<svg className="w-full h-full stroke-copper-400 fill-none" strokeWidth="0.1" viewbox="0 0 100 100">

<path d="M50,10 L50,90 M20,30 Q50,50 80,30 M30,70 Q50,50 70,70"></path>
<circle cx="50" cy="20" r="15"></circle>
<circle cx="50" cy="50" r="2"></circle>
</svg>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-8 leading-tight">
                            True longevity begins <br/>
<span className="italic text-copper-400">with the Terrain.</span>
</h2>
<p className="font-mono text-sm text-stone-400 leading-relaxed mb-12 max-w-md">
                            Two patients can live similarly and age very differently. We decode the environment within to optimize the outcome without.
                        </p>

<div className="grid gap-6">

<div className="glass-panel p-6 rounded-sm flex items-center gap-6 group hover:bg-white/5 transition-colors duration-500">
<div className="w-12 h-12 flex items-center justify-center border border-bronze-400/30 rounded-full text-bronze-400 bg-bronze-500/10">
<span className="icon-[lucide--brain] w-6 h-6"></span>
</div>
<div>
<h4 className="font-serif text-lg text-stone-200">Neural Mapping</h4>
<p className="font-mono text-[10px] text-stone-500 uppercase tracking-wide">Cognitive Resonance</p>
</div>
</div>

<div className="glass-panel p-6 rounded-sm flex items-center gap-6 group hover:bg-white/5 transition-colors duration-500 ml-0 md:ml-8">
<div className="w-12 h-12 flex items-center justify-center border border-copper-400/30 rounded-full text-copper-400 bg-copper-500/10">
<span className="icon-[lucide--apple] w-6 h-6"></span>
</div>
<div>
<h4 className="font-serif text-lg text-stone-200">Bio-Nutrition</h4>
<p className="font-mono text-[10px] text-stone-500 uppercase tracking-wide">Cellular Fueling</p>
</div>
</div>

<div className="glass-panel p-6 rounded-sm flex items-center gap-6 group hover:bg-white/5 transition-colors duration-500 ml-0 md:ml-16">
<div className="w-12 h-12 flex items-center justify-center border border-stone-400/30 rounded-full text-stone-300 bg-stone-500/10">
<span className="icon-[lucide--home] w-6 h-6"></span>
</div>
<div>
<h4 className="font-serif text-lg text-stone-200">Environmental Base</h4>
<p className="font-mono text-[10px] text-stone-500 uppercase tracking-wide">Toxic Load Elimination</p>
</div>
</div>
</div>
</div>

<div className="relative h-[600px] hidden lg:block reveal">
<div className="absolute inset-0 glass-panel rounded-sm overflow-hidden">

<div className="absolute top-10 right-10 font-mono text-[9px] text-copper-400 text-right space-y-1 z-20">
<p>BIOMETRIC_ID: 994-AZ</p>
<p>TERRAIN_SCORE: 98.4%</p>
<p>OXIDATION_LEVEL: NOMINAL</p>
</div>
<img alt="Fungi texture" className="w-full h-full object-cover opacity-40 mix-blend-overlay hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&amp;w=1527&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="reveal max-w-7xl mx-auto px-6 mb-32 md:mb-48">
<div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[600px] border border-stone-800">

<div className="relative h-[400px] md:h-full overflow-hidden group">
<div className="absolute inset-0 bg-forest-950/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
<img alt="Blue Zone Path" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&amp;w=2641&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 z-20">
<span className="font-mono text-[10px] bg-white text-forest-950 px-2 py-1 uppercase tracking-widest">Zone 04: Sardinian Highlands</span>
</div>
</div>

<div className="relative bg-forest-900/50 backdrop-blur-xl border-l border-stone-800 p-12 flex flex-col justify-center">
<div className="absolute top-0 right-0 p-4">
<span className="icon-[lucide--scan-line] text-copper-400 w-6 h-6 opacity-50 animate-pulse"></span>
</div>
<div className="space-y-6">
<span className="font-mono text-xs text-bronze-400 tracking-widest uppercase border-b border-bronze-400/20 pb-2 inline-block">Longevity Engineering</span>
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-100 leading-none">
                            Engineering Your <br/>
<span className="italic text-stone-500">Personal Blue Zone.</span>
</h2>
<p className="font-mono text-xs md:text-sm text-stone-400 leading-relaxed mt-4 border-l-2 border-copper-400/50 pl-6">
                            Blue Zones are general patterns. Your biology is a specific code. We don't just mimic nature; we decode your unique terrain to replicate Blue Zone longevity within your specific environment.
                        </p>
<div className="pt-8 grid grid-cols-2 gap-4">
<div className="border border-stone-800 p-4">
<span className="block font-serif text-2xl text-stone-200">105+</span>
<span className="block font-mono text-[9px] text-stone-500 uppercase mt-1">Projected Healthspan</span>
</div>
<div className="border border-stone-800 p-4">
<span className="block font-serif text-2xl text-stone-200">0.0%</span>
<span className="block font-mono text-[9px] text-stone-500 uppercase mt-1">Inflammatory Markers</span>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 40px'}}></div>
</div>
</div>
</section>

<section className="reveal max-w-7xl mx-auto px-6 mb-32 pb-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
<div>
<span className="font-mono text-[10px] text-copper-400 tracking-widest uppercase mb-2 block">Offerings</span>
<h2 className="font-serif text-4xl text-stone-100">The Elements</h2>
</div>
<div className="font-mono text-[10px] text-stone-500 uppercase tracking-widest mt-4 md:mt-0">
                    Restoring Fundamental Harmony
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[80vh] md:h-[600px]">

<div className="group relative h-full w-full overflow-hidden rounded-sm border border-stone-800">
<img alt="Water" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-50 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="icon-[lucide--droplets] text-copper-400 w-6 h-6 mb-4 block"></span>
<h3 className="font-serif text-2xl text-stone-100 mb-2">Fluid Dynamics</h3>
<p className="font-mono text-[10px] text-copper-400 uppercase tracking-widest mb-4">IV &amp; Ozone Therapy</p>
<p className="font-mono text-xs text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-l border-white/30 pl-3">
                            Restoring the internal ocean. Cleansing cellular pathways through hyper-oxygenation.
                        </p>
</div>
</div>

<div className="group relative h-full w-full overflow-hidden rounded-sm border border-stone-800">
<img alt="Moss/Earth" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-50 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="icon-[lucide--sprout] text-bronze-400 w-6 h-6 mb-4 block"></span>
<h3 className="font-serif text-2xl text-stone-100 mb-2">Microbiome Architecture</h3>
<p className="font-mono text-[10px] text-bronze-400 uppercase tracking-widest mb-4">Gut-Brain Axis</p>
<p className="font-mono text-xs text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-l border-white/30 pl-3">
                            Rebuilding the foundation. Introducing ancestral strains to modern biology.
                        </p>
</div>
</div>

<div className="group relative h-full w-full overflow-hidden rounded-sm border border-stone-800">
<img alt="Sunlight in Forest" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-50 group-hover:saturate-100" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=1632&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="icon-[lucide--sun] text-yellow-500/80 w-6 h-6 mb-4 block"></span>
<h3 className="font-serif text-2xl text-stone-100 mb-2">Mitochondrial Light</h3>
<p className="font-mono text-[10px] text-yellow-500/80 uppercase tracking-widest mb-4">Photobiomodulation</p>
<p className="font-mono text-xs text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-l border-white/30 pl-3">
                            Direct energy transfer. Optimizing ATP production via targeted spectrum exposure.
                        </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-forest-900/30">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<h4 className="font-serif text-xl text-stone-200 mb-2">Centre for Biological Medicine</h4>
<p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Deep Nature Spa &amp; Exclusive Bio-Advancement</p>
</div>
<div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-stone-400">
<a className="hover:text-copper-400 transition-colors" href="#">Manifesto</a>
<a className="hover:text-copper-400 transition-colors" href="#">Apply for Membership</a>
<a className="hover:text-copper-400 transition-colors" href="#">Contact</a>
</div>
</div>
<div className="mt-12 flex justify-between items-end border-t border-white/5 pt-8 font-mono text-[9px] text-stone-600 uppercase">
<div>© 2024 Biological Medicine</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        All Systems Operational
                    </div>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-[100] hidden-modal flex items-center justify-center p-6" id="login-modal">

<div className="absolute inset-0 bg-forest-950/90 backdrop-blur-2xl" onclick="toggleLogin()"></div>

<div className="relative z-[110] w-full max-w-5xl glass-panel rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-forest-950/50" id="login-content">

<button className="absolute top-6 right-6 text-stone-500 hover:text-white transition-colors z-50" onclick="toggleLogin()">
<span className="icon-[lucide--x] w-6 h-6"></span>
</button>
<div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px]">

<div className="p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-br from-white/5 to-transparent">
<div>
<div className="flex items-center gap-3 mb-10 opacity-60">
<span className="icon-[lucide--fingerprint] w-5 h-5 text-copper-400"></span>
<span className="font-mono text-[9px] uppercase tracking-widest text-stone-400">Secure Node Access</span>
</div>
<h2 className="font-serif text-3xl text-stone-100 mb-2">Member Terminal</h2>
<p className="font-mono text-xs text-stone-500 mb-12">Enter biometric credentials to access your protocol.</p>
<form className="space-y-8">
<div className="group relative">
<input className="block w-full bg-transparent border-b border-white/20 py-3 text-stone-200 focus:outline-none focus:border-copper-400 transition-colors font-mono text-sm placeholder-stone-700" id="bio-id" placeholder="BIO-ID (e.g. 994-AZ)" type="text"/>
<label className="absolute -top-3 left-0 font-mono text-[9px] text-stone-500 uppercase tracking-widest" htmlFor="bio-id">Identifier</label>
</div>
<div className="group relative">
<input className="block w-full bg-transparent border-b border-white/20 py-3 text-stone-200 focus:outline-none focus:border-copper-400 transition-colors font-mono text-sm placeholder-stone-700" id="bio-key" placeholder="••••••••••" type="password"/>
<label className="absolute -top-3 left-0 font-mono text-[9px] text-stone-500 uppercase tracking-widest" htmlFor="bio-key">Genetic Key</label>
</div>
<button className="mt-8 w-full group flex items-center justify-between bg-stone-100/5 hover:bg-stone-100/10 border border-white/10 rounded-sm px-6 py-4 transition-all duration-300" type="button">
<span className="font-mono text-xs text-stone-300 uppercase tracking-widest group-hover:text-copper-400 transition-colors">Authenticate</span>
<span className="icon-[lucide--arrow-right] w-4 h-4 text-stone-500 group-hover:translate-x-1 transition-transform"></span>
</button>
</form>
</div>
<div className="mt-12 lg:mt-0 font-mono text-[9px] text-stone-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-copper-400 animate-pulse"></span>
                        Secure Connection Established
                    </div>
</div>

<div className="p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
<svg height="100%" width="100%">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10">
<div className="mb-10 inline-block px-3 py-1 rounded-full border border-bronze-400/30 bg-bronze-500/5">
<span className="font-mono text-[9px] uppercase tracking-widest text-bronze-400">Waitlist Open</span>
</div>
<h2 className="font-serif text-3xl text-stone-100 mb-6">Initiate Protocol</h2>
<p className="font-mono text-xs leading-relaxed text-stone-400 mb-10 border-l border-white/20 pl-4">
                            Membership is limited by biological capacity. We accept new terrains on a rolling basis following a comprehensive terrain assessment.
                        </p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="font-mono text-[9px] text-stone-500 uppercase tracking-widest">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-stone-300 text-xs focus:border-bronze-400 focus:outline-none transition-colors" type="text"/>
</div>
<div className="space-y-1">
<label className="font-mono text-[9px] text-stone-500 uppercase tracking-widest">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-stone-300 text-xs focus:border-bronze-400 focus:outline-none transition-colors" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="font-mono text-[9px] text-stone-500 uppercase tracking-widest">Signal (Email)</label>
<input className="w-full bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-stone-300 text-xs focus:border-bronze-400 focus:outline-none transition-colors" type="email"/>
</div>
<button className="w-full bg-stone-100 text-forest-950 font-mono text-xs uppercase tracking-widest py-3 hover:bg-white transition-colors mt-4" type="button">
                                Request Assessment
                            </button>
</form>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}

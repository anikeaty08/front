import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple SPA Router
        const router = {
            routes: ['home', 'work', 'studio', 'contact'],
            current: 'home',
            
            navigate(pageId) {
                if (pageId === this.current) return;
                
                // Exit Animation
                const oldPage = document.getElementById(`page-${this.current}`);
                const newPage = document.getElementById(`page-${pageId}`);
                
                oldPage.classList.remove('page-transition-active');
                oldPage.classList.add('page-transition-exit');
                
                setTimeout(() => {
                    oldPage.classList.add('hidden');
                    oldPage.classList.remove('page-transition-exit');
                    
                    // Enter Animation
                    window.scrollTo(0,0);
                    newPage.classList.remove('hidden');
                    newPage.classList.add('page-transition-enter');
                    
                    // Trigger reflow
                    void newPage.offsetWidth; 
                    
                    newPage.classList.remove('page-transition-enter');
                    newPage.classList.add('page-transition-active');
                    
                    this.current = pageId;
                }, 400);
            }
        };

        // Time Update
        function updateTime() {
            const now = new Date();
            const str = now.toISOString().split('T')[1].slice(0, -1);
            document.getElementById('timestamp').innerText = str + ':' + Math.floor(Math.random() * 99);
            requestAnimationFrame(updateTime);
        }
        updateTime();

        // Initial Load Animation
        document.addEventListener('DOMContentLoaded', () => {
            const home = document.getElementById('page-home');
            home.classList.add('page-transition-active');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise"></div>
<div className="scanline"></div>

<nav className="fixed inset-0 z-[100] pointer-events-none p-4 lg:p-6 text-[10px] md:text-xs font-tech tracking-widest text-[#FF3300] mix-blend-difference">

<div className="absolute top-4 left-4 right-4 h-[1px] bg-[#FF3300]/30"></div>
<div className="absolute bottom-4 left-4 right-4 h-[1px] bg-[#FF3300]/30"></div>
<div className="absolute top-4 bottom-4 left-4 w-[1px] bg-[#FF3300]/30"></div>
<div className="absolute top-4 bottom-4 right-4 w-[1px] bg-[#FF3300]/30"></div>

<div className="absolute top-0 left-0 p-6 pointer-events-auto cursor-pointer" onclick="router.navigate('home')">
<span className="font-bold text-sm bg-[#FF3300] text-black px-1 mr-1">S_OS</span>
<span className="hover:text-white transition-colors">STRUCTUR_OS [V.2.0]</span>
</div>

<div className="absolute top-0 right-0 p-6 pointer-events-auto flex gap-6 md:gap-8">
<button className="group flex items-center gap-2 hover:text-white transition-colors uppercase" onclick="router.navigate('work')">
<span className="opacity-50 group-hover:opacity-100">[01]</span> Work
            </button>
<button className="group flex items-center gap-2 hover:text-white transition-colors uppercase" onclick="router.navigate('studio')">
<span className="opacity-50 group-hover:opacity-100">[02]</span> Studio
            </button>
<button className="group flex items-center gap-2 hover:text-white transition-colors uppercase" onclick="router.navigate('contact')">
<span className="opacity-50 group-hover:opacity-100">[03]</span> Contact
            </button>
</div>

<div className="absolute bottom-0 left-0 p-6 hidden md:block">
<div className="flex flex-col gap-1">
<span>SYS_STATUS: OPTIMAL</span>
<span id="coordinates">LAT: 40.7128 // LON: -74.0060</span>
</div>
</div>

<div className="absolute bottom-0 right-0 p-6 hidden md:block text-right">
<span id="timestamp">00:00:00:00</span>
</div>
</nav>

<div className="relative min-h-screen w-full pt-20 pb-20 md:pt-0 md:pb-0" id="app-container">

<main className="page-section min-h-screen w-full flex flex-col" id="page-home">

<header className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden border-b border-[#222]">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover grayscale opacity-20 contrast-125" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-[#111]"></div>
</div>
<div className="relative z-10 w-full px-6 md:px-12 text-center md:text-left">
<div className="inline-flex items-center gap-2 border border-[#FF3300] px-3 py-1 mb-6 text-[#FF3300] font-tech text-[10px] tracking-widest uppercase bg-[#111]/80 backdrop-blur-sm">
<span className="w-2 h-2 bg-[#FF3300] animate-pulse"></span>
                        System Online
                    </div>
<h1 className="font-display text-[14vw] leading-[0.85] tracking-tighter text-[#EEE] mix-blend-exclusion uppercase">
                        Structure<br/>
<span className="text-transparent stroke-text" style={{WebkitTextStroke: '1px #555'}}>As Code</span>
</h1>
<div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-8 max-w-2xl">
<p className="font-tech text-xs md:text-sm text-[#888] leading-relaxed uppercase tracking-wide text-center md:text-left">
                            We design physical interfaces for the digital age. Brutalist architecture meets computational logic. Defining the skyline of the future.
                        </p>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
<div className="w-[1px] h-12 bg-gradient-to-b from-[#FF3300] to-transparent"></div>
<span className="font-tech text-[10px] text-[#FF3300] tracking-widest">SCROLL</span>
</div>
</header>

<section className="w-full grid grid-cols-1 md:grid-cols-12 border-b border-[#222]">
<div className="col-span-1 md:col-span-3 border-r border-[#222] p-8 md:p-12">
<span className="font-tech text-[#FF3300] text-xs uppercase tracking-widest">// MANIFESTO_001</span>
</div>
<div className="col-span-1 md:col-span-9 p-8 md:p-12 lg:p-24">
<h2 className="font-display text-2xl md:text-4xl lg:text-5xl leading-tight text-[#CCC] uppercase tracking-tight mb-12">
                        Buildings are not static. They are state machines. We program space using concrete, steel, and light.
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h3 className="font-tech text-white text-sm mb-4 border-b border-[#333] pb-2 inline-block">01. PERMANENCE</h3>
<p className="font-tech text-xs text-[#666] leading-6">Rejecting the ephemeral nature of modern web for the solidity of brutalism. Our structures are designed to outlast their occupants.</p>
</div>
<div>
<h3 className="font-tech text-white text-sm mb-4 border-b border-[#333] pb-2 inline-block">02. FUNCTION</h3>
<p className="font-tech text-xs text-[#666] leading-6">Form follows function. No ornamentation without purpose. Every beam, bolt, and pixel serves the master plan.</p>
</div>
</div>
</div>
</section>

<section className="w-full overflow-hidden py-6 border-b border-[#222] bg-[#161616]">
<div className="flex whitespace-nowrap animate-marquee">
<span className="text-4xl md:text-6xl font-display font-bold text-[#222] uppercase px-8">Industrial Design</span>
<span className="text-4xl md:text-6xl font-display font-bold text-transparent stroke-text px-8" style={{WebkitTextStroke: '1px #333'}}>Civil Engineering</span>
<span className="text-4xl md:text-6xl font-display font-bold text-[#222] uppercase px-8">Urban Planning</span>
<span className="text-4xl md:text-6xl font-display font-bold text-transparent stroke-text px-8" style={{WebkitTextStroke: '1px #333'}}>Mega-Structures</span>
<span className="text-4xl md:text-6xl font-display font-bold text-[#222] uppercase px-8">Data Centers</span>
<span className="text-4xl md:text-6xl font-display font-bold text-transparent stroke-text px-8" style={{WebkitTextStroke: '1px #333'}}>Bunkers</span>
</div>
</section>

<section className="w-full grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[80vh] border-b border-[#222]">
<div className="relative group h-[50vh] lg:h-full border-b lg:border-b-0 lg:border-r border-[#222] overflow-hidden cursor-pointer" onclick="router.navigate('work')">
<img className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
<div className="absolute bottom-0 left-0 p-8 w-full border-t border-white/10 bg-black/60 backdrop-blur-md">
<div className="flex justify-between items-end">
<div>
<span className="font-tech text-[#FF3300] text-xs mb-2 block">LATEST COMMISSION</span>
<h3 className="font-display text-2xl text-white uppercase">Project: OMEGA</h3>
</div>
<span className="iconify text-white w-8 h-8 rotate-45 group-hover:rotate-0 transition-transform" data-icon="lucide:arrow-up-right"></span>
</div>
</div>
</div>
<div className="flex flex-col justify-center p-8 lg:p-24 bg-[#111]">
<div className="space-y-8">
<div>
<h4 className="font-tech text-[#666] text-xs uppercase mb-2">Capabilities</h4>
<p className="font-display text-xl md:text-2xl text-[#EEE]">Full-stack architectural development from conceptualization to fabrication.</p>
</div>
<div className="h-[1px] w-full bg-[#333]"></div>
<div className="grid grid-cols-2 gap-4">
<ul className="font-tech text-xs text-[#888] space-y-2 uppercase">
<li className="text-[#FF3300]">// PRE-CONSTRUCTION</li>
<li>Feasibility Studies</li>
<li>Site Analysis</li>
<li>Zoning Intelligence</li>
</ul>
<ul className="font-tech text-xs text-[#888] space-y-2 uppercase">
<li className="text-[#FF3300]">// EXECUTION</li>
<li>Project Management</li>
<li>Structural Engineering</li>
<li>Material Logistics</li>
</ul>
</div>
<button className="mt-8 font-tech text-xs border border-[#333] text-white px-8 py-4 uppercase hover:bg-white hover:text-black transition-colors w-full md:w-auto" onclick="router.navigate('work')">
                            View All Projects
                        </button>
</div>
</div>
</section>
</main>

<main className="page-section hidden min-h-screen w-full" id="page-work">
<header className="pt-32 pb-12 px-6 md:px-12 border-b border-[#222]">
<h1 className="font-display text-6xl md:text-8xl tracking-tighter text-white uppercase mb-6">Archive</h1>
<div className="flex flex-wrap gap-4 font-tech text-xs uppercase">
<button className="px-4 py-2 bg-[#FF3300] text-black">All Systems</button>
<button className="px-4 py-2 border border-[#333] text-[#888] hover:border-[#FF3300] hover:text-[#FF3300]">Commercial</button>
<button className="px-4 py-2 border border-[#333] text-[#888] hover:border-[#FF3300] hover:text-[#FF3300]">Residential</button>
<button className="px-4 py-2 border border-[#333] text-[#888] hover:border-[#FF3300] hover:text-[#FF3300]">Gov / Mil</button>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-b border-[#222]">

<article className="group relative aspect-[3/4] border-r border-b border-[#222] overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-500" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black text-[#FF3300] font-tech text-[10px] px-2 py-1 border border-[#FF3300]">#001</div>
<div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
<div className="w-full h-[1px] bg-[#FF3300]/50 mt-12"></div>
<div>
<h3 className="font-display text-2xl text-white uppercase mb-2">The Monolith</h3>
<p className="font-tech text-xs text-[#888] mb-4">TOKYO, JP // 2024</p>
<ul className="font-tech text-[10px] text-[#666] space-y-1 mb-6 border-l border-[#333] pl-4">
<li>HEIGHT: 240M</li>
<li>MATERIAL: BASALT</li>
<li>USE: DATA CENTER</li>
</ul>
<span className="font-tech text-xs text-white border-b border-white pb-1">ACCESS DATA -&gt;</span>
</div>
</div>
</article>

<article className="group relative aspect-[3/4] border-r border-b border-[#222] overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-black text-[#FF3300] font-tech text-[10px] px-2 py-1 border border-[#FF3300]">#002</div>
<div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
<div className="w-full h-[1px] bg-[#FF3300]/50 mt-12"></div>
<div>
<h3 className="font-display text-2xl text-white uppercase mb-2">Void Residence</h3>
<p className="font-tech text-xs text-[#888] mb-4">ICELAND // 2025</p>
<ul className="font-tech text-[10px] text-[#666] space-y-1 mb-6 border-l border-[#333] pl-4">
<li>AREA: 4000 SQFT</li>
<li>MATERIAL: RAW CONCRETE</li>
<li>USE: PRIVATE</li>
</ul>
<span className="font-tech text-xs text-white border-b border-white pb-1">ACCESS DATA -&gt;</span>
</div>
</div>
</article>

<article className="group relative aspect-[3/4] border-r border-b border-[#222] overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-black text-[#FF3300] font-tech text-[10px] px-2 py-1 border border-[#FF3300]">#003</div>
<div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
<div className="w-full h-[1px] bg-[#FF3300]/50 mt-12"></div>
<div>
<h3 className="font-display text-2xl text-white uppercase mb-2">Sector 7</h3>
<p className="font-tech text-xs text-[#888] mb-4">BERLIN, DE // 2023</p>
<ul className="font-tech text-[10px] text-[#666] space-y-1 mb-6 border-l border-[#333] pl-4">
<li>AREA: 12000 SQFT</li>
<li>MATERIAL: STEEL/GLASS</li>
<li>USE: LAB</li>
</ul>
<span className="font-tech text-xs text-white border-b border-white pb-1">ACCESS DATA -&gt;</span>
</div>
</div>
</article>

<article className="group relative aspect-[3/4] border-r border-b border-[#222] overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-500" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black text-[#FF3300] font-tech text-[10px] px-2 py-1 border border-[#FF3300]">#004</div>
<div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
<div className="w-full h-[1px] bg-[#FF3300]/50 mt-12"></div>
<div>
<h3 className="font-display text-2xl text-white uppercase mb-2">Hydra Station</h3>
<p className="font-tech text-xs text-[#888] mb-4">NORWAY // 2025</p>
<ul className="font-tech text-[10px] text-[#666] space-y-1 mb-6 border-l border-[#333] pl-4">
<li>AREA: UNKNOWN</li>
<li>MATERIAL: REINFORCED</li>
<li>USE: INFRASTRUCTURE</li>
</ul>
<span className="font-tech text-xs text-white border-b border-white pb-1">ACCESS DATA -&gt;</span>
</div>
</div>
</article>

<article className="group relative aspect-[3/4] border-r border-b border-[#222] overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-500" src="https://images.unsplash.com/photo-1506099914961-765be7a97019?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black text-[#FF3300] font-tech text-[10px] px-2 py-1 border border-[#FF3300]">#005</div>
<div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
<div className="w-full h-[1px] bg-[#FF3300]/50 mt-12"></div>
<div>
<h3 className="font-display text-2xl text-white uppercase mb-2">Vault 101</h3>
<p className="font-tech text-xs text-[#888] mb-4">NEVADA, US // 2024</p>
<ul className="font-tech text-[10px] text-[#666] space-y-1 mb-6 border-l border-[#333] pl-4">
<li>DEPTH: 50M</li>
<li>MATERIAL: COMPOSITE</li>
<li>USE: STORAGE</li>
</ul>
<span className="font-tech text-xs text-white border-b border-white pb-1">ACCESS DATA -&gt;</span>
</div>
</div>
</article>

<article className="group relative aspect-[3/4] border-r border-b border-[#222] overflow-hidden cursor-pointer flex items-center justify-center bg-[#1a1a1a]">
<div className="text-center">
<span className="iconify text-[#333] w-12 h-12 mx-auto mb-4" data-icon="lucide:lock"></span>
<h3 className="font-display text-xl text-[#333] uppercase">Restricted</h3>
<p className="font-tech text-[10px] text-[#333] mt-2">CLASSIFIED CLEARANCE REQ.</p>
</div>
</article>
</div>
</main>

<main className="page-section hidden min-h-screen w-full" id="page-studio">
<header className="pt-32 pb-12 px-6 md:px-12 border-b border-[#222]">
<h1 className="font-display text-6xl md:text-8xl tracking-tighter text-white uppercase mb-6">The Machine</h1>
</header>
<section className="grid grid-cols-1 md:grid-cols-12 border-b border-[#222]">
<div className="col-span-1 md:col-span-4 p-8 md:p-12 border-r border-[#222] bg-[#161616]">
<h2 className="font-display text-2xl text-white uppercase mb-6">Operating<br/>Protocols</h2>
<p className="font-tech text-xs text-[#888] leading-6 mb-8">
                        We are not an agency. We are a collective of structural engineers, computational designers, and brutalist purists working in unison to solve spatial problems.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<span className="font-display text-3xl text-[#222]">01</span>
<span className="font-tech text-xs text-[#FF3300] uppercase">Precision First</span>
</div>
<div className="flex items-center gap-4">
<span className="font-display text-3xl text-[#222]">02</span>
<span className="font-tech text-xs text-[#FF3300] uppercase">Material Honesty</span>
</div>
<div className="flex items-center gap-4">
<span className="font-display text-3xl text-[#222]">03</span>
<span className="font-tech text-xs text-[#FF3300] uppercase">Redundancy Zero</span>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-8 p-0">

<div className="grid grid-cols-2 h-full">

<div className="border-b border-r border-[#222] p-8 hover:bg-[#1a1a1a] transition-colors group">
<div className="w-16 h-16 bg-[#222] rounded-full mb-4 overflow-hidden grayscale group-hover:grayscale-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-display text-lg text-white uppercase">A. Kovic</h3>
<p className="font-tech text-[10px] text-[#FF3300] uppercase mb-2">Lead Architect</p>
<p className="font-tech text-[10px] text-[#666]">Specialist in reinforced concrete superstructures.</p>
</div>

<div className="border-b border-[#222] p-8 hover:bg-[#1a1a1a] transition-colors group">
<div className="w-16 h-16 bg-[#222] rounded-full mb-4 overflow-hidden grayscale group-hover:grayscale-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-display text-lg text-white uppercase">S. Chen</h3>
<p className="font-tech text-[10px] text-[#FF3300] uppercase mb-2">Structural Engineer</p>
<p className="font-tech text-[10px] text-[#666]">Computational load analysis and seismic retrofitting.</p>
</div>

<div className="border-r border-[#222] p-8 hover:bg-[#1a1a1a] transition-colors group">
<div className="w-16 h-16 bg-[#222] rounded-full mb-4 overflow-hidden grayscale group-hover:grayscale-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-display text-lg text-white uppercase">M. Vance</h3>
<p className="font-tech text-[10px] text-[#FF3300] uppercase mb-2">Design Director</p>
<p className="font-tech text-[10px] text-[#666]">Interface between human factors and raw materials.</p>
</div>

<div className="p-8 hover:bg-[#1a1a1a] transition-colors group">
<div className="w-16 h-16 bg-[#222] rounded-full mb-4 overflow-hidden grayscale group-hover:grayscale-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-display text-lg text-white uppercase">J. Doe</h3>
<p className="font-tech text-[10px] text-[#FF3300] uppercase mb-2">R&amp;D Lead</p>
<p className="font-tech text-[10px] text-[#666]">Material science and experimental composites.</p>
</div>
</div>
</div>
</section>

<section className="w-full p-12">
<h2 className="font-tech text-xs text-[#FF3300] uppercase mb-8 border-b border-[#222] pb-2">// RECOGNITION_LOG</h2>
<table className="w-full text-left font-tech text-xs uppercase text-[#888]">
<thead className="text-[#444] border-b border-[#222]">
<tr>
<th className="py-2">Year</th>
<th className="py-2">Organization</th>
<th className="py-2">Award</th>
</tr>
</thead>
<tbody className="divide-y divide-[#222]">
<tr className="hover:text-white hover:bg-[#161616] transition-colors">
<td className="py-4">2025</td>
<td>Brutalist Digest</td>
<td>Firm of the Year</td>
</tr>
<tr className="hover:text-white hover:bg-[#161616] transition-colors">
<td className="py-4">2024</td>
<td>Arch_Systems</td>
<td>Gold Medal - Industrial</td>
</tr>
<tr className="hover:text-white hover:bg-[#161616] transition-colors">
<td className="py-4">2023</td>
<td>Global Design Forum</td>
<td>Excellence in Concrete</td>
</tr>
</tbody>
</table>
</section>
</main>

<main className="page-section hidden min-h-screen w-full bg-[#111]" id="page-contact">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

<div className="border-b lg:border-b-0 lg:border-r border-[#222] p-8 md:p-16 flex flex-col justify-between pt-32">
<div>
<span className="font-tech text-[#FF3300] text-xs uppercase tracking-widest block mb-4">// TRANSMISSION</span>
<h1 className="font-display text-5xl md:text-7xl text-white uppercase leading-none mb-12">Initiate<br/>Protocol</h1>
<p className="font-tech text-xs text-[#888] max-w-sm mb-12">
                            Projects start at $500k minimum. We require full architectural control. If you are ready to build the future, establish a connection.
                        </p>
</div>
<div className="space-y-8">
<div>
<h3 className="font-tech text-[10px] text-[#666] uppercase mb-2">Secure Line</h3>
<a className="font-display text-xl text-white hover:text-[#FF3300] transition-colors" href="#">hello@structur_os.com</a>
</div>
<div>
<h3 className="font-tech text-[10px] text-[#666] uppercase mb-2">Base of Operations</h3>
<p className="font-display text-xl text-white">40.7128° N, 74.0060° W</p>
<p className="font-tech text-xs text-[#888]">New York, NY 10013</p>
</div>
</div>
</div>

<div className="p-8 md:p-16 flex flex-col justify-center bg-[#111]">
<form className="space-y-12 max-w-lg mx-auto w-full" onsubmit="event.preventDefault();">
<div className="relative group">
<input className="block py-4 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-[#333] appearance-none focus:outline-none focus:ring-0 focus:border-[#FF3300] peer font-tech uppercase" id="name" placeholder=" " required="" type="text"/>
<label className="peer-focus:font-medium absolute text-xs text-[#666] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF3300] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-tech uppercase tracking-widest" htmlFor="name">Identification</label>
</div>
<div className="relative group">
<input className="block py-4 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-[#333] appearance-none focus:outline-none focus:ring-0 focus:border-[#FF3300] peer font-tech uppercase" id="email" placeholder=" " required="" type="email"/>
<label className="peer-focus:font-medium absolute text-xs text-[#666] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF3300] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-tech uppercase tracking-widest" htmlFor="email">Comm Frequency (Email)</label>
</div>
<div className="relative group">
<select className="block py-4 px-0 w-full text-sm text-[#888] bg-transparent border-0 border-b border-[#333] appearance-none focus:outline-none focus:ring-0 focus:border-[#FF3300] peer font-tech uppercase rounded-none" id="type">
<option>Commercial Structure</option>
<option>Private Residence</option>
<option>Government Contract</option>
<option>Consultation Only</option>
</select>
<label className="absolute text-xs text-[#666] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] font-tech uppercase tracking-widest" htmlFor="type">Project Type</label>
</div>
<div className="relative group">
<textarea className="block py-4 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-[#333] appearance-none focus:outline-none focus:ring-0 focus:border-[#FF3300] peer font-tech uppercase resize-none" id="message" placeholder=" " rows="4"></textarea>
<label className="peer-focus:font-medium absolute text-xs text-[#666] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF3300] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-tech uppercase tracking-widest" htmlFor="message">Briefing Data</label>
</div>
<button className="group relative w-full py-4 bg-[#1a1a1a] hover:bg-[#FF3300] transition-colors overflow-hidden" type="submit">
<div className="relative z-10 flex justify-between items-center px-4">
<span className="font-tech text-xs text-white uppercase tracking-widest group-hover:text-black transition-colors">Transmit Data</span>
<span className="iconify text-white group-hover:text-black" data-icon="lucide:send"></span>
</div>

<div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
</button>
</form>
</div>
</div>
</main>

<footer className="w-full border-t border-[#222] bg-[#0f0f0f] py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div>
<h2 className="font-display text-2xl text-white uppercase mb-2">Structur_OS</h2>
<p className="font-tech text-[10px] text-[#666] max-w-xs">Engineered for the void. All rights reserved 2026.</p>
</div>
<div className="flex gap-8 font-tech text-[10px] uppercase text-[#666]">
<a className="hover:text-[#FF3300] transition-colors" href="#">Instagram</a>
<a className="hover:text-[#FF3300] transition-colors" href="#">LinkedIn</a>
<a className="hover:text-[#FF3300] transition-colors" href="#">Are.na</a>
</div>
</footer>
</div>


    </>
  );
}

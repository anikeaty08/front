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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



                        for(let i=1; i<=12; i++) {
                            document.write(`
                                <div class="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
                                    <div class="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-0${i}</div>
                                    <div class="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
                                        ${getLogoSVG(i)}
                                    </div>
                                    <div class="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <i data-lucide="download" class="w-3 h-3 text-zinc-500"></i>
                                    </div>
                                </div>
                            `);
                        }
                        
                        function getLogoSVG(i) {
                            const paths = [
                                '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="2"/>',
                                '<rect x="4" y="4" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" transform="rotate(45 12 12)"/>',
                                '<path d="M12 2l10 18H2L12 2z" stroke="currentColor" stroke-width="2" fill="none"/>',
                                '<circle cx="8" cy="12" r="6" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="16" cy="12" r="6" stroke="currentColor" stroke-width="2" fill="none"/>',
                                '<path d="M4 4h16v16H4z M8 8h8v8H8z" stroke="currentColor" stroke-width="2" fill="none"/>',
                                '<path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z M12 6a6 6 0 0 0 0 12 6 6 0 0 0 0-12z" stroke="currentColor" stroke-width="2" fill="none"/>',
                                '<path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="3" fill="currentColor"/>',
                                '<rect x="3" y="3" width="7" height="7" fill="currentColor"/><rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" fill="none"/><rect x="14" y="14" width="7" height="7" fill="currentColor"/><rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" fill="none"/>',
                                '<path d="M12 2l3 7h7l-6 5 2 7-6-5-6 5 2-7-6-5h7z" stroke="currentColor" stroke-width="2" fill="none"/>',
                                '<path d="M7 20l5-16 5 16M2 20h20" stroke="currentColor" stroke-width="2" fill="none"/>',
                                '<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" fill="none"/>',
                                '<path d="M12 2v20M2 2l20 20" stroke="currentColor" stroke-width="2"/>'
                            ];
                            return `<svg viewBox="0 0 24 24" class="w-12 h-12">${paths[i-1]}</svg>`;
                        }
                    


    // Initialize Icons
    lucide.createIcons({
        attrs: { 'stroke-width': 1.5 }
    });

    // Clock
    function updateTime() {
        const now = new Date();
        document.getElementById('time').innerText = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Smooth Scroll
    function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    // Carousel Data & Logic
    const projects = [
        { id: 1, title: "Logofolio", category: "Identity", year: "2024", color: "bg-purple-900", img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop" },
        { id: 2, title: "Posters", category: "Print", year: "2023", color: "bg-yellow-700", img: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=1000&auto=format&fit=crop" },
        { id: 3, title: "Web V1", category: "Digital", year: "2024", color: "bg-blue-900", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" },
        { id: 4, title: "Mobile", category: "Interface", year: "2025", color: "bg-orange-800", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop" },
        { id: 5, title: "Collateral", category: "Brand", year: "2024", color: "bg-rose-900", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" }
    ];

    let activeIndex = 0;
    const container = document.getElementById('gallery-container');

    function renderCarousel() {
        container.innerHTML = '';
        projects.forEach((project, index) => {
            const isActive = index === activeIndex;
            
            const item = document.createElement('div');
            // Mobile: narrower active card, Desktop: wider
            const activeClass = "w-[260px] sm:w-[320px] opacity-100 z-20 scale-100 mx-2 sm:mx-4";
            const inactiveClass = "w-12 sm:w-16 opacity-40 hover:opacity-100 z-10 scale-95 mx-0 sm:mx-1 grayscale hover:grayscale-0 cursor-pointer";
            
            item.className = `transition-all duration-500 ease-out h-[400px] sm:h-[480px] flex-shrink-0 relative ${isActive ? activeClass : inactiveClass}`;
            
            if (!isActive) item.onclick = () => { activeIndex = index; renderCarousel(); updateInfo(); };

            // Content
            item.innerHTML = `
                <div class="w-full h-full bg-zinc-900 overflow-hidden relative rounded shadow-2xl border border-zinc-800/50 group">
                    <img src="${project.img}" class="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                    <div class="absolute inset-0 distress opacity-30"></div>
                    
                    ${isActive ? `
                        <div class="absolute bottom-6 left-6 right-6">
                            <div class="w-8 h-0.5 bg-white/50 mb-4"></div>
                            <h3 class="text-3xl font-display text-white leading-none uppercase">${project.title}</h3>
                            <p class="text-[10px] font-mono mt-2 text-zinc-400">VOL.${project.id} // ${project.category.toUpperCase()}</p>
                        </div>
                    ` : `
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="vertical-text text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">${project.title}</span>
                        </div>
                    `}
                </div>
            `;
            container.appendChild(item);
        });
    }

    function updateInfo() {
        const p = projects[activeIndex];
        document.getElementById('project-title').innerText = p.title;
        document.getElementById('project-cat').innerText = p.category.toUpperCase();
        document.getElementById('project-year').innerText = p.year;
    }

    document.getElementById('prev-btn').onclick = () => { if(activeIndex > 0) { activeIndex--; renderCarousel(); updateInfo(); }};
    document.getElementById('next-btn').onclick = () => { if(activeIndex < projects.length-1) { activeIndex++; renderCarousel(); updateInfo(); }};

    renderCarousel();

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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute hue-rotate-90 blur-md brightness-75 opacity-40" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="47" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 47%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 47%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="3eLGLP7pmQS4ozfklmrX"></div>
</div></div>

<header className="fixed top-0 w-full px-6 lg:px-12 py-4 flex justify-between items-center z-50 border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur-md">
<button className="group flex items-center gap-3 text-xs tracking-widest hover:text-white transition-colors">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
<span className="opacity-80 text-[10px] font-mono">AVAILABLE FOR WORK</span>
</button>
<div className="flex flex-col items-center text-center">
<h1 className="text-sm tracking-tight text-zinc-100 font-medium flex items-center gap-2">
<span className="font-bold">SIPOS</span> RAUL-MIHAI
            </h1>
</div>
<div className="flex items-center gap-6 text-[10px] font-mono tracking-widest opacity-60">
<span className="hidden sm:block hover:text-white cursor-pointer transition-colors">INDEX</span>
<span className="hidden sm:block hover:text-white cursor-pointer transition-colors">INFO</span>
<a className="hover:text-purple-400 transition-colors" href="#logos">FILES (24)</a>
</div>
</header>

<main className="w-full pt-20">

<nav className="w-full flex justify-center py-8 z-40 relative">
<div className="flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full backdrop-blur-md border border-zinc-800 shadow-xl">
<button className="px-4 py-2 text-[10px] bg-zinc-100 text-zinc-950 font-semibold rounded-full shadow-sm transition-all hover:bg-white" onclick="scrollToSection('featured')">FEATURED</button>
<button className="px-4 py-2 text-[10px] hover:bg-zinc-800 hover:text-white transition-all rounded-full text-zinc-400 font-medium" onclick="scrollToSection('logos')">LOGOS</button>
<button className="px-4 py-2 text-[10px] hover:bg-zinc-800 hover:text-white transition-all rounded-full text-zinc-400 font-medium" onclick="scrollToSection('branding')">BRANDING</button>
<button className="px-4 py-2 text-[10px] hover:bg-zinc-800 hover:text-white transition-all rounded-full text-zinc-400 font-medium" onclick="scrollToSection('ui')">UI/APPS</button>
</div>
</nav>

<section className="relative w-full h-[600px] flex flex-col items-center justify-center overflow-hidden border-b border-zinc-900" id="featured">

<div className="absolute inset-0 bg-purple-900/10 blur-[120px] transition-colors duration-1000 pointer-events-none z-0" id="ambient-bg"></div>
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-0"></div>

<div className="relative w-full h-full flex items-center justify-center gap-4 px-4 sm:px-12 z-10" id="gallery-container"><div className="transition-all duration-500 ease-out h-[400px] sm:h-[480px] flex-shrink-0 relative w-[260px] sm:w-[320px] opacity-100 z-20 scale-100 mx-2 sm:mx-4">
<div className="w-full h-full bg-zinc-900 overflow-hidden relative rounded shadow-2xl border border-zinc-800/50 group">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute inset-0 distress opacity-30"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="w-8 h-0.5 bg-white/50 mb-4"></div>
<h3 className="text-3xl font-display text-white leading-none uppercase">Logofolio</h3>
<p className="text-[10px] font-mono mt-2 text-zinc-400">VOL.1 // IDENTITY</p>
</div>
</div>
</div><div className="transition-all duration-500 ease-out h-[400px] sm:h-[480px] flex-shrink-0 relative w-12 sm:w-16 opacity-40 hover:opacity-100 z-10 scale-95 mx-0 sm:mx-1 grayscale hover:grayscale-0 cursor-pointer">
<div className="w-full h-full bg-zinc-900 overflow-hidden relative rounded shadow-2xl border border-zinc-800/50 group">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" src="https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute inset-0 distress opacity-30"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="vertical-text text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Posters</span>
</div>
</div>
</div><div className="transition-all duration-500 ease-out h-[400px] sm:h-[480px] flex-shrink-0 relative w-12 sm:w-16 opacity-40 hover:opacity-100 z-10 scale-95 mx-0 sm:mx-1 grayscale hover:grayscale-0 cursor-pointer">
<div className="w-full h-full bg-zinc-900 overflow-hidden relative rounded shadow-2xl border border-zinc-800/50 group">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute inset-0 distress opacity-30"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="vertical-text text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Web V1</span>
</div>
</div>
</div><div className="transition-all duration-500 ease-out h-[400px] sm:h-[480px] flex-shrink-0 relative w-12 sm:w-16 opacity-40 hover:opacity-100 z-10 scale-95 mx-0 sm:mx-1 grayscale hover:grayscale-0 cursor-pointer">
<div className="w-full h-full bg-zinc-900 overflow-hidden relative rounded shadow-2xl border border-zinc-800/50 group">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute inset-0 distress opacity-30"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="vertical-text text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Mobile</span>
</div>
</div>
</div><div className="transition-all duration-500 ease-out h-[400px] sm:h-[480px] flex-shrink-0 relative w-12 sm:w-16 opacity-40 hover:opacity-100 z-10 scale-95 mx-0 sm:mx-1 grayscale hover:grayscale-0 cursor-pointer">
<div className="w-full h-full bg-zinc-900 overflow-hidden relative rounded shadow-2xl border border-zinc-800/50 group">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute inset-0 distress opacity-30"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="vertical-text text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Collateral</span>
</div>
</div>
</div></div>

<div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none z-20 transition-opacity duration-300" id="info-panel">
<h2 className="text-4xl sm:text-6xl font-display tracking-tighter text-zinc-100 uppercase mix-blend-overlay opacity-90" id="project-title">Logofolio</h2>
<div className="flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] font-mono mt-2 text-zinc-500">
<span className="text-purple-400" id="project-cat">IDENTITY</span>
<span>—</span>
<span id="project-year">2024</span>
</div>
</div>

<div className="absolute inset-y-0 w-full flex justify-between items-center px-4 sm:px-12 pointer-events-none">
<button className="pointer-events-auto p-4 rounded-full hover:bg-zinc-800/50 text-zinc-600 hover:text-white transition-all" id="prev-btn"><svg className="lucide lucide-arrow-left w-6 h-6" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
<button className="pointer-events-auto p-4 rounded-full hover:bg-zinc-800/50 text-zinc-600 hover:text-white transition-all" id="next-btn"><svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
</section>

<section className="w-full px-6 lg:px-12 py-24 bg-zinc-950 relative border-b border-zinc-900" id="logos">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-purple-500 font-mono text-[10px] tracking-widest uppercase mb-2 block">/// Section 02</span>
<h3 className="text-2xl text-zinc-100 font-semibold tracking-tight">Logomarks &amp; Symbols</h3>
</div>
<span className="text-zinc-600 font-mono text-xs">12 ITEMS</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-zinc-900 border border-zinc-900">


<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-01</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="2"></circle><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-02</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><rect fill="none" height="16" stroke="currentColor" strokeWidth="2" transform="rotate(45 12 12)" width="16" x="4" y="4"></rect></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-03</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path d="M12 2l10 18H2L12 2z" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-04</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><circle cx="8" cy="12" fill="none" r="6" stroke="currentColor" strokeWidth="2"></circle><circle cx="16" cy="12" fill="none" r="6" stroke="currentColor" strokeWidth="2"></circle></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-05</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path d="M4 4h16v16H4z M8 8h8v8H8z" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-06</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z M12 6a6 6 0 0 0 0 12 6 6 0 0 0 0-12z" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-07</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" fill="none" stroke="currentColor" strokeWidth="2"></path><circle cx="12" cy="12" fill="currentColor" r="3"></circle></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-08</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><rect fill="currentColor" height="7" width="7" x="3" y="3"></rect><rect fill="none" height="7" stroke="currentColor" strokeWidth="2" width="7" x="14" y="3"></rect><rect fill="currentColor" height="7" width="7" x="14" y="14"></rect><rect fill="none" height="7" stroke="currentColor" strokeWidth="2" width="7" x="3" y="14"></rect></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-09</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path d="M12 2l3 7h7l-6 5 2 7-6-5-6 5 2-7-6-5h7z" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-010</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path d="M7 20l5-16 5 16M2 20h20" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-011</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><circle cx="12" cy="12" fill="none" r="8" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></circle></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-012</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path d="M12 2v20M2 2l20 20" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-01</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="2"></circle><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-02</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><rect fill="none" height="16" stroke="currentColor" strokeWidth="2" transform="rotate(45 12 12)" width="16" x="4" y="4"></rect></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-03</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path className="" d="M12 2l10 18H2L12 2z" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-04</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><circle cx="8" cy="12" fill="none" r="6" stroke="currentColor" strokeWidth="2"></circle><circle cx="16" cy="12" fill="none" r="6" stroke="currentColor" strokeWidth="2"></circle></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-05</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path d="M4 4h16v16H4z M8 8h8v8H8z" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-06</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z M12 6a6 6 0 0 0 0 12 6 6 0 0 0 0-12z" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-07</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" fill="none" stroke="currentColor" strokeWidth="2"></path><circle cx="12" cy="12" fill="currentColor" r="3"></circle></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-08</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><rect fill="currentColor" height="7" width="7" x="3" y="3"></rect><rect fill="none" height="7" stroke="currentColor" strokeWidth="2" width="7" x="14" y="3"></rect><rect fill="currentColor" height="7" width="7" x="14" y="14"></rect><rect fill="none" height="7" stroke="currentColor" strokeWidth="2" width="7" x="3" y="14"></rect></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-09</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path className="" d="M12 2l3 7h7l-6 5 2 7-6-5-6 5 2-7-6-5h7z" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-010</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-[48px] h-[48px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '48px', height: '48px'}} viewbox="0 0 24 24"><path className="" d="M7 20l5-16 5 16M2 20h20" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-011</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><circle cx="12" cy="12" fill="none" r="8" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></circle></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
<div className="aspect-square bg-zinc-950 p-8 flex items-center justify-center group relative hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
<div className="absolute top-2 left-3 text-[8px] font-mono text-zinc-700 group-hover:text-zinc-500">FIG-012</div>
<div className="w-full h-full flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="w-12 h-12" viewbox="0 0 24 24"><path d="M12 2v20M2 2l20 20" stroke="currentColor" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-download w-3 h-3 text-zinc-500" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-12 bg-zinc-950 w-full border-zinc-900 border-b pt-24 pr-6 pb-24 pl-6 relative" id="branding">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-orange-500 font-mono text-[10px] tracking-widest uppercase mb-2 block">/// Section 03</span>
<h3 className="text-2xl text-zinc-100 font-semibold tracking-tight">Identity Systems</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-zinc-900 mb-4 overflow-hidden relative rounded-sm border border-zinc-800">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="bg-zinc-100 text-zinc-950 text-[10px] font-bold px-2 py-1 mb-2 inline-block">2024</span>
</div>
</div>
<h4 className="text-lg text-zinc-100 font-medium">Lumina Architectural</h4>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2">Complete rebranding for a Tokyo-based lighting firm. Includes stationery, wayfinding, and digital presence.</p>
<div className="flex gap-2 mt-3">
<span className="text-[10px] border border-zinc-800 px-2 py-0.5 rounded text-zinc-400">Print</span>
<span className="text-[10px] border border-zinc-800 px-2 py-0.5 rounded text-zinc-400">Digital</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-zinc-900 mb-4 overflow-hidden relative rounded-sm border border-zinc-800">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="bg-zinc-100 text-zinc-950 text-[10px] font-bold px-2 py-1 mb-2 inline-block">2023</span>
</div>
</div>
<h4 className="text-lg text-zinc-100 font-medium">Velvet &amp; Oak</h4>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2">Identity design for a luxury furniture boutique. Serif typography paired with earthy tones.</p>
<div className="flex gap-2 mt-3">
<span className="text-[10px] border border-zinc-800 px-2 py-0.5 rounded text-zinc-400">Packaging</span>
<span className="text-[10px] border border-zinc-800 px-2 py-0.5 rounded text-zinc-400">Strategy</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full px-6 lg:px-12 py-24 bg-zinc-950 relative" id="ui">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-blue-500 font-mono text-[10px] tracking-widest uppercase mb-2 block">/// Section 04</span>
<h3 className="text-2xl text-zinc-100 font-semibold tracking-tight">User Interface</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition-colors group">
<div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="ml-auto text-[9px] text-zinc-600 font-mono">finance_app_v2.fig</span>
</div>
<div className="aspect-[9/16] bg-zinc-950 rounded border border-zinc-800 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-4 right-4 h-12 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-around">
<div className="w-4 h-4 bg-white/50 rounded-full"></div>
<div className="w-4 h-4 bg-white/20 rounded-full"></div>
<div className="w-4 h-4 bg-white/20 rounded-full"></div>
</div>
</div>
<h4 className="mt-4 text-xs font-medium text-zinc-300">Finance Dashboard</h4>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition-colors group">
<div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="ml-auto text-[9px] text-zinc-600 font-mono">player_ui.fig</span>
</div>
<div className="aspect-[9/16] bg-zinc-950 rounded border border-zinc-800 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<svg className="lucide lucide-play w-6 h-6 fill-white text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<h4 className="mt-4 text-xs font-medium text-zinc-300">Music Player</h4>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition-colors group">
<div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="ml-auto text-[9px] text-zinc-600 font-mono">crypto_wallet.fig</span>
</div>
<div className="aspect-[9/16] bg-zinc-950 rounded border border-zinc-800 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="mt-4 text-xs font-medium text-zinc-300">Crypto Wallet</h4>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-6 lg:px-12 mt-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="space-y-4">
<h1 className="text-sm tracking-tight text-zinc-100 font-medium">SIPOS RAUL-MIHAI</h1>
<div className="text-[10px] text-zinc-500 leading-relaxed max-w-xs">
                    Building digital products, brands, and experiences.<br/>
                    Currently available for freelance projects.
                </div>
</div>
<div className="flex gap-12 text-[10px] tracking-widest uppercase">
<div className="flex flex-col gap-2">
<span className="text-zinc-600 mb-1">Socials</span>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Twitter / X</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-zinc-600 mb-1">Resources</span>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Figma Community</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Read.cv</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Mail</a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-600">
<span>© 2025 ALL RIGHTS RESERVED.</span>
<span>LOCAL TIME: <span id="time">17:29</span></span>
</div>
</footer>


    </>
  );
}

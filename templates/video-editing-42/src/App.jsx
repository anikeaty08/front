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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Loading Screen Logic
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('loader-hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 2500); // 2.5s simulated load
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
      

<div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center" id="loader">
<div className="relative mb-8">
<h1 className="glitch-load text-4xl font-bold tracking-tighter text-white uppercase" data-text="STREAX STUDIOS">STREAX STUDIOS</h1>
</div>
<div className="w-64 h-1 bg-neutral-900 rounded-full overflow-hidden relative">
<div className="scan-line absolute top-0 left-0"></div>
</div>
<div className="mt-4 text-xs font-mono text-red-600 animate-pulse">INITIALIZING PROTOCOLS...</div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="w-2 h-2 bg-[#50000A] rounded-sm rotate-45 group-hover:animate-spin border border-red-500/50"></span>
<span className="text-sm font-semibold tracking-tight text-white uppercase group-hover:text-red-500 transition-colors">
                    Streax Studios
                </span>
</a>
<div className="hidden md:flex items-center space-x-8 text-[11px] font-medium tracking-widest text-neutral-400 uppercase">
<a className="hover:text-white transition-colors" href="#nexus">Nexus</a>
<a className="hover:text-white transition-colors" href="#about">Manifest</a>
<a className="hover:text-white transition-colors" href="#disciplines">Disciplines</a>
<a className="hover:text-white transition-colors" href="#archive">Archive</a>
<a className="hover:text-white transition-colors" href="#team">Unit</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-sm text-[11px] font-bold uppercase hover:bg-neutral-200 transition-colors tracking-tight" href="#transmission">
<span>Start Protocol</span>
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</a>
<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative h-[90vh] bg-black overflow-hidden flex flex-col" id="nexus">

<div className="absolute inset-0 z-0 opacity-60">

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full object-cover pointer-events-none scale-125" frameborder="0" src="https://www.youtube.com/embed/Z7aMCp9RCbk?autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;playlist=Z7aMCp9RCbk&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1" title="Hero Background">
</iframe>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-black/40 pointer-events-none"></div>

<div className="absolute bottom-10 left-0 w-full z-20 border-y border-white/10 bg-black/30 backdrop-blur-sm py-4">
<div className="marquee-container">
<div className="marquee-content">
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase px-4 inline-block neon-pulse-text">We Are A Premier Video Editing And 3D Rendering Studio.</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent stroke-text uppercase px-4 inline-block" style={{WebkitTextStroke: '1px rgba(185, 28, 28, 0.5)'}}>We Are A Premier Video Editing And 3D Rendering Studio.</span>
<span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase px-4 inline-block">We Are A Premier Video Editing And 3D Rendering Studio.</span>
</div>
</div>
</div>
</header>

<section className="py-24 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 space-y-24">

<div className="relative">
<div className="absolute -top-20 -left-20 w-64 h-64 bg-[#50000A] rounded-full blur-[100px] opacity-60"></div>
<div className="glass-panel p-8 md:p-12 rounded-2xl relative z-10 max-w-4xl mx-auto text-center border-l-4 border-l-[#50000A]">
<h2 className="text-xs font-mono text-red-500 mb-6 uppercase tracking-widest">[ SYSTEM_OVERVIEW ]</h2>
<p className="text-lg md:text-2xl text-neutral-200 font-light leading-relaxed tracking-tight">
<span className="font-semibold text-white">STREAX STUDIOS</span> is a premier video production studio specializing in high-quality video editing, immersive 3D rendering, and captivating advertisement videos. Renowned for our precision and creativity, we deliver tailored visual solutions that meet and exceed client expectations.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-4">
<h3 className="text-3xl font-bold tracking-tight text-white mb-2">THE JOURNEY</h3>
<p className="text-neutral-500 text-sm">Temporal Data Log</p>
</div>
<div className="md:col-span-8 relative">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-800 -translate-y-1/2 hidden md:block"></div>
<div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-gradient-to-r from-[#50000A] to-transparent -translate-y-1/2 hidden md:block shadow-[0_0_10px_#50000A]"></div>
<div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
<div className="bg-black border border-red-900/30 p-6 rounded-lg w-full md:w-64 group hover:border-[#50000A] transition-colors">
<div className="text-4xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">4+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4">Years Active</div>
<p className="text-xs text-neutral-400 leading-relaxed">
                                Making significant strides in the <span className="text-white">WEB3 SPACE</span>.
                            </p>
</div>
<div className="bg-black border border-red-900/30 p-6 rounded-lg w-full md:w-64 group hover:border-red-600 transition-colors md:ml-auto">
<div className="text-4xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">20+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4">Esteemed Clients</div>
<p className="text-xs text-neutral-400 leading-relaxed">
                                Collaborating with leading companies in the <span className="text-white">Web3 Ecosystem</span>.
                            </p>
</div>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
<div>
<h3 className="text-xl font-bold tracking-tight text-white uppercase mb-2">Global Presence</h3>
<p className="text-sm text-neutral-400 max-w-lg">
                            Delivering top-tier visual media solutions to clients across Dubai, Turkey, The USA, Canada, Poland, The UK, and beyond.
                        </p>
</div>
<div className="flex gap-2 text-[10px] font-mono text-red-400 uppercase border border-red-900/40 bg-[#50000A] px-3 py-1 mt-4 md:mt-0 rounded-full">
<span className="animate-pulse">●</span> Active Uplink
                    </div>
</div>

<div className="relative w-full h-[300px] bg-neutral-900/30 rounded-xl border border-white/5 overflow-hidden group">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 flex items-center justify-center opacity-20">
<svg className="text-white w-full h-full" fill="currentColor" viewbox="0 0 1000 500">
<path d="M220,150 Q250,120 280,150 T340,180 T400,250 T350,350 T250,300 T220,150 M550,100 Q600,80 650,120 T700,200 T650,300 T550,250 T550,100 M800,150 Q850,130 900,160 T920,250 T850,300 T800,150"></path>
</svg>
</div>

<div className="map-dot top-[30%] left-[20%] active"></div>
<div className="map-dot top-[20%] left-[22%]"></div>
<div className="map-dot top-[28%] left-[48%] active"></div>
<div className="map-dot top-[29%] left-[52%]"></div>
<div className="map-dot top-[35%] left-[55%]"></div>
<div className="map-dot top-[40%] left-[60%] active"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-red-800 stroke-[1] fill-none">
<path className="path-anim" d="M200,150 L480,140 L600,200"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black/20" id="disciplines">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-3 mb-12">
<span className="iconify text-red-600" data-icon="lucide:layers" data-width="20"></span>
<h2 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Core Protocols // 3D &amp; 2D Complex Works</h2>
</div>
<div className="flex flex-col md:flex-row h-[600px] gap-2">

<div className="group relative flex-accordion flex-1 hover:flex-[2] bg-neutral-900/50 border border-white/10 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-[#50000A] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
<span className="text-4xl font-bold text-white/10 absolute top-6 right-6">01</span>
<h3 className="text-lg font-bold text-white uppercase tracking-tighter rotate-0 md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8 whitespace-nowrap">CGI &amp; VFX</h3>
</div>
<div className="absolute inset-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-center">
<span className="iconify text-red-500 mb-4" data-icon="lucide:monitor-play" data-width="32"></span>
<h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Computer Generated Imagery</h3>
<p className="text-neutral-400 text-sm leading-relaxed">High-end visual effects and seamless integration of CGI into live-action footage.</p>
</div>
</div>

<div className="group relative flex-accordion flex-1 hover:flex-[2] bg-neutral-900/50 border border-white/10 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
<span className="text-4xl font-bold text-white/10 absolute top-6 right-6">02</span>
<h3 className="text-lg font-bold text-white uppercase tracking-tighter rotate-0 md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8 whitespace-nowrap">Rendering</h3>
</div>
<div className="absolute inset-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-center">
<span className="iconify text-red-400 mb-4" data-icon="lucide:box" data-width="32"></span>
<h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Photorealistic Rendering</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Creating life-like stills and sequences that blur the line between virtual and reality.</p>
</div>
</div>

<div className="group relative flex-accordion flex-1 hover:flex-[2] bg-neutral-900/50 border border-white/10 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-red-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
<span className="text-4xl font-bold text-white/10 absolute top-6 right-6">03</span>
<h3 className="text-lg font-bold text-white uppercase tracking-tighter rotate-0 md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8 whitespace-nowrap">Modeling</h3>
</div>
<div className="absolute inset-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-center">
<span className="iconify text-red-300 mb-4" data-icon="lucide:component" data-width="32"></span>
<h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">3D Asset Modeling</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Precision modeling for products, environments, and characters with intricate detail.</p>
</div>
</div>

<div className="group relative flex-accordion flex-1 hover:flex-[2] bg-neutral-900/50 border border-white/10 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-red-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
<span className="text-4xl font-bold text-white/10 absolute top-6 right-6">04</span>
<h3 className="text-lg font-bold text-white uppercase tracking-tighter rotate-0 md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8 whitespace-nowrap">Animation</h3>
</div>
<div className="absolute inset-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-center">
<span className="iconify text-red-600 mb-4" data-icon="lucide:activity" data-width="32"></span>
<h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Motion Graphics</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Fluid animation and motion graphics that tell a compelling story through movement.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="archive">
<div className="max-w-7xl mx-auto px-6 mb-12">
<span className="text-xs font-mono text-red-500 mb-2 block">/// ARCHIVE_ACCESS</span>
<h2 className="text-3xl font-bold tracking-tight text-white uppercase mb-6">Selected Works</h2>
<div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
<a className="hover:text-white border-b border-transparent hover:border-white transition-colors" href="#">Valorant Trailer</a>
<span>/</span>
<a className="hover:text-white border-b border-transparent hover:border-white transition-colors" href="#">Graphic Designing</a>
<span>/</span>
<a className="hover:text-white border-b border-transparent hover:border-white transition-colors" href="#">Video Editing</a>
<span>/</span>
<a className="hover:text-white border-b border-transparent hover:border-white transition-colors" href="#">High End Editing</a>
</div>
</div>
<div className="w-full overflow-x-auto pb-12 px-6 scrollbar-hide snap-x snap-mandatory">
<div className="flex gap-6 w-max">

<div className="group w-[320px] h-[450px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
<div className="w-full h-full bg-gradient-to-tr from-[#50000A] to-black flex flex-col justify-end p-8">
<h3 className="text-2xl font-bold text-white uppercase leading-none mb-1">Tokyo<br/>2923</h3>
<p className="text-[10px] text-red-300 font-mono">CYBERPUNK STYLE</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-black border border-red-500/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center">
<span className="text-xs font-mono text-red-500 mb-4">PROJECT DETAILS</span>
<h3 className="text-xl font-bold text-white uppercase mb-2">Tokyo 2923</h3>
<p className="text-neutral-400 text-xs mb-6 leading-relaxed">A high-octane Cyberpunk stylized edit pushing the boundaries of 3D motion tracking.</p>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Case Study</span>
</div>
</div>
</div>

<div className="group w-[320px] h-[450px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
<div className="w-full h-full bg-gradient-to-tr from-red-900 to-black flex flex-col justify-end p-8">
<h3 className="text-2xl font-bold text-white uppercase leading-none mb-1">Nissan<br/>GTR35</h3>
<p className="text-[10px] text-red-200 font-mono">AUTOMOTIVE CGI</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-black border border-red-500/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center">
<span className="text-xs font-mono text-red-500 mb-4">PROJECT DETAILS</span>
<h3 className="text-xl font-bold text-white uppercase mb-2">Nissan GTR35</h3>
<p className="text-neutral-400 text-xs mb-6 leading-relaxed">Photorealistic automotive rendering focusing on lighting and reflection physics.</p>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">GFX Portfolio</span>
</div>
</div>
</div>

<div className="group w-[320px] h-[450px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
<div className="w-full h-full bg-gradient-to-tr from-yellow-900 to-black flex flex-col justify-end p-8">
<h3 className="text-2xl font-bold text-white uppercase leading-none mb-1">Hyper<br/>Ordinals</h3>
<p className="text-[10px] text-yellow-600 font-mono">WEB3 / CRYPTO</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-black border border-yellow-800/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center">
<span className="text-xs font-mono text-yellow-600 mb-4">PROJECT DETAILS</span>
<h3 className="text-xl font-bold text-white uppercase mb-2">Hyper Ordinals</h3>
<p className="text-neutral-400 text-xs mb-6 leading-relaxed">Dynamic motion graphics for the Web3 ecosystem, emphasizing brand identity.</p>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Client Work</span>
</div>
</div>
</div>

<div className="group w-[320px] h-[450px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
<div className="w-full h-full bg-gradient-to-tr from-red-800 to-black flex flex-col justify-end p-8">
<h3 className="text-2xl font-bold text-white uppercase leading-none mb-1">Porsche<br/>911 Turbo</h3>
<p className="text-[10px] text-red-300 font-mono">AUTOMOTIVE CGI</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-black border border-red-500/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center">
<span className="text-xs font-mono text-red-500 mb-4">PROJECT DETAILS</span>
<h3 className="text-xl font-bold text-white uppercase mb-2">Porsche 911</h3>
<p className="text-neutral-400 text-xs mb-6 leading-relaxed">High-fidelity texturing and environment design for luxury automotive.</p>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">GFX Portfolio</span>
</div>
</div>
</div>

<div className="group w-[320px] h-[450px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
<div className="w-full h-full bg-gradient-to-tr from-red-950 to-black flex flex-col justify-end p-8">
<h3 className="text-2xl font-bold text-white uppercase leading-none mb-1">Unity<br/>Academy</h3>
<p className="text-[10px] text-red-400 font-mono">EDUCATIONAL</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-black border border-red-500/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center">
<span className="text-xs font-mono text-red-500 mb-4">PROJECT DETAILS</span>
<h3 className="text-xl font-bold text-white uppercase mb-2">Unity Academy</h3>
<p className="text-neutral-400 text-xs mb-6 leading-relaxed">Engaging educational content editing that boosted viewer retention significantly.</p>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Client Work</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="max-w-7xl mx-auto px-6 mb-20">
<h2 className="text-xs font-mono text-neutral-500 mb-10 text-center uppercase">[ KEY_DIFFERENTIATORS ]</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="animate-float-subtle p-6 bg-white/5 border border-white/10 rounded-lg">
<span className="iconify block mx-auto text-red-500 mb-3" data-icon="lucide:users" data-width="24"></span>
<h4 className="text-xs font-bold text-white uppercase tracking-widest">Referral-Based Trust</h4>
</div>
<div className="animate-float-subtle p-6 bg-white/5 border border-white/10 rounded-lg" style={{animationDelay: '1s'}}>
<span className="iconify block mx-auto text-red-400 mb-3" data-icon="lucide:eye" data-width="24"></span>
<h4 className="text-xs font-bold text-white uppercase tracking-widest">Expertise in Visuals</h4>
</div>
<div className="animate-float-subtle p-6 bg-white/5 border border-white/10 rounded-lg" style={{animationDelay: '2s'}}>
<span className="iconify block mx-auto text-red-600 mb-3" data-icon="lucide:sliders" data-width="24"></span>
<h4 className="text-xs font-bold text-white uppercase tracking-widest">Tailored Solutions</h4>
</div>
<div className="animate-float-subtle p-6 bg-white/5 border border-white/10 rounded-lg" style={{animationDelay: '3s'}}>
<span className="iconify block mx-auto text-yellow-600 mb-3" data-icon="lucide:award" data-width="24"></span>
<h4 className="text-xs font-bold text-white uppercase tracking-widest">Industry Recognition</h4>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-bold text-white mb-8 tracking-tight uppercase">Transmission Logs</h2>
<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">

<div className="glass-panel p-8 rounded-xl min-w-[300px] md:min-w-[400px] snap-center">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[#50000A] border border-red-500/30 flex items-center justify-center font-bold text-xs text-white">M</div>
<div>
<h4 className="text-sm font-bold text-white">Metadonprofits</h4>
<p className="text-[10px] text-neutral-400 uppercase">New York, USA</p>
</div>
</div>
<p className="text-sm text-neutral-300 italic leading-relaxed">"Our collaboration has been remarkable, with Streax Studios producing over 8 dynamic videos and 3D passes under Metadon's insightful guidance."</p>
</div>

<div className="glass-panel p-8 rounded-xl min-w-[300px] md:min-w-[400px] snap-center">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[#50000A] border border-red-500/30 flex items-center justify-center font-bold text-xs text-white">C</div>
<div>
<h4 className="text-sm font-bold text-white">Caleb</h4>
<p className="text-[10px] text-neutral-400 uppercase">UK, Unity Academy</p>
</div>
</div>
<p className="text-sm text-neutral-300 italic leading-relaxed">"Caleb's clear vision and commitment to excellence have guided each project, leading to content that resonates deeply with their audience."</p>
</div>

<div className="glass-panel p-8 rounded-xl min-w-[300px] md:min-w-[400px] snap-center">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[#50000A] border border-red-500/30 flex items-center justify-center font-bold text-xs text-white">CC</div>
<div>
<h4 className="text-sm font-bold text-white">Canna Case Co.</h4>
<p className="text-[10px] text-neutral-400 uppercase">Canada</p>
</div>
</div>
<p className="text-sm text-neutral-300 italic leading-relaxed">"Working with Canna Case has been an exciting journey... We're proud of the work we've accomplished together."</p>
</div>

<div className="glass-panel p-8 rounded-xl min-w-[300px] md:min-w-[400px] snap-center">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[#50000A] border border-red-500/30 flex items-center justify-center font-bold text-xs text-white">PB</div>
<div>
<h4 className="text-sm font-bold text-white">PiotrBorowiec</h4>
<p className="text-[10px] text-neutral-400 uppercase">Canada</p>
</div>
</div>
<p className="text-sm text-neutral-300 italic leading-relaxed">"Our fruitful partnership has evolved into a strong bond, and we're excited to continue this journey as partners."</p>
</div>

<div className="glass-panel p-8 rounded-xl min-w-[300px] md:min-w-[400px] snap-center">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[#50000A] border border-red-500/30 flex items-center justify-center font-bold text-xs text-white">K</div>
<div>
<h4 className="text-sm font-bold text-white">Krusher</h4>
<p className="text-[10px] text-neutral-400 uppercase">Germany, Tokyo 2923</p>
</div>
</div>
<p className="text-sm text-neutral-300 italic leading-relaxed">"Krusher's innovative vision and dedication to excellence have made our collaboration seamless and productive."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black/40" id="team">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-xs font-mono text-neutral-500 mb-8 uppercase">[ UNIT_MEMBERS ]</h2>
<p className="text-sm text-neutral-400 mb-12 max-w-2xl">
                TEAM: Over 40+ experts including CGI artists, animators, modelers, VFX artists, sound artists, 3D artists, leads, and outreach specialists.
            </p>
<div className="grid grid-cols-2 md:grid-cols-3 gap-1">

<div className="diagonal-wipe h-64 bg-neutral-900 border border-white/5 relative group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Antro&amp;backgroundColor=1a1a1a')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content group-hover:text-white">
<h3 className="text-lg font-bold text-white uppercase tracking-tight relative z-30">Antro Figati</h3>
<p className="text-[10px] font-mono text-red-500 uppercase relative z-30">Founder</p>
</div>
</div>

<div className="diagonal-wipe h-64 bg-neutral-900 border border-white/5 relative group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Markus&amp;backgroundColor=1a1a1a')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content">
<h3 className="text-lg font-bold text-white uppercase tracking-tight relative z-30">Markus</h3>
<p className="text-[10px] font-mono text-red-400 uppercase relative z-30">Marketing</p>
</div>
</div>

<div className="diagonal-wipe h-64 bg-neutral-900 border border-white/5 relative group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Bob&amp;backgroundColor=1a1a1a')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content">
<h3 className="text-lg font-bold text-white uppercase tracking-tight relative z-30">Bob</h3>
<p className="text-[10px] font-mono text-red-600 uppercase relative z-30">Manager &amp; Biz Dev</p>
</div>
</div>

<div className="diagonal-wipe h-64 bg-neutral-900 border border-white/5 relative group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Carl&amp;backgroundColor=1a1a1a')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content">
<h3 className="text-lg font-bold text-white uppercase tracking-tight relative z-30">Carl</h3>
<p className="text-[10px] font-mono text-red-300 uppercase relative z-30">Social Media Manager</p>
</div>
</div>

<div className="diagonal-wipe h-64 bg-neutral-900 border border-white/5 relative group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Nick&amp;backgroundColor=1a1a1a')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content">
<h3 className="text-lg font-bold text-white uppercase tracking-tight relative z-30">Nick</h3>
<p className="text-[10px] font-mono text-yellow-500 uppercase relative z-30">Strategy Planner</p>
</div>
</div>

<div className="diagonal-wipe h-64 bg-neutral-900 border border-white/5 relative group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Sanboos&amp;backgroundColor=1a1a1a')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content">
<h3 className="text-lg font-bold text-white uppercase tracking-tight relative z-30">Sanboos Fangx</h3>
<p className="text-[10px] font-mono text-orange-500 uppercase relative z-30">Work &amp; VFX Manager</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="transmission">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-12">
<div className="text-center md:text-left">
<h2 className="text-3xl font-bold tracking-tight text-white mb-4">READY TO TRANSMIT?</h2>
<div className="flex flex-col space-y-2 text-sm text-neutral-400 font-mono">
<a className="hover:text-red-500 transition-colors flex items-center justify-center md:justify-start gap-2" href="mailto:streaxstudios@gmail.com">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                            streaxstudios@gmail.com
                        </a>
<a className="hover:text-red-500 transition-colors flex items-center justify-center md:justify-start gap-2" href="tel:+15852003760">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                            +1 (585) 200-3760
                        </a>
<div className="flex items-center justify-center md:justify-start gap-2">
<span className="iconify" data-icon="lucide:at-sign" data-width="16"></span>
                            @streaxstudios (Twitter/Instagram)
                        </div>
</div>
</div>
<a className="neon-glow-btn px-10 py-5 bg-[#50000A] text-white font-bold tracking-widest uppercase rounded-sm hover:bg-[#700010] transition-colors flex items-center gap-3 border border-red-500/20" href="mailto:streaxstudios@gmail.com">
                    Initiate Transmission
                    <span className="iconify" data-icon="lucide:send" data-width="18"></span>
</a>
</div>
<div className="border-t border-white/5 mt-16 pt-8 text-center md:text-left text-[10px] text-neutral-600 uppercase tracking-widest">
                © 2024 Streax Studios. All Systems Operational.
            </div>
</div>
</section>


    </>
  );
}

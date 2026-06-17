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



              (function() {
                const container = document.getElementById('hero-gallery-container');
                const track = document.getElementById('hero-gallery-track');
                const prevBtn = document.getElementById('hero-gallery-prev');
                const nextBtn = document.getElementById('hero-gallery-next');
                const indicator = document.getElementById('hero-gallery-indicator');
                let index = 0;
                const total = 3;

                function updateSlider() {
                    // Slide transition
                    track.style.transform = `translateX(-${index * 100}%)`;
                    // Update indicator text
                    indicator.textContent = String(index + 1).padStart(2, '0');
                }

                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    index = (index - 1 + total) % total;
                    updateSlider();
                });

                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    index = (index + 1) % total;
                    updateSlider();
                });

                // Keyboard navigation support within component
                container.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') prevBtn.click();
                    if (e.key === 'ArrowRight') nextBtn.click();
                });
              })();
            


      lucide.createIcons();
    
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
      

<div className="fixed grid-lines pointer-events-none z-0 top-0 right-0 bottom-0 left-0 overflow-hidden" style={{}}>
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" xmlns="http://www.w3.org/2000/svg">
<defs></defs>

<line filter="url(#neonGlow)" stroke="url(#neonGradient1)" strokeWidth="2" x1="-200" x2="0" y1="25%" y2="25%">
<animate attributename="x1" dur="8s" repeatcount="indefinite" values="-200;100%"></animate>
<animate attributename="x2" dur="8s" repeatcount="indefinite" values="0;120%"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient1)" strokeWidth="2" x1="-200" x2="0" y1="50%" y2="50%">
<animate attributename="x1" dur="10s" repeatcount="indefinite" values="100%;-200"></animate>
<animate attributename="x2" dur="10s" repeatcount="indefinite" values="120%;0"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient1)" strokeWidth="2" x1="-200" x2="0" y1="75%" y2="75%">
<animate attributename="x1" dur="12s" repeatcount="indefinite" values="-200;100%"></animate>
<animate attributename="x2" dur="12s" repeatcount="indefinite" values="0;120%"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient2)" strokeWidth="2" x1="25%" x2="25%" y1="-200" y2="0">
<animate attributename="y1" dur="9s" repeatcount="indefinite" values="-200;100%"></animate>
<animate attributename="y2" dur="9s" repeatcount="indefinite" values="0;120%"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient2)" strokeWidth="2" x1="50%" x2="50%" y1="-200" y2="0">
<animate attributename="y1" dur="11s" repeatcount="indefinite" values="100%;-200"></animate>
<animate attributename="y2" dur="11s" repeatcount="indefinite" values="120%;0"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient2)" strokeWidth="2" x1="75%" x2="75%" y1="-200" y2="0">
<animate attributename="y1" dur="7s" repeatcount="indefinite" values="-200;100%"></animate>
<animate attributename="y2" dur="7s" repeatcount="indefinite" values="0;120%"></animate>
</line>
</svg>
</div>

<nav className="flex md:px-12 z-50 border-white/10 border-b pt-6 pr-6 pb-6 pl-6 relative items-center justify-between" style={{}}>
<a className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2" href="#">
<svg className="text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
        VijuIT
      </a>
</nav>

<main className="z-10 relative">

<section className="md:pt-24 md:pb-32 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-0 border-white/10 border-b pt-16 pr-6 pb-20 pl-6 relative gap-x-0 gap-y-0" style={{}}>

<div className="col-span-1 flex flex-col z-20 h-full relative justify-between">
<div className="mb-16">
<p className="text-[10px] uppercase md:text-xs font-semibold text-[#ffffff]/60 tracking-widest mb-2">
              Spotlight: Full Stack Development
            </p>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-4">
              VIJU
              <span className="text-amber-500">IT</span>
</h1>
<div className="h-px w-full bg-gradient-to-r from-white/30 to-transparent my-6"></div>
</div>
<div className="grid grid-cols-2 gap-8 mb-12">
<div className="group">
<svg className="text-amber-500 mb-4" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
<path d="m9 16 2 2 4-4"></path>
</svg>
<h3 className="text-sm font-semibold leading-tight mb-2">
                Web Apps &amp;
                <br/>
                Dashboards
              </h3>
<div className="w-4 h-0.5 group-hover:w-8 transition-all bg-amber-300/50"></div>
</div>
<div className="group">
<svg className="text-amber-500 mb-4" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="m18 16 4-4-4-4"></path>
<path d="m6 8-4 4 4 4"></path>
<path d="m14.5 4-5 16"></path>
</svg>
<h3 className="text-sm font-semibold leading-tight mb-2">
                Frontend &amp;
                <br/>
                UI Design
              </h3>
<div className="w-4 h-0.5 group-hover:w-8 transition-all bg-amber-300/50"></div>
</div>
</div>
<div className="flex gap-12 mt-auto text-xs font-medium tracking-wide text-amber-50" style={{transition: 'outline 0.1s ease-in-out'}}>
<a className="hover:text-white flex items-center gap-2 transition-colors" href="#" style={{}}>
              Portfolio
              <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="hover:text-white flex items-center gap-2 transition-colors" href="#" style={{}}>
              Client List
              <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex md:py-0 pt-10 pb-10 relative items-center justify-center">

<div className="aspect-[3/4] group overflow-hidden md:aspect-auto md:h-[600px] w-full relative" id="hero-gallery-container" style={{}}>

<div className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform w-full h-full" id="hero-gallery-track" style={{}}>

<div className="flex-shrink-0 z-10 w-full h-full relative" style={{}}>
<img alt="Cloud Infrastructure" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&amp;fit=crop&amp;q=80&amp;w=3840"/>
<div className="bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded border text-[10px] font-mono uppercase backdrop-blur-md border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                      Infrastructure
                    </span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-1">
                    Cloud Systems
                  </h3>
<p className="text-sm text-white/60 line-clamp-1">
                    Scalable enterprise architecture and deployment.
                  </p>
</div>
</div>

<div className="w-full h-full flex-shrink-0 relative">
<img alt="Development" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;q=80&amp;w=3840"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 text-[10px] font-mono uppercase text-amber-300 backdrop-blur-md">
                      Development
                    </span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-1">
                    Full Stack
                  </h3>
<p className="text-sm text-white/60 line-clamp-1">
                    End-to-end software solutions and UI/UX.
                  </p>
</div>
</div>

<div className="w-full h-full flex-shrink-0 relative">
<img alt="AI &amp; Data" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;q=80&amp;w=3840"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded border border-purple-500/30 bg-purple-500/10 text-[10px] font-mono uppercase text-purple-300 backdrop-blur-md">
                      Intelligence
                    </span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-1">
                    AI Integration
                  </h3>
<p className="text-sm text-white/60 line-clamp-1">
                    Smart algorithms and neural data processing.
                  </p>
</div>
</div>
</div>

<div className="flex gap-3 z-20 absolute right-8 bottom-8 items-center">

<div className="px-3 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 text-xs font-mono text-white/90 mr-2 shadow-lg" style={{}}>
<span id="hero-gallery-indicator">01</span>
<span className="text-white/30 mx-1">/</span>
                03
              </div>

<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group/btn shadow-lg" id="hero-gallery-prev" style={{}}>
<svg className="lucide lucide-arrow-left group-hover/btn:-translate-x-0.5 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group/btn shadow-lg" id="hero-gallery-next" style={{}}>
<svg className="lucide lucide-arrow-right group-hover/btn:translate-x-0.5 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>


</div>
</div>

<div className="col-span-1 flex flex-col md:items-end z-20 md:pt-0 h-full pt-8 relative items-start" style={{}}>
<p className="text-[10px] uppercase font-semibold text-[#ffffff]/60 tracking-widest mb-1">
            Project Year:
          </p>
<span className="text-6xl md:text-8xl font-bold tracking-tighter">
            DEV
          </span>
</div>
</section>


<section className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 bg-zinc-900 relative group" id="projects">
<div className="relative min-h-[500px] lg:min-h-[700px] border-r border-white/10 overflow-hidden">
<img alt="Nexus Dash" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f70c7044-8476-4d86-b5d5-fe5bd8d8d8aa_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-80 backdrop-blur-xl bg-white/5 border border-white/10 p-6 z-10 hover:bg-white/10 transition-colors duration-300">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
<span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">
                2024
              </span>
<svg className="lucide lucide-activity text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="space-y-1">
<p className="text-xs text-white/50 uppercase tracking-wider font-semibold">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Lead Dev
              </p>
<p className="text-lg font-medium tracking-tight">Nexus Dash</p>
</div>
</div>
</div>
<div className="flex flex-col">
<div className="p-8 md:p-16 flex-1 flex flex-col justify-center relative">
<p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3 text-amber-500">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Project 01
            </p>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none mb-6 text-white">
              SaaS Analytics
              <span className="text-white/40">Platform</span>
</h2>
<p className="leading-relaxed max-w-md text-sm md:text-base text-[#bdb8a3]/60">
              A comprehensive dashboard solution for enterprise clients,
              featuring real-time socket connections, dark mode UI, and
              responsive data grids for millions of data points.
            </p>
</div>
<div className="border-t border-white/10 divide-y divide-white/10 bg-black/20">
<div className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400">
                    01
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors">
                      Real-time Visualization
                    </h3>
<span className="text-xs text-white/40 mt-1">
                      WebSockets, D3.js
                    </span>
</div>
</div>
</div>
</div>
<div className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400">
                    02
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors">
                      Cloud Infrastructure
                    </h3>
<span className="text-xs text-white/40 mt-1">
                      AWS, Docker, Kubernetes
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 bg-zinc-900 relative group">
<div className="relative min-h-[500px] lg:min-h-[700px] border-r border-white/10 overflow-hidden">
<img alt="Cyber Guard" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-80 backdrop-blur-xl bg-white/5 border border-white/10 p-6 z-10 hover:bg-white/10 transition-colors duration-300">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
<span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">
                2023
              </span>
<svg className="lucide lucide-shield text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<div className="space-y-1">
<p className="text-xs text-white/50 uppercase tracking-wider font-semibold">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Security
              </p>
<p className="text-lg font-medium tracking-tight">Cyber Guard</p>
</div>
</div>
</div>
<div className="flex flex-col">
<div className="p-8 md:p-16 flex-1 flex flex-col justify-center relative">
<p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3 text-amber-500">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Project 02
            </p>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none mb-6 text-white">
              Enterprise
              <span className="text-white/40">Security</span>
</h2>
<p className="leading-relaxed max-w-md text-sm md:text-base text-[#bdb8a3]/60">
              Next-generation threat detection system utilizing machine learning
              to identify and neutralize vulnerabilities in real-time network
              traffic.
            </p>
</div>
<div className="border-t border-white/10 divide-y divide-white/10 bg-black/20">
<div className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400">
                    01
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors">
                      Threat Detection
                    </h3>
<span className="text-xs text-white/40 mt-1">
                      Python, TensorFlow
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 bg-zinc-900 relative group">
<div className="relative min-h-[500px] lg:min-h-[700px] border-r border-white/10 overflow-hidden">
<img alt="Flow State" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-80 backdrop-blur-xl bg-white/5 border border-white/10 p-6 z-10 hover:bg-white/10 transition-colors duration-300">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
<span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">
                2023
              </span>
<svg className="lucide lucide-zap text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<div className="space-y-1">
<p className="text-xs text-white/50 uppercase tracking-wider font-semibold">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Productivity
              </p>
<p className="text-lg font-medium tracking-tight">Flow State</p>
</div>
</div>
</div>
<div className="flex flex-col">
<div className="p-8 md:p-16 flex-1 flex flex-col justify-center relative">
<p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3 text-amber-500">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Project 03
            </p>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none mb-6 text-white">
              Workflow
              <span className="text-white/40">Automation</span>
</h2>
<p className="leading-relaxed max-w-md text-sm md:text-base text-[#bdb8a3]/60">
              Streamlining complex business processes with a visual
              drag-and-drop interface, connecting disparate APIs into a cohesive
              automated pipeline.
            </p>
</div>
<div className="border-t border-white/10 divide-y divide-white/10 bg-black/20">
<div className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400">
                    01
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors">
                      API Integration
                    </h3>
<span className="text-xs text-white/40 mt-1">
                      Node.js, GraphQL
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 bg-zinc-900 relative group">
<div className="relative min-h-[500px] lg:min-h-[700px] border-r border-white/10 overflow-hidden">
<img alt="Crypto Vault" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-80 backdrop-blur-xl bg-white/5 border border-white/10 p-6 z-10 hover:bg-white/10 transition-colors duration-300">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
<span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">
                2024
              </span>
<svg className="lucide lucide-wallet text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
<path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
<path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
</svg>
</div>
<div className="space-y-1">
<p className="text-xs text-white/50 uppercase tracking-wider font-semibold">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Fintech
              </p>
<p className="text-lg font-medium tracking-tight">Crypto Vault</p>
</div>
</div>
</div>
<div className="flex flex-col">
<div className="p-8 md:p-16 flex-1 flex flex-col justify-center relative">
<p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3 text-amber-500">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Project 04
            </p>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none mb-6 text-white">
              DeFi
              <span className="text-white/40">Exchange</span>
</h2>
<p className="leading-relaxed max-w-md text-sm md:text-base text-[#bdb8a3]/60">
              Secure decentralized exchange platform enabling seamless
              peer-to-peer cryptocurrency trading with smart contract
              verification.
            </p>
</div>
<div className="border-t border-white/10 divide-y divide-white/10 bg-black/20">
<div className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400">
                    01
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors">
                      Smart Contracts
                    </h3>
<span className="text-xs text-white/40 mt-1">
                      Solidity, Web3.js
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 bg-zinc-900 relative group">
<div className="relative min-h-[500px] lg:min-h-[700px] border-r border-white/10 overflow-hidden">
<img alt="Eco Track" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-80 backdrop-blur-xl bg-white/5 border border-white/10 p-6 z-10 hover:bg-white/10 transition-colors duration-300">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
<span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">
                2023
              </span>
<svg className="lucide lucide-leaf text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"></path>
<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
</svg>
</div>
<div className="space-y-1">
<p className="text-xs text-white/50 uppercase tracking-wider font-semibold">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                IoT
              </p>
<p className="text-lg font-medium tracking-tight">Eco Track</p>
</div>
</div>
</div>
<div className="flex flex-col">
<div className="p-8 md:p-16 flex-1 flex flex-col justify-center relative">
<p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3 text-amber-500">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Project 05
            </p>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none mb-6 text-white">
              Sustainable
              <span className="text-white/40">Cities</span>
</h2>
<p className="leading-relaxed max-w-md text-sm md:text-base text-[#bdb8a3]/60">
              IoT monitoring system for urban sustainability, tracking energy
              consumption and environmental metrics to optimize city resources.
            </p>
</div>
<div className="border-t border-white/10 divide-y divide-white/10 bg-black/20">
<div className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400">
                    01
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors">
                      Data Processing
                    </h3>
<span className="text-xs text-white/40 mt-1">Rust, Kafka</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 bg-zinc-900 relative group" style={{}}>

<div className="relative min-h-[500px] lg:min-h-[700px] border-r border-white/10 overflow-hidden" style={{}}>
<img alt="Digital Network Architecture" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-80 backdrop-blur-xl bg-white/5 border border-white/10 p-6 z-10 hover:bg-white/10 transition-colors duration-300" style={{}}>
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10" style={{}}>
<span className="text-[10px] font-bold uppercase tracking-widest text-amber-500" style={{}}>
                Phase 03
              </span>
<svg className="lucide lucide-activity text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="space-y-1">
<p className="text-xs text-white/50 uppercase tracking-wider font-semibold" style={{}}>
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Tech Stack
              </p>
<p className="text-lg font-medium tracking-tight">
                System Architecture
              </p>
</div>
</div>
</div>

<div className="flex flex-col">

<div className="p-8 md:p-16 flex-1 flex flex-col justify-center relative">
<div className="absolute top-0 right-0 p-6 opacity-20">
<svg className="lucide lucide-hexagon w-[120px] h-[120px]" data-icon-replaced="true" fill="none" height="120" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{color: 'rgb(254, 243, 199)', width: '120px', height: '120px'}} viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
<p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3 text-amber-500" style={{}}>
<span className="w-2 h-2 rounded-full bg-amber-400" style={{}}></span>
              Methodology
            </p>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none mb-6 text-white" style={{}}>
              Engineering
              <span className="text-white/40">Scalability</span>
</h2>
<p className="leading-relaxed max-w-md text-sm md:text-base text-[#bdb8a3]/60" style={{}}>
              Our development philosophy centers on modularity and performance.
              We architect resilient digital infrastructures that seamlessly
              integrate complex logic with intuitive user interfaces, ensuring
              stability at scale.
            </p>
</div>

<div className="border-t border-white/10 divide-y divide-white/10 bg-black/20" style={{}}>
<div className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400">
                    01
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors">
                      Frontend Development
                    </h3>
<span className="text-xs text-white/40 mt-1">
                      React, Vue, Next.js, Tailwind CSS
                    </span>
</div>
</div>
</div>
</div>
<div className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400">
                    02
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors">
                      Backend Engineering
                    </h3>
<span className="text-xs text-white/40 mt-1">
                      Node.js, Python, PostgreSQL, AWS
                    </span>
</div>
</div>
</div>
</div>
<div className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300">
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400">
                    03
                  </span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors">
                      Mobile &amp; Web3
                    </h3>
<span className="text-xs text-white/40 mt-1">
                      Flutter, React Native, Solidity
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="overflow-hidden pt-32 pb-12 relative">


<div className="md:px-12 flex flex-col md:flex-row z-10 mb-16 pr-6 pl-6 relative gap-x-12 gap-y-12 items-end justify-between">
<div className="flex items-center gap-8">
<div className="w-12 h-12 rounded-full border flex items-center justify-center border-amber-400" style={{}}>
<span className="iconify text-2xl text-amber-400" data-icon="solar:letter-a-bold-duotone" style={{}}></span>
</div>
<div className="flex gap-4 text-xs font-semibold tracking-widest uppercase opacity-80">
<span className="">A</span>
<span>U</span>
<span className="">R</span>
<span>A</span>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold mb-4">
              Follow us in social networks:
            </p>
<div className="flex gap-4 justify-end">
<a className="w-10 h-10 rounded-full bg-white/10 hover:bg-white flex items-center justify-center transition-colors hover:text-amber-900" href="#" style={{}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 hover:bg-white flex items-center justify-center transition-colors hover:text-amber-900" href="#" style={{}}>
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 hover:bg-white flex items-center justify-center transition-colors hover:text-amber-900" href="#" style={{}}>
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="md:px-12 bg-zinc-800/90 border-white/10 border-t pt-16 pr-6 pb-8 pl-6 backdrop-blur-md" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 max-w-7xl mx-auto">

<div className="space-y-6">
<a className="inline-flex items-center justify-center bg-center w-[140px] h-[24px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f8505c8-59ed-4f44-a5ac-bb1f54727fdf_320w.png)] bg-cover rounded-full" href="#"></a>
<p className="text-sm leading-relaxed max-w-xs text-[#bdb8a3]/60" style={{}}>
                Empowering businesses with cutting-edge software solutions,
                cloud architecture, and intuitive design for the digital age.
              </p>
<div className="pt-2">
<p className="text-xs font-semibold text-white mb-2" style={{}}>
                  Subscribe to our newsletter
                </p>
<form className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:bg-white/10 w-full transition-all focus:border-amber-400/50" placeholder="Email address" style={{}} type="email"/>
<button className="text-black font-semibold text-xs px-4 py-2 rounded transition-colors bg-amber-500 hover:bg-amber-600" style={{}} type="submit">
                    Join
                  </button>
</form>
</div>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-6 tracking-wide" style={{}}>
                Projects
              </h4>
<ul className="space-y-3 text-sm text-[#bdb8a3]/60" style={{}}>
<li>
<a className="transition-colors block hover:text-amber-600" href="#">
                    Web Development
                  </a>
</li>
<li>
<a className="transition-colors block hover:text-amber-600" href="#">
                    Mobile Apps
                  </a>
</li>
<li>
<a className="transition-colors block hover:text-amber-600" href="#">
                    Cloud Services
                  </a>
</li>
<li>
<a className="transition-colors block hover:text-amber-600" href="#">
                    AI &amp; Machine Learning
                  </a>
</li>
<li>
<a className="transition-colors block hover:text-amber-600" href="#">
                    Cybersecurity
                  </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-6 tracking-wide" style={{}}>
                Studio
              </h4>
<ul className="space-y-3 text-sm text-[#bdb8a3]/60" style={{}}>
<li className="">
<a className="transition-colors block hover:text-amber-600" href="#" style={{}}>
                    About Us
                  </a>
</li>
<li className="">
<a className="transition-colors block hover:text-amber-600" href="#" style={{}}>
                    Our Team
                  </a>
</li>
<li className="">
<a className="transition-colors block hover:text-amber-600" href="#" style={{}}>
                    Careers
                  </a>
</li>
<li className="">
<a className="transition-colors block hover:text-amber-600" href="#" style={{}}>
                    Awards &amp; Honors
                  </a>
</li>
<li className="">
<a className="transition-colors block hover:text-amber-600" href="#" style={{}}>
                    Press Kit
                  </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-6 tracking-wide" style={{}}>
                Connect
              </h4>
<ul className="space-y-3 text-sm text-[#bdb8a3]/60" style={{}}>
<li>
<a className="transition-colors flex items-center gap-2 hover:text-amber-600" href="#" style={{}}>
<svg className="lucide lucide-instagram" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
                    Instagram
                  </a>
</li>
<li>
<a className="transition-colors flex items-center gap-2 hover:text-amber-600" href="#" style={{}}>
<svg className="lucide lucide-twitter" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
                    Twitter
                  </a>
</li>
<li>
<a className="transition-colors flex items-center gap-2 hover:text-amber-600" href="#" style={{}}>
<svg className="lucide lucide-linkedin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
                    LinkedIn
                  </a>
</li>
<li>
<a className="transition-colors flex items-center gap-2 hover:text-amber-600" href="#" style={{}}>
<svg className="lucide lucide-mail" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
</svg>
                    Contact Us
                  </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto" style={{}}>
<p className="text-xs text-amber-100/40" style={{}}>
              © 2024 VijuIT Solutions. All rights reserved.
            </p>
<div className="flex items-center gap-6 text-xs text-amber-100/40" style={{}}>
<a className="hover:text-white transition-colors" href="#" style={{}}>
                Privacy Policy
              </a>
<a className="hover:text-white transition-colors" href="#" style={{}}>
                Terms of Service
              </a>
<a className="hover:text-white transition-colors" href="#" style={{}}>
                Cookies Settings
              </a>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}

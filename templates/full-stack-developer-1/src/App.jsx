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



      // Initialize Icons
      lucide.createIcons();

      // Staggered Text Animation
      document.addEventListener('DOMContentLoaded', () => {
          const elements = document.querySelectorAll('.animate-title');

          elements.forEach(el => {
              // We process text nodes to wrap characters
              const text = el.innerText;
              el.innerHTML = '';

              [...text].forEach((char, index) => {
                  const span = document.createElement('span');
                  span.textContent = char === ' ' ? '\u00A0' : char;
                  span.className = 'char-animate';
                  span.style.animationDelay = `${index * 60}ms`;
                  el.appendChild(span);
              });
          });

          // Simple 3D Tilt Logic for Cards
          const cards = document.querySelectorAll('.tilt-card');

          cards.forEach(card => {
              card.addEventListener('mousemove', (e) => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  const rotateX = ((y - centerY) / centerY) * -5; // Max -5deg to 5deg
                  const rotateY = ((x - centerX) / centerX) * 5;

                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              });

              card.addEventListener('mouseleave', () => {
                  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
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
      

<div className="fixed inset-0 scanlines pointer-events-none h-screen w-screen"></div>

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute w-full h-full bg-void opacity-60"></div>
<div className="stars opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="font-brand tracking-widest text-lg text-white hover:text-cyan-400 transition-colors duration-300" href="#">
          CM
          <span className="text-cyan-500 text-xs align-top">NY</span>
</a>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase">
<a className="hover:text-cyan-400 transition-colors" href="#process">
            Process
          </a>
<a className="hover:text-cyan-400 transition-colors" href="#work">Work</a>
<a className="hover:text-cyan-400 transition-colors" href="#contact">
            Contact
          </a>
</div>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0 opacity-20">
<img alt="Code Background" className="w-full h-full object-cover filter grayscale contrast-125" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]"></div>
</div>

<div className="absolute top-1/4 left-10 opacity-20 animate-float" style={{animationDelay: '0s'}}>
<i className="w-24 h-24 text-cyan-500" data-lucide="box"></i>
</div>
<div className="absolute bottom-1/3 right-20 opacity-20 animate-float" style={{animationDelay: '2s'}}>
<i className="w-16 h-16 text-cyan-500" data-lucide="cpu"></i>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
<div className="lg:col-span-8">
<h2 className="text-cyan-400 tracking-[0.2em] text-xs uppercase mb-4 animate-title">
            Architecting Digital Luxury
          </h2>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-[0.9] mb-6 mix-blend-screen animate-title">
            CHAD
            <br/>
            MOSCHINO
          </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light tracking-wide animate-title border-l-2 border-cyan-500 pl-6">
            Full-stack partner for founders, small business owners, and teams
            who need modern, fast websites that are easy to manage and actually
            help close more customers.
          </p>
<div className="mt-12 flex items-center gap-6 animate-title">
<div className="flex gap-4">
<div className="p-2 border border-white/10 rounded bg-black/50 backdrop-blur hover:border-cyan-500/50 transition-colors">
<i className="w-5 h-5 text-cyan-400" data-lucide="code-2"></i>
</div>
<div className="p-2 border border-white/10 rounded bg-black/50 backdrop-blur hover:border-cyan-500/50 transition-colors">
<i className="w-5 h-5 text-cyan-400" data-lucide="server"></i>
</div>
<div className="p-2 border border-white/10 rounded bg-black/50 backdrop-blur hover:border-cyan-500/50 transition-colors">
<i className="w-5 h-5 text-cyan-400" data-lucide="layers"></i>
</div>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-4 relative">
<div className="relative w-full aspect-square bg-black/40 backdrop-blur-xl border border-white/5 rounded-full p-8 flex items-center justify-center">

<div className="absolute inset-0 border border-cyan-500/10 rounded-full scale-75"></div>
<div className="absolute inset-0 border border-cyan-500/5 rounded-full scale-50"></div>

<svg className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]" viewbox="0 0 100 100">
<polygon className="radar-path" fill="rgba(6,182,212,0.1)" points="50,10 90,35 80,80 20,80 10,35" stroke="rgba(6,182,212,0.8)" strokeWidth="0.5"></polygon>
<circle cx="50" cy="10" fill="#fff" r="1.5"></circle>
<circle cx="90" cy="35" fill="#fff" r="1.5"></circle>
<circle cx="80" cy="80" fill="#fff" r="1.5"></circle>
<circle cx="20" cy="80" fill="#fff" r="1.5"></circle>
<circle cx="10" cy="35" fill="#fff" r="1.5"></circle>

<text className="uppercase tracking-widest font-semibold" fill="#94a3b8" fontSize="3" text-anchor="middle" x="50" y="5">
                Frontend
              </text>
<text className="uppercase tracking-widest font-semibold" fill="#94a3b8" fontSize="3" text-anchor="start" x="95" y="35">
                Backend
              </text>
<text className="uppercase tracking-widest font-semibold" fill="#94a3b8" fontSize="3" text-anchor="start" x="85" y="88">
                DevOps
              </text>
<text className="uppercase tracking-widest font-semibold" fill="#94a3b8" fontSize="3" text-anchor="end" x="15" y="88">
                Design
              </text>
<text className="uppercase tracking-widest font-semibold" fill="#94a3b8" fontSize="3" text-anchor="end" x="5" y="35">
                Strategy
              </text>
</svg>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
<i className="w-4 h-4 text-cyan-400" data-lucide="chevron-down"></i>
</div>
</header>

<section className="relative z-10 border-y border-white/5 bg-black/40">
<div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-10 overflow-hidden">
<div className="flex items-center gap-3 shrink-0">
<span className="text-[0.6rem] uppercase tracking-[0.3em] text-cyan-400">
            Tech Stack
          </span>
<div className="h-px w-12 bg-gradient-to-r from-cyan-500/60 to-transparent"></div>
</div>
<div className="relative w-full overflow-hidden">
<div className="flex gap-10 items-center whitespace-nowrap animate-[marquee_28s_linear_infinite] text-slate-300/80 text-sm md:text-base">
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="layout-template"></i>
<span>React</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="box"></i>
<span>Next.js</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="code-2"></i>
<span>TypeScript</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="layers"></i>
<span>Tailwind</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="server"></i>
<span>Node.js</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="database"></i>
<span>Postgres</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="cloud"></i>
<span>AWS</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="sparkles"></i>
<span>Framer Motion</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="shield-check"></i>
<span>Auth</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="chart-line"></i>
<span>Analytics</span>
</div>

<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="layout-template"></i>
<span>React</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="box"></i>
<span>Next.js</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="code-2"></i>
<span>TypeScript</span>
</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
<i className="w-5 h-5 text-cyan-400" data-lucide="layers"></i>
<span>Tailwind</span>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 relative z-10" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
<h3 className="text-4xl font-light text-white tracking-tight">
            The Methodology, Built Around You
          </h3>
<span className="text-cyan-500 font-mono text-xs">01 // PROCESS</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -translate-y-1/2 z-0"></div>

<div className="tilt-card group relative z-10 p-1">
<div className="glass-panel h-full p-8 rounded-xl relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/50 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h4 className="text-xl font-medium text-white mb-2">
                Ideate &amp; Strategy
              </h4>
<p className="text-sm text-slate-400 leading-relaxed">
                We start with your goals—not the tech. From a local shop to a
                funded startup, we map out what success looks like, then turn it
                into a clear plan and simple, visual blueprints.
              </p>
</div>
</div>

<div className="tilt-card group relative z-10 p-1">
<div className="glass-panel h-full p-8 rounded-xl relative overflow-hidden border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-cyan-500/30 bg-black/50 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="hammer"></i>
</div>
<h4 className="text-xl font-medium text-white mb-2">
                Build &amp; Develop
              </h4>
<p className="text-sm text-slate-400 leading-relaxed">
                Writing clean, type-safe code. React/Next.js frontend married to
                scalable Node/Go backends. Zero technical debt.
              </p>
</div>
</div>

<div className="tilt-card group relative z-10 p-1">
<div className="glass-panel h-full p-8 rounded-xl relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/50 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="rocket"></i>
</div>
<h4 className="text-xl font-medium text-white mb-2">
                Scale &amp; Optimize
              </h4>
<p className="text-sm text-slate-400 leading-relaxed">
                Performance tuning, SEO optimization, and infrastructure scaling
                via Vercel/AWS. Ensuring sub-100ms loads globally.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative z-10" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
<h3 className="text-4xl font-light text-white tracking-tight">
            Selected Works
          </h3>
<span className="text-cyan-500 font-mono text-xs">02 // PORTFOLIO</span>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

<div className="group break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-20 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl"></div>
<img alt="Project 1" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-30">
<div className="flex justify-between items-end">
<div>
<h4 className="text-white font-medium text-lg">
                    FinTech Dashboard
                  </h4>
<p className="text-xs text-cyan-400 font-mono mt-1">
                    NEXT.JS / TYPESCRIPT / TAILWIND
                  </p>
</div>
<i className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-20 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl"></div>
<img alt="Project 2" className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-30">
<div className="flex justify-between items-end">
<div>
<h4 className="text-white font-medium text-lg">Luxe Commerce</h4>
<p className="text-xs text-cyan-400 font-mono mt-1">
                    SHOPIFY HEADLESS / GRAPHQL
                  </p>
</div>
<i className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-20 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl"></div>
<img alt="Project 3" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-30">
<div className="flex justify-between items-end">
<div>
<h4 className="text-white font-medium text-lg">
                    AI SaaS Platform
                  </h4>
<p className="text-xs text-cyan-400 font-mono mt-1">
                    REACT / PYTHON / OPENAI
                  </p>
</div>
<i className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-20 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl"></div>
<img alt="Project 4" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-30">
<div className="flex justify-between items-end">
<div>
<h4 className="text-white font-medium text-lg">
                    Crypto Exchange
                  </h4>
<p className="text-xs text-cyan-400 font-mono mt-1">
                    WEB3 / SOLIDITY / VUE
                  </p>
</div>
<i className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-20 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl"></div>
<img alt="Project 5" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-30">
<div className="flex justify-between items-end">
<div>
<h4 className="text-white font-medium text-lg">
                    AR Architecture
                  </h4>
<p className="text-xs text-cyan-400 font-mono mt-1">
                    THREE.JS / WEBGL
                  </p>
</div>
<i className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-20 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl"></div>
<img alt="Project 6" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-30">
<div className="flex justify-between items-end">
<div>
<h4 className="text-white font-medium text-lg">Neural Net Viz</h4>
<p className="text-xs text-cyan-400 font-mono mt-1">
                    D3.JS / TENSORFLOW
                  </p>
</div>
<i className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="contact">

<div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="mb-6 flex flex-wrap items-center gap-6">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 fill-yellow-400" data-lucide="star"></i>
</div>
<span className="text-xs uppercase tracking-[0.25em] text-slate-400">
                20+ Client Reviews
              </span>
</div>
<div className="flex flex-wrap gap-3 text-[0.65rem] tracking-[0.2em] uppercase text-slate-400">
<div className="flex items-center gap-1 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/5">
<i className="w-3 h-3 text-emerald-400" data-lucide="shield-check"></i>
<span>Trusted by Startups</span>
</div>
<div className="flex items-center gap-1 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/5">
<i className="w-3 h-3 text-cyan-400" data-lucide="badge-check"></i>
<span>On-Time Delivery</span>
</div>
<div className="flex items-center gap-1 px-3 py-1 rounded-full border border-indigo-500/40 bg-indigo-500/5">
<i className="w-3 h-3 text-indigo-400" data-lucide="smile"></i>
<span>Plain-Language Updates</span>
</div>
</div>
</div>
<h3 className="text-6xl md:text-7xl font-semibold text-white tracking-tighter mb-6 leading-none">
            LET'S BUILD
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-600 animate-pulse">
              REVENUE
            </span>
</h3>
<p className="text-slate-400 mb-10 max-w-md font-light text-lg">
            Available for websites, product launches, and ongoing retainers.
            Clear pricing, weekly check-ins, and zero jargon—so you always know
            what’s done, what’s next, and how it helps your business.
          </p>
<div className="flex flex-col gap-4">
<a className="group flex items-center gap-4 text-xl text-white hover:text-cyan-400 transition-colors" href="mailto:chad@moschino.dev">
<div className="p-3 border border-white/10 rounded-full group-hover:border-cyan-400 transition-colors">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<span className="font-light tracking-wide">chad@moschino.dev</span>
</a>
<a className="group flex items-center gap-4 text-xl text-white hover:text-cyan-400 transition-colors" href="#">
<div className="p-3 border border-white/10 rounded-full group-hover:border-cyan-400 transition-colors">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<span className="font-light tracking-wide">SoHo, New York City</span>
</a>
</div>
</div>

<div className="relative perspective-1000">
<div className="glass-panel p-8 md:p-10 rounded-2xl border-cyan-500/20 transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
<h4 className="text-2xl font-light text-white mb-6 tracking-tight">
              Booking Inquiry
            </h4>
<form className="space-y-6">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2 text-xs text-slate-400">
<div className="flex text-yellow-400">
<i className="w-3 h-3 fill-yellow-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-yellow-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-yellow-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-yellow-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-yellow-400" data-lucide="star"></i>
</div>
<span className="uppercase tracking-[0.25em]">
                    Avg. rating from recent builds
                  </span>
</div>
<div className="hidden md:flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.2em] text-emerald-400">
<i className="w-3 h-3" data-lucide="sparkles"></i>
<span>Most projects launch in 4‑8 weeks</span>
</div>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-slate-500">
                  Name
                </label>
<input className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-slate-500">
                  Email
                </label>
<input className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-slate-500">
                  Project Details
                </label>
<textarea className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700" placeholder="Tell me about your vision..." rows="4"></textarea>
</div>
<button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-4 rounded font-medium tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]" type="button">
                Initiate Sequence
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8 relative z-20">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<h5 className="font-brand text-2xl text-white mb-2">CHAD MOSCHINO</h5>
<p className="text-slate-600 text-xs tracking-widest uppercase">
            © 2024 NYC. All Rights Reserved.
          </p>
</div>
<div className="flex gap-6">
<a className="group relative p-2 text-slate-400 hover:text-white transition-colors" href="#">
<div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="w-6 h-6 relative z-10" data-lucide="github"></i>
</a>
<a className="group relative p-2 text-slate-400 hover:text-white transition-colors" href="#">
<div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="w-6 h-6 relative z-10" data-lucide="linkedin"></i>
</a>
<a className="group relative p-2 text-slate-400 hover:text-white transition-colors" href="#">
<div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="w-6 h-6 relative z-10" data-lucide="twitter"></i>
</a>
</div>
</div>
</footer>



    </>
  );
}

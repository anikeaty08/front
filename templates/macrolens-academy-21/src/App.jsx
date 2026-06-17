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



      lucide.createIcons();

      // 3D Globe Initialization using Cobe
      import createGlobe from 'https://cdn.skypack.dev/cobe';

      const canvas = document.getElementById("cobe");

      let phi = 0;
      let width = 0;

      const onResize = () => canvas.width = canvas.offsetWidth * 2;
      window.addEventListener('resize', onResize);
      onResize();

      createGlobe(canvas, {
          devicePixelRatio: 2,
          width: 1000 * 2,
          height: 1000 * 2,
          phi: 0,
          theta: 0,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 12000,
          mapBrightness: 6,
          baseColor: [0.05, 0.05, 0.05], // Very Dark Neutral
          markerColor: [0.96, 0.62, 0.04], // Amber-500 approx
          glowColor: [0.2, 0.1, 0.02],
          markers: [
              { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
              { location: [40.7128, -74.0060], size: 0.03 }, // New York
              { location: [51.5074, -0.1278], size: 0.03 }, // London
              { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
              { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
              { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
              { location: [25.2048, 55.2708], size: 0.03 }, // Dubai
          ],
          onRender: (state) => {
              // Auto-rotate
              state.phi = phi;
              phi += 0.003;
              state.width = width * 2;
              state.height = width * 2;
          }
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
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
      

<svg className="hidden">
<defs>
<lineargradient id="logoGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#FDE68A"></stop>

<stop offset="50%" stop-color="#D97706"></stop>

<stop offset="100%" stop-color="#FDE68A"></stop>

</lineargradient>
<symbol id="logo-icon" viewbox="0 0 200 120">

<path d="M10,60 Q100,-10 190,60" fill="none" stroke="url(#logoGradient)" strokeLinecap="round" strokeWidth="8"></path>

<path d="M10,60 Q100,130 190,60" fill="none" stroke="url(#logoGradient)" strokeLinecap="round" strokeWidth="8"></path>

<g fill="url(#logoGradient)" transform="translate(35, 30) scale(0.65)">

<path d="M45.2,25.5 C42.1,23.8 38.5,25.1 36.8,28.2 C35.9,30.0 36.5,33.1 35.5,35.5 C32.5,42.5 40.5,50.5 42.5,55.5 C43.5,58.0 41.5,62.0 42.5,65.5 C43.5,69.0 48.5,75.0 49.5,72.0 C50.5,69.0 55.5,60.0 52.5,55.0 C49.5,50.0 55.5,45.0 58.5,42.0 C61.5,39.0 65.5,35.0 62.5,30.0 C59.5,25.0 48.3,27.2 45.2,25.5 Z"></path>

<path d="M90.5,20.0 C85.5,20.0 82.5,25.0 85.5,30.0 C88.5,35.0 85.5,40.0 88.5,45.0 C91.5,50.0 85.5,55.0 88.5,60.0 C91.5,65.0 95.5,70.0 98.5,65.0 C101.5,60.0 105.5,55.0 102.5,50.0 C99.5,45.0 105.5,40.0 102.5,35.0 C99.5,30.0 95.5,20.0 90.5,20.0 Z"></path>
<path d="M92.0,15.0 C90.0,15.0 88.0,18.0 89.0,20.0 C90.0,22.0 94.0,22.0 95.0,20.0 C96.0,18.0 94.0,15.0 92.0,15.0 Z"></path>


<path d="M115.5,25.0 C110.5,25.0 108.5,30.0 110.5,35.0 C112.5,40.0 115.5,42.0 118.5,40.0 C121.5,38.0 125.5,42.0 128.5,40.0 C131.5,38.0 135.5,35.0 132.5,30.0 C129.5,25.0 120.5,25.0 115.5,25.0 Z"></path>

<path d="M140.5,60.0 C138.5,60.0 136.5,63.0 138.5,65.0 C140.5,67.0 144.5,67.0 146.5,65.0 C148.5,63.0 146.5,60.0 144.5,60.0 L140.5,60.0 Z"></path>
</g>
</symbol>
</defs>
</svg>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-12 h-8 relative flex items-center justify-center">
<svg className="w-full h-full drop-shadow-[0_0_8px_rgba(245,158,11,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.6)] transition-all duration-300">
<use href="#logo-icon"></use>
</svg>
</div>
<span className="text-lg font-semibold tracking-tighter text-white group-hover:text-amber-100 transition-colors">
            MACROLENS
          </span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-amber-400 transition-colors" href="#about">
            About
          </a>
<a className="hover:text-amber-400 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-amber-400 transition-colors" href="#booking">
            Booking
          </a>
<a className="hover:text-amber-400 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:flex text-sm font-medium hover:text-white transition-colors" href="#">
            Log in
          </a>
<a className="bg-white text-black px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#booking">
            JOIN ACADEMY
          </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

<div className="absolute inset-0 z-0 flex items-center justify-center globe-fade-in pointer-events-auto">

<canvas className="aspect-square opacity-60 mix-blend-plus-lighter w-full max-w-[1000px]" height="2000" id="cobe" style={{width: '1000px', height: '1000px'}} width="2000"></canvas>
</div>
<div className="container mx-auto px-6 text-center z-10 fade-in-up pointer-events-none" style={{animationDelay: '0.1s'}}>
<div className="inline-flex pointer-events-auto gap-2 bg-neutral-900/80 border-neutral-800 border rounded-full mb-10 pt-1 pr-3 pb-1 pl-3 shadow-lg backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
<span className="text-xs font-semibold tracking-wide text-neutral-400">
            NEXT COHORT OPENING SOON
          </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05]">
          Global Economic
          <span className="text-gold-gradient font-serif italic pr-2">
            Identity
          </span>
          &amp; Vision
        </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Macrolens Academy bridges the gap between academic theory and
          real-world economic application. Master the macro perspective.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 pointer-events-auto">
<a className="group relative px-8 py-3.5 bg-white text-black rounded-full font-semibold tracking-tight overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#booking">
<div className="absolute inset-0 w-full h-full bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 flex items-center gap-2">
              Book a Session
              <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[2px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<a className="px-8 py-3.5 text-neutral-300 border border-neutral-800 rounded-full font-medium tracking-tight hover:bg-neutral-900 hover:text-white hover:border-neutral-700 transition-all bg-black/30 backdrop-blur-sm" href="#about">
            Explore Curriculum
          </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-neutral-600 z-20">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</section>

<div className="border-y border-neutral-900 bg-neutral-950/50 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<span className="text-xs font-bold tracking-[0.2em] text-neutral-700 uppercase">
          Framework Inspired By
        </span>

<div className="text-lg font-bold tracking-tighter text-neutral-400">
          VIRYA ENERGY
        </div>
<div className="text-lg font-bold tracking-tighter text-neutral-400">
          MONT FORT
        </div>
<div className="text-lg font-bold tracking-tighter text-neutral-400">
          CIRCLE
        </div>
<div className="text-lg font-bold tracking-tighter text-neutral-400">
          CALENDLY
        </div>
</div>
</div>

<section className="py-24 md:py-32 relative z-20 bg-neutral-950" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-16 uppercase tracking-wider">
<span className="text-amber-500">About Us</span>
<span className="text-neutral-700">/</span>
<span>Mission &amp; Vision</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
<div className="fade-in-up">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
              Redefining
              <span className="text-neutral-600">financial education</span>
              through a macro lens.
            </h2>
<div className="space-y-6 text-neutral-400 leading-relaxed text-lg font-light">
<p>
                In a world of noise, clarity is the most valuable asset.
                Macrolens Academy provides a rigorous, data-driven environment
                for understanding global markets.
              </p>
<p>
                Our methodology combines historical analysis with
                forward-looking economic indicators, empowering members to
                navigate complexity with confidence. We don't just teach you
                what to think; we teach you how to see.
              </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
<div>
<div className="text-4xl font-light text-amber-500/90 mb-2">
                  50+
                </div>
<div className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">
                  Countries Analyzed
                </div>
</div>
<div>
<div className="text-4xl font-light text-amber-500/90 mb-2">
                  24/7
                </div>
<div className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">
                  Market Access
                </div>
</div>
</div>
</div>
<div className="relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-amber-900/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
<div className="flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] bg-neutral-900/80 h-[450px] border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md justify-between">
<div className="absolute top-0 right-0 p-4 opacity-5">
<svg className="w-[256px] h-[256px]" strokeWidth="2" style={{color: 'rgb(212, 212, 212)', width: '256px', height: '256px'}} viewbox="0 0 200 120">
<use href="#logo-icon"></use>
</svg>
</div>
<div className="z-10">
<div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                  Strategic Insight
                </h3>
<p className="text-neutral-500 text-sm max-w-xs">
                  Beyond technical analysis lies the fundamental truth of
                  macroeconomics.
                </p>
</div>
<div className="flex w-full h-32 mt-8 pr-2 pl-2 gap-x-3 gap-y-3 items-end">
<div className="w-full bg-neutral-800/50 h-[40%] rounded-t-sm hover:bg-amber-600/40 transition-all duration-300"></div>
<div className="hover:bg-amber-600/50 transition-all duration-300 delay-75 bg-neutral-800/50 w-full h-[60%] rounded-t-sm"></div>
<div className="w-full bg-neutral-800/50 h-[30%] rounded-t-sm hover:bg-amber-600/40 transition-all duration-300 delay-100"></div>
<div className="w-full bg-neutral-800/50 h-[80%] rounded-t-sm hover:bg-amber-600/60 transition-all duration-300 delay-150"></div>
<div className="w-full bg-gradient-to-t from-amber-600 to-amber-400 h-[95%] rounded-t-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] relative group-hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300"></div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
<div className="p-8 border border-white/5 bg-neutral-900/30 rounded-2xl hover:bg-neutral-900/50 transition duration-300 group">
<div className="text-amber-500 mb-6 bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<h3 className="text-white text-xl font-medium mb-3">Precision</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              We filter out the noise to focus on the signals that actually move
              markets, providing clarity in chaos.
            </p>
</div>
<div className="p-8 border border-white/5 bg-neutral-900/30 rounded-2xl hover:bg-neutral-900/50 transition duration-300 group">
<div className="text-amber-500 mb-6 bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<h3 className="text-white text-xl font-medium mb-3">Perspective</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              Understanding local events through their global ripple effects. We
              connect the dots others miss.
            </p>
</div>
<div className="p-8 border border-white/5 bg-neutral-900/30 rounded-2xl hover:bg-neutral-900/50 transition duration-300 group">
<div className="text-amber-500 mb-6 bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-white text-xl font-medium mb-3">Community</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              Growth happens faster when you learn alongside driven peers. Join
              a network of serious analysts.
            </p>
</div>
</div>
<div className="border-t border-white/5 pt-24">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
<div>
<span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3 block">
                Leadership
              </span>
<h3 className="text-3xl font-medium text-white">Meet the Mentors</h3>
</div>
<a className="text-neutral-400 text-sm hover:text-white mt-4 md:mt-0 flex items-center gap-2 group" href="#">
              View full team
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
<div className="group">
<div className="bg-neutral-900 rounded-lg aspect-[4/5] mb-4 overflow-hidden relative border border-white/5">
<img alt="Mentor" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-3 justify-center">
<span className="text-white hover:text-amber-400 cursor-pointer">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</span>
<span className="text-white hover:text-amber-400 cursor-pointer">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</span>
</div>
</div>
</div>
<h4 className="text-white font-medium text-lg">David Chen</h4>
<p className="text-neutral-500 text-xs uppercase tracking-wide">
                Chief Economist
              </p>
</div>
<div className="group">
<div className="bg-neutral-900 rounded-lg aspect-[4/5] mb-4 overflow-hidden relative border border-white/5">
<img alt="Mentor" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-3 justify-center">
<span className="text-white hover:text-amber-400 cursor-pointer">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</span>
</div>
</div>
</div>
<h4 className="text-white font-medium text-lg">Elena Rodriguez</h4>
<p className="text-neutral-500 text-xs uppercase tracking-wide">
                Macro Strategist
              </p>
</div>
<div className="group">
<div className="bg-neutral-900 rounded-lg aspect-[4/5] mb-4 overflow-hidden relative border border-white/5">
<img alt="Mentor" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-3 justify-center">
<span className="text-white hover:text-amber-400 cursor-pointer">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</span>
</div>
</div>
</div>
<h4 className="text-white font-medium text-lg">Marcus Thorne</h4>
<p className="text-neutral-500 text-xs uppercase tracking-wide">
                Forex Analyst
              </p>
</div>
<div className="group">
<div className="bg-neutral-900 rounded-lg aspect-[4/5] mb-4 overflow-hidden relative border border-white/5">
<img alt="Mentor" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-3 justify-center">
<span className="text-white hover:text-amber-400 cursor-pointer">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</span>
</div>
</div>
</div>
<h4 className="text-white font-medium text-lg">Sarah Jenkins</h4>
<p className="text-neutral-500 text-xs uppercase tracking-wide">
                Risk Management
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5 relative z-20" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:flex md:items-end md:justify-between border-b border-white/5 pb-10">
<div>
<span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3 block">
              Our Expertise
            </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              Academy Offerings
            </h2>
</div>
<p className="mt-6 md:mt-0 text-neutral-400 max-w-md text-sm leading-relaxed">
            Comprehensive tools and mentorship designed to elevate your
            understanding of the global economy through the Macrolens framework.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/60 hover:border-amber-500/20 transition duration-500">
<div className="w-12 h-12 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<svg className="lucide lucide-book-open w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7v14"></path>
<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              Core Curriculum
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 h-10">
              Structured learning paths covering monetary policy, fiscal
              dynamics, and geopolitical influences.
            </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Video Modules
              </li>
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Case Studies
              </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/60 hover:border-amber-500/20 transition duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/5 to-transparent blur-3xl rounded-bl-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              Community &amp; Mentorship
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 h-10">
              Direct access to mentors and a network of like-minded analysts via
              our Circle integration.
            </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Weekly Live Calls
              </li>
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Peer Review
              </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/60 hover:border-amber-500/20 transition duration-500">
<div className="w-12 h-12 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21v-6"></path>
<path d="M12 21V3"></path>
<path d="M19 21V9"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              Market Analysis
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 h-10">
              Real-time data interpretation and proprietary reports on global
              economic shifts.
            </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Daily Briefs
              </li>
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Trend Forecasting
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden bg-[#050505] z-20">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
          Member Perspectives
        </h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300">
<div className="flex gap-1 text-amber-500 mb-5">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-neutral-300 text-sm mb-8 leading-relaxed font-light">
            "The macro perspective taught here completely changed how I manage
            my portfolio. The clarity on global economics is unmatched."
          </p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
              JD
            </div>
<div className="text-xs">
<div className="text-white font-medium">James D.</div>
<div className="text-neutral-500">Investment Analyst</div>
</div>
</div>
</div>

<div className="p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300">
<div className="flex gap-1 text-amber-500 mb-5">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-neutral-300 text-sm mb-8 leading-relaxed font-light">
            "A clean, no-nonsense approach to education. The community is
            professional and the insights are actionable immediately."
          </p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
              SA
            </div>
<div className="text-xs">
<div className="text-white font-medium">Sarah A.</div>
<div className="text-neutral-500">Entrepreneur</div>
</div>
</div>
</div>

<div className="p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300 hidden lg:block">
<div className="flex gap-1 text-amber-500 mb-5">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-neutral-300 text-sm mb-8 leading-relaxed font-light">
            "Finally, a place that connects the dots between diverse economic
            factors. Highly recommended for serious learners."
          </p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
              MK
            </div>
<div className="text-xs">
<div className="text-white font-medium">Michael K.</div>
<div className="text-neutral-500">Student</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-neutral-950 z-20" id="booking">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-neutral-950 to-neutral-950"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Ready to Master the Macro?
        </h2>
<p className="text-neutral-400 mb-12 text-lg max-w-xl mx-auto font-light">
          Join our Circle community or book a direct consultation to assess your
          learning path.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            Join Circle Community
          </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 text-white font-medium rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group">
<svg className="lucide lucide-calendar w-4 h-4 group-hover:text-amber-600 transition-colors" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
            Schedule Call via Calendly
          </button>
</div>
<div className="mt-8 text-xs text-neutral-600 uppercase tracking-widest font-semibold">
          Limited spots available for 1-on-1 mentorship
        </div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5 z-20 relative" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>
<div className="space-y-4">

<details className="group border-b border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4">
<span className="text-neutral-200 font-medium text-sm group-hover:text-amber-500 transition-colors">
                How is the content delivered?
              </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-2 leading-relaxed pb-4 px-2">
              Our content is delivered through a mix of pre-recorded video
              modules, live webinar sessions, and written reports available via
              our Circle platform.
            </div>
</details>

<details className="group border-b border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4">
<span className="text-neutral-200 font-medium text-sm group-hover:text-amber-500 transition-colors">
                Is this suitable for beginners?
              </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-2 leading-relaxed pb-4 px-2">
              Yes, we have a foundational track designed specifically for those
              new to macroeconomics, which builds up to more advanced concepts
              gradually.
            </div>
</details>

<details className="group border-b border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4">
<span className="text-neutral-200 font-medium text-sm group-hover:text-amber-500 transition-colors">
                What is the cancellation policy?
              </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-2 leading-relaxed pb-4 px-2">
              Subscriptions can be cancelled at any time via your account
              settings. Consultations require 24-hour notice for rescheduling.
            </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 z-20 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6 group" href="#">
<div className="w-8 h-6 relative flex items-center justify-center">
<svg className="w-full h-full text-neutral-400 group-hover:text-amber-400 transition-colors">
<use href="#logo-icon"></use>
</svg>
</div>
<span className="text-lg font-bold tracking-tighter text-white">
                MACROLENS
              </span>
</a>
<p className="text-neutral-500 text-sm max-w-sm mb-8 leading-relaxed">
              Empowering the next generation of economic thinkers with clarity,
              data, and vision. Navigate the noise with precision.
            </p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">
              Platform
            </h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-amber-500 transition-colors" href="#about">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="#services">
                  Services
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">
              Legal
            </h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-amber-500 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="#">
                  Terms of Service
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-neutral-600">
            © 2023 Macrolens Academy. All rights reserved.
          </div>
<div className="text-xs text-neutral-700 font-bold tracking-widest uppercase">
            Designed by WeAreBrand
          </div>
</div>
</div>
</footer>


    </>
  );
}

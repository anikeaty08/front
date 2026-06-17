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



      // 3D Tilt Logic for Hero Section
      const container = document.getElementById('hero-container');
      const card = document.getElementById('shoe-card');

      container.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // Calculate rotation based on cursor position relative to center
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg rotation
          const rotateY = ((x - centerX) / centerX) * 15;

          // Apply transform
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      container.addEventListener('mouseleave', () => {
          // Reset to default state
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      });

      // Add intersection observer for fade-in animations
      const observerOptions = {
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('opacity-100', 'translate-y-0');
                  entry.target.classList.remove('opacity-0', 'translate-y-10');
              }
          });
      }, observerOptions);

      // Select elements to animate
      document.querySelectorAll('section > div').forEach(el => {
          el.classList.add('transition-all', 'duration-1000', 'ease-out');
          // Initial state handled via CSS or class toggle if needed,
          // but for this demo, we keep it simple.
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
      
<div className="fixed inset-0 z-[-1] bg-[#050505]"></div>
<div className="fixed inset-0 z-[-1] pointer-events-none opacity-30">
<img alt="3D Background" className="w-full h-full object-cover mix-blend-screen filter grayscale contrast-150" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=2070"/>
</div>
<div className="fixed inset-0 z-[-1] bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-white/5 bg-neutral-950/80" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<svg aria-hidden="true" className="iconify group-hover:rotate-90 transition-transform duration-500 iconify--lucide text-lime-400" data-icon="lucide:hexagon" data-width="24" height="24" role="img" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-semibold text-lg tracking-tighter text-white">
            KINETIC
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400" style={{}}>
<a className="transition-colors hover:text-white" href="#">Products</a>
<a className="transition-colors hover:text-white" href="#">Technology</a>
<a className="transition-colors hover:text-white" href="#">Atelier</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 transition-colors relative text-neutral-400 hover:text-white" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide w-[20px] h-[20px]" data-icon="lucide:search" data-icon-replaced="true" data-width="20" height="20" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<button className="p-2 transition-colors relative text-neutral-400 hover:text-white" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute top-1 right-0 w-2 h-2 rounded-full animate-pulse bg-lime-400" style={{}}></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 ease-out" style={{}}></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 ease-out"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-1000 ease-out">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-500/20 bg-lime-500/5 text-xs font-medium tracking-wide uppercase text-lime-400" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-lime-400" style={{}}></span>
            V 2.0 Released
          </div>
<h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6 uppercase text-white">
            KINETIC
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-teal-500 from-lime-400 via-emerald-400" style={{}}>
              MODEL 3D
            </span>
</h1>
<p className="text-lg leading-relaxed max-w-md text-neutral-400" style={{}}>
            Engineered with aerospace-grade composites and reactive foam. The
            lightest, most responsive shoe we've ever built.
          </p>
<div className="flex items-center gap-4 pt-4">
<button className="px-8 py-3.5 font-medium text-sm rounded-lg transition-colors flex items-center gap-2 bg-white text-black hover:bg-neutral-200" style={{}}>
              Pre-order Now
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="px-8 py-3.5 border font-medium text-sm rounded-lg transition-colors border-neutral-800 text-white hover:bg-neutral-900" style={{}}>
              View Specs
            </button>
</div>

<div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-900" style={{}}>
<div>
<div className="text-2xl font-semibold tracking-tight text-white">
                182g
              </div>
<div className="text-xs text-neutral-500 uppercase tracking-wide mt-1" style={{}}>
                Weight
              </div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-white">
                98%
              </div>
<div className="text-xs text-neutral-500 uppercase tracking-wide mt-1" style={{}}>
                Energy Return
              </div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-white">
                0.02
              </div>
<div className="text-xs text-neutral-500 uppercase tracking-wide mt-1" style={{}}>
                Drag Coeff
              </div>
</div>
</div>
</div>

<div className="relative h-[600px] w-full flex items-center justify-center perspective-container" id="hero-container">

<div className="absolute inset-0 border rounded-3xl backdrop-blur-sm overflow-hidden border-white/10 bg-white/5">

<div className="absolute bottom-[-100px] left-[-50%] right-[-50%] h-[200%] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(1000px)_rotateX(70deg)] pointer-events-none opacity-50"></div>

<div className="absolute top-6 left-6 flex gap-4 text-[10px] font-mono text-lime-400" style={{}}>
<div className="border border-lime-500/30 px-2 py-1 rounded bg-lime-500/10" style={{}}>
                X: 42.091
              </div>
<div className="border border-lime-500/30 px-2 py-1 rounded bg-lime-500/10" style={{}}>
                Y: 12.004
              </div>
<div className="border border-lime-500/30 px-2 py-1 rounded bg-lime-500/10" style={{}}>
                Z: 00.182
              </div>
</div>
<div className="absolute top-6 right-6 flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_red]"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700" style={{}}></div>
<div className="w-2 h-2 rounded-full bg-neutral-700" style={{}}></div>
</div>
</div>

<div className="tilt-card flex w-full h-full relative items-center justify-center" id="shoe-card" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}}>
<div className="tilt-content relative z-20 group">
<div className="absolute inset-0 bg-lime-500/30 blur-[80px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700" style={{}}></div>
<img alt="Hero Shoe" className="relative w-[110%] max-w-3xl -rotate-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:-rotate-[15deg] group-hover:scale-105" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-[20%] right-[10%] w-32 group-hover:translate-x-4 transition-transform duration-500">
<div className="flex items-center gap-2 mb-2">
<div className="w-3 h-3 rounded-full animate-pulse shadow-[0_0_15px_#a3e635] bg-lime-400" style={{}}></div>
<div className="h-[1px] w-12 bg-lime-400/50" style={{}}></div>
</div>
<div className="border p-3 rounded-lg backdrop-blur-md bg-black/80 border-white/10">
<div className="text-xs font-bold mb-1 text-lime-400" style={{}}>
                    AIR FLOW
                  </div>
<div className="text-[10px] leading-tight text-neutral-400" style={{}}>
                    Dynamic intake valves.
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t pt-24 pb-24 relative bg-neutral-950 border-neutral-900" style={{}}>
<div className="max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out">
<div className="flex flex-col md:flex-row gap-6 mb-16 gap-x-6 gap-y-6 items-end justify-between">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">
              Technical Analysis
            </h2>
<p className="text-neutral-500" style={{}}>
              Exploded view of the kinetic propulsion system.
            </p>
</div>

<div className="flex items-center gap-3 p-1 rounded-lg border bg-neutral-900 border-neutral-800" style={{}}>
<button className="px-4 py-1.5 rounded-md text-xs font-medium shadow-sm bg-neutral-800 text-white" style={{}}>
              Render
            </button>
<button className="px-4 py-1.5 rounded-md text-neutral-500 text-xs font-medium transition-colors hover:text-white" style={{}}>
              Wireframe
            </button>
</div>
</div>
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl border overflow-hidden flex items-center justify-center bg-neutral-900/30 border-white/5" style={{}}>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.5'}}></div>

<div className="relative w-full max-w-2xl">
<img alt="Technical View" className="w-full relative z-10 drop-shadow-2xl grayscale contrast-125" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>

<svg className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-visible" preserveaspectratio="none" viewbox="0 0 800 500">

<path className="wireframe-line opacity-50" d="M 400 200 L 500 100 L 650 100" fill="none" stroke="#d9f99d" strokeWidth="1.5"></path>
<circle className="marker-dot" cx="400" cy="200" fill="#d9f99d" r="4"></circle>

<path className="wireframe-line opacity-50" d="M 350 350 L 250 420 L 100 420" fill="none" stroke="#d9f99d" strokeWidth="1.5" style={{animationDelay: '0.5s'}}></path>
<circle className="marker-dot" cx="350" cy="350" fill="#d9f99d" r="4" style={{animationDelay: '0.5s'}}></circle>
</svg>

<div className="absolute top-[10%] right-[5%] z-30 w-48 text-right">
<div className="text-xs font-mono mb-1 text-lime-400" style={{}}>01. UPPER</div>
<h4 className="font-medium text-sm text-white">Nano-Mesh Weave</h4>
<p className="text-neutral-500 text-xs mt-1" style={{}}>
                Breathable polymer structure with zero-seam construction.
              </p>
</div>
<div className="absolute bottom-[10%] left-[5%] z-30 w-48">
<div className="text-xs font-mono mb-1 text-lime-400" style={{}}>02. SOLE</div>
<h4 className="font-medium text-sm text-white">Carbon Plate</h4>
<p className="text-neutral-500 text-xs mt-1" style={{}}>
                Rigid propulsion plate embedded within nitrogen-infused foam.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" style={{}}>
<div className="max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out">
<div className="flex justify-between items-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white">
            Latest Models
          </h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-left" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-3xl overflow-hidden border hover:border-lime-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(132,204,22,0.15)] bg-neutral-900/40 border-white/5" style={{}}>
<div className="h-72 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-50"></div>
<img alt="Velocity X1" className="w-4/5 h-auto object-contain relative z-10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-12 group-hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 relative z-20 backdrop-blur-md border-t bg-neutral-950/50 border-white/5" style={{}}>
<div className="flex justify-between items-end">
<div>
<h3 className="text-lg font-bold group-hover:text-lime-400 transition-colors text-white" style={{}}>
                    Velocity X1
                  </h3>
<p className="text-xs text-neutral-500 uppercase" style={{}}>Track_V.1</p>
</div>
<div className="font-mono text-lime-400" style={{}}>$240</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden border hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] bg-neutral-900/40 border-white/5" style={{}}>
<div className="h-72 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-50"></div>
<img alt="Strato Glider" className="w-4/5 h-auto object-contain relative z-10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-12 group-hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 relative z-20 backdrop-blur-md border-t bg-neutral-950/50 border-white/5" style={{}}>
<div className="flex justify-between items-end">
<div>
<h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors text-white">
                    Strato Glider
                  </h3>
<p className="text-xs text-neutral-500 uppercase" style={{}}>Urban_V.2</p>
</div>
<div className="font-mono text-cyan-400">$180</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden border hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] bg-neutral-900/40 border-white/5" style={{}}>
<div className="h-72 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-50"></div>
<img alt="Quantum Leap" className="w-4/5 h-auto object-contain relative z-10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-12 group-hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&amp;w=2012&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 relative z-20 backdrop-blur-md border-t bg-neutral-950/50 border-white/5" style={{}}>
<div className="flex justify-between items-end">
<div>
<h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors text-white">
                    Quantum Leap
                  </h3>
<p className="text-xs text-neutral-500 uppercase" style={{}}>Sprint_V.3</p>
</div>
<div className="font-mono text-purple-400">$210</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t overflow-hidden relative border-neutral-900 bg-black" style={{}}>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 transition-all duration-1000 ease-out"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-1000 ease-out">
<div>
<h2 className="text-4xl font-medium tracking-tight mb-4 text-white">
            Your style.
            
            Your rules.
          </h2>
<p className="mb-8 max-w-sm text-neutral-400" style={{}}>
            Customize materials, colors, and traction patterns with our new 3D
            builder studio.
          </p>

<div className="space-y-6 max-w-xs">
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-wider font-medium text-neutral-400" style={{}}>
                Hue
              </div>
<input className="w-full" max="100" min="0" type="range" value="70"/>
</div>
<div>
<div className="flex justify-between text-xs mb-2 uppercase tracking-wider font-medium text-neutral-400" style={{}}>
                Saturation
              </div>
<input className="w-full" max="100" min="0" type="range" value="40"/>
</div>
</div>
<button className="mt-8 px-6 py-3 font-medium text-sm rounded-lg transition-colors bg-white text-black hover:bg-neutral-200" style={{}}>
            Launch Studio
          </button>
</div>
<div className="relative h-[400px] rounded-2xl border flex items-center justify-center perspective-container group bg-neutral-900 border-white/10" style={{}}>
<div className="absolute inset-0 bg-gradient-to-tr rounded-2xl from-lime-900/20 to-indigo-900/20" style={{}}></div>
<img alt="Custom Shoe" className="w-3/4 relative z-10 transition-all duration-700 filter hue-rotate-90 group-hover:hue-rotate-0 group-hover:scale-110 drop-shadow-2xl" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-neutral-950 border-neutral-900" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div>
<h3 className="font-medium mb-4 text-white">Shop</h3>
<ul className="space-y-3 text-sm text-neutral-500" style={{}}>
<li>
<a className="transition-colors hover:text-lime-400" href="#" style={{}}>
                  Running
                </a>
</li>
<li>
<a className="transition-colors hover:text-lime-400" href="#" style={{}}>
                  Lifestyle
                </a>
</li>
<li>
<a className="transition-colors hover:text-lime-400" href="#" style={{}}>
                  Limited Edition
                </a>
</li>
<li>
<a className="transition-colors hover:text-lime-400" href="#" style={{}}>
                  Accessories
                </a>
</li>
</ul>
</div>
<div>
<h3 className="font-medium mb-4 text-white">Company</h3>
<ul className="space-y-3 text-sm text-neutral-500" style={{}}>
<li>
<a className="transition-colors hover:text-lime-400" href="#" style={{}}>
                  About Us
                </a>
</li>
<li>
<a className="transition-colors hover:text-lime-400" href="#" style={{}}>
                  Sustainability
                </a>
</li>
<li>
<a className="transition-colors hover:text-lime-400" href="#" style={{}}>
                  Careers
                </a>
</li>
<li>
<a className="transition-colors hover:text-lime-400" href="#" style={{}}>
                  Press
                </a>
</li>
</ul>
</div>
<div>
<h3 className="font-medium mb-4 text-white">Support</h3>
<ul className="space-y-3 text-sm text-neutral-500" style={{}}>
<li>
<a className="transition-colors hover:text-lime-400" href="#" style={{}}>
                  Help Center
                </a>
</li>
<li>
<a className="transition-colors hover:text-lime-400" href="#" style={{}}>
                  Returns
                </a>
</li>
<li>
<a className="transition-colors hover:text-lime-400" href="#" style={{}}>
                  Order Status
                </a>
</li>
</ul>
</div>
<div>
<h3 className="font-medium mb-4 text-white">Join the movement</h3>
<p className="text-neutral-500 text-sm mb-4" style={{}}>
              Sign up for early access to drops.
            </p>
<div className="flex gap-2">
<input className="border text-sm rounded-md px-3 py-2 w-full focus:outline-none focus:border-lime-500 bg-neutral-900 border-neutral-800 text-white" placeholder="Email address" style={{}} type="email"/>
<button className="hover:bg-lime-500 px-3 py-2 rounded-md transition-colors bg-lime-400 text-black" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900" style={{}}>
<div className="flex items-center gap-2 mb-4 md:mb-0">
<svg aria-hidden="true" className="iconify iconify--lucide text-lime-400" data-icon="lucide:hexagon" data-width="20" height="20" role="img" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-semibold tracking-tighter text-white">
              KINETIC
            </span>
</div>
<div className="text-xs text-neutral-600" style={{}}>
            © 2024 Kinetic Footwear Inc. All rights reserved.
          </div>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-neutral-500 hover:text-white" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-neutral-500 hover:text-white" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-neutral-500 hover:text-white" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:youtube" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

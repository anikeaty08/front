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



        // Initialize Lucide Icons
        lucide.createIcons();

        function openDoor() {
            const door = document.getElementById('door');
            const light = document.getElementById('light-source');
            const overlay = document.getElementById('intro-overlay');
            const mainContent = document.getElementById('main-content');
            const hint = document.getElementById('hint-text');

            // 1. Hide hint immediately
            hint.style.opacity = '0';

            // 2. Open Door
            door.classList.add('door-open');
            
            // 3. Expand Light (Simulate stepping inside)
            // We use a small delay to let the door start moving first
            setTimeout(() => {
                light.classList.add('expand-light');
                light.style.backgroundColor = '#ffffff'; // Ensure it's pure white
            }, 200);

            // 4. Fade out overlay and reveal content
            setTimeout(() => {
                overlay.classList.add('fade-out');
                
                // Animate Main Content In
                mainContent.classList.remove('opacity-0', 'scale-95');
                mainContent.classList.add('opacity-100', 'scale-100');
                
                // Allow scrolling again
                document.body.classList.remove('intro-active');
            }, 1200);

            // 5. Cleanup overlay from DOM (optional, but good for performance)
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 2500);
        }

        // Show hint after a few seconds if no interaction
        setTimeout(() => {
            const hint = document.getElementById('hint-text');
            if(hint && !document.getElementById('door').classList.contains('door-open')) {
                hint.classList.remove('opacity-0');
            }
        }, 2000);
    
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
      

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 transition-opacity duration-1000 ease-in-out" id="intro-overlay">

<div className="absolute top-12 animate-fade-in transition-opacity duration-700">
<div className="flex items-center gap-2">

<svg fill="none" height="30" viewbox="0 0 120 30" width="120" xmlns="http://www.w3.org/2000/svg">
<path d="M10 5L15 15L20 5" stroke="#EAB308" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<text fill="white" fontFamily="sans-serif" fontSize="18" font-weight="500" letter-spacing="0.1em" x="30" y="20">VERTEX</text>
<path d="M105 10L100 15L105 20" stroke="#EAB308" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
</div>

<div className="scene relative flex items-center justify-center w-full h-full">


<div className="absolute z-0 w-32 h-64 bg-white rounded-lg opacity-40 blur-[60px] transition-all duration-[1500ms] ease-in-out" id="light-source"></div>

<div className="relative z-10 w-48 h-80 sm:w-64 sm:h-96 group cursor-pointer" onclick="openDoor()">

<div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-zinc-500 text-xs tracking-widest uppercase opacity-0 transition-opacity duration-700 delay-500 group-hover:opacity-100 whitespace-nowrap" id="hint-text">
                    Click to Enter
                </div>

<div className="absolute -inset-2 border-t-2 border-x-2 border-zinc-800 rounded-t-lg pointer-events-none"></div>

<div className="relative w-full h-full bg-zinc-900 border border-zinc-800 rounded-sm shadow-2xl origin-left transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] transform-style-3d overflow-hidden" id="door">

<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-zinc-950/80"></div>

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-950/50"></div>

<div className="absolute top-1/2 right-4 w-1 h-8 bg-zinc-700 rounded-full shadow-sm group-hover:bg-yellow-500/80 transition-colors duration-300"></div>

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
</div>

<div className="absolute -bottom-8 left-0 w-full h-4 bg-black/50 blur-lg rounded-[100%]"></div>
</div>
</div>
</div>


<div className="relative z-0 opacity-0 scale-95 transition-all duration-1000 ease-out min-h-screen flex flex-col" id="main-content">

<nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg fill="none" height="24" viewbox="0 0 120 30" width="100" xmlns="http://www.w3.org/2000/svg">
<path d="M10 5L15 15L20 5" stroke="#EAB308" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<text fill="#0f172a" fontFamily="sans-serif" fontSize="18" font-weight="600" letter-spacing="0.1em" x="30" y="20">VERTEX</text>
<path d="M105 10L100 15L105 20" stroke="#EAB308" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Buying</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Selling</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Remodeling</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Portfolio</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-slate-900 hover:opacity-70 transition-opacity hidden sm:block">Log in</button>
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10">
                        Get Started
                    </button>
</div>
</div>
</nav>

<main className="flex-grow">
<div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-medium border border-yellow-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
                            New properties available in Lisbon
                        </div>
<h1 className="text-5xl lg:text-7xl tracking-tight text-slate-900 font-medium leading-[1.1]">
                            Remodeling the <br/>
<span className="text-slate-400">future of living.</span>
</h1>
<p className="text-lg text-slate-600 max-w-md leading-relaxed">
                            Vertex acquires, transforms, and delivers premium turnkey homes. Experience the seamless transition from old to gold.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="group flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-[1.02]">
                                Browse Homes
                                <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
<button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                                Watch Showreel
                            </button>
</div>
<div className="pt-8 flex items-center gap-6 border-t border-slate-100">
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight text-slate-900">150+</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Projects</span>
</div>
<div className="w-px h-10 bg-slate-200"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight text-slate-900">€45M</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Volume</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] w-full">
<div className="absolute top-10 right-0 w-3/4 h-3/4 bg-slate-100 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
<img alt="Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-10 left-0 w-1/2 h-1/2 bg-white p-2 rounded-2xl shadow-xl">
<div className="w-full h-full rounded-xl overflow-hidden relative">
<img alt="Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-medium text-slate-900">
                                    Ready to move in
                                </div>
</div>
</div>
</div>
</div>
</div>

<div className="border-y border-slate-100 bg-slate-50/50">
<div className="max-w-6xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex gap-4 items-start">
<div className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-yellow-600">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Premium Locations</h3>
<p className="text-sm text-slate-500 leading-relaxed">Hand-picked properties in the most desirable neighborhoods.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-yellow-600">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Design Led</h3>
<p className="text-sm text-slate-500 leading-relaxed">Architecturally curated renovations with high-end finishes.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-yellow-600">
<i className="w-5 h-5" data-lucide="key"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Turnkey Service</h3>
<p className="text-sm text-slate-500 leading-relaxed">Fully furnished and equipped. Just bring your suitcase.</p>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="bg-white py-12 border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
<svg fill="none" height="20" viewbox="0 0 120 30" width="80" xmlns="http://www.w3.org/2000/svg">
<path d="M10 5L15 15L20 5" stroke="#EAB308" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<text fill="#0f172a" fontFamily="sans-serif" fontSize="18" font-weight="600" letter-spacing="0.1em" x="30" y="20">VERTEX</text>
<path d="M105 10L100 15L105 20" stroke="#EAB308" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<p className="text-xs text-slate-400">© 2024 Vertex Real Estate. All rights reserved.</p>
</div>
</footer>
</div>


    </>
  );
}

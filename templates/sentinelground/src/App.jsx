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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 pt-4 md:pt-8">

<div className="h-[calc(100vh-2rem)] md:h-[calc(100vh-4rem)] overflow-hidden flex flex-col md:p-6 bg-zinc-950 w-full max-w-[1400px] ring-white/10 ring-1 rounded-sm pt-3 pr-3 pb-3 pl-3 relative shadow-2xl justify-between">

<div className="absolute inset-0 z-0 bg-zinc-950">
<img alt="Dark futuristic city street" className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b825fcf6-4c5d-4723-a4f4-ef31aa00bbed_3840w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-zinc-950/80"></div>

<div className="[mask-image:linear-gradient(to_bottom,white,transparent)] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<header className="z-10 md:px-8 flex bg-black/40 w-full border-white/5 border rounded-sm pt-4 pr-5 pb-4 pl-5 relative backdrop-blur-md gap-x-2 gap-y-2 items-center justify-between">
<div className="md:text-2xl uppercase flex gap-2 text-xl font-medium text-white tracking-tighter gap-x-2 gap-y-2 items-center">
            SNETINELBGROUND
            <iconify-icon className="text-green-500" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<nav className="hidden md:flex items-center gap-10 lg:gap-16 text-sm font-normal text-zinc-500 tracking-wide uppercase">
<a className="hover:text-white transition-colors" href="#context">
              Context
            </a>
<a className="hover:text-white transition-colors" href="#infrastructure">
              Infrastructure
            </a>
<a className="hover:text-white transition-colors" href="#intelligence">
              Risk Index
            </a>
<a className="hover:text-white transition-colors" href="#impact">
              Impact
            </a>
</nav>
<div className="flex md:gap-6 gap-x-2 gap-y-2 items-center">

<div className="hidden md:flex items-center gap-2">
<span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">
                Auto-sync
              </span>
<button aria-checked="true" className="relative inline-flex h-4 w-7 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-green-500/20 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-green-500" role="switch" type="button">
<span aria-hidden="true" className="pointer-events-none inline-block h-3 w-3 translate-x-3 transform rounded-full bg-green-400 shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<button className="flex md:text-sm hover:bg-green-500/20 transition-colors uppercase focus:outline-none focus:ring-1 focus:ring-green-500 text-xs font-medium text-green-400 tracking-widest bg-green-500/10 border-green-500/20 border rounded-sm pt-2.5 pr-6 pb-2.5 pl-6 gap-x-2 gap-y-2 items-center">
              Live Data
              <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
</button>
</div>
</header>
<div className="md:mb-10 md:px-8 flex flex-col w-full z-10 mt-auto mb-6 pr-4 pl-4 relative gap-x-6 gap-y-6 items-start">
<div className="flex items-center gap-3 text-amber-500 border border-amber-500/20 bg-amber-500/10 px-4 py-2 rounded-sm text-xs font-medium tracking-widest uppercase mb-4">
<iconify-icon className="" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
            Lagos Public Infrastructure • 2036
          </div>
<h1 className="leading-none md:text-8xl lg:text-8xl text-6xl font-normal text-white tracking-tighter font-montserrat max-w-6xl">
            Sentinel Ground
          </h1>
<p className="text-xl font-light text-zinc-400 tracking-tight font-poppins max-w-3xl mt-4 md:text-xl">
            Sentinel Brick is a public infrastructure system for future e-waste
            communities, using biosensor bricks to detect heavy metal pollution
            and respond through visual alerts and remediation materials.
          </p>
</div>

</div>
</section>

<main className="md:px-8 flex flex-col md:gap-40 md:mt-24 w-full max-w-[1400px] mt-12 mr-auto ml-auto pr-4 pl-4 gap-x-24 gap-y-24">

<section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 border-t border-zinc-800 pt-12 md:pt-16" id="context">
<div className="lg:col-span-4 flex flex-col gap-4">
<span className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
            01 / Context
          </span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-white">
            Alaba Market Ground Zero
          </h2>
</div>
<div className="lg:col-span-8 flex flex-col gap-12">
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            By 2036, unregulated e-waste burning near Alaba International Market
            has saturated the local atmosphere and soil with dangerous levels of
            lead, mercury, and cadmium. The Toxic Pulse Network was deployed to
            track these invisible threats in real-time, mapping the systemic
            flow of pollutants across Lagos to protect vulnerable communities.
          </p>

<div className="relative w-full aspect-[16/9] bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity filter contrast-125 group-hover:opacity-50 transition-opacity bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7fc12d5-0e68-41a0-8ca8-1e9cb0b1f084_3840w.png?w=800&amp;q=80)]"></div>
<div className="bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex flex-col items-center gap-4 text-center">
<iconify-icon className="text-5xl text-amber-500" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-widest text-white uppercase">
                Pollution Spread Analysis
              </span>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-12 md:gap-16 border-t border-zinc-800 pt-12 md:pt-16" id="infrastructure">
<div className="flex flex-col gap-4">
<span className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
            02 / Infrastructure
          </span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-white">
            System Architecture
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<article className="flex flex-col gap-6 bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-sm hover:border-green-500/30 transition-colors group">
<div className="w-full aspect-square bg-black rounded-sm overflow-hidden relative">
<img alt="Sentinel Brick Environmental Sensor" className="group-hover:scale-105 transition-all duration-700 group-hover:opacity-100 bg-center opacity-50 w-full h-full object-contain invert-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60545303-aace-4be7-9e9f-a9dc70c51322_800w.png?w=800&amp;q=80"/>
</div>
<div className="">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-xl text-green-400" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tighter text-white">
                  Sentinel Brick
                </h3>
</div>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                Biosensor pavement bricks embedded directly into urban roads.
                These nodes constantly analyze soil seepage and airborne heavy
                metals.
              </p>
</div>
</article>

<article className="flex flex-col gap-6 bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-sm hover:border-amber-500/30 transition-colors group">
<div className="w-full aspect-square bg-black rounded-sm overflow-hidden relative flex items-center justify-center border border-zinc-800/50">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/10"></div>
<iconify-icon className="text-7xl text-amber-500/50 group-hover:text-amber-500 transition-colors" icon="solar:monitor-smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-xl text-amber-400" icon="solar:screencast-2-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tighter text-white">
                  Civic Terminal
                </h3>
</div>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                Public warning displays projecting localized toxicity data.
                Pedestrians receive real-time visual alerts before entering
                heavily polluted zones.
              </p>
</div>
</article>

<article className="flex flex-col gap-6 bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-sm hover:border-purple-500/30 transition-colors group">
<div className="w-full aspect-square bg-black rounded-sm overflow-hidden relative flex items-center justify-center border border-zinc-800/50">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/10"></div>
<iconify-icon className="text-7xl text-purple-500/50 group-hover:text-purple-500 transition-colors" icon="solar:shield-network-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-xl text-purple-400" icon="solar:server-square-update-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tighter text-white">
                  Response Platform
                </h3>
</div>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                A centralized governmental dashboard aggregating grid data to
                deploy emergency environmental cleanup teams to critical areas.
              </p>
</div>
</article>
</div>
</section>

<section className="flex flex-col gap-12 md:gap-16 border-t border-zinc-800 pt-12 md:pt-16" id="intelligence">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="flex flex-col gap-4">
<span className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
              03 / Intelligence System
            </span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-white">
              Color Warning Index
            </h2>
</div>
<p className="md:text-right text-sm text-zinc-500 max-w-xs">
            Standardized civic readouts broadcasted universally across all
            terminals.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<div className="bg-zinc-950 border border-zinc-800 p-6 flex flex-col gap-4 border-t-2 border-t-green-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-6xl text-green-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-green-500 font-medium tracking-widest text-xs uppercase">
              Level 1
            </span>
<h4 className="text-2xl font-normal tracking-tighter text-white">
              Safe
            </h4>
<p className="text-xs text-zinc-500 font-light">
              Trace metals detected within standard biological tolerance.
            </p>
</div>
<div className="bg-zinc-950 border border-zinc-800 p-6 flex flex-col gap-4 border-t-2 border-t-amber-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-6xl text-amber-500" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-amber-500 font-medium tracking-widest text-xs uppercase">
              Level 2
            </span>
<h4 className="text-2xl font-normal tracking-tighter text-white">
              Caution
            </h4>
<p className="text-xs text-zinc-500 font-light">
              Elevated particulate matter. Extended exposure not advised.
            </p>
</div>
<div className="bg-zinc-950 border border-zinc-800 p-6 flex flex-col gap-4 border-t-2 border-t-red-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-6xl text-red-500" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-red-500 font-medium tracking-widest text-xs uppercase">
              Level 3
            </span>
<h4 className="text-2xl font-normal tracking-tighter text-white">
              Dangerous
            </h4>
<p className="text-xs text-zinc-500 font-light">
              High concentration of airborne lead. Masks required.
            </p>
</div>
<div className="bg-zinc-950 border border-zinc-800 p-6 flex flex-col gap-4 border-t-2 border-t-purple-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-6xl text-purple-500" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-purple-500 font-medium tracking-widest text-xs uppercase">
              Level 4
            </span>
<h4 className="text-2xl font-normal tracking-tighter text-white">
              Emergency
            </h4>
<p className="text-xs text-zinc-500 font-light">
              Severe soil/air toxicity. Immediate evacuation routing active.
            </p>
</div>
</div>
</section>

<section className="relative w-full bg-green-500/5 border border-green-500/20 rounded-sm p-8 md:p-16 flex flex-col items-center text-center gap-8 mt-8" id="impact">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNzQsMjIyLDEyOCwwLjA1KSIvPjwvc3ZnPg==')]"></div>
<div className="relative z-10 flex flex-col items-center gap-6">
<span className="text-xs font-medium tracking-widest text-green-500 uppercase">
            04 / Civic Impact
          </span>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-white max-w-4xl leading-tight">
            Routing millions of residents to safety. Reducing long-term heavy
            metal exposure through intelligent design.
          </h2>
<div className="mt-4 flex items-center gap-4 text-sm font-medium tracking-widest text-zinc-400 uppercase">
<span>• Public Safety</span>
<span className="hidden md:block">Data Transparency</span>
<span>Systemic Remediation •</span>
</div>
</div>
</section>

<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Toxic Pulse Network - Civic Infrastructure</title>


<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet"/>
<style>
        body { font-family: 'Inter', sans-serif; }
      </style>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-ibm-mono" rel="stylesheet"/>
<style id="all-fonts-style-font-ibm-mono">
        .font-ibm-mono { font-family: 'IBM Plex Mono', monospace !important; }
      </style>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-poppins" rel="stylesheet"/>
<style id="all-fonts-style-font-poppins">
        .font-poppins { font-family: 'Poppins', sans-serif !important; }
      </style>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&amp;family=Space+Mono:wght@300;400;700&amp;display=swap" rel="stylesheet"/>
<style>
        .font-space { font-family: 'Space Mono', monospace; }
        .font-manrope { font-family: 'Manrope', sans-serif; }
        @keyframes blur-anim {
          0% { filter: blur(10px); }
          100% { filter: blur(0px); }
        }
        .blur-in-out {
          animation: blur-anim 1s ease-out 2 alternate-reverse forwards;
        }
      </style>
<div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" style={{backgroundSize: '40px 40px'}}></div>
<header className="flex bg-black/50 z-10 border-white/5 border-b pt-4 pr-6 pb-4 pl-6 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-green-500 text-[24px]" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
<h1 className="text-[20px] md:text-[24px] font-space font-light text-white tracking-tight">
            Live Pollution Data
          </h1>
</div>
<div className="flex items-center gap-4">
<span className="text-[12px] font-space text-green-400 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
            System Active
          </span>
</div>
</header>
<main className="flex-1 md:p-8 grid grid-cols-1 lg:grid-cols-12 w-full max-w-[1400px] z-10 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 items-start">
<div className="lg:col-span-4 flex flex-col gap-6">
<div className="bg-zinc-950/80 backdrop-blur-sm border border-amber-500/30 rounded-sm p-6 relative overflow-hidden flex flex-col gap-5 shadow-[0_0_20px_rgba(245,158,11,0.05)]">
<div className="absolute -top-4 -right-4 p-4 opacity-5">
<iconify-icon className="text-9xl text-amber-500" icon="solar:danger-triangle-bold"></iconify-icon>
</div>
<h2 className="text-[20px] font-space font-light text-zinc-400">
              Current Level
            </h2>
<div className="text-[32px] font-space font-light text-amber-500 leading-none">
              Level 3
            </div>
<div className="h-px w-full bg-gradient-to-r from-amber-500/50 to-transparent my-1"></div>
<div className="flex justify-between items-center">
<span className="text-[14px] text-zinc-500">Risk Status</span>
<span className="text-[14px] text-white">Moderate Pollution</span>
</div>
<div className="flex justify-between items-center">
<span className="text-[14px] text-zinc-500">Heavy Metal Index</span>
<span className="text-[14px] text-white">62%</span>
</div>
</div>
<div className="bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-sm p-6 flex flex-col gap-5">
<h2 className="text-[20px] font-space font-light text-white">
              Pollution Scale
            </h2>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-[12px]">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-zinc-500 font-space w-16">Level 1</span>
<span className="text-zinc-300">Safe</span>
</div>
<div className="flex items-center gap-3 text-[12px]">
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<span className="text-zinc-500 font-space w-16">Level 2</span>
<span className="text-zinc-300">Low</span>
</div>
<div className="flex items-center gap-3 text-[12px] bg-amber-500/10 py-1.5 px-3 -mx-3 rounded-sm border-l-2 border-amber-500">
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
<span className="text-amber-500 font-space w-14">Level 3</span>
<span className="text-amber-500 font-medium">Moderate</span>
</div>
<div className="flex items-center gap-3 text-[12px]">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-zinc-500 font-space w-16">Level 4</span>
<span className="text-zinc-300">High</span>
</div>
<div className="flex items-center gap-3 text-[12px]">
<div className="w-2 h-2 rounded-full bg-red-600"></div>
<span className="text-zinc-500 font-space w-16">Level 5</span>
<span className="text-zinc-300">Critical</span>
</div>
</div>
</div>
<div className="bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-sm p-6 flex flex-col gap-5">
<h2 className="text-[20px] font-space font-light text-white">
              Metal Concentrations
            </h2>
<div className="grid grid-cols-2 gap-3">
<div className="flex flex-col gap-1 p-3 bg-black/40 border border-white/5 rounded-sm">
<span className="text-[12px] text-zinc-500 font-space">Lead</span>
<span className="text-[14px] text-amber-500">Medium</span>
</div>
<div className="flex flex-col gap-1 p-3 bg-black/40 border border-white/5 rounded-sm">
<span className="text-[12px] text-zinc-500 font-space">
                  Cadmium
                </span>
<span className="text-[14px] text-yellow-400">Low</span>
</div>
<div className="flex flex-col gap-1 p-3 bg-black/40 border border-white/5 rounded-sm">
<span className="text-[12px] text-zinc-500 font-space">
                  Mercury
                </span>
<span className="text-[14px] text-amber-500">Moderate</span>
</div>
<div className="flex flex-col gap-1 p-3 bg-black/40 border border-white/5 rounded-sm">
<span className="text-[12px] text-zinc-500 font-space">Nickel</span>
<span className="text-[14px] text-orange-500">High</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-8 flex flex-col gap-6">
<div className="bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-sm p-2 flex flex-col relative h-[400px]">
<div className="absolute top-6 left-6 z-10 bg-black/80 backdrop-blur-md border border-white/5 p-4 rounded-sm flex flex-col gap-1">
<h2 className="text-[20px] font-space font-light text-white">
                Alaba International Market
              </h2>
<p className="text-[12px] text-zinc-500">Sensor Network Topography</p>
</div>
<div className="absolute bottom-6 left-6 z-10 flex items-center gap-4 text-[12px] text-zinc-500 bg-black/80 p-3 rounded-sm border border-white/5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
                Safe Node
              </div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
                Elevated Node
              </div>
</div>
<div className="w-full h-full bg-[#0a0a0a] rounded-sm relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ0PSIxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMjVoMTAwTTAgNTBoMTAwTTAgNzVoMTAwTTI1IDB2MTAwTTUwIDB2MTAwTTc1IDB2MTAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
<svg className="absolute inset-0 w-full h-full opacity-30" preserveaspectratio="none">
<path className="blur-xl opacity-20" d="M-50,200 Q150,150 250,300 T600,100" fill="none" stroke="#22c55e" strokeWidth="40"></path>
<path className="blur-xl opacity-10" d="M200,-50 Q250,150 400,200 T800,400" fill="none" stroke="#22c55e" strokeWidth="30"></path>
<path className="" d="M-50,200 Q150,150 250,300 T600,100" fill="none" stroke="#22c55e" strokeWidth="2"></path>
<path d="M200,-50 Q250,150 400,200 T800,400" fill="none" stroke="#22c55e" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
<div className="absolute top-[40%] left-[30%] flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_15px_#4ade80]"></div>
<div className="w-10 h-10 border border-green-500/50 rounded-full absolute animate-ping opacity-20"></div>
<span className="absolute left-5 text-[12px] font-space text-green-400 bg-black/60 px-1 rounded-sm">
                  N-01
                </span>
</div>
<div className="absolute top-[65%] left-[50%] flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-amber-400 rounded-full shadow-[0_0_15px_#fbbf24]"></div>
<div className="w-10 h-10 border border-amber-500/50 rounded-full absolute animate-ping opacity-20" style={{animationDelay: '0.5s'}}></div>
<span className="absolute left-5 text-[12px] font-space text-amber-400 bg-black/60 px-1 rounded-sm">
                  N-04
                </span>
</div>
<div className="absolute top-[25%] left-[55%] flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_15px_#4ade80]"></div>
<span className="absolute left-5 text-[12px] font-space text-green-400 bg-black/60 px-1 rounded-sm">
                  N-02
                </span>
</div>
<div className="absolute top-[55%] left-[75%] flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_15px_#4ade80]"></div>
<span className="absolute left-5 text-[12px] font-space text-green-400 bg-black/60 px-1 rounded-sm">
                  N-03
                </span>
</div>
<div className="absolute top-[80%] left-[25%] flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316]"></div>
<span className="absolute left-5 text-[12px] font-space text-orange-500 bg-black/60 px-1 rounded-sm">
                  N-05
                </span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-sm p-6 flex flex-col gap-5">
<div className="flex items-center justify-between">
<h2 className="text-[20px] font-space font-light text-white">
                  System Alerts
                </h2>
<iconify-icon className="text-zinc-500 text-xl" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-4 gap-x-4 gap-y-4">
<div className="flex gap-4 items-start relative before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-0 before:w-px before:bg-amber-500 pl-4">
<span className="text-[12px] text-zinc-500 font-space shrink-0 w-10">
                    10:42
                  </span>
<p className="text-[12px] text-zinc-300">
                    Sensor Brick 04: rising lead concentration
                  </p>
</div>
<div className="flex gap-4 items-start relative before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-0 before:w-px before:bg-green-500 pl-4">
<span className="text-[12px] text-zinc-500 font-space shrink-0 w-10">
                    09:15
                  </span>
<p className="text-[12px] text-zinc-300">
                    Green Strip B: moisture level stable
                  </p>
</div>
<div className="flex gap-4 items-start relative before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-0 before:w-px before:bg-zinc-600 pl-4">
<span className="text-[12px] text-zinc-500 font-space shrink-0 w-10">
                    08:00
                  </span>
<p className="text-[12px] text-zinc-300">
                    Maintenance check recommended in 48h
                  </p>
</div>
</div>
</div>
<div className="bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-sm p-6 flex flex-col gap-5">
<h2 className="text-[20px] font-space font-light text-white">
                Pollution Trend (72h)
              </h2>
<div className="flex-1 min-h-[140px] relative border-b border-l border-white/10 pt-2 pr-2">
<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgxMHYxMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDEwTTEwIDB2MTAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwxKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
<svg className="w-full h-full overflow-visible absolute inset-0" preserveaspectratio="none" viewbox="0 0 100 100">
<rect fill="#22c55e" height="30" opacity="0.05" width="100" x="0" y="70"></rect>
<line opacity="0.3" stroke="#22c55e" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="100" y1="70" y2="70"></line>
<line className="" opacity="0.3" stroke="#fbbf24" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="100" y1="40" y2="40"></line>
<polyline fill="none" points="0,80 15,75 30,60 45,65 60,40 75,35 90,45 100,30" stroke="#f59e0b" strokeWidth="1.5" vector-effect="non-scaling-stroke"></polyline>
</svg>
<div className="absolute bottom-2 right-2 flex flex-col items-end">
<span className="text-[10px] text-zinc-500 font-space">
                    Current
                  </span>
<span className="text-[12px] text-amber-500 font-space">
                    Level 3
                  </span>
</div>
</div>
</div>
</div>
</div>
</main>
<section className="flex flex-col gap-12 md:gap-16 border-t border-zinc-800 pt-12 md:pt-16 w-full relative z-10 mt-8 md:mt-16 bg-[#050505]" id="exploded-structure">
<div className="flex flex-col gap-4 relative z-10">
<span className="text-[12px] font-geist text-green-500 uppercase tracking-widest">
            05 / Architecture
          </span>
<h2 className="text-[24px] md:text-[32px] font-comfortaa font-light tracking-[0.1em] text-white uppercase">
            Exploded Structure
          </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-center pb-12">

<div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)]" style={{backgroundSize: '30px 30px'}}></div>

<div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[500px]">
<div className="relative w-[200px] h-[200px] flex items-center justify-center transform-style-3d mb-8" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute w-px h-[500px] border-l border-dashed border-green-500/50 z-0 top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>

<div className="absolute w-[200px] h-[200px] bg-zinc-300 border border-zinc-400 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 anim-layer-5 flex items-center justify-center">
<div className="absolute inset-2 border border-zinc-400/30"></div>
</div>

<div className="absolute w-[200px] h-[200px] bg-zinc-900 border border-green-500/80 rounded-sm z-20 anim-layer-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-center">
<div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEwLDBWMjBNMCwxMEgyMCIgc3Ryb2tlPSJyZ2JhKDM0LDE5Nyw5NCwwLjMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')]"></div>
</div>

<div className="absolute w-[200px] h-[200px] bg-zinc-800/80 backdrop-blur-md border border-white/20 rounded-sm z-30 anim-layer-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC44KSIvPjwvc3ZnPg==')] opacity-40"></div>
</div>

<div className="absolute w-[200px] h-[200px] bg-zinc-100 border border-white rounded-sm z-40 anim-layer-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0wLDBIODhWSDBaIiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-20"></div>
</div>

<div className="absolute w-[200px] h-[200px] bg-green-600/90 border border-green-400 rounded-sm z-50 anim-layer-1 shadow-[0_10px_40px_rgba(34,197,94,0.4)]">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxwYXRoIGQ9Ik0wLDBIMlYySDBaIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz48L3N2Zz4=')] opacity-50"></div>
</div>
</div>
<div className="bg-black/60 backdrop-blur-md border border-green-500/50 px-4 py-2 rounded-sm text-[12px] font-geist text-green-400 tracking-widest flex items-center gap-3 mt-8 z-10 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
<iconify-icon className="text-xl" icon="solar:routing-2-linear"></iconify-icon>
              RF COMMUNICATION FLOW
            </div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center gap-4 relative z-10">
<div className="hidden lg:block absolute left-[-2rem] top-8 bottom-8 w-px bg-green-500/20"></div>

<div className="flex items-start gap-4 group relative">
<div className="hidden lg:block absolute right-full top-6 w-8 h-px bg-green-500/50 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
<div className="w-8 h-8 mt-2 rounded-sm bg-green-500/10 border border-green-500/50 flex items-center justify-center text-[12px] font-geist text-green-400 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                1
              </div>
<div className="flex-1 bg-black/60 backdrop-blur-md border border-white/5 p-5 rounded-sm flex flex-col gap-2 hover:border-green-500/40 transition-colors">
<h3 className="text-[16px] md:text-[20px] font-comfortaa font-light tracking-[0.05em] text-white uppercase">
                  Living Moss Capture Layer
                </h3>
<ul className="text-[12px] md:text-[14px] font-geist text-zinc-400 font-light list-disc pl-4 flex flex-col gap-1 leading-relaxed">
<li>Captures airborne particles and e-waste pollutants</li>
<li>Accumulates heavy-metal deposition over time</li>
</ul>
</div>
</div>

<div className="flex items-start gap-4 group relative">
<div className="hidden lg:block absolute right-full top-6 w-8 h-px bg-green-500/30"></div>
<div className="w-8 h-8 mt-2 rounded-sm bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[12px] font-geist text-zinc-400 shrink-0">
                2
              </div>
<div className="flex-1 bg-black/60 backdrop-blur-md border border-white/5 p-5 rounded-sm flex flex-col gap-2 hover:border-zinc-500/50 transition-colors">
<h3 className="text-[16px] md:text-[20px] uppercase font-light text-white tracking-[0.05em] font-comfortaa">
                  Moisture &amp; Deposition Layer
                </h3>
<ul className="text-[12px] md:text-[14px] font-geist text-zinc-400 font-light list-disc pl-4 flex flex-col gap-1 leading-relaxed">
<li className="">Retains moisture for moss health</li>
<li className="">Helps trap and hold fine particulate matter</li>
</ul>
</div>
</div>

<div className="flex items-start gap-4 group relative">
<div className="hidden lg:block absolute right-full top-6 w-8 h-px bg-green-500/30"></div>
<div className="w-8 h-8 mt-2 rounded-sm bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[12px] font-geist text-zinc-400 shrink-0">
                3
              </div>
<div className="flex-1 bg-black/60 backdrop-blur-md border border-white/5 p-5 rounded-sm flex flex-col gap-2 hover:border-zinc-500/50 transition-colors">
<h3 className="text-[16px] md:text-[20px] uppercase font-light text-white tracking-[0.05em] font-comfortaa">Emberdded micro-XRF reading layer</h3>
<ul className="text-[12px] md:text-[14px] font-geist text-zinc-400 font-light list-disc pl-4 flex flex-col gap-1 leading-relaxed">
<li className="">Embedded sensor film detects heavy metal signals</li>
<li className="">
                    Identifies lead, cadmium, mercury, chromium, zinc, and
                    nickel
                  </li>
</ul>
</div>
</div>

<div className="flex items-start gap-4 group relative">
<div className="hidden lg:block absolute right-full top-6 w-8 h-px bg-green-500/50 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
<div className="w-8 h-8 mt-2 rounded-sm bg-green-500/10 border border-green-500/50 flex items-center justify-center text-[12px] font-geist text-green-400 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                4
              </div>
<div className="flex-1 bg-black/60 backdrop-blur-md border border-white/5 p-5 rounded-sm flex flex-col gap-2 hover:border-green-500/40 transition-colors">
<h3 className="text-[16px] md:text-[20px] uppercase font-light text-white tracking-[0.05em] font-comfortaa">
                  Hybrid Energy &amp; Data Layer
                </h3>
<ul className="text-[12px] md:text-[14px] font-geist text-zinc-400 font-light list-disc pl-4 flex flex-col gap-1 leading-relaxed">
<li className="">Harvests ambient light and radio-frequency energy</li>
<li className="">
                    Stores power in micro-supercapacitors and transmits data
                    wirelessly
                  </li>
</ul>
</div>
</div>

<div className="flex items-start gap-4 group relative">
<div className="hidden lg:block absolute right-full top-6 w-8 h-px bg-green-500/30"></div>
<div className="w-8 h-8 mt-2 rounded-sm bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[12px] font-geist text-zinc-400 shrink-0">
                5
              </div>
<div className="flex-1 bg-black/60 backdrop-blur-md border border-white/5 p-5 rounded-sm flex flex-col gap-2 hover:border-zinc-500/50 transition-colors">
<h3 className="text-[16px] md:text-[20px] uppercase font-light text-white tracking-[0.05em] font-comfortaa">
                  Porous Protective Brick Body
                </h3>
<ul className="text-[12px] md:text-[14px] font-geist text-zinc-400 font-light list-disc pl-4 flex flex-col gap-1 leading-relaxed">
<li>Supports moss growth</li>
<li className="">Protects internal layers</li>
</ul>
</div>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}

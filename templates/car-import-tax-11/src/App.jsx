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



        // Animate price count-up
        setTimeout(() => {
            try {
                const header = document.querySelector('[data-element-id="aura-emim935pc1u81rral"]');
                const priceContainer = header?.parentElement?.parentElement?.querySelector('.relative.rounded-2xl .text-4xl');
                
                if (priceContainer) {
                    // Create a cleaner layout for the price
                    priceContainer.style.fontVariantNumeric = 'tabular-nums';
                    
                    let start = 1200;
                    const target = 1450;
                    const duration = 2000;
                    const startTime = performance.now();
                    
                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
                        
                        const current = start + (target - start) * ease;
                        priceContainer.textContent = '€' + current.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
                        
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            // Add final glow effect on completion
                            priceContainer.style.textShadow = '0 0 20px rgba(96, 165, 250, 0.5)';
                            setTimeout(() => {
                                priceContainer.style.transition = 'text-shadow 1s ease';
                                priceContainer.style.textShadow = '0 0 15px rgba(96, 165, 250, 0.5)';
                            }, 100);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            } catch(e) { console.log('Animation error', e); }
        }, 100);
    


        // Initialize Icons
        lucide.createIcons();

        // Animate on Scroll Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0C]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-zap text-white w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight text-white">Carsys</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Log in</a>
<button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
                    Get Started
                </button>
</div>
</div>
</nav>

<main className="pt-24 pb-20 overflow-hidden relative">

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="grid lg:grid-cols-12 lg:gap-16 overflow-hidden lg:py-20 bg-center bg-[#050507] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86de63a3-3e60-4fdf-8ada-bbe78fc07a0b_1600w.jpg)] bg-cover pt-12 pb-12 relative gap-x-y-12 gap-y-12 items-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 90%, transparent)'}}>

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/10 rounded-full blur-[150px]"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-900/10 rounded-full blur-[150px]"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
</div>

<div className="lg:col-span-7 flex flex-col gap-8 relative z-10 pl-6 lg:pl-12">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 w-fit backdrop-blur-sm">
<span className="text-[10px] uppercase tracking-wider font-semibold text-indigo-400">Analysis</span>
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
<span className="text-xs text-zinc-400 font-medium">BMW M5 (2015) Import Tax Calculation</span>
</div>

<div className="space-y-4">
<h1 className="lg:text-7xl leading-[1.05] text-5xl font-semibold text-white tracking-tight">
                BMW M5 (2015)<br/>
                Import Tax &amp; PDF<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Report</span>
</h1>
<p className="text-base max-w-xl leading-relaxed font-light bg-gradient-to-br from-white/10 to-white/0 lg:text-lg lg:text-zinc-200">
                From the zero-to-everything M, the star is vast is plannin that tech has near to, technologiso, then is surprised.
            </p>
</div>

<div className="flex flex-wrap gap-4 items-center">
<button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] group">
<svg className="lucide lucide-scan-line w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
<span>100% Audit Record</span>
</button>
<button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121215] border border-white/5 hover:bg-[#1A1A20] text-zinc-300 font-medium text-sm transition-all">
<svg className="lucide lucide-clock w-4 h-4 text-zinc-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>Real-Time</span>
</button>
</div>

<div className="relative mt-12 lg:mt-16 group perspective-[1200px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>


<div className="relative z-10 transform transition-transform duration-700 hover:scale-[1.02] hover:-translate-y-2">
</div>

<div className="absolute -bottom-4 left-10 flex items-center gap-2 text-[10px] text-cyan-500/70 font-mono tracking-widest opacity-60">
<div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                SYSTEM READY
            </div>
<div className="absolute -bottom-4 right-10 flex items-center gap-2 text-[10px] text-indigo-500/70 font-mono tracking-widest opacity-60">
                SCANNING // ID-928
            </div>
</div>
</div>

<div className="lg:col-span-5 z-20 lg:pr-12 pr-6 relative">
<div className="lg:p-8 overflow-hidden bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0_60px_-20px_rgba(0,0,0,0.5)] backdrop-blur-2xl" style={{maskImage: 'linear-gradient(90deg, transparent, black 15%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 100%, transparent)'}}>

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
<div className="relative blur-none space-y-8">

<div className="">
<h3 className="text-xl font-medium text-white tracking-tight relative overflow-hidden">
    Instant AI Calculation
    <style>
        /* Animation Definitions */
        @keyframes aura-shimmer-border {
            0% { border-color: rgba(255, 255, 255, 0.05); }
            50% { border-color: rgba(99, 102, 241, 0.5); box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.1); }
            100% { border-color: rgba(255, 255, 255, 0.05); }
        }
        @keyframes aura-shimmer-bg {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
        @keyframes aura-price-pulse {
            0%, 100% { box-shadow: 0 0 20px -5px rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.2); transform: translateY(0); }
            50% { box-shadow: 0 0 30px -5px rgba(59, 130, 246, 0.3); border-color: rgba(59, 130, 246, 0.5); transform: translateY(-1px); }
        }
        @keyframes aura-scan-line {
            0% { transform: translateY(-100%) rotate(10deg); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateY(400%) rotate(10deg); opacity: 0; }
        }

        /* Target Sibling Inputs */
        div:has(> [data-element-id="aura-emim935pc1u81rral"]) ~ .space-y-5 input,
        div:has(> [data-element-id="aura-emim935pc1u81rral"]) ~ .space-y-5 select {
            background-image: linear-gradient(110deg, #18181B 30%, #27272a 45%, #18181B 60%);
            background-size: 200% 100%;
            animation: aura-shimmer-bg 4s linear infinite, aura-shimmer-border 3s ease-in-out infinite alternate;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        div:has(> [data-element-id="aura-emim935pc1u81rral"]) ~ .space-y-5 input:focus,
        div:has(> [data-element-id="aura-emim935pc1u81rral"]) ~ .space-y-5 select:focus {
            animation: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2), 0 0 15px rgba(99, 102, 241, 0.3);
            background-color: #121215;
            background-image: none;
        }

        /* Target Price Section */
        div:has(> [data-element-id="aura-emim935pc1u81rral"]) ~ .relative.rounded-2xl {
            animation: aura-price-pulse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            position: relative;
            overflow: hidden;
        }
        /* Laser Scan Effect on Price */
        div:has(> [data-element-id="aura-emim935pc1u81rral"]) ~ .relative.rounded-2xl::after {
            content: '';
            position: absolute;
            top: 0;
            left: -50%;
            width: 200%;
            height: 20px;
            background: linear-gradient(180deg, rgba(96, 165, 250, 0), rgba(96, 165, 250, 0.3) 50%, rgba(96, 165, 250, 0));
            filter: blur(4px);
            animation: aura-scan-line 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            pointer-events: none;
        }
    </style>

</h3>
<p className="text-xs font-medium text-zinc-400 mt-2">Standardized processing of import tax calculation.</p>
</div>

<div className="space-y-5">

<div className="space-y-2">
<label className="text-[11px] uppercase font-semibold text-zinc-300 tracking-wider">Vehicle Value</label>
<div className="relative group">
<input className="focus:outline-none focus:border-indigo-500/50 transition-colors placeholder-zinc-600 font-medium text-white bg-[#18181B] w-full border-white/5 border rounded-xl pt-3.5 pr-4 pb-3.5 pl-4" style={{backgroundImage: 'linear-gradient(110deg, #18181B 30%, #27272a 45%, #18181B 60%)', backgroundSize: '200% 100%', animation: 'aura-shimmer-bg 4s linear infinite, aura-shimmer-border 3s ease-in-out infinite alternate'}} type="text" value="€35,000"/>
</div>
</div>

<div className="space-y-2">
<label className="text-[11px] uppercase font-semibold text-zinc-300 tracking-wider">CO2 Emissions</label>
<div className="relative">
<select className="appearance-none cursor-pointer focus:outline-none focus:border-indigo-500/50 transition-colors font-medium text-white bg-[#18181B] w-full border-white/5 border rounded-xl pt-3.5 pr-4 pb-3.5 pl-4">
<option>231g/km</option>
<option>180g/km</option>
<option>150g/km</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-2">
<label className="text-[11px] uppercase font-semibold text-zinc-300 tracking-wider">Engine Power</label>
<div className="relative">
<select className="w-full bg-[#18181B] border border-white/5 rounded-xl py-3.5 px-4 text-white font-medium appearance-none cursor-pointer focus:outline-none focus:border-indigo-500/50 transition-colors">
<option>560hp</option>
<option>600hp</option>
<option>400hp</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-slate-900/80 border border-blue-500/20 rounded-2xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent opacity-50"></div>
<div className="text-center p-6 relative space-y-1 bg-blue-950/20 rounded-xl">
<p className="text-slate-400 text-sm font-medium">Estimated Tax:</p>
<div className="text-4xl font-semibold text-blue-400 tracking-tight drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">€1,450.00</div>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<svg className="lucide lucide-refresh-cw w-4 h-4 text-blue-400 animate-spin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</div>
</div>

<button className="w-full relative overflow-hidden rounded-xl group bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px]">
<div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 transition-opacity"></div>
<div className="relative bg-transparent px-6 py-4 flex items-center justify-center gap-2.5 text-white font-medium text-sm">
<svg className="lucide lucide-file-text w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a1 1 0 0 0 1 1h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="">Generate Official PDF Report</span>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="mt-32 space-y-12 reveal-on-scroll">
<div className="text-center space-y-2">
<h2 className="text-2xl font-medium text-white tracking-tight">Vehicle Specs &amp; Data</h2>
<div className="w-12 h-0.5 bg-indigo-500 mx-auto rounded-full"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-[#0f0f12] border border-white/5 p-6 rounded-xl hover:border-indigo-500/30 transition-all hover:bg-white/[0.02]">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-gauge w-5 h-5 text-indigo-400" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<p className="text-zinc-500 text-sm">Engine</p>
<p className="text-xl font-medium text-white mt-1">V8 Twin-Turbo</p>
</div>

<div className="group bg-[#0f0f12] border border-white/5 p-6 rounded-xl hover:border-indigo-500/30 transition-all hover:bg-white/[0.02]">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-timer w-5 h-5 text-purple-400" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<p className="text-zinc-500 text-sm">0-100 km/h</p>
<p className="text-xl font-medium text-white mt-1">4.4s</p>
</div>

<div className="group bg-[#0f0f12] border border-white/5 p-6 rounded-xl hover:border-indigo-500/30 transition-all hover:bg-white/[0.02]">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-leaf w-5 h-5 text-emerald-400" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<p className="text-zinc-500 text-sm">Emission Standard</p>
<p className="text-xl font-medium text-white mt-1">Euro 6</p>
</div>
</div>
</div>

<div className="mt-32 reveal-on-scroll">
<div className="text-center mb-16">
<h2 className="text-2xl font-medium text-white tracking-tight">How to Get Your Report</h2>
<p className="text-zinc-500 mt-2 text-lg">Seamless digital process from scan to document.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="relative bg-gradient-to-b from-[#121215] to-[#0A0A0C] border border-white/5 rounded-2xl p-8 overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="flex items-start justify-between">
<div className="w-12 h-12 bg-zinc-800/50 rounded-full flex items-center justify-center border border-white/5 text-white font-medium">1</div>
<div className="bg-blue-500/10 px-3 py-1 rounded-full text-blue-400 text-xs font-medium">Scanning</div>
</div>
<h3 className="mt-6 text-xl font-medium text-white">Input Vehicle Details</h3>
<p className="mt-3 text-zinc-400 leading-relaxed text-base">
                            Enter the VIN or model specifications. Our system instantly cross-references global databases for accurate valuation.
                        </p>
</div>

<div className="relative bg-gradient-to-b from-[#121215] to-[#0A0A0C] border border-white/5 rounded-2xl p-8 overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="flex items-start justify-between">
<div className="w-12 h-12 bg-zinc-800/50 rounded-full flex items-center justify-center border border-white/5 text-white font-medium">2</div>
<div className="bg-purple-500/10 px-3 py-1 rounded-full text-purple-400 text-xs font-medium">Generating</div>
</div>
<h3 className="mt-6 text-xl font-medium text-white">Receive Certified PDF</h3>
<p className="mt-3 text-zinc-400 leading-relaxed text-base">
                            Download a legally compliant PDF report stamped with AI verification, ready for customs or resale purposes.
                        </p>
</div>
</div>
</div>

<div className="mt-32 reveal-on-scroll">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">Why Choose Platform?</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-[#0f0f12] border border-white/5 rounded-xl p-8 flex flex-col items-center text-center hover:bg-white/[0.02] transition-colors">
<svg className="lucide lucide-hourglass w-8 h-8 text-zinc-400 mb-4" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
<h4 className="text-lg font-medium text-white">Deadline Efficiency</h4>
<p className="text-zinc-500 mt-2 text-base">Calculations processed in under 400ms.</p>
</div>
<div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-grid-white/[0.02]"></div>
<svg className="lucide lucide-zap w-8 h-8 text-white mb-4 relative z-10" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h4 className="text-lg font-medium text-white relative z-10">Instant AI Validation</h4>
<p className="text-indigo-200/70 mt-2 text-base relative z-10">Zero error margin on tax assessments.</p>
</div>
</div>
</div>

<div className="mt-32 reveal-on-scroll">
<p className="text-center text-sm text-zinc-500 mb-8 uppercase tracking-widest">Trusted by Experts</p>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#0d0d10] p-6 rounded-xl border border-white/5">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">JD</div>
<div>
<div className="text-sm font-medium text-white">James Doe</div>
<div className="flex text-yellow-500 text-[10px] gap-0.5">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<p className="text-zinc-400 text-sm italic">"The speed of calculation for the M5 series is unmatched. Saved us hours of manual work."</p>
</div>

<div className="bg-[#0d0d10] p-6 rounded-xl border border-white/5">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">AL</div>
<div>
<div className="text-sm font-medium text-white">Anna Lee</div>
<div className="flex text-yellow-500 text-[10px] gap-0.5">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<p className="text-zinc-400 text-sm italic">"Accurate to the cent. The PDF reports are exactly what customs officers require."</p>
</div>

<div className="bg-[#0d0d10] p-6 rounded-xl border border-white/5">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">RK</div>
<div>
<div className="text-sm font-medium text-white">Rob King</div>
<div className="flex text-yellow-500 text-[10px] gap-0.5">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<p className="text-zinc-400 text-sm italic">"Platform UI is stunning and the functionality for BMW models is incredibly detailed."</p>
</div>
</div>
</div>

<div className="mt-32 max-w-2xl mx-auto reveal-on-scroll">
<h2 className="text-center text-xl font-medium text-white mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-[#0f0f12] border border-white/5 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-4 text-zinc-300 font-medium hover:bg-white/[0.02] transition">
<span>How accurate is the tax calculation?</span>
<span className="transition group-open:-rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-zinc-500 text-base leading-relaxed">
                            Our AI algorithm is updated daily with the latest tax regulations and CO2 emission standards to ensure 99.9% accuracy.
                        </div>
</details>
<details className="group bg-[#0f0f12] border border-white/5 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-4 text-zinc-300 font-medium hover:bg-white/[0.02] transition">
<span>Is the PDF report valid for authorities?</span>
<span className="transition group-open:-rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-zinc-500 text-base leading-relaxed">
                            Yes, the generated report complies with standard EU and international customs documentation requirements.
                        </div>
</details>
<details className="group bg-[#0f0f12] border border-white/5 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-4 text-zinc-300 font-medium hover:bg-white/[0.02] transition">
<span>Can I calculate for other models?</span>
<span className="transition group-open:-rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-zinc-500 text-base leading-relaxed">
                            Absolutely. While this page is specific to the BMW M5, our platform supports over 5,000 vehicle models.
                        </div>
</details>
</div>
</div>

<div className="mt-32 mb-20 relative reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
<div className="relative bg-[#0d0d10] border border-white/10 rounded-2xl p-12 text-center overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<h2 className="text-3xl font-semibold text-white tracking-tight">Ready to solve your car's digital needs?</h2>
<p className="text-zinc-400 mt-4 text-lg max-w-xl mx-auto">Join thousands of dealerships and importers using Carsys today.</p>
<div className="mt-8 flex justify-center gap-4">
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors">
                            Join Now
                        </button>
</div>
</div>
</div>
</div>

<footer className="border-t border-white/5 bg-[#08080a] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center">
<svg className="lucide lucide-zap text-white w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-white font-medium">Carsys</span>
</div>
<p className="text-zinc-500 text-sm">Automotive intelligence for the modern era.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Features</a></li>
<li><a className="hover:text-zinc-300" href="#">Integrations</a></li>
<li><a className="hover:text-zinc-300" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">About</a></li>
<li><a className="hover:text-zinc-300" href="#">Blog</a></li>
<li><a className="hover:text-zinc-300" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Subscribe</h4>
<div className="flex gap-2">
<input className="bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none w-full" placeholder="Email address" type="email"/>
<button className="bg-indigo-600 hover:bg-indigo-500 p-2 rounded text-white transition-colors">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-600 text-sm">© 2024 Carsys Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-white" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-zinc-600 hover:text-white" href="#"><svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-zinc-600 hover:text-white" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>
</main>



    </>
  );
}

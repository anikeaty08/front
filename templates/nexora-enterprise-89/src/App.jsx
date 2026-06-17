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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



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



        // Initialize Lucide Icons
        lucide.createIcons();

        // 1. Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const body = document.body;

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            // Toggle icon between menu and x
            if(mobileMenu.classList.contains('hidden')){
                mobileBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6" stroke-width="1.5"></i>';
                body.style.overflow = 'auto';
            } else {
                mobileBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6" stroke-width="1.5"></i>';
                body.style.overflow = 'hidden';
            }
            lucide.createIcons();
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                mobileBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6" stroke-width="1.5"></i>';
                body.style.overflow = 'auto';
                lucide.createIcons();
            });
        });

        // 2. Scale Slider Logic
        const slider = document.getElementById('scale-slider');
        const execValue = document.getElementById('execution-value');
        const costValue = document.getElementById('cost-value');

        // Base values
        const minExecs = 100000;
        const maxExecs = 10000000;
        const baseCost = 99; // Minimum cost
        const costPerMillion = 350;

        function updateSliderValues(val) {
            // Calculate executions logarithmically for better feel or linear. Let's do linear mapped to range 1-100
            const percentage = val / 100;
            const currentExecs = Math.round(minExecs + (maxExecs - minExecs) * percentage);
            
            // Format number with commas
            execValue.textContent = currentExecs.toLocaleString();

            // Calculate cost (e.g., $99 base + $350 per million)
            const millions = currentExecs / 1000000;
            const currentCost = Math.round(baseCost + (millions * costPerMillion));
            costValue.textContent = currentCost.toLocaleString();
        }

        slider.addEventListener('input', (e) => {
            updateSliderValues(e.target.value);
        });

        // 3. Code Tabs Logic
        const tabs = document.querySelectorAll('.code-tab');
        const contents = document.querySelectorAll('[id^="code-content-"]');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active classes
                tabs.forEach(t => {
                    t.classList.remove('border-slate-900', 'text-slate-900');
                    t.classList.add('border-transparent', 'text-slate-500');
                });
                
                // Add active class to clicked
                tab.classList.remove('border-transparent', 'text-slate-500');
                tab.classList.add('border-slate-900', 'text-slate-900');

                // Hide all contents
                contents.forEach(c => c.classList.add('hidden'));

                // Show target content
                const targetId = `code-content-${tab.dataset.target}`;
                document.getElementById(targetId).classList.remove('hidden');
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="flex items-center justify-between h-16 w-full px-4 lg:px-0">

<div className="flex items-center lg:w-64 lg:border-r lg:border-slate-200 h-full lg:px-6">
<a className="flex items-center gap-2 group" href="#">
<div className="flex gap-[2px]">
<div className="w-2.5 h-5 bg-slate-900 group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-2.5 h-5 bg-slate-900 group-hover:bg-[#a882ff] transition-colors mt-1.5"></div>
</div>
<span className="text-lg font-semibold tracking-tight uppercase ml-1">NEXORA</span>
</a>
</div>

<nav className="hidden lg:flex flex-1 items-center px-12 space-x-12 h-full">
<a className="group flex flex-col justify-center h-full hover:text-[#a882ff] transition-colors relative" href="#platform">
<span className="text-xs font-mono text-slate-400 mb-0.5 group-hover:text-[#a882ff]">01</span>
<span className="text-sm font-medium">Platform</span>
</a>
<a className="group flex flex-col justify-center h-full hover:text-[#a882ff] transition-colors relative" href="#capabilities">
<span className="text-xs font-mono text-slate-400 mb-0.5 group-hover:text-[#a882ff]">02</span>
<span className="text-sm font-medium">Capabilities</span>
</a>
<a className="group flex flex-col justify-center h-full hover:text-[#a882ff] transition-colors relative" href="#solutions">
<span className="text-xs font-mono text-slate-400 mb-0.5 group-hover:text-[#a882ff]">03</span>
<span className="text-sm font-medium">Solutions</span>
</a>
<a className="group flex flex-col justify-center h-full hover:text-[#a882ff] transition-colors relative" href="#resources">
<span className="text-xs font-mono text-slate-400 mb-0.5 group-hover:text-[#a882ff]">04</span>
<span className="text-sm font-medium">Resources</span>
</a>
<a className="group flex flex-col justify-center h-full hover:text-[#a882ff] transition-colors relative" href="#docs">
<span className="text-xs font-mono text-slate-400 mb-0.5 group-hover:text-[#a882ff]">05</span>
<span className="text-sm font-medium">Docs</span>
</a>
</nav>

<a className="hidden lg:flex items-center h-full bg-slate-900 text-white px-8 hover:bg-slate-800 transition-colors gap-3" href="#">
<div className="w-1.5 h-1.5 rounded-full bg-[#a882ff]"></div>
<span className="text-sm font-medium">Enterprise Login</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>

<button className="lg:hidden p-2 text-slate-900" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="fixed inset-0 bg-white z-40 hidden flex-col pt-16" id="mobile-menu">
<nav className="flex flex-col p-6 space-y-6">
<a className="text-2xl font-semibold tracking-tight border-b border-slate-100 pb-4 flex items-center justify-between" href="#platform">Platform <span className="text-sm font-mono text-slate-400">01</span></a>
<a className="text-2xl font-semibold tracking-tight border-b border-slate-100 pb-4 flex items-center justify-between" href="#capabilities">Capabilities <span className="text-sm font-mono text-slate-400">02</span></a>
<a className="text-2xl font-semibold tracking-tight border-b border-slate-100 pb-4 flex items-center justify-between" href="#solutions">Solutions <span className="text-sm font-mono text-slate-400">03</span></a>
<a className="text-2xl font-semibold tracking-tight border-b border-slate-100 pb-4 flex items-center justify-between" href="#resources">Resources <span className="text-sm font-mono text-slate-400">04</span></a>
<a className="text-2xl font-semibold tracking-tight border-b border-slate-100 pb-4 flex items-center justify-between" href="#docs">Docs <span className="text-sm font-mono text-slate-400">05</span></a>
</nav>
<div className="mt-auto p-6 bg-slate-50 border-t border-slate-200">
<a className="w-full flex items-center justify-center bg-slate-900 text-white py-4 gap-3 text-sm font-medium" href="#">
<div className="w-1.5 h-1.5 rounded-full bg-[#a882ff]"></div>
                Enterprise Login
            </a>
</div>
</div>

<div className="max-w-[100vw] overflow-hidden flex flex-col">

<section className="relative flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] border-b border-slate-200">

<div className="hidden lg:flex w-16 shrink-0 border-r border-slate-200 flex-col items-center justify-between py-8">
<div className="mt-48 transform -rotate-90 whitespace-nowrap text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">
                    Built for enterprises. Designed for scale.
                </div>
<div className="w-8 h-8 border border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-900 bg-white">
                    N
                </div>
</div>

<div className="flex-1 flex flex-col">

<div className="flex-1 flex flex-col xl:flex-row border-b border-slate-200">

<div className="flex-1 p-8 lg:p-16 relative flex flex-col justify-center border-b xl:border-b-0 xl:border-r border-slate-200 bg-[#fafafa]/50">

<i className="absolute top-6 left-6 text-slate-300 w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
<div className="max-w-2xl mt-8 xl:mt-0">
<h1 className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] font-semibold tracking-tighter uppercase text-slate-900 mb-8">
                                AI Agents.<br/>
                                Orchestrated.<br/>
<span className="text-[#a882ff]">Enterprise Ready.</span>
</h1>
<p className="font-mono text-sm lg:text-base text-slate-500 max-w-lg mb-12 leading-relaxed">
                                The orchestration infrastructure to deploy, connect, and govern AI agents at enterprise scale.
                            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-3" href="#">
                                    Book a Demo
                                </a>
<a className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 text-sm font-medium border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 group shadow-sm" href="#">
                                    Explore Platform 
                                    <i className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="w-full xl:w-[600px] shrink-0 bg-white relative flex flex-col lg:flex-row">

<div className="flex-1 flex items-center justify-center p-12 min-h-[500px] xl:min-h-0 perspective-[1000px] iso-container cursor-crosshair">
<div className="relative w-64 h-64 transform-style-preserve-3d" style={{transform: 'rotateX(60deg) rotateZ(-45deg)'}}>

<div className="absolute inset-0 bg-gradient-to-br from-[#d2bdff] to-[#a882ff] border border-white/30 shadow-2xl iso-layer iso-layer-1" style={{transform: 'translateZ(90px)'}}>
<div className="absolute inset-0 flex items-center justify-center opacity-80">
<div className="flex gap-2 transform -rotate-z-45">
<div className="w-3 h-10 bg-white/90"></div>
<div className="w-3 h-10 bg-white/90 mt-4"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-white/40 border border-slate-200 backdrop-blur-sm iso-layer iso-layer-2" style={{transform: 'translateZ(45px)'}}>
<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '16px 16px'}}></div>

<div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-[#a882ff] rounded-full"></div>
<div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
</div>

<div className="absolute inset-0 bg-white/20 border border-slate-200 backdrop-blur-sm iso-layer iso-layer-3" style={{transform: 'translateZ(0px)'}}>
<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '16px 16px'}}></div>
</div>

<div className="absolute inset-0 bg-slate-900 border border-slate-700 shadow-xl iso-layer iso-layer-4" style={{transform: 'translateZ(-45px)'}}>

<div className="w-full h-full opacity-20" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>

<div className="absolute top-1/2 left-1/2 w-px h-[135px] bg-slate-300/50 transform -translate-x-1/2 -translate-y-1/2 rotate-x-90 iso-layer pointer-events-none z-[-1]"></div>
</div>
</div>

<div className="w-full lg:w-72 border-t lg:border-t-0 lg:border-l border-slate-200 bg-[#fafafa]/30 flex flex-col p-8 justify-center space-y-10">
<div className="group relative">
<div className="absolute -left-[33px] top-1 w-[32px] h-px bg-slate-200 hidden lg:block group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-6 h-6 border border-slate-200 bg-white flex items-center justify-center mb-3 text-[#a882ff] group-hover:border-[#a882ff] transition-colors">
<i className="w-3.5 h-3.5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-xs font-semibold uppercase tracking-tight text-slate-900 mb-1.5">Agent Lifecycle</h3>
<p className="text-xs text-slate-500 leading-relaxed font-mono">Design, version and deploy agents with confidence.</p>
</div>
<div className="group relative">
<div className="absolute -left-[33px] top-1 w-[32px] h-px bg-slate-200 hidden lg:block group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-6 h-6 border border-slate-200 bg-white flex items-center justify-center mb-3 text-slate-700 group-hover:border-[#a882ff] transition-colors">
<i className="w-3.5 h-3.5" data-lucide="box" strokeWidth="1.5"></i>
</div>
<h3 className="text-xs font-semibold uppercase tracking-tight text-slate-900 mb-1.5">Orchestration Engine</h3>
<p className="text-xs text-slate-500 leading-relaxed font-mono">Coordinate complex workflows across agents and systems.</p>
</div>
<div className="group relative">
<div className="absolute -left-[33px] top-1 w-[32px] h-px bg-slate-200 hidden lg:block group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-6 h-6 border border-slate-200 bg-white flex items-center justify-center mb-3 text-slate-700 group-hover:border-[#a882ff] transition-colors">
<i className="w-3.5 h-3.5" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h3 className="text-xs font-semibold uppercase tracking-tight text-slate-900 mb-1.5">Guardrails &amp; Governance</h3>
<p className="text-xs text-slate-500 leading-relaxed font-mono">Enforce policies, permissions and compliance at scale.</p>
</div>
<div className="group relative">
<div className="absolute -left-[33px] top-1 w-[32px] h-px bg-slate-200 hidden lg:block group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-6 h-6 border border-slate-200 bg-white flex items-center justify-center mb-3 text-slate-700 group-hover:border-[#a882ff] transition-colors">
<i className="w-3.5 h-3.5" data-lucide="network" strokeWidth="1.5"></i>
</div>
<h3 className="text-xs font-semibold uppercase tracking-tight text-slate-900 mb-1.5">Integrations Layer</h3>
<p className="text-xs text-slate-500 leading-relaxed font-mono">Connect to your data, tools and enterprise systems.</p>
</div>
<div className="group relative">
<div className="absolute -left-[33px] top-1 w-[32px] h-px bg-slate-200 hidden lg:block group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-6 h-6 border border-slate-200 bg-white flex items-center justify-center mb-3 text-slate-700 group-hover:border-[#a882ff] transition-colors">
<i className="w-3.5 h-3.5" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-xs font-semibold uppercase tracking-tight text-slate-900 mb-1.5">Observability</h3>
<p className="text-xs text-slate-500 leading-relaxed font-mono">Monitor performance, trace actions and optimize outcomes.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 border-b border-slate-200 bg-white">
<div className="p-8 border-b lg:border-b-0 border-r border-slate-200 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#a882ff]"></div>
<span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Agents Orchestrated</span>
</div>
<div className="text-3xl lg:text-4xl font-semibold tracking-tighter text-slate-900">12.4K+</div>
</div>
<div className="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#a882ff]"></div>
<span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Enterprise Customers</span>
</div>
<div className="text-3xl lg:text-4xl font-semibold tracking-tighter text-slate-900">230+</div>
</div>
<div className="p-8 border-r border-slate-200 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#a882ff]"></div>
<span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Tasks Executed / Day</span>
</div>
<div className="text-3xl lg:text-4xl font-semibold tracking-tighter text-slate-900">3.6M+</div>
</div>
<div className="p-8 flex flex-col justify-center relative overflow-hidden">

<div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-slate-300"></div>
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#a882ff]"></div>
<span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Uptime Guarantee</span>
</div>
<div className="text-3xl lg:text-4xl font-semibold tracking-tighter text-slate-900">99.99%</div>
</div>
</div>

<div className="flex flex-col lg:flex-row p-8 lg:p-0 bg-[#fafafa]/50">
<div className="lg:w-64 shrink-0 flex items-center lg:px-8 lg:border-r border-slate-200 mb-6 lg:mb-0">
<span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Trusted by innovation leaders</span>
</div>
<div className="flex-1 flex flex-wrap items-center justify-between gap-8 lg:px-12 opacity-50 grayscale">

<div className="text-xl font-bold tracking-tighter">ACME</div>
<div className="text-xl font-medium tracking-wide flex items-center gap-1"><div className="w-4 h-4 rounded-full border-[3px] border-slate-900"></div> Halo</div>
<div className="text-xl font-bold tracking-tight">PIVOT.</div>
<div className="flex items-center gap-2 font-semibold"><i className="w-5 h-5" data-lucide="blocks"></i> Northline</div>
<div className="flex items-center gap-1 font-bold tracking-tighter"><i className="w-5 h-5" data-lucide="circle-dot"></i> CORTEX</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-slate-200 bg-white" id="platform">
<div className="grid grid-cols-1 lg:grid-cols-[4rem_1fr] min-h-screen">

<div className="hidden lg:flex border-r border-slate-200 flex-col items-center py-8">
<span className="text-xs font-mono text-slate-400 transform -rotate-90 mt-12">02 / ARCHITECTURE</span>
</div>

<div className="flex flex-col">

<div className="p-8 lg:p-16 border-b border-slate-200 grid-bg relative">
<div className="max-w-3xl">
<h2 className="text-sm font-mono text-[#a882ff] mb-4 uppercase tracking-widest">Core Infrastructure</h2>
<h3 className="text-4xl lg:text-5xl font-semibold tracking-tighter text-slate-900 mb-6 leading-tight">
                                A Deterministic Engine for Non-Deterministic Agents.
                            </h3>
<p className="text-base text-slate-500 font-mono leading-relaxed">
                                NEXORA sits between your LLMs and your internal systems. It handles routing, context injection, state management, and execution logging, turning unreliable agents into robust enterprise services.
                            </p>
</div>
</div>

<div className="flex-1 p-8 lg:p-16 bg-[#fafafa]">
<div className="w-full h-full border border-slate-200 bg-white shadow-sm flex flex-col p-8 relative overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-40"></div>

<div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full gap-8">

<div className="w-full md:w-64 border border-slate-200 bg-white p-6 shadow-sm z-20">
<div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
<div className="w-8 h-8 bg-slate-100 flex items-center justify-center rounded">
<i className="w-4 h-4 text-slate-600" data-lucide="plug" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-semibold tracking-tight uppercase">Triggers</span>
</div>
<div className="space-y-3 font-mono text-xs text-slate-500">
<div className="flex items-center justify-between"><span>API Gateway</span> <div className="w-2 h-2 rounded-full bg-green-400"></div></div>
<div className="flex items-center justify-between"><span>Webhooks</span> <div className="w-2 h-2 rounded-full bg-green-400"></div></div>
<div className="flex items-center justify-between"><span>CRON Jobs</span> <div className="w-2 h-2 rounded-full bg-green-400"></div></div>
</div>
</div>

<div className="hidden md:flex flex-1 h-px bg-slate-200 relative items-center justify-center">
<div className="px-2 bg-[#fafafa] text-[10px] font-mono text-slate-400 uppercase">Incoming Events</div>
<i className="absolute right-0 w-4 h-4 text-slate-300 transform translate-x-1/2 bg-[#fafafa]" data-lucide="arrow-right"></i>
</div>

<div className="w-full md:w-80 border border-[#a882ff] bg-white p-8 shadow-lg z-20 relative">

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#a882ff]"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#a882ff]"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#a882ff]"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#a882ff]"></div>
<div className="flex items-center justify-center mb-6">
<div className="w-12 h-12 bg-[#a882ff]/10 flex items-center justify-center rounded-full text-[#a882ff]">
<i className="w-6 h-6" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
</div>
<h4 className="text-center text-lg font-semibold tracking-tight uppercase mb-2">NEXORA Orchestrator</h4>
<p className="text-center text-xs text-slate-500 font-mono mb-6">State Machine &amp; Router</p>
<div className="grid grid-cols-2 gap-2 text-xs font-mono text-center">
<div className="p-2 bg-slate-50 border border-slate-100">Context DB</div>
<div className="p-2 bg-slate-50 border border-slate-100">Policy Engine</div>
<div className="p-2 bg-slate-50 border border-slate-100">LLM Router</div>
<div className="p-2 bg-slate-50 border border-slate-100">Audit Log</div>
</div>
</div>

<div className="hidden md:flex flex-1 h-px bg-slate-200 relative items-center justify-center">
<div className="px-2 bg-[#fafafa] text-[10px] font-mono text-slate-400 uppercase">Action Execution</div>
<i className="absolute right-0 w-4 h-4 text-slate-300 transform translate-x-1/2 bg-[#fafafa]" data-lucide="arrow-right"></i>
</div>

<div className="w-full md:w-64 space-y-4 z-20">
<div className="border border-slate-200 bg-white p-4 shadow-sm flex items-center gap-4">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded">
<i className="w-4 h-4" data-lucide="database" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight uppercase">Internal DBs</div>
<div className="text-[10px] font-mono text-slate-500">PostgreSQL, Redis</div>
</div>
</div>
<div className="border border-slate-200 bg-white p-4 shadow-sm flex items-center gap-4">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded">
<i className="w-4 h-4" data-lucide="cloud" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight uppercase">SaaS APIs</div>
<div className="text-[10px] font-mono text-slate-500">Salesforce, Jira</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-slate-200 bg-[#fafafa]" id="capabilities">
<div className="grid grid-cols-1 lg:grid-cols-[4rem_1fr]">

<div className="hidden lg:flex border-r border-slate-200 flex-col items-center py-8 bg-white">
<span className="text-xs font-mono text-slate-400 transform -rotate-90 mt-12 whitespace-nowrap">03 / CAPABILITIES</span>
</div>
<div className="flex flex-col">
<div className="p-8 lg:p-16 border-b border-slate-200 bg-white">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-2xl">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-slate-900 mb-4 leading-tight">
                                    Engineered for Reliability.
                                </h3>
<p className="text-base text-slate-500 font-mono">
                                    Tools required to bring AI out of the sandbox and into production environments.
                                </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-[#a882ff] transition-colors border-b border-slate-900 hover:border-[#a882ff] pb-0.5" href="#">
                                View Full Feature Matrix <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

<div className="p-8 border-b border-r border-slate-200 bg-white hover:bg-slate-50 transition-colors group relative">
<div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-10 h-10 border border-slate-200 flex items-center justify-center mb-6 bg-[#fafafa] text-slate-700 group-hover:border-[#a882ff] group-hover:text-[#a882ff] transition-colors">
<i className="w-5 h-5" data-lucide="route" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold tracking-tight uppercase mb-3 text-slate-900">Semantic Routing</h4>
<p className="text-sm font-mono text-slate-500 leading-relaxed">
                                Dynamically route tasks to specialized agents or models based on intent, cost, or required latency profiles.
                            </p>
</div>

<div className="p-8 border-b border-r border-slate-200 bg-white hover:bg-slate-50 transition-colors group relative">
<div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-10 h-10 border border-slate-200 flex items-center justify-center mb-6 bg-[#fafafa] text-slate-700 group-hover:border-[#a882ff] group-hover:text-[#a882ff] transition-colors">
<i className="w-5 h-5" data-lucide="history" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold tracking-tight uppercase mb-3 text-slate-900">State &amp; Memory Management</h4>
<p className="text-sm font-mono text-slate-500 leading-relaxed">
                                Persistent context across isolated agent sessions. Graph-based memory allows agents to recall previous interactions instantly.
                            </p>
</div>

<div className="p-8 border-b xl:border-r-0 border-r border-slate-200 bg-white hover:bg-slate-50 transition-colors group relative">
<div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-10 h-10 border border-slate-200 flex items-center justify-center mb-6 bg-[#fafafa] text-slate-700 group-hover:border-[#a882ff] group-hover:text-[#a882ff] transition-colors">
<i className="w-5 h-5" data-lucide="shield-alert" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold tracking-tight uppercase mb-3 text-slate-900">Deterministic Fallbacks</h4>
<p className="text-sm font-mono text-slate-500 leading-relaxed">
                                Define strict schemas for outputs. If an LLM hallucinates, NEXORA intercepts and triggers self-healing retries or human-in-the-loop.
                            </p>
</div>

<div className="p-8 border-b md:border-b-0 border-r border-slate-200 bg-white hover:bg-slate-50 transition-colors group relative">
<div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-10 h-10 border border-slate-200 flex items-center justify-center mb-6 bg-[#fafafa] text-slate-700 group-hover:border-[#a882ff] group-hover:text-[#a882ff] transition-colors">
<i className="w-5 h-5" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold tracking-tight uppercase mb-3 text-slate-900">RBAC &amp; Data Masking</h4>
<p className="text-sm font-mono text-slate-500 leading-relaxed">
                                Granular permissions down to the action level. PII is automatically redacted before hitting external LLM providers.
                            </p>
</div>

<div className="p-8 border-b md:border-b-0 border-r border-slate-200 bg-white hover:bg-slate-50 transition-colors group relative">
<div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-10 h-10 border border-slate-200 flex items-center justify-center mb-6 bg-[#fafafa] text-slate-700 group-hover:border-[#a882ff] group-hover:text-[#a882ff] transition-colors">
<i className="w-5 h-5" data-lucide="line-chart" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold tracking-tight uppercase mb-3 text-slate-900">Telemetry &amp; Tracing</h4>
<p className="text-sm font-mono text-slate-500 leading-relaxed">
                                Export OpenTelemetry compatible logs. Visualize the exact reasoning path and execution timeline of any complex workflow.
                            </p>
</div>

<div className="p-8 border-r md:border-r-0 xl:border-r-0 border-slate-200 bg-white hover:bg-slate-50 transition-colors group relative">
<div className="absolute top-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-[#a882ff] transition-colors"></div>
<div className="w-10 h-10 border border-slate-200 flex items-center justify-center mb-6 bg-[#fafafa] text-slate-700 group-hover:border-[#a882ff] group-hover:text-[#a882ff] transition-colors">
<i className="w-5 h-5" data-lucide="code" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold tracking-tight uppercase mb-3 text-slate-900">Local Testing Environments</h4>
<p className="text-sm font-mono text-slate-500 leading-relaxed">
                                Spin up mock orchestration environments locally. Test agent behaviors against mocked APIs before deploying to production.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-slate-200 bg-slate-900 text-white overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="grid grid-cols-1 lg:grid-cols-[4rem_1fr] relative z-10">
<div className="hidden lg:flex border-r border-slate-800 flex-col items-center py-8">
<span className="text-xs font-mono text-slate-500 transform -rotate-90 mt-12 whitespace-nowrap">04 / PERFORMANCE</span>
</div>
<div className="flex flex-col lg:flex-row">

<div className="flex-1 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-center">
<div className="inline-block px-3 py-1 border border-[#a882ff]/30 bg-[#a882ff]/10 text-[#a882ff] text-xs font-mono mb-6 w-max">Zero-Overhead Scaling</div>
<h3 className="text-4xl lg:text-5xl font-semibold tracking-tighter mb-6 leading-tight text-white">
                            Built in Rust.<br/>Deployed at the Edge.
                        </h3>
<p className="text-base text-slate-400 font-mono leading-relaxed mb-12">
                            NEXORA adds less than 5ms of latency to your agent workflows. Estimate your capacity requirements below.
                        </p>

<div className="bg-slate-800/50 border border-slate-700 p-8">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-semibold uppercase tracking-tight">Monthly Executions</span>
<span className="text-xl font-mono text-[#a882ff]" id="execution-value">1,000,000</span>
</div>

<input className="w-full mb-8" id="scale-slider" max="100" min="1" type="range" value="10"/>
<div className="flex items-center justify-between pt-6 border-t border-slate-700">
<div>
<div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Est. Infrastructure Cost</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tighter">$</span>
<span className="text-3xl font-semibold tracking-tighter" id="cost-value">450</span>
<span className="text-xs font-mono text-slate-500">/mo</span>
</div>
</div>
<a className="bg-white text-slate-900 px-6 py-3 text-sm font-medium hover:bg-slate-200 transition-colors" href="#">
                                    View Pricing
                                </a>
</div>
</div>
</div>

<div className="flex-1 grid grid-cols-2 grid-rows-2">
<div className="p-8 border-b border-r border-slate-800 flex flex-col justify-center items-center text-center">
<div className="text-5xl font-semibold tracking-tighter text-white mb-2"> &lt;5ms </div>
<div className="text-xs font-mono uppercase tracking-widest text-slate-500">P99 Latency Added</div>
</div>
<div className="p-8 border-b border-slate-800 flex flex-col justify-center items-center text-center">
<div className="text-5xl font-semibold tracking-tighter text-white mb-2"> 100k+ </div>
<div className="text-xs font-mono uppercase tracking-widest text-slate-500">Req/Sec Throughput</div>
</div>
<div className="p-8 border-r border-slate-800 flex flex-col justify-center items-center text-center">
<div className="text-5xl font-semibold tracking-tighter text-white mb-2"> Multi </div>
<div className="text-xs font-mono uppercase tracking-widest text-slate-500">Region Active-Active</div>
</div>
<div className="p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
<i className="absolute right-0 bottom-0 w-32 h-32 text-slate-800/30 transform translate-x-8 translate-y-8" data-lucide="shield-check" strokeWidth="1"></i>
<div className="text-5xl font-semibold tracking-tighter text-white mb-2"> SOC2 </div>
<div className="text-xs font-mono uppercase tracking-widest text-slate-500">Type II Compliant</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-slate-200 bg-white" id="docs">
<div className="grid grid-cols-1 lg:grid-cols-[4rem_1fr]">
<div className="hidden lg:flex border-r border-slate-200 flex-col items-center py-8">
<span className="text-xs font-mono text-slate-400 transform -rotate-90 mt-12 whitespace-nowrap">05 / DEVELOPER EXP</span>
</div>
<div className="flex flex-col">
<div className="p-8 lg:p-16 border-b border-slate-200 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 bg-[#fafafa]">
<div className="max-w-2xl">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-slate-900 mb-4 leading-tight">
                                SDKs for Modern Stacks.
                            </h3>
<p className="text-base text-slate-500 font-mono">
                                Integrate orchestration logic directly into your application codebase. Infrastructure as code principles applied to agentic workflows.
                            </p>
</div>
<div className="flex items-center gap-4">
<a className="px-6 py-3 border border-slate-200 bg-white text-sm font-medium hover:bg-slate-50 flex items-center gap-2" href="#">
<i className="w-4 h-4 text-slate-500" data-lucide="book" strokeWidth="1.5"></i> Read Documentation
                            </a>
</div>
</div>

<div className="p-8 lg:p-16">
<div className="border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col md:flex-row">

<div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-slate-200 bg-[#fafafa] flex flex-col p-6 space-y-6">
<div className="flex items-start gap-4 group cursor-pointer">
<div className="w-6 h-6 border border-slate-900 bg-slate-900 text-white text-xs font-mono flex items-center justify-center shrink-0">1</div>
<div>
<div className="text-sm font-semibold tracking-tight uppercase mb-1">Define Workflow</div>
<div className="text-xs font-mono text-slate-500">Initialize the client and set up your execution graph.</div>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<div className="w-6 h-6 border border-slate-300 text-slate-500 text-xs font-mono flex items-center justify-center shrink-0">2</div>
<div>
<div className="text-sm font-semibold tracking-tight uppercase mb-1">Register Agents</div>
<div className="text-xs font-mono text-slate-500">Attach specific tools and context to designated agent nodes.</div>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<div className="w-6 h-6 border border-slate-300 text-slate-500 text-xs font-mono flex items-center justify-center shrink-0">3</div>
<div>
<div className="text-sm font-semibold tracking-tight uppercase mb-1">Execute &amp; Monitor</div>
<div className="text-xs font-mono text-slate-500">Trigger the run and stream telemetry data in real-time.</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-slate-50 min-h-[400px]">

<div className="flex border-b border-slate-200 bg-white px-4">
<button className="px-6 py-3 text-sm font-mono text-slate-900 border-b-2 border-slate-900 code-tab active" data-target="python">Python</button>
<button className="px-6 py-3 text-sm font-mono text-slate-500 border-b-2 border-transparent hover:text-slate-900 code-tab" data-target="typescript">TypeScript</button>
<button className="px-6 py-3 text-sm font-mono text-slate-500 border-b-2 border-transparent hover:text-slate-900 code-tab" data-target="go">Go</button>
</div>

<div className="flex-1 p-6 overflow-x-auto hide-scrollbar relative">

<div className="absolute left-0 top-6 bottom-0 w-12 border-r border-slate-200/50 flex flex-col items-end pr-3 font-mono text-xs text-slate-300 select-none space-y-1.5">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
</div>
<pre className="pl-12 font-mono text-sm leading-relaxed" id="code-content-python">
<span className="text-[#a882ff]">import</span> nexora
<span className="text-[#a882ff]">from</span> nexora.agents <span className="text-[#a882ff]">import</span> LLMAgent
<span className="text-[#a882ff]">from</span> nexora.tools <span className="text-[#a882ff]">import</span> SQLQuery, SendEmail

<span className="text-slate-400"># Initialize enterprise client with strict governance</span>
client = nexora.Client(api_key=<span className="text-green-600">"nx_..."</span>, env=<span className="text-green-600">"production"</span>)

<span className="text-slate-400"># Define an agent with specific boundaries</span>
analyst_agent = LLMAgent(
    name=<span className="text-green-600">"Financial_Analyst"</span>,
    model=<span className="text-green-600">"gpt-4-turbo"</span>,
    tools=[SQLQuery(db=<span className="text-green-600">"finance_dw"</span>)],
    max_retries=<span className="text-orange-500">3</span>,
    timeout_ms=<span className="text-orange-500">5000</span>
)

<span className="text-slate-400"># Create workflow graph</span>
workflow = client.create_workflow(name=<span className="text-green-600">"Quarterly_Report"</span>)
workflow.add_node(analyst_agent)
workflow.deploy()
                                    </pre>
<pre className="pl-12 font-mono text-sm leading-relaxed hidden" id="code-content-typescript">
<span className="text-[#a882ff]">import</span> { NexoraClient, LLMAgent } <span className="text-[#a882ff]">from</span> <span className="text-green-600">'@nexora/sdk'</span>;
<span className="text-[#a882ff]">import</span> { SQLQueryTool } <span className="text-[#a882ff]">from</span> <span className="text-green-600">'@nexora/tools/sql'</span>;

<span className="text-slate-400">// Initialize enterprise client</span>
<span className="text-[#a882ff]">const</span> client = <span className="text-[#a882ff]">new</span> NexoraClient({ apiKey: process.env.NEXORA_KEY });

<span className="text-[#a882ff]">const</span> analystAgent = <span className="text-[#a882ff]">new</span> LLMAgent({
  name: <span className="text-green-600">'Financial_Analyst'</span>,
  model: <span className="text-green-600">'gpt-4-turbo'</span>,
  tools: [<span className="text-[#a882ff]">new</span> SQLQueryTool({ db: <span className="text-green-600">'finance_dw'</span> })],
  config: { maxRetries: <span className="text-orange-500">3</span>, timeoutMs: <span className="text-orange-500">5000</span> }
});

<span className="text-[#a882ff]">const</span> workflow = <span className="text-[#a882ff]">await</span> client.createWorkflow(<span className="text-green-600">'Quarterly_Report'</span>);
workflow.addNode(analystAgent);
<span className="text-[#a882ff]">await</span> workflow.deploy();
                                    </pre>
<pre className="pl-12 font-mono text-sm leading-relaxed hidden" id="code-content-go">
<span className="text-[#a882ff]">package</span> main

<span className="text-[#a882ff]">import</span> (
    <span className="text-green-600">"github.com/nexora-io/sdk-go/nexora"</span>
    <span className="text-green-600">"github.com/nexora-io/sdk-go/tools"</span>
)

<span className="text-[#a882ff]">func</span> <span className="text-blue-500">main</span>() {
    client := nexora.<span className="text-blue-500">NewClient</span>(nexora.Options{APIKey: <span className="text-green-600">"nx_..."</span>})

    analystAgent := nexora.<span className="text-blue-500">NewLLMAgent</span>(nexora.AgentConfig{
        Name:  <span className="text-green-600">"Financial_Analyst"</span>,
        Model: <span className="text-green-600">"gpt-4-turbo"</span>,
        Tools: []nexora.Tool{tools.<span className="text-blue-500">NewSQLQuery</span>(<span className="text-green-600">"finance_dw"</span>)},
        Retry: <span className="text-orange-500">3</span>,
    })

    wf := client.<span className="text-blue-500">CreateWorkflow</span>(<span className="text-green-600">"Quarterly_Report"</span>)
    wf.<span className="text-blue-500">AddNode</span>(analystAgent)
    wf.<span className="text-blue-500">Deploy</span>()
}
                                    </pre>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-slate-200 bg-[#fafafa]" id="resources">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white flex flex-col justify-center">
<div className="w-12 h-12 border border-slate-200 flex items-center justify-center mb-8 bg-slate-50">
<i className="w-6 h-6 text-slate-700" data-lucide="fingerprint" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-slate-900 mb-6 leading-tight">
                        Enterprise-Grade Security by Default.
                    </h3>
<p className="text-base text-slate-500 font-mono mb-10 leading-relaxed">
                        Deploy in our multi-tenant cloud, single-tenant VPC, or entirely within your own infrastructure. You control where the data flows.
                    </p>

<div className="flex items-center gap-4 mb-8 p-4 border border-slate-200 bg-[#fafafa]">
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer z-10 transition-all duration-300" id="vpc-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300" htmlFor="vpc-toggle"></label>
</input></div>
<div>
<div className="text-sm font-semibold uppercase tracking-tight">Enable VPC Peering</div>
<div className="text-[10px] font-mono text-slate-500">Requires Enterprise Plan</div>
</div>
</div>
<a className="text-sm font-medium text-[#a882ff] hover:text-slate-900 transition-colors flex items-center gap-2 w-max" href="#">
                        Review Security Whitepaper <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="p-8 lg:p-16 flex flex-col justify-center bg-[#fafafa]">
<ul className="space-y-6">
<li className="flex gap-4 p-6 border border-slate-200 bg-white shadow-sm">
<div className="mt-1"><i className="w-5 h-5 text-green-500" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-tight mb-1">PII Masking &amp; Redaction</h4>
<p className="text-xs font-mono text-slate-500">Automatically scrub sensitive data before it reaches external language models based on customizable regex patterns.</p>
</div>
</li>
<li className="flex gap-4 p-6 border border-slate-200 bg-white shadow-sm">
<div className="mt-1"><i className="w-5 h-5 text-green-500" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-tight mb-1">Audit Logs (WORM Compliant)</h4>
<p className="text-xs font-mono text-slate-500">Every prompt, response, and tool execution is logged immutably for compliance and retrospective debugging.</p>
</div>
</li>
<li className="flex gap-4 p-6 border border-slate-200 bg-white shadow-sm">
<div className="mt-1"><i className="w-5 h-5 text-green-500" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-tight mb-1">Role-Based Access Control</h4>
<p className="text-xs font-mono text-slate-500">Define strict permissions on who can create, deploy, or view logs for specific agent workflows.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="relative border-b border-slate-200 bg-white py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
<h3 className="text-sm font-mono text-[#a882ff] mb-4 uppercase tracking-widest">Extensible by Design</h3>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-slate-900 mb-12">
                    Connects to your existing stack.
                </h2>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

<div className="aspect-video border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors grayscale hover:grayscale-0 group cursor-pointer">
<span className="font-bold tracking-tighter text-lg group-hover:text-blue-600 transition-colors">Salesforce</span>
</div>
<div className="aspect-video border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors grayscale hover:grayscale-0 group cursor-pointer">
<span className="font-bold tracking-tighter text-lg flex items-center gap-1 group-hover:text-indigo-600 transition-colors"><i className="w-5 h-5" data-lucide="slack"></i> Slack</span>
</div>
<div className="aspect-video border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors grayscale hover:grayscale-0 group cursor-pointer">
<span className="font-bold tracking-tighter text-lg text-slate-800">PostgreSQL</span>
</div>
<div className="aspect-video border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors grayscale hover:grayscale-0 group cursor-pointer">
<span className="font-bold tracking-tighter text-lg group-hover:text-green-600 transition-colors">MongoDB</span>
</div>
<div className="aspect-video border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors grayscale hover:grayscale-0 group cursor-pointer">
<span className="font-bold tracking-tighter text-lg group-hover:text-red-500 transition-colors">Redis</span>
</div>
<div className="aspect-video border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors grayscale hover:grayscale-0 group cursor-pointer">
<span className="font-bold tracking-tighter text-lg group-hover:text-blue-500 transition-colors flex items-center gap-1"><i className="w-5 h-5" data-lucide="webhook"></i> Webhooks</span>
</div>
<div className="aspect-video border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors grayscale hover:grayscale-0 group cursor-pointer">
<span className="font-bold tracking-tighter text-lg group-hover:text-[#FF9900] transition-colors">AWS</span>
</div>
<div className="aspect-video border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors grayscale hover:grayscale-0 group cursor-pointer">
<span className="font-bold tracking-tighter text-lg group-hover:text-blue-400 transition-colors">Azure</span>
</div>
<div className="aspect-video border border-slate-200 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors group cursor-pointer bg-slate-50 border-dashed">
<i className="w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors mb-1" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-xs font-mono text-slate-500">Custom Tool API</span>
</div>
</div>
</div>
</section>

<section className="relative bg-slate-900 text-white overflow-hidden py-32 border-b border-slate-800">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a882ff] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
<div className="w-16 h-16 border border-slate-700 flex items-center justify-center mb-8 bg-slate-800/50 backdrop-blur-sm">
<div className="flex gap-1 transform rotate-45">
<div className="w-1.5 h-6 bg-white"></div>
<div className="w-1.5 h-6 bg-white mt-3"></div>
</div>
</div>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter uppercase mb-6 leading-[1.1]">
                    Ready to scale your<br/>AI operations?
                </h2>
<p className="text-base text-slate-400 font-mono mb-10 max-w-lg">
                    Join industry leaders managing millions of reliable AI agent executions daily with NEXORA.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 text-sm font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-3" href="#">
                        Start Building Free
                    </a>
<a className="w-full sm:w-auto bg-transparent text-white px-8 py-4 text-sm font-medium border border-slate-700 hover:bg-slate-800 transition-colors flex items-center justify-center gap-3 group" href="#">
                        Talk to Sales 
                    </a>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-8 lg:px-16">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="flex gap-[2px]">
<div className="w-2.5 h-5 bg-slate-900"></div>
<div className="w-2.5 h-5 bg-slate-900 mt-1.5"></div>
</div>
<span className="text-lg font-semibold tracking-tight uppercase ml-1">NEXORA</span>
</a>
<p className="text-xs font-mono text-slate-500 max-w-xs leading-relaxed">
                            The deterministic orchestration layer for enterprise AI agents. Built for scale, security, and absolute reliability.
                        </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-tight text-slate-900 mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500 font-mono">
<li><a className="hover:text-[#a882ff] transition-colors" href="#">Orchestration Engine</a></li>
<li><a className="hover:text-[#a882ff] transition-colors" href="#">Semantic Router</a></li>
<li><a className="hover:text-[#a882ff] transition-colors" href="#">Observability</a></li>
<li><a className="hover:text-[#a882ff] transition-colors" href="#">Security</a></li>
<li><a className="hover:text-[#a882ff] transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-tight text-slate-900 mb-4">Developers</h4>
<ul className="space-y-3 text-sm text-slate-500 font-mono">
<li><a className="hover:text-[#a882ff] transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-[#a882ff] transition-colors" href="#">Python SDK</a></li>
<li><a className="hover:text-[#a882ff] transition-colors" href="#">TypeScript SDK</a></li>
<li><a className="hover:text-[#a882ff] transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-[#a882ff] transition-colors" href="#">GitHub</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-tight text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500 font-mono">
<li><a className="hover:text-[#a882ff] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#a882ff] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#a882ff] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#a882ff] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs font-mono text-slate-400">
                        © 2024 Nexora Inc. All rights reserved.
                    </div>
<div className="flex items-center gap-6 text-xs font-mono text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<div className="flex items-center gap-4 ml-4">
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}

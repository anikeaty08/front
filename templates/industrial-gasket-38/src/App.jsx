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



        const scrollContainer = document.getElementById('main-scroll');
        const machineModel = document.getElementById('machine-model');
        const heroText = document.getElementById('hero-text');
        const detailsOverlay = document.getElementById('details-overlay');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const containerHeight = scrollContainer.offsetHeight - window.innerHeight;
            
            // Normalize scroll progress 0 to 1
            const progress = Math.min(Math.max(scrollY / containerHeight, 0), 1);

            // 1. Text Fade Out
            if (progress < 0.2) {
                heroText.style.opacity = 1 - (progress * 5);
                heroText.style.transform = `translateY(${progress * -50}px)`;
            } else {
                heroText.style.opacity = 0;
            }

            // 2. Machine Transform (Zoom & Rotate to Top-Down)
            // Initial: rotateX(55deg) rotateZ(-30deg) translateX(50px)
            // Target: rotateX(0deg) rotateZ(0deg) scale(1.5) (Top down view of the bed)
            
            const rotateX = 55 - (progress * 55); // Goes to 0 (flat top down)
            const rotateZ = -30 + (progress * 30); // Goes to 0
            const scale = 1 + (progress * 1.5); // Zooms in
            const translateY = progress * -50; // Centers it

            if (progress < 0.8) {
                machineModel.style.transform = `
                    rotateX(${rotateX}deg) 
                    rotateZ(${rotateZ}deg) 
                    translateX(50px)
                    translateY(${translateY}px)
                    scale(${scale})
                `;
            }

            // 3. Overlay Fade In
            if (progress > 0.6) {
                detailsOverlay.classList.remove('hidden-content');
                detailsOverlay.classList.add('visible-content');
            } else {
                detailsOverlay.classList.remove('visible-content');
                detailsOverlay.classList.add('hidden-content');
            }
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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-sm">D</div>
<span className="font-semibold tracking-tight text-slate-900">Delta Rubber</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Products</a>
<a className="hover:text-slate-900 transition-colors" href="#">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#">Sectors</a>
</div>
<button className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors">
                Get Quote
            </button>
</div>
</nav>

<div className="scroll-container" id="main-scroll">
<div className="sticky-wrapper flex items-center justify-center bg-white">

<div className="absolute z-20 text-center max-w-3xl px-6 fade-element visible-content" id="hero-text" style={{top: '20%'}}>
<div className="inline-block px-3 py-1 mb-6 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-medium tracking-wide uppercase">
                    Industrial Rubber Manufacturers
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    Precision Gaskets.<br/>
<span className="text-slate-400">Digital Speed.</span>
</h1>
<p className="text-lg text-slate-600 font-light mb-8 max-w-xl mx-auto">
                    We utilise advanced Zund digital cutting technology to manufacture rubber gaskets with micron-level accuracy and zero tooling costs.
                </p>
<div className="flex justify-center gap-4">
<button className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                        Start Your Order
                    </button>
<button className="bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-full font-medium hover:bg-slate-50 transition-colors">
                        View Capabilities
                    </button>
</div>
</div>

<div className="relative w-full h-full flex items-center justify-center viewport-3d overflow-hidden">
<div className="zund-machine" id="machine-model">

<div className="base-plate"></div>
<div className="base-side"></div>
<div className="base-front"></div>

<div className="rail-left"></div>
<div className="rail-right"></div>

<div className="bed-surface">

<div className="material-sheet">

<svg className="cut-paths" preserveaspectratio="none" viewbox="0 0 100 100">

<rect className="cut-path-line" height="30" rx="2" width="30" x="10" y="10"></rect>
<circle className="cut-path-line" cx="25" cy="25" r="10"></circle>

<circle className="cut-path-line" cx="70" cy="50" r="20" style={{animationDelay: '-1s'}}></circle>
<circle className="cut-path-line" cx="70" cy="50" r="12" style={{animationDelay: '-1s'}}></circle>
<circle className="cut-path-line" cx="70" cy="35" r="2" style={{animationDelay: '-1s'}}></circle>
<circle className="cut-path-line" cx="70" cy="65" r="2" style={{animationDelay: '-1s'}}></circle>
<circle className="cut-path-line" cx="55" cy="50" r="2" style={{animationDelay: '-1s'}}></circle>
<circle className="cut-path-line" cx="85" cy="50" r="2" style={{animationDelay: '-1s'}}></circle>
</svg>
</div>
</div>

<div className="gantry-assembly">
<div className="gantry-beam-top"></div>
<div className="gantry-beam-front">
<div className="logo-strip"></div>
</div>

<div className="head-module">
<div className="w-8 h-8 rounded-full border border-slate-200 mb-4 bg-slate-50 flex items-center justify-center">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
</div>
<div className="tool-tip"></div>
</div>
</div>

<div className="absolute right-[-100px] top-[50px] w-[60px] h-[100px] bg-slate-800 rounded-lg transform translateZ(20px) rotateY(-20deg) border border-slate-700 shadow-xl flex flex-col items-center p-2">
<div className="w-full h-[60px] bg-black border border-slate-600 rounded mb-2 overflow-hidden relative">
<div className="absolute inset-0 bg-green-500/20 animate-pulse"></div>
</div>
<div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
</div>
</div>
</div>

<div className="absolute inset-0 z-30 pointer-events-none hidden-content flex items-center justify-center bg-white/80 backdrop-blur-md" id="details-overlay">
<div className="max-w-7xl w-full px-6 grid md:grid-cols-2 gap-12 items-center pointer-events-auto pt-24">
<div>
<div className="text-red-600 font-bold tracking-widest text-xs uppercase mb-4">Process</div>
<h2 className="text-4xl font-semibold text-slate-900 mb-6 tracking-tight">From CAD to Cut in Minutes.</h2>
<p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                            Our digital cutting workflow removes the need for expensive cutting dies. We import your DXF files directly into our nesting software, ensuring maximum material yield and instant production readiness.
                        </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
<iconify-icon icon="lucide:file-code" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Digital Workflow</h4>
<p className="text-sm text-slate-500">Upload DXF, DWG, or PDF drawings.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
<iconify-icon icon="lucide:maximize" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Any Size, Any Shape</h4>
<p className="text-sm text-slate-500">Bed size up to 3000mm x 2000mm.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="text-slate-400 mb-2"><iconify-icon icon="lucide:ruler" width="24"></iconify-icon></div>
<div className="text-2xl font-bold text-slate-900 mb-1">±0.1mm</div>
<div className="text-xs text-slate-500 font-medium">Cutting Tolerance</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="text-slate-400 mb-2"><iconify-icon icon="lucide:clock" width="24"></iconify-icon></div>
<div className="text-2xl font-bold text-slate-900 mb-1">24h</div>
<div className="text-xs text-slate-500 font-medium">Rapid Turnaround</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="text-slate-400 mb-2"><iconify-icon icon="lucide:layers" width="24"></iconify-icon></div>
<div className="text-2xl font-bold text-slate-900 mb-1">25mm</div>
<div className="text-xs text-slate-500 font-medium">Max Thickness</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="text-slate-400 mb-2"><iconify-icon icon="lucide:check-circle" width="24"></iconify-icon></div>
<div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
<div className="text-xs text-slate-500 font-medium">Quality Checked</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-semibold text-slate-900 mb-12">Material Stock</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="aspect-[4/3] bg-slate-50 rounded-lg mb-4 overflow-hidden relative border border-slate-100">
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-32 h-32 bg-slate-800 shadow-xl rounded transform rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>
</div>
</div>
<h4 className="font-medium text-slate-900">Neoprene (CR)</h4>
<p className="text-sm text-slate-500 mt-1">General purpose, weather resistant.</p>
</div>

<div className="group">
<div className="aspect-[4/3] bg-slate-50 rounded-lg mb-4 overflow-hidden relative border border-slate-100">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 bg-orange-600/90 shadow-xl rounded transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
</div>
</div>
<h4 className="font-medium text-slate-900">Silicone Rubber</h4>
<p className="text-sm text-slate-500 mt-1">High temp, FDA approved grades.</p>
</div>

<div className="group">
<div className="aspect-[4/3] bg-slate-50 rounded-lg mb-4 overflow-hidden relative border border-slate-100">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 bg-black shadow-xl rounded border-t-4 border-yellow-400 transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
</div>
</div>
<h4 className="font-medium text-slate-900">Nitrile (NBR)</h4>
<p className="text-sm text-slate-500 mt-1">Oil and fuel resistant.</p>
</div>

<div className="group">
<div className="aspect-[4/3] bg-slate-50 rounded-lg mb-4 overflow-hidden relative border border-slate-100">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 bg-slate-300 shadow-xl rounded border-2 border-slate-400 border-dashed transform -rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>
</div>
</div>
<h4 className="font-medium text-slate-900">EPDM</h4>
<p className="text-sm text-slate-500 mt-1">UV and Ozone resistant.</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
<p>© 2024 Delta Rubber Limited.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-900" href="#">Contact</a>
<a className="hover:text-slate-900" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}

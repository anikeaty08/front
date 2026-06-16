import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



tailwind.config = {
theme: {
extend: {
colors: {
slate: {
950: '#ffffff',
900: '#ffffff',
800: '#e8dbca',
700: '#D9A577',
600: '#D97B66',
500: '#8C5C32',
400: '#6b4524',
300: '#4a2f18',
200: '#2b1a0b',
100: '#140c06',
50: '#000000'
},
white: '#1c1006',
amber: {
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
300: '#fda4af',
400: '#fb7185',
500: '#A60321',
600: '#8a021b',
700: '#700115',
800: '#5c0111',
900: '#4a010e',
950: '#2e0008'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          (function(){
            const filters = document.querySelectorAll('#project-filters .filter-btn');
            const items = document.querySelectorAll('#projects-grid .project-item');
            filters.forEach(function(btn){
              btn.addEventListener('click', function(){
                const filter = btn.getAttribute('data-filter');
                filters.forEach(function(b){
                  b.classList.remove('bg-white/10','text-white','border-white/10');
                  b.classList.add('bg-slate-900','text-slate-400','border-white/5');
                });
                btn.classList.remove('bg-slate-900','text-slate-400','border-white/5');
                btn.classList.add('bg-white/10','text-white','border-white/10');
                items.forEach(function(item){
                  if(filter === 'all' || item.getAttribute('data-category') === filter){
                    item.style.display = '';
                  } else {
                    item.style.display = 'none';
                  }
                });
              });
            });
          })();
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
<iconify-icon className="text-slate-950 text-lg" icon="solar:truck-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<a className="text-lg font-semibold tracking-tight text-white uppercase" href="#">
              MILES
            </a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium hover:text-amber-500 transition-colors" href="services.html">
              Services
            </a>
<a className="text-sm font-medium hover:text-amber-500 transition-colors" href="equipment.html">
              Equipment
            </a>
<a className="text-sm font-medium hover:text-amber-500 transition-colors" href="brochure.html">
              Brochure
            </a>
<a className="text-sm font-medium hover:text-amber-500 transition-colors" href="about.html">
              About
            </a>
<a className="text-sm font-medium hover:text-amber-500 transition-colors" href="contact.html">
              Contact
            </a>
<a className="bg-white text-slate-950 px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-500 transition-colors" href="contact.html">
              Request Quote
            </a>
</div>

<div className="md:hidden flex items-center relative">
<label className="cursor-pointer text-white p-2" htmlFor="mobile-menu-toggle">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</label>
<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>

<div className="hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-white/10 flex-col py-4 px-4 shadow-2xl z-50" id="mobile-menu">
<a className="py-3 text-sm font-medium text-white border-b border-white/5" href="services.html">
                Services
              </a>
<a className="py-3 text-sm font-medium text-white border-b border-white/5" href="equipment.html">
                Equipment
              </a>
<a className="py-3 text-sm font-medium text-white border-b border-white/5" href="brochure.html">
                Brochure
              </a>
<a className="py-3 text-sm font-medium text-white border-b border-white/5" href="about.html">
                About
              </a>
<a className="py-3 text-sm font-medium text-white" href="contact.html">
                Contact
              </a>
</div>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden ambient-bg border-b border-white/5">
<div className="absolute inset-0 grid-pattern opacity-50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
            Available for regional deployment
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
            Heavy Lifting, Transport &amp;
            <br className="hidden lg:block"/>
            Industrial Equipment Services
            <br className="hidden lg:block"/>
<span className="text-slate-500">Across the Caribbean.</span>
</h1>
<p className="text-lg lg:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            Based in Curaçao since 1994, Miles Trucking &amp; Heavy Equipment
            Services delivers safe, reliable crane, heavy transport, and
            industrial solutions for oil &amp; gas, refinery, wind energy, and
            infrastructure projects across the Caribbean and Mexico.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-20">
<a className="inline-flex justify-center items-center gap-2 bg-amber-500 text-slate-950 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-amber-400 transition-colors" href="contact.html">
              Request a Quote
              <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white/5 text-white border border-white/10 px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors" href="equipment.html">
              View Equipment
              <iconify-icon icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-transparent text-amber-500 border border-amber-500/20 px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-500/10 transition-colors" href="brochure.html">
              Download Brochure
              <iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
<div>
<div className="text-3xl font-semibold tracking-tight text-white mb-1">
              1994
            </div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Founded In Curaçao
            </div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-white mb-1">
              30+
            </div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Years Experience
            </div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-white mb-1">
              600+
            </div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Projects Executed
            </div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-amber-500 mb-1">
              24k
            </div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Hours Zero Accidents
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
              Core Services
            </h2>
<p className="text-base text-slate-400 font-light">
              Comprehensive industrial solutions tailored for complex
              requirements, delivered with uncompromising safety standards.
            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-400" href="services.html">
            View all services
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 transition-colors group">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<iconify-icon className="text-2xl text-slate-300 group-hover:text-amber-500" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Crane Rental &amp; Lifting
            </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Versatile fleet of cranes for diverse lifting operations, operated
              by certified professionals.
            </p>
</div>
<div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 transition-colors group">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<iconify-icon className="text-2xl text-slate-300 group-hover:text-amber-500" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Heavy Transport</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Specialized logistics and routing for oversized loads and heavy
              machinery across the region.
            </p>
</div>
<div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 transition-colors group">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<iconify-icon className="text-2xl text-slate-300 group-hover:text-amber-500" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Equipment Rental
            </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Leasing of industrial equipment, vehicles, and
              standard/specialized containers.
            </p>
</div>
<div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 transition-colors group">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<iconify-icon className="text-2xl text-slate-300 group-hover:text-amber-500" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Industrial Construction
            </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Support for plant shutdowns, maintenance, and facility
              construction projects.
            </p>
</div>
<div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 transition-colors group">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<iconify-icon className="text-2xl text-slate-300 group-hover:text-amber-500" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Infrastructure &amp; Pipelines
            </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Execution of water, sewerage, and pipeline infrastructure
              developments.
            </p>
</div>
<div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 transition-colors group">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<iconify-icon className="text-2xl text-slate-300 group-hover:text-amber-500" icon="solar:recycling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Demolition &amp; Recycling
            </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Safe demolition services and scrap recycling via Antillean Scrap
              Company.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-900/30 border-y border-white/5" id="equipment">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
              Equipment Fleet
            </h2>
<p className="text-base text-slate-400 font-light">
              Maintained to the highest standards for optimal performance and
              safety.
            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-400" href="equipment.html">
            Request full catalog
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-slate-950 border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-white/10 transition-colors">
<div className="aspect-[4/3] bg-slate-900 flex items-center justify-center relative group">
<img alt="Grove GMK 4100L" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://milestrucking.net/assets/images/equipment/4100.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all" href="#contact">
                  Request Availability
                </a>
</div>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="text-xs font-medium text-slate-500 mb-1">
                  Mobile Crane
                </div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">
                  Grove GMK 4100L
                </h4>
</div>
</div>
</div>
<div className="bg-slate-950 border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-white/10 transition-colors">
<div className="aspect-[4/3] bg-slate-900 flex items-center justify-center relative group">
<img alt="Grove GMK 4075-1" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://milestrucking.net/assets/images/equipment/4075_1.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all" href="#contact">
                  Request Availability
                </a>
</div>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="text-xs font-medium text-slate-500 mb-1">
                  Mobile Crane
                </div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">
                  Grove GMK 4075-1
                </h4>
</div>
</div>
</div>
<div className="bg-slate-950 border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-white/10 transition-colors">
<div className="aspect-[4/3] bg-slate-900 flex items-center justify-center relative group">
<img alt="Liebherr LTM-1080" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://milestrucking.net/assets/images/equipment/1600.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all" href="#contact">
                  Request Availability
                </a>
</div>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="text-xs font-medium text-slate-500 mb-1">
                  Mobile Crane
                </div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">
                  Liebherr LTM-1080
                </h4>
</div>
</div>
</div>
<div className="bg-slate-950 border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-white/10 transition-colors">
<div className="aspect-[4/3] bg-slate-900 flex items-center justify-center relative group">
<img alt="Sumitomo SC 800" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://milestrucking.net/assets/images/equipment/800.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all" href="#contact">
                  Request Availability
                </a>
</div>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="text-xs font-medium text-slate-500 mb-1">
                  Crawler Crane
                </div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">
                  Sumitomo SC 800
                </h4>
</div>
</div>
</div>

<div className="bg-slate-950 border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-white/10 transition-colors">
<div className="aspect-[4/3] bg-slate-900 flex items-center justify-center relative group">
<img alt="Terex Demag AC 25" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://milestrucking.net/assets/images/equipment/demag25.png"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all" href="#contact">
                  Request Availability
                </a>
</div>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="text-xs font-medium text-slate-500 mb-1">
                  Mobile Crane
                </div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">
                  Terex Demag AC 25
                </h4>
</div>
</div>
</div>
<div className="bg-slate-950 border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-white/10 transition-colors">
<div className="aspect-[4/3] bg-slate-900 flex items-center justify-center relative group">
<img alt="Mercedes Actros 4160" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://milestrucking.net/assets/images/equipment/4160.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all" href="#contact">
                  Request Availability
                </a>
</div>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="text-xs font-medium text-slate-500 mb-1">
                  Heavy Truck
                </div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">
                  Mercedes Actros 4160
                </h4>
</div>
</div>
</div>
<div className="bg-slate-950 border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-white/10 transition-colors">
<div className="aspect-[4/3] bg-slate-900 flex items-center justify-center relative group">
<img alt="DAF CF 85.360 / 85.380" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://milestrucking.net/assets/images/equipment/360.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all" href="#contact">
                  Request Availability
                </a>
</div>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="text-xs font-medium text-slate-500 mb-1">
                  Heavy Truck
                </div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">
                  DAF CF 85.360 / 85.380
                </h4>
</div>
</div>
</div>
<div className="bg-slate-950 border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-white/10 transition-colors">
<div className="aspect-[4/3] bg-slate-900 flex items-center justify-center relative group">
<img alt="Linde H80D-03" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://milestrucking.net/assets/images/equipment/1588.jpg"/>
<div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all" href="#contact">
                  Request Availability
                </a>
</div>
</div>
<div className="p-5 flex-1 flex flex-col justify-between">
<div>
<div className="text-xs font-medium text-slate-500 mb-1">
                  Forklift
                </div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">
                  Linde H80D-03
                </h4>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 relative overflow-hidden ambient-bg border-y border-white/5" id="brochure">
<div className="absolute inset-0 grid-pattern opacity-30"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium mb-6">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Company Brochure
            </div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
              Everything you need to know about Miles
            </h2>
<p className="text-base text-slate-400 font-light mb-8 leading-relaxed">
              Download our full company brochure for a comprehensive overview of
              our services, fleet, certifications, safety record, and
              operational footprint across the Caribbean and Mexico.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-amber-500 text-slate-950 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-amber-400 transition-colors" href="brochure.html">
                View Brochure
                <iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white/5 text-white border border-white/10 px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors" href="brochure.pdf" target="_blank">
                Download PDF
                <iconify-icon icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-900/60 border border-white/5 rounded-xl p-6 flex flex-col gap-3">
<iconify-icon className="text-3xl text-amber-500" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-white">
                Full Service Catalog
              </div>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                Detailed breakdown of all industrial service lines and
                capabilities.
              </p>
</div>
<div className="bg-slate-900/60 border border-white/5 rounded-xl p-6 flex flex-col gap-3">
<iconify-icon className="text-3xl text-amber-500" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-white">
                Equipment Datasheets
              </div>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                Technical specifications for our full crane and heavy transport
                fleet.
              </p>
</div>
<div className="bg-slate-900/60 border border-white/5 rounded-xl p-6 flex flex-col gap-3">
<iconify-icon className="text-3xl text-amber-500" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-white">Safety Standards</div>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                Our safety framework, protocols, and zero-accident track record.
              </p>
</div>
<div className="bg-slate-900/60 border border-white/5 rounded-xl p-6 flex flex-col gap-3">
<iconify-icon className="text-3xl text-amber-500" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-white">
                Regional Presence
              </div>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                Operations across Curaçao, Bonaire, and multiple Mexican states.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative overflow-hidden" id="projects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
<p className="text-base text-slate-400 font-light max-w-2xl">
            A curated selection from over 600 executed projects across diverse
            industrial sectors.
          </p>
</div>

<div className="flex flex-wrap gap-2 mb-10" id="project-filters">
<span className="filter-btn px-3 py-1.5 bg-white/10 text-white text-xs font-medium rounded-md border border-white/10 cursor-pointer transition-colors" data-filter="all">
            All Projects
          </span>
<span className="filter-btn px-3 py-1.5 bg-slate-900 text-slate-400 hover:text-white text-xs font-medium rounded-md border border-white/5 cursor-pointer transition-colors" data-filter="tank">
            Tank Repair &amp; Maintenance
          </span>
<span className="filter-btn px-3 py-1.5 bg-slate-900 text-slate-400 hover:text-white text-xs font-medium rounded-md border border-white/5 cursor-pointer transition-colors" data-filter="refinery">
            Refinery Shutdowns
          </span>
<span className="filter-btn px-3 py-1.5 bg-slate-900 text-slate-400 hover:text-white text-xs font-medium rounded-md border border-white/5 cursor-pointer transition-colors" data-filter="transport">
            Heavy Transport
          </span>
<span className="filter-btn px-3 py-1.5 bg-slate-900 text-slate-400 hover:text-white text-xs font-medium rounded-md border border-white/5 cursor-pointer transition-colors" data-filter="wind">
            Wind Energy
          </span>
<span className="filter-btn px-3 py-1.5 bg-slate-900 text-slate-400 hover:text-white text-xs font-medium rounded-md border border-white/5 cursor-pointer transition-colors" data-filter="infrastructure">
            Infrastructure
          </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">
<div className="project-item border-l border-amber-500/30 pl-5 py-2 hover:border-amber-500 transition-colors" data-category="shipyard">
<div className="text-xs text-amber-500 font-medium mb-1">
              Shipyard / Maintenance
            </div>
<h3 className="text-sm font-medium text-white leading-snug">
              Maintenance and repair works for Damen vessels within the dock
              area
            </h3>
</div>
<div className="project-item border-l border-white/10 pl-5 py-2 hover:border-amber-500 transition-colors" data-category="infrastructure">
<div className="text-xs text-slate-500 font-medium mb-1">
              Infrastructure
            </div>
<h3 className="text-sm font-medium text-white leading-snug">
              Expansion of sewerage system in Belnem and Hato, Bonaire
            </h3>
</div>
<div className="project-item border-l border-white/10 pl-5 py-2 hover:border-amber-500 transition-colors" data-category="construction">
<div className="text-xs text-slate-500 font-medium mb-1">
              Industrial Construction
            </div>
<h3 className="text-sm font-medium text-white leading-snug">
              Construction of a water plant for IDE / WEB Bonaire
            </h3>
</div>
<div className="project-item border-l border-white/10 pl-5 py-2 hover:border-amber-500 transition-colors" data-category="transport">
<div className="text-xs text-slate-500 font-medium mb-1">
              Heavy Transport
            </div>
<h3 className="text-sm font-medium text-white leading-snug">
              Transport from Curaçao port to Mijnmaatschappij Curaçao
            </h3>
</div>
<div className="project-item border-l border-white/10 pl-5 py-2 hover:border-amber-500 transition-colors" data-category="offshore">
<div className="text-xs text-slate-500 font-medium mb-1">
              Offshore Lifting
            </div>
<h3 className="text-sm font-medium text-white leading-snug">
              Lifting work on platform at sea in Bonaire
            </h3>
</div>
<div className="project-item border-l border-white/10 pl-5 py-2 hover:border-amber-500 transition-colors" data-category="wind">
<div className="text-xs text-slate-500 font-medium mb-1">
              Wind Energy
            </div>
<h3 className="text-sm font-medium text-white leading-snug">
              Windmill removal, transportation, and lifting projects
            </h3>
</div>
<div className="project-item border-l border-white/10 pl-5 py-2 hover:border-amber-500 transition-colors" data-category="marine">
<div className="text-xs text-slate-500 font-medium mb-1">
              Marine Logistics
            </div>
<h3 className="text-sm font-medium text-white leading-snug">
              CPA Ferry &amp; Pontoon lifting operations
            </h3>
</div>
<div className="project-item border-l border-white/10 pl-5 py-2 hover:border-amber-500 transition-colors" data-category="construction">
<div className="text-xs text-slate-500 font-medium mb-1">
              Construction
            </div>
<h3 className="text-sm font-medium text-white leading-snug">
              Hospital construction support in Bonaire
            </h3>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-amber-500/10 bg-gradient-to-b from-slate-950 to-slate-900 relative" id="safety">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 text-amber-500 text-xs font-medium uppercase tracking-wider mb-4">
<iconify-icon className="text-base" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Safety &amp; Quality
            </div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
              Zero accidents by design, not by chance.
            </h2>
<p className="text-base text-slate-400 font-light mb-8 leading-relaxed">
              We operate under strict international lifting and rigging
              standards. Every operation begins with risk-based planning and is
              executed by certified, trained operators utilizing a rigorously
              maintained fleet.
            </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 text-xl mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-300">
                  Strict safety protocols and heavy-load handling procedures.
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 text-xl mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-300">
                  Mandatory preventive maintenance on all equipment.
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 text-xl mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-300">
                  Compliance with international standards and environmental
                  responsibility.
                </span>
</li>
</ul>
</div>
<div className="relative">
<div className="aspect-square max-w-md mx-auto rounded-full border border-white/5 bg-slate-900 flex items-center justify-center relative z-10 p-8 shadow-2xl shadow-amber-500/5">
<div className="text-center">
<div className="text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-2">
                  24,000
                  <span className="text-amber-500">.</span>
</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                  Hours Worked
                </div>
<div className="mt-4 inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-1.5 rounded-full text-xs font-semibold">
                  Without Disabling Accidents
                </div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-white/5 border-dashed -z-10 animate-[spin_60s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full border border-white/5 -z-10"></div>
</div>
</div>
</div>
</section>


<section className="py-24 lg:py-32 bg-slate-900/20 border-t border-white/5" id="customers">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Our Clients
          </div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
            Trusted by Industry Leaders
          </h2>
<p className="text-base text-slate-400 font-light">
            For over 30 years, Miles has been the preferred heavy lifting and
            transport partner for the region's most demanding industrial
            operators — from refineries and utilities to offshore platforms and
            government infrastructure projects.
          </p>
</div>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-60 mb-16">
<div className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase hover:text-amber-500 transition-colors">
            Isla Refinery
          </div>
<div className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase hover:text-amber-500 transition-colors">
            Curoil
          </div>
<div className="text-xl md:text-2xl font-bold text-white tracking-widests uppercase hover:text-amber-500 transition-colors">
            Aquaelectra
          </div>
<div className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase hover:text-amber-500 transition-colors">
            Damen
          </div>
<div className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase hover:text-amber-500 transition-colors">
            WEB Bonaire
          </div>
<div className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase hover:text-amber-500 transition-colors">
            PDVSA
          </div>
<div className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase hover:text-amber-500 transition-colors">
            Bopec
          </div>
<div className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase hover:text-amber-500 transition-colors">
            CPA
          </div>
<div className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase hover:text-amber-500 transition-colors">
            IDE
          </div>
<div className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase hover:text-amber-500 transition-colors">
            Hess
          </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
<iconify-icon className="text-2xl text-amber-500 mb-4" icon="solar:oil-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">
              Oil, Gas &amp; Refinery
            </h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">
              Supporting Isla Refinery, Curoil, PDVSA, and Bopec with crane
              operations, heavy transport, and plant shutdown support in Curaçao
              and Venezuela.
            </p>
</div>
<div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
<iconify-icon className="text-2xl text-amber-500 mb-4" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">
              Utilities &amp; Infrastructure
            </h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">
              Partnering with Aquaelectra, WEB Bonaire, and IDE on water plants,
              sewerage expansion, and power infrastructure across the Dutch
              Caribbean.
            </p>
</div>
<div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
<iconify-icon className="text-2xl text-amber-500 mb-4" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">
              Marine &amp; Offshore
            </h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">
              Executing dockyard maintenance, pontoon lifting, and offshore
              platform work for Damen Shipyards, CPA, and Hess across Curaçao
              and Bonaire.
            </p>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors" href="services.html">
            View all projects and clients
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>


<footer className="pt-24 pb-12 bg-slate-950 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid lg:grid-cols-2 gap-12 mb-20 pb-20 border-b border-white/5">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium mb-4">
<iconify-icon icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Get in Touch
            </div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
              Ready to plan your next project?
            </h2>
<p className="text-base text-slate-400 font-light mb-8 leading-relaxed">
              Our team is available to discuss your lifting, transport, or
              industrial service requirements. We respond within 24 hours and
              can mobilize quickly across the Caribbean and Mexico.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-amber-500 text-slate-950 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-amber-400 transition-colors" href="contact.html">
                Request a Quote
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white/5 text-white border border-white/10 px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors" href="mailto:miles@milestrucking.net">
                Send Email
                <iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="bg-slate-900/50 border border-white/5 rounded-xl p-5">
<iconify-icon className="text-xl text-amber-500 mb-3" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs font-medium text-white uppercase tracking-wider mb-2">
                Curaçao (HQ)
              </div>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                Kaya Angel J. Leañez Kv. 97-100
                <br/>
                Willemstad, Curaçao
              </p>
</div>
<div className="bg-slate-900/50 border border-white/5 rounded-xl p-5">
<iconify-icon className="text-xl text-amber-500 mb-3" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs font-medium text-white uppercase tracking-wider mb-2">
                Bonaire
              </div>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                Kaya Neerlandia #32
                <br/>
                Bonaire
              </p>
</div>
<div className="bg-slate-900/50 border border-white/5 rounded-xl p-5">
<iconify-icon className="text-xl text-amber-500 mb-3" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs font-medium text-white uppercase tracking-wider mb-2">
                Mexico
              </div>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                Villahermosa, Tabasco
                <br/>
                Ciudad del Carmen, Campeche
                <br/>
                Tres Valles, Veracruz
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
<iconify-icon className="text-slate-950 text-lg" icon="solar:truck-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-white uppercase">
                MILES
              </span>
</div>
<p className="text-sm text-slate-400 font-light mb-6 max-w-sm">
              Providing specialized heavy transport, crane lifting, and
              industrial services with uncompromising safety and reliability
              since 1994.
            </p>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-slate-300 hover:text-amber-500 transition-colors" href="mailto:miles@milestrucking.net">
<iconify-icon className="text-lg text-slate-500" icon="solar:letter-linear"></iconify-icon>
                miles@milestrucking.net
              </a>
<a className="flex items-center gap-3 text-sm text-slate-300 hover:text-amber-500 transition-colors" href="tel:+59997473486">
<iconify-icon className="text-lg text-slate-500" icon="solar:phone-linear"></iconify-icon>
                +(599-9) 747-3486
              </a>
</div>
<div className="flex gap-4 mt-8">
<a className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors" href="https://www.facebook.com/milestruckingservices/" target="_blank">
<iconify-icon className="text-xl" icon="ri:facebook-fill"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors" href="https://www.instagram.com/milestruckingservices/" target="_blank">
<iconify-icon className="text-xl" icon="ri:instagram-line"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
<ul className="space-y-3">
<li>
<a className="text-xs text-slate-400 hover:text-amber-500 transition-colors font-light" href="services.html">
                  Services &amp; Projects
                </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-amber-500 transition-colors font-light" href="equipment.html">
                  Equipment Fleet
                </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-amber-500 transition-colors font-light" href="about.html">
                  About Miles
                </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-amber-500 transition-colors font-light" href="brochure.html">
                  Company Brochure
                </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-amber-500 transition-colors font-light" href="contact.html">
                  Contact &amp; Offices
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">
              Services
            </h4>
<ul className="space-y-3">
<li>
<a className="text-xs text-slate-400 hover:text-amber-500 transition-colors font-light" href="services.html">
                  Crane Rental &amp; Lifting
                </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-amber-500 transition-colors font-light" href="services.html">
                  Heavy Transport
                </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-amber-500 transition-colors font-light" href="services.html">
                  Equipment Rental
                </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-amber-500 transition-colors font-light" href="services.html">
                  Industrial Construction
                </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-amber-500 transition-colors font-light" href="services.html">
                  Infrastructure &amp; Pipelines
                </a>
</li>
<li>
<a className="text-xs text-slate-400 hover:text-amber-500 transition-colors font-light" href="services.html">
                  Demolition &amp; Recycling
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500 font-light">
            © 2024 Miles Trucking &amp; Heavy Equipment Services. All rights
            reserved.
          </p>
<div className="flex gap-4 text-xs font-light text-slate-500">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}

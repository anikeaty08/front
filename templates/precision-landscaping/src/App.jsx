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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          function setTab(tab) {
            const turfBtn = document.getElementById('tab-turf');
            const concreteBtn = document.getElementById('tab-concrete');
            const turfGrid = document.getElementById('grid-turf');
            const concreteGrid = document.getElementById('grid-concrete');

            const active = "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-green-500 text-white border border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]";
            const inactive = "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 bg-transparent";

            const show = (el) => {
              el.classList.remove('hidden');
              requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0px)';
              });
            };

            const hide = (el) => {
              el.style.opacity = '0';
              el.style.transform = 'translateY(8px)';
              setTimeout(() => {
                el.classList.add('hidden');
              }, 260);
            };

            if (tab === 'turf') {
              turfBtn.className = active;
              concreteBtn.className = inactive;

              if (!concreteGrid.classList.contains('hidden')) hide(concreteGrid);
              show(turfGrid);
            } else {
              concreteBtn.className = active;
              turfBtn.className = inactive;

              if (!turfGrid.classList.contains('hidden')) hide(turfGrid);
              show(concreteGrid);
            }
          }

          window.addEventListener('DOMContentLoaded', () => {
            const turfGrid = document.getElementById('grid-turf');
            const concreteGrid = document.getElementById('grid-concrete');
            if (turfGrid) {
              turfGrid.style.opacity = '1';
              turfGrid.style.transform = 'translateY(0px)';
            }
            if (concreteGrid) {
              concreteGrid.style.opacity = '0';
              concreteGrid.style.transform = 'translateY(8px)';
            }
            setTab('turf');
          });
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://res.cloudinary.com/diyzkopah/video/upload/v1778552949/hf_20260512_022239_62d6f9ef-2524-453b-8210-88cf443a4212_ksj3ax.mp4"></video>
</div>

<header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="text-xl font-semibold tracking-tighter text-white uppercase">
            PRECISION
          </span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#about">
            About
          </a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#work">
            Projects
          </a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#process">
            Process
          </a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-zinc-900 rounded-full transition-colors bg-green-400 hover:bg-green-300" href="#contact">
          Get Quote
        </a>
<button className="md:hidden text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex justify-center pt-20 overflow-hidden bg-transparent items-end pb-24">
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 hover:shadow-[0_0_40px_0px_rgba(52,211,153,0.6)] transition-all duration-300 hover:bg-green-300 sm:w-auto text-sm font-medium text-green-950 bg-green-700 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_30px_-5px_rgba(52,211,153,0.4)]" href="#contact">
            Get a Free Quote
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm" href="#work">
            View Our Work
          </a>
</div>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-16 text-zinc-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-400" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-wide">
              Licensed &amp; Insured
            </span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-400" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-wide">Local Experts</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-400" icon="solar:hearts-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-wide">
              5-Star Satisfaction
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 relative" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10 shadow-2xl shadow-zinc-200/50">
<iframe allowtransparency="true" className="w-full h-full border-0" frameborder="0" scrolling="no" src="https://www.instagram.com/p/DW3EZgxgfRI/embed"></iframe>
</div>
<div className="absolute -bottom-8 -right-8 w-64 h-64 bg-zinc-900/60 rounded-full border border-white/10 -z-10"></div>
<div className="absolute -top-8 -left-8 w-32 h-32 rounded-full -z-10 bg-green-950/40"></div>
</div>
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            Craftsmanship You Can See.
            <br/>
<span className="text-zinc-400">Precision You Can Feel.</span>
</h2>
<div className="space-y-6 text-base font-normal text-zinc-300 leading-relaxed mb-10">
<p className="">
              Precision Turf &amp; Stone is a premier landscape design and
              installation company specializing in creating refined, high-end
              outdoor living spaces. We deliver expert craftsmanship in
              artificial turf, custom paver systems, decorative concrete,
              natural flagstone, engineered retaining walls, asphalt paving, and
              detailed landscape maintenance.
            </p>
<p className="">
              Every project is approached with precision, quality materials, and
              a focus on long-lasting beauty and functionality. We proudly serve
              Monterey County and Santa Cruz County, providing elevated outdoor
              environments that enhance property value and curb appeal. From
              modern clean designs to timeless natural landscapes, we bring your
              vision to life with professionalism, detail, and excellence.
            </p>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl shrink-0 mt-0.5 text-green-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-100">
                Decades of combined installation experience
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl shrink-0 mt-0.5 text-green-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-100">
                Premium, American-made materials
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl shrink-0 mt-0.5 text-green-500" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-100">
                Bespoke design approach for every property
              </span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 border-t border-white/10 turf-texture relative" id="services">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Elevate Your Exterior
          </h2>
<p className="text-base font-normal text-zinc-300">
            Comprehensive turf and hardscape solutions engineered for beauty,
            durability, and minimal maintenance.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-zinc-950/60 p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.12)] overflow-hidden hover:border-green-500/30">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon className="text-8xl text-green-600" icon="solar:leaf-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-green-950/40 group-hover:border-green-500/20">
<iconify-icon className="text-xl text-zinc-700 transition-colors group-hover:text-green-600" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">
              Artificial Turf Installation
            </h3>
<p className="text-sm font-normal text-zinc-300 leading-relaxed">
              Ultra-realistic, high-density turf that stays perfectly green
              year-round without water or mowing.
            </p>
</div>

<div className="group relative bg-zinc-950/60 p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.12)] overflow-hidden hover:border-green-500/30">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-green-950/40 group-hover:border-green-500/20">
<iconify-icon className="text-xl text-zinc-700 transition-colors group-hover:text-green-600" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">
              Custom Landscape Design
            </h3>
<p className="text-sm font-normal text-zinc-300 leading-relaxed">
              Full-scale spatial planning to seamlessly blend turf, flora, and
              functional outdoor living areas.
            </p>
</div>

<div className="group relative bg-zinc-950/60 p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.12)] overflow-hidden hover:border-green-500/30">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-green-950/40 group-hover:border-green-500/20">
<iconify-icon className="text-xl text-zinc-700 transition-colors group-hover:text-green-600" icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">
              Professional Putting Greens
            </h3>
<p className="text-sm font-normal text-zinc-300 leading-relaxed">
              Tournament-quality synthetic greens with custom breaks,
              undulations, and fringe detailing.
            </p>
</div>

<div className="group relative bg-zinc-950/60 p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.12)] overflow-hidden hover:border-green-500/30">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-green-950/40 group-hover:border-green-500/20">
<iconify-icon className="text-xl text-zinc-700 transition-colors group-hover:text-green-600" icon="solar:paw-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">
              Pet-Friendly Solutions
            </h3>
<p className="text-sm font-normal text-zinc-300 leading-relaxed">
              Highly durable, non-toxic turf with advanced drainage systems to
              neutralize odors and handle active pets.
            </p>
</div>

<div className="group relative bg-zinc-950/60 p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.12)] overflow-hidden md:col-span-2 lg:col-span-2 hover:border-green-500/30">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-green-950/40 group-hover:border-green-500/20">
<iconify-icon className="text-xl text-zinc-700 transition-colors group-hover:text-green-600" icon="solar:home-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">
                  Hardscape Integration
                </h3>
<p className="text-sm font-normal text-zinc-300 leading-relaxed max-w-2xl">
                  We don't just lay turf; we build environments. Seamlessly
                  integrating custom stone work, paver pathways, elegant edging,
                  and retaining walls to complete the architectural flow of your
                  property.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 text-white overflow-hidden relative" id="work">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] via-zinc-950 to-zinc-950 from-green-900/20"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center flex flex-col items-center justify-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            See Our Transformations
          </h2>
<p className="text-base font-normal text-zinc-400">
            Witness the precision process from dirt to perfection.
          </p>
</div>

<div className="flex justify-center mb-12 relative z-20 gap-4">
<button className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-green-500 text-white border border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]" id="tab-turf" onclick="setTab('turf')">
            Turf
          </button>
<button className="transition-all duration-300 hover:text-white hover:border-zinc-500 text-sm font-medium text-zinc-400 bg-transparent border-zinc-700 border rounded-full pt-2.5 pr-6 pb-2.5 pl-6" id="tab-concrete" onclick="setTab('concrete')">
            Concrete
          </button>
</div>
<div className="relative w-full" id="gallery-wrapper">
<div className="overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-8 pt-4 transition-all duration-300" id="grid-turf" style={{opacity: '1', transform: 'translateY(0px)'}}>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84b5e6c1-cc7e-4697-8a90-56c6c0ae24de_800w.jpg"/>
<img alt="Before" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fb21020-32a2-4992-9bea-90336ec46e3a_800w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p = this.value + '%'; this.parentElement.querySelector('.before-img').style.clipPath = `inset(0 ${100 - this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left = p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Backyard Renovation
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    Complete turf and hardscape integration
                  </p>
</div>
</div>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63105438-210a-44a0-a3e6-5231b13788ba_800w.jpg"/>
<img alt="Before" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce4011e4-805e-4b0e-a679-3baa1f76c0ed_800w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p = this.value + '%'; this.parentElement.querySelector('.before-img').style.clipPath = `inset(0 ${100 - this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left = p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Front Yard Elevation
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    Drought-tolerant luxury synthetic lawn
                  </p>
</div>
</div>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72ef35c7-5d30-4dbb-a792-f70e4d59e616_800w.jpg"/>
<img alt="Before" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6881a460-7b25-48fd-b86d-f881587c6ca1_800w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p = this.value + '%'; this.parentElement.querySelector('.before-img').style.clipPath = `inset(0 ${100 - this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left = p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Custom Putting Green
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    Professional grade backyard installation
                  </p>
</div>
</div>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79d17d1b-bbf3-417c-96f0-17f26064c264_800w.jpg"/>
<img alt="Before" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba9b92bd-d588-49a7-bae1-2e3bb938fe66_800w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p = this.value + '%'; this.parentElement.querySelector('.before-img').style.clipPath = `inset(0 ${100 - this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left = p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Pet-Friendly Lawn
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    Durable &amp; easy-to-clean turf system
                  </p>
</div>
</div>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2e5bbed-1220-4480-8b67-5b0d03a5f546_800w.jpg"/>
<img alt="Before" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41994b6c-beea-49a4-b561-fc2484a18407_800w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p = this.value + '%'; this.parentElement.querySelector('.before-img').style.clipPath = `inset(0 ${100 - this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left = p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Patio Surround
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    Seamless edge detailing around stone
                  </p>
</div>
</div>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/949707f2-7dd8-48bf-a869-d196160b9d75_800w.jpg"/>
<img alt="Before" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca57b574-cc28-419c-b3fe-8b7f71abc80c_800w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p = this.value + '%'; this.parentElement.querySelector('.before-img').style.clipPath = `inset(0 ${100 - this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left = p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Courtyard Revamp
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    Lush green aesthetic all year round
                  </p>
</div>
</div>
</div>
<div className="hidden grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-8 pt-4 transition-all duration-300" id="grid-concrete" style={{opacity: '0', transform: 'translateY(8px)'}}>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After concrete walkway" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b856787-482b-4b79-9f0e-26a2a5125434_1600w.jpg"/>
<img alt="Before concrete walkway" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82261158-6036-4f51-8763-30f6f39f2dcd_800w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p=this.value+'%'; this.parentElement.querySelector('.before-img').style.clipPath=`inset(0 ${100-this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left=p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Decorative Walkway
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    Textured concrete path integration
                  </p>
</div>
</div>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After pool deck" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b7175af-7f74-4097-9ab5-c55134c973ad_1600w.jpg"/>
<img alt="Before pool deck" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6271eecc-afa5-4e15-8db3-b59ea6c209c2_1600w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p=this.value+'%'; this.parentElement.querySelector('.before-img').style.clipPath=`inset(0 ${100-this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left=p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Pool Deck Resurfacing
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    Slip-resistant decorative finish
                  </p>
</div>
</div>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After patio" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0faa3236-b2db-46d5-8228-eac03c7f77ae_3840w.jpg"/>
<img alt="Before patio" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e9bd56f7-a354-444f-b821-05b5d3b7ec60_800w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p=this.value+'%'; this.parentElement.querySelector('.before-img').style.clipPath=`inset(0 ${100-this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left=p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Modern Patio
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    Clean lines with a smooth finish
                  </p>
</div>
</div>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After driveway" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ca009cd-9e55-44df-b2cb-a9966636c5c9_1600w.jpg"/>
<img alt="Before driveway" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9eb87353-7c13-4f99-869a-a0ec4074d62e_3840w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p=this.value+'%'; this.parentElement.querySelector('.before-img').style.clipPath=`inset(0 ${100-this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left=p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Driveway Refresh
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    New pour with crisp edging
                  </p>
</div>
</div>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After steps" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53b7ac60-38e2-419f-8bb0-195593ff4a83_3840w.jpg"/>
<img alt="Before steps" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/280e9b50-6432-47f9-871a-e3d016b99946_800w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p=this.value+'%'; this.parentElement.querySelector('.before-img').style.clipPath=`inset(0 ${100-this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left=p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Entry Steps
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    Safer access with a refined look
                  </p>
</div>
</div>

<div className="group flex flex-col gap-5">
<div className="aspect-[4/3] bg-zinc-900 rounded-2xl relative overflow-hidden border border-white/5 transition-all duration-500 shadow-2xl shadow-black/50 hover:border-green-500/50 hover:-translate-y-1">
<img alt="After entertaining area" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e84215d1-b0a8-47f8-b15c-8d11e650aacc_3840w.jpg"/>
<img alt="Before entertaining area" className="before-img absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8edb62ac-1541-42c8-b19d-73cd68338de1_800w.jpg" style={{clipPath: 'inset(0 50% 0 0)'}}/>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-pan-x" max="100" min="0" oninput="const p=this.value+'%'; this.parentElement.querySelector('.before-img').style.clipPath=`inset(0 ${100-this.value}% 0 0)`; this.parentElement.querySelector('.slider-line').style.left=p;" type="range" value="50"/>
<div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 opacity-80 group-hover:opacity-100" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-zinc-900 gap-0.5 transition-transform group-hover:scale-110">
<iconify-icon className="text-[12px]" icon="lucide:chevron-left"></iconify-icon>
<iconify-icon className="text-[12px]" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 border border-white/10 shadow-lg">
                    Before
                  </div>
<div className="absolute top-4 right-4 backdrop-blur-md text-green-50 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none z-10 bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-green-400">
                    After
                  </div>
</div>
<div className="px-2 text-center">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Outdoor Lounge Slab
                  </h3>
<p className="text-sm text-zinc-400 mt-1">
                    Poured pad for seating &amp; fire feature
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Our Proven Process
          </h2>
<p className="text-base font-normal text-zinc-300">
            A systematic approach to ensure zero compromises and a flawless
            final result.
          </p>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="hidden md:block absolute left-[28px] top-4 bottom-4 w-px bg-white/10"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 shrink-0 relative z-10 transition-colors duration-300 group-hover:border-green-500/30 group-hover:bg-green-950/40">
<iconify-icon className="transition-colors text-xl text-zinc-600 group-hover:text-green-600" height="20" icon="solar:clipboard-list-linear" strokeWidth="1.5" style={{color: 'rgb(5, 150, 105)'}} width="20"></iconify-icon>
</div>
<div className="pt-2">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
                  1. Consultation
                </h3>
<p className="text-sm font-normal text-zinc-300 leading-relaxed">
                  We assess your property, discuss your vision, address drainage
                  needs, and select the optimal turf variant for your specific
                  lifestyle and aesthetic goals.
                </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 shrink-0 relative z-10 transition-colors duration-300 group-hover:border-green-500/30 group-hover:bg-green-950/40">
<iconify-icon className="text-xl text-zinc-600 transition-colors group-hover:text-green-600" icon="solar:ruler-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="pt-2">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
                  2. Design &amp; Planning
                </h3>
<p className="text-sm font-normal text-zinc-300 leading-relaxed">
                  Detailed measurements and spatial mapping. We integrate
                  hardscape elements, planters, and edging into a cohesive
                  master plan.
                </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
<div className="flex shrink-0 z-10 transition-colors duration-300 bg-white/5 w-14 h-14 border-white/10 border rounded-full relative items-center justify-center group-hover:border-green-500/30 group-hover:bg-green-950/40">
<iconify-icon className="text-xl text-zinc-600 transition-colors group-hover:text-green-600" icon="solar:hammer-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="transition-colors text-xl text-zinc-600 group-hover:text-green-600" height="20" icon="solar:clipboard-list-linear" strokeWidth="1.5" style={{color: 'rgb(5, 150, 105)'}} width="20"></iconify-icon>
</div>
<div className="pt-2">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
                  3. Ground Preparation
                </h3>
<p className="text-sm font-normal text-zinc-300 leading-relaxed">
                  The foundation is everything. We excavate, grade, install
                  commercial weed barriers, and compact a specialized aggregate
                  base for perfect leveling and drainage.
                </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 shrink-0 relative z-10 transition-colors duration-300 group-hover:border-green-500/30 group-hover:bg-green-950/40">
<iconify-icon className="text-xl text-zinc-600 transition-colors group-hover:text-green-600" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="pt-2">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
                  4. Turf Installation
                </h3>
<p className="text-sm font-normal text-zinc-300 leading-relaxed">
                  Precision cutting, invisible seaming, and secure anchoring. We
                  apply specialized infill to keep blades upright and maintain a
                  cool surface temperature.
                </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 shrink-0 relative z-10 transition-colors duration-300 group-hover:border-green-500/30 group-hover:bg-green-950/40">
<iconify-icon className="text-xl text-zinc-600 transition-colors group-hover:text-green-600" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="pt-2">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
                  5. Final Walkthrough
                </h3>
<p className="text-sm font-normal text-zinc-300 leading-relaxed">
                  A meticulous inspection alongside you to ensure every square
                  inch meets our exacting standards and exceeds your
                  expectations.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-y border-white/10">
<div className="relative max-w-7xl mx-auto overflow-hidden">
<div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
<div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">

<div className="flex w-max gap-6 pr-6">

<div className="bg-zinc-950/60 p-8 rounded-2xl border border-white/10 shadow-sm w-[320px] md:w-[400px] shrink-0">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-normal text-zinc-200 leading-relaxed mb-6">
                "Completely transformed our backyard. Looks unreal. The crew was
                professional, fast, and left the site immaculate. Best
                investment we've made in our home."
              </p>
<div>
<p className="text-sm font-semibold text-white">Michael T.</p>
<p className="text-xs text-zinc-400">Monterey, CA</p>
</div>
</div>

<div className="bg-zinc-950/60 p-8 rounded-2xl border border-white/10 shadow-sm w-[320px] md:w-[400px] shrink-0">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-normal text-zinc-200 leading-relaxed mb-6">
                "Their attention to detail is unmatched. The seams are
                invisible, and the edge work around our existing patio is
                flawless. Highly recommend Precision Turf."
              </p>
<div>
<p className="text-sm font-semibold text-white">
                  Sarah &amp; James L.
                </p>
<p className="text-xs text-zinc-400">Santa Cruz, CA</p>
</div>
</div>

<div className="bg-zinc-950/60 p-8 rounded-2xl border border-white/10 shadow-sm w-[320px] md:w-[400px] shrink-0">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-normal text-zinc-200 leading-relaxed mb-6">
                "We wanted a custom putting green and they delivered beyond our
                expectations. Rolls true, looks amazing, and the dog-friendly
                area next to it is perfect."
              </p>
<div>
<p className="text-sm font-semibold text-white">David W.</p>
<p className="text-xs text-zinc-400">Carmel-by-the-Sea, CA</p>
</div>
</div>
</div>

<div aria-hidden="true" className="flex w-max gap-6 pr-6">

<div className="bg-zinc-950/60 p-8 rounded-2xl border border-white/10 shadow-sm w-[320px] md:w-[400px] shrink-0">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-normal text-zinc-200 leading-relaxed mb-6">
                "Completely transformed our backyard. Looks unreal. The crew was
                professional, fast, and left the site immaculate. Best
                investment we've made in our home."
              </p>
<div>
<p className="text-sm font-semibold text-white">Michael T.</p>
<p className="text-xs text-zinc-400">Monterey, CA</p>
</div>
</div>

<div className="bg-zinc-950/60 p-8 rounded-2xl border border-white/10 shadow-sm w-[320px] md:w-[400px] shrink-0">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-normal text-zinc-200 leading-relaxed mb-6">
                "Their attention to detail is unmatched. The seams are
                invisible, and the edge work around our existing patio is
                flawless. Highly recommend Precision Turf."
              </p>
<div>
<p className="text-sm font-semibold text-white">
                  Sarah &amp; James L.
                </p>
<p className="text-xs text-zinc-400">Santa Cruz, CA</p>
</div>
</div>

<div className="bg-zinc-950/60 p-8 rounded-2xl border border-white/10 shadow-sm w-[320px] md:w-[400px] shrink-0">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg text-green-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-normal text-zinc-200 leading-relaxed mb-6">
                "We wanted a custom putting green and they delivered beyond our
                expectations. Rolls true, looks amazing, and the dog-friendly
                area next to it is perfect."
              </p>
<div>
<p className="text-sm font-semibold text-white">David W.</p>
<p className="text-xs text-zinc-400">Carmel-by-the-Sea, CA</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] via-zinc-950 to-zinc-950 pointer-events-none from-green-900/30"></div>
<div className="absolute inset-0 turf-texture opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Ready to Transform
          <br className="hidden sm:block"/>
          Your Outdoor Space?
        </h2>
<p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto">
          Get a free quote today and bring your vision to life. No pressure,
          just professional advice and transparent pricing.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 text-base font-medium rounded-full shadow-[0_0_40px_-10px_rgba(52,211,153,0.5)] hover:shadow-[0_0_50px_0px_rgba(52,211,153,0.7)] transition-all duration-300 text-green-950 bg-green-400 hover:bg-green-300" href="tel:8315856325">
<iconify-icon className="text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
            Call Now: 831-585-6325
          </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 text-base font-medium text-white border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm rounded-full hover:bg-zinc-800 hover:border-zinc-600 transition-colors duration-300" href="mailto:precisionturfandstone@gmail.com">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
            Email Us
          </a>
</div>
<p className="text-xs text-zinc-500 mt-8 font-medium tracking-wide">
          precisionturfandstone@gmail.com
        </p>
</div>
</section>

<footer className="bg-zinc-950 border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-xl font-semibold tracking-tighter text-white uppercase">
            PRECISION
          </span>
<p className="text-xs text-zinc-400">
            © 2024 Precision Turf &amp; Stone. All rights reserved.
          </p>
</div>
<div className="flex flex-col items-center md:items-end gap-2">
<p className="text-sm font-medium text-zinc-300">
            Serving Monterey &amp; Santa Cruz Counties
          </p>
<div className="flex items-center gap-4 mt-2">
<a className="text-zinc-400 transition-colors hover:text-green-500" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-zinc-400 transition-colors hover:text-green-500" href="#">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

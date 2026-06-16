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



      // Initialize Lucide Icons
      lucide.createIcons();

      // Mobile Menu Logic
      document.addEventListener('DOMContentLoaded', () => {
          const mobileMenuBtn = document.getElementById('mobile-menu-btn');
          const closeMenuBtn = document.getElementById('close-menu-btn');
          const mobileMenu = document.getElementById('mobile-menu');
          const mobileLinks = document.querySelectorAll('.mobile-link');

          function toggleMenu() {
              mobileMenu.classList.toggle('translate-x-full');
              document.body.classList.toggle('overflow-hidden');
          }

          mobileMenuBtn.addEventListener('click', toggleMenu);
          closeMenuBtn.addEventListener('click', toggleMenu);

          mobileLinks.forEach(link => {
              link.addEventListener('click', toggleMenu);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center max-w-[1600px] mx-auto">

<a className="text-2xl md:text-3xl font-semibold tracking-tight flex items-baseline" href="#">
        voltivo
        <span className="text-[#a8d34e] text-3xl leading-none">.</span>
</a>

<div className="hidden lg:flex items-center gap-10">
<a className="text-lg font-normal relative group" href="#">
          Home
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#111811] rounded-full"></span>
</a>
<a className="text-lg font-normal text-neutral-500 hover:text-[#111811] transition-colors" href="#how-it-works">
          How It Works
        </a>
<a className="text-lg font-normal text-neutral-500 hover:text-[#111811] transition-colors" href="#solutions">
          Solutions
        </a>
<a className="text-lg font-normal text-neutral-500 hover:text-[#111811] transition-colors" href="#pricing">
          Pricing
        </a>
<a className="text-lg font-normal text-neutral-500 hover:text-[#111811] transition-colors" href="#about">
          About Us
        </a>
<a className="text-lg font-normal text-neutral-500 hover:text-[#111811] transition-colors" href="#contact">
          Contact
        </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-3 bg-[#111811] text-white px-6 py-3.5 rounded-full text-base font-medium hover:bg-neutral-800 transition-colors group" href="#quote">
          Get Your Quote
          <span className="bg-white text-[#111811] rounded-full p-1 group-hover:translate-x-1 transition-transform">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
</a>
<button className="lg:hidden p-2 rounded-full bg-white border border-neutral-200" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#f8f7f2] z-[60] flex flex-col p-6 translate-x-full transition-transform duration-300 ease-in-out lg:hidden" id="mobile-menu">
<div className="flex justify-between items-center mb-12">
<a className="text-2xl font-semibold tracking-tight flex items-baseline" href="#">
          voltivo
          <span className="text-[#a8d34e] text-3xl leading-none">.</span>
</a>
<button className="p-2 rounded-full bg-white border border-neutral-200" id="close-menu-btn">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex flex-col gap-6 text-2xl font-medium tracking-tight">
<a className="mobile-link text-[#111811]" href="#">Home</a>
<a className="mobile-link text-neutral-500" href="#how-it-works">
          How It Works
        </a>
<a className="mobile-link text-neutral-500" href="#solutions">Solutions</a>
<a className="mobile-link text-neutral-500" href="#pricing">Pricing</a>
<a className="mobile-link text-neutral-500" href="#about">About Us</a>
<a className="mobile-link text-neutral-500" href="#contact">Contact</a>
</div>
<div className="mt-auto pt-8 border-t border-neutral-200">
<a className="flex items-center justify-center gap-3 bg-[#111811] text-white px-6 py-4 rounded-full text-lg font-medium w-full" href="#quote">
          Get Your Quote
          <span className="bg-white text-[#111811] rounded-full p-1">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
</a>
</div>
</div>

<main className="relative pt-32 lg:pt-0 lg:min-h-[900px] flex flex-col lg:flex-row max-w-[1600px] mx-auto overflow-hidden">

<div className="w-full lg:w-[55%] px-6 md:px-12 lg:pl-16 xl:pl-24 pt-12 lg:pt-48 pb-24 lg:pb-56 relative z-10 flex flex-col justify-center">

<div className="inline-flex items-center gap-2 bg-[#ecece5] px-4 py-2 rounded-full w-fit mb-8 border border-white/50 shadow-sm">
<div className="bg-[#a8d34e] rounded-full p-1">
<i className="w-3.5 h-3.5 text-white fill-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-neutral-700 tracking-tight">
            Professional EV Charger Installation for Your Home
          </span>
</div>

<h1 className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] font-semibold tracking-tighter text-[#111811]">
          Power
          <br/>
          Your
          <br/>
<span className="text-[#a8d34e]">Everyday.</span>
</h1>

<p className="mt-8 text-lg md:text-xl text-neutral-500 max-w-md leading-relaxed font-light">
          Safe. Smart. Sustainable. We install premium home EV chargers that fit
          your home and your life.
        </p>

<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="flex items-center gap-3 bg-[#111811] text-white px-7 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 transition-colors group w-full sm:w-auto justify-center" href="#quote">
            Get Your Quote
            <span className="bg-white text-[#111811] rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
</a>
<button className="flex items-center gap-4 text-[#111811] font-medium text-lg hover:opacity-80 transition-opacity w-full sm:w-auto justify-center group">
<div className="bg-[#a8d34e]/30 p-4 rounded-full group-hover:scale-105 transition-transform">
<i className="w-5 h-5 text-[#86a83d] fill-[#86a83d]" data-lucide="play" strokeWidth="1.5"></i>
</div>
            Watch How It Works
          </button>
</div>
</div>

<div className="w-full lg:w-[55%] h-[500px] lg:h-auto lg:absolute right-0 top-0 bottom-0 z-0 lg:rounded-tl-[12vw] overflow-hidden relative">
<img alt="White Tesla charging at modern home" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>

<div className="absolute top-28 right-8 md:top-32 md:right-12 w-32 h-32 md:w-40 md:h-40 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">

<svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-spin-slow" viewbox="0 0 100 100">
<path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" id="circlePath"></path>
<text className="text-[10px] font-medium tracking-widest text-neutral-400 uppercase" fill="currentColor">
<textpath href="#circlePath" startoffset="0%">
                Certified Installers • Premium Quality •
              </textpath>
</text>
</svg>

<div className="w-16 h-16 md:w-20 md:h-20 bg-[#a8d34e] rounded-full flex items-center justify-center text-white z-10 border-4 border-white">
<i className="w-8 h-8 md:w-10 md:h-10" data-lucide="plug-zap" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute bottom-0 right-0 bg-white badge-shape pl-8 pt-8 md:pl-12 md:pt-12 z-30 hidden lg:block border-l border-t border-white/20 shadow-2xl">
<div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wNSIgbnVtT2N0YXZlcz0iMSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] absolute inset-0 rounded-tl-[80px] pointer-events-none"></div>
<div className="relative z-10 pr-12 pb-12 w-64">
<div className="flex items-center gap-2 mb-2">
<span className="text-base font-medium text-neutral-500">Join</span>
</div>
<div className="flex items-end gap-2 mb-3">
<span className="text-5xl font-semibold tracking-tighter text-[#a8d34e] leading-none">
                10K+
              </span>
<div className="w-3 h-3 bg-[#111811] rounded-full mb-1"></div>
</div>
<p className="text-base text-neutral-600 leading-tight font-medium">
              Happy EV Drivers Charging Smarter Every Day.
            </p>
</div>
</div>
</div>
</main>

<div className="relative z-20 max-w-[1500px] mx-auto px-4 md:px-8 lg:-mt-2">
<div className="bg-[#0f1712] rounded-3xl lg:rounded-tl-[80px] lg:rounded-tr-xl lg:rounded-b-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">

<div className="flex items-start gap-5">
<div className="bg-[#a8d34e]/20 p-4 rounded-full flex-shrink-0 border border-[#a8d34e]/30">
<i className="w-6 h-6 text-[#a8d34e]" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Certified &amp; Insured
              </h3>
<p className="text-lg text-neutral-400 font-light">
                Licensed experts you can implicitly trust with your home.
              </p>
</div>
</div>

<div className="flex items-start gap-5">
<div className="bg-[#a8d34e]/20 p-4 rounded-full flex-shrink-0 border border-[#a8d34e]/30">
<i className="w-6 h-6 text-[#a8d34e]" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Fast &amp; Clean Installation
              </h3>
<p className="text-lg text-neutral-400 font-light">
                Most installs completed cleanly in under 3 hours.
              </p>
</div>
</div>

<div className="flex items-start gap-5">
<div className="bg-[#a8d34e]/20 p-4 rounded-full flex-shrink-0 border border-[#a8d34e]/30">
<i className="w-6 h-6 text-[#a8d34e]" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Future Ready
              </h3>
<p className="text-lg text-neutral-400 font-light">
                Built for today's cars. Ready for tomorrow's technology.
              </p>
</div>
</div>
</div>
</div>
</div>

<section className="py-24 bg-[#f8f7f2]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-base font-medium text-neutral-400 mb-10 tracking-tight uppercase">
          Compatible with all major EV brands
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<h4 className="text-2xl font-semibold tracking-tighter">TESLA</h4>
<h4 className="text-2xl font-semibold tracking-tighter">RIVIAN</h4>
<h4 className="text-2xl font-semibold tracking-tighter">FORD</h4>
<h4 className="text-2xl font-semibold tracking-tighter">POLESTAR</h4>
<h4 className="text-2xl font-semibold tracking-tighter">HYUNDAI</h4>
<h4 className="text-2xl font-semibold tracking-tighter">AUDI</h4>
</div>
</div>
</section>

<section className="py-32 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111811] mb-6">
            Simple process.
            <br/>
            Smart charging.
          </h2>
<p className="text-xl text-neutral-500 font-light">
            We handle the complexity of electrical permitting, load
            calculations, and installation so you can just plug in and go.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-neutral-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#f8f7f2] rounded-full flex items-center justify-center border border-neutral-200 mb-8 group-hover:border-[#a8d34e] transition-colors shadow-sm">
<span className="text-3xl font-semibold text-[#111811]">1</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">
              Get a Quote
            </h3>
<p className="text-lg text-neutral-500 font-light px-4">
              Upload a few photos of your electrical panel and parking spot.
              We'll send a guaranteed quote.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#111811] rounded-full flex items-center justify-center shadow-lg mb-8 group-hover:scale-105 transition-transform">
<span className="text-3xl font-semibold text-[#a8d34e]">2</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">
              Fast Installation
            </h3>
<p className="text-lg text-neutral-500 font-light px-4">
              Our certified electricians arrive on time, install cleanly, and
              handle all local permits.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#f8f7f2] rounded-full flex items-center justify-center border border-neutral-200 mb-8 group-hover:border-[#a8d34e] transition-colors shadow-sm">
<span className="text-3xl font-semibold text-[#111811]">3</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">
              Charge &amp; Save
            </h3>
<p className="text-lg text-neutral-500 font-light px-4">
              Wake up to a full battery every morning and take advantage of
              off-peak energy rates.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f8f7f2]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-[#111811] rounded-3xl p-10 md:p-14 overflow-hidden relative min-h-[500px] flex flex-col justify-between">
<div className="relative z-10 max-w-md">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/10">
<i className="w-4 h-4 text-[#a8d34e]" data-lucide="smartphone" strokeWidth="1.5"></i>
<span className="text-base font-normal text-white tracking-tight">
                  Smart Connectivity
                </span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Control your charge from anywhere.
              </h2>
<p className="text-lg text-neutral-400 font-light">
                Monitor charging status, schedule sessions during off-peak
                hours, and track your energy usage all from your smartphone.
              </p>
</div>

<div className="absolute bottom-[-10%] right-[-5%] w-2/3 h-2/3 bg-neutral-800 rounded-t-3xl border-8 border-neutral-700 shadow-2xl rotate-[-5deg] overflow-hidden">
<div className="p-6">
<div className="flex justify-between items-center mb-8">
<div className="w-8 h-8 rounded-full bg-neutral-600"></div>
<div className="w-12 h-4 rounded-full bg-[#a8d34e]"></div>
</div>
<div className="w-full h-32 rounded-xl bg-neutral-700 mb-4 flex items-center justify-center">
<div className="text-center">
<span className="text-3xl font-semibold text-white block">
                      85%
                    </span>
<span className="text-base text-neutral-400 block">
                      Charged
                    </span>
</div>
</div>
<div className="w-full h-12 rounded-xl bg-neutral-600 mb-4"></div>
<div className="w-2/3 h-12 rounded-xl bg-neutral-600"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-8 lg:gap-12">

<div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-neutral-100 flex-1">
<div className="bg-[#f8f7f2] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#111811]" data-lucide="line-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">
                Dynamic Load Balancing
              </h3>
<p className="text-lg text-neutral-500 font-light">
                Our smart chargers monitor your home's total power draw and
                automatically adjust charging speed to prevent blown fuses,
                eliminating the need for expensive panel upgrades.
              </p>
</div>

<div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-neutral-100 flex-1 relative overflow-hidden">
<div className="relative z-10">
<div className="bg-[#f8f7f2] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#111811]" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">
                  Solar Integration Ready
                </h3>
<p className="text-lg text-neutral-500 font-light">
                  Already have solar panels? Our premium tier chargers can sync
                  with your inverter to charge your car exclusively using excess
                  green energy generated on your roof.
                </p>
</div>

<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#a8d34e]/10 rounded-full blur-3xl pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden" id="solutions">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<img alt="Close up of EV charger" className="w-full h-auto rounded-3xl shadow-xl" src="https://images.unsplash.com/photo-1617786438096-78b0933bd0aa?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
<div className="w-full lg:w-1/2 lg:pl-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111811] mb-8">
            Hardware that complements your home.
          </h2>
<p className="text-xl text-neutral-500 font-light mb-12">
            We partner with top-tier manufacturers to offer chargers that are
            not only reliable and powerful, but aesthetically pleasing.
            Weatherproof, compact, and designed to last.
          </p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-6 h-6 text-[#a8d34e]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-semibold tracking-tight mb-1">
                  NEMA 4X Rated
                </h4>
<p className="text-lg text-neutral-500 font-light">
                  Fully weatherproof for safe outdoor installation in any
                  climate.
                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-6 h-6 text-[#a8d34e]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-semibold tracking-tight mb-1">
                  Up to 48 Amps Power
                </h4>
<p className="text-lg text-neutral-500 font-light">
                  Add up to 46 miles of range per hour of charging.
                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-6 h-6 text-[#a8d34e]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-semibold tracking-tight mb-1">
                  Universal J1772 Connector
                </h4>
<p className="text-lg text-neutral-500 font-light">
                  Compatible with every EV on the market (Tesla requires
                  included adapter).
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f1712] border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
<div className="text-center px-4">
<span className="text-5xl md:text-6xl font-semibold tracking-tighter text-white block mb-2">
              10k+
            </span>
<span className="text-base text-neutral-400 font-medium tracking-tight">
              Chargers Installed
            </span>
</div>
<div className="text-center px-4">
<span className="text-5xl md:text-6xl font-semibold tracking-tighter text-white block mb-2">
              4.9
            </span>
<span className="text-base text-neutral-400 font-medium tracking-tight">
              Average Rating
            </span>
</div>
<div className="text-center px-4">
<span className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#a8d34e] block mb-2">
              3hr
            </span>
<span className="text-base text-neutral-400 font-medium tracking-tight">
              Average Install Time
            </span>
</div>
<div className="text-center px-4">
<span className="text-5xl md:text-6xl font-semibold tracking-tighter text-white block mb-2">
              5yr
            </span>
<span className="text-base text-neutral-400 font-medium tracking-tight">
              Workmanship Warranty
            </span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f8f7f2]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111811] mb-6">
              Don't just take our word for it.
            </h2>
<p className="text-xl text-neutral-500 font-light">
              Thousands of homeowners have upgraded their charging experience
              with Voltivo.
            </p>
</div>
<a className="text-lg font-medium text-[#111811] border-b border-[#111811] pb-1 hover:text-[#a8d34e] hover:border-[#a8d34e] transition-colors whitespace-nowrap" href="#">
            Read all reviews
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#111811] font-light leading-relaxed mb-8">
                "Incredibly professional from start to finish. The quote process
                was entirely online via photos, and the installer arrived
                exactly on time. Cleanest conduit work I've seen."
              </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-base font-semibold text-[#111811]">Michael T.</p>
<p className="text-sm text-neutral-500">Tesla Model Y Owner</p>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#111811] font-light leading-relaxed mb-8">
                "I was worried I needed a panel upgrade to charge my Rivian, but
                their smart charger with load balancing saved me over $3,000.
                Highly recommend their expertise."
              </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-base font-semibold text-[#111811]">
                  Sarah Jenkins
                </p>
<p className="text-sm text-neutral-500">Rivian R1S Owner</p>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-neutral-200 fill-neutral-200" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#111811] font-light leading-relaxed mb-8">
                "Quick, easy, and painless. The app is fantastic and being able
                to schedule charging during off-peak times is already showing on
                my electric bill."
              </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-base font-semibold text-[#111811]">David Chen</p>
<p className="text-sm text-neutral-500">Hyundai Ioniq 5 Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111811] mb-6">
            Transparent pricing. No surprises.
          </h2>
<p className="text-xl text-neutral-500 font-light">
            Every home is different, but our pricing structure is simple. Get a
            custom quote for exact numbers based on your panel location.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="border border-neutral-200 rounded-3xl p-10 md:p-12 relative flex flex-col">
<h3 className="text-2xl font-semibold tracking-tight mb-2">
              Standard Install
            </h3>
<p className="text-lg text-neutral-500 font-light mb-8">
              For homes with electrical panels in or directly adjacent to the
              garage.
            </p>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-xl text-neutral-500">Starts at</span>
<span className="text-5xl font-semibold tracking-tighter text-[#111811]">
                $899
              </span>
</div>
<ul className="flex flex-col gap-4 mb-12 flex-1">
<li className="flex items-start gap-3 text-lg font-light">
<i className="w-6 h-6 text-[#111811] mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                Up to 15ft of conduit &amp; wire
              </li>
<li className="flex items-start gap-3 text-lg font-light">
<i className="w-6 h-6 text-[#111811] mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                Hardwired 48A or NEMA 14-50 plug
              </li>
<li className="flex items-start gap-3 text-lg font-light">
<i className="w-6 h-6 text-[#111811] mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                Local permitting handling
              </li>
<li className="flex items-start gap-3 text-lg font-light">
<i className="w-6 h-6 text-[#111811] mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                1-year workmanship warranty
              </li>
</ul>
<a className="block w-full py-4 px-6 rounded-full border border-[#111811] text-[#111811] text-center text-lg font-medium hover:bg-[#f8f7f2] transition-colors" href="#quote">
              Get Standard Quote
            </a>
</div>

<div className="bg-[#111811] text-white rounded-3xl p-10 md:p-12 relative flex flex-col shadow-2xl">

<div className="absolute top-0 right-10 -translate-y-1/2 bg-[#a8d34e] text-[#111811] px-4 py-1.5 rounded-full text-base font-semibold tracking-tight shadow-lg">
              Most Popular
            </div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">
              Complex Install
            </h3>
<p className="text-lg text-neutral-400 font-light mb-8">
              For longer runs, unfinished basements, or panels requiring load
              management.
            </p>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-xl text-neutral-400">Custom from</span>
<span className="text-5xl font-semibold tracking-tighter text-white">
                $1,499
              </span>
</div>
<ul className="flex flex-col gap-4 mb-12 flex-1">
<li className="flex items-start gap-3 text-lg font-light text-neutral-300">
<i className="w-6 h-6 text-[#a8d34e] mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                Custom wire routing &amp; trenching
              </li>
<li className="flex items-start gap-3 text-lg font-light text-neutral-300">
<i className="w-6 h-6 text-[#a8d34e] mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                Dynamic load management hardware
              </li>
<li className="flex items-start gap-3 text-lg font-light text-neutral-300">
<i className="w-6 h-6 text-[#a8d34e] mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                Panel upgrades if required
              </li>
<li className="flex items-start gap-3 text-lg font-light text-neutral-300">
<i className="w-6 h-6 text-[#a8d34e] mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                Extended 5-year workmanship warranty
              </li>
</ul>
<a className="block w-full py-4 px-6 rounded-full bg-[#a8d34e] text-[#111811] text-center text-lg font-medium hover:bg-[#97bd3e] transition-colors" href="#quote">
              Start Custom Quote
            </a>
</div>
</div>
<p className="text-center text-lg text-neutral-500 font-light mt-12 max-w-2xl mx-auto">
          *Prices exclude the cost of the charger unit itself. We can supply a
          premium unit or install one you've already purchased.
        </p>
</div>
</section>

<section className="py-32 bg-[#f8f7f2]">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111811] mb-16 text-center">
          Frequently asked questions
        </h2>
<div className="flex flex-col gap-4">

<details className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 md:p-8 text-xl text-[#111811]">
<span>Do I need a panel upgrade to install an EV charger?</span>
<span className="transition group-open:rotate-180">
<i className="w-6 h-6 text-neutral-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-lg text-neutral-500 font-light px-6 md:px-8 pb-8 pt-0 border-t border-neutral-100 mt-2">
              Not necessarily. While older homes with 100A panels often need
              upgrades, we specialize in installing smart chargers with Dynamic
              Load Balancing. This technology monitors your home's total power
              usage and slows the charger down if you turn on the oven and AC
              simultaneously, safely avoiding the need for a costly $3,000+
              panel upgrade.
            </div>
</details>

<details className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 md:p-8 text-xl text-[#111811]">
<span>How long does the installation process take?</span>
<span className="transition group-open:rotate-180">
<i className="w-6 h-6 text-neutral-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-lg text-neutral-500 font-light px-6 md:px-8 pb-8 pt-0 border-t border-neutral-100 mt-2">
              A standard installation where the electrical panel is in the
              garage typically takes 2-3 hours. More complex installations
              involving running conduit through finished basements or trenching
              outdoors can take a full day. We will give you a precise time
              estimate with your quote.
            </div>
</details>

<details className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 md:p-8 text-xl text-[#111811]">
<span>Do you pull permits for the work?</span>
<span className="transition group-open:rotate-180">
<i className="w-6 h-6 text-neutral-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-lg text-neutral-500 font-light px-6 md:px-8 pb-8 pt-0 border-t border-neutral-100 mt-2">
              Absolutely. All installations are performed by licensed
              electricians and we handle all required local municipal permitting
              and inspections to ensure your installation is 100% legal, safe,
              and up to code.
            </div>
</details>

<details className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 md:p-8 text-xl text-[#111811]">
<span>Hardwired vs. Plug-in: Which is better?</span>
<span className="transition group-open:rotate-180">
<i className="w-6 h-6 text-neutral-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-lg text-neutral-500 font-light px-6 md:px-8 pb-8 pt-0 border-t border-neutral-100 mt-2">
              We strongly recommend hardwiring. Hardwired units can deliver more
              power (up to 48A vs 40A for a plug), are generally more reliable
              as there are fewer connection points that can degrade over time,
              and look cleaner on the wall. Plugs (NEMA 14-50) are only
              recommended if you plan to move the charger frequently.
            </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#0f1712] text-white pt-32 pb-12 rounded-t-[40px] md:rounded-t-[80px] mt-12">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-4xl mx-auto mb-32">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 leading-tight">
            Ready to charge
            <br/>
<span className="text-[#a8d34e]">smarter?</span>
</h2>
<p className="text-xl text-neutral-400 font-light mb-12">
            Get a guaranteed, no-obligation quote in under 24 hours. Just snap a
            few photos of your electrical panel.
          </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<a className="flex items-center gap-3 bg-[#a8d34e] text-[#111811] px-8 py-5 rounded-full text-xl font-medium hover:bg-[#97bd3e] transition-colors group w-full sm:w-auto justify-center" href="#quote">
              Start Your Quote
              <span className="bg-[#111811] text-white rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 border-t border-white/10 pt-16 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-3xl font-semibold tracking-tight flex items-baseline mb-6" href="#">
              voltivo
              <span className="text-[#a8d34e] text-3xl leading-none">.</span>
</a>
<p className="text-base text-neutral-400 font-light mb-6">
              Premium EV charger installations tailored for your modern home and
              lifestyle.
            </p>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-6">Company</h4>
<ul className="flex flex-col gap-4 text-base font-light text-neutral-400">
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  Press
                </a>
</li>
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-6">Services</h4>
<ul className="flex flex-col gap-4 text-base font-light text-neutral-400">
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  Residential Install
                </a>
</li>
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  Commercial Install
                </a>
</li>
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  Load Balancing
                </a>
</li>
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  Panel Upgrades
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-6">Legal</h4>
<ul className="flex flex-col gap-4 text-base font-light text-neutral-400">
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  Warranty Info
                </a>
</li>
<li>
<a className="hover:text-[#a8d34e] transition-colors" href="#">
                  Licenses
                </a>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-base text-neutral-500 font-light">
<p>© 2024 Voltivo Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}

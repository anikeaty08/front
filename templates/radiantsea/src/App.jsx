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



    (function () {
    const ICON_URL = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0caa94eb-c025-49ab-b629-0fd087693dc0_320w.png?v=999999";
  
    function setIcon(doc) {
      if (!doc || !doc.head) return;
  
      doc.querySelectorAll('link[rel*="icon"]').forEach(function (el) {
        el.remove();
      });
  
      const icon = doc.createElement("link");
      icon.rel = "icon";
      icon.type = "image/png";
      icon.sizes = "32x32";
      icon.href = ICON_URL;
      doc.head.appendChild(icon);
  
      const shortcut = doc.createElement("link");
      shortcut.rel = "shortcut icon";
      shortcut.type = "image/png";
      shortcut.href = ICON_URL;
      doc.head.appendChild(shortcut);
  
      const apple = doc.createElement("link");
      apple.rel = "apple-touch-icon";
      apple.href = ICON_URL;
      doc.head.appendChild(apple);
    }
  
    function forceIcon() {
      setIcon(document);
  
      try {
        if (window.parent && window.parent !== window) {
          setIcon(window.parent.document);
        }
      } catch (e) {}
    }
  
    forceIcon();
    setTimeout(forceIcon, 250);
    setTimeout(forceIcon, 1000);
    setTimeout(forceIcon, 3000);
  })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-stone-50">
<div className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vh] rounded-full blur-[150px] md:blur-[250px] animate-sea-1 bg-blue-400"></div>
<div className="absolute top-[10%] -right-[10%] w-[70vw] h-[70vh] rounded-full bg-cyan-400 blur-[150px] md:blur-[250px] animate-sea-2"></div>
<div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vh] rounded-full bg-teal-400 blur-[150px] md:blur-[250px] animate-sea-3"></div>
<style className="">
        @keyframes sea-pulse { 0%, 100% { opacity: 0.2; transform: scale(1) translate(0, 0); } 50% { opacity: 0.35; transform: scale(1.05) translate(2%, 4%); } }
      </style>
</div>

<nav className="fixed -translate-x-1/2 z-50 transition-all duration-500 border border-white/10 border-t-white/30 rounded-full top-4 left-1/2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md scale-95 w-[calc(100%-0.5rem)] max-w-[60rem] bg-neutral-900/70">
<div className="flex sm:px-8 md:h-12 md:pl-6 md:pr-7 opacity-100 w-full h-7 mt-2.5 mb-2.5 pr-5 pl-5 relative scale-100 items-center justify-between">
<button aria-label="Menu" className="md:hidden flex items-center justify-center text-slate-50 text-2xl w-10 h-10 -ml-2" onclick="document.getElementById('mobile-menu').classList.remove('hidden')">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="menu" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(248, 250, 252)'}} viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<div className="uppercase antialiased -translate-x-1/2 -translate-y-1/2 text-2xl font-light text-slate-50 tracking-wider font-serif absolute top-1/2 left-1/2 scale-100 md:static md:transform-none md:text-4xl">
          Radiantsea
        </div>
<div className="hidden md:flex items-center gap-1 lg:gap-2 text-[15px] font-medium text-slate-100">
<a className="px-4 py-2 rounded-full hover:bg-white/10 focus:bg-white/20 active:bg-white/20 hover:backdrop-blur-md hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] focus:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300 font-geist-mono hover:text-white" href="#request-form">
            Preview
          </a>
<a className="px-4 py-2 rounded-full hover:bg-white/10 focus:bg-white/20 active:bg-white/20 hover:backdrop-blur-md hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] focus:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300 font-geist-mono hover:text-white" href="#process">
            Process
          </a>
<a className="px-4 py-2 rounded-full hover:bg-white/10 focus:bg-white/20 active:bg-white/20 hover:backdrop-blur-md hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] focus:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300 font-geist-mono hover:text-white" href="#research">
            Research
          </a>
<a className="px-4 py-2 rounded-full hover:bg-white/10 focus:bg-white/20 active:bg-white/20 hover:backdrop-blur-md hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] focus:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300 font-geist-mono hover:text-white" href="/founder">
            About
          </a>
</div>
<a aria-label="Request a Preview" className="transition-colors hover:bg-orange-900 flex items-center justify-center text-sm font-normal text-[#ffffff] bg-orange-700 w-16 h-10 rounded-full pt-0 pr-0 pb-0 pl-0 shadow-sm translate-x-4 scale-110 md:w-auto md:h-auto md:pr-2.5 md:pl-2.5 md:pb-4 md:pt-4" href="#request-form">
<iconify-icon className="text-xl md:hidden" height="20" icon="lucide:file-search" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
<span className="hidden md:inline font-geist-mono">
            Request a Preview
          </span>
</a>
</div>
</nav>

<section className="grid md:pt-40 md:pb-24 lg:grid-cols-12 lg:gap-16 max-w-6xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 gap-x-12 gap-y-12 items-center">
<div className="lg:col-span-7">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] hero-title-grid text-emerald-900">
<span className="seq-1 text-gray-600">Website diagnosis</span>
<span className="seq-2 text-gray-600">Website repair</span>
<span className="seq-3 text-gray-600">Website maintenance</span>
<span className="seq-4 text-gray-600">Full-service support</span>
<span className="seq-5">It’s all here, one click away.</span>
</h1>
<p className="mt-6 text-base md:text-lg text-gray-500 font-normal leading-relaxed max-w-xl">
          Comprehensive research informed website restoration for business
          owners who need a site that is current, earns trust, and guides
          customers with less friction.
        </p>
</div>
<div className="lg:col-span-5 relative" id="request-form">
<div className="absolute -inset-2 bg-gradient-to-tr from-teal-100/40 via-transparent to-amber-100/40 rounded-[2rem] blur-xl opacity-70 pointer-events-none"></div>
<div className="sm:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-stone-50/50 hover:shadow-[0_20px_40px_rgba(6,78,59,0.15)] bg-[#fdfbea]/30 border-stone-50/50 border rounded-3xl px-6 py-6 relative shadow-[0_8px_30px_rgba(6,78,59,0.1)] backdrop-blur-2xl">
<form className="space-y-4">
<div className="">
<label className="block text-sm font-medium text-teal-900 mb-1.5">
                Business website URL
              </label>
<input className="focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-gray-500 transition-all duration-300 placeholder:text-gray-500 hover:bg-stone-50/60 hover:border-stone-50/70 focus:bg-stone-50/70 focus:border-stone-50 text-sm text-emerald-900 bg-[#fdfbea]/40 w-full border-stone-50/50 border rounded-xl px-4 py-2.5 shadow-[0_2px_8px_rgba(6,78,59,0.08)] backdrop-blur-xl" placeholder="https://" required="" type="url"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-sm font-medium text-teal-900 mb-1.5">
                  Email address
                </label>
<input className="focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-gray-500 transition-all duration-300 placeholder:text-gray-500 hover:bg-stone-50/60 hover:border-stone-50/70 focus:bg-stone-50/70 focus:border-stone-50 text-sm text-emerald-900 bg-[#fdfbea]/40 w-full border-stone-50/50 border rounded-xl px-4 py-2.5 shadow-[0_2px_8px_rgba(6,78,59,0.08)] backdrop-blur-xl" required="" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-teal-900 mb-1.5">
                  Phone number
                </label>
<input className="focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-gray-500 transition-all duration-300 placeholder:text-gray-500 hover:bg-stone-50/60 hover:border-stone-50/70 focus:bg-stone-50/70 focus:border-stone-50 text-sm text-emerald-900 bg-[#fdfbea]/40 w-full border-stone-50/50 border rounded-xl px-4 py-2.5 shadow-[0_2px_8px_rgba(6,78,59,0.08)] backdrop-blur-xl" required="" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-teal-900 mb-1.5">
                Optional note
                <span className="text-gray-400 font-normal ml-1"></span>
</label>
<textarea className="focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-gray-500 transition-all duration-300 placeholder:text-gray-500 resize-none hover:bg-stone-50/60 hover:border-stone-50/70 focus:bg-stone-50/70 focus:border-stone-50 text-sm text-emerald-900 bg-[#fdfbea]/40 w-full border-stone-50/50 border rounded-xl px-4 py-2.5 shadow-[0_2px_8px_rgba(6,78,59,0.08)] backdrop-blur-xl" rows="3"></textarea>
</div>
<button className="transition-colors hover:bg-emerald-800 text-sm font-medium text-orange-50 bg-teal-900 w-full rounded-xl mt-2 py-3 shadow-sm" type="button">
              Request My Free Landing Page Preview
            </button>
<p className="text-xs text-gray-500 mt-5 text-center leading-relaxed">
              No signup. No obligation. Your information is only used to send
              your preview or contact you about your request. See
              <a className="underline hover:text-gray-700 transition-colors" href="/privacy-policy">
                Privacy Policy
              </a>
              .
            </p>
</form>
</div>
</div>
</section>

<div className="relative w-full overflow-hidden flex flex-col pt-12 pb-32 md:pt-0 md:pb-0 z-20">

<div className="md:hidden flex flex-col items-center text-center px-6 pb-16 max-w-sm mx-auto">
<h2 className="text-[28px] leading-tight font-semibold text-emerald-900 tracking-tight mb-4">
          The essential, research informed solutions that all business deserve
        </h2>
<p className="text-[15px] leading-relaxed font-medium text-gray-600">
          Radiantsea provides business owners at every stage of operation with
          the support they need.
        </p>
</div>
<div className="flex flex-col gap-6 w-full pb-12 md:pb-0 overflow-hidden relative">

<div className="flex whitespace-nowrap animate-marquee-left gap-6 w-max items-center" style={{animationDuration: '40s'}}>
<div className="flex gap-6 gap-x-6 gap-y-6">
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Real structure
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Transparent process
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Clear customer paths
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Works across devices
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Google visibility
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Trust signals
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Seasonal updates
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Reliable support
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              No platform overwhelm
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Built to be trusted
            </span>
</div>
<div className="flex gap-6">
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Real structure
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Transparent process
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Clear customer paths
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Works across devices
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Google visibility
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Trust signals
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Seasonal updates
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Reliable support
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              No platform overwhelm
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Built to be trusted
            </span>
</div>
</div>

<div className="md:hidden flex whitespace-nowrap animate-marquee-left gap-6 w-max items-center" style={{animationDuration: '40s'}}>
<div className="flex gap-6">
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Trust signals
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Seasonal updates
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Reliable support
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              No platform overwhelm
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Built to be trusted
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Real structure
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Transparent process
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Clear customer paths
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Works across devices
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Google visibility
            </span>
</div>
<div className="flex gap-6">
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Trust signals
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Seasonal updates
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Reliable support
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              No platform overwhelm
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Built to be trusted
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Real structure
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Transparent process
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Clear customer paths
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Works across devices
            </span>
<span className="flex items-center px-8 py-6 rounded-full text-base md:text-lg font-medium text-emerald-900 bg-transparent border border-emerald-900/20 backdrop-blur-sm">
              Google visibility
            </span>
</div>
</div>
</div>
</div>
<section className="py-20 md:py-28 px-6 max-w-6xl mx-auto flex flex-col items-center" id="process">
<div className="max-w-3xl text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-emerald-900">
          Why people choose Radiantsea
        </h2>
<p className="mt-6 text-base md:text-lg text-gray-500 font-normal leading-relaxed">
          One place for website repair, launch, and upkeep. Radiantsea raises
          the standard for website restoration with careful structure, clear
          priorities, and a commitment to quality and integrity.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-6 md:gap-8 w-full">
<div className="group relative p-8 sm:p-10 rounded-[2rem] transition-all duration-500 ease-out hover:-translate-y-2 bg-[#fdfbea]/40 hover:bg-[#fdfbea]/60 border border-white/60 shadow-[0_8px_30px_rgba(6,78,59,0.06)] hover:shadow-[0_20px_40px_rgba(6,78,59,0.12)] backdrop-blur-2xl overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/20 to-transparent opacity-50 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-emerald-900">
              Zero compromises on credibility
            </h3>
<p className="text-base text-gray-600 leading-relaxed">
              Every site is reviewed for the details that shape trust:
              structure, clarity, mobile experience, accessibility, loading
              behavior, broken paths, outdated content, missing trust points,
              and the way the site feels to a real visitor.
            </p>
</div>
</div>
<div className="group relative p-8 sm:p-10 rounded-[2rem] transition-all duration-500 ease-out hover:-translate-y-2 bg-[#fdfbea]/40 hover:bg-[#fdfbea]/60 border border-white/60 shadow-[0_8px_30px_rgba(6,78,59,0.06)] hover:shadow-[0_20px_40px_rgba(6,78,59,0.12)] backdrop-blur-2xl overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/20 to-transparent opacity-50 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-emerald-900">
              Complete service, handled for you
            </h3>
<p className="text-base text-gray-600 leading-relaxed">
              Diagnosis, repair, launch setup, domain connection, metadata,
              contact paths, content updates, layout cleanup, and ongoing
              support are handled in one place, without handing you another
              platform to manage.
            </p>
</div>
</div>
<div className="group relative p-8 sm:p-10 rounded-[2rem] transition-all duration-500 ease-out hover:-translate-y-2 bg-[#fdfbea]/40 hover:bg-[#fdfbea]/60 border border-white/60 shadow-[0_8px_30px_rgba(6,78,59,0.06)] hover:shadow-[0_20px_40px_rgba(6,78,59,0.12)] backdrop-blur-2xl overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/20 to-transparent opacity-50 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-emerald-900">
              Built in simplicity and cohesion
            </h3>
<p className="text-base text-gray-600 leading-relaxed">
              Your site should feel clear across devices, easy to understand,
              and current over time. Radiantsea keeps the experience aligned
              from first impression to final check, with support for the updates
              and refinements that keep your site trustworthy.
            </p>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-40 w-full [background-image:linear-gradient(to_bottom,#EAFCC700,#EAFCC7_5rem,#EAFCC7_calc(100%_-_5rem),#EAFCC700)] overflow-hidden" id="research">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch w-full">
<div className="flex flex-col md:p-14 text-[#EAFCC7] bg-[#00403a] rounded-[48px] px-10 py-10 justify-between">
<h2 className="md:text-5xl leading-tight text-3xl mb-12">
              Informed by expert research
            </h2>
<ul className="flex flex-col">
<li className="flex gap-4 text-lg border-[#EAFCC7]/20 border-t pt-5 pb-5 gap-x-4 gap-y-4 items-center">
<span className="text-[#EAFCC7]/50">—</span>
                WCAG 2.2
              </li>
<li className="py-5 border-t border-[#EAFCC7]/20 text-lg flex items-center gap-4">
<span className="text-[#EAFCC7]/50">—</span>
                Google Core Web Vitals
              </li>
<li className="py-5 border-t border-[#EAFCC7]/20 text-lg flex items-center gap-4">
<span className="text-[#EAFCC7]/50">—</span>
                Nielsen Norman Group usability principles
              </li>
<li className="flex gap-4 text-lg border-[#EAFCC7]/20 border-t border-b pt-5 pb-5 gap-x-4 gap-y-4 items-center">
<span className="text-[#EAFCC7]/50">—</span>
                Stanford web credibility research
              </li>
</ul>
</div>
<div className="bg-[#EAFCC7] text-[#064E3B] border border-[#064E3B] rounded-[48px] p-10 md:p-14 flex flex-col justify-center">
<h2 className="leading-tight md:text-4xl text-3xl font-medium mb-8">
              Built with due diligence every step of the way
            </h2>
<div className="space-y-6 text-[#064E3B]/80 leading-relaxed text-base md:text-lg">
<p className="">
                Radiantsea continues to build from expert sources to keep its
                process trustworthy, effective, and current bringing vigorous
                due diligence to every step of the way.
              </p>
<p className="">
                Every diagnosis, repair, launch, and support decision is guided
                by recognized usability principles, accessibility standards,
                performance signals, credibility research, and real site-health
                checks.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="grid md:grid-cols-2 md:gap-20 max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-24 my-16 md:my-24 items-center relative overflow-hidden rounded-[3rem] border border-white/20 border-t-white/40 bg-sky-300/5 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_10px_40px_rgba(6,78,59,0.08)]" id="about">
<div className="flex justify-center md:justify-start">
<div className="relative">
<div className="absolute -inset-2 bg-gradient-to-tr from-sky-300/30 via-transparent to-amber-100/40 rounded-[2rem] blur-xl opacity-70 pointer-events-none"></div>
<img alt="Forest path" className="relative w-full max-w-md rounded-2xl object-cover transition-transform duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgba(6,78,59,0.08)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9283212a-c784-497d-bf16-bd33ffd72077_3840w.png"/>
</div>
</div>
<div className="">
<h2 className="md:text-3xl text-3xl font-semibold text-emerald-900 tracking-tight mt-3 mb-7 translate-y-4">
          The standard behind Radiantsea
        </h2>
<div className="mt-5 space-y-4">
<p className="leading-relaxed text-base text-gray-500 my-4 translate-y-2">
            Radiantsea is built on a restoration mindset: preserve what still
            works, repair what weakens trust, and bring clear structure back to
            a business’s online presence. The work combines timeless visual
            judgment with current web standards, practical site-health checks,
            and a belief that digital spaces should feel clear, credible, and
            well cared for. Every website is approached with stewardship, not
            decoration. The result is a website that feels easier to trust,
            easier to use, and easier to maintain.
          </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-24 md:pb-32" id="reviews">
<div className="max-w-3xl text-center mx-auto mb-12 md:mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-emerald-900">
          What business owners say
        </h2>
<p className="mt-6 text-base md:text-lg text-gray-500 font-normal leading-relaxed">
          See how stronger structure and clearer messaging can turn a website
          into a more reliable business asset.
        </p>
</div>
<div className="grid md:grid-cols-2 md:gap-8 gap-x-6 gap-y-6">
<div className="backdrop-blur-2xl border rounded-[2rem] p-8 sm:p-10 relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 bg-[#fdfbea]/40 border-stone-50/50 hover:bg-[#fdfbea]/60 shadow-[0_8px_30px_rgba(6,78,59,0.06)] hover:shadow-[0_20px_40px_rgba(6,78,59,0.12)] flex flex-col">
<p className="leading-relaxed flex-grow text-base text-gray-600">
            “Our old website had all the information, but people still kept
            calling with the same questions. Radiantsea made the important
            things easier to find, and now I feel much better sending people to
            the site.”
          </p>
<div className="mt-auto">
<div className="font-semibold text-emerald-900">Sarah Jenkins</div>
<div className="text-sm text-gray-500 mt-1">
              Owner, Oak &amp; Steel Architecture
            </div>
</div>
</div>
<div className="backdrop-blur-2xl border rounded-[2rem] p-8 sm:p-10 relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 bg-[#fdfbea]/40 border-stone-50/50 hover:bg-[#fdfbea]/60 shadow-[0_8px_30px_rgba(6,78,59,0.06)] hover:shadow-[0_20px_40px_rgba(6,78,59,0.12)] flex flex-col">
<p className="text-base text-gray-600 leading-relaxed mb-8 flex-grow">
            "I was worried about managing a website overhaul while running my
            spa. Radiantsea took care of everything. Radiantsea is something I
            didn't even know I needed!"
          </p>
<div className="mt-auto">
<div className="font-semibold text-emerald-900">Marcus Vance</div>
<div className="text-sm text-gray-500 mt-1">
              Founder, Vance Spa Escape
            </div>
</div>
</div>
<div className="backdrop-blur-2xl border rounded-[2rem] p-8 sm:p-10 relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 bg-[#fdfbea]/40 border-stone-50/50 hover:bg-[#fdfbea]/60 shadow-[0_8px_30px_rgba(6,78,59,0.06)] hover:shadow-[0_20px_40px_rgba(6,78,59,0.12)] flex flex-col">
<p className="leading-relaxed flex-grow text-base text-gray-600">
            “I was putting off fixing the website because I thought it would
            turn into a huge project. Radiantsea made the process feel
            manageable and gave the site a much clearer structure without making
            it feel like a different business.”
          </p>
<div className="mt-auto">
<div className="font-semibold text-emerald-900">Elena Rostova</div>
<div className="text-sm text-gray-500 mt-1">
              Director, Rostova Consulting
            </div>
</div>
</div>
<div className="backdrop-blur-2xl border rounded-[2rem] p-8 sm:p-10 relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 bg-[#fdfbea]/40 border-stone-50/50 hover:bg-[#fdfbea]/60 shadow-[0_8px_30px_rgba(6,78,59,0.06)] hover:shadow-[0_20px_40px_rgba(6,78,59,0.12)] flex flex-col">
<p className="text-base text-gray-600 leading-relaxed mb-8 flex-grow">
            "I have a small kayaking company and haven't had the time between
            family and everything else. The best part about Radiantsea is the
            ongoing support. They didn't just fix our website and disappear.
            They ensured the launch was flawless and continue to keep everything
            updated seamlessly behind the scenes. Highly recommended."
          </p>
<div className="mt-auto">
<div className="font-semibold text-emerald-900">James Thorne</div>
<div className="text-sm text-gray-500 mt-1">
              Co-founder, Yellow Kayak &amp; Wildlife Tours
            </div>
</div>
</div>
</div>
</section>
<section className="md:pl-6 md:pr-6 md:pt-26 md:pb-26 max-w-6xl mx-auto pt-20 pr-6 pb-40 pl-6">
<div className="max-w-3xl text-center mx-auto mb-12 md:mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-emerald-900">
          The tedious hours of website work handled for you
        </h2>
<p className="mt-6 text-base md:text-lg text-gray-500 font-normal leading-relaxed">
          Whether your website needs an update, restoration, or full rebuild,
          Radiantsea takes the time-consuming site work off your plate, from
          setup details to careful refinements, so you are not left managing
          every fix yourself.
        </p>
</div>
<div className="grid md:grid-cols-2 md:gap-8 gap-x-6 gap-y-6">

<div className="backdrop-blur-2xl border rounded-[2rem] p-8 sm:p-10 relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 bg-stone-50/20 border-stone-50/30 hover:bg-stone-50/40 shadow-[0_8px_30px_rgba(6,78,59,0.08)] hover:shadow-[0_20px_40px_rgba(6,78,59,0.12)]">
<div className="absolute top-0 left-0 w-1.5 h-full bg-gray-200"></div>
<div className="flex gap-2.5 text-sm font-medium text-gray-500 mb-5 gap-x-2.5 gap-y-2.5 items-center">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
            The usual website problem
          </div>
<p className="text-base text-gray-500 leading-relaxed">
            Too many distractions, unclear setup, weak mobile structure,
            outdated content, broken embeds, confusing technical terms, and no
            one who has the time for keeping the site current.
          </p>
</div>

<div className="overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-stone-50/60 hover:shadow-[0_20px_40px_rgba(6,78,59,0.16)] sm:p-10 bg-[#fdfbea]/40 border-stone-50/50 border rounded-[2rem] px-8 py-8 relative shadow-[0_8px_30px_rgba(6,78,59,0.12)] backdrop-blur-2xl">
<div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-900"></div>
<div className="flex gap-2.5 text-sm font-medium text-emerald-900 mb-5 gap-x-2.5 gap-y-2.5 items-center">
            Radiantsea
          </div>
<p className="text-base text-gray-700 leading-relaxed">
            Diagnosis, repair, launch, and support handled in one place, with
            clear recommendations and no unnecessary complexity.
          </p>
</div>
</div>
</section>

<section className="relative z-20 w-full overflow-hidden mt-12 mb-[-6rem] md:mb-[-8rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/308ff3a7-43a6-4ef7-84ae-d386decec05f_3840w.png)] bg-cover bg-center rounded-t-[2.5rem] md:rounded-t-[3rem]">
<div className="absolute inset-0 bg-black/20"></div>
<div className="flex flex-col md:py-32 text-center max-w-3xl z-30 mr-auto mb-12 ml-auto px-6 py-24 relative items-center">
<h2 className="md:text-4xl lg:text-4xl text-3xl font-semibold text-white tracking-tight w-96 mb-6 drop-shadow-md">
          Turn website overwhelm into clarity.
        </h2>
<p className="leading-relaxed md:text-lg text-base font-medium text-white/95 w-80 max-w-xl drop-shadow-md">
          See how your site could become clearer, more trustworthy, and easier
          for customers to use.
        </p>
<a className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/30 text-base font-medium text-white bg-white/20 border-white/40 border rounded-full mt-5 mb-8 pt-4 pr-8 pb-4 pl-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md scale-75" href="#request-form">
          Request my free preview
        </a>
</div>
</section>

<footer className="md:pt-10 md:rounded-t-[3rem] z-30 rounded-t-[2.5rem] pt-8 relative scale-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e06dc0c8-3919-45dd-bc66-23612ac9fa1d_1600w.png)] bg-cover bg-center overflow-hidden">
<div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-lime-100/10 pointer-events-none"></div>
<div className="text-[#eafcc2] max-w-6xl mx-auto pt-6 pb-8 px-6 lg:px-8">
<div className="flex flex-col w-full pt-2 pb-16 gap-y-5 items-start justify-between gap-x-5 sm:flex-row sm:pb-24 sm:gap-12">
<div className="flex flex-col items-start shrink-0">
<img alt="Radiantsea" className="md:w-48 md:h-32 origin-top-left -mt-2 -ml-2 md:-mt-6 md:-ml-8 md:-translate-x-20 md:-translate-y-4 -translate-x-4 -translate-y-3 -translate-y-1 opacity-100 w-32 h-24 object-cover rounded-2xl shadow-sm -translate-x-16 scale-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e2c073f-36b6-4854-b800-1e20d5f61f88_800w.jpg" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}/>
</div>
<div className="sm:hidden w-[100vw] relative left-1/2 -translate-x-1/2 h-px bg-[#eafcc2]/20 my-4 pointer-events-none"></div>
<div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-12 md:gap-16 sm:w-auto w-full sm:px-16 gap-x-5 gap-y-8">
<div className="col-span-2 sm:col-span-1 sm:px-1">
<div className="uppercase text-xs text-[#eafcc2]/60 tracking-wider font-geist-mono">
                PREVIEW
              </div>
<ul className="mt-4 space-y-3 text-sm">
<li className="">
<a className="hover:text-lime-900 transition-colors text-[#eafcc2]" href="#request-form">
                    Preview
                  </a>
</li>
</ul>
</div>
<div className="col-span-1">
<div className="uppercase text-xs text-[#eafcc2]/60 tracking-wider font-geist-mono">
                LEARN
              </div>
<ul className="mt-4 space-y-3 text-sm">
<li className="">
<a className="hover:text-lime-900 transition-colors text-[#eafcc2]" href="/founder">
                    About
                  </a>
</li>
<li className="">
<a className="hover:text-lime-900 transition-colors text-[#eafcc2]" href="#research">
                    Research
                  </a>
</li>
<li className="">
<a className="hover:text-lime-900 transition-colors text-[#eafcc2]" href="#process">
                    Process
                  </a>
</li>
</ul>
</div>
<div className="col-span-1">
<div className="uppercase text-xs text-[#eafcc2]/60 tracking-wider font-geist-mono">
                CONNECT
              </div>
<ul className="mt-4 space-y-3 text-sm">
<li className="">
<a className="hover:text-lime-900 transition-colors text-[#eafcc2]" href="/founder">
                    Founder
                  </a>
</li>
<li>
<a className="hover:text-lime-900 transition-colors text-[#eafcc2]" href="#request-form">
                    Contact Us
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row text-[#eafcc2] mt-12 pt-8 gap-x-4 gap-y-6 items-center justify-between relative">
<div className="absolute w-[100vw] left-1/2 -translate-x-1/2 top-0 h-px bg-[#eafcc2]/20 pointer-events-none"></div>
<div className="flex items-center gap-6 text-sm text-[#eafcc2]">
<a className="hover:text-lime-900 transition-colors text-[#eafcc2]" href="/terms-of-service">
              Terms of Service
            </a>
<span className="text-[#eafcc2]/40">|</span>
<a className="hover:text-lime-900 transition-colors text-[#eafcc2]" href="/privacy-policy">
              Privacy Policy
            </a>
</div>
<div className="text-sm text-[#eafcc2]/70 text-center">
            © 2026 Radiantsea Works. All rights reserved.
          </div>
</div>
</div>
</footer>
<div className="hidden flex fixed inset-0 z-[100] bg-gradient-to-br backdrop-blur-xl md:hidden transition-all duration-300 flex-col pt-4 px-4 pb-4 from-[#dbad81]/95 via-[#e3bfa1]/95 to-[#c26d42]/95" id="mobile-menu">
<div className="relative w-full flex items-center justify-between border shadow-sm rounded-full bg-white/90 border-stone-200/50 backdrop-blur-2xl backdrop-saturate-150 h-14 px-4 mb-4 shrink-0">
<button aria-label="Close Menu" className="flex items-center justify-center text-teal-900 text-2xl w-10 h-10 -ml-1" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
<iconify-icon height="24" icon="lucide:x" width="24"></iconify-icon>
</button>
<div className="uppercase antialiased text-xl font-light text-teal-900 tracking-wider font-serif absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          Radiantsea
        </div>
<a aria-label="Request a Preview" className="transition-colors hover:bg-orange-900 flex items-center justify-center text-[#ffffff] bg-orange-700 w-14 h-10 rounded-full shadow-sm -mr-1" href="#request-form" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
<iconify-icon height="18" icon="lucide:file-search" width="18"></iconify-icon>
</a>
</div>
<div className="flex-1 bg-[#fdfbea]/95 backdrop-blur-2xl border border-stone-50/50 rounded-3xl shadow-xl overflow-y-auto flex flex-col p-4 w-full">
<div className="relative w-full rounded-2xl overflow-hidden mb-6 shadow-sm">
<img alt="Lush Green Forest Path with Pink Flowers" className="w-full h-56 object-cover object-bottom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bf621f1-edef-4df2-8891-575a9383b977_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
<div className="absolute inset-x-0 bottom-4 flex justify-center">
<a className="inline-flex items-center justify-center transition-all duration-300 active:scale-95 text-sm font-medium text-white border border-white/30 bg-white/20 rounded-full px-8 py-3 shadow-lg backdrop-blur-md" href="#request-form" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
              Preview
            </a>
</div>
</div>
<div className="flex flex-col w-full px-2">
<a className="flex items-center justify-between py-5 text-xl font-medium text-emerald-900 border-b border-emerald-900/10 active:text-emerald-700 transition-colors" href="/founder" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            About
            <iconify-icon className="text-emerald-900/40" height="20" icon="lucide:chevron-right" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-between py-5 text-xl font-medium text-emerald-900 border-b border-emerald-900/10 active:text-emerald-700 transition-colors" href="#research" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            Research
            <iconify-icon className="text-emerald-900/40" height="20" icon="lucide:chevron-right" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-between py-5 text-xl font-medium text-emerald-900 border-b border-emerald-900/10 active:text-emerald-700 transition-colors" href="#process" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            Process
            <iconify-icon className="text-emerald-900/40" height="20" icon="lucide:chevron-right" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-between py-5 text-xl font-medium text-emerald-900 active:text-emerald-700 transition-colors" href="#request-form" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            Preview
            <iconify-icon className="text-emerald-900/40" height="20" icon="lucide:chevron-right" width="20"></iconify-icon>
</a>
</div>
</div>
</div>


    </>
  );
}

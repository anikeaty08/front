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



      lucide.createIcons();
    


      if(window.lucide){lucide.createIcons();}
    


      (function(){
        var header = document.querySelector('header.aura-header');
        var lastY = 0;
        var ticking = false;
        function update(){
          var y = window.scrollY || window.pageYOffset;
          if (y > 80) {
            header.classList.add('aura-scrolled');
          } else {
            header.classList.remove('aura-scrolled');
          }
          lastY = y;
          ticking = false;
        }
        window.addEventListener('scroll', function(){
          if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
        }, { passive: true });
        if (window.lucide) { lucide.createIcons(); }
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 bg-white/95 backdrop-blur-md z-50 flex flex-col border-b border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.03)] aura-header">

<div className="h-16 w-full max-w-[1800px] mx-auto px-6 lg:px-10 flex items-center justify-between">

<div className="flex items-center gap-3 shrink-0">
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-semibold text-sm shadow-sm shadow-orange-500/30">
            A
          </div>
<span className="text-xl font-semibold tracking-tight text-gray-900">
            Anachak
          </span>
</div>

<div className="flex justify-center flex-1">
<nav className="flex items-center gap-2">

<button className="relative flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 group text-gray-500 hover:text-gray-900 hover:bg-gray-50" type="button">
<span className="transition-transform duration-300 group-hover:scale-110">
<svg className="w-6 h-6" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="roofG" x1="24" x2="24" y1="6" y2="22">
<stop stop-color="#8B7355"></stop>
<stop offset="1" stop-color="#6B5B45"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="wallG" x1="14" x2="14" y1="20" y2="42">
<stop stop-color="#E8E0D4"></stop>
<stop offset="1" stop-color="#D4C9B8"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="treeG" x1="8" x2="8" y1="4" y2="28">
<stop stop-color="#5DA34A"></stop>
<stop offset="1" stop-color="#3D7A2E"></stop>
</lineargradient>
</defs>
<rect fill="#8B6F47" height="10" rx="1" width="3" x="7" y="28"></rect>
<ellipse cx="8.5" cy="18" fill="url(#treeG)" rx="8" ry="12"></ellipse>
<ellipse cx="6" cy="15" fill="#6BBF55" opacity="0.7" rx="5" ry="8"></ellipse>
<ellipse cx="11" cy="13" fill="#4DA33A" opacity="0.5" rx="4" ry="6"></ellipse>
<rect fill="url(#wallG)" height="18" rx="1" width="24" x="16" y="22"></rect>
<rect height="18" rx="1" stroke="#B8A990" strokeWidth="0.8" width="24" x="16" y="22"></rect>
<polygon fill="url(#roofG)" points="14,22 28,8 42,22"></polygon>
<polygon fill="none" points="14,22 28,8 42,22" stroke="#5A4A35" strokeWidth="0.8"></polygon>
<rect fill="#9B8B75" height="9" rx="0.5" stroke="#7A6B55" strokeWidth="0.5" width="4" x="35" y="11"></rect>
<rect fill="#E8485C" height="10" rx="1.5" width="7" x="25" y="30"></rect>
<circle cx="30" cy="35" fill="#C4354A" r="0.8"></circle>
<rect fill="#87CEEB" height="5" rx="0.5" stroke="#B8A990" strokeWidth="0.6" width="5" x="18" y="26"></rect>
<line stroke="#B8A990" strokeWidth="0.4" x1="20.5" x2="20.5" y1="26" y2="31"></line>
<line stroke="#B8A990" strokeWidth="0.4" x1="18" x2="23" y1="28.5" y2="28.5"></line>
<rect fill="#87CEEB" height="5" rx="0.5" stroke="#B8A990" strokeWidth="0.6" width="5" x="34" y="26"></rect>
<line stroke="#B8A990" strokeWidth="0.4" x1="36.5" x2="36.5" y1="26" y2="31"></line>
<line stroke="#B8A990" strokeWidth="0.4" x1="34" x2="39" y1="28.5" y2="28.5"></line>
<ellipse cx="28" cy="41" fill="#00000010" rx="18" ry="2"></ellipse>
</svg>
</span>
<span className="text-sm font-medium tracking-tight transition-all duration-300">
                Buy
              </span>
</button>

<button className="relative flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 group text-gray-500 hover:text-gray-900 hover:bg-gray-50" type="button">
<span className="transition-transform duration-300 group-hover:scale-110">
<svg className="w-6 h-6" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="bldgG" x1="24" x2="24" y1="4" y2="42">
<stop stop-color="#A0B4C8"></stop>
<stop offset="1" stop-color="#7A8FA5"></stop>
</lineargradient>
<lineargradient id="glassG" x1="0" x2="0" y1="0" y2="1">
<stop stop-color="#FFF3B0"></stop>
<stop offset="1" stop-color="#FFD54F"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="bldg2G" x1="36" x2="36" y1="14" y2="42">
<stop stop-color="#BCC8D6"></stop>
<stop offset="1" stop-color="#95A5B8"></stop>
</lineargradient>
</defs>
<rect fill="url(#bldgG)" height="34" rx="2" width="24" x="6" y="8"></rect>
<rect height="34" rx="2" stroke="#6A7D90" strokeWidth="0.8" width="24" x="6" y="8"></rect>
<rect fill="url(#bldg2G)" height="26" rx="2" width="14" x="30" y="16"></rect>
<rect height="26" rx="2" stroke="#6A7D90" strokeWidth="0.8" width="14" x="30" y="16"></rect>
<rect fill="url(#glassG)" height="4" rx="0.8" width="4" x="9" y="12"></rect>
<rect fill="#87CEEB" height="4" opacity="0.6" rx="0.8" width="4" x="15" y="12"></rect>
<rect fill="url(#glassG)" height="4" rx="0.8" width="4" x="21" y="12"></rect>
<rect fill="#87CEEB" height="4" opacity="0.6" rx="0.8" width="4" x="9" y="19"></rect>
<rect fill="url(#glassG)" height="4" rx="0.8" width="4" x="15" y="19"></rect>
<rect fill="url(#glassG)" height="4" rx="0.8" width="4" x="21" y="19"></rect>
<rect fill="url(#glassG)" height="4" rx="0.8" width="4" x="9" y="26"></rect>
<rect fill="url(#glassG)" height="4" rx="0.8" width="4" x="15" y="26"></rect>
<rect fill="#87CEEB" height="4" opacity="0.6" rx="0.8" width="4" x="21" y="26"></rect>
<rect fill="url(#glassG)" height="3.5" rx="0.6" width="3.5" x="33" y="20"></rect>
<rect fill="#87CEEB" height="3.5" opacity="0.6" rx="0.6" width="3.5" x="38" y="20"></rect>
<rect fill="#87CEEB" height="3.5" opacity="0.6" rx="0.6" width="3.5" x="33" y="26"></rect>
<rect fill="url(#glassG)" height="3.5" rx="0.6" width="3.5" x="38" y="26"></rect>
<rect fill="#5A6F85" height="8" rx="1.5" width="8" x="14" y="34"></rect>
<rect fill="#87CEEB" height="5" opacity="0.4" rx="1" width="6" x="15" y="35"></rect>
<line stroke="#6A7D90" strokeWidth="1" x1="18" x2="18" y1="4" y2="8"></line>
<circle cx="18" cy="3.5" fill="#E8485C" r="1.2"></circle>
<ellipse cx="26" cy="43" fill="#00000010" rx="18" ry="1.5"></ellipse>
</svg>
</span>
<span className="text-sm font-medium tracking-tight transition-all duration-300">
                Rent
              </span>
</button>

<button className="relative flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 group text-gray-900 bg-orange-50" type="button">
<span className="transition-transform duration-300 group-hover:scale-110">
<svg className="w-6 h-6" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="sunG" x1="24" x2="24" y1="4" y2="38">
<stop stop-color="#FFD54F"></stop>
<stop offset="1" stop-color="#FF9800"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="faceG" x1="24" x2="24" y1="12" y2="36">
<stop stop-color="#FFECB3"></stop>
<stop offset="1" stop-color="#FFD54F"></stop>
</lineargradient>
</defs>
<g opacity="0.6" stroke="#FFB300" strokeLinecap="round" strokeWidth="2.5">
<line x1="24" x2="24" y1="2" y2="7"></line>
<line x1="24" x2="24" y1="41" y2="46"></line>
<line x1="4" x2="9" y1="24" y2="24"></line>
<line x1="39" x2="44" y1="24" y2="24"></line>
<line x1="9.5" x2="13" y1="9.5" y2="13"></line>
<line x1="35" x2="38.5" y1="35" y2="38.5"></line>
<line x1="38.5" x2="35" y1="9.5" y2="13"></line>
<line x1="13" x2="9.5" y1="35" y2="38.5"></line>
</g>
<circle cx="24" cy="24" fill="url(#sunG)" r="14"></circle>
<circle cx="24" cy="24" r="14" stroke="#E8A000" strokeWidth="0.8"></circle>
<circle cx="24" cy="24" fill="url(#faceG)" r="10.5"></circle>
<line stroke="#5D4037" strokeLinecap="round" strokeWidth="2" x1="24" x2="24" y1="24" y2="17"></line>
<line stroke="#5D4037" strokeLinecap="round" strokeWidth="1.5" x1="24" x2="30" y1="24" y2="27"></line>
<circle cx="24" cy="24" fill="#5D4037" r="1.5"></circle>
<g fill="#BF8F00" opacity="0.5">
<circle cx="24" cy="15" r="1"></circle>
<circle cx="24" cy="33" r="1"></circle>
<circle cx="15" cy="24" r="1"></circle>
<circle cx="33" cy="24" r="1"></circle>
</g>
<path d="M20 27 Q24 30 28 27" fill="none" opacity="0.4" stroke="#BF8F00" strokeLinecap="round" strokeWidth="1"></path>
</svg>
</span>
<span className="text-sm font-semibold tracking-tight transition-all duration-300">
                Daily
              </span>
</button>
</nav>
</div>

<div className="flex items-center gap-3 shrink-0">
<button className="group relative flex items-center gap-2 h-10 pl-3 pr-3.5 rounded-full bg-gradient-to-b from-white to-gray-50/80 border border-gray-200/70 hover:border-gray-900/20 hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out" onclick="(function(b){var s=b.querySelector('[data-lang-text]');var f=b.querySelector('[data-lang-flag]');var isEn=s.textContent.trim()==='EN';s.textContent=isEn?'ខ្មែរ':'EN';if(f)f.textContent=isEn?'🇰🇭':'🇺🇸';f.classList.remove('scale-0');void f.offsetWidth;f.classList.add('scale-100');})(this)">
<span className="relative w-6 h-6 rounded-full bg-white ring-1 ring-gray-200/80 shadow-inner flex items-center justify-center overflow-hidden">
<span className="text-[13px] leading-none transition-transform duration-300" data-lang-flag="">
                🇺🇸
              </span>
</span>
<span className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-900 group-hover:rotate-180 transition-all duration-500 ease-out" data-lucide="globe" strokeWidth="1.75"></i>
<span className="text-xs font-semibold tracking-[0.08em] text-gray-700 group-hover:text-gray-900 transition-colors" data-lang-text="">
                EN
              </span>
</span>
<i className="w-3 h-3 text-gray-400 group-hover:text-gray-700 transition-colors" data-lucide="chevron-down" strokeWidth="2"></i>
</button>
<button aria-label="Toggle theme" className="group relative w-10 h-10 rounded-full bg-gradient-to-b from-white to-gray-50/80 border border-gray-200/70 hover:border-gray-900/20 hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center transition-all duration-300 ease-out overflow-hidden" onclick="(function(btn){var isDark=document.documentElement.classList.toggle('dark');document.body.classList.toggle('bg-gray-900');document.body.classList.toggle('text-white');document.body.classList.toggle('bg-white');document.body.classList.toggle('text-gray-900');var sun=btn.querySelector('[data-icon=sun]');var moon=btn.querySelector('[data-icon=moon]');if(isDark){moon.classList.add('opacity-0','-rotate-90','scale-50');sun.classList.remove('opacity-0','rotate-90','scale-50');btn.classList.add('!bg-gradient-to-b','!from-gray-900','!to-gray-800','!border-gray-700');}else{sun.classList.add('opacity-0','rotate-90','scale-50');moon.classList.remove('opacity-0','-rotate-90','scale-50');btn.classList.remove('!bg-gradient-to-b','!from-gray-900','!to-gray-800','!border-gray-700');}})(this)">
<span className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-200/0 via-orange-200/0 to-orange-300/0 group-hover:from-orange-100/40 group-hover:to-amber-200/30 transition-all duration-500"></span>
<i className="absolute w-[18px] h-[18px] text-gray-700 group-hover:text-gray-900 transition-all duration-500 ease-out" data-icon="moon" data-lucide="moon" strokeWidth="1.75"></i>
<i className="absolute w-[18px] h-[18px] text-amber-400 opacity-0 rotate-90 scale-50 transition-all duration-500 ease-out" data-icon="sun" data-lucide="sun" strokeWidth="1.75"></i>
</button>
<button className="flex items-center gap-2 pl-3 pr-1.5 py-1.5 rounded-full border border-gray-200 hover:shadow-md transition-all relative text-gray-600 bg-white">
<i className="w-4 h-4" data-lucide="menu" strokeWidth="1.5"></i>
<span className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="user" strokeWidth="2"></i>
</span>
<span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
</button>
</div>
</div>
<div className="aura-compact-search absolute left-1/2 -translate-x-1/2 top-3 z-20">
<button className="flex items-center bg-white border border-gray-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow h-12 pl-5 pr-1.5">
<span className="text-sm font-medium text-gray-900 pr-3">Anywhere</span>
<span className="w-px h-5 bg-gray-200"></span>
<span className="text-sm font-medium text-gray-900 px-3">Any week</span>
<span className="w-px h-5 bg-gray-200"></span>
<span className="text-sm text-gray-500 px-3">Add guests</span>
<span className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="search" strokeWidth="2.5"></i>
</span>
</button>
</div>

<div className="h-24 w-full border-t border-gray-100 flex items-center px-6 lg:px-10 relative aura-search-row">
<div className="w-full max-w-[1800px] mx-auto flex items-center justify-center relative">

<div className="flex items-center bg-white border border-gray-200 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-300 h-16 w-full max-w-3xl divide-x divide-gray-200">

<div className="flex-[1.3] px-7 py-2 rounded-l-full hover:bg-gray-50 cursor-pointer h-full flex items-center gap-3 group">
<div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-100 transition-colors">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="2"></i>
</div>
<div className="flex flex-col justify-center overflow-hidden">
<div className="text-[11px] font-semibold uppercase tracking-wider text-gray-900">
                  Where
                </div>
<input className="text-sm text-gray-700 placeholder:text-gray-400 bg-transparent outline-none border-none w-full" placeholder="Search destinations" type="text"/>
</div>
</div>

<div className="flex-1 px-6 py-2 hover:bg-gray-50 cursor-pointer h-full flex items-center gap-3 group">
<div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-100 transition-colors">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="2"></i>
</div>
<div className="flex flex-col justify-center overflow-hidden">
<div className="text-[11px] font-semibold uppercase tracking-wider text-gray-900">
                  Check in
                </div>
<div className="text-sm text-gray-400 truncate">Add dates</div>
</div>
</div>

<div className="flex-1 px-6 py-2 hover:bg-gray-50 cursor-pointer h-full flex items-center gap-3 group">
<div className="w-9 h-9 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 shrink-0 group-hover:bg-purple-100 transition-colors">
<i className="w-4 h-4" data-lucide="calendar-check" strokeWidth="2"></i>
</div>
<div className="flex flex-col justify-center overflow-hidden">
<div className="text-[11px] font-semibold uppercase tracking-wider text-gray-900">
                  Check out
                </div>
<div className="text-sm text-gray-400 truncate">Add dates</div>
</div>
</div>

<div className="flex-[1.3] pl-6 pr-2 py-2 rounded-r-full hover:bg-gray-50 cursor-pointer h-full flex items-center justify-between gap-2">
<div className="flex items-center gap-3 overflow-hidden">
<div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
<i className="w-4 h-4" data-lucide="users" strokeWidth="2"></i>
</div>
<div className="flex flex-col justify-center overflow-hidden">
<div className="text-[11px] font-semibold uppercase tracking-wider text-gray-900">
                    Guests
                  </div>
<div className="text-sm text-gray-400 truncate">Add guests</div>
</div>
</div>
<button className="flex items-center gap-2 h-12 px-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all text-white shrink-0 shadow-md shadow-orange-500/30 hover:shadow-lg hover:shadow-orange-500/40">
<i className="w-4 h-4" data-lucide="search" strokeWidth="2.5"></i>
<span className="text-sm font-semibold">Search</span>
</button>
</div>
</div>

<button className="ml-4 flex items-center gap-2 h-12 px-4 rounded-full border border-gray-200 text-gray-700 hover:border-gray-900/20 hover:shadow-sm hover:bg-gray-50 transition-all bg-white shrink-0">
<i className="w-4 h-4" data-lucide="sliders-horizontal" strokeWidth="2"></i>
<span className="text-sm font-medium">Filters</span>
<span className="ml-1 inline-flex items-center justify-center text-[10px] font-semibold bg-orange-500 text-white rounded-full w-5 h-5">
              3
            </span>
</button>

<div className="absolute right-0 flex items-center">
<button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 hover:shadow-sm transition-all bg-white text-gray-900 font-medium text-sm">
<span>Map</span>
<i className="w-4 h-4" data-lucide="map" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="h-[90px] w-full border-t border-gray-100 bg-white relative flex items-center">
<div className="w-full max-w-[1800px] mx-auto px-6 lg:px-10 flex items-center relative">

<button className="absolute left-6 lg:left-10 z-10 w-8 h-8 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:scale-105 transition-transform">
<i className="w-4 h-4" data-lucide="chevron-left" strokeWidth="2"></i>
</button>

<div className="flex items-center gap-10 overflow-x-auto no-scrollbar w-full px-12 py-2">

<button className="flex flex-col items-center gap-2 min-w-max group text-gray-900 cursor-pointer">
<div className="relative w-7 h-7 flex items-center justify-center text-blue-500 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="layout-grid" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium border-b-2 border-gray-900 pb-1 -mb-[6px]">
                All
              </span>
</button>
<button className="flex flex-col items-center gap-2 min-w-max group text-gray-500 hover:text-gray-900 cursor-pointer transition-colors opacity-70 hover:opacity-100">
<div className="relative w-7 h-7 flex items-center justify-center text-orange-400 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium pb-1 -mb-[6px] border-b-2 border-transparent">
                Villas
              </span>
</button>
<button className="flex flex-col items-center gap-2 min-w-max group text-gray-500 hover:text-gray-900 cursor-pointer transition-colors opacity-70 hover:opacity-100">
<div className="relative w-7 h-7 flex items-center justify-center text-yellow-500 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium pb-1 -mb-[6px] border-b-2 border-transparent">
                Beachfront
              </span>
</button>
<button className="flex flex-col items-center gap-2 min-w-max group text-gray-500 hover:text-gray-900 cursor-pointer transition-colors opacity-70 hover:opacity-100">
<div className="relative w-7 h-7 flex items-center justify-center text-teal-500 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium pb-1 -mb-[6px] border-b-2 border-transparent">
                Lakefront
              </span>
</button>
<button className="flex flex-col items-center gap-2 min-w-max group text-gray-500 hover:text-gray-900 cursor-pointer transition-colors opacity-70 hover:opacity-100">
<div className="relative w-7 h-7 flex items-center justify-center text-green-500 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="palmtree" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium pb-1 -mb-[6px] border-b-2 border-transparent">
                Tropical
              </span>
</button>
<button className="flex flex-col items-center gap-2 min-w-max group text-gray-500 hover:text-gray-900 cursor-pointer transition-colors opacity-70 hover:opacity-100">
<div className="relative w-7 h-7 flex items-center justify-center text-cyan-500 transition-transform group-hover:scale-110">
<i className="w-6 h-6 fill-cyan-500/20" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium pb-1 -mb-[6px] border-b-2 border-transparent">
                Pools
              </span>
</button>
<button className="flex flex-col items-center gap-2 min-w-max group text-gray-500 hover:text-gray-900 cursor-pointer transition-colors opacity-70 hover:opacity-100">
<div className="relative w-7 h-7 flex items-center justify-center text-stone-500 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="mountain" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium pb-1 -mb-[6px] border-b-2 border-transparent">
                Mountains
              </span>
</button>
<button className="flex flex-col items-center gap-2 min-w-max group text-gray-500 hover:text-gray-900 cursor-pointer transition-colors opacity-70 hover:opacity-100">
<div className="relative w-7 h-7 flex items-center justify-center text-emerald-600 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="trees" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium pb-1 -mb-[6px] border-b-2 border-transparent">
                Countryside
              </span>
</button>
<button className="flex flex-col items-center gap-2 min-w-max group text-gray-500 hover:text-gray-900 cursor-pointer transition-colors opacity-70 hover:opacity-100">
<div className="relative w-7 h-7 flex items-center justify-center text-amber-500 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="gem" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium pb-1 -mb-[6px] border-b-2 border-transparent">
                Luxury
              </span>
</button>
<button className="flex flex-col items-center gap-2 min-w-max group text-gray-500 hover:text-gray-900 cursor-pointer transition-colors opacity-70 hover:opacity-100">
<div className="relative w-7 h-7 flex items-center justify-center text-indigo-500 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="tent" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium pb-1 -mb-[6px] border-b-2 border-transparent">
                Unique stays
              </span>
</button>
</div>

<button className="absolute right-6 lg:right-10 z-10 w-8 h-8 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:scale-105 transition-transform">
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="2"></i>
</button>
</div>
</div>
</header>

<main className="pt-[270px] pb-16 w-full max-w-[1800px] mx-auto px-6 lg:px-10 aura-main">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10">

<div className="aura-card flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
<img alt="Azure Suites" className="aura-card-img object-cover w-full h-full" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3 flex gap-1.5 z-10">
<span className="aura-chip bg-white/95 text-gray-900 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase flex items-center gap-1.5 shadow-sm">
<i className="w-3 h-3" data-lucide="building-2" strokeWidth="2"></i>
                Condo
              </span>
<span className="aura-chip bg-gray-900/85 text-white px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase shadow-sm">
                Daily
              </span>
</div>
<button className="absolute top-3 right-3 z-10 text-white/90 hover:text-white hover:scale-110 transition-all duration-200">
<div className="aura-fav bg-white/95 shadow-sm p-2 rounded-full text-gray-700 hover:text-rose-500">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</div>
</button>
</div>
<div className="flex flex-col gap-1 p-4">
<div className="flex justify-between items-start mt-1">
<h3 className="text-lg font-medium tracking-tight text-gray-900">
                Azure Suites
              </h3>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900 shrink-0">
<i className="w-3.5 h-3.5 fill-orange-400 text-orange-400" data-lucide="star" strokeWidth="1.5"></i>
                4.4
              </div>
</div>
<p className="text-sm text-gray-500 truncate flex items-center gap-1">
<i className="w-3.5 h-3.5 text-gray-400 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
              Kep, 643 Street 51, Kep City, Kep
            </p>
<div className="flex justify-between items-end mt-3 pt-3 border-t border-gray-100">
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-gray-900">
                  $11
                </span>
<span className="text-sm font-medium text-gray-500">/DAY</span>
</div>
<div className="flex items-center gap-3.5 text-sm font-medium text-gray-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bed" strokeWidth="1.5"></i>
                  2
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bath" strokeWidth="1.5"></i>
                  2
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="scaling" strokeWidth="1.5"></i>
                  1,475
                </div>
</div>
</div>
</div>
</div>

<div className="aura-card flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
<img alt="Spring Village" className="aura-card-img object-cover w-full h-full" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3 flex gap-1.5 z-10">
<span className="aura-chip bg-white/95 text-gray-900 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase flex items-center gap-1.5 shadow-sm">
<i className="w-3 h-3" data-lucide="home" strokeWidth="2"></i>
                Villa
              </span>
<span className="aura-chip bg-gray-900/85 text-white px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase shadow-sm">
                Daily
              </span>
</div>
<button className="absolute top-3 right-3 z-10 text-white/90 hover:text-white hover:scale-110 transition-all duration-200">
<div className="aura-fav bg-white/95 shadow-sm p-2 rounded-full text-gray-700 hover:text-rose-500">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</div>
</button>
</div>
<div className="flex flex-col gap-1 p-4">
<div className="flex justify-between items-start mt-1">
<h3 className="text-lg font-medium tracking-tight text-gray-900">
                Spring Village
              </h3>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900 shrink-0">
<i className="w-3.5 h-3.5 fill-orange-400 text-orange-400" data-lucide="star" strokeWidth="1.5"></i>
                4.5
              </div>
</div>
<p className="text-sm text-gray-500 truncate flex items-center gap-1">
<i className="w-3.5 h-3.5 text-gray-400 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
              Prey Veng, 1 Monivong Blvd, Svay Antor, Pr...
            </p>
<div className="flex justify-between items-end mt-3 pt-3 border-t border-gray-100">
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-gray-900">
                  $62
                </span>
<span className="text-sm font-medium text-gray-500">/DAY</span>
</div>
<div className="flex items-center gap-3.5 text-sm font-medium text-gray-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bed" strokeWidth="1.5"></i>
                  8
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bath" strokeWidth="1.5"></i>
                  6
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="scaling" strokeWidth="1.5"></i>
                  3,738
                </div>
</div>
</div>
</div>
</div>

<div className="aura-card flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
<img alt="Haven Grove" className="aura-card-img object-cover w-full h-full" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3 flex gap-1.5 z-10">
<span className="aura-chip bg-white/95 text-gray-900 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase flex items-center gap-1.5 shadow-sm">
<i className="w-3 h-3" data-lucide="home" strokeWidth="2"></i>
                Home
              </span>
<span className="aura-chip bg-gray-900/85 text-white px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase shadow-sm">
                Daily
              </span>
</div>
<button className="absolute top-3 right-3 z-10 text-white/90 hover:text-white hover:scale-110 transition-all duration-200">
<div className="aura-fav bg-white/95 shadow-sm p-2 rounded-full text-gray-700 hover:text-rose-500">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</div>
</button>
</div>
<div className="flex flex-col gap-1 p-4">
<div className="flex justify-between items-start mt-1">
<h3 className="text-lg font-medium tracking-tight text-gray-900">
                Haven Grove
              </h3>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900 shrink-0">
<i className="w-3.5 h-3.5 fill-orange-400 text-orange-400" data-lucide="star" strokeWidth="1.5"></i>
                4.5
              </div>
</div>
<p className="text-sm text-gray-500 truncate flex items-center gap-1">
<i className="w-3.5 h-3.5 text-gray-400 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
              Siem Reap, 653 Sothearos Blvd, Wat Dam...
            </p>
<div className="flex justify-between items-end mt-3 pt-3 border-t border-gray-100">
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-gray-900">
                  $32
                </span>
<span className="text-sm font-medium text-gray-500">/DAY</span>
</div>
<div className="flex items-center gap-3.5 text-sm font-medium text-gray-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bed" strokeWidth="1.5"></i>
                  4
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bath" strokeWidth="1.5"></i>
                  2
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="scaling" strokeWidth="1.5"></i>
                  1,847
                </div>
</div>
</div>
</div>
</div>

<div className="aura-card flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
<img alt="Summit Pointe" className="aura-card-img object-cover w-full h-full" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3 flex gap-1.5 z-10">
<span className="aura-chip bg-white/95 text-gray-900 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase flex items-center gap-1.5 shadow-sm">
<i className="w-3 h-3" data-lucide="home" strokeWidth="2"></i>
                Home
              </span>
<span className="aura-chip bg-gray-900/85 text-white px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase shadow-sm">
                Daily
              </span>
</div>
<button className="absolute top-3 right-3 z-10 text-white/90 hover:text-white hover:scale-110 transition-all duration-200">
<div className="aura-fav bg-white/95 shadow-sm p-2 rounded-full text-gray-700 hover:text-rose-500">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</div>
</button>
</div>
<div className="flex flex-col gap-1 p-4">
<div className="flex justify-between items-start mt-1">
<h3 className="text-lg font-medium tracking-tight text-gray-900">
                Summit Pointe
              </h3>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900 shrink-0">
<i className="w-3.5 h-3.5 fill-orange-400 text-orange-400" data-lucide="star" strokeWidth="1.5"></i>
                3.8
              </div>
</div>
<p className="text-sm text-gray-500 truncate flex items-center gap-1">
<i className="w-3.5 h-3.5 text-gray-400 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
              Kampot, 802 National Road 2, Kampong K...
            </p>
<div className="flex justify-between items-end mt-3 pt-3 border-t border-gray-100">
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-gray-900">
                  $16
                </span>
<span className="text-sm font-medium text-gray-500">/DAY</span>
</div>
<div className="flex items-center gap-3.5 text-sm font-medium text-gray-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bed" strokeWidth="1.5"></i>
                  4
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bath" strokeWidth="1.5"></i>
                  1
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="scaling" strokeWidth="1.5"></i>
                  3,183
                </div>
</div>
</div>
</div>
</div>

<div className="aura-card flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
<img alt="Crest Suites" className="aura-card-img object-cover w-full h-full" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3 flex gap-1.5 z-10">
<span className="aura-chip bg-white/95 text-gray-900 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase flex items-center gap-1.5 shadow-sm">
<i className="w-3 h-3" data-lucide="home" strokeWidth="2"></i>
                Home
              </span>
<span className="aura-chip bg-gray-900/85 text-white px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase shadow-sm">
                Daily
              </span>
</div>
<button className="absolute top-3 right-3 z-10 text-white/90 hover:text-white hover:scale-110 transition-all duration-200">
<div className="aura-fav bg-white/95 shadow-sm p-2 rounded-full text-gray-700 hover:text-rose-500">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</div>
</button>
</div>
<div className="flex flex-col gap-1 p-4">
<div className="flex justify-between items-start mt-1">
<h3 className="text-lg font-medium tracking-tight text-gray-900">
                Crest Suites
              </h3>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900 shrink-0">
<i className="w-3.5 h-3.5 fill-orange-400 text-orange-400" data-lucide="star" strokeWidth="1.5"></i>
                4.5
              </div>
</div>
<p className="text-sm text-gray-500 truncate flex items-center gap-1">
<i className="w-3.5 h-3.5 text-gray-400 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
              Takeo, 569 National Road 6, Doun Kaev, Ta...
            </p>
<div className="flex justify-between items-end mt-3 pt-3 border-t border-gray-100">
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-gray-900">
                  $19
                </span>
<span className="text-sm font-medium text-gray-500">/DAY</span>
</div>
<div className="flex items-center gap-3.5 text-sm font-medium text-gray-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bed" strokeWidth="1.5"></i>
                  3
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bath" strokeWidth="1.5"></i>
                  2
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="scaling" strokeWidth="1.5"></i>
                  2,450
                </div>
</div>
</div>
</div>
</div>

<div className="aura-card flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
<img alt="Serenity Residence" className="aura-card-img object-cover w-full h-full" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3 flex gap-1.5 z-10">
<span className="aura-chip bg-white/95 text-gray-900 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase flex items-center gap-1.5 shadow-sm">
<i className="w-3 h-3" data-lucide="home" strokeWidth="2"></i>
                Villa
              </span>
<span className="aura-chip bg-gray-900/85 text-white px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase shadow-sm">
                Daily
              </span>
</div>
<button className="absolute top-3 right-3 z-10 text-white/90 hover:text-white hover:scale-110 transition-all duration-200">
<div className="aura-fav bg-white/95 shadow-sm p-2 rounded-full text-gray-700 hover:text-rose-500">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</div>
</button>
</div>
<div className="flex flex-col gap-1 p-4">
<div className="flex justify-between items-start mt-1">
<h3 className="text-lg font-medium tracking-tight text-gray-900">
                Serenity Residence
              </h3>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900 shrink-0">
<i className="w-3.5 h-3.5 fill-orange-400 text-orange-400" data-lucide="star" strokeWidth="1.5"></i>
                4.4
              </div>
</div>
<p className="text-sm text-gray-500 truncate flex items-center gap-1">
<i className="w-3.5 h-3.5 text-gray-400 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
              Kampong Cham, 532 Street 178, Sambour, ...
            </p>
<div className="flex justify-between items-end mt-3 pt-3 border-t border-gray-100">
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-gray-900">
                  $28
                </span>
<span className="text-sm font-medium text-gray-500">/DAY</span>
</div>
<div className="flex items-center gap-3.5 text-sm font-medium text-gray-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bed" strokeWidth="1.5"></i>
                  5
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bath" strokeWidth="1.5"></i>
                  4
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="scaling" strokeWidth="1.5"></i>
                  4,120
                </div>
</div>
</div>
</div>
</div>

<div className="aura-card flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
<img alt="Garden Landing" className="aura-card-img object-cover w-full h-full" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3 flex gap-1.5 z-10">
<span className="aura-chip bg-white/95 text-gray-900 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase flex items-center gap-1.5 shadow-sm">
<i className="w-3 h-3" data-lucide="home" strokeWidth="2"></i>
                Home
              </span>
<span className="aura-chip bg-gray-900/85 text-white px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase shadow-sm">
                Daily
              </span>
</div>
<button className="absolute top-3 right-3 z-10 text-white/90 hover:text-white hover:scale-110 transition-all duration-200">
<div className="aura-fav bg-white/95 shadow-sm p-2 rounded-full text-gray-700 hover:text-rose-500">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</div>
</button>
</div>
<div className="flex flex-col gap-1 p-4">
<div className="flex justify-between items-start mt-1">
<h3 className="text-lg font-medium tracking-tight text-gray-900">
                Garden Landing
              </h3>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900 shrink-0">
<i className="w-3.5 h-3.5 fill-orange-400 text-orange-400" data-lucide="star" strokeWidth="1.5"></i>
                4.1
              </div>
</div>
<p className="text-sm text-gray-500 truncate flex items-center gap-1">
<i className="w-3.5 h-3.5 text-gray-400 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
              Phnom Penh, 117 National Road 1, Chbar A...
            </p>
<div className="flex justify-between items-end mt-3 pt-3 border-t border-gray-100">
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-gray-900">
                  $14
                </span>
<span className="text-sm font-medium text-gray-500">/DAY</span>
</div>
<div className="flex items-center gap-3.5 text-sm font-medium text-gray-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bed" strokeWidth="1.5"></i>
                  3
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bath" strokeWidth="1.5"></i>
                  2
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="scaling" strokeWidth="1.5"></i>
                  1,980
                </div>
</div>
</div>
</div>
</div>

<div className="aura-card flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
<img alt="Pearl Suites" className="aura-card-img object-cover w-full h-full" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 left-3 flex gap-1.5 z-10">
<span className="aura-chip bg-white/95 text-gray-900 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase flex items-center gap-1.5 shadow-sm">
<i className="w-3 h-3" data-lucide="home" strokeWidth="2"></i>
                Home
              </span>
<span className="aura-chip bg-gray-900/85 text-white px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase shadow-sm">
                Daily
              </span>
</div>
<button className="absolute top-3 right-3 z-10 text-white/90 hover:text-white hover:scale-110 transition-all duration-200">
<div className="aura-fav bg-white/95 shadow-sm p-2 rounded-full text-gray-700 hover:text-rose-500">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</div>
</button>
</div>
<div className="flex flex-col gap-1 p-4">
<div className="flex justify-between items-start mt-1">
<h3 className="text-lg font-medium tracking-tight text-gray-900">
                Pearl Suites
              </h3>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900 shrink-0">
<i className="w-3.5 h-3.5 fill-orange-400 text-orange-400" data-lucide="star" strokeWidth="1.5"></i>
                3.6
              </div>
</div>
<p className="text-sm text-gray-500 truncate flex items-center gap-1">
<i className="w-3.5 h-3.5 text-gray-400 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
              Kratie, 523 National Road 4, Kratie City, Kr...
            </p>
<div className="flex justify-between items-end mt-3 pt-3 border-t border-gray-100">
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-gray-900">
                  $18
                </span>
<span className="text-sm font-medium text-gray-500">/DAY</span>
</div>
<div className="flex items-center gap-3.5 text-sm font-medium text-gray-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bed" strokeWidth="1.5"></i>
                  4
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bath" strokeWidth="1.5"></i>
                  3
                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="scaling" strokeWidth="1.5"></i>
                  2,800
                </div>
</div>
</div>
</div>
</div>
</div>
</main>




    </>
  );
}

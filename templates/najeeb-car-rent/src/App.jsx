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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<main className="flex-1 flex flex-col min-w-0 bg-[#F8F9FA]">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-10 z-10 shrink-0">

<div className="flex items-center flex-1">
<span className="font-semibold text-2xl text-[#8b5cf6] font-sans tracking-tight me-8 xl:me-12">
            NaJeeb
          </span>
<nav className="hidden lg:flex items-center gap-1 xl:gap-2">
<a className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8b5cf6] text-white font-medium text-sm shadow-sm shadow-purple-500/20 transition-transform hover:scale-105" href="#">
<iconify-icon icon="solar:home-2-bold" width="20"></iconify-icon>
<span className="font-sans tracking-wide">Home</span>
</a>
<a className="p-2.5 text-slate-400 hover:text-[#8b5cf6] hover:bg-purple-50 rounded-full transition-all hover:scale-105" href="#">
<iconify-icon icon="solar:car-linear" width="22"></iconify-icon>
</a>
<a className="p-2.5 text-slate-400 hover:text-[#8b5cf6] hover:bg-purple-50 rounded-full transition-all hover:scale-105" href="#">
<iconify-icon icon="solar:key-linear" width="22"></iconify-icon>
</a>
<a className="p-2.5 text-slate-400 hover:text-[#8b5cf6] hover:bg-purple-50 rounded-full transition-all hover:scale-105" href="#">
<iconify-icon icon="solar:calendar-linear" width="22"></iconify-icon>
</a>
<a className="p-2.5 text-slate-400 hover:text-[#8b5cf6] hover:bg-purple-50 rounded-full transition-all hover:scale-105" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</a>
<a className="p-2.5 text-slate-400 hover:text-[#8b5cf6] hover:bg-purple-50 rounded-full transition-all hover:scale-105" href="#">
<iconify-icon icon="solar:chart-linear" width="22"></iconify-icon>
</a>
<a className="p-2.5 text-slate-400 hover:text-[#8b5cf6] hover:bg-purple-50 rounded-full transition-all hover:scale-105" href="#">
<iconify-icon icon="solar:map-point-linear" width="22"></iconify-icon>
</a>
<a className="p-2.5 text-slate-400 hover:text-[#8b5cf6] hover:bg-purple-50 rounded-full transition-all hover:scale-105" href="#">
<iconify-icon icon="solar:tuning-square-2-linear" width="22"></iconify-icon>
</a>
</nav>
</div>

<div className="flex items-center gap-2 sm:gap-3 ms-auto shrink-0">
<button className="p-2 text-slate-400 hover:text-[#8b5cf6] transition-colors rounded-full hover:bg-purple-50">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="p-2 text-slate-400 hover:text-[#8b5cf6] transition-colors rounded-full hover:bg-purple-50">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="relative p-2 text-slate-400 hover:text-[#8b5cf6] transition-colors rounded-full hover:bg-purple-50">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-2 end-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="h-8 w-px bg-slate-200 hidden sm:block mx-1"></div>
<button className="flex items-center gap-3 hover:opacity-80 transition-opacity ps-1">
<img alt="Profile" className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="hidden sm:block text-start">
<p className="text-sm font-semibold text-slate-800 leading-none font-sans">
                Ruben George
              </p>
<p className="text-[11px] text-slate-500 mt-1 font-sans tracking-wide">
                rubengeo@gmail.com
              </p>
</div>
<iconify-icon className="text-slate-400 w-4 h-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10 custom-scrollbar">
<div className="w-full flex flex-col gap-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl p-6 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] flex flex-col hover:border-slate-200 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
<p className="text-slate-500 text-sm font-medium mb-1">
                الإيجارات النشطة
              </p>
<div className="flex items-baseline justify-between mt-auto">
<h3 className="text-3xl font-semibold tracking-tight text-slate-800 font-sans">
                  28
                </h3>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
<iconify-icon icon="solar:chart-up-linear" strokeWidth="2"></iconify-icon>
                  +25%
                </span>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] flex flex-col hover:border-slate-200 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
<iconify-icon icon="solar:car-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
<p className="text-slate-500 text-sm font-medium mb-1">
                المركبات المتاحة
              </p>
<div className="flex items-baseline justify-between mt-auto">
<h3 className="text-3xl font-semibold tracking-tight text-slate-800 font-sans">
                  252
                </h3>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
<iconify-icon icon="solar:chart-up-linear" strokeWidth="2"></iconify-icon>
                  +12%
                </span>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] flex flex-col hover:border-slate-200 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
<p className="text-slate-500 text-sm font-medium mb-1">
                المرتجعات المعلقة
              </p>
<div className="flex items-baseline justify-between mt-auto">
<h3 className="text-3xl font-semibold tracking-tight text-slate-800 font-sans">
                  13
                </h3>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
<iconify-icon icon="solar:chart-up-linear" strokeWidth="2"></iconify-icon>
                  +21%
                </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-8 bg-white rounded-xl p-6 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-5">
<h2 className="text-lg font-semibold text-slate-800">
                  ابحث عن مركبة
                </h2>
<button className="text-xs font-medium text-blue-500 hover:underline">
                  إعادة ضبط
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<div className="relative">
<iconify-icon className="absolute top-1/2 -translate-y-1/2 start-3 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-slate-50/80 border border-slate-200 rounded-lg py-2.5 ps-9 pe-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-slate-400" placeholder="بحث بالاسم أو اللوحة..." type="text"/>
</div>
<div className="relative cursor-pointer bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition-colors rounded-lg py-2.5 px-4 flex items-center justify-between text-sm">
<span className="text-slate-800 font-medium">ألفا روميو</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative cursor-pointer bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition-colors rounded-lg py-2.5 px-4 flex items-center justify-between text-sm">
<span className="text-slate-400">موديل السيارة</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2 border-t border-slate-100">
<div className="flex items-center gap-3 overflow-x-auto pb-2 sm:pb-0">
<span className="text-sm text-slate-500 font-medium shrink-0">
                    النوع:
                  </span>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-blue-500 text-white shadow-sm shrink-0">
                    SUV
                  </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 shrink-0 transition-colors">
                    Sport
                  </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 shrink-0 transition-colors">
                    Coupe
                  </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 shrink-0 transition-colors">
                    Hatchback
                  </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 shrink-0 transition-colors">
                    MVP
                  </button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 shrink-0 transition-colors">
                    Sedan
                  </button>
</div>
<div className="flex items-center gap-3 shrink-0">
<span className="text-sm text-slate-500 font-medium">اللون:</span>
<div className="flex items-center gap-2">
<button className="w-6 h-6 rounded-full bg-slate-900 ring-2 ring-offset-2 ring-blue-500"></button>
<button className="w-6 h-6 rounded-full bg-blue-600 border border-slate-200 hover:scale-110 transition-transform"></button>
<button className="w-6 h-6 rounded-full bg-red-600 border border-slate-200 hover:scale-110 transition-transform"></button>
<button className="w-6 h-6 rounded-full bg-slate-600 border border-slate-200 hover:scale-110 transition-transform"></button>
<button className="w-6 h-6 rounded-full bg-green-600 border border-slate-200 hover:scale-110 transition-transform"></button>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 bg-white rounded-xl p-1 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] relative overflow-hidden min-h-[250px] flex flex-col">

<div className="absolute inset-0 bg-[#f1f5f9] opacity-70 rounded-lg" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="absolute top-4 end-4 flex flex-col gap-1.5 z-10">
<button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-md shadow flex items-center justify-center text-slate-600 hover:text-blue-500 transition-colors border border-slate-100">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
<button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-md shadow flex items-center justify-center text-slate-600 hover:text-blue-500 transition-colors border border-slate-100">
<iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
</div>
<button className="absolute top-4 start-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-md shadow flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors border border-slate-100 z-10">
<iconify-icon icon="solar:full-screen-linear"></iconify-icon>
</button>

<div className="absolute top-[45%] start-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
<div className="bg-white px-3 py-1.5 rounded-lg shadow-md mb-2 flex items-center gap-2 border border-slate-100 pointer-events-none">
<span className="w-2 h-2 rounded-full bg-blue-500 relative">
<span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></span>
</span>
<div>
<p className="text-xs font-semibold text-slate-800 leading-none">
                      تسلا موديل 3
                    </p>
<p className="text-[10px] text-slate-500 font-sans mt-0.5 tracking-wide">
                      B 112 ABC
                    </p>
</div>
</div>
<div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white relative cursor-pointer hover:scale-105 transition-transform">
<iconify-icon icon="solar:car-linear" width="20"></iconify-icon>

<div className="absolute -bottom-1.5 w-3 h-3 bg-blue-500 rotate-45 -z-10 rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-8 bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col">
<div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:calendar-date-linear"></iconify-icon>
                  الجدول والحجوزات
                </h2>
<div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/50">
<button className="px-3.5 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 rounded-md transition-colors">
                    يوم
                  </button>
<button className="px-3.5 py-1 text-xs font-medium bg-white text-slate-800 shadow-sm rounded-md border border-slate-100">
                    أسبوع
                  </button>
<button className="px-3.5 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 rounded-md transition-colors">
                    شهر
                  </button>
</div>
</div>
<div className="p-6 flex-1 overflow-x-auto custom-scrollbar">
<div className="min-w-[600px]">

<div className="grid grid-cols-5 gap-4 mb-3 pb-2 border-b border-slate-100 text-xs font-medium text-slate-400">
<div className="col-span-1">المركبة</div>
<div className="text-center text-slate-600">الأسبوع 1</div>
<div className="text-center text-slate-600">الأسبوع 2</div>
<div className="text-center text-slate-600">الأسبوع 3</div>
<div className="text-center text-slate-600">الأسبوع 4</div>
</div>

<div className="grid grid-cols-5 gap-4 items-center py-3 relative group">
<div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 rounded-lg -z-10 transition-opacity"></div>
<div className="col-span-1 flex items-center gap-3">
<div className="w-10 h-8 bg-slate-100 rounded flex items-center justify-center border border-slate-200/50">
<iconify-icon className="text-slate-500" icon="solar:car-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-800 leading-tight">
                          تويوتا أفانزا
                        </p>
<p className="text-[10px] text-slate-400 font-sans tracking-wide mt-0.5">
                          B 1234 ABC
                        </p>
</div>
</div>

<div className="col-span-4 relative h-8 bg-slate-50 rounded-md border border-slate-100 flex">
<div className="flex-1 border-e border-slate-200 border-dashed"></div>
<div className="flex-1 border-e border-slate-200 border-dashed"></div>
<div className="flex-1 border-e border-slate-200 border-dashed"></div>
<div className="flex-1"></div>

<div className="absolute top-1 bottom-1 start-0 w-1/4 px-1 z-10 cursor-pointer hover:opacity-90 transition-opacity">
<div className="h-full bg-gradient-to-l from-blue-500 to-blue-400 rounded shadow-sm flex items-center px-2 text-[10px] text-white font-medium truncate">
                          و. بحري
                        </div>
</div>
</div>
</div>

<div className="grid grid-cols-5 gap-4 items-center py-3 relative group border-t border-slate-50">
<div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 rounded-lg -z-10 transition-opacity"></div>
<div className="col-span-1 flex items-center gap-3">
<div className="w-10 h-8 bg-slate-100 rounded flex items-center justify-center border border-slate-200/50">
<iconify-icon className="text-slate-500" icon="solar:car-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-800 leading-tight">
                          تويوتا كاليا
                        </p>
<p className="text-[10px] text-slate-400 font-sans tracking-wide mt-0.5">
                          B 2456 RBH
                        </p>
</div>
</div>

<div className="col-span-4 relative h-8 bg-slate-50 rounded-md border border-slate-100 flex">
<div className="flex-1 border-e border-slate-200 border-dashed"></div>
<div className="flex-1 border-e border-slate-200 border-dashed"></div>
<div className="flex-1 border-e border-slate-200 border-dashed"></div>
<div className="flex-1"></div>

<div className="absolute top-1 bottom-1 start-1/4 w-1/4 px-1 z-10 cursor-pointer hover:opacity-90 transition-opacity">
<div className="h-full bg-gradient-to-l from-slate-700 to-slate-600 rounded shadow-sm flex items-center px-2 text-[10px] text-white font-medium truncate">
                          و. بحري
                        </div>
</div>
</div>
</div>

<div className="grid grid-cols-5 gap-4 items-center py-3 relative group border-t border-slate-50 opacity-50">
<div className="col-span-1 flex items-center gap-3">
<div className="w-10 h-8 bg-slate-100 rounded flex items-center justify-center border border-slate-200/50">
<iconify-icon className="text-slate-400" icon="solar:car-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-600 leading-tight">
                          هوندا سيفيك
                        </p>
<p className="text-[10px] text-slate-400 font-sans tracking-wide mt-0.5">
                          B 9981 XYZ
                        </p>
</div>
</div>
<div className="col-span-4 relative h-8 bg-transparent flex">
<div className="flex-1 border-e border-slate-200 border-dashed"></div>
<div className="flex-1 border-e border-slate-200 border-dashed"></div>
<div className="flex-1 border-e border-slate-200 border-dashed"></div>
<div className="flex-1"></div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col">

<div className="h-44 bg-slate-100 relative overflow-hidden group">
<img alt="Tesla Model 3" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

<div className="absolute top-3 end-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 text-slate-800 shadow-sm">
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<span className="font-sans">4.9</span>
<span className="text-slate-400 font-medium text-[10px]">
                    (254 تقييم)
                  </span>
</div>

<div className="absolute bottom-3 start-0 w-full px-4 flex gap-2 overflow-x-auto hide-scrollbar">
<img className="w-10 h-10 rounded border-2 border-white shadow-sm object-cover cursor-pointer" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="w-10 h-10 rounded border border-white/40 bg-white/20 backdrop-blur-sm shadow-sm cursor-pointer hover:bg-white/40 transition-colors flex items-center justify-center"></div>
<div className="w-10 h-10 rounded border border-white/40 bg-white/20 backdrop-blur-sm shadow-sm cursor-pointer hover:bg-white/40 transition-colors flex items-center justify-center"></div>
</div>
</div>

<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-semibold text-lg text-slate-800">
                      تسلا موديل 3
                    </h3>
<p className="text-xs text-slate-500 mt-0.5">
                      Long Range Dual Motor AWD
                    </p>
</div>
<div className="text-end bg-blue-50 px-3 py-1.5 rounded-lg">
<p className="font-semibold text-blue-500 font-sans tracking-tight text-lg">
                      $42.00
                    </p>
<p className="text-[10px] text-slate-500 mt-0.5">/ ساعة</p>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-slate-600 mb-5 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
<iconify-icon className="text-slate-400" icon="solar:routing-linear" width="16"></iconify-icon>
<span className="font-sans">620m</span>
<span className="text-slate-400">(8 دقائق)</span>
<span className="w-1 h-1 rounded-full bg-slate-300 mx-1"></span>
<span className="text-blue-500 font-medium flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                    2 متاحة
                  </span>
</div>

<div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 mt-auto">
<div className="flex items-center gap-2 text-xs text-slate-700">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-500" icon="solar:car-linear"></iconify-icon>
</div>
                    سيدان
                  </div>
<div className="flex items-center gap-2 text-xs text-slate-700">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-500" icon="solar:settings-linear"></iconify-icon>
</div>
                    أوتوماتيك
                  </div>
<div className="flex items-center gap-2 text-xs text-slate-700">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-amber-500" icon="solar:bolt-linear"></iconify-icon>
</div>
                    كهربائي
                  </div>
<div className="flex items-center gap-2 text-xs text-slate-700">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-500" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
                    5 مقاعد
                  </div>
</div>
<button className="w-full bg-blue-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm shadow-blue-500/20 flex items-center justify-center gap-2">
<iconify-icon icon="solar:key-linear" width="18"></iconify-icon>
                  حجز المركبة
                </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-6">

<div className="xl:col-span-8 bg-slate-900 rounded-xl overflow-hidden relative flex flex-col sm:flex-row shadow-md border border-slate-800">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-e from-slate-900 via-slate-900/90 to-transparent pointer-events-none"></div>
<div className="p-8 sm:w-3/5 z-10 flex flex-col justify-center">
<h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                  ابحث عن سيارة أحلامك للمؤسسة
                </h2>
<p className="text-slate-400 text-sm mb-6 max-w-md">
                  اكتشف أسطولنا الواسع من المركبات الفاخرة والعملية المجهزة
                  بالكامل لتلبية احتياجات أعمالك.
                </p>
<div className="relative max-w-sm">
<input className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg py-3 ps-4 pe-12 text-sm focus:border-white/40 focus:ring-1 focus:ring-white/40 outline-none transition-all placeholder-slate-400" placeholder="أدخل اسم المركبة أو الموديل..." type="text"/>
<button className="absolute top-1/2 -translate-y-1/2 end-2 w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
</div>
</div>
<div className="hidden sm:block sm:w-2/5 relative z-10">

<img alt="Silver Sedan" className="absolute inset-0 w-full h-full object-cover object-left mask-image-linear-to-l" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'}}/>
</div>
</div>

<div className="xl:col-span-4 bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] flex flex-col">
<div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<h2 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:chat-round-line-linear"></iconify-icon>
                  أحدث الاستفسارات
                </h2>
<span className="bg-amber-100 text-amber-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  تويوتا كورولا
                </span>
</div>
<div className="p-2 flex-1 flex flex-col gap-1 overflow-y-auto max-h-[250px] custom-scrollbar">

<div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<p className="text-sm font-medium text-slate-800">
                        داريل ستيوارد
                      </p>
<p className="text-[10px] text-slate-400 mt-0.5">
                        قبل 10 دقائق
                      </p>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<p className="text-sm font-medium text-slate-800">
                        فلويد مايلز
                      </p>
<p className="text-[10px] text-slate-400 mt-0.5">
                        قبل 45 دقيقة
                      </p>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<p className="text-sm font-medium text-slate-800">
                        جيني ويلسون
                      </p>
<p className="text-[10px] text-slate-400 mt-0.5">
                        قبل ساعتين
                      </p>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-9 h-9 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<p className="text-sm font-medium text-slate-800">
                        كاثرين ميرفي
                      </p>
<p className="text-[10px] text-slate-400 mt-0.5">أمس</p>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
</div>
</div>
<div className="p-3 border-t border-slate-100 mt-auto">
<button className="w-full py-2 text-xs font-medium text-slate-500 hover:text-blue-500 transition-colors">
                  عرض كل الاستفسارات
                </button>
</div>
</div>
</div>
</div>
</div>
</main>
<style>
      /* Hide scrollbar for Chrome, Safari and Opera */
      .hide-scrollbar::-webkit-scrollbar {
          display: none;
      }
      /* Hide scrollbar for IE, Edge and Firefox */
      .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
      }

      /* Custom slim scrollbar for main areas */
      .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 10px;
      }
      .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: #94a3b8;
      }
    </style>

    </>
  );
}

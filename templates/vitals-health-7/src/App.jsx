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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<div className="w-[390px] h-[844px] bg-[#f8f9fa] rounded-[3rem] shadow-2xl relative overflow-hidden border-[8px] border-gray-900 shrink-0">

<div className="absolute top-3 inset-x-0 flex justify-center z-50">
<div className="w-[120px] h-8 bg-black rounded-full flex items-center justify-between px-3">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
</div>

<div className="absolute top-0 inset-x-0 h-14 pt-4 px-7 flex justify-between items-start z-40">
<span className="text-sm font-medium text-gray-900 mt-0.5">9:41</span>
<div className="flex items-center gap-1.5 text-gray-900">
<i className="w-4 h-4 transform rotate-90" data-lucide="bar-chart-2"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-5 h-5" data-lucide="battery-full"></i>
</div>
</div>

<div className="h-full overflow-y-auto no-scrollbar pt-16 px-5 pb-32">

<div className="flex justify-between items-center mb-6 mt-2">
<div className="flex items-center gap-3">
<img alt="Profile" className="w-11 h-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="text-sm text-gray-500">Good morning!</p>
<p className="text-lg font-medium text-gray-900">Sajibur Rahman</p>
</div>
</div>
<div className="flex gap-2">
<button className="w-11 h-11 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm">
<i className="w-5 h-5 text-gray-700" data-lucide="calendar"></i>
</button>
<button className="w-11 h-11 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm relative">
<i className="w-5 h-5 text-gray-700" data-lucide="bell"></i>
<span className="absolute top-3 right-3 w-2 h-2 bg-[#4ade80] rounded-full border border-white"></span>
</button>
</div>
</div>

<div className="bg-[#dcf4a4] rounded-[28px] p-6 mb-4 flex justify-between items-center">
<div>
<div className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-2">
<i className="w-4 h-4" data-lucide="zap"></i> Daily intake
                    </div>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 leading-tight">Your Weekly<br/>Progress</h2>
</div>
<div className="relative w-24 h-24">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="white" r="38"></circle>
<circle cx="50" cy="50" fill="none" r="38" stroke="#e6f7c2" strokeWidth="12"></circle>
<circle cx="50" cy="50" fill="none" r="38" stroke="#96d93c" stroke-dasharray="238.7" stroke-dashoffset="35.8" strokeLinecap="round" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-medium text-gray-900 leading-none mb-1">6</span>
<span className="text-sm text-gray-500 leading-none">days</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">

<div className="bg-white rounded-[24px] p-5 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-6">
<span className="text-base text-gray-800 font-medium leading-tight">Step to<br/>walk</span>
<div className="bg-orange-50 w-9 h-9 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-orange-500" data-lucide="footprints"></i>
</div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight text-gray-900">5,500</span>
<span className="text-sm text-gray-500">steps</span>
</div>
</div>

<div className="bg-white rounded-[24px] p-5 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-6">
<span className="text-base text-gray-800 font-medium leading-tight">Drink<br/>Water</span>
<div className="bg-blue-50 w-9 h-9 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-blue-500 fill-blue-500" data-lucide="droplet"></i>
</div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight text-gray-900">12</span>
<span className="text-sm text-gray-500">glass</span>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-5">
<h3 className="text-xl font-medium tracking-tight text-gray-900">August 2025</h3>
<div className="flex gap-2">
<button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="flex justify-between text-center px-1">
<div className="flex flex-col gap-3"><span className="text-sm text-gray-400">S</span><span className="text-lg text-gray-900 w-10 h-10 flex items-center justify-center rounded-full">07</span></div>
<div className="flex flex-col gap-3"><span className="text-sm text-gray-400">M</span><span className="text-lg text-gray-900 w-10 h-10 flex items-center justify-center rounded-full">08</span></div>
<div className="flex flex-col gap-3"><span className="text-sm text-gray-400">T</span><span className="text-lg text-gray-900 w-10 h-10 flex items-center justify-center rounded-full">09</span></div>
<div className="flex flex-col gap-3"><span className="text-sm font-medium text-gray-900">W</span><span className="text-lg font-medium text-gray-900 w-10 h-10 flex items-center justify-center rounded-full bg-[#dcf4a4]">10</span></div>
<div className="flex flex-col gap-3"><span className="text-sm text-gray-400">T</span><span className="text-lg text-gray-900 w-10 h-10 flex items-center justify-center rounded-full">11</span></div>
<div className="flex flex-col gap-3"><span className="text-sm text-gray-400">F</span><span className="text-lg text-gray-900 w-10 h-10 flex items-center justify-center rounded-full">12</span></div>
<div className="flex flex-col gap-3"><span className="text-sm text-gray-400">S</span><span className="text-lg text-gray-900 w-10 h-10 flex items-center justify-center rounded-full">13</span></div>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="bg-white rounded-[24px] p-3.5 pl-5 flex justify-between items-center shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
<div>
<p className="text-lg font-medium tracking-tight text-gray-900 mb-1">Breakfast</p>
<div className="flex items-center gap-1.5 text-sm text-gray-500">
<i className="w-4 h-4 text-orange-400 fill-orange-400" data-lucide="flame"></i>
                            456 - 512 kcal
                        </div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100"><img alt="Food" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100"><img alt="Food" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
</div>
<button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 border border-gray-100">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
<div className="bg-white rounded-[24px] p-3.5 pl-5 flex justify-between items-center shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
<div>
<p className="text-lg font-medium tracking-tight text-gray-900 mb-1">Lunch time</p>
<div className="flex items-center gap-1.5 text-sm text-gray-500">
<i className="w-4 h-4 text-orange-400 fill-orange-400" data-lucide="flame"></i>
                            456 - 512 kcal
                        </div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100"><img alt="Food" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100"><img alt="Food" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
</div>
<button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 border border-gray-100">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-xl rounded-t-[2.5rem] pt-5 pb-8 px-7 flex justify-between items-end shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] z-20">
<button className="flex flex-col items-center gap-1.5 mb-1">
<i className="w-6 h-6 text-gray-900" data-lucide="house"></i>
<span className="text-xs font-medium text-gray-900">Home</span>
</button>
<button className="flex flex-col items-center gap-1.5 mb-1">
<i className="w-6 h-6 text-gray-400" data-lucide="bar-chart-2"></i>
<span className="text-xs font-medium text-gray-400">Progress</span>
</button>
<div className="relative -top-3">
<div className="absolute inset-0 bg-[#96d93c] opacity-30 rounded-full blur-xl w-16 h-16"></div>
<button className="w-16 h-16 rounded-full bg-[#96d93c] flex items-center justify-center relative shadow-lg shadow-[#96d93c]/30 text-gray-900">
<i className="w-7 h-7" data-lucide="scan-line"></i>
</button>
</div>
<button className="flex flex-col items-center gap-1.5 mb-1">
<i className="w-6 h-6 text-gray-400" data-lucide="star"></i>
<span className="text-xs font-medium text-gray-400">Rewards</span>
</button>
<button className="flex flex-col items-center gap-1.5 mb-1">
<i className="w-6 h-6 text-gray-400" data-lucide="layout-grid"></i>
<span className="text-xs font-medium text-gray-400">Menu</span>
</button>
</div>

<div className="absolute bottom-2 inset-x-0 flex justify-center z-50">
<div className="w-1/3 h-1.5 bg-gray-900 rounded-full"></div>
</div>
</div>

<div className="w-[390px] h-[844px] bg-[#f8f9fa] rounded-[3rem] shadow-2xl relative overflow-hidden border-[8px] border-gray-900 shrink-0">

<div className="absolute top-3 inset-x-0 flex justify-center z-50">
<div className="w-[120px] h-8 bg-black rounded-full flex items-center justify-between px-3">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
</div>

<div className="absolute top-0 inset-x-0 h-14 pt-4 px-7 flex justify-between items-start z-40">
<span className="text-sm font-medium text-gray-900 mt-0.5">9:41</span>
<div className="flex items-center gap-1.5 text-gray-900">
<i className="w-4 h-4 transform rotate-90" data-lucide="bar-chart-2"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-5 h-5" data-lucide="battery-full"></i>
</div>
</div>

<div className="h-full overflow-y-auto no-scrollbar pt-16 pb-12">

<div className="flex justify-between items-center mb-8 mt-2 px-5">
<button className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgb(0,0,0,0.03)] text-gray-700 hover:bg-gray-50 transition-colors">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<h1 className="text-xl font-medium tracking-tight text-gray-900">Statistic</h1>
<button className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgb(0,0,0,0.03)] text-gray-700 hover:bg-gray-50 transition-colors">
<i className="w-6 h-6" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="mx-5 bg-white rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] mb-4">
<h2 className="text-lg text-gray-700 mb-2 font-medium">Calories</h2>
<div className="flex items-baseline gap-2 mb-10">
<span className="text-5xl font-medium tracking-tight text-gray-900">1250</span>
<span className="text-base text-gray-500">Kcal</span>
<span className="text-sm text-gray-400 ml-auto pt-2">Target: <span className="text-gray-900 font-medium">1920 Kcal</span></span>
</div>

<div className="h-44 flex justify-between items-end pb-8">

<div className="flex flex-col items-center w-9 h-full justify-end relative">
<span className="text-sm text-gray-400 mb-2">44%</span>
<div className="w-4 h-[80%] rounded-full relative overflow-hidden" style={{background: 'repeating-linear-gradient(-45deg, transparent, transparent 3px, #f3f4f6 3px, #f3f4f6 5px)'}}>
<div className="absolute bottom-0 w-full bg-[#dcf4a4] rounded-full" style={{height: '55%'}}></div>
</div>
<span className="text-sm text-gray-400 absolute -bottom-7">Mon</span>
</div>

<div className="flex flex-col items-center w-9 h-full justify-end relative">
<span className="text-sm text-gray-400 mb-2">34%</span>
<div className="w-4 h-[80%] rounded-full relative overflow-hidden" style={{background: 'repeating-linear-gradient(-45deg, transparent, transparent 3px, #f3f4f6 3px, #f3f4f6 5px)'}}>
<div className="absolute bottom-0 w-full bg-[#dcf4a4] rounded-full" style={{height: '42%'}}></div>
</div>
<span className="text-sm text-gray-400 absolute -bottom-7">Tue</span>
</div>

<div className="flex flex-col items-center w-9 h-[115%] justify-end relative">
<span className="text-sm text-gray-800 font-medium mb-2">110%</span>
<div className="w-4 h-full rounded-full bg-[#96d93c]"></div>
<span className="text-sm text-gray-800 font-medium absolute -bottom-7">Wed</span>
</div>

<div className="flex flex-col items-center w-9 h-full justify-end relative">
<span className="text-sm text-gray-400 mb-2">47%</span>
<div className="w-4 h-[80%] rounded-full relative overflow-hidden" style={{background: 'repeating-linear-gradient(-45deg, transparent, transparent 3px, #f3f4f6 3px, #f3f4f6 5px)'}}>
<div className="absolute bottom-0 w-full bg-[#dcf4a4] rounded-full" style={{height: '58%'}}></div>
</div>
<span className="text-sm text-gray-400 absolute -bottom-7">Thu</span>
</div>

<div className="flex flex-col items-center w-9 h-full justify-end relative">
<span className="text-sm text-gray-400 mb-2">32%</span>
<div className="w-4 h-[80%] rounded-full relative overflow-hidden" style={{background: 'repeating-linear-gradient(-45deg, transparent, transparent 3px, #f3f4f6 3px, #f3f4f6 5px)'}}>
<div className="absolute bottom-0 w-full bg-[#dcf4a4] rounded-full" style={{height: '40%'}}></div>
</div>
<span className="text-sm text-gray-400 absolute -bottom-7">Fri</span>
</div>

<div className="flex flex-col items-center w-9 h-full justify-end relative">
<span className="text-sm text-gray-400 mb-2">79%</span>
<div className="w-4 h-[80%] rounded-full relative overflow-hidden" style={{background: 'repeating-linear-gradient(-45deg, transparent, transparent 3px, #f3f4f6 3px, #f3f4f6 5px)'}}>
<div className="absolute bottom-0 w-full bg-[#dcf4a4] rounded-full" style={{height: '98%'}}></div>
</div>
<span className="text-sm text-gray-400 absolute -bottom-7">Sat</span>
</div>

<div className="flex flex-col items-center w-9 h-full justify-end relative">
<span className="text-sm text-gray-400 mb-2">24%</span>
<div className="w-4 h-[80%] rounded-full relative overflow-hidden" style={{background: 'repeating-linear-gradient(-45deg, transparent, transparent 3px, #f3f4f6 3px, #f3f4f6 5px)'}}>
<div className="absolute bottom-0 w-full bg-[#dcf4a4] rounded-full" style={{height: '30%'}}></div>
</div>
<span className="text-sm text-gray-400 absolute -bottom-7">Sun</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 px-5">

<div className="bg-white rounded-[28px] p-5 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.02)] h-[170px]">
<div className="flex items-center gap-2 mb-4">
<div className="w-9 h-9 rounded-full bg-[#ebfaef] flex items-center justify-center text-[#52c18d]">
<i className="w-4 h-4 transform -rotate-45" data-lucide="dumbbell"></i>
</div>
<span className="text-base font-medium text-gray-900">Exercise</span>
</div>
<div className="h-10 flex items-end gap-1.5 mb-5 pl-1">
<div className="w-1.5 bg-[#bbf0d2] rounded-full h-[40%]"></div>
<div className="w-1.5 bg-[#52c18d] rounded-full h-[60%]"></div>
<div className="w-1.5 bg-[#52c18d] rounded-full h-[80%]"></div>
<div className="w-1.5 bg-[#bbf0d2] rounded-full h-[50%]"></div>
<div className="w-1.5 bg-[#52c18d] rounded-full h-[100%]"></div>
<div className="w-1.5 bg-[#bbf0d2] rounded-full h-[70%]"></div>
<div className="w-1.5 bg-[#52c18d] rounded-full h-[40%]"></div>
<div className="w-1.5 bg-[#52c18d] rounded-full h-[30%]"></div>
<div className="flex gap-1 mb-1 ml-1"><div className="w-1 h-1 rounded-full bg-[#bbf0d2]"></div><div className="w-1 h-1 rounded-full bg-[#bbf0d2]"></div></div>
</div>
<div className="flex items-baseline gap-1 mt-auto">
<span className="text-3xl font-medium tracking-tight text-gray-900">2.0</span>
<span className="text-sm text-gray-500">hours</span>
</div>
</div>

<div className="bg-white rounded-[28px] p-5 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.02)] h-[170px]">
<div className="flex items-center gap-2 mb-4">
<div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-red-500">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
<span className="text-base font-medium text-gray-900">BPM</span>
</div>
<div className="h-10 w-full mb-5 flex items-center overflow-hidden">
<svg className="w-[120%] h-full -ml-2" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,20 L15,20 L20,5 L25,35 L30,15 L35,25 L40,20 L60,20 L65,5 L70,35 L75,15 L80,25 L85,20 L100,20" fill="none" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex items-baseline gap-1 mt-auto">
<span className="text-3xl font-medium tracking-tight text-gray-900">86</span>
<span className="text-sm text-gray-500">bpm</span>
</div>
</div>

<div className="bg-white rounded-[28px] p-5 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden h-[120px]">
<div className="flex items-center gap-2 mb-4 z-10 relative">
<div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
<i className="w-4 h-4" data-lucide="weight"></i>
</div>
<span className="text-base font-medium text-gray-900">Weight</span>
</div>
<svg className="absolute bottom-0 left-0 w-full h-16" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,40 L0,20 C20,20 30,5 50,15 C70,25 80,10 100,10 L100,40 Z" fill="#fff7ed"></path>
<path d="M0,20 C20,20 30,5 50,15 C70,25 80,10 100,10" fill="none" stroke="#f97316" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>

<div className="bg-white rounded-[28px] p-5 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden h-[120px]">
<div className="flex items-center gap-2 mb-4 z-10 relative">
<div className="w-9 h-9 rounded-full bg-[#f0f7ff] flex items-center justify-center text-[#3b82f6]">
<i className="w-4 h-4 fill-blue-500" data-lucide="droplet"></i>
</div>
<span className="text-base font-medium text-gray-900">Water</span>
</div>
<div className="absolute -bottom-2 inset-x-0 h-14 flex items-end justify-between px-3 opacity-90">
<i className="w-6 h-6 text-[#60a5fa] fill-[#60a5fa] transform translate-y-1" data-lucide="droplet"></i>
<i className="w-8 h-8 text-[#60a5fa] fill-[#60a5fa]" data-lucide="droplet"></i>
<i className="w-5 h-5 text-[#60a5fa] fill-[#60a5fa] transform translate-y-3" data-lucide="droplet"></i>
<i className="w-7 h-7 text-[#60a5fa] fill-[#60a5fa] transform translate-y-2" data-lucide="droplet"></i>
</div>
</div>
</div>
</div>

<div className="absolute bottom-2 inset-x-0 flex justify-center z-50">
<div className="w-1/3 h-1.5 bg-gray-900 rounded-full"></div>
</div>
</div>


    </>
  );
}

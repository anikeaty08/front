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



      // Initialize Icons
      lucide.createIcons();

      // Simple Tab Switching Logic
      function switchTab(tabId) {
          // Hide all contents
          document.getElementById('tab-request').classList.add('hidden');
          document.getElementById('tab-methods').classList.add('hidden');

          // Reset all nav styles
          const navs = [document.getElementById('nav-request'), document.getElementById('nav-methods')];
          navs.forEach(nav => {
              nav.classList.remove('border-[#3182CE]', 'text-[#3182CE]');
              nav.classList.add('border-transparent', 'text-slate-500');
          });

          // Show active content and style active nav
          document.getElementById('tab-' + tabId).classList.remove('hidden');
          const activeNav = document.getElementById('nav-' + tabId);
          activeNav.classList.remove('border-transparent', 'text-slate-500');
          activeNav.classList.add('border-[#3182CE]', 'text-[#3182CE]');
      }
    
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
      

<header className="bg-white border-b border-slate-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-[#13395F] rounded-full flex items-center justify-center text-white">
<i data-lucide="shield" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-[#13395F]">
            PROPSHOP
          </span>
</div>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-base font-medium text-slate-600 hover:text-[#13395F] transition-colors" href="#">
            How It Works
          </a>
<a className="text-base font-medium text-[#13395F] transition-colors" href="#">
            Payouts
          </a>
<a className="text-base font-medium text-slate-600 hover:text-[#13395F] transition-colors" href="#">
            Pricing
          </a>
<a className="text-base font-medium text-slate-600 hover:text-[#13395F] transition-colors" href="#">
            Why PST?
          </a>
<a className="text-base font-medium text-slate-600 hover:text-[#13395F] transition-colors" href="#">
            Tickblaze
          </a>
<a className="text-base font-medium text-slate-600 hover:text-[#13395F] transition-colors" href="#">
            Rules
          </a>
<div className="flex items-center gap-1 cursor-pointer text-slate-600 hover:text-[#13395F]">
<span className="text-base font-medium">Explore</span>
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<a className="text-base font-medium text-slate-600 hover:text-[#13395F] transition-colors" href="#">
            My Account
          </a>
</nav>
<div className="flex items-center gap-6">
<a className="text-base font-medium text-slate-600 hover:text-slate-900 hidden sm:block" href="#">
            Logout
          </a>
<button className="bg-[#3182CE] hover:bg-[#2B6CB0] text-white px-6 py-2.5 rounded text-sm font-semibold tracking-wide transition-colors">
            START TRADING
          </button>
</div>
</div>
</header>

<section className="bg-[#13395F] text-white py-16 sm:py-20">
<div className="max-w-4xl mx-auto px-4 text-center">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          Payouts
        </h1>
<p className="text-lg sm:text-xl text-blue-100 font-medium">
          (For Real Prop &amp; Signing Bonus Only)
        </p>
</div>
</section>

<main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">

<div className="flex border-b border-slate-200 mb-8 overflow-x-auto hide-scrollbar">
<button className="py-4 px-6 text-lg font-medium border-b-2 border-[#3182CE] text-[#3182CE] whitespace-nowrap transition-colors flex items-center gap-2" id="nav-request" onclick="switchTab('request')">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
          Request Payout
        </button>
<button className="py-4 px-6 text-lg font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-800 whitespace-nowrap transition-colors flex items-center gap-2" id="nav-methods" onclick="switchTab('methods')">
<i className="w-5 h-5" data-lucide="settings-2" strokeWidth="1.5"></i>
          Manage Methods
        </button>
</div>

<div className="space-y-8 animate-in fade-in duration-300" id="tab-request">
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row lg:h-[850px]">

<div className="w-full lg:w-[320px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white flex flex-col overflow-y-auto hide-scrollbar p-5 space-y-6">

<div className="space-y-3">
<h3 className="text-xs font-semibold text-slate-500 tracking-wider flex items-center gap-2 px-1">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Ready to Request
                <span className="text-slate-400 font-medium">(2)</span>
</h3>
<div className="space-y-2">
<div className="p-3 bg-white border-y border-r border-l-4 border-slate-200 border-l-blue-600 rounded-lg cursor-pointer flex justify-between items-center group shadow-sm">
<div>
<div className="font-semibold text-slate-900 text-sm">
                      PST-84920-Real
                    </div>
<div className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      B3 ready
                    </div>
</div>
<div className="text-right flex items-center gap-2">
<div>
<div className="font-medium text-emerald-600 text-sm">
                        $4,250.00
                      </div>
<div className="text-[11px] text-slate-400 mt-0.5 uppercase tracking-wide">
                        available
                      </div>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" strokeWidth="2"></i>
</div>
</div>
<div className="p-3 bg-white border border-slate-200 rounded-lg cursor-pointer flex justify-between items-center hover:border-slate-300 hover:shadow-sm transition-all group">
<div className="">
<div className="font-medium text-slate-700 text-sm">
                      PST-55821-Real
                    </div>
<div className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      B2 ready
                    </div>
</div>
<div className="text-right flex items-center gap-2">
<div>
<div className="font-medium text-emerald-600 text-sm">
                        $1,050.00
                      </div>
<div className="text-[11px] text-slate-400 mt-0.5 uppercase tracking-wide">
                        available
                      </div>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" strokeWidth="2"></i>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-semibold text-slate-500 tracking-wider flex items-center gap-2 px-1">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Compliance Review
                <span className="text-slate-400 font-medium">(1)</span>
</h3>
<div className="space-y-2">
<div className="p-3 bg-white border border-slate-200 rounded-lg cursor-pointer flex justify-between items-center hover:border-slate-300 hover:shadow-sm transition-all group">
<div>
<div className="font-medium text-slate-700 text-sm">
                      PST-99210-Real
                    </div>
<div className="text-[11px] text-slate-500 mt-1">
                      Requested May 25
                    </div>
</div>
<div className="text-right flex items-center gap-2">
<div>
<div className="font-medium text-slate-900 text-sm">
                        $1,800.00
                      </div>
<div className="text-[11px] text-slate-400 mt-0.5 uppercase tracking-wide">
                        requested
                      </div>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" strokeWidth="2"></i>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-semibold text-slate-500 tracking-wider flex items-center gap-2 px-1">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Sent to Payouts Team
                <span className="text-slate-400 font-medium">(1)</span>
</h3>
<div className="space-y-2">
<div className="p-3 bg-white border border-slate-200 rounded-lg cursor-pointer flex justify-between items-center hover:border-slate-300 hover:shadow-sm transition-all group">
<div>
<div className="font-medium text-slate-700 text-sm">
                      PST-33021-Real
                    </div>
<div className="text-[11px] text-slate-500 mt-1">
                      Approved May 24
                    </div>
</div>
<div className="text-right flex items-center gap-2">
<div>
<div className="font-medium text-slate-900 text-sm">
                        $2,500.00
                      </div>
<div className="text-[11px] text-slate-400 mt-0.5 uppercase tracking-wide">
                        sent
                      </div>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" strokeWidth="2"></i>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-semibold text-slate-500 tracking-wider flex items-center gap-2 px-1">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
                Rejected
                <span className="text-slate-400 font-medium">(1)</span>
</h3>
<div className="space-y-2">
<div className="p-3 bg-white border border-slate-200 rounded-lg cursor-pointer flex justify-between items-center hover:border-slate-300 hover:shadow-sm transition-all group">
<div>
<div className="font-medium text-slate-700 text-sm">
                      PST-77510-Real
                    </div>
<div className="text-[11px] text-slate-500 mt-1">
                      Reviewed May 22
                    </div>
</div>
<div className="text-right flex items-center gap-2">
<div>
<div className="font-medium text-red-600 text-sm">
                        $1,200.00
                      </div>
<div className="text-[11px] text-red-500 mt-0.5 uppercase tracking-wide">
                        rejected
                      </div>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" strokeWidth="2"></i>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-semibold text-slate-500 tracking-wider flex items-center gap-2 px-1">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Completed
                <span className="text-slate-400 font-medium">(1)</span>
</h3>
<div className="space-y-2">
<div className="p-3 bg-white border border-slate-200 rounded-lg cursor-pointer flex justify-between items-center hover:border-slate-300 hover:shadow-sm transition-all group">
<div>
<div className="font-medium text-slate-700 text-sm">
                      PST-10294-Real
                    </div>
<div className="text-[11px] text-slate-500 mt-1">
                      Paid May 18
                    </div>
</div>
<div className="text-right flex items-center gap-2">
<div>
<div className="font-medium text-emerald-600 text-sm">
                        $1,200.00
                      </div>
<div className="text-[11px] text-slate-400 mt-0.5 uppercase tracking-wide">
                        paid
                      </div>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" strokeWidth="2"></i>
</div>
</div>
</div>
</div>
<div className="text-[11px] text-slate-400 pt-2 pb-4 px-1">
              Showing 1 to 6 of 6 accounts
            </div>
</div>

<div className="flex-grow p-6 lg:p-8 bg-white overflow-y-auto hide-scrollbar">
<div className="mb-8">
<h2 className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-2">
<span className="">PST-84920-Real</span>
<span className="flex items-center gap-2 text-base sm:text-lg">
<span className="text-slate-500 font-normal">
                    Available to withdraw:
                  </span>
<span className="text-emerald-600 font-medium">$4,250.00</span>
</span>
</h2>
<div className="flex gap-2 text-sm text-slate-600 gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Benchmark ready for payout
              </div>
</div>

<div className="border border-slate-200 rounded-xl p-5 sm:p-6 mb-6">
<div className="grid grid-cols-2 gap-y-6 items-center gap-x-6 md:grid-cols-4">


<div className="col-span-2 md:col-span-1">
<div className="text-xs font-normal text-slate-500 mb-1.5">
                    Withdrawal Amount
                  </div>
<div className="relative">
<input className="block w-full px-3 py-2.5 text-sm border border-slate-300 rounded-md text-slate-900 focus:ring-1 focus:ring-blue-500 outline-none font-normal" type="text" value="4250.00"/>
<div className="absolute inset-y-0 right-0 flex flex-col justify-center border-l border-slate-300 bg-slate-50 rounded-r-md overflow-hidden">
<button className="px-2 py-0.5 hover:bg-slate-100 text-slate-500 border-b border-slate-300 flex-1 flex items-center justify-center">
<i className="w-3 h-3" data-lucide="chevron-up" strokeWidth="2"></i>
</button>
<button className="px-2 py-0.5 hover:bg-slate-100 text-slate-500 flex-1 flex items-center justify-center">
<i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="2"></i>
</button>
</div>
</div>
</div>

<div className="col-span-1">
<div className="text-xs font-normal text-slate-500 mb-1.5">
                    Your Share (90%)
                  </div>
<div className="text-lg font-medium text-emerald-600">
                    $3,825.00
                  </div>
</div>
<div className="col-span-1">
<div className="text-xs font-normal text-slate-500 mb-1.5">
                    Firm Share (10%)
                  </div>
<div className="text-lg font-medium text-slate-700">$425.00</div>
</div>

<div className="col-span-2 md:col-span-1 h-full">
<button className="w-full h-full min-h-[2.5rem] md:aspect-square py-2.5 px-4 flex flex-col items-center justify-center gap-1.5 bg-[#13395F] hover:bg-[#0f2d4a] text-white text-sm font-normal rounded-md transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="send" strokeWidth="2"></i>
<span className="text-center">
                      Request
                      <br className="hidden md:block"/>
                      Payout
                    </span>
</button>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-xl p-5 sm:p-6 mb-6">
<div className="flex justify-between items-center mb-5">
<h3 className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                  Benchmark and Payout Progress
                  <i className="w-4 h-4 text-slate-400" data-lucide="info" strokeWidth="2"></i>
</h3>
<span className="px-2.5 py-1 text-xs font-semibold bg-amber-500 text-white rounded">
                  B0
                </span>
</div>
<div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">

<div className="flex-1 min-w-[70px] flex flex-col items-center justify-center py-3 px-2 rounded-lg border border-emerald-200 bg-emerald-50/50 text-emerald-600">
<div className="text-[11px] font-semibold mb-1">B1</div>
<div className="text-sm font-medium">$0</div>
</div>

<div className="flex-1 min-w-[70px] flex flex-col items-center justify-center py-3 px-2 rounded-lg border border-emerald-200 bg-emerald-50/50 text-emerald-600">
<div className="text-[11px] font-semibold mb-1">B2</div>
<div className="text-sm font-medium">$250</div>
</div>

<div className="flex-1 min-w-[70px] flex flex-col items-center justify-center py-3 px-2 rounded-lg border-2 border-blue-400 bg-blue-50/50 text-blue-600 shadow-sm relative">
<div className="text-[11px] font-semibold mb-1">B3</div>
<div className="text-sm font-medium">$500</div>
</div>

<div className="flex-1 min-w-[70px] flex flex-col items-center justify-center py-3 px-2 rounded-lg border border-slate-200 bg-white text-slate-500">
<div className="text-[11px] font-semibold mb-1">B4</div>
<div className="text-sm font-medium">$750</div>
</div>

<div className="flex-1 min-w-[70px] flex flex-col items-center justify-center py-3 px-2 rounded-lg border border-slate-200 bg-white text-slate-500">
<div className="text-[11px] font-semibold mb-1">B5</div>
<div className="text-sm font-medium">$1250</div>
</div>



</div>
</div>

<div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-50/50 border border-slate-200 rounded-xl mb-6 shadow-sm">

<div className="flex items-center gap-3 bg-blue-50/30 border border-blue-400 shadow-[0_0_0_1px_rgba(96,165,250,0.3)] rounded-lg p-2.5 relative overflow-hidden">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="check-circle-2" strokeWidth="2"></i>
</div>
<div className="min-w-0 flex-1">
<div className="font-medium text-slate-900 text-xs sm:text-sm truncate">Ready to Request</div>
<div className="text-[10px] sm:text-[11px] text-blue-600 mt-0.5 font-normal">Current</div>
</div>
</div>

<div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-2.5 shadow-sm">
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="2"></i>
</div>
<div className="min-w-0 flex-1">
<div className="font-normal text-slate-600 text-xs sm:text-sm truncate">Compliance Review</div>
<div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 font-normal">Pending</div>
</div>
</div>

<div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-2.5 shadow-sm">
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="send" strokeWidth="2"></i>
</div>
<div className="min-w-0 flex-1">
<div className="font-normal text-slate-600 text-xs sm:text-sm truncate">Sent to Payouts Team</div>
<div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 font-normal">Pending</div>
</div>
</div>

<div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-2.5 shadow-sm">
<div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="check-circle-2" strokeWidth="2"></i>
</div>
<div className="min-w-0 flex-1">
<div className="font-normal text-slate-600 text-xs sm:text-sm truncate">Completed</div>
<div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 font-normal">Pending</div>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
<div className="px-5 py-4 border-b border-slate-100">
<h3 className="text-base font-semibold text-slate-900">
                  Payout History
                </h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-600">
<thead className="bg-slate-50/50 text-[11px] text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-200">
<tr className="">
<th className="py-3 px-5">Date</th>
<th className="py-3 px-5">Benchmark</th>
<th className="py-3 px-5">Amount</th>
<th className="py-3 px-5">Status</th>
<th className="py-3 px-5">Details</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="">
<td className="py-3.5 px-5 whitespace-nowrap">
                        Oct 12, 2023
                      </td>
<td className="py-3.5 px-5 whitespace-nowrap text-slate-800">
                        B2 - Second Benchmark
                      </td>
<td className="py-3.5 px-5 font-medium text-emerald-600">
                        $250.00
                      </td>
<td className="py-3.5 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-emerald-50 border border-emerald-200 text-emerald-700 rounded">
<i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i>
                          Paid
                        </span>
</td>
<td className="py-3.5 px-5 text-slate-500 text-[11px]">
                        Paid via Rise • Ref #RSE-2891
                      </td>
</tr>
<tr>
<td className="py-3.5 px-5 whitespace-nowrap">
                        Sep 10, 2023
                      </td>
<td className="py-3.5 px-5 whitespace-nowrap text-slate-800">
                        B1 - First Benchmark
                      </td>
<td className="py-3.5 px-5 font-medium text-slate-800">
                        $0.00
                      </td>
<td className="py-3.5 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-emerald-50 border border-emerald-200 text-emerald-700 rounded">
<i className="w-3 h-3" data-lucide="check" strokeWidth="3"></i>
                          Paid
                        </span>
</td>
<td className="py-3.5 px-5 text-slate-500 text-[11px]">
                        Paid via Rise • Ref #RSE-2540
                      </td>
</tr>
<tr>
<td className="py-3.5 px-5 whitespace-nowrap">
                        May 20, 2026
                      </td>
<td className="py-3.5 px-5 whitespace-nowrap text-slate-800">
                        B3 - Third Benchmark
                      </td>
<td className="py-3.5 px-5 font-medium text-slate-800">
                        $500.00
                      </td>
<td className="py-3.5 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-slate-50 border border-slate-200 text-slate-600 rounded">
                          Not Requested
                        </span>
</td>
<td className="py-3.5 px-5 text-slate-500 text-[11px]">
                        Available for request
                      </td>
</tr>
</tbody>
</table>
</div>
<div className="px-5 py-3.5 bg-white text-[11px] text-slate-500 border-t border-slate-100">
                Showing 1 to 3 of 3 records
              </div>
</div>
<img className="hidden" onload="if(window.lucide) lucide.createIcons()" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="/>
</div>
</div>
<p className="text-center text-sm text-slate-500">
          Benchmarks are performance milestones and do not trigger payouts.
          Payout methods selected here do not result in payouts during the
          Gladiator Phase.
          <a className="text-[#3182CE] hover:underline" href="#">
            FAQ on benchmarks.
          </a>
</p>
</div>

<div className="space-y-8 hidden animate-in fade-in duration-300" id="tab-methods">

<div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
<i className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<div>
<h3 className="text-lg font-medium text-amber-800 mb-1">
              Important Notice
            </h3>
<p className="text-base text-amber-700">
              No payouts are issued during the Gladiator Phase. Payment methods
              are used only if you transition to Real Prop and become eligible
              for a Signing Bonus.
            </p>
</div>
</div>
<div className="prose max-w-none text-slate-600 text-base space-y-4">
<p>
            PropShopTrader does not issue payouts during the Gladiator Phase.
            Performance during this phase is measured through Benchmarks, not
            withdrawals or payments.
          </p>
<p>
            This page allows you to pre-select and verify your preferred payment
            method for future use only if you transition to the Real Prop Phase
            and become eligible for a Signing Bonus. Your selected method will
            be used for Signing Bonus distribution and any future Real Prop
            related payments.
          </p>
<p>
            The first name, last name, and email linked to your PST account are
            used for identity verification and cannot be changed.
          </p>
</div>

<div className="mt-12">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
            Step 1: Review and Connect Your Payment Method
          </h3>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
<div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                  R
                </div>
<h4 className="text-xl font-semibold text-[#13395F] tracking-tight">
                  Rise
                </h4>
</div>
<div className="space-y-4">
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-base outline-none" readonly="" type="text" value="Raza"/>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-base outline-none" readonly="" type="text" value="Imran"/>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-base outline-none" readonly="" type="email" value="razaimaran100@gmail.com"/>
<button className="w-full py-3 bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-medium rounded-lg transition-colors mt-2">
                  SEND RISE INVITE
                </button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
<div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-semibold">
                  R
                </div>
<h4 className="text-xl font-semibold text-[#13395F] tracking-tight">
                  Revolut
                </h4>
</div>
<div className="space-y-4">
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-base outline-none" readonly="" type="text" value="Raza"/>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-base outline-none" readonly="" type="text" value="Imran"/>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-base outline-none" readonly="" type="email" value="razaimaran100@gmail.com"/>
<input className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-base outline-none focus:border-[#3182CE] focus:ring-1 focus:ring-[#3182CE]" placeholder="@revtag" type="text"/>
</div>
</div>
</div>
</div>

<div className="mt-12 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">
            Step 2: Select Your Primary Payment Method
          </h3>
<p className="text-base text-slate-600 mb-6">
            Please ensure your selected method is correct. This method will be
            used only if you transition to Real Prop and receive a Signing
            Bonus.
          </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<div className="relative w-full sm:w-72">
<select className="block w-full pl-4 pr-10 py-3 text-base border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#3182CE] focus:border-[#3182CE] outline-none appearance-none bg-white font-medium cursor-pointer">
<option>-- Select Primary Method --</option>
<option>Rise</option>
<option>Revolut</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto">
              SET AS PRIMARY
            </button>
</div>
<p className="mt-4 text-base text-slate-600">
            Your current selection:
            <span className="font-medium text-slate-900">Not Set</span>
</p>
</div>
</div>
</main>

<footer className="bg-slate-100 pt-16 pb-24 mt-auto border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-[#13395F] rounded-full flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-[#13395F]">
              PROPSHOP
            </span>
</div>
<p className="text-base text-slate-500 mb-6 max-w-xs">
            A multi-asset proprietary trading firm offering evaluation and live
            prop accounts for stocks and futures traders.
          </p>
<div className="flex gap-4 text-slate-400">
<i className="w-5 h-5 hover:text-slate-600 cursor-pointer" data-lucide="discord" strokeWidth="1.5"></i>
<i className="w-5 h-5 hover:text-slate-600 cursor-pointer" data-lucide="twitter" strokeWidth="1.5"></i>
<i className="w-5 h-5 hover:text-slate-600 cursor-pointer" data-lucide="youtube" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-base">Markets</h4>
<ul className="space-y-3 text-base text-slate-500">
<li><a className="hover:text-[#13395F]" href="#">Stocks</a></li>
<li><a className="hover:text-[#13395F]" href="#">Futures</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-base">Program</h4>
<ul className="space-y-3 text-base text-slate-500">
<li><a className="hover:text-[#13395F]" href="#">Getting Paid</a></li>
<li><a className="hover:text-[#13395F]" href="#">Benchmarks</a></li>
<li>
<a className="hover:text-[#13395F]" href="#">Real Prop Trading</a>
</li>
<li><a className="hover:text-[#13395F]" href="#">Resets</a></li>
<li><a className="hover:text-[#13395F]" href="#">Risk Controls</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-base">Resources</h4>
<ul className="space-y-3 text-base text-slate-500">
<li><a className="hover:text-[#13395F]" href="#">FAQ</a></li>
<li>
<a className="hover:text-[#13395F]" href="#">Platform &amp; Data</a>
</li>
<li><a className="hover:text-[#13395F]" href="#">Trade Copiers</a></li>
<li><a className="hover:text-[#13395F]" href="#">Promotions</a></li>
<li><a className="hover:text-[#13395F]" href="#">Announcements</a></li>
<li><a className="hover:text-[#13395F]" href="#">Countries</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-base">Company</h4>
<ul className="space-y-3 text-base text-slate-500">
<li>
<a className="hover:text-[#13395F]" href="#">Trading Standards</a>
</li>
<li><a className="hover:text-[#13395F]" href="#">Work With Us</a></li>
<li>
<a className="hover:text-[#13395F]" href="#">
                Legal &amp; Compliance
              </a>
</li>
<li>
<a className="hover:text-[#13395F]" href="#">Affiliate Program</a>
</li>
<li><a className="hover:text-[#13395F]" href="#">Vendor Network</a></li>
<li>
<a className="hover:text-[#13395F]" href="#">Referral Program</a>
</li>
<li><a className="hover:text-[#13395F]" href="#">Contact Us</a></li>
</ul>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 bg-[#13395F] border-t border-blue-800 text-white py-3 px-4 z-50 flex items-center justify-center gap-4 text-sm sm:text-base">
<span className="font-medium">
        PST Webinar Flash Sale Now Live | Bundle &amp; Save Up To 85% Off
      </span>
<span className="text-blue-200">Use Code: 75WEBINAR</span>
<button className="absolute right-4 text-blue-200 hover:text-white">
<i className="w-5 h-5" data-lucide="x" strokeWidth="2"></i>
</button>
</div>

<div className="fixed bottom-16 right-6 w-12 h-12 bg-[#3182CE] rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer hover:bg-[#2B6CB0] transition-colors z-40">
<i className="w-6 h-6" data-lucide="help-circle" strokeWidth="1.5"></i>
</div>


    </>
  );
}

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



      if(typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    


        if (typeof lucide !== 'undefined' && lucide.createIcons) {
          lucide.createIcons();
        }
      


          if (typeof lucide !== 'undefined' && lucide.createIcons) {
                  lucide.createIcons();
                }
        


        if (typeof lucide !== 'undefined' && lucide.createIcons) {
          lucide.createIcons();
        }
      


      lucide.createIcons();

      const cashCtx = document.getElementById('cashflowChart');
      if (cashCtx) {
        new Chart(cashCtx, {
          type: 'line',
          data: {
            labels: ['W1', 'W2', 'W3', 'W4'],
            datasets: [
              {
                label: 'Invoiced',
                data: [10, 12, 11, 15],
                borderColor: '#58C589',
                backgroundColor: 'rgba(88,197,137,0.12)',
                fill: true,
                tension: 0.4,
                pointRadius: 0
              },
              {
                label: 'Paid',
                data: [8, 10, 9, 14],
                borderColor: '#2DD4BF',
                backgroundColor: 'rgba(45,212,191,0.10)',
                fill: true,
                tension: 0.4,
                pointRadius: 0
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                labels: { color: '#4B5563', boxWidth: 10, boxHeight: 10, usePointStyle: true, pointStyle: 'circle' }
              },
              tooltip: {
                backgroundColor: 'rgba(17,24,39,0.95)',
                titleColor: '#FFFFFF',
                bodyColor: '#FFFFFF',
                borderColor: 'rgba(255,255,255,0.12)',
                borderWidth: 1
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#4B5563' } },
              y: {
                grid: { color: 'rgba(46,182,108,0.10)' },
                ticks: { color: '#4B5563' }
              }
            }
          }
        });
      }

      const invCtx = document.getElementById('invoiceChart');
      if (invCtx) {
        new Chart(invCtx, {
          type: 'bar',
          data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
              {
                label: 'Paid invoices',
                data: [120, 140, 155, 170],
                backgroundColor: 'rgba(88,197,137,0.85)',
                borderRadius: 10
              },
              {
                label: 'Outstanding',
                data: [22, 18, 15, 12],
                backgroundColor: 'rgba(130,211,167,0.7)',
                borderRadius: 10
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                labels: { color: '#4B5563', boxWidth: 10, boxHeight: 10, usePointStyle: true, pointStyle: 'rectRounded' }
              },
              tooltip: {
                backgroundColor: 'rgba(17,24,39,0.95)',
                titleColor: '#FFFFFF',
                bodyColor: '#FFFFFF',
                borderColor: 'rgba(255,255,255,0.12)',
                borderWidth: 1
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#4B5563' } },
              y: {
                grid: { color: 'rgba(46,182,108,0.10)' },
                ticks: { color: '#4B5563' }
              }
            }
          }
        });
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
      

<nav className="fixed -translate-x-1/2 z-50 w-[min(980px,92vw)] top-5 left-1/2">
<div className="flex bg-[#FFFFFF]/80 border-[#2EB66C]/15 border rounded-full pt-2 pr-3 pb-2 pl-2 shadow-xl backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center pt-1 pr-3 pb-1 pl-3" href="/home">
<img alt="OnBoardNow" className="cursor-pointer w-auto h-10 object-contain" onclick="window.location.href='/#'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/219bad8e-d2b5-4b84-b4d3-ae7884576b11_1600w.png"/>
</a>
</div>
<div className="">
<div className="hidden md:flex gap-4 lg:gap-6 gap-x-4 gap-y-4 items-center">
<a className="hover:text-[#111827] transition-colors text-[13px] whitespace-nowrap font-normal text-[#4B5563]" href="/how-it-works">
          How It Works
        </a>
<a className="hover:text-[#111827] transition-colors text-[13px] whitespace-nowrap font-normal text-[#4B5563]" href="/flows">
          Flows
        </a>
<a className="hover:text-[#111827] transition-colors text-[13px] whitespace-nowrap font-normal text-[#4B5563]" href="/the-app">
          App
        </a>
<a className="hover:text-[#111827] transition-colors text-[13px] whitespace-nowrap font-normal text-[#4B5563]" href="/use-cases">Solutions</a>
<a className="hover:text-[#111827] transition-colors text-[13px] whitespace-nowrap font-normal text-[#4B5563]" href="/video-presentations">
          Presentation
        </a>
<a className="hover:text-[#111827] transition-colors text-[13px] whitespace-nowrap font-normal text-[#4B5563]" href="/integrations">Integrations</a>
<a className="hover:text-[#111827] transition-colors text-[13px] whitespace-nowrap font-normal text-[#4B5563]" href="/about">
          About Us
        </a><a className="hover:text-[#111827] transition-colors text-[13px] whitespace-nowrap font-normal text-[#4B5563]" href="/careers">Careers</a>
</div>
<div className="hidden fixed top-20 left-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-md shadow-2xl rounded-2xl p-5 border border-[#2EB66C]/15 z-50 md:hidden" id="mobileMenu">
<div className="flex flex-col gap-4 text-center">
<a className="hover:text-[#111827] transition-colors text-[15px] font-normal text-[#4B5563] block py-1" href="/how-it-works">How It
            Works</a>
<a className="hover:text-[#111827] transition-colors text-[15px] font-normal text-[#4B5563] block py-1" href="/flows">Flows</a>
<a className="hover:text-[#111827] transition-colors text-[15px] font-normal text-[#4B5563] block py-1" href="/the-app">App</a>
<a className="hover:text-[#111827] transition-colors text-[15px] font-normal text-[#4B5563] block py-1" href="/use-cases">Solutions</a>
<a className="hover:text-[#111827] transition-colors text-[15px] font-normal text-[#4B5563] block py-1" href="/video-presentations">Presentation</a>
<a className="hover:text-[#111827] transition-colors text-[15px] font-normal text-[#4B5563] block py-1" href="/integrations">Integrations</a>
<a className="hover:text-[#111827] transition-colors text-[15px] font-normal text-[#4B5563] block py-1" href="/about">About
            Us</a>
<a className="hover:text-[#111827] transition-colors text-[15px] font-normal text-[#4B5563] block py-1" href="/careers">Careers </a>
</div>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-4">
<button className="md:hidden p-2 text-[#4B5563] hover:text-[#111827] transition-colors outline-none cursor-pointer" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
<svg className="lucide lucide-menu w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line className="" x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
<button className="group transition-all duration-300 overflow-hidden cursor-pointer hover:bg-[#2EB66C] shadow-[#58C589]/20 hover:shadow-[#58C589]/30 whitespace-nowrap text-xs font-semibold text-white bg-[#58C589] rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg" onclick="window.location.href='/contact'" role="button">
            Contact Us
          </button>
</div>
</div>
<div className="hidden absolute top-full left-0 right-0 mt-3 w-full bg-white rounded-2xl border border-[#2EB66C]/10 shadow-xl shadow-[#111827]/10 p-5 flex flex-col gap-4 z-40 max-h-[75vh] overflow-y-auto" id="mobileMenu">
<a className="text-[15px] text-[#111827] font-semibold hover:text-[#58C589] transition-colors" href="/how-it-works">
      How It Works
    </a>
<div className="h-px bg-[#2EB66C]/5"></div>
<a className="text-[15px] text-[#111827] font-semibold hover:text-[#58C589] transition-colors" href="/flows">
      Flows
    </a>
<div className="h-px bg-[#2EB66C]/5"></div>
<a className="text-[15px] text-[#111827] font-semibold hover:text-[#58C589] transition-colors" href="/the-app">
      App
    </a>
<div className="h-px bg-[#2EB66C]/5"></div>
<a className="text-[15px] text-[#111827] font-semibold hover:text-[#58C589] transition-colors" href="/use-cases">
      Work Sectors
    </a>
<div className="h-px bg-[#2EB66C]/5"></div>
<a className="text-[15px] text-[#111827] font-semibold hover:text-[#58C589] transition-colors" href="/video-presentations">
      Presentation
    </a>
<div className="h-px bg-[#2EB66C]/5"></div>
<a className="text-[15px] text-[#111827] font-semibold hover:text-[#58C589] transition-colors" href="/about">
      About Us
    </a>
<div className="h-px bg-[#2EB66C]/5"></div>
<a className="text-[15px] text-[#111827] font-semibold hover:text-[#58C589] transition-colors" href="/careers">
      Careers
    </a>

</div>
</nav>

<section className="mesh-gradient overflow-hidden pt-32 pb-20 relative">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-2 gap-y-2">
<h1 className="md:text-7xl leading-[1.06] text-5xl font-semibold text-[#111827] tracking-tight font-heading max-w-4xl mr-auto mb-6 ml-auto">
          Everything required. From the start.
        </h1>
<p className="text-lg md:text-xl text-[#4B5563] mb-10 max-w-2xl mx-auto leading-relaxed">
          Guided onboarding flows that collect ID, checks, documents, client
          information — and verified identity — before your process begins.
        </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
<button className="hover:bg-[#2EB66C] shadow-[#58C589]/20 transition-all duration-300 font-medium text-white bg-[#58C589] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" onclick="window.location.href='/video-presentations'" role="button">
            View Presentations
          </button>
<button className="hover:bg-[#F0FAF5] transition-all duration-300 font-medium text-[#58C589] border-[#58C589] border-2 rounded-full pt-4 pr-8 pb-4 pl-8" onclick="window.location.href='/contact'" role="button">
            Contact Us About Your Needs
          </button>
</div>
<div className="mt-6 flex justify-center">
<a className="hover:text-[#58C589] flex items-center gap-1 transition-colors cursor-pointer text-sm font-medium text-[#4B5563]" href="#" onclick="event.preventDefault(); let target = document.querySelector('.client-sec-to-scroll'); if(target) target.scrollIntoView({behavior: 'smooth'});">
            What OnBoardNow Does
            <svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</a>
</div>
<div className="inline-flex flex-wrap gap-2 bg-[#F0FAF5] border-[#2EB66C]/20 border rounded-2xl mt-8 pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center justify-center">
<span className="text-sm font-normal text-[#4B5563] mr-1">Used by</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2EB66C] text-white text-xs font-normal tracking-wide">
            Law Firms
          </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2EB66C] text-white text-xs font-normal tracking-wide">
            Letting Agents
          </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2EB66C] text-white text-xs font-normal tracking-wide">
            Estate Agents
          </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2EB66C] text-white text-xs font-normal tracking-wide">
            Recruiters
          </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2EB66C] text-white text-xs font-normal tracking-wide">
            Financial Advisers
          </span>
</div>
<div className="mt-16 relative client-sec-to-scroll">
<div className="flex flex-col lg:flex-row gap-8 z-10 max-w-5xl mr-auto ml-auto relative gap-x-8 gap-y-8 items-center justify-center">

<div className="lg:w-[55%] shadow-[#111827]/5 text-left bg-white w-full border-[#2EB66C]/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
<div className="flex border-[#2EB66C]/10 border-b mb-6 pb-4 space-x-0 items-start justify-start">
<div className="">
<h3 className="text-base font-semibold text-[#111827]">
                    Client Onboarding
                  </h3>
<p className="text-xs text-[#4B5563] mt-1">
                    Required steps to complete this journey
                  </p>
</div>
</div>
<div className="space-y-0">

<div className="flex items-start gap-4">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-[#2DD4BF]/15 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-[#2DD4BF]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-px h-6 bg-[#2DD4BF]/30 my-1"></div>
</div>
<div className="pb-6">
<div className="text-sm font-semibold text-[#111827]">
                      Confirm Identity
                    </div>
<div className="text-xs text-[#4B5563] mt-0.5">
                      Basic details provided
                    </div>
</div>
</div>

<div className="flex items-start gap-4">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-[#2DD4BF]/15 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-[#2DD4BF]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-px h-6 bg-[#58C589]/30 my-1"></div>
</div>
<div className="pb-6">
<div className="text-sm font-semibold text-[#111827]">
                      Upload ID Document
                    </div>
<div className="text-xs text-[#4B5563] mt-0.5">
                      Passport successfully uploaded
                    </div>
</div>
</div>

<div className="flex gap-x-4 gap-y-4 items-start">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-white border-2 border-[#58C589] flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-[#58C589]"></div>
</div>
<div className="w-px h-6 bg-gray-100 my-1"></div>
</div>
<div className="pb-6">
<div className="text-sm font-medium text-[#58C589]">
                      Onboard Interview
                    </div>
<ul className="text-xs text-[#4B5563] mt-1.5 pl-3 list-disc space-y-1">
<li className="">AML</li>
<li className="">Right to Rent</li>
<li className="">TA6/TA10 forms completed</li>
</ul>
</div>
</div>

<div className="flex items-start gap-4">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0"></div>
<div className="w-px h-6 bg-gray-100 my-1"></div>
</div>
<div className="pb-6">
<div className="text-sm font-semibold text-gray-400">
                      Complete KYC
                    </div>
<div className="text-xs text-gray-400 mt-0.5">
                      Background checks pending
                    </div>
</div>
</div>

<div className="flex items-start gap-4">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0"></div>
</div>
<div className="">
<div className="text-sm font-semibold text-gray-400">
                      Sign Declaration
                    </div>
<div className="text-xs text-gray-400 mt-0.5">
                      Final agreement signature
                    </div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[45%] max-w-[320px] mx-auto z-20 relative lg:-ml-12 mt-8 lg:mt-0">
<div className="bg-[#111827] rounded-[2.5rem] p-2 shadow-2xl border border-gray-800 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#111827] rounded-b-2xl z-30"></div>
<div className="bg-white rounded-[2rem] overflow-hidden relative h-[520px] flex flex-col">
<div className="pt-12 px-6 pb-4 bg-[#F0FAF5] border-b border-[#2EB66C]/10 text-center">
<h4 className="text-[#111827] font-semibold text-sm">
                      Scan Passport
                    </h4>
<p className="text-xs text-[#4B5563] mt-1">
                      Align document within the frame
                    </p>
</div>
<div className="flex-1 bg-gray-50 relative p-6 flex flex-col items-center justify-center">

<div className="relative w-full aspect-[3/4] border-2 border-dashed border-[#58C589]/50 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-inner">
<div className="absolute inset-0 bg-[#58C589]/5"></div>

<div className="w-[80%] h-[70%] bg-white rounded-lg shadow-sm border border-gray-200 p-3 flex flex-col relative z-10">
<div className="flex items-start gap-3 border-b border-gray-100 pb-3 mb-3">
<div className="w-10 h-12 bg-gray-100 rounded-sm"></div>
<div className="flex-1 space-y-2 pt-1">
<div className="w-16 h-2 bg-gray-100 rounded-sm"></div>
<div className="w-24 h-2 bg-gray-100 rounded-sm"></div>
</div>
</div>
<div className="space-y-2 flex-1">
<div className="w-3/4 h-2 bg-gray-100 rounded-sm"></div>
<div className="w-1/2 h-2 bg-gray-100 rounded-sm"></div>
<div className="w-2/3 h-2 bg-gray-100 rounded-sm"></div>
</div>
<div className="mt-auto pt-3 border-t border-gray-100 space-y-1.5">
<div className="w-full h-1.5 bg-gray-100 rounded-sm"></div>
<div className="w-5/6 h-1.5 bg-gray-100 rounded-sm"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#58C589] text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 transform -rotate-6 z-20 whitespace-nowrap">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-bold uppercase tracking-wider">
                          Verified
                        </span>
</div>
</div>
<div className="mt-8 w-14 h-14 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-[#F0FAF5] border border-[#58C589]/20"></div>
</div>
</div>
</div>
</div>

<div className="absolute -top-16 -left-16 w-[300px] h-[300px] bg-[#82D3A7]/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6"></section>

<section className="overflow-hidden border-y bg-[#FFFFFF] border-[#2EB66C]/10 pt-24 pb-24 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="z-10 text-center max-w-3xl mr-auto ml-auto relative">
<div className="flex items-center justify-center gap-3">
<span className="w-8 h-px bg-[#2EB66C]/30"></span>
<span className="uppercase text-xs font-semibold text-[#4B5563] tracking-widest">
              Overview
            </span>
<span className="w-8 h-px bg-[#2EB66C]/30"></span>
</div>
<h2 className="md:text-5xl leading-[1.08] text-4xl font-semibold text-[#111827] tracking-tight font-heading mt-5">
            Collect everything required before you proceed
          </h2>
<p className="leading-relaxed text-base md:text-lg mt-6 text-[#4B5563]">
            OnBoardNow helps firms collect the information, documents, checks
            and identity verification needed to onboard clients, tenants,
            applicants, buyers or customers.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 mt-16 relative gap-x-6 gap-y-6">

<div className="p-6 rounded-2xl border border-[#2EB66C]/10 bg-white hover:shadow-lg transition-shadow shadow-sm flex flex-col items-start" style={{fontSize: '24px', color: '#58C589'}}>
<div className="w-12 h-12 rounded-xl bg-[#F0FAF5] border border-[#2EB66C]/10 flex items-center justify-center mb-5 shrink-0">
<i className="ph-duotone ph-fingerprint" style={{fontSize: '24px', color: '#58C589'}}></i>
</div>
<h3 className="text-base font-medium text-[#111827]">
              ID Verification &amp; Documents
            </h3>
<p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
              Passport, driving licence and liveness photo ID using secure
              biometrics checks via the OnBoardNow mobile app
            </p>
</div>

<div className="p-6 rounded-2xl border border-[#2EB66C]/10 bg-white hover:shadow-lg transition-shadow shadow-sm flex flex-col items-start" style={{fontSize: '24px', color: '#58C589'}}>
<div className="w-12 h-12 rounded-xl bg-[#F0FAF5] border border-[#2EB66C]/10 flex items-center justify-center mb-5 shrink-0">
<i className="ph-duotone ph-shield-check" style={{fontSize: '24px', color: '#58C589'}}></i>
</div>
<h3 className="text-base font-medium text-[#111827]">
              KYC / AML / PEP &amp; Sanctions
            </h3>
<p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
              Know your client checks including AML, PEP &amp; Sanctions are all
              automated into a single report with ID
            </p>
</div><div className="p-6 rounded-2xl border border-[#2EB66C]/10 bg-white hover:shadow-lg transition-shadow shadow-sm flex flex-col items-start" style={{fontSize: '24px', color: '#58C589'}}>
<div className="w-12 h-12 rounded-xl bg-[#F0FAF5] border border-[#2EB66C]/10 flex items-center justify-center mb-5 shrink-0">
<i className="ph-duotone ph-clipboard-text" style={{fontSize: '24px', color: '#58C589'}}></i>
</div>
<h3 className="text-base font-medium text-[#111827]">
              Client Interview
            </h3>
<p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
              Case specific interview to gather information to complete
              necessary forms &amp; collect essential case information
            </p>
</div><div className="p-6 rounded-2xl border border-[#2EB66C]/10 bg-white hover:shadow-lg transition-shadow shadow-sm flex flex-col items-start" style={{fontSize: '24px', color: '#58C589'}}>
<div className="w-12 h-12 rounded-xl bg-[#F0FAF5] border border-[#2EB66C]/10 flex items-center justify-center mb-5 shrink-0">
<i className="ph-duotone ph-file-text w-[24px] h-[24px]" data-icon-replaced="true" strokeWidth="2" style={{fontSize: '24px', color: 'rgb(88, 197, 137)', width: '24px', height: '24px'}}></i>
</div>
<h3 className="text-base font-medium text-[#111827]">
              Use Interview Information
            </h3>
<p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
              Completes forms such as Client Care Letter, TA6, TA10 and Client
              Profile
            </p>
</div><div className="hover:shadow-lg transition-shadow flex flex-col bg-white border-[#2EB66C]/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm items-start" style={{fontSize: '24px', color: '#58C589'}}>
<div className="w-12 h-12 rounded-xl bg-[#F0FAF5] border border-[#2EB66C]/10 flex items-center justify-center mb-5 shrink-0">
<i className="ph-duotone ph-check-circle" style={{fontSize: '24px', color: '#58C589'}}></i>
</div>
<h3 className="text-base font-medium text-[#111827]">
              Run Checks if Needed
            </h3>
<p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
              Right to Rent / Right to Work — if the interview requires a right
              to rent or right to work check, it is automatically carried out
            </p>
</div><div className="p-6 rounded-2xl border border-[#2EB66C]/10 bg-white hover:shadow-lg transition-shadow shadow-sm flex flex-col items-start" style={{fontSize: '24px', color: '#58C589'}}>
<div className="w-12 h-12 rounded-xl bg-[#F0FAF5] border border-[#2EB66C]/10 flex items-center justify-center mb-5 shrink-0">
<i className="ph-duotone ph-bank" style={{fontSize: '24px', color: '#58C589'}}></i>
</div>
<h3 className="text-base font-medium text-[#111827]">Proof of Funds</h3>
<p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
              Source of wealth and supporting financial documents
            </p>
</div>





<div className="p-6 rounded-2xl border border-[#2EB66C]/10 bg-white hover:shadow-lg transition-shadow shadow-sm flex flex-col items-start" style={{fontSize: '24px', color: '#58C589'}}>
<div className="w-12 h-12 rounded-xl bg-[#F0FAF5] border border-[#2EB66C]/10 flex items-center justify-center mb-5 shrink-0">
<i className="ph-duotone ph-files" style={{fontSize: '24px', color: '#58C589'}}></i>
</div>
<h3 className="text-base font-medium text-[#111827]">
              Legal User Documents
            </h3>
<p className="text-sm text-[#4B5563] mt-2 leading-relaxed">Client Care Letter, TA10, TA6</p>
</div><div className="p-6 rounded-2xl border border-[#2EB66C]/10 bg-white hover:shadow-lg transition-shadow shadow-sm flex flex-col items-start" style={{fontSize: '24px', color: '#58C589'}}>
<div className="w-12 h-12 rounded-xl bg-[#F0FAF5] border border-[#2EB66C]/10 flex items-center justify-center mb-5 shrink-0">
<i className="ph-duotone ph-files" style={{fontSize: '24px', color: '#58C589'}}></i>
</div>
<h3 className="text-base font-medium text-[#111827]">Letting Agent Documents</h3>
<p className="text-sm text-[#4B5563] mt-2 leading-relaxed">T&amp;C, Right to Rent, Automated Reference Checking</p>
</div>




<div className="p-6 rounded-2xl border border-[#2EB66C]/10 bg-white hover:shadow-lg transition-shadow shadow-sm flex flex-col items-start" style={{fontSize: '24px', color: '#58C589'}}>
<div className="w-12 h-12 rounded-xl bg-[#F0FAF5] border border-[#2EB66C]/10 flex items-center justify-center mb-5 shrink-0">
<i className="ph-duotone ph-calculator" style={{fontSize: '24px', color: '#58C589'}}></i>
</div>
<h3 className="text-base font-medium text-[#111827]">
              Accountant Documents
            </h3>
<p className="text-sm text-[#4B5563] mt-2 leading-relaxed">
              Client Care Letter, Key KYC Data
            </p>
</div>
</div>
<div className="font-heading text-4xl md:text-5xl tracking-tight text-[#58C589] font-bold">
<p className="md:text-5xl text-4xl font-bold text-[#58C589] tracking-tight font-heading text-center pt-14">
            No chasing. No gaps. No guesswork.
          </p>
</div>
<div className="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-[#58C589]/15 blur-3xl rounded-full"></div>
</div>
</section>
<section className="overflow-hidden bg-[#FAFAFA] pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mr-auto ml-auto">
<h2 className="md:text-5xl leading-[1.08] text-4xl font-semibold text-[#111827] tracking-tight font-heading mb-6">
            Choose the flows you need
          </h2>
<p className="leading-relaxed text-lg text-[#4B5563] mb-4">
            OnBoardNow uses intelligently structured onboarding flows to manage
            what needs to be collected for each scenario.
          </p>
<p className="leading-relaxed text-lg text-[#4B5563] mb-4">
            Flows can incorporate secure identity verification through the
            OnBoardNow mobile app, creating a fully connected and compliant
            onboarding experience.
          </p>
<p className="leading-relaxed text-lg text-[#4B5563]">
            Custom flows can be generated for specific needs.
          </p>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#111827] pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center justify-between gap-16">

<div className="w-full lg:w-1/2 max-w-xl">
<h2 className="md:text-2xl leading-snug text-xl font-medium text-[#82D3A7] mb-6 -multi">
              Built-in identity verification
            </h2>
<p className="md:text-2xl leading-snug text-xl font-medium text-[#82D3A7] mb-6">
              In regulated sectors, robust identity verification is fundamental.
            </p>
<p className="leading-relaxed md:text-lg text-base text-neutral-300 mb-10">
              OnBoardNow integrates a dedicated mobile app that enables secure,
              user-friendly identity verification within the onboarding flow —
              delivering a seamless, fully connected experience without relying
              on third-party tools.
            </p>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<div className="w-3.5 h-3.5 text-[#58c589]">
<svg className="lucide lucide-check w-3.5 h-3.5 text-[#58C589]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-white text-base font-medium">
                  Secure ID capture — passport, driving licence, and more
                </span>
</li>
<li className="flex items-start gap-4">
<div className="w-3.5 h-3.5 text-[#58c589]">
<svg className="lucide lucide-check w-3.5 h-3.5 text-[#58C589]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-white text-base font-medium">
                  Mobile-first verification experience
                </span>
</li>
<li className="flex items-start gap-4">
<div className="w-3.5 h-3.5 text-[#58c589]">
<svg className="lucide lucide-check w-3.5 h-3.5 text-[#58C589]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-white text-base font-medium">
                  Fully linked to onboarding workflows
                </span>
</li>
<li className="flex items-start gap-4">
<div className="w-3.5 h-3.5 text-[#58c589]">
<svg className="lucide lucide-check w-3.5 h-3.5 text-[#58C589]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-white text-base font-medium">
                  Designed for compliance-heavy processes
                </span>
</li>
</ul>
</div>

<div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
<div className="w-full max-w-[340px] relative z-20">
<div className="bg-[#111827] rounded-[2.5rem] p-2 shadow-2xl border border-gray-800 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#111827] rounded-b-2xl z-30"></div>
<div className="bg-white rounded-[2rem] overflow-hidden relative h-[600px] flex flex-col">
<div className="pt-14 px-6 pb-4 bg-[#58C589] text-center text-white relative shadow-md z-10">
<h4 className="font-semibold text-base">
                      Identity Verification
                    </h4>
<p className="text-xs text-white/80 mt-1">Scan your document</p>
</div>
<div className="flex-1 bg-gray-50 relative p-6 flex flex-col items-center justify-center">
<div className="relative w-full aspect-[3/4] border-2 border-[#58C589] rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-inner mb-8">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#2DD4BF] shadow-[0_0_8px_#2DD4BF] z-30"></div>
<div className="absolute inset-0 bg-[#58C589]/5"></div>
<div className="w-[85%] h-[75%] bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col relative z-10">
<div className="flex items-start gap-4 border-b border-gray-100 pb-4 mb-4">
<div className="w-12 h-16 bg-gray-100 rounded"></div>
<div className="flex-1 space-y-2.5 pt-1">
<div className="w-20 h-2.5 bg-gray-100 rounded-sm"></div>
<div className="w-28 h-2 bg-gray-100 rounded-sm"></div>
<div className="w-16 h-2 bg-gray-100 rounded-sm"></div>
</div>
</div>
<div className="space-y-3 flex-1">
<div className="w-full h-2 bg-gray-100 rounded-sm"></div>
<div className="w-3/4 h-2 bg-gray-100 rounded-sm"></div>
<div className="w-5/6 h-2 bg-gray-100 rounded-sm"></div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#2DD4BF] text-white px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 z-20 whitespace-nowrap">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-bold tracking-wide">
                          Identity Verified
                        </span>
</div>
</div>
<div className="w-16 h-16 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-[#58C589] flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-white"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#58C589]/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#2DD4BF]/10 blur-[80px] rounded-full pointer-events-none z-0"></div>
</div>
</div>
</div>

</section>

<section className="overflow-hidden bg-[#FFFFFF] border-[#2EB66C]/10 pt-24 pb-24 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
<h2 className="md:text-5xl leading-[1.08] text-4xl font-semibold text-[#111827] tracking-tight font-heading">
            Simple for clients. Structured for firms.
          </h2>
</div>
<div className="relative z-10 max-w-3xl mx-auto">
<div className="absolute top-8 bottom-8 left-[27px] md:left-[31px] w-0.5 bg-[#58C589]/20 z-0 hidden sm:block"></div>
<div className="sm:space-y-12 space-y-10">

<div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 items-start z-10">
<div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-white border-4 border-[#F0FAF5] shadow-sm flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-[#82D3A7] relative z-10">
                1
              </div>
<div className="sm:pt-3">
<h3 className="text-xl font-semibold text-[#111827]">
                  Select a Flow
                </h3>
<p className="text-base text-[#4B5563] mt-2 leading-relaxed">
                  Your firm selects the appropriate onboarding flow for the
                  scenario — tenant, buyer, KYC, or custom.
                </p>
</div>
</div>

<div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 items-start z-10">
<div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-white border-4 border-[#F0FAF5] shadow-sm flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-[#82D3A7] relative z-10">
                2
              </div>
<div className="sm:pt-3">
<h3 className="text-xl font-semibold text-[#111827]">
                  Send a Secure Link
                </h3>
<p className="leading-relaxed text-base text-[#4B5563] mt-2">
                  A secure, branded link is sent to your client via email, text
                  or WhatsApp. No login or account required on their side.
                </p>
</div>
</div>

<div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 items-start z-10">
<div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-white border-4 border-[#F0FAF5] shadow-sm flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-[#82D3A7] relative z-10">
                3
              </div>
<div className="sm:pt-3">
<h3 className="text-xl font-semibold text-[#111827]">
                  Client Completes Everything
                </h3>
<p className="text-base text-[#4B5563] mt-2 leading-relaxed">
                  The client is guided step by step through forms, document
                  uploads, and identity verification via the OnBoardNow mobile
                  app — all on their phone.
                </p>
</div>
</div>

<div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 items-start z-10">
<div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-white border-4 border-[#F0FAF5] shadow-sm flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-[#82D3A7] relative z-10">
                4
              </div>
<div className="sm:pt-3">
<h3 className="text-xl font-semibold text-[#111827]">
                  Information is Structured
                </h3>
<p className="text-base text-[#4B5563] mt-2 leading-relaxed">
                  All data, documents, and verification results are organised
                  and referenced automatically.
                </p>
</div>
</div>

<div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 items-start z-10">
<div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-white border-4 border-[#F0FAF5] shadow-sm flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-[#82D3A7] relative z-10">
                5
              </div>
<div className="sm:pt-3">
<h3 className="text-xl font-semibold text-[#111827]">
                  Returned to Your System
                </h3>
<p className="text-base text-[#4B5563] mt-2 leading-relaxed">
                  Everything is delivered back to your case management system
                  (e.g. Clio) or returned in a fully organised format — ready to
                  use immediately.
                </p>
</div>
</div>
</div>
<div className="sm:mt-16 sm:text-left sm:pl-[96px] z-10 text-center mt-12 relative">
<button className="hover:bg-[#2EB66C] shadow-[#58C589]/20 transition-all duration-300 inline-flex font-medium text-white bg-[#58C589] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg items-center justify-center" onclick="window.location.href='/video-presentations'" role="button">
              View Presentations
            </button>
</div>
</div>
<div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-[#82D3A7]/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-[#58C589]/10 blur-3xl rounded-full pointer-events-none"></div>

</div>
</section>

<section className="overflow-hidden bg-[#FAFAFA] border-[#2EB66C]/10 border-t pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-heading text-4xl md:text-5xl tracking-tight text-[#111827] leading-[1.08] font-semibold mb-6">
            Built for real-world onboarding
          </h2>
<p className="text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Structured flows for every regulated sector — collecting exactly
            what each process requires.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
<div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#58C589]/20 flex flex-col bg-white border-[#82D3A7]/40 border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-start">
<div className="w-7 h-7 text-[#58C589] mb-2">
<svg className="lucide lucide-scale w-7 h-7 text-[#58c589]" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-[#111827]">Law Firms</h3>
<p className="text-[15px] leading-relaxed text-[#4B5563]">
                Collect client ID, KYC, AML, PEP and sanctions checks, and
                case-specific intake details.
              </p>
</div>
</div>
<div className="bg-white border border-[#82D3A7]/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#58C589]/20 flex flex-col items-start">
<div className="shrink-0 text-[#58C589] w-7 h-7 mb-2">
<svg className="lucide lucide-calculator w-5 h-5 shrink-0 mt-0.5 text-[#58c589]" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-[#111827]">Accountants</h3>
<p className="text-[15px] text-[#4B5563] leading-relaxed">
                Collect client KYC information, Client Care Letters and key
                compliance documentation.
              </p>
</div>
</div>
<div className="bg-white border border-[#82D3A7]/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#58C589]/20 flex flex-col items-start">
<div className="w-7 h-7 text-[#58C589] mb-2">
<svg className="lucide lucide-pie-chart w-7 h-7 text-[#58c589]" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-[#111827]">
                Financial Advisers
              </h3>
<p className="text-[15px] text-[#4B5563] leading-relaxed">
                Collect KYC, risk profile information, source of funds and
                supporting evidence.
              </p>
</div>
</div>
<div className="bg-white border border-[#82D3A7]/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#58C589]/20 flex flex-col items-start">
<div className="w-7 h-7 text-[#58C589] mb-2">
<svg className="lucide lucide-home w-7 h-7 text-[#58c589]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-[#111827]">Letting Agents</h3>
<p className="text-[15px] text-[#4B5563] leading-relaxed">
                Collect ID, Right to Rent evidence and tenant information for
                every adult tenant.
              </p>
</div>
</div>
<div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#58C589]/20 flex flex-col bg-white border-[#82D3A7]/40 border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-start">
<div className="w-7 h-7 text-[#58C589] mb-2">
<svg className="lucide lucide-key w-7 h-7 text-[#58c589]" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-[#111827]">Estate Agents</h3>
<p className="text-[15px] text-[#4B5563] leading-relaxed">
                Collect buyer ID, seller ID, proof of funds and supporting
                documents.
              </p>
</div>
</div>
<div className="bg-white border border-[#82D3A7]/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#58C589]/20 flex flex-col items-start">
<div className="w-7 h-7 text-[#58C589] mb-2">
<svg className="lucide lucide-users w-7 h-7 text-[#58c589]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-[#111827]">
                Recruitment Agencies
              </h3>
<p className="text-[15px] text-[#4B5563] leading-relaxed">
                Collect ID, Right to Work evidence and applicant information.
              </p>
</div>
</div>
</div>
</div>
<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#58C589]/5 blur-[120px] rounded-full pointer-events-none"></div>

</section>
<section className="flex text-sm font-semibold text-[#111827] tracking-wide text-center border-0 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 items-center">
<div className="z-10 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative">
<div className="text-center max-w-full mr-auto ml-auto">
<h2 className="md:text-5xl leading-[1.08] text-4xl font-semibold text-[#111827] tracking-tight font-heading mb-6">
            Designed to work with your systems
          </h2>
<p className="text-lg text-[#4B5563] leading-relaxed mb-10 max-w-2xl mx-auto">
            OnBoardNow integrates with the platforms your firm already uses —
            triggering onboarding directly from your case management system and
            returning everything back in a structured, usable format.
          </p>
<div className="flex flex-wrap gap-3 mb-6 gap-x-3 gap-y-3 items-center justify-center">
<span className="inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm font-semibold tracking-wide shadow-md shadow-[#7C3AED]/20 bg-[#2EB66C]">
              Clio
            </span>
<span className="inline-flex items-center px-5 py-2.5 rounded-full text-[#111827] text-sm font-semibold tracking-wide border border-[#5B21B6]/10 bg-[#F0FAF5]">
              Access / DPS / Eclipse
            </span>
<span className="inline-flex items-center px-5 py-2.5 rounded-full text-[#111827] text-sm font-semibold tracking-wide border border-[#5B21B6]/10 bg-[#F0FAF5]">
              LEAP
            </span>
<span className="inline-flex items-center px-5 py-2.5 rounded-full text-[#111827] text-sm font-semibold tracking-wide border border-[#5B21B6]/10 bg-[#F0FAF5]">
              Advanced / TFB
            </span>
<span className="inline-flex items-center text-sm font-semibold text-[#111827] tracking-wide border-[#5B21B6]/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 bg-[#F0FAF5]">
              API / Custom
            </span>
</div>
<p className="text-sm text-[#4B5563]">
            Full Clio integration available — trigger flows from a matter and
            return all outputs directly to the case file.
          </p>
</div>
</div>
</section>


<section className="md:text-xl leading-relaxed text-lg font-medium text-[#82D3A7] max-w-full z-10 mr-auto ml-auto" style={{backgroundImage: 'linear-gradient(to bottom right, rgba(46, 182, 108, 0.85), rgba(88, 197, 137, 0.85)), url(\'https: //hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf9db752-2656-4a11-87a0-7097ba0b13af_1600w.png\')'}}>
<section className="overflow-hidden bg-center bg-cover pt-24 pb-24 relative" style={{backgroundImage: 'linear-gradient(to bottom right, rgba(46, 182, 108, 0.85), rgba(88, 197, 137, 0.85)), url(\'https: //hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf9db752-2656-4a11-87a0-7097ba0b13af_1600w.png\')'}}>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="md:text-5xl leading-[1.08] text-4xl font-semibold text-white tracking-tight font-heading mb-6">
            Ready to get onboarding right?
          </h2>
<p className="leading-relaxed md:text-xl md:text-slate-50 text-lg font-medium max-w-2xl mr-auto mb-10 ml-auto">
            See OnBoardNow in action or tell us about your requirements.
          </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<button className="transition-all duration-300 font-medium bg-white rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg text-[#58C589] hover:bg-[#F0FAF5]" onclick="window.location.href='/video-presentations'" role="button">
              View Presentations
            </button>
<button className="hover:bg-white/10 transition-all duration-300 font-medium text-white border-white border-2 rounded-full pt-4 pr-8 pb-4 pl-8" onclick="window.location.href='/contact'" role="button">
              Contact Us About Your Needs
            </button>
</div>
</div>
<div className="absolute z-0 top-0 left-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute z-0 bottom-0 right-0 w-[500px] h-[500px] bg-black/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>
</section>
<div className="absolute z-0 top-0 left-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute z-0 bottom-0 right-0 w-[500px] h-[500px] bg-black/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>
</section>
<footer className="overflow-hidden text-white bg-[#111827] w-full border-white/10 border-t relative">
<div className="md:py-16 z-10 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative gap-x-10 gap-y-10">
<div className="lg:col-span-1">
<a className="inline-flex items-center justify-center" href="#">
<img alt="OnBoardNow" className="h-12 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/657f78ec-4ea6-46fb-a024-5f705bcc2cf2_800w.png"/>
</a>
<h3 className="text-[#FFFFFF] font-semibold mt-6 text-sm">
              Everything required. From the start.
            </h3>
<p className="text-[rgba(255,255,255,0.4)] max-w-sm leading-relaxed mt-2 text-sm">
              Client onboarding and identity verification made simple.
            </p>
</div>
<div className="lg:col-span-2 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="">
<div className="font-heading text-sm font-semibold text-white">
                Platform
              </div>
<div className="w-8 h-0.5 bg-[#58C589] rounded-full mt-1 mb-5"></div>
<ul className="flex flex-col gap-y-3 text-sm text-[#4B5563]">
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/how-it-works">
                    How It Works
                  </a>
</li>
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/the-app">
                    The App
                  </a>
</li>
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/flows">
                    Flows
                  </a>
</li>
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/integrations">
                    Integrations
                  </a>
</li>
</ul>
</div>
<div className="">
<div className="font-heading text-sm font-semibold text-white">
                Solutions
              </div>
<div className="w-8 h-0.5 bg-[#58C589] rounded-full mt-1 mb-5"></div>
<ul className="flex flex-col gap-y-3 text-sm text-[#4B5563]">
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/use-cases">
                    Use Cases
                  </a>
</li>
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/use-cases">
                    Law Firms
                  </a>
</li>
<li>
<a className="hover:text-[#58C589] transition-colors" href="/use-cases">
                    Accountants
                  </a>
</li>
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/use-cases">
                    Financial Advisers
                  </a>
</li>
<li>
<a className="hover:text-[#58C589] transition-colors" href="/use-cases">
                    Letting Agents
                  </a>
</li>
<li>
<a className="hover:text-[#58C589] transition-colors" href="/use-cases">
                    Estate Agents
                  </a>
</li>
<li>
<a className="hover:text-[#58C589] transition-colors" href="/use-cases">
                    Recruitment
                  </a>
</li>
</ul>
</div>
<div className="">
<div className="font-heading text-sm font-semibold text-white">
                Company
              </div>
<div className="w-8 h-0.5 bg-[#58C589] rounded-full mt-1 mb-5"></div>
<ul className="flex flex-col gap-y-3 text-sm text-[#4B5563]">
<li className="" onclick="window.location.href='/about'" role="button">
<a className="hover:text-[#58C589] transition-colors" href="/about">
                    About
                  </a>
</li>
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/video-presentations">
                    Video Presentations
                  </a>
</li>
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/careers">
                    Careers
                  </a>
</li>
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/contact">
                    Contact
                  </a>
</li>
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/privacy-policy">
                    Privacy Policy
                  </a>
</li>
<li className="">
<a className="hover:text-[#58C589] transition-colors" href="/terms">
                    Terms
                  </a>
</li>
</ul>
</div>
</div>
<div className="lg:col-span-1">
<div className="font-heading text-sm font-semibold text-white">
              Contact Details
            </div>
<div className="w-8 h-0.5 bg-[#58C589] rounded-full mt-1 mb-5"></div>
<ul className="space-y-4 text-sm text-[#4B5563]">
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 mt-0.5 shrink-0 text-[#58C589]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>
                  123 Compliance Way
                  <br/>
                  London, EC1A 1BB
                </span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-phone w-4 h-4 shrink-0 text-[#58C589]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span>+44 20 7123 4567</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-mail w-4 h-4 shrink-0 text-[#58C589]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<a className="hover:text-[#58C589] transition-colors" href="mailto:hello@onboardnow.com">
                  hello@onboardnow.com
                </a>
</li>
</ul>
</div>
<div className="md:col-span-2 lg:col-span-4 flex flex-col sm:flex-row gap-4 border-white/10 border-t mt-4 pt-8 items-center justify-between">
<p className="text-xs text-[#4B5563]">
              © 2025 OnBoardNow. All rights reserved.
            </p>
<div className="flex gap-8 text-xs text-[#4B5563]">
<a className="hover:text-[#58C589] transition-colors" href="/privacy-policy">
                Privacy Policy
              </a>
<a className="hover:text-[#58C589] transition-colors" href="/terms">
                Terms
              </a>
</div>
</div>
</div>
<div className="-bottom-40 -right-32 bg-[#58C589]/12 w-[520px] h-[520px] rounded-full absolute blur-3xl"></div>
<div className="-top-40 -left-32 bg-[#FFF]/5 w-[520px] h-[520px] rounded-full absolute blur-3xl"></div>
</div>
</footer>


    </>
  );
}

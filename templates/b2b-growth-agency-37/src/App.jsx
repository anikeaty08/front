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



import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
mermaid.initialize({
startOnLoad: true,
theme: 'base',
themeVariables: {
primaryColor: '#ffffff',
primaryTextColor: '#111827',
primaryBorderColor: '#e5e7eb',
lineColor: '#9ca3af',
secondaryColor: '#fff1f2',
tertiaryColor: '#f9fafb',
fontFamily: 'Inter, sans-serif'
}
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
    


            (function() {
              window.currentWorkflowZoom = 1;
              const minZoom = 1;
              const maxZoom = 4;
              let isDragging = false;
              let startX, startY, scrollLeft, scrollTop;

              window.zoomInWorkflow = function() {
                if (window.currentWorkflowZoom < maxZoom) {
                  window.currentWorkflowZoom += 0.5;
                  window.applyWorkflowZoom();
                }
              };

              window.zoomOutWorkflow = function() {
                if (window.currentWorkflowZoom > minZoom) {
                  window.currentWorkflowZoom -= 0.5;
                  window.applyWorkflowZoom();
                }
              };

              window.resetZoomWorkflow = function() {
                window.currentWorkflowZoom = 1;
                window.applyWorkflowZoom();
              };

              window.applyWorkflowZoom = function() {
                const img = document.getElementById('workflow-zoom-img');
                const container = document.getElementById('workflow-scroll-container');
                const wrapper = document.getElementById('workflow-zoom-wrapper');
                if (!img || !container || !wrapper) return;

                if (window.currentWorkflowZoom === 1) {
                  wrapper.style.width = '100%';
                  wrapper.style.height = '100%';
                  img.style.maxHeight = '100%';
                  img.style.maxWidth = '100%';
                  container.style.alignItems = 'center';
                  container.style.justifyContent = 'center';
                  container.style.cursor = 'default';
                } else {
                  wrapper.style.width = (window.currentWorkflowZoom * 100) + '%';
                  wrapper.style.height = (window.currentWorkflowZoom * 100) + '%';
                  img.style.maxHeight = 'none';
                  img.style.maxWidth = 'none';
                  container.style.alignItems = 'flex-start';
                  container.style.justifyContent = 'flex-start';
                  container.style.cursor = 'grab';
                }
              };

              setTimeout(() => {
                const container = document.getElementById('workflow-scroll-container');
                if(container) {
                  container.addEventListener('mousedown', (e) => {
                    if(window.currentWorkflowZoom > 1) {
                      isDragging = true;
                      container.style.cursor = 'grabbing';
                      startX = e.pageX - container.offsetLeft;
                      startY = e.pageY - container.offsetTop;
                      scrollLeft = container.scrollLeft;
                      scrollTop = container.scrollTop;
                    }
                  });
                  container.addEventListener('mouseleave', () => {
                    isDragging = false;
                    if(window.currentWorkflowZoom > 1) container.style.cursor = 'grab';
                  });
                  container.addEventListener('mouseup', () => {
                    isDragging = false;
                    if(window.currentWorkflowZoom > 1) container.style.cursor = 'grab';
                  });
                  container.addEventListener('mousemove', (e) => {
                    if(!isDragging) return;
                    e.preventDefault();
                    const x = e.pageX - container.offsetLeft;
                    const y = e.pageY - container.offsetTop;
                    const walkX = (x - startX) * 2;
                    const walkY = (y - startY) * 2;
                    container.scrollLeft = scrollLeft - walkX;
                    container.scrollTop = scrollTop - walkY;
                  });
                }
              }, 500);

              const origClose = window.closeWorkflowModal;
              window.closeWorkflowModal = function() {
                  if(origClose) origClose();
                  setTimeout(window.resetZoomWorkflow, 300);
              };
            })();
          


      window.openWorkflowModal = function() {
        const m = document.getElementById('workflow-modal');
        const b = document.getElementById('workflow-modal-backdrop');
        const c = document.getElementById('workflow-modal-content');
        if(!m || !b || !c) return;
        m.classList.remove('hidden');
        m.classList.add('flex');
        void m.offsetWidth;
        b.classList.remove('opacity-0');
        b.classList.add('opacity-100');
        c.classList.remove('scale-95', 'opacity-0');
        c.classList.add('scale-100', 'opacity-100');
        document.body.style.overflow = 'hidden';
      };

      window.closeWorkflowModal = function() {
        const m = document.getElementById('workflow-modal');
        const b = document.getElementById('workflow-modal-backdrop');
        const c = document.getElementById('workflow-modal-content');
        if(!m || !b || !c) return;
        b.classList.remove('opacity-100');
        b.classList.add('opacity-0');
        c.classList.remove('scale-100', 'opacity-100');
        c.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
          m.classList.add('hidden');
          m.classList.remove('flex');
          document.body.style.overflow = '';
        }, 300);
      };

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          const m = document.getElementById('workflow-modal');
          if (m && !m.classList.contains('hidden') && window.closeWorkflowModal) {
            window.closeWorkflowModal();
          }
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto glass border rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-4 md:gap-10 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] w-full max-w-5xl transition-all duration-300 border-gray-200/60">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="font-serif text-xl md:text-2xl tracking-tight italic font-medium group-hover:text-rose-600 transition-colors text-gray-900">
            Handplaced
          </span>
</a>

<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-blue-700/20 bg-blue-700 text-white hover:bg-blue-800 shrink-0" href="#book-call">
          Get Started
          <svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 transition-transform group-hover:translate-x-0.5 hidden sm:block" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>
</header>
<main className="max-w-7xl mx-auto pt-28 md:pt-32 px-4 md:px-6 pb-24">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 overflow-hidden md:mb-16 text-center bg-white border-gray-200/60 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-[0_1px_2px_rgba(0,0,0,0.02)]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">


<h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] tracking-tighter mb-6 md:mb-8 font-serif font-medium text-gray-900">
            We'll Get You
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 italic pr-2 to-orange-400">
              10-15 Qualified Calls
            </span>
            per Month On Pay-Per-Show
          </h1>

<p className="animate-fade-up delay-200 text-base md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-8 md:mb-12 font-light px-2">
            100% Done-For-You B2B Leads
          </p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-xl md:shadow-2xl overflow-hidden mb-8 md:mb-12 ring-1 bg-gray-900 border-white/50 shadow-gray-200 ring-gray-900/5">


<style>
              wistia-player[media-id='2kt0unms1n']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/2kt0unms1n/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }
            </style>
<wistia-player aspect="1.7777777777777777" media-id="2kt0unms1n"></wistia-player>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-blue-700/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-blue-700 text-white hover:bg-blue-800" href="#book-call">
              Get Started
              <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs font-montserrat text-gray-400">
            Book a Free Strategy Session.
          </p>
</div>
</section>


<section className="py-12 md:py-20 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-gray-900 px-4">
          Are You Currently Struggling With...
        </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-red-50 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, #fca5a5, #ef4444)', -BorderRadiusBefore: '1.5rem'}}>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-gray-900">
              Wasting Money on Leads That Never Show
            </h3>
<p className="text-gray-500 font-light leading-relaxed text-sm">
              You are paying for leads that look promising at first, but never
              actually turn into real conversations.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-red-50 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, #fca5a5, #ef4444)', -BorderRadiusBefore: '1.5rem'}}>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-gray-900">
              Paying Before Seeing Results
            </h3>
<p className="text-gray-500 font-light leading-relaxed text-sm">
              Tired of paying agencies, ad platforms, or lead providers before
              knowing whether anything will actually come from it
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-red-50 to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, #fca5a5, #ef4444)', -BorderRadiusBefore: '1.5rem'}}>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-gray-900">
              Not Enough Qualified Sales Calls
            </h3>
<p className="text-gray-500 font-light leading-relaxed text-sm">
              You have a strong offer, but not enough of the right people
              getting on the phone with you.
            </p>
</div>
</div>
</section>

<section className="py-12 md:py-20">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-gray-900 tracking-tight font-serif mb-4">
            Why Choose Handplaced
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-rose-200 bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-gray-900 font-montserrat mb-3">
              Stop Chasing Leads
            </h3>
<p className="text-gray-500 font-light text-sm leading-relaxed z-10 relative">
              Instead of wasting hours prospecting, reaching out, following up,
              and trying to get people to book, your team can focus on what
              actually matters.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-rose-100"></div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-rose-200 bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-gray-900">
              You Only Pay When Prospects Show Up
            </h3>
<p className="text-gray-500 font-light text-sm leading-relaxed z-10 relative">
              You pay on a pay-per-show basis, so your money goes toward real
              conversations, not empty promises.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-rose-100"></div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-rose-200 bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-gray-900">
              Build a More Predictable Pipeline
            </h3>
<p className="text-gray-500 font-light text-sm leading-relaxed z-10 relative">
              Instead of relying only on referrals, word of mouth, or random
              inbound leads, you get a system designed to consistently create
              new qualified sales opportunities.
            </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-rose-100"></div>
</div>
</div>
</section>


<section className="py-16 md:py-24" id="process">
<div className="text-center mb-12 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900">
            Get Consistent Results
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-gray-200"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-white border-gray-200 text-gray-400">
              1
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-gray-900">
              Book a Call
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              Contact us to schedule a free, no-obligation consultation. We
              analyze your current situation and determine if our system is a
              fit for your specific growth goals.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-white border-gray-200 text-gray-400">
              2
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-gray-900">
              We Build and Implement the Outreach Strategy
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              Once we understand your ideal customer, we create and launch a
              targeted outreach strategy designed to get your service in front
              of the right people. From identifying prospects to crafting the
              messaging and managing the outreach, we handle the everything
              needed get you booked sales calls.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-white border-gray-200 text-gray-400">
              3
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-gray-900">
              You Close Qualified Prospects
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs px-4 md:px-0">
              Qualified prospects show up on your calendar, ready for a real
              conversation. You focus on taking the calls, closing new clients,
              and growing your business.
            </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-blue-700/20 bg-blue-700 text-white hover:bg-blue-800" href="#book-call">
            Book a Call
          </a>
</div>
</section>

<section className="mb-16 md:mb-24 px-0 md:px-6">
<div className="max-w-6xl mx-auto"></div>
</section>

<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-gray-50">
<div className="max-w-7xl mx-auto">
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-sm relative overflow-hidden bg-white border-gray-200">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-rose-50/50"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-gray-900">
                  What We'll Actually Do So You Don't Have To
                </h3>
<p className="text-gray-500 font-light text-base md:text-lg">
                  No fluff. We handle the research, targeting, copy, sending,
                  follow-up, tracking, and optimization required to turn cold
                  outreach into qualified sales calls.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      Market &amp; Prospect Research
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      Targeted Lead List Building
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      Cold Email Infrastructure Setup
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      Email Copy &amp; Offer Positioning
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      Campaign Launch &amp; Management
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      Follow-Up Sequences
                    </span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      Reply Monitoring &amp; Qualification
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      Call Booking Support
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      Deliverability Monitoring
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      Performance Tracking &amp; Reporting
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-700">
                      Ongoing Campaign Optimization
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-50 text-rose-600">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-bold font-montserrat text-sm md:text-lg border-b-2 text-gray-900 border-rose-200">
                      Pay-Per-Show Partnership
                    </span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full max-w-4xl mx-auto mb-6 md:mb-8">
<button className="mb-5 text-sm md:text-base font-montserrat font-medium text-rose-600 flex items-center gap-2 hover:text-rose-700 transition-colors bg-rose-50 px-6 py-2.5 rounded-full border border-rose-100 shadow-sm hover:shadow-md cursor-pointer" onclick="if(window.openWorkflowModal) window.openWorkflowModal()">
<svg className="lucide lucide-zoom-in" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg>
                  Have a Look at Our System
                </button>
<div className="w-full md:w-[80%] rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white cursor-pointer hover:shadow-md transition-shadow relative group h-[260px] md:h-[320px] flex items-center justify-center p-4 md:p-6" onclick="if(window.openWorkflowModal) window.openWorkflowModal()">
<img alt="Cold Email Campaign Workflow Flowchart Preview" className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0054238d-6cd2-4e59-b014-5c3916fb4559_1600w.png"/>
</div>
</div>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-medium flex items-center justify-center gap-3 group bg-blue-700 text-white hover:bg-blue-800 shadow-blue-700/20" href="#book-call">
                Start Getting Qualified Calls
              </a>
</div>
</div>
</div>
</section>


<section className="py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center border-t border-gray-100">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-5xl mb-6 md:mb-8 tracking-tight font-serif font-medium text-gray-900">
            Hi, I'm Idan Bubnovsky
          </h2>
<div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-500 font-light leading-relaxed">
<p className="">
              I founded Handplaced for one reason: businesses should not have to
              pay for leads that never turn into real conversations.
            </p>
<p className="">
              Most lead generation agencies charge upfront, run campaigns, send
              reports, and leave you guessing whether anything meaningful will
              actually happen. I wanted to build something different.
            </p>
<p className="">
              At Handplaced, we handle the full outbound process: finding the
              right prospects, getting your offer in front of them, managing the
              outreach, and helping turn interest into booked sales calls.
            </p>
<p className="">
              Most lead generation agencies charge upfront, run campaigns, send
              reports, and leave you guessing whether anything meaningful will
              actually happen. I wanted to build something different.
            </p>
</div>
<a className="inline-flex justify-center items-center mt-6 md:mt-8 px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium shadow-lg hover:shadow-xl hover:shadow-blue-700/20 bg-blue-700 text-white hover:bg-blue-800" href="#book-call">
            Book a Call
          </a>
</div>
<div className="relative order-1 lg:order-2 h-64 md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-gray-100">
<img alt="Founder" className="hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89961f8d-e9ee-436f-86ac-0a4b28ac39fc_1600w.jpg"/>
</div>
</section>


<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-2 md:px-6">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-serif font-medium text-gray-900">
          FAQs
        </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              How fast can we expect results?
              <svg aria-hidden="true" className="lucide lucide-chevron-down md:w-5 md:h-5 transition-transform group-open:rotate-180 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(156, 163, 175)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              Most campaigns need time for setup, testing, and optimization.
              Once everything is launched, early market feedback can usually
              start coming in within the first few weeks. Sales calls should be
              starting to get booked within the second month.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              Are the leads qualified?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              We focus on prospects that match your target market and fit the
              qualification criteria we agree on before launch. That way, your
              team spends time speaking with people who actually make sense for
              your offer.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              What if people book calls but do not show up?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              We track show-up quality and improve the process where needed.
              That can include stronger confirmations, better reminders,
              improved pre-call messaging, and tighter qualification. You only
              pay for calls that show up.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              How much of my time is required?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              Very little. We need about 1 hour for onboarding. After that, we
              just need you to handle the leads we generate.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              What happens if we need to scale up the campaign?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              Once we find a winning angle and you're ready to handle more
              volume, we can seamlessly increase sending limits and
              infrastructure to match your capacity without rebuilding the
              entire system.
            </div>
</details>
<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
              Is this a good fit for every business?
              <svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
              No. This works best for businesses with a clear offer, a defined
              target market, and the ability to close sales calls. If your offer
              is unclear, your audience is too broad, or you are not ready to
              take calls, we may not be the right fit yet.
            </div>
</details>
</div>
</section>

<section className="mx-auto py-16 md:py-24 px-4 md:px-6 max-w-7xl" id="book-call">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900 mb-6 tracking-tight">
            Book a Call
          </h2>
<p className="text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Book a no-commitment discovery call to discuss how we can help you
            grow.
          </p>
</div>
<div className="w-full bg-white rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden">

<div className="calendly-inline-widget w-full" data-processed="true" data-url="https://calendly.com/idan-handplaced/discovery-call" style={{position: 'relative', minWidth: '320px', height: '700px', width: '100%'}}>
<div className="calendly-spinner">
<div className="calendly-bounce1"></div>
<div className="calendly-bounce2"></div>
<div className="calendly-bounce3"></div>
</div>
<iframe className="" frameborder="0" height="100%" src="https://calendly.com/idan-handplaced/discovery-call?embed_domain=&amp;embed_type=Inline" title="Select a Date &amp; Time - Calendly" width="100%"></iframe>
</div>


</div>
</section>
</main>

<footer className="border-t pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 bg-white border-gray-200">
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-gray-100 text-gray-400">
<p className="">© 2026 Handplaced. All rights reserved.</p>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center" id="workflow-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer transition-opacity opacity-0 duration-300" id="workflow-modal-backdrop" onclick="if(window.closeWorkflowModal) window.closeWorkflowModal()"></div>
<div className="relative w-full h-full md:w-[90vw] md:h-[85vh] bg-white md:rounded-2xl shadow-2xl flex flex-col scale-95 opacity-0 transition-all duration-300" id="workflow-modal-content">
<div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white shrink-0 md:rounded-t-2xl z-10">
<h3 className="font-montserrat font-medium text-gray-900">
            Campaign Workflow System
          </h3>
<button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors" onclick="if(window.closeWorkflowModal) window.closeWorkflowModal()">
<svg className="lucide lucide-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<div className="flex-1 relative overflow-hidden bg-gray-50 flex flex-col group md:rounded-b-2xl">
<div className="absolute bottom-4 right-4 md:bottom-6 md:right-8 flex items-center gap-2 z-50 bg-gray-900 p-1.5 rounded-full shadow-xl border border-gray-700/50">
<button aria-label="Zoom Out" className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-rose-600 transition-colors focus:outline-none" onclick="window.zoomOutWorkflow &amp;&amp; window.zoomOutWorkflow()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<line x1="5" x2="19" y1="12" y2="12"></line>
</svg>
</button>
<button className="px-4 h-10 flex items-center justify-center rounded-full text-sm font-medium text-white hover:bg-rose-600 transition-colors focus:outline-none" onclick="window.resetZoomWorkflow &amp;&amp; window.resetZoomWorkflow()">
              Reset
            </button>
<button aria-label="Zoom In" className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-rose-600 transition-colors focus:outline-none" onclick="window.zoomInWorkflow &amp;&amp; window.zoomInWorkflow()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<line x1="12" x2="12" y1="5" y2="19"></line>
<line x1="5" x2="19" y1="12" y2="12"></line>
</svg>
</button>
</div>
<div className="w-full h-full overflow-auto flex items-center justify-center cursor-default bg-gray-50" id="workflow-scroll-container" style={{touchAction: 'pan-x pan-y'}}>
<div className="flex items-center justify-center transition-all duration-300 origin-center" id="workflow-zoom-wrapper" style={{width: '100%', height: '100%'}}>
<img alt="Cold Email Campaign Workflow Flowchart Full" className="object-contain pointer-events-none" id="workflow-zoom-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0054238d-6cd2-4e59-b014-5c3916fb4559_1600w.png" style={{width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%'}}/>
</div>
</div>

</div>
</div>
</div>


    </>
  );
}

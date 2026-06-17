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



      (function () {
        function initUnicorn() {
          if (window.UnicornStudio && window.UnicornStudio.init) {
            if (!window.UnicornStudio.isInitialized) {
              window.UnicornStudio.init();
              window.UnicornStudio.isInitialized = true;
            }
          }
        }
        if (window.UnicornStudio && window.UnicornStudio.init) {
          initUnicorn();
          return;
        }
        if (!window.UnicornStudio) {
          window.UnicornStudio = { isInitialized:false };
        }
        if (!document.querySelector("script[data-unicorn-loader]")) {
          var s = document.createElement("script");
          s.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
          s.setAttribute("data-unicorn-loader","true");
          s.onload = function () {
            initUnicorn();
          };
          (document.head || document.body).appendChild(s);
        }
      })();
    
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
      
<div className="unicorn-bg fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
<div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen">
<div className="absolute inset-0 w-full h-full" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="WdVna2EGJHojbGLRHA52"></div>
</div>
</div>

<header className="w-full flex justify-center px-6 py-6 md:py-8">
<div className="w-full max-w-[1200px] flex justify-between items-center">
<div className="font-heading font-bold text-xl md:text-2xl tracking-tighter text-[#121212] uppercase">
          Verve
        </div>
<nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#121212]">
<a className="hover:text-blue-500 transition-colors" href="#">
            How it works
          </a>
<a className="hover:text-blue-500 transition-colors" href="#">Services</a>
<a className="hover:text-blue-500 transition-colors" href="#">Pricing</a>
<a className="hover:text-blue-500 transition-colors" href="#">FAQs</a>
</nav>
<button className="bg-blue-500 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-[100px] text-xs md:text-sm font-semibold hover:bg-blue-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Get Started
        </button>
</div>
</header>

<main className="w-full flex-grow flex flex-col items-center pt-12 md:pt-20 px-6">
<div className="w-full max-w-[1200px] flex flex-col items-center">

<div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10 md:mb-12 text-sm md:text-base text-[#121212] font-semibold">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500 text-xl" icon="ph:check-circle-fill"></iconify-icon>
<span>Infinite revisions</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500 text-xl" icon="ph:check-circle-fill"></iconify-icon>
<span>Stop or resume whenever</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500 text-xl" icon="ph:check-circle-fill"></iconify-icon>
<span>Delivery in 24-48 hours</span>
</div>
</div>
<div className="flex items-center justify-center gap-4 mb-16 md:mb-24">
<button className="bg-blue-500 text-white px-8 py-3.5 md:px-10 md:py-4 rounded-[100px] text-sm font-semibold hover:bg-blue-600 transition-all shadow-sm">
            View Plans
          </button>
<button className="bg-white border border-[#E8E8E8] text-[#121212] px-8 py-3.5 md:px-10 md:py-4 rounded-[100px] text-sm font-semibold hover:bg-[#FAFAFA] transition-all shadow-sm">
            Book a Call
          </button>
</div>
<h1 className="flex flex-col items-center text-center mb-10 md:mb-12">
<span className="font-heading font-semibold text-[56px] md:text-[80px] lg:text-[104px] tracking-tighter text-[#121212] leading-[0.95]">
            Endless Creatives
          </span>
<span className="font-heading font-semibold text-[56px] md:text-[80px] lg:text-[104px] tracking-tighter text-[#121212] leading-[0.95] mt-1 md:mt-2">
            for
            <span className="font-serif italic font-normal tracking-normal text-[64px] md:text-[88px] lg:text-[112px] align-baseline">
              Scaling
            </span>
            Startups.
          </span>
</h1>

<div className="flex items-center justify-center gap-4 mb-10 md:mb-12">
<button className="bg-blue-500 text-[#FFFFFF] px-7 py-3 md:px-8 md:py-3.5 rounded-[100px] text-xs md:text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Get Started
          </button>
<button className="bg-transparent border border-blue-500 text-blue-500 px-7 py-3 md:px-8 md:py-3.5 rounded-[100px] text-xs md:text-sm font-medium hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            View Plans
          </button>
</div>


<p className="text-xs md:text-sm text-[#989897] text-center leading-relaxed">
<span className="font-serif italic text-base md:text-lg text-[#616161] font-normal align-middle pr-0.5">
            Top-tier creatives
          </span>
          , delivered blazingly fast.
        </p>
</div>


<div className="w-full max-w-[1016px] h-[240px] md:h-[360px] rounded-[32px] bg-[#FAFAFA] border border-[#E8E8E8] relative overflow-hidden shadow-[0px_5px_10px_2px_rgba(0,0,0,0.05)] mb-[120px]">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #cecece 1.5px, transparent 1.5px)', backgroundSize: '32px 32px', backgroundPosition: '-16px -16px', opacity: '0.5'}}></div>
</div>
<div className="w-full max-w-[1200px] mb-24 md:mb-[120px]">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<div className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-[32px] p-6 flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="relative z-10">
<div className="mb-6">
<div className="flex text-blue-500 text-sm mb-4">
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
</div>
<p className="text-sm text-[#121212] font-semibold leading-relaxed">
                  "Verve changed our entire workflow. Outstanding visuals in
                  record time."
                </p>
</div>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex flex-col">
<span className="text-sm font-bold text-[#121212]">
                    Jessica Wong
                  </span>
<span className="text-xs text-[#616161] font-medium">
                    Founder at NextGen
                  </span>
</div>
</div>
</div>
</div>
<div className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-[32px] p-6 flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="relative z-10">
<div className="mb-6">
<div className="flex text-blue-500 text-sm mb-4">
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
</div>
<p className="text-sm text-[#121212] font-semibold leading-relaxed">
                  "This model is brilliant. We receive top-tier designs without
                  the cost of an agency."
                </p>
</div>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex flex-col">
<span className="text-sm font-bold text-[#121212]">
                    David Lee
                  </span>
<span className="text-xs text-[#616161] font-medium">
                    VP of Marketing at Apex
                  </span>
</div>
</div>
</div>
</div>
<div className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-[32px] p-6 flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="relative z-10">
<div className="mb-6">
<div className="flex text-blue-500 text-sm mb-4">
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
</div>
<p className="text-sm text-[#121212] font-semibold leading-relaxed">
                  "Fantastic eye for detail. Each piece is flawless and matches
                  our brand perfectly."
                </p>
</div>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex flex-col">
<span className="text-sm font-bold text-[#121212]">
                    Amanda Clarke
                  </span>
<span className="text-xs text-[#616161] font-medium">
                    Director at Nova
                  </span>
</div>
</div>
</div>
</div>
<div className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-[32px] p-6 flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="relative z-10">
<div className="mb-6">
<div className="flex text-blue-500 text-sm mb-4">
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
<iconify-icon icon="ph:star-fill"></iconify-icon>
</div>
<p className="text-sm text-[#121212] font-semibold leading-relaxed">
                  "Quick, dependable, and highly creative. They feel like part
                  of our own team."
                </p>
</div>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex flex-col">
<span className="text-sm font-bold text-[#121212]">
                    Marcus Johnson
                  </span>
<span className="text-xs text-[#616161] font-medium">
                    Head of Design
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full max-w-[1200px] mb-24 md:mb-[120px] flex flex-col items-center">
<h2 className="font-heading font-semibold text-[48px] md:text-[72px] tracking-tighter text-[#121212] mb-12 text-center leading-[0.95]">
          Tools that
          <span className="font-serif italic font-normal text-[56px] md:text-[80px] text-[#616161] align-baseline">
            inspire
          </span>
          .
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
<div className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-[32px] p-8 flex flex-col items-start relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<iconify-icon className="text-blue-500 text-4xl mb-6 relative z-10" icon="ph:lightning-fill"></iconify-icon>
<h3 className="text-xl font-bold text-[#121212] mb-3 relative z-10">
              Lightning speed
            </h3>
<p className="text-sm text-[#616161] leading-relaxed relative z-10 font-medium">
              Get your creatives in 24-48 hours. We revise until perfect.
            </p>
</div>
<div className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-[32px] p-8 flex flex-col items-start relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<iconify-icon className="text-blue-500 text-4xl mb-6 relative z-10" icon="ph:infinity"></iconify-icon>
<h3 className="text-xl font-bold text-[#121212] mb-3 relative z-10">
              Infinite backlog
            </h3>
<p className="text-sm text-[#616161] leading-relaxed relative z-10 font-medium">
              Queue up as many tasks as you need. We tackle them one by one.
            </p>
</div>
<div className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-[32px] p-8 flex flex-col items-start relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<iconify-icon className="text-blue-500 text-4xl mb-6 relative z-10" icon="ph:pause-circle-fill"></iconify-icon>
<h3 className="text-xl font-bold text-[#121212] mb-3 relative z-10">
              Adaptable pricing
            </h3>
<p className="text-sm text-[#616161] leading-relaxed relative z-10 font-medium">
              Slow month? Pause your plan and restart whenever you're ready.
            </p>
</div>
</div>
</div>
<div className="w-full max-w-[1200px] mb-24 md:mb-[120px] flex flex-col items-center">
<h2 className="font-heading font-semibold text-[48px] md:text-[72px] tracking-tighter text-[#121212] mb-4 text-center leading-[0.95]">
          Clear
          <span className="font-serif italic font-normal text-[56px] md:text-[80px] text-[#616161] align-baseline">
            pricing
          </span>
          .
        </h2>
<p className="text-sm md:text-base text-[#616161] mb-12 text-center max-w-md font-medium leading-relaxed">
          A single flat rate. No hidden costs. Cancel whenever.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px]">
<div className="bg-white border border-[#E8E8E8] rounded-[32px] p-8 md:p-10 flex flex-col relative overflow-hidden shadow-[0px_5px_15px_rgba(0,0,0,0.03)]">
<h3 className="text-xl md:text-2xl font-bold text-[#121212] mb-2">
              Starter
            </h3>
<p className="text-sm text-[#616161] mb-8 font-medium">
              Ideal for new businesses.
            </p>
<div className="mb-10">
<span className="text-5xl md:text-6xl font-heading font-bold text-[#121212] tracking-tighter">
                $2,995
              </span>
<span className="text-sm text-[#616161] font-bold">/mo</span>
</div>
<ul className="flex flex-col gap-4 mb-10 text-sm font-semibold text-[#121212]">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500 text-xl" icon="ph:check-circle-fill"></iconify-icon>
                One request at a time
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500 text-xl" icon="ph:check-circle-fill"></iconify-icon>
                1-2 days average delivery
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500 text-xl" icon="ph:check-circle-fill"></iconify-icon>
                Unlimited brands
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500 text-xl" icon="ph:check-circle-fill"></iconify-icon>
                Pause or cancel anytime
              </li>
</ul>
<button className="w-full bg-[#121212] text-white py-4 rounded-[100px] text-sm font-semibold hover:bg-black transition-all mt-auto shadow-sm">
              Get Started
            </button>
</div>
<div className="bg-[#121212] border border-[#121212] rounded-[32px] p-8 md:p-10 flex flex-col relative overflow-hidden shadow-[0px_5px_15px_rgba(0,0,0,0.1)]">
<div className="absolute top-8 right-8 bg-blue-500 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full">
              Popular
            </div>
<h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Growth
            </h3>
<p className="text-sm text-[#989897] mb-8 font-medium">
              For expanding teams with higher demands.
            </p>
<div className="mb-10">
<span className="text-5xl md:text-6xl font-heading font-bold text-white tracking-tighter">
                $4,995
              </span>
<span className="text-sm text-[#989897] font-bold">/mo</span>
</div>
<ul className="flex flex-col gap-4 mb-10 text-sm font-semibold text-white">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500 text-xl" icon="ph:check-circle-fill"></iconify-icon>
                Two requests at a time
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500 text-xl" icon="ph:check-circle-fill"></iconify-icon>
                1-2 days average delivery
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500 text-xl" icon="ph:check-circle-fill"></iconify-icon>
                Unlimited brands
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500 text-xl" icon="ph:check-circle-fill"></iconify-icon>
                Priority support
              </li>
</ul>
<button className="w-full bg-blue-500 text-white py-4 rounded-[100px] text-sm font-semibold hover:bg-blue-600 transition-all mt-auto shadow-sm">
              Get Started
            </button>
</div>
</div>
</div>
<div className="w-full max-w-[1200px] mb-16 md:mb-24 flex flex-col items-center bg-blue-500 rounded-[32px] p-12 md:p-24 text-center relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.1]" style={{backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px', backgroundPosition: '-16px -16px'}}></div>
<h2 className="relative z-10 font-heading font-semibold text-[48px] md:text-[80px] tracking-tighter text-white mb-6 leading-[0.95]">
          Ready to
          <span className="font-serif italic font-normal text-[56px] md:text-[88px] align-baseline">
            grow?
          </span>
</h2>
<p className="relative z-10 text-white/90 text-sm md:text-base max-w-md mx-auto mb-10 font-medium leading-relaxed">
          Join innovative companies that revolutionized their design process
          with Verve.
        </p>
<div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center w-full">
<button className="bg-white text-blue-500 px-8 py-4 rounded-[100px] text-sm font-bold hover:bg-[#FAFAFA] transition-all shadow-sm">
            Get Started
          </button>
<button className="bg-transparent border border-white text-white px-8 py-4 rounded-[100px] text-sm font-bold hover:bg-white/10 transition-all">
            Book a Call
          </button>
</div>
</div>
</main>
<footer className="w-full border-t border-[#E8E8E8] py-8 px-6 mt-auto bg-white z-10 relative">
<div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-heading font-bold text-xl md:text-2xl tracking-tighter text-[#121212] uppercase">
          Verve
        </div>
<div className="flex items-center gap-6 text-sm text-[#121212] font-semibold">
<a className="hover:text-blue-500 transition-colors" href="#">Twitter</a>
<a className="hover:text-blue-500 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-blue-500 transition-colors" href="#">Dribbble</a>
</div>
<div className="text-xs text-[#989897] font-medium">
          © 2024 Verve Design. All rights reserved.
        </div>
</div>
</footer>


    </>
  );
}

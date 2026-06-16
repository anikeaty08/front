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



{
"@context": "https://schema.org",
"@type": "WebSite",
"name": "Promax AI",
"url": "https://promaxaiagency.com/"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          


                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
              


      function showPage(pageId) {
        const pages = ['home-content', 'terms-content', 'privacy-content', 'booking-content'];

        pages.forEach(id => {
          const el = document.getElementById(id);
          if (el) {
            if (id === pageId + '-content' || (pageId === 'home' && id === 'home-content')) {
              el.classList.remove('hidden');
              window.scrollTo(0, 0);
            } else {
              el.classList.add('hidden');
            }
          }
        });

        const bookCallEl = document.getElementById('book-call');
        if (bookCallEl) {
          if (pageId === 'home') {
            bookCallEl.classList.remove('hidden');
          } else {
            bookCallEl.classList.add('hidden');
          }
        }

        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        if (pageId === 'booking') {
          if (header) header.classList.add('hidden');
          if (footer) footer.classList.add('hidden');
        } else {
          if (header) header.classList.remove('hidden');
          if (footer) footer.classList.remove('hidden');
        }
      }

      function submitAuditForm(e) {
        e.preventDefault();
        const email = document.getElementById('audit-email').value;
        if(email) {
          localStorage.setItem('audit_email', email);
          showPage('booking');
          window.location.hash = 'booking';
        }
      }

      function handleRoute() {
        const hash = window.location.hash.replace('#', '');
        if (hash === 'booking') {
          showPage('booking');
        } else if (hash === 'terms') {
          showPage('terms');
        } else if (hash === 'privacy') {
          showPage('privacy');
        } else {
          showPage('home');
        }
      }

      window.addEventListener('DOMContentLoaded', handleRoute);
      window.addEventListener('hashchange', handleRoute);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex flex-col min-h-screen overflow-x-hidden w-full relative">

<div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4gq2Yrv2p0bIa0hdLPQx"></div>

</div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none w-full">
<nav className="pointer-events-auto glass flex gap-4 md:gap-10 shadow-black/50 transition-all duration-300 w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-5 shadow-2xl gap-x-4 gap-y-4 items-center justify-between">

<a className="group flex items-center gap-2 shrink-0" href="#" onclick="window.location.reload(); return false;">
<span className="md:text-2xl group-hover:text-rose-500 transition-colors text-xl font-medium italic text-white tracking-tight font-serif">
<img alt="Agency Logo" className="w-auto h-12 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/530760a9-a47c-4370-8237-128b33cda379_800w.png"/>
</span>
</a>

<a className="md:px-5 md:py-2.5 transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-rose-500/20 hover:bg-rose-600 hover:text-white shrink-0 text-xs font-medium text-black font-montserrat bg-white rounded-full pt-2 pr-4 pb-2 pl-4 shadow-md" href="/#book-call" onclick="showPage('home'); document.getElementById('book-call').scrollIntoView();">
            Get Started
            <iconify-icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 hidden sm:block" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 flex-grow w-full max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative">

<div className="w-full" id="home-content">

<section className="overflow-hidden md:rounded-[2.5rem] shadow-black/20 md:mb-16 md:p-12 lg:p-20 text-center bg-black w-full border-white/5 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-2xl">

<div className="aura-background-component top-0 w-full -z-10 absolute h-full left-0">
<div data-us-project="inzENTvhzS9plyop7Z6g" style={{width: '100%', height: '100%'}}></div>

</div>
<div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">

<div className="animate-fade-up text-[10px] uppercase mb-6 md:mb-8 font-semibold text-rose-400 tracking-widest font-montserrat bg-rose-950/30 w-fit border-rose-900/50 border rounded-full pt-1 pr-3 pb-1 pl-3">
                Attention Business Owners
              </div>

<h1 className="animate-fade-up delay-100 sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.1] md:leading-[0.95] md:mb-8 break-words text-3xl font-medium text-white tracking-tighter font-serif w-full max-w-full mb-6">
                We'll
                <span className="bg-clip-text sm:pr-2 whitespace-normal inline-block italic text-transparent bg-gradient-to-r from-rose-500 to-orange-400 pr-1">
                  Book 10+ Qualified Appointments
                </span>
                within 60 Days or
                <span className="md:border-b-4 inline-block border-rose-500/30 border-b-2">
                  You Don't Pay.
                </span>
</h1>

<p className="animate-fade-up delay-200 text-base md:text-xl leading-relaxed mb-8 md:mb-12 font-light text-gray-400 max-w-2xl px-2">
                Our proprietary CallFlow™ System adds predictable, qualified
                appointments to your business without you lifting a finger.
              </p>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-white text-black hover:bg-rose-600 hover:text-white" href="#book-call">
                  Get Started
                  <iconify-icon className="w-4 h-4 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center justify-center gap-2 bg-transparent border-white/10 text-white hover:border-white/30 hover:bg-white/5" href="#process">
                  Learn More
                </a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs text-gray-500 font-montserrat">
                Book a Free Strategy Session. No credit card required.
              </p>
</div>
</section>

<div className="md:mb-20 md:pt-2 overflow-hidden text-center w-full border-white/5 border-b mb-16 pt-2 pr-4 pb-2 pl-4">
<h3 className="md:text-2xl text-xl text-white font-serif mb-2">
              Supporting Growth Across Multiple Industries
            </h3>
<p className="text-[10px] md:text-xs uppercase md:mb-10 text-gray-500 tracking-widest font-montserrat mb-8">
              From local operators to online service brands, our systems are
              built to perform.
            </p>
</div>

<section className="md:py-20 max-w-6xl mr-auto ml-auto pt-12 pb-12 px-2 md:px-4">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white px-4">
              Are You Currently Struggling With...
            </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.3), rgba(244, 63, 94, 0.05))', -BorderRadiusBefore: '1.5rem'}}>
<div className="md:w-12 md:h-12 flex md:mb-6 text-rose-400 bg-rose-900/20 w-10 h-10 border-rose-500/10 border rounded-xl mb-5 items-center justify-center">
<iconify-icon className="md:w-6 md:h-6 w-5 h-5" height="24" icon="solar:hand-money-outline" style={{color: 'rgb(251, 113, 133)'}} width="24"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">
                  Wasted Ad Spend
                </h3>
<p className="leading-relaxed text-sm font-light text-gray-400">
                  You're spending thousands on ads that bring in unqualified
                  leads, people who can't afford you, aren't serious, or never
                  convert.
                </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', -BorderRadiusBefore: '1.5rem'}}>
<div className="md:w-12 md:h-12 flex md:mb-6 text-rose-400 bg-rose-900/20 w-10 h-10 border-rose-500/10 border rounded-xl mb-5 items-center justify-center">
<iconify-icon className="md:w-6 md:h-6 w-5 h-5" height="24" icon="solar:diagram-down-outline" style={{color: 'rgb(251, 113, 133)'}} width="24"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">
                  Appointment Drop-Offs
                </h3>
<p className="leading-relaxed text-sm font-light text-gray-400">
                  Booked calls don’t show up, and inconsistent follow-up causes
                  qualified prospects to slip through the cracks, costing you
                  deals you already paid for.
                </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.3), rgba(244, 63, 94, 0.05))', -BorderRadiusBefore: '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="md:w-6 md:h-6 w-5 h-5" height="20" icon="solar:dislike-outline" style={{color: 'rgb(251, 113, 133)'}} width="20"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">
                  Control Pain
                </h3>
<p className="leading-relaxed text-sm font-light text-gray-400">
                  Some months you’re overloaded, other months are slow making it
                  impossible to plan, scale, or hire with confidence.
                </p>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-2 md:px-4">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-serif mb-4">
                Why Choose Promax AI
              </h2>
<p className="md:text-base text-sm font-light text-gray-400 max-w-2xl mr-auto ml-auto">
                We use a unique proprietary acquisition system that others
                simply can't replicate
              </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border-white/5 border rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-xl text-xl font-semibold text-white font-montserrat mb-3">
                  Predictable Targeting
                </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
                  We don't guess. We use proprietary algorithms to identify your
                  exact ICP and target them with surgical precision.
                </p>
<div className="flex-1 w-full flex items-center justify-center group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="md:w-24 md:h-24 w-16 h-16" height="96" icon="solar:chat-round-money-outline" style={{color: 'rgb(244, 63, 94)'}} width="96"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-xl text-xl font-semibold text-white font-montserrat mb-3">
                  Live Visibility
                </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
                  Live dashboards. 24/7 access. You see every dollar spent and
                  every lead generated in real-time.
                </p>
<div className="flex-1 w-full flex items-center justify-center group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="md:w-24 md:h-24 w-16 h-16" height="96" icon="solar:diagram-up-outline" style={{color: 'rgb(244, 63, 94)'}} width="96"></iconify-icon>
</div>
</div>

<div className="group overflow-hidden flex flex-col transition-all hover:border-rose-500/30 md:rounded-3xl md:h-80 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border-white/5 border rounded-[1.5rem] pt-6 pr-6 pb-6 pl-8 relative">
<h3 className="md:text-xl text-xl font-semibold text-white font-montserrat mb-3">
                  Results-Guarantee
                </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
                  We put our own money on the line. If we don’t deliver
                  predictable appointment flow within the agreed timeframe, you
                  don’t pay.
                </p>
<div className="flex-1 w-full flex items-center justify-center group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="md:w-24 md:h-24 w-16 h-16" height="96" icon="solar:like-outline" style={{color: 'rgb(244, 63, 94)'}} width="96"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 bg-white text-black hover:bg-rose-600 hover:text-white" href="#book-call">
                Book a Call
                <iconify-icon className="w-4 h-4" icon="solar:phone-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 rounded-[2rem] md:rounded-[2.5rem] border shadow-2xl shadow-black/40 text-center bg-[#0a0a0a] border-white/5">
<div className="max-w-3xl mx-auto">
<div className="inline-flex justify-center mb-6 md:mb-8 text-rose-500">
<iconify-icon className="w-8 h-8 md:w-12 md:h-12 opacity-20" icon="solar:quote-up-linear"></iconify-icon>
</div>
<h3 className="md:text-4xl lg:text-5xl leading-tight md:mb-10 text-2xl italic text-white font-serif mb-8 pr-2 pl-2">
                "Within 45 days of working with Promax AI, we built a consistent
                flow of qualified leads. Their system and follow-up
                implementation set a new standard for our business."
              </h3>
<div className="flex flex-col items-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 overflow-hidden border-2 shadow-md bg-neutral-800 border-white/10">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b35d37f1-c625-407f-8d51-a1b8d65a02e7_3840w.png"/>
</div>
<div className="font-semibold text-white font-montserrat">
                  Manuel Trinidad
                </div>
<div className="md:text-sm text-xs font-light text-gray-500">
                  CEO &amp; Founder, Dabertri Sign Service Inc.
                </div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-2 md:px-0" id="process">
<div className="text-center mb-12 md:mb-16">
<span className="text-[10px] md:text-xs font-montserrat font-bold tracking-widest uppercase mb-3 block text-rose-500">
                Transformation
              </span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white">
                Get Consistent Results
              </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-white/10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
                  1
                </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
                  Book a Call
                </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
                  We analyze your current situation and determine if our system
                  is a fit for your growth goals.
                </p>
</div>

<div className="flex flex-col group text-center items-center">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
                  2
                </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
                  We Build The Engine
                </h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-400 max-w-xs pr-4 pl-4">
                  Our team deploys the custom infrastructure, creative assets,
                  and tracking systems within 72 hours of receiving the required
                  sales assets.
                </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
                  3
                </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
                  You Get Scale
                </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
                  Leads start flowing automatically. You focus on closing deals
                  and servicing clients while we handle growth.
                </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white" href="#book-call">
                Book Your Transformation
                <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="mb-16 md:mb-24 px-0 md:px-6">
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 py-10 md:p-20 border shadow-2xl shadow-black/20 text-center relative overflow-hidden bg-[#0a0a0a] border-white/5">
<div className="z-10 relative">
<h2 className="md:text-5xl md:mb-6 text-2xl font-medium text-white tracking-tight font-serif mb-4">
                  Exactly How We Scale Predictable Appointment Flow
                </h2>
<p className="text-sm md:text-lg text-gray-400 font-light mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                  Watch the video below to learn the exact process we follow to
                  scale revenue.
                </p>
<div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 ring-1 border-white/10 ring-white/5">

<div className="absolute inset-0 w-full h-full -z-10">
<div data-us-project="inzENTvhzS9plyop7Z6g" style={{width: '100%', height: '100%'}}></div>
</div>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full relative z-10" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/_8zr_7tW-vM?rel=0" title="YouTube video player"></iframe>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white" href="#book-call">
                    Apply Now
                    <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-[#0a0a0a] border-y border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white">
                What's Included
              </h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-2xl shadow-black relative overflow-hidden bg-[#111] border-white/5">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-rose-900/10"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<span className="font-bold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-4 block text-rose-500">
                      The Ecosystem
                    </span>
<h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-white">
                      All-In-One Growth Infrastructure
                    </h3>
<p className="text-gray-400 font-light text-base md:text-lg">
                      We've consolidated our entire suite of growth tools into
                      one powerful partnership designed for maximum impact.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                          Paid Traffic Management
                        </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                          Conversion-Optimized Funnels
                        </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                          Lead Qualification &amp; Routing
                        </span>
</li>
<li className="flex gap-3 md:gap-4 gap-x-3 gap-y-3 items-center">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                          Calendar &amp; Booking Automation
                        </span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                          Automated Follow-Up System
                        </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">
                          CRM &amp; Pipeline Tracking
                        </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                          24/7 Live Reporting
                        </span>
</li>
<li className="flex gap-3 md:gap-4 gap-x-3 gap-y-3 items-center">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="w-3.5 h-3.5 md:w-5 md:h-5" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-bold text-white font-montserrat border-rose-500/40 border-b-2">
                          Results-Backed Guarantee
                        </span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-medium flex items-center justify-center gap-3 group bg-white text-black hover:bg-rose-600 hover:text-white shadow-black/50" href="#book-call">
                      Secure Your Growth Partner
                      <iconify-icon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="mt-4 md:mt-6 text-xs md:text-sm font-montserrat text-gray-500">
                      No long-term contracts. Cancel anytime.
                    </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 pt-16 pb-16 px-2 md:px-0">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white">
              What People Are Saying
            </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#0a0a0a] border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<p className="leading-relaxed text-sm italic text-gray-400 mb-6">
                  "Promax AI transformed our client acquisition process. We went
                  from struggling to find leads to an influx of legitimate
                  consultations."
                </p>
<div className="flex flex-col items-center text-center gap-1">
<div className="">
<div className="text-sm font-bold text-white">
                      Sarah Martinez
                    </div>
<div className="text-xs text-gray-500">
                      Martinez Immigration Law
                    </div>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<p className="leading-relaxed text-sm italic text-gray-400 mb-6">
                  "The tailored strategies from Promax AI gave us the
                  competitive edge we needed. Our consultation bookings have
                  increased by 200% in just three months."
                </p>
<div className="flex flex-col items-center text-center gap-1">
<div className="">
<div className="text-sm font-bold text-white">David Chen</div>
<div className="text-xs text-gray-500">
                      Chen &amp; Associates
                    </div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm bg-[#0a0a0a] border-white/5">
<p className="leading-relaxed text-sm italic text-gray-400 mb-6">
                  "Working with Promax AI has been a game-changer. Their
                  understanding of immigration law marketing is unmatched, and
                  the results speak for themselves.."
                </p>
<div className="flex flex-col items-center text-center gap-1">
<div className="">
<div className="text-sm font-bold text-white">
                      Maria Rodriguez
                    </div>
<div className="text-xs text-gray-500">
                      Rodriguez Legal Group
                    </div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 md:px-0 border-white/5 border-t pt-16 pr-2 pb-16 pl-2 gap-x-10 gap-y-10 items-center">
<div className="order-2 lg:order-1 flex flex-col items-center text-center md:items-start md:text-left">
<h2 className="md:text-5xl md:mb-8 text-3xl font-medium text-white tracking-tight font-serif mb-6">
                Hi, I'm Ceasar Escobar.
              </h2>
<div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-400 font-light leading-relaxed">
<p className="">
                  I founded
                  <span className="font-medium text-white">Promax AI</span>
                  with one mission: to eliminate the guesswork in digital
                  growth.
                </p>
<p className="">
                  After managing over $500,000 in ad spend across four years, I
                  realized most agencies optimize for the wrong outcomes. They
                  focus on vanity metrics like clicks and impressions instead of
                  what actually drives growth. Promax AI was built to change
                  that, focusing on booked consultations, high-intent prospects,
                  and predictable client acquisition so business owners can
                  focus on what matters most: running their business.
                </p>
</div>
<button className="md:mt-8 transition-all hover:border-rose-400 font-semibold text-rose-400 border-rose-900 border-b mt-6 pb-0.5" onclick="document.getElementById('book-call').scrollIntoView({behavior: 'smooth'})">
                Let's Talk!
              </button>
</div>
<div className="relative order-1 lg:order-2 h-64 md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-neutral-900">
<img alt="Ceasar Escobar" className="object-center contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700 cursor-pointer w-full h-full object-cover grayscale brightness-110" onclick="window.location.href='/home'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c09e0d2d-f7bd-42bb-b71f-57888e98a12b_3840w.png"/>
</div>
</section>

<section className="py-16 md:py-20 mb-16 md:mb-20 rounded-[2rem] md:rounded-[2.5rem] text-center px-4 md:px-6 relative overflow-hidden bg-[#0a0a0a] border border-white/5" id="contact">
<div className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-950/40 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight font-serif font-medium text-white">
                Get Your Free Audit
              </h2>
<p className="md:text-lg md:mb-10 text-base font-light text-gray-400 mb-8">
                We'll analyze your current funnel and show you exactly where
                you're leaving money on the table. No obligation.
              </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" id="audit-form" onsubmit="submitAuditForm(event)">
<input className="flex-1 border rounded-full px-6 py-3.5 md:py-4 placeholder-gray-600 focus:outline-none focus:border-rose-500 transition-colors backdrop-blur-sm bg-white/5 border-white/10 text-white" id="audit-email" name="email" placeholder="Enter your email" required="" type="email"/>
<button className="md:py-4 hover:bg-rose-500 transition-colors shadow-lg shadow-black/30 font-bold text-black hover:text-white bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8" type="submit">
                  Get Audit
                </button>
</form>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-2 md:px-6">
<h2 className="md:text-3xl md:mb-12 text-2xl font-medium text-white tracking-tight font-serif text-center mb-10">
              FAQs — Everything you need to know.
            </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-white font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
                  How fast can we expect results?
                  <iconify-icon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
                  Most clients see initial lead activity within 14–21 days of
                  launch. Optimization takes place throughout month one,
                  performance stabilizes in month two, and predictable
                  appointment flow is established by month three as campaigns
                  are refined and scaled.
                </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-white font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
                  Do you work with any industry?
                  <svg className="md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500 w-4 h-4" data-icon-set="solar" data-solar="alt-arrow-down-linear" height="16" style={{color: 'rgb(107, 114, 128)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m19 9l-7 6l-7-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
                  We work with service-based businesses that rely on booked
                  consultations to grow. While our system is adaptable across
                  industries, we only take on clients where we’re confident we
                  can deliver predictable appointment flow and uphold our
                  guarantee.
                </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
                  What is the guarantee exactly?
                  <iconify-icon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
                  We put our own money on the line. If we do not deliver
                  predictable appointment flow within the agreed timeframe, we
                  continue working at no additional cost until we do.
                </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
                  How much of my time is required?
                  <iconify-icon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
                  Very little. Onboarding typically requires 60–90 minutes to
                  provide sales assets, access, and approvals. Once live, your
                  role is simply to handle the booked consultations we generate.
                  We manage ads, funnels, tracking, and follow-up end-to-end.
                </div>
</details>
</div>
<p className="text-center text-sm mt-8 text-gray-500">
              Don't see what you're looking for?
              <a className="underline transition-all decoration-rose-900 hover:decoration-rose-400 text-rose-400" href="#footer" onclick="document.getElementById('footer').scrollIntoView({ behavior: 'smooth' }); return false;">
                Get in touch
              </a>
              .
            </p>
</section>
</div>

<section className="md:px-6 flex flex-col bg-black w-full border-white/5 border-t pt-16 pr-4 pb-20 pl-4 items-center" id="book-call" style={{backgroundColor: '#000000 !important'}}>
<div className="w-full max-w-[1000px] flex flex-col items-center" style={{backgroundColor: '#000000 !important'}}>

<div className="w-full text-center max-w-3xl mx-auto">
<h2 className="md:text-5xl leading-tight text-3xl font-medium text-white tracking-tight font-serif mb-4">
                Book a Call
              </h2>
<p className="md:text-lg text-base font-light text-gray-400 max-w-2xl mr-auto ml-auto">
                Book a no-commitment discovery call to discuss how we can help
                you grow and get your free audit.
              </p>
</div>
<iframe id="Bkd9hTz7I6EJjqfT165h_1780893549803" scrolling="no" src="https://api.leadconnectorhq.com/widget/booking/Bkd9hTz7I6EJjqfT165h" style={{width: '100%', border: 'none', overflow: 'hidden'}}></iframe>


</div>
</section>

<div className="hidden animate-fade-up min-h-screen flex flex-col items-center justify-center py-12 px-4 w-full" id="booking-content">
<div className="w-full max-w-4xl bg-black border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden flex flex-col items-center">
<div className="w-full text-center max-w-2xl mx-auto mb-8">
<span className="text-[10px] md:text-xs font-semibold text-rose-400 uppercase tracking-widest font-montserrat bg-rose-950/30 w-fit border border-rose-900/50 rounded-full px-3 py-1 mb-4 inline-block">
                Step 2 of 2: Schedule Your Experience
              </span>
<h1 className="text-2xl md:text-4xl font-medium font-serif text-white mb-3 tracking-tight">
                Schedule Your Free Audit
              </h1>
<p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
                Select a convenient time slot below to receive your tailored
                growth system audit.
              </p>
</div>
<iframe id="Bkd9hTz7I6EJjqfT165h_booking_page" scrolling="no" src="https://api.leadconnectorhq.com/widget/booking/Bkd9hTz7I6EJjqfT165h" style={{width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px'}}></iframe>
</div>
</div>
<div className="hidden animate-fade-up" id="terms-content">
<div className="max-w-4xl mx-auto py-12 px-2 md:px-0">
<h1 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">
              Promax AI Terms &amp; Conditions
            </h1>
<p className="text-sm text-gray-500 mb-8 italic">
              Last updated: January 1, 2026
            </p>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              Please read these Terms and Conditions carefully before using our
              Service.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Interpretation and Definitions
            </h2>
<h3 className="text-xl font-medium text-white mt-6 mb-3">
              Interpretation
            </h3>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or plural.
            </p>
<h3 className="text-xl font-medium text-white mt-6 mb-3">
              Definitions
            </h3>
<p className="text-gray-400 font-light leading-relaxed mb-4">
              For the purposes of these Terms and Conditions:
            </p>
<ul className="space-y-4 text-gray-400 font-light leading-relaxed mb-6">
<li>
<strong className="font-semibold text-gray-200">Affiliate</strong>
                means an entity that controls, is controlled by, or is under
                common control with a party, where “control” means ownership of
                50% or more of the shares, equity interest, or other securities
                entitled to vote for election of directors or other managing
                authority.
              </li>
<li>
<strong className="font-semibold text-gray-200">Country</strong>
                refers to: California, United States.
              </li>
<li>
<strong className="font-semibold text-gray-200">Company</strong>
                (referred to as “the Company”, “We”, “Us”, or “Our” in this
                Agreement) refers to Promax AI.
              </li>
<li>
<strong className="font-semibold text-gray-200">Device</strong>
                means any device that can access the Service such as a computer,
                cellphone, or digital tablet.
              </li>
</ul>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Acknowledgment
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              These Terms and Conditions govern the use of this Service and
              constitute the agreement between You and the Company. These Terms
              set out the rights and obligations of all users regarding use of
              the Service. Your access to and use of the Service is conditioned
              on Your acceptance of and compliance with these Terms. These Terms
              apply to all visitors, users, and others who access or use the
              Service. By accessing or using the Service, You agree to be bound
              by these Terms. If You disagree with any part of these Terms, You
              may not access the Service. You represent that You are at least 18
              years of age. The Company does not permit those under 18 to use
              the Service. Your access to and use of the Service is also
              conditioned on acceptance of the Company’s Privacy Policy. The
              Privacy Policy describes how personal information is collected,
              used, and protected. Please review it carefully before using the
              Service.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Links to Other Websites
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              Our Service may contain links to third-party websites or services
              that are not owned or controlled by the Company. The Company
              assumes no responsibility for the content, privacy policies, or
              practices of any third-party websites or services. You acknowledge
              and agree that the Company shall not be responsible or liable for
              any damage or loss caused by or in connection with the use of such
              third-party content, goods, or services. We strongly advise You to
              read the terms and privacy policies of any third-party websites
              You visit.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Termination
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              We may terminate or suspend Your access immediately, without prior
              notice or liability, for any reason, including breach of these
              Terms. Upon termination, Your right to use the Service will cease
              immediately.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Limitation of Liability
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              To the maximum extent permitted by law, the Company’s total
              liability under these Terms shall be limited to the amount paid by
              You for the Service, or $100 USD if no payment has been made. In
              no event shall the Company be liable for indirect, incidental,
              special, or consequential damages including loss of profits, loss
              of data, business interruption, personal injury, or privacy loss
              arising from use of or inability to use the Service. Some
              jurisdictions do not allow limitations of liability, so certain
              limitations may not apply to You. In such cases, liability shall
              be limited to the maximum extent permitted by law.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              “AS IS” and “AS AVAILABLE” Disclaimer
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              The Service is provided “AS IS” and “AS AVAILABLE” without
              warranty of any kind. The Company disclaims all warranties,
              express or implied, including merchantability, fitness for a
              particular purpose, and non-infringement. The Company does not
              guarantee uninterrupted or error-free operation, accuracy of
              content, or that defects will be corrected.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Governing Law
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              These Terms shall be governed by the laws of the State of
              California, United States, without regard to conflict-of-law
              principles.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Dispute Resolution
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              If You have a dispute with the Company, You agree to attempt to
              resolve it informally by contacting the Company before pursuing
              legal action.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              For European Union Users
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              If You are a resident of the European Union, You are entitled to
              mandatory consumer protections under the laws of Your country of
              residence.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              United States Legal Compliance
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              You represent and warrant that You are not located in a country
              subject to U.S. government embargoes and are not listed on any
              U.S. government restricted parties list.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Severability and Waiver
            </h2>
<h3 className="text-xl font-medium text-white mt-6 mb-3">
              Severability
            </h3>
<p className="text-gray-400 font-light leading-relaxed mb-4">
              If any provision of these Terms is found unenforceable, the
              remaining provisions shall remain in effect.
            </p>
<h3 className="text-xl font-medium text-white mt-6 mb-3">Waiver</h3>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              Failure to enforce any right shall not be considered a waiver of
              future enforcement.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Translation Interpretation
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              If these Terms are translated, the English version shall prevail
              in the event of a dispute.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Changes to These Terms
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              We reserve the right to modify these Terms at any time. Material
              changes will be communicated with reasonable notice. Continued use
              of the Service constitutes acceptance of updated Terms.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Contact Us
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              If You have any questions about these Terms and Conditions, You
              may contact us:
            </p>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              By email: info@promaxaiagency.com
            </p>
</div>
</div>

<div className="hidden animate-fade-up" id="privacy-content">
<div className="max-w-4xl mx-auto py-12 px-2 md:px-0">
<h1 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">
              Promax AI Privacy Policy
            </h1>
<p className="text-sm text-gray-500 mb-8 italic">
              Last updated: January 1, 2026
            </p>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              Promax AI (“the Company”, “We”, “Us”, or “Our” in this Agreement)
              is committed to protecting Your privacy. This Privacy Policy
              explains how We collect, use, disclose, and safeguard Your
              information when You visit Our website or engage with Our
              services. Please read this Privacy Policy carefully. If You do not
              agree with the terms of this Privacy Policy, please do not access
              the Service.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Information We Collect
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-4">
              We may collect personal information that You voluntarily provide
              to Us, including but not limited to:
            </p>
<ul className="list-disc pl-5 space-y-2 text-gray-400 font-light mb-6">
<li>Full name</li>
<li>Email address</li>
<li>Phone number</li>
<li>Business information</li>
</ul>
<p className="text-gray-400 font-light leading-relaxed mb-4">
              We may also automatically collect certain information when You
              access the Service, such as:
            </p>
<ul className="list-disc pl-5 space-y-2 text-gray-400 font-light mb-6">
<li>IP address</li>
<li>Browser type</li>
<li>Device information</li>
<li>Pages visited and time spent on the website</li>
</ul>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              How We Use Your Information
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-4">
              We use the information We collect to:
            </p>
<ul className="list-disc pl-5 space-y-2 text-gray-400 font-light mb-6">
<li>Provide and operate Our services</li>
<li>
                Contact You regarding inquiries, consultations, or services
              </li>
<li>
                Send emails, phone calls, or SMS messages related to Our
                services
              </li>
<li>Improve website functionality and user experience</li>
</ul>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              SMS &amp; Phone Communications (A2P Compliance)
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-4">
              By submitting Your phone number through Our website or forms, You
              consent to receive calls and SMS messages from Promax AI regarding
              services, updates, and appointment-related communications.
            </p>
<ul className="list-disc pl-5 space-y-2 text-gray-400 font-light mb-6">
<li>Message frequency may vary</li>
<li>Message and data rates may apply</li>
<li>
                You may opt out of SMS communications at any time by replying
                STOP
              </li>
<li>For help, reply HELP or contact us directly</li>
</ul>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              We do not sell or share phone numbers with third parties for
              marketing purposes.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Sharing of Your Information
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-4">
              We do not sell, rent, or trade Your personal information. We may
              share information only with:
            </p>
<ul className="list-disc pl-5 space-y-2 text-gray-400 font-light mb-6">
<li>
                Service providers who assist in operating Our website or
                services
              </li>
<li>Legal or regulatory authorities when required by law</li>
<li>
                Third-party toolsfor analytics, tracking, and marketing
                integration
              </li>
</ul>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Security of Your Information
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              We use administrative, technical, and physical security measures
              to help protect Your personal information. While We have taken
              reasonable steps to secure the personal information You provide to
              Us, please be aware that despite Our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Children's Privacy
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              We do not knowingly solicit information from or market to children
              under the age of 13. If We learn that We have collected personal
              information from a child under age 13 without verification of
              parental consent, We will delete that information as quickly as
              possible.
            </p>
<h2 className="text-2xl font-serif text-white mt-10 mb-6">
              Contact Us
            </h2>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              If You have any questions about this Privacy Policy, You may
              contact us:
            </p>
<p className="text-gray-400 font-light leading-relaxed mb-6">
              By email: info@promaxaiagency.com
            </p>
</div>
</div>
</main>

<footer className="md:py-16 md:px-12 z-10 bg-[#050505] border-white/5 border-t pt-12 pr-6 pb-24 pl-6 relative" id="footer">
<div className="flex flex-col md:flex-row max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-center md:items-start justify-between">

<div className="flex flex-col gap-x-4 gap-y-0 items-center md:items-start">
<a className="block" href="#" onclick="showPage('home'); return false;">
<img alt="Promax AI" className="h-10 md:h-12 w-auto object-contain invert-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/530760a9-a47c-4370-8237-128b33cda379_800w.png"/>
</a>
<p className="md:text-xs text-xs font-light text-gray-500 max-w-xs mt-3 mr-auto ml-auto text-center md:text-left">
              Client Acquisition, Engineered for Growth.
            </p>
</div>

<div className="flex flex-col gap-6 items-center md:items-end text-center md:text-right w-full md:w-auto">
<h3 className="text-lg text-white tracking-tight font-serif" onclick="window.location.href='/#book-call'" role="button">
              Get in Touch
            </h3>
<div className="flex flex-col gap-3 text-sm md:text-base font-light text-gray-400">
<a className="group flex justify-center md:justify-end items-center gap-2" href="mailto:info@promaxaiagency.com">
<span className="text-sm font-medium text-gray-500">Email:</span>
<span className="text-sm font-medium text-gray-400 group-hover:text-rose-400 transition-colors">
                  info@promaxaiagency.com
                </span>
</a>
<a className="group flex justify-center md:justify-end items-center gap-2" href="tel:+13108717870">
<span className="text-sm font-medium text-gray-500">Call:</span>
<span className="text-sm font-medium text-gray-400 group-hover:text-rose-400 transition-colors">
                  (310) 871-7870
                </span>
</a>
<a className="group flex justify-center md:justify-end items-center gap-2" href="sms:+13108717870">
<span className="text-sm font-medium text-gray-500">Text:</span>
<span className="text-sm font-medium text-gray-400 group-hover:text-rose-400 transition-colors">
                  (310) 871-7870
                </span>
</a>
<a className="hover:text-rose-400 transition-colors text-sm font-medium text-gray-400 mt-2" href="/privacy-policy" onclick="showPage('privacy'); return false;">
                Privacy Policy
              </a>
<a className="hover:text-rose-400 transition-colors text-sm font-medium text-gray-400" href="/terms-conditions" onclick="showPage('terms'); return false;">
                Terms &amp; Conditions
              </a>
</div>
</div>
</div>
</footer>
</div>




    </>
  );
}

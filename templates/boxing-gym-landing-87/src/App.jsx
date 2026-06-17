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



      // Navbar Scroll Effect
      const nav = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              nav.classList.add('bg-black/90', 'backdrop-blur-md', 'border-zinc-800');
              nav.classList.remove('bg-transparent', 'border-transparent');
          } else {
              if(window.innerWidth >= 768) {
                 nav.classList.remove('bg-black/90', 'backdrop-blur-md', 'border-zinc-800');
                 nav.classList.add('bg-transparent', 'border-transparent');
              }
          }
      });

      // Mobile Menu Toggle
      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          mobileMenu.classList.toggle('flex');
      });

      // Close mobile menu when a link is clicked
      const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
      mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
              mobileMenu.classList.add('hidden');
              mobileMenu.classList.remove('flex');
          });
      });

      // FAQ Toggle
      function toggleFaq(button) {
          const item = button.parentElement;
          const content = item.querySelector('.faq-content');
          const icon = item.querySelector('.faq-icon');

          // Check if already active
          const isActive = item.classList.contains('active');

          // Close all other items
          document.querySelectorAll('.faq-item').forEach(otherItem => {
              otherItem.classList.remove('active');
              otherItem.querySelector('.faq-content').style.maxHeight = null;
              otherItem.querySelector('.faq-content').style.opacity = '0';
              otherItem.querySelector('.faq-icon').classList.remove('rotate-180');
          });

          // Toggle current item
          if (!isActive) {
              item.classList.add('active');
              content.style.maxHeight = content.scrollHeight + "px";
              content.style.opacity = '1';
              icon.classList.add('rotate-180');
          }
      }
    


      document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('#services .grid > div.group');
        cards.forEach((card, index) => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          card.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
          card.style.transitionDelay = `${index * 150}ms`;
        });
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        cards.forEach(card => observer.observe(card));

        const cardImages = document.querySelectorAll('#services .grid > div.group > div:first-child');
        let ticking = false;
        window.addEventListener('scroll', () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              cardImages.forEach(img => {
                const rect = img.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                  const progress = (rect.top - window.innerHeight / 2) / window.innerHeight;
                  const yOffset = progress * 25;
                  img.style.backgroundPosition = `center calc(50% + ${yOffset}px)`;
                }
              });
              ticking = false;
            });
            ticking = true;
          }
        });
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
      

<div className="fixed top-0 w-full h-screen bg-cover -z-10" data-alpha-mask="80" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89cd27d9-0b5b-4e31-a0d7-478bba7bdfcf_3840w.png\')', backgroundPosition: '50% 20%', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b" id="navbar">
<div className="flex md:bg-transparent md:backdrop-filter-none bg-black/90 w-full h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 backdrop-blur-md items-center justify-between">

<a className="h-full flex items-center hover:opacity-80 transition-opacity z-50" href="#">
<img alt="La Bodega Logo" className="w-auto h-8 md:h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59941ffc-8010-4b8d-92ec-bf75780763c3_320w.png"/>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-white hover:text-[#006847] transition-colors text-xs font-bold uppercase tracking-widest" href="#somoslabodega">
            #SOMOSLABODEGA
          </a>
<a className="hover:text-[#006847] transition-colors uppercase text-xs font-bold text-white tracking-widest" href="#schedule">
            Training Schedule
          </a>

<a className="bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-widest px-6 py-3 rounded transition-all shadow-lg inline-flex items-center justify-center" href="tel:+12798887028">
            Call to Join
          </a>
</div>

<button className="md:hidden text-white cursor-pointer z-50 p-2 focus:outline-none" id="mobile-menu-btn">
<svg className="feather feather-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-black border-b border-zinc-800 flex-col p-6 gap-6 shadow-2xl z-40 md:hidden" id="mobile-menu">
<a className="mobile-link text-white hover:text-[#006847] transition-colors text-sm font-bold uppercase tracking-widest border-b border-zinc-900 pb-4 block" href="#somoslabodega">
          #SOMOSLABODEGA
        </a>
<a className="mobile-link text-white hover:text-[#006847] transition-colors text-sm font-bold uppercase tracking-widest border-b border-zinc-900 pb-4 block" href="#schedule">
          Training Schedule
        </a>
<a className="mobile-link block w-full text-center bg-white hover:bg-zinc-200 text-black text-sm font-bold uppercase tracking-widest px-6 py-4 rounded transition-all shadow-lg mt-2" href="tel:+12798887028">
          Call to Join
        </a>
</div>
</nav>

<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">

<div className="absolute inset-0 z-0 bg-zinc-950">

<img alt="La Bodega Sacramento Storefront" className="absolute -top-20 left-0 w-full h-[calc(100%+80px)] md:h-full md:top-0 md:static object-cover object-top md:object-center opacity-60 grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1fd72de-657e-49f0-a5ed-a7f6dd164a0d_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
<div className="grid-bg opacity-10 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-48 md:mt-20">
<div className="max-w-6xl">
<div className="inline-flex gap-2 bg-black/30 border-zinc-700 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
<span className="text-[10px] uppercase font-mono tracking-widest text-zinc-300">
              Est. 2014 • Sacramento, CA
            </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-bold text-white tracking-tighter">
            Train Like a Champion.
            <span className="text-zinc-500 block md:inline">
              Belong to a Family.
            </span>
</h1>
<p className="text-lg md:text-xl leading-relaxed text-shadow-sm font-light text-zinc-300 max-w-2xl mt-8">
            Sacramento’s home for authentic boxing. From first-time students to
            competitive fighters, we build discipline that lasts beyond the
            ring. Hablamos Español.
          </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="bg-[#006847] hover:bg-[#005036] text-white px-8 py-3.5 text-sm font-medium rounded transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,104,71,0.4)] w-full sm:w-auto" href="tel:+12798887028">
              24/7 Support
              <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
<a className="text-zinc-400 hover:text-white px-6 py-3.5 text-sm font-medium transition-all w-full sm:w-auto border border-zinc-800 sm:border-transparent rounded sm:rounded-none bg-black/30 sm:bg-transparent flex items-center justify-center" href="#schedule">
              View Schedule
            </a>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 md:py-32 overflow-hidden bg-black border-zinc-900 border-b pt-16 pb-16" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Elite &amp; Performance Driven
            </h2>
<p className="mt-2 text-zinc-500 text-sm">
              Refine your craft with world-class coaching.
            </p>
</div>
<a className="text-white hover:text-zinc-300 text-sm font-medium flex items-center gap-2 group" href="#schedule">
            All Programs
            <svg aria-hidden="true" className="iconify text-[#006847] group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">

<div className="group relative cursor-pointer">
<div className="overflow-hidden flex flex-col group-hover:border-zinc-700 bg-zinc-900/40 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0225b387-ac02-453d-9873-47cc2b46503e_800w.png)] bg-cover bg-center border-zinc-800 border rounded-lg items-center justify-center aspect-[4/5] grayscale" onclick="return false;" style={{transition: 'filter 0.4s ease-in-out, border-color 0.15s ease-in-out, background-color 0.15s ease-in-out'}}></div>
<div className="mt-4">
<h3 className="text-lg font-medium text-white">Technical Boxing</h3>
<p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                A deep dive into the art of the sweet science. Refine your
                footwork, defensive shell, and ring IQ through high-level
                tactical drills.
              </p>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="overflow-hidden flex flex-col group-hover:border-zinc-700 bg-zinc-900/40 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3aec448c-75dd-4ef6-9dd6-2d7f42745c42_800w.png)] bg-cover bg-center border-zinc-800 border rounded-lg items-center justify-center aspect-[4/5] grayscale" onclick="return false;" style={{transition: 'filter 0.4s ease-in-out, border-color 0.15s ease-in-out, background-color 0.15s ease-in-out'}}></div>
<div className="mt-4">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
                Program Development
                <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded border border-white/50">
                  Core
                </span>
</h3>
<p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                A structured curriculum designed to take you from fundamentals
                to advanced flow states through progressive conditioning.
              </p>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="overflow-hidden flex flex-col group-hover:border-zinc-700 bg-zinc-900/40 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dff6a5b1-e4b2-4a71-88f6-1b1a0230f58a_800w.png)] bg-cover bg-center border-zinc-800 border rounded-lg items-center justify-center aspect-[4/5] grayscale" onclick="return false;" style={{transition: 'filter 0.4s ease-in-out, border-color 0.15s ease-in-out, background-color 0.15s ease-in-out'}}></div>
<div className="mt-4">
<h3 className="text-lg font-medium text-white">Strength Training</h3>
<p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                The engine behind the athlete. Develop maximal force and kinetic
                efficiency through targeted compound movements designed to
                translate directly to high-impact performance.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 py-16 md:py-24 bg-zinc-950 border-b border-zinc-900 overflow-hidden" id="schedule">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Training Schedule
            </h2>
<p className="text-sm text-zinc-500 mt-2">
              Determination. Dedication. Discipline.
            </p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#006847] animate-pulse"></span>
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Gym Open Now
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900 transition-colors group flex flex-col">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] uppercase font-bold tracking-wider text-[#006847] border border-[#006847]/30 px-2 py-0.5 rounded bg-[#006847]/10">
                Youth
              </span>
<svg className="iconify text-zinc-600 group-hover:text-white transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3l1.912 5.813a2 2 0 0 0 1.272 1.272L21 12l-5.813 1.912a2 2 0 0 0-1.272 1.272L12 21l-1.912-5.813a2 2 0 0 0-1.272-1.272L3 12l5.813-1.912a2 2 0 0 0 1.272-1.272z"></path>
</svg>
</div>
<h3 className="font-oswald font-bold uppercase text-2xl text-white mb-1 tracking-tight">
              Youth Boxing
            </h3>
<p className="text-zinc-500 text-sm mb-6">Ages 9–16</p>
<div className="mt-auto">
<p className="text-red-600 font-bold uppercase text-xs tracking-widest mb-1">
                Monday – Friday
              </p>
<p className="text-white text-lg font-medium">5:00 PM – 6:00 PM</p>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900 transition-colors group flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-red-600/10 transition-colors"></div>
<div className="flex items-center justify-between mb-4 relative z-10">
<span className="text-[10px] uppercase font-bold tracking-wider text-red-500 border border-red-900/30 px-2 py-0.5 rounded bg-red-900/10">
                Team
              </span>
<svg className="iconify text-zinc-600 group-hover:text-red-500 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18m-6 3v3m0 0v3m0 0h-3m3 0h3m-3-12a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></path>
</svg>
</div>
<h3 className="font-oswald font-bold uppercase text-2xl text-white mb-1 tracking-tight relative z-10">
              Competition Team
            </h3>
<p className="text-zinc-500 text-sm mb-6 relative z-10">Ages 9+</p>
<div className="mt-auto relative z-10">
<p className="text-red-600 font-bold uppercase text-xs tracking-widest mb-1">
                Monday – Friday
              </p>
<p className="text-white text-lg font-medium">6:00 PM – 7:30 PM</p>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900 transition-colors group flex flex-col">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] uppercase font-bold tracking-wider text-white border border-white/20 px-2 py-0.5 rounded bg-white/5">
                Adult
              </span>
<svg className="iconify text-zinc-600 group-hover:text-white transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m16-10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m7 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="font-oswald font-bold uppercase text-2xl text-white mb-1 tracking-tight">
              Adult Boxing
            </h3>
<p className="text-zinc-500 text-sm mb-6">Ages 17+</p>
<div className="mt-auto">
<p className="text-red-600 font-bold uppercase text-xs tracking-widest mb-1">
                Monday – Friday
              </p>
<p className="text-white text-lg font-medium">7:45 PM – 8:45 PM</p>
</div>
</div>
</div>

<div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-zinc-900 rounded border border-zinc-800">
<svg className="iconify text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div className="">
<span className="text-sm font-bold text-white uppercase tracking-wide block mb-1">
                General Gym Hours
              </span>
<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-zinc-400">
<span className="text-red-600 font-bold uppercase text-xs">
                  Monday – Friday
                </span>
<span className="hidden sm:inline text-zinc-700">•</span>
<span>5:00 PM – 9:00 PM</span>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group" href="tel:+12798887028">
            Private Training Available Daily
            <svg className="lucide lucide-phone-call group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-black border-b border-zinc-900 overflow-hidden relative" id="pricing">
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-12 md:mb-16 relative">
<div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
<span className="text-8xl md:text-9xl font-oswald font-bold text-zinc-800 uppercase tracking-tighter md:scale-150 whitespace-nowrap">
              Pricing
            </span>
</div>
<h2 className="font-oswald text-4xl md:text-6xl uppercase font-bold text-white tracking-tight relative z-10">
            Membership
          </h2>
<div className="w-16 md:w-24 h-1 bg-[#006847] mx-auto my-4 md:my-6"></div>
<p className="text-[#006847] font-bold uppercase tracking-widest text-xs md:text-sm">
            Month to Month Program
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="relative bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 rounded-xl flex flex-col items-center text-center group hover:border-[#006847]/50 hover:bg-zinc-900 transition-all duration-300">
<div className="absolute -top-4 right-8 bg-[#006847] text-white font-black font-oswald uppercase text-xs px-4 py-1.5 rounded tracking-wider shadow-[0_0_15px_rgba(0,104,71,0.5)] transform -rotate-2 group-hover:rotate-0 transition-transform">
              No Contracts
            </div>
<h3 className="font-oswald text-3xl text-white uppercase mt-4 tracking-wide">
              Youth Membership
            </h3>
<div className="my-8 flex items-baseline justify-center gap-1">
<span className="text-2xl text-zinc-400 font-bold align-top">$</span>
<span className="text-7xl font-oswald font-bold text-white tracking-tighter group-hover:text-[#006847] transition-colors">
                200
              </span>
<span className="text-zinc-500 font-medium text-lg">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-zinc-400 text-sm font-medium w-full text-left pl-4 md:pl-16">
<li className="flex items-center gap-3">
<svg className="text-[#006847] w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Full Gym Access
              </li>
<li className="flex items-center gap-3">
<svg className="text-[#006847] w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Daily Group Classes
              </li>
<li className="flex items-center gap-3">
<svg className="text-[#006847] w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Certified Coaching
              </li>
</ul>
<a className="block w-full bg-white hover:bg-zinc-200 text-black font-oswald font-bold uppercase tracking-widest py-4 rounded text-sm transition-all shadow-lg mt-auto" href="tel:+12798887028">
              Call to Join
            </a>
</div>

<div className="relative bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 rounded-xl flex flex-col items-center text-center group hover:border-[#006847]/50 hover:bg-zinc-900 transition-all duration-300">
<div className="absolute -top-4 right-8 bg-[#006847] text-white font-black font-oswald uppercase text-xs px-4 py-1.5 rounded tracking-wider shadow-[0_0_15px_rgba(0,104,71,0.5)] transform -rotate-2 group-hover:rotate-0 transition-transform">
              No Contracts
            </div>
<h3 className="font-oswald text-3xl text-white uppercase mt-4 tracking-wide">
              Adult Membership
            </h3>
<div className="my-8 flex items-baseline justify-center gap-1">
<span className="text-2xl text-zinc-400 font-bold align-top">$</span>
<span className="text-7xl font-oswald font-bold text-white tracking-tighter group-hover:text-[#006847] transition-colors">
                220
              </span>
<span className="text-zinc-500 font-medium text-lg">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-zinc-400 text-sm font-medium w-full text-left pl-4 md:pl-16">
<li className="flex items-center gap-3">
<svg className="text-[#006847] w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Full Gym Access
              </li>
<li className="flex items-center gap-3">
<svg className="text-[#006847] w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Daily Group Classes
              </li>
<li className="flex items-center gap-3">
<svg className="text-[#006847] w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Strength &amp; Conditioning
              </li>
</ul>
<a className="block w-full bg-transparent border border-zinc-600 hover:border-white hover:bg-white hover:text-black text-white font-oswald font-bold uppercase tracking-widest py-4 rounded text-sm transition-all mt-auto" href="tel:+12798887028">
              Talk to a Coach
            </a>
</div>
</div>
<div className="text-center mt-12 md:mt-16">
<p className="text-zinc-400 text-xs font-oswald font-bold uppercase tracking-widest border border-zinc-800 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/50">
<span className="w-2 h-2 rounded-full bg-[#006847]"></span>
            $50.00 One-time Sign Up Fee
          </p>
</div>
</div>
</section>

<section className="bg-black border-zinc-900 border-b py-16 md:py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center gap-1 mb-6 text-zinc-700">
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<blockquote className="font-playfair italic text-lg text-zinc-300 leading-relaxed mb-6">
              "More than a gym, it’s a second home. The coaches here have taught
              my son that discipline is the foundation of everything.
              Eternamente agradecida."
            </blockquote>
</div>

<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center gap-1 mb-6 text-zinc-700">
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<blockquote className="font-playfair italic text-lg text-zinc-300 leading-relaxed mb-6">
              "I came for the workout, but stayed for the culture. La Bodega
              builds character as much as it builds fighters. It’s the real
              deal."
            </blockquote>
</div>

<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center gap-1 mb-6 text-zinc-700">
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<blockquote className="font-playfair italic text-lg text-zinc-300 leading-relaxed mb-6">
              "This place changed my life. I’ve found a focus here that I
              couldn't find anywhere else. I’m proud to be part of the legacy."
            </blockquote>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 md:py-48 overflow-hidden flex flex-col text-center bg-zinc-950 border-zinc-900 border-b pt-32 pb-32 relative items-center justify-center" id="somoslabodega">
<div className="absolute inset-0 opacity-10 grid-bg pointer-events-none"></div>
<div className="relative z-10 px-6 w-full overflow-hidden">
<span className="block text-[#006847] text-xs font-mono uppercase tracking-widest mb-4">
          The Movement
        </span>
<h2 className="text-3xl sm:text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700 select-none break-words">
          #SOMOSLABODEGA
        </h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mt-8 mr-auto ml-auto">
          LA BODEGA IS AN OFFICIAL USA BOXING FACILITY / CLUB NO. 431. Built on
          the pillars of determination, dedication, and discipline, we provide a
          sanctuary for those who seek mastery. Step into an environment where
          elite standards meet a culture of support that challenges you to reach
          new heights.
        </p>
</div>
</section>

<section className="py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight mb-12 text-black uppercase text-center md:text-left">
          Common Questions
        </h2>
<div className="space-y-4">

<div className="faq-item active group border border-zinc-200 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors" onclick="toggleFaq(this)">
<span className="faq-question text-lg font-medium text-[#006847] transition-colors">
                When are the boxing classes held?
              </span>
<svg className="faq-icon transform transition-transform duration-300 text-zinc-400 rotate-180" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content" style={{maxHeight: '500px', opacity: '1'}}>
<div className="p-6 pt-0 text-zinc-600 leading-relaxed text-sm md:text-base border-t border-zinc-100/0">
                We train Monday through Friday. The Youth Class (ages 9–17) is
                from 5:00 PM to 6:00 PM, followed by the Competitive Class (ages
                9+) from 6:00 PM to 7:30 PM. The Adult Class (ages 18+) runs
                from 7:45 PM to 8:45 PM.
              </div>
</div>
</div>

<div className="faq-item group border border-zinc-200 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors" onclick="toggleFaq(this)">
<span className="faq-question text-lg font-medium text-zinc-900 group-hover:text-[#006847] transition-colors">
                What is the policy if I am running late?
              </span>
<svg className="faq-icon transform transition-transform duration-300 text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content">
<div className="p-6 pt-0 text-zinc-600 leading-relaxed text-sm md:text-base">
                Respect the clock. Students have a 15-minute grace period. If
                you arrive later than that, you won't be permitted to
                participate in that day’s training session.
              </div>
</div>
</div>

<div className="faq-item group border border-zinc-200 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors" onclick="toggleFaq(this)">
<span className="faq-question text-lg font-medium text-zinc-900 group-hover:text-[#006847] transition-colors">
                What gear do I need to start training?
              </span>
<svg className="faq-icon transform transition-transform duration-300 text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content">
<div className="p-6 pt-0 text-zinc-600 leading-relaxed text-sm md:text-base">
                You’ll need boxing gloves (velcro recommended), a jump rope, and
                hand wraps. Adults should use 180" wraps, while youth need 120".
              </div>
</div>
</div>

<div className="faq-item group border border-zinc-200 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors" onclick="toggleFaq(this)">
<span className="faq-question text-lg font-medium text-zinc-900 group-hover:text-[#006847] transition-colors">
                Can I buy equipment at the gym?
              </span>
<svg className="faq-icon transform transition-transform duration-300 text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content">
<div className="p-6 pt-0 text-zinc-600 leading-relaxed text-sm md:text-base">
                Yes, we sell everything you need at La Bodega. Gloves are
                $50.00, and hand wraps and jump ropes are $10.00 each.
              </div>
</div>
</div>

<div className="faq-item group border border-zinc-200 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors" onclick="toggleFaq(this)">
<span className="faq-question text-lg font-medium text-zinc-900 group-hover:text-[#006847] transition-colors">
                What are the registration requirements?
              </span>
<svg className="faq-icon transform transition-transform duration-300 text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content">
<div className="p-6 pt-0 text-zinc-600 leading-relaxed text-sm md:text-base">
                You must sign a gym waiver at the moment you sign up. All
                athletes must be physically capable of participating with no
                medical complications.
              </div>
</div>
</div>

<div className="faq-item group border border-zinc-200 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors" onclick="toggleFaq(this)">
<span className="faq-question text-lg font-medium text-zinc-900 group-hover:text-[#006847] transition-colors">
                What are the rules for youth athletes?
              </span>
<svg className="faq-icon transform transition-transform duration-300 text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content">
<div className="p-6 pt-0 text-zinc-600 leading-relaxed text-sm md:text-base">
                A parent or guardian must be present to sign the waiver for any
                youth athlete. Parents are also required to sign in their youth
                athletes before every training session.
              </div>
</div>
</div>

<div className="faq-item group border border-zinc-200 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors" onclick="toggleFaq(this)">
<span className="faq-question text-lg font-medium text-zinc-900 group-hover:text-[#006847] transition-colors">
                What is the dress code?
              </span>
<svg className="faq-icon transform transition-transform duration-300 text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content">
<div className="p-6 pt-0 text-zinc-600 leading-relaxed text-sm md:text-base">
                Regular workout attire and comfortable athletic shoes are
                required. For safety, sandals and Crocs are strictly prohibited
                on the gym floor.
              </div>
</div>
</div>

<div className="faq-item group border border-zinc-200 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors" onclick="toggleFaq(this)">
<span className="faq-question text-lg font-medium text-zinc-900 group-hover:text-[#006847] transition-colors">
                How long does it take to start competing?
              </span>
<svg className="faq-icon transform transition-transform duration-300 text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content">
<div className="p-6 pt-0 text-zinc-600 leading-relaxed text-sm md:text-base">
                Every athlete progresses differently. Generally, it takes 6
                months to 1 year of dedicated training and mastery of the sport
                before you are ready for a competitive evaluation.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-[#1A1A1A] border-t-2 border-red-600 py-16 relative overflow-hidden" id="support">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex relative mb-6">
<div className="p-4 rounded-full bg-black/40 border border-white/10 shadow-xl">
<svg className="iconify text-white" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3m-6.5 7.4c.4.5.7 1.6.7 2.6c0 1.1-.3 2.2-.7 2.6"></path>
</svg>
</div>
<span className="absolute top-0 right-0 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006847] opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-[#006847]"></span>
</span>
</div>
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 uppercase">
          24/7 Instant Support
          <span className="text-zinc-500 mx-2">/</span>
          Apoyo Instantáneo
        </h2>
<p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
          Got questions about classes, gear, or our legacy? Our AI Assistant is
          ready to help you start your journey right now.
        </p>
<a className="inline-flex bg-[#006847] hover:bg-[#005036] text-white px-8 py-4 text-sm font-medium rounded-md transition-all items-center justify-center gap-2 group" href="tel:+12798887028">
          24/7 Support
          <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:phone-call" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M14.05 2a9 9 0 0 1 8 7.94" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M14.05 6A5 5 0 0 1 18 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
<div className="grid-bg opacity-5 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
</section>

<footer className="md:pt-20 overflow-hidden bg-black border-zinc-900 border-t pt-16 pb-10" id="location">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div className="md:col-span-1">
<a className="block hover:opacity-80 transition-opacity" href="#">
<img alt="La Bodega Logo" className="w-auto h-8 object-contain translate-x-3 scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59941ffc-8010-4b8d-92ec-bf75780763c3_320w.png"/>
</a>
<div className="mt-2 flex flex-col gap-1">
<span className="text-sm font-medium leading-none text-zinc-500">
              DETERMINATION.
            </span>
<span className="text-sm font-medium leading-none text-zinc-500">
              DEDICATION.
            </span>
<span className="text-sm font-medium leading-none text-zinc-500">
              DISCIPLINE
            </span>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-4">Sitemap</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="">
<a className="hover:text-white transition-colors" href="#">Classes</a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="tel:+12798887028">
                Private Training
              </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#pricing">
                Membership
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Connect</h4>
<ul className="text-sm text-zinc-500 space-y-3">
<li>
<a className="hover:text-white transition-colors" href="https://www.instagram.com/labodegaboxingcenter/">
                Instagram
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="https://www.facebook.com/labodegaboxingcenter/">
                Facebook
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Visit Us</h4>
<p className="leading-relaxed text-sm text-zinc-500 mb-2">
            1010 El Camino Ave, Suite AF, Sacramento, CA 95815
          </p>
<a className="text-sm text-zinc-500 hover:text-white transition-colors block" href="tel:12798887028">
            +1 (279) 888-7028
          </a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 md:mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">
          © 2024 La Bodega Boxing Center. All rights reserved.
        </p>
<div className="flex gap-4">
<a href="https://www.instagram.com/labodegaboxingcenter/" rel="noopener noreferrer" target="_blank">
<svg className="iconify text-[#006847] hover:text-[#005036] cursor-pointer transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</svg>
</a>
<a href="mailto:labodegaboxingcenter@gmail.com">
<svg className="iconify text-white hover:text-zinc-300 cursor-pointer transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</a>
<a href="https://www.facebook.com/labodegaboxingcenter/" rel="noopener noreferrer" target="_blank">
<svg className="iconify text-red-600 hover:text-red-500 cursor-pointer transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
</footer>


<div className="newo-chat-app">
<div className="sc-iJuWdM idPTBV newo-chat">
<iframe allow="allow-same-origin allow-forms" allowfullscreen="" className="sc-kEjbdu kdbPXo" frameborder="0" name="newo-chat-frame"></iframe>
</div>
<div className="sc-giInvV gMejQe newo-chat-toggler">
<iframe allow="allow-same-origin allow-forms" allowfullscreen="" className="sc-kEjbdu kdbPXo" frameborder="0" name="newo-chat-toggler-frame"></iframe>
</div>
</div>
<div className="newo-chat-app">
<div className="sc-iJuWdM idPTBV newo-chat">
<iframe allow="allow-same-origin allow-forms" allowfullscreen="" className="sc-kEjbdu kdbPXo" frameborder="0" name="newo-chat-frame"></iframe>
</div>
<div className="sc-giInvV gMejQe newo-chat-toggler">
<iframe allow="allow-same-origin allow-forms" allowfullscreen="" className="sc-kEjbdu kdbPXo" frameborder="0" name="newo-chat-toggler-frame"></iframe>
</div>
</div>
<div className="newo-chat-app">
<div className="sc-iJuWdM idPTBV newo-chat">
<iframe allow="allow-same-origin allow-forms" allowfullscreen="" className="sc-kEjbdu kdbPXo" frameborder="0" name="newo-chat-frame"></iframe>
</div>
<div className="sc-giInvV gMejQe newo-chat-toggler">
<iframe allow="allow-same-origin allow-forms" allowfullscreen="" className="sc-kEjbdu kdbPXo" frameborder="0" name="newo-chat-toggler-frame"></iframe>
</div>
</div>
<div className="newo-chat-app">
<div className="sc-iJuWdM idPTBV newo-chat">
<iframe allow="allow-same-origin allow-forms" allowfullscreen="" className="sc-kEjbdu kdbPXo" frameborder="0" name="newo-chat-frame"></iframe>
</div>
<div className="sc-giInvV gMejQe newo-chat-toggler">
<iframe allow="allow-same-origin allow-forms" allowfullscreen="" className="sc-kEjbdu kdbPXo" frameborder="0" name="newo-chat-toggler-frame"></iframe>
</div>
</div>


    </>
  );
}

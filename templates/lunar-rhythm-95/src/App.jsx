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
gtag('config', 'G-QLTBPBPXKB');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  
  const startCounting = (entry, observer) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute("data-count"));
      const duration = 2000; // Total time in milliseconds (2 seconds)
      const stepTime = 20; // How fast the numbers update
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target.toLocaleString(); // Rounds to final number
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current).toLocaleString();
        }
      }, stepTime);

      observer.unobserve(el); // Only animate once
    }
  };

  // Intersection Observer waits until the section is visible on screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => startCounting(entry, observer));
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
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
      

<nav className="fixed top-3 left-3 right-3 md:left-6 md:right-6 z-50 rounded-full liquid-glass transition-all duration-500" id="main-nav">
<div className="flex h-16 md:h-[4.5rem] max-w-7xl mx-auto px-5 md:px-8 items-center justify-between">

<a className="flex items-center gap-2 group" href="#" onclick="showPage('home')">
<div className="w-7 h-7 rounded-full border border-[#C9A96E]/40 flex items-center justify-center group-hover:border-[#C9A96E] transition-colors duration-300">
<div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#A3B18A]"></div>
</div>
<span className="text-xl italic text-[#1C1C22] tracking-tight font-newsreader">Lunar<span className="not-italic moon-text font-light text-[#1C1C22]"> Rhythm</span></span>
</a>

<div className="hidden lg:flex gap-9 text-sm font-light text-zinc-500 items-center">
<a className="transition-colors after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-amber-500 text-zinc-900 relative" href="/home" id="nav-home" onclick="showPage('home')">Home</a>
<a className="nav-link hover:text-zinc-900 transition-colors" href="/classes" id="nav-classes" onclick="showPage('classes')">Classes</a>
<a className="nav-link hover:text-zinc-900 transition-colors" href="/courses" id="nav-courses" onclick="showPage('courses')">Courses</a>
<a className="nav-link hover:text-zinc-900 transition-colors" href="#" id="nav-challenges" onclick="showPage('challenges')">Challenges</a>
</div>
<div className="flex items-center gap-4">

<a className="text-sm font-light text-zinc-600 hidden sm:block hover:text-[#C9A96E] transition-colors" href="#">Sign In</a>
<button className="zen-btn text-xs px-5 py-2.5" onclick="openModal(null)">Start Trial</button>
<button className="lg:hidden text-zinc-600 hover:text-zinc-900 transition-colors p-1" onclick="document.getElementById('mobile-menu').classList.toggle('open')">
<iconify-icon icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
</button>
</div>
</div>

<div className="px-6 pb-5 border-t border-white/20 mt-1" id="mobile-menu" style={{display: 'none'}}>
<div className="flex flex-col gap-4 pt-4 text-sm font-light text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="showPage('home');document.getElementById('mobile-menu').classList.remove('open')">Home</a>
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="showPage('classes');document.getElementById('mobile-menu').classList.remove('open')">Classes</a>
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="showPage('courses');document.getElementById('mobile-menu').classList.remove('open')">Courses</a>
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="showPage('challenges');document.getElementById('mobile-menu').classList.remove('open')">Challenges</a>
</div>
</div>
</nav>

<div className="page-section active" id="page-home">

<header className="min-h-screen flex overflow-hidden relative items-center justify-center"><div className="absolute inset-0" data-container-bg="true"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div></div>

<div className="absolute top-0 right-0 bottom-0 left-0"><div className="absolute inset-0" data-container-bg="true"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div></div><img alt="Warrior Pose at Sunset" className="object-[center_30%] opacity-100 mix-blend-lighten w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/717ed43e-de0d-4bf2-a286-b5309b6d1415_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute top-0 right-0 bottom-0 left-0"></div><div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-20 flex flex-col text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<span className="reveal active inline-block uppercase text-xs font-light text-[#4e5214] tracking-[0.2em] bg-[#73702b]/10 border-[#e3e1d4]/30 border rounded-full mb-8 px-4 py-1.5">
          Align With Your Rhythm
        </span>
<h1 className="reveal delay-100 active leading-[1.05] font-light text-[#636728] font-newsreader mb-6" id="nav-challenges" style={{fontSize: 'clamp(2.8rem, 7vw, 5.5rem)'}}>
          The practice that
          <br/>
<span className="text-gradient-sun font-newsreader" id="hero-gradient-text">moves with you.</span>
</h1>
<p className="reveal delay-200 active leading-relaxed font-light text-slate-800/70 max-w-xl mb-10" style={{fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'}}>
          Yoga, meditation, and breathwork curated to your cycle. From sunrise flows to moonlit restorations — your complete ritual lives here.
        </p>

<div className="reveal delay-300 active flex flex-wrap gap-3 justify-center mb-10">
<a className="ghost-btn" href="#lunar-paths" onclick="smoothScrollTo('lunar-paths')">
<iconify-icon className="mr-2" icon="solar:sun-2-linear" width="14"></iconify-icon>Energize
          </a>
<a className="ghost-btn" href="#lunar-paths" onclick="smoothScrollTo('restore-section')">
<iconify-icon className="mr-2" icon="solar:moon-sleep-linear" width="14"></iconify-icon>Restore
          </a>
<a className="ghost-btn" href="#lunar-paths" onclick="smoothScrollTo('learn-section')">
<iconify-icon className="mr-2" icon="solar:book-2-linear" width="14"></iconify-icon>Learn
          </a>
</div>
<div className="reveal delay-400 active">
<button className="zen-btn text-xs" onclick="openModal(null)">Begin Your Journey</button>
</div>

<div className="scroll-indicator flex flex-col gap-2 opacity-50 mt-14 items-center">
<span className="uppercase text-xs font-light text-[#4e5214] tracking-widest">Scroll</span>
<iconify-icon className="text-white" height="16" icon="solar:arrow-down-linear" style={{color: 'rgb(71, 85, 105)'}} width="16"></iconify-icon>
</div>
</div>
</header>

<section className="overflow-hidden pt-28 pr-6 pb-28 pl-6 relative" id="lunar-paths">

<div className="-translate-x-1/2 -translate-y-1/2 blur-[120px] pointer-events-none bg-[#C9A96E]/5 w-[800px] h-[400px] rounded-full absolute top-1/2 left-1/2"></div>
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-20 reveal">
<span className="uppercase block text-xs font-light text-[#A3B18A] tracking-[0.25em] mb-4">Your Daily Ritual</span>
<h2 className="font-newsreader font-light text-zinc-900 mb-5 tracking-tight" style={{fontSize: 'clamp(2rem, 4vw, 3.2rem)'}}>Choose Your Lunar Path</h2>
<p className="text-zinc-500 font-light max-w-lg mx-auto" style={{fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'}}>Three pathways, one complete system. Move between them freely — your rhythm, your choice.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="reveal delay-100 card-hover group overflow-hidden cursor-pointer vid-hover rounded-[2rem] relative" id="energize-path" onclick="showPage('classes')">
<div className="aspect-[3/4] relative">
<img alt="Energize" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1697060598741-7ca9b696febb?w=800&amp;q=80"/>
<video className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" preload="metadata" src="https://cdn.midjourney.com/video/157de36c-d492-4080-87f3-0dcebd3b268f/1.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="group-hover:bg-[#C9A96E]/10 transition-all duration-500 bg-[#C9A96E]/0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-5 left-5">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
<iconify-icon className="text-[#C9A96E]" icon="solar:sun-2-linear" width="20"></iconify-icon>
</div>
</div>
<div className="pt-7 pr-7 pb-7 pl-7 absolute right-0 bottom-0 left-0">
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] mb-3 block font-light">Morning · Dynamic</span>
<h3 className="text-2xl font-light text-white tracking-tight font-newsreader mb-2">Energize</h3>
<p className="text-white/60 text-sm font-light mb-5 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">Sun salutations, power vinyasa, and breathwork to ignite your day.</p>
<div className="flex items-center gap-3">
<span className="text-xs text-white/50 font-light">340+ classes</span>
<span className="w-1 h-1 rounded-full bg-white/30"></span>
<span className="text-xs text-white/50 font-light">15–60 min</span>
</div>
</div>
</div>
</div>

<div className="reveal delay-200 card-hover group overflow-hidden cursor-pointer md:translate-y-6 vid-hover rounded-[2rem] relative" id="restore-section" onclick="showPage('classes')">
<div className="aspect-[3/4] relative">
<img alt="Restore" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb353891-ca97-4901-b1f6-9f5b9d6bba37_800w.webp"/>
<video className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" preload="metadata" src="https://cdn.midjourney.com/video/157de36c-d492-4080-87f3-0dcebd3b268f/1.mp4"></video>
<div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="group-hover:bg-[#8BA7C7]/10 transition-all duration-500 bg-[#8BA7C7]/0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-5 left-5">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
<iconify-icon className="text-[#8BA7C7]" icon="solar:moon-sleep-linear" width="20"></iconify-icon>
</div>
</div>

<div className="text-[10px] uppercase text-[#8BA7C7] tracking-wider bg-[#8BA7C7]/20 border-[#8BA7C7]/40 border rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-5 right-5 backdrop-blur-sm">
                Most Loved
              </div>
<div className="pt-7 pr-7 pb-7 pl-7 absolute right-0 bottom-0 left-0">
<span className="text-xs uppercase tracking-[0.2em] text-[#8BA7C7] mb-3 block font-light">Evening · Yin</span>
<h3 className="font-newsreader font-light text-white text-2xl mb-2 tracking-tight">Restore</h3>
<p className="text-white/60 text-sm font-light mb-5 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">Yin yoga, restorative postures, and guided body scans for deep release.</p>
<div className="flex items-center gap-3">
<span className="text-xs text-white/50 font-light">520+ classes</span>
<span className="w-1 h-1 rounded-full bg-white/30"></span>
<span className="text-xs text-white/50 font-light">10–90 min</span>
</div>
</div>
</div>
</div>

<div className="reveal delay-300 card-hover group relative rounded-[2rem] overflow-hidden cursor-pointer vid-hover" id="learn-section" onclick="showPage('courses')">
<div className="aspect-[3/4] relative">
<img alt="Learn" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1758599878236-47f6a918aed2?w=800&amp;q=80"/>
<video className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="" preload="metadata" src="https://cdn.midjourney.com/video/157de36c-d492-4080-87f3-0dcebd3b268f/1.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute inset-0 bg-[#A3B18A]/0 group-hover:bg-[#A3B18A]/10 transition-all duration-500"></div>
<div className="absolute top-5 left-5">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
<iconify-icon className="text-[#A3B18A]" icon="solar:book-2-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-7">
<span className="text-xs uppercase tracking-[0.2em] text-[#A3B18A] mb-3 block font-light">Courses · Philosophy</span>
<h3 className="font-newsreader font-light text-white text-2xl mb-2 tracking-tight">Learn</h3>
<p className="text-white/60 text-sm font-light mb-5 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">Ayurveda, anatomy, philosophy and certification courses from master teachers.</p>
<div className="flex items-center gap-3">
<span className="text-xs text-white/50 font-light">300+ courses</span>
<span className="w-1 h-1 rounded-full bg-white/30"></span>
<span className="text-xs text-white/50 font-light">CEU Credits</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-20 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="flex reveal mb-12 items-end justify-between">
<div className="">
<span className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] font-light mb-3 block">Under 15 Minutes</span>
<h2 className="font-newsreader font-light text-zinc-900 tracking-tight" style={{fontSize: 'clamp(1.6rem, 3vw, 2.4rem)'}}>Daily Rituals</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-light text-zinc-400 hover:text-zinc-900 transition-colors" href="#" onclick="showPage('classes')">View all <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>
<div className="flex gap-5 overflow-x-auto hide-scrollbar snap-x -mx-6 lg:mx-0 lg:px-0 pr-6 pb-4 pl-6 gap-x-5 gap-y-5">

<div className="min-w-[260px] md:min-w-[300px] snap-start card-outer group overflow-hidden cursor-pointer reveal delay-100 rounded-[1.5rem] relative" onclick="openModal('morning-ritual')">
<div className="aspect-[3/4] relative">
<img alt="Class" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1552196634-24a18d82ac56?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/70 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-[10px] font-light text-white tracking-wide bg-white/15 border-white/20 border rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 left-4 backdrop-blur">8 MIN</div>
<div className="absolute right-4 bottom-4 left-4">
<h4 className="text-base font-light text-white font-newsreader mb-1">Wake &amp; Stretch</h4>
<p className="text-white/60 text-xs font-light">with Sarah Johnson</p>
</div>

<div className="quick-preview">
<span className="text-[#C9A96E] text-[10px] uppercase tracking-widest mb-3 block">Quick Preview</span>
<p className="text-white/80 text-xs font-light leading-relaxed mb-3">A gentle morning flow to release overnight tension and invite focused energy.</p>
<div className="flex flex-wrap gap-1.5 mb-3">
<span className="text-[10px] text-white/70 bg-white/10 rounded-full pt-1 pr-2 pb-1 pl-2">Spine</span>
<span className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded-full">Hamstrings</span>
<span className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded-full">No props</span>
</div>
<button className="uppercase hover:text-white transition-colors text-xs text-[#C9A96E] tracking-wider text-center w-full" onclick="openModal('morning-ritual')">Start Free Trial →</button>
</div>
</div>
</div>
<div className="min-w-[260px] md:min-w-[300px] snap-start card-outer group relative rounded-[1.5rem] overflow-hidden cursor-pointer reveal delay-200" onclick="openModal('breathwork')">
<div className="aspect-[3/4] relative">
<img alt="Class" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1697060739671-586c21fa5e30?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute top-4 left-4 bg-white/15 backdrop-blur border border-white/20 text-white text-[10px] px-3 py-1 rounded-full font-light tracking-wide">12 MIN</div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-white font-light text-base mb-1 font-newsreader">Noon Reset</h4>
<p className="text-white/60 text-xs font-light">with Elena Rodriguez</p>
</div>
<div className="quick-preview">
<span className="text-[#8BA7C7] text-[10px] uppercase tracking-widest mb-3 block">Quick Preview</span>
<p className="text-white/80 text-xs font-light leading-relaxed mb-3">Desk-friendly stretches and box breathing to recalibrate mid-day energy.</p>
<div className="flex flex-wrap gap-1.5 mb-3">
<span className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded-full">Shoulders</span>
<span className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded-full">Neck</span>
<span className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded-full">Chair</span>
</div>
<button className="w-full text-center text-[#8BA7C7] text-xs uppercase tracking-wider hover:text-white transition-colors" onclick="openModal('breathwork')">Start Free Trial →</button>
</div>
</div>
</div>
<div className="min-w-[260px] md:min-w-[300px] snap-start card-outer group relative rounded-[1.5rem] overflow-hidden cursor-pointer reveal delay-300" onclick="openModal('evening')">
<div className="aspect-[3/4] relative">
<img alt="Class" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1767611123686-79b12f266eff?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute top-4 left-4 bg-white/15 backdrop-blur border border-white/20 text-white text-[10px] px-3 py-1 rounded-full font-light tracking-wide">10 MIN</div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-white font-light text-base mb-1 font-newsreader">Wind Down</h4>
<p className="text-white/60 text-xs font-light">with Michael Chen</p>
</div>
<div className="quick-preview">
<span className="text-[#A3B18A] text-[10px] uppercase tracking-widest mb-3 block">Quick Preview</span>
<p className="text-white/80 text-xs font-light leading-relaxed mb-3">Yin postures and 4-7-8 breathing to prepare body and mind for restful sleep.</p>
<div className="flex flex-wrap gap-1.5 mb-3">
<span className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded-full">Hips</span>
<span className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded-full">Lower Back</span>
<span className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded-full">Bolster</span>
</div>
<button className="w-full text-center text-[#A3B18A] text-xs uppercase tracking-wider hover:text-white transition-colors" onclick="openModal('evening')">Start Free Trial →</button>
</div>
</div>
</div>
<div className="min-w-[260px] md:min-w-[300px] snap-start card-outer group relative rounded-[1.5rem] overflow-hidden cursor-pointer reveal delay-400" onclick="openModal('meditation')">
<div className="aspect-[3/4] relative">
<img alt="Class" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1767611117223-28281a979627?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute top-4 left-4 bg-white/15 backdrop-blur border border-white/20 text-white text-[10px] px-3 py-1 rounded-full font-light tracking-wide">5 MIN</div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-white font-light text-base mb-1 font-newsreader">Micro Meditation</h4>
<p className="text-white/60 text-xs font-light">with Priya Nair</p>
</div>
<div className="quick-preview">
<span className="text-[#C9A96E] text-[10px] uppercase tracking-widest mb-3 block">Quick Preview</span>
<p className="text-white/80 text-xs font-light leading-relaxed mb-3">A 5-minute awareness anchor. Suitable for any moment you need to return to center.</p>
<div className="flex flex-wrap gap-1.5 mb-3">
<span className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded-full">Mind</span>
<span className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded-full">Breath</span>
<span className="bg-white/10 text-white/70 text-[10px] px-2 py-1 rounded-full">No props</span>
</div>
<button className="w-full text-center text-[#C9A96E] text-xs uppercase tracking-wider hover:text-white transition-colors" onclick="openModal('meditation')">Start Free Trial →</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[480px] flex overflow-hidden md:my-16 md:mx-10 h-[65vh] rounded-[2.5rem] mt-8 mr-4 mb-8 ml-4 relative items-center justify-center">
<div className="absolute inset-0">
<img alt="Tranquil" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1683056255281-e52a141924f0?w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 text-center px-6 flex flex-col items-center reveal">
<h2 className="font-newsreader font-light text-white text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
          Create Your<br/><em className="not-italic text-gradient-sun">Daily Ritual</em>
</h2>
<p className="text-white/60 text-sm tracking-[0.25em] uppercase font-light mb-12">Yoga · Meditation · Breathwork</p>
<button className="w-24 h-24 md:w-28 md:h-28 rounded-full liquid-glass border flex items-center justify-center group hover:scale-105 transition-transform duration-500 border-white/30" onclick="openModal(null)">
<iconify-icon className="text-white ml-1 group-hover:scale-110 transition-transform" icon="solar:play-bold" width="36"></iconify-icon>
</button>
</div>
</section>

<section className="py-20 border-y border-zinc-100">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div className="reveal delay-100">
<div className="text-4xl md:text-5xl text-gradient mb-3 font-newsreader font-light flex items-baseline justify-center gap-1">
<span className="counter" data-count="3000">0</span><span>+</span>
</div>
<div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-light">Classes</div>
</div>
<div className="reveal delay-200">
<div className="text-4xl md:text-5xl text-gradient mb-3 font-newsreader font-light flex items-baseline justify-center gap-1">
<span className="counter" data-count="700">0</span>
</div>
<div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-light">Meditations</div>
</div>
<div className="reveal delay-300">
<div className="text-4xl md:text-5xl text-gradient mb-3 font-newsreader font-light flex items-baseline justify-center gap-1">
<span className="counter" data-count="300">0</span><span>+</span>
</div>
<div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-light">Courses</div>
</div>
<div className="reveal delay-400">
<div className="text-4xl md:text-5xl text-gradient mb-3 font-newsreader font-light flex items-baseline justify-center">
<span className="counter" data-count="1">0</span><span>M+</span>
</div>
<div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-light">Practitioners</div>
</div>
</div>
</section>

<section className="py-28 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12 reveal">
<div>
<span className="text-xs uppercase tracking-[0.2em] text-[#A3B18A] font-light mb-3 block">Deep Mastery</span>
<h2 className="font-newsreader font-light text-zinc-900 tracking-tight" style={{fontSize: 'clamp(1.6rem, 3vw, 2.4rem)'}}>Featured Courses</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-light text-zinc-400 hover:text-zinc-900 transition-colors" href="#" onclick="showPage('courses')">All courses <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal delay-100 card-hover group bg-white rounded-[1.8rem] overflow-hidden border border-zinc-100 cursor-pointer relative" onclick="showPage('courses')">
<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A96E] to-[#A3B18A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
<div className="aspect-video overflow-hidden relative">
<img alt="Course" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" src="https://images.unsplash.com/photo-1734638901126-bd34c411a029?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute top-4 left-4 bg-[#C9A96E]/90 text-white text-[10px] px-3 py-1 rounded-full font-light tracking-wide">YACEP Credits</span>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] uppercase tracking-wider text-[#A3B18A] font-light">Anatomy</span>
<span className="w-1 h-1 rounded-full bg-zinc-200"></span>
<span className="text-[10px] uppercase tracking-wider text-zinc-400 font-light">Intermediate</span>
</div>
<h4 className="font-newsreader font-light text-zinc-900 text-lg mb-2 leading-snug tracking-tight">Functional Anatomy for Yoga Teachers</h4>
<p className="text-xs text-zinc-400 font-light mb-5">with Dr. Ray Long</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="13"></iconify-icon>
<span className="text-sm font-light text-zinc-700">4.9</span>
<span className="text-xs text-zinc-400">(312)</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear" width="13"></iconify-icon>
<span className="text-xs font-light">6.5 hrs</span>
</div>
</div>
</div>
</div>
<div className="reveal delay-200 card-hover group bg-white rounded-[1.8rem] overflow-hidden border border-zinc-100 cursor-pointer relative" onclick="showPage('courses')">
<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A96E] to-[#A3B18A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
<div className="aspect-video overflow-hidden relative">
<img alt="Course" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" src="https://images.unsplash.com/photo-1767611132156-1f47af948d4c?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute top-4 left-4 bg-[#8BA7C7]/90 text-white text-[10px] px-3 py-1 rounded-full font-light tracking-wide">Certificate</span>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] uppercase tracking-wider text-[#A3B18A] font-light">Ayurveda</span>
<span className="w-1 h-1 rounded-full bg-zinc-200"></span>
<span className="text-[10px] uppercase tracking-wider text-zinc-400 font-light">All Levels</span>
</div>
<h4 className="font-newsreader font-light text-zinc-900 text-lg mb-2 leading-snug tracking-tight">Foundations of Ayurvedic Living</h4>
<p className="text-xs text-zinc-400 font-light mb-5">with Cate Stillman</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="13"></iconify-icon>
<span className="text-sm font-light text-zinc-700">4.8</span>
<span className="text-xs text-zinc-400">(198)</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear" width="13"></iconify-icon>
<span className="text-xs font-light">4 hrs</span>
</div>
</div>
</div>
</div>
<div className="reveal delay-300 card-hover group bg-white rounded-[1.8rem] overflow-hidden border border-zinc-100 cursor-pointer relative" onclick="showPage('courses')">
<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C9A96E] to-[#A3B18A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
<div className="aspect-video overflow-hidden relative">
<img alt="Course" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" src="https://images.unsplash.com/photo-1730672786064-c0836eeb41c2?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute top-4 left-4 bg-[#A3B18A]/90 text-white text-[10px] px-3 py-1 rounded-full font-light tracking-wide">YACEP Credits</span>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] uppercase tracking-wider text-[#A3B18A] font-light">Philosophy</span>
<span className="w-1 h-1 rounded-full bg-zinc-200"></span>
<span className="text-[10px] uppercase tracking-wider text-zinc-400 font-light">All Levels</span>
</div>
<h4 className="font-newsreader font-light text-zinc-900 text-lg mb-2 leading-snug tracking-tight">Yoga Sutras of Patanjali</h4>
<p className="text-xs text-zinc-400 font-light mb-5">with Pandit Rajmani Tigunait</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="13"></iconify-icon>
<span className="text-sm font-light text-zinc-700">5.0</span>
<span className="text-xs text-zinc-400">(421)</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear" width="13"></iconify-icon>
<span className="text-xs font-light">9 hrs</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden">
<div className="text-center mb-14 reveal px-6">
<h2 className="font-newsreader font-light text-zinc-900 tracking-tight mb-3" style={{fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)'}}>A Global Sangha</h2>
<p className="text-zinc-500 font-light text-sm">Over 1,000,000 practitioners. One shared rhythm.</p>
</div>
<div className="relative marquee-mask">
<div className="flex w-max animate-marquee mb-4">
<div className="flex gap-4 pr-4">
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1758885428976-dd612a7f3046?w=600&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1758599879513-9124e9718f2f?w=800&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1579566538197-a716d632210b?w=600&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1678506093268-4b114b4461cc?w=800&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1690149933431-fd701c9db018?w=800&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1701826510684-feb5d0c251da?w=800&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1758885428976-dd612a7f3046?w=600&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1650434951802-6f2d183b8ffe?w=800&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1701824429245-ce783f1dc026?w=800&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1752297852083-b8e8c04fa66e?w=800&amp;q=80"/>
</div>
<div className="flex gap-4 pr-4">
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1717839419301-75b91d4b5f7e?w=800&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1758885428976-dd612a7f3046?w=600&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=600&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1636141319019-eca800ba6d73?w=800&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1758599879067-f99a68ea57ee?w=800&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1758599881247-b7a28d9297e5?w=800&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1622025461364-717fd7e3344d?w=800&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1758885428976-dd612a7f3046?w=600&amp;q=80"/>
<img alt="" className="w-28 h-36 md:w-44 md:h-52 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1758885515623-4d8cfad47efb?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-0 opacity-30">
<div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#C9A96E]/10 rounded-full blur-[100px]"></div>
<div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#8BA7C7]/10 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="reveal text-center mb-16">
<span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-light mb-4 block">Membership</span>
<h2 className="font-newsreader font-light text-zinc-900 tracking-tight mb-4" style={{fontSize: 'clamp(1.8rem, 4vw, 3rem)'}}>Your Rhythm, Your Plan</h2>
<p className="text-zinc-500 font-light text-sm max-w-md mx-auto">Both plans include a full 7-day free trial. No commitment required.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12 gap-x-8 gap-y-8">

<div className="reveal border-gradient liquid-glass flex flex-col active bg-zinc-100 bg-cover bg-center rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 relative justify-between bg-[url(https://images.unsplash.com/photo-1528731708534-816fe59f90cb?w=1600&amp;q=80)]">
<div className="absolute -top-4 right-10 bg-zinc-900 text-white text-[10px] font-medium px-4 py-1.5 rounded-full uppercase tracking-widest font-sans">
                Save 40%
              </div>
<div className="">
<h3 className="text-xl text-zinc-900 mb-6 font-newsreader font-light">
                  Annual Ritual
                </h3>
<div className="flex items-start gap-1 mb-2">
<span className="text-zinc-500 mt-2 font-sans">$</span>
<span className="text-5xl md:text-6xl text-zinc-900 font-newsreader font-light">
                                      14.99
                                  </span>
<span className="text-sm text-zinc-500 font-light mt-auto mb-2 font-sans">
                                      / month
                                  </span>
</div>
<p className="text-xs text-zinc-500 mb-8 pb-8 border-b border-zinc-200/50 font-sans">
                  Billed once annually at $179.88
                </p>
<ul className="space-y-4 text-sm text-zinc-600 font-light mb-12">
<li className="flex items-start gap-3 font-sans">
<iconify-icon className="text-[#A3B18A] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
                    3000+ on-demand yoga practices
                  </li>
<li className="flex items-start gap-3 font-sans">
<iconify-icon className="text-[#A3B18A] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
                    700+ guided meditations
                  </li>
<li className="flex items-start gap-3 font-sans">
<iconify-icon className="text-[#A3B18A] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
                    Certification courses &amp; tracking
                  </li>
</ul>
</div>
<button className="w-full zen-btn text-xs font-sans">
                              Start 7-Day Free Trial
                          </button>
</div>

<div className="reveal delay-100 flex flex-col active bg-white border-zinc-100 border rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 shadow-sm justify-between">
<div className="">
<h3 className="text-xl text-zinc-900 mb-6 font-newsreader font-light">
                  Monthly Flow
                </h3>
<div className="flex gap-1 mb-2 gap-x-1 gap-y-1 items-start">
<span className="text-zinc-500 mt-2 font-sans">$</span>
<span className="text-5xl md:text-6xl text-zinc-900 font-newsreader font-light">
                                      24.99
                                  </span>
<span className="text-sm text-zinc-500 font-light mt-auto mb-2 font-sans">
                                      / month
                                  </span>
</div>
<p className="text-xs text-zinc-500 mb-8 pb-8 border-b border-zinc-100 font-sans">
                  Billed monthly, cancel anytime
                </p>
<ul className="space-y-4 text-sm text-zinc-600 font-light mb-12">
<li className="flex items-start gap-3 opacity-80 font-sans">
<iconify-icon className="text-zinc-300 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
                    3000+ on-demand yoga practices
                  </li>
<li className="flex items-start gap-3 opacity-80 font-sans">
<iconify-icon className="text-zinc-300 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
                    700+ guided meditations
                  </li>
</ul>
</div>
<button className="w-full bg-zinc-50 hover:bg-zinc-100 text-zinc-900 border border-zinc-200 uppercase tracking-widest text-xs py-4 rounded-full transition-colors mt-auto font-sans">
                              Start Free Trial
                          </button>
</div>
</div>
</div>

</section>

<footer className="bg-zinc-900 text-zinc-400 py-20 px-6 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#C9A96E]/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto pt-10 relative z-10 grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
<div className="col-span-2">
<span className="text-3xl font-newsreader italic text-[#C9A96E] tracking-tight block mb-5">Lunar<span className="not-italic font-light text-white"> Rhythm</span></span>
<p className="text-sm text-zinc-500 font-light max-w-xs leading-relaxed mb-8">Elevate your daily ritual with the world's most comprehensive digital yoga platform.</p>
<div className="flex gap-3">
<a className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-white transition-all duration-300" href="#"><iconify-icon icon="solar:camera-linear" width="16"></iconify-icon></a>
<a className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-white transition-all duration-300" href="#"><iconify-icon icon="solar:play-circle-linear" width="16"></iconify-icon></a>
<a className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-white transition-all duration-300" href="#"><iconify-icon icon="solar:letter-linear" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 mb-5 font-light">Explore</h5>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('classes')">Classes</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('courses')">Courses</a></li>
<li><a className="hover:text-white transition-colors" href="#" onclick="showPage('challenges')">Challenges</a></li>
</ul>
</div>
<div className="">
<h5 className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 mb-5 font-light">Company</h5>
<ul className="space-y-3 text-sm font-light">
<li className=""><a className="hover:text-white transition-colors" href="/about-us">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Teachers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h5 className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 mb-5 font-light">Legal</h5>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Support</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-zinc-600 relative z-10">
<span>© 2024 Lunar Rhythm. All Rights Reserved.</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#8BA7C7]" icon="solar:moon-sleep-linear" width="14"></iconify-icon>Designed for stillness</span>
</div>
</footer>
</div>


    </>
  );
}

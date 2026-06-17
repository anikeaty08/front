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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
base: {
bg: '#f4f3f0', // Warm white/paper
text: '#1a1a1a', // Soft black
muted: '#888888', // Faded gray
border: '#d1d1d1', // Muted silver
accent: '#a0b0c0' // Washed blue
}
},
transitionTimingFunction: {
'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

          if (!reduceMotion) {
              const observerOptions = {
                  root: null,
                  rootMargin: '0px 0px -10% 0px',
                  threshold: 0.1
              };

              const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          entry.target.classList.add('is-visible');
                      }
                  });
              }, observerOptions);

              const revealElements = document.querySelectorAll('.reveal-element');
              revealElements.forEach(el => observer.observe(el));

              // Mouse-reactive grain
              document.addEventListener('mousemove', (e) => {
                  const noise = document.querySelector('.bg-noise');
                  if (noise) {
                      const x = (e.clientX / window.innerWidth - 0.5) * 5;
                      const y = (e.clientY / window.innerHeight - 0.5) * 5;
                      noise.style.transform = `translate(${x}%, ${y}%)`;
                  }
              });
          }
      });
    


      (function(){var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;var start=Date.now();var timerEl=document.getElementById('lt-timer');var coordsEl=document.getElementById('lt-coords');var fragEl=document.getElementById('lt-fragment');var fragments=['the signal remembers what we forget','a frame still warm from 1998','someone left the lights on','dust settles on the lens','memory index expanding','an echo, slightly delayed','the archive is breathing','frame held, then released','silence between transmissions','geometry of an empty room'];var fi=0;function pad(n){return n<10?'0'+n:''+n}function tick(){var s=Math.floor((Date.now()-start)/1000);var h=Math.floor(s/3600),m=Math.floor((s%3600)/60),ss=s%60;if(timerEl)timerEl.textContent='T+'+pad(h)+':'+pad(m)+':'+pad(ss)}setInterval(tick,1000);tick();var mx=35.6895,my=139.6917;function updateCoords(){if(coordsEl)coordsEl.textContent='LAT '+mx.toFixed(4)+' / LNG '+my.toFixed(4)}updateCoords();document.addEventListener('mousemove',function(e){var nx=(e.clientX/window.innerWidth-0.5);var ny=(e.clientY/window.innerHeight-0.5);mx=35.6895+nx*0.5;my=139.6917+ny*0.5;updateCoords()},{passive:true});function rotateFragment(){if(!fragEl)return;fragEl.style.transition='opacity 1.6s ease';fragEl.style.opacity='0';setTimeout(function(){fi=(fi+1)%fragments.length;fragEl.textContent=fragments[fi];fragEl.style.opacity='1'},1600)}setInterval(rotateFragment,7000);if(!reduce){var imgs=document.querySelectorAll('main img');document.addEventListener('mousemove',function(e){var nx=(e.clientX/window.innerWidth-0.5);var ny=(e.clientY/window.innerHeight-0.5);imgs.forEach(function(img){var r=img.getBoundingClientRect();if(r.bottom<0||r.top>window.innerHeight)return;img.style.transform='translate3d('+(nx*-6).toFixed(2)+'px,'+(ny*-6).toFixed(2)+'px,0) scale(1.02)'})},{passive:true})}})();
    
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
      

<div className="grid-lines"></div>
<div className="bg-noise"></div>
<div className="crt-scanlines"></div>

<header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 text-base-text pointer-events-none text-[10px] font-mono uppercase tracking-widest bg-base-bg/80 backdrop-blur-md">
<div className="pointer-events-auto leading-tight tracking-[0.2em]">
        DIGITAL
        <br/>
        OBSCURA
      </div>
<nav className="hidden md:flex gap-12 pointer-events-auto">
<a className="relative inline-block hover:text-base-muted transition-all duration-500 ease-out after:content-[''] after:absolute after:w-full after:h-px after:bg-base-text after:-bottom-1 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-500 after:ease-expo hover:-translate-y-0.5" href="#gallery">
          Gallery
        </a>
<a className="relative inline-block hover:text-base-muted transition-all duration-500 ease-out after:content-[''] after:absolute after:w-full after:h-px after:bg-base-text after:-bottom-1 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-500 after:ease-expo hover:-translate-y-0.5" href="#archive">
          Archive
        </a>
<a className="relative inline-block hover:text-base-muted transition-all duration-500 ease-out after:content-[''] after:absolute after:w-full after:h-px after:bg-base-text after:-bottom-1 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-500 after:ease-expo hover:-translate-y-0.5" href="#studio">
          Studio
        </a>
<a className="relative inline-block hover:text-base-muted transition-all duration-500 ease-out after:content-[''] after:absolute after:w-full after:h-px after:bg-base-text after:-bottom-1 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-500 after:ease-expo hover:-translate-y-0.5" href="#contact">
          Contact
        </a>
</nav>
<div className="hidden md:flex gap-8 items-center pointer-events-auto text-right">
<span className="leading-tight">
          Studio for digital
          <br/>
          experiences
          <span className="block text-[8px] text-base-text/40 mt-1 tracking-widest">
            V_2.04
            <span className="ml-2 text-base-text/30">| SYS_ACTIVE</span>
</span>
</span>
<iconify-icon height="16" icon="solar:widget-3-linear" width="16"></iconify-icon>
</div>
<button className="md:hidden pointer-events-auto hover:text-base-muted transition-all duration-500 ease-expo hover:scale-110 transform">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>
<main className="">

<section className="relative min-h-screen flex flex-col md:flex-row px-6 pb-0 border-b border-base-border/50 pt-40">
<div className="w-full md:w-1/2 flex flex-col justify-between pr-8">
<div className="mt-12 md:mt-24 reveal-element" style={{transitionDelay: '0.4s'}}>
<p className="font-mono text-[10px] uppercase tracking-widest mb-16 text-base-muted">
              &gt; 05-23-17-09
              <span className="ml-4 opacity-50">SYS.STATUS: ONLINE</span>
</p>
<h1 className="font-sans tracking-tighter text-[5rem] md:text-8xl lg:text-[11rem] leading-[0.85] uppercase mb-16 text-base-text font-light">
              Digital
              <br/>
              Obscura
            </h1>
<p className="font-mono text-[10px] uppercase tracking-widest leading-loose max-w-xs mb-16 text-base-text/70">
              We document the invisible.
              <br/>
              Preserving the fragile architecture
              <br/>
              of memory before the signal fades.
            </p>
<a className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest pb-1 text-base-text relative group transition-all duration-500 ease-out hover:-translate-y-0.5 hover:text-base-muted after:content-[''] after:absolute after:w-full after:h-px after:bg-base-text after:bottom-0 after:left-0 after:scale-x-100 hover:after:scale-x-0 after:origin-right hover:after:origin-left after:transition-transform after:duration-500 after:ease-expo" href="#gallery">
              View Gallery
              <iconify-icon className="group-hover:translate-x-1 transition-transform duration-500 ease-expo" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="w-full md:w-1/2 relative h-[60vh] md:h-auto md:min-h-[85vh] mt-12 md:mt-0 pb-0 reveal-element is-visible" style={{transitionDelay: '0.3s'}}>
<img alt="Architecture" className="w-full h-full object-cover grayscale object-top cinematic-pan contrast-125 brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7482de0f-02b9-4af7-98f0-3f747e55f5fe_3840w.png"/>
<div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 font-mono text-[9px] text-white/50 tracking-widest z-10 pointer-events-none mix-blend-difference float-label-alt">
            LAT 35.6895 / LNG 139.6917
            <br/>
<span className="opacity-50 mt-1 block">
              SYNC: ACTIVE //
              <span className="blinking-rec inline-block w-1.5 h-1.5 bg-white/50 rounded-full ml-1"></span>
</span>
</div>
<div className="absolute top-4 left-4 font-mono text-[9px] text-white/70 tracking-widest z-10 flex items-center gap-2 mix-blend-difference float-label">
<div className="w-2 h-2 bg-red-500 rounded-full blinking-rec"></div>
            REC_01 // SIGNAL_ACTIVE
            <span className="ml-2 text-white/40 hidden md:inline">
              [DATA_STREAM_OPEN]
            </span>
</div>
</div>
<div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-base-muted">
          Scroll to explore
          <iconify-icon className="rotate-90" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
<div className="absolute bottom-8 left-6 font-mono text-[9px] text-base-text/30 tracking-[0.3em] uppercase pointer-events-none hidden md:block">
          SEQ_01 // SYSTEM_NOMINAL
        </div>
</section>
<section className="w-full overflow-hidden border-b border-base-border/50 py-5 bg-base-bg pointer-events-none select-none">
<div className="animate-archive-marquee opacity-40">
<div className="flex items-center pr-32 gap-32 font-mono text-[10px] font-thin uppercase tracking-[0.5em] text-base-text">
<span>DIGITAL MEMORY ARCHIVE</span>
<span>SIGNAL REMAINS ACTIVE</span>
<span>FRAGMENTS OF MODERNISM</span>
<span>TRANSMISSION / 1998</span>
<span>FUTURE NOSTALGIA</span>
<span>OBSERVATION UNIT 02</span>
<span>DIGITAL MEMORY ARCHIVE</span>
<span>SIGNAL REMAINS ACTIVE</span>
<span>FRAGMENTS OF MODERNISM</span>
<span>TRANSMISSION / 1998</span>
<span>FUTURE NOSTALGIA</span>
<span>OBSERVATION UNIT 02</span>
</div>
<div aria-hidden="true" className="flex items-center pr-32 gap-32 font-mono text-[10px] font-thin uppercase tracking-[0.5em] text-base-text">
<span>DIGITAL MEMORY ARCHIVE</span>
<span>SIGNAL REMAINS ACTIVE</span>
<span>FRAGMENTS OF MODERNISM</span>
<span>TRANSMISSION / 1998</span>
<span>FUTURE NOSTALGIA</span>
<span>OBSERVATION UNIT 02</span>
<span>DIGITAL MEMORY ARCHIVE</span>
<span>SIGNAL REMAINS ACTIVE</span>
<span>FRAGMENTS OF MODERNISM</span>
<span>TRANSMISSION / 1998</span>
<span>FUTURE NOSTALGIA</span>
<span>OBSERVATION UNIT 02</span>
</div>
</div>
</section>
<section className="py-32 md:py-48 px-6 bg-base-bg border-b border-base-border/50 relative overflow-hidden flex items-center justify-center cinematic-whitespace">
<div className="max-w-4xl mx-auto relative z-10 text-center reveal-element">
<p className="font-mono text-[10px] uppercase tracking-[0.3em] text-base-muted mb-12 float-label-alt">
            [ FRAGMENT // 0042 ]
          </p>
<h2 className="font-sans text-4xl md:text-6xl lg:text-[6.5rem] tracking-tighter leading-[1] text-base-text mb-16 font-light">
            What remains when
            <br/>
<span className="italic font-serif opacity-70">the signal</span>
            stops?
          </h2>
<div className="flex justify-center">
<div className="w-[1px] h-24 bg-base-text/20 mb-16"></div>
</div>
<p className="font-mono text-[10px] uppercase tracking-widest text-base-text/60 max-w-md mx-auto leading-loose">
            We are archeologists of the digital age. Every image is a ghost,
            every file a memory slowly degrading in the cold storage of a
            forgotten server.
          </p>
</div>
<div className="absolute top-12 left-12 font-mono text-[9px] text-base-text/30 tracking-widest uppercase pointer-events-none float-label hidden md:block">
          MEMORY INDEX ACTIVE
        </div>
</section>


<section className="py-24 px-6 border-b border-base-border/50 relative" id="gallery">
<div className="flex justify-between items-center mb-12 font-mono text-[10px] uppercase tracking-widest text-base-text">
<span>01 / Visual Evidence</span>
<a className="relative inline-flex items-center gap-2 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:text-base-muted after:content-[''] after:absolute after:w-full after:h-px after:bg-base-text after:-bottom-1 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-500 after:ease-expo" href="#">
            View all works +
          </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
<div className="relative aspect-[3/4] group overflow-hidden bg-base-border/20 reveal-element" style={{transitionDelay: '0.1s'}}>
<img alt="Gallery 1" className="w-full h-full object-cover grayscale transition-transform group-hover:scale-105 duration-[3000ms] ease-out contrast-125 brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7482de0f-02b9-4af7-98f0-3f747e55f5fe_3840w.png"/>
<span className="absolute bottom-4 left-4 font-mono text-[10px] text-white float-label">
              001
            </span>
<span className="absolute top-4 right-4 font-mono text-[8px] text-white/40 tracking-widest pointer-events-none float-label-alt">
              FRAME_01
            </span>
</div>
<div className="relative aspect-[3/4] group overflow-hidden bg-base-border/20 reveal-element" style={{transitionDelay: '0.3s'}}>
<img alt="Gallery 2" className="w-full h-full object-cover grayscale transition-transform group-hover:scale-105 duration-[3000ms] ease-out contrast-125 brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/369a9b30-1bd2-40ad-b27d-f766d399db30_3840w.png"/>
<span className="absolute bottom-4 left-4 font-mono text-[10px] text-white float-label-alt">
              002
            </span>
<span className="absolute top-4 right-4 font-mono text-[8px] text-white/40 tracking-widest pointer-events-none float-label">
              FRAME_02
            </span>
</div>
<div className="relative aspect-[3/4] group overflow-hidden bg-base-border/20 reveal-element" style={{transitionDelay: '0.5s'}}>
<img alt="Gallery 3" className="w-full h-full object-cover grayscale transition-transform group-hover:scale-105 duration-[3000ms] ease-out contrast-125 brightness-95" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute bottom-4 left-4 font-mono text-[10px] text-white float-label">
              003
            </span>
<span className="absolute top-4 right-4 font-mono text-[8px] text-white/40 tracking-widest pointer-events-none float-label-alt">
              FRAME_03
            </span>
</div>
<div className="relative aspect-[3/4] group overflow-hidden bg-base-border/20 reveal-element" style={{transitionDelay: '0.7s'}}>
<img alt="Gallery 4" className="w-full h-full object-cover grayscale transition-transform group-hover:scale-105 duration-[3000ms] ease-out contrast-125 brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03a0f5b8-e984-4a04-a5b7-2a785cfb6a49_3840w.png"/>
<span className="absolute bottom-4 left-4 font-mono text-[10px] text-white float-label-alt">
              004
            </span>
<span className="absolute top-4 right-4 font-mono text-[8px] text-white/40 tracking-widest pointer-events-none float-label">
              FRAME_04
            </span>
</div>
<div className="relative aspect-[3/4] group overflow-hidden bg-base-border/20 reveal-element" style={{transitionDelay: '0.9s'}}>
<img alt="Gallery 5" className="w-full h-full object-cover grayscale transition-transform group-hover:scale-105 duration-[3000ms] ease-out contrast-125 brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d641c89-3180-4914-b5f0-3071e69f3afd_3840w.png"/>
<span className="absolute bottom-4 left-4 font-mono text-[10px] text-white float-label">
              005
            </span>
<span className="absolute top-4 right-4 font-mono text-[8px] text-white/40 tracking-widest pointer-events-none float-label-alt">
              FRAME_05
            </span>
</div>
</div>
<div className="absolute top-1/2 left-4 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center font-mono text-[8px] text-base-text/20 tracking-[0.4em] uppercase pointer-events-none hidden md:block whitespace-nowrap">
          DATA_RECOVERY_IN_PROGRESS
        </div>
</section>

<section className="bg-[#ebeae6] px-6 relative py-40">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 order-2 md:order-1 reveal-element">
<p className="font-mono text-xs text-base-muted uppercase tracking-widest mb-8">
              Focus feature
              <span className="ml-4 opacity-50">UNIT_1996</span>
</p>
<h3 className="font-sans mb-8 font-light text-5xl md:text-6xl tracking-tighter leading-[1.1]">
              The geometry of absence.
            </h3>
<p className="font-sans font-light mb-10 max-w-md leading-relaxed text-lg md:text-xl text-base-text/70">
              Documenting structures that exist between utility and
              obsolescence. These spaces strip away human presence to reveal the
              underlying grid—a pure, indifferent aesthetic of concrete and
              light.
            </p>
<a className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-base-text border border-base-text relative overflow-hidden transition-all duration-500 ease-out hover:text-base-bg hover:border-base-text before:content-[''] before:absolute before:inset-0 before:bg-base-text before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:ease-expo hover:-translate-y-1 hover:shadow-xl hover:shadow-base-text/10 px-8 py-5" href="#">
<span className="relative z-10">View Complete Series</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform duration-500 ease-expo" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<div className="font-mono text-[9px] text-base-text/40 uppercase tracking-[0.2em] mt-16 border-t border-base-border/50 pt-4 max-w-[200px]">
              ARCHIVE ENTRY / 1998
              <br/>
<span className="opacity-60 mt-1 block">SEC_04 // LOC_UNKNOWN</span>
</div>
</div>
<div className="w-full md:w-1/2 order-1 md:order-2 reveal-element" style={{transitionDelay: '0.2s'}}>
<div className="img-wrapper aspect-square w-full rounded-sm relative">
<img alt="Abstract architectural staircase" className="w-full h-full object-cover grayscale contrast-125 brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d641c89-3180-4914-b5f0-3071e69f3afd_3840w.png"/>
<div className="absolute bottom-4 right-4 font-mono text-[9px] text-white/50 tracking-widest z-10 pointer-events-none mix-blend-difference float-label">
                MEMORY_INDEX_07
              </div>
</div>
</div>
</div>
</section>
<section className="px-6 border-b border-base-border/50 bg-base-bg flex justify-center items-center relative py-56 md:py-72">
<div className="reveal-element max-w-5xl mx-auto text-center">
<h2 className="font-sans tracking-tighter leading-[1.1] text-base-text mb-10 font-light text-5xl md:text-7xl lg:text-[6.5rem]">
            "The archive never
            <br/>
            fully disappears."
          </h2>
<p className="font-mono text-[10px] uppercase tracking-widest text-base-muted">
            SYS.LOG // GHOSTS_IN_THE_MACHINE
          </p>
</div>
<div className="absolute bottom-8 right-8 font-mono text-[8px] text-base-muted/40 uppercase tracking-[0.3em] pointer-events-none flex items-center gap-2 hidden md:flex">
<div className="w-1 h-1 bg-base-text/30 rounded-full blinking-rec"></div>
          TRANSMISSION LIVE
        </div>
</section>

<section className="py-24 px-6 border-b border-base-border/50 bg-base-bg">
<div className="mb-12 font-mono text-[10px] uppercase tracking-widest text-base-text">
<span>ARCHIVE_02 / MEMORY_UNIT</span>
</div>
<div className="flex flex-col md:flex-row gap-12 md:gap-24 reveal-element">
<div className="w-full md:w-1/2 relative aspect-[16/10] bg-gray-900 overflow-hidden group">
<img alt="Featured" className="w-full h-full object-cover grayscale opacity-80 transition-transform duration-[4000ms] ease-out group-hover:scale-105 group-hover:opacity-100 contrast-125 brightness-95" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-6 flex flex-col justify-between text-white font-mono text-[10px]">
<div className="group flex items-center gap-2 cursor-pointer transition-all duration-500 ease-out hover:text-white/70 hover:-translate-y-0.5">
                PLAY
                <iconify-icon className="group-hover:scale-110 transition-transform duration-500 ease-expo" icon="solar:play-bold"></iconify-icon>
</div>
<div className="flex justify-between items-end">
<div>
                  AM 11:00
                  <br/>
                  MAR. 23 1998
                </div>
<div className="grid grid-cols-3 gap-1 opacity-50">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center text-base-text">
<p className="font-mono text-[10px] uppercase tracking-widest mb-6 text-base-muted">
              Featured Project
              <span className="ml-4 opacity-50">SIGNAL/ACTIVE</span>
</p>
<div className="flex justify-between items-start mb-8 w-full border-b border-transparent">
<h3 className="font-sans tracking-tighter uppercase leading-none font-light text-4xl md:text-6xl lg:text-6xl">
                Echoes
                <br/>
                Of Silence
              </h3>
<span className="font-mono text-[10px] mt-2 whitespace-nowrap text-base-muted">
                1996 — 2024
              </span>
</div>
<p className="font-mono text-[10px] uppercase tracking-widest leading-loose max-w-sm mb-12 text-base-text/70">
              A visual journey through memory,
              <br/>
              analog fragments and digital landscapes.
            </p>
<a className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest pb-1 relative group transition-all duration-500 ease-out hover:-translate-y-0.5 hover:text-base-muted after:content-[''] after:absolute after:w-full after:h-px after:bg-base-text after:bottom-0 after:left-0 after:scale-x-100 hover:after:scale-x-0 after:origin-right hover:after:origin-left after:transition-transform after:duration-500 after:ease-expo self-start" href="#">
              View Project
              <iconify-icon className="group-hover:translate-x-1 transition-transform duration-500 ease-expo" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
<div className="font-mono text-[8px] text-base-muted/40 uppercase tracking-widest mt-auto pt-8 flex gap-8 hidden md:flex">
<span>LAT 40.7128</span>
<span>LNG -74.0060</span>
<span>SYNC: STABLE</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-base-border/50 bg-base-bg text-base-text relative" id="archive">
<div className="flex justify-between items-center mb-24 font-mono text-[10px] uppercase tracking-widest">
<span>04 / Core Memory Bank</span>
<a className="relative inline-flex items-center gap-2 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:text-base-muted after:content-[''] after:absolute after:w-full after:h-px after:bg-base-text after:-bottom-1 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-500 after:ease-expo" href="#">
            Browse Archive +
          </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 border-t border-base-border/50 pt-16">
<div className="flex flex-col border-l border-base-border/50 pl-4 lg:pl-6 reveal-element" style={{transitionDelay: '0.1s'}}>
<span className="font-mono text-[10px] text-base-muted mb-4">1996</span>
<span className="font-sans text-5xl lg:text-[5rem] tracking-tighter mb-8 font-light">
              96
            </span>
<span className="font-mono text-[9px] uppercase tracking-widest border-b border-base-text pb-1 inline-block self-start">
              Static Memories
            </span>
<span className="font-mono text-[8px] text-base-muted/40 mt-8 block uppercase tracking-widest pointer-events-none">
              SYS.LOG_96
            </span>
</div>
<div className="flex flex-col border-l border-base-border/50 pl-4 lg:pl-6 reveal-element" style={{transitionDelay: '0.2s'}}>
<span className="font-mono text-[10px] text-base-muted mb-4">1999</span>
<span className="font-sans text-5xl lg:text-[5rem] tracking-tighter mb-8 font-light">
              99
            </span>
<span className="font-mono text-[9px] uppercase tracking-widest border-b border-base-text pb-1 inline-block self-start">
              Digital Dreams
            </span>
<span className="font-mono text-[8px] text-base-muted/40 mt-8 block uppercase tracking-widest pointer-events-none">
              SYS.LOG_99
            </span>
</div>
<div className="flex flex-col border-l border-base-border/50 pl-4 lg:pl-6 reveal-element" style={{transitionDelay: '0.3s'}}>
<span className="font-mono text-[10px] text-base-muted mb-4">2002</span>
<span className="font-sans text-5xl lg:text-[5rem] tracking-tighter mb-8 font-light">
              02
            </span>
<span className="font-mono text-[9px] uppercase tracking-widest border-b border-base-text pb-1 inline-block self-start">
              Urban Fragments
            </span>
<span className="font-mono text-[8px] text-base-muted/40 mt-8 block uppercase tracking-widest pointer-events-none">
              SYS.LOG_02
            </span>
</div>
<div className="flex flex-col border-l border-base-border/50 pl-4 lg:pl-6 reveal-element" style={{transitionDelay: '0.4s'}}>
<span className="font-mono text-[10px] text-base-muted mb-4">2007</span>
<span className="font-sans text-5xl lg:text-[5rem] tracking-tighter mb-8 font-light">
              07
            </span>
<span className="font-mono text-[9px] uppercase tracking-widest border-b border-base-text pb-1 inline-block self-start">
              Glitch Poetry
            </span>
<span className="font-mono text-[8px] text-base-muted/40 mt-8 block uppercase tracking-widest pointer-events-none">
              SYS.LOG_07
            </span>
</div>
<div className="flex flex-col border-l border-base-border/50 pl-4 lg:pl-6 reveal-element" style={{transitionDelay: '0.5s'}}>
<span className="font-mono text-[10px] text-base-muted mb-4">2016</span>
<span className="font-sans text-5xl lg:text-[5rem] tracking-tighter mb-8 font-light">
              15
            </span>
<span className="font-mono text-[9px] uppercase tracking-widest border-b border-base-text pb-1 inline-block self-start">
              Future Nostalgia
            </span>
<span className="font-mono text-[8px] text-base-muted/40 mt-8 block uppercase tracking-widest pointer-events-none">
              SYS.LOG_15
            </span>
</div>
</div>
<div className="absolute top-32 right-6 font-mono text-[8px] text-base-text/30 uppercase tracking-[0.2em] pointer-events-none text-right hidden md:block">
          STORAGE_CAPACITY: 84%
          <br/>
          FRAGMENTS_RECOVERED: 1,402
        </div>
</section>
</main>

<footer className="bg-[#111] text-white px-6 relative pt-32 pb-12">
<div className="mb-32 font-mono text-[10px] uppercase tracking-widest text-white/50">
<span>
          05 / Contact
          <span className="ml-4 opacity-30">END_TRANSMISSION</span>
</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 border-b border-white/10 pb-24 reveal-element">
<div className="md:col-span-5">
<h2 className="font-sans text-5xl md:text-7xl lg:text-[6rem] tracking-tighter uppercase leading-[0.9] font-light">
            Initiate
            <br/>
            Transmission.
          </h2>
</div>
<div className="md:col-span-4 font-mono text-[10px] uppercase tracking-widest leading-loose text-white/70 flex flex-col justify-center">
<div className="mb-8">
<p className="text-white/40 mb-1">Email</p>
<p className="relative inline-block text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:text-white/80 after:content-[''] after:absolute after:w-full after:h-px after:bg-white after:-bottom-1 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-500 after:ease-expo cursor-pointer">
              hello@digitalobscura.studio
            </p>
</div>
<div className="mb-8">
<p className="text-white/40 mb-1">Instagram</p>
<p className="relative inline-block text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:text-white/80 after:content-[''] after:absolute after:w-full after:h-px after:bg-white after:-bottom-1 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-500 after:ease-expo cursor-pointer">
              @digitalobscura.studio
            </p>
</div>
<div>
<p className="text-white/40 mb-1">Location</p>
<p className="text-white">Worldwide</p>
</div>
</div>
<div className="md:col-span-3">
<img alt="Contact" className="w-full aspect-[4/3] object-cover grayscale opacity-80 contrast-125 brightness-95" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center font-mono text-[9px] text-white/40 uppercase tracking-widest">
<p className="mb-4 md:mb-0">© Digital Obscura Studio</p>
<p className="mb-4 md:mb-0">All Rights Reserved</p>
<p>1996 — 2024</p>
</div>
<div className="absolute top-12 right-6 font-mono text-[8px] text-white/20 uppercase tracking-[0.2em] hidden md:flex items-center gap-2">
<span className="w-1.5 h-1.5 border border-white/20 rounded-sm flex items-center justify-center p-[1px]">
<span className="w-full h-full bg-white/20 blinking-rec"></span>
</span>
        SIGNAL_STABLE
      </div>
</footer>


<div className="fixed-xh top-6 left-6 hidden md:block"></div>
<div className="fixed-xh top-6 right-6 hidden md:block"></div>
<div className="fixed-xh bottom-6 left-6 hidden md:block"></div>
<div className="fixed-xh bottom-6 right-6 hidden md:block"></div>
<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9997] pointer-events-none font-mono text-[9px] uppercase tracking-[0.35em] text-base-text/60 flex items-center gap-3 px-4 py-2 bg-base-bg/40 backdrop-blur-sm border border-base-border/40 rounded-sm hidden md:flex" id="live-transmission">
<span className="w-1.5 h-1.5 bg-red-500/70 rounded-full blinking-rec"></span>
<span>LIVE TRANSMISSION</span>
<span className="text-base-text/40">//</span>
<span className="text-base-text/50" id="lt-coords">
        LAT 00.0000 / LNG 0.0000
      </span>
<span className="text-base-text/40">//</span>
<span className="text-base-text/80" id="lt-timer">T+00:00:00</span>
<span className="text-base-text/40">//</span>
<span className="text-base-text/50 italic" id="lt-fragment">listening…</span>
</div>


    </>
  );
}

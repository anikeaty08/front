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



      // Initialize Lucide icons
      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal-hidden, .reveal-hidden-right').forEach(el => observer.observe(el));

        const parallaxEls = document.querySelectorAll('[data-parallax]');
        const onScroll = () => {
          const windowHeight = window.innerHeight;
          parallaxEls.forEach(el => {
            const parent = el.parentElement;
            const rect = parent.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
              const speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
              const elementCenter = rect.top + rect.height / 2;
              const viewportCenter = windowHeight / 2;
              const distance = elementCenter - viewportCenter;
              el.style.transform = `translateY(${distance * speed}px)`;
            }
          });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
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
      

<nav className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex items-center justify-between reveal-hidden">
<div className="flex items-center gap-12">
<a className="text-3xl tracking-tight font-google-sans-flex font-normal" href="#">
          Wilderness
        </a>
<div className="hidden md:flex items-center gap-8 text-base text-stone-500">
<a className="text-black transition-colors font-sans" href="#">Home</a>
<a className="hover:text-black transition-colors font-sans" href="#about">
            Program
          </a>
<a className="hover:text-black transition-colors font-sans" href="#benefits">
            Experience
          </a>
<a className="hover:text-black transition-colors font-sans" href="#gallery">
            Gallery
          </a>
<a className="hover:text-black transition-colors font-sans" href="#contact">
            Contact
          </a>
</div>
</div>
<div className="hidden lg:flex items-center gap-8">
<div className="flex items-center gap-4 text-base text-stone-600">
<span className="font-sans">EN</span>
<span className="font-sans">+1 (800) 123 4567</span>
</div>
<a className="bg-stone-800 text-white px-8 py-4 rounded-full text-base hover:bg-stone-700 transition-colors font-sans" href="#contact">
          Apply Now
        </a>
</div>
<button className="lg:hidden text-black">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<header className="max-w-[1400px] mx-auto px-4 lg:px-8 mb-32">
<div className="relative bg-stone-900 rounded-[2.5rem] overflow-hidden min-h-[85vh] flex flex-col justify-between p-8 lg:p-16">

<img alt="Cabin in woods" className="absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-50 mix-blend-overlay" data-parallax="0.2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd8a1bba-cb99-4a4b-b3a2-b7df9d4058ce_3840w.webp"/>

<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 reveal-hidden delay-100">
<div className="flex items-center gap-3 text-white/90 text-base">
<div className="w-2 h-2 rounded-full bg-white"></div>
<p className="font-sans">
              Discover structured outdoor experiences tailored for growth
            </p>
</div>
<div className="flex flex-wrap gap-3">
<span className="border border-white/30 bg-white/5 backdrop-blur-md rounded-full px-6 py-2.5 text-white/90 text-base font-sans">
              Leadership
            </span>
<span className="border border-white/30 bg-white/5 backdrop-blur-md rounded-full px-6 py-2.5 text-white/90 text-base font-sans">
              Mindfulness
            </span>
<span className="border border-white/30 bg-white/5 backdrop-blur-md rounded-full px-6 py-2.5 text-white/90 text-base font-sans">
              Resilience
            </span>
</div>
</div>

<div className="relative z-10 mt-auto mb-24 reveal-hidden delay-200">
<h1 className="text-6xl md:text-8xl lg:text-[7rem] text-white tracking-tight leading-[1.1] font-google-sans-flex font-normal">
<span className="font-google-sans-flex font-normal">
              Transformative
            </span>
            Journeys
            <br/>
<span className="text-white/90 font-google-sans-flex font-normal">
              —Await
            </span>
</h1>
<div className="absolute right-0 bottom-8 text-right hidden lg:block text-white/80 text-base leading-relaxed">
<p className="font-sans">Camp Tahoma</p>
<p className="font-sans">Adirondacks, NY</p>
<p className="font-sans">Est. 1998</p>
</div>
</div>

<div className="relative z-10 w-full backdrop-blur-md bg-black/40 border border-white/10 rounded-[2rem] p-3 flex flex-col lg:flex-row items-center gap-4 lg:gap-0 reveal-hidden delay-300">
<div className="w-full lg:w-1/4 px-6 py-4 flex flex-col gap-2">
<span className="text-white/60 text-sm font-sans">Next Session</span>
<span className="text-white text-lg font-google-sans-flex font-normal">
              Summer 2024
            </span>
</div>
<div className="hidden lg:block w-px h-16 bg-white/20"></div>
<div className="w-full lg:w-1/4 px-6 py-4 flex flex-col gap-2">
<span className="text-white/60 text-sm font-sans">Age Group</span>
<span className="text-white text-lg font-google-sans-flex font-normal">
              13 - 17 Years
            </span>
</div>
<div className="hidden lg:block w-px h-16 bg-white/20"></div>
<div className="w-full lg:w-1/4 px-6 py-4 flex flex-col gap-2">
<span className="text-white/60 text-sm font-sans">Duration</span>
<span className="text-white text-lg font-google-sans-flex font-normal">
              2 Weeks
            </span>
</div>
<div className="hidden lg:block w-px h-16 bg-white/20"></div>
<div className="w-full lg:w-1/4 px-6 py-4 flex flex-col gap-2">
<span className="text-white/60 text-sm font-sans">Availability</span>
<span className="text-white text-lg font-google-sans-flex font-normal">
              12 Spots Left
            </span>
</div>
<button className="w-full lg:w-auto mt-4 lg:mt-0 bg-white text-black px-8 py-5 rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors shrink-0">
<span className="text-base font-medium font-sans">Apply Now</span>
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 border-b border-gray-200" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

<div className="lg:col-span-4 flex flex-col justify-between reveal-hidden">
<h2 className="text-3xl tracking-tight mb-16 lg:mb-32 text-stone-500 font-google-sans-flex font-normal">
            /Our Mission
          </h2>
<p className="text-base text-stone-600 leading-relaxed font-sans">
            With a commitment to genuine growth, a wealth of outdoor expertise,
            and a caring approach, we assist teens in unplugging, exploring, and
            building the foundation that best fits their future goals.
          </p>
</div>

<div className="lg:col-span-8 flex flex-col justify-between items-start reveal-hidden delay-100">
<h3 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] tracking-tight leading-[1.1] mb-16 text-stone-900 font-google-sans-flex font-normal">
<span className="font-google-sans-flex font-normal">
              Finding the right path
            </span>
<br/>
            for your teen, whether it's building
            <span className="font-google-sans-flex font-normal">resilience</span>
            or making lifelong friends,
            <span className="font-google-sans-flex font-normal">made easy.</span>
</h3>
<a className="group flex items-center gap-4 text-base" href="#benefits">
<span className="font-medium font-sans">Learn more</span>
<div className="w-12 h-12 rounded-full bg-stone-800 text-white flex items-center justify-center group-hover:bg-stone-700 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 border-b border-gray-200" id="story">
<div className="flex flex-col items-center text-center mb-16 reveal-hidden">
<h2 className="text-3xl tracking-tight mb-12 text-stone-500 font-google-sans-flex font-normal">
          /The Program
        </h2>
<div className="flex items-center gap-4 border-b border-gray-200 w-full justify-center pb-4">
<button className="bg-stone-800 text-white px-8 py-3 rounded-full text-base font-sans">
            Overview
          </button>
<button className="text-stone-500 hover:text-stone-800 px-8 py-3 text-base transition-colors font-sans">
            Activities
          </button>
<button className="text-stone-500 hover:text-stone-800 px-8 py-3 text-base transition-colors font-sans">
            Outcomes
          </button>
<button className="text-stone-500 hover:text-stone-800 px-8 py-3 text-base transition-colors font-sans">
            Safety
          </button>
</div>
</div>
<div className="relative w-full h-[60vh] rounded-[2.5rem] overflow-hidden group reveal-hidden delay-100">
<img alt="Teens around campfire" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2437f706-5246-4054-b16b-87eb40388b28_3840w.webp"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute bottom-8 right-8">
<button className="bg-stone-900/50 backdrop-blur-md text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-stone-900/70 transition-colors">
<span className="text-base font-sans">View Schedule</span>
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<section className="bg-[#F0EDE6] py-32" id="benefits">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-stone-300 pb-16 mb-24 reveal-hidden">
<div className="col-span-1">
<h3 className="text-2xl tracking-tight mb-4 text-stone-900 font-google-sans-flex font-normal">
              Understand every
              <br/>
              aspect of the retreat
            </h3>
</div>
<div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<p className="text-sm text-stone-500 mb-2 font-sans">Location</p>
<p className="text-lg font-google-sans-flex font-normal text-stone-900">
                Adirondacks, NY
              </p>
</div>
<div>
<p className="text-sm text-stone-500 mb-2 font-sans">Duration</p>
<p className="text-lg font-google-sans-flex font-normal text-stone-900">
                14 Days
              </p>
</div>
<div>
<p className="text-sm text-stone-500 mb-2 font-sans">Staff Ratio</p>
<p className="text-lg font-google-sans-flex font-normal text-stone-900">
                1 : 4
              </p>
</div>
<div>
<p className="text-sm text-stone-500 mb-2 font-sans">Tech Policy</p>
<p className="text-lg font-google-sans-flex font-normal text-stone-900">
                Device-Free
              </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
<div className="lg:col-span-3 reveal-hidden">
<h3 className="text-4xl lg:text-5xl tracking-tight text-stone-900 leading-tight font-google-sans-flex font-normal">
<span className="font-google-sans-flex font-normal">1. Digital</span>
<br/>
              Detox &amp;
              <br/>
              Connection
            </h3>
</div>
<div className="lg:col-span-5 relative h-[500px] rounded-[2rem] overflow-hidden reveal-hidden delay-100">
<img alt="Hiking group" className="absolute -top-[20%] left-0 w-full h-[140%] object-cover" data-parallax="0.15" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/457795ee-2e6f-41a8-aaae-a74128eedee7/1600w.jpg"/>
</div>
<div className="lg:col-span-4 flex flex-col justify-center pl-0 lg:pl-12 reveal-hidden delay-200">
<p className="text-lg text-stone-600 leading-relaxed mb-12 font-google-sans-flex font-normal">
              Our program is designed around a complete disconnection from
              screens. This fosters genuine face-to-face interactions, allowing
              teens to develop authentic social skills and a profound
              appreciation for the natural environment surrounding them.
            </p>
<a className="group flex items-center gap-4 text-base w-fit" href="#">
<span className="font-medium font-sans">Learn more</span>
<div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center group-hover:bg-stone-700 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>
</div>
</div>

<div className="border-t border-stone-300">

<div className="group flex items-center py-8 border-b border-stone-300 hover:bg-stone-900/5 transition-colors cursor-pointer px-4 -mx-4 rounded-xl reveal-hidden">
<span className="w-12 text-base text-stone-400 font-medium font-sans">
              2
            </span>
<div className="w-20 h-20 rounded-full overflow-hidden mr-8 shrink-0">
<img alt="Yoga" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3c91e16-15ca-4fff-a3e8-00336ea6150d_320w.jpg"/>
</div>
<h4 className="text-3xl text-stone-900 tracking-tight flex-1 font-google-sans-flex font-normal">
              Mindfulness &amp; Mental Wellbeing
            </h4>
<i className="w-6 h-6 text-stone-400 group-hover:text-stone-900 transition-colors" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>

<div className="group flex items-center py-8 border-b border-stone-300 hover:bg-stone-900/5 transition-colors cursor-pointer px-4 -mx-4 rounded-xl reveal-hidden delay-100">
<span className="w-12 text-base text-stone-400 font-medium font-sans">
              3
            </span>
<div className="w-20 h-20 rounded-full overflow-hidden mr-8 shrink-0">
<img alt="Team building" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3b807f6-4ffa-4a8d-bf61-60c77849d225_320w.webp"/>
</div>
<h4 className="text-3xl text-stone-900 tracking-tight flex-1 font-google-sans-flex font-normal">
              Leadership Development
            </h4>
<i className="w-6 h-6 text-stone-400 group-hover:text-stone-900 transition-colors" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>

<div className="group flex items-center py-8 border-b border-stone-300 hover:bg-stone-900/5 transition-colors cursor-pointer px-4 -mx-4 rounded-xl reveal-hidden delay-200">
<span className="w-12 text-base text-stone-400 font-medium font-sans">
              4
            </span>
<div className="w-20 h-20 rounded-full overflow-hidden mr-8 shrink-0">
<img alt="Survival skills" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a8b44d7-0504-4c2a-92a7-1a5fa13a85c1_320w.webp"/>
</div>
<h4 className="text-3xl text-stone-900 tracking-tight flex-1 font-google-sans-flex font-normal">
              Wilderness Survival Skills
            </h4>
<i className="w-6 h-6 text-stone-400 group-hover:text-stone-900 transition-colors" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="mt-32 max-w-2xl reveal-hidden">
<h3 className="text-3xl tracking-tight mb-8 text-stone-900 font-google-sans-flex font-normal">
            Discover
          </h3>
<p className="text-lg text-stone-600 leading-relaxed font-google-sans-flex font-normal">
            From quiet solo reflections by the lake to navigating challenging
            group hikes, explore activities that aren't just passing time, but
            spaces where teens can build a lifetime of confidence and
            resilience.
          </p>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 border-b border-gray-200" id="testimonials">
<div className="max-w-4xl mx-auto text-center reveal-hidden">
<i className="w-12 h-12 mx-auto mb-12 text-stone-300" data-lucide="quote" strokeWidth="1"></i>
<h2 className="text-4xl md:text-5xl tracking-tight leading-tight mb-12 text-stone-900 font-google-sans-flex font-normal">
          "
          <span className="font-google-sans-flex font-normal">
            This retreat changed everything.
          </span>
          He came back more focused, communicative, and with a newfound
          appreciation for the simple things. The transformation was truly
          remarkable."
        </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
<img alt="Parent portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec6a5cab-715c-44c6-9cd8-aff440c886f6_320w.webp"/>
</div>
<div className="text-left">
<p className="text-base font-medium text-stone-900 font-sans">
              Sarah Jenkins
            </p>
<p className="text-sm text-stone-500 font-sans">
              Parent of 15-year-old
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden" id="gallery">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 flex justify-between items-end reveal-hidden">
<h2 className="text-4xl tracking-tight text-stone-900 font-google-sans-flex font-normal">
<span className="font-google-sans-flex font-normal">Moments</span>
          from the Wild
        </h2>
<button className="hidden md:flex items-center gap-3 text-base text-stone-600 hover:text-stone-900 transition-colors font-sans">
          View full gallery
          <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex gap-6 px-6 lg:px-12 overflow-x-auto no-scrollbar pb-8">
<div className="w-[80vw] md:w-[40vw] lg:w-[30vw] shrink-0 h-[500px] rounded-[2rem] overflow-hidden relative group reveal-hidden-right">
<img alt="Gallery image 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a576fc9c-9638-4d6c-a314-39e5324a86d4_1600w.webp"/>
</div>
<div className="w-[80vw] md:w-[40vw] lg:w-[30vw] shrink-0 h-[500px] rounded-[2rem] overflow-hidden relative group reveal-hidden-right delay-100">
<img alt="Gallery image 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c49c9b9-f1b2-4736-802e-5ffe8186e4f0_1600w.webp"/>
</div>
<div className="w-[80vw] md:w-[40vw] lg:w-[30vw] shrink-0 h-[500px] rounded-[2rem] overflow-hidden relative group reveal-hidden-right delay-200">
<img alt="Gallery image 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c468a5b-bac3-4c46-bbd7-11259371d88f_1600w.jpg"/>
</div>
<div className="w-[80vw] md:w-[40vw] lg:w-[30vw] shrink-0 h-[500px] rounded-[2rem] overflow-hidden relative group reveal-hidden-right delay-300">
<img alt="Gallery image 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/a9914b8f-ec55-4154-b3c4-fb88a1f8dd7e/1600w.png"/>
</div>
</div>
</section>

<section className="bg-stone-900 text-white pt-32 pb-12 mt-16 rounded-t-[3rem]" id="contact">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 border-b border-white/10 pb-32">
<div className="reveal-hidden">
<h2 className="text-5xl md:text-7xl tracking-tight leading-tight mb-8 font-google-sans-flex font-normal">
<span className="font-google-sans-flex font-normal">
                Ready to start
              </span>
<br/>
              the journey?
            </h2>
<p className="text-base text-white/70 mb-12 max-w-md font-google-sans-flex font-normal">
              Spaces are limited for our upcoming sessions. Request an
              application packet or schedule a call with our directors.
            </p>
<div className="flex flex-col sm:flex-row gap-6">
<div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-8 py-4 w-full sm:w-auto">
<i className="w-5 h-5 text-white/50" data-lucide="mail" strokeWidth="1.5"></i>
<input className="bg-transparent border-none outline-none text-white placeholder:text-white/50 w-full text-base" placeholder="Email address" type="email"/>
</div>
<button className="bg-white text-stone-900 px-10 py-4 rounded-full text-base font-medium hover:bg-stone-200 transition-colors whitespace-nowrap font-sans">
                Request Info
              </button>
</div>
</div>
<div className="flex flex-col justify-end gap-12 lg:pl-24 reveal-hidden delay-100">
<div>
<p className="text-white/50 text-base mb-2 font-sans">
                Call us directly
              </p>
<a className="text-2xl hover:text-white/80 transition-colors font-google-sans-flex font-normal" href="tel:+18001234567">
                +1 (800) 123 4567
              </a>
</div>
<div>
<p className="text-white/50 text-base mb-2 font-sans">
                Basecamp Location
              </p>
<p className="text-xl font-google-sans-flex font-normal">
                124 Wilderness Way
                <br/>
                Adirondack Park, NY 12946
              </p>
</div>
</div>
</div>

<footer className="flex flex-col md:flex-row justify-between items-center gap-8 reveal-hidden delay-200">
<div className="flex items-center gap-4">
<span className="text-2xl font-google-sans-flex font-normal">
              Wilderness
            </span>
<span className="text-white/40 text-sm font-sans">
              © 2024 All rights reserved.
            </span>
</div>
<div className="flex gap-8 text-white/60 text-base">
<a className="hover:text-white transition-colors font-sans" href="#">
              Instagram
            </a>
<a className="hover:text-white transition-colors font-sans" href="#">
              Facebook
            </a>
<a className="hover:text-white transition-colors font-sans" href="#">
              Terms
            </a>
<a className="hover:text-white transition-colors font-sans" href="#">
              Privacy
            </a>
</div>
</footer>
</div>
</section>



    </>
  );
}

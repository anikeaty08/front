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



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
      });
    


      (function () {
        const prevBtn = document.getElementById("tPrev");
        const nextBtn = document.getElementById("tNext");
        const avatarEl = document.getElementById("tAvatar");
        const quoteEl = document.getElementById("tQuote");
        const nameEl = document.getElementById("tName");
        const roleEl = document.getElementById("tRole");
        const dotsEl = document.getElementById("tDots");

        if (!prevBtn || !nextBtn || !avatarEl || !quoteEl || !nameEl || !roleEl || !dotsEl) return;

        const testimonials = [
          {
            avatar:
              "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
            quote:
              "Funalya completely revived my vintage denim jacket. The invisible mending is pure magic.",
            name: "Ava Thompson",
            role: "Sustainable Fashion Advocate",
          },
          {
            avatar:
              "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg",
            quote:
              "The sashiko stitching on my torn jeans turned a flaw into a beautiful feature. Highly recommend their services.",
            name: "Noah Patel",
            role: "Creative Director",
          },
          {
            avatar:
              "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp",
            quote:
              "I thought my favorite cashmere sweater was ruined by moths, but they restored it perfectly.",
            name: "Mia Laurent",
            role: "Verified Customer",
          },
          {
            avatar:
              "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
            quote:
              "Fast turnaround and excellent craftsmanship. Funalya makes sustainable fashion easy and accessible.",
            name: "Ethan Rivera",
            role: "Loyal Member",
          },
        ];

        let index = 0;

        function animateSwap() {
          const targets = [avatarEl, quoteEl, nameEl, roleEl, dotsEl];
          targets.forEach((el) => {
            el.style.transition = "opacity 240ms ease, transform 240ms ease";
            el.style.opacity = "0";
            el.style.transform = "translateY(6px)";
          });

          window.setTimeout(() => {
            render();
            targets.forEach((el) => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            });
          }, 220);
        }

        function renderDots() {
          dotsEl.innerHTML = "";
          testimonials.forEach((_, i) => {
            const b = document.createElement("button");
            b.type = "button";
            b.setAttribute("aria-label", `Go to testimonial ${i + 1}`);
            b.className =
              "h-2.5 rounded-full transition-all duration-300 " +
              (i === index ? "w-10 bg-gray-900" : "w-2.5 bg-gray-300 hover:bg-gray-400");
            b.addEventListener("click", () => {
              if (i === index) return;
              index = i;
              animateSwap();
            });
            dotsEl.appendChild(b);
          });
        }

        function render() {
          const t = testimonials[index];
          avatarEl.src = t.avatar;
          avatarEl.alt = `${t.name} avatar`;
          quoteEl.textContent = t.quote;
          nameEl.textContent = t.name;
          roleEl.textContent = t.role;
          renderDots();

          if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
          }
        }

        function next() {
          index = (index + 1) % testimonials.length;
          animateSwap();
        }
        function prev() {
          index = (index - 1 + testimonials.length) % testimonials.length;
          animateSwap();
        }

        nextBtn.addEventListener("click", next);
        prevBtn.addEventListener("click", prev);

        document.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight") next();
          if (e.key === "ArrowLeft") prev();
        });

        render();

        [avatarEl, quoteEl, nameEl, roleEl, dotsEl].forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-transparent">
<div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex-shrink-0">
<a className="flex items-center gap-3 hover:opacity-90 transition-opacity" href="#">
<svg className="text-[#1a1a9e]" fill="none" height="40" viewbox="0 0 36 44" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18 V10 A 6 6 0 0 1 24 10 V13" stroke="currentColor" strokeLinecap="round" strokeWidth="4.5"></path>
<path d="M6 18 H30 V34 A 6 6 0 0 1 24 40 H12 A 6 6 0 0 1 6 34 Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="4.5"></path>
<path d="M12 26 C14 31 22 31 24 26" stroke="#e62e2d" strokeLinecap="round" strokeWidth="4.5"></path>
</svg>
<div className="flex flex-col items-center">
<span className="text-[28px] font-bold text-[#1a1a9e] leading-[0.9] tracking-tight">
                Funalya
              </span>
<span className="text-[9px] font-bold text-white bg-[#e62e2d] px-2 py-[2px] rounded-sm mt-1.5 tracking-wider whitespace-nowrap">
                Craft. Create. Funalya.
              </span>
</div>
</a>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#">
            Features
          </a>
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#">
            How It Works
          </a>
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#">
            Reviews
          </a>
<a className="text-base font-normal text-gray-600 hover:text-black transition-colors" href="#">
            Pricing
          </a>
</div>

<div className="flex items-center gap-5">
<button className="text-gray-600 hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<div className="relative">
<button className="text-gray-600 hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</button>
<span className="absolute -top-1 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 text-[10px] font-medium text-gray-900">
              0
            </span>
</div>
</div>
</div>
</nav>

<main className="sm:px-6 max-w-[1440px] mr-auto ml-auto pr-4 pb-20 pl-4">

<div className="relative w-full rounded-[40px] sm:rounded-[60px] h-[700px] sm:h-[640px] overflow-hidden mt-4 ring-1 ring-black/5 isolate group shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)]">

<div className="absolute inset-0 z-0 overflow-hidden bg-blue-50">

<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-b to-transparent blur-[120px] opacity-60 animate-float-slow mix-blend-multiply from-blue-300 via-red-300"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr blur-[100px] opacity-50 animate-float-medium mix-blend-multiply from-red-400 via-blue-200 to-red-200"></div>
<div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full blur-[80px] opacity-40 animate-float-slow mix-blend-overlay bg-blue-200"></div>

<div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] rounded-full blur-[60px] animate-float-medium mix-blend-multiply bg-red-300/30"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMDUiIGQ9Ik00NC43LC03Ni40QzU4LjksLTY5LjIsNzEuOCwtNTkuMSw4MS4zLC00LjVDOTQuNywxMC4yLDg2LjMsMjQuNyw3NS42LDM3LjJDNjQuOSw0OS43LDUxLjksNjAuMiwzNy42LDY3LjRDMjMuMyw3NC42LDcuNyw3OC41LC02LjgsNzYuM0MtMjEuMyw3NC4xLC0zNC43LDY1LjgsLTQ2LjgsNTUuMUMtNTguOSw0NC40LC02OS43LDMxLjMsLTc1LjEsMTYuOEMtODAuNSwyLjMsLTgwLjUsLTEzLjYsLTc0LjEsLTI3LjJDLTY3LjksLTQwLjgsLTU1LjMsLTUyLjEsLTQyLjMsLTYwLjFDLTI5LjIsLTY4LjEsLTE1LjcsLTcyLjgsMCwtNzZMMCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwIDEwMCkiIC8+PC9zdmc+')] bg-cover opacity-30 mix-blend-soft-light animate-pulse"></div>
</div>

<div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-20">
<a className="group flex items-center gap-2 bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/50 pl-5 pr-3 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md" href="#">
<span className="text-sm font-medium text-gray-800">
              Explore Our Repair Tools
            </span>
<span className="bg-white rounded-full p-1.5 group-hover:bg-gray-50 transition-colors">
<i className="w-3.5 h-3.5 text-black" data-lucide="arrow-up-right"></i>
</span>
</a>
</div>

<div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-8 sm:px-12 md:px-20 z-10 w-full h-full">

<div className="flex flex-col justify-center items-start max-w-2xl lg:max-w-xl z-20 pt-20 lg:pt-0">

<div className="animate-fade-in-up">
<div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full px-4 py-1.5 mb-8 shadow-sm">
<i className="w-3.5 h-3.5 text-gray-900 fill-current" data-lucide="shopping-bag"></i>
<span className="text-xs font-medium text-gray-800 tracking-wide">
                  Sustainable Clothing Repair
                </span>
</div>
</div>

<h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl md:text-[5rem] leading-[1.05] font-semibold text-gray-900 tracking-tighter mb-6">
              Repair More.
              <span className="text-red-600 relative inline-block">
                Replace Less.
              </span>
</h1>

<p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg font-normal mb-10">
              Small holes, thinning fabric, and worn spots don't have to mean
              the end of a garment. Funalya makes it easier to repair,
              reinforce, and preserve the clothing and textiles you already
              own—so favorite pieces can keep being worn, used, and appreciated.
            </p>

<div className="animate-fade-in-up delay-300">
<a className="group inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full font-medium text-base shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] bg-red-600 text-white shadow-red-900/20 hover:bg-red-700" href="https://www.amazon.com/dp/B0DSCCFQ4N" target="_blank">
<span className="">Shop on Amazon</span>
<div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-red-500 group-hover:bg-red-400">
<i className="w-5 h-5 text-white" data-lucide="move-up-right"></i>
</div>
</a>
</div>
</div>

<div className="hidden lg:flex w-1/2 h-full relative items-center justify-center [perspective:1600px] z-10">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
<div className="w-[600px] h-[600px] rounded-full border border-white/30 animate-[spin_40s_linear_infinite] relative opacity-70">
<div className="absolute -top-1 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.9)]"></div>
</div>
</div>

<div className="relative w-[380px] h-[520px] animate-float-showcase group cursor-pointer [transform-style:preserve-3d]">

<div className="relative w-full h-full transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-style:preserve-3d] [transform:rotateY(-12deg)_rotateX(6deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.02)]">

<div className="absolute inset-0 bg-gradient-to-br rounded-[32px] opacity-60 -z-10 [transform:translateZ(-50px)_translateX(20px)_translateY(20px)] border border-white/40 blur-[1px] from-blue-200 via-white to-red-200"></div>

<div className="absolute inset-0 bg-white/65 backdrop-blur-2xl rounded-[32px] border border-white/60 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden [transform:translateZ(0px)]">

<div className="h-12 border-b border-white/40 flex items-center justify-between px-5 bg-white/30">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] border border-black/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] border border-black/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28C840] border border-black/5"></div>
</div>
<div className="px-3 py-1 rounded-full bg-white/50 border border-white/40 text-[10px] font-medium text-gray-500 flex items-center gap-1.5 shadow-sm">
<i className="w-2.5 h-2.5 text-gray-400" data-lucide="lock"></i>
                      funalya.com
                    </div>
</div>

<div className="p-5 flex-1 flex flex-col">

<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-white/50 shadow-inner group-hover:shadow-md transition-all duration-500">
<img alt="Product Showcase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/148e3583-9d12-46e2-bdc9-ab2736f2a3b9_800w.webp"/>

<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/60 shadow-sm text-red-600">
                        New
                      </div>
</div>

<div className="mt-5 space-y-3">
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-semibold text-gray-900 leading-tight">
                            14-Hook Darning Kit
                          </h3>
<p className="text-sm text-gray-500 mt-1">
                            Repair holes in clothing and textiles. Reinforce
                            worn or thinning areas. Extend the life of
                            frequently used garments.
                          </p>
</div>
<span className="text-base font-semibold text-gray-900">
                          $26.99
                        </span>
</div>
<a className="w-full py-2.5 mt-2 text-white rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/10 active:scale-95 group/btn bg-blue-600 hover:bg-blue-700" href="https://www.amazon.com/dp/B0DSCCFQ4N" target="_blank">
<span>Buy on Amazon</span>
<svg className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-y-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="absolute -left-10 bottom-24 bg-white/80 backdrop-blur-xl pl-3 pr-5 py-3 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-white/60 flex items-center gap-3 [transform:translateZ(40px)] transition-transform duration-500 group-hover:[transform:translateZ(60px)]">
<div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 ring-4 ring-white/50">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-gray-900">
                      Order Placed
                    </span>
<span className="text-[10px] text-gray-500">
                      Just now from USA
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mt-24 mt-16 pr-4 pl-4">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-transparent reveal-on-scroll">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Some Things Are Worth Repairing
            </h2>
<p className="text-lg text-gray-500 mt-3 font-normal leading-relaxed">
              A favorite sweater. A well-worn pair of socks. A handmade gift. A
              garment that has been with you through years of everyday life.
            </p>
</div>
<div className="flex-shrink-0 mb-1">
<a className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:opacity-70 transition-opacity" href="#">
              Explore Our Repair Tools
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="relative aspect-square rounded-[32px] overflow-hidden mb-6 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 bg-gray-100">
<img alt="Retro Handheld Console" className="hover:scale-105 transition-transform duration-500 opacity-90 w-full h-full drop-shadow-lg object-cover" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&amp;w=1972&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-5 right-5 w-12 h-12 bg-[#ECE5F5] rounded-full flex items-center justify-center text-gray-900 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:scale-110">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="space-y-1">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                A Small Hole Can Lead to a Big Decision
              </h3>
<p className="text-base font-normal text-gray-700">
                It starts with a loose thread. Then a thin patch. Then a small
                hole in a sweater, sock, or knit garment. Replacing it may feel
                wasteful.
              </p>
<p className="text-sm font-normal text-gray-500">
                Ignoring it means the repair becomes harder later.
              </p>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="relative aspect-square rounded-[32px] overflow-hidden mb-6 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 bg-gray-100">
<img alt="Horizon Glow Sneakers" className="hover:scale-105 transition-transform duration-500 w-full h-full drop-shadow-xl object-cover" src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-5 right-5 w-12 h-12 bg-[#ECE5F5] rounded-full flex items-center justify-center text-gray-900 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:scale-110">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="space-y-1">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                Give Your Garments Another Chapter
              </h3>
<p className="text-base font-normal text-gray-700">
                Funalya repair tools help transform worn areas into usable,
                reinforced sections that can continue serving their purpose.
              </p>
<p className="text-sm font-normal text-gray-500">
                Making the most of what you already own.
              </p>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-300">
<div className="relative aspect-square rounded-[32px] overflow-hidden mb-6 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 bg-gray-100">
<img alt="Tropical Paradise Plant" className="hover:scale-105 transition-transform duration-500 w-full h-full drop-shadow-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a661f0d-8ad1-4e3c-aa46-c05854d59df4_800w.webp"/>
<div className="absolute bottom-5 right-5 w-12 h-12 bg-[#ECE5F5] rounded-full flex items-center justify-center text-gray-900 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:scale-110">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="space-y-1">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                Repairing Should Be Approachable
              </h3>
<p className="text-base font-normal text-gray-700">
                Many people want to repair their clothing. They just need a
                practical way to get started.
              </p>
<p className="text-sm font-normal text-gray-500">
                Our tools help people restore worn textiles easily.
              </p>
</div>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-4 sm:px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 leading-[1.05]">
              Product Showcase
            </h2>
<p className="text-lg text-gray-500 mt-4 font-normal leading-relaxed">
              Designed for the everyday reality of worn sleeves, damaged socks,
              and thinning knitwear.
            </p>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-full transition-all" href="https://www.amazon.com/dp/B0DSCCFQ4N" target="_blank">
            Shop on Amazon
            <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-auto">

<a className="flex flex-col group cursor-pointer reveal-on-scroll delay-100 h-full" href="https://www.amazon.com/dp/B0DSCCFQ4N" target="_blank">
<div className="relative w-full aspect-square sm:aspect-[4/3] rounded-[40px] overflow-hidden mb-6 bg-gray-100">
<img alt="14-Hook Darning Kit" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/148e3583-9d12-46e2-bdc9-ab2736f2a3b9_800w.webp"/>
<div className="absolute top-6 right-6 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="flex flex-col px-2 flex-1">
<div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-[10px] font-bold tracking-wider uppercase mb-4 w-max">
                Everyday Wear
              </div>
<h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-3 group-hover:text-red-600 transition-colors">
                14-Hook Darning Kit
              </h3>
<p className="text-gray-500 text-base font-normal leading-relaxed">
                A Simple Way to Repair Everyday Wear. The 14-Hook Darning Kit
                helps create structured repairs for damaged or weakened fabric
                areas, making it easier to restore garments that still have
                plenty of life left.
              </p>
</div>
</a>

<a className="flex flex-col group cursor-pointer reveal-on-scroll delay-200 h-full" href="https://www.amazon.com/dp/B0GSCN18F9" target="_blank">
<div className="relative w-full aspect-square sm:aspect-[4/3] rounded-[40px] overflow-hidden mb-6 bg-gray-100">
<img alt="21-Hook Speed Loom" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9a79114-a222-40c5-bfc7-a4059c0aae21_1600w.jpg"/>
<label className="absolute top-6 left-6 z-20 cursor-pointer inline-flex items-center gap-2 px-3 py-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-normal tracking-wider uppercase hover:bg-black/60 transition-all duration-300">
<svg className="lucide lucide-image-plus w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
<line x1="16" x2="22" y1="5" y2="5"></line>
<line x1="19" x2="19" y1="2" y2="8"></line>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
<span>Upload Background</span>
<input accept="image/*" className="hidden" onchange="if(this.files &amp;&amp; this.files[0]){const reader=new FileReader();reader.onload=(e)=&gt;{this.closest('a').querySelector('img').src=e.target.result};reader.readAsDataURL(this.files[0]);}" type="file"/>
</label>
<div className="absolute top-6 right-6 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="flex flex-col px-2 flex-1">
<div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider uppercase mb-4 w-max">
                Larger Repairs
              </div>
<h3 className="text-2xl sm:text-3xl font-medium text-gray-900 tracking-tight mb-3 group-hover:text-red-600 hover:text-red-600 transition-colors">
                21-Hook Speed Loom
              </h3>
<p className="text-gray-500 text-base font-normal leading-relaxed">
                Cover Larger Repairs with Greater Efficiency. The 21-Hook Speed
                Loom provides a larger repair surface, helping users tackle
                broader worn areas and recurring mending projects with
                confidence.
              </p>
</div>
</a>
</div>
</div>

<div className="sm:px-6 mt-12 pr-4 pl-4">
<div className="md:h-[600px] overflow-hidden group cursor-pointer shadow-gray-200 reveal-on-scroll w-full h-[500px] rounded-[40px] relative shadow-2xl">

<img alt="Action Shot" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute bottom-0 left-0 w-full p-8 md:p-14">
<h2 className="text-4xl sm:text-5xl md:text-[4rem] leading-[1.05] font-semibold text-white tracking-tighter max-w-3xl">
              Why Repair Instead of Replace?
            </h2>
</div>

<div className="absolute top-8 right-8 z-20">
<button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-105">
<svg className="w-4 h-4 text-black" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" width="4" x="6" y="4"></rect>
<rect height="16" width="4" x="14" y="4"></rect>
</svg>
</button>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Repair Tools Designed for Real Life
          </h2>
<p className="text-lg text-gray-500 mt-4 font-normal leading-relaxed">
            Every product in the Funalya collection serves a single purpose:
            helping people restore, reinforce, and extend the life of textiles
            they already own.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-[32px] p-8 sm:p-10 flex flex-col items-start h-full reveal-on-scroll delay-100 bg-blue-50/50">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-blue-100">
<i className="w-5 h-5 text-gray-900 fill-black" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">
              Accessible
            </h3>
<p className="text-base text-gray-500 leading-relaxed">
              Whether you're new to mending or already enjoy textile crafts,
              Funalya tools help make clothing repair feel approachable.
            </p>
</div>

<div className="rounded-[32px] p-8 sm:p-10 flex flex-col items-start h-full reveal-on-scroll delay-200 bg-blue-50/50">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-blue-100">
<div className="w-4 h-4 bg-gray-900 rotate-45 rounded-[1px]"></div>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">
              Beginner-Friendly
            </h3>
<p className="text-base text-gray-500 leading-relaxed">
              You don't need a closet full of sewing supplies to start caring
              for your clothing.
            </p>
</div>

<div className="rounded-[32px] p-8 sm:p-10 flex flex-col items-start h-full reveal-on-scroll delay-300 bg-blue-50/50">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-blue-100">
<i className="w-5 h-5 text-gray-900 fill-black" data-lucide="fast-forward"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">
              Useful Again and Again
            </h3>
<p className="text-base text-gray-500 leading-relaxed">
              Clothing maintenance isn't a one-time project. Our tools are
              designed for people who want repair to become part of how they
              care for garments.
            </p>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-4 sm:px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              A Straightforward Approach
            </h2>
<p className="text-lg text-gray-500 mt-3 font-normal leading-relaxed">
              At Funalya, we believe trust comes from clarity.
            </p>
</div>
<div className="flex-shrink-0 mb-1">
<a className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:opacity-70 transition-opacity" href="https://www.amazon.com/dp/B0DSCCFQ4N" target="_blank">
              Shop on Amazon
              <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group relative w-full bg-[#FAFAFF] rounded-[40px] overflow-hidden flex flex-col lg:flex-row min-h-[500px] mb-6 border border-gray-100/50 shadow-sm reveal-on-scroll delay-100">

<div className="relative w-full lg:w-[55%] min-h-[300px] lg:min-h-full overflow-hidden">

<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-xs font-semibold text-gray-900 tracking-wide border border-white/50 shadow-sm">
                Our Philosophy
              </span>
</div>
<img alt="Abstract Gradient" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="w-full lg:w-[45%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative bg-[#FAFAFF]">
<h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.05] font-semibold text-gray-900 tracking-tight mb-6">
              Built Around Repair
            </h3>
<p className="text-lg text-gray-500 leading-relaxed mb-12 font-normal">
              We don't ask you to replace more. We don't encourage throwing away
              garments that still have life left. Our focus is simple: providing
              tools that help people repair worn textiles and keep using the
              items they value. No complicated systems. No unnecessary extras.
              Just practical tools for people who repair.
            </p>
<div className="mt-auto flex items-center justify-between w-full">
<div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer bg-blue-50 group-hover:bg-blue-100 group-hover:text-blue-900">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-5 bg-blue-50">
<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-gray-900 tracking-wide shadow-sm">
                  Save Money
                </span>
</div>
<img alt="Mobile" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f870fa0-1fa4-4845-bf04-6732d79259fa_1600w.webp"/>
</div>
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-snug group-hover:text-gray-600 transition-colors">
              Replacing clothing adds up over time. Repairing usable garments
              can help extend their lifespan.
            </h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-5 bg-blue-50">
<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/-sm">
                  Reduce Waste
                </span>
</div>
<img alt="Office" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/200577ff-3f6e-422c-8ade-a219fc9f50eb_1600w.webp"/>
</div>
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-snug group-hover:text-gray-600 transition-colors">
              Many textiles are discarded while most of the item remains
              perfectly functional.
            </h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-300">
<div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-5 bg-blue-50">
<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-gray-900 tracking-wide shadow-sm">
                  Preserve What Matters
                </span>
</div>
<img alt="Workspace" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/487671ad-0426-4ad1-b21a-1f74d3ae5c31_1600w.jpg"/>
</div>
<h4 className="text-xl font-semibold text-gray-900 tracking-tight leading-snug group-hover:text-gray-600 transition-colors">
              Some garments carry memories. Repairing allows pieces to remain
              part of everyday life.
            </h4>
</div>
</div>
</div>

<div className="sm:mt-32 mt-20">
<div className="relative w-full bg-[#FAFAFF] rounded-[40px] px-6 py-20 sm:py-28 overflow-hidden reveal-on-scroll" id="testimonial">

<div className="absolute top-8 right-8 flex gap-3 z-10">
<button aria-label="Previous testimonial" className="w-10 h-10 rounded-full bg-white/50 hover:bg-white border border-transparent hover:border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all duration-200" id="tPrev" type="button">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button aria-label="Next testimonial" className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-900 transition-all duration-200 bg-blue-50 hover:bg-blue-100 border-blue-100/50" id="tNext" type="button">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">

<div className="mb-10">
<img alt="Ava Thompson avatar" className="w-20 h-20 rounded-full object-cover shadow-sm ring-4 ring-white" id="tAvatar" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<h2 className="text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.05] font-semibold text-gray-900 tracking-tighter mb-10 max-w-3xl" id="tQuote">Funalya completely revived my vintage denim jacket. The invisible mending is pure magic.</h2>

<div className="flex flex-col items-center gap-3 mb-16">
<div className="flex gap-1 text-black" id="tStars">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<span className="text-base text-gray-500 font-medium" id="tName">Ava Thompson</span>
<span className="text-xs text-gray-400 font-medium" id="tRole">Sustainable Fashion Advocate</span>
</div>

<div aria-label="Testimonial pagination" className="flex items-center gap-2 mb-10" id="tDots"><button aria-label="Go to testimonial 1" className="h-2.5 rounded-full transition-all duration-300 w-10 bg-gray-900" type="button"></button><button aria-label="Go to testimonial 2" className="h-2.5 rounded-full transition-all duration-300 w-2.5 bg-gray-300 hover:bg-gray-400" type="button"></button><button aria-label="Go to testimonial 3" className="h-2.5 rounded-full transition-all duration-300 w-2.5 bg-gray-300 hover:bg-gray-400" type="button"></button><button aria-label="Go to testimonial 4" className="h-2.5 rounded-full transition-all duration-300 w-2.5 bg-gray-300 hover:bg-gray-400" type="button"></button></div>

<div className="w-full flex flex-col items-center">
<p className="text-sm text-gray-400 font-normal mb-8">
                Trusted by sustainable fashion brands and everyday wearers:
              </p>
<div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-80 grayscale">
<div className="h-6 flex items-center">
<span className="text-xl font-sans font-bold tracking-[0.2em] text-gray-800">
                    MILANO
                  </span>
</div>
<div className="h-6 flex items-center gap-2">
<svg className="w-6 h-6 fill-gray-900" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
</svg>
<span className="text-xl font-sans font-bold tracking-tight text-gray-900">
                    Amsterdam
                  </span>
</div>
<div className="h-6 flex items-center">
<span className="text-2xl font-serif font-bold text-gray-900">
                    venice.
                  </span>
</div>
<div className="h-8 flex items-center">
<svg className="text-gray-800" fill="none" height="32" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 40">
<path d="M10,25 Q20,10 30,25 T50,25 T70,20 T90,30" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="h-8 flex items-center">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-gray-400/50"></div>
<div className="w-6 h-6 rounded-t-full bg-gray-800"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="sm:mt-32 mt-20 px-4 sm:px-6 reveal-on-scroll">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Ready to Start Repairing?
            </h2>
<p className="text-lg text-gray-500 mt-4 font-normal leading-relaxed">
              Every garment tells a story. Choose the tool that fits your needs,
              start restoring damaged areas, and keep useful garments in
              circulation longer.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="rounded-[32px] p-8 sm:p-10 flex flex-col border border-transparent transition-colors bg-blue-50 hover:border-blue-200">
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                14-Hook Darning Kit
              </h3>
<p className="text-gray-500 mt-2 text-sm">
                A Simple Way to Repair Everyday Wear
              </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-gray-700 text-sm">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Repair holes in clothing and textiles
                </li>
<li className="flex items-center gap-3 text-gray-700 text-sm">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Reinforce worn or thinning areas
                </li>
<li className="flex items-center gap-3 text-gray-700 text-sm">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Extend the life of frequently used garments
                </li>
</ul>
<a className="w-full py-3 px-4 bg-white border border-gray-200 text-gray-900 rounded-xl text-sm font-medium text-center hover:bg-gray-50 transition-colors" href="https://www.amazon.com/dp/B0DSCCFQ4N" target="_blank">
                Shop 14-Hook Kit on Amazon
              </a>
</div>
<div className="rounded-[32px] p-8 sm:p-10 flex flex-col relative overflow-hidden shadow-2xl bg-[#0F4C81]">
<div className="absolute top-0 right-0 w-64 h-64 blur-[60px] rounded-full pointer-events-none bg-blue-900/30"></div>
<div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium tracking-wider uppercase mb-4 self-start border border-white/20">
                Larger Repairs
              </div>
<h3 className="text-2xl font-semibold text-white tracking-tight">
                21-Hook Speed Loom
              </h3>
<p className="text-gray-400 mt-2 text-sm">
                Cover Larger Repairs with Greater Efficiency
              </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-gray-300 text-sm">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Repair and reinforce damaged fabric
                </li>
<li className="flex items-center gap-3 text-gray-300 text-sm">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Handle larger worn sections
                </li>
<li className="flex items-center gap-3 text-gray-300 text-sm">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Support recurring garment maintenance
                </li>
<li className="flex items-center gap-3 text-gray-300 text-sm">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Help reduce the need for premature replacement
                </li>
</ul>
<a className="w-full py-3 px-4 bg-white text-gray-900 rounded-xl text-sm font-medium text-center hover:bg-gray-100 transition-colors z-10" href="https://www.amazon.com/dp/B0GSCN18F9" target="_blank">
                Shop 21-Hook Loom on Amazon
              </a>
</div>
</div>
</div>
</div>
<div className="mt-24 sm:mt-32 px-4 sm:px-6 reveal-on-scroll">
<div className="max-w-4xl mx-auto rounded-[40px] p-8 sm:p-12 lg:p-16 border bg-[#FAFAFF] border-gray-100 shadow-sm flex flex-col gap-10">
<div className="text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
<div>
<h4 className="text-base font-semibold text-gray-900">
                1. Do I need previous repair or sewing experience?
              </h4>
<p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                No. Many people begin repairing clothing with little or no prior
                experience. Funalya tools are intended to make garment repair
                more approachable for everyday users.
              </p>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900">
                2. What kinds of items can be repaired?
              </h4>
<p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                These tools can be used for repairing and reinforcing garments
                and textiles such as sweaters, socks, knitwear, clothing, and
                other fabric items with worn or damaged areas.
              </p>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900">
                3. What's the difference between the 14-Hook and 21-Hook?
              </h4>
<p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                Both tools support textile repair and reinforcement. The primary
                difference is size, allowing users to choose the option that
                best suits their repair projects and preferred workflow.
              </p>
</div>
<div className="">
<h4 className="text-base font-semibold text-gray-900">
                4. Can I repair small holes?
              </h4>
<p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                Yes. Both tools can be used to address small damaged areas
                before they become larger problems.
              </p>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900">
                5. Can these tools help reinforce thinning fabric?
              </h4>
<p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                Yes. In addition to repairing holes, they can be used to
                strengthen worn areas that may be vulnerable to future damage.
              </p>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900">
                6. Are these tools only for knitwear?
              </h4>
<p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                No. While many users repair sweaters, socks, and knit garments,
                the tools can also be used on a variety of textile repair
                projects.
              </p>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900">
                7. Will repaired garments look exactly like new?
              </h4>
<p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                Repairs are intended to restore usefulness and extend garment
                life. The appearance of the finished repair will vary depending
                on the fabric, damage, materials used, and individual technique.
              </p>
</div>
<div className="">
<h4 className="text-base font-semibold text-gray-900">
                8. Why repair clothing instead of replacing it?
              </h4>
<p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                Repairing can help extend garment life, reduce waste, preserve
                meaningful items, and potentially lower the need for replacement
                purchases.
              </p>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900">
                9. Can these tools be used repeatedly?
              </h4>
<p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                Yes. They are designed for ongoing clothing maintenance and
                recurring repair projects.
              </p>
</div>
<div>
<h4 className="text-base font-semibold text-gray-900">
                10. How does clothing repair support sustainability?
              </h4>
<p className="text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                Repairing garments helps keep usable textiles in service longer,
                reducing the number of items that are discarded due to minor
                damage or wear.
              </p>
</div>
</div>
</div>
</div>
<div className="relative mt-24 sm:mt-32">

<div className="absolute -inset-1 bg-gradient-to-r rounded-[44px] sm:rounded-[64px] blur-2xl opacity-40 from-blue-500/20 via-red-500/20 to-blue-300/20"></div>

<footer className="relative rounded-[40px] sm:rounded-[60px] overflow-hidden text-white shadow-2xl ring-1 ring-white/10 reveal-on-scroll bg-[#0F4C81]">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] blur-[120px] rounded-full pointer-events-none mix-blend-screen bg-red-900/20"></div>
<div className="px-8 py-16 sm:px-16 sm:py-24 relative z-10">
<div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">

<div className="max-w-sm">
<a className="flex items-center gap-3 mb-6 hover:opacity-90 transition-opacity" href="#">
<svg className="text-white" fill="none" height="40" viewbox="0 0 36 44" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18 V10 A 6 6 0 0 1 24 10 V13" stroke="currentColor" strokeLinecap="round" strokeWidth="4.5"></path>
<path d="M6 18 H30 V34 A 6 6 0 0 1 24 40 H12 A 6 6 0 0 1 6 34 Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="4.5"></path>
<path d="M12 26 C14 31 22 31 24 26" stroke="#e62e2d" strokeLinecap="round" strokeWidth="4.5"></path>
</svg>
<div className="flex flex-col items-center">
<span className="text-[28px] font-bold text-white leading-[0.9] tracking-tight">
                      Funalya
                    </span>
<span className="text-[9px] font-bold text-white bg-[#e62e2d] px-2 py-[2px] rounded-sm mt-1.5 tracking-wider whitespace-nowrap">
                      Craft. Create. Funalya.
                    </span>
</div>
</a>
<p className="text-gray-400 text-base leading-relaxed mb-8 font-normal">
                  Empowering your digital storefront with modern design, fluid
                  animations, and powerful features.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all text-white border border-white/5" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all text-white border border-white/5" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all text-white border border-white/5" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-10 flex-1">
<div className="">
<h4 className="font-medium text-white mb-6">Platform</h4>
<ul className="space-y-4 text-sm text-gray-400 font-normal">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                        Templates
                      </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                        Pricing
                      </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                        Features
                      </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                        Integrations
                      </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-white mb-6">Company</h4>
<ul className="space-y-4 text-sm text-gray-400 font-normal">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                        About Us
                      </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                        Careers
                      </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                        Blog
                      </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                        Contact
                      </a>
</li>
</ul>
</div>
<div className="col-span-2 sm:col-span-1">
<h4 className="font-medium text-white mb-6">Stay updated</h4>
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none transition-colors focus:border-blue-500/50" placeholder="email@domain.com" type="email"/>
<button className="absolute right-2 top-2 p-1.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors shadow-lg">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row border-white/5 border-t mt-20 pt-8 gap-x-6 gap-y-6 items-center justify-between">
<p className="text-sm text-gray-500 font-normal">
                © 2024 Vantage Template. All rights reserved.
              </p>
<div className="flex gap-8 text-sm text-gray-500 font-medium">
<a className="hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
<a className="hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
</div>
</div>
</div>

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-[0.02] select-none pointer-events-none whitespace-nowrap">
<span className="text-[12rem] sm:text-[18rem] font-bold tracking-tighter leading-none">
              Funalya
            </span>
</div>
</footer>
</div>
</main>





    </>
  );
}

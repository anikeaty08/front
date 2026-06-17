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



      const menuButton = document.getElementById("menuButton");
      const mobileMenu = document.getElementById("mobileMenu");

      menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      document.querySelectorAll("#mobileMenu a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
        });
      });

      lucide.createIcons({
        attrs: {
          "stroke-width": 1.5
        }
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
      
<style id="kava-modern-polish">
      :root { color-scheme: dark; } ::selection { background: rgba(254, 243, 199, 0.25); color: #fef3c7; } body { background: radial-gradient(circle at 15% 10%, rgba(251, 191, 36, 0.12), transparent 32rem), radial-gradient(circle at 85% 8%, rgba(120, 53, 15, 0.18), transparent 34rem), #0d0906; } body::before { content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: 0.075; mix-blend-mode: soft-light; background-image: url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27 viewBox=%270 0 120 120%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27120%27 height=%27120%27 filter=%27url(%23n)%27 opacity=%270.42%27/%3E%3C/svg%3E'); } section[id] { position: relative; } section[id]::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; pointer-events: none; background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.22), transparent); } .modern-edge { box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22); } .kava-glow { box-shadow: 0 28px 90px rgba(146, 64, 14, 0.28), inset 0 1px 0 rgba(255,255,255,0.08); } .kava-card { position: relative; overflow: hidden; } .kava-card::before { content: ''; position: absolute; inset: -1px; pointer-events: none; background: linear-gradient(135deg, rgba(254,243,199,0.20), transparent 38%, rgba(251,191,36,0.08)); opacity: 0.8; } .kava-outline-text { -webkit-text-stroke: 1px rgba(254, 243, 199, 0.38); color: transparent; } .slow-drift { transform: translate3d(0,0,0); } @media (prefers-reduced-motion: no-preference) { .slow-drift { animation: slowDrift 18s ease-in-out infinite alternate; } @keyframes slowDrift { from { transform: translate3d(-1.5%, -1%, 0) scale(1.03); } to { transform: translate3d(1.5%, 1%, 0) scale(1.08); } } } *, *::before, *::after { border-radius: 0 !important; }
    </style>
<div className="relative min-h-screen overflow-hidden">
<header className="fixed inset-x-0 top-0 z-50 border-b border-amber-100/10 bg-[#100c08]/80 shadow-[0_1px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
<a className="flex items-center gap-3" href="#">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/30 bg-amber-100/10">
<i className="h-5 w-5 text-amber-100" data-lucide="coffee"></i>
</span>
<span className="text-xl tracking-tight text-amber-50 font-geist">
              KÁVA &amp; Co. Coffee
            </span>
</a>
<div className="hidden gap-8 md:flex uppercase tracking-widest gap-x-8 gap-y-8 items-center">
<a className="text-sm font-medium text-amber-50/80 transition hover:text-amber-100 font-syne" href="#about">
              About
            </a>
<a className="text-sm font-medium text-amber-50/80 transition hover:text-amber-100 font-syne" href="#menu">
              Menu
            </a>
<a className="text-sm font-medium text-amber-50/80 transition hover:text-amber-100 font-syne" href="#reviews">
              Reviews
            </a>
<a className="text-sm font-medium text-amber-50/80 transition hover:text-amber-100 font-syne" href="#visit">
              Locations
            </a>
</div>
<div className="hidden gap-3 md:flex gap-x-3 gap-y-3 items-center">
<a aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-100/30 bg-amber-100/10 text-amber-50 transition hover:bg-amber-100/20 hover:text-white" href="https://www.facebook.com/">
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24">
<path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z"></path>
</svg>
</a>
<a aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-100/30 bg-amber-100/10 text-amber-50 transition hover:bg-amber-100/20 hover:text-white" href="https://www.instagram.com/">
<svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<rect height="18" rx="5" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="4"></circle>
<circle cx="17.5" cy="6.5" fill="currentColor" r="1" stroke="none"></circle>
</svg>
</a>
<a className="rounded-full bg-amber-100 px-5 py-2.5 text-sm font-medium text-stone-950 shadow-sm shadow-amber-950/20 transition hover:bg-amber-50 font-syne" href="tel:2509292739">
              Contact
            </a>
</div>
<button aria-label="Open menu" className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-100/20 bg-white/5 text-amber-50 md:hidden" id="menuButton">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</nav>
<div className="hidden border-t border-amber-100/15 bg-[#100c08]/95 px-5 py-5 md:hidden" id="mobileMenu">
<div className="flex flex-col gap-4">
<a className="text-base font-medium text-amber-50/85 font-syne" href="#about">
              About
            </a>
<a className="text-base font-medium text-amber-50/85 font-syne" href="#menu">
              Menu
            </a>
<a className="text-base font-medium text-amber-50/85 font-syne" href="#suggestions">
              Today's suggestions
            </a>
<a className="text-base font-medium text-amber-50/85 font-syne" href="#visit">
              Locations
            </a>
<a className="text-base font-medium text-amber-50/85 font-syne" href="#reviews">
              Reviews
            </a>
<a className="text-base font-medium text-amber-50/85 font-syne" href="#visit">
              Contact
            </a>
<a className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-100 px-5 py-3 text-sm font-semibold text-stone-950 font-syne" href="tel:2509292739">
              Call (250) 929-2739
            </a>
</div>
</div>
</header>
<main className="">
<section className="relative min-h-screen overflow-hidden">
<div className="absolute inset-0">
<img alt="Modern coffee shop counter with warm sunlight and espresso service" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf52d560-0bd7-452d-a97a-5f07172d5c29_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-black/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#100c08]/95 via-transparent to-black/10"></div>
</div>
<div className="pointer-events-none absolute inset-0 hidden lg:block">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(254,243,199,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(254,243,199,0.055)_1px,transparent_1px)] bg-[size:96px_96px] opacity-40"></div>
<div className="absolute left-10 top-28 h-[calc(100%-10rem)] border-l border-amber-100/25"></div>
<div className="absolute bottom-20 left-10 text-[10px] font-semibold uppercase tracking-[0.45em] text-amber-100/55 [writing-mode:vertical-rl] font-syne">
              Mill Bay Coffee
            </div>
<div className="absolute left-1/2 top-0 h-full border-l border-amber-100/30"></div>
<div className="absolute bottom-[32%] left-0 right-0 border-t border-amber-100/25"></div>
</div>
<div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-5 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
<div className="max-w-5xl">
<h1 className="max-w-5xl text-5xl tracking-tight text-amber-100 sm:text-7xl lg:text-8xl font-geist">
                A New Era of Coffee
                <br/>
                in Mill Bay
              </h1>
</div>
<div className="grid gap-6 lg:grid-cols-2 lg:items-end">
<div className="modern-edge border border-amber-100/15 border-l-4 border-l-amber-200/70 bg-[#100c08]/55 p-6 backdrop-blur-xl lg:max-w-xl">
<p className="text-lg leading-8 text-amber-50/82 font-syne">
                  KÁVA &amp; Co. is a family-owned café in Mill Bay Centre
                  serving locally roasted coffee, fresh baking, breakfast,
                  lunch, and dietary-friendly options.
                </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-3 bg-amber-100 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-stone-950 transition hover:bg-amber-50 font-syne" href="#visit">
                    Contact us
                    <span className="h-2 w-2 rounded-full bg-stone-950"></span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-100/25 bg-white/10 px-6 py-3 text-sm font-semibold text-amber-50 transition hover:bg-white/15 font-syne" href="#menu">
                    View menu
                    <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-[#f4eadc] py-20 text-stone-950 sm:py-28" id="about">
<div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-300/35 blur-3xl"></div>
<div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-200/45 blur-3xl"></div>
<div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
<div className="">
<p className="text-sm font-medium uppercase tracking-widest text-stone-600 font-syne">
                  Welcome to KÁVA &amp; Co. Coffee
                </p>
<h2 className="mt-4 text-4xl tracking-tight text-stone-950 sm:text-5xl font-geist">
                  A vibrant Mill Bay café for coffee, chai, smoothies, teas, and
                  pastry.
                </h2>
<p className="mt-6 text-lg leading-8 text-stone-600 font-syne">
                  A welcoming community gem known for quality, modern style, and
                  an easy menu for quick stops or relaxed work sessions.
                </p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="border border-stone-950/10 border-l-4 border-l-stone-950 bg-white/70 p-5 shadow-sm">
<i className="h-5 w-5 text-amber-100" data-lucide="clock-3"></i>
<h3 className="mt-4 text-lg font-medium text-stone-950 font-syne">
                      Stylish place to stay
                    </h3>
<p className="mt-2 text-base leading-7 text-stone-600 font-syne">
                      Settle in for work, conversation, or a quiet reset in a
                      bright café with warm service.
                    </p>
</div>
<div className="border border-stone-950/10 border-l-4 border-l-stone-950 bg-white/70 p-5 shadow-sm">
<i className="h-5 w-5 text-amber-100" data-lucide="donut"></i>
<h3 className="mt-4 text-lg font-medium text-stone-950 font-syne">
                      Fresh pastry counter
                    </h3>
<p className="mt-2 text-base leading-7 text-stone-600 font-syne">
                      Croissants, muffins, scones, danishes, cookies, buns,
                      tarts, and donut days while they last.
                    </p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 rounded-[2rem] border border-stone-950/10 bg-white/20"></div>
<img alt="Coffee and pastries on a cafe table" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-stone-950/20 sm:aspect-[5/4] lg:aspect-[4/5]" src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&amp;fit=crop&amp;w=1400&amp;q=90"/>
<div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-stone-950/10 bg-[#fff8ed]/85 p-5 shadow-xl shadow-stone-950/10 backdrop-blur-xl">
<div className="flex items-start justify-between gap-5">
<div>
<p className="text-sm font-normal text-stone-600 font-syne">
                        Price range
                      </p>
<p className="mt-1 text-3xl tracking-tight text-stone-950 font-geist">
                        $10–20
                      </p>
</div>
<div className="rounded-full bg-stone-950/10 p-3">
<i className="h-5 w-5 text-amber-100" data-lucide="receipt"></i>
</div>
</div>
<p className="mt-3 text-base leading-7 text-stone-600 font-syne">
                    Coffee, baked goods, breakfast, or lunch per person.
                  </p>
</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-[#120d08] py-20 sm:py-28" id="ritual">
<div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"></div>
<div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
<div className="">
<p className="text-sm font-semibold uppercase tracking-widest text-amber-200/80 font-syne">
                  Our approach
                </p>
<h2 className="mt-4 text-4xl tracking-tight text-amber-50 sm:text-5xl font-geist">
                  Coffee, food, and good energy.
                </h2>
</div>
<p className="text-lg leading-8 text-stone-300 font-syne">
                At 2720 Mill Bay Rd #120, this charming shop brings together
                fresh drinks, homemade soups, treats, and friendly service.
              </p>
</div>
<div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
<div className="kava-glow relative min-h-[34rem] overflow-hidden rounded-[2rem] border border-amber-100/15 bg-stone-950">
<img alt="Fresh espresso being prepared at a coffee bar" className="slow-drift h-full min-h-[34rem] w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&amp;fit=crop&amp;w=1600&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
<p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-100/75 font-syne">
                    Freshness / care / community
                  </p>
<p className="mt-3 max-w-xl text-3xl tracking-tight text-amber-50 sm:text-4xl font-geist">
                    A gratifying coffee experience in every cup.
                  </p>
</div>
</div>
<div className="grid gap-5">
<article className="kava-card rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6">
<div className="relative">
<i className="h-6 w-6 text-amber-100" data-lucide="sparkles"></i>
<h3 className="mt-5 text-2xl tracking-tight text-amber-50 font-geist">
                      Exceptional beverages
                    </h3>
<p className="mt-3 text-base leading-7 text-stone-400 font-syne">
                      Rich espresso, Iced Chai Lattes, teas, smoothies, and café
                      favourites for every visit.
                    </p>
</div>
</article>
<article className="kava-card rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6">
<div className="relative">
<i className="h-6 w-6 text-amber-100" data-lucide="croissant"></i>
<h3 className="mt-5 text-2xl tracking-tight text-amber-50 font-geist">
                      Homemade soups &amp; lunch
                    </h3>
<p className="mt-3 text-base leading-7 text-stone-400 font-syne">
                      Soups, sandwiches, breakfast bites, and easy lunches make
                      the café a practical stop.
                    </p>
</div>
</article>
<article className="kava-card rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6">
<div className="relative">
<i className="h-6 w-6 text-amber-100" data-lucide="sandwich"></i>
<h3 className="mt-5 text-2xl tracking-tight text-amber-50 font-geist">
                      Beloved community gem
                    </h3>
<p className="mt-3 text-base leading-7 text-stone-400 font-syne">
                      A warm Mill Bay meeting place where guests can pause,
                      work, relax, and feel welcome.
                    </p>
</div>
</article>
</div>
</div>
<div className="mt-10 overflow-hidden rounded-full border border-amber-100/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-amber-100/70">
<div className="flex min-w-max gap-8">
<span className="font-syne">Locally roasted</span>
<span className="font-syne">Fresh baked</span>
<span className="font-syne">Family owned</span>
<span className="font-syne">Vegan options</span>
<span className="font-syne">Gluten-free choices</span>
<span className="font-syne">Donut days</span>
</div>
</div>
</div>
</section>
<section className="bg-[linear-gradient(135deg,#f4eadc_0%,#fff8ed_48%,#ead8bd_100%)] py-20 text-stone-950 sm:py-28" id="menu">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-medium uppercase tracking-widest text-stone-600 font-syne">
                Menu
              </p>
<h2 className="mt-4 text-4xl tracking-tight sm:text-5xl font-geist">
                Coffee, specialty drinks, soups, sandwiches, and a full pastry
                case.
              </h2>
<p className="mt-5 text-lg leading-8 text-stone-600 font-syne">
                Explore café favourites for mornings, afternoon breaks, and
                dietary-friendly stops.
              </p>
</div>
<div className="mt-14 grid gap-5 md:grid-cols-3">
<div className="group relative overflow-hidden rounded-[2rem] border border-stone-950/10 bg-stone-950 shadow-2xl shadow-stone-950/10">
<img alt="Fresh butter croissants in a cafe pastry case" className="h-72 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 sm:h-80" src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&amp;fit=crop&amp;w=1000&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-100/80 font-syne">
                    Flaky
                  </p>
<p className="mt-2 text-2xl tracking-tight text-amber-50 font-geist">
                    Croissants &amp; danishes
                  </p>
</div>
</div>
<div className="group relative overflow-hidden rounded-[2rem] border border-stone-950/10 bg-stone-950 shadow-2xl shadow-stone-950/10 md:translate-y-8">
<img alt="Assorted fresh pastries on a bakery counter" className="h-72 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 sm:h-80" src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&amp;fit=crop&amp;w=1000&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-100/80 font-syne">
                    Daily case
                  </p>
<p className="mt-2 text-2xl tracking-tight text-amber-50 font-geist">
                    Muffins, scones &amp; cookies
                  </p>
</div>
</div>
<div className="group relative overflow-hidden rounded-[2rem] border border-stone-950/10 bg-stone-950 shadow-2xl shadow-stone-950/10">
<img alt="Sweet fruit tarts and bakery treats arranged for service" className="h-72 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 sm:h-80" src="https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&amp;fit=crop&amp;w=1000&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-100/80 font-syne">
                    Sweet
                  </p>
<p className="mt-2 text-2xl tracking-tight text-amber-50 font-geist">
                    Tarts, buns &amp; treats
                  </p>
</div>
</div>
</div>
<div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
<article className="group relative overflow-hidden border border-stone-950/10 border-l-4 border-l-stone-950 bg-gradient-to-br from-white via-white to-stone-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-950/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-amber-50">
<i className="h-6 w-6" data-lucide="coffee"></i>
</div>
<h3 className="mt-6 text-xl tracking-tight font-geist">
                  Coffee classics
                </h3>
<p className="mt-3 text-base leading-7 text-stone-600 font-syne">
                  Americano, brewed coffee, espresso drinks, and warm staples
                  prepared with care.
                </p>
</article>
<article className="group relative overflow-hidden border border-stone-950/10 border-l-4 border-l-stone-950 bg-gradient-to-br from-white via-white to-stone-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-950/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-amber-50">
<i className="h-6 w-6 text-amber-100" data-lucide="croissant"></i>
</div>
<h3 className="mt-6 text-xl tracking-tight font-geist">
                  More pastries
                </h3>
<p className="mt-3 text-base leading-7 text-stone-600 font-syne">
                  Croissants, scones, muffins, cookies, buns, tarts, vegan
                  choices, and gluten-free treats.
                </p>
</article>
<article className="group relative overflow-hidden border border-stone-950/10 border-l-4 border-l-stone-950 bg-gradient-to-br from-white via-white to-stone-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-950/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-amber-50">
<i className="h-6 w-6 text-amber-100" data-lucide="sandwich"></i>
</div>
<h3 className="mt-6 text-xl tracking-tight font-geist">
                  Chai, teas &amp; smoothies
                </h3>
<p className="mt-3 text-base leading-7 text-stone-600 font-syne">
                  Iced Chai Lattes, teas, smoothies, iced tea, and refreshing
                  blended drinks.
                </p>
</article>
<article className="group relative overflow-hidden border border-stone-950/10 border-l-4 border-l-stone-950 bg-gradient-to-br from-white via-white to-stone-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-950/10">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-amber-50">
<i className="h-6 w-6" data-lucide="badge-check"></i>
</div>
<h3 className="mt-6 text-xl tracking-tight font-geist">
                  Soups, breakfast &amp; lunch
                </h3>
<p className="mt-3 text-base leading-7 text-stone-600 font-syne">
                  Homemade soups, fresh sandwiches, and simple meals inside Mill
                  Bay Shopping Centre.
                </p>
</article>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
<div className="border border-stone-950/10 bg-white/70 p-4">
<p className="text-sm font-medium uppercase tracking-widest text-stone-500 font-syne">
                  Fresh case
                </p>
<p className="mt-2 text-lg tracking-tight font-geist">
                  Butter croissants &amp; danishes
                </p>
</div>
<div className="border border-stone-950/10 bg-white/70 p-4">
<p className="text-sm font-medium uppercase tracking-widest text-stone-500 font-syne">
                  Bakery
                </p>
<p className="mt-2 text-lg tracking-tight font-geist">
                  Muffins, scones &amp; cookies
                </p>
</div>
<div className="border border-stone-950/10 bg-white/70 p-4">
<p className="text-sm font-medium uppercase tracking-widest text-stone-500 font-syne">
                  Sweet case
                </p>
<p className="mt-2 text-lg tracking-tight font-geist">
                  Cinnamon buns &amp; fruit tarts
                </p>
</div>
<div className="border border-stone-950/10 bg-white/70 p-4">
<p className="text-sm font-medium uppercase tracking-widest text-stone-500 font-syne">
                  Special days
                </p>
<p className="mt-2 text-lg tracking-tight font-geist">
                  Friday &amp; Sunday donuts
                </p>
</div>
</div>
<div className="mt-12 bg-stone-950 p-6 text-amber-50 shadow-2xl shadow-stone-950/20 sm:p-8 lg:flex lg:items-center lg:justify-between">
<div>
<h3 className="text-2xl tracking-tight font-geist">
                  Dietary-friendly cafe options
                </h3>
<p className="mt-2 text-base leading-7 text-amber-50/70 font-syne">
                  Ask about vegan and gluten-free baked goods, sandwiches, and
                  snacks available today.
                </p>
</div>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-amber-100 px-6 py-3 text-sm font-medium text-stone-950 lg:mt-0 font-syne" href="tel:2509292739">
                Call ahead
                <i className="h-4 w-4" data-lucide="phone"></i>
</a>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-[#0d0906] py-20 sm:py-28" id="suggestions">
<div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-orange-800/20 blur-3xl"></div>
<div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"></div>
<div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
<div className="">
<p className="text-sm font-semibold uppercase tracking-widest text-amber-200/80 font-syne">
                  Daily board
                </p>
<h2 className="mt-4 text-4xl tracking-tight text-amber-50 sm:text-5xl font-geist">
                  Details that make the stop memorable.
                </h2>
</div>
<p className="text-lg leading-8 text-stone-300 font-syne">
                Guests remember the counter glow, fresh bake, practical menu,
                and a welcome that feels personal.
              </p>
</div>
<div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
<article className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
<p className="kava-outline-text text-5xl tracking-tight font-geist">
                  01
                </p>
<h3 className="mt-6 text-xl tracking-tight text-amber-50 font-geist">
                  Espresso first
                </h3>
<p className="mt-3 text-base leading-7 text-stone-400 font-syne">
                  A clean coffee ritual for commuters, shoppers, and regulars.
                </p>
</article>
<article className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
<p className="kava-outline-text text-5xl tracking-tight font-geist">
                  02
                </p>
<h3 className="mt-6 text-xl tracking-tight text-amber-50 font-geist">
                  Bake case energy
                </h3>
<p className="mt-3 text-base leading-7 text-stone-400 font-syne">
                  Sweet, savoury, vegan, and gluten-free choices with
                  neighbourhood-counter feel.
                </p>
</article>
<article className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
<p className="kava-outline-text text-5xl tracking-tight font-geist">
                  03
                </p>
<h3 className="mt-6 text-xl tracking-tight text-amber-50 font-geist">
                  Lunch without ceremony
                </h3>
<p className="mt-3 text-base leading-7 text-stone-400 font-syne">
                  Fresh sandwiches and simple meals between errands or meetings.
                </p>
</article>
<article className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
<p className="kava-outline-text text-5xl tracking-tight font-geist">
                  04
                </p>
<h3 className="mt-6 text-xl tracking-tight text-amber-50 font-geist">
                  Donut anticipation
                </h3>
<p className="mt-3 text-base leading-7 text-stone-400 font-syne">
                  Friday and Sunday drops make the week feel more special.
                </p>
</article>
</div>
<div className="mt-12 grid gap-5 lg:grid-cols-3">
<img alt="Latte art in a ceramic cup" className="h-80 w-full rounded-[2rem] object-cover shadow-2xl shadow-black/30 lg:translate-y-8" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&amp;fit=crop&amp;w=1200&amp;q=90"/>
<img alt="Fresh pastries on a cafe counter" className="h-80 w-full rounded-[2rem] object-cover shadow-2xl shadow-black/30" src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&amp;fit=crop&amp;w=1200&amp;q=90"/>
<img alt="Warm cafe seating with natural light" className="h-80 w-full rounded-[2rem] object-cover shadow-2xl shadow-black/30 lg:translate-y-8" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&amp;fit=crop&amp;w=1200&amp;q=90"/>
</div>
</div>
</section>
<section className="bg-[#100c08] py-20 sm:py-28" id="reviews">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
<div className="lg:sticky lg:top-28">
<p className="text-sm font-semibold uppercase tracking-widest text-amber-200/80 font-syne">
                  People talk
                </p>
<h2 className="mt-4 text-4xl tracking-tight text-amber-50 sm:text-5xl font-geist">
                  Loved for selection, service, and quality.
                </h2>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center justify-between gap-4">
<p className="text-lg font-semibold text-amber-50 font-syne">
                        Google Reviews
                      </p>
<p className="text-3xl tracking-tight text-amber-100 font-geist">
                        4.7
                      </p>
</div>
<p className="mt-2 text-base text-stone-400 font-syne">
                      444 reviews
                    </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center justify-between gap-4">
<p className="text-lg font-semibold text-amber-50 font-syne">
                        Facebook Reviews
                      </p>
<p className="text-3xl tracking-tight text-amber-100 font-geist">
                        5.0
                      </p>
</div>
<p className="mt-2 text-base text-stone-400 font-syne">
                      16 votes
                    </p>
</div>
</div>
</div>
<div className="grid gap-5">
<blockquote className="border border-white/10 border-l-4 border-l-amber-200/60 bg-white/[0.04] p-6 sm:p-8">
<div className="flex gap-1 text-amber-200">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-5 text-2xl leading-9 tracking-tight text-amber-50 font-geist">
                    “Huge selection of sandwiches and pastries.”
                  </p>
<footer className="mt-6 text-base text-stone-400 font-syne">
                    Customer review highlight
                  </footer>
</blockquote>
<blockquote className="border border-white/10 border-l-4 border-l-amber-200/60 bg-white/[0.04] p-6 sm:p-8">
<div className="flex gap-1 text-amber-200">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-5 text-2xl leading-9 tracking-tight text-amber-50 font-geist">
                    “Amazing baked goods with vegan and gluten-free options!”
                  </p>
<footer className="mt-6 text-base text-stone-400 font-syne">
                    Customer review highlight
                  </footer>
</blockquote>
<blockquote className="border border-white/10 border-l-4 border-l-amber-200/60 bg-white/[0.04] p-6 sm:p-8">
<div className="flex gap-1 text-amber-200">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-5 text-2xl leading-9 tracking-tight text-amber-50 font-geist">
                    “Exceptional service and top-quality food.”
                  </p>
<footer className="mt-6 text-base text-stone-400 font-syne">
                    Customer review highlight
                  </footer>
</blockquote>
</div>
</div>
</div>
</section>
<section className="bg-[#f4eadc] py-20 text-stone-950 sm:py-28" id="visit">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
<div className="bg-white p-6 shadow-2xl shadow-stone-950/10 sm:p-8">
<p className="text-sm font-semibold uppercase tracking-widest text-stone-500 font-syne">
                  Locations &amp; contact
                </p>
<h2 className="mt-4 text-4xl tracking-tight sm:text-5xl font-geist">
                  Find KÁVA &amp; Co. Coffee in Mill Bay, BC.
                </h2>
<div className="mt-8 space-y-5">
<div className="flex gap-4">
<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-950 text-amber-50">
<i className="h-5 w-5" data-lucide="map-pin"></i>
</span>
<div>
<p className="text-lg font-semibold font-syne">Address</p>
<p className="mt-1 text-base leading-7 text-stone-600 font-syne">
                        2720 Mill Bay Rd #120, Mill Bay, BC V8H 1H9
                      </p>
</div>
</div>
<div className="flex gap-4">
<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-950 text-amber-50">
<i className="h-5 w-5" data-lucide="phone"></i>
</span>
<div>
<p className="text-lg font-semibold font-syne">Phone</p>
<a className="mt-1 block text-base leading-7 text-stone-600 hover:text-stone-950 font-syne" href="tel:2509292739">
                        +1 250-929-2739
                      </a>
</div>
</div>
<div className="flex gap-4">
<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-950 text-amber-50">
<i className="h-5 w-5" data-lucide="clock"></i>
</span>
<div className="">
<p className="text-lg font-semibold font-syne">Hours</p>
<p className="mt-1 text-base leading-7 text-stone-600 font-syne">
                        Opens at 9:00 a.m.; closes between 4:00 p.m. and 5:00
                        p.m.
                      </p>
</div>
</div>
</div>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-amber-50 transition hover:bg-stone-800 font-syne" href="https://maps.google.com/?q=2720+Mill+Bay+Rd+%23120,+Mill+Bay,+BC+V8H+1H9">
                    Get directions
                    <i className="h-4 w-4" data-lucide="navigation"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-950/15 bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-50 font-syne" href="tel:2509292739">
                    Call the cafe
                    <i className="h-4 w-4" data-lucide="phone-call"></i>
</a>
</div>
<div className="mt-6 border border-stone-950/10 bg-stone-50 p-5">
<p className="text-sm font-semibold uppercase tracking-widest text-stone-500 font-syne">
                    Send a message
                  </p>
<p className="mt-2 text-base leading-7 text-stone-600 font-syne">
                    Call about today’s soups, pastry selection, orders, or donut
                    availability.
                  </p>
<div className="mt-4 flex flex-col gap-3 sm:flex-row">
<input className="min-h-12 flex-1 border border-stone-950/15 bg-white px-4 text-sm text-stone-950 placeholder:text-stone-400 font-syne" placeholder="Subscribe newsletter" type="email"/>
<a className="inline-flex items-center justify-center bg-stone-950 px-5 py-3 text-sm font-semibold text-amber-50 font-syne" href="tel:2509292739">
                      Stay connected
                    </a>
</div>
</div>
</div>
<div className="relative overflow-hidden bg-stone-950 shadow-2xl shadow-stone-950/20">
<img alt="Cafe counter with coffee service" className="h-full min-h-[32rem] w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&amp;fit=crop&amp;w=1400&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
<div className="rounded-3xl border border-white/15 bg-black/35 p-5 text-amber-50 backdrop-blur-xl">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<p className="text-sm font-medium text-amber-100 font-syne">
                          Average visit
                        </p>
<p className="mt-1 text-3xl tracking-tight font-geist">
                          15 minutes
                        </p>
</div>
<div className="flex gap-2">
<a aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-amber-50 transition hover:bg-white/15" href="https://www.facebook.com/">
<i className="h-5 w-5" data-lucide="facebook"></i>
</a>
<a aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-amber-50 transition hover:bg-white/15" href="https://www.instagram.com/">
<i className="h-5 w-5" data-lucide="instagram"></i>
</a>
</div>
</div>
<p className="mt-3 text-base leading-7 text-amber-50/70 font-syne">
                      Perfect for quick coffee, pastry pickup, or a relaxed
                      bite.
                    </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-[#100c08] py-10">
<div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
<div>
<a className="flex items-center gap-3" href="#">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/30 bg-amber-100/10">
<i className="h-5 w-5 text-amber-100" data-lucide="coffee"></i>
</span>
<span className="text-xl tracking-tight text-amber-50 font-geist">
                KÁVA &amp; Co. Coffee
              </span>
</a>
<p className="mt-3 text-base text-stone-400 font-syne">
              © 2025, All Rights Reserved. Family-owned in Mill Bay Centre.
            </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="text-sm font-medium text-stone-400 transition hover:text-amber-50 font-syne" href="#about">
              About
            </a>
<a className="text-sm font-medium text-stone-400 transition hover:text-amber-50 font-syne" href="#ritual">
              Ritual
            </a>
<a className="text-sm font-medium text-stone-400 transition hover:text-amber-50 font-syne" href="#daily">
              Daily board
            </a>
<a className="text-sm font-medium text-stone-400 transition hover:text-amber-50 font-syne" href="#menu">
              Menu
            </a>
<a className="text-sm font-medium text-stone-400 transition hover:text-amber-50 font-syne" href="#reviews">
              Reviews
            </a>
<a className="text-sm font-medium text-stone-400 transition hover:text-amber-50 font-syne" href="#visit">
              Visit
            </a>
</div>
</div>
</footer>
</div>


    </>
  );
}

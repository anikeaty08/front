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



      lucide.createIcons({
        attrs: {
          "stroke-width": 1.5
        }
      });

      (() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const revealSelectors = [
          "main > section:first-of-type .relative.mx-auto > .inline-flex",
          "main > section:first-of-type .relative.mx-auto > h1",
          "main > section:first-of-type .relative.mx-auto > p",
          "main > section:first-of-type .relative.mx-auto > .mt-8.flex",
          "main > section:first-of-type .mt-16.grid > article",
          "main > section:nth-of-type(2) .mx-auto > div",
          "#workflow .mx-auto > span",
          "#workflow .mx-auto > p",
          "#workflow .mx-auto > h2",
          "#workflow .mt-14.grid > img",
          "#workflow .mt-8.grid > div",
          "#features .mx-auto > span",
          "#features .mx-auto > h2",
          "#features .mx-auto > p",
          "#features .mx-auto > .mt-8.flex",
          "#features .mt-12.grid > article",
          "main > section:nth-of-type(5) .mx-auto > span",
          "main > section:nth-of-type(5) .mx-auto > h2",
          "main > section:nth-of-type(5) .mt-10.grid > div",
          "#reviews .mx-auto > span",
          "#reviews .mt-4 > h2",
          "#reviews .mt-4 > .flex",
          "#reviews .mt-12 > div",
          "#contact .mx-auto > span",
          "#contact .mx-auto > h2",
          "#contact .mx-auto > p",
          "#contact .mx-auto > .mt-8.flex",
          "footer .grid > div",
          "footer .border-t"
        ];

        const revealItems = [...new Set(revealSelectors.flatMap((selector) => Array.from(document.querySelectorAll(selector))))];

        document.querySelectorAll("main > section, footer").forEach((group) => {
          revealItems
            .filter((item) => group.contains(item))
            .forEach((item, index) => {
              item.classList.add("reveal-on-scroll");
              item.style.setProperty("--reveal-delay", `${Math.min(index * 85, 595)}ms`);

              if (index % 3 === 1) item.classList.add("reveal-from-left");
              if (index % 3 === 2) item.classList.add("reveal-from-right");
            });
        });

        if (reduceMotion || !("IntersectionObserver" in window)) {
          revealItems.forEach((item) => item.classList.add("is-visible"));
          return;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          },
          {
            threshold: 0.14,
            rootMargin: "0px 0px -8% 0px"
          }
        );

        revealItems.forEach((item) => observer.observe(item));
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
      
<main className="mx-auto min-h-screen w-full max-w-[112rem] overflow-hidden bg-[#faf8f1] shadow-2xl">
<header className="sticky top-0 z-40 border-b border-black/5 bg-[#faf8f1]/90 backdrop-blur-xl">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
<a className="flex items-center gap-2" href="#">
<span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#191b22] text-white">
<i className="h-4 w-4" data-lucide="orbit"></i>
</span>
<span className="text-base font-semibold tracking-tight font-sans">
              OrbitDesk
            </span>
</a>
<div className="hidden items-center gap-10 md:flex">
<a className="text-sm font-medium text-black/60 hover:text-black font-sans" href="#features">
              Features
            </a>
<a className="text-sm font-medium text-black/60 hover:text-black font-sans" href="#workflow">
              Workflow
            </a>
<a className="text-sm font-medium text-black/60 hover:text-black font-sans" href="#reviews">
              Reviews
            </a>
</div>
<a className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-[#17191f] shadow-sm hover:bg-[#f1f1ee] font-sans" href="#contact">
            Book intro
          </a>
</nav>
</header>
<section className="overflow-hidden sm:px-8 sm:py-24 lg:px-10 lg:py-28 pt-20 pr-5 pb-20 pl-5 relative">
<div className="pointer-events-none absolute inset-0 opacity-40">
<div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(176,124,86,0.16),transparent_35%)]"></div>
<div className="absolute inset-x-0 top-10 mx-auto h-64 max-w-5xl bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[length:2rem_2rem] opacity-30"></div>
</div>
<div className="relative mx-auto max-w-7xl text-center">
<div className="inline-flex items-center rounded-full bg-[#9f6b4e] px-3 py-1 text-xs font-semibold text-white shadow-sm font-sans">
            Support teams without the tab chaos
          </div>
<h1 className="mx-auto mt-5 max-w-4xl text-5xl leading-none tracking-tight text-[#17191f] sm:text-6xl lg:text-7xl font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
            Customer conversations unified across every inbox
          </h1>
<p className="mx-auto mt-5 max-w-2xl text-base leading-6 text-black/65 sm:text-lg font-sans">
            Bring email, live chat, social DMs, and account notes into one calm
            workspace built for faster replies and better customer outcomes.
          </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="inline-flex w-full items-center justify-center rounded-xl bg-[#17191f] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/15 hover:bg-black sm:w-auto font-sans" href="#">
              Start free trial
            </a>
<a className="inline-flex w-full items-center justify-center rounded-xl border border-black/25 bg-white px-7 py-4 text-sm font-semibold text-[#17191f] hover:bg-[#f2f2ef] sm:w-auto font-sans" href="#">
              Watch demo
            </a>
</div>
<div className="mt-16 grid gap-5 lg:grid-cols-3">
<article className="overflow-hidden rounded-2xl bg-[#181b22] p-5 text-left text-white shadow-sm">
<div className="flex items-center gap-3">
<span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
<i className="h-5 w-5" data-lucide="message-circle"></i>
</span>
<div>
<h2 className="text-xl tracking-tight font-newsreader font-light">
                    Instant chat routing
                  </h2>
<p className="mt-1 text-sm text-white/60 font-sans">
                    Send every request to the right teammate.
                  </p>
</div>
</div>
<div className="mt-10 rotate-[-5deg] rounded-xl bg-[#b98668] p-2 shadow-2xl">
<div className="rounded-lg bg-white p-5 text-[#17191f]">
<div className="flex items-start gap-3 border-b border-black/10 pb-4">
<img alt="Customer avatar" className="h-9 w-9 rounded-full object-cover aspect-square shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d085dee4-2b25-4207-b6ca-3049ae8d3eeb_320w.webp"/>
<div>
<p className="text-xs font-semibold text-[#a66f4f] font-sans">
                        MIRA PATEL · now
                      </p>
<p className="mt-1 text-sm leading-5 text-black/70 font-sans">
                        Can someone help update our billing seat count before
                        renewal?
                      </p>
</div>
</div>
<div className="flex items-start gap-3 pt-4">
<img alt="Agent avatar" className="h-9 w-9 rounded-full object-cover aspect-square shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec6a5cab-715c-44c6-9cd8-aff440c886f6_320w.webp"/>
<div>
<p className="text-xs font-semibold text-[#17191f] font-sans">
                        NOAH REED · assigned
                      </p>
<p className="mt-1 text-sm leading-5 text-black/70 font-sans">
                        I’ll handle this and loop in finance if needed.
                      </p>
</div>
</div>
</div>
</div>
</article>
<article className="relative overflow-hidden rounded-2xl bg-[#dce2e2] p-5 text-left shadow-sm">
<div className="flex items-center gap-3">
<span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70">
<i className="h-5 w-5" data-lucide="bar-chart-3"></i>
</span>
<div>
<h2 className="text-xl tracking-tight text-white drop-shadow font-newsreader font-light">
                    Service analytics
                  </h2>
<p className="mt-1 text-sm text-white/80 drop-shadow font-sans">
                    Track speed, quality, and team load.
                  </p>
</div>
</div>
<img alt="Support leader" className="mt-5 h-80 w-full rounded-xl object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7debb119-f845-4a33-8704-883ab284b52c_800w.webp"/>
<div className="absolute bottom-8 right-7 rounded-xl bg-white p-5 shadow-xl">
<div className="flex items-center gap-4">
<div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#b98668] border-r-[#eadfd4]">
<span className="text-xl tracking-tight font-newsreader font-light">
                      34.6K
                    </span>
</div>
<div>
<p className="text-sm font-semibold font-sans">
                      resolved chats
                    </p>
<p className="text-xs text-black/50 font-sans">this quarter</p>
</div>
</div>
</div>
</article>
<article className="overflow-hidden rounded-2xl bg-[#191b22] p-5 text-left text-white shadow-sm">
<div className="flex items-center gap-3">
<span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
<i className="h-5 w-5" data-lucide="user-round"></i>
</span>
<div>
<h2 className="text-xl tracking-tight font-newsreader font-light">
                    Customer timelines
                  </h2>
<p className="mt-1 text-sm text-white/60 font-sans">
                    Know every preference and interaction.
                  </p>
</div>
</div>
<div className="mt-5 flex flex-wrap gap-2">
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white font-sans">
                  VIP account
                </span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white font-sans">
                  Renewal due
                </span>
</div>
<div className="mt-8 rounded-2xl bg-white p-4 text-[#17191f]">
<div className="h-28 rounded-xl bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/683b6840-f866-4ed4-b2b7-ee853cb9c27a_800w.webp)]"></div>
<div className="-mt-10 flex items-end justify-between px-2">
<img alt="Customer" className="h-20 w-20 rounded-full border-4 border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc24bda1-b0b3-4e69-8bfb-a598a372654b_320w.webp"/>
<div className="flex gap-2 pb-2">
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f3f0]">
<i className="h-4 w-4" data-lucide="mail"></i>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f3f0]">
<i className="h-4 w-4" data-lucide="phone"></i>
</button>
</div>
</div>
<div className="mt-3 px-2">
<h3 className="text-base font-semibold font-sans">
                    Elliot Warner
                  </h3>
<p className="mt-1 text-xs text-black/55 font-sans">
                    Head of Ops at Northline Labs
                  </p>
<div className="mt-5 flex gap-2">
<button className="rounded-lg border border-black/10 px-4 py-2 text-xs font-semibold font-sans">
                      Message
                    </button>
<button className="rounded-lg bg-[#17191f] px-4 py-2 text-xs font-semibold text-white font-sans">
                      Send update
                    </button>
</div>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="border-y border-black/5 bg-[#f7f7f3] px-5 py-9 sm:px-8 lg:px-10">
<div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-6 text-[#17191f] sm:grid-cols-3 lg:grid-cols-5">
<div className="flex items-center justify-center gap-2">
<span className="h-5 w-5 rounded-full bg-blue-500"></span>
<span className="text-lg font-semibold tracking-tight font-sans">
              Brightly
            </span>
</div>
<div className="flex items-center justify-center gap-2">
<i className="h-6 w-6" data-lucide="box"></i>
<span className="text-lg font-semibold tracking-tight font-sans">
              Northstar
            </span>
</div>
<div className="flex items-center justify-center gap-2">
<i className="h-6 w-6 text-emerald-600" data-lucide="waves"></i>
<span className="text-lg font-semibold tracking-tight font-sans">
              Everlane Co
            </span>
</div>
<div className="flex items-center justify-center gap-2">
<i className="h-6 w-6 text-orange-500" data-lucide="sun"></i>
<span className="text-lg font-semibold tracking-tight font-sans">
              Solace
            </span>
</div>
<div className="col-span-2 flex items-center justify-center gap-2 sm:col-span-1">
<i className="h-6 w-6" data-lucide="sparkle"></i>
<span className="text-lg font-semibold tracking-tight font-sans">
              Aster Labs
            </span>
</div>
</div>
</section>
<section className="bg-[#fbfbf8] px-5 py-20 sm:px-8 lg:px-10" id="workflow">
<div className="mx-auto max-w-7xl text-center">
<span className="inline-flex rounded-full bg-[#9f6b4e] px-3 py-1 text-xs font-semibold text-white font-sans">
            How teams reply faster
          </span>
<p className="mt-4 text-sm font-medium text-black/60 font-sans">
            Three-part support workflow
          </p>
<h2 className="mx-auto mt-3 max-w-4xl text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
            Stop hopping between scattered tools to answer important customers
          </h2>
<div className="mt-14 overflow-hidden alpha-marquee-mask">
<div className="marquee-track gap-5">
<img alt="Team discussing support" className="h-64 w-[20rem] shrink-0 rounded-2xl object-cover sm:w-[26rem] lg:w-[30rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/e5c96b55-1ccb-433a-8410-b5376d2d2135/1600w.png"/>
<img alt="Agent using dashboard" className="h-64 w-[20rem] shrink-0 rounded-2xl object-cover sm:w-[26rem] lg:w-[30rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/0fd68ca4-15f7-455f-88d4-e09aef0c750e/1600w.png"/>
<img alt="Customer success team" className="h-64 w-[20rem] shrink-0 rounded-2xl object-cover sm:w-[26rem] lg:w-[30rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/6008c96a-e5c1-4fd1-885f-3c0fbac2577d/1600w.jpg"/>
<img alt="Team discussing support" aria-hidden="true" className="h-64 w-[20rem] shrink-0 rounded-2xl object-cover sm:w-[26rem] lg:w-[30rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/de814ec7-5fa4-4b6b-958b-d88503df5456/1600w.jpg"/>
<img alt="Agent using dashboard" aria-hidden="true" className="h-64 w-[20rem] shrink-0 rounded-2xl object-cover sm:w-[26rem] lg:w-[30rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/e86ba745-4d6f-4694-9b7b-fb24093668f2/1600w.jpg"/>
<img alt="Customer success team" aria-hidden="true" className="h-64 w-[20rem] shrink-0 rounded-2xl object-cover sm:w-[26rem] lg:w-[30rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86254243-84aa-4e62-9d38-b371661fc965_1600w.webp"/>
</div>
</div>
<div className="mt-8 grid gap-8 md:grid-cols-3">
<div className="flex flex-col items-center">
<span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c7d1bd] bg-[#eef3e8] shadow-sm">
<i className="h-5 w-5" data-lucide="plug-zap"></i>
</span>
<h3 className="mt-5 text-xl tracking-tight font-newsreader font-light">
                Connect inboxes
              </h3>
<p className="mt-3 max-w-xs text-base leading-6 text-black/60 font-sans">
                Sync shared email, chat widgets, and social channels in minutes.
              </p>
</div>
<div className="flex flex-col items-center">
<span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e4cbb9] bg-[#fbf0e6] shadow-sm">
<i className="h-5 w-5" data-lucide="settings-2"></i>
</span>
<h3 className="mt-5 text-xl tracking-tight font-newsreader font-light">
                Prioritize requests
              </h3>
<p className="mt-3 max-w-xs text-base leading-6 text-black/60 font-sans">
                Use rules, ownership, and urgency signals to keep queues clear.
              </p>
</div>
<div className="flex flex-col items-center">
<span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8c7a3] bg-[#f5eedc] shadow-sm">
<i className="h-5 w-5" data-lucide="badge-check"></i>
</span>
<h3 className="mt-5 text-xl tracking-tight font-newsreader font-light">
                Improve outcomes
              </h3>
<p className="mt-3 max-w-xs text-base leading-6 text-black/60 font-sans">
                Review satisfaction, handoffs, and response trends from one
                place.
              </p>
</div>
</div>
</div>
</section>
<section className="bg-[#e9eadf] px-5 py-20 sm:px-8 lg:px-10" id="features">
<div className="mx-auto max-w-7xl text-center">
<span className="inline-flex rounded-full bg-[#9f6b4e] px-3 py-1 text-xs font-semibold text-white font-sans">
            Core capabilities
          </span>
<h2 className="mt-4 text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
            Powerful tools without the noise
          </h2>
<p className="mt-4 text-base text-black/60 font-sans">
            Everything your support team needs to move with clarity.
          </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="inline-flex w-full items-center justify-center rounded-xl bg-[#17191f] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 hover:bg-black sm:w-auto font-sans" href="#">
              Start free trial
            </a>
<a className="inline-flex w-full items-center justify-center rounded-xl border border-black/25 bg-white px-7 py-4 text-sm font-semibold hover:bg-[#f4f4ef] sm:w-auto font-sans" href="#">
              See product
            </a>
</div>
<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
<article className="rounded-2xl bg-white/80 p-6 text-left shadow-sm ring-1 ring-black/5">
<span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#e4cbb9] bg-[#fbf0e6] shadow-sm">
<i className="h-5 w-5" data-lucide="send"></i>
</span>
<h3 className="mt-24 text-3xl leading-none tracking-tight font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
                Faster Resolution
              </h3>
<p className="mt-4 text-base leading-6 text-black/60 font-sans">
                Reduce repetitive work with suggested replies, macros, and
                routing.
              </p>
</article>
<article className="rounded-2xl bg-white/80 p-6 text-left shadow-sm ring-1 ring-black/5">
<span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d8c7a3] bg-[#f5eedc] shadow-sm">
<i className="h-5 w-5" data-lucide="rocket"></i>
</span>
<h3 className="mt-24 text-3xl leading-none tracking-tight font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
                Team Alignment
              </h3>
<p className="mt-4 text-base leading-6 text-black/60 font-sans">
                Share context, notes, and ownership so every handoff feels
                seamless.
              </p>
</article>
<article className="rounded-2xl bg-white/80 p-6 text-left shadow-sm ring-1 ring-black/5">
<span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#c7d1bd] bg-[#eef3e8] shadow-sm">
<i className="h-5 w-5" data-lucide="message-square-more"></i>
</span>
<h3 className="mt-24 text-3xl leading-none tracking-tight font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
                Unified Threads
              </h3>
<p className="mt-4 text-base leading-6 text-black/60 font-sans">
                Keep conversations, tickets, and account history linked
                together.
              </p>
</article>
<article className="rounded-2xl bg-white/80 p-6 text-left shadow-sm ring-1 ring-black/5">
<span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#e0c5a0] bg-[#faf0df] shadow-sm">
<i className="h-5 w-5" data-lucide="lightbulb"></i>
</span>
<h3 className="mt-24 text-3xl leading-none tracking-tight font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
                Live Insights
              </h3>
<p className="mt-4 text-base leading-6 text-black/60 font-sans">
                Measure satisfaction, volume, and service quality as work
                happens.
              </p>
</article>
</div>
</div>
</section>
<section className="bg-[#fbfaf4] px-5 py-20 sm:px-8 lg:px-10">
<div className="mx-auto max-w-7xl">
<span className="inline-flex rounded-full bg-[#9f6b4e] px-3 py-1 text-xs font-semibold text-white font-sans">
            Operations hub
          </span>
<h2 className="mt-4 max-w-2xl text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
            Manage every customer moment in one command center
          </h2>
<div className="mt-10 grid gap-8 rounded-3xl bg-[#ded8cc] p-5 sm:p-8 lg:grid-cols-2">
<div className="rounded-2xl bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-semibold font-sans">Performance</p>
<p className="text-xs text-black/50 font-sans">Last 30 days</p>
</div>
<i className="h-5 w-5 text-black/40" data-lucide="ellipsis"></i>
</div>
<div className="mt-8 grid grid-cols-3 gap-3">
<div className="rounded-xl bg-[#f7f7f3] p-4">
<p className="text-xs text-black/50 font-sans">CSAT</p>
<p className="mt-1 text-xl tracking-tight font-newsreader font-light">
                    96%
                  </p>
</div>
<div className="rounded-xl bg-[#f7f7f3] p-4">
<p className="text-xs text-black/50 font-sans">SLA met</p>
<p className="mt-1 text-xl tracking-tight font-newsreader font-light">
                    91%
                  </p>
</div>
<div className="rounded-xl bg-[#f7f7f3] p-4">
<p className="text-xs text-black/50 font-sans">Replies</p>
<p className="mt-1 text-xl tracking-tight font-newsreader font-light">
                    18K
                  </p>
</div>
</div>
<div className="mt-8 h-44 rounded-2xl bg-[#f7f7f3] p-5">
<svg className="h-full w-full" viewbox="0 0 320 140">
<path d="M8 112 C48 98, 70 104, 98 74 S162 46, 192 56 S248 94, 312 42" fill="none" stroke="#a86f4c" strokeLinecap="round" strokeWidth="4"></path>
<path d="M8 112 C48 98, 70 104, 98 74 S162 46, 192 56 S248 94, 312 42 L312 140 L8 140 Z" fill="rgba(168,111,76,0.14)"></path>
</svg>
</div>
</div>
<div className="flex flex-col justify-center">
<h3 className="text-3xl leading-none tracking-tight sm:text-4xl font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
                Shared intelligence for growing teams.
              </h3>
<p className="mt-4 max-w-xl text-base leading-7 text-black/60 font-sans">
                View customer records, internal notes, active conversations, and
                team workload from a single flexible workspace.
              </p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black/70 font-sans">
                  Smart assignment
                </span>
<span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black/70 font-sans">
                  Conversation history
                </span>
<span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black/70 font-sans">
                  SLA alerts
                </span>
</div>
</div>
<div className="flex flex-col justify-center lg:pl-12">
<h3 className="text-3xl leading-none tracking-tight sm:text-4xl font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
                Plan follow-ups and proactive outreach.
              </h3>
<p className="mt-4 max-w-xl text-base leading-7 text-black/60 font-sans">
                Create reminders, trigger customer education, and schedule
                account check-ins after important support moments.
              </p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black/70 font-sans">
                  Renewal notes
                </span>
<span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black/70 font-sans">
                  Follow-up queues
                </span>
<span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black/70 font-sans">
                  Playbooks
                </span>
</div>
</div>
<div className="rounded-2xl bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<h4 className="text-sm font-semibold font-sans">
                  Channel overview
                </h4>
<i className="h-5 w-5 text-black/40" data-lucide="sliders-horizontal"></i>
</div>
<div className="mt-6 space-y-4">
<div className="flex items-center justify-between rounded-xl bg-[#f7f7f3] p-4">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="mail"></i>
<div>
<p className="text-sm font-semibold font-sans">
                        Shared inbox
                      </p>
<p className="text-xs text-black/50 font-sans">
                        4,820 conversations
                      </p>
</div>
</div>
<span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 font-sans">
                    +18%
                  </span>
</div>
<div className="flex items-center justify-between rounded-xl bg-[#f7f7f3] p-4">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="message-circle"></i>
<div>
<p className="text-sm font-semibold font-sans">Live chat</p>
<p className="text-xs text-black/50 font-sans">
                        3,140 conversations
                      </p>
</div>
</div>
<span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 font-sans">
                    +27%
                  </span>
</div>
<div className="flex items-center justify-between rounded-xl bg-[#f7f7f3] p-4">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="share-2"></i>
<div>
<p className="text-sm font-semibold font-sans">Social DMs</p>
<p className="text-xs text-black/50 font-sans">
                        1,760 conversations
                      </p>
</div>
</div>
<span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 font-sans">
                    -6%
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#fbfbf8] px-5 py-20 sm:px-8 lg:px-10" id="reviews">
<div className="mx-auto max-w-7xl">
<span className="inline-flex rounded-full bg-[#9f6b4e] px-3 py-1 text-xs font-semibold text-white font-sans">
            Customer stories
          </span>
<div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
<h2 className="max-w-2xl text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
              Trusted by 12,400+ support leaders
            </h2>
<div className="flex gap-3">
<a className="rounded-xl bg-[#17191f] px-6 py-4 text-sm font-semibold text-white font-sans" href="#">
                Explore stories
              </a>
<a className="rounded-xl border border-black/20 bg-white px-6 py-4 text-sm font-semibold font-sans" href="#">
                Leave feedback
              </a>
</div>
</div>
<div className="mt-10 overflow-hidden alpha-marquee-mask">
<div className="marquee-track marquee-track-slow gap-4">
<article className="w-[20rem] shrink-0 rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-black/5 sm:w-[24rem]">
<p className="text-lg leading-7 text-black/75 font-sans">
                  “OrbitDesk cut our handoff time in half and made every
                  customer reply feel more personal.”
                </p>
<div className="mt-5 border-t border-black/10 pt-4">
<p className="text-sm font-semibold font-sans">Avery Stone</p>
<p className="text-xs text-black/50 font-sans">
                    CX Director, Brightly
                  </p>
</div>
</article>
<article className="w-[20rem] shrink-0 rounded-2xl bg-[#e8ebe3] p-6 text-left shadow-sm ring-1 ring-black/5 sm:w-[24rem]">
<p className="text-lg leading-7 text-black/75 font-sans">
                  “We finally understand volume, urgency, and ownership without
                  switching dashboards.”
                </p>
<div className="mt-5 border-t border-black/10 pt-4">
<p className="text-sm font-semibold font-sans">Malik Chen</p>
<p className="text-xs text-black/50 font-sans">
                    Support Lead, Northstar
                  </p>
</div>
</article>
<article className="w-[20rem] shrink-0 rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-black/5 sm:w-[24rem]">
<p className="text-lg leading-7 text-black/75 font-sans">
                  “Our agents answer faster because the full customer story is
                  always right there.”
                </p>
<div className="mt-5 border-t border-black/10 pt-4">
<p className="text-sm font-semibold font-sans">Sofia Reyes</p>
<p className="text-xs text-black/50 font-sans">
                    Operations VP, Solace
                  </p>
</div>
</article>
<article className="w-[20rem] shrink-0 rounded-2xl bg-[#f7f7f3] p-6 text-left shadow-sm ring-1 ring-black/5 sm:w-[24rem]">
<p className="text-lg leading-7 text-black/75 font-sans">
                  “The calmer inbox changed our team culture almost
                  immediately.”
                </p>
<div className="mt-5 border-t border-black/10 pt-4">
<p className="text-sm font-semibold font-sans">Nora Patel</p>
<p className="text-xs text-black/50 font-sans">
                    Founder, Aster Labs
                  </p>
</div>
</article>
<article aria-hidden="true" className="w-[20rem] shrink-0 rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-black/5 sm:w-[24rem]">
<p className="text-lg leading-7 text-black/75 font-sans">
                  “OrbitDesk cut our handoff time in half and made every
                  customer reply feel more personal.”
                </p>
<div className="mt-5 border-t border-black/10 pt-4">
<p className="text-sm font-semibold font-sans">Avery Stone</p>
<p className="text-xs text-black/50 font-sans">
                    CX Director, Brightly
                  </p>
</div>
</article>
<article aria-hidden="true" className="w-[20rem] shrink-0 rounded-2xl bg-[#e8ebe3] p-6 text-left shadow-sm ring-1 ring-black/5 sm:w-[24rem]">
<p className="text-lg leading-7 text-black/75 font-sans">
                  “We finally understand volume, urgency, and ownership without
                  switching dashboards.”
                </p>
<div className="mt-5 border-t border-black/10 pt-4">
<p className="text-sm font-semibold font-sans">Malik Chen</p>
<p className="text-xs text-black/50 font-sans">
                    Support Lead, Northstar
                  </p>
</div>
</article>
<article aria-hidden="true" className="w-[20rem] shrink-0 rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-black/5 sm:w-[24rem]">
<p className="text-lg leading-7 text-black/75 font-sans">
                  “Our agents answer faster because the full customer story is
                  always right there.”
                </p>
<div className="mt-5 border-t border-black/10 pt-4">
<p className="text-sm font-semibold font-sans">Sofia Reyes</p>
<p className="text-xs text-black/50 font-sans">
                    Operations VP, Solace
                  </p>
</div>
</article>
<article aria-hidden="true" className="w-[20rem] shrink-0 rounded-2xl bg-[#f7f7f3] p-6 text-left shadow-sm ring-1 ring-black/5 sm:w-[24rem]">
<p className="text-lg leading-7 text-black/75 font-sans">
                  “The calmer inbox changed our team culture almost
                  immediately.”
                </p>
<div className="mt-5 border-t border-black/10 pt-4">
<p className="text-sm font-semibold font-sans">Nora Patel</p>
<p className="text-xs text-black/50 font-sans">
                    Founder, Aster Labs
                  </p>
</div>
</article>
</div>
</div>
<div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
<div className="rounded-2xl bg-[#e8ebe3] p-5">
<img alt="Reviewer" className="h-72 w-full rounded-xl object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f1ec8cd-60dd-4252-9413-c542dcc871f1_1600w.webp"/>
<div className="mt-4">
<p className="text-sm font-semibold font-sans">Clara Bennett</p>
<p className="text-xs text-black/50 font-sans">
                  VP of Customer Experience, Mavenly
                </p>
</div>
</div>
<div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
<p className="text-3xl leading-tight tracking-tight sm:text-4xl font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
                “OrbitDesk gave our team one source of truth. We cut
                first-response time by 42% and finally have a clear view of what
                customers need before they churn.”
              </p>
<div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
<div className="flex items-center gap-3">
<img alt="Customer manager" className="h-12 w-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/cc3d2108-b362-49c8-be76-9151dbe6bb4f/320w.png"/>
<div>
<p className="text-sm font-semibold font-sans">Jonas Meyer</p>
<p className="text-xs text-black/50 font-sans">
                      Support Operations Lead
                    </p>
</div>
</div>
<button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17191f] text-white">
<i className="h-5 w-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#e9eadf] px-5 py-20 text-center sm:px-8 lg:px-10" id="contact">
<div className="mx-auto max-w-3xl">
<span className="inline-flex rounded-full bg-[#9f6b4e] px-3 py-1 text-xs font-semibold text-white font-sans">
            Contact sales
          </span>
<h2 className="mt-4 text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
            Deliver calmer customer support starting today
          </h2>
<p className="mx-auto mt-4 max-w-xl text-base leading-6 text-black/60 font-sans">
            Move every customer message into one workspace and give your team
            the context to respond beautifully.
          </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="inline-flex w-full items-center justify-center rounded-xl bg-[#17191f] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 sm:w-auto font-sans" href="#">
              Start free trial
            </a>
<a className="inline-flex w-full items-center justify-center rounded-xl border border-black/25 bg-white px-7 py-4 text-sm font-semibold sm:w-auto font-sans" href="#">
              Book demo
            </a>
</div>
</div>
</section>
<footer className="bg-[#191b22] px-5 py-10 text-white sm:px-8 lg:px-10">
<div className="mx-auto max-w-7xl rounded-3xl bg-[#191b22]">
<div className="grid gap-10 py-8 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
<div>
<a className="flex items-center gap-2" href="#">
<span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#191b22]">
<i className="h-4 w-4" data-lucide="orbit"></i>
</span>
<span className="text-base font-semibold tracking-tight font-sans">
                  OrbitDesk
                </span>
</a>
<h3 className="mt-8 max-w-md text-3xl leading-none tracking-tight text-white/85 sm:text-4xl font-newsreader font-light" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>
                Conversations in one place. Choose the right plan and get
                moving.
              </h3>
</div>
<div>
<h4 className="text-sm font-semibold font-sans">Company</h4>
<ul className="mt-4 space-y-3 text-sm text-white/55">
<li>
<a className="hover:text-white font-sans" href="#">About</a>
</li>
<li>
<a className="hover:text-white font-sans" href="#">Careers</a>
</li>
<li>
<a className="hover:text-white font-sans" href="#">Partners</a>
</li>
<li>
<a className="hover:text-white font-sans" href="#">Security</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold font-sans">Resources</h4>
<ul className="mt-4 space-y-3 text-sm text-white/55">
<li>
<a className="hover:text-white font-sans" href="#">Guides</a>
</li>
<li>
<a className="hover:text-white font-sans" href="#">Templates</a>
</li>
<li>
<a className="hover:text-white font-sans" href="#">API docs</a>
</li>
<li>
<a className="hover:text-white font-sans" href="#">Status</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold font-sans">
                Get product updates
              </h4>
<p className="mt-4 text-sm leading-6 text-white/55 font-sans">
                Receive practical support workflows and launch notes each month.
              </p>
<form className="mt-5 flex gap-2">
<input className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30" placeholder="Work email" type="email"/>
<button className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#191b22] font-sans">
                  Subscribe
                </button>
</form>
</div>
</div>
<div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/45 sm:flex-row">
<p className="font-sans">Copyright © 2028 OrbitDesk</p>
<div className="flex gap-5">
<a className="hover:text-white font-sans" href="#">Privacy</a>
<a className="hover:text-white font-sans" href="#">Terms</a>
<a className="hover:text-white font-sans" href="#">Cookies</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}

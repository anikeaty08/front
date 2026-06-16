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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
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
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="overflow-hidden w-full relative">
<header className="flex sm:px-10 lg:px-16 xl:px-16 2xl:px-16 [animation:animationIn_0.8s_ease-out_0.1s_both] w-full z-20 pt-7 pr-6 pb-7 pl-6 relative items-center justify-between">
<a aria-label="Axisflow" className="select-none sm:text-4xl text-3xl font-medium text-black tracking-[0.22em]" href="#">
          AXISFLOW
        </a>
<nav className="hidden items-center gap-14 text-base font-normal text-black lg:flex">
<a className="transition hover:text-[#ff5a24]" href="#">Platform</a>
<a className="transition hover:text-[#ff5a24]" href="#">Solutions</a>
<a className="transition hover:text-[#ff5a24]" href="#">Resources</a>
<a className="transition hover:text-[#ff5a24]" href="#">Pricing</a>
<a className="rounded-lg border border-black/25 bg-[#111111] px-8 py-4 text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_14px_30px_rgba(0,0,0,0.13)] transition hover:bg-black" href="#">
            Sign In
          </a>
</nav>
<button aria-label="Open menu" className="grid size-11 place-items-center rounded-lg border border-black/15 bg-white/55 text-black shadow-sm lg:hidden">
<i className="size-5" data-lucide="menu"></i>
</button>
</header>
<section className="grid sm:px-10 lg:grid-cols-[0.77fr_1.23fr] lg:gap-10 lg:px-16 lg:pt-9 xl:gap-14 2xl:px-16 z-10 w-full max-w-[112rem] mr-auto ml-auto pt-12 pr-6 pb-14 pl-6 relative gap-x-12 gap-y-12 items-center lg:h-[850px]">
<div className="lg:pt-12 [animation:animationIn_0.8s_ease-out_0.2s_both] max-w-2xl z-20 pt-12 relative">
<div className="mb-10 flex items-center gap-3 text-base font-normal uppercase tracking-wide text-[#222222]">
<span className="size-3 bg-[#ff5a24] shadow-[0_0_0_1px_rgba(255,90,36,0.18)]"></span>
<span className="">AUTONOMOUS OPERATIONS</span>
</div>
<h1 className="max-w-3xl font-medium leading-[0.96] tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
<span className="block text-5xl sm:text-6xl lg:text-6xl xl:text-7xl">
              AI Gives Teams
            </span>
<span className="block sm:text-6xl lg:text-6xl xl:text-7xl text-5xl italic text-[#ff5a24] relative bg-gradient-to-r from-[#ff5a24] via-[#ff8a5c] to-[#ff5a24] bg-[length:200%_100%] bg-clip-text text-transparent motion-safe:animate-pulse" style={{textShadow: '0 0 24px rgba(255,90,36,0.24), 0 0 54px rgba(255,90,36,0.12)', willChange: 'opacity, filter, transform'}}>
              A Clearer
            </span>
<span className="block text-5xl sm:text-6xl lg:text-6xl xl:text-7xl">
              Operating Signal
            </span>
</h1>
<p className="mt-9 max-w-xl text-xl font-normal leading-snug text-[#252525]">
            Coordinate every workflow, surface risk early,
            <br className="hidden sm:block"/>
            and keep decisions aligned across your systems—
            <br className="hidden sm:block"/>
            in real time.
          </p>
<div className="flex flex-col sm:flex-row mt-12 gap-x-5 gap-y-5">
<a className="inline-flex items-center justify-center gap-10 transition hover:bg-black sm:w-56 text-lg font-medium text-white bg-[#111111] w-full h-16 border-black/25 border rounded-md pr-10 pl-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_14px_30px_rgba(0,0,0,0.13)]" href="#">
              Start Free
              <i className="size-6" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex h-16 w-full items-center justify-center gap-12 rounded-md border border-black/75 bg-white/20 px-10 text-lg font-medium text-black transition hover:bg-white/60 sm:w-56" href="#">
              View Demo
              <i className="size-6" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="min-h-[34rem] lg:mt-0 lg:min-h-[47rem] [animation:animationIn_0.8s_ease-out_0.3s_both] w-full mt-0 relative">
<div className="overflow-hidden lg:left-0 lg:right-0 bg-[#f3f2ef]/80 h-full max-h-[46.5rem] border-black/15 border rounded-[2.7rem] mr-auto ml-auto absolute top-0 right-0 left-0 shadow-[0_32px_80px_rgba(0,0,0,0.08)] backdrop-blur-sm">
<div className="[animation:animationIn_0.8s_ease-out_0.3s_both] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-9 top-9 text-[#7a7a7a]"></div>
<div className="absolute left-[7%] top-[13%] hidden grid-cols-4 gap-x-4 gap-y-4 md:grid">
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
</div>
<div className="absolute bottom-0 left-[52%] h-[48%] w-[22%] border-l border-t border-black/10 bg-black/[0.04]"></div>
<div className="bg-[#ff5722] w-[34%] h-[31%] absolute right-0 bottom-0"></div>
<div className="border-y opacity-60 w-[34%] h-[18%] border-black/10 absolute right-0 bottom-[31%]"></div>
<div className="absolute bottom-[4%] right-[3.5%] text-white/80"></div>
<div className="absolute left-1/2 top-[5%] h-[92%] w-px -translate-x-1/2 bg-black/35"></div>
<div className="absolute left-[8%] right-[8%] top-[48.7%] h-px bg-black/35"></div>
<div className="absolute left-1/2 top-1/2 aspect-square w-[49%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_25px_70px_rgba(0,0,0,0.22)]">
<div className="absolute inset-3 rounded-full border border-black/10 bg-[#eeeeea] shadow-[inset_0_4px_12px_rgba(255,255,255,0.9)]"></div>
<div className="absolute inset-6 rounded-full border border-black/10 bg-[#fafafa]"></div>
<div className="absolute inset-10 rounded-full border border-black/30 bg-[conic-gradient(from_0deg,#111_0deg,#111_89deg,#ff6330_89deg,#ff6330_138deg,#111_138deg,#111_360deg)] shadow-[inset_0_0_42px_rgba(255,255,255,0.08)] animate-[spin_4s_linear_infinite]"></div>
<div className="absolute inset-[18%] rounded-full border border-white/35 bg-black/5"></div>
<div className="absolute inset-[34%] rounded-full border border-white/35"></div>
<div className="absolute left-1/2 top-[10%] h-[80%] w-px -translate-x-1/2 bg-white/70"></div>
<div className="absolute left-[10%] right-[10%] top-1/2 h-px -translate-y-1/2 bg-white/70"></div>
<span className="absolute left-1/2 top-[18%] size-2 -translate-x-1/2 rounded-full bg-white animate-pulse" style={{animationDelay: '200ms'}}></span>
<span className="absolute left-1/2 bottom-[18%] size-2 -translate-x-1/2 rounded-full bg-white animate-pulse" style={{animationDelay: '800ms'}}></span>
<span className="absolute right-[18%] top-1/2 size-2 -translate-y-1/2 rounded-full bg-white animate-pulse" style={{animationDelay: '1400ms'}}></span>
<span className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6330] opacity-75 animate-ping"></span>
<span className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/15 bg-white shadow-sm"></span>
</div>
<div className="absolute right-[8%] top-[7%] w-[21%] min-w-40 rounded-2xl bg-white/88 p-6 shadow-[0_26px_60px_rgba(0,0,0,0.16)] backdrop-blur">
<p className="text-base font-medium text-black">Signal health</p>
<div className="mt-4 h-8 w-full">
<svg className="h-full w-full overflow-visible" fill="none" viewbox="0 0 180 42" xmlns="http://www.w3.org/2000/svg">
<path d="M0 32V0" stroke="#DDDDD9" strokeWidth="1"></path>
<path className="" d="M0 31L16 16L28 25L42 14L56 28L70 32L82 21L96 33L110 23L124 32L138 22L152 31L166 20L178 24V7" stroke="#ff6330" strokeWidth="1.5"></path>
</svg>
</div>
<div className="mt-2 flex items-end justify-between">
<p className="text-4xl font-normal leading-none tracking-tight text-black">
                  98%
                </p>
<span className="mb-1 size-2 rounded-full bg-[#ff5a24] animate-pulse"></span>
</div>
</div>
<div className="absolute bottom-[5.5%] left-[2.2%] w-[22%] min-w-44 rounded-2xl bg-white/88 p-7 shadow-[0_26px_60px_rgba(0,0,0,0.14)] backdrop-blur">
<div className="mb-6 flex items-center justify-between">
<p className="whitespace-nowrap text-base font-medium text-black">
                  Active automations
                </p>
<span className="size-2 rounded-full bg-[#ff5a24] animate-pulse"></span>
</div>
<div className="mb-5 flex h-9 items-end gap-2">
<span className="h-7 w-3 bg-black/5 transition-all duration-500 hover:h-8"></span>
<span className="h-4 w-3 bg-black/5 transition-all duration-500 hover:h-5"></span>
<span className="h-6 w-3 bg-black/5 transition-all duration-500 hover:h-7"></span>
<span className="h-5 w-3 bg-[#ff5a24] transition-all duration-500 hover:h-6"></span>
<span className="h-7 w-3 bg-black/5 transition-all duration-500 hover:h-8"></span>
<span className="h-8 w-3 bg-black/5 transition-all duration-500 hover:h-9"></span>
<span className="h-6 w-3 bg-black/5 transition-all duration-500 hover:h-7"></span>
<span className="h-5 w-3 bg-black/5 transition-all duration-500 hover:h-6"></span>
<span className="h-6 w-3 bg-black/5 transition-all duration-500 hover:h-7"></span>
<span className="h-8 w-3 bg-black/5 transition-all duration-500 hover:h-9"></span>
<span className="h-9 w-3 bg-black/5"></span>
</div>
<div className="flex items-end justify-between gap-4">
<p className="text-5xl font-normal leading-none tracking-tight text-black">
                  24
                </p>
<div className="text-right">
<p className="text-lg font-normal text-[#ff5a24]">↑ 18%</p>
<p className="mt-2 whitespace-nowrap text-sm text-[#7c7c7c]">
                    vs last 7 days
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<section className="overflow-hidden sm:px-10 lg:px-16 lg:py-24 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-20 pr-6 pb-20 pl-6 relative">
<div className="relative mx-auto w-full max-w-[112rem]">
<div className="mb-11 flex items-center gap-4 text-lg font-normal uppercase tracking-wide text-[#2c2c2c]">
<span className="relative size-4 overflow-hidden border border-black/10 bg-[#ff5a24]">
<span className="absolute bottom-0 right-0 h-[42%] w-[58%] bg-[#151515]"></span>
</span>
<span>INTELLIGENT OPERATIONS</span>
</div>
<h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
          AI Keeps Critical
          <br/>
<span className="italic text-[#ff5a24]">Systems in Sync</span>
</h2>
<div className="mt-12 grid gap-7 lg:grid-cols-[0.7fr_1fr]">
<article className="min-h-[32rem] overflow-hidden sm:min-h-[36rem] sm:p-12 lg:min-h-[43rem] text-white bg-[#1b1c1b] border-black/20 border rounded-lg pt-8 pr-8 pb-8 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute right-5 top-5 h-14 w-14 border-r border-t border-white/45"></div>
<div className="absolute bottom-5 left-5 h-14 w-14 border-b border-l border-white/45"></div>
<div className="relative z-10">
<p className="text-2xl font-medium leading-none text-[#ff6330]">01</p>
<h3 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Predictive Insights
              </h3>
<div className="mt-7 h-px w-8 bg-[#ff6330]"></div>
<p className="mt-8 max-w-xs text-xl font-normal leading-snug text-white/90">
                Detect unusual patterns early and surface the signals that
                matter most.
              </p>
</div>
<div className="absolute bottom-5 right-5 h-[45%] w-[67%] min-w-64 sm:bottom-7 sm:right-9">
<div className="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"></div>
<div className="absolute left-1/2 top-1/2 aspect-square w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"></div>
<div className="absolute left-1/2 top-1/2 aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25"></div>
<div className="absolute left-1/2 top-1/2 aspect-square w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25"></div>
<div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20"></div>
<div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/20"></div>
<div className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_32deg,transparent_0deg,transparent_42deg,#ff6330_42deg,#ff6330_78deg,transparent_78deg,transparent_167deg,#ff6330_167deg,#ff6330_205deg,transparent_205deg,transparent_360deg)]"></div>
<div className="absolute left-1/2 top-1/2 aspect-square w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1c1d1c]"></div>
<div className="absolute left-1/2 top-1/2 aspect-square w-[31%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_34%_34%,#ffffff,#d9d6d0_54%,#b7b1a8_100%)] shadow-[0_18px_45px_rgba(0,0,0,0.36)]"></div>
<div className="absolute left-[44%] top-[37%] size-2 rounded-full bg-white/70 blur-[1px]"></div>
</div>
</article>
<div className="grid gap-7">
<article className="relative min-h-[19rem] overflow-hidden rounded-lg border border-black/15 bg-white/28 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:p-12">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_45%,rgba(255,255,255,0.9),rgba(255,255,255,0)_35%)]"></div>
<div className="absolute right-5 top-5 h-14 w-14 border-r border-t border-black/10"></div>
<div className="absolute bottom-5 right-5 h-14 w-14 border-b border-r border-black/10"></div>
<div className="relative z-10 max-w-sm">
<p className="text-2xl font-medium leading-none text-[#ff6330]">
                  02
                </p>
<h3 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-[#242424] sm:text-4xl">
                  Flow Coordination
                </h3>
<div className="mt-7 h-px w-8 bg-[#ff6330]"></div>
<p className="mt-6 text-xl font-normal leading-snug text-[#4c4c4c]">
                  Automate recurring steps and keep work moving without manual
                  handoffs.
                </p>
</div>
<div className="absolute bottom-0 right-[6%] top-0 hidden w-[58%] md:block">
<div className="absolute inset-y-0 left-[19%] w-[42%] -skew-x-[31deg] bg-[repeating-linear-gradient(100deg,rgba(0,0,0,0.13)_0,rgba(0,0,0,0.13)_1px,transparent_1px,transparent_0.85rem)]"></div>
<div className="absolute right-[19%] top-[27%] h-11 w-[30%] -skew-x-[31deg] bg-[#dbd9d3]/80 shadow-[0_18px_35px_rgba(0,0,0,0.08)]"></div>
<div className="absolute right-[3%] top-[42%] h-12 w-[52%] -skew-x-[31deg] bg-[#1d1d1d] shadow-[0_18px_35px_rgba(0,0,0,0.12)]"></div>
<div className="absolute right-[23%] top-[61%] h-12 w-[35%] -skew-x-[31deg] bg-[#ff5a24]"></div>
<div className="absolute left-[24%] top-[60%] h-12 w-[40%] -skew-x-[31deg] bg-[#d9d7d0]/80"></div>
<div className="absolute right-[3%] top-[23%] flex items-center gap-4">
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-2 bg-[#ff5a24]"></span>
</div>
<div className="absolute left-[20%] top-[54%] grid grid-cols-2 gap-x-4 gap-y-3">
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
<span className="size-1 rounded-full bg-black"></span>
</div>
</div>
</article>
<article className="relative min-h-[19rem] overflow-hidden rounded-lg bg-[#ff5a24] p-8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] sm:p-12">

<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]"></div>

<div className="absolute right-5 top-5 h-14 w-14 border-r border-t border-white/45"></div>

<div className="relative z-10 max-w-sm">
<p className="text-2xl font-medium leading-none text-white">03</p>
<h3 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  Live Coverage
                </h3>
<div className="mt-7 h-px w-8 bg-white"></div>
<p className="mt-6 text-xl font-normal leading-snug text-white/95">
                  Monitor activity in real time and send alerts before issues
                  spread.
                </p>
</div>

<div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[58%] md:block">

<div className="absolute right-[10%] top-[20%] h-[62%] w-[28%] bg-white/8"></div>

<div className="absolute left-[2%] right-[2%] top-1/2 h-px -translate-y-1/2 bg-white/40"></div>

<div className="absolute left-[41%] top-[13%] h-[48%] w-px -translate-x-1/2 bg-white/40"></div>

<div className="absolute left-[41%] top-[13%] h-[40%] w-[34%] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.82)_0,rgba(255,255,255,0.82)_3px,transparent_3px,transparent_14px)]"></div>

<div className="absolute left-[41%] top-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative h-[15rem] w-[15rem]">
<div className="absolute inset-0 rounded-full border border-dashed border-white/45"></div>
<div className="absolute inset-[10%] rounded-full border border-white/22"></div>
<div className="absolute inset-[28%] rounded-full border border-white/35"></div>
<div className="absolute inset-[42%] rounded-full border border-white/28"></div>
<div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.18)]"></div>
</div>
</div>

<div className="absolute left-[4%] top-1/2 flex -translate-y-1/2 items-center gap-4">
<span className="size-4 rounded-full bg-[#111111]"></span>
<span className="size-2.5 rounded-full bg-[#111111]"></span>
<span className="size-2.5 rounded-full bg-[#111111]"></span>
<span className="size-2.5 rounded-full bg-[#111111]"></span>
<span className="size-4 rounded-full bg-white"></span>
</div>

<div className="absolute right-[7%] top-1/2 flex -translate-y-1/2 items-center gap-12">
<span className="size-4 rounded-full bg-[#111111]"></span>
<span className="size-4 rounded-full bg-white"></span>
</div>
</div>
</article>
</div>
</div>
</div>
</section>
<section className="overflow-hidden sm:px-10 lg:px-16 lg:py-24 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-20 pr-6 pb-20 pl-6 relative">
<div className="relative mx-auto w-full max-w-[112rem]">
<div className="mb-8 flex items-center gap-4 text-lg font-normal uppercase tracking-wide text-[#151515]">
<span className="size-3 bg-[#ff5a24]"></span>
<span className="">HOW IT WORKS</span>
</div>
<div className="max-w-4xl">
<h2 className="text-5xl font-medium leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
            Turn every signal
            <br/>
            into
            <span className="italic text-[#ff5a24]">clear action.</span>
</h2>
<p className="mt-7 max-w-2xl text-xl font-normal leading-snug text-[#2f2f2f]">
            Axisflow helps teams detect issues, automate workflows,
            <br className="hidden sm:block"/>
            and align decisions in real time—so nothing slips through.
          </p>
</div>
<div className="mt-12 grid items-stretch gap-7 lg:grid-cols-[1fr_2.5rem_1fr_2.5rem_1fr]">
<article className="relative min-h-[32rem] overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:p-8">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(255,255,255,0.9),rgba(255,255,255,0)_42%)]"></div>
<div className="absolute right-9 top-9 grid grid-cols-4 gap-3">
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
</div>
<span className="absolute right-14 top-[33%] text-3xl font-normal leading-none text-[#151515]">
              +
            </span>
<div className="absolute bottom-0 right-0 h-20 w-20 bg-[repeating-linear-gradient(135deg,#ff5a24_0,#ff5a24_1px,transparent_1px,transparent_0.45rem)] opacity-80"></div>
<div className="relative z-10">
<p className="text-3xl font-normal leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                01
              </p>
<h3 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                Capture Signals
              </h3>
<p className="mt-3 max-w-sm text-base font-normal leading-snug text-[#333333]">
                Connect every data source and surface
                <br className="hidden sm:block"/>
                what matters, automatically.
              </p>
</div>
<div className="relative z-10 mt-8 grid grid-cols-[11rem_1fr] items-center gap-4 sm:grid-cols-[12rem_1fr]">
<div className="grid gap-3">
<div className="flex h-12 items-center justify-between rounded-lg border border-black/10 bg-white/80 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<svg className="size-5 text-[#333333]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h4l2-5 4 10 2-5h6"></path>
</svg>
<span className="text-sm font-medium text-black">
                      Monitoring
                    </span>
</div>
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
</div>
<div className="flex h-12 items-center justify-between rounded-lg border border-black/10 bg-white/80 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<svg className="size-5 text-[#333333]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.27 21a2 2 0 0 0 3.46 0"></path>
<path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"></path>
</svg>
<span className="text-sm font-medium text-black">Alerts</span>
</div>
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
</div>
<div className="flex h-12 items-center justify-between rounded-lg border border-black/10 bg-white/80 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<svg className="size-5 text-[#333333]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
<span className="text-sm font-medium text-black">
                      Incidents
                    </span>
</div>
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
</div>
<div className="flex h-12 items-center justify-between rounded-lg border border-black/10 bg-white/80 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<svg className="size-5 text-[#333333]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
</svg>
<span className="text-sm font-medium text-black">
                      User Feedback
                    </span>
</div>
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
</div>
<div className="flex h-12 items-center justify-between rounded-lg border border-black/10 bg-white/80 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<svg className="size-5 text-[#333333]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="8" ry="3"></ellipse>
<path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"></path>
<path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"></path>
</svg>
<span className="text-sm font-medium text-black">
                      Business Data
                    </span>
</div>
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
</div>
</div>
<div className="relative aspect-square min-w-44">
<div className="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10"></div>
<div className="absolute left-1/2 top-1/2 aspect-square w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10"></div>
<div className="absolute left-1/2 top-1/2 aspect-square w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/15"></div>
<div className="absolute left-1/2 top-1/2 aspect-square w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/20 bg-[radial-gradient(circle_at_42%_38%,#3a3a3a,#111111_70%)] shadow-[0_18px_45px_rgba(0,0,0,0.16)]"></div>
<div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/20"></div>
<div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-black/20"></div>
<span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a24]"></span>
<svg className="absolute left-1/2 top-1/2 h-14 w-20 -translate-x-1/2 -translate-y-1/2 text-[#ff5a24]" fill="none" viewbox="0 0 88 56" xmlns="http://www.w3.org/2000/svg">
<path d="M4 30H24L34 12L50 44L60 30H84" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
</svg>
</div>
</div>
</article>
<div className="hidden items-center justify-center lg:flex">
<svg className="h-8 w-12 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 64 32" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16h54"></path>
<path d="m46 5 12 11-12 11"></path>
</svg>
</div>
<article className="relative min-h-[32rem] overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:p-8">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(255,255,255,0.88),rgba(255,255,255,0)_46%)]"></div>
<div className="absolute right-9 top-9 grid grid-cols-4 gap-3">
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
</div>
<div className="relative z-10">
<p className="text-3xl font-normal leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                02
              </p>
<h3 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                Automate Response
              </h3>
<p className="mt-3 max-w-sm text-base font-normal leading-snug text-[#333333]">
                Intelligent workflows route, prioritize,
                <br className="hidden sm:block"/>
                and act—so issues don’t wait.
              </p>
</div>
<div className="relative z-10 mt-16 flex min-h-64 items-center justify-center">
<div className="absolute left-[8%] top-1/2 flex h-24 w-32 -translate-y-1/2 flex-col justify-center rounded-lg border border-black/10 bg-white/80 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
<div className="flex items-center justify-between">
<p className="text-sm font-medium leading-tight text-black">
                    Signal
                    <br/>
                    Detected
                  </p>
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
</div>
</div>
<svg className="absolute left-[34%] top-1/2 h-5 w-10 -translate-y-1/2 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 48 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10h40"></path>
<path d="m34 4 8 6-8 6"></path>
</svg>
<div className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl bg-[linear-gradient(135deg,#3a3a3a,#111111)] shadow-[0_18px_45px_rgba(0,0,0,0.22)] rotate-45">
<svg className="size-8 -rotate-45 text-[#ff5a24]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z"></path>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 4.3l.06.06A1.65 1.65 0 0 0 8.92 4a1.65 1.65 0 0 0 1-1.51V2.4a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.25.61.84 1 1.51 1H21a2 2 0 1 1 0 4h-.09A1.65 1.65 0 0 0 19.4 15Z"></path>
</svg>
</div>
<div className="absolute right-[5%] top-0 grid w-40 gap-7 sm:w-44">
<div className="flex h-12 items-center justify-between rounded-lg border border-black/10 bg-white/80 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<svg className="size-5 text-[#333333]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9"></circle>
<path d="m9 12 2 2 4-5"></path>
</svg>
<span className="text-sm font-medium text-black">
                      Create Task
                    </span>
</div>
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
</div>
<div className="flex h-12 items-center justify-between rounded-lg border border-black/10 bg-white/80 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<svg className="size-5 text-[#333333]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span className="text-sm font-medium text-black">
                      Notify Team
                    </span>
</div>
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
</div>
<div className="flex h-12 items-center justify-between rounded-lg border border-black/10 bg-white/80 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<svg className="size-5 text-[#333333]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19V5"></path>
<path d="m5 12 7-7 7 7"></path>
</svg>
<span className="text-sm font-medium text-black">Escalate</span>
</div>
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
</div>
<div className="flex h-12 items-center justify-between rounded-lg border border-black/10 bg-white/80 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<svg className="size-5 text-[#333333]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="8" ry="3"></ellipse>
<path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"></path>
<path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"></path>
</svg>
<span className="text-sm font-medium text-black">
                      Update System
                    </span>
</div>
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
</div>
</div>
</div>
</article>
<div className="hidden items-center justify-center lg:flex">
<svg className="h-8 w-12 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 64 32" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16h54"></path>
<path d="m46 5 12 11-12 11"></path>
</svg>
</div>
<article className="relative min-h-[32rem] overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:p-8">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_44%,rgba(255,255,255,0.9),rgba(255,255,255,0)_44%)]"></div>
<div className="absolute right-9 top-9 grid grid-cols-4 gap-3">
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
<span className="size-0.5 rounded-full bg-black/50"></span>
</div>
<div className="absolute bottom-0 right-0 h-20 w-20 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.25)_0,rgba(0,0,0,0.25)_1px,transparent_1px,transparent_0.45rem)] opacity-70"></div>
<div className="relative z-10">
<p className="text-3xl font-normal leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                03
              </p>
<h3 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                Align Teams
              </h3>
<p className="mt-3 max-w-sm text-base font-normal leading-snug text-[#333333]">
                Keep everyone in sync with real-time
                <br className="hidden sm:block"/>
                visibility and shared context.
              </p>
</div>
<div className="relative z-10 mt-8 rounded-xl border border-black/10 bg-white/65 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-black">
                  Operational Overview
                </p>
<div className="flex items-center gap-2 rounded-md border border-black/10 bg-white/70 px-3 py-2 text-xs font-normal text-[#333333]">
<span>This week</span>
<svg className="size-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<div className="rounded-lg border border-black/10 bg-white/75 p-4">
<p className="text-xs font-normal text-[#333333]">
                    Signals Processed
                  </p>
<div className="mt-3 flex items-end justify-between gap-4">
<p className="text-2xl font-normal leading-none tracking-tight text-black">
                      1,248
                    </p>
<div className="flex h-8 items-end gap-1">
<span className="h-2 w-1.5 bg-[#ff5a24]/30"></span>
<span className="h-4 w-1.5 bg-[#ff5a24]/60"></span>
<span className="h-3 w-1.5 bg-[#ff5a24]/40"></span>
<span className="h-5 w-1.5 bg-[#ff5a24]/70"></span>
<span className="h-4 w-1.5 bg-[#ff5a24]/50"></span>
<span className="h-6 w-1.5 bg-[#ff5a24]"></span>
</div>
</div>
</div>
<div className="rounded-lg border border-black/10 bg-white/75 p-4">
<p className="text-xs font-normal text-[#333333]">
                    Response Rate
                  </p>
<div className="mt-3 flex items-end justify-between gap-4">
<p className="text-2xl font-normal leading-none tracking-tight text-black">
                      96%
                    </p>
<svg className="h-8 w-24 text-[#ff5a24]" fill="none" viewbox="0 0 96 34" xmlns="http://www.w3.org/2000/svg">
<path d="M2 24C8 24 10 13 16 13C23 13 24 25 31 25C38 25 38 17 45 17C52 17 52 10 59 20C66 30 67 13 74 15C80 17 82 24 88 17C91 14 93 14 94 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
<div className="rounded-lg border border-black/10 bg-white/75 p-4">
<p className="text-xs font-normal text-[#333333]">
                    Active Workflows
                  </p>
<div className="mt-4 flex items-center justify-between">
<div>
<p className="text-2xl font-normal leading-none tracking-tight text-black">
                        24
                      </p>
<p className="mt-2 text-xs text-[#8a8a8a]">vs last 7 days</p>
</div>
<p className="text-xs font-normal text-[#ff5a24]">↑ 18%</p>
<div className="relative size-14 rounded-full bg-[conic-gradient(#ff5a24_0deg,#ff5a24_86deg,#111111_86deg,#111111_238deg,#dedbd4_238deg,#dedbd4_360deg)]">
<span className="absolute inset-4 rounded-full bg-white"></span>
</div>
</div>
</div>
<div className="rounded-lg border border-black/10 bg-white/75 p-4">
<p className="text-xs font-normal text-[#333333]">
                    Team Activity
                  </p>
<div className="mt-4 grid gap-3">
<div className="grid grid-cols-[1.5rem_1fr_0.5rem] items-center gap-3">
<span className="size-6 overflow-hidden rounded-full bg-[#24150f]">
<span className="block h-3 w-full bg-[#f0b08b]"></span>
</span>
<span className="h-1.5 rounded-full bg-black/10">
<span className="block h-full w-[45%] rounded-full bg-[#ff5a24]"></span>
</span>
<span className="size-1.5 rounded-full bg-black"></span>
</div>
<div className="grid grid-cols-[1.5rem_1fr_0.5rem] items-center gap-3">
<span className="size-6 overflow-hidden rounded-full bg-[#332016]">
<span className="block h-3 w-full bg-[#d7916f]"></span>
</span>
<span className="h-1.5 rounded-full bg-black/10">
<span className="block h-full w-[40%] rounded-full bg-[#ff5a24]"></span>
</span>
<span className="size-1.5 rounded-full bg-black"></span>
</div>
<div className="grid grid-cols-[1.5rem_1fr_0.5rem] items-center gap-3">
<span className="size-6 overflow-hidden rounded-full bg-[#1f1712]">
<span className="block h-3 w-full bg-[#c98562]"></span>
</span>
<span className="h-1.5 rounded-full bg-black/10">
<span className="block h-full w-[18%] rounded-full bg-[#ff5a24]"></span>
</span>
<span className="size-1.5 rounded-full bg-black"></span>
</div>
</div>
</div>
</div>
</div>
</article>
</div>
<div className="mt-12 border-t border-black/15 pt-7">
<div className="grid gap-8 lg:grid-cols-[1.25fr_2fr] lg:items-center">
<div className="flex items-start gap-5">
<div className="relative grid size-11 shrink-0 place-items-center text-black">
<svg className="size-11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
<svg className="absolute size-4 text-[#ff5a24]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="">
<p className="text-lg font-medium leading-snug text-black">
                  Built for reliability. Trusted by teams.
                </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                  Enterprise-grade security, uptime, and compliance—so you can
                  move fast with confidence.
                </p>
</div>
</div>
<div className="grid gap-4 text-base font-normal text-[#222222] sm:grid-cols-2 lg:grid-cols-4">
<div className="flex items-center gap-4 border-black/15 lg:border-l lg:pl-10">
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
<span>99.9% Uptime SLA</span>
</div>
<div className="flex items-center gap-4 border-black/15 lg:border-l lg:pl-10">
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
<span>SOC 2 Type II</span>
</div>
<div className="flex items-center gap-4 border-black/15 lg:border-l lg:pl-10">
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
<span>Data Encrypted</span>
</div>
<div className="flex items-center gap-4 border-black/15 lg:border-l lg:pl-10">
<span className="size-1.5 rounded-full bg-[#ff5a24]"></span>
<span>Role-Based Access</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden sm:px-10 lg:px-16 lg:py-24 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-20 pr-6 pb-20 pl-6 relative">
<div className="relative mx-auto w-full max-w-[112rem]">
<div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
<div className="">
<div className="mb-8 flex items-center gap-4 text-lg font-normal uppercase tracking-wide text-[#151515]">
<span className="size-3 bg-[#ff5a24] shadow-[0_0_0_1px_rgba(255,90,36,0.18)]"></span>
<span>PRICING</span>
</div>
<div className="max-w-4xl">
<h2 className="text-5xl font-medium leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                Simple plans for
                <br/>
<span className="italic text-[#ff5a24]">clear operations.</span>
</h2>
<p className="mt-7 max-w-2xl text-xl font-normal leading-snug text-[#151515]">
                Choose the plan that fits your team, automate faster,
                <br className="hidden sm:block"/>
                and keep every workflow aligned.
              </p>
</div>
</div>
<div className="flex flex-col gap-5 lg:items-end lg:pt-14 pt-1 relative items-start">
<div className="inline-flex rounded-full border border-black/10 bg-black/5 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_18px_45px_rgba(0,0,0,0.06)]">
<button className="flex h-12 items-center justify-center rounded-full px-9 text-base font-medium text-black" type="button">
                Monthly
              </button>
<button className="flex h-12 items-center justify-center gap-5 rounded-full bg-white px-9 text-base font-medium text-black shadow-[0_12px_30px_rgba(0,0,0,0.07)]" type="button">
                Yearly
              </button>
</div>

<div className="hidden items-start gap-4 pr-5 text-right text-base font-normal italic leading-snug text-[#6a6a6a] sm:flex">
<div className="relative mt-1 h-14 w-12">


<svg className="text-[#6a6a6a] w-full h-full" fill="none" viewbox="0 0 52 58" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11 49C30 44 41 30 34 10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6"></path>
<path d="M27 13L34 8L40 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></path>
<path className="" d="M14 48C22 45 28 41 32 35" opacity="0.75" stroke="#ff5a24" strokeLinecap="round" strokeWidth="1.2"></path>
</svg>
</div>
<p className="">
                Save up to 20%
                <br/>
                with yearly billing
              </p>
</div>
</div>
</div>
<div className="mt-10 grid items-end gap-8 lg:grid-cols-3">
<article className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_18px_45px_rgba(0,0,0,0.04)] sm:p-10">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.92),rgba(255,255,255,0)_48%)]"></div>
<div className="absolute right-9 top-9 flex items-start gap-6">
<div className="size-3 bg-black"></div>
<div className="size-3 bg-[#ff5a24]"></div>
</div>
<div className="absolute right-9 top-20 grid grid-cols-4 gap-3">
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
</div>
<div className="absolute bottom-0 right-0 h-24 w-24 bg-[repeating-linear-gradient(135deg,rgba(255,90,36,0.55)_0,rgba(255,90,36,0.55)_1px,transparent_1px,transparent_0.45rem)]"></div>
<div className="relative z-10">
<h3 className="text-4xl font-medium leading-tight tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                Starter
              </h3>
<div className="mt-6 flex items-end gap-3 text-black">
<p className="text-6xl font-normal leading-none tracking-tight">
                  $19
                </p>
<p className="pb-2 text-lg font-normal text-[#333333]">/seat</p>
</div>
<div className="mt-7 h-px w-full bg-black/15"></div>
<p className="mt-6 max-w-sm text-lg font-normal leading-snug text-[#333333]">
                For small teams getting started with workflow visibility.
              </p>
<div className="mt-7 grid gap-4 text-lg font-normal text-[#222222]">
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-black/50 bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Unlimited dashboards</span>
</div>
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-black/50 bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Basic automations</span>
</div>
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-black/50 bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Alerts &amp; signals</span>
</div>
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-black/50 bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Email support</span>
</div>
</div>
<a className="mt-10 inline-flex h-16 w-full items-center justify-center gap-12 rounded-md border border-black/25 bg-[#111111] px-8 text-lg font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_14px_30px_rgba(0,0,0,0.13)]" href="#">
                Start Free
                <svg className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</article>
<article className="overflow-hidden sm:p-10 lg:min-h-[35rem] bg-white/40 border-[#ff5a24] border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_22px_60px_rgba(255,90,36,0.08)]">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0)_48%)]"></div>
<div className="absolute left-1/2 top-7 -translate-x-1/2 rounded-lg bg-[#ff5a24] px-5 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(255,90,36,0.22)]">
              Most Popular
            </div>
<div className="absolute right-9 top-9 flex items-start gap-6">
<div className="size-3 bg-black"></div>
<div className="size-3 bg-[#ff5a24]"></div>
</div>
<div className="absolute right-9 top-20 grid grid-cols-4 gap-3">
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
</div>
<div className="relative z-10 pt-10">
<h3 className="text-4xl font-medium leading-tight tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                Growth
              </h3>
<div className="mt-6 flex items-end gap-3 text-black">
<p className="text-6xl font-normal leading-none tracking-tight">
                  $49
                </p>
<p className="pb-2 text-lg font-normal text-[#333333]">/seat</p>
</div>
<div className="mt-7 h-px w-full bg-black/15"></div>
<p className="mt-6 max-w-sm text-lg font-normal leading-snug text-[#333333]">
                For scaling teams that need deeper automation and coordination.
              </p>
<div className="grid gap-4 text-lg font-normal text-[#222222] mt-7 gap-x-4 gap-y-4">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-[#ff5a24] bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="">Everything in Starter</span>
</div>
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-[#ff5a24] bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="">Advanced workflows</span>
</div>
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-[#ff5a24] bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="">Shared playbooks</span>
</div>
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-[#ff5a24] bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="">Team analytics</span>
</div>
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-[#ff5a24] bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Priority support</span>
</div>
</div>
<a className="mt-10 inline-flex h-16 w-full items-center justify-center gap-12 rounded-md border border-black/25 bg-[#111111] px-8 text-lg font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_14px_30px_rgba(0,0,0,0.13)]" href="#">
                Start Growth
                <svg className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</article>
<article className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_18px_45px_rgba(0,0,0,0.04)] sm:p-10">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.92),rgba(255,255,255,0)_48%)]"></div>
<div className="absolute right-9 top-9 flex items-start gap-6">
<div className="size-3 bg-black"></div>
<div className="size-3 bg-[#ff5a24]"></div>
</div>
<div className="absolute right-9 top-20 grid grid-cols-4 gap-3">
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
<span className="size-0.5 rounded-full bg-black/55"></span>
</div>
<div className="absolute bottom-0 right-0 h-24 w-24 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.25)_0,rgba(0,0,0,0.25)_1px,transparent_1px,transparent_0.45rem)]"></div>
<div className="relative z-10">
<h3 className="text-4xl font-medium leading-tight tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                Enterprise
              </h3>
<div className="mt-8 flex items-end gap-3 text-black">
<p className="text-5xl font-normal leading-none tracking-tight">
                  Custom
                </p>
</div>
<div className="mt-7 h-px w-full bg-black/15"></div>
<p className="mt-6 max-w-sm text-lg font-normal leading-snug text-[#333333]">
                For large organizations with security, governance, and custom
                rollout needs.
              </p>
<div className="mt-7 grid gap-4 text-lg font-normal text-[#222222]">
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-black/50 bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>SSO &amp; SCIM</span>
</div>
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-black/50 bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Custom permissions</span>
</div>
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-black/50 bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Audit logs</span>
</div>
<div className="flex items-center gap-4">
<span className="grid size-6 shrink-0 place-items-center rounded-full border border-black/50 bg-white/35 text-[#ff5a24]">
<svg className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Dedicated onboarding</span>
</div>
</div>
<a className="mt-10 inline-flex h-16 w-full items-center justify-center gap-12 rounded-md border border-black/50 bg-white/15 px-8 text-lg font-medium text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]" href="#">
                Contact Sales
                <svg className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</article>
</div>
</div>
</section>
<section className="overflow-hidden sm:px-10 lg:px-16 lg:pb-16 lg:pt-24 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-24 pr-6 pb-16 pl-6 relative">
<div className="relative mx-auto w-full max-w-[112rem]">
<div className="flex items-center gap-4 text-lg font-normal uppercase tracking-wide text-[#151515]">
<span className="size-3 bg-[#ff5a24] shadow-[0_0_0_1px_rgba(255,90,36,0.18)]"></span>
<span>TESTIMONIALS</span>
</div>
<div className="mt-10 max-w-6xl">
<h2 className="text-5xl font-medium leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
            Teams trust
            <br/>
            Axisflow to keep work
            <span className="italic text-[#ff5a24]">clear.</span>
</h2>
<p className="mt-8 max-w-2xl text-xl font-normal leading-snug text-[#151515]">
            Operations, product, and infrastructure teams use Axisflow
            <br className="hidden sm:block"/>
            to stay aligned, respond faster, and drive real impact.
          </p>
</div>
<div className="mt-10 flex overflow-hidden gap-8" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<style>
            @keyframes marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-100% - 2rem)); }
            }
          </style>
<div className="flex gap-8 shrink-0 items-stretch" style={{animation: 'marquee-scroll 50s linear infinite'}}>
<article className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_22px_60px_rgba(0,0,0,0.05)] sm:p-10 w-[22rem] sm:w-[28rem] shrink-0">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0)_52%)]"></div>
<div className="relative z-10 flex flex-col h-full">
<p className="text-6xl font-medium leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “
                </p>
<blockquote className="-mt-2 max-w-md text-3xl font-normal leading-snug tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “Axisflow gave our team a much clearer way to track signals,
                  automate responses, and stay aligned across operations.”
                </blockquote>
<div className="mt-auto pt-6">
<div className="h-px w-full bg-black/10"></div>
<div className="mt-5 flex items-center gap-7">
<img alt="Maya Chen" className="size-20 shrink-0 rounded-full object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72adc0f8-ad1f-4732-a5bf-c000b45152a2_320w.webp"/>
<div className="">
<p className="text-lg font-medium leading-snug text-black">
                        Maya Chen
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Head of Operations
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Northstar
                      </p>
</div>
</div>
</div>
</div>
</article>
<article className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_22px_60px_rgba(0,0,0,0.05)] sm:p-10 w-[22rem] sm:w-[28rem] shrink-0">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0)_52%)]"></div>
<div className="relative z-10 flex flex-col h-full">
<p className="text-6xl font-medium leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “
                </p>
<blockquote className="-mt-2 max-w-md text-3xl font-normal leading-snug tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “We replaced scattered workflows with one calm system. The
                  visibility alone changed how our team works.”
                </blockquote>
<div className="mt-auto pt-6">
<div className="h-px w-full bg-black/10"></div>
<div className="mt-5 flex items-center gap-7">
<img alt="Jordan Lee" className="size-20 shrink-0 rounded-full object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/40a33daa-3579-412b-83ea-c969efcb9de9_320w.webp"/>
<div className="">
<p className="text-lg font-medium leading-snug text-black">
                        Jordan Lee
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Product Lead
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        HelioOps
                      </p>
</div>
</div>
</div>
</div>
</article>
<article className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_22px_60px_rgba(0,0,0,0.05)] sm:p-10 w-[22rem] sm:w-[28rem] shrink-0">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0)_52%)]"></div>
<div className="relative z-10 flex flex-col h-full">
<p className="text-6xl font-medium leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “
                </p>
<blockquote className="-mt-2 max-w-md text-3xl font-normal leading-snug tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “The automation and reporting helped us move faster without
                  losing control.”
                </blockquote>
<div className="mt-auto pt-6 lg:pt-10">
<div className="h-px w-full bg-black/10"></div>
<div className="mt-5 flex items-center gap-7">
<img alt="Priya Raman" className="size-20 shrink-0 rounded-full object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0231c636-bdb2-48b9-85ef-f50c1edeff37_320w.webp"/>
<div>
<p className="text-lg font-medium leading-snug text-black">
                        Priya Raman
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Infrastructure Manager
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        LatticeWorks
                      </p>
</div>
</div>
</div>
</div>
</article>
</div>
<div aria-hidden="true" className="flex gap-8 shrink-0 items-stretch" style={{animation: 'marquee-scroll 50s linear infinite'}}>
<article className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_22px_60px_rgba(0,0,0,0.05)] sm:p-10 w-[22rem] sm:w-[28rem] shrink-0">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0)_52%)]"></div>
<div className="relative z-10 flex flex-col h-full">
<p className="text-6xl font-medium leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “
                </p>
<blockquote className="-mt-2 max-w-md text-3xl font-normal leading-snug tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “Axisflow gave our team a much clearer way to track signals,
                  automate responses, and stay aligned across operations.”
                </blockquote>
<div className="mt-auto pt-6">
<div className="h-px w-full bg-black/10"></div>
<div className="mt-5 flex items-center gap-7">
<img alt="Maya Chen" className="size-20 shrink-0 rounded-full object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38b66c21-ff4c-4f15-bb4a-bee93c8a646b_320w.webp"/>
<div className="">
<p className="text-lg font-medium leading-snug text-black">
                        Maya Chen
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Head of Operations
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Northstar
                      </p>
</div>
</div>
</div>
</div>
</article>
<article className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_22px_60px_rgba(0,0,0,0.05)] sm:p-10 w-[22rem] sm:w-[28rem] shrink-0">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0)_52%)]"></div>
<div className="relative z-10 flex flex-col h-full">
<p className="text-6xl font-medium leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “
                </p>
<blockquote className="-mt-2 max-w-md text-3xl font-normal leading-snug tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “We replaced scattered workflows with one calm system. The
                  visibility alone changed how our team works.”
                </blockquote>
<div className="mt-auto pt-6">
<div className="h-px w-full bg-black/10"></div>
<div className="mt-5 flex items-center gap-7">
<img alt="Jordan Lee" className="size-20 shrink-0 rounded-full object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f869148-195a-4100-981c-34c0ee95afe0_320w.webp"/>
<div className="">
<p className="text-lg font-medium leading-snug text-black">
                        Jordan Lee
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Product Lead
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        HelioOps
                      </p>
</div>
</div>
</div>
</div>
</article>
<article className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_22px_60px_rgba(0,0,0,0.05)] sm:p-10 w-[22rem] sm:w-[28rem] shrink-0">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0)_52%)]"></div>
<div className="relative z-10 flex flex-col h-full">
<p className="text-6xl font-medium leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “
                </p>
<blockquote className="-mt-2 max-w-md text-3xl font-normal leading-snug tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “The automation and reporting helped us move faster without
                  losing control.”
                </blockquote>
<div className="mt-auto pt-6 lg:pt-10">
<div className="h-px w-full bg-black/10"></div>
<div className="mt-5 flex items-center gap-7">
<img alt="Priya Raman" className="size-20 shrink-0 rounded-full object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8808ade-0ffa-4730-9007-30454d276594_320w.webp"/>
<div>
<p className="text-lg font-medium leading-snug text-black">
                        Priya Raman
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Infrastructure Manager
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        LatticeWorks
                      </p>
</div>
</div>
</div>
</div>
</article>
</div>
<div aria-hidden="true" className="flex gap-8 shrink-0 items-stretch" style={{animation: 'marquee-scroll 50s linear infinite'}}>
<article className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_22px_60px_rgba(0,0,0,0.05)] sm:p-10 w-[22rem] sm:w-[28rem] shrink-0">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0)_52%)]"></div>
<div className="relative z-10 flex flex-col h-full">
<p className="text-6xl font-medium leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “
                </p>
<blockquote className="-mt-2 max-w-md text-3xl font-normal leading-snug tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “Axisflow gave our team a much clearer way to track signals,
                  automate responses, and stay aligned across operations.”
                </blockquote>
<div className="mt-auto pt-6">
<div className="h-px w-full bg-black/10"></div>
<div className="mt-5 flex items-center gap-7">
<img alt="Maya Chen" className="size-20 shrink-0 rounded-full object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83a8193c-5674-4f5d-a436-4cefec7e77fb_320w.webp"/>
<div className="">
<p className="text-lg font-medium leading-snug text-black">
                        Maya Chen
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Head of Operations
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Northstar
                      </p>
</div>
</div>
</div>
</div>
</article>
<article className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_22px_60px_rgba(0,0,0,0.05)] sm:p-10 w-[22rem] sm:w-[28rem] shrink-0">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0)_52%)]"></div>
<div className="relative z-10 flex flex-col h-full">
<p className="text-6xl font-medium leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “
                </p>
<blockquote className="-mt-2 max-w-md text-3xl font-normal leading-snug tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “We replaced scattered workflows with one calm system. The
                  visibility alone changed how our team works.”
                </blockquote>
<div className="mt-auto pt-6">
<div className="h-px w-full bg-black/10"></div>
<div className="mt-5 flex items-center gap-7">
<img alt="Jordan Lee" className="size-20 shrink-0 rounded-full object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a5db304-521a-4815-86d8-0c7198201df9_320w.webp"/>
<div className="">
<p className="text-lg font-medium leading-snug text-black">
                        Jordan Lee
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Product Lead
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        HelioOps
                      </p>
</div>
</div>
</div>
</div>
</article>
<article className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/35 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_22px_60px_rgba(0,0,0,0.05)] sm:p-10 w-[22rem] sm:w-[28rem] shrink-0">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0)_52%)]"></div>
<div className="relative z-10 flex flex-col h-full">
<p className="text-6xl font-medium leading-none tracking-tight text-[#ff5a24]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “
                </p>
<blockquote className="-mt-2 max-w-md text-3xl font-normal leading-snug tracking-tight text-black" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
                  “The automation and reporting helped us move faster without
                  losing control.”
                </blockquote>
<div className="mt-auto pt-6 lg:pt-10">
<div className="h-px w-full bg-black/10"></div>
<div className="mt-5 flex items-center gap-7">
<img alt="Priya Raman" className="size-20 shrink-0 rounded-full object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd29a9d7-58d1-4bab-bc8c-fd014c562441_320w.webp"/>
<div>
<p className="text-lg font-medium leading-snug text-black">
                        Priya Raman
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        Infrastructure Manager
                      </p>
<p className="mt-1 text-lg font-normal leading-snug text-[#6a6a6a]">
                        LatticeWorks
                      </p>
</div>
</div>
</div>
</div>
</article>
</div>
</div>
</div>
</section>
<section className="overflow-hidden sm:px-10 lg:px-16 lg:pb-12 lg:pt-24 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-24 pr-6 pb-12 pl-6 relative">
<div className="relative mx-auto w-full max-w-[112rem]">
<div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
<div className="relative z-10">
<div className="mb-8 flex items-center gap-3 text-base font-medium uppercase tracking-wide text-[#151515]">
<span className="size-3 bg-[#ff5a24]"></span>
<span>GET STARTED</span>
</div>
<h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
              Bring calm to
              <br/>
<span className="italic text-[#ff5a24]">every workflow.</span>
</h2>
<p className="mt-7 max-w-2xl text-xl font-normal leading-snug text-[#333333]">
              Stay aligned, reduce noise, and move faster with
              <br className="hidden sm:block"/>
              AI-powered operations built for your team.
            </p>
<div className="mt-10 flex flex-col gap-5 sm:flex-row">
<a className="inline-flex h-16 w-full items-center justify-center gap-16 rounded-md border border-black/20 bg-[#111111] px-8 text-lg font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_45px_rgba(0,0,0,0.12)] sm:w-72" href="#">
                Start Free
                <svg className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex h-16 w-full items-center justify-center gap-16 rounded-md border border-black/70 bg-white/20 px-8 text-lg font-medium text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:w-72" href="#">
                Book Demo
                <svg className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="relative hidden min-h-[23rem] overflow-hidden lg:block">

<div className="absolute left-[5%] top-[16%] h-16 w-24 opacity-35 [background-image:radial-gradient(circle,rgba(0,0,0,0.45)_1px,transparent_1.2px)] [background-size:1.6rem_1.2rem]"></div>
<div className="absolute right-[23%] top-[17%] h-16 w-24 opacity-40 [background-image:radial-gradient(circle,rgba(0,0,0,0.5)_1px,transparent_1.2px)] [background-size:1.5rem_1.2rem]"></div>
<div className="absolute bottom-[18%] left-[18%] h-12 w-52 opacity-25 [background-image:radial-gradient(circle,rgba(0,0,0,0.35)_1px,transparent_1.2px)] [background-size:1.5rem_1.2rem]"></div>

<div className="absolute left-[7%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-[#ff5a24]/80"></div>

<div className="absolute left-[13%] right-[23%] bottom-[30%] h-px bg-[#ff5a24]/60"></div>

<div className="absolute left-[28%] right-[8%] top-1/2 h-24 -translate-y-1/2 rounded-r-full border-r border-t border-[#ff5a24]/30"></div>
<div className="absolute left-[22%] right-[17%] top-[24%] h-24 rounded-r-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.03),transparent)]"></div>
<div className="absolute left-[20%] right-[25%] top-[39%] h-16 rounded-r-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.025),transparent)]"></div>

<span className="absolute left-[7%] top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#ff5a24]"></span>
<span className="absolute left-[14%] bottom-[27%] size-3 rounded-sm bg-black/85"></span>
<span className="absolute right-[5%] top-[28%] size-2 rounded-sm bg-black/85"></span>

<div className="absolute right-[2%] top-1/2 -translate-y-1/2">
<div className="relative h-48 w-48">
<div className="absolute inset-0 rounded-full border border-black/10"></div>
<div className="absolute inset-[8%] rounded-full border border-black/10"></div>
<div className="absolute inset-[16%] rounded-full border border-black/10"></div>
<div className="absolute inset-[25%] rounded-full border border-[#ff5a24]/18"></div>
<div className="absolute inset-[34%] rounded-full border border-[#ff5a24]/22 bg-[#ff5a24]/5"></div>

<div className="absolute left-1/2 top-[10%] h-[80%] w-px -translate-x-1/2 bg-black/8"></div>
<div className="absolute left-[10%] top-1/2 h-px w-[80%] -translate-y-1/2 bg-black/8"></div>

<div className="absolute inset-[42%] rounded-full bg-[#ff5a24]/10 blur-md"></div>
<span className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a24] shadow-[0_0_30px_rgba(255,90,36,0.16)]"></span>
</div>
</div>
</div>
</div>
<div className="mt-14 h-px w-full bg-black/15 lg:mt-16"></div>
<div className="grid gap-12 py-14 lg:grid-cols-[1.15fr_0.75fr_0.9fr_0.85fr_0.75fr] lg:gap-12">
<div className="max-w-sm">
<a className="select-none text-4xl font-medium uppercase tracking-[0.22em] text-black" href="#">
              AXISFLOW
            </a>
<p className="mt-8 text-lg font-normal leading-snug text-[#333333]">
              AI-powered operations that help teams stay aligned, automate with
              confidence, and deliver real impact.
            </p>
<form className="mt-12">
<label className="block text-base font-medium text-black" htmlFor="footer-email">
                Get product updates
              </label>
<div className="mt-3 flex h-14 overflow-hidden rounded-md border border-black/15 bg-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
<input className="min-w-0 flex-1 bg-transparent px-5 text-base font-normal text-black outline-none placeholder:text-[#8a8a8a]" id="footer-email" placeholder="Enter your email" type="email"/>
<button aria-label="Subscribe" className="grid h-14 w-16 shrink-0 place-items-center rounded-md border-l border-black/15 bg-[#111111] text-white" type="submit">
<svg className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</form>
</div>
<div>
<div className="mb-7 flex items-center gap-4 text-base font-medium uppercase tracking-wide text-black">
<span className="size-2 bg-[#ff5a24]"></span>
<span>Product</span>
</div>
<nav className="grid gap-4 text-lg font-normal text-[#333333]">
<a href="#">Overview</a>
<a href="#">Features</a>
<a href="#">Automation</a>
<a href="#">Integrations</a>
<a href="#">Pricing</a>
<a href="#">Security</a>
</nav>
</div>
<div className="">
<div className="mb-7 flex items-center gap-4 text-base font-medium uppercase tracking-wide text-black">
<span className="size-2 bg-[#ff5a24]"></span>
<span>Solutions</span>
</div>
<nav className="grid gap-4 text-lg font-normal text-[#333333]">
<a className="" href="#">Operations Teams</a>
<a className="" href="#">IT &amp; Support</a>
<a className="" href="#">Professional Services</a>
<a className="" href="#">Security &amp; Compliance</a>
<a className="" href="#">Use Cases</a>
<a className="" href="#">Customer Stories</a>
</nav>
</div>
<div className="">
<div className="mb-7 flex items-center gap-4 text-base font-medium uppercase tracking-wide text-black">
<span className="size-2 bg-[#ff5a24]"></span>
<span>Resources</span>
</div>
<nav className="grid gap-4 text-lg font-normal text-[#333333]">
<a href="#">Blog</a>
<a className="" href="#">Guides &amp; Playbooks</a>
<a className="" href="#">Webinars</a>
<a className="" href="#">Help Center</a>
<a className="" href="#">Documentation</a>
<a className="" href="#">Status</a>
</nav>
</div>
<div>
<div className="mb-7 flex items-center gap-4 text-base font-medium uppercase tracking-wide text-black">
<span className="size-2 bg-[#ff5a24]"></span>
<span>Company</span>
</div>
<nav className="grid gap-4 text-lg font-normal text-[#333333]">
<a href="#">About Us</a>
<a href="#">Careers</a>
<a href="#">Partners</a>
<a href="#">Press</a>
<a href="#">Contact Us</a>
</nav>
</div>
</div>
<div className="h-px w-full bg-black/15"></div>
<div className="flex flex-col gap-8 py-10 text-base font-normal text-[#4c4c4c] lg:flex-row lg:items-center lg:justify-between">
<p>© 2025 Axisflow, Inc. All rights reserved.</p>
<div className="flex items-center gap-7 text-black">
<span className="hidden h-7 w-px bg-black/15 sm:block"></span>
<a aria-label="LinkedIn" className="grid size-8 place-items-center" href="#">
<svg className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<span className="h-7 w-px bg-black/15"></span>
<a aria-label="X" className="grid size-8 place-items-center" href="#">
<svg className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4l16 16"></path>
<path d="M20 4 4 20"></path>
</svg>
</a>
<span className="h-7 w-px bg-black/15"></span>
<a aria-label="YouTube" className="grid size-8 place-items-center" href="#">
<svg className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
<path d="m10 15 5-3-5-3z"></path>
</svg>
</a>
<span className="hidden h-7 w-px bg-black/15 sm:block"></span>
</div>
<nav className="flex flex-wrap items-center gap-6 text-base font-normal text-[#4c4c4c]">
<a href="#">Privacy Policy</a>
<span className="size-1 rounded-full bg-[#ff5a24]"></span>
<a href="#">Terms of Service</a>
<span className="size-1 rounded-full bg-[#ff5a24]"></span>
<a href="#">Trust Center</a>
</nav>
</div>
</div>
</section>

<style className="">
      /*
        Sequence animation intro. Usage:

        1) Insert this code in the <head>

        2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both]
      */
      @keyframes animationIn {
        0% {
          opacity: 0;
          transform: translateY(30px);
          filter: blur(8px);
        }

        100% {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }
      }
    </style>

    </>
  );
}

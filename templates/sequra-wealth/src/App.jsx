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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", function() {
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
      });
    


      (function () {
        function playVideo(video) {
          var promise = video.play();
          if (promise && typeof promise.catch === "function") {
            promise.catch(function () {});
          }
        }

        function setupVideo(video) {
          if (video.__auraVideoReady === true) return;
          video.__auraVideoReady = true;
          video.removeAttribute("data-aura-video-ready");
          video.removeAttribute("data-aura-video-played");
          video.muted = true;
          video.playsInline = true;

          var preset = video.dataset.auraVideoPreset || "loop-in-view";
          if (preset === "hover") {
            video.addEventListener("mouseenter", function () {
              playVideo(video);
            });
            video.addEventListener("mouseleave", function () {
              video.pause();
              video.currentTime = 0;
            });
            return;
          }

          if (!("IntersectionObserver" in window)) {
            playVideo(video);
            return;
          }

          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                if (preset === "play-once" && video.__auraVideoPlayed === true) {
                  return;
                }
                playVideo(video);
              } else {
                video.pause();
              }
            });
          }, { threshold: 0.35 });

          if (preset === "play-once") {
            video.addEventListener("ended", function () {
              video.__auraVideoPlayed = true;
            }, { once: true });
          }

          observer.observe(video);
        }

        function setupVideos() {
          document
            .querySelectorAll("video[data-aura-video-preset]")
            .forEach(setupVideo);
        }

        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", setupVideos);
        } else {
          setupVideos();
        }
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full fixed top-0 z-50 glass-panel border-t-0 border-l-0 border-r-0">
<nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-8 lg:px-12">
<a className="font-logo shrink-0 text-2xl font-medium tracking-[0.20em] text-[#171411]" href="#">
          SEQURA
        </a>
<div className="hidden items-center gap-10 text-sm font-medium tracking-tight text-[#2c2722] lg:flex">
<a className="transition hover:text-[#98704a]" href="#platform">
            Platform
          </a>
<a className="transition hover:text-[#98704a]" href="#solutions">
            Solutions
          </a>
<a className="transition hover:text-[#98704a]" href="#journey">
            Workflow
          </a>
<a className="transition hover:text-[#98704a]" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-5">
<a className="hidden text-sm font-medium text-[#2c2722] transition hover:text-[#98704a] sm:inline-flex" href="#">
            Sign In
          </a>
<a className="inline-flex h-12 items-center justify-center rounded-lg bg-[#171614] px-6 text-sm font-semibold text-white shadow-lg transition hover:bg-[#29231e] hover:-translate-y-0.5" href="#contact">
            Request Access
          </a>
</div>
</nav>
</header>
<main className="pt-28">

<section className="pb-16 pt-8 lg:pb-24 lg:pt-16">
<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
<div className="grid items-stretch gap-14 lg:grid-cols-[1fr_1fr] xl:gap-20">

<div className="flex flex-col justify-center py-10">
<div className="max-w-xl reveal-on-scroll delay-100">
<div className="mb-6 flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#d8c9b8] bg-[#f7efe6]">
<iconify-icon className="text-sm text-[#9a744d]" icon="solar:shield-check-linear"></iconify-icon>
</span>
<span className="text-xs font-semibold tracking-wide text-[#9a744d] uppercase">
                    Enterprise Wealth SaaS
                  </span>
</div>
<h1 className="font-display text-5xl font-normal leading-[0.95] tracking-tight text-[#151310] sm:text-6xl lg:text-7xl">
                  See your financial future before you invest.
                </h1>
<div className="mt-8 h-px w-16 bg-[#9f7851]"></div>
<p className="mt-7 text-lg font-medium leading-relaxed tracking-tight text-[#3a332d]">
                  Connect your portfolios, explore predictive scenarios, and
                  generate polished financial strategies in minutes with
                  Sequra's cinematic intelligence.
                </p>
<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
<a className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-[#171614] px-8 text-base font-semibold text-white shadow-[0_24px_54px_rgba(28,22,17,0.18)] transition hover:-translate-y-0.5 hover:bg-[#29231f]" href="#contact">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
                    Build a Strategy
                  </a>
<a className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-[#d1c4b7] bg-[#f1ebe3] px-8 text-base font-semibold text-[#1c1915] transition hover:-translate-y-0.5 hover:border-[#c6b49f] hover:bg-[#f8f2ea]" href="#platform">
                    Explore Platform
                  </a>
</div>
<div className="mt-12 flex items-center gap-8 text-[#181511]">
<div>
<div className="text-xs font-medium text-[#756b60]">
                      Assets Modeled
                    </div>
<div className="mt-1 text-xl font-semibold tracking-tight">
                      $12B+
                    </div>
</div>
<div className="h-10 w-px bg-[#d9cfc4]"></div>
<div>
<div className="text-xs font-medium text-[#756b60]">
                      Data Accuracy
                    </div>
<div className="mt-1 text-xl font-semibold tracking-tight">
                      99.9%
                    </div>
</div>
</div>
</div>
</div>

<div className="relative flex min-h-[600px] items-center justify-center lg:justify-end reveal-on-scroll delay-300">
<div className="absolute inset-0 right-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl z-0 ml-auto cursor-pointer group" onmouseenter="this.querySelector('video').play()" onmouseleave="var v=this.querySelector('video'); if(v) { v.pause(); v.currentTime=0; }">
<video aria-label="Wealth Management Office" className="w-full h-full object-cover opacity-90" data-aura-generated-video="true" data-aura-video-preset="hover" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91dff7d8-480a-40db-83e2-8cf85571f8b8_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779687198558-c5481b5d-4c51-4ffd-b621-ab2c06b19b31.mp4"></video>
<div className="absolute inset-0 bg-[#171411]/20 mix-blend-multiply pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#f5f0e9] via-transparent to-transparent opacity-30 pointer-events-none"></div>
</div>
<div className="premium-panel relative w-full max-w-sm lg:max-w-md rounded-2xl p-6 z-10 overflow-hidden group shadow-[0_32px_64px_rgba(23,20,17,0.4)] ml-auto lg:mr-8 mt-24 lg:mt-0 bg-[#eee5da]/95 backdrop-blur-sm">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-[#d8c9b8]/50">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[#171411] flex items-center justify-center shadow-inner text-[#f5f0e9]">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-[#171411]">
                        Global Portfolio
                      </div>
<div className="text-xs font-medium text-[#7d7267]">
                        Real-time synchronization
                      </div>
</div>
</div>
<iconify-icon className="text-[#a67b4f]" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<div className="mb-8">
<div className="text-xs font-semibold text-[#7d7267] uppercase tracking-widest mb-2">
                    Net Value
                  </div>
<div className="font-display text-5xl tracking-tight text-[#171411]">
                    $4,285,190
                  </div>
<div className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#92a68a]">
<iconify-icon icon="solar:trend-up-linear"></iconify-icon>
                    +12.4% (YTD)
                  </div>
</div>
<div className="relative h-48 w-full flex items-end justify-between gap-2 px-2 border-b border-l border-[#d8c9b8] pb-2 pl-2">
<div className="absolute top-0 left-2 right-0 h-px bg-[#d8c9b8]/30"></div>
<div className="absolute top-1/2 left-2 right-0 h-px bg-[#d8c9b8]/30 -translate-y-1/2"></div>
<div className="w-1/6 h-[30%] data-bar-muted rounded-t-md transition-all duration-700 group-hover:h-[40%]"></div>
<div className="w-1/6 h-[45%] data-bar-muted rounded-t-md transition-all duration-700 group-hover:h-[35%]"></div>
<div className="w-1/6 h-[60%] data-bar rounded-t-md relative transition-all duration-700 group-hover:h-[75%]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#171411]"></div>
</div>
<div className="w-1/6 h-[40%] data-bar-muted rounded-t-md transition-all duration-700 group-hover:h-[50%]"></div>
<div className="w-1/6 h-[70%] data-bar rounded-t-md relative transition-all duration-700 group-hover:h-[85%]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#171411]"></div>
</div>
</div>
<div className="absolute -right-6 top-32 glass-panel p-4 rounded-xl shadow-2xl w-48 transition-transform duration-500 group-hover:-translate-y-2 hidden sm:block">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#a67b4f] text-lg" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-xs font-semibold text-[#171411]">
                      Risk Analysis
                    </span>
</div>
<div className="text-sm font-medium leading-tight text-[#171411]">
                    Optimized for low volatility.
                  </div>
<div className="mt-3 h-1.5 w-full bg-[#d8c9b8] rounded-full overflow-hidden">
<div className="h-full bg-[#a67b4f] w-[82%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-[#eee5da]/30 border-y border-[#d8c9b8]/50" id="platform">
<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
<div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
<div className="reveal-on-scroll">
<div className="mb-5 flex flex-col items-start gap-3 text-sm font-medium tracking-tight text-[#9a744d]">
<span>Platform Philosophy</span>
<span className="h-px w-12 bg-[#9f7851]"></span>
</div>
<h2 className="font-display text-4xl font-normal leading-[1.05] tracking-tight text-[#151310] sm:text-5xl lg:text-[3.5rem]">
                Secure portfolios begin with better direction.
              </h2>
<p className="mt-6 text-base font-medium leading-relaxed tracking-tight text-[#3a332d]">
                Sequra brings clarity to complex wealth architecture. Aggregate
                accounts, test stress scenarios, and view predictive outcomes—so
                you can move from uncertainty to an investment vision you trust.
              </p>
<div className="relative mt-10 w-full max-w-md rounded-2xl overflow-hidden shadow-xl reveal-on-scroll">
<img alt="Platform Architecture" className="w-full h-64 object-cover" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4aceac50-657c-4afd-89b7-f6a90ea0d909_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4aceac50-657c-4afd-89b7-f6a90ea0d909_3840w.png"/>
<div className="absolute inset-0 bg-[#171411]/20 mix-blend-multiply"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#171411]/90 via-[#171411]/60 to-transparent text-[#f5f0e9]">
<span className="font-display -mt-2 block text-5xl leading-none text-[#a67b4f]">
                    “
                  </span>
<p className="font-display text-xl font-normal leading-snug tracking-tight mt-1">
                    AI should sharpen advisory, not replace it.
                  </p>
<p className="mt-3 text-[10px] font-semibold tracking-wider text-[#d8c9b8] uppercase">
                    — Sequra Intelligence
                  </p>
</div>
</div>
</div>
<div className="flex flex-col gap-6 reveal-on-scroll delay-200">

<div className="premium-panel p-6 rounded-2xl flex items-start gap-5 transition hover:-translate-y-1">
<div className="h-12 w-12 shrink-0 rounded-full border border-[#d8c9b8] bg-[#f5f0e9] flex items-center justify-center">
<iconify-icon className="text-2xl text-[#9d7650]" icon="solar:eye-scan-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-[#1c1814]">
                    Clarity First
                  </h3>
<p className="mt-2 text-sm font-medium leading-relaxed text-[#756b60]">
                    Turn fragmented data into a unified, clear financial
                    direction with automated aggregation and tagging.
                  </p>
</div>
</div>

<div className="premium-panel p-6 rounded-2xl flex items-start gap-5 transition hover:-translate-y-1">
<div className="h-12 w-12 shrink-0 rounded-full border border-[#d8c9b8] bg-[#f5f0e9] flex items-center justify-center">
<iconify-icon className="text-2xl text-[#9d7650]" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-[#1c1814]">
                    Risk, Refined
                  </h3>
<p className="mt-2 text-sm font-medium leading-relaxed text-[#756b60]">
                    Curated stress-tests and macro-economic models chosen with
                    intention to fortify your positions.
                  </p>
</div>
</div>

<div className="premium-panel p-6 rounded-2xl flex items-start gap-5 transition hover:-translate-y-1">
<div className="h-12 w-12 shrink-0 rounded-full border border-[#d8c9b8] bg-[#f5f0e9] flex items-center justify-center">
<iconify-icon className="text-2xl text-[#9d7650]" icon="solar:verified-check-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-[#1c1814]">
                    Trusted Results
                  </h3>
<p className="mt-2 text-sm font-medium leading-relaxed text-[#756b60]">
                    Beautiful, actionable reports that you can confidently
                    present to stakeholders or your family office.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 lg:py-24 bg-[#f5f0e9]">
<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
<div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center mb-16">
<div className="reveal-on-scroll">
<div className="mb-4 text-xs font-semibold tracking-widest uppercase text-[#9a744d]">
                Sequra Intelligence
              </div>
<h2 className="font-display text-4xl font-normal leading-[1.05] tracking-tight text-[#151310] sm:text-5xl lg:text-[3.5rem] mb-6">
                Intelligence behind every portfolio strategy.
              </h2>
<p className="text-base font-medium leading-relaxed text-[#3a332d] mb-8">
                Sequra AI reads your assets, interprets your risk tolerance,
                curates investments, and proposes portfolio improvements —
                instantly.
              </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-medium text-[#171411]">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8c9b8] bg-white">
<iconify-icon className="text-[#a67b4f]" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
                  Understands your assets
                </li>
<li className="flex items-center gap-3 text-sm font-medium text-[#171411]">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8c9b8] bg-white">
<iconify-icon className="text-[#a67b4f]" icon="solar:target-linear"></iconify-icon>
</div>
                  Matches your risk profile
                </li>
<li className="flex items-center gap-3 text-sm font-medium text-[#171411]">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8c9b8] bg-white">
<iconify-icon className="text-[#a67b4f]" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
                  Curates with intention
                </li>
<li className="flex items-center gap-3 text-sm font-medium text-[#171411]">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8c9b8] bg-white">
<iconify-icon className="text-[#a67b4f]" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
                  Optimizes every detail
                </li>
</ul>
</div>
<div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl reveal-on-scroll delay-200">
<img alt="Dashboard" className="w-full h-full object-cover" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a54d26b1-0511-41fc-9c5c-100696c3ad33_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a54d26b1-0511-41fc-9c5c-100696c3ad33_3840w.png"/>
<div className="absolute left-1/2 -translate-x-1/2 top-4 flex items-center bg-[#171411]/80 backdrop-blur-md rounded-full p-1 border border-white/10 z-20 text-[10px] font-semibold text-white">
<div className="px-3 py-1 bg-white text-[#171411] rounded-full">
                  Current
                </div>
<div className="px-3 py-1 opacity-60">AI Strategy</div>
</div>
<div className="absolute right-4 top-4 bottom-4 w-72 bg-[#171411]/95 backdrop-blur-md rounded-xl p-5 shadow-2xl border border-white/10 flex flex-col text-white">
<div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
<span className="text-sm font-semibold">Sequra AI Analysis</span>
<iconify-icon className="text-[#a67b4f]" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="space-y-3 flex-1 overflow-y-auto pr-1">
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
<iconify-icon className="text-lg text-[#a67b4f] mt-0.5" icon="solar:scanner-linear"></iconify-icon>
<div>
<div className="text-xs font-semibold">Portfolio Scan</div>
<div className="text-[10px] text-white/60">
                        12 Assets • Diversification: Good
                      </div>
</div>
<iconify-icon className="ml-auto text-white/40" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
<iconify-icon className="text-lg text-[#a67b4f] mt-0.5" icon="solar:link-circle-linear"></iconify-icon>
<div>
<div className="text-xs font-semibold">Risk Match</div>
<div className="text-[10px] text-white/60">
                        Moderate • 92% Match
                      </div>
</div>
<iconify-icon className="ml-auto text-white/40" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
<iconify-icon className="text-lg text-[#a67b4f] mt-0.5" icon="solar:pie-chart-2-linear"></iconify-icon>
<div>
<div className="text-xs font-semibold">Asset Allocation</div>
<div className="flex gap-1 mt-1">
<div className="h-2 w-2 rounded-full bg-[#a67b4f]"></div>
<div className="h-2 w-2 rounded-full bg-[#d8c9b8]"></div>
<div className="h-2 w-2 rounded-full bg-[#756b60]"></div>
<div className="h-2 w-2 rounded-full bg-[#3a332d]"></div>
</div>
</div>
<iconify-icon className="ml-auto text-white/40" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
<iconify-icon className="text-lg text-[#a67b4f] mt-0.5" icon="solar:lightbulb-bolt-linear"></iconify-icon>
<div>
<div className="text-xs font-semibold">Market Analysis</div>
<div className="text-[10px] text-white/60">
                        Recommend: Defensive Tilt
                      </div>
</div>
<iconify-icon className="ml-auto text-white/40" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
<button className="w-full mt-4 h-10 rounded-lg bg-white text-[11px] font-semibold text-[#171411] transition hover:bg-[#eee5da] flex items-center justify-center gap-2">
                  View Full Report
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl bg-[#eee5da]/50 p-6 border border-[#d8c9b8]/50 reveal-on-scroll">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#a67b4f]" icon="solar:database-linear"></iconify-icon>
<span className="text-xs font-medium text-[#3a332d] leading-tight">
                Trained on millions
                <br/>
                of market data points
              </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#a67b4f]" icon="solar:cpu-bolt-linear"></iconify-icon>
<span className="text-xs font-medium text-[#3a332d] leading-tight">
                Financial logic meets
                <br/>
                artificial intelligence
              </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#a67b4f]" icon="solar:refresh-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-[#3a332d] leading-tight">
                Continuously learning
                <br/>
                and improving
              </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#a67b4f]" icon="solar:user-id-linear"></iconify-icon>
<span className="text-xs font-medium text-[#3a332d] leading-tight">
                Your wealth,
                <br/>
                intelligently realized
              </span>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24" id="journey">
<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
<div className="text-center max-w-2xl mx-auto reveal-on-scroll">
<h2 className="font-display text-4xl font-normal leading-[1.05] tracking-tight text-[#151310] sm:text-5xl">
              From raw data to refined strategy.
            </h2>
<p className="mt-6 text-base font-medium leading-relaxed text-[#3a332d]">
              Sequra transforms your wealth management process in four elegant
              steps.
            </p>
</div>
<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">

<div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px border-t-2 border-dashed border-[#d8c9b8]"></div>

<div className="relative flex flex-col items-center text-center reveal-on-scroll delay-100">
<div className="h-24 w-24 rounded-full premium-panel flex items-center justify-center z-10 mb-6 group transition hover:scale-105">
<iconify-icon className="text-4xl text-[#171411] transition group-hover:text-[#9d7650]" icon="solar:link-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1c1814]">
                1. Connect Assets
              </h3>
<p className="mt-3 text-sm font-medium text-[#756b60] max-w-xs">
                Securely sync banking, brokerage, and alternative assets in one
                space.
              </p>
</div>

<div className="relative flex flex-col items-center text-center reveal-on-scroll delay-200">
<div className="h-24 w-24 rounded-full premium-panel flex items-center justify-center z-10 mb-6 group transition hover:scale-105">
<iconify-icon className="text-4xl text-[#171411] transition group-hover:text-[#9d7650]" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1c1814]">
                2. Run Scenarios
              </h3>
<p className="mt-3 text-sm font-medium text-[#756b60] max-w-xs">
                Apply AI-driven market simulations to test portfolio resilience.
              </p>
</div>

<div className="relative flex flex-col items-center text-center reveal-on-scroll delay-300">
<div className="h-24 w-24 rounded-full premium-panel flex items-center justify-center z-10 mb-6 group transition hover:scale-105">
<iconify-icon className="text-4xl text-[#171411] transition group-hover:text-[#9d7650]" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1c1814]">
                3. Generate Plans
              </h3>
<p className="mt-3 text-sm font-medium text-[#756b60] max-w-xs">
                Create tailored investment mandates based on your risk profile.
              </p>
</div>

<div className="relative flex flex-col items-center text-center reveal-on-scroll delay-400">
<div className="h-24 w-24 rounded-full premium-panel flex items-center justify-center z-10 mb-6 group transition hover:scale-105">
<iconify-icon className="text-4xl text-[#171411] transition group-hover:text-[#9d7650]" icon="solar:rocket-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1c1814]">
                4. Execute &amp; Monitor
              </h3>
<p className="mt-3 text-sm font-medium text-[#756b60] max-w-xs">
                Track deviations and rebalance beautifully through the
                dashboard.
              </p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-[#eee5da]/30 border-t border-[#d8c9b8]/50" id="team">
<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="font-display text-4xl font-normal leading-[1.05] tracking-tight text-[#151310] sm:text-5xl">
              Backed by visionary intelligence.
            </h2>
<p className="mt-6 text-base font-medium leading-relaxed text-[#3a332d]">
              A specialized team of quantitative analysts, financial engineers,
              and designers crafting the future of wealth platforms.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll delay-200">
<div className="group relative overflow-hidden rounded-2xl h-[26rem]">
<img alt="Marcus Thorne" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8cdd029-4e3c-4ed5-9791-d547cf068be1_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8cdd029-4e3c-4ed5-9791-d547cf068be1_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-[#171411]/20 to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-[#f5f0e9] transform transition duration-500 group-hover:-translate-y-2">
<div className="text-xl font-semibold tracking-tight">
                  Marcus Thorne
                </div>
<div className="text-sm font-medium text-[#d8c9b8] mt-1">
                  Chief Architect
                </div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl h-[26rem] md:mt-12 shadow-xl">
<img alt="Elena Rostova" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b061f490-e132-4efb-8def-19b63c349152_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b061f490-e132-4efb-8def-19b63c349152_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-[#171411]/20 to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-[#f5f0e9] transform transition duration-500 group-hover:-translate-y-2">
<div className="text-xl font-semibold tracking-tight">
                  Elena Rostova
                </div>
<div className="text-sm font-medium text-[#d8c9b8] mt-1">
                  Head of Quantitative Strategy
                </div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl h-[26rem]">
<img alt="Julian Vance" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1574eec9-016e-40cc-8d2d-04de1c9cc1b0_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1574eec9-016e-40cc-8d2d-04de1c9cc1b0_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-[#171411]/20 to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-[#f5f0e9] transform transition duration-500 group-hover:-translate-y-2">
<div className="text-xl font-semibold tracking-tight">
                  Julian Vance
                </div>
<div className="text-sm font-medium text-[#d8c9b8] mt-1">
                  VP of Client Experience
                </div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-12">
<div className="mx-auto max-w-7xl relative rounded-3xl overflow-hidden shadow-2xl">
<div className="absolute inset-0">
<img alt="Luxurious Office" className="w-full h-full object-cover" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c542cdc6-c721-4894-b87c-2a64e42fecd7_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c542cdc6-c721-4894-b87c-2a64e42fecd7_3840w.png"/>
<div className="absolute inset-0 bg-[#171411]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 pt-20 pb-8 px-6 lg:px-16 flex flex-col items-center justify-between min-h-[600px]">
<div className="premium-panel bg-[#f5f0e9]/95 backdrop-blur-md rounded-3xl p-10 md:p-14 max-w-2xl text-center shadow-[0_32px_64px_rgba(0,0,0,0.3)] reveal-on-scroll">
<h2 className="font-display text-4xl font-normal leading-[1.05] tracking-tight text-[#151310] sm:text-5xl lg:text-[3.5rem] mb-6">
                Design the next version of your portfolio with clarity.
              </h2>
<div className="mx-auto h-px w-16 bg-[#a67b4f] mb-6"></div>
<p className="text-sm font-medium leading-relaxed text-[#3a332d] mb-10 max-w-lg mx-auto">
                Connect your accounts and explore multiple strategies, assets,
                and allocations in minutes. Make confident financial decisions
                before you commit.
              </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#171614] px-8 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#29231f]" href="#contact">
<iconify-icon icon="solar:upload-minimalistic-linear"></iconify-icon>
                  Connect Accounts
                </a>
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#d8c9b8] bg-white px-8 text-sm font-semibold text-[#171411] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f5f0e9]" href="#contact">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                  Book a Demo
                </a>
</div>
<div className="grid grid-cols-3 divide-x divide-[#d8c9b8]/50 text-left border-t border-[#d8c9b8]/50 pt-6">
<div className="px-4 flex flex-col gap-1">
<div className="flex items-center gap-1 text-xs text-[#756b60]">
<iconify-icon className="text-[#a67b4f]" icon="solar:users-group-rounded-linear"></iconify-icon>
                    Loved by
                  </div>
<div className="text-sm font-semibold text-[#171411]">
                    50K+ investors
                  </div>
</div>
<div className="px-4 flex flex-col gap-1">
<div className="flex items-center gap-1 text-xs text-[#756b60]">
<iconify-icon className="text-[#a67b4f]" icon="solar:shield-check-linear"></iconify-icon>
                    Trusted by
                  </div>
<div className="text-sm font-semibold text-[#171411]">
                    Wealth Pros
                  </div>
</div>
<div className="px-4 flex flex-col gap-1">
<div className="flex items-center gap-1 text-xs text-[#756b60]">
<iconify-icon className="text-[#a67b4f]" icon="solar:star-fall-linear"></iconify-icon>
                    User Rating
                  </div>
<div className="text-sm font-semibold text-[#171411]">4.9/5</div>
</div>
</div>
</div>
<div className="mt-16 w-full max-w-5xl rounded-2xl bg-[#171411]/80 backdrop-blur-md border border-white/10 p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-8 reveal-on-scroll delay-200">
<div className="flex-1 border-r border-white/10 pr-8">
<p className="font-display text-lg text-white leading-snug">
                  "Sequra helps us show clients what's possible — long before we
                  reallocate a single asset."
                </p>
<p className="text-xs text-[#a67b4f] mt-3">— Wealth Advisor</p>
</div>
<div className="flex-1 grid grid-cols-3 gap-6 text-center text-white">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-xl text-[#a67b4f]" icon="solar:user-linear"></iconify-icon>
<div className="text-xs font-semibold">For Investors</div>
<div className="text-[10px] text-white/60">
                    Design with confidence before you invest.
                  </div>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-xl text-[#a67b4f]" icon="solar:case-linear"></iconify-icon>
<div className="text-xs font-semibold">For Advisors</div>
<div className="text-[10px] text-white/60">
                    Present ideas faster and beautifully.
                  </div>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-xl text-[#a67b4f]" icon="solar:buildings-linear"></iconify-icon>
<div className="text-xs font-semibold">For Institutions</div>
<div className="text-[10px] text-white/60">
                    Help clients see true potential.
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 lg:py-24 bg-[#171411] text-[#f5f0e9]">
<div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 reveal-on-scroll">
<div className="text-center mb-12">
<iconify-icon className="text-4xl text-[#a67b4f] mb-4" icon="solar:stars-linear"></iconify-icon>
<h2 className="font-display text-3xl font-normal leading-tight tracking-tight sm:text-4xl">
              "Sequra brings clarity to our firm's advisory process. We show
              clients exactly what is possible, long before we reallocate."
            </h2>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="h-12 w-12 rounded-full bg-[#eee5da] p-1">
<div className="h-full w-full rounded-full bg-[#171411] flex items-center justify-center">
<span className="text-sm font-display text-[#a67b4f]">EW</span>
</div>
</div>
<div className="text-left">
<div className="text-sm font-semibold tracking-tight">
                  Eleanor Vance
                </div>
<div className="text-xs text-[#a67b4f]">
                  Managing Partner, Vance Wealth
                </div>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 text-center">
<div>
<div className="text-3xl font-display text-[#a67b4f]">250+</div>
<div className="text-xs font-medium uppercase tracking-widest text-white/60 mt-1">
                Advisory Firms
              </div>
</div>
<div>
<div className="text-3xl font-display text-[#a67b4f]">$40B</div>
<div className="text-xs font-medium uppercase tracking-widest text-white/60 mt-1">
                Assets Managed
              </div>
</div>
<div>
<div className="text-3xl font-display text-[#a67b4f]">99%</div>
<div className="text-xs font-medium uppercase tracking-widest text-white/60 mt-1">
                Client Retention
              </div>
</div>
<div>
<div className="text-3xl font-display text-[#a67b4f]">SOC2</div>
<div className="text-xs font-medium uppercase tracking-widest text-white/60 mt-1">
                Certified Secure
              </div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-[#f5f0e9]" id="pricing">
<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d8c9b8] bg-[#f3eadf] px-4 py-2 text-xs font-semibold tracking-tight text-[#9a744d]">
<iconify-icon icon="solar:tag-linear"></iconify-icon>
              Transparent Pricing
            </div>
<h2 className="font-display text-4xl font-normal leading-[1.05] tracking-tight text-[#151310] sm:text-5xl">
              Choose the plan that fits your strategy.
            </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

<div className="premium-panel rounded-2xl p-8 flex flex-col h-full reveal-on-scroll delay-100">
<h3 className="font-display text-3xl text-[#171411]">Personal</h3>
<p className="mt-3 text-sm font-medium text-[#756b60] h-10">
                For individual investors managing their own wealth.
              </p>
<div className="mt-6 flex items-baseline gap-1">
<span className="font-display text-4xl text-[#171411]">$49</span>
<span className="text-sm font-semibold text-[#7d7267]">/mo</span>
</div>
<div className="my-8 h-px w-full bg-[#d8c9b8]/50"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-medium text-[#3a332d]">
<iconify-icon className="text-lg text-[#9d7650] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                  Link up to 10 accounts
                </li>
<li className="flex items-start gap-3 text-sm font-medium text-[#3a332d]">
<iconify-icon className="text-lg text-[#9d7650] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                  Basic scenario modeling
                </li>
<li className="flex items-start gap-3 text-sm font-medium text-[#3a332d]">
<iconify-icon className="text-lg text-[#9d7650] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                  Monthly performance exports
                </li>
</ul>
<a className="w-full flex items-center justify-center rounded-xl border border-[#a67b4f] py-3 text-sm font-semibold text-[#171411] transition hover:bg-[#a67b4f] hover:text-white" href="#contact">
                Start Personal
              </a>
</div>

<div className="premium-panel rounded-2xl p-8 flex flex-col h-full border-[#a67b4f] relative transform lg:-translate-y-4 shadow-2xl reveal-on-scroll delay-200">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#a67b4f] px-4 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-white">
                Most Popular
              </div>
<h3 className="font-display text-3xl text-[#171411]">Advisory</h3>
<p className="mt-3 text-sm font-medium text-[#756b60] h-10">
                For boutique wealth managers and family offices.
              </p>
<div className="mt-6 flex items-baseline gap-1">
<span className="font-display text-4xl text-[#171411]">$299</span>
<span className="text-sm font-semibold text-[#7d7267]">/mo</span>
</div>
<div className="my-8 h-px w-full bg-[#d8c9b8]/50"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-medium text-[#3a332d]">
<iconify-icon className="text-lg text-[#9d7650] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                  Unlimited client accounts
                </li>
<li className="flex items-start gap-3 text-sm font-medium text-[#3a332d]">
<iconify-icon className="text-lg text-[#9d7650] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                  Advanced predictive models
                </li>
<li className="flex items-start gap-3 text-sm font-medium text-[#3a332d]">
<iconify-icon className="text-lg text-[#9d7650] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                  White-labeled reporting
                </li>
<li className="flex items-start gap-3 text-sm font-medium text-[#3a332d]">
<iconify-icon className="text-lg text-[#9d7650] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                  Client portal access
                </li>
</ul>
<a className="w-full flex items-center justify-center rounded-xl bg-[#171614] py-3 text-sm font-semibold text-white transition hover:bg-[#29231f] shadow-lg" href="#contact">
                Start Advisory
              </a>
</div>

<div className="premium-panel rounded-2xl p-8 flex flex-col h-full reveal-on-scroll delay-300">
<h3 className="font-display text-3xl text-[#171411]">Enterprise</h3>
<p className="mt-3 text-sm font-medium text-[#756b60] h-10">
                Custom architecture for large institutions.
              </p>
<div className="mt-6 flex items-baseline gap-1">
<span className="font-display text-4xl text-[#171411]">Custom</span>
</div>
<div className="my-8 h-px w-full bg-[#d8c9b8]/50"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-medium text-[#3a332d]">
<iconify-icon className="text-lg text-[#9d7650] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                  Dedicated infrastructure
                </li>
<li className="flex items-start gap-3 text-sm font-medium text-[#3a332d]">
<iconify-icon className="text-lg text-[#9d7650] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                  Custom API integrations
                </li>
<li className="flex items-start gap-3 text-sm font-medium text-[#3a332d]">
<iconify-icon className="text-lg text-[#9d7650] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                  Dedicated success manager
                </li>
</ul>
<a className="w-full flex items-center justify-center rounded-xl border border-[#d8c9b8] bg-[#f5f0e9] py-3 text-sm font-semibold text-[#171411] transition hover:bg-white" href="#contact">
                Contact Sales
              </a>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 border-t border-[#d8c9b8]/50 bg-[#eee5da]/50" id="contact">
<div className="mx-auto max-w-3xl px-6 sm:px-8">
<div className="premium-panel rounded-2xl p-8 sm:p-12 text-center reveal-on-scroll">
<h2 className="font-display text-3xl font-normal leading-[1.05] tracking-tight text-[#151310] sm:text-4xl">
              Design the next version of your portfolio.
            </h2>
<p className="mt-4 text-sm font-medium text-[#756b60] max-w-lg mx-auto">
              Request early access to the platform. Our team will review your
              application and provide a tailored onboarding experience.
            </p>
<form className="mt-8 text-left space-y-5">
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold tracking-tight mb-1">
                    First Name
                  </label>
<input className="w-full rounded-lg border border-[#d8c9b8] bg-[#f5f0e9] px-4 py-3 text-sm focus:border-[#a67b4f] focus:outline-none focus:ring-1 focus:ring-[#a67b4f] transition" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold tracking-tight mb-1">
                    Last Name
                  </label>
<input className="w-full rounded-lg border border-[#d8c9b8] bg-[#f5f0e9] px-4 py-3 text-sm focus:border-[#a67b4f] focus:outline-none focus:ring-1 focus:ring-[#a67b4f] transition" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold tracking-tight mb-1">
                  Work Email
                </label>
<input className="w-full rounded-lg border border-[#d8c9b8] bg-[#f5f0e9] px-4 py-3 text-sm focus:border-[#a67b4f] focus:outline-none focus:ring-1 focus:ring-[#a67b4f] transition" placeholder="jane@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold tracking-tight mb-1">
                  Firm Size
                </label>
<select className="w-full rounded-lg border border-[#d8c9b8] bg-[#f5f0e9] px-4 py-3 text-sm focus:border-[#a67b4f] focus:outline-none focus:ring-1 focus:ring-[#a67b4f] transition appearance-none">
<option>Individual / Family Office</option>
<option>1-10 Advisors</option>
<option>11-50 Advisors</option>
<option>50+ Advisors</option>
</select>
</div>
<div className="flex items-start gap-3 mt-4">
<input className="custom-checkbox shrink-0 mt-0.5" id="terms" type="checkbox"/>
<label className="text-xs font-medium text-[#756b60] leading-snug cursor-pointer" htmlFor="terms">
                  I agree to the
                  <a className="text-[#171411] underline decoration-[#a67b4f]" href="#">
                    Terms of Service
                  </a>
                  and
                  <a className="text-[#171411] underline decoration-[#a67b4f]" href="#">
                    Privacy Policy
                  </a>
                  .
                </label>
</div>
<button className="w-full mt-6 h-12 rounded-xl bg-[#171614] text-sm font-semibold text-white shadow-lg transition hover:bg-[#29231f] flex items-center justify-center gap-2" type="button">
                Submit Request
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#d8c9b8] bg-[#f5f0e9] pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
<div className="grid gap-12 md:grid-cols-4 border-b border-[#d8c9b8]/60 pb-12">
<div className="md:col-span-1">
<a className="font-logo text-xl font-medium tracking-[0.20em] text-[#171411]" href="#">
              SEQURA
            </a>
<p className="mt-4 text-xs font-medium leading-relaxed text-[#756b60] max-w-[200px]">
              Cinematic intelligence for modern wealth architecture.
            </p>
</div>
<div>
<h4 className="text-xs font-semibold tracking-widest uppercase text-[#9a744d]">
              Product
            </h4>
<ul className="mt-4 space-y-2 text-sm font-medium text-[#3a332d]">
<li>
<a className="transition hover:text-[#a67b4f]" href="#">Platform</a>
</li>
<li>
<a className="transition hover:text-[#a67b4f]" href="#">Security</a>
</li>
<li>
<a className="transition hover:text-[#a67b4f]" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="transition hover:text-[#a67b4f]" href="#">Pricing</a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-widest uppercase text-[#9a744d]">
              Company
            </h4>
<ul className="mt-4 space-y-2 text-sm font-medium text-[#3a332d]">
<li>
<a className="transition hover:text-[#a67b4f]" href="#">About Us</a>
</li>
<li>
<a className="transition hover:text-[#a67b4f]" href="#">Careers</a>
</li>
<li>
<a className="transition hover:text-[#a67b4f]" href="#">Press</a>
</li>
<li>
<a className="transition hover:text-[#a67b4f]" href="#">Contact</a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-widest uppercase text-[#9a744d]">
              Legal
            </h4>
<ul className="mt-4 space-y-2 text-sm font-medium text-[#3a332d]">
<li>
<a className="transition hover:text-[#a67b4f]" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="transition hover:text-[#a67b4f]" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="transition hover:text-[#a67b4f]" href="#">
                  Cookie Policy
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-[#756b60]">
<p>© 2024 Sequra Financial Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="transition hover:text-[#171411]" href="#">
<iconify-icon className="text-lg" icon="solar:masks-linear"></iconify-icon>
</a>
<a className="transition hover:text-[#171411]" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>




    </>
  );
}

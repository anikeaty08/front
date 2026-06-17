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



        if(window.lucide){window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });}
      


        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      


        const initAnalyticsChart = () => {
          if (typeof Chart === 'undefined') {
            setTimeout(initAnalyticsChart, 50);
            return;
          }

          const canvas = document.getElementById('growthRevenueChart');
          if (!canvas) return;

          const ctx = canvas.getContext('2d');
          const gradient = ctx.createLinearGradient(0, 0, 0, 240);
          gradient.addColorStop(0, 'rgba(249, 115, 22, 0.25)');
          gradient.addColorStop(1, 'rgba(249, 115, 22, 0.01)');

          new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['1st', '5th', '10th', '15th', '20th', '25th', '30th'],
              datasets: [{
                label: 'Revenue',
                data: [18500, 21200, 19100, 32800, 29000, 46500, 58900],
                borderColor: '#F97316',
                backgroundColor: gradient,
                borderWidth: 2.5,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#F97316',
                pointBorderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderWidth: 3
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: {
                intersect: false,
                mode: 'index',
              },
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: 'rgba(17, 17, 17, 0.95)',
                  titleFont: { family: 'Inter', size: 12, weight: '500' },
                  bodyFont: { family: 'Inter', size: 14, weight: '600' },
                  padding: 12,
                  cornerRadius: 10,
                  displayColors: false,
                  callbacks: {
                    label: function(context) {
                      return '$' + context.parsed.y.toLocaleString();
                    }
                  }
                }
              },
              scales: {
                x: {
                  grid: { display: false, drawBorder: false },
                  ticks: { color: '#999', font: { family: 'Inter', size: 12 }, padding: 10 }
                },
                y: {
                  display: false,
                  min: 10000
                }
              }
            }
          });
        };

        initAnalyticsChart();
      


      lucide.createIcons({
        attrs: {
          "stroke-width": 1.5
        }
      });
    


      (function(){
        var observer = new IntersectionObserver(function(entries){
          entries.forEach(function(e){
            if(e.isIntersecting){
              e.target.classList.add('animate-fade-up');
              e.target.classList.remove('reveal-hidden');
              observer.unobserve(e.target);
            }
          });
        }, { threshold: 0.2 });
        document.querySelectorAll('[data-reveal]').forEach(function(el){
          el.classList.add('reveal-hidden');
          observer.observe(el);
        });
      })();
    


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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<main className="relative min-h-[calc(100vh-0.75rem)] overflow-hidden rounded-[1.35rem] bg-[#f7f5ef] shadow-[inset_0_1px_0_rgba(255,255,255,0.88)] overflow-x-hidden">
<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.035)_1px,transparent_1px),radial-gradient(circle_at_68%_44%,rgba(91,63,248,0.12),transparent_32%)] bg-[size:36px_36px,36px_36px,auto]" style={{backgroundImage: 'linear-gradient(rgba(10,10,10,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.035) 1px, transparent 1px), radial-gradient(circle at 68% 44%, rgba(249,115,22,0.12), transparent 32%)'}}></div>
<header className="flex w-full max-w-[78rem] z-20 mx-auto px-5 py-5 sm:px-8 lg:px-8 relative items-center justify-between hero-nav">
<a className="flex items-center gap-2.5" href="/home">
<svg aria-hidden="true" className="h-8 w-8 shrink-0" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<rect className="" fill="url(#luminaryLogoGradient)" height="34" rx="11" width="34" x="3" y="3"></rect>
<path d="M20 8.5L23.2 16.8L31.5 20L23.2 23.2L20 31.5L16.8 23.2L8.5 20L16.8 16.8L20 8.5Z" fill="white"></path>
<path d="M20 13.8L21.75 18.25L26.2 20L21.75 21.75L20 26.2L18.25 21.75L13.8 20L18.25 18.25L20 13.8Z" fill="#FFE7D9"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="luminaryLogoGradient" x1="6" x2="34" y1="6" y2="34">
<stop stop-color="#FF8A4C"></stop>
<stop offset="1" stop-color="#E55A1F"></stop>
</lineargradient>
</defs>
</svg>
<span className="text-xl text-[#191919] font-sora tracking-tight font-semibold cursor-pointer" onclick="window.location.href='/home'" role="button">
            Digitally
          </span>
</a>
<nav className="hidden gap-1 lg:flex text-sm font-medium text-[#191919] bg-white/72 border-black/5 border rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-[0_14px_38px_rgba(20,20,20,0.06)] backdrop-blur gap-x-1 gap-y-1 items-center">
<a className="rounded-xl px-4 py-2 text-white font-sans tracking-tight font-medium transition hover:-translate-y-0.5 hover-track" href="/home" style={{background: 'linear-gradient(145deg, #FF6B35, #E55A1F)', boxShadow: '0px 4px 8px rgba(255, 107, 53, 0.2)', border: '1px solid rgba(229,90,31,0.4)'}}>
            Home
          </a>
<a className="rounded-xl px-4 py-2 text-[#4d4d4d] hover:text-[#111] font-sans tracking-tight font-medium transition hover-track" href="/about">
            About
          </a>
<a className="rounded-xl px-4 py-2 text-[#4d4d4d] hover:text-[#111] font-sans tracking-tight font-medium transition hover-track" href="/services">
            Services
          </a>
<a className="rounded-xl px-4 py-2 text-[#4d4d4d] hover:text-[#111] font-sans tracking-tight font-medium transition hover-track" href="/case-studies">
            Case Studies
          </a>
<a className="rounded-xl px-4 py-2 text-[#4d4d4d] hover:text-[#111] font-sans tracking-tight font-medium transition hover-track" href="/contact">
            Contact
          </a>
</nav>
<div className="hidden items-center gap-4 text-sm font-semibold sm:flex">
<a className="rounded-xl px-5 py-3 text-white font-sans tracking-tight font-semibold transition hover:-translate-y-0.5 ds-btn" href="/get-proposal" style={{background: 'linear-gradient(145deg, #FF6B35, #E55A1F)', boxShadow: '0px 4px 8px rgba(255, 107, 53, 0.2)', border: '1px solid rgba(229,90,31,0.4)'}}>
            Get a Proposal
          </a>
</div>
<button aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-[#1c1c1c] text-white shadow-[0_12px_26px_rgba(0,0,0,0.12)] lg:hidden">
<i className="h-5 w-5 text-white" data-lucide="menu"></i>
</button>
</header>
<section className="relative z-10 w-full max-w-[78rem] mx-auto px-5 pb-12 pt-12 sm:px-8 lg:px-8 lg:pb-16 lg:pt-16 hero-sub">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#F97316]/5 blur-[120px]"></div>
</div>
<div className="grid lg:grid-cols-[1fr_1.1fr] gap-x-12 gap-y-12 items-center">

<div className="relative z-10 flex flex-col justify-start pt-4">
<div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-sm text-[#444] shadow-[0_8px_20px_rgba(0,0,0,0.04)] backdrop-blur-md font-sans tracking-tight w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
</span>
<span className="font-normal">
                Digital marketing that drives real growth
              </span>
</div>
<h1 className="text-5xl leading-[1.05] text-[#0a0a0a] sm:text-6xl lg:text-[4.5rem] font-sora tracking-tight font-medium max-w-[28rem] hero-heading" style={{color: 'rgb(9, 9, 11)'}}>
              Grow Your Brand with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#f43f5e]">
                Smarter
              </span>
              Digital Marketing
            </h1>
<p className="mt-6 max-w-[28rem] text-lg leading-relaxed text-[#555] font-sans tracking-tight font-normal">
              We help ambitious brands scale through data-driven campaigns,
              creative content, and full-funnel strategies that convert visitors
              into loyal customers.
            </p>
<div className="mt-10 flex flex-col gap-4 sm:flex-row items-center hero-cta">
<a className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl px-8 py-4 text-base text-white font-sans tracking-tight font-medium transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F97316]/25 ds-btn icon-nudge" href="#" style={{background: 'linear-gradient(135deg, #FF6B35, #E55A1F)', border: '1px solid rgba(229, 90, 31, 0.3)', boxShadow: '0px 4px 8px rgba(255,107,53,0.2)'}}>
                Start a Project
              </a>
<a className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl border border-black/10 bg-white/80 px-8 py-4 text-base text-[#111] shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white hover:shadow-md font-sans tracking-tight font-medium group ds-btn icon-nudge" href="#">
                View Our Work
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 hero-visual gap-x-5 items-start gap-y-8 sm:grid-cols-2">

<div className="sm:col-span-2 rounded-[2rem] overflow-hidden relative shadow-[0_25px_50px_rgba(0,0,0,0.25)] border border-white/10 card-shell ds-card">
<div className="absolute right-0 top-0 h-full w-2/3 opacity-60" style={{background: 'radial-gradient(circle at 70% 45%, rgba(255,255,255,0.18) 0%, rgba(120,120,150,0.12) 30%, transparent 60%)'}}></div>
<div className="absolute right-[10%] top-[15%] h-56 w-56 rounded-full" style={{boxShadow: 'inset 0 0 60px rgba(255, 255, 255, 0.15), 0 0 80px rgba(160, 170, 200, 0.12)', border: '1px solid rgba(255,255,255,0.06)'}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cec5dcf-de34-4f95-9ccf-89fdd95f3fb7_3840w.jpg?w=800&amp;q=80)] bg-cover z-10 p-6 sm:p-8 relative group">

<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent z-0 transition-opacity duration-700 ease-in-out group-hover:opacity-95"></div>

<div className="flex items-center justify-between relative z-10">
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg px-4 py-2 text-xs sm:text-sm font-normal text-white tracking-tight transition-transform hover:scale-105 cursor-default">
<svg className="h-4 w-4 text-white/80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<rect height="5" width="3" x="7" y="12"></rect>
<rect height="9" width="3" x="12" y="8"></rect>
<rect height="12" width="3" x="17" y="5"></rect>
</svg>
                    Marketing
                  </span>
<button className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg text-white/90 transition-all hover:bg-white/25 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50">
<svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path>
</svg>
</button>
</div>

<div className="mt-12 sm:mt-16 relative z-10">
<h3 className="font-sora text-3xl sm:text-4xl font-medium tracking-tight text-white leading-[1.1] drop-shadow-md">
                    Campaign Strategy Planning
                  </h3>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-white/70 font-sans tracking-tight font-light max-w-[34rem]">
                    Collaborate in real-time on marketing campaigns, asset
                    creation, and content distribution.
                  </p>
</div>

<div className="flex flex-wrap gap-4 mt-auto pt-8 items-center relative z-10">
<div className="flex -space-x-3 group/avatars">
<span className="relative h-10 w-10 rounded-full bg-cover bg-center border-2 border-white/20 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:z-20 cursor-pointer" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b27a2ae6-1956-4124-893f-004d61872b41_3840w.webp\')'}}></span>
<span className="relative h-10 w-10 rounded-full bg-cover bg-center border-2 border-white/20 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:z-20 cursor-pointer" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/444e7750-d333-4257-bbc8-9456a9992b7a_3840w.webp\')'}}></span>
<span className="relative h-10 w-10 rounded-full bg-cover bg-center border-2 border-white/20 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:z-20 cursor-pointer" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aca5f901-b7b3-4681-a732-cdd2a324f0d1_3840w.jpg\')'}}></span>
</div>
<span className="h-6 w-px bg-white/20"></span>
<span className="inline-flex items-center gap-2 text-xs sm:text-sm font-normal text-white/90 tracking-tight bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-lg px-3.5 py-1.5 transition-colors hover:bg-white/25 cursor-pointer">
<svg className="h-4 w-4 text-white/80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>
                    12 Files
                  </span>
</div>
</div>
</div>

<div className="rounded-[2rem] bg-white/80 backdrop-blur-xl p-6 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-black/5 relative overflow-hidden flex flex-col justify-between card-shell ds-card" style={{minHeight: '14.5rem'}}>
<div className="absolute -right-12 -top-12 h-32 w-32 rounded-full blur-[40px] bg-[#F97316]/10"></div>
<div className="relative z-10 flex items-start justify-between">
<div className="">
<p className="text-xs font-normal tracking-tight text-[#666]">
                    Monthly Ad Revenue
                  </p>
<p className="mt-2 font-sora text-3xl font-normal tracking-tight text-[#111]">
                    $128.5K
                    <span className="text-sm font-normal text-[#999] ml-1">
                      USD
                    </span>
</p>
<div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#10B981]/10 px-2.5 py-1 text-xs font-normal text-[#10B981] border border-[#10B981]/20">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
                    18.4% vs last month
                  </div>
</div>
<span className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm border border-black/5 text-[#F97316]">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
</span>
</div>
<div className="flex z-10 h-16 relative gap-1.5 items-end mt-6">
<span className="h-[30%] flex-1 rounded-t-md bg-gradient-to-t from-[#F97316]/10 to-[#F97316]/20"></span>
<span className="h-[45%] flex-1 rounded-t-md bg-gradient-to-t from-[#F97316]/10 to-[#F97316]/30"></span>
<span className="h-[40%] flex-1 rounded-t-md bg-gradient-to-t from-[#F97316]/10 to-[#F97316]/40"></span>
<span className="h-[65%] flex-1 rounded-t-md bg-gradient-to-t from-[#F97316]/10 to-[#F97316]/50"></span>
<span className="h-[55%] flex-1 rounded-t-md bg-gradient-to-t from-[#F97316]/10 to-[#F97316]/60"></span>
<span className="h-[85%] flex-1 rounded-t-md bg-gradient-to-t from-[#F97316] to-[#EA580C] shadow-[0_0_15px_rgba(249,115,22,0.3)]"></span>
</div>
</div>

<div className="rounded-[2rem] bg-[#111] p-6 sm:p-7 shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-white/10 relative overflow-hidden flex flex-col justify-between card-shell ds-card" style={{minHeight: '14.5rem'}}>
<div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full blur-[40px] bg-[#38BDF8]/20"></div>
<div className="relative z-10 flex items-start justify-between">
<div className="">
<p className="text-xs font-normal tracking-tight text-white/50">
                    Campaigns Live
                  </p>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-sora text-4xl font-normal tracking-tight text-white">
                      47
                    </span>
<span className="rounded-full px-2 py-0.5 text-[10px] font-normal text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20">
                      +8 this week
                    </span>
</div>
<p className="mt-1 text-xs font-normal tracking-tight text-white/40">
                    Across all channels
                  </p>
</div>
<span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 border border-white/10 text-[#38BDF8]">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 11 18-5v12L3 14v-3z"></path>
<path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
</svg>
</span>
</div>
<div className="relative z-10 mt-auto pt-6 flex items-center gap-2.5">
<div className="flex -space-x-2">
<span className="grid h-9 w-9 place-items-center rounded-full bg-[#1877F2] text-white shadow-lg border-2 border-[#111]">
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
</svg>
</span>
<span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white shadow-lg border-2 border-[#111]">
<svg className="h-3.5 w-3.5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</span>
<span className="grid h-9 w-9 place-items-center rounded-full bg-[#EA4335] text-white shadow-lg border-2 border-[#111]">
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
</svg>
</span>
</div>
<span className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-normal uppercase tracking-widest text-white/70 bg-white/5 border border-white/10">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
</span>
                  All Active
                </span>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-20 mx-auto mb-12 grid w-[calc(100%-3rem)] max-w-[78rem] overflow-hidden rounded-2xl border border-black/8 bg-white/62 shadow-[0_22px_60px_rgba(20,20,20,0.06)] backdrop-blur md:grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr] animate-fade-up reveal-hidden" data-reveal="">
<div className="border-b border-black/8 px-9 py-7 md:border-b-0 md:border-r">
<p className="text-base text-[#77736b] font-sans tracking-tight font-medium">
            Trusted by growth-focused brands
          </p>
<div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 text-[#232323]">
<div className="text-3xl text-[#38BDF8] font-sora tracking-tight font-semibold">
              nexus
            </div>
<div className="flex items-center gap-2 text-base font-sans tracking-tight font-semibold">
<span className="grid h-5 w-5 place-items-center rounded-full bg-[#1c1c1c] text-xs text-white">
                ◒
              </span>
              Bloom
            </div>
<div className="flex items-center gap-2 text-base font-sans tracking-tight font-semibold">
<span className="grid h-5 w-5 place-items-center rounded-full border-2 border-[#1c1c1c] text-xs">
                ◆
              </span>
              Prism
            </div>
<div className="flex items-center gap-2 text-base font-sans tracking-tight font-semibold">
<span className="grid h-5 w-5 place-items-center rounded-md border-2 border-[#1c1c1c] text-xs">
                ⌁
              </span>
              Crestline
            </div>
</div>
</div>
<div className="border-b border-black/8 px-7 py-7 md:border-b-0 md:border-r">
<p className="text-base text-[#77736b] font-sans tracking-tight font-medium">
            Leads generated
          </p>
<div className="mt-6 text-4xl text-[#111] font-sora tracking-tight font-semibold">
            1.4M+
          </div>
<div className="mt-3 text-base text-[#38BDF8] font-sans tracking-tight font-semibold">
            This quarter
          </div>
</div>
<div className="border-b border-black/8 px-7 py-7 md:border-b-0 md:border-r">
<p className="text-base text-[#77736b] font-sans tracking-tight font-medium">
            Avg. ROAS delivered
          </p>
<div className="mt-6 text-4xl text-[#111] font-sora tracking-tight font-semibold">
            4.8×
          </div>
<div className="mt-3 text-base text-[#38BDF8] font-sans tracking-tight font-semibold">
            Across paid channels
          </div>
</div>
<div className="px-7 py-7">
<p className="text-base text-[#77736b] font-sans tracking-tight font-medium">
            Client retention rate
          </p>
<div className="mt-6 text-4xl text-[#111] font-sora tracking-tight font-semibold">
            96.2%
          </div>
<div className="mt-3 text-base text-[#38BDF8] font-sans tracking-tight font-semibold">
            Year over year
          </div>
</div>
</section>
<section className="relative z-20 mx-auto mb-16 w-[calc(100%-3rem)] max-w-[78rem] overflow-hidden rounded-[1.65rem] border border-black/8 bg-[#111111] p-5 shadow-[0_34px_90px_rgba(20,20,20,0.16)] sm:p-7 lg:p-8">
<div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(circle at 18% 18%, rgba(249,115,22,0.24), transparent 30%), radial-gradient(circle at 82% 66%, rgba(253,186,116,0.14), transparent 28%), linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: 'auto, auto, 34px 34px, 34px 34px'}}></div>
<div className="relative z-10 grid gap-6 lg:grid-cols-[0.9fr_1.35fr] lg:items-stretch">
<div className="flex min-h-[28rem] flex-col sm:p-8 border-white/10 border rounded-[1.35rem] pt-6 pr-6 pb-6 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] justify-between card-shell">
<div className="">
<div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-medium tracking-tight text-white/70">
<span className="h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_16px_rgba(56,189,248,0.9)]"></span>
                Social growth engine
              </div>
<h2 className="max-w-[28rem] font-sora text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl">
                Turn social followers into loyal, paying customers
              </h2>
<p className="mt-5 max-w-[29rem] font-sans text-base font-medium leading-8 tracking-tight text-white/55">
                We build and scale your social presence across every major
                platform, converting engaged audiences into high-value customers
                through proven content and conversion strategies.
              </p>
</div>
<div className="mt-9 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-semibold tracking-tight text-white transition hover:-translate-y-0.5 ds-btn" href="#" style={{background: 'linear-gradient(145deg, #FF6B35, #E55A1F)', boxShadow: '0px 4px 8px rgba(255, 107, 53, 0.2)', border: '1px solid rgba(229,90,31,0.4)'}}>
                Grow My Audience
              </a>
<a className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] px-6 py-4 text-sm font-semibold tracking-tight text-white/80 transition hover:-translate-y-0.5 hover:bg-white/[0.09] ds-btn hover-track" href="#">
                See Case Studies
              </a>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2 gap-x-4 gap-y-4 stagger">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49e7865b-636c-480e-a4d5-440a96dfbd0f_800w.webp)] bg-cover bg-center border-white/10 border rounded-[1.35rem] pt-6 pr-6 pb-6 pl-6 shadow-[0_18px_48px_rgba(0,0,0,0.18)] flex flex-col justify-end" style={{minHeight: '13rem', position: 'relative', overflow: 'hidden', isolation: 'isolate'}}>
<video data-aura-generated-video="true" data-aura-generated-video-bg="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49e7865b-636c-480e-a4d5-440a96dfbd0f_800w.webp" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/6069c980-7469-4c7c-8788-40b445c8d609/1780675479993-a1113929-9d54-4abb-9b59-f0d0dce082de.mp4" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', zIndex: '0'}}></video>
<div className="rounded-xl bg-black/40 backdrop-blur-sm p-4 border border-white/10">
<p className="text-xs font-medium tracking-tight text-white/60 font-sans">
                  Follower growth
                </p>
<p className="mt-1 font-sora text-2xl font-semibold tracking-tight text-white">
                  +284K
                  <span className="text-sm font-medium text-[#38BDF8]">
                    this month
                  </span>
</p>
</div>
</div>
<div className="rounded-[1.35rem] border border-white/10 bg-white/[0.08] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
<span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.08] text-[#BAE6FD]" style={{border: '1px solid rgba(255,255,255,0.10)'}}>
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z"></path>
<circle cx="12" cy="12" r="3"></circle>
<circle cx="17.5" cy="6.5" r="1.5"></circle>
</svg>
</span>
<h3 className="mt-6 font-sora text-2xl font-semibold tracking-tight text-white">
                Content that converts
              </h3>
<p className="leading-6 text-sm font-medium text-gray-400 tracking-tight font-sans mt-3">
                We craft platform-native content — reels, carousels, and
                short-form video — engineered to drive profile visits, clicks,
                and purchases.
              </p>
</div>
<div className="rounded-[1.35rem] border border-white/10 bg-white/[0.08] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
<span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.08] text-[#BAE6FD]" style={{border: '1px solid rgba(255,255,255,0.10)'}}>
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</span>
<h3 className="mt-6 font-sora text-2xl font-semibold tracking-tight text-white">
                Conversion funnels
              </h3>
<p className="leading-6 text-sm font-medium text-gray-400 tracking-tight font-sans mt-3">
                Connect social traffic to optimized landing pages and
                retargeting sequences that nurture audiences from first scroll
                to final sale.
              </p>
</div>
<div className="overflow-hidden bg-center flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b80cf7d6-8613-4129-8a39-56fd799192ed_800w.webp)] bg-cover border-[#38BDF8]/20 border rounded-[1.35rem] pt-6 pr-6 pb-6 pl-6 relative justify-end" style={{minHeight: '13rem', position: 'relative', overflow: 'hidden', isolation: 'isolate'}}>
<video data-aura-generated-video="true" data-aura-generated-video-bg="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b80cf7d6-8613-4129-8a39-56fd799192ed_800w.webp" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/6069c980-7469-4c7c-8788-40b445c8d609/1780681805662-ce4b2509-4ecd-4239-b4ca-9a498e68a4af.mp4" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', zIndex: '0'}}></video>
<div className="rounded-xl bg-black/40 backdrop-blur-sm p-4 border border-white/10">
<p className="text-xs font-medium tracking-tight text-white/60 font-sans">
                  Avg. conversion rate
                </p>
<p className="mt-1 font-sora text-2xl font-semibold tracking-tight text-white">
                  6.4%
                  <span className="text-sm font-medium text-[#38BDF8]">
                    ↑ from social
                  </span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 mx-auto mb-16 w-[calc(100%-3rem)] max-w-[78rem]">

<div className="mb-16 flex flex-col items-center text-center animate-fade-up reveal-hidden" data-reveal="">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 font-sans text-sm font-light text-orange-600">
<i className="h-4 w-4" data-lucide="bar-chart-2"></i>
            Data-Driven Decisions
          </div>
<h2 className="font-sora text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl max-w-[38rem] leading-[1.1] animate-fade-up reveal-hidden" data-reveal="">
            Complete visibility over your
            <span className="text-orange-500">growth engine</span>
</h2>
<p className="mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-gray-500">
            Track real-time performance, automate optimizations, and scale
            winning campaigns with our proprietary dashboard.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 gap-x-6 gap-y-6" data-reveal="">
<style>
    @keyframes auraDrawLine { 0% { stroke-dashoffset: 1200; } 60% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 0; } }
    @keyframes auraFillIn { 0% { opacity: 0; transform: translateY(8px); } 40% { opacity: 1; transform: translateY(0); } 100% { opacity: 1; transform: translateY(0); } }
    @keyframes auraPulseDot { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.6; } }
    @keyframes auraFloatDot { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
    @keyframes auraCountUp { 0% { opacity: 0; transform: translateY(6px); } 100% { opacity: 1; transform: translateY(0); } }
    @keyframes auraBadgePop { 0% { transform: scale(0.8); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
    @keyframes auraSparkDraw { 0% { stroke-dashoffset: 200; } 70% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 0; } }
    @keyframes auraCheckPop { 0%, 20% { transform: scale(0); } 50% { transform: scale(1.2); } 70%, 100% { transform: scale(1); } }
    @keyframes auraSlide { 0% { width: 0%; } 60% { width: 85%; } 100% { width: 85%; } }
    @keyframes auraThumbMove { 0% { left: 0%; } 60% { left: 85%; } 100% { left: 85%; } }
    @keyframes auraRuleIn { 0% { opacity: 0; transform: translateX(-12px); } 100% { opacity: 1; transform: translateX(0); } }
    @keyframes auraBreathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.06); } }
    @keyframes auraGlow { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.15); } }
    @keyframes auraShimmer { 0% { transform: translateX(-150%); } 100% { transform: translateX(250%); } }
    .aura-line { stroke-dasharray: 1200; animation: auraDrawLine 6s ease-in-out infinite; }
    .aura-prev-line { stroke-dasharray: 1200; animation: auraDrawLine 6s ease-in-out 0.4s infinite; }
    .aura-fill { transform-origin: bottom; animation: auraFillIn 6s ease-in-out infinite; }
    .aura-pt { transform-box: fill-box; transform-origin: center; }
    .aura-pt1 { animation: auraFloatDot 3s ease-in-out infinite; }
    .aura-pt2 { animation: auraFloatDot 3s ease-in-out 0.6s infinite; }
    .aura-pt3 { animation: auraPulseDot 2.4s ease-in-out infinite; }
    .aura-count { animation: auraCountUp 0.8s ease-out both, auraBreathe 5s ease-in-out 1s infinite; }
    .aura-badge { animation: auraBadgePop 0.7s cubic-bezier(.2,.8,.3,1.2) both; }
    .aura-icon-breathe { animation: auraBreathe 4s ease-in-out infinite; }
    .aura-glow { animation: auraGlow 5s ease-in-out infinite; }
    .aura-spark { stroke-dasharray: 200; animation: auraSparkDraw 4s ease-in-out infinite; }
    .aura-check { transform-box: fill-box; transform-origin: center; animation: auraCheckPop 4s ease-in-out infinite; }
    .aura-slide-fill { animation: auraSlide 4s cubic-bezier(.2,.8,.3,1) infinite; }
    .aura-thumb { animation: auraThumbMove 4s cubic-bezier(.2,.8,.3,1) infinite; }
    .aura-rule1 { animation: auraRuleIn 0.7s ease-out both, auraBreathe 6s ease-in-out 1s infinite; }
    .aura-rule2 { animation: auraRuleIn 0.7s ease-out 0.25s both, auraBreathe 6s ease-in-out 1.3s infinite; }
    .aura-shimmer-wrap { position: relative; overflow: hidden; }
    .aura-shimmer-wrap::after { content: ""; position: absolute; inset: 0; background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%); transform: translateX(-150%); animation: auraShimmer 4.5s ease-in-out infinite; pointer-events: none; }
  </style>

<div className="lg:col-span-8 flex flex-col rounded-[2rem] border border-gray-200/70 bg-gradient-to-b from-white to-gray-50/40 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden ds-card" data-reveal="">
<div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl aura-glow"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
<div className="flex items-center gap-4">
<span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 shadow-sm aura-icon-breathe">
<svg aria-hidden="true" className="lucide lucide-trending-up h-6 w-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</span>
<div className="">
<h3 className="font-sora text-2xl font-normal tracking-tight text-gray-900">
            Attributed Revenue
          </h3>
<p className="mt-1 font-sans text-sm font-light text-gray-500">
            Revenue driven by active marketing campaigns.
          </p>
</div>
</div>

<div className="relative group">
<button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 font-sans text-sm font-normal text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
          Last 30 Days
          <i className="h-4 w-4 text-gray-400" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 top-full mt-2 w-40 rounded-2xl border border-gray-100 bg-white p-1.5 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 translate-y-1 group-hover:translate-y-0">
<a className="block rounded-xl px-3 py-2 font-sans text-sm font-light text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">Last 7 Days</a>
<a className="block rounded-xl bg-orange-50 px-3 py-2 font-sans text-sm font-normal text-orange-600 transition-colors" href="#">Last 30 Days</a>
<a className="block rounded-xl px-3 py-2 font-sans text-sm font-light text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">Last 90 Days</a>
</div>
</div>
</div>

<div className="relative z-10 mt-6 flex flex-wrap items-end gap-6">
<div>
<p className="font-sora text-3xl font-normal tracking-tight text-gray-900 aura-count">$248,920</p>
<span className="mt-1 inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 font-sans text-xs font-normal text-green-600 aura-badge">
<i className="h-4 w-4 text-emerald-500" data-lucide="arrow-up-right"></i>
          12.4%
        </span>
</div>
<div className="flex items-center gap-4 pb-1">
<span className="inline-flex items-center gap-2 font-sans text-xs font-light text-gray-500">
<span className="h-2 w-2 rounded-full bg-orange-500 aura-pt aura-pt3"></span>
          This Period
        </span>
<span className="inline-flex items-center gap-2 font-sans text-xs font-light text-gray-500">
<span className="h-2 w-2 rounded-full bg-gray-300"></span>
          Previous
        </span>
</div>
</div>

<div className="relative z-10 mt-6 w-full">
<svg aria-hidden="true" className="w-full h-[240px]" preserveaspectratio="none" viewbox="0 0 700 240">
<defs>
<lineargradient id="revFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#f97316" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#f97316" stop-opacity="0"></stop>
</lineargradient>
</defs>
<line className="" stroke="#f1f5f9" strokeWidth="1" x1="0" x2="700" y1="40" y2="40"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="700" y1="100" y2="100"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="700" y1="160" y2="160"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="700" y1="220" y2="220"></line>
<polyline className="aura-prev-line" fill="none" points="0,180 100,165 200,170 300,150 400,155 500,135 600,140 700,120" stroke="#d1d5db" stroke-dasharray="5 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></polyline>
<path className="aura-fill" d="M0,160 L100,130 L200,140 L300,95 L400,110 L500,60 L600,75 L700,35 L700,240 L0,240 Z" fill="url(#revFill)"></path>
<polyline className="aura-line" fill="none" points="0,160 100,130 200,140 300,95 400,110 500,60 600,75 700,35" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
<circle className="aura-pt aura-pt1" cx="300" cy="95" fill="#fff" r="4" stroke="#f97316" strokeWidth="2.5"></circle>
<circle className="aura-pt aura-pt2" cx="500" cy="60" fill="#fff" r="4" stroke="#f97316" strokeWidth="2.5"></circle>
<circle className="aura-pt aura-pt3" cx="700" cy="35" fill="#f97316" r="5" stroke="#fff" strokeWidth="2.5"></circle>
</svg>
<div className="mt-3 flex justify-between font-sans text-xs font-light text-gray-400">
<span>Wk 1</span><span>Wk 2</span><span>Wk 3</span><span>Wk 4</span>
</div>
</div>
</div>

<div className="lg:col-span-4 rounded-[2rem] border border-gray-200/70 bg-gradient-to-b from-white to-gray-50/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col ds-card" data-reveal="">
<h3 className="font-sora text-2xl font-normal tracking-tight text-gray-900">Smart Alerts</h3>
<p className="mt-1 font-sans text-sm font-light text-gray-500">Stay informed without the noise.</p>
<div className="flex flex-col gap-5 mt-8">

<label className="flex items-start gap-4 cursor-pointer group">
<div className="relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 border-gray-300 bg-white group-hover:border-orange-500 transition-colors">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="absolute inset-0 rounded-md bg-orange-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
<i className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 z-10" data-lucide="check"></i>
</div>
<div className="flex flex-1 items-center justify-between gap-3">
<div className="flex flex-col">
<span className="font-sans text-sm font-normal text-gray-900">CPA Drops Below Target</span>
<span className="font-sans text-xs font-light text-gray-500 mt-1">Notifies when CPA &lt; $15.00</span>
</div>
<svg aria-hidden="true" className="h-7 w-20 shrink-0" preserveaspectratio="none" viewbox="0 0 80 28">
<polyline className="aura-spark" fill="none" points="0,20 12,16 24,18 36,10 48,12 60,6 72,8 80,4" stroke="#22c55e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
</svg>
</div>
</label>

<label className="flex items-start gap-4 cursor-pointer group">
<div className="relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 border-gray-300 bg-white group-hover:border-orange-500 transition-colors">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="absolute inset-0 rounded-md bg-orange-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
<i className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 z-10" data-lucide="check"></i>
</div>
<div className="flex flex-1 items-center justify-between gap-3">
<div className="flex flex-col">
<span className="font-sans text-sm font-normal text-gray-900">Ad Fatigue Detected</span>
<span className="font-sans text-xs font-light text-gray-500 mt-1">CTR drops below 1.2% threshold</span>
</div>
<svg aria-hidden="true" className="h-7 w-20 shrink-0" preserveaspectratio="none" viewbox="0 0 80 28">
<polyline className="aura-spark" fill="none" points="0,8 12,10 24,9 36,14 48,13 60,18 72,17 80,22" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animationDelay: '.4s'}}></polyline>
</svg>
</div>
</label>

<label className="flex items-center justify-between cursor-pointer rounded-2xl border border-gray-100 bg-gray-50/50 p-4 transition-colors hover:bg-gray-50 group">
<span className="flex items-center gap-3">
<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100 text-gray-500 group-hover:text-orange-500 transition-colors aura-icon-breathe">
<i className="h-5 w-5" data-lucide="clock"></i>
</span>
<span className="font-sans text-sm font-normal text-gray-900">Time Decay</span>
</span>
<div className="relative w-12 h-6">
<input className="peer sr-only" type="checkbox"/>
<div className="w-12 h-6 bg-gray-200 rounded-full peer-checked:bg-orange-500 transition-colors"></div>
<div className="absolute top-[2px] left-[2px] w-[20px] h-[20px] bg-white rounded-full transition-transform peer-checked:translate-x-[24px] shadow-sm aura-pt3"></div>
</div>
</label>
</div>
</div>

<div className="lg:col-span-4 rounded-[2rem] border border-gray-200/70 bg-gradient-to-b from-white to-gray-50/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col ds-card" data-reveal="">
<h3 className="font-sora text-2xl font-normal tracking-tight text-gray-900">Attribution Models</h3>
<p className="mt-1 font-sans text-sm font-light text-gray-500">Compare ROAS across distinct touchpoints.</p>
<div className="flex flex-col gap-4 mt-8">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-orange-500 aura-pt aura-pt3"></span>
<span className="font-sans text-sm font-normal text-gray-900">First Click</span>
</div>
<div className="relative h-2 w-32 rounded-full bg-gray-100 overflow-hidden">
<div className="absolute left-0 top-0 h-full rounded-full bg-orange-500 aura-shimmer-wrap" style={{animation: 'auraSlide 4s cubic-bezier(.2,.8,.3,1) infinite'}}></div>
</div>
</div>
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500 aura-pt aura-pt3" style={{animationDelay: '.4s'}}></span>
<span className="font-sans text-sm font-normal text-gray-900">Data-Driven</span>
</div>
<div className="relative h-2 w-32 rounded-full bg-gray-100 overflow-hidden">
<div className="absolute left-0 top-0 h-full rounded-full bg-emerald-500 aura-shimmer-wrap" style={{animation: 'auraSlide 4s cubic-bezier(.2,.8,.3,1) .3s infinite'}}></div>
</div>
</div>
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-gray-400 aura-pt aura-pt3" style={{animationDelay: '.8s'}}></span>
<span className="font-sans text-sm font-normal text-gray-900">Time Decay</span>
</div>
<div className="relative h-2 w-32 rounded-full bg-gray-100 overflow-hidden">
<div className="absolute left-0 top-0 h-full rounded-full bg-gray-400 aura-shimmer-wrap" style={{animation: 'auraSlide 4s cubic-bezier(.2,.8,.3,1) .6s infinite', '--w': '60%'}}></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 rounded-[2rem] border border-gray-200/70 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between ds-card" data-reveal="">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div className="">
<h3 className="font-sora text-2xl font-normal tracking-tight text-gray-900">Rules &amp; Automations</h3>
<p className="mt-1 font-sans text-sm font-light text-gray-500">Trigger actions autonomously based on real-time metrics.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 font-sans text-sm font-normal text-white hover:bg-gray-800 transition-colors shadow-sm">
<i className="h-4 w-4" data-lucide="plus"></i>
        New Rule
      </button>
</div>
<div className="flex flex-col gap-4">

<div className="flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-4 hover:border-gray-200 transition-colors aura-rule1">
<div className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-200/60 font-sans text-xs font-normal text-gray-500 shrink-0">IF</div>
<div className="relative w-full sm:w-auto flex-1">
<button className="w-full flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 font-sans text-sm font-normal text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
<span className="flex items-center gap-3">
<i className="h-4 w-4 text-orange-500" data-lucide="trending-down"></i>
              ROAS drops below 2.0x
            </span>
<i className="h-4 w-4 text-gray-400" data-lucide="chevrons-up-down"></i>
</button>
</div>
<div className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-200/60 font-sans text-xs font-normal text-gray-500 shrink-0">THEN</div>
<div className="relative w-full sm:w-auto flex-1">
<button className="w-full flex items-center justify-between gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 font-sans text-sm font-normal text-red-600 hover:bg-red-100 transition-colors shadow-sm">
<span className="flex items-center gap-3">
<i className="h-4 w-4 text-red-500" data-lucide="pause-circle"></i>
              Pause ad set
            </span>
<i className="h-4 w-4 text-red-300" data-lucide="chevrons-up-down"></i>
</button>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-4 hover:border-gray-200 transition-colors aura-rule2">
<div className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-200/60 font-sans text-xs font-normal text-gray-500 shrink-0">IF</div>
<div className="relative w-full sm:w-auto flex-1">
<button className="w-full flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 font-sans text-sm font-normal text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
<span className="flex items-center gap-3">
<i className="h-4 w-4 text-emerald-500" data-lucide="target"></i>
              CPA is under $15.00
            </span>
<i className="h-4 w-4 text-gray-400" data-lucide="chevrons-up-down"></i>
</button>
</div>
<div className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-200/60 font-sans text-xs font-normal text-gray-500 shrink-0">THEN</div>
<div className="relative w-full sm:w-auto flex-1">
<button className="w-full flex items-center justify-between gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 font-sans text-sm font-normal text-emerald-600 hover:bg-emerald-100 transition-colors shadow-sm">
<span className="flex items-center gap-3">
<i className="h-4 w-4 text-emerald-500" data-lucide="arrow-up-right"></i>
              Scale budget by 20%
            </span>
<i className="h-4 w-4 text-emerald-300" data-lucide="chevrons-up-down"></i>
</button>
</div>
</div>

<div className="mt-5 px-2">
<div className="flex justify-between font-sans text-sm font-normal text-gray-700 mb-3">
<span className="">Confidence Threshold</span>
<span className="text-orange-500 font-normal">85%</span>
</div>
<div className="relative h-3 w-full rounded-full bg-gray-100 border border-gray-200/50">
<div className="absolute left-0 top-0 h-full bg-orange-500 rounded-full aura-slide-fill"></div>
<div className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full border-[3px] border-orange-500 bg-white shadow-md aura-thumb"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-20 mx-auto mb-16 w-[calc(100%-3rem)] max-w-[78rem]">

<div className="mb-12 flex flex-col items-start text-left reveal-hidden" data-reveal="">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 font-sans text-sm font-light text-orange-600">
<i className="h-4 w-4" data-lucide="sparkles"></i>
            The Operating System
          </div>
<h2 className="font-sora text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl max-w-[44rem] leading-[1.1] reveal-hidden" data-reveal="">
            Everything you need to
            <span className="text-orange-500">scale faster</span>
</h2>
<p className="mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-gray-500">
            One connected workspace for campaigns, automations and reporting —
            so your team focuses on growth, not busywork.
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-x-4 gap-y-4 reveal-hidden" data-reveal="">

<div className="lg:col-span-7 relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-cover bg-center p-7 sm:p-8 min-h-[26rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] card-shell" style={{backgroundImage: 'linear-gradient(160deg, rgba(17, 17, 17, 0.55), rgba(17, 17, 17, 0.85)), url(https: //hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f977af0d-56e2-48e9-a72d-0382f04e5cdf_3840w.webp)', position: 'relative', overflow: 'hidden', isolation: 'isolate'}}>
<video data-aura-generated-video="true" data-aura-generated-video-bg="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f977af0d-56e2-48e9-a72d-0382f04e5cdf_3840w.webp" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/6069c980-7469-4c7c-8788-40b445c8d609/1780681923376-28015673-6967-46e9-93d6-18f3e2c795f6.mp4" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', zIndex: '0'}}></video>
<h3 className="relative z-10 font-sora text-2xl font-normal tracking-tight text-white max-w-[20rem]">
              Say goodbye to manual reporting
            </h3>

<div className="relative z-10 mt-8 w-full max-w-[24rem] rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl">
<div className="flex items-center gap-3">
<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm">
<i className="h-5 w-5" data-lucide="rocket"></i>
</span>
<div>
<p className="font-sans text-sm font-normal text-gray-900">
                    Q3 Growth Campaign
                  </p>
<p className="font-sans text-xs font-light text-gray-500">
                    $200k budget · Meta · Active
                  </p>
</div>
</div>
<div className="mt-5 border-t border-gray-100 pt-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 font-sans text-sm font-light text-gray-600">
<i className="h-4 w-4 text-gray-400" data-lucide="bar-chart-3"></i>
                    Base ROAS
                  </span>
<span className="font-sans text-sm font-light text-gray-400">
                    ~ 4.2x · 7d
                  </span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 font-sans text-sm font-light text-gray-600">
<i className="h-4 w-4 text-gray-400" data-lucide="gift"></i>
                    Bonus uplift
                  </span>
<span className="font-sans text-sm font-light text-gray-700">
                    $1,300
                  </span>
</div>
</div>
<div className="mt-5 flex items-end justify-between">
<p className="font-sans text-sm font-light text-gray-500">
                  Attributed revenue
                </p>
<p className="font-sora text-3xl font-normal tracking-tight text-gray-900">
                  $283,050
                </p>
</div>
<button className="mt-5 w-full rounded-xl bg-gray-900 px-4 py-3 font-sans text-sm font-normal text-white hover:bg-gray-800 transition-colors">
                Launch Campaign
              </button>
</div>
<p className="relative z-10 mt-7 max-w-[26rem] font-sans text-sm font-light leading-relaxed text-white/70">
              We handle the heavy lifting on tracking and attribution, so you
              can focus on creative and scaling what works across every channel.
            </p>
</div>

<div className="lg:col-span-5 flex flex-col gap-4">

<div className="relative flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111] p-7 sm:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] card-shell">
<h3 className="font-sora text-xl font-normal tracking-tight text-white">
                All the tools to run growth
              </h3>
<p className="mt-2 max-w-sm font-sans text-sm font-light leading-relaxed text-white/55">
                Sourcing, CRM, automations and reporting — together in one
                connected toolkit.
              </p>
<div className="relative mt-7">
<div className="flex flex-col gap-2 opacity-30">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full bg-white/10"></span>
<div className="flex flex-col gap-1">
<span className="h-2.5 w-28 rounded-full bg-white/15"></span>
<span className="h-2 w-20 rounded-full bg-white/10"></span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full bg-white/10"></span>
<div className="flex flex-col gap-1">
<span className="h-2.5 w-24 rounded-full bg-white/15"></span>
<span className="h-2 w-16 rounded-full bg-white/10"></span>
</div>
</div>
</div>
<div className="absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2">
<div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#1c1c1c] px-5 py-3 shadow-xl">
<span className="font-sans text-sm font-light text-white/60">
                      Search across 2.7M signals
                    </span>
<span className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
<i className="h-4 w-4" data-lucide="search"></i>
</span>
</div>
</div>
</div>
</div>

<div className="relative flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111] p-7 sm:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] card-shell">
<h3 className="font-sora text-xl font-normal tracking-tight text-white">
                Leave the follow-ups to us
              </h3>
<p className="mt-2 max-w-sm font-sans text-sm font-light leading-relaxed text-white/55">
                From client comms to optimizations, we automate the manual work
                so you stay focused.
              </p>
<div className="mt-6 flex flex-col gap-3">
<span className="font-sans text-xs font-light text-orange-300">
                  You launched a new test
                </span>
<div className="self-start max-w-[80%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.06] px-4 py-3">
<p className="font-sans text-xs font-normal text-white/50">
                    Mia Wilson
                  </p>
<p className="mt-1 font-sans text-sm font-light text-white/85">
                    Great! Let's scale the winning ad set 🚀
                  </p>
</div>
<div className="self-end bg-orange-500 max-w-[80%] rounded-2xl pt-3 pr-4 pb-3 pl-4 shadow-lg">
<p className="font-sans text-xs font-normal text-white/80">
                    Dominic Anderson
                  </p>
<p className="mt-1 font-sans text-sm font-light text-white">
                    Budget scaled +20% · ROAS 4.8x
                  </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-[#111] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba0fd19d-f5d5-4d0c-b993-fb38d66f18a4_1600w.webp)] bg-cover bg-center border-white/10 border rounded-[1.75rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] card-shell stagger" style={{position: 'relative', overflow: 'hidden', isolation: 'isolate'}}>
<video data-aura-generated-video="true" data-aura-generated-video-bg="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba0fd19d-f5d5-4d0c-b993-fb38d66f18a4_1600w.webp" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/6069c980-7469-4c7c-8788-40b445c8d609/1780682030889-200abd36-c4a9-47b5-9ccd-308a9de4d664.mp4" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', zIndex: '0'}}></video>
<div className="flex flex-col bg-center sm:p-10 pt-7 pr-7 pb-7 pl-7 relative justify-end">
<h3 className="font-sora text-2xl font-normal tracking-tight text-white">
                Let AI do the heavy lifting
              </h3>
<p className="mt-3 max-w-md font-sans text-sm font-light leading-relaxed text-white/55">
                AI to supercharge your marketers, not replace them. Focus on
                what drives results: real strategy and stronger campaigns.
              </p>
<div className="mt-7 flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-sans text-xs font-light text-white/70">
<i className="h-4 w-4 text-orange-400" data-lucide="wand-2"></i>
                  Auto-optimization
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-sans text-xs font-light text-white/70">
<i className="h-4 w-4 text-orange-400" data-lucide="brain"></i>
                  Predictive insights
                </span>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-20 mx-auto mb-16 w-[calc(100%-3rem)] max-w-[78rem]">
<div className="relative overflow-hidden rounded-[2rem] border border-orange-100/80 bg-gradient-to-br from-white via-[#fffaf3] to-orange-50/70 px-5 py-12 shadow-[0_28px_80px_rgba(124,45,18,0.08)] sm:px-8 sm:py-16 lg:px-10 lg:py-20 reveal-hidden" data-reveal="">
<div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-orange-300/25 blur-[90px]"></div>
<div className="pointer-events-none absolute -bottom-32 left-16 h-72 w-72 rounded-full bg-orange-400/10 blur-[90px]"></div>
<div className="pointer-events-none absolute inset-0 opacity-[0.32]" style={{backgroundImage: 'linear-gradient(rgba(249,115,22,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.12) 1px, transparent 1px)', backgroundSize: '42px 42px'}}></div>
<div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.45fr] lg:items-start lg:gap-14">
<div className="lg:sticky lg:top-10">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 font-sans text-sm font-light text-orange-600 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-message-square-quote h-4 w-4" data-lucide="message-square-quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 14a2 2 0 0 0 2-2V8h-2"></path><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M8 14a2 2 0 0 0 2-2V8H8"></path></svg>
                Community
              </div>
<h2 className="max-w-[33rem] font-sora text-4xl font-normal leading-[1.05] tracking-tight text-gray-950 sm:text-5xl reveal-hidden" data-reveal="">
                We believe in the power of community
              </h2>
<p className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-gray-600">
                Our goal is to create a growth system you’re proud to share.
                This is why we constantly listen to the brands we serve and let
                their wins guide what comes next.
              </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-sans text-sm font-normal text-white shadow-[0_12px_30px_rgba(249,115,22,0.24)] transition hover:-translate-y-0.5 hover:bg-orange-600 ds-btn icon-nudge" href="#" style={{background: '#FF6B35', border: 'none', boxShadow: '0px 4px 8px rgba(255,107,53,0.2)'}}>
                  Read more testimonials
                </a>
</div>
<div className="mt-10 grid grid-cols-2 gap-3 max-w-sm">
<div className="rounded-2xl border border-orange-100 bg-white/80 p-4 shadow-[0_10px_30px_rgba(124,45,18,0.06)]">
<p className="font-sora text-3xl font-normal tracking-tight text-gray-950">
                    4.8x
                  </p>
<p className="mt-1 font-sans text-sm font-light text-gray-500">
                    Average ROAS lift
                  </p>
</div>
<div className="rounded-2xl border border-orange-100 bg-white/80 p-4 shadow-[0_10px_30px_rgba(124,45,18,0.06)]">
<p className="font-sora text-3xl font-normal tracking-tight text-gray-950">
                    $1.2M+
                  </p>
<p className="mt-1 font-sans text-sm font-light text-gray-500">
                    Revenue attributed
                  </p>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-x-4 gap-y-4">
<div className="flex flex-col md:pt-10 gap-x-4 gap-y-4">
<article className="rounded-[1.5rem] border border-gray-200/80 bg-white/90 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur reveal-hidden" data-reveal="">
<div className="mb-4 flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="Maya Thompson" className="h-11 w-11 shrink-0 rounded-full border border-orange-200 object-cover" src="https://i.pravatar.cc/150?u=maya-growth"/>
<div className="">
<h3 className="font-sora text-base font-normal text-gray-950">
                          Maya Thompson
                        </h3>
<p className="mt-0.5 font-sans text-sm font-light text-gray-500">
                          Founder, Luma Home Goods
                        </p>
</div>
</div>
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
<svg aria-hidden="true" className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
<p className="font-sans text-base font-light leading-relaxed text-gray-700">
                    “They rebuilt our acquisition funnel from the ground up.
                    Within 90 days, our paid campaigns were finally predictable,
                    profitable, and easy for the whole team to understand.”
                  </p>
<div className="mt-5 flex flex-wrap gap-2">
<span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 font-sans text-xs font-light text-orange-600">
                      4.8x ROAS
                    </span>
<span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-sans text-xs font-light text-gray-500">
                      90 days
                    </span>
</div>
</article>
<article className="rounded-[1.5rem] border border-gray-200/80 bg-white/90 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur reveal-hidden" data-reveal="">
<div className="mb-4 flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="Jordan Ellis" className="h-11 w-11 shrink-0 rounded-full border border-orange-200 object-cover" src="https://i.pravatar.cc/150?u=jordan-saas"/>
<div>
<h3 className="font-sora text-base font-normal text-gray-950">
                          Jordan Ellis
                        </h3>
<p className="mt-0.5 font-sans text-sm font-light text-gray-500">
                          CMO, Northstar SaaS
                        </p>
</div>
</div>
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
<i className="h-4 w-4 text-gray-400" data-lucide="bar-chart-3"></i>
</div>
</div>
<p className="font-sans text-base font-light leading-relaxed text-gray-700">
                    “Their dashboard gave us complete visibility into which
                    campaigns were driving pipeline. We stopped wasting budget
                    and scaled the channels that were actually converting.”
                  </p>
<div className="mt-5 flex flex-wrap gap-2">
<span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 font-sans text-xs font-light text-orange-600">
                      Pipeline clarity
                    </span>
<span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-sans text-xs font-light text-gray-500">
                      SaaS
                    </span>
</div>
</article>
<article className="rounded-[1.5rem] border border-gray-200/80 bg-white/90 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur reveal-hidden" data-reveal="">
<div className="mb-4 flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="Elena Rivera" className="h-11 w-11 shrink-0 rounded-full border border-orange-200 object-cover" src="https://i.pravatar.cc/150?u=elena-market"/>
<div className="">
<h3 className="font-sora text-base font-normal text-gray-950">
                          Elena Rivera
                        </h3>
<p className="mt-0.5 font-sans text-sm font-light text-gray-500">
                          Growth Lead, Haven Studio
                        </p>
</div>
</div>
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</div>
</div>
<p className="font-sans text-base font-light leading-relaxed text-gray-700">
                    “The creative testing cadence changed everything. We learned
                    what customers cared about faster and finally had a
                    repeatable way to brief new campaigns.”
                  </p>
</article>
</div>
<div className="flex flex-col gap-x-4 gap-y-4">
<article className="rounded-[1.5rem] border border-orange-200 bg-orange-500 p-5 shadow-[0_20px_50px_rgba(249,115,22,0.22)] reveal-hidden" data-reveal="">
<div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white">
<svg aria-hidden="true" className="lucide lucide-trending-up h-5 w-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<p className="font-sora text-4xl font-normal tracking-tight text-white sm:text-5xl">
                    $1.2M+
                  </p>
<p className="mt-3 font-sans text-base font-light leading-relaxed text-white/85">
                    Attributed revenue generated for clients through structured
                    creative testing, conversion tracking, and performance
                    optimization.
                  </p>
</article>
<article className="rounded-[1.5rem] border border-gray-200/80 bg-white/90 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur reveal-hidden" data-reveal="">
<div className="mb-4 flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="Priya Shah" className="h-11 w-11 shrink-0 rounded-full border border-orange-200 object-cover" src="https://i.pravatar.cc/150?u=priya-apparel"/>
<div className="">
<h3 className="font-sora text-base font-normal text-gray-950">
                          Priya Shah
                        </h3>
<p className="mt-0.5 font-sans text-sm font-light text-gray-500">
                          Director, Ember Apparel
                        </p>
</div>
</div>
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
<svg aria-hidden="true" className="lucide lucide-badge-check h-4 w-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<p className="font-sans text-base font-light leading-relaxed text-gray-700">
                    “From creative briefs to landing page testing, every
                    recommendation was backed by data. Our best ads now scale
                    faster without hurting our margins.”
                  </p>
<div className="mt-5 flex flex-wrap gap-2">
<span className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 font-sans text-xs font-light text-orange-600">
                      Margin-safe scale
                    </span>
<span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-sans text-xs font-light text-gray-500">
                      Apparel
                    </span>
</div>
</article>
<article className="rounded-[1.5rem] border border-gray-200/80 bg-white/90 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur reveal-hidden" data-reveal="">
<div className="mb-4 flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="Marcus Reed" className="h-11 w-11 shrink-0 rounded-full border border-orange-200 object-cover" src="https://i.pravatar.cc/150?u=marcus-fitness"/>
<div className="">
<h3 className="font-sora text-base font-normal text-gray-950">
                          Marcus Reed
                        </h3>
<p className="mt-0.5 font-sans text-sm font-light text-gray-500">
                          CEO, Atlas Fitness
                        </p>
</div>
</div>
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
<i className="h-4 w-4 text-emerald-500" data-lucide="target"></i>
</div>
</div>
<p className="font-sans text-base font-light leading-relaxed text-gray-700">
                    “We finally have a growth partner that understands
                    acquisition, retention, and reporting. The team helped us
                    launch campaigns we could confidently measure.”
                  </p>
</article>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-20 mx-auto mb-16 w-[calc(100%-3rem)] max-w-[78rem]">
<div className="rounded-[2rem] bg-[#111] p-8 sm:p-12 shadow-[0_34px_90px_rgba(20,20,20,0.16)] border border-white/10 relative overflow-hidden reveal-hidden" data-reveal="">
<div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/10 blur-[80px]"></div>
<div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.5fr] items-center">
<div className="">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-1.5 font-sans text-sm font-light text-white/70">
<i className="h-4 w-4 text-orange-400" data-lucide="git-merge"></i>
                Proven Methodology
              </div>
<h2 className="font-sora text-4xl font-normal tracking-tight text-white leading-[1.1] mb-6 reveal-hidden" data-reveal="">
                How we drive predictable growth
              </h2>
<p className="font-sans text-base font-light leading-relaxed text-white/60 mb-8 max-w-md">
                A systematic approach to scaling your brand. We don't guess—we
                test, measure, and optimize to ensure every dollar works harder.
              </p>
<a className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-semibold tracking-tight text-white transition hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(234,88,12,0.3)] ds-btn" href="#" style={{background: 'linear-gradient(145deg, #FF6B35, #E55A1F)', boxShadow: '0px 4px 8px rgba(255, 107, 53, 0.2)', border: '1px solid rgba(229,90,31,0.4)'}}>
                Start Your Journey
              </a>
</div>
<div className="grid gap-4 sm:grid-cols-2 stagger">
<div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] reveal-hidden" data-reveal="">
<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-orange-400 mb-4 border border-white/10">
                  1
                </span>
<h3 className="font-sora text-lg font-normal text-white mb-2">
                  Audit &amp; Strategy
                </h3>
<p className="font-sans text-sm font-light text-white/50 leading-relaxed">
                  Deep dive into your current channels, audiences, and funnel
                  bottlenecks to find quick wins.
                </p>
</div>
<div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] reveal-hidden" data-reveal="">
<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-orange-400 mb-4 border border-white/10">
                  2
                </span>
<h3 className="font-sora text-lg font-normal text-white mb-2">
                  Build &amp; Launch
                </h3>
<p className="font-sans text-sm font-light text-white/50 leading-relaxed">
                  Crafting high-converting creative, persuasive copy, and
                  seamless landing pages for testing.
                </p>
</div>
<div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] reveal-hidden" data-reveal="">
<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-orange-400 mb-4 border border-white/10">
                  3
                </span>
<h3 className="font-sora text-lg font-normal text-white mb-2">
                  Analyze &amp; Optimize
                </h3>
<p className="font-sans text-sm font-light text-white/50 leading-relaxed">
                  Monitoring real-time data to cut losers and reallocate budget
                  to the most profitable winners.
                </p>
</div>
<div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] reveal-hidden" data-reveal="">
<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-orange-400 mb-4 border border-white/10">
                  4
                </span>
<h3 className="font-sora text-lg font-normal text-white mb-2">
                  Scale &amp; Expand
                </h3>
<p className="font-sans text-sm font-light text-white/50 leading-relaxed">
                  Increasing spend confidently while maintaining target ROAS and
                  expanding into new channels.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-20 mx-auto mb-16 w-[calc(100%-1.5rem)] max-w-[78rem] sm:w-[calc(100%-3rem)]">
<div className="relative overflow-hidden rounded-[1.5rem] border border-gray-200/80 bg-white/80 px-4 py-10 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur sm:rounded-[2rem] sm:px-8 sm:py-16 lg:px-12">
<div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-200/35 blur-[90px]"></div>
<div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gray-200/50 blur-[90px]"></div>
<div className="relative z-10">
<div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 reveal-hidden" data-reveal="">
<span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 font-sans text-xs font-light text-orange-600 sm:px-4 sm:text-sm">
<svg aria-hidden="true" className="lucide lucide-messages-square h-3.5 w-3.5 sm:h-4 sm:w-4" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
                FAQ
              </span>
<h2 className="font-sora text-3xl font-light leading-[1.08] tracking-tight text-gray-950 sm:text-4xl lg:text-5xl reveal-hidden" data-reveal="">
                Questions, answered
              </h2>
<p className="mx-auto mt-3 max-w-xl font-sans text-sm font-light leading-relaxed text-gray-600 sm:mt-4 sm:text-base">
                Everything you need to understand how our growth system works
                before your first strategy call.
              </p>
</div>
<div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
<aside className="rounded-2xl border border-gray-200/80 bg-[#fbfaf7] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:rounded-[1.5rem] sm:p-4 lg:sticky lg:top-8 lg:self-start">
<nav aria-label="FAQ categories" className="flex snap-x snap-mandatory gap-2 overflow-x-auto [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&amp;::-webkit-scrollbar]:hidden pb-1 gap-x-2 gap-y-2">
<a className="inline-flex min-w-max snap-start items-center justify-between gap-3 rounded-xl bg-gray-950 px-4 py-2.5 font-sans text-xs font-light text-white shadow-[0_14px_34px_rgba(15,23,42,0.12)] sm:gap-4 sm:rounded-2xl sm:py-3 sm:text-sm hover-track" href="#">
                    General
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
</a>
<a className="inline-flex min-w-max snap-start items-center justify-between gap-3 rounded-xl px-4 py-2.5 font-sans text-xs font-light text-gray-600 transition hover:bg-white hover:text-gray-950 sm:gap-4 sm:rounded-2xl sm:py-3 sm:text-sm hover-track" href="#">
                    Strategy
                  </a>
<a className="inline-flex min-w-max snap-start items-center justify-between gap-3 rounded-xl px-4 py-2.5 font-sans text-xs font-light text-gray-600 transition hover:bg-white hover:text-gray-950 sm:gap-4 sm:rounded-2xl sm:py-3 sm:text-sm hover-track" href="#">
                    Reporting
                  </a>
<a className="inline-flex min-w-max snap-start items-center justify-between gap-3 rounded-xl px-4 py-2.5 font-sans text-xs font-light text-gray-600 transition hover:bg-white hover:text-gray-950 sm:gap-4 sm:rounded-2xl sm:py-3 sm:text-sm hover-track" href="#">
                    Creative
                  </a>
<a className="inline-flex min-w-max snap-start items-center justify-between gap-3 rounded-xl px-4 py-2.5 font-sans text-xs font-light text-gray-600 transition hover:bg-white hover:text-gray-950 sm:gap-4 sm:rounded-2xl sm:py-3 sm:text-sm hover-track" href="#">
                    Billing
                  </a>
</nav>
</aside>
<div className="">
<div className="mb-4 flex items-center gap-3 sm:mb-5">
<span className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-100 bg-orange-50 text-orange-500 sm:h-9 sm:w-9 sm:rounded-xl">
<svg aria-hidden="true" className="lucide lucide-layout-grid h-3.5 w-3.5 sm:h-4 sm:w-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</span>
<h3 className="font-sora text-lg font-light tracking-tight text-gray-950 sm:text-xl">
                    General questions
                  </h3>
</div>
<div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)] sm:rounded-[1.75rem]">
<article className="border-b border-gray-200/80 p-4 sm:p-5 md:p-7">
<div className="flex items-start justify-between gap-4 sm:gap-5">
<h4 className="font-sora text-sm font-light leading-snug text-gray-950 sm:text-base md:text-lg">
                        What makes your growth process different?
                      </h4>
<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700 sm:h-8 sm:w-8">
<svg aria-hidden="true" className="lucide lucide-minus h-3.5 w-3.5 sm:h-4 sm:w-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</div>
<p className="mt-3 max-w-2xl font-sans text-sm font-light leading-relaxed text-gray-600 sm:mt-4 sm:text-base">
                      We combine acquisition strategy, creative testing, landing
                      page improvements, and clean attribution into one
                      operating rhythm, so every recommendation is connected to
                      measurable revenue.
                    </p>
</article>
<article className="border-b border-gray-200/80 p-4 transition hover:bg-[#fbfaf7] sm:p-5 md:p-7">
<div className="flex items-center justify-between gap-4 sm:gap-5">
<h4 className="font-sora text-sm font-light leading-snug text-gray-950 sm:text-base md:text-lg">
                        How quickly can we launch campaigns?
                      </h4>
<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 sm:h-8 sm:w-8">
<i className="h-4 w-4" data-lucide="plus"></i>
</span>
</div>
</article>
<article className="border-b border-gray-200/80 p-4 transition hover:bg-[#fbfaf7] sm:p-5 md:p-7">
<div className="flex items-center justify-between gap-4 sm:gap-5">
<h4 className="font-sora text-sm font-light leading-snug text-gray-950 sm:text-base md:text-lg">
                        Do you work with existing internal teams?
                      </h4>
<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 sm:h-8 sm:w-8">
<i className="h-4 w-4" data-lucide="plus"></i>
</span>
</div>
</article>
<article className="border-b border-gray-200/80 p-4 transition hover:bg-[#fbfaf7] sm:p-5 md:p-7">
<div className="flex items-center justify-between gap-4 sm:gap-5">
<h4 className="font-sora text-sm font-light leading-snug text-gray-950 sm:text-base md:text-lg">
                        Which channels do you manage?
                      </h4>
<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 sm:h-8 sm:w-8">
<i className="h-4 w-4" data-lucide="plus"></i>
</span>
</div>
</article>
<article className="p-4 transition hover:bg-[#fbfaf7] sm:p-5 md:p-7">
<div className="flex items-center justify-between gap-4 sm:gap-5">
<h4 className="font-sora text-sm font-light leading-snug text-gray-950 sm:text-base md:text-lg">
                        What happens after the strategy call?
                      </h4>
<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 sm:h-8 sm:w-8">
<i className="h-4 w-4" data-lucide="plus"></i>
</span>
</div>
</article>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-20 mx-auto mb-16 w-[calc(100%-3rem)] max-w-[78rem]">
<div className="relative overflow-hidden rounded-[2.5rem] bg-gray-950 border border-gray-800/80 px-8 py-16 shadow-[0_30px_100px_-15px_rgba(0,0,0,0.5)] sm:px-14 lg:px-20 lg:py-24">

<div className="pointer-events-none absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-orange-500/10 blur-[120px]"></div>
<div className="pointer-events-none absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-orange-600/10 blur-[120px]"></div>
<div className="pointer-events-none absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">

<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<span className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 font-sans text-sm font-light text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.1)] backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
</span>
          Limited Availability
        </span>
<h2 className="mb-6 font-sora text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
          Ready to scale your brand to the next level?
        </h2>
<p className="mb-10 max-w-xl font-sans text-base font-light leading-relaxed text-gray-400 sm:text-lg">
          Book a free strategy call to see how our growth engine can work for your business. No commitments, just pure value.
        </p>
<div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row lg:justify-start">
<a className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-[1.25rem] bg-orange-500 px-8 py-4 font-sans text-base font-light text-white shadow-[0_8px_25px_-6px_rgba(249,115,22,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-8px_rgba(249,115,22,0.6)] sm:w-auto" href="#">
<span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="relative flex items-center gap-2">
              Get a Proposal
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<a className="inline-flex w-full items-center justify-center rounded-[1.25rem] border border-white/15 bg-transparent px-8 py-4 font-sans text-base font-light text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/5 sm:w-auto" href="#">
            View Pricing
          </a>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:max-w-none">
<div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06)_0%,transparent_60%)] pointer-events-none"></div>
<div className="relative z-10 flex flex-col gap-5 sm:gap-6">

<div className="group relative transform rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] lg:-translate-x-6">
<div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
<div className="relative flex items-center gap-6">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem] border border-orange-500/20 bg-orange-500/10 text-orange-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-110">
<svg className="h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<div>
<p className="mb-1 font-sora text-3xl font-light tracking-tight text-white">3.4x</p>
<p className="font-sans text-sm font-light text-gray-400">Average ROAS uplift</p>
</div>
</div>
</div>

<div className="group relative transform rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] lg:translate-x-8">
<div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
<div className="relative flex items-center gap-6">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem] border border-white/10 bg-white/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-110">
<svg className="h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div className="">
<p className="mb-1 font-sora text-3xl font-light tracking-tight text-white">200+</p>
<p className="font-sans text-sm font-light text-gray-400">Brands scaled</p>
</div>
</div>
</div>

<div className="group relative transform rounded-[1.75rem] border border-orange-500/20 bg-orange-500/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-orange-500/[0.06] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] lg:-translate-x-2">
<div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
<div className="relative flex items-start gap-5 sm:gap-6">
<span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:rotate-12">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<div>
<p className="mb-1.5 font-sora text-lg font-light tracking-tight text-white">No long-term contracts</p>
<p className="font-sans text-sm font-light leading-relaxed text-gray-400">Performance-driven partnerships, cancel anytime.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="relative z-20 mx-auto w-full max-w-[78rem] px-5 sm:px-8 pb-8 pt-12 border-t border-gray-200/60 mt-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
<div className="md:col-span-1">
<a className="flex items-center gap-2.5 mb-5" href="#">
<span className="text-xl text-[#191919] font-sora tracking-tight font-semibold">
                Luminary
              </span>
</a>
<p className="font-sans text-sm font-light leading-relaxed text-gray-500 max-w-[16rem]">
              Data-driven digital marketing agency helping ambitious brands
              scale faster through smarter campaigns.
            </p>
</div>
<div className="">
<h4 className="font-sora text-sm font-semibold text-gray-900 mb-5">
              Services
            </h4>
<ul className="flex flex-col gap-3 font-sans text-sm font-light text-gray-500">
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  Paid Social
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  Paid Search
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  SEO Optimization
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  Creative Studio
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-sora text-sm font-semibold text-gray-900 mb-5">
              Company
            </h4>
<ul className="flex flex-col gap-3 font-sans text-sm font-light text-gray-500">
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  Case Studies
                </a>
</li>
<li className="">
<a className="hover:text-orange-500 transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-sora text-sm font-semibold text-gray-900 mb-5">
              Legal
            </h4>
<ul className="flex flex-col gap-3 font-sans text-sm font-light text-gray-500">
<li className="">
<a className="hover:text-orange-500 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li className="">
<a className="hover:text-orange-500 transition-colors" href="#">
                  Terms of Service
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200/60">
<p className="font-sans text-xs font-light text-gray-400">
            © 2024 Luminary Agency. All rights reserved.
          </p>
<div className="flex items-center gap-4 mt-4 sm:mt-0">
<a className="text-gray-400 hover:text-orange-500 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
</a>
<a className="text-gray-400 hover:text-orange-500 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a className="text-gray-400 hover:text-orange-500 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="instagram"></i>
</a>
</div>
</div>
</footer>



</main>

<style id="primary-orange-overrides">
      .text-\[\#38BDF8\]{color:#F97316!important}.text-\[\#BAE6FD\]{color:#FED7AA!important}.text-\[\#E0F2FE\]{color:#FFEDD5!important}.text-\[\#0369a1\]{color:#C2410C!important}.bg-\[\#38BDF8\]{background-color:#F97316!important}.bg-\[\#38BDF8\]\/25{background-color:rgb(249 115 22 / .25)!important}.bg-\[\#38BDF8\]\/40{background-color:rgb(249 115 22 / .40)!important}.bg-\[\#38BDF8\]\/45{background-color:rgb(249 115 22 / .45)!important}.bg-\[\#38BDF8\]\/65{background-color:rgb(249 115 22 / .65)!important}.bg-\[\#38BDF8\]\/80{background-color:rgb(249 115 22 / .80)!important}.border-\[\#38BDF8\]\/20{border-color:rgb(249 115 22 / .20)!important}[class*='rgba(56,189,248']{box-shadow:0 0 18px rgba(249,115,22,.72)!important}
    </style>



    </>
  );
}

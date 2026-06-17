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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


                                (function () {
                        const canvas = document.getElementById('performanceChart');
                        if (!canvas) return;
                        const ctx = canvas.getContext('2d');

                        // Data: Behavior (Users), Growth (Sign-ups), Performance (Index)
                        const labels = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG'];
                        const users = [6.2, 5.1, 3.4, 7.8, 4.3, 8.5, 6.9, 5.2]; // in k
                        const signups = [2.8, 2.3, 5.6, 7.4, 2.1, 8.0, 3.2, 2.6]; // in k
                        const perfIdx = [68, 72, 77, 83, 64, 79, 69, 75]; // %

                        function makeBarGradient(colorTop, colorBottom, area) {
                          const g = ctx.createLinearGradient(0, area.top, 0, area.bottom);
                          g.addColorStop(0, colorTop);
                          g.addColorStop(1, colorBottom);
                          return g;
                        }

                        let gradients = null;

                        // External HTML tooltip to mimic screenshot style
                        const tooltipEl = document.getElementById('analyticsTooltip');
                        const ttBadge = document.getElementById('tt-badge');
                        const ttLabel = document.getElementById('tt-label');
                        const ttValue = document.getElementById('tt-value');
                        const ttPercent = document.getElementById('tt-percent');

                        function formatK(n) {
                          const v = Math.round(n * 1000);
                          return v.toLocaleString();
                        }

                        const chart = new Chart(ctx, {
                          type: 'bar',
                          data: {
                            labels,
                            datasets: [
                              {
                                type: 'bar',
                                label: 'Users',
                                data: users,
                                backgroundColor: (c) => {
                                  const {chartArea} = c.chart;
                                  if (!chartArea) return 'rgba(255,255,255,0.12)';
                                  if (!gradients) gradients = {};
                                  if (!gradients.users) gradients.users = makeBarGradient('rgba(255,255,255,0.22)','rgba(255,255,255,0.06)', chartArea);
                                  return gradients.users;
                                },
                                borderRadius: 12,
                                borderSkipped: false,
                                maxBarThickness: 16,
                                categoryPercentage: 0.7,
                                barPercentage: 0.7
                              },
                              {
                                type: 'bar',
                                label: 'Sign-ups',
                                data: signups,
                                backgroundColor: (c) => {
                                  const {chartArea} = c.chart;
                                  if (!chartArea) return '#7C3AED';
                                  if (!gradients) gradients = {};
                                  if (!gradients.signup) gradients.signup = makeBarGradient('#8B5CF6','#7C3AED', chartArea);
                                  return gradients.signup;
                                },
                                borderRadius: 12,
                                borderSkipped: false,
                                maxBarThickness: 16,
                                categoryPercentage: 0.7,
                                barPercentage: 0.7
                              },
                              {
                                type: 'line',
                                label: 'Performance Index',
                                data: perfIdx,
                                yAxisID: 'y2',
                                borderColor: 'rgba(52,211,153,1)',
                                pointBackgroundColor: 'rgba(52,211,153,1)',
                                pointBorderColor: 'rgba(0,0,0,0)',
                                pointRadius: 0,
                                pointHoverRadius: 4,
                                tension: 0.45,
                                fill: {
                                  target: 'origin',
                                  above: 'rgba(52,211,153,0.06)'
                                },
                                borderWidth: 2
                              }
                            ]
                          },
                          options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            layout: { padding: { left: 8, right: 12, top: 8, bottom: 8 } },
                            scales: {
                              x: {
                                grid: {
                                  display: true,
                                  drawBorder: false,
                                  color: 'rgba(255,255,255,0.06)',
                                  borderDash: [2, 6]
                                },
                                ticks: {
                                  color: 'rgba(255,255,255,0.7)',
                                  font: { weight: 500 }
                                },
                                stacked: false
                              },
                              y: {
                                position: 'left',
                                min: 0,
                                suggestedMax: Math.max(...users, ...signups) + 1,
                                grid: {
                                  display: true,
                                  drawBorder: false,
                                  color: 'rgba(255,255,255,0.06)',
                                  borderDash: [2, 6]
                                },
                                ticks: {
                                  color: 'rgba(255,255,255,0.6)',
                                  callback: (v) => v + 'k',
                                  font: { weight: 500 }
                                }
                              },
                              y2: {
                                position: 'right',
                                min: 50,
                                max: 100,
                                grid: { display: false, drawBorder: false },
                                ticks: {
                                  color: 'rgba(52,211,153,0.8)',
                                  callback: (v) => v + '%',
                                  font: { weight: 500 }
                                }
                              }
                            },
                            plugins: {
                              legend: { display: false },
                              tooltip: {
                                enabled: false,
                                external: (context) => {
                                  const {chart, tooltip} = context;
                                  if (!tooltip || tooltip.opacity === 0) {
                                    tooltipEl.style.opacity = 0;
                                    return;
                                  }
                                  const dp = tooltip.dataPoints?.[0];
                                  if (!dp) return;

                                  // Determine content
                                  const idx = dp.dataIndex;
                                  const dsLabel = dp.dataset.label;
                                  let value = dp.raw;
                                  let color = '#7C3AED';
                                  let percentText = '';
                                  if (dsLabel === 'Users') {
                                    color = 'rgba(255,255,255,0.6)';
                                    percentText = `${Math.round((signups[idx] / users[idx]) * 100)}%`;
                                    ttLabel.textContent = 'Users';
                                    ttValue.textContent = formatK(value) + ' users';
                                  } else if (dsLabel === 'Sign-ups') {
                                    color = '#7C3AED';
                                    percentText = `${Math.round((signups[idx] / users[idx]) * 100)}%`;
                                    ttLabel.textContent = 'Sign-ups';
                                    ttValue.textContent = formatK(value);
                                  } else {
                                    color = 'rgba(52,211,153,1)';
                                    percentText = `${value}%`;
                                    ttLabel.textContent = 'Performance';
                                    ttValue.textContent = value + '%';
                                  }
                                  ttBadge.style.background = dsLabel === 'Users'
                                    ? 'linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))'
                                    : color;
                                  ttPercent.textContent = percentText;

                                  // Position
                                  const {offsetLeft: chartX, offsetTop: chartY} = chart.canvas;
                                  tooltipEl.style.opacity = 1;
                                  tooltipEl.style.left = (chartX + tooltip.caretX + 12) + 'px';
                                  tooltipEl.style.top = (chartY + tooltip.caretY - 36) + 'px';
                                }
                              }
                            },
                            animation: {
                              duration: 900,
                              easing: 'easeOutQuart'
                            }
                          }
                        });

                        // Recompute gradients on resize
                        window.addEventListener('resize', () => {
                          gradients = null;
                          chart.resize();
                          tooltipEl.style.opacity = 0;
                        });
                      })();
                    


      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute">
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY">
</div>

</div>
</div>


<header className="z-10 [animation:fadeSlideIn_1s_ease-out_0.1s_both] relative">
<div className="flex w-full max-w-[1500px] mx-auto items-center justify-between pt-8 px-4 sm:px-6 lg:px-8 xl:px-12">

<div className="select-none md:text-2xl md:text-[#ffffff] text-xl font-medium text-[#7377F6] tracking-tight">
          neon—lab
        </div>
<button aria-label="Open menu" className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-transparent rounded-full p-[2px] relative ring-1 ring-white/20 hover:ring-white/30 items-center">
<span className="z-0 inline-flex items-center justify-center leading-[1] font-semibold text-neutral-300 hover:text-white tracking-tight rounded-full p-2 relative transition-colors">
<svg className="lucide lucide-menu w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path className="" d="M4 12h16"></path>
<path className="" d="M4 19h16"></path>
</svg>
</span>
</button>
</div>
</header>

<main className="z-10 relative">
<div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
<div className="grid grid-cols-12 gap-6 lg:gap-10 gap-x-6 gap-y-6">

<section className="col-span-12 lg:col-span-7 md:pt-14 max-w-none pt-14">
<div className="mb-6 md:mb-8">
<span className="sr-only">Em dash</span>
</div>
<h1 className="[text-wrap:balance] leading-[1] text-[10vw] sm:text-5xl md:text-6xl lg:text-[90px] xl:text-[100px] [animation:fadeSlideIn_1s_ease-out_0.2s_both] font-semibold text-neutral-100 tracking-tight">
              The faster way
              <br className="hidden sm:block"/>
              to
              <span className="font-semibold text-[#7377F6]">design</span>
              ,
              <span className="font-semibold text-[#7377F6]">ship</span>
              , and
              <span className="text-indigo-400 font-semibold">grow</span>
              your product.
            </h1>

<div className="mt-12 max-w-2xl">

<p className="xl:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-xl text-neutral-300 tracking-tight">
                Neon-lab helps teams turn ideas into polished products faster
                using AI-assisted workflows for design, automation, and launch.
              </p>

<div className="flex flex-wrap [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-4 gap-y-4">

<button className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-gradient-to-r from-[#2A2DFE] via-[#4338CA] to-[#7C3AED] rounded-full px-[2px] py-[2px] relative shadow-[0_0_48px_rgba(67,56,202,0.45)] items-center">
<span className="z-0 inline-flex items-center justify-between gap-4 leading-[1] text-lg font-semibold text-white tracking-tight rounded-full pt-3.5 pr-6 pb-3.5 pl-6 relative" style="background: linear-gradient(90deg,#2A2DFE 0%, #4338CA 50%, #7C3AED 100%);
             box-shadow: inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.25);">
<span className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0) 60%)', mixBlend: 'screen'}}></span>
<span className="z-10 relative">Get Started</span>
<span className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/10 ring-1 ring-white/10">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</span>
</button>

<button className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-transparent rounded-full p-[2px] relative ring-1 ring-white/20 hover:ring-white/30 items-center">
<span className="z-0 inline-flex items-center justify-between gap-4 leading-[1] text-lg font-semibold text-neutral-300 hover:text-white tracking-tight rounded-full py-3.5 px-6 relative transition-colors">
<span className="z-10 relative">Learn More</span>
<span className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</span>
</button>
</div>
</div>

</section>

<section className="col-span-12 lg:col-span-5 md:pt-14 flex pt-14 items-center justify-center">
<div className="w-full max-w-lg relative drop-shadow-2xl">

<div className="-top-14 -right-4 sm:w-[280px] z-20 [animation:fadeSlideIn_1s_ease-out_0.6s_both] bg-[#1C1C1E] border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 absolute shadow-lg">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-white/10 shrink-0">
<svg className="lucide lucide-wand-2 w-5 h-5 text-white" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<button aria-label="Dismiss" className="text-white/70 hover:text-white transition-colors p-1 -mr-1 rounded-md">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mt-3">
<h4 className="text-white text-base font-semibold tracking-tight">
                    Ask Neon AI to create with you!
                  </h4>
<p className="text-slate-300 text-sm mt-1">
                    The more details you share, the better it will deliver.
                  </p>
</div>

<div className="absolute right-6 -bottom-2 w-4 h-4 rotate-45 bg-[#1C1C1E] border-r border-b border-white/10"></div>
</div>

<div className="group overflow-hidden transition-all duration-500 hover:border-indigo-500/40 hover:ring-indigo-500/30 [animation:fadeSlideIn_1s_ease-out_0.5s_both] bg-[#0F0F11] border-white/10 border ring-white/5 ring-1 rounded-2xl relative">

<div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:scale-110"></div>
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/5 ring-1 ring-white/10 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5">
<div className="h-1.5 w-1.5 animate-pulse bg-indigo-400 rounded-full"></div>
                      AI Assistant
                    </span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-xs text-slate-400">Online</span>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">
                    AI Chat Assistant
                  </h3>
<p className="leading-relaxed text-sm text-slate-300 mb-4">
                    Ask me anything! I can help with code, design, writing,
                    analysis, and more. Just type your question below.
                  </p>

<div className="bg-[#1C1C1E] rounded-xl p-4 mb-4 ring-1 ring-white/10">
<div className="space-y-3">

<div className="flex justify-end">
<div className="bg-indigo-600 text-white text-sm px-3 py-2 rounded-lg max-w-[80%]">
                          How can I improve my website's performance?
                        </div>
</div>

<div className="flex justify-start items-start gap-2">
<div className="flex text-xs font-bold text-white w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b3b62420-5c07-4956-9d39-22d810ae74f6_320w.webp)] bg-cover rounded-full items-center justify-center" style={{}}></div>
<div className="bg-[#252527] text-slate-200 text-sm px-3 py-2 rounded-lg max-w-[80%]">
                          I can help optimize your website! Consider image
                          compression, CDN usage, and code minification...
                        </div>
</div>
</div>
</div>

<div className="flex items-center gap-2 bg-[#1C1C1E] rounded-xl p-2 ring-1 ring-white/10">
<input className="flex-1 bg-transparent text-sm text-white placeholder-slate-400 outline-none px-2 py-1" placeholder="Type your message..." type="text"/>
<button className="bg-indigo-600 hover:bg-indigo-700 transition-colors w-8 h-8 rounded-lg flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19V5"></path>
<path d="m5 12 7-7 7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="z-10 sm:py-24 fade-in fade-in-delay-4 [animation:fadeSlideIn_1s_ease-out_0.6s_both] pt-8 pb-8 relative" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="sm:px-6 lg:px-8 [animation:fadeSlideIn_1s_ease-out_0.7s_both] max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase text-xs font-medium text-white tracking-wide">
                Trusted by teams at
              </p>
</div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>

<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">

<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">
                      TechFlow
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">
                      Nexus Labs
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">
                      DataSync
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">
                      VisionCorp
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">
                      CloudBase
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">
                      InnovateTech
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">
                      FlowState
                    </span>
</div>
</div>

<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">
                      TechFlow
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">
                      Nexus Labs
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">
                      DataSync
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">
                      VisionCorp
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">
                      CloudBase
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">
                      InnovateTech
                    </span>
</div>
<div className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">
                      FlowState
                    </span>
</div>
</div>
</div>
</div>
</div>
<style className="">
            @keyframes ticker {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX(-100%);
              }
            }

            .ticker-track {
              animation: ticker 40s linear infinite;
              width: calc(200% + 16px);
            }

            .ticker-track:hover {
              animation-play-state: paused;
            }
          </style>
</section>
<section className="xl:pt-48 xl:pb-10 pt-48 pb-10 relative">
<div className="sm:px-6 lg:pl-0 lg:pr-0 w-full max-w-[1500px] mr-auto ml-auto pr-4 pl-4">

<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll mb-16 gap-x-6 gap-y-x-6">
<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl font-bold text-white/30 tracking-tighter">
                    01
                  </span>
<div className="w-px xl:bg-[#ffffff]/20 h-16"></div>
</div>
</div>
<div className="flex-1 lg:text-left text-left">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                  Everything you need to
                  <span className="text-[#7377F6]">build faster</span>
</h2>
<p className="text-xl text-neutral-300 max-w-3xl tracking-tight">
                  Comprehensive tools and AI assistance to streamline your
                  workflow from concept to launch.
                </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 lg:[grid-auto-flow:dense] lg:auto-rows-fr lg:gap-8 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll gap-x-6 gap-y-6">

<div className="group hover:border-[#7377F6]/40 transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll bg-[#0F0F11] border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-[#7377F6]/5 w-48 h-48 rounded-full absolute blur-3xl"></div>
<div className="relative z-10">
<section className="col-span-12 flex md:pt-14 lg:col-span-5 lg:pt-0 pt-14 items-center justify-center">
<div className="xl:mb-8 w-full max-w-lg mb-8 relative">


<div className="overflow-hidden bg-[#121214] ring-white/10 ring-1 rounded-2xl mb-8 pt-4 pr-4 pb-4 pl-4 relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#7377F6]/10 via-transparent to-[#4338CA]/5 pointer-events-none"></div>

<div className="flex items-center gap-3 mb-4 relative z-10">
<div className="w-8 h-8 bg-gradient-to-br from-[#7377F6] to-[#4338CA] rounded-lg flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path>
<path d="m14 7 3 3"></path>
</svg>
</div>
<span className="text-white font-medium text-sm">
                            AI Design Assistant
                          </span>
<div className="ml-auto flex items-center gap-1">
<div className="w-2 h-2 bg-[#7377F6] rounded-full animate-pulse"></div>
<span className="text-xs text-slate-400">Active</span>
</div>
</div>

<div className="space-y-3 relative z-10">
<div className="flex justify-end">
<div className="bg-gradient-to-r from-[#7377F6] to-[#4338CA] text-white text-sm px-3 py-2 rounded-xl max-w-[85%] shadow-lg">
                              Create a modern landing page layout
                            </div>
</div>
<div className="flex justify-start items-start gap-2">
<div className="flex text-xs font-bold text-white w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b3b62420-5c07-4956-9d39-22d810ae74f6_320w.webp)] bg-cover rounded-full items-center justify-center" style={{}}></div>
<div className="bg-[#1C1C1E] text-slate-200 text-sm px-3 py-2 rounded-xl max-w-[85%] ring-1 ring-white/10">
                              ✨ Generated hero section with modern
                              glassmorphism design...
                            </div>
</div>
</div>

<div className="flex items-center gap-2 mt-4 bg-[#0F0F11] rounded-xl p-2 ring-1 ring-white/10 relative z-10">
<input className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none px-2 py-1" placeholder="Describe your design..." type="text"/>
<button className="bg-gradient-to-r from-[#7377F6] to-[#4338CA] w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19V5"></path>
<path d="m5 12 7-7 7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</section>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                    AI-Powered Design
                  </h3>
<p className="text-neutral-300 leading-relaxed mb-4">
                    Generate stunning designs, layouts, and components with
                    advanced AI that understands your brand and requirements.
                  </p>
<div className="flex items-center text-[#7377F6] text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Learn more
                    <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>

<div className="group hover:border-[#7377F6]/40 transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll bg-[#0F0F11] border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-[#7377F6]/5 w-48 h-30 rounded-full absolute blur-3xl"></div>
<div className="relative z-10">
<section className="col-span-12 flex md:pt-14 lg:col-span-5 lg:pt-0 pt-14 items-center justify-center">
<div className="xl:mb-8 w-full max-w-lg mb-8 relative">


<div className="overflow-hidden bg-[#121214] ring-white/10 ring-1 rounded-2xl mb-8 pt-4 pr-4 pb-4 pl-4 relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#4338CA]/10 via-transparent to-[#7C3AED]/5 pointer-events-none"></div>

<div className="flex items-center justify-between mb-4 relative z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-[#4338CA] to-[#7C3AED] rounded-lg flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
<path d="M12 2v2"></path>
<path d="M12 20v2"></path>
<path d="m4.93 4.93 1.41 1.41"></path>
<path d="m17.66 17.66 1.41 1.41"></path>
<path d="M2 12h2"></path>
<path d="M20 12h2"></path>
<path d="m6.34 17.66-1.41 1.41"></path>
<path d="m19.07 4.93-1.41 1.41"></path>
</svg>
</div>
<span className="text-white font-medium text-sm">
                              Workflow Engine
                            </span>
</div>
<div className="px-3 py-1 bg-gradient-to-r from-[#4338CA]/20 to-[#7C3AED]/20 rounded-full text-xs text-[#A78BFA] font-medium ring-1 ring-[#7C3AED]/30">
                            3 Active
                          </div>
</div>

<div className="space-y-3 relative z-10">
<div className="flex items-center gap-3 p-3 bg-[#0F0F11] rounded-xl ring-1 ring-white/10">
<div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] shadow-lg"></div>
<span className="text-sm text-white font-medium flex-1">
                              Deploy to staging
                            </span>
<div className="text-xs text-[#22C55E] bg-[#22C55E]/10 px-2 py-1 rounded-full">
                              Complete
                            </div>
</div>
<div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#7377F6]/10 to-[#4338CA]/5 rounded-xl ring-1 ring-[#7377F6]/30 shadow-lg">
<div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#7377F6] to-[#4338CA] animate-pulse shadow-lg"></div>
<span className="text-sm text-white font-medium flex-1">
                              Run tests
                            </span>
<div className="text-xs text-[#7377F6] bg-[#7377F6]/10 px-2 py-1 rounded-full animate-pulse">
                              Running
                            </div>
</div>
<div className="flex items-center gap-3 p-3 bg-[#0F0F11] rounded-xl ring-1 ring-white/10 opacity-60">
<div className="w-4 h-4 rounded-full bg-white/20 ring-2 ring-white/30"></div>
<span className="text-sm text-slate-300 font-medium flex-1">
                              Production deploy
                            </span>
<div className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded-full">
                              Queued
                            </div>
</div>
</div>
</div>
</div>
</section>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                    Smart Automation
                  </h3>
<p className="leading-relaxed text-neutral-300 mb-4">
                    Streamline your workflow with intelligent automation that
                    handles deployments, testing, and optimization tasks.
                  </p>
<div className="flex items-center text-[#7377F6] text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Learn more
                    <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>

<div className="group hover:border-[#7377F6]/40 transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll bg-[#0F0F11] border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-[#7377F6]/5 w-48 h-48 rounded-full absolute blur-3xl"></div>
<div className="relative z-10">
<section className="col-span-12 flex md:pt-14 lg:col-span-5 lg:pt-0 pt-14 items-center justify-center">
<div className="xl:mb-8 w-full max-w-lg mb-8 relative">


<div className="group overflow-hidden transition-all duration-500 hover:border-indigo-500/40 hover:ring-indigo-500/30 bg-[#0F0F11] border-white/10 border ring-white/5 ring-1 rounded-2xl relative">

<div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:scale-110"></div>
<div className="overflow-hidden xl:mt-0 bg-[#121214] ring-white/10 ring-1 rounded-2xl mt-0 pt-4 pr-4 pb-4 pl-4 relative">
<h4 className="text-white text-base sm:text-lg font-semibold tracking-tight">
                              Lander Studio Website Design
                            </h4>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<div className="flex items-center justify-between gap-3">

<div className="flex items-center gap-3 min-w-0">
<span className="relative h-6 w-2 rounded-full ring-1 ring-white/10 overflow-hidden">
<span className="absolute inset-0" style={{background: 'linear-gradient(180deg,#22c55e 0%, #16a34a 55%, #84cc16 100%)'}}></span>
<span className="absolute left-1/2 -translate-x-1/2 top-0.5 h-1.5 w-1.5 rounded-full bg-white/80"></span>
</span>
<p className="text-slate-200 text-sm sm:text-base font-medium tracking-tight truncate">
                                    Desktop Design
                                  </p>
</div>

<div className="flex items-center gap-2 shrink-0">
<span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-slate-200 text-xs sm:text-sm font-medium tracking-tight">
                                    56.2%
                                  </span>
<button className="inline-flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-slate-300 text-xs sm:text-sm font-medium tracking-tight hover:text-white transition-colors">
                                    Assign to
                                    <svg className="lucide lucide-chevron-down w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mt-3 rounded-2xl bg-white/5 ring-1 ring-white/10/50 px-4 py-3 opacity-70">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3 min-w-0">
<span className="relative h-6 w-2 rounded-full ring-1 ring-white/10 overflow-hidden">
<span className="absolute inset-0" style={{background: 'linear-gradient(180deg,#a3e635 0%, #facc15 100%)'}}></span>
<span className="absolute left-1/2 -translate-x-1/2 top-0.5 h-1.5 w-1.5 rounded-full bg-white/70"></span>
</span>
<p className="text-slate-300 text-sm font-medium tracking-tight truncate">
                                    Icon Changes
                                  </p>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-slate-300 text-xs font-medium tracking-tight">
                                    20.0%
                                  </span>
<button className="inline-flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-slate-400 text-xs font-medium tracking-tight">
                                    Assign to
                                    <svg className="lucide lucide-chevron-down w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mt-3 rounded-2xl bg-white/5 px-4 py-3 opacity-40 ring-1 ring-white/5">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3 min-w-0">
<span className="relative h-6 w-2 rounded-full ring-1 ring-white/10 overflow-hidden">
<span className="absolute inset-0" style={{background: 'linear-gradient(180deg,#fbbf24 0%, #ea580c 100%)'}}></span>
<span className="absolute left-1/2 -translate-x-1/2 top-0.5 h-1.5 w-1.5 rounded-full bg-white/60"></span>
</span>
<p className="text-slate-400 text-sm font-medium tracking-tight truncate">
                                    Content Changes
                                  </p>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-slate-400 text-xs font-medium tracking-tight">
                                    14.0%
                                  </span>
<button className="inline-flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-slate-400/80 text-xs font-medium tracking-tight">
                                    Assign to
                                    <svg className="lucide lucide-chevron-down w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="pointer-events-none absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-white/10"></div>
</div>
</div>
</div>
</section>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                    Real-time Collaboration
                  </h3>
<p className="leading-relaxed text-neutral-300 mb-4">
                    Work seamlessly with your team in real-time with live
                    editing, comments, and synchronized project updates.
                  </p>
<div className="flex items-center text-[#7377F6] text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Learn more
                    <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>

<div className="lg:col-span-2 group hover:border-[#7377F6]/40 transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll bg-[#0F0F11] border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-[#7377F6]/5 w-48 h-48 rounded-full absolute blur-3xl"></div>
<div className="relative z-10">

<div className="pt-6 pr-6 pb-6 pl-6">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-[#0F0F11]">

<div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(120% 100% at 0% 0%, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.08) 20%, rgba(0,0,0,0) 55%)'}}></div>

<div className="absolute left-1/2 top-3 -translate-x-1/2 z-10">
<span className="inline-flex items-center rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-sm font-medium tracking-tight text-white/90">
                          Behavior • Performance • Growth
                        </span>
</div>

<div className="absolute right-3 top-3 z-10 hidden sm:flex items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-2.5 py-1 text-xs text-white/80">
<span className="w-3 h-3 rounded-md" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))'}}></span>
                          Users
                        </span>
<span className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-2.5 py-1 text-xs text-white/80">
<span className="w-3 h-3 rounded-md" style={{background: 'linear-gradient(180deg, #8B5CF6, #7C3AED)'}}></span>
                          Sign‑ups
                        </span>
<span className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-2.5 py-1 text-xs text-white/80">
<span className="w-3 h-[3px] rounded-full bg-emerald-400"></span>
                          Perf Index
                        </span>
</div>

<div className="pt-14 pr-4 pb-4 pl-4 relative">

<div className="pointer-events-none absolute z-20 opacity-0 transition-opacity duration-200" id="analyticsTooltip" style={{opacity: '0', left: '293.266px', top: '52.256px'}}>
<div className="rounded-2xl bg-[#1C1C1E] ring-1 ring-white/10 shadow-lg px-4 py-3 min-w-[180px]">
<div className="flex items-center gap-2">
<span className="w-3.5 h-3.5 rounded-md" id="tt-badge" style={{background: 'rgb(124, 58, 237)'}}></span>
<span className="text-sm font-medium text-white/90 tracking-tight" id="tt-label">
                                Sign-ups
                              </span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="text-white tracking-tight" id="tt-value" style={{fontSize: '20px', fontWeight: '600'}}>
                                5,600
                              </div>
<div className="text-white/30">|</div>
<div className="text-white/80 text-sm" id="tt-percent">
                                165%
                              </div>
</div>
</div>
</div>

<div className="relative h-48 sm:h-56">
<canvas className="" height="448" id="performanceChart" style={{display: 'block', boxSizing: 'border-box', height: '224px', width: '795px'}} width="1590"></canvas>
</div>
</div>
</div>


</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                    Advanced Analytics
                  </h3>
<p className="leading-relaxed text-neutral-300 mb-4">
                    Get deep insights into user behavior, performance metrics,
                    and growth opportunities with AI-powered analytics.
                  </p>
<div className="flex items-center text-[#7377F6] text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Learn more
                    <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>

<div className="lg:col-span-1 group hover:border-[#7377F6]/40 transition-all duration-500 overflow-hidden xl:gap-y-16 xl:px-6 xl:py-6 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll bg-[#0F0F11] max-w-6xl border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative gap-x-y-8 gap-y-16">
<div className="-bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-[#7377F6]/5 w-48 h-48 rounded-full absolute blur-3xl"></div>
<div className="relative z-10">

<div className="overflow-hidden bg-[#121214] ring-white/10 ring-1 rounded-2xl mb-8 pt-4 pr-4 pb-4 pl-4 relative">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/5 pointer-events-none"></div>

<div className="flex items-center justify-between mb-4 relative z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 12l-4-4-4 4"></path>
<path d="M12 16V8"></path>
</svg>
</div>
<span className="text-white font-medium text-sm">
                          Deploy Dashboard
                        </span>
</div>
<button className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg text-xs text-white font-medium shadow-lg hover:shadow-xl transition-all">
                        Deploy Now
                      </button>
</div>

<div className="space-y-3 relative z-10">
<div className="flex items-center gap-3 p-3 bg-[#0F0F11] rounded-xl ring-1 ring-white/10">
<div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#22C55E] to-[#16A34A]"></div>
<div className="flex-1">
<div className="text-sm text-white font-medium">
                            Build Complete
                          </div>
<div className="text-xs text-slate-400">
                            2 minutes ago
                          </div>
</div>
<svg className="text-[#22C55E]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/5 rounded-xl ring-1 ring-emerald-500/30">
<div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 animate-pulse"></div>
<div className="flex-1">
<div className="text-sm text-white font-medium">
                            Deploying to Production
                          </div>
<div className="text-xs text-slate-300">
                            Estimated 30 seconds remaining
                          </div>
</div>
<div className="animate-spin w-4 h-4">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 11-6.219-8.56"></path>
</svg>
</div>
</div>

<div className="mt-4 p-3 bg-[#0F0F11] rounded-xl ring-1 ring-white/10">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<span className="text-xs text-slate-300 font-medium">
                            Live URL:
                          </span>
</div>
<div className="text-sm text-white bg-[#1C1C1E] px-3 py-2 rounded-lg font-mono">
                          https://your-app.neon-lab.com
                        </div>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                    One-Click Deploy
                  </h3>
<p className="text-neutral-300 leading-relaxed mb-4">
                    Deploy your applications instantly to production with
                    automated builds, testing, and rollback capabilities.
                  </p>
<div className="flex items-center text-[#7377F6] text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Learn more
                    <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
<div className="pt-48 pb-24 relative xl:pt-48 xl:pb-0">

<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll mb-16 gap-x-6 gap-y-x-6">
<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl font-bold text-white/30 tracking-tighter">
                    02
                  </span>
<div className="w-px xl:bg-[#ffffff]/20 h-16"></div>
</div>
</div>
<div className="flex-1 lg:text-left text-left">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                  Trusted by
                  <span className="text-[#7377F6]">leading teams</span>
</h2>
<p className="text-xl text-neutral-300 max-w-3xl tracking-tight">
                  See how forward-thinking companies use Neon-lab to accelerate
                  their product development.
                </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 lg:[grid-auto-flow:dense] lg:auto-rows-fr lg:gap-8 gap-x-6 gap-y-6">

<div className="lg:col-span-3 ring-1 ring-white/10 overflow-hidden bg-[#0F0F11] border-white/10 border rounded-3xl">

<div className="grid grid-cols-1 lg:grid-cols-12 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">

<div className="col-span-12 lg:col-span-10 lg:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col lg:flex-row gap-6 lg:gap-10 gap-x-6 gap-y-6 items-start">

<div className="w-full max-w-[420px] lg:max-w-[360px] overflow-hidden rounded-2xl select-none">
<img alt="Customer portrait" className="w-full h-full object-cover" id="ts-avatar" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a272c5fe-9fe1-4623-b354-0ffd8e01032f_800w.webp"/>
</div>

<div className="flex-1 w-full">

<div className="mb-4 text-white/20">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h3v10H5V9a2 2 0 0 1 2-2z"></path>
<path d="M17 7h3v10h-5V9a2 2 0 0 1 2-2z"></path>
</svg>
</div>

<p className="leading-relaxed sm:text-3xl lg:text-4xl text-2xl italic text-white/70 tracking-tight" id="ts-quote">
                          Neon-lab transformed our development workflow
                          completely. The AI-powered tools helped us ship
                          features 3x faster, and the deployment automation
                          saved us countless hours every week.
                        </p>

<div className="mt-10 flex items-end justify-between gap-6">
<div className="">
<h4 className="sm:text-3xl text-2xl font-semibold text-white tracking-tight" id="ts-name">
                              Greg Gary
                            </h4>
<p className="sm:text-lg text-base text-slate-400" id="ts-title">
                              VP of Engineering
                            </p>
</div>
<div className="text-right">
<span className="text-[#7377F6] text-lg sm:text-xl font-semibold" id="ts-company">
                              TechFlow
                            </span>
<div className="flex items-center gap-1 mt-1 justify-end">
<svg className="w-4 h-4 text-[#7377F6] fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-[#7377F6] fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-[#7377F6] fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-[#7377F6] fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-[#7377F6] fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-2 border-t lg:border-t-0 lg:border-l border-white/10">
<div className="h-full w-full flex items-center justify-center">
<div className="flex gap-4 pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4 items-center">

<button aria-label="Previous testimonial" className="group relative inline-flex items-center justify-center w-12 h-12 rounded-xl ring-1 ring-white/10 hover:ring-[#7377F6]/30 transition-all duration-300" id="ts-prev">
<span className="rounded-xl absolute top-0 right-0 bottom-0 left-0" style={{boxShadow: 'inset 0 0 0 1px rgba(115,119,246,0.15)'}}></span>
<svg className="w-6 h-6 text-[#7377F6] group-hover:text-white transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5"></path>
<path d="m12 19-7-7 7-7"></path>
</svg>
</button>

<button aria-label="Next testimonial" className="group relative inline-flex items-center justify-center w-12 h-12 rounded-xl ring-1 ring-white/10 hover:ring-[#7377F6]/30 transition-all duration-300" id="ts-next">
<span className="absolute inset-0 rounded-xl" style={{boxShadow: 'inset 0 0 0 1px rgba(115,119,246,0.15)'}}></span>
<svg className="w-6 h-6 text-[#7377F6] group-hover:text-white transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10"></div>

<div className="sm:p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll pt-4 pr-4 pb-4 pl-4">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">

<div className="bg-[#1C1C1E] rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="Customer portrait 1" className="w-full h-full object-cover aspect-[3/4] filter grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f90daec-d59a-4e66-9726-7d1eeae5da17_800w.webp" style={{}}/>
</div>

<div className="bg-[#1C1C1E] rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="Customer portrait 2" className="w-full h-full object-cover aspect-[3/4] filter grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0e4f0c3f-9693-4634-b030-3364d581aea5_800w.webp" style={{}}/>
</div>

<div className="bg-[#1C1C1E] rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="Customer portrait 3" className="w-full h-full object-cover aspect-[3/4] filter grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/367ce1da-19b3-4304-bcef-7a081acdc0e9_800w.webp" style={{}}/>
</div>

<div className="bg-[#1C1C1E] rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="Customer portrait 4" className="w-full h-full object-cover aspect-[3/4] filter grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/78f576a1-3765-48fe-b52e-07d94251e77d_800w.webp" style={{}}/>
</div>

<div className="bg-[#1C1C1E] rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="Customer portrait 5" className="w-full h-full object-cover aspect-[3/4] filter grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4890e155-0abf-4fed-9c36-aa5debbe7262_800w.webp" style={{}}/>
</div>

<div className="bg-[#1C1C1E] rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="Customer portrait 6" className="w-full h-full object-cover aspect-[3/4] filter grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/520f1595-8038-469e-8577-e959aae20f71_800w.jpg" style={{}}/>
</div>

<button className="bg-[#1C1C1E] rounded-xl ring-1 ring-white/10 flex items-center justify-center aspect-[3/4] group" id="rv-top-card">
<svg className="transition-transform duration-300 group-hover:-translate-y-1 w-[36px] h-[36px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '36px', height: '36px', color: 'rgb(115, 119, 246)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10l7-7 7 7"></path>
<path d="M12 3v18"></path>
</svg>
</button>
</div>
</div>

<div className="sm:px-6 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll border-white/10 border-t pt-6 pr-4 pb-6 pl-4">
<div className="flex flex-col lg:flex-row lg:items-center gap-6 gap-x-6 gap-y-6 items-start justify-between">

<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
<span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
<span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
<span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
<span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
<span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
<span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
</div>

<div className="flex items-center gap-4">
<span className="z-0 inline-flex items-center justify-between gap-4 leading-[1] text-lg font-semibold text-white tracking-tight rounded-full pt-3.5 pr-6 pb-3.5 pl-6 relative" style="background: linear-gradient(90deg,#2A2DFE 0%, #4338CA 50%, #7C3AED 100%);
             box-shadow: inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.25);">
<span className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0) 60%)', mixBlend: 'screen'}}></span>
<span className="z-10 relative">See More</span>
<span className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/10 ring-1 ring-white/10">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
<section className="xl:pt-48 xl:pb-48 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll pt-48 pb-48 relative">

<div className="flex flex-col [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll lg:flex-row lg:items-start lg:gap-x-6 lg:mb-0 mb-0">
<div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll mb-16 gap-x-6 gap-y-x-6">
<div className="flex-shrink-0 mb-8 lg:mb-0">
<div className="inline-flex items-center gap-3">
<span className="lg:text-7xl text-6xl font-bold text-white/30 tracking-tighter">
                      03
                    </span>
<div className="w-px xl:bg-[#ffffff]/20 h-16"></div>
</div>
</div>
<div className="flex-1 lg:text-left text-left">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                    Choose your
                    <span className="text-[#7377F6]">perfect plan</span>
</h2>
<p className="text-xl text-neutral-300 tracking-tight max-w-none">
                    Scale with confidence. From solo developers to enterprise
                    teams, we have the right plan for your needs.
                  </p>
</div>
</div>
</div>

<div className="sm:rounded-3xl lg:rounded-3xl overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll bg-[#0F0F11] border-white/10 border ring-white/10 ring-1 rounded-2xl" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x lg:divide-white/10">

<div className="flex flex-col h-full">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
                        Starter
                      </h3>
</div>
<div className="mt-3 flex items-end gap-2">
<span className="text-white leading-[1] tracking-tight" style={{fontSize: '44px', fontWeight: '600'}}>
                        $29
                      </span>
<span className="text-slate-400 text-lg mb-2">/month</span>
</div>
<p className="xl:mb-6 text-sm text-slate-400 mt-2 mb-6">
                      Perfect for individual developers and small projects.
                    </p>
<button className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-gradient-to-r from-[#2A2DFE] via-[#4338CA] to-[#7C3AED] rounded-full px-[2px] py-[2px] relative shadow-[0_0_48px_rgba(67,56,202,0.45)] items-center">
<span className="z-0 inline-flex items-center justify-between gap-4 leading-[1] text-lg font-semibold text-white tracking-tight rounded-full pt-3.5 pr-6 pb-3.5 pl-6 relative" style="background: linear-gradient(90deg,#2A2DFE 0%, #4338CA 50%, #7C3AED 100%);
             box-shadow: inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.25);">
<span className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0) 60%)', mixBlend: 'screen'}}></span>
<span className="z-10 relative">Start Free Trial</span>
<span className="z-10 inline-flex items-center justify-center bg-white/10 w-8 h-8 ring-white/10 ring-1 rounded-xl relative">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</span>
</button>
</div>
<div className="mt-auto border-t border-white/10 p-6 sm:p-8">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<svg className="w-5 h-5 text-[#7377F6]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="tracking-tight">AI Code Assistant</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<svg className="w-5 h-5 text-[#7377F6]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="tracking-tight">5 Projects</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<svg className="w-5 h-5 text-[#7377F6]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="tracking-tight">Basic Analytics</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<svg className="w-5 h-5 text-[#7377F6]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 6 9 17l-5-5"></path>
</svg>
<span className="tracking-tight">Community Support</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<svg className="w-5 h-5 text-[#7377F6]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="tracking-tight">5GB Storage</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col h-full bg-gradient-to-b from-[#7377F6]/5 via-transparent to-transparent">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
                        Pro
                      </h3>
</div>
<div className="mt-3 flex items-end gap-2">
<span className="text-white leading-[1] tracking-tight" style={{fontSize: '44px', fontWeight: '600'}}>
                        $79
                      </span>
<span className="text-slate-400 text-lg mb-2">/month</span>
</div>
<p className="xl:mb-6 text-sm text-slate-400 mt-2 mb-6">
                      Great for growing teams and advanced projects.
                    </p>
<button className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-gradient-to-r from-[#2A2DFE] via-[#4338CA] to-[#7C3AED] rounded-full px-[2px] py-[2px] relative shadow-[0_0_48px_rgba(67,56,202,0.45)] items-center">
<span className="z-0 inline-flex items-center justify-between gap-4 leading-[1] text-lg font-semibold text-white tracking-tight rounded-full pt-3.5 pr-6 pb-3.5 pl-6 relative" style="background: linear-gradient(90deg,#2A2DFE 0%, #4338CA 50%, #7C3AED 100%);
             box-shadow: inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.25);">
<span className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0) 60%)', mixBlend: 'screen'}}></span>
<span className="z-10 relative">Get Started</span>
<span className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/10 ring-1 ring-white/10">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</span>
</button>
</div>
<div className="mt-auto border-t border-white/10 p-6 sm:p-8">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<svg className="w-5 h-5 text-[#7377F6]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="tracking-tight">Advanced AI Features</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<svg className="w-5 h-5 text-[#7377F6]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="tracking-tight">Unlimited Projects</span>
</li>
<li className="flex gap-3 text-slate-300 gap-x-3 gap-y-3 items-center">
<svg className="w-5 h-5 text-[#7377F6]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="tracking-tight">Team Collaboration</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<svg className="w-5 h-5 text-[#7377F6]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="tracking-tight">Priority Support</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<svg className="w-5 h-5 text-[#7377F6]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="tracking-tight">100GB Storage</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col h-full">
<div className="flex flex-col h-full">
<div className="sm:pb-0 mt-auto pt-6 pr-6 pb-0 pl-6">
<div className="bg-[#1C1C1E] rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="Partners collaborating" className="sm:h-56 lg:h-64 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3bbbf364-3029-4f9e-9987-eb90d946b1b1_1600w.jpg"/>
</div>
</div><div className="sm:pt-6 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<h3 className="sm:text-2xl text-xl font-semibold text-white tracking-tight">Enterprise </h3>
</div>
<div className="flex gap-2 mt-3 mb-4 gap-x-2 gap-y-2 items-end">
<span className="leading-[1] text-white tracking-tight" style={{fontSize: '44px', fontWeight: '600'}}>
                          Custom
                        </span>
</div>
<p className="text-slate-300 text-sm mb-6">
                        Tailored solutions for large organizations with specific
                        requirements.
                      </p>
<button className="inline-flex items-center justify-center rounded-full bg-white text-black font-medium px-6 py-3 transition hover:opacity-90 w-full">
                        Contact Sales
                      </button>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="relative overflow-hidden ring-1 ring-white/10 text-white bg-zinc-950 rounded-3xl mb-8">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
<div className="sm:px-10 lg:px-14 lg:py-16 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll pt-12 pr-6 pb-12 pl-6 relative">

<div className="flex flex-col lg:flex-row items-start justify-between gap-10">
<div className="max-w-md">
<div className="select-none md:text-2xl md:text-[#ffffff] text-xl font-medium text-[#7377F6] tracking-tight">
                    neon—lab
                  </div>
<p className="mt-4 text-sm text-white/70 leading-relaxed font-geist">
                    The faster way to design, ship, and grow your product.
                    AI-powered workflows for modern development teams.
                  </p>
<form className="mt-6 flex items-center gap-2" id="nl-form">
<div className="flex-1">
<label className="sr-only" htmlFor="nl-email">Email</label>
<input className="w-full rounded-full bg-white/5 text-white placeholder-white/50 px-4 py-3 text-sm ring-1 ring-white/10 focus:ring-2 focus:ring-[#7377F6]/30 outline-none" id="nl-email" placeholder="Your email" required="" type="email"/>
</div>
<button className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-gradient-to-r from-[#2A2DFE] via-[#4338CA] to-[#7C3AED] rounded-full px-[2px] py-[2px] relative shadow-[0_0_48px_rgba(67,56,202,0.45)] items-center" type="submit">
<span className="z-0 inline-flex items-center justify-between gap-4 leading-[1] text-lg font-semibold text-white tracking-tight rounded-full pt-3.5 pr-6 pb-3.5 pl-6 relative" style={{background: 'linear-gradient(90deg, #2A2DFE 0%, #4338CA 50%, #7C3AED 100%)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0,0,0,0.25)'}}>
<span className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0) 60%)', mixBlend: 'screen'}}></span>
<span className="z-10 relative">Subscribe</span>
<span className="z-10 inline-flex items-center justify-center bg-white/10 w-8 h-8 ring-white/10 ring-1 rounded-xl relative">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</span>
</button>
</form>
<p className="xl:mt-4 text-xs text-white/60 font-geist mt-2" id="nl-msg">
                    Join 10,000+ developers. No spam.
                  </p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 w-full lg:w-auto">
<div className="">
<p className="text-sm font-medium text-white/80 tracking-tight font-geist">
                      Product
                    </p>
<ul className="mt-3 space-y-2 text-sm text-white/60 font-geist">
<li>
<a className="hover:text-[#7377F6] transition-colors" href="#">
                          AI Assistant
                        </a>
</li>
<li className="">
<a className="hover:text-[#7377F6] transition-colors" href="#">
                          Automation
                        </a>
</li>
<li className="">
<a className="hover:text-[#7377F6] transition-colors" href="#">
                          Analytics
                        </a>
</li>
</ul>
</div>
<div className="">
<p className="text-sm font-medium text-white/80 tracking-tight font-geist">
                      Company
                    </p>
<ul className="mt-3 space-y-2 text-sm text-white/60 font-geist">
<li className="">
<a className="hover:text-[#7377F6] transition-colors" href="#">
                          About
                        </a>
</li>
<li className="">
<a className="hover:text-[#7377F6] transition-colors" href="#">
                          Careers
                        </a>
</li>
<li>
<a className="hover:text-[#7377F6] transition-colors" href="#">
                          Blog
                        </a>
</li>
</ul>
</div>
<div className="">
<p className="text-sm font-medium text-white/80 tracking-tight font-geist">
                      Support
                    </p>
<ul className="mt-3 space-y-2 text-sm text-white/60 font-geist">
<li>
<a className="hover:text-[#7377F6] transition-colors" href="#">
                          Documentation
                        </a>
</li>
<li className="">
<a className="hover:text-[#7377F6] transition-colors" href="#">
                          Help Center
                        </a>
</li>
<li className="">
<a className="hover:text-[#7377F6] transition-colors" href="#">
                          Contact
                        </a>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/60 font-geist">
                  © 2025 Neon-lab. All rights reserved.
                </p>
<div className="flex items-center gap-2">
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#7377F6]/10 hover:ring-[#7377F6]/30 transition-colors" href="#">
<svg className="lucide lucide-twitter h-4 w-4 text-white/80 hover:text-[#7377F6]" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#7377F6]/10 hover:ring-[#7377F6]/30 transition-colors" href="#">
<svg className="lucide lucide-github h-4 w-4 text-white/80 hover:text-[#7377F6]" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#7377F6]/10 hover:ring-[#7377F6]/30 transition-colors" href="#">
<svg className="lucide lucide-linkedin h-4 w-4 text-white/80 hover:text-[#7377F6]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</div>
</section>
</div>
</main>




    </>
  );
}

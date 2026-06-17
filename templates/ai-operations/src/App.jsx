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



      !(function() {
        if (!window.UnicornStudio) {
          window.UnicornStudio = { isInitialized: false };
          var i = document.createElement("script");
          i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
          i.onload = function() {
            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", function() {
                UnicornStudio.init();
                window.UnicornStudio.isInitialized = true;
              });
            } else {
              UnicornStudio.init();
              window.UnicornStudio.isInitialized = true;
            }
          };
          (document.head || document.body).appendChild(i);
        } else if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
          UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      })();
    


        (function initDashboardCharts() {
            function renderThroughputChart() {
                const canvas = document.getElementById('sysThroughputChart');
                if (!canvas) return;
                const ctx = canvas.getContext('2d');

                // Create Gradients
                let gradIngress = ctx.createLinearGradient(0, 0, 0, 300);
                gradIngress.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
                gradIngress.addColorStop(1, 'rgba(16, 185, 129, 0)');

                let gradEgress = ctx.createLinearGradient(0, 0, 0, 300);
                gradEgress.addColorStop(0, 'rgba(34, 211, 238, 0.2)');
                gradEgress.addColorStop(1, 'rgba(34, 211, 238, 0)');

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
                        datasets: [
                            {
                                label: 'Ingress (TB/s)',
                                data: [42, 48, 40, 55, 75, 88, 102, 95, 110, 85, 65, 50],
                                borderColor: '#10B981',
                                backgroundColor: gradIngress,
                                borderWidth: 2,
                                fill: true,
                                tension: 0.4,
                                pointRadius: 0,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: '#10B981',
                                pointHoverBorderColor: '#fff'
                            },
                            {
                                label: 'Egress (TB/s)',
                                data: [35, 40, 30, 45, 60, 75, 85, 80, 95, 70, 55, 40],
                                borderColor: '#22D3EE',
                                backgroundColor: gradEgress,
                                borderWidth: 2,
                                fill: true,
                                tension: 0.4,
                                pointRadius: 0,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: '#22D3EE',
                                pointHoverBorderColor: '#fff'
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                                titleColor: 'rgba(255, 255, 255, 0.9)',
                                bodyColor: 'rgba(156, 163, 175, 0.9)',
                                borderColor: 'rgba(255, 255, 255, 0.1)',
                                borderWidth: 1,
                                padding: 10,
                                cornerRadius: 8
                            }
                        },
                        scales: {
                            x: {
                                grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
                                ticks: { color: 'rgba(156, 163, 175, 0.6)', font: { size: 10, family: 'monospace' } }
                            },
                            y: {
                                grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
                                ticks: {
                                    color: 'rgba(156, 163, 175, 0.6)',
                                    font: { size: 10, family: 'monospace' },
                                    stepSize: 25
                                },
                                beginAtZero: true
                            }
                        }
                    }
                });
            }

            if (typeof Chart === 'undefined') {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
                script.onload = renderThroughputChart;
                document.head.appendChild(script);
            } else {
                renderThroughputChart();
            }
        })();
      


        (function initDashboardCharts() {
            function renderThroughputChart() {
                const canvas = document.getElementById('sysThroughputChart');
                if (!canvas) return;
                const ctx = canvas.getContext('2d');

                // Create Gradients
                let gradIngress = ctx.createLinearGradient(0, 0, 0, 300);
                gradIngress.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
                gradIngress.addColorStop(1, 'rgba(16, 185, 129, 0)');

                let gradEgress = ctx.createLinearGradient(0, 0, 0, 300);
                gradEgress.addColorStop(0, 'rgba(34, 211, 238, 0.2)');
                gradEgress.addColorStop(1, 'rgba(34, 211, 238, 0)');

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
                        datasets: [
                            {
                                label: 'Ingress (TB/s)',
                                data: [42, 48, 40, 55, 75, 88, 102, 95, 110, 85, 65, 50],
                                borderColor: '#10B981',
                                backgroundColor: gradIngress,
                                borderWidth: 2,
                                fill: true,
                                tension: 0.4,
                                pointRadius: 0,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: '#10B981',
                                pointHoverBorderColor: '#fff'
                            },
                            {
                                label: 'Egress (TB/s)',
                                data: [35, 40, 30, 45, 60, 75, 85, 80, 95, 70, 55, 40],
                                borderColor: '#22D3EE',
                                backgroundColor: gradEgress,
                                borderWidth: 2,
                                fill: true,
                                tension: 0.4,
                                pointRadius: 0,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: '#22D3EE',
                                pointHoverBorderColor: '#fff'
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                                titleColor: 'rgba(255, 255, 255, 0.9)',
                                bodyColor: 'rgba(156, 163, 175, 0.9)',
                                borderColor: 'rgba(255, 255, 255, 0.1)',
                                borderWidth: 1,
                                padding: 10,
                                cornerRadius: 8
                            }
                        },
                        scales: {
                            x: {
                                grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
                                ticks: { color: 'rgba(156, 163, 175, 0.6)', font: { size: 10, family: 'monospace' } }
                            },
                            y: {
                                grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
                                ticks: {
                                    color: 'rgba(156, 163, 175, 0.6)',
                                    font: { size: 10, family: 'monospace' },
                                    stepSize: 25
                                },
                                beginAtZero: true
                            }
                        }
                    }
                });
            }

            if (typeof Chart === 'undefined') {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
                script.onload = renderThroughputChart;
                document.head.appendChild(script);
            } else {
                renderThroughputChart();
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
      
<div className="absolute top-0 left-0 w-full h-[100vh] sm:h-[120vh] z-0 pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'}}>
<div className="absolute w-full h-full left-0 top-0 z-0" data-us-project="mrwNzKDmDWpepWU4ly6w"></div>
</div>



<nav className="fixed top-0 left-0 right-0 z-50 bg-[#06070A]/70 backdrop-blur-lg border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="text-base font-medium tracking-tight">
            OEX
            <span className="text-white/40">SYS</span>
</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-400 hover:text-white transition-colors relative group" href="#">
            Product
            <span className="absolute -bottom-5 left-0 w-full h-px bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors relative group" href="#">
            Solutions
            <span className="absolute -bottom-5 left-0 w-full h-px bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors relative group" href="#">
            Integrations
            <span className="absolute -bottom-5 left-0 w-full h-px bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors relative group" href="#">
            Pricing
            <span className="absolute -bottom-5 left-0 w-full h-px bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors relative group" href="#">
            Docs
            <span className="absolute -bottom-5 left-0 w-full h-px bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-gray-300 hover:text-white px-4 py-2 rounded-md transition-colors hover:bg-white/5 border border-transparent hover:border-white/10 hidden sm:block" href="#">
            Book Demo
          </a>
<a className="text-sm text-white bg-emerald-500/90 hover:bg-emerald-400 px-4 py-2 rounded-md transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] border-t border-white/20" href="#">
            Start Free Trial
          </a>
</div>
</div>
</nav>

<main className="z-10 flex flex-col text-center max-w-5xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative items-center [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs text-emerald-400 tracking-widest uppercase font-medium">
          Platform V3.0 Live
        </span>
</div>

<h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white/90 leading-tight max-w-4xl drop-shadow-sm">
        Control Every
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          AI Operation
        </span>
<br className="hidden sm:block"/>
        From One Command Center
      </h1>

<p className="mt-6 text-lg text-gray-400 max-w-2xl leading-relaxed font-light">
        Supervise automated agents, monitor infrastructure health, detect
        anomalies in real time, and orchestrate security responses from a
        unified, high-performance interface.
      </p>

<div className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center">
<a className="w-full sm:w-auto text-sm font-semibold text-white px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-b from-[#14d4b1] to-[#00a386] border border-[#008a71] shadow-[0_6px_16px_-4px_rgba(0,163,134,0.5),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-3px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(0,163,134,0.6),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-3px_0_rgba(0,0,0,0.15)] hover:brightness-110 active:translate-y-1 active:shadow-[0_2px_4px_-2px_rgba(0,163,134,0.5),inset_0_3px_6px_rgba(0,0,0,0.25)]" href="#">
          Start Free Trial
          <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-sm font-medium text-gray-300 bg-gradient-to-b from-[#1e293b] to-[#0f172a] hover:from-[#2a384f] hover:to-[#141f36] px-6 py-2.5 rounded-xl transition-all duration-300 border border-slate-700 shadow-[0_6px_16px_-4px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-3px_0_rgba(0,0,0,0.2)] flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-6px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-3px_0_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-[0_2px_4px_-2px_rgba(0,0,0,0.4),inset_0_3px_6px_rgba(0,0,0,0.4)]" href="#">
<iconify-icon className="text-base text-gray-400" icon="solar:play-circle-linear"></iconify-icon>
          Watch Demo
        </a>
</div>

<div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-400 font-light">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500/70 text-base" icon="solar:check-circle-linear"></iconify-icon>
          Real-time system visibility
        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500/70 text-base" icon="solar:check-circle-linear"></iconify-icon>
          AI-powered anomaly detection
        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500/70 text-base" icon="solar:check-circle-linear"></iconify-icon>
          Enterprise security workflows
        </div>
</div>
</main>

<section className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">

<div className="rounded-xl border border-white/10 bg-[#0F172A]/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl relative ring-1 ring-white/5">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#06070A]/60">

<div className="flex items-center gap-2 w-48">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/10"></div>
</div>

<div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 w-72 transition-colors hover:border-white/20">
<iconify-icon className="text-gray-500 text-sm" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-xs text-gray-500 font-light tracking-wide">
              Enter command or search...
            </span>
<span className="ml-auto text-xs text-gray-600 border border-white/10 rounded px-1.5 bg-black/20 font-mono scale-90 origin-right">
              ⌘K
            </span>
</div>

<div className="flex items-center gap-4 w-48 justify-end">
<div className="flex items-center gap-2">
<span className="text-xs text-gray-500 font-medium scale-90 origin-right">
                SYS_OPT
              </span>
<div className="w-8 h-4 bg-emerald-500/20 rounded-full border border-emerald-500/30 relative flex items-center p-0.5 cursor-pointer">
<div className="w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)] translate-x-3.5 transition-transform"></div>
</div>
</div>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span className="text-xs text-gray-400 tracking-wide scale-90 origin-left">
                System Nominal
              </span>
</div>
</div>
</div>

<div className="flex h-[640px] bg-[#06070A]/30">

<div className="w-14 border-r border-white/5 bg-[#0F172A]/40 flex flex-col items-center py-4 gap-6 relative z-10">
<div className="relative group cursor-pointer w-full flex justify-center">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-emerald-500 rounded-r shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<iconify-icon className="text-emerald-400 text-xl drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]" icon="solar:widget-linear"></iconify-icon>
</div>
<div className="cursor-pointer w-full flex justify-center opacity-40 hover:opacity-100 transition-opacity">
<iconify-icon className="text-gray-300 text-xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="cursor-pointer w-full flex justify-center opacity-40 hover:opacity-100 transition-opacity">
<iconify-icon className="text-gray-300 text-xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="cursor-pointer w-full flex justify-center opacity-40 hover:opacity-100 transition-opacity">
<iconify-icon className="text-gray-300 text-xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<div className="cursor-pointer w-full flex justify-center opacity-40 hover:opacity-100 transition-opacity">
<iconify-icon className="text-gray-300 text-xl" icon="solar:server-minimalistic-linear"></iconify-icon>
</div>
<div className="mt-auto cursor-pointer w-full flex justify-center opacity-40 hover:opacity-100 transition-opacity mb-2">
<iconify-icon className="text-gray-300 text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 p-5 grid grid-cols-12 gap-5 overflow-hidden">


<div className="col-span-12 lg:col-span-4 bg-[#111827]/80 border border-white/5 rounded-xl p-5 flex flex-col relative overflow-hidden group">
<div className="flex items-center justify-between mb-4 relative z-10">
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium scale-90 origin-left">
                  Global Throughput
                </span>
<iconify-icon className="text-gray-600" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="text-3xl font-medium text-white/90 tracking-tight">
                  124.8
                  <span className="text-lg text-gray-500 font-light">TB/s</span>
</div>
<div className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-medium">
<iconify-icon className="" icon="solar:arrow-right-up-linear"></iconify-icon>
                  +14.2% vs last hour
                </div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 opacity-60">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10B981" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#10B981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="" d="M0,40 L0,25 C10,25 20,35 30,20 C40,5 50,30 60,15 C70,0 80,15 90,10 L100,20 L100,40 Z" fill="url(#chartGrad)"></path>
<path className="" d="M0,25 C10,25 20,35 30,20 C40,5 50,30 60,15 C70,0 80,15 90,10 L100,20" fill="none" stroke="#10B981" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="col-span-12 lg:col-span-8 bg-[#111827]/80 border border-white/5 rounded-xl p-5 flex flex-col">
<div className="flex items-center justify-between mb-6">
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium flex items-center gap-2 scale-90 origin-left">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                  AI Agent Activity
                </span>
<div className="flex items-center bg-[#06070A] rounded p-0.5 border border-white/5">
<button className="text-xs px-2 py-1 rounded bg-[#1e293b] text-white shadow-sm font-medium scale-90 origin-center">
                    1H
                  </button>
<button className="text-xs px-2 py-1 rounded text-gray-500 hover:text-gray-300 transition-colors scale-90 origin-center">
                    24H
                  </button>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-1 mt-auto relative border-b border-white/5 pb-1">

<div className="absolute left-0 bottom-0 w-full h-full flex flex-col justify-between pointer-events-none opacity-20">
<div className="w-full h-px bg-white/20 border-dashed border-t"></div>
<div className="w-full h-px bg-white/20 border-dashed border-t"></div>
<div className="w-full h-px bg-white/20 border-dashed border-t"></div>
</div>

<div className="w-full flex items-end justify-between gap-[2px] z-10 px-2 h-32">
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '30%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '45%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '25%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '60%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '40%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '55%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '75%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '50%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '35%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '80%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '65%'}}></div>

<div className="w-full bg-emerald-500 rounded-t-sm relative shadow-[0_0_10px_rgba(16,185,129,0.3)]" style={{height: '100%'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white/10 text-xs scale-75 text-white px-1.5 py-0.5 rounded border border-white/10 backdrop-blur-sm z-20">
                      PEAK
                    </div>
</div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '85%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '45%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '30%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '50%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '20%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '40%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '60%'}}></div>
<div className="w-full bg-white/5 rounded-t-sm" style={{height: '35%'}}></div>
</div>
</div>
<div className="flex justify-between text-xs text-gray-600 mt-2 px-2 scale-90 origin-left w-full">
<span>10:00 AM</span>
<span className="ml-16">10:30 AM</span>
<span className="ml-auto">11:00 AM</span>
</div>
</div>


<div className="col-span-12 lg:col-span-7 bg-[#111827]/80 border border-white/5 rounded-xl p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium scale-90 origin-left">
                  Real-Time Activity Log
                </span>
<div className="flex items-center gap-1 scale-90 origin-right">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-emerald-500 font-medium">Live</span>
</div>
</div>
<div className="flex flex-col gap-2 mt-2">

<div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5 group">
<div className="w-16 flex-shrink-0 scale-90 origin-left">
<span className="text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded font-medium tracking-wide">
                      SUCCESS
                    </span>
</div>
<div className="flex-1 text-xs text-gray-300 font-light truncate">
                    Agent-X7 completed data sync across 4 nodes
                  </div>
<div className="text-xs text-gray-600 font-mono w-16 text-right scale-90 origin-right">
                    11:42:04
                  </div>
<div className="w-12 flex justify-end">
<button className="text-xs text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity scale-90 origin-right">
                      View
                    </button>
</div>
</div>

<div className="flex items-center gap-3 p-2.5 rounded-lg bg-orange-500/[0.03] border border-orange-500/10 group">
<div className="w-16 flex-shrink-0 scale-90 origin-left">
<span className="text-xs text-orange-400 bg-orange-400/10 border border-orange-400/20 px-1.5 py-0.5 rounded font-medium tracking-wide">
                      WARNING
                    </span>
</div>
<div className="flex-1 text-xs text-orange-200/80 font-light truncate">
                    Unrecognized payload format from IP 192.168.1.105
                  </div>
<div className="text-xs text-gray-600 font-mono w-16 text-right scale-90 origin-right">
                    11:41:59
                  </div>
<div className="w-12 flex justify-end">
<button className="text-xs text-white bg-orange-500/20 hover:bg-orange-500/40 border border-orange-500/30 px-2 py-0.5 rounded transition-colors scale-90 origin-right">
                      BLOCK
                    </button>
</div>
</div>

<div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5 group">
<div className="w-16 flex-shrink-0 scale-90 origin-left">
<span className="text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-1.5 py-0.5 rounded font-medium tracking-wide">
                      INFO
                    </span>
</div>
<div className="flex-1 text-xs text-gray-300 font-light truncate">
                    Automated workflow "Nightly Backup" initiated
                  </div>
<div className="text-xs text-gray-600 font-mono w-16 text-right scale-90 origin-right">
                    11:40:12
                  </div>
<div className="w-12 flex justify-end">
<button className="text-xs text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity scale-90 origin-right">
                      View
                    </button>
</div>
</div>

<div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5 group">
<div className="w-16 flex-shrink-0 scale-90 origin-left">
<span className="text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded font-medium tracking-wide">
                      SUCCESS
                    </span>
</div>
<div className="flex-1 text-xs text-gray-300 font-light truncate">
                    Model parameters updated via API hook
                  </div>
<div className="text-xs text-gray-600 font-mono w-16 text-right scale-90 origin-right">
                    11:38:44
                  </div>
<div className="w-12 flex justify-end">
<button className="text-xs text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity scale-90 origin-right">
                      View
                    </button>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 flex flex-col gap-5">

<div className="bg-[#111827]/80 border border-white/5 rounded-xl p-5 flex-1 relative overflow-hidden flex flex-col items-center justify-center">
<span className="absolute top-5 left-5 text-xs text-gray-500 uppercase tracking-widest font-medium scale-90 origin-top-left">
                  Network Radar
                </span>

<div className="relative w-40 h-40 mt-4">

<div className="absolute inset-0 border border-white/5 rounded-full"></div>
<div className="absolute inset-4 border border-white/5 rounded-full"></div>
<div className="absolute inset-10 border border-white/5 rounded-full"></div>
<div className="absolute inset-[60px] border border-white/10 rounded-full bg-emerald-500/5"></div>

<div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 -translate-x-1/2"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-white/5 -translate-y-1/2"></div>

<div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>

<div className="absolute top-8 left-10 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(34,211,238,0.8)] opacity-70"></div>
<div className="absolute bottom-12 right-8 w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_5px_rgba(251,146,60,0.8)] opacity-80 animate-pulse"></div>
<div className="absolute top-14 right-12 w-1 h-1 bg-emerald-400 rounded-full opacity-40"></div>

<div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-emerald-500/0 animate-[spin_4s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 70%, rgba(16,185,129,0.3) 100%)'}}></div>
</div>
</div>

<div className="bg-[#111827]/80 border border-white/5 rounded-xl p-5 relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-red-500/5 blur-2xl rounded-full"></div>
<div className="flex items-center justify-between mb-2 relative z-10">
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium flex items-center gap-1.5 scale-90 origin-left">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    Active Threats
                  </span>
<iconify-icon className="text-red-400/70 text-sm" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="flex items-end gap-3 mt-1 relative z-10">
<span className="text-3xl font-medium text-white/90 tracking-tight leading-none">
                    03
                  </span>
<span className="text-xs text-red-400 mb-0.5 font-medium">
                    High Severity
                  </span>
</div>
<div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden relative z-10">
<div className="h-full bg-gradient-to-r from-red-600 to-red-400 w-[60%] rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
</div>
<div className="flex justify-between text-xs text-gray-600 mt-2 relative z-10 scale-90 origin-left w-full">
<span>System Risk Level</span>
<span className="text-red-400/80 ml-auto">Elevated</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/[0.05] overflow-hidden [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll z-10 bg-[#06070A] w-full border-t pt-24 pb-32 relative">

<div className="max-w-[1360px] mx-auto px-6 relative z-10">


<div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-end relative z-10 pb-20">
<div className="flex flex-col items-start text-left">
<div className="flex items-center gap-2 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span className="text-xs text-gray-400 tracking-[0.2em] font-medium uppercase">
                Capabilities
              </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-white/90 leading-tight">
              Operational Intelligence for Every AI System
            </h2>
</div>
<p className="text-base text-gray-400 font-light leading-relaxed text-left md:pb-2">
            Provide deep operational visibility and automated intelligence
            across AI agents, infrastructure environments, and security layers.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 z-10 relative gap-x-6 gap-y-6">

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] flex flex-col overflow-hidden relative group transition-all hover:bg-[#111827] hover:border-white/[0.12]">

<div className="h-48 bg-[#06070A]/80 border-b border-white/5 p-5 flex flex-col gap-3 relative overflow-hidden">
<div className="flex items-center justify-between mb-1">
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium scale-90 origin-left">
                  Agent Fleet
                </span>
<span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-medium scale-90 origin-right">
                  24 Active
                </span>
</div>
<div className="flex items-center justify-between bg-white/[0.02] border border-white/5 p-2 rounded-md">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
<span className="text-xs text-gray-300">Agent-Core-01</span>
</div>
<span className="text-xs text-gray-500 font-mono scale-90 origin-right">
                  99.9%
                </span>
</div>
<div className="flex items-center justify-between bg-white/[0.02] border border-white/5 p-2 rounded-md">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.5)]"></span>
<span className="text-xs text-gray-300">Agent-NLP-04</span>
</div>
<span className="text-xs text-amber-500/70 font-mono scale-90 origin-right">
                  SYNC DELAY
                </span>
</div>
<div className="flex items-center justify-between bg-white/[0.02] border border-white/5 p-2 rounded-md opacity-50">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></span>
<span className="text-xs text-gray-300">Agent-Data-12</span>
</div>
<span className="text-xs text-red-400/70 font-mono scale-90 origin-right">
                  OFFLINE
                </span>
</div>
</div>

<div className="p-6 flex flex-col gap-2 flex-1 bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80 rounded-b-[14px]">
<div className="flex items-center justify-between mb-1">
<h3 className="text-lg font-medium tracking-tight text-white/90 group-hover:text-emerald-400 transition-colors duration-300">
                  AI Agent Supervision
                </h3>
<iconify-icon className="text-gray-500 group-hover:text-emerald-400/70 transition-colors duration-300" icon="solar:cpu-linear"></iconify-icon>
</div>
<p className="text-sm text-gray-400 font-light leading-relaxed">
                Monitor the behavior, task execution, and performance of every
                autonomous AI agent operating inside your infrastructure
                environment.
              </p>
</div>
</div>

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] flex flex-col overflow-hidden relative group transition-all hover:bg-[#111827] hover:border-white/[0.12]">

<div className="flex flex-col overflow-hidden bg-[#06070A]/80 h-48 border-white/5 border-b pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-center justify-between mb-4 z-10">
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium scale-90 origin-left">
                  Signal variance
                </span>
<div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded scale-90 origin-right">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_5px_rgba(239,68,68,0.8)]"></span>
<span className="text-xs text-red-400 font-medium tracking-wide">
                    ALERT DETECTED
                  </span>
</div>
</div>

<div className="flex-1 w-full relative z-10 flex items-end">
<svg className="overflow-visible w-[374px] h-[149px]" data-icon-replaced="true" preserveaspectratio="none" strokeWidth="1" style={{width: '374px', height: '149px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 100 40">
<path className="opacity-50" d="M0,30 L20,32 L40,28 L50,31 L60,10 L70,29 L80,31 L100,30" fill="none" stroke="#22D3EE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"></path>
<path className="drop-shadow-[0_0_4px_rgba(239,68,68,0.8)]" d="M50,31 L60,10 L70,29" fill="none" stroke="#EF4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
<polygon className="" fill="#EF4444" fillOpacity="0.05" points="50,40 50,0 70,0 70,40"></polygon>
<line opacity="0.5" stroke="#EF4444" stroke-dasharray="2,2" strokeWidth="0.5" x1="50" x2="50" y1="0" y2="40"></line>
<line opacity="0.5" stroke="#EF4444" stroke-dasharray="2,2" strokeWidth="0.5" x1="70" x2="70" y1="0" y2="40"></line>
</svg>
</div>
</div>

<div className="p-6 flex flex-col gap-2 flex-1 bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80 rounded-b-[14px]">
<div className="flex items-center justify-between mb-1">
<h3 className="text-lg font-medium tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-cyan-400/60 transition-all duration-300">
                  Real-Time Anomaly Detection
                </h3>
<iconify-icon className="text-gray-500 group-hover:text-cyan-400/90 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" icon="solar:chart-square-linear"></iconify-icon>
</div>
<p className="text-sm text-gray-400/90 font-light leading-relaxed">
                Identify abnormal patterns in infrastructure performance,
                network activity, and AI decision outputs using machine
                learning-based detection.
              </p>
</div>
</div>

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] flex flex-col overflow-hidden relative group transition-all hover:bg-[#111827] hover:border-white/[0.12]">

<div className="h-48 bg-[#06070A]/80 border-b border-white/5 p-5 flex flex-col relative justify-center">
<span className="absolute top-5 left-5 text-xs text-gray-500 uppercase tracking-widest font-medium scale-90 origin-top-left">
                Execution Path
              </span>
<div className="flex flex-col gap-4 mt-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0 relative z-10">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="h-px bg-white/10 flex-1 relative">
<div className="absolute inset-0 bg-emerald-500/50 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
</div>
<div className="w-6 h-6 rounded border border-white/10 bg-[#111827] flex items-center justify-center flex-shrink-0 relative z-10">
<iconify-icon className="text-gray-400 text-xs" icon="solar:filter-linear"></iconify-icon>
</div>
<div className="h-px bg-white/10 flex-1 relative">
<div className="absolute inset-0 bg-emerald-500/50 w-1/2"></div>
</div>
<div className="w-6 h-6 rounded border border-white/10 bg-[#111827] flex items-center justify-center flex-shrink-0 relative z-10">
<iconify-icon className="text-gray-400 text-xs" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between text-xs text-gray-500 font-mono uppercase scale-75 origin-left w-[133%] px-1">
<span>Trigger</span>
<span className="">Condition</span>
<span>Action</span>
</div>
<div className="mt-2 bg-white/[0.02] border border-white/5 rounded p-2 text-xs text-gray-400 font-mono scale-90 origin-left w-[111%]">
<span className="text-emerald-400">SUCCESS:</span>
                  Incident isolated automatically.
                </div>
</div>
</div>

<div className="p-6 flex flex-col gap-2 flex-1 bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80 rounded-b-[14px]">
<div className="flex items-center justify-between mb-1">
<h3 className="text-lg font-medium tracking-tight text-white/90 group-hover:text-emerald-400 transition-colors">
                  Automated Workflows
                </h3>
<iconify-icon className="text-gray-500 group-hover:text-emerald-400/70 transition-colors" icon="solar:route-linear"></iconify-icon>
</div>
<p className="text-sm text-gray-400 font-light leading-relaxed">
                Trigger automated responses when system events occur, allowing
                teams to contain incidents and maintain system stability
                instantly.
              </p>
</div>
</div>

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] flex flex-col overflow-hidden relative group transition-all hover:bg-[#111827] hover:border-white/[0.12]">

<div className="h-48 bg-[#06070A]/80 border-b border-white/5 p-5 flex flex-col relative gap-4 justify-between">
<div className="flex justify-between items-start">
<div className="flex flex-col gap-1">
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium scale-90 origin-left">
                    Core Load
                  </span>
<span className="text-2xl text-white/90 font-medium tracking-tight">
                    84.2
                    <span className="text-xs text-gray-500 ml-1 font-light">
                      PERCENT
                    </span>
</span>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<span className="text-xs text-gray-500 font-mono w-12 scale-90 origin-left">
                    NODE-A
                  </span>
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-[75%] rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-gray-500 font-mono w-12 scale-90 origin-left">
                    NODE-B
                  </span>
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-[45%] rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-gray-500 font-mono w-12 scale-90 origin-left">
                    NODE-C
                  </span>
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 w-[92%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>
</div>

<div className="p-6 flex flex-col gap-2 flex-1 bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80 rounded-b-[14px]">
<div className="flex items-center justify-between mb-1">
<h3 className="text-lg font-medium tracking-tight text-white/90 group-hover:text-emerald-400 transition-colors">
                  Infrastructure Telemetry
                </h3>
<iconify-icon className="text-gray-500 group-hover:text-emerald-400/70 transition-colors" icon="solar:server-minimalistic-linear"></iconify-icon>
</div>
<p className="text-sm text-gray-400 font-light leading-relaxed">
                Visualize infrastructure health metrics across compute nodes,
                network layers, and storage systems in real time.
              </p>
</div>
</div>

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] flex flex-col overflow-hidden relative group transition-all hover:bg-[#111827] hover:border-white/[0.12]">

<div className="h-48 bg-[#06070A]/80 border-b border-white/5 p-5 flex flex-col relative">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium scale-90 origin-left">
                  Threat Matrix
                </span>
<span className="text-xs text-amber-500 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded font-medium scale-90 origin-right">
                  ELEVATED
                </span>
</div>
<div className="h-14 w-full bg-white/[0.02] border border-white/5 rounded flex items-center justify-center relative overflow-hidden mb-3">
<div className="absolute w-[200%] h-px bg-white/5 top-1/2 -translate-y-1/2"></div>
<div className="absolute h-[200%] w-px bg-white/5 left-1/2 -translate-x-1/2"></div>
<div className="absolute w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] top-3 left-8 animate-pulse"></div>
<div className="absolute w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_5px_rgba(245,158,11,0.5)] bottom-2 right-12"></div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between text-xs scale-90 origin-left w-[111%]">
<span className="text-red-400 font-mono">
                    AUTH_BYPASS_ATTEMPT
                  </span>
<span className="text-gray-600">IP:10.4.2.1</span>
</div>
<div className="h-px w-full bg-white/5"></div>
<div className="flex items-center justify-between text-xs scale-90 origin-left w-[111%]">
<span className="text-amber-400 font-mono">UNUSUAL_PAYLOAD</span>
<span className="text-gray-600">IP:192.168.1.5</span>
</div>
</div>
</div>

<div className="p-6 flex flex-col gap-2 flex-1 bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80 rounded-b-[14px]">
<div className="flex items-center justify-between mb-1">
<h3 className="text-lg font-medium tracking-tight text-white/90 group-hover:text-red-400 transition-colors">
                  Security Threat Monitoring
                </h3>
<iconify-icon className="text-gray-500 group-hover:text-red-400/70 transition-colors" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<p className="text-sm text-gray-400 font-light leading-relaxed">
                Detect suspicious behavior across AI workflows and
                infrastructure environments with real-time threat intelligence.
              </p>
</div>
</div>

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] flex flex-col overflow-hidden relative group transition-all hover:bg-[#111827] hover:border-white/[0.12]">

<div className="h-48 bg-[#06070A]/80 border-b border-white/5 p-5 flex flex-col relative font-mono text-xs">
<div className="flex items-center gap-2 text-gray-500 mb-4 uppercase tracking-widest font-sans font-medium scale-90 origin-left">
<iconify-icon icon="solar:terminal-outline"></iconify-icon>
                Terminal
              </div>
<div className="flex flex-col gap-2 text-gray-400 flex-1 scale-90 origin-top-left w-[111%]">
<div className="flex gap-2">
<span className="text-emerald-500">❯</span>
<span className="">sys_deploy --target=cluster-a</span>
</div>
<div className="text-gray-600 pl-4">
                  [OK] Deployment initiated...
                </div>
<div className="text-gray-600 pl-4">
                  [OK] Artifacts synced (1.2s)
                </div>
<div className="flex gap-2 mt-1">
<span className="text-emerald-500">❯</span>
<span className="w-1.5 h-3 bg-white/50 animate-pulse mt-0.5"></span>
</div>
</div>
</div>

<div className="p-6 flex flex-col gap-2 flex-1 bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80 rounded-b-[14px]">
<div className="flex items-center justify-between mb-1">
<h3 className="text-lg font-medium tracking-tight text-white/90 group-hover:text-emerald-400 transition-colors">
                  System Command Automation
                </h3>
<iconify-icon className="text-gray-500 group-hover:text-emerald-400/70 transition-colors" icon="solar:code-square-linear"></iconify-icon>
</div>
<p className="text-sm text-gray-400 font-light leading-relaxed">
                Execute system commands, manage AI deployments, and configure
                operational rules from a centralized command interface.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="border-white/[0.05] overflow-hidden [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-[#06070A] w-full z-10 border-t pt-24 pb-32 relative">

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="z-10 max-w-[1360px] mr-auto ml-auto pr-6 pl-6 relative">


<div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] md:gap-16 z-10 pb-16 relative gap-x-8 gap-y-8 items-end">
<div className="flex flex-col items-start text-left">
<div className="flex items-center gap-2 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
<span className="text-xs text-gray-400 tracking-[0.2em] font-medium uppercase">
                System Metrics
              </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight text-white/90 leading-tight">
              Operational Intelligence at Global Scale
            </h2>
</div>
<p className="text-base text-gray-400 font-light leading-relaxed text-left md:pb-2">
            Continuously process infrastructure signals, AI agent activity, and
            security telemetry across distributed systems to respond instantly.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10 mb-8 relative gap-x-6 gap-y-6">

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] p-6 flex flex-col relative overflow-hidden group hover:bg-[#111827] hover:border-white/[0.12] transition-all bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80">
<div className="flex items-center justify-between mb-4">
<span className="text-4xl font-normal tracking-tight text-white/90">
                12,480
              </span>
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
</svg>
</div>
</div>
<h3 className="text-sm font-normal text-gray-300">
              AI Agents Monitored
            </h3>
<p className="text-xs text-gray-500 font-light mt-1">
              Active agents across distributed systems
            </p>

<div className="flex items-end gap-1 h-8 mt-5 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="flex-1 bg-emerald-500/20 rounded-t-sm h-[30%] group-hover:bg-emerald-500/40 transition-colors"></div>
<div className="flex-1 bg-emerald-500/20 rounded-t-sm h-[50%] group-hover:bg-emerald-500/40 transition-colors"></div>
<div className="flex-1 bg-emerald-500/20 rounded-t-sm h-[80%] group-hover:bg-emerald-500/60 transition-colors"></div>
<div className="flex-1 bg-emerald-500/40 rounded-t-sm h-[100%] shadow-[0_0_8px_rgba(16,185,129,0.5)] bg-emerald-400 transition-colors"></div>
<div className="flex-1 bg-emerald-500/20 rounded-t-sm h-[60%] group-hover:bg-emerald-500/40 transition-colors"></div>
<div className="flex-1 bg-emerald-500/20 rounded-t-sm h-[40%] group-hover:bg-emerald-500/40 transition-colors"></div>
<div className="flex-1 bg-emerald-500/20 rounded-t-sm h-[70%] group-hover:bg-emerald-500/40 transition-colors"></div>
<div className="flex-1 bg-emerald-500/20 rounded-t-sm h-[40%] group-hover:bg-emerald-500/40 transition-colors"></div>
</div>
</div>

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] p-6 flex flex-col relative overflow-hidden group hover:bg-[#111827] hover:border-white/[0.12] transition-all bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80">
<div className="flex items-center justify-between mb-4">
<span className="text-4xl font-normal tracking-tight text-white/90">
                84.2
                <span className="text-2xl text-gray-500 font-light">M</span>
</span>
<div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
<svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
</div>
<h3 className="text-sm font-normal text-gray-300">
              Events Processed Daily
            </h3>
<p className="text-xs text-gray-500 font-light mt-1">
              System events analyzed in real time
            </p>

<div className="w-full h-8 mt-5 relative opacity-70 group-hover:opacity-100 transition-opacity">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 30">
<path className="drop-shadow-[0_0_4px_rgba(34,211,238,0.6)]" d="M0,25 C15,25 20,10 35,15 C50,20 55,5 70,10 C85,15 95,20 100,5" fill="none" stroke="#22D3EE" strokeLinecap="round" strokeWidth="2"></path>

<circle cx="35" cy="15" fill="#22D3EE" r="2"></circle>
<circle cx="70" cy="10" fill="#22D3EE" r="2"></circle>
<circle className="shadow-[0_0_8px_rgba(34,211,238,0.9)]" cx="100" cy="5" fill="#22D3EE" r="2"></circle>
</svg>
</div>
</div>

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] p-6 flex flex-col relative overflow-hidden group hover:bg-[#111827] hover:border-white/[0.12] transition-all bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80">
<div className="flex items-center justify-between mb-4">
<span className="text-4xl font-normal tracking-tight text-white/90">
                99.999
                <span className="text-2xl text-gray-500 font-light">%</span>
</span>

<div className="w-8 h-8 relative flex-shrink-0">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">

<circle cx="18" cy="18" fill="none" r="16" stroke="rgba(255,255,255,0.05)" strokeWidth="3"></circle>

<circle className="drop-shadow-[0_0_4px_rgba(16,185,129,0.5)]" cx="18" cy="18" fill="none" r="16" stroke="#10B981" stroke-dasharray="100" stroke-dashoffset="1" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
</div>
</div>
<h3 className="text-sm font-normal text-gray-300">
              Infrastructure Uptime
            </h3>
<p className="text-xs text-gray-500 font-light mt-1">
              Platform availability across regions
            </p>
<div className="flex items-center gap-2 mt-5 text-xs font-mono text-emerald-400">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
              ALL SYSTEMS NOMINAL
            </div>
</div>

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] p-6 flex flex-col relative overflow-hidden group hover:bg-[#111827] hover:border-white/[0.12] transition-all bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80">
<div className="flex items-center justify-between mb-4">
<span className="text-4xl font-normal tracking-tight text-white/90">
                24
                <span className="text-2xl text-gray-500 font-light">ms</span>
</span>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
</div>
<h3 className="text-sm font-normal text-gray-300">
              Average Response Time
            </h3>
<p className="text-xs text-gray-500 font-light mt-1">
              Automated system response latency
            </p>

<div className="w-full mt-6 relative">
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
<div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 w-[15%] rounded-full shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-gray-500 font-mono">
<span>0ms</span>
<span>100ms</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] p-6 flex flex-col relative overflow-hidden bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-base font-normal text-white/90 tracking-tight">
                  Global System Throughput
                </h3>
<p className="text-xs text-gray-500 font-light mt-0.5">
                  Network ingress and egress across all clusters
                </p>
</div>
<div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2 py-1 rounded text-xs font-mono text-gray-400">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
                LIVE
              </div>
</div>

<div className="relative w-full h-64 mt-auto">
<canvas className="" height="512" id="sysThroughputChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '594px'}} width="1188"></canvas>
</div>
</div>

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] p-6 flex flex-col relative overflow-hidden bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80">
<div className="flex justify-between items-center mb-6 z-10">
<div className="">
<h3 className="text-base font-normal text-white/90 tracking-tight">
                  Infrastructure Health Map
                </h3>
<p className="text-xs text-gray-500 font-light mt-0.5">
                  Live topology of active computing nodes
                </p>
</div>
<div className="flex items-center gap-2 text-xs text-gray-400">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Online
                <span className="w-2 h-2 rounded-full bg-orange-500 ml-2"></span>
                Load
              </div>
</div>

<div className="relative w-full h-64 mt-auto border border-white/5 rounded-lg overflow-hidden bg-[#06070A]/50">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">

<line className="animate-[pulse_3s_infinite]" stroke="rgba(16,185,129,0.3)" stroke-dasharray="4 4" strokeWidth="1.5" x1="50%" x2="20%" y1="50%" y2="25%"></line>

<line stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" x1="50%" x2="80%" y1="50%" y2="30%"></line>

<line stroke="rgba(251,146,60,0.3)" strokeWidth="1.5" x1="50%" x2="25%" y1="50%" y2="75%"></line>

<line stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" x1="50%" x2="75%" y1="50%" y2="80%"></line>

<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="20%" x2="80%" y1="25%" y2="30%"></line>
<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="25%" x2="75%" y1="75%" y2="80%"></line>
</svg>


<div className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10" style={{left: '50%', top: '50%'}}>
<div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-pulse"></div>
<div className="w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)] border-2 border-[#0F172A]"></div>
<span className="absolute top-full mt-1 text-[10px] font-mono text-gray-400 whitespace-nowrap bg-[#06070A]/80 px-1 rounded">
                  SYS-CORE
                </span>
</div>

<div className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10" style={{left: '20%', top: '25%'}}>
<div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
<span className="absolute top-full mt-1 text-[9px] font-mono text-gray-500 whitespace-nowrap bg-[#06070A]/80 px-1 rounded">
                  us-east-1
                </span>
</div>

<div className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10" style={{left: '80%', top: '30%'}}>
<div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
<span className="absolute top-full mt-1 text-[9px] font-mono text-gray-500 whitespace-nowrap bg-[#06070A]/80 px-1 rounded">
                  eu-central-1
                </span>
</div>

<div className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10" style={{left: '25%', top: '75%'}}>
<div className="absolute inset-0 bg-orange-500/20 rounded-full animate-pulse"></div>
<div className="w-2.5 h-2.5 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(251,146,60,0.8)]"></div>
<span className="absolute top-full mt-1 text-[9px] font-mono text-orange-400/80 whitespace-nowrap bg-[#06070A]/80 px-1 rounded">
                  ap-south-2
                </span>
</div>

<div className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10" style={{left: '75%', top: '80%'}}>
<div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
<span className="absolute top-full mt-1 text-[9px] font-mono text-gray-500 whitespace-nowrap bg-[#06070A]/80 px-1 rounded">
                  sa-east-1
                </span>
</div>
</div>
</div>
</div>
</div>


</section>
<section className="border-white/[0.05] overflow-hidden [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-[#06070A] w-full z-10 border-t pt-24 pb-32 relative">

<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#06070A] to-transparent z-0 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-[1360px] mx-auto px-6 relative z-10">


<div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 z-10 pb-16 relative gap-x-8 gap-y-8 items-end">
<div className="flex flex-col items-start text-left">
<div className="flex items-center gap-2 mb-6 bg-white/[0.02] border border-white/[0.05] px-3 py-1.5 rounded-full backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
<span className="text-[11px] text-gray-400 tracking-[0.2em] font-medium uppercase">
                Product Interface
              </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight text-white/90 leading-tight">
              Full Visibility Across Every AI Operation
            </h2>
</div>
<p className="text-base text-gray-400 font-light leading-relaxed text-left md:pb-2">
            Observe AI agents, infrastructure signals, and automated system
            workflows from a unified operational dashboard.
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 mb-8 relative gap-x-8 gap-y-8">

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] p-6 flex flex-col gap-6 relative overflow-hidden group hover:border-white/[0.12] transition-colors bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80">

<div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/15 transition-colors"></div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white/90 font-light mt-1 max-w-md">
                Track the activity and operational status of autonomous AI
                agents executing tasks across distributed systems.
                <p></p>
</h3>
</div>

<div className="flex-1 bg-[#06070A]/80 border border-white/5 rounded-xl overflow-hidden flex flex-col md:flex-row relative shadow-[0_4px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5">

<div className="w-full md:w-[40%] border-b md:border-b-0 md:border-r border-white/5 flex flex-col bg-white/[0.01]">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#0F172A]/40">
<span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                    Active Agents
                  </span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono">
                    142
                  </span>
</div>
<div className="flex-1 overflow-hidden p-3 flex flex-col gap-1.5">

<div className="p-2.5 rounded-lg border border-white/5 bg-white/[0.03] flex items-center justify-between cursor-pointer group/item shadow-sm">
<div className="flex items-center gap-3">
<div className="relative">
<div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-pulse"></div>
<div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)] relative z-10"></div>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-gray-200 font-medium group-hover/item:text-emerald-400 transition-colors">
                          Agent-DataSync
                        </span>
<span className="text-[10px] text-gray-500 font-mono">
                          node-us-east-1
                        </span>
</div>
</div>
<svg className="text-emerald-400/70" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>

<div className="p-2.5 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] flex items-center justify-between cursor-pointer transition-colors group/item">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-gray-400 font-medium group-hover/item:text-amber-400 transition-colors">
                          Agent-NLP-Model
                        </span>
<span className="text-[10px] text-gray-600 font-mono">
                          node-eu-west-2
                        </span>
</div>
</div>
<svg className="text-gray-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>

<div className="p-2.5 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] flex items-center justify-between cursor-pointer transition-colors group/item">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-gray-400 font-medium group-hover/item:text-emerald-400 transition-colors">
                          Agent-SecurityScn
                        </span>
<span className="text-[10px] text-gray-600 font-mono">
                          node-ap-south-1
                        </span>
</div>
</div>
<svg className="text-gray-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
</div>
</div>

<div className="w-full md:w-[60%] flex flex-col relative z-10">

<div className="flex p-4 border-b border-white/5 gap-4 bg-[#0F172A]/20">
<div className="flex-1 flex flex-col gap-1.5">
<span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                      Task Execution Rate
                    </span>
<div className="flex items-end gap-1.5">
<span className="text-2xl text-white/90 font-medium tracking-tight leading-none">
                        8.4k
                      </span>
<span className="text-[10px] text-emerald-400 font-mono mb-0.5">
                        /min
                      </span>
</div>
</div>
<div className="w-px bg-white/5"></div>
<div className="flex-1 flex flex-col gap-1.5">
<span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                      System Load
                    </span>
<div className="flex items-end gap-2">
<span className="text-2xl text-white/90 font-medium tracking-tight leading-none">
                        42
                        <span className="text-sm text-gray-500 font-light">%</span>
</span>
<span className="text-[9px] text-amber-500 bg-amber-500/10 border border-amber-500/20 px-1 py-0.5 rounded font-medium mb-1">
                        ELEVATED
                      </span>
</div>
</div>
</div>

<div className="p-4 flex-1 flex flex-col justify-end relative overflow-hidden min-h-[140px]">

<div className="absolute inset-x-0 bottom-4 top-4 flex flex-col justify-between opacity-10 pointer-events-none">
<div className="border-b border-dashed border-white"></div>
<div className="border-b border-dashed border-white"></div>
<div className="border-b border-dashed border-white"></div>
</div>

<div className="absolute inset-0 top-6 bottom-4 px-4 pointer-events-none">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 60">
<defs>
<lineargradient id="agentGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10B981" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#10B981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,50 C10,48 20,20 30,25 C40,30 50,15 60,20 C70,25 80,45 90,40 C100,35 110,10 120,15 C130,20 140,55 150,50 C160,45 170,20 180,25 C190,30 195,15 200,10 L200,60 L0,60 Z" fill="url(#agentGradient)"></path>
<path d="M0,50 C10,48 20,20 30,25 C40,30 50,15 60,20 C70,25 80,45 90,40 C100,35 110,10 120,15 C130,20 140,55 150,50 C160,45 170,20 180,25 C190,30 195,15 200,10" fill="none" stroke="#10B981" strokeLinecap="round" strokeWidth="1.5"></path>

<circle className="shadow-[0_0_8px_rgba(16,185,129,0.8)]" cx="120" cy="15" fill="#10B981" r="2.5"></circle>
<circle className="shadow-[0_0_8px_rgba(16,185,129,0.8)]" cx="200" cy="10" fill="#10B981" r="2.5"></circle>

<g transform="translate(104, -8)">
<rect fill="#111827" height="14" rx="3" stroke="rgba(255,255,255,0.1)" width="32"></rect>
<text fill="#9ca3af" fontFamily="monospace" fontSize="6" text-anchor="middle" x="16" y="9">
                          PEAK
                        </text>
</g>
</svg>
</div>
</div>

<div className="h-10 border-t border-white/5 px-4 flex items-center justify-between bg-white/[0.01]">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
<span className="text-[11px] text-gray-400 truncate font-light">
                      Agent-DataSync completed block 0x4A
                    </span>
</div>
<span className="text-[10px] text-gray-600 font-mono">
                    Just now
                  </span>
</div>
</div>
</div>
</div>

<div className="bg-[#0F172A]/80 border border-white/[0.08] rounded-[14px] p-6 flex flex-col gap-6 relative overflow-hidden group hover:border-white/[0.12] transition-colors bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80">

<div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-cyan-500/15 transition-colors"></div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white/90 tracking-tight">
                Threat Detection Console
              </h3>
<p className="text-sm text-gray-400 font-light mt-1 max-w-md">
                Analyze security threats, suspicious traffic patterns, and
                anomaly signals detected across the network environment.
              </p>
</div>

<div className="flex-1 bg-[#06070A]/80 border border-white/5 rounded-xl overflow-hidden flex flex-col md:flex-row relative shadow-[0_4px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5">

<div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center relative p-8 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_0%,transparent_70%)]">

<span className="absolute top-4 left-4 text-[9px] text-gray-500 font-mono tracking-widest border border-white/5 bg-white/[0.02] px-1.5 py-0.5 rounded">
                  NET_SCAN::ACTIVE
                </span>

<div className="relative w-36 h-36">

<div className="absolute inset-0 border border-white/5 rounded-full"></div>
<div className="absolute inset-[18%] border border-white/5 rounded-full"></div>
<div className="absolute inset-[36%] border border-white/10 rounded-full"></div>
<div className="absolute inset-[54%] border border-cyan-500/20 rounded-full bg-cyan-500/5"></div>

<div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 -translate-x-1/2"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-white/5 -translate-y-1/2"></div>

<div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></div>

<div className="absolute top-[20%] right-[25%] w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_5px_rgba(251,146,60,0.8)]"></div>
<div className="absolute bottom-[28%] left-[18%] w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]">

<div className="absolute inset-0 rounded-full border border-red-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>
<div className="absolute top-[65%] right-[20%] w-1 h-1 bg-emerald-400 rounded-full opacity-60"></div>

<div className="absolute inset-0 rounded-full border-r border-cyan-400/50 animate-[spin_3s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 60%, rgba(34,211,238,0.15) 100%)', mixBlendMode: 'screen'}}></div>
</div>
</div>

<div className="w-full md:w-[55%] flex flex-col bg-[#0F172A]/20">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
<span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                    Event Log
                  </span>
<span className="text-[10px] text-red-400 font-mono bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded">
                    2 UNRESOLVED
                  </span>
</div>
<div className="flex-1 overflow-hidden p-3 flex flex-col gap-2 relative z-10">

<div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20 flex flex-col gap-2 relative shadow-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]"></div>
<span className="text-[11px] text-red-400 font-medium">
                          Unauthorized agent behavior
                        </span>
</div>
<span className="text-[9px] text-gray-500 font-mono">
                        1m ago
                      </span>
</div>
<span className="text-[11px] text-gray-400 font-light truncate">
                      Anomalous parameter modification attempt.
                    </span>
<div className="flex justify-end mt-1">
<button className="text-[9px] text-white bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 px-3 py-1 rounded transition-colors font-medium tracking-wide">
                        BLOCK
                      </button>
</div>
</div>

<div className="p-3 rounded-lg bg-orange-500/[0.03] border border-orange-500/10 flex flex-col gap-2 relative hover:border-orange-500/20 transition-colors">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
<span className="text-[11px] text-orange-400 font-medium">
                          Suspicious outbound request
                        </span>
</div>
<span className="text-[9px] text-gray-500 font-mono">
                        4m ago
                      </span>
</div>
<span className="text-[11px] text-gray-400 font-light truncate">
                      Unexpected connection to unverified IP.
                    </span>
<div className="flex justify-end mt-1">
<button className="text-[9px] text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 rounded transition-colors font-medium tracking-wide">
                        INVESTIGATE
                      </button>
</div>
</div>

<div className="p-3 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] flex flex-col gap-2 relative transition-colors opacity-70">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="text-[11px] text-amber-500/90 font-medium">
                          Firewall anomaly flagged
                        </span>
</div>
<span className="text-[9px] text-gray-500 font-mono">
                        12m ago
                      </span>
</div>
<span className="text-[11px] text-gray-500 font-light truncate">
                      Spike in dropped packets on port 443.
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="bg-[#111827]/80 border border-white/[0.08] rounded-[14px] p-5 relative overflow-hidden group hover:border-white/[0.12] transition-colors bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80">
<div className="flex items-center justify-between mb-5">
<span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                Automation Rules
              </span>
<svg className="text-gray-600 group-hover:text-gray-400 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M6 21V9a9 9 0 0 0 9 9"></path>
</svg>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
<svg className="text-cyan-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
<path d="M4 6h.01"></path>
<path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
<path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
<path d="M12 18h.01"></path>
<path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
<circle cx="12" cy="12" r="2"></circle>
<path d="m13.41 10.59 5.66-5.66"></path>
</svg>
</div>
<div className="h-px bg-white/10 flex-1 relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/50 w-full animate-pulse"></div>
</div>
<div className="w-7 h-7 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.82 0 5.04.86 7 2a1 1 0 0 1 1 1v7z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
</div>
<div className="flex justify-between text-[10px] text-gray-500 font-mono uppercase">
<span>On Anomaly</span>
<span>Auto-Isolate</span>
</div>
<div className="pt-2 border-t border-white/5 text-[11px] text-gray-400 font-light leading-relaxed">
                Automated policy active. 24 incidents resolved without manual
                intervention this week.
              </div>
</div>
</div>

<div className="bg-[#111827]/80 border border-white/[0.08] rounded-[14px] p-5 relative overflow-hidden group hover:border-white/[0.12] transition-colors bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80">
<div className="flex items-center justify-between mb-5">
<span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                System Event Log
              </span>
<svg className="text-gray-600 group-hover:text-gray-400 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M12 7v5l4 2"></path>
</svg>
</div>
<div className="relative pl-3.5 flex flex-col gap-4 mt-1">
<div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-white/10"></div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-emerald-500 border-2 border-[#111827] shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
<span className="text-[11px] text-gray-300 font-medium">
                  Database optimization complete
                </span>
<span className="text-[9px] text-gray-500 font-mono">10:42 AM</span>
</div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 border-2 border-[#111827]"></div>
<span className="text-[11px] text-gray-300 font-medium">
                  Agent fleet scaled to 150 nodes
                </span>
<span className="text-[9px] text-gray-500 font-mono">09:15 AM</span>
</div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-gray-500 border-2 border-[#111827]"></div>
<span className="text-[11px] text-gray-500 font-medium">
                  Scheduled maintenance routine
                </span>
<span className="text-[9px] text-gray-600 font-mono">02:00 AM</span>
</div>
</div>
</div>

<div className="bg-[#111827]/80 border border-white/[0.08] rounded-[14px] p-5 relative overflow-hidden group hover:border-white/[0.12] transition-colors bg-gradient-to-b from-transparent via-[#06070A]/20 to-[#06070A]/80">
<div className="flex items-center justify-between mb-5">
<span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                Infra Health
              </span>
<svg className="text-gray-600 group-hover:text-gray-400 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<div className="flex items-center gap-5 mt-2">
<div className="w-14 h-14 relative flex-shrink-0">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="16" stroke="rgba(255,255,255,0.05)" strokeWidth="3"></circle>
<circle className="drop-shadow-[0_0_4px_rgba(16,185,129,0.5)]" cx="18" cy="18" fill="none" r="16" stroke="#10B981" stroke-dasharray="100" stroke-dashoffset="15" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-base font-medium text-white tracking-tight leading-none mt-0.5">
                    85
                  </span>
<span className="text-[7px] text-emerald-400 font-medium tracking-wide mt-0.5">
                    SCORE
                  </span>
</div>
</div>
<div className="flex-1 flex flex-col gap-3">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-[9px] font-mono text-gray-400">
<span>CPU Allocation</span>
<span className="text-emerald-400">Stable</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 w-[40%] rounded-full shadow-[0_0_5px_rgba(16,185,129,0.3)]"></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-[9px] font-mono text-gray-400">
<span>Memory Usage</span>
<span className="text-amber-400">82%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[82%] rounded-full shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-white/[0.05] overflow-hidden [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-[#06070A] w-full z-10 border-t pt-24 pb-32 relative">

<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#06070A] to-transparent z-0 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-900/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="z-10 max-w-[1360px] mr-auto ml-auto pr-6 pl-6 relative">
<header className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-end relative z-10 pb-12 lg:pb-16">
<div className="flex flex-col items-start text-left">
<div className="flex items-center gap-2 mb-6 bg-white/[0.02] border border-white/[0.05] px-3 py-1.5 rounded-full backdrop-blur-sm">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
<span className="text-[11px] text-gray-400 tracking-[0.2em] font-normal uppercase">
                Integrations
              </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight text-white/90 leading-tight">
              Connect Your Entire AI Infrastructure
            </h2>
</div>
<p className="text-base text-gray-400 font-light leading-relaxed text-left md:pb-2">
            Seamlessly integrate with cloud platforms, development tools, and
            monitoring systems for a unified command center.
          </p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-6 lg:gap-8 xl:gap-12 z-10 lg:mt-8 w-full mt-4 pb-12 relative gap-x-6 gap-y-6 items-center">
<ul className="flex flex-col gap-4 relative w-full z-20" role="list">
<li className="bg-[#0F172A]/80 border border-white/[0.08] rounded-xl p-4 flex flex-col relative group hover:bg-[#111827] hover:border-white/[0.12] transition-all duration-300 w-full backdrop-blur-sm shadow-sm">
<div className="hidden lg:block absolute top-1/2 left-full w-24 lg:w-32 xl:w-48 h-32 xl:h-48 -translate-y-8 pointer-events-none z-[-1]">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 0 10 C 40 10, 60 90, 100 90" fill="none" id="path-aws" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<g>
<circle fill="rgba(52,211,153,0.4)" r="4"></circle>
<circle fill="#34d399" r="2"></circle>
<animatemotion begin="0s" dur="3s" repeatcount="indefinite">
<mpath href="#path-aws"></mpath>
</animatemotion>
</g>
</svg>
</div>
<div className="flex items-start justify-between mb-2.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#06070A] border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-emerald-400 transition-colors shrink-0">
<svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
</svg>
</div>
<div>
<h3 className="text-sm font-medium text-white/90 tracking-tight leading-tight">
                      AWS
                    </h3>
<div className="flex items-center gap-1.5 mt-0.5">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
<span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase">
                        Connected
                      </span>
</div>
</div>
</div>
</div>
<p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">
                Monitor AI workloads and infrastructure signals across AWS
                compute and storage environments.
              </p>
<div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
<span className="truncate pr-2">us-east-1, eu-west-1</span>
<span className="text-emerald-400/70 shrink-0">SYNCED</span>
</div>
</li>
<li className="bg-[#0F172A]/80 border border-white/[0.08] rounded-xl p-4 flex flex-col relative group hover:bg-[#111827] hover:border-white/[0.12] transition-all duration-300 w-full backdrop-blur-sm shadow-sm">
<div className="hidden lg:block absolute top-1/2 left-full w-24 lg:w-32 xl:w-48 h-16 xl:h-24 -translate-y-4 pointer-events-none z-[-1]">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 0 20 C 40 20, 60 80, 100 80" fill="none" id="path-gcp" stroke="rgba(34,211,238,0.2)" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<g>
<circle fill="rgba(34,211,238,0.4)" r="4"></circle>
<circle fill="#22d3ee" r="2"></circle>
<animatemotion begin="0.5s" dur="2.5s" repeatcount="indefinite">
<mpath href="#path-gcp"></mpath>
</animatemotion>
</g>
</svg>
</div>
<div className="flex items-start justify-between mb-2.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#06070A] border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-cyan-400 transition-colors shrink-0">
<svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<div>
<h3 className="text-sm font-medium text-white/90 tracking-tight leading-tight">
                      Google Cloud
                    </h3>
<div className="flex items-center gap-1.5 mt-0.5">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
<span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase">
                        Connected
                      </span>
</div>
</div>
</div>
</div>
<p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">
                Observe AI pipeline performance and distributed system activity
                across Google Cloud infrastructure.
              </p>
<div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
<span className="truncate pr-2">multi-region: active</span>
<span className="text-emerald-400/70 shrink-0">SYNCED</span>
</div>
</li>
<li className="bg-[#0F172A]/80 border border-white/[0.08] rounded-xl p-4 flex flex-col relative group hover:bg-[#111827] hover:border-white/[0.12] transition-all duration-300 w-full backdrop-blur-sm shadow-sm">
<div className="hidden lg:block absolute top-1/2 left-full w-24 lg:w-32 xl:w-48 h-16 xl:h-24 -translate-y-[calc(100%-1rem)] pointer-events-none z-[-1]">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 0 80 C 40 80, 60 20, 100 20" fill="none" id="path-github" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<g>
<circle fill="rgba(52,211,153,0.4)" r="4"></circle>
<circle fill="#34d399" r="2"></circle>
<animatemotion begin="1s" dur="3.5s" repeatcount="indefinite">
<mpath href="#path-github"></mpath>
</animatemotion>
</g>
</svg>
</div>
<div className="flex items-start justify-between mb-2.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#06070A] border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-emerald-400 transition-colors shrink-0">
<svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
<line x1="6" x2="6" y1="9" y2="21"></line>
</svg>
</div>
<div>
<h3 className="text-sm font-medium text-white/90 tracking-tight leading-tight">
                      GitHub
                    </h3>
<div className="flex items-center gap-1.5 mt-0.5">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
<span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase">
                        Connected
                      </span>
</div>
</div>
</div>
</div>
<p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">
                Connect development workflows and trigger automated deployments
                for AI services.
              </p>
<div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
<span className="truncate pr-2">last deploy: 2m ago</span>
<span className="text-emerald-400/70 shrink-0">ACTIVE</span>
</div>
</li>
<li className="bg-[#0F172A]/80 border border-white/[0.08] rounded-xl p-4 flex flex-col relative group hover:bg-[#111827] hover:border-white/[0.12] transition-all duration-300 w-full backdrop-blur-sm shadow-sm">
<div className="hidden lg:block absolute top-1/2 left-full w-24 lg:w-32 xl:w-48 h-32 xl:h-48 -translate-y-[calc(100%-2rem)] pointer-events-none z-[-1]">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 0 90 C 40 90, 60 10, 100 10" fill="none" id="path-slack" stroke="rgba(34,211,238,0.2)" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<g>
<circle fill="rgba(34,211,238,0.4)" r="4"></circle>
<circle fill="#22d3ee" r="2"></circle>
<animatemotion begin="0.2s" dur="2.8s" repeatcount="indefinite">
<mpath href="#path-slack"></mpath>
</animatemotion>
</g>
</svg>
</div>
<div className="flex items-start justify-between mb-2.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#06070A] border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-cyan-400 transition-colors shrink-0">
<svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="9" y2="9"></line>
<line x1="4" x2="20" y1="15" y2="15"></line>
<line x1="10" x2="8" y1="3" y2="21"></line>
<line x1="16" x2="14" y1="3" y2="21"></line>
</svg>
</div>
<div>
<h3 className="text-sm font-medium text-white/90 tracking-tight leading-tight">
                      Slack
                    </h3>
<div className="flex items-center gap-1.5 mt-0.5">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
<span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase">
                        Connected
                      </span>
</div>
</div>
</div>
</div>
<p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">
                Receive real-time system alerts and operational notifications
                directly in team channels.
              </p>
<div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
<span className="truncate pr-2">#ops-alerts</span>
<span className="text-emerald-400/70 shrink-0">ACTIVE</span>
</div>
</li>
</ul>
<div className="z-10 flex flex-col min-h-[400px] lg:py-0 group cursor-default w-full pt-16 pb-16 relative items-center justify-center">
<div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/[0.05] pointer-events-none"></div>
<div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-white/[0.03] pointer-events-none"></div>
<div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none flex items-center justify-center">
<div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/20" style={{animation: 'spin 20s linear infinite'}}></div>
<div className="absolute w-72 h-72 rounded-full border border-dotted border-emerald-500/30 opacity-50" style={{animation: 'spin 15s linear infinite reverse'}}></div>
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(from 0deg, transparent 40%, rgba(16,185,129,0.05) 80%, rgba(16,185,129,0.25) 100%)', mixBlendMode: 'screen', animation: 'spin 8s linear infinite'}}></div>
</div>
<div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none"></div>
<div className="relative flex items-center justify-center w-36 h-36 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_0_50px_rgba(16,185,129,0.1)] transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_0_80px_rgba(16,185,129,0.2)] z-20" style={{animation: 'spin 30s linear infinite'}}>
<div className="w-14 h-14 rounded-full bg-[#030407] border border-emerald-500/40 shadow-[inset_0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center relative overflow-hidden" style={{animation: 'spin 12s linear infinite reverse'}}>
<div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
<div aria-hidden="true" className="w-3.5 h-3.5 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,1),0_0_30px_rgba(52,211,153,0.6)] relative z-10"></div>
</div>
</div>
<div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-28 flex flex-col items-center gap-1.5 z-30 pointer-events-none">
<span className="text-[10px] font-mono text-emerald-400/90 uppercase tracking-[0.25em] font-medium drop-shadow-[0_0_8px_rgba(52,211,153,0.4)] bg-[#06070A]/80 px-2 py-1 rounded border border-emerald-500/20 backdrop-blur-md">
                Command Hub
              </span>
<div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
</div>
</div>
<ul className="flex flex-col gap-4 relative w-full z-20" role="list">
<li className="bg-[#0F172A]/80 border border-white/[0.08] rounded-xl p-4 flex flex-col relative group hover:bg-[#111827] hover:border-white/[0.12] transition-all duration-300 w-full backdrop-blur-sm shadow-sm">
<div className="hidden lg:block absolute top-1/2 right-full w-24 lg:w-32 xl:w-48 h-32 xl:h-48 -translate-y-8 pointer-events-none z-[-1]">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 100 10 C 60 10, 40 90, 0 90" fill="none" id="path-azure" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<g>
<circle fill="rgba(52,211,153,0.4)" r="4"></circle>
<circle fill="#34d399" r="2"></circle>
<animatemotion begin="0.3s" dur="3.2s" repeatcount="indefinite">
<mpath href="#path-azure"></mpath>
</animatemotion>
</g>
</svg>
</div>
<div className="flex items-start justify-between mb-2.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#06070A] border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-emerald-400 transition-colors shrink-0">
<svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</div>
<div className="">
<h3 className="text-sm font-medium text-white/90 tracking-tight leading-tight">
                      Microsoft Azure
                    </h3>
<div className="flex items-center gap-1.5 mt-0.5">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
<span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase">
                        Connected
                      </span>
</div>
</div>
</div>
</div>
<p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">
                Track AI services and infrastructure health across Azure cloud
                deployments.
              </p>
<div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
<span className="truncate pr-2">vnet-cluster-01</span>
<span className="text-emerald-400/70 shrink-0">SYNCED</span>
</div>
</li>
<li className="bg-[#0F172A]/80 border border-white/[0.08] rounded-xl p-4 flex flex-col relative group hover:bg-[#111827] hover:border-white/[0.12] transition-all duration-300 w-full backdrop-blur-sm shadow-sm">
<div className="hidden lg:block absolute top-1/2 right-full w-24 lg:w-32 xl:w-48 h-16 xl:h-24 -translate-y-4 pointer-events-none z-[-1]">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 100 20 C 60 20, 40 80, 0 80" fill="none" id="path-k8s" stroke="rgba(34,211,238,0.2)" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<g>
<circle fill="rgba(34,211,238,0.4)" r="4"></circle>
<circle fill="#22d3ee" r="2"></circle>
<animatemotion begin="0.8s" dur="2.7s" repeatcount="indefinite">
<mpath href="#path-k8s"></mpath>
</animatemotion>
</g>
</svg>
</div>
<div className="flex items-start justify-between mb-2.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#06070A] border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-cyan-400 transition-colors shrink-0">
<svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
</div>
<div>
<h3 className="text-sm font-medium text-white/90 tracking-tight leading-tight">
                      Kubernetes
                    </h3>
<div className="flex items-center gap-1.5 mt-0.5">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
<span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase">
                        Connected
                      </span>
</div>
</div>
</div>
</div>
<p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">
                Monitor container clusters running AI agents and automated
                workflows across distributed environments.
              </p>
<div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
<span className="truncate pr-2">nodes: 142 healthy</span>
<span className="text-emerald-400/70 shrink-0">SYNCED</span>
</div>
</li>
<li className="bg-[#0F172A]/80 border border-white/[0.08] rounded-xl p-4 flex flex-col relative group hover:bg-[#111827] hover:border-white/[0.12] transition-all duration-300 w-full backdrop-blur-sm shadow-sm">
<div className="hidden lg:block absolute top-1/2 right-full w-24 lg:w-32 xl:w-48 h-16 xl:h-24 -translate-y-[calc(100%-1rem)] pointer-events-none z-[-1]">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 100 80 C 60 80, 40 20, 0 20" fill="none" id="path-datadog" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<g>
<circle fill="rgba(52,211,153,0.4)" r="4"></circle>
<circle fill="#34d399" r="2"></circle>
<animatemotion begin="1.2s" dur="3.1s" repeatcount="indefinite">
<mpath href="#path-datadog"></mpath>
</animatemotion>
</g>
</svg>
</div>
<div className="flex items-start justify-between mb-2.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#06070A] border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-emerald-400 transition-colors shrink-0">
<svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
<div className="">
<h3 className="text-sm font-medium text-white/90 tracking-tight leading-tight">
                      Datadog
                    </h3>
<div className="flex items-center gap-1.5 mt-0.5">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
<span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase">
                        Connected
                      </span>
</div>
</div>
</div>
</div>
<p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">
                Import telemetry data and correlate infrastructure signals with
                AI operational metrics.
              </p>
<div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
<span className="truncate pr-2">metrics: streaming</span>
<span className="text-emerald-400/70 shrink-0">SYNCED</span>
</div>
</li>
<li className="bg-[#0F172A]/80 border border-white/[0.08] rounded-xl p-4 flex flex-col relative group hover:bg-[#111827] hover:border-white/[0.12] transition-all duration-300 w-full backdrop-blur-sm shadow-sm">
<div className="hidden lg:block absolute top-1/2 right-full w-24 lg:w-32 xl:w-48 h-32 xl:h-48 -translate-y-[calc(100%-2rem)] pointer-events-none z-[-1]">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 100 90 C 60 90, 40 10, 0 10" fill="none" id="path-snowflake" stroke="rgba(34,211,238,0.2)" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<g>
<circle fill="rgba(34,211,238,0.4)" r="4"></circle>
<circle fill="#22d3ee" r="2"></circle>
<animatemotion begin="0s" dur="3.4s" repeatcount="indefinite">
<mpath href="#path-snowflake"></mpath>
</animatemotion>
</g>
</svg>
</div>
<div className="flex items-start justify-between mb-2.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#06070A] border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-cyan-400 transition-colors shrink-0">
<svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</div>
<div className="">
<h3 className="text-sm font-medium text-white/90 tracking-tight leading-tight">
                      Snowflake
                    </h3>
<div className="flex items-center gap-1.5 mt-0.5">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
<span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase">
                        Connected
                      </span>
</div>
</div>
</div>
</div>
<p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">
                Connect analytics data pipelines and monitor AI model training
                and inference datasets.
              </p>
<div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
<span className="truncate pr-2">pipeline: optimized</span>
<span className="text-emerald-400/70 shrink-0">ACTIVE</span>
</div>
</li>
</ul>
</div>
</div>
</section>
<section className="border-white/[0.05] overflow-hidden [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-[#06070A] w-full z-10 border-t pt-24 pb-0 relative">

<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#06070A] to-transparent z-0 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-900/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="z-10 max-w-[1360px] mr-auto ml-auto pr-6 pl-6 relative">


<section aria-labelledby="cta-heading" className="relative z-10 w-full max-w-5xl mx-auto my-16 p-10 md:py-24 md:px-20 flex flex-col items-center text-center bg-[#0A0F1C] border border-white/[0.04] rounded-[24px] shadow-2xl overflow-hidden">
<div aria-hidden="true" className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent pointer-events-none"></div>
<div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<h2 className="relative z-10 max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-[1.15]" id="cta-heading">
            Bring Your AI Operations Under One Command Center
          </h2>
<p className="relative z-10 max-w-2xl text-lg text-slate-400 font-normal leading-relaxed mb-10">
            Monitor AI agents, detect anomalies, and control automated workflows
            across distributed infrastructure from one unified operational
            platform.
          </p>
<div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] hover:-translate-y-0.5" href="#">
              Start Free Trial
            </a>
<a className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5" href="#">
              Book a Demo
            </a>
</div>
<div className="relative z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
<span className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-500/70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              No credit card required
            </span>
<span aria-hidden="true" className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></span>
<span className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-500/70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              Enterprise support
            </span>
<span aria-hidden="true" className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></span>
<span className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-500/70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              Deploy in minutes
            </span>
</div>
</section>

<div className="relative z-10 border-t border-white/[0.08] pt-16 pb-8">

<div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-20 max-w-5xl mx-auto">

<div className="flex flex-col gap-5">
<h4 className="text-white/90 font-medium text-sm tracking-wide mb-1">
                Product
              </h4>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Platform
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                AI Agents
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Automation
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Security
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Integrations
              </a>
</div>

<div className="flex flex-col gap-5">
<h4 className="text-white/90 font-medium text-sm tracking-wide mb-1">
                Company
              </h4>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                About
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Careers
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Blog
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Press
              </a>
</div>

<div className="flex flex-col gap-5">
<h4 className="text-white/90 font-medium text-sm tracking-wide mb-1">
                Resources
              </h4>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Documentation
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                API Reference
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                System Status
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Support
              </a>
</div>

<div className="flex flex-col gap-5">
<h4 className="text-white/90 font-medium text-sm tracking-wide mb-1">
                Legal
              </h4>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Privacy Policy
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Terms of Service
              </a>
<a className="text-sm text-gray-400 hover:text-emerald-400 transition-colors font-light" href="#">
                Security
              </a>
</div>
</div>

<div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/30 flex items-center justify-center">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M7 11v2h10v-2"></path>
</svg>
</div>
<span className="text-base font-medium tracking-tight text-white/90">
                OEX
                <span className="text-white/40">SYS</span>
</span>
</div>

<div className="text-[13px] text-gray-500 font-light">
              © 2025 AI Command Center. All rights reserved.
            </div>

<div className="flex items-center gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-github" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
</div>
</div>
</div>
</div>


</section>

    </>
  );
}

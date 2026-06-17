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



    // Initialize lucide icons
    lucide.createIcons();

    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Impact chart
    const ctx = document.getElementById('impactChart');
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Launch', 'Month 2', 'Month 4', 'Month 6', 'Month 9', 'Month 12'],
          datasets: [
            {
              label: 'Active youth users',
              data: [100, 180, 240, 260, 310, 340],
              borderColor: 'rgba(52, 211, 153, 1)',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              fill: true,
              tension: 0.35,
              pointRadius: 2.5,
              pointBackgroundColor: 'rgba(52, 211, 153, 1)',
              pointBorderColor: 'rgba(15, 23, 42, 1)',
              borderWidth: 1.5
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              borderColor: 'rgba(31, 41, 55, 1)',
              borderWidth: 1,
              titleColor: '#e5e7eb',
              bodyColor: '#d1d5db',
              padding: 8,
              displayColors: false
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: '#6b7280',
                font: {
                  size: 10
                }
              }
            },
            y: {
              grid: {
                color: 'rgba(55, 65, 81, 0.4)'
              },
              ticks: {
                color: '#6b7280',
                font: {
                  size: 10
                },
                callback: function (value) {
                  return value + '%';
                }
              },
              suggestedMin: 80,
              suggestedMax: 360
            }
          }
        }
      });
    }
  
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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-neutral-900/60 bg-neutral-950/70 backdrop-blur-xl sticky top-0 z-30">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">

<div className="flex items-center gap-2">
<div className="h-9 w-auto flex items-center">

<img alt="thinkitecture.agency logo" className="h-9 w-auto object-contain" src="https://i.ibb.co/QPgYfyV/thinkitecture-logo-green.png"/>
</div>
<span className="text-sm font-medium tracking-tight text-emerald-400/90 uppercase">thinkitecture.agency</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-xs font-normal text-neutral-300">
<a className="hover:text-emerald-400 transition-colors" href="#services">Studio</a>
<a className="hover:text-emerald-400 transition-colors" href="#work">Work</a>
<a className="hover:text-emerald-400 transition-colors" href="#approach">Approach</a>
<a className="hover:text-emerald-400 transition-colors" href="#impact">Impact</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 px-3.5 py-1.5 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition-colors">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span>Now taking Q1–Q2 2025 partners</span>
</button>
<a className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-neutral-950 px-4 py-1.5 text-xs font-medium hover:bg-emerald-300 transition-colors" href="#contact">
<span>Let's build</span>
<svg className="w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></svg>
</a>
</div>
</div>
</div>
</header>
<main className="flex-1">

<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-24">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
<div className="lg:col-span-6 space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-[11px] text-neutral-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Engineering bold African ideas into world-class experiences</span>
</div>
<div className="space-y-5">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-50">
                  Creative engineering for
                  <span className="inline bg-gradient-to-r from-emerald-300 via-emerald-400 to-lime-300 bg-clip-text text-transparent">
                    African futures
                  </span>
                  that feel inevitable.
                </h1>
<p className="text-sm sm:text-base font-normal text-neutral-300 max-w-xl">
                  thinkitecture.agency merges creativity, technology, and culture to build digital products, brands, and experiences that inspire progress, empower youth, and redefine how innovation feels on the continent.
                </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 text-neutral-950 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium hover:bg-emerald-300 transition-colors" href="#contact">
<span>Describe your next move</span>
<svg className="w-4 h-4" data-lucide="sparkles" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></svg>
</a>
<a className="inline-flex items-center gap-2 text-xs sm:text-sm font-normal text-neutral-300 hover:text-emerald-300 transition-colors" href="#work">
<svg className="w-4 h-4" data-lucide="play" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></svg>
<span>See how ideas become systems</span>
</a>
</div>
<div className="flex flex-wrap items-center gap-6 pt-2">
<div className="space-y-1">
<p className="text-[11px] uppercase tracking-[0.12em] text-neutral-500">Focus</p>
<div className="flex flex-wrap gap-2 text-[11px] text-neutral-200">
<span className="inline-flex rounded-full border border-neutral-800 px-2.5 py-1 bg-neutral-900/70">Product &amp; service design</span>
<span className="inline-flex rounded-full border border-neutral-800 px-2.5 py-1 bg-neutral-900/70">Brand &amp; storytelling</span>
<span className="inline-flex rounded-full border border-neutral-800 px-2.5 py-1 bg-neutral-900/70">Culture-led innovation</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative">
<div className="absolute -top-6 -right-2 sm:-top-10 sm:-right-6 h-40 w-40 sm:h-56 sm:w-56 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/70 via-neutral-950 to-neutral-950 overflow-hidden shadow-[0_0_80px_rgba(16,185,129,0.15)]">
<div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-800/80">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-neutral-700"></span>
<span className="h-2 w-2 rounded-full bg-neutral-700"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400/90"></span>
</div>
<div className="flex items-center gap-2 text-[11px] text-neutral-400">
<svg className="w-3.5 h-3.5" data-lucide="globe-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></svg>
<span>africa → world</span>
</div>
</div>
<div className="grid md:grid-cols-5 gap-0">

<div className="md:col-span-2 p-4 sm:p-6 border-r border-neutral-800/80">
<div className="space-y-4">
<div className="space-y-2">
<p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">Design sprint snapshot</p>
<p className="text-sm font-medium text-neutral-50 tracking-tight">
                            From sketch to tested prototype in <span className="text-emerald-300">10 days</span>.
                          </p>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-[11px] text-neutral-400">
<span>Impact readiness</span>
<span className="text-emerald-300 font-medium">82%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-neutral-900 overflow-hidden">
<div className="h-full w-[82%] rounded-full bg-gradient-to-r from-emerald-300 via-emerald-400 to-lime-300"></div>
</div>
</div>
<div className="space-y-2">
<p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">We engineer for</p>
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-900 px-2 py-1 text-[11px] text-neutral-200 border border-neutral-800">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                              Youth ecosystems
                            </span>
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-900 px-2 py-1 text-[11px] text-neutral-200 border border-neutral-800">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                              Cultural brands
                            </span>
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-900 px-2 py-1 text-[11px] text-neutral-200 border border-neutral-800">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                              Tech &amp; civic labs
                            </span>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 p-4 sm:p-6">
<div className="space-y-4">
<div className="relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900/60">
<div className="aspect-[16/10] w-full">
<img alt="Young African creatives collaborating in a modern studio" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
<div className="space-y-1">
<p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">Live concept lab</p>
<p className="text-xs font-medium text-neutral-50 tracking-tight">
                                Turning local insight into scalable product logic.
                              </p>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="Avatar 1" className="h-6 w-6 rounded-full border border-neutral-900 object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Avatar 2" className="h-6 w-6 rounded-full border border-neutral-900 object-cover" src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Avatar 3" className="h-6 w-6 rounded-full border border-neutral-900 object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<span className="text-[11px] text-neutral-300">+ distributed collaborators</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-[11px] text-neutral-300">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/70 px-3 py-2.5">
<p className="text-neutral-500 mb-1 tracking-[0.14em] uppercase">Sectors</p>
<p className="font-medium tracking-tight text-neutral-50">Civic, fintech, culture, education</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/70 px-3 py-2.5">
<p className="text-neutral-500 mb-1 tracking-[0.14em] uppercase">Timezones</p>
<p className="font-medium tracking-tight text-neutral-50">Africa, Europe, US</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/70 px-3 py-2.5">
<p className="text-neutral-500 mb-1 tracking-[0.14em] uppercase">Formats</p>
<p className="font-medium tracking-tight text-neutral-50">Sprints &amp; long-term builds</p>
</div>
</div>
</div>
</div>
</div>
</div>
<p className="mt-4 text-[11px] text-neutral-500 max-w-xs">
                  We architect experiences the way cities are planned: human-centered, culturally grounded, and engineered to scale.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80 bg-neutral-950" id="services">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
<div className="space-y-3 max-w-xl">
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-400">What we make</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
                Systems, brands, and products designed at the speed of culture.
              </h2>
<p className="text-sm text-neutral-300">
                From first prototype to scaled launch, we partner with founders, organisations, and institutions shaping how African youth live, learn, build, and play.
              </p>
</div>
<div className="flex gap-3 text-[11px] text-neutral-400">
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Strategy</span>
</div>
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Design</span>
</div>
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Engineering</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group rounded-2xl border border-neutral-900 bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-5 hover:border-emerald-500/60 hover:bg-neutral-900 transition-colors">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/10 text-emerald-400">
<svg className="w-4 h-4" data-lucide="layout-dashboard" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></svg>
</div>
<span className="text-[11px] text-neutral-500 uppercase tracking-[0.16em]">01</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-50 mb-2">
                Product &amp; Experience Design
              </h3>
<p className="text-xs text-neutral-300 mb-4">
                End-to-end digital and spatial experiences designed for emerging African contexts—mobile-first, data-light, culturally intuitive.
              </p>
<ul className="space-y-1.5 text-[11px] text-neutral-300">
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  UX research &amp; journey mapping
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  Interface &amp; interaction design
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  Service blueprints &amp; playbooks
                </li>
</ul>
</div>

<div className="group rounded-2xl border border-neutral-900 bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-5 hover:border-emerald-500/60 hover:bg-neutral-900 transition-colors">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/10 text-emerald-400">
<svg className="w-4 h-4" data-lucide="wand-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></svg>
</div>
<span className="text-[11px] text-neutral-500 uppercase tracking-[0.16em]">02</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-50 mb-2">
                Brand, Story &amp; Identity Systems
              </h3>
<p className="text-xs text-neutral-300 mb-4">
                Narrative and visual worlds that carry African ideas across borders—coherent, flexible, and rooted in the communities you serve.
              </p>
<ul className="space-y-1.5 text-[11px] text-neutral-300">
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  Naming, visual identity &amp; design language
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  Launch campaigns &amp; storytelling
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  Culture &amp; community playbooks
                </li>
</ul>
</div>

<div className="group rounded-2xl border border-neutral-900 bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-5 hover:border-emerald-500/60 hover:bg-neutral-900 transition-colors">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/10 text-emerald-400">
<svg className="w-4 h-4" data-lucide="cpu" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></svg>
</div>
<span className="text-[11px] text-neutral-500 uppercase tracking-[0.16em]">03</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-50 mb-2">
                Innovation Labs &amp; Venture Design
              </h3>
<p className="text-xs text-neutral-300 mb-4">
                Partner with us to explore new ventures, pilot youth-focused programs, or re-imagine how your organisation shows up in the future.
              </p>
<ul className="space-y-1.5 text-[11px] text-neutral-300">
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  Discovery sprints &amp; opportunity mapping
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  Pilot programs &amp; MVP builds
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                  Venture design &amp; ecosystem strategy
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80 bg-neutral-950" id="work">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
<div className="space-y-3">
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-400">Selected work</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
                From Port Harcourt to the world.
              </h2>
<p className="text-sm text-neutral-300 max-w-lg">
                We partner with teams across Africa and the diaspora to design experiences that feel local on day one and global by default.
              </p>
</div>
<div className="flex items-center gap-3 text-[11px] text-neutral-400">
<div className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5" data-lucide="shield-check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></svg>
<span>Confidential details on request</span>
</div>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-2">

<article className="group rounded-3xl border border-neutral-900 overflow-hidden bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-neutral-950 hover:border-emerald-500/60 transition-colors">
<div className="relative">
<div className="aspect-[16/9] w-full">
<img alt="Modern co-creation space" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="space-y-1">
<p className="text-[11px] uppercase tracking-[0.16em] text-neutral-300">Youth innovation hub</p>
<p className="text-xs text-neutral-200">Spatial and service design for a civic-tech hub in West Africa.</p>
</div>
<div className="flex items-center gap-2 text-[11px] text-neutral-300">
<span className="px-2 py-1 rounded-full bg-black/40 border border-white/10">Civic</span>
<span className="px-2 py-1 rounded-full bg-black/40 border border-white/10">Education</span>
</div>
</div>
</div>
<div className="p-5 sm:p-6 flex flex-col gap-4">
<div className="flex flex-wrap items-center justify-between gap-3">
<h3 className="text-base font-semibold tracking-tight text-neutral-50">
                    Designing an ecosystem where young builders own their infrastructure.
                  </h3>
<div className="flex items-center gap-2 text-[11px] text-neutral-400">
<svg className="w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></svg>
<span>Impact snapshot</span>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-[11px] text-neutral-300">
<div className="space-y-1">
<p className="text-neutral-500 uppercase tracking-[0.18em]">Timeframe</p>
<p className="font-medium tracking-tight text-neutral-100">14 weeks</p>
</div>
<div className="space-y-1">
<p className="text-neutral-500 uppercase tracking-[0.18em]">Cities</p>
<p className="font-medium tracking-tight text-neutral-100">3 pilot locations</p>
</div>
<div className="space-y-1">
<p className="text-neutral-500 uppercase tracking-[0.18em]">Youth reached</p>
<p className="font-medium tracking-tight text-emerald-300">+4,500 in year one</p>
</div>
</div>
</div>
</article>

<article className="group rounded-3xl border border-neutral-900 overflow-hidden bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-neutral-950 hover:border-emerald-500/60 transition-colors">
<div className="relative">
<div className="aspect-[16/9] w-full">
<img alt="Mobile-first African fintech experience" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="space-y-1">
<p className="text-[11px] uppercase tracking-[0.16em] text-neutral-300">Pan-African product launch</p>
<p className="text-xs text-neutral-200">Designing a financial experience that speaks every street language.</p>
</div>
<div className="flex items-center gap-2 text-[11px] text-neutral-300">
<span className="px-2 py-1 rounded-full bg-black/40 border border-white/10">Fintech</span>
<span className="px-2 py-1 rounded-full bg-black/40 border border-white/10">Product</span>
</div>
</div>
</div>
<div className="p-5 sm:p-6 flex flex-col gap-4">
<div className="flex flex-wrap items-center justify-between gap-3">
<h3 className="text-base font-semibold tracking-tight text-neutral-50">
                    Helping a new digital bank feel like that trusted friend who always picks the call.
                  </h3>
<div className="flex items-center gap-2 text-[11px] text-neutral-400">
<svg className="w-3.5 h-3.5" data-lucide="trend-up" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></svg>
<span>Growth story</span>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-[11px] text-neutral-300">
<div className="space-y-1">
<p className="text-neutral-500 uppercase tracking-[0.18em]">Markets</p>
<p className="font-medium tracking-tight text-neutral-100">4 African countries</p>
</div>
<div className="space-y-1">
<p className="text-neutral-500 uppercase tracking-[0.18em]">Activation</p>
<p className="font-medium tracking-tight text-neutral-100">Brand, product, launch</p>
</div>
<div className="space-y-1">
<p className="text-neutral-500 uppercase tracking-[0.18em]">Conversion</p>
<p className="font-medium tracking-tight text-emerald-300">+37% onboarding uplift</p>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80 bg-neutral-950" id="approach">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
<div className="lg:w-5/12 space-y-4">
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-400">How we work</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
                Culture-first thinking, engineering-grade execution.
              </h2>
<p className="text-sm text-neutral-300">
                We work like an R&amp;D lab and a studio at once: close to community signals, rigorous about implementation, always prototyping towards the future.
              </p>
<div className="space-y-3 text-xs text-neutral-300">
<div className="flex items-start gap-2">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="compass" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></svg>
<p>We ground every project in on-the-ground realities—language, infrastructure, access, and dreams.</p>
</div>
<div className="flex items-start gap-2">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="binary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></svg>
<p>We translate those insights into architectures, interfaces, and systems that can scale beyond a single city.</p>
</div>
</div>
</div>
<div className="lg:w-7/12 space-y-6">
<div className="grid sm:grid-cols-3 gap-3 text-[11px]">
<div className="rounded-2xl border border-neutral-900 bg-neutral-900/80 p-3">
<p className="text-neutral-500 uppercase tracking-[0.18em] mb-1">01 / Discover</p>
<p className="font-medium tracking-tight text-neutral-50 mb-1">Listen &amp; map</p>
<p className="text-neutral-300">Interviews, fieldwork, workshops, desk research.</p>
</div>
<div className="rounded-2xl border border-neutral-900 bg-neutral-900/80 p-3">
<p className="text-neutral-500 uppercase tracking-[0.18em] mb-1">02 / Design</p>
<p className="font-medium tracking-tight text-neutral-50 mb-1">Prototype &amp; iterate</p>
<p className="text-neutral-300">Flows, visuals, prototypes, real-world testing.</p>
</div>
<div className="rounded-2xl border border-neutral-900 bg-neutral-900/80 p-3">
<p className="text-neutral-500 uppercase tracking-[0.18em] mb-1">03 / Deploy</p>
<p className="font-medium tracking-tight text-neutral-50 mb-1">Launch &amp; evolve</p>
<p className="text-neutral-300">Implementation, playbooks, capability building.</p>
</div>
</div>
<div className="rounded-3xl border border-neutral-900 bg-gradient-to-r from-neutral-900/90 via-neutral-950 to-neutral-950 p-4 sm:p-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
<div className="space-y-2 max-w-md">
<p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">Impact pulse</p>
<p className="text-sm text-neutral-200">
                      We measure success in more than vanity metrics: adoption, trust, and cultural resonance matter too.
                    </p>
</div>
<div className="flex items-center gap-3 text-[11px] text-neutral-400">
<span className="inline-flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Youth-centered
                    </span>
<span className="inline-flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Africa-born
                    </span>
<span className="inline-flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      World-ready
                    </span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] text-neutral-300">
<div className="space-y-1">
<p className="text-neutral-500 uppercase tracking-[0.18em]">Projects</p>
<p className="text-lg font-semibold tracking-tight text-neutral-50">40+</p>
<p>across public &amp; private sectors</p>
</div>
<div className="space-y-1">
<p className="text-neutral-500 uppercase tracking-[0.18em]">Countries</p>
<p className="text-lg font-semibold tracking-tight text-neutral-50">8</p>
<p>where our work is live</p>
</div>
<div className="space-y-1">
<p className="text-neutral-500 uppercase tracking-[0.18em]">Youth reached</p>
<p className="text-lg font-semibold tracking-tight text-neutral-50">50k+</p>
<p>through programs &amp; products</p>
</div>
<div className="space-y-1">
<p className="text-neutral-500 uppercase tracking-[0.18em]">Partners</p>
<p className="text-lg font-semibold tracking-tight text-neutral-50">Studio &amp; lab</p>
<p>working side-by-side with you</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80 bg-neutral-950" id="impact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
<div className="space-y-4">
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-400">Signals</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
                Designing for long-term cultural value, not just launches.
              </h2>
<p className="text-sm text-neutral-300">
                We stay close to what happens after “go live”: who shows up, who stays, and how your product becomes part of everyday life.
              </p>
<ul className="space-y-2 text-xs text-neutral-300">
<li className="flex gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>We build dashboards and rituals that make impact a conversation, not just a report.</span>
</li>
<li className="flex gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Our partners use this visibility to unlock funding, partnerships, and new product lines.</span>
</li>
</ul>
</div>
<div className="rounded-3xl border border-neutral-900 bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-neutral-950 p-4 sm:p-6">
<div className="flex items-center justify-between mb-4">
<div className="space-y-1">
<p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">Engagement over time</p>
<p className="text-xs text-neutral-300">Example of post-launch youth engagement across one year.</p>
</div>
<div className="flex items-center gap-2 text-[11px] text-neutral-400">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-900 border border-neutral-800">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Active users
                  </span>
</div>
</div>

<div className="mt-2">
<div className="relative h-40 sm:h-52">
<canvas className="w-full h-full" id="impactChart"></canvas>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-neutral-300">
<div>
<p className="text-neutral-500 uppercase tracking-[0.18em] mb-1">Retention</p>
<p className="text-neutral-50 font-semibold tracking-tight">+61%</p>
<p>6-month active usage vs legacy platform.</p>
</div>
<div>
<p className="text-neutral-500 uppercase tracking-[0.18em] mb-1">NPS</p>
<p className="text-neutral-50 font-semibold tracking-tight">+32</p>
<p>Net promoter score uplift after redesign.</p>
</div>
<div>
<p className="text-neutral-500 uppercase tracking-[0.18em] mb-1">Access</p>
<p className="text-neutral-50 font-semibold tracking-tight">3×</p>
<p>More youth reached in low-bandwidth contexts.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80 bg-neutral-950">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="rounded-3xl border border-neutral-900 overflow-hidden bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-neutral-950">
<div className="relative">
<div className="aspect-[4/3] w-full">
<img alt="Creative team in a studio" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px]">
<div className="space-y-1 text-neutral-200">
<p className="uppercase tracking-[0.16em] text-neutral-400">Studio, Port Harcourt</p>
<p className="font-medium tracking-tight text-neutral-50">Distributed African team, plugged into global networks.</p>
</div>
<div className="hidden sm:flex flex-col items-end gap-1 text-neutral-300">
<span>Remote friendly • On-ground present</span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 border border-white/10">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Lagos • Accra • Nairobi • London
                    </span>
</div>
</div>
</div>
</div>
<div className="space-y-4">
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-400">Studio</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
                A creative engineering studio rooted in African realities.
              </h2>
<p className="text-sm text-neutral-300">
                We’re a network of designers, engineers, strategists and cultural thinkers who believe the next decade of global innovation will be written in African cities.
              </p>
<div className="grid sm:grid-cols-2 gap-3 text-xs text-neutral-300">
<div className="rounded-2xl border border-neutral-900 bg-neutral-900/80 p-3">
<p className="text-neutral-500 uppercase tracking-[0.18em] mb-1">We hold space for</p>
<p className="font-medium tracking-tight text-neutral-50 mb-1">Youth and emergent voices</p>
<p>Building with people who are usually designed around.</p>
</div>
<div className="rounded-2xl border border-neutral-900 bg-neutral-900/80 p-3">
<p className="text-neutral-500 uppercase tracking-[0.18em] mb-1">We care about</p>
<p className="font-medium tracking-tight text-neutral-50 mb-1">Infrastructure &amp; imagination</p>
<p>Products that don’t just work—they unlock new ways of seeing.</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] text-neutral-400">
<div className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="message-circle" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></svg>
<span>We collaborate with civic labs, startups, NGOs, and cultural institutions.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80 bg-neutral-950" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-16 items-start">
<div className="space-y-4">
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-400">Start something</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
                Tell us about the African idea you’re ready to scale.
              </h2>
<p className="text-sm text-neutral-300">
                Whether you’re prototyping a new product, rethinking an organisation, or building a youth-centered program, we’d love to explore it with you.
              </p>
<div className="space-y-3 text-sm text-neutral-200">
<a className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors" href="mailto:hello@thinkitecture.agency">
<svg className="w-4 h-4" data-lucide="mail" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></svg>
<span>hello@thinkitecture.agency</span>
</a>
<div className="flex items-start gap-2 text-xs text-neutral-300">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="map-pin" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></svg>
<p>45B Lords Choosen Avenue, Port Harcourt, Nigeria</p>
</div>
</div>
<div className="grid sm:grid-cols-3 gap-3 text-[11px] text-neutral-400 pt-2">
<div>
<p className="uppercase tracking-[0.18em] mb-1">Ideal partners</p>
<p>Founders, hubs, civic labs, universities, cultural orgs.</p>
</div>
<div>
<p className="uppercase tracking-[0.18em] mb-1">Ideal stage</p>
<p>From pre-product ideas to post-launch platforms.</p>
</div>
<div>
<p className="uppercase tracking-[0.18em] mb-1">Timeline</p>
<p>Sprints from 2 weeks; collaborations from 3–12 months.</p>
</div>
</div>
</div>

<div className="rounded-3xl border border-neutral-900 bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-neutral-950 p-4 sm:p-6">
<form className="space-y-4">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-medium text-neutral-100 tracking-tight">Project outline</p>
<p className="text-[11px] text-neutral-500">We typically respond within 3 business days.</p>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">Name</label>
<input className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/60" placeholder="Your full name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">Organisation</label>
<input className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/60" placeholder="Startup, hub, NGO, etc." type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">Email</label>
<input className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/60" placeholder="you@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">What are you building?</label>
<textarea className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/60" placeholder="Tell us about your idea, audience, timeline, and any context we should know." rows="4"></textarea>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">Ideal start</label>
<input className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/60" placeholder="e.g. March 2025" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">Where are you based?</label>
<input className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/60" placeholder="City, Country" type="text"/>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<div className="text-[11px] text-neutral-500 max-w-xs">
                    By sending this form you’re starting a conversation, not a commitment. We’ll explore fit together.
                  </div>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-neutral-950 px-4 py-2 text-xs font-medium hover:bg-emerald-300 transition-colors" type="submit">
<span>Send outline</span>
<svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></svg>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-900 bg-neutral-950">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<div className="h-6 w-auto flex items-center">
<img alt="thinkitecture.agency logo" className="h-6 w-auto object-contain" src="https://i.ibb.co/QPgYfyV/thinkitecture-logo-green.png"/>
</div>
<span className="text-neutral-500">© <span id="year"></span> thinkitecture.agency</span>
<span className="hidden sm:inline text-neutral-700">•</span>
<span className="hidden sm:inline text-neutral-500">Engineering bold African ideas.</span>
</div>
<div className="flex flex-wrap items-center gap-3 text-[11px] text-neutral-400">
<a className="inline-flex items-center gap-1 hover:text-emerald-300 transition-colors" href="mailto:hello@thinkitecture.agency">
<svg className="w-3.5 h-3.5" data-lucide="mail" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></svg>
<span>hello@thinkitecture.agency</span>
</a>
<span className="hidden sm:inline text-neutral-700">•</span>
<span>Port Harcourt, Nigeria → working globally</span>
</div>
</div>
</div>
</footer>
</div>




    </>
  );
}

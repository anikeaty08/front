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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      document.addEventListener('DOMContentLoaded', () => {
          // --- Initial Loader Logic ---
          const loader = document.getElementById('app-loader');
          const mainContainer = document.getElementById('main-container');

          setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            mainContainer.style.opacity = '1';
          }, 1800); // 1.8s delay to show the loader animation

          // --- Slide Logic ---
          const slides = document.querySelectorAll('.slide');
          const prevBtn = document.getElementById('prev-btn');
          const nextBtn = document.getElementById('next-btn');
          const slideCountEl = document.getElementById('slide-count');
          const paginationEl = document.getElementById('pagination');
          const progressBar = document.getElementById('progress-bar');

          let currentSlide = 0;
          const totalSlides = slides.length;

          const dots = paginationEl.children;

          function updateSlide(index) {
              // Hide all and reset animations by removing slide-enter class
              slides.forEach(slide => {
                  slide.classList.add('hidden');
                  slide.classList.remove('slide-enter');
              });

              // Show active
              slides[index].classList.remove('hidden');

              // Trigger Reflow to restart CSS animations
              void slides[index].offsetWidth;

              // Add class to start animations
              slides[index].classList.add('slide-enter');

              // Update UI
              slideCountEl.textContent = index + 1;

              // Update Progress Bar (Visual)
              const progress = ((index + 1) / totalSlides) * 100;
              progressBar.style.width = `${progress}%`;

              // Update Dots
              Array.from(dots).forEach((dot, i) => {
                  dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-white w-8' : 'bg-white/20'}`;
              });

              // Button states
              prevBtn.disabled = index === 0;
              nextBtn.disabled = index === totalSlides - 1;
          }

          prevBtn.addEventListener('click', () => {
              if (currentSlide > 0) {
                  currentSlide--;
                  updateSlide(currentSlide);
              }
          });

          nextBtn.addEventListener('click', () => {
              if (currentSlide < totalSlides - 1) {
                  currentSlide++;
                  updateSlide(currentSlide);
              }
          });

          // Initialize slides (handled visually after loader)
          updateSlide(0);
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
      

<div className="fixed inset-0 z-50 bg-[#0f1115] flex flex-col items-center justify-center" id="app-loader">
<div className="relative w-16 h-16 mb-8">
<div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl animate-pulse"></div>
<div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
<iconify-icon className="text-white text-3xl animate-float" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
</div>
<div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 translate-x-[-100%] animate-[shimmer_1s_infinite]"></div>
<div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 loader-bar"></div>
</div>
<p className="text-white/30 text-xs font-medium tracking-widest uppercase mt-4 animate-pulse">Initializing</p>
</div>

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>

</div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] blob-motion"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[120px] blob-motion" style={{animationDelay: '-5s'}}></div>
<div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] animate-pulse"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50"></div>
</div>

<div className="relative z-10 w-full max-w-7xl h-full md:h-[90vh] flex flex-col p-4 md:p-0 opacity-0 transition-opacity duration-1000" id="main-container">

<div className="flex items-center justify-between mb-4 md:mb-6 px-2 shrink-0">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 relative overflow-hidden group">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<iconify-icon className="text-white text-xl relative z-10" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div className="">
<h1 className="font-medium tracking-tight text-white/90 text-base">
              MoveMetrics
            </h1>
<p className="text-white/40 text-sm">Healthy Aging Strategy</p>
</div>
</div>

<div className="hidden sm:flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md">
<div className="text-sm text-white/40 font-medium tracking-widest uppercase">
            Slide
            <span className="text-white" id="slide-count">1</span>
            / 6
          </div>
<div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[16%] transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1)" id="progress-bar" style={{width: '16.6667%'}}></div>
</div>
</div>
</div>

<div className="flex-1 glass-panel rounded-3xl overflow-hidden relative flex flex-col shadow-2xl border border-white/10">

<div className="slide absolute inset-0 overflow-y-auto custom-scrollbar p-6 md:p-12 lg:p-16 flex flex-col justify-center slide-enter" id="slide-1">
<div className="w-full h-full flex flex-col justify-center">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="space-y-8">
<div className="stagger-1 inline-flex gap-2 uppercase text-sm font-medium text-red-400 tracking-wider bg-red-500/10 border-red-500/20 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" style={{}}>PHAC challenge<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span></div>
<h2 className="stagger-2 leading-[1.1] sm:text-6xl lg:text-7xl text-5xl font-medium tracking-tight">The Prevention <br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">Funding Gap</span></h2>
<p className="stagger-3 leading-relaxed md:text-2xl text-xl text-white/60 max-w-lg">Why effective healthy-aging interventions remain underfunded</p>
</div>
<div className="stagger-4 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

<div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col gap-4 group hover:bg-white/5 transition-colors relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
<div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon className="text-3xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-white tracking-tight md:text-5xl text-4xl">
                      +13 pp
                    </h3>
<p className="text-white/50 mt-2 text-base">
                      Health improvement score via simple social connection
                    </p>
</div>
</div>

<div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col gap-4 group hover:bg-white/5 transition-colors border-red-500/10 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all"></div>
<div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
<iconify-icon className="text-3xl" icon="solar:dollar-linear"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-white tracking-tight text-4xl md:text-5xl">
                      $2.8B
                    </h3>
<p className="text-white/50 mt-2 text-base">
                      Direct annual cost of fall-related injuries
                    </p>
</div>
</div>

<div className="col-span-1 sm:col-span-2 glass-card p-8 rounded-2xl flex flex-col justify-center relative">
<div className="w-full">
<div className="flex justify-between text-xs uppercase tracking-wide text-white/40 mb-3">
<span>Acute Care Spend</span>
<span>Prevention (2%)</span>
</div>
<div className="h-4 bg-white/5 rounded-full overflow-hidden flex">
<div className="h-full bg-gradient-to-r from-red-500 to-orange-500 grow-bar-x" style={{'--target-width': '98%'}}></div>
<div className="h-full bg-green-500 grow-bar-x" style={{'--target-width': '2%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 overflow-hidden p-6 md:p-12 lg:p-16 flex flex-col items-center justify-center hidden" id="slide-2">
<div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full">
<div className="mb-12 text-center">
<span className="stagger-1 inline-block text-emerald-400 font-medium uppercase tracking-wider mb-3 border border-emerald-500/20 px-3 py-1 rounded-full bg-emerald-500/10 text-sm">
                Solution 01
              </span>
<h2 className="stagger-2 font-medium tracking-tight text-white text-5xl sm:text-6xl">
                Neighbourhood Activity Pods
              </h2>
<p className="stagger-3 text-white/50 mt-3 text-2xl">
                Embedding health in daily social routines.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="stagger-2 glass-card p-8 rounded-3xl flex flex-col items-center text-center gap-8 hover:-translate-y-2 transition-transform duration-500 group">
<div className="relative w-28 h-28">
<div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
<div className="relative w-full h-full rounded-full bg-gradient-to-b from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center text-emerald-400 animate-float">
<iconify-icon className="text-5xl" icon="solar:walking-round-linear"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="font-medium text-white mb-3 text-3xl">
                    Walking Groups
                  </h3>
<p className="text-white/50 leading-relaxed text-lg">
                    Leveraging local parks and existing friend circles for
                    consistent movement.
                  </p>
</div>
</div>

<div className="stagger-3 glass-card p-8 rounded-3xl flex flex-col items-center text-center gap-8 hover:-translate-y-2 transition-transform duration-500 group">
<div className="relative w-28 h-28">
<div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
<div className="relative w-full h-full rounded-full bg-gradient-to-b from-teal-500/20 to-teal-500/5 border border-teal-500/20 flex items-center justify-center text-teal-400 animate-float" style={{animationDelay: '1s'}}>
<iconify-icon className="text-5xl" icon="solar:cup-hot-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="font-medium text-white mb-3 text-3xl">
                    Community Meetups
                  </h3>
<p className="text-white/50 leading-relaxed text-lg">
                    Coffee groups and social gatherings that naturally encourage
                    cognitive engagement.
                  </p>
</div>
</div>

<div className="stagger-4 glass-card p-8 rounded-3xl flex flex-col items-center text-center gap-8 hover:-translate-y-2 transition-transform duration-500 group">
<div className="relative w-28 h-28">
<div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
<div className="relative w-full h-full rounded-full bg-gradient-to-b from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 flex items-center justify-center text-cyan-400 animate-float" style={{animationDelay: '2s'}}>
<iconify-icon className="text-5xl" icon="solar:city-linear"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="font-medium text-white mb-3 text-3xl">
                    Familiar Spaces
                  </h3>
<p className="text-white/50 leading-relaxed text-lg">
                    Using faith centers and libraries to remove barriers to
                    entry.
                  </p>
</div>
</div>
</div>

<div className="stagger-4 mt-16 mx-auto bg-emerald-900/20 border border-emerald-500/10 px-8 py-4 rounded-full flex items-center gap-4 shadow-[0_0_20px_rgba(16,185,129,0.1)] w-fit">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-emerald-200/80 text-lg">
                Strategy: Cognitive legitimacy; it feels normal with no 'health
                intervention"
              </span>
</div>
</div>
</div>

<div className="slide absolute inset-0 p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden hidden" id="slide-3">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-6xl mx-auto h-full">

<div className="relative z-10 space-y-10 order-2 lg:order-1">
<div className="">
<span className="stagger-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold uppercase tracking-widest mb-4 text-sm">
                  Solution 02
                </span>
<h2 className="stagger-2 font-medium tracking-tight text-white leading-[1.1] text-6xl sm:text-7xl">
                  SilverConnect
                  <br/>
                  Platform
                </h2>
<p className="stagger-2 text-white/50 mt-6 leading-relaxed text-2xl">
                  Connection without complexity. A dedicated "Zero-UI" window to
                  family and care providers.
                </p>
</div>
<div className="space-y-6">

<div className="stagger-3 group bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-5 transition-colors duration-300">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
<iconify-icon className="text-2xl" icon="solar:accessibility-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium text-xl">
                        Radical Simplicity
                      </h4>
<p className="text-white/40 mt-1 leading-relaxed text-lg">
                        No logins, passwords, or menus. Just one touch to
                        answer.
                      </p>
</div>
</div>
</div>

<div className="stagger-4 group bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-5 transition-colors duration-300">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium text-xl">
                        Managed Utility
                      </h4>
<p className="text-white/40 mt-1 leading-relaxed text-lg">
                        Devices provided and managed by the municipality,
                        treating connection as a public utility.
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="stagger-3 order-1 lg:order-2 relative w-full flex items-center justify-center">

<div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full scale-75 animate-pulse-ring"></div>

<div className="relative w-full max-w-[320px] aspect-[9/16] bg-[#050505] rounded-[2.5rem] shadow-2xl border-[6px] border-[#2a2d36] ring-1 ring-white/10 overflow-hidden flex flex-col z-10 group">

<div className="relative h-full w-full flex flex-col">

<img alt="Elderly User" className="group-hover:scale-105 transition-transform duration-700 opacity-90 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>

<div className="z-10 flex-1 flex flex-col pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex justify-center">
<div className="flex items-center gap-2 backdrop-blur-md bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-semibold text-white/90 tracking-widest uppercase">
                          Live Connection
                        </span>
</div>
</div>

<div className="space-y-6">
<div className="text-center">
<h3 className="text-2xl font-semibold text-white tracking-tight">
                          Grandma
                        </h3>
<p className="text-sm text-white/60 font-medium">04:12</p>
</div>

<div className="flex items-center justify-center gap-4">
<button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
<iconify-icon className="text-white text-xl" icon="solar:muted-linear"></iconify-icon>
</button>
<button className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 border-4 border-red-500/30 flex items-center justify-center shadow-lg shadow-red-500/40 transition-all hover:scale-105">
<iconify-icon className="text-white text-2xl" icon="solar:phone-rounded-bold"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
<iconify-icon className="text-white text-xl" icon="solar:videocamera-record-bold"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 overflow-y-auto custom-scrollbar p-6 md:p-8 flex flex-col hidden" id="slide-4">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 shrink-0">
<div>
<span className="stagger-1 text-blue-400 font-medium uppercase tracking-wider mb-2 block text-sm">
                Solution 03 (Recommended)
              </span>
<h2 className="stagger-2 font-medium tracking-tight text-white text-4xl md:text-5xl">
                MoveMetrics OS
              </h2>
<p className="stagger-3 text-white/50 mt-1 text-lg">
                What gets measured gets funded. Infrastructure for
                accountability.
              </p>
</div>
<div className="stagger-2 flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.2)] w-fit">
<span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-sm font-medium text-blue-300">
                Live Data Stream
              </span>
</div>
</div>

<div className="stagger-4 flex-1 bg-[#15171e] rounded-2xl border border-white/10 overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl relative min-h-[500px]">

<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-[10px] w-full z-10 animate-[scan_4s_linear_infinite]"></div>
<style>
              @keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }
            </style>

<div className="hidden md:flex col-span-2 border-r border-white/5 p-6 flex-col gap-6 bg-[#111318]">
<div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
<iconify-icon className="text-white text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-10 w-full bg-white/10 rounded-md flex items-center px-4 text-sm text-white border-l-2 border-blue-500 font-medium">
                  Overview
                </div>
<div className="h-10 w-full hover:bg-white/5 rounded-md flex items-center px-4 text-sm text-white/50 cursor-pointer transition-colors">
                  Fall Risk
                </div>
<div className="h-10 w-full hover:bg-white/5 rounded-md flex items-center px-4 text-sm text-white/50 cursor-pointer transition-colors">
                  Engagement
                </div>
<div className="h-10 w-full hover:bg-white/5 rounded-md flex items-center px-4 text-sm text-white/50 cursor-pointer transition-colors">
                  Settings
                </div>
</div>
<div className="mt-auto">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-white/10"></div>
<div className="text-xs text-white/40">Admin User</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-10 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto custom-scrollbar">

<div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
<span className="text-white/40 uppercase tracking-wide text-sm">
                  Avg. Steps / District
                </span>
<div className="font-medium text-white mt-2 flex items-baseline gap-3 text-4xl">
                  6,240
                  <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
                    +12%
                  </span>
</div>
</div>
<div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
<span className="text-white/40 uppercase tracking-wide text-sm">
                  Program ROI
                </span>
<div className="font-medium text-white mt-2 text-4xl">3.4x</div>
<div className="w-full bg-white/10 h-1.5 mt-4 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 grow-bar-x" style={{'--target-width': '75%'}}></div>
</div>
</div>
<div className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
<span className="text-xs text-white/40 uppercase tracking-wide text-sm">
                  Fall Risk Index
                </span>
<div className="font-medium text-white mt-2 text-green-400 text-4xl">
                  Low
                </div>
<span className="text-white/30 mt-1 block">
                  Down from High (Q1)
                </span>
</div>

<div className="md:col-span-2 bg-white/5 rounded-xl p-6 border border-white/5 relative overflow-hidden flex flex-col min-h-[250px]">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-white/40 uppercase tracking-wide">
                    Activity Heatmap (By Municipality)
                  </span>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-[10px] text-white/30">Active</span>
</div>
</div>
<div className="flex-1 flex items-end gap-2 mt-auto">
<div className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-500/30 rounded-t-sm hover:bg-blue-500/40 transition grow-bar-y" style={{'--target-height': '40%', animationDelay: '0.5s'}}></div>
<div className="flex-1 bg-gradient-to-t from-blue-500/30 to-blue-500/40 rounded-t-sm hover:bg-blue-500/50 transition grow-bar-y" style={{'--target-height': '60%', animationDelay: '0.6s'}}></div>
<div className="flex-1 bg-gradient-to-t from-blue-500/60 to-blue-500/70 rounded-t-sm hover:bg-blue-500/70 transition grow-bar-y" style={{'--target-height': '80%', animationDelay: '0.7s'}}></div>
<div className="flex-1 bg-gradient-to-t from-blue-500/40 to-blue-500/50 rounded-t-sm hover:bg-blue-500/60 transition grow-bar-y" style={{'--target-height': '50%', animationDelay: '0.8s'}}></div>
<div className="flex-1 bg-gradient-to-t from-blue-500/80 to-blue-500/90 rounded-t-sm hover:bg-blue-500/90 transition grow-bar-y" style={{'--target-height': '90%', animationDelay: '0.9s'}}></div>
<div className="flex-1 bg-gradient-to-t from-blue-500/50 to-blue-500/60 rounded-t-sm hover:bg-blue-500/70 transition grow-bar-y" style={{'--target-height': '65%', animationDelay: '1.0s'}}></div>
<div className="flex-1 bg-gradient-to-t from-blue-500/30 to-blue-500/40 rounded-t-sm hover:bg-blue-500/50 transition grow-bar-y" style={{'--target-height': '45%', animationDelay: '1.1s'}}></div>
</div>
</div>

<div className="bg-white/5 rounded-xl p-6 border border-white/5 flex flex-col">
<span className="text-xs text-white/40 uppercase tracking-wide mb-4 block">
                  Top Programs
                </span>
<div className="space-y-6 flex-1">
<div>
<div className="flex items-center justify-between text-sm mb-2">
<span className="text-white/80 font-medium">
                        Walking Pods
                      </span>
<span className="text-green-400 text-xs bg-green-500/10 px-2 py-0.5 rounded">
                        Funded
                      </span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-green-500 to-emerald-400 h-full rounded-full grow-bar-x" style={{'--target-width': '80%', animationDelay: '1s'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm mb-2">
<span className="text-white/80 font-medium">
                        SilverConnect
                      </span>
<span className="text-yellow-400 text-xs bg-yellow-500/10 px-2 py-0.5 rounded">
                        Review
                      </span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-yellow-500 to-amber-400 h-full rounded-full grow-bar-x" style={{'--target-width': '40%', animationDelay: '1.2s'}}></div>
</div>
</div>
</div>
<button className="mt-4 w-full py-2 text-xs text-white/50 hover:text-white border border-white/10 rounded-lg transition-colors">
                  View All Programs
                </button>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 overflow-y-auto custom-scrollbar p-6 md:p-12 lg:p-16 flex flex-col justify-center hidden" id="slide-5">
<div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">

<div className="mb-8 shrink-0">
<span className="stagger-1 inline-block uppercase text-sm font-medium text-blue-400 tracking-wider bg-blue-500/10 border-blue-500/20 border rounded-full mb-2 pt-1 pr-3 pb-1 pl-3">
                Strategic Play
              </span>
<h2 className="stagger-2 font-medium tracking-tight text-white mb-2 text-5xl md:text-6xl">
                Our Recommendation: MoveMetrics
              </h2>
<p className="stagger-3 text-white/50 text-xl">
                Three solutions compared across key strategic dimensions.
              </p>
</div>

<div className="stagger-3 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden mb-8">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr>
<th className="py-4 px-6 text-sm uppercase tracking-wider font-semibold text-white/40 border-b border-white/10 w-[20%]">
                        Dimension
                      </th>
<th className="py-4 px-6 text-base font-medium text-white/70 border-b border-white/10 w-[25%]">
                        Activity Pods
                      </th>
<th className="py-4 px-6 text-base font-medium text-white/70 border-b border-white/10 w-[25%]">
                        SilverConnect
                      </th>
<th className="py-4 px-6 text-base font-semibold text-blue-300 border-b border-blue-500/20 bg-blue-500/5 w-[30%]">
                        MoveMetrics
                      </th>
</tr>
</thead>
<tbody className="text-base">

<tr className="group border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-6 text-white/50 font-medium">
                        Impact Type
                      </td>
<td className="py-4 px-6 text-white/70">
                        Direct intervention
                      </td>
<td className="py-4 px-6 text-white/70">
                        Direct intervention
                      </td>
<td className="py-4 px-6 text-white font-semibold bg-blue-500/5 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)]">
                        System enabler
                      </td>
</tr>

<tr className="group border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-6 text-white/50 font-medium">
                        Beneficiaries
                      </td>
<td className="py-4 px-6 text-white/70">
                        Participating seniors
                      </td>
<td className="py-4 px-6 text-white/70">Homebound seniors</td>
<td className="py-4 px-6 text-white font-semibold bg-blue-500/5 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)]">
                        All prevention programs
                      </td>
</tr>

<tr className="group border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-6 text-white/50 font-medium">
                        Buyers
                      </td>
<td className="py-4 px-6 text-white/70">Unclear authority</td>
<td className="py-4 px-6 text-white/70">Families? Gov?</td>
<td className="py-4 px-6 text-white font-semibold bg-blue-500/5 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)]">
                        Clear gov buyers
                      </td>
</tr>

<tr className="group border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-6 text-white/50 font-medium">
                        Timeline
                      </td>
<td className="py-4 px-6 text-white/70">Immediate</td>
<td className="py-4 px-6 text-white/70">Immediate</td>
<td className="py-4 px-6 text-white font-semibold bg-blue-500/5 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)]">
                        Long-term leverage
                      </td>
</tr>

<tr className="group hover:bg-white/5 transition-colors">
<td className="py-4 px-6 text-white/50 font-medium">
                        Legitimacy
                      </td>
<td className="py-4 px-6 text-white/70">
                        Cognitive (seniors)
                      </td>
<td className="py-4 px-6 text-white/70">
                        Cognitive (seniors)
                      </td>
<td className="font-semibold text-white bg-blue-500/5 pt-4 pr-6 pb-4 pl-6 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)] scale-100">
                        Cognitive (gov officials)
                      </td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="stagger-4 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-4">
<h3 className="text-lg font-medium text-white mb-2">
                  Why MoveMetrics Wins:
                </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-white/80 text-sm text-base">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="lucide:check"></iconify-icon>
<span>
                      Addresses root cause (funding infrastructure failure)
                    </span>
</li>
<li className="flex items-start gap-3 text-white/80 text-sm text-base">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="lucide:check"></iconify-icon>
<span>
                      Clear purchasing authority (provincial/municipal gov)
                    </span>
</li>
<li className="flex items-start gap-3 text-white/80 text-sm text-base">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="lucide:check"></iconify-icon>
<span>Scales prevention across all interventions</span>
</li>
<li className="flex items-start gap-3 text-white/80 text-sm text-base">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="lucide:check"></iconify-icon>
<span>
                      Aligns with PHAC's explicit infrastructure mandate
                    </span>
</li>
</ul>
</div>

<div className="flex flex-col justify-center">
<div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-amber-500 text-6xl" icon="solar:scale-linear"></iconify-icon>
</div>
<h3 className="text-amber-400 text-xs font-medium uppercase tracking-wider mb-2">
                    The Trade-Off
                  </h3>
<p className="text-amber-100/90 text-lg italic leading-relaxed relative z-10 font-light">
                    "Sacrificing immediate visible impact for higher-leverage
                    system change"
                  </p>
</div>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 overflow-y-auto custom-scrollbar p-6 md:p-12 flex flex-col items-center justify-center text-center hidden" id="slide-6">
<div className="stagger-1 w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-10 shadow-2xl shadow-blue-600/30 animate-float relative">
<div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse-ring"></div>
<iconify-icon className="text-white text-6xl relative z-10" icon="solar:chart-2-bold-duotone"></iconify-icon>
</div>
<h1 className="stagger-2 font-medium tracking-tight mb-8 text-6xl sm:text-8xl">
            Infrastructure for
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-300 animate-gradient-x" style={{backgroundSize: '200% 200%', animation: 'gradientMove 3s ease infinite'}}>
              Prevention's Future
            </span>
</h1>
<style>
            @keyframes gradientMove { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }
          </style>
<div className="stagger-3 max-w-2xl mx-auto space-y-8">
<blockquote className="text-white/70 font-light italic border-l-2 border-blue-500 pl-6 text-left relative text-3xl">
              "Knowledge development infrastructure to guide prevention policy
              and investment"
            </blockquote>
<p className="font-medium text-white text-2xl">
              What gets measured gets funded.
            </p>
</div>
<div className="stagger-4 mt-16 flex flex-col sm:flex-row gap-4">
<button className="px-10 py-4 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Contact Us
            </button>
<button className="px-10 py-4 rounded-full bg-white/5 text-white font-medium text-sm border border-white/10 hover:bg-white/10 transition-colors">
              View Data
            </button>
</div>
</div>
</div>

<div className="flex md:mt-6 shrink-0 mt-4 pr-4 pl-4 items-center justify-between">
<button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed group px-2 py-1" disabled="" id="prev-btn">
<iconify-icon className="text-xl group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
<span className="text-sm font-medium">Previous</span>
</button>
<div className="flex gap-2" id="pagination">
<div className="w-2 h-2 rounded-full transition-all duration-300 bg-white w-8"></div>
<div className="w-2 h-2 rounded-full transition-all duration-300 bg-white/20"></div>
<div className="w-2 h-2 rounded-full transition-all duration-300 bg-white/20"></div>
<div className="w-2 h-2 rounded-full transition-all duration-300 bg-white/20"></div>
<div className="w-2 h-2 rounded-full transition-all duration-300 bg-white/20"></div>
<div className="w-2 h-2 rounded-full transition-all duration-300 bg-white/20"></div>
</div>
<button className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors disabled:opacity-20 disabled:cursor-not-allowed group px-2 py-1" id="next-btn">
<span className="text-sm font-medium">Next</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>



    </>
  );
}

import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "30min", {origin:"https://app.cal.com"});

            Cal.ns["30min"]("inline", {
              elementOrSelector:"#my-cal-inline-30min",
              config: {"layout":"month_view","theme":"dark"},
              calLink: "john-smith-xg2tsn/30min",
            });

            Cal.ns["30min"]("ui", {"theme":"dark","cssVarsPerTheme":{"dark":{"cal-brand":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});

                    window.switchPrice = function(plan) {
                      const bg = document.getElementById('toggle-pill-bg');
                      const btnS = document.getElementById('toggle-btn-sprint');
                      const btnSy = document.getElementById('toggle-btn-system');
                      const contentS = document.getElementById('content-sprint');
                      const contentSy = document.getElementById('content-system');

                      if (plan === 'sprint') {
                        bg.style.transform = 'translateX(0)';
                        btnS.classList.replace('text-white/50', 'text-white');
                        btnSy.classList.replace('text-white', 'text-white/50');
                        contentS.classList.remove('hidden');
                        contentSy.classList.add('hidden');
                      } else {
                        bg.style.transform = 'translateX(100%)';
                        btnS.classList.replace('text-white', 'text-white/50');
                        btnSy.classList.replace('text-white/50', 'text-white');
                        contentS.classList.add('hidden');
                        contentSy.classList.remove('hidden');
                      }
                    }
        


      // 1. REVEAL ANIMATIONS
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal-element, .subtext-reveal, .pop-in-element').forEach((el) => {
        observer.observe(el);
      });

      // 2. NUMBER COUNT UP ANIMATION
      const countUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target.querySelector('.count-up');
            if(el && !el.classList.contains('counted')){
                animateValue(el);
                el.classList.add('counted');
            }
          }
        });
      }, { threshold: 0.5 });

      document.querySelectorAll('.count-up').forEach(el => {
          // We observe the parent to trigger earlier/better
          countUpObserver.observe(el.parentElement);
      });

      function animateValue(obj) {
        const target = parseFloat(obj.getAttribute('data-target'));
        const prefix = obj.getAttribute('data-prefix') || "";
        const suffix = obj.getAttribute('data-suffix') || "";
        const decimals = parseInt(obj.getAttribute('data-decimals') || "0");
        const duration = 2000;
        let startTimestamp = null;

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          // easeOutExpo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

          const current = easeProgress * target;
          obj.innerHTML = prefix + current.toFixed(decimals) + suffix;

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
             obj.innerHTML = prefix + target.toFixed(decimals) + suffix; // Ensure final value is exact
          }
        };
        window.requestAnimationFrame(step);
      }

      // 3. MODAL LOGIC
      const modalBackdrop = document.getElementById('modal-backdrop');
      const modalTitle = document.getElementById('modal-title');
      const modalDesc = document.getElementById('modal-desc');
      const modalIcon = document.getElementById('modal-icon');

      window.openModal = function(title, desc, icon) {
        modalTitle.innerText = title;
        modalDesc.innerText = desc;
        modalIcon.setAttribute('data-icon', icon);
        modalBackdrop.classList.add('active');
      }

      window.closeModal = function() {
        modalBackdrop.classList.remove('active');
      }

      // Close on backdrop click
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component">
<div className="absolute w-full h-full left-0 top-0" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '100px 100px'}}></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020202]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-default">
<div className="w-3.5 h-3.5 bg-white rounded-[2px] group-hover:bg-indigo-500 transition-colors duration-500"></div>
<span className="font-medium tracking-tight text-white text-sm">
            EPIA
          </span>
</div>
<div className="flex items-center gap-6">
<a className="text-[11px] text-white/60 hover:text-white transition-colors hidden sm:block uppercase tracking-widest font-medium" href="#method">
            Method
          </a>
<a className="text-[11px] text-white/60 hover:text-white transition-colors hidden sm:block uppercase tracking-widest font-medium" href="#execution">
            Engine
          </a>
<a className="text-[11px] text-white/60 hover:text-white transition-colors hidden sm:block uppercase tracking-widest font-medium" href="#solution">
            Solution
          </a>
<a className="text-[11px] text-white/60 hover:text-white transition-colors hidden sm:block uppercase tracking-widest font-medium" href="#portfolio">
            Cases
          </a>
<a className="text-[11px] text-white/60 hover:text-white transition-colors hidden sm:block uppercase tracking-widest font-medium" href="#process">
            Process
          </a>
<a className="text-[11px] text-white/60 hover:text-white transition-colors hidden sm:block uppercase tracking-widest font-medium" href="#faq">
            FAQ
          </a>
<button className="shiny-cta px-4 py-1.5 text-[11px]">
<span>Book Slot</span>
</button>
</div>
</div>
</nav>
<main className="relative z-10">

<section className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
<div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-3 flex flex-col items-start z-20">
<div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
<span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                40+ Companies Transformed
              </span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.05] reveal-element" style={{transitionDelay: '100ms'}}>
              Turn Operational Chaos Into
              <span className="animate-text-shimmer">Competitive Advantage</span>
</h1>
<div className="reveal-element" style={{transitionDelay: '200ms'}}>
<p className="text-2xl md:text-3xl text-white/40 font-light mb-8 tracking-tight">
                In 10-Day Sprint Cycles
              </p>
<p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mb-12">
                Enterprise-grade business systems built for scale. Delivered at
                execution speed that doesn't kill momentum.
              </p>
</div>
<div className="reveal-element flex flex-col sm:flex-row gap-4 w-full sm:w-auto" style={{transitionDelay: '400ms'}}>
<button className="shiny-cta h-12 px-8 text-sm w-full sm:w-auto">
<span>Transform Your Operations</span>
</button>
<button className="h-12 px-6 rounded-full border border-white/10 hover:bg-white/5 text-sm font-medium text-white transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group">
<span className="">See Client Results</span>
<svg aria-hidden="true" data-icon="lucide:arrow-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="lg:col-span-2 reveal-element relative mt-12 lg:mt-0" style={{transitionDelay: '500ms'}}>
<div className="relative w-full aspect-[4/3] group">
<div className="absolute inset-0 bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/80 z-10 flex flex-col">
<div className="h-10 border-b border-white/5 bg-[#0F0F0F] flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="w-16 h-1.5 rounded-full bg-white/5"></div>
</div>
<div className="flex-1 p-4 grid grid-cols-12 gap-4">
<div className="col-span-3 h-full flex flex-col gap-2">
<div className="w-full h-8 rounded bg-white/5"></div>
<div className="w-full h-8 rounded bg-white/[0.02]"></div>
<div className="w-full h-8 rounded bg-white/[0.02]"></div>
</div>
<div className="col-span-9 h-full flex flex-col gap-4">
<div className="grid grid-cols-2 gap-4 h-24">
<div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-lg relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-10 flex items-end justify-between px-2 pb-2 gap-1">
<div className="w-full bg-indigo-500/20 h-[40%] rounded-sm"></div>
<div className="w-full bg-indigo-500/30 h-[70%] rounded-sm"></div>
<div className="w-full bg-indigo-500/40 h-[50%] rounded-sm"></div>
<div className="w-full bg-indigo-500/20 h-[30%] rounded-sm"></div>
<div className="w-full bg-indigo-500/50 h-[80%] rounded-sm"></div>
</div>
</div>
<div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-lg flex items-center justify-center">
<div className="w-16 h-16 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 transform rotate-45"></div>
</div>
</div>
<div className="flex-1 bg-white/[0.02] border border-white/5 rounded-lg p-3 space-y-2">
<div className="flex gap-2 items-center">
<div className="w-8 h-8 rounded bg-white/5"></div>
<div className="flex-1 space-y-1">
<div className="w-24 h-1.5 bg-white/10 rounded"></div>
<div className="w-12 h-1.5 bg-white/5 rounded"></div>
</div>
<div className="w-12 h-4 rounded-full bg-green-500/20 border border-green-500/20"></div>
</div>
<div className="flex gap-2 items-center opacity-50">
<div className="w-8 h-8 rounded bg-white/5"></div>
<div className="flex-1 space-y-1">
<div className="w-20 h-1.5 bg-white/10 rounded"></div>
<div className="w-16 h-1.5 bg-white/5 rounded"></div>
</div>
<div className="w-12 h-4 rounded-full bg-white/5 border border-white/10"></div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-6 w-48 bg-[#0F0F0F] border border-white/10 rounded-lg p-4 shadow-2xl z-20 animate-pulse" style={{animationDuration: '4s'}}>
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] text-white/40 font-mono uppercase">
                    Efficiency
                  </span>
<svg aria-hidden="true" data-icon="lucide:trending-up" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 7h6v6"></path>
<path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
</g>
</svg>
</div>
<div className="text-2xl font-medium text-white mb-1">+24.8%</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[70%]"></div>
</div>
</div>
<div className="absolute inset-0 bg-indigo-500/10 blur-[60px] -z-10 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="border-y bg-black w-full z-20 border-white/10 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 divide-white/10 lg:divide-x">
<div className="flex flex-col items-center justify-center py-16 px-10 text-center reveal-element" style={{transitionDelay: '50ms'}}>
<div className="text-4xl lg:text-5xl font-semibold text-indigo-500 tracking-tight mb-2 count-up" data-suffix="+" data-target="40">
                0+
              </div>
<div className="text-sm lg:text-base font-medium text-white mb-1.5">
                Projects
              </div>
<div className="text-[10px] lg:text-xs text-white/40 font-light uppercase tracking-widest">
                Delivered in 10-day cycles
              </div>
</div>
<div className="flex flex-col items-center justify-center py-16 px-10 text-center border-t sm:border-t-0 sm:border-l border-white/10 reveal-element" style={{transitionDelay: '100ms'}}>
<div className="text-4xl lg:text-5xl font-semibold text-indigo-500 tracking-tight mb-2 count-up" data-prefix="€" data-suffix="M+" data-target="2.4">
                €0M+
              </div>
<div className="text-sm lg:text-base font-medium text-white mb-1.5">
                Saved
              </div>
<div className="text-[10px] lg:text-xs text-white/40 font-light uppercase tracking-widest">
                For clients (annual total)
              </div>
</div>
<div className="flex flex-col items-center justify-center py-16 px-10 text-center border-t lg:border-t-0 border-white/10 reveal-element" style={{transitionDelay: '150ms'}}>
<div className="text-4xl lg:text-5xl font-semibold text-indigo-500 tracking-tight mb-2 count-up" data-suffix="%" data-target="287">
                0%
              </div>
<div className="text-sm lg:text-base font-medium text-white mb-1.5">
                Avg ROI
              </div>
<div className="text-[10px] lg:text-xs text-white/40 font-light uppercase tracking-widest">
                In first year
              </div>
</div>
<div className="flex flex-col items-center justify-center py-16 px-10 text-center border-t sm:border-t-0 sm:border-l border-white/10 reveal-element" style={{transitionDelay: '200ms'}}>
<div className="text-4xl lg:text-5xl font-semibold text-indigo-500 tracking-tight mb-2 count-up" data-decimals="1" data-target="9.2">
                0.0
              </div>
<div className="text-sm lg:text-base font-medium text-white mb-1.5">
                Days
              </div>
<div className="text-[10px] lg:text-xs text-white/40 font-light uppercase tracking-widest">
                Average delivery time
              </div>
</div>
<div className="flex flex-col items-center justify-center py-16 px-10 text-center border-t lg:border-t-0 border-white/10 reveal-element sm:col-span-2 lg:col-span-1" style={{transitionDelay: '250ms'}}>
<div className="text-4xl lg:text-5xl font-semibold text-indigo-500 tracking-tight mb-2 count-up" data-suffix="%" data-target="100">
                0%
              </div>
<div className="text-sm lg:text-base font-medium text-white mb-1.5">
                On-Time
              </div>
<div className="text-[10px] lg:text-xs text-white/40 font-light uppercase tracking-widest">
                Or money-back guarantee
              </div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#020202] border-b border-white/5 py-16 overflow-hidden relative z-20">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none"></div>

<div className="flex mb-8">
<div className="flex animate-marquee-left whitespace-nowrap group">

<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:git-branch" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 3v12"></path>
<circle cx="18" cy="6" r="3"></circle>
<circle cx="6" cy="18" r="3"></circle>
<path d="M18 9a9 9 0 0 1-9 9"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Workflow Automation
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:plug" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22v-5m3-9V2m2 6a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1zM9 8V2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  API Integrations
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:layout-dashboard" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Custom Dashboards
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:box" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Inventory Systems
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Client Portals
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:bar-chart-3" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Reporting Automation
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:users" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  CRM Development
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:settings-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M14 17H5M19 7h-9"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Process Optimization
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:refresh-cw" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M8 16H3v5"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Data Sync Systems
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:signpost" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13v8m0-18v3m6 0a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Lead Routing
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:credit-card" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<path d="M2 10h20"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Billing Automation
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:target" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Project Tracking
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:file-text" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Document Workflow
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:shopping-cart" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Order Management
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:lock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Authentication Systems
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:banknote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
<circle cx="12" cy="12" r="2"></circle>
<path d="M6 12h.01M18 12h.01"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Payment Processing
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:bell" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Notification Engines
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:shield" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Admin Panels
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:server" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<path d="M6 6h.01M6 18h.01"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Multi-Tenant SaaS
                </span>
</div>
</div>

<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:git-branch" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 3v12"></path>
<circle cx="18" cy="6" r="3"></circle>
<circle cx="6" cy="18" r="3"></circle>
<path d="M18 9a9 9 0 0 1-9 9"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Workflow Automation
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:plug" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22v-5m3-9V2m2 6a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1zM9 8V2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  API Integrations
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:layout-dashboard" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Custom Dashboards
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:box" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Inventory Systems
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Client Portals
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:bar-chart-3" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Reporting Automation
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:users" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  CRM Development
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:settings-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M14 17H5M19 7h-9"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Process Optimization
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:refresh-cw" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M8 16H3v5"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Data Sync Systems
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:signpost" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13v8m0-18v3m6 0a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Lead Routing
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:credit-card" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<path d="M2 10h20"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Billing Automation
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:target" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Project Tracking
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:file-text" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Document Workflow
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:shopping-cart" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Order Management
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:lock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Authentication Systems
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:banknote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
<circle cx="12" cy="12" r="2"></circle>
<path d="M6 12h.01M18 12h.01"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Payment Processing
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:bell" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Notification Engines
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:shield" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Admin Panels
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:server" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<path d="M6 6h.01M6 18h.01"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Multi-Tenant SaaS
                </span>
</div>
</div>
</div>
</div>

<div className="flex">
<div className="flex animate-marquee-right whitespace-nowrap group">

<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:user-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Role-based Access
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:file-clock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5M8 14v2.2l1.6 1"></path>
<circle cx="8" cy="16" r="6"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Audit Trails
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Performance Optimization
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:shield-alert" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Security Hardening
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:brain-circuit" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path>
<circle cx="16" cy="13" r=".5"></circle>
<circle cx="18" cy="3" r=".5"></circle>
<circle cx="20" cy="21" r=".5"></circle>
<circle cx="20" cy="8" r=".5"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  AI-powered Workflows
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:line-chart" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M3 3v18h18"></path>
<path d="m19 9l-5 5l-4-4l-3 3"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Predictive Analytics
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:check-square" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Compliance Automation
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:database" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
<path d="M3 12a9 3 0 0 0 18 0"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Legacy System Integration
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:activity" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Real-time Monitoring
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:clipboard-list" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Custom Reporting
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:truck" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Supplier Sync
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:heart-handshake" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Customer Success Tools
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Approval Workflows
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:arrow-left-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Transaction Coordination
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:calendar" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M8 2v4m8-4v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Scheduling Systems
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:pie-chart" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Resource Allocation
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:scan" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Inventory Intelligence
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:webhook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
<path d="m6 17l3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
<path d="m12 6l3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Webhook Integrations
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:share-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Third-party APIs
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:database-zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5v14a9 3 0 0 0 12 2.84M21 5v3m0 4l-3 5h4l-3 5"></path>
<path d="M3 12a9 3 0 0 0 11.59 2.87"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Database Optimization
                </span>
</div>
</div>

<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:user-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Role-based Access
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:file-clock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5M8 14v2.2l1.6 1"></path>
<circle cx="8" cy="16" r="6"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Audit Trails
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Performance Optimization
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:shield-alert" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Security Hardening
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:brain-circuit" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path>
<circle cx="16" cy="13" r=".5"></circle>
<circle cx="18" cy="3" r=".5"></circle>
<circle cx="20" cy="21" r=".5"></circle>
<circle cx="20" cy="8" r=".5"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  AI-powered Workflows
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:line-chart" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M3 3v18h18"></path>
<path d="m19 9l-5 5l-4-4l-3 3"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Predictive Analytics
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:check-square" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Compliance Automation
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:database" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
<path d="M3 12a9 3 0 0 0 18 0"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Legacy System Integration
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:activity" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Real-time Monitoring
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:clipboard-list" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Custom Reporting
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:truck" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Supplier Sync
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:heart-handshake" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Customer Success Tools
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Approval Workflows
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:arrow-left-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Transaction Coordination
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:calendar" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M8 2v4m8-4v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Scheduling Systems
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:pie-chart" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Resource Allocation
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:scan" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Inventory Intelligence
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:webhook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
<path d="m6 17l3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
<path d="m12 6l3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Webhook Integrations
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:share-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Third-party APIs
                </span>
</div>
<div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" data-icon="lucide:database-zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5v14a9 3 0 0 0 12 2.84M21 5v3m0 4l-3 5h4l-3 5"></path>
<path d="M3 12a9 3 0 0 0 11.59 2.87"></path>
</g>
</svg>
<span className="text-xs font-medium tracking-[0.2em] text-white uppercase">
                  Database Optimization
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="block-bg border-t border-white/5 py-20 relative z-10" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-element">
<span className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase mb-4 block">
              The Good Software Paradox
            </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              You're trapped between three bad options:
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative flex flex-col rounded-xl border border-white/10 bg-[#080808] p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 reveal-element" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-5 border border-indigo-500/20 text-indigo-400">
<svg aria-hidden="true" data-icon="lucide:building-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                BIG AGENCIES
              </h3>
<div className="inline-flex self-start px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/50 mb-6">
                Promise: "Enterprise quality, proven process"
              </div>
<div className="mb-3 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                Reality:
              </div>
<ul className="space-y-2.5 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>€80k-200k+ budgets</span>
</li>
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>3-6 month timelines</span>
</li>
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>You pay for junior devs &amp; admin overhead</span>
</li>
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>70% budget is "risk mitigation theater"</span>
</li>
</ul>
<div className="mt-auto p-3 rounded-md bg-white/[0.03] border border-white/5 text-white/80 text-xs font-medium leading-relaxed group-hover:border-white/10 transition-colors">
                Result: Expensive insurance policy, slow execution
              </div>
</div>

<div className="group relative flex flex-col rounded-xl border border-white/10 bg-[#080808] p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 reveal-element" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-5 border border-indigo-500/20 text-indigo-400">
<svg aria-hidden="true" data-icon="lucide:user" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                FREELANCERS
              </h3>
<div className="inline-flex self-start px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/50 mb-6">
                Promise: "Fast, flexible, affordable"
              </div>
<div className="mb-3 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                Reality:
              </div>
<ul className="space-y-2.5 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>Quick start, slow finish</span>
</li>
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>Ghosting after 60% done</span>
</li>
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>Code breaks when they leave</span>
</li>
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>Security? "We'll add that later"</span>
</li>
</ul>
<div className="mt-auto p-3 rounded-md bg-white/[0.03] border border-white/5 text-white/80 text-xs font-medium leading-relaxed group-hover:border-white/10 transition-colors">
                Result: Technical debt bomb
              </div>
</div>

<div className="group relative flex flex-col rounded-xl border border-white/10 bg-[#080808] p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 reveal-element" style={{transitionDelay: '300ms'}}>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-5 border border-indigo-500/20 text-indigo-400">
<svg aria-hidden="true" data-icon="lucide:server" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<path d="M6 6h.01M6 18h.01"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                INTERNAL IT
              </h3>
<div className="inline-flex self-start px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/50 mb-6">
                Promise: "We'll build it ourselves"
              </div>
<div className="mb-3 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                Reality:
              </div>
<ul className="space-y-2.5 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>"We'll get to it Q3" (never happens)</span>
</li>
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>Backlog of 47 priorities</span>
</li>
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>Engineers want product, not tools</span>
</li>
<li className="flex items-start gap-2 text-sm text-white/60 font-light">
<span className="text-indigo-500/70 mt-0.5">→</span>
<span>6 months later: still using spreadsheets</span>
</li>
</ul>
<div className="mt-auto p-3 rounded-md bg-white/[0.03] border border-white/5 text-white/80 text-xs font-medium leading-relaxed group-hover:border-white/10 transition-colors">
                Result: Opportunity cost bleeding you dry
              </div>
</div>
</div>
<div className="mt-16 text-center reveal-element">
<div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
<p className="text-lg md:text-xl text-white/80 font-light tracking-tight">
              You need enterprise discipline without enterprise dysfunction.
            </p>
<p className="text-indigo-400 font-medium mt-2">That's EPIA.</p>
</div>
</div>
</section>

<section className="block-bg border-t border-white/5 py-[120px] relative z-10" id="execution">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-[72px] reveal-element">
<span className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase mb-4 block">
              THE 10X EXECUTION ENGINE
            </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              How we deliver in 10 days what takes agencies 4 months
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="group flex flex-col bg-[#080808] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 reveal-element" style={{transitionDelay: '50ms'}}>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
<svg aria-hidden="true" data-icon="lucide:building" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-6 tracking-tight">
                20 Years Enterprise Systems Knowledge
              </h3>
<div className="text-sm text-white/60 font-light mb-4">
                We've built systems for:
              </div>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-white/80">
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
                  Banks: $500M+/day
                </li>
<li className="flex items-center gap-2 text-sm text-white/80">
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
                  Healthcare: 200k records
                </li>
<li className="flex items-center gap-2 text-sm text-white/80">
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
                  Real Estate: 30k+ agents
                </li>
</ul>
<div className="mt-auto text-sm text-white/50 font-light leading-relaxed">
                We know what breaks at scale. We know what regulators want. We
                know enterprise architecture. This knowledge is built into our
                process templates.
              </div>
</div>

<div className="group flex flex-col bg-[#080808] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 reveal-element" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
<svg aria-hidden="true" data-icon="lucide:users" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-6 tracking-tight">
                Senior-Only Teams
              </h3>
<div className="space-y-3 mb-6">
<div className="p-3 rounded bg-white/[0.02] border border-dashed border-white/10">
<div className="text-[10px] font-mono uppercase text-white/40 mb-1">
                    Agencies:
                  </div>
<div className="text-sm text-white/60">
                    1 senior + 3 juniors = learning on your $
                  </div>
</div>
<div className="p-3 rounded bg-indigo-500/5 border border-indigo-500/20">
<div className="text-[10px] font-mono uppercase text-indigo-400 mb-1">
                    EPIA:
                  </div>
<div className="text-sm text-white">
                    100% senior devs = execution only
                  </div>
</div>
</div>
<div className="mt-auto">
<div className="text-sm text-white/60 font-light mb-4">
                  Our developers:
                </div>
<ul className="space-y-1 mb-6">
<li className="text-xs text-white/50">• 10-20 years exp</li>
<li className="text-xs text-white/50">
                    • Built systems for Fortune 500
                  </li>
<li className="text-xs text-white/50">
                    • Specialize in fast delivery
                  </li>
</ul>
<div className="text-xs font-medium text-white/80">
                  You pay for mastery, not mentorship.
                </div>
</div>
</div>

<div className="group flex flex-col bg-[#080808] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 reveal-element" style={{transitionDelay: '150ms'}}>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
<svg aria-hidden="true" data-icon="lucide:sparkles" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-6 tracking-tight">
                AI-Augmented Development Pipeline
              </h3>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<div className="text-[10px] font-mono text-indigo-400 mb-2 uppercase">
                    AI For:
                  </div>
<ul className="space-y-1">
<li className="text-[11px] text-white/60">Boilerplate code</li>
<li className="text-[11px] text-white/60">Test generation</li>
<li className="text-[11px] text-white/60">Docs</li>
<li className="text-[11px] text-white/60">Optimization</li>
</ul>
</div>
<div>
<div className="text-[10px] font-mono text-red-400 mb-2 uppercase">
                    NO AI For:
                  </div>
<ul className="space-y-1">
<li className="text-[11px] text-white/60">Business logic</li>
<li className="text-[11px] text-white/60">Architecture</li>
<li className="text-[11px] text-white/60">Security</li>
</ul>
</div>
</div>
<div className="mt-auto">
<div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded text-center mb-4">
<div className="text-xs font-medium text-indigo-200">
                    Human design + AI execution = 3-5x speed boost
                  </div>
</div>
<div className="text-[10px] text-white/40 text-center uppercase tracking-widest">
                  Every line reviewed by seniors
                </div>
</div>
</div>

<div className="group flex flex-col bg-[#080808] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 reveal-element" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
<svg aria-hidden="true" data-icon="lucide:layout-template" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-6 tracking-tight">
                Battle-Tested Process Templates
              </h3>
<div className="text-sm text-white/60 font-light mb-4">
                40 projects taught us patterns:
              </div>
<ul className="space-y-2.5 mb-8">
<li className="flex justify-between items-center border-b border-white/5 pb-1">
<span className="text-xs text-white/70">E-commerce ops</span>
<span className="text-xs font-mono text-indigo-400">12</span>
</li>
<li className="flex justify-between items-center border-b border-white/5 pb-1">
<span className="text-xs text-white/70">Agency workflows</span>
<span className="text-xs font-mono text-indigo-400">8</span>
</li>
<li className="flex justify-between items-center border-b border-white/5 pb-1">
<span className="text-xs text-white/70">Prof services</span>
<span className="text-xs font-mono text-indigo-400">7</span>
</li>
</ul>
<div className="mt-auto text-sm text-white/50 font-light leading-relaxed">
                We don't start from zero. We customize proven architecture. Your
                project gets learnings from 40 predecessors.
              </div>
</div>
</div>
<div className="mt-16 text-center reveal-element">
<div className="h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
<p className="text-lg text-white font-medium tracking-tight">
              Result: 10-day delivery without compromising quality
            </p>
</div>
</div>
</section>
<section className="block-bg border-t border-white/5 py-[100px] relative z-10" id="expertise">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16 reveal-element">
<span className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase mb-4 block">
              ENTERPRISE DISCIPLINE, STARTUP EXECUTION
            </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
              We don't just write code. We architect business systems.
            </h2>
<p className="text-white/50 text-sm font-light max-w-2xl mx-auto">
              20 years building for enterprise taught us what matters:
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

<div className="reveal-element rounded-xl border border-green-500/20 bg-[#080808] p-10 h-full hover:border-green-500/30 transition-colors duration-300">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-green-400">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
                  What we TOOK from enterprise:
                </h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div className="text-white font-medium">
                      Security-first architecture
                    </div>
<div className="text-xs text-white/40 font-light mt-1">
                      (because banks taught us: breaches kill)
                    </div>
</div>
</li>
<li className="flex items-start gap-4">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div className="text-white font-medium">
                      Audit trail everything
                    </div>
<div className="text-xs text-white/40 font-light mt-1">
                      (because regulators taught us: prove it)
                    </div>
</div>
</li>
<li className="flex items-start gap-4">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div className="text-white font-medium">
                      Performance at scale
                    </div>
<div className="text-xs text-white/40 font-light mt-1">
                      (because 30k agents taught us: slow = lost revenue)
                    </div>
</div>
</li>
<li className="flex items-start gap-4">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div className="text-white font-medium">
                      Graceful degradation
                    </div>
<div className="text-xs text-white/40 font-light mt-1">
                      (because €500M/day taught us: downtime is unacceptable)
                    </div>
</div>
</li>
</ul>
</div>

<div className="reveal-element rounded-xl border border-red-500/20 bg-[#080808] p-10 h-full hover:border-red-500/30 transition-colors duration-300" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center text-red-400">
<svg aria-hidden="true" data-icon="lucide:x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">
                  What we LEFT BEHIND:
                </h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<svg aria-hidden="true" data-icon="lucide:x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="text-white/80 font-light">
                    6-month procurement cycles
                  </div>
</li>
<li className="flex items-start gap-4">
<svg aria-hidden="true" data-icon="lucide:x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="text-white/80 font-light">
                    Change management committees
                  </div>
</li>
<li className="flex items-start gap-4">
<svg aria-hidden="true" data-icon="lucide:x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="text-white/80 font-light">
                    40-page requirements documents
                  </div>
</li>
<li className="flex items-start gap-4">
<svg aria-hidden="true" data-icon="lucide:x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="text-white/80 font-light">
                    Weekly status meetings with 12 people
                  </div>
</li>
</ul>
</div>
</div>

<div className="reveal-element rounded-xl bg-indigo-500/5 border border-indigo-500/10 p-10 text-center relative overflow-hidden">
<div className="relative z-10">
<span className="text-xs font-mono uppercase text-indigo-400 tracking-widest block mb-6">
                The result:
              </span>
<p className="text-white/60 text-sm font-light mb-8">
                When you describe a business problem, we ask:
              </p>
<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10 text-left">
<div className="flex gap-4 p-4 rounded bg-[#020202]/50 border border-white/5 items-center">
<svg aria-hidden="true" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-white text-lg font-medium tracking-tight">
                    "What happens if this breaks at 3am?"
                  </span>
</div>
<div className="flex gap-4 p-4 rounded bg-[#020202]/50 border border-white/5 items-center">
<svg aria-hidden="true" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-white text-lg font-medium tracking-tight">
                    "Who else will need access in 6 months?"
                  </span>
</div>
<div className="flex gap-4 p-4 rounded bg-[#020202]/50 border border-white/5 items-center">
<svg aria-hidden="true" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-white text-lg font-medium tracking-tight">
                    "What regulatory requirements apply?"
                  </span>
</div>
<div className="flex gap-4 p-4 rounded bg-[#020202]/50 border border-white/5 items-center">
<svg aria-hidden="true" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-white text-lg font-medium tracking-tight">
                    "How does this scale when you 3x?"
                  </span>
</div>
</div>
<div className="max-w-2xl mx-auto space-y-8">
<p className="text-white/50 text-sm font-light leading-relaxed">
                  These aren't annoying questions. These are the questions that
                  separate systems that last from expensive throwaway code.
                </p>
<div className="h-px w-32 bg-indigo-500/20 mx-auto"></div>
<p className="text-white text-xl font-medium tracking-tight">
                  We're business system architects who code.

                  <span className="text-white/40 font-normal">
                    Not coders who dabble in business.
                  </span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="block-bg border-t border-white/5 py-24 relative z-10" id="solution">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 reveal-element">
<span className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase mb-4 block">
              WHAT YOU'RE ACTUALLY BUYING
            </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white max-w-2xl">
              Business leverage that compounds, not depreciates.
            </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="group relative flex flex-col rounded-xl border border-white/10 bg-[#080808] p-8 hover:border-white/20 transition-all duration-300 reveal-element">
<div className="mb-6 flex items-start justify-between">
<div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
<svg aria-hidden="true" data-icon="lucide:trending-up" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 7h6v6"></path>
<path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
</g>
</svg>
</div>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                Operational systems that create competitive moats
              </h3>
<p className="text-sm text-white/60 font-light mb-8 leading-relaxed">
                Not "a tool your team uses" — Systems that make your business
                harder to compete with.
              </p>
<div className="mt-auto border-t border-white/5 pt-6">
<details className="group/accordion">
<summary className="flex cursor-pointer items-center justify-between text-xs font-medium uppercase tracking-widest text-white/40 hover:text-white transition-colors list-none outline-none">
<span>Examples</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="pt-4 space-y-4">
<div className="flex gap-3">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
<path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
</g>
</svg>
<div>
<div className="text-xs font-medium text-white mb-0.5">
                          E-commerce
                        </div>
<div className="text-xs text-white/50 font-light leading-relaxed">
                          Inventory intelligence that prevents stockouts while
                          competitors lose €45k/quarter to oversells
                        </div>
</div>
</div>
<div className="flex gap-3">
<svg aria-hidden="true" data-icon="lucide:briefcase" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</g>
</svg>
<div>
<div className="text-xs font-medium text-white mb-0.5">
                          Agencies
                        </div>
<div className="text-xs text-white/50 font-light leading-relaxed">
                          Client reporting automation that lets you serve 2x
                          clients with same team
                        </div>
</div>
</div>
<div className="flex gap-3">
<svg aria-hidden="true" data-icon="lucide:users" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
<div>
<div className="text-xs font-medium text-white mb-0.5">
                          Professional Services
                        </div>
<div className="text-xs text-white/50 font-light leading-relaxed">
                          Workflow automation that turns 80-hour weeks into
                          50-hour weeks at same revenue
                        </div>
</div>
</div>
</div>
</details>
<div className="mt-6 text-xs font-medium text-indigo-300 border-l-2 border-indigo-500/50 pl-3">
                  Day 11: Your operations run differently than competitors. That
                  gap widens every month.
                </div>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-white/10 bg-[#080808] p-8 hover:border-white/20 transition-all duration-300 reveal-element" style={{transitionDelay: '100ms'}}>
<div className="mb-6 flex items-start justify-between">
<div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
<svg aria-hidden="true" data-icon="lucide:lock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</g>
</svg>
</div>
</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">
                Fixed investment, not open-ended consulting
              </h3>
<div className="mb-2 flex items-baseline gap-2">
<span className="text-3xl font-medium text-white tracking-tight">
                  €4,799 - €9,999
                </span>
</div>
<p className="text-[10px] text-white/40 mb-6 font-mono uppercase tracking-widest">
                Depending on complexity
              </p>
<div className="p-3 rounded bg-white/5 border border-white/10 text-xs text-white/80 mb-6">
                Not "we'll see how it goes" — locked price, locked scope.
              </div>
<div className="mt-auto border-t border-white/5 pt-6">
<details className="group/accordion">
<summary className="flex cursor-pointer items-center justify-between text-xs font-medium uppercase tracking-widest text-white/40 hover:text-white transition-colors list-none outline-none">
<span>What this covers</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<ul className="pt-4 space-y-2">
<li className="flex items-center gap-2 text-xs text-white/60 font-light">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                      Business process analysis &amp; mapping
                    </li>
<li className="flex items-center gap-2 text-xs text-white/60 font-light">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                      System architecture &amp; development
                    </li>
<li className="flex items-center gap-2 text-xs text-white/60 font-light">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                      Integration with existing tools
                    </li>
<li className="flex items-center gap-2 text-xs text-white/60 font-light">
<svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                      Security &amp; performance optimization
                    </li>
</ul>
</details>
<p className="mt-4 text-[10px] text-white/30 leading-snug">
                  *Typical scope: automation workflows, integrations,
                  dashboards, internal tools, customer-facing features. Large
                  platforms (50+ features) broken into 10-day sprint cycles.
                </p>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-white/10 bg-[#080808] p-8 hover:border-white/20 transition-all duration-300 reveal-element" style={{transitionDelay: '200ms'}}>
<div className="mb-6 flex items-start justify-between">
<div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
<svg aria-hidden="true" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h3 className="text-2xl font-medium text-white mb-6 tracking-tight">
                Execution speed that preserves momentum
              </h3>
<div className="space-y-4 mb-8">
<div>
<div className="flex justify-between text-[10px] font-mono text-white/40 mb-1">
<span>TRADITIONAL AGENCY</span>
<span>3-6 MONTHS</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-white/20 w-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-mono text-indigo-300 mb-1">
<span>EPIA</span>
<span>10 DAYS</span>
</div>
<div className="h-1.5 w-full bg-indigo-500/20 rounded-full overflow-hidden relative">
<div className="h-full bg-indigo-500 w-[10%] shadow-[0_0_10px_#6366f1]"></div>
</div>
</div>
</div>
<div className="mt-auto">
<div className="text-[10px] font-mono font-medium uppercase tracking-widest text-white/40 mb-3">
                  Why this matters
                </div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-white/60 font-light">
<div className="w-1 h-1 bg-white/40 rounded-full"></div>
                    Market windows close
                  </li>
<li className="flex items-center gap-2 text-xs text-white/60 font-light">
<div className="w-1 h-1 bg-white/40 rounded-full"></div>
                    Team motivation dies waiting
                  </li>
<li className="flex items-center gap-2 text-xs text-white/60 font-light">
<div className="w-1 h-1 bg-white/40 rounded-full"></div>
                    Opportunity cost compounds daily
                  </li>
</ul>
<div className="text-xs font-medium text-white/80 border-l-2 border-white/20 pl-3">
                  Your competitive advantage comes from execution velocity, not
                  perfect planning.
                </div>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-white/10 bg-[#080808] p-8 hover:border-white/20 transition-all duration-300 reveal-element" style={{transitionDelay: '300ms'}}>
<div className="mb-6 flex items-start justify-between">
<div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
<svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</div>
</div>
<h3 className="text-2xl font-medium text-white mb-8 tracking-tight">
                Delivery guarantee backed by contract
              </h3>
<div className="space-y-6 mb-8 flex-1">
<div className="flex gap-4">
<div className="text-4xl font-light text-white/20 font-mono">
                    01
                  </div>
<div>
<div className="text-sm font-medium text-white">
                      We finish at our cost
                    </div>
<div className="text-xs text-white/50 font-light mt-1">
                      If we miss the deadline, we continue working for free.
                    </div>
</div>
</div>
<div className="flex gap-4">
<div className="text-4xl font-light text-white/20 font-mono">
                    02
                  </div>
<div>
<div className="text-sm font-medium text-white">
                      Full refund
                    </div>
<div className="text-xs text-white/50 font-light mt-1">
                      If we can't deliver the agreed scope.
                    </div>
</div>
</div>
</div>
<div className="mt-auto">
<div className="text-xs font-medium text-white/80 border-l-2 border-white/20 pl-3 mb-6">
                  Not "we'll try our best" — actual contractual obligation.
                </div>
<div className="rounded bg-white/5 border border-white/10 p-4">
<div className="flex items-center gap-3 mb-2">
<div className="flex -space-x-1">
<div className="w-2 h-2 rounded-full bg-green-500 ring-2 ring-[#080808]"></div>
<div className="w-2 h-2 rounded-full bg-green-500 ring-2 ring-[#080808] opacity-50"></div>
<div className="w-2 h-2 rounded-full bg-green-500 ring-2 ring-[#080808] opacity-25"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-green-400">
                      Track Record
                    </span>
</div>
<div className="text-xs text-white/70 font-light leading-relaxed">
<span className="text-white font-medium">40 projects</span>
                    delivered.
                    <span className="text-white font-medium">100%</span>
                    on-time record. Average delivery:
                    <span className="text-white font-medium">9.2 days</span>
                    .
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="block-bg border-t border-white/5 max-w-7xl mx-auto px-6 py-20 relative z-10" id="portfolio">
<div className="flex items-end justify-between mb-8 reveal-element">
<div>
<h2 className="text-2xl font-medium text-white mb-1">
              Implemented Cases
            </h2>
<p className="text-white/50 text-xs font-light">
              15 solutions. Adaptive architecture.
            </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[120px] gap-4 grid-flow-dense">

<div className="shiny-card col-span-2 row-span-2 group overflow-visible reveal-element" onclick="openModal('FinTech Ecosystem', 'Asset management, KYC, and transfers.', 'lucide:layout-dashboard')" style={{-GradientShine: '#818cf8', -GradientAngleOffset: '15deg', transitionDelay: '50ms'}}>
<div className="card-content h-full p-6 flex flex-col justify-between relative overflow-hidden rounded-xl">
<div className="absolute right-[-40px] top-[-20px] w-64 h-64 opacity-20 pointer-events-none iso-plane">
<div className="w-full h-full bg-indigo-500/10 border border-indigo-500/30 rounded-lg grid grid-cols-2 gap-2 p-2">
<div className="bg-indigo-500/20 rounded"></div>
<div className="bg-indigo-500/20 rounded"></div>
<div className="col-span-2 bg-indigo-500/20 rounded h-12"></div>
</div>
</div>
<div className="flex justify-between items-start z-10">
<span className="inline-flex items-center rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 text-[10px] font-medium text-indigo-300">
                  FinTech
                </span>
</div>
<div className="z-10">
<h3 className="text-3xl font-medium tracking-tight text-white mb-2">
                  Banking Core
                </h3>
<p className="text-white/50 text-xs">
                  Full financial cycle management.
                </p>
</div>
</div>
</div>

<div className="shiny-card col-span-2 row-span-1 reveal-element" onclick="openModal('Logistics Chain', 'Real-time shipment tracking.', 'lucide:truck')" style={{-GradientShine: '#10b981', -GradientAngleOffset: '90deg', transitionDelay: '100ms'}}>
<div className="card-content h-full p-5 flex items-center justify-between relative overflow-hidden">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-[1px] bg-emerald-500/10 border-t border-dashed border-emerald-500/30"></div>
<div className="absolute left-0 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" style={{animation: 'slide 4s linear infinite'}}></div>
<style>
                  @keyframes slide { 0% { left: 0; opacity:0; } 10% { opacity:1; } 90% { opacity:1; } 100% { left: 100%; opacity:0; } }
                </style>
</div>
<div className="z-10">
<h3 className="text-lg font-medium text-white">Logistics</h3>
<p className="text-[10px] text-white/50 mt-0.5">Global tracking</p>
</div>
<svg aria-hidden="true" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
</g>
</svg>
</div>
</div>

<div className="shiny-card col-span-2 row-span-2 lg:col-span-2 reveal-element" onclick="openModal('CyberSecurity', 'Threat monitoring and data protection.', 'lucide:shield-check')" style={{-GradientShine: '#ef4444', -GradientAngleOffset: '45deg', transitionDelay: '150ms'}}>
<div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
<div className="w-64 h-64 rounded-full border border-red-500/20 relative">
<div className="absolute inset-0 rounded-full radar-scan"></div>
</div>
</div>
<div className="card-content h-full p-6 flex flex-col justify-between">
<svg aria-hidden="true" data-icon="lucide:lock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</g>
</svg>
<div>
<h3 className="text-2xl font-medium text-white mb-1">SecOps</h3>
<p className="text-white/50 text-xs">Threat monitoring 24/7.</p>
</div>
</div>
</div>

<div className="shiny-card col-span-1 row-span-1 reveal-element" onclick="openModal('HR Tech', 'Recruitment automation.', 'lucide:users-2')" style={{-GradientShine: '#f43f5e', -GradientAngleOffset: '45deg', transitionDelay: '200ms'}}>
<div className="card-content h-full p-4 flex flex-col justify-between">
<svg aria-hidden="true" data-icon="lucide:users-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5"></circle>
<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
</g>
</svg>
<div>
<h3 className="text-sm font-medium text-white">HR</h3>
<p className="text-[9px] text-white/40 mt-1">Recruiting</p>
</div>
</div>
</div>

<div className="shiny-card col-span-1 row-span-1 reveal-element" onclick="openModal('Crypto P2P', 'Crypto exchange and wallet.', 'lucide:bitcoin')" style={{-GradientShine: '#f59e0b', -GradientAngleOffset: '120deg', transitionDelay: '250ms'}}>
<div className="card-content h-full p-4 flex flex-col justify-between">
<svg aria-hidden="true" data-icon="lucide:bitcoin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042l-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893l-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042l.348-1.97M7.48 20.364l3.126-17.727" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<h3 className="text-sm font-medium text-white">Crypto</h3>
<p className="text-[9px] text-white/40 mt-1">P2P Exchange</p>
</div>
</div>
</div>

<div className="shiny-card col-span-2 row-span-2 reveal-element" onclick="openModal('PropTech OS', 'Property management system.', 'lucide:building-2')" style={{-GradientShine: '#38bdf8', -GradientAngleOffset: '300deg', transitionDelay: '300ms'}}>
<div className="card-content h-full p-6 flex flex-col justify-between overflow-hidden relative">
<div className="absolute -right-8 top-8 w-32 h-40 opacity-30 pointer-events-none">
<div className="w-full h-full bg-sky-500/20 border border-sky-400/30 rounded-lg absolute top-0 left-0 transform rotate-6 translate-x-4"></div>
<div className="w-full h-full bg-sky-500/20 border border-sky-400/30 rounded-lg absolute top-2 left-2 transform rotate-3 translate-x-2"></div>
<div className="w-full h-full bg-sky-500/20 border border-sky-400/30 rounded-lg absolute top-4 left-4 z-10"></div>
</div>
<div className="flex justify-between items-start">
<span className="inline-flex items-center rounded-full bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 text-[10px] font-medium text-sky-300">
                  PropTech
                </span>
</div>
<div className="z-10 relative">
<h3 className="text-2xl font-medium text-white mb-2">
                  Estate Manager
                </h3>
<p className="text-white/50 text-xs">Rent and sales.</p>
</div>
</div>
</div>

<div className="shiny-card col-span-2 row-span-1 overflow-hidden reveal-element" onclick="openModal('AI Analytics', 'Predictive analytics.', 'lucide:brain-circuit')" style={{-GradientShine: '#a855f7', -GradientAngleOffset: '180deg', transitionDelay: '350ms'}}>
<div className="absolute inset-0 opacity-10 pointer-events-none p-2 font-mono text-[8px] leading-3 text-purple-400 overflow-hidden">
<div className="scrolling-text">
                010101001 SYSTEM INIT LOADING DATA... ANALYSIS COMPLETE
                010101001 VECTOR 5 PREDICTION: 99% 010101001 SYSTEM INIT LOADING
                DATA... ANALYSIS COMPLETE 010101001 VECTOR 5 PREDICTION: 99%
              </div>
</div>
<div className="card-content h-full p-5 flex items-center justify-between relative z-10">
<div>
<h3 className="text-lg font-medium text-white">AI Core</h3>
<p className="text-[10px] text-white/50 mt-0.5">
                  Predictive Models
                </p>
</div>
<svg aria-hidden="true" data-icon="lucide:brain-circuit" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path>
<circle cx="16" cy="13" r=".5"></circle>
<circle cx="18" cy="3" r=".5"></circle>
<circle cx="20" cy="21" r=".5"></circle>
<circle cx="20" cy="8" r=".5"></circle>
</g>
</svg>
</div>
</div>

<div className="shiny-card col-span-1 row-span-1 reveal-element" onclick="openModal('MedTech CRM', 'Clinic CRM.', 'lucide:activity')" style={{-GradientShine: '#06b6d4', -GradientAngleOffset: '200deg', transitionDelay: '400ms'}}>
<div className="card-content h-full p-4 flex flex-col justify-between">
<svg aria-hidden="true" data-icon="lucide:activity" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<h3 className="text-sm font-medium text-white">MedTech</h3>
<p className="text-[9px] text-white/40 mt-1">Clinics</p>
</div>
</div>
</div>

<div className="shiny-card col-span-1 row-span-1 reveal-element" onclick="openModal('Legal Tech', 'Lawyer knowledge base.', 'lucide:scale')" style={{-GradientShine: '#8b5cf6', -GradientAngleOffset: '280deg', transitionDelay: '450ms'}}>
<div className="card-content h-full p-4 flex flex-col justify-between">
<svg aria-hidden="true" data-icon="lucide:scale" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path>
</g>
</svg>
<div>
<h3 className="text-sm font-medium text-white">Legal</h3>
<p className="text-[9px] text-white/40 mt-1">Docs</p>
</div>
</div>
</div>

<div className="shiny-card col-span-1 row-span-1 reveal-element" onclick="openModal('EdTech LMS', 'Learning platform.', 'lucide:graduation-cap')" style={{-GradientShine: '#ec4899', -GradientAngleOffset: '10deg', transitionDelay: '500ms'}}>
<div className="card-content h-full p-4 flex flex-col justify-between">
<svg aria-hidden="true" data-icon="lucide:graduation-cap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path>
<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</g>
</svg>
<div>
<h3 className="text-sm font-medium text-white">EdTech</h3>
<p className="text-[9px] text-white/40 mt-1">LMS</p>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-[#020202] border-b border-white/5 py-12 overflow-hidden relative z-10">
<div className="flex">
<div className="flex animate-marquee-left whitespace-nowrap group">

<div className="flex items-center gap-16 px-8">
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                FORTUNE 500 BANK
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                LEADING REAL ESTATE PLATFORM
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                GLOBAL HEALTHCARE PROVIDER
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                ENTERPRISE SaaS COMPANY
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                TOP MARKETING AGENCY
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                MULTI-NATIONAL LEGAL FIRM
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                E-COMMERCE LEADER
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                LOGISTICS INNOVATOR
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
</div>

<div className="flex items-center gap-16 px-8">
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                FORTUNE 500 BANK
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                LEADING REAL ESTATE PLATFORM
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                GLOBAL HEALTHCARE PROVIDER
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                ENTERPRISE SaaS COMPANY
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                TOP MARKETING AGENCY
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                MULTI-NATIONAL LEGAL FIRM
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                E-COMMERCE LEADER
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                LOGISTICS INNOVATOR
              </span>
<div className="w-1 h-1 rounded-full bg-indigo-500"></div>
</div>
</div>
</div>
</section>

<section className="relative max-w-4xl mx-auto px-6 py-24 z-10" id="process">

<div className="text-center mb-20 reveal-element">
<span className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase mb-4 block">
            THE 10-DAY PROCESS
          </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
            The 10-Day Process
          </h2>
<p className="text-white/50 text-sm font-light">
            (No meetings by default. Everything async unless you need a call.)
          </p>
</div>

<div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-6">

<div className="reveal-element relative pl-8 md:pl-12 group" style={{transitionDelay: '100ms'}}>

<div className="absolute -left-[5px] top-6 w-[11px] h-[11px] bg-[#020202] border border-indigo-500 rounded-full z-10 shadow-[0_0_10px_rgba(99,102,241,0.3)]"></div>
<div className="rounded-xl border border-white/10 bg-[#080808] p-6 hover:border-white/20 transition-all duration-300">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-indigo-400 tracking-widest bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
                    DAY 0-1
                  </span>
<h3 className="text-lg font-medium text-white tracking-tight">
                    BUSINESS ANALYSIS
                  </h3>
</div>
<span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                  (before clock starts)
                </span>
</div>

<div className="space-y-4">
<details className="group/acc">
<summary className="flex cursor-pointer items-center justify-between text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors outline-none list-none">
<span>What happens</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="pt-4 pl-4">
<ul className="space-y-2">
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-indigo-500/50 mt-1">•</span>
                        You describe what problem you're solving
                        (video/text/call—your choice)
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-indigo-500/50 mt-1">•</span>
                        We ask clarifying questions about your workflow
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-indigo-500/50 mt-1">•</span>
                        Our business analyst maps your current process
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-indigo-500/50 mt-1">•</span>
                        We identify what tool will have highest ROI
                      </li>
</ul>
</div>
</details>
<details className="group/acc">
<summary className="flex cursor-pointer items-center justify-between text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors outline-none list-none">
<span>What you get</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="pt-4 pl-4">
<ul className="space-y-2">
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<svg aria-hidden="true" data-icon="lucide:file-text" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path>
</g>
</svg>
                        Business requirements document (not tech jargon—plain
                        English)
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<svg aria-hidden="true" data-icon="lucide:image" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</g>
</svg>
                        Mockups of what we'll build
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<svg aria-hidden="true" data-icon="lucide:list-checks" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4M3 7l2 2l4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                        Exact list of what's included/excluded
                      </li>
</ul>
</div>
</details>
</div>
<div className="mt-6 pt-4 border-t border-white/5">
<div className="bg-indigo-500/10 border border-indigo-500/20 rounded px-3 py-2 text-xs text-indigo-200 font-medium inline-block">
                  Your approval = clock starts.
                </div>
</div>
</div>
</div>

<div className="reveal-element relative pl-8 md:pl-12 group" style={{transitionDelay: '200ms'}}>

<div className="absolute -left-[5px] top-6 w-[11px] h-[11px] bg-[#020202] border border-indigo-500/50 rounded-full z-10"></div>
<div className="rounded-xl border border-white/10 bg-[#080808] p-6 hover:border-white/20 transition-all duration-300">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-white/40 tracking-widest bg-white/5 px-2 py-1 rounded border border-white/10">
                    DAYS 2-3
                  </span>
<h3 className="text-lg font-medium text-white tracking-tight">
                    ARCHITECTURE &amp; DATA MODELING
                  </h3>
</div>
</div>
<div className="space-y-4">
<details className="group/acc">
<summary className="flex cursor-pointer items-center justify-between text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors outline-none list-none">
<span>What happens</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="pt-4 pl-4">
<ul className="space-y-2">
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-indigo-500/50 mt-1">•</span>
                        Database schema design (PostgreSQL/Supabase)
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-indigo-500/50 mt-1">•</span>
                        API endpoint definition
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-indigo-500/50 mt-1">•</span>
                        Authentication system setup (RBAC)
                      </li>
</ul>
</div>
</details>
<details className="group/acc">
<summary className="flex cursor-pointer items-center justify-between text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors outline-none list-none">
<span>What you get</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="pt-4 pl-4">
<ul className="space-y-2">
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<svg aria-hidden="true" data-icon="lucide:database" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
<path d="M3 12a9 3 0 0 0 18 0"></path>
</g>
</svg>
                        Entity Relationship Diagram (ERD)
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<svg aria-hidden="true" data-icon="lucide:link" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</g>
</svg>
                        Staging environment link (live but empty)
                      </li>
</ul>
</div>
</details>
</div>
</div>
</div>

<div className="reveal-element relative pl-8 md:pl-12 group" style={{transitionDelay: '300ms'}}>
<div className="absolute -left-[5px] top-6 w-[11px] h-[11px] bg-[#020202] border border-indigo-500/50 rounded-full z-10"></div>
<div className="rounded-xl border border-white/10 bg-[#080808] p-6 hover:border-white/20 transition-all duration-300">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-white/40 tracking-widest bg-white/5 px-2 py-1 rounded border border-white/10">
                    DAYS 4-8
                  </span>
<h3 className="text-lg font-medium text-white tracking-tight">
                    THE BUILD SPRINT
                  </h3>
</div>
</div>
<div className="space-y-4">
<details className="group/acc">
<summary className="flex cursor-pointer items-center justify-between text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors outline-none list-none">
<span>What happens</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="pt-4 pl-4">
<ul className="space-y-2">
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-indigo-500/50 mt-1">•</span>
                        Frontend Interface construction (Next.js/React)
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-indigo-500/50 mt-1">•</span>
                        Business logic implementation
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-indigo-500/50 mt-1">•</span>
                        Third-party integrations (Stripe, SendGrid, etc.)
                      </li>
</ul>
</div>
</details>
<details className="group/acc">
<summary className="flex cursor-pointer items-center justify-between text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors outline-none list-none">
<span>What you get</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="pt-4 pl-4">
<ul className="space-y-2">
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<svg aria-hidden="true" data-icon="lucide:video" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
<rect height="12" rx="2" width="14" x="2" y="6"></rect>
</g>
</svg>
                        Daily 2-min Loom updates showing progress
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<svg aria-hidden="true" data-icon="lucide:layout" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18M9 21V9"></path>
</g>
</svg>
                        Testable features pushed to staging daily
                      </li>
</ul>
</div>
</details>
</div>
</div>
</div>

<div className="reveal-element relative pl-8 md:pl-12 group" style={{transitionDelay: '400ms'}}>
<div className="absolute -left-[5px] top-6 w-[11px] h-[11px] bg-[#020202] border border-white/20 rounded-full z-10 group-hover:border-green-500 transition-colors"></div>
<div className="rounded-xl border border-white/10 bg-[#080808] p-6 hover:border-green-500/30 transition-all duration-300">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-white/40 tracking-widest bg-white/5 px-2 py-1 rounded border border-white/10">
                    DAYS 9-10
                  </span>
<h3 className="text-lg font-medium text-white tracking-tight">
                    DEPLOYMENT &amp; HANDOFF
                  </h3>
</div>
</div>
<div className="space-y-4">
<details className="group/acc">
<summary className="flex cursor-pointer items-center justify-between text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors outline-none list-none">
<span>What happens</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="pt-4 pl-4">
<ul className="space-y-2">
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-green-500/50 mt-1">•</span>
                        Internal QA &amp; Load Testing
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-green-500/50 mt-1">•</span>
                        Migration to Production
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<span className="text-green-500/50 mt-1">•</span>
                        DNS propagation &amp; SSL setup
                      </li>
</ul>
</div>
</details>
<details className="group/acc" open="">
<summary className="flex cursor-pointer items-center justify-between text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors outline-none list-none">
<span>What you get</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="pt-4 pl-4">
<ul className="space-y-2">
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<svg aria-hidden="true" data-icon="lucide:key" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m15.5 7.5l2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4m2-2l-9.6 9.6"></path>
<circle cx="7.5" cy="15.5" r="5.5"></circle>
</g>
</svg>
<span className="text-white">Full IP Ownership:</span>
                        Source code repo &amp; credentials
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<svg aria-hidden="true" data-icon="lucide:graduation-cap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path>
<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</g>
</svg>
<span className="text-white">Training:</span>
                        Video walkthrough for your team
                      </li>
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
<span className="text-white">Warranty:</span>
                        30-day bug fix guarantee
                      </li>
</ul>
</div>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 border-t border-white/5 relative z-10" id="faq">
<h2 className="text-2xl font-medium text-white mb-12 text-center reveal-element">
          Frequent Questions
        </h2>
<div className="space-y-4 reveal-element">

<details className="group rounded-lg bg-[#080808] border border-white/5 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 list-none outline-none">
<span className="text-sm font-medium text-white">
                Is this low-code or real code?
              </span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed">
<p>
                Real, enterprise-grade code. We use Next.js, React, Node.js, and
                PostgreSQL. You get a GitHub repository at the end. The reason
                we are fast is because we use a modular architecture we've
                refined over 15 years, not because we use drag-and-drop tools
                that lock you in.
              </p>
</div>
</details>

<details className="group rounded-lg bg-[#080808] border border-white/5 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 list-none outline-none">
<span className="text-sm font-medium text-white">
                Who owns the IP?
              </span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed">
<p>
                You do. 100%. Upon final payment and handoff, we transfer the
                repository ownership to your organization. There are no
                recurring licensing fees from us, only your standard
                infrastructure costs (hosting, database, etc., usually
                ~$20-50/mo).
              </p>
</div>
</details>

<details className="group rounded-lg bg-[#080808] border border-white/5 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 list-none outline-none">
<span className="text-sm font-medium text-white">
                What happens after day 10?
              </span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed">
<p>
                We provide a 30-day warranty for any bugs found in the original
                scope. For future changes, you can either hire us for another
                sprint, hire a freelancer (since the code is standard), or sign
                up for our maintenance retainer (€499/mo) which covers updates
                and minor tweaks.
              </p>
</div>
</details>

<details className="group rounded-lg bg-[#080808] border border-white/5 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 list-none outline-none">
<span className="text-sm font-medium text-white">
                Why no meetings?
              </span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed">
<p>
                Meetings kill velocity. We communicate via async video updates
                (Loom) and a dedicated Slack channel. This allows our senior
                developers to stay in "flow state" for 4-6 hour blocks, which is
                how we deliver 3 months of work in 10 days. We are available for
                calls if there is a critical blocker, but we default to async.
              </p>
</div>
</details>
</div>
</section>
<section className="w-full bg-[#020202] border-t border-white/5 py-24 relative z-10" id="pricing-booking">
<div className="max-w-[1600px] mx-auto px-6">
<div className="flex flex-col xl:flex-row gap-8 items-stretch">

<div className="w-full xl:w-[30%] min-w-[320px] shrink-0 flex flex-col">
<div className="relative flex flex-col rounded-2xl border border-white/10 bg-[#080808] p-8 shadow-2xl transition-all duration-300 hover:border-white/20 hover:shadow-indigo-500/10 h-full">

<div className="flex justify-center mb-8">
<div className="relative bg-white/5 rounded-full p-1 flex items-center border border-white/5">
<div className="absolute left-1 top-1 bottom-1 w-24 bg-indigo-500 rounded-full transition-transform duration-300 ease-out shadow-lg shadow-indigo-500/20" id="toggle-pill-bg"></div>
<button className="relative z-10 w-24 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 text-white focus:outline-none" id="toggle-btn-sprint" onclick="switchPrice('sprint')">
                      Sprint
                    </button>
<button className="relative z-10 w-24 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 text-white/50 focus:outline-none" id="toggle-btn-system" onclick="switchPrice('system')">
                      System
                    </button>
</div>
</div>

<div className="transition-all duration-300" id="content-sprint">
<div className="mb-6">
<h3 className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-2">
                      SPRINT
                    </h3>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl font-medium text-white tracking-tight">
                        €4,700
                      </span>
</div>
<p className="text-xs text-white/50 font-light">
                      10 business days | Fixed scope
                    </p>
</div>
<div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3 mb-6">
<div className="text-xs font-medium text-indigo-300 text-center">
                      Typical savings: €26k+ annually
                    </div>
</div>
<div className="mb-6">
<div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
                      Perfect for
                    </div>
<div className="text-sm text-white">
                      Single operational bottleneck
                    </div>
</div>
<div className="space-y-3 mb-8 border-t border-white/5 pt-6">
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-white/70 font-light">
                        1-2 core automation workflows
                      </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-white/70 font-light">
                        1-2 API integrations
                      </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-white/70 font-light">
                        Functional UI (clean, professional)
                      </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-white/70 font-light">
                        Basic reporting &amp; analytics
                      </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-white/70 font-light">
                        Full source code ownership
                      </span>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-8">
<div className="text-[10px] uppercase tracking-widest text-white/40 mb-3">
                      Why this pays for itself
                    </div>
<div className="space-y-1">
<div className="text-xs font-medium text-white">
                        Inventory sync automation
                      </div>
<div className="text-xs text-white/50">
                        → Saves 10 hours/week manual work
                      </div>
<div className="text-xs text-white/50">
                        → €500/week × 52 weeks = €26k/year
                      </div>
<div className="text-xs text-green-400 font-medium mt-1">
                        → Payback: 3.5 weeks
                      </div>
</div>
</div>
<div className="mb-8 text-center space-y-1">
<div className="text-xs text-white/40">
                      Investment:
                      <span className="text-white">€4,700</span>
</div>
<div className="text-xs text-white/40">
                      First-year value:
                      <span className="text-green-400">€26k+</span>
</div>
<div className="text-xs font-medium text-indigo-400">
                      ROI: 450%+
                    </div>
</div>
<details className="group mb-8">
<summary className="flex cursor-pointer items-center justify-between text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors list-none outline-none">
<span>Common Sprint projects</span>
<svg className="w-3 h-3 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<ul className="pt-3 space-y-1.5 pl-2">
<li className="text-xs text-white/60">
                        • Shopify ↔ Supplier inventory sync
                      </li>
<li className="text-xs text-white/60">
                        • Lead routing automation
                      </li>
<li className="text-xs text-white/60">
                        • Invoice reconciliation system
                      </li>
<li className="text-xs text-white/60">
                        • Client onboarding workflow
                      </li>
</ul>
</details>
<button className="shiny-cta w-full py-4 text-sm justify-center mb-4">
<span>Book Sprint Slot →</span>
</button>
<div className="text-center text-[10px] text-white/30 uppercase tracking-widest">
                    Next available: Jan 27
                  </div>
</div>

<div className="hidden transition-all duration-300" id="content-system">
<div className="mb-6">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-xs font-mono text-indigo-400 tracking-widest uppercase">
                        SYSTEM
                      </h3>
<span className="px-1.5 py-0.5 rounded bg-indigo-500 text-[9px] font-bold text-white uppercase tracking-wider">
                        Most Popular
                      </span>
</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl font-medium text-white tracking-tight">
                        €9,000
                      </span>
</div>
<p className="text-xs text-white/50 font-light">
                      10 business days | Fixed scope
                    </p>
</div>
<div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3 mb-6">
<div className="text-xs font-medium text-indigo-300 text-center">
                      Typical savings: €78k+ annually
                    </div>
<div className="text-[10px] text-indigo-300/60 text-center mt-0.5">
                      OR unlock €100k+ revenue
                    </div>
</div>
<div className="mb-6">
<div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
                      Perfect for
                    </div>
<div className="text-sm text-white">
                      Department-wide transformation
                    </div>
</div>
<div className="space-y-3 mb-8 border-t border-white/5 pt-6">
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-white/70 font-light">
                        3-5 interconnected workflows
                      </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-white/70 font-light">
                        Advanced reporting &amp; dashboards
                      </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-white/70 font-light">
                        Custom UI design &amp; branding
                      </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-white/70 font-light">
                        Role-based access control
                      </span>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-white/70 font-light">
                        Full source code ownership
                      </span>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-8">
<div className="text-[10px] uppercase tracking-widest text-white/40 mb-3">
                      Why this is a no-brainer
                    </div>
<div className="space-y-1">
<div className="text-xs font-medium text-white">
                        Client tracking + reporting system
                      </div>
<div className="text-xs text-white/50">
                        → Ops team: 15h/week saved (€39k)
                      </div>
<div className="text-xs text-white/50">
                        → Client capacity: +40% (€100k+ rev)
                      </div>
<div className="text-xs text-green-400 font-medium mt-1">
                        → Total value: €170k+ annually
                      </div>
</div>
</div>
<div className="mb-8 text-center space-y-1">
<div className="text-xs text-white/40">
                      Investment:
                      <span className="text-white">€9,000</span>
</div>
<div className="text-xs text-white/40">
                      First-year value:
                      <span className="text-green-400">€78k-170k+</span>
</div>
<div className="text-xs font-medium text-indigo-400">
                      ROI: 750-1,800%
                    </div>
</div>
<details className="group mb-8">
<summary className="flex cursor-pointer items-center justify-between text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors list-none outline-none">
<span>Common System projects</span>
<svg className="w-3 h-3 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<ul className="pt-3 space-y-1.5 pl-2">
<li className="text-xs text-white/60">
                        • Complete client management platform
                      </li>
<li className="text-xs text-white/60">
                        • Multi-channel order management
                      </li>
<li className="text-xs text-white/60">
                        • Customer success automation suite
                      </li>
<li className="text-xs text-white/60">
                        • Multi-warehouse inventory intelligence
                      </li>
</ul>
</details>
<button className="shiny-cta w-full py-4 text-sm justify-center mb-4">
<span>Book System Slot →</span>
</button>
<div className="text-center text-[10px] text-white/30 uppercase tracking-widest">
                    Next available: Feb 3
                  </div>
</div>

<div className="mt-8 pt-6 border-t border-white/5">
<div className="flex items-start gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
<svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<div className="text-xs font-medium text-white/90">
                        Money-back guarantee
                      </div>
<div className="text-[10px] text-white/40 mt-0.5 leading-snug">
                        If we miss the 10-day deadline.
                        <br/>
                        40 projects. 100% on-time.
                      </div>
</div>
</div>
<div className="flex flex-col gap-2 text-center">
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">
                      Have questions? Schedule call →
                    </a>
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#portfolio">
                      See case studies →
                    </a>
</div>
</div>
</div>
</div>

<div className="w-full xl:w-[70%] flex flex-col gap-8">
<div className="w-full h-[630px] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] relative shrink-0">
<div id="my-cal-inline-30min" style={{width: '100%', height: '100%', overflow: 'scroll'}}></div>
<div className="absolute bottom-0 left-0 w-full h-8 bg-[#0A0A0A] z-20"></div>
</div>
<div className="relative flex flex-col md:flex-row rounded-2xl border border-white/10 bg-[#080808] p-8 shadow-2xl overflow-hidden group hover:border-white/20 transition-all duration-300 flex-1 min-h-min">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

<div className="w-full md:w-[30%] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/5">
<div className="relative w-24 h-24 rounded-full bg-indigo-500/10 flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-pulse"></div>
<svg aria-hidden="true" className="w-10 h-10 text-indigo-400" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<rect fill="none" height="4" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="8"></rect>
<path d="M12 8v13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-8 2.5 2.5 0 0 1 0 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="w-full md:w-[70%] md:pl-8 pt-6 md:pt-0 flex flex-col justify-between">
<div className="mb-6">
<span className="inline-block px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-2">
                      Referral Program
                    </span>
<h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                      Know someone who needs this?
                    </h3>
<p className="text-sm text-white/50">
                      Get paid for making introductions
                    </p>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-4 grid grid-cols-2 gap-4 mb-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div>
<div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">
                        You Get
                      </div>
<div className="text-2xl font-bold text-indigo-400 tracking-tight">
                        €1,000
                      </div>
<div className="text-[10px] text-white/50">
                        credit or €750 cash
                      </div>
</div>
<div className="border-l border-white/10 pl-4">
<div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">
                        They Get
                      </div>
<div className="text-2xl font-bold text-white tracking-tight">
                        €500
                      </div>
<div className="text-[10px] text-white/50">
                        discount on project
                      </div>
</div>
</div>
<div className="space-y-3 mb-6">
<div className="flex gap-3 items-start">
<div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] font-bold text-indigo-400 shrink-0 mt-0.5">
                        1
                      </div>
<div>
<div className="text-xs font-medium text-white">
                          Share link or intro us
                        </div>
<div className="text-[10px] text-white/40">
                          Send them your unique referral link
                        </div>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] font-bold text-indigo-400 shrink-0 mt-0.5">
                        2
                      </div>
<div>
<div className="text-xs font-medium text-white">
                          They book &amp; complete project
                        </div>
<div className="text-[10px] text-white/40">
                          Must be €4,700+ project value
                        </div>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] font-bold text-indigo-400 shrink-0 mt-0.5">
                        3
                      </div>
<div>
<div className="text-xs font-medium text-white">
                          You both get paid
                        </div>
<div className="text-[10px] text-white/40">
                          Credit applied within 48 hours
                        </div>
</div>
</div>
</div>
<div className="h-px w-full bg-white/5 mb-6"></div>
<div className="flex items-center gap-2 mb-6">
<div className="flex -space-x-1">
<div className="w-4 h-4 rounded-full bg-indigo-500/40 border border-[#080808]"></div>
<div className="w-4 h-4 rounded-full bg-indigo-500/60 border border-[#080808]"></div>
<div className="w-4 h-4 rounded-full bg-indigo-500 border border-[#080808]"></div>
</div>
<div className="text-[10px] text-white/40">
<span className="text-white">17 referrals</span>
                      made this month. Avg reward:
                      <span className="text-white">€2,250</span>
</div>
</div>
<div className="flex flex-col gap-3">
<button className="w-full bg-white text-black text-xs font-bold uppercase tracking-widest py-3 rounded hover:bg-gray-200 transition-colors">
                      Get Your Referral Link →
                    </button>
<div className="text-center">
<a className="text-[10px] text-white/40 hover:text-white transition-colors" href="mailto:referrals@epia.systems">
                        Or email intro to: referrals@epia.systems
                      </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-32 relative z-10 text-center border-t border-white/5 bg-gradient-to-b from-[#020202] to-[#050505]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-[#020202] to-[#020202] pointer-events-none"></div>
<div className="max-w-2xl mx-auto px-6 relative">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Ready to build?
          </h2>
<p className="text-lg text-white/50 font-light mb-10">
            Stop patching spreadsheets. Start building assets. The next 10-day
            slot opens next Monday.
          </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="shiny-cta h-12 px-8 text-sm">
<span>Book Discovery Sprint</span>
</button>
<button className="h-12 px-6 rounded-full border border-white/10 hover:bg-white/5 text-sm font-medium text-white transition-colors">
              View Pricing PDF
            </button>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            2 slots remaining for this month
          </div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-[2px]"></div>
<span className="font-bold text-white tracking-tighter">EPIA</span>
</div>
<div className="text-[11px] text-white/40 font-light">
            © 2024 EPIA Systems. All rights reserved. Enterprise discipline,
            startup speed.
          </div>
<div className="flex gap-6">
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:github" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</g>
</svg>
</a>
</div>
</div>
</footer>
</main>

<div className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4" id="modal-backdrop">
<div className="modal-content w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden" id="modal-content">
<button className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10" onclick="closeModal()">
<svg aria-hidden="true" data-icon="lucide:x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="h-32 bg-gradient-to-br from-indigo-900/20 to-black relative">
<div className="absolute bottom-6 left-6 p-3 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md text-indigo-400">
<svg aria-hidden="true" data-icon="lucide:box" height="1em" id="modal-icon" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path>
</g>
</svg>
</div>
</div>
<div className="p-8 pt-4">
<h3 className="text-2xl font-medium text-white mb-2" id="modal-title">
            Title
          </h3>
<p className="text-white/60 font-light leading-relaxed mb-8" id="modal-desc">
            Description goes here.
          </p>
<div className="space-y-4">
<div className="h-px w-full bg-white/5"></div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/40 uppercase tracking-widest">
                Delivery Time
              </span>
<span className="text-sm text-white font-mono">10 Days</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/40 uppercase tracking-widest">
                Tech Stack
              </span>
<span className="text-sm text-white font-mono">
                Next.js / Node / PG
              </span>
</div>
<div className="h-px w-full bg-white/5"></div>
</div>
<button className="mt-8 w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors" onclick="closeModal()">
            Close Case Study
          </button>
</div>
</div>
</div>



    </>
  );
}

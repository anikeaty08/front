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



    (function () {
      const el = document.getElementById('aura-emf5jfuh5');
      const toggle = el.querySelector('#billingToggle');
      const price = el.querySelector('#price');
      const unit = el.querySelector('#priceUnit');
      const desc = el.querySelector('#planDesc');
      const title = el.querySelector('#planTitle');
      const addon = el.querySelector('#addonNote');
      const scope = el.querySelector('#featureScope');
      const eta = el.querySelector('#etaValue');

      const states = {
        monthly: {
          price: '2500',
          unit: 'month',
          title: 'Subscription',
          desc: 'Ongoing support and flexible design when you need it. Ideal for startups, growing brands, and marketing teams needing consistent creative momentum.',
          addon: 'Optional SEO add‑on ($800/m)',
          scope: 'One active task at a time',
          eta: '48 hours'
        },
        project: {
          price: '4800',
          unit: 'project',
          title: 'Project Sprint',
          desc: 'Focused, milestone‑driven engagement for a defined scope. Perfect for launches, rebrands, or site upgrades.',
          addon: 'Add‑ons available by scope',
          scope: 'Scoped deliverables & milestones',
          eta: '1–2 weeks'
        }
      };

      function setBilling(mode) {
        const s = states[mode];
        if (!s) return;
        price.textContent = s.price;
        unit.textContent = s.unit;
        title.textContent = mode === 'monthly' ? 'Subscription' : 'Project Sprint';
        desc.textContent = s.desc;
        addon.textContent = s.addon;
        scope.textContent = s.scope;
        eta.textContent = s.eta;

        // Toggle button styles and aria
        toggle.querySelectorAll('[data-billing]').forEach(btn => {
          const active = btn.getAttribute('data-billing') === mode;
          btn.setAttribute('aria-pressed', String(active));
          btn.classList.toggle('bg-neutral-100', active);
          btn.classList.toggle('text-black', active);
          btn.classList.toggle('text-neutral-300', !active);
        });

        if (window.lucide) lucide.createIcons();
      }

      toggle.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-billing]');
        if (!btn) return;
        setBilling(btn.getAttribute('data-billing'));
      });

      if (window.lucide) lucide.createIcons();
    })();
  


      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();

        // Brand analysis chart
        const ctx = document.getElementById('brandAnalysis');
        if (ctx) {
          new Chart(ctx, {
            type: 'radar',
            data: {
              labels: ['Vision', 'Audience', 'Market', 'Values', 'Direction'],
              datasets: [{
                label: '',
                data: [85, 78, 65, 92, 45],
                backgroundColor: 'rgba(59,130,246,0.20)',
                borderColor: 'rgba(59,130,246,0.9)',
                pointBackgroundColor: 'rgba(59,130,246,1)',
                pointBorderColor: 'rgba(255,255,255,0.6)',
                pointRadius: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                r: {
                  angleLines: { color: 'rgba(255,255,255,0.06)' },
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  suggestedMin: 0,
                  suggestedMax: 100,
                  ticks: { display: false },
                  pointLabels: { color: 'rgba(228,228,231,0.7)', font: { size: 10 } }
                }
              },
              plugins: { legend: { display: false }, tooltip: { enabled: false } }
            }
          });
        }

        // Performance chart
        const perfCtx = document.getElementById('performanceChart');
        if (perfCtx) {
          new Chart(perfCtx, {
            type: 'line',
            data: {
              labels: ['Week 1', 'Week 4', 'Week 8', 'Week 12', 'Week 16', 'Week 20', 'Week 24'],
              datasets: [
                {
                  label: 'Brand Recognition',
                  data: [25, 35, 48, 62, 75, 85, 92],
                  borderColor: 'rgba(59,130,246,1)',
                  backgroundColor: 'rgba(59,130,246,0.1)',
                  tension: 0.4
                },
                {
                  label: 'Digital Engagement',
                  data: [15, 28, 42, 58, 71, 82, 89],
                  borderColor: 'rgba(96,165,250,1)',
                  backgroundColor: 'rgba(96,165,250,0.1)',
                  tension: 0.4
                },
                {
                  label: 'Brand Awareness',
                  data: [10, 22, 38, 54, 68, 78, 87],
                  borderColor: 'rgba(147,197,253,1)',
                  backgroundColor: 'rgba(147,197,253,0.1)',
                  tension: 0.4
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  ticks: { 
                    color: 'rgba(228,228,231,0.7)',
                    callback: function(value) { return value + '%'; }
                  }
                },
                x: {
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  ticks: { color: 'rgba(228,228,231,0.7)' }
                }
              },
              plugins: {
                legend: { 
                  display: true,
                  labels: { color: 'rgba(228,228,231,0.9)' }
                }
              }
            }
          });
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="x6cbPWi9roeeiZ8cuBu3"></div>
</div>

<nav className="relative max-w-6xl sm:px-6 lg:px-8 bg-neutral-950 rounded-3xl mt-4 mr-auto ml-auto pt-2 pr-20 pb-2 pl-20">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<span className="text-lg font-medium tracking-tight font-geist text-neutral-100" style={{}}>Lumina Studio</span>
</div>
<div className="flex items-center gap-6">
<a className="text-sm transition-colors font-geist text-neutral-400 hover:text-neutral-100" href="#journey" style={{}}>Process</a>
<a className="text-sm transition-colors font-geist text-neutral-400 hover:text-neutral-100" href="#capabilities" style={{}}>Services</a>
<a className="text-sm transition-colors font-geist text-neutral-400 hover:text-neutral-100" href="#results" style={{}}>Work</a>
<button className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-colors font-geist border-white/10 bg-white/5 text-neutral-100 hover:bg-white/10" style={{}}>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              Start project
            </button>
</div>
</div>
</div>
</nav>

<section className="relative overflow-hidden sm:py-10 pt-20 pb-10">
<div className="relative max-w-6xl sm:px6 lg:px-8 min-h-[520px] sm:min-h-[640px] lg:min-h-[760px] flex flex-col bg-neutral-950 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d0a38672-ee19-40e5-8a8f-ddcf0d834caa_1600w.jpg)] bg-cover rounded-3xl mr-auto ml-auto pt-10 pr-20 pb-10 pl-20" style={{containerType: 'inline-size'}}>

<header className="sm:mb-16 mb-12">
<span className="block text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[9vw] font-semibold pr-1" style={{overflow: 'hidden', letterSpacing: '-0.15em'}}>
<span className="tracking-tighter font-geist" style={{display: 'inline-block', animation: '0.8s ease-out 0s 1 normal forwards running letterSlideIn', transform: 'translateY(-100%)', opacity: '0'}}>L</span>
<span className="tracking-tighter font-geist" style={{display: 'inline-block', animation: '0.8s ease-out 0.1s 1 normal forwards running letterSlideIn', transform: 'translateY(-100%)', opacity: '0'}}>U</span>
<span className="tracking-tighter font-geist" style={{display: 'inline-block', animation: '0.8s ease-out 0.2s 1 normal forwards running letterSlideIn', transform: 'translateY(-100%)', opacity: '0'}}>M</span>
<span className="tracking-tighter font-geist" style={{display: 'inline-block', animation: '0.8s ease-out 0.3s 1 normal forwards running letterSlideIn', transform: 'translateY(-100%)', opacity: '0'}}>I</span>
<span className="tracking-tighter font-geist" style={{display: 'inline-block', animation: '0.8s ease-out 0.4s 1 normal forwards running letterSlideIn', transform: 'translateY(-100%)', opacity: '0'}}>N</span>
<span className="tracking-tighter font-geist" style={{display: 'inline-block', animation: '0.8s ease-out 0.5s 1 normal forwards running letterSlideIn', transform: 'translateY(-100%)', opacity: '0'}}>A</span>
<style>
          @keyframes letterSlideIn {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
        
            50% {
              opacity: 0.5;
            }
        
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        </style>
</span>
</header>

<div className="relative grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 mt-auto">

<div className="flex flex-col justify-between">
<div className="hidden sm:block"></div>
<div className="flex gap-4 space-y-6 items-start">
<div className="mt-1 w-6 h-12 border-l border-b border-white/20 rounded-sm"></div>
<div className="space-y-4">
<p className="text-sm font-geist text-neutral-300 leading-6" style={{}}>Design-based digital studio</p>
<div className="inline-block bg-transparent">
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap'); @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; } @property --gradient-shine { syntax: "<color>"; initial-value: #3b82f6; inherits: false; } .shiny-cta { --gradient-angle: 0deg; --gradient-angle-offset: 0deg; --gradient-percent: 20%; --gradient-shine: #3b82f6; --shadow-size: 2px; position: relative; overflow: hidden; border-radius: 9999px; padding: 1.25rem 2.5rem; font-size: 1.125rem; line-height: 1.2; font-weight: 500; color: #ffffff; background: linear-gradient(#000000, #000000) padding-box, conic-gradient( from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #1d4ed8 5%, var(--gradient-shine) 15%, #1d4ed8 30%, transparent 40%, transparent 100% ) border-box; border: 2px solid transparent; box-shadow: inset 0 0 0 1px #1a1818; outline: none; transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s; cursor: pointer; isolation: isolate; outline-offset: 4px; font-family: 'Inter', 'Helvetica Neue', sans-serif; z-index: 0; animation: border-spin 2.5s linear infinite; } @keyframes border-spin { to { --gradient-angle: 360deg; } } .shiny-cta:active { transform: translateY(1px); } .shiny-cta::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0; --size: calc(100% - 6px); --position: 2px; --space: 4px; width: var(--size); height: var(--size); background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box; background-size: var(--space) var(--space); background-repeat: space; mask-image: conic-gradient( from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black ); border-radius: inherit; opacity: 0.4; pointer-events: none; } .shiny-cta::after { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; width: 100%; aspect-ratio: 1; background: linear-gradient(-50deg, transparent, #1d4ed8, transparent); mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.6; animation: shimmer 4s linear infinite; animation-play-state: running; } .shiny-cta span { position: relative; z-index: 2; display: inline-block; } .shiny-cta span::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; --size: calc(100% + 1rem); width: var(--size); height: var(--size); box-shadow: inset 0 -1ex 2rem 4px #1d4ed8; opacity: 0; border-radius: inherit; transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1); animation: breathe 4.5s linear infinite; } @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg);} } @keyframes breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1);} 50% { transform: translate(-50%, -50%) scale(1.20);} }
  </style>
<button className="flex gap-2 ring-1 ring-white/20 hover:bg-white/15 transition-colors text-sm text-neutral-950 font-geist bg-white rounded-full pt-3 pr-6 pb-3 pl-6 items-center justify-center" style={{}}>Explore Work<svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
</div>
</div>
</div>

<div className="flex items-end">
<p className="text-2xl sm:text-3xl font-geist font-light tracking-tight text-neutral-300" style={{}}>
        We shape tomorrow's brands with <span className="font-semibold text-white" style={{}}>boldness</span>, <span className="text-neutral-400" style={{}}>vision</span>, and <span className="font-semibold text-white" style={{}}>collaborative</span> spirit. Welcome to our agency, where innovation thrives.
      </p>
</div>
</div>
</div>
</section>

<section className="sm:py- pt-0 pb-10">
<div className="relative max-w-6xl sm:px-6 lg:px-8 bg-neutral-950 rounded-3xl mr-auto ml-auto pt-10 pr-20 pb-10 pl-20">
<div className="animate-[slideUp_0.6s_ease-out] text-center mb-16">
<h2 className="sm:text-7xl text-4xl font-light text-white tracking-tighter font-geist mb-6" style={{}}>What Sets Us Apart</h2>
<p className="text-lg max-w-2xl mx-auto font-geist text-neutral-400" style={{}}>Experience the Lumina difference through our proven approach, exceptional results, and unwavering commitment to your success.</p>
</div>
<div className="animate-[slideUp_0.6s_ease-out_0.5s_both] bg-neutral-900/40 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7b3a5f3f-a38a-47b5-8f19-6d90cb6f3137_800w.jpg)] bg-cover border-white/10 border rounded-2xl">
<div className="relative h-[440px] sm:h-[520px] sm:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3">
<div className="">
<p className="text-sm font-geist text-neutral-300" style={{}}>Our Edge</p>
<p className="text-xs sm:text-sm mt-1 font-geist text-neutral-400" style={{}}>Strategic Design Thinking</p>
</div>
</div>
<div className="mt-auto">
<div className="sm:text-4xl text-2xl font-semibold text-white tracking-tight font-geist mb-4" style={{}}>Design with<span className="text-blue-500" style={{}}>Purpose</span></div>
<div className="flex items-center gap-2 text-neutral-200 mb-6">
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-blue-500"></div>
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
<div className="h-2 w-2 rounded-full bg-blue-600"></div>
</div>
<p className="text-sm font-geist" style={{}}>Every pixel has intention</p>
</div>
<div className="flex items-center gap-2 text-xs font-geist text-neutral-300" style={{}}>
              Discover our approach
              <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="relative sm:p-8 overflow-hidden bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="pointer-events-none absolute inset-0 opacity-20" style={{background: 'repeating-radial-gradient(circle at 80% -20%, rgba(59,130,246,0.08) 0 1px, transparent 1px 60px)'}}></div>
<div className="relative">
<p className="text-sm font-geist text-neutral-400" style={{}}>Proven Results:</p>
<h3 className="mt-2 text-2xl sm:text-3xl font-geist font-light tracking-tight text-neutral-100" style={{}}>
<span className="font-semibold text-blue-500" style={{}}>3x</span> faster project delivery, <span className="font-semibold text-blue-400" style={{}}>2x</span> higher engagement
          </h3>
<p className="mt-8 text-sm font-geist text-neutral-400" style={{}}>Our Methodology:</p>
<div className="mt-4 space-y-3">
<div className="flex items-center gap-3 text-sm font-geist text-neutral-200" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              Strategic Discovery &amp; Research
            </div>
<div className="flex items-center gap-3 text-sm font-geist text-neutral-200" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
              Collaborative Design Process
            </div>
<div className="flex items-center gap-3 text-sm font-geist text-neutral-200" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              Data-Driven Optimization
            </div>
</div>
<div className="mt-8 rounded-xl border p-5 border-white/10 bg-black/30">
<div className="flex items-center gap-1 text-amber-300 mb-3">
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-3 text-sm font-geist text-neutral-300" style={{}}>"Lumina doesn't just create designs—they craft experiences. Their strategic thinking elevated our entire brand presence."</p>
<div className="mt-4 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/096dab35-ecaf-418f-a932-5b514543b035_320w.jpg"/>
<div className="text-sm">
<p className="font-geist text-neutral-200" style={{}}>Michael Torres</p>
<p className="text-xs text-neutral-500 font-geist" style={{}}>CEO, Innovation Labs</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-rows-2 gap-6">

<div className="rounded-2xl border p-6 sm:p-8 border-white/10 bg-white/5">
<div className="flex items-center sm:block">
<div className="relative h-28 w-28 sm:mx-auto">
<div className="absolute inset-0 rounded-full bg-blue-500"></div>
<div className="absolute inset-[10px] rounded-full bg-black/40 flex items-center justify-center">
<svg className="lucide lucide-shield-check text-blue-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="ml-5 sm:ml-0 sm:mt-6 text-center">
<h4 className="text-lg font-geist font-light tracking-tight text-white" style={{}}>100% Satisfaction</h4>
<p className="mt-2 text-sm font-geist text-neutral-400" style={{}}>Guaranteed results or we'll make it right. Your success is our mission.</p>
</div>
</div>
</div>

<div className="rounded-2xl border p-6 sm:p-8 border-white/10 bg-white/5">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="">
<div className="text-2xl font-geist font-light tracking-tight text-white" style={{}}>150+</div>
<p className="text-xs mt-1 font-geist text-neutral-400" style={{}}>Projects delivered</p>
</div>
<div className="">
<div className="text-2xl font-geist font-light tracking-tight text-white" style={{}}>48h</div>
<p className="text-xs mt-1 font-geist text-neutral-400" style={{}}>Average start time</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm font-geist">
<span className="text-neutral-300" style={{}}>Brand Strategy</span>
<span className="text-blue-500" style={{}}>Expert</span>
</div>
<div className="flex items-center justify-between text-sm font-geist">
<span className="text-neutral-300" style={{}}>Visual Design</span>
<span className="text-blue-400" style={{}}>Expert</span>
</div>
<div className="flex items-center justify-between text-sm font-geist">
<span className="text-neutral-300" style={{}}>Digital Marketing</span>
<span className="text-blue-600" style={{}}>Expert</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs font-geist text-neutral-300" style={{}}>
<svg className="lucide lucide-check text-green-400" data-lucide="check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Lumina Certified Team
            </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="sm:py-0 pt-16 pb-16">
</section><section className="sm:py- pt-0 pb-0" id="capabilities">
<div className="relative max-w-6xl sm:px-6 lg:px-8 bg-neutral-950 rounded-3xl mr-auto ml-auto pt-10 pr-20 pb-10 pl-20">
<div className="animate-[slideUp_0.6s_ease-out] text-center mb-16">
<h2 className="sm:text-7xl text-4xl font-light text-white tracking-tighter font-geist mb-6" style={{}}>Creative Services</h2>
<p className="text-lg max-w-2xl mx-auto font-geist text-neutral-400" style={{}}>Comprehensive creative solutions designed to elevate your brand across every touchpoint and platform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl border p-6 animate-[slideUp_0.6s_ease-out_0.1s_both] border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 relative overflow-hidden border-white/10 bg-white/5">
<div className="flex items-center justify-center">
<div className="grid grid-cols-2 gap-4 w-full">

<div className="col-span-2 h-16 rounded-lg bg-blue-500 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-blue-400/20"></div>
<span className="text-white text-xl font-bold relative z-10" style={{}}>L</span>
</div>

<div className="h-12 rounded bg-blue-500 flex items-center justify-center border border-blue-400/30">
<span className="text-white text-sm font-bold" style={{}}>L</span>
</div>
<div className="h-12 rounded border-2 border-blue-500 flex items-center justify-center bg-white/5 backdrop-blur-sm">
<span className="text-blue-400 text-sm font-bold" style={{}}>L</span>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2" style={{}}>Brand Identity Design</h3>
<p className="text-sm font-geist text-neutral-400" style={{}}>Create memorable visual identities with custom logos, color systems, and brand guidelines that capture your essence.</p>
</div>
</div>

<div className="rounded-xl border p-6 animate-[slideUp_0.6s_ease-out_0.2s_both] border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 border-white/10 bg-white/5">
<div className="space-y-3">

<div className="rounded border flex items-center gap-2 p-2 border-white/10 bg-black/30">
<div className="flex gap-1">
<div className="h-2 w-2 rounded-full bg-rose-500/80"></div>
<div className="h-2 w-2 rounded-full bg-amber-400/80"></div>
<div className="h-2 w-2 rounded-full bg-cyan-400/80"></div>
</div>
<div className="h-2 flex-1 rounded bg-white/10"></div>
</div>

<div className="space-y-2">
<div className="h-3 w-3/4 rounded bg-white/10"></div>
<div className="h-2 w-full rounded bg-white/10"></div>
<div className="h-2 w-5/6 rounded bg-white/10"></div>
</div>

<div className="flex justify-center">
<div className="h-6 w-20 rounded bg-blue-500/60"></div>
</div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2" style={{}}>Web Design &amp; Development</h3>
<p className="text-sm font-geist text-neutral-400" style={{}}>Design and build responsive, user-friendly websites that engage visitors and drive conversions across all devices.</p>
</div>
</div>

<div className="rounded-xl border p-6 animate-[slideUp_0.6s_ease-out_0.3s_both] border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 space-y-3 border-white/10 bg-white/5">

<div className="grid grid-cols-2 gap-2">
<div className="rounded border p-2 space-y-1 border-white/10 bg-black/30">
<div className="h-2 w-3/4 rounded bg-white/10"></div>
<div className="h-8 rounded bg-blue-500/30"></div>
<div className="flex gap-1">
<div className="h-1 w-3 rounded bg-white/10"></div>
<div className="h-1 w-3 rounded bg-white/10"></div>
</div>
</div>
<div className="rounded border p-2 space-y-1 border-white/10 bg-black/30">
<div className="h-2 w-3/4 rounded bg-white/10"></div>
<div className="h-8 rounded bg-blue-600/30"></div>
<div className="flex gap-1">
<div className="h-1 w-3 rounded bg-white/10"></div>
<div className="h-1 w-3 rounded bg-white/10"></div>
</div>
</div>
</div>
<div className="flex justify-center">
<button className="rounded px-3 py-1 ring-1 text-xs bg-white/5 ring-white/10 text-neutral-200" style={{}}>Create Campaign</button>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2" style={{}}>Digital Marketing</h3>
<p className="text-sm font-geist text-neutral-400" style={{}}>Develop strategic campaigns across social media, email, and digital channels to amplify your brand reach.</p>
</div>
</div>

<div className="rounded-xl border p-6 animate-[slideUp_0.6s_ease-out_0.4s_both] border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 space-y-3 border-white/10 bg-white/5">
<div className="grid grid-cols-3 gap-2">

<div className="rounded border p-2 aspect-[3/2] border-white/10 bg-black/30">
<div className="h-1 w-2/3 rounded mb-2 bg-white/10"></div>
<div className="h-1 w-1/2 rounded bg-white/10"></div>
</div>

<div className="rounded border p-2 aspect-[3/4] border-white/10 bg-black/30">
<div className="h-3 rounded mb-1 bg-blue-500/30"></div>
<div className="space-y-1">
<div className="h-1 w-full rounded bg-white/10"></div>
<div className="h-1 w-3/4 rounded bg-white/10"></div>
</div>
</div>

<div className="rounded border p-2 aspect-square border-white/10 bg-black/30">
<div className="h-2 w-2 rounded mb-2 bg-blue-500/50"></div>
<div className="space-y-1">
<div className="h-1 w-full rounded bg-white/10"></div>
<div className="h-1 w-2/3 rounded bg-white/10"></div>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2" style={{}}>Print &amp; Packaging Design</h3>
<p className="text-sm font-geist text-neutral-400" style={{}}>Design compelling print materials and packaging that make lasting impressions in physical spaces.</p>
</div>
</div>

<div className="rounded-xl border p-6 animate-[slideUp_0.6s_ease-out_0.5s_both] border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 border-white/10 bg-white/5">
<div className="rounded bg-black relative overflow-hidden h-24">
<div className="absolute inset-0 bg-blue-500/20"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center">
<svg className="lucide lucide-play text-black" data-lucide="play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>

<div className="absolute bottom-2 left-2 right-2">
<div className="h-1 rounded bg-white/20">
<div className="h-1 w-1/3 rounded bg-blue-500"></div>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2" style={{}}>Video Production</h3>
<p className="text-sm font-geist text-neutral-400" style={{}}>Produce engaging video content from concept to post-production for marketing, social media, and brand storytelling.</p>
</div>
</div>

<div className="rounded-xl border p-6 animate-[slideUp_0.6s_ease-out_0.6s_both] border-white/10 bg-neutral-900/40 flex flex-col">
<div className="rounded-lg border p-4 mb-5 relative border-white/10 bg-white/5">
<div className="grid grid-cols-2 gap-3">

<div className="space-y-2">
<div className="text-[11px] font-geist text-neutral-400" style={{}}>Strategy</div>
<div className="space-y-1">
<div className="rounded px-2 py-1 text-[10px] bg-blue-500/20 text-blue-300" style={{}}>Brand Positioning</div>
<div className="rounded px-2 py-1 text-[10px] bg-blue-400/20 text-blue-300" style={{}}>Market Research</div>
<div className="rounded px-2 py-1 text-[10px] bg-blue-600/20 text-blue-300" style={{}}>Creative Direction</div>
</div>
</div>

<div className="space-y-2">
<div className="text-[11px] font-geist text-neutral-400" style={{}}>Session Notes</div>
<div className="space-y-1">
<div className="h-1 w-full rounded bg-white/10"></div>
<div className="h-1 w-3/4 rounded bg-white/10"></div>
<div className="h-1 w-5/6 rounded bg-white/10"></div>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight font-geist mb-2" style={{}}>Creative Consulting</h3>
<p className="text-sm font-geist text-neutral-400" style={{}}>Partner with our creative strategists to develop comprehensive brand strategies and innovative creative solutions.</p>
</div>
</div>
</div>
</div>
</section><section className="sm:py-0 my-10 pt-16 pb-16" id="journey">
</section>

<section className="sm:py- pt-0 pb-10" id="capabilities">
<div className="relative max-w-6xl sm:px-6 lg:px-8 bg-neutral-950 rounded-3xl mr-auto ml-auto pt-10 pr-20 pb-10 pl-20">

<div className="animate-[slideUp_0.6s_ease-out] text-center mb-16">
<h2 className="sm:text-7xl text-4xl font-light text-white tracking-tighter font-geist mb-6" style={{}}>The faces behind your vision.</h2>
<p className="text-lg max-w-2xl mx-auto mt-6 font-geist text-neutral-400" style={{}}>Our passionate team of designers, strategists, and creatives who bring your brand to life with expertise and dedication.</p>
</div>

<div className="overflow-hidden animate-[slideUp_0.6s_ease-out_0.1s_both] rounded-2xl">
<section className="sm:p-8 bg-zinc-900 rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6" style={{position: 'relative', overflow: 'hidden'}}>

<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col justify-between min-h-full">
<div className="">
<span className="text-sm font-normal text-zinc-500 font-geist" style={{}}>Creative Excellence</span>
<h3 className="text-3xl sm:text-4xl lg:text-5xl leading-[0.9] text-zinc-100 mt-2 font-geist font-medium tracking-tighter" style={{}}>Passionate creators, innovative thinkers.</h3>

<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-zinc-600 bg-zinc-900 px-4 relative">
<div className="flex items-center gap-2">
<svg className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-sm font-normal font-geist" style={{}}>Passion Driven</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-normal font-geist" style={{}}>Collaborative</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-normal font-geist" style={{}}>Innovative</span>
</div>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<p className="text-sm text-zinc-100 font-medium tracking-tight font-geist" style={{}}>Meet our creative team</p>
<p className="mt-1 text-sm text-zinc-400 font-geist" style={{}}>Talented individuals who pour their expertise and creativity into every project, ensuring your vision comes to life.</p>
<button className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition font-geist" style={{}}>
                View Full Team
                <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
</div>

<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent sm:block hidden"></div>
<p className="text-base text-zinc-300 leading-relaxed sm:text-right sm:pl-8 font-geist" style={{}}>
                With over <span className="font-medium text-zinc-100 font-geist" style={{}}>50+ years</span> of combined experience, our team brings
                <span className="font-medium text-zinc-100 font-geist" style={{}}>diverse perspectives</span>
                and specialized skills to every creative challenge.
              </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">

<article className="relative overflow-hidden h-[200px] bg-zinc-800 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1494790108755-2616b6ec1842?q=80&amp;w=800&amp;auto=format&amp;fit=crop)] bg-cover hover:scale-105 transition-transform duration-500" style={{}}></div>
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e228a9ba-003e-469f-996a-a367333c14b2_800w.jpg)] bg-cover" style={{}}></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-palette h-3.5 w-3.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>Creative Director</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>Sarah Chen</p>
<p className="text-zinc-300 text-xs font-geist mt-1" style={{}}>8 years experience</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-zinc-800 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6653564f-d2bb-4c35-8fef-be58ac89ffe0_800w.jpg)] bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e700ede7-bc7c-4be3-9611-31948683c891_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-lightbulb h-3.5 w-3.5" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>Brand Strategist</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>Marcus Reid</p>
<p className="text-zinc-300 text-xs font-geist mt-1" style={{}}>12 years experience</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-zinc-800 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f995362-9751-4d89-86fa-a5f7c03be905_800w.jpg)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-monitor h-3.5 w-3.5" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>UX Designer</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>Elena Vasquez</p>
<p className="text-zinc-300 text-xs font-geist mt-1" style={{}}>6 years experience</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-zinc-800 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b59bad79-703a-4c05-8ed2-fafcc49a7b51_800w.jpg)] bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-settings h-3.5 w-3.5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32 1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist" style={{}}>Project Manager</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist" style={{}}>James Morrison</p>
<p className="text-zinc-300 text-xs font-geist mt-1" style={{}}>10 years experience</p>
</div>
</article>
</div>
</div>
</section>
</div>

<div className="mt-8 grid grid-cols-3 gap-6 text-center animate-[slideUp_0.6s_ease-out_0.2s_both]">
<div className="py-6 px-4 rounded-xl bg-white/5 border border-white/10">
<div className="text-2xl font-geist font-medium text-zinc-100" style={{}}>15+</div>
<div className="text-sm font-geist text-zinc-400 mt-1" style={{}}>Team Members</div>
</div>
<div className="py-6 px-4 rounded-xl bg-white/5 border border-white/10">
<div className="text-2xl font-geist font-medium text-zinc-100" style={{}}>150+</div>
<div className="text-sm font-geist text-zinc-400 mt-1" style={{}}>Projects Completed</div>
</div>
<div className="py-6 px-4 rounded-xl bg-white/5 border border-white/10">
<div className="text-2xl font-geist font-medium text-zinc-100" style={{}}>98%</div>
<div className="text-sm font-geist text-zinc-400 mt-1" style={{}}>Client Satisfaction</div>
</div>
</div>
</div>
</section><section className="sm:py- pt-0 pb-10 items-center" id="capabilities">
<div className="relative max-w-6xl sm:px-6 lg:px-8 bg-neutral-950 rounded-3xl mr-auto ml-auto pt-10 pr-20 pb-10 pl-20">

<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between animate-[slideUp_0.6s_ease-out] mb-12">
<div className="mb-6 sm:mb-0">
<h2 className="sm:text-7xl text-4xl font-light text-white tracking-tighter font-geist mb-6" style={{}}>Pricing Plans</h2>
<p className="text-lg max-w-2xl font-geist text-neutral-400" style={{}}>Flexible options that match your pace. Built for startups, growing brands, and teams that value thoughtful design.</p>
</div>

<div className="inline-flex items-center rounded-full ring-1 ring-white/10 bg-white/5 p-1 gap-1" id="billingToggle">
<button aria-pressed="true" className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-geist bg-neutral-100 text-black transition-colors" data-billing="monthly" style={{}} type="button">Monthly</button>
<button aria-pressed="false" className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-geist text-neutral-300 hover:text-neutral-100 transition-colors" data-billing="project" style={{}} type="button">Project based</button>
</div>
</div>

<div className="rounded-2xl border overflow-hidden border-white/10 bg-neutral-900/40 animate-[slideUp_0.6s_ease-out_0.1s_both]">
<div className="grid grid-cols-1 lg:grid-cols-2 items-center">

<div className="sm:p-6 lg:p-8 pt-5 pr-5 pb-5 pl-5">
<div className="relative rounded-2xl border border-white/10 bg-neutral-100 text-neutral-900 p-5 sm:p-6 lg:p-7">
<div className="absolute top-4 right-5 text-xs font-geist text-neutral-500 select-none" style={{}}>Lumina®</div>
<div className="flex items-center justify-between">
<div className="">
<div className="text-sm font-geist font-medium tracking-tight text-neutral-700" id="planTitle" style={{}}>Subscription</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-3xl sm:text-4xl font-geist font-medium tracking-tight" style={{}}>$<span id="price" style={{}}>2500</span></span>
<span className="text-neutral-500 font-geist text-base" style={{}}>/<span id="priceUnit" style={{}}>month</span></span>
</div>
</div>
</div>
<p className="mt-4 text-sm leading-6 font-geist text-neutral-600" id="planDesc" style={{}}>Ongoing support and flexible design when you need it. Ideal for startups, growing brands, and marketing teams needing consistent creative momentum.</p>
<div className="mt-8 flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[11px] font-geist text-neutral-500">
<span className="h-2 w-2 rounded-full bg-neutral-400/50"></span>
<span className="" id="addonNote" style={{}}>Optional SEO add‑on ($800/m)</span>
</div>

<div className="h-5 w-9 rounded-full bg-neutral-200 relative">
<div className="absolute top-[2px] left-[2px] h-4 w-4 rounded-full bg-neutral-500"></div>
</div>
</div>
</div>
</div>

<div className="lg:p-8 flex flex-col bg-black/20 pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="">
<div className="text-sm font-geist text-neutral-400 mb-4" style={{}}>What's included:</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<svg className="lucide lucide-check-circle-2 w-[16px] h-[16px] text-blue-500" data-icon-replaced="true" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-100" style={{}}>Unlimited design requests</span>
</li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200">
<svg className="lucide lucide-check-circle-2 text-blue-400" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-100" id="featureScope" style={{}}>One active task at a time</span>
</li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200" style={{}}>
<svg className="lucide lucide-check-circle-2 text-blue-600" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Weekly progress calls
            </li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200" style={{}}>
<svg className="lucide lucide-check-circle-2 text-blue-500" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Fast turnaround times
            </li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200" style={{}}>
<svg className="lucide lucide-check-circle-2 text-blue-400" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Brand consistency across deliverables
            </li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200" style={{}}>
<svg className="lucide lucide-check-circle-2 text-blue-600" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Priority support
            </li>
<li className="flex items-center gap-3 text-sm font-geist text-neutral-200" style={{}}>
<svg className="lucide lucide-check-circle-2 text-blue-500" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Pause or cancel anytime
            </li>
</ul>
</div>
<div className="mt-8 flex items-center justify-between gap-6">
<div className="">
<div className="text-sm font-geist text-neutral-400" style={{}}>Estimated kickoff</div>
<div className="text-neutral-100 font-geist" id="etaValue" style={{}}>48 hours</div>
</div>
<button className="flex gap-2 ring-1 ring-white/20 hover:bg-white/15 transition-colors text-sm text-neutral-100 font-geist bg-white/10 rounded-full pt-3 pr-6 pb-3 pl-6 items-center justify-center" style={{}}>
            Get started
            <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="mt-6 text-[11px] font-geist text-neutral-500 flex items-center gap-2" style={{}}>
<svg className="lucide lucide-info text-neutral-400" data-lucide="info" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
    No hidden fees. Transparent, collaborative process from day one.
  </div>

</div>
</section>

<section className="sm:py- pt-0 pb-10 items-center" id="results">
<div className="relative max-w-6xl sm:px-6 lg:px-8 bg-neutral-950 rounded-3xl mr-auto ml-auto pt-10 pr-20 pb-10 pl-20">
<div className="animate-[slideUp_0.6s_ease-out_0.5s_both] bg-neutral-900/40 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{background: '#ffffff', borderColor: 'rgba(0,0,0,0.06)'}}>
<div className="relative overflow-hidden min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] flex rounded-xl items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[88%] sm:w-[72%] max-w-6xl aspect-[16/9] bg-black relative overflow-hidden shadow-2xl rounded-sm">
<img alt="Minimal cosmetic bottle on a dark stage" className="absolute inset-0 h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7050fd5-9b66-45d7-a30a-569d8f5e9017_800w.jpg" style={{}}/>
</div>
</div>

<h2 className="relative z-10 px-2 text-white mix-blend-difference text-center font-geist font-semibold tracking-tight leading-[0.82] text-[13vw] sm:text-[11vw] lg:text-[9vw] select-none">
<span className="block" style={{}}>From concept</span>
<span className="block" style={{}}>to creation</span>
</h2>

<div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl opacity-20">
<div className="h-px bg-black/30"></div>
</div>
<div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full opacity-20">
<div className="w-px h-full bg-black/10"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative max-w-6xl sm:px-6 lg:px-8 bg-neutral-950 rounded-2xl mr-auto ml-auto pt-4 pr-20 pb-4 pl-20">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between">
<div className="flex items-center gap-3 mb-4 md:mb-0">
<span className="text-lg font-medium tracking-tight font-geist" style={{}}>Lumina Studio</span>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-400">
<a className="transition-colors font-geist hover:text-neutral-100" href="#" style={{}}>Privacy</a>
<a className="transition-colors font-geist hover:text-neutral-100" href="#" style={{}}>Terms</a>
<a className="transition-colors font-geist hover:text-neutral-100" href="#" style={{}}>Contact</a>
<span className="font-geist" style={{}}>© 2024</span>
</div>
</div>
</div>
</footer>
<style>
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { 
          opacity: 0; 
          transform: translateY(20px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
    </style>


    </>
  );
}

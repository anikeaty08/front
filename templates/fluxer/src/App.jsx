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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    window.planData = {
      mini: { 
        title: "Mini Site", 
        price: "$5", 
        features: ["Custom Domain", "Home & 404 Pages", "1,000 Visitors"], 
        meta: { pages: "2 pages", visitors: "1,000", protection: "—" }, 
        meters: { pages: "40%", visitors: "20%", protection: "0%" } 
      },
      basic: {
        title: "Basic Site", 
        price: "$15",
        features: ["Unlimited Pages", "Password Protection", "10,000 Visitors"], 
        meta: { pages: "Unlimited", visitors: "10,000", protection: "Included" }, 
        meters: { pages: "100%", visitors: "45%", protection: "100%" } 
      },
      pro: { 
        title: "Pro Site", 
        price: "$30", 
        features: ["Analytics", "Staging & Versions", "200,000 Visitors"], 
        meta: { pages: "Unlimited", visitors: "200,000", protection: "Included" }, 
        meters: { pages: "100%", visitors: "90%", protection: "100%" } 
      }
    };

    window.setPlan = function(plan) {
      // 1. Update Button States
      ['mini', 'basic', 'pro'].forEach(p => {
        const btn = document.getElementById('btn-' + p);
        if (!btn) return;
        const bg = btn.querySelector('.active-bg');
        const dot = btn.querySelector('.active-dot');
        
        if (p === plan) {
           // Active
           btn.classList.remove('border-transparent', 'text-white/60', 'hover:bg-white/[0.02]', 'hover:text-white');
           btn.classList.add('bg-white/[0.04]', 'border-orange-500/40', 'text-white');
           
           if(bg) { bg.classList.remove('opacity-0'); bg.classList.add('opacity-100'); }
           if(dot) { dot.classList.remove('opacity-0'); dot.classList.add('opacity-100'); }
        } else {
           // Inactive
           btn.classList.add('border-transparent', 'text-white/60', 'hover:bg-white/[0.02]', 'hover:text-white');
           btn.classList.remove('bg-white/[0.04]', 'border-orange-500/40', 'text-white');
           
           if(bg) { bg.classList.add('opacity-0'); bg.classList.remove('opacity-100'); }
           if(dot) { dot.classList.add('opacity-0'); dot.classList.remove('opacity-100'); }
        }
      });

      // 2. Update Content
      const data = window.planData[plan];
      if (!data) return;

      const titleEl = document.getElementById('plan-title');
      const priceEl = document.getElementById('plan-price');
      
      if(titleEl) {
         titleEl.textContent = data.title;
         // Trigger animation
         titleEl.classList.remove('animate-fade-up');
         void titleEl.offsetWidth; 
         titleEl.classList.add('animate-fade-up');
      }
      if(priceEl) {
         priceEl.textContent = data.price;
         priceEl.classList.remove('animate-fade-up');
         void priceEl.offsetWidth; 
         priceEl.classList.add('animate-fade-up');
      }
      
      const list = document.getElementById('plan-features');
      if (list) {
        list.innerHTML = '';
        data.features.forEach((f, index) => {
          const delayClass = index === 0 ? '' : index === 1 ? 'delay-1' : 'delay-2';
          list.insertAdjacentHTML('beforeend', `
            <li class="flex items-center gap-3 text-sm text-white/80 animate-fade-up ${delayClass}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-orange-400">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              ${f}
            </li>
          `);
        });
      }

      // 3. Update Meters
      document.getElementById('meta-pages').textContent = data.meta.pages;
      document.getElementById('meta-visitors').textContent = data.meta.visitors;
      document.getElementById('meta-protection').textContent = data.meta.protection;

      document.getElementById('meter-pages').style.width = data.meters.pages;
      document.getElementById('meter-visitors').style.width = data.meters.visitors;
      document.getElementById('meter-protection').style.width = data.meters.protection;
    }
  


    function toggleFaq(button) {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.icon-plus');
      const isExpanded = content.style.gridTemplateRows === '1fr';

      // Reset all others
      document.querySelectorAll('.faq-content').forEach(el => {
        el.style.gridTemplateRows = '0fr';
        el.previousElementSibling.querySelector('.icon-plus').style.transform = 'rotate(0deg)';
        el.previousElementSibling.querySelector('.icon-plus').style.color = 'rgba(255,255,255,0.4)';
      });

      // Toggle current
      if (!isExpanded) {
        content.style.gridTemplateRows = '1fr';
        icon.style.transform = 'rotate(45deg)';
        icon.style.color = '#F97316'; // Orange-500
      }
    }
  


      lucide.createIcons();

      const plans = {
          creator: { title: "Creator Plan", price: "$29", features: ["AI Trend Analysis", "3 Platform Connections", "Basic Auto-Reply"] },
          pro: { title: "Pro Team", price: "$79", features: ["Advanced Analytics", "10 Platform Connections", "Team Collaboration"] },
          agency: { title: "Agency", price: "$199", features: ["Unlimited Accounts", "API Access", "White-label Reporting"] }
      };

      function setPlan(plan) {
          // Update Buttons
          document.querySelectorAll('section button[id^="btn-"]').forEach(btn => {
              btn.className = "w-full text-left p-4 rounded-lg border border-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.02] transition-all group";
              // remove highlight
              if(btn.querySelector('.absolute')) btn.querySelector('.absolute').remove();
              if(btn.querySelector('.w-2.h-2')) btn.querySelector('.w-2.h-2').remove();
          });

          const activeBtn = document.getElementById('btn-' + plan);
          activeBtn.className = "w-full text-left p-4 rounded-lg bg-white/[0.04] border border-orange-500/40 text-white transition-all group relative overflow-hidden";
          activeBtn.insertAdjacentHTML('afterbegin', '<div class="absolute inset-0 bg-orange-500/5"></div>');
          activeBtn.querySelector('div.flex').insertAdjacentHTML('beforeend', '<span class="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>');

          // Update SVG Lines
          ['creator', 'pro', 'agency'].forEach(p => {
              const path = document.getElementById('path-' + p);
              if(p === plan) {
                  path.setAttribute('stroke', '#F97316');
                  path.setAttribute('class', 'animate-flow');
              } else {
                  path.setAttribute('stroke', 'rgba(255,255,255,0.1)');
                  path.setAttribute('class', '');
              }
          });

          // Update Text
          document.getElementById('plan-title').textContent = plans[plan].title;
          document.getElementById('plan-price').textContent = plans[plan].price;

          const featureList = document.getElementById('plan-features');
          featureList.innerHTML = '';
          plans[plan].features.forEach(f => {
              featureList.insertAdjacentHTML('beforeend', `
                  <li class="flex items-center gap-3 text-sm text-white/80">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-orange-400"><path d="M20 6 9 17l-5-5"/></svg>
                      ${f}
                  </li>
              `);
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="hRFfUymDGOHwtFe7evR2"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 linear-grid"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full opacity-40"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#0B0C0E]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0B0C0E]/60">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-6 h-6">
<svg className="lucide lucide-zap w-5 h-5 text-orange-400/90" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-sm font-medium tracking-tight text-white/90">
            Fluxer
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[13px] text-white/60 hover:text-white transition-colors" href="#">
            Showcase
          </a>
<a className="text-[13px] text-white/60 hover:text-white transition-colors" href="#">
            Templates
          </a>
<a className="text-[13px] text-white/60 hover:text-white transition-colors" href="#">
            Community
          </a>
<a className="text-[13px] text-white/60 hover:text-white transition-colors" href="#">
            Pricing
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-[13px] text-white/60 hover:text-white transition-colors" href="#">
            Log in
          </a>
<a className="shine-button h-8 px-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/5 text-[13px] font-medium text-white transition-all flex items-center" href="#">
            Start for free
          </a>
</div>
</div>
</nav>

<main className="z-10 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col animate-fade-up opacity-0 items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
</span>
<span className="text-xs font-medium text-orange-400/90 tracking-tight">
              Fluxer 2.0 is live
            </span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            The internet is
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-amber-500">
              your canvas.
            </span>
</h1>
<p className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed font-light">
            Fluxer is where teams design and publish stunning sites. From start
            to finish, all in one place. No code required.
          </p>
<div className="flex flex-wrap items-center gap-4">
<button className="shine-button h-12 px-8 rounded-full bg-[#EBEBEB] text-[#0B0C0E] text-[15px] font-medium hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Start for free
            </button>
<button className="h-12 px-8 rounded-full border border-white/[0.08] bg-transparent text-white/80 text-[15px] font-medium hover:bg-white/[0.04] transition-colors flex items-center gap-2">
              Watch video
              <svg className="lucide lucide-play-circle text-white/40 ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
</button>
</div>
</div>

<div className="relative opacity-0 animate-fade-up delay-2">

<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent blur-[60px] rounded-full opacity-40"></div>

<div className="relative w-full max-w-md ml-auto bg-[#131418] rounded-2xl border border-white/[0.08] p-6 shadow-2xl shadow-black/50 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="relative z-10 flex justify-between items-start mb-8">
<div className="">
<div className="text-[13px] text-white/40 font-medium mb-1 uppercase tracking-wider">
                  OPTIMIZATION
                </div>
<h3 className="text-xl text-white font-medium tracking-tight">
                  Site Performance
                </h3>
</div>
<div className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-[11px] font-medium text-orange-400 flex items-center gap-1.5">
<svg className="lucide lucide-check-circle-2 w-3 h-3" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                100
              </div>
</div>

<div className="relative z-10 h-32 w-full mb-8">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 100">
<defs>
<lineargradient id="glowGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#F97316" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#F97316" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" d="M0 80 C 40 80, 50 60, 80 50 C 110 40, 130 20, 160 15 C 180 10, 190 5, 200 0" fill="none" stroke="#F97316" strokeLinecap="round" strokeWidth="2"></path>
<path className="" d="M0 80 C 40 80, 50 60, 80 50 C 110 40, 130 20, 160 15 C 180 10, 190 5, 200 0 V 100 H 0 Z" fill="url(#glowGradient)" stroke="none"></path>
</svg>

<div className="absolute top-0 right-0 w-3 h-3 bg-[#131418] border-2 border-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)]"></div>
</div>

<div className="relative z-10 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.04]">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-[13px] text-white/80">
                    Lighthouse Score
                  </span>
</div>
<span className="text-[13px] font-medium text-white">100</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.04]">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
<span className="text-[13px] text-white/80">
                    First Contentful Paint
                  </span>
</div>
<span className="text-[13px] font-medium text-white">0.2s</span>
</div>
</div>
</div>
</div>
</div>
</main>
<section className="border-y border-white/[0.06] bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-medium text-white/30 mb-8 tracking-widest uppercase">
          Trusted by world-class teams
        </p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-40 hover:opacity-100 transition-all duration-500">
<iconify-icon className="text-white" height="36" icon="simple-icons:linear" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:vercel" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:stripe" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:spotify" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:raycast" width="96"></iconify-icon>
</div>
</div>
</section>

<section className="animate-fade-up delay-3 opacity-0 max-w-7xl mr-auto ml-auto pr-6 pb-32 pl-6">
<div className="border-white/[0.08] overflow-hidden group bg-[#0E0F11] border rounded-xl relative shadow-2xl">

<div className="absolute top-[-20%] left-[20%] w-[60%] h-[400px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

<div className="border-white/[0.06] flex h-12 border-b pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
</div>
</div>
<div className="flex items-center gap-3 bg-[#0B0C0E] border border-white/[0.06] rounded-md px-3 py-1">
<svg className="text-white/40" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
</svg>
<span className="text-[12px] text-white/30 font-medium">
              Fluxer · fluxer.com
            </span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
<svg className="text-white/60" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<button className="bg-orange-600 text-[11px] font-medium text-white px-3 py-1 rounded hover:bg-orange-700 transition-colors">
              Publish
            </button>
</div>
</div>

<div className="grid grid-cols-12 min-h-[600px] bg-[#0B0C0E]/50 backdrop-blur-sm">

<div className="hidden md:block col-span-2 border-r border-white/[0.06] p-4 space-y-6">
<div className="">
<div className="text-[11px] font-medium text-white/40 uppercase mb-3 px-2">
                Layers
              </div>
<ul className="space-y-0.5">
<li className="px-2 py-1.5 rounded-md bg-white/[0.06] text-[13px] text-white font-medium flex items-center gap-2">
<svg className="lucide lucide-layout-grid w-3.5 h-3.5 text-orange-400" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                  Desktop
                </li>
<li className="px-2 py-1.5 rounded-md text-[13px] text-white/60 hover:text-white transition-colors flex items-center gap-2">
<svg className="lucide lucide-panel-top w-3.5 h-3.5" data-lucide="panel-top" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path></svg>
                  Header
                </li>
<li className="px-2 py-1.5 rounded-md text-[13px] text-white/60 hover:text-white transition-colors flex items-center gap-2">
<svg className="lucide lucide-image w-3.5 h-3.5" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                  Hero
                </li>
</ul>
</div>
<div className="">
<div className="text-[11px] font-medium text-white/40 uppercase mb-3 px-2">
                Assets
              </div>
<ul className="space-y-0.5">
<li className="px-2 py-1.5 rounded-md text-[13px] text-white/60 hover:text-white transition-colors flex items-center gap-2">
<svg className="lucide lucide-component w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
<path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
<path d="m12 15 3.5 3.5L12 22l-3.5-3.5 3.5-3.5Z"></path>
<path d="m18.5 8.5 3.5 3.5-3.5 3.5L15 12l3.5-3.5Z"></path>
</svg>
                  Button
                </li>
</ul>
</div>
</div>

<div className="col-span-12 md:col-span-10 lg:col-span-7 md:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="mb-8">
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-xs font-medium text-orange-400">
                  Desktop · 1200
                </span>
</div>
<h2 className="text-3xl font-medium tracking-tight text-white font-serif">
                The browser that works for you
              </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-[13px] text-white/60">Width</span>
<svg className="lucide lucide-ruler-horizontal w-3.5 h-3.5 text-white/20" data-lucide="ruler-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6Z"></path>
<path d="M6 10V6"></path>
<path d="M9 10V6"></path>
<path d="M12 10V6"></path>
<path d="M15 10V6"></path>
<path d="M18 10V6"></path>
</svg>
</div>
<div className="text-2xl text-white font-medium tracking-tight">
                  1fr
                </div>
<div className="text-[12px] text-orange-400 mt-1">Fill Container</div>
</div>

<div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
<div className="flex justify-between items-start mb-4">
</div>
<div className="text-2xl text-white font-medium tracking-tight">
                  Auto
                </div>
<div className="text-[12px] text-white/40 mt-1">Hug Contents</div>
</div>

<div className="col-span-1 sm:col-span-2 p-4 rounded-lg bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 mt-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-orange-400">
<svg className="lucide lucide-upload-cloud w-4 h-4" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
<div className="">
<div className="text-[13px] text-white font-medium">
                        Export Assets
                      </div>
<div className="text-[12px] text-white/50">
                        2x • PNG • Suffix: @2x
                      </div>
</div>
</div>
<button className="text-[11px] bg-orange-600 text-white px-3 py-1.5 rounded font-medium hover:bg-orange-700 transition-colors">
                    Export Frame
                  </button>
</div>
</div>
</div>
</div>

<div className="hidden lg:block col-span-3 border-l border-white/[0.06] p-4 bg-white/[0.01]">
<div className="text-[11px] font-medium text-white/40 uppercase mb-4 px-2">
              Styles
            </div>
<div className="space-y-4">
<div className="px-2">
<div className="text-[12px] text-white/60 mb-1.5">Opacity</div>
<div className="flex gap-2 items-center">
<div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[100%] bg-orange-500"></div>
</div>
<span className="text-[11px] text-white font-mono">100%</span>
</div>
</div>
<div className="px-2">
<div className="text-[12px] text-white/60 mb-1.5">Fill</div>
<div className="flex items-center gap-2 p-1.5 rounded border border-white/[0.06] bg-white/[0.02]">
<div className="w-4 h-4 rounded bg-black border border-white/20"></div>
<span className="text-[12px] text-white font-mono">#000000</span>
</div>
</div>
<div className="px-2">
<div className="text-[12px] text-white/60 mb-1.5">Radius</div>
<div className="flex gap-2">
<div className="h-8 flex-1 bg-white/[0.06] rounded border border-white/[0.06] flex items-center px-2 text-[11px] text-white/60">
                    0
                  </div>
<div className="w-8 h-8 bg-white/[0.06] rounded border border-white/[0.06] flex items-center justify-center text-white/40">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.06]">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
          Ship with speed.
        </h2>
<p className="text-lg text-white/60 max-w-2xl font-light">
          Turn your design into a live website in seconds. World-class
          infrastructure, built-in.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 linear-card rounded-xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full group-hover:bg-orange-500/10 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-orange-400">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M12 2v4"></path>
<path d="m16.2 7.8 2.9-2.9"></path>
<path d="M18 12h4"></path>
<path d="m16.2 16.2 2.9 2.9"></path>
<path d="M12 18v4"></path>
<path d="m4.9 19.1 2.9-2.9"></path>
<path d="M2 12h4"></path>
<path d="m4.9 4.9 2.9 2.9"></path>
</svg>
</div>
<h3 className="text-xl text-white font-medium mb-2">
              Layout &amp; Effects
            </h3>
<p className="text-sm text-white/60 max-w-md leading-relaxed">
              Design with auto-layout, stacks, and grids. Add scroll transforms
              and appear animations visually.
            </p>
</div>

<div className="mt-8 flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[40%] bg-orange-500"></div>
</div>
<div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[70%] bg-white/40"></div>
</div>
<div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[55%] bg-white/40"></div>
</div>
</div>
</div>

<div className="linear-card rounded-xl p-8 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
</div>
<h3 className="text-lg text-white font-medium mb-2">CMS</h3>
<p className="text-sm text-white/60 leading-relaxed">
            Manage content for your blog, portfolio, or changelog with a
            flexible CMS.
          </p>
</div>

<div className="linear-card rounded-xl p-8 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg className="" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path className="" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
<path d="M12 2v2"></path>
<path d="M12 22v-2"></path>
<path d="m17 17-1.4-1.4"></path>
<path d="m17 7-1.4 1.4"></path>
<path d="m7 17 1.4-1.4"></path>
<path d="m7 7 1.4 1.4"></path>
</svg>
</div>
<h3 className="text-lg text-white font-medium mb-2">Localization</h3>
<p className="text-sm text-white/60 leading-relaxed">
            Customize your site for every region, language, and culture.
          </p>
</div>

<div className="md:col-span-2 linear-card rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-orange-400">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<h3 className="text-xl text-white font-medium mb-2">Fluxer AI</h3>
<p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Generate new pages, translate content, and rewrite copy with
              advanced AI tools.
            </p>
</div>
<div className="w-full md:w-64 bg-black/40 rounded-lg border border-white/5 p-4 relative">
<div className="flex items-start gap-3 mb-3">
<div className="w-6 h-6 rounded-full bg-white/20"></div>
<div className="space-y-1.5 flex-1">
<div className="h-2 w-16 bg-white/10 rounded"></div>
<div className="h-2 w-full bg-white/10 rounded"></div>
</div>
</div>
<div className="flex items-start gap-3 pl-4 border-l-2 border-orange-500/30">
<div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-[10px] text-orange-400">
                AI
              </div>
<div className="space-y-1.5 flex-1">
<div className="h-2 w-full bg-orange-500/20 rounded"></div>
<div className="h-2 w-2/3 bg-orange-500/20 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 gap-x-10 gap-y-10 items-start">

<div className="lg:col-span-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 gap-x-6 gap-y-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-white">Choose your plan.</h2>
<p className="text-sm text-white/60 mt-2 font-light">
          Pick a plan that fits today. Upgrade or downgrade anytime.
        </p>
</div>

<div className="w-full md:w-auto">
<div className="grid grid-cols-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1">

<button className="relative rounded-lg px-3 py-2 text-left transition-all group overflow-hidden bg-white/[0.04] border border-orange-500/40 text-white cursor-pointer" id="btn-mini" onclick="window.setPlan('mini')">
<div className="active-bg absolute inset-0 bg-orange-500/5 transition-opacity duration-300 opacity-100"></div>
<div className="relative z-10 flex items-center justify-between gap-2">
<span className="text-[13px] font-medium">Mini</span>
<span className="active-dot w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-opacity duration-300 opacity-100"></span>
</div>
<div className="relative z-10 text-[11px] text-white/50 mt-0.5 transition-colors">Personal</div>
</button>

<button className="relative rounded-lg px-3 py-2 text-left transition-all group overflow-hidden border border-transparent text-white/60 hover:text-white hover:bg-white/[0.02] cursor-pointer" id="btn-basic" onclick="window.setPlan('basic')">
<div className="active-bg absolute inset-0 bg-orange-500/5 transition-opacity duration-300 opacity-0"></div>
<div className="relative z-10 flex items-center justify-between gap-2">
<span className="text-[13px] font-medium">Basic</span>
<span className="active-dot w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-opacity duration-300 opacity-0"></span>
</div>
<div className="relative z-10 text-[11px] text-white/40 group-hover:text-white/50 mt-0.5 transition-colors">Portfolio</div>
</button>

<button className="relative rounded-lg px-3 py-2 text-left transition-all group overflow-hidden border border-transparent text-white/60 hover:text-white hover:bg-white/[0.02] cursor-pointer" id="btn-pro" onclick="window.setPlan('pro')">
<div className="active-bg absolute inset-0 bg-orange-500/5 transition-opacity duration-300 opacity-0"></div>
<div className="relative z-10 flex items-center justify-between gap-2">
<span className="text-[13px] font-medium">Pro</span>
<span className="active-dot w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-opacity duration-300 opacity-0"></span>
</div>
<div className="relative z-10 text-[11px] text-white/40 group-hover:text-white/50 mt-0.5 transition-colors">Business</div>
</button>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="linear-card rounded-xl bg-[#0E0F11] p-6 md:p-8">
<div className="flex items-start justify-between gap-6 mb-6">
<div className="">
<div className="text-[11px] text-white/40 uppercase tracking-wide">What’s included</div>
<h3 className="text-xl text-white font-medium tracking-tight mt-1">Everything to publish fast</h3>
</div>
<div className="hidden sm:flex items-center gap-2 text-[11px] text-white/40">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Selected plan
            </span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
<div className="flex items-center justify-between gap-3">
<span className="text-[13px] text-white/80">Custom Domain</span>
<span className="text-[11px] text-white/40 font-mono">Included</span>
</div>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[100%] bg-orange-500"></div>
</div>
</div>

<div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
<div className="flex items-center justify-between gap-3">
<span className="text-[13px] text-white/80">Pages</span>
<span className="text-[11px] text-white/40 font-mono transition-all duration-300" id="meta-pages">2 pages</span>
</div>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[40%] bg-orange-500 transition-all duration-500 ease-out" id="meter-pages"></div>
</div>
</div>

<div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
<div className="flex items-center justify-between gap-3">
<span className="text-[13px] text-white/80">Visitors</span>
<span className="text-[11px] text-white/40 font-mono transition-all duration-300" id="meta-visitors">1,000</span>
</div>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[20%] bg-orange-500 transition-all duration-500 ease-out" id="meter-visitors"></div>
</div>
</div>

<div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
<div className="flex items-center justify-between gap-3">
<span className="text-[13px] text-white/80">Protection</span>
<span className="text-[11px] text-white/40 font-mono transition-all duration-300" id="meta-protection">—</span>
</div>
<div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[0%] bg-orange-500 transition-all duration-500 ease-out" id="meter-protection"></div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="text-[13px] text-white/60 font-light">
            Need something custom? <a className="text-white/80 hover:text-white transition-colors" href="#">Talk to sales</a>.
          </div>
<div className="flex items-center gap-2 text-[11px] text-white/40">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
              Cancel anytime
            </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
<span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
              Instant publish
            </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="linear-card rounded-xl p-6 md:p-8 bg-[#0E0F11]">
<div className="flex justify-between items-baseline mb-8">
<h3 className="text-2xl text-white font-medium tracking-tight animate-fade-up" id="plan-title">Mini Site</h3>
<div className="text-right">
<div className="text-2xl text-white font-medium tracking-tight animate-fade-up" id="plan-price">$5</div>
<div className="text-[11px] text-white/40 uppercase tracking-wide">per month</div>
</div>
</div>
<ul className="space-y-4 mb-8" id="plan-features">
<li className="flex items-center gap-3 text-sm text-white/80 animate-fade-up">
<svg className="text-orange-400" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Custom Domain
          </li>
<li className="flex items-center gap-3 text-sm text-white/80 animate-fade-up delay-1">
<svg className="text-orange-400" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Home &amp; 404 Pages
          </li>
<li className="flex items-center gap-3 text-sm text-white/80 animate-fade-up delay-2">
<svg className="text-orange-400" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            1,000 Visitors
          </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
          Get Started
        </button>
<div className="mt-4 text-[12px] text-white/40 text-center font-light">
          No credit card required to start.
        </div>
</div>
</div>
</div>

</section><section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.06]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-4">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Frequently asked questions</h2>
<p className="text-sm text-white/60 leading-relaxed font-light mb-8">
        Everything you need to know about Fluxer. Can’t find the answer you’re looking for? 
        <a className="text-white hover:text-orange-400 transition-colors border-b border-white/20 hover:border-orange-400/50 pb-0.5" href="#">Contact support</a>.
      </p>
</div>

<div className="lg:col-span-8">
<div className="space-y-2">

<div className="group border-b border-white/[0.06] last:border-0">
<button className="flex w-full items-start justify-between py-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">Can I use my own custom domain?</span>
<span className="ml-6 flex items-center justify-center pt-1 text-white/40 transition-transform duration-300 group-hover:text-white">
<svg className="lucide lucide-plus transition-transform duration-300 icon-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 font-light leading-relaxed">
                Yes, absolutely. All paid plans include the ability to connect a custom domain. We provide free SSL certificates for all domains connected to Fluxer, automatically managed and renewed for you.
              </p>
</div>
</div>
</div>

<div className="group border-b border-white/[0.06] last:border-0">
<button className="flex w-full items-start justify-between py-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">What happens if I exceed my visitor limit?</span>
<span className="ml-6 flex items-center justify-center pt-1 text-white/40 transition-transform duration-300 group-hover:text-white">
<svg className="lucide lucide-plus transition-transform duration-300 icon-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 font-light leading-relaxed">
                We don't shut off your site. If you consistently exceed the limits of your plan, we'll reach out to discuss upgrading to a plan that better suits your needs. For sudden traffic spikes, there are no overage charges.
              </p>
</div>
</div>
</div>

<div className="group border-b border-white/[0.06] last:border-0">
<button className="flex w-full items-start justify-between py-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">Can I export the code to host elsewhere?</span>
<span className="ml-6 flex items-center justify-center pt-1 text-white/40 transition-transform duration-300 group-hover:text-white">
<svg className="lucide lucide-plus transition-transform duration-300 icon-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 font-light leading-relaxed">
                Yes. The Basic and Pro plans allow you to export your project as a clean, semantic HTML/CSS/JS bundle. You can host this on Netlify, Vercel, or your own infrastructure without any lock-in.
              </p>
</div>
</div>
</div>

<div className="group border-b border-white/[0.06] last:border-0">
<button className="flex w-full items-start justify-between py-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">Is there a discount for open source or non-profits?</span>
<span className="ml-6 flex items-center justify-center pt-1 text-white/40 transition-transform duration-300 group-hover:text-white">
<svg className="lucide lucide-plus transition-transform duration-300 icon-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 font-light leading-relaxed">
                We support the community. If you're building an open-source project or represent a non-profit organization, please contact us for a special discount on our Pro plan.
              </p>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<footer className="border-t border-white/[0.06] bg-[#0B0C0E] pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="relative flex items-center justify-center w-5 h-5">
<svg className="lucide lucide-zap" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-sm font-medium text-white">Fluxer</span>
</div>
<p className="text-[13px] text-white/40 max-w-xs leading-relaxed">
              The internet is your canvas. Design and publish your dream site.
              No code required.
            </p>
</div>
<div>
<h4 className="text-[13px] font-medium text-white mb-4">Product</h4>
<ul className="space-y-3 text-[13px] text-white/50">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Pricing
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[13px] font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-[13px] text-white/50">
<li>
<a className="hover:text-white transition-colors" href="#">About</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[13px] font-medium text-white mb-4">Resources</h4>
<ul className="space-y-3 text-[13px] text-white/50">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Community
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Help Center
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Status
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[13px] font-medium text-white mb-4">Legal</h4>
<ul className="space-y-3 text-[13px] text-white/50">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Privacy
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.06]">
<div className="text-[12px] text-white/30 mb-4 md:mb-0">
            © 2024 Luminous Inc. All rights reserved.
          </div>
<div className="flex items-center gap-6">
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-github" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

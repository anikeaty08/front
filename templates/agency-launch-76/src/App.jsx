import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      // Initialize Icons
      lucide.createIcons();

      // Scroll Reveal Observer
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
      });

      // Tabs Logic
      function switchTab(tabName) {
          const contents = document.querySelectorAll('.tab-content');
          contents.forEach(content => content.classList.remove('active'));

          document.getElementById(`tab-content-${tabName}`).classList.add('active');

          const buttons = ['website', 'funnel', 'auto'];
          buttons.forEach(btn => {
              const el = document.getElementById(`tab-btn-${btn}`);
              if (btn === tabName) {
                  el.className = "px-8 py-2.5 text-xs font-medium rounded-full transition-all duration-300 bg-white/10 text-white shadow-lg border border-white/10";
              } else {
                  el.className = "px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5";
              }
          });
      }

      // Accordion Logic
      function toggleAccordion(id) {
          const content = document.getElementById(id);
          const icon = document.getElementById(`icon-${id}`);

          if (content.style.gridTemplateRows === "1fr") {
              content.classList.remove('open');
              content.style.gridTemplateRows = "0fr";
              icon.style.transform = 'rotate(0deg)';
          } else {
              content.classList.add('open');
              content.style.gridTemplateRows = "1fr";
              icon.style.transform = 'rotate(180deg)';
          }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-[50vh] md:h-screen -z-10 saturate-0 opacity-80" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>

</div>
</div>

<div className="ambient-light"></div>
<div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-6 h-6">

</div>
<span className="font-semibold tracking-tighter text-white text-xs uppercase">
            Atmos Launch Kit
          </span>
</div>
<nav className="hidden md:flex gap-8 text-[11px] font-medium tracking-wide uppercase text-neutral-500">
<a className="hover:text-white transition-colors duration-300" href="#process">
            Process
          </a>
<a className="hover:text-white transition-colors duration-300" href="#deliverables">
            Deliverables
          </a>
<a className="hover:text-white transition-colors duration-300" href="#faq">
            Intel
          </a>
</nav>
<a className="hidden md:flex items-center justify-center px-4 py-1.5 bg-white/5 border border-white/10 text-white text-[11px] font-medium rounded hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm" href="#order">
          Initialize Build
        </a>
</div>
</header>

<section className="md:pt-48 md:pb-36 flex flex-col overflow-hidden text-center pt-32 pr-6 pb-24 pl-6 relative items-center">


<div className="relative z-10 flex flex-col items-center">

<div className="mb-8 opacity-60">
<img alt="Laurel Motif" className="w-16 h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cb783e3-d3a8-4521-8174-9f5771f8e34b_320w.png?w=800&amp;q=80" style={{}}/>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95] drop-shadow-2xl">
          Stop Getting Treated
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 to-neutral-700">
            Like A Freelancer.
          </span>
</h1>
<p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
          Get the agency credibility you need to get replies. We build the
          infrastructure that makes you look established in 24 hours. Stop
          getting ignored.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(10,143,106,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(10,143,106,0.25)] w-full sm:w-auto justify-center" href="#order" style={{-Spread: '90deg', -ShimmerColor: 'rgba(255,255,255,0.6)', -Radius: '9999px', -Speed: '4s', -Cut: '1px', -Bg: 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-2 sm:w-auto overflow-hidden text-xs uppercase font-semibold tracking-wider text-white w-full py-3.5 px-8 relative items-center justify-center" style={{borderRadius: '9999px'}}>
<div style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10, 143, 106, 0.9)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap relative z-10">Start Build</span>
</div>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-3.5 glass-panel text-neutral-300 hover:text-white text-xs uppercase font-medium tracking-wider rounded-lg transition-colors w-full sm:w-auto group" href="#deliverables">
            View Scope
            <svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>
</div>
<div className="mt-32 h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="py-32 px-6 border-b border-white/5 relative z-10">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter">
            The Trust Gap Is Costing You.
          </h2>
<div className="space-y-8">
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-neutral-800 group-hover:bg-neutral-700 transition-colors mt-1"></div>
<div>
<h4 className="text-white text-sm font-medium mb-2">
                  The Amateur Signal
                </h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
                  Look expensive, and you can charge expensive prices. We give
                  you the look of an established 7-figure agency instantly.
                </p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-[#0A8F6A] shadow-[0_0_15px_rgba(10,143,106,0.5)] mt-1"></div>
<div>
<h4 className="text-white text-sm font-medium mb-2">
                  The Authority Signal
                </h4>
<p className="text-neutral-400 text-sm font-light leading-relaxed">
                  When your digital presence feels expensive, your pricing feels
                  justified. We build the assets that bridge this gap instantly.
                </p>
</div>
</div>
</div>
</div>
<div className="glass-panel p-10 rounded-2xl relative overflow-hidden group reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0A8F6A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-0 right-0 p-6 opacity-10">
<svg className="lucide lucide-quote w-16 h-16 text-white" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed mb-8 relative z-10">
            "Your presentation decides the outcome before you speak."
          </p>
<div className="flex items-center gap-3 relative z-10">
<div className="w-6 h-px bg-[#0A8F6A]"></div>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#0A8F6A] font-semibold">
              Manifesto
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative bg-black/20">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-8 rounded-xl text-center reveal group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tighter group-hover:text-[#0A8F6A] transition-colors">
              0.05s
            </div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-[#0A8F6A]/50 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">
              Trust Velocity
            </p>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-[180px] mx-auto">
              Time it takes for a client to decide if you're a pro or an
              amateur.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl text-center reveal delay-75 group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tighter group-hover:text-[#0A8F6A] transition-colors">
              94%
            </div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-[#0A8F6A]/50 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">
              Design Bias
            </p>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-[180px] mx-auto">
              First impressions are 94% visual. Bad design kills deals
              instantly.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl text-center reveal delay-150 group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tighter group-hover:text-[#0A8F6A] transition-colors">
              3x
            </div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-[#0A8F6A]/50 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">
              Pricing Power
            </p>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-[180px] mx-auto">
              Look like a real agency, and you can charge real agency fees.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl text-center reveal delay-200 group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tighter group-hover:text-[#0A8F6A] transition-colors">
              100%
            </div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-[#0A8F6A]/50 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">
              Authority
            </p>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-[180px] mx-auto">
              Perception is everything. Look like a master, get treated like
              one.
            </p>
</div>
</div>
</div>
</section>
<section className="py-32 px-6 relative" id="deliverables">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">
            Tactical Deployments
          </h2>
<p className="text-neutral-500 text-sm">
            Select a tier to inspect the architecture.
          </p>
</div>

<div className="w-full reveal delay-100">
<div className="flex flex-col sm:flex-row justify-center mb-12">
<div className="inline-flex bg-neutral-900/40 backdrop-blur-md p-1.5 rounded-full border border-white/5">
<button className="px-8 py-2.5 text-xs font-medium rounded-full transition-all duration-300 bg-white/10 text-white shadow-lg border border-white/10" id="tab-btn-website" onclick="switchTab('website')">
                Website Build
              </button>
<button className="px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5" id="tab-btn-funnel" onclick="switchTab('funnel')">
                Full Funnel
              </button>
<button className="px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5" id="tab-btn-auto" onclick="switchTab('auto')">
                Automation
              </button>
</div>
</div>

<div className="tab-content active" id="tab-content-website">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-white/5 relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2">
                    Custom Agency Site
                  </h3>
<p className="text-neutral-400 text-sm font-light">
                    Look like a real agency instantly. No templates. No
                    "beginner energy".
                  </p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-3xl font-bold text-white tracking-tight">
                    $149
                  </span>
<span className="block text-[10px] uppercase tracking-wider text-[#0A8F6A] font-medium">
                    One-time Investment
                  </span>
<span className="block text-[10px] text-neutral-500 mt-1 font-medium">
                    Installment plans available
                  </span>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    1–5 Custom Pages (Home, About, Services, Case Studies)
                  </span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Professional Sales Copywriting</span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    High-End Custom Design (No Templates)
                  </span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Live in 24–48 Hours</span>
</li>
</ul>
</div>
</div>

<div className="tab-content" id="tab-content-funnel">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#0A8F6A]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-white/5 relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2">
                    Client Acquisition Funnel
                  </h3>
<p className="text-neutral-400 text-sm font-light">
                    Gets you booked calls. Your first real sales engine.
                  </p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-3xl font-bold text-white tracking-tight">
                    $299
                  </span>
<span className="block text-[10px] uppercase tracking-wider text-[#0A8F6A] font-medium">
                    One-time Investment
                  </span>
<span className="block text-[10px] text-neutral-500 mt-1 font-medium">
                    Installment plans available
                  </span>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Video Sales Letter Layout</span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Lead Capture &amp; Booking Flow
                  </span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Calendar &amp; Payment Integration
                  </span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Perfect for beginners with no pipeline
                  </span>
</li>
</ul>
</div>
</div>

<div className="tab-content" id="tab-content-auto">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-white/5 relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2">
                    Agency Automation
                  </h3>
<p className="text-neutral-400 text-sm font-light">
                    Systems that make you look big. Remove the chaos.
                  </p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-3xl font-bold text-white tracking-tight">
                    Custom
                  </span>
<span className="text-[10px] uppercase tracking-wider text-[#0A8F6A] font-medium">
                    Monthly Retainer
                  </span>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Fully Managed Hosting &amp; Security
                  </span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">We Handle The Tech Updates</span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">AI Agent Integration</span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300">
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Makes you appear like a bigger agency
                  </span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="flex items-center gap-3 mb-10 reveal">
<div className="p-2 rounded bg-white/5 border border-white/10">
<svg className="lucide lucide-bot w-4 h-4 text-[#0A8F6A]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight">
            Your First Employees (Without Payroll)
          </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-8 rounded-xl hover:border-[#0A8F6A]/30 group transition-all duration-500 reveal">
<div className="w-10 h-10 rounded-lg bg-[#0A8F6A]/10 flex items-center justify-center mb-6 text-[#0A8F6A] group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Sales Agent</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">
              Handles pricing and booking. Never sell alone again.
            </p>
<div className="flex items-baseline gap-1">
<span className="text-sm font-semibold text-white">$259</span>
<span className="text-[10px] text-neutral-600 uppercase">/mo</span>
</div>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal delay-75">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<h3 className="text-white font-medium mb-2">Social Agent</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">
              Replies to DMs instantly. Look active 24/7.
            </p>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400">
              Add-on
            </span>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal delay-100">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Chat Agent</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">
              Qualifies leads via text. Captures every opportunity.
            </p>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400">
              Add-on
            </span>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal delay-150">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Ad Agent</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">
              Manages comments. Makes you look like a real operation.
            </p>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400">
              Add-on
            </span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-neutral-900/10 backdrop-blur-sm" id="process">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-medium text-white tracking-tight mb-16 text-center reveal">
          The Protocol
        </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

<div className="flex flex-col md:items-center md:text-center reveal">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              01
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Initiate
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              Commit to your agency's future.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-75">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              02
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Sync
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              We get your details and vision immediately.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-150">
<div className="w-12 h-12 bg-[#0A8F6A] rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_25px_rgba(10,143,106,0.4)] ring-4 ring-black/50">
              03
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Deploy
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              We build and launch your system in 48 hours.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-200">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              04
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Refine
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              We tweak it until it's perfect.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="order">
<div className="relative max-w-5xl mx-auto text-center reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-8">
          Get Credible Fast.
        </h2>
<p className="text-neutral-400 mb-16 text-sm font-light">
          Perfect for new agency owners who need credibility fast.
          <br/>
<span className="text-neutral-300">
            Unlimited revisions. 24-48h Turnaround.
          </span>
</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<button className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all group flex flex-col items-center relative overflow-hidden">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-widest mb-4">
              Website
            </span>
<span className="text-3xl font-bold text-white mb-8">$149</span>
<div className="px-6 py-3 bg-neutral-800 border border-white/5 text-white text-xs font-semibold uppercase tracking-wider rounded group-hover:bg-white group-hover:text-black transition-colors w-full">
              Select
            </div>
</button>

<button className="relative p-8 rounded-2xl bg-[#0A8F6A]/10 border border-[#0A8F6A] hover:bg-[#0A8F6A]/20 transition-all group flex flex-col items-center overflow-hidden shadow-[0_0_40px_-10px_rgba(10,143,106,0.2)] transform md:-translate-y-4">
<div className="absolute inset-0 bg-gradient-to-b from-[#0A8F6A]/10 to-transparent opacity-50"></div>
<div className="absolute top-0 px-4 py-1 bg-[#0A8F6A] text-white text-[10px] uppercase font-bold tracking-widest rounded-b-lg">
              Recommended
            </div>
<span className="text-xs text-[#0A8F6A] font-bold uppercase tracking-widest mb-4 mt-2 relative z-10">
              Bundle
            </span>
<span className="text-3xl font-bold text-white mb-8 relative z-10">
              $399
            </span>
<div className="relative z-10 px-6 py-3 bg-[#0A8F6A] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#097a5b] transition-colors w-full shadow-lg">
              Purchase
            </div>
</button>

<button className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all group flex flex-col items-center relative overflow-hidden">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-widest mb-4">
              Funnel
            </span>
<span className="text-3xl font-bold text-white mb-8">$299</span>
<div className="px-6 py-3 bg-neutral-800 border border-white/5 text-white text-xs font-semibold uppercase tracking-wider rounded group-hover:bg-white group-hover:text-black transition-colors w-full">
              Select
            </div>
</button>
</div>
<div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group text-left mb-12 border border-white/5 hover:border-[#0A8F6A]/30 transition-colors duration-300">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#0A8F6A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
<div className="flex items-start gap-5 w-full md:w-auto">
<div className="w-10 h-10 rounded-lg bg-[#0A8F6A]/10 flex items-center justify-center text-[#0A8F6A] shrink-0 border border-[#0A8F6A]/20">
<svg className="lucide lucide-infinity w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path>
</svg>
</div>
<div>
<div className="flex items-center gap-3">
<h3 className="text-white font-medium">Ops Retainer</h3>
<span className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-neutral-400 bg-white/5 uppercase tracking-wider">
                    Optional
                  </span>
</div>
<p className="text-xs text-neutral-400 mt-1 max-w-md font-light leading-relaxed">
                  We keep everything running. You focus on clients.
                </p>
</div>
</div>
<div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end pl-14 md:pl-0">
<div className="text-right">
<span className="block text-2xl font-semibold text-white tracking-tight">
                  $99
                </span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  / Month
                </span>
</div>
<button className="flex items-center gap-2 px-5 py-2.5 bg-[#0A8F6A]/10 border border-[#0A8F6A]/20 text-[#0A8F6A] hover:bg-[#0A8F6A] hover:text-white text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300">
<span>Add</span>
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-6 justify-center text-[10px] text-neutral-500 uppercase tracking-widest">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            48H Delivery
          </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            7-Day Guarantee
          </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Secure SSL
          </div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-black/40" id="faq">
<div className="max-w-2xl mx-auto reveal">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center">
          Operational Intel
        </h2>
<div className="space-y-3">

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq1')">
              Is this for beginners?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq1">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                Yes. It is designed to take you from "unknown" to "established"
                instantly. We give you the credibility you need to sign clients.
              </div>
</div>
</div>

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq2')">
              What if I have no brand assets yet?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq2">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                No problem. We help create a professional look for you from
                scratch. You don't need a logo or photos to start.
              </div>
</div>
</div>

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq3')">
              Do I really look more credible after this?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq3">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                Absolutely. Your site will look better than 99% of your
                competitors. Clients trust what they see.
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 text-center bg-black">
<div className="flex items-center justify-center gap-3 mb-6 opacity-50">
</div>
<p className="text-sm font-semibold text-white tracking-tight mb-2">
        ATMOS LAUNCH KIT
      </p>
<p className="text-[10px] text-neutral-600 mb-10">
        Engineered by Atmos Creation
      </p>
<div className="flex justify-center gap-8 text-[10px] text-neutral-600 uppercase tracking-widest font-medium">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</footer>


    </>
  );
}

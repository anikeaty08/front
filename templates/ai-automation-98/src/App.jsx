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
      

<div className="aura-background-component fixed top-0 w-full h-[50vh] md:h-screen -z-10 saturate-0 opacity-80 mix-blend-normal" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<div className="ambient-light"></div>
<div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex w-6 h-6 relative items-center justify-center">
</div>
</div>
<nav className="hidden md:flex gap-8 text-[11px] font-medium tracking-wide uppercase text-neutral-500" style={{}}>
<a className="hover:text-white transition-colors duration-300" href="#process">
            Process
          </a>
<a className="hover:text-white transition-colors duration-300" href="#solutions">
            Solutions
          </a>
<a className="hover:text-white transition-colors duration-300" href="#faq">
            Intel
          </a>
</nav>
<a className="hidden md:flex items-center justify-center px-4 py-1.5 bg-white/5 border border-white/10 text-white text-[11px] font-medium rounded hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm" href="#order" style={{}}>
          Book Consultation
        </a>
</div>
</header>

<section className="md:pt-48 md:pb-36 flex flex-col overflow-hidden text-center pt-32 pr-6 pb-24 pl-6 relative items-center">


<div className="relative z-10 flex flex-col items-center">

<div className="mb-8 opacity-60">
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95] drop-shadow-2xl" style={{}}>
          Intelligence That
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 to-neutral-700" style={{}}>
            Scales Your Business.
          </span>
</h1>
<p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide" style={{}}>
          Replace manual workflows with autonomous AI systems. We build the
          infrastructure that saves hours, reduces costs, and scales operations
          without adding headcount.
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
<span className="whitespace-nowrap relative z-10">Automate Now</span>
</div>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-3.5 glass-panel text-neutral-300 hover:text-white text-xs uppercase font-medium tracking-wider rounded-lg transition-colors w-full sm:w-auto group" href="#solutions" style={{}}>
            View Solutions
            <svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>
</div>
<div className="mt-32 h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="py-32 px-6 border-b border-white/5 relative z-10">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter" style={{}}>
            The Efficiency Gap Is Costing You.
          </h2>
<div className="space-y-8">
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-neutral-800 group-hover:bg-neutral-700 transition-colors mt-1" style={{}}></div>
<div className="">
<h4 className="text-white text-sm font-medium mb-2" style={{}}>
                  The Manual Trap
                </h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed" style={{}}>
                  Spending hours on data entry, scheduling, and repetitive tasks
                  drains your margins and limits your growth potential.
                </p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-[#0A8F6A] shadow-[0_0_15px_rgba(10,143,106,0.5)] mt-1"></div>
<div className="">
<h4 className="text-white text-sm font-medium mb-2" style={{}}>
                  The Automated Edge
                </h4>
<p className="text-neutral-400 text-sm font-light leading-relaxed" style={{}}>
                  Leveraging AI agents allows your business to run 24/7 with zero
                  human error. We bridge the gap between effort and output.
                </p>
</div>
</div>
</div>
</div>
<div className="glass-panel p-10 rounded-2xl relative overflow-hidden group reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0A8F6A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-0 right-0 p-6 opacity-10">
<svg className="lucide lucide-cpu w-16 h-16 text-white" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed mb-8 relative z-10" style={{}}>
            "The future belongs to those who automate the mundane to focus on the exceptional."
          </p>
<div className="flex items-center gap-3 relative z-10">
<div className="w-6 h-px bg-[#0A8F6A]"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative bg-black/20">
<div className="max-w-6xl mx-auto">

<div className="glass-panel p-8 rounded-xl text-center reveal group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tighter group-hover:text-[#0A8F6A] transition-colors" style={{}}>
              24/7
            </div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-[#0A8F6A]/50 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2" style={{}}>
              Uptime
            </p>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-[180px] mx-auto" style={{}}>
              Your business works even when you are asleep. No breaks needed.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl text-center reveal delay-75 group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tighter group-hover:text-[#0A8F6A] transition-colors" style={{}}>
              10x
            </div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-[#0A8F6A]/50 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2" style={{}}>
              Productivity
            </p>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-[180px] mx-auto" style={{}}>
              One AI agent can handle the workload of an entire support team.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl text-center reveal delay-150 group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tighter group-hover:text-[#0A8F6A] transition-colors" style={{}}>
              0%
            </div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-[#0A8F6A]/50 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2" style={{}}>
              Error Rate
            </p>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-[180px] mx-auto" style={{}}>
              Remove human error from critical data entry and processes.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl text-center reveal delay-200 group hover:border-[#0A8F6A]/30 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tighter group-hover:text-[#0A8F6A] transition-colors" style={{}}>
              80%
            </div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-[#0A8F6A]/50 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2" style={{}}>
              Cost Reduction
            </p>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-[180px] mx-auto" style={{}}>
              Drastically reduce overhead by replacing manual labor with code.
            </p>
</div>
</div>
</section>
<section className="py-32 px-6 relative" id="solutions">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4" style={{}}>
            Tactical Solutions
          </h2>
<p className="text-neutral-500 text-sm" style={{}}>
            Select an architecture to inspect the system.
          </p>
</div>

<div className="w-full reveal delay-100">
<div className="flex flex-col sm:flex-row justify-center mb-12">
<div className="inline-flex bg-neutral-900/40 backdrop-blur-md p-1.5 rounded-full border border-white/5" style={{}}>
<button className="px-8 py-2.5 text-xs font-medium rounded-full transition-all duration-300 bg-white/10 text-white shadow-lg border border-white/10" id="tab-btn-website" onclick="switchTab('website')" style={{}}>
                Workflows
              </button>
<button className="px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5" id="tab-btn-funnel" onclick="switchTab('funnel')" style={{}}>
                Support AI
              </button>
<button className="px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5" id="tab-btn-auto" onclick="switchTab('auto')" style={{}}>
                Outreach
              </button>
</div>
</div>

<div className="tab-content active" id="tab-content-website">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-white/5 relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2" style={{}}>
                    Workflow Automation
                  </h3>
<p className="text-neutral-400 text-sm font-light" style={{}}>
                    Connect your apps. Automate data entry. reclaim your time.
                  </p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-3xl font-bold text-white tracking-tight" style={{}}>
                    $997
                  </span>
<span className="block text-[10px] uppercase tracking-wider text-[#0A8F6A] font-medium">
                    Starting Investment
                  </span>
<span className="block text-[10px] text-neutral-500 mt-1 font-medium" style={{}}>
                    Custom scoping available
                  </span>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Custom Zapier / Make.com Scenarios
                  </span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">CRM Data Synchronization</span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Automated Invoicing &amp; Reporting
                  </span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Complete Workflow Audit</span>
</li>
</ul>
</div>
</div>

<div className="tab-content" id="tab-content-funnel">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#0A8F6A]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-white/5 relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2" style={{}}>
                    Customer Support AI
                  </h3>
<p className="text-neutral-400 text-sm font-light" style={{}}>
                    Instant replies. 24/7 availability. Happy customers.
                  </p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-3xl font-bold text-white tracking-tight" style={{}}>
                    $1,499
                  </span>
<span className="block text-[10px] uppercase tracking-wider text-[#0A8F6A] font-medium">
                    One-time Setup
                  </span>
<span className="block text-[10px] text-neutral-500 mt-1 font-medium" style={{}}>
                    + Monthly maintenance
                  </span>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Knowledge Base Training</span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Website Chatbot Integration
                  </span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Seamless Handover to Human
                  </span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Reduce ticket volume by 60%
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
<h3 className="text-2xl font-medium text-white mb-2" style={{}}>
                    Outreach Systems
                  </h3>
<p className="text-neutral-400 text-sm font-light" style={{}}>
                    Fill your pipeline on autopilot.
                  </p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-3xl font-bold text-white tracking-tight" style={{}}>
                    Custom
                  </span>
<span className="text-[10px] uppercase tracking-wider text-[#0A8F6A] font-medium">
                    Monthly Retainer
                  </span>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Automated Lead Scraping
                  </span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Personalized Email Sequences</span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">LinkedIn Engagement Bot</span>
</li>
<li className="flex items-start gap-4 text-sm text-neutral-300" style={{}}>
<div className="mt-0.5 p-0.5 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A]">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">
                    Appointment Booking Logic
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
<h2 className="text-2xl font-medium text-white tracking-tight" style={{}}>
            Deployed Intelligence
          </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-8 rounded-xl hover:border-[#0A8F6A]/30 group transition-all duration-500 reveal">
<div className="w-10 h-10 rounded-lg bg-[#0A8F6A]/10 flex items-center justify-center mb-6 text-[#0A8F6A] group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-white font-medium mb-2" style={{}}>Sales Agent</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed" style={{}}>
              Handles pricing, objections and booking. Never sell alone again.
            </p>
<div className="flex items-baseline gap-1">
<span className="text-sm font-semibold text-white" style={{}}>Custom</span>
</div>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal delay-75">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500" style={{}}>
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-white font-medium mb-2" style={{}}>Support Bot</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed" style={{}}>
              Replies to tickets instantly. Trained on your data.
            </p>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400" style={{}}>
              Popular
            </span>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal delay-100">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500" style={{}}>
<svg className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-white font-medium mb-2" style={{}}>Data Scraper</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed" style={{}}>
              Enrich leads and aggregate data automatically.
            </p>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400" style={{}}>
              Add-on
            </span>
</div>

<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500" style={{}}>
</div>
         
           
              Orchestrates other agents. Complete autonomy.
            <p></p>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400" style={{}}>
              Enterprise
            </span>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-neutral-900/10 backdrop-blur-sm" id="process" style={{}}>
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-medium text-white tracking-tight mb-16 text-center reveal" style={{}}>
          Integration Protocol
        </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

<div className="flex flex-col md:items-center md:text-center reveal">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{}}>
              01
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide" style={{}}>
              Audit
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]" style={{}}>
              We analyze your current manual workflows.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-75">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{}}>
              02
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide" style={{}}>
              Blueprint
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]" style={{}}>
              We design a custom automation architecture.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-150">
<div className="w-12 h-12 bg-[#0A8F6A] rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_25px_rgba(10,143,106,0.4)] ring-4 ring-black/50" style={{}}>
              03
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide" style={{}}>
              Deploy
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]" style={{}}>
              We build, test, and launch your AI agents.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-200">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{}}>
              04
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide" style={{}}>
              Optimize
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]" style={{}}>
              Continuous monitoring and improvement.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="order">
<div className="relative max-w-5xl mx-auto text-center reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-8" style={{}}>
          Start Automating Today.
        </h2>
<p className="text-neutral-400 mb-16 text-sm font-light" style={{}}>
          Scalable solutions for businesses of all sizes.
          <br/>
<span className="text-neutral-300" style={{}}>
            ROI-focused. Rapid deployment.
          </span>
</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<button className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all group flex flex-col items-center relative overflow-hidden">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-widest mb-4" style={{}}>
              Workflow
            </span>
<span className="text-3xl font-bold text-white mb-8" style={{}}>$997</span>
<div className="px-6 py-3 bg-neutral-800 border border-white/5 text-white text-xs font-semibold uppercase tracking-wider rounded group-hover:bg-white group-hover:text-black transition-colors w-full" style={{}}>
              Audit &amp; Build
            </div>
</button>

<button className="relative p-8 rounded-2xl bg-[#0A8F6A]/10 border border-[#0A8F6A] hover:bg-[#0A8F6A]/20 transition-all group flex flex-col items-center overflow-hidden shadow-[0_0_40px_-10px_rgba(10,143,106,0.2)] transform md:-translate-y-4">
<div className="absolute inset-0 bg-gradient-to-b from-[#0A8F6A]/10 to-transparent opacity-50" style={{}}></div>
<div className="absolute top-0 px-4 py-1 bg-[#0A8F6A] text-white text-[10px] uppercase font-bold tracking-widest rounded-b-lg" style={{}}>
              Most Popular
            </div>
<span className="text-xs text-[#0A8F6A] font-bold uppercase tracking-widest mb-4 mt-2 relative z-10">
              Growth System
            </span>
<span className="text-3xl font-bold text-white mb-8 relative z-10" style={{}}>
              $2,497
            </span>
<div className="relative z-10 px-6 py-3 bg-[#0A8F6A] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#097a5b] transition-colors w-full shadow-lg" style={{}}>
              Full Implementation
            </div>
</button>

<button className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all group flex flex-col items-center relative overflow-hidden">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-widest mb-4" style={{}}>
              Enterprise
            </span>
<span className="text-3xl font-bold text-white mb-8" style={{}}>Custom</span>
<div className="px-6 py-3 bg-neutral-800 border border-white/5 text-white text-xs font-semibold uppercase tracking-wider rounded group-hover:bg-white group-hover:text-black transition-colors w-full" style={{}}>
              Contact Us
            </div>
</button>
</div>
<div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group text-left mb-12 border border-white/5 hover:border-[#0A8F6A]/30 transition-colors duration-300">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#0A8F6A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{}}></div>
<div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
<div className="flex items-start gap-5 w-full md:w-auto">
<div className="w-10 h-10 rounded-lg bg-[#0A8F6A]/10 flex items-center justify-center text-[#0A8F6A] shrink-0 border border-[#0A8F6A]/20">
<svg className="lucide lucide-infinity w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path>
</svg>
</div>
<div>
<div className="flex items-center gap-3">
<h3 className="text-white font-medium" style={{}}>Maintenance Retainer</h3>
<span className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-neutral-400 bg-white/5 uppercase tracking-wider" style={{}}>
                    Optional
                  </span>
</div>
<p className="text-xs text-neutral-400 mt-1 max-w-md font-light leading-relaxed" style={{}}>
                  We manage updates, API changes, and system health.
                </p>
</div>
</div>
<div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end pl-14 md:pl-0">
<div className="text-right">
<span className="block text-2xl font-semibold text-white tracking-tight" style={{}}>
                  $299
                </span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider" style={{}}>
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
<div className="flex flex-col sm:flex-row gap-6 justify-center text-[10px] text-neutral-500 uppercase tracking-widest" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            14-Day Delivery
          </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            ROI Guarantee
          </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Secure Data
          </div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-black/40" id="faq">
<div className="max-w-2xl mx-auto reveal">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center" style={{}}>
          Operational Intel
        </h2>
<div className="space-y-3">

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq1')" style={{}}>
              Will AI replace my staff?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq1">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed" style={{}}>
                No. AI is designed to handle repetitive, low-value tasks so your
                team can focus on strategy, creative work, and high-level client
                interactions. It augments your team, it doesn't replace them.
              </div>
</div>
</div>

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq2')" style={{}}>
              Is my data secure?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq2">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed" style={{}}>
                Yes. We prioritize security and compliance. All automation flows
                are built with encryption and secure API handling to ensure your
                proprietary data remains safe.
              </div>
</div>
</div>

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq3')" style={{}}>
              How long does implementation take?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq3">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed" style={{}}>
                Simple workflows can be live in 48 hours. Complex, full-business
                automation systems typically take 14-21 days to fully scope,
                build, test, and deploy.
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 text-center bg-black">
<div className="flex items-center justify-center gap-3 mb-6 opacity-50">
</div>
<p></p>
<p></p>
<div className="flex justify-center gap-8 text-[10px] text-neutral-600 uppercase tracking-widest font-medium" style={{}}>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</footer>


    </>
  );
}

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
        


      lucide.createIcons();const observerOptions={root:null,rootMargin:'0px',threshold:0.1};const observer=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('active')}})},observerOptions);document.querySelectorAll('.reveal').forEach(el=>{observer.observe(el)});function switchTab(tabName){const contents=document.querySelectorAll('.tab-content');contents.forEach(content=>content.classList.remove('active'));document.getElementById(`tab-content-${tabName}`).classList.add('active');const buttons=['website','funnel','auto'];buttons.forEach(btn=>{const el=document.getElementById(`tab-btn-${btn}`);if(btn===tabName){el.className="px-8 py-2.5 text-xs font-medium rounded-full transition-all duration-300 bg-white/10 text-white shadow-lg border border-white/10"}else{el.className="px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5"}})}function toggleAccordion(id){const content=document.getElementById(id);const icon=document.getElementById(`icon-${id}`);if(content.style.gridTemplateRows==="1fr"){content.classList.remove('open');content.style.gridTemplateRows="0fr";icon.style.transform='rotate(0deg)'}else{content.classList.add('open');content.style.gridTemplateRows="1fr";icon.style.transform='rotate(180deg)'}}
    
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
      
<div className="fixed inset-0 pointer-events-none z-0 grid-lines"></div>
<div className="aura-background-component fixed top-0 w-full h-[50vh] md:h-screen -z-10 saturate-0 opacity-80" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>

</div>
</div>
<div className="ambient-light"></div>
<div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-fade-up">
<nav className="flex bg-[#0a0a0a]/80 w-full h-12 max-w-5xl border-white/5 border rounded-full pr-2 pl-6 shadow-2xl backdrop-blur-md items-center justify-between">
<a className="flex items-center gap-2.5 group hover:opacity-80 transition-opacity" href="#">
<i className="text-[#0A8F6A] w-5 h-5" data-lucide="cpu"></i>
<span className="text-sm font-semibold tracking-tight text-white font-manrope uppercase">
            Jesse Martin Innovations
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#process">
            Process
          </a>
<a className="hover:text-white transition-colors duration-200" href="#solutions">
            Solutions
          </a>
<a className="hover:text-white transition-colors duration-200" href="#faq">
            Intel
          </a>
</div>
<div className="flex items-center gap-3">
<a className="group relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all overflow-hidden" href="#order">
<span className="text-xs font-semibold text-white tracking-tight group-hover:text-[#0A8F6A] transition-colors">
              Book Consultation
            </span>
<iconify-icon className="text-neutral-400 group-hover:text-[#0A8F6A] group-hover:translate-x-0.5 transition-all" icon="solar:arrow-right-linear" width="12"></iconify-icon>
<div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none"></div>
</a>
</div>
</nav>
</div>
<section className="relative z-10 flex flex-col h-screen max-w-7xl mx-auto px-6 items-center justify-center">
<div className="animate-fade-up delay-100 mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-[#0A8F6A] animate-pulse"></span>
<span className="text-[11px] font-medium text-neutral-300 tracking-wide">
            AI AUTOMATION SYSTEMS
          </span>
</div>
</div>
<h1 className="animate-fade-up delay-200 md:text-7xl lg:text-8xl leading-[0.95] text-5xl font-medium text-white tracking-tight text-center max-w-4xl mx-auto mb-8">
        Intelligence That
        <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 to-neutral-700">
          Scales Your Business.
        </span>
</h1>
<p className="animate-fade-up delay-300 leading-relaxed md:text-2xl text-lg font-light text-neutral-400 tracking-tight text-center max-w-2xl mx-auto">
        Replace manual workflows with autonomous AI systems.
        <br className="hidden sm:block"/>
        Scale operations without adding headcount.
      </p>
</section>
<section className="z-20 overflow-hidden bg-black w-full border-white/5 border-t pt-24 pb-24 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0A8F6A]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="order-2 lg:order-1">
<h2 className="md:text-5xl leading-[1.05] text-3xl font-medium text-white tracking-tight mb-6">
              The Efficiency Gap Is Costing You.
            </h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed mb-8 max-w-lg">
              Spending hours on data entry, scheduling, and repetitive tasks
              drains your margins. We bridge the gap between effort and output.
            </p>
<div className="space-y-5">
<div className="flex group gap-x-4 gap-y-4 items-start">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#0A8F6A]/50 group-hover:bg-[#0A8F6A]/10 transition-colors duration-300">
<iconify-icon className="text-neutral-400 group-hover:text-[#0A8F6A] transition-colors" icon="solar:layers-minimalistic-linear" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white">
                    The Manual Trap
                  </h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                    Repetitive tasks drain your margins and limit your growth
                    potential.
                  </p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#0A8F6A]/50 group-hover:bg-[#0A8F6A]/10 transition-colors duration-300">
<iconify-icon className="text-neutral-400 group-hover:text-[#0A8F6A] transition-colors" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white">
                    The Automated Edge
                  </h4>
<p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                    Leverage AI agents to run 24/7 with zero human error.
                  </p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative group">
<div className="overflow-hidden aspect-square md:aspect-[4/3] bg-[#0a0a0a] border-white/10 border rounded-3xl relative shadow-2xl">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_120%)]"></div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#0A8F6A 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</div>
<div className="absolute top-6 left-6 z-30 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A8F6A]/20 bg-[#0A8F6A]/10 backdrop-blur-md shadow-lg shadow-[#0A8F6A]/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A8F6A] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A8F6A]"></span>
</span>
<span className="text-[10px] font-semibold tracking-wide text-[#0A8F6A] uppercase font-mono">
                  System Active
                </span>
</div>
<div className="flex z-10 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="relative w-[530px] h-[400px] scale-[0.6] sm:scale-[0.75] md:scale-[0.9] lg:scale-100 transition-transform origin-center select-none max-w-full">
<svg className="absolute inset-0 w-full h-full z-0 overflow-visible pointer-events-none">
<defs>
<filter height="200%" id="glow-connector" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>
<g fill="none" stroke="#0A8F6A" stroke-opacity="0.2" strokeWidth="1.5">
<path d="M 100 200 L 120 200"></path>
<path d="M 200 200 L 220 200"></path>
<path d="M 300 200 L 315 200 L 315 100 L 330 100"></path>
<path d="M 300 200 L 315 200 L 315 300 L 330 300"></path>
<path d="M 410 300 L 430 300"></path>
</g>
<g fill="#0A8F6A" filter="url(#glow-connector)">
<circle r="3">
<animatemotion calcmode="linear" dur="3s" path="M 100 200 L 120 200" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
<circle r="3">
<animatemotion begin="0.8s" calcmode="linear" dur="3s" path="M 200 200 L 220 200" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="0.8s" dur="3s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
<circle r="3">
<animatemotion begin="1.5s" calcmode="linear" dur="4s" path="M 300 200 L 315 200 L 315 100 L 330 100" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1.5s" dur="4s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
<circle r="3">
<animatemotion begin="1.5s" calcmode="linear" dur="4s" path="M 300 200 L 315 200 L 315 300 L 330 300" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1.5s" dur="4s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
<circle r="3">
<animatemotion begin="2.5s" calcmode="linear" dur="2s" path="M 410 300 L 430 300" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="2.5s" dur="2s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
</g>
</svg>
<div className="absolute left-[20px] top-[160px] w-20 h-20 bg-[#161616] border border-[#0A8F6A]/30 rounded-md flex flex-col items-center justify-center z-10 shadow-[0_0_30px_-10px_rgba(10,143,106,0.1)] group/node hover:border-[#0A8F6A] transition-colors duration-300">
<div className="flex items-center gap-1 pr-2">
<iconify-icon className="text-[#0A8F6A] text-sm group-hover/node:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
<iconify-icon className="text-[#0A8F6A] text-2xl group-hover/node:scale-110 transition-transform" icon="lucide:mail"></iconify-icon>
</div>
</div>
<div className="absolute left-[120px] top-[160px] w-20 h-20 bg-[#161616] border border-[#0A8F6A]/30 rounded-md flex flex-col items-center justify-center z-10 shadow-[0_0_30px_-10px_rgba(10,143,106,0.1)] gap-1 group/node hover:border-[#0A8F6A] transition-colors duration-300">
<iconify-icon className="text-[#0A8F6A] text-2xl group-hover/node:scale-110 transition-transform" icon="lucide:message-square"></iconify-icon>
<span className="text-[10px] leading-tight font-medium text-neutral-400 text-center pr-1 pl-1">
                      Analyze
                    </span>
</div>
<div className="absolute left-[220px] top-[160px] w-20 h-20 bg-[#161616] border border-[#0A8F6A]/30 rounded-md rotate-45 flex items-center justify-center z-10 shadow-[0_0_30px_-10px_rgba(10,143,106,0.1)] group/node hover:border-[#0A8F6A] transition-colors duration-300">
<div className="-rotate-45 flex flex-col items-center justify-center pt-1">
<span className="text-2xl text-[#0A8F6A] font-semibold tracking-tight select-none leading-none">
                        ?
                      </span>
<span className="text-[10px] text-neutral-400 font-medium mt-0.5">
                        Route?
                      </span>
</div>
</div>
<div className="absolute left-[330px] top-[60px] w-20 h-20 bg-[#161616] border border-[#0A8F6A]/30 rounded-md flex flex-col items-center justify-center z-10 shadow-[0_0_30px_-10px_rgba(10,143,106,0.1)] gap-1 group/node hover:border-[#0A8F6A] transition-colors duration-300">
<iconify-icon className="text-[#0A8F6A] text-xl group-hover/node:scale-110 transition-transform" icon="lucide:database"></iconify-icon>
<span className="text-[10px] text-neutral-400 font-medium text-center leading-tight">
                      Enrich
                    </span>
</div>
<div className="absolute left-[330px] top-[260px] w-20 h-20 bg-[#161616] border border-[#0A8F6A]/30 rounded-md flex flex-col items-center justify-center z-10 shadow-[0_0_30px_-10px_rgba(10,143,106,0.1)] gap-1 group/node hover:border-[#0A8F6A] transition-colors duration-300">
<iconify-icon className="text-[#0A8F6A] text-2xl group-hover/node:scale-110 transition-transform" icon="lucide:users"></iconify-icon>
<span className="text-[10px] leading-tight font-medium text-neutral-400 text-center pr-1 pl-1">
                      Support
                    </span>
</div>
<div className="absolute left-[430px] top-[260px] w-20 h-20 bg-[#161616] border border-[#0A8F6A]/30 rounded-md flex flex-col items-center justify-center z-10 shadow-[0_0_30px_-10px_rgba(10,143,106,0.1)] gap-1 group/node hover:border-[#0A8F6A] transition-colors duration-300">
<iconify-icon className="text-[#0A8F6A] text-2xl group-hover/node:scale-110 transition-transform" icon="lucide:zap"></iconify-icon>
<span className="text-[10px] text-neutral-400 font-medium leading-tight text-center">
                      Action
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-20 bg-black w-full border-white/5 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="animate-fade-up w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 h-auto md:h-[420px]">
<div className="relative bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(10,143,106,0.05),_transparent_70%)]"></div>
<div className="relative z-10">
<h3 className="text-sm font-medium text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-[#0A8F6A]" icon="lucide:clock"></iconify-icon>
                Uptime
              </h3>
</div>
<div className="relative z-10 my-auto">
<span className="text-7xl lg:text-8xl font-medium tracking-tighter text-white block">
                24/7
              </span>
<p className="text-sm text-neutral-500 mt-2 font-light">
                Your business works even when you are asleep. No breaks needed.
              </p>
</div>
<div className="relative z-10 h-16 w-full flex items-end gap-1.5">
<div className="w-full bg-[#0A8F6A]/60 h-[100%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/60 h-[100%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/60 h-[100%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/60 h-[100%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/60 h-[100%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/60 h-[100%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/60 h-[100%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/60 h-[100%] rounded-sm"></div>
</div>
</div>
<div className="relative bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(10,143,106,0.05),_transparent_70%)]"></div>
<div className="relative z-10">
<h3 className="text-sm font-medium text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-[#0A8F6A]" icon="lucide:zap"></iconify-icon>
                Productivity
              </h3>
</div>
<div className="relative z-10 my-auto">
<span className="text-7xl lg:text-8xl font-medium tracking-tighter text-white block">
                10
                <span className="text-[#0A8F6A]">x</span>
</span>
<p className="text-sm text-neutral-500 mt-2 font-light">
                One AI agent can handle the workload of an entire support team.
              </p>
</div>
<div className="relative z-10 h-16 w-full flex items-end gap-1.5">
<div className="w-full bg-[#0A8F6A]/5 h-[20%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/10 h-[30%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/10 h-[35%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/20 h-[45%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/30 h-[60%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/40 h-[70%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/50 h-[85%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/60 h-[100%] rounded-sm"></div>
</div>
</div>
<div className="relative bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(10,143,106,0.05),_transparent_70%)]"></div>
<div className="relative z-10">
<h3 className="flex items-center gap-2 text-sm font-medium text-neutral-400">
<iconify-icon className="text-[#0A8F6A]" icon="lucide:trending-down"></iconify-icon>
                Cost Reduction
              </h3>
</div>
<div className="relative z-10 my-auto">
<span className="lg:text-8xl block text-7xl font-medium text-white tracking-tighter">
                -80
                <span className="text-[#0A8F6A]">%</span>
</span>
<p className="text-sm font-light text-neutral-500 mt-2">
                Drastically reduce overhead by replacing manual labor with code.
              </p>
</div>
<div className="relative z-10 h-16 w-full flex items-end gap-1.5">
<div className="w-full bg-[#0A8F6A]/60 h-[90%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/50 h-[85%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/40 h-[80%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/30 h-[75%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/30 h-[70%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/20 h-[65%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/10 h-[60%] rounded-sm"></div>
<div className="w-full bg-[#0A8F6A]/5 h-[55%] rounded-sm"></div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-black border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">
<div className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1">
<div className="relative h-48 w-full overflow-hidden">
<div className="absolute inset-0 bg-[#0A8F6A]/5 mix-blend-overlay z-10"></div>
<div className="z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 right-4 text-5xl font-bold text-white/[0.1] group-hover:text-white/[0.2] transition-colors font-manrope z-20">
                01
              </div>
</div>
<div className="p-8 pt-4 flex flex-col flex-grow relative z-20">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#0A8F6A] mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm -mt-10 shadow-xl">
<iconify-icon icon="lucide:workflow" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-[#0A8F6A] transition-colors">
                Workflow Automation
              </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                Connect your apps. Automate data entry. Reclaim your time. We
                build custom scenarios that sync your data seamlessly.
              </p>
</div>
</div>
<div className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1">
<div className="relative h-48 w-full overflow-hidden">
<div className="absolute inset-0 bg-[#0A8F6A]/5 mix-blend-overlay z-10"></div>
<div className="z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 right-4 text-5xl font-bold text-white/[0.1] group-hover:text-white/[0.2] transition-colors font-manrope z-20">
                02
              </div>
</div>
<div className="p-8 pt-4 flex flex-col flex-grow relative z-20">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#0A8F6A] mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm -mt-10 shadow-xl">
<iconify-icon className="" icon="lucide:message-square" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-[#0A8F6A] transition-colors">
                Support AI
              </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                Instant replies. 24/7 availability. Train bots on your knowledge
                base to resolve tickets without human intervention.
              </p>
</div>
</div>
<div className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1">
<div className="relative h-48 w-full overflow-hidden">
<div className="absolute inset-0 bg-[#0A8F6A]/5 mix-blend-overlay z-10"></div>
<div className="z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 right-4 text-5xl font-bold text-white/[0.1] group-hover:text-white/[0.2] transition-colors font-manrope z-20">
                03
              </div>
</div>
<div className="flex flex-col flex-grow z-20 pt-4 pr-8 pb-8 pl-8 relative">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#0A8F6A] mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm -mt-10 shadow-xl">
<iconify-icon className="" icon="lucide:send" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-[#0A8F6A] transition-colors">
                Outreach Systems
              </h3>
<p className="leading-relaxed text-sm text-neutral-400">
                Fill your pipeline on autopilot. Automated lead scraping and
                personalized email sequences to scale your growth.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-32 px-6 border-y border-white/5 bg-black" id="testimonials">
<div className="max-w-4xl mx-auto text-center">
<div className="mb-10 flex justify-center">
<div className="p-3 rounded-full bg-white/5 border border-white/5">
<iconify-icon className="text-[#0A8F6A]" icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
</div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-tight">
          "The future belongs to those who automate the mundane to focus on the
          exceptional."
        </h2>
<div className="flex items-center justify-center gap-4">
<div className="text-left">
<div className="text-sm font-semibold text-white">
              Jesse Martin Innovations
            </div>
<div className="text-xs text-neutral-500">
              AI Automation Architecture
            </div>
</div>
</div>
</div>
</section>
<section className="relative py-24 px-6 bg-[#080808]" id="order">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-4xl font-medium text-white tracking-tight mb-6">
            Ready to automate your business?
          </h2>
<p className="text-neutral-400 max-w-md mb-8">
            Schedule a free consultation to identify opportunities to transform
            your processes.
          </p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-sm text-neutral-300">
<iconify-icon className="text-[#0A8F6A]" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Comprehensive Workflow Audit</span>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-300">
<iconify-icon className="text-[#0A8F6A]" icon="solar:check-circle-linear"></iconify-icon>
<span>Custom Architecture Blueprint</span>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-300">
<iconify-icon className="text-[#0A8F6A]" icon="solar:check-circle-linear"></iconify-icon>
<span>Rapid Deployment</span>
</div>
</div>
</div>
<div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 shadow-2xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 ml-1">
                  First Name
                </label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0A8F6A]/50 transition-colors" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 ml-1">
                  Last Name
                </label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0A8F6A]/50 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 ml-1">
                Work Email
              </label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0A8F6A]/50 transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 ml-1">
                Message
              </label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0A8F6A]/50 transition-colors resize-none" placeholder="Tell us about your current challenges.." rows="4"></textarea>
</div>
<button className="w-full py-3.5 rounded-xl bg-[#0A8F6A] hover:bg-[#097a5b] text-white text-sm font-semibold tracking-tight transition-colors mt-2" type="button">
              Request Consultation
            </button>
</form>
</div>
</div>
</section>
<footer className="bg-black border-white/5 border-t pt-16 pr-6 pb-8 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex gap-2 group mb-6 gap-x-2 gap-y-2 items-center">
<i className="text-[#0A8F6A] w-6 h-6" data-lucide="cpu"></i>
<span className="text-sm font-semibold tracking-tight text-white font-manrope uppercase">
                JESSE MARTIN INNOVATIONS
              </span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed mb-6">
              Building the future of work. Replace manual labor with code.
            </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
<ul className="space-y-3 text-xs text-neutral-500 font-medium">
<li className="">
<a className="hover:text-[#0A8F6A] transition-colors" href="#">
                  Workflow Automation
                </a>
</li>
<li className="">
<a className="hover:text-[#0A8F6A] transition-colors" href="#">
                  Support AI
                </a>
</li>
<li className="">
<a className="hover:text-[#0A8F6A] transition-colors" href="#">
                  Outreach Systems
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
<ul className="space-y-3 text-xs text-neutral-500 font-medium">
<li className="">
<a className="hover:text-[#0A8F6A] transition-colors" href="#">
                  About Us
                </a>
</li>
<li className="">
<a className="hover:text-[#0A8F6A] transition-colors" href="#">
                  Case Studies
                </a>
</li>
<li className="">
<a className="hover:text-[#0A8F6A] transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
<ul className="space-y-3 text-xs text-neutral-500 font-medium">
<li className="">
<a className="hover:text-[#0A8F6A] transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-[#0A8F6A] transition-colors" href="#">
                  Terms
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600">
<p className="">© 2024 Jesse Martin Innovations. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span>Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}

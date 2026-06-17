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
      


      lucide.createIcons();
    


      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      const line1 = document.getElementById('line-1');
      const line2 = document.getElementById('line-2');

      btn.addEventListener('click', function() {
        const isHidden = menu.classList.contains('hidden');

        if (isHidden) {
          menu.classList.remove('hidden');
          menu.classList.add('animate-quick-fade');
          line1.classList.remove('top-[6px]');
          line1.classList.add('top-1/2', '-translate-y-1/2', 'rotate-45');
          line2.classList.remove('bottom-[6px]');
          line2.classList.add('bottom-1/2', 'translate-y-1/2', '-rotate-45');
        } else {
          menu.classList.add('hidden');
          menu.classList.remove('animate-quick-fade');
          line1.classList.remove('top-1/2', '-translate-y-1/2', 'rotate-45');
          line1.classList.add('top-[6px]');
          line2.classList.remove('bottom-1/2', 'translate-y-1/2', '-rotate-45');
          line2.classList.add('bottom-[6px]');
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

<div className="absolute inset-0 bg-[#050505]/30"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
<div className="absolute inset-0 w-full h-full opacity-[0.05]">
<div className="line line-anim line-1 absolute w-px h-full top-0 left-1/2 bg-white" style={{marginLeft: '-22.5vw'}}></div>
<div className="line line-anim line-2 absolute w-px h-full top-0 left-1/2 bg-white"></div>
<div className="line line-anim line-3 absolute w-px h-full top-0 left-1/2 bg-white" style={{marginLeft: '22.5vw'}}></div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-orange-500/10 bg-[#050505]/90 backdrop-blur-3xl animate-enter-down">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between relative z-50">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="bg-orange-400 mix-blend-normal w-5 h-5 rounded-sm shadow-lg rotate-45"></div>
<span className="font-semibold text-white tracking-tight">ATLAS</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="/pricing">
            Pricing
          </a>
<a className="hover:text-white transition-colors" href="/about-us">
            About us
          </a>
<a className="hover:text-white transition-colors" href="/infrastructure">
            Infrastructure
          </a>
<a className="hover:text-white transition-colors" href="/the-protocol-2">
            Protocol
          </a>
</div>
<a className="hidden md:flex group overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-xs font-medium text-white tracking-widest rounded-full py-2.5 px-6 relative items-center justify-center" href="#apply">
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-black"></div>
</div>
<div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>
<span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
            Book Audit Call
          </span>
</a>
<button aria-label="Toggle Menu" className="md:hidden relative w-10 h-10 flex items-center justify-center text-slate-300 hover:text-white focus:outline-none z-50" id="mobile-menu-btn">
<div className="relative w-6 h-6 pointer-events-none">
<span className="absolute left-0 right-0 top-[6px] h-[2px] bg-current rounded-full transition-all duration-300 ease-out origin-center" id="line-1"></span>
<span className="absolute left-0 right-0 bottom-[6px] h-[2px] bg-current rounded-full transition-all duration-300 ease-out origin-center" id="line-2"></span>
</div>
</button>
</div>
<div className="hidden md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-[120px] flex flex-col items-start justify-start gap-8 z-40 pl-8 pt-32" id="mobile-menu">
<a className="text-3xl font-semibold text-white hover:text-orange-400 transition-colors tracking-tight" href="/pricing">
          Pricing
        </a>
<a className="text-3xl font-semibold text-white hover:text-orange-400 transition-colors tracking-tight" href="/about-us">
          About us
        </a>
<a className="text-3xl font-semibold text-white hover:text-orange-400 transition-colors tracking-tight" href="/infrastructure">
          Infrastructure
        </a>
<a className="text-3xl font-semibold text-white hover:text-orange-400 transition-colors tracking-tight" href="/the-protocol-2">
          Protocol
        </a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 max-w-6xl z-10 mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="animate-enter-up delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-md text-orange-400 text-[10px] font-mono uppercase tracking-widest mb-6 shadow-[0_0_15px_-5px_rgba(249,115,22,0.2)]">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            Accepting Q3 Clients
          </div>
<h1 className="animate-enter-up delay-200 md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight font-newsreader mb-6">
            Scale from
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 animate-gradient">
              Operator
            </span>
            to
            <span className="text-white">Owner</span>
            .
          </h1>
<p className="animate-enter-up delay-300 leading-relaxed text-lg text-slate-300 font-playfair max-w-md mb-8">
            A systematic approach to escaping the day-to-day operations of your
            agency. Reclaim 20 hours/week while increasing net profit.
          </p>
<div className="animate-enter-up delay-400 flex flex-col sm:flex-row gap-6 items-center sm:items-stretch">
<div className="inline-block bg-transparent">
<button className="shiny-cta focus:outline-none">
<span className="">Apply for Advisory</span>
</button>
</div>
<button className="px-8 py-4 glass-button text-slate-300 font-medium rounded-full flex items-center justify-center gap-2 h-[60px]">
<svg className="lucide lucide-play-circle w-4 h-4 text-slate-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
              Watch Case Study
            </button>
</div>
<div className="animate-enter-up delay-500 mt-8 flex items-center gap-4 text-xs text-slate-500 font-mono">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-700 ring-2 ring-black"></div>
<div className="w-6 h-6 rounded-full bg-slate-600 ring-2 ring-black"></div>
<div className="w-6 h-6 rounded-full bg-slate-500 ring-2 ring-black"></div>
</div>
<span className="font-medium tracking-tight text-slate-400">
              JOIN 140+ FOUNDERS SCALING TO $5M+
            </span>
</div>
</div>
<div className="relative group animate-enter-up delay-700">
<div className="absolute -inset-2 bg-gradient-to-tr from-orange-500/10 via-amber-500/5 to-orange-500/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-1000 blur-xl"></div>
<div className="relative glass-panel rounded-2xl p-8 bg-[#0a0a0a]/80 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
                Revenue Projection
              </span>
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 border border-white/5"></div>
</div>
</div>
<div className="space-y-8">
<div className="">
<div className="flex justify-between text-sm mb-3">
<span className="text-slate-400 font-medium">Current MRR</span>
<span className="text-slate-300 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10 shadow-sm">
                    $50,000
                  </span>
</div>
<div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-visible">
<input className="cursor-pointer opacity-0 w-full h-full z-10 absolute top-0" type="range"/>
<div className="absolute left-0 top-0 h-full bg-white rounded-full w-1/3"></div>
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0a0a0a] border border-white/30 rounded-full shadow-md pointer-events-none ring-2 ring-white/10"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-sm mb-2">
<span className="text-slate-400 font-medium">
                    Projected (12 Months)
                  </span>
<span className="text-orange-400 font-mono font-bold bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                    $165,000
                  </span>
</div>
<div className="h-24 flex items-end gap-2 mt-4 px-1">
<div className="w-full bg-white/5 border-t border-white/10 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-white/5 border-t border-white/10 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-white/10 border-t border-white/10 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-white/10 border-t border-white/10 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-gradient-to-t from-orange-600 to-orange-400 border-t border-orange-300 rounded-t-sm h-[90%] shadow-[0_10px_20px_-5px_rgba(249,115,22,0.3)] relative overflow-hidden group-hover:scale-y-105 transition-transform origin-bottom duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-white/50"></div>
</div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
<div className="text-xs text-slate-500 font-medium">
                Based on ATLAS system averages
              </div>
<div className="flex items-center gap-2 text-orange-400 text-xs font-mono bg-orange-500/10 px-2 py-1 rounded border border-orange-500/20 font-semibold">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
                +230% YoY
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative z-10 animate-enter-fade delay-800">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-8 font-semibold">
          Trusted by leadership at
        </p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<iconify-icon className="text-white hover:text-orange-200" icon="simple-icons:stripe" width="60"></iconify-icon>
<iconify-icon className="text-white hover:text-orange-200" icon="simple-icons:airbnb" width="80"></iconify-icon>
<iconify-icon className="text-white hover:text-orange-200" icon="simple-icons:vercel" width="80"></iconify-icon>
<iconify-icon className="text-white hover:text-orange-200" icon="simple-icons:linear" width="80"></iconify-icon>
<iconify-icon className="text-white hover:text-orange-200" icon="simple-icons:shopify" width="80"></iconify-icon>
</div>
</div>
</section>

<section className="sm:p-8 max-w-6xl relative glass-panel rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 z-10 overflow-hidden">
<div className="absolute inset-0 bg-[#0a0a0a]/50"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
<div className="flex flex-col min-h-full justify-between">
<div>
<span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">
              The Infrastructure
            </span>
<h2 className="text-[32px] sm:text-5xl lg:text-5xl leading-[1] text-white tracking-tighter mt-4 font-semibold">
              A system built for speed and focus.
            </h2>
<div className="mt-12 relative">
<div className="hidden sm:flex flex-col gap-8 relative text-neutral-300">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-orange-500 via-amber-500 to-slate-800"></div>
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-4 h-4 z-10 relative bg-[#0a0a0a] border-orange-500 border-2 rounded-full mt-1 shadow-[0_0_10px_rgba(249,115,22,0.5)]">
<div className="w-1.5 h-1.5 absolute top-0.5 left-0.5 bg-orange-500 rounded-full"></div>
</div>
<div className="flex-1">
<span className="text-base font-semibold text-white">
                      Pipeline Velocity
                    </span>
<p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      Automated lead ingestion and qualification. Remove manual
                      touchpoints from the sales cycle.
                    </p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-amber-500 bg-[#0a0a0a] z-10 relative mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-0.5 left-0.5"></div>
</div>
<div className="flex-1">
<span className="text-base font-semibold text-white">
                      Operational Clarity
                    </span>
<p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      SOPs that stick. Real-time dashboards replacing weekly
                      status meetings.
                    </p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-slate-600 bg-[#0a0a0a] z-10 relative mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-slate-600 absolute top-0.5 left-0.5"></div>
</div>
<div className="flex-1">
<span className="text-base font-semibold text-white">
                      Profit Maximization
                    </span>
<p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      Financial modeling to optimize margins and prepare for
                      potential exit.
                    </p>
</div>
</div>
</div>
</div>
</div>
<div className="w-full mt-10">
<p className="text-sm font-medium text-white tracking-tight">
              Accelerate your transition
            </p>
<p className="text-sm text-slate-400 mt-1 max-w-sm">
              Stop acting as the employee of your own company. Install the OS
              that runs itself.
            </p>
<a className="inline-flex items-center justify-center gap-2 h-10 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium text-white border border-white/20 bg-white/5 rounded-full mt-6 px-5 backdrop-blur-md" href="#methodology">
              Explore the Protocol
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-orange-500"></span>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4 relative">
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border border-white/10 rounded-2xl group shadow-2xl">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur font-mono">
                KPI_TRACK
              </span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">
                Live Analytics
              </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border border-white/10 rounded-2xl group shadow-2xl">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90"></div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur font-mono">
                DELEGATION
              </span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">
                Team Sync
              </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border border-white/10 rounded-2xl group shadow-2xl">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">
                Revenue Operations
              </p>
</div>
</article>
<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border border-white/10 rounded-2xl group shadow-2xl">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">
                Exit Strategy
              </p>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white tracking-tight">
          The Founder's Trap
        </h2>
<p className="text-slate-400 max-w-xl text-lg">
          Most agencies hit a glass ceiling at $30k/mo. The systems that got you
          here are the same ones holding you back.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl glass-panel bg-white/[0.02] hover:bg-white/[0.04] hover:shadow-xl hover:shadow-orange-500/5 transition-all group duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all shadow-sm">
<svg className="lucide lucide-hourglass w-5 h-5" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 22h14"></path>
<path d="M5 2h14"></path>
<path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
<path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Time Poverty</h3>
<p className="text-sm text-slate-400 leading-relaxed">
            You're the chief firefighter. Nothing moves forward unless you push
            it. You haven't taken a real vacation in years.
          </p>
</div>
<div className="p-8 rounded-2xl glass-panel bg-white/[0.02] hover:bg-white/[0.04] hover:shadow-xl hover:shadow-orange-500/5 transition-all group duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all shadow-sm">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-3">
            Revenue Rollercoaster
          </h3>
<p className="text-sm text-slate-400 leading-relaxed">
            Feast or famine. You rely on referrals because you don't have a
            predictable client acquisition engine installed.
          </p>
</div>
<div className="p-8 rounded-2xl glass-panel bg-white/[0.02] hover:bg-white/[0.04] hover:shadow-xl hover:shadow-orange-500/5 transition-all group duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-300 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all shadow-sm">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Team Stagnation</h3>
<p className="text-sm text-slate-400 leading-relaxed">
            You hire help, but end up redoing their work. You lack the SOPs and
            training infrastructure to delegate effectively.
          </p>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative overflow-hidden border-y border-white/5 z-10" id="methodology">
<div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-24">
<div>
<span className="text-orange-500 font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">
              The Protocol
            </span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              The ATLAS Operating System
            </h2>
</div>
<p className="text-slate-400 max-w-sm mt-4 md:mt-0 text-sm">
            We don't sell courses. We install infrastructure. A 4-phase
            transformation over 12 weeks.
          </p>
</div>
<div className="relative">
<div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent border-r border-dashed border-orange-500/30"></div>
<div className="flex flex-col md:flex-row items-center gap-12 mb-24 relative group">
<div className="md:w-1/2 flex justify-end">
<div className="glass-panel bg-white/[0.03] p-8 rounded-2xl w-full max-w-sm hover:border-orange-500/30 transition-all duration-500 relative shadow-lg shadow-black/50">
<span className="absolute -top-4 -right-4 w-10 h-10 glass-button rounded-xl flex items-center justify-center font-mono text-xs font-bold text-orange-400 border border-orange-500/30 shadow-lg shadow-orange-900/20 bg-[#0a0a0a]">
                  01
                </span>
<h4 className="text-white font-semibold mb-2 text-lg">
                  Audit &amp; Simplification
                </h4>
<p className="text-sm text-slate-400 leading-relaxed">
                  We strip your offer down to one core delivery mechanism.
                  Removal of operational drag.
                </p>
<div className="mt-6 flex gap-2">
<span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] text-slate-300 font-mono font-medium">
                    OFFER_DESIGN
                  </span>
<span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] text-slate-300 font-mono font-medium">
                    PRICING
                  </span>
</div>
</div>
</div>
<div className="w-4 h-4 rounded-full bg-[#050505] border-4 border-orange-500 z-10 shadow-[0_0_0_4px_rgba(249,115,22,0.2)]"></div>
<div className="md:w-1/2 text-sm text-slate-500 font-mono pl-8 font-medium">
              WEEK 1-2
              <span className="text-white">FOUNDATION PHASE</span>
</div>
</div>
<div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24 relative group">
<div className="md:w-1/2 flex justify-start">
<div className="glass-panel bg-white/[0.03] p-8 rounded-2xl w-full max-w-sm hover:border-orange-500/30 transition-all duration-500 relative shadow-lg shadow-black/50">
<span className="absolute -top-4 -left-4 w-10 h-10 glass-button rounded-xl flex items-center justify-center font-mono text-xs font-bold text-orange-400 border border-orange-500/30 shadow-lg shadow-orange-900/20 bg-[#0a0a0a]">
                  02
                </span>
<h4 className="text-white font-semibold mb-2 text-lg">
                  Acquisition Systems
                </h4>
<p className="text-sm text-slate-400 leading-relaxed">
                  Building outbound and inbound assets. Cold email
                  infrastructure and content funnels.
                </p>
<div className="mt-6 flex gap-2">
<span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] text-slate-300 font-mono font-medium">
                    LEAD_GEN
                  </span>
<span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] text-slate-300 font-mono font-medium">
                    CRM
                  </span>
</div>
</div>
</div>
<div className="w-4 h-4 rounded-full bg-[#050505] border-4 border-orange-500 z-10 shadow-[0_0_0_4px_rgba(249,115,22,0.2)]"></div>
<div className="md:w-1/2 text-sm text-slate-500 font-mono pr-8 text-right font-medium">
              WEEK 3-6
              <span className="text-white">GROWTH PHASE</span>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-12 relative group">
<div className="md:w-1/2 flex justify-end">
<div className="glass-panel bg-white/[0.03] p-8 rounded-2xl w-full max-w-sm hover:border-orange-500/30 transition-all duration-500 relative shadow-lg shadow-black/50">
<span className="absolute -top-4 -right-4 w-10 h-10 glass-button rounded-xl flex items-center justify-center font-mono text-xs font-bold text-orange-400 border border-orange-500/30 shadow-lg shadow-orange-900/20 bg-[#0a0a0a]">
                  03
                </span>
<h4 className="text-white font-semibold mb-2 text-lg">
                  Delegation &amp; Exit
                </h4>
<p className="text-sm text-slate-400 leading-relaxed">
                  Hiring the operator. Documenting SOPs. Removing you from
                  fulfillment completely.
                </p>
<div className="mt-6 flex gap-2">
<span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] text-slate-300 font-mono font-medium">
                    SOPs
                  </span>
<span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10 text-[10px] text-slate-300 font-mono font-medium">
                    HIRING
                  </span>
</div>
</div>
</div>
<div className="w-4 h-4 rounded-full bg-[#050505] border-4 border-orange-500 z-10 shadow-[0_0_0_4px_rgba(249,115,22,0.2)]"></div>
<div className="md:w-1/2 text-sm text-slate-500 font-mono pl-8 font-medium">
              WEEK 7-12
              <span className="text-white">SCALE PHASE</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="results">
<div className="flex items-center justify-between mb-10 px-2">
<div className="space-y-1">
<p className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
            Community
          </p>
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Founder Results
          </h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-slate-500">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
<span className="text-xs font-mono">VERIFIED MEMBERS</span>
</div>
</div>
<div className="relative overflow-hidden border-y border-white/5 bg-white/[0.01] mb-20 -mx-6 sm:mx-0 sm:rounded-2xl">
<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="relative py-8">
<div className="flex gap-4 sm:gap-5 animate-[marquee-ltr_45s_linear_infinite] w-max hover:pause">
<div className="flex gap-4 sm:gap-5">
<article className="shrink-0 w-[300px] md:w-[380px] rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-3">
<img alt="Avatar" className="w-8 h-8 rounded-full bg-slate-800 opacity-80 grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white">
                        Marcus Y.
                      </span>
<svg className="w-3 h-3 text-orange-500" fill="currentColor" viewbox="0 0 24 24">
<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
</svg>
</div>
<p className="text-xs text-slate-500">Scaled to $85k/mo</p>
</div>
</div>
<p className="text-sm text-slate-400">
                  "The audit revealed $12k/mo in wasted spend immediately. The
                  new offer structure closed 3 deals in week one."
                </p>
</article>
<article className="shrink-0 w-[300px] md:w-[380px] rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-3">
<img alt="Avatar" className="w-8 h-8 rounded-full bg-slate-800 opacity-80 grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white">
                        Sarah Jenkins
                      </span>
<svg className="w-3 h-3 text-orange-500" fill="currentColor" viewbox="0 0 24 24">
<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
</svg>
</div>
<p className="text-xs text-slate-500">Exited Ops completely</p>
</div>
</div>
<p className="text-sm text-slate-400">
                  "I haven't opened my email in 4 days. The team handles
                  everything using the ATLAS SOP database. Freedom."
                </p>
</article>
<article className="shrink-0 w-[300px] md:w-[380px] rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-3">
<img alt="Avatar" className="w-8 h-8 rounded-full bg-slate-800 opacity-80 grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=David"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white">
                        David Chen
                      </span>
<svg className="w-3 h-3 text-orange-500" fill="currentColor" viewbox="0 0 24 24">
<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
</svg>
</div>
<p className="text-xs text-slate-500">2.8x Profit Margin</p>
</div>
</div>
<p className="text-sm text-slate-400">
                  "We were stuck at $40k/mo for two years. Within 4 months of
                  installing the system, we hit $110k/mo."
                </p>
</article>
<article className="shrink-0 w-[300px] md:w-[380px] rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-3">
<img alt="Avatar" className="w-8 h-8 rounded-full bg-slate-800 opacity-80 grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white">
                        Alex R.
                      </span>
<svg className="w-3 h-3 text-orange-500" fill="currentColor" viewbox="0 0 24 24">
<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
</svg>
</div>
<p className="text-xs text-slate-500">
                      Built 6-figure pipeline
                    </p>
</div>
</div>
<p className="text-sm text-slate-400">
                  "The cold email infrastructure alone paid for the program in
                  the first 14 days. Insane ROI."
                </p>
</article>
<article className="shrink-0 w-[300px] md:w-[380px] rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-3">
<img alt="Avatar" className="w-8 h-8 rounded-full bg-slate-800 opacity-80 grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white">
                        Marcus Y.
                      </span>
<svg className="w-3 h-3 text-orange-500" fill="currentColor" viewbox="0 0 24 24">
<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
</svg>
</div>
<p className="text-xs text-slate-500">Scaled to $85k/mo</p>
</div>
</div>
<p className="text-sm text-slate-400">
                  "The audit revealed $12k/mo in wasted spend immediately. The
                  new offer structure closed 3 deals in week one."
                </p>
</article>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass-button rounded-xl p-6 text-center flex flex-col items-center justify-center bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
<span className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            $42M+
          </span>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
            Client Revenue Added
          </span>
</div>
<div className="glass-button rounded-xl p-6 text-center flex flex-col items-center justify-center bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
<span className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            2.8x
          </span>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
            Avg. Profit Increase
          </span>
</div>
<div className="glass-button rounded-xl p-6 text-center flex flex-col items-center justify-center bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
<span className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            14 Days
          </span>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
            Avg Time to ROI
          </span>
</div>
<div className="glass-button rounded-xl p-6 text-center flex flex-col items-center justify-center bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
<span className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            100%
          </span>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
            Money Back Guarantee
          </span>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden z-10" id="apply">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-[120px] rounded-full pointer-events-none opacity-50 animate-float"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
          Ready to build a
          <br/>
          self-sustaining agency?
        </h2>
<p className="text-slate-400 mb-10 text-lg">
          We only work with 5 new partners per quarter. Apply now to see if your
          agency qualifies for the ATLAS accelerator.
        </p>
<div className="glass-panel rounded-3xl p-2 md:p-12 text-left max-w-xl mx-auto bg-[#0a0a0a]/50 shadow-2xl shadow-orange-900/10">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-mono text-slate-500 uppercase ml-1 font-semibold">
                  First Name
                </label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all placeholder:text-slate-600 shadow-sm" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-mono text-slate-500 uppercase ml-1 font-semibold">
                  Last Name
                </label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all placeholder:text-slate-600 shadow-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-mono text-slate-500 uppercase ml-1 font-semibold">
                Work Email
              </label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all placeholder:text-slate-600 shadow-sm" placeholder="john@agency.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-mono text-slate-500 uppercase ml-1 font-semibold">
                Current Monthly Revenue
              </label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all appearance-none cursor-pointer shadow-sm">
<option className="bg-[#1a1a1a]">&lt; $10k/mo</option>
<option className="bg-[#1a1a1a]">$10k - $30k/mo</option>
<option className="bg-[#1a1a1a]">$30k - $80k/mo</option>
<option className="bg-[#1a1a1a]">$80k+/mo</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="pt-4">
<button className="group relative w-full overflow-hidden rounded-xl p-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]" type="button">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ea580c_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-xl bg-white/10 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 py-4 text-xs font-medium uppercase tracking-widest text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors duration-300 group-hover:text-white">
<span className="relative z-10">Book Strategy Session</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
<p className="text-center text-[10px] text-slate-500 mt-4 font-medium">
              By clicking above, you agree to our Terms. Limited spots available
              for Q3.
            </p>
</form>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 z-10 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-20">

<div className="col-span-2 md:col-span-4 pr-0 md:pr-10">
<div className="flex items-center gap-2 mb-6">
<div className="bg-orange-400 w-5 h-5 rounded-sm shadow-lg rotate-45"></div>
<span className="font-semibold text-white tracking-tight">ATLAS</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              ATLAS is a performance infrastructure for agency founders. We
              provide the systems, SOPs, and coaching required to scale revenue
              while removing yourself from daily operations.
            </p>
<div className="flex gap-5">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg data-lucide="github" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2 md:col-start-7">
<h4 className="text-white font-medium mb-6">Product</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li>
<a className="hover:text-orange-400 transition-colors" href="/infrastructure">
                  Infrastructure
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="/the-protocol-2">
                  Protocol
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="/pricing">
                  Pricing
                </a>
</li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li>
<a className="hover:text-orange-400 transition-colors" href="/about-us">
                  About us
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="hover:text-orange-400 transition-colors" href="#">
                  Terms
                </a>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div className="text-xs text-slate-500">
            © 2025 ATLAS Systems Inc. All rights reserved.
          </div>
<div className="flex items-center gap-2">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-xs font-mono text-slate-400 font-medium">
              All systems operational
            </span>
</div>
</div>
</div>
</footer>




    </>
  );
}

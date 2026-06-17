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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'fade-in': 'fadeIn 800ms ease-in-out forwards',
'fadeSlideIn': 'fadeSlideIn 0.8s ease-out forwards',
'breathe': 'breathe 3s ease-in-out infinite',
'floatSlow': 'floatSlow 4s ease-in-out infinite',
'glowPulse': 'glowPulse 3s ease-in-out infinite',
'bg-pan': 'bg-pan 3s linear infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
fadeSlideIn: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
breathe: {
'0%, 100%': { opacity: '0.7', transform: 'scale(0.95)' },
'50%': { opacity: '1', transform: 'scale(1.05)' },
},
floatSlow: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-5px)' },
},
glowPulse: {
'0%, 100%': { filter: 'brightness(1)' },
'50%': { filter: 'brightness(1.25)' },
},
'bg-pan': {
'0%': { backgroundPosition: '0% center' },
'100%': { backgroundPosition: '-200% center' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



              document.write(new Date().getFullYear())
            
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
      

<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tighter text-white">
          PEATLAB
        </div>
<a className="text-sm font-medium text-white px-4 py-2 rounded-full transition-opacity hover:opacity-90 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-bg-pan" href="#contact">
          Get a Consultation
        </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex-grow flex items-center">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl aspect-square bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center opacity-0 animate-fade-in">
<div className="mb-8 flex justify-center">
<div className="relative flex items-center px-8 py-3 bg-black border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white"></div>
<span className="font-mono text-2xl md:text-3xl font-medium tracking-[0.3em] text-white uppercase relative z-10 flex items-center gap-3">
<span className="w-3 h-3 bg-white animate-pulse"></span>
              PEATLAB
            </span>
</div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
          Digital Transformation Partner
        </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
          Empowering your business with
          <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300">
            Data, AI, and Digital Marketing
          </span>
          .
        </h1>
<p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          PEATLAB LLC is your reliable partner in digital transformation. We
          bridge the gap between complex technology and business growth by
          providing top-tier analytics, AI solutions, and marketing strategies.
        </p>
<a className="inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-bg-pan" href="#contact">
          Get a Consultation
          <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 border-t border-slate-800/50 bg-slate-900/20 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
            What we do
          </h2>
<p className="text-base text-slate-400 max-w-2xl">
            Core services designed to scale your operations and drive measurable
            results.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full" data-animate-children="true">

<div className="lg:col-span-2 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 animate-fadeSlideIn bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl relative backdrop-blur [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] group">
<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.06), 0 40px 120px rgba(6,182,212,0.1)'}}></div>
<div className="sm:p-6 p-5">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">
                  AI Solutions Development
                </h3>
</div>
<p className="text-sm text-slate-400 mb-6 max-w-lg mt-1">
                Step into the future. We design, customize, and implement
                Artificial Intelligence solutions tailored to your specific
                business needs to automate tasks and boost efficiency.
              </p>
<div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 animate-fadeSlideIn" style={{animationDelay: '.08s'}}>
<div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800">
<span className="inline-flex items-center gap-2 text-[11px] text-cyan-200 bg-cyan-900/30 rounded-full px-3 py-0.5 border border-cyan-700/50">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-breathe"></span>
                    AI Assistant Active
                  </span>
<span className="text-[11px] text-slate-400 font-mono">
                    GPT-4 Integration
                  </span>
</div>
<div className="px-4 py-3 space-y-3">
<div className="flex justify-end">
<div className="max-w-[85%] rounded-xl px-3 py-2 text-xs text-white border border-cyan-500/30 shadow-[0_4px_12px_rgba(6,182,212,0.15)] animate-glowPulse bg-gradient-to-r from-cyan-600 to-blue-600">
                      Automate our customer support ticketing process.
                    </div>
</div>
<div className="flex items-start gap-2 mt-2">
<div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full animate-floatSlow" style={{animationDuration: '5s', animationDelay: '.1s'}}>
<iconify-icon className="text-xs" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="flex-1 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden animate-fadeSlideIn" style={{animationDelay: '.16s'}}>
<div className="px-3 py-1.5 border-b border-slate-800 text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                        Workflow Generated
                      </div>
<pre className="px-3 py-2 font-mono text-[11px] leading-5 text-slate-300 whitespace-pre-wrap">Connected to Zendesk API.
Routing tickets using NLP model.
Auto-responding to L1 queries.
Estimated time saved: <span className="text-emerald-400">40 hrs/wk</span>.</pre>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-slate-800 hover:border-slate-700 bg-slate-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 animate-fadeSlideIn [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] group" style={{animationDelay: '.05s'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 24px 70px rgba(168,85,247,0.1)'}}></div>
<div className="p-5 h-full flex flex-col">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">
                  Process Optimization
                </h3>
</div>
<p className="text-sm text-slate-400 mt-1 mb-6">
                Streamline operations. We implement smart digital tools to save
                time and reduce costs.
              </p>
<div className="mt-auto rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80">
<div className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/70 border-b border-slate-800">
<span className="w-2 h-2 rounded-full bg-rose-500/80 animate-breathe"></span>
<span className="w-2 h-2 rounded-full bg-amber-400/80 animate-breathe" style={{animationDelay: '.1s'}}></span>
<span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-breathe" style={{animationDelay: '.2s'}}></span>
<span className="ml-2 text-[11px] text-slate-400 font-mono">
                    workflow.ts
                  </span>
</div>
<div className="p-3 font-mono text-[11px] leading-5">
<pre className="whitespace-pre-wrap"><span className="text-slate-500">01</span> <span className="text-slate-500">// Before</span>
<span className="text-slate-500">02</span> <span className="px-1 rounded bg-rose-500/10 text-rose-400">- Manual Data Entry()</span>
<span className="text-slate-500">03</span> <span className="text-slate-500">// After</span>
<span className="text-slate-500">04</span> <span className="px-1 rounded bg-emerald-500/10 text-emerald-400">+ Automated API Sync()</span></pre>
</div>
<div className="px-3 py-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
<span className="text-slate-400">Optimized</span>
</div>
<span className="text-emerald-400 font-medium">
                    +32% efficiency
                  </span>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-slate-800 hover:border-slate-700 bg-slate-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 animate-fadeSlideIn [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] group" style={{animationDelay: '.1s'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 30px 80px rgba(59,130,246,0.1)'}}></div>
<div className="p-5 h-full flex flex-col">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">
                  Analytics Setup
                </h3>
</div>
<p className="text-sm text-slate-400 mt-1 mb-6">
                Robust systems that give you a transparent view of user behavior
                and campaign performance.
              </p>
<div className="mt-auto rounded-xl bg-slate-950/80 border border-slate-800 p-4">
<p className="text-[10px] uppercase tracking-wider text-blue-400 font-medium mb-3">
                  Live Metrics
                </p>
<div className="flex items-end gap-1.5 h-12 w-full">
<div className="flex-1 bg-blue-500/20 rounded-t-sm h-[40%] animate-pulse"></div>
<div className="flex-1 bg-blue-500/30 rounded-t-sm h-[60%] animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="flex-1 bg-blue-500/40 rounded-t-sm h-[50%] animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="flex-1 bg-blue-500/60 rounded-t-sm h-[80%] animate-pulse" style={{animationDelay: '0.3s'}}></div>
<div className="flex-1 bg-gradient-to-t from-blue-500/80 to-cyan-400 rounded-t-sm h-[100%] animate-pulse" style={{animationDelay: '0.4s'}}></div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
<span className="text-xs text-slate-400">Conversion Rate</span>
<span className="text-[11px] font-medium px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    +4.2%
                  </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-slate-800 hover:border-slate-700 bg-slate-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 animate-fadeSlideIn [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] group" style={{animationDelay: '.15s'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 30px 80px rgba(99,102,241,0.1)'}}></div>
<div className="p-5 sm:p-6 h-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
<div className="flex-1">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">
                    Digital Marketing
                  </h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed mt-1 mb-6">
                  Data-driven marketing campaigns that convert. From targeted
                  advertising to comprehensive digital strategies, we ensure
                  your brand reaches the right audience at the right time with
                  maximum ROI.
                </p>
<div className="mt-5 flex flex-wrap gap-2">
<span className="text-[11px] px-2.5 py-1 rounded-full border border-slate-700 bg-slate-800 text-slate-300">
                    PPC Campaigns
                  </span>
<span className="text-[11px] px-2.5 py-1 rounded-full border border-slate-700 bg-slate-800 text-slate-300">
                    SEO Strategy
                  </span>
<span className="text-[11px] px-2.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                    Conversion Focus
                  </span>
</div>
</div>
<div className="w-full lg:w-64 rounded-xl bg-slate-950/80 border border-slate-800 p-4 flex-shrink-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full border border-indigo-500/30 bg-indigo-500/20 flex items-center justify-center text-indigo-400 animate-floatSlow">
<iconify-icon className="text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-white font-medium">
                      Q3 Campaign
                    </div>
<div className="text-[10px] text-emerald-400">
                      Status: Exceeding KPIs
                    </div>
</div>
</div>
<div className="space-y-2.5">
<div className="rounded-lg bg-slate-900 border border-slate-800 p-2.5 text-xs animate-fadeSlideIn" style={{animationDelay: '.1s'}}>
<div className="flex justify-between mb-1.5 text-slate-400">
<span>Reach</span>
<span className="text-white font-medium">124K</span>
</div>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-400 w-[85%] rounded-full"></div>
</div>
</div>
<div className="rounded-lg bg-slate-900 border border-slate-800 p-2.5 text-xs animate-fadeSlideIn" style={{animationDelay: '.2s'}}>
<div className="flex justify-between mb-1.5 text-slate-400">
<span>ROAS</span>
<span className="text-emerald-400 font-medium">4.2x</span>
</div>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 w-[92%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
              Proven expertise across industries
            </h2>
<p className="text-sm md:text-base text-slate-400">
              We don't believe in one-size-fits-all. We have a deep
              understanding of the unique challenges and opportunities in
              various sectors:
            </p>
</div>
</div>
<div className="flex flex-wrap gap-4">
<div className="flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex-1 min-w-[280px] transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/80 hover:border-slate-700 hover:shadow-lg hover:shadow-black/20">
<div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">E-commerce</h4>
<p className="text-xs text-slate-400">
                Scaling online stores and optimizing conversion rates.
              </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex-1 min-w-[280px] transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/80 hover:border-slate-700 hover:shadow-lg hover:shadow-black/20">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<iconify-icon className="text-xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">
                Offline Businesses
              </h4>
<p className="text-xs text-slate-400">
                Bridging the gap between physical retail and digital presence.
              </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex-1 min-w-[280px] transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/80 hover:border-slate-700 hover:shadow-lg hover:shadow-black/20">
<div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
<svg className="w-[1.25em] h-[1.25em]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13h18M5 13l1.5-6h11L19 13M5 13v5a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-5m-14 0a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">
                Car Dealerships
              </h4>
<p className="text-xs text-slate-400">
                Driving qualified leads and optimizing automotive sales funnels.
              </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex-1 min-w-[280px] transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/80 hover:border-slate-700 hover:shadow-lg hover:shadow-black/20">
<div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
<iconify-icon className="text-xl" icon="solar:scale-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Law Firms</h4>
<p className="text-xs text-slate-400">
                Building authoritative digital profiles and generating
                high-ticket inquiries.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-slate-800/50 bg-slate-900/10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div>
<h2 className="text-sm font-medium text-blue-400 mb-2 uppercase tracking-widest">
            Transparent &amp; Flexible Pricing
          </h2>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-6">
            Hire a dedicated team of experts          </h3>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">
            We value your time and budget. That is why we operate on a
            transparent hourly billing model. You get access to an entire team
            of senior specialists—marketers, analysts, and developers—working
            synergistically on your project.
          </p>
<div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden mb-8">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-5xl font-semibold tracking-tight text-white">
                $20
              </span>
<span className="text-sm text-slate-500 font-medium">/ hour</span>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-300">
                  Pay only for the actual time spent
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-300">
                  Full reporting on tasks completed
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-300">
                  Access to a cross-functional team
                </span>
</li>
</ul>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 h-full flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
<span className="text-slate-950 font-bold tracking-tighter text-xs">
                WP
              </span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">
              Pay with Cryptocurrency
            </h3>
</div>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">
            We embrace modern financial solutions. You can easily and securely
            pay for our services using cryptocurrency.
          </p>

<div className="w-full h-40 rounded-xl border border-dashed border-slate-700 bg-slate-950/50 flex flex-col items-center justify-center relative mb-8 group">
<iconify-icon className="text-2xl text-slate-600 mb-2 group-hover:text-slate-400 transition-colors" icon="solar:code-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-slate-500 font-medium px-4 text-center">
              Whitepay crypto checkout iframe placeholder
            </span>
</div>
<button className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors border border-slate-700">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
            Pay with Crypto
          </button>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
            Let's discuss Your Project
          </h2>
<p className="text-sm text-slate-400">
            Fill out the form below and our team will get back to you promptly.
          </p>
</div>

<form className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800 group">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
<div className="space-y-1.5 relative">
<label className="text-xs font-medium text-slate-400 ml-1">
                Full Name / Company
                <span className="text-blue-500">*</span>
</label>
<input className="peer w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 [&amp;:not(:placeholder-shown):invalid]:border-red-500/50 [&amp;:not(:placeholder-shown):invalid]:ring-1 [&amp;:not(:placeholder-shown):invalid]:ring-red-500/50 transition-all placeholder-slate-600" placeholder="John Doe / Acme Corp" required="" type="text"/>
<span className="text-[10px] text-red-400 opacity-0 peer-[&amp;:not(:placeholder-shown):invalid]:opacity-100 transition-opacity absolute -bottom-4 left-1">
                Please provide your name
              </span>
</div>
<div className="space-y-1.5 relative">
<label className="text-xs font-medium text-slate-400 ml-1">
                Email Address
                <span className="text-blue-500">*</span>
</label>
<input className="peer w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 [&amp;:not(:placeholder-shown):invalid]:border-red-500/50 [&amp;:not(:placeholder-shown):invalid]:ring-1 [&amp;:not(:placeholder-shown):invalid]:ring-red-500/50 transition-all placeholder-slate-600" placeholder="john@example.com" required="" type="email"/>
<span className="text-[10px] text-red-400 opacity-0 peer-[&amp;:not(:placeholder-shown):invalid]:opacity-100 transition-opacity absolute -bottom-4 left-1">
                Please provide a valid email
              </span>
</div>
</div>
<div className="space-y-1.5 relative pt-2 md:pt-0">
<label className="text-xs font-medium text-slate-400 ml-1">
              Phone Number
            </label>
<input className="peer w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 [&amp;:not(:placeholder-shown):invalid]:border-red-500/50 [&amp;:not(:placeholder-shown):invalid]:ring-1 [&amp;:not(:placeholder-shown):invalid]:ring-red-500/50 transition-all placeholder-slate-600" pattern="[+0-9\s\-\(\)]+" placeholder="+1 (555) 000-0000" type="tel"/>
<span className="text-[10px] text-red-400 opacity-0 peer-[&amp;:not(:placeholder-shown):invalid]:opacity-100 transition-opacity absolute -bottom-4 left-1">
              Please provide a valid phone format
            </span>
</div>
<div className="space-y-1.5 relative pt-2 md:pt-0">
<label className="text-xs font-medium text-slate-400 ml-1">
              How can we help you? / Your Questions
              <span className="text-blue-500">*</span>
</label>
<textarea className="peer w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 [&amp;:not(:placeholder-shown):invalid]:border-red-500/50 [&amp;:not(:placeholder-shown):invalid]:ring-1 [&amp;:not(:placeholder-shown):invalid]:ring-red-500/50 transition-all placeholder-slate-600 resize-none" minlength="10" placeholder="Tell us about your project needs..." required="" rows="4"></textarea>
<span className="text-[10px] text-red-400 opacity-0 peer-[&amp;:not(:placeholder-shown):invalid]:opacity-100 transition-opacity absolute -bottom-4 left-1">
              Please provide more details (min 10 characters)
            </span>
</div>
<button className="w-full text-white px-6 py-3.5 rounded-lg text-sm font-medium transition-opacity mt-6 group-invalid:opacity-70 group-invalid:cursor-not-allowed hover:opacity-90 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-bg-pan" type="submit">
            Send Request
          </button>
</form>
</div>
</section>

<footer className="border-t border-slate-800/50 bg-slate-950 pt-16 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">

<div>
<div className="text-lg font-semibold tracking-tighter text-white mb-4">
              PEATLAB
            </div>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Bridging the gap between complex technology and business growth.
            </p>
</div>

<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<h4 className="text-xs font-medium text-slate-300 uppercase tracking-wider mb-4">
                Office
              </h4>
<p className="text-sm text-slate-500 leading-relaxed flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                03062, Ukraine, Kyiv,
                <br/>
                Rene Descartes st.,
                <br/>
                building 4/2, office 7
              </p>
</div>
<div>
<h4 className="text-xs font-medium text-slate-300 uppercase tracking-wider mb-4">
                Contact
              </h4>
<a className="text-sm text-slate-500 hover:text-white transition-colors flex items-center gap-2" href="mailto:EDRD@peat-lab.com">
<iconify-icon className="text-slate-400" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                EDRD@peat-lab.com
              </a>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600">
            ©
            
            PEATLAB LLC. All rights reserved.
          </p>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<span className="sr-only">Terms</span>
<span className="text-xs">Terms of Service</span>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<span className="sr-only">Privacy</span>
<span className="text-xs">Privacy Policy</span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
magenta: {
400: '#e879f9',
500: '#d946ef',
600: '#c026d3',
900: '#701a75',
950: '#4a044e', // Deep magenta for subtle backgrounds
}
},
backgroundImage: {
'glow': 'conic-gradient(from 180deg at 50% 50%, #2a1b3d 0deg, #09090b 180deg, #2a1b3d 360deg)',
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-magenta-600 to-zinc-800 flex items-center justify-center text-white font-medium tracking-tighter group-hover:from-magenta-500 transition-all duration-300">
                    A
                </div>
<span className="text-sm font-medium tracking-tight text-white group-hover:text-zinc-200 transition-colors">AURA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#cases">Case Studies</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors tracking-tight" href="#contact">
                    Book Audit
                </a>
<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-magenta-600/20 blur-[120px] -z-10 rounded-full opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-8 fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-magenta-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-magenta-500"></span>
</span>
                Introducing Neural Campaigns V2.0
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-6 fade-in-up delay-100 max-w-4xl mx-auto leading-[1.1]">
                Marketing at the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">speed of thought.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up delay-200">
                Aura leverages proprietary LLMs and predictive analytics to automate growth, optimize spend, and personalize customer journeys at scale.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<a className="w-full sm:w-auto px-8 py-3.5 bg-magenta-600 hover:bg-magenta-500 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_-5px_rgba(217,70,239,0.5)] flex items-center justify-center gap-2" href="#cases">
                    View Case Studies
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-white text-sm font-medium rounded-full transition-all flex items-center justify-center" href="#services">
                    Explore Services
                </a>
</div>
</div>

<div className="mt-24 border-t border-white/5 pt-12 max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-zinc-500 mb-8 tracking-widest uppercase">Trusted by forward-thinking companies</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale mix-blend-screen">

<div className="text-lg font-semibold tracking-tighter text-white">ACME CORP</div>
<div className="text-lg font-semibold tracking-tighter text-white">ORBITAL</div>
<div className="text-lg font-semibold tracking-tighter text-white">QUANTA</div>
<div className="text-lg font-semibold tracking-tighter text-white">HYPERION</div>
<div className="text-lg font-semibold tracking-tighter text-white">ZENITH</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Intelligence as a Service</h2>
<p className="text-zinc-400 max-w-md text-sm md:text-base">We don't just run ads. We build autonomous marketing ecosystems.</p>
</div>
<a className="text-sm text-magenta-500 hover:text-magenta-400 flex items-center gap-1 transition-colors" href="#">
                    See full capabilities <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 bg-zinc-900/40 border border-white/5 hover:border-magenta-500/30 rounded-2xl transition-all duration-300 hover:bg-zinc-900/60 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-magenta-500" data-icon="lucide:cpu" data-width="24"></span>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-zinc-100" data-icon="lucide:bot" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Generative Copywriting</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Create thousands of on-brand ad variations in seconds. Our models learn your voice and iterate for maximum conversion.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify text-magenta-500" data-icon="lucide:check" data-width="12"></span> Multi-platform adaptation
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify text-magenta-500" data-icon="lucide:check" data-width="12"></span> Real-time A/B testing
                        </li>
</ul>
</div>

<div className="group relative p-8 bg-zinc-900/40 border border-white/5 hover:border-magenta-500/30 rounded-2xl transition-all duration-300 hover:bg-zinc-900/60 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-magenta-500" data-icon="lucide:bar-chart-big" data-width="24"></span>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-zinc-100" data-icon="lucide:line-chart" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Predictive Analytics</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Stop guessing. We analyze historical data to forecast trends and customer behaviors before they happen.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify text-magenta-500" data-icon="lucide:check" data-width="12"></span> Churn prediction
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify text-magenta-500" data-icon="lucide:check" data-width="12"></span> LTV forecasting
                        </li>
</ul>
</div>

<div className="group relative p-8 bg-zinc-900/40 border border-white/5 hover:border-magenta-500/30 rounded-2xl transition-all duration-300 hover:bg-zinc-900/60 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-magenta-500" data-icon="lucide:zap" data-width="24"></span>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-zinc-100" data-icon="lucide:target" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Programmatic Buying</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">AI-managed media buying across social, search, and display. Micro-adjustments made every millisecond.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify text-magenta-500" data-icon="lucide:check" data-width="12"></span> Automated bid management
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify text-magenta-500" data-icon="lucide:check" data-width="12"></span> Cross-channel attribution
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-white/5" id="cases">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-magenta-500 font-medium tracking-wide text-xs uppercase mb-3 block">Case Studies</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Proven Results</h2>
</div>
<div className="space-y-24">

<div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/5">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:scale-105 transition-transform duration-700">
<div className="w-64 h-64 rounded-full border border-magenta-500/30 flex items-center justify-center">
<div className="w-48 h-48 rounded-full border border-magenta-500/50 flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-32 h-32 rounded-full border border-magenta-500 bg-magenta-500/10 backdrop-blur-sm"></div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 flex gap-3">
<span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur border border-white/10 rounded-full text-white">FinTech</span>
<span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur border border-white/10 rounded-full text-white">Lead Gen</span>
</div>
</div>
<div className="space-y-8">
<div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">Scaling NeoBank's User Acquisition</h3>
<p className="text-zinc-400 text-lg">We utilized predictive modeling to identify high-value users before they clicked, reducing CAC by half while doubling volume.</p>
</div>
<div className="grid grid-cols-2 gap-6 border-y border-white/5 py-8">
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">240%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Increase in ROI</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">-45%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">CAC Reduction</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">12M+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Ad Impressions</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">3.5x</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Revenue Growth</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-magenta-400 transition-colors" href="#">
                            Read full case study <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
<div className="lg:order-2 relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/5">
<div className="absolute inset-0 bg-gradient-to-bl from-zinc-800 to-black"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:scale-105 transition-transform duration-700">
<div className="grid grid-cols-3 gap-2">
<div className="w-4 h-16 bg-zinc-700 rounded-full"></div>
<div className="w-4 h-24 bg-magenta-600 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]"></div>
<div className="w-4 h-12 bg-zinc-700 rounded-full"></div>
<div className="w-4 h-20 bg-magenta-500/50 rounded-full"></div>
<div className="w-4 h-32 bg-magenta-500 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]"></div>
<div className="w-4 h-16 bg-zinc-700 rounded-full"></div>
</div>
</div>
<div className="absolute bottom-6 left-6 flex gap-3">
<span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur border border-white/10 rounded-full text-white">SaaS</span>
<span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur border border-white/10 rounded-full text-white">Retention</span>
</div>
</div>
<div className="lg:order-1 space-y-8">
<div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">Automating Retention for CloudFlow</h3>
<p className="text-zinc-400 text-lg">Deployed a custom NLP engine to personalize email sequences and in-app messaging, drastically reducing churn rates.</p>
</div>
<div className="grid grid-cols-2 gap-6 border-y border-white/5 py-8">
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">92%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Automation Rate</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">18%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Churn Reduction</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">45k</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Hours Saved</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">2.1x</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">LTV Increase</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-magenta-400 transition-colors" href="#">
                            Read full case study <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Ready to upgrade your growth engine?</h2>
<p className="text-zinc-400 mb-10 max-w-xl mx-auto">Join the future of marketing. Our algorithms are ready to learn your business.</p>
<form className="max-w-sm mx-auto space-y-4 text-left">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Work Email</label>
<input className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-magenta-500 focus:ring-1 focus:ring-magenta-500 transition-all" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Company URL</label>
<input className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-magenta-500 focus:ring-1 focus:ring-magenta-500 transition-all" placeholder="company.com" type="text"/>
</div>
<button className="w-full bg-white hover:bg-zinc-200 text-black font-medium py-3 rounded-lg text-sm transition-colors mt-2" type="button">
                    Request Access
                </button>
<p className="text-center text-xs text-zinc-600 mt-4">Limited spots available for Q4 cohort.</p>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-white text-xs font-medium">A</div>
<span className="text-sm text-zinc-400">© 2024 Aura Inc.</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}

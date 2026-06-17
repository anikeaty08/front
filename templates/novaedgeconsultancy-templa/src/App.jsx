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
  


        // Scroll Reveal Animation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load

            // Number Counter Logic
            const counters = document.querySelectorAll('.counter');
            let hasAnimated = false;

            const animateCounters = () => {
                counters.forEach(counter => {
                    const target = parseFloat(counter.getAttribute('data-target'));
                    const isFloat = target % 1 !== 0;
                    const duration = 2000; // ms
                    const increment = target / (duration / 16); // 60fps
                    
                    let current = 0;
                    const updateCount = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = isFloat ? current.toFixed(1) : Math.ceil(current);
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
            };

            // Intersection Observer for Metrics
            const metricsSection = document.querySelector('.counter')?.closest('section');
            if(metricsSection) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !hasAnimated) {
                            animateCounters();
                            hasAnimated = true;
                        }
                    });
                }, { threshold: 0.5 });
                
                observer.observe(metricsSection);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#0B0C10]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0B0C10]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center">
<span className="iconify text-white group-hover:text-indigo-400 transition-colors duration-500" data-height="20" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="20"></span>
<div className="absolute inset-0 bg-indigo-500/50 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white">NovaEdge</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#services">Expertise</a>
<a className="hover:text-white transition-colors duration-300" href="#results">Results</a>
<a className="hover:text-white transition-colors duration-300" href="#insights">Insights</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block px-3 py-1.5 text-xs font-medium text-white border border-white/10 rounded-md hover:bg-white/5 hover:border-white/20 transition-all duration-300 shadow-[0_0_0_1px_rgba(0,0,0,1)] inset-shadow" href="#contact">
                    Book Consultation
                </a>
<button className="md:hidden text-white">
<span className="iconify" data-height="20" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

<div className="reveal delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-medium text-indigo-200 mb-8 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all cursor-default shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
                The Future of Enterprise Intelligence
            </div>

<h1 className="reveal delay-200 text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-8 leading-[1.05]">
                Empowering Business with <br className="hidden md:block"/> Intelligent Automation
            </h1>

<p className="reveal delay-300 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
                We transform Fortune 500 operations through bespoke AI strategies. Faster decisions. Smarter workflows. Tangible ROI.
            </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group w-full sm:w-auto px-6 py-3 bg-[#D9D9D9] text-black text-xs font-semibold rounded hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center flex items-center justify-center gap-2" href="#contact">
                    Start Integration
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-height="14" data-icon="lucide:chevron-right" data-strokeWidth="2" data-width="14"></span>
</a>
<a className="w-full sm:w-auto px-6 py-3 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/5 hover:border-white/20 transition-all text-center flex items-center justify-center" href="#services">
                    Explore Solutions
                </a>
</div>
</div>
</header>

<section className="border-y border-white/[0.06] bg-white/[0.01] py-10 relative overflow-hidden reveal">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Trusted by industry leaders</p>
</div>
<div className="mask-linear w-full inline-flex flex-nowrap overflow-hidden">
<div className="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 [&amp;_img]:max-w-none animate-scroll w-max">

<div className="flex items-center gap-16 md:gap-24 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter text-white">ACME CORP</span>
<span className="text-lg font-semibold tracking-tighter text-white">GLOBEX</span>
<span className="text-lg font-semibold tracking-tighter text-white">SOYIENT</span>
<span className="text-lg font-semibold tracking-tighter text-white">INITECH</span>
<span className="text-lg font-semibold tracking-tighter text-white">UMBRELLA</span>
<span className="text-lg font-semibold tracking-tighter text-white">MASSIVE</span>
<span className="text-lg font-semibold tracking-tighter text-white">Hooli</span>
<span className="text-lg font-semibold tracking-tighter text-white">Vehement</span>
</div>

<div className="flex items-center gap-16 md:gap-24 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter text-white">ACME CORP</span>
<span className="text-lg font-semibold tracking-tighter text-white">GLOBEX</span>
<span className="text-lg font-semibold tracking-tighter text-white">SOYIENT</span>
<span className="text-lg font-semibold tracking-tighter text-white">INITECH</span>
<span className="text-lg font-semibold tracking-tighter text-white">UMBRELLA</span>
<span className="text-lg font-semibold tracking-tighter text-white">MASSIVE</span>
<span className="text-lg font-semibold tracking-tighter text-white">Hooli</span>
<span className="text-lg font-semibold tracking-tighter text-white">Vehement</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/[0.06]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div className="reveal delay-100">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
                        $<span className="counter" data-target="4.5">0</span>B+
                    </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Value Generated</div>
</div>
<div className="reveal delay-200">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
<span className="counter" data-target="500">0</span>+
                    </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Workflows Automated</div>
</div>
<div className="reveal delay-300">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
<span className="counter" data-target="32">0</span>%
                    </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Efficiency Gain</div>
</div>
<div className="reveal delay-300">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
<span className="counter" data-target="99.9">0</span>%
                    </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Uptime Guaranteed</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:mb-28 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Architecting the Impossible</h2>
<p className="text-slate-400 max-w-xl text-lg font-light">We build the digital infrastructure that powers the next generation of industry leaders through three core pillars.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-100 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-300 border border-indigo-500/20 shadow-[0_0_15px_-5px_rgba(99,102,241,0.5)]">
<span className="iconify" data-height="20" data-icon="lucide:brain-circuit" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">AI Automation</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 h-20">
                            Deploy autonomous agents that handle complex workflows. Reduce overhead while increasing precision in real-time environments.
                        </p>
<div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-4"></div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-indigo-300 transition-colors" href="#">
                            Explore Automation <span className="iconify" data-height="12" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="12"></span>
</a>
</div>
</div>

<div className="reveal delay-200 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 text-purple-300 border border-purple-500/20 shadow-[0_0_15px_-5px_rgba(168,85,247,0.5)]">
<span className="iconify" data-height="20" data-icon="lucide:database" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Data Strategy</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 h-20">
                            Unify fragmented silos into a single source of truth. Architect scalable data lakes that serve as the foundation for intelligence.
                        </p>
<div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-4"></div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-purple-300 transition-colors" href="#">
                            View Infrastructure <span className="iconify" data-height="12" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="12"></span>
</a>
</div>
</div>

<div className="reveal delay-300 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-300 border border-emerald-500/20 shadow-[0_0_15px_-5px_rgba(16,185,129,0.5)]">
<span className="iconify" data-height="20" data-icon="lucide:line-chart" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Predictive Analytics</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 h-20">
                            Stop reacting to the market—anticipate it. Our models forecast trends, demand, and risk with up to 98% accuracy.
                        </p>
<div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-4"></div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-emerald-300 transition-colors" href="#">
                            See Forecasts <span className="iconify" data-height="12" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="12"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.06] bg-gradient-to-b from-white/[0.01] to-transparent" id="results">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 text-center">Trust in Transparency</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="reveal delay-100 p-8 md:p-10 rounded-xl bg-[#0B0C10] border border-white/[0.08] hover:border-white/[0.15] transition-colors relative overflow-hidden group">

<div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-all duration-700 rounded-full"></div>
<div className="relative z-10">
<div className="mb-6 text-indigo-400">
<span className="iconify" data-height="24" data-icon="lucide:quote" data-strokeWidth="1.5" data-width="24"></span>
</div>
<p className="text-lg text-slate-300 leading-relaxed mb-8 font-light">
                            "NovaEdge didn't just implement software; they redesigned our entire operational philosophy. The automated forecasting models have saved us over <span className="text-white font-medium">$12M in Q1 alone</span>."
                        </p>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center text-xs text-white">EC</div>
<div>
<div className="text-sm font-medium text-white">Elena Corves</div>
<div className="text-xs text-slate-500">CTO, Apex Financial Group</div>
</div>
</div>
</div>
</div>

<div className="reveal delay-200 p-8 md:p-10 rounded-xl bg-[#0B0C10] border border-white/[0.08] hover:border-white/[0.15] transition-colors relative overflow-hidden group">

<div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 blur-[50px] group-hover:bg-emerald-500/20 transition-all duration-700 rounded-full"></div>
<div className="relative z-10">
<div className="mb-6 text-emerald-400">
<span className="iconify" data-height="24" data-icon="lucide:quote" data-strokeWidth="1.5" data-width="24"></span>
</div>
<p className="text-lg text-slate-300 leading-relaxed mb-8 font-light">
                            "The precision of their data analytics strategy allows us to personalize user experiences at a scale we thought impossible. Truly a <span className="text-white font-medium">white-glove technical service</span>."
                        </p>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center text-xs text-white">MT</div>
<div>
<div className="text-sm font-medium text-white">Marcus Thorne</div>
<div className="text-xs text-slate-500">Director of Innovation, Velox Motors</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/[0.06] relative overflow-hidden" id="insights">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="reveal text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Stay Ahead of the Curve</h2>
<p className="reveal delay-100 text-slate-400 mb-10 font-light">Join our exclusive list for quarterly deep-dives into AI trends and enterprise automation strategies.</p>
<form className="reveal delay-200 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-1 bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all shadow-inner" placeholder="work@company.com" required="" type="email"/>
<button className="px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-slate-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]" type="submit">
                    Subscribe
                </button>
</form>
<p className="reveal delay-300 text-[10px] text-slate-600 mt-6 uppercase tracking-wider">No spam. Unsubscribe at any time.</p>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden border-t border-white/[0.06]" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to Evolve?</h2>
<p className="text-slate-400 text-lg font-light">Schedule your strategy session. Let's discuss how AI can redefine your competitive advantage.</p>
</div>
<form className="reveal delay-100 space-y-6 bg-[#0E0F14] p-8 md:p-12 rounded-2xl border border-white/[0.08] shadow-2xl relative">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
<div className="space-y-2">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Name</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Email</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="john@fortune500.com" type="email"/>
</div>
</div>
<div className="space-y-2 relative z-10">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Company</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="Company Name" type="text"/>
</div>
<div className="space-y-2 relative z-10">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Message</label>
<textarea className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors resize-none" placeholder="Tell us about your automation goals..." rows="4"></textarea>
</div>
<div className="pt-4 relative z-10">
<button className="w-full bg-gradient-to-b from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium py-3.5 rounded text-sm transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] border border-indigo-400/20" type="button">
                        Schedule Your Strategy Session
                    </button>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/[0.06] bg-[#0B0C10] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<span className="iconify text-white" data-height="20" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-base font-semibold tracking-tight text-white">NovaEdge</span>
</div>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed font-light">
                        Pioneering the intersection of luxury and logic. We help world-class organizations leverage the power of artificial intelligence.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">AI Automation</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Data Strategy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Predictive Analytics</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Consulting</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600">© 2023 NovaEdge Solutions. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:linkedin" data-strokeWidth="1.5" data-width="18"></span>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="18"></span>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:github" data-strokeWidth="1.5" data-width="18"></span>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

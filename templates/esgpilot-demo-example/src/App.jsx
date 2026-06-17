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



function toggleTheme() {
document.documentElement.classList.toggle('dark');
}
document.documentElement.classList.add('dark'); // Default to dark for "appealing" look



        const body = document.getElementById('main-body');
    const spotlightGroups = document.querySelectorAll('.spotlight-group');

    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;

      body.style.setProperty('--mouse-x', `${x}px`);
      body.style.setProperty('--mouse-y', `${y}px`);

      spotlightGroups.forEach(group => {
        const rect = group.getBoundingClientRect();
        const relX = x - rect.left;
        const relY = y - rect.top;
        group.style.setProperty('--mouse-x-rel', `${relX}px`);
        group.style.setProperty('--mouse-y-rel', `${relY}px`);
      });
    });

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
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
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b to-transparent dark:from-slate-900/80 dark:via-emerald-950/20 dark:to-transparent -z-10 pointer-events-none transition-colors duration-500 from-slate-200/50 via-emerald-100/20">
</div>
<div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] dark:bg-emerald-900/10 rounded-full blur-[120px] -z-10 pointer-events-none transition-colors duration-500 bg-emerald-200/30">
</div>
<div className="fixed top-[20%] left-[-100px] w-[500px] h-[500px] dark:bg-blue-900/10 rounded-full blur-[100px] -z-10 pointer-events-none transition-colors duration-500 bg-blue-100/30">
</div>

<div className="pointer-events-none fixed inset-0 z-0 bg-spotlight transition-opacity duration-300"></div>

<div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent dark:via-emerald-800/50 to-transparent z-50 opacity-70 via-emerald-300/50">
</div>

<div className="absolute inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x dark:border-white/5 h-[3600px] transition-colors duration-500 border-slate-200/60">
<div className="border-r dark:border-white/5 h-full hidden md:block animate-line relative overflow-hidden delay-100 border-slate-200/60">
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent dark:via-emerald-400 to-transparent animate-beam via-emerald-600/30" style={{animationDuration: '7s'}}></div>
</div>
<div className="border-r dark:border-white/5 h-full hidden md:block animate-line delay-300 border-slate-200/60"></div>
<div className="border-r dark:border-white/5 h-full hidden md:block animate-line delay-150 relative overflow-hidden border-slate-200/60">
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent dark:via-emerald-300/50 to-transparent animate-beam via-emerald-600/20" style={{animationDuration: '11s', animationDelay: '2s'}}></div>
</div>
<div className="border-r dark:border-white/5 h-full hidden md:block animate-line delay-200 border-slate-200/60"></div>
<div className="border-r dark:border-white/5 h-full hidden md:block animate-line delay-75 border-slate-200/60"></div>
<div className="border-r dark:border-white/5 h-full hidden md:block animate-line delay-300 border-slate-200/60"></div>
<div className="border-r dark:border-white/5 h-full hidden md:block animate-line delay-100 relative overflow-hidden border-slate-200/60">
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent dark:via-emerald-400/80 to-transparent animate-beam via-emerald-600/30" style={{animationDuration: '9s', animationDelay: '1.5s'}}></div>
</div>
<div className="border-r dark:border-white/5 h-full hidden md:block animate-line delay-200 border-slate-200/60"></div>
<div className="border-r dark:border-white/5 h-full hidden md:block animate-line delay-400 border-slate-200/60"></div>
<div className="border-r dark:border-white/5 h-full hidden md:block animate-line delay-150 border-slate-200/60"></div>
<div className="border-r dark:border-white/5 h-full hidden md:block animate-line delay-300 border-slate-200/60"></div>
</div>

<nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-6xl shrink-0">
<div className="rounded-full border dark:border-white/10 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg dark:shadow-emerald-900/10 px-4 md:px-5 h-14 flex items-center justify-between gap-4 md:gap-12 transition-all duration-300 border-slate-200/60 bg-white/80 shadow-slate-200/50">

<div className="flex items-center gap-2">
<div className="text-emerald-500 dark:text-emerald-400">
<span className="iconify" data-icon="lucide:scale" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm font-semibold tracking-tight dark:text-white text-slate-900">
          ESG<span className="dark:text-slate-500 text-slate-400">Pilot</span>
</span>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium dark:text-slate-400 dark:hover:text-white transition-colors text-slate-600 hover:text-slate-950" href="#product">Product</a>
<a className="text-xs font-medium dark:text-slate-400 dark:hover:text-white transition-colors text-slate-600 hover:text-slate-950" href="#how">How
                    it works</a>
<a className="text-xs font-medium dark:text-slate-400 dark:hover:text-white transition-colors text-slate-600 hover:text-slate-950" href="#who">Who
                    it’s for</a>
<a className="text-xs font-medium dark:text-slate-400 dark:hover:text-white transition-colors text-slate-600 hover:text-slate-950" href="#trust">Trust</a>
</div>

<div className="flex items-center gap-2 md:gap-4">

<button aria-label="Toggle Theme" className="rounded-full w-8 h-8 flex items-center justify-center dark:text-slate-400 dark:hover:bg-slate-800 transition-colors text-slate-600 hover:bg-slate-100" onclick="toggleTheme()">
<span className="iconify hidden dark:block" data-icon="lucide:sun" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="iconify block dark:hidden" data-icon="lucide:moon" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<a className="rounded-full dark:bg-emerald-500 px-5 py-2 text-xs font-semibold dark:text-slate-950 dark:hover:bg-emerald-400 transition-all overflow-hidden group bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20" href="#demo">
<span className="relative z-10">Request a Demo</span>
</a>
</div>
</div>
</nav>

<main className="relative pt-24">

<section className="flex flex-col md:mt-32 min-h-[80vh] w-full max-w-7xl z-10 mt-16 mr-auto ml-auto pr-6 pl-6 relative justify-center" id="hero">

<div className="w-full flex justify-start mb-10 spotlight-group relative animate-on-scroll">
<a className="relative z-10 group flex items-center gap-3 rounded-full border dark:border-white/10 dark:bg-slate-900/50 pr-4 pl-1.5 py-1.5 dark:hover:border-emerald-500/30 transition-all overflow-hidden border-slate-200 bg-white/50 hover:border-emerald-500/30" href="#demo">
<span className="rounded-full dark:bg-emerald-500/20 border dark:border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold dark:text-emerald-300 tracking-wide uppercase bg-emerald-100 border-emerald-200 text-emerald-800">
            Early Access
          </span>
<span className="text-sm font-medium dark:text-slate-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 text-slate-600 transition-colors">
            Compliance guidance for SMBs — without consultants
          </span>
<span className="iconify dark:text-slate-500 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all text-slate-400" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>

<div className="w-full max-w-5xl">
<div className="relative z-20 animate-on-scroll">
<div className="flex flex-col gap-2">
<div className="flex text-xs text-slate-500 dark:text-slate-400 font-mono mb-4 gap-x-2 gap-y-2 items-center tracking-widest uppercase">
                            01_COMPLIANCE <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[84px] leading-[0.95] tracking-tighter font-serif dark:text-white transition-colors text-slate-900">
<span className="block word-mask"><span className="block word-reveal bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent pb-2" style={{transitionDelay: '100ms'}}>AI-powered</span></span>
<span className="block word-mask"><span className="block word-reveal italic" style={{transitionDelay: '250ms'}}>ESG compliance</span></span>
<span className="block word-mask"><span className="block word-reveal font-light dark:text-slate-500 text-slate-400" style={{transitionDelay: '400ms'}}>that tells you what to change.</span></span>
</h1>
<p className="md:text-xl dark:text-slate-400 leading-relaxed text-lg font-light max-w-2xl mt-8 text-slate-600">We monitor new ESG regulations in real time, determine what applies to your business, and translate legal requirements into clear, actionable operational steps: way before enforcement, fines, or investor pressure.</p>
</div>
</div>
</div>

<div className="mt-14 md:mt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end animate-on-scroll" style={{transitionDelay: '400ms'}}>

<div className="group relative rounded-2xl dark:bg-slate-900/30 border dark:border-white/10 p-6 md:p-8 spotlight-group overflow-hidden dark:hover:bg-slate-900/50 transition-all duration-500 backdrop-blur-sm shadow-sm dark:shadow-none bg-white border-slate-200 hover:bg-slate-50 hover:border-emerald-200/50">
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300">
</div>
<div className="absolute left-0 top-8 w-0.5 h-12 dark:bg-emerald-400 rounded-r-full bg-emerald-600"></div>
<p className="md:text-xl dark:text-slate-300 leading-relaxed text-lg italic font-serif max-w-lg z-10 relative text-slate-700">
                        “Automate the most expensive parts of ESG consulting — monitoring, interpretation, and
                        audit-ready documentation — at a low annual subscription.”
                    </p>
<div className="mt-8 grid grid-cols-3 gap-3">
<div className="rounded-xl border dark:border-white/10 dark:bg-slate-900/50 p-3 border-slate-200 bg-white/60">
<div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Real-time</div>
<div className="mt-1 text-sm font-semibold dark:text-white text-slate-900">Reg updates</div>
</div>
<div className="rounded-xl border dark:border-white/10 dark:bg-slate-900/50 p-3 border-slate-200 bg-white/60">
<div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Company-specific
                            </div>
<div className="mt-1 text-sm font-semibold dark:text-white text-slate-900">Obligations</div>
</div>
<div className="rounded-xl border dark:border-white/10 dark:bg-slate-900/50 p-3 border-slate-200 bg-white/60">
<div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Audit-ready</div>
<div className="mt-1 text-sm font-semibold dark:text-white text-slate-900">Evidence</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row md:items-center gap-4 z-10 lg:justify-end pb-4">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full dark:bg-emerald-500 px-8 font-medium dark:text-slate-950 transition-all duration-300 dark:hover:bg-emerald-400 bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40" href="#demo">
<span className="mr-2 text-sm">Request a Demo</span>
<span className="iconify dark:text-slate-800 group-hover:text-white dark:group-hover:text-slate-900 transition-colors text-emerald-100" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="group inline-flex h-12 items-center justify-center rounded-full border dark:border-white/10 bg-transparent px-8 font-medium dark:text-slate-400 transition-all dark:hover:text-white dark:hover:border-emerald-500/30 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-400" href="#product">
<span className="text-sm">See the Product</span>
<span className="iconify ml-2 dark:text-slate-600 group-hover:translate-x-1 group-hover:text-slate-900 dark:group-hover:text-white transition-all text-slate-400" data-icon="lucide:arrow-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div className="z-20 w-full mt-16 relative animate-on-scroll" style={{transitionDelay: '600ms'}}>
<p className="uppercase text-xs font-bold dark:text-slate-600 tracking-widest font-mono text-center mb-8 text-slate-400">
                    What we automate</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="dark:border-white/10 dark:bg-slate-900/40 border rounded-2xl pt-5 pr-5 pb-5 pl-5 bg-white/50 border-slate-200 hover:border-emerald-500/20 transition-colors">
<div className="flex gap-2 dark:text-white font-semibold gap-x-2 gap-y-2 items-center text-slate-900">
<span className="iconify text-emerald-500" data-icon="lucide:rss" data-width="18"></span>
                            Regulation monitoring
                        </div>
<p className="mt-2 text-sm text-slate-500 font-light">Detect new rules, amendments, and deadlines
                            across jurisdictions.</p>
</div>
<div className="rounded-2xl border dark:border-white/10 dark:bg-slate-900/40 p-5 border-slate-200 bg-white/50 hover:border-emerald-500/20 transition-colors">
<div className="flex items-center gap-2 dark:text-white font-semibold text-slate-900">
<span className="iconify text-emerald-500" data-icon="lucide:file-search" data-width="18"></span>
                            AI interpretation
                        </div>
<p className="mt-2 text-sm text-slate-500 font-light">Translate legal text into company-specific
                            obligations in plain English.</p>
</div>
<div className="rounded-2xl border dark:border-white/10 dark:bg-slate-900/40 p-5 border-slate-200 bg-white/50 hover:border-emerald-500/20 transition-colors">
<div className="flex items-center gap-2 dark:text-white font-semibold text-slate-900">
<span className="iconify text-emerald-500" data-icon="lucide:shield-check" data-width="18"></span>
                            Audit-ready compliance
                        </div>
<p className="mt-2 text-sm text-slate-500 font-light">Maintain evidence logs and version history for
                            auditors and investors.</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-24 md:mt-32 mx-auto px-6 relative" id="product">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">
<div className="flex flex-col justify-center animate-on-scroll">
<div className="flex items-center gap-2 mb-6">
<span className="iconify text-emerald-500 text-xl" data-icon="lucide:alert-triangle" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-mono tracking-widest uppercase dark:text-white font-bold text-slate-900">The problem</span>
</div>
<h2 className="md:text-5xl dark:text-white leading-none transition-colors text-4xl tracking-tight font-serif mb-6 text-slate-900">ESG compliance is becoming mandatory...<span className="italic block text-slate-500 dark:text-slate-500 font-light">but guidance is priced for enterprises.</span></h2>
<ul className="mt-4 space-y-3 text-lg dark:text-slate-400 font-light text-slate-600">
<li className="flex gap-3">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>Regulations change
                            faster than most teams can track.</li>
<li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>Legal
                            language is vague and expensive to interpret.</li>
<li className="flex gap-3">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>Consulting costs can
                            reach $100k–$1M/year.</li>
<li className="flex gap-3">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>Non-compliance brings
                            enforcement risk and investor backlash.</li>
</ul>
</div>
<div className="flex flex-col gap-6 animate-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="rounded-2xl dark:bg-slate-900/30 border dark:border-white/10 p-6 shadow-sm dark:shadow-none bg-white border-slate-200 group hover:border-emerald-500/20 transition-colors">
<div className="flex items-center gap-2 dark:text-white font-semibold text-slate-900 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
<span className="iconify text-emerald-500" data-icon="lucide:target" data-width="18"></span>
                            What you get
                        </div>
<p className="mt-2 text-sm text-slate-500 font-light">
                            A single system that tells you which regulations matter, what they require, and what to
                            change — continuously.
                        </p>
</div>
<div className="rounded-2xl dark:bg-slate-900/30 border dark:border-white/10 p-6 shadow-sm dark:shadow-none bg-white border-slate-200 group hover:border-emerald-500/20 transition-colors">
<div className="flex items-center gap-2 dark:text-white font-semibold text-slate-900 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
<span className="iconify text-emerald-500" data-icon="lucide:coins" data-width="18"></span>
                            Why SMBs care
                        </div>
<p className="mt-2 text-sm text-slate-500 font-light">
                            ESG exposure is moving down-market through supply chains and procurement requirements — but
                            most SMBs can’t hire dedicated teams.
                        </p>
</div>
<div className="rounded-2xl dark:bg-slate-900/30 border dark:border-white/10 p-6 shadow-sm dark:shadow-none bg-white border-slate-200 group hover:border-emerald-500/20 transition-colors">
<div className="flex items-center gap-2 dark:text-white font-semibold text-slate-900 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
<span className="iconify text-emerald-500" data-icon="lucide:timer" data-width="18"></span>
                            Why now
                        </div>
<p className="mt-2 text-sm text-slate-500 font-light">
                            Regulators and investors are standardizing disclosures; manual compliance is too slow.
                            Automation is becoming necessary.
                        </p>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full z-20 mt-28 md:mt-36 relative py-28 border-t dark:border-white/5 dark:bg-slate-950 transition-colors duration-500 border-slate-200 bg-slate-50" id="how">
<div className="max-w-7xl mx-auto px-6 w-full relative">
<div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif dark:text-white tracking-tight mb-4 transition-colors text-slate-900">
                        How it <span className="italic text-slate-500">works</span>
</h2>
<p className="dark:text-slate-500 text-lg font-light leading-relaxed text-slate-600">
                        A three-phase pipeline: detect, interpret, execute — with audit-ready proof at every step.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl dark:bg-slate-900/40 border dark:border-white/10 p-6 animate-on-scroll shadow-sm dark:shadow-none bg-white border-slate-200" style={{backgroundImage: 'radial-gradient(at top right, rgba(16, 185, 129, 0.05), transparent 60%)'}}>
<div className="flex items-center gap-2 dark:text-white font-semibold text-slate-900">
<div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
<span className="iconify" data-icon="lucide:rss" data-width="18"></span>
</div>
                            Phase 1: Detect
                        </div>
<p className="mt-3 text-sm text-slate-500 font-light leading-relaxed">
                            Monitor regulatory sources continuously. Capture new rules, amendments, deadlines, and
                            versions by jurisdiction and industry.
                        </p>
<div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400/80">
                            Output: structured regulation updates
                        </div>
</div>
<div className="rounded-2xl dark:bg-slate-900/40 border dark:border-white/10 p-6 animate-on-scroll shadow-sm dark:shadow-none bg-white border-slate-200" style={{transitionDelay: '100ms', backgroundImage: 'radial-gradient(at top right, rgba(16, 185, 129, 0.05), transparent 60%)'}}>
<div className="flex items-center gap-2 dark:text-white font-semibold text-slate-900">
<div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
<span className="iconify" data-icon="lucide:file-search" data-width="18"></span>
</div>
                            Phase 2: Interpret
                        </div>
<p className="mt-3 text-sm text-slate-500 font-light leading-relaxed">
                            Apply deterministic applicability rules (jurisdiction, size, sector), then translate legal
                            text into plain-English obligations for your business.
                        </p>
<div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400/80">
                            Output: company-specific obligations
                        </div>
</div>
<div className="rounded-2xl dark:bg-slate-900/40 border dark:border-white/10 p-6 animate-on-scroll shadow-sm dark:shadow-none bg-white border-slate-200" style={{transitionDelay: '200ms', backgroundImage: 'radial-gradient(at top right, rgba(16, 185, 129, 0.05), transparent 60%)'}}>
<div className="flex items-center gap-2 dark:text-white font-semibold text-slate-900">
<div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
<span className="iconify" data-icon="lucide:check-check" data-width="18"></span>
</div>
                            Phase 3: Execute
                        </div>
<p className="mt-3 text-sm text-slate-500 font-light leading-relaxed">
                            Generate implementation checklists, policy templates, and evidence requirements. Track
                            progress with approvals and a full audit trail.
                        </p>
<div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400/80">
                            Output: actions + audit-ready evidence
                        </div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full z-20 relative py-28 border-t dark:border-white/5 dark:bg-slate-950 transition-colors duration-500 border-slate-200 bg-slate-50" id="who">
<div className="max-w-7xl mx-auto px-6 w-full relative">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 animate-on-scroll">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-serif dark:text-white tracking-tight mb-4 leading-none transition-colors text-slate-900">
                            Who it’s <span className="italic text-slate-500">for</span>
</h2>
<p className="text-lg dark:text-slate-400 font-light text-slate-600">
                            Built for teams that are exposed to ESG compliance — without the budget for full-time legal
                            or big consulting.
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-2xl dark:bg-slate-900/30 border dark:border-white/10 p-6 animate-on-scroll shadow-sm dark:shadow-none bg-white border-slate-200 hover:border-emerald-500/20 transition-colors">
<div className="flex items-center gap-2 dark:text-white font-semibold text-slate-900">
<span className="iconify text-emerald-500" data-icon="lucide:building-2" data-width="18"></span> SMBs &amp;
                            Mid-market
                        </div>
<p className="mt-2 text-sm text-slate-500 font-light">Firms facing new ESG requirements through
                            procurement, lenders, and regulators.</p>
</div>
<div className="rounded-2xl dark:bg-slate-900/30 border dark:border-white/10 p-6 animate-on-scroll shadow-sm dark:shadow-none bg-white border-slate-200 hover:border-emerald-500/20 transition-colors" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-2 dark:text-white font-semibold text-slate-900">
<span className="iconify text-emerald-500" data-icon="lucide:factory" data-width="18"></span> Regulated
                            industries
                        </div>
<p className="mt-2 text-sm text-slate-500 font-light">Manufacturing, energy, chemicals, finance,
                            logistics — where compliance cost is high.</p>
</div>
<div className="rounded-2xl dark:bg-slate-900/30 border dark:border-white/10 p-6 animate-on-scroll shadow-sm dark:shadow-none bg-white border-slate-200 hover:border-emerald-500/20 transition-colors" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-2 dark:text-white font-semibold text-slate-900">
<span className="iconify text-emerald-500" data-icon="lucide:briefcase" data-width="18"></span> Consultants &amp;
                            auditors
                        </div>
<p className="mt-2 text-sm text-slate-500 font-light">A tooling layer to scale services: monitoring,
                            mapping, templates, and audit packs.</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full z-20 relative py-28 border-t dark:border-white/5 dark:bg-slate-950 transition-colors duration-500 border-slate-200 bg-slate-50" id="trust">
<div className="max-w-7xl mx-auto px-6 w-full relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
<div className="animate-on-scroll">
<div className="flex items-center gap-2 mb-6">
<span className="iconify dark:text-white text-xl text-slate-900" data-icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-mono tracking-widest uppercase dark:text-white font-bold text-slate-900">Why we’re different</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif dark:text-white tracking-tight mb-6 leading-none transition-colors text-slate-900">
                            Not just reporting —
                            <span className="italic block text-slate-500 dark:text-slate-600 font-light">an always-on compliance layer.</span>
</h2>
<div className="rounded-2xl dark:bg-slate-900/30 border dark:border-white/10 p-6 shadow-sm dark:shadow-none bg-white border-slate-200">
<div className="grid grid-cols-1 gap-4 text-sm">
<div className="flex items-start justify-between gap-4">
<div className="font-semibold dark:text-white text-slate-900">Traditional ESG tools</div>
<div className="text-slate-500 font-light">Reporting dashboards</div>
</div>
<div className="flex items-start justify-between gap-4">
<div className="font-semibold dark:text-white text-slate-900">Consultants</div>
<div className="text-slate-500 font-light">Manual + expensive</div>
</div>
<div className="h-px dark:bg-white/10 bg-slate-200"></div>
<div className="flex items-start justify-between gap-4">
<div className="font-semibold dark:text-emerald-400 text-emerald-600">ESGPilot</div>
<div className="text-slate-500 font-light">Detect → interpret → execute</div>
</div>
</div>
</div>
</div>
<div className="animate-on-scroll" style={{transitionDelay: '150ms'}}>
<div className="flex items-center gap-2 mb-6">
<span className="iconify dark:text-white text-xl text-slate-900" data-icon="lucide:shield" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-mono tracking-widest uppercase dark:text-white font-bold text-slate-900">Trust &amp; guardrails</span>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="rounded-2xl dark:bg-slate-900/30 border dark:border-white/10 p-6 shadow-sm dark:shadow-none bg-white border-slate-200">
<div className="flex items-center gap-2 font-semibold dark:text-white text-slate-900">
<span className="iconify text-emerald-500" data-icon="lucide:link" data-width="18"></span> Source
                                    traceability
                                </div>
<p className="mt-2 text-sm text-slate-500 font-light">
                                    Every obligation and recommendation links back to the exact regulatory section it
                                    came from.
                                </p>
</div>
<div className="rounded-2xl dark:bg-slate-900/30 border dark:border-white/10 p-6 shadow-sm dark:shadow-none bg-white border-slate-200">
<div className="flex items-center gap-2 font-semibold dark:text-white text-slate-900">
<span className="iconify text-emerald-500" data-icon="lucide:user-check" data-width="18"></span> Human
                                    approval
                                </div>
<p className="mt-2 text-sm text-slate-500 font-light">
                                    AI suggests; your team approves. Nothing is auto-submitted to regulators or
                                    investors.
                                </p>
</div>
<div className="rounded-2xl dark:bg-slate-900/30 border dark:border-white/10 p-6 shadow-sm dark:shadow-none bg-white border-slate-200">
<div className="flex items-center gap-2 font-semibold dark:text-white text-slate-900">
<span className="iconify text-emerald-500" data-icon="lucide:info" data-width="18"></span>
                                    Compliance-first framing
                                </div>
<p className="mt-2 text-sm text-slate-500 font-light">
                                    This product is not legal advice. It’s a compliance workflow engine that helps teams
                                    operationalize requirements.
                                </p>
</div>
</div>
</div>
</div>

<div className="mt-12 rounded-2xl dark:bg-emerald-900/10 border dark:border-emerald-500/20 p-8 animate-on-scroll shadow-sm dark:shadow-none bg-emerald-50 border-emerald-100">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<div className="dark:text-white font-semibold text-xl text-slate-900">See it applied to your
                                company</div>
<div className="mt-1 text-sm text-slate-500 font-light">We’ll walk through your jurisdictions,
                                industry, and what’s changing this quarter.</div>
</div>
<a className="inline-flex h-12 items-center justify-center rounded-full dark:bg-emerald-500 px-8 font-medium dark:text-slate-950 dark:hover:bg-emerald-400 transition-all bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-500/10" href="#demo">
                            Request a Demo
                        </a>
</div>
</div>
</div>
</section>

<section className="w-full relative py-28 overflow-hidden dark:bg-slate-950 border-t dark:border-white/10 transition-colors duration-500 bg-slate-50 border-slate-200" id="demo">
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-slate-900 border dark:border-white/10 text-slate-500 dark:text-slate-400 text-xs font-mono mb-8 shadow-sm bg-white border-slate-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Request a Demo / Join Early Access
                </div>
<h2 className="text-5xl md:text-[60px] font-serif dark:text-white tracking-tight leading-none mb-6 transition-colors text-slate-900">
                    Get a company-specific compliance walkthrough.
                </h2>
<p className="text-xl dark:text-slate-500 font-light max-w-2xl mb-10 text-slate-600">
                    Tell us your industry and where you operate. We’ll show what regulations apply, what changed
                    recently, and what actions you’d take.
                </p>

<div className="w-full max-w-2xl dark:bg-slate-900/50 p-6 rounded-2xl border dark:border-white/10 backdrop-blur-sm mb-10 text-left shadow-lg dark:shadow-none transition-colors bg-white border-slate-200">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">Full Name</label>
<input className="w-full dark:bg-slate-950 border dark:border-slate-800 rounded-lg px-4 py-3 text-sm dark:text-white focus:outline-none focus:border-emerald-500/50 dark:focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-700 transition-all bg-slate-50 border-slate-200 text-slate-900" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">Work Email</label>
<input className="w-full dark:bg-slate-950 border dark:border-slate-800 rounded-lg px-4 py-3 text-sm dark:text-white focus:outline-none focus:border-emerald-500/50 dark:focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-700 transition-all bg-slate-50 border-slate-200 text-slate-900" placeholder="name@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">Company</label>
<input className="w-full dark:bg-slate-950 border dark:border-slate-800 rounded-lg px-4 py-3 text-sm dark:text-white focus:outline-none focus:border-emerald-500/50 dark:focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-700 transition-all bg-slate-50 border-slate-200 text-slate-900" placeholder="Acme Manufacturing" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">Role</label>
<input className="w-full dark:bg-slate-950 border dark:border-slate-800 rounded-lg px-4 py-3 text-sm dark:text-white focus:outline-none focus:border-emerald-500/50 dark:focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-700 transition-all bg-slate-50 border-slate-200 text-slate-900" placeholder="Operations / Compliance / Finance" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">Primary Region(s)</label>
<input className="w-full dark:bg-slate-950 border dark:border-slate-800 rounded-lg px-4 py-3 text-sm dark:text-white focus:outline-none focus:border-emerald-500/50 dark:focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-700 transition-all bg-slate-50 border-slate-200 text-slate-900" placeholder="US (CA, NY), EU (DE, FR)" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">Industry</label>
<input className="w-full dark:bg-slate-950 border dark:border-slate-800 rounded-lg px-4 py-3 text-sm dark:text-white focus:outline-none focus:border-emerald-500/50 dark:focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-700 transition-all bg-slate-50 border-slate-200 text-slate-900" placeholder="Manufacturing / Logistics / Energy / Finance" type="text"/>
</div>
<div className="md:col-span-2 space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">What are you trying to solve?</label>
<textarea className="w-full dark:bg-slate-950 border dark:border-slate-800 rounded-lg px-4 py-3 text-sm dark:text-white focus:outline-none focus:border-emerald-500/50 dark:focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/50 placeholder:text-slate-400 dark:placeholder:text-slate-700 transition-all resize-none bg-slate-50 border-slate-200 text-slate-900" placeholder="e.g., upcoming disclosure requirements, supplier due diligence, investor requests..." rows="3"></textarea>
</div>
<button className="md:col-span-2 w-full py-3 rounded-lg dark:bg-emerald-500 dark:text-slate-950 font-semibold dark:hover:bg-emerald-400 transition-colors shadow-lg dark:shadow-emerald-500/20 bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-500/20">
              Submit Demo Request
            </button>
<p className="md:col-span-2 text-xs text-slate-500 font-light leading-relaxed mt-2">
                            By submitting, you agree this is not legal advice. We provide workflow guidance and
                            traceable references to source regulations.
                        </p>
</div>
</div>
<div className="flex flex-col gap-4 text-sm text-slate-500">
<div className="flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
<a className="dark:hover:text-white transition-colors hover:text-slate-900" href="mailto:hello@esgpilot.example">hello@esgpilot.example</a>
</div>
</div>
</div>
</section>

<footer className="w-full dark:bg-black pt-12 pb-12 relative z-20 border-t dark:border-slate-900 text-slate-500 dark:text-slate-400 transition-colors duration-500 bg-slate-100 border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="iconify dark:text-emerald-500 text-emerald-600" data-icon="lucide:scale" data-width="16"></span>
<span className="text-sm font-semibold tracking-tight dark:text-white text-slate-900">ESGPilot</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-600 font-mono">
                            © 2026 ESGPilot. All rights reserved.
                        </p>
</div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="dark:hover:text-white transition-colors hover:text-slate-900" href="#">Privacy
                            Policy</a>
<a className="dark:hover:text-white transition-colors hover:text-slate-900" href="#">Terms</a>
<a className="dark:hover:text-white transition-colors hover:text-slate-900" href="#">Disclaimer</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}

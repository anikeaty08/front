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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple view switching
        function switchView(viewName) {
            document.getElementById('view-home').classList.add('hidden');
            document.getElementById('view-automation').classList.add('hidden');
            document.getElementById('view-' + viewName).classList.remove('hidden');
            window.scrollTo(0, 0);
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
      

<div className="absolute inset-0 pointer-events-none grid-overlay z-0 mix-blend-screen opacity-50"></div>

<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center pointer-events-none">
<div className="w-full max-w-6xl flex justify-between items-center pointer-events-auto bg-[oklch(0.2178_0_0)]/80 backdrop-blur-md border border-[oklch(0.2393_0_0)] rounded-full px-6 py-3 shadow-sm">
<button className="flex items-start text-[oklch(0.9807_0.0021_17.1950)] hover:opacity-70 transition-opacity" onclick="switchView('home')">
<span className="text-xl tracking-tighter font-medium italic lowercase">hachiko</span>
<span className="font-mono text-[10px] font-medium ml-1 mt-1 not-italic uppercase tracking-widest text-[oklch(0.6788_0.2013_36.9694)]">Labs</span>
</button>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[oklch(0.7118_0.0129_286.0665)]">
<button className="hover:text-[oklch(0.9807_0.0021_17.1950)] transition-colors tracking-tight" onclick="switchView('home')">Software</button>
<button className="hover:text-[oklch(0.9807_0.0021_17.1950)] transition-colors tracking-tight" onclick="switchView('automation')">Automation</button>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium text-[oklch(0.9807_0.0021_17.1950)] bg-[oklch(0.6788_0.2013_36.9694)] rounded-full hover:opacity-90 transition-all shadow-[0_0_15px_oklch(0.6788_0.2013_36.9694_/_0.3)] tracking-tight" href="#book">
                    Initialize Project
                </a>
<button className="md:hidden text-[oklch(0.9807_0.0021_17.1950)] flex items-center bg-[oklch(0.2393_0_0)] rounded-full p-2">
<iconify-icon className="text-lg" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>



<main className="flex-grow flex flex-col items-center w-full block pt-32 pb-12 relative z-10" id="view-home">

<section className="relative w-full max-w-6xl px-6 pt-12 pb-24 md:pt-20 md:pb-32 flex flex-col items-center text-center overflow-hidden">
<div className="animate-fade-in inline-flex items-center gap-3 bg-[oklch(0.2178_0_0)]/60 backdrop-blur-md border border-[oklch(0.2393_0_0)] text-[oklch(0.6788_0.2013_36.9694)] font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 shadow-sm" style={{animationDelay: '0.1s'}}>
<span className="w-2 h-2 rounded-full bg-[oklch(0.6788_0.2013_36.9694)] animate-pulse shadow-[0_0_8px_oklch(0.6788_0.2013_36.9694_/_0.6)]"></span>
                System Online — Q3 Partners
            </div>
<div className="relative max-w-4xl flex flex-col items-center animate-fade-in" style={{animationDelay: '0.3s'}}>
<h1 className="text-5xl md:text-7xl lg:text-[5rem] font-medium tracking-tighter leading-[1.05] mb-6 text-[oklch(0.9807_0.0021_17.1950)] text-balance">
                    Stop managing developers.<br className="hidden md:block"/> Start <span className="italic text-[oklch(0.7118_0.0129_286.0665)]">shipping</span> product.
                </h1>
<p className="text-lg md:text-xl font-normal text-[oklch(0.7118_0.0129_286.0665)] mb-10 max-w-2xl leading-relaxed tracking-tight text-balance">
                    You have the vision and the market. We have the engineering execution. Partner with us to build, launch, and scale high-end software—without the agency friction.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pointer-events-auto">
<a className="group w-full sm:w-auto bg-[oklch(0.6788_0.2013_36.9694)] text-[oklch(0.9807_0.0021_17.1950)] hover:opacity-90 transition-all duration-300 rounded-full py-4 px-8 text-sm font-medium flex justify-center items-center tracking-tight shadow-[0_0_20px_oklch(0.6788_0.2013_36.9694_/_0.2)] hover:shadow-[0_0_30px_oklch(0.6788_0.2013_36.9694_/_0.4)]" href="#book">
                        Deploy Strategy
                        <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="group w-full sm:w-auto bg-transparent border border-[oklch(0.2393_0_0)] hover:bg-[oklch(0.2178_0_0)] transition-colors duration-300 rounded-full py-4 px-8 text-sm font-medium flex justify-center items-center text-[oklch(0.9807_0.0021_17.1950)] tracking-tight" href="#work">
                        Inspect Architecture
                        <iconify-icon className="ml-2 text-lg text-[oklch(0.6788_0.2013_36.9694)]" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<div className="w-full max-w-4xl mb-24 overflow-hidden mask-edges opacity-60 animate-fade-in" style={{animationDelay: '0.5s'}}>
<div className="animate-marquee gap-4 py-2">
<span className="bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.9807_0.0021_17.1950)] font-mono text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">React &amp; Next.js</span>
<span className="bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.9807_0.0021_17.1950)] font-mono text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">Node Architecture</span>
<span className="bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.9807_0.0021_17.1950)] font-mono text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">AI Integrations</span>
<span className="bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.9807_0.0021_17.1950)] font-mono text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">Cloud Infrastructure</span>
<span className="bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.9807_0.0021_17.1950)] font-mono text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">System Audits</span>

<span className="bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.9807_0.0021_17.1950)] font-mono text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">React &amp; Next.js</span>
<span className="bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.9807_0.0021_17.1950)] font-mono text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">Node Architecture</span>
<span className="bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.9807_0.0021_17.1950)] font-mono text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">AI Integrations</span>
<span className="bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.9807_0.0021_17.1950)] font-mono text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">Cloud Infrastructure</span>
<span className="bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.9807_0.0021_17.1950)] font-mono text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">System Audits</span>
</div>
</div>

<section className="w-full max-w-6xl px-6 py-24 flex flex-col items-center border-t border-[oklch(0.2393_0_0)]">
<div className="mb-16 flex flex-col items-center text-center">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-[oklch(0.6788_0.2013_36.9694)]"></div>
<span className="font-mono text-xs text-[oklch(0.6788_0.2013_36.9694)] uppercase tracking-[0.2em]">Parameter Check</span>
<div className="h-px w-8 bg-[oklch(0.6788_0.2013_36.9694)]"></div>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[oklch(0.9807_0.0021_17.1950)] max-w-2xl mb-4">
                    This is for you if...
                </h2>
<p className="text-[oklch(0.7118_0.0129_286.0665)] font-normal tracking-tight">We do our best work when the fit is <span className="italic">right</span>.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
<div className="bg-[oklch(0.2178_0_0)] p-8 rounded-2xl border border-[oklch(0.2393_0_0)] hover:border-[oklch(0.6788_0.2013_36.9694)]/50 transition-all duration-300 flex flex-col group">
<div className="w-12 h-12 rounded-xl bg-[oklch(0.1496_0_0)] border border-[oklch(0.2393_0_0)] flex items-center justify-center text-[oklch(0.6788_0.2013_36.9694)] mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_oklch(0.6788_0.2013_36.9694_/_0.15)]">
<iconify-icon className="text-2xl" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[oklch(0.9807_0.0021_17.1950)] tracking-tight mb-3">Validation, no CTO</h3>
<p className="text-sm text-[oklch(0.7118_0.0129_286.0665)] leading-relaxed font-normal">You've talked to users, secured funding, or have presales, but lack the technical partner to build it right the first time.</p>
</div>
<div className="bg-[oklch(0.2178_0_0)] p-8 rounded-2xl border border-[oklch(0.2393_0_0)] hover:border-[oklch(0.6788_0.2013_36.9694)]/50 transition-all duration-300 flex flex-col group">
<div className="w-12 h-12 rounded-xl bg-[oklch(0.1496_0_0)] border border-[oklch(0.2393_0_0)] flex items-center justify-center text-[oklch(0.6788_0.2013_36.9694)] mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_oklch(0.6788_0.2013_36.9694_/_0.15)]">
<iconify-icon className="text-2xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[oklch(0.9807_0.0021_17.1950)] tracking-tight mb-3">Burned by dev shops</h3>
<p className="text-sm text-[oklch(0.7118_0.0129_286.0665)] leading-relaxed font-normal">Tired of black-box offshore teams that say "yes" to everything but deliver spaghetti code and missed deadlines.</p>
</div>
<div className="bg-[oklch(0.2178_0_0)] p-8 rounded-2xl border border-[oklch(0.2393_0_0)] hover:border-[oklch(0.6788_0.2013_36.9694)]/50 transition-all duration-300 flex flex-col group">
<div className="w-12 h-12 rounded-xl bg-[oklch(0.1496_0_0)] border border-[oklch(0.2393_0_0)] flex items-center justify-center text-[oklch(0.6788_0.2013_36.9694)] mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_oklch(0.6788_0.2013_36.9694_/_0.15)]">
<iconify-icon className="text-2xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[oklch(0.9807_0.0021_17.1950)] tracking-tight mb-3">Need a partner</h3>
<p className="text-sm text-[oklch(0.7118_0.0129_286.0665)] leading-relaxed font-normal">You need someone who pushes back, suggests better product decisions, and thinks about business outcomes.</p>
</div>
</div>
</section>

<section className="w-full bg-[oklch(0.1496_0_0)] py-24 md:py-32 border-y border-[oklch(0.2393_0_0)] flex flex-col items-center relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.2178_0_0)]/10 to-transparent pointer-events-none"></div>
<div className="max-w-6xl w-full px-6 relative z-10">
<div className="mb-16 flex flex-col items-center text-center">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-[oklch(0.6788_0.2013_36.9694)] text-lg" icon="solar:routing-2-linear"></iconify-icon>
<span className="font-mono text-xs text-[oklch(0.6788_0.2013_36.9694)] uppercase tracking-[0.2em]">Execution Protocol</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[oklch(0.9807_0.0021_17.1950)] max-w-2xl">
                        How we help you <span className="italic text-[oklch(0.7118_0.0129_286.0665)]">build.</span>
</h2>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="flex flex-col bg-[oklch(0.2178_0_0)] p-8 rounded-2xl border border-[oklch(0.2393_0_0)] group hover:border-[oklch(0.2393_0_0)]/80 transition-all">
<div className="font-mono text-[10px] text-[oklch(0.7118_0.0129_286.0665)] mb-4 tracking-widest uppercase">Phase.01</div>
<h3 className="text-2xl font-medium text-[oklch(0.9807_0.0021_17.1950)] tracking-tight mb-4">Product Strategy</h3>
<div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[oklch(0.6788_0.2013_36.9694)] bg-[oklch(0.1496_0_0)] border border-[oklch(0.2393_0_0)] rounded px-3 py-1.5 mb-6 w-fit">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
                            Validation
                        </div>
<p className="text-sm text-[oklch(0.7118_0.0129_286.0665)] leading-relaxed">
                            We turn your vision into a strict, actionable roadmap. We define the MVP, map user flows, select the tech stack, and create a timeline that prioritizes revenue-generating features.
                        </p>
</div>

<div className="flex flex-col bg-[oklch(0.1496_0_0)] p-8 rounded-2xl border border-[oklch(0.6788_0.2013_36.9694)]/30 relative overflow-hidden shadow-[0_0_30px_oklch(0.6788_0.2013_36.9694_/_0.05)]">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-[oklch(0.6788_0.2013_36.9694)]/10 rounded-full blur-[50px] pointer-events-none"></div>
<div className="font-mono text-[10px] text-[oklch(0.6788_0.2013_36.9694)] mb-4 tracking-widest uppercase relative z-10">Phase.02</div>
<h3 className="text-2xl font-medium text-[oklch(0.9807_0.0021_17.1950)] tracking-tight mb-4 relative z-10">Custom Engineering</h3>
<div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[oklch(0.9807_0.0021_17.1950)] bg-[oklch(0.6788_0.2013_36.9694)] border border-[oklch(0.6788_0.2013_36.9694)] rounded px-3 py-1.5 mb-6 w-fit relative z-10">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
                            Core Build
                        </div>
<p className="text-sm text-[oklch(0.7118_0.0129_286.0665)] leading-relaxed relative z-10">
                            Full-stack engineering using modern, scalable frameworks (React, Next.js, Node). We focus on clean architecture, beautiful UI implementation, and fast performance.
                        </p>
</div>

<div className="flex flex-col bg-[oklch(0.2178_0_0)] p-8 rounded-2xl border border-[oklch(0.2393_0_0)] group hover:border-[oklch(0.2393_0_0)]/80 transition-all">
<div className="font-mono text-[10px] text-[oklch(0.7118_0.0129_286.0665)] mb-4 tracking-widest uppercase">Phase.03</div>
<h3 className="text-2xl font-medium text-[oklch(0.9807_0.0021_17.1950)] tracking-tight mb-4">CTO as a Service</h3>
<div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[oklch(0.6788_0.2013_36.9694)] bg-[oklch(0.1496_0_0)] border border-[oklch(0.2393_0_0)] rounded px-3 py-1.5 mb-6 w-fit">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
                            Scaling
                        </div>
<p className="text-sm text-[oklch(0.7118_0.0129_286.0665)] leading-relaxed">
                            We audit your codebase, optimize your cloud infrastructure, manage your existing developers, and establish proper CI/CD and engineering cadences.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl px-6 py-24 flex flex-col items-center" id="work">
<div className="mb-16 flex flex-col items-center text-center">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-[oklch(0.6788_0.2013_36.9694)]"></div>
<span className="font-mono text-xs text-[oklch(0.6788_0.2013_36.9694)] uppercase tracking-[0.2em]">Data Logs</span>
<div className="h-px w-8 bg-[oklch(0.6788_0.2013_36.9694)]"></div>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[oklch(0.9807_0.0021_17.1950)]">
                    Proof of <span className="italic text-[oklch(0.7118_0.0129_286.0665)]">work.</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-6 w-full">

<div className="bg-[oklch(0.1496_0_0)] rounded-[2rem] p-10 md:p-12 text-[oklch(0.9807_0.0021_17.1950)] flex flex-col justify-between overflow-hidden relative border border-[oklch(0.2393_0_0)] min-h-[480px] group hover:border-[oklch(0.6788_0.2013_36.9694)]/40 transition-colors duration-500">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at top right, oklch(0.6788 0.2013 36.9694 / 0.05) 0%, transparent 50%)'}}></div>
<div className="relative z-10 mb-12">
<span className="font-mono text-[10px] tracking-widest text-[oklch(0.9807_0.0021_17.1950)] uppercase bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] px-3 py-1.5 rounded mb-8 inline-block">Fintech Platform</span>
<h3 className="text-3xl font-medium tracking-tight mb-6">From zero to $1M ARR in 8 months.</h3>
<p className="text-sm text-[oklch(0.7118_0.0129_286.0665)] font-normal leading-relaxed max-w-md">Replaced an underperforming offshore team. Rebuilt the core payment architecture, enabling them to onboard enterprise clients without downtime.</p>
</div>
<div className="relative z-10 flex gap-12 border-t border-[oklch(0.2393_0_0)] pt-8 mt-auto">
<div>
<p className="text-4xl font-medium tracking-tighter text-[oklch(0.6788_0.2013_36.9694)] mb-1">300%</p>
<p className="text-[10px] font-mono text-[oklch(0.7118_0.0129_286.0665)] tracking-widest uppercase">Faster loads</p>
</div>
<div>
<p className="text-4xl font-medium tracking-tighter text-[oklch(0.6788_0.2013_36.9694)] mb-1">Zero</p>
<p className="text-[10px] font-mono text-[oklch(0.7118_0.0129_286.0665)] tracking-widest uppercase">Downtime</p>
</div>
</div>
</div>

<div className="bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] rounded-[2rem] p-10 md:p-12 flex flex-col justify-between min-h-[480px] group hover:border-[oklch(0.6788_0.2013_36.9694)]/40 transition-colors duration-500">
<div className="mb-12">
<span className="font-mono text-[10px] tracking-widest text-[oklch(0.9807_0.0021_17.1950)] uppercase bg-[oklch(0.1496_0_0)] border border-[oklch(0.2393_0_0)] px-3 py-1.5 rounded mb-8 inline-block shadow-sm">B2B SaaS</span>
<h3 className="text-3xl font-medium tracking-tight text-[oklch(0.9807_0.0021_17.1950)] mb-6">MVP launched in 6 weeks.</h3>
<p className="text-sm text-[oklch(0.7118_0.0129_286.0665)] font-normal leading-relaxed max-w-md">Partnered with a solo founder to define the absolute core features. Built and deployed the initial web app, allowing them to close their pre-seed round.</p>
</div>
<div className="flex gap-12 border-t border-[oklch(0.2393_0_0)] pt-8 mt-auto">
<div>
<p className="text-4xl font-medium tracking-tighter text-[oklch(0.9807_0.0021_17.1950)] mb-1">6 Wks</p>
<p className="text-[10px] font-mono text-[oklch(0.7118_0.0129_286.0665)] tracking-widest uppercase">To market</p>
</div>
<div>
<p className="text-4xl font-medium tracking-tighter text-[oklch(0.9807_0.0021_17.1950)] mb-1">$500k</p>
<p className="text-[10px] font-mono text-[oklch(0.7118_0.0129_286.0665)] tracking-widest uppercase">Raised</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 md:py-32 px-6 flex justify-center border-t border-[oklch(0.2393_0_0)]">
<div className="w-full max-w-5xl bg-[oklch(0.1496_0_0)] rounded-[2rem] border border-[oklch(0.2393_0_0)] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 relative overflow-hidden shadow-xl">

<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at bottom left, oklch(0.6788 0.2013 36.9694 / 0.05) 0%, transparent 50%)'}}></div>

<div className="flex-1 flex flex-col justify-between relative z-10">
<div>
<span className="font-mono bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.9807_0.0021_17.1950)] text-[10px] uppercase tracking-widest px-3 py-1 rounded mb-6 inline-block">
                            Operations &amp; AI
                        </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[oklch(0.9807_0.0021_17.1950)] leading-tight mb-6 text-balance">
                            Already have a product? Let's <span className="italic text-[oklch(0.7118_0.0129_286.0665)]">automate</span> your operations.
                        </h2>
<p className="text-sm font-normal text-[oklch(0.7118_0.0129_286.0665)] max-w-sm mb-12 leading-relaxed text-balance">
                            Beyond custom software, we help businesses eliminate manual data entry, set up AI voice agents, and build complex workflows.
                        </p>
</div>
<div>
<div className="flex items-center justify-between border-t border-[oklch(0.2393_0_0)] pt-6">
<div className="flex flex-col">
<span className="text-sm font-medium text-[oklch(0.9807_0.0021_17.1950)] mb-1">System Status</span>
<span className="text-xs text-[oklch(0.6788_0.2013_36.9694)] flex items-center gap-1.5 font-mono uppercase tracking-widest">
<span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.6788_0.2013_36.9694)] shadow-[0_0_8px_oklch(0.6788_0.2013_36.9694)] animate-pulse"></span>
                                    Fully Automated
                                </span>
</div>

<div className="w-12 h-6 bg-[oklch(0.6788_0.2013_36.9694)]/20 border border-[oklch(0.6788_0.2013_36.9694)]/50 rounded-full p-1 cursor-default flex items-center justify-end">
<div className="w-4 h-4 bg-[oklch(0.6788_0.2013_36.9694)] rounded-full shadow-[0_0_10px_oklch(0.6788_0.2013_36.9694_/_0.8)]"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col justify-between bg-[oklch(0.2178_0_0)]/80 rounded-[1.5rem] p-8 border border-[oklch(0.2393_0_0)] relative z-10 backdrop-blur-sm">
<ul className="flex flex-col gap-4 mb-8">
<li className="flex items-center gap-3 text-sm font-medium text-[oklch(0.9807_0.0021_17.1950)]">
<iconify-icon className="text-lg text-[oklch(0.6788_0.2013_36.9694)]" icon="solar:check-circle-linear"></iconify-icon>
                            AI Voice Agents (Inbound/Outbound)
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-[oklch(0.9807_0.0021_17.1950)]">
<iconify-icon className="text-lg text-[oklch(0.6788_0.2013_36.9694)]" icon="solar:check-circle-linear"></iconify-icon>
                            Custom Workflow Automation (n8n)
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-[oklch(0.9807_0.0021_17.1950)]">
<iconify-icon className="text-lg text-[oklch(0.6788_0.2013_36.9694)]" icon="solar:check-circle-linear"></iconify-icon>
                            CRM &amp; Onboarding Systems
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-[oklch(0.9807_0.0021_17.1950)]">
<iconify-icon className="text-lg text-[oklch(0.6788_0.2013_36.9694)]" icon="solar:check-circle-linear"></iconify-icon>
                            Data Routing &amp; Syncing
                        </li>
</ul>
<button className="group w-full bg-[oklch(0.9807_0.0021_17.1950)] text-[oklch(0.1496_0_0)] hover:bg-[oklch(0.7118_0.0129_286.0665)] transition-colors py-4 rounded-full text-center text-sm font-medium flex items-center justify-center gap-2" onclick="switchView('automation')">
                        Initialize Automation
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="w-full bg-[oklch(0.1496_0_0)] text-[oklch(0.9807_0.0021_17.1950)] py-24 md:py-32 px-6 flex flex-col items-center text-center mt-auto border-t border-[oklch(0.2393_0_0)] relative" id="book">
<div className="absolute inset-0 grid-overlay opacity-30 mix-blend-screen pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[oklch(0.6788_0.2013_36.9694)]/10 blur-[100px] rounded-full pointer-events-none"></div>
<span className="relative z-10 font-mono text-[10px] uppercase tracking-widest bg-[oklch(0.2178_0_0)] border border-[oklch(0.2393_0_0)] text-[oklch(0.6788_0.2013_36.9694)] px-4 py-1.5 rounded mb-8 shadow-[0_0_15px_oklch(0.6788_0.2013_36.9694_/_0.2)]">Awaiting Input</span>
<h2 className="relative z-10 text-5xl md:text-6xl lg:text-[5rem] font-medium tracking-tight leading-[1.05] mb-6 max-w-3xl text-balance">
                Not sure where to start? <br/>Let's <span className="italic text-[oklch(0.7118_0.0129_286.0665)]">figure it out.</span>
</h2>
<p className="relative z-10 text-lg font-normal text-[oklch(0.7118_0.0129_286.0665)] mb-10 max-w-md text-balance">
                Book a low-pressure, 30-minute discovery call. We'll audit your architecture and give you a straight answer on what it takes to build.
            </p>
<a className="relative z-10 group bg-[oklch(0.6788_0.2013_36.9694)] hover:opacity-90 text-[oklch(0.9807_0.0021_17.1950)] transition-all duration-300 rounded-full py-4 px-10 text-sm font-medium inline-flex items-center tracking-tight shadow-[0_0_20px_oklch(0.6788_0.2013_36.9694_/_0.2)] hover:shadow-[0_0_30px_oklch(0.6788_0.2013_36.9694_/_0.4)]" href="#">
                Initialize System
                <iconify-icon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</section>
</main>



<main className="flex-grow flex flex-col items-center w-full hidden pt-32 pb-12 relative z-10" id="view-automation">

<section className="relative w-full max-w-6xl px-6 pt-12 pb-24 md:pt-20 md:pb-32 flex flex-col items-center text-center overflow-hidden">
<div className="animate-fade-in inline-flex items-center gap-3 bg-[oklch(0.2178_0_0)]/60 backdrop-blur-md border border-[oklch(0.2393_0_0)] text-[oklch(0.6788_0.2013_36.9694)] font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 shadow-sm" style={{animationDelay: '0.1s'}}>
<iconify-icon className="text-lg" icon="solar:bolt-linear"></iconify-icon>
                AI &amp; Workflow Infrastructure
            </div>
<div className="relative max-w-4xl flex flex-col items-center animate-fade-in" style={{animationDelay: '0.3s'}}>
<h1 className="text-5xl md:text-7xl lg:text-[5rem] font-medium tracking-tighter leading-[1.05] mb-6 text-[oklch(0.9807_0.0021_17.1950)] text-balance">
                    Eliminate manual work.<br className="hidden md:block"/> Scale with <span className="italic text-[oklch(0.7118_0.0129_286.0665)]">AI.</span>
</h1>
<p className="text-lg md:text-xl font-normal text-[oklch(0.7118_0.0129_286.0665)] mb-10 max-w-2xl leading-relaxed tracking-tight text-balance">
                    We build custom AI agents and workflow automations for agencies and local businesses. Stop wasting hours on tasks software can do in seconds.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pointer-events-auto">
<a className="group w-full sm:w-auto bg-[oklch(0.6788_0.2013_36.9694)] hover:opacity-90 text-[oklch(0.9807_0.0021_17.1950)] transition-all duration-300 rounded-full py-4 px-8 text-sm font-medium flex justify-center items-center gap-2 tracking-tight shadow-[0_0_20px_oklch(0.6788_0.2013_36.9694_/_0.2)] hover:shadow-[0_0_30px_oklch(0.6788_0.2013_36.9694_/_0.4)]" href="#book-demo">
                        Boot Live Demo
                        <iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="w-full border-y border-[oklch(0.2393_0_0)] bg-[oklch(0.2178_0_0)]">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 text-center">
<div className="flex flex-col items-center">
<p className="text-5xl font-medium tracking-tighter text-[oklch(0.9807_0.0021_17.1950)] mb-2">40+</p>
<p className="font-mono text-[10px] text-[oklch(0.7118_0.0129_286.0665)] tracking-widest uppercase">Hours saved weekly</p>
</div>
<div className="hidden md:block w-px h-16 bg-[oklch(0.2393_0_0)]"></div>
<div className="flex flex-col items-center">
<p className="text-5xl font-medium tracking-tighter text-[oklch(0.9807_0.0021_17.1950)] mb-2">24/7</p>
<p className="font-mono text-[10px] text-[oklch(0.7118_0.0129_286.0665)] tracking-widest uppercase">Lead response time</p>
</div>
<div className="hidden md:block w-px h-16 bg-[oklch(0.2393_0_0)]"></div>
<div className="flex flex-col items-center">
<p className="text-5xl font-medium tracking-tighter text-[oklch(0.9807_0.0021_17.1950)] mb-2">100%</p>
<p className="font-mono text-[10px] text-[oklch(0.7118_0.0129_286.0665)] tracking-widest uppercase">Data accuracy</p>
</div>
</div>
</section>

<section className="w-full max-w-6xl px-6 py-24 md:py-32 flex flex-col items-center">
<div className="mb-16 flex flex-col items-center text-center">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-[oklch(0.6788_0.2013_36.9694)]"></div>
<span className="font-mono text-xs text-[oklch(0.6788_0.2013_36.9694)] uppercase tracking-[0.2em]">Operational Topography</span>
<div className="h-px w-8 bg-[oklch(0.6788_0.2013_36.9694)]"></div>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[oklch(0.9807_0.0021_17.1950)] max-w-2xl">
                    Infrastructure designed to remove <span className="italic text-[oklch(0.7118_0.0129_286.0665)]">bottlenecks.</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-6 w-full">
<div className="bg-[oklch(0.2178_0_0)] p-8 rounded-[1.5rem] border border-[oklch(0.2393_0_0)] shadow-sm flex flex-col h-full hover:border-[oklch(0.6788_0.2013_36.9694)]/50 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-[oklch(0.1496_0_0)] border border-[oklch(0.2393_0_0)] flex items-center justify-center text-[oklch(0.6788_0.2013_36.9694)] mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_oklch(0.6788_0.2013_36.9694_/_0.15)]">
<iconify-icon className="text-2xl" icon="solar:microphone-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[oklch(0.9807_0.0021_17.1950)] tracking-tight mb-3">AI Voice Agents</h3>
<p className="text-sm font-normal text-[oklch(0.7118_0.0129_286.0665)] leading-relaxed flex-grow">Conversational AI that answers inbound calls, qualifies leads, and books appointments directly onto your calendar, sounding completely natural.</p>
</div>
<div className="bg-[oklch(0.2178_0_0)] p-8 rounded-[1.5rem] border border-[oklch(0.2393_0_0)] shadow-sm flex flex-col h-full hover:border-[oklch(0.6788_0.2013_36.9694)]/50 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-[oklch(0.1496_0_0)] border border-[oklch(0.2393_0_0)] flex items-center justify-center text-[oklch(0.6788_0.2013_36.9694)] mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_oklch(0.6788_0.2013_36.9694_/_0.15)]">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[oklch(0.9807_0.0021_17.1950)] tracking-tight mb-3">Workflow Automation</h3>
<p className="text-sm font-normal text-[oklch(0.7118_0.0129_286.0665)] leading-relaxed flex-grow">Complex data routing using n8n or Make. Connect your entire tech stack so data flows seamlessly between your CRM, email, and internal tools.</p>
</div>
<div className="bg-[oklch(0.2178_0_0)] p-8 rounded-[1.5rem] border border-[oklch(0.2393_0_0)] shadow-sm flex flex-col h-full hover:border-[oklch(0.6788_0.2013_36.9694)]/50 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-[oklch(0.1496_0_0)] border border-[oklch(0.2393_0_0)] flex items-center justify-center text-[oklch(0.6788_0.2013_36.9694)] mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_oklch(0.6788_0.2013_36.9694_/_0.15)]">
<iconify-icon className="text-2xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[oklch(0.9807_0.0021_17.1950)] tracking-tight mb-3">CRM Optimization</h3>
<p className="text-sm font-normal text-[oklch(0.7118_0.0129_286.0665)] leading-relaxed flex-grow">Customized pipeline setups, automated client onboarding sequences, and automated reporting dashboards to give you total visibility.</p>
</div>
</div>
</section>
</main>


    </>
  );
}

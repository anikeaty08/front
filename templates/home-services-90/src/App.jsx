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



        document.addEventListener('DOMContentLoaded', () => {
            // Header Scroll
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    header.classList.add('bg-[#09090b]/80', 'border-white/10');
                    header.classList.remove('border-transparent');
                } else {
                    header.classList.remove('bg-[#09090b]/80', 'border-white/10');
                    header.classList.add('border-transparent');
                }
            });
            
            // Close other FAQs when one is opened
            const detailsElements = document.querySelectorAll('details');
            detailsElements.forEach(targetDetail => {
                targetDetail.addEventListener('click', () => {
                    detailsElements.forEach(detail => {
                        if (detail !== targetDetail) {
                            detail.removeAttribute('open');
                        }
                    });
                });
            });
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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" style={{backgroundColor: '#09090b'}}>
<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-10 blur-[120px]" style={{background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)'}}></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.08] blur-[120px]" style={{background: 'radial-gradient(circle, #b388ff 0%, transparent 70%)'}}></div>
<div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'}}></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 border-b border-transparent backdrop-blur-md" id="header">
<div className="text-xl font-medium tracking-widest text-white">
            CALLCLAW
        </div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="#problem">Platform</a>
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="#advantage">Solution</a>
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-light text-zinc-400 hover:text-white transition-colors">Log in</button>
<a className="text-sm font-light text-white px-5 py-2 rounded-full border border-cyan-500/30 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all" href="/signup">Start Pilot</a>
</div>
<button className="md:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</header>
<main>

<section className="relative flex flex-col items-center text-center max-w-[1000px] mx-auto pt-40 md:pt-52 px-6 pb-24 md:pb-32">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-xs text-cyan-400 tracking-widest uppercase font-light">Now onboarding home service fleets</span>
</div>
<h1 className="text-5xl sm:text-7xl md:text-[100px] font-thin tracking-tight leading-[0.95] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500" style={{textShadow: '0 0 60px rgba(0, 229, 255, 0.25)'}}>
                Recover Missed Calls.<br/>Book Jobs in <span className="font-light">&lt;60s</span>.
            </h1>
<p className="text-base md:text-xl font-light text-zinc-400 max-w-[720px] mb-12 leading-relaxed">
                Transform missed calls into booked revenue automatically. The manual-first AI recovery system built exclusively for home services.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<div className="relative group">
<div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/30 to-purple-500/30"></div>
<a className="relative px-10 py-4 rounded-full bg-[#0a0a0c]/80 backdrop-blur-xl border border-cyan-500/30 text-white text-base md:text-lg font-light overflow-hidden transition-all duration-500 hover:-translate-y-0.5 hover:border-cyan-400/80 shadow-[0_4px_30px_rgba(0,229,255,0.1)] hover:shadow-[0_10px_40px_rgba(0,229,255,0.25),inset_0_0_20px_rgba(0,229,255,0.1)] flex items-center gap-3" href="/signup">
<span className="relative z-10">Start 48-Hour Free Pilot</span>
<iconify-icon className="text-xl relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<a className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white text-base md:text-lg font-light hover:bg-white/10 transition-colors" href="/demo">
                    Schedule a Demo
                </a>
</div>
</section>

<section className="relative z-10 w-full max-w-[1200px] mx-auto py-20 px-6" id="problem">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-thin tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-6">The Hidden Cost of Missed Calls</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl bg-[#0f0f12]/40 border border-white/5 backdrop-blur-md flex flex-col items-center text-center transition-transform hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6">
<iconify-icon className="text-xl" icon="solar:chart-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-base font-light text-zinc-300 leading-relaxed">Contractors lose <span className="text-white font-normal">$10K–$30K/month</span> to missed calls</p>
</div>
<div className="p-8 rounded-3xl bg-[#0f0f12]/40 border border-white/5 backdrop-blur-md flex flex-col items-center text-center transition-transform hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
<iconify-icon className="text-xl" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-base font-light text-zinc-300 leading-relaxed">Slow response kills Google <span className="text-white font-normal">LSA rankings</span> instantly</p>
</div>
<div className="p-8 rounded-3xl bg-[#0f0f12]/40 border border-white/5 backdrop-blur-md flex flex-col items-center text-center transition-transform hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-zinc-800/50 border border-white/10 flex items-center justify-center text-zinc-400 mb-6">
<iconify-icon className="text-xl" icon="solar:robot-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-base font-light text-zinc-300 leading-relaxed">Traditional answering services and AI bots <span className="text-white font-normal">fail in emergencies</span></p>
</div>
</div>
</section>

<section className="relative z-10 w-full bg-[#0f0f12]/20 border-y border-white/5 py-20 px-6 backdrop-blur-sm" id="advantage">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-thin tracking-tight text-white">The CallClaw Advantage</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="space-y-8">
<div className="group relative pl-6 border-l border-white/10 hover:border-cyan-500/50 transition-colors">
<h3 className="text-xl font-light text-white mb-2 tracking-tight">Platinum Minute Protocol</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">Respond to missed calls in under 60 seconds to maximize conversion.</p>
</div>
<div className="group relative pl-6 border-l border-white/10 hover:border-cyan-500/50 transition-colors">
<h3 className="text-xl font-light text-white mb-2 tracking-tight">Human-in-the-Loop</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">AI-assisted, human-validated system ensures high-touch conversion.</p>
</div>
<div className="group relative pl-6 border-l border-white/10 hover:border-cyan-500/50 transition-colors">
<h3 className="text-xl font-light text-white mb-2 tracking-tight">Revenue Recovery Dashboard</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">Track every recovered lead in real-time, integrated with Google Sheets.</p>
</div>
<div className="group relative pl-6 border-l border-white/10 hover:border-cyan-500/50 transition-colors">
<h3 className="text-xl font-light text-white mb-2 tracking-tight">LSA Ranking Protection</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">Maintain Google LSA visibility and maximize ad ROI.</p>
</div>
</div>
<div className="relative rounded-3xl p-2 bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.05)]">
<div className="absolute inset-0 rounded-3xl bg-cyan-500/5 blur-xl"></div>
<img alt="CallClaw Dashboard Visual" className="relative z-10 rounded-2xl w-full h-auto bg-[#09090b] border border-white/5 object-cover min-h-[300px]" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwOTA5MGIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0iIzUyNTI1YiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkRhc2hib2FyZCBWaXN1YWw8L3RleHQ+PC9zdmc+'" src="/images/solution-screenshot.png"/>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-[1200px] mx-auto py-20 px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative p-8 rounded-3xl bg-[#0f0f12]/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 backdrop-blur-md overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="inline-flex w-12 h-12 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-zinc-400 mb-6">
<iconify-icon className="text-xl" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-white mb-3">Immediate SMS Capture</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                            Engage leads instantly with automated SMS while preserving human touch.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-[#0f0f12]/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 backdrop-blur-md overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="inline-flex w-12 h-12 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-zinc-400 mb-6">
<iconify-icon className="text-xl" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-white mb-3">Lead Qualification &amp; Booking</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                            Ensure the right jobs are booked efficiently for your technicians.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-[#0f0f12]/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 backdrop-blur-md overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="inline-flex w-12 h-12 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-zinc-400 mb-6">
<iconify-icon className="text-xl" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-white mb-3">Manual-to-AI Transition</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                            High-touch first, then automated system trained on real conversions.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-[#0f0f12]/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 backdrop-blur-md overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="inline-flex w-12 h-12 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-zinc-400 mb-6">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-white mb-3">Transparent Dashboard</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                            View every recovered lead, its status, and ROI in real-time.
                        </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-[1200px] mx-auto py-20 px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-thin tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-4">How It Works</h2>
<p className="text-base font-light text-zinc-400">The seamless recovery sequence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

<div className="hidden lg:block absolute top-[140px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl bg-[#0f0f12]/60 backdrop-blur-md border border-white/5">
<div className="w-10 h-10 rounded-full bg-[#09090b] border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-light mb-4 shadow-[0_0_15px_rgba(0,229,255,0.1)]">01</div>
<h3 className="text-base font-medium text-white mb-2">Missed Call Detected</h3>
<p className="text-xs font-light text-zinc-400 leading-relaxed">Captured instantly in CallClaw system.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl bg-[#0f0f12]/60 backdrop-blur-md border border-white/5">
<div className="w-10 h-10 rounded-full bg-[#09090b] border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-light mb-4 shadow-[0_0_15px_rgba(0,229,255,0.1)]">02</div>
<h3 className="text-base font-medium text-white mb-2">SMS Sent &lt;60s</h3>
<p className="text-xs font-light text-zinc-400 leading-relaxed">"We missed your call but we’re here to help."</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl bg-[#0f0f12]/60 backdrop-blur-md border border-white/5">
<div className="w-10 h-10 rounded-full bg-[#09090b] border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-light mb-4 shadow-[0_0_15px_rgba(0,229,255,0.1)]">03</div>
<h3 className="text-base font-medium text-white mb-2">Human Validation</h3>
<p className="text-xs font-light text-zinc-400 leading-relaxed">Operator confirms details and books the job.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl bg-[#0f0f12]/60 backdrop-blur-md border border-white/5">
<div className="w-10 h-10 rounded-full bg-[#09090b] border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-light mb-4 shadow-[0_0_15px_rgba(0,229,255,0.1)]">04</div>
<h3 className="text-base font-medium text-white mb-2">Job Scheduled</h3>
<p className="text-xs font-light text-zinc-400 leading-relaxed">Job appears in your dashboard / CRM.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl bg-[#0f0f12]/60 backdrop-blur-md border border-white/5">
<div className="w-10 h-10 rounded-full bg-[#09090b] border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-light mb-4 shadow-[0_0_15px_rgba(0,229,255,0.1)]">05</div>
<h3 className="text-base font-medium text-white mb-2">Hybrid Training</h3>
<p className="text-xs font-light text-zinc-400 leading-relaxed">Data trains the AI for future automation.</p>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-[1200px] mx-auto py-20 px-6 overflow-hidden">

<div className="mb-20 text-center">
<p className="text-xs uppercase tracking-widest text-zinc-500 mb-8 font-medium">Integrated with industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
<img alt="Google LSA" className="h-8 object-contain" onerror="this.outerHTML='&lt;span class=\'text-lg font-medium text-white\'&gt;Google LSA&lt;/span&gt;'" src="google-lsa.png"/>
<img alt="ServiceTitan" className="h-8 object-contain" onerror="this.outerHTML='&lt;span class=\'text-lg font-medium text-white\'&gt;ServiceTitan&lt;/span&gt;'" src="servicetitan.png"/>
<img alt="Jobber" className="h-8 object-contain" onerror="this.outerHTML='&lt;span class=\'text-lg font-medium text-white\'&gt;Jobber&lt;/span&gt;'" src="jobber.png"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">

<div className="relative rounded-3xl bg-[#0f0f12]/40 border border-white/5 p-8 backdrop-blur-xl">
<div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/5 blur-[80px]"></div>
<iconify-icon className="text-3xl text-zinc-600 mb-6" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-light text-zinc-300 leading-relaxed mb-8">
                        "Recovered 12 jobs in the first week. CallClaw paid for itself instantly."
                    </p>
<div className="flex items-center gap-3 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10"></div>
<div>
<h4 className="text-sm font-medium text-white">HVAC Contractor</h4>
</div>
</div>
</div>

<div className="relative rounded-3xl bg-[#0f0f12]/40 border border-cyan-500/20 p-8 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(0,229,255,0.03)] transform md:-translate-y-4">
<div className="absolute -bottom-20 -left-20 w-50 h-50 bg-cyan-500/5 blur-[80px]"></div>
<iconify-icon className="text-3xl text-cyan-500/50 mb-6" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-light text-white leading-relaxed mb-8">
                        "Our LSA ranking jumped, and we stopped wasting ad spend."
                    </p>
<div className="flex items-center gap-3 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10"></div>
<div>
<h4 className="text-sm font-medium text-white">Plumbing Owner</h4>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full py-20 px-6 border-t border-white/5 bg-[#050505]/50" id="pricing">
<div className="max-w-[1000px] mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-thin tracking-tight text-white mb-4">Pricing Plans</h2>
<p className="text-base font-light text-zinc-400">Simple, validated ROI models.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

<div className="p-10 rounded-3xl bg-[#0f0f12]/40 border border-white/5 backdrop-blur-md flex flex-col h-full hover:border-white/10 transition-all">
<h3 className="text-2xl font-light tracking-tight text-white mb-2">High-Touch Pilot</h3>
<p className="text-sm font-light text-zinc-400 mb-8">Manual-first execution to validate ROI.</p>
<div className="mb-10">
<span className="text-4xl lg:text-5xl font-thin text-white tracking-tight">$997–$2K</span>
<span className="text-sm text-zinc-500">/month</span>
</div>
<div className="mt-auto">
<a className="block w-full py-4 text-center rounded-full border border-white/10 bg-white/5 text-white text-base font-light hover:bg-white/10 transition-colors" href="/signup">Start 48-Hour Free Pilot</a>
</div>
</div>

<div className="p-10 rounded-3xl bg-[#0f0f12]/80 border border-cyan-500/30 backdrop-blur-xl flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(0,229,255,0.05)] relative z-10">
<div className="absolute -top-3 left-8 text-[10px] tracking-widest uppercase text-cyan-400 bg-[#09090b] px-3 py-1 rounded-full border border-cyan-500/30">Most Popular</div>
<h3 className="text-2xl font-light tracking-tight text-white mb-2">Hybrid Scale</h3>
<p className="text-sm font-light text-zinc-400 mb-8">Automated revenue recovery after validation.</p>
<div className="mb-10">
<span className="text-4xl lg:text-5xl font-thin text-white tracking-tight">$297–$397</span>
<span className="text-sm text-zinc-500">/month</span>
</div>
<div className="mt-auto">
<a className="block w-full py-4 text-center rounded-full border border-cyan-500/50 bg-cyan-500/10 text-white text-base font-light hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all" href="/signup">Start Subscription</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-[800px] mx-auto py-20 px-6" id="faq">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-thin tracking-tight text-white mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<details className="group bg-[#0f0f12]/40 border border-white/5 rounded-2xl p-6 open:bg-white/[0.02] transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-white text-base md:text-lg">
<span className="font-light tracking-tight">Is this compliant with SMS regulations?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-cyan-400 shrink-0 ml-4">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="text-zinc-400 mt-4 font-light text-sm leading-relaxed">
                        Yes. All responses triggered only for missed inbound calls with clear opt-out instructions.
                    </p>
</details>
<details className="group bg-[#0f0f12]/40 border border-white/5 rounded-2xl p-6 open:bg-white/[0.02] transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-white text-base md:text-lg">
<span className="font-light tracking-tight">Do I need to install software?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-cyan-400 shrink-0 ml-4">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="text-zinc-400 mt-4 font-light text-sm leading-relaxed">
                        No—manual-first execution integrates with your current call system. Nothing new to learn.
                    </p>
</details>
<details className="group bg-[#0f0f12]/40 border border-white/5 rounded-2xl p-6 open:bg-white/[0.02] transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-white text-base md:text-lg">
<span className="font-light tracking-tight">Will this improve my Google LSA ranking?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-cyan-400 shrink-0 ml-4">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<p className="text-zinc-400 mt-4 font-light text-sm leading-relaxed">
                        Yes—responsiveness metrics are consistently maintained, boosting ad visibility.
                    </p>
</details>
</div>
</section>

<section className="relative z-10 flex flex-col items-center justify-center py-24 px-6 overflow-hidden border-t border-white/5 bg-gradient-to-b from-transparent to-[#050505]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,229,255,0.05)_0%,transparent_60%)] pointer-events-none"></div>
<div className="relative z-10 text-center max-w-3xl">
<h2 className="text-3xl md:text-5xl font-thin tracking-tight text-white mb-10 leading-tight">
                    Recover Your Missed Calls Now
                </h2>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="group relative px-8 py-4 rounded-full bg-white text-[#09090b] text-base font-medium overflow-hidden transition-all duration-300 hover:bg-cyan-50" href="/signup">
<span className="relative z-10">Start 48-Hour Free Pilot</span>
</a>
<a className="px-8 py-4 rounded-full border border-white/20 text-white text-base font-medium hover:bg-white/5 transition-colors" href="/demo">
                        Schedule a Demo
                    </a>
</div>
</div>
</section>
</main>

<footer className="relative z-10 border-t border-white/5 bg-[#09090b] pt-20 pb-12 px-6 lg:px-12">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="flex flex-col gap-6">
<div className="text-xl font-medium tracking-widest text-white">CALLCLAW</div>
<p className="text-sm font-light text-zinc-500 leading-relaxed">
                    AI infrastructure designed to eliminate missed opportunities for home service professionals globally.
                </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:linkedin-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">Platform</h4>
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="#">How it Works</a>
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="#">CRM Integrations</a>
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="#">LSA Protection</a>
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">Company</h4>
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="#">About Us</a>
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="/demo">Contact Sales</a>
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm font-light text-zinc-400 hover:text-cyan-400 transition-colors" href="#">Terms of Service</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-2">System Status</h4>
<div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
<span className="text-xs font-mono text-zinc-400">All Systems Operational</span>
</div>
</div>
</div>
<div className="max-w-[1200px] mx-auto border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-zinc-600">
<p>© 2024 CallClaw AI. All rights reserved.</p>
<p>Designed for Home Services.</p>
</div>
</footer>


    </>
  );
}

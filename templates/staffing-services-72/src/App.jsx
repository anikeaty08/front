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



        lucide.createIcons();
    
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
      

<div className="absolute top-0 inset-x-0 h-[600px] flex justify-center pointer-events-none overflow-hidden">
<div className="w-[1000px] h-[400px] bg-cyan-600/15 blur-[120px] rounded-[100%] -translate-y-1/2"></div>
</div>

<nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
<div className="flex items-center gap-2 text-white font-medium text-lg">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
            Staffify
        </div>
<a className="hidden sm:inline-flex text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Log in</a>
</nav>
<main className="relative z-10 flex flex-col">

<section className="pt-24 pb-32 px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium uppercase tracking-widest mb-8">
<i className="w-3.5 h-3.5" data-lucide="unlock" strokeWidth="1.5"></i>
                It's time to break free
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-5xl leading-[1.1]">
                We Don’t Place Talent.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">We Build Leverage.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-14 leading-relaxed">
                Staffify embeds elite virtual talent directly into your business, backed by real-time guidance, systems, and ongoing support—so delegation actually works.
            </p>

<div className="w-full max-w-5xl aspect-video bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center relative group overflow-hidden shadow-[0_0_60px_-15px_rgba(6,182,212,0.15)] ring-1 ring-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
<button className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300">
<i className="w-8 h-8 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</button>
</div>
</section>

<section className="py-32 px-6 bg-zinc-950/50 border-y border-white/5 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        Most Businesses Don’t Fail at Hiring.<br/>
<span className="text-zinc-500">They Fail at Integration.</span>
</h2>
<p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        Hiring a VA is easy. Making it work inside a real business is not. Without structure, guidance, and accountability, even great talent stalls, and owners stay stuck doing everything themselves.
                    </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 items-stretch">

<div className="flex flex-col p-10 rounded-3xl border border-white/5 bg-[#050505]">
<div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/5">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-zinc-500" data-lucide="x" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-400">Traditional Staffing</h3>
</div>
<ul className="space-y-6 flex-1">
<li className="flex items-start gap-4 text-lg text-zinc-500">
<i className="w-6 h-6 shrink-0 mt-0.5" data-lucide="minus" strokeWidth="1.5"></i>
                                Hire a VA
                            </li>
<li className="flex items-start gap-4 text-lg text-zinc-500">
<i className="w-6 h-6 shrink-0 mt-0.5" data-lucide="minus" strokeWidth="1.5"></i>
                                Assign tasks
                            </li>
<li className="flex items-start gap-4 text-lg text-zinc-500">
<i className="w-6 h-6 shrink-0 mt-0.5" data-lucide="minus" strokeWidth="1.5"></i>
                                Minimal onboarding
                            </li>
<li className="flex items-start gap-4 text-lg text-zinc-500">
<i className="w-6 h-6 shrink-0 mt-0.5" data-lucide="minus" strokeWidth="1.5"></i>
                                Agency disappears
                            </li>
</ul>
</div>

<div className="flex flex-col p-10 rounded-3xl border border-cyan-500/20 bg-cyan-950/10 relative overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.05)]">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
<i className="w-5 h-5 text-cyan-400" data-lucide="check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white">The Staffify Model</h3>
</div>
<ul className="space-y-6 flex-1 relative z-10">
<li className="flex items-start gap-4 text-lg text-zinc-200">
<i className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" data-lucide="workflow" strokeWidth="1.5"></i>
                                Role &amp; workflow design
                            </li>
<li className="flex items-start gap-4 text-lg text-zinc-200">
<i className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" data-lucide="users" strokeWidth="1.5"></i>
                                Embedded talent
                            </li>
<li className="flex items-start gap-4 text-lg text-zinc-200">
<i className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" data-lucide="headset" strokeWidth="1.5"></i>
                                Real-time support
                            </li>
<li className="flex items-start gap-4 text-lg text-zinc-200">
<i className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" data-lucide="trending-up" strokeWidth="1.5"></i>
                                Ongoing optimization
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">How it Works</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">A structured approach to integrating leverage into your operations.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-20 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="relative flex flex-col items-start bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-lg">
<span className="text-cyan-400 font-semibold">1</span>
</div>
<div className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-3">Phase 1</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Operational Alignment</h3>
<p className="text-lg text-zinc-400 leading-relaxed mb-6">We identify leverage points, define responsibilities, and architect the role.</p>
<p className="text-base text-zinc-500 leading-relaxed">Before anyone is hired, we work alongside you to identify true leverage points inside your business. We clarify responsibilities, define outcomes, and design the workflows your VA will operate within. This ensures the role is built for execution from day one, eliminating guesswork, misalignment, and wasted time.</p>
</div>

<div className="relative flex flex-col items-start bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/20 flex items-center justify-center mb-8 relative z-10 shadow-lg shadow-cyan-900/20">
<span className="text-cyan-400 font-semibold">2</span>
</div>
<div className="text-xs font-medium tracking-widest uppercase text-cyan-500 mb-3">Phase 2</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Talent Integration</h3>
<p className="text-lg text-zinc-400 leading-relaxed mb-6">We place elite virtual talent trained to your workflows.</p>
<p className="text-base text-zinc-500 leading-relaxed">Once the role is clearly architected, we embed elite virtual talent trained to your specific workflows and expectations. This is not a generic placement. We ensure the VA understands how your business operates, how success is measured, and how to integrate seamlessly into your existing systems and team.</p>
</div>

<div className="relative flex flex-col items-start bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-lg">
<span className="text-cyan-400 font-semibold">3</span>
</div>
<div className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-3">Phase 3</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Support &amp; Optimization</h3>
<p className="text-lg text-zinc-400 leading-relaxed mb-6">We stay embedded to ensure performance, accountability, and growth.</p>
<p className="text-base text-zinc-500 leading-relaxed">Staffify remains actively involved after placement, providing real-time support to ensure performance, accountability, and continuous improvement. As your business evolves, we help refine workflows, adjust responsibilities, and optimize execution so your operation scales without breaking.</p>
</div>
</div>
<div className="flex justify-center">
<a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all active:scale-95 text-lg" href="#">
                        Get Started
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 bg-zinc-950/30 border-t border-white/5">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-sm font-medium tracking-widest uppercase text-cyan-400 mb-4">The Staffify Difference</h2>
<p className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Compare the models</p>
</div>
<div className="w-full bg-[#050505] rounded-3xl border border-white/10 overflow-hidden">

<div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_2fr] gap-4 p-6 md:p-8 border-b border-white/10 bg-zinc-900/50">
<div className="hidden md:block"></div>
<div className="flex items-center gap-2 text-lg font-medium text-white">
<div className="w-5 h-5 rounded bg-cyan-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-cyan-400" data-lucide="zap" strokeWidth="1.5"></i>
</div>
                            Staffify
                        </div>
<div className="hidden md:flex items-center text-lg font-medium text-zinc-500">
                            The Other Guys
                        </div>
</div>

<div className="divide-y divide-white/5">

<div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_2fr] gap-4 p-6 md:p-8 hover:bg-white/[0.02] transition-colors">
<div className="text-lg font-medium text-zinc-300 md:mb-0 mb-2">Speed to Hire</div>
<div className="flex items-start gap-3 text-lg text-zinc-200">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
                                Match in as little as 1 week
                            </div>
<div className="flex items-start gap-3 text-lg text-zinc-600 mt-2 md:mt-0">
<i className="w-5 h-5 shrink-0 mt-1" data-lucide="x" strokeWidth="1.5"></i>
                                4–8+ weeks to recruit and onboard
                            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_2fr] gap-4 p-6 md:p-8 hover:bg-white/[0.02] transition-colors">
<div className="text-lg font-medium text-zinc-300 md:mb-0 mb-2">Overhead</div>
<div className="flex items-start gap-3 text-lg text-zinc-200">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
                                Flat hourly rate, all-inclusive
                            </div>
<div className="flex items-start gap-3 text-lg text-zinc-600 mt-2 md:mt-0">
<i className="w-5 h-5 shrink-0 mt-1" data-lucide="x" strokeWidth="1.5"></i>
                                Salary + benefits + taxes + equipment
                            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_2fr] gap-4 p-6 md:p-8 hover:bg-white/[0.02] transition-colors">
<div className="text-lg font-medium text-zinc-300 md:mb-0 mb-2">Management Burden</div>
<div className="flex items-start gap-3 text-lg text-zinc-200">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
                                Dedicated HR support + Slack integration
                            </div>
<div className="flex items-start gap-3 text-lg text-zinc-600 mt-2 md:mt-0">
<i className="w-5 h-5 shrink-0 mt-1" data-lucide="x" strokeWidth="1.5"></i>
                                You manage everything yourself
                            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_2fr] gap-4 p-6 md:p-8 hover:bg-white/[0.02] transition-colors">
<div className="text-lg font-medium text-zinc-300 md:mb-0 mb-2">Flexibility</div>
<div className="flex items-start gap-3 text-lg text-zinc-200">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
                                Scale up or down as needed, no lock-in
                            </div>
<div className="flex items-start gap-3 text-lg text-zinc-600 mt-2 md:mt-0">
<i className="w-5 h-5 shrink-0 mt-1" data-lucide="x" strokeWidth="1.5"></i>
                                Fixed headcount, hard to scale
                            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_2fr] gap-4 p-6 md:p-8 hover:bg-white/[0.02] transition-colors">
<div className="text-lg font-medium text-zinc-300 md:mb-0 mb-2">Risk</div>
<div className="flex items-start gap-3 text-lg text-zinc-200">
<i className="w-5 h-5 text-cyan-400 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
                                Replacement guarantee ensures success
                            </div>
<div className="flex items-start gap-3 text-lg text-zinc-600 mt-2 md:mt-0">
<i className="w-5 h-5 shrink-0 mt-1" data-lucide="x" strokeWidth="1.5"></i>
                                If they fail, you’re back to square one
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-white/5 overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-[100%] pointer-events-none translate-y-1/2"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-12">Trusted by owners like you</h2>

<div className="w-full aspect-video bg-[#0a0a0a] border border-white/10 rounded-2xl mb-14 flex items-center justify-center relative group overflow-hidden ring-1 ring-white/5 shadow-2xl">
<div className="absolute inset-0 bg-zinc-900/50 mix-blend-overlay"></div>
<button className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-300">
<i className="w-6 h-6 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</button>

<div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-transparent opacity-50"></div>
</div>
<a className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-b from-cyan-400 to-cyan-600 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-cyan-500 transition-all active:scale-95 text-lg shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)]" href="#">
                    Start Your Journey
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>
</main>

<footer className="py-8 text-center text-sm text-zinc-600 border-t border-white/5 relative z-10 bg-black">
<p>© Staffify. All rights reserved.</p>
</footer>


    </>
  );
}

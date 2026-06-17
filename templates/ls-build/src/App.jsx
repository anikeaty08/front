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



        // Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
                
                // Optional: Change icon on toggle
                const icon = mobileBtn.querySelector('iconify-icon');
                if (mobileMenu.classList.contains('hidden')) {
                    icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                } else {
                    icon.setAttribute('icon', 'solar:close-circle-linear');
                }
            });
        }

        // Scroll Reveal
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            var windowHeight = window.innerHeight;
            var elementVisible = 50;

            for (var i = 0; i < reveals.length; i++) {
                var elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal(); // Trigger on load
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-75" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>
<main className="md:py-12 flex flex-col min-h-screen z-10 w-full max-w-6xl pt-8 pr-6 pb-8 pl-6 relative">

<nav className="flex relative reveal active select-none sticky z-50 bg-black/20 border-white/5 border rounded-xl mb-24 pt-3 pr-4 pb-3 pl-4 top-6 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-indigo-500/10"></div>
<span className="font-mono font-bold text-xs text-zinc-100">E</span>
</div>
<span className="text-xs font-semibold text-zinc-200 tracking-tight">Enterprise Remote</span>
</a>

<div className="hidden md:flex gap-4 lg:gap-6 items-center">
<a className="text-[11px] cursor-default font-medium text-white bg-white/5 rounded pt-1 pr-2 pb-1 pl-2" href="index.html">Operations</a>
<a className="text-[11px] hover:text-white transition-colors font-medium text-zinc-400 px-2 py-1 hover:bg-white/5 rounded" href="#forecast">Comparison</a>
<a className="text-[11px] hover:text-white transition-colors font-medium text-zinc-400 px-2 py-1 hover:bg-white/5 rounded" href="#about">About</a>
<a className="text-[11px] hover:text-white transition-colors font-medium text-zinc-400 px-2 py-1 hover:bg-white/5 rounded" href="forecast.html">Forecast</a>
</div>
</div>
<div className="flex items-center gap-3">

<button className="md:hidden flex items-center justify-center w-8 h-8 rounded hover:bg-white/5 text-zinc-400 hover:text-zinc-100 transition-colors" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="18"></iconify-icon>
</button>
</div>

<div className="absolute top-full right-0 left-0 mt-2 bg-[#09090b]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hidden flex-col shadow-2xl z-50" id="mobile-menu">
<div className="flex flex-col p-2 gap-1">
<a className="px-4 py-3 text-sm font-medium text-white bg-white/5 rounded-lg transition-colors" href="index.html">Operations</a>
<a className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#forecast">Comparison</a>
<a className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#about">About</a>
<a className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="forecast.html">Forecast</a>
</div>
</div>
</nav>

<header className="reveal md:pt-20 active mb-32 pt-12 text-center flex flex-col items-center">
<div className="max-w-3xl">
<h1 className="md:text-7xl leading-tight reveal active hover:scale-[1.01] transition-transform duration-500 text-5xl font-medium text-zinc-100 tracking-tight mb-8">Scale your operations with <span className="text-indigo-400">programmable efficiency</span>.</h1>
<p className="md:text-lg leading-relaxed text-base text-zinc-400 max-w-2xl mx-auto mb-10">Integrated remote infrastructure for consistent results. You control quality, cost, and scale; we handle the complexity.</p>
<div className="flex justify-center mb-6">
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-xs font-semibold text-zinc-300 bg-white/5 border-white/10 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="#forecast">
<iconify-icon icon="solar:chart-2-linear" width="14"></iconify-icon>
                        View Benchmarks
                    </a>
</div>
</div>
</header>

<section className="mb-32 reveal active">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card flex gap-4 rounded-xl pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4 items-start">
<div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-zinc-200 mb-1">Teams scaling outbound sales</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Rapidly deploy agent seats without the management overhead.</p>
</div>
</div>

<div className="glass-card flex gap-4 rounded-xl pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4 items-start">
<div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:case-linear" width="16"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-zinc-200 mb-1">Operations leaders</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Standardize execution workflows across distributed teams.</p>
</div>
</div>

<div className="glass-card flex gap-4 rounded-xl pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4 items-start">
<div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:settings-linear" width="16"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-zinc-200 mb-1">Organizations needing control</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Predictable OpEx structures with full data visibility.</p>
</div>
</div>
</div>
</section>

<section className="reveal mb-32">
<div className="flex items-center gap-2 mb-12">
<div className="h-px bg-zinc-800 w-12"></div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Workflow Loop</span>
</div>
<div className="relative grid grid-cols-1 gap-6 max-w-3xl mx-auto">

<div className="absolute left-[28px] top-6 bottom-6 w-px bg-zinc-800 hidden md:block z-0"></div>

<div className="relative flex gap-6 md:gap-10 group reveal">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 relative z-10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:database-linear" width="20"></iconify-icon>
</div>
<div className="pt-2 pb-8 border-b border-white/5 w-full">
<div className="text-[10px] font-mono text-indigo-500 mb-1">01</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Lead Acquisition</h3>
<p className="text-sm text-zinc-500">Leads are purchased, validated, and prepared for outreach.</p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10 group reveal">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 relative z-10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:transfer-vertical-linear" width="20"></iconify-icon>
</div>
<div className="pt-2 pb-8 border-b border-white/5 w-full">
<div className="text-[10px] font-mono text-indigo-500 mb-1">02</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Lead Import &amp; Routing</h3>
<p className="text-sm text-zinc-500">Records are loaded into the operating system and assigned based on rules.</p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10 group reveal">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 relative z-10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<div className="pt-2 pb-8 border-b border-white/5 w-full">
<div className="text-[10px] font-mono text-indigo-500 mb-1">03</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Outreach Automation</h3>
<p className="text-sm text-zinc-500">SMS and email sequences run automatically to confirm intent and preference.</p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10 group reveal">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 relative z-10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:calendar-check-linear" width="20"></iconify-icon>
</div>
<div className="pt-2 pb-8 border-b border-white/5 w-full">
<div className="text-[10px] font-mono text-indigo-500 mb-1">04</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Appointment &amp; Handling</h3>
<p className="text-sm text-zinc-500">Responses are captured; appointments are scheduled; call-ready leads are prioritized.</p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10 group reveal">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 relative z-10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div className="pt-2 pb-8 border-b border-white/5 w-full">
<div className="text-[10px] font-mono text-indigo-500 mb-1">05</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Agent Execution</h3>
<p className="text-sm text-zinc-500">Agents call, log outcomes, and update statuses in real time.</p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10 group reveal">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 relative z-10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div className="pt-2 w-full">
<div className="text-[10px] font-mono text-indigo-500 mb-1">06</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">QA; Reporting; Optimization</h3>
<p className="text-sm text-zinc-500">Our admin team reviews calls, generates daily reports, and improves conversion.</p>
</div>
</div>
</div>
</section>

<section className="reveal mb-32 pt-16" id="forecast">
<div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">

<div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/10 blur-[80px] -mr-16 -mt-16 rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-xl">
<div className="flex items-center gap-2 mb-4 text-indigo-400">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="20"></iconify-icon>
<span className="text-xs font-mono font-medium uppercase tracking-widest">Next Step</span>
</div>
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight mb-4">Model your financial outcome</h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-8">
                        Transitioning from theory to reality. Input your current metrics to generate a custom P&amp;L analysis and see the exact delta between in-house vs. Enterprise Remote.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 hover:bg-white transition-all hover:scale-[1.02] text-sm font-semibold text-zinc-900 bg-zinc-100 rounded-lg pt-3 pr-6 pb-3 pl-6" href="/overview-2">
                            Launch Forecast Engine
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative z-10 hidden md:flex items-center justify-center">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-indigo-400" icon="solar:chart-square-linear" width="32"></iconify-icon>
</div>

<div className="absolute -left-12 top-1/2 w-12 h-px bg-gradient-to-r from-transparent to-white/20"></div>
<div className="absolute -right-12 top-1/2 w-12 h-px bg-gradient-to-l from-transparent to-white/20"></div>
</div>
</div>
</section>

<section className="reveal mb-20 text-center py-24 border-t border-white/5">
<h2 className="text-3xl font-medium text-zinc-100 mb-6 tracking-tight">Ready to modernize?</h2>
<div className="flex justify-center gap-4">
<a className="bg-zinc-100 hover:bg-white text-zinc-900 px-6 py-3 rounded-lg text-sm font-semibold transition-colors" href="#">Get Started</a>
<a className="px-6 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors" href="#">Contact Sales</a>
</div>
</section>
</main>


    </>
  );
}

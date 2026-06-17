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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 bg-noise z-0"></div>

<nav className="relative z-50 w-full px-6 py-6 flex items-center justify-center border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
<a className="text-lg font-semibold tracking-tight text-white uppercase" href="#">MAC CONSULTING</a>
</nav>

<section className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32 px-6 flex flex-col items-center text-center glow-bg">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Your leads are being followed up in 8 seconds. <span className="text-slate-400">Not 8 hours.</span>
</h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mb-10 font-normal leading-relaxed">
                The AI pipeline that responds, qualifies, and books calls for fitness coaches — while you're still on the last one.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="group relative inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-3 px-8 rounded-full transition-all duration-200 ring-1 ring-transparent hover:ring-blue-500/50" href="#video-section">
                    Watch It Work
                    <iconify-icon className="text-lg group-hover:translate-y-0.5 transition-transform" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center bg-transparent hover:bg-slate-900 text-white text-sm font-medium py-3 px-8 rounded-full border border-slate-800 hover:border-slate-700 transition-all duration-200" href="https://tally.so/r/jaQobQ" rel="noopener noreferrer" target="_blank">
                    Book a Call
                </a>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#020617]">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-12 text-center">Sound familiar?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-4 hover:border-slate-700/80 transition-colors">
<div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700/50">
<iconify-icon className="text-slate-400 text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-slate-300">
                        You're manually DMing leads who filled out your form 3 days ago
                    </p>
</div>

<div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-4 hover:border-slate-700/80 transition-colors">
<div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700/50">
<iconify-icon className="text-slate-400 text-xl" icon="solar:ghost-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-slate-300">
                        Half your leads ghost because someone else responded faster
                    </p>
</div>

<div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-4 hover:border-slate-700/80 transition-colors">
<div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700/50">
<iconify-icon className="text-slate-400 text-xl" icon="solar:calculator-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-slate-300">
                        You're doing $10/hour follow-up work instead of coaching
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#020617]" id="video-section">
<div className="max-w-5xl mx-auto flex flex-col items-center">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">See the pipeline run live</h2>
<p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
                    Watch a real lead come in and get followed up automatically in under 10 seconds — no VA, no manual work.
                </p>
</div>

<div className="w-full aspect-video bg-slate-900/60 border border-slate-800 rounded-2xl md:rounded-[32px] flex items-center justify-center relative overflow-hidden group cursor-pointer ring-1 ring-white/5 hover:ring-blue-500/30 transition-all duration-500 shadow-2xl shadow-black/50">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex flex-col items-center gap-4 relative z-10 transform group-hover:scale-105 transition-transform duration-500">
<div className="w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 backdrop-blur-md border border-blue-500/20">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-tight text-slate-500 group-hover:text-slate-300 transition-colors">INSERT LOOM URL HERE</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#020617]">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-16 text-center">Three things happen the moment a lead comes in</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center gap-6 group">
<div className="w-12 h-12 rounded-full bg-[#020617] border border-slate-800 flex items-center justify-center text-sm font-medium tracking-tight text-slate-400 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        1
                    </div>
<p className="text-sm leading-relaxed text-slate-300 max-w-xs">
                        Lead submits your form or DMs you — pipeline triggers instantly
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center gap-6 group">
<div className="w-12 h-12 rounded-full bg-[#020617] border border-slate-800 flex items-center justify-center text-sm font-medium tracking-tight text-slate-400 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        2
                    </div>
<p className="text-sm leading-relaxed text-slate-300 max-w-xs">
                        AI sends a personalized follow-up within 8 seconds, 24/7
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center gap-6 group">
<div className="w-12 h-12 rounded-full bg-[#020617] border border-slate-800 flex items-center justify-center text-sm font-medium tracking-tight text-slate-400 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        3
                    </div>
<p className="text-sm leading-relaxed text-slate-300 max-w-xs">
                        Qualified leads get booked directly into your calendar
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#020617]">
<div className="max-w-3xl mx-auto bg-slate-900/20 border border-slate-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none"></div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-8">Built for coaches who are done doing this manually</h2>
<ul className="flex flex-col gap-5 relative z-10">
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-500 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm md:text-base text-slate-300">Instant AI follow-up via DM, email, or SMS</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-500 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm md:text-base text-slate-300">Lead qualification without lifting a finger</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-500 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm md:text-base text-slate-300">CRM auto-update on every interaction</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-500 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm md:text-base text-slate-300">Booking link sent automatically to warm leads</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-500 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm md:text-base text-slate-300">Full setup and onboarding included</span>
</li>
</ul>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#020617]">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-slate-400 mb-2">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
                    About Mac Consulting
                </div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Built by experts actually in the trenches</h2>
<p className="text-sm md:text-base leading-relaxed text-slate-400">
                    Mac Consulting is an AI growth consultancy that builds these systems specifically for fitness coaches. Not a generic corporate agency. Not a template reseller. A real system, built and maintained by specialists who know your space.
                </p>
</div>
<div className="flex-1 w-full">

<div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 relative">
<iconify-icon className="text-slate-700 text-4xl absolute top-6 left-6 opacity-50" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<div className="relative z-10 mt-6">
<div className="flex gap-1 mb-4 text-blue-500">
<iconify-icon className="text-sm" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed">
                            "Before working with Mac Consulting, I was losing out on high-ticket clients simply because I couldn't reply fast enough while training. Now, the calendar fills itself."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
<iconify-icon className="text-slate-500" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Fitness Coach</p>
<p className="text-xs text-slate-500">Online Consulting</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 border-t border-white/5 bg-[#020617] overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to stop losing leads to slow follow-up?</h2>
<p className="text-base text-slate-400 mb-10">
                Limited spots. Setup takes less than a week.
            </p>
<a className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white text-base font-medium py-4 px-10 rounded-full transition-all duration-200 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]" href="https://tally.so/r/jaQobQ" rel="noopener noreferrer" target="_blank">
                Book a Free Strategy Call
            </a>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 bg-[#020617] py-10 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-slate-500">
<span className="font-semibold tracking-tight text-slate-400 uppercase">MAC CONSULTING</span>
<span className="hidden md:inline text-slate-700">|</span>
<a className="hover:text-slate-300 transition-colors" href="mailto:hello@example.com">hello@example.com</a>
</div>
<div className="flex items-center gap-4">
<a aria-label="Twitter/X" className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}

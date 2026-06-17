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



        document.addEventListener("DOMContentLoaded", () => {
            const osSection = document.getElementById('system-os-section');
            const osTexts = document.querySelectorAll('.os-text');
            const silos = document.querySelectorAll('.os-silo');
            const siloTexts = document.querySelectorAll('.os-silo-text');
            const gaps = document.querySelectorAll('.os-gap');
            const foundation = document.getElementById('os-foundation');

            if(!osSection) return;

            window.addEventListener('scroll', () => {
                const rect = osSection.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                const scrollY = -rect.top;
                const maxScroll = rect.height - windowHeight;
                let progress = scrollY / maxScroll;
                
                progress = Math.max(0, Math.min(1, progress));

                const stateCount = 6;
                let currentState = Math.floor(progress * stateCount);
                if (currentState === stateCount) currentState = stateCount - 1;

                osTexts.forEach((txt, index) => {
                    if (index === currentState) {
                        txt.style.opacity = '1';
                        txt.style.transform = 'translateY(0)';
                        txt.style.pointerEvents = 'auto';
                    } else {
                        txt.style.opacity = '0';
                        txt.style.transform = index < currentState ? 'translateY(-20px)' : 'translateY(20px)';
                        txt.style.pointerEvents = 'none';
                    }
                });

                gaps.forEach((gap, index) => {
                    if (currentState > index) {
                        gap.classList.remove('w-0', 'opacity-0', 'scale-50');
                        gap.classList.add('w-16', 'md:w-24', 'opacity-100', 'scale-100');
                    } else {
                        gap.classList.add('w-0', 'opacity-0', 'scale-50');
                        gap.classList.remove('w-16', 'md:w-24', 'opacity-100', 'scale-100');
                    }
                });

                if (currentState >= 4) {
                    silos.forEach(silo => {
                        silo.classList.remove('bg-zinc-900', 'border-zinc-800');
                        silo.classList.add('bg-zinc-800', 'border-orange-500/30');
                    });
                    siloTexts.forEach(t => t.classList.replace('text-zinc-500', 'text-white'));
                    
                    foundation.classList.remove('opacity-0', 'translate-y-12');
                    foundation.classList.add('opacity-100', 'translate-y-0');
                } else {
                    silos.forEach(silo => {
                        silo.classList.add('bg-zinc-900', 'border-zinc-800');
                        silo.classList.remove('bg-zinc-800', 'border-orange-500/30');
                    });
                    siloTexts.forEach(t => t.classList.replace('text-white', 'text-zinc-500'));
                    
                    foundation.classList.add('opacity-0', 'translate-y-12');
                    foundation.classList.remove('opacity-100', 'translate-y-0');
                }
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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-xl font-medium tracking-tighter text-zinc-900">TIDYHIRE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-zinc-900 transition-colors" href="#models">Two Models</a>
<a className="hover:text-zinc-900 transition-colors" href="#proof">Proof</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-zinc-900 text-white text-sm px-4 py-2 rounded-full shadow-sm hover:bg-zinc-800 transition-all active:scale-95" href="#contact">
                Talk to Us
            </a>
</div>
</nav>

<section className="relative pt-40 pb-20 overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">

<div className="absolute inset-0 w-full h-full max-w-7xl mx-auto pointer-events-none">

<div className="hidden lg:flex absolute left-[5%] top-[15%] rotate-[-12deg] w-40 h-56 bg-orange-400 rounded-2xl shadow-xl p-5 flex-col gap-3 float-slow border border-orange-300">
<div className="w-10 h-10 rounded-full bg-orange-300/50"></div>
<div className="h-3 bg-orange-300/50 rounded w-full mt-2"></div>
<div className="h-3 bg-orange-300/50 rounded w-4/5"></div>
<div className="h-3 bg-orange-300/50 rounded w-2/3"></div>
</div>

<div className="hidden md:flex absolute left-[20%] top-[40%] rotate-[-5deg] w-48 h-20 bg-zinc-900 rounded-2xl shadow-xl p-4 items-center gap-4 float-medium border border-zinc-800">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon height="20" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1 space-y-2">
<div className="h-2 bg-zinc-800 rounded w-full"></div>
<div className="h-2 bg-zinc-800 rounded w-3/4"></div>
</div>
</div>

<div className="hidden lg:flex absolute right-[15%] top-[10%] rotate-[12deg] w-40 h-20 bg-emerald-500 rounded-full shadow-xl border-[6px] border-white p-2 items-center float-fast">
<div className="w-14 h-14 bg-white rounded-full shadow-sm ml-auto flex items-center justify-center text-emerald-500">
<iconify-icon height="28" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
</div>

<div className="hidden md:flex absolute right-[5%] top-[35%] rotate-[8deg] w-44 h-44 bg-blue-500 rounded-3xl shadow-xl p-6 flex-col items-center justify-center float-slow border-4 border-white text-white">
<iconify-icon className="mb-4" height="64" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
<div className="h-2 bg-blue-400 rounded w-2/3"></div>
</div>
</div>

<div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-6">
<span className="text-orange-600 text-xs font-medium tracking-tight uppercase bg-orange-50 border border-orange-100 px-3 py-1 rounded-full mb-8">
                The Hiring OS
            </span>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-zinc-900 leading-[0.9] mb-8">
                Hiring that lands.<br/>
<span className="text-orange-500">Every time.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed mb-10">
                TidyHire is the operating system forward-moving companies run their hiring on. Every stage of the funnel, one system, one outcome.
            </p>
<a className="group relative inline-flex items-center gap-2 bg-zinc-900 text-white text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all" href="#contact">
<span>Talk to the Founders</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>

<div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-24">
<p className="text-sm text-zinc-400 mb-8 tracking-tight">Augmented and Autonomous companies across India, UAE, and MENA.</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale mb-20 text-zinc-900">
<span className="font-medium text-2xl tracking-tighter">AM</span>
<span className="font-medium text-2xl tracking-tighter">KTK</span>
<span className="font-medium text-2xl tracking-tighter">TM</span>
<span className="font-medium text-2xl tracking-tighter">L&amp;T</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
<div className="space-y-1">
<p className="text-3xl font-medium tracking-tight text-zinc-900">48 Hrs</p>
<p className="text-sm text-zinc-500">Live System Setup</p>
</div>
<div className="space-y-1 border-y md:border-y-0 md:border-x border-zinc-100 py-6 md:py-0">
<p className="text-3xl font-medium tracking-tight text-zinc-900">85%</p>
<p className="text-sm text-zinc-500">Joining Ratio</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-medium tracking-tight text-orange-500">50%</p>
<p className="text-sm text-zinc-500">Cost per Hire</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative border-t border-zinc-100" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<span className="text-orange-500 text-sm tracking-tight uppercase mb-4 block">A Different Way</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 max-w-2xl mb-16 leading-tight">
                What if hiring worked the way everything else in your business does?
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-zinc-50 border border-zinc-100/80 p-8 rounded-2xl transition-all hover:bg-zinc-100/50">
<div className="w-12 h-12 bg-white shadow-sm border border-zinc-200 rounded-xl flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon height="24" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Predictable.</h3>
<p className="text-base text-zinc-500 leading-relaxed">You know what's coming and when. No more guessing games with your pipeline.</p>
</div>

<div className="bg-zinc-50 border border-zinc-100/80 p-8 rounded-2xl transition-all hover:bg-zinc-100/50">
<div className="w-12 h-12 bg-white shadow-sm border border-zinc-200 rounded-xl flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Accountable.</h3>
<p className="text-base text-zinc-500 leading-relaxed">Every stage owned, every outcome tracked. A process with full visibility.</p>
</div>

<div className="bg-zinc-50 border border-zinc-100/80 p-8 rounded-2xl transition-all hover:bg-zinc-100/50">
<div className="w-12 h-12 bg-orange-500 shadow-sm rounded-xl flex items-center justify-center mb-6 text-white">
<iconify-icon height="24" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Systematic.</h3>
<p className="text-base text-zinc-500 leading-relaxed">Gets sharper with every hire, not slower. Built to scale effortlessly.</p>
</div>
</div>
<div className="mt-20 text-center">
<p className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900">Hiring has never been one system. <span className="text-zinc-400">Until now.</span></p>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] text-white relative min-h-[400vh]" id="system-os-section">
<div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6 w-full pt-10">
<span className="text-orange-500 text-sm tracking-tight uppercase mb-4 block">The Operating System</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-16">
                    One system. Every stage.<br/>Nothing handed off.
                </h2>
</div>
<div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16 items-center flex-1 pb-20">

<div className="lg:w-1/3 relative h-[250px] w-full flex items-center">

<div className="os-text absolute w-full transition-all duration-700 ease-in-out opacity-100 translate-y-0">
<p className="text-2xl font-medium tracking-tight text-zinc-400 leading-snug">
                            Right now, your hiring has all the pieces.<br/>
                            Just not in the right order.<br/>
                            And never in one place.
                        </p>
</div>

<div className="os-text absolute w-full transition-all duration-700 ease-in-out opacity-0 translate-y-8 pointer-events-none">
<p className="text-2xl font-medium tracking-tight text-white leading-snug">
                            The right brief finds the right people.
                        </p>
</div>

<div className="os-text absolute w-full transition-all duration-700 ease-in-out opacity-0 translate-y-8 pointer-events-none">
<p className="text-2xl font-medium tracking-tight text-white leading-snug">
                            Every conversation becomes a data point.<br/>
                            Not instinct. <span className="text-orange-500">Evidence.</span>
</p>
</div>

<div className="os-text absolute w-full transition-all duration-700 ease-in-out opacity-0 translate-y-8 pointer-events-none">
<p className="text-2xl font-medium tracking-tight text-white leading-snug">
                            The right person stops being a guess.<br/>
                            The system already knows.
                        </p>
</div>

<div className="os-text absolute w-full transition-all duration-700 ease-in-out opacity-0 translate-y-8 pointer-events-none">
<p className="text-2xl font-medium tracking-tight text-white leading-snug">
                            Offers go out informed.<br/>
                            Joining gets tracked.<br/>
                            Nothing falls through.
                        </p>
</div>

<div className="os-text absolute w-full transition-all duration-700 ease-in-out opacity-0 translate-y-8 pointer-events-none">
<p className="text-2xl font-medium tracking-tight text-zinc-400 leading-snug mb-6">
                            This is one system.<br/>
                            Every hire makes the next one better.
                        </p>
<p className="text-3xl font-medium tracking-tight text-white">
                            Hiring that lands.<br/>
<span className="text-orange-500">Every time.</span>
</p>
</div>
</div>

<div className="lg:w-2/3 w-full flex flex-col items-center justify-center relative min-h-[400px]">
<div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-12 relative z-10 w-full" id="silos-container">

<div className="os-silo flex-shrink-0 w-24 md:w-28 h-24 md:h-28 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 transition-all duration-700">
<span className="text-base font-medium text-zinc-500 os-silo-text transition-colors duration-700">Clarity</span>
</div>

<div className="os-gap w-0 overflow-hidden opacity-0 scale-50 transition-all duration-700 flex flex-col items-center justify-center px-2">
<div className="bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs px-3 py-1 rounded-full whitespace-nowrap mb-2 tracking-tight">Your Team</div>
</div>

<div className="os-silo flex-shrink-0 w-24 md:w-28 h-24 md:h-28 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 transition-all duration-700">
<span className="text-base font-medium text-zinc-500 os-silo-text transition-colors duration-700">Reach</span>
</div>

<div className="os-gap w-0 overflow-hidden opacity-0 scale-50 transition-all duration-700 flex flex-col items-center justify-center px-2">
<div className="bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs px-3 py-1 rounded-full whitespace-nowrap mb-2 tracking-tight">Ria</div>
</div>

<div className="os-silo flex-shrink-0 w-24 md:w-28 h-24 md:h-28 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 transition-all duration-700">
<span className="text-base font-medium text-zinc-500 os-silo-text transition-colors duration-700">Signal</span>
</div>

<div className="os-gap w-0 overflow-hidden opacity-0 scale-50 transition-all duration-700 flex flex-col items-center justify-center px-2">
<div className="bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs px-3 py-1 rounded-full whitespace-nowrap mb-2 tracking-tight">Charlie</div>
</div>

<div className="os-silo flex-shrink-0 w-24 md:w-28 h-24 md:h-28 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 transition-all duration-700">
<span className="text-base font-medium text-zinc-500 os-silo-text transition-colors duration-700">Conviction</span>
</div>

<div className="os-silo hidden lg:flex flex-shrink-0 w-28 h-28 bg-zinc-900 rounded-2xl items-center justify-center border border-zinc-800 transition-all duration-700 ml-4">
<span className="text-base font-medium text-zinc-500 os-silo-text transition-colors duration-700">Commitment</span>
</div>
</div>

<div className="w-full md:w-[110%] h-20 bg-zinc-950 rounded-2xl border border-orange-500/20 flex flex-col items-center justify-center mt-6 opacity-0 translate-y-12 transition-all duration-1000 relative overflow-hidden" id="os-foundation">
<span className="text-orange-500 font-medium text-xl tracking-tight z-10">Param</span>
<span className="text-zinc-600 text-xs z-10 mt-1 tracking-tight">The layer that holds it all.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA] relative overflow-hidden" id="models">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-orange-500 text-sm tracking-tight uppercase mb-4 block">Two Models</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
                    Same outcome. Your choice.
                </h2>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto">
                    Some companies want us to run it entirely. Others want to run it themselves. Param sits at the centre of both.
                </p>
</div>

<div className="flex justify-center mb-16">
<div className="relative bg-zinc-200/50 p-1 rounded-full flex items-center border border-zinc-200">
<input className="sr-only" id="model-toggle" type="checkbox"/>
<div className="toggle-bg absolute w-1/2 h-[calc(100%-8px)] bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out left-1"></div>
<label className="relative z-10 w-32 md:w-40 text-center py-2 text-sm font-medium cursor-pointer transition-colors duration-300 label-left select-none" htmlFor="model-toggle">
                        Augmented
                    </label>
<label className="relative z-10 w-32 md:w-40 text-center py-2 text-sm font-medium cursor-pointer transition-colors duration-300 label-right select-none" htmlFor="model-toggle">
                        Autonomous
                    </label>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-white rounded-3xl p-10 border border-zinc-200 shadow-sm relative overflow-hidden group hover:border-zinc-300 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="inline-block border border-orange-200 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs tracking-tight uppercase mb-8">For companies who want hiring handled</span>
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4 leading-tight">We run the funnel.<br/>You make the final call.</h3>
<p className="text-base text-zinc-500 leading-relaxed mb-10">
                        A dedicated team of recruiters — powered by Ria, Charlie, and Param — runs your entire hiring process end to end. From the brief to day one. You stay in the decisions that matter. We handle everything else.
                    </p>
<div className="flex items-center gap-3 mb-10 bg-zinc-50 p-4 rounded-xl border border-zinc-100">
<iconify-icon className="text-emerald-500 shrink-0" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-sm font-medium text-zinc-900 tracking-tight">Live in 48 hours. First qualified candidate by Day 5.</p>
</div>
<a className="inline-flex items-center gap-2 text-base font-medium text-zinc-900 hover:text-orange-500 transition-colors" href="#">
                        Talk to us about Augmented
                        <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>

<div className="bg-zinc-950 rounded-3xl p-10 border border-zinc-800 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-30 transition-opacity"></div>
<span className="inline-block border border-zinc-800 bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full text-xs tracking-tight uppercase mb-8">For companies who want to run it themselves</span>
<h3 className="text-3xl font-medium tracking-tight text-white mb-4 leading-tight">Your team.<br/>Our system.</h3>
<p className="text-base text-zinc-400 leading-relaxed mb-10">
                        Param gives your recruiters the operating layer they've never had. Ria screens. Charlie interviews. Your team closes. Every stage tracked, every decision informed, every hire smarter than the last.
                    </p>
<div className="flex items-center gap-3 mb-10 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
<iconify-icon className="text-orange-500 shrink-0" height="24" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-sm font-medium text-zinc-200 tracking-tight">Up and running faster than any enterprise tool you've touched.</p>
</div>
<a className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-zinc-300 transition-colors" href="#">
                        Talk to us about Autonomous
                        <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
<p className="text-center text-sm text-zinc-500 mt-12">Not sure which model fits? That's exactly what the first conversation is for.</p>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100 relative">
<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-sm text-orange-500">
<iconify-icon height="20" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="max-w-3xl mx-auto px-6 text-center">
<p className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 leading-snug mb-10">
                "Before TidyHire, we were managing hiring across 4 tools and 3 vendors. Nothing talked to each other. We'd lose candidates between screening and offers and never know why. Since running on one system, our time to fill dropped from 45 days to 14. <span className="text-zinc-500">The difference isn't the technology — it's that the process finally has accountability built into it.</span>"
            </p>
<div className="flex flex-col items-center justify-center">
<div className="w-12 h-12 bg-zinc-100 border border-zinc-200 rounded-full mb-3 flex items-center justify-center text-zinc-400">
<iconify-icon height="20" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-zinc-900">Sarah Jenkins</h4>
<p className="text-sm text-zinc-500 mb-1">Head of Talent Acquisition, TM</p>
<p className="text-xs text-zinc-400 tracking-tight uppercase">Autonomous Model</p>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA]" id="proof">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-orange-500 text-sm tracking-tight uppercase mb-4 block">Proof</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 max-w-3xl mx-auto">
                    These companies didn't fix their hiring.<br/>They replaced how it worked.
                </h2>
</div>
<div className="space-y-10">

<div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Augmented <span className="text-zinc-400 font-normal">| Recruiter + AI</span></h3>
<div className="flex flex-wrap gap-4 text-sm font-medium text-zinc-400 uppercase tracking-tight">
<span>REDPIN</span>
<span>APERAM</span>
<span>BARBARIAN</span>
<span>CUBIC</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
<p className="text-4xl font-medium tracking-tight text-zinc-900 mb-1">250</p>
<p className="text-sm text-zinc-500">Hires across 8 months</p>
</div>
<div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
<p className="text-4xl font-medium tracking-tight text-zinc-900 mb-1">50%</p>
<p className="text-sm text-zinc-500">Cost per hire vs industry</p>
</div>
<div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
<p className="text-4xl font-medium tracking-tight text-orange-500 mb-1">85%</p>
<p className="text-sm text-zinc-500">Joining ratio vs 60% avg</p>
</div>
</div>
</div>

<div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 shadow-sm">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
<h3 className="text-xl font-medium tracking-tight text-white">Autonomous <span className="text-zinc-500 font-normal">| AI Agents</span></h3>
<div className="flex flex-wrap gap-4 text-sm font-medium text-zinc-600 uppercase tracking-tight">
<span>FEUJI</span>
<span>TEAMLEASE</span>
<span>INTELLISWIFT</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
<p className="text-4xl font-medium tracking-tight text-white mb-1">36K</p>
<p className="text-sm text-zinc-400">Interviews conducted by AI</p>
</div>
<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
<p className="text-4xl font-medium tracking-tight text-white mb-1">63.8%</p>
<p className="text-sm text-zinc-400">Full interview completion rate</p>
</div>
<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-orange-500/5 mix-blend-overlay"></div>
<p className="text-4xl font-medium tracking-tight text-orange-400 mb-1 relative z-10">10 Days</p>
<p className="text-sm text-zinc-400 relative z-10">To fill vs 45–60 industry avg</p>
</div>
</div>
</div>
</div>
<p className="text-center text-lg text-zinc-900 font-medium tracking-tight mt-16">This is what hiring looks like on one system.</p>
</div>
</section>

<section className="py-32 bg-white border-t border-zinc-100">
<div className="max-w-4xl mx-auto px-6">
<span className="text-orange-500 text-sm tracking-tight uppercase mb-4 block text-center">Who This Is For</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 text-center mb-8 leading-tight">
                Built for companies where hiring is a business decision, not an admin function.
            </h2>
<p className="text-lg text-zinc-500 text-center max-w-2xl mx-auto mb-16">
                We work with mid-size and enterprise companies that hold talent acquisition to the same standard as every other operation. Where a slow hire has a real cost. And a wrong hire has a bigger one.
            </p>
<div className="grid grid-cols-1 gap-4">
<div className="flex items-start gap-5 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
<div className="text-sm font-medium text-zinc-400 mt-0.5">01</div>
<p className="text-base text-zinc-700 leading-relaxed">
                        You're the kind of company where the brief matters — because you know that getting it wrong upstream costs you downstream.
                    </p>
</div>
<div className="flex items-start gap-5 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
<div className="text-sm font-medium text-zinc-400 mt-0.5">02</div>
<p className="text-base text-zinc-700 leading-relaxed">
                        You've tried tools. You've tried agencies. You know the problem isn't effort. It's architecture.
                    </p>
</div>
<div className="flex items-start gap-5 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
<div className="text-sm font-medium text-orange-500 mt-0.5">03</div>
<p className="text-base text-zinc-900 font-medium leading-relaxed">
                        You're not looking for a vendor. You're looking for a system you can run on.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 text-center relative overflow-hidden" id="contact">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<span className="text-orange-500 text-sm tracking-tight uppercase mb-6 block">Let's Talk</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8 leading-tight">
                Hiring has been broken for a long time. <br/>
<span className="text-zinc-600">We're fixing it.</span>
</h2>
<p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed mb-12">
                We started TidyHire because we watched great companies lose great people to slow, broken, unaccountable processes. We built the system we wished existed. And we talk to every company ourselves.
            </p>
<button className="group relative inline-flex items-center gap-2 bg-white text-zinc-900 text-base font-medium px-8 py-4 rounded-full shadow-lg hover:bg-zinc-100 transition-all mb-6">
<span>Talk to the Founders</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<p className="text-sm text-zinc-600">No pitch deck. No sales rep. Just a conversation.</p>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-600 py-8 border-t border-zinc-900 text-center">
<div className="flex items-center justify-center gap-2 mb-3">
<span className="text-base font-medium tracking-tighter text-zinc-400">TIDYHIRE</span>
</div>
<p className="text-xs">© 2024 TidyHire. All rights reserved.</p>
</footer>



    </>
  );
}

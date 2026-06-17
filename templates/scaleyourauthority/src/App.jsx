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
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 glass-panel transition-all duration-300">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-xl font-semibold tracking-tight text-gray-900 group" href="#">
                    ClonYou<span className="text-[#00bed6] inline-block transition-transform group-hover:-rotate-12">™</span>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors hover:scale-105 duration-200" href="#problem">The Problem</a>
<a className="hover:text-gray-900 transition-colors hover:scale-105 duration-200" href="#solutions">Solutions</a>
<a className="hover:text-gray-900 transition-colors hover:scale-105 duration-200" href="#system">The System</a>
<a className="px-5 py-2 rounded-full bg-black text-white hover:bg-[#00bed6] transition-all duration-300 hover:shadow-lg hover:shadow-[#00bed6]/20 text-xs font-semibold transform hover:-translate-y-0.5" href="#cta">
                    Book a call
                </a>
</div>
<button className="md:hidden text-gray-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-20"></div>
<div className="absolute top-0 -left-4 w-72 h-72 bg-[#00bed6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10"></div>
<div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 -z-10"></div>
<div className="z-10 text-center max-w-screen-xl mr-auto ml-auto relative cursor-pointer" onclick="window.location.href='https://cal.com/davidlobeira/clonyou-strategic-call'" role="button">
<div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-gray-200 mb-8 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow cursor-default">
<span className="w-2 h-2 rounded-full bg-[#00bed6] animate-pulse"></span>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Scalable Authority System</span>
</div>
<h1 className="reveal-element delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
                Scale your authority <br className="hidden md:block"/>
<span className="text-gray-400">without recording.</span>
</h1>
<p className="reveal-element delay-200 text-xl md:text-2xl text-gray-500 font-normal max-w-2xl mx-auto mb-4 tracking-tight">
                AI avatar and cloning systems. No burnout. No time dependency.
            </p>
<p className="reveal-element delay-300 text-sm md:text-base text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
                At ClonYou™, we design content systems with hyper-realistic clones and strategic avatars that sell while you operate the business.
            </p>
<div className="reveal-element delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="btn-shine hover:bg-[#00aac0] transition-all shadow-[#00bed6]/20 sm:w-auto transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00bed6]/40 text-sm font-semibold text-white bg-[#00bed6] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="/#cta">
                    Book strategic call
                </a>
<a className="px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-all w-full sm:w-auto shadow-sm hover:shadow-md transform hover:-translate-y-1" href="#system">
                    See how it works
                </a>
</div>
</div>
</header>

<section className="py-24 border-b border-gray-100 bg-white">
<div className="max-w-screen-xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32 mb-24 max-w-5xl mx-auto">

<div className="reveal-element">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8 pl-3 border-l-2 border-gray-200">Before</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-500">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
<span className="text-sm font-medium leading-relaxed">Content depends on the founder</span>
</li>
<li className="flex items-start gap-3 text-gray-500">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
<span className="text-sm font-medium leading-relaxed">Inconsistent posting</span>
</li>
<li className="flex items-start gap-3 text-gray-500">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
<span className="text-sm font-medium leading-relaxed">No structured funnel</span>
</li>
<li className="flex items-start gap-3 text-gray-500">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
<span className="text-sm font-medium leading-relaxed">Authority resets every week</span>
</li>
</ul>
</div>

<div className="reveal-element delay-100">
<h3 className="text-xs font-semibold text-[#00bed6] uppercase tracking-widest mb-8 pl-3 border-l-2 border-[#00bed6]">After</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-900">
<iconify-icon className="text-[#00bed6] mt-0.5 shrink-0" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm font-medium leading-relaxed">One strategic long-form source per week</span>
</li>
<li className="flex items-start gap-3 text-gray-900">
<iconify-icon className="text-[#00bed6] mt-0.5 shrink-0" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm font-medium leading-relaxed">System that multiplies content automatically</span>
</li>
<li className="flex items-start gap-3 text-gray-900">
<iconify-icon className="text-[#00bed6] mt-0.5 shrink-0" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm font-medium leading-relaxed">Structured content funnel</span>
</li>
<li className="flex items-start gap-3 text-gray-900">
<iconify-icon className="text-[#00bed6] mt-0.5 shrink-0" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm font-medium leading-relaxed">Compounding authority</span>
</li>
</ul>
</div>
</div>

<div className="reveal-element delay-200 flex flex-col items-center max-w-sm mx-auto">
<div className="w-full text-center px-6 py-5 bg-white border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-sm font-semibold text-gray-900 tracking-tight">
                    Strategic Long-form Thinking
                </div>
<div className="h-8 w-px bg-gray-200 my-1 relative flex items-center justify-center">
<iconify-icon className="text-gray-300 bg-white z-10" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="w-full text-center px-6 py-5 bg-white border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-sm font-semibold text-gray-900 tracking-tight">
                    Content Distribution System
                </div>
<div className="h-8 w-px bg-gray-200 my-1 relative flex items-center justify-center">
<iconify-icon className="text-gray-300 bg-white z-10" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="w-full text-center px-6 py-5 bg-[#f0fdfd] border border-[#00bed6]/20 rounded-xl shadow-[0_4px_20px_rgba(0,190,214,0.08)] text-sm font-semibold text-[#008ba3] tracking-tight">
                    Scalable Authority + Inbound Leads
                </div>
</div>
</div>
</section>

<section className="bg-gray-50/50 pt-24 pb-24 relative" id="problem">
<div className="max-w-screen-xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mb-16 reveal-element">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    If your content depends on you showing up…
                </h2>
<p className="text-xl text-gray-500 font-medium">
                    You don't have a system. You have a limitation.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-element delay-100 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
<div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Lack of Time</h3>
<p className="text-sm text-gray-500 leading-relaxed">Your operational schedule kills your creative consistency. As the business grows, your recording time disappears.</p>
</div>

<div className="reveal-element delay-200 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
<div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Blocked Scalability</h3>
<p className="text-sm text-gray-500 leading-relaxed">You cannot multiply your physical presence. Your personal brand has a glass ceiling: yourself.</p>
</div>

<div className="reveal-element delay-300 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
<div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 text-gray-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:battery-charge-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Fatigue</h3>
<p className="text-sm text-gray-500 leading-relaxed">The pressure to "be present" generates burnout and low-quality reactive content, instead of strategic content.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden border-gray-100 border-b pt-24 pb-24" id="solutions">
<div className="max-w-screen-xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col lg:flex-row gap-16 gap-x-16 gap-y-16 items-center">
<div className="lg:w-1/2 reveal-element">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bed6]/10 mb-6">
<span className="text-xs font-semibold text-[#00bed6] uppercase tracking-wide">Human AI Clones</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                        Hyper-realistic Cloning.
                    </h2>
<p className="text-lg text-gray-500 mb-8 leading-relaxed">
                        We create your digital clone trained with your voice, your narrative, and your positioning. It's not a generic avatar. It's your most powerful digital asset.
                    </p>
<ul className="mb-10 space-y-4">
<li className="flex items-center gap-3 text-gray-700 group cursor-default">
<iconify-icon className="text-[#00bed6] group-hover:scale-125 transition-transform" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Maintains your identity and micro-gestures</span>
</li>
<li className="flex items-center gap-3 text-gray-700 group cursor-default">
<iconify-icon className="text-[#00bed6] group-hover:scale-125 transition-transform" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Publishes daily content while you operate</span>
</li>
<li className="flex items-center gap-3 text-gray-700 group cursor-default">
<iconify-icon className="text-[#00bed6] group-hover:scale-125 transition-transform" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Scales volume without losing quality</span>
</li>
<li className="flex items-center gap-3 text-gray-700 group cursor-default">
<iconify-icon className="text-[#00bed6] group-hover:scale-125 transition-transform" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Saves up to 15 hours of recording per week</span>
</li>
</ul>
</div>
<div className="lg:w-1/2 relative reveal-element delay-200">

<div className="group relative aspect-square rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-2xl hover:shadow-[#00bed6]/20 transition-all duration-500">
<img alt="CEO Portrait" className="group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-90 w-full h-full absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-0 h-[2px] bg-[#00bed6]/80 shadow-[0_0_15px_#00bed6] animate-scan z-10 pointer-events-none"></div>

<div className="flex flex-col bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d477edbc-e968-4f8f-84dd-f90901769adb_1600w.png)] bg-cover pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl w-full max-w-xs transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 bg-[#00bed6] rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-white tracking-wide">AI VOICE SYNC: ACTIVE</span>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-[#00bed6] w-2/3 animate-[pulse_2s_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00bed6] rounded-full blur-[120px] opacity-[0.05] animate-pulse"></div>
<div className="max-w-screen-xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row-reverse gap-16 gap-x-16 gap-y-16 items-center">
<div className="lg:w-1/2 reveal-element">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 mb-6 backdrop-blur-sm border border-white/5">
<span className="text-xs font-semibold text-white uppercase tracking-wide">Brand Avatars</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        Strategic avatars for brands.
                    </h2>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        We design avatars from scratch aligned with your audience's psychology and conversion goals. Perfect for Ads and global scale.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group">
<iconify-icon className="text-[#00bed6] mb-4 group-hover:text-white transition-colors" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<h4 className="text-base font-semibold mb-2">Lead Generation</h4>
<p className="text-xs text-gray-400 group-hover:text-gray-300">24/7 capture with tireless spokespersons.</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group">
<iconify-icon className="text-[#00bed6] mb-4 group-hover:text-white transition-colors" icon="solar:global-linear" width="32"></iconify-icon>
<h4 className="text-base font-semibold mb-2">Global Markets</h4>
<p className="text-xs text-gray-400 group-hover:text-gray-300">Content in multiple languages instantly.</p>
</div>
</div>
</div>
<div className="lg:w-1/2 reveal-element delay-200">
<div className="grid grid-cols-2 gap-x-4 gap-y-4">
<img alt="Avatar 2" className="hover:opacity-100 hover:scale-[1.02] transition-all duration-500 hover:translate-y-7 bg-center opacity-80 w-full h-64 object-cover border-white/10 border rounded-2xl translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2122cef1-a16c-4a56-ab20-b6e4f4fbc3e1_800w.jpg"/><img alt="Avatar 2" className="hover:opacity-100 hover:scale-[1.02] transition-all duration-500 hover:translate-y-7 opacity-80 w-full h-64 object-cover bg-center border-white/10 border rounded-2xl translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d21f724-310b-428b-b7ec-58dc66b49599_800w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="system">
<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.4))] opacity-50"></div>
<div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
<h2 className="reveal-element text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                We don't sell avatars.
            </h2>
<p className="reveal-element delay-100 text-xl md:text-2xl text-gray-500 mb-16">
                We design scalable production systems.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="reveal-element delay-100 group p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-500 text-left hover:bg-white hover:shadow-xl hover:-translate-y-2">
<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-sm font-bold text-gray-900 mb-6 shadow-sm group-hover:bg-[#00bed6] group-hover:text-white transition-all duration-300 group-hover:scale-110">01</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Narrative Architecture</h3>
<p className="text-sm text-gray-500">We define the content pillars that position your authority without noise.</p>
</div>

<div className="reveal-element delay-200 group p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-500 text-left hover:bg-white hover:shadow-xl hover:-translate-y-2">
<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-sm font-bold text-gray-900 mb-6 shadow-sm group-hover:bg-[#00bed6] group-hover:text-white transition-all duration-300 group-hover:scale-110">02</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Automated System</h3>
<p className="text-sm text-gray-500">We configure the AI production workflow to generate video assets in minutes.</p>
</div>

<div className="reveal-element delay-300 group p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-500 text-left hover:bg-white hover:shadow-xl hover:-translate-y-2">
<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-sm font-bold text-gray-900 mb-6 shadow-sm group-hover:bg-[#00bed6] group-hover:text-white transition-all duration-300 group-hover:scale-110">03</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Ads Optimization</h3>
<p className="text-sm text-gray-500">We create infinite variations to test winning creatives in Paid Media.</p>
</div>

<div className="reveal-element delay-100 lg:delay-400 group p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-500 text-left hover:bg-white hover:shadow-xl hover:-translate-y-2">
<div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-sm font-bold text-gray-900 mb-6 shadow-sm group-hover:bg-[#00bed6] group-hover:text-white transition-all duration-300 group-hover:scale-110">04</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Operational Workflow</h3>
<p className="text-sm text-gray-500">We deliver a repeatable process. Predictable. Scalable. Professional.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200">
<div className="max-w-screen-lg mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="reveal-element">
<h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-[#00bed6]/10 text-[#00bed6] flex items-center justify-center text-sm animate-pulse">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
</span>
                        Who is this for
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:scale-[1.01]">
<iconify-icon className="text-gray-900 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div className="">
<strong className="block text-gray-900 text-sm">Digital CEOs</strong>
<span className="text-xs text-gray-500">Who value their time above all else.</span>
</div>
</li>
<li className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:scale-[1.01]">
<iconify-icon className="text-gray-900 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<strong className="block text-gray-900 text-sm">High-Ticket Infoproducers</strong>
<span className="text-xs text-gray-500">Who need omnipresence to sell.</span>
</div>
</li>
<li className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:scale-[1.01]">
<iconify-icon className="text-gray-900 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<strong className="block text-gray-900 text-sm">Established Personal Brands</strong>
<span className="text-xs text-gray-500">Looking for the next level of scale.</span>
</div>
</li>
</ul>
</div>

<div className="reveal-element delay-200">
<h3 className="text-2xl font-semibold text-gray-400 mb-8 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
</span>
                        Who is this NOT for
                    </h3>
<ul className="space-y-4 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<li className="flex items-center gap-3 p-4 border border-transparent hover:bg-red-50/50 rounded-2xl transition-colors">
<iconify-icon className="text-gray-400" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-500">Curious people without budget</span>
</li>
<li className="flex items-center gap-3 p-4 border border-transparent hover:bg-red-50/50 rounded-2xl transition-colors">
<iconify-icon className="text-gray-400" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-500">Creators without a validated business model</span>
</li>
<li className="flex items-center gap-3 p-4 border border-transparent hover:bg-red-50/50 rounded-2xl transition-colors">
<iconify-icon className="text-gray-400" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-500">Seekers of cheap "hacks"</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pr-6 pb-32 pl-6 relative" id="cta">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 -z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00bed6] rounded-full blur-[100px] opacity-10 animate-pulse -z-10"></div>
<div className="max-w-screen-md mx-auto text-center reveal-element">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                The future of your authority starts here.
            </h2>
<p className="text-lg text-gray-500 mb-10">
                Book a strategic call and we will analyze if your brand is ready to implement an AI cloning system.
            </p>
<a className="btn-shine group inline-flex items-center justify-center overflow-hidden transition-all hover:bg-[#00aac0] hover:scale-105 shadow-[#00bed6]/30 hover:shadow-[#00bed6]/50 text-base font-semibold text-white bg-[#00bed6] rounded-full pt-4 pr-8 pb-4 pl-8 relative shadow-xl" href="https://cal.com/davidlobeira/clonyou-strategic-call" target="_blank">
<span className="flex items-center gap-2 z-10 relative">Schedule call</span>
</a>
<p className="mt-6 text-xs text-gray-400">
                No commitment. Feasibility audit included.
            </p>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 hover:scale-105 transition-transform">
<span className="text-lg font-semibold text-gray-900">ClonYou<span className="text-[#00bed6]">™</span></span>
</div>
<div className="text-xs text-gray-400">
                © 2024 ClonYou Systems. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-[#0077b5] transition-colors hover:-translate-y-1 duration-300" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-[#E1306C] transition-colors hover:-translate-y-1 duration-300" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}

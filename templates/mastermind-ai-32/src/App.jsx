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



        // Initialize Icons
        lucide.createIcons();

        // Countdown Timer
        const targetDate = new Date('January 15, 2026 00:00:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) return;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            document.getElementById('days').innerText = days.toString().padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Tab Switching
        function switchTab(tab) {
            const buttons = ['sprint', 'deep', 'transform'];
            buttons.forEach(b => {
                const btn = document.getElementById(`tab-${b}`);
                if(b === tab) {
                    btn.className = "px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-white/10 text-white border border-white/10";
                } else {
                    btn.className = "px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-transparent text-neutral-500 border border-transparent hover:text-white";
                }
            });

            const content = document.getElementById('roadmap-content');
            content.style.opacity = '0';
            content.style.transform = 'translateY(5px)';
            setTimeout(() => {
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
                content.style.transition = 'all 0.4s ease';
            }, 150);
        }

        // FAQ Toggle
        function toggleFaq(button) {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(45deg)';
            } else {
                answer.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="14" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 14%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 14%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<div className="spotlight"></div>
<div className="fixed top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 bg-[#020408]/80 backdrop-blur-md border-b border-white/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-3">
<svg className="lucide lucide-link-2 text-indigo-400 w-5 h-5" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span className="text-lg font-semibold tracking-tight text-white">Mastermind AI</span>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#curriculum">Curriculum</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#experiences">Experiences</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center justify-center px-5 py-2 text-sm font-medium text-white btn-glossy rounded-lg" href="#apply">
                    Apply Now
                </a>
<button className="md:hidden text-neutral-400 hover:text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="lg:col-span-7 flex flex-col justify-center">
<div className="mb-8">
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tighter mb-6">
                        The Simplest Way To <br/>
<span className="text-indigo-400">Automate Everything.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl leading-relaxed font-light">
                        Turn your business into a self-running machine in 1–4 weeks. Master AI to cut costs, grow revenue, and move faster – without hiring another agency.
                    </p>
</div>
<div className="flex flex-wrap items-center gap-5 mb-16">
<a className="px-8 py-3.5 text-base font-medium text-white btn-glossy rounded-lg shadow-lg shadow-indigo-900/20" href="#apply">
                        Start Application
                    </a>
<a className="px-8 py-3.5 text-base font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 group" href="#features">
                        Learn More <svg className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform text-neutral-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar w-5 h-5 text-indigo-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-sm font-medium text-white">Jan 15, 2026</span>
</div>
<div className="h-4 w-px bg-white/20"></div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-5 h-5 text-indigo-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm font-medium text-white">Cyprus</span>
</div>
<div className="h-4 w-px bg-white/20"></div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-5 h-5 text-indigo-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium text-white">10 Seats</span>
</div>
</div>
</div>

<div className="lg:col-span-5 hidden lg:block relative h-[600px] w-full flex items-center justify-center">

<div className="dashboard-tilt overflow-hidden bg-[#0a0a0a]/90 w-full max-w-md border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-2xl">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">System Status: Live</div>
</div>

<div className="space-y-6">
<div className="flex items-end justify-between">
<div className="">
<div className="text-xs text-neutral-400 mb-1">Retreat Countdown</div>
<div className="text-4xl font-bold text-white tracking-tight" id="days">54</div>
<div className="text-xs text-indigo-400 mt-1">Days Remaining</div>
</div>
<div className="text-right">
<div className="text-xs text-neutral-400 mb-1">Available Spots</div>
<div className="text-2xl font-bold text-white">4<span className="text-neutral-600 text-lg">/10</span></div>
</div>
</div>

<div className="p-4 bg-black/40 rounded-lg border border-white/5">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-medium text-neutral-300">Automation Efficiency</span>
<span className="text-xs text-green-400">+124%</span>
</div>
<div className="flex items-end gap-1 h-24 w-full">
<div className="w-1/6 bg-indigo-500/20 h-[30%] rounded-sm"></div>
<div className="w-1/6 bg-indigo-500/30 h-[45%] rounded-sm"></div>
<div className="w-1/6 bg-indigo-500/40 h-[40%] rounded-sm"></div>
<div className="w-1/6 bg-indigo-500/60 h-[60%] rounded-sm"></div>
<div className="w-1/6 bg-indigo-500/80 h-[75%] rounded-sm"></div>
<div className="w-1/6 bg-indigo-500 h-[90%] rounded-sm animate-pulse"></div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
<span className="text-neutral-300">Agent Deployment</span>
</div>
<span className="text-white">Active</span>
</div>
<div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-neutral-300">Lead Processing</span>
</div>
<span className="text-white">Auto-Pilot</span>
</div>
<div className="flex items-center justify-between text-xs py-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-neutral-300">Revenue Ops</span>
</div>
<span className="text-white">Optimized</span>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none">
</div>
</div>

<div className="absolute -right-10 top-20 w-24 h-24 bg-indigo-600 rounded-full blur-[80px] opacity-40"></div>
</div>
</div>
</section>
<div className="section-divider"></div>

<section className="pt-32 pb-32 relative backdrop-blur-xl" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">Unleash unlimited potential</h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed">Prepare for a new world where technology is taking over. Master chatbots, voice agents, automation, and AI-powered content creation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
<svg className="lucide lucide-message-square-text w-6 h-6 text-indigo-400" data-lucide="message-square-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M7 11h10"></path><path d="M7 15h6"></path><path d="M7 7h8"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-3">Conversational AI</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Deploy intelligent chatbots and voice agents that qualify leads and close deals 24/7.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<svg className="lucide lucide-bot w-6 h-6 text-purple-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-3">Automation Multipliers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Clone your best processes into tireless AI workers. Scale operations without scaling headcount.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-pink-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
<svg className="lucide lucide-wand-2 w-6 h-6 text-pink-400" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-3">Infinite Content</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Generate professional videos, images, and copy on demand. Your creative output becomes unlimited.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
<svg className="lucide lucide-mic w-6 h-6 text-emerald-400" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h3 className="text-base font-semibold text-white mb-3">Human Voice AI</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Inbound and outbound phone systems that handle customer service and sales with natural conversation.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<svg className="lucide lucide-trending-up w-6 h-6 text-orange-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-3">Autopilot Marketing</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Campaigns that write themselves, test variations, and optimize spend automatically.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<svg className="lucide lucide-crosshair w-6 h-6 text-blue-400" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<h3 className="text-base font-semibold text-white mb-3">Precision Ops</h3>
<p className="text-sm text-neutral-500 leading-relaxed">AI handles data analysis, reporting, and decision support. You focus on strategy and vision.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-yellow-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
<svg className="lucide lucide-lock w-6 h-6 text-yellow-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-3">Total Ownership</h3>
<p className="text-sm text-neutral-500 leading-relaxed">No vendor lock-in. You own the code, the systems, and the knowledge. Deploy anywhere.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
<svg className="lucide lucide-clapperboard w-6 h-6 text-red-400" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</div>
<h3 className="text-base font-semibold text-white mb-3">Cinematic Proof</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Document your journey with cinematic media. Show the world what’s possible when you master AI.</p>
</div>
</div>
</div>
</section>
<div className="section-divider"></div>

<section className="bg-black/20 pt-32 pb-32 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit mb-6">
<span className="text-xs font-medium text-indigo-300 tracking-wide uppercase">Target Audience</span>
</div>
<h2 className="text-4xl font-semibold tracking-tighter text-white mb-8">Designed for builders</h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-10 font-light">
                    Entrepreneurs who want to prepare for the digital age. Founders and operators who want control, speed, and clear ROI – not theory. Teams with a live product or service who want to scale without headcount bloat.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0">
<svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Founders &amp; Operators</h4>
<p className="text-sm text-neutral-500">With a live product ready for optimization</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0">
<svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Small Teams</h4>
<p className="text-sm text-neutral-500">Ready to automate operations &amp; growth</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0">
<svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Visionaries</h4>
<p className="text-sm text-neutral-500">Businesses demanding clear, measurable ROI</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full opacity-40"></div>
<div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl group">
<div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay z-10"></div>
<img alt="Team working" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>
<div className="section-divider"></div>

<section className="pt-32 pb-32 backdrop-blur-xl" id="curriculum">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Everything you’ll learn</h2>
<p className="text-neutral-400">Master the complete AI automation stack – from agents to ops to GTM</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
<div className="text-indigo-500 font-mono text-xs mb-4">Module 01</div>
<h3 className="text-xl font-medium text-white mb-4">AI Agents &amp; GPT Apps</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-indigo-400">•</span> Tool-use, memory, routing, evals</li>
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-indigo-400">•</span> Build your own GPT app from scratch</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
<div className="text-purple-500 font-mono text-xs mb-4">Module 02</div>
<h3 className="text-xl font-medium text-white mb-4">Data &amp; RAG</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-purple-400">•</span> Docs/website/CRM ingestion</li>
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-purple-400">•</span> Vector search, reranking, citations</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
<div className="text-emerald-500 font-mono text-xs mb-4">Module 03</div>
<h3 className="text-xl font-medium text-white mb-4">Voice AI &amp; Telephony</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-emerald-400">•</span> Twilio inbound/outbound</li>
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-emerald-400">•</span> Confirmation/reschedule flows</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
<div className="text-pink-500 font-mono text-xs mb-4">Module 04</div>
<h3 className="text-xl font-medium text-white mb-4">Marketing &amp; Creative</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-pink-400">•</span> Midjourney / Leonardo banners</li>
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-pink-400">•</span> HeyGen + Kling / Pika videos</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
<div className="text-orange-500 font-mono text-xs mb-4">Module 05</div>
<h3 className="text-xl font-medium text-white mb-4">Operations &amp; Automation</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-orange-400">•</span> Cron, queues, retries</li>
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-orange-400">•</span> Webhooks, monitoring, dashboards</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
<div className="text-blue-500 font-mono text-xs mb-4">Module 06</div>
<h3 className="text-xl font-medium text-white mb-4">Build-It-Yourself Labs</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-blue-400">•</span> Daily pair-building</li>
<li className="flex items-start gap-2 text-sm text-neutral-500"><span className="text-blue-400">•</span> Ship agents, GPT app &amp; ops</li>
</ul>
</div>
</div>
</div>
</section>
<div className="section-divider"></div>

<section className="overflow-hidden pt-32 pb-32 relative backdrop-blur-xl" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Choose your journey</h2>
<p className="text-neutral-400">Select the intensity that matches your ambition</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

<div className="p-10 rounded-2xl bg-[#05050a] border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all">
<h3 className="text-lg font-semibold text-neutral-300">1-Week Sprint</h3>
<div className="text-4xl font-bold text-white mt-4 mb-2 tracking-tight">€1,500</div>
<p className="text-sm text-neutral-500 mb-8">Quick wins and a plug-and-play growth engine</p>
<a className="block w-full py-3.5 text-center text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all" href="#apply">Select Plan</a>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Immediate time savings
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Working, documented system
                        </li>
</ul>
</div>

<div className="p-10 rounded-2xl bg-[#0a0a12] border border-indigo-500/30 shadow-[0_0_60px_rgba(79,70,229,0.1)] relative transform lg:scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg border border-white/10">Recommended</div>
<h3 className="text-lg font-semibold text-white">2-Week Deep Dive</h3>
<div className="text-4xl font-bold text-white mt-4 mb-2 tracking-tight">€2,500</div>
<p className="text-sm text-neutral-400 mb-8">Broader automation coverage and stability</p>
<a className="block w-full py-3.5 text-center text-sm font-medium text-white btn-glossy rounded-lg" href="#apply">Select Plan</a>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> More iteration cycles
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Better reporting &amp; QA
                        </li>
</ul>
</div>

<div className="p-10 rounded-2xl bg-[#05050a] border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all">
<h3 className="text-lg font-semibold text-neutral-300">1-Month Transformation</h3>
<div className="text-4xl font-bold text-white mt-4 mb-2 tracking-tight">€4,000</div>
<p className="text-sm text-neutral-500 mb-8">End-to-end change and a culture shift</p>
<a className="block w-full py-3.5 text-center text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all" href="#apply">Select Plan</a>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Compounding gains
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Scalable to new markets
                        </li>
</ul>
</div>
</div>
<div className="text-center mt-16">
<p className="text-xs text-neutral-600">Flights not included. Final venue announced after confirmations.</p>
</div>
</div>
</section>
<div className="section-divider"></div>

<section className="pt-32 pb-32 backdrop-blur-xl" id="roadmap">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tighter text-white">Outcome Roadmaps</h2>
</div>

<div className="flex justify-center gap-2 mb-16">
<button className="px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-white/10 text-white border border-white/10" id="tab-sprint" onclick="switchTab('sprint')">1-Week Sprint</button>
<button className="px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-transparent text-neutral-500 border border-transparent hover:text-white" id="tab-deep" onclick="switchTab('deep')">2-Week Deep Dive</button>
<button className="px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-transparent text-neutral-500 border border-transparent hover:text-white" id="tab-transform" onclick="switchTab('transform')">1-Month Transformation</button>
</div>

<div className="relative border-l border-white/10 pl-12 ml-4 md:ml-0 space-y-16" id="roadmap-content">

<div className="relative">
<div className="absolute -left-[57px] w-7 h-7 rounded-full border-4 border-[#020408] bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
<h4 className="text-xl font-semibold text-white mb-3">Week 1 – Align &amp; Ignite</h4>
<p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">Clarity on goals and success metrics. Momentum from day one. Arrival barbecue with a private chef and a get-to-know activity. Coding tool subscriptions provided.</p>
</div>

<div className="relative">
<div className="absolute -left-[57px] w-7 h-7 rounded-full border-4 border-[#020408] bg-neutral-800"></div>
<h4 className="text-xl font-semibold text-white mb-3">Week 2 – Build &amp; Ship</h4>
<p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">Live systems that create leads, speed up responses, and remove repetitive work. Coding on the go – even during activities – to keep flow and creativity high.</p>
</div>

<div className="relative">
<div className="absolute -left-[57px] w-7 h-7 rounded-full border-4 border-[#020408] bg-neutral-800"></div>
<h4 className="text-xl font-semibold text-white mb-3">Week 3 – Optimize &amp; Scale</h4>
<p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">Lower acquisition costs, higher conversion, fewer bottlenecks. Ad-hoc group meetings to unblock anything fast.</p>
</div>

<div className="relative">
<div className="absolute -left-[57px] w-7 h-7 rounded-full border-4 border-[#020408] bg-neutral-800"></div>
<h4 className="text-xl font-semibold text-white mb-3">Week 4 – Showcase &amp; Momentum</h4>
<p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">Clean reporting, confident weekly decisions, and media assets that reflect your growth. A repeatable playbook you can extend to new offers or markets.</p>
</div>
</div>
</div>
</section>
<div className="section-divider"></div>

<section className="bg-black/20 pt-32 pb-32 backdrop-blur-xl" id="experiences">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Experiences to fuel focus</h2>
<p className="text-neutral-400">Designed to shift perspective, build courage, and create momentum</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative h-72 overflow-hidden rounded-2xl cursor-default border border-white/5">
<img alt="Climbing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 hover:opacity-70" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-semibold text-white mb-1">Rock Climbing</h3>
<p className="text-sm text-neutral-300">Scale new heights</p>
</div>
</div>

<div className="group relative h-72 overflow-hidden rounded-2xl cursor-default border border-white/5">
<img alt="Helicopter" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 hover:opacity-70" src="https://images.unsplash.com/photo-1505253304499-671c55fb57fe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-semibold text-white mb-1">Helicopter Ride</h3>
<p className="text-sm text-neutral-300">Aerial perspective</p>
</div>
</div>
</div>
</div>
</section>
<div className="section-divider"></div>

<section className="pt-32 pb-32 backdrop-blur-xl" id="apply">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Ready to apply?</h2>
<p className="text-neutral-400">Tell us about your business and goals. We’ll review and get back to you within 48 hours.</p>
</div>
<form className="bg-[#0a0a12] border border-white/5 rounded-2xl p-8 md:p-12 space-y-8 shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Full Name *</label>
<input className="w-full bg-[#020408] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-neutral-700 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Email *</label>
<input className="w-full bg-[#020408] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-neutral-700 transition-all" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Phone Number</label>
<input className="w-full bg-[#020408] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-neutral-700 transition-all" placeholder="+1 234 567 890" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Company *</label>
<input className="w-full bg-[#020408] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-neutral-700 transition-all" placeholder="Acme Inc." type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">What’s your main objective? *</label>
<textarea className="w-full bg-[#020408] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder-neutral-700 transition-all h-32 resize-none"></textarea>
</div>
<div className="pt-4">
<button className="w-full py-4 text-base font-medium text-white btn-glossy rounded-lg shadow-lg shadow-indigo-500/20" type="button">
                        Check if You Qualify
                    </button>
</div>
<p className="text-center text-xs text-neutral-600 pt-4">
                    Limited spots available. Application based admission only.
                </p>
</form>
</div>
</section>
<div className="section-divider"></div>

<section className="py-32" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tighter text-white mb-4">Frequently Asked Questions</h2>
<p className="text-neutral-400">Everything you need to know about the retreat</p>
</div>
<div className="space-y-4">

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full px-6 py-5 text-left flex justify-between items-center group focus:outline-none" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">What’s included in the retreat package?</span>
<svg className="lucide lucide-plus w-4 h-4 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        Everything you need to focus: Accommodation, workspace, high-speed internet, workshops, mentoring sessions, and scheduled group activities.
                    </div>
</div>
<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full px-6 py-5 text-left flex justify-between items-center group focus:outline-none" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">Are flights included in the price?</span>
<svg className="lucide lucide-plus w-4 h-4 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        No, flights are not included. You are responsible for your travel to and from Cyprus. We will provide airport transfer details upon acceptance.
                    </div>
</div>
<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full px-6 py-5 text-left flex justify-between items-center group focus:outline-none" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">Do I need prior AI experience?</span>
<svg className="lucide lucide-plus w-4 h-4 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="hidden px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                        Some technical aptitude is helpful, but you don't need to be a senior engineer. We cater to founders and operators who want to build practical systems.
                    </div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/10 bg-[#0a0a12]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<svg className="lucide lucide-link-2 text-indigo-500 w-4 h-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span className="text-sm text-white font-medium">Mastermind AI</span>
</div>
<div className="text-xs text-neutral-600">
                © 2025 FreeHarbor.AI. All rights reserved.
            </div>
<div className="flex items-center gap-8">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="mailto:contact@freeharbor.ai">Contact Support</a>
</div>
</div>
</footer>


    </>
  );
}

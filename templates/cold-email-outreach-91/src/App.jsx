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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
},
brand: {
purple: '#7A63FF'
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'blob': 'blob 7s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in': 'fadeIn 0.3s ease-out forwards',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(-10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



    (function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.problem-card').forEach((el) => {
        observer.observe(el);
      });
    })();
  


    (function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.solution-card').forEach((el) => {
        observer.observe(el);
      });
    })();
  


    (function() {
      const section = document.querySelector('.insurance-section');
      const steps = section.querySelectorAll('.insurance-step');
      const line = section.querySelector('.insurance-line-fill');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate Steps
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.remove('opacity-0', 'translate-y-8');
                step.classList.add('opacity-100', 'translate-y-0');
              }, index * 200);
            });
            
            // Animate Line
            if(line) {
                setTimeout(() => {
                    line.style.width = '100%';
                }, 400);
            }
            
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });

      observer.observe(section);
    })();
  


      // Initialize Icons
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
      

<header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/60 bg-[#FDFBF9]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<span className="font-display font-bold text-sm tracking-tight text-slate-900">
              Hatchearly
            </span>
</a>

<nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#infrastructure">
              Infrastructure
            </a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">
              Process
            </a>
<a className="hover:text-slate-900 transition-colors" href="#integrations">
              Integrations
            </a>
<a className="hover:text-slate-900 transition-colors" href="#results">
              Results
            </a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">
              Pricing
            </a>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white shadow-sm hover:bg-slate-800 hover:shadow-md transition-all active:scale-95" href="#book">
              Book strategy call
            </a>
</div>
</div>
</div>
</header>
<main className="sm:pt-32 pt-24">

<section className="overflow-hidden lg:pb-24 -multi pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] -z-10 opacity-60 pointer-events-none">
<div className="absolute top-0 right-1/4 w-72 h-72 bg-[#7A63FF]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{animationDelay: '4s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -multi">
<div className="flex flex-col items-center text-center max-w-5xl mx-auto -multi">

<div className="inline-flex items-center gap-2 rounded-full bg-[#7A63FF]/5 backdrop-blur-sm border border-[#7A63FF]/20 px-4 py-1.5 mb-8 transition-transform hover:scale-105 cursor-default group">
<svg className="text-[#7A63FF] group-hover:rotate-12 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
<span className="text-[13px] font-semibold text-[#7A63FF] tracking-tight">
                Interactive Demo — Try it yourself
              </span>
</div>

<h1 className="sm:text-6xl lg:text-7xl text-balance leading-[1.1] text-4xl font-bold text-slate-900 tracking-tight font-display mb-6">
              See Your Outreach <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7A63FF] via-indigo-600 to-blue-500">Results in<br/>Real-Time</span>
</h1>

<p className="text-[16px] sm:text-[18px] leading-relaxed text-slate-500 max-w-2xl text-balance mb-10">
              Don't just read about it — experience it. Interact with the dashboard below to see how Hatchearly transforms cold email outreach.
            </p>

<div className="flex items-center gap-2 text-sm font-semibold text-[#7A63FF] mb-12 animate-pulse-slow">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7A63FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-[#7A63FF]"></span>
</div>
              Click on the cards below to explore
            </div>
</div>

<div className="relative max-w-6xl mx-auto">

<div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden ring-1 ring-slate-900/5">

<div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-slate-100">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-100 border border-red-200"></div>
<div className="w-3 h-3 rounded-full bg-amber-100 border border-amber-200"></div>
<div className="w-3 h-3 rounded-full bg-emerald-100 border border-emerald-200"></div>
</div>
<div className="flex-1 px-4 max-w-lg mx-auto">
<div className="flex items-center gap-2 bg-slate-50 border border-slate-100/80 rounded-lg px-4 py-1.5 text-xs text-slate-400 font-medium justify-center transition-colors hover:bg-slate-100/50 hover:border-slate-200">
<svg className="text-slate-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                         app.hatchearly.io/dashboard
                      </div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        Watch Demo
                      </button>
</div>
</div>

<div className="p-8 sm:p-12 bg-white min-h-[600px]">

<div className="mb-12">
<h2 className="text-3xl sm:text-4xl font-display font-semibold text-slate-900 tracking-tight">
                         Good evening, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7A63FF] to-[#D946EF]">Startup CEO</span>
</h2>
<p className="text-slate-500 mt-2 text-lg font-medium tracking-tight">Here's your campaign performance at a glance</p>
</div>

<div className="relative group cursor-pointer mb-12">
<div className="absolute -top-3 right-6 z-10">
<span className="inline-flex items-center rounded-md bg-[#7A63FF]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#7A63FF] shadow-sm ring-1 ring-inset ring-[#7A63FF]/20">
                           Quick campaign setup
                         </span>
</div>
<div className="flex items-center justify-between p-6 rounded-2xl border border-dashed border-[#7A63FF]/30 bg-[#7A63FF]/[0.02] hover:bg-[#7A63FF]/[0.04] hover:border-[#7A63FF]/40 transition-all duration-300">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-xl bg-[#7A63FF]/10 text-[#7A63FF] flex items-center justify-center shadow-sm">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div>
<h3 className="font-bold text-lg text-slate-900 tracking-tight">Create New Campaign</h3>
<p className="text-[15px] text-slate-500 mt-0.5">Start with AI-powered targeting and automated sequencing</p>
</div>
</div>
<div className="p-3 text-[#7A63FF] group-hover:translate-x-1 transition-transform">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-8">

<div className="relative group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg hover:shadow-slate-200/40 transition-all hover:border-slate-300">
<div className="absolute -top-3 left-6 z-10">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm ring-1 ring-inset ring-emerald-600/20">
                              Real-time data
                            </span>
</div>
<div className="flex items-center justify-between mb-8 mt-2">
<h3 className="font-display font-bold text-xl text-slate-900 tracking-tight">Total Sending Capacity</h3>
<svg className="text-slate-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">
                            Maximum sending volume across Email &amp; LinkedIn channels.
                         </p>
<div className="space-y-8">

<div>
<div className="flex items-center gap-2 text-sm font-semibold text-[#7A63FF] mb-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                  Daily Emails
                               </div>
<div className="text-5xl font-display font-semibold text-slate-900 tracking-tight">≈1,000</div>
<div className="text-xs text-slate-400 font-medium mt-2 flex items-center gap-1.5">
<span>emails/day</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span>Across 41 inboxes</span>
</div>
</div>

<div>
<div className="flex items-center gap-2 text-sm font-semibold text-[#0077b5] mb-2">

<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                  LinkedIn Invites
                               </div>
<div className="text-5xl font-display font-semibold text-slate-900 tracking-tight">≈450</div>
<div className="text-xs text-slate-400 font-medium mt-2 flex items-center gap-1.5">
<span>invites/week</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span>4 Accounts</span>
</div>
</div>
</div>
</div>

<div className="relative lg:col-span-2 group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg hover:shadow-slate-200/40 transition-all hover:border-slate-300 flex flex-col">
<div className="absolute -top-3 right-6 z-10">
<span className="inline-flex items-center rounded-full bg-[#7A63FF]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#7A63FF] shadow-sm ring-1 ring-inset ring-[#7A63FF]/20">
                              AI-powered insights
                            </span>
</div>
<div className="flex items-center justify-between mb-2 mt-2">
<h3 className="font-display font-bold text-xl text-slate-900 tracking-tight">Performance</h3>
<svg className="text-slate-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<p className="text-sm text-slate-500 mb-8 font-medium">How your campaigns are performing</p>
<div className="mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Reply Forecast</div>
<div className="grid sm:grid-cols-2 gap-6 flex-1">

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 flex flex-col justify-between">
<div>
<div className="h-10 w-10 bg-white rounded-lg border border-slate-200 text-slate-400 shadow-sm flex items-center justify-center mb-4">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<div className="text-sm font-semibold text-slate-900">Expected replies at current rate</div>
</div>
<div>
<div className="mt-4 text-4xl font-display font-bold text-slate-900 tracking-tight">≈310</div>
<div className="text-xs text-slate-400 mt-2 font-medium">At ~9.8% overall reply rate</div>
</div>
</div>

<div className="bg-[#7A63FF]/[0.02] rounded-2xl p-6 border border-[#7A63FF]/10 flex flex-col justify-between">
<div>
<div className="h-10 w-10 bg-white rounded-lg border border-[#7A63FF]/20 text-[#7A63FF] shadow-sm flex items-center justify-center mb-4">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<div className="text-sm font-semibold text-slate-900">Potential replies (this month)</div>
<div className="text-xs text-slate-500 mt-2 leading-relaxed">Based on your current performance with additional sending capacity</div>
</div>
<div className="flex items-end justify-between mt-4">
<div className="flex items-baseline gap-3">
<span className="text-4xl font-display font-bold text-[#7A63FF] tracking-tight">≈520</span>
<span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-600 ring-1 ring-inset ring-emerald-600/20">+34%</span>
</div>
</div>
<div className="mt-3">
<a className="inline-flex items-center gap-1 text-[11px] font-bold text-[#7A63FF] hover:text-[#654FE0] uppercase tracking-wide" href="#">
                                    See how to reach this
                                    <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<svg className="text-emerald-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                No credit card required
             </div>
<div className="flex items-center gap-2">
<svg className="text-emerald-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Free leads included
             </div>
<div className="flex items-center gap-2">
<svg className="text-emerald-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Setup in 2 minutes
             </div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest">
      Trusted By Outbound Teams At:
    </p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex items-center space-x-16 px-8 group-hover:[animation-play-state:paused]">

<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        AcmeCorp
      </span>

<span className="text-xl font-semibold font-display text-slate-800 italic opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        GlobalSoft
      </span>

<span className="text-xl font-bold font-display text-slate-800 tracking-tighter opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        next_gen
      </span>

<span className="text-xl font-medium font-display text-slate-800 flex items-center gap-1 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
<div className="w-4 h-4 bg-slate-800 rounded-full"></div>
        Orbital
      </span>

<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        VANTAGE
      </span>

<span className="text-xl font-serif font-semibold text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        Stirling
      </span>


<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        AcmeCorp
      </span>

<span className="text-xl font-semibold font-display text-slate-800 italic opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        GlobalSoft
      </span>

<span className="text-xl font-bold font-display text-slate-800 tracking-tighter opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        next_gen
      </span>

<span className="text-xl font-medium font-display text-slate-800 flex items-center gap-1 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
<div className="w-4 h-4 bg-slate-800 rounded-full"></div>
        Orbital
      </span>

<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        VANTAGE
      </span>

<span className="text-xl font-serif font-semibold text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        Stirling
      </span>
</div>
<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
</div>
</section><section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">

<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
        Your Perfect Script Doesn’t Matter If <span className="relative inline-block text-slate-900">No One Sees It<span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-10 skew-x-[-10deg]"></span></span>.
      </h2>
<p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-balance">
        You’re spending hours dealing with DNS records, purchasing domains, and praying your warmup tools work. But inevitably, two weeks later, your open rates tank.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="problem-card group relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3 pr-4">
            Wasted lead lists &amp; burnt data.
          </h3>
<p className="text-sm text-slate-500 leading-relaxed">
            Your expensive contacts go straight to spam folders, burning through your TAM without ever getting a fair shot.
          </p>
</div>

<div className="absolute -bottom-4 -right-4 w-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none select-none">
<div className="space-y-2">
<div className="h-2 w-full bg-slate-900 rounded-full"></div>
<div className="h-2 w-[90%] bg-slate-900 rounded-full"></div>
<div className="h-2 w-full bg-red-600 rounded-full decoration-line-through"></div>
<div className="h-2 w-[80%] bg-red-600 rounded-full decoration-line-through"></div>
</div>
</div>
</div>

<div className="problem-card group relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3 pr-4">
            SDRs sitting idle with no replies.
          </h3>
<p className="text-sm text-slate-500 leading-relaxed">
            Activity KPIs look green, but the meeting calendar remains empty, demoralizing your best talent.
          </p>
</div>

<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
<div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-red-100 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-red-500"></span>
<span className="text-[10px] font-bold text-slate-400">0 Replies</span>
</div>
</div>
</div>

<div className="problem-card group relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3 pr-4">
            Constant "Technical Anxiety".
          </h3>
<p className="text-sm text-slate-500 leading-relaxed">
            You hesitate to scale volume because you're afraid the next batch will trigger a domain burn.
          </p>
</div>

<div className="absolute bottom-0 right-0 w-full h-16 overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity">
<svg className="w-full h-full text-red-200 fill-current" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 40 L0 20 Q 20 10, 40 30 T 80 35 L 100 40 Z"></path>
</svg>
</div>
</div>
</div>
</div>


</section><section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">

<div className="absolute inset-0 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
        The "Burn-Proof" <span className="text-[#7A63FF]">Infrastructure Protocol</span>
</h2>
<p className="text-lg text-slate-600 font-medium leading-relaxed">
        Stop guessing. We treat deliverability as a science, not a gamble.
      </p>
</div>

<div className="space-y-6">

<div className="solution-card group relative p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#7A63FF]/30 hover:shadow-xl hover:shadow-[#7A63FF]/5 transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start overflow-hidden">
<div className="shrink-0 relative z-10">
<div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#7A63FF] shadow-sm group-hover:scale-110 group-hover:border-[#7A63FF]/20 transition-transform duration-300">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="relative z-10">
<h3 className="font-display font-bold text-xl text-slate-900 mb-2">Root-Level Auth Shield</h3>
<p className="text-slate-600 leading-relaxed">
            We don’t just toggle settings. We configure SPF, DKIM, and DMARC at the root DNS level, creating a cryptographic ID that tells Google and Outlook you are a human, not a bot.
          </p>
</div>

<div className="absolute top-0 left-0 w-1 h-full bg-[#7A63FF] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

<div className="absolute -right-20 -top-20 w-64 h-64 bg-[#7A63FF]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#7A63FF]/10 transition-colors duration-500"></div>
</div>

<div className="solution-card group relative p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#7A63FF]/30 hover:shadow-xl hover:shadow-[#7A63FF]/5 transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="shrink-0 relative z-10">
<div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#7A63FF] shadow-sm group-hover:scale-110 group-hover:border-[#7A63FF]/20 transition-transform duration-300">
<svg className="lucide lucide-waypoints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="4.5" r="2.5"></circle><path d="m10.2 6.3-3.9 3.9"></path><circle cx="4.5" cy="12" r="2.5"></circle><path d="M7 12h10"></path><circle cx="19.5" cy="12" r="2.5"></circle><path d="m13.8 17.7 3.9-3.9"></path><circle cx="12" cy="19.5" r="2.5"></circle></svg>
</div>
</div>
<div className="relative z-10">
<h3 className="font-display font-bold text-xl text-slate-900 mb-2">Smart-Warmup Matrix</h3>
<p className="text-slate-600 leading-relaxed">
            Connected to a network of high-reputation accounts that mimic real human behavior (replies, folder moves, priority marking) to build a sender score that withstands high volume.
          </p>
</div>

<div className="absolute top-0 left-0 w-1 h-full bg-[#7A63FF] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="solution-card group relative p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#7A63FF]/30 hover:shadow-xl hover:shadow-[#7A63FF]/5 transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="shrink-0 relative z-10">
<div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#7A63FF] shadow-sm group-hover:scale-110 group-hover:border-[#7A63FF]/20 transition-transform duration-300">
<svg className="lucide lucide-activity group-hover:animate-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
</div>
<div className="relative z-10">
<h3 className="font-display font-bold text-xl text-slate-900 mb-2">Active Health Grid</h3>
<p className="text-slate-600 leading-relaxed">
            We monitor your domains 24/7. We see the smoke before the fire. If placement dips, we intervene immediately to pause sending and re-route traffic to healthy nodes.
          </p>
</div>

<div className="absolute top-0 left-0 w-1 h-full bg-[#7A63FF] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
</div>
</div>

</section><section className="py-24 bg-white relative overflow-hidden border-b border-slate-100 insurance-section">

<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-8">
        The Industry’s Only <span className="text-[#7A63FF]">Domain Burn Insurance</span>.
      </h2>
<div className="space-y-6 text-lg">
<p className="text-slate-500 font-medium italic">
          "We are so confident in our setup that we take on the risk."
        </p>
<p className="text-slate-900 font-semibold text-xl sm:text-2xl leading-relaxed">
          If a domain or account we manage gets flagged or hits spam, we replace it and warm up a new one for <span className="bg-[#7A63FF]/10 text-[#7A63FF] px-1 rounded">FREE</span>.
        </p>
<p className="text-slate-600 font-medium italic">
          You never have to worry about buying domains or pausing campaigns again.
        </p>
</div>

<div className="mt-10">
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300" href="#book">
          GET INSURED NOW
          <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative max-w-5xl mx-auto">

<div className="hidden sm:block absolute top-[40px] left-[10%] w-[80%] h-0.5 bg-slate-100 -z-10">
<div className="h-full bg-gradient-to-r from-red-400 via-[#7A63FF] to-emerald-400 w-0 transition-all duration-[1500ms] ease-out delay-300 insurance-line-fill rounded-full" style={{width: '100%'}}></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">

<div className="insurance-step group flex flex-col items-center text-center opacity-0 translate-y-8 transition-all duration-700">
<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-red-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="text-red-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>

<div className="absolute inset-0 bg-red-50 rounded-2xl animate-ping opacity-75"></div>

<div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border-2 border-white tracking-wide uppercase">
              Flagged
            </div>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-2">Domain Flagged</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
            Spam filters detect a dip in reputation or deliverability issues.
          </p>
</div>

<div className="insurance-step group flex flex-col items-center text-center transition-all duration-700 delay-200">
<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-[#7A63FF]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="text-[#7A63FF] group-hover:rotate-180 transition-transform duration-700" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21h5v-5"></path></svg>
</div>

<div className="absolute -top-3 -right-3 bg-[#7A63FF] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border-2 border-white tracking-wide uppercase">
              Swapped
            </div>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-2">Instant Replacement</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
            We automatically route traffic to a fresh, pre-warmed satellite domain.
          </p>
</div>

<div className="insurance-step group flex flex-col items-center text-center transition-all duration-700 delay-400">
<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-emerald-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="text-emerald-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>

<div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border-2 border-white tracking-wide uppercase">
              Active
            </div>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-2">New Domain Warmed</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
            Your outreach continues uninterrupted with 100% health score.
          </p>
</div>
</div>
</div>
</div>


</section>
</main>


    </>
  );
}

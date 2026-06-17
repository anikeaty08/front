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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[30rem] h-[30rem] bg-emerald-900/10 rounded-full blur-[100px]"></div>
<div className="absolute top-[40%] left-[-10%] w-[25rem] h-[25rem] bg-blue-900/10 rounded-full blur-[90px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">

<div className="relative w-9 h-9">
<svg className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path d="M4.10051 23.8995C2.65934 27.2023 5.48074 36.3152 5.48074 36.3152C5.48074 36.3152 14.1206 38.6508 17.5 37.5C26.6127 34.3965 37.5 28.5 37.5 17.5C37.5 6.4543 28.5457 2.5 17.5 2.5C6.4543 2.5 2.5 11.4543 2.5 17.5C2.5 19.8055 2.94975 21.9678 4.10051 23.8995Z" fill="url(#paint0_linear)"></path>
<path d="M12 20C12 20 13.5 15.5 19.5 15.5C25.5 15.5 27 20 27 20" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="19.5" cy="24" fill="white" r="2.5"></circle>
<path d="M9 16C9 16 12 8.5 22.5 8.5C33 8.5 36 16 36 16" stroke="white" strokeLinecap="round" stroke-opacity="0.4" strokeWidth="2.5"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear" x1="2.5" x2="37.5" y1="2.5" y2="37.5">
<stop stop-color="#3B82F6"></stop>
<stop offset="1" stop-color="#2563EB"></stop>
</lineargradient>
</defs>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-100 transition-colors">AccessLine</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#workflow">How it Works</a>
<a className="hover:text-white transition-colors" href="#features">Capabilities</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-6">
<div className="hidden sm:flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/5">
<button className="px-2 py-1 text-xs font-medium text-white bg-white/10 rounded shadow-sm">EN</button>
<button className="px-2 py-1 text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors">FR</button>
</div>
<div className="h-4 w-px bg-white/10 hidden sm:block"></div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium hover:text-white transition-colors">Log in</button>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-indigo-900/20 border border-indigo-500/50 flex items-center gap-2">
                        Get Access
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            System Operational v2.1
        </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
            Your Front Desk, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Reimagined.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Deploy professional AI voice agents that handle calls, qualify leads, and sync data to your CRM instantly. No human intervention required.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto bg-white text-slate-900 text-base font-medium px-8 py-3.5 rounded-lg hover:bg-slate-100 transition-colors">
                Deploy Agent
            </button>
<button className="w-full sm:w-auto glass-card text-white text-base font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
<i className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" data-lucide="play-circle"></i>
                Hear Samples
            </button>
</div>

<p className="text-xs font-medium tracking-widest text-slate-600 mb-8 uppercase">Trusted by operational teams at</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="building-2"></i><span className="font-bold text-lg tracking-tight">ApexLaw</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="heart-pulse"></i><span className="font-bold text-lg tracking-tight">MediCore</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="crown"></i><span className="font-bold text-lg tracking-tight">LuxeStay</span></div>
</div>
</section>

<section className="py-24 px-6 relative" id="workflow">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Seamless Workflow</h2>
<p className="text-lg text-slate-400">From incoming call to actioned data in milliseconds.</p>
</div>

<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent hidden md:block -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

<div className="step-card glass-card p-8 rounded-2xl border border-white/5 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-[#0B0F19] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative mx-auto md:mx-0">
<div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full animate-ping"></div>
<i className="w-8 h-8 text-indigo-400" data-lucide="phone-incoming"></i>
</div>
<div className="text-center md:text-left">
<div className="text-xs font-bold text-indigo-400 mb-2 uppercase tracking-wider">Step 01</div>
<h3 className="text-xl font-semibold text-white mb-3">Inbound Inquiry</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                                A customer calls your business number. AccessLine intercepts the signal instantly with zero latency, available 24/7/365.
                            </p>
</div>
</div>

<div className="step-card glass-card p-8 rounded-2xl border border-white/5 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center mb-6 shadow-xl shadow-indigo-500/20 relative mx-auto md:mx-0">
<i className="w-8 h-8 text-white" data-lucide="cpu"></i>

<div className="absolute inset-0 border border-white/20 rounded-2xl scale-110 animate-pulse"></div>
</div>
<div className="text-center md:text-left">
<div className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">Step 02</div>
<h3 className="text-xl font-semibold text-white mb-3">Intelligent Agent</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                                Our neural engine converses naturally, answering FAQs, handling objections, and qualifying the lead based on your playbook.
                            </p>
</div>
</div>

<div className="step-card glass-card p-8 rounded-2xl border border-white/5 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-[#0B0F19] border border-white/10 flex items-center justify-center mb-6 shadow-xl mx-auto md:mx-0">
<i className="w-8 h-8 text-emerald-400" data-lucide="database"></i>
</div>
<div className="text-center md:text-left">
<div className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wider">Step 03</div>
<h3 className="text-xl font-semibold text-white mb-3">Instant Sync</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                                Structured data is pushed to your dashboard and CRM instantly. Appointments are booked directly to your Google Calendar.
                            </p>
</div>
</div>
</div>

<div className="flex md:hidden justify-center my-4">
<i className="text-white/20" data-lucide="arrow-down"></i>
</div>
</div>

<div className="mt-20 pt-10 border-t border-white/5">
<p className="text-center text-sm text-slate-500 mb-6">Synchronizes instantly with your stack</p>
<div className="flex justify-center gap-8 items-center opacity-60">
<div className="flex items-center gap-2 text-slate-300 font-semibold"><i className="w-5 h-5" data-lucide="calendar"></i> Google Calendar</div>
<div className="h-4 w-px bg-white/20"></div>
<div className="flex items-center gap-2 text-slate-300 font-semibold"><i className="w-5 h-5" data-lucide="database"></i> HubSpot</div>
<div className="h-4 w-px bg-white/20"></div>
<div className="flex items-center gap-2 text-slate-300 font-semibold"><i className="w-5 h-5" data-lucide="slack"></i> Slack</div>
<div className="h-4 w-px bg-white/20"></div>
<div className="flex items-center gap-2 text-slate-300 font-semibold"><i className="w-5 h-5" data-lucide="webhook"></i> Webhooks</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto" id="features">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="stethoscope"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Private Clinics</h3>
<p className="text-base text-slate-400 leading-relaxed">Handles patient intake, FAQs, and syncs appointments directly to Jane or Epic EMR.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="scale"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Legal Firms</h3>
<p className="text-base text-slate-400 leading-relaxed">Qualifies incoming leads, screens solicitors, and schedules discovery calls automatically.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="hotel"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Boutique Hotels</h3>
<p className="text-base text-slate-400 leading-relaxed">Manages late-night inquiries, room service requests, and concierge bookings 24/7.</p>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Transparent Investment</h2>
<p className="text-lg text-slate-400">Scale your operations without the headcount.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass-card p-8 rounded-2xl border-white/5">
<h3 className="text-lg font-medium text-slate-300 mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white">$99</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-indigo-400" data-lucide="check-circle"></i> 1 AI Voice Agent
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-indigo-400" data-lucide="check-circle"></i> Google Calendar Sync
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-indigo-400" data-lucide="check-circle"></i> Basic Call Logs
                    </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 text-sm font-medium transition-colors">Start Trial</button>
</div>

<div className="glass-card p-8 rounded-2xl border-indigo-500/30 bg-indigo-900/10 relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">MOST POPULAR</div>
<h3 className="text-lg font-medium text-indigo-200 mb-2">Pro</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white">$149</span>
<span className="text-sm text-slate-400">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-5 h-5 text-emerald-400" data-lucide="check-circle"></i> Multi-agent Support
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-5 h-5 text-emerald-400" data-lucide="check-circle"></i> Full CRM Integration
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-5 h-5 text-emerald-400" data-lucide="check-circle"></i> Sentiment Analysis
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-5 h-5 text-emerald-400" data-lucide="check-circle"></i> Advanced Routing
                    </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 text-sm font-medium transition-colors shadow-lg shadow-indigo-900/50">Get Started</button>
</div>

<div className="glass-card p-8 rounded-2xl border-white/5">
<h3 className="text-lg font-medium text-slate-300 mb-2">Premium</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white">Custom</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-slate-500" data-lucide="check-circle"></i> High Volume Pricing
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-slate-500" data-lucide="check-circle"></i> Custom Voice Cloning
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-slate-500" data-lucide="check-circle"></i> Dedicated Success Mgr
                    </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 text-sm font-medium transition-colors">Contact Sales</button>
</div>
</div>
</section>
<footer className="border-t border-white/5 bg-[#080B13] py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center text-indigo-500 border border-indigo-500/20">
<i className="w-5 h-5" data-lucide="radio"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-300">AccessLine</span>
</div>
<p className="text-sm text-slate-500">© 2024 AccessLine Systems Inc. All operational rights reserved.</p>
</div>
</footer>


    </>
  );
}

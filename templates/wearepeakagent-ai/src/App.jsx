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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
primary: '#2D3E50', // Navy Blue
accent: '#E8833A', // Orange/Amber
surface: '#F8FAFC', // Soft Gray
surfaceHighlight: '#FFFFFF', // White
textMain: '#2D3E50', // Navy for headlines
textBody: '#374151', // Dark Gray for body
border: '#e2e8f0', // Slate 200
},
animation: {
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        lucide.createIcons();

        const modal = document.getElementById('leadModal');
        const modalCard = document.getElementById('modalCard');
        const body = document.body;

        function openModal() {
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalCard.classList.remove('scale-95', 'opacity-0');
                modalCard.classList.add('scale-100', 'opacity-100');
            }, 10);
            body.classList.add('no-scroll');
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalCard.classList.remove('scale-100', 'opacity-100');
            modalCard.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
            body.classList.remove('no-scroll');
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Processing...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = 'Booked!';
                btn.classList.remove('bg-primary');
                btn.classList.add('bg-green-500');
                setTimeout(() => {
                    closeModal();
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.remove('bg-green-500');
                    btn.classList.add('bg-primary');
                    e.target.reset();
                }, 1000);
            }, 1500);
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-slate-50 to-white"></div>
<div className="absolute inset-0 bg-grid opacity-60"></div>
</div>

<nav className="fixed w-full z-40 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<div className="w-10 h-10 relative">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

<path d="M50 15L15 45V90H85V45L50 15Z" stroke="#2D3E50" strokeLinejoin="round" strokeWidth="8"></path>

<rect height="16" stroke="#2D3E50" strokeWidth="4" width="16" x="42" y="38"></rect>
<path d="M50 38V54" stroke="#2D3E50" strokeWidth="2"></path>
<path d="M42 46H58" stroke="#2D3E50" strokeWidth="2"></path>

<rect fill="#E8833A" height="15" width="10" x="25" y="70"></rect>
<rect fill="#E8833A" height="25" width="10" x="38" y="60"></rect>
<rect fill="#E8833A" height="35" width="10" x="51" y="50"></rect>
<rect fill="#E8833A" height="45" width="10" x="64" y="40"></rect>
</svg>
</div>
<div className="flex flex-col">
<span className="text-primary font-bold text-xl tracking-tight leading-none">PeakAgent</span>
<span className="text-accent text-[10px] font-medium tracking-wide">Making every agent unstoppable.</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-500">
<a className="hover:text-primary transition-colors" href="#features">Solution</a>
<a className="hover:text-primary transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-primary transition-colors" href="#results">Results</a>
<a className="hover:text-primary transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-semibold text-slate-500 hover:text-primary transition-colors" href="#">Login</a>
<button className="text-xs font-semibold bg-primary text-white hover:bg-slate-700 px-5 py-2.5 rounded-full transition-all shadow-lg shadow-primary/20" onclick="openModal()">
                    Book Demo
                </button>
</div>
</div>
</nav>
<main className="relative z-10 pt-28 md:pt-36">

<section className="max-w-7xl mx-auto px-6 py-8 md:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-primary text-[11px] font-semibold uppercase tracking-wide mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
                        PeakAgent AI 2.0
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-primary mb-6 leading-[1.1]">
                        Your Leads Deserve <br/>
<span className="text-slate-400">More Than Voicemail.</span>
</h1>
<p className="text-lg text-textBody max-w-xl mb-8 leading-relaxed font-light">
                        PeakAgent's AI handles every call, text, and follow-up — 24/7. 
                        Stop chasing leads and start closing deals with the help of your new digital workforce.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20" onclick="openModal()">
                            Start Scaling
                            <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
<button className="px-8 py-4 bg-white text-primary font-medium rounded-full border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
<i className="w-4 h-4" data-lucide="play-circle" strokeWidth="1.5"></i>
                            View Demo
                        </button>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-600">AS</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-[10px] font-bold">+400</div>
</div>
<p className="font-medium">Top Producing Teams Trust PeakAgent</p>
</div>
</div>

<div className="relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-tr from-primary/10 to-accent/20 rounded-[2rem] blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

<div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden p-6 animate-float">

<div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-bold uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Live Activity
                            </div>
</div>

<div className="space-y-4">

<div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-accent">
<i className="w-5 h-5" data-lucide="phone-incoming"></i>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="font-semibold text-primary text-sm">New Lead (Zillow)</span>
<span className="text-[10px] text-slate-400">Just now</span>
</div>
<div className="text-xs text-slate-500 flex items-center gap-2">
<i className="w-3 h-3 text-green-500" data-lucide="check-circle-2"></i>
                                        Instant Response Sent
                                    </div>
</div>
</div>

<div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-100">
<div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="font-semibold text-primary text-sm">Listing Appointment</span>
<span className="text-[10px] text-slate-400">2m ago</span>
</div>
<div className="text-xs text-slate-500 flex items-center gap-2">
<i className="w-3 h-3 text-green-500" data-lucide="check-circle-2"></i>
                                        Booked for Tomorrow 2pm
                                    </div>
</div>
</div>

<div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-100 opacity-60">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
<i className="w-5 h-5" data-lucide="message-square"></i>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="font-semibold text-primary text-sm">Database Reactivation</span>
<span className="text-[10px] text-slate-400">15m ago</span>
</div>
<div className="text-xs text-slate-500">
                                        "Yes, I'm still looking for a home..."
                                    </div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 bg-primary text-white p-4 rounded-xl shadow-xl flex items-center gap-3">
<div className="bg-white/10 p-2 rounded-lg">
<i className="w-5 h-5 text-accent" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-[10px] text-slate-300 font-medium uppercase">Conversion Rate</div>
<div className="text-xl font-bold">+24%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">

<div className="bg-surface p-8 group hover:bg-white transition-colors">
<div className="mb-4 text-slate-400 group-hover:text-accent transition-colors">
<i className="w-6 h-6" data-lucide="ghost" strokeWidth="1.5"></i>
</div>
<div className="text-4xl font-semibold text-primary mb-2 tracking-tighter">78%</div>
<h3 className="text-sm font-semibold text-textBody">Leads lost to ghosting</h3>
</div>

<div className="bg-surface p-8 group hover:bg-white transition-colors">
<div className="mb-4 text-slate-400 group-hover:text-accent transition-colors">
<i className="w-6 h-6" data-lucide="phone-off" strokeWidth="1.5"></i>
</div>
<div className="text-4xl font-semibold text-primary mb-2 tracking-tighter">47%</div>
<h3 className="text-sm font-semibold text-textBody">Calls sent to voicemail</h3>
</div>

<div className="bg-surface p-8 group hover:bg-white transition-colors">
<div className="mb-4 text-slate-400 group-hover:text-accent transition-colors">
<i className="w-6 h-6" data-lucide="timer" strokeWidth="1.5"></i>
</div>
<div className="text-4xl font-semibold text-primary mb-2 tracking-tighter">&lt; 5m</div>
<h3 className="text-sm font-semibold text-textBody">Required response time</h3>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-50" id="features">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-primary tracking-tight mb-4">One System. <br/><span className="text-slate-400">Zero Dropped Balls.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-primary mb-3">Speed-to-Lead AI</h3>
<p className="text-sm text-textBody leading-relaxed">
                            New lead comes in? PeakAgent is on it in under 60 seconds. Questions answered, appointments booked, before your competition sees the notification.
                        </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-primary mb-3">Voice Assistant</h3>
<p className="text-sm text-textBody leading-relaxed">
                            Our AI receptionist answers calls 24/7 with human-like intonation. It qualifies leads and transfers hot prospects instantly to your phone.
                        </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="refresh-cw" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-primary mb-3">Database Reactivation</h3>
<p className="text-sm text-textBody leading-relaxed">
                            Systematically warm up your old leads. The AI reaches out via SMS and email to resurface buyers who are finally ready to move.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold text-primary tracking-tight mb-2">From Cold to Closed</h2>
<p className="text-slate-500 text-sm">A seamless workflow designed for high-performance teams.</p>
</div>
</div>
<div className="relative">
<div className="absolute top-8 left-0 w-full h-px bg-slate-200 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="relative pt-8 md:pt-0 group">
<div className="w-4 h-4 bg-white border-4 border-primary rounded-full absolute top-6 left-0 hidden md:block z-10 shadow-sm"></div>
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
<span className="font-mono text-lg font-bold">1</span>
</div>
<h3 className="text-lg font-semibold text-primary mb-3">Connect</h3>
<p className="text-sm text-slate-500 leading-relaxed">Seamless integration with your existing CRM (FUB, KVCore, etc) and phone systems. Setup takes less than 24 hours.</p>
</div>

<div className="relative pt-8 md:pt-0 group">
<div className="w-4 h-4 bg-slate-200 border-4 border-white rounded-full absolute top-6 left-0 hidden md:block z-10 group-hover:bg-accent transition-colors"></div>
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 text-primary shadow-sm">
<span className="font-mono text-lg font-bold">2</span>
</div>
<h3 className="text-lg font-semibold text-primary mb-3">Capture</h3>
<p className="text-sm text-slate-500 leading-relaxed">The AI handles inbound traffic and outbound reactivation. No lead is left behind.</p>
</div>

<div className="relative pt-8 md:pt-0 group">
<div className="w-4 h-4 bg-slate-200 border-4 border-white rounded-full absolute top-6 left-0 hidden md:block z-10 group-hover:bg-accent transition-colors"></div>
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 text-primary shadow-sm">
<span className="font-mono text-lg font-bold">3</span>
</div>
<h3 className="text-lg font-semibold text-primary mb-3">Convert</h3>
<p className="text-sm text-slate-500 leading-relaxed">Qualified appointments appear on your calendar. You focus on the closing conversation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="results">
<div className="rounded-3xl p-8 md:p-16 bg-primary text-white shadow-2xl relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-8">
<i className="w-5 h-5 text-accent fill-current" data-lucide="quote"></i>
</div>
<blockquote className="text-2xl md:text-3xl font-medium leading-tight mb-8 tracking-tight">
                            "We handed our database of 35,000 leads to PeakAgent. Within 48 hours, the system reactivated leads we hadn't spoken to in years. The ROI was immediate."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center text-sm font-bold">MS</div>
<div>
<div className="font-semibold text-white">Michael Sharpe</div>
<div className="text-slate-300 text-xs">Sales Manager, The Kink Team</div>
</div>
</div>
</div>
<div className="w-full md:w-auto min-w-[320px]">
<div className="space-y-4">
<div className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
<span className="text-slate-300 text-sm">Response Rate</span>
<span className="text-white font-mono font-bold text-lg">34.8%</span>
</div>
<div className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
<span className="text-slate-300 text-sm">Reply Lift</span>
<span className="text-accent font-mono font-bold text-lg">7.2x</span>
</div>
<div className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
<span className="text-slate-300 text-sm">Monthly Actions</span>
<span className="text-white font-mono font-bold text-lg">10k+</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 bg-slate-50" id="pricing">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold text-primary mb-4 tracking-tight">Simple Pricing</h2>
<p className="text-slate-500 text-sm">Designed for scaling teams. No hidden fees.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-slate-200 rounded-2xl p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<h3 className="text-base font-semibold text-primary mb-2">Starter</h3>
<div className="text-3xl font-bold text-primary mb-6">$499<span className="text-sm font-normal text-slate-400">/mo</span></div>
<ul className="space-y-4 mb-8 text-sm text-textBody">
<li className="flex gap-3"><i className="w-4 h-4 text-accent" data-lucide="check"></i> Speed-to-Lead AI</li>
<li className="flex gap-3"><i className="w-4 h-4 text-accent" data-lucide="check"></i> SMS &amp; Email Follow-up</li>
<li className="flex gap-3"><i className="w-4 h-4 text-accent" data-lucide="check"></i> Basic CRM Sync</li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-200 text-primary text-xs font-bold hover:bg-slate-50 transition-colors" onclick="openModal()">Select Plan</button>
</div>

<div className="border-2 border-accent/20 rounded-2xl p-8 bg-white relative shadow-2xl shadow-accent/10 hover:-translate-y-1 transition-all duration-300">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Popular</div>
<h3 className="text-base font-semibold text-primary mb-2">Growth</h3>
<div className="text-3xl font-bold text-primary mb-6">$999<span className="text-sm font-normal text-slate-400">/mo</span></div>
<ul className="space-y-4 mb-8 text-sm text-textBody">
<li className="flex gap-3"><i className="w-4 h-4 text-accent" data-lucide="check"></i> <strong>Everything in Starter</strong></li>
<li className="flex gap-3"><i className="w-4 h-4 text-accent" data-lucide="check"></i> Full Voice Agent</li>
<li className="flex gap-3"><i className="w-4 h-4 text-accent" data-lucide="check"></i> Database Reactivation</li>
</ul>
<button className="w-full py-3 rounded-lg bg-primary text-white text-xs font-bold hover:bg-slate-700 transition-colors" onclick="openModal()">Select Plan</button>
</div>

<div className="border border-slate-200 rounded-2xl p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<h3 className="text-base font-semibold text-primary mb-2">Enterprise</h3>
<div className="text-3xl font-bold text-primary mb-6">Custom</div>
<ul className="space-y-4 mb-8 text-sm text-textBody">
<li className="flex gap-3"><i className="w-4 h-4 text-accent" data-lucide="check"></i> White Labeling</li>
<li className="flex gap-3"><i className="w-4 h-4 text-accent" data-lucide="check"></i> Dedicated Account Mgr</li>
<li className="flex gap-3"><i className="w-4 h-4 text-accent" data-lucide="check"></i> Custom Integrations</li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-200 text-primary text-xs font-bold hover:bg-slate-50 transition-colors" onclick="openModal()">Contact Sales</button>
</div>
</div>
</section>

<section className="py-24 max-w-2xl mx-auto px-6 border-t border-slate-200">
<h2 className="text-2xl font-semibold text-primary mb-12 tracking-tight">FAQ</h2>
<div className="divide-y divide-slate-200">
<details className="group py-5">
<summary className="flex items-center justify-between cursor-pointer text-textBody font-medium hover:text-accent transition-colors">
                        How quickly can we get started?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="pt-4 pb-2 text-slate-500 text-sm leading-relaxed">
                        We can have your account configured and integrated with your CRM within 24-48 hours.
                    </div>
</details>
<details className="group py-5">
<summary className="flex items-center justify-between cursor-pointer text-textBody font-medium hover:text-accent transition-colors">
                        Does the AI sound robotic?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="pt-4 pb-2 text-slate-500 text-sm leading-relaxed">
                        No. PeakAgent uses advanced neural voice models to sound natural, pause correctly, and understand context.
                    </div>
</details>
<details className="group py-5">
<summary className="flex items-center justify-between cursor-pointer text-textBody font-medium hover:text-accent transition-colors">
                        Can I customize the scripts?
                        <i className="w-4 h-4 text-slate-400 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="pt-4 pb-2 text-slate-500 text-sm leading-relaxed">
                        Absolutely. We provide proven templates, but you can adjust the tone, knowledge base, and specific scripts to match your brand.
                    </div>
</details>
</div>
</section>

<section className="py-24 text-center px-6 relative overflow-hidden bg-primary">
<div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay"></div>
<div className="max-w-4xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Ready to become unstoppable?</h2>
<p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto font-light">
                    Book a strategy call to see exactly how many deals are hiding in your database right now.
                </p>
<button className="px-10 py-4 bg-accent text-white font-semibold rounded-full hover:bg-orange-600 transition-all shadow-[0_0_40px_rgba(232,131,58,0.3)]" onclick="openModal()">
                    Book Strategy Call
                </button>
</div>
</section>

<footer className="bg-primary pt-16 pb-8 px-6 text-xs border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">

<div className="flex items-center gap-2 mb-4">
<svg className="w-8 h-8" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M50 15L15 45V90H85V45L50 15Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="8"></path>
<rect height="16" stroke="#FFFFFF" strokeWidth="4" width="16" x="42" y="38"></rect>
<path d="M50 38V54" stroke="#FFFFFF" strokeWidth="2"></path>
<path d="M42 46H58" stroke="#FFFFFF" strokeWidth="2"></path>
<rect fill="#E8833A" height="15" width="10" x="25" y="70"></rect>
<rect fill="#E8833A" height="25" width="10" x="38" y="60"></rect>
<rect fill="#E8833A" height="35" width="10" x="51" y="50"></rect>
<rect fill="#E8833A" height="45" width="10" x="64" y="40"></rect>
</svg>
<span className="text-white font-bold text-lg tracking-tight">PeakAgent</span>
</div>
<p className="text-slate-400 leading-relaxed">The AI workforce for modern real estate teams. Scale without hiring.</p>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Product</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-accent transition-colors" href="#">Voice Agent</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Lead Nurture</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-accent transition-colors" href="#">About</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
<p>© 2026 PeakAgent Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>
</main>

<div aria-modal="true" className="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-300" id="leadModal">
<div className="absolute inset-0 bg-primary/80 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="relative min-h-screen md:min-h-0 flex items-center justify-center p-4">
<div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl transform transition-all scale-95 opacity-0 duration-300 border border-slate-100" id="modalCard">
<div className="p-6 md:p-8">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-semibold text-primary mb-1">See PeakAgent in Action</h3>
<p className="text-slate-500 text-sm">Schedule a live demo tailored to your team.</p>
</div>
<button className="text-slate-400 hover:text-primary transition-colors" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<form className="space-y-4" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] uppercase font-bold text-slate-500 mb-1.5">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-primary placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase font-bold text-slate-500 mb-1.5">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-primary placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-[10px] uppercase font-bold text-slate-500 mb-1.5">Work Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-primary placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm" required="" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] uppercase font-bold text-slate-500 mb-1.5">Lead Volume / Mo</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm" required="">
<option disabled="" selected="" value="">-</option>
<option value="&lt;50">&lt; 50</option>
<option value="50-200">50 - 200</option>
<option value="200+">200+</option>
</select>
</div>
<div>
<label className="block text-[10px] uppercase font-bold text-slate-500 mb-1.5">CRM</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm">
<option disabled="" selected="" value="">-</option>
<option value="FUB">Follow Up Boss</option>
<option value="GHL">GoHighLevel</option>
<option value="KV">kvCORE</option>
<option value="Other">Other</option>
</select>
</div>
</div>
<button className="w-full mt-2 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-slate-700 transition-all shadow-lg" type="submit">
                            Book Demo
                        </button>
</form>
</div>
</div>
</div>
</div>



    </>
  );
}

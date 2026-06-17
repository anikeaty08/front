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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        const toggleBtn = document.getElementById('billingToggle');
        const monthlyPrices = document.querySelectorAll('.price-monthly');
        const yearlyPrices = document.querySelectorAll('.price-yearly');
        let isYearly = false;

        toggleBtn.addEventListener('click', () => {
            isYearly = !isYearly;
            const knob = toggleBtn.querySelector('span');
            
            if (isYearly) {
                knob.classList.remove('translate-x-0');
                knob.classList.add('translate-x-5');
                monthlyPrices.forEach(el => el.classList.add('hidden'));
                yearlyPrices.forEach(el => el.classList.remove('hidden'));
            } else {
                knob.classList.remove('translate-x-5');
                knob.classList.add('translate-x-0');
                monthlyPrices.forEach(el => el.classList.remove('hidden'));
                yearlyPrices.forEach(el => el.classList.add('hidden'));
            }
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
      

<div className="bg-grain"></div>

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

<div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[60vw] h-[50vh] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>

<div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vh] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
<div className="absolute top-[5%] right-[20%] w-[35vw] h-[35vh] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>
<div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black to-transparent"></div>
</div>

<nav className="fixed w-full z-40 top-0 border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white border border-white/10 shadow-inner">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-white font-medium tracking-tight text-lg">Opsquake</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors duration-300" href="#testimonials">Stories</a>
<a className="hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition" href="#">Log in</a>
<a className="btn-titanium text-black text-xs font-semibold px-5 py-2 rounded-full tracking-wide" href="#contact">
                    Book Call
                </a>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-16 relative">

<section className="text-center max-w-6xl mr-auto mb-32 ml-auto pt-10 pr-6 pl-6">
<div className="fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-8 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-400"></span>
</span>
                    Powering 20+ Top Prop Firms
                </div>
</div>
<h1 className="fade-in-up md:text-8xl leading-[1] text-6xl font-medium text-white tracking-tighter mb-8" style={{animationDelay: '0.2s'}}>The OS for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">Modern Capital.</span></h1>
<p className="fade-in-up text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light" style={{animationDelay: '0.3s'}}>
                Stop hiring support agents. Opsquake is the full-stack operational layer for prop firms—handling disputes, KYC, and tickets so you just handle the liquidity.
            </p>
<div className="fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{animationDelay: '0.4s'}}>
<button className="btn-titanium h-14 px-8 rounded-full text-black font-semibold text-sm w-full sm:w-auto flex items-center justify-center gap-2">
                    Start Offloading Ops
                </button>
<button className="btn-glass h-14 px-8 rounded-full text-white font-medium text-sm w-full sm:w-auto flex items-center justify-center gap-2">
                    View Case Studies
                    <svg className="lucide lucide-chevron-right w-4 h-4 opacity-50" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="fade-in-up mt-24 pt-10 border-t border-white/5" style={{animationDelay: '0.5s'}}>
<p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-[0.2em] mb-8">Trusted by the heavyweights</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale mix-blend-plus-lighter">
<span className="text-xl font-bold tracking-tighter text-white">APEX</span>
<span className="text-xl font-bold tracking-tighter text-white">novafund</span>
<span className="text-xl font-bold tracking-tighter text-white">QUANTA</span>
<span className="text-xl font-bold tracking-tighter text-white">blueedge</span>
<span className="text-xl font-bold tracking-tighter text-white">VERTEX</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 shadow-2xl backdrop-blur-sm">
<div className="bg-black/40 p-10 flex flex-col items-center text-center group hover:bg-white/5 transition duration-500">
<div className="mb-4 p-3 rounded-full bg-white/5 border border-white/5 text-indigo-400 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-2">80%</h3>
<p className="text-sm text-zinc-500">Headcount Reduction</p>
</div>
<div className="bg-black/40 p-10 flex flex-col items-center text-center group hover:bg-white/5 transition duration-500">
<div className="mb-4 p-3 rounded-full bg-white/5 border border-white/5 text-indigo-400 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-2">&lt; 5min</h3>
<p className="text-sm text-zinc-500">Response Time</p>
</div>
<div className="bg-black/40 p-10 flex flex-col items-center text-center group hover:bg-white/5 transition duration-500">
<div className="mb-4 p-3 rounded-full bg-white/5 border border-white/5 text-indigo-400 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-2">0%</h3>
<p className="text-sm text-zinc-500">Chargeback Liability</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Operations on Autopilot</h2>
<p className="text-lg font-light text-zinc-400 max-w-2xl" style={{}}>We integrate seamlessly into your existing infrastructure. From Discord tickets to complex legal dispute resolution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-zinc-900/20 backdrop-blur-md border border-white/10 rounded-3xl p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:bg-zinc-900/40">
<div className="absolute -right-10 -top-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] group-hover:bg-indigo-600/30 transition duration-700"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-white/10 flex items-center justify-center mb-6 text-white shadow-lg">
<svg className="lucide lucide-headphones w-5 h-5" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">Omnichannel Support</h3>
<p className="text-zinc-400 leading-relaxed max-w-md mb-8">
                            We man the front lines. Our trained agents handle inquiries across Discord, Intercom, Email, and Telegram with rapid response times.
                        </p>
<div className="flex flex-wrap gap-3">
<span className="text-xs font-medium px-3 py-1.5 rounded-md bg-white/5 text-white border border-white/10">Discord</span>
<span className="text-xs font-medium px-3 py-1.5 rounded-md bg-white/5 text-white border border-white/10">Intercom</span>
<span className="text-xs font-medium px-3 py-1.5 rounded-md bg-white/5 text-white border border-white/10">Zendesk</span>
</div>
</div>
</div>

<div className="bg-zinc-900/20 backdrop-blur-md border border-white/10 rounded-3xl p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:bg-zinc-900/40">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-600/10 rounded-full blur-[60px]"></div>
<div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-white/10 flex items-center justify-center mb-6 text-white shadow-lg">
<svg className="lucide lucide-gavel w-5 h-5" data-lucide="gavel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path><path d="m16 16 6-6"></path><path d="m21.5 10.5-8-8"></path><path d="m8 8 6-6"></path><path d="m8.5 7.5 8 8"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Dispute Management</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Chargebacks and trader disputes are handled by our specialized legal-ops team, protecting your merchant accounts.
                    </p>
</div>

<div className="bg-zinc-900/20 backdrop-blur-md border border-white/10 rounded-3xl p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:bg-zinc-900/40">
<div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-600/10 rounded-full blur-[60px]"></div>
<div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-white/10 flex items-center justify-center mb-6 text-white shadow-lg">
<svg className="lucide lucide-server-cog w-5 h-5" data-lucide="server-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.852 14.772-.383.923"></path><path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path d="m13.148 9.228.383-.923"></path><path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 10.852.923-.383"></path><path d="m14.772 13.148.923.383"></path><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path><path d="M6 18h.01"></path><path d="M6 6h.01"></path><path d="m9.228 10.852-.923-.383"></path><path d="m9.228 13.148-.923.383"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Backend Operations</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        KYC verification, payout processing, and account breaching analysis. We handle the tedious logic of prop trading.
                    </p>
</div>

<div className="lg:col-span-2 bg-zinc-900/20 backdrop-blur-md border border-white/10 rounded-3xl p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:bg-zinc-900/40">
<div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-900/20 rounded-full blur-[100px]"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-white/10 flex items-center justify-center mb-6 text-white shadow-lg">
<svg className="lucide lucide-thumbs-up w-5 h-5" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">Reputation Management</h3>
<p className="text-zinc-400 leading-relaxed max-w-lg">
                            Trust is the currency of prop firms. We actively monitor Trustpilot, social media channels, and community forums to address negativity and highlight success stories.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 relative" id="testimonials">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[400px] bg-indigo-900/10 rounded-[100%] blur-[100px] pointer-events-none"></div>
<div className="relative z-10 mb-16 text-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">From the Founders</h2>
<p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">See why the world's leading prop firms trust Opsquake to manage their infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="group flex flex-col justify-between bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300 transform hover:-translate-y-1">
<div>

<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-indigo-500/10">
<div className="w-full h-full bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm font-bold">DK</div>
</div>
<div>
<div className="text-white font-medium text-base leading-none mb-1">David K.</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold">CEO, NovaFund</div>
</div>
</div>

<svg className="w-10 h-10 text-white/5 group-hover:text-white/10 transition-colors duration-300" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>

<blockquote className="text-xl md:text-2xl font-medium text-white leading-tight tracking-tight mb-8">
                            "We were drowning in Discord tickets. Opsquake dropped our response time to <span className="text-indigo-400">15 minutes</span>."
                        </blockquote>
</div>

<div className="pt-6 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-3 h-3 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">Verified Client</span>
</div>
<span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">• 5.0 Rating</span>
</div>
</div>

<div className="group flex flex-col justify-between bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300 transform md:-translate-y-4 shadow-2xl shadow-indigo-500/5 hover:-translate-y-5">
<div>
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 p-[1px] shadow-lg shadow-blue-500/10">
<div className="w-full h-full bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm font-bold">MT</div>
</div>
<div>
<div className="text-white font-medium text-base leading-none mb-1">Michael T.</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold">Founder, Vertex</div>
</div>
</div>
<svg className="w-10 h-10 text-white/5 group-hover:text-white/10 transition-colors duration-300" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<blockquote className="text-xl md:text-2xl font-medium text-white leading-tight tracking-tight mb-8">
                            "We recovered over <span className="text-blue-400">$50k in fraudulent chargebacks</span> in the first month. Their legal ops team is world-class."
                        </blockquote>
</div>
<div className="pt-6 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-3 h-3 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">Verified Client</span>
</div>
<span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">• 5.0 Rating</span>
</div>
</div>

<div className="group flex flex-col justify-between bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300 transform hover:-translate-y-1">
<div>
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 p-[1px] shadow-lg shadow-purple-500/10">
<div className="w-full h-full bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm font-bold">SR</div>
</div>
<div>
<div className="text-white font-medium text-base leading-none mb-1">Sarah R.</div>
<div className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold">COO, BlueEdge</div>
</div>
</div>
<svg className="w-10 h-10 text-white/5 group-hover:text-white/10 transition-colors duration-300" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<blockquote className="text-xl md:text-2xl font-medium text-white leading-tight tracking-tight mb-8">
                            "Scaling from 1k to 10k users is usually a nightmare. With Opsquake, we didn't feel a thing."
                        </blockquote>
</div>
<div className="pt-6 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-3 h-3 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">Verified Client</span>
</div>
<span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">• 5.0 Rating</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="pricing">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Transparent Pricing</h2>
<p className="text-zinc-400 text-lg font-light">Choose the level of operational support your firm needs.</p>

<div className="mt-8 flex items-center justify-center gap-4">
<span className="text-sm font-medium text-zinc-300">Monthly</span>
<button className="relative w-12 h-7 rounded-full bg-white/10 border border-white/10 transition-colors focus:outline-none hover:bg-white/20" id="billingToggle">
<span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 translate-x-0 shadow-sm"></span>
</button>
<span className="text-sm font-medium text-zinc-400">Yearly <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded ml-1 border border-indigo-500/20">SAVE 20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800 p-8 hover:border-zinc-600 transition duration-500 flex flex-col">
<h3 className="text-lg font-medium text-zinc-100 mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white tracking-tighter price-monthly">$1,999</span>
<span className="text-4xl font-medium text-white tracking-tighter price-yearly hidden">$1,599</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-400 mb-8 min-h-[40px]">Essential support for emerging prop firms.</p>
<a className="btn-glass w-full py-3 rounded-xl text-white text-sm font-medium text-center mb-8" href="#">Get Started</a>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Email &amp; Discord Support (12/5)
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Basic Dispute Handling
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Weekly Reports
                        </li>
</ul>
</div>

<div className="rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-indigo-500/30 p-8 shadow-[0_0_50px_-10px_rgba(99,102,241,0.2)] relative flex flex-col transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-indigo-500 text-white text-[10px] font-bold rounded-full tracking-widest uppercase shadow-lg shadow-indigo-500/20">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Scale</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white tracking-tighter price-monthly">$4,499</span>
<span className="text-4xl font-medium text-white tracking-tighter price-yearly hidden">$3,599</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-400 mb-8 min-h-[40px]">Complete operations handling for growing firms.</p>
<a className="btn-titanium w-full py-3 rounded-xl text-black text-sm font-semibold text-center mb-8" href="#">Contact Sales</a>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-indigo-400 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            24/7 Omnichannel Support
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-indigo-400 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Advanced Dispute &amp; Legal Ops
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-indigo-400 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            KYC &amp; Payout Processing
                        </li>
</ul>
</div>

<div className="rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800 p-8 hover:border-zinc-600 transition duration-500 flex flex-col">
<h3 className="text-lg font-medium text-zinc-100 mb-2">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white tracking-tighter">Custom</span>
</div>
<p className="text-sm text-zinc-400 mb-8 min-h-[40px]">Tailored solutions for established market leaders.</p>
<a className="btn-glass w-full py-3 rounded-xl text-white text-sm font-medium text-center mb-8" href="#">Book Call</a>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Dedicated Ops Manager
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Custom Workflow Integration
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            White-label Solutions
                        </li>
</ul>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-24">
<div className="relative rounded-[2.5rem] bg-zinc-900/50 border border-white/10 p-12 md:p-20 text-center overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent pointer-events-none"></div>
<h2 className="relative z-10 text-4xl md:text-6xl font-medium text-white tracking-tight mb-6">Ready to reclaim your time?</h2>
<p className="relative z-10 text-zinc-400 mb-10 max-w-lg mx-auto text-lg">Join the funding firms that have offloaded their operations to Opsquake.</p>
<div className="relative z-10 flex justify-center">
<button className="btn-titanium h-14 px-10 rounded-full text-black font-semibold text-sm flex items-center gap-2">
                        Book a Discovery Call
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black/60 backdrop-blur-xl pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 text-white mb-6" href="#">
<svg className="lucide lucide-activity w-5 h-5 text-white" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="font-medium tracking-tight text-lg">Opsquake</span>
</a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
                        The operating system for the world's fastest growing capital firms.
                    </p>
</div>
<div className="">
<h4 className="text-white text-sm font-medium mb-6">Services</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition" href="#">Support Ops</a></li>
<li><a className="hover:text-white transition" href="#">Dispute Mgmt</a></li>
<li><a className="hover:text-white transition" href="#">Risk Analysis</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white text-sm font-medium mb-6">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition" href="#">About</a></li>
<li><a className="hover:text-white transition" href="#">Customers</a></li>
<li><a className="hover:text-white transition" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
<p>© 2024 Opsquake Inc.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-white transition" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="hover:text-white transition" href="#"><svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}

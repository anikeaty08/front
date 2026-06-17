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
      

<div className="fixed inset-0 bg-noise pointer-events-none z-0"></div>
<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-500/20 blur-[120px] animate-orb-1"></div>
<div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-orange-400/15 blur-[150px] animate-orb-2"></div>
</div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700/20 via-zinc-900/0 to-zinc-900/0 pointer-events-none z-0"></div>

<nav className="relative z-50 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 grid grid-cols-3 items-center w-full">
<div className="flex items-center justify-center animate-subtle-fade col-start-2">
<span className="inline-flex items-center">
<img alt="GlobalHubWellFit Logo" className="h-8 w-auto object-contain rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf1ae4a3-9185-48e5-ad35-79a41b62711d_320w.png"/>
</span>
</div>
<div className="hidden sm:flex items-center justify-end gap-6 text-sm col-start-3">
<a className="text-zinc-300 hover:text-zinc-100 transition-colors" href="#how-it-works">
            How it works
          </a>
<a className="text-zinc-300 hover:text-zinc-100 transition-colors" href="#signup-form">
            Apply
          </a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden z-10">

<div className="absolute inset-0 -z-20 overflow-hidden">
<img alt="Hero background" className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity animate-slow-pan" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-zinc-900/80 to-zinc-900 -z-10"></div>
<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-60"></div>
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-6 flex flex-col justify-center">
<div className="animate-subtle-fade inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-orange-500/20 bg-orange-500/10 backdrop-blur-sm w-fit mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
<span className="text-xs font-medium text-orange-400/90 tracking-wide">
              Coaches Early Access
            </span>
</div>
<h1 className="animate-subtle-fade delay-100 text-5xl lg:text-6xl font-medium tracking-tighter text-zinc-100 leading-[1.1] mb-6">
            Get more clients &amp; sell your coaching.
          </h1>
<p className="animate-subtle-fade delay-200 leading-relaxed text-lg text-zinc-200 max-w-lg mb-8">We connect companies with wellness experts–from fitness coaches to psychologists for online and on-site sessions.</p>
<div className="animate-subtle-fade delay-300 flex flex-col sm:flex-row gap-6 text-sm text-zinc-200">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-300" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Steady client stream</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-300" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Global reach</span>
</div>
</div>
</div>

<div className="lg:col-span-6 animate-subtle-fade delay-300 relative" id="signup-form">

<div className="absolute -inset-4 bg-orange-500/20 blur-2xl rounded-full z-0 pointer-events-none"></div>
<div className="z-10 lg:p-8 bg-zinc-900/80 border-zinc-700/80 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0_40px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl">
<div className="mb-8">
<h3 className="text-xl font-medium text-zinc-100 tracking-tight mb-1">
                Claim your spot
              </h3>
<p className="text-sm text-zinc-300">
                Submit your details for immediate early access.
              </p>
</div>
<form action="https://formspree.io/f/myklpqpa" className="space-y-4" method="POST">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-300">
        First Name
      </label>
<input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-3 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-zinc-500 focus:bg-zinc-800 transition-colors" name="firstName" placeholder="First" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-300">
        Last Name
      </label>
<input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-3 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-zinc-500 focus:bg-zinc-800 transition-colors" name="lastName" placeholder="Last" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-300">Phone</label>
<input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-3 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-zinc-500 focus:bg-zinc-800 transition-colors" name="phone" placeholder="+971 50 000 0000" required="" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-300">Email</label>
<input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-md px-3 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-zinc-500 focus:bg-zinc-800 transition-colors" name="email" placeholder="coach@example.com" required="" type="email"/>
</div>

<input name="_subject" type="hidden" value="New lead from website"/>
<button className="w-full bg-zinc-100 hover:bg-white text-zinc-900 font-medium text-sm py-2.5 rounded-md transition-colors mt-4 flex items-center justify-center gap-2" type="submit">
    Get Early Access
    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<div className="border-y border-zinc-800/50 bg-zinc-900/40 py-6 relative z-10 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-300">
          Onboarding globally
        </span>
<div className="flex items-center gap-6 opacity-80 grayscale">
<span className="text-sm font-medium tracking-tighter text-zinc-200">
            NY Athletics
          </span>
<span className="text-sm font-medium tracking-tighter text-zinc-200">
            FitTech Corp
          </span>
<span className="text-sm font-medium tracking-tighter text-zinc-200">
            Global Wellness
          </span>
</div>
</div>
</div>

<section className="py-24 relative z-10" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 animate-subtle-fade">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4">
            What is GlobalHub WellFit?
          </h2>
<p className="text-base text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            The premier platform directly connecting sport coaches with
            companies and individuals actively looking for fitness and wellness
            services.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 animate-subtle-fade delay-100">

<div className="md:col-span-12 lg:col-span-7 bg-zinc-900/20 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 rounded-2xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative group">

<div className="absolute inset-0 -z-10 overflow-hidden">
<img alt="Corporate training" className="w-full h-full object-cover opacity-10 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-20 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent"></div>
</div>
<div className="mb-12 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-700/80 bg-zinc-900/80 backdrop-blur-md w-fit mb-6 shadow-sm">
<iconify-icon className="text-xs text-zinc-400" icon="solar:cpu-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-300 tracking-widest uppercase">
                  The Platform
                </span>
</div>
<h3 className="leading-snug text-2xl font-medium text-zinc-100 tracking-tight max-w-sm mb-4">
                The central hub for coaching demand.
              </h3>
<p className="leading-relaxed text-sm text-zinc-200 max-w-md drop-shadow-md">Upload your training videos in our platform with no limits and earn recurring revenue— upload once and get paid every time users and employees watch. Certified coaches can also boost their income through on-site sessions with GlobalHub WellFit’s corporate partners.</p>
</div>

<div className="flex items-center gap-4 relative z-10">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center shadow-lg relative z-[1]">
<iconify-icon className="text-sm text-zinc-400" icon="solar:buildings-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-zinc-900 flex items-center justify-center shadow-lg relative z-[2]">
<iconify-icon className="text-sm text-zinc-400" icon="solar:user-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-orange-500/20 border-2 border-zinc-900 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)] relative z-[3]">
<iconify-icon className="text-sm text-orange-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex z-[4] bg-zinc-100 w-10 h-10 border-zinc-900 border-2 rounded-full relative shadow-lg items-center justify-center overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
</div>
<div className="text-xs font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-700/50 px-2 py-1 rounded backdrop-blur-sm">
                Corporate &amp; Direct Match
              </div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-5 bg-zinc-900/20 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-10 relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700/80 shadow-sm flex items-center justify-center group-hover:border-zinc-600 transition-colors">
<iconify-icon className="text-lg text-zinc-300" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>

<div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-medium text-orange-400 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_5px_rgba(249,115,22,0.8)]"></span>
                New Match
              </div>
</div>
<div className="relative z-10">
<h4 className="text-base font-medium tracking-tight text-zinc-200 mb-2">
                Access new clients
              </h4>
<p className="text-sm text-zinc-300 leading-relaxed">
                Bypass the marketing grind. Get individuals and corporate teams
                routed directly to your pipeline.
              </p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-4 bg-zinc-900/20 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative group">

<div className="absolute inset-0 -z-10 overflow-hidden">
<img alt="Online Coaching" className="w-full h-full object-cover opacity-[0.07] mix-blend-luminosity group-hover:scale-105 group-hover:opacity-[0.15] transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/90 to-zinc-900/40"></div>
</div>
<div className="flex justify-between items-start mb-10 relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700/80 shadow-sm flex items-center justify-center group-hover:border-zinc-600 transition-colors">
<iconify-icon className="text-lg text-zinc-300" icon="solar:video-frame-linear"></iconify-icon>
</div>

<div className="flex items-center gap-1 p-0.5 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/80 text-[10px] font-medium text-zinc-400 w-fit">
<span className="bg-zinc-800 text-zinc-200 px-2.5 py-1 rounded-full shadow-sm">
                  Online
                </span>
<span className="px-2.5 py-1">On-site</span>
</div>
</div>
<div className="relative z-10">
<h4 className="text-base font-medium tracking-tight text-zinc-200 mb-2">
                Deliver sessions
              </h4>
<p className="text-sm text-zinc-300 leading-relaxed">
                Host online video coaching sessions or easily schedule on-site
                training.
              </p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-4 bg-zinc-900/20 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative group">
<div className="absolute right-0 bottom-0 w-32 h-32 bg-zinc-800/20 rounded-full blur-2xl group-hover:bg-zinc-700/30 transition-colors"></div>
<div className="flex justify-between items-start mb-10 relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700/80 shadow-sm flex items-center justify-center group-hover:border-zinc-600 transition-colors">
<iconify-icon className="text-lg text-zinc-300" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/80">
<iconify-icon className="text-orange-500 text-xs" icon="solar:document-text-linear"></iconify-icon>
<div className="h-1 w-6 bg-zinc-800 rounded-full"></div>
<div className="text-[10px] text-zinc-400 font-medium">Sale</div>
</div>
</div>
<div className="relative z-10">
<h4 className="text-base font-medium tracking-tight text-zinc-200 mb-2">
                Sell programs
              </h4>
<p className="text-sm text-zinc-300 leading-relaxed">
                List, manage, and seamlessly monetize your pre-built coaching
                programs passively.
              </p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-4 bg-zinc-900/20 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-10 relative z-10">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700/80 shadow-sm flex items-center justify-center group-hover:border-zinc-600 transition-colors">
<iconify-icon className="text-lg text-zinc-300" icon="solar:chart-square-linear"></iconify-icon>
</div>

<div className="flex items-end gap-1.5 h-6">
<div className="w-1.5 bg-zinc-800 rounded-sm h-[30%] group-hover:bg-zinc-700 transition-colors"></div>
<div className="w-1.5 bg-zinc-700 rounded-sm h-[50%] group-hover:bg-zinc-600 transition-colors"></div>
<div className="w-1.5 bg-zinc-600 rounded-sm h-[75%] group-hover:bg-zinc-500 transition-colors"></div>
<div className="w-1.5 bg-orange-500 rounded-sm h-[100%] shadow-[0_0_8px_rgba(249,115,22,0.4)]"></div>
</div>
</div>
<div className="relative z-10">
<h4 className="text-base font-medium tracking-tight text-zinc-200 mb-2">
                Grow your business
              </h4>
<p className="text-sm text-zinc-300 leading-relaxed">
                Turn your solo coaching practice into a highly profitable,
                scalable operation.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-800/50 relative z-10 bg-zinc-900/50 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-2xl mb-12 animate-subtle-fade">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-100 mb-4">
            The business of coaching is broken.
          </h2>
<p className="text-base text-zinc-200">
            You're a professional coach, yet you spend most of your time
            fighting algorithms and chasing unverified leads.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-px bg-zinc-800/40 rounded-xl overflow-hidden border border-zinc-800/40 animate-subtle-fade delay-100">
<div className="bg-zinc-900/90 backdrop-blur p-8 hover:bg-zinc-800/40 transition-colors group">
<iconify-icon className="text-2xl text-zinc-300 mb-6 group-hover:text-zinc-200 transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">
              Inconsistent clients
            </h3>
<p className="text-sm text-zinc-300 leading-relaxed">
              Relying on word-of-mouth or social media makes income entirely
              unpredictable.
            </p>
</div>
<div className="bg-zinc-900/90 backdrop-blur p-8 hover:bg-zinc-800/40 transition-colors group">
<iconify-icon className="text-2xl text-zinc-300 mb-6 group-hover:text-zinc-200 transition-colors" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">
              Marketing fatigue
            </h3>
<p className="text-sm text-zinc-300 leading-relaxed">
              Hours wasted generating content instead of actually delivering
              coaching sessions.
            </p>
</div>
<div className="bg-zinc-900/90 backdrop-blur p-8 hover:bg-zinc-800/40 transition-colors group">
<iconify-icon className="text-2xl text-zinc-300 mb-6 group-hover:text-zinc-200 transition-colors" icon="solar:graph-down-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">
              Hard to scale
            </h3>
<p className="text-sm text-zinc-300 leading-relaxed">
              Limited to your local area and the number of hours in a day. True
              growth stalls.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-800/50 bg-zinc-900 relative z-10 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 relative">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="animate-subtle-fade relative z-10">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-100 mb-6">
              The direct path to new revenue.
            </h2>
<p className="text-base text-zinc-200 max-w-md mb-10">GlobalHub WellFit removes friction by aggregating corporate demand and delivering verified leads directly to your dashboard.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-0.5 bg-zinc-800 border border-zinc-700 rounded p-1.5 shadow-sm">
<iconify-icon className="text-lg text-zinc-300" icon="solar:target-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium tracking-tight text-zinc-100 mb-1">
                    Verified Client Matches
                  </h4>
<p className="text-sm text-zinc-300">Users access your training videos from our platform and you get paid monthly through your dashboard.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-0.5 bg-zinc-800 border border-zinc-700 rounded p-1.5 shadow-sm">
<iconify-icon className="text-lg text-zinc-300" icon="solar:buildings-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-zinc-100 mb-1">
                    Corporate Contracts
                  </h4>
<p className="text-sm text-zinc-300">
                    Tap into high-value B2B wellness programs looking for
                    certified coaches to train their teams.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-0.5 bg-zinc-800 border border-zinc-700 rounded p-1.5 shadow-sm">
<iconify-icon className="text-lg text-zinc-300" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium tracking-tight text-zinc-100 mb-1">
                    Zero Marketing Spend
                  </h4>
<p className="text-sm text-zinc-300">
                    Stop running expensive ads and wasting time. We bring the
                    volume, you keep your focus.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative animate-subtle-fade delay-200 mt-12 lg:mt-0 lg:ml-8">

<div className="animate-orb-2 bg-gradient-to-tr from-orange-500/20 via-zinc-800/10 to-transparent rounded-full absolute top-[-10%] right-[-10%] bottom-[-10%] left-[-10%] blur-3xl"></div>

<div className="relative bg-zinc-800/40 border border-zinc-700/80 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
<div className="bg-zinc-900 border border-zinc-700/50 rounded-xl overflow-hidden">

<div className="border-b border-zinc-800/50 px-4 py-3 flex items-center justify-between bg-zinc-900/30">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
</div>
<div className="text-[10px] font-medium text-zinc-300 uppercase tracking-widest flex items-center gap-1.5">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
                    Coach Dashboard
                  </div>
</div>

<div className="p-6 space-y-5 relative">

<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

<div className="flex justify-between items-end mb-2 border-b border-zinc-800/50 pb-5 relative z-10">
<div className="">
<div className="text-xs text-zinc-300 mb-1">
                        Incoming Requests
                      </div>
<div className="text-3xl font-medium text-zinc-100">
                        14
                        <span className="text-lg text-zinc-300">pending</span>
</div>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-orange-400 bg-orange-500/10 px-2 py-1 rounded-md border border-orange-500/20 shadow-sm backdrop-blur-sm">
<iconify-icon icon="solar:trend-up-linear"></iconify-icon>
                      High Demand
                    </div>
</div>

<div className="space-y-3 relative z-10">

<div className="flex flex-col sm:flex-row sm:items-center group hover:bg-zinc-700/60 transition-colors cursor-pointer bg-zinc-800/60 border-zinc-700/50 border rounded-lg pt-3.5 pr-3.5 pb-3.5 pl-3.5 backdrop-blur-sm gap-x-4 gap-y-4 justify-between">
<div className="flex items-center gap-3">
<div className="flex shrink-0 bg-zinc-800 w-10 h-10 rounded-full items-center justify-center">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:buildings-bold"></iconify-icon>
</div>
<div className="">
<div className="flex text-sm font-medium text-zinc-200 gap-x-2 gap-y-2 items-center">Vyntra LLC</div>
<div className="text-xs text-zinc-300 mt-0.5">
                            Strength Training • 2x / week
                          </div>
</div>
</div>
<button className="text-xs bg-zinc-100 text-zinc-900 px-4 py-2 rounded-md font-medium hover:bg-white transition-colors w-full sm:w-auto shadow-sm">
                        Accept Client
                      </button>
</div>

<div className="bg-zinc-800/60 border border-zinc-700/50 p-3.5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-zinc-700/60 transition-colors cursor-pointer relative overflow-hidden backdrop-blur-sm">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
<div className="flex pl-2 gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
<iconify-icon className="text-orange-500 text-lg" icon="solar:buildings-bold"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-zinc-200 flex items-center gap-2">
                            Vanguard Tech
                            <span className="text-[9px] bg-orange-500/20 text-orange-400 border border-orange-500/20 px-1.5 py-0.5 rounded uppercase tracking-wide">
                              Corporate
                            </span>
</div>
<div className="text-xs text-zinc-300 mt-0.5">Team Wellness • On-site • 40 pax</div>
</div>
</div>
<button className="text-xs bg-orange-500 text-zinc-950 px-4 py-2 rounded-md font-medium hover:bg-orange-400 transition-colors w-full sm:w-auto shadow-[0_0_15px_-3px_rgba(249,115,22,0.4)]">
                        Review Contract
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative overflow-hidden z-10 border-t border-zinc-900/50">

<div className="absolute inset-0 -z-20 overflow-hidden bg-zinc-900">
<img alt="Premium gym environment" className="w-full h-full object-cover opacity-20 mix-blend-luminosity animate-slow-pan" src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-zinc-900/90 to-zinc-900 -z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_top,white,transparent)] opacity-40 -z-10"></div>
<div className="animate-subtle-fade text-center max-w-3xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-zinc-100 mb-6 leading-tight drop-shadow-md">
          Stop searching.
          <br/>
<span className="text-zinc-300">Start coaching.</span>
</h2>
<p className="leading-relaxed text-lg text-zinc-200 max-w-xl mr-auto mb-10 ml-auto drop-shadow-sm">wellness experts—from fitness coaches to psychologists. +30 speciality available in our platform. Claim your early access spot today and let high-intent clients come to you.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm px-8 py-3.5 rounded-md transition-colors shadow-lg shadow-white/5" href="#signup-form">
            Apply for Access
            <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-950/50 hover:bg-zinc-900 text-zinc-200 font-medium text-sm px-8 py-3.5 rounded-md border border-zinc-700 transition-colors backdrop-blur-md" href="#how-it-works">
            Learn More
          </a>
</div>
<p className="mt-6 text-xs text-zinc-400 font-medium">
          Spots are limited for the current onboarding cohort.
        </p>
</div>
</section>

<footer className="border-t border-zinc-800 bg-zinc-900/90 backdrop-blur-xl pt-16 pb-8 relative z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<span className="text-xl font-medium tracking-tighter text-zinc-100 mb-4 block">
              GlobalHubWellFit
            </span>
<p className="leading-relaxed text-sm text-zinc-300 max-w-sm mb-6">The definitive platform bridging wellness experts—from fitness coaches to psychologists with direct consumer and corporate wellness demand globally.</p>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
<a className="hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h5 className="text-sm font-medium text-zinc-100 mb-4">Platform</h5>
<ul className="space-y-3 text-sm text-zinc-300">
<li className="">
<a className="hover:text-zinc-100 transition-colors" href="#">
                  For Coaches
                </a>
</li>
<li className="">
<a className="hover:text-zinc-100 transition-colors" href="#">
                  For Companies
                </a>
</li>
<li className="">
</li>
</ul>
</div>
<div className="">
<ul className="space-y-3 text-sm text-zinc-300">
<li className="">
</li>
<li className="">
</li>
<li className="">
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">© 2026 GlobalHub WellFit Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span>Designed for</span>
<iconify-icon className="text-sm" icon="solar:dumbbell-linear"></iconify-icon>
<span className="">Coaches</span>
</div>
</div>
</div>
</footer>

    </>
  );
}

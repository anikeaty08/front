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
      

<div className="fixed inset-0 bg-grain pointer-events-none z-[1] opacity-50"></div>
<div className="fixed inset-0 pattern-star pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 animate-fade-up">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-sm/50">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-700 rounded-lg flex items-center justify-center text-white rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out shadow-lg shadow-orange-500/30">
<iconify-icon className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" icon="solar:infinity-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl tracking-tighter font-semibold font-serif text-stone-900">NURIX</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-orange-600 transition-colors" href="#">Platform</a>
<a className="hover:text-orange-600 transition-colors" href="#">Solutions</a>
<a className="hover:text-orange-600 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Sign in</a>
<a className="bg-stone-900 hover:bg-amber-700 text-white text-xs sm:text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group" href="#">
<span>Get Started</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</nav>

<main className="lg:pt-40 lg:pb-32 z-10 pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-800 text-xs font-medium mb-8 animate-fade-up shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
</span>
                    The Geometry of Intelligence
                </div>
<h1 className="sm:text-6xl lg:text-7xl leading-[1.1] animate-fade-up delay-100 text-5xl font-medium text-stone-900 tracking-tight mb-6">
                    Wisdom in <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-amber-800 italic pr-2">Every Decision.</span>
</h1>
<p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-10 max-w-lg animate-fade-up delay-200">
                    Harness the clarity of ancient precision met with modern AI. Nurix transforms complex chaos into elegant, actionable foresight.
                </p>
<div className="flex flex-wrap items-center gap-4 animate-fade-up delay-300">
<button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-xl font-medium shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2">
<iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
<span>Start Free Trial</span>
</button>
<button className="px-8 py-3.5 rounded-xl font-medium text-stone-700 hover:bg-white border border-transparent hover:border-stone-200 transition-all duration-300 flex items-center gap-2">
<iconify-icon className="text-orange-600" icon="solar:play-circle-linear" width="20"></iconify-icon>
<span>Watch Demo</span>
</button>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center animate-fade-up delay-200">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-200/20 to-amber-100/20 rounded-full blur-3xl animate-pulse"></div>
<div className="relative w-full max-w-lg glass-panel bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-6 lg:p-8 shadow-2xl shadow-orange-900/5 animate-float">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 rounded-t-2xl"></div>
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-stone-900 font-serif font-semibold text-base">Revenue Forecast</h3>
<p className="text-stone-500 text-xs tracking-wide">AI CONFIDENCE: 98.4%</p>
</div>
</div>
</div>

<div className="relative h-48 w-full mb-6 bg-gradient-to-b from-stone-50/50 to-transparent rounded-lg border border-stone-100/50 p-4">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none">
<path d="M0,140 C60,130 120,80 180,90 C240,100 300,40 360,30 C400,20 440,50 480,10" fill="none" stroke="url(#gradientLine)" strokeLinecap="round" strokeWidth="2.5"></path>
<defs>
<lineargradient id="gradientLine" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#ea580c', stopOpacity: '0.6'}}></stop>
<stop offset="100%" style={{stopColor: '#b45309', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>

<circle cx="360" cy="30" fill="#fff" r="4" stroke="#b45309" strokeWidth="2"></circle>
<g transform="translate(330, -15)">
<rect fill="#292524" height="24" rx="4" width="60"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="10" font-weight="600" text-anchor="middle" x="30" y="16">PEAK</text>
</g>
</svg>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-white/50 border border-white shadow-sm">
<span className="block text-stone-400 text-xs font-semibold uppercase tracking-wider mb-1">Growth</span>
<span className="text-2xl font-serif font-semibold text-stone-800">+24.5%</span>
</div>
<div className="p-4 rounded-xl bg-orange-600 text-white shadow-lg shadow-orange-600/20 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<span className="block text-orange-100 text-xs font-semibold uppercase tracking-wider mb-1">Retention</span>
<span className="text-2xl font-serif font-semibold">94.2%</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-stone-200 bg-white/50 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-semibold text-stone-400 uppercase tracking-[0.2em] mb-8">Trusted by Visionaries</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale mix-blend-multiply">

<span className="text-xl font-bold tracking-tighter text-stone-800 font-serif">ACME<span className="text-orange-600">.</span>CORP</span>
<span className="text-xl font-bold tracking-tighter text-stone-800 font-serif">KHALIDA</span>
<span className="text-xl font-bold tracking-tighter text-stone-800 font-serif">VENTURA</span>
<span className="text-xl font-bold tracking-tighter text-stone-800 font-serif">OASIS<span className="text-xs align-top">™</span></span>
<span className="text-xl font-bold tracking-tighter text-stone-800 font-serif">HORIZON</span>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">Architects of Intelligence</h2>
<p className="text-stone-600">We weave together data streams into a single tapestry of truth, allowing you to see the patterns others miss.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 relative group overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:pie-chart-3-linear" width="64"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-3">Predictive Alchemy</h3>
<p className="text-stone-500 text-sm leading-relaxed">Transmute raw historical data into gold-standard future forecasts with 99.9% accuracy.</p>
</div>

<div className="glass-card rounded-2xl p-8 relative group overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:shield-check-linear" width="64"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:lock-password-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-3">Sovereign Security</h3>
<p className="text-stone-500 text-sm leading-relaxed">Fortified with enterprise-grade encryption, your data remains your kingdom's secret.</p>
</div>

<div className="glass-card rounded-2xl p-8 relative group overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="64"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:connection-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-3">Seamless Unity</h3>
<p className="text-stone-500 text-sm leading-relaxed">Connects effortlessly with your existing stack, creating a unified mosaic of operations.</p>
</div>

<div className="glass-card rounded-2xl p-8 md:col-span-2 lg:col-span-1 relative group overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:cpu-bolt-linear" width="64"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-medium text-stone-900 mb-3">Instant Insight</h3>
<p className="text-stone-500 text-sm leading-relaxed">Real-time processing that feels faster than thought itself.</p>
</div>

<div className="md:col-span-2 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-white p-8 relative overflow-hidden flex flex-col justify-center">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]"></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<h3 className="text-2xl font-serif font-medium text-white mb-3">Global Infrastructure</h3>
<p className="text-stone-300 text-sm leading-relaxed mb-6">Built on a foundation as enduring as the pyramids. Our distributed network ensures 99.99% uptime worldwide.</p>
<a className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium" href="#">
                                Explore the Network <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="w-full md:w-1/2 h-32 md:h-full flex items-center justify-center">

<div className="w-full h-full relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-orange-500/30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-orange-500/50 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,1)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-900 relative overflow-hidden text-white">

<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
<svg height="100%" width="100%">
<pattern height="100" id="motif" patternunits="userSpaceOnUse" width="100" x="0" y="0">
<path d="M50 0L100 50L50 100L0 50Z" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
<rect fill="url(#motif)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                        Unearth Hidden 
                        <span className="text-orange-500">Value.</span>
</h2>
<p className="text-stone-400 text-lg mb-8 leading-relaxed">
                        Like an archaeologist sifting through sand to find gold, Nurix identifies the microscopic signals in your data that lead to monumental growth.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 mt-1">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-stone-100">Automated Discovery</h4>
<p className="text-sm text-stone-500 mt-1">AI that works while you sleep.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 mt-1">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-stone-100">Ancestral Algorithms</h4>
<p className="text-sm text-stone-500 mt-1">Mathematical principles refined over centuries.</p>
</div>
</li>
</ul>
</div>

<div className="relative h-[500px] w-full">

<div className="absolute inset-0 border-2 border-orange-500/30 rounded-t-full top-4 left-4 z-0"></div>

<div className="absolute inset-0 bg-stone-800 rounded-t-full overflow-hidden shadow-2xl z-10 group">

<img alt="Abstract Sand Dunes" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl">
<div className="flex justify-between items-end">
<div>
<p className="text-stone-300 text-xs mb-1">Efficiency Gain</p>
<p className="text-3xl font-serif text-white">400%</p>
</div>
<div className="h-10 w-20 flex items-end gap-1">
<div className="w-full bg-orange-500/50 h-[40%] rounded-sm"></div>
<div className="w-full bg-orange-500/70 h-[60%] rounded-sm"></div>
<div className="w-full bg-orange-500 h-[100%] rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="mb-8 flex justify-center text-orange-500">
<iconify-icon icon="solar:quote-up-bold" width="40"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight mb-8">
                "Nurix didn't just organize our data. It revealed a path forward we hadn't seen, like a lighthouse in a storm."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden border border-stone-200">
<img alt="CEO" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=35"/>
</div>
<div className="text-left">
<p className="text-sm font-bold text-stone-900">Amira El-Sayed</p>
<p className="text-xs text-stone-500">CTO, Solara Enterprises</p>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-stone-200 rounded-full opacity-30 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-orange-200 rounded-full opacity-30 pointer-events-none rotate-45"></div>
</section>

<section className="pb-24 px-6">
<div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-600 to-amber-700 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-700/30">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M10 0L20 10L10 20L0 10Z\\' fill=\\'%23fff\\'/%3E%3C/svg%3E\')', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Begin Your Journey to Clarity</h2>
<p className="text-orange-100 text-lg mb-10">Join over 2,000 visionary companies transforming their decision-making process today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-orange-700 px-8 py-4 rounded-full font-bold hover:bg-stone-50 transition-colors shadow-lg">
                        Get Started Now
                    </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white border border-white/30 hover:bg-white/10 transition-colors">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center text-white text-xs">
<iconify-icon icon="solar:infinity-linear"></iconify-icon>
</div>
<span className="font-serif font-bold text-stone-900 tracking-tight">NURIX</span>
</a>
<p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-6">
                        Merging ancient wisdom with modern intelligence to illuminate the path forward for the world's most ambitious enterprises.
                    </p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-orange-600 transition-colors" href="#"><iconify-icon icon="simple-icons:x" width="18"></iconify-icon></a>
<a className="hover:text-orange-600 transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon></a>
<a className="hover:text-orange-600 transition-colors" href="#"><iconify-icon icon="simple-icons:github" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Intelligence</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2024 Nurix Inc. All rights reserved.</p>
<div className="flex gap-6">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Systems Operational</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 via-amber-600 to-stone-800"></div>
</footer>

    </>
  );
}

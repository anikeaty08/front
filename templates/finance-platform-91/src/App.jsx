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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                FINANCE.
            </a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#process">Process</a>
<a className="hover:text-white transition-colors duration-200" href="#integration">Integration</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors tracking-tight" href="#">
                    Get Started
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-400 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Now available in version 2.0
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                    Financial clarity<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 to-neutral-600">for the modern era.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Manage corporate cards, expenses, and travel with a single solution. Real-time visibility and control for forward-thinking teams.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black h-12 px-8 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                        Start Now
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full text-sm font-medium border border-neutral-800 hover:bg-neutral-900 transition-all flex items-center justify-center gap-2">
                        Contact Sales
                    </button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl">
<div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl shadow-white/5">
<div className="bg-neutral-900/50 rounded-lg p-6 md:p-10 border border-white/5 aspect-[16/9] md:aspect-[21/9] flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="space-y-4">
<div className="h-8 w-32 bg-white/10 rounded animate-pulse"></div>
<div className="h-4 w-48 bg-white/5 rounded"></div>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="solar:bell-linear"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-4 gap-4 mt-12">
<div className="h-24 bg-white/5 rounded border border-white/5"></div>
<div className="h-24 bg-white/5 rounded border border-white/5"></div>
<div className="h-24 bg-white/5 rounded border border-white/5"></div>
<div className="h-24 bg-white/5 rounded border border-white/5 hidden md:block"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-950/30">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-neutral-500 mb-8 uppercase tracking-widest font-medium">Trusted by leading companies</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">

<span className="text-xl font-bold tracking-tight">ACME</span>
<span className="text-xl font-bold tracking-tight italic">Global</span>
<span className="text-xl font-bold tracking-tight">NEXUS</span>
<span className="text-xl font-bold tracking-tight">Stark</span>
<span className="text-xl font-bold tracking-tight">Vortex</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-4">Unified Financial Services</h2>
<p className="text-neutral-400 max-w-xl text-lg font-light">Everything you need to manage your business finances, all in one place. No more switching between apps.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:card-send-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Corporate Cards</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Issue physical and virtual cards instantly. Set limits and track spending in real-time.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:bill-list-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Expense Management</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Automated expense reports. Receipt matching and categorization happen automatically.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/20 border border-white/5 hover:border-white/10 hover:bg-neutral-900/40 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Financial Forecasting</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Predict future cash flow with AI-driven insights based on historical data patterns.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">Built for scale,<br/>designed for speed.</h2>
<div className="space-y-8 mt-10">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Enterprise-grade Security</h4>
<p className="text-sm text-neutral-400 leading-relaxed">SOC2 Type II certified. Your data is encrypted at rest and in transit.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Global Payments</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Send and receive payments in over 150 currencies with competitive exchange rates.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white">
<iconify-icon icon="solar:smartphone-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Mobile First</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Manage everything on the go with our top-rated iOS and Android applications.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-900/20 blur-3xl rounded-full opacity-30"></div>
<div className="relative bg-neutral-900 border border-white/10 rounded-2xl p-6 md:p-8">
<div className="flex justify-between items-center mb-8">
<span className="text-sm text-neutral-400">Monthly Spending</span>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-white"></span>
<span className="w-2 h-2 rounded-full bg-neutral-700"></span>
</div>
</div>
<div className="h-64 flex items-end justify-between gap-2 md:gap-4">
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%] hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[60%] hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%] hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[80%] hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-white rounded-t-sm h-[65%] shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[45%] hover:bg-white/20 transition-colors"></div>
</div>
<div className="flex justify-between mt-4 text-xs text-neutral-500 font-mono">
<span>MON</span>
<span>TUE</span>
<span>WED</span>
<span>THU</span>
<span className="text-white">FRI</span>
<span>SAT</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden" id="integration">
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-4">Seamless Integration</h2>
<p className="text-neutral-400 text-lg font-light">Connect with the tools you already use.</p>
</div>
<div className="flex justify-center items-center">
<div className="relative w-full max-w-4xl h-[300px] flex items-center justify-center">

<div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent top-1/2 -translate-y-1/2"></div>
<div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent left-1/2 -translate-x-1/2"></div>

<div className="relative z-10 w-24 h-24 bg-black border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl shadow-white/5">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
<div className="w-4 h-4 bg-black rounded-sm"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 p-3 bg-neutral-900 border border-white/10 rounded-xl">
<iconify-icon icon="logos:slack-icon" width="24"></iconify-icon>
</div>
<div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 p-3 bg-neutral-900 border border-white/10 rounded-xl">
<iconify-icon icon="logos:notion-icon" width="24"></iconify-icon>
</div>
<div className="absolute top-3/4 right-1/3 -translate-x-1/2 -translate-y-1/2 p-3 bg-neutral-900 border border-white/10 rounded-xl">
<iconify-icon icon="logos:google-drive" width="24"></iconify-icon>
</div>
<div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 p-3 bg-neutral-900 border border-white/10 rounded-xl">
<iconify-icon icon="logos:stripe" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="process">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-16 text-center">How it works</h2>
<div className="space-y-12 relative">

<div className="absolute left-6 md:left-[27px] top-4 bottom-4 w-px bg-neutral-800"></div>

<div className="relative pl-20 md:pl-24">
<div className="absolute left-2 md:left-[14px] top-0 w-8 h-8 md:w-[26px] md:h-[26px] rounded-full bg-black border border-neutral-700 text-xs flex items-center justify-center text-white font-mono z-10">1</div>
<h3 className="text-xl font-medium text-white mb-2">Create your account</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-md">Sign up in minutes. Verify your business identity and link your primary bank account securely.</p>
</div>

<div className="relative pl-20 md:pl-24">
<div className="absolute left-2 md:left-[14px] top-0 w-8 h-8 md:w-[26px] md:h-[26px] rounded-full bg-black border border-neutral-700 text-xs flex items-center justify-center text-white font-mono z-10">2</div>
<h3 className="text-xl font-medium text-white mb-2">Issue cards &amp; set limits</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-md">Create virtual cards for your team instantly. Define spending limits per category or per user.</p>
</div>

<div className="relative pl-20 md:pl-24">
<div className="absolute left-2 md:left-[14px] top-0 w-8 h-8 md:w-[26px] md:h-[26px] rounded-full bg-white border border-white text-xs flex items-center justify-center text-black font-mono z-10">3</div>
<h3 className="text-xl font-medium text-white mb-2">Automate finances</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-md">Watch as transactions are categorized, receipts are matched, and reports are generated automatically.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="p-6 rounded-2xl bg-neutral-900/10 border border-white/5">
<div className="text-4xl font-medium text-white mb-2 tracking-tighter">$10B+</div>
<div className="text-sm text-neutral-500">Transactions Processed</div>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/10 border border-white/5">
<div className="text-4xl font-medium text-white mb-2 tracking-tighter">99.99%</div>
<div className="text-sm text-neutral-500">Uptime Guarantee</div>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/10 border border-white/5">
<div className="text-4xl font-medium text-white mb-2 tracking-tighter">0%</div>
<div className="text-sm text-neutral-500">Fraud Liability</div>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/10 border border-white/5">
<div className="text-4xl font-medium text-white mb-2 tracking-tighter">24/7</div>
<div className="text-sm text-neutral-500">Expert Support</div>
</div>
</div>
<div className="mt-20 text-center">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-6">Ready to upgrade your finance stack?</h2>
<div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-neutral-700 to-neutral-800">
<div className="bg-black rounded-full px-1 py-1 flex items-center gap-2">
<input className="bg-transparent border-none focus:ring-0 text-white placeholder-neutral-500 text-sm h-10 px-4 w-64 outline-none" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black text-sm font-semibold h-10 px-6 rounded-full hover:bg-neutral-200 transition-colors">
                                Get Started
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<a className="text-white text-md font-semibold tracking-tighter block mb-4" href="#">FINANCE.</a>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                        Designing the future of corporate finance with precision and elegance.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2024 Finance Platform Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

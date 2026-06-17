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
      

<nav className="fixed top-6 left-0 right-0 z-50 px-4">
<div className="max-w-[1200px] mx-auto bg-white/95 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 py-3 pl-8 pr-3 flex justify-between items-center transition-all duration-300">

<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 bg-[#1a0b2e] rounded-full flex items-center justify-center text-[#a3e635]">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl font-display font-bold tracking-tight text-[#1a0b2e]">syncgram</span>
</a>

<div className="hidden lg:flex items-center gap-10">
<a className="text-[0.925rem] font-medium text-slate-600 hover:text-[#1a0b2e] transition-colors" href="#products">Products</a>
<a className="text-[0.925rem] font-medium text-slate-600 hover:text-[#1a0b2e] transition-colors" href="#resources">Resources</a>
<a className="text-[0.925rem] font-medium text-slate-600 hover:text-[#1a0b2e] transition-colors" href="#pricing">Pricing</a>
<a className="text-[0.925rem] font-medium text-slate-600 hover:text-[#1a0b2e] transition-colors" href="#developers">Developers</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-[0.925rem] font-semibold text-[#1a0b2e] border border-slate-200 hover:bg-slate-50 transition-colors" href="#login">
                    Log In
                </a>
<a className="inline-flex px-6 py-2.5 rounded-full text-[0.925rem] font-semibold text-white bg-[#1a0b2e] hover:bg-[#2e1052] transition-colors shadow-lg shadow-purple-900/20" href="#">
                    Get Started
                </a>

<button className="lg:hidden ml-2 text-slate-900 p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<main className="pt-28 px-4 pb-20">

<div className="max-w-[1360px] mx-auto bg-[#1a0b2e] rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-purple-900/10">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>
<div className="absolute inset-0 hero-pattern opacity-10 pointer-events-none"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center p-12 md:p-20 lg:py-28 lg:px-24">

<div className="max-w-xl">
<h1 className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] font-bold tracking-tight mb-8">
                        Fraudsters don't sleep, <span className="text-[#a3e635]">neither do we.</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium mb-10 max-w-lg">
                        We automate your Telegram subscriptions so you never have to ask for a screenshot again. Monetize your community securely and effortlessly.
                    </p>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 max-w-md">
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
<i className="text-red-400 w-5 h-5" data-lucide="shield-alert"></i>
</div>
<div>
<h3 className="font-bold text-white text-sm mb-1">Manual verification is risky</h3>
<p className="text-slate-400 text-xs leading-relaxed">Stop checking payments manually. Use Syncgram to automate access.</p>
</div>
</div>
<form className="flex gap-2 w-full">
<input className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/10 focus:outline-none focus:border-[#a3e635] focus:bg-white/20 transition-all text-white placeholder-slate-400 text-sm" placeholder="Enter your email" required="" type="email"/>
<button className="bg-[#a3e635] text-[#1a0b2e] px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap hover:bg-[#b5f050] transition-colors flex items-center gap-2" type="submit">
                                Start Free
                                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>

<div className="relative hidden lg:block">

<div className="absolute -top-12 -right-12 w-64 h-64 bg-[#a3e635] rounded-full blur-[80px] opacity-20"></div>
<div className="relative bg-gradient-to-b from-white/10 to-transparent p-1 rounded-[2.5rem]">
<div className="bg-[#1a0b2e] border border-white/10 rounded-[2.3rem] overflow-hidden relative aspect-square">
<img alt="Dashboard Preview" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent"></div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-2xl shadow-2xl p-6 text-slate-900 transform hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
<i className="text-indigo-600 w-5 h-5" data-lucide="user-check"></i>
</div>
<div>
<div className="text-sm font-bold">New Subscriber</div>
<div className="text-xs text-slate-500">Just now • Premium Plan</div>
</div>
</div>
<span className="text-emerald-600 font-bold text-sm">+$49.00</span>
</div>
<div className="space-y-3">
<div className="h-2 bg-slate-100 rounded-full w-full">
<div className="h-full bg-[#a3e635] rounded-full w-[75%]"></div>
</div>
<div className="flex justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
<span>Monthly Goal</span>
<span className="text-slate-900">75%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="py-32 px-4 max-w-5xl mx-auto text-center">
<h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-[#1a0b2e] mb-8 leading-[1.1]">
                Boost <span className="relative inline-block px-2">revenue<svg className="absolute inset-0 w-full h-full -z-10 text-[#a3e635]" preserveaspectratio="none" viewbox="0 0 100 100"><path d="M0,50 Q50,0 100,50 Q50,100 0,50 Z" fill="currentColor" opacity="0.4" transform="scale(1.1, 0.8)"></path></svg></span> using our suite of seamless &amp; secure solutions.
            </h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                Connect your Telegram channel, set your price, and let us handle the rest. We verify payments and manage access instantly.
            </p>
</section>

<div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-[4rem] -mr-8 -mt-8 z-0"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-8 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="globe"></i>
</div>
<h3 className="font-display text-2xl font-bold text-[#1a0b2e] mb-4">Global Reach</h3>
<p className="text-slate-500 font-medium leading-relaxed">
                        Accept payments from anywhere in the world. Crypto, Credit Cards, or Apple Pay.
                    </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex items-center text-sm font-bold text-orange-600">
                    Learn more <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group bg-[#1a0b2e] rounded-[2.5rem] p-10 border border-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden md:col-span-2 text-white">
<div className="absolute inset-0 bg-gradient-to-r from-[#2e1052] to-[#1a0b2e]"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-[#a3e635] rounded-full blur-[80px] opacity-10"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-10 h-full">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-[#a3e635] mb-6">
<span className="w-2 h-2 rounded-full bg-[#a3e635]"></span>
                            LIVE ANALYTICS
                        </div>
<h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Real-time Insights</h3>
<p className="text-slate-300 font-medium leading-relaxed mb-8 max-w-md">
                            Track your MRR, churn rate, and subscriber growth in one beautiful dashboard. Make data-driven decisions.
                        </p>
<button className="bg-white text-[#1a0b2e] px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors">
                            View Demo
                        </button>
</div>
<div className="flex-1 w-full relative">

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
<div className="flex items-end gap-2 h-32 w-full">
<div className="w-full bg-white/10 rounded-t-lg h-[40%]"></div>
<div className="w-full bg-white/10 rounded-t-lg h-[60%]"></div>
<div className="w-full bg-white/10 rounded-t-lg h-[30%]"></div>
<div className="w-full bg-white/10 rounded-t-lg h-[70%]"></div>
<div className="w-full bg-[#a3e635] rounded-t-lg h-[85%] relative shadow-[0_0_20px_rgba(163,230,53,0.3)]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden md:col-span-2">
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-50 to-transparent opacity-50"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
<div>
<div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="shield-check"></i>
</div>
<h3 className="font-display text-2xl font-bold text-[#1a0b2e] mb-4">Bank-Grade Security</h3>
<p className="text-slate-500 font-medium leading-relaxed mb-6">
                            We use standard encryption to protect your data and your subscribers' information. Your peace of mind is our priority.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<i className="w-5 h-5 text-blue-500 fill-blue-50" data-lucide="check-circle-2"></i>
                                AES-256 Encryption
                            </li>
<li className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<i className="w-5 h-5 text-blue-500 fill-blue-50" data-lucide="check-circle-2"></i>
                                PCI DSS Compliant
                            </li>
</ul>
</div>
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
<span className="text-xs font-bold text-slate-400 uppercase">Security Status</span>
<span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">
<i className="w-4 h-4 text-slate-600" data-lucide="lock"></i>
</div>
<div className="text-sm">
<div className="font-bold text-slate-900">Payment Gateway</div>
<div className="text-slate-500">Secured via Stripe</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">
<i className="w-4 h-4 text-slate-600" data-lucide="fingerprint"></i>
</div>
<div className="text-sm">
<div className="font-bold text-slate-900">Biometric Access</div>
<div className="text-slate-500">Enabled for admin</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-[#a3e635] rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
<div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-20 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="relative z-10">
<h3 className="font-display text-5xl font-bold text-[#1a0b2e] mb-2">0%</h3>
<p className="font-bold text-[#1a0b2e] opacity-80 uppercase tracking-wide text-sm mb-8">Monthly Fees</p>
<p className="text-[#1a0b2e] font-medium leading-tight text-lg mb-8">
                        We only make money when you do. Fair pricing for everyone.
                    </p>
</div>
<a className="inline-flex items-center justify-center w-full bg-[#1a0b2e] text-white py-4 rounded-xl font-bold hover:bg-slate-900 transition-colors" href="#">
                    View Pricing
                </a>
</div>
</div>

<div className="py-24 text-center">
<p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">Trusted by 10,000+ Creators</p>
<div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-2xl font-black text-slate-800 tracking-tighter">stripe</span>
<span className="text-2xl font-bold text-slate-800 tracking-tight italic">Intercom</span>
<span className="text-2xl font-bold text-slate-800 flex items-center gap-1"><div className="w-6 h-6 bg-slate-800 rounded-full"></div>Circle</span>
<span className="text-2xl font-black text-slate-800 tracking-tighter">VERCEL</span>
<span className="text-2xl font-semibold text-slate-800">Notion</span>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-100 pt-20 pb-10">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-[#1a0b2e] rounded-full flex items-center justify-center text-[#a3e635]">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl font-display font-bold tracking-tight text-[#1a0b2e]">syncgram</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6 font-medium">
                        The all-in-one monetization platform for Telegram creators. Built for scale, security, and simplicity.
                    </p>
<div className="flex gap-4">
<a className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#1a0b2e] hover:text-white transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#1a0b2e] hover:text-white transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#1a0b2e] hover:text-white transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div>
<h4 className="font-bold text-[#1a0b2e] mb-6">Product</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-[#a3e635] transition-colors" href="#">Features</a></li>
<li><a className="hover:text-[#a3e635] transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-[#a3e635] transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-[#a3e635] transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-[#1a0b2e] mb-6">Resources</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-[#a3e635] transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-[#a3e635] transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-[#a3e635] transition-colors" href="#">Community</a></li>
<li><a className="hover:text-[#a3e635] transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-[#1a0b2e] mb-6">Company</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-[#a3e635] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#a3e635] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#a3e635] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#a3e635] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs font-semibold text-slate-400">© 2023 Syncgram Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs font-bold text-slate-500">
<a className="hover:text-[#1a0b2e]" href="#">Privacy</a>
<a className="hover:text-[#1a0b2e]" href="#">Terms</a>
<a className="hover:text-[#1a0b2e]" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

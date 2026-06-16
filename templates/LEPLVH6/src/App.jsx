import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile menu toggle
    document.getElementById('mobile-toggle').addEventListener('click', function() {
      // Mobile menu functionality would be implemented here
      console.log('Mobile menu toggled');
    });

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.opacity-0').forEach(el => {
      observer.observe(el);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]"></div>
</div>
<div className="fixed w-full h-screen">
<iframe frameborder="0" height="100%" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV/" width="100%"></iframe>
</div>

<header className="relative z-50 border-b border-white/10 glass sticky top-0">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<nav className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 text-lg font-semibold group opacity-0 animate-slide-in-left delay-100" href="#" style={{opacity: '1'}}>
<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>
</div>
<span className="text-white font-semibold">CryptoVault</span>
</a>

<div className="hidden lg:flex items-center gap-8 opacity-0 animate-fade-in-up delay-200" style={{opacity: '1'}}>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="px-4 py-2 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm" href="#">Trading</a>
<a className="text-white/70 hover:text-white transition-colors duration-300" href="#">Markets</a>
<div className="relative group">
<button className="flex items-center gap-1 text-white/70 hover:text-white transition-colors duration-300">
                Products <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<a className="text-white/70 hover:text-white transition-colors duration-300" href="#">Analytics</a>
<a className="text-white/70 hover:text-white transition-colors duration-300" href="#">Learn</a>
</div>
<div className="flex items-center gap-4">
<div className="w-px h-6 bg-white/20"></div>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300" href="#">Sign In</a>
<a className="text-sm font-medium text-black bg-white hover:bg-white/90 transition-all duration-300 rounded-2xl px-6 py-2.5 shadow-lg shadow-white/20" href="#">Get Started</a>
</div>
</div>

<button className="lg:hidden p-2 hover:bg-white/10 rounded-2xl transition-colors duration-300" id="mobile-toggle">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>
</div>
</header>
<div className="relative z-10">

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

<div className="lg:col-span-5 opacity-0 animate-slide-in-left delay-300" style={{opacity: '1'}}>
<div className="gradient-border rounded-3xl mb-8 inline-block">
<div className="bg-black rounded-3xl px-4 py-2">
<div className="flex items-center gap-2 text-sm font-medium">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-white/80">Advanced Trading Platform</span>
</div>
</div>
</div>
<h1 className="sm:text-7xl xl:text-8xl leading-none text-6xl font-medium tracking-tighter mb-8">
<span className="block text-white">Trade crypto</span>
<span className="block gradient-text">like a pro</span>
</h1>
<p className="text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
            Access professional trading tools, real-time market data, and institutional-grade security for Bitcoin, Ethereum, and 200+ cryptocurrencies.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-3xl transition-all duration-300 shadow-xl shadow-indigo-500/25 transform hover:scale-105">
              Start Trading
            </button>
<button className="px-8 py-4 glass border border-white/20 hover:border-white/40 text-white font-medium rounded-3xl transition-all duration-300 backdrop-blur-sm">
              View Demo
            </button>
</div>

<div className="grid grid-cols-3 gap-8">
<div className="text-center lg:text-left">
<div className="text-3xl font-bold text-white mb-1">$24B+</div>
<div className="text-sm text-white/60">24h Volume</div>
</div>
<div className="text-center lg:text-left">
<div className="text-3xl font-bold text-white mb-1">150K+</div>
<div className="text-sm text-white/60">Active Traders</div>
</div>
<div className="text-center lg:text-left">
<div className="text-3xl font-bold text-white mb-1">200+</div>
<div className="text-sm text-white/60">Cryptocurrencies</div>
</div>
</div>
</div>

<div className="lg:col-span-4 opacity-0 animate-fade-in-up delay-500" style={{opacity: '1'}}>
<div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl animate-float">

<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-xl font-semibold text-white mb-1">Quick Trade</h3>
<p className="text-sm text-white/60">Instant crypto exchange</p>
</div>
<div className="flex gap-2">
<button className="p-3 hover:bg-white/10 rounded-2xl transition-colors duration-300">
<svg className="text-white/60" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
</button>
<button className="p-3 hover:bg-white/10 rounded-2xl transition-colors duration-300">
<svg className="text-white/60" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-white">From</span>
<span className="text-sm text-white/60">Balance: 12.5847 BTC</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
<button className="flex items-center gap-3 px-4 py-3 bg-orange-500/20 hover:bg-orange-500/30 rounded-2xl transition-colors duration-300 border border-orange-500/30">
<div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
<span className="text-xs font-bold text-white">₿</span>
</div>
<span className="text-sm font-medium text-white">BTC</span>
<svg className="text-white/60" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="flex-1 text-right">
<input className="w-full bg-transparent text-2xl font-semibold text-white text-right outline-none" type="text" value="0.5"/>
<p className="text-sm text-white/60 mt-1">≈ $21,450.00</p>
</div>
</div>
</div>

<div className="flex justify-center mb-6">
<button className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 border border-white/20 backdrop-blur-sm transform hover:scale-110">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
</button>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-white">To</span>
<span className="text-sm text-white/60">Balance: 245.92 ETH</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
<button className="flex items-center gap-3 px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-2xl transition-colors duration-300 border border-blue-500/30">
<div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
<span className="text-xs font-bold text-white">Ξ</span>
</div>
<span className="text-sm font-medium text-white">ETH</span>
<svg className="text-white/60" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="flex-1 text-right">
<input className="w-full bg-transparent text-2xl font-semibold text-white text-right outline-none" type="text" value="12.847"/>
<p className="text-sm text-white/60 mt-1">≈ $21,380.50</p>
</div>
</div>
</div>

<div className="space-y-3 mb-8 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
<div className="flex justify-between text-sm">
<span className="text-white/60">Exchange Rate</span>
<span className="text-white font-medium">1 BTC = 25.694 ETH</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-white/60">Network Fee</span>
<span className="text-white font-medium">~$12.50</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-white/60">Estimated Time</span>
<span className="text-green-400 font-medium">~2 minutes</span>
</div>
</div>

<button className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-500/25 transform hover:scale-[1.02]">
              Execute Trade
            </button>
</div>
</div>

<div className="lg:col-span-3 space-y-6 opacity-0 animate-slide-in-right delay-700" style={{opacity: '1'}}>

<div className="glass rounded-3xl p-6 backdrop-blur-xl border border-white/20">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-white">Live Markets</h3>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-xs text-white/60">Real-time</span>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-all duration-300 cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<span className="text-sm font-bold text-white">₿</span>
</div>
<div>
<p className="font-medium text-white">BTC/USD</p>
<p className="text-xs text-white/60">Bitcoin</p>
</div>
</div>
<div className="text-right">
<p className="font-medium text-white">$44,084.92</p>
<p className="text-xs text-green-400 flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
                    +2.45%
                  </p>
</div>
</div>
<div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-all duration-300 cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<span className="text-sm font-bold text-white">Ξ</span>
</div>
<div>
<p className="font-medium text-white">ETH/USD</p>
<p className="text-xs text-white/60">Ethereum</p>
</div>
</div>
<div className="text-right">
<p className="font-medium text-white">$1,616.18</p>
<p className="text-xs text-red-400 flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
                    -1.23%
                  </p>
</div>
</div>
<div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-all duration-300 cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<span className="text-sm font-bold text-white">◎</span>
</div>
<div className="">
<p className="font-medium text-white">SOL/USD</p>
<p className="text-xs text-white/60">Solana</p>
</div>
</div>
<div className="text-right">
<p className="font-medium text-white">$99.24</p>
<p className="text-xs text-green-400 flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
                    +5.67%
                  </p>
</div>
</div>
</div>
</div>

<div className="glass rounded-3xl p-6 backdrop-blur-xl border border-white/20">
<h3 className="text-lg font-semibold text-white mb-6">Security Features</h3>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-2xl transition-colors duration-300">
<div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-sm text-white/80">Multi-signature wallets</span>
</div>
<div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-2xl transition-colors duration-300">
<div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</div>
<span className="text-sm text-white/80">Hardware security modules</span>
</div>
<div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-2xl transition-colors duration-300">
<div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<span className="text-sm text-white/80">End-to-end encryption</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 animate-fade-in-up delay-800" style={{opacity: '1'}}>
<div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-[1.02] group">
<div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Advanced Analytics</h3>
<p className="text-white/70 leading-relaxed mb-8">Professional-grade charts, technical indicators, and market insights to make informed trading decisions.</p>
<div className="flex items-center gap-2 text-white font-medium hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
            Learn more
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-[1.02] group">
<div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Voice Trading</h3>
<p className="text-white/70 leading-relaxed mb-8">Execute trades using voice commands with our AI-powered trading assistant for hands-free portfolio management.</p>
<div className="flex items-center gap-2 text-white font-medium hover:text-green-300 transition-colors duration-300 cursor-pointer">
            Learn more
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-[1.02] group">
<div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Bank-Grade Security</h3>
<p className="text-white/70 leading-relaxed mb-8">Your assets are protected by institutional-grade security measures including cold storage and insurance coverage.</p>
<div className="flex items-center gap-2 text-white font-medium hover:text-orange-300 transition-colors duration-300 cursor-pointer">
            Learn more
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 mt-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="lg:col-span-1">
<a className="flex items-center gap-3 text-lg font-semibold mb-6" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>
</div>
<span className="text-white font-semibold">CryptoVault</span>
</a>
<p className="text-white/60 text-sm leading-relaxed mb-8">
              The most advanced cryptocurrency trading platform built for professionals and institutions worldwide.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-colors duration-300" href="#">
<svg className="text-white/70" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
</a>
<a className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-colors duration-300" href="#">
<svg className="text-white/70" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>
</a>
<a className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-colors duration-300" href="#">
<svg className="text-white/70" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Platform</h4>
<ul className="space-y-4 text-sm">
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">Spot Trading</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">Futures Trading</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">Options Trading</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">Margin Trading</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">NFT Marketplace</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Support</h4>
<ul className="space-y-4 text-sm">
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">Help Center</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">API Documentation</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">Trading Guides</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">Contact Support</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">System Status</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Company</h4>
<ul className="space-y-4 text-sm">
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">About Us</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">Careers</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">Press Kit</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">Privacy Policy</a></li>
<li><a className="text-white/60 hover:text-white transition-colors duration-300" href="#">Terms of Service</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-white/60 text-sm">© 2024 CryptoVault. All rights reserved.</p>
<div className="flex items-center gap-6 text-sm text-white/60">
<span>🌍 English</span>
<span>💱 USD</span>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}

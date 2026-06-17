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



        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Lucide Icons
            lucide.createIcons();

            // Navbar Scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('shadow-lg', 'bg-[#02040a]/90');
                } else {
                    navbar.classList.remove('shadow-lg', 'bg-[#02040a]/90');
                }
            });

            // Scroll Reveal
            const reveals = document.querySelectorAll('.reveal');
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - 100) {
                        reveal.classList.add('active');
                    }
                });
            }
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();

            // Mouse Spotlight
            document.querySelectorAll('.spotlight-card').forEach(card => {
                card.onmousemove = e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                }
            });
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
      

<div className="fixed top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none z-0"></div>
<div className="fixed bottom-0 left-0 w-full h-full bg-noise opacity-30 pointer-events-none z-0 mix-blend-overlay"></div>

<header className="w-full border-b border-white/5 bg-[#02040a]/80 backdrop-blur-md sticky top-0 z-50" id="navbar">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group z-50" href="/">
<div className="text-white flex items-center justify-center">
<iconify-icon height="24" icon="solar:command-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white">Brand</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#changelog">Changelog</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Log in</a>
<button className="bg-white hover:bg-slate-200 text-black text-xs font-semibold py-2 px-4 rounded-full transition-all">
                    Sign Up
                </button>
</div>
<button className="md:hidden text-slate-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="relative z-10">

<section className="relative pt-24 pb-20 sm:pt-32 sm:pb-32 border-b border-white/5">
<div className="max-w-[1200px] mx-auto px-6 text-center">
<div className="reveal active inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm cursor-default">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-indigo-400 tracking-wide uppercase">New Release v2.0</span>
</div>
<h1 className="reveal active text-5xl sm:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    Build products <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">faster than ever.</span>
</h1>
<p className="reveal delay-100 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-normal mb-10">
                    A highly integrated suite of tools to help you create, scale, and manage your business needs with efficiency and precision.
                </p>
<div className="reveal delay-200 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-slate-200 text-sm font-semibold py-3.5 px-8 rounded-full transition-all">
                        Get Started
                        <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium py-3.5 px-8 rounded-full border border-white/5 transition-all">
                        Documentation
                        <iconify-icon height="16" icon="solar:code-linear" width="16"></iconify-icon>
</button>
</div>

<div className="reveal delay-200 mt-20 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent z-10"></div>
<div className="rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden aspect-[16/9] max-w-4xl mx-auto flex items-center justify-center">
<div className="text-center opacity-30">
<iconify-icon className="mb-4" icon="solar:graph-new-linear" width="64"></iconify-icon>
<p className="text-sm">Dashboard Interface Preview</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="features">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="spotlight-card p-8 rounded-2xl group transition-all duration-300 reveal delay-100">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">High Performance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Built for speed and reliability, ensuring your workflow remains uninterrupted at all times.</p>
</div>

<div className="spotlight-card p-8 rounded-2xl group transition-all duration-300 reveal delay-100">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Secure by Design</h3>
<p className="text-sm text-slate-500 leading-relaxed">Enterprise-grade security features built-in from the ground up to protect your data.</p>
</div>

<div className="spotlight-card p-8 rounded-2xl group transition-all duration-300 reveal delay-100">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Real-time Collaboration</h3>
<p className="text-sm text-slate-500 leading-relaxed">Work together with your team in real-time with integrated comments and sharing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#02040a] relative overflow-hidden" id="solutions">
<div className="max-w-[1000px] mx-auto px-6 relative z-10">

<div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
<div className="reveal">
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-6">Crypto Asset Coverage</h2>
<p className="text-lg text-slate-400 leading-relaxed max-w-md">
                            Access major tokens and stablecoins, plus a curated selection of altcoins available on request and subject to liquidity.
                        </p>
</div>
<div className="reveal delay-100 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>

<div className="relative bg-[#0c0e12]/80 border border-white/5 rounded-2xl p-2 w-full max-w-sm mx-auto backdrop-blur-sm group/list">

<div className="group/item relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-2xl hover:border-white/10 hover:z-20 border border-transparent cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#2775CA]/10">
<iconify-icon height="20" icon="cryptocurrency-color:usdc" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">USDC</span>
</div>
<span className="text-slate-500 text-xs font-medium">USD Coin</span>
</div>

<div className="group/item relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-2xl hover:border-white/10 hover:z-20 border border-transparent cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#2F5AF5]/10">
<iconify-icon height="20" icon="cryptocurrency-color:eur" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">EURC</span>
</div>
<span className="text-slate-500 text-xs font-medium">Euro Coin</span>
</div>

<div className="group/item relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-2xl hover:border-white/10 hover:z-20 border border-white/5 bg-[#171717] scale-[1.02] shadow-lg z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#26A17B]/10">
<iconify-icon height="20" icon="cryptocurrency-color:usdt" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">USDT</span>
</div>
<span className="text-slate-500 text-xs font-medium">Tether</span>
</div>

<div className="group/item relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-2xl hover:border-white/10 hover:z-20 border border-transparent cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#F7931A]/10">
<iconify-icon height="20" icon="cryptocurrency-color:btc" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">BTC</span>
</div>
<span className="text-slate-500 text-xs font-medium">Bitcoin</span>
</div>

<div className="group/item relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-2xl hover:border-white/10 hover:z-20 border border-transparent cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#627EEA]/10">
<iconify-icon height="20" icon="cryptocurrency-color:eth" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">ETH</span>
</div>
<span className="text-slate-500 text-xs font-medium">Ethereum</span>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 reveal delay-100 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

<div className="relative bg-[#0c0e12]/80 border border-white/5 rounded-2xl p-2 w-full max-w-sm mx-auto backdrop-blur-sm group/list">

<div className="group/item relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-2xl hover:border-white/10 hover:z-20 border border-transparent cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-500/20 text-orange-500">
<span className="font-bold text-xs">$</span>
</div>
<span className="text-white font-medium text-sm">USD</span>
</div>
<span className="text-slate-500 text-xs font-medium">US Dollar</span>
</div>

<div className="group/item relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-2xl hover:border-white/10 hover:z-20 border border-transparent cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500/20 text-blue-500">
<span className="font-bold text-xs">€</span>
</div>
<span className="text-white font-medium text-sm">EUR</span>
</div>
<span className="text-slate-500 text-xs font-medium">Euro</span>
</div>

<div className="group/item relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-2xl hover:border-white/10 hover:z-20 border border-white/5 bg-[#171717] scale-[1.02] shadow-lg z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-indigo-500/20 text-indigo-500">
<span className="font-bold text-xs">£</span>
</div>
<span className="text-white font-medium text-sm">GBP</span>
</div>
<span className="text-slate-500 text-xs font-medium">British Pound</span>
</div>

<div className="group/item relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-2xl hover:border-white/10 hover:z-20 border border-transparent cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-500/20 text-emerald-500">
<span className="font-bold text-[10px]">د.إ</span>
</div>
<span className="text-white font-medium text-sm">AED</span>
</div>
<span className="text-slate-500 text-xs font-medium">UAE Dirham</span>
</div>

<div className="group/item relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 group-hover/list:opacity-40 group-hover/list:blur-[1px] hover:!opacity-100 hover:!blur-0 hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-2xl hover:border-white/10 hover:z-20 border border-transparent cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600/20 text-blue-600">
<span className="font-bold text-[10px]">AU$</span>
</div>
<span className="text-white font-medium text-sm">AUD</span>
</div>
<span className="text-slate-500 text-xs font-medium">Australian Dollar</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 reveal">
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-6">Fiat Asset Coverage</h2>
<p className="text-lg text-slate-400 leading-relaxed max-w-md">
                            Support for USD, EUR, and other major fiat currencies, subject to banking availability and regional regulations.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-4xl font-medium text-white tracking-tight mb-6">Ready to get started?</h2>
<p className="text-slate-400 mb-10">Join thousands of companies building the future with our platform.</p>
<div className="flex items-center justify-center gap-4">
<button className="bg-white text-black hover:bg-slate-200 text-sm font-semibold py-3 px-8 rounded-full transition-all">Start for free</button>
<button className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Contact Sales</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#02040a]">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white font-semibold">
<iconify-icon icon="solar:command-linear"></iconify-icon> Brand
                    </div>
<p className="text-xs text-slate-500">© 2024 Company Inc.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
</footer>
</main>


    </>
  );
}

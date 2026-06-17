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
          sans: ['Inter', 'ui-sans-serif', 'system-ui']
        },
        extend: {
          colors: {
            slate: {
              950: '#0a0a0a'
            }
          }
        }
      }
    }
  


    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Demo card interactions
    const pill = document.getElementById('query-pill');
    const card = document.getElementById('prompt-card');
    
    pill.addEventListener('click', () => {
      card.classList.toggle('hidden');
    });

    // Strategy button selection
    const strategyBtns = document.querySelectorAll('.strategy-btn');
    strategyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        strategyBtns.forEach(b => {
          b.classList.remove('bg-blue-500/20', 'border-blue-500/30', 'text-blue-400');
          b.classList.add('bg-white/5', 'border-white/10', 'text-slate-300');
        });
        btn.classList.remove('bg-white/5', 'border-white/10', 'text-slate-300');
        btn.classList.add('bg-blue-500/20', 'border-blue-500/30', 'text-blue-400');
      });
    });

    // Market cap sliders
    const minSlider = document.getElementById('market-cap-min');
    const maxSlider = document.getElementById('market-cap-max');
    const minValue = document.getElementById('cap-min');
    const maxValue = document.getElementById('cap-max');
    
    minSlider.addEventListener('input', (e) => {
      minValue.textContent = e.target.value;
    });
    
    maxSlider.addEventListener('input', (e) => {
      maxValue.textContent = e.target.value;
    });

    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
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
      

<header className="px-4 sm:px-6 py-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<h1 className="sm:text-xl text-lg font-extrabold text-white">StockSense AI</h1>
</div>

<button className="sm:hidden text-white p-2" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>

<nav className="hidden sm:flex items-center gap-6">
<a className="text-sm hover:text-white transition-colors" href="#">Features</a>
<a className="text-sm hover:text-white transition-colors" href="#">Screeners</a>
<a className="text-sm hover:text-white transition-colors" href="#">Research</a>
<a className="text-sm hover:text-white transition-colors" href="#">API</a>
<button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">
        Start Free Trial
      </button>
</nav>

<nav className="hidden absolute top-16 left-0 right-0 bg-slate-900 border-b border-white/10 p-4 space-y-4 sm:hidden" id="mobile-menu">
<a className="block text-sm hover:text-white transition-colors" href="#">Features</a>
<a className="block text-sm hover:text-white transition-colors" href="#">Screeners</a>
<a className="block text-sm hover:text-white transition-colors" href="#">Research</a>
<a className="block text-sm hover:text-white transition-colors" href="#">API</a>
<button className="w-full px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">
        Start Free Trial
      </button>
</nav>
</header>

<section className="container mx-auto px-4 sm:px-6 py-12 sm:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="space-y-6 sm:space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
        AI-Powered Stock Analysis
      </div>
<h2 className="sm:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-white">
        Discover winning stocks with <span className="bg-clip-text text-transparent bg-gradient-to-tr from-teal-400 to-blue-500">AI precision</span>
</h2>
<p className="text-base sm:text-lg leading-relaxed text-slate-400 max-w-2xl lg:max-w-md">
        StockSense AI combines advanced machine learning with fundamental analysis to identify 
        undervalued opportunities before the market catches on. See exactly how our AI thinks 
        and adjust every parameter to match your strategy.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          Watch Demo
        </button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          View on GitHub
        </button>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-slate-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>50,000+ active traders</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.9/5 rating</span>
</div>
</div>
</div>

<div className="relative order-first lg:order-last">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
<div className="relative bg-slate-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-white">AI Analysis</span>
<div className="flex items-center gap-2 text-xs text-blue-400">
<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            Live
          </div>
</div>
<div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm backdrop-blur-md cursor-pointer hover:bg-white/10 transition-colors mb-4" id="query-pill">
<svg className="lucide lucide-trending-up w-4 h-4 text-blue-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
          High-growth tech stocks with strong fundamentals
          <svg className="lucide lucide-chevron-down w-4 h-4 ml-auto" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="hidden space-y-4" id="prompt-card">
<div className="bg-slate-800/50 rounded-lg p-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-white">AI-Generated Filters</span>
<span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">Auto-tuned</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-building-2 w-4 h-4 text-blue-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<span className="text-slate-300">Market cap: $5B+</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-cpu w-4 h-4 text-blue-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-slate-300">Sector: Technology</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-trending-up w-4 h-4 text-blue-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-slate-300">Revenue growth: 15%+</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-blue-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-slate-300">Debt ratio: &lt;50%</span>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-2">
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm transition-colors">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
              Run Analysis
            </button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Customize
            </button>
</div>
</div>

<div className="mt-6 space-y-3">
<div className="text-xs font-medium text-slate-400 uppercase tracking-wide">Top Matches</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">NVDA</div>
<div>
<div className="text-sm font-medium text-white">NVIDIA Corporation</div>
<div className="text-xs text-slate-400">AI Score: 94/100</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-green-400">$478.32</div>
<div className="text-xs text-green-400">+2.4%</div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">MSFT</div>
<div className="">
<div className="text-sm font-medium text-white">Microsoft Corporation</div>
<div className="text-xs text-slate-400">AI Score: 91/100</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-green-400">$421.56</div>
<div className="text-xs text-green-400">+1.8%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-4 sm:px-6 py-12 sm:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="space-y-6 order-last lg:order-first">
<div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 text-sm text-purple-400">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
        Advanced Screening
      </div>
<h3 className="sm:text-4xl text-3xl font-semibold text-white">Build sophisticated screens in minutes, not hours</h3>
<p className="text-base sm:text-lg leading-relaxed text-slate-400">
        Our intelligent form adapts to your input, suggesting relevant filters and highlighting 
        potential conflicts. Whether you're hunting for dividend aristocrats or growth disruptors, 
        StockSense AI helps you build the perfect screen.
      </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mt-1">
<svg className="lucide lucide-zap w-4 h-4 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<div className="font-semibold text-white text-sm">Smart Suggestions</div>
<div className="text-xs text-slate-400">AI recommends filters based on your goals</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mt-1">
<svg className="lucide lucide-eye w-4 h-4 text-purple-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div>
<div className="font-semibold text-white text-sm">Real-time Preview</div>
<div className="text-xs text-slate-400">See results update as you adjust filters</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-sliders-horizontal w-5 h-5 text-blue-400" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
<h4 className="text-lg font-semibold text-white">Custom Screen Builder</h4>
</div>
<form className="space-y-6">

<div className="">
<label className="block text-sm font-medium mb-3 text-white">Investment Strategy</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
<button className="strategy-btn flex items-center justify-center gap-2 p-3 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm transition-colors" type="button">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
              Growth
            </button>
<button className="strategy-btn flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 text-sm transition-colors" type="button">
<svg className="lucide lucide-coins w-4 h-4" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
              Value
            </button>
<button className="strategy-btn flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 text-sm transition-colors" type="button">
<svg className="lucide lucide-percent w-4 h-4" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
              Dividend
            </button>
<button className="strategy-btn flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 text-sm transition-colors" type="button">
<svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              Quality
            </button>
</div>
</div>

<div className="">
<label className="block text-sm font-medium mb-2 text-white">Sector Focus</label>
<div className="relative">
<select className="appearance-none w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 pr-10 text-sm text-white focus:border-blue-500 focus:outline-none">
<option>All Sectors</option>
<option selected="">Information Technology</option>
<option>Healthcare</option>
<option>Consumer Discretionary</option>
<option>Financial Services</option>
<option>Communication Services</option>
<option>Energy</option>
<option>Industrials</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="">
<label className="block text-sm font-medium mb-3 text-white">
            Market Cap Range: $<span id="cap-min">5</span>B - $<span id="cap-max">500</span>B
          </label>
<div className="space-y-2">
<input className="w-full" id="market-cap-min" max="100" min="1" type="range" value="5"/>
<input className="w-full" id="market-cap-max" max="3000" min="100" type="range" value="500"/>
</div>
</div>

<fieldset className="">
<legend className="text-sm font-medium mb-3 text-white flex items-center gap-2">
<svg className="lucide lucide-bar-chart-3 w-4 h-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
            Financial Health
          </legend>
<div className="space-y-3">
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3">
<input className="peer sr-only" type="checkbox"/>
<span className="w-5 h-5 flex items-center justify-center border-2 border-white/20 rounded-md peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm group-hover:text-white transition-colors">Profitable (TTM)</span>
</div>
<svg className="lucide lucide-info w-4 h-4 text-slate-500" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="w-5 h-5 flex items-center justify-center border-2 border-blue-500 bg-blue-500 rounded-md transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white">Revenue growth &gt;15%</span>
</div>
<svg className="lucide lucide-info w-4 h-4 text-slate-500" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3">
<input className="peer sr-only" type="checkbox"/>
<span className="w-5 h-5 flex items-center justify-center border-2 border-white/20 rounded-md peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm group-hover:text-white transition-colors">Low debt-to-equity</span>
</div>
<svg className="lucide lucide-info w-4 h-4 text-slate-500" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</label>
</div>
</fieldset>

<div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
<div className="flex items-center gap-3">
<svg className="lucide lucide-brain-circuit w-5 h-5 text-blue-400" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
<div className="">
<div className="text-sm font-medium text-white">AI Enhancement</div>
<div className="text-xs text-slate-400">Let AI optimize your filters</div>
</div>
</div>
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle" type="checkbox"/>
<div className="w-10 h-6 bg-blue-500 rounded-full relative transition-colors">
<span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform translate-x-5"></span>
</div>
</label>
</div>
<button className="w-full flex gap-2 hover:from-blue-600 hover:to-purple-700 transition-all font-semibold text-white bg-gradient-to-l from-teal-400 to-blue-500 rounded-lg pt-3 pb-3 items-center justify-center" type="submit">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
          Analyze 4,287 Stocks
        </button>
<div className="text-center text-xs text-slate-500">
          Results update in real-time • No credit card required
        </div>
</form>
</div>
</section>

<footer className="border-t border-white/5 mt-24">
<div className="container mx-auto px-4 sm:px-6 py-12">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
<div className="">
<h5 className="font-semibold text-white mb-4">Product</h5>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Stock Screener</a></li>
<li><a className="hover:text-white transition-colors" href="#">Portfolio Tracker</a></li>
<li><a className="hover:text-white transition-colors" href="#">AI Insights</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Market Data</a></li>
</ul>
</div>
<div className="">
<h5 className="font-semibold text-white mb-4">Research</h5>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Market Analysis</a></li>
<li><a className="hover:text-white transition-colors" href="#">Earnings Reports</a></li>
<li><a className="hover:text-white transition-colors" href="#">SEC Filings</a></li>
<li><a className="hover:text-white transition-colors" href="#">Technical Charts</a></li>
</ul>
</div>
<div className="">
<h5 className="font-semibold text-white mb-4">Developers</h5>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">API Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">SDKs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Webhooks</a></li>
<li><a className="hover:text-white transition-colors" href="#">Rate Limits</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-white mb-4">Company</h5>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5">
<div className="flex gap-3 sm:mb-0 mb-4 items-center">
<span className="font-semibold text-white">StockSense AI</span>
</div>
<div className="flex items-center gap-6">
<div className="text-xs text-slate-500">
            © <span id="year">2025</span> StockSense AI. All rights reserved.
          </div>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}

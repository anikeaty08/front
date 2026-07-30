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
        extend: {
          fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui'],
          },
          colors: {
            brand: {
              DEFAULT: '#00d4ff',
              50: '#f0fdff',
              100: '#ccf7fe',
              200: '#9aedfd',
              300: '#58defa',
              400: '#0bc5ea',
              500: '#00d4ff',
              600: '#0284c7',
              700: '#0369a1',
              800: '#075985',
              900: '#0c4a6e',
            }
          }
        }
      }
    }
  


    lucide.createIcons();

    // Risk slider logic
    const riskSlider = document.getElementById('riskSlider');
    const riskValue = document.getElementById('riskValue');
    riskSlider.addEventListener('input', () => {
      const value = parseInt(riskSlider.value);
      if (value < 33) riskValue.textContent = 'Conservative';
      else if (value < 66) riskValue.textContent = 'Moderate';
      else riskValue.textContent = 'Aggressive';
    });

    // Portfolio dropdown logic
    const portfolioBtn = document.getElementById('portfolioBtn');
    const portfolioMenu = document.getElementById('portfolioMenu');
    const portfolioLabel = document.getElementById('portfolioLabel');
    portfolioBtn.addEventListener('click', () => {
      portfolioMenu.classList.toggle('hidden');
    });
    portfolioMenu.querySelectorAll('button').forEach(item => {
      item.addEventListener('click', () => {
        portfolioLabel.textContent = item.dataset.value;
        portfolioMenu.classList.add('hidden');
      });
    });
    document.addEventListener('click', (e) => {
      if (!portfolioBtn.contains(e.target) && !portfolioMenu.contains(e.target)) {
        portfolioMenu.classList.add('hidden');
      }
    });

    // Download logic
    document.getElementById('downloadBtn').addEventListener('click', () => {
      const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'financehub-pro.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
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
      
<nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-lg border-b border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-trending-up h-5 w-5 text-black" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xl font-bold">FinanceHub Pro</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-gray-300 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
<button className="bg-brand-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-brand-400 transition-colors">
            Start Free Trial
          </button>
</div>
<button className="md:hidden">
<svg className="lucide lucide-menu h-6 w-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</nav>
<header className="pointer-events-none relative isolate z-10 flex items-center justify-center pt-32 sm:pt-40">
<div className="text-center max-w-4xl mx-auto px-4">
<h1 className="pointer-events-auto sm:text-5xl md:text-7xl bg-clip-text text-4xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-white via-brand-200 to-brand-500 pt-2 pb-2">
        Revolutionize Your Trading Experience
      </h1>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-500/20 via-transparent to-brand-500/20 blur-3xl"></div>
</div>
</header>
<section className="mx-auto mt-8 max-w-2xl px-6 text-center">
<p className="text-xl leading-8 text-gray-300">
      The only platform that combines real-time market data, advanced analytics, and institutional-grade tools 
      in one seamless interface. Trusted by over 50,000 professional traders worldwide.
    </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-brand-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-brand-400 transition-all transform hover:scale-105 flex items-center justify-center">
<svg className="lucide lucide-rocket mr-2 h-5 w-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
        Start Trading Now
      </button>
<button className="border border-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-brand-500 transition-colors flex items-center justify-center">
<svg className="lucide lucide-play mr-2 h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
        Watch Demo
      </button>
</div>
</section>
<section className="mx-auto mt-32 max-w-7xl px-4 sm:px-6 lg:px-8" id="features">
<div className="text-center mb-16">
<h2 className="sm:text-4xl text-3xl font-bold tracking-tight mb-4">Everything You Need to Succeed</h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto">Powerful features designed for both novice traders and seasoned professionals</p>
</div>
<div className="grid grid-cols-1 gap-px border border-gray-800 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative overflow-hidden bg-gray-900/50 p-8 hover:bg-gray-900/80 transition-all duration-300 hover:scale-[1.02]">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 text-brand-400 transition-all group-hover:border-brand-400 group-hover:bg-brand-400/10">
<svg className="lucide lucide-monitor h-6 w-6" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Real-Time Market Data</h3>
<p className="text-gray-400 leading-relaxed mb-4">Access live quotes, level 2 data, and real-time news from NYSE, NASDAQ, and global exchanges. No delays, no limitations.</p>
<div className="flex items-center text-brand-400 text-sm font-medium">
<svg className="lucide lucide-zap h-4 w-4 mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          Sub-millisecond latency
        </div>
</div>

<div className="group relative overflow-hidden bg-gray-900/50 p-8 hover:bg-gray-900/80 transition-all duration-300 hover:scale-[1.02] border-l border-gray-800 sm:border-l-0 lg:border-l">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 text-brand-400 transition-all group-hover:border-brand-400 group-hover:bg-brand-400/10">
<svg className="lucide lucide-brain h-6 w-6" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">AI-Powered Analytics</h3>
<p className="text-gray-400 leading-relaxed mb-4">Advanced machine learning algorithms analyze market patterns and provide intelligent trading signals with 89% accuracy rate.</p>
<div className="flex items-center text-brand-400 text-sm font-medium">
<svg className="lucide lucide-trending-up h-4 w-4 mr-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
          Powered by GPT-4 Turbo
        </div>
</div>

<div className="group relative overflow-hidden bg-gray-900/50 p-8 hover:bg-gray-900/80 transition-all duration-300 hover:scale-[1.02] border-l border-gray-800 lg:border-l">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 text-brand-400 transition-all group-hover:border-brand-400 group-hover:bg-brand-400/10">
<svg className="lucide lucide-calendar-days h-6 w-6" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Economic Calendar Pro</h3>
<p className="text-gray-400 leading-relaxed mb-4">Never miss important economic events. Get alerts 24/7 for earnings, Fed meetings, and market-moving announcements.</p>
<div className="flex items-center text-brand-400 text-sm font-medium">
<svg className="lucide lucide-bell h-4 w-4 mr-1" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
          Smart notifications
        </div>
</div>

<div className="group relative overflow-hidden bg-gray-900/50 p-8 hover:bg-gray-900/80 transition-all duration-300 hover:scale-[1.02] border-t border-gray-800">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 text-brand-400 transition-all group-hover:border-brand-400 group-hover:bg-brand-400/10">
<svg className="lucide lucide-newspaper h-6 w-6" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Premium News Feed</h3>
<p className="text-gray-400 leading-relaxed mb-4">Curated financial news from Bloomberg, Reuters, and WSJ. Ad-free experience with sentiment analysis and impact scoring.</p>
<div className="flex items-center text-brand-400 text-sm font-medium">
<svg className="lucide lucide-star h-4 w-4 mr-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          Premium sources only
        </div>
</div>

<div className="group relative overflow-hidden bg-gray-900/50 p-8 hover:bg-gray-900/80 transition-all duration-300 hover:scale-[1.02] border-t border-l border-gray-800 sm:border-l-0 lg:border-l">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 text-brand-400 transition-all group-hover:border-brand-400 group-hover:bg-brand-400/10">
<svg className="lucide lucide-candlestick-chart h-6 w-6" data-lucide="candlestick-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5v4"></path><rect height="6" rx="1" width="4" x="7" y="9"></rect><path d="M9 15v2"></path><path d="M17 3v2"></path><rect height="8" rx="1" width="4" x="15" y="5"></rect><path d="M17 13v3"></path><path d="M3 3v16a2 2 0 0 0 2 2h16"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Advanced Charting Suite</h3>
<p className="text-gray-400 leading-relaxed mb-4">Professional-grade charts with 100+ technical indicators. TradingView integration with custom drawing tools and strategies.</p>
<div className="flex items-center text-brand-400 text-sm font-medium">
<svg className="lucide lucide-palette h-4 w-4 mr-1" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
          Fully customizable
        </div>
</div>

<div className="group relative overflow-hidden bg-gray-900/50 p-8 hover:bg-gray-900/80 transition-all duration-300 hover:scale-[1.02] border-t border-l border-gray-800 lg:border-l">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-700 text-brand-400 transition-all group-hover:border-brand-400 group-hover:bg-brand-400/10">
<svg className="lucide lucide-shield-check h-6 w-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">SEC & Regulatory Data</h3>
<p className="text-gray-400 leading-relaxed mb-4">Instant access to 10-K, 10-Q filings, insider trading data, and institutional holdings. Always stay compliant and informed.</p>
<div className="flex items-center text-brand-400 text-sm font-medium">
<svg className="lucide lucide-database h-4 w-4 mr-1" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
          Always up-to-date
        </div>
</div>
</div>
</section>
<section className="mx-auto mt-32 max-w-4xl px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tighter mb-4">Customize Your Experience</h2>
<p className="text-gray-400">Tailor the platform to match your trading style and preferences</p>
</div>
<div className="bg-gray-900/50 rounded-2xl p-8 space-y-8">

<div className="flex items-center justify-between">
<div className="">
<h3 className="font-semibold mb-1">Dark Mode</h3>
<p className="text-sm text-gray-400">Reduce eye strain during long trading sessions</p>
</div>
<label className="inline-flex items-center">
<input checked className="peer sr-only" type="checkbox" />
<span className="relative inline-block h-7 w-12 rounded-full bg-gray-700 transition-colors peer-checked:bg-brand-500">
<span className="absolute left-0 top-0 m-1 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-5 shadow-lg"></span>
</span>
</label>
</div>

<div className="flex items-center justify-between">
<div className="">
<h3 className="font-semibold mb-1">Push Notifications</h3>
<p className="text-sm text-gray-400">Get alerts for price movements and news</p>
</div>
<label className="inline-flex items-center">
<input className="peer sr-only" type="checkbox" />
<span className="flex h-6 w-6 items-center justify-center rounded border-2 border-gray-600 transition-colors peer-checked:border-brand-500 peer-checked:bg-brand-500">
<svg className="lucide lucide-check hidden h-4 w-4 text-white peer-checked:block" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
</div>

<div className="">
<div className="flex justify-between items-center mb-3">
<h3 className="font-semibold">Risk Tolerance</h3>
<span className="text-brand-400 font-medium" id="riskValue">Conservative</span>
</div>
<input className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-700 accent-brand-500" id="riskSlider" max="100" min="0" type="range" value="25" />
<div className="flex justify-between text-xs text-gray-500 mt-1">
<span>Conservative</span>
<span>Moderate</span>
<span className="">Aggressive</span>
</div>
</div>

<div className="">
<h3 className="font-semibold mb-3">Default Portfolio</h3>
<div className="relative">
<button className="flex w-full items-center justify-between rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-left hover:border-brand-500 focus:outline-none transition-colors" id="portfolioBtn">
<div className="flex items-center">
<svg className="lucide lucide-briefcase h-5 w-5 mr-3 text-brand-400" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="" id="portfolioLabel">Growth Portfolio</span>
</div>
<svg className="lucide lucide-chevron-down h-4 w-4 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<ul className="absolute z-20 mt-2 hidden w-full divide-y divide-gray-800 overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-xl" id="portfolioMenu">
<li>
<button className="flex w-full items-center px-4 py-3 text-left hover:bg-brand-500/10" data-value="Growth Portfolio">
<svg className="lucide lucide-trending-up h-4 w-4 mr-3 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<div>
<div className="font-medium">Growth Portfolio</div>
<div className="text-xs text-gray-400">High growth potential stocks</div>
</div>
</button>
</li>
<li>
<button className="flex w-full items-center px-4 py-3 text-left hover:bg-brand-500/10" data-value="Dividend Portfolio">
<svg className="lucide lucide-coins h-4 w-4 mr-3 text-blue-400" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<div>
<div className="font-medium">Dividend Portfolio</div>
<div className="text-xs text-gray-400">Steady income focused</div>
</div>
</button>
</li>
<li>
<button className="flex w-full items-center px-4 py-3 text-left hover:bg-brand-500/10" data-value="Tech Portfolio">
<svg className="lucide lucide-cpu h-4 w-4 mr-3 text-purple-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<div>
<div className="font-medium">Tech Portfolio</div>
<div className="text-xs text-gray-400">Technology sector focus</div>
</div>
</button>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="mx-auto mt-32 max-w-3xl px-6 text-center">
<div className="bg-gradient-to-r from-brand-500/10 to-transparent rounded-2xl p-8 border border-brand-500/20">
<h2 className="text-2xl font-bold mb-4">Ready to Transform Your Trading?</h2>
<p className="text-gray-300 mb-8">Join thousands of successful traders using FinanceHub Pro</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-8 py-3 font-semibold text-black transition-all hover:bg-brand-400 transform hover:scale-105" id="downloadBtn">
<svg className="lucide lucide-download mr-2 h-5 w-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
          Download Platform
        </button>
<button className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-3 font-semibold transition-colors hover:border-brand-500">
<svg className="lucide lucide-phone mr-2 h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
          Schedule Demo
        </button>
</div>
</div>
</section>
<footer className="mt-32 border-t border-gray-800 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="flex items-center space-x-2 mb-4 md:mb-0">
<div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-trending-up h-5 w-5 text-black" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xl font-bold">FinanceHub Pro</span>
</div>
<p className="text-gray-400">© 2024 FinanceHub Pro. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}

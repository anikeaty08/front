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
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Simple scroll reveal animation trigger
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
        document.querySelectorAll('[style*="opacity: 0"]').forEach(el => {
            observer.observe(el);
        });
        
        // Show navigation immediately
        setTimeout(() => {
            document.querySelector('nav').style.opacity = '1';
        }, 100);
    
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
      

<nav className="fixed w-full top-0 z-50 glass-card border-b border-white/8" style={{opacity: '0'}}>
<div className="max-w-7xl mx-auto px-6 py-4 fade-in delay-100">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-8">
<div className="text-xl font-bold tracking-tight" style={{color: 'var(--text-1)'}}>PredictStreet</div>
<div className="hidden md:flex space-x-6">
<a className="text-sm font-medium hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>Product</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>API</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>Pricing</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>Docs</a>
</div>
</div>
<div className="flex items-center space-x-4">
<button className="text-sm font-medium px-4 py-2 hover:bg-white/5 rounded-lg transition-colors" style={{color: 'var(--text-2)'}}>Sign In</button>
<button className="text-sm font-semibold px-5 py-2 rounded-lg hover:bg-opacity-90 transition-all text-white" style={{backgroundColor: 'var(--brand-500)'}}>Try Demo</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
<div className="hero-glow absolute inset-0"></div>
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(34,211,197,0.1) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(139,92,246,0.08) 0%, transparent 50%)'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 pt-20">
<div className="mb-8" style={{opacity: '0'}}>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 slide-up delay-200" style={{color: 'var(--text-1)'}}>
                    Earnings <span className="brand-gradient bg-clip-text text-transparent">80% more accurate</span> than human analysts
                </h1>
<p className="text-xl md:text-2xl font-medium leading-relaxed slide-up delay-300" style={{color: 'var(--text-2)'}}>
                    AI analysts watch company developments in real time, and deliver instant, explainable earnings estimates, based on watching the market in real time
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{opacity: '0'}}>
<button className="px-8 py-4 text-lg font-semibold rounded-2xl glow-hover transition-all slide-up delay-400 text-white" style={{backgroundColor: 'var(--brand-500)'}}>
                    Try the Demo
                </button>
<button className="px-8 py-4 text-lg font-semibold rounded-2xl glass-card glow-hover transition-all slide-up delay-500" style={{color: 'var(--text-1)'}}>
                    Get API Access
                </button>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 slide-up" style={{color: 'var(--text-1)', opacity: '0'}}>Why PredictStreet</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="glass-card p-8 rounded-2xl glow-hover slide-in-left delay-100" style={{opacity: '0'}}>
<div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center" style={{backgroundColor: 'var(--brand-500)'}}>
<i className="w-6 h-6 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-4" style={{color: 'var(--text-1)'}}>Faster than human coverage</h3>
<p className="leading-relaxed" style={{color: 'var(--text-2)'}}>Always-on models refresh with every filing, headline, and macro print.</p>
</div>
<div className="glass-card p-8 rounded-2xl glow-hover slide-in-left delay-200" style={{opacity: '0'}}>
<div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center" style={{backgroundColor: 'var(--accent-2)'}}>
<i className="w-6 h-6 text-gray-900" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-4" style={{color: 'var(--text-1)'}}>Explainable by design</h3>
<p className="leading-relaxed" style={{color: 'var(--text-2)'}}>See drivers, assumptions, and plain-English rationale — not just a score.</p>
</div>
<div className="glass-card p-8 rounded-2xl glow-hover slide-in-right delay-300" style={{opacity: '0'}}>
<div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center" style={{backgroundColor: 'var(--accent-3)'}}>
<i className="w-6 h-6 text-white" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-4" style={{color: 'var(--text-1)'}}>Consensus you can trust</h3>
<p className="leading-relaxed" style={{color: 'var(--text-2)'}}>Our ensemble reconciles multiple expert bots into an AI Street Consensus, benchmarked against Wall Street.</p>
</div>
<div className="glass-card p-8 rounded-2xl glow-hover slide-in-right delay-400" style={{opacity: '0'}}>
<div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center" style={{backgroundColor: 'var(--success)'}}>
<i className="w-6 h-6 text-gray-900" data-lucide="code" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-4" style={{color: 'var(--text-1)'}}>Production-ready</h3>
<p className="leading-relaxed" style={{color: 'var(--text-2)'}}>Embeddable widgets and a simple API power apps, terminals, and media sites.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 slide-up" style={{color: 'var(--text-1)', opacity: '0'}}>What You Get</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-2xl slide-up delay-100" style={{opacity: '0'}}>
<div className="flex items-center mb-4">
<i className="w-5 h-5 mr-3" data-lucide="target" strokeWidth="1.5" style={{color: 'var(--brand-500)'}}></i>
<h3 className="text-lg font-semibold" style={{color: 'var(--text-1)'}}>Earnings Estimates</h3>
</div>
<p style={{color: 'var(--text-2)'}}>Point forecast + confidence interval, updated in real time.</p>
</div>
<div className="glass-card p-8 rounded-2xl slide-up delay-200" style={{opacity: '0'}}>
<div className="flex items-center mb-4">
<i className="w-5 h-5 mr-3" data-lucide="star" strokeWidth="1.5" style={{color: 'var(--accent-2)'}}></i>
<h3 className="text-lg font-semibold" style={{color: 'var(--text-1)'}}>AI Analyst Ratings</h3>
</div>
<p style={{color: 'var(--text-2)'}}>Buy/Hold/Sell with conviction level and key catalysts.</p>
</div>
<div className="glass-card p-8 rounded-2xl slide-up delay-300" style={{opacity: '0'}}>
<div className="flex items-center mb-4">
<i className="w-5 h-5 mr-3" data-lucide="git-branch" strokeWidth="1.5" style={{color: 'var(--accent-3)'}}></i>
<h3 className="text-lg font-semibold" style={{color: 'var(--text-1)'}}>Scenario Paths</h3>
</div>
<p style={{color: 'var(--text-2)'}}>Base/bull/bear with sensitivity to margins, pricing, and volumes.</p>
</div>
<div className="glass-card p-8 rounded-2xl slide-up delay-400" style={{opacity: '0'}}>
<div className="flex items-center mb-4">
<i className="w-5 h-5 mr-3" data-lucide="file-text" strokeWidth="1.5" style={{color: 'var(--success)'}}></i>
<h3 className="text-lg font-semibold" style={{color: 'var(--text-1)'}}>Driver Cards</h3>
</div>
<p style={{color: 'var(--text-2)'}}>Filings, transcripts, news, and alternative data the models relied on.</p>
</div>
<div className="glass-card p-8 rounded-2xl slide-up delay-500" style={{opacity: '0'}}>
<div className="flex items-center mb-4">
<i className="w-5 h-5 mr-3" data-lucide="radar" strokeWidth="1.5" style={{color: 'var(--warning)'}}></i>
<h3 className="text-lg font-semibold" style={{color: 'var(--text-1)'}}>Surprise Radar</h3>
</div>
<p style={{color: 'var(--text-2)'}}>Flags where our AI Street Consensus diverges from human consensus.</p>
</div>
<div className="glass-card p-8 rounded-2xl slide-up delay-600" style={{opacity: '0'}}>
<div className="flex items-center mb-4">
<i className="w-5 h-5 mr-3" data-lucide="bell" strokeWidth="1.5" style={{color: 'var(--danger)'}}></i>
<h3 className="text-lg font-semibold" style={{color: 'var(--text-1)'}}>Alerts</h3>
</div>
<p style={{color: 'var(--text-2)'}}>Instant updates on estimate revisions and rating changes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 slide-up" style={{color: 'var(--text-1)', opacity: '0'}}>How It Works</h2>
</div>
<div className="grid lg:grid-cols-3 gap-12">
<div className="text-center slide-in-left delay-100" style={{opacity: '0'}}>
<div className="w-16 h-16 rounded-2xl mx-auto mb-8 flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--brand-500), var(--accent-2))'}}>
<i className="w-8 h-8 text-white" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-1)'}}>1. Specialist Bots</h3>
<p className="text-lg leading-relaxed" style={{color: 'var(--text-2)'}}>Fundamental, NLP (filings/transcripts/news), macro, and quant factor models each produce a view.</p>
</div>
<div className="text-center slide-up delay-200" style={{opacity: '0'}}>
<div className="w-16 h-16 rounded-2xl mx-auto mb-8 flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--accent-2), var(--accent-3))'}}>
<i className="w-8 h-8 text-white" data-lucide="shuffle" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-1)'}}>2. Ensemble &amp; Reconciliation</h3>
<p className="text-lg leading-relaxed" style={{color: 'var(--text-2)'}}>We weight, cross-validate, and fuse those views into a single AI Street Consensus with uncertainty bands.</p>
</div>
<div className="text-center slide-in-right delay-300" style={{opacity: '0'}}>
<div className="w-16 h-16 rounded-2xl mx-auto mb-8 flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--accent-3), var(--brand-600))'}}>
<i className="w-8 h-8 text-white" data-lucide="search" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-1)'}}>3. Transparency Layer</h3>
<p className="text-lg leading-relaxed" style={{color: 'var(--text-2)'}}>Every output ships with sources, reasoning highlights, and backtests — so you can audit the call.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 slide-up" style={{color: 'var(--text-1)', opacity: '0'}}>Built for Your Workflow</h2>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="glass-card p-10 rounded-2xl glow-hover slide-in-left delay-100" style={{opacity: '0'}}>
<i className="w-12 h-12 mb-6" data-lucide="trending-up" strokeWidth="1.5" style={{color: 'var(--success)'}}></i>
<h3 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-1)'}}>Investors &amp; PMs</h3>
<p className="text-lg leading-relaxed" style={{color: 'var(--text-2)'}}>Expand coverage, spot estimate drift early, and pressure-test theses with scenario tools.</p>
</div>
<div className="glass-card p-10 rounded-2xl glow-hover slide-up delay-200" style={{opacity: '0'}}>
<i className="w-12 h-12 mb-6" data-lucide="newspaper" strokeWidth="1.5" style={{color: 'var(--accent-2)'}}></i>
<h3 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-1)'}}>Media &amp; Data Publishers</h3>
<p className="text-lg leading-relaxed" style={{color: 'var(--text-2)'}}>Drop-in Embeds for ticker pages and articles: Ratings, Estimates, and Surprise Radar.</p>
</div>
<div className="glass-card p-10 rounded-2xl glow-hover slide-in-right delay-300" style={{opacity: '0'}}>
<i className="w-12 h-12 mb-6" data-lucide="smartphone" strokeWidth="1.5" style={{color: 'var(--accent-3)'}}></i>
<h3 className="text-2xl font-semibold mb-6" style={{color: 'var(--text-1)'}}>Brokerages &amp; Fintech Apps</h3>
<p className="text-lg leading-relaxed" style={{color: 'var(--text-2)'}}>Enrich research tabs with real-time AI insights via a clean, rate-limited API.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="glass-card p-12 rounded-3xl">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="slide-in-left" style={{opacity: '0'}}>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8" style={{color: 'var(--text-1)'}}>API &amp; Embeds</h2>
<div className="space-y-6">
<div className="flex items-center">
<i className="w-6 h-6 mr-4" data-lucide="database" strokeWidth="1.5" style={{color: 'var(--brand-500)'}}></i>
<div>
<div className="font-semibold" style={{color: 'var(--text-1)'}}>REST API</div>
<div style={{color: 'var(--text-3)'}}>/estimates, /ratings, /scenarios, /drivers, /alerts</div>
</div>
</div>
<div className="flex items-center">
<i className="w-6 h-6 mr-4" data-lucide="layout" strokeWidth="1.5" style={{color: 'var(--accent-2)'}}></i>
<div>
<div className="font-semibold" style={{color: 'var(--text-1)'}}>Embeddable Widgets</div>
<div style={{color: 'var(--text-3)'}}>Lightweight, brandable components for web &amp; mobile</div>
</div>
</div>
<div className="flex items-center">
<i className="w-6 h-6 mr-4" data-lucide="shield-check" strokeWidth="1.5" style={{color: 'var(--success)'}}></i>
<div>
<div className="font-semibold" style={{color: 'var(--text-1)'}}>SLAs &amp; Logging</div>
<div style={{color: 'var(--text-3)'}}>Uptime targets, request tracing, and usage analytics</div>
</div>
</div>
</div>
<div className="flex space-x-4 mt-8">
<button className="px-6 py-3 font-semibold rounded-xl" style={{backgroundColor: 'var(--brand-500)', color: 'white'}}>View API Docs</button>
<button className="px-6 py-3 font-semibold rounded-xl glass-card">See Embeds</button>
</div>
</div>
<div className="glass-card p-8 rounded-2xl slide-in-right delay-200" style={{opacity: '0', backgroundColor: 'var(--bg-2)'}}>
<div className="flex items-center justify-between mb-4">
<div className="text-sm font-mono" style={{color: 'var(--text-3)'}}>GET /api/v1/estimates</div>
<span className="px-3 py-1 text-xs font-semibold rounded-full" style={{backgroundColor: 'var(--success)', color: 'var(--bg-0)'}}>200</span>
</div>
<pre className="text-sm" style={{color: 'var(--text-2)'}}><code>{
  "ticker": "AAPL",
  "estimate": 1.47,
  "confidence": [1.39, 1.55],
  "last_updated": "2024-01-15T09:30:00Z",
  "rating": "BUY",
  "conviction": 0.85
}</code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 slide-up" style={{color: 'var(--text-1)', opacity: '0'}}>Pricing</h2>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-2xl glow-hover slide-in-left delay-100" style={{opacity: '0'}}>
<h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--text-1)'}}>Starter</h3>
<div className="text-4xl font-bold mb-6" style={{color: 'var(--brand-500)'}}>Free</div>
<p className="mb-8" style={{color: 'var(--text-2)'}}>Free preview on popular tickers, limited refresh</p>
<button className="w-full py-3 font-semibold rounded-xl glass-card hover:bg-white/10 transition-colors">Get Started</button>
</div>
<div className="glass-card p-8 rounded-2xl glow-hover slide-up delay-200" style={{opacity: '0', border: '2px solid var(--brand-500)'}}>
<h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--text-1)'}}>Pro</h3>
<div className="text-4xl font-bold mb-6" style={{color: 'var(--brand-500)'}}>$99<span className="text-lg font-normal">/mo</span></div>
<p className="mb-8" style={{color: 'var(--text-2)'}}>Full coverage, alerts, and embeds</p>
<button className="w-full py-3 font-semibold rounded-xl text-white" style={{backgroundColor: 'var(--brand-500)'}}>Start Free Trial</button>
</div>
<div className="glass-card p-8 rounded-2xl glow-hover slide-in-right delay-300" style={{opacity: '0'}}>
<h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--text-1)'}}>Enterprise</h3>
<div className="text-4xl font-bold mb-6" style={{color: 'var(--brand-500)'}}>Custom</div>
<p className="mb-8" style={{color: 'var(--text-2)'}}>Custom universes, SLAs, and dedicated support</p>
<button className="w-full py-3 font-semibold rounded-xl glass-card hover:bg-white/10 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 slide-up" style={{color: 'var(--text-1)', opacity: '0'}}>Ready to see the future, sooner?</h2>
<p className="text-xl mb-12 slide-up delay-200" style={{color: 'var(--text-2)', opacity: '0'}}>Try the live demo at predictstreet.ai, explore a few tickers, and add our embeds to your next article or app screen.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center slide-up delay-300" style={{opacity: '0'}}>
<button className="px-8 py-4 text-lg font-semibold rounded-2xl glow-hover transition-all text-white" style={{backgroundColor: 'var(--brand-500)'}}>
                    Try the Demo
                </button>
<button className="px-8 py-4 text-lg font-semibold rounded-2xl glass-card glow-hover transition-all" style={{color: 'var(--text-1)'}}>
                    Get API Access
                </button>
<button className="px-8 py-4 text-lg font-semibold rounded-2xl border border-white/20 hover:bg-white/5 transition-all" style={{color: 'var(--text-1)'}}>
                    Talk to Sales
                </button>
</div>
</div>
</section>

<footer className="border-t py-16 px-6" style={{borderColor: 'rgba(255, 255, 255, .08)', backgroundColor: 'var(--bg-1)'}}>
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-4 gap-8 mb-12">
<div>
<div className="text-xl font-bold mb-6 tracking-tight" style={{color: 'var(--text-1)'}}>PredictStreet</div>
<p className="mb-6" style={{color: 'var(--text-2)'}}>AI-powered earnings estimates and analyst ratings that you can trust.</p>
</div>
<div>
<h4 className="font-semibold mb-4" style={{color: 'var(--text-1)'}}>Product</h4>
<div className="space-y-3">
<a className="block hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>Features</a>
<a className="block hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>API</a>
<a className="block hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>Embeds</a>
</div>
</div>
<div>
<h4 className="font-semibold mb-4" style={{color: 'var(--text-1)'}}>Company</h4>
<div className="space-y-3">
<a className="block hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>About</a>
<a className="block hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>Blog</a>
<a className="block hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>Contact</a>
</div>
</div>
<div>
<h4 className="font-semibold mb-4" style={{color: 'var(--text-1)'}}>Resources</h4>
<div className="space-y-3">
<a className="block hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>Documentation</a>
<a className="block hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>Support</a>
<a className="block hover:text-white transition-colors" href="#" style={{color: 'var(--text-2)'}}>Terms</a>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center" style={{borderColor: 'rgba(255,255,255,.08)'}}>
<p style={{color: 'var(--text-3)'}}>© 2024 PredictStreet. All rights reserved.</p>
<p className="text-sm mt-4 md:mt-0" style={{color: 'var(--text-3)'}}>Information is for educational purposes only and not investment advice.</p>
</div>
</div>
</footer>


    </>
  );
}

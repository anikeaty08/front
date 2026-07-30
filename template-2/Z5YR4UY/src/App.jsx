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
        sans: ['Inter', 'sans-serif']
      }
    }
  }
}



function toggleAccordion(header) {
  const item = header.parentElement;
  const content = item.querySelector('.accordion-content');
  const chevron = header.querySelector('.chevron');
  const isActive = content.classList.contains('active');
  
  // Close all other accordions
  document.querySelectorAll('.accordion-item').forEach(otherItem => {
    if (otherItem !== item) {
      otherItem.classList.remove('active');
      otherItem.querySelector('.accordion-content').classList.remove('active');
      otherItem.querySelector('.chevron').classList.remove('rotate');
    }
  });
  
  // Toggle current accordion
  if (isActive) {
    content.classList.remove('active');
    chevron.classList.remove('rotate');
    item.classList.remove('active');
  } else {
    content.classList.add('active');
    chevron.classList.add('rotate');
    item.classList.add('active');
  }
}

// Auto-open first accordion on load
document.addEventListener('DOMContentLoaded', function() {
  const firstAccordion = document.querySelector('.accordion-item .accordion-header');
  if (firstAccordion) {
    toggleAccordion(firstAccordion);
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
      
<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

<section className="text-center mb-16">
<div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
<span className="text-sm font-medium">Quantum Analytics Suite</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter mb-6">
      Professional <span className="text-white">Trading Intelligence</span>
</h1>
<p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
      Advanced market intelligence tools powered by real-time data streams and AI-driven analytics.
    </p>
</section>

<section className="space-y-4">

<div className="accordion-item">
<div className="accordion-header p-6 flex items-center justify-between" onClick={(e) => { toggleAccordion(e.currentTarget) }}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg icon-container flex items-center justify-center">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
<div>
<h3 className="text-xl font-semibold mb-1">Real-Time Market Data</h3>
<p className="text-gray-400 text-sm">Zero-latency feeds from 15+ global exchanges</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1 status-badge px-2 py-1 rounded-full">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
<span className="text-xs font-medium">LIVE</span>
</div>
<svg className="chevron w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="accordion-content">
<div className="px-6 pb-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<div className="metric-card">
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-gray-300">NASDAQ:TSLA</span>
<span className="text-xs text-white">+2.4%</span>
</div>
<div className="text-2xl font-bold">$847.32</div>
</div>
<div className="metric-card">
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-gray-300">NYSE:AAPL</span>
<span className="text-xs text-gray-400">-1.2%</span>
</div>
<div className="text-2xl font-bold">$178.91</div>
</div>
<div className="metric-card">
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-gray-300">CRYPTO:BTC</span>
<span className="text-xs text-white">+3.8%</span>
</div>
<div className="text-2xl font-bold">$42,156</div>
</div>
</div>
<p className="text-gray-300 mb-4">Experience microsecond precision timing with institutional-grade market data feeds. Our quantum processing engine delivers real-time price updates, order book depth, and trade execution data.</p>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition text-sm font-medium">
            View Live Dashboard
            <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16">
<path d="M7 7h10v10M7 17L17 7"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="accordion-item">
<div className="accordion-header p-6 flex items-center justify-between" onClick={(e) => { toggleAccordion(e.currentTarget) }}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg icon-container flex items-center justify-center">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
</svg>
</div>
<div>
<h3 className="text-xl font-semibold mb-1">AI Price Predictions</h3>
<p className="text-gray-400 text-sm">Machine learning models with 87% accuracy</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs status-badge px-2 py-1 rounded-full font-medium">87% Accuracy</span>
<svg className="chevron w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="accordion-content">
<div className="px-6 pb-6">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="metric-card">
<div className="text-sm text-gray-300 mb-1">1-Hour Prediction</div>
<div className="text-xl font-bold text-white">+2.3%</div>
<div className="text-xs text-gray-400">Confidence: 92%</div>
</div>
<div className="metric-card">
<div className="text-sm text-gray-300 mb-1">24-Hour Prediction</div>
<div className="text-xl font-bold text-white">+5.7%</div>
<div className="text-xs text-gray-400">Confidence: 78%</div>
</div>
</div>
<p className="text-gray-300 mb-4">Our neural networks analyze over 200 market indicators, social sentiment, and technical patterns to generate highly accurate price predictions with confidence intervals.</p>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition text-sm font-medium">
            View AI Models
          </button>
</div>
</div>
</div>

<div className="accordion-item">
<div className="accordion-header p-6 flex items-center justify-between" onClick={(e) => { toggleAccordion(e.currentTarget) }}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg icon-container flex items-center justify-center">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<h3 className="text-xl font-semibold mb-1">Risk Analytics</h3>
<p className="text-gray-400 text-sm">Portfolio protection and risk management</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs status-badge px-2 py-1 rounded-full font-medium">Protected</span>
<svg className="chevron w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="accordion-content">
<div className="px-6 pb-6">
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="metric-card">
<div className="text-sm text-gray-300 mb-1">VaR (95%)</div>
<div className="text-lg font-bold">-$2,450</div>
</div>
<div className="metric-card">
<div className="text-sm text-gray-300 mb-1">Sharpe Ratio</div>
<div className="text-lg font-bold text-white">1.82</div>
</div>
<div className="metric-card">
<div className="text-sm text-gray-300 mb-1">Beta</div>
<div className="text-lg font-bold">0.94</div>
</div>
</div>
<p className="text-gray-300 mb-4">Advanced risk metrics including Value at Risk, Expected Shortfall, and stress testing scenarios to protect your portfolio from market volatility.</p>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition text-sm font-medium">
            Risk Dashboard
          </button>
</div>
</div>
</div>

<div className="accordion-item">
<div className="accordion-header p-6 flex items-center justify-between" onClick={(e) => { toggleAccordion(e.currentTarget) }}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg icon-container flex items-center justify-center">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
<path d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<div>
<h3 className="text-xl font-semibold mb-1">Social Sentiment Analysis</h3>
<p className="text-gray-400 text-sm">Real-time sentiment from social media & news</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs status-badge px-2 py-1 rounded-full font-medium">Bullish +72%</span>
<svg className="chevron w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="accordion-content">
<div className="px-6 pb-6">
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
<span className="text-sm">Twitter Sentiment</span>
<span className="text-white font-medium">+68%</span>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
<span className="text-sm">Reddit Discussion</span>
<span className="text-white font-medium">+75%</span>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
<span className="text-sm">News Articles</span>
<span className="text-white font-medium">+58%</span>
</div>
</div>
<p className="text-gray-300 mb-4">Track market sentiment across social platforms, news outlets, and financial forums using advanced NLP to gauge market psychology and predict price movements.</p>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition text-sm font-medium">
            Sentiment Dashboard
          </button>
</div>
</div>
</div>

<div className="accordion-item">
<div className="accordion-header p-6 flex items-center justify-between" onClick={(e) => { toggleAccordion(e.currentTarget) }}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg icon-container flex items-center justify-center">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
<path d="M3 3v16a2 2 0 0 0 2 2h16M18 17V9M13 17V5M8 17v-3"></path>
</svg>
</div>
<div>
<h3 className="text-xl font-semibold mb-1">Options Flow Tracking</h3>
<p className="text-gray-400 text-sm">Unusual options activity and dark pool data</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs status-badge px-2 py-1 rounded-full font-medium">Unusual Activity</span>
<svg className="chevron w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="accordion-content">
<div className="px-6 pb-6">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="metric-card">
<div className="text-sm text-gray-300 mb-1">Call/Put Ratio</div>
<div className="text-xl font-bold text-white">1.34</div>
</div>
<div className="metric-card">
<div className="text-sm text-gray-300 mb-1">Dark Pool Volume</div>
<div className="text-xl font-bold">$2.4B</div>
</div>
</div>
<p className="text-gray-300 mb-4">Monitor institutional money flow through options markets and dark pools to identify smart money movements before they impact stock prices.</p>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition text-sm font-medium">
            Options Flow
          </button>
</div>
</div>
</div>

<div className="accordion-item">
<div className="accordion-header p-6 flex items-center justify-between" onClick={(e) => { toggleAccordion(e.currentTarget) }}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg icon-container flex items-center justify-center">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
<path d="M10.268 21a2 2 0 0 0 3.464 0M4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17"></path>
</svg>
</div>
<div>
<h3 className="text-xl font-semibold mb-1">Smart Alerts System</h3>
<p className="text-gray-400 text-sm">AI-powered notifications and trade signals</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs status-badge px-2 py-1 rounded-full font-medium">24/7 Monitor</span>
<svg className="chevron w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="accordion-content">
<div className="px-6 pb-6">
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 p-3 bg-white/5 border border-white/20 rounded-lg">
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="flex-1">
<div className="text-sm font-medium">Price Breakout Alert</div>
<div className="text-xs text-gray-400">TSLA broke above $850 resistance</div>
</div>
<div className="text-xs text-gray-400">2m ago</div>
</div>
<div className="flex items-center gap-3 p-3 bg-white/5 border border-white/20 rounded-lg">
<div className="w-2 h-2 bg-gray-400 rounded-full"></div>
<div className="flex-1">
<div className="text-sm font-medium">Volume Spike</div>
<div className="text-xs text-gray-400">AAPL volume 3x above average</div>
</div>
<div className="text-xs text-gray-400">5m ago</div>
</div>
</div>
<p className="text-gray-300 mb-4">Intelligent alerts powered by machine learning that adapt to market conditions and your trading preferences. Never miss important market movements again.</p>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition text-sm font-medium">
            Configure Alerts
          </button>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}

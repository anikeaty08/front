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
      

<section className="bg-gradient-to-br from-orange-100 via-white to-blue-50">
<div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">

<div className="flex-1 space-y-6">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full text-white text-2xl font-bold shadow-lg">
<svg className="h-7 w-7" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20l9-5-9-5-9 5 9 5zm0 0V4m0 16v-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-3xl md:text-4xl font-extrabold text-orange-600">Sentiback</span>
</div>
<h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Transform Hospitality Feedback<br/>
<span className="text-orange-600">with AI</span>
</h1>
<p className="text-lg md:text-xl text-gray-700">
          The all-in-one sentiment analysis platform for restaurants &amp; hospitality chains.<br/>
<span className="text-blue-700 font-semibold">Unlock actionable insights from customer and staff feedback — in real time.</span>
</p>
<a className="inline-block px-8 py-3 bg-orange-600 text-white rounded-xl shadow-md font-semibold hover:bg-orange-700 transition" href="#demo">
          Book a Demo
        </a>
</div>

<div className="flex-1 flex items-center justify-center">
<img alt="Restaurant Feedback Analysis" className="rounded-3xl shadow-xl w-full max-w-sm border-4 border-blue-100" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-14">
<h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">The Challenge for Modern Hospitality</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
<span className="mb-3 text-orange-500">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path>
</svg>
</span>
<span className="font-semibold text-lg">Unactionable Feedback</span>
<p className="text-gray-500 text-sm mt-2 text-center">Surveys and reviews pile up with no clear path to improvement.</p>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
<span className="mb-3 text-blue-600">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2"></path>
<path d="M12 15v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2"></path>
</svg>
</span>
<span className="font-semibold text-lg">Delayed Response</span>
<p className="text-gray-500 text-sm mt-2 text-center">Service issues are spotted too late, impacting guest experience.</p>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
<span className="mb-3 text-orange-400">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 16l4-4m0 0l-4-4m4 4H7"></path>
</svg>
</span>
<span className="font-semibold text-lg">Disconnected Teams</span>
<p className="text-gray-500 text-sm mt-2 text-center">Managers and staff lack a unified view of feedback and performance.</p>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
<span className="mb-3 text-blue-400">
<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M13 16h-1v-4h-1m1-4h.01"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</span>
<span className="font-semibold text-lg">Poor Staff Insights</span>
<p className="text-gray-500 text-sm mt-2 text-center">Staff satisfaction is hard to measure, leading to high turnover.</p>
</div>
</div>
</section>

<section className="bg-white py-16">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-bold text-blue-900 mb-10 text-center">The Sentiback Solution</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-orange-50 rounded-lg p-7 flex flex-col items-center shadow">
<span className="mb-4 text-orange-600">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 20h5v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2h5"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</span>
<h4 className="font-bold text-lg mb-2">Real-Time Feedback</h4>
<p className="text-gray-600 text-center text-sm">Instantly capture guest &amp; staff feedback from multiple touchpoints.</p>
</div>
<div className="bg-blue-50 rounded-lg p-7 flex flex-col items-center shadow">
<span className="mb-4 text-blue-600">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 20h9"></path>
<path d="M12 4v16"></path>
<path d="M4 4v16"></path>
</svg>
</span>
<h4 className="font-bold text-lg mb-2">AI Sentiment Analysis</h4>
<p className="text-gray-600 text-center text-sm">AI categorizes feedback and detects urgent issues automatically.</p>
</div>
<div className="bg-orange-50 rounded-lg p-7 flex flex-col items-center shadow">
<span className="mb-4 text-orange-500">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 3v18h18"></path>
<path d="M9 9h6v6H9z"></path>
</svg>
</span>
<h4 className="font-bold text-lg mb-2">Actionable Insights</h4>
<p className="text-gray-600 text-center text-sm">Get clear, prioritized recommendations and visual dashboards.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
<div className="flex items-center space-x-4">
<span className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600">
<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 8v4l3 3"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</span>
<div>
<h5 className="font-bold text-md">Staff Feedback Integration</h5>
<p className="text-gray-600 text-sm">Track and boost team morale with confidential surveys.</p>
</div>
</div>
<div className="flex items-center space-x-4">
<span className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full text-orange-500">
<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M4 17l6-6 4 4 6-6"></path>
</svg>
</span>
<div>
<h5 className="font-bold text-md">Multi-Branch Insights</h5>
<p className="text-gray-600 text-sm">Compare performance across locations for strategic decisions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-blue-50 via-orange-50 to-white py-16" id="how">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-2xl font-bold text-blue-900 mb-12 text-center">How Sentiback Works</h2>
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center">
<span className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mb-3">1</span>
<h4 className="font-semibold mb-1">Collect</h4>
<p className="text-sm text-gray-600 text-center">Gather feedback from guests and staff across all your channels.</p>
</div>
<svg className="w-8 h-8 text-orange-400 hidden md:block" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
<div className="flex flex-col items-center">
<span className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-3">2</span>
<h4 className="font-semibold mb-1">Analyze</h4>
<p className="text-sm text-gray-600 text-center">AI interprets sentiment and highlights trends &amp; urgent issues.</p>
</div>
<svg className="w-8 h-8 text-orange-400 hidden md:block" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
<div className="flex flex-col items-center">
<span className="w-14 h-14 rounded-full bg-orange-400 text-white flex items-center justify-center text-2xl font-bold mb-3">3</span>
<h4 className="font-semibold mb-1">Recommend</h4>
<p className="text-sm text-gray-600 text-center">Sentiback delivers clear, prioritized actions for your teams.</p>
</div>
<svg className="w-8 h-8 text-orange-400 hidden md:block" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
<div className="flex flex-col items-center">
<span className="w-14 h-14 rounded-full bg-blue-400 text-white flex items-center justify-center text-2xl font-bold mb-3">4</span>
<h4 className="font-semibold mb-1">Improve</h4>
<p className="text-sm text-gray-600 text-center">Track results, boost satisfaction, and elevate guest experiences.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16">
<h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Hospitality Results That Matter</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
<span className="mb-3 text-orange-500">
<svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7"></path>
</svg>
</span>
<span className="font-bold text-lg">30% Lower Churn</span>
<p className="text-gray-600 text-center text-sm mt-2">Retain guests with pro-active issue resolution.</p>
</div>
<div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
<span className="mb-3 text-blue-600">
<svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 20l9-5-9-5-9 5 9 5zm0 0V4m0 16v-6"></path>
</svg>
</span>
<span className="font-bold text-lg">4.8★ Guest Ratings</span>
<p className="text-gray-600 text-center text-sm mt-2">Drive higher satisfaction scores across locations.</p>
</div>
<div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
<span className="mb-3 text-orange-400">
<svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M15 9l-6 6"></path>
</svg>
</span>
<span className="font-bold text-lg">+25% Staff Morale</span>
<p className="text-gray-600 text-center text-sm mt-2">Foster a happier, more engaged team.</p>
</div>
<div className="bg-white rounded-xl p-6 shadow flex flex-col items-center">
<span className="mb-3 text-blue-400">
<svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</span>
<span className="font-bold text-lg">Smarter Decisions</span>
<p className="text-gray-600 text-center text-sm mt-2">Act with confidence using real-time, data-driven insights.</p>
</div>
</div>
</section>

<section className="bg-blue-50 py-16">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">What Restaurant Leaders Say</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white rounded-xl p-6 shadow flex flex-col">
<div className="flex items-center mb-4">
<span className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M15 9l-6 6"></path>
</svg>
</span>
<div>
<div className="font-semibold">Maria G.</div>
<div className="text-gray-500 text-xs">Regional Manager, UrbanEats</div>
</div>
</div>
<p className="text-gray-700 text-sm">“Sentiback helped us spot issues before they became problems. Our guest ratings went up and staff feel truly heard.”</p>
</div>
<div className="bg-white rounded-xl p-6 shadow flex flex-col">
<div className="flex items-center mb-4">
<span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4M12 8h.01"></path>
</svg>
</span>
<div>
<div className="font-semibold">James D.</div>
<div className="text-gray-500 text-xs">Owner, The Table Collective</div>
</div>
</div>
<p className="text-gray-700 text-sm">“We finally have a clear picture across our locations. The recommendations are spot-on and easy to act on.”</p>
</div>
<div className="bg-white rounded-xl p-6 shadow flex flex-col">
<div className="flex items-center mb-4">
<span className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 12H8"></path>
</svg>
</span>
<div>
<div className="font-semibold">Case Study</div>
<div className="text-gray-500 text-xs">QuickBites Use Case</div>
</div>
</div>
<p className="text-gray-700 text-sm">“After onboarding Sentiback, we reduced negative reviews by 38% and grew repeat business. Staff turnover is down 20%.”</p>
</div>
</div>
</div>
</section>

<section className="py-14 bg-gradient-to-r from-orange-500 to-blue-700">
<div className="max-w-2xl mx-auto text-center px-6">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to See Sentiback in Action?</h2>
<p className="text-lg text-blue-100 mb-8">Schedule a free demo and discover how AI-powered feedback transforms your hospitality business.</p>
<a className="inline-block px-10 py-4 bg-white text-orange-600 font-bold rounded-xl shadow hover:bg-gray-100 transition" href="#demo">
        Schedule a Free Demo
      </a>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-16">
<h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Simple, Flexible Pricing</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-orange-400">
<div className="font-bold text-lg mb-2">Basic</div>
<div className="text-3xl font-bold text-orange-500 mb-4">Free</div>
<ul className="text-sm text-gray-600 space-y-2 mb-6">
<li>Single location</li>
<li>Core sentiment analysis</li>
<li>Email support</li>
</ul>
<a className="block px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition" href="#demo">Get Started</a>
</div>
<div className="bg-white rounded-xl shadow-xl p-8 text-center border-t-4 border-blue-600 scale-105 md:scale-110">
<div className="font-bold text-lg mb-2">Pro</div>
<div className="text-3xl font-bold text-blue-600 mb-4">$79<span className="text-base font-normal text-gray-500">/mo</span></div>
<ul className="text-sm text-gray-600 space-y-2 mb-6">
<li>Up to 5 locations</li>
<li>Advanced AI insights</li>
<li>Staff feedback tools</li>
<li>Priority support</li>
</ul>
<a className="block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition" href="#demo">Start Free Trial</a>
</div>
<div className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-orange-500">
<div className="font-bold text-lg mb-2">Enterprise</div>
<div className="text-3xl font-bold text-orange-500 mb-4">Custom</div>
<ul className="text-sm text-gray-600 space-y-2 mb-6">
<li>Unlimited locations</li>
<li>Custom integrations</li>
<li>Dedicated CSM</li>
<li>API access</li>
</ul>
<a className="block px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition" href="#contact">Talk to Us</a>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-200 py-10">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-6">
<div className="flex items-center gap-3 mb-4 md:mb-0">
<span className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full text-white text-xl font-bold shadow">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20l9-5-9-5-9 5 9 5zm0 0V4m0 16v-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-lg font-bold text-orange-400">Sentiback</span>
</div>
<nav className="flex gap-6 text-sm">
<a className="hover:text-white" href="#about">About</a>
<a className="hover:text-white" href="#privacy">Privacy Policy</a>
<a className="hover:text-white" href="#contact">Contact</a>
<a aria-label="Twitter" className="hover:text-white" href="https://twitter.com/">
<svg className="inline h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.89 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2-4.52 4.47 0 .35.04.69.12 1A12.94 12.94 0 013 1.15a4.48 4.48 0 001.4 6A4.37 4.37 0 012 6.1v.06a4.52 4.52 0 003.64 4.44 4.48 4.48 0 01-2 .08 4.52 4.52 0 004.2 3.13A9.06 9.06 0 012 19.54a12.9 12.9 0 007 2.05c8.4 0 13-7 13-13v-.6A9.18 9.18 0 0023 3z"></path></svg>
</a>
<a aria-label="LinkedIn" className="hover:text-white" href="https://linkedin.com/">
<svg className="inline h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.09-1.89-3.09-1.89 0-2.18 1.48-2.18 3v5.69h-3v-10h2.89v1.37h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.55v5.62z"></path></svg>
</a>
</nav>
</div>
<div className="text-center text-xs text-gray-500 mt-6">© 2024 Sentiback. All rights reserved.</div>
</footer>

    </>
  );
}

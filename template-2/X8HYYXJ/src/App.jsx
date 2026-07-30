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
  lucide.createIcons();
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-stone-950/80 border-stone-800/50" style={{opacity: `0`, animation: `slideDown 0.8s ease-out 0.1s forwards`}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-tr from-teal-400 to-blue-500">
<svg className="lucide lucide-book-open w-4 h-4 text-white" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<span className="text-lg font-semibold text-white font-geist" style={{transition: `outline 0.1s ease-in-out`}}>DocuFlow</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-geist text-stone-300" href="#" style={{transition: `outline 0.1s ease-in-out`}}>Features</a>
<a className="hover:text-white transition-colors text-sm font-geist text-stone-300" href="#" style={{transition: `outline 0.1s ease-in-out`}}>Pricing</a>
<a className="hover:text-white transition-colors text-sm font-geist text-stone-300" href="#" style={{transition: `outline 0.1s ease-in-out`}}>Docs</a>
<button className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors font-geist bg-orange-600 hover:bg-orange-700" style={{transition: `outline 0.1s ease-in-out`}}>
          Get Started
        </button>
</div>
<button className="md:hidden text-stone-300">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</nav>
<main className="">

<section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br via-purple-900/10 to-stone-950 from-orange-900/20"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

<div className="lg:w-5/12 space-y-8" style={{opacity: `0`, animation: `slideInLeft 1s ease-out 0.3s forwards`}}>

<div className="inline-flex items-center gap-2 border rounded-full px-4 py-2 text-sm bg-orange-500/10 border-orange-500/20 text-orange-300">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Now with AI-powered search</span>
</div>

<h1 className="text-4xl lg:text-6xl text-white tracking-tight leading-tight font-manrope font-medium" style={{}}>
            Documentation that
            <span className="bg-clip-text text-transparent font-manrope font-medium bg-gradient-to-br from-pink-500 to-rose-500" style={{}}>
              converts users
            </span>
</h1>

<p className="text-lg lg:text-xl leading-relaxed max-w-lg font-geist text-stone-300" style={{transition: `outline 0.1s ease-in-out`}}>
            Build beautiful, searchable documentation that your users will love. 
            Trusted by over 50,000 companies worldwide.
          </p>

<div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-zap w-3 h-3 text-emerald-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="font-geist text-stone-200" style={{transition: `outline 0.1s ease-in-out`}}>Lightning-fast search with AI insights</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-palette w-3 h-3 text-blue-400" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="font-geist text-stone-200" style={{transition: `outline 0.1s ease-in-out`}}>Fully customizable themes and branding</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-3 h-3 text-purple-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<span className="font-geist text-stone-200" style={{transition: `outline 0.1s ease-in-out`}}>Advanced analytics and user insights</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4">
<button className="text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg font-geist bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25" style={{transition: `outline 0.1s ease-in-out`}}>
              Start Free Trial
            </button>
<button className="border hover:text-white px-8 py-3 rounded-lg font-medium transition-all font-geist border-stone-700 hover:border-stone-600 text-stone-300 hover:bg-stone-800/50" style={{transition: `outline 0.1s ease-in-out`}}>
              View Demo
            </button>
</div>

<div className="pt-8">
<p className="text-sm mb-4 font-geist text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>Trusted by leading companies</p>
<div className="flex items-center gap-6 opacity-60">
<span className="text-sm font-medium font-geist" style={{transition: `outline 0.1s ease-in-out`}}>TechCorp</span>
<span className="text-sm font-medium font-geist" style={{transition: `outline 0.1s ease-in-out`}}>DataFlow</span>
<span className="text-sm font-medium font-geist" style={{transition: `outline 0.1s ease-in-out`}}>CloudBase</span>
<span className="text-sm font-medium font-geist" style={{transition: `outline 0.1s ease-in-out`}}>DevTools</span>
</div>
</div>
</div>

<div className="lg:w-7/12" style={{opacity: `0`, animation: `slideInRight 1s ease-out 0.5s forwards`}}>
<div className="relative">

<div className="rounded-xl border shadow-2xl overflow-hidden bg-stone-900 border-stone-800">

<div className="px-4 py-3 flex items-center gap-2 bg-stone-800">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-orange-500"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="px-3 py-1 rounded text-xs font-geist bg-stone-700 text-stone-300" style={{transition: `outline 0.1s ease-in-out`}}>
                    docs.docuflow.com
                  </div>
</div>
</div>

<img alt="DocuFlow Documentation Interface" className="w-full h-96 lg:h-[500px] object-cover" src="https://images.unsplash.com/photo-1677443030437-93c9f5e08ae6?w=2160&q=80" />
</div>

<div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium font-geist" style={{transition: `outline 0.1s ease-in-out`}}>
              99% Uptime
            </div>
<div className="absolute -bottom-4 -left-4 text-white px-3 py-1 rounded-full text-xs font-medium font-geist bg-orange-600" style={{transition: `outline 0.1s ease-in-out`}}>
              {"<"} 100ms Search
            </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 lg:py-32 border-t border-stone-800/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="text-center mb-16" style={{opacity: `0`, animation: `slideInUp 0.8s ease-out 0.7s forwards`}}>
<h2 className="text-3xl lg:text-5xl text-white mb-4 tracking-tight font-manrope font-medium" style={{}}>
          Everything you need to succeed
        </h2>
<p className="text-lg max-w-2xl mx-auto font-geist text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>
          From AI-powered search to detailed analytics, DocuFlow provides all the tools 
          your team needs to create exceptional documentation experiences.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

<div className="space-y-8" style={{opacity: `0`, animation: `slideInLeft 0.8s ease-out 0.9s forwards`}}>
<div className="">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-orange-500/20">
<svg className="lucide lucide-search w-5 h-5 text-orange-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-2xl lg:text-3xl text-white font-manrope font-medium" style={{}}>Intelligent Search</h3>
</div>
<p className="text-lg leading-relaxed mb-8 font-geist text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>
              Help your users find exactly what they're looking for with our AI-powered search engine. 
              Natural language processing understands intent, not just keywords.
            </p>
</div>

<div className="backdrop-blur-sm border rounded-xl p-6 bg-stone-900/60 border-stone-800/60">

<div className="flex items-center gap-3 rounded-lg px-4 py-3 mb-6 transition-colors bg-stone-800/70 hover:bg-stone-800">
<svg className="lucide lucide-search w-5 h-5 text-stone-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="flex-1 font-geist text-stone-300" style={{transition: `outline 0.1s ease-in-out`}}>How do I integrate the payment API?</span>
<div className="flex items-center gap-2">
<kbd className="px-2 py-1 rounded text-xs font-geist bg-stone-700 text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>⌘</kbd>
<kbd className="px-2 py-1 rounded text-xs font-geist bg-stone-700 text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>K</kbd>
</div>
</div>

<div className="space-y-3">
<div className="flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer hover:bg-stone-800/50">
<div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-credit-card w-4 h-4 text-emerald-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="flex-1">
<div className="text-white font-medium mb-1 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Payment Integration Guide</div>
<div className="text-sm font-geist text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>Complete setup instructions for Stripe, PayPal, and more...</div>
</div>
<div className="text-xs font-geist text-stone-500" style={{transition: `outline 0.1s ease-in-out`}}>API Reference</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer hover:bg-stone-800/50">
<div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-code w-4 h-4 text-blue-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<div className="flex-1">
<div className="text-white font-medium mb-1 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>SDK Examples</div>
<div className="text-sm font-geist text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>Code samples for JavaScript, Python, and Ruby...</div>
</div>
<div className="text-xs font-geist text-stone-500" style={{transition: `outline 0.1s ease-in-out`}}>Examples</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer hover:bg-stone-800/50">
<div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-help-circle w-4 h-4 text-purple-400" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="flex-1">
<div className="text-white font-medium mb-1 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Troubleshooting Payment Issues</div>
<div className="text-sm font-geist text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>Common problems and their solutions...</div>
</div>
<div className="text-xs font-geist text-stone-500" style={{transition: `outline 0.1s ease-in-out`}}>Support</div>
</div>
</div>
</div>
</div>

<div className="space-y-8" style={{opacity: `0`, animation: `slideInRight 0.8s ease-out 1.1s forwards`}}>
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-trending-up w-5 h-5 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-2xl lg:text-3xl text-white font-manrope font-medium" style={{}}>Advanced Analytics</h3>
</div>
<p className="text-lg leading-relaxed mb-8 font-geist text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>
              Understand how users interact with your documentation. Track popular pages, 
              search queries, and user journeys to continuously improve your content.
            </p>
</div>

<div className="backdrop-blur-sm border rounded-xl p-6 bg-stone-900/60 border-stone-800/60">

<div className="grid grid-cols-2 gap-6 mb-8">
<div className="text-center">
<div className="text-2xl text-white mb-1 font-manrope font-medium" style={{}}>47.2K</div>
<div className="text-sm font-geist text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>Monthly Visitors</div>
<div className="text-xs text-emerald-400 mt-1 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>+23% from last month</div>
</div>
<div className="text-center">
<div className="text-2xl text-white mb-1 font-manrope font-medium" style={{}}>12.4K</div>
<div className="text-sm font-geist text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>Search Queries</div>
<div className="text-xs text-blue-400 mt-1 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>+18% from last month</div>
</div>
<div className="text-center">
<div className="text-2xl text-white mb-1 font-manrope font-medium" style={{}}>3.2m</div>
<div className="text-sm font-geist text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>Page Views</div>
<div className="text-xs text-purple-400 mt-1 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>+31% from last month</div>
</div>
<div className="text-center">
<div className="text-2xl text-white mb-1 font-manrope font-medium" style={{}}>4.7s</div>
<div className="text-sm font-geist text-stone-400" style={{transition: `outline 0.1s ease-in-out`}}>Avg. Session</div>
<div className="text-xs text-yellow-400 mt-1 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>+12% from last month</div>
</div>
</div>

<div className="relative h-32 mb-4">
<div className="absolute inset-0 flex items-end justify-between gap-1">
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `45%`}}></div>
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `65%`}}></div>
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `30%`}}></div>
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `80%`}}></div>
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `55%`}}></div>
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `95%`}}></div>
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `40%`}}></div>
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `70%`}}></div>
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `35%`}}></div>
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `85%`}}></div>
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `25%`}}></div>
<div className="w-full bg-gradient-to-t rounded-t from-orange-500/60 to-orange-400/40" style={{height: `60%`}}></div>
</div>
</div>

<div className="flex justify-between text-xs text-stone-500">
<span className="font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Dec 1</span>
<span className="font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Dec 15</span>
<span className="font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Dec 31</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t py-12 border-stone-800/50" style={{opacity: `0`, animation: `slideInUp 0.8s ease-out 1.3s forwards`}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-tr from-teal-400 to-blue-500">
<svg className="lucide lucide-book-open w-4 h-4 text-white" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<span className="text-lg font-semibold text-white font-geist" style={{transition: `outline 0.1s ease-in-out`}}>DocuFlow</span>
</div>
<div className="flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-geist text-stone-400" href="#" style={{transition: `outline 0.1s ease-in-out`}}>Privacy</a>
<a className="hover:text-white transition-colors text-sm font-geist text-stone-400" href="#" style={{transition: `outline 0.1s ease-in-out`}}>Terms</a>
<a className="hover:text-white transition-colors text-sm font-geist text-stone-400" href="#" style={{transition: `outline 0.1s ease-in-out`}}>Support</a>
</div>
<div className="text-sm font-geist text-stone-500" style={{transition: `outline 0.1s ease-in-out`}}>
        © 2024 DocuFlow Technologies. All rights reserved.
      </div>
</div>
</div>
</footer>




    </>
  );
}

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
colors: {
brand: {
50: '#f5f3ff',
100: '#ede9fe',
200: '#ddd6fe',
300: '#c4b5fd',
400: '#a78bfa',
500: '#8b5cf6',
600: '#7c3aed',
700: '#6d28d9',
800: '#5b21b6',
900: '#4c1d95',
950: '#2e1065',
}
},
boxShadow: {
'glow': '0 0 40px -10px rgba(139, 92, 246, 0.3)',
'inner-light': 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
}
}
}
}



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
      

<div className="fixed inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-brand-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-brand-400 to-brand-600 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/20">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="text-white font-medium text-lg tracking-tight">Creator<span className="text-neutral-500">Layer</span></div>
</div>
<div className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
<a className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 rounded-full shadow-inner-light" href="#">Product</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Resources</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sign in</a>
<button className="px-3 py-1.5 bg-white text-black text-xs font-medium rounded-md hover:bg-neutral-200 transition-colors shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative z-10 mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs text-brand-300 mb-6 backdrop-blur-sm animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                New: AI-Powered Analytics 2.0
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8 leading-[1.05]">
                Orchestrate your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">digital presence.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The all-in-one operating system for modern creators. Build portfolios, manage sponsorships, and track analytics across every channel in real-time.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                    Start Building <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-10 px-6 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2 group">
<i className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" data-lucide="play-circle"></i> Watch Demo
                </button>
</div>
</div>

<div className="relative max-w-6xl mx-auto perspective-[2000px] group z-10">

<div className="relative rounded-xl bg-[#0A0A0A] border border-white/10 shadow-2xl shadow-brand-900/20 overflow-hidden transform rotate-x-12 group-hover:rotate-x-0 transition-transform duration-1000 ease-out origin-center">

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 px-3 py-1 rounded bg-black/40 border border-white/5 text-[10px] text-neutral-500 flex items-center gap-2 w-64">
<i className="w-3 h-3" data-lucide="lock"></i> creatorlayer.com/dashboard
                    </div>
</div>

<div className="flex h-[500px]">

<div className="w-60 border-r border-white/5 bg-black/20 p-4 hidden md:block">
<div className="space-y-1">
<div className="px-3 py-2 bg-brand-500/10 text-brand-300 rounded-md text-xs font-medium flex items-center gap-2 border border-brand-500/20">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Overview
                            </div>
<div className="px-3 py-2 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 rounded-md text-xs font-medium flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i> Analytics
                            </div>
<div className="px-3 py-2 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 rounded-md text-xs font-medium flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="wallet"></i> Earnings
                            </div>
<div className="px-3 py-2 text-neutral-500 hover:text-neutral-300 hover:bg-white/5 rounded-md text-xs font-medium flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="users"></i> Audience
                            </div>
</div>
<div className="mt-8">
<div className="text-[10px] font-semibold text-neutral-600 uppercase tracking-wider mb-2 px-3">Connect</div>
<div className="space-y-1">
<div className="px-3 py-2 text-neutral-500 hover:bg-white/5 rounded-md text-xs flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div> Shopify
                                </div>
<div className="px-3 py-2 text-neutral-500 hover:bg-white/5 rounded-md text-xs flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div> Stripe
                                </div>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 bg-gradient-to-b from-neutral-900/50 to-black">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-xl font-semibold text-white">Performance</h2>
<p className="text-xs text-neutral-500">Last 30 days revenue analytics</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-xs text-neutral-300 hover:bg-white/10">Export</button>
<button className="px-3 py-1.5 rounded-md bg-white text-xs text-black font-medium hover:bg-neutral-200">New Report</button>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="text-xs text-neutral-500 mb-1">Total Revenue</div>
<div className="text-2xl font-medium text-white tracking-tight">$124,592</div>
<div className="text-[10px] text-green-400 mt-2 flex items-center gap-1">+12.5% <i className="w-3 h-3" data-lucide="trending-up"></i></div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="text-xs text-neutral-500 mb-1">Active Subscribers</div>
<div className="text-2xl font-medium text-white tracking-tight">8,430</div>
<div className="text-[10px] text-green-400 mt-2 flex items-center gap-1">+4.2% <i className="w-3 h-3" data-lucide="users"></i></div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="text-xs text-neutral-500 mb-1">Engagement Rate</div>
<div className="text-2xl font-medium text-white tracking-tight">24.8%</div>
<div className="text-[10px] text-neutral-500 mt-2 flex items-center gap-1">Same as last mo.</div>
</div>
</div>

<div className="h-48 rounded-xl border border-white/5 bg-white/[0.02] p-4 relative overflow-hidden">

<div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
<div className="border-b border-r border-white/[0.02]"></div><div className="border-b border-r border-white/[0.02]"></div>
<div className="border-b border-r border-white/[0.02]"></div><div className="border-b border-r border-white/[0.02]"></div>
<div className="border-b border-r border-white/[0.02]"></div><div className="border-b border-r border-white/[0.02]"></div>
<div className="border-b border-r border-white/[0.02]"></div><div className="border-b border-r border-white/[0.02]"></div>
<div className="border-b border-r border-white/[0.02]"></div><div className="border-b border-r border-white/[0.02]"></div>
<div className="border-b border-r border-white/[0.02]"></div><div className="border-b border-r border-white/[0.02]"></div>
<div className="border-b border-r border-white/[0.02]"></div><div className="border-b border-r border-white/[0.02]"></div>
<div className="border-b border-r border-white/[0.02]"></div><div className="border-b border-r border-white/[0.02]"></div>
<div className="border-b border-r border-white/[0.02]"></div><div className="border-b border-r border-white/[0.02]"></div>
</div>

<svg className="absolute inset-0 w-full h-full p-4 pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: '0.3'}}></stop>
<stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0,45 C10,40 20,42 30,30 C40,18 50,25 60,20 C70,15 80,10 90,12 C95,13 100,5 100,5 V50 H0 Z" fill="url(#grad)"></path>
<path d="M0,45 C10,40 20,42 30,30 C40,18 50,25 60,20 C70,15 80,10 90,12 C95,13 100,5 100,5" fill="none" stroke="#8b5cf6" strokeWidth="0.5"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-20 bg-neutral-900 border border-white/10 p-3 rounded-lg shadow-2xl flex items-center gap-3 z-20 animate-pulse">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="bell"></i>
</div>
<div>
<div className="text-[10px] font-medium text-white">New Subscriber</div>
<div className="text-[9px] text-neutral-500">Just now • Pro Plan</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black py-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-neutral-500 mb-6 font-medium uppercase tracking-widest">Trusted by 10,000+ creators and teams</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-50">

<div className="flex items-center gap-2 text-lg font-semibold text-white"><i className="fill-white w-4 h-4" data-lucide="triangle"></i> Vercel</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><i className="fill-white w-4 h-4" data-lucide="hexagon"></i> Linear</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><i className="fill-white w-4 h-4" data-lucide="box"></i> Dropbox</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><i className="fill-white w-4 h-4" data-lucide="circle"></i> Circle</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><i className="fill-white w-4 h-4" data-lucide="layers"></i> Raycast</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Everything you need to grow.</h2>
<p className="text-neutral-400">Powerful tools designed for the modern creator economy, integrated into a single seamless workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-6 lg:col-span-8 group relative rounded-3xl border border-white/10 bg-neutral-900/30 overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-brand-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5">
<i className="w-5 h-5 text-brand-400" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Deep Insights</h3>
<p className="text-sm text-neutral-400 max-w-sm">Understand your audience with pixel-perfect accuracy. Real-time events, conversion tracking, and demographic data.</p>
</div>

<div className="mt-8 w-full h-32 flex items-end justify-between gap-1">
<div className="w-full bg-brand-500/20 rounded-t-sm h-[40%] group-hover:h-[60%] transition-all duration-500"></div>
<div className="w-full bg-brand-500/20 rounded-t-sm h-[70%] group-hover:h-[50%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-brand-500/20 rounded-t-sm h-[50%] group-hover:h-[80%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-brand-500/20 rounded-t-sm h-[80%] group-hover:h-[60%] transition-all duration-500 delay-150"></div>
<div className="w-full bg-brand-500/40 rounded-t-sm h-[90%] group-hover:h-[95%] transition-all duration-500 delay-200"></div>
<div className="w-full bg-brand-500/20 rounded-t-sm h-[60%] group-hover:h-[70%] transition-all duration-500 delay-300"></div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-4 group relative rounded-3xl border border-white/10 bg-neutral-900/30 overflow-hidden hover:border-white/20 transition-colors">
<div className="p-8 h-full flex flex-col relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5">
<i className="w-5 h-5 text-yellow-400" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Automation</h3>
<p className="text-sm text-neutral-400 mb-8">Trigger actions based on behavior.</p>

<div className="flex-1 font-mono text-[10px] text-neutral-500 bg-black/40 p-3 rounded-lg border border-white/5 space-y-2">
<div className="flex items-center gap-2">
<span className="text-purple-400">if</span>
<span className="text-white">user.clicked</span>
<span className="text-blue-400">==</span>
<span className="text-green-400">true</span>
</div>
<div className="pl-4 flex items-center gap-2 border-l border-neutral-800">
<span className="text-yellow-400">await</span>
<span className="text-white">send_email()</span>
</div>
<div className="flex items-center gap-2">
<span className="text-purple-400">else</span>
</div>
<div className="pl-4 flex items-center gap-2 border-l border-neutral-800">
<span className="text-white">retarget()</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-4 group relative rounded-3xl border border-white/10 bg-neutral-900/30 overflow-hidden hover:border-white/20 transition-colors">
<div className="p-8 h-full relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5">
<i className="w-5 h-5 text-green-400" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-1">Enterprise Ready</h3>
<p className="text-xs text-neutral-500">SOC2 Type II Compliant and GDPR ready.</p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-8 group relative rounded-3xl border border-white/10 bg-neutral-900/30 overflow-hidden hover:border-white/20 transition-colors">
<div className="p-8 flex flex-col md:flex-row items-center justify-between gap-8 h-full relative z-10">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5">
<i className="w-5 h-5 text-blue-400" data-lucide="blocks"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Seamless Integration</h3>
<p className="text-sm text-neutral-400">Connect with your favorite tools in one click. Webhooks API available.</p>
</div>

<div className="flex gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center border border-white/5 shadow-lg"><i className="w-5 h-5 text-white" data-lucide="slack"></i></div>
<div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center border border-white/5 shadow-lg"><i className="w-5 h-5 text-white" data-lucide="figma"></i></div>
<div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center border border-white/5 shadow-lg"><i className="w-5 h-5 text-white" data-lucide="github"></i></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1 space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Focus on creating.<br/>We handle the rest.</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center mt-1 border border-brand-500/20 text-brand-400 font-mono text-sm">1</div>
<div>
<h4 className="text-white font-medium mb-2">Centralize Assets</h4>
<p className="text-neutral-400 text-sm leading-relaxed">Upload all your digital products, services, and content to one secure vault. We organize everything automatically.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center mt-1 border border-brand-500/20 text-brand-400 font-mono text-sm">2</div>
<div>
<h4 className="text-white font-medium mb-2">Launch Storefront</h4>
<p className="text-neutral-400 text-sm leading-relaxed">Deploy a high-conversion landing page in seconds using our React-based visual builder.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center mt-1 border border-brand-500/20 text-brand-400 font-mono text-sm">3</div>
<div>
<h4 className="text-white font-medium mb-2">Monetize instantly</h4>
<p className="text-neutral-400 text-sm leading-relaxed">Accept payments from 135+ countries with automated tax compliance and invoicing.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 w-full">
<div className="relative rounded-2xl border border-white/10 bg-black overflow-hidden shadow-2xl">

<div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-white/5">
<span className="text-xs text-neutral-500 font-mono">deployment_config.json</span>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
</div>
<div className="p-6 font-mono text-xs overflow-x-auto">
<div className="text-neutral-500 mb-2">// Global Store Configuration</div>
<div className="space-y-1">
<div><span className="text-pink-400">const</span> <span className="text-blue-300">config</span> = {</div>
<div className="pl-4 text-white">storeName: <span className="text-green-300">'Design Mastery'</span>,</div>
<div className="pl-4 text-white">currency: <span className="text-green-300">'USD'</span>,</div>
<div className="pl-4 text-white">integrations: [</div>
<div className="pl-8 text-white"><span className="text-green-300">'Stripe'</span>,</div>
<div className="pl-8 text-white"><span className="text-green-300">'Mailchimp'</span>,</div>
<div className="pl-8 text-white"><span className="text-green-300">'Discord'</span></div>
<div className="pl-4 text-white">],</div>
<div className="pl-4 text-white">features: {</div>
<div className="pl-8 text-white">analytics: <span className="text-purple-400">true</span>,</div>
<div className="pl-8 text-white">autoTax: <span className="text-purple-400">true</span></div>
<div className="pl-4 text-white">}</div>
<div className="text-white">}</div>
</div>
</div>

<div className="absolute bottom-6 right-6 bg-neutral-800 text-green-400 text-xs px-3 py-1.5 rounded-md border border-green-500/20 flex items-center gap-2 shadow-lg">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Deploying...
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Simple, transparent pricing</h2>
<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm text-neutral-400">Monthly</span>
<button className="w-12 h-6 bg-brand-600 rounded-full relative px-1">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</button>
<span className="text-sm text-white">Yearly <span className="text-brand-300 text-xs ml-1 font-medium">-20%</span></span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
<div className="text-lg font-medium text-white mb-2">Hobby</div>
<div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg font-normal text-neutral-500">/mo</span></div>
<p className="text-sm text-neutral-400 mb-8 border-b border-white/5 pb-8">Perfect for testing ideas and building your first audience.</p>
<ul className="space-y-4 text-sm text-neutral-300 mb-8">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> 1 Project</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> 5% Transaction fee</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Basic Analytics</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 text-sm font-medium transition-colors">Start Free</button>
</div>

<div className="p-8 rounded-2xl border border-brand-500/50 bg-neutral-900/60 relative shadow-[0_0_50px_-20px_rgba(139,92,246,0.2)]">
<div className="absolute top-0 right-0 bg-brand-600 text-[10px] text-white font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
<div className="text-lg font-medium text-white mb-2">Creator</div>
<div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg font-normal text-neutral-500">/mo</span></div>
<p className="text-sm text-neutral-400 mb-8 border-b border-white/5 pb-8">Everything you need to run a professional creative business.</p>
<ul className="space-y-4 text-sm text-neutral-300 mb-8">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-400" data-lucide="check"></i> Unlimited Projects</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-400" data-lucide="check"></i> 0% Transaction fee</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-400" data-lucide="check"></i> Custom Domain</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-400" data-lucide="check"></i> Advanced Analytics</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 text-sm font-medium transition-colors shadow-lg shadow-brand-500/25">Get Started</button>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
<div className="text-lg font-medium text-white mb-2">Agency</div>
<div className="text-4xl font-bold text-white mb-6">$99<span className="text-lg font-normal text-neutral-500">/mo</span></div>
<p className="text-sm text-neutral-400 mb-8 border-b border-white/5 pb-8">Advanced controls and support for scaling teams.</p>
<ul className="space-y-4 text-sm text-neutral-300 mb-8">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> 5 Team Seats</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> SSO &amp; SAML</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Priority 24/7 Support</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 text-sm font-medium transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="px-6 pb-6">
<div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-brand-950 border border-white/10 overflow-hidden relative">
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 blur-[100px] rounded-full"></div>
<div className="relative z-10 px-8 py-20 md:px-20 text-center">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6">Ready to launch?</h2>
<p className="text-neutral-400 mb-10 max-w-lg mx-auto">Join the platform powering the world's best creators. No credit card required for the 14-day trial.</p>
<form className="max-w-md mx-auto flex gap-2 mb-6">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors placeholder:text-neutral-600" placeholder="Enter your email" type="email"/>
<button className="px-6 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors">Start Trial</button>
</form>
<p className="text-[10px] text-neutral-500">By clicking "Start Trial" you agree to our Terms &amp; Conditions.</p>
</div>
</div>
</section>

<footer className="pt-20 pb-10 px-6 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-white/10 rounded-md"></div>
<span className="text-white font-medium">Creator Layer</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs mb-6">Empowering the next generation of digital entrepreneurs with world-class tools.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-neutral-600">© 2024 Creator Layer Inc. All rights reserved.</div>
<div className="flex items-center gap-2 text-xs text-neutral-600">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Systems Operational
                </div>
</div>
</div>
</footer>


    </>
  );
}

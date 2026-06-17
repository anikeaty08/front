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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center">
<iconify-icon className="text-zinc-950" icon="solar:route-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="font-semibold text-xl tracking-tighter text-white">AEON</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Network</a>
<a className="hover:text-white transition-colors" href="#">Fleet Capabilities</a>
<a className="hover:text-white transition-colors" href="#">API &amp; Tracking</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:block text-sm font-medium text-white bg-transparent hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-200">Sign In</button>
<button className="text-sm font-medium text-zinc-950 bg-white hover:bg-zinc-200 px-4 py-2 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]">Get a Quote</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-40 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Introducing our EV Freight Fleet <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-6 max-w-4xl">
                The operating system for modern freight.
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-10 font-normal leading-relaxed">
                We combine an autonomous-ready fleet with predictive routing infrastructure to deliver your cargo faster, safer, and with perfect visibility.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<button className="w-full sm:w-auto text-sm font-medium text-zinc-950 bg-white hover:bg-zinc-200 px-6 py-3 rounded-full transition-all duration-200 flex items-center justify-center gap-2">
                    Start Shipping <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-full transition-all duration-200 border border-white/10 flex items-center justify-center gap-2">
                    Explore API Docs
                </button>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950/50 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex md:justify-between md:items-end">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Engineered for scale.</h2>
<p className="text-zinc-400 text-base">From heavy haul to precise last-mile delivery, our infrastructure adapts to your supply chain requirements in real-time.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Full Truckload (FTL)</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Dedicated capacity for large shipments with environmental controls and continuous monitoring.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Dynamic Routing</h3>
<p className="text-sm text-zinc-400 leading-relaxed">AI-powered dispatch systems that adapt to traffic, weather, and fleet metrics in milliseconds.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Secure Transit</h3>
<p className="text-sm text-zinc-400 leading-relaxed">End-to-end chain of custody with digitally secured trailers and automated anomaly detection.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col lg:col-span-2 relative overflow-hidden">
<div className="relative z-10 w-1/2">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Supply Chain Analytics</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Gain granular insights into your logistics spend, transit times, and carbon footprint through our centralized dashboard.</p>
<a className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors" href="#">View Dashboard <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></a>
</div>

<div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDIwMHYyMDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTAgMTkwTDE5MCAxME0xOTAgMTkwTDEwIDEwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] bg-cover opacity-50 mask-image:linear-gradient(to_left,black,transparent)]"></div>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Cross-Border</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Seamless customs clearance and compliance automation for international freight movement.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-20">
<div className="lg:w-1/2 mb-16 lg:mb-0">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-6">
<iconify-icon icon="solar:code-square-linear"></iconify-icon> Developer API
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Sub-second visibility.</h2>
<p className="text-zinc-400 text-base mb-8 leading-relaxed">Stop wondering where your freight is. Our unified platform provides high-frequency telemetry data on vehicle location, precise ETA calculations, and real-time cargo conditions.</p>
<div className="space-y-5">
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">High-Fidelity Telemetry</h4>
<p className="text-xs text-zinc-500">GPS updates pushed to webhooks every 5 seconds.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Environmental Logs</h4>
<p className="text-xs text-zinc-500">Continuous temperature and humidity tracking for sensitive goods.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl -z-10 rounded-full"></div>

<div className="rounded-xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/5">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-900/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-zinc-400" icon="solar:box-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white tracking-wider">TRK-894-2094</div>
<div className="text-[10px] text-zinc-500 uppercase">Priority Freight</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-blue-400">In Transit</span>
</div>
</div>

<div className="p-6">
<div className="relative pl-5 border-l border-white/10 space-y-8">

<div className="relative">
<div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-700 ring-4 ring-zinc-950"></div>
<div className="text-sm font-medium text-zinc-300 mb-0.5">Dispatched from Hub</div>
<div className="text-xs text-zinc-600">Los Angeles, CA • Oct 24, 08:00 AM</div>
</div>

<div className="relative">
<div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-zinc-950 shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
<div className="flex items-center justify-between mb-0.5">
<div className="text-sm font-medium text-white">Weigh Station Cleared</div>
<div className="text-xs font-mono text-zinc-500">ETA: 4h 12m</div>
</div>
<div className="text-xs text-zinc-500 mb-3">Denver, CO • Oct 25, 02:30 PM</div>

<div className="flex gap-2">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/5">
<iconify-icon className="text-zinc-400" icon="solar:speedometer-linear" width="14"></iconify-icon>
<span className="text-[10px] text-zinc-300 font-mono">68 mph</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/5">
<iconify-icon className="text-zinc-400" icon="solar:thermometer-linear" width="14"></iconify-icon>
<span className="text-[10px] text-zinc-300 font-mono">38.5°F</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-800 ring-4 ring-zinc-950"></div>
<div className="text-sm font-medium text-zinc-600 mb-0.5">Destination Arrival</div>
<div className="text-xs text-zinc-700">Chicago, IL • Pending</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/5">
<div className="flex flex-col items-center md:items-start md:px-8 first:pl-0">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">99.9%</div>
<div className="text-xs text-zinc-500 font-medium">On-Time Delivery Rate</div>
</div>
<div className="flex flex-col items-center md:items-start md:px-8">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">12,000+</div>
<div className="text-xs text-zinc-500 font-medium">Active Fleet Assets</div>
</div>
<div className="flex flex-col items-center md:items-start md:px-8">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">&lt;50ms</div>
<div className="text-xs text-zinc-500 font-medium">API Response Time</div>
</div>
<div className="flex flex-col items-center md:items-start md:px-8">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">48</div>
<div className="text-xs text-zinc-500 font-medium">Contiguous States Covered</div>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded bg-white flex items-center justify-center">
<iconify-icon className="text-zinc-950" icon="solar:route-linear" strokeWidth="2" width="14"></iconify-icon>
</div>
<div className="font-semibold text-lg tracking-tighter text-white">AEON</div>
</div>
<p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                        Building the modern infrastructure for global freight and logistics. Faster, safer, and entirely transparent.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Platform</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Freight Network</a></li>
<li><a className="hover:text-white transition-colors" href="#">Fleet Hardware</a></li>
<li><a className="hover:text-white transition-colors" href="#">Routing Engine</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Developers</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Webhooks</a></li>
<li><a className="hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-zinc-600">
<p>© 2024 Aeon Logistics Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Security</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

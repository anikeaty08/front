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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      

<div className="pointer-events-none fixed inset-0 z-0 flex justify-center opacity-20">
<div className="h-full w-[1px] bg-neutral-900 absolute left-1/4"></div>
<div className="h-full w-[1px] bg-neutral-900 absolute left-2/4"></div>
<div className="h-full w-[1px] bg-neutral-900 absolute left-3/4"></div>
</div>

<header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center group" href="#">
<span className="text-3xl font-medium tracking-tighter leading-none relative">ruti<span className="inline-block w-2 h-2 bg-white rounded-full absolute bottom-1 -right-2"></span></span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Product</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">API</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Use cases</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Docs</a>
</nav>

<div className="flex items-center gap-6">
<a className="text-sm text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Login</a>
<a className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors" href="#">Get started</a>
</div>
</div>
</header>
<main className="flex-grow z-10 pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 mb-32 lg:mb-48">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[60vh]">

<div className="flex flex-col gap-8 max-w-xl">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1]">
                        Infrastructure for modern logistics.
                    </h1>
<div className="space-y-4">
<p className="text-xl md:text-2xl text-neutral-300 tracking-tight">
                            Ruti connects merchants, fleets, and 3PLs through one unified API.
                        </p>
<p className="text-lg text-neutral-500">
                            Build scalable delivery operations without managing point-to-point integrations.
                        </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-base font-medium hover:bg-neutral-200 transition-colors" href="#">
                            View API
                            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="flex items-center justify-center gap-2 bg-transparent border border-neutral-800 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-neutral-900 transition-colors" href="#">
                            Start sending
                        </a>
</div>
<p className="text-xs text-neutral-600 pt-2">
                        For platforms, fleets, 3PLs, mobility networks, and merchants.
                    </p>
</div>

<div className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto border border-neutral-900 rounded-[2rem] bg-neutral-950 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center opacity-40">
<div className="w-[80%] h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent absolute"></div>
<div className="h-[80%] w-px bg-gradient-to-b from-transparent via-neutral-500 to-transparent absolute"></div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 20 20 Q 50 20 50 50 T 80 80" fill="none" stroke="#262626" strokeWidth="0.5"></path>
<path d="M 20 80 Q 50 80 50 50 T 80 20" fill="none" stroke="#262626" strokeWidth="0.5"></path>
</svg>
</div>

<div className="relative w-full h-full">

<div className="absolute left-[15%] top-1/4 -translate-y-1/2 flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-neutral-800 bg-black flex items-center justify-center z-10">
<i className="w-4 h-4 text-neutral-400" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-neutral-500 hidden sm:block">Platforms</span>
</div>
<div className="absolute left-[15%] top-3/4 -translate-y-1/2 flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-neutral-800 bg-black flex items-center justify-center z-10">
<i className="w-4 h-4 text-neutral-400" data-lucide="store" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-neutral-500 hidden sm:block">Merchants</span>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="w-24 h-24 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.05)]">
<div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
<span className="text-xl font-medium tracking-tighter relative">ruti<span className="inline-block w-1 h-1 bg-white rounded-full absolute bottom-1 -right-1.5"></span></span>
</div>
</div>

<div className="absolute inset-0 rounded-full border border-white/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>

<div className="absolute right-[15%] top-1/4 -translate-y-1/2 flex flex-row-reverse items-center gap-3">
<div className="w-10 h-10 rounded-full border border-neutral-800 bg-black flex items-center justify-center z-10">
<i className="w-4 h-4 text-neutral-400" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-neutral-500 hidden sm:block text-right">3PLs</span>
</div>
<div className="absolute right-[15%] top-3/4 -translate-y-1/2 flex flex-row-reverse items-center gap-3">
<div className="w-10 h-10 rounded-full border border-neutral-800 bg-black flex items-center justify-center z-10">
<i className="w-4 h-4 text-neutral-400" data-lucide="car" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-neutral-500 hidden sm:block text-right">Fleets</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">One platform for delivery operations.</h2>
<p className="text-lg text-neutral-400">Use Ruti to create deliveries, route them to the best fleet, and track every order in one system.</p>
</div>
<div className="grid md:grid-cols-3 gap-12">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center mb-2">
<span className="text-sm text-neutral-500 font-medium">01</span>
</div>
<h3 className="text-xl font-medium tracking-tight">Create deliveries</h3>
<p className="text-base text-neutral-500 leading-relaxed">Inject demand via API or our merchant platform seamlessly into the network.</p>
</div>
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center mb-2">
<span className="text-sm text-neutral-500 font-medium">02</span>
</div>
<h3 className="text-xl font-medium tracking-tight">Route to the best</h3>
<p className="text-base text-neutral-500 leading-relaxed">Our engine automatically matches each delivery with the optimal courier or fleet.</p>
</div>
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center mb-2">
<span className="text-sm text-neutral-500 font-medium">03</span>
</div>
<h3 className="text-xl font-medium tracking-tight">Track in real time</h3>
<p className="text-base text-neutral-500 leading-relaxed">Maintain complete operational visibility over every active delivery from one dashboard.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">One infrastructure layer.<br/><span className="text-neutral-500">Two ways to use it.</span></h2>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="border border-neutral-900 rounded-[2rem] p-8 md:p-12 bg-neutral-950/50 flex flex-col h-full">
<div className="mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 mb-6">
<span className="w-2 h-2 rounded-full bg-white"></span>
<span className="text-xs text-neutral-300">For developers</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Integrate once. Access delivery networks through one API.</h3>
<p className="text-base text-neutral-500">Designed for e-commerce platforms, 3PLs, and mobility networks to build scalable delivery.</p>
</div>
<div className="mt-auto rounded-xl border border-neutral-800 bg-black overflow-hidden font-mono text-sm leading-relaxed">
<div className="flex items-center px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<span className="ml-4 text-xs text-neutral-500">POST /v1/deliveries</span>
</div>
<div className="p-6 text-neutral-400 overflow-x-auto">
<pre><code><span className="text-neutral-500">await</span> ruti.<span className="text-white">deliveries</span>.<span className="text-white">create</span>({
  <span className="text-neutral-300">pickup</span>: {
    address: <span className="text-neutral-200">"123 Commerce St"</span>,
    contact: <span className="text-neutral-200">"+1234567890"</span>
  },
  <span className="text-neutral-300">dropoff</span>: {
    address: <span className="text-neutral-200">"456 Consumer Way"</span>,
    contact: <span className="text-neutral-200">"+0987654321"</span>
  },
  <span className="text-neutral-300">service_level</span>: <span className="text-neutral-200">"same_day"</span>
});</code></pre>
</div>
</div>
</div>

<div className="border border-neutral-900 rounded-[2rem] p-8 md:p-12 bg-neutral-950/50 flex flex-col h-full">
<div className="mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 mb-6">
<span className="w-2 h-2 rounded-full border border-white"></span>
<span className="text-xs text-neutral-300">For merchants</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Send deliveries without code using Ruti's native platform.</h3>
<p className="text-base text-neutral-500">Designed for physical shops, independent retailers, and non-technical businesses.</p>
</div>
<div className="mt-auto rounded-xl border border-neutral-800 bg-black p-6 flex flex-col gap-4">
<div className="flex items-center justify-between border-b border-neutral-900 pb-4">
<span className="text-sm font-medium">New Delivery</span>
<div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center">
<i className="w-3 h-3 text-neutral-500" data-lucide="x" strokeWidth="2"></i>
</div>
</div>
<div className="relative pl-6 space-y-6 py-2">

<div className="absolute left-[11px] top-4 bottom-4 w-px bg-neutral-800"></div>

<div className="relative">
<div className="absolute -left-[27px] top-1.5 w-2 h-2 rounded-full bg-white ring-4 ring-black"></div>
<div className="text-xs text-neutral-500 mb-1">Pickup</div>
<div className="h-10 rounded-lg border border-neutral-800 bg-neutral-900/50 flex items-center px-3 text-sm text-neutral-300">
                                    Current Location
                                </div>
</div>

<div className="relative">
<div className="absolute -left-[27px] top-1.5 w-2 h-2 rounded-full border-2 border-neutral-600 bg-black ring-4 ring-black"></div>
<div className="text-xs text-neutral-500 mb-1">Dropoff</div>
<div className="h-10 rounded-lg border border-neutral-800 bg-neutral-900/50 flex items-center px-3 text-sm text-neutral-500">
                                    Enter destination...
                                </div>
</div>
</div>
<button className="w-full h-10 rounded-lg bg-white text-black text-sm font-medium mt-2">
                            Calculate Route
                        </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
<div className="max-w-3xl mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Built for every part of logistics.</h2>
<p className="text-xl text-neutral-400 leading-relaxed">Ruti connects businesses, developers, and delivery networks into one unified ecosystem, replacing fragmented point-to-point connections.</p>
</div>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-16">

<div className="group relative">
<div className="absolute -inset-y-4 -inset-x-6 z-0 scale-95 bg-neutral-900/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-white" data-lucide="code-2" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium">For Developers</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                Integrate delivery in minutes, not months.
                            </li>
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                One unified API for disparate fleets and 3PLs.
                            </li>
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                Avoid managing multiple point-to-point integrations.
                            </li>
</ul>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-y-4 -inset-x-6 z-0 scale-95 bg-neutral-900/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-white" data-lucide="store" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium">For Merchants</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                Send deliveries instantly without writing code.
                            </li>
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                Manage orders through a clean native dashboard.
                            </li>
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                Built for physical shops to social commerce sellers.
                            </li>
</ul>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-y-4 -inset-x-6 z-0 scale-95 bg-neutral-900/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-white" data-lucide="network" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium">For Platforms &amp; Mobility</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                Turn existing driver networks into logistics infrastructure.
                            </li>
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                Automate delivery logic for your e-commerce users.
                            </li>
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                Unlock new logistics revenue streams seamlessly.
                            </li>
</ul>
</div>
</div>

<div className="group relative">
<div className="absolute -inset-y-4 -inset-x-6 z-0 scale-95 bg-neutral-900/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-white" data-lucide="route" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium">For Fleets &amp; 3PLs</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                Plug into Ruti demand without building a full API stack.
                            </li>
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                Increase utilization by receiving routed delivery jobs.
                            </li>
<li className="flex items-start gap-3 text-base text-neutral-400">
<div className="w-1 h-1 rounded-full bg-neutral-600 mt-2.5 shrink-0"></div>
                                Run more structured operations with digital customers.
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
<div className="flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/3">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Shared infrastructure.</h2>
<p className="text-lg text-neutral-400">Everything runs on the same underlying delivery network, ensuring scale and reliability.</p>
</div>
<div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-6">
<div className="flex items-center justify-between border-b border-neutral-900 pb-4">
<span className="text-lg text-neutral-300">Routing engine</span>
<i className="w-4 h-4 text-neutral-600" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between border-b border-neutral-900 pb-4">
<span className="text-lg text-neutral-300">Multi-fleet orchestration</span>
<i className="w-4 h-4 text-neutral-600" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between border-b border-neutral-900 pb-4">
<span className="text-lg text-neutral-300">Dynamic pricing</span>
<i className="w-4 h-4 text-neutral-600" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between border-b border-neutral-900 pb-4">
<span className="text-lg text-neutral-300">Real-time tracking</span>
<i className="w-4 h-4 text-neutral-600" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between border-b border-neutral-900 pb-4">
<span className="text-lg text-neutral-300">Trust and verification</span>
<i className="w-4 h-4 text-neutral-600" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<div className="flex items-center justify-between border-b border-neutral-900 pb-4">
<span className="text-lg text-neutral-300">Operational visibility</span>
<i className="w-4 h-4 text-neutral-600" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
<h2 className="text-3xl font-medium tracking-tight mb-12">Why teams choose Ruti.</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center mb-6">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<h3 className="text-lg font-medium text-white">Unified Layer</h3>
<p className="text-sm text-neutral-400 leading-relaxed">No more managing dozens of individual courier APIs. Integrate once and access everything.</p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center mb-6">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<h3 className="text-lg font-medium text-white">Market Ready</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Specifically built for fragmented logistics markets requiring robust orchestration.</p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center mb-6">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<h3 className="text-lg font-medium text-white">Two Interfaces</h3>
<p className="text-sm text-neutral-400 leading-relaxed">A developer-first API and a no-code merchant platform, running on the same infrastructure.</p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center mb-6">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<h3 className="text-lg font-medium text-white">Scalable</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Move from manual coordination to programmatic operations designed for massive volume.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32 border-t border-neutral-900 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">Build or send.<br/><span className="text-neutral-500">Ruti handles the network.</span></h2>
<p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">From platforms to physical merchants, Ruti powers delivery through one system.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center bg-white text-black px-8 py-3.5 rounded-full text-base font-medium hover:bg-neutral-200 transition-colors" href="#">
                    Get API access
                </a>
<a className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-neutral-800 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-neutral-900 transition-colors" href="#">
                    Create account
                </a>
</div>
</section>
</main>

<footer className="border-t border-neutral-900 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<a className="inline-block mb-4" href="#">
<span className="text-2xl font-medium tracking-tighter relative text-neutral-400 hover:text-white transition-colors">ruti<span className="inline-block w-1.5 h-1.5 bg-neutral-400 rounded-full absolute bottom-1 -right-1.5"></span></span>
</a>
<p className="text-sm text-neutral-500 max-w-xs">
                        Infrastructure for modern logistics. One unified layer for merchants, fleets, and platforms.
                    </p>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-white mb-2">Product</span>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">API Platform</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Merchant Dashboard</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-white mb-2">Developers</span>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Status</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-white mb-2">Company</span>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Contact</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Legal</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-900">
<p className="text-xs text-neutral-600">© 2024 Ruti Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-neutral-600 hover:text-white transition-colors" href="#">
<span className="sr-only">Twitter</span>
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#">
<span className="sr-only">GitHub</span>
<i className="w-4 h-4" data-lucide="github" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-1 text-xl font-medium tracking-tighter text-black" href="#">
                ruti<span className="text-black/40">.</span>
</a>

<nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm text-[#666666] hover:text-black transition-colors" href="#">Product</a>
<a className="text-sm text-[#666666] hover:text-black transition-colors" href="#">API</a>
<a className="text-sm text-[#666666] hover:text-black transition-colors" href="#">Platform</a>
<a className="text-sm text-[#666666] hover:text-black transition-colors" href="#">Use cases</a>
<a className="text-sm text-[#666666] hover:text-black transition-colors" href="#">Docs</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-[#666666] hover:text-black transition-colors" href="#">Login</a>
<a className="text-sm bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-black/90 transition-colors" href="#">
                    Get started
                </a>
</div>
</div>
</header>
<main className="pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pt-24 lg:pb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="max-w-xl">
<h1 className="text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1] text-black">
                        Infrastructure for modern logistics.
                    </h1>
<p className="text-xl text-[#555555] font-normal mt-6 leading-relaxed">
                        Ruti connects merchants, fleets, and 3PLs through one unified API.
                    </p>
<p className="text-base text-[#666666] mt-3 max-w-md">
                        Build scalable delivery operations without managing point-to-point integrations.
                    </p>
<div className="flex flex-wrap items-center gap-4 mt-10">
<a className="flex items-center gap-2 text-sm bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-colors" href="#">
                            View API <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-sm bg-white text-black border border-black/10 shadow-sm px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors" href="#">
                            Start sending
                        </a>
</div>
<p className="text-xs text-[#888] mt-6 tracking-wide uppercase">
                        For platforms, fleets, 3PLs, mobility networks &amp; merchants
                    </p>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#fafafa] rounded-3xl border border-black/5 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-grid opacity-80"></div>

<div className="relative w-full h-full flex items-center justify-center">

<div className="node-line-h w-2/3 top-1/2 -translate-y-1/2"></div>
<div className="node-line-v h-2/3 left-1/2 -translate-x-1/2"></div>

<div className="absolute z-10 w-24 h-24 bg-white border border-black/10 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.05)] backdrop-blur-sm">
<span className="text-xl font-medium tracking-tighter text-black">ruti.</span>
</div>


<div className="absolute top-[20%] left-[20%] z-10 flex flex-col items-center gap-2">
<div className="w-3 h-3 bg-black rounded-full shadow-sm"></div>
<span className="text-xs text-[#666] font-mono uppercase tracking-widest">Supply</span>
</div>

<div className="absolute bottom-[20%] right-[20%] z-10 flex flex-col items-center gap-2">
<div className="w-3 h-3 bg-black rounded-full shadow-sm"></div>
<span className="text-xs text-[#666] font-mono uppercase tracking-widest">Demand</span>
</div>

<div className="absolute top-[20%] right-[20%] z-10">
<div className="w-2 h-2 border border-[#999] bg-white rounded-full"></div>
</div>

<div className="absolute bottom-[20%] left-[20%] z-10">
<div className="w-2 h-2 border border-[#999] bg-white rounded-full"></div>
</div>

<svg className="absolute inset-0 w-full h-full text-black/10" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 20 20 C 50 20, 50 80, 80 80" fill="none" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5"></path>
<path d="M 20 80 C 50 80, 50 20, 80 20" fill="none" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5"></path>
</svg>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6"><div className="h-px w-full bg-black/5"></div></div>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

<div className="lg:col-span-5">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-black leading-tight">
                        One platform for delivery operations.
                    </h2>
<p className="text-base text-[#555] mt-6 max-w-sm">
                        Use Ruti to create deliveries, route them to the best fleet, and track every order in one unified system.
                    </p>
</div>

<div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10">

<div className="flex gap-6">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center bg-[#fafafa]">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<div>
<h3 className="text-lg font-medium text-black">Create deliveries</h3>
<p className="text-sm text-[#555] mt-2 leading-relaxed">
                                Standardized payload for any delivery type. Drop in origin, destination, and package details instantly.
                            </p>
</div>
</div>

<div className="flex gap-6">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center bg-[#fafafa]">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<div>
<h3 className="text-lg font-medium text-black">Route to the best fleet</h3>
<p className="text-sm text-[#555] mt-2 leading-relaxed">
                                Our orchestration engine automatically assigns the delivery to the optimal courier based on price, speed, and reliability.
                            </p>
</div>
</div>

<div className="flex gap-6">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center bg-[#fafafa]">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<div>
<h3 className="text-lg font-medium text-black">Track in real time</h3>
<p className="text-sm text-[#555] mt-2 leading-relaxed">
                                Unified webhooks and status updates regardless of which underlying 3PL or fleet is executing the job.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-black">
                    One infrastructure layer.<br/>Two ways to use it.
                </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-[#fafafa] border border-black/5 rounded-3xl p-8 lg:p-12 flex flex-col">
<div className="mb-10">
<div className="text-xs font-mono text-[#666] uppercase tracking-widest mb-4">For Developers</div>
<h3 className="text-2xl font-medium text-black tracking-tight">Integrate once. Access networks through one API.</h3>
<p className="text-sm text-[#555] mt-4 max-w-md">
                            Built for e-commerce platforms, 3PLs, and mobility networks. Avoid managing point-to-point connections.
                        </p>
</div>

<div className="mt-auto bg-white border border-black/10 shadow-sm rounded-2xl p-6 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-8 bg-black/[0.02] border-b border-black/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
<span className="text-[10px] font-mono text-[#666] ml-4">POST /v1/deliveries</span>
</div>
<pre className="font-mono text-xs leading-loose pt-8 overflow-x-auto text-black">
<span className="text-[#666]">import</span> { Ruti } <span className="text-[#666]">from</span> 'ruti-node';

<span className="text-[#666]">const</span> ruti = <span className="text-[#666]">new</span> Ruti(<span className="text-[#000]">'sk_live_...'</span>);

<span className="text-[#666]">const</span> delivery = <span className="text-[#666]">await</span> ruti.deliveries.create({
  pickup: {
    address: <span className="text-[#000]">'123 Commerce St'</span>,
    phone: <span className="text-[#000]">'+15550100'</span>
  },
  dropoff: {
    address: <span className="text-[#000]">'456 Retail Ave'</span>
  },
  auto_route: <span className="text-[#000]">true</span>
});</pre>
</div>
</div>

<div className="bg-[#fafafa] border border-black/5 rounded-3xl p-8 lg:p-12 flex flex-col">
<div className="mb-10">
<div className="text-xs font-mono text-[#666] uppercase tracking-widest mb-4">For Merchants</div>
<h3 className="text-2xl font-medium text-black tracking-tight">Send deliveries without code using our native app.</h3>
<p className="text-sm text-[#555] mt-4 max-w-md">
                            Built for physical shops, retailers, and social sellers. Create, dispatch, and track from a clean dashboard.
                        </p>
</div>

<div className="mt-auto bg-[#f5f5f5] border border-black/10 shadow-inner rounded-2xl p-4 overflow-hidden relative h-[240px] flex flex-col gap-3">

<div className="flex items-center justify-between border-b border-black/5 pb-3">
<div className="text-sm font-medium text-black">Deliveries</div>
<div className="bg-black text-white text-[10px] font-medium px-3 py-1.5 rounded-full">New Delivery</div>
</div>

<div className="bg-white border border-black/5 shadow-sm rounded-xl p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-black"></div>
<div>
<div className="text-xs text-black font-medium">#RT-8842</div>
<div className="text-[10px] text-[#555]">In transit • 12 mins away</div>
</div>
</div>
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
<iconify-icon className="text-[#666] text-[10px]" icon="solar:routing-linear"></iconify-icon>
</div>
</div>
<div className="bg-white border border-black/5 shadow-sm rounded-xl p-3 flex items-center justify-between opacity-70">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full border border-black/40"></div>
<div>
<div className="text-xs text-black font-medium">#RT-8841</div>
<div className="text-[10px] text-[#555]">Delivered • 10:42 AM</div>
</div>
</div>
</div>
<div className="bg-white border border-black/5 shadow-sm rounded-xl p-3 flex items-center justify-between opacity-50">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full border border-black/40"></div>
<div>
<div className="text-xs text-black font-medium">#RT-8840</div>
<div className="text-[10px] text-[#555]">Delivered • Yesterday</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
<div className="border-t border-black/10 pt-16">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-black mb-4">Built for every part of logistics.</h2>
<p className="text-base text-[#555]">Ruti connects businesses, developers, and delivery networks into one unified system.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

<div className="group">
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<h4 className="text-base font-medium text-black">E-commerce Platforms</h4>
</div>
<ul className="space-y-3">
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Automate delivery via API
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Create deliveries instantly
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Track orders in real time
                            </li>
</ul>
</div>

<div className="group">
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<h4 className="text-base font-medium text-black">Developers</h4>
</div>
<ul className="space-y-3">
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Integrate delivery in minutes
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> One API for fleets &amp; 3PLs
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Avoid multiple integrations
                            </li>
</ul>
</div>

<div className="group">
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<h4 className="text-base font-medium text-black">Merchants</h4>
</div>
<ul className="space-y-3">
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Send deliveries without code
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Manage via native dashboard
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Ideal for social commerce
                            </li>
</ul>
</div>

<div className="group border-t border-black/5 pt-8 lg:pt-0 lg:border-t-0">
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 bg-transparent border border-black/30 rounded-full"></div>
<h4 className="text-base font-medium text-black">3PLs</h4>
</div>
<ul className="space-y-3">
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Plug in without building APIs
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Receive more delivery demand
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Access digital customers
                            </li>
</ul>
</div>

<div className="group border-t border-black/5 pt-8 lg:pt-0 lg:border-t-0">
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 bg-transparent border border-black/30 rounded-full"></div>
<h4 className="text-base font-medium text-black">Fleets</h4>
</div>
<ul className="space-y-3">
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Receive structured delivery jobs
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Improve fleet utilization
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Run structured operations
                            </li>
</ul>
</div>

<div className="group border-t border-black/5 pt-8 lg:pt-0 lg:border-t-0">
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 bg-transparent border border-black/30 rounded-full"></div>
<h4 className="text-base font-medium text-black">Mobility Platforms</h4>
</div>
<ul className="space-y-3">
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Turn drivers into logistics
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Increase network utilization
                            </li>
<li className="text-sm text-[#555] flex items-start gap-2">
<span className="text-black/20 mt-0.5">-</span> Unlock new revenue streams
                            </li>
</ul>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6"><div className="h-px w-full bg-black/5"></div></div>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-black mb-4">Shared infrastructure for delivery.</h2>
<p className="text-base text-[#555]">Everything runs on the same underlying network. Core capabilities powering both our API and native platform.</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">

<div>
<iconify-icon className="text-black text-xl mb-4" icon="solar:route-linear"></iconify-icon>
<h4 className="text-sm font-medium text-black mb-2">Routing engine</h4>
<p className="text-xs text-[#555] leading-relaxed">Geospatial calculation for optimal paths across multiple stops and constraints.</p>
</div>

<div>
<iconify-icon className="text-black text-xl mb-4" icon="solar:layers-minimalistic-linear"></iconify-icon>
<h4 className="text-sm font-medium text-black mb-2">Multi-fleet orchestration</h4>
<p className="text-xs text-[#555] leading-relaxed">Automated fallback and dispatching rules across disjointed carrier networks.</p>
</div>

<div>
<iconify-icon className="text-black text-xl mb-4" icon="solar:calculator-minimalistic-linear"></iconify-icon>
<h4 className="text-sm font-medium text-black mb-2">Pricing engine</h4>
<p className="text-xs text-[#555] leading-relaxed">Dynamic rate calculation standardizing quotes from varied 3PL rate cards.</p>
</div>

<div>
<iconify-icon className="text-black text-xl mb-4" icon="solar:map-point-wave-linear"></iconify-icon>
<h4 className="text-sm font-medium text-black mb-2">Real-time tracking</h4>
<p className="text-xs text-[#555] leading-relaxed">Unified telemetry translating disparate driver apps into a single status stream.</p>
</div>

<div>
<iconify-icon className="text-black text-xl mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-sm font-medium text-black mb-2">Trust and verification</h4>
<p className="text-xs text-[#555] leading-relaxed">Standardized protocols for identity, vehicle compliance, and network safety.</p>
</div>

<div>
<iconify-icon className="text-black text-xl mb-4" icon="solar:box-minimalistic-linear"></iconify-icon>
<h4 className="text-sm font-medium text-black mb-2">Delivery confirmation</h4>
<p className="text-xs text-[#555] leading-relaxed">Digital signatures, photo proof, and OTP verification unified in one ledger.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 bg-[#fafafa] rounded-3xl border border-black/5 mx-6 lg:mx-auto">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-black mb-12 text-center">Why teams choose Ruti.</h2>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4 border-b border-black/5 pb-6">
<iconify-icon className="text-black/30 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-sm text-[#666]"><span className="text-black font-medium">One unified API</span> replacing fragmented integrations.</p>
</div>
<div className="flex items-center gap-4 border-b border-black/5 pb-6">
<iconify-icon className="text-black/30 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-sm text-[#666]"><span className="text-black font-medium">Native platform</span> empowering non-technical merchants instantly.</p>
</div>
<div className="flex items-center gap-4 border-b border-black/5 pb-6">
<iconify-icon className="text-black/30 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-sm text-[#666]"><span className="text-black font-medium">Multi-fleet orchestration</span> ensuring reliability and best pricing.</p>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-black/30 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-sm text-[#666]"><span className="text-black font-medium">Built for scale</span>, architected for fragmented logistics markets.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32 lg:py-48 text-center">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tighter text-black mb-6">
                Build or send.<br/>Ruti handles the network.
            </h2>
<p className="text-base text-[#555] mb-10 max-w-lg mx-auto">
                From platforms to physical merchants, Ruti powers delivery through one scalable system.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-sm bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-black/90 transition-colors" href="#">
                    Get API access
                </a>
<a className="w-full sm:w-auto text-sm bg-white text-black border border-black/10 shadow-sm px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors" href="#">
                    Create account
                </a>
</div>
</section>
</main>

<footer className="border-t border-black/5 bg-[#fafafa] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<a className="text-xl font-medium tracking-tighter text-black/50 hover:text-black transition-colors" href="#">
                ruti<span className="text-black/20">.</span>
</a>
<div className="flex items-center gap-6 md:gap-8">
<a className="text-xs text-[#666] hover:text-black transition-colors" href="#">Product</a>
<a className="text-xs text-[#666] hover:text-black transition-colors" href="#">API</a>
<a className="text-xs text-[#666] hover:text-black transition-colors" href="#">Docs</a>
<a className="text-xs text-[#666] hover:text-black transition-colors" href="#">Company</a>
<a className="text-xs text-[#666] hover:text-black transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}

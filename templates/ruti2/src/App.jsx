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
      

<nav className="fixed top-0 w-full z-50 border-b border-black/5 bg-white/60 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<iconify-icon icon="solar:route-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    RUTI
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-500">
<a className="hover:text-black transition-colors" href="#">API</a>
<a className="hover:text-black transition-colors" href="#">Platform</a>
<a className="hover:text-black transition-colors" href="#">Network</a>
<a className="hover:text-black transition-colors" href="#">Docs</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm font-medium">
<a className="text-neutral-500 hover:text-black transition-colors hidden sm:block" href="#">Sign in</a>
<a className="bg-black text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors" href="#">
                    Get API access
                </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
<div className="absolute inset-0 bg-grid radial-mask opacity-70"></div>
<div className="w-[800px] h-[400px] bg-neutral-200/50 blur-[120px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm text-xs font-medium text-neutral-600 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                v2.0 API is now live
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
                Infrastructure for <br className="hidden md:block"/> modern logistics.
            </h1>
<p className="text-xl md:text-2xl text-neutral-600 font-medium tracking-tight mb-4 max-w-2xl mx-auto">
                Ruti connects merchants, fleets, and 3PLs through one unified API.
            </p>
<p className="text-base text-neutral-500 mb-10 max-w-xl mx-auto">
                Build scalable delivery operations without managing point-to-point integrations.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all" href="#">
                    View API documentation
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium border border-black/10 hover:bg-black/5 transition-all" href="#">
                    Start sending
                </a>
</div>
<p className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
                For platforms, fleets, 3PLs, and merchants
            </p>
</div>
</section>

<section className="py-24 border-t border-black/5 relative z-10 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">One platform for delivery operations.</h2>
<p className="text-base text-neutral-500 max-w-2xl mx-auto">
                    Use Ruti to create deliveries, route them to the best fleet, and track every order in one unified system.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-6 rounded-2xl bg-black/[0.02] border border-black/5">
<div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center mb-4 text-black">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Create deliveries</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Input package details, pickup, and dropoff locations programmatically or via our merchant dashboard.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-black/[0.02] border border-black/5">
<div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center mb-4 text-black">
<iconify-icon icon="solar:routing-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Route optimally</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Our engine automatically routes the delivery to the best available courier or fleet based on rules.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-black/[0.02] border border-black/5">
<div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center mb-4 text-black">
<iconify-icon icon="solar:radar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Track in real time</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Get unified webhooks and tracking links for every delivery, regardless of which fleet fulfills it.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-black/5 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">One infrastructure layer.<br/>Two ways to build.</h2>
<p className="text-base text-neutral-500">A unified core powering both developer tools and a native merchant experience.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="rounded-3xl border border-black/10 bg-white overflow-hidden flex flex-col shadow-sm">
<div className="p-8 pb-0">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/5 text-xs font-medium mb-4">
<iconify-icon icon="solar:code-square-linear"></iconify-icon>
                            For Developers &amp; Platforms
                        </div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">API for developers</h3>
<p className="text-sm text-neutral-500 mb-8 max-w-sm">
                            Integrate once. Access multiple delivery networks, 3PLs, and fleets through a single, elegant REST API.
                        </p>
</div>

<div className="mt-auto p-4 pt-0">
<div className="rounded-xl bg-neutral-50 border border-black/5 overflow-hidden">
<div className="flex items-center px-4 py-3 border-b border-black/5 bg-white/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
</div>
<div className="ml-4 text-xs font-medium text-neutral-500">POST /v1/deliveries</div>
</div>
<div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-neutral-700">
<pre><code><span className="text-purple-600">const</span> delivery <span className="text-purple-600">=</span> <span className="text-purple-600">await</span> ruti.deliveries.<span className="text-blue-600">create</span>({
  pickup: {
    address: <span className="text-green-600">'123 Market St, SF'</span>,
    contact_name: <span className="text-green-600">'Store Team'</span>
  },
  dropoff: {
    address: <span className="text-green-600">'456 Mission St, SF'</span>,
    phone: <span className="text-green-600">'+1555010203'</span>
  },
  options: {
    service_level: <span className="text-green-600">'same_day'</span>,
    signature_required: <span className="text-purple-600">true</span>
  }
});

<span className="text-neutral-400">// Returns unified tracking ID</span>
console.<span className="text-blue-600">log</span>(delivery.tracking_url);</code></pre>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-black/10 bg-white overflow-hidden flex flex-col shadow-sm">
<div className="p-8 pb-0">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/5 text-xs font-medium mb-4">
<iconify-icon icon="solar:monitor-smartphone-linear"></iconify-icon>
                            For Merchants &amp; Businesses
                        </div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Native platform</h3>
<p className="text-sm text-neutral-500 mb-8 max-w-sm">
                            Send deliveries without code. A simple, powerful dashboard for physical shops, social sellers, and local businesses.
                        </p>
</div>

<div className="mt-auto p-4 pt-0">
<div className="rounded-xl bg-neutral-50 border border-black/5 overflow-hidden flex flex-col h-[280px]">
<div className="flex items-center justify-between px-4 py-3 border-b border-black/5 bg-white/50">
<div className="text-xs font-medium text-neutral-700">New Delivery</div>
<div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center">
<iconify-icon className="text-neutral-500" icon="solar:close-circle-linear" width="14"></iconify-icon>
</div>
</div>
<div className="p-4 flex-1 flex flex-col gap-3 relative">

<div className="flex items-start gap-3">
<div className="flex flex-col items-center mt-2">
<div className="w-2 h-2 rounded-full border border-neutral-400"></div>
<div className="w-px h-8 bg-neutral-300 my-1"></div>
<div className="w-2 h-2 rounded-full bg-black"></div>
</div>
<div className="flex-1 space-y-2">
<div className="w-full h-8 rounded bg-black/5 border border-black/5 flex items-center px-3 text-xs text-neutral-500">Warehouse A</div>
<div className="w-full h-8 rounded bg-black/10 border border-black/10 flex items-center px-3 text-xs text-black">Customer Address...</div>
</div>
</div>

<div className="mt-auto h-20 rounded border border-black/5 bg-white/50 overflow-hidden relative">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:8px_8px]"></div>
<svg className="absolute inset-0 w-full h-full text-black/20" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M 10 30 Q 30 10 50 20 T 90 10" fill="none" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="1.5"></path>
</svg>
</div>

<div className="w-full h-8 rounded bg-black text-white flex items-center justify-center text-xs font-medium">Create &amp; Route</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-black/5 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-4">The layer connecting modern logistics.</h2>
<p className="text-base text-neutral-500 max-w-2xl mx-auto mb-16">
                Ruti replaces fragmented, point-to-point delivery operations with one unified network.
            </p>

<div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 max-w-4xl mx-auto py-10">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-y-1/2"></div>

<div className="relative z-10 flex flex-col gap-3 w-48 text-left md:pr-8">
<div className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Demand</div>
<div className="px-4 py-2.5 rounded-lg border border-black/10 bg-white text-sm text-neutral-700 flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:shop-linear"></iconify-icon> Merchants
                    </div>
<div className="px-4 py-2.5 rounded-lg border border-black/10 bg-white text-sm text-neutral-700 flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon> E-commerce
                    </div>
<div className="px-4 py-2.5 rounded-lg border border-black/10 bg-white text-sm text-neutral-700 flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:code-linear"></iconify-icon> Developers
                    </div>
</div>

<div className="md:hidden w-px h-12 bg-gradient-to-b from-black/10 to-black/5"></div>

<div className="relative z-20 flex-shrink-0 mx-4 md:mx-8">
<div className="absolute inset-0 bg-black/5 blur-xl rounded-full"></div>
<div className="w-24 h-24 rounded-2xl border border-black/10 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center relative shadow-[0_0_30px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-black mb-1" icon="solar:route-linear" width="32"></iconify-icon>
<span className="text-xs font-semibold tracking-tighter text-black">RUTI</span>
</div>
</div>

<div className="md:hidden w-px h-12 bg-gradient-to-t from-black/10 to-black/5"></div>

<div className="relative z-10 flex flex-col gap-3 w-48 text-left md:pl-8">
<div className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2 md:text-right">Supply</div>
<div className="px-4 py-2.5 rounded-lg border border-black/10 bg-white text-sm text-neutral-700 flex items-center justify-end gap-2 shadow-sm">
                        Fleets <iconify-icon icon="solar:bus-linear"></iconify-icon>
</div>
<div className="px-4 py-2.5 rounded-lg border border-black/10 bg-white text-sm text-neutral-700 flex items-center justify-end gap-2 shadow-sm">
                        3PLs <iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="px-4 py-2.5 rounded-lg border border-black/10 bg-white text-sm text-neutral-700 flex items-center justify-end gap-2 shadow-sm">
                        Mobility <iconify-icon icon="solar:steering-wheel-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-black/5 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Built for every layer of logistics.</h2>
<p className="text-base text-neutral-500">A system designed to connect the entire ecosystem.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5 rounded-2xl overflow-hidden">

<div className="bg-white p-8 hover:bg-neutral-50/50 transition-colors">
<iconify-icon className="text-neutral-700 mb-4" icon="solar:cart-large-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium mb-2">For e-commerce platforms</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Automate delivery via API</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Create deliveries instantly</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Track orders in real time</li>
</ul>
</div>

<div className="bg-white p-8 hover:bg-neutral-50/50 transition-colors">
<iconify-icon className="text-neutral-700 mb-4" icon="solar:code-square-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium mb-2">For developers</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Integrate delivery in minutes</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> One API for fleets and 3PLs</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Avoid multiple integrations</li>
</ul>
</div>

<div className="bg-white p-8 hover:bg-neutral-50/50 transition-colors">
<iconify-icon className="text-neutral-700 mb-4" icon="solar:shop-2-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium mb-2">For businesses &amp; merchants</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Send deliveries without code</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Use a simple native dashboard</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Perfect for social commerce</li>
</ul>
</div>

<div className="bg-white p-8 hover:bg-neutral-50/50 transition-colors">
<iconify-icon className="text-neutral-700 mb-4" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium mb-2">For 3PLs</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Plug into Ruti with or without APIs</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Receive more delivery demand</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Access digital customers easily</li>
</ul>
</div>

<div className="bg-white p-8 hover:bg-neutral-50/50 transition-colors">
<iconify-icon className="text-neutral-700 mb-4" icon="solar:bus-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium mb-2">For fleets</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Receive optimized delivery jobs</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Improve fleet utilization rates</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Streamline daily operations</li>
</ul>
</div>

<div className="bg-white p-8 hover:bg-neutral-50/50 transition-colors">
<iconify-icon className="text-neutral-700 mb-4" icon="solar:steering-wheel-linear" width="24"></iconify-icon>
<h3 className="text-base font-medium mb-2">For mobility platforms</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Use driver networks for delivery</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Increase driver utilization</li>
<li className="flex items-start gap-2"><span className="text-neutral-300 mt-0.5">•</span> Unlock new logistics revenue</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-black/5 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h2 className="text-2xl font-semibold tracking-tight mb-4">Why build on Ruti?</h2>
<p className="text-sm text-neutral-500">The modern standard for moving goods in fragmented markets.</p>
</div>
<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
<div>
<div className="text-sm font-medium text-black mb-1">One unified API</div>
<div className="text-sm text-neutral-500">Stop building and maintaining dozens of brittle point-to-point courier integrations.</div>
</div>
<div>
<div className="text-sm font-medium text-black mb-1">Native platform included</div>
<div className="text-sm text-neutral-500">Enable non-technical staff or merchants to manage operations alongside your developers.</div>
</div>
<div>
<div className="text-sm font-medium text-black mb-1">Multi-fleet orchestration</div>
<div className="text-sm text-neutral-500">Dynamically route volume across multiple 3PLs and fleets to ensure reliability.</div>
</div>
<div>
<div className="text-sm font-medium text-black mb-1">Scalable infrastructure</div>
<div className="text-sm text-neutral-500">Enterprise-grade uptime, low latency, and secure webhook delivery for high volumes.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-black/5 bg-white relative overflow-hidden">
<div className="absolute inset-0 bg-grid radial-mask opacity-50 pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Build or send.<br/>Ruti handles the network.</h2>
<p className="text-base text-neutral-500 mb-10">
                From platforms to physical merchants, Ruti powers delivery through one unified system.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors" href="#">
                    Get API access
                </a>
<a className="w-full sm:w-auto bg-white text-black border border-black/10 px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors shadow-sm" href="#">
                    Create account
                </a>
</div>
</div>
</section>

<footer className="py-10 border-t border-black/5 bg-white text-xs text-neutral-500">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 font-medium text-neutral-700">
<iconify-icon icon="solar:route-linear" width="16"></iconify-icon>
                RUTI
            </div>
<div className="flex items-center gap-6">
<a className="hover:text-black transition-colors" href="#">Documentation</a>
<a className="hover:text-black transition-colors" href="#">Twitter</a>
<a className="hover:text-black transition-colors" href="#">Terms</a>
<a className="hover:text-black transition-colors" href="#">Privacy</a>
</div>
<div>
                © 2024 Ruti Infrastructure. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}

import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="absolute top-0 left-0 right-0 h-screen pointer-events-none overflow-hidden z-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-grid-pattern"></div>
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-white/[0.02] blur-[100px] rounded-full"></div>
</div>

<nav className="relative z-50 w-full border-b border-white/[0.05] bg-black/50 backdrop-blur-md">
<div className="container mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">Ruti</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs sm:text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Dashboard
                </a>
</div>
</div>
</nav>

<header className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-6 min-h-[85vh]">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs text-neutral-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-neutral-500"></span>
            Ruti API v2 is now live
        </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-center max-w-4xl leading-[1.1] mb-6">
            Infrastructure for <br className="hidden md:block"/> modern logistics.
        </h1>
<p className="text-base md:text-lg text-neutral-400 text-center max-w-2xl mb-10 leading-relaxed font-normal">
            Ruti connects merchants, fleets, and 3PLs through one unified API. Build scalable delivery operations without managing point-to-point integrations.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto text-sm font-medium bg-white text-black px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors text-center" href="#">
                Get Started
            </a>
<a className="w-full sm:w-auto text-sm font-medium bg-transparent text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/[0.05] transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:document-code-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                View API
            </a>
</div>
</header>

<section className="relative z-10 py-24 md:py-32 container mx-auto px-6 border-t border-white/[0.05]">
<div className="max-w-2xl mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">How Ruti works</h2>
<p className="text-sm text-neutral-400">Three fundamental steps to automate physical fulfillment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">

<div aria-hidden="true" className="hidden md:block absolute top-6 left-[15%] right-[15%] h-px bg-white/10"></div>
<div className="relative bg-black group">
<div className="h-12 w-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-300 mb-6 group-hover:bg-white/[0.06] group-hover:text-white transition-all">
<iconify-icon height="24" icon="solar:programming-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">1. Create</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Generate delivery requests programmatically via our REST API or manually through the web dashboard.
                </p>
</div>
<div className="relative bg-black group">
<div className="h-12 w-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-300 mb-6 group-hover:bg-white/[0.06] group-hover:text-white transition-all">
<iconify-icon height="24" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">2. Route</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Our pricing and routing engine matches your request to the optimal available fleet based on SLA and cost.
                </p>
</div>
<div className="relative bg-black group">
<div className="h-12 w-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-300 mb-6 group-hover:bg-white/[0.06] group-hover:text-white transition-all">
<iconify-icon height="24" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">3. Track</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Receive standardized webhooks for state changes and monitor real-time geolocation across all providers.
                </p>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#050505] border-y border-white/[0.05] overflow-hidden">
<div className="container mx-auto px-6 text-center mb-16">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-4">The Universal Logistics Layer</h2>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto px-6">

<div className="w-full md:w-1/3 p-6 rounded-2xl border border-white/10 bg-black flex flex-col items-center gap-3">
<iconify-icon className="text-neutral-500" height="28" icon="solar:shop-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<span className="text-sm font-medium text-neutral-300">Merchants</span>
</div>

<div className="md:hidden h-8 w-px bg-gradient-to-b from-white/10 to-white/30"></div>

<div className="hidden md:block h-px w-16 lg:w-24 bg-gradient-to-r from-white/10 to-white/30"></div>

<div className="w-full md:w-1/3 p-8 rounded-2xl border border-neutral-700 bg-neutral-900 subtle-glow flex flex-col items-center justify-center gap-2 z-10 relative">
<div className="absolute inset-0 bg-white/[0.02] rounded-2xl"></div>
<span className="text-lg font-semibold tracking-tighter text-white relative z-10">Ruti API</span>
<span className="text-xs text-neutral-400 relative z-10">Orchestration</span>
</div>

<div className="md:hidden h-8 w-px bg-gradient-to-t from-white/10 to-white/30"></div>

<div className="hidden md:block h-px w-16 lg:w-24 bg-gradient-to-l from-white/10 to-white/30"></div>

<div className="w-full md:w-1/3 p-6 rounded-2xl border border-white/10 bg-black flex flex-col items-center gap-3">
<iconify-icon className="text-neutral-500" height="28" icon="solar:bus-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<span className="text-sm font-medium text-neutral-300">Fleets &amp; 3PLs</span>
</div>
</div>
</section>

<section className="relative z-10 py-24 md:py-32 container mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Platform primitives</h2>
<p className="text-sm text-neutral-400 max-w-xl">Everything required to manage complex delivery operations at scale, abstracted into clean API endpoints.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/[0.15] hover-subtle-glow transition-all duration-300 group">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors mb-6" height="24" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">API-First Design</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Built for developers. Predictable RESTful endpoints, strongly typed resources, and comprehensive webhooks.</p>
</div>

<div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/[0.15] hover-subtle-glow transition-all duration-300 group">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors mb-6" height="24" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Multi-Fleet Orchestration</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Access a normalized network of local couriers and national carriers without maintaining individual integrations.</p>
</div>

<div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/[0.15] hover-subtle-glow transition-all duration-300 group">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors mb-6" height="24" icon="solar:radar-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Unified Tracking</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Normalize tracking events across thousands of providers into a single, reliable stream of state changes.</p>
</div>

<div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/[0.15] hover-subtle-glow transition-all duration-300 group">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors mb-6" height="24" icon="solar:calculator-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Dynamic Pricing Engine</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Get transparent, upfront quotes before confirming deliveries based on real-time network capacity and distance.</p>
</div>

<div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/[0.15] hover-subtle-glow transition-all duration-300 group md:col-span-2 lg:col-span-1">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors mb-6" height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Trust &amp; Verification</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Built-in proof of delivery, automated signature collection, and standardized dispute resolution flows.</p>
</div>
</div>
</section>

<section className="relative z-10 py-24 md:py-32 border-t border-white/[0.05] bg-[#020202]">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 leading-tight">Integration in <br/>minutes, not sprints.</h2>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        We abstracted the complexity of mapping, routing, driver assignment, and status normalization. One POST request creates a delivery, assigns a driver, and begins tracking.
                    </p>
<ul className="flex flex-col gap-4 mb-10">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Idempotent requests by default
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            SDKs for Node, Python, Go, and Ruby
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            99.99% uptime SLA
                        </li>
</ul>
<a className="text-sm font-medium text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-2 pb-1 border-b border-white/20 hover:border-white/60" href="#">
                        Read the documentation <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="w-full lg:w-1/2">

<div className="rounded-xl border border-white/[0.1] bg-[#0A0A0A] overflow-hidden shadow-2xl">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05] bg-[#0D0D0D]">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="text-xs text-neutral-500 font-mono">POST /v1/deliveries</div>
</div>

<div className="p-6 overflow-x-auto">
<pre className="text-xs sm:text-sm font-mono leading-relaxed"><span className="text-neutral-500">// Create a delivery across any provider</span>
<span className="text-[#A78BFA]">const</span> delivery = <span className="text-[#A78BFA]">await</span> ruti.<span className="text-[#60A5FA]">deliveries</span>.<span className="text-[#60A5FA]">create</span>({
  <span className="text-white">pickup</span>: {
    <span className="text-white">address</span>: <span className="text-[#34D399]">'123 Market St, SF'</span>,
    <span className="text-white">contact</span>: { <span className="text-white">name</span>: <span className="text-[#34D399]">'Store'</span>, <span className="text-white">phone</span>: <span className="text-[#34D399]">'+15550100'</span> }
  },
  <span className="text-white">dropoff</span>: {
    <span className="text-white">address</span>: <span className="text-[#34D399]">'456 Mission St, SF'</span>,
    <span className="text-white">contact</span>: { <span className="text-white">name</span>: <span className="text-[#34D399]">'Customer'</span>, <span className="text-white">phone</span>: <span className="text-[#34D399]">'+15550200'</span> }
  },
  <span className="text-white">manifest</span>: {
    <span className="text-white">description</span>: <span className="text-[#34D399]">'Electronics hardware'</span>,
    <span className="text-white">value</span>: <span className="text-[#FBBF24]">15000</span> <span className="text-neutral-500">// Cents</span>
  }
});

<span className="text-[#60A5FA]">console</span>.<span className="text-[#60A5FA]">log</span>(delivery.<span className="text-white">tracking_url</span>);</pre>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-white/[0.05] flex flex-col items-center justify-center text-center px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Build logistics into your product.</h2>
<p className="text-base text-neutral-400 mb-10 max-w-xl">Join forward-thinking companies abstracting their physical operations with Ruti.</p>
<a className="text-sm font-medium bg-white text-black px-8 py-3.5 rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">
            Start building for free
        </a>
</section>

<footer className="relative z-10 border-t border-white/[0.05] bg-black py-12">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-white">Ruti</span>
<span className="text-xs text-neutral-600 mt-0.5">© 2024</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Status</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}

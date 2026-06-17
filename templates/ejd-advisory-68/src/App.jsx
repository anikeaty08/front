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
      

<header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter text-slate-900" href="#">
                    EJD
                </a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-normal text-slate-500 transition-colors hover:text-slate-900" href="#">Home</a>
<a className="text-sm font-medium text-slate-900" href="#">Services</a>
<a className="text-sm font-normal text-slate-500 transition-colors hover:text-slate-900" href="#">About</a>
<a className="text-sm font-normal text-slate-500 transition-colors hover:text-slate-900" href="#">Insights</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-normal text-slate-500 transition-colors hover:text-slate-900" href="#">Client Login</a>
<a className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-800" href="#">
                    Contact Us
                </a>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 border-b border-slate-200/60">
<div className="mx-auto max-w-3xl text-center">
<h1 className="text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl">
                Specialized Advisory Services
            </h1>
<p className="mt-6 text-lg leading-relaxed text-slate-500">
                We provide tailored strategic, financial, and operational guidance to help ambitious organizations navigate complex challenges and achieve sustainable growth.
            </p>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
<div className="mb-16">
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Core Capabilities</h2>
<p className="mt-2 text-sm text-slate-500">Comprehensive solutions designed for modern enterprise.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative flex flex-col items-start justify-between rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
<div>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-700 transition-colors group-hover:bg-white group-hover:border-slate-200">
<iconify-icon height="24" icon="solar:pie-chart-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Strategic Consulting</h3>
<p className="mb-8 text-sm leading-relaxed text-slate-500">
                        Data-driven strategy development to align your organizational goals with market opportunities, ensuring long-term competitive advantage.
                    </p>
</div>
<a className="inline-flex items-center text-sm font-medium text-slate-900 transition-colors hover:text-slate-600" href="#">
                    Explore Strategy 
                    <iconify-icon className="ml-1.5 transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group relative flex flex-col items-start justify-between rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
<div>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-700 transition-colors group-hover:bg-white group-hover:border-slate-200">
<iconify-icon height="24" icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Financial Advisory</h3>
<p className="mb-8 text-sm leading-relaxed text-slate-500">
                        Comprehensive financial modeling, capital structure optimization, and performance analysis to maximize shareholder value.
                    </p>
</div>
<a className="inline-flex items-center text-sm font-medium text-slate-900 transition-colors hover:text-slate-600" href="#">
                    Explore Financial 
                    <iconify-icon className="ml-1.5 transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group relative flex flex-col items-start justify-between rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
<div>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-700 transition-colors group-hover:bg-white group-hover:border-slate-200">
<iconify-icon height="24" icon="solar:handshake-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Mergers &amp; Acquisitions</h3>
<p className="mb-8 text-sm leading-relaxed text-slate-500">
                        End-to-end M&amp;A support, from target identification and due diligence to valuation and post-merger integration.
                    </p>
</div>
<a className="inline-flex items-center text-sm font-medium text-slate-900 transition-colors hover:text-slate-600" href="#">
                    Explore M&amp;A 
                    <iconify-icon className="ml-1.5 transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group relative flex flex-col items-start justify-between rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
<div>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-700 transition-colors group-hover:bg-white group-hover:border-slate-200">
<iconify-icon height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Risk Management</h3>
<p className="mb-8 text-sm leading-relaxed text-slate-500">
                        Identify, assess, and mitigate operational and financial risks to protect assets and ensure regulatory compliance.
                    </p>
</div>
<a className="inline-flex items-center text-sm font-medium text-slate-900 transition-colors hover:text-slate-600" href="#">
                    Explore Risk 
                    <iconify-icon className="ml-1.5 transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group relative flex flex-col items-start justify-between rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
<div>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-700 transition-colors group-hover:bg-white group-hover:border-slate-200">
<iconify-icon height="24" icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Operational Excellence</h3>
<p className="mb-8 text-sm leading-relaxed text-slate-500">
                        Streamline processes, optimize resource allocation, and implement technology solutions to drive efficiency and reduce costs.
                    </p>
</div>
<a className="inline-flex items-center text-sm font-medium text-slate-900 transition-colors hover:text-slate-600" href="#">
                    Explore Operations 
                    <iconify-icon className="ml-1.5 transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group relative flex flex-col items-start justify-between rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
<div>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-700 transition-colors group-hover:bg-white group-hover:border-slate-200">
<iconify-icon height="24" icon="solar:radar-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight text-slate-900">Market Intelligence</h3>
<p className="mb-8 text-sm leading-relaxed text-slate-500">
                        Deep-dive market research, competitor analysis, and trend forecasting to inform critical business decisions.
                    </p>
</div>
<a className="inline-flex items-center text-sm font-medium text-slate-900 transition-colors hover:text-slate-600" href="#">
                    Explore Intelligence 
                    <iconify-icon className="ml-1.5 transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-200/60 px-6 py-24 sm:py-32 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl mb-6">
                        Our Approach
                    </h2>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                        We don't believe in generic templates. Every engagement begins with a deep understanding of your unique context, followed by rigorous analysis and actionable execution plans.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-500">
                                    01
                                </div>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-1">Discovery &amp; Analysis</h4>
<p className="text-sm text-slate-500 leading-relaxed">Comprehensive audit of current state, identifying friction points and untappped opportunities.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-500">
                                    02
                                </div>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-1">Strategy Formulation</h4>
<p className="text-sm text-slate-500 leading-relaxed">Development of tailored frameworks and operational blueprints aligned with specific objectives.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-500">
                                    03
                                </div>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-1">Execution &amp; Iteration</h4>
<p className="text-sm text-slate-500 leading-relaxed">Hands-on implementation support with continuous monitoring and optimization of results.</p>
</div>
</div>
</div>
</div>
<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
<div className="relative z-10 flex flex-col gap-4 p-8">
<div className="h-2 w-24 bg-slate-200 rounded-full"></div>
<div className="h-2 w-32 bg-slate-300 rounded-full"></div>
<div className="h-2 w-16 bg-slate-200 rounded-full"></div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="h-24 w-24 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
<iconify-icon height="32" icon="solar:chart-square-linear" width="32"></iconify-icon>
</div>
<div className="h-24 w-24 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm flex items-center justify-center text-white">
<iconify-icon height="32" icon="solar:lightbulb-bolt-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 px-6 py-24 sm:py-32 lg:px-8">
<div className="mx-auto max-w-4xl text-center">
<h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Ready to optimize your business?
            </h2>
<p className="mx-auto mt-6 max-w-xl text-base text-slate-400">
                Connect with our advisory partners to discuss your specific challenges and explore how we can drive meaningful impact for your organization.
            </p>
<div className="mt-10 flex items-center justify-center gap-4">
<a className="inline-flex h-11 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100" href="#">
                    Schedule a Consultation
                </a>
<a className="inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-medium text-white transition-colors hover:bg-slate-800" href="#">
                    View Case Studies
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200/60">
<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tighter text-slate-900">EJD</span>
<span className="text-sm text-slate-500">© 2023 EJD Advisory LLC.</span>
</div>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

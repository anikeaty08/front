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



        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for Scroll Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: Stop observing once visible if you only want it to animate once
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                observer.observe(el);
            });

            // Dynamic Navbar effect on Scroll
            const nav = document.getElementById('main-nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    nav.classList.add('bg-white/80', 'backdrop-blur-md', 'border-zinc-200', 'shadow-sm');
                    nav.classList.remove('bg-white/0', 'border-transparent', 'backdrop-blur-none');
                } else {
                    nav.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-zinc-200', 'shadow-sm');
                    nav.classList.add('bg-white/0', 'border-transparent', 'backdrop-blur-none');
                }
            });
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
      

<div className="pointer-events-none fixed inset-0 z-0 flex justify-center opacity-40 transition-opacity duration-1000" id="bg-glow">
<div className="h-[50vh] w-[50vw] rounded-full bg-blue-400/10 blur-[120px]"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-transparent bg-white/0 backdrop-blur-none transition-all duration-300" id="main-nav">
<div className="mx-auto flex max-w-7xl items-center justify-between p-6">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<span className="text-lg font-semibold tracking-tighter text-zinc-900">FLOWNET</span>
</div>
<div className="hidden items-center gap-8 text-sm font-medium text-zinc-500 md:flex">
<a className="transition-colors hover:text-zinc-900" href="#products">Products</a>
<a className="transition-colors hover:text-zinc-900" href="#why">Infrastructure</a>
<a className="transition-colors hover:text-zinc-900" href="#use-cases">Solutions</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900" href="#">Sign in</a>
<a className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md" href="#">Start Integration</a>
</div>
</div>
</nav>

<section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-40 text-center md:pb-32 md:pt-56">
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="animate-on-scroll mx-auto inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 mb-8 text-xs font-medium text-zinc-600 hover:bg-zinc-100 transition-colors cursor-default">
<span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse-ring"></span>
            Unified APIs for global markets
        </div>
<h1 className="animate-on-scroll delay-100 mx-auto max-w-4xl text-5xl font-semibold tracking-tighter text-zinc-900 sm:text-6xl md:text-7xl lg:text-8xl">
            Global payment infrastructure <br className="hidden md:block"/> for fiat and stablecoins
        </h1>
<p className="animate-on-scroll delay-200 mx-auto mt-8 max-w-2xl text-lg text-zinc-500 md:text-xl">
            Unified APIs for payments, treasury, and FX routing across global markets with bank-grade compliance.
        </p>
<div className="animate-on-scroll delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="group flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 sm:w-auto shadow-sm" href="#">
                Start Integration
                <iconify-icon className="text-[1.25rem] transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-50 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 sm:w-auto shadow-sm" href="#">
                Contact Sales
            </a>
</div>

<div className="animate-on-scroll delay-400 mt-20 mx-auto max-w-4xl relative z-10 hidden sm:block group">
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-70"></div>
<div className="rounded-2xl border border-zinc-200/80 bg-white/40 backdrop-blur-md p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-zinc-100 transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
<div className="rounded-xl border border-zinc-200/50 bg-white/90 p-6 shadow-sm transition-transform duration-500">
<div className="flex items-center gap-2 mb-6">
<div className="h-2.5 w-2.5 rounded-full bg-zinc-200 transition-colors hover:bg-red-400 cursor-pointer"></div>
<div className="h-2.5 w-2.5 rounded-full bg-zinc-200 transition-colors hover:bg-amber-400 cursor-pointer"></div>
<div className="h-2.5 w-2.5 rounded-full bg-zinc-200 transition-colors hover:bg-green-400 cursor-pointer"></div>
<div className="ml-2 font-mono text-xs text-zinc-400">api.flownet.com/v1/settlements</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="font-mono text-[13px] leading-loose text-zinc-500 text-left bg-zinc-50/50 rounded-xl p-5 border border-zinc-100/80 transition-colors hover:bg-zinc-50">
<span className="text-blue-500 font-medium">POST</span> /v1/settlements<br/>
<span className="text-zinc-400">{</span><br/>
<span className="text-zinc-400">  "amount":</span> <span className="text-zinc-800">250000.00</span>,<br/>
<span className="text-zinc-400">  "currency":</span> <span className="text-zinc-800">"USD"</span>,<br/>
<span className="text-zinc-400">  "destination":</span> <span className="text-zinc-800">"iban_DE89..."</span><br/>
<span className="text-zinc-400">}</span><span className="inline-block w-1.5 h-3.5 ml-1 align-middle bg-blue-400 animate-[pulse_1s_infinite]"></span>
</div>

<div className="flex flex-col justify-center gap-6 px-4">
<div className="flex items-center justify-between group/item cursor-default">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-zinc-600 border border-zinc-200/50 shadow-sm transition-transform group-hover/item:scale-110"><iconify-icon icon="solar:wallet-linear" style={{fontSize: '1.25rem'}}></iconify-icon></div>
<span className="text-sm font-medium text-zinc-800 transition-colors group-hover/item:text-blue-600">USD Treasury</span>
</div>
<span className="font-mono text-sm text-zinc-500">-$250,000</span>
</div>
<div className="relative py-2">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-dashed border-zinc-300"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-white px-3 text-xs font-medium text-blue-500 border border-blue-100 rounded-full flex items-center gap-1.5 shadow-sm py-1 transition-transform hover:scale-105 cursor-pointer">
<iconify-icon className="animate-[spin_4s_linear_infinite]" icon="solar:routing-2-linear"></iconify-icon> Optimized FX Route
                                    </span>
</div>
</div>
<div className="flex items-center justify-between group/item cursor-default">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-zinc-600 border border-zinc-200/50 shadow-sm transition-transform group-hover/item:scale-110"><iconify-icon icon="solar:bank-linear" style={{fontSize: '1.25rem'}}></iconify-icon></div>
<span className="text-sm font-medium text-zinc-800 transition-colors group-hover/item:text-emerald-600">EUR Bank</span>
</div>
<span className="font-mono text-sm font-medium text-emerald-600">+€232,150</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-y border-zinc-200 bg-zinc-50/50">
<div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
<div className="grid grid-cols-1 gap-8 divide-y divide-zinc-200 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
<div className="animate-on-scroll flex flex-col items-center justify-center pt-8 md:pt-0 group cursor-default">
<span className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl transition-transform group-hover:scale-105">99.99%</span>
<span className="mt-2 text-sm text-zinc-500 transition-colors group-hover:text-zinc-900">Settlement success rate</span>
</div>
<div className="animate-on-scroll delay-100 flex flex-col items-center justify-center pt-8 md:pt-0 group cursor-default">
<span className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl transition-transform group-hover:scale-105">&lt;5s</span>
<span className="mt-2 text-sm text-zinc-500 transition-colors group-hover:text-zinc-900">Cross-border processing</span>
</div>
<div className="animate-on-scroll delay-200 flex flex-col items-center justify-center pt-8 md:pt-0 group cursor-default">
<span className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl transition-transform group-hover:scale-105">50+</span>
<span className="mt-2 text-sm text-zinc-500 transition-colors group-hover:text-zinc-900">Countries supported</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 overflow-hidden" id="products">
<h2 className="animate-on-scroll mb-12 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">Financial infrastructure APIs</h2>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

<div className="animate-on-scroll delay-100 group flex flex-col rounded-3xl border border-zinc-200 bg-white shadow-sm p-8 transition-all duration-300 hover:bg-zinc-50/80 hover:-translate-y-1 hover:shadow-md cursor-pointer">
<div className="flex items-center justify-between mb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white">
<iconify-icon icon="solar:card-send-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>

<div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-zinc-50 px-3 py-1.5 shadow-sm transition-transform duration-300 group-hover:-translate-x-1">
<div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
<div className="h-1.5 w-8 rounded-full bg-zinc-200 transition-all duration-300 group-hover:w-10"></div>
</div>
</div>
<h3 className="mb-2 text-xl font-medium tracking-tight text-zinc-900 transition-colors group-hover:text-blue-600">Payments</h3>
<p className="mb-8 text-sm text-zinc-500">Accept global payments across cards, bank transfers, and crypto</p>
<ul className="mt-auto flex flex-col gap-3 text-sm text-zinc-600">
<li className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Multi-currency checkout
                    </li>
<li className="flex items-center gap-3 transition-transform duration-300 delay-75 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Smart routing for higher approval rates
                    </li>
<li className="flex items-center gap-3 transition-transform duration-300 delay-100 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Local payment methods worldwide
                    </li>
</ul>
</div>

<div className="animate-on-scroll delay-200 group flex flex-col rounded-3xl border border-zinc-200 bg-white shadow-sm p-8 transition-all duration-300 hover:bg-zinc-50/80 hover:-translate-y-1 hover:shadow-md cursor-pointer">
<div className="flex items-center justify-between mb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-white">
<iconify-icon icon="solar:wallet-money-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>

<div className="flex items-center gap-1.5 rounded-lg border border-zinc-100 bg-zinc-50 p-2 shadow-sm">
<div className="h-4 w-4 rounded-full border border-zinc-200 bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-0"><iconify-icon className="text-zinc-400 text-[8px]" icon="solar:arrow-right-linear"></iconify-icon></div>
<div className="h-4 w-4 rounded-full border border-zinc-200 bg-white flex items-center justify-center -ml-2 transition-transform duration-300 group-hover:translate-x-2"><iconify-icon className="text-zinc-400 text-[8px]" icon="solar:arrow-right-linear"></iconify-icon></div>
<div className="h-4 w-4 rounded-full border border-emerald-200 bg-emerald-50 flex items-center justify-center -ml-2 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-100"><iconify-icon className="text-emerald-600 text-[8px]" icon="solar:check-read-linear"></iconify-icon></div>
</div>
</div>
<h3 className="mb-2 text-xl font-medium tracking-tight text-zinc-900 transition-colors group-hover:text-blue-600">Payouts</h3>
<p className="mb-8 text-sm text-zinc-500">Send funds globally with real-time settlement</p>
<ul className="mt-auto flex flex-col gap-3 text-sm text-zinc-600">
<li className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Instant payouts to bank accounts and wallets
                    </li>
<li className="flex items-center gap-3 transition-transform duration-300 delay-75 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Support for fiat and stablecoins
                    </li>
<li className="flex items-center gap-3 transition-transform duration-300 delay-100 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Optimized cross-border transfers
                    </li>
</ul>
</div>

<div className="animate-on-scroll delay-100 group flex flex-col rounded-3xl border border-zinc-200 bg-white shadow-sm p-8 transition-all duration-300 hover:bg-zinc-50/80 hover:-translate-y-1 hover:shadow-md cursor-pointer">
<div className="flex items-center justify-between mb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white">
<iconify-icon icon="solar:safe-square-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>

<div className="flex items-end gap-1 h-6 transition-transform duration-300 group-hover:scale-110">
<div className="w-1.5 bg-zinc-200 rounded-sm h-1/3 transition-all duration-500 group-hover:h-1/2"></div>
<div className="w-1.5 bg-zinc-200 rounded-sm h-1/2 transition-all duration-500 delay-75 group-hover:h-3/4"></div>
<div className="w-1.5 bg-zinc-300 rounded-sm h-3/4 transition-all duration-500 delay-100 group-hover:h-full"></div>
<div className="w-1.5 bg-blue-400 rounded-sm h-full transition-all duration-500 delay-150 group-hover:bg-blue-500"></div>
</div>
</div>
<h3 className="mb-2 text-xl font-medium tracking-tight text-zinc-900 transition-colors group-hover:text-blue-600">Treasury</h3>
<p className="mb-8 text-sm text-zinc-500">Manage and move funds across currencies with full control</p>
<ul className="mt-auto flex flex-col gap-3 text-sm text-zinc-600">
<li className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Multi-currency accounts
                    </li>
<li className="flex items-center gap-3 transition-transform duration-300 delay-75 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Real-time balance visibility
                    </li>
<li className="flex items-center gap-3 transition-transform duration-300 delay-100 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Automated fund routing
                    </li>
</ul>
</div>

<div className="animate-on-scroll delay-200 group flex flex-col rounded-3xl border border-zinc-200 bg-white shadow-sm p-8 transition-all duration-300 hover:bg-zinc-50/80 hover:-translate-y-1 hover:shadow-md cursor-pointer">
<div className="flex items-center justify-between mb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-white">
<iconify-icon icon="solar:transfer-horizontal-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>

<div className="flex items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50 px-2 py-1 shadow-sm transition-transform duration-300 group-hover:shadow-md">
<span className="text-[10px] font-semibold text-zinc-400 transition-colors group-hover:text-zinc-600">USD</span>
<iconify-icon className="text-[10px] text-zinc-400 transition-transform duration-500 group-hover:rotate-180" icon="solar:arrows-right-left-linear"></iconify-icon>
<span className="text-[10px] font-semibold text-zinc-700 transition-colors group-hover:text-blue-500">EUR</span>
</div>
</div>
<h3 className="mb-2 text-xl font-medium tracking-tight text-zinc-900 transition-colors group-hover:text-blue-600">FX &amp; Conversion</h3>
<p className="mb-8 text-sm text-zinc-500">Optimize currency conversion with intelligent routing</p>
<ul className="mt-auto flex flex-col gap-3 text-sm text-zinc-600">
<li className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Competitive FX rates
                    </li>
<li className="flex items-center gap-3 transition-transform duration-300 delay-75 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Real-time conversion
                    </li>
<li className="flex items-center gap-3 transition-transform duration-300 delay-100 group-hover:translate-x-1">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:check-circle-linear"></iconify-icon> Liquidity aggregation
                    </li>
</ul>
</div>
</div>
</section>

<section className="relative z-10 border-y border-zinc-200 bg-zinc-50 py-24 md:py-32" id="why">
<div className="mx-auto max-w-7xl px-6">
<h2 className="animate-on-scroll mb-16 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl text-center">Built for global financial operations</h2>
<div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4 lg:gap-x-8">
<div className="animate-on-scroll group cursor-default">
<div className="inline-flex transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
<iconify-icon className="mb-4 text-zinc-900 transition-colors group-hover:text-blue-500" icon="solar:bolt-linear" style={{fontSize: '1.75rem'}}></iconify-icon>
</div>
<h3 className="mb-2 text-base font-medium text-zinc-900 transition-colors group-hover:text-blue-600">Real-time settlement</h3>
<p className="text-sm leading-relaxed text-zinc-500">Move funds instantly with minimal delay</p>
</div>
<div className="animate-on-scroll delay-100 group cursor-default">
<div className="inline-flex transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
<iconify-icon className="mb-4 text-zinc-900 transition-colors group-hover:text-emerald-500" icon="solar:sale-square-linear" style={{fontSize: '1.75rem'}}></iconify-icon>
</div>
<h3 className="mb-2 text-base font-medium text-zinc-900 transition-colors group-hover:text-emerald-600">Lower cross-border costs</h3>
<p className="text-sm leading-relaxed text-zinc-500">Reduce fees with optimized routing and liquidity</p>
</div>
<div className="animate-on-scroll delay-200 group cursor-default">
<div className="inline-flex transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
<iconify-icon className="mb-4 text-zinc-900 transition-colors group-hover:text-indigo-500" icon="solar:graph-up-linear" style={{fontSize: '1.75rem'}}></iconify-icon>
</div>
<h3 className="mb-2 text-base font-medium text-zinc-900 transition-colors group-hover:text-indigo-600">Higher acceptance rates</h3>
<p className="text-sm leading-relaxed text-zinc-500">Improve payment success with smart processing</p>
</div>
<div className="animate-on-scroll delay-300 group cursor-default">
<div className="inline-flex transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
<iconify-icon className="mb-4 text-zinc-900 transition-colors group-hover:text-rose-500" icon="solar:shield-check-linear" style={{fontSize: '1.75rem'}}></iconify-icon>
</div>
<h3 className="mb-2 text-base font-medium text-zinc-900 transition-colors group-hover:text-rose-600">Built-in compliance</h3>
<p className="text-sm leading-relaxed text-zinc-500">KYT, AML, and KYC integrated by default</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 overflow-hidden">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
<div className="relative">
<h2 className="animate-on-scroll mb-6 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">Regulatory &amp; compliance ready</h2>
<p className="animate-on-scroll delay-100 text-lg text-zinc-500">Licensed and aligned with global regulatory standards to ensure secure and compliant operations across all markets.</p>

<div className="animate-on-scroll delay-200 mt-12 flex items-center justify-center p-8 border border-zinc-100 bg-gradient-to-br from-zinc-50 to-white rounded-3xl shadow-sm relative overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center opacity-50 transition-transform duration-700 group-hover:scale-110">
<div className="w-32 h-32 border border-zinc-200 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
<div className="absolute w-48 h-48 border border-zinc-200 rounded-full"></div>
<div className="absolute w-64 h-64 border border-zinc-100 rounded-full"></div>
</div>

<div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-lg ring-8 ring-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-600">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '2.5rem'}}></iconify-icon>
</div>

<div className="absolute top-10 left-10 flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm border border-zinc-100 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div> KYC
                    </div>
<div className="absolute bottom-10 right-10 flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm border border-zinc-100 transition-transform duration-500 group-hover:translate-y-2 group-hover:translate-x-2">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div> AML
                    </div>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="animate-on-scroll delay-100 flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all hover:bg-white hover:shadow-md cursor-default group">
<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200/50 text-zinc-900 transition-colors group-hover:bg-blue-100 group-hover:text-blue-600">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1rem'}}></iconify-icon>
</div>
<div>
<h4 className="font-medium text-zinc-900 text-sm">European Union</h4>
<p className="mt-1 text-sm text-zinc-500">EMI-aligned operations</p>
</div>
</div>
<div className="animate-on-scroll delay-200 flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all hover:bg-white hover:shadow-md cursor-default group">
<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200/50 text-zinc-900 transition-colors group-hover:bg-red-100 group-hover:text-red-600">
<iconify-icon icon="solar:buildings-linear" style={{fontSize: '1rem'}}></iconify-icon>
</div>
<div>
<h4 className="font-medium text-zinc-900 text-sm">Canada</h4>
<p className="mt-1 text-sm text-zinc-500">MSB registration</p>
</div>
</div>
<div className="animate-on-scroll delay-300 flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all hover:bg-white hover:shadow-md cursor-default group">
<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200/50 text-zinc-900 transition-colors group-hover:bg-emerald-100 group-hover:text-emerald-600">
<iconify-icon icon="solar:global-linear" style={{fontSize: '1rem'}}></iconify-icon>
</div>
<div>
<h4 className="font-medium text-zinc-900 text-sm">Global</h4>
<p className="mt-1 text-sm text-zinc-500">KYT / AML / KYC compliance</p>
</div>
</div>
<div className="animate-on-scroll delay-400 flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all hover:bg-white hover:shadow-md cursor-default group">
<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200/50 text-zinc-900 transition-colors group-hover:bg-zinc-800 group-hover:text-white">
<iconify-icon icon="solar:lock-password-linear" style={{fontSize: '1rem'}}></iconify-icon>
</div>
<div>
<h4 className="font-medium text-zinc-900 text-sm">Security</h4>
<p className="mt-1 text-sm text-zinc-500">Bank-grade infrastructure and controls</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-t border-zinc-200 bg-gradient-to-b from-zinc-50 to-white py-24 md:py-32" id="use-cases">
<div className="mx-auto max-w-7xl px-6">
<h2 className="animate-on-scroll mb-16 text-center text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">Built for modern platforms</h2>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="animate-on-scroll rounded-3xl border border-zinc-200 bg-white shadow-sm p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer group">
<iconify-icon className="mb-6 text-zinc-900 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" icon="solar:shop-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h3 className="mb-3 text-lg font-medium tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">Cross-border commerce</h3>
<p className="text-sm leading-relaxed text-zinc-500">Accept and settle payments globally with local payment methods seamlessly.</p>
</div>
<div className="animate-on-scroll delay-100 rounded-3xl border border-zinc-200 bg-white shadow-sm p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer group">
<iconify-icon className="mb-6 text-zinc-900 transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-500" icon="solar:star-fall-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h3 className="mb-3 text-lg font-medium tracking-tight text-zinc-900 group-hover:text-amber-600 transition-colors">Creator economy</h3>
<p className="text-sm leading-relaxed text-zinc-500">Enable instant, automated payouts to creators and partners worldwide.</p>
</div>
<div className="animate-on-scroll delay-200 rounded-3xl border border-zinc-200 bg-white shadow-sm p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer group">
<iconify-icon className="mb-6 text-zinc-900 transition-transform duration-300 group-hover:scale-110 group-hover:text-emerald-500" icon="solar:route-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<h3 className="mb-3 text-lg font-medium tracking-tight text-zinc-900 group-hover:text-emerald-600 transition-colors">Travel &amp; mobility</h3>
<p className="text-sm leading-relaxed text-zinc-500">Power real-time payments and dynamic routing for global users and services.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 overflow-hidden py-32 text-center md:py-48">
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)]"></div>
<div className="mx-auto max-w-4xl px-6">
<h2 className="animate-on-scroll mb-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">Operate without borders</h2>
<p className="animate-on-scroll delay-100 mx-auto mb-10 max-w-2xl text-lg text-zinc-500">
                Connect to global payment rails across Europe, Latin America, Africa, and Asia-Pacific through a single API connection.
            </p>
<div className="animate-on-scroll delay-200 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium shadow-md transition-transform hover:scale-105 cursor-default">
<iconify-icon className="text-zinc-900 animate-[spin_10s_linear_infinite]" icon="solar:earth-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="text-zinc-600">Support for <strong className="font-semibold text-zinc-900">50+ countries</strong>, <strong className="font-semibold text-zinc-900">120+ payment methods</strong>, and <strong className="font-semibold text-zinc-900">30+ currencies</strong></span>
</div>

<div className="animate-on-scroll delay-300 mt-20 relative mx-auto h-64 max-w-3xl border border-zinc-200/50 rounded-3xl bg-white/60 shadow-sm overflow-hidden flex items-center justify-center backdrop-blur-md hidden sm:flex group">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="relative z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 shadow-lg ring-4 ring-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-600 cursor-pointer">
<span className="text-white font-semibold tracking-tighter text-sm">FN</span>
</div>

<svg className="absolute inset-0 h-full w-full z-10" fill="none">
<path className="animate-flow opacity-60 group-hover:opacity-100 group-hover:stroke-blue-400 transition-colors duration-500" d="M 50% 50% L 20% 30%" stroke="#d4d4d8" stroke-dasharray="4 4" strokeWidth="2"></path>
<path className="animate-flow opacity-60 group-hover:opacity-100 group-hover:stroke-blue-400 transition-colors duration-500" d="M 50% 50% L 85% 25%" stroke="#d4d4d8" stroke-dasharray="4 4" strokeWidth="2"></path>
<path className="animate-flow opacity-60 group-hover:opacity-100 group-hover:stroke-blue-400 transition-colors duration-500" d="M 50% 50% L 25% 75%" stroke="#d4d4d8" stroke-dasharray="4 4" strokeWidth="2"></path>
<path className="animate-flow opacity-60 group-hover:opacity-100 group-hover:stroke-blue-400 transition-colors duration-500" d="M 50% 50% L 75% 80%" stroke="#d4d4d8" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>

<div className="animate-float float-delay-1 absolute top-[30%] left-[20%] z-20 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-transform hover:scale-110 hover:border-blue-200 cursor-pointer">
<span className="text-[10px] font-medium text-zinc-600">EU</span>
</div>
<div className="animate-float float-delay-2 absolute top-[25%] left-[85%] z-20 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-transform hover:scale-110 hover:border-blue-200 cursor-pointer">
<span className="text-[10px] font-medium text-zinc-600">NA</span>
</div>
<div className="animate-float float-delay-3 absolute top-[75%] left-[25%] z-20 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-transform hover:scale-110 hover:border-blue-200 cursor-pointer">
<span className="text-[10px] font-medium text-zinc-600">LATAM</span>
</div>
<div className="animate-float float-delay-4 absolute top-[80%] left-[75%] z-20 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-transform hover:scale-110 hover:border-blue-200 cursor-pointer">
<span className="text-[10px] font-medium text-zinc-600">APAC</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-t border-zinc-200 bg-zinc-50 py-32 text-center">
<div className="animate-on-scroll mx-auto max-w-3xl px-6">
<h2 className="mb-8 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">Build your global payment stack</h2>
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-medium text-white shadow-sm transition-all hover:bg-zinc-800 hover:scale-[1.02] active:scale-95 hover:shadow-lg" href="#">
                Start Integration
                <iconify-icon className="text-[1.25rem] transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="border-t border-zinc-200 bg-white py-12">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
<span className="text-lg font-semibold tracking-tighter text-zinc-900 cursor-pointer hover:opacity-80 transition-opacity">FLOWNET</span>
<div className="text-sm text-zinc-500">
                © 2024 FlowNet Technologies. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}

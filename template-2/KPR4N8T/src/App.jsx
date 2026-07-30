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
      {

      // Icons
      window.lucide && window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile menu
      const menuBtn = document.getElementById('menuBtn');
      const mobileSheet = document.getElementById('mobileSheet');
      if (menuBtn && mobileSheet) {
        menuBtn.addEventListener('click', () => {
          mobileSheet.classList.toggle('hidden');
        });
      }

      // Copy code
      const copyBtn = document.getElementById('copyBtn');
      const codeBlock = document.getElementById('codeBlock');
      if (copyBtn && codeBlock) {
        copyBtn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(codeBlock.innerText.trim());
            copyBtn.innerHTML = '<i data-lucide="check" class="size-4"></i>Copied';
            window.lucide && window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 }, icons: { check: lucide.icons.check } });
            setTimeout(() => {
              copyBtn.innerHTML = '<i data-lucide="clipboard" class="size-4"></i>Copy';
              window.lucide && window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }, 1400);
          } catch (_) {}
        });
      }

      // Docs dropdown (desktop)
      const docsBtn = document.getElementById('docsBtn');
      const docsMenu = document.getElementById('docsMenu');
      const docsChevron = document.getElementById('docsChevron');

      function closeDocs() {
        docsMenu && docsMenu.classList.add('hidden');
        docsBtn && docsBtn.setAttribute('aria-expanded', 'false');
        docsChevron && docsChevron.classList.remove('rotate-180');
      }

      if (docsBtn && docsMenu) {
        docsBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = !docsMenu.classList.contains('hidden');
          if (isOpen) {
            closeDocs();
          } else {
            docsMenu.classList.remove('hidden');
            docsBtn.setAttribute('aria-expanded', 'true');
            docsChevron && docsChevron.classList.add('rotate-180');
          }
        });

        document.addEventListener('click', (e) => {
          if (!docsMenu.contains(e.target) && !docsBtn.contains(e.target)) {
            closeDocs();
          }
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') closeDocs();
        });
      }
    
}
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
      

<div className="fixed inset-0 -z-50 overflow-hidden">

<div className="absolute inset-0" style={{background: `radial-gradient(1200px 600px at 70% 10%, rgba(30,64,175,0.22), transparent 60%), radial-gradient(900px 500px at 15% 30%, rgba(2,132,199,0.18), transparent 60%), radial-gradient(700px 300px at 50% 100%, rgba(15,23,42,0.6), rgba(2,6,23,1))`}}>
</div>

<div className="absolute inset-0 opacity-30" style={{backgroundImage: `linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)`, backgroundSize: `48px 48px`}}>
</div>

<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: `url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop')`, backgroundSize: `cover`, mixBlend: `overlay`}}></div>
</div>

<header className="sticky top-0 z-40">
<nav className="mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8">
<div className="flex sm:px-4 sm:py-3 shadow-black/30 outline outline-1 outline-white/5 bg-white/5 border-white/10 border rounded-xl mt-4 pt-2 pr-3 pb-2 pl-3 shadow-sm backdrop-blur-xl items-center justify-between">

<a className="group inline-flex items-center gap-2 rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50" href="/">
<div className="text-sm tracking-tight font-semibold text-slate-100" style={{fontFamily: `Geist, Inter, ui-sans-serif`}}>
              CQ
            </div>
<div className="h-6 w-px bg-white/10"></div>
<span className="text-sm text-slate-300/90 group-hover:text-slate-100 transition-colors">CloudQuote</span>
</a>

<div className="hidden md:flex items-center gap-1">
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" href="/products/api">Data API</a>
<div className="relative">
<button aria-expanded="false" className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" id="docsBtn">
<span className="">Documentation</span>
<svg className="lucide lucide-chevron-down size-4 w-[24px] h-[24px] transition-transform duration-200" data-lucide="chevron-down" fill="none" height="24" id="docsChevron" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `24px`, height: `24px`, color: `rgb(241, 245, 249)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>

<div className="absolute right-0 mt-2 hidden w-56 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-md shadow-black/30 outline outline-1 outline-white/5 overflow-hidden" id="docsMenu">
<a className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.08]" href="/docs">API Reference</a>
<div className="h-px w-full bg-white/10"></div>
<a className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.08]" href="/docs/guides">Guides</a>
<a className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.08]" href="/docs/sdks">SDKs</a>
<a className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/[0.08]" href="/status">System Status</a>
</div>
</div>
</div>

<div className="hidden sm:flex items-center gap-2">
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" href="/login">Log In</a>
<a className="rounded-lg bg-blue-500/90 text-white px-3 py-2 text-sm font-medium tracking-tight hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 shadow-sm shadow-blue-950/40" href="/signup">Sign Up</a>
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" href="/contact">Contact Us</a>
</div>

<div className="sm:hidden">
<button className="inline-flex items-center gap-2 rounded-md px-2.5 py-2 text-slate-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" id="menuBtn">
<svg className="lucide lucide-menu size-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span className="sr-only">Open menu</span>
</button>
</div>
</div>

<div className="mt-2 hidden flex-col gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl shadow-sm shadow-black/30 outline outline-1 outline-white/5" id="mobileSheet">
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="/products/api">Data API</a>
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="#">Documentation</a>
<div className="h-px w-full bg-white/10 my-1"></div>
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="/login">Log In</a>
<a className="rounded-lg bg-blue-500/90 text-white px-3 py-2 text-sm font-medium tracking-tight hover:bg-blue-500 transition" href="/signup">Sign Up</a>
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="/contact">Contact Us</a>
</div>
</nav>
</header>
<main className="relative">

<section className="relative">
<div className="absolute inset-0 -z-10">

<img alt="" className="h-full w-full object-cover opacity-10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="max-w-[75rem] sm:px-6 lg:px-8 sm:pt-20 lg:pt-28 mr-auto ml-auto pt-16 pr-4 pb-8 pl-4">
<div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">

<div className="lg:col-span-6 xl:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300/80 backdrop-blur-xl shadow-sm shadow-black/30">
<span className="inline-block size-1.5 rounded-full bg-blue-500/90 animate-pulse"></span>
                Live, historical and alternative datasets
              </div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-slate-100 tracking-tight" style={{fontFamily: `Geist, Inter, ui-sans-serif`}}>
                Stock Market Data for <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400">AI & Applications</span>
</h1>
<p className="text-base sm:text-lg text-slate-300/90 max-w-2xl">
                Access real-time & historical pricing data, news, and supporting datasets for stocks, crypto, ETFs, mutual funds, treasuries, indices, and more — unified under one developer-first platform.
              </p>
<div className="flex flex-wrap gap-3 pt-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-blue-500/90 px-5 py-3 text-sm font-medium tracking-tight text-white hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 shadow-sm shadow-blue-950/40" href="/products/api">
<svg className="lucide lucide-zap size-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Market Data API
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium tracking-tight text-slate-200 hover:border-blue-500/50 hover:text-white hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" href="/data-coverage">
<svg className="lucide lucide-layers size-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                  Data Coverage
                </a>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
<div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-blue-500/50 transition-colors">
<div className="text-xs text-slate-400">Latency</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-slate-100" style={{fontFamily: `Geist, Inter`}}>55 ms</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-blue-500/50 transition-colors">
<div className="text-xs text-slate-400">Symbols</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-slate-100" style={{fontFamily: `Geist, Inter`}}>2.4M+</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:border-blue-500/50 transition-colors">
<div className="text-xs text-slate-400">Uptime</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-slate-100" style={{fontFamily: `Geist, Inter`}}>99.99%</div>
</div>
</div>
</div>

<div className="lg:col-span-6 xl:col-span-5">
<div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 sm:p-6 backdrop-blur-xl shadow-lg shadow-black/40 outline outline-1 outline-white/10">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-sm text-slate-300">
<svg className="lucide lucide-code-2 size-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span className="">Javascript</span>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" id="copyBtn">
<svg className="lucide lucide-clipboard size-4" data-lucide="clipboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8"></rect><path></path></svg>
                    Copy
                  </button>
</div>
<div className="mt-3 rounded-xl border border-white/10 bg-slate-900/70 p-3 sm:p-4 overflow-hidden">
<pre className="text-[12px] sm:text-[13px] leading-relaxed text-slate-200/95"><code className="" id="codeBlock">const params = new URLSearchParams({"{"}
  symbol: 'GOOG'
{"}"});

const publicKey = '-- YOUR API KEY HERE --';

const res = await fetch(
  `https://api.cloudquote.io/vendor/getQuote.json?${"{"}params{"}"}`,
  {"{"}
    mode: 'cors',
    headers: {"{"} publicKey {"}"}
  {"}"}
);

console.log(await res.json());</code></pre>
</div>

<div className="mt-4 grid grid-cols-2 gap-2">
<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-xs text-slate-300">
<svg className="lucide lucide-lock size-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18"></rect><path></path></svg> HTTPS
                  </div>
<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-xs text-slate-300">
<svg className="lucide lucide-webhook size-4" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> Websocket
                  </div>
</div>

<div className="pointer-events-none absolute -inset-x-2 bottom-8 mx-auto h-24 w-[80%] rounded-full bg-blue-500/20 blur-3xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-16 lg:py-24 pt-12 pb-12">
<div className="mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100" style={{fontFamily: `Geist, Inter`}}>Developer First Platform</h2>
<p className="mt-3 text-slate-300/90">
              At CloudQuote, we make it simple to access, integrate, and manage financial data. Our mission is to provide numerous datasets from multiple vendors under one streamlined platform—so you can stay focused on building exceptional solutions.
            </p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

<div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-md shadow-black/30 hover:border-blue-500/40 transition-colors">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-bolt size-5" data-lucide="bolt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="text-sm font-medium tracking-tight" style={{fontFamily: `Geist, Inter`}}>Fast development</span>
</div>
<p className="mt-2 text-sm text-slate-300/90">
                Stream market data directly to your app, devices, or website via Websocket, HTTP/2, or pull via REST.
              </p>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-md shadow-black/30 hover:border-blue-500/40 transition-colors">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-globe size-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
<span className="text-sm font-medium tracking-tight" style={{fontFamily: `Geist, Inter`}}>Timely and Accurate</span>
</div>
<p className="mt-2 text-sm text-slate-300/90">
                Top quality data, streamed in real-time from exchanges and providers around the world.
              </p>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-md shadow-black/30 hover:border-blue-500/40 transition-colors">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-banknote size-5" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20"></rect><circle cx="12" cy="12"></circle><path></path></svg>
<span className="text-sm font-medium tracking-tight" style={{fontFamily: `Geist, Inter`}}>Simple Pricing</span>
</div>
<p className="mt-2 text-sm text-slate-300/90">
                Get the data you need under one contract, with discounts for bundled datasets.
              </p>
</div>
</div>

<div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-xl shadow-lg shadow-black/40 outline outline-1 outline-white/10">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-file-code size-5" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{fontFamily: `Geist, Inter`}}>Access our API from your application</h3>
</div>
<p className="mt-2 text-sm text-slate-300/90">
              CloudQuote APIs are easy to integrate into your web pages and applications, whether running client or server side.
            </p>
<div className="mt-4 grid sm:grid-cols-[200px_1fr] gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
<div className="flex items-center gap-2">
<svg className="lucide lucide-badge-check size-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span>Client-side Fetch</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-3 sm:p-4 overflow-x-auto">
<pre className="text-[12px] sm:text-[13px] leading-relaxed text-slate-200/95"><code className="">const res = await fetch('https://api.cloudquote.io/vendor/getQuote.json?symbol=GOOG', {"{"}
  mode: 'cors',
  headers: {"{"} publicKey: '-- YOUR API KEY HERE --' {"}"}
{"}"});
console.log(await res.json());</code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="relative pb-14 sm:pb-20">
<div className="mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100" style={{fontFamily: `Geist, Inter`}}>High quality data from brands you trust</h2>
<p className="mt-2 text-slate-300/90">Skip the negotiation hassle—purchase everything you need in one place.</p>
</div>
<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-xl shadow-md shadow-black/30">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">

<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="http://www.sagedataservice.com" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">Sage Data</span>
</a>
<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="http://www.financialcontent.com" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">FinancialContent</span>
</a>
<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="http://www.streetinsider.com" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">StreetInsider</span>
</a>
<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="http://www.barchart.com" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">Barchart</span>
</a>
<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="http://www.exchange-data.com" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">Exchange Data</span>
</a>
<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="http://www.bravenewcoin.com" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">BraveNewCoin</span>
</a>
<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="http://www.nasdaqomx.com" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">NASDAQ OMX</span>
</a>
<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="http://www.nyse.com" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">NYSE</span>
</a>
<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="https://www.tmx.com/" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">TMX</span>
</a>
<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="http://www.finra.org" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">FINRA</span>
</a>
<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="http://www.bats.com" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">BATS</span>
</a>
<a className="group flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/40 p-4 hover:border-blue-500/40 transition-colors" href="http://www.owler.com" rel="noreferrer" target="_blank">
<span className="text-xs text-slate-400 group-hover:text-slate-200 transition">Owler</span>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-xl">
<div className="mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8 py-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<section className="">
<h4 className="text-sm font-semibold tracking-tight text-slate-100" style={{fontFamily: `Geist, Inter`}}>CloudQuote</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-300/90">
<li className="">
<a className="hover:text-slate-100 transition-colors" href="https://www.google.com/maps/place/FinancialContent/@37.5141456,-122.2639589,15z/data=!4m2!3m1!1s0x0:0xaff3350de005c778?sa=X&ved=2ahUKEwiz45CC79_iAhUZHjQIHZZ2AIIQ_BIwDXoECAgQCA" target="_blank">
                  195 Glenn Way Suite 250<br />San Carlos, CA 94070
                </a>
</li>
<li className=""><a className="hover:text-slate-100 transition-colors" href="tel:888-688-9880">(888) 688-9880</a></li>
</ul>
</section>
<section className="">
<h4 className="text-sm font-semibold tracking-tight text-slate-100" style={{fontFamily: `Geist, Inter`}}>Learn More</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-300/90">
<li className=""><a className="hover:text-slate-100 transition-colors" href="/about">About Us</a></li>
<li className=""><a className="hover:text-slate-100 transition-colors" href="/contact">Contact Us</a></li>
</ul>
</section>
<section>
<h4 className="text-sm font-semibold tracking-tight text-slate-100" style={{fontFamily: `Geist, Inter`}}>FinancialContent</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-300/90">
<li><a className="hover:text-slate-100 transition-colors" href="/terms/service">Terms of Service</a></li>
<li><a className="hover:text-slate-100 transition-colors" href="/privacy">Privacy Policy</a></li>
</ul>
</section>
<section className="sm:col-span-2 lg:col-span-1">
<h4 className="text-sm font-semibold tracking-tight text-slate-100" style={{fontFamily: `Geist, Inter`}}>Get Started</h4>
<div className="mt-3 flex gap-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-blue-500/90 px-4 py-2 text-xs font-medium tracking-tight text-white hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" href="/signup">
<svg className="lucide lucide-user-plus size-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="9" cy="7"></circle><line></line><line></line></svg>
                Create account
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-tight text-slate-200 hover:border-blue-500/50 hover:text-white hover:bg-white/[0.08] transition-colors" href="/products/api">
<svg className="lucide lucide-rocket size-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
                Explore API
              </a>
</div>
</section>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8">
<p className="text-xs text-slate-400">© Copyright 2025 FinancialContent Services, Inc.</p>
<div className="inline-flex items-center gap-3 text-xs text-slate-400">
<a className="hover:text-slate-200 transition-colors" href="/privacy">Privacy</a>
<span className="opacity-30">/</span>
<a className="hover:text-slate-200 transition-colors" href="/terms/service">Terms</a>
</div>
</div>
</div>
</footer>




    </>
  );
}

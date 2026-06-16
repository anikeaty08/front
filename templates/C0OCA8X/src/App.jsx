import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileSheet = document.getElementById('mobileSheet');
    if (menuBtn && mobileSheet) {
      menuBtn.addEventListener('click', () => mobileSheet.classList.toggle('hidden'));
    }

    // Docs dropdown
    const docsBtn = document.getElementById('docsBtn');
    const docsMenu = document.getElementById('docsMenu');
    if (docsBtn && docsMenu) {
      docsBtn.addEventListener('click', () => {
        const expanded = docsBtn.getAttribute('aria-expanded') === 'true';
        docsBtn.setAttribute('aria-expanded', String(!expanded));
        docsMenu.classList.toggle('hidden');
      });
      document.addEventListener('click', (e) => {
        if (!docsBtn.contains(e.target) && !docsMenu.contains(e.target)) {
          docsMenu.classList.add('hidden');
          docsBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Copy helpers
    function copyText(text) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    const copyEndpoint = document.getElementById('copyEndpoint');
    if (copyEndpoint) {
      copyEndpoint.addEventListener('click', () => copyText('/barchart/getEarningsEstimates'));
    }
    const copyBase = document.getElementById('copyBase');
    if (copyBase) {
      copyBase.addEventListener('click', () => copyText('https://api.cloudquote.net'));
    }
    document.querySelectorAll('[data-copy]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sel = btn.getAttribute('data-copy');
        const pre = document.querySelector(sel);
        if (!pre) return;
        const code = pre.querySelector('code');
        copyText(code ? code.textContent : pre.textContent);
      });
    });

    // Code tabs
    const tabCurl = document.getElementById('tabCurl');
    const tabJs = document.getElementById('tabJs');
    const codeCurl = document.getElementById('codeCurl');
    const codeJs = document.getElementById('codeJs');
    function setTab(name) {
      const isCurl = name === 'curl';
      codeCurl.classList.toggle('hidden', !isCurl);
      codeJs.classList.toggle('hidden', isCurl);
      tabCurl.dataset.active = isCurl;
      tabJs.dataset.active = !isCurl;
    }
    if (tabCurl && tabJs) {
      tabCurl.addEventListener('click', () => setTab('curl'));
      tabJs.addEventListener('click', () => setTab('js'));
      setTab('curl');
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-50 overflow-hidden">
<div className="absolute inset-0" style={{background: 'radial-gradient(1200px 600px at 70% 10%, rgba(30,64,175,0.22), transparent 60%), radial-gradient(900px 500px at 15% 30%, rgba(2,132,199,0.18), transparent 60%), radial-gradient(700px 300px at 50% 100%, rgba(15,23,42,0.6), rgba(2,6,23,1))'}}></div>
<div className="absolute inset-0 opacity-30" style="background-image:
      linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px);
      background-size: 48px 48px;"></div>
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp', backgroundSize: 'cover', mixBlend: 'overlay'}}></div>
</div>

<header className="sticky top-0 z-40">
<nav className="mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8">
<div className="flex sm:px-4 sm:py-3 shadow-black/30 outline outline-1 outline-white/5 bg-white/5 border-white/10 border rounded-xl mt-4 pt-2 pr-3 pb-2 pl-3 shadow-sm backdrop-blur-xl items-center justify-between">

<a className="group inline-flex items-center gap-2 rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50" href="/">
<div className="text-sm tracking-tight font-semibold text-slate-100" style={{fontFamily: 'Geist, Inter, ui-sans-serif'}}>CQ</div>
<div className="h-6 w-px bg-white/10"></div>
<span className="text-sm text-slate-300/90 group-hover:text-slate-100 transition-colors">CloudQuote</span>
</a>

<div className="hidden md:flex items-center gap-1">
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" href="/products/api">Data API</a>
<div className="relative">
<button aria-expanded="false" className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" id="docsBtn">
<span>Documentation</span>
<svg className="lucide w-4 h-4 transition-transform duration-200" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
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
<svg className="lucide w-5 h-5" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<span className="sr-only">Open menu</span>
</button>
</div>
</div>

<div className="mt-2 hidden flex-col gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl shadow-sm shadow-black/30 outline outline-1 outline-white/5" id="mobileSheet">
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="/products/api">Data API</a>
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="/docs">Documentation</a>
<div className="h-px w-full bg-white/10 my-1"></div>
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="/login">Log In</a>
<a className="rounded-lg bg-blue-500/90 text-white px-3 py-2 text-sm font-medium tracking-tight hover:bg-blue-500 transition" href="/signup">Sign Up</a>
<a className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-white/5 transition" href="/contact">Contact Us</a>
</div>
</nav>
</header>
<main className="relative">

<section className="relative">
<div className="max-w-[75rem] sm:px-6 lg:px-8 mr-auto ml-auto pt-10 pr-4 pb-6 pl-4">
<nav className="text-xs text-slate-400">
<a className="hover:text-slate-200 transition" href="/products/api">API Directory</a>
<span className="px-2 opacity-50">/</span>
<a className="hover:text-slate-200 transition" href="/products/api#analyst-data">Analyst Data</a>
<span className="px-2 opacity-50">/</span>
<span className="text-slate-300">getEarningsEstimates</span>
</nav>
<div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter, ui-sans-serif'}}>getEarningsEstimates</h1>
<p className="mt-2 text-sm sm:text-base text-slate-300/90 max-w-2xl">The getEarningsEstimates API provides per share earnings estimates on public companies for quarterly and annual periods based on symbol.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 text-[11px]">GET</span>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[12px] text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-white/10 transition" id="copyEndpoint">
<code className="text-slate-200">/barchart/getEarningsEstimates</code>
<svg className="lucide w-[18px] h-[18px]" data-lucide="copy" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="14" x="8" y="8"></rect><path d="M4 16V6a2 2 0 0 1 2-2h10"></path></svg>
</button>
<span className="rounded border border-white/10 bg-white/5 text-[11px] px-2 py-1 text-slate-300">Category: Analyst Data</span>
<span className="rounded border border-white/10 bg-white/5 text-[11px] px-2 py-1 text-slate-300">Vendor: Barchart</span>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-blue-500/90 text-white px-3.5 py-2 text-xs sm:text-sm font-medium tracking-tight hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 shadow-sm shadow-blue-950/40" href="/contact">
              TRY IT FREE
            </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs sm:text-sm font-medium tracking-tight text-slate-200 hover:border-blue-500/50 hover:text-white hover:bg-white/[0.08] transition-colors" href="/docs">
              API Reference
            </a>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-[75rem] sm:px-6 lg:px-8 mr-auto ml-auto pb-16 pr-4 pl-4">
<div className="grid lg:grid-cols-[1fr_360px] gap-6 lg:gap-8">

<div className="space-y-6">

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Query Parameters</h2>
</div>
<div className="px-2 sm:px-3 pb-3">
<div className="overflow-x-auto">
<table className="min-w-full text-left text-sm">
<thead className="text-slate-300/80">
<tr className="border-b border-white/10">
<th className="px-3 sm:px-4 py-2 font-medium">Parameter</th>
<th className="px-3 sm:px-4 py-2 font-medium">Description</th>
<th className="px-3 sm:px-4 py-2 font-medium">Data Type</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr>
<td className="px-3 sm:px-4 py-2 text-slate-200">fields</td>
<td className="px-3 sm:px-4 py-2 text-slate-300/90">Additional fields requested.</td>
<td className="px-3 sm:px-4 py-2 text-slate-400">string</td>
</tr>
<tr>
<td className="px-3 sm:px-4 py-2 text-slate-200">symbols</td>
<td className="px-3 sm:px-4 py-2 text-slate-300/90">A symbol or code that identifies a financial instrument. Multiple symbols separated by a comma may be used.</td>
<td className="px-3 sm:px-4 py-2 text-slate-400">string</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Response Fields</h2>
</div>
<div className="px-2 sm:px-3 pb-3">
<div className="overflow-x-auto">
<table className="min-w-full text-left text-sm">
<thead className="text-slate-300/80">
<tr className="border-b border-white/10">
<th className="px-3 sm:px-4 py-2 font-medium">Field</th>
<th className="px-3 sm:px-4 py-2 font-medium">Description</th>
<th className="px-3 sm:px-4 py-2 font-medium">Data Type</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">averageEstimate</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">The average estimated earnings per share based on all analysts.</td><td className="px-3 sm:px-4 py-2 text-slate-400">double</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">currentQtrExpectedReportDate</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">The expected report date for the most recent quarter.</td><td className="px-3 sm:px-4 py-2 text-slate-400">date</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">declarationDate</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Date when dividend info was annouced.</td><td className="px-3 sm:px-4 py-2 text-slate-400">date</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">dividendRate</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Last dividend payout amount.</td><td className="px-3 sm:px-4 py-2 text-slate-400">double</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">dividendStatus</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Whether the dividend data is late or not.</td><td className="px-3 sm:px-4 py-2 text-slate-400">string</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">dividendType</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Type of dividend payout.</td><td className="px-3 sm:px-4 py-2 text-slate-400">string</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">exDividendDate</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">The last possible date to have owned shares and still be entitled to the dividend.</td><td className="px-3 sm:px-4 py-2 text-slate-400">date</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">expectedEarningsSource</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">The source of the expected earnings report date.</td><td className="px-3 sm:px-4 py-2 text-slate-400">string</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">expectedEarningsStatus</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Whether the expected earnings information is late or not.</td><td className="px-3 sm:px-4 py-2 text-slate-400">string</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">growthRateEstimate</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Estimated year-over-year growth rate based off the average estimate.</td><td className="px-3 sm:px-4 py-2 text-slate-400">double</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">highEstimate</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">The highest earnings per share estimate amount.</td><td className="px-3 sm:px-4 py-2 text-slate-400">double</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">indicatedAnnualDvnd</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Indicated annual dividend per share.</td><td className="px-3 sm:px-4 py-2 text-slate-400">double</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">lowEstimate</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">The lowest earnings per share estimate amount.</td><td className="px-3 sm:px-4 py-2 text-slate-400">double</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">numAnalysts</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Number of analysts providing earnings estimates.</td><td className="px-3 sm:px-4 py-2 text-slate-400">int</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">paymentDate</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Dividend payment date.</td><td className="px-3 sm:px-4 py-2 text-slate-400">date</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">period</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Quarter or annual period, for example Q42013 or FY122013.</td><td className="px-3 sm:px-4 py-2 text-slate-400">string</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">priorYear</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Average EPS estimate last year.</td><td className="px-3 sm:px-4 py-2 text-slate-400">double</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">recordDate</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">Date when dividend info was reported.</td><td className="px-3 sm:px-4 py-2 text-slate-400">date</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">symbol</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">A symbol or code that identifies the instrument.</td><td className="px-3 sm:px-4 py-2 text-slate-400">string</td></tr>
<tr><td className="px-3 sm:px-4 py-2 text-slate-200">symbolName</td><td className="px-3 sm:px-4 py-2 text-slate-300/90">The full name of the instrument.</td><td className="px-3 sm:px-4 py-2 text-slate-400">string</td></tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>About the Vendor</h2>
</div>
<div className="px-4 sm:px-5 py-4">
<p className="text-sm sm:text-base text-slate-300/90">From market data feeds to website content solutions and trading software to our flagship financial portal, Barchart.com, and individual subscription services, Barchart is the definitive source for comprehensive financial data and information.</p>
<div className="mt-3">
<a className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition" href="http://www.barchart.com" target="_blank">
                    Visit website
                    <svg className="lucide w-[18px] h-[18px]" data-lucide="external-link" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M21 14v7H3V3h7"></path></svg>
</a>
</div>
</div>
</div>
</div>

<aside className="lg:sticky lg:top-[96px] self-start space-y-6">

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-white/10">
<h3 className="text-lg font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Endpoint</h3>
</div>
<div className="px-4 sm:px-5 py-4 space-y-3">
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">GET</span>
<code className="text-slate-200">/barchart/getEarningsEstimates</code>
</div>
<div className="text-xs text-slate-400">
                  Base URL:
                  <div className="mt-1 flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-2 py-1.5">
<code className="text-[12px] text-slate-300">https://api.cloudquote.net</code>
<button className="text-slate-300 hover:text-white transition" id="copyBase" title="Copy">
<svg className="lucide w-[18px] h-[18px]" data-lucide="copy" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="14" x="8" y="8"></rect><path d="M4 16V6a2 2 0 0 1 2-2h10"></path></svg>
</button>
</div>
</div>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500/90 text-white px-3.5 py-2 text-xs font-medium tracking-tight hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 shadow-sm shadow-blue-950/40" href="/contact">
                  Try it free
                </a>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 pt-4 pb-2 border-b border-white/10 flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Examples</h3>
<div className="inline-flex rounded-md border border-white/10 p-0.5 bg-white/5">
<button className="px-2.5 py-1 text-xs rounded [--active:transparent] data-[active=true]:bg-white/10 data-[active=true]:text-white text-slate-300 transition-colors" id="tabCurl">cURL</button>
<button className="px-2.5 py-1 text-xs rounded inline-flex items-center gap-1 data-[active=true]:bg-white/10 data-[active=true]:text-white text-slate-300 transition-colors" id="tabJs">
<svg className="lucide w-[14px] h-[14px]" data-lucide="file-code-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 9l-3 3 3 3"></path><path d="M14 9l3 3-3 3"></path><path d="M5 15H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h7l5 5v1"></path></svg>
                    JS
                  </button>
</div>
</div>
<div className="px-3 sm:px-4 py-3">
<div className="group relative" id="codeCurl">
<pre className="overflow-x-auto text-[12.5px] leading-5 p-3 rounded-lg bg-slate-900/70 outline outline-1 outline-white/5 text-slate-200"><code>curl -s \
  "https://api.cloudquote.net/barchart/getEarningsEstimates.json?symbols=GOOG"</code></pre>
<button className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-white/10 transition" data-copy="#codeCurl">
                    Copy
                    <svg className="lucide w-[16px] h-[16px]" data-lucide="copy" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="14" x="8" y="8"></rect><path d="M4 16V6a2 2 0 0 1 2-2h10"></path></svg>
</button>
</div>
<div className="group relative hidden" id="codeJs">
<pre className="overflow-x-auto text-[12.5px] leading-5 p-3 rounded-lg bg-slate-900/70 outline outline-1 outline-white/5 text-slate-200"><code>fetch("https://api.cloudquote.net/barchart/getEarningsEstimates.json?symbols=GOOG")
  .then(res =&gt; res.json())
  .then(data =&gt; console.log(data))
  .catch(console.error);</code></pre>
<button className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-white/10 transition" data-copy="#codeJs">
                    Copy
                    <svg className="lucide w-[16px] h-[16px]" data-lucide="copy" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="14" x="8" y="8"></rect><path d="M4 16V6a2 2 0 0 1 2-2h10"></path></svg>
</button>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl outline outline-1 outline-white/5 shadow-sm shadow-black/30">
<div className="px-4 sm:px-5 py-4">
<div className="flex items-center justify-between">
<div>
<h4 className="text-base font-semibold tracking-tight text-slate-100" style={{fontFamily: 'Geist, Inter'}}>Need custom fields or higher limits?</h4>
<p className="text-sm text-slate-300/90">Talk to us about custom packages, SLAs, or enterprise plans.</p>
</div>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium tracking-tight text-slate-200 hover:border-blue-500/50 hover:text-white hover:bg-white/[0.08] transition-colors" href="/contact">
                    Contact Sales
                  </a>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>
</main>

<footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-xl">
<div className="mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8 py-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<section>
<h4 className="text-sm font-semibold tracking-tight text-slate-100">CloudQuote</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-300/90">
<li><a className="hover:text-slate-100 transition-colors" href="https://www.google.com/maps/place/FinancialContent/@37.5141456,-122.2639589,15z/data=!4m2!3m1!1s0x0:0xaff3350de005c778?sa=X&amp;ved=2ahUKEwiz45CC79_iAhUZHjQIHZZ2AIIQ_BIwDXoECAgQCA" target="_blank">195 Glenn Way Suite 250<br/>San Carlos, CA 94070</a></li>
<li><a className="hover:text-slate-100 transition-colors" href="tel:888-688-9880">(888) 688-9880</a></li>
</ul>
</section>
<section>
<h4 className="text-sm font-semibold tracking-tight text-slate-100">Learn More</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-300/90">
<li><a className="hover:text-slate-100 transition-colors" href="/about">About Us</a></li>
<li><a className="hover:text-slate-100 transition-colors" href="/contact">Contact Us</a></li>
</ul>
</section>
<section>
<h4 className="text-sm font-semibold tracking-tight text-slate-100">FinancialContent</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-300/90">
<li><a className="hover:text-slate-100 transition-colors" href="/terms/service">Terms of Service</a></li>
<li><a className="hover:text-slate-100 transition-colors" href="/privacy">Privacy Policy</a></li>
</ul>
</section>
<section className="sm:col-span-2 lg:col-span-1">
<h4 className="text-sm font-semibold tracking-tight text-slate-100">Get Started</h4>
<div className="mt-3 flex gap-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-blue-500/90 px-4 py-2 text-xs font-medium tracking-tight text-white hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40" href="/signup">Create account</a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-tight text-slate-200 hover:border-blue-500/50 hover:text-white hover:bg-white/[0.08] transition-colors" href="/products/api">Explore API</a>
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

import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Lucide
      document.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Mobile Menu Toggle
      const btn = document.getElementById('mobileMenuBtn');
      const menu = document.getElementById('mobileMenu');
      if (btn && menu) {
        btn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
          const icon = btn.querySelector('svg');
          if (icon) {
            const isOpen = !menu.classList.contains('hidden');
            icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        });
      }

      // Accordion
      document.querySelectorAll('[data-accordion]').forEach((trigger) => {
        trigger.addEventListener('click', () => {
          const panel = trigger.parentElement.querySelector('[data-accordion-panel]');
          const icon = trigger.querySelector('svg');
          const isHidden = panel.classList.contains('hidden');
          // Close others
          document.querySelectorAll('[data-accordion-panel]').forEach(p => p !== panel && p.classList.add('hidden'));
          document.querySelectorAll('[data-accordion] svg').forEach(i => {
            i.setAttribute('data-lucide', 'plus');
          });
          // Toggle current
          panel.classList.toggle('hidden', !isHidden);
          icon.setAttribute('data-lucide', isHidden ? 'minus' : 'plus');
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b" style={{borderColor: '#F0F0EE'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-14">

<a aria-label="NewsRPM Home" className="inline-flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded border flex items-center justify-center font-semibold tracking-tight" style={{borderColor: '#E8E8E6', color: '#1A1A1A'}}>NR</div>
<span className="text-sm sm:text-base font-medium tracking-tight">NewsRPM</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-neutral-900/80 transition-colors" href="#product">Product</a>
<a className="text-sm font-medium hover:text-neutral-900/80 transition-colors" href="#api">API</a>

<div className="relative group">
<button aria-expanded="false" aria-haspopup="true" className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-900/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded" style={{-RingColor: '#E14A2A'}} type="button">
<span>Resources</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="absolute left-0 mt-3 w-72 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
<div className="rounded-lg border shadow-sm overflow-hidden" style={{backgroundColor: '#FFFFFF', borderColor: '#EFEFEC'}}>
<div className="p-3 divide-y" style={{-Divider: '#F5F5F3', borderColor: '#F5F5F3'}}>
<a className="flex items-start gap-3 p-3 rounded hover:bg-neutral-50 transition-colors" href="#docs">
<i className="h-5 w-5" data-lucide="book-open" style={{color: '#E14A2A'}}></i>
<div>
<div className="text-sm font-medium tracking-tight">Documentation</div>
<div className="text-xs text-neutral-600">Developer-first guides, SDKs, examples</div>
</div>
</a>
<a className="flex items-start gap-3 p-3 rounded hover:bg-neutral-50 transition-colors" href="#changelog">
<i className="h-5 w-5" data-lucide="sparkles"></i>
<div>
<div className="text-sm font-medium tracking-tight">Changelog</div>
<div className="text-xs text-neutral-600">What’s new in v2.0 and beyond</div>
</div>
</a>
<a className="flex items-start gap-3 p-3 rounded hover:bg-neutral-50 transition-colors" href="#status">
<i className="h-5 w-5" data-lucide="activity" style={{color: '#4CAF50'}}></i>
<div>
<div className="text-sm font-medium tracking-tight">Status</div>
<div className="text-xs text-neutral-600">Uptime and incidents</div>
</div>
</a>
</div>
</div>
</div>
</div>
<a className="text-sm font-medium hover:text-neutral-900/80 transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-neutral-900/80 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium hover:text-neutral-900/80 transition-colors" href="#login">Login</a>
<a className="inline-flex items-center justify-center rounded-md px-3.5 py-2 text-sm font-semibold tracking-tight shadow-sm transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" href="#cta" style={{backgroundColor: '#E14A2A', color: '#FFFFFF'}}>Get Started</a>
</div>

<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" id="mobileMenuBtn" style={{borderColor: '#EDEDEB'}}>
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t" id="mobileMenu" style={{borderColor: '#F0F0EE'}}>
<div className="px-4 py-3 space-y-2">
<a className="block px-3 py-2 rounded text-sm font-medium hover:bg-neutral-50" href="#product">Product</a>
<a className="block px-3 py-2 rounded text-sm font-medium hover:bg-neutral-50" href="#api">API</a>
<div className="border rounded" style={{borderColor: '#EFEFEC'}}>
<div className="px-3 py-2 text-xs uppercase tracking-wide text-neutral-600">Resources</div>
<div className="px-1 pb-2">
<a className="flex items-center gap-2 px-2.5 py-2 rounded text-sm hover:bg-neutral-50" href="#docs">
<i className="h-4 w-4" data-lucide="book-open" style={{color: '#E14A2A'}}></i> Documentation
              </a>
<a className="flex items-center gap-2 px-2.5 py-2 rounded text-sm hover:bg-neutral-50" href="#changelog">
<i className="h-4 w-4" data-lucide="sparkles"></i> Changelog
              </a>
<a className="flex items-center gap-2 px-2.5 py-2 rounded text-sm hover:bg-neutral-50" href="#status">
<i className="h-4 w-4" data-lucide="activity" style={{color: '#4CAF50'}}></i> Status
              </a>
</div>
</div>
<a className="block px-3 py-2 rounded text-sm font-medium hover:bg-neutral-50" href="#about">About</a>
<a className="block px-3 py-2 rounded text-sm font-medium hover:bg-neutral-50" href="#contact">Contact</a>
<div className="pt-2 flex items-center gap-2">
<a className="flex-1 text-center px-3 py-2 rounded border text-sm font-medium hover:bg-neutral-50" href="#login" style={{borderColor: '#EDEDEB'}}>Login</a>
<a className="flex-1 text-center px-3 py-2 rounded text-sm font-semibold tracking-tight" href="#cta" style={{backgroundColor: '#E14A2A', color: '#FFFFFF'}}>Get Started</a>
</div>
</div>
</div>
</header>

<section className="relative" id="hero">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<svg aria-hidden="true" className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120rem] opacity-[0.08]" fill="none" viewbox="0 0 1200 600">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" stroke="#1A1A1A" stroke-opacity="0.4" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="600" width="1200"></rect>
<g stroke="#1A1A1A" stroke-opacity="0.25">
<path d="M0 120 C200 80 400 160 600 120 C800 80 1000 160 1200 120"></path>
<path d="M0 360 C200 320 400 400 600 360 C800 320 1000 400 1200 360"></path>
</g>
</svg>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14">
<div className="flex flex-col items-center text-center gap-6">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium" style={{borderColor: '#EFEFEC', backgroundColor: '#FFFFFF'}}>
<i className="h-4 w-4" data-lucide="shield-check" style={{color: '#4CAF50'}}></i>
<span className="font-mono">99.9% uptime SLA</span>
<span className="text-neutral-500">•</span>
<span className="font-mono">Sub-second latency</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl">
            Enterprise News Platform for Modern Businesses
          </h1>
<p className="text-base sm:text-lg text-neutral-700 max-w-2xl">
            Aggregate, process, and distribute news content at scale with our powerful API-first platform. Built for enterprise teams who need reliable, real-time news intelligence.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold tracking-tight shadow-sm transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" href="#cta" style={{backgroundColor: '#E14A2A', color: '#FFFFFF'}}>
<i className="h-4 w-4" data-lucide="rocket"></i>
              Get Started
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold tracking-tight border transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" href="#docs" style={{borderColor: '#EDEDEB', color: '#1A1A1A'}}>
<i className="h-4 w-4" data-lucide="book"></i>
              View Docs
            </a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-4xl pt-4">
<div className="rounded-lg p-4 border shadow-sm bg-white/70 backdrop-blur transition-transform hover:-translate-y-0.5" style={{borderColor: '#EFEFEC'}}>
<div className="text-xs uppercase text-neutral-600">Global Sources</div>
<div className="mt-1 text-2xl font-semibold tracking-tight"><span className="font-mono">5,000+</span></div>
</div>
<div className="rounded-lg p-4 border shadow-sm bg-white/70 backdrop-blur transition-transform hover:-translate-y-0.5" style={{borderColor: '#EFEFEC'}}>
<div className="text-xs uppercase text-neutral-600">Median Latency</div>
<div className="mt-1 text-2xl font-semibold tracking-tight"><span className="font-mono">&lt; 200ms</span></div>
</div>
<div className="rounded-lg p-4 border shadow-sm bg-white/70 backdrop-blur transition-transform hover:-translate-y-0.5" style={{borderColor: '#EFEFEC'}}>
<div className="text-xs uppercase text-neutral-600">Throughput</div>
<div className="mt-1 text-2xl font-semibold tracking-tight"><span className="font-mono">1.8M/min</span></div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="trusted" className="py-8 border-t" style={{backgroundColor: '#F5F5F3', borderColor: '#EFEFEC'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="sr-only" id="trusted">Trusted by leading enterprises</h2>
<div className="flex items-center justify-between gap-6 overflow-x-auto">
<div className="flex items-center gap-8 min-w-max mx-auto">

<div className="h-9 px-3 rounded border bg-white text-neutral-800 tracking-tight font-medium flex items-center" style={{borderColor: '#EDEDEB'}}>ALPHA</div>
<div className="h-9 px-3 rounded border bg-white text-neutral-800 tracking-tight font-medium flex items-center" style={{borderColor: '#EDEDEB'}}>ZENITH</div>
<div className="h-9 px-3 rounded border bg-white text-neutral-800 tracking-tight font-medium flex items-center" style={{borderColor: '#EDEDEB'}}>QUANTA</div>
<div className="h-9 px-3 rounded border bg-white text-neutral-800 tracking-tight font-medium flex items-center" style={{borderColor: '#EDEDEB'}}>OMEGA</div>
<div className="h-9 px-3 rounded border bg-white text-neutral-800 tracking-tight font-medium flex items-center" style={{borderColor: '#EDEDEB'}}>VECTOR</div>
<div className="h-9 px-3 rounded border bg-white text-neutral-800 tracking-tight font-medium flex items-center" style={{borderColor: '#EDEDEB'}}>ATLAS</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="product">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Why Choose NewsRPM?</h2>
<p className="mt-3 text-neutral-700">Built for enterprises that demand reliability, scale, and performance.</p>
<div className="mt-8 space-y-5">
<div className="flex items-start gap-4">
<div className="h-9 w-9 rounded-md border flex items-center justify-center" style={{borderColor: '#EFEFEC'}}>
<i className="h-5 w-5" data-lucide="globe"></i>
</div>
<div>
<div className="font-medium tracking-tight">Global Coverage</div>
<p className="text-neutral-700 text-sm">Access news from thousands of sources worldwide with real-time processing.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="h-9 w-9 rounded-md border flex items-center justify-center" style={{borderColor: '#EFEFEC'}}>
<i className="h-5 w-5" data-lucide="zap" style={{color: '#E14A2A'}}></i>
</div>
<div>
<div className="font-medium tracking-tight">Lightning Fast</div>
<p className="text-neutral-700 text-sm">Sub-second response times with our optimized content delivery network.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="h-9 w-9 rounded-md border flex items-center justify-center" style={{borderColor: '#EFEFEC'}}>
<i className="h-5 w-5" data-lucide="lock"></i>
</div>
<div>
<div className="font-medium tracking-tight">Enterprise Ready</div>
<p className="text-neutral-700 text-sm">99.9% uptime SLA with dedicated support for mission-critical applications.</p>
</div>
</div>
</div>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold tracking-tight shadow-sm transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" href="#cta" style={{backgroundColor: '#E14A2A', color: '#FFFFFF'}}>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
                Start Your Free Trial
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold tracking-tight border transition-colors hover:bg-neutral-50" href="#api" style={{borderColor: '#EDEDEB'}}>
                Explore the API
                <i className="h-4 w-4" data-lucide="terminal"></i>
</a>
</div>
</div>

<div className="relative">
<div className="absolute -inset-2 rounded-2xl opacity-20 blur-2xl" style={{background: 'radial-gradient(600px 200px at 50% 0%, #E14A2A 0%, transparent 60%)'}}></div>
<div className="relative rounded-xl border overflow-hidden bg-white shadow-sm" style={{borderColor: '#EFEFEC'}}>
<div className="px-4 py-3 border-b flex items-center justify-between" style={{borderColor: '#F0F0EE'}}>
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full" style={{backgroundColor: '#E14A2A'}}></span>
<span className="text-xs font-medium tracking-tight">Streaming Feed</span>
</div>
<div className="inline-flex items-center gap-2 text-xs text-neutral-600">
<i className="h-4 w-4" data-lucide="activity" style={{color: '#4CAF50'}}></i>
<span className="font-mono">Live</span>
</div>
</div>
<div className="p-4 grid sm:grid-cols-2 gap-4">

<div className="space-y-3">
<div className="flex items-start gap-3">
<i className="h-4 w-4 mt-[2px]" data-lucide="rss" style={{color: '#E14A2A'}}></i>
<div>
<div className="text-sm font-medium tracking-tight">Market Open: Tech Stocks Rally</div>
<div className="text-xs text-neutral-600 font-mono">08:30:10 UTC • NY • latency 132ms</div>
</div>
</div>
<div className="flex items-start gap-3">
<i className="h-4 w-4 mt-[2px]" data-lucide="rss" style={{color: '#E14A2A'}}></i>
<div>
<div className="text-sm font-medium tracking-tight">Energy Policy Update Passes Committee</div>
<div className="text-xs text-neutral-600 font-mono">08:30:11 UTC • DC • latency 118ms</div>
</div>
</div>
<div className="flex items-start gap-3">
<i className="h-4 w-4 mt-[2px]" data-lucide="rss" style={{color: '#E14A2A'}}></i>
<div>
<div className="text-sm font-medium tracking-tight">Earnings: Q4 Beat with Raised Guidance</div>
<div className="text-xs text-neutral-600 font-mono">08:30:12 UTC • SF • latency 104ms</div>
</div>
</div>
<div className="flex items-start gap-3">
<i className="h-4 w-4 mt-[2px]" data-lucide="rss" style={{color: '#E14A2A'}}></i>
<div>
<div className="text-sm font-medium tracking-tight">Global Supply Chain Eases in Q1</div>
<div className="text-xs text-neutral-600 font-mono">08:30:12 UTC • HK • latency 147ms</div>
</div>
</div>
</div>

<div className="rounded-lg border bg-neutral-50 p-3 overflow-hidden" style={{borderColor: '#EFEFEC'}}>
<div className="flex items-center justify-between">
<div className="text-xs uppercase text-neutral-600">GET /v2/news?region=global&amp;realtime=true</div>
<span className="text-[11px] font-mono rounded px-1.5 py-0.5" style={{backgroundColor: '#E6F6E9', color: '#1A1A1A', border: '1px solid #DDEEE1'}}>200 OK</span>
</div>
<pre className="mt-2 text-xs overflow-auto p-2 rounded bg-white border" style={{borderColor: '#EFEFEC'}}><code>{
  "count": 25,
  "latency_ms": 184,
  "results": [
    { "headline": "Market Open: Tech Stocks Rally", "region": "US", "ts": 1737525010 },
    { "headline": "Energy Policy Update Passes Committee", "region": "US", "ts": 1737525011 }
  ]
}</code></pre>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center gap-1 text-[11px] text-neutral-600">
<i className="h-3.5 w-3.5" data-lucide="lock"></i> HMAC-SHA256
                    </div>
<div className="inline-flex items-center gap-1 text-[11px]">
<i className="h-3.5 w-3.5" data-lucide="timer" style={{color: '#4CAF50'}}></i>
                      p95 <span className="font-mono">422ms</span>
</div>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-neutral-600">Enterprise news platform for content aggregation, processing, and distribution.</p>
</div>
</div>
</div>
</section>

<section className="py-14 border-t" id="api" style={{backgroundColor: '#F5F5F3', borderColor: '#EFEFEC'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">API-first, Developer-ready</h3>
<p className="mt-2 text-neutral-700">Consistent schemas, robust authentication, and a frictionless path from prototype to production.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="check-circle" style={{color: '#4CAF50'}}></i>
<span className="text-sm">Typed responses and versioned endpoints</span>
</li>
<li className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="check-circle" style={{color: '#4CAF50'}}></i>
<span className="text-sm">Real-time streaming with server-sent events</span>
</li>
<li className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="check-circle" style={{color: '#4CAF50'}}></i>
<span className="text-sm">Advanced auth with key rotation and scopes</span>
</li>
</ul>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-semibold tracking-tight shadow-sm transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" href="#docs" style={{backgroundColor: '#E14A2A', color: '#FFFFFF'}}>
<i className="h-4 w-4" data-lucide="code-xml"></i> Read the Docs
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-semibold tracking-tight border hover:bg-white focus:outline-none" href="#sandbox" style={{borderColor: '#EDEDEB'}}>Try Sandbox <i className="h-4 w-4" data-lucide="external-link"></i></a>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl p-4 border bg-white/60 backdrop-blur shadow-sm hover:-translate-y-0.5 transition-transform" style={{borderColor: '#EFEFEC'}}>
<div className="text-xs uppercase text-neutral-600">Uptime</div>
<div className="mt-1 text-3xl font-semibold tracking-tight"><span className="font-mono">99.9%</span></div>
<div className="mt-2 inline-flex items-center gap-1 text-xs rounded px-1.5 py-0.5 border" style={{color: '#1A1A1A', borderColor: '#E6F6E9', backgroundColor: '#E6F6E9'}}><i className="h-3.5 w-3.5" data-lucide="check" style={{color: '#4CAF50'}}></i> Monitored</div>
</div>
<div className="rounded-xl p-4 border bg-white/60 backdrop-blur shadow-sm hover:-translate-y-0.5 transition-transform" style={{borderColor: '#EFEFEC'}}>
<div className="text-xs uppercase text-neutral-600">Median Latency</div>
<div className="mt-1 text-3xl font-semibold tracking-tight"><span className="font-mono">184ms</span></div>
<div className="mt-2 text-xs text-neutral-600">Global p50 across regions</div>
</div>
<div className="rounded-xl p-4 border bg-white/60 backdrop-blur shadow-sm hover:-translate-y-0.5 transition-transform col-span-2" style={{borderColor: '#EFEFEC'}}>
<div className="flex items-center justify-between">
<div className="text-xs uppercase text-neutral-600">Requests / min</div>
<div className="inline-flex items-center gap-1 text-xs rounded px-1.5 py-0.5 border" style={{borderColor: '#FFF1EC', backgroundColor: '#FFF1EC', color: '#1A1A1A'}}><i className="h-3.5 w-3.5" data-lucide="zap" style={{color: '#E14A2A'}}></i> Peak</div>
</div>
<div className="mt-1 text-3xl font-semibold tracking-tight"><span className="font-mono">1,842,102</span></div>
<div className="mt-2 h-2 w-full rounded bg-neutral-100 overflow-hidden">
<div className="h-full rounded" style={{width: '72%', backgroundColor: '#E14A2A'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-xl border overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="p-6 border-b md:border-b-0 md:border-r" style={{borderColor: '#EFEFEC'}}>
<div className="text-sm uppercase tracking-wide text-neutral-600">About FinancialContent</div>
<p className="mt-2 text-neutral-700 text-sm">25+ years of experience in the market data and financial news industry.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm font-medium hover:underline" href="https://www.financialcontent.com" rel="noopener" target="_blank">
                Visit FinancialContent.com <i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="p-6 border-b md:border-b-0 md:border-r" style={{borderColor: '#EFEFEC'}}>
<div className="text-sm uppercase tracking-wide text-neutral-600">Reliability</div>
<p className="mt-2 text-neutral-700 text-sm">Trusted by enterprises worldwide for reliable financial data and news solutions.</p>
<div className="mt-3 inline-flex items-center gap-2 text-xs rounded px-1.5 py-0.5 border" style={{borderColor: '#E6F6E9', backgroundColor: '#E6F6E9', color: '#1A1A1A'}}>
<i className="h-3.5 w-3.5" data-lucide="shield" style={{color: '#4CAF50'}}></i> SOC 2-aligned practices
              </div>
</div>
<div className="p-6">
<div className="text-sm uppercase tracking-wide text-neutral-600">Support</div>
<p className="mt-2 text-neutral-700 text-sm">Dedicated support for mission-critical applications with clear SLAs.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm font-medium hover:underline" href="#contact">Contact Sales <i className="h-4 w-4" data-lucide="headset"></i></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t" id="changelog" style={{backgroundColor: '#F5F5F3', borderColor: '#EFEFEC'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between gap-4">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">What’s New in v2.0</h3>
<p className="text-neutral-700 mt-2 text-sm">Continuous improvements with enterprise-grade reliability.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium hover:underline" href="#full-changelog">View Full Changelog <i className="h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
<div className="mt-6 divide-y rounded-lg border overflow-hidden bg-white" style={{borderColor: '#EFEFEC'}}>

<div className="p-4 md:p-5">
<button className="w-full flex items-start justify-between gap-4 text-left" data-accordion="">
<div className="flex items-start gap-3">
<span className="inline-flex items-center text-[11px] rounded px-1.5 py-0.5 border" style={{borderColor: '#E6F6E9', backgroundColor: '#E6F6E9', color: '#1A1A1A'}}>NEW</span>
<div>
<div className="font-medium tracking-tight">Enhanced API Performance</div>
<div className="text-sm text-neutral-700">50% faster response times</div>
</div>
</div>
<i className="h-5 w-5 flex-shrink-0" data-lucide="plus"></i>
</button>
<div className="mt-3 hidden text-sm text-neutral-700" data-accordion-panel="">
              Optimized query paths, smarter caching, and edge streaming reduce p95 from 800ms to 400ms globally.
            </div>
</div>

<div className="p-4 md:p-5">
<button className="w-full flex items-start justify-between gap-4 text-left" data-accordion="">
<div className="flex items-start gap-3">
<span className="inline-flex items-center text-[11px] rounded px-1.5 py-0.5 border" style={{borderColor: '#E6F6E9', backgroundColor: '#E6F6E9', color: '#1A1A1A'}}>FASTER</span>
<div>
<div className="font-medium tracking-tight">Real-time Processing</div>
<div className="text-sm text-neutral-700">Live news stream capabilities</div>
</div>
</div>
<i className="h-5 w-5 flex-shrink-0" data-lucide="plus"></i>
</button>
<div className="mt-3 hidden text-sm text-neutral-700" data-accordion-panel="">
              Server-sent events with backpressure and resume tokens keep streams reliable over weak networks.
            </div>
</div>

<div className="p-4 md:p-5">
<button className="w-full flex items-start justify-between gap-4 text-left" data-accordion="">
<div className="flex items-start gap-3">
<span className="inline-flex items-center text-[11px] rounded px-1.5 py-0.5 border" style={{borderColor: '#E6F6E9', backgroundColor: '#E6F6E9', color: '#1A1A1A'}}>SECURITY</span>
<div>
<div className="font-medium tracking-tight">Enterprise Security</div>
<div className="text-sm text-neutral-700">Advanced authentication</div>
</div>
</div>
<i className="h-5 w-5 flex-shrink-0" data-lucide="plus"></i>
</button>
<div className="mt-3 hidden text-sm text-neutral-700" data-accordion-panel="">
              Key rotation, IP allowlisting, signed requests, and fine-grained scopes ensure principle-of-least-privilege access.
            </div>
</div>
</div>
</div>
</section>

<section className="py-16" id="cta">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border p-6 sm:p-8 bg-white relative overflow-hidden">
<div className="absolute right-0 top-0 -mr-12 -mt-12 h-40 w-40 rounded-full opacity-15" style={{background: 'radial-gradient(closest-side, #E14A2A, transparent)'}}></div>
<div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 items-center">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to Transform Your News Operations?</h3>
<p className="mt-2 text-neutral-700">Join leading enterprises already using NewsRPM to power their content strategies.</p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold tracking-tight shadow-sm transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" href="#get-started" style={{backgroundColor: '#E14A2A', color: '#FFFFFF'}}>
<i className="h-4 w-4" data-lucide="rocket"></i>
                  Start Your Free Trial
                </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold tracking-tight border hover:bg-neutral-50" href="#contact" style={{borderColor: '#EDEDEB'}}>
                  Contact Sales
                  <i className="h-4 w-4" data-lucide="headset"></i>
</a>
</div>
</div>
<div className="rounded-xl border p-4 bg-white/70 backdrop-blur shadow-sm" style={{borderColor: '#EFEFEC'}}>
<div className="text-sm font-medium tracking-tight">At a glance</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-lg border p-3 text-sm" style={{borderColor: '#EFEFEC'}}>
<div className="text-neutral-600">SLA</div>
<div className="font-mono mt-1">99.9%</div>
</div>
<div className="rounded-lg border p-3 text-sm" style={{borderColor: '#EFEFEC'}}>
<div className="text-neutral-600">Latency (p95)</div>
<div className="font-mono mt-1">&lt; 450ms</div>
</div>
<div className="rounded-lg border p-3 text-sm" style={{borderColor: '#EFEFEC'}}>
<div className="text-neutral-600">Regions</div>
<div className="font-mono mt-1">8+</div>
</div>
<div className="rounded-lg border p-3 text-sm" style={{borderColor: '#EFEFEC'}}>
<div className="text-neutral-600">Sources</div>
<div className="font-mono mt-1">5,000+</div>
</div>
</div>
<div className="mt-3 inline-flex items-center gap-2 text-xs">
<i className="h-4 w-4" data-lucide="lock"></i>
                No credit card required
              </div>
</div>
</div>
</div>
</div>

<footer className="pt-12 border-t" style={{backgroundColor: '#1A1A1A', borderColor: '#2A2A2A', color: '#FFFFFF'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
<div className="col-span-2">
<div className="inline-flex items-center gap-2">
<div className="h-7 w-7 rounded border flex items-center justify-center font-semibold tracking-tight" style={{borderColor: '#2F2F2F', color: '#FFFFFF'}}>NR</div>
<span className="font-medium tracking-tight">NewsRPM</span>
</div>
<p className="mt-3 text-sm text-neutral-300 max-w-md">Enterprise news platform for content aggregation, processing, and distribution. Built by FinancialContent for organizations that need reliable, scalable news solutions.</p>
<div className="mt-4 inline-flex items-center gap-2 text-xs rounded px-1.5 py-0.5 border" id="status" style={{borderColor: '#2F2F2F', backgroundColor: '#1F1F1F'}}>
<i className="h-4 w-4" data-lucide="activity" style={{color: '#4CAF50'}}></i>
<span>All systems operational</span>
</div>
</div>
<div>
<div className="text-sm uppercase tracking-wide text-neutral-400">Product</div>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="hover:underline" href="#product">Platform Overview</a></li>
<li><a className="hover:underline" href="#docs">API Documentation</a></li>
</ul>
</div>
<div>
<div className="text-sm uppercase tracking-wide text-neutral-400">Company</div>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="hover:underline" href="#about">About Us</a></li>
<li><a className="hover:underline" href="#contact">Contact</a></li>
<li><a className="hover:underline" href="#privacy">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t py-4 text-xs flex flex-col sm:flex-row items-center justify-between gap-3" style={{borderColor: '#2A2A2A'}}>
<div className="text-neutral-400">© 2025 NewsRPM. All rights reserved. • © 2025 FinancialContent.</div>
<div className="text-neutral-400">NewsRPM Platform v2.0 | Built with enterprise reliability</div>
</div>
</div>
</footer>


</section>
    </>
  );
}

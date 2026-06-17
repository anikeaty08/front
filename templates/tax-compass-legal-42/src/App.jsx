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



    document.addEventListener('DOMContentLoaded', () => {
      const icons = [
        ['icon-arrow-right-1', 'arrow-right'],
        ['icon-message-circle-1', 'messages-square'],
        ['icon-compass-1', 'compass'],
        ['icon-cpu-1', 'cpu'],
        ['icon-bolt-1', 'zap'],
        ['icon-search-1', 'search'],
        ['icon-scale-1', 'scale'],
        ['icon-file-text-1', 'file-text'],
        ['icon-headset-1', 'headphones'],
        ['icon-grid-1', 'layout-dashboard'],
        ['icon-users-1', 'users'],
        ['icon-brain-1', 'brain'],
        ['icon-badge-dollar-sign-1', 'badge-dollar-sign'],
        ['icon-shield-1', 'shield-check'],
        ['icon-cpu-2', 'cpu'],
        ['icon-message-circle-2', 'messages-square'],
        ['icon-message-circle-3', 'messages-square'],
        ['icon-file-plus-1', 'file-plus'],
        ['icon-arrow-right-2', 'arrow-right'],
        ['icon-help-circle-1', 'help-circle'],
        ['icon-message-circle-4', 'messages-square']
      ];
      icons.forEach(([id, name]) => {
        const el = document.getElementById(id);
        if (el && window.lucide && lucide.icons[name]) {
          const svg = lucide.icons[name].toSvg({ class: 'w-full h-full', 'stroke-width': 1.5 });
          el.innerHTML = svg;
        }
      });

      const yearSpan = document.getElementById('year-span');
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
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
      
<div className="min-h-screen flex flex-col">

<div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500"></div>

<header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur z-20 sticky top-0">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-emerald-300">TC</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight text-slate-50">Tax Compass</span>
<span className="text-[11px] text-slate-400">Australia Tax Law Platform</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-xs text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-50 transition-colors" href="#why">Why Tax Compass</a>
<a className="hover:text-slate-50 transition-colors" href="#how">How it Works</a>
<a className="hover:text-slate-50 transition-colors" href="#faqs">FAQs</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-slate-900/70 transition-colors">
<span>Login</span>
</button>
<button className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-emerald-400 text-slate-950 hover:bg-emerald-300 border border-emerald-300/80 transition-all shadow-sm hover:shadow-emerald-500/20">
<span>Ask a Lawyer</span>
</button>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-40 -right-32 h-80 w-80 bg-emerald-500/10 blur-3xl rounded-full"></div>
<div className="absolute top-40 -left-32 h-80 w-80 bg-sky-500/10 blur-3xl rounded-full"></div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-24 relative">
<div className="grid lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.95fr)] gap-12 lg:gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-2.5 py-1 mb-4">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[11px] font-medium tracking-tight text-emerald-200">Tax Compass – Navigating Australia’s Tax Law with Clarity</span>
</div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-50">
                Your digital partner in navigating Australian tax law.
              </h1>
<p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
                Your complete tax law and advisory partner — built for Australians, accountants, and business owners who need fast, accurate, and practical legal support.
              </p>
<ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-300">
<li className="flex items-start gap-2.5">
<span className="mt-1 h-4 w-4 rounded-full border border-emerald-400/60 text-emerald-300 flex items-center justify-center text-[10px]">✓</span>
<span>We simplify complex tax matters for individuals, businesses, and professionals.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="mt-1 h-4 w-4 rounded-full border border-emerald-400/60 text-emerald-300 flex items-center justify-center text-[10px]">✓</span>
<span>Get instant clarity, on-demand legal documents, and real advice from qualified tax lawyers.</span>
</li>
<li className="flex items-start gap-2.5">
<span className="mt-1 h-4 w-4 rounded-full border border-emerald-400/60 text-emerald-300 flex items-center justify-center text-[10px]">✓</span>
<span>Need specialist support? Ask a Lawyer in real time for a small, fixed fee.</span>
</li>
</ul>
<p className="mt-3 text-xs text-slate-400 max-w-md">
                No waiting. No confusion. Just clear legal answers.
              </p>
<div className="mt-7 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-xs font-medium text-slate-950 shadow-sm border border-emerald-300/80 hover:bg-emerald-300 hover:border-emerald-200 transition-all hover:shadow-emerald-500/25">
<span>Get Started</span>
<span className="h-4 w-4" id="icon-arrow-right-1"></span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-4 py-2.5 text-xs font-medium text-slate-100 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-500 transition-colors">
<span>Ask a Lawyer</span>
<span className="h-4 w-4" id="icon-message-circle-1"></span>
</button>
</div>
<div className="mt-6 flex flex-wrap items-center gap-5 text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span>Real Australian tax lawyers</span>
</div>
<span className="hidden sm:inline-block h-4 w-px bg-slate-700/70"></span>
<div className="flex items-center gap-2">
<span className="h-4 w-4 rounded-full border border-slate-600 flex items-center justify-center text-[9px] text-slate-300">AU</span>
<span>Compliant with Australian privacy standards</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-8 -right-8 h-28 w-28 bg-emerald-400/10 rounded-full blur-2xl"></div>
<div className="relative rounded-2xl border border-slate-800/90 bg-slate-900/70 shadow-lg shadow-black/40 p-5 sm:p-6">

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg border border-slate-700 bg-slate-900 flex items-center justify-center">
<span className="h-3.5 w-3.5" id="icon-compass-1"></span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-xs font-medium tracking-tight text-slate-100">Matter Snapshot</span>
<span className="text-[11px] text-slate-400">Simulated view</span>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-medium text-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                    Live Lawyer Support
                  </span>
</div>

<ol className="space-y-4 text-xs">
<li className="flex gap-3">
<div className="mt-0.5">
<div className="h-6 w-6 rounded-full border border-slate-700 flex items-center justify-center text-[11px] text-slate-300">1</div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="font-medium text-slate-100 tracking-tight">Start in minutes</p>
<span className="text-[10px] text-slate-400">1–2 min</span>
</div>
<p className="mt-1 text-slate-300">
                        Create your account and tell us what you need help with — ATO notice, tax advice, or documents.
                      </p>
</div>
</li>
<li className="flex gap-3">
<div className="mt-0.5">
<div className="h-6 w-6 rounded-full border border-slate-700 flex items-center justify-center text-[11px] text-slate-300">2</div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="font-medium text-slate-100 tracking-tight">AI prepares your matter</p>
<span className="text-[10px] text-emerald-300 flex items-center gap-1">
<span className="h-3 w-3" id="icon-cpu-1"></span> Smart brief
                        </span>
</div>
<p className="mt-1 text-slate-300">
                        Our engine collects details, searches legislation, rulings, and cases, then drafts a brief.
                      </p>
</div>
</li>
<li className="flex gap-3">
<div className="mt-0.5">
<div className="h-6 w-6 rounded-full border border-slate-700 flex items-center justify-center text-[11px] text-slate-300">3</div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="font-medium text-slate-100 tracking-tight">Lawyer reviews and advises</p>
<span className="text-[10px] text-slate-400">1–2 business days</span>
</div>
<p className="mt-1 text-slate-300">
                        Receive written advice or speak directly with a tax lawyer — with clear, fixed pricing upfront.
                      </p>
</div>
</li>
</ol>

<div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-[11px] text-slate-400">
                    Need help with an ATO notice or tax debt?
                    <span className="text-slate-200">Start a matter in under 5 minutes.</span>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1.5 text-[11px] font-medium text-slate-900 hover:bg-white border border-slate-200/80 transition-colors">
<span>Start now</span>
<span className="h-3.5 w-3.5" id="icon-bolt-1"></span>
</button>
</div>
</div>

<div className="hidden md:block absolute -bottom-10 -left-3 w-48 rounded-xl border border-slate-800 bg-slate-900/80 shadow-md shadow-black/40 p-3">
<p className="text-[11px] text-slate-200 font-medium tracking-tight">
                  “No more waiting weeks for advice.”
                </p>
<p className="mt-1 text-[11px] text-slate-400">
                  Tax Compass connects us with specialist tax lawyers quickly — with clear, fixed fees.
                </p>
<div className="mt-3 flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-[url('https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&amp;fit=crop&amp;w=200&amp;q=80')] bg-cover bg-center border border-slate-700"></div>
<div className="flex flex-col">
<span className="text-[11px] text-slate-200">Emma, CPA</span>
<span className="text-[10px] text-slate-500">Sydney practice owner</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900 bg-slate-950" id="services">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Our Core Services</h2>
<p className="mt-2 text-sm text-slate-300 max-w-xl">
                Legal advice, AI-powered research, and lawyer-reviewed documents — all in one secure platform.
              </p>
</div>
<div className="flex gap-3 text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Real lawyers</span>
</div>
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Smart tooling</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 hover:bg-slate-900 transition-colors">
<div className="flex items-center justify-between mb-4">
<div className="h-9 w-9 rounded-lg border border-emerald-400/30 bg-emerald-500/10 flex items-center justify-center">
<span className="h-4 w-4" id="icon-search-1"></span>
</div>
<span className="text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-400/30 rounded-full px-2 py-0.5">
                  AI Assisted
                </span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-50 mb-2">AI-Assisted Tax Research</h3>
<p className="text-xs text-slate-300">
                Access comprehensive tax law research in seconds. Our AI engine searches across legislation, rulings, and case law to deliver clear, relevant results.
              </p>
<p className="mt-2 text-xs text-slate-400">
                It highlights key sections, cross-references sources, and helps you form the basis of strong legal advice.
              </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 hover:bg-slate-900 transition-colors">
<div className="flex items-center justify-between mb-4">
<div className="h-9 w-9 rounded-lg border border-sky-400/30 bg-sky-500/10 flex items-center justify-center">
<span className="h-4 w-4" id="icon-scale-1"></span>
</div>
<span className="text-[10px] text-slate-300 border border-slate-700 rounded-full px-2 py-0.5">
                  Written Opinions
                </span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-50 mb-2">Tax Law Advisory</h3>
<p className="text-xs text-slate-300">
                Receive written legal opinions on complex tax issues — prepared and reviewed by qualified Australian tax lawyers.
              </p>
<p className="mt-2 text-xs text-slate-400">
                Our technology streamlines information gathering so your lawyer can focus on what matters: strategy, accuracy, and clarity.
              </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 hover:bg-slate-900 transition-colors">
<div className="flex items-center justify-between mb-4">
<div className="h-9 w-9 rounded-lg border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center">
<span className="h-4 w-4" id="icon-file-text-1"></span>
</div>
<span className="text-[10px] text-slate-300 border border-slate-700 rounded-full px-2 py-0.5">
                  Lawyer-reviewed
                </span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-50 mb-2">Legal Document Ordering</h3>
<p className="text-xs text-slate-300">
                Order legal, tax, and business documents instantly. All documents are drafted or reviewed by Australian lawyers to ensure accuracy and compliance.
              </p>
<p className="mt-2 text-xs text-slate-400">
                From company constitutions and trust deeds to agreements and rulings — ready when you need them.
              </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 hover:bg-slate-900 transition-colors flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="h-9 w-9 rounded-lg border border-emerald-400/40 bg-emerald-500/10 flex items-center justify-center">
<span className="h-4 w-4" id="icon-headset-1"></span>
</div>
<span className="text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-400/30 rounded-full px-2 py-0.5">
                  Fixed Fee
                </span>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-50 mb-2">Ask a Lawyer</h3>
<p className="text-xs text-slate-300">
                When matters become complex, speak directly with an experienced tax lawyer. Ask questions in real time and receive expert advice for a fixed, affordable fee.
              </p>
<p className="mt-2 text-xs text-slate-400 flex-1">
                It’s fast, accessible, and completely transparent — ideal for urgent ATO issues and complex structuring questions.
              </p>
<button className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/60 px-3 py-1.5 text-[11px] font-medium text-emerald-200 hover:bg-emerald-500/10 transition-colors">
<span>Start a live chat</span>
<span className="h-3.5 w-3.5" id="icon-message-circle-2"></span>
</button>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900 bg-slate-950" id="why">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] gap-10 lg:gap-14">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Why Choose Tax Compass</h2>
<p className="mt-2 text-sm text-slate-300 max-w-xl">
                Designed for individuals, accountants, and business owners who need dependable tax law support — without the complexity of traditional legal firms.
              </p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">

<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-lg border border-slate-700 flex items-center justify-center">
<span className="h-3.5 w-3.5" id="icon-grid-1"></span>
</div>
<p className="text-xs font-medium tracking-tight text-slate-100">All-in-One Platform</p>
</div>
<p className="text-xs text-slate-300">
                    Legal advice, documents, and direct lawyer access in one place — no juggling multiple providers.
                  </p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-lg border border-slate-700 flex items-center justify-center">
<span className="h-3.5 w-3.5" id="icon-users-1"></span>
</div>
<p className="text-xs font-medium tracking-tight text-slate-100">Real Lawyers, Real Answers</p>
</div>
<p className="text-xs text-slate-300">
                    Talk directly with qualified Australian tax lawyers — not chatbots or generic support.
                  </p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-lg border border-slate-700 flex items-center justify-center">
<span className="h-3.5 w-3.5" id="icon-brain-1"></span>
</div>
<p className="text-xs font-medium tracking-tight text-slate-100">Smart Technology</p>
</div>
<p className="text-xs text-slate-300">
                    AI-powered tools prepare, summarise, and streamline your matters so lawyers can focus on strategy and outcomes.
                  </p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-lg border border-slate-700 flex items-center justify-center">
<span className="h-3.5 w-3.5" id="icon-badge-dollar-sign-1"></span>
</div>
<p className="text-xs font-medium tracking-tight text-slate-100">Transparent Pricing</p>
</div>
<p className="text-xs text-slate-300">
                    Fixed fees and instant quotes — no hourly rates, billable units, or hidden costs.
                  </p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:col-span-2">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-lg border border-slate-700 flex items-center justify-center">
<span className="h-3.5 w-3.5" id="icon-shield-1"></span>
</div>
<p className="text-xs font-medium tracking-tight text-slate-100">Secure by Design</p>
</div>
<p className="text-xs text-slate-300">
                    Bank-grade encryption and full compliance with Australian privacy standards — keeping your financial and legal data protected at every step.
                  </p>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1.5">Who uses Tax Compass?</p>
<p className="text-xs text-slate-300 mb-4">
                Individuals, accountants, and business owners rely on Tax Compass to handle:
              </p>
<ul className="space-y-2 text-xs text-slate-300">
<li className="flex items-start gap-2.5">
<span className="mt-1 h-1 w-6 rounded-full bg-emerald-400/70"></span>
<span>ATO notices, penalties, and disputes</span>
</li>
<li className="flex items-start gap-2.5">
<span className="mt-1 h-1 w-6 rounded-full bg-emerald-400/60"></span>
<span>Income tax, GST, FBT, capital gains, and superannuation questions</span>
</li>
<li className="flex items-start gap-2.5">
<span className="mt-1 h-1 w-6 rounded-full bg-emerald-400/50"></span>
<span>Small business structuring, transactions, and disputes</span>
</li>
<li className="flex items-start gap-2.5">
<span className="mt-1 h-1 w-6 rounded-full bg-emerald-400/40"></span>
<span>Tax debt negotiations and ATO payment plans</span>
</li>
</ul>
<div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<div className="flex items-center justify-between mb-2">
<p className="text-[11px] font-medium tracking-tight text-slate-100">Accountant mode</p>
<span className="text-[10px] text-emerald-200 bg-emerald-500/10 rounded-full px-2 py-0.5 border border-emerald-400/30">
                    For firms &amp; advisors
                  </span>
</div>
<p className="text-[11px] text-slate-300 mb-3">
                  Accountants use Tax Compass to access fast, accurate legal guidance and documents for their clients — without hiring an in-house tax lawyer.
                </p>
<div className="flex items-center justify-between gap-2 text-[11px]">
<div className="flex flex-col">
<span className="text-slate-400">Typical response time</span>
<span className="text-slate-100 font-medium tracking-tight">Real time to 1–2 business days</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900 bg-slate-950" id="how">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">How It Works</h2>
<p className="mt-2 text-sm text-slate-300 max-w-xl">
                From first question to final advice, every step is guided — and always backed by qualified tax lawyers.
              </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<span className="text-[11px] text-slate-400">Step 1</span>
<span className="text-[10px] text-slate-400">Start in minutes</span>
</div>
<p className="text-sm font-medium tracking-tight text-slate-50 mb-2">Create your account</p>
<p className="text-xs text-slate-300 flex-1">
                Tell us what you need help with — tax law advice, ATO support, or a legal document. We guide you through a short, structured intake.
              </p>
<div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
<span>Time to complete</span>
<span className="text-slate-200 font-medium tracking-tight">~5 minutes</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<span className="text-[11px] text-slate-400">Step 2</span>
<span className="text-[10px] text-emerald-300 flex items-center gap-1">
<span className="h-3.5 w-3.5" id="icon-cpu-2"></span> AI prepares your matter
                </span>
</div>
<p className="text-sm font-medium tracking-tight text-slate-50 mb-2">AI prepares your matter</p>
<p className="text-xs text-slate-300 flex-1">
                We collect details and automatically generate a brief, including relevant legislation, rulings, and case law. Your lawyer receives a clear, structured summary.
              </p>
<div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
<span>Research &amp; preparation</span>
<span className="text-slate-200 font-medium tracking-tight">Done in seconds</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<span className="text-[11px] text-slate-400">Step 3</span>
<span className="text-[10px] text-slate-400">Lawyer review</span>
</div>
<p className="text-sm font-medium tracking-tight text-slate-50 mb-2">Lawyer reviews and advises</p>
<p className="text-xs text-slate-300 flex-1">
                Receive written advice, document drafting/review, or speak directly with a lawyer in real time. Pricing is fixed and displayed upfront.
              </p>
<div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
<span>Turnaround for written work</span>
<span className="text-slate-200 font-medium tracking-tight">1–2 business days</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 relative overflow-hidden">
<div className="absolute -right-16 -top-16 h-48 w-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
<div className="grid lg:grid-cols-2 gap-8 items-center relative">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Need tax law advice, ATO support, or a legal document?
                </h2>
<p className="mt-3 text-sm text-slate-300 max-w-lg">
                  Tax Compass connects you with expert Australian tax lawyers — fast, affordable, and online. Chat with a lawyer or order your document in just a few clicks.
                </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-xs font-medium text-slate-950 border border-emerald-300/80 hover:bg-emerald-300 hover:border-emerald-200 transition-all shadow-sm hover:shadow-emerald-500/25">
<span>Ask a Lawyer</span>
<span className="h-4 w-4" id="icon-message-circle-3"></span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2.5 text-xs font-medium text-slate-100 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-500 transition-colors">
<span>Order Documents</span>
<span className="h-4 w-4" id="icon-file-plus-1"></span>
</button>
</div>
<div className="mt-5 flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<span className="h-4 w-4 rounded-full border border-slate-600 flex items-center justify-center text-[9px] text-slate-300">$</span>
<span>Fixed, upfront fees — no hourly rates.</span>
</div>
<div className="flex items-center gap-2">
<span className="h-4 w-4 rounded-full border border-slate-600 flex items-center justify-center text-[9px] text-slate-300">✓</span>
<span>Real-time answers for most questions.</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1.5">
                  What does “Ask a Lawyer” cost?
                </p>
<p className="text-[11px] text-slate-300 mb-3">
                  Our real-time legal chat starts at a small fixed fee, displayed upfront before you begin. No hourly rates or hidden charges.
                </p>
<div className="mt-2 grid grid-cols-2 gap-3 text-[11px] text-slate-300">
<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
<p className="text-slate-400 mb-1">Ideal for</p>
<ul className="space-y-1">
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-emerald-400/80"></span>
<span>ATO notices</span>
</li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-emerald-400/70"></span>
<span>Tax structuring</span>
</li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-emerald-400/60"></span>
<span>Quick clarifications</span>
</li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
<p className="text-slate-400 mb-1">Response times</p>
<ul className="space-y-1">
<li className="flex items-center justify-between">
<span>Live chat</span>
<span className="text-slate-100 font-medium tracking-tight">Real time</span>
</li>
<li className="flex items-center justify-between">
<span>Written advice</span>
<span className="text-slate-100 font-medium tracking-tight">1–2 days</span>
</li>
</ul>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<span className="h-4 w-4 rounded-full border border-emerald-400/50 text-emerald-300 flex items-center justify-center text-[9px]">AU</span>
<span>Australian tax lawyers only</span>
</div>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-[11px] font-medium text-slate-100 hover:bg-slate-900 hover:border-slate-500 transition-colors">
<span>View pricing</span>
<span className="h-3.5 w-3.5" id="icon-arrow-right-2"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900 bg-slate-950" id="faqs">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">FAQs</h2>
<p className="mt-2 text-sm text-slate-300 max-w-xl">
                Answers to common questions about how Tax Compass works, who it’s for, and how quickly you can get help.
              </p>
</div>
</div>
<div className="grid lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] gap-10 lg:gap-14">

<div className="space-y-4">

<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">Who can use Tax Compass?</p>
<p className="text-xs text-slate-300">
                  Individuals, accountants, and business owners needing expert help with tax law, disputes, or compliance.
                </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">Do I speak with a real lawyer?</p>
<p className="text-xs text-slate-300">
                  Yes. You can chat live or receive written legal advice from qualified Australian tax lawyers.
                </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">Are documents legally valid?</p>
<p className="text-xs text-slate-300">
                  Every document ordered through Tax Compass is lawyer-prepared and compliant with Australian law.
                </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">Is my information secure?</p>
<p className="text-xs text-slate-300">
                  Yes. We use bank-grade encryption and follow Australian privacy and data protection standards.
                </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">How quickly can I get advice?</p>
<p className="text-xs text-slate-300">
                  Most questions are answered in real time. For written advice or document reviews, turnaround is usually within 1–2 business days.
                </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">Can you help if I’ve received an ATO notice or penalty?</p>
<p className="text-xs text-slate-300">
                  Absolutely. We can review your situation, draft a response, and represent your position directly to the ATO.
                </p>
</div>
</div>

<div className="space-y-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">What areas of tax law do you cover?</p>
<p className="text-xs text-slate-300">
                  We handle all areas — including income tax, GST, FBT, capital gains, superannuation, and small business disputes.
                </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">Do you help with tax debt or payment plans?</p>
<p className="text-xs text-slate-300">
                  Yes. We assist with ATO negotiations, debt arrangements, and settlement advice.
                </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">Can accountants use Tax Compass for their clients?</p>
<p className="text-xs text-slate-300">
                  Yes. Accountants and advisors use Tax Compass to access fast, accurate legal guidance and documents for their clients.
                </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">Do you provide ongoing legal support?</p>
<p className="text-xs text-slate-300">
                  Yes. We offer flexible arrangements for ongoing or project-based legal assistance.
                </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">What does ‘Ask a Lawyer’ cost?</p>
<p className="text-xs text-slate-300">
                  Our real-time legal chat starts at a small fixed fee, displayed upfront before you begin. No hourly rates or hidden charges.
                </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-100 mb-1">Can I order multiple documents at once?</p>
<p className="text-xs text-slate-300">
                  Yes. You can order single or bundled documents — and they’ll be reviewed and delivered securely to your account.
                </p>
</div>
<div className="rounded-xl border border-emerald-400/30 bg-emerald-500/5 p-4">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-medium tracking-tight text-emerald-100">Still have questions?</p>
<span className="h-4 w-4" id="icon-help-circle-1"></span>
</div>
<p className="text-[11px] text-emerald-100 mb-3">
                  Chat with a tax lawyer in real time and get clarity before you commit to any work.
                </p>
<button className="inline-flex items-center gap-2 rounded-full border border-emerald-400/70 px-3 py-1.5 text-[11px] font-medium text-emerald-100 hover:bg-emerald-500/10 transition-colors">
<span>Open live Q&amp;A</span>
<span className="h-3.5 w-3.5" id="icon-message-circle-4"></span>
</button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-900 bg-slate-950">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-lg border border-slate-700 flex items-center justify-center">
<span className="text-[10px] font-semibold tracking-tight text-slate-200">TC</span>
</div>
<span>© <span id="year-span"></span> Tax Compass. All rights reserved.</span>
</div>
<div className="flex flex-wrap items-center gap-4">
<span>Australian tax law &amp; advisory platform.</span>
<span className="h-3 w-px bg-slate-700 hidden sm:inline-block"></span>
<a className="hover:text-slate-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}

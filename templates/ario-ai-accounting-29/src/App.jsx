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
      

<div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent_80%)] -z-10"></div>

<nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/70 backdrop-blur-xl border-b border-black/[0.04]">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between animate-fade-up">
<a className="text-lg font-semibold tracking-tighter text-[#0A1628] flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-[#0A1628] rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-[#F5A623] rounded-full"></div>
</div>
                ARIO
            </a>
<div className="flex items-center gap-6 md:gap-8">
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#64748B]">
<a className="hover:text-[#0A1628] transition-colors" href="#">Product</a>
<a className="hover:text-[#0A1628] transition-colors" href="#">Integration</a>
<a className="hover:text-[#0A1628] transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-[#64748B] hover:text-[#0A1628] transition-colors" href="#">Log in</a>
<a className="inline-flex items-center justify-center bg-[#0A1628] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#1E293B] shadow-sm active:scale-95" href="#signup">
                        Get started
                    </a>
</div>
</div>
</div>
</nav>

<section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden relative">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#F5A623]/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

<div className="flex-1 text-center lg:text-left z-10 flex flex-col items-center lg:items-start">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white soft-ring mb-8 animate-fade-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5A623] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5A623]"></span>
</span>
<span className="text-xs font-medium text-[#64748B]">Ario 2.0 is now live</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tighter leading-[1.05] mb-6 animate-fade-up text-[#0A1628]">
                    The AI operating system for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A1628] to-[#64748B]">accountants.</span>
</h1>
<p className="text-lg text-[#64748B] mb-10 max-w-xl leading-relaxed animate-fade-up delay-100">
                    Collect documents, answer routine questions, and stay ahead of tax deadlines — automatically. Built specifically for MTD compliance.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-up delay-200">
<a className="w-full sm:w-auto bg-[#0A1628] text-white text-sm font-medium px-6 py-3.5 rounded-xl transition-all duration-200 hover:bg-[#1E293B] hover:shadow-lg hover:shadow-black/10 active:scale-95 text-center flex items-center justify-center gap-2" href="#signup">
                        Start free trial
                        <iconify-icon className="text-white/70" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-[#0A1628] text-sm font-medium px-6 py-3.5 rounded-xl soft-ring transition-all duration-200 hover:bg-gray-50 active:scale-95 text-center" href="#demo">
                        Book a demo
                    </a>
</div>
<div className="mt-8 flex items-center gap-6 text-xs text-[#64748B] font-mono animate-fade-up delay-300">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#0A1628]" icon="solar:shield-check-linear" width="16"></iconify-icon>
                        Bank-grade security
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#0A1628]" icon="solar:bolt-linear" width="16"></iconify-icon>
                        Setup in 5 mins
                    </div>
</div>
</div>

<div className="flex-1 w-full max-w-[440px] animate-fade-up delay-300 relative">
<div className="relative bg-white soft-ring rounded-[24px] shadow-2xl shadow-black/5 overflow-hidden flex flex-col h-[520px]">

<div className="bg-white/80 backdrop-blur px-5 py-4 border-b border-black/[0.04] flex items-center gap-4 shrink-0 z-10">
<div className="w-10 h-10 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#0A1628] soft-ring">
<iconify-icon icon="solar:user-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-[#0A1628] text-sm font-medium tracking-tight">Crown Properties</h3>
<p className="text-[#10B981] text-xs font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span> WhatsApp
                            </p>
</div>
</div>

<div className="flex-1 bg-[#FAFAFA] p-5 flex flex-col gap-5 overflow-y-auto">
<div className="text-center">
<span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider bg-white px-2 py-1 rounded-md soft-ring">Today</span>
</div>

<div className="self-end bg-[#0A1628] text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%] shadow-sm">
<div className="bg-white/10 rounded-xl h-24 mb-2 flex items-center justify-center border border-white/5">
<iconify-icon className="text-white/50" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<p className="text-sm px-1 font-medium text-white/90">Here is the latest invoice.</p>
</div>

<div className="self-start flex flex-col gap-2 max-w-[80%]">
<div className="flex items-center gap-2 text-xs font-mono text-[#64748B] ml-2">
<iconify-icon className="text-[#F5A623] animate-pulse" icon="solar:magic-stick-3-linear"></iconify-icon>
                                Ario is analyzing
                            </div>
<div className="bg-white soft-ring text-[#0A1628] rounded-2xl rounded-tl-sm p-4 relative z-10">
<div className="flex items-start justify-between gap-4 mb-3 pb-3 border-b border-black/[0.04]">
<div>
<p className="text-xs text-[#64748B] mb-0.5">Extracted Data</p>
<p className="text-sm font-medium">£1,200.00 + VAT</p>
</div>
<div className="bg-green-50 text-green-700 text-[10px] font-mono px-2 py-0.5 rounded border border-green-200">
                                        Verified
                                    </div>
</div>
<p className="text-sm text-[#64748B] leading-relaxed">
                                    Invoice processed. Pushed as a draft to Xero for <span className="text-[#0A1628] font-medium">Crown Properties</span>.
                                </p>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white soft-ring rounded-xl p-4 shadow-xl shadow-black/5 flex items-center gap-4 animate-fade-up delay-400">
<div className="w-10 h-10 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-[#0A1628] text-sm font-medium">Synced to Xero</p>
<p className="text-[#64748B] text-xs">Just now</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-black/[0.04] bg-white relative z-10">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-up">
<p className="text-xs text-[#94A3B8] font-mono uppercase tracking-widest text-center md:text-left shrink-0">
                Trusted by modern practices
            </p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 grayscale pointer-events-none">

<span className="text-xl font-semibold tracking-tighter">OAKWOOD</span>
<span className="text-xl font-medium tracking-tight">Kensington&amp;Co</span>
<span className="text-xl font-semibold tracking-widest">ATLAS</span>
<span className="text-xl font-medium tracking-tight">Meridian</span>
</div>
</div>
</section>

<section className="py-32 px-6 relative">
<div className="max-w-[1200px] mx-auto">
<div className="mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-[#0A1628]">
                    Accountants didn't sign up for data entry.
                </h2>
<p className="text-lg text-[#64748B] max-w-2xl">
                    Stop chasing clients for receipts. Automate the low-value administrative work and focus entirely on strategic advisory.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-[24px] p-8 flex flex-col md:col-span-2 group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-xl bg-white soft-ring flex items-center justify-center mb-16 text-[#0A1628]">
<iconify-icon icon="solar:inbox-in-linear" width="24"></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight mb-2 text-[#0A1628]">Omnichannel collection</h3>
<p className="text-[#64748B] text-sm leading-relaxed max-w-md">
                            Clients send documents through WhatsApp, SMS, or email. Ario instantly ingests, categorizes, and extracts the line items.
                        </p>
</div>
</div>

<div className="glass-card rounded-[24px] p-8 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-xl bg-white soft-ring flex items-center justify-center mb-16 text-[#0A1628]">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight mb-2 text-[#0A1628]">Instant replies</h3>
<p className="text-[#64748B] text-sm leading-relaxed">
                            Ario answers routine tax questions autonomously using your practice's knowledge base.
                        </p>
</div>
</div>

<div className="glass-card rounded-[24px] p-8 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-xl bg-white soft-ring flex items-center justify-center mb-16 text-[#0A1628]">
<iconify-icon icon="solar:alarm-linear" width="24"></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight mb-2 text-[#0A1628]">Automated chasing</h3>
<p className="text-[#64748B] text-sm leading-relaxed">
                            Smart reminders track missing documents and notify clients before MTD deadlines hit.
                        </p>
</div>
</div>

<div className="glass-card rounded-[24px] p-8 flex flex-col md:col-span-2 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-white soft-ring flex items-center justify-center mb-16 text-[#0A1628] relative z-10">
<iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<div className="mt-auto relative z-10">
<h3 className="text-xl font-medium tracking-tight mb-2 text-[#0A1628]">Native integrations</h3>
<p className="text-[#64748B] text-sm leading-relaxed max-w-md">
                            Two-way sync with Xero, QuickBooks, and Sage. Ario writes drafts directly to your ledger, waiting for one-click approval.
                        </p>
</div>

<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none flex items-center justify-end pr-8">
<div className="flex gap-4 opacity-20">
<iconify-icon className="text-[#0A1628]" icon="solar:database-linear" width="48"></iconify-icon>
<iconify-icon className="text-[#0A1628]" icon="solar:server-square-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white border-y border-black/[0.04]">
<div className="max-w-[1200px] mx-auto">
<div className="mb-20">
<span className="text-xs font-mono text-[#F5A623] tracking-widest uppercase mb-3 block">Infrastructure</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#0A1628]">
                    How the pipeline works
                </h2>
</div>
<div className="flex flex-col md:flex-row gap-12 lg:gap-20">

<div className="flex-1 relative">
<div className="h-px w-full bg-black/5 absolute top-4 left-0 hidden md:block"></div>
<div className="w-8 h-8 rounded-full bg-white soft-ring flex items-center justify-center text-xs font-mono text-[#0A1628] relative z-10 mb-6">
                        01
                    </div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-[#0A1628]">Ingestion</h3>
<p className="text-[#64748B] text-sm leading-relaxed">
                        Secure webhooks capture documents sent by clients via native channels like WhatsApp or standard Email protocols.
                    </p>
</div>

<div className="flex-1 relative">
<div className="h-px w-full bg-black/5 absolute top-4 left-0 hidden md:block"></div>
<div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center text-xs font-mono text-white relative z-10 mb-6 shadow-md shadow-black/20">
                        02
                    </div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-[#0A1628]">Processing</h3>
<p className="text-[#64748B] text-sm leading-relaxed">
                        Proprietary LLMs perform semantic extraction, identifying vendor, dates, tax amounts, and matching to chart of accounts.
                    </p>
</div>

<div className="flex-1 relative">
<div className="w-8 h-8 rounded-full bg-white soft-ring flex items-center justify-center text-xs font-mono text-[#0A1628] relative z-10 mb-6">
                        03
                    </div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-[#0A1628]">Reconciliation</h3>
<p className="text-[#64748B] text-sm leading-relaxed">
                        Drafts are created via API in your accounting software. Accountants review and approve with a single click in their dashboard.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-[1200px] mx-auto bg-[#0A1628] rounded-[32px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIj48L2NpcmNsZT4KPC9zdmc+')] opacity-50 z-0"></div>
<div className="z-10 max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-white">
                    Ready for Making Tax Digital?
                </h2>
<p className="text-[#94A3B8] text-base leading-relaxed">
                    HMRC compliance mandates strict digital record-keeping. Deploy Ario across your client base today and automate quarterly submissions without hiring additional staff.
                </p>
</div>
<div className="z-10 shrink-0">
<a className="inline-flex items-center gap-2 bg-white text-[#0A1628] font-medium text-sm px-6 py-3.5 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-white/10" href="#signup">
                    Start onboarding
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-[1000px] mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-[#0A1628]">
                    Predictable pricing.
                </h2>
<p className="text-lg text-[#64748B]">No hidden usage fees. Pay per practice size.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card rounded-[32px] p-10 flex flex-col relative group">
<h3 className="text-lg font-medium tracking-tight text-[#0A1628] mb-1">Starter</h3>
<p className="text-[#64748B] text-sm mb-8">For solo practitioners and small firms.</p>
<div className="flex items-end gap-1 mb-10">
<span className="text-5xl font-semibold tracking-tighter text-[#0A1628]">$50</span>
<span className="text-[#64748B] text-sm mb-1.5">/mo</span>
</div>
<ul className="space-y-4 mb-12 text-sm text-[#475569] flex-1 font-medium">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0A1628]" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Up to 50 active clients
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0A1628]" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            WhatsApp &amp; Email ingestion
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0A1628]" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Standard OCR extraction
                        </li>
</ul>
<a className="block w-full text-center bg-white soft-ring text-[#0A1628] text-sm font-medium px-6 py-3.5 rounded-xl transition-colors hover:bg-gray-50" href="#signup">
                        Get started
                    </a>
</div>

<div className="bg-[#0A1628] rounded-[32px] p-10 flex flex-col relative text-white shadow-2xl shadow-black/10">
<div className="absolute top-8 right-8 bg-[#F5A623] text-[#0A1628] text-[10px] font-mono font-medium tracking-widest uppercase px-3 py-1 rounded-full">
                        Pro
                    </div>
<h3 className="text-lg font-medium tracking-tight mb-1">Growth</h3>
<p className="text-[#94A3B8] text-sm mb-8">For scaling practices requiring full automation.</p>
<div className="flex items-end gap-1 mb-10">
<span className="text-5xl font-semibold tracking-tighter">$100</span>
<span className="text-[#94A3B8] text-sm mb-1.5">/mo</span>
</div>
<ul className="space-y-4 mb-12 text-sm text-[#CBD5E1] flex-1 font-medium">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#F5A623]" icon="solar:check-circle-bold" width="18"></iconify-icon>
                            Up to 150 active clients
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#F5A623]" icon="solar:check-circle-bold" width="18"></iconify-icon>
                            Everything in Starter
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#F5A623]" icon="solar:check-circle-bold" width="18"></iconify-icon>
                            Autonomous client chasing
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#F5A623]" icon="solar:check-circle-bold" width="18"></iconify-icon>
                            Advanced MTD verification
                        </li>
</ul>
<a className="block w-full text-center bg-white text-[#0A1628] text-sm font-medium px-6 py-3.5 rounded-xl transition-transform hover:scale-[1.02] active:scale-95" href="#signup">
                        Start free trial
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-black/[0.04] bg-[#FAFAFA]">
<div className="max-w-[768px] mx-auto">
<h2 className="text-2xl font-semibold tracking-tighter mb-10 text-[#0A1628]">
                Technical FAQ
            </h2>
<div className="space-y-1">

<details className="group border-b border-black/[0.04] py-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-base tracking-tight text-[#0A1628] hover:text-[#000000] transition-colors">
                        How does the ledger integration work?
                        <span className="transition group-open:rotate-180 text-[#94A3B8]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-[#64748B] text-sm mt-3 leading-relaxed pr-8">
                        We use OAuth2 to connect to your preferred software (Xero, QuickBooks, Sage). Ario only ever pushes data as "Drafts" to your ledger and requires a final human review via our dashboard.
                    </p>
</details>

<details className="group border-b border-black/[0.04] py-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-base tracking-tight text-[#0A1628] hover:text-[#000000] transition-colors">
                        Is WhatsApp data fully encrypted?
                        <span className="transition group-open:rotate-180 text-[#94A3B8]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-[#64748B] text-sm mt-3 leading-relaxed pr-8">
                        Yes. We utilize the official Meta Business API. Messages are end-to-end encrypted in transit. Data at rest is encrypted using AES-256 on AWS EU-West servers to ensure GDPR compliance.
                    </p>
</details>

<details className="group border-b border-black/[0.04] py-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-base tracking-tight text-[#0A1628] hover:text-[#000000] transition-colors">
                        Can the AI give incorrect tax advice?
                        <span className="transition group-open:rotate-180 text-[#94A3B8]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-[#64748B] text-sm mt-3 leading-relaxed pr-8">
                        Ario's conversational model is strictly scoped via RAG (Retrieval-Augmented Generation) to only answer based on factual deadlines, extracted document data, and predefined practice FAQs. It defers complex advisory to the human accountant.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 relative bg-white border-t border-black/[0.04]" id="signup">
<div className="max-w-[500px] mx-auto">
<div className="text-center mb-10">
<div className="w-12 h-12 bg-[#0A1628] rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-md shadow-black/10">
<div className="w-3 h-3 bg-[#F5A623] rounded-full"></div>
</div>
<h2 className="text-2xl font-semibold tracking-tighter mb-2 text-[#0A1628]">
                    Deploy Ario for your practice
                </h2>
<p className="text-[#64748B] text-sm">
                    Start your 14-day trial. No credit card required.
                </p>
</div>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[11px] font-mono text-[#64748B] uppercase tracking-wide">First Name</label>
<input className="w-full bg-white soft-ring rounded-lg px-3 py-2.5 text-sm text-[#0A1628] placeholder-[#CBD5E1] focus:ring-2 focus:ring-[#0A1628] focus:outline-none transition-shadow" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-mono text-[#64748B] uppercase tracking-wide">Last Name</label>
<input className="w-full bg-white soft-ring rounded-lg px-3 py-2.5 text-sm text-[#0A1628] placeholder-[#CBD5E1] focus:ring-2 focus:ring-[#0A1628] focus:outline-none transition-shadow" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-mono text-[#64748B] uppercase tracking-wide">Work Email</label>
<input className="w-full bg-white soft-ring rounded-lg px-3 py-2.5 text-sm text-[#0A1628] placeholder-[#CBD5E1] focus:ring-2 focus:ring-[#0A1628] focus:outline-none transition-shadow" placeholder="jane@practice.co.uk" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-mono text-[#64748B] uppercase tracking-wide">Practice Name</label>
<input className="w-full bg-white soft-ring rounded-lg px-3 py-2.5 text-sm text-[#0A1628] placeholder-[#CBD5E1] focus:ring-2 focus:ring-[#0A1628] focus:outline-none transition-shadow" placeholder="Doe &amp; Co Accounting" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5 relative">
<label className="text-[11px] font-mono text-[#64748B] uppercase tracking-wide">Volume</label>
<div className="relative">
<select className="w-full bg-white soft-ring rounded-lg px-3 py-2.5 text-sm text-[#0A1628] appearance-none focus:ring-2 focus:ring-[#0A1628] focus:outline-none transition-shadow cursor-pointer bg-transparent" required="">
<option className="text-[#CBD5E1]" disabled="" selected="" value="">Clients</option>
<option value="1-50">1-50</option>
<option value="51-150">51-150</option>
<option value="150+">150+</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#94A3B8]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5 relative">
<label className="text-[11px] font-mono text-[#64748B] uppercase tracking-wide">Ledger</label>
<div className="relative">
<select className="w-full bg-white soft-ring rounded-lg px-3 py-2.5 text-sm text-[#0A1628] appearance-none focus:ring-2 focus:ring-[#0A1628] focus:outline-none transition-shadow cursor-pointer bg-transparent" required="">
<option className="text-[#CBD5E1]" disabled="" selected="" value="">Software</option>
<option value="Xero">Xero</option>
<option value="QuickBooks">QuickBooks</option>
<option value="Sage">Sage</option>
<option value="Other">Other</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#94A3B8]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<button className="w-full bg-[#0A1628] text-white text-sm font-medium px-4 py-3 rounded-lg transition-transform hover:scale-[1.01] active:scale-95 shadow-md shadow-black/10 mt-2" type="submit">
                    Create account
                </button>
<p className="text-center text-xs text-[#94A3B8] font-medium mt-4">
                    By submitting, you agree to our <a className="text-[#0A1628] hover:underline" href="#">Terms of Service</a>.
                </p>
</form>
</div>
</section>

<footer className="mt-auto py-10 border-t border-black/[0.04] px-6 bg-[#FAFAFA]">
<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-sm font-semibold tracking-tighter text-[#0A1628] flex items-center gap-2">
<div className="w-4 h-4 bg-[#0A1628] rounded-[2px] flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full"></div>
</div>
                ARIO
            </div>
<div className="flex items-center gap-6 text-xs font-medium text-[#64748B]">
<a className="hover:text-[#0A1628] transition-colors" href="#">Documentation</a>
<a className="hover:text-[#0A1628] transition-colors" href="#">Security</a>
<a className="hover:text-[#0A1628] transition-colors" href="#">Status</a>
<a className="hover:text-[#0A1628] transition-colors" href="#">Privacy</a>
</div>
<p className="text-xs text-[#94A3B8] font-mono">
                © 2026 Ario Inc.
            </p>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-xl border-t border-black/[0.04] z-50">
<a className="block w-full text-center bg-[#0A1628] text-white text-sm font-medium px-6 py-3 rounded-xl shadow-lg shadow-black/10" href="#signup">
            Get started
        </a>
</div>

    </>
  );
}

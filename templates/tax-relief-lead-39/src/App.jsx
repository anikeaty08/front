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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Manrope', 'sans-serif'] },
colors: {
brand: {
black: '#050505',
cream: '#FDF6F1',
gray: '#F2EAE4'
}
}
}
}
}



      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) lucide.createIcons();

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
              observer.unobserve(entry.target);
            }
          });
        });

        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
      });
    


      document.addEventListener('DOMContentLoaded', () => { const btn = document.getElementById('mobile-menu-btn'); const menu = document.getElementById('mobile-menu'); const links = document.querySelectorAll('.mobile-link'); if(btn && menu) { btn.addEventListener('click', () => { const isClosed = menu.classList.contains('invisible'); if (isClosed) { menu.classList.remove('invisible', 'opacity-0', '-translate-y-4'); menu.classList.add('visible', 'opacity-100', 'translate-y-0'); btn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>'; } else { menu.classList.add('invisible', 'opacity-0', '-translate-y-4'); menu.classList.remove('visible', 'opacity-100', 'translate-y-0'); btn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>'; } if(window.lucide) lucide.createIcons(); }); links.forEach(l => l.addEventListener('click', () => { menu.classList.add('invisible', 'opacity-0', '-translate-y-4'); menu.classList.remove('visible', 'opacity-100', 'translate-y-0'); btn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>'; if(window.lucide) lucide.createIcons(); })); } });
    
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDF6F1]/80 backdrop-blur-xl pt-6 pb-4 transition-all border-b border-black/5 supports-[backdrop-filter]:bg-[#FDF6F1]/60">
<div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="flex flex-col gap-[3px]">
<div className="w-1 h-4 bg-black"></div>
<div className="w-1 h-4 bg-black/30"></div>
</div>
<span className="text-lg tracking-tight font-semibold">
            TaxFirmSystems
          </span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-[#111]/80 hover:text-black transition-colors" href="#criteria">
            Qualification
          </a>
<a className="text-xs font-medium uppercase tracking-widest text-[#111]/80 hover:text-black transition-colors" href="#process">
            Verification
          </a>
<a className="text-xs font-medium uppercase tracking-widest text-[#111]/80 hover:text-black transition-colors" href="#integration">
            Platform
          </a>
<a className="text-xs font-medium uppercase tracking-widest text-[#111]/80 hover:text-black transition-colors" href="#faq">
            Partnership
          </a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold text-white bg-[#050505] rounded-full hover:bg-[#222] transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl hover:scale-105 active:scale-95" href="#contact">
            Request Access
          </a>
<button className="md:hidden p-2 -mr-2 text-[#111]" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
<div className="absolute top-full left-0 w-full bg-[#FDF6F1]/95 backdrop-blur-md border-b border-black/5 flex flex-col p-6 shadow-xl md:hidden opacity-0 invisible transition-all duration-300 transform -translate-y-4" id="mobile-menu">
<a className="mobile-link py-4 text-sm font-bold uppercase tracking-widest text-[#111] border-b border-black/5" href="#criteria">
          Qualification
        </a>
<a className="mobile-link py-4 text-sm font-bold uppercase tracking-widest text-[#111] border-b border-black/5" href="#process">
          Verification
        </a>
<a className="mobile-link py-4 text-sm font-bold uppercase tracking-widest text-[#111] border-b border-black/5" href="#integration">
          Platform
        </a>
<a className="mobile-link py-4 text-sm font-bold uppercase tracking-widest text-[#111] border-b border-black/5" href="#faq">
          Partnership
        </a>
<a className="mobile-link mt-6 w-full text-center px-6 py-4 text-xs font-bold text-white bg-[#050505] rounded-full uppercase tracking-wide shadow-lg" href="#contact">
          Request Access
        </a>
</div>
</nav>

<section className="relative pt-28 pb-12 md:pt-40 md:pb-20 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6">

<div className="fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-block px-3 py-1 mb-8 border border-black/5 rounded-full bg-white/40 backdrop-blur-sm">
<span className="text-[10px] font-semibold uppercase tracking-wider text-[#333]">
              Performance Model • Zero Retainers
            </span>
</div>
<h1 className="text-5xl md:text-[7rem] leading-[0.95] md:leading-[0.9] font-medium tracking-tighter text-[#050505] mb-8 md:mb-10 drop-shadow-sm">
            Verified tax
            <br/>
            relief leads.
          </h1>
</div>

<div className="w-full flex flex-col gap-[6px] mb-12 border-t-[3px] border-black pt-[6px] fade-in-up" style={{animationDelay: '0.2s'}}>
<div className="w-full h-[2px] bg-black"></div>
<div className="w-full h-[2px] bg-black"></div>
<div className="w-full h-[2px] bg-black"></div>
</div>

<div className="flex flex-col md:flex-row justify-between items-start gap-12 fade-in-up mb-12" style={{animationDelay: '0.3s'}}>
<div className="max-w-md">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-green-600" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-xs font-bold uppercase tracking-wide text-gray-600">
                Verified Debt Amount
              </span>
</div>
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-green-600" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-xs font-bold uppercase tracking-wide text-gray-600">
                TCPA Compliant
              </span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-green-600" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-xs font-bold uppercase tracking-wide text-gray-600">
                Real-Time CRM Sync
              </span>
</div>
</div>
<div className="max-w-lg text-right md:text-right w-full">
<p className="text-xl md:text-2xl font-medium text-[#333] mb-8 leading-tight tracking-tight text-pretty">
              Stop paying for clicks. Start paying for
              <span className="border-b-2 border-black pb-1">qualified</span>
              prospects with $25k+ in tax debt.
            </p>
<div className="flex flex-wrap justify-end gap-3">
<a className="px-8 py-4 bg-[#050505] text-white text-xs font-bold uppercase tracking-wide rounded-full hover:bg-[#222] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95" href="#contact">
                Apply for Partner Access
              </a>
<p className="w-full text-[10px] text-gray-500 mt-2 font-medium">
                No credit card required for application. 24h approval.
              </p>
</div>
</div>
</div>
<div className="w-full mb-20 fade-in-up" style={{animationDelay: '0.35s'}}>
<div className="flex justify-end mb-6 px-1">
<p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 text-right">
              Trusted by Resolution Firms &amp; Attorneys Nationwide
            </p>
</div>
<div className="marquee-container relative w-full overflow-hidden border-y border-black/5 py-10 bg-white/40 backdrop-blur-sm rounded-2xl shadow-sm">
<div className="marquee-content flex w-max items-center gap-24">
<span className="text-2xl font-extrabold tracking-tighter text-black/40 hover:text-black transition-colors cursor-default">
                APEX TAX
              </span>
<span className="text-xl font-serif font-bold italic text-black/40 hover:text-black transition-colors cursor-default">
                Sovereign Defense
              </span>
<span className="text-sm font-bold uppercase tracking-[0.25em] text-black/40 hover:text-black transition-colors cursor-default">
                CAPITAL RELIEF
              </span>
<span className="text-xl font-light tracking-wide text-black/40 hover:text-black transition-colors cursor-default">
                MERIDIAN GROUP
              </span>
<span className="text-lg font-bold text-black/40 hover:text-black transition-colors cursor-default">
                Justice &amp; Associates
              </span>
<span className="text-2xl font-serif font-black tracking-tight text-black/40 hover:text-black transition-colors cursor-default">
                VANGUARD
              </span>
<span className="text-xs font-mono font-bold uppercase text-black/40 hover:text-black transition-colors cursor-default">
                STERLING PARTNERS
              </span>
<span className="text-2xl font-extrabold tracking-tighter text-black/40 hover:text-black transition-colors cursor-default">
                APEX TAX
              </span>
<span className="text-xl font-serif font-bold italic text-black/40 hover:text-black transition-colors cursor-default">
                Sovereign Defense
              </span>
<span className="text-sm font-bold uppercase tracking-[0.25em] text-black/40 hover:text-black transition-colors cursor-default">
                CAPITAL RELIEF
              </span>
<span className="text-xl font-light tracking-wide text-black/40 hover:text-black transition-colors cursor-default">
                MERIDIAN GROUP
              </span>
<span className="text-lg font-bold text-black/40 hover:text-black transition-colors cursor-default">
                Justice &amp; Associates
              </span>
<span className="text-2xl font-serif font-black tracking-tight text-black/40 hover:text-black transition-colors cursor-default">
                VANGUARD
              </span>
<span className="text-xs font-mono font-bold uppercase text-black/40 hover:text-black transition-colors cursor-default">
                STERLING PARTNERS
              </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full fade-in-up" style={{animationDelay: '0.4s'}}>

<div className="md:col-span-4 bg-[#F9F9FB] p-8 md:p-10 rounded-3xl min-h-[400px] relative overflow-hidden group hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 border border-black/5 hover:border-black/10">
<div className="absolute top-8 left-8 right-8">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
</div>
<h3 className="font-semibold text-lg tracking-tight">
                  Qualification Matrix
                </h3>
</div>
<ul className="space-y-4">
<li className="flex items-center justify-between text-xs border-b border-black/5 pb-3">
<span className="text-gray-600 uppercase tracking-wide font-medium">
                    Liability Floor
                  </span>
<span className="font-bold text-[#111]">$25,000+</span>
</li>
<li className="flex items-center justify-between text-xs border-b border-black/5 pb-3">
<span className="text-gray-600 uppercase tracking-wide font-medium">
                    Debt Category
                  </span>
<span className="font-bold text-[#111]">Income / Payroll</span>
</li>
<li className="flex items-center justify-between text-xs border-b border-black/5 pb-3">
<span className="text-gray-600 uppercase tracking-wide font-medium">
                    Legal Status
                  </span>
<span className="font-bold text-[#111]">Unrepresented</span>
</li>
<li className="flex items-center justify-between text-xs border-b border-black/5 pb-3">
<span className="text-gray-600 uppercase tracking-wide font-medium">
                    Lead Latency
                  </span>
<span className="font-bold text-[#111]">&lt; 100ms</span>
</li>
</ul>
</div>
<p className="absolute bottom-8 left-8 text-[11px] text-gray-500 max-w-[200px] leading-relaxed">
              We disqualify 78% of inbound inquiries to protect your acquisition
              cost.
            </p>
</div>

<div className="md:col-span-5 bg-[#050505] p-8 md:p-10 rounded-3xl min-h-[400px] relative overflow-hidden text-white group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-500 border border-white/10">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-10">
<div className="mb-8 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
<i className="w-5 h-5 text-white" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">
                Capital Protection
              </h3>
<p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed font-light">
                Our liquidity model is performance-based. Invalid contact data
                or sub-threshold leads are credited to your account instantly.
              </p>
</div>
</div>

<div className="md:col-span-3 bg-white p-8 md:p-10 rounded-3xl min-h-[400px] flex flex-col justify-between border border-black/5 group hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 hover:border-black/10">
<div id="integration">
<div className="w-8 h-8 rounded-full bg-[#FDF6F1] flex items-center justify-center mb-8">
<i className="w-4 h-4 text-[#111]" data-lucide="network" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight">
                API Architecture
              </h3>
<p className="text-xs text-gray-500 leading-relaxed">
                Webhook-based delivery to your system of record.
              </p>
</div>
<div className="space-y-2 mt-4">
<div className="flex items-center gap-3 p-2.5 bg-[#F9F9F9] rounded border border-gray-100">
<div className="w-5 h-5 bg-[#00A1E0] rounded-[3px] flex items-center justify-center text-white text-[8px] font-bold">
                  SF
                </div>
<span className="text-[11px] font-semibold text-gray-700">
                  Salesforce
                </span>
</div>
<div className="flex items-center gap-3 p-2.5 bg-[#F9F9F9] rounded border border-gray-100">
<div className="w-5 h-5 bg-[#FF7A59] rounded-[3px] flex items-center justify-center text-white text-[8px] font-bold">
                  H
                </div>
<span className="text-[11px] font-semibold text-gray-700">
                  HubSpot
                </span>
</div>
<div className="flex items-center gap-3 p-2.5 bg-[#F9F9F9] rounded border border-gray-100">
<div className="w-5 h-5 bg-[#0070E0] rounded-[3px] flex items-center justify-center text-white text-[8px] font-bold">
                  C
                </div>
<span className="text-[11px] font-semibold text-gray-700">
                  Clio
                </span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-12 flex flex-col md:flex-row justify-between items-start mt-8 mb-24 fade-in-up gap-8 md:gap-12" style={{animationDelay: '0.3s'}}>
<div className="max-w-md space-y-4 pt-2">
<div className="flex items-center gap-3 group">
<div className="w-1.5 h-1.5 rounded-full bg-green-600 group-hover:scale-125 transition-transform"></div>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-800">
                  Verified Liability &gt;$25k
                </span>
</div>
<div className="flex items-center gap-3 group">
<div className="w-1.5 h-1.5 rounded-full bg-green-600 group-hover:scale-125 transition-transform"></div>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-800">
                  TCPA / DNC Compliant
                </span>
</div>
<div className="flex items-center gap-3 group">
<div className="w-1.5 h-1.5 rounded-full bg-green-600 group-hover:scale-125 transition-transform"></div>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-800">
                  Direct CRM Injection
                </span>
</div>
</div>
<div className="max-w-xl text-right md:text-right w-full">
<p className="text-2xl md:text-3xl font-medium tracking-tight text-[#1a1a1a] mb-8 leading-tight text-pretty">
                Eliminate speculative ad spend. Acquire pre-vetted prospects
                with verified tax liabilities
                <span className="border-b border-black/20 pb-0.5">
                  exceeding $25,000
                </span>
                .
              </p>
<div className="flex flex-wrap justify-end gap-3 items-center">
<p className="text-[10px] text-gray-500 font-medium text-right mr-4 leading-tight">
                  Institutional application.
                  <br/>
                  24h review cycle.
                </p>
<a className="px-8 py-4 bg-[#050505] text-white text-xs font-bold uppercase tracking-wide rounded-full hover:scale-105 transition-transform shadow-lg" href="#contact">
                  Request Partner Access
                </a>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="bg-[#FDF6F1] py-16 md:py-24" id="criteria">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block">
            Inventory Standards
          </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-[#111]">
            Billable Criteria
          </h2>
<p className="text-gray-600 max-w-xl mx-auto font-medium text-sm md:text-base leading-relaxed">
            We adhere to a strict definition of a qualified lead. You only pay
            for prospects that meet these three pillars.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="bg-white border border-black/5 rounded-2xl p-8 md:p-10 flex flex-col items-start group hover:border-black/15 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 bg-[#FDF6F1] rounded-full flex items-center justify-center mb-8 text-black">
<i className="w-5 h-5" data-lucide="dollar-sign" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">
              Liability Threshold
            </h3>
<p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Prospect must self-report a tax liability exceeding $25,000.
              Inquiries below this threshold are automatically routed to our
              sub-prime network and not billed to partners.
            </p>
</div>

<div className="bg-white border border-black/5 rounded-2xl p-8 md:p-10 flex flex-col items-start group hover:border-black/15 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 bg-[#FDF6F1] rounded-full flex items-center justify-center mb-8 text-black">
<i className="w-5 h-5" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">
              Verified Contactability
            </h3>
<p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Valid phone and email syntax required. Carrier HLR lookup
              performed pre-delivery. Disconnected numbers are credited per our
              policy.
            </p>
</div>

<div className="bg-white border border-black/5 rounded-2xl p-8 md:p-10 flex flex-col items-start group hover:border-black/15 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 bg-[#FDF6F1] rounded-full flex items-center justify-center mb-8 text-black">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">
              Active Intent
            </h3>
<p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Prospect is actively seeking resolution within 30 days. Triggers
              include recent IRS notices, levy threats, or wage garnishment.
            </p>
</div>
</div>

<div className="w-full bg-[#050505] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] mt-8 border border-white/10 hover:scale-[1.01] transition-transform duration-500">
<div className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center flex-shrink-0 border border-white/10">
<i className="text-white w-5 h-5" data-lucide="file-check" strokeWidth="1.5"></i>
</div>
<div className="flex-grow text-center md:text-left">
<p className="text-white text-sm font-semibold tracking-wide">
              Transparency Protocol
            </p>
<p className="text-gray-400 text-xs mt-1">
              Every placement includes IP verification, timestamp, and source
              URL. Full audit trail provided.
            </p>
</div>
<a className="px-6 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap" href="#contact">
            Review Terms
          </a>
</div>
</div>
</section>

<div className="bg-black rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden pb-20 pt-20 md:pt-32">

<section className="max-w-[1400px] mx-auto px-6 mb-40">
<div className="mb-16 max-w-2xl">
<h2 className="text-white text-4xl md:text-6xl font-medium tracking-tighter mb-6">
            Data Telemetry
          </h2>
<p className="text-gray-400 text-lg font-light">
            Complete narrative context delivered pre-call.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-default">
<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 group-hover:border-white/20 transition-all duration-500">
<div>
<h3 className="text-white text-2xl font-semibold mb-2 tracking-tight">
                  Initialize Partnership
                </h3>
<p className="text-gray-400 text-sm">
                  Applications reviewed within 24 hours. Territory exclusivity
                  is limited.
                </p>
</div>
<a className="bg-white text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wide hover:bg-gray-200 transition-colors shadow-[0_0_25px_rgba(255,255,255,0.05)]" href="#contact">
                Request Partner Access
              </a>
</div>
<div className="bg-[#161616] p-5 rounded-b-2xl flex justify-between items-center border-x border-b border-white/10 group-hover:bg-[#1f1f1f] transition-colors">
<span className="text-white text-sm font-medium">
                Financial Qualifier
              </span>
<i className="text-green-500 w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
</div>
</div>

<div className="group cursor-default">
<div className="bg-[#111] rounded-t-2xl overflow-hidden border border-white/10 relative aspect-[4/3] mb-0 group-hover:border-white/30 transition-colors p-8 flex flex-col justify-center items-center">
<div className="flex gap-4">
<div className="bg-white/10 px-4 py-2 rounded text-white text-sm">
                  Income Tax
                </div>
<div className="bg-white/10 px-4 py-2 rounded text-white text-sm">
                  Payroll
                </div>
</div>
</div>
<div className="bg-[#161616] p-5 rounded-b-2xl flex justify-between items-center border-x border-b border-white/10 group-hover:bg-[#1f1f1f] transition-colors">
<span className="text-white text-sm font-medium">Debt Type</span>
<i className="text-green-500 w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
</div>
</div>

<div className="group cursor-default">
<div className="bg-[#111] rounded-t-2xl overflow-hidden border border-white/10 relative aspect-[4/3] mb-0 group-hover:border-white/30 transition-colors p-8 flex flex-col justify-center items-center">
<h4 className="text-white text-2xl font-bold mb-2">Wage Garnish</h4>
<span className="text-red-400 text-xs border border-red-400/30 px-2 py-1 rounded-full bg-red-400/10">
                High Urgency
              </span>
</div>
<div className="bg-[#161616] p-5 rounded-b-2xl flex justify-between items-center border-x border-b border-white/10 group-hover:bg-[#1f1f1f] transition-colors">
<span className="text-white text-sm font-medium">
                Status Indicators
              </span>
<i className="text-green-500 w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-20" id="process">
<div className="mb-16 max-w-2xl">
<h2 className="text-white text-4xl md:text-6xl font-medium tracking-tighter mb-6">
            Fulfillment Engine
          </h2>
<p className="text-gray-400 text-lg font-light">
            High-frequency lead distribution via API.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="bg-[#FDF6F1] rounded-t-2xl overflow-hidden border border-white/10 relative aspect-[4/3] mb-0 p-8 flex flex-col justify-between group-hover:brightness-110 transition-all duration-500">
<div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                01
              </div>
<div>
<h4 className="text-black text-lg font-bold mb-2 tracking-tight">
                  Acquisition
                </h4>
<p className="text-xs text-gray-500 leading-relaxed">
                  Traffic generated via high-intent search (Google/Bing). Zero
                  incentivized clicks or co-reg data.
                </p>
</div>
</div>
<div className="bg-[#161616] p-5 rounded-b-2xl flex justify-between items-center border-x border-b border-white/10 group-hover:bg-[#1f1f1f] transition-colors">
<span className="text-white text-xs font-medium tracking-wide">
                Source Verification
              </span>
</div>
</div>

<div className="group">
<div className="bg-[#FDF6F1] rounded-t-2xl overflow-hidden border border-white/10 relative aspect-[4/3] mb-0 p-8 flex flex-col justify-between group-hover:brightness-110 transition-all duration-500">
<div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                02
              </div>
<div>
<h4 className="text-black text-lg font-bold mb-2 tracking-tight">
                  Validation
                </h4>
<p className="text-xs text-gray-500 leading-relaxed">
                  Dynamic 12-point form intake. Real-time HLR phone validation
                  and debt threshold logic.
                </p>
</div>
</div>
<div className="bg-[#161616] p-5 rounded-b-2xl flex justify-between items-center border-x border-b border-white/10 group-hover:bg-[#1f1f1f] transition-colors">
<span className="text-white text-xs font-medium tracking-wide">
                Quality Logic
              </span>
</div>
</div>

<div className="group">
<div className="bg-[#FDF6F1] rounded-t-2xl overflow-hidden border border-white/10 relative aspect-[4/3] mb-0 p-8 flex flex-col justify-between group-hover:brightness-110 transition-all duration-500">
<div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                03
              </div>
<div>
<h4 className="text-black text-lg font-bold mb-2 tracking-tight">
                  Distribution
                </h4>
<p className="text-xs text-gray-500 leading-relaxed">
                  Instant payload delivery to your CRM or intake portal.
                  &lt;500ms latency from submission.
                </p>
</div>
</div>
<div className="bg-[#161616] p-5 rounded-b-2xl flex justify-between items-center border-x border-b border-white/10 group-hover:bg-[#1f1f1f] transition-colors">
<span className="text-white text-xs font-medium tracking-wide">
                Secure Handover
              </span>
</div>
</div>
</div>
</section>

<div className="max-w-[1400px] mx-auto px-6 pb-12">
<div className="bg-[#111] border border-white/10 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-white text-2xl font-bold mb-2">
              Ready to fill your pipeline?
            </h3>
<p className="text-gray-400">
              Applications are reviewed within 24 hours. Territory exclusivity
              available.
            </p>
</div>
<a className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
            Apply for Partner Access
          </a>
</div>
</div>
</div>

<section className="bg-[#FDF6F1] pb-20 rounded-t-[3rem] -mt-10 relative z-10 pt-20 md:pt-32" id="faq">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-[#111]">
            Partnership Inquiries
          </h2>
<p className="text-gray-500 font-medium text-sm">
            Operational details for tax resolution firms.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-2xl min-h-[160px] border border-black/5 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<h3 className="font-bold text-sm mb-3 flex items-center gap-2 uppercase tracking-wide opacity-80">
<i className="w-4 h-4" data-lucide="refresh-ccw" strokeWidth="1.5"></i>
              Credit Policy
            </h3>
<p className="text-xs md:text-sm leading-relaxed text-gray-700">
              We utilize a seamless dispute portal. Leads with disconnected
              numbers or sub-$25k debt are eligible for 100% credit if flagged
              within 48 hours.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl min-h-[160px] border border-black/5 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<h3 className="font-bold text-sm mb-3 flex items-center gap-2 uppercase tracking-wide opacity-80">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
              Exclusivity
            </h3>
<p className="text-xs md:text-sm leading-relaxed text-gray-700">
              We offer Exclusive (1-to-1) and Semi-Exclusive (max 3) tiers.
              Exclusive inventory commands a premium CPL but ensures zero
              competition.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl min-h-[160px] border border-black/5 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<h3 className="font-bold text-sm mb-3 flex items-center gap-2 uppercase tracking-wide opacity-80">
<i className="w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i>
              Contract Terms
            </h3>
<p className="text-xs md:text-sm leading-relaxed text-gray-700">
              Zero long-term commitments. Partnership operates on a pre-funded
              retainer basis. You may pause or terminate acquisition at any
              time.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl min-h-[160px] border border-black/5 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<h3 className="font-bold text-sm mb-3 flex items-center gap-2 uppercase tracking-wide opacity-80">
<i className="w-4 h-4" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
              Minimum Volume
            </h3>
<p className="text-xs md:text-sm leading-relaxed text-gray-700">
              To maintain active partner status, we require a minimum capacity
              of 20 leads per month to ensure data significance.
            </p>
</div>
</div>

<div className="max-w-xl mx-auto mt-24 bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5 relative overflow-hidden" id="contact">
<div className="text-center mb-10">
<h3 className="text-2xl font-semibold mb-2 tracking-tight">
              Request Access
            </h3>
<p className="text-gray-500 text-xs font-medium">
              View pricing and availability for your state.
            </p>
</div>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  First Name
                </label>
<input className="w-full bg-[#FAFAFA] border border-black/5 rounded-lg px-4 py-3.5 font-medium focus:ring-4 focus:ring-black/5 focus:border-black/20 focus:bg-white outline-none placeholder-gray-400/50 text-base md:text-sm transition-all duration-200" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Last Name
                </label>
<input className="w-full bg-[#FAFAFA] border border-black/5 rounded-lg px-4 py-3.5 font-medium focus:ring-4 focus:ring-black/5 focus:border-black/20 focus:bg-white outline-none placeholder-gray-400/50 text-base md:text-sm transition-all duration-200" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Legal Practice / Firm Name
              </label>
<input className="w-full bg-[#FAFAFA] border border-black/5 rounded-lg px-4 py-3.5 font-medium focus:ring-4 focus:ring-black/5 focus:border-black/20 focus:bg-white outline-none placeholder-gray-400/50 text-base md:text-sm transition-all duration-200" placeholder="Doe Tax Law, LLC" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Direct Email
              </label>
<input className="w-full bg-[#FAFAFA] border border-black/5 rounded-lg px-4 py-3.5 font-medium focus:ring-4 focus:ring-black/5 focus:border-black/20 focus:bg-white outline-none placeholder-gray-400/50 text-base md:text-sm transition-all duration-200" placeholder="partner@doetaxlaw.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Anticipated Volume
              </label>
<select className="w-full bg-[#FAFAFA] border border-black/5 rounded-lg px-4 py-3.5 font-medium focus:ring-4 focus:ring-black/5 focus:border-black/20 focus:bg-white outline-none text-gray-700 text-base md:text-sm transition-all duration-200">
<option>10 - 50 Leads / mo</option>
<option>50 - 200 Leads / mo</option>
<option>200+ Leads / mo</option>
</select>
</div>
<button className="w-full bg-black text-white font-bold text-xs uppercase tracking-widest py-4 rounded-lg mt-6 hover:bg-[#222] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl" type="button">
              Submit Application
            </button>
<p className="text-[10px] text-center text-gray-400 mt-6">
              Secure SSL Transmission. Terms of Service apply.
            </p>
</form>
</div>
</div>
</section>

<footer className="bg-[#FDF6F1] py-16 border-t border-[#111]/5">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="flex flex-col gap-[3px]">
<div className="w-1 h-3 bg-black"></div>
<div className="w-1 h-3 bg-black/30"></div>
</div>
<span className="font-bold tracking-tight text-lg">
                TaxFirmSystems
              </span>
</div>
<p className="text-xs text-gray-500 leading-relaxed mb-6 max-w-xs">
              Performance-based marketing infrastructure for the modern tax
              resolution practice.
            </p>
<div className="flex gap-4">
<i className="w-4 h-4 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" data-lucide="linkedin" strokeWidth="1.5"></i>
<i className="w-4 h-4 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" data-lucide="twitter" strokeWidth="1.5"></i>
</div>
</div>

<div>
<h4 className="font-bold text-xs uppercase tracking-wider mb-6 text-gray-400">
              Platform
            </h4>
<ul className="space-y-3 text-xs font-medium text-[#111]">
<li>
<a className="hover:text-gray-500 transition-colors" href="#criteria">
                  Lead Criteria
                </a>
</li>
<li>
<a className="hover:text-gray-500 transition-colors" href="#process">
                  Verification Process
                </a>
</li>
<li>
<a className="hover:text-gray-500 transition-colors" href="#integration">
                  CRM Integrations
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-xs uppercase tracking-wider mb-6 text-gray-400">
              Legal
            </h4>
<ul className="space-y-3 text-xs font-medium text-[#111]">
<li>
<a className="hover:text-gray-500 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-gray-500 transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-gray-500 transition-colors" href="#">
                  Lead Return Policy
                </a>
</li>
<li>
<a className="hover:text-gray-500 transition-colors" href="#">
                  TCPA Compliance
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-xs uppercase tracking-wider mb-6 text-gray-400">
              Contact
            </h4>
<ul className="space-y-3 text-xs font-medium text-[#111]">
<li>
<a className="hover:text-gray-500 transition-colors" href="#">
                  support@taxfirmsystems.com
                </a>
</li>
<li><span className="text-gray-400">1-800-555-0123</span></li>
<li>
<span className="text-gray-400">
                  Monday - Friday, 9am - 6pm EST
                </span>
</li>
</ul>
</div>
</div>
<div className="mt-20 pt-8 border-t border-[#000]/5 text-[10px] text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 TaxFirmSystems. All rights reserved.</p>
<p>Not affiliated with the IRS or any government agency.</p>
</div>
</div>
</footer>



    </>
  );
}

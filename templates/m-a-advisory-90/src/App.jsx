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



function switchPage(pageId) {
// Hide all views
document.querySelectorAll('.page-view').forEach(view => {
view.classList.add('hidden');
});
// Show selected view
const target = document.getElementById(pageId + '-view');
if(target) {
target.classList.remove('hidden');
window.scrollTo(0, 0);
}
// Update Nav State
document.querySelectorAll('.nav-link').forEach(link => {
link.classList.remove('text-white');
link.classList.add('text-zinc-400');
});
const activeLink = document.getElementById('nav-' + pageId);
if(activeLink) {
activeLink.classList.remove('text-zinc-400');
activeLink.classList.add('text-white');
}
// Close mobile menu if open
document.getElementById('mobile-menu').classList.add('hidden');
// Update Title
if (pageId === 'home') {
document.title = "Homepage - Accsensia";
} else if (pageId === 'fpa') {
document.title = "Finance Team as a Service";
}
}
function toggleMobileMenu() {
const menu = document.getElementById('mobile-menu');
if (menu.classList.contains('hidden')) {
menu.classList.remove('hidden');
} else {
menu.classList.add('hidden');
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 select-none cursor-pointer" href="#" onclick="switchPage('home'); return false;">
<span className="tracking-tight uppercase">ACCSENSIA</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<button className="nav-link text-white hover:text-white transition-colors duration-200" id="nav-home" onclick="switchPage('home')">Advisory</button>
<a className="text-zinc-400 hover:text-white transition-colors duration-200" href="#track-record" onclick="switchPage('home')">Track Record</a>
<a className="text-zinc-400 hover:text-white transition-colors duration-200" href="#founder" onclick="switchPage('home')">Firm</a>
<button className="nav-link text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-2" id="nav-fpa" onclick="switchPage('fpa')">
                    Finance Team as a Service
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white font-medium">NEW</span>
</button>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors duration-200" href="#contact">
                    Contact Us
                </a>
<button className="md:hidden text-white p-2" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-[#030303] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl" id="mobile-menu">
<button className="text-left text-sm font-medium text-white hover:text-zinc-300" onclick="switchPage('home')">Advisory</button>
<a className="text-left text-sm font-medium text-zinc-400 hover:text-white" href="#track-record" onclick="switchPage('home'); toggleMobileMenu()">Track Record</a>
<a className="text-left text-sm font-medium text-zinc-400 hover:text-white" href="#founder" onclick="switchPage('home'); toggleMobileMenu()">Firm</a>
<button className="text-left text-sm font-medium text-zinc-400 hover:text-white flex items-center gap-2" onclick="switchPage('fpa')">
                Finance Team as a Service
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white font-medium">NEW</span>
</button>
<div className="pt-4 border-t border-white/5">
<a className="block w-full text-center px-4 py-3 text-sm font-medium text-black bg-white rounded-md hover:bg-zinc-200" href="#contact" onclick="toggleMobileMenu()">
                    Contact Us
                </a>
</div>
</div>
</nav>

<div className="page-view" id="home-view">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/[0.02] rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 text-glow leading-[0.95]">
                    Architecting <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">strategic value.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
                    We navigate the complexities of mergers, acquisitions, and capital raising for Mid-Market companies &amp; SMEs.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-white text-black text-sm font-medium rounded-md hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 inline-flex" href="https://calendly.com/abbas-accsensia/30min" target="_blank">
                        Book your free valuation
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="w-full sm:w-auto px-6 py-3 border border-zinc-800 text-zinc-300 text-sm font-medium rounded-md hover:bg-zinc-900 transition-all">
                        View transactions
                    </button>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="space-y-1">
<p className="text-3xl font-medium text-white tracking-tight">£200m+</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Team Transaction Value</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-medium text-white tracking-tight">25+</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Team Deals Completed</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-medium text-white tracking-tight">100+</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Active Investor Relationships</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-medium text-white tracking-tight">100+</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Team Years Experience</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Core Competencies</h2>
<p className="text-lg text-zinc-500">Precision execution across the full deal lifecycle.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group glass-panel p-8 rounded-xl hover:border-zinc-600 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:arrow-left-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Sell-Side Advisory</h3>
<p className="text-base text-zinc-500 leading-relaxed mb-6">
                        Maximizing shareholder value through tailored exit strategies, precise valuation, and competitive bidding processes involving global acquirers.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-xl hover:border-zinc-600 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Buy-Side Advisory</h3>
<p className="text-base text-zinc-500 leading-relaxed mb-6">
                        Identifying and executing transformative acquisitions. We support corporate development teams with target sourcing, diligence, and negotiation.
                    </p>
</div>

<div className="group glass-panel p-8 rounded-xl hover:border-zinc-600 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:coins" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Capital Advisory</h3>
<p className="text-base text-zinc-500 leading-relaxed mb-6">
                        Mobilising strategic capital from SWFs, family offices and investment firms to fuel growth. We support investor outreach and financing pathways.
                    </p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]" id="track-record">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">Selected Transactions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="flex flex-col sm:flex-row justify-between p-6 rounded-lg border border-white/5 hover:bg-white/[0.02] transition-colors group relative overflow-hidden">
<div className="flex-1 z-10">
<div className="flex items-center gap-2 mb-3 flex-wrap">
<span className="text-white font-medium">Mid-Market IT Services</span>
<span className="text-zinc-600 text-xs">→</span>
<span className="text-white font-medium">UK Managed Services</span>
</div>
<p className="text-base text-zinc-500 mb-5 pr-4">Acquisition of a specialist enterprise infrastructure provider.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[10px] uppercase tracking-wide text-zinc-400 font-medium">Acquisition</span>
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[10px] uppercase tracking-wide text-emerald-400/80 font-medium">Buy-side</span>
</div>
</div>
<div className="mt-4 sm:mt-0 text-left sm:text-right z-10">
<p className="text-lg font-medium text-white tracking-tight">£30m</p>
<p className="text-xs text-zinc-600 mb-1">Mar 2020</p>
</div>
</div>

<div className="flex flex-col sm:flex-row justify-between p-6 rounded-lg border border-white/5 hover:bg-white/[0.02] transition-colors group relative overflow-hidden">
<div className="flex-1 z-10">
<div className="flex items-center gap-2 mb-3 flex-wrap">
<span className="text-white font-medium">Cyber Security Specialist</span>
<span className="text-zinc-600 text-xs">→</span>
<span className="text-white font-medium">UK Tech Group</span>
</div>
<p className="text-base text-zinc-500 mb-5 pr-4">Strategic acquisition expanding managed security capabilities.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[10px] uppercase tracking-wide text-zinc-400 font-medium">Acquisition</span>
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[10px] uppercase tracking-wide text-emerald-400/80 font-medium">Buy-side</span>
</div>
</div>
<div className="mt-4 sm:mt-0 text-left sm:text-right z-10">
<p className="text-lg font-medium text-white tracking-tight">£10m</p>
<p className="text-xs text-zinc-600 mb-1">Oct 2021</p>
</div>
</div>

<div className="flex flex-col sm:flex-row justify-between p-6 rounded-lg border border-white/5 hover:bg-white/[0.02] transition-colors group relative overflow-hidden">
<div className="flex-1 z-10">
<div className="flex items-center gap-2 mb-3 flex-wrap">
<span className="text-white font-medium">Rail Software (Nordics)</span>
<span className="text-zinc-600 text-xs">→</span>
<span className="text-white font-medium">Global Transport Group</span>
</div>
<p className="text-base text-zinc-500 mb-5 pr-4">Acquisition of mission-critical rail operations software business.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[10px] uppercase tracking-wide text-zinc-400 font-medium">Acquisition</span>
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[10px] uppercase tracking-wide text-blue-400/80 font-medium">Sell-side</span>
</div>
</div>
<div className="mt-4 sm:mt-0 text-left sm:text-right z-10">
<p className="text-lg font-medium text-white tracking-tight">£25m</p>
<p className="text-xs text-zinc-600 mb-1">Nov 2023</p>
</div>
</div>

<div className="flex flex-col sm:flex-row justify-between p-6 rounded-lg border border-white/5 hover:bg-white/[0.02] transition-colors group relative overflow-hidden">
<div className="flex-1 z-10">
<div className="flex items-center gap-2 mb-3 flex-wrap">
<span className="text-white font-medium">Intelligence Platform</span>
<span className="text-zinc-600 text-xs">→</span>
<span className="text-white font-medium">PE Sponsor</span>
</div>
<p className="text-base text-zinc-500 mb-5 pr-4">Acquisition of a subscription-led specialist data business.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[10px] uppercase tracking-wide text-zinc-400 font-medium">Acquisition</span>
<span className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[10px] uppercase tracking-wide text-blue-400/80 font-medium">Sell-side</span>
</div>
</div>
<div className="mt-4 sm:mt-0 text-left sm:text-right z-10">
<p className="text-lg font-medium text-white tracking-tight">£20m</p>
<p className="text-xs text-zinc-600 mb-1">Dec 2024</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#040404]" id="founder">
<div className="max-w-7xl mx-auto">
<div className="mb-16 border-b border-white/5 pb-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Firm Leadership</h2>
<p className="text-lg text-zinc-500">Built on deep industry expertise and a commitment to strategic advice.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
<div className="relative order-2 lg:order-1">
<div className="absolute -inset-2 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-2xl blur-xl opacity-20"></div>
<div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mr-auto rounded-xl overflow-hidden bg-zinc-900 border border-white/10 group">
<img alt="Abbas Taki" className="object-cover w-full h-full opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95443962-26dc-46da-a5a9-7299e0602ab5_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
</div>
</div>
<div className="order-1 lg:order-2 pt-4">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Abbas Taki</h2>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Founder &amp; Managing Partner</p>
<div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
<p>Abbas Taki is the Founder of Accsensia and a corporate finance professional with 10+ years’ experience supporting mid-market businesses through M&amp;A, capital raising and strategic finance decisions. He has led end-to-end deal execution across valuation and modelling, due diligence, investor materials and stakeholder management, working closely with CEOs, boards and investors on transactions and integration.</p>
<p>Abbas’ background spans private equity-backed environments and high-growth businesses, including buy-side acquisitions and post-merger integration, with particular depth in data-led businesses, technology-enabled services and real assets.</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="fpa-view">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden">

<div className="absolute top-0 right-1/4 translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 text-glow leading-[1.0]">
                     A 3–5 working day <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">month-end close.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
                    Numbers you can actually run the business on.
                 </p>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 text-sm text-zinc-500">
<span className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="lucide:check-circle"></iconify-icon> Decision-grade management pack</span>
<span className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="lucide:check-circle"></iconify-icon> Cash &amp; runway visibility</span>
<span className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="lucide:check-circle"></iconify-icon> AI-enabled finance workflows</span>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<a className="w-full sm:w-auto px-6 py-3 bg-white text-black text-sm font-medium rounded-md hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 inline-flex" href="https://calendly.com/abbas-accsensia/30min" target="_blank">
                         Book a 15-minute call
                         <iconify-icon icon="lucide:calendar-clock" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="w-full sm:w-auto px-6 py-3 border border-zinc-800 text-zinc-300 text-sm font-medium rounded-md hover:bg-zinc-900 transition-all">
                         See what you get
                     </button>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01] py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="mb-12 text-center md:text-left">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">The Problem</h2>
<p className="text-lg text-zinc-500 max-w-xl">If month-end feels like chaos, you don't need more admin. You need a clean close and smarter automation.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-zinc-700 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="lucide:clock" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Late Numbers</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Financials arriving weeks late or changing constantly, making them useless for decisions.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-zinc-700 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="lucide:eye-off" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">No Visibility</h3>
<p className="text-sm text-zinc-500 leading-relaxed">No clear view of cash, runway, or performance drivers when you need them most.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-zinc-700 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="lucide:brain-circuit" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Gut Feel</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Decisions made on intuition because reporting isn’t decision-grade quality.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-zinc-700 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="lucide:file-spreadsheet" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Manual Work</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Too much manual work in spreadsheets and email chains instead of analysis.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">What you get (every month)</h2>
<p className="text-lg text-zinc-500">We run your close and deliver a decision-grade pack within 3-5 working days.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-xl flex flex-col h-full border-t-2 border-t-emerald-500/50">
<div className="mb-6 flex items-center justify-between">
<div className="p-3 bg-zinc-900 rounded-lg text-white border border-zinc-800">
<iconify-icon icon="lucide:calendar-check" width="24"></iconify-icon>
</div>
<span className="px-2.5 py-1 rounded bg-zinc-800 text-[10px] uppercase tracking-wide text-zinc-300 font-medium">Fast</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Month-End Close</h3>
<p className="text-sm text-zinc-400 mb-6">3–5 Working Days</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="mt-0.5 text-zinc-300 shrink-0" icon="lucide:check"></iconify-icon> Bank &amp; balance sheet recs
                         </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="mt-0.5 text-zinc-300 shrink-0" icon="lucide:check"></iconify-icon> Accruals/prepaids discipline
                         </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="mt-0.5 text-zinc-300 shrink-0" icon="lucide:check"></iconify-icon> Close sign-off &amp; lock
                         </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col h-full border-t-2 border-t-white/30">
<div className="mb-6 flex items-center justify-between">
<div className="p-3 bg-zinc-900 rounded-lg text-white border border-zinc-800">
<iconify-icon icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<span className="px-2.5 py-1 rounded bg-zinc-800 text-[10px] uppercase tracking-wide text-zinc-300 font-medium">Insight</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Management Pack</h3>
<p className="text-sm text-zinc-400 mb-6">Built for decisions</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="mt-0.5 text-zinc-300 shrink-0" icon="lucide:check"></iconify-icon> P&amp;L, Balance Sheet, Cash
                         </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="mt-0.5 text-zinc-300 shrink-0" icon="lucide:check"></iconify-icon> Budget vs Actuals variance
                         </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="mt-0.5 text-zinc-300 shrink-0" icon="lucide:check"></iconify-icon> Commentary: What &amp; Why
                         </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-xl flex flex-col h-full border-t-2 border-t-zinc-700">
<div className="mb-6 flex items-center justify-between">
<div className="p-3 bg-zinc-900 rounded-lg text-white border border-zinc-800">
<iconify-icon icon="lucide:trending-up" width="24"></iconify-icon>
</div>
<span className="px-2.5 py-1 rounded bg-zinc-800 text-[10px] uppercase tracking-wide text-zinc-300 font-medium">Future</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">FP&amp;A Rhythm</h3>
<p className="text-sm text-zinc-400 mb-6">Rolling Forecasts</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="mt-0.5 text-zinc-300 shrink-0" icon="lucide:check"></iconify-icon> Scenario planning (Base/Upside)
                         </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="mt-0.5 text-zinc-300 shrink-0" icon="lucide:check"></iconify-icon> Rolling forecast refresh
                         </li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<iconify-icon className="mt-0.5 text-zinc-300 shrink-0" icon="lucide:check"></iconify-icon> Clear action list owners
                         </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-200 text-xs font-medium mb-6">
<iconify-icon icon="lucide:sparkles" width="12"></iconify-icon> AI-Enabled Finance
                     </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Automate the busywork.<br/>Speed up decisions.</h2>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                        We help you set up and embed AI across finance workflows—practically, safely, and without ripping out your existing systems.
                     </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 bg-zinc-800 rounded p-1.5 h-fit text-white"><iconify-icon icon="lucide:zap" width="16"></iconify-icon></div>
<div>
<h4 className="text-white font-medium text-sm">Close Acceleration</h4>
<p className="text-sm text-zinc-500 mt-1">Automated close checklists, anomaly flags, and variance drivers.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-zinc-800 rounded p-1.5 h-fit text-white"><iconify-icon icon="lucide:file-text" width="16"></iconify-icon></div>
<div>
<h4 className="text-white font-medium text-sm">Narrative Reporting</h4>
<p className="text-sm text-zinc-500 mt-1">Draft commentary from numbers (with human review).</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-zinc-800 rounded p-1.5 h-fit text-white"><iconify-icon icon="lucide:shield-check" width="16"></iconify-icon></div>
<div>
<h4 className="text-white font-medium text-sm">Controls &amp; Consistency</h4>
<p className="text-sm text-zinc-500 mt-1">Templates, SOPs, and review steps for audit trails.</p>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
<div className="relative rounded-lg bg-[#0A0A0A] border border-white/10 p-6 font-mono text-xs overflow-hidden">
<div className="flex items-center gap-1.5 mb-4 border-b border-white/5 pb-4">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
<span className="ml-2 text-zinc-600">ai_workflow_config.json</span>
</div>
<div className="space-y-3 text-zinc-400">
<div className="flex gap-4">
<span className="text-zinc-700 select-none">01</span>
<span><span className="text-purple-400">identify</span>(highest_impact_workflows);</span>
</div>
<div className="flex gap-4">
<span className="text-zinc-700 select-none">02</span>
<span><span className="text-purple-400">design</span>("human_in_loop_controls");</span>
</div>
<div className="flex gap-4">
<span className="text-zinc-700 select-none">03</span>
<span><span className="text-purple-400">configure</span>(tools + templates);</span>
</div>
<div className="flex gap-4">
<span className="text-zinc-700 select-none">04</span>
<span><span className="text-purple-400">train_team</span>(SOPs);</span>
</div>
<div className="flex gap-4">
<span className="text-zinc-700 select-none">05</span>
<span><span className="text-purple-400">track</span>(time_saved + speed);</span>
</div>
<div className="pl-10 pt-2 text-zinc-600 comment">// Result: 40% reduction in manual data entry</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">How it works</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="relative">
<div className="text-6xl font-medium text-white/5 absolute -top-8 -left-4 font-mono">01</div>
<h3 className="text-lg font-medium text-white mb-2 relative z-10">Diagnostics (Fast)</h3>
<p className="text-sm text-zinc-500 leading-relaxed relative z-10">We review your close process, data sources, and KPIs. You get a close calendar + input checklist.</p>
</div>
<div className="relative">
<div className="text-6xl font-medium text-white/5 absolute -top-8 -left-4 font-mono">02</div>
<h3 className="text-lg font-medium text-white mb-2 relative z-10">First Close + Baseline</h3>
<p className="text-sm text-zinc-500 leading-relaxed relative z-10">We run the close end-to-end and deliver your first pack. We agree KPIs, reporting format, and cut-offs.</p>
</div>
<div className="relative">
<div className="text-6xl font-medium text-white/5 absolute -top-8 -left-4 font-mono">03</div>
<h3 className="text-lg font-medium text-white mb-2 relative z-10">Ongoing 3–5 Day Close</h3>
<p className="text-sm text-zinc-500 leading-relaxed relative z-10">Close + pack delivered on schedule. Optional FP&amp;A cadence and AI workflow improvements layered in.</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#050505]">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">FAQs</h2>
<div className="space-y-8">
<div>
<h4 className="text-white font-medium mb-2">Is the 3–5 day close realistic for us?</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Usually, yes — as long as inputs are provided on time and we agree cut-offs. If your data is messy today, we’ll stabilise the process first and ramp you to 3–5 days.</p>
</div>
<div className="w-full h-px bg-white/5"></div>
<div>
<h4 className="text-white font-medium mb-2">Do you replace our accountant/bookkeeper?</h4>
<p className="text-sm text-zinc-500 leading-relaxed">No — we can work alongside them. We focus on the management close and reporting rhythm.</p>
</div>
<div className="w-full h-px bg-white/5"></div>
<div>
<h4 className="text-white font-medium mb-2">What systems do you support?</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Xero, QuickBooks, NetSuite exports, Excel/Google Sheets, Stripe, payroll providers, and most bank feeds.</p>
</div>
<div className="w-full h-px bg-white/5"></div>
<div>
<h4 className="text-white font-medium mb-2">Will AI replace our team?</h4>
<p className="text-sm text-zinc-500 leading-relaxed">No. We use AI to reduce repetitive work and improve consistency, with review controls.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Ready for a 3–5 day close?</h2>
<p className="text-zinc-500 mb-8">Book a 15-minute call and we’ll confirm fit, outline scope, and map the fastest path to results.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<a className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-md hover:bg-zinc-200 transition-all inline-flex items-center justify-center" href="https://calendly.com/abbas-accsensia/30min" target="_blank">
                        Book a 15-minute call
                    </a>
<button className="w-full sm:w-auto px-8 py-3 border border-zinc-800 text-zinc-300 text-sm font-medium rounded-md hover:bg-zinc-900 transition-all">
                        Request overview
                    </button>
</div>
</div>
</section>
</div>

<footer className="border-t border-white/10 bg-[#020202] pt-24 pb-12 px-6 mt-auto" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-3">Partner with us.</h2>
<p className="text-zinc-500 mb-8 max-w-sm text-base">Confidential discussions for founders, boards, and investors.</p>
<form className="flex flex-col gap-3 max-w-md">
<div className="grid grid-cols-2 gap-3">
<input className="bg-zinc-900/50 border border-zinc-800 text-white text-sm rounded-md px-4 py-3 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 placeholder-zinc-600 w-full transition-all" placeholder="Name" type="text"/>
<input className="bg-zinc-900/50 border border-zinc-800 text-white text-sm rounded-md px-4 py-3 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 placeholder-zinc-600 w-full transition-all" placeholder="Company" type="text"/>
</div>
<input className="bg-zinc-900/50 border border-zinc-800 text-white text-sm rounded-md px-4 py-3 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 placeholder-zinc-600 w-full transition-all" placeholder="Industry" type="text"/>
<input className="bg-zinc-900/50 border border-zinc-800 text-white text-sm rounded-md px-4 py-3 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 placeholder-zinc-600 w-full transition-all" placeholder="work@company.com" type="email"/>
<button className="bg-white text-black text-sm font-medium px-6 py-3 rounded-md hover:bg-zinc-200 transition-colors w-full mt-2">
                            Get in touch
                        </button>
</form>
</div>
<div className="grid sm:grid-cols-2 gap-12 text-sm">
<div className="space-y-6">
<h4 className="text-white font-medium">Firm</h4>
<ul className="space-y-3 text-zinc-500">
<li><button className="hover:text-zinc-300 transition-colors" onclick="switchPage('home')">Advisory</button></li>
<li><button className="hover:text-zinc-300 transition-colors" onclick="switchPage('fpa')">Finance Team as a Service</button></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Team</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-white font-medium">Contact</h4>
<ul className="space-y-3 text-zinc-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-600" icon="lucide:mail" strokeWidth="1.5" width="14"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:contact@accsensia.com">contact@accsensia.com</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-zinc-600" icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+447979593599">+44 79 7959 3599</a>
</li>
<li className="flex items-start gap-3 pt-4">
<iconify-icon className="mt-0.5 text-zinc-600" icon="lucide:map-pin" strokeWidth="1.5" width="14"></iconify-icon>
<span>London, United Kingdom</span>
</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
<div className="flex items-center gap-6 mb-4 md:mb-0">
<span>© 2024 Accsensia Partners. All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}

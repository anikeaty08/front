import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile navigation toggle
    document.getElementById('mobileToggle').addEventListener('click', function() {
      const nav = document.getElementById('mobileNav');
      const isHidden = nav.classList.contains('hidden');
      
      if (isHidden) {
        nav.classList.remove('hidden');
        nav.classList.add('flex');
        nav.setAttribute('aria-hidden', 'false');
        this.setAttribute('aria-expanded', 'true');
      } else {
        nav.classList.add('hidden');
        nav.classList.remove('flex');
        nav.setAttribute('aria-hidden', 'true');
        this.setAttribute('aria-expanded', 'false');
      }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none">

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse"></div>
<div className="absolute top-[10%] right-[-10%] w-[40%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] opacity-30"></div>

<div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
</div>

<header className="fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] max-w-7xl top-0 sm:top-4 lg:top-6 relative z-50 flex sm:px-6 lg:px-8 ring-1 ring-white/20 shadow-xl shadow-black/10 bg-slate-800/60 border-t border-white/20 border-b border-white/10 rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md items-center justify-between reveal-on-scroll is-visible transition-all duration-300">
<div className="w-full max-w-7xl mx-auto flex items-center justify-between">

<div className="flex space-x-3 items-center">
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-white drop-shadow-sm">PayFlow</span>
<span className="hidden sm:block text-xs text-blue-200/70 font-medium">Platform Features</span>
</div>
</div>

<nav aria-label="Primary" className="hidden lg:flex items-center space-x-1">
<a className="flex items-center space-x-2 px-4 py-2 text-sm rounded-lg hover:bg-white/10 hover:text-white transition text-gray-300" href="#">
<iconify-icon height="20" icon="solar:widget-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
<span>Product</span>
</a>
<a className="flex items-center space-x-2 px-4 py-2 text-sm rounded-lg hover:bg-white/10 hover:text-white transition text-gray-300" href="#">
<iconify-icon height="20" icon="solar:card-transfer-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
<span>Integrations</span>
</a>
<a className="flex items-center space-x-2 px-4 py-2 text-sm rounded-lg hover:bg-white/10 hover:text-white transition text-white font-medium bg-white/10 ring-1 ring-white/20 shadow-inner" href="#">
<iconify-icon height="20" icon="solar:star-fall-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
<span>Features</span>
</a>
<a className="flex items-center space-x-2 px-4 py-2 text-sm rounded-lg hover:bg-white/10 hover:text-white transition text-gray-300" href="#">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
<span>Customers</span>
</a>
</nav>

<div className="hidden sm:flex items-center space-x-3">
<button className="flex items-center space-x-2 px-4 py-2 text-sm rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition text-gray-100 shadow-sm">
<iconify-icon height="20" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="hidden md:block">Updates</span>
</button>
<button className="flex hover:bg-blue-500 transition shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 text-sm text-white bg-gradient-to-r from-blue-500 to-indigo-600 border-t border-white/20 rounded-lg pt-2 pr-4 pb-2 pl-4 space-x-2 items-center font-medium">
<iconify-icon height="20" icon="solar:user-plus-linear" width="20"></iconify-icon>
<span>Get Started</span>
</button>
</div>

<button aria-expanded="false" className="relative z-30 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white sm:hidden hover:bg-white/20" id="mobileToggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<nav aria-hidden="true" aria-label="Mobile" className="absolute inset-x-0 top-0 z-40 hidden flex-col space-y-2 bg-slate-800/95 px-4 pb-8 pt-24 backdrop-blur-xl border-b border-white/10 sm:hidden transition-all duration-300 shadow-2xl" id="mobileNav">
<a className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-100 hover:bg-white/10 hover:ring-1 hover:ring-white/10 transition" href="#">
<iconify-icon height="24" icon="solar:widget-linear" width="24"></iconify-icon>
<span>Product</span>
</a>
<a className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-100 hover:bg-white/10 hover:ring-1 hover:ring-white/10 transition" href="#">
<iconify-icon height="24" icon="solar:card-transfer-linear" width="24"></iconify-icon>
<span>Integrations</span>
</a>
<a className="flex items-center space-x-3 rounded-lg px-4 py-3 text-white bg-white/10 ring-1 ring-white/20 transition" href="#">
<iconify-icon height="24" icon="solar:star-fall-linear" width="24"></iconify-icon>
<span>Features</span>
</a>
<div className="border-t border-white/10 pt-4">
<button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-500 transition font-medium shadow-lg shadow-blue-900/40">
<iconify-icon height="20" icon="solar:rocket-linear" width="20"></iconify-icon>
<span>Get Started</span>
</button>
</div>
</nav>

<main className="relative z-10 min-h-screen">

<section className="relative sm:px-6 lg:px-8 sm:pt-20 lg:pt-32 pt-16 pr-4 pl-4 overflow-visible">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center pt-16 pb-12 sm:pt-20 sm:pb-20 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>

<div className="reveal-on-scroll inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
<span className="text-xs font-semibold text-blue-200 uppercase tracking-wide">v2.4 Release Note</span>
</div>

<h1 className="reveal-on-scroll stagger-1 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1] drop-shadow-2xl">
              Everything you need to <br className="hidden sm:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 drop-shadow-[0_0_20px_rgba(167,139,250,0.3)]">master your revenue.</span>
</h1>

<p className="reveal-on-scroll stagger-2 text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              From recurring billing to automated reconciliation. We provide the financial infrastructure for the internet's most ambitious companies.
            </p>

<div className="reveal-on-scroll stagger-3 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
<button className="group flex hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 text-white bg-blue-600 rounded-full pt-4 pr-8 pb-4 pl-8 border border-blue-400/20 space-x-2 items-center font-semibold text-sm">
<span>Start Building</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="flex items-center space-x-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-gray-100 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition font-medium text-sm backdrop-blur-md">
<iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
<span>Watch Product Tour</span>
</button>
</div>

<div className="reveal-on-scroll stagger-4 w-full border-t border-white/10 pt-10">
<p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-6">Trusted by 10,000+ companies</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="drop-shadow-lg" height="30" icon="logos:google" width="96"></iconify-icon>
<iconify-icon className="drop-shadow-lg" height="30" icon="logos:stripe" width="80"></iconify-icon>
<iconify-icon className="drop-shadow-lg" height="24" icon="logos:openai" width="96"></iconify-icon>
<iconify-icon className="drop-shadow-lg" height="30" icon="logos:microsoft" width="96"></iconify-icon>
<iconify-icon className="drop-shadow-lg" height="36" icon="logos:anthropic-icon" width="36"></iconify-icon>
<iconify-icon className="drop-shadow-lg" height="24" icon="logos:vercel" width="96"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 sm:pt-16 lg:pt-24 pt-12 pr-4 pb-12 pl-4">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal-on-scroll">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4 drop-shadow-lg">Core Capabilities</h2>
<p className="text-gray-300 max-w-2xl text-lg">Powerful primitives to build your ideal payment workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="reveal-on-scroll md:col-span-2 bg-slate-800/40 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 backdrop-blur-sm">

<div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center mb-6 text-blue-300 ring-1 ring-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="28" icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Real-time Revenue Intelligence</h3>
<p className="text-gray-300 text-sm max-w-md leading-relaxed">Track MRR, churn, and LTV with second-by-second accuracy. Visualize complex data streams instantly.</p>
</div>

<div className="absolute right-0 bottom-0 w-[60%] h-[70%] border-t border-l border-white/15 bg-slate-800/80 rounded-tl-2xl p-5 shadow-2xl translate-y-4 translate-x-4 group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-500 backdrop-blur-md">
<div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
<span className="text-xs text-gray-400 font-medium uppercase">Net Revenue</span>
<span className="text-xs text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
<iconify-icon height="12" icon="solar:trending-up-linear" width="12"></iconify-icon> +22.4%
                            </span>
</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-2xl font-bold text-white tracking-tight">$2,845,920</span>
<span className="text-xs text-gray-400">USD</span>
</div>

<div className="flex items-end gap-2 h-24 w-full">
<div className="w-full bg-blue-500/30 rounded-t h-[40%] hover:bg-blue-400/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all"></div>
<div className="w-full bg-blue-500/30 rounded-t h-[65%] hover:bg-blue-400/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all"></div>
<div className="w-full bg-blue-500/30 rounded-t h-[50%] hover:bg-blue-400/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all"></div>
<div className="w-full bg-blue-400/60 rounded-t h-[85%] animate-pulse shadow-[0_0_15px_rgba(96,165,250,0.3)]"></div>
<div className="w-full bg-blue-500/30 rounded-t h-[60%] hover:bg-blue-400/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all"></div>
</div>
</div>
</div>

<div className="reveal-on-scroll stagger-1 bg-slate-800/40 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-400/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500 backdrop-blur-sm">
<div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center mb-6 text-purple-300 ring-1 ring-purple-400/30 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="28" icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Fraud Shield AI</h3>
<p className="text-gray-300 text-sm leading-relaxed">Machine learning models that detect anomalies before transactions settle.</p>
<div className="mt-8 space-y-3 relative z-10">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">
<div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 shrink-0 ring-1 ring-emerald-500/20">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white text-xs font-medium">Txn #992-441</span>
<span className="text-emerald-300 text-[10px]">Verified Safe</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm hover:bg-red-500/15 transition-colors">
<div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-300 shrink-0 ring-1 ring-red-500/20">
<iconify-icon height="16" icon="solar:danger-triangle-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white text-xs font-medium">Txn #992-442</span>
<span className="text-red-300 text-[10px]">Blocked (IP Mismatch)</span>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll stagger-2 bg-slate-800/40 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-400/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 backdrop-blur-sm">
<div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center mb-6 text-emerald-300 ring-1 ring-emerald-400/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="28" icon="solar:refresh-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Smart Retries</h3>
<p className="text-gray-300 text-sm leading-relaxed">Recover lost revenue automatically with optimal retry logic.</p>
<div className="absolute bottom-8 right-8">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] backdrop-blur-md">
<span className="text-2xl font-bold text-white">14%</span>
<span className="text-xs text-emerald-300 leading-tight">Uplift in<br/>recovery</span>
</div>
</div>
</div>

<div className="reveal-on-scroll md:col-span-2 bg-slate-800/40 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-orange-400/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] transition-all duration-500 backdrop-blur-sm">
<div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-6 text-orange-300 ring-1 ring-orange-400/30 shadow-[0_0_15px_rgba(249,115,22,0.15)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="28" icon="solar:globe-linear" width="28"></iconify-icon>
</div>
<div className="relative z-10 max-w-lg">
<h3 className="text-xl font-semibold text-white mb-2">Global Infrastructure</h3>
<p className="text-gray-300 text-sm leading-relaxed">Accept payments in 135+ currencies. Settle in your local currency without the FX headache.</p>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-0 sm:right-8 flex flex-col gap-3">
<div className="flex items-center gap-4 bg-slate-700/80 p-3 rounded-xl border border-white/15 w-48 shadow-lg backdrop-blur-md group-hover:translate-x-[-10px] transition-transform duration-500 delay-75">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg shadow-inner">🇺🇸</div>
<div>
<div className="text-white text-xs font-bold">USD Balance</div>
<div className="text-gray-300 text-[10px]">$42,000.00</div>
</div>
</div>
<div className="flex items-center gap-4 bg-slate-700/80 p-3 rounded-xl border border-white/15 w-48 shadow-lg backdrop-blur-md opacity-80 group-hover:translate-x-[-10px] transition-transform duration-500 delay-100">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg shadow-inner">🇪🇺</div>
<div>
<div className="text-white text-xs font-bold">EUR Balance</div>
<div className="text-gray-300 text-[10px]">€18,450.00</div>
</div>
</div>
<div className="flex items-center gap-4 bg-slate-700/80 p-3 rounded-xl border border-white/15 w-48 shadow-lg backdrop-blur-md opacity-60 group-hover:translate-x-[-10px] transition-transform duration-500 delay-150">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg shadow-inner">🇬🇧</div>
<div>
<div className="text-white text-xs font-bold">GBP Balance</div>
<div className="text-gray-300 text-[10px]">£6,200.00</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 pt-12 pb-24 pr-4 pl-4 border-t border-white/10">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center mb-32 reveal-on-scroll">
<div className="md:w-1/2 space-y-6">
<div className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
<iconify-icon height="16" icon="solar:bolt-linear" width="16"></iconify-icon>
<span>Developer First</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">API that developers love.</h2>
<p className="text-gray-300 text-lg leading-relaxed">
                        Integrate in minutes, not weeks. Our robust REST API comes with typed SDKs for Node, Python, and Go. Sandbox environments allow you to test safely before going live.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-gray-200">
<iconify-icon className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>99.999% Uptime SLA</span>
</li>
<li className="flex items-center gap-3 text-gray-200">
<iconify-icon className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Idempotent requests</span>
</li>
<li className="flex items-center gap-3 text-gray-200">
<iconify-icon className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Webhooks &amp; Events API</span>
</li>
</ul>
</div>
<div className="md:w-1/2 w-full">
<div className="rounded-2xl border border-white/15 bg-slate-900/80 p-6 shadow-2xl shadow-blue-900/10 font-mono text-sm leading-relaxed text-blue-100 overflow-x-auto backdrop-blur-xl group hover:border-blue-500/30 transition-colors duration-500">
<div className="absolute inset-0 bg-blue-500/5 blur-3xl -z-10"></div>
<div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
<div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
<span className="ml-2 text-xs text-gray-400">payment_intent.js</span>
</div>
<pre><code><span className="text-purple-300">const</span> payflow = <span className="text-blue-300">require</span>(<span className="text-emerald-300">'payflow-node'</span>)(<span className="text-emerald-300">'sk_test_...'</span>);

<span className="text-gray-500">// Create a payment intent</span>
<span className="text-purple-300">const</span> payment = <span className="text-purple-300">await</span> payflow.charges.<span className="text-blue-300">create</span>({
  amount: <span className="text-orange-300">2400</span>,
  currency: <span className="text-emerald-300">'usd'</span>,
  customer: <span className="text-emerald-300">'cus_N924aa...'</span>,
  metadata: {
    order_id: <span className="text-emerald-300">'6735'</span>
  }
});

<span className="text-gray-500">// Confirm success</span>
console.<span className="text-blue-300">log</span>(payment.status); <span className="text-gray-500">// 'succeeded'</span></code></pre>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row-reverse gap-12 lg:gap-20 items-center reveal-on-scroll">
<div className="md:w-1/2 space-y-6">
<div className="inline-flex items-center gap-2 text-emerald-300 font-semibold text-sm uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
<iconify-icon height="16" icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon>
<span>Team Management</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">Built for your entire org.</h2>
<p className="text-gray-300 text-lg leading-relaxed">
                        Granular permissions ensure the right people have access. Developers handle the API, Finance manages reconciliation, and Support handles refunds—all in one place.
                    </p>
<div className="flex gap-4 pt-4">
<button className="text-white text-sm font-medium border-b border-emerald-500 pb-0.5 hover:text-emerald-400 hover:border-emerald-400 transition shadow-[0_4px_10px_-4px_rgba(16,185,129,0.3)]">View Documentation</button>
</div>
</div>
<div className="md:w-1/2 w-full">
<div className="bg-slate-800/40 backdrop-blur-xl border border-white/15 rounded-2xl p-6 relative shadow-2xl hover:border-emerald-500/30 transition-colors duration-500">

<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 mb-3 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-[1px] shadow-lg">
<div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">JD</div>
</div>
<div>
<div className="text-white text-sm font-medium">John Doe</div>
<div className="text-gray-400 text-xs">Engineering Lead</div>
</div>
</div>
<span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md border border-blue-500/20 shadow-[0_0_8px_rgba(59,130,246,0.1)]">Admin</span>
</div>

<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 mb-3 opacity-90 hover:opacity-100 transition-all">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-400 p-[1px] shadow-lg">
<div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">AS</div>
</div>
<div>
<div className="text-white text-sm font-medium">Sarah Smith</div>
<div className="text-gray-400 text-xs">Finance Controller</div>
</div>
</div>
<span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md border border-purple-500/20 shadow-[0_0_8px_rgba(168,85,247,0.1)]">Viewer</span>
</div>

<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 opacity-70 hover:opacity-100 transition-all">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-lime-400 p-[1px] shadow-lg">
<div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">MK</div>
</div>
<div>
<div className="text-white text-sm font-medium">Mike K.</div>
<div className="text-gray-400 text-xs">Support Agent</div>
</div>
</div>
<span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-md border border-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.1)]">Limited</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 pb-24 pt-12 pr-4 pl-4" data-billing="monthly">
<div className="max-w-4xl mx-auto">
<div className="relative rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-br from-slate-800 to-slate-900 p-12 text-center reveal-on-scroll shadow-2xl shadow-blue-900/20">
<div className="absolute inset-0 bg-noise opacity-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/10 blur-[80px] -z-10"></div>
<div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[60px]"></div>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-inter drop-shadow-md">
                Ready to optimize your cash flow?
            </h3>
<p className="text-gray-200 font-light max-w-xl mx-auto mb-8 text-lg">
                Join 10,000+ businesses using PayFlow to automate finance. Set up your account in less than 5 minutes.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
<button className="hover:bg-blue-500 transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:-translate-y-1 font-semibold text-white bg-blue-600 rounded-xl px-8 py-4 border-t border-white/20 flex items-center justify-center gap-2">
<span>Start Free Trial</span>
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="bg-white/5 border border-white/15 text-white font-medium rounded-xl px-8 py-4 hover:bg-white/10 hover:border-white/30 transition-all shadow-lg">
                    Contact Sales
                </button>
</div>
<p className="mt-6 text-xs text-gray-400 font-medium">No credit card required. 14-day free trial.</p>
</div>
</div>
</section>

<footer className="sm:px-6 lg:px-8 sm:pt-16 pt-12 pr-4 pb-8 pl-4 border-t border-white/10 bg-slate-900/80 backdrop-blur-md reveal-on-scroll">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

<div className="col-span-2 md:col-span-1">
<div className="flex flex-col mb-6">
<span className="text-xl font-bold tracking-tight text-white">PayFlow</span>
<span className="text-sm text-gray-400 font-medium">Infrastructure for Internet Business</span>
</div>
<div className="flex items-center space-x-4">
<a className="text-gray-400 hover:text-white transition hover:scale-110" href="#">
<iconify-icon className="grayscale hover:grayscale-0 transition" height="20" icon="logos:twitter" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition hover:scale-110" href="#">
<iconify-icon className="grayscale hover:grayscale-0 transition" height="20" icon="logos:github-icon" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition hover:scale-110" href="#">
<iconify-icon className="grayscale hover:grayscale-0 transition" height="20" icon="logos:linkedin-icon" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">Payments</a></li>
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">Billing</a></li>
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">Connect</a></li>
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">Payouts</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-semibold mb-4">Developers</h4>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">Documentation</a></li>
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">API Reference</a></li>
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">Status</a></li>
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">SDKs</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">About</a></li>
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">Blog</a></li>
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">Careers</a></li>
<li><a className="text-gray-400 hover:text-blue-400 transition text-sm" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
<p className="text-gray-500 text-sm">
            © 2024 PayFlow Inc. All rights reserved.
          </p>
<div className="flex items-center space-x-6 mt-4 md:mt-0">
<a className="text-gray-500 hover:text-white transition text-sm" href="#">Privacy</a>
<a className="text-gray-500 hover:text-white transition text-sm" href="#">Terms</a>
<a className="text-gray-500 hover:text-white transition text-sm" href="#">Security</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}

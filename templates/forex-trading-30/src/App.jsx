import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');
        
        menuBtn?.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            navLinks.classList.toggle('flex-col');
            navLinks.classList.toggle('absolute');
            navLinks.classList.toggle('top-16');
            navLinks.classList.toggle('left-0');
            navLinks.classList.toggle('w-full');
            navLinks.classList.toggle('bg-neutral-950');
            navLinks.classList.toggle('p-6');
            navLinks.classList.toggle('border-b');
            navLinks.classList.toggle('border-white/10');
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    // Close mobile menu if open
                    if (navLinks.classList.contains('absolute')) {
                        menuBtn.click();
                    }
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="krvLrHX3sj3cg8BHywDj"></div>
</div>

<header className="relative z-10 sticky top-0 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5">
<nav className="flex max-w-7xl md:px-6 mx-auto pt-4 px-4 pb-4 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
<iconify-icon className="text-white text-xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight font-geist">QuantumFX</span>
</a>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden" id="menuBtn">
<iconify-icon className="h-5 w-5 text-white" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
<span className="sr-only font-geist">Open menu</span>
</button>
<div className="hidden items-center gap-8 md:flex" id="navLinks">
<a className="text-sm font-medium text-slate-300 hover:text-white font-geist transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-300 hover:text-white font-geist transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-300 hover:text-white font-geist transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-slate-300 hover:text-white font-geist transition-colors" href="#contact">Contact</a>
<div className="hidden h-6 w-px bg-white/10 md:block"></div>
<button className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors font-geist shadow-lg shadow-emerald-900/20">
                    Sign Up
                </button>
</div>
</nav>
</header>

<section className="relative z-10">
<div className="max-w-7xl md:px-6 md:pt-16 mr-auto ml-auto pt-10 pr-4 pb-20 pl-4">
<div className="max-w-4xl text-center mr-auto ml-auto">
<p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 font-geist">
<iconify-icon className="h-4 w-4" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
                    Fast execution • Trusted liquidity • 24/7 market access
                </p>
<h1 className="relative mx-auto text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]" style={{textShadow: '0 10px 40px rgba(0,0,0,0.55)'}}>
<span className="block">
<span className="font-light text-white tracking-tighter font-geist text-left">Trade Forex</span>
<span aria-hidden="true" className="relative inline-flex -translate-y-1 ring-1 ring-white/10 border-white/10 border rounded-2xl ml-2 pt-2 pr-2 pb-2 pl-2 shadow-2xl bg-neutral-900/50">
<span className="sm:h-12 sm:w-24 bg-center w-10 h-10 bg-[url('https://img.freepik.com/free-vector/business-success-growth-green-arrow-world-map_1017-45122.jpg?semt=ais_rp_progressive&amp;w=740&amp;q=80')] bg-cover rounded-lg pt-3 pr-3 pb-3 pl-3"></span>
</span>
</span>
<span className="block mt-2 sm:mt-3">
<span className="font-light text-neutral-50 tracking-tighter font-geist">with Confidence</span>
</span>
<span className="block mt-2 sm:mt-3">
<span className="text-emerald-400 font-geist font-light tracking-tighter">&amp; Zero Barriers</span>
</span>
</h1>
<p className="md:text-lg text-base text-slate-300 mt-8 max-w-2xl mx-auto font-geist leading-relaxed">
                    A powerful, intuitive forex trading platform built for speed, transparency, and low spreads — for beginners and pros alike.
                </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="w-full sm:w-auto inline-flex hover:bg-emerald-500 transition-colors text-sm font-medium text-white font-geist bg-emerald-600 rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 items-center justify-center shadow-lg shadow-emerald-900/20">
<iconify-icon className="mr-2 h-5 w-5" icon="solar:round-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
                        Start Trading Now
                    </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-200 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition-colors font-geist">
<iconify-icon className="mr-2 h-5 w-5" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
                        Learn More
                    </button>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-12 pb-24" id="features">
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-geist font-light tracking-tighter">
                    Why Traders Choose Us
                </h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto font-geist">
                    Everything you need to trade the global markets with a competitive edge.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-geist tracking-tight">Ultra-Fast Execution</h3>
<p className="text-sm text-slate-400 font-geist leading-relaxed">Lightning-fast order routing with absolutely no delays and no re-quotes during volatile markets.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-orange-400" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-geist tracking-tight">Global Liquidity Pools</h3>
<p className="text-sm text-slate-400 font-geist leading-relaxed">Direct access to top-tier liquidity providers ensuring the tightest possible spreads for major pairs.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-blue-400" icon="solar:devices-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-geist tracking-tight">Multi-Device Trading</h3>
<p className="text-sm text-slate-400 font-geist leading-relaxed">Seamlessly transition between our powerful web terminal, desktop app, and full-featured mobile app.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-purple-400" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-geist tracking-tight">Secure &amp; Regulated</h3>
<p className="text-sm text-slate-400 font-geist leading-relaxed">Bank-grade encryption, strict regulatory compliance, and segregated accounts to protect your funds.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 pb-24">
<div className="text-center mb-10 max-w-3xl mx-auto px-4">
<h2 className="text-3xl sm:text-4xl text-white mb-4 font-geist font-light tracking-tighter">Experience a Smarter Trading Interface</h2>
<p className="text-base text-slate-400 font-geist">Fully customizable layouts, advanced charting, and one-click execution right from the browser.</p>
</div>
<div className="max-w-7xl md:px-6 mr-auto ml-auto pr-4 pl-4">
<div className="relative w-full overflow-hidden bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl ring-1 ring-white/5">

<div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-[#111]">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-white font-geist">Live Account</span>
</div>
<div className="hidden sm:flex items-center gap-4 text-xs font-geist">
<div className="flex flex-col">
<span className="text-slate-500">Balance</span>
<span className="text-white font-medium">$24,580.00</span>
</div>
<div className="flex flex-col">
<span className="text-slate-500">Equity</span>
<span className="text-white font-medium">$25,120.50</span>
</div>
<div className="flex flex-col">
<span className="text-slate-500">Margin Level</span>
<span className="text-emerald-400 font-medium">840.5%</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10 font-geist">
<iconify-icon className="h-4 w-4" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                            Settings
                        </button>
<button className="rounded-md bg-emerald-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-emerald-500 font-geist shadow-md shadow-emerald-900/20">Deposit</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 h-[600px]">

<aside className="hidden lg:flex flex-col lg:col-span-3 border-r border-white/10 bg-[#0F0F0F]">
<div className="p-3 border-b border-white/10">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-[#1A1A1A] border border-white/5 rounded-md py-2 pl-9 pr-3 text-xs text-white focus:outline-none focus:border-emerald-500/50 font-geist" placeholder="Search symbols..." type="text"/>
</div>
<div className="flex gap-2 mt-3">
<button className="px-3 py-1 text-[11px] bg-[#2A2A2A] text-white rounded font-geist">Forex</button>
<button className="px-3 py-1 text-[11px] text-slate-400 hover:bg-[#1A1A1A] rounded font-geist">Crypto</button>
<button className="px-3 py-1 text-[11px] text-slate-400 hover:bg-[#1A1A1A] rounded font-geist">Metals</button>
</div>
</div>
<div className="flex-1 overflow-y-auto">

<div className="flex items-center justify-between p-3 border-b border-white/5 hover:bg-[#1A1A1A] cursor-pointer bg-[#1A1A1A] border-l-2 border-l-emerald-500">
<div>
<div className="text-sm font-medium text-white font-geist tracking-tight">EUR/USD</div>
<div className="text-[10px] text-slate-500 font-geist mt-0.5">Euro / US Dollar</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white font-geist">1.08542</div>
<div className="text-[10px] text-emerald-400 font-geist mt-0.5">+0.12%</div>
</div>
</div>
<div className="flex items-center justify-between p-3 border-b border-white/5 hover:bg-[#1A1A1A] cursor-pointer">
<div>
<div className="text-sm font-medium text-white font-geist tracking-tight">GBP/USD</div>
<div className="text-[10px] text-slate-500 font-geist mt-0.5">British Pound / USD</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white font-geist">1.26321</div>
<div className="text-[10px] text-red-400 font-geist mt-0.5">-0.05%</div>
</div>
</div>
<div className="flex items-center justify-between p-3 border-b border-white/5 hover:bg-[#1A1A1A] cursor-pointer">
<div>
<div className="text-sm font-medium text-white font-geist tracking-tight">USD/JPY</div>
<div className="text-[10px] text-slate-500 font-geist mt-0.5">US Dollar / Japanese Yen</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white font-geist">148.152</div>
<div className="text-[10px] text-emerald-400 font-geist mt-0.5">+0.34%</div>
</div>
</div>
<div className="flex items-center justify-between p-3 border-b border-white/5 hover:bg-[#1A1A1A] cursor-pointer">
<div>
<div className="text-sm font-medium text-white font-geist tracking-tight">XAU/USD</div>
<div className="text-[10px] text-orange-400 font-geist mt-0.5">Gold / US Dollar</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white font-geist">2024.15</div>
<div className="text-[10px] text-emerald-400 font-geist mt-0.5">+0.85%</div>
</div>
</div>
<div className="flex items-center justify-between p-3 border-b border-white/5 hover:bg-[#1A1A1A] cursor-pointer">
<div>
<div className="text-sm font-medium text-white font-geist tracking-tight">BTC/USD</div>
<div className="text-[10px] text-slate-500 font-geist mt-0.5">Bitcoin / US Dollar</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white font-geist">51,240.00</div>
<div className="text-[10px] text-emerald-400 font-geist mt-0.5">+2.40%</div>
</div>
</div>
</div>
</aside>

<main className="flex flex-col lg:col-span-6 border-r border-white/10 bg-[#0A0A0A] relative">

<div className="flex items-center justify-between border-b border-white/10 px-3 py-2 bg-[#111]">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-white font-geist tracking-tight mr-2">EUR/USD</span>
<div className="h-4 w-px bg-white/10 mx-1"></div>
<button className="px-2 py-1 rounded text-[11px] text-slate-400 hover:bg-[#2A2A2A] font-geist">M1</button>
<button className="px-2 py-1 rounded text-[11px] text-slate-400 hover:bg-[#2A2A2A] font-geist">M5</button>
<button className="px-2 py-1 rounded text-[11px] text-slate-400 hover:bg-[#2A2A2A] font-geist">M15</button>
<button className="px-2 py-1 rounded text-[11px] bg-[#2A2A2A] text-white font-geist">H1</button>
<button className="px-2 py-1 rounded text-[11px] text-slate-400 hover:bg-[#2A2A2A] font-geist">H4</button>
<button className="px-2 py-1 rounded text-[11px] text-slate-400 hover:bg-[#2A2A2A] font-geist">D1</button>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded hover:bg-[#2A2A2A] text-slate-400">
<iconify-icon className="text-sm" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-[#2A2A2A] text-slate-400">
<iconify-icon className="text-sm" icon="solar:ruler-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 relative overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMHptMzkuNSAwVjBIMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]">

<div className="absolute right-0 top-0 bottom-0 w-14 border-l border-white/5 bg-[#0A0A0A]/80 backdrop-blur flex flex-col justify-between py-8 text-[10px] text-slate-500 font-geist text-right pr-2">
<span>1.08700</span>
<span>1.08650</span>
<span>1.08600</span>
<span className="text-white bg-emerald-600/80 px-1 rounded -mr-2">1.08542</span>
<span>1.08500</span>
<span>1.08450</span>
<span>1.08400</span>
</div>

<div className="absolute inset-0 right-14 flex items-end justify-start gap-3 px-6 pb-20 pt-10">

<div className="relative w-2 h-[40%] flex justify-center mb-10"><div className="absolute w-px h-full bg-red-500 top-4"></div><div className="w-full h-1/2 bg-red-500 mt-6"></div></div>
<div className="relative w-2 h-[35%] flex justify-center mb-8"><div className="absolute w-px h-full bg-red-500 top-2"></div><div className="w-full h-2/3 bg-red-500 mt-4"></div></div>
<div className="relative w-2 h-[45%] flex justify-center mb-10"><div className="absolute w-px h-full bg-emerald-500 top-0"></div><div className="absolute bottom-0 w-full h-1/2 bg-emerald-500"></div></div>
<div className="relative w-2 h-[60%] flex justify-center mb-20"><div className="absolute w-px h-full bg-emerald-500 top-0"></div><div className="absolute bottom-8 w-full h-1/3 bg-emerald-500"></div></div>
<div className="relative w-2 h-[50%] flex justify-center mb-24"><div className="absolute w-px h-full bg-emerald-500 top-2"></div><div className="absolute bottom-10 w-full h-1/2 bg-emerald-500"></div></div>
<div className="relative w-2 h-[40%] flex justify-center mb-32"><div className="absolute w-px h-full bg-red-500 top-0"></div><div className="w-full h-3/4 bg-red-500 mt-2"></div></div>
<div className="relative w-2 h-[30%] flex justify-center mb-28"><div className="absolute w-px h-full bg-red-500 top-4"></div><div className="w-full h-2/3 bg-red-500 mt-8"></div></div>
<div className="relative w-2 h-[55%] flex justify-center mb-28"><div className="absolute w-px h-full bg-emerald-500 top-0"></div><div className="absolute bottom-4 w-full h-[40%] bg-emerald-500"></div></div>
<div className="relative w-2 h-[70%] flex justify-center mb-36"><div className="absolute w-px h-full bg-emerald-500 top-0"></div><div className="absolute bottom-12 w-full h-1/4 bg-emerald-500"></div></div>
<div className="relative w-2 h-[45%] flex justify-center mb-48"><div className="absolute w-px h-full bg-emerald-500 top-2"></div><div className="absolute bottom-6 w-full h-[60%] bg-emerald-500"></div></div>

<div className="absolute right-0 left-0 border-t border-dashed border-emerald-500/50" style={{bottom: '45%'}}></div>
</div>
</div>

<div className="h-40 border-t border-white/10 bg-[#0F0F0F] flex flex-col">
<div className="flex gap-4 px-4 pt-2 border-b border-white/5">
<button className="text-[11px] font-medium text-white pb-2 border-b-2 border-emerald-500 font-geist">Positions (2)</button>
<button className="text-[11px] text-slate-400 hover:text-white pb-2 font-geist">Orders (1)</button>
<button className="text-[11px] text-slate-400 hover:text-white pb-2 font-geist">History</button>
</div>
<div className="flex-1 overflow-y-auto p-2">
<table className="w-full text-left text-[11px] text-slate-300 font-geist">
<thead className="text-slate-500">
<tr>
<th className="font-normal px-2 py-1">Symbol</th>
<th className="font-normal px-2 py-1">Type</th>
<th className="font-normal px-2 py-1">Volume</th>
<th className="font-normal px-2 py-1">Open Price</th>
<th className="font-normal px-2 py-1 text-right">Profit</th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-white/5">
<td className="px-2 py-1.5 font-medium text-white">GBP/USD</td>
<td className="px-2 py-1.5 text-emerald-400">Buy</td>
<td className="px-2 py-1.5">1.50</td>
<td className="px-2 py-1.5">1.26110</td>
<td className="px-2 py-1.5 text-right text-emerald-400">+$315.50</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-2 py-1.5 font-medium text-white">USD/JPY</td>
<td className="px-2 py-1.5 text-red-400">Sell</td>
<td className="px-2 py-1.5">0.50</td>
<td className="px-2 py-1.5">148.500</td>
<td className="px-2 py-1.5 text-right text-emerald-400">+$225.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>

<aside className="hidden lg:flex flex-col lg:col-span-3 bg-[#0F0F0F] p-4">
<div className="mb-4">
<h3 className="text-sm font-semibold text-white font-geist tracking-tight mb-1">New Order</h3>
<div className="text-[11px] text-slate-400 font-geist">EUR/USD - Euro / US Dollar</div>
</div>

<div className="flex p-1 bg-[#1A1A1A] rounded-lg mb-4">
<button className="flex-1 py-1.5 text-xs font-medium bg-[#2A2A2A] text-white rounded shadow font-geist">Market</button>
<button className="flex-1 py-1.5 text-xs font-medium text-slate-400 hover:text-white font-geist">Limit</button>
<button className="flex-1 py-1.5 text-xs font-medium text-slate-400 hover:text-white font-geist">Stop</button>
</div>
<div className="space-y-4 flex-1">

<div>
<div className="flex justify-between text-[10px] text-slate-400 mb-1.5 font-geist">
<span>Volume (Lots)</span>
</div>
<div className="flex items-center bg-[#1A1A1A] border border-white/10 rounded-lg overflow-hidden">
<button className="px-3 py-2 text-slate-400 hover:bg-white/5 transition-colors">−</button>
<input className="w-full bg-transparent text-center text-sm text-white focus:outline-none font-geist py-2" readonly="" type="text" value="1.00"/>
<button className="px-3 py-2 text-slate-400 hover:bg-white/5 transition-colors">+</button>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div>
<div className="text-[10px] text-slate-400 mb-1.5 font-geist">Stop Loss</div>
<input className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg py-2 px-3 text-xs text-white focus:outline-none focus:border-emerald-500/50 font-geist" placeholder="Price" type="text"/>
</div>
<div>
<div className="text-[10px] text-slate-400 mb-1.5 font-geist">Take Profit</div>
<input className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg py-2 px-3 text-xs text-white focus:outline-none focus:border-emerald-500/50 font-geist" placeholder="Price" type="text"/>
</div>
</div>

<div className="flex justify-between items-center text-[10px] text-slate-500 border-y border-white/5 py-3 font-geist">
<span>Spread: <span className="text-white">0.2 pips</span></span>
<span>Margin: <span className="text-white">$217.08</span></span>
</div>
</div>

<div className="mt-4 grid grid-cols-2 gap-3">
<button className="flex flex-col items-center justify-center py-3 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 rounded-lg transition-colors group">
<span className="text-[11px] text-red-400 font-medium font-geist mb-0.5">Sell by Market</span>
<span className="text-lg font-semibold text-white group-hover:text-red-100 font-geist tracking-tight">1.08542</span>
</button>
<button className="flex flex-col items-center justify-center py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-lg shadow-emerald-900/20">
<span className="text-[11px] text-emerald-100 font-medium font-geist mb-0.5">Buy by Market</span>
<span className="text-lg font-semibold text-white font-geist tracking-tight">1.08544</span>
</button>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-16 pb-24 border-t border-white/5 bg-neutral-900/20" id="how-it-works">
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="text-center mb-16">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 font-geist">
<iconify-icon className="h-4 w-4 text-emerald-400" icon="solar:round-transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
                    Fast &amp; Simple Onboarding
                </p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-geist font-light tracking-tighter">
                    Trade in 3 Simple Steps
                </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white mb-5 font-geist">1</span>
<h3 className="text-2xl text-white mb-2 font-geist font-light tracking-tight">Create Your Account</h3>
<p className="text-sm text-slate-400 font-geist mb-6">Quick sign-up &amp; verification process. Get approved in minutes, not days.</p>

<div className="relative rounded-lg border border-white/10 bg-neutral-900/80 p-5 mt-auto">
<div className="space-y-3">
<div className="h-8 bg-white/5 rounded border border-white/5 flex items-center px-3"><div className="w-1/2 h-2 bg-white/20 rounded"></div></div>
<div className="h-8 bg-white/5 rounded border border-white/5 flex items-center px-3"><div className="w-2/3 h-2 bg-white/20 rounded"></div></div>
<div className="h-8 bg-emerald-600 rounded flex items-center justify-center"><div className="w-1/3 h-2 bg-white/80 rounded"></div></div>
</div>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500"></div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white mb-5 font-geist">2</span>
<h3 className="text-2xl text-white mb-2 font-geist font-light tracking-tight">Fund Your Wallet</h3>
<p className="text-sm text-slate-400 font-geist mb-6">Deposit funds securely via Bank Transfer, Credit Card, or Crypto with zero fees.</p>

<div className="relative rounded-lg border border-white/10 bg-neutral-900/80 p-5 mt-auto">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><iconify-icon className="text-slate-400" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon></div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><iconify-icon className="text-slate-400" icon="solar:banknotes-linear" strokeWidth="1.5"></iconify-icon></div>
<div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center"><iconify-icon className="text-emerald-400" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon></div>
</div>
<div className="h-10 border border-dashed border-white/20 rounded flex items-center justify-center">
<span className="text-xs text-slate-500 font-geist">Select Payment Method</span>
</div>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white mb-5 font-geist">3</span>
<h3 className="text-2xl text-white mb-2 font-geist font-light tracking-tight">Start Trading</h3>
<p className="text-sm text-slate-400 font-geist mb-6">Access forex, indices, metals &amp; more from our award-winning platforms.</p>

<div className="relative rounded-lg border border-white/10 bg-neutral-900/80 p-5 mt-auto h-[120px] flex items-end gap-2 overflow-hidden justify-center">
<div className="w-3 bg-emerald-500/40 rounded-t h-[40%] relative"><div className="absolute w-px h-10 -top-4 bg-emerald-500 left-1/2"></div></div>
<div className="w-3 bg-emerald-500/70 rounded-t h-[60%] relative"><div className="absolute w-px h-12 -top-6 bg-emerald-500 left-1/2"></div></div>
<div className="w-3 bg-red-500/70 rounded-t h-[30%] relative"><div className="absolute w-px h-8 -top-4 bg-red-500 left-1/2"></div></div>
<div className="w-3 bg-emerald-500 rounded-t h-[80%] relative"><div className="absolute w-px h-14 -top-6 bg-emerald-500 left-1/2"></div></div>
<div className="w-3 bg-emerald-500/90 rounded-t h-[95%] relative"><div className="absolute w-px h-8 -top-4 bg-emerald-500 left-1/2"></div></div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors font-geist shadow-lg shadow-emerald-900/20">
<iconify-icon className="mr-2 h-5 w-5" icon="solar:chart-line-up-linear" strokeWidth="1.5"></iconify-icon>
                    Create Your Free Account
                </button>
</div>
</div>
</section>

<section className="relative z-10 pt-24">
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-geist font-light tracking-tighter">
                    Trusted by Thousands of Traders Globally
                </h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto font-geist">
                    Join a growing community of traders who rely on our platform for their daily market operations.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] ring-1 ring-white/10 shadow-lg relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
<p className="text-2xl md:text-3xl text-white/90 leading-relaxed tracking-tight font-geist font-light">
                        "Fast execution and transparent pricing make this my go-to platform! I've traded with many brokers, but the 
                        <span className="text-emerald-400 font-medium">tight spreads</span> and 
                        <span className="text-emerald-400 font-medium">reliability</span> here are unmatched."
                    </p>
<div className="mt-8 text-slate-400 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="" className="h-12 w-12 rounded-full object-cover border-2 border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-base text-white font-geist font-medium">Sarah Jenkins</div>
<div className="text-xs text-slate-500 font-geist flex items-center gap-1 mt-0.5">
<iconify-icon className="text-emerald-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
                                    Verified Trader
                                </div>
</div>
</div>
<div className="hidden sm:flex items-center gap-1 text-orange-400">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] ring-1 ring-white/10 shadow-lg flex flex-col justify-between">
<div className="">
<div className="flex items-center gap-1 mb-4 text-orange-400">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6 font-geist">
                            "The platform is incredibly stable during high-impact news. I never worry about slippage tearing apart my strategies anymore."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">M</div>
<div>
<div className="text-sm text-white font-geist font-medium">Marcus T.</div>
<div className="text-[11px] text-slate-500 font-geist">Day Trader</div>
</div>
</div>
</div>

<div className="lg:col-span-3 border-t border-white/10 pt-10 mt-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<div className="text-3xl md:text-4xl text-white tracking-tight font-geist font-semibold">+15,000</div>
<div className="text-sm text-slate-400 font-geist mt-2">Active Accounts</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl text-white tracking-tight font-geist font-semibold">50M+</div>
<div className="text-sm text-slate-400 mt-2 font-geist">Trades Executed</div>
</div>
<div className="text-center">
<div className="md:text-4xl text-3xl font-semibold text-white tracking-tight font-geist">20ms</div>
<div className="text-sm text-slate-400 mt-2 font-geist">Execution Delay</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl text-white tracking-tight font-geist font-semibold">24/7</div>
<div className="text-sm text-slate-400 mt-2 font-geist">Expert Support</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-24 pb-12">
<div className="max-w-4xl md:px-6 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl text-white mb-4 font-geist font-light tracking-tighter">
                    Common Questions
                </h2>
<p className="text-base text-slate-400 font-geist">
                    Everything you need to know about trading with QuantumFX.
                </p>
</div>
<div className="space-y-4">
<details className="group border border-white/10 bg-white/[0.02] rounded-xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer" open="">
<summary className="flex items-center justify-between font-medium text-white text-lg font-geist outline-none">
                        What's the minimum deposit?
                        <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm font-geist leading-relaxed">
                        You can open a live trading account with as little as $10. We believe in providing accessible markets to everyone, allowing you to start small and scale your trading strategy at your own pace.
                    </p>
</details>
<details className="group border border-white/10 bg-white/[0.02] rounded-xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer">
<summary className="flex items-center justify-between font-medium text-white text-lg font-geist outline-none">
                        Which instruments can I trade?
                        <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm font-geist leading-relaxed">
                        Our platform offers over 150+ trading instruments including major, minor, and exotic forex pairs, precious metals (Gold, Silver), global indices, and popular cryptocurrencies.
                    </p>
</details>
<details className="group border border-white/10 bg-white/[0.02] rounded-xl p-6 open:bg-white/[0.04] transition-colors cursor-pointer">
<summary className="flex items-center justify-between font-medium text-white text-lg font-geist outline-none">
                        How secure are my funds?
                        <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="mt-4 text-slate-400 text-sm font-geist leading-relaxed">
                        Extremely secure. Client funds are kept in fully segregated accounts at top-tier banks. We use advanced encryption for all transactions and are fully compliant with stringent international regulatory frameworks.
                    </p>
</details>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 mt-12 bg-neutral-900/20" id="contact">
<div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-10 md:p-16 text-center shadow-2xl">
<div className="mx-auto max-w-3xl">
<h2 className="text-3xl md:text-5xl text-white font-geist font-light tracking-tighter">Ready to Start Trading?</h2>
<p className="mt-4 text-base text-slate-400 font-geist">Join the future of forex trading today. Fast execution, tight spreads, and a platform built for your success.</p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto inline-flex gap-2 hover:bg-emerald-500 shadow-emerald-900/30 transition-all hover:-translate-y-0.5 text-sm font-semibold text-white font-geist bg-emerald-600 w-full rounded-lg pt-4 pr-8 pb-4 pl-8 shadow-lg gap-x-2 gap-y-2 items-center justify-center">Sign Up Now — It's Free</button>
<button className="sm:w-auto inline-flex gap-2 hover:bg-white/10 transition-all hover:-translate-y-0.5 text-sm font-medium text-slate-200 font-geist bg-white/5 w-full border-white/15 border rounded-lg pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center">Demo Account Available</button>
</div>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-between gap-6 md:flex-row text-xs text-slate-500">
<div className="flex items-center gap-2 font-geist">
<div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center opacity-80">
<iconify-icon className="text-white text-sm" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span>© 2024 QuantumFX Trading. All rights reserved.</span>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="hover:text-white transition-colors font-geist" href="#">Terms &amp; Conditions</a>
<a className="hover:text-white transition-colors font-geist" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-geist" href="#">Risk Disclosure</a>
<a className="hover:text-white transition-colors font-geist" href="#">Support</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:hashtag-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}

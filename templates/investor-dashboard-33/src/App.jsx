import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Tab Switching Logic
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if(!btn.hasAttribute('data-target')) return;

                const targetId = btn.getAttribute('data-target');

                // 1. Reset all buttons visually
                tabBtns.forEach(b => {
                    if(b.hasAttribute('data-target')) {
                        b.classList.remove('bg-[#c6a859]', 'text-[#0b1c2d]', 'shadow-[0_0_15px_rgba(198,168,89,0.4)]');
                        b.classList.add('text-slate-500', 'hover:text-slate-300', 'hover:bg-white/5');
                        b.classList.remove('active');
                    }
                });

                // 2. Set active button visually
                btn.classList.add('bg-[#c6a859]', 'text-[#0b1c2d]', 'shadow-[0_0_15px_rgba(198,168,89,0.4)]');
                btn.classList.remove('text-slate-500', 'hover:text-slate-300', 'hover:bg-white/5');
                btn.classList.add('active');

                // 3. Hide all contents
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                    content.classList.remove('block');
                });

                // 4. Show target content
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.remove('hidden');
                    targetContent.classList.add('block');
                    
                    // Trigger animation again if chart is shown
                    if(targetId === 'dashboard') {
                        const path = document.querySelector('.path-animate');
                        if(path) {
                            path.style.animation = 'none';
                            path.offsetHeight; /* trigger reflow */
                            path.style.animation = null; 
                        }
                    }
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-20 lg:w-24 flex-shrink-0 flex flex-col items-center py-6 bg-[#0d1e30] border-r border-white/5 relative z-20 h-full">

<div className="mb-8">
<div className="w-10 h-10 rounded-xl bg-[#c6a859]/10 border border-[#c6a859]/20 flex items-center justify-center text-[#c6a859]">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
</div>

<nav className="flex-1 w-full flex flex-col items-center gap-4">
<button className="tab-btn active p-3.5 rounded-2xl bg-[#c6a859] text-[#0b1c2d] shadow-[0_0_15px_rgba(198,168,89,0.4)] transition-all group relative" data-target="dashboard">
<iconify-icon className="text-xl" icon="solar:widget-linear"></iconify-icon>
<span className="absolute left-16 bg-[#1b3552] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity font-medium whitespace-nowrap z-50">Dashboard</span>
</button>
<button className="tab-btn p-3.5 rounded-2xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all group relative" data-target="portfolio">
<iconify-icon className="text-xl" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="absolute left-16 bg-[#1b3552] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity font-medium whitespace-nowrap z-50">Portfolio</span>
</button>
<button className="tab-btn p-3.5 rounded-2xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all group relative" data-target="market">
<iconify-icon className="text-xl" icon="solar:bag-linear"></iconify-icon>
<span className="absolute left-16 bg-[#1b3552] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity font-medium whitespace-nowrap z-50">Market</span>
</button>
<button className="tab-btn p-3.5 rounded-2xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all group relative" data-target="history">
<iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon>
<span className="absolute left-16 bg-[#1b3552] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity font-medium whitespace-nowrap z-50">History</span>
</button>
<button className="tab-btn p-3.5 rounded-2xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all group relative" data-target="calculator">
<iconify-icon className="text-xl" icon="solar:calculator-linear"></iconify-icon>
<span className="absolute left-16 bg-[#1b3552] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity font-medium whitespace-nowrap z-50">Calculator</span>
</button>
</nav>

<div className="mt-auto flex flex-col gap-4 w-full items-center">
<button className="p-3.5 rounded-2xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</button>
<button className="p-3.5 rounded-2xl text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-all">
<iconify-icon className="text-xl" icon="solar:logout-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#c6a859]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

<header className="h-24 px-8 lg:px-10 flex items-center justify-between relative z-10 flex-shrink-0">

<div className="relative group flex items-center">
<iconify-icon className="absolute left-4 text-slate-500 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border border-transparent hover:border-white/10 focus:border-white/20 rounded-2xl pl-12 pr-24 py-3 text-base text-white placeholder-slate-500 focus:outline-none transition-all w-64 lg:w-80 bg-white/[0.02]" placeholder="Search" type="text"/>
<div className="absolute right-3 px-2 py-1 rounded-md border border-white/10 text-xs text-slate-500 font-medium bg-white/5">
                    ⌘ + Space
                </div>
</div>

<div className="flex items-center gap-4 lg:gap-6">
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:refresh-linear"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-white transition-colors relative">
<span className="absolute top-0 right-0 w-2 h-2 bg-[#c6a859] rounded-full border-2 border-[#0b1c2d]"></span>
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:moon-linear"></iconify-icon>
</button>

<div className="flex items-center gap-3 pl-4 border-l border-white/10 cursor-pointer group">
<img alt="Profile" className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#c6a859]/50 transition-all" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="hidden sm:block text-right">
<p className="text-base font-medium text-white leading-tight">Arthur Eld</p>
<p className="text-sm text-slate-500">@arthur_ipx</p>
</div>
<iconify-icon className="text-slate-500 text-sm hidden sm:block" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto px-8 lg:px-10 pb-10 relative z-10">

<div className="tab-content block h-full" id="dashboard">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 max-w-[1600px] mx-auto">

<div className="xl:col-span-8 space-y-6 lg:space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-[#11263c] rounded-[2rem] p-6 border border-white/[0.04] hover:border-[#c6a859]/20 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-2xl bg-[#c6a859]/10 text-[#c6a859] flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-lg">+12.5%</span>
</div>
<h3 className="text-sm text-slate-400 font-medium mb-1">Total Earnings (YTD)</h3>
<p className="text-2xl tracking-tight font-semibold text-white">$142,300.00</p>
</div>

<div className="bg-[#11263c] rounded-[2rem] p-6 border border-white/[0.04] hover:border-[#c6a859]/20 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-lg">+2.1%</span>
</div>
<h3 className="text-sm text-slate-400 font-medium mb-1">Active Assets</h3>
<div className="flex items-baseline gap-2">
<p className="text-2xl tracking-tight font-semibold text-white">24</p>
<p className="text-sm text-slate-500">units</p>
</div>
</div>

<div className="bg-[#11263c] rounded-[2rem] p-6 border border-white/[0.04] hover:border-[#c6a859]/20 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 bg-white/5 border border-white/10 px-2 py-1 rounded-lg">Stable</span>
</div>
<h3 className="text-sm text-slate-400 font-medium mb-1">Asset Health</h3>
<p className="text-2xl tracking-tight font-semibold text-white">98.5%</p>
</div>
</div>

<div className="bg-[#11263c] rounded-[2rem] p-6 lg:p-8 border border-white/[0.04] glow-gold relative overflow-hidden flex flex-col h-[360px]">

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#c6a859]/10 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-start relative z-10">
<div>
<h2 className="text-base text-slate-400 font-medium">Total IP Value</h2>
<div className="flex items-center gap-3 mt-1">
<span className="text-3xl tracking-tight font-semibold text-white">$4,250,000</span>
<span className="text-sm font-medium text-emerald-400 flex items-center bg-emerald-400/10 px-2 py-1 rounded-lg">
<iconify-icon className="text-sm mr-1" icon="solar:arrow-right-up-linear"></iconify-icon> 8.2%
                                        </span>
</div>
</div>
<div className="hidden sm:flex bg-[#0e2034] rounded-xl p-1 border border-white/5">
<button className="px-5 py-2 text-sm text-[#0b1c2d] bg-[#c6a859] rounded-lg font-medium shadow-sm transition-colors">1 year</button>
<button className="px-5 py-2 text-sm text-slate-400 hover:text-white rounded-lg transition-colors">6 month</button>
<button className="px-5 py-2 text-sm text-slate-400 hover:text-white rounded-lg transition-colors">3 month</button>
<button className="px-5 py-2 text-sm text-slate-400 hover:text-white rounded-lg transition-colors">1 month</button>
</div>
</div>

<div className="flex-1 mt-8 relative w-full flex items-end">

<div className="absolute right-0 top-0 bottom-8 flex flex-col justify-between text-xs text-slate-500 items-end pointer-events-none">
<span>$5M</span>
<span>$4M</span>
<span>$3M</span>
<span>$2M</span>
<span>$1M</span>
</div>

<div className="w-[calc(100%-40px)] h-full relative z-10">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 800 200">

<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#c6a859" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#c6a859" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,150 C50,140 100,180 150,160 C200,140 250,100 300,120 C350,140 400,80 450,100 C500,120 550,50 600,70 C650,90 700,40 750,50 L800,20 L800,200 L0,200 Z" fill="url(#chartGradient)"></path>

<path className="path-animate" d="M0,150 C50,140 100,180 150,160 C200,140 250,100 300,120 C350,140 400,80 450,100 C500,120 550,50 600,70 C650,90 700,40 750,50 L800,20" fill="none" stroke="#c6a859" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>

<circle className="shadow-lg" cx="600" cy="70" fill="#0b1c2d" r="6" stroke="#c6a859" strokeWidth="3"></circle>

<line stroke="#cbd5e130" stroke-dasharray="4" strokeWidth="1" x1="600" x2="600" y1="70" y2="200"></line>
</svg>

<div className="absolute top-[10%] left-[75%] -translate-x-1/2 bg-white text-[#0b1c2d] px-4 py-3 rounded-2xl shadow-xl flex flex-col items-center">
<span className="text-sm font-medium flex items-center gap-1">Oct 24, 2024 <iconify-icon className="text-slate-400" icon="solar:arrow-right-up-linear"></iconify-icon></span>
<span className="text-base font-semibold tracking-tight">$3,850,000</span>

<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-[calc(100%-40px)] flex justify-between text-sm text-slate-500 pt-4 border-t border-white/5">
<span>Sep</span>
<span>Oct</span>
<span>Nov</span>
<span className="text-[#c6a859] font-medium">Dec</span>
<span>Jan</span>
<span>Feb</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-gradient-to-br from-[#8a7231]/80 to-[#11263c] rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between group cursor-pointer border border-[#c6a859]/20 h-[320px]">

<div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[#c6a859]/20 blur-3xl rounded-full"></div>
<div className="relative z-10">
<h3 className="text-2xl tracking-tight font-semibold text-white mb-3 leading-tight">Software Patents Trending High</h3>
<p className="text-base text-slate-300 leading-relaxed mb-6 font-medium">Secure, reliable, and verified by industry experts worldwide.</p>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-[#4a3d16] relative z-30" src="https://i.pravatar.cc/100?img=11"/>
<img className="w-10 h-10 rounded-full border-2 border-[#4a3d16] relative z-20" src="https://i.pravatar.cc/100?img=12"/>
<img className="w-10 h-10 rounded-full border-2 border-[#4a3d16] relative z-10" src="https://i.pravatar.cc/100?img=13"/>
<div className="w-10 h-10 rounded-full border-2 border-[#4a3d16] bg-[#c6a859] flex items-center justify-center text-[#0b1c2d] text-sm font-semibold relative z-0">+</div>
</div>
</div>
</div>
<button className="w-full bg-white text-[#0b1c2d] py-4 rounded-xl font-semibold text-base relative z-10 hover:bg-slate-200 transition-colors shadow-lg">Schedule Call</button>
</div>

<div className="bg-[#11263c] rounded-[2rem] p-8 border border-white/[0.04] flex flex-col h-[320px]">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-base text-slate-400 font-medium">Est. Yields</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xl tracking-tight font-semibold text-white">$28,450.00</span>
<span className="text-sm font-medium text-emerald-400">↑ 1.52%</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-1.5 text-sm text-slate-400 bg-[#1b3552] hover:bg-[#244569] px-3 py-1.5 rounded-xl transition-colors">Sort <iconify-icon className="text-sm" icon="solar:sort-vertical-linear"></iconify-icon></button>
<button className="flex items-center gap-1.5 text-sm text-slate-400 bg-[#1b3552] hover:bg-[#244569] px-3 py-1.5 rounded-xl transition-colors">Month <iconify-icon className="text-sm" icon="solar:alt-arrow-down-linear"></iconify-icon></button>
</div>
</div>
<div className="flex-1 flex items-end justify-between gap-3 relative mt-4">

<div className="w-full bg-[#1b3552] rounded-t-xl group relative hover:bg-[#244569] transition-colors" style={{height: '40%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-slate-400 opacity-0 group-hover:opacity-100">$200</div>
</div>
<div className="w-full bg-[#1b3552] rounded-t-xl group relative hover:bg-[#244569] transition-colors" style={{height: '55%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-slate-400 opacity-0 group-hover:opacity-100">$300</div>
</div>
<div className="w-full bg-[#1b3552] rounded-t-xl group relative hover:bg-[#244569] transition-colors" style={{height: '65%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-slate-400 opacity-0 group-hover:opacity-100">$400</div>
</div>
<div className="w-full bg-[#1b3552] rounded-t-xl group relative hover:bg-[#244569] transition-colors" style={{height: '65%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-slate-400 opacity-0 group-hover:opacity-100">$400</div>
</div>

<div className="w-full bg-[#c6a859] rounded-t-xl relative shadow-[0_0_20px_rgba(198,168,89,0.3)]" style={{height: '90%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-medium text-[#c6a859] bg-[#c6a859]/10 border border-[#c6a859]/20 px-2 py-1 rounded-lg">$500</div>
</div>
<div className="w-full bg-[#1b3552] rounded-t-xl group relative hover:bg-[#244569] transition-colors" style={{height: '65%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-slate-400 opacity-0 group-hover:opacity-100">$400</div>
</div>
</div>
<div className="flex justify-between text-sm text-slate-500 mt-4 px-1">
<span>Sep</span>
<span>Oct</span>
<span>Nov</span>
<span>Dec</span>
<span className="text-white">Jan</span>
<span>Feb</span>
</div>
</div>

<div className="md:col-span-2 bg-[#11263c] rounded-[2rem] p-6 lg:p-8 border border-white/[0.04]">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg text-white font-medium">Portfolio Allocation</h3>
<button className="text-sm text-[#c6a859] hover:text-white transition-colors">View Deep Dive</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div>
<div className="flex justify-between text-sm mb-3">
<span className="text-white font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#c6a859]"></div> Software &amp; AI</span>
<span className="text-slate-400">45%</span>
</div>
<div className="w-full h-2.5 bg-[#1b3552] rounded-full overflow-hidden">
<div className="h-full bg-[#c6a859] rounded-full" style={{width: '45%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-3">
<span className="text-white font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Music Rights</span>
<span className="text-slate-400">35%</span>
</div>
<div className="w-full h-2.5 bg-[#1b3552] rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '35%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-3">
<span className="text-white font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Media &amp; Film</span>
<span className="text-slate-400">20%</span>
</div>
<div className="w-full h-2.5 bg-[#1b3552] rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '20%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 space-y-6 lg:space-y-8 flex flex-col">

<div className="bg-gradient-to-br from-[#1b3552] to-[#11263c] rounded-[2rem] p-6 lg:p-8 border border-[#c6a859]/30 relative overflow-hidden group shadow-lg">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-[#c6a859]/10 rounded-full blur-2xl group-hover:bg-[#c6a859]/20 transition-all"></div>
<h3 className="text-lg text-white font-medium mb-3 flex items-center gap-2 relative z-10">
<iconify-icon className="text-[#c6a859] text-xl" icon="solar:radar-linear"></iconify-icon> Market Intelligence
                            </h3>
<p className="text-sm text-slate-300 leading-relaxed mb-5 relative z-10 font-medium">High demand detected for European Biotech patents. Average asking prices have increased by 14% this week.</p>
<button className="text-sm font-medium text-[#c6a859] hover:text-white transition-colors flex items-center gap-1 relative z-10">
                                View Opportunities <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="bg-[#11263c] rounded-[2rem] p-6 lg:p-8 border border-white/[0.04]">
<div className="flex justify-between items-center mb-8">
<h3 className="text-lg text-white font-medium">My Portfolios</h3>
<button className="text-sm text-slate-400 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full px-4 py-1.5 transition-colors">+ Add new</button>
</div>

<div className="relative h-56 mb-8">

<div className="absolute top-0 left-6 right-6 h-36 bg-[#11314d] rounded-[1.5rem] opacity-40 border border-[#c6a859]/10 flex justify-between px-6 py-4 items-start z-0">
<span className="text-slate-400 font-medium text-sm">Tier 3</span>
<span className="text-slate-400 font-medium text-sm">$6,150.00</span>
</div>

<div className="absolute top-4 left-3 right-3 h-40 bg-[#163e61] rounded-[1.5rem] opacity-70 border border-[#c6a859]/20 flex justify-between px-6 py-4 items-start z-10 shadow-lg">
<span className="text-slate-300 font-medium text-sm flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#c6a859]"></div> Tier 2</span>
<span className="text-slate-300 font-medium text-sm">$3,140.00</span>
</div>

<div className="absolute top-9 left-0 right-0 h-48 bg-[#152e47] rounded-[1.5rem] border border-white/10 z-20 shadow-2xl overflow-hidden flex flex-col justify-between p-6">

<div className="absolute inset-0 bg-gradient-to-br from-[#183451] to-[#102235] z-[-1]"></div>
<div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl z-[-1]"></div>
<div className="flex justify-between items-start">
<span className="text-white font-semibold tracking-widest text-lg">TIER 1</span>
<div className="w-12 h-8 rounded border border-white/20 bg-gradient-to-br from-[#c6a859]/20 to-transparent flex items-center justify-center opacity-80">
<iconify-icon className="text-xl text-[#c6a859]" icon="solar:cpu-linear"></iconify-icon>
</div>
</div>
<div>
<p className="text-sm text-slate-400 mb-1 font-medium">Balance</p>
<div className="flex justify-between items-end">
<span className="text-3xl tracking-tight font-semibold text-white">$12,850.00</span>
<span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg border border-emerald-400/20">↑ 3.52%</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<button className="py-4 rounded-2xl bg-[#1b3552] hover:bg-[#244569] text-white text-base font-medium flex items-center justify-center gap-2 transition-colors border border-white/5"><iconify-icon className="text-xl text-slate-400" icon="solar:arrow-right-down-linear"></iconify-icon> Withdraw</button>
<button className="py-4 rounded-2xl bg-[#c6a859] hover:bg-[#b59747] text-[#0b1c2d] text-base font-semibold flex items-center justify-center gap-2 transition-colors shadow-[0_4px_20px_-5px_rgba(198,168,89,0.5)]"><iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon> Transfer</button>
</div>
</div>

<div className="bg-[#11263c] rounded-[2rem] p-6 lg:p-8 border border-white/[0.04] flex-1 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg text-white font-medium">Recent Royalties</h3>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">View All</a>
</div>
<div className="flex-1 space-y-3 overflow-y-auto pr-2">

<div className="flex items-center justify-between p-4 rounded-2xl bg-[#152e47] hover:bg-[#1b3552] transition-colors border border-transparent hover:border-[#c6a859]/20 group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-[#0e2034] border border-white/5 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:music-note-linear"></iconify-icon>
</div>
<div>
<p className="text-base font-medium text-white">Sony Catalog</p>
<p className="text-sm text-slate-500">20 Jan, 02:00 PM</p>
</div>
</div>
<span className="text-base font-medium text-emerald-500">+$25.00</span>
</div>

<div className="flex items-center justify-between p-4 rounded-2xl bg-[#152e47] hover:bg-[#1b3552] transition-colors border border-transparent hover:border-[#c6a859]/20 group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-[#0e2034] border border-white/5 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
</div>
<div>
<p className="text-base font-medium text-white">Tech Patent #89</p>
<p className="text-sm text-slate-500">20 Jan, 02:00 PM</p>
</div>
</div>
<span className="text-base font-medium text-slate-400">-$5.00</span>
</div>

<div className="flex items-center justify-between p-4 rounded-2xl bg-[#152e47] hover:bg-[#1b3552] transition-colors border border-transparent hover:border-[#c6a859]/20 group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-[#0e2034] border border-white/5 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:clapperboard-linear"></iconify-icon>
</div>
<div>
<p className="text-base font-medium text-white">Indie Film Dist.</p>
<p className="text-sm text-slate-500">19 Jan, 02:00 PM</p>
</div>
</div>
<span className="text-base font-medium text-slate-400">-$55.00</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden h-full" id="portfolio">
<div className="max-w-[1600px] mx-auto h-full flex flex-col">
<div className="flex justify-between items-center mb-8">
<div>
<h2 className="text-2xl tracking-tight font-semibold text-white">Your Assets</h2>
<p className="text-base text-slate-400 mt-1">Manage and analyze your current holdings.</p>
</div>
<button className="bg-[#c6a859] hover:bg-[#b59747] text-[#0b1c2d] px-6 py-3 rounded-xl font-semibold transition-colors">Acquire New Asset</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">

<div className="bg-[#11263c] rounded-[2rem] p-6 border border-white/[0.04] flex flex-col justify-between hover:border-[#c6a859]/30 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
<iconify-icon className="text-3xl" icon="solar:music-notes-linear"></iconify-icon>
</div>
<span className="bg-[#1b3552] text-slate-300 text-xs px-3 py-1.5 rounded-full font-medium">Music</span>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-1">Universal Catalog C</h3>
<p className="text-sm text-slate-400 mb-6">Streaming &amp; Performance Rights</p>
<div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
<div>
<p className="text-xs text-slate-500 mb-1">Valuation</p>
<p className="text-lg font-semibold text-white">$1.2M</p>
</div>
<div>
<p className="text-xs text-slate-500 mb-1">YTD Yield</p>
<p className="text-lg font-semibold text-emerald-400">12.4%</p>
</div>
</div>
</div>
</div>
<div className="bg-[#11263c] rounded-[2rem] p-6 border border-white/[0.04] flex flex-col justify-between hover:border-[#c6a859]/30 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
<iconify-icon className="text-3xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<span className="bg-[#1b3552] text-slate-300 text-xs px-3 py-1.5 rounded-full font-medium">Technology</span>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-1">AI Routing Algorithm</h3>
<p className="text-sm text-slate-400 mb-6">B2B Software License</p>
<div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
<div>
<p className="text-xs text-slate-500 mb-1">Valuation</p>
<p className="text-lg font-semibold text-white">$850k</p>
</div>
<div>
<p className="text-xs text-slate-500 mb-1">YTD Yield</p>
<p className="text-lg font-semibold text-emerald-400">18.2%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden h-full" id="market">
<div className="max-w-[1600px] mx-auto flex flex-col h-full">
<div className="mb-8">
<h2 className="text-2xl tracking-tight font-semibold text-white">Marketplace</h2>
<p className="text-base text-slate-400 mt-1">Live opportunities to expand your portfolio.</p>
</div>
<div className="bg-[#11263c] rounded-[2rem] border border-white/[0.04] overflow-hidden flex-1 flex flex-col">
<div className="p-6 border-b border-white/5 flex gap-4">
<div className="relative flex-1 max-w-md">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-[#0e2034] border border-white/5 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:border-[#c6a859]/50 outline-none" placeholder="Search assets..." type="text"/>
</div>
<button className="bg-[#0e2034] border border-white/5 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:filter-linear"></iconify-icon> Filter
                            </button>
</div>
<div className="overflow-x-auto flex-1">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#0e2034]/50 text-sm text-slate-500">
<th className="py-4 px-6 font-medium">Asset Name</th>
<th className="py-4 px-6 font-medium">Category</th>
<th className="py-4 px-6 font-medium">Est. APY</th>
<th className="py-4 px-6 font-medium text-right">Ask Price</th>
<th className="py-4 px-6 font-medium text-center">Action</th>
</tr>
</thead>
<tbody className="text-base divide-y divide-white/5">
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-5 px-6 font-medium text-white flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
                                            BioMed Patent Suite
                                        </td>
<td className="py-5 px-6 text-slate-400">Healthcare</td>
<td className="py-5 px-6 text-emerald-400 font-medium">14.2%</td>
<td className="py-5 px-6 text-right text-white font-medium">$125,000</td>
<td className="py-5 px-6 text-center">
<button className="text-sm bg-[#c6a859]/10 text-[#c6a859] hover:bg-[#c6a859] hover:text-[#0b1c2d] px-5 py-2 rounded-lg transition-all font-semibold">Invest</button>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-5 px-6 font-medium text-white flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:gallery-linear"></iconify-icon>
</div>
                                            Vintage Photo Archive
                                        </td>
<td className="py-5 px-6 text-slate-400">Media</td>
<td className="py-5 px-6 text-emerald-400 font-medium">8.5%</td>
<td className="py-5 px-6 text-right text-white font-medium">$45,000</td>
<td className="py-5 px-6 text-center">
<button className="text-sm bg-[#c6a859]/10 text-[#c6a859] hover:bg-[#c6a859] hover:text-[#0b1c2d] px-5 py-2 rounded-lg transition-all font-semibold">Invest</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="tab-content hidden h-full flex items-center justify-center" id="history">
<div className="text-center">
<div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-500">
<iconify-icon className="text-4xl" icon="solar:history-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-medium text-white mb-2">Transaction History</h2>
<p className="text-slate-500 text-base">Detailed logs of all your yields and acquisitions.</p>
</div>
</div>
<div className="tab-content hidden h-full flex items-center justify-center" id="calculator">
<div className="text-center">
<div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-500">
<iconify-icon className="text-4xl" icon="solar:calculator-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-medium text-white mb-2">Dividend Calculator</h2>
<p className="text-slate-500 text-base">Forecast your future earnings based on market trends.</p>
</div>
</div>
</div>
</main>


    </>
  );
}

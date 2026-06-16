import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
animation: {
'scroll': 'scroll 40s linear infinite',
'color-shift': 'colorShift 4s ease-in-out infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
colorShift: {
'0%, 100%': { backgroundColor: '#34d399' }, // emerald-400
'50%': { backgroundColor: '#60a5fa' }, // blue-400
}
}
}
}
}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        const menuBtn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menu.classList.remove('translate-x-full');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; 
            } else {
                menu.classList.add('translate-x-full');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
        });

        // 3D Scroll Effect Script
        const dashboard = document.getElementById('hero-dashboard');
        if(dashboard) {
            // Initial Set
            dashboard.style.transform = `rotateX(12deg) scale(0.95)`;
            dashboard.style.opacity = "0.8";

            window.addEventListener('scroll', () => {
                const scroll = window.scrollY;
                const threshold = 600;
                
                // Calculate progress (0 at top, 1 at threshold)
                const progress = Math.min(scroll / threshold, 1);
                
                // RotateX goes from 12deg to 0deg
                const rotation = 12 - (12 * progress);
                
                // Scale goes from 0.95 to 1
                const scale = 0.95 + (0.05 * progress);

                // Opacity goes from 0.8 to 1
                const opacity = 0.8 + (0.2 * progress);
                
                // Apply transform
                dashboard.style.transform = `rotateX(${rotation}deg) scale(${scale})`;
                dashboard.style.opacity = opacity;
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-[1000px] pointer-events-none z-0">

<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/20 blur-[120px] rounded-full mix-blend-screen opacity-100"></div>

<div className="w-full h-full opacity-100 mix-blend-screen" data-us-project="hQmuxsIsbhqg99eGrTZM"></div>


<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950"></div>
</div>

<div className="fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-xl transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 md:hidden" id="mobile-menu">
<nav className="flex flex-col gap-6 text-lg font-medium text-zinc-300">
<a className="mobile-link hover:text-emerald-400 transition-colors border-b border-white/5 pb-4" href="#">Product</a>
<a className="mobile-link hover:text-emerald-400 transition-colors border-b border-white/5 pb-4" href="#">Features</a>
<a className="mobile-link hover:text-emerald-400 transition-colors border-b border-white/5 pb-4" href="#">Pricing</a>
</nav>
<div className="mt-8 flex flex-col gap-4">
<button className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">Log In</button>
<button className="w-full h-12 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">Start free trial</button>
</div>
</div>

<div className="relative z-10">

<div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:pt-6 md:px-6">
<div className="max-w-4xl mx-auto border border-white/10 rounded-full px-5 py-3 md:px-6 md:py-3" style={{background: 'linear-gradient(180deg, rgba(14,16,26,0.8), rgba(14,16,26,0.6)) padding-box, linear-gradient(120deg, rgba(255,255,255,0.35), rgba(255,255,255,0.08)) border-box', backdropFilter: 'blur(16px)', boxShadow: '0 10px 30px rgba(0,0,0,0.25)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="text-lg font-semibold text-white/90 tracking-tight font-geist">Mondro</span>
<div className="w-2 h-2 rounded-full animate-color-shift"></div>
</div>

<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#features">Product</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#process">Features</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#pricing">Pricing</a></li>
</ul>

<div className="flex items-center gap-2">

<button aria-label="Menu" className="inline-flex md:hidden hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5 active:scale-95 z-[70]" id="mobile-menu-btn" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="w-5 h-5 stroke-[1.5] text-white/70" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
<svg className="w-5 h-5 stroke-[1.5] text-white/70 hidden" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>

<button className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-colors hover:text-emerald-400">
                            Log in
                        </button>
<button className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-emerald-500 rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                            Start free trial
                        </button>
</div>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-20 md:mt-0">
<section className="relative">
<div className="relative py-12 md:py-20 lg:py-24">
<div className="mx-auto max-w-2xl text-center px-2">
<span className="inline-flex items-center gap-2 px-3 h-8 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-medium backdrop-blur-sm mb-6">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m7.8 16.2-2.9 2.9"></path><path d="M6 12H2"></path><path d="m7.8 7.8-2.9-2.9"></path></svg>
                            AI Website Intelligence Platform
                        </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[1.05]">
                            Turn your website into a <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-white drop-shadow-lg">revenue machine.</span>
</h1>
<p className="mt-6 text-base md:text-xl text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
                            Mondro shows you exactly why visitors convert or leave and what to fix to make more money. No guesswork. No opinions. Just clear direction.
                        </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-emerald-500 text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] hover:bg-emerald-400 hover:scale-105 transition-all duration-300 text-sm font-semibold">
<span>Start free trial</span>
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-white/5 border border-zinc-800 hover:bg-white/10 transition-colors text-sm text-white font-medium backdrop-blur-sm">
<span>See how it works</span>
</button>
</div>
<div className="mt-6 text-xs text-zinc-500 font-medium">
                            14 day free trial. Cancel anytime.
                        </div>
</div>

<div className="mt-16 md:mt-24 relative">
<div className="relative overflow-hidden rounded-[20px] md:rounded-[40px] bg-white/5 border border-white/5 backdrop-blur-lg">
<div className="p-3 md:p-8">

<div className="max-w-6xl mx-auto" style={{perspective: '2000px'}}>

<div className="relative overflow-hidden text-left bg-zinc-950/90 border border-white/10 rounded-xl md:rounded-2xl shadow-2xl ring-1 ring-emerald-500/10" id="hero-dashboard" style={{transformOrigin: 'center top', transformStyle: 'preserve-3d', willChange: 'transform'}}>

<div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-white/10 bg-black/40">
<div className="flex items-center gap-3 md:gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
</div>
</div>
<div className="flex items-center justify-center flex-1">
<div className="px-3 py-1 rounded-md bg-zinc-900 border border-white/5 text-[10px] text-zinc-500 font-mono">mondro.ai/dashboard</div>
</div>
<div className="w-16"></div>
</div>

<div className="p-6 md:p-10 min-h-[500px]">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
<div>
<h3 className="text-xl md:text-2xl font-medium text-white mb-2 tracking-tight">Performance Overview</h3>
<p className="text-sm text-zinc-500 font-light">Real-time analysis of your funnel performance.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-xs font-medium text-zinc-300 hover:bg-white/10 transition-colors">Export Report</button>
<button className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-xs font-medium shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors">View Insights</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="col-span-2 rounded-xl bg-zinc-900/30 border border-white/5 p-6 relative overflow-hidden group">
<div className="flex justify-between items-center mb-8">
<h4 className="text-xs font-medium text-zinc-400 tracking-wide">Revenue Trend</h4>
<div className="flex gap-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] text-zinc-500 font-medium">This Month</span>
</div>
</div>

<div className="h-48 w-full relative flex items-end justify-between gap-2 px-2">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" preserveaspectratio="none">
<path className="opacity-80 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]" d="M0 160 C 40 150, 80 120, 120 130 C 180 140, 240 80, 300 60 C 380 30, 460 40, 600 20" fill="none" stroke="#34d399" strokeWidth="2"></path>
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(52, 211, 153, 0.2)"></stop>
<stop offset="100%" stop-color="rgba(52, 211, 153, 0)"></stop>
</lineargradient>
</defs>
<path className="opacity-40" d="M0 160 C 40 150, 80 120, 120 130 C 180 140, 240 80, 300 60 C 380 30, 460 40, 600 20 V 200 H 0 Z" fill="url(#chartGradient)"></path>
</svg>

<div className="w-full bg-zinc-800/30 rounded-t-[1px] h-[30%] group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
<div className="w-full bg-zinc-800/30 rounded-t-[1px] h-[45%] group-hover:bg-emerald-500/10 transition-colors duration-500 delay-75"></div>
<div className="w-full bg-zinc-800/30 rounded-t-[1px] h-[35%] group-hover:bg-emerald-500/10 transition-colors duration-500 delay-100"></div>
<div className="w-full bg-zinc-800/30 rounded-t-[1px] h-[60%] group-hover:bg-emerald-500/10 transition-colors duration-500 delay-150"></div>
<div className="w-full bg-zinc-800/30 rounded-t-[1px] h-[50%] group-hover:bg-emerald-500/10 transition-colors duration-500 delay-200"></div>
<div className="w-full bg-zinc-800/30 rounded-t-[1px] h-[70%] group-hover:bg-emerald-500/10 transition-colors duration-500 delay-300 relative">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] font-bold py-1 px-2 rounded opacity-100 whitespace-nowrap border border-white/10 shadow-lg z-20">
                                                                $4,203
                                                            </div>
</div>
<div className="w-full bg-emerald-500/20 rounded-t-[1px] h-[85%] relative z-0"></div>
<div className="w-full bg-zinc-800/30 rounded-t-[1px] h-[75%] group-hover:bg-emerald-500/10 transition-colors duration-500 delay-500"></div>
</div>
</div>

<div className="space-y-4">

<div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/10">+12.5%</span>
</div>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-1">Total Revenue</div>
<div className="text-2xl font-semibold text-white tracking-tight">$124,592</div>
</div>

<div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<span className="text-[10px] font-semibold text-zinc-400 bg-white/5 px-2 py-1 rounded-full border border-white/5">+2.1%</span>
</div>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-1">Active Users</div>
<div className="text-2xl font-semibold text-white tracking-tight">8,540</div>
</div>
</div>
</div>

<div className="rounded-xl bg-zinc-900/20 border border-white/5 p-1">
<div className="p-4 pb-2">
<h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Top Priorities</h4>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between p-4 rounded-lg hover:bg-white/[0.02] transition-colors group cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500/20 transition-colors border border-red-500/10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Checkout Abandonment</div>
<div className="text-xs text-zinc-500">High friction detected on payment step</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-zinc-300">High Impact</div>
<div className="text-[10px] font-semibold text-emerald-400">Est. +$4.2k/mo</div>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-lg hover:bg-white/[0.02] transition-colors group cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/20 transition-colors border border-orange-500/10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div>
<div className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Mobile Load Time</div>
<div className="text-xs text-zinc-500">Landing page exceeds 3s threshold</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-zinc-300">Med Impact</div>
<div className="text-[10px] font-semibold text-emerald-400">Est. +$1.8k/mo</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 md:mt-32" id="features">
<div className="mb-16 md:mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Most websites leak money every day</h2>
<p className="text-lg text-zinc-400 max-w-2xl font-light">Mondro finds the leaks and tells you what to fix first.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">

<div className="col-span-1 md:col-span-6 lg:col-span-8 group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/50 min-h-[400px]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80 z-10"></div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute bottom-0 left-0 p-8 md:p-10 z-20 max-w-lg">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 text-emerald-400">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20M12 2v20"></path></svg>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-3">See what actually matters</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Mondro focuses on the changes that move revenue, not vanity metrics.
                            </p>
</div>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-4 relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 flex flex-col justify-between min-h-[400px]">
<div>
<h3 className="text-2xl font-medium text-white mb-4">Know what to fix first</h3>
<p className="text-zinc-400 text-sm">Clear priorities so you stop wasting time on the wrong improvements.</p>
</div>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-sm text-zinc-200">Checkout Flow</span>
<span className="ml-auto text-xs text-emerald-400">High Priority</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 opacity-60">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
<span className="text-sm text-zinc-200">About Page</span>
<span className="ml-auto text-xs text-zinc-500">Low Priority</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">

<div className="relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/50 p-8 min-h-[280px]">
<div className="absolute top-8 right-8 text-zinc-700">
<svg fill="none" height="40" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div className="mt-auto absolute bottom-8 left-8 right-8">
<h4 className="text-xl font-medium text-white mb-2">Track progress over time</h4>
<p className="text-sm text-zinc-400">See your site improve week after week as changes compound.</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/50 p-8 min-h-[280px]">
<div className="absolute top-8 right-8 text-zinc-700">
<svg fill="none" height="40" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="mt-auto absolute bottom-8 left-8 right-8">
<h4 className="text-xl font-medium text-white mb-2">Turn insights into action</h4>
<p className="text-sm text-zinc-400">Every insight is practical and tied to outcomes, not theory.</p>
</div>
</div>
</div>
</section>

<section className="mt-32" id="process">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Simple process. Real outcomes.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-zinc-800 via-emerald-900 to-zinc-800 border-t border-dashed border-zinc-800"></div>
<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl font-semibold text-white mb-6 relative z-10 shadow-xl">1</div>
<h3 className="text-xl font-medium text-white mb-3">Connect your site</h3>
<p className="text-sm text-zinc-400 max-w-xs">Enter your domain and start your scan.</p>
</div>
<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl font-semibold text-white mb-6 relative z-10 shadow-xl ring-1 ring-emerald-500/20">2</div>
<h3 className="text-xl font-medium text-white mb-3">Get your score</h3>
<p className="text-sm text-zinc-400 max-w-xs">Mondro analyzes your site across key revenue drivers.</p>
</div>
<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl font-semibold text-white mb-6 relative z-10 shadow-xl">3</div>
<h3 className="text-xl font-medium text-white mb-3">Fix and grow</h3>
<p className="text-sm text-zinc-400 max-w-xs">Follow the ranked improvements and track progress over time.</p>
</div>
</div>
</section>

<section className="mt-32 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-4 py-20">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white mb-4">The difference is clarity</h2>
<p className="text-zinc-500">Most tools give you data. Mondro gives you decisions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="opacity-60 space-y-4">
<h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6 pb-4 border-b border-white/5">Traditional tools</h4>
<div className="flex items-center gap-3 text-zinc-400"><svg className="w-4 h-4 text-red-900" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg> Pages of metrics</div>
<div className="flex items-center gap-3 text-zinc-400"><svg className="w-4 h-4 text-red-900" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg> Conflicting advice</div>
<div className="flex items-center gap-3 text-zinc-400"><svg className="w-4 h-4 text-red-900" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg> No clear priorities</div>
<div className="flex items-center gap-3 text-zinc-400"><svg className="w-4 h-4 text-red-900" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg> Hard to explain to teams</div>
</div>

<div className="relative bg-zinc-900/50 -mx-4 p-4 md:-m-8 md:p-8 rounded-2xl border border-emerald-500/20 shadow-2xl shadow-emerald-900/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">RECOMMENDED</div>
<h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 pb-4 border-b border-white/10 flex items-center gap-2">Mondro <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span></h4>
<div className="space-y-4">
<div className="flex items-center gap-3 text-white"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg> Clear score</div>
<div className="flex items-center gap-3 text-white"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg> Ranked improvements</div>
<div className="flex items-center gap-3 text-white"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg> Revenue focused insights</div>
<div className="flex items-center gap-3 text-white"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg> Easy to act on</div>
</div>
</div>

<div className="space-y-4">
<h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-6 pb-4 border-b border-white/5">Outcome</h4>
<div className="flex items-center gap-3 text-zinc-300 font-medium">Faster decisions</div>
<div className="flex items-center gap-3 text-zinc-300 font-medium">Better execution</div>
<div className="flex items-center gap-3 text-zinc-300 font-medium">Higher conversion rates</div>
<div className="flex items-center gap-3 text-zinc-300 font-medium">More revenue</div>
</div>
</div>
</div>
</section>

<section className="mt-20 overflow-hidden">
<h2 className="text-2xl font-medium text-white mb-10 text-center">Built for people who care about results</h2>
<div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto px-4">
<div className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors">
<div className="flex gap-1 mb-6 text-emerald-400 text-xs">★★★★★</div>
<p className="text-lg text-zinc-300 mb-6 leading-relaxed">"Mondro showed us exactly what was holding our site back. We fixed the top issues and conversions moved within weeks."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div className="text-sm font-medium text-white">Alex M. <span className="text-zinc-500">CTO</span></div>
</div>
</div>
<div className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors">
<div className="flex gap-1 mb-6 text-emerald-400 text-xs">★★★★★</div>
<p className="text-lg text-zinc-300 mb-6 leading-relaxed">"Mondro replaced multiple tools for us. Now everyone is aligned on what actually matters."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div className="text-sm font-medium text-white">Sarah K. <span className="text-zinc-500">Growth Lead</span></div>
</div>
</div>
</div>
</section>

<section className="mt-32 max-w-6xl mx-auto" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Plans built for growth</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/20 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<p className="text-sm text-zinc-500 mb-6">For founders and small teams</p>
<div className="text-3xl font-medium text-white mb-8">$97<span className="text-sm text-zinc-500 font-normal ml-1">/mo</span></div>
<button className="w-full py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors mb-8">Start free trial</button>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg> 1 Website</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg> Weekly Score</li>
</ul>
</div>

<div className="p-8 rounded-3xl border border-emerald-500/30 bg-zinc-900/60 flex flex-col relative shadow-2xl shadow-emerald-900/20">
<div className="absolute top-0 right-0 bg-emerald-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
<h3 className="text-lg font-medium text-white mb-2">Growth</h3>
<p className="text-sm text-zinc-500 mb-6">Most popular</p>
<div className="text-3xl font-medium text-white mb-8">$297<span className="text-sm text-zinc-500 font-normal ml-1">/mo</span></div>
<button className="w-full py-3 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-400 transition-colors mb-8 shadow-lg shadow-emerald-500/20">Start free trial</button>
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg> 5 Websites</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg> Daily Analysis</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg> Priority Support</li>
</ul>
</div>

<div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/20 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<p className="text-sm text-zinc-500 mb-6">For teams managing multiple sites</p>
<div className="text-3xl font-medium text-white mb-8">Custom</div>
<button className="w-full py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors mb-8">Talk to us</button>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg> Unlimited Sites</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg> API Access</li>
</ul>
</div>
</div>
</section>

<section className="mt-32 mb-20">
<div className="rounded-3xl bg-zinc-900/30 border border-white/5 p-12 md:p-24 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-500/5"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                            When you see clearly, <br/> you grow faster
                        </h2>
<p className="text-lg text-zinc-400 mb-10">Stop guessing. Start improving with confidence.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-all hover:scale-105 shadow-lg shadow-emerald-500/20 w-full sm:w-auto">
                                Start free trial
                            </button>
<button className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
                                Talk to sales
                            </button>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-500">
<div className="flex items-center gap-2">
<span className="font-medium text-white">Mondro</span>
<span>© Mondro Inc. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</footer>
</main></div>



    </>
  );
}

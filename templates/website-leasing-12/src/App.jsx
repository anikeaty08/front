import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#ccff00', // Neon Lime
dark: '#aacc00',
dim: 'rgba(204, 255, 0, 0.1)',
},
dark: {
950: '#020202',
900: '#050505',
850: '#080808',
800: '#0a0a0a',
700: '#121212',
border: '#ffffff1a'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'marquee': 'marquee 25s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                'class': "lucide"
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="GE8mpmmCRgK6XBF57jgF"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-dark-border bg-dark-900/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<div className="w-3 h-3 bg-brand rounded-full shadow-[0_0_10px_#ccff00]"></div>
                Leasepage
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-brand transition-colors duration-300" href="#contact">
                Get Started
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden border-dark-border border-b pt-32 pb-20 relative">
<style>
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); filter: blur(10px); }
      to { opacity: 1; transform: translateY(0); filter: blur(0); }
    }
    @keyframes glowPulse {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.1); }
    }
  </style>
<div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" style={{animation: 'glowPulse 8s ease-in-out infinite'}}>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 gap-x-12 gap-y-12 items-end justify-between">
<div className="max-w-4xl">

<div className="inline-flex items-center gap-2 px-3 py-1 border border-brand/30 rounded-full bg-brand/5 text-brand text-xs font-mono mb-8" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
<span>WEB 3.0 READY AGENCY</span>
</div>

<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-[0.9] uppercase mb-8" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationDelay: '0.1s'}}>
          Stop Buying.<br/>
<span className="text-brand">Start Leasing.</span>
</h1>

<p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationDelay: '0.2s'}}>
          High-performance websites without the massive upfront investment.
          We design, build, and maintain your digital presence for a flat monthly fee.
        </p>
</div>

<div className="w-full md:w-auto flex flex-col gap-4" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationDelay: '0.3s'}}>
<a className="w-full md:w-64 flex items-center justify-between bg-brand text-black px-6 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-white transition-all duration-300 group shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1" href="#work">
          View Work
          <svg className="lucide lucide-arrow-down-right w-5 h-5 group-hover:-rotate-90 transition-transform duration-300" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</a>
<div className="text-xs text-gray-500 font-mono text-right">
          * NO HIDDEN FEES<br/>
                        * CANCEL ANYTIME
        </div>
</div>
</div>
</div>
</header>

<div className="border-b border-dark-border bg-dark-800 overflow-hidden py-4">
<div className="flex whitespace-nowrap overflow-hidden">
<div className="flex animate-marquee items-center gap-12 px-6">
<span className="text-4xl font-semibold uppercase tracking-tighter text-stroke opacity-50">Design</span>
<svg className="lucide lucide-asterisk w-8 h-8 text-brand" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
<span className="text-4xl font-semibold uppercase tracking-tighter text-stroke opacity-50">Development</span>
<svg className="lucide lucide-asterisk w-8 h-8 text-brand" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
<span className="text-4xl font-semibold uppercase tracking-tighter text-stroke opacity-50">SEO</span>
<svg className="lucide lucide-asterisk w-8 h-8 text-brand" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
<span className="text-4xl font-semibold uppercase tracking-tighter text-stroke opacity-50">Maintenance</span>
<svg className="lucide lucide-asterisk w-8 h-8 text-brand" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<div aria-hidden="true" className="flex animate-marquee items-center gap-12 px-6">
<span className="text-4xl font-semibold uppercase tracking-tighter text-stroke opacity-50">Design</span>
<svg className="lucide lucide-asterisk w-8 h-8 text-brand" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
<span className="text-4xl font-semibold uppercase tracking-tighter text-stroke opacity-50">Development</span>
<svg className="lucide lucide-asterisk w-8 h-8 text-brand" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
<span className="text-4xl font-semibold uppercase tracking-tighter text-stroke opacity-50">SEO</span>
<svg className="lucide lucide-asterisk w-8 h-8 text-brand" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
<span className="text-4xl font-semibold uppercase tracking-tighter text-stroke opacity-50">Maintenance</span>
<svg className="lucide lucide-asterisk w-8 h-8 text-brand" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
</div>
</div>

<section className="py-24 border-b border-dark-border bg-dark-900 overflow-hidden" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<h2 className="text-sm font-mono text-brand mb-4">/// SELECTED WORK</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter uppercase">Production Ready.</h3>
</div>
<p className="text-gray-400 max-w-sm text-sm leading-relaxed text-right md:text-left">
                    Live examples of high-conversion leases currently active in the wild.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-container">

<div className="rotate-card group relative bg-dark-850 rounded-xl border border-dark-border overflow-hidden h-[500px]">

<div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="absolute top-0 inset-x-0 h-10 bg-dark-900 border-b border-dark-border flex items-center px-4 gap-2 z-20">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FF5F56] transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FFBD2E] transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#27C93F] transition-colors"></div>
<div className="ml-4 h-5 w-64 bg-dark-800 rounded flex items-center px-2 text-[10px] text-gray-600 font-mono">
                            https://fintech-dashboard.io
                        </div>
</div>

<div className="pt-10 h-full bg-dark-900 p-6 flex flex-col gap-6 group-hover:translate-y-[-10px] transition-transform duration-700 ease-out">

<div className="flex justify-between items-center">
<div className="w-8 h-8 rounded bg-brand/20"></div>
<div className="flex gap-4">
<div className="w-16 h-2 rounded bg-white/10"></div>
<div className="w-16 h-2 rounded bg-white/10"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="bg-dark-800 p-4 rounded border border-white/5 space-y-3">
<div className="w-6 h-6 rounded bg-purple-500/20 mb-2"></div>
<div className="w-12 h-2 rounded bg-white/20"></div>
<div className="w-20 h-4 rounded bg-white/40"></div>
</div>
<div className="bg-dark-800 p-4 rounded border border-white/5 space-y-3">
<div className="w-6 h-6 rounded bg-brand/20 mb-2"></div>
<div className="w-12 h-2 rounded bg-white/20"></div>
<div className="w-20 h-4 rounded bg-white/40"></div>
</div>
<div className="bg-dark-800 p-4 rounded border border-white/5 space-y-3">
<div className="w-6 h-6 rounded bg-blue-500/20 mb-2"></div>
<div className="w-12 h-2 rounded bg-white/20"></div>
<div className="w-20 h-4 rounded bg-white/40"></div>
</div>
</div>

<div className="flex-1 bg-dark-800 rounded border border-white/5 p-4 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-4 gap-2 opacity-50">
<div className="w-full bg-gradient-to-t from-brand/20 to-transparent rounded-t h-[40%]"></div>
<div className="w-full bg-gradient-to-t from-brand/20 to-transparent rounded-t h-[70%]"></div>
<div className="w-full bg-gradient-to-t from-brand/20 to-transparent rounded-t h-[50%]"></div>
<div className="w-full bg-gradient-to-t from-brand/20 to-transparent rounded-t h-[90%]"></div>
<div className="w-full bg-gradient-to-t from-brand/20 to-transparent rounded-t h-[60%]"></div>
</div>

<div className="w-full h-px bg-white/5 mb-8"></div>
<div className="w-full h-px bg-white/5 mb-8"></div>
<div className="w-full h-px bg-white/5 mb-8"></div>
</div>
</div>

<div className="absolute bottom-6 left-6 z-30">
<div className="text-xs font-mono text-brand mb-1">FINTECH / SAAS</div>
<h4 className="text-xl font-bold text-white">Nova Dashboard</h4>
</div>
</div>

<div className="flex flex-col gap-8">

<div className="rotate-card group relative bg-dark-850 rounded-xl border border-dark-border overflow-hidden h-60">

<div className="absolute top-0 inset-x-0 h-10 bg-dark-900 border-b border-dark-border flex items-center px-4 gap-2 z-20">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FF5F56] transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FFBD2E] transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#27C93F] transition-colors"></div>
</div>

<div className="pt-10 h-full bg-white flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<div className="w-32 h-6 rounded-full bg-black/5 mb-4 border border-black/5"></div>
<div className="w-48 h-8 rounded bg-black/90 mb-2 shadow-lg"></div>
<div className="w-64 h-3 rounded bg-black/20 mb-6"></div>
<div className="flex gap-2">
<div className="w-20 h-8 rounded bg-blue-600 shadow-md"></div>
<div className="w-20 h-8 rounded border border-black/10"></div>
</div>
</div>
<div className="absolute bottom-4 left-4 z-30 bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
<h4 className="text-xs font-bold text-white">Lumina App</h4>
</div>
</div>

<div className="rotate-card group relative bg-dark-850 rounded-xl border border-dark-border overflow-hidden h-60">

<div className="absolute top-0 inset-x-0 h-10 bg-dark-900 border-b border-dark-border flex items-center px-4 gap-2 z-20">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FF5F56] transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FFBD2E] transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#27C93F] transition-colors"></div>
</div>

<div className="pt-10 h-full bg-[#050505] p-6 grid grid-cols-2 gap-4">
<div className="space-y-2">
<div className="aspect-square bg-dark-800 rounded border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/10"></div>
</div>
<div className="w-12 h-2 bg-white/20 rounded"></div>
</div>
<div className="space-y-2">
<div className="aspect-square bg-dark-800 rounded border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-emerald-500/10"></div>
</div>
<div className="w-12 h-2 bg-white/20 rounded"></div>
</div>
</div>
<div className="absolute bottom-4 left-4 z-30 bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
<h4 className="text-xs font-bold text-white">Ark Clothing</h4>
</div>
</div>
</div>
</div>
<div className="mt-8 flex justify-end">
<a className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-brand pb-0.5" href="#">
                    View Full Portfolio
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 border-b border-dark-border bg-dark-950" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-sm font-mono text-brand mb-4">/// WHY LEASE?</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter uppercase">Preserve Capital.<br/>Scale Faster.</h3>
</div>
<p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                    Traditional agencies charge five figures upfront. We charge a fraction monthly. Same quality, better cash flow.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 bg-dark-800 border border-dark-border p-8 relative overflow-hidden group hover:border-brand/50 transition-colors duration-500">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<svg className="lucide lucide-trending-up w-24 h-24 text-brand" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-dark-900 w-12 h-12 flex items-center justify-center border border-dark-border mb-6">
<span className="font-mono text-brand">01</span>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-2 text-white">Maximum Liquidity</h4>
<p className="text-gray-400">Keep your cash in the bank. Our leasing model converts a massive CapEx into a manageable OpEx, completely tax-deductible.</p>
</div>
</div>
</div>

<div className="bg-dark-800 border border-dark-border p-8 relative overflow-hidden group hover:border-brand/50 transition-colors duration-500">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-dark-900 w-12 h-12 flex items-center justify-center border border-dark-border mb-6">
<span className="font-mono text-brand">02</span>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-2 text-white">Always Current</h4>
<p className="text-gray-400 text-sm">Design refresh included every 24 months. Never have an outdated site again.</p>
</div>
</div>
</div>

<div className="bg-dark-800 border border-dark-border p-8 relative overflow-hidden group hover:border-brand/50 transition-colors duration-500">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-dark-900 w-12 h-12 flex items-center justify-center border border-dark-border mb-6">
<span className="font-mono text-brand">03</span>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-2 text-white">Full Service</h4>
<p className="text-gray-400 text-sm">Hosting, domains, updates, and security patches. We handle the boring stuff.</p>
</div>
</div>
</div>

<div className="md:col-span-2 bg-brand text-black p-8 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 flex items-center justify-center border border-black/20 mb-6 bg-black text-brand">
<span className="font-mono">04</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="max-w-md">
<h4 className="text-2xl font-semibold tracking-tight mb-2">Technical Superiority</h4>
<p className="text-black/70 font-medium">Built on modern stacks (React, Astro, Tailwind). Blazing fast load times and perfect SEO scores guaranteed.</p>
</div>
<svg className="lucide lucide-cpu w-12 h-12 opacity-80" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-dark-border bg-dark-900" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-sm font-mono text-brand mb-4">/// EXECUTION</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter uppercase">From Concept to Live<br/>in 14 Days.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-dark-border">

<div className="border-b border-r border-dark-border p-8 hover:bg-dark-800 transition-colors group">
<span className="text-xs font-mono text-gray-500 mb-6 block group-hover:text-brand">PHASE_01</span>
<h4 className="text-xl font-semibold uppercase mb-4">Briefing</h4>
<p className="text-sm text-gray-400">We define goals, style, and scope. You sign the digital lease agreement.</p>
</div>

<div className="border-b border-r border-dark-border p-8 hover:bg-dark-800 transition-colors group">
<span className="text-xs font-mono text-gray-500 mb-6 block group-hover:text-brand">PHASE_02</span>
<h4 className="text-xl font-semibold uppercase mb-4">Development</h4>
<p className="text-sm text-gray-400">Our engineers build your custom solution using high-performance frameworks.</p>
</div>

<div className="border-b border-r border-dark-border p-8 hover:bg-dark-800 transition-colors group">
<span className="text-xs font-mono text-gray-500 mb-6 block group-hover:text-brand">PHASE_03</span>
<h4 className="text-xl font-semibold uppercase mb-4">Launch</h4>
<p className="text-sm text-gray-400">We deploy to our global edge network. Your site is live and lightning fast.</p>
</div>

<div className="border-b border-r border-dark-border p-8 bg-dark-800 relative overflow-hidden">
<div className="absolute inset-0 bg-brand/5"></div>
<span className="text-xs font-mono text-brand mb-6 block">PHASE_04</span>
<h4 className="text-xl font-semibold uppercase mb-4 text-white">Scale</h4>
<p className="text-sm text-gray-400 mb-6">Continuous updates, content changes, and monitoring included.</p>
<div className="h-1 w-full bg-dark-700 overflow-hidden">
<div className="h-full bg-brand w-1/2 animate-pulse"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-dark-border relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-sm font-mono text-brand mb-4">/// INVESTMENT</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter uppercase mb-6">Simple Monthly Rates.</h3>
<p className="text-gray-400">No setup fees. Minimum 12-month term.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-dark-800 border border-dark-border p-8 flex flex-col relative group hover:border-gray-600 transition-colors">
<div className="mb-6">
<h4 className="text-xl font-semibold uppercase">Essential</h4>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-mono text-white">$199</span>
<span className="text-gray-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-300 font-mono">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> One-Page Design
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Mobile Responsive
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Hosting Included
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1hr Maintenance/mo
                        </li>
</ul>
<a className="mt-auto w-full border border-white/20 py-3 text-center text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors" href="#">Select Plan</a>
</div>

<div className="bg-dark-900 border border-brand p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(204,255,0,0.1)]">
<div className="absolute top-0 right-0 bg-brand text-black text-[10px] font-bold uppercase px-3 py-1">Best Value</div>
<div className="mb-6">
<h4 className="text-xl font-semibold uppercase text-brand">Business</h4>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-mono text-white">$399</span>
<span className="text-gray-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-300 font-mono">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Up to 5 Pages
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> CMS Integration
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic SEO Setup
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 3hrs Maintenance/mo
                        </li>
</ul>
<a className="mt-auto w-full bg-brand text-black py-3 text-center text-sm font-semibold uppercase tracking-wide hover:bg-white transition-colors" href="#">Select Plan</a>
</div>

<div className="bg-dark-800 border border-dark-border p-8 flex flex-col relative group hover:border-gray-600 transition-colors">
<div className="mb-6">
<h4 className="text-xl font-semibold uppercase">Enterprise</h4>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-mono text-white">Custom</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-300 font-mono">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited Pages
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> E-commerce
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom Web Apps
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 24/7 Priority Support
                        </li>
</ul>
<a className="mt-auto w-full border border-white/20 py-3 text-center text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-dark-border">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl font-semibold tracking-tighter uppercase">Common Questions</h2>
</div>
<div className="space-y-4">
<details className="group bg-dark-800 border border-dark-border open:border-brand/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white hover:text-brand transition-colors">
<span className="uppercase tracking-wide text-sm">Do I own the website?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                        During the lease, Leasepage retains ownership of the code. However, you own all your content, images, and domain name. Buyout options are available after 24 months.
                    </div>
</details>
<details className="group bg-dark-800 border border-dark-border open:border-brand/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white hover:text-brand transition-colors">
<span className="uppercase tracking-wide text-sm">Is there a minimum contract length?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                        Yes, our standard lease agreement is 12 months. This allows us to amortize the high initial development cost over the year, keeping your monthly payments low.
                    </div>
</details>
<details className="group bg-dark-800 border border-dark-border open:border-brand/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white hover:text-brand transition-colors">
<span className="uppercase tracking-wide text-sm">Can I cancel anytime?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                        You can cancel with 30 days notice after the initial 12-month term. If you wish to cancel early, a buyout fee applies for the remaining balance of the term.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-dark-900 pt-24 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
<div className="max-w-xl">
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter uppercase mb-8 leading-[0.8]">
                        Let's<br/><span className="text-brand">Build.</span>
</h2>
<p className="text-gray-400 mb-8">Ready to upgrade your digital presence? Schedule a 15-minute strategy call.</p>
<a className="inline-flex items-center gap-2 border-b border-brand text-xl text-white hover:text-brand transition-colors pb-1" href="mailto:hello@leasepage.com">
                        hello@leasepage.com
                        <svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 gap-12 text-sm text-gray-400">
<div className="flex flex-col gap-4">
<span className="text-white font-semibold uppercase tracking-wide">Socials</span>
<a className="hover:text-brand transition-colors" href="#">Twitter / X</a>
<a className="hover:text-brand transition-colors" href="#">LinkedIn</a>
<a className="hover:text-brand transition-colors" href="#">Instagram</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white font-semibold uppercase tracking-wide">Legal</span>
<a className="hover:text-brand transition-colors" href="#">Imprint</a>
<a className="hover:text-brand transition-colors" href="#">Privacy</a>
<a className="hover:text-brand transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono uppercase">
<div>© 2024 Leasepage Agency. All rights reserved.</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
                    System Operational
                </div>
</div>

<div className="mt-12 select-none pointer-events-none">
<h1 className="text-[12vw] leading-none font-bold text-dark-800 text-center tracking-tighter opacity-50">LEASEPAGE</h1>
</div>
</div>
</footer>


    </>
  );
}

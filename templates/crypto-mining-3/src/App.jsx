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
gold: '#F3C677',
bronze: '#8A4D33',
dark: '#3E1C11',
glow: '#FFD700',
},
dark: {
950: '#020202',
900: '#050505',
850: '#080808',
800: '#0a0a0a',
700: '#121212',
border: '#ffffff15'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'marquee': 'marquee 25s linear infinite',
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'beam-v': 'beam-v 3s linear infinite',
'beam-h': 'beam-h 3s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
'beam-v': {
'0%': { top: '-100%', opacity: '0' },
'50%': { opacity: '0.5' },
'100%': { top: '100%', opacity: '0' },
},
'beam-h': {
'0%': { left: '-100%', opacity: '0' },
'50%': { opacity: '0.5' },
'100%': { left: '100%', opacity: '0' },
}
}
}
}
}



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
      

<div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
<div className="absolute inset-0 bg-dark-950"></div>

<div className="absolute inset-0 grid-bg perspective-grid"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-bronze/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>

<div className="absolute inset-0 flex justify-around opacity-20">
<div className="w-[1px] h-full bg-gradient-to-b from-transparent via-brand-gold to-transparent animate-beam-v" style={{animationDelay: '0s'}}></div>
<div className="w-[1px] h-full bg-gradient-to-b from-transparent via-brand-gold to-transparent animate-beam-v" style={{animationDelay: '1.5s'}}></div>
<div className="w-[1px] h-full bg-gradient-to-b from-transparent via-brand-gold to-transparent animate-beam-v" style={{animationDelay: '0.8s'}}></div>
<div className="w-[1px] h-full bg-gradient-to-b from-transparent via-brand-gold to-transparent animate-beam-v" style={{animationDelay: '2.2s'}}></div>
</div>

<div className="absolute inset-0 flex flex-col justify-around opacity-20">
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent animate-beam-h" style={{animationDelay: '0.5s'}}></div>
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent animate-beam-h" style={{animationDelay: '2.5s'}}></div>
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent animate-beam-h" style={{animationDelay: '1.2s'}}></div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-dark-border bg-dark-900/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight flex items-center gap-2" href="#">

<div className="w-6 h-6 relative">
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-bronze via-brand-gold to-brand-bronze animate-spin-slow" style={{animationDuration: '10s'}}></div>
<div className="absolute inset-[2px] rounded-full bg-dark-900"></div>
</div>
<span className="text-white">Aura Flow</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400 uppercase tracking-wide">
<a className="hover:text-brand-gold transition-colors" href="#comparison">Comparison</a>
<a className="hover:text-brand-gold transition-colors" href="#transparency">Transparency</a>
<a className="hover:text-brand-gold transition-colors" href="#process">Process</a>
<a className="hover:text-brand-gold transition-colors" href="#mining">Mining Ops</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-gradient-to-r from-brand-bronze via-brand-gold to-brand-bronze text-black px-5 py-2 text-xs font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity duration-300 rounded-sm" href="#started">
                Get Started
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="md:hidden text-white hover:text-brand-gold transition-colors">
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
        </style>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 gap-x-12 gap-y-12 items-end justify-between">
<div className="max-w-4xl">

<div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-gold/20 rounded-full bg-brand-gold/5 text-brand-gold text-xs font-mono mb-8" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
</span>
<span className="tracking-widest">DECENTRALIZED MINING PLATFORM</span>
</div>

<h1 className="md:text-7xl leading-[1] uppercase text-4xl font-semibold text-white tracking-tighter mb-8" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationDelay: '0.1s'}}>
                Learn How <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F3C677] via-[#FFD700] to-[#8A4D33] animate-pulse drop-shadow-[0_0_25px_rgba(243,198,119,0.5)] bg-transparent">TEXITcoin</span><br/>
                compares to <span className="text-white">Bitcoin.</span>
</h1>

<p className="md:text-lg leading-relaxed text-base font-light text-gray-400 max-w-2xl" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationDelay: '0.2s'}}>
                TEXITcoin is building one of the world’s largest privately owned crypto mines, funded through crowdfunding and powered by a global decentralized platform. All mining is done in Texas with full transparency and local control.
                </p>
</div>

<div className="w-full md:w-auto flex flex-col gap-4" style={{opacity: '0', animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', animationDelay: '0.3s'}}>
<a className="w-full md:w-64 flex items-center justify-between bg-aura-gradient text-black px-6 py-4 text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-all duration-300 group shadow-[0_0_20px_rgba(243,198,119,0.2)] hover:shadow-[0_0_30px_rgba(243,198,119,0.4)] hover:-translate-y-1 rounded-sm" href="#get-started">
                Get Started
                <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full md:w-64 flex items-center justify-between border border-brand-bronze/30 text-white px-6 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-brand-bronze/10 transition-all duration-300 group rounded-sm backdrop-blur-sm" href="#video">
                    Watch Video
                    <svg className="lucide lucide-play-circle w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<div className="text-xs text-brand-gold/60 font-mono text-right mt-2 tracking-wider">
                * TEXAS BASED<br/>
                * FULLY AUDITED
                </div>
</div>
</div>
</div>
</header>

<div className="border-b border-dark-border bg-dark-900 overflow-hidden py-4 relative z-10">
<div className="flex whitespace-nowrap overflow-hidden">
<div className="flex animate-marquee items-center gap-12 px-6">
<span className="text-3xl font-medium uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10">Transparency</span>
<svg className="lucide lucide-zap w-6 h-6 text-brand-bronze" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-3xl font-medium uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10">Liquidity</span>
<svg className="lucide lucide-zap w-6 h-6 text-brand-bronze" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-3xl font-medium uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10">Crowdfunding</span>
<svg className="lucide lucide-zap w-6 h-6 text-brand-bronze" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-3xl font-medium uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10">Decentralized</span>
<svg className="lucide lucide-zap w-6 h-6 text-brand-bronze" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div aria-hidden="true" className="flex animate-marquee items-center gap-12 px-6">
<span className="text-3xl font-medium uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10">Transparency</span>
<svg className="lucide lucide-zap w-6 h-6 text-brand-bronze" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-3xl font-medium uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10">Liquidity</span>
<svg className="lucide lucide-zap w-6 h-6 text-brand-bronze" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-3xl font-medium uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10">Crowdfunding</span>
<svg className="lucide lucide-zap w-6 h-6 text-brand-bronze" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-3xl font-medium uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10">Decentralized</span>
<svg className="lucide lucide-zap w-6 h-6 text-brand-bronze" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
</div>

<section className="py-24 border-b border-dark-border bg-dark-900 overflow-hidden relative z-10" id="comparison">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<h2 className="text-xs font-mono text-brand-gold mb-4">/// LIVE METRICS</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase text-white">Transparent Operations.</h3>
</div>
<p className="text-gray-400 max-w-sm text-sm leading-relaxed text-right md:text-left">
                    Real-time data from our Texas mining facilities. Verify hashrates and energy consumption instantly.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-container">

<div className="rotate-card group relative bg-dark-850 rounded-xl border border-dark-border overflow-hidden h-[500px]">

<div className="absolute inset-0 bg-gradient-to-tr from-brand-bronze/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="absolute top-0 inset-x-0 h-10 bg-dark-900 border-b border-dark-border flex items-center px-4 justify-between z-20">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="text-[10px] text-brand-gold font-mono uppercase">
                            Status: Mining Active
                        </div>
</div>

<div className="pt-10 h-full bg-dark-900 p-6 flex flex-col gap-6 group-hover:translate-y-[-10px] transition-transform duration-700 ease-out">

<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-brand-gold to-brand-bronze flex items-center justify-center text-black">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div>
<div className="text-xs text-gray-500 font-mono">TOTAL HASHRATE</div>
<div className="text-lg font-bold text-white">450 PH/s</div>
</div>
</div>
<div className="text-right">
<div className="text-xs text-gray-500 font-mono">24H REWARD</div>
<div className="text-lg font-bold text-aura-gradient">12.4 BTC</div>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="bg-dark-800 p-4 rounded border border-white/5 space-y-2 group-hover:border-brand-bronze/30 transition-colors">
<svg className="lucide lucide-thermometer w-4 h-4 text-brand-bronze mb-2" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
<div className="text-[10px] text-gray-500 uppercase">Temp</div>
<div className="text-sm font-mono text-white">65°C</div>
</div>
<div className="bg-dark-800 p-4 rounded border border-white/5 space-y-2 group-hover:border-brand-gold/30 transition-colors">
<svg className="lucide lucide-zap w-4 h-4 text-brand-gold mb-2" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<div className="text-[10px] text-gray-500 uppercase">Power</div>
<div className="text-sm font-mono text-white">12MW</div>
</div>
<div className="bg-dark-800 p-4 rounded border border-white/5 space-y-2 group-hover:border-brand-bronze/30 transition-colors">
<svg className="lucide lucide-activity w-4 h-4 text-green-500 mb-2" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<div className="text-[10px] text-gray-500 uppercase">Uptime</div>
<div className="text-sm font-mono text-white">99.9%</div>
</div>
</div>

<div className="flex-1 bg-dark-800 rounded border border-white/5 p-4 relative overflow-hidden flex items-end justify-between px-2 gap-1 group-hover:border-brand-gold/20 transition-colors">
<div className="w-full bg-brand-bronze/20 hover:bg-brand-gold/60 transition-colors h-[40%] rounded-t"></div>
<div className="w-full bg-brand-bronze/20 hover:bg-brand-gold/60 transition-colors h-[55%] rounded-t"></div>
<div className="w-full bg-brand-bronze/20 hover:bg-brand-gold/60 transition-colors h-[45%] rounded-t"></div>
<div className="w-full bg-brand-bronze/20 hover:bg-brand-gold/60 transition-colors h-[70%] rounded-t"></div>
<div className="w-full bg-brand-bronze/20 hover:bg-brand-gold/60 transition-colors h-[60%] rounded-t"></div>
<div className="w-full bg-brand-bronze/20 hover:bg-brand-gold/60 transition-colors h-[85%] rounded-t"></div>
<div className="w-full bg-brand-bronze/20 hover:bg-brand-gold/60 transition-colors h-[75%] rounded-t"></div>
<div className="w-full bg-gradient-to-t from-brand-bronze to-brand-gold opacity-80 h-[90%] rounded-t relative shadow-[0_0_15px_rgba(243,198,119,0.3)]">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-black font-bold bg-brand-gold px-1 rounded">ATH</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 z-30">
<div className="text-xs font-mono text-brand-gold mb-1">FACILITY: TEXAS_01</div>
<h4 className="text-xl font-semibold text-white">TEXITcoin Explorer</h4>
</div>
</div>

<div className="flex flex-col gap-8">

<div className="rotate-card group relative bg-dark-850 rounded-xl border border-dark-border overflow-hidden h-60">
<div className="absolute top-0 inset-x-0 h-10 bg-dark-900 border-b border-dark-border flex items-center px-4 gap-2 z-20">
<div className="text-[10px] text-gray-600 font-mono">aura-flow-wallet.app</div>
</div>
<div className="pt-10 h-full bg-[#080808] flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#8A4D33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

<div className="w-64 bg-dark-900 border border-white/10 rounded-lg p-4 shadow-2xl relative z-10 group-hover:border-brand-gold/30 transition-colors">
<div className="flex justify-between items-center mb-4">
<div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
<svg className="lucide lucide-wallet w-3 h-3 text-brand-gold" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<span className="text-[10px] text-brand-gold">+24.5%</span>
</div>
<div className="text-2xl font-bold text-white mb-1">2,450.00</div>
<div className="text-[10px] text-gray-500 font-mono">TXT COIN BALANCE</div>
</div>
</div>
<div className="absolute bottom-4 left-4 z-30 bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
<h4 className="text-xs font-semibold text-white">Crowdfund Wallet</h4>
</div>
</div>

<div className="rotate-card group relative bg-dark-850 rounded-xl border border-dark-border overflow-hidden h-60">
<div className="absolute top-0 inset-x-0 h-10 bg-dark-900 border-b border-dark-border flex items-center px-4 gap-2 z-20">
<div className="text-[10px] text-gray-600 font-mono">network-nodes.io</div>
</div>
<div className="pt-10 h-full bg-[#050505] p-6 flex items-center justify-center relative">

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="w-40 h-40 border border-brand-bronze/40 rounded-full animate-ping"></div>
<div className="w-24 h-24 border border-brand-gold/40 rounded-full absolute animate-pulse"></div>
</div>
<svg className="lucide lucide-globe w-16 h-16 text-brand-gold relative z-10 drop-shadow-[0_0_15px_rgba(243,198,119,0.5)]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="absolute bottom-4 left-4 z-30 bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
<h4 className="text-xs font-semibold text-white">Global Nodes</h4>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-dark-border bg-dark-950 relative z-10" id="transparency">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-xs font-mono text-brand-gold mb-4">/// THE AURA ADVANTAGE</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase text-white">Why Choose<br/>TEXITcoin?</h3>
</div>
<p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                    We combine physical infrastructure with decentralized finance. A model built for longevity and trust.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 bg-dark-800 border border-dark-border p-8 relative overflow-hidden group hover:border-brand-bronze/50 transition-colors duration-500">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<svg className="lucide lucide-map-pin w-24 h-24 text-brand-bronze" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-dark-900 w-12 h-12 flex items-center justify-center border border-dark-border mb-6">
<span className="font-mono text-brand-gold">01</span>
</div>
<div className="">
<h4 className="text-2xl font-semibold tracking-tight mb-2 text-white">Texas-Based Mining</h4>
<p className="text-gray-400">Strategically located in Texas, utilizing abundant energy resources. We operate with full regulatory compliance and local control, ensuring your investment is physically secure.</p>
</div>
</div>
</div>

<div className="bg-dark-800 border border-dark-border p-8 relative overflow-hidden group hover:border-brand-gold/50 transition-colors duration-500">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-dark-900 w-12 h-12 flex items-center justify-center border border-dark-border mb-6">
<span className="font-mono text-brand-gold">02</span>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-2 text-white">Crowdfunded</h4>
<p className="text-gray-400 text-sm">Privately owned by the community. No massive VC overlords. Direct participation in the mining infrastructure.</p>
</div>
</div>
</div>

<div className="bg-dark-800 border border-dark-border p-8 relative overflow-hidden group hover:border-brand-gold/50 transition-colors duration-500">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="bg-dark-900 w-12 h-12 flex items-center justify-center border border-dark-border mb-6">
<span className="font-mono text-brand-gold">03</span>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-2 text-white">Decentralized</h4>
<p className="text-gray-400 text-sm">Powered by a global platform that ensures no single point of failure. True DeFi principles applied to physical mining.</p>
</div>
</div>
</div>

<div className="md:col-span-2 bg-aura-gradient text-black p-8 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 flex items-center justify-center border border-black/20 mb-6 bg-black text-brand-gold">
<span className="font-mono">04</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="max-w-md">
<h4 className="text-2xl font-semibold tracking-tight mb-2">Compare to Bitcoin</h4>
<p className="text-black/80 font-medium">While Bitcoin becomes harder to mine for individuals, TEXITcoin democratizes access to industrial-scale hash power. Lower entry barrier, higher transparency.</p>
</div>
<svg className="lucide lucide-scale w-12 h-12 opacity-80" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-dark-border bg-dark-900 relative z-10" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-xs font-mono text-brand-gold mb-4">/// ROADMAP</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase text-white">From Concept to<br/>Global Hashrate.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-dark-border">

<div className="border-b border-r border-dark-border p-8 hover:bg-dark-800 transition-colors group">
<span className="text-xs font-mono text-gray-500 mb-6 block group-hover:text-brand-gold transition-colors">PHASE_01</span>
<h4 className="text-xl font-semibold uppercase mb-4 text-white">Crowdfunding</h4>
<p className="text-sm text-gray-400">Community funding round opens. Participants acquire TEXITcoin and secure stake in the initial mining fleet.</p>
</div>

<div className="border-b border-r border-dark-border p-8 hover:bg-dark-800 transition-colors group">
<span className="text-xs font-mono text-gray-500 mb-6 block group-hover:text-brand-gold transition-colors">PHASE_02</span>
<h4 className="text-xl font-semibold uppercase mb-4 text-white">Deployment</h4>
<p className="text-sm text-gray-400">Hardware acquisition and installation at our Texas facilities. Grid connection and systems testing.</p>
</div>

<div className="border-b border-r border-dark-border p-8 hover:bg-dark-800 transition-colors group">
<span className="text-xs font-mono text-gray-500 mb-6 block group-hover:text-brand-gold transition-colors">PHASE_03</span>
<h4 className="text-xl font-semibold uppercase mb-4 text-white">Mining Live</h4>
<p className="text-sm text-gray-400">Operations commence. Hashrate is directed to the pool. Real-time monitoring dashboard goes public.</p>
</div>

<div className="border-b border-r border-dark-border p-8 bg-dark-800 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-gold/5"></div>
<span className="text-xs font-mono text-brand-gold mb-6 block">PHASE_04</span>
<h4 className="text-xl font-semibold uppercase mb-4 text-white">Rewards</h4>
<p className="text-sm text-gray-400 mb-6">Distribution of mining rewards to TEXITcoin holders via smart contracts.</p>
<div className="h-1 w-full bg-dark-700 overflow-hidden">
<div className="h-full bg-brand-gold w-1/2 animate-pulse"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-dark-border relative z-10" id="mining">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-xs font-mono text-brand-gold mb-4">/// PARTICIPATION</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase mb-6 text-white">Mining Tiers.</h3>
<p className="text-gray-400">Secure your hashrate allocation today.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-dark-800 border border-dark-border p-8 flex flex-col relative group hover:border-brand-bronze transition-colors">
<div className="mb-6">
<h4 className="text-xl font-semibold uppercase text-brand-bronze">Seed Round</h4>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-mono text-white">$500</span>
<span className="text-gray-500">min</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-300 font-mono">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand-bronze" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Early Access
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand-bronze" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1x Voting Rights
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand-bronze" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Standard Rewards
                        </li>
</ul>
<a className="mt-auto w-full border border-white/20 py-3 text-center text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors" href="#">Join Seed</a>
</div>

<div className="bg-dark-900 border-2 border-brand-gold p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(243,198,119,0.15)]">
<div className="absolute top-0 right-0 bg-brand-gold text-black text-[10px] font-bold uppercase px-3 py-1">Most Popular</div>
<div className="mb-6">
<h4 className="text-xl font-semibold uppercase text-brand-gold">Public Sale</h4>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-mono text-white">$2,500</span>
<span className="text-gray-500">min</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-300 font-mono">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand-gold" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority Hashrate
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand-gold" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 5x Voting Rights
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-brand-gold" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Boosted Rewards
                        </li>
</ul>
<a className="mt-auto w-full bg-aura-gradient text-black py-3 text-center text-sm font-semibold uppercase tracking-wide hover:brightness-110 transition-colors" href="#">Join Public</a>
</div>

<div className="bg-dark-800 border border-dark-border p-8 flex flex-col relative group hover:border-brand-bronze transition-colors">
<div className="mb-6">
<h4 className="text-xl font-semibold uppercase text-white">Institutional</h4>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-mono text-white">Custom</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-300 font-mono">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-gray-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated Racks
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-gray-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Managed Custody
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-gray-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Direct API Access
                        </li>
</ul>
<a className="mt-auto w-full border border-white/20 py-3 text-center text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-dark-border relative z-10">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl font-medium tracking-tighter uppercase text-white">Common Questions</h2>
</div>
<div className="space-y-4">
<details className="group bg-dark-800 border border-dark-border open:border-brand-gold/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white hover:text-brand-gold transition-colors">
<span className="uppercase tracking-wide text-xs">Where is the mining done?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                        All mining operations are physically located in our secured facilities in Texas, USA. We leverage local energy grids to ensure stability and low-cost operations.
                    </div>
</details>
<details className="group bg-dark-800 border border-dark-border open:border-brand-gold/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white hover:text-brand-gold transition-colors">
<span className="uppercase tracking-wide text-xs">How do I receive rewards?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                        Rewards are distributed automatically to your connected wallet via smart contracts based on your stake in the pool. Distributions occur daily.
                    </div>
</details>
<details className="group bg-dark-800 border border-dark-border open:border-brand-gold/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white hover:text-brand-gold transition-colors">
<span className="uppercase tracking-wide text-xs">Is TEXITcoin decentralized?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="group-open:animate-fadeIn mt-0 px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                        Yes. While the physical infrastructure is centralized for efficiency, the ownership and governance of the protocol are fully decentralized through the TEXITcoin token.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-dark-900 pt-24 pb-12 border-t border-dark-border relative z-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
<div className="max-w-xl">
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter uppercase mb-8 leading-[0.8] text-white">
                        Start<br/><span className="text-aura-gradient">Mining.</span>
</h2>
<p className="text-gray-400 mb-8">Join the revolution in decentralized physical infrastructure networks.</p>
<a className="inline-flex items-center gap-2 border-b border-brand-gold text-xl text-white hover:text-brand-gold transition-colors pb-1" href="#">
                        connect@aura-flow.io
                        <svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 gap-12 text-sm text-gray-400">
<div className="flex flex-col gap-4">
<span className="text-white font-semibold uppercase tracking-wide">Community</span>
<a className="hover:text-brand-gold transition-colors" href="#">Discord</a>
<a className="hover:text-brand-gold transition-colors" href="#">Telegram</a>
<a className="hover:text-brand-gold transition-colors" href="#">Twitter / X</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white font-semibold uppercase tracking-wide">Resources</span>
<a className="hover:text-brand-gold transition-colors" href="#">Whitepaper</a>
<a className="hover:text-brand-gold transition-colors" href="#">Audit Report</a>
<a className="hover:text-brand-gold transition-colors" href="#">Tokenomics</a>
</div>
</div>
</div>
<div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono uppercase">
<div>© 2024 Aura Flow / TEXITcoin. All rights reserved.</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
                    Mining Operations: Online
                </div>
</div>

<div className="mt-12 select-none pointer-events-none">
<h1 className="text-[14vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-t from-dark-900 via-dark-800 to-dark-800 text-center tracking-tighter opacity-30">TEXITCOIN</h1>
</div>
</div>
</footer>


    </>
  );
}

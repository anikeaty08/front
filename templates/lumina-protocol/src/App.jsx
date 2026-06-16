import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
emerald: {
400: '#34d399',
500: '#10b981',
600: '#059669',
900: '#064e3b',
950: '#022c22',
},
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'scroll': 'scroll 40s linear infinite',
'blob': 'blob 10s infinite',
'dash': 'dash 20s linear infinite',
'scan': 'scan 4s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-super-slow': 'spin 120s linear infinite',
'rays': 'rays 20s linear infinite',
'slide-up': 'slideUp 0.5s ease-out forwards',
},
keyframes: {
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'grid-slate': 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
'grid-slate-light': 'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const themeToggleBtn = document.getElementById('theme-toggle');
            const htmlRoot = document.getElementById('html-root');
            
            if (localStorage.theme === 'light') {
                htmlRoot.classList.remove('dark');
            } else {
                htmlRoot.classList.add('dark');
            }

            themeToggleBtn.addEventListener('click', () => {
                if (htmlRoot.classList.contains('dark')) {
                    htmlRoot.classList.remove('dark');
                    localStorage.theme = 'light';
                } else {
                    htmlRoot.classList.add('dark');
                    localStorage.theme = 'dark';
                }
            });

            const reveals = document.querySelectorAll('.reveal-base');
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 50;
                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('reveal-active');
                    }
                });
            };
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-mesh"></div>

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#020617]/70 backdrop-blur-xl transition-colors duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center text-emerald-600 dark:text-emerald-400">
<div className="absolute inset-0 bg-emerald-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="iconify group-hover:rotate-180 transition-transform duration-700 relative z-10" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8" fill="currentColor" opacity=".5"></path><path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2" fill="currentColor"></path></svg>
</div>
<span className="dark:text-white text-lg font-bold text-slate-900 tracking-tight font-display">Lumina</span>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
<a className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#product">Platform</a>
<a className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#features">Features</a>
<a className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#developers">Developers</a>
<a className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all focus:outline-none" id="theme-toggle">
<svg aria-hidden="true" className="iconify block dark:hidden w-4 h-4 iconify--lucide" data-icon="lucide:moon" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify hidden dark:block w-4 h-4 iconify--lucide" data-icon="lucide:sun" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</button>
<div className="h-4 w-px bg-slate-200 dark:bg-white/10 hidden md:block"></div>
<a className="hidden md:block text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" href="#login">Log in</a>
<a className="px-4 py-2 text-xs font-bold text-white dark:text-slate-950 bg-slate-900 dark:bg-emerald-400 rounded-lg hover:bg-slate-800 dark:hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/10 flex items-center gap-2" href="#register">
                    Get Started
                </a>
</div>
</div>
</nav>

<header className="md:pt-40 md:pb-24 overflow-hidden z-10 pt-28 pb-20 relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

<div className="hero-radial-lines"></div>

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob"></div>
<div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-blue-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000"></div>
<div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-cyan-400/10 dark:bg-cyan-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[90px] animate-blob"></div>
</div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">

<a className="reveal-base inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-8 hover:bg-emerald-500/10 transition-colors cursor-pointer reveal-active" href="#">
<span className="inline-block px-1.5 py-0.5 rounded-sm bg-emerald-500 text-white dark:text-slate-900 text-[10px] font-bold">NEW</span>
<span>Instant payouts to 140+ countries</span>
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
</a>

<h1 className="reveal-base delay-100 text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1] reveal-active">
                Simple global<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-cyan-400">money transfers.</span>
</h1>
<p className="reveal-base delay-200 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 font-medium leading-relaxed tracking-tight reveal-active">
                The modern financial stack for SaaS. Automate payouts, manage liquidity, and issue cards with a single API.
            </p>
<div className="reveal-base delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 reveal-active">
<button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 text-sm font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-emerald-400 transition-all shadow-xl shadow-slate-900/10 dark:shadow-emerald-500/20 flex items-center justify-center gap-2">
                    Create free account
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M10 9l5 3-5 3z"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect></svg>
                    See how it works
                </button>
</div>

<div className="reveal-base delay-300 relative max-w-5xl mx-auto reveal-active perspective-1000 group">

<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
<div className="relative rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c111d] shadow-2xl overflow-hidden transform md:rotate-x-2 transition-transform duration-700 hover:rotate-0">

<div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px] md:min-h-[500px]">

<div className="hidden md:flex md:col-span-2 flex-col justify-between border-r border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-[#0c111d] p-4">
<div className="space-y-1">
<div className="flex items-center gap-2 px-2 py-3 mb-4">
<div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-white text-[10px] font-bold">L</div>
<span className="text-sm font-bold text-slate-900 dark:text-white">Lumina Inc.</span>
</div>
<div className="px-2 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M7 17l9.2-9.2M17 17V7H7"></path></svg>
                                    Transfers
                                </div>
<div className="px-2 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 text-xs font-bold flex items-center gap-2 transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></svg>
                                    Cards
                                </div>
<div className="px-2 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 text-xs font-bold flex items-center gap-2 transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                                    History
                                </div>
</div>
<div className="px-2">
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Team</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-200 border border-white dark:border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-slate-300 border border-white dark:border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-slate-400 flex items-center justify-center text-[8px] text-white border border-white dark:border-slate-900">+3</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-10 p-6 md:p-8 bg-white dark:bg-[#0c111d]">
<div className="flex justify-between items-center mb-8">
<h2 className="text-xl font-bold text-slate-900 dark:text-white">Send Money</h2>
<div className="flex items-center gap-2 text-sm text-slate-500">
<span>Balance:</span>
<span className="font-mono font-bold text-slate-900 dark:text-white">$142,500.00</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="space-y-6">
<div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:border-emerald-500 transition-colors group">
<div className="flex justify-between mb-2">
<label className="text-xs font-bold text-slate-500 uppercase">You send</label>
<div className="flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 px-2 py-0.5 rounded-full">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg> Instant
                                            </div>
</div>
<div className="flex items-center gap-4">
<span className="text-3xl font-medium text-slate-900 dark:text-white">$</span>
<input className="w-full bg-transparent text-3xl font-medium text-slate-900 dark:text-white border-none focus:ring-0 p-0 placeholder-slate-300" placeholder="0.00" type="text" value="5,000"/>
<div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-200 dark:hover:bg-white/10">
<img className="w-5 h-5 rounded-full object-cover" src="https://flagcdn.com/us.svg"/>
<span className="font-bold text-sm">USD</span>
<svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 hover:border-emerald-500 transition-colors group relative">

<div className="absolute -top-5 left-8 w-8 h-8 rounded-full bg-white dark:bg-[#0c111d] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 z-10">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M7 11l5 5 5-5M7 17l5 5 5-5"></path></svg>
</div>
<div className="flex justify-between mb-2">
<label className="text-xs font-bold text-slate-500 uppercase">Recipient gets</label>
<span className="text-xs font-mono text-slate-400">Rate: 0.92</span>
</div>
<div className="flex items-center gap-4">
<span className="text-3xl font-medium text-slate-900 dark:text-white">€</span>
<input className="w-full bg-transparent text-3xl font-medium text-slate-900 dark:text-white border-none focus:ring-0 p-0 placeholder-slate-300" type="text" value="4,600"/>
<div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-200 dark:hover:bg-white/10">
<img className="w-5 h-5 rounded-full object-cover" src="https://flagcdn.com/eu.svg"/>
<span className="font-bold text-sm">EUR</span>
<svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
</div>
</div>
</div>
<button className="w-full py-4 bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold rounded-xl transition-all shadow-lg text-sm flex items-center justify-center gap-2">
                                        Send Transfer
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7"></path></svg>
</button>
</div>

<div className="hidden lg:block border-l border-slate-100 dark:border-white/5 pl-8">
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">Live Transactions</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-900 dark:text-white">Design Agency</div>
<div className="text-[10px] text-slate-500">To: France • SEPA</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-mono font-bold text-slate-900 dark:text-white">-€2,400.00</div>
<div className="text-[10px] text-emerald-500 font-bold">Sent</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-900 dark:text-white">Contractor Payout</div>
<div className="text-[10px] text-slate-500">To: UK • FPS</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-mono font-bold text-slate-900 dark:text-white">-£850.00</div>
<div className="text-[10px] text-emerald-500 font-bold">Sent</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M19 12H5m7 7l-7-7 7-7"></path></svg>
</div>
<div>
<div className="text-sm font-bold text-slate-900 dark:text-white">Stripe Payout</div>
<div className="text-[10px] text-slate-500">From: US • ACH</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400">+$12,400.00</div>
<div className="text-[10px] text-slate-400">Pending</div>
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
</header>

<section className="border-y border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] py-10 relative overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 text-center">
<p className="text-sm font-semibold text-slate-500 mb-8">Trusted by finance teams at modern companies</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-bold font-display text-slate-800 dark:text-white"><svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg> Layers</div>
<div className="flex items-center gap-2 text-xl font-bold font-display text-slate-800 dark:text-white"><svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg> Orbit</div>
<div className="flex items-center gap-2 text-xl font-bold font-display text-slate-800 dark:text-white"><svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> Frame</div>
<div className="flex items-center gap-2 text-xl font-bold font-display text-slate-800 dark:text-white"><svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"></path></svg> Vercel</div>
<div className="flex items-center gap-2 text-xl font-bold font-display text-slate-800 dark:text-white"><svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Acme</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-slate-50 dark:bg-[#020617]" id="features">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl text-slate-900 dark:text-white tracking-tighter mb-6 font-semibold font-display">
                    Automate your <br/>
<span className="text-slate-400">financial operations.</span>
</h2>
<p className="text-slate-500 dark:text-slate-400 text-lg">
                    Stop wasting time on manual reconciliation. Let our intelligent engine handle the heavy lifting for your finance team.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

<div className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></g></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Smart Reconciliation</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Automatically match incoming payments with outstanding invoices. Reduce manual data entry errors by 99%.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></g></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Multi-entity Management</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Manage spend across multiple subsidiaries from a single dashboard. Real-time consolidation and inter-company transfers.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></g></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Expense Controls</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Set granular limits and approval workflows. Prevent out-of-policy spend before it happens with proactive rules.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 gap-6 reveal-base">

<div className="md:col-span-4 rounded-3xl p-8 bg-white dark:bg-[#0c111d] border border-slate-200 dark:border-white/5 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Real-time Financial Reporting</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">Instant visibility into your cash flow. Generate P&amp;L statements, balance sheets, and cash flow reports on demand.</p>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-50 dark:opacity-20 mask-image-linear-to-l pointer-events-none">
<svg className="w-full h-full text-red-500" preserveaspectratio="none" viewbox="0 0 400 200">
<path className="animate-dash" d="M0 150 Q 50 150, 100 120 T 200 100 T 300 60 T 400 80" fill="none" stroke="currentColor" stroke-dasharray="10" strokeWidth="2"></path>
<path d="M0 150 Q 50 150, 100 120 T 200 100 T 300 60 T 400 80 V 200 H 0 Z" fill="currentColor" fillOpacity="0.1" stroke="none"></path>
</svg>
</div>
</div>

<div className="md:col-span-2 rounded-3xl p-8 bg-emerald-500 text-white flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
<span className="text-xs font-bold uppercase opacity-80">Sync Speed</span>
</div>
<div className="text-5xl font-display font-bold mb-1">Instant</div>
<p className="text-xs font-medium opacity-80">Real-time ledger updates across all accounts.</p>
</div>
</div>

<div className="md:col-span-2 rounded-3xl p-8 bg-white dark:bg-[#0c111d] border border-slate-200 dark:border-white/5 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Seamless Integrations</h3>
<p className="text-xs text-slate-500 dark:text-slate-400">Connect with Xero, QuickBooks, and NetSuite in seconds.</p>
</div>

<div className="md:col-span-4 rounded-3xl p-8 bg-white dark:bg-[#0c111d] border border-slate-200 dark:border-white/5 relative overflow-hidden group flex items-center justify-between">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Comprehensive Audit Trails</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Every action is logged, immutable, and searchable. Export audit-ready reports with one click for tax season.</p>
</div>
<div className="hidden md:flex flex-col gap-2 opacity-50">
<div className="flex items-center gap-2 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Immutable Logs
                        </div>
<div className="flex items-center gap-2 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Export Ready
                        </div>
<div className="flex items-center gap-2 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> SOC 1/2 Compliant
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-50 dark:bg-[#0a0f1c] border-slate-200 dark:border-slate-800 border-t pt-24 pb-24 relative" id="developers">
<div className="absolute inset-0 bg-grid-slate-light dark:bg-grid-slate opacity-100 dark:opacity-20 pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row gap-6 md:items-end mb-16">
<div className="max-w-2xl">
<div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-500 mb-4">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
<span className="font-bold text-sm tracking-wide uppercase">Real Results</span>
</div>
<h2 className="text-4xl md:text-6xl text-slate-900 dark:text-white font-display font-semibold tracking-tighter leading-tight">
                        Built for impact at <br/>
<span className="text-slate-400 dark:text-slate-500">global scale.</span>
</h2>
</div>
<div className="md:ml-auto md:max-w-xs">
<p className="text-slate-500 dark:text-slate-400 font-medium">Join thousands of companies automating their financial operations with Lumina.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="col-span-1 md:col-span-1 xl:col-span-1 glass-card bg-white dark:bg-slate-800/40 p-6 rounded-2xl flex flex-col justify-between group hover:border-emerald-500/30 transition-all border border-slate-200 dark:border-slate-700">
<div className="">
<div className="flex items-end gap-1 mb-2">
<span className="text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tighter">99.8<span className="text-3xl text-emerald-600 dark:text-emerald-500">%</span></span>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Success rate across 250K+ automated workflows with industry-leading reliability.</p>
</div>
<div className="mt-8 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 border border-white dark:border-slate-800 flex items-center justify-center text-[10px] text-slate-500 dark:text-slate-300">NF</div>
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 border border-white dark:border-slate-800 flex items-center justify-center text-[10px] text-slate-500 dark:text-slate-300">NF</div>
<div className="w-8 h-8 rounded-full bg-emerald-500 border border-white dark:border-slate-800 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-emerald-500/20">2k</div>
</div>
<div className="text-xs font-bold text-emerald-600 dark:text-emerald-500 flex items-center gap-1 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-1 rounded-full">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-10 10-6-6-6 6"></path></svg>
                            +14% Growth
                        </div>
</div>
</div>

<div className="glass-card bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors flex flex-col justify-between">
<div>
<div className="mb-4">
<div className="flex gap-1 text-emerald-500 dark:text-emerald-400 mb-2">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-lg text-slate-900 dark:text-white font-medium leading-snug">"Lumina reduced our manual processing time by 85%. It's magic."</p>
</div>
</div>
<div className="flex items-center gap-3 mt-4">
<div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-200 dark:border-indigo-500/20">SC</div>
<div>
<div className="text-sm font-bold text-slate-900 dark:text-white">Sarah Chen</div>
<div className="text-xs text-slate-500">CTO, TechFlow</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 xl:col-span-1 glass-card bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-500 mb-4">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
</div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Developer First</h4>
<p className="text-sm text-slate-500 dark:text-slate-400">Typed SDKs, robust webhooks, and instant sandbox environments.</p>
</div>
<div className="mt-6 flex flex-col gap-2">
<span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-[10px] text-slate-600 dark:text-slate-300 font-mono">npm i @lumina/sdk</span>
<span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-[10px] text-slate-600 dark:text-slate-300 font-mono">pip install lumina</span>
</div>
</div>

<div className="col-span-1 md:col-span-1 xl:col-span-1 glass-card bg-white dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors flex flex-col justify-between">
<div className="">
<div className="mb-4">
<div className="flex gap-1 text-emerald-500 dark:text-emerald-400 mb-2">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-lg text-slate-900 dark:text-white font-medium leading-snug">"The AI fraud detection saved us millions in potential lost revenue."</p>
</div>
</div>
<div className="flex items-center gap-3 mt-4">
<div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold border border-orange-200 dark:border-orange-500/20">MJ</div>
<div>
<div className="text-sm font-bold text-slate-900 dark:text-white">Marcus Jones</div>
<div className="text-xs text-slate-500">VP Eng, Innovate</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="dark:bg-[#020617] bg-white pt-24 pb-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Developer Experience
                </div>
<h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white font-display font-semibold tracking-tight mb-6">
                    Designed for 
                    <span className="text-slate-500">developers first.</span>
</h2>
<p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                    Integrate global money movement into your product with just a few lines of code. Our SDKs are typed, documented, and production-ready.
                </p>
<div className="flex gap-4">
<button className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center gap-2">
                        Read the Docs 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7"></path></svg>
</button>
<button className="px-6 py-3 bg-transparent border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                        Get API Key
                    </button>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative rounded-xl bg-[#0d1117] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#010409]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div className="text-xs text-slate-500 font-mono">transfer.ts</div>
</div>
<div className="p-6 overflow-x-auto custom-scrollbar">
<pre className="font-mono text-sm leading-7 text-slate-300"><span className="text-slate-500">// 1. Initialize client</span>
<span className="text-purple-400">import</span> { Lumina } <span className="text-purple-400">from</span> <span className="text-green-400">'@lumina/sdk'</span>;
<span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-300">Lumina</span>(<span className="text-green-400">'sk_live_...'</span>);

<span className="text-slate-500">// 2. Create instant transfer</span>
<span className="text-purple-400">const</span> transfer = <span className="text-purple-400">await</span> client.transfers.<span className="text-blue-400">create</span>({
  <span className="text-blue-300">amount:</span> <span className="text-orange-400">2400</span>,
  <span className="text-blue-300">currency:</span> <span className="text-green-400">'EUR'</span>,
  <span className="text-blue-300">destination:</span> <span className="text-green-400">'acct_france_123'</span>,
  <span className="text-blue-300">description:</span> <span className="text-green-400">'Design Services'</span>
});

console.<span className="text-blue-400">log</span>(transfer.<span className="text-blue-300">status</span>); 
<span className="text-slate-500">// Output: 'processing'</span>
</pre>
</div>
</div>
</div>
</div>
</div>

<section className="py-24 relative overflow-hidden bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800" id="cta-section">

<div className="absolute inset-0 noise-bg opacity-30 dark:opacity-20 pointer-events-none mix-blend-overlay"></div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tighter mb-4 text-slate-900 dark:text-white">
                        Loved by finance teams <br/>
<span className="text-slate-500">at the world's best companies.</span>
</h2>
</div>
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-white flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-white flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 18l6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-8 relative group overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-10 h-full flex flex-col justify-between relative z-10">
<svg className="w-12 h-12 text-emerald-500 mb-6 opacity-80" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
<h3 className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-slate-900 dark:text-white mb-8">
                            "Before Lumina, we had a team of five managing manual wire transfers. Now, it's fully automated. We've saved <span className="text-emerald-600 dark:text-emerald-400 font-bold">$1.2M</span> in annual operational costs."
                        </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border-2 border-emerald-500/20 p-0.5">
<img alt="Profile" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div>
<div className="font-bold text-slate-900 dark:text-white">Elena Rodriguez</div>
<div className="text-sm text-slate-500 dark:text-slate-400">Head of Finance at <span className="text-slate-900 dark:text-white font-semibold">ScaleAI</span></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 relative group overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col items-center justify-center p-8">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 dark:from-blue-900/20 via-slate-900/0 to-slate-900/0 opacity-50"></div>
<div className="relative z-10 text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 mb-6 group-hover:scale-110 transition-transform duration-500 border border-slate-200 dark:border-slate-700">
<svg className="w-8 h-8 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2v20M2 12h20"></path></svg>
</div>
<div className="text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tighter mb-2">$10B+</div>
<p className="text-sm text-slate-500 dark:text-slate-400">Transaction volume processed annually.</p>
</div>
</div>

<div className="md:col-span-4 relative group overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 p-8">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a04258114e29026302d"/>
</div>
<div>
<div className="text-sm font-bold text-slate-900 dark:text-white">James K.</div>
<div className="text-xs text-slate-500">@james_builds</div>
</div>
</div>
<svg className="w-5 h-5 text-slate-400 dark:text-slate-600" fill="currentColor" viewbox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
</div>
<p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        Implemented @lumina in 2 hours. The webhook reliability is unmatched. Finally a payments API that feels like it was built in 2024. 🚀
                    </p>
<div className="mt-4 text-xs text-slate-400 dark:text-slate-500">10:42 AM · Oct 12, 2024</div>
</div>

<div className="md:col-span-8 relative group overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="p-8 h-full flex items-center justify-between relative z-10">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Global Network</span>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Local rails, worldwide.</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Access local payment rails (SEPA, FPS, ACH) in 140+ countries without entity setup.</p>
</div>

<div className="hidden md:grid grid-cols-6 gap-2 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white animate-pulse"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-[#020617] bg-white pt-12 pb-12">
<div className="max-w-[1200px] mx-auto px-6">
<div className="bg-slate-50 dark:bg-slate-900 overflow-hidden md:px-16 md:py-20 text-center rounded-3xl pt-16 pr-6 pb-16 pl-6 relative border border-slate-200 dark:border-slate-800 transition-colors duration-300">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/30 rounded-full blur-[100px] pointer-events-none transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/30 rounded-full blur-[100px] pointer-events-none transition-colors duration-500"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-display font-semibold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors duration-300">
            Ready to modernize your financial stack?
        </h2>
<p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto mb-10 transition-colors duration-300">
            Join 4,000+ companies moving billions annually with Lumina. Start with a free account, no credit card required.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-3.5 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
                Start Building Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7"></path></svg>
</button>
<button className="px-8 py-3.5 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-white/10 dark:text-white dark:border-white/10 dark:hover:bg-white/20 font-semibold rounded-xl transition-all">
                Contact Sales
            </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#020617] pt-16 pb-8">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
<div className="flex items-center gap-2 text-slate-900 dark:text-white">
<svg className="iconify text-emerald-500" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8" fill="currentColor" opacity=".5"></path><path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2" fill="currentColor"></path></svg>
<span className="text-lg font-bold font-display">Lumina</span>
</div>
<div className="flex gap-8 text-sm font-semibold text-slate-500">
<a className="hover:text-emerald-500 transition-colors" href="#">Platform</a>
<a className="hover:text-emerald-500 transition-colors" href="#">Documentation</a>
<a className="hover:text-emerald-500 transition-colors" href="#">Support</a>
<a className="hover:text-emerald-500 transition-colors" href="#">Status</a>
</div>
</div>
<div className="border-t border-slate-100 dark:border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2024 Lumina Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-slate-500">All systems operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}

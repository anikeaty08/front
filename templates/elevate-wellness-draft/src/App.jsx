import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
brand: {
dark: '#0F0458', // Deep Indigo
blue: '#1E3A8A', // Mid Blue
cyan: '#22D3EE', // Cyan
surface: '#F8FAFC',
border: 'rgba(15, 23, 42, 0.08)'
}
},
animation: {
'blob': 'blob 10s infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'shimmer': 'shimmer 2s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1) rotate(45deg)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9) rotate(90deg)' },
'100%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-mesh"></div>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-5%] left-[-5%] w-[40rem] h-[40rem] bg-brand-blue/5 rounded-[3rem] rotate-45 mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
<div className="absolute top-[10%] right-[-10%] w-[35rem] h-[35rem] bg-brand-cyan/5 rounded-[3rem] rotate-12 mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[30rem] h-[30rem] bg-indigo-50 rounded-[3rem] rotate-[-12deg] mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed z-50 backdrop-blur-[20px] flex transition-all duration-300 bg-white/70 w-full border-slate-200/50 border-b pt-4 pr-6 pb-4 pl-6 top-0 left-0 shadow-[0_2px_8px_rgba(0,0,0,0.02)] items-center justify-between">
<div className="flex w-full max-w-7xl mr-auto ml-auto items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="relative w-8 h-8 flex items-center justify-center">
<svg fill="none" height="32" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L2 28H8L16 12L24 28H30L16 2Z" fill="#1E3A8A"></path>
<path d="M16 18L12 26H20L16 18Z" fill="#22D3EE"></path>
</svg>
</div>
<span className="text-brand-dark cursor-pointer text-lg font-bold tracking-tight" onclick="window.location.href='/home'" role="button">ELEVATE</span>
</div>
<div className="hidden md:flex gap-x-5 gap-y-10 items-center">
<a className="uppercase text-brand-dark transition-colors text-xs font-semibold text-slate-500 tracking-wider" href="/page1-ecosystem">Ecosystem</a>
<a className="uppercase hover:text-brand-dark transition-colors text-xs font-semibold text-slate-500 tracking-wider" href="/page-2-programs">PROGRAMS</a>
<a className="uppercase hover:text-brand-dark transition-colors text-xs font-semibold text-slate-500 tracking-wider" href="/page-3-impact">IMPACT</a>
<a className="uppercase hover:text-brand-dark transition-colors text-xs font-semibold text-slate-500 tracking-wider" href="/page-4-campaigns">campaigns
</a><a className="uppercase hover:text-brand-dark transition-colors text-xs font-semibold text-slate-500 tracking-wider" href="/page-5-about-page">about</a><a className="uppercase hover:text-brand-dark transition-colors text-xs font-semibold text-slate-500 tracking-wider" href="/page-6-partner-with-us">partners</a><a className="uppercase hover:text-brand-dark transition-colors text-xs font-semibold text-slate-500 tracking-wider" href="/page-7-faq">FAQ</a><a className="uppercase hover:text-brand-dark transition-colors text-xs font-semibold text-slate-500 tracking-wider" href="/page-8-contact-page-2">Contact</a></div>
<div className="flex items-center gap-4">
<a className="text-xs font-semibold text-slate-600 hover:text-brand-dark transition-colors hidden sm:block" href="#">LOG IN</a>
<a className="shimmer-btn px-6 py-2.5 text-xs font-bold text-white uppercase tracking-wider rounded-md hover:shadow-lg hover:shadow-brand-blue/20 transition-all transform hover:-translate-y-0.5" href="#">
                    Join Now
                </a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-40 pr-6 pb-20 pl-6 relative">
<div className="z-10 text-center max-w-5xl mr-auto ml-auto relative">

<div className="animate-fade-in-up inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/50 border border-white/60 backdrop-blur-md shadow-sm mb-10 hover:bg-white/80 transition-colors cursor-default">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-cyan"></span>
</span>
<span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">Powered by 4Change Foundation</span>
</div>

<h1 className="animate-fade-in-up md:text-7xl lg:text-8xl leading-[0.95] text-glow text-5xl font-semibold text-slate-900 tracking-tight mb-8" style={{animationDelay: '0.1s'}}>
                Wellness is the Start.<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-dark via-brand-blue to-brand-cyan bg-[length:200%_auto] animate-shimmer">
                    Leadership is the Goal.
                </span>
</h1>

<p className="animate-fade-in-up text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-tight" style={{animationDelay: '0.2s'}}>
                A living ecosystem where your daily habits unlock real-world value. Invest in yourself, earn rewards, and rise as a leader.
            </p>

<div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{animationDelay: '0.3s'}}>
<a className="group relative px-8 py-3.5 rounded bg-brand-dark text-white text-xs font-medium uppercase tracking-widest overflow-hidden shadow-xl shadow-brand-dark/10 hover:shadow-brand-dark/20 transition-all hover:-translate-y-0.5" href="#">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative flex items-center gap-3">
                        Join the Movement
                        <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="px-8 py-3.5 rounded bg-white/40 border border-white/60 backdrop-blur-sm text-slate-700 text-xs font-medium uppercase tracking-widest hover:bg-white/70 transition-colors flex items-center gap-3" href="#">
<svg className="text-brand-blue" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="m9 8 6 4-6 4Z"></path></svg>
                    Watch Film
                </a>
</div>
</div>

<div className="absolute top-1/2 left-8 hidden lg:block animate-blob animation-delay-2000">
<div className="glass p-3 rounded flex items-center gap-4 w-48 shadow-sm -rotate-2 border-l-2 border-brand-blue/60">
<div className="w-9 h-9 rounded bg-blue-50/80 flex items-center justify-center text-brand-blue">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<div className="text-[9px] font-semibold uppercase text-slate-400 tracking-wider">Daily Goal</div>
<div className="text-xs font-semibold text-slate-700">Completed</div>
</div>
</div>
</div>
<div className="absolute bottom-20 right-8 hidden lg:block animate-blob">
<div className="glass p-3 rounded flex items-center gap-4 w-52 shadow-sm rotate-2 border-l-2 border-brand-cyan/60">
<div className="w-9 h-9 rounded bg-cyan-50/80 flex items-center justify-center text-brand-cyan">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div>
<div className="text-[9px] font-semibold uppercase text-slate-400 tracking-wider">Reward</div>
<div className="text-xs font-semibold text-slate-700">+250 YuCoin</div>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-slate-200/60 bg-white/30 backdrop-blur-sm overflow-hidden">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-[10px] font-semibold tracking-[0.2em] text-slate-400 uppercase mb-8 opacity-80">Trusted by Industry Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
<div className="font-semibold text-lg tracking-tight text-slate-800">4CHANGE<span className="font-light text-slate-500">FOUNDATION</span></div>
<div className="font-semibold text-xl tracking-tight text-brand-dark">YuLife</div>
<div className="font-semibold text-xl text-brand-cyan">gradlinc.</div>
<div className="font-semibold text-lg tracking-tight italic text-slate-900">Capitec</div>
<div className="font-semibold text-base text-blue-600 border border-blue-600 px-2 py-0.5 rounded-sm">Dis-Chem</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="md:text-5xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">More Than an App. <span className="text-slate-400">A Engine for Good.</span></h2>
<p className="text-slate-500 text-lg font-light leading-relaxed">
                    We've replaced the charity model with an opportunity engine. Your growth creates value that flows back to you and your community.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-xl p-8 relative overflow-hidden group reveal">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-[3rem] transition-transform group-hover:scale-125 duration-700"></div>
<div className="w-12 h-12 rounded bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand-blue mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 relative z-10 tracking-tight">Live Well</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10 font-light">
                        Physical, mental, and financial wellness. Build the foundation of a healthy life through gamified daily habits.
                    </p>
</div>

<div className="glass-card rounded-xl p-8 relative overflow-hidden group reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-bl-[3rem] transition-transform group-hover:scale-125 duration-700"></div>
<div className="w-12 h-12 rounded bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand-cyan mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 relative z-10 tracking-tight">Lead Well</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10 font-light">
                        Unlock pathways to self-governance. Access leadership training that turns potential into influence.
                    </p>
</div>

<div className="glass-card rounded-xl p-8 relative overflow-hidden group reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/30 rounded-bl-[3rem] transition-transform group-hover:scale-125 duration-700"></div>
<div className="w-12 h-12 rounded bg-white shadow-sm border border-slate-100 flex items-center justify-center text-purple-500 mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 relative z-10 tracking-tight">Lift Others</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10 font-light">
                        Move from success to significance. Your progress unlocks community projects and mentorship opportunities.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-y border-slate-100 bg-white/40 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center reveal">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-50/50 text-brand-blue text-[10px] font-semibold tracking-wide uppercase mb-6 border border-blue-100/50">
                        The Pathway
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">From Activation to Ambassador.</h2>
<p className="text-slate-500 mb-10 leading-relaxed font-light text-lg">
                        Elevate isn't just a platform; it's a career and life accelerator. We guide you through three distinct phases of growth, unlocking exclusive benefits at every level.
                    </p>
<div className="space-y-8">
<div className="flex gap-5 group cursor-pointer">
<div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
<span className="text-xs font-semibold">01</span>
</div>
<div>
<h4 className="font-semibold text-slate-900 group-hover:text-brand-blue transition-colors text-sm">Activation</h4>
<p className="text-sm text-slate-500 mt-1 font-light">Establish core habits. Earn digital currency. Access basic rewards.</p>
</div>
</div>
<div className="w-px h-6 bg-slate-200 ml-5"></div>
<div className="flex gap-5 group cursor-pointer">
<div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
<span className="text-xs font-semibold">02</span>
</div>
<div>
<h4 className="font-semibold text-slate-900 group-hover:text-brand-blue transition-colors text-sm">Change Agent</h4>
<p className="text-sm text-slate-500 mt-1 font-light">Lead small groups. Unlock skills training. Access job interviews.</p>
</div>
</div>
<div className="w-px h-6 bg-slate-200 ml-5"></div>
<div className="flex gap-5 group cursor-pointer">
<div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
<span className="text-xs font-semibold">03</span>
</div>
<div>
<h4 className="font-semibold text-slate-900 group-hover:text-brand-blue transition-colors text-sm">Ambassador</h4>
<p className="text-sm text-slate-500 mt-1 font-light">Govern the ecosystem. Mentor agents. Represent Elevate globally.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] w-full bg-[#0F0458] rounded-xl p-8 flex flex-col justify-between shadow-2xl shadow-brand-dark/20 overflow-hidden group ring-1 ring-white/10">

<div className="absolute top-[-50px] right-[-50px] w-80 h-80 bg-brand-blue rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-pulse-slow"></div>
<div className="absolute bottom-[-50px] left-[-50px] w-80 h-80 bg-brand-cyan rounded-full mix-blend-screen filter blur-[80px] opacity-30"></div>

<div className="relative z-10 flex justify-between items-start">
<div className="p-3 bg-white/10 backdrop-blur-md rounded border border-white/10 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
</div>
<div className="px-2.5 py-1 bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 rounded text-[10px] font-semibold uppercase tracking-wide">
                            Level Up
                        </div>
</div>
<div className="relative z-10">
<div className="text-white/60 text-[10px] font-semibold uppercase tracking-wider mb-2">Current Status</div>
<div className="text-3xl font-semibold text-white mb-8 tracking-tight">Change Agent</div>

<div className="space-y-6">
<div>
<div className="flex justify-between text-[10px] font-medium text-blue-200 mb-2 uppercase tracking-wider">
<span>Leadership XP</span>
<span>85%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue w-[85%] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-medium text-blue-200 mb-2 uppercase tracking-wider">
<span>Impact Hours</span>
<span>12/15</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-400 to-pink-500 w-[70%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50/50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-slate-200/50 reveal">
<div className="group">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-brand-dark to-brand-blue mb-2 group-hover:scale-105 transition-transform duration-500">154M</div>
<div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Steps Taken</div>
</div>
<div className="group">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-brand-dark to-brand-blue mb-2 group-hover:scale-105 transition-transform duration-500">4.2M</div>
<div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">YuCoins Earned</div>
</div>
<div className="group">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-brand-dark to-brand-blue mb-2 group-hover:scale-105 transition-transform duration-500">850+</div>
<div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Job Placements</div>
</div>
<div className="group">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-brand-dark to-brand-blue mb-2 group-hover:scale-105 transition-transform duration-500">12</div>
<div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Active Communities</div>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-16 text-center reveal">Live Campaigns</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative h-96 rounded-lg overflow-hidden cursor-pointer reveal shadow-lg hover:shadow-2xl transition-all duration-500">
<div className="absolute inset-0 bg-[#0F0458] transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/90 to-transparent opacity-90"></div>
<img alt="Running" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay transition-opacity group-hover:opacity-30" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=2940"/>
<div className="absolute inset-0 p-10 flex flex-col justify-end">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-sm text-[10px] font-semibold text-white mb-4 border border-white/20 uppercase tracking-widest">Global Challenge</div>
<h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">1 Million Lives</h3>
<p className="text-blue-100/80 text-lg font-light mb-8">“1 App. 60 Days. 1 Million Lives Inspired.”</p>
<span className="inline-flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                Join Campaign <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="group relative h-96 rounded-lg overflow-hidden cursor-pointer reveal shadow-lg hover:shadow-2xl transition-all duration-500" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-[#0F0458] transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-bl from-brand-cyan/80 to-brand-blue/80 opacity-90"></div>
<img alt="Students" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay transition-opacity group-hover:opacity-30" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;q=80&amp;w=2940"/>
<div className="absolute inset-0 p-10 flex flex-col justify-end">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-sm text-[10px] font-semibold text-white mb-4 border border-white/20 uppercase tracking-widest">Pilot Program</div>
<h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">Stellenbosch Pilot</h3>
<p className="text-cyan-100/80 text-lg font-light mb-8">“Live Well. Lead Strong. Unlock your future.”</p>
<span className="inline-flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                View Details <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0F0458] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-sm">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-brand-cyan border border-white/10">
<svg fill="none" height="18" viewbox="0 0 32 32" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L2 28H8L16 12L24 28H30L16 2Z" fill="currentColor"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight text-white">ELEVATE</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed font-light">
                        Restoring dignity through self-governance, equity, and economic activation.
                    </p>
</div>
<div className="flex gap-20 flex-wrap">
<div>
<h4 className="font-semibold text-[10px] uppercase tracking-widest text-white mb-6">Platform</h4>
<ul className="space-y-4 text-sm text-slate-400 font-light">
<li><a className="hover:text-brand-cyan transition-colors" href="#">Ecosystem</a></li>
<li><a className="hover:text-brand-cyan transition-colors" href="#">Programs</a></li>
<li><a className="hover:text-brand-cyan transition-colors" href="#">Rewards</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[10px] uppercase tracking-widest text-white mb-6">Connect</h4>
<ul className="space-y-4 text-sm text-slate-400 font-light">
<li><a className="hover:text-brand-cyan transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-brand-cyan transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-brand-cyan transition-colors" href="#">Instagram</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 pt-8 border-t border-white/5">
<p>© 2024 Elevate Ecosystem.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

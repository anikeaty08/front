import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'Inter', 'sans-serif'],
mono: ['Geist Mono', 'monospace'],
},
colors: {
accent: '#c6f91f', // Keeping the high-energy lime for a "Modern/Tech" feel
brand: '#3b82f6',
dark: '#05080A',
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'shimmer': 'shimmer 2s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
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
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">

<div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-accent/[0.04] blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>

<div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-blue-500/[0.03] blur-[100px] rounded-full mix-blend-screen"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-dark/70 border-b border-white/[0.08] transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 bg-accent rounded-[4px] flex items-center justify-center text-black font-bold text-xs shadow-[0_0_10px_rgba(198,249,31,0.3)] group-hover:shadow-[0_0_20px_rgba(198,249,31,0.5)] transition-all duration-300">A</div>
<span className="font-semibold text-white tracking-tight group-hover:text-accent transition-colors">AlumNet</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white/70 hover:text-white transition-colors relative group py-2" href="#platform">
                    Platform
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-white/70 hover:text-white transition-colors relative group py-2" href="#engagement">
                    Engagement
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-white/70 hover:text-white transition-colors relative group py-2" href="#donations">
                    Fundraising
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium hover:text-white transition-colors" href="#">Admin Login</a>
<a className="group relative overflow-hidden rounded text-xs font-medium text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 pt-2 pr-4 pb-2 pl-4" href="#">
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10">Schedule Demo</span>
</a>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative overflow-hidden border-b border-white/[0.08] min-h-[90vh] flex items-center pt-16 pb-16 lg:pt-0 lg:pb-0">
<div className="beam-border-h top"></div>

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 grid-bg opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12">

<div className="flex flex-col lg:mx-0 max-w-2xl mr-auto ml-auto justify-center">
<div className="flex items-center gap-2 mb-8 reveal-on-scroll">
<div className="pl-1 pr-3 py-1 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-2 hover:bg-white/[0.06] transition-colors cursor-default group">
<span className="flex items-center justify-center px-2 py-0.5 rounded-full bg-accent text-[9px] font-bold text-dark uppercase tracking-wide group-hover:shadow-[0_0_10px_rgba(198,249,31,0.4)] transition-all">New</span>
<span className="text-white/60 text-[11px] font-medium tracking-wide group-hover:text-white transition-colors">Auto-sync with LinkedIn APIs</span>
<svg className="text-white/40 group-hover:text-white transition-colors" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] reveal-on-scroll mb-6">
<span className="block text-white">Unlock the power of</span>
<span className="text-gradient-mask block">your alumni network.</span>
</h1>
<p className="leading-relaxed reveal-on-scroll delay-100 text-lg font-light text-white/60 max-w-lg mb-10">
                        Stop relying on outdated spreadsheets. AlumNet centralizes data, automates engagement, and drives fundraising through intelligent insights.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 reveal-on-scroll delay-200">
<button className="px-8 py-4 bg-white text-dark font-semibold rounded hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">
                            Request Demo
                            <svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="px-8 py-4 bg-transparent text-white font-medium rounded border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2">
<svg className="text-white/50" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            See Success Stories
                        </button>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-white/30 reveal-on-scroll delay-300">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border border-dark bg-gray-500"></div>
<div className="w-6 h-6 rounded-full border border-dark bg-gray-400"></div>
<div className="w-6 h-6 rounded-full border border-dark bg-gray-300"></div>
</div>
<p>Powering 500+ Institutions worldwide</p>
</div>
</div>

<div className="relative perspective-container h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end reveal-on-scroll delay-100">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.15] blur-[100px] rounded-full pointer-events-none"></div>

<div className="w-full max-w-[550px] bg-[#0E1216] border border-white/10 rounded-xl hero-card-3d relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

<div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-[#11151A]">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#2A2E33]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#2A2E33]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#2A2E33]"></div>
</div>
<div className="h-1.5 w-24 bg-white/5 rounded-full"></div>
</div>

<div className="p-6 relative">

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white/[0.02] border border-white/[0.05] p-4 rounded-lg">
<div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Annual Giving</div>
<div className="text-2xl font-medium text-white">$4.2M</div>
<div className="text-[10px] text-accent mt-1 flex items-center gap-1">
<svg fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="8"><path d="m18 15-6-6-6 6"></path></svg>
                                        +18.5% YoY
                                    </div>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-4 rounded-lg">
<div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Engaged Alumni</div>
<div className="text-2xl font-medium text-white">12,450</div>
<div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
<svg fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="8"><path d="m18 15-6-6-6 6"></path></svg>
                                        +8.2%
                                    </div>
</div>
</div>

<div className="relative h-40 w-full mb-6 border-b border-white/[0.05]">

<div className="absolute inset-0 flex flex-col justify-between">
<div className="w-full h-px bg-white/[0.02]"></div>
<div className="w-full h-px bg-white/[0.02]"></div>
<div className="w-full h-px bg-white/[0.02]"></div>
<div className="w-full h-px bg-white/[0.02]"></div>
</div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#c6f91f" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#c6f91f" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="" d="M0 120 Q 80 110 160 90 T 320 60 T 480 40 T 560 20 L 560 160 L 0 160 Z" fill="url(#chartGradient)" stroke="none"></path>
<path className="" d="M0 120 Q 80 110 160 90 T 320 60 T 480 40 T 560 20" fill="none" stroke="#c6f91f" strokeLinecap="round" strokeWidth="2"></path>

<circle className="animate-pulse" cx="480" cy="40" fill="#05080A" r="4" stroke="#c6f91f" strokeWidth="2"></circle>
</svg>

<div className="absolute top-[10px] left-[450px] bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg transform -translate-x-1/2">
                                    Homecoming Campaign
                                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45"></div>
</div>
</div>

<div className="absolute -right-8 top-1/3 bg-[#161b22] border border-white/10 p-3 rounded-lg shadow-2xl backdrop-blur-md animate-float-delayed w-48 z-20">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center text-blue-400">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" x2="20" y1="8" y2="14"></line><line x1="23" x2="17" y1="11" y2="11"></line></svg>
</div>
<span className="text-[10px] text-white font-medium">Job Update</span>
</div>
<p className="text-[10px] text-white/60 leading-relaxed">Sarah Jenkins '14 is now <span className="text-white font-medium">VP of Engineering</span> at TechCorp.</p>
</div>

<div className="absolute -left-6 bottom-8 bg-[#161b22] border border-white/10 p-3 rounded-lg shadow-2xl backdrop-blur-md animate-float w-40 z-20">
<div className="flex items-center justify-between mb-1">
<span className="text-[9px] text-white/40 uppercase">RSVP Rate</span>
<span className="text-[10px] text-accent font-bold">85%</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1">
<div className="bg-accent h-1 rounded-full w-[85%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-dark py-10 overflow-hidden relative border-b border-white/[0.08]">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>
<p className="text-center text-[10px] font-mono uppercase tracking-widest text-white/30 mb-8">Trusted by leading institutions</p>
<div className="animate-marquee flex items-center gap-20 text-white/30">

<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">STATE UNIVERSITY</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">IVY ACADEMY</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">TECH INSTITUTE</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">GLOBAL BUSINESS SCHOOL</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">MEDICOLLEGE</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">STATE UNIVERSITY</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">IVY ACADEMY</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">TECH INSTITUTE</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">GLOBAL BUSINESS SCHOOL</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">MEDICOLLEGE</span>
</div>
</section>

<section className="py-24 relative border-b border-white/[0.08]" id="platform">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6 reveal-on-scroll">
                        Your alumni data is <br/> <span className="text-white/40">stuck in the past.</span>
</h2>
<p className="text-lg text-white/60 font-light reveal-on-scroll delay-100">
                        Schools have data scattered across SIS, spreadsheets, and LinkedIn. AlumNet creates a single source of truth that updates itself.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] shadow-sm relative overflow-hidden rounded-lg">

<div className="bg-dark p-8 glass-card group reveal-on-scroll">
<div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:border-accent/30 group-hover:scale-110 transition-all duration-300 shadow-inner">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-white transition-colors">Unified Database</h3>
<p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                            A live record of every alumnus. When they change jobs on LinkedIn, your database updates automatically.
                        </p>
</div>

<div className="bg-dark p-8 glass-card group reveal-on-scroll delay-100">
<div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:border-accent/30 group-hover:scale-110 transition-all duration-300 shadow-inner">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-white transition-colors">Smart Engagement</h3>
<p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                            Send hyper-personalized newsletters and event invites based on location, industry, and graduation year.
                        </p>
</div>

<div className="bg-dark p-8 glass-card group reveal-on-scroll delay-200">
<div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:border-accent/30 group-hover:scale-110 transition-all duration-300 shadow-inner">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-white transition-colors">Fundraising Intelligence</h3>
<p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                            Identify high-net-worth alumni. Predict who is likely to donate based on engagement scores.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-b from-dark to-[#080c10] overflow-hidden relative border-b border-white/[0.08]" id="integration">
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-1 text-[10px] text-accent ring-1 ring-accent/20 uppercase tracking-tight mb-4 font-semibold">
<svg className="mr-1" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
                        Ecosystem
                    </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
<span className="text-gradient-mask pb-2">Connects with your stack</span>
</h2>
<p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
                        We play nice with the tools you already use. Sync SIS, CRM, and Social data in real-time.
                    </p>
</div>
<div className="relative mx-auto max-w-4xl reveal-on-scroll">

<div className="flex items-center justify-center gap-6 sm:gap-10 relative z-10">
<div className="group relative">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(198,249,31,0.1)] transition-all duration-300">

<svg className="text-white group-hover:text-blue-500 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</span>
</div>
<div className="group relative">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(198,249,31,0.1)] transition-all duration-300">

<svg className="text-white group-hover:text-blue-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19c0-1.7-1.3-3-3-3h-11c-1.7 0-3 1.3-3 3 .4 0 .8-.1 1.1-.2 1.4-.6 2.5-1.8 2.9-3.2C5 12.8 8 10 12 10c3 0 5.6 1.8 6.9 4.3.8-.3 1.7-.3 2.5 0 1.2.5 2.1 1.6 2.3 2.9.2 1.1-.3 2.1-1.1 2.8H17.5z"></path></svg>
</span>
</div>
<div className="group relative">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(198,249,31,0.1)] transition-all duration-300">

<svg className="text-white group-hover:text-green-500 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</span>
</div>
<div className="group relative">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(198,249,31,0.1)] transition-all duration-300">

<svg className="text-white group-hover:text-yellow-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</span>
</div>
<div className="group relative">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(198,249,31,0.1)] transition-all duration-300">

<svg className="text-white group-hover:text-purple-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</span>
</div>
</div>

<div className="relative mt-8 h-64 pointer-events-none">
<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 900 360">
<defs>
<lineargradient id="line-gradient" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#c6f91f" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#c6f91f" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#c6f91f" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M450 300 C 450 200, 300 120, 150 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="0s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<path d="M450 300 C 450 210, 360 130, 270 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.2s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 150, 420 80, 390 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.4s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 150, 480 80, 510 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.6s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 210, 540 130, 630 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.8s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 200, 600 120, 750 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="1s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
</svg>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
<span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-dark/80 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(198,249,31,0.15)] relative z-20">
<span className="font-bold text-accent text-2xl">A</span>

<span className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl animate-pulse"></span>
</span>
</div>
</div>
</div>
<div className="mx-auto mt-12 max-w-4xl reveal-on-scroll">
<div className="flex items-center justify-center gap-3 flex-wrap text-sm text-white/70">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5">
<svg className="text-accent" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="font-medium text-xs">Live Data Sync</span>
</div>
<div className="hidden sm:block w-16 h-px border-t border-dashed border-white/20"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5">
<svg className="text-accent" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium text-xs">GDPR Compliant</span>
</div>
<div className="hidden sm:block w-16 h-px border-t border-dashed border-white/20"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5">
<svg className="text-accent" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span className="font-medium text-xs">Real-time Updates</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-b border-white/[0.08]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 border border-white/10 border-dashed bg-white/[0.01]">

<div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-white/10 border-dashed relative h-[400px] overflow-hidden group reveal-on-scroll">
<div className="absolute inset-0 flex items-center justify-center -translate-y-12 opacity-60 group-hover:opacity-100 transition-opacity duration-500">

<div className="absolute w-[280px] h-[280px] rounded-full border border-white/5"></div>
<div className="absolute w-[200px] h-[200px] rounded-full border border-white/5"></div>
<div className="absolute w-[120px] h-[120px] rounded-full border border-white/5"></div>

<div className="absolute w-[280px] h-[280px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg_240deg,rgba(198,249,31,0.1)_360deg)] animate-spin-slow"></div>

<div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_#c6f91f] animate-pulse"></div>
<div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-dark via-dark/90 to-transparent">
<h3 className="text-white font-medium text-lg mb-2">Career Tracking Radar</h3>
<p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                Map alumni career trajectories globally. See where your graduates are working now.
                            </p>
</div>
</div>

<div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-white/10 border-dashed p-8 flex flex-col h-[400px] reveal-on-scroll delay-100 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<h3 className="text-white font-medium text-lg mb-2">Milestone Alerts</h3>
<p className="text-sm text-white/50 mb-8 group-hover:text-white/70 transition-colors">
                            Get notified when alumni reach major milestones so you can congratulate them (or ask for a gift).
                        </p>
<div className="space-y-4">

<div className="flex items-center gap-3 p-3 rounded border border-white/5 bg-[#0F1216] hover:border-purple-500/20 hover:bg-purple-500/5 transition-all cursor-default">
<div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-400">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" x2="20" y1="8" y2="14"></line></svg>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-white">Promotion Detected</div>
<div className="text-[10px] text-white/40">Mark S. -&gt; CEO at StartupInc</div>
</div>
<span className="text-[10px] text-white/30">Today</span>
</div>

<div className="flex items-center gap-3 p-3 rounded border border-white/5 bg-[#0F1216] hover:border-accent/20 hover:bg-accent/5 transition-all cursor-default">
<div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-white">Reunion Milestone</div>
<div className="text-[10px] text-white/40">Class of 2014 - 10 Year</div>
</div>
<span className="text-[10px] text-white/30">Upcoming</span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 h-[400px] bg-dark relative p-8 reveal-on-scroll delay-200 group overflow-hidden">

<div className="absolute inset-0 grid grid-cols-4 grid-rows-4 divide-x divide-y divide-white/5 opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity">
<div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6 shadow-[0_0_15px_rgba(198,249,31,0.1)] group-hover:shadow-[0_0_25px_rgba(198,249,31,0.2)] transition-shadow">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
</div>
<h3 className="text-white font-medium text-lg mb-2">Automated Campaigns</h3>
<p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                Trigger automated "Congratulations" emails or donation requests based on user behavior and career updates.
                             </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-b border-white/[0.08]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-accent font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">Plans</span>
<h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter">
                        Pricing for <span className="text-white/40">every institution.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-dark border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/20 transition-all duration-300 reveal-on-scroll">
<h3 className="text-lg font-medium text-white mb-2">Campus</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-light text-white">$299</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-sm text-white/50 mb-8 h-10">For departments or small schools.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Up to 5,000 Alumni
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Basic CRM Sync
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Email Campaigns
                            </li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 transition-colors">Start Free Trial</button>
</div>

<div className="bg-[#0B0F13] border border-accent/30 rounded-xl p-8 flex flex-col relative reveal-on-scroll delay-100 shadow-[0_0_30px_rgba(198,249,31,0.05)] transform hover:-translate-y-2 transition-all duration-300">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-[10px] font-bold text-black uppercase tracking-wider rounded-full shadow-[0_0_10px_rgba(198,249,31,0.4)]">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">University</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-light text-white">$899</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-sm text-white/50 mb-8 h-10">Complete solution for Universities.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center"><svg fill="none" height="10" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Unlimited Alumni Records
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center"><svg fill="none" height="10" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Fundraising Predictions
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center"><svg fill="none" height="10" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Automated Job Updates
                            </li>
</ul>
<button className="w-full py-3 bg-accent text-black rounded-lg text-sm font-semibold hover:bg-[#d4ff4d] hover:shadow-[0_0_15px_rgba(198,249,31,0.4)] transition-all">Schedule Demo</button>
</div>

<div className="bg-dark border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/20 transition-all duration-300 reveal-on-scroll delay-200">
<h3 className="text-lg font-medium text-white mb-2">System</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-light text-white">Custom</span>
</div>
<p className="text-sm text-white/50 mb-8 h-10">For University systems &amp; large networks.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Everything in University
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Multi-campus Data
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Dedicated Success Manager
                            </li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-t from-accent/[0.03] to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-light text-white tracking-tighter mb-8 reveal-on-scroll">
                    Reconnect your network <br/> in <span className="text-accent relative inline-block">minutes.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg></span>
</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-on-scroll delay-100">
<button className="px-10 py-4 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-1">
                        Book a Demo
                    </button>
<button className="px-10 py-4 bg-transparent border border-white/10 text-white font-medium rounded hover:bg-white/5 hover:border-white/20 transition-all w-full sm:w-auto">
                        Download Case Study
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-dark pt-20 pb-10 relative border-t border-white/[0.08]">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-accent rounded-[4px] flex items-center justify-center text-black font-bold text-xs shadow-[0_0_10px_rgba(198,249,31,0.2)]">A</div>
<span className="font-semibold text-white tracking-tight">AlumNet</span>
</div>
<p className="text-sm text-white/50 leading-relaxed">
                        The modern operating system for Alumni Relations and Advancement.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Platform</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-accent transition-colors" href="#">Database</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Engagement</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Fundraising</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Security</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4 text-sm">Solutions</h4>
<ul className="space-y-3 text-xs text-white/50">
<li className=""><a className="hover:text-accent transition-colors" href="#">Universities</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="#">K-12 Schools</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="#">Non-Profits</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-accent transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Help Center</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 border-dashed pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-xs text-white/30">© 2024 AlumNet Inc. All rights reserved.</span>
<div className="flex gap-6">
<a className="text-white/30 hover:text-white transition-colors hover:scale-110" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-white/30 hover:text-white transition-colors hover:scale-110" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div className="mt-20 opacity-10 select-none pointer-events-none overflow-hidden">
<h1 className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-transparent mix-blend-overlay">ALUMNET</h1>
</div>
</div>
</footer>



    </>
  );
}

import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
400: '#818cf8',
500: '#6366f1', // Indigo
600: '#4f46e5',
900: '#312e81',
},
dark: {
950: '#030304', // Darker base
900: '#050507',
800: '#0a0a0c',
700: '#121216',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scroll': 'scroll 30s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-dark-950">
<div className="absolute inset-0 bg-grid"></div>

<div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-brand-600/10 rounded-full blur-[120px] mix-blend-screen animate-aura-1"></div>

<div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow"></div>
<div className="noise-bg z-[1]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-dark-950/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:bg-brand-500/10 group-hover:border-brand-500/30 transition-all duration-300">
<svg aria-hidden="true" className="text-slate-200 group-hover:text-brand-400 transition-colors" data-icon="lucide:brain-circuit" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>
<span className="text-white font-semibold tracking-tight text-sm">NEURONET</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#workflow">How it Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Sign In</a>
<button className="relative group bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-200 transition-all flex items-center gap-2 overflow-hidden">
<span className="relative z-10">Start Building</span>
<svg aria-hidden="true" className="relative z-10 group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-24 pt-32 pb-16 relative z-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 backdrop-blur-sm mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-xs font-medium text-brand-200 tracking-wide uppercase">v2.0 Now Available</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1]">
                Your technical<br/>
<span className="text-gradient-accent relative inline-block">
                    co-founder
                    <svg className="absolute -bottom-2 w-full h-3 text-brand-500/30" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span> has arrived.
            </h1>

<p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 mx-auto">
                NeuroNet AI is an autonomous operating partner. It writes code, manages infrastructure, and executes growth strategies—24/7.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full justify-center">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<svg aria-hidden="true" data-icon="lucide:sparkles" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                    Deploy NeuroNet
                </button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2 group">
<svg aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform" data-icon="lucide:play" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon fill="currentColor" points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                    Watch Demo
                </button>
</div>

<div className="relative w-full max-w-6xl mx-auto group">

<div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-dark-900/80 backdrop-blur-sm">

<div className="h-10 bg-dark-900 border-b border-white/5 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
</div>
<div className="text-[10px] text-slate-500 font-mono">neuronet_dashboard.tsx</div>
<div className="w-10"></div>
</div>

<img alt="AI Workspace" className="w-full h-auto opacity-90 block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_1600w.webp"/>

<div className="absolute top-[20%] left-[5%] glass-panel rounded-lg p-4 max-w-xs shadow-2xl border-l-2 border-l-brand-500 animate-float hidden md:block">
<div className="flex items-center gap-2 mb-2">
<svg className="text-brand-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
<span className="text-xs font-medium text-white">Optimization Complete</span>
</div>
<p className="text-xs text-slate-400 mb-2">Refactored the authentication middleware. Latency reduced by 40%.</p>
<div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 w-[85%]"></div>
</div>
</div>

<div className="absolute bottom-[20%] right-[5%] glass-panel rounded-lg p-4 max-w-xs shadow-2xl border-l-2 border-l-green-500 animate-float-delayed hidden md:block">
<div className="flex items-center gap-2 mb-2">
<svg className="text-green-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
<span className="text-xs font-medium text-white">MRR Update</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-lg font-bold text-white">$12,450</span>
<span className="text-xs text-green-400">+12% this week</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-dark-900/50">
<div className="max-w-7xl mx-auto px-6 mb-6 text-center">
<p className="text-sm text-slate-500 font-medium">TRUSTED BY BUILDERS FROM NEXT-GEN STARTUPS</p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-scroll flex space-x-16 min-w-full items-center">

<span className="text-xl font-bold text-slate-600 tracking-tight">ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-bold text-slate-600 tracking-tight">VORTEX</span>
<span className="text-xl font-bold text-slate-600 tracking-tight">HYPER<span className="font-light">BASE</span></span>
<span className="text-xl font-bold text-slate-600 tracking-tight">LUMINA</span>
<span className="text-xl font-bold text-slate-600 tracking-tight">SYNTH<span className="font-light">LABS</span></span>
<span className="text-xl font-bold text-slate-600 tracking-tight">ECHO<span className="font-light">SYSTEMS</span></span>
<span className="text-xl font-bold text-slate-600 tracking-tight">ORBITAL</span>

<span className="text-xl font-bold text-slate-600 tracking-tight">ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-bold text-slate-600 tracking-tight">VORTEX</span>
<span className="text-xl font-bold text-slate-600 tracking-tight">HYPER<span className="font-light">BASE</span></span>
<span className="text-xl font-bold text-slate-600 tracking-tight">LUMINA</span>
<span className="text-xl font-bold text-slate-600 tracking-tight">SYNTH<span className="font-light">LABS</span></span>
<span className="text-xl font-bold text-slate-600 tracking-tight">ECHO<span className="font-light">SYSTEMS</span></span>
<span className="text-xl font-bold text-slate-600 tracking-tight">ORBITAL</span>
</div>
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10"></div>
</div>
</section>

<section className="py-24 relative z-10" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">From Prompt to Production</h2>
<p className="text-slate-400 max-w-2xl mx-auto">NeuroNet streamlines the chaotic startup lifecycle into a linear, executed path.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="relative">
<div className="absolute top-0 left-6 h-full w-[1px] bg-gradient-to-b from-brand-500 to-transparent md:hidden"></div>
<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute top-0 right-0 p-20 bg-brand-500/10 blur-[60px] rounded-full group-hover:bg-brand-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg">
<span className="font-mono text-brand-400 font-bold">01</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Context Ingestion</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">You upload docs, Figma files, and linear tickets. NeuroNet builds a comprehensive mental model of your product.</p>

<div className="flex gap-2 opacity-60">
<div className="w-8 h-10 bg-slate-700/50 rounded border border-white/5"></div>
<div className="w-8 h-10 bg-slate-700/50 rounded border border-white/5 -rotate-6"></div>
<div className="w-8 h-10 bg-slate-700/50 rounded border border-white/5 rotate-3"></div>
</div>
</div>
</div>

<div className="relative">

<div className="hidden md:block absolute top-14 -left-4 w-8 h-[1px] bg-white/10"></div>
<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute top-0 right-0 p-20 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg">
<span className="font-mono text-purple-400 font-bold">02</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Autonomous Build</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">It spins up environments, writes clean React/Node code, commits to GitHub, and deploys to preview URLs.</p>

<div className="w-full h-10 bg-dark-950 rounded border border-white/5 flex items-center px-2 gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="h-1 w-12 bg-slate-700 rounded-full ml-1"></div>
</div>
</div>
</div>

<div className="relative">

<div className="hidden md:block absolute top-14 -left-4 w-8 h-[1px] bg-white/10"></div>
<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute top-0 right-0 p-20 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg">
<span className="font-mono text-blue-400 font-bold">03</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Growth &amp; Iteration</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">Monitors user sessions (PostHog), identifies drop-offs, and proposes UI improvements automatically.</p>

<div className="flex items-end gap-1 h-10">
<div className="w-2 h-4 bg-blue-500/20 rounded-t"></div>
<div className="w-2 h-6 bg-blue-500/40 rounded-t"></div>
<div className="w-2 h-8 bg-blue-500/60 rounded-t"></div>
<div className="w-2 h-full bg-blue-500 rounded-t shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-dark-900/30 border-y border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight">The Operating System</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-4 gap-6 h-auto md:h-[900px]">

<div className="col-span-1 md:col-span-4 md:row-span-2 rounded-3xl border border-white/10 relative overflow-hidden group bg-dark-800">
<div className="absolute inset-0">
<img alt="HUD Data Ring" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 md:p-10 w-full z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-brand-500/20 border border-brand-500/30 rounded-lg text-brand-300 backdrop-blur-md">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5Z"></path></svg>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-2 py-1 rounded border border-brand-500/20">Core Engine</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-3">Central Intelligence</h3>
<p className="text-slate-300 max-w-lg text-sm md:text-base">A persistent memory core that internalizes your roadmap, KPIs, and market data. It acts as the single source of truth for your entire operation.</p>
</div>
</div>

<div className="col-span-1 md:col-span-2 md:row-span-2 rounded-3xl glass-panel p-8 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px] -mr-16 -mt-16 pointer-events-none"></div>
<div className="mb-auto">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg className="text-slate-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 5 5 10-10"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Builder Studio</h3>
<p className="text-slate-400 text-sm">Generate MVPs and React components instantly.</p>
</div>

<div className="mt-6 bg-dark-950 rounded-lg border border-white/10 overflow-hidden shadow-2xl">
<div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
</div>
<div className="p-3 font-mono text-[10px] text-slate-400 leading-relaxed">
<span className="text-purple-400">export function</span> <span className="text-blue-400">Hero</span>() {<br/>
                              <span className="text-purple-400">return</span> (<br/>
                                &lt;<span className="text-green-400">div</span> <span className="text-yellow-400">className</span>="flex"&gt;<br/>
                                  &lt;<span className="text-green-400">h1</span>&gt;Ship Fast&lt;/<span className="text-green-400">h1</span>&gt;<br/>
                                &lt;/<span className="text-green-400">div</span>&gt;<br/>
                              )<br/>
                            }
                        </div>
</div>
</div>

<div className="col-span-1 md:col-span-2 md:row-span-2 rounded-3xl glass-panel p-8 relative overflow-hidden flex flex-col">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg className="text-slate-200" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Live Command</h3>
<p className="text-slate-400 text-sm mb-6">Chat with your infrastructure. "Deploy to prod" is now literal.</p>

<div className="mt-auto flex flex-col gap-3">
<div className="bg-white/5 rounded-lg p-3 rounded-bl-none self-start max-w-[80%] border border-white/5">
<p className="text-xs text-slate-300">Database migration failed on staging.</p>
</div>
<div className="bg-brand-600/20 rounded-lg p-3 rounded-br-none self-end max-w-[90%] border border-brand-500/20">
<p className="text-xs text-brand-100">I've rolled back the changes and notified the team. Check logs?</p>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 md:row-span-1 rounded-3xl glass-panel p-6 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-default group">
<div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:check-square" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
<div>
<h3 className="text-lg font-medium text-white">Operations</h3>
<p className="text-xs text-slate-400">Automate recurring ops.</p>
</div>
</div>

<div className="col-span-1 md:col-span-2 md:row-span-1 rounded-3xl glass-panel p-6 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-default group">
<div className="p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:bar-chart-2" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-lg font-medium text-white">Analytics</h3>
<p className="text-xs text-slate-400">Real-time growth metrics.</p>
</div>
</div>

<div className="col-span-1 md:col-span-4 md:row-span-1 rounded-3xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-white/10 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                            Contextual Adaptability
                            <svg aria-hidden="true" className="text-yellow-400" data-icon="lucide:zap" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</h3>
<p className="text-slate-400 text-sm max-w-md">Adapts to your startup's unique phase, from stealth mode MVP to scaling Series A.</p>
</div>
<div className="flex items-center gap-2 relative z-10">
<div className="px-4 py-2 rounded-full bg-dark-950 border border-white/10 text-xs text-slate-300 shadow-lg">Phase: MVP</div>
<div className="w-8 h-[1px] bg-white/20"></div>
<div className="px-4 py-2 rounded-full bg-brand-500 text-xs text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] border border-brand-400">Scale</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Builders Love Us</h2>
<p className="text-slate-400">Join 10,000+ founders automating their success.</p>
</div>
</div>
<div className="flex gap-6 overflow-hidden relative">
<div className="animate-scroll flex gap-6 px-6 hover:[animation-play-state:paused]">

<div className="min-w-[350px] p-6 rounded-2xl bg-dark-800 border border-white/5 relative group hover:border-white/20 transition-colors">
<p className="text-slate-300 text-sm leading-relaxed mb-6">"I built my entire MVP in a weekend with NeuroNet. It didn't just write code; it suggested a better database schema."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-500 to-purple-500"></div>
<div>
<p className="text-white text-sm font-medium">Alex Chen</p>
<p className="text-slate-500 text-xs">Founder, DataFlow</p>
</div>
</div>
</div>

<div className="min-w-[350px] p-6 rounded-2xl bg-dark-800 border border-white/5 relative group hover:border-white/20 transition-colors">
<p className="text-slate-300 text-sm leading-relaxed mb-6">"The operational overhead of my startup dropped by 80%. NeuroNet handles the boring stuff so I can focus on product."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500"></div>
<div>
<p className="text-white text-sm font-medium">Sarah Jenkins</p>
<p className="text-slate-500 text-xs">CTO, Velox</p>
</div>
</div>
</div>

<div className="min-w-[350px] p-6 rounded-2xl bg-dark-800 border border-white/5 relative group hover:border-white/20 transition-colors">
<p className="text-slate-300 text-sm leading-relaxed mb-6">"It's like having a senior engineer and a product manager available 24/7. The ROI is insane."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-500"></div>
<div>
<p className="text-white text-sm font-medium">Marcus Thorne</p>
<p className="text-slate-500 text-xs">Indie Maker</p>
</div>
</div>
</div>

<div className="min-w-[350px] p-6 rounded-2xl bg-dark-800 border border-white/5 relative group hover:border-white/20 transition-colors">
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Finally, an AI tool that understands context. It knows my codebase better than I do sometimes."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-500 to-emerald-500"></div>
<div>
<p className="text-white text-sm font-medium">Elena Rodriguez</p>
<p className="text-slate-500 text-xs">Lead Dev, FinTech Co</p>
</div>
</div>
</div>

<div className="min-w-[350px] p-6 rounded-2xl bg-dark-800 border border-white/5 relative group hover:border-white/20 transition-colors">
<p className="text-slate-300 text-sm leading-relaxed mb-6">"I built my entire MVP in a weekend with NeuroNet. It didn't just write code; it suggested a better database schema."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-500 to-purple-500"></div>
<div>
<p className="text-white text-sm font-medium">Alex Chen</p>
<p className="text-slate-500 text-xs">Founder, DataFlow</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Invest in your Vision</h2>
<p className="text-slate-400">Cheaper than a co-founder. Smarter than an intern.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-3xl border border-white/5 bg-dark-800/50 hover:border-white/10 transition-all">
<h3 className="text-lg font-medium text-white mb-2">Hobby</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">$0</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-400">
<li className="flex items-center gap-2"><svg className="text-brand-500 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Basic Code Generation</li>
<li className="flex items-center gap-2"><svg className="text-brand-500 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 1 Project Limit</li>
<li className="flex items-center gap-2"><svg className="text-brand-500 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Community Support</li>
</ul>
<button className="w-full py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-sm">Get Started</button>
</div>

<div className="p-8 rounded-3xl border border-brand-500/30 bg-dark-800 relative overflow-hidden group">
<div className="absolute inset-0 bg-brand-500/5 group-hover:bg-brand-500/10 transition-colors"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-2">
<h3 className="text-lg font-medium text-white">Startup</h3>
<span className="text-[10px] font-bold uppercase tracking-wider bg-brand-500 text-white px-2 py-1 rounded-full">Popular</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">$49</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-2"><svg className="text-brand-400 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Full GitHub Integration</li>
<li className="flex items-center gap-2"><svg className="text-brand-400 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 5 Active Projects</li>
<li className="flex items-center gap-2"><svg className="text-brand-400 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Cloud Deployment Access</li>
<li className="flex items-center gap-2"><svg className="text-brand-400 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Priority Processing</li>
</ul>
<button className="w-full py-3 rounded-full bg-brand-600 text-white font-medium hover:bg-brand-500 transition-colors text-sm shadow-lg shadow-brand-500/20">Start Free Trial</button>
</div>
</div>

<div className="p-8 rounded-3xl border border-white/5 bg-dark-800/50 hover:border-white/10 transition-all">
<h3 className="text-lg font-medium text-white mb-2">Scale</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">$199</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-400">
<li className="flex items-center gap-2"><svg className="text-brand-500 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Unlimited Projects</li>
<li className="flex items-center gap-2"><svg className="text-brand-500 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Custom Model Fine-tuning</li>
<li className="flex items-center gap-2"><svg className="text-brand-500 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Dedicated Support</li>
<li className="flex items-center gap-2"><svg className="text-brand-500 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> SSO &amp; Enterprise Security</li>
</ul>
<button className="w-full py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-sm">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-dark-900 border-t border-white/5">

<div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-brand-900/5 to-dark-950"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8 shine">
<svg aria-hidden="true" className="text-white" data-icon="lucide:infinity" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-8">
                Build the future,<br/><span className="text-slate-500">faster than ever.</span>
</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
<input className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-slate-500 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 w-full text-sm transition-all hover:bg-white/10" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-slate-200 transition-colors w-full sm:w-auto text-sm whitespace-nowrap">
                    Join Waitlist
                </button>
</div>
<p className="text-slate-600 text-xs mt-6">No credit card required. Free 14-day trial.</p>
</div>
</section>
<footer className="bg-dark-950 border-t border-white/5 py-12 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<svg className="text-slate-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 8v13"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path></svg>
<span className="text-slate-300 font-semibold tracking-tight">NeuroNet</span>
</div>
<p className="text-slate-500 mb-4 text-xs max-w-xs">The world's first AI co-founder, designed to help you build, ship, and scale.</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="sr-only">Twitter</span><svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="sr-only">GitHub</span><svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.981 1.029-2.68-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.587 1.028 2.68 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-slate-500 text-xs">
<li><a className="hover:text-brand-400 transition-colors" href="#">Builder Studio</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Analytics Core</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-slate-500 text-xs">
<li><a className="hover:text-brand-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-slate-500 text-xs">
<li><a className="hover:text-brand-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Careers</a> <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded ml-1 text-slate-300">Hiring</span></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-600">
<p>© 2024 NeuroNet AI Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}

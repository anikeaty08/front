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
},
colors: {
zinc: {
850: '#1f2023',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
<span className="text-xs font-bold">E</span>
</div>
<span className="text-sm font-medium tracking-tight text-white hover:text-zinc-300 transition-colors">
                    Evolve Strategies
                </span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all group" href="#contact">
<span>Start Project</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 flex-grow">
<div className="hero-glow"></div>
<div className="absolute inset-0 bg-grid-white pointer-events-none z-0"></div>
<div className="relative max-w-4xl mx-auto text-center z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 mb-8 animate-fade-in-up backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span>Accepting new partners for Q4</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.1] animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                Marketing, <br/>
<span className="text-gradient">engineered to scale.</span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Turnkey marketing solutions adapted to your growth stage. We handle it entirely, partner hands-on, or guide your team to execution perfection.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-950 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#solutions">
                    Explore Solutions
                    <iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-white/10 bg-white/5 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors text-center backdrop-blur-sm" href="#contact">
                    Get in Touch
                </a>
</div>

<div className="mt-20 pt-10 border-t border-white/5 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<p className="text-xs text-zinc-500 mb-6 uppercase tracking-widest">Trusted by next-gen companies</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale mix-blend-screen">

<span className="text-lg font-semibold tracking-tighter text-white">ACME<span className="font-light">CORP</span></span>
<span className="text-lg font-bold tracking-tight text-white italic">Vertex</span>
<span className="text-lg font-medium tracking-widest text-white uppercase">NEXUS</span>
<span className="text-lg font-semibold tracking-tight text-white">Hyper<span className="text-zinc-400">Scale</span></span>
<span className="text-xl font-bold tracking-tighter text-white">/// OMEGA</span>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 relative border-t border-white/5 bg-zinc-950 z-10" id="solutions">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Flexible Engagement</h2>
<p className="text-zinc-400 text-lg font-light">
                        Select the tier of involvement that matches your internal capabilities.
                    </p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-zinc-600" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/80">
<div className="h-12 w-12 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
<iconify-icon icon="solar:rocket-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Full Execution</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                        We act as your complete outsourced marketing department, handling strategy to operations.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-emerald-500/80" icon="solar:check-circle-linear"></iconify-icon>
                            Full-stack team deployment
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-emerald-500/80" icon="solar:check-circle-linear"></iconify-icon>
                            End-to-end campaign management
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/80">
<div className="h-12 w-12 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Co-Pilot</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                        We augment your existing team, filling specific gaps in skill or capacity to accelerate delivery.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-emerald-500/80" icon="solar:check-circle-linear"></iconify-icon>
                            Resource augmentation
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-emerald-500/80" icon="solar:check-circle-linear"></iconify-icon>
                            Collaborative strategy sessions
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/80">
<div className="h-12 w-12 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
<iconify-icon icon="solar:compass-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Strategic Guide</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                        High-level advisory and roadmapping for teams capable of execution but needing direction.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-emerald-500/80" icon="solar:check-circle-linear"></iconify-icon>
                            Quarterly roadmapping
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-emerald-500/80" icon="solar:check-circle-linear"></iconify-icon>
                            Performance audits
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950 relative overflow-hidden z-10" id="methodology">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-6">
<iconify-icon icon="solar:verified-check-linear" width="14"></iconify-icon>
                        Our Standard
                    </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Built on precision,<br/>not guesswork.</h2>
<p className="text-zinc-400 text-lg font-light mb-8 leading-relaxed">
                        Modern marketing requires a blend of creative intuition and rigorous data architecture. We build systems that make revenue predictable.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Data-First Architecture</h4>
<p className="text-sm text-zinc-500 font-light">Every campaign rests on a foundation of measurable KPIs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:refresh-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Agile Iteration</h4>
<p className="text-sm text-zinc-500 font-light">Rapid testing cycles to capitalize on new opportunities.</p>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="aspect-square rounded-2xl bg-zinc-900/50 border border-white/5 p-8 relative overflow-hidden backdrop-blur-sm">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>

<div className="space-y-4">
<div className="flex items-center justify-between mb-8">
<div className="w-24 h-4 bg-zinc-800 rounded animate-pulse"></div>
<div className="w-8 h-8 bg-zinc-800 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="h-2 bg-zinc-800 rounded w-full"></div>
<div className="h-2 bg-zinc-800 rounded w-5/6"></div>
<div className="h-2 bg-zinc-800 rounded w-4/6"></div>
</div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="h-24 rounded-lg bg-zinc-800/50 border border-white/5 p-4">
<div className="w-8 h-8 rounded bg-emerald-500/20 mb-3 flex items-center justify-center text-emerald-500">
<iconify-icon icon="solar:chart-2-linear" width="16"></iconify-icon>
</div>
<div className="w-16 h-2 bg-zinc-700 rounded mb-1"></div>
<div className="w-8 h-2 bg-zinc-700/50 rounded"></div>
</div>
<div className="h-24 rounded-lg bg-zinc-800/50 border border-white/5 p-4">
<div className="w-8 h-8 rounded bg-blue-500/20 mb-3 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:pie-chart-2-linear" width="16"></iconify-icon>
</div>
<div className="w-16 h-2 bg-zinc-700 rounded mb-1"></div>
<div className="w-8 h-2 bg-zinc-700/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden border-t border-white/5 z-10" id="contact">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-zinc-950 pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to evolve?</h2>
<p className="text-zinc-400 text-lg font-light mb-10">
                Schedule a discovery call to determine which engagement model aligns with your goals.
            </p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto" onsubmit="event.preventDefault();">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-500">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-zinc-900/80 border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-white focus:border-white block pl-10 p-3 placeholder-zinc-600 outline-none transition-all shadow-lg" placeholder="Enter your work email" type="email"/>
</div>
<button className="w-full sm:w-auto px-6 py-3 bg-white text-zinc-950 hover:bg-zinc-200 font-semibold rounded-lg text-sm transition-colors whitespace-nowrap shadow-lg hover:shadow-xl">
                    Get Started
                </button>
</form>
<p className="mt-4 text-[10px] text-zinc-600 uppercase tracking-widest">No credit card required</p>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8 px-6 z-10">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<a className="text-sm font-medium tracking-tight text-white mb-6 block" href="#">
                        Evolve Strategies
                    </a>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Data-driven marketing architecture for modern businesses. We build the systems that build your revenue.
                    </p>
</div>
<div className="grid grid-cols-2 gap-16">
<div>
<h4 className="text-xs font-medium text-white uppercase tracking-wider mb-4 opacity-70">Services</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Strategy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Paid Media</a></li>
<li><a className="hover:text-white transition-colors" href="#">Content</a></li>
<li><a className="hover:text-white transition-colors" href="#">Analytics</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white uppercase tracking-wider mb-4 opacity-70">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<p className="text-xs text-zinc-600">
                    © 2023 Evolve Strategies. All rights reserved.
                </p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-filled" width="16"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-filled" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

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
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
neon: {
purple: '#b026ff',
cyan: '#00f3ff',
lime: '#ccff00',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-display font-medium tracking-tighter text-white hover:text-cyan-400 transition-colors z-50" href="#">
                LUMOS<span className="text-cyan-400">.</span>AGENCY
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#about">About</a>
</div>

<div className="hidden md:flex items-center">
<a className="group relative px-5 py-2 overflow-hidden rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                        Let's Talk
                        <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</a>
</div>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] -z-10"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8">
<div className="inline-flex gap-2 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-wide text-cyan-200">Available for projects</span>
</div>
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white leading-[0.9] mb-8">
                    Digital <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">Alchemy.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light mb-10">
                    We fuse strategic design with neon-soaked aesthetics to build brands that don't just exist, but <span className="text-white font-medium">resonate</span>.
                </p>
<div className="flex flex-wrap gap-6">
<button className="hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 font-medium text-black tracking-tight bg-white rounded-full pt-4 pr-8 pb-4 pl-8">
                        View Portfolio
                    </button>
<button className="px-8 py-4 rounded-full border border-white/20 text-white font-medium tracking-tight hover:bg-white/5 transition-all flex items-center gap-2 group">
<svg className="lucide lucide-play-circle w-5 h-5 text-cyan-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Showreel
                    </button>
</div>
</div>

<div className="lg:col-span-4 relative hidden lg:block">
<div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="Neon abstract" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<p className="text-xs font-mono text-cyan-400 mb-1">LATEST DROP</p>
<p className="text-white font-medium tracking-tight">Cyberpunk Realities</p>
</div>
</div>
</div>
</div>
</header>

<div className="w-full border-y border-white/5 py-6 overflow-hidden bg-black/50 backdrop-blur-sm">
<div className="flex whitespace-nowrap gap-12 animate-[scroll_20s_linear_infinite] items-center">

<span className="text-2xl md:text-4xl font-display font-medium tracking-tighter text-white/20 uppercase">Strategy</span>
<svg className="lucide lucide-star text-cyan-500/50 w-6 h-6" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl md:text-4xl font-display font-medium tracking-tighter text-white/20 uppercase">Branding</span>
<svg className="lucide lucide-star text-purple-500/50 w-6 h-6" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl md:text-4xl font-display font-medium tracking-tighter text-white/20 uppercase">Web Design</span>
<svg className="lucide lucide-star text-cyan-500/50 w-6 h-6" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl md:text-4xl font-display font-medium tracking-tighter text-white/20 uppercase">Development</span>
<svg className="lucide lucide-star text-purple-500/50 w-6 h-6" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl md:text-4xl font-display font-medium tracking-tighter text-white/20 uppercase">Strategy</span>
<svg className="lucide lucide-star text-cyan-500/50 w-6 h-6" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl md:text-4xl font-display font-medium tracking-tighter text-white/20 uppercase">Branding</span>
<svg className="lucide lucide-star text-purple-500/50 w-6 h-6" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl md:text-4xl font-display font-medium tracking-tighter text-white/20 uppercase">Web Design</span>
<svg className="lucide lucide-star text-cyan-500/50 w-6 h-6" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl md:text-4xl font-display font-medium tracking-tighter text-white/20 uppercase">Development</span>
</div>
</div>

<section className="py-32 px-6 relative" id="work">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-white mb-4">Selected Work</h2>
<p className="text-slate-400 max-w-sm font-light">
                        A curation of our finest digital experiences designed for the modern web.
                    </p>
</div>
<a className="hidden md:flex items-center gap-2 text-white hover:text-cyan-400 transition-colors pb-2 border-b border-white/20 hover:border-cyan-400" href="#">
                    View All Projects <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="group relative w-full md:col-span-2 cursor-pointer">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl bg-slate-900">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500"></div>
<img alt="Cyberpunk City" className="image-zoom w-full h-full object-cover transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-3xl font-display font-medium text-white tracking-tighter mb-1 group-hover:text-cyan-400 transition-colors">Neon Horizon</h3>
<p className="text-slate-500 text-sm">Fintech • Web Design</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group relative w-full cursor-pointer mt-12">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-slate-900">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500"></div>
<img alt="Abstract dark fluid" className="image-zoom w-full h-full object-cover transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-2xl font-display font-medium text-white tracking-tighter mb-1 group-hover:text-purple-400 transition-colors">Vortex AI</h3>
<p className="text-slate-500 text-sm">Artificial Intelligence • Branding</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group relative w-full cursor-pointer mt-12 md:mt-32">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-slate-900">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500"></div>
<img alt="Neon sign" className="image-zoom w-full h-full object-cover transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-2xl font-display font-medium text-white tracking-tighter mb-1 group-hover:text-lime-400 transition-colors">Echo Labs</h3>
<p className="text-slate-500 text-sm">Audio Tech • Product Design</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group relative w-full md:col-span-2 cursor-pointer mt-12">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl bg-slate-900">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500"></div>
<img alt="Gradient Glass" className="image-zoom w-full h-full object-cover transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-3xl font-display font-medium text-white tracking-tighter mb-1 group-hover:text-pink-400 transition-colors">Prism Protocol</h3>
<p className="text-slate-500 text-sm">Web3 • Development</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-white hover:text-cyan-400 transition-colors pb-2 border-b border-white/20 hover:border-cyan-400" href="#">
                    View All Projects <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#080808] border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-white mb-6">Capabilities</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] neon-border-hover transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-pen-tool w-6 h-6" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Product Design</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">
                        UI/UX design that feels intuitive and looks expensive. We craft interfaces people love to touch.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] neon-border-hover transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-code-2 w-6 h-6" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Development</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">
                        Clean code, blistering speed. We build scalable frontend architectures using modern stacks.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] neon-border-hover transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-lime-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Brand Identity</h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">
                        Logos, typography, and visual systems that cut through the noise and leave a mark.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<span className="block text-4xl md:text-5xl font-display font-medium text-white tracking-tighter mb-2">50+</span>
<span className="text-xs uppercase tracking-widest text-slate-500">Projects Shipped</span>
</div>
<div>
<span className="block text-4xl md:text-5xl font-display font-medium text-white tracking-tighter mb-2">15</span>
<span className="text-xs uppercase tracking-widest text-slate-500">Design Awards</span>
</div>
<div>
<span className="block text-4xl md:text-5xl font-display font-medium text-white tracking-tighter mb-2">4yr</span>
<span className="text-xs uppercase tracking-widest text-slate-500">In Business</span>
</div>
<div>
<span className="block text-4xl md:text-5xl font-display font-medium text-white tracking-tighter mb-2">24/7</span>
<span className="text-xs uppercase tracking-widest text-slate-500">Support</span>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 px-6 overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-24">
<h2 className="text-6xl md:text-9xl font-display font-medium tracking-tighter text-white mb-8 neon-text-glow">
                    Let's Build <br/> The Future.
                </h2>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light mb-10">
                    Ready to transform your digital presence? We are currently accepting new projects for Q4.
                </p>
<a className="group relative px-10 py-5 rounded-full bg-white text-black font-medium text-lg tracking-tight hover:scale-105 transition-transform duration-300" href="mailto:hello@lumos.agency">
                    Start a Project
                    <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12">
<div className="mb-8 md:mb-0">
<a className="text-2xl font-display font-medium tracking-tighter text-white block mb-4" href="#">LUMOS.</a>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
<div className="grid grid-cols-2 gap-12 md:gap-24 text-sm">
<div>
<h4 className="text-white font-medium mb-4">Sitemap</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Work</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Agency</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 text-center md:text-left text-xs text-slate-600">
                © 2023 Lumos Agency. All Rights Reserved.
            </div>
</div>
</footer>


    </>
  );
}

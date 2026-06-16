import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Parallax Effect for Background Elements
        document.addEventListener('mousemove', (e) => {
            const elements = document.querySelectorAll('.parallax-element');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            elements.forEach((el, index) => {
                const speed = (index + 1) * 20;
                const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
                const yOffset = (window.innerHeight / 2 - e.clientY) / speed;
                el.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });

        // Intersection Observer for Fade-in Reveals
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" id="background-elements">
<div className="absolute top-0 left-0 w-full h-full bg-grid"></div>

<div className="parallax-element absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px]"></div>
<div className="parallax-element absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]"></div>

<div className="parallax-element absolute top-[20%] right-[15%] glass px-4 py-2 rounded-lg opacity-40 animate-float border-l-2 border-cyan-500 hidden lg:block">
<span className="font-mono text-xs text-cyan-400">status: 200 OK</span>
</div>
<div className="parallax-element absolute bottom-[30%] left-[10%] glass px-4 py-2 rounded-lg opacity-30 animate-float-delayed border-l-2 border-purple-500 hidden lg:block">
<span className="font-mono text-xs text-purple-400">latency: &lt;50ms</span>
</div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 transition-all duration-300">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-20 items-center justify-between">

<a className="group flex items-center gap-2 font-mono text-xl font-bold tracking-tight text-white" href="#">
<span className="text-cyan-400">&lt;</span>status<span className="text-cyan-400">_</span>200<span className="text-cyan-400">/&gt;</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#services">Solutions</a>
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#about">Team</a>
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#process">Process</a>
</div>

<a className="hidden md:inline-flex items-center justify-center rounded-lg bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all shimmer-effect overflow-hidden relative" href="#contact">
                    Init Project
                </a>

<button className="md:hidden text-white hover:text-cyan-400">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative z-10 flex min-h-screen flex-col items-center justify-center pt-20 overflow-hidden">
<div className="mx-auto max-w-5xl px-6 text-center">

<div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 text-xs font-mono font-medium text-cyan-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                SYSTEM OPERATIONAL
            </div>

<h1 className="reveal mb-6 text-5xl font-semibold tracking-tighter text-white md:text-7xl lg:text-8xl leading-[1.1]">
                Perfect Response.<br/>
<span className="bg-gradient-to-r from-cyan-300 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">Perfect Results.</span>
</h1>

<p className="reveal mx-auto mb-10 max-w-2xl text-lg text-slate-400 font-light tracking-wide delay-100">
                Engineered for performance by <span className="text-white font-medium">Team Status200</span>. We build ultra-responsive digital infrastructure for brands that demand speed.
            </p>

<div className="reveal flex flex-col items-center gap-4 sm:flex-row sm:justify-center delay-200">
<a className="group relative inline-flex h-14 items-center justify-center rounded-lg bg-cyan-500 px-8 text-sm font-bold text-[#030712] transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] overflow-hidden" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                        Start Build
                        <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="18"></span>
</span>
<div className="absolute inset-0 -translate-x-full bg-white/30 skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></div>
</a>
<a className="inline-flex h-14 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/20" href="#services">
                    Explore Stack
                </a>
</div>

<div className="reveal mt-20 relative mx-auto w-full max-w-4xl delay-300">
<div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur opacity-30"></div>
<div className="glass-card rounded-xl border border-white/10 p-1">
<div className="flex items-center gap-2 border-b border-white/5 bg-[#030712]/50 px-4 py-3 rounded-t-lg">
<div className="flex gap-1.5">
<div className="h-2.5 w-2.5 rounded-full bg-red-500/40"></div>
<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/40"></div>
<div className="h-2.5 w-2.5 rounded-full bg-green-500/40"></div>
</div>
<div className="ml-4 font-mono text-xs text-slate-500">api_handler.ts</div>
</div>
<div className="bg-[#030712]/80 p-6 text-left font-mono text-xs md:text-sm rounded-b-lg overflow-x-auto">
<div className="flex gap-4">
<div className="flex flex-col text-slate-700 select-none text-right">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
</div>
<div className="text-slate-300">
<span className="text-purple-400">import</span> { <span className="text-yellow-300">optimize</span> } <span className="text-purple-400">from</span> <span className="text-green-400">'@status200/core'</span>;<br/><br/>
<span className="text-purple-400">export const</span> <span className="text-blue-400">config</span> = {<br/>
                                  runtime: <span className="text-green-400">'edge'</span>,<br/>
                                  regions: [<span className="text-green-400">'iad1'</span>, <span className="text-green-400">'sfo1'</span>]<br/>
                                };
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative z-10 border-y border-white/5 bg-[#030712]/50 py-10 overflow-hidden">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10"></div>
<div className="flex w-[200%] animate-marquee items-center gap-16 md:gap-32">

<div className="flex items-center gap-16 md:gap-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="iconify text-white h-10 w-auto" data-icon="logos:nextjs"></span>
<span className="iconify text-[#61DAFB] h-10 w-auto" data-icon="logos:react"></span>
<span className="iconify text-[#3C873A] h-10 w-auto" data-icon="logos:nodejs-icon"></span>
<span className="iconify text-[#FF9900] h-10 w-auto" data-icon="logos:aws"></span>
<span className="iconify text-[#38B2AC] h-10 w-auto" data-icon="simple-icons:shopify"></span>
<span className="iconify text-[#3776AB] h-10 w-auto" data-icon="logos:python"></span>
<span className="iconify text-[#EE4C2C] h-10 w-auto" data-icon="simple-icons:pytorch"></span>
</div>

<div className="flex items-center gap-16 md:gap-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="iconify text-white h-10 w-auto" data-icon="logos:nextjs"></span>
<span className="iconify text-[#61DAFB] h-10 w-auto" data-icon="logos:react"></span>
<span className="iconify text-[#3C873A] h-10 w-auto" data-icon="logos:nodejs-icon"></span>
<span className="iconify text-[#FF9900] h-10 w-auto" data-icon="logos:aws"></span>
<span className="iconify text-[#38B2AC] h-10 w-auto" data-icon="simple-icons:shopify"></span>
<span className="iconify text-[#3776AB] h-10 w-auto" data-icon="logos:python"></span>
<span className="iconify text-[#EE4C2C] h-10 w-auto" data-icon="simple-icons:pytorch"></span>
</div>
</div>
</div>

<section className="relative z-10 py-24 lg:py-32" id="about">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-mono text-purple-400 mb-6">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span>
                        AI ENGINEERING ROOTS
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Born from code.<br/>
<span className="text-slate-500">Driven by data.</span>
</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Status200 isn't a traditional agency. We are a collective of final-year 
                        <span className="text-white font-medium">AI &amp; Data Science Engineers</span>. 
                        We apply the rigorous standards of machine learning pipelines to web development, ensuring efficiency at every layer of the stack.
                    </p>
<div className="space-y-4">
<div className="glass-card p-4 rounded-lg flex items-center gap-4 hover:border-cyan-500/30 transition-colors">
<div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
<span className="iconify" data-icon="lucide:trophy" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium">Jamrang AI/ML Hackathon Winners</h4>
<p className="text-xs text-slate-500 font-mono">1st Place • Computer Vision Track</p>
</div>
</div>
<div className="glass-card p-4 rounded-lg flex items-center gap-4 hover:border-cyan-500/30 transition-colors">
<div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<span className="iconify" data-icon="lucide:medal" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-medium">Hackshetra ’24 Finalists</h4>
<p className="text-xs text-slate-500 font-mono">Top 10 Nationwide • Innovation Track</p>
</div>
</div>
</div>
</div>
<div className="reveal relative h-full min-h-[400px]">

<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-2xl border border-white/5 p-8 backdrop-blur-sm">
<div className="grid grid-cols-2 gap-4 h-full">
<div className="space-y-4 pt-12">
<div className="bg-[#030712] p-6 rounded-xl border border-white/10 shadow-2xl">
<div className="text-xs text-slate-500 mb-2 font-mono">MODEL ACCURACY</div>
<div className="text-3xl font-bold text-white">99.8%</div>
<div className="h-1 w-full bg-slate-800 mt-3 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 w-[99%]"></div>
</div>
</div>
<div className="bg-[#030712] p-6 rounded-xl border border-white/10 shadow-2xl">
<div className="text-xs text-slate-500 mb-2 font-mono">COMPUTE EFFICIENCY</div>
<div className="text-3xl font-bold text-white">O(log n)</div>
<div className="text-xs text-green-400 mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
                                        Optimized
                                    </div>
</div>
</div>
<div className="space-y-4">
<div className="bg-[#030712] p-6 rounded-xl border border-white/10 shadow-2xl">
<div className="text-xs text-slate-500 mb-2 font-mono">LIGHTHOUSE SCORE</div>
<div className="text-3xl font-bold text-white">100</div>
<div className="flex gap-1 mt-3">
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
<div className="h-1 flex-1 bg-green-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24" id="services">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Core Architecture</h2>
<p className="text-slate-400 max-w-xl mx-auto">Scalable solutions built with modern primitives.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group reveal md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden hover:border-cyan-500/40 transition-all duration-300">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-cyan-500" data-icon="lucide:code-2" data-width="120"></span>
</div>
<div className="relative z-10">
<div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
<span className="iconify text-cyan-400" data-icon="lucide:terminal-square" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">Custom Web Applications</h3>
<p className="text-slate-400 max-w-sm mb-6">Full-stack React &amp; Next.js applications engineered for scale. We handle complex state management, database architecture, and secure API integration.</p>
<ul className="flex flex-wrap gap-2">
<li className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300">React</li>
<li className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300">Next.js</li>
<li className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300">Typescript</li>
</ul>
</div>
</div>

<div className="group reveal md:row-span-2 glass-card rounded-2xl p-8 relative overflow-hidden hover:border-green-500/40 transition-all duration-300">
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition-all"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all">
<span className="iconify text-green-400" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">Performance Engineering</h3>
<p className="text-slate-400 mb-6 flex-1">Core Web Vitals optimization. We reduce Time-to-Interactive and optimize assets to ensure instant loading.</p>
<div className="mt-auto border-t border-white/5 pt-6">
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-slate-500">Speed Index</span>
<span className="text-sm text-green-400 font-mono">0.4s</span>
</div>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-[95%] bg-green-500"></div>
</div>
</div>
</div>
</div>

<div className="group reveal glass-card rounded-2xl p-8 relative overflow-hidden hover:border-purple-500/40 transition-all duration-300">
<div className="relative z-10">
<div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
<span className="iconify text-purple-400" data-icon="lucide:shopping-bag" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Headless Shopify</h3>
<p className="text-slate-400 text-sm">Custom storefronts using Shopify Hydrogen or Next.js Commerce.</p>
</div>
</div>

<div className="group reveal glass-card rounded-2xl p-8 relative overflow-hidden hover:border-orange-500/40 transition-all duration-300">
<div className="relative z-10">
<div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all">
<span className="iconify text-orange-400" data-icon="lucide:bar-chart-big" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Technical SEO</h3>
<p className="text-slate-400 text-sm">Schema markup, SSR rendering, and semantic HTML structure.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#050a16] border-y border-white/5" id="process">
<div className="mx-auto max-w-4xl px-6">
<h2 className="text-3xl md:text-5xl font-semibold text-center text-white mb-20 reveal">Execution Pipeline</h2>
<div className="relative pl-8 md:pl-0">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent -translate-x-1/2"></div>

<div className="relative mb-16 md:mb-24 reveal">
<div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#030712] border-2 border-cyan-500 rounded-full -translate-x-[9px] z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
<div className="md:grid md:grid-cols-2 md:gap-16 items-center">
<div className="md:text-right pl-8 md:pl-0">
<span className="text-cyan-400 font-mono text-sm tracking-widest">PHASE 01</span>
<h3 className="text-2xl font-bold text-white mt-1">Discovery &amp; Audit</h3>
<p className="text-slate-400 mt-2 text-sm">We analyze your current stack or requirements using our proprietary audit tools to identify bottlenecks.</p>
</div>
<div className="hidden md:block"></div>
</div>
</div>

<div className="relative mb-16 md:mb-24 reveal">
<div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#030712] border-2 border-cyan-500 rounded-full -translate-x-[9px] z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
<div className="md:grid md:grid-cols-2 md:gap-16 items-center">
<div className="hidden md:block"></div>
<div className="pl-8 md:pl-0">
<span className="text-cyan-400 font-mono text-sm tracking-widest">PHASE 02</span>
<h3 className="text-2xl font-bold text-white mt-1">Agile Development</h3>
<p className="text-slate-400 mt-2 text-sm">Two-week sprints with transparent code delivery. We prioritize core features to get to MVP fast.</p>
</div>
</div>
</div>

<div className="relative reveal">
<div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#030712] border-2 border-cyan-500 rounded-full -translate-x-[9px] z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
<div className="md:grid md:grid-cols-2 md:gap-16 items-center">
<div className="md:text-right pl-8 md:pl-0">
<span className="text-cyan-400 font-mono text-sm tracking-widest">PHASE 03</span>
<h3 className="text-2xl font-bold text-white mt-1">Deployment &amp; Scale</h3>
<p className="text-slate-400 mt-2 text-sm">CI/CD pipeline setup on Vercel or AWS. Automated testing and instant rollback capabilities.</p>
</div>
<div className="hidden md:block"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-[#030712] to-cyan-900/10 pointer-events-none"></div>
<div className="mx-auto max-w-4xl px-6 text-center">
<div className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden reveal">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]"></div>
<h2 className="relative z-10 text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Ready to build?</h2>
<p className="relative z-10 text-lg text-slate-300 mb-10 max-w-xl mx-auto">
                    Stop settling for templates. Get a custom architecture designed by engineers who understand scale.
                </p>
<a className="relative z-10 group inline-flex h-16 items-center justify-center rounded-xl bg-cyan-500 px-10 text-base font-bold text-[#030712] transition-all hover:bg-cyan-400 hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.3)] shimmer-effect overflow-hidden" href="mailto:hello@status200.dev">
                    Initialize Collaboration
                    <span className="iconify ml-2 transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="20"></span>
</a>
<div className="relative z-10 mt-8 flex justify-center gap-6 text-sm text-slate-500 font-mono">
<span className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        Accepting New Projects
                    </span>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 bg-[#02040a] py-12">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 font-mono text-sm text-slate-500">
<span className="text-cyan-500">&lt;</span>status<span className="text-cyan-500">_</span>200<span className="text-cyan-500">/&gt;</span> © 2024
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="20"></span>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
</div>
</div>
</footer>


    </>
  );
}

import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Typing Animation
        const textToType = "mjstudio init project";
        const typeWriterElement = document.getElementById('typewriter');
        const terminalOutput = document.getElementById('terminal-output');
        let charIndex = 0;

        function type() {
            if (charIndex < textToType.length) {
                typeWriterElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100 + Math.random() * 50);
            } else {
                setTimeout(() => {
                    terminalOutput.classList.remove('hidden');
                    // Reset animation loop
                    setTimeout(() => {
                        typeWriterElement.textContent = '';
                        terminalOutput.classList.add('hidden');
                        charIndex = 0;
                        type();
                    }, 5000);
                }, 500);
            }
        }

        // Start typing after a slight delay
        setTimeout(type, 1000);

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
                nav.style.background = 'rgba(5, 5, 5, 0.8)';
            } else {
                nav.classList.remove('shadow-lg');
                nav.style.background = 'rgba(255, 255, 255, 0.03)';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm tracking-tight group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-shadow">MJ</div>
<span className="text-white font-medium tracking-tight text-sm">MJStudio</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#docs">Documentation</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-all hover:scale-[1.02]" href="#">Start Building</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10 bg-grid h-full w-full"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-40"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/20 mb-8 animate-float">
<span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></span>
<span className="text-xs font-medium text-indigo-300">v2.0 is now available in public preview</span>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-gradient leading-[1.1]">
                Develop at the speed <br className="hidden md:block"/> of thought.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The all-in-one frontend cloud platform. Deploy instantly, scale automatically, and code with an AI partner that understands your architecture.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-medium text-sm transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Start Deploying
                </button>
<button className="w-full sm:w-auto px-8 py-3 glass rounded-full font-medium text-sm text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-all flex items-center justify-center gap-2 group">
<iconify-icon icon="solar:command-linear" width="18"></iconify-icon>
                    Get Access
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="max-w-5xl mx-auto px-4 mt-20 relative reveal">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-20"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden group">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5 backdrop-blur-sm">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
<span className="text-zinc-300">page.tsx</span>
<span>layout.tsx</span>
<span>middleware.ts</span>
</div>
<div className="w-16"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 h-[320px]">

<div className="p-6 font-mono text-sm leading-relaxed overflow-hidden border-r border-white/5 relative">
<div className="absolute top-0 left-0 w-8 h-full bg-[#0A0A0A] border-r border-white/5 text-right pr-2 text-zinc-700 select-none pt-6 text-xs">
                            1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9
                        </div>
<div className="pl-8">
<div><span className="token-keyword">import</span> { Suspense } <span className="token-keyword">from</span> <span className="token-string">'react'</span></div>
<div><span className="token-keyword">import</span> { Hero } <span className="token-keyword">from</span> <span className="token-string">'@/components/hero'</span></div>
<br/>
<div><span className="token-keyword">export default function</span> <span className="token-func">Page</span>() {</div>
<div className="pl-4"><span className="token-keyword">return</span> (</div>
<div className="pl-8">&lt;<span className="token-func">main</span> className=<span className="token-string">"flex min-h-screen"</span>&gt;</div>
<div className="pl-12">&lt;<span className="token-func">Suspense</span> fallback={&lt;<span className="token-func">Loading</span> /&gt;}&gt;</div>
<div className="pl-16">&lt;<span className="token-func">Hero</span> /&gt;</div>
<div className="pl-12">&lt;/<span className="token-func">Suspense</span>&gt;</div>
<div className="pl-8">&lt;/<span className="token-func">main</span>&gt;</div>
<div className="pl-4">)</div>
<div>}</div>
</div>
</div>

<div className="bg-[#050505] p-6 font-mono text-xs md:text-sm text-zinc-400 relative">
<div className="flex items-center gap-2 mb-4 text-zinc-500">
<iconify-icon icon="solar:terminal-linear"></iconify-icon>
<span>Terminal</span>
</div>
<div className="space-y-2">
<div className="flex gap-2">
<span className="text-green-500">➜</span>
<span className="text-blue-400">~/mjstudio</span>
<span id="typewriter"></span><span className="cursor-blink bg-zinc-500 w-2 h-4 inline-block align-middle"></span>
</div>
<div className="hidden space-y-2 pt-2" id="terminal-output">
<div className="text-zinc-500">Building production bundle...</div>
<div className="flex items-center gap-2 text-zinc-300">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Compiled successfully in 140ms</span>
</div>
<div className="flex items-center gap-2 text-zinc-300">
<iconify-icon className="text-purple-500" icon="solar:rocket-linear"></iconify-icon>
<span>Deployed to <span className="underline decoration-zinc-700">https://mj-app-8x2.vercel.app</span></span>
</div>
<div className="mt-4 p-3 bg-zinc-900/50 border border-zinc-800 rounded flex justify-between items-center">
<span>Core Vitals</span>
<div className="flex gap-3 text-xs">
<span className="text-green-400">LCP: 0.8s</span>
<span className="text-green-400">FID: 12ms</span>
<span className="text-green-400">CLS: 0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Trusted by engineering teams at</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> Acme Corp</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tighter italic text-white"><iconify-icon icon="solar:atom-linear"></iconify-icon> QUANTUM</div>
<div className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"><iconify-icon icon="solar:gloves-linear"></iconify-icon> Stark</div>
<div className="flex items-center gap-2 text-lg font-medium tracking-widest text-white"><iconify-icon icon="solar:infinite-linear"></iconify-icon> LOOP</div>
<div className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"><iconify-icon icon="solar:layers-linear"></iconify-icon> STACK</div>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4 reveal">Built for scale,<br/>designed for speed.</h2>
<p className="text-zinc-400 text-lg max-w-xl reveal delay-100">Everything you need to ship full-stack applications without the infrastructure headaches.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass glass-hover rounded-xl p-8 relative overflow-hidden group reveal delay-100 transition-all duration-300">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-yellow-400" icon="solar:bolt-linear" width="48"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Global Edge Network</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Functions execute at the edge, closest to your users. Zero cold starts.</p>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<span className="text-3xl font-medium text-white tracking-tight">&lt;100ms</span>
<span className="block text-xs text-zinc-500 mt-1">Global latency average</span>
</div>
</div>
</div>

<div className="glass glass-hover rounded-xl p-8 relative overflow-hidden group reveal delay-200 transition-all duration-300 md:col-span-2">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full relative z-10">
<div className="flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-indigo-900/50 flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">AI Copilot Integrated</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Context-aware suggestions, automated refactoring, and security auditing built directly into your CI/CD pipeline.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm text-indigo-400 mt-6 group/link" href="#">
                                See how it works <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="bg-[#0A0A0A] rounded-lg border border-white/10 p-4 flex flex-col gap-3 shadow-xl">

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px]">AI</div>
<div className="bg-zinc-800/50 p-2 rounded-lg rounded-tl-none text-xs text-zinc-300 w-full">
                                    I found a potential N+1 query issue in <code className="bg-zinc-800 px-1 rounded text-white">users.ts</code>. Shall I fix it?
                                </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px]">You</div>
<div className="bg-blue-600/20 text-blue-200 border border-blue-500/20 p-2 rounded-lg rounded-tr-none text-xs w-auto">
                                    Yes, deploy the fix.
                                </div>
</div>
<div className="mt-2 border-t border-white/5 pt-2 flex items-center gap-2 text-[10px] text-green-400">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Refactoring applied
                            </div>
</div>
</div>
</div>

<div className="glass glass-hover rounded-xl p-8 relative overflow-hidden group reveal delay-300 transition-all duration-300">
<div className="h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-zinc-400 leading-relaxed">SOC2 Type II compliant, automated DDoS protection, and encrypted environment variables.</p>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<span className="text-3xl font-medium text-white tracking-tight">99.99%</span>
<span className="block text-xs text-zinc-500 mt-1">Uptime guarantee SLA</span>
</div>
</div>
</div>

<div className="glass glass-hover rounded-xl p-8 relative overflow-hidden group reveal delay-400 transition-all duration-300 md:col-span-2">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Instant Scalability</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Handle traffic spikes effortlessly. Our infrastructure auto-scales from zero to millions of requests in seconds.</p>
</div>

<div className="flex-1 w-full h-32 relative flex items-end justify-between px-4 pb-4 border-b border-l border-zinc-800">
<div className="w-2 bg-indigo-500/20 rounded-t h-[20%]"></div>
<div className="w-2 bg-indigo-500/30 rounded-t h-[35%]"></div>
<div className="w-2 bg-indigo-500/40 rounded-t h-[30%]"></div>
<div className="w-2 bg-indigo-500/50 rounded-t h-[60%]"></div>
<div className="w-2 bg-indigo-500/60 rounded-t h-[45%]"></div>
<div className="w-2 bg-indigo-500/80 rounded-t h-[80%]"></div>
<div className="w-2 bg-indigo-500 rounded-t h-[95%] shadow-[0_0_15px_#6366f1]"></div>
<div className="absolute top-0 right-0 text-[10px] text-indigo-300 bg-indigo-900/40 px-2 py-0.5 rounded border border-indigo-500/20">Autoscaling Active</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black overflow-hidden relative group">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center mb-8">
<span className="text-xs font-medium text-zinc-500 tracking-widest uppercase">Plug &amp; Play with your stack</span>
</div>
<div className="flex justify-center gap-12 items-center flex-wrap px-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<div className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="cib:github" width="24"></iconify-icon> <span className="text-sm font-semibold">GitHub</span>
</div>
<div className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="cib:stripe" width="24"></iconify-icon> <span className="text-sm font-semibold">Stripe</span>
</div>
<div className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="cib:slack" width="24"></iconify-icon> <span className="text-sm font-semibold">Slack</span>
</div>
<div className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="cib:amazon-aws" width="24"></iconify-icon> <span className="text-sm font-semibold">AWS</span>
</div>
<div className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="cib:docker" width="24"></iconify-icon> <span className="text-sm font-semibold">Docker</span>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4 reveal">How MJStudio Works</h2>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

<div className="glass p-6 rounded-xl w-64 text-center reveal border border-zinc-800">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-white text-xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm mb-1">Push Code</h4>
<p className="text-xs text-zinc-500">Git commit to main triggers the build pipeline.</p>
</div>

<div className="hidden md:block text-zinc-600">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>

<div className="glass p-6 rounded-xl w-64 text-center reveal delay-100 border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
<div className="absolute -top-3 -right-3">
<span className="flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
</span>
</div>
<div className="w-12 h-12 rounded-full bg-indigo-900/50 border border-indigo-500/50 flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-indigo-300 text-xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm mb-1">AI Optimize</h4>
<p className="text-xs text-zinc-400">Code is analyzed, optimized and built.</p>
</div>

<div className="hidden md:block text-zinc-600">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>

<div className="glass p-6 rounded-xl w-64 text-center reveal delay-200 border border-zinc-800">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-white text-xl" icon="solar:globe-linear"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm mb-1">Edge Deploy</h4>
<p className="text-xs text-zinc-500">Instantly available in 35+ regions worldwide.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="glass p-10 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
<div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to ship faster?</h2>
<p className="text-zinc-400 mb-10 text-lg">Join 10,000+ developers building the future of the web.</p>
<form className="max-w-md mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex items-center bg-black rounded-full p-1 border border-zinc-800 focus-within:border-zinc-500 transition-colors">
<iconify-icon className="text-zinc-500 ml-4" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-transparent text-white px-4 py-3 outline-none text-sm placeholder:text-zinc-600" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap" type="button">
                            Get Early Access
                        </button>
</div>
</form>
<p className="mt-6 text-xs text-zinc-600">No spam. Unsubscribe anytime.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-xs tracking-tight">MJ</div>
<span className="text-white font-medium tracking-tight text-sm">MJStudio</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        The developer platform for the AI era. Build, deploy, and scale with confidence.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="cib:twitter" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="cib:github" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="cib:discord" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Infrastructure</a></li>
<li><a className="hover:text-white transition-colors" href="#">Preview Environments</a></li>
<li><a className="hover:text-white transition-colors" href="#">AI Copilot</a> <span className="text-[10px] text-indigo-400 bg-indigo-900/30 px-1.5 py-0.5 rounded ml-1">New</span></li>
<li><a className="hover:text-white transition-colors" href="#">Analytics</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Templates</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-600 text-xs">© 2024 MJStudio Platform Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-zinc-500 text-xs">All systems operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}

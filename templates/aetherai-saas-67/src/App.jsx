import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
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

            // Navbar Blur Effect on Scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('shadow-lg', 'bg-[#0B0F19]/90');
                    navbar.classList.remove('bg-[#0B0F19]/80');
                } else {
                    navbar.classList.remove('shadow-lg', 'bg-[#0B0F19]/90');
                    navbar.classList.add('bg-[#0B0F19]/80');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none mesh-bg"></div>

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 backdrop-blur-md shadow-lg bg-[#0B0F19]/90" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#7C3AED] flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-all duration-500 font-geist" style={{}}>
                    A
                </div>
<span className="text-white font-medium tracking-tight text-lg font-geist">AetherAI</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition-colors font-geist" href="#home">Home</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors font-geist" href="#features">Product</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors font-geist" href="#developers">Developers</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors font-geist" href="#resources">Resources</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors font-geist" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-white hover:text-[#22D3EE] transition-colors font-geist">Log In</button>
<button className="relative group overflow-hidden rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/40">
<span className="relative z-10 flex items-center gap-2 font-geist">
                        Get Started
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
</button>
</div>
</div>
</header>

<section className="md:pt-48 md:pb-32 overflow-hidden z-10 pt-32 pb-20 relative" id="home">
<div className="grid lg:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="max-w-2xl reveal">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#22D3EE] mb-6 backdrop-blur-sm font-geist">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
</span>
                    New: Enterprise API v2.0
                </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight font-geist mb-6">
                    Build Smarter Systems with <span className="text-gradient-indigo font-geist font-semibold" style={{}}>Powerful AI</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 mb-8 leading-relaxed max-w-lg font-geist">
                    Automate workflows, analyze data, and scale your business using secure, next-generation artificial intelligence.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group relative flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 text-sm font-semibold text-[#0B0F19] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] font-geist">
                        Start Free Trial
                    </button>
<button className="group flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 font-geist">
<iconify-icon className="text-[#22D3EE]" icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Book a Demo
                    </button>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-neutral-500">
<div className="flex -space-x-3">
<div className="h-8 w-8 rounded-full bg-neutral-700 border border-[#0B0F19]" style={{}}></div>
<div className="h-8 w-8 rounded-full bg-neutral-600 border border-[#0B0F19]" style={{}}></div>
<div className="h-8 w-8 rounded-full bg-neutral-500 border border-[#0B0F19]" style={{}}></div>
</div>
<span className="font-geist">Trusted by 5,000+ teams</span>
</div>
</div>

<div className="flex lg:justify-end reveal delay-200 relative justify-center">
<div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#7C3AED] blur-[100px] opacity-40 animate-pulse-glow"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#3B82F6] blur-[60px] opacity-60 mix-blend-screen"></div>

<div className="absolute inset-0 border border-white/10 rounded-full animate-orb-spin" style={{animationDuration: '20s'}}></div>
<div className="absolute inset-[15%] border border-dashed border-white/10 rounded-full animate-orb-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
<div className="absolute inset-[30%] border border-white/5 rounded-full animate-orb-spin" style={{animationDuration: '15s'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float">
<div className="md:w-48 md:h-48 flex transform hover:rotate-0 transition-transform duration-700 bg-gradient-to-br from-white/10 to-transparent w-32 h-32 border-white/20 border rounded-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl rotate-12 items-center justify-center">
<iconify-icon className="text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" icon="solar:cpu-bolt-linear" width="64"></iconify-icon>

<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#22D3EE]"></div>
<div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#7C3AED]"></div>
</div>
</div>

<div className="absolute top-[20%] right-[10%] w-12 h-12 bg-[#1e293b]/80 backdrop-blur border border-white/10 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
<iconify-icon className="text-[#22D3EE]" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-[20%] left-[10%] w-14 h-14 bg-[#1e293b]/80 backdrop-blur border border-white/10 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
<iconify-icon className="text-[#7C3AED]" icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-neutral-500 mb-8 font-geist">Trusted by innovative teams worldwide</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity"><iconify-icon icon="simple-icons:vercel" width="24"></iconify-icon> <span className="font-bold tracking-tight font-geist">Vercel</span></div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity"><iconify-icon icon="simple-icons:stripe" width="24"></iconify-icon> <span className="font-bold tracking-tight font-geist">Stripe</span></div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity"><iconify-icon icon="simple-icons:openai" width="24"></iconify-icon> <span className="font-bold tracking-tight font-geist">OpenAI</span></div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity"><iconify-icon icon="simple-icons:notion" width="24"></iconify-icon> <span className="font-bold tracking-tight font-geist">Notion</span></div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity"><iconify-icon icon="simple-icons:linear" width="24"></iconify-icon> <span className="font-bold tracking-tight font-geist">Linear</span></div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity"><iconify-icon icon="simple-icons:shopify" width="24"></iconify-icon> <span className="font-bold tracking-tight font-geist">Shopify</span></div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto reveal">
<h2 className="text-3xl md:text-4xl text-white mb-4 tracking-tight font-geist font-semibold">Built for scale and intelligence</h2>
<p className="text-neutral-400 font-geist">Our platform provides the infrastructure you need to deploy enterprise-grade AI applications in minutes.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card group rounded-2xl p-8 relative overflow-hidden reveal delay-100">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-24 h-24 bg-[#3B82F6] blur-[50px] rounded-full"></div>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-geist">AI Automation Engine</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-geist">Automate repetitive tasks and complex workflows using intelligent AI models designed for speed and accuracy.</p>
</div>
</div>

<div className="glass-card group rounded-2xl p-8 relative overflow-hidden reveal delay-200">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-24 h-24 bg-[#22D3EE] blur-[50px] rounded-full"></div>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-geist">Predictive Analytics</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-geist">Make data-driven decisions with real-time insights and future predictions powered by machine learning.</p>
</div>
</div>

<div className="glass-card group rounded-2xl p-8 relative overflow-hidden reveal delay-300">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-24 h-24 bg-[#7C3AED] blur-[50px] rounded-full"></div>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-geist">Secure Infrastructure</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-geist">Enterprise-grade security ensures your data stays protected, compliant, and reliable at all times.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#05070E] border-t border-white/5" id="developers">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 reveal">

<div className="rounded-xl border border-white/10 bg-[#0B0F19] shadow-2xl overflow-hidden relative group">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-cyan-500/20 border border-cyan-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500/50"></div>
</div>
<div className="text-[10px] text-neutral-500 font-mono font-geist">analysis.js</div>
</div>

<div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
<div className="text-neutral-400 font-geist">
<span className="code-comment font-geist">// Initialize AetherAI Client</span>
<span className="code-keyword font-geist">import</span> { AetherClient } <span className="code-keyword font-geist">from</span> <span className="code-string font-geist">'@aether/sdk'</span>;
                                <span className="code-keyword font-geist">const</span> client = <span className="code-keyword font-geist">new</span> AetherClient({
                                  apiKey: <span className="code-string font-geist">process.env.AETHER_KEY</span>,
                                  region: <span className="code-string font-geist">'us-east-1'</span>
                                });
                                <span className="code-comment font-geist">// Execute predictive model</span>
<span className="code-keyword font-geist">const</span> result = <span className="code-keyword font-geist">await</span> client.predict({
                                  dataset: <span className="code-string font-geist">'sales_q3'</span>,
                                  parameters: { 
                                    growth: <span className="code-num font-geist">0.15</span>,
                                    confidence: <span className="code-num font-geist">0.98</span>
                                  }
                                });
                                <span className="code-func font-geist">console</span>.log(result.forecast);
                            </div>
</div>

<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 blur-[60px] pointer-events-none group-hover:bg-indigo-600/30 transition-colors" style={{}}></div>
</div>
</div>
<div className="order-1 lg:order-2 reveal delay-100">
<div className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#7C3AED] mb-6 font-geist">
<iconify-icon icon="solar:code-circle-bold" width="14"></iconify-icon>
                        Developer Experience
                    </div>
<h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-geist font-semibold">Built by developers,for developers</h2>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed font-geist">
                        Integrate powerful AI capabilities into your applications with just a few lines of code. Our SDKs are type-safe, fully documented, and ready for production.
                    </p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm font-geist">Rich Documentation</h4>
<p className="text-neutral-500 text-xs mt-1 font-geist">Comprehensive guides &amp; API refs.</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm font-geist">99.99% Uptime</h4>
<p className="text-neutral-500 text-xs mt-1 font-geist">Global edge network deployment.</p>
</div>
</div>
</div>
<a className="text-white text-sm font-medium hover:text-[#22D3EE] transition-colors inline-flex items-center gap-1 group font-geist" href="#">
                        Read the docs
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 reveal">
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-geist font-semibold">Everything you need to ship</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="glass-card md:col-span-4 md:row-span-2 rounded-3xl p-8 relative overflow-hidden group reveal">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-[#3B82F6]" icon="solar:graph-new-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl text-white mb-2 font-geist font-semibold">Real-time Observability</h3>
<p className="text-neutral-400 max-w-md font-geist">Monitor your AI models in real-time. Track latency, token usage, and accuracy drift through our centralized dashboard.</p>
</div>

<div className="mt-8 w-full h-48 bg-[#0B0F19] border border-white/10 rounded-xl overflow-hidden relative">

<div className="absolute bottom-0 left-0 right-0 h-3/4 flex items-end gap-1 px-4 pb-4 opacity-80">
<div className="w-full bg-[#3B82F6] h-[30%] rounded-t-sm"></div>
<div className="w-full bg-[#3B82F6] h-[45%] rounded-t-sm"></div>
<div className="w-full bg-[#3B82F6] h-[35%] rounded-t-sm"></div>
<div className="w-full bg-[#3B82F6] h-[60%] rounded-t-sm"></div>
<div className="w-full bg-[#3B82F6] h-[50%] rounded-t-sm"></div>
<div className="w-full bg-[#3B82F6] h-[75%] rounded-t-sm"></div>
<div className="w-full bg-[#3B82F6] h-[65%] rounded-t-sm"></div>
<div className="w-full bg-[#3B82F6] h-[85%] rounded-t-sm opacity-50"></div> 
</div>
<div className="absolute top-4 left-4 text-[10px] text-neutral-500 font-mono font-geist">REQUESTS / SEC</div>
</div>
</div>
</div>

<div className="glass-card md:col-span-2 md:row-span-1 rounded-3xl p-8 relative overflow-hidden group reveal delay-100">
<div className="relative z-10">
<iconify-icon className="text-[#7C3AED] mb-4" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2 font-geist">Team Collaboration</h3>
<p className="text-sm text-neutral-400 font-geist">Share prompts and fine-tuned models across your organization securely.</p>
</div>
<div className="absolute -bottom-6 -right-6">
<iconify-icon className="text-white/5 rotate-12" icon="solar:users-group-rounded-bold" width="120"></iconify-icon>
</div>
</div>

<div className="glass-card md:col-span-2 md:row-span-1 rounded-3xl p-8 relative overflow-hidden group reveal delay-200">
<div className="relative z-10">
<iconify-icon className="text-[#22D3EE] mb-4" icon="solar:shield-check-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2 font-geist">SOC2 Compliant</h3>
<p className="text-sm text-neutral-400 font-geist">Enterprise-grade security measures to keep your data safe and private.</p>
</div>
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0F19]" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl text-white mb-8 tracking-tight font-geist font-semibold">Seamless Workflow Integration</h2>
<div className="space-y-8 relative">

<div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#7C3AED] to-transparent opacity-30"></div>

<div className="relative flex gap-6 group">
<div className="w-10 h-10 rounded-full bg-[#0B0F19] border border-[#3B82F6] z-10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
<span className="text-xs text-[#3B82F6] font-geist">01</span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#3B82F6] transition-colors font-geist">Connect Your Data</h3>
<p className="text-sm text-neutral-400 font-geist">Easily integrate APIs, databases, and tools in minutes via our secure connectors.</p>
</div>
</div>

<div className="relative flex gap-6 group">
<div className="w-10 h-10 rounded-full bg-[#0B0F19] border border-neutral-700 group-hover:border-[#7C3AED] z-10 flex items-center justify-center shrink-0 transition-colors">
<span className="text-xs text-neutral-400 group-hover:text-[#7C3AED] font-geist">02</span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#7C3AED] transition-colors font-geist">AI Processing</h3>
<p className="text-sm text-neutral-400 font-geist">Our AI analyzes, learns, and optimizes your workflows automatically in the background.</p>
</div>
</div>

<div className="relative flex gap-6 group">
<div className="w-10 h-10 rounded-full bg-[#0B0F19] border border-neutral-700 group-hover:border-[#22D3EE] z-10 flex items-center justify-center shrink-0 transition-colors">
<span className="text-xs text-neutral-400 group-hover:text-[#22D3EE] font-geist">03</span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#22D3EE] transition-colors font-geist">Actionable Results</h3>
<p className="text-sm text-neutral-400 font-geist">Get accurate outputs, insights, and automation at scale, delivered where you need them.</p>
</div>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 aspect-square md:aspect-video flex items-center justify-center reveal delay-200">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>

<div className="relative flex items-center gap-4 md:gap-8">

<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center shadow-lg relative">
<iconify-icon className="text-neutral-400" icon="solar:database-linear" width="24"></iconify-icon>
<div className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-[#1e293b]"></div>
</div>
<span className="text-xs font-mono text-neutral-500 font-geist">Input</span>
</div>

<div className="w-12 md:w-24 h-[2px] bg-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent w-1/2 animate-[marquee_1.5s_linear_infinite] translate-x-full"></div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-[#7C3AED] blur-xl opacity-20 animate-pulse"></div>
<div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#1e293b] to-black border border-[#7C3AED]/50 flex items-center justify-center shadow-lg relative z-10">
<iconify-icon className="text-white" icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-[#7C3AED] font-geist">Engine</span>
</div>

<div className="w-12 md:w-24 h-[2px] bg-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent w-1/2 animate-[marquee_1.5s_linear_infinite] translate-x-full" style={{animationDelay: '0.5s'}}></div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center shadow-lg">
<iconify-icon className="text-neutral-400" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-neutral-500 font-geist">Output</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden">
<div className="mb-8 text-center px-6">
<h3 className="text-sm font-medium text-neutral-500 uppercase tracking-widest font-geist">Integrates with your favorite tools</h3>
</div>
<div className="relative w-full">
<div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-[#0B0F19] to-transparent"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-[#0B0F19] to-transparent"></div>
<div className="flex gap-12 w-max animate-marquee hover:[animation-play-state:paused] items-center">

<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:slack" width="24"></iconify-icon> <span className="font-medium font-geist">Slack</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:jira" width="24"></iconify-icon> <span className="font-medium font-geist">Jira</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:github" width="24"></iconify-icon> <span className="font-medium font-geist">GitHub</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:gitlab" width="24"></iconify-icon> <span className="font-medium font-geist">GitLab</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:salesforce" width="24"></iconify-icon> <span className="font-medium font-geist">Salesforce</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:hubspot" width="24"></iconify-icon> <span className="font-medium font-geist">HubSpot</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:zendesk" width="24"></iconify-icon> <span className="font-medium font-geist">Zendesk</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:googlecloud" width="24"></iconify-icon> <span className="font-medium font-geist">Google Cloud</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:amazonaws" width="24"></iconify-icon> <span className="font-medium font-geist">AWS</span></div>

<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:slack" width="24"></iconify-icon> <span className="font-medium font-geist">Slack</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:jira" width="24"></iconify-icon> <span className="font-medium font-geist">Jira</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:github" width="24"></iconify-icon> <span className="font-medium font-geist">GitHub</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:gitlab" width="24"></iconify-icon> <span className="font-medium font-geist">GitLab</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:salesforce" width="24"></iconify-icon> <span className="font-medium font-geist">Salesforce</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:hubspot" width="24"></iconify-icon> <span className="font-medium font-geist">HubSpot</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:zendesk" width="24"></iconify-icon> <span className="font-medium font-geist">Zendesk</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:googlecloud" width="24"></iconify-icon> <span className="font-medium font-geist">Google Cloud</span></div>
<div className="flex items-center gap-2 opacity-50 text-white"><iconify-icon icon="simple-icons:amazonaws" width="24"></iconify-icon> <span className="font-medium font-geist">AWS</span></div>
</div>
</div>
</section>

<section className="py-20 border-b border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center reveal">
<div className="text-4xl md:text-5xl text-white mb-2 font-geist font-semibold">98%</div>
<div className="text-sm text-neutral-500 font-medium font-geist">Accuracy Rate</div>
</div>
<div className="text-center reveal delay-100">
<div className="text-4xl md:text-5xl text-white mb-2 font-geist font-semibold">10x</div>
<div className="text-sm text-neutral-500 font-medium font-geist">Faster Processing</div>
</div>
<div className="text-center reveal delay-200">
<div className="text-4xl md:text-5xl text-white mb-2 font-geist font-semibold">1M+</div>
<div className="text-sm text-neutral-500 font-medium font-geist">Tasks Automated</div>
</div>
<div className="text-center reveal delay-300">
<div className="text-4xl md:text-5xl text-white mb-2 font-geist font-semibold">24/7</div>
<div className="text-sm text-neutral-500 font-medium font-geist">AI Monitoring</div>
</div>
</div>
</section>

<section className="py-20 bg-[#0B0F19]">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-3xl bg-gradient-to-r from-[#0B0F19] to-[#111624] border border-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 reveal">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 text-[#22D3EE] mb-4">
<iconify-icon icon="solar:shield-check-bold" width="20"></iconify-icon>
<span className="text-sm font-bold uppercase tracking-wide font-geist">Enterprise Security</span>
</div>
<h2 className="text-3xl text-white mb-4 font-geist font-semibold">Your data, fully protected.</h2>
<p className="text-neutral-400 mb-8 font-geist">We adhere to the strictest security standards. Your data is encrypted at rest and in transit, and we never use your data to train our public models without permission.</p>
<div className="flex flex-wrap gap-4">
<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-sm text-neutral-300 font-geist">
<iconify-icon className="text-[#22D3EE]" icon="solar:check-circle-bold"></iconify-icon> SOC2 Type II
                        </div>
<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-sm text-neutral-300 font-geist">
<iconify-icon className="text-[#22D3EE]" icon="solar:check-circle-bold"></iconify-icon> GDPR Ready
                        </div>
<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-sm text-neutral-300 font-geist">
<iconify-icon className="text-[#22D3EE]" icon="solar:check-circle-bold"></iconify-icon> HIPAA
                        </div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-[#22D3EE] blur-[60px] opacity-10"></div>
<iconify-icon className="text-white relative z-10 opacity-80" icon="solar:lock-password-unlocked-linear" width="160"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-geist font-semibold">Simple, transparent pricing</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="glass-card rounded-2xl p-8 reveal delay-100">
<h3 className="text-lg font-medium text-white mb-2 font-geist">Starter</h3>
<p className="text-sm text-neutral-400 mb-6 font-geist">For individuals &amp; startups</p>
<div className="text-3xl text-white mb-6 font-geist font-semibold">$0 <span className="text-sm font-normal text-neutral-500 font-geist">/mo</span></div>
<button className="w-full py-2 rounded-lg border border-white/20 bg-transparent text-sm font-medium text-white hover:bg-white/5 transition-colors mb-8 font-geist">Get Started</button>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Core AI tools</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Basic automation</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Email support</li>
</ul>
</div>

<div className="rounded-2xl p-8 bg-[#131722] border border-[#7C3AED] shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)] relative transform md:-translate-y-4 reveal delay-200">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7C3AED] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-geist">Recommended</div>
<h3 className="text-lg font-medium text-white mb-2 font-geist">Pro</h3>
<p className="text-sm text-neutral-400 mb-6 font-geist">For growing teams</p>
<div className="text-3xl text-white mb-6 font-geist font-semibold">$49 <span className="text-sm font-normal text-neutral-500 font-geist">/mo</span></div>
<button className="w-full py-2 rounded-lg bg-[#7C3AED] text-sm font-medium text-white hover:bg-[#6D28D9] transition-colors mb-8 shadow-lg shadow-indigo-900/20 font-geist" style={{}}>Start Free Trial</button>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-white font-geist"><iconify-icon className="text-[#7C3AED]" icon="solar:check-circle-bold"></iconify-icon> Advanced AI workflows</li>
<li className="flex items-center gap-3 text-sm text-white font-geist"><iconify-icon className="text-[#7C3AED]" icon="solar:check-circle-bold"></iconify-icon> Real-time analytics</li>
<li className="flex items-center gap-3 text-sm text-white font-geist"><iconify-icon className="text-[#7C3AED]" icon="solar:check-circle-bold"></iconify-icon> Priority support</li>
</ul>
</div>

<div className="glass-card rounded-2xl p-8 reveal delay-300">
<h3 className="text-lg font-medium text-white mb-2 font-geist">Enterprise</h3>
<p className="text-sm text-neutral-400 mb-6 font-geist">For large organizations</p>
<div className="text-3xl text-white mb-6 font-geist font-semibold">Custom</div>
<button className="w-full py-2 rounded-lg border border-white/20 bg-transparent text-sm font-medium text-white hover:bg-white/5 transition-colors mb-8 font-geist">Contact Sales</button>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Custom AI solutions</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Dedicated infrastructure</li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> SLA &amp; onboarding</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0F19] border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl text-white text-center mb-12 tracking-tight font-geist font-semibold">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group rounded-lg border border-white/10 bg-white/[0.02] open:bg-white/[0.04] transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span className="font-geist">How does the free trial work?</span>
<iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed font-geist">
                        You get full access to the Pro plan for 14 days. No credit card is required to start. At the end of the trial, you can choose to upgrade or remain on the free Starter plan.
                    </div>
</details>

<details className="group rounded-lg border border-white/10 bg-white/[0.02] open:bg-white/[0.04] transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span className="font-geist">Can I deploy models to my own infrastructure?</span>
<iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed font-geist">
                        Yes, our Enterprise plan supports on-premise deployment and private cloud VPCs (AWS, GCP, Azure) for maximum security and compliance needs.
                    </div>
</details>

<details className="group rounded-lg border border-white/10 bg-white/[0.02] open:bg-white/[0.04] transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span className="font-geist">Is my data used to train your models?</span>
<iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed font-geist">
                        Absolutely not. We have a strict zero-retention policy for API data by default. Your inputs and outputs belong to you and are never used to train our foundation models.
                    </div>
</details>

<details className="group rounded-lg border border-white/10 bg-white/[0.02] open:bg-white/[0.04] transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span className="font-geist">What programming languages do you support?</span>
<iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed font-geist">
                        We provide official SDKs for Python, Node.js, and Go. Our REST API is language-agnostic and can be consumed from any environment that supports HTTP requests.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="resources">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl text-white tracking-tight mb-2 font-geist font-semibold">Latest Updates</h2>
<p className="text-neutral-400 text-sm font-geist">Insights from the engineering team.</p>
</div>
<a className="text-[#3B82F6] text-sm font-medium hover:text-white transition-colors font-geist" href="#">View all posts -&gt;</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<a className="group block" href="#">
<div className="aspect-video rounded-xl bg-gradient-to-br from-neutral-800 to-[#0B0F19] border border-white/10 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded text-[10px] text-white backdrop-blur font-geist">Engineering</div>

<div className="w-full h-full flex items-center justify-center opacity-30">
<iconify-icon className="text-white group-hover:scale-110 transition-transform" icon="solar:code-square-linear" width="48"></iconify-icon>
</div>
</div>
<div className="text-xs text-neutral-500 mb-2 font-geist">October 24, 2023</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#3B82F6] transition-colors font-geist">Reducing LLM Latency by 40%</h3>
<p className="text-sm text-neutral-400 line-clamp-2 font-geist">How we optimized our edge network to deliver faster responses for real-time applications.</p>
</a>

<a className="group block" href="#">
<div className="aspect-video rounded-xl bg-gradient-to-br from-[#1e1b4b] to-[#0B0F19] border border-white/10 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded text-[10px] text-white backdrop-blur font-geist">Product</div>
<div className="w-full h-full flex items-center justify-center opacity-30">
<iconify-icon className="text-white group-hover:scale-110 transition-transform" icon="solar:layers-linear" width="48"></iconify-icon>
</div>
</div>
<div className="text-xs text-neutral-500 mb-2 font-geist">October 12, 2023</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#3B82F6] transition-colors font-geist">Introducing Visual Workflows</h3>
<p className="text-sm text-neutral-400 line-clamp-2 font-geist">A new way to build complex AI chains without writing a single line of code.</p>
</a>

<a className="group block" href="#">
<div className="aspect-video rounded-xl bg-gradient-to-br from-[#0f172a] to-[#0B0F19] border border-white/10 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded text-[10px] text-white backdrop-blur font-geist">Security</div>
<div className="w-full h-full flex items-center justify-center opacity-30">
<iconify-icon className="text-white group-hover:scale-110 transition-transform" icon="solar:lock-keyhole-linear" width="48"></iconify-icon>
</div>
</div>
<div className="text-xs text-neutral-500 mb-2 font-geist">September 28, 2023</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#3B82F6] transition-colors font-geist">Achieving SOC2 Type II Compliance</h3>
<p className="text-sm text-neutral-400 line-clamp-2 font-geist">What this milestone means for our enterprise customers and data privacy commitments.</p>
</a>
</div>
</div>
</section>

<section className="py-20 relative bg-white/[0.01]">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<div className="mb-6 flex justify-center text-[#7C3AED]">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-geist font-semibold">"Using AetherAI helped us reduce operational workload by 40% while significantly improving our data accuracy. It feels like magic."</h3>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600"></div>
<div className="text-left">
<div className="text-white font-medium text-sm font-geist">Elena Roberts</div>
<div className="text-neutral-500 text-xs font-geist">Product Lead, Tech Company</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative border border-white/10 reveal">

<div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#0B0F19] to-[#0B0F19] z-0"></div>
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.2),transparent_50%)]"></div>
<div className="relative z-10 px-6 py-16 md:py-24 text-center">
<h2 className="text-3xl md:text-5xl text-white mb-6 tracking-tight font-geist font-semibold">Ready to Transform Your Business?</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto font-geist">Start building smarter systems today. No credit card required for trial.</p>
<button className="relative group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0B0F19] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] font-geist">
                    Get Started Now
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-[#05070e] border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-[#3B82F6] to-[#7C3AED] flex items-center justify-center text-white text-xs font-bold font-geist" style={{}}>A</div>
<span className="text-white font-medium font-geist">AetherAI</span>
</a>
<p className="text-xs text-neutral-500 leading-relaxed font-geist">Powering the next generation of intelligent automation.</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4 font-geist">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors font-geist" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4 font-geist">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors font-geist" href="#">About</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4 font-geist">Social</h4>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:twitter" width="16"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:github" width="16"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:discord" width="16"></iconify-icon></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600 font-geist">© 2024 AetherAI Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-neutral-600">
<a className="hover:text-neutral-400 font-geist" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400 font-geist" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}

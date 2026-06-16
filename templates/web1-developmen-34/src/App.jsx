import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function btnMove(e) {
            const btn = e.currentTarget;
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty('--x', `${x}px`);
            btn.style.setProperty('--y', `${y}px`);
        }
    


        (function () {
            const style = document.createElement("style");
            style.textContent = `
                .animate-on-scroll { animation-play-state: paused !important; }
                .animate-on-scroll.animate { animation-play-state: running !important; }
            `;
            document.head.appendChild(style);

            const once = true;

            if (!window.__inViewIO) {
                window.__inViewIO = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("animate");
                            if (once) window.__inViewIO.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            }

            window.initInViewAnimations = function (selector = ".animate-on-scroll") {
                document.querySelectorAll(selector).forEach((el) => {
                    window.__inViewIO.observe(el);
                });
            };

            document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none">
<iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%"></iframe>

<div className="absolute inset-0 bg-gradient-to-b from-[#030304]/80 via-transparent to-[#030304]"></div>
</div>

<nav className="fixed w-full z-50 top-0 transition-all duration-300 border-b border-white/5 bg-[#030304]/60 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_15px_-3px_rgba(79,70,229,0.5)]">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">Subnet Labs</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#customers">Customers</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-slate-300 hover:text-white transition hidden sm:block" href="#">Log in</a>
<a className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/10 transition-all" href="#contact">
                    Book Call
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">

<div className="animate-on-scroll flex items-center justify-center mb-8">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider font-medium border border-blue-500/20 rounded-full px-3 py-1.5 text-blue-300 bg-blue-500/5 shadow-[0_0_10px_-4px_#3b82f6]">
<iconify-icon className="text-blue-400" icon="solar:rocket-linear" width="14"></iconify-icon>
                    Ship Faster with Subnet
                </span>
</div>

<div className="animate-on-scroll delay-100 max-w-4xl mx-auto">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-2 text-balance">
                    Architecting the
                </h1>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-6">
<span className="italic font-serif pr-2 text-blue-400">Future</span> of Web
                </h1>
</div>

<p className="animate-on-scroll delay-200 mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                We build high-performance, scalable digital infrastructure for ambitious brands. Transform your vision into shipping code.
            </p>

<div className="animate-on-scroll delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">

<button className="group z-10 flex gap-2 overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_70px_-12px_#3b82f6] active:scale-[0.98] text-base font-medium text-white bg-black h-12 ring-white/10 ring-1 rounded-full px-8 relative shadow-[0_0_50px_-12px_#3b82f6] items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_50%)] mix-blend-overlay"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.2),transparent_50%)] mix-blend-overlay"></div>
<div className="transition-all duration-300 group-hover:border-white/70 group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.7)] border-white/50 border rounded-full absolute top-0 right-0 bottom-0 left-0 shadow-[inset_0_0_15px_rgba(255,255,255,0.5)]"></div>
<span className="relative z-10 flex items-center gap-2 drop-shadow-md leading-none">
                        Start Project
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>

<div className="relative inline-block group">
<button className="relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border-white/10 border rounded-full px-8 h-12 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<span className="relative z-10 inline-flex items-center gap-2 font-medium text-base">
                            View Work
                            <iconify-icon icon="solar:gallery-wide-linear" width="18"></iconify-icon>
</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
</button>
</div>
</div>

<div className="mt-20 pt-10 border-t border-white/5 animate-on-scroll delay-300">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">Trusted by innovators at</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold tracking-tighter text-white">VERCEL</span>
<span className="text-lg font-bold tracking-tighter text-white">STRIPE</span>
<span className="text-lg font-bold tracking-tighter text-white">LINEAR</span>
<span className="text-lg font-bold tracking-tighter text-white">RAYCAST</span>
<span className="text-lg font-bold tracking-tighter text-white">ACME</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Engineered for <span className="text-blue-400">Velocity</span>.</h2>
<p className="text-slate-400 text-lg font-light">Our development stack provides the foundation for rapid scaling without compromising on security or user experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="animate-on-scroll group glass-panel rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between hover:border-blue-500/30 transition-colors duration-500">
<div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>
<div>
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-4 text-blue-400">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Instant Load Times</h3>
<p className="text-sm text-slate-400 leading-relaxed">Optimized rendering and edge caching for sub-100ms interactions globally.</p>
</div>
<div className="w-full bg-white/5 rounded-lg h-24 mt-4 border border-white/10 relative overflow-hidden flex items-end px-4 pb-2 gap-1">

<div className="w-1/4 bg-blue-500/40 h-[40%] rounded-t-sm"></div>
<div className="w-1/4 bg-blue-500/60 h-[60%] rounded-t-sm"></div>
<div className="w-1/4 bg-blue-500/80 h-[85%] rounded-t-sm"></div>
<div className="w-1/4 bg-blue-500 h-[30%] rounded-t-sm animate-pulse"></div>
</div>
</div>

<div className="animate-on-scroll delay-100 md:col-span-2 group glass-panel rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between hover:border-indigo-500/30 transition-colors duration-500">
<div className="flex justify-between items-start z-10">
<div>
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-4 text-indigo-400">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Enterprise-Grade Security</h3>
<p className="text-sm text-slate-400 max-w-md">SOC2 compliant infrastructure with automated threat detection and encrypted data at rest and in transit.</p>
</div>
</div>

<div className="absolute right-[-20px] bottom-[-20px] opacity-30 group-hover:opacity-50 transition-opacity">
<iconify-icon className="text-indigo-500" icon="solar:lock-password-unlocked-linear" width="200"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-4 mt-8 z-10">
<div className="bg-black/40 border border-white/10 rounded-lg p-4 flex items-center gap-3">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-slate-300">DDOS Protection</span>
</div>
<div className="bg-black/40 border border-white/10 rounded-lg p-4 flex items-center gap-3">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-slate-300">End-to-End Encryption</span>
</div>
</div>
</div>

<div className="animate-on-scroll md:col-span-2 group glass-panel rounded-2xl p-8 relative overflow-hidden flex items-center justify-between hover:border-purple-500/30 transition-colors duration-500">
<div className="z-10 max-w-sm">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-4 text-purple-400">
<iconify-icon icon="solar:globe-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Global Infrastructure</h3>
<p className="text-sm text-slate-400">Deploy once, scale everywhere. Our edge network spans 35 regions ensuring your app is close to your users.</p>
</div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

<div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block">
<div className="relative w-40 h-40">
<div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-dashed border-white/20 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs font-mono text-purple-400">99.99%</span>
</div>
</div>
</div>
</div>

<div className="animate-on-scroll delay-100 group glass-panel rounded-2xl p-8 relative overflow-hidden hover:border-cyan-500/30 transition-colors duration-500">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-4 text-cyan-400">
<iconify-icon icon="solar:code-scan-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Modern DX</h3>
<p className="text-sm text-slate-400">Typed APIs, automated CI/CD pipelines, and preview environments for every PR.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#050505]" id="customers">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 animate-on-scroll">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">Loved by <span className="text-blue-400">Founders</span></h2>
<p className="text-slate-400 text-lg">Don't just take our word for it.</p>
</div>
<div className="mt-4 md:mt-0">
<button className="text-sm font-medium text-white flex items-center gap-2 hover:text-blue-400 transition">
                        Read all stories
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="animate-on-scroll glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Subnet Labs completely overhauled our infrastructure. We saw a 300% increase in load speeds and our conversion rate doubled within a month."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="text-sm font-medium text-white">Alex Chen</div>
<div className="text-xs text-slate-500">CTO at Vertex</div>
</div>
</div>
</div>

<div className="animate-on-scroll delay-100 glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"The attention to detail is unmatched. It feels like they are part of our core team rather than an agency. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="text-sm font-medium text-white">Sarah Miller</div>
<div className="text-xs text-slate-500">Founder, LinearScale</div>
</div>
</div>
</div>

<div className="animate-on-scroll delay-200 glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"We needed a complex dashboard built in weeks, not months. Subnet delivered ahead of schedule with zero technical debt."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<div className="text-sm font-medium text-white">David Ross</div>
<div className="text-xs text-slate-500">Product Lead</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Simple, transparent pricing</h2>
<p className="text-slate-400 mb-8">Choose the plan that fits your growth stage.</p>

<div className="flex items-center justify-center gap-4">
<span className="text-sm text-slate-300">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 border border-slate-700"></div>
</label>
<span className="text-sm text-white font-medium">Yearly <span className="text-xs text-blue-400 ml-1">(-20%)</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="animate-on-scroll p-8 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-white/10 transition-all flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-sm text-slate-500 mt-1">For MVP and prototypes</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white">$2,500</span>
<span className="text-slate-500 text-sm">/project</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Single Page App
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> CMS Integration
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Basic SEO Setup
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Get Started</button>
</div>

<div className="animate-on-scroll delay-100 p-8 rounded-2xl border border-blue-500/30 bg-[#0A0A0A] relative shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] flex flex-col scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full border border-blue-400">Most Popular</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Growth</h3>
<p className="text-sm text-slate-500 mt-1">For scaling businesses</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white">$5,000</span>
<span className="text-slate-500 text-sm">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Full Stack Development
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Dedicated Product Manager
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Advanced Analytics
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 24/7 Priority Support
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">Start Free Pilot</button>
</div>

<div className="animate-on-scroll delay-200 p-8 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-white/10 transition-all flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Enterprise</h3>
<p className="text-sm text-slate-500 mt-1">For large organizations</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white">Custom</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Custom Infrastructure
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> SLA Guarantees
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Security Audits
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t border-white/5 bg-[#030304] relative z-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="inline-flex items-center gap-2 mb-6" href="#">
<span className="text-base font-semibold text-white tracking-tight">Subnet Labs</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Building the digital foundation for the world's most ambitious companies.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-blue-400 transition" href="#">Features</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Integrations</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Pricing</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-blue-400 transition" href="#">About</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Blog</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Careers</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Stay Updated</h4>
<p className="text-xs text-slate-500 mb-4">Get the latest updates on web performance.</p>
<form className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 flex-1 transition-colors" placeholder="Enter email" type="email"/>
<button className="bg-white/10 hover:bg-white/20 text-white rounded-lg px-3 py-2 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600">© 2025 Subnet Labs Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>





    </>
  );
}

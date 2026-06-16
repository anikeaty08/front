import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#FFFFFF',
accent: '#000000', /* Stark black accent for clean look */
secondary: '#2563EB', /* Blue for subtle highlights */
light: '#FAFAFA',
text: '#18181B', /* Zinc 900 */
muted: '#71717A', /* Zinc 500 */
border: '#E4E4E7' /* Zinc 200 */
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'fade-up': 'fadeUp 0.8s ease-out forwards',
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b bg-white/80 backdrop-blur-md border-brand-border">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<div className="w-6 h-6 border grid grid-cols-2 grid-rows-2 border-black">
<div className="bg-black"></div>
<div className="border-l border-b border-black/20"></div>
<div className="border-t border-r border-black/20"></div>
<div className="bg-blue-600"></div>
</div>
<span className="font-display font-bold text-lg tracking-tight text-black">kōzō vc</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
<a className="transition-colors hover:text-black" href="#process">Process</a>
<a className="transition-colors hover:text-black" href="#portfolio">Portfolio</a>
<a className="transition-colors hover:text-black" href="#team">Team</a>
</nav>
<a className="text-xs font-mono border px-4 py-2 rounded transition-all uppercase tracking-wide border-brand-border text-brand-text hover:bg-black hover:text-white hover:border-black" href="#contact">
                Start Building
            </a>
</div>
</header>
<main>

<section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-white">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-brand-border rounded-full bg-zinc-50 animate-fade-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
<span className="text-xs font-mono text-zinc-600 uppercase tracking-wider">Accepting Founder Applications</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] animate-fade-up delay-100 text-black">
                    We don't just invest.<br/>
<span className="text-zinc-400">We build.</span>
</h1>
<p className="font-sans text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
                    kōzō vc is a venture studio that architects breakthrough AI companies from zero. We co-create with exceptional founders to structure the future.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
<a className="w-full sm:w-auto px-8 py-3 font-semibold text-sm rounded transition-all flex items-center justify-center gap-2 bg-black text-white hover:bg-zinc-800 shadow-lg shadow-zinc-200" href="#contact">
                        Build With Us <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3 border font-medium text-sm rounded transition-all border-zinc-200 text-zinc-600 hover:text-black hover:border-zinc-400 bg-white" href="#portfolio">
                        View Portfolio
                    </a>
</div>

<div className="mt-20 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up delay-500 border-zinc-100">
<div className="text-center group cursor-default">
<div className="font-display text-3xl font-bold text-black group-hover:text-blue-600 transition-colors">6</div>
<div className="text-xs text-brand-muted uppercase tracking-wider mt-1">Active Companies</div>
</div>
<div className="text-center group cursor-default">
<div className="font-display text-3xl font-bold text-black group-hover:text-blue-600 transition-colors">4<span className="text-lg text-zinc-400">wks</span></div>
<div className="text-xs text-brand-muted uppercase tracking-wider mt-1">Sprint to MVP</div>
</div>
<div className="text-center group cursor-default">
<div className="font-display text-3xl font-bold text-black group-hover:text-blue-600 transition-colors">Seed</div>
<div className="text-xs text-brand-muted uppercase tracking-wider mt-1">Capital &amp; Access</div>
</div>
<div className="text-center group cursor-default">
<div className="font-display text-3xl font-bold text-black group-hover:text-blue-600 transition-colors">Tech</div>
<div className="text-xs text-brand-muted uppercase tracking-wider mt-1">Co-Founder Role</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-black">The kōzō Difference</h2>
<p className="text-brand-muted max-w-xl">Traditional VCs wait for the pitch. We draft the blueprint and lay the foundation together.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 border transition-all duration-300 relative overflow-hidden bg-white border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity text-blue-600">
<i className="w-6 h-6" data-lucide="drafting-compass"></i>
</div>
<h3 className="font-display text-xl font-semibold mb-3 text-black">In-house Ideation</h3>
<p className="text-sm text-brand-muted leading-relaxed">
                            We identify asymmetric market opportunities utilizing proprietary data, then recruit exceptional founders to execute.
                        </p>
</div>

<div className="group p-8 border transition-all duration-300 relative overflow-hidden bg-white border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity text-blue-600">
<i className="w-6 h-6" data-lucide="hammer"></i>
</div>
<h3 className="font-display text-xl font-semibold mb-3 text-black">Hands-On Building</h3>
<p className="text-sm text-brand-muted leading-relaxed">
                            Not just advice. We provide code, design, legal structures, and first hires. We are your interim technical co-founders.
                        </p>
</div>

<div className="group p-8 border transition-all duration-300 relative overflow-hidden bg-white border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity text-blue-600">
<i className="w-6 h-6" data-lucide="scale"></i>
</div>
<h3 className="font-display text-xl font-semibold mb-3 text-black">Aligned Incentives</h3>
<p className="text-sm text-brand-muted leading-relaxed">
                            We take common stock, not preferred. Our incentives are perfectly aligned with founders for the long haul.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-black">Companies We're Building</h2>
<p className="text-brand-muted">From FinTech to Generative Media.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 text-xs font-mono border bg-black text-white border-black rounded cursor-pointer">All</span>
<span className="px-3 py-1 text-xs font-mono border text-zinc-500 rounded cursor-pointer transition-colors border-zinc-200 hover:border-black hover:text-black">FinTech</span>
<span className="px-3 py-1 text-xs font-mono border text-zinc-500 rounded cursor-pointer transition-colors border-zinc-200 hover:border-black hover:text-black">AI Agents</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group block bg-zinc-50 border hover:border-zinc-400 hover:bg-white transition-all p-8 relative overflow-hidden border-zinc-200" href="#">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg tracking-tighter bg-black text-white">B</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-zinc-200 text-zinc-700">Active</span>
</div>
<h3 className="font-display text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors text-black">blackswan.ml</h3>
<div className="text-xs font-mono text-brand-muted mb-4">AI Trading / FinTech</div>
<p className="text-sm mb-6 line-clamp-2 text-zinc-600">AI-powered crypto trading bots utilizing algorithmic strategies to outperform markets.</p>
<div className="flex items-center gap-2 text-xs font-mono border-t pt-4 text-zinc-500 border-zinc-200">
<i className="w-3 h-3 text-blue-600" data-lucide="trending-up"></i> Market Neutral Strategy
                        </div>
</a>

<a className="group block bg-zinc-50 border hover:border-zinc-400 hover:bg-white transition-all p-8 relative overflow-hidden border-zinc-200" href="#">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg tracking-tighter text-white">V</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-zinc-200 text-zinc-700">Active</span>
</div>
<h3 className="font-display text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors text-black">voomie.app</h3>
<div className="text-xs font-mono text-brand-muted mb-4">Voice AI / TTS</div>
<p className="text-sm mb-6 line-clamp-2 text-zinc-600">Hyper-realistic text-to-speech platform delivering emotive natural voice synthesis.</p>
<div className="flex items-center gap-2 text-xs font-mono border-t pt-4 text-zinc-500 border-zinc-200">
<i className="w-3 h-3 text-blue-600" data-lucide="mic"></i> &lt; 100ms Latency
                        </div>
</a>

<a className="group block bg-zinc-50 border hover:border-zinc-400 hover:bg-white transition-all p-8 relative overflow-hidden border-zinc-200" href="#">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 border rounded-full flex items-center justify-center font-mono text-xs border-zinc-300 text-zinc-400 bg-white">///</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-blue-50 text-blue-600">Building</span>
</div>
<h3 className="font-display text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors text-black">[ Stealth Mode ]</h3>
<div className="text-xs font-mono text-brand-muted mb-4">DevTools</div>
<p className="text-sm mb-6 line-clamp-2 text-zinc-600">Next-generation AI app builder. The Lovable/Bolt killer for full-stack engineering.</p>
<div className="flex items-center gap-2 text-xs font-mono border-t pt-4 text-zinc-500 border-zinc-200">
<i className="w-3 h-3 text-blue-600" data-lucide="code"></i> Gen-AI Coding
                        </div>
</a>

<a className="group block bg-zinc-50 border hover:border-zinc-400 hover:bg-white transition-all p-8 relative overflow-hidden border-zinc-200" href="#">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg tracking-tighter bg-indigo-600 text-white">b</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-zinc-200 text-zinc-700">Active</span>
</div>
<h3 className="font-display text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors text-black">bahu.ai</h3>
<div className="text-xs font-mono text-brand-muted mb-4">AI Agents</div>
<p className="text-sm mb-6 line-clamp-2 text-zinc-600">Orchestrator for autonomous AI agents capable of end-to-end business automation.</p>
<div className="flex items-center gap-2 text-xs font-mono border-t pt-4 text-zinc-500 border-zinc-200">
<i className="w-3 h-3 text-blue-600" data-lucide="bot"></i> Multi-Agent Ops
                        </div>
</a>

<a className="group block bg-zinc-50 border hover:border-zinc-400 hover:bg-white transition-all p-8 relative overflow-hidden border-zinc-200" href="#">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-lg tracking-tighter text-white">L</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-zinc-200 text-zinc-700">Active</span>
</div>
<h3 className="font-display text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors text-black">lumiernova.ai</h3>
<div className="text-xs font-mono text-brand-muted mb-4">AI Influencers</div>
<p className="text-sm mb-6 line-clamp-2 text-zinc-600">Network of hyper-realistic, AI-generated social media influencers and personas.</p>
<div className="flex items-center gap-2 text-xs font-mono border-t pt-4 text-zinc-500 border-zinc-200">
<i className="w-3 h-3 text-blue-600" data-lucide="users"></i> 5M+ Reach
                        </div>
</a>

<a className="group block bg-zinc-50 border hover:border-zinc-400 hover:bg-white transition-all p-8 relative overflow-hidden border-zinc-200" href="#">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg tracking-tighter bg-amber-500 text-white">C</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-zinc-200 text-zinc-700">Active</span>
</div>
<h3 className="font-display text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors text-black">buffet.club</h3>
<div className="text-xs font-mono text-brand-muted mb-4">Investment / FinTech</div>
<p className="text-sm mb-6 line-clamp-2 text-zinc-600">Boutique marketplace for curated passive investment instruments and high-yield assets.</p>
<div className="flex items-center gap-2 text-xs font-mono border-t pt-4 text-zinc-500 border-zinc-200">
<i className="w-3 h-3 text-blue-600" data-lucide="pie-chart"></i> Yield Optimization
                        </div>
</a>
</div>
</div>
</section>

<section className="py-24 border-t relative bg-zinc-50 border-zinc-200" id="process">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
<div className="sticky top-24 self-start">
<h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-black">Systematic Construction</h2>
<p className="text-brand-muted text-lg leading-relaxed mb-8">
                        We don't rely on luck. We use a structured, 5-phase engineering process to de-risk startups before they even launch.
                    </p>
<a className="inline-flex items-center gap-2 text-black font-medium transition-colors hover:text-blue-600 group" href="#contact">
                        Apply to build in Phase 3 <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="relative border-l pl-8 md:pl-12 space-y-12 border-zinc-200">

<div className="relative">
<span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-2 border-zinc-50 z-10 bg-black"></span>
<div className="text-xs font-mono text-brand-muted mb-1">PHASE 01 — ONGOING</div>
<h3 className="text-xl font-bold mb-2 text-black">Ideation</h3>
<p className="text-sm text-zinc-600">We analyze 100+ AI market opportunities to find the 1 that matters.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-2 border-zinc-50 z-10 bg-zinc-400"></span>
<div className="text-xs font-mono text-brand-muted mb-1">PHASE 02 — 4-8 WEEKS</div>
<h3 className="text-xl font-bold mb-2 text-black">Validation</h3>
<p className="text-sm text-zinc-600">Rapid prototyping, customer interviews, and "Wizard of Oz" experiments to prove demand.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-2 border-zinc-50 bg-blue-600 z-10 shadow-[0_0_15px_rgba(37,99,235,0.3)]"></span>
<div className="text-xs font-mono text-blue-600 mb-1">PHASE 03 — 2-4 WEEKS</div>
<h3 className="text-xl font-bold mb-2 text-black">Formation</h3>
<p className="text-sm text-zinc-600">We recruit the founder, incorporate the entity, and deploy initial capital.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-2 border-zinc-50 z-10 bg-zinc-200"></span>
<div className="text-xs font-mono text-brand-muted mb-1">PHASE 04 — 3-6 MONTHS</div>
<h3 className="text-xl font-bold mb-2 text-black">Building</h3>
<p className="text-sm text-zinc-600">Sprint to MVP. Our internal team handles dev, design, and ops while you focus on product.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-2 border-zinc-50 z-10 bg-zinc-200"></span>
<div className="text-xs font-mono text-brand-muted mb-1">PHASE 05 — 6-12 MONTHS</div>
<h3 className="text-xl font-bold mb-2 text-black">Scaling</h3>
<p className="text-sm text-zinc-600">Growth mechanics, team expansion, and preparation for Series A external funding.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="font-display text-3xl font-bold text-black">The Builders</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group">
<div className="w-full aspect-square mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all bg-zinc-100 border border-zinc-100">

<div className="w-full h-full flex items-end p-4">
<i className="w-8 h-8 text-zinc-300" data-lucide="user"></i>
</div>
</div>
<h3 className="font-bold text-black">Kenji Sato</h3>
<p className="text-xs font-mono text-brand-muted uppercase">Managing Partner</p>
</div>

<div className="group">
<div className="w-full aspect-square mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all bg-zinc-100 border border-zinc-100">
<div className="w-full h-full flex items-end p-4">
<i className="w-8 h-8 text-zinc-300" data-lucide="user"></i>
</div>
</div>
<h3 className="font-bold text-black">Sarah Chen</h3>
<p className="text-xs font-mono text-brand-muted uppercase">Head of Product</p>
</div>

<div className="group">
<div className="w-full aspect-square mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all bg-zinc-100 border border-zinc-100">
<div className="w-full h-full flex items-end p-4">
<i className="w-8 h-8 text-zinc-300" data-lucide="user"></i>
</div>
</div>
<h3 className="font-bold text-black">David Ross</h3>
<p className="text-xs font-mono text-brand-muted uppercase">Head of Engineering</p>
</div>

<div className="group">
<div className="w-full aspect-square mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all bg-zinc-100 border border-zinc-100">
<div className="w-full h-full flex items-end p-4">
<i className="w-8 h-8 text-zinc-300" data-lucide="user"></i>
</div>
</div>
<h3 className="font-bold text-black">Elena Vo</h3>
<p className="text-xs font-mono text-brand-muted uppercase">Growth Lead</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white border-t border-zinc-200" id="contact">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 bg-white border p-8 md:p-12 shadow-2xl shadow-zinc-200/50 border-zinc-200">

<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<h2 className="font-display text-4xl font-bold mb-6 text-black">Let's Build Together</h2>
<div className="space-y-8">
<div>
<h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-black"><i className="w-4 h-4 text-blue-600" data-lucide="sparkles"></i> For Founders</h3>
<p className="text-sm text-brand-muted">Have a bold idea or deep domain expertise? We provide the capital, team, and structure to help you execute.</p>
</div>
<div>
<h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-black"><i className="w-4 h-4 text-blue-600" data-lucide="briefcase"></i> For Investors</h3>
<p className="text-sm text-brand-muted">Interested in the venture studio asset class? Connect with us to learn about our fund structure.</p>
</div>
</div>
</div>
<div className="mt-12">
<a className="text-sm font-mono transition-colors flex items-center gap-2 text-zinc-500 hover:text-black" href="mailto:hello@kozo.vc">
<i className="w-4 h-4" data-lucide="mail"></i> hello@kozo.vc
                            </a>
</div>
</div>

<div className="lg:col-span-7">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-mono text-brand-muted uppercase">Full Name</label>
<input className="w-full py-3 border-b focus:border-black transition-colors placeholder-zinc-300 text-black border-zinc-200" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-mono text-brand-muted uppercase">Email</label>
<input className="w-full py-3 border-b focus:border-black transition-colors placeholder-zinc-300 text-black border-zinc-200" placeholder="jane@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-mono text-brand-muted uppercase">LinkedIn URL</label>
<input className="w-full py-3 border-b focus:border-black transition-colors placeholder-zinc-300 text-black border-zinc-200" placeholder="linkedin.com/in/jane" required="" type="url"/>
</div>
<div className="space-y-2">
<label className="text-xs font-mono text-brand-muted uppercase">I am a...</label>
<div className="relative">
<select className="w-full py-3 bg-white border-b focus:border-black transition-colors appearance-none cursor-pointer text-black border-zinc-200">
<option>Founder with an Idea</option>
<option>Founder looking for an Idea</option>
<option>Investor</option>
<option>Engineer / Designer</option>
</select>
<i className="absolute right-0 top-3 w-4 h-4 pointer-events-none text-zinc-400" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-mono text-brand-muted uppercase">Tell us about yourself</label>
<textarea className="w-full py-3 border-b focus:border-black transition-colors placeholder-zinc-300 resize-none text-black border-zinc-200" placeholder="Brief background and what you want to build..." required="" rows="3"></textarea>
</div>
<div className="pt-4">
<button className="w-full py-4 font-semibold text-sm hover:bg-zinc-800 transition-all bg-black text-white shadow-lg shadow-zinc-200" type="submit">
                                    Submit Application
                                </button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t bg-zinc-50 py-12 border-zinc-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-4">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 border grid grid-cols-2 grid-rows-2 border-black">
<div className="bg-black"></div>
<div className="border-l border-b border-black/20"></div>
<div className="border-t border-r border-black/20"></div>
<div className="bg-blue-600"></div>
</div>
<span className="font-display font-bold text-lg tracking-tight text-black">kōzō vc</span>
</a>
<p className="text-xs text-brand-muted">© 2026 kōzō vc. All rights reserved.</p>
</div>
<div className="flex gap-6 text-sm text-brand-muted">
<a className="transition-colors hover:text-black" href="#">Twitter</a>
<a className="transition-colors hover:text-black" href="#">LinkedIn</a>
<a className="transition-colors hover:text-black" href="#">Privacy</a>
</div>
</div>
</footer>



    </>
  );
}

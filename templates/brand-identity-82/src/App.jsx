import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f2023',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg flex items-center gap-2 tracking-tight" href="#">
<span className="iconify text-zinc-100" data-icon="lucide:pen-tool" data-width="20"></span>
<span><span className="font-semibold">bold</span><span className="italic font-light">Italics</span></span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors duration-200" href="#services">Expertise</a>
<a className="text-sm font-medium hover:text-white transition-colors duration-200" href="#work">Work</a>
<a className="text-sm font-medium hover:text-white transition-colors duration-200" href="#pricing">Packages</a>
<a className="text-sm font-medium hover:text-white transition-colors duration-200" href="#testimonials">Stories</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all" href="#contact">
                Start Project
                <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Accepting new clients</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 max-w-5xl mx-auto leading-[1.1]">
                We forge distinctive <br/> <span className="text-gradient">brand identities.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Experts in visual storytelling, strategic design, and creative direction. We build memorable, aesthetic, and timeless identities for modern companies.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3.5 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Book Discovery Call
                </a>
<a className="w-full md:w-auto px-8 py-3.5 bg-zinc-900 text-white border border-zinc-800 font-medium rounded-full hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" href="#work">
                    View Portfolio
                </a>
</div>
<div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-zinc-400">
<span className="iconify" data-icon="lucide:pen-tool" data-width="20"></span>
<span className="font-medium">Identity</span>
</div>
<div className="flex items-center gap-2 text-zinc-400">
<span className="iconify" data-icon="lucide:palette" data-width="20"></span>
<span className="font-medium">Design</span>
</div>
<div className="flex items-center gap-2 text-zinc-400">
<span className="iconify" data-icon="lucide:type" data-width="20"></span>
<span className="font-medium">Typography</span>
</div>
<div className="flex items-center gap-2 text-zinc-400">
<span className="iconify" data-icon="lucide:compass" data-width="20"></span>
<span className="font-medium">Strategy</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-zinc-950 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="sticky top-32">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Defined by character. <br/>Built for impact.</h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        We don't just design logos; we architect entire visual systems. From the psychology behind your color palette to the weight of your typography, every detail is engineered to communicate your brand's essence.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2" data-width="20"></span>
                            Comprehensive Brand Guidelines
                        </li>
<li className="flex items-center gap-3 text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2" data-width="20"></span>
                            Visual Identity Systems
                        </li>
<li className="flex items-center gap-3 text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2" data-width="20"></span>
                            Art Direction &amp; Illustration
                        </li>
</ul>
</div>
<div className="grid gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:shapes" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Brand Identity</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                            Crafting the visual soul of your business. We deliver logos, color palettes, and typography that resonate with your target audience.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:layout" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Digital Design</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                            Translating your identity into the digital realm. UI kits, social media assets, and web layouts that maintain brand consistency.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:book-open" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Brand Strategy</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                            Beyond aesthetics. We define your voice, tone, positioning, and narrative to ensure your brand stands for something meaningful.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Selected Work</h2>
<p className="text-zinc-400">Identities crafted for ambitious visionaries.</p>
</div>
<a className="text-white text-sm font-medium flex items-center gap-2 group" href="#">
                    View all projects 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-xl bg-zinc-900 border border-white/5 overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:opacity-100 opacity-50 transition-opacity"></div>
<div className="absolute inset-x-8 top-12 bottom-0 bg-zinc-950/80 rounded-t-lg border-t border-l border-r border-white/10 shadow-2xl transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500 flex items-center justify-center">
<span className="text-zinc-700 font-mono text-xs uppercase tracking-widest">Logo &amp; System</span>
</div>
</div>
<h3 className="text-white font-medium mb-1">Lumina</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Rebrand • Strategy</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-xl bg-zinc-900 border border-white/5 overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 group-hover:opacity-100 opacity-50 transition-opacity"></div>
<div className="absolute inset-x-8 top-12 bottom-0 bg-zinc-950/80 rounded-t-lg border-t border-l border-r border-white/10 shadow-2xl transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500 flex items-center justify-center">
<span className="text-zinc-700 font-mono text-xs uppercase tracking-widest">Visual Guidelines</span>
</div>
</div>
<h3 className="text-white font-medium mb-1">Ventura</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Brand System • UI</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-xl bg-zinc-900 border border-white/5 overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-rose-500/10 group-hover:opacity-100 opacity-50 transition-opacity"></div>
<div className="absolute inset-x-8 top-12 bottom-0 bg-zinc-950/80 rounded-t-lg border-t border-l border-r border-white/10 shadow-2xl transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500 flex items-center justify-center">
<span className="text-zinc-700 font-mono text-xs uppercase tracking-widest">Packaging</span>
</div>
</div>
<h3 className="text-white font-medium mb-1">Apex</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Print • Art Direction</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-900/20" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Design packages.</h2>
<p className="text-zinc-400">Clear deliverables for every stage of your brand's growth.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-950 flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Identity Starter</h3>
<p className="text-sm text-zinc-500 mt-1">For startups needing a face.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">$3,500</span>
<span className="text-zinc-500 text-sm">/ project</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Primary Logo Design
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Color Palette &amp; Typography
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Basic Brand Sheet
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            2 Rounds of Revisions
                        </li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors text-center" href="#contact">Get Started</a>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/30 bg-zinc-900/40 relative flex flex-col shadow-[0_0_40px_-10px_rgba(99,102,241,0.1)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">Most Popular</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Brand Suite</h3>
<p className="text-sm text-zinc-500 mt-1">Complete visual ecosystem.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">$6,800</span>
<span className="text-zinc-500 text-sm">/ start</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Logo System (Primary + Alt)
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Full Brand Guidelines PDF
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Social Media Kit
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Stationery Design
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Unlimited Revisions
                        </li>
</ul>
<a className="w-full py-2.5 rounded-lg bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors text-center" href="#contact">Get Started</a>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-950 flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Strategic</h3>
<p className="text-sm text-zinc-500 mt-1">Rebranding &amp; Art Direction.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">Custom</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Brand Strategy Workshop
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Naming &amp; Verbal Identity
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Website Design (UI/UX)
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-600 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Ongoing Art Direction
                        </li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors text-center" href="#contact">Contact Us</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-16 text-center">Trusted by founders.</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
</div>
<blockquote className="text-zinc-300 text-lg mb-6 leading-relaxed">"boldItalics completely reinvented how we are perceived in the market. The new visual identity captures our essence perfectly. It's sophisticated, modern, and distinct."</blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-medium text-sm">JD</div>
<div>
<div className="text-white text-sm font-medium">James Dalton</div>
<div className="text-zinc-500 text-xs">CEO, Dalton Goods</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
</div>
<blockquote className="text-zinc-300 text-lg mb-6 leading-relaxed">"The rebranding process was seamless. They didn't just give us a logo; they gave us a complete design system that makes creating consistent marketing materials effortless."</blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-medium text-sm">AS</div>
<div>
<div className="text-white text-sm font-medium">Anna Silva</div>
<div className="text-zinc-500 text-xs">CMO, TechFlow</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-24 border-t border-white/5 bg-zinc-950 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-t from-zinc-800/20 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
<div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Let's build a brand <br/>that lasts.</h2>
<p className="text-zinc-400 text-lg mb-8 max-w-md">
                        Ready to elevate your visual presence? Send us a message about your vision and we'll help you bring it to life.
                    </p>
<div className="flex flex-col gap-4 text-zinc-400">
<a className="flex items-center gap-3 hover:text-white transition-colors" href="mailto:hello@bolditalics.studio">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
                            hello@bolditalics.studio
                        </a>
<div className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
                            New York, NY
                        </div>
</div>
<div className="flex gap-4 mt-10">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<span className="iconify" data-icon="lucide:dribbble" data-width="18"></span>
</a>
</div>
</div>
<div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="first-name">First Name</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-700" id="first-name" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="last-name">Last Name</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-700" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="email">Email</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-700" id="email" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="interest">Project Type</label>
<div className="relative">
<select className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer" id="interest">
<option>Brand Identity</option>
<option>Rebranding</option>
<option>Web Design</option>
<option>Strategy</option>
</select>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="message">Message</label>
<textarea className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-700 resize-none" id="message" placeholder="Tell us about your brand..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-zinc-950 font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors mt-2" type="button">
                            Send Request
                        </button>
</form>
</div>
</div>
<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
<p>© 2023 boldItalics Studio. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

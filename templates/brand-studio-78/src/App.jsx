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
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
dark: '#0F0F1A',
surface: '#181826',
accent: '#6B46C1',
glow: '#FF6B6B'
}
},
backgroundImage: {
'iridescent': 'linear-gradient(135deg, #6B46C1 0%, #FF6B6B 100%)',
'iridescent-subtle': 'linear-gradient(135deg, rgba(107, 70, 193, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-serif text-white tracking-tight flex items-center gap-2" href="#">
<div className="w-3 h-3 rounded-full bg-iridescent"></div>
                Montana.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-white transition-colors" href="#work">Projects</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="group relative px-6 py-2.5 rounded-full overflow-hidden bg-white text-brand-dark font-medium text-sm transition-all hover:pr-8" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                    Let's Talk
                    <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 bg-iridescent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</a>
</div>
</nav>

<header className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-purple-300 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Accepting new projects for Q2 2025
                </div>
<h1 className="text-5xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-8">
                    Crafting brands that <br/>
<span className="text-gradient italic pr-2">resonate deeply</span> &amp; convert.
                </h1>
<p className="text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-light">
                    We help visionary founders build bold, meaningful identities. Bridging the gap between strategic thinking and emotive design to create market-leading brands.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-20">
<a className="px-8 py-4 bg-white text-brand-dark rounded-lg font-medium hover:bg-slate-100 transition-colors text-center" href="#contact">
                        Start Your Brand Journey
                    </a>
<a className="px-8 py-4 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-colors text-center backdrop-blur-sm" href="#work">
                        View Case Studies
                    </a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-8">
<div className="space-y-2">
<span className="text-xs text-slate-500 uppercase tracking-widest">01</span>
<h3 className="text-white font-medium">Brand Strategy</h3>
</div>
<div className="space-y-2">
<span className="text-xs text-slate-500 uppercase tracking-widest">02</span>
<h3 className="text-white font-medium">Identity Design</h3>
</div>
<div className="space-y-2">
<span className="text-xs text-slate-500 uppercase tracking-widest">03</span>
<h3 className="text-white font-medium">Packaging</h3>
</div>
<div className="space-y-2">
<span className="text-xs text-slate-500 uppercase tracking-widest">04</span>
<h3 className="text-white font-medium">Creative Direction</h3>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 py-8 bg-brand-surface/30 backdrop-blur-sm overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 gap-8 overflow-x-auto no-scrollbar">
<i className="w-8 h-8 shrink-0" data-lucide="hexagon"></i>
<i className="w-8 h-8 shrink-0" data-lucide="triangle"></i>
<i className="w-8 h-8 shrink-0" data-lucide="circle"></i>
<i className="w-8 h-8 shrink-0" data-lucide="square"></i>
<i className="w-8 h-8 shrink-0" data-lucide="aperture"></i>
<i className="w-8 h-8 shrink-0" data-lucide="codesandbox"></i>
</div>
</section>

<section className="py-24 lg:py-32 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
<div>
<h2 className="text-sm text-purple-400 uppercase tracking-widest mb-3 font-medium">Philosophy</h2>
<h3 className="text-3xl lg:text-4xl font-serif text-white tracking-tight">Shaping experiences that <br/>make life simpler.</h3>
</div>
<p className="max-w-md text-slate-400 leading-relaxed">
                    We strip away the unnecessary to focus on what matters. Design isn't just decoration; it's a tool for clarity and connection.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:border-purple-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h4 className="text-xl text-white font-medium mb-3">Intentional Speed</h4>
<p className="text-slate-400 leading-relaxed text-sm">We move fast without breaking things. Iterative cycles that get you to market sooner with higher precision.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-pink-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h4 className="text-xl text-white font-medium mb-3">Radical Collaboration</h4>
<p className="text-slate-400 leading-relaxed text-sm">We don't work for you; we work with you. Deep dives into your world to extract the authentic story.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-orange-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h4 className="text-xl text-white font-medium mb-3">Built to Scale</h4>
<p className="text-slate-400 leading-relaxed text-sm">Systems, not just pages. We build robust design languages that grow effortlessly with your company.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 bg-brand-surface/20" id="work">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl lg:text-5xl font-serif text-white mb-20 tracking-tight">Selected Work</h2>

<div className="group relative grid lg:grid-cols-2 gap-12 items-center mb-32">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Abstract fluid art" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4 text-sm text-purple-400">
<span>Fintech</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span>Rebranding</span>
</div>
<h3 className="text-3xl lg:text-4xl font-serif text-white">Nova Scene</h3>
<p className="text-slate-400 text-lg leading-relaxed">
                        Redefining the visual language of modern banking with iridescent hues and flowing shapes. A complete identity overhaul for a Series B startup.
                    </p>
<a className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors mt-4" href="#">
                        View Case Study <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="group relative grid lg:grid-cols-2 gap-12 items-center mb-32">
<div className="lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-orange-900/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Modern packaging" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&amp;w=2487&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:order-1 space-y-6">
<div className="flex items-center gap-4 text-sm text-orange-400">
<span>Lifestyle</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span>Packaging</span>
</div>
<h3 className="text-3xl lg:text-4xl font-serif text-white">Star Blox</h3>
<p className="text-slate-400 text-lg leading-relaxed">
                        Packaging design that pops on the shelf. We utilized sustainable materials mixed with bold, minimalist typography to create a premium unboxing experience.
                    </p>
<a className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors mt-4" href="#">
                        View Case Study <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="group relative grid lg:grid-cols-2 gap-12 items-center">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="3D Interface" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4 text-sm text-blue-400">
<span>SaaS</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span>Web Design</span>
</div>
<h3 className="text-3xl lg:text-4xl font-serif text-white">Dream Area</h3>
<p className="text-slate-400 text-lg leading-relaxed">
                        A high-conversion landing page framework for a property tech giant. Focusing on emotional connection through glassmorphism and deep spatial layouts.
                    </p>
<a className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors mt-4" href="#">
                        View Case Study <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0F0F1A]" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-serif text-white mb-4">How I Can Help You</h2>
<p className="text-slate-400">From strategy to visuals, I offer tailored services to grow your brand with clarity and impact.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 border-t border-white/10 hover:border-purple-500 transition-colors duration-300">
<i className="w-8 h-8 text-purple-400 mb-6" data-lucide="pen-tool"></i>
<h3 className="text-xl text-white font-medium mb-4">Brand Identity Design</h3>
<p className="text-slate-400 text-sm leading-relaxed">Logos, typography, color systems, and complete visual direction that tells your story at a glance.</p>
</div>
<div className="p-8 border-t border-white/10 hover:border-pink-500 transition-colors duration-300">
<i className="w-8 h-8 text-pink-400 mb-6" data-lucide="compass"></i>
<h3 className="text-xl text-white font-medium mb-4">Brand Strategy</h3>
<p className="text-slate-400 text-sm leading-relaxed">Positioning, messaging, and creative direction aligned with your business goals to ensure market fit.</p>
</div>
<div className="p-8 border-t border-white/10 hover:border-orange-500 transition-colors duration-300">
<i className="w-8 h-8 text-orange-400 mb-6" data-lucide="monitor"></i>
<h3 className="text-xl text-white font-medium mb-4">Creative Consulting</h3>
<p className="text-slate-400 text-sm leading-relaxed">Ongoing design support, art direction, and guidance for your internal product and marketing teams.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="process">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-serif text-white mb-16">The Process</h2>
<div className="space-y-8">

<div className="flex gap-6 md:gap-12 group">
<div className="flex flex-col items-center">
<span className="text-2xl font-serif text-slate-600 group-hover:text-white transition-colors">01</span>
<div className="w-px h-full bg-white/10 my-4 group-hover:bg-purple-500 transition-colors"></div>
</div>
<div className="pb-12 border-b border-white/5 w-full">
<h3 className="text-xl text-white font-medium mb-2">Discovery</h3>
<p className="text-slate-400 text-sm">Understanding your vision, audience, and goals through deep-dive workshops.</p>
</div>
</div>

<div className="flex gap-6 md:gap-12 group">
<div className="flex flex-col items-center">
<span className="text-2xl font-serif text-slate-600 group-hover:text-white transition-colors">02</span>
<div className="w-px h-full bg-white/10 my-4 group-hover:bg-pink-500 transition-colors"></div>
</div>
<div className="pb-12 border-b border-white/5 w-full">
<h3 className="text-xl text-white font-medium mb-2">Strategy</h3>
<p className="text-slate-400 text-sm">Defining your unique positioning and messaging architecture.</p>
</div>
</div>

<div className="flex gap-6 md:gap-12 group">
<div className="flex flex-col items-center">
<span className="text-2xl font-serif text-slate-600 group-hover:text-white transition-colors">03</span>
<div className="w-px h-full bg-white/10 my-4 group-hover:bg-orange-500 transition-colors"></div>
</div>
<div className="pb-12 border-b border-white/5 w-full">
<h3 className="text-xl text-white font-medium mb-2">Design</h3>
<p className="text-slate-400 text-sm">Creating your visual identity system, touchpoints, and digital assets.</p>
</div>
</div>

<div className="flex gap-6 md:gap-12 group">
<div className="flex flex-col items-center">
<span className="text-2xl font-serif text-slate-600 group-hover:text-white transition-colors">04</span>
<div className="w-px h-full bg-white/10 my-4 group-hover:bg-green-500 transition-colors"></div>
</div>
<div className="pb-12 border-b border-white/5 w-full">
<h3 className="text-xl text-white font-medium mb-2">Delivery</h3>
<p className="text-slate-400 text-sm">Providing all assets, brand guidelines, and support for launch.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-surface/20" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="text-center text-3xl lg:text-4xl font-serif text-white mb-4">Simple Packages</h2>
<p className="text-center text-slate-400 mb-16">Transparent pricing for every stage of growth.</p>
<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

<div className="p-8 rounded-2xl border border-white/10 bg-[#0F0F1A] hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium mb-2">Starter</h3>
<p className="text-3xl font-serif text-white mb-6">$2,900</p>
<p className="text-xs text-slate-500 mb-8 uppercase tracking-wider">Features</p>
<ul className="space-y-4 text-sm text-slate-300 mb-8">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> Logo Design</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> Color Palette &amp; Typography</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> Basic Brand Guidelines</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> 2 Revision Rounds</li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 text-center text-white text-sm hover:bg-white hover:text-black transition-colors" href="#contact">Get Started</a>
</div>

<div className="relative p-8 rounded-2xl border border-purple-500/50 bg-[#13131F]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">Most Popular</div>
<h3 className="text-white font-medium mb-2">Growth</h3>
<p className="text-3xl font-serif text-white mb-6">$5,800</p>
<p className="text-xs text-purple-400 mb-8 uppercase tracking-wider">Everything in Starter plus</p>
<ul className="space-y-4 text-sm text-slate-300 mb-8">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-purple-400" data-lucide="check"></i> Full Brand Strategy</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-purple-400" data-lucide="check"></i> Social Media Kit</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-purple-400" data-lucide="check"></i> Packaging Concepts</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-purple-400" data-lucide="check"></i> Priority Support</li>
</ul>
<a className="block w-full py-3 rounded-lg bg-white text-center text-brand-dark font-medium text-sm hover:bg-slate-200 transition-colors" href="#contact">Get Started</a>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-[#0F0F1A] hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium mb-2">Premium</h3>
<p className="text-3xl font-serif text-white mb-6">$9,500+</p>
<p className="text-xs text-slate-500 mb-8 uppercase tracking-wider">Complete Solution</p>
<ul className="space-y-4 text-sm text-slate-300 mb-8">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> Custom Web Design</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> Ongoing Art Direction</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> Unlimited Revisions</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="check"></i> Dedicated Creative Director</li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 text-center text-white text-sm hover:bg-white hover:text-black transition-colors" href="#contact">Get Started</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-serif text-white mb-12">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white/5 rounded-lg open:bg-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>How long does a typical branding project take?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 mt-3 p-6 pt-0 leading-relaxed text-sm">
                        Typically between 4-8 weeks depending on the scope. A basic identity takes about a month, while comprehensive packages with web design take longer.
                    </div>
</details>
<details className="group bg-white/5 rounded-lg open:bg-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>Do you offer payment plans?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 mt-3 p-6 pt-0 leading-relaxed text-sm">
                        Yes. Standard terms are 50% deposit to start, and 50% upon completion. For larger projects, we can split this into 3 or 4 payments.
                    </div>
</details>
<details className="group bg-white/5 rounded-lg open:bg-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>What do I need to get started?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-400 mt-3 p-6 pt-0 leading-relaxed text-sm">
                        Just an idea and passion! We'll handle the discovery phase to extract your vision. However, any existing market research or moodboards are helpful.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-b from-brand-dark to-[#1a1a2e]" id="contact">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">Let's Create Something <br/> <span className="text-purple-400 italic">Meaningful.</span></h2>
<p className="text-lg text-slate-400 mb-12">Whether you're starting from scratch or need a brand refresh, I'm here to help bring your vision to life.</p>
<div className="space-y-6 mb-12">
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<a className="hover:text-white transition-colors" href="mailto:hello@montana.studio">hello@montana.studio</a>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<a className="hover:text-white transition-colors" href="#">Book a free 15min discovery call</a>
</div>
</div>
</div>
<form className="glass-panel p-8 lg:p-12 rounded-2xl space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-widest">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-widest">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-widest">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-widest">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity" type="submit">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/10 pt-16 pb-8 px-6 bg-brand-dark text-sm">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<a className="text-2xl font-serif text-white tracking-tight flex items-center gap-2 mb-4" href="#">
<div className="w-3 h-3 rounded-full bg-iridescent"></div>
                        Montana.
                    </a>
<p className="text-slate-500 max-w-xs">Great design should feel invisible. Building brands that connect and convert.</p>
</div>
<div className="flex gap-8 text-slate-400">
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Menu</span>
<a className="hover:text-purple-400 transition-colors" href="#">Home</a>
<a className="hover:text-purple-400 transition-colors" href="#work">Work</a>
<a className="hover:text-purple-400 transition-colors" href="#services">Services</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Social</span>
<a className="hover:text-purple-400 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-purple-400 transition-colors" href="#">Instagram</a>
<a className="hover:text-purple-400 transition-colors" href="#">Twitter</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 border-t border-white/5 pt-8">
<p>© 2025 Montana Studio. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

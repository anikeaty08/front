import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-sm group-hover:bg-indigo-500 transition-colors duration-300">
<span className="iconify" data-icon="lucide:aperture" data-width="16"></span>
</div>
                AURA
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white bg-neutral-900 border border-neutral-800 rounded-full hover:border-neutral-600 transition-all group">
                    Start a project
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
<button className="md:hidden text-neutral-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-neutral-300">Available for new projects</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-6">
                We craft digital <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">systems for growth.</span>
</h1>
<p className="text-lg text-neutral-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                A design-driven development agency building high-performance websites and applications for forward-thinking brands.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    View our work
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-transparent text-white border border-neutral-800 text-sm font-medium rounded-lg hover:border-neutral-600 hover:bg-neutral-900 transition-all">
                    Our process
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 pt-12 flex justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-white font-semibold tracking-tighter text-xl"><span className="iconify" data-icon="lucide:triangle" data-width="20"></span> ACME</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tighter text-xl"><span className="iconify" data-icon="lucide:hexagon" data-width="20"></span> NEXUS</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tighter text-xl"><span className="iconify" data-icon="lucide:circle-dashed" data-width="20"></span> ORBIT</div>
<div className="hidden md:flex items-center gap-2 text-white font-semibold tracking-tighter text-xl"><span className="iconify" data-icon="lucide:box" data-width="20"></span> STACK</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 bg-grid" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end border-l-2 border-indigo-500 pl-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Our Expertise</h2>
<p className="text-neutral-400 text-sm max-w-md">Precision engineering meets aesthetic perfection.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 mt-4 md:mt-0" href="#">
                    See full capabilities <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-white/10 hover:bg-neutral-900 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:layout-grid" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">UI/UX Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        User-centric interfaces designed to convert. We focus on clarity, hierarchy, and micro-interactions.
                    </p>
</div>

<div className="group p-8 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-white/10 hover:bg-neutral-900 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-indigo-500/10"></div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:code-2" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Clean, semantic code built on modern stacks. Next.js, React, and headless CMS integrations.
                    </p>
</div>

<div className="group p-8 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-white/10 hover:bg-neutral-900 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Growth &amp; Strategy</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Data-backed decisions to scale your product. SEO optimization and performance analytics.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="work">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">Selected Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden border border-white/5 mb-4">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
<span className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full">View Case Study</span>
</div>
<div className="absolute bottom-6 left-6 p-4 bg-black/50 backdrop-blur-md rounded border border-white/10">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 mb-2"></div>
<span className="text-xs text-white/80 font-mono">FINTECH</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1">Nova Finance</h3>
<p className="text-sm text-neutral-500">Product Design, Frontend</p>
</div>
<span className="text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</span>
</div>
</div>

<div className="group cursor-pointer mt-0 md:mt-16">
<div className="relative aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden border border-white/5 mb-4">
<div className="absolute inset-0 bg-gradient-to-bl from-neutral-800 to-black group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
<span className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full">View Case Study</span>
</div>
<div className="absolute bottom-6 left-6 p-4 bg-black/50 backdrop-blur-md rounded border border-white/10">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 mb-2"></div>
<span className="text-xs text-white/80 font-mono">SAAS</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1">Chronos API</h3>
<p className="text-sm text-neutral-500">Branding, Documentation Site</p>
</div>
<span className="text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="process">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Methodology</h2>
<p className="text-neutral-400 text-sm max-w-md">Our proven framework for digital excellence.</p>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-neutral-800 via-neutral-800 to-transparent z-0"></div>

<div className="relative group">
<div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center text-white mb-6 relative z-10 group-hover:border-indigo-500 transition-colors duration-300">
<span className="iconify text-neutral-400 group-hover:text-indigo-400" data-icon="lucide:search" data-width="20"></span>
</div>
<div className="pl-4 md:pl-0 border-l border-neutral-800 md:border-l-0">
<h4 className="text-base font-medium text-white mb-2">01. Discovery</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                            We dive deep into your business logic, audience needs, and competitive landscape.
                        </p>
</div>
</div>

<div className="relative group">
<div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center text-white mb-6 relative z-10 group-hover:border-indigo-500 transition-colors duration-300">
<span className="iconify text-neutral-400 group-hover:text-indigo-400" data-icon="lucide:pen-tool" data-width="20"></span>
</div>
<div className="pl-4 md:pl-0 border-l border-neutral-800 md:border-l-0">
<h4 className="text-base font-medium text-white mb-2">02. Design</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Iterative prototyping focused on fidelity, motion, and intuitive user flows.
                        </p>
</div>
</div>

<div className="relative group">
<div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center text-white mb-6 relative z-10 group-hover:border-indigo-500 transition-colors duration-300">
<span className="iconify text-neutral-400 group-hover:text-indigo-400" data-icon="lucide:cpu" data-width="20"></span>
</div>
<div className="pl-4 md:pl-0 border-l border-neutral-800 md:border-l-0">
<h4 className="text-base font-medium text-white mb-2">03. Build</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Full-stack engineering with a focus on speed, scalability, and best practices.
                        </p>
</div>
</div>

<div className="relative group">
<div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center text-white mb-6 relative z-10 group-hover:border-indigo-500 transition-colors duration-300">
<span className="iconify text-neutral-400 group-hover:text-indigo-400" data-icon="lucide:rocket" data-width="20"></span>
</div>
<div className="pl-4 md:pl-0 border-l border-neutral-800 md:border-l-0">
<h4 className="text-base font-medium text-white mb-2">04. Launch</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Deployment, QA testing, and post-launch optimization to ensure growth.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-4xl font-semibold text-white tracking-tighter mb-2">40+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Projects Shipped</div>
</div>
<div>
<div className="text-4xl font-semibold text-white tracking-tighter mb-2">98%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Client Retention</div>
</div>
<div>
<div className="text-4xl font-semibold text-white tracking-tighter mb-2">3x</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">ROI Average</div>
</div>
<div>
<div className="text-4xl font-semibold text-white tracking-tighter mb-2">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Support</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-8">
                        Design is not just what it looks like. <span className="text-neutral-500">It's how it works.</span>
</h2>
<div className="space-y-6 text-sm text-neutral-400 leading-relaxed max-w-md">
<p>
                            Founded in 2020, Aura was born from the belief that most software is cluttered, slow, and confusing. We set out to build a new kind of agency—one that values craft as much as code.
                        </p>
<p>
                            We are a small, dedicated team of designers and engineers who obsess over pixels and performance. We don't just build websites; we build digital assets that compound in value over time.
                        </p>
</div>
<div className="mt-10 flex gap-6">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-neutral-950 bg-neutral-800 flex items-center justify-center text-xs text-white">AC</div>
<div className="w-10 h-10 rounded-full border-2 border-neutral-950 bg-neutral-700 flex items-center justify-center text-xs text-white">JD</div>
<div className="w-10 h-10 rounded-full border-2 border-neutral-950 bg-neutral-600 flex items-center justify-center text-xs text-white">MK</div>
<div className="w-10 h-10 rounded-full border-2 border-neutral-950 bg-neutral-900 flex items-center justify-center text-xs text-white border border-dashed border-neutral-600">+4</div>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs font-medium text-white">The A-Team</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-wide">Global Remote</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-6 bg-neutral-900/30 rounded-xl border border-white/5 flex flex-col justify-between h-40">
<span className="iconify text-indigo-500" data-icon="lucide:fingerprint" data-width="24"></span>
<span className="text-sm font-medium text-white">Unique Identity</span>
</div>
<div className="p-6 bg-neutral-900/30 rounded-xl border border-white/5 flex flex-col justify-between h-40">
<span className="iconify text-indigo-500" data-icon="lucide:zap" data-width="24"></span>
<span className="text-sm font-medium text-white">High Velocity</span>
</div>
<div className="p-6 bg-neutral-900/30 rounded-xl border border-white/5 flex flex-col justify-between h-40 col-span-2">
<div className="flex justify-between items-start">
<span className="iconify text-indigo-500" data-icon="lucide:globe" data-width="24"></span>
<span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-medium border border-indigo-500/20">LIVE</span>
</div>
<span className="text-sm font-medium text-white">Global Reach</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-5xl mx-auto bg-neutral-900/80 border border-white/5 rounded-2xl p-12 md:p-20 text-center backdrop-blur-sm relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to scale your vision?</h2>
<p className="text-neutral-400 mb-10 max-w-lg mx-auto">
                We are currently accepting new projects for Q4. Let's discuss how we can help your business grow.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<div className="relative w-full sm:w-80">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
</span>
<input className="w-full bg-black/50 border border-neutral-700 text-white text-sm rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-neutral-600" placeholder="Enter your email" type="email"/>
</div>
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium text-sm rounded-lg hover:bg-neutral-200 transition-colors">
                    Get in touch
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-white text-black flex items-center justify-center rounded-sm">
<span className="iconify" data-icon="lucide:aperture" data-width="12"></span>
</div>
                        AURA
                    </a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Building the digital future,<br/>one pixel at a time.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Sitemap</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Work</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Company</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Social</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Dribbble</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<div className="text-xs text-neutral-600 mb-4 md:mb-0">
                    © 2023 Aura Agency Inc. All rights reserved.
                </div>
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-neutral-800"></div>
<div className="w-2 h-2 rounded-full bg-neutral-800"></div>
</div>
</div>
</div>
</footer>

    </>
  );
}

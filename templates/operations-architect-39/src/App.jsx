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
lime: '#bef264',
dark: '#050505',
surface: '#18181b',
border: '#27272a',
text: '#f4f4f5'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
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
      

<div className="bg-noise"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-base font-display font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-brand-lime text-black flex items-center justify-center font-bold">
                    M
                </div>
<span className="group-hover:text-brand-lime transition-colors">Ackers.</span>
</a>
<div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-wide text-zinc-400 uppercase">
<a className="hover:text-brand-lime transition-colors" href="#">Services</a>
<a className="hover:text-brand-lime transition-colors" href="#">Work</a>
<a className="hover:text-brand-lime transition-colors" href="#">Process</a>
<a className="text-brand-lime transition-colors" href="#">About</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-brand-lime rounded hover:bg-white transition-colors" href="#">
                Book Discovery
            </a>
<button className="md:hidden text-zinc-400 hover:text-brand-lime">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>
<main className="relative z-10 pt-32 pb-24 flex-grow">

<section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
<div className="animate-fade-in">
<h1 className="text-xs font-mono text-brand-lime uppercase tracking-wider mb-6">About</h1>
<div className="max-w-4xl">
<h2 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tighter mb-4">Michelle Ackers</h2>
<p className="text-xl md:text-2xl text-zinc-400 font-light mb-8">
                        Operations Architect and Systems Designer <span className="text-zinc-600 px-2">/</span> Product Engineer
                    </p>
<div className="pl-0 md:pl-6 border-l-0 md:border-l border-zinc-800 md:ml-2">
<p className="text-lg md:text-xl text-white font-display mb-6 leading-relaxed">
                            "I see what others miss: The exact steps needed to turn meaningful visions into accessible reality."
                        </p>
<p className="text-base text-zinc-500 font-light max-w-2xl">
                            Designing intelligent systems for scalable outcomes. AI‑led product engineering for founders and teams to maximize impact and minimize manual work.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<h3 className="text-2xl font-display font-medium text-white tracking-tight mb-2">From Engineer to <br/><span className="text-brand-lime">Systems Architect</span></h3>
<div className="h-1 w-12 bg-zinc-800 mt-4 rounded-full"></div>
</div>
<div className="lg:col-span-8 space-y-6 text-zinc-400 leading-relaxed font-light">
<p>
                        Rooted in complex digital systems, I started as an engineer guiding high-impact platforms for early-stage teams and scale-ups.
                    </p>
<p>
                        In 2021, I pivoted from a purely engineering focus after leading a pivotal AI/automation engagement. This experience ignited my passion for systems design and problem mapping across the entire product stack—from business process architecture to technical implementation.
                    </p>
<p>
                        Now, I partner with founders, product leaders, and agencies to deliver systems, agent-based solutions, and modern frontend experiences—all with an unwavering focus on measurable outcomes.
                    </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="mb-12 flex items-center gap-3">
<span className="iconify text-brand-lime" data-icon="lucide:layers" data-width="20"></span>
<h2 className="text-xl font-display font-medium text-white tracking-tight">Core Expertise</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="glass-panel p-6 rounded-lg hover:border-brand-lime/40 transition-colors group">
<span className="iconify text-zinc-600 mb-4 group-hover:text-brand-lime transition-colors" data-icon="lucide:workflow" data-width="24"></span>
<h3 className="text-base font-bold text-white mb-2">Business Process Design</h3>
<p className="text-xs text-zinc-400 leading-relaxed">End-to-end operational infrastructure from customer acquisition to retention.</p>
</div>

<div className="glass-panel p-6 rounded-lg hover:border-brand-lime/40 transition-colors group">
<span className="iconify text-zinc-600 mb-4 group-hover:text-brand-lime transition-colors" data-icon="lucide:code-2" data-width="24"></span>
<h3 className="text-base font-bold text-white mb-2">Technical Implementation</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Websites, email systems, CRM, marketing automation, data management.</p>
</div>

<div className="glass-panel p-6 rounded-lg hover:border-brand-lime/40 transition-colors group">
<span className="iconify text-zinc-600 mb-4 group-hover:text-brand-lime transition-colors" data-icon="lucide:network" data-width="24"></span>
<h3 className="text-base font-bold text-white mb-2">Systems Architecture</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Operational infrastructure design, blueprinting and robust implementation.</p>
</div>

<div className="glass-panel p-6 rounded-lg hover:border-brand-lime/40 transition-colors group">
<span className="iconify text-zinc-600 mb-4 group-hover:text-brand-lime transition-colors" data-icon="lucide:building-2" data-width="24"></span>
<h3 className="text-base font-bold text-white mb-2">Industry Experience</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Deep experience in B2B services (Molotow) and e-commerce (MultiCam Queen).</p>
</div>

<div className="glass-panel p-6 rounded-lg hover:border-brand-lime/40 transition-colors group md:col-span-2 lg:col-span-2">
<span className="iconify text-zinc-600 mb-4 group-hover:text-brand-lime transition-colors" data-icon="lucide:heart-handshake" data-width="24"></span>
<h3 className="text-base font-bold text-white mb-2">Specialization</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Dedicated to mission-driven entrepreneurs in health tech, wellness, and AI sectors.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="mb-12 flex items-center gap-3">
<span className="iconify text-brand-lime" data-icon="lucide:star" data-width="20"></span>
<h2 className="text-xl font-display font-medium text-white tracking-tight">What Sets Me Apart</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 border border-zinc-800 rounded bg-zinc-900/20 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-brand-lime" data-icon="lucide:trending-down" data-width="120"></span>
</div>
<div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">80%</div>
<h3 className="text-brand-lime font-mono text-xs uppercase tracking-wider mb-3">Reduction in Overhead</h3>
<p className="text-zinc-400 text-sm">Dramatically reduce manual work and administrative burden through intelligent automation.</p>
</div>

<div className="p-8 border border-zinc-800 rounded bg-zinc-900/20 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-brand-lime" data-icon="lucide:trending-up" data-width="120"></span>
</div>
<div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">10×</div>
<h3 className="text-brand-lime font-mono text-xs uppercase tracking-wider mb-3">Growth Capacity</h3>
<p className="text-zinc-400 text-sm">Enable systems that scale effortlessly with your growth, removing bottlenecks before they appear.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
<div className="glass-panel p-6 rounded-lg flex flex-col gap-4">
<span className="iconify text-brand-lime" data-icon="lucide:shield-check" data-width="24"></span>
<div>
<h4 className="text-sm font-bold text-white mb-1">Local-First &amp; On-Prem</h4>
<p className="text-xs text-zinc-400">Data under client control. Privacy-first solutions for sensitive industries.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-lg flex flex-col gap-4">
<span className="iconify text-brand-lime" data-icon="lucide:package-check" data-width="24"></span>
<div>
<h4 className="text-sm font-bold text-white mb-1">Complete Solutions</h4>
<p className="text-xs text-zinc-400">Observability, runbooks, and documentation included. Not just code.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-lg flex flex-col gap-4">
<span className="iconify text-brand-lime" data-icon="lucide:target" data-width="24"></span>
<div>
<h4 className="text-sm font-bold text-white mb-1">Outcome-Driven</h4>
<p className="text-xs text-zinc-400">Measurable results over features. Every project focuses on business impact.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="mb-12 flex items-center gap-3">
<span className="iconify text-brand-lime" data-icon="lucide:compass" data-width="20"></span>
<h2 className="text-xl font-display font-medium text-white tracking-tight">How I Work</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-5 border border-zinc-800 rounded hover:bg-zinc-900/30 transition-colors">
<h3 className="text-sm font-bold text-white mb-2">Outcome First</h3>
<p className="text-xs text-zinc-400">Measurable results over features. Every decision prioritizes impact on your business goals.</p>
</div>
<div className="p-5 border border-zinc-800 rounded hover:bg-zinc-900/30 transition-colors">
<h3 className="text-sm font-bold text-white mb-2">Model Clarity</h3>
<p className="text-xs text-zinc-400">Clear architecture and documentation. You'll understand how everything works and why.</p>
</div>
<div className="p-5 border border-zinc-800 rounded hover:bg-zinc-900/30 transition-colors">
<h3 className="text-sm font-bold text-white mb-2">Integrate Deeply</h3>
<p className="text-xs text-zinc-400">Seamless connections with existing systems. No silos, no friction, just smooth operations.</p>
</div>
<div className="p-5 border border-zinc-800 rounded hover:bg-zinc-900/30 transition-colors">
<h3 className="text-sm font-bold text-white mb-2">Partner Mindset</h3>
<p className="text-xs text-zinc-400">Collaborative approach. Working as an extension of your team, not just a contractor.</p>
</div>
<div className="p-5 border border-zinc-800 rounded hover:bg-zinc-900/30 transition-colors">
<h3 className="text-sm font-bold text-white mb-2">Bias to Ship</h3>
<p className="text-xs text-zinc-400">Working solutions quickly. We prioritize getting value into your hands, then iterate.</p>
</div>
<div className="p-5 border border-zinc-800 rounded hover:bg-zinc-900/30 transition-colors">
<h3 className="text-sm font-bold text-white mb-2">Transparent Process</h3>
<p className="text-xs text-zinc-400">Clear communication and visibility. You always know where things stand.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<div className="mb-8 flex items-center gap-3">
<span className="iconify text-brand-lime" data-icon="lucide:users" data-width="20"></span>
<h2 className="text-xl font-display font-medium text-white tracking-tight">Who I Partner With</h2>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 border border-zinc-800 rounded bg-zinc-900/10">
<span className="text-sm font-medium text-white">Founders <span className="text-zinc-500 font-normal ml-2">Health tech, wellness, AI</span></span>
<span className="iconify text-zinc-600" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
<div className="flex items-center justify-between p-4 border border-zinc-800 rounded bg-zinc-900/10">
<span className="text-sm font-medium text-white">Product Leaders <span className="text-zinc-500 font-normal ml-2">Operational infrastructure</span></span>
<span className="iconify text-zinc-600" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
<div className="flex items-center justify-between p-4 border border-zinc-800 rounded bg-zinc-900/10">
<span className="text-sm font-medium text-white">Agencies <span className="text-zinc-500 font-normal ml-2">Systems implementation</span></span>
<span className="iconify text-zinc-600" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
<div className="flex items-center justify-between p-4 border border-zinc-800 rounded bg-zinc-900/10">
<span className="text-sm font-medium text-white">Service Businesses <span className="text-zinc-500 font-normal ml-2">Retail, coaching, fitness</span></span>
<span className="iconify text-zinc-600" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
<div className="flex items-center justify-between p-4 border border-zinc-800 rounded bg-zinc-900/10">
<span className="text-sm font-medium text-white">Tech-Forward Co. <span className="text-zinc-500 font-normal ml-2">AI automation</span></span>
<span className="iconify text-zinc-600" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</div>
</div>

<div>
<div className="mb-8 flex items-center gap-3">
<span className="iconify text-brand-lime" data-icon="lucide:cpu" data-width="20"></span>
<h2 className="text-xl font-display font-medium text-white tracking-tight">Technical Capabilities</h2>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 border border-zinc-800 rounded hover:border-zinc-700">
<h4 className="text-xs font-bold text-white mb-1">Frontend</h4>
<p className="text-[10px] text-zinc-500">Next.js, TypeScript, Tailwind</p>
</div>
<div className="p-3 border border-zinc-800 rounded hover:border-zinc-700">
<h4 className="text-xs font-bold text-white mb-1">Backend</h4>
<p className="text-[10px] text-zinc-500">Node.js, Postgres, REST</p>
</div>
<div className="p-3 border border-zinc-800 rounded hover:border-zinc-700">
<h4 className="text-xs font-bold text-white mb-1">Payments</h4>
<p className="text-[10px] text-zinc-500">Stripe, Helcim, Invoicing</p>
</div>
<div className="p-3 border border-zinc-800 rounded hover:border-zinc-700">
<h4 className="text-xs font-bold text-white mb-1">Infrastructure</h4>
<p className="text-[10px] text-zinc-500">Cloud &amp; On-prem, CI/CD</p>
</div>
<div className="p-3 border border-zinc-800 rounded hover:border-zinc-700">
<h4 className="text-xs font-bold text-white mb-1">AI/ML</h4>
<p className="text-[10px] text-zinc-500">Local LLMs, Agents, Automation</p>
</div>
<div className="p-3 border border-zinc-800 rounded hover:border-zinc-700">
<h4 className="text-xs font-bold text-white mb-1">Integrations</h4>
<p className="text-[10px] text-zinc-500">CRM, Marketing, Shipping APIs</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-12 text-center">
<h2 className="text-3xl font-display font-medium text-white tracking-tight mb-4">Let's Connect</h2>
<p className="text-zinc-400 mb-8">Ready to streamline your operations or have a vision to discuss?</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-black bg-brand-lime rounded hover:bg-white transition-all group" href="#">
                    Start a Project
                    <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-zinc-300 border border-zinc-800 rounded hover:border-white hover:text-white transition-all" href="#">
                    Fill Out Discovery Form
                </a>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500 font-mono">
<a className="hover:text-brand-lime transition-colors flex items-center gap-2" href="mailto:ackers.ml@gmail.com">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span> ackers.ml@gmail.com
                </a>
<a className="hover:text-brand-lime transition-colors flex items-center gap-2" href="https://www.linkedin.com/in/michelle-ackers-/">
<span className="iconify" data-icon="lucide:linkedin" data-width="14"></span> LinkedIn
                </a>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-2xl font-display font-medium text-white tracking-tighter">
                Ackers.
            </div>
<div className="flex gap-8 text-xs font-mono text-zinc-600">
<a className="hover:text-white transition-colors" href="#">Github</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-zinc-700 font-mono">
                © 2024 Michelle Ackers.
            </div>
</div>
</footer>

    </>
  );
}

import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="heading-font text-lg text-white tracking-tighter font-medium" href="#">UXFR.</a>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center justify-center text-xs heading-font tracking-tight text-black bg-white px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#contact">
                Let's Talk
            </a>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="relative">

<div className="absolute top-0 left-0 w-full h-[100vh] glow-bg pointer-events-none z-0"></div>

<section className="relative z-10 min-h-screen flex items-center pt-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="flex flex-col items-start text-left order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Available for freelance
                    </div>
<h1 className="heading-font text-5xl md:text-6xl lg:text-7xl text-white tracking-tight font-medium leading-[1.1] mb-6">
                        Crafting digital <br className="hidden md:block"/>
<span className="text-zinc-500">futures.</span>
</h1>
<p className="text-base md:text-lg max-w-md mb-10 leading-relaxed text-zinc-400">
                        I am a specialized UI/UX designer and Framer developer building next-generation interfaces with extreme precision and minimalist aesthetics.
                    </p>
<div className="flex items-center gap-4 w-full sm:w-auto">
<a className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm heading-font tracking-tight hover:bg-zinc-200 transition-colors" href="#work">
                            View Projects
                            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="flex-1 sm:flex-none flex items-center justify-center px-6 py-3 rounded-full text-sm heading-font tracking-tight text-white border border-white/10 hover:bg-white/5 transition-colors" href="#about">
                            About Me
                        </a>
</div>
</div>
<div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent z-10"></div>
<div className="w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 relative bg-zinc-900">
<img alt="Portrait" className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="work">
<div className="max-w-7xl mx-auto px-6 mb-16">
<h2 className="heading-font text-3xl md:text-4xl text-white tracking-tight font-medium">Selected Work</h2>
<p className="mt-4 text-sm max-w-xl">A collection of interfaces and experiences designed and developed for forward-thinking companies.</p>
</div>
<div className="flex flex-col gap-8 md:gap-16 max-w-7xl mx-auto px-6">

<div className="min-h-[85vh] rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden flex flex-col group relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/90 z-10"></div>
<div className="flex-1 w-full h-full relative overflow-hidden bg-[#0a0a0a] p-8 md:p-16 flex items-center justify-center">
<img alt="Project 1" className="w-full h-full object-cover rounded-xl border border-white/10 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<p className="text-xs tracking-widest uppercase mb-2 text-zinc-500 font-medium">Fintech / Web App</p>
<h3 className="heading-font text-3xl md:text-5xl text-white tracking-tight font-medium mb-4">Nova Finance</h3>
<p className="max-w-md text-sm md:text-base text-zinc-400">A completely reimagined dashboard for tracking crypto assets with predictive AI analytics.</p>
</div>
<a className="inline-flex items-center gap-2 border border-white/10 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm heading-font tracking-tight hover:bg-white/10 transition-colors whitespace-nowrap" href="#">
                            View Full Project
                            <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="min-h-[85vh] rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden flex flex-col group relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/90 z-10"></div>
<div className="flex-1 w-full h-full relative overflow-hidden bg-[#0a0a0a] p-8 md:p-16 flex items-center justify-center">
<img alt="Project 2" className="w-full h-full object-cover rounded-xl border border-white/10 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<p className="text-xs tracking-widest uppercase mb-2 text-zinc-500 font-medium">SaaS / Dashboard</p>
<h3 className="heading-font text-3xl md:text-5xl text-white tracking-tight font-medium mb-4">Aura Metrics</h3>
<p className="max-w-md text-sm md:text-base text-zinc-400">Minimalist analytics platform designed to reduce cognitive load for data scientists.</p>
</div>
<a className="inline-flex items-center gap-2 border border-white/10 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm heading-font tracking-tight hover:bg-white/10 transition-colors whitespace-nowrap" href="#">
                            View Full Project
                            <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="min-h-[85vh] rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden flex flex-col group relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/90 z-10"></div>
<div className="flex-1 w-full h-full relative overflow-hidden bg-[#0a0a0a] p-8 md:p-16 flex items-center justify-center">
<img alt="Project 3" className="w-full h-full object-cover rounded-xl border border-white/10 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<p className="text-xs tracking-widest uppercase mb-2 text-zinc-500 font-medium">E-Commerce / Experience</p>
<h3 className="heading-font text-3xl md:text-5xl text-white tracking-tight font-medium mb-4">Lumina Store</h3>
<p className="max-w-md text-sm md:text-base text-zinc-400">High-end fashion e-commerce experience built entirely in Framer with complex scroll interactions.</p>
</div>
<a className="inline-flex items-center gap-2 border border-white/10 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm heading-font tracking-tight hover:bg-white/10 transition-colors whitespace-nowrap" href="#">
                            View Full Project
                            <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="min-h-[85vh] rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden flex flex-col group relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/90 z-10"></div>
<div className="flex-1 w-full h-full relative overflow-hidden bg-[#0a0a0a] p-8 md:p-16 flex items-center justify-center">
<img alt="Project 4" className="w-full h-full object-cover rounded-xl border border-white/10 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<p className="text-xs tracking-widest uppercase mb-2 text-zinc-500 font-medium">AI / Platform</p>
<h3 className="heading-font text-3xl md:text-5xl text-white tracking-tight font-medium mb-4">Nexus Core</h3>
<p className="max-w-md text-sm md:text-base text-zinc-400">Interface design for an enterprise-level LLM training environment.</p>
</div>
<a className="inline-flex items-center gap-2 border border-white/10 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm heading-font tracking-tight hover:bg-white/10 transition-colors whitespace-nowrap" href="#">
                            View Full Project
                            <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#080808]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="heading-font text-3xl md:text-4xl text-white tracking-tight font-medium">Core Capabilities</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/5 bg-black hover:bg-white/[0.02] transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:pallete-2-linear" width="24"></iconify-icon>
</div>
<h3 className="heading-font text-xl text-white tracking-tight font-medium mb-3">Branding</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Developing cohesive visual identities that resonate with your target audience and establish a strong market presence.</p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-black hover:bg-white/[0.02] transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:pen-linear" width="24"></iconify-icon>
</div>
<h3 className="heading-font text-xl text-white tracking-tight font-medium mb-3">Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Crafting intuitive and aesthetically pleasing user interfaces backed by solid user experience research and wireframing.</p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-black hover:bg-white/[0.02] transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h3 className="heading-font text-xl text-white tracking-tight font-medium mb-3">Development</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Translating designs into pixel-perfect, responsive, and highly animated Framer websites ready for production.</p>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="heading-font text-3xl md:text-4xl text-white tracking-tight font-medium mb-4">The Advantage</h2>
<p className="text-sm max-w-xl">Why working with a specialized freelancer brings more value to your product.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="md:col-span-2 md:row-span-2 p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-[#111] to-black flex flex-col justify-end relative overflow-hidden group">
<div className="absolute top-8 right-8 text-white/20 group-hover:text-white/40 transition-colors">
<iconify-icon height="48" icon="solar:hand-shake-linear" width="48"></iconify-icon>
</div>
<h3 className="heading-font text-2xl md:text-3xl text-white tracking-tight font-medium">I build partnership,<br/>not just a project.</h3>
</div>

<div className="md:col-span-2 p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] flex flex-col justify-center">
<h3 className="heading-font text-xl md:text-2xl text-white tracking-tight font-medium mb-2">Design that makes sense and looks stunning</h3>
<p className="text-xs text-zinc-500">Balancing function and form perfectly.</p>
</div>

<div className="md:col-span-1 p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] flex flex-col justify-center items-center text-center">
<span className="text-4xl text-white heading-font font-medium mb-2">48h</span>
<h3 className="text-sm font-medium tracking-wide text-zinc-400">Turnaround</h3>
</div>

<div className="md:col-span-1 p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] flex flex-col justify-center">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white mb-4">
<iconify-icon height="16" icon="solar:maximize-linear" width="16"></iconify-icon>
</div>
<h3 className="heading-font text-lg text-white tracking-tight font-medium">Flexible and scalable</h3>
</div>

<div className="md:col-span-4 p-8 rounded-3xl border border-white/5 bg-gradient-to-r from-[#0a0a0a] to-[#111] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<h3 className="heading-font text-2xl text-white tracking-tight font-medium">Clients and the satisfaction rate</h3>
<div className="flex items-center gap-8">
<div className="text-center">
<span className="block text-3xl text-white heading-font font-medium mb-1">40+</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Clients</span>
</div>
<div className="text-center">
<span className="block text-3xl text-white heading-font font-medium mb-1">99%</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Satisfaction</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden" id="about">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
<div className="lg:col-span-5">
<div className="aspect-square rounded-full overflow-hidden border border-white/10 bg-zinc-900 max-w-md mx-auto lg:mx-0 p-2">
<img alt="About Me" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="lg:col-span-7 flex flex-col items-start">
<h2 className="heading-font text-3xl md:text-5xl text-white tracking-tight font-medium mb-6">Hello, I'm Alex.</h2>
<p className="text-base text-zinc-400 mb-6 leading-relaxed">
                        With over half a decade of experience bridging the gap between design and engineering, I specialize in creating digital products that are not only visually striking but technically robust. My workflow is rooted in minimalism, logic, and a deep understanding of user behavior.
                    </p>
<p className="text-base text-zinc-400 mb-10 leading-relaxed">
                        Currently operating independently, partnering with startups and established brands globally to elevate their digital presence through strategic UI/UX and seamless Framer development.
                    </p>
<div className="flex flex-wrap items-center gap-6 mb-10">
<div className="flex items-center gap-2 text-sm">
<iconify-icon className="text-white" height="18" icon="solar:map-point-linear" width="18"></iconify-icon>
                            Berlin, Germany
                        </div>
<div className="flex items-center gap-2 text-sm">
<iconify-icon className="text-white" height="18" icon="solar:letter-linear" width="18"></iconify-icon>
                            hello@uxfr.studio
                        </div>
</div>
<div className="flex items-center gap-4 w-full sm:w-auto">
<a className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm heading-font tracking-tight hover:bg-zinc-200 transition-colors" href="#contact">
                            Know More
                        </a>
<div className="flex items-center gap-3 ml-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon height="18" icon="solar:hashtag-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon height="18" icon="solar:link-circle-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="heading-font text-3xl md:text-4xl text-white tracking-tight font-medium">Client Feedback</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] flex flex-col">
<div className="flex text-white mb-6">
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-8 flex-1">"The attention to detail and ability to translate our complex requirements into a sleek, functional interface was outstanding. The Framer build was flawless."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800"></div>
<div>
<h4 className="text-sm text-white font-medium">Sarah Jenkins</h4>
<p className="text-xs text-zinc-500">CEO, TechFlow</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] flex flex-col">
<div className="flex text-white mb-6">
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-8 flex-1">"Delivered exactly what was promised within the 48-hour timeframe for the initial concepts. The final product elevated our brand significantly."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800"></div>
<div>
<h4 className="text-sm text-white font-medium">David Chen</h4>
<p className="text-xs text-zinc-500">Founder, Aura</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] flex flex-col md:hidden lg:flex">
<div className="flex text-white mb-6">
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-8 flex-1">"A true partner rather than just a contractor. Brought invaluable product insights that went far beyond pure UI design."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800"></div>
<div>
<h4 className="text-sm text-white font-medium">Elena Rostova</h4>
<p className="text-xs text-zinc-500">VP Product, Nexus</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="heading-font text-3xl md:text-4xl text-white tracking-tight font-medium mb-4">Transparent Pricing</h2>
<p className="text-sm max-w-xl mx-auto">Simple, straightforward models tailored to your project needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] flex flex-col">
<h3 className="text-sm tracking-widest uppercase text-zinc-500 font-medium mb-2">Project Based</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl heading-font text-white font-medium tracking-tight">Custom</span>
</div>
<p className="text-sm text-zinc-400 mb-8 border-b border-white/5 pb-8">Ideal for end-to-end website builds or specific design scopes with defined deliverables.</p>
<ul className="flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-white mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                UI/UX Design System
                            </li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-white mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Full Framer Development
                            </li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-white mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Responsive across devices
                            </li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-white mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                SEO &amp; Performance setup
                            </li>
</ul>
<button className="w-full py-3 rounded-full border border-white/10 text-white text-sm heading-font tracking-tight hover:bg-white/5 transition-colors">
                            Get a Quote
                        </button>
</div>

<div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#111] to-[#050505] flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-white text-black text-xs font-medium px-3 py-1 rounded-bl-xl">Popular</div>
<h3 className="text-sm tracking-widest uppercase text-zinc-500 font-medium mb-2">Retainer</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl heading-font text-white font-medium tracking-tight">$4,500</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-400 mb-8 border-b border-white/5 pb-8">Dedicated monthly design and development support for continuous growth.</p>
<ul className="flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-white mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Pause or cancel anytime
                            </li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-white mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Unlimited requests
                            </li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-white mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                48-hour delivery on tasks
                            </li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-white mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Direct Slack communication
                            </li>
</ul>
<button className="w-full py-3 rounded-full bg-white text-black text-sm heading-font tracking-tight hover:bg-zinc-200 transition-colors">
                            Subscribe Now
                        </button>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-12">
<h2 className="heading-font text-3xl md:text-4xl text-white tracking-tight font-medium">Frequently Asked Questions</h2>
</div>
<div className="flex flex-col border-t border-white/5">

<details className="group py-6 border-b border-white/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white text-lg hover:text-zinc-300 transition-colors">
<span className="heading-font tracking-tight">What is the typical turnaround time?</span>
<span className="transition group-open:rotate-180 text-zinc-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-zinc-400 mt-4 text-sm leading-relaxed pr-8 group-open:animate-fadeIn">
                            For smaller tasks and standard design requests under the retainer, the turnaround is typically 48 hours. Full project timelines vary based on scope but generally range from 2 to 6 weeks.
                        </p>
</details>

<details className="group py-6 border-b border-white/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white text-lg hover:text-zinc-300 transition-colors">
<span className="heading-font tracking-tight">Do you work with other platforms besides Framer?</span>
<span className="transition group-open:rotate-180 text-zinc-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-zinc-400 mt-4 text-sm leading-relaxed pr-8">
                            While Framer is my primary tool for development due to its speed and high-fidelity output, I also design in Figma and can hand off assets for standard React/Next.js development teams if required.
                        </p>
</details>

<details className="group py-6 border-b border-white/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white text-lg hover:text-zinc-300 transition-colors">
<span className="heading-font tracking-tight">How does the retainer model work?</span>
<span className="transition group-open:rotate-180 text-zinc-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-zinc-400 mt-4 text-sm leading-relaxed pr-8">
                            The retainer acts as an ongoing subscription where you can submit unlimited design or Framer requests. I work on them sequentially, delivering updates every 48 hours until you are completely satisfied.
                        </p>
</details>
</div>
</div>
</section>

<footer className="pt-24 pb-12 border-t border-white/5 bg-[#050505]" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
<div>
<h2 className="heading-font text-4xl md:text-6xl text-white tracking-tight font-medium mb-6">Let's build<br/>something <span className="text-zinc-600">iconic.</span></h2>
<a className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-colors text-lg" href="mailto:hello@uxfr.studio">
                            hello@uxfr.studio
                            <iconify-icon height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon height="20" icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon height="20" icon="solar:hashtag-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-zinc-500">
<p>© 2024 UXFR. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}

import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Simple Animation Observer for "Fade Up" effect
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        // Select elements to animate (would apply class in real implementation)
        // document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-border bg-white/80">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-ink"></div>
<span className="font-display font-semibold text-lg tracking-tight text-ink uppercase">Breed Studio</span>
</div>

<nav className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium uppercase tracking-wide hover:text-ink transition-colors duration-300" href="#work">Work</a>
<a className="text-sm font-medium uppercase tracking-wide hover:text-ink transition-colors duration-300" href="#solutions">Solutions</a>
<a className="text-sm font-medium uppercase tracking-wide hover:text-ink transition-colors duration-300" href="#studio">Studio</a>
<a className="text-sm font-medium uppercase tracking-wide hover:text-ink transition-colors duration-300" href="#process">Process</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-ink px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 group text-white hover:bg-gray-800" href="#contact" style={{}}>
                    Start Project
                    <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden text-ink">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="pt-16">

<section className="min-h-[90vh] flex flex-col overflow-hidden border-border border-b relative items-center justify-center">

<div className="absolute inset-0 grid-lines opacity-60 -z-10"></div>

<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-surface mb-8 animate-fade-in-up border-gray-200" style={{}}>
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{}}></span>
<span className="text-xs font-medium text-ink uppercase tracking-wider">Accepting New Partners Q4</span>
</div>
<h1 className="md:text-8xl lg:text-9xl text-ink leading-[0.9] text-6xl font-semibold tracking-tight font-display mb-8" style={{}}>Breed Studio</h1>
<p className="max-w-2xl mx-auto text-xl md:text-2xl font-light text-ink-muted leading-relaxed mb-12">
                    We operate at the intersection of cinematic art and high-performance business. Transforming ambition into cultural assets.
                </p>

<div className="group relative inline-flex items-center justify-center cursor-pointer">
<div className="group-hover:opacity-50 transition-opacity duration-500 opacity-0 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-xl gap-x-4 gap-y-4 bg-neutral-50" style={{}}></div><button className="flex border-border group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 bg-gray-50 border rounded-full pt-2 pr-6 pb-2 pl-6 relative shadow gap-x-4 gap-y-4 items-center">
<span className="text-ink font-medium font-roboto">Cotizar mi proyecto</span><span className="flex items-center justify-center w-10 h-10 rounded-full text-white">
<svg className="lucide lucide-play fill-current ml-1 w-[70px] h-[22px]" data-icon-replaced="true" data-icon-set="solar" data-solar="arrow-right-outline" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '70px', height: '22px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" fill="#09090b" fill-rule="evenodd"></path></svg>
</span>
</button>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-border py-4 overflow-hidden bg-white">
<div className="flex whitespace-nowrap gap-16 animate-marquee">

<span className="text-sm font-display font-medium uppercase tracking-widest text-gray-400" style={{}}>Strategy</span>
<span className="text-sm font-display font-medium uppercase tracking-widest text-ink">Production</span>
<span className="text-sm font-display font-medium uppercase tracking-widest text-gray-400" style={{}}>Growth</span>
<span className="text-sm font-display font-medium uppercase tracking-widest text-ink">Creative</span>
<span className="text-sm font-display font-medium uppercase tracking-widest text-gray-400" style={{}}>Strategy</span>
<span className="text-sm font-display font-medium uppercase tracking-widest text-ink">Production</span>
<span className="text-sm font-display font-medium uppercase tracking-widest text-gray-400" style={{}}>Growth</span>
<span className="text-sm font-display font-medium uppercase tracking-widest text-ink">Creative</span>
<span className="text-sm font-display font-medium uppercase tracking-widest text-gray-400" style={{}}>Strategy</span>
<span className="text-sm font-display font-medium uppercase tracking-widest text-ink">Production</span>
<span className="text-sm font-display font-medium uppercase tracking-widest text-gray-400" style={{}}>Growth</span>
<span className="text-sm font-display font-medium uppercase tracking-widest text-ink">Creative</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-border bg-white">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-3">
<span className="block text-xs font-mono mb-2 text-gray-400" style={{}}>01 — MANIFESTO</span>
<h2 className="font-display text-2xl font-medium text-ink">Not a Freelancer.An Elite Partner.</h2>
</div>
<div className="md:col-span-8 md:col-start-5">
<p className="text-3xl md:text-4xl leading-snug font-light text-ink">
                            There is a disconnect between the quality of the deliverable and the digital showcase. 
                             
                            Breed Studio was born from pure production but evolved into a strategic growth partner for major league brands.
                        </p>
<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-8 border-gray-100" style={{}}>
<div>
<h3 className="font-display text-4xl font-medium text-ink mb-1">50+</h3>
<p className="text-sm text-gray-500" style={{}}>Projects Delivered</p>
</div>
<div>
<h3 className="font-display text-4xl font-medium text-ink mb-1">2M+</h3>
<p className="text-sm text-gray-500" style={{}}>Organic Views</p>
</div>
<div>
<h3 className="font-display text-4xl font-medium text-ink mb-1">3x</h3>
<p className="text-sm text-gray-500" style={{}}>Average ROI</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface py-24 md:py-32 border-b border-border" id="work">
<div className="max-w-[1600px] mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<span className="block text-xs font-mono mb-2 text-gray-400" style={{}}>02 — SELECTED WORK</span>
<h2 className="font-display text-4xl font-semibold tracking-tight text-ink">Case Studies</h2>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium border-b pb-0.5 hover:border-ink transition-colors border-gray-300" href="#" style={{}}>
                    View Full Archive <svg className="lucide lucide-arrow-up-right w-4 h-4 ml-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[500px]">

<div className="group relative md:col-span-2 border border-border overflow-hidden rounded-sm cursor-pointer bg-white">
<div className="absolute inset-0 bg-gray-200" style={{}}>

<img alt="Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-60 group-hover:opacity-40 transition-opacity from-black/60"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-xs uppercase tracking-widest mb-2 text-white/80">Fintech • Brand Strategy</p>
<h3 className="text-3xl font-display font-medium text-white">Nova Finance</h3>
</div>
<div className="w-10 h-10 rounded-full backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/20 text-white">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative border border-border overflow-hidden rounded-sm cursor-pointer bg-white">
<div className="absolute inset-0 bg-gray-100" style={{}}>
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<p className="text-xs text-ink/60 uppercase tracking-widest mb-1">E-Commerce</p>
<h3 className="text-xl font-display font-medium text-ink">Lumina Objects</h3>
</div>
</div>

<div className="group relative border border-border overflow-hidden rounded-sm cursor-pointer bg-white">
<div className="absolute inset-0 flex items-center justify-center bg-gray-100" style={{}}>
<div className="text-center p-8">
<div className="w-16 h-16 rounded-full border flex items-center justify-center mx-auto mb-6 group-hover:bg-ink group-hover:text-white transition-colors border-gray-200" style={{}}>
<svg className="lucide lucide-play w-6 h-6 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<h3 className="text-xl font-display font-medium text-ink mb-2">The 2024 Reel</h3>
<p className="text-sm text-gray-500" style={{}}>1:45 • Highlight Cut</p>
</div>
</div>
</div>

<div className="group relative md:col-span-2 border border-border overflow-hidden rounded-sm cursor-pointer bg-white">
<div className="absolute inset-0 bg-gray-200" style={{}}>
<img alt="Fashion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-black/20"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<p className="text-xs uppercase tracking-widest mb-2 text-white/90">Fashion • Campaign</p>
<h3 className="text-3xl font-display font-medium text-white">Vesper Mode</h3>
</div>
</div>
</div>
</div>

<div className="max-w-[1600px] mx-auto px-6 mt-24">
<p className="text-center text-sm font-mono mb-8 uppercase tracking-widest text-gray-400" style={{}}>Trusted by Innovators</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex justify-center"><svg className="lucide lucide-hexagon w-10 h-10 text-ink" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></div>
<div className="flex justify-center"><svg className="lucide lucide-triangle w-10 h-10 text-ink" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg></div>
<div className="flex justify-center"><svg className="lucide lucide-circle w-10 h-10 text-ink" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg></div>
<div className="flex justify-center"><svg className="lucide lucide-square w-10 h-10 text-ink" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg></div>
<div className="flex justify-center"><svg className="lucide lucide-aperture w-10 h-10 text-ink" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-border bg-white" id="solutions">
<div className="max-w-[1600px] mx-auto px-6">
<div className="mb-16">
<span className="block text-xs font-mono mb-2 text-gray-400" style={{}}>03 — SOLUTIONS</span>
<h2 className="font-display text-4xl font-semibold tracking-tight text-ink">Business Solutions</h2>
</div>
<div className="divide-y divide-gray-100" style={{}}>

<div className="group py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-surface/50 transition-colors -mx-6 px-6">
<div className="md:col-span-4">
<h3 className="text-2xl font-display font-medium text-ink flex items-center gap-3">
<span className="w-2 h-2 bg-transparent border border-ink rounded-full group-hover:bg-ink transition-colors"></span>
                                Brand Narratives
                            </h3>
</div>
<div className="md:col-span-5">
<p className="text-lg text-ink-muted leading-relaxed">
                                We translate complex business goals into emotional stories. Ideal for product launches and rebrands seeking market differentiation.
                            </p>
</div>
<div className="md:col-span-3">
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-ink font-medium"><div className="w-1.5 h-1.5 bg-gray-300" style={{}}></div> Brand Films</li>
<li className="flex items-center gap-2 text-sm text-ink font-medium"><div className="w-1.5 h-1.5 bg-gray-300" style={{}}></div> Manifesto Videos</li>
<li className="flex items-center gap-2 text-sm text-ink font-medium"><div className="w-1.5 h-1.5 bg-gray-300" style={{}}></div> Visual Identity Systems</li>
</ul>
</div>
</div>

<div className="group py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-surface/50 transition-colors -mx-6 px-6">
<div className="md:col-span-4">
<h3 className="text-2xl font-display font-medium text-ink flex items-center gap-3">
<span className="w-2 h-2 bg-transparent border border-ink rounded-full group-hover:bg-ink transition-colors"></span>
                                Content Engines
                            </h3>
</div>
<div className="md:col-span-5">
<p className="text-lg text-ink-muted leading-relaxed">
                                High-volume, high-quality production pipelines for social channels. We build the system that keeps your brand top-of-mind.
                            </p>
</div>
<div className="md:col-span-3">
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-ink font-medium"><div className="w-1.5 h-1.5 bg-gray-300" style={{}}></div> Vertical Video (Reels/TikTok)</li>
<li className="flex items-center gap-2 text-sm text-ink font-medium"><div className="w-1.5 h-1.5 bg-gray-300" style={{}}></div> Podcast Production</li>
<li className="flex items-center gap-2 text-sm text-ink font-medium"><div className="w-1.5 h-1.5 bg-gray-300" style={{}}></div> Asset Libraries</li>
</ul>
</div>
</div>

<div className="group py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-surface/50 transition-colors -mx-6 px-6">
<div className="md:col-span-4">
<h3 className="text-2xl font-display font-medium text-ink flex items-center gap-3">
<span className="w-2 h-2 bg-transparent border border-ink rounded-full group-hover:bg-ink transition-colors"></span>
                                Growth Strategy
                            </h3>
</div>
<div className="md:col-span-5">
<p className="text-lg text-ink-muted leading-relaxed">
                                Beyond production. We analyze data to refine creative output, ensuring every frame contributes to conversion or retention.
                            </p>
</div>
<div className="md:col-span-3">
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-ink font-medium"><div className="w-1.5 h-1.5 bg-gray-300" style={{}}></div> Content Audit</li>
<li className="flex items-center gap-2 text-sm text-ink font-medium"><div className="w-1.5 h-1.5 bg-gray-300" style={{}}></div> Performance Analysis</li>
<li className="flex items-center gap-2 text-sm text-ink font-medium"><div className="w-1.5 h-1.5 bg-gray-300" style={{}}></div> Channel Strategy</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-surface relative overflow-hidden border-b border-border" id="process">
<div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block bg-gray-200" style={{}}></div>
<div className="max-w-[1200px] mx-auto px-6 relative">
<div className="text-center mb-20">
<span className="block text-xs font-mono mb-2 text-gray-400" style={{}}>04 — THE METHOD</span>
<h2 className="font-display text-4xl font-semibold text-ink">Precision Workflow</h2>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
<div className="md:text-right md:pr-16">
<h3 className="text-2xl font-display font-medium text-ink mb-2">Discovery</h3>
<p className="text-ink-muted">We map the terrain. Deep dive into brand values, audience psychology, and market gaps.</p>
</div>
<div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-ink z-10 bg-white"></div>
<div className="md:pl-16 md:col-start-2">
<span className="text-sm font-mono text-gray-400" style={{}}>Step 01 / The Map</span>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
<div className="hidden md:block md:text-right md:pr-16">
<span className="text-sm font-mono text-gray-400" style={{}}>Step 02 / The Compass</span>
</div>
<div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 bg-white border-gray-300" style={{}}></div>
<div className="md:pl-16">
<h3 className="text-2xl font-display font-medium text-ink mb-2">Concept</h3>
<p className="text-ink-muted">Strategic ideation. We develop scripts and storyboards that align with business OKRs.</p>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="md:text-right md:pr-16">
<h3 className="text-2xl font-display font-medium text-ink mb-2">Production</h3>
<p className="text-ink-muted">Execution with surgical precision. Top-tier crews, cinema-grade gear, efficiency first.</p>
</div>
<div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 bg-white border-gray-300" style={{}}></div>
<div className="md:pl-16 md:col-start-2">
<span className="text-sm font-mono text-gray-400" style={{}}>Step 03 / The Terrain</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-border bg-white" id="studio">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<span className="block text-xs font-mono mb-2 text-gray-400" style={{}}>05 — ECOSYSTEM</span>
<h2 className="font-display text-4xl font-semibold text-ink mb-6">Find Your Tribe</h2>
<p className="text-lg text-ink-muted mb-8 max-w-md">
                            We believe every creative leader aligns with a primal element. Understanding your archetype is the first step to scaling your vision.
                        </p>
<div className="flex gap-4 mb-8">
<div className="w-12 h-12 border flex items-center justify-center rounded-sm cursor-help border-gray-200 hover:bg-gray-50" style={{}} title="Air">
<svg className="lucide lucide-wind w-5 h-5 text-ink" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
</div>
<div className="w-12 h-12 border flex items-center justify-center rounded-sm cursor-help border-gray-200 hover:bg-gray-50" style={{}} title="Earth">
<svg className="lucide lucide-mountain w-5 h-5 text-ink" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
</div>
<div className="w-12 h-12 border flex items-center justify-center rounded-sm cursor-help border-gray-200 hover:bg-gray-50" style={{}} title="Fire">
<svg className="lucide lucide-flame w-5 h-5 text-ink" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<div className="w-12 h-12 border flex items-center justify-center rounded-sm cursor-help border-gray-200 hover:bg-gray-50" style={{}} title="Water">
<svg className="lucide lucide-waves w-5 h-5 text-ink" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
</div>
<a className="inline-flex items-center text-sm font-semibold text-ink border-b-2 pb-1 hover:text-accent hover:border-accent transition-colors border-black" href="#">
                            Join the Waitlist <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="relative h-[400px] rounded-sm overflow-hidden border border-border bg-gray-100" style={{}}>
<img alt="Team meeting" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 backdrop-blur px-4 py-2 rounded-sm border bg-white/90 border-gray-200" style={{}}>
<span className="text-xs font-mono font-medium text-ink">THE BREED HQ — 2024</span>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen grid grid-cols-1 lg:grid-cols-2" id="contact">

<div className="bg-ink p-12 md:p-24 flex flex-col justify-between text-white">
<div>
<h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tight mb-6">Let's build<br/>something iconic.</h2>
<p className="text-xl font-light max-w-md text-gray-400" style={{}}>No mediocre pitches. Only brands ready to dominate.</p>
</div>
<div className="space-y-8 mt-12">
<div>
<p className="text-xs font-mono text-gray-500 mb-1" style={{}}>EMAIL</p>
<a className="text-lg transition-colors hover:text-gray-300" href="mailto:hello@breedstudio.com" style={{}}>hello@breedstudio.com</a>
</div>
<div>
<p className="text-xs font-mono text-gray-500 mb-1" style={{}}>STUDIO</p>
<p className="text-lg text-gray-300" style={{}}>Architecture Ave, 404Design District, MX</p>
</div>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white" href="#" style={{}}><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-gray-400 hover:text-white" href="#" style={{}}><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-gray-400 hover:text-white" href="#" style={{}}><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</div>

<div className="p-12 md:p-24 flex flex-col justify-center border-l border-border bg-white">
<form className="space-y-10">
<div className="space-y-6">
<div className="relative">
<input className="peer w-full border-b py-3 bg-transparent text-lg text-ink focus:border-ink focus:outline-none placeholder-transparent border-gray-300" id="name" placeholder="Name" style={{}} type="text"/>
<label className="absolute left-0 -top-3 text-xs transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-ink text-gray-400" htmlFor="name" style={{}}>Full Name</label>
</div>
<div className="relative">
<input className="peer w-full border-b py-3 bg-transparent text-lg text-ink focus:border-ink focus:outline-none placeholder-transparent border-gray-300" id="email" placeholder="Email" style={{}} type="email"/>
<label className="absolute left-0 -top-3 text-xs transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-ink text-gray-400" htmlFor="email" style={{}}>Work Email</label>
</div>
</div>

<div>
<span className="block text-xs font-medium text-gray-500 mb-4 uppercase tracking-wide" style={{}}>Project Budget (USD)</span>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<label className="cursor-pointer">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="px-4 py-3 border rounded-sm text-sm text-center text-gray-500 peer-checked:bg-ink peer-checked:text-white peer-checked:border-ink transition-all border-gray-200 hover:border-gray-400" style={{}}>
                                    &lt;10k
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="px-4 py-3 border rounded-sm text-sm text-center text-gray-500 peer-checked:bg-ink peer-checked:text-white peer-checked:border-ink transition-all border-gray-200 hover:border-gray-400" style={{}}>
                                    10k-30k
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="px-4 py-3 border rounded-sm text-sm text-center text-gray-500 peer-checked:bg-ink peer-checked:text-white peer-checked:border-ink transition-all border-gray-200 hover:border-gray-400" style={{}}>
                                    30k-80k
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="px-4 py-3 border rounded-sm text-sm text-center text-gray-500 peer-checked:bg-ink peer-checked:text-white peer-checked:border-ink transition-all border-gray-200 hover:border-gray-400" style={{}}>
                                    80k+
                                </div>
</label>
</div>
</div>
<div className="relative">
<textarea className="peer w-full border-b py-3 bg-transparent text-lg text-ink focus:border-ink focus:outline-none placeholder-transparent border-gray-300" id="message" placeholder="Message" rows="3" style={{}}></textarea>
<label className="absolute left-0 -top-3 text-xs transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-ink text-gray-400" htmlFor="message" style={{}}>Tell us about the mission</label>
</div>
<button className="w-full bg-ink py-4 rounded-sm font-medium tracking-wide transition-all flex justify-center items-center gap-2 group text-white hover:bg-gray-800" style={{}} type="submit">
                        Initialize Conversation
                        <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</section>
<footer className="border-t border-border py-12 bg-white">
<div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500" style={{}}>
<p>© 2024 Breed Studio. All rights reserved.</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-ink" href="#">Privacy</a>
<a className="hover:text-ink" href="#">Terms</a>
<a className="hover:text-ink" href="#">Sitemap</a>
</div>
</div>
</footer>
</main>

<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
    </style>

    </>
  );
}

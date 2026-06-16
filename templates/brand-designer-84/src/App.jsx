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
      

<div className="ambient-glow top-[-10%] left-[-10%] w-[50vw] h-[50vw]"></div>
<div className="ambient-glow top-[40%] right-[-20%] w-[60vw] h-[60vw] opacity-50 delay-1000"></div>

<header className="fixed top-0 left-0 w-full z-50 glass-panel border-x-0 border-t-0 border-b">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl tracking-tighter font-medium uppercase text-white hover:opacity-70 transition-opacity" href="#">
                A.D
            </a>

<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#insights">Insights</a>
</nav>

<div className="flex items-center gap-6">

<div className="group relative cursor-pointer text-xs font-medium text-neutral-400 tracking-widest uppercase">
<span className="flex items-center gap-1 hover:text-white transition-colors">
                        EN <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
<div className="absolute top-full right-0 mt-2 w-24 glass-panel rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
<span className="px-4 py-1 hover:bg-white/5 text-white transition-colors">EN</span>
<span className="px-4 py-1 hover:bg-white/5 transition-colors">FR</span>
<span className="px-4 py-1 hover:bg-white/5 transition-colors">AR</span>
</div>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-black bg-white px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]" href="#booking">
                    Book Appointment
                </a>

<button className="md:hidden text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden z-10">
<div className="max-w-5xl mx-auto text-center flex flex-col items-center">
<div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-neutral-300 mb-8 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                Available for selected projects Q3
            </div>
<h1 className="animate-fade-up delay-100 font-editorial text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-white mb-6">
                Crafting brand identities <br/>
<span className="italic text-neutral-400">with depth &amp; presence</span>
</h1>
<p className="animate-fade-up delay-200 text-base md:text-lg text-neutral-400 max-w-2xl font-normal leading-relaxed mb-10">
                Strategic branding and visual direction for ambitious founders, luxury studios, and modern businesses seeking to establish an unforgettable digital footprint.
            </p>
<div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-medium text-black bg-white px-8 py-3.5 rounded-full hover:scale-105 transition-transform duration-300" href="#booking">
                    Start a Project
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-medium text-white glass-panel px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors" href="#work">
                    View Selected Work
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none"></div>
</section>

<section className="py-32 px-6 z-10 relative relative" id="about">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden glass-panel p-2">

<div className="w-full h-full bg-neutral-900 rounded-xl relative overflow-hidden group">
<img alt="Abstract Studio Texture" className="w-full h-full object-cover grayscale opacity-60 img-hover-scale mix-blend-luminosity" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
</div>
</div>
</div>
<div className="lg:col-span-7 flex flex-col items-start">
<span className="text-xs uppercase tracking-widest text-neutral-500 mb-6 font-medium">The Philosophy</span>
<h2 className="font-editorial text-4xl md:text-6xl tracking-tight text-white mb-8 leading-tight">
                    I believe a brand is more than a logo. It’s a <span className="italic text-neutral-400">strategic ecosystem.</span>
</h2>
<div className="space-y-6 text-sm md:text-base text-neutral-400 font-normal leading-relaxed max-w-xl">
<p>
                        With over a decade of experience in visual strategy and high-end design, I partner with visionary clients to build cohesive brand systems. My approach merges analytical strategy with refined aesthetic intuition.
                    </p>
<p>
                        I don't just design for aesthetics; I design for positioning. Every typographic choice, color nuance, and structural element is meticulously crafted to elevate your market presence and resonate with your target audience.
                    </p>
</div>
<a className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/20 pb-1 hover:border-white transition-colors" href="#about-full">
                    Read full story
                    <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 z-10 relative" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-editorial text-5xl md:text-6xl tracking-tight text-white mb-4">Selected Work</h2>
<p className="text-sm text-neutral-400 font-normal">A curated showcase of recent brand transformations.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white glass-panel px-6 py-3 rounded-full hover:bg-white/10 transition-colors shrink-0" href="#all-work">
                    View Archive
                </a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<a className="group block relative rounded-2xl overflow-hidden glass-panel bg-neutral-900/40 border-white/5" href="#project-1">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Aura Skincare" className="w-full h-full object-cover img-hover-scale opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
<div className="flex items-center gap-3 text-xs font-medium text-neutral-300 mb-3 tracking-widest uppercase">
<span>Identity</span>
<span className="w-1 h-1 rounded-full bg-white/30"></span>
<span>Packaging</span>
</div>
<h3 className="font-editorial text-3xl tracking-tight text-white mb-2">Aura Botanica</h3>
<p className="text-sm text-neutral-400 font-normal transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            Rebranding a luxury organic skincare line focusing on minimalist elegance.
                        </p>
</div>
</a>

<a className="group block relative rounded-2xl overflow-hidden glass-panel bg-neutral-900/40 border-white/5 md:translate-y-12" href="#project-2">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Fintech Brand" className="w-full h-full object-cover img-hover-scale opacity-80 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
<div className="flex items-center gap-3 text-xs font-medium text-neutral-300 mb-3 tracking-widest uppercase">
<span>Strategy</span>
<span className="w-1 h-1 rounded-full bg-white/30"></span>
<span>Digital App</span>
</div>
<h3 className="font-editorial text-3xl tracking-tight text-white mb-2">Nexus Finance</h3>
<p className="text-sm text-neutral-400 font-normal transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            Establishing trust through visual clarity for a modern wealth platform.
                        </p>
</div>
</a>

<a className="group block relative rounded-2xl overflow-hidden glass-panel bg-neutral-900/40 border-white/5" href="#project-3">
<div className="aspect-[4/3] overflow-hidden bg-[#111]">
<div className="w-full h-full flex items-center justify-center img-hover-scale">
<h4 className="font-editorial text-6xl text-white opacity-80">Maison</h4>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
<div className="flex items-center gap-3 text-xs font-medium text-neutral-300 mb-3 tracking-widest uppercase">
<span>Naming</span>
<span className="w-1 h-1 rounded-full bg-white/30"></span>
<span>Art Direction</span>
</div>
<h3 className="font-editorial text-3xl tracking-tight text-white mb-2">Maison L'Art</h3>
<p className="text-sm text-neutral-400 font-normal transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            Curated visual direction for an exclusive architectural firm.
                        </p>
</div>
</a>

<a className="group block relative rounded-2xl overflow-hidden glass-panel bg-neutral-900/40 border-white/5 md:translate-y-12" href="#project-4">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Coffee Roasters" className="w-full h-full object-cover img-hover-scale opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
<div className="flex items-center gap-3 text-xs font-medium text-neutral-300 mb-3 tracking-widest uppercase">
<span>Brand System</span>
</div>
<h3 className="font-editorial text-3xl tracking-tight text-white mb-2">Onyx Collective</h3>
<p className="text-sm text-neutral-400 font-normal transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            A bold, typographic-led identity for specialty coffee roasters.
                        </p>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 z-10 relative bg-neutral-900/10 border-y border-white/5 mt-12" id="process">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs uppercase tracking-widest text-neutral-500 mb-4 block font-medium">Expertise</span>
<h2 className="font-editorial text-4xl md:text-5xl tracking-tight text-white">How I build brands</h2>
</div>
<div className="flex flex-col">

<div className="group border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors px-4 rounded-xl -mx-4">
<div className="flex items-start gap-8">
<span className="font-editorial text-2xl text-neutral-600 group-hover:text-white transition-colors">01</span>
<div>
<h3 className="text-xl tracking-tight text-white font-medium mb-2">Brand Strategy</h3>
<p className="text-sm text-neutral-400 font-normal max-w-md">Positioning, audience research, tone of voice, and defining the core narrative before visuals begin.</p>
</div>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white text-2xl transition-colors md:self-center self-end" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>

<div className="group border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors px-4 rounded-xl -mx-4">
<div className="flex items-start gap-8">
<span className="font-editorial text-2xl text-neutral-600 group-hover:text-white transition-colors">02</span>
<div>
<h3 className="text-xl tracking-tight text-white font-medium mb-2">Visual Identity System</h3>
<p className="text-sm text-neutral-400 font-normal max-w-md">Logo marks, typography curation, color palettes, and comprehensive brand guidelines.</p>
</div>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white text-2xl transition-colors md:self-center self-end" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>

<div className="group border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors px-4 rounded-xl -mx-4">
<div className="flex items-start gap-8">
<span className="font-editorial text-2xl text-neutral-600 group-hover:text-white transition-colors">03</span>
<div>
<h3 className="text-xl tracking-tight text-white font-medium mb-2">Digital Brand Experience</h3>
<p className="text-sm text-neutral-400 font-normal max-w-md">Translating the brand into premium web experiences, UI/UX direction, and digital assets.</p>
</div>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white text-2xl transition-colors md:self-center self-end" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>

<div className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors px-4 rounded-xl -mx-4">
<div className="flex items-start gap-8">
<span className="font-editorial text-2xl text-neutral-600 group-hover:text-white transition-colors">04</span>
<div>
<h3 className="text-xl tracking-tight text-white font-medium mb-2">Art Direction &amp; Packaging</h3>
<p className="text-sm text-neutral-400 font-normal max-w-md">Curating photography style, physical touchpoints, and unboxing experiences for luxury goods.</p>
</div>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white text-2xl transition-colors md:self-center self-end" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 z-10 relative">
<div className="max-w-5xl mx-auto glass-panel p-12 md:p-20 rounded-3xl relative overflow-hidden text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
<iconify-icon className="text-4xl text-neutral-600 mb-8 mx-auto" icon="solar:quote-left-linear"></iconify-icon>
<h3 className="font-editorial text-3xl md:text-5xl tracking-tight text-white leading-tight mb-8">
                "Working with this studio elevated our entire business model. The identity isn't just beautiful—it communicates authority and has directly impacted our ability to close high-ticket clients."
            </h3>
<div className="flex flex-col items-center gap-1">
<span className="text-sm font-medium text-white tracking-tight">Elena Rostova</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Founder, Maison L'Art</span>
</div>
</div>
</section>

<section className="py-24 px-6 z-10 relative" id="insights">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="font-editorial text-4xl tracking-tight text-white">Insights &amp; Notes</h2>
<a className="text-xs uppercase tracking-widest text-neutral-400 font-medium hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 hidden md:block" href="#blog">All Articles</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<a className="group block glass-panel p-6 rounded-2xl hover:bg-white/[0.04] transition-colors" href="#">
<span className="text-xs text-neutral-500 font-medium mb-4 block">Branding • Oct 12</span>
<h3 className="text-lg font-medium text-white tracking-tight mb-3 group-hover:text-neutral-300 transition-colors">The difference between a logo and an identity system</h3>
<p className="text-sm text-neutral-400 font-normal line-clamp-2">Why paying for just a logo is a disservice to your business growth and how systems scale.</p>
</a>

<a className="group block glass-panel p-6 rounded-2xl hover:bg-white/[0.04] transition-colors" href="#">
<span className="text-xs text-neutral-500 font-medium mb-4 block">Strategy • Sep 28</span>
<h3 className="text-lg font-medium text-white tracking-tight mb-3 group-hover:text-neutral-300 transition-colors">Color psychology in luxury market positioning</h3>
<p className="text-sm text-neutral-400 font-normal line-clamp-2">Moving beyond black and white: how muted tones build trust and perceive high value.</p>
</a>

<a className="group block glass-panel p-6 rounded-2xl hover:bg-white/[0.04] transition-colors" href="#">
<span className="text-xs text-neutral-500 font-medium mb-4 block">Design • Sep 04</span>
<h3 className="text-lg font-medium text-white tracking-tight mb-3 group-hover:text-neutral-300 transition-colors">Typography as the voice of modern founders</h3>
<p className="text-sm text-neutral-400 font-normal line-clamp-2">Selecting the right serif to communicate heritage vs a sans-serif to communicate innovation.</p>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 z-10 relative bg-[#010101] border-t border-white/5" id="booking">
<div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">

<div className="lg:col-span-2 flex flex-col justify-between">
<div>
<h2 className="font-editorial text-5xl tracking-tight text-white mb-6">Let's talk about your brand.</h2>
<p className="text-sm text-neutral-400 font-normal mb-12 max-w-sm leading-relaxed">
                        Currently accepting new projects for Q4. Fill out the form or book a direct discovery consultation to discuss your vision.
                    </p>
<div className="space-y-6">

<div className="glass-panel p-6 rounded-2xl">
<h4 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-4">Direct Inquiry</h4>
<a className="flex items-center gap-3 text-lg font-medium text-white hover:opacity-70 transition-opacity mb-2" href="mailto:hello@studio.com">
<iconify-icon icon="solar:letter-linear"></iconify-icon> hello@studio.com
                            </a>
<div className="flex gap-4 mt-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white" href="#">
<iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white" href="#">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</a>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl">
<h4 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-2">Workspace</h4>
<p className="text-sm text-white font-medium">By Appointment Only</p>
<p className="text-sm text-neutral-400 mt-1">Design District, London, UK<br/>Mon-Fri, 10am - 6pm</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 glass-panel p-8 md:p-12 rounded-3xl relative">

<div className="flex border-b border-white/10 mb-8">
<button className="px-6 py-3 text-sm font-medium text-white border-b-2 border-white -mb-[1px]">Project Inquiry</button>
<button className="px-6 py-3 text-sm font-medium text-neutral-500 hover:text-white transition-colors">Book Consultation</button>
</div>
<form className="space-y-8">
<div className="grid md:grid-cols-2 gap-8">

<div className="relative group">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder-transparent transition-colors peer" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 top-3 text-sm text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="name">Your Name</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder-transparent transition-colors peer" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 top-3 text-sm text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="email">Email Address</label>
</div>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder-transparent transition-colors peer" id="company" placeholder="Company" type="text"/>
<label className="absolute left-0 top-3 text-sm text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="company">Brand / Company Name</label>
</div>

<div className="relative">
<label className="text-xs text-neutral-500 block mb-2">Project Type</label>
<select className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none appearance-none cursor-pointer">
<option className="bg-neutral-900" value="full">Full Brand Identity System</option>
<option className="bg-neutral-900" value="rebrand">Rebranding &amp; Strategy</option>
<option className="bg-neutral-900" value="digital">Digital / Web Direction</option>
<option className="bg-neutral-900" value="packaging">Packaging &amp; Art Direction</option>
</select>
<iconify-icon className="absolute right-0 top-8 text-neutral-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<label className="text-xs text-neutral-500">Budget Range (USD)</label>
<span className="text-sm font-medium text-white">$10k - $25k+</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full relative">
<div className="absolute left-[20%] right-[40%] h-full bg-white rounded-full"></div>
<div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] cursor-pointer"></div>
<div className="absolute right-[40%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] cursor-pointer"></div>
</div>
</div>
<div className="relative group pt-4">
<textarea className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder-transparent transition-colors peer resize-none" id="message" placeholder="Message" rows="3"></textarea>
<label className="absolute left-0 top-6 text-sm text-neutral-500 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs" htmlFor="message">Project Details</label>
</div>

<label className="flex items-center gap-3 cursor-pointer group w-fit">
<div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center group-hover:border-white transition-colors relative">

<input className="absolute opacity-0 w-full h-full cursor-pointer peer" type="checkbox"/>
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-neutral-400">I agree to the privacy policy</span>
</label>
<button className="w-full bg-white text-black font-medium text-sm py-4 rounded-xl hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] flex justify-center items-center gap-2" type="button">
                        Submit Inquiry <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#030303] relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<span className="text-lg tracking-tighter font-medium uppercase text-white">A.D</span>
<span className="text-neutral-600 text-sm">© 2024</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-neutral-500 tracking-widest uppercase">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Behance</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="text-xs text-neutral-600">
                Designed &amp; Built globally.
            </div>
</div>
</footer>

    </>
  );
}

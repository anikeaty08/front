import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'qms-blue': '#0B1629',
'qms-light': '#152238',
'skin-light': '#F3F4F6',
'accent-gold': '#D4AF37',
'tech-cyan': '#67E8F9',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'holographic': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
},
boxShadow: {
'neon': '0 0 15px rgba(103, 232, 249, 0.3)',
}
}
}
}
document.addEventListener('DOMContentLoaded', () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animate-fade-in-up');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-on-scroll').forEach(el => {
el.style.opacity = 0;
observer.observe(el);
});
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIiBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuMDUiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iIzFmMjYzZSIvPjwvc3ZnPg==')] opacity-40"></div>
</div>

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 p-6 mix-blend-difference text-white/20 hidden lg:block">
<div className="absolute top-8 left-8 font-mono text-[10px] tracking-widest flex flex-col gap-1">
<span>SYS.STATUS: ONLINE</span>
<span>LOC: LONDON.UK</span>
</div>
<div className="absolute top-8 right-8 font-mono text-[10px] tracking-widest flex flex-col gap-1 text-right">
<span>TEMP: 36.6°C</span>
<span>BIO.SYNC: ACTIVE</span>
</div>
<div className="absolute bottom-8 left-8">
<iconify-icon className="opacity-30 animate-pulse" icon="lucide:fingerprint" width="32"></iconify-icon>
</div>
<div className="absolute bottom-8 right-8 w-24 h-24 border border-white/10 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
</div>

<nav className="fixed w-full z-50 glass-panel border-b border-white/40 transition-all duration-300">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 bg-qms-blue rounded-sm flex items-center justify-center text-white relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-accent-gold to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
<span className="z-10 text-lg italic font-serif relative">F</span>
</div>
<div className="flex flex-col">
<span className="text-qms-blue uppercase text-xs font-bold tracking-[0.25em]">Future Skin</span>
<span className="text-[8px] font-mono text-slate-400 tracking-widest uppercase group-hover:text-accent-gold transition-colors">Skin Science</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase font-semibold text-slate-500">
<a className="hover:text-qms-blue transition-colors relative group" href="#philosophy">
<span className="group-hover:opacity-0 transition-opacity">Philosophy</span>
</a>
<a className="hover:text-qms-blue transition-colors" href="#treatments">Protocols</a>
<a className="hover:text-qms-blue transition-colors" href="#qms">Technology</a>
</div>
<a className="hidden md:flex items-center gap-3 px-5 py-2 text-[10px] tracking-[0.2em] uppercase font-bold text-white bg-qms-blue hover:bg-slate-800 transition-all duration-300 rounded-sm shadow-lg hover:shadow-neon group overflow-hidden relative" href="#book">
<span className="relative z-10 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tech-cyan animate-pulse shadow-[0_0_8px_#67E8F9]"></span>
                    Book Analysis
                </span>
<div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_infinite]"></div>
</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Skin Macro" className="w-full h-full object-cover opacity-20 scale-105 filter hue-rotate-15 saturate-0 contrast-125" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-skin-light"></div>

<div className="[mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pt-20 pr-6 pl-6 relative">

<div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up border border-qms-blue/10 px-6 py-2 rounded-full bg-white/40 backdrop-blur-md shadow-sm group hover:border-accent-gold/50 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-cyan opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tech-cyan"></span>
</span>
<span className="font-mono text-[10px] uppercase tracking-[0.25em] text-qms-blue font-medium">Accepting New Clients</span>
</div>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-qms-blue leading-[0.9] tracking-tight mb-8 animate-fade-in-up delay-100 drop-shadow-sm mix-blend-darken">
                Bio-Identical <br/>
<span className="relative inline-block">
<span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-qms-blue via-slate-600 to-qms-blue animate-[textShine_3s_ease_infinite]">Perfection</span>

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] stroke-accent-gold/30 fill-none" viewbox="0 0 100 20">
<ellipse cx="50" cy="10" rx="48" ry="8" strokeWidth="0.5"></ellipse>
</svg>
</span>
</h1>
<p className="font-sans text-sm md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-12 tracking-wide animate-fade-in-up delay-200">
                Where clinical microneedling meets molecular biology. <br className="hidden md:block"/>
<span className="font-mono text-xs text-slate-400 mt-2 block">DATA-DRIVEN RESULTS FOR THE MODERN WOMAN.</span>
</p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
<a className="group relative w-64 h-14 bg-qms-blue flex items-center justify-center text-white text-xs tracking-[0.2em] uppercase overflow-hidden shadow-2xl hover:shadow-neon transition-all duration-300" href="#book">
<div className="absolute inset-0 bg-gradient-to-r from-tech-cyan/0 via-tech-cyan/30 to-tech-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0"></div>
<span className="relative z-10 font-bold flex items-center gap-3">
                        Initialize Booking
                        <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</span>

<span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"></span>
<span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"></span>
</a>
</div>

<div className="mt-20 border-t border-slate-200/50 pt-8 animate-fade-in-up delay-300">
<div className="flex justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<span className="font-mono text-xs text-slate-400">FEATURING PROTOCOLS FROM:</span>
<iconify-icon className="" icon="simple-icons:vogue" width="50"></iconify-icon>
<span className="text-lg font-bold tracking-tighter">ABC</span>
<iconify-icon icon="simple-icons:elle" width="40"></iconify-icon>
</div>
</div>
</div>
</header>

<section className="py-32 bg-qms-blue relative overflow-hidden" id="qms">

<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-on-scroll" style={{opacity: '0'}}>
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 bg-tech-cyan rounded-full animate-pulse"></span>
<span className="font-mono text-tech-cyan text-[10px] tracking-[0.2em] uppercase">Algorithm 3.0</span>
</div>
<h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Molecular <span className="italic text-slate-400">Engineering</span></h2>
<p className="text-slate-300 max-w-lg text-sm font-light leading-relaxed">
                        Skin is not magic; it is biology. Our proprietary 3-phase system recalibrates your epidermal structure using collagen-identical molecules.
                    </p>
</div>

<div className="hidden md:block p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm">
<div className="flex gap-8 text-center">
<div>
<span className="block font-mono text-2xl text-tech-cyan">97%</span>
<span className="text-[9px] uppercase tracking-wider text-slate-400">Absorption</span>
</div>
<div>
<span className="block font-mono text-2xl text-tech-cyan">+40%</span>
<span className="text-[9px] uppercase tracking-wider text-slate-400">Elasticity</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-tech p-8 group hover:-translate-y-2 transition-all duration-500 rounded-sm relative overflow-hidden reveal-on-scroll delay-100" style={{opacity: '0'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tech-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-white/80 group-hover:text-tech-cyan transition-colors" icon="lucide:flask-conical" strokeWidth="1" width="32"></iconify-icon>
<span className="font-mono text-[10px] text-slate-500">PHASE.01</span>
</div>
<h3 className="font-sans font-medium text-xl text-white mb-3">Controlled Exfoliation</h3>
<p className="text-slate-400 text-xs leading-loose">
                        Fruit acid complexes dissolve the intracellular glue, creating micro-channels for active ingredient delivery without damaging the lipid barrier.
                    </p>
</div>

<div className="glass-tech p-8 group hover:-translate-y-2 transition-all duration-500 rounded-sm relative overflow-hidden reveal-on-scroll delay-200" style={{opacity: '0'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tech-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-white/80 group-hover:text-tech-cyan transition-colors" icon="lucide:dna" strokeWidth="1" width="32"></iconify-icon>
<span className="font-mono text-[10px] text-slate-500">PHASE.02</span>
</div>
<h3 className="font-sans font-medium text-xl text-white mb-3">Collagen Infusion</h3>
<p className="text-slate-400 text-xs leading-loose">
                        Introduction of bio-identical soluble collagens. Unlike standard hydrolyzed collagen, this maintains triple-helix structure for maximum integration.
                    </p>
</div>

<div className="glass-tech p-8 group hover:-translate-y-2 transition-all duration-500 rounded-sm relative overflow-hidden reveal-on-scroll delay-300" style={{opacity: '0'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tech-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-white/80 group-hover:text-tech-cyan transition-colors" icon="lucide:shield-check" strokeWidth="1" width="32"></iconify-icon>
<span className="font-mono text-[10px] text-slate-500">PHASE.03</span>
</div>
<h3 className="font-sans font-medium text-xl text-white mb-3">Cellular Defense</h3>
<p className="text-slate-400 text-xs leading-loose">
                        Locking in moisture and creating a breathable shield against environmental oxidative stress and urban pollution.
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-xs font-mono text-tech-cyan hover:text-white transition-colors uppercase tracking-widest border-b border-tech-cyan/30 pb-1" href="#book">
                    View Technical Specifications <iconify-icon icon="lucide:chevron-right"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 relative bg-skin-light overflow-hidden" id="treatments">

<div className="absolute -left-20 top-40 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px] mix-blend-multiply"></div>
<div className="absolute -right-20 bottom-40 w-96 h-96 bg-accent-gold/10 rounded-full blur-[100px] mix-blend-multiply"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll" style={{opacity: '0'}}>
<div className="">
<span className="font-mono text-qms-blue text-[10px] uppercase tracking-[0.2em] mb-4 block">Service Menu</span>
<h2 className="font-serif text-5xl md:text-6xl text-qms-blue">Active Protocols</h2>
</div>
<div className="hidden md:flex gap-4">
<span className="px-4 py-1 border border-qms-blue/20 rounded-full text-[10px] uppercase tracking-widest text-slate-500">Facial</span>
<span className="px-4 py-1 border border-qms-blue/20 rounded-full text-[10px] uppercase tracking-widest text-slate-500">Body</span>
<span className="px-4 py-1 border border-qms-blue/20 rounded-full text-[10px] uppercase tracking-widest text-slate-500">Tech</span>
</div>
</div>
<div className="space-y-6">

<div className="group relative bg-white border border-white/50 hover:border-tech-cyan/50 p-8 shadow-sm hover:shadow-glow-blue transition-all duration-300 rounded-sm overflow-hidden reveal-on-scroll delay-100 cursor-pointer" style={{opacity: '0'}}>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-cyan/5 to-transparent translate-y-[-100%] group-hover:animate-scan"></div>
<div className="flex flex-col md:flex-row justify-between relative z-10">
<div className="flex-1">
<div className="flex items-center gap-4 mb-2">
<h3 className="font-serif text-2xl text-qms-blue group-hover:text-tech-cyan transition-colors">Collagen Rejuvenation</h3>
<iconify-icon className="text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:sparkles"></iconify-icon>
</div>
<p className="text-slate-500 text-sm font-light max-w-xl">Deep-pore cleanse, 70% fruit acid exfoliation, algae mask, bio-active serum lock.</p>
</div>
<div className="mt-4 md:mt-0 text-right">
<p className="font-mono text-lg text-qms-blue">£180</p>
<p className="text-[10px] uppercase tracking-widest text-slate-400">75 Minutes</p>
</div>
</div>
<div className="mt-6 border-t border-slate-100 pt-4 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
<span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">INTENSITY: MODERATE</span>
<span className="text-xs uppercase font-bold text-qms-blue flex items-center gap-1 group-hover:translate-x-2 transition-transform">Book <iconify-icon icon="lucide:arrow-right"></iconify-icon></span>
</div>
</div>

<div className="group relative bg-white border border-white/50 hover:border-tech-cyan/50 p-8 shadow-sm hover:shadow-glow-blue transition-all duration-300 rounded-sm overflow-hidden reveal-on-scroll delay-200 cursor-pointer" style={{opacity: '0'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-cyan/5 to-transparent translate-y-[-100%] group-hover:animate-scan"></div>
<div className="flex flex-col md:flex-row justify-between relative z-10">
<div className="flex-1">
<div className="flex items-center gap-4 mb-2">
<h3 className="font-serif text-2xl text-qms-blue group-hover:text-tech-cyan transition-colors">Advanced Microneedling</h3>
<span className="bg-accent-gold/10 text-accent-gold text-[8px] px-2 py-0.5 rounded uppercase tracking-wider font-bold">Best Results</span>
</div>
<p className="text-slate-500 text-sm font-light max-w-xl">Clinical collagen induction. Sterile medical-grade needles stimulate natural repair mechanisms.</p>
</div>
<div className="mt-4 md:mt-0 text-right">
<p className="font-mono text-lg text-qms-blue">£220</p>
<p className="text-[10px] uppercase tracking-widest text-slate-400">60 Minutes</p>
</div>
</div>
<div className="mt-6 border-t border-slate-100 pt-4 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
<span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">INTENSITY: HIGH</span>
<span className="text-xs uppercase font-bold text-qms-blue flex items-center gap-1 group-hover:translate-x-2 transition-transform">Book <iconify-icon icon="lucide:arrow-right"></iconify-icon></span>
</div>
</div>

<div className="group relative bg-white border border-white/50 hover:border-tech-cyan/50 p-8 shadow-sm hover:shadow-glow-blue transition-all duration-300 rounded-sm overflow-hidden reveal-on-scroll delay-300 cursor-pointer" style={{opacity: '0'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-cyan/5 to-transparent translate-y-[-100%] group-hover:animate-scan"></div>
<div className="flex flex-col md:flex-row justify-between relative z-10">
<div className="flex-1">
<div className="flex items-center gap-4 mb-2">
<h3 className="font-serif text-2xl text-qms-blue group-hover:text-tech-cyan transition-colors">The 'Red Carpet' Sculpt</h3>
</div>
<p className="text-slate-500 text-sm font-light max-w-xl">Radio-frequency tightening + lymphatic drainage. Instant lift, de-puff, and glow. Zero downtime.</p>
</div>
<div className="mt-4 md:mt-0 text-right">
<p className="font-mono text-lg text-qms-blue">£250</p>
<p className="text-[10px] uppercase tracking-widest text-slate-400">90 Minutes</p>
</div>
</div>
<div className="mt-6 border-t border-slate-100 pt-4 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
<span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">INTENSITY: LOW</span>
<span className="text-xs uppercase font-bold text-qms-blue flex items-center gap-1 group-hover:translate-x-2 transition-transform">Book <iconify-icon icon="lucide:arrow-right"></iconify-icon></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-qms-light text-white relative overflow-hidden" id="book">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-qms-light to-qms-light"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-cyan to-transparent opacity-30"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 reveal-on-scroll" style={{opacity: '0'}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="">
<span className="text-tech-cyan font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block">Secure Connection</span>
<h2 className="font-serif text-5xl mb-6">Start Your Transformation</h2>
<p className="text-slate-300 font-light mb-8 text-sm leading-relaxed">
                        Data-driven skin analysis ensures your protocol is calibrated to your specific biological needs. Slots are limited to ensure precision.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 text-xs font-mono text-slate-400">
<iconify-icon className="text-tech-cyan" icon="lucide:check-circle"></iconify-icon>
<span className="">Advanced Digital Analysis Included</span>
</div>
<div className="flex items-center gap-4 text-xs font-mono text-slate-400">
<iconify-icon className="text-tech-cyan" icon="lucide:check-circle"></iconify-icon>
<span className="">Customized Product Prescription</span>
</div>
<div className="flex items-center gap-4 text-xs font-mono text-slate-400">
<iconify-icon className="text-tech-cyan" icon="lucide:check-circle"></iconify-icon>
<span className="">Long-term Treatment Roadmap</span>
</div>
</div>
</div>

<div className="glass-tech p-8 rounded-sm border border-white/10 relative">

<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-tech-cyan"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-tech-cyan"></div>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="group">
<label className="block text-[9px] uppercase tracking-widest text-slate-500 mb-1 ml-1 group-focus-within:text-tech-cyan transition-colors">First Name</label>
<input className="w-full bg-slate-900/50 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-tech-cyan focus:bg-slate-900/80 transition-all rounded-sm font-mono" type="text"/>
</div>
<div className="group">
<label className="block text-[9px] uppercase tracking-widest text-slate-500 mb-1 ml-1 group-focus-within:text-tech-cyan transition-colors">Last Name</label>
<input className="w-full bg-slate-900/50 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-tech-cyan focus:bg-slate-900/80 transition-all rounded-sm font-mono" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-[9px] uppercase tracking-widest text-slate-500 mb-1 ml-1 group-focus-within:text-tech-cyan transition-colors">Email Coordinates</label>
<input className="w-full bg-slate-900/50 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-tech-cyan focus:bg-slate-900/80 transition-all rounded-sm font-mono" type="email"/>
</div>
<div className="group">
<label className="block text-[9px] uppercase tracking-widest text-slate-500 mb-1 ml-1 group-focus-within:text-tech-cyan transition-colors">Target Concern</label>
<select className="w-full bg-slate-900/50 border border-slate-700 p-3 text-sm text-slate-300 focus:outline-none focus:border-tech-cyan focus:bg-slate-900/80 transition-all rounded-sm font-mono appearance-none">
<option>Pigmentation</option>
<option>Anti-Aging / Firmness</option>
<option>Acne / Texture</option>
<option>General Radiance</option>
</select>
</div>
<button className="w-full bg-tech-cyan text-qms-blue py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors relative overflow-hidden group mt-4" type="button">
<span className="relative z-10 flex items-center justify-center gap-2">
                                Confirm Request <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="text-center md:text-left">
<p className="text-3xl text-white tracking-wide font-serif mb-2">Joanne Doe</p>
<p className="text-[9px] text-slate-500 uppercase tracking-[0.3em] font-mono">Future Skin Science London</p>
</div>
<div className="flex gap-8">
<a className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-tech-cyan hover:text-qms-blue hover:border-tech-cyan transition-all duration-300" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-tech-cyan hover:text-qms-blue hover:border-tech-cyan transition-all duration-300" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-tech-cyan hover:text-qms-blue hover:border-tech-cyan transition-all duration-300" href="#">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 font-mono uppercase tracking-widest">
<p>© 2023 System Active.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-tech-cyan transition-colors" href="#">Privacy Protocol</a>
<a className="hover:text-tech-cyan transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

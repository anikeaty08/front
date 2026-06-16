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
      

<header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
<div className="flex items-center gap-8">

<a className="font-['Space_Grotesk'] text-xl font-medium tracking-tighter text-white" href="#">
                    MASTREX
                </a>

<nav className="hidden md:flex gap-6 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#">Machines</a>
<a className="hover:text-white transition-colors" href="#">Materials</a>
<a className="hover:text-white transition-colors" href="#">Software</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</nav>
</div>
<div className="flex items-center gap-4 text-sm">
<div className="hidden sm:flex items-center gap-2 text-xs text-neutral-500 mr-4">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Made in USA</span>
</div>
<a className="hidden md:block hover:text-white transition-colors font-normal" href="#">Sign In</a>
<a className="bg-[#E0301E] text-white px-4 py-2 rounded-sm font-normal hover:bg-[#c92a1a] transition-colors flex items-center gap-2" href="#">
                    Get a Quote
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40 border-b border-neutral-900 bg-grid">

<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 to-neutral-950"></div>
<div className="relative mx-auto max-w-7xl px-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs text-neutral-300 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#E0301E] animate-pulse"></span>
                        Introducing the M-Series Pro
                    </div>
<h1 className="font-['Space_Grotesk'] text-5xl lg:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-6">
                        Industrial precision.<br/>
<span className="text-neutral-500">Engineered for scale.</span>
</h1>
<p className="text-base lg:text-lg text-neutral-400 font-light max-w-xl mb-10 leading-relaxed">
                        High-performance additive manufacturing systems built in the USA. Designed for the factory floor, delivering uncompromising reliability and micron-level accuracy.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-white text-neutral-950 px-6 py-3 rounded-sm text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="#">
                            Explore Machines
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="border border-neutral-800 bg-neutral-950/50 px-6 py-3 rounded-sm text-sm font-normal text-white hover:border-neutral-600 transition-colors flex items-center justify-center backdrop-blur-sm" href="#">
                            View Technical Specs
                        </a>
</div>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block opacity-40 pointer-events-none">
<div className="w-full h-full border border-neutral-800 rounded-full absolute top-0 right-[-200px] flex items-center justify-center">
<div className="w-3/4 h-3/4 border border-[#E0301E]/20 rounded-full flex items-center justify-center">
<div className="w-1/2 h-1/2 border border-neutral-800 rounded-full"></div>
</div>
</div>

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-800"></div>
<div className="absolute top-0 left-1/2 w-[1px] h-full bg-neutral-800"></div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-['Space_Grotesk'] text-3xl font-medium tracking-tight text-white mb-4">Core Architecture</h2>
<p className="text-sm text-neutral-400 max-w-md font-light">
                            Every Mastrex system is built on a rigid aerospace-grade aluminum chassis, ensuring dimensional stability under thermal stress.
                        </p>
</div>
<a className="text-[#E0301E] text-sm hover:text-white transition-colors flex items-center gap-1" href="#">
                        Download Whitepaper <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">

<div className="bg-neutral-950 p-10 hover:bg-neutral-900/50 transition-colors group">
<div className="w-12 h-12 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-[#E0301E] group-hover:border-[#E0301E]/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:ruler-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] text-xl font-medium tracking-tight text-white mb-3">Micron Precision</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                            Closed-loop servo motors and linear encoders deliver repeatable accuracy down to ±15 microns across the entire build envelope.
                        </p>
</div>

<div className="bg-neutral-950 p-10 hover:bg-neutral-900/50 transition-colors group">
<div className="w-12 h-12 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-[#E0301E] group-hover:border-[#E0301E]/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:flame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] text-xl font-medium tracking-tight text-white mb-3">High-Temp Capability</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                            Actively heated chambers up to 250°C and dual extruders reaching 500°C for engineering-grade thermoplastics like PEEK and ULTEM.
                        </p>
</div>

<div className="bg-neutral-950 p-10 hover:bg-neutral-900/50 transition-colors group">
<div className="w-12 h-12 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-[#E0301E] group-hover:border-[#E0301E]/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] text-xl font-medium tracking-tight text-white mb-3">Massive Volume</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                            Print large-scale production parts or consolidate assemblies with build volumes scaling up to 1000 x 1000 x 1200 mm.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-16">
<h2 className="font-['Space_Grotesk'] text-3xl font-medium tracking-tight text-white mb-4">The M-Series Fleet</h2>
<p className="text-sm text-neutral-400 font-light">Purpose-built machines for every stage of manufacturing.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-['Space_Grotesk'] tracking-widest text-[#E0301E] uppercase">Flagship</span>
<div className="h-px bg-neutral-800 flex-grow"></div>
</div>
<h3 className="font-['Space_Grotesk'] text-4xl font-medium tracking-tight text-white mb-4">M-750X</h3>
<p className="text-sm text-neutral-400 font-light mb-8 leading-relaxed max-w-md">
                            The industry standard for high-temperature composite 3D printing. Engineered for continuous factory operation with automated material handling and in-situ inspection.
                        </p>

<div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
<div>
<p className="text-xs text-neutral-600 mb-1">Build Volume</p>
<p className="text-sm text-neutral-200 font-medium">750 x 500 x 500 mm</p>
</div>
<div>
<p className="text-xs text-neutral-600 mb-1">Extruder Temp</p>
<p className="text-sm text-neutral-200 font-medium">Up to 500°C</p>
</div>
<div>
<p className="text-xs text-neutral-600 mb-1">Chamber Temp</p>
<p className="text-sm text-neutral-200 font-medium">Actively heated 250°C</p>
</div>
<div>
<p className="text-xs text-neutral-600 mb-1">Kinematics</p>
<p className="text-sm text-neutral-200 font-medium">CoreXY, Linear Motors</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm text-white border-b border-[#E0301E] pb-1 hover:text-[#E0301E] transition-colors" href="#">
                            Explore M-750X <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="order-1 lg:order-2 relative aspect-square lg:aspect-[4/3] bg-neutral-900/30 border border-neutral-800 rounded-sm flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-50"></div>

<div className="relative w-2/3 h-2/3 border border-neutral-700 flex flex-col justify-between p-4">
<div className="flex justify-between border-b border-neutral-800 pb-2">
<div className="w-12 h-2 bg-neutral-800"></div>
<div className="w-4 h-4 rounded-full border border-[#E0301E] flex items-center justify-center"><div className="w-1 h-1 bg-[#E0301E] rounded-full"></div></div>
</div>
<div className="flex-grow border-x border-neutral-800/50 mx-8 my-4 relative">
<div className="absolute top-1/4 left-0 w-full h-px bg-[#E0301E]/40"></div>
<div className="absolute top-1/4 left-1/2 w-8 h-8 border border-[#E0301E] -translate-x-1/2 -translate-y-1/2 bg-neutral-950 flex items-center justify-center">
<iconify-icon className="text-[#E0301E] text-xs" icon="solar:printer-minimalistic-linear"></iconify-icon>
</div>
</div>
<div className="h-8 bg-neutral-800/50 border-t border-neutral-700 w-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E0301E] relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
<h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to scale your production?</h2>
<p className="text-sm md:text-base text-white/80 font-light mb-10 max-w-2xl mx-auto">
                    Consult with our additive manufacturing engineers to find the right Mastrex system for your factory floor.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-neutral-950 text-white px-8 py-4 rounded-sm text-sm font-medium hover:bg-black transition-colors" href="#">
                        Request a Consultation
                    </a>
<a className="border border-white/30 text-white px-8 py-4 rounded-sm text-sm font-normal hover:bg-white/10 transition-colors" href="#">
                        Order Sample Part
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<span className="font-['Space_Grotesk'] text-xl font-medium tracking-tighter text-white block mb-4">MASTREX</span>
<p className="text-xs text-neutral-500 max-w-xs mb-6 leading-relaxed">
                        Precision engineering for additive manufacturing. Designed, machined, and assembled in the United States.
                    </p>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Detroit, Michigan
                    </div>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-widest">Hardware</h4>
<ul className="space-y-3 text-xs text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">M-750X (Flagship)</a></li>
<li><a className="hover:text-white transition-colors" href="#">M-400 Pro</a></li>
<li><a className="hover:text-white transition-colors" href="#">M-Core Compact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Upgrades</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-widest">Resources</h4>
<ul className="space-y-3 text-xs text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Material Guides</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Support Portal</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-widest">Company</h4>
<ul className="space-y-3 text-xs text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Newsroom</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">
                    © 2024 Mastrex Manufacturing Systems. All rights reserved.
                </p>
<div className="flex gap-4 text-xs text-neutral-600">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

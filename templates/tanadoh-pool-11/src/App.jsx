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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-slate-900" href="#">TANADOH</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#showcase">Showcase</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-sky-500 px-4 text-sm font-medium text-white transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2" href="#contact">
                Get a Quote
            </a>

<button className="md:hidden text-slate-500 hover:text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow">

<section className="overflow-hidden flex flex-col pt-24 pb-16 relative items-center justify-center">

<div className="absolute inset-0 -z-10 bg-white">
<img alt="Swimming pool background" className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
</div>
<div className="z-10 text-center max-w-4xl mr-auto mb-16 ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full border border-sky-200 bg-sky-50/90 backdrop-blur-sm text-sky-700 mb-8 transition-transform hover:scale-105 cursor-default shadow-sm">
<iconify-icon height="16" icon="solar:medal-star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium">Celebrating 5 Years of Excellence</span>
</div>
<h1 className="md:text-7xl leading-tight text-5xl font-semibold text-slate-900 tracking-tight mb-6">Creating perfect Swimming pools for your home.</h1>
<p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    Transforming backyards into private resorts. From pristine new constructions to reliable, expert repairs, Tanadoh has been your trusted local pool specialist for half a decade.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-8 text-sm font-medium text-white transition-colors hover:bg-slate-800 shadow-sm" href="#services">
                        Explore Services
                    </a>
<a className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 px-8 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 hover:border-slate-300 shadow-sm" href="#contact">
                        Contact Us
                    </a>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 w-full relative z-10">
<div className="absolute -inset-4 bg-gradient-to-b from-sky-100 to-transparent rounded-[2.5rem] opacity-50 blur-xl -z-10"></div>
<div className="relative rounded-2xl border border-slate-200/60 bg-white/40 p-2 shadow-2xl backdrop-blur-sm">
<img alt="Modern luxury swimming pool" className="w-full h-[300px] md:h-[600px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-100" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">What we do</h2>
<p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto">Comprehensive swimming pool solutions tailored to your needs, backed by 5 years of industry experience.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Pool Construction</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            We design and build custom swimming pools from the ground up. Whether you envision a sleek lap pool or a family-friendly oasis, our team manages the entire process with precision and care.
                        </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Expert Repair</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Pumps, filters, leaks, or surface damage—we fix it all. Our diagnostic experts quickly identify issues and provide lasting repairs to ensure your pool remains safe and crystal clear year-round.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="showcase">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Featured projects</h2>
<p className="text-sm md:text-base text-slate-500 max-w-xl">A curated selection of our finest swimming pool constructions, blending seamlessly with modern architecture.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-sky-500 hover:text-sky-600 transition-colors" href="#contact">
                        Start your project
                        <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
<img alt="Luxury Mansion Pool" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<div className="text-white font-medium tracking-tight mb-1">Mansion Infinity Oasis</div>
<div className="text-xs text-slate-300">Complete Construction</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
<img alt="Modern Villa Pool" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div className="">
<div className="text-white font-medium tracking-tight mb-1">Modern Courtyard Lap Pool</div>
<div className="text-xs text-slate-300">Design &amp; Build</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
<img alt="Beautiful Backyard Pool" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<div className="text-white font-medium tracking-tight mb-1">Resort-Style Renovation</div>
<div className="text-xs text-slate-300">Restoration &amp; Upgrade</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 border-y border-slate-100 py-12">
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">5+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Experience</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">100+</div>
<div className="uppercase text-xs font-medium text-slate-500 tracking-wider">Pools made</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">24/7</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Support Available</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-sky-500 mb-1">100%</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Satisfaction</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="relative z-10 text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Ready to dive in?</h2>
<p className="text-sm text-slate-500 mb-10 max-w-lg mx-auto">
                            Whether you need a brand new pool or a quick repair, our team is ready to help. Reach out to us today or visit our location.
                        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<a className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50 bg-white transition-all w-full sm:w-auto justify-center shadow-sm" href="tel:+15551234567">
<iconify-icon className="text-sky-500 group-hover:scale-110 transition-transform" height="20" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div className="text-left">
<div className="text-xs text-slate-400 font-medium mb-0.5">Call Us</div>
<div className="text-sm font-medium text-slate-800">0509071540</div>
</div>
</a>

<a className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-transparent bg-sky-500 text-white hover:bg-sky-600 transition-all w-full sm:w-auto justify-center shadow-sm hover:shadow-md" href="https://maps.app.goo.gl/PiVH3KKR8ep5MYWu5" rel="noopener noreferrer" target="_blank">
<iconify-icon className="group-hover:scale-110 transition-transform" height="20" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div className="text-left">
<div className="text-xs text-sky-100 font-medium mb-0.5">Visit Location</div>
<div className="text-sm font-medium">Get Directions</div>
</div>
</a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-lg font-medium tracking-tighter text-slate-900">TANADOH</span>
<span className="text-xs text-slate-400">© 2024 Tanadoh Pools. All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon height="20" icon="solar:stop-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon height="20" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}

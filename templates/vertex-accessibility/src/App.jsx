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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#121212]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

<a className="font-logo font-medium text-2xl tracking-tighter uppercase flex items-center" href="#">
<span className="text-[#D4AF37]">V</span>
<span className="text-white">ertex</span>
</a>

<div className="hidden md:flex items-center space-x-8 text-base font-medium text-gray-400 tracking-wide">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#contact">Contact</a>
</div>

<button className="md:hidden text-white flex items-center justify-center">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Modern Luxury Home Architecture" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2950&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#121212]/60 via-[#121212]/90 to-[#121212]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-start">
<div className="inline-flex items-center space-x-3 border border-white/10 rounded-full px-5 py-2 mb-8 bg-white/5 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
<span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Accessibility Standard</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] mb-6 max-w-4xl">
                Engineering <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Digital Trust.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed">
                We construct robust, accessible digital infrastructures for the modern enterprise. Precision in code, equality in experience.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#D4AF37] text-[#121212] font-medium text-base px-8 py-4 rounded-sm hover:bg-white transition-all duration-300 tracking-wide text-center" href="#contact">
                    Initiate Project
                </a>
<a className="bg-transparent border border-white/20 text-white font-medium text-base px-8 py-4 rounded-sm hover:bg-white/5 transition-all duration-300 tracking-wide text-center" href="#services">
                    Explore Expertise
                </a>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#18181A]" id="problem">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="relative w-full h-[50vh] lg:h-auto lg:min-h-[800px]">
<img alt="Vertex Accessibility Architecture" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#121212]/10 mix-blend-overlay"></div>
</div>

<div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-20 xl:px-32">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-10">The Mobile Leak</h2>
<div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-14">
<p>
                        Organizations lose critical data through unsecured mobile channels every day. Legacy systems create vulnerabilities. User experience suffers. Trust erodes.
                    </p>
<p>
                        Vertex Accessibility bridges the gap between security and usability, ensuring your digital infrastructure is both fortress-like and user-friendly.
                    </p>
</div>
<ul className="space-y-6 text-lg text-gray-300 font-light">
<li className="flex items-start">
<span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mt-2.5 mr-6 shrink-0"></span>
<span>End-to-end encryption for all mobile communications</span>
</li>
<li className="flex items-start">
<span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mt-2.5 mr-6 shrink-0"></span>
<span>Real-time threat detection and response</span>
</li>
<li className="flex items-start">
<span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mt-2.5 mr-6 shrink-0"></span>
<span>Compliance with global data protection standards</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 bg-[#121212] relative border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20 md:text-center max-w-3xl mx-auto">
<h2 className="text-base font-medium tracking-widest text-[#D4AF37] uppercase mb-4">Our Method</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Architecting Universal Access</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#181818] border border-white/5 p-10 rounded-sm hover:border-white/15 transition-all duration-300 group">
<div className="w-14 h-14 bg-[#121212] border border-white/10 rounded-sm flex items-center justify-center mb-8 group-hover:border-[#D4AF37]/50 transition-colors">
<iconify-icon className="text-3xl text-white group-hover:text-[#D4AF37] transition-colors" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-4">Research</h4>
<p className="text-base text-gray-400 font-light leading-relaxed">
                        Comprehensive auditing of your current digital blueprint. We uncover hidden barriers and map precise paths to complete WCAG and ADA compliance.
                    </p>
</div>

<div className="bg-[#181818] border border-white/5 p-10 rounded-sm hover:border-white/15 transition-all duration-300 group">
<div className="w-14 h-14 bg-[#121212] border border-white/10 rounded-sm flex items-center justify-center mb-8 group-hover:border-[#D4AF37]/50 transition-colors">
<iconify-icon className="text-3xl text-white group-hover:text-[#D4AF37] transition-colors" icon="solar:pen-linear"></iconify-icon>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-4">Design</h4>
<p className="text-base text-gray-400 font-light leading-relaxed">
                        Drafting inclusive UI/UX foundations. We integrate accessibility aesthetics from the first pixel, ensuring beauty and usability are never mutually exclusive.
                    </p>
</div>

<div className="bg-[#181818] border border-white/5 p-10 rounded-sm hover:border-white/15 transition-all duration-300 group">
<div className="w-14 h-14 bg-[#121212] border border-white/10 rounded-sm flex items-center justify-center mb-8 group-hover:border-[#D4AF37]/50 transition-colors">
<iconify-icon className="text-3xl text-white group-hover:text-[#D4AF37] transition-colors" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-4">Scaling</h4>
<p className="text-base text-gray-400 font-light leading-relaxed">
                        Embedding accessible components into your engineering design systems. We ensure that as your platform grows, your commitment to inclusion scales autonomously.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-32 border-t border-white/5 bg-[#0a0a0a]" id="contact">

<div className="absolute inset-0 z-0">
<img alt="Toronto Skyline Architecture" className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale" src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/80"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-16 md:gap-24">
<div className="w-full md:w-5/12">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Build With Us</h2>
<p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
                        Secure your digital real estate. Partner with Vertex to engineer experiences that are legally compliant, universally accessible, and flawlessly executed.
                    </p>
<div className="space-y-6">
<div className="flex items-center space-x-4">
<iconify-icon className="text-xl text-[#D4AF37]" icon="solar:letter-linear"></iconify-icon>
<span className="text-base text-gray-300 tracking-wide">inquiries@vertexaccessibility.com</span>
</div>
<div className="flex items-center space-x-4">
<iconify-icon className="text-xl text-[#D4AF37]" icon="solar:map-point-linear"></iconify-icon>
<span className="text-base text-gray-300 tracking-wide">Toronto, ON, Canada</span>
</div>
</div>
</div>
<div className="w-full md:w-7/12 bg-[#161616]/80 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-sm">
<form action="https://docs.google.com/spreadsheets/d/1yaf_K3AlOZXc32EwiBViAOtMNURLZRzcHQaoAd5mlNk/edit?usp=sharing" className="space-y-8" method="POST">
<div className="relative group">
<input className="block w-full px-0 py-3 text-lg text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#D4AF37] peer transition-colors font-light" id="company" name="company" placeholder=" " required="" type="text"/>
<label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D4AF37] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 tracking-wide" htmlFor="company">Company Name</label>
</div>
<div className="relative group">
<input className="block w-full px-0 py-3 text-lg text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#D4AF37] peer transition-colors font-light" id="email" name="email" placeholder=" " required="" type="email"/>
<label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D4AF37] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 tracking-wide" htmlFor="email">Business Email</label>
</div>
<div className="pt-4">
<button className="w-full flex justify-center items-center space-x-3 bg-white text-[#121212] hover:bg-[#D4AF37] font-medium text-base px-8 py-4 rounded-sm transition-all duration-300 tracking-wide" type="submit">
<span>Request Consultation</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#0a0a0a] py-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-logo font-medium text-xl tracking-tighter uppercase flex items-center opacity-80">
<span className="text-[#D4AF37]">V</span>
<span className="text-white">ertex</span>
</div>
<p className="text-sm text-gray-500 font-light tracking-wide">
                © 2024 Vertex Accessibility. Engineering Trust.
            </p>
</div>
</footer>

    </>
  );
}

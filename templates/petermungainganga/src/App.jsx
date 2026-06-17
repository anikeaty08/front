import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0F1115]/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="text-xl font-serif tracking-tight text-[#EDEDED] hover:text-[#C9A24D] transition-colors duration-300" href="#">
                Peter Mungai N.
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-[#9CA3AF] hover:text-[#EDEDED] transition-colors" href="#work">Work</a>
<a className="text-sm text-[#9CA3AF] hover:text-[#EDEDED] transition-colors" href="#services">Services</a>
<a className="text-sm text-[#9CA3AF] hover:text-[#EDEDED] transition-colors" href="#about">About</a>
<a className="px-5 py-2 text-xs uppercase tracking-widest border border-[#C9A24D]/30 text-[#C9A24D] rounded-full hover:bg-[#C9A24D] hover:text-[#0F1115] transition-all duration-300" href="#contact">
                    Get in touch
                </a>
</div>

<button className="md:hidden text-[#EDEDED]">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A24D] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center z-10">
<p className="animate-fade-up text-[#C9A24D] text-sm uppercase tracking-[0.2em] mb-6">Portfolio 2024</p>
<h1 className="animate-fade-up delay-100 font-serif text-5xl md:text-7xl lg:text-8xl text-[#EDEDED] leading-[1.1] tracking-tight mb-8">
                Crafting digital <br/> <span className="italic text-[#9CA3AF]">quiet luxury.</span>
</h1>
<p className="animate-fade-up delay-200 text-[#9CA3AF] text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mb-12">
                Senior Product Designer &amp; Art Director specializing in creating refined, minimal interfaces for premium brands.
            </p>
<div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="group flex items-center gap-2 text-[#EDEDED] border-b border-[#EDEDED] pb-1 hover:text-[#C9A24D] hover:border-[#C9A24D] transition-all duration-300" href="#work">
<span className="text-sm tracking-wide">View Selected Work</span>
<span className="iconify group-hover:translate-x-1 transition-transform duration-300" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
<span className="iconify text-[#EDEDED]" data-icon="lucide:arrow-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</header>

<section className="py-24 md:py-32 bg-[#0F1115]" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div>
<h2 className="text-3xl md:text-4xl text-[#EDEDED] mb-2 tracking-tight">Selected Work</h2>
<p className="text-[#9CA3AF] font-light">A curation of recent digital products.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#EDEDED] transition-colors" href="#">
                    All Projects <span className="iconify" data-icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<article className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] bg-[#1A1D23] rounded-lg overflow-hidden mb-6 border border-white/5 group-hover:border-[#C9A24D]/30 transition-colors duration-500">

<div className="absolute inset-0 bg-gradient-to-br from-[#2A2E35] to-[#1A1D23] group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-10 transition-opacity">
<span className="iconify text-6xl text-white/20" data-icon="lucide:image" style={{strokeWidth: '1'}}></span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl text-[#EDEDED] mb-1 group-hover:text-[#C9A24D] transition-colors">Fintech Dashboard</h3>
<p className="text-sm text-[#9CA3AF]">UI/UX Design, Design System</p>
</div>
<span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#EDEDED]">
<span className="iconify" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
</article>

<article className="group cursor-pointer md:mt-16">
<div className="relative w-full aspect-[4/3] bg-[#1A1D23] rounded-lg overflow-hidden mb-6 border border-white/5 group-hover:border-[#C9A24D]/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-[#1F2329] to-[#0F1115] group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-10 transition-opacity">
<span className="iconify text-6xl text-white/20" data-icon="lucide:layers" style={{strokeWidth: '1'}}></span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl text-[#EDEDED] mb-1 group-hover:text-[#C9A24D] transition-colors">Lumina Architecture</h3>
<p className="text-sm text-[#9CA3AF]">Web Design, Art Direction</p>
</div>
<span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#EDEDED]">
<span className="iconify" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] bg-[#1A1D23] rounded-lg overflow-hidden mb-6 border border-white/5 group-hover:border-[#C9A24D]/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-[#1A1D23] to-[#252830] group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-10 transition-opacity">
<span className="iconify text-6xl text-white/20" data-icon="lucide:smartphone" style={{strokeWidth: '1'}}></span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl text-[#EDEDED] mb-1 group-hover:text-[#C9A24D] transition-colors">Vesper iOS App</h3>
<p className="text-sm text-[#9CA3AF]">Mobile Design, Prototyping</p>
</div>
<span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#EDEDED]">
<span className="iconify" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
</article>

<article className="group cursor-pointer md:mt-16">
<div className="relative w-full aspect-[4/3] bg-[#1A1D23] rounded-lg overflow-hidden mb-6 border border-white/5 group-hover:border-[#C9A24D]/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-[#181A20] to-[#121418] group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-10 transition-opacity">
<span className="iconify text-6xl text-white/20" data-icon="lucide:monitor" style={{strokeWidth: '1'}}></span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl text-[#EDEDED] mb-1 group-hover:text-[#C9A24D] transition-colors">Mono E-Commerce</h3>
<p className="text-sm text-[#9CA3AF]">Shopify Development, Strategy</p>
</div>
<span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#EDEDED]">
<span className="iconify" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
</article>
</div>
<div className="mt-12 md:hidden text-center">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#EDEDED] transition-colors" href="#">
                    All Projects <span className="iconify" data-icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#0F1115]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="border-t border-white/10 mb-16"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="md:col-span-1">
<h2 className="text-3xl md:text-4xl text-[#EDEDED] tracking-tight mb-4">Expertise</h2>
<p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
                        Refining digital presence through strategic design and development. Focusing on scalability and aesthetic precision.
                    </p>
</div>
<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">

<div className="group">
<div className="w-10 h-10 rounded bg-[#1A1D23] flex items-center justify-center mb-6 text-[#C9A24D]">
<span className="iconify" data-icon="lucide:figma" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-[#EDEDED] mb-3">Product Design</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed">
                            End-to-end interface design for web and mobile applications, focusing on user experience and visual hierarchy.
                        </p>
</div>

<div className="group">
<div className="w-10 h-10 rounded bg-[#1A1D23] flex items-center justify-center mb-6 text-[#C9A24D]">
<span className="iconify" data-icon="lucide:code-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-[#EDEDED] mb-3">Development</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed">
                            Building responsive, accessible, and performant websites using modern frontend frameworks and best practices.
                        </p>
</div>

<div className="group">
<div className="w-10 h-10 rounded bg-[#1A1D23] flex items-center justify-center mb-6 text-[#C9A24D]">
<span className="iconify" data-icon="lucide:pen-tool" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-[#EDEDED] mb-3">Art Direction</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed">
                            Defining visual languages and brand systems that communicate value and elevate the product identity.
                        </p>
</div>

<div className="group">
<div className="w-10 h-10 rounded bg-[#1A1D23] flex items-center justify-center mb-6 text-[#C9A24D]">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-[#EDEDED] mb-3">Strategy</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed">
                            Analyzing market position and user needs to create actionable roadmaps for digital growth.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1D23]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 order-2 lg:order-1">
<div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-[#0F1115]">
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent opacity-60"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#C9A24D]/20 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full ml-8 -mt-8"></div>
<div className="absolute bottom-8 left-8">
<p className="font-serif text-2xl text-[#EDEDED]">Peter Mungai N.</p>
<p className="text-[#C9A24D] text-sm">San Francisco, CA</p>
</div>
</div>
</div>

<div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12">
<h2 className="text-3xl md:text-5xl font-serif text-[#EDEDED] mb-8 leading-tight tracking-tight">
                        Design that speaks <br/>
<span className="text-[#9CA3AF] italic">without shouting.</span>
</h2>
<div className="space-y-6 text-[#9CA3AF] text-lg font-light leading-relaxed">
<p>
                            With over a decade of experience in the digital space, I help visionary companies navigate the intersection of design and technology. My approach is rooted in the belief that luxury lies in simplicity.
                        </p>
<p>
                            I don't just design interfaces; I craft systems. Whether it's a complete brand overhaul or a complex web application, I bring a meticulous eye for detail and a passion for seamless interaction.
                        </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8">
<div>
<p className="text-[#EDEDED] font-medium text-3xl">10+</p>
<p className="text-[#9CA3AF] text-xs uppercase tracking-wider mt-1">Years Experience</p>
</div>
<div>
<p className="text-[#EDEDED] font-medium text-3xl">45+</p>
<p className="text-[#9CA3AF] text-xs uppercase tracking-wider mt-1">Projects Launched</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[#0F1115]" id="contact">
<div className="max-w-2xl mx-auto px-6 text-center">
<span className="inline-block p-3 rounded-full bg-[#1A1D23] text-[#C9A24D] mb-6 border border-white/5">
<span className="iconify" data-icon="lucide:mail" data-width="24" style={{strokeWidth: '1.5'}}></span>
</span>
<h2 className="text-4xl md:text-5xl font-serif text-[#EDEDED] mb-6 tracking-tight">Let's start a project</h2>
<p className="text-[#9CA3AF] mb-12 font-light">
                Interested in working together? Drop me a line and let's discuss how we can elevate your brand.
            </p>
<form className="space-y-4 text-left">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative group">
<input className="w-full bg-[#1A1D23] border border-white/10 rounded p-4 text-[#EDEDED] placeholder-[#52525B] focus:outline-none focus:border-[#C9A24D]/50 focus:ring-1 focus:ring-[#C9A24D]/50 transition-all text-sm" placeholder="Name" type="text"/>
</div>
<div className="relative group">
<input className="w-full bg-[#1A1D23] border border-white/10 rounded p-4 text-[#EDEDED] placeholder-[#52525B] focus:outline-none focus:border-[#C9A24D]/50 focus:ring-1 focus:ring-[#C9A24D]/50 transition-all text-sm" placeholder="Email" type="email"/>
</div>
</div>
<div className="relative group">
<textarea className="w-full bg-[#1A1D23] border border-white/10 rounded p-4 text-[#EDEDED] placeholder-[#52525B] focus:outline-none focus:border-[#C9A24D]/50 focus:ring-1 focus:ring-[#C9A24D]/50 transition-all text-sm resize-none" placeholder="Message" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-[#EDEDED] text-[#0F1115] font-medium text-sm tracking-widest uppercase rounded hover:bg-[#C9A24D] transition-colors duration-300 mt-4" type="button">
                    Send Message
                </button>
</form>
<div className="mt-16 flex justify-center gap-8">
<a className="text-[#9CA3AF] hover:text-[#EDEDED] transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-[#9CA3AF] hover:text-[#EDEDED] transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-[#9CA3AF] hover:text-[#EDEDED] transition-colors" href="#">
<span className="iconify" data-icon="lucide:dribbble" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-[#9CA3AF] hover:text-[#EDEDED] transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#0F1115]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#52525B]">
<p>© 2024 Peter Mungai N. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#9CA3AF] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#9CA3AF] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}

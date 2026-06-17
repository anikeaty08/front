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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="pointer-events-none absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D49E3C] opacity-[0.03] blur-[120px] rounded-full"></div>
<div className="pointer-events-none absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-[#D49E3C] opacity-[0.02] blur-[120px] rounded-full"></div>

<header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-zinc-900/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-white uppercase font-semibold text-sm tracking-tighter flex items-center gap-2" href="#">
<iconify-icon className="text-[#D49E3C] text-lg" icon="solar:asterisk-linear"></iconify-icon>
                Lumina
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="text-zinc-400 hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="text-zinc-400 hover:text-white transition-colors duration-200" href="#work">Work</a>
<a className="text-zinc-400 hover:text-white transition-colors duration-200" href="#testimonials">Testimonials</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-black bg-gradient-to-br from-[#F5D372] to-[#D49E3C] rounded-full hover:opacity-90 transition-opacity duration-200 shadow-[0_0_20px_rgba(212,158,60,0.2)]" href="#contact">
                Get in touch
            </a>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
<div className="max-w-4xl mx-auto text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-xs font-medium text-[#D49E3C] mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#D49E3C] animate-pulse"></span>
                Defining digital excellence
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.05] mb-6">
                Design that <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">demands attention.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                We craft high-end web experiences, seamlessly blending minimal aesthetics with powerful engineering to elevate your brand's digital presence.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-black bg-gradient-to-br from-[#F5D372] to-[#D49E3C] rounded-full hover:scale-[1.02] transition-transform duration-200 shadow-[0_0_30px_rgba(212,158,60,0.15)] flex items-center justify-center gap-2" href="#work">
                    View our work
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-transparent border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors duration-200 flex items-center justify-center" href="#contact">
                    Book a consultation
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-zinc-900 relative" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-[#D49E3C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl blur-xl"></div>
<div className="relative aspect-square md:aspect-[4/3] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden flex items-center justify-center">

<div className="w-3/4 h-3/4 border border-zinc-800/50 rounded-xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-zinc-900 to-transparent"></div>
<div className="absolute bottom-4 right-4 text-[#D49E3C]">
<iconify-icon className="text-4xl opacity-50" icon="solar:leaf-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Precision in every pixel. <br/> Strategy in every line.</h2>
<div className="space-y-6 text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
<p>
                        At Lumina, we believe that true luxury lies in simplicity and flawless execution. Founded on the principles of minimal design and robust engineering, we are a collective of digital artisans dedicated to building brand experiences that resonate.
                    </p>
<p>
                        We don't just build websites; we architect digital environments that communicate value, build trust, and drive meaningful engagement. Every project is approached with meticulous attention to detail, ensuring your brand stands apart in a crowded landscape.
                    </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8 border-t border-zinc-900 pt-10">
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">10+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Years Experience</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">150+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Projects Shipped</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-zinc-950/30" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Our Expertise</h2>
<p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">Comprehensive solutions tailored for visionary brands seeking a competitive edge through design and technology.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-black border border-zinc-800 hover:border-[#D49E3C]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D49E3C]/5 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#D49E3C]/10 transition-colors duration-300"></div>
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6 group-hover:text-[#D49E3C] transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Brand &amp; UI/UX Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">
                        Crafting intuitive, striking interfaces that define your brand identity. We focus on minimal aesthetics that enhance usability and user retention.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-black border border-zinc-800 hover:border-[#D49E3C]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D49E3C]/5 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#D49E3C]/10 transition-colors duration-300"></div>
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6 group-hover:text-[#D49E3C] transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Web Engineering</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">
                        Building fast, secure, and scalable digital platforms using modern frameworks. Code that is as clean and structured as the design it powers.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-black border border-zinc-800 hover:border-[#D49E3C]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D49E3C]/5 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#D49E3C]/10 transition-colors duration-300"></div>
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6 group-hover:text-[#D49E3C] transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Digital Strategy</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-normal">
                        Data-driven approaches to elevate your market position. We optimize for SEO, performance, and conversion to ensure tangible business growth.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-zinc-900" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Selected Works</h2>
<p className="text-zinc-400 text-sm md:text-base max-w-md">A curated showcase of our recent partnerships. Minimalist design meeting complex problem-solving.</p>
</div>
<a className="text-sm font-medium text-white hover:text-[#D49E3C] transition-colors inline-flex items-center gap-2 group" href="#">
                    View full archive 
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<a className="group block relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 aspect-[4/3] md:aspect-[16/10]" href="#">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>

<div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="w-32 h-32 rounded-full border border-zinc-700/50 mix-blend-overlay"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="text-xs text-[#D49E3C] font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Fintech Platform</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Aura Banking</h3>
<p className="text-sm text-zinc-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">Redefining digital wealth management with a focused, distraction-free interface.</p>
</div>
</a>

<a className="group block relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 aspect-[4/3] md:aspect-[16/10]" href="#">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>

<div className="absolute inset-0 bg-zinc-900 group-hover:bg-zinc-800 transition-colors duration-500 flex items-center justify-center">
<div className="w-full h-px bg-zinc-800 group-hover:bg-zinc-700 transition-colors -rotate-12 transform scale-150"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="text-xs text-[#D49E3C] font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">E-Commerce</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Vellure Lifestyle</h3>
<p className="text-sm text-zinc-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">A high-conversion bespoke storefront for a premium fashion label.</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-zinc-900 bg-zinc-950/30" id="testimonials">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-16 text-center">Client Partnerships</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 md:p-10 rounded-2xl bg-black border border-zinc-800 relative">
<iconify-icon className="absolute top-8 right-8 text-4xl text-zinc-800" icon="solar:quote-left-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 font-semibold text-sm border border-zinc-800">
                            MR
                        </div>
<div>
<div className="text-sm font-semibold text-white">Michael Roberts</div>
<div className="text-xs text-zinc-500">CEO, Aura Banking</div>
</div>
</div>
<p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
                        "Working with Lumina was a paradigm shift for our product. Their obsessive attention to typography and spatial design transformed our complex data dashboards into an intuitive, elegant experience. They deliver on the promise of high-end execution."
                    </p>
</div>

<div className="p-8 md:p-10 rounded-2xl bg-black border border-zinc-800 relative">
<iconify-icon className="absolute top-8 right-8 text-4xl text-zinc-800" icon="solar:quote-left-linear"></iconify-icon>
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 font-semibold text-sm border border-zinc-800">
                            SW
                        </div>
<div>
<div className="text-sm font-semibold text-white">Sarah Chen</div>
<div className="text-xs text-zinc-500">Founder, Vellure</div>
</div>
</div>
<p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
                        "The level of professionalism and technical capability is unmatched. Lumina didn't just build a website; they captured the absolute essence of our brand and engineered a platform that increased our conversion rate by 40% in the first quarter."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 border-t border-zinc-900 relative overflow-hidden" id="contact">

<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#D49E3C] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Let's build something <br/> exceptional.</h2>
<p className="text-sm md:text-base text-zinc-400 mb-12 max-w-md leading-relaxed font-normal">
                    Ready to elevate your digital presence? Reach out to discuss your project, and let's explore how our expertise aligns with your vision.
                </p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group w-fit" href="mailto:hello@lumina.design">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#D49E3C]/50 transition-colors">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-sm font-medium">hello@lumina.design</span>
</a>
<div className="flex items-center gap-4 text-zinc-300 w-fit">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-sm font-medium">San Francisco, CA</span>
</div>
</div>
<div className="mt-16 flex gap-4">
<a className="w-10 h-10 rounded-full bg-black border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon> 
</a>
<a className="w-10 h-10 rounded-full bg-black border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> 
</a>
<a className="w-10 h-10 rounded-full bg-black border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon> 
</a>
</div>
</div>

<div className="bg-zinc-950/50 border border-zinc-800/80 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400" htmlFor="name">Full Name</label>
<input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D49E3C] focus:ring-1 focus:ring-[#D49E3C] transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400" htmlFor="email">Email Address</label>
<input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D49E3C] focus:ring-1 focus:ring-[#D49E3C] transition-all" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400" htmlFor="budget">Project Budget</label>
<div className="relative">
<select className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-300 appearance-none focus:outline-none focus:border-[#D49E3C] focus:ring-1 focus:ring-[#D49E3C] transition-all cursor-pointer" id="budget">
<option disabled="" selected="" value="">Select a range</option>
<option value="10k">$10k - $25k</option>
<option value="25k">$25k - $50k</option>
<option value="50k">$50k+</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400" htmlFor="message">Project Details</label>
<textarea className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D49E3C] focus:ring-1 focus:ring-[#D49E3C] transition-all resize-none" id="message" placeholder="Tell us about your goals..." rows="4"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-700 bg-black peer-checked:bg-[#D49E3C] peer-checked:border-[#D49E3C] transition-colors flex items-center justify-center">
<iconify-icon className="text-black text-xs opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-xs text-zinc-500 font-normal leading-relaxed select-none group-hover:text-zinc-400 transition-colors">
                            I agree to the processing of my personal data in accordance with the Privacy Policy.
                        </span>
</label>
<button className="w-full px-8 py-3.5 text-sm font-semibold text-black bg-gradient-to-br from-[#F5D372] to-[#D49E3C] rounded-xl hover:opacity-90 transition-opacity duration-200 mt-4 flex items-center justify-center gap-2" type="button">
                        Submit Inquiry
                        <iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<a className="text-white uppercase font-semibold text-sm tracking-tighter flex items-center gap-2" href="#">
<iconify-icon className="text-[#D49E3C] text-lg" icon="solar:asterisk-linear"></iconify-icon>
                Lumina
            </a>
<div className="text-xs text-zinc-500 font-normal">
                © 2024 Lumina Design Studio. All rights reserved.
            </div>
<div className="flex gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}

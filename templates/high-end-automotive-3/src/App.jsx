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
      

<nav className="fixed w-full top-0 z-50 bg-[#1A1A1A]/70 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">VELOCE</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-sm text-gray-400 hover:text-white transition-colors duration-300" href="#">Models</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors duration-300" href="#">Pre-Owned</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors duration-300" href="#">Bespoke</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors duration-300" href="#">Atelier</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 transition-all duration-300" href="#contact">
                Contact Us
            </a>
<button className="md:hidden text-white flex items-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-[100svh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Luxury Sports Car" className="w-full h-full object-cover object-center scale-105" src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/30"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-[#722F37] animate-pulse"></span>
<span className="text-xs font-medium text-gray-300 tracking-wide uppercase">New Arrivals Available</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-white leading-[1.05]">
                    Engineering <br/> <span className="text-gray-400">meets pure</span> emotion.
                </h1>
<p className="mt-8 text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
                    Discover a curated collection of the world's most extraordinary vehicles. High-fidelity performance, uncompromising design, delivered with white-glove service.
                </p>
<div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#722F37] hover:bg-[#5a252c] text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_40px_-10px_#722F37]" href="#inventory">
                        View Inventory <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white px-8 py-4 rounded-full text-sm font-medium border border-white/20 transition-all duration-300" href="#about">
                        Explore Atelier
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1A1A] py-16 border-b border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-xs text-center uppercase tracking-[0.2em] text-gray-500 mb-10 font-medium">Authorized partner for premium marques</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">

<span className="text-2xl font-semibold tracking-tighter text-gray-400 hover:text-[#722F37] transition-colors duration-500 cursor-default">PORSCHE</span>
<span className="text-2xl font-semibold tracking-tighter text-gray-400 hover:text-[#722F37] transition-colors duration-500 cursor-default">FERRARI</span>
<span className="text-2xl font-semibold tracking-tighter text-gray-400 hover:text-[#722F37] transition-colors duration-500 cursor-default">MCLAREN</span>
<span className="text-2xl font-semibold tracking-tighter text-gray-400 hover:text-[#722F37] transition-colors duration-500 cursor-default">LAMBORGHINI</span>
<span className="text-2xl font-semibold tracking-tighter text-gray-400 hover:text-[#722F37] transition-colors duration-500 cursor-default">ASTON MARTIN</span>
</div>
</div>
</section>

<section className="bg-white" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="flex flex-col justify-center p-12 md:p-24 lg:p-32 order-2 lg:order-1">
<iconify-icon className="text-4xl text-[#722F37] mb-8" icon="solar:shield-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1A1A1A] leading-tight mb-6">
                    A sanctuary for the automotive purist.
                </h2>
<div className="space-y-6 text-base text-gray-600 leading-relaxed">
<p>
                        We don't just sell cars; we curate automotive experiences. Our facility is designed to showcase the pinnacle of engineering and design in an environment that respects the art form.
                    </p>
<p>
                        Every vehicle in our collection undergoes a rigorous multi-point inspection, ensuring that its performance is as flawless as its aesthetic. Step into a world where precision and passion converge seamlessly.
                    </p>
</div>
<div className="mt-12 pt-12 border-t border-gray-200 grid grid-cols-2 gap-8">
<div>
<p className="text-3xl font-semibold tracking-tight text-[#1A1A1A] mb-1">150+</p>
<p className="text-xs text-gray-500 uppercase tracking-widest">Vehicles Delivered</p>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight text-[#1A1A1A] mb-1">12</p>
<p className="text-xs text-gray-500 uppercase tracking-widest">Global Awards</p>
</div>
</div>
</div>

<div className="relative h-[500px] lg:h-auto order-1 lg:order-2 overflow-hidden bg-[#1A1A1A]">
<img alt="Dealership Interior Detail" className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A]/40 to-transparent"></div>
</div>
</div>
</section>

<section className="bg-[#1A1A1A] relative py-24 border-t border-white/5" id="contact">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-[#722F37]/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

<div className="lg:col-span-5 flex flex-col justify-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Inquire about a vehicle.</h3>
<p className="text-sm text-gray-400 mb-10">Connect with our concierges to schedule a private viewing or discuss bespoke acquisition options.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#722F37] focus:ring-1 focus:ring-[#722F37] transition-all" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#722F37] focus:ring-1 focus:ring-[#722F37] transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#722F37] focus:ring-1 focus:ring-[#722F37] transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#722F37] focus:ring-1 focus:ring-[#722F37] transition-all resize-none" placeholder="I am interested in..." rows="4"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer group pt-2">
<div className="relative flex items-center justify-center w-5 h-5 mt-0.5 shrink-0">
<input className="peer appearance-none w-5 h-5 border border-white/20 rounded-[4px] bg-white/5 checked:bg-[#722F37] checked:border-[#722F37] transition-all cursor-pointer" type="checkbox" />
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-sm" icon="solar:check-read-linear"></iconify-icon>
</input></div>
<span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                I agree to receive communications regarding my inquiry and accept the <a className="text-white hover:text-[#722F37] underline decoration-white/20 underline-offset-2 transition-colors" href="#">Privacy Policy</a>.
                            </span>
</label>
<button className="w-full bg-white text-[#1A1A1A] hover:bg-gray-200 px-6 py-3.5 rounded-lg text-sm font-medium transition-colors mt-6 flex justify-center items-center gap-2" type="button">
                            Submit Inquiry <iconify-icon icon="solar:plain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>

<div className="lg:col-span-7 flex flex-col">
<div className="w-full h-full min-h-[400px] rounded-2xl bg-[#131313] border border-white/5 overflow-hidden relative flex flex-col justify-between p-8 group">

<div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-[#722F37]/20 flex items-center justify-center border border-[#722F37]/30 text-[#722F37]">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest bg-[#1A1A1A] px-3 py-1 rounded-full border border-white/5">Headquarters</span>
</div>
<div className="relative z-10 mt-auto pt-16">
<h4 className="text-xl font-medium tracking-tight text-white mb-2">Veloce Motorcars</h4>
<p className="text-sm text-gray-400 max-w-xs mb-8">
                                1000 Precision Drive<br/>
                                Suite 400<br/>
                                Beverly Hills, CA 90210
                            </p>
<div className="flex flex-col sm:flex-row gap-6 border-t border-white/10 pt-6">
<a className="flex items-center gap-3 group/link" href="mailto:concierge@veloce.com">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:border-white/30 transition-colors">
<iconify-icon className="text-gray-400 group-hover/link:text-white transition-colors" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-gray-400 group-hover/link:text-white transition-colors">concierge@veloce.com</span>
</a>
<a className="flex items-center gap-3 group/link" href="tel:+13105550199">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:border-white/30 transition-colors">
<iconify-icon className="text-gray-400 group-hover/link:text-white transition-colors" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-gray-400 group-hover/link:text-white transition-colors">+1 (310) 555-0199</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#101010] py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-xl font-semibold tracking-tighter text-white">VELOCE</span>
<p className="text-xs text-gray-600">© 2024 Veloce Motorcars. All rights reserved.</p>
</div>
<div className="flex gap-8">
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Inventory</a>
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</footer>

    </>
  );
}

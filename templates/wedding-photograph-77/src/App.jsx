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
      

<nav className="fixed top-0 w-full border-b border-[#0A0A0A]/5 bg-[#F5F4F0]/80 backdrop-blur-xl z-50 transition-all duration-500">
<div className="max-w-[1600px] mx-auto px-6 py-5 flex justify-between items-center relative z-10">

<div className="w-1/3">
<button className="text-xs uppercase tracking-widest font-light text-[#0A0A0A] hover-underline pb-1">
                    Menu
                </button>
</div>

<div className="w-1/3 text-center">
<a className="text-2xl font-serif tracking-tighter uppercase text-[#0A0A0A]" href="#">
                    XR Studio
                </a>
</div>

<div className="w-1/3 flex justify-end hidden md:flex space-x-12 text-sm font-light text-[#737373]">
<a className="hover:text-[#0A0A0A] transition-colors duration-300" href="#works">Archive</a>
<a className="hover:text-[#0A0A0A] transition-colors duration-300" href="#pricing">Investment</a>
<a className="hover:text-[#0A0A0A] transition-colors duration-300" href="#about">Journal</a>
</div>

<div className="w-1/3 flex justify-end md:hidden">
<iconify-icon className="text-[#0A0A0A]" height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
</div>
</nav>

<section className="relative min-h-screen w-full max-w-[1600px] mx-auto overflow-hidden px-6 pt-32 pb-20 flex flex-col justify-center">

<div className="md:absolute md:top-32 left-0 w-full text-center z-0 px-4 md:px-0 opacity-95">
<h1 className="text-[14vw] md:text-[9.5vw] leading-[0.85] font-serif uppercase tracking-tighter text-[#0A0A0A] whitespace-nowrap">
                Beautiful Moment
            </h1>
<h1 className="text-[14vw] md:text-[9.5vw] leading-[0.85] font-serif uppercase tracking-tighter text-[#0A0A0A] md:ml-24 mt-2 md:mt-0">
                Is Everything
            </h1>
</div>

<div className="relative w-full h-[70vh] mt-16 md:mt-12 flex flex-col md:block z-10">

<div className="md:absolute md:left-[8%] md:top-[35%] md:w-[20%] mb-12 md:mb-0 group cursor-pointer">
<div className="w-full aspect-[4/5] img-wrap mb-5 bg-[#EBE9E4]">
<img alt="Veil Kiss" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<p className="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-[#737373] leading-relaxed max-w-[85%]">
                    Captured in the stillness of dawn, Paris.
                </p>
</div>

<div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[15%] md:w-[26%] mb-12 md:mb-0 relative group cursor-pointer">
<div className="w-full aspect-[2/3] img-wrap mb-5 bg-[#EBE9E4] shadow-2xl shadow-[#0A0A0A]/5">
<img alt="Wedding Couple Walking" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="flex justify-between items-center px-1">
<p className="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-[#737373]">
                        Selected Work — 01
                    </p>
<p className="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-[#0A0A0A]">
                        2024
                    </p>
</div>

<a className="absolute -bottom-5 -right-5 md:-right-8 w-28 h-28 bg-[#0A0A0A] rounded-full flex items-center justify-center text-[#F5F4F0] text-xs font-sans tracking-widest uppercase hover:scale-110 transition-transform duration-500 z-20 shadow-xl overflow-hidden group/btn" href="#contact">
<span className="relative z-10">Inquire</span>
<div className="absolute inset-0 bg-[#222222] transform scale-0 group-hover/btn:scale-100 rounded-full transition-transform duration-500 ease-out z-0"></div>
</a>
</div>

<div className="md:absolute md:right-[8%] md:top-[25%] md:w-[16%] mb-12 md:mb-0 group cursor-pointer hidden md:block">
<div className="w-full aspect-[3/4] img-wrap mb-5 bg-[#EBE9E4]">
<img alt="Couple in Landscape" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<p className="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-[#737373] leading-relaxed">
                    Tuscany editorial.
                </p>
<div className="w-full h-[1px] bg-[#0A0A0A]/10 my-5"></div>
<p className="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-[#737373] leading-relaxed">
                    Exploring the unseen poetry of human connection.
                </p>
</div>
</div>

<div className="absolute bottom-10 right-6 md:right-12 flex items-center gap-4 z-20">
<div className="w-10 h-10 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center bg-[#F5F4F0]/50 backdrop-blur-sm animate-bounce">
<iconify-icon className="text-[#0A0A0A]" height="18" icon="solar:arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</section>

<section className="py-40 px-6 relative z-10 bg-[#F5F4F0]" id="works">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase text-[#0A0A0A] leading-none">Curated <br/> Archive</h2>
<p className="text-base text-[#737373] max-w-sm font-light leading-relaxed pb-2">
                    An intimate collection of recent editorial weddings and fine art portraits, documenting truth with a cinematic eye.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">

<a className="block group" href="#">
<div className="w-full aspect-[4/5] img-wrap mb-8 bg-[#EBE9E4]">
<img alt="Villa Retreat" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1.5s]" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#737373] mb-3">01 — Editorial Wedding</p>
<h3 className="text-3xl font-serif tracking-tight text-[#0A0A0A]">Tuscany Retreat</h3>
</div>
<span className="text-xs uppercase tracking-widest text-[#0A0A0A] hover-underline pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">View</span>
</div>
</a>

<a className="block group md:mt-40" href="#">
<div className="w-full aspect-[3/4] img-wrap mb-8 bg-[#EBE9E4]">
<img alt="Still Life Details" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1.5s]" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#737373] mb-3">02 — Still Life / Elements</p>
<h3 className="text-3xl font-serif tracking-tight text-[#0A0A0A]">Silent Details</h3>
</div>
<span className="text-xs uppercase tracking-widest text-[#0A0A0A] hover-underline pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">View</span>
</div>
</a>

<a className="block group md:-mt-20" href="#">
<div className="w-full aspect-[16/10] img-wrap mb-8 bg-[#EBE9E4]">
<img alt="Coastal Vows" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1.5s]" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&amp;fit=crop&amp;q=80&amp;w=1400"/>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#737373] mb-3">03 — Destination Elopement</p>
<h3 className="text-3xl font-serif tracking-tight text-[#0A0A0A]">Ocean Whispers</h3>
</div>
<span className="text-xs uppercase tracking-widest text-[#0A0A0A] hover-underline pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">View</span>
</div>
</a>
</div>
<div className="mt-40 text-center">
<a className="inline-flex items-center justify-center border border-[#0A0A0A]/20 px-14 py-5 text-xs uppercase tracking-widest hover:bg-[#0A0A0A] hover:text-[#F5F4F0] hover:border-[#0A0A0A] transition-all duration-500 bg-[#F5F4F0]" href="#">
                    Explore Full Archive
                </a>
</div>
</div>
</section>

<section className="py-40 px-6 bg-[#EBE9E4] relative z-10" id="about">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
<div className="lg:col-span-5 relative group">
<div className="w-full aspect-[3/4] img-wrap bg-[#EBE9E4]">
<img alt="Photographer Portrait" className="w-full h-full object-cover filter grayscale sepia-[0.1]" src="https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute -right-6 -bottom-6 w-32 h-32 border border-[#0A0A0A]/10 z-[-1]"></div>
</div>
<div className="lg:col-span-7 lg:pl-10">
<p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#737373] mb-8">The Artist</p>
<h2 className="text-4xl md:text-6xl font-serif tracking-tighter text-[#0A0A0A] mb-12 leading-[1.1]">
                    Documenting truth <br/> with a cinematic eye.
                </h2>
<div className="space-y-8 text-base text-[#555555] font-light leading-loose max-w-xl mb-16">
<p>
                        My aesthetic is deeply rooted in editorial fashion and honest documentary. I strive to create images that feel like stills from a classic film—timeless, emotive, and inherently elegant.
                    </p>
<p>
                        I believe in the beauty of imperfection and the profound narrative held within a single glance. Based in Europe, available for exclusive commissions worldwide.
                    </p>
</div>
<a className="inline-flex items-center gap-4 text-xs uppercase tracking-widest text-[#0A0A0A] group" href="#contact">
<span className="hover-underline pb-1">Get in Touch</span>
<iconify-icon className="group-hover:translate-x-2 transition-transform duration-500" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-40 px-6 bg-[#F5F4F0] relative z-10" id="pricing">
<div className="max-w-[1000px] mx-auto">
<h2 className="text-xs uppercase tracking-[0.2em] text-center text-[#737373] mb-6">Services</h2>
<h3 className="text-5xl md:text-6xl font-serif tracking-tighter uppercase text-center text-[#0A0A0A] mb-32">Investment</h3>
<div className="flex flex-col">

<div className="group border-t border-[#0A0A0A]/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-[#EBE9E4] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></div>
<div className="w-full md:w-3/5 relative z-10 md:pl-6 transition-transform duration-500 group-hover:translate-x-4">
<h4 className="text-3xl font-serif tracking-tight text-[#0A0A0A] mb-3">Editorial Wedding</h4>
<p className="text-sm text-[#737373] font-light leading-relaxed max-w-md">Comprehensive coverage focusing on the narrative of your day, blending documentary and styled portraits.</p>
</div>
<div className="w-full md:w-auto flex justify-between md:justify-end items-center gap-12 relative z-10 md:pr-6">
<span className="text-xl font-light text-[#0A0A0A] tracking-tight">From $5,500</span>
<div className="w-10 h-10 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-[#F5F4F0] transition-colors duration-500">
<iconify-icon className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="group border-t border-[#0A0A0A]/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-[#EBE9E4] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></div>
<div className="w-full md:w-3/5 relative z-10 md:pl-6 transition-transform duration-500 group-hover:translate-x-4">
<h4 className="text-3xl font-serif tracking-tight text-[#0A0A0A] mb-3">Destination Elopement</h4>
<p className="text-sm text-[#737373] font-light leading-relaxed max-w-md">Intimate storytelling for couples choosing extraordinary locations. Includes travel logistics consultation.</p>
</div>
<div className="w-full md:w-auto flex justify-between md:justify-end items-center gap-12 relative z-10 md:pr-6">
<span className="text-xl font-light text-[#0A0A0A] tracking-tight">From $4,200</span>
<div className="w-10 h-10 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-[#F5F4F0] transition-colors duration-500">
<iconify-icon className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="group border-y border-[#0A0A0A]/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-[#EBE9E4] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></div>
<div className="w-full md:w-3/5 relative z-10 md:pl-6 transition-transform duration-500 group-hover:translate-x-4">
<h4 className="text-3xl font-serif tracking-tight text-[#0A0A0A] mb-3">Portrait / Brand</h4>
<p className="text-sm text-[#737373] font-light leading-relaxed max-w-md">Curated sessions for individuals, couples, or brands requiring a high-end editorial aesthetic.</p>
</div>
<div className="w-full md:w-auto flex justify-between md:justify-end items-center gap-12 relative z-10 md:pr-6">
<span className="text-xl font-light text-[#0A0A0A] tracking-tight">From $1,500</span>
<div className="w-10 h-10 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-[#F5F4F0] transition-colors duration-500">
<iconify-icon className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 bg-[#050505] text-[#F5F4F0] relative z-20" id="contact">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
<div className="pt-4">
<p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#737373] mb-8">Inquiries</p>
<h2 className="text-5xl md:text-7xl font-serif tracking-tighter uppercase mb-10 leading-[0.95]">Let's Create <br/> Together</h2>
<p className="text-base font-light text-[#A3A3A3] max-w-md mb-20 leading-relaxed">
                    I take on a limited number of commissions each year to ensure the highest quality of art and experience. Please share your vision with me.
                </p>
<div className="space-y-4 text-sm font-light">
<p className="uppercase tracking-widest text-[0.65rem] text-[#737373]">Direct Communication</p>
<a className="block text-2xl font-serif tracking-tight hover:text-[#A3A3A3] transition-colors duration-500 pb-2" href="mailto:studio@xrstudio.com">studio@xrstudio.com</a>
<p className="text-[#737373]">Based in London, Available Worldwide.</p>
</div>
</div>

<form className="space-y-12">
<div className="relative group">
<input className="w-full bg-transparent border-b border-[#333333] py-4 text-base focus:outline-none focus:border-[#F5F4F0] transition-colors peer placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 top-4 text-base text-[#737373] font-light peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-[#F5F4F0] peer-focus:uppercase peer-focus:tracking-widest peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all duration-300" htmlFor="name">Your Name</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-[#333333] py-4 text-base focus:outline-none focus:border-[#F5F4F0] transition-colors peer placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 top-4 text-base text-[#737373] font-light peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-[#F5F4F0] peer-focus:uppercase peer-focus:tracking-widest peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all duration-300" htmlFor="email">Email Address</label>
</div>
<div className="relative group">
<div className="relative">
<select className="w-full bg-transparent border-b border-[#333333] py-4 text-base focus:outline-none focus:border-[#F5F4F0] transition-colors appearance-none cursor-pointer font-light text-[#F5F4F0] opacity-70 focus:opacity-100 rounded-none" id="service">
<option className="text-[#0A0A0A]" disabled="" selected="" value="">Select a Service</option>
<option className="text-[#0A0A0A]" value="wedding">Editorial Wedding</option>
<option className="text-[#0A0A0A]" value="elopement">Destination Elopement</option>
<option className="text-[#0A0A0A]" value="portrait">Portrait Session</option>
</select>
<iconify-icon className="absolute right-0 top-5 text-[#737373] pointer-events-none group-hover:text-[#F5F4F0] transition-colors" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-[#333333] py-4 text-base focus:outline-none focus:border-[#F5F4F0] transition-colors peer placeholder-transparent resize-none" id="message" placeholder="Message" rows="3"></textarea>
<label className="absolute left-0 top-4 text-base text-[#737373] font-light peer-focus:-top-4 peer-focus:text-[0.65rem] peer-focus:text-[#F5F4F0] peer-focus:uppercase peer-focus:tracking-widest peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all duration-300" htmlFor="message">Tell me about your plans...</label>
</div>

<label className="flex items-start gap-5 cursor-pointer group/check pt-2">
<div className="relative flex-shrink-0 w-4 h-4 mt-1 border border-[#555555] group-hover/check:border-[#F5F4F0] transition-colors duration-300">
<input className="peer sr-only" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-[#F5F4F0] opacity-0 peer-checked:opacity-100 transition-opacity duration-300" height="14" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-[#737373] font-light leading-relaxed group-hover/check:text-[#A3A3A3] transition-colors">I agree to the processing of my data for communication purposes according to the privacy policy.</span>
</label>
<button className="w-full py-6 mt-4 bg-[#F5F4F0] text-[#0A0A0A] text-xs uppercase tracking-[0.2em] hover:bg-[#D5D4D0] transition-colors duration-500 font-medium" type="button">
                    Submit Inquiry
                </button>
</form>
</div>
</section>

<footer className="py-16 border-t border-[#0A0A0A]/10 px-6 bg-[#F5F4F0] relative z-10">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
<div className="text-2xl font-serif tracking-tighter uppercase text-[#0A0A0A]">
                XR Studio
            </div>
<p className="text-xs text-[#737373] font-light tracking-wide">
                © 2024 XR STUDIO. ALL RIGHTS RESERVED.
            </p>
<div className="flex space-x-10 text-[0.65rem] text-[#0A0A0A] font-light uppercase tracking-[0.2em]">
<a className="hover-underline pb-1" href="#">Instagram</a>
<a className="hover-underline pb-1" href="#">Pinterest</a>
</div>
</div>
</footer>

    </>
  );
}

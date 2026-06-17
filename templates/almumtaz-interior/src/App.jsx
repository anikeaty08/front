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



        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-up').forEach((el) => {
                observer.observe(el);
            });
        });
    
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
      

<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white reveal-up">

<a className="group flex items-center" href="#">
<span className="uppercase text-3xl font-normal tracking-tight font-serif">Mumtaz.</span>
</a>

<div className="flex items-center gap-8 md:gap-12">
<div className="hidden md:flex gap-8">
<a className="text-xs uppercase tracking-widest font-light hover:opacity-60 transition-opacity duration-300" href="#projects">Projects</a>
<a className="text-xs uppercase tracking-widest font-light hover:opacity-60 transition-opacity duration-300" href="#process">Process</a>
<a className="text-xs uppercase tracking-widest font-light hover:opacity-60 transition-opacity duration-300" href="#materials">Materials</a>
</div>
<a className="group relative inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-500" href="#commission">
<span className="text-xs uppercase tracking-widest font-normal">Book Consultation</span>
</a>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#171717]">

<div className="absolute inset-0 w-full h-full z-0">
<div className="absolute inset-0 bg-black/40 z-10"></div>
<img alt="Luxury Living Space UAE" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b69f4321-07c1-4a2b-b610-852f7f5e5013_1600w.jpg" style={{transform: 'scale(1.02)', transition: 'transform 10s ease-out'}}/>
</div>

<div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto reveal-up" style={{animationDelay: '200ms'}}>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-8 font-light">
                Architectural Elegance <br/>
<span className="italic font-light opacity-90 text-white/80">Tailored for You</span>
</h1>
<p className="font-sans text-sm md:text-base font-light tracking-wide max-w-xl mx-auto text-white/70 uppercase">
                Bespoke Interior Design &amp; Custom Furniture — Dubai, UAE
            </p>
<div className="absolute bottom-[-25vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 reveal-up" style={{animationDelay: '600ms'}}>
<div className="h-16 w-[1px] bg-white/20"></div>
<span className="text-xs uppercase tracking-widest font-light text-white/50">Scroll</span>
</div>
</div>
</header>

<section className="md:py-48 md:px-12 text-center max-w-screen-xl border-black/5 border-b mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="max-w-4xl mx-auto space-y-10 fade-in-up">
<span className="text-xs uppercase tracking-widest text-[#171717]/40 block font-normal">The Philosophy</span>
<p className="font-serif text-3xl md:text-5xl leading-tight text-[#171717] font-light tracking-tight">
                We do not simply furnish spaces. We orchestrate environments that articulate your legacy. Each commission is a synthesis of <span className="italic text-[#171717]/60">Middle Eastern heritage</span> and absolute contemporary precision.
            </p>
</div>
</section>

<section className="md:px-12 max-w-[1920px] mr-auto ml-auto pt-32 pr-4 pb-32 pl-4" id="projects">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

<div className="group relative aspect-[4/3] overflow-hidden bg-[#E5E5E5] fade-in-up">
<img alt="Palm Jumeirah Villa" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69e1b52d-44e6-436d-a1ee-b97f311e5491_800w.jpg?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<h3 className="font-serif text-3xl italic tracking-tight font-light">Palm Jumeirah Villa</h3>
<p className="text-xs uppercase tracking-widest mt-2 font-light text-white/80">Full Interior Architecture</p>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden bg-[#E5E5E5] md:mt-24 fade-in-up delay-200">
<img alt="Emirates Hills Mansion" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fbe262d-7505-472d-8cb8-ae33debebd2b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<h3 className="font-serif text-3xl italic tracking-tight font-light">Emirates Hills Estate</h3>
<p className="text-xs uppercase tracking-widest mt-2 font-light text-white/80">Bespoke Majlis &amp; Dining</p>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden bg-[#E5E5E5] fade-in-up delay-100">
<img alt="Saadiyat Island Residence" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5775e82a-16c6-412d-8987-28040a74f758_800w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<h3 className="font-serif text-3xl italic tracking-tight font-light">Saadiyat Island Residence</h3>
<p className="text-xs uppercase tracking-widest mt-2 font-light text-white/80">Custom Joinery &amp; Millwork</p>
</div>
</div>

<div className="flex items-center justify-center aspect-[4/3] md:mt-24 border border-black/5 hover:bg-black/5 transition-colors duration-500 fade-in-up delay-300">
<a className="group flex flex-col items-center gap-6 p-12 w-full h-full justify-center" href="#">
<span className="font-serif text-4xl italic text-[#171717] tracking-tight font-light">View Archive</span>
<iconify-icon className="text-[#171717] group-hover:translate-x-3 transition-transform duration-500" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5', fontSize: '1.5rem'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 bg-white px-6 md:px-12 border-y border-black/5">
<div className="max-w-4xl mx-auto text-center relative flex flex-col items-center fade-in-up">
<iconify-icon className="text-[#171717]/20 mb-8" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5', fontSize: '2.5rem'}}></iconify-icon>
<p className="font-serif text-2xl md:text-4xl leading-relaxed text-[#171717] mb-12 font-light tracking-tight">
                "Mumtaz Interiors interpreted our vision with an unmatched level of sophistication. The custom furnishings are not just pieces, they are the focal points of our home."
            </p>
<div className="flex flex-col items-center gap-3">
<span className="text-xs uppercase tracking-widest font-normal text-[#171717]">Private Client</span>
<span className="font-serif italic text-sm text-[#171717]/50">Al Barari, Dubai</span>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto border-b border-black/5 bg-[#FAFAFA]" id="process">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
<div className="md:col-span-3 fade-in-up">
<span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-6 font-normal">Methodology</span>
<h2 className="font-serif text-4xl tracking-tight font-light leading-tight">The Art of <br/><span className="italic text-[#171717]/50">Creation</span></h2>
</div>
<div className="md:col-span-9 grid grid-cols-1 md:grid-cols-4 gap-12 relative">

<div className="hidden md:block absolute top-4 left-0 w-full h-[1px] bg-black/5"></div>

<div className="relative pt-8 fade-in-up delay-100">
<span className="absolute top-0 left-0 -translate-y-1/2 bg-[#FAFAFA] pr-6 font-serif text-2xl tracking-tight text-[#171717]/30 italic">01</span>
<h3 className="text-xs uppercase tracking-widest font-normal mb-4">Envision</h3>
<p className="font-sans text-sm text-[#171717]/60 leading-relaxed font-light">A comprehensive dialogue to uncover your aesthetic inclinations, lifestyle requirements, and spatial architecture.</p>
</div>

<div className="relative pt-8 fade-in-up delay-200">
<span className="absolute top-0 left-0 -translate-y-1/2 bg-[#FAFAFA] pr-6 font-serif text-2xl tracking-tight text-[#171717]/30 italic">02</span>
<h3 className="text-xs uppercase tracking-widest font-normal mb-4">Architect</h3>
<p className="font-sans text-sm text-[#171717]/60 leading-relaxed font-light">Our studio develops precise spatial plans, curated material palettes, and exact technical drawings.</p>
</div>

<div className="relative pt-8 fade-in-up delay-300">
<span className="absolute top-0 left-0 -translate-y-1/2 bg-[#FAFAFA] pr-6 font-serif text-2xl tracking-tight text-[#171717]/30 italic">03</span>
<h3 className="text-xs uppercase tracking-widest font-normal mb-4">Craft</h3>
<p className="font-sans text-sm text-[#171717]/60 leading-relaxed font-light">Master artisans in our UAE and European workshops hand-fabricate each element with unyielding precision.</p>
</div>

<div className="relative pt-8 fade-in-up delay-400">
<span className="absolute top-0 left-0 -translate-y-1/2 bg-[#FAFAFA] pr-6 font-serif text-2xl tracking-tight text-[#171717]/30 italic">04</span>
<h3 className="text-xs uppercase tracking-widest font-normal mb-4">Realize</h3>
<p className="font-sans text-sm text-[#171717]/60 leading-relaxed font-light">White-glove installation managed by our lead architects, ensuring flawless integration into your space.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white border-y border-black/5">
<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
<div className="w-full md:w-5/12 aspect-[3/4] overflow-hidden relative bg-[#FAFAFA] fade-in-up">
<img alt="Mumtaz Studio" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-[2s] ease-out" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="w-full md:w-7/12 space-y-8 fade-in-up delay-200">
<span className="text-xs uppercase tracking-widest text-[#171717]/40 font-normal">The Studio</span>
<h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight font-light text-[#171717]">
                    "Design that responds to the architecture of the space, and the <span className="italic text-[#171717]/50">rhythm of those who inhabit it.</span>"
                </h2>
<p className="font-sans text-sm text-[#171717]/60 leading-relaxed max-w-lg font-light">
                    Headquartered in Dubai, Mumtaz Interiors operates on the conviction that true luxury is restrained, functional, and deeply personal. We balance the warmth of regional context with global architectural standards to deliver spaces of enduring quality.
                </p>
<a className="inline-flex items-center gap-3 text-xs uppercase tracking-widest mt-4 font-normal group" href="#">
<span>Discover Our Origins</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[#0A0A0A] text-white relative overflow-hidden" id="commission">
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
<div className="fade-in-up">
<h2 className="font-serif text-5xl md:text-7xl mb-6 leading-none tracking-tight font-light">Begin Your <br/><span className="italic text-white/60">Commission</span></h2>
<p className="font-sans text-white/50 max-w-md mx-auto mb-16 text-sm font-light leading-relaxed">
                    We invite you to our Dubai showroom to discuss your residential or commercial project. Mumtaz accepts a selective number of private commissions annually.
                </p>
</div>

<form className="w-full max-w-md mx-auto text-left space-y-8 fade-in-up delay-200">
<div className="space-y-3">
<label className="text-[10px] uppercase tracking-widest font-normal text-white/40 block">Name</label>
<input className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white font-light focus:outline-none focus:border-white/60 transition-colors placeholder-white/30" placeholder="Enter your full name" type="text"/>
</div>
<div className="space-y-3">
<label className="text-[10px] uppercase tracking-widest font-normal text-white/40 block">Email</label>
<input className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white font-light focus:outline-none focus:border-white/60 transition-colors placeholder-white/30" placeholder="Enter your email address" type="email"/>
</div>
<div className="space-y-3">
<label className="text-[10px] uppercase tracking-widest font-normal text-white/40 block">Project Details</label>
<textarea className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white font-light focus:outline-none focus:border-white/60 transition-colors placeholder-white/30 resize-none" placeholder="Describe your space and vision..." rows="4"></textarea>
</div>
<button className="w-full px-8 py-4 bg-white text-black text-xs uppercase tracking-widest font-normal hover:bg-[#E5E5E5] transition-colors duration-300 text-center flex justify-center items-center gap-3 group mt-4" type="button">
                    Submit Inquiry
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
</button>
</form>
<div className="mt-24 text-xs text-white/40 tracking-widest font-light flex items-center gap-4 fade-in-up delay-400">
<span className="">Dubai Design District</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>United Arab Emirates</span>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
<div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24 mb-24">

<div className="space-y-6 fade-in-up">
<span className="font-serif text-3xl tracking-tight font-light uppercase">Mumtaz.</span>
<p className="text-xs uppercase tracking-widest text-white/40 font-light">Est. 2018 — UAE</p>
<p className="text-sm text-white/50 leading-relaxed max-w-xs font-light">
                    Redefining interior architecture and bespoke furniture through the lens of modern minimalism and regional heritage.
                </p>
</div>

<div className="fade-in-up delay-100">
<h4 className="text-xs uppercase tracking-widest text-white/80 mb-6 font-normal">Explore</h4>
<ul className="space-y-4 text-sm text-white/50 font-light">
<li className=""><a className="hover:text-white transition-colors" href="#">Selected Works</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Our Approach</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Bespoke Furniture</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Material Library</a></li>
</ul>
</div>

<div className="fade-in-up delay-200">
<h4 className="text-xs uppercase tracking-widest text-white/80 mb-6 font-normal">Connect</h4>
<ul className="space-y-4 text-sm text-white/50 font-light">
<li className=""><a className="hover:text-white transition-colors" href="#">Book Consultation</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">General Inquiries</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Press &amp; Media</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div className="fade-in-up delay-300">
<h4 className="text-xs uppercase tracking-widest text-white/80 mb-6 font-normal">Visit Studio</h4>
<address className="not-italic text-sm text-white/50 font-light space-y-4">
<p className="">Building 4, Dubai Design District<br/>Dubai, United Arab Emirates</p>
<p className=""><a className="hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-1" href="mailto:studio@mumtazinteriors.ae">studio@mumtazinteriors.ae</a></p>
<p className="text-xs uppercase tracking-widest pt-4 opacity-50">By Appointment Only</p>
</address>
<div className="flex gap-6 mt-10 text-white/40">
<a aria-label="Instagram" className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="LinkedIn" className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:buildings-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="Twitter" className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:hashtag-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-white/30 font-light fade-in-up delay-400">
<p>© 2025 Mumtaz Interiors UAE. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}

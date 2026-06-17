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
      

<div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#F5E6D3] opacity-30 blur-[120px]"></div>
<div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#E5E5E5] opacity-40 blur-[100px]"></div>
</div>

<nav className="sticky top-0 z-50 bg-[#FAFAF9]/80 backdrop-blur-xl border-b border-[#E7E5E4]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<a className="text-xl font-semibold tracking-tighter uppercase text-[#1C1917]" href="#">
                    AURA<span className="text-[#B45309]">SPACE</span>
</a>
<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-normal text-[#57534E] hover:text-[#1C1917] transition-colors" href="#about">About Us</a>
<a className="text-sm font-normal text-[#57534E] hover:text-[#1C1917] transition-colors" href="#services">Services</a>
<a className="text-sm font-normal text-[#57534E] hover:text-[#1C1917] transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-normal text-[#57534E] hover:text-[#1C1917] transition-colors" href="#contact">Contact</a>
</div>
<div className="hidden md:flex">
<a className="px-6 py-2.5 bg-[#1C1917] text-white text-sm font-normal rounded-full hover:bg-[#292524] transition-all shadow-[0_2px_10px_0_rgba(28,28,28,0.1)]" href="#contact">
                        Consult Now
                    </a>
</div>

<button className="md:hidden text-[#1C1917] p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E7E5E4] mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#B45309]"></span>
<span className="text-xs font-normal text-[#57534E]">Premium Interior Design Studio</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1C1917] leading-[1.1]">
                    Where Design <br/>
<span className="text-[#B45309] italic font-normal tracking-tight">Meets Comfort.</span>
</h1>
<p className="mt-6 text-lg text-[#57534E] font-normal max-w-lg leading-relaxed">
                    We transform your spaces into elegant and functional masterpieces, blending high-end aesthetics with everyday living.
                </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#1C1917] text-white text-sm font-normal rounded-full hover:bg-[#292524] transition-all shadow-[0_4px_14px_0_rgba(28,28,28,0.15)]" href="#contact">
                        Book Free Consultation
                        <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-[#1C1917] text-sm font-normal rounded-full border border-[#E7E5E4] hover:bg-[#F5F5F4] transition-all" href="#gallery">
                        Explore Designs
                    </a>
</div>
</div>
<div className="lg:w-1/2 w-full relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#FAFAF9] to-transparent z-10 lg:hidden"></div>
<img alt="Luxury Living Room" className="rounded-3xl shadow-2xl w-full h-[500px] lg:h-[650px] object-cover border border-[#E7E5E4]/50" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md border border-[#E7E5E4] p-4 rounded-2xl shadow-lg hidden md:flex items-center gap-4">
<div className="w-12 h-12 bg-[#FEF3C7] rounded-full flex items-center justify-center text-[#B45309]">
<iconify-icon height="24" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-[#1C1917]">Award Winning</p>
<p className="text-xs text-[#57534E]">Design Studio 2023</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-[#E7E5E4]" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2 order-2 lg:order-1 relative">
<img alt="Aesthetic Decor" className="rounded-3xl w-full h-[500px] object-cover shadow-[0_8px_30px_rgb(0,0,0,0.04)]" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FAFAF9] rounded-3xl border border-[#E7E5E4] p-6 hidden md:flex flex-col justify-center shadow-sm">
<span className="text-4xl font-semibold tracking-tight text-[#1C1917]">10+</span>
<span className="text-sm text-[#57534E] mt-1">Years of crafting elegant spaces</span>
</div>
</div>
<div className="lg:w-1/2 order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1C1917] mb-6">Our Vision &amp; Story</h2>
<p className="text-base text-[#57534E] mb-6 leading-relaxed font-normal">
                        At AuraSpace Interiors, we believe that your environment profoundly shapes your daily experience. Born from a passion for minimalist luxury and functional artistry, our studio dedicates itself to creating spaces that feel as good as they look.
                    </p>
<p className="text-base text-[#57534E] mb-8 leading-relaxed font-normal">
                        Every project is a unique collaboration. We blend soft palettes, curated textures, and bespoke furniture to bring your dream sanctuary to life, ensuring uncompromised quality from concept to completion.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-[#E7E5E4] pt-8">
<div>
<p className="text-2xl font-semibold tracking-tight text-[#1C1917]">500+</p>
<p className="text-sm text-[#57534E] mt-1">Projects Delivered</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-[#1C1917]">100%</p>
<p className="text-sm text-[#57534E] mt-1">Client Satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9]" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1C1917] mb-4">Bespoke Services</h2>
<p className="text-base text-[#57534E] font-normal">Comprehensive interior solutions tailored to elevate your lifestyle and redefine your spaces.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-[#E7E5E4] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] flex items-center justify-center mb-6 group-hover:bg-[#1C1917] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon height="24" icon="solar:sofa-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1C1917] mb-3">Home Interior</h3>
<p className="text-sm text-[#57534E] font-normal leading-relaxed">Turnkey residential design focusing on comfort, aesthetics, and personalized living spaces.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-[#E7E5E4] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] flex items-center justify-center mb-6 group-hover:bg-[#1C1917] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon height="24" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1C1917] mb-3">Office Design</h3>
<p className="text-sm text-[#57534E] font-normal leading-relaxed">Modern, ergonomic workspaces that boost productivity and reflect your corporate identity.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-[#E7E5E4] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] flex items-center justify-center mb-6 group-hover:bg-[#1C1917] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon height="24" icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1C1917] mb-3">Modular Kitchen</h3>
<p className="text-sm text-[#57534E] font-normal leading-relaxed">Sleek, highly functional kitchen designs combining premium finishes with smart storage.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-[#E7E5E4] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] flex items-center justify-center mb-6 group-hover:bg-[#1C1917] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon height="24" icon="solar:box-3d-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1C1917] mb-3">3D Design</h3>
<p className="text-sm text-[#57534E] font-normal leading-relaxed">Photorealistic 3D rendering allowing you to visualize your space before execution begins.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-[#E7E5E4] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group cursor-pointer md:col-span-2 lg:col-span-2">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-12 h-12 rounded-2xl bg-[#FAFAF9] border border-[#E7E5E4] flex shrink-0 items-center justify-center group-hover:bg-[#1C1917] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon height="24" icon="solar:hammer-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-[#1C1917] mb-2">Renovation &amp; Remodeling</h3>
<p className="text-sm text-[#57534E] font-normal leading-relaxed max-w-xl">Breathe new life into outdated spaces. We handle end-to-end renovations, upgrading layouts, materials, and infrastructure with minimal disruption to your routine.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1C1917] text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white max-w-md">Why AuraSpace is the right choice for you</h2>
<a className="inline-flex justify-center items-center px-6 py-3 bg-white text-[#1C1917] text-sm font-normal rounded-full hover:bg-[#E7E5E4] transition-all" href="#contact">
                    Start Your Project
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#44403C] pt-12">
<div>
<iconify-icon className="text-[#B45309] mb-6" height="32" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-3">Absolute Trust</h3>
<p className="text-sm text-[#A8A29E] font-normal leading-relaxed">Transparent pricing, clear timelines, and open communication throughout the entire process.</p>
</div>
<div>
<iconify-icon className="text-[#B45309] mb-6" height="32" icon="solar:crown-star-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-3">Premium Quality</h3>
<p className="text-sm text-[#A8A29E] font-normal leading-relaxed">We source only the finest materials and employ master craftsmen to ensure flawless execution.</p>
</div>
<div>
<iconify-icon className="text-[#B45309] mb-6" height="32" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-3">Accessible Luxury</h3>
<p className="text-sm text-[#A8A29E] font-normal leading-relaxed">High-end aesthetics engineered to fit within your specified budget without compromising style.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-[#E7E5E4]" id="gallery">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1C1917] mb-12 text-center">Featured Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
<div className="lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Modern Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<p className="text-white font-semibold tracking-tight text-xl">The Serene Villa</p>
</div>
</div>
<div className="rounded-3xl overflow-hidden relative group">
<img alt="Modular Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-semibold tracking-tight text-lg">Minimalist Kitchen</p>
</div>
</div>
<div className="rounded-3xl overflow-hidden relative group">
<img alt="Office Space" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-semibold tracking-tight text-lg">Corporate Lounge</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-normal text-[#1C1917] hover:text-[#B45309] transition-colors" href="#">
                    View Full Portfolio
                    <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9]" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-white rounded-[2rem] border border-[#E7E5E4] p-8 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-[#1C1917] mb-2">Let's discuss your space</h2>
<p className="text-sm text-[#57534E] font-normal mb-8">Fill out the form below and our design experts will reach out to you shortly.</p>
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold tracking-tight text-[#57534E]">First Name</label>
<input className="w-full bg-[#FAFAF9] border border-[#E7E5E4] rounded-xl px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#B45309]/20 focus:border-[#B45309] transition-all placeholder:text-[#A8A29E]" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold tracking-tight text-[#57534E]">Last Name</label>
<input className="w-full bg-[#FAFAF9] border border-[#E7E5E4] rounded-xl px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#B45309]/20 focus:border-[#B45309] transition-all placeholder:text-[#A8A29E]" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold tracking-tight text-[#57534E]">Email Address</label>
<input className="w-full bg-[#FAFAF9] border border-[#E7E5E4] rounded-xl px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#B45309]/20 focus:border-[#B45309] transition-all placeholder:text-[#A8A29E]" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold tracking-tight text-[#57534E]">Project Details</label>
<textarea className="w-full bg-[#FAFAF9] border border-[#E7E5E4] rounded-xl px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#B45309]/20 focus:border-[#B45309] transition-all placeholder:text-[#A8A29E] resize-none" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-[#1C1917] text-white text-sm font-normal rounded-xl hover:bg-[#292524] transition-all shadow-sm" type="button">
                                Send Message
                            </button>
</form>
</div>

<div className="flex flex-col justify-center">
<div className="space-y-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#FAFAF9] border border-[#E7E5E4] flex items-center justify-center shrink-0 text-[#1C1917]">
<iconify-icon height="20" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-[#1C1917] mb-1">Studio Address</h4>
<p className="text-sm text-[#57534E] font-normal leading-relaxed">City Centre, Dhanbad<br/>Jharkhand, India</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#FAFAF9] border border-[#E7E5E4] flex items-center justify-center shrink-0 text-[#1C1917]">
<iconify-icon height="20" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-[#1C1917] mb-1">Phone</h4>
<p className="text-sm text-[#57534E] font-normal">+91 99050 30934</p>
</div>
</div>
<div className="pt-6 border-t border-[#E7E5E4]">
<p className="text-sm font-semibold tracking-tight text-[#1C1917] mb-4">Prefer instant messaging?</p>
<a className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/10 text-[#075E54] border border-[#25D366]/20 text-sm font-normal rounded-full hover:bg-[#25D366]/20 transition-all" href="https://wa.me/919905030934" target="_blank">
<iconify-icon height="18" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                    Chat on WhatsApp
                                </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-10 border-t border-[#E7E5E4] text-center">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<a className="text-lg font-semibold tracking-tighter uppercase text-[#1C1917]" href="#">
                AURA<span className="text-[#B45309]">SPACE</span>
</a>
<p className="text-xs text-[#A8A29E] font-normal">© 2023 AuraSpace Interiors. All rights reserved.</p>
</div>
</footer>

    </>
  );
}

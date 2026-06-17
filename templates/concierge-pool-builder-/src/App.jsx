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



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Header Scroll Effect - Refined utility toggles
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('shadow-sm');
                header.classList.remove('py-4');
                header.classList.add('py-2');
            } else {
                header.classList.remove('shadow-sm');
                header.classList.remove('py-2');
                header.classList.add('py-4');
            }
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
      

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white/80 backdrop-blur-md border-b border-black/5" id="header">
<div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">

<a className="flex-shrink-0" href="#">
<img alt="Concierge Pools Logo" className="w-auto h-14 object-contain" onerror="this.src='https://placehold.co/400x120?text=Concierge+Pools'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c0867fe-e4fe-4778-a442-e9e66add391a_800w.png"/>
</a>

<nav className="hidden md:flex space-x-10 items-center">
<a className="text-sm font-light hover:text-[#c5a059] transition-colors duration-300 uppercase tracking-widest text-[#111827]" href="#about">About</a>
<a className="text-sm font-light hover:text-[#c5a059] transition-colors duration-300 uppercase tracking-widest text-[#111827]" href="#services">Services</a>
<a className="text-sm font-light hover:text-[#c5a059] transition-colors duration-300 uppercase tracking-widest text-[#111827]" href="#portfolio">Portfolio</a>
<a className="text-sm font-light hover:text-[#c5a059] transition-colors duration-300 uppercase tracking-widest text-[#111827]" href="#contact">Contact</a>
<a className="bg-[#111827] hover:bg-[#c5a059] text-white px-6 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-normal tracking-wide shadow-sm" href="tel:2394519985">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> (239) 451-9985
                </a>
</nav>

<button className="md:hidden text-2xl focus:outline-none text-[#111827] hover:text-[#c5a059] transition-colors" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-t border-black/5 flex flex-col shadow-2xl" id="mobile-menu">
<a className="px-8 py-5 border-b border-black/5 text-sm font-normal uppercase tracking-widest hover:text-[#c5a059] text-[#111827] transition-colors" href="#about">About</a>
<a className="px-8 py-5 border-b border-black/5 text-sm font-normal uppercase tracking-widest hover:text-[#c5a059] text-[#111827] transition-colors" href="#services">Services</a>
<a className="px-8 py-5 border-b border-black/5 text-sm font-normal uppercase tracking-widest hover:text-[#c5a059] text-[#111827] transition-colors" href="#portfolio">Portfolio</a>
<a className="px-8 py-5 border-b border-black/5 text-sm font-normal uppercase tracking-widest hover:text-[#c5a059] text-[#111827] transition-colors" href="#contact">Contact</a>
<a className="px-8 py-6 bg-neutral-50 text-[#c5a059] font-normal flex items-center gap-3 text-base tracking-wide" href="tel:2394519985">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> (239) 451-9985
            </a>
</div>
</header>

<section className="min-h-[600px] flex -mt-20 bg-center bg-fixed h-[90vh] bg-cover items-center" style={{backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.45), rgba(17, 24, 39, 0.25)), url(\'https: //images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp'}}>
<div className="container mx-auto px-6 lg:px-12 text-center md:text-left pt-20">
<div className="inline-flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-[#c5a059]"></span>
<h2 className="text-[#c5a059] font-normal tracking-[0.2em] uppercase text-sm">Bespoke Outdoor Living</h2>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-8 max-w-4xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Your Private Oasis <br/> <span className="font-light italic text-white/90">in Naples, Florida</span>
</h1>
<p className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
                Experience the pinnacle of luxury with Concierge Pools. We design, build, and renovate breathtaking swimming pools with uncompromising quality and white-glove service.
            </p>
<div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
<a className="bg-[#c5a059] hover:bg-[#b08d4a] text-white px-8 py-4 rounded-full transition-all duration-300 text-center font-normal tracking-wide uppercase text-sm shadow-lg shadow-[#c5a059]/20" href="#contact">
                    Schedule a Consultation
                </a>
<a className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-[#111827] px-8 py-4 rounded-full transition-all duration-300 text-center font-normal tracking-wide uppercase text-sm" href="#portfolio">
                    View Portfolio
                </a>
</div>
</div>
</section>

<section className="py-32 bg-white" id="about">
<div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-20">
<div className="lg:w-1/2 relative">
<div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] group">
<img alt="Luxury Custom Pool" className="transition-transform duration-1000 group-hover:scale-105 w-full h-[600px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cba4fff-8f76-4ff0-9ce6-1764996cc1ec_1600w.png"/>
</div>
<div className="absolute -bottom-10 -right-10 bg-[#0c4a6e] text-white p-10 hidden md:flex flex-col rounded-2xl shadow-xl backdrop-blur-md border border-white/10 z-10">
<p className="font-medium text-5xl tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>5-Star</p>
<p className="text-sm uppercase tracking-[0.2em] text-[#c5a059] font-normal">Concierge Service</p>
</div>
</div>
<div className="lg:w-1/2">
<h4 className="text-[#c5a059] font-normal tracking-widest uppercase text-sm mb-4">About Us</h4>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#111827] mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>The Standard of Elegance in Naples</h2>
<div className="space-y-6 text-neutral-500 font-light leading-relaxed text-lg">
<p className="">
                        At <strong className="font-normal text-[#111827]">Concierge Pools</strong>, we believe your backyard should be an extension of your home's architecture and your personal lifestyle. Operating exclusively in the greater Naples, Florida area, we specialize in high-end, custom swimming pool construction, comprehensive renovations, and complete outdoor living environments.
                    </p>
<p className="">
                        Our name reflects our philosophy: we handle every detail from the initial design to the final drop of water, providing a seamless, stress-free experience. We use only premium materials and state-of-the-art equipment to ensure your pool is as durable as it is beautiful.
                    </p>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mt-10 mb-12">
<li className="flex items-center text-neutral-600 text-base font-light"><iconify-icon className="text-[#c5a059] mr-3 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Custom Design</li>
<li className="flex items-center text-neutral-600 text-base font-light"><iconify-icon className="text-[#c5a059] mr-3 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Premium Materials</li>
<li className="flex items-center text-neutral-600 text-base font-light"><iconify-icon className="text-[#c5a059] mr-3 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Dedicated Managers</li>
<li className="flex items-center text-neutral-600 text-base font-light"><iconify-icon className="text-[#c5a059] mr-3 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Clear Communication</li>
</ul>
<a className="group inline-flex items-center text-[#111827] font-normal hover:text-[#c5a059] transition-colors duration-300 uppercase tracking-widest text-sm" href="#contact">
                    Discover the Difference 
                    <iconify-icon className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 bg-[#f9fafb]" id="services">
<div className="container mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-20">
<h4 className="text-[#c5a059] font-normal tracking-widest uppercase text-sm mb-4">Our Expertise</h4>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#111827] mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Mastering the Art of Water</h2>
<p className="text-neutral-500 font-light leading-relaxed text-lg">From concept to completion, our suite of services is designed to create the ultimate backyard retreat tailored entirely to your vision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-10 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-black/[0.03] transition-all duration-500 flex flex-col h-full hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-[#f9fafb] flex items-center justify-center text-[#0c4a6e] group-hover:bg-[#0c4a6e] group-hover:text-white transition-colors duration-500 mb-8">
<iconify-icon className="text-2xl" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#111827] mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Custom Design</h3>
<p className="text-neutral-500 text-base font-light leading-relaxed flex-grow">Using advanced software, we design architectural pools that perfectly complement your Naples estate, incorporating vanishing edges, fire features, and custom spas.</p>
</div>

<div className="group bg-white p-10 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-black/[0.03] transition-all duration-500 flex flex-col h-full hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-[#f9fafb] flex items-center justify-center text-[#0c4a6e] group-hover:bg-[#0c4a6e] group-hover:text-white transition-colors duration-500 mb-8">
<iconify-icon className="text-2xl" icon="solar:wall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#111827] mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>New Construction</h3>
<p className="text-neutral-500 text-base font-light leading-relaxed flex-grow">Our master builders execute the design with flawless precision. We manage all permitting, engineering, and construction phases to ensure an impeccable final product.</p>
</div>

<div className="group bg-white p-10 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-black/[0.03] transition-all duration-500 flex flex-col h-full hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-[#f9fafb] flex items-center justify-center text-[#0c4a6e] group-hover:bg-[#0c4a6e] group-hover:text-white transition-colors duration-500 mb-8">
<iconify-icon className="text-2xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#111827] mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Remodeling</h3>
<p className="text-neutral-500 text-base font-light leading-relaxed flex-grow">Breathe new life into your existing pool. From resurfacing and modern tile upgrades to adding sun shelves and smart-home automation, we transform outdated pools.</p>
</div>

<div className="group bg-white p-10 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-black/[0.03] transition-all duration-500 flex flex-col h-full hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-[#f9fafb] flex items-center justify-center text-[#0c4a6e] group-hover:bg-[#0c4a6e] group-hover:text-white transition-colors duration-500 mb-8">
<iconify-icon className="text-2xl" icon="solar:waterdrop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#111827] mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Maintenance</h3>
<p className="text-neutral-500 text-base font-light leading-relaxed flex-grow">Keep your oasis in pristine condition year-round. We offer comprehensive maintenance packages, balancing water chemistry and ensuring equipment operates flawlessly.</p>
</div>
</div>
</div>
</section>

<section className="text-white bg-[#111827] pt-32 pb-32" id="portfolio">
<div className="container mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-12">
<div className="max-w-2xl">
<h4 className="text-[#c5a059] font-normal tracking-widest uppercase text-sm mb-4">Portfolio</h4>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Inspired Designs</h2>
<p className="text-neutral-400 font-light leading-relaxed text-lg">A glimpse into the private aquatic sanctuaries we've crafted across Southwest Florida.</p>
</div>
<div className="mt-8 md:mt-0 hidden md:block">
<a className="bg-transparent border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-white px-8 py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-sm font-normal" href="#contact">Start Your Project</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2 bg-neutral-900 h-72 lg:h-full">
<img alt="Waterfront Pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" onerror="this.src='https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop'" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 flex bg-center bg-gradient-to-t from-[#111827]/80 via-[#111827]/20 to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d3201f0-bf22-4345-8680-ebf214ff185c_1600w.jpg)] bg-cover pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white font-medium text-3xl tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Waterfront Luxury</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-900 h-72">
<img alt="Waterfront Pool with Raised Spa and Dock" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" onerror="this.src='https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop'" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 flex bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39514e18-8472-4a3c-8efb-7f843d291405_800w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white font-medium text-2xl tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Waterfront &amp; Spa</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-900 h-72">
<img alt="Freeform Pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 flex bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce49bb97-9cdb-4a15-bd26-200cf3869c6d_800w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white font-medium text-2xl tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Freeform Oasis</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl lg:col-span-3 bg-neutral-900 h-80">
<img alt="Lap Pool" className="object-bottom transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0e6605d-9566-4eb0-861e-928e3c824c31_3840w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 flex bg-gradient-to-t from-[#111827]/80 via-[#111827]/10 to-transparent opacity-0 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white font-medium text-3xl tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Ultimate Entertainment</span>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="bg-[#c5a059] text-white px-8 py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-sm font-normal inline-block w-full" href="#contact">Start Your Project</a>
</div>
</div>
</section>

<section className="py-24 bg-[#0c4a6e] relative overflow-hidden text-center flex items-center justify-center">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Ready to Build Your Dream Pool?</h2>
<p className="text-[#0c4a6e] text-blue-100/80 text-xl max-w-2xl font-light mb-10">Join the exclusive list of Naples homeowners who trust Concierge Pools to deliver architectural perfection and uncompromising quality.</p>
<a className="bg-white text-[#0c4a6e] hover:scale-105 px-10 py-4 rounded-full transition-transform duration-300 font-normal uppercase tracking-widest text-sm shadow-2xl shadow-black/10 inline-flex items-center gap-3" href="tel:2394519985">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> Call (239) 451-9985
            </a>
</div>
</section>

<section className="bg-white pt-32 pb-32" id="contact">
<div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20">

<div className="lg:w-1/3">
<h4 className="text-[#c5a059] font-normal tracking-widest uppercase text-sm mb-4">Get in Touch</h4>
<h2 className="text-4xl font-medium tracking-tight text-[#111827] mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>Contact Our Team</h2>
<p className="text-neutral-500 font-light mb-12 leading-relaxed text-lg">Whether you are considering a new luxury pool build or looking to remodel your current space, our team is ready to assist you with true concierge-level service.</p>
<div className="space-y-8">
<div className="flex items-start group">
<div className="w-12 h-12 bg-neutral-50 group-hover:bg-[#c5a059] text-[#c5a059] group-hover:text-white rounded-full flex items-center justify-center text-xl shrink-0 border border-neutral-200/60 transition-colors duration-300">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="ml-5 pt-1">
<h5 className="text-[#111827] font-medium tracking-tight mb-1 text-lg" style={{fontFamily: '\'Playfair Display\', serif'}}>Location</h5>
<p className="text-neutral-500 text-base font-light leading-relaxed">Naples, Florida<br/>Serving Collier &amp; Lee Counties</p>
</div>
</div>
<div className="flex items-start group">
<div className="w-12 h-12 bg-neutral-50 group-hover:bg-[#c5a059] text-[#c5a059] group-hover:text-white rounded-full flex items-center justify-center text-xl shrink-0 border border-neutral-200/60 transition-colors duration-300">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="ml-5 pt-1">
<h5 className="text-[#111827] font-medium tracking-tight mb-1 text-lg" style={{fontFamily: '\'Playfair Display\', serif'}}>Phone</h5>
<a className="text-neutral-500 text-base font-light hover:text-[#c5a059] transition-colors" href="tel:2394519985">(239) 451-9985</a>
</div>
</div>
<div className="flex items-start group">
<div className="w-12 h-12 bg-neutral-50 group-hover:bg-[#c5a059] text-[#c5a059] group-hover:text-white rounded-full flex items-center justify-center text-xl shrink-0 border border-neutral-200/60 transition-colors duration-300">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="ml-5 pt-1">
<h5 className="text-[#111827] font-medium tracking-tight mb-1 text-lg" style={{fontFamily: '\'Playfair Display\', serif'}}>Email</h5>
<a className="text-neutral-500 text-base font-light hover:text-[#c5a059] transition-colors" href="mailto:office@concierge-cs.com">office@concierge-cs.com</a>
</div>
</div>
</div>
</div>

<div className="lg:w-2/3">
<div className="bg-white p-8 md:p-14 rounded-3xl border border-black/5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-50"></div>
<h3 className="text-3xl font-medium tracking-tight text-[#111827] mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>Request a Consultation</h3>
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-normal text-neutral-800 uppercase tracking-widest mb-2">First Name *</label>
<input className="w-full px-5 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#c5a059]/20 focus:border-[#c5a059] outline-none transition-all text-base text-neutral-800 font-light placeholder-neutral-400" placeholder="John" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-normal text-neutral-800 uppercase tracking-widest mb-2">Last Name *</label>
<input className="w-full px-5 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#c5a059]/20 focus:border-[#c5a059] outline-none transition-all text-base text-neutral-800 font-light placeholder-neutral-400" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-normal text-neutral-800 uppercase tracking-widest mb-2">Email Address *</label>
<input className="w-full px-5 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#c5a059]/20 focus:border-[#c5a059] outline-none transition-all text-base text-neutral-800 font-light placeholder-neutral-400" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-normal text-neutral-800 uppercase tracking-widest mb-2">Phone Number *</label>
<input className="w-full px-5 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#c5a059]/20 focus:border-[#c5a059] outline-none transition-all text-base text-neutral-800 font-light placeholder-neutral-400" placeholder="(239) 555-0123" required="" type="tel"/>
</div>
</div>

<div>
<label className="block text-sm font-normal text-neutral-800 uppercase tracking-widest mb-2">Project Type</label>
<div className="relative">
<select className="w-full px-5 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#c5a059]/20 focus:border-[#c5a059] outline-none transition-all text-base text-neutral-600 font-light appearance-none cursor-pointer">
<option>New Custom Pool</option>
<option>Pool Remodel / Renovation</option>
<option>Service &amp; Maintenance</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="">
<label className="block text-sm font-normal text-neutral-800 uppercase tracking-widest mb-2">Project Details</label>
<textarea className="w-full px-5 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-[#c5a059]/20 focus:border-[#c5a059] outline-none transition-all text-base text-neutral-800 font-light placeholder-neutral-400 resize-none" placeholder="Tell us about your vision..." rows="4"></textarea>
</div>
<button className="bg-[#111827] text-white hover:bg-[#c5a059] px-8 py-4 rounded-xl transition-colors duration-300 w-full font-normal uppercase tracking-widest text-sm shadow-md" type="submit">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#111827] text-neutral-400 py-16 border-t border-white/5">
<div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="col-span-1 md:col-span-1">

<div className="mb-8">
<img alt="Concierge Pools Logo" className="bg-white/95 w-auto h-16 object-contain rounded-xl pt-2 pr-4 pb-2 pl-4" onerror="this.src='https://placehold.co/400x120?text=Concierge+Pools'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c0867fe-e4fe-4778-a442-e9e66add391a_800w.png"/>
</div>
<p className="text-base font-light leading-relaxed mb-8">Designing and building exquisite, custom swimming pools for the most discerning homeowners in Naples, Florida.</p>

<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5a059] hover:text-white transition-colors duration-300 text-lg border border-white/5" href="#"><iconify-icon icon="solar:facebook-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5a059] hover:text-white transition-colors duration-300 text-lg border border-white/5" href="#"><iconify-icon icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5a059] hover:text-white transition-colors duration-300 text-lg border border-white/5" href="#"><iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>

<div className="">
<h4 className="text-white font-medium tracking-tight text-lg mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Quick Links</h4>
<ul className="space-y-3 text-base font-light">
<li><a className="hover:text-[#c5a059] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#services">Our Services</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#portfolio">Portfolio Gallery</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#contact">Contact Us</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-medium tracking-tight text-lg mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Services</h4>
<ul className="space-y-3 text-base font-light">
<li><a className="hover:text-[#c5a059] transition-colors" href="#">Custom Pool Design</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#">New Construction</a></li>
<li><a className="hover:text-[#c5a059] transition-colors" href="#">Pool Remodeling</a></li>
<li className=""><a className="hover:text-[#c5a059] transition-colors" href="#">Service &amp; Maintenance</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium tracking-tight text-lg mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Contact Info</h4>
<ul className="space-y-4 text-base font-light">
<li className="flex items-start">
<iconify-icon className="mt-1 mr-3 text-[#c5a059] text-base shrink-0" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>Naples, Florida</span>
</li>
<li className="flex items-start">
<iconify-icon className="mt-1 mr-3 text-[#c5a059] text-base shrink-0" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:2394519985">(239) 451-9985</a>
</li>
<li className="flex items-start">
<iconify-icon className="mt-1 mr-3 text-[#c5a059] text-base shrink-0" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:office@concierge-cs.com">office@concierge-cs.com</a>
</li>
</ul>
</div>
</div>
<div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-white/10 text-sm font-light flex flex-col md:flex-row justify-between items-center text-neutral-500">
<p>© 2026 Concierge Pools. All Rights Reserved.</p>
<div className="mt-4 md:mt-0 space-x-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}

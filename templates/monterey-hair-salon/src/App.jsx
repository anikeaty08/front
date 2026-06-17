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



        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
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
      
<div className="sm:p-4 lg:p-6 max-w-[1600px] mr-auto ml-auto pt-2 pr-2 pb-2 pl-2">
<header className="relative w-full h-[95vh] min-h-[700px] rounded-[2rem] overflow-hidden shadow-2xl bg-stone-950">
<img alt="Modern Hair Salon Interior" className="grayscale-[20%] opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b via-transparent from-black/50 to-black/80"></div>
<nav className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10 animate-fade-up">
<div className="flex items-center gap-3">
<div className="backdrop-blur-md p-2 rounded-lg border flex items-center justify-center bg-white/10 border-white/10 text-white">
<i className="w-6 h-6" data-lucide="scissors" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight text-white">Monterey Hair Salon</span>
</div>
<div className="hidden md:flex gap-1 bg-white/10 border-white/10 border rounded-full pt-1.5 pr-2 pb-1.5 pl-2 backdrop-blur-md gap-x-1 gap-y-1 items-center">
<a className="px-5 py-2 text-base rounded-full transition-colors text-white/90 hover:text-white hover:bg-white/10" href="#about">About</a>
<a className="px-5 py-2 text-base rounded-full transition-colors text-white/90 hover:text-white hover:bg-white/10" href="#services">Services</a>
<a className="transition-colors hover:text-white hover:bg-white/10 text-base text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5" href="#gallery">Reviews</a>
<a className="px-5 py-2 text-base rounded-full transition-colors text-white/90 hover:text-white hover:bg-white/10" href="#reservation">Book
                        Now</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md border transition-colors bg-white/10 border-white/10 text-white hover:bg-white/20" href="#location">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</a>
<a className="group flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full transition-transform hover:scale-105 bg-white" href="#reservation">
<span className="text-base font-medium text-stone-900">Appointments</span>
<span className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-stone-800 transition-colors bg-stone-900 text-white">
<i className="w-4 h-4" data-lucide="calendar-plus" strokeWidth="1.5"></i>
</span>
</a>
</div>
</nav>
<div className="sm:p-10 flex flex-col w-full h-full z-10 pt-32 pr-6 pb-12 pl-6 absolute bottom-0 left-0 items-center justify-center">
<div className="text-center max-w-3xl">
<span className="inline-block px-3 py-1 mb-6 text-sm font-medium tracking-wider uppercase backdrop-blur-md rounded-full border text-white bg-white/20 border-white/10 animate-fade-up delay-100">
                        Professional Styling
                    </span>
<h1 className="sm:text-6xl lg:text-7xl leading-[1.1] text-5xl font-medium tracking-tight mb-6 text-white animate-fade-up delay-200">
                        Beautiful Hair,<br/>Elevated Confidence.
                    </h1>
<p className="text-xl sm:text-2xl font-normal leading-relaxed mb-10 max-w-xl mx-auto text-white/80 animate-fade-up delay-300">
                        Experience top-tier styling, color, and personalized care in a welcoming environment at Monterey Hair Salon.
                    </p>
<a className="group inline-flex items-center gap-4 pl-8 pr-2 py-2 rounded-full hover:shadow-xl transition-all bg-white text-stone-900 hover:shadow-white/10 animate-fade-up delay-400" href="#services">
<span className="text-lg font-medium">View Services</span>
<span className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-stone-700 transition-colors bg-stone-900 text-white">
<i className="w-5 h-5" data-lucide="arrow-down" strokeWidth="1.5"></i>
</span>
</a>
</div>
</div>
</header>
<section className="mt-24 px-4 sm:px-6" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
<div className="lg:col-span-6 reveal-on-scroll">
<span className="text-stone-500 font-medium uppercase text-sm tracking-wider mb-4 block">The Monterey Experience</span>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6 text-stone-900">
                        Your Local Hair Care Experts
                    </h2>
<p className="text-stone-500 text-xl leading-relaxed mb-6 font-normal">
                        Located in the heart of the community, Monterey Hair Salon is dedicated to helping you achieve your perfect look. We combine technical expertise with a passion for creative styling.
                    </p>
<p className="text-stone-500 text-lg leading-relaxed mb-8">
                        Whether you are looking for a complete transformation, vibrant new color, or simply maintaining your signature style, our talented team is here to provide a bespoke experience tailored to your unique needs.
                    </p>
<div className="flex gap-10 border-t pt-8 border-stone-200">
<div className="">
<span className="block text-3xl font-semibold text-stone-900">1000+</span>
<span className="text-base text-stone-500">Happy Clients</span>
</div>
<div className="">
<span className="block text-3xl font-semibold text-stone-900">Multiple</span>
<span className="text-base text-stone-500">Expert Stylists</span>
</div>
</div>
</div>
<div className="lg:col-span-6 relative reveal-on-scroll delay-200">
<div className="overflow-hidden group w-full h-[500px] rounded-[2rem] relative">
<img alt="Expert Barber Hair Styling" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-stone-900/10 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none"></div>
<div className="absolute bottom-6 left-6 z-10">
<div className="py-3 px-4 rounded-2xl inline-flex items-center gap-4 shadow-lg bg-[#EAEBEB]">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1A1A1A] text-white shrink-0">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div className="pr-2">
<span className="text-xs font-semibold text-[#808080] uppercase tracking-widest block mb-1">Premium Care</span>
<p className="font-medium text-lg leading-none text-[#1A1A1A]">Expert Styling</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mt-24 px-4 sm:px-6" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-xl reveal-on-scroll">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-4 text-stone-900">Service Menu</h2>
<p className="text-stone-500 font-normal text-lg">Comprehensive hair care, coloring, and styling services tailored to you.</p>
</div>
<a className="hidden md:flex items-center gap-2 font-medium hover:opacity-70 mt-4 md:mt-0 transition-opacity text-stone-900 text-lg reveal-on-scroll delay-100" href="#reservation">
                    Book Online 
                    <i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group reveal-on-scroll delay-100">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="scissors" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-stone-900">Haircuts &amp; Styling</h3>
</div>
<ul className="space-y-5">
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Women's Haircut</span>
<span className="text-base font-medium text-stone-400">60+ Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Wash, precision cut, and professional blowout styling.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Men's Haircut</span>
<span className="text-base font-medium text-stone-400">45 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Custom tailored cut, wash, and styling.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Children's Haircut</span>
<span className="text-base font-medium text-stone-400">30 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Specialized care for our younger guests (under 12).</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Wash &amp; Blowout</span>
<span className="text-base font-medium text-stone-400">45 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Professional wash and round-brush blowout.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Updo / Event Styling</span>
<span className="text-base font-medium text-stone-400">60+ Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Elegant formal styling and elaborate updos.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Bang / Neck Trim</span>
<span className="text-base font-medium text-stone-400">15 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Quick maintenance between regular haircut visits.</span>
</li>
</ul>
</div>

<div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group reveal-on-scroll delay-200">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="palette" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-stone-900">Color Studio</h3>
</div>
<ul className="space-y-5">
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Root Touch-Up</span>
<span className="text-base font-medium text-stone-400">90 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Single process color for regrowth blending.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">All-Over Color</span>
<span className="text-base font-medium text-stone-400">120 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Solid, vibrant color applied from roots to ends.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Partial Highlights</span>
<span className="text-base font-medium text-stone-400">120 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Strategic foil placement on the crown and front.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Full Highlights</span>
<span className="text-base font-medium text-stone-400">150 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Complete head of foils for maximum dimension.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Balayage / Ombre</span>
<span className="text-base font-medium text-stone-400">180 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Custom hand-painted, natural-looking sweeping color.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Toner &amp; Gloss</span>
<span className="text-base font-medium text-stone-400">30 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Refresh faded color and add brilliant shine.</span>
</li>
</ul>
</div>

<div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1 reveal-on-scroll delay-300">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-stone-900">Treatments</h3>
</div>
<ul className="space-y-5">
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Keratin Smoothing</span>
<span className="text-base font-medium text-stone-400">180 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Long-lasting frizz reduction and smooth styling.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Perm &amp; Body Wave</span>
<span className="text-base font-medium text-stone-400">150 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Adding permanent texture, flowing curls, or waves.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Deep Conditioning</span>
<span className="text-base font-medium text-stone-400">15 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Intensive moisture mask for dry or brittle hair.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Olaplex Treatment</span>
<span className="text-base font-medium text-stone-400">30 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Premium bond-building treatment to repair damage.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Scalp Renew</span>
<span className="text-base font-medium text-stone-400">30 Min</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Exfoliating treatment and massage for scalp health.</span>
</li>
<li className="flex flex-col gap-1 border-b border-stone-50 pb-5 last:border-0 last:pb-0">
<div className="flex justify-between items-baseline">
<span className="text-lg font-medium text-stone-900">Hair Extensions</span>
<span className="text-base font-medium text-stone-400">Consult</span>
</div>
<span className="text-base font-normal text-stone-500 leading-relaxed">Professional application for volume and length.</span>
</li>
</ul>
</div>
</div>
</section>
<section className="mt-24 rounded-[2rem] overflow-hidden relative py-20 px-6 sm:px-12 bg-stone-900 text-white">
<div className="absolute inset-0 opacity-10 mix-blend-overlay">
<img alt="Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6">Why Monterey Hair Salon?</h2>
<p className="text-xl font-normal text-stone-400">We are committed to delivering exceptional results while ensuring you feel relaxed and cared for.</p>
</div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
<div className="backdrop-blur-md p-8 rounded-3xl border text-center transition-colors bg-white/5 border-white/5 hover:bg-white/10 reveal-on-scroll delay-100">
<div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-white text-stone-900">
<i className="w-8 h-8" data-lucide="star" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">Expert Stylists</h3>
<p className="font-normal text-base text-stone-400">Our team is constantly updated on the latest trends and techniques to give you the best look.</p>
</div>
<div className="backdrop-blur-md p-8 rounded-3xl border text-center transition-colors bg-white/5 border-white/5 hover:bg-white/10 reveal-on-scroll delay-200">
<div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-white text-stone-900">
<i className="w-8 h-8" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">Welcoming Atmosphere</h3>
<p className="font-normal text-base text-stone-400">Enjoy a friendly, relaxing environment from the moment you walk through our doors.</p>
</div>
<div className="backdrop-blur-md p-8 rounded-3xl border text-center transition-colors bg-white/5 border-white/5 hover:bg-white/10 reveal-on-scroll delay-300">
<div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-white text-stone-900">
<i className="w-8 h-8" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">Quality Products</h3>
<p className="font-normal text-base text-stone-400">We utilize only the finest professional hair care lines to protect and nourish your hair.</p>
</div>
</div>
</section>
<section className="sm:py-24 pt-16 pb-16" id="gallery">
<div className="text-center mb-12 reveal-on-scroll">
<p className="text-sm uppercase text-neutral-500 tracking-widest mb-2 font-geist">
                Client Love
                </p>
<h2 className="text-4xl sm:text-5xl font-geist tracking-tight font-medium">
                What Our Clients Say
                </h2>
</div>
<div className="relative w-full py-12 sm:py-20 min-h-[450px] overflow-hidden px-4">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 h-full">

<div className="glass reveal-on-scroll delay-100 relative w-full max-w-[340px] h-[340px] bg-gradient-to-b from-white/40 to-transparent border border-black/5 shadow-[0_25px_25px_rgba(0,0,0,0.1)] flex justify-center items-center rounded-2xl backdrop-blur-md lg:-mr-12 lg:-rotate-6 hover:rotate-0 hover:z-20 transition-all duration-500 z-0 mx-auto">
<div className="absolute inset-4 rounded-xl shadow-2xl ring-1 overflow-hidden bg-white text-neutral-900 ring-neutral-200 flex flex-col">
<div className="p-6 h-full flex flex-col">
<div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg ring-1 mb-4 bg-neutral-100 ring-neutral-200">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-base leading-relaxed mb-4 font-geist text-neutral-900">
                                        Absolutely love my new cut and color! The team really listens to what you want and delivers beyond expectations. Highly recommend this salon.
                                    </p>
</div>
<div className="pt-3 border-t flex items-center justify-between border-neutral-200 mt-auto">
<div className="flex items-center gap-2">
<img alt="Portrait" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7074207-4b47-49d2-b86b-6ca1abd5d849_320w.jpg"/>
<div>
<div className="text-sm font-medium font-geist text-neutral-900">Sarah Jenkins</div>
<div className="text-sm text-neutral-500 font-geist">Local Resident</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-sm font-medium font-geist">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass reveal-on-scroll delay-200 relative w-full max-w-[340px] h-[340px] bg-gradient-to-b from-white/40 to-transparent border border-black/5 shadow-[0_25px_25px_rgba(0,0,0,0.1)] flex justify-center items-center rounded-2xl backdrop-blur-md lg:z-10 lg:-translate-y-4 hover:rotate-0 hover:z-20 transition-all duration-500 mx-auto">
<div className="absolute inset-4 rounded-xl shadow-xl ring-1 backdrop-blur overflow-hidden bg-white/90 text-neutral-900 ring-neutral-200 flex flex-col">
<div className="p-6 h-full flex flex-col">
<div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg ring-1 mb-4 bg-neutral-100 ring-neutral-200">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-base leading-relaxed mb-4 font-geist text-neutral-900">
                                        Best salon experience in Monterey! The stylists are incredibly professional and I always leave feeling refreshed and beautiful.
                                    </p>
</div>
<div className="pt-3 border-t flex items-center justify-between border-neutral-200 mt-auto">
<div className="flex items-center gap-2">
<img alt="Portrait" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
<div>
<div className="text-sm font-medium font-geist text-neutral-900">Michael Chen</div>
<div className="text-sm text-neutral-500 font-geist">Regular Client</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-sm font-medium font-geist">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass reveal-on-scroll delay-300 relative w-full max-w-[340px] h-[340px] bg-gradient-to-b from-white/40 to-transparent border border-black/5 shadow-[0_25px_25px_rgba(0,0,0,0.1)] flex justify-center items-center rounded-2xl backdrop-blur-md lg:-ml-12 lg:rotate-6 hover:rotate-0 hover:z-20 transition-all duration-500 z-0 mx-auto">
<div className="absolute inset-4 rounded-xl shadow-lg ring-1 backdrop-blur overflow-hidden bg-white/80 text-neutral-900 ring-neutral-200 flex flex-col">
<div className="p-6 h-full flex flex-col">
<div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg ring-1 mb-4 bg-neutral-100 ring-neutral-200">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-base leading-relaxed mb-4 font-geist text-neutral-900">
                                        I finally found my go-to salon! The attention to detail and care they put into their styling is unmatched. Gorgeous results every time.
                                    </p>
</div>
<div className="pt-3 border-t flex items-center justify-between border-neutral-200 mt-auto">
<div className="flex items-center gap-2">
<img alt="Portrait" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
<div>
<div className="text-sm font-medium font-geist text-neutral-900">Elena Rodriguez</div>
<div className="text-sm text-neutral-500 font-geist">First-time Client</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-sm font-medium font-geist">5.0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mt-24 px-4 sm:px-6 reveal-on-scroll">
<div className="sm:p-12 lg:p-16 overflow-hidden text-center bg-slate-50 border-stone-100 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-lg">
<div className="absolute top-0 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 bg-stone-200"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<i className="w-10 h-10 mx-auto mb-6 text-stone-900" data-lucide="clock" strokeWidth="1.5"></i>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-8 text-stone-900">Salon Hours</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
<div className="p-6 rounded-2xl shadow-sm border bg-stone-50 border-stone-100">
<span className="block uppercase text-base font-medium text-stone-500 tracking-wider mb-2">Mon - Sat</span>
<span className="text-3xl font-semibold text-stone-900">10:30 - 7:00 </span>
</div>
<div className="p-6 rounded-2xl shadow-sm border bg-stone-50 border-stone-100">
<span className="block uppercase text-base font-medium text-stone-500 tracking-wider mb-2">Sun</span>
<span className="text-3xl font-semibold text-stone-900">10:00  - 7:00 </span>
</div>
</div>
<p className="mt-8 text-stone-500 font-normal text-lg">Walk-ins welcome, appointments preferred.</p>
</div>
</div>
</section>
<section className="mt-24 px-4 sm:px-6 reveal-on-scroll" id="location">
<div className="rounded-[2rem] overflow-hidden relative h-[400px] group bg-stone-200">
<img alt="Map Location" className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-stone-900/10 transition-colors bg-stone-900/30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md z-10">
<div className="reveal-on-scroll delay-200 text-center bg-white/95 border-white/50 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur">
<div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-stone-900 text-white">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-medium mb-2 text-stone-900 tracking-tight">Find Us</h3>
<p className="font-normal text-stone-500 mb-6 text-lg">Monterey Hair Salon<br/>597 MONTEREY BLVD,
San Francisco, California 94127</p>
<a className="inline-flex items-center gap-1 text-base font-semibold border-b pb-0.5 transition-colors text-stone-900 border-stone-900 hover:text-stone-600 hover:border-stone-600" href="#">
                            Get Directions
                            <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</section>
<section className="mt-24 mb-12 px-4 sm:px-6" id="reservation">
<div className="max-w-[1400px] mx-auto bg-white rounded-[3rem] p-8 sm:p-12 lg:p-20 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

<div className="flex-1 w-full max-w-xl reveal-on-scroll">
<h2 className="text-5xl sm:text-6xl text-[#111] font-medium tracking-tight mb-8 leading-[1.1]">
                        Book an<br/>Appointment
                    </h2>
<p className="text-xl font-normal text-gray-500 mb-16 leading-relaxed max-w-lg">
                        Ready for a new look? Secure your slot with one of our expert stylists online or give us a call.
                    </p>
<div className="space-y-10">

<div className="flex items-center gap-4 sm:gap-6">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#f8f8f8] flex items-center justify-center text-gray-800 shrink-0">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div className="min-w-0 flex-1">
<div className="text-sm sm:text-base text-gray-400 mb-1 sm:mb-1.5 font-normal">Call Us</div>
<div className="text-lg sm:text-xl lg:text-2xl font-medium text-[#111] truncate">(415) 530-0714</div>
</div>
</div>

<div className="flex items-center gap-4 sm:gap-6">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#f8f8f8] flex items-center justify-center text-gray-800 shrink-0">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="min-w-0 flex-1">
<div className="text-sm sm:text-base text-gray-400 mb-1 sm:mb-1.5 font-normal">Email Us</div>
<a className="block text-lg sm:text-xl lg:text-2xl hover:opacity-70 transition-opacity font-medium text-[#111] break-all" href="mailto:junhua199666@gmail.com">junhua199666@gmail.com</a>
</div>
</div>

<div className="flex items-center gap-4 sm:gap-6">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#f8f8f8] flex items-center justify-center text-gray-800 shrink-0">
<i className="w-6 h-6" data-lucide="link" strokeWidth="1.5"></i>
</div>
<div className="min-w-0 flex-1">
<div className="text-sm sm:text-base text-gray-400 mb-1 sm:mb-1.5 font-normal">Online Booking</div>
<a className="block text-lg sm:text-xl lg:text-2xl font-medium text-[#111] hover:opacity-70 transition-opacity truncate" href="https://monterey-hair-salon.square.site/s/appointments" target="_blank">Visit Square Site</a>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-[540px] reveal-on-scroll delay-200">
<div className="bg-[#fafafa] rounded-[2rem] p-8 sm:p-10 border border-[#f5f5f5]">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">

<div className="space-y-2.5">
<label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase">Date</label>
<input className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-lg text-gray-800 focus:outline-none focus:border-gray-400 transition-colors" type="date"/>
</div>

<div className="space-y-2.5">
<label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase">Service</label>
<div className="relative">
<select className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-lg text-gray-800 focus:outline-none focus:border-gray-400 transition-colors appearance-none pr-12">
<option disabled="" selected="" value="">Select a service...</option>
<optgroup label="Haircuts &amp; Styling">
<option value="womens-haircut">Women's Haircut</option>
<option value="mens-haircut">Men's Haircut</option>
<option value="childrens-haircut">Children's Haircut</option>
<option value="wash-blowout">Wash &amp; Blowout</option>
<option value="updo-event">Updo / Event Styling</option>
<option value="bang-neck-trim">Bang / Neck Trim</option>
</optgroup>
<optgroup label="Color Studio">
<option value="root-touchup">Root Touch-Up</option>
<option value="all-over-color">All-Over Color</option>
<option value="partial-highlights">Partial Highlights</option>
<option value="full-highlights">Full Highlights</option>
<option value="balayage-ombre">Balayage / Ombre</option>
<option value="toner-gloss">Toner &amp; Gloss</option>
</optgroup>
<optgroup label="Treatments">
<option value="keratin">Keratin Smoothing</option>
<option value="perm-wave">Perm &amp; Body Wave</option>
<option value="deep-conditioning">Deep Conditioning</option>
<option value="olaplex">Olaplex Treatment</option>
<option value="scalp-renew">Scalp Renew</option>
<option value="extensions">Hair Extensions</option>
</optgroup>
</select>
<i className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="space-y-2.5">
<label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase">Name</label>
<input className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors" placeholder="Your Full Name" type="text"/>
</div>

<div className="space-y-2.5">
<label className="block text-xs font-semibold text-gray-500 tracking-widest uppercase">Phone</label>
<input className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors" placeholder="(555) ..." type="tel"/>
</div>

<div className="flex items-start gap-4 pt-4 pb-4">
<div className="flex items-center h-6 shrink-0 pt-1">
<input className="w-6 h-6 appearance-none border border-gray-300 rounded-[6px] bg-white checked:bg-[#18181b] checked:border-[#18181b] transition-colors relative cursor-pointer after:content-[''] after:absolute after:hidden checked:after:block after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[8px] after:top-[4px]" id="reminders" type="checkbox"/>
</div>
<label className="text-base text-gray-500 font-normal leading-relaxed cursor-pointer select-none" htmlFor="reminders">
                                    Send me text reminders for my appointment.
                                </label>
</div>

<button className="w-full bg-[#18181b] hover:bg-black text-white rounded-xl py-4 flex items-center justify-center gap-3 transition-colors mt-4" type="button">
<span className="text-lg font-medium">Request Appointment</span>
<i className="w-6 h-6" data-lucide="check-circle" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
</div>
</section>
<footer className="py-10 px-6 flex flex-col md:flex-row items-start justify-between border-t gap-8 border-stone-200 reveal-on-scroll">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded border flex items-center justify-center bg-stone-900 border-stone-800 text-white">
<i className="w-5 h-5" data-lucide="scissors" strokeWidth="1.5"></i>
</div>
<span className="font-semibold tracking-tight text-stone-900 text-lg">Monterey Hair Salon</span>
</div>
<p className="text-base text-stone-500 max-w-xs font-normal">Professional hair care and styling tailored to you. Beautiful hair, elevated confidence.</p>
</div>
<div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-base">
<div>
<h4 className="font-semibold mb-3 text-stone-900 text-lg">Salon</h4>
<ul className="space-y-2 text-stone-500 font-normal">
<li><a className="transition-colors hover:text-stone-900" href="#about">About Us</a></li>
<li><a className="transition-colors hover:text-stone-900" href="#services">Services</a></li>
<li><a className="transition-colors hover:text-stone-900" href="#gallery">Reviews</a></li>
<li><a className="transition-colors hover:text-stone-900" href="https://monterey-hair-salon.square.site/s/appointments" target="_blank">Square Store</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-3 text-stone-900 text-lg">Visit</h4>
<ul className="space-y-2 text-stone-500 font-normal">
<li><a className="transition-colors hover:text-stone-900" href="#location">Location</a></li>
<li><a className="transition-colors hover:text-stone-900" href="#reservation">Book Online</a></li>
<li><a className="transition-colors hover:text-stone-900" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-3 text-stone-900 text-lg">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-stone-100 hover:bg-stone-200 text-stone-700" href="#">
<i className="w-6 h-6" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-stone-100 hover:bg-stone-200 text-stone-700" href="#">
<i className="w-6 h-6" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
</footer>
<div className="text-center pb-6 text-sm border-t pt-6 mt-6 text-stone-400 border-stone-100 font-normal reveal-on-scroll">
            © 2024 Monterey Hair Salon. All rights reserved.
        </div>
</div>


    </>
  );
}

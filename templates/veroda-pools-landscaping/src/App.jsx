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



        document.addEventListener("DOMContentLoaded", () => {
            // Hero background reveal animation
            const heroBg = document.getElementById('hero-bg');
            if (heroBg) {
                setTimeout(() => {
                    heroBg.classList.remove('scale-110', 'opacity-50');
                    heroBg.classList.add('scale-100', 'opacity-100');
                }, 100);
            }

            // Scroll Intersection Observer for elegant fade-ins
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        // Execute on next frame to ensure transitions trigger correctly
                        requestAnimationFrame(() => {
                            el.classList.remove('opacity-0', 'translate-y-8', '-translate-y-8', 'translate-y-12', 'scale-95');
                            el.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                        });
                        observer.unobserve(el);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
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
      

<div className="relative h-screen w-full flex flex-col items-center overflow-hidden">

<div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
<img alt="Luxury Villa Garden with Pool" className="w-full h-full object-cover object-center transition-all duration-[2000ms] ease-out" id="hero-bg" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30"></div>
</div>

<header className="absolute top-0 w-full z-20 flex justify-between items-center px-6 md:px-12 py-8 max-w-screen-2xl animate-on-scroll opacity-0 -translate-y-8 transition-all duration-1000 ease-out">
<div className="flex items-center gap-3">
<span className="text-3xl text-white tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Veroda</span>
</div>
<button className="bg-white rounded-full p-3 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center">
<iconify-icon className="text-2xl text-gray-900" height="24" icon="solar:hamburger-menu-linear" style={{color: 'rgb(17, 24, 39)'}} width="24"></iconify-icon>
</button>
</header>

<main className="relative z-10 flex-1 flex flex-col justify-center items-start w-full px-6 md:px-12 max-w-screen-2xl">
<div className="max-w-4xl pt-20">

<div className="flex items-center gap-4 mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
<div className="flex items-center gap-1">
<iconify-icon className="text-white text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-white text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-white text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-white text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-white text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-lg font-medium text-white">Trusted by 30+ clients in Dubai</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] text-white tracking-tight leading-[1.1] mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    We'll create your <i className="font-normal italic">dream oasis</i>
</h1>
<p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-12 leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-500">
                    Veroda helps transform tired outdoor spaces into gorgeous landscaping and luxurious pools you'll enjoy with family and friends.
                </p>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-700">
<a className="group inline-flex items-center gap-4 bg-[#34d399] hover:bg-[#10b981] transition-colors duration-300 rounded-full pl-6 pr-2 py-2" href="#contact">
<span className="text-lg text-emerald-950 font-medium">Start your project</span>
<div className="bg-black/15 rounded-full p-2 group-hover:bg-black/25 transition-colors flex items-center justify-center">
<iconify-icon className="text-xl text-emerald-950" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
<div className="flex items-center gap-3 text-white">
<iconify-icon className="text-xl text-emerald-300" icon="solar:stars-linear"></iconify-icon>
<a className="text-lg font-medium underline underline-offset-8 decoration-white/40 hover:decoration-white transition-colors duration-300" href="tel:+9710000000">or call us</a>
</div>
</div>
</div>
</main>
</div>

<section className="md:px-12 overflow-hidden bg-white pt-32 pr-6 pb-32 pl-6">
<div className="max-w-screen-xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="max-w-2xl">
<h2 className="text-sm tracking-widest uppercase text-emerald-600 font-medium mb-4">Our Services</h2>
<h3 className="text-4xl md:text-5xl tracking-tight text-gray-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Crafting exterior elegance</h3>
</div>
<p className="text-lg text-gray-500 max-w-md leading-relaxed">
                    From lush botanical gardens to temperature-controlled infinity pools, we provide comprehensive solutions for luxury living in the UAE.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

<div className="group flex flex-col gap-6 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-100">
<div className="flex group-hover:bg-emerald-500 transition-colors duration-300 bg-emerald-50 w-14 h-14 rounded-full items-center justify-center">
<iconify-icon className="text-3xl text-emerald-600 group-hover:text-white transition-colors duration-300" icon="solar:palmtree-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-2xl tracking-tight font-normal text-gray-900 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Bespoke Landscaping</h4>
<p className="text-lg text-gray-600 leading-relaxed">Tailored garden designs utilizing climate-appropriate flora, softscaping, and elegant pathways to enhance your property's natural beauty.</p>
</div>
</div>

<div className="group flex flex-col gap-6 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-300">
<div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
<iconify-icon className="text-3xl text-blue-600 group-hover:text-white transition-colors duration-300" icon="solar:waterdrop-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-2xl tracking-tight font-normal text-gray-900 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Custom Pools &amp; Spas</h4>
<p className="text-lg text-gray-600 leading-relaxed">State-of-the-art swimming pools, soothing jacuzzis, and water features designed to blend seamlessly with your architecture.</p>
</div>
</div>

<div className="group flex flex-col gap-6 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-500">
<div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
<iconify-icon className="text-3xl text-amber-600 group-hover:text-white transition-colors duration-300" icon="solar:sun-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-2xl tracking-tight font-normal text-gray-900 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Outdoor Living</h4>
<p className="text-lg text-gray-600 leading-relaxed">Complete your oasis with custom pergolas, outdoor kitchens, fire pits, and atmospheric lighting for year-round entertainment.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="lg:w-1/2 w-full order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4 md:gap-6">
<img alt="Modern Pool" className="md:h-80 animate-on-scroll transition-all duration-1000 ease-out delay-100 opacity-0 w-full h-64 object-cover rounded-2xl scale-95" src="https://images.unsplash.com/photo-1651213084058-c3420ea21852?w=800&amp;q=80"/>
<img alt="Garden Pathway" className="md:h-80 md:mt-12 animate-on-scroll transition-all duration-1000 ease-out delay-300 opacity-0 w-full h-64 object-cover rounded-2xl mt-8 scale-95" src="https://images.unsplash.com/photo-1721222204128-3f8262e14f35?w=800&amp;q=80"/>
</div>
</div>
<div className="lg:w-1/2 w-full order-1 lg:order-2 flex flex-col items-start animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
<h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>Elevating properties across Dubai</h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our portfolio spans from intimate courtyard gardens in Jumeirah to sprawling estates in Emirates Hills. We approach every project with a commitment to impeccable craftsmanship, premium materials, and an eye for enduring design.
                </p>
<ul className="flex flex-col gap-5 mb-12 w-full">
<li className="flex items-center gap-4 border-b border-gray-200 pb-4">
<iconify-icon className="text-2xl text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-gray-700">3D conceptual visualization</span>
</li>
<li className="flex items-center gap-4 border-b border-gray-200 pb-4">
<iconify-icon className="text-2xl text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-gray-700">Premium material sourcing</span>
</li>
<li className="flex items-center gap-4 border-b border-gray-200 pb-4">
<iconify-icon className="text-2xl text-emerald-500 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-gray-700">Dedicated project management</span>
</li>
</ul>
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors" href="#">
                    View Full Portfolio
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white overflow-hidden" id="contact">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<iconify-icon className="text-4xl text-emerald-500 mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" icon="solar:map-point-linear"></iconify-icon>
<h2 className="text-5xl md:text-6xl tracking-tight text-gray-900 mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100" style={{fontFamily: '\'Playfair Display\', serif'}}>Ready to transform your space?</h2>
<p className="text-xl text-gray-500 mb-12 max-w-2xl leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
                Schedule a complimentary consultation with our design team. Let's discuss your vision and how we can bring it to life in Dubai.
            </p>
<form className="w-full max-w-md flex flex-col gap-4 text-left animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300">
<div className="relative">
<input className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-gray-400" placeholder="Your Name" type="text"/>
</div>
<div className="relative">
<input className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-gray-400" placeholder="Email Address" type="email"/>
</div>
<button className="group w-full mt-2 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-medium py-4 px-6 rounded-xl transition-all duration-300 flex justify-center items-center gap-3" type="button">
                    Request Consultation
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-sm text-gray-400 text-center mt-4">We respect your privacy. No spam.</p>
</form>
</div>
</section>

<footer className="bg-gray-950 pt-24 pb-12 px-6 md:px-12 overflow-hidden">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20 border-b border-white/10 pb-20">
<div className="md:col-span-1 flex flex-col items-start gap-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="flex items-center gap-2">
<span className="text-2xl text-white tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Veroda</span>
</div>
<p className="text-lg text-gray-400 leading-relaxed max-w-xs">
                    Creating exceptional outdoor living spaces, luxury pools, and stunning landscapes across the United Arab Emirates.
                </p>
</div>
<div className="flex flex-col gap-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100">
<h5 className="text-base font-medium text-white tracking-wide uppercase">Services</h5>
<ul className="flex flex-col gap-4">
<li className=""><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#">Landscaping Design</a></li>
<li className=""><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#">Pool Construction</a></li>
<li className=""><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#">Hardscaping</a></li>
</ul>
</div>
<div className="flex flex-col gap-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
<h5 className="text-base font-medium text-white tracking-wide uppercase">Company</h5>
<ul className="flex flex-col gap-4">
<li className=""><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#">Our Portfolio</a></li>
<li><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#">Testimonials</a></li>
</ul>
</div>
<div className="flex flex-col gap-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300">
<h5 className="text-base font-medium text-white tracking-wide uppercase">Connect</h5>
<ul className="flex flex-col gap-4">
<li className="flex items-center gap-3 text-lg text-gray-400">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
<span>Dubai, United Arab Emirates</span>
</li>
<li className="flex items-center gap-3 text-lg text-gray-400">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
<span>+971 4 000 0000</span>
</li>
<li className="flex items-center gap-3 text-lg text-gray-400">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
<span>hello@veroda.ae</span>
</li>
</ul>
</div>
</div>
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-500">
<p className="text-base text-gray-500">© 2024 Veroda Landscaping &amp; Pools. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-2xl" icon="mdi:instagram"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-2xl" icon="mdi:facebook"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"></a>
</div>
</div>
</footer>


    </>
  );
}

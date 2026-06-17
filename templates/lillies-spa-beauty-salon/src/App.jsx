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



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.js-reveal').forEach(el => {
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
      

<nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tighter text-white" href="#" style={{fontFamily: '\'Cinzel\', serif'}}>
                L I L L I E S
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium bg-white text-blue-950 rounded-full hover:bg-slate-200 transition-colors" href="#booking">
                    Book Appointment
                </a>
<button className="md:hidden text-white p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 flex items-center min-h-[90vh]">
<div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10"></div>

<img alt="3D Abstract Blue Render" className="absolute w-[150%] h-[150%] max-w-none object-cover opacity-60 mix-blend-screen animate-[spin_60s_linear_infinite]" src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{transformOrigin: 'center'}}/>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="max-w-2xl">
<div className="js-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-800/50 text-blue-200 text-xs font-medium mb-6">
<iconify-icon className="animate-[pulse_3s_ease-in-out_infinite]" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon>
                    4.5 stars from 1300+ reviews
                </div>
<h1 className="js-reveal delay-100 opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6" style={{fontFamily: '\'Cinzel\', serif'}}>
                    Luxury Beauty &amp; Relaxation Experience in Madinah
                </h1>
<p className="js-reveal delay-200 opacity-0 translate-y-8 transition-all duration-1000 ease-out text-base md:text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                    Professional beauty services, Moroccan bath, hair styling, makeup, and premium spa treatments tailored for your ultimate relaxation.
                </p>
<div className="js-reveal delay-300 opacity-0 translate-y-8 transition-all duration-1000 ease-out flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium bg-white text-blue-950 rounded-full hover:bg-slate-200 transition-colors" href="#booking">
                        Book Appointment
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium bg-slate-900/50 backdrop-blur-sm text-white border border-slate-700 rounded-full hover:bg-slate-800 transition-colors shadow-sm" href="https://wa.me/966502226166">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                        WhatsApp Us
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-slate-900" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative js-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100">
<img alt="Spa Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hidden md:block">
<p className="text-3xl text-blue-950 mb-1" style={{fontFamily: '\'Cinzel\', serif'}}>10+</p>
<p className="text-xs text-slate-500 font-medium">Years of Excellence</p>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="js-reveal delay-100 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h2 className="text-xs font-medium text-blue-600 tracking-widest uppercase mb-3">About Us</h2>
<h3 className="text-3xl md:text-4xl text-slate-900 tracking-tight mb-6" style={{fontFamily: '\'Cinzel\', serif'}}>
                            A Premium Women-Owned Haven
                            <span className="block text-slate-400 mt-2 text-2xl">ليليز سبا و التزين النسائي</span>
</h3>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
                            Located in the heart of Madinah on Sultana Street, Lillies Spa &amp; Beauty Salon is a sanctuary designed exclusively for women. We pride ourselves on offering an elegant environment where luxury meets exceptional care.
                        </p>
<p className="text-base text-slate-600 mb-8 leading-relaxed">
                            Our professional staff utilizes only high-quality products to ensure every treatment—from our signature Moroccan bath to precise hair styling—leaves you feeling rejuvenated and beautiful. Trusted by thousands of satisfied customers across Saudi Arabia.
                        </p>
</div>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100 js-reveal delay-200 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div>
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
<iconify-icon className="text-xl" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Premium Products</h4>
<p className="text-xs text-slate-500">Exclusive luxury brands</p>
</div>
<div>
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Expert Staff</h4>
<p className="text-xs text-slate-500">Highly trained professionals</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 text-slate-900" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 js-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h2 className="text-xs font-medium text-blue-600 tracking-widest uppercase mb-3">Our Offerings</h2>
<h3 className="text-3xl md:text-4xl text-slate-900 tracking-tight mb-4" style={{fontFamily: '\'Cinzel\', serif'}}>
                    Signature Services
                </h3>
<p className="text-sm text-slate-600">Discover our comprehensive range of beauty and relaxation treatments designed to enhance your natural radiance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="js-reveal delay-75 opacity-0 translate-y-8 transition-all duration-1000 ease-out group bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:bath-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Moroccan Bath</h4>
<p className="text-xs text-slate-400 mb-2" dir="rtl">حمام مغربي</p>
<p className="text-sm text-slate-500">Traditional cleansing ritual for deep skin purification.</p>
</div>

<div className="js-reveal delay-100 opacity-0 translate-y-8 transition-all duration-1000 ease-out group bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:scissors-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Hair Care &amp; Styling</h4>
<p className="text-sm text-slate-500">Professional cutting, coloring, washing, and modern styling.</p>
</div>

<div className="js-reveal delay-150 opacity-0 translate-y-8 transition-all duration-1000 ease-out group bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Makeup Services</h4>
<p className="text-sm text-slate-500">Elegant makeup application for weddings and special occasions.</p>
</div>

<div className="js-reveal delay-200 opacity-0 translate-y-8 transition-all duration-1000 ease-out group bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Eyelash Extensions</h4>
<p className="text-sm text-slate-500">Enhance your natural beauty with precision lash extensions.</p>
</div>

<div className="js-reveal delay-300 opacity-0 translate-y-8 transition-all duration-1000 ease-out group bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:hand-stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Nail Care</h4>
<p className="text-sm text-slate-500">Manicure, pedicure, and elegant nail art designs.</p>
</div>

<div className="js-reveal delay-500 opacity-0 translate-y-8 transition-all duration-1000 ease-out group bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:face-scan-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Facial Treatments</h4>
<p className="text-sm text-slate-500">Deep cleansing and rejuvenating facials for glowing skin.</p>
</div>

<div className="js-reveal delay-700 opacity-0 translate-y-8 transition-all duration-1000 ease-out group bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-sm lg:col-span-2">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Full Body Care</h4>
<p className="text-sm text-slate-500 max-w-md">Comprehensive beauty and skin care packages tailored to provide a holistic relaxation experience, leaving you refreshed from head to toe.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-slate-900" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 js-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div>
<h2 className="text-xs font-medium text-blue-600 tracking-widest uppercase mb-3">Portfolio</h2>
<h3 className="text-3xl md:text-4xl text-slate-900 tracking-tight" style={{fontFamily: '\'Cinzel\', serif'}}>
                        Salon Gallery
                    </h3>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#">
                    View Instagram <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<img alt="Makeup" className="js-reveal delay-100 opacity-0 translate-y-8 transition-all duration-1000 ease-out w-full h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img alt="Hair Styling" className="js-reveal delay-200 opacity-0 translate-y-8 transition-all duration-1000 ease-out w-full h-64 object-cover rounded-2xl md:col-span-2" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<img alt="Spa Treatment" className="js-reveal delay-300 opacity-0 translate-y-8 transition-all duration-1000 ease-out w-full h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Nail Care" className="js-reveal delay-300 opacity-0 translate-y-8 transition-all duration-1000 ease-out w-full h-64 object-cover rounded-2xl md:col-span-2" src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Salon Interior" className="js-reveal delay-500 opacity-0 translate-y-8 transition-all duration-1000 ease-out w-full h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Facial" className="js-reveal delay-700 opacity-0 translate-y-8 transition-all duration-1000 ease-out w-full h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-blue-950 text-slate-50 overflow-hidden relative" id="reviews">
<div className="absolute inset-0 bg-slate-950/50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 js-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h3 className="text-3xl md:text-4xl text-white tracking-tight mb-6" style={{fontFamily: '\'Cinzel\', serif'}}>
                    Loved by Thousands
                </h3>
<div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
<iconify-icon className="text-xl" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-half-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-blue-200">4.5 / 5 from over 1,300 verified customers</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="js-reveal delay-100 opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-blue-900/30 border border-blue-800/50 p-8 rounded-2xl backdrop-blur-sm">
<div className="flex gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">"The most elegant treatment I've received in Madinah. The staff is incredibly friendly, and the environment is spotless. Highly recommend the Moroccan bath!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-xs font-medium text-blue-200">S.A</div>
<div className="text-xs">
<p className="font-medium text-white">Sara Al-Otaibi</p>
<p className="text-slate-400">Local Guide</p>
</div>
</div>
</div>

<div className="js-reveal delay-200 opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-blue-900/30 border border-blue-800/50 p-8 rounded-2xl backdrop-blur-sm relative md:-translate-y-4">
<div className="flex gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">"I booked my bridal makeup here and was amazed by the high-quality products they use. The salon interior is gorgeous and very relaxing."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-xs font-medium text-blue-200">N.M</div>
<div className="text-xs">
<p className="font-medium text-white">Noura M.</p>
<p className="text-slate-400">Bride-to-be</p>
</div>
</div>
</div>

<div className="js-reveal delay-300 opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-blue-900/30 border border-blue-800/50 p-8 rounded-2xl backdrop-blur-sm">
<div className="flex gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">"Excellent hair styling service. They listened to exactly what I wanted. Clean environment and premium feel throughout the whole visit."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-xs font-medium text-blue-200">R.H</div>
<div className="text-xs">
<p className="font-medium text-white">Reem H.</p>
<p className="text-slate-400">Regular Client</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="booking">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden js-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="grid lg:grid-cols-5">

<div className="lg:col-span-2 bg-blue-950 text-slate-50 p-10 lg:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2"></div>
<h3 className="text-2xl tracking-tight text-white mb-8 relative z-10" style={{fontFamily: '\'Cinzel\', serif'}}>Contact &amp; Location</h3>
<div className="space-y-6 relative z-10">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-blue-400 mt-1" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-white mb-1">Visit Us</p>
<p className="text-sm text-slate-300 leading-relaxed">Sultana Street, Bir Uthman<br/>Madinah 42331, Saudi Arabia</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-blue-400 mt-1" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-white mb-1">Call or WhatsApp</p>
<a className="text-sm text-slate-300 hover:text-white transition-colors block mb-1" href="tel:0502226166">050 222 6166</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-blue-400 mt-1" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-white mb-1">Opening Hours</p>
<p className="text-sm text-slate-300">Sat - Thu: 10:00 AM - 10:00 PM</p>
<p className="text-sm text-slate-300">Friday: 2:00 PM - 10:00 PM</p>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-blue-900 relative z-10">
<p className="text-xs text-slate-400 mb-4">Connect with us</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-300 hover:bg-white hover:text-blue-950 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-300 hover:bg-white hover:text-blue-950 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:phone-calling-rounded-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-300 hover:bg-white hover:text-blue-950 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="lg:col-span-3 p-10 lg:p-12">
<h3 className="text-2xl text-slate-900 tracking-tight mb-2" style={{fontFamily: '\'Cinzel\', serif'}}>Request an Appointment</h3>
<p className="text-sm text-slate-500 mb-8">Fill out the form below and our team will contact you to confirm your booking.</p>
<form className="space-y-5">
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Full Name</label>
<input className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Phone Number</label>
<input className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="+966 5X XXX XXXX" type="tel"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div className="relative">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Service</label>
<select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-500 transition-all cursor-pointer">
<option disabled="" selected="" value="">Select a service</option>
<option value="moroccan">Moroccan Bath</option>
<option value="hair">Hair Styling</option>
<option value="makeup">Makeup</option>
<option value="spa">Spa Treatment</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pt-6 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Preferred Date</label>
<input className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-500 transition-all text-slate-500" type="date"/>
</div>
</div>

<div className="flex items-center gap-3 pt-2">
<div className="relative flex items-start">
<div className="flex h-5 items-center">
<input className="peer h-4 w-4 appearance-none rounded-[4px] border border-slate-300 bg-white checked:border-blue-600 checked:bg-blue-600 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all cursor-pointer" id="whatsapp" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="ml-2 text-xs text-slate-600 cursor-pointer" htmlFor="whatsapp">
                                      Contact me via WhatsApp to confirm.
                                    </label>
</div>
</div>
<button className="w-full bg-blue-950 text-white text-sm font-medium rounded-xl px-4 py-3.5 hover:bg-blue-900 transition-colors mt-4" type="button">
                                Request Booking
                            </button>
</form>
</div>
</div>
</div>

<div className="w-full h-80 lg:h-96 bg-slate-200 rounded-3xl mt-8 overflow-hidden relative group js-reveal delay-300 opacity-0 translate-y-8 transition-all duration-1000 ease-out border border-slate-200">
<iframe allowfullscreen="" className="w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.240748119777!2d39.5891395!3d24.4950943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbe5b6a71e217%3A0xc4f4dc10cb860710!2sSultana%2C%20Madinah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus">
</iframe>

<a className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md text-blue-950 px-5 py-2.5 rounded-full text-xs font-medium shadow-lg shadow-blue-950/5 border border-slate-100/50 flex items-center gap-2 hover:scale-105 transition-transform z-10" href="https://maps.google.com/?q=Sultana+Street+Madinah" target="_blank">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
                    Get Directions
                </a>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-xl tracking-tighter text-white" style={{fontFamily: '\'Cinzel\', serif'}}>
                L I L L I E S
            </div>
<div className="flex gap-6 text-sm">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#booking">Booking</a>
</div>
<div className="text-xs">
                © 2023 Lillies Spa &amp; Beauty Salon. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}

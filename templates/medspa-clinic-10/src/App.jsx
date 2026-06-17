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



        lucide.createIcons({
            attrs: {
                class: "stroke-1.5" 
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
      

<nav className="sticky top-0 z-50 w-full bg-neutral-100/90 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div className="flex items-center gap-2">
<i className="text-green-500 w-6 h-6 fill-current" data-lucide="leaf"></i>
<span className="font-['Varela_Round'] text-xl font-semibold tracking-tight text-neutral-900">MINT MEDSPA</span>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-500">
<a className="hover:text-green-600 transition-colors" href="#">Home</a>
<a className="hover:text-green-600 transition-colors" href="#about">About Us</a>
<a className="hover:text-green-600 transition-colors" href="#services">Services</a>
<a className="hover:text-green-600 transition-colors" href="#testimonials">Testimonials</a>
</div>
<button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-3 px-6 rounded-full transition-all shadow-sm shadow-green-200 hover:shadow-green-300">
                Book Appointment
            </button>
</div>
</nav>

<section className="relative pt-16 pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="relative z-10 overflow-hidden rounded-t-[14rem] rounded-b-3xl shadow-xl shadow-neutral-200">
<img alt="Doctor and Patient" className="w-full h-[600px] object-cover object-top" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -top-10 -left-10 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-30 -z-10"></div>
</div>

<div className="order-1 lg:order-2 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-neutral-900">
                        Your Perfect Glow <br/> Starts From Here
                    </h1>
<p className="text-lg text-neutral-500 max-w-lg leading-relaxed">
                        Achieve your aesthetic goals with our expert medical spa care. Personalized treatments and cutting-edge technology for a healthy, radiant look in Charlotte.
                    </p>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-2">
<div className="flex items-center gap-2 text-green-600 font-medium">
<i className="w-5 h-5" data-lucide="phone"></i>
<span>(704) 555-0199</span>
</div>
<button className="flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">
<i className="w-4 h-4" data-lucide="calendar"></i>
                            Book Consultation
                        </button>
</div>
<div className="pt-8 border-t border-neutral-200">
<p className="text-sm font-medium text-neutral-400 mb-2">Customer rate us 4.9/5</p>
<div className="flex gap-1">
<i className="w-5 h-5 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-5 h-5 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-5 h-5 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-5 h-5 fill-green-500 text-green-500" data-lucide="star"></i>
<i className="w-5 h-5 fill-green-500 text-green-500" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center lg:justify-between gap-8 opacity-40 grayscale">
<div className="flex items-center gap-2 text-xl font-bold font-['Varela_Round']"><i className="w-6 h-6" data-lucide="hexagon"></i> ALLERGAN</div>
<div className="flex items-center gap-2 text-xl font-bold font-['Varela_Round']"><i className="w-6 h-6" data-lucide="triangle"></i> Hydrafacial</div>
<div className="flex items-center gap-2 text-xl font-bold font-['Varela_Round']"><i className="w-6 h-6" data-lucide="circle"></i> ZO SKIN</div>
<div className="flex items-center gap-2 text-xl font-bold font-['Varela_Round']"><i className="w-6 h-6" data-lucide="square"></i> BOTOX</div>
<div className="flex items-center gap-2 text-xl font-bold font-['Varela_Round']"><i className="w-6 h-6" data-lucide="diamond"></i> JUVÉDERM</div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="text-green-600 font-medium text-sm tracking-wide uppercase">About Us</span>
<h2 className="text-4xl font-semibold text-neutral-900 mt-3 tracking-tight max-w-xl">
                    We Care About Your Skin Health &amp; Confidence
                </h2>
</div>
<div className="grid lg:grid-cols-2 gap-8 h-auto lg:h-[600px]">

<div className="relative h-96 lg:h-full rounded-3xl overflow-hidden group">
<img alt="Treatment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://app-frontend-sinclair-ussc-prod.azurewebsites.net/media/rphpyy0x/dnc_834_455-2-edit-small.jpg?rmode=min&amp;width=1680&amp;v=1db7d84c4ae3d70&amp;format=webp"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur rounded-xl p-4 flex items-center gap-4 shadow-lg">
<div className="bg-green-100 p-3 rounded-full text-green-600">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-sm font-medium text-neutral-400">Certified Experts</p>
<p className="text-lg font-semibold text-neutral-900">Safety First</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-8 h-full">

<div className="relative h-64 lg:h-1/2 rounded-3xl overflow-hidden group w-full">
<img alt="Happy Patient" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md">
                            10k+ Happy Patients
                        </div>
</div>

<div className="flex flex-col justify-center h-auto lg:h-1/2 p-2">
<p className="text-lg text-neutral-500 leading-relaxed mb-6">
                            Our experienced team offers comprehensive aesthetic services, including injectables, laser treatments, and advanced facials. Using state-of-the-art technology, we ensure a comfortable and personalized experience for every client.
                        </p>
<a className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all" href="#">
                            Get in touch <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white rounded-[3rem] mx-4 lg:mx-8" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-green-400 font-medium text-sm tracking-wide uppercase">Our Services</span>
<h2 className="text-4xl font-semibold mt-3 tracking-tight">
                    Transform Your Look with Our Comprehensive Care
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Injectables" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.pexels.com/photos/7581585/pexels-photo-7581585.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end mb-3">
<h3 className="text-2xl font-semibold">Injectables</h3>
<i className="w-6 h-6 text-green-400" data-lucide="arrow-up-right"></i>
</div>
<p className="text-neutral-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                            Restore volume and smooth wrinkles with our premium Botox and Juvederm treatments administered by experts.
                        </p>
</div>
</div>

<div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Laser" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.pexels.com/photos/19239092/pexels-photo-19239092.jpeg
                    "/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end mb-3">
<h3 className="text-2xl font-semibold">Laser &amp; Skin</h3>
<i className="w-6 h-6 text-green-400" data-lucide="arrow-up-right"></i>
</div>
<p className="text-neutral-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                            Advanced laser resurfacing and IPL therapy to correct pigmentation, scarring, and skin texture issues.
                        </p>
</div>
</div>

<div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Facials" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.pexels.com/photos/6663374/pexels-photo-6663374.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end mb-3">
<h3 className="text-2xl font-semibold">Medical Facials</h3>
<i className="w-6 h-6 text-green-400" data-lucide="arrow-up-right"></i>
</div>
<p className="text-neutral-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                            Customized Hydrafacials and chemical peels to deeply cleanse, exfoliate, and hydrate your skin.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-green-600 font-medium text-sm tracking-wide uppercase">Testimonials</span>
<h2 className="text-4xl font-semibold text-neutral-900 mt-3 tracking-tight">What our Patients say</h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-200 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg shadow-green-200">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<i className="w-8 h-8 text-green-500 fill-current mb-6" data-lucide="quote"></i>
<p className="text-lg text-neutral-600 mb-6">"From the warm welcome at the reception to the painless procedure, Mint Medspa truly knows how to take care of their patients. Five stars!"</p>
<div>
<h4 className="font-semibold text-neutral-900">Sarah Jenkins</h4>
<p className="text-sm text-neutral-400">Botox Patient</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<i className="w-8 h-8 text-green-500 fill-current mb-6" data-lucide="quote"></i>
<p className="text-lg text-neutral-600 mb-6">"Mint Medspa made my first laser treatment anxiety disappear. They explained everything clearly and made sure I was comfortable throughout."</p>
<div>
<h4 className="font-semibold text-neutral-900">Maria Hull</h4>
<p className="text-sm text-neutral-400">Laser Patient</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<i className="w-8 h-8 text-green-500 fill-current mb-6" data-lucide="quote"></i>
<p className="text-lg text-neutral-600 mb-6">"Mint exceeded my expectations with their thorough care and gentle approach. Highly recommend for anyone needing skincare services."</p>
<div>
<h4 className="font-semibold text-neutral-900">Adam Smith</h4>
<p className="text-sm text-neutral-400">Hydrafacial Patient</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl font-semibold text-neutral-900 mb-12 tracking-tight">Contact Details</h2>
<div className="grid lg:grid-cols-2 gap-12">

<div className="h-full min-h-[400px] rounded-3xl overflow-hidden relative">
<img alt="Reception" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full">
<div className="text-white space-y-2">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-green-400" data-lucide="map-pin"></i>
<span>123 South Tryon St, Charlotte, NC 28202</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-green-400" data-lucide="mail"></i>
<span>hello@mintmedspa.com</span>
</div>
</div>
</div>
</div>

<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-neutral-50 border border-neutral-200 text-neutral-800 rounded-lg p-4 outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all text-sm placeholder:text-neutral-400" placeholder="Your Name" type="text"/>
<input className="w-full bg-neutral-50 border border-neutral-200 text-neutral-800 rounded-lg p-4 outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all text-sm placeholder:text-neutral-400" placeholder="example@email.com" type="email"/>
</div>
<input className="w-full bg-neutral-50 border border-neutral-200 text-neutral-800 rounded-lg p-4 outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all text-sm placeholder:text-neutral-400" placeholder="Your Contact Number" type="tel"/>
<textarea className="w-full bg-neutral-50 border border-neutral-200 text-neutral-800 rounded-lg p-4 outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all text-sm placeholder:text-neutral-400 resize-none" placeholder="Your Message Here" rows="5"></textarea>
<button className="bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-8 rounded-lg w-full sm:w-auto transition-colors shadow-lg shadow-green-100" type="submit">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-neutral-400 py-8 border-t border-neutral-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
<p>© 2024 MINT MEDSPA. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}

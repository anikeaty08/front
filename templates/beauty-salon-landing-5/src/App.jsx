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



        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            var menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        });

        // Close mobile menu on link click
        var mobileLinks = document.querySelectorAll('#mobile-menu a');
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.add('hidden');
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
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-rose-100/50 transition-all">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex-shrink-0 flex items-center gap-2 text-rose-900 hover:opacity-80 transition-opacity" href="#">
<iconify-icon height="28" icon="solar:crown-star-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<span className="text-xl tracking-tighter font-medium">A-ONE</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-light text-slate-600 hover:text-rose-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-light text-slate-600 hover:text-rose-600 transition-colors" href="#about">About</a>
<a className="text-sm font-light text-slate-600 hover:text-rose-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-light text-slate-600 hover:text-rose-600 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-light text-slate-600 hover:text-rose-600 transition-colors" href="#contact">Contact</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-rose-600 rounded-full hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-600/20 active:scale-95 transition-all" href="#contact">
                        Book Appointment
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-rose-600 focus:outline-none p-2 rounded-full hover:bg-rose-50 transition-colors" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-rose-50 absolute w-full shadow-lg" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-3 text-base font-light text-slate-600 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-colors" href="#home">Home</a>
<a className="block px-3 py-3 text-base font-light text-slate-600 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-colors" href="#about">About</a>
<a className="block px-3 py-3 text-base font-light text-slate-600 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-colors" href="#services">Services</a>
<a className="block px-3 py-3 text-base font-light text-slate-600 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-colors" href="#gallery">Gallery</a>
<a className="block px-3 py-3 text-base font-light text-slate-600 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-colors" href="#contact">Contact</a>
<div className="pt-4 px-3">
<a className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-rose-600 rounded-full hover:bg-rose-700 active:scale-95 transition-all" href="#contact">
                        Book Appointment
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]" id="home">
<div className="absolute inset-0 z-0">
<img alt="Salon Interior" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-rose-950/90 to-rose-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
<div className="max-w-2xl text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-light mb-6">
<iconify-icon height="16" icon="solar:stars-linear" width="16"></iconify-icon>
<span>Premium Beauty Services in Satna</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-medium mb-6 leading-[1.1]">
                    Enhance Your <span className="text-rose-200 italic font-light">Natural</span> Beauty.
                </h1>
<p className="text-lg text-rose-50/80 font-light mb-10 max-w-lg leading-relaxed">
                    Experience luxury and personalized care at A-one Beauty Parlour. Let our expert stylists reveal your most radiant self in a relaxing, elegant atmosphere.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-rose-900 bg-white rounded-full hover:bg-rose-50 hover:shadow-xl hover:shadow-white/10 active:scale-95 transition-all group" href="#contact">
                        Book Appointment
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 active:scale-95 transition-all" href="tel:+919303959697">
<iconify-icon className="mr-2" height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        Call Now
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-4 bg-rose-100/50 rounded-[2.5rem] transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
<img alt="About A-one Parlour" className="relative rounded-3xl shadow-sm object-cover w-full h-[500px]" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div>
<h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-slate-900 mb-6">A Sanctuary for Your Beauty &amp; Wellness</h2>
<p className="text-base text-slate-600 font-light mb-6 leading-relaxed">
                        Located in the heart of Satna at Gandhi Chowk, A-one Beauty Parlour has been the trusted destination for individuals seeking top-tier beauty treatments. We believe that beauty is not just about appearance, but about how you feel.
                    </p>
<p className="text-base text-slate-600 font-light mb-10 leading-relaxed">
                        Our experienced team of professionals uses only premium products to ensure highest customer satisfaction. From rejuvenating facials to breathtaking bridal makeovers, we tailor every service to your unique style and needs.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-rose-100 pt-8">
<div>
<div className="text-3xl font-medium text-rose-600 tracking-tight mb-1">10+</div>
<div className="text-sm text-slate-500 font-light">Years Experience</div>
</div>
<div>
<div className="text-3xl font-medium text-rose-600 tracking-tight mb-1">5k+</div>
<div className="text-sm text-slate-500 font-light">Happy Clients</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-rose-50/50" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-slate-900 mb-4">Our Premium Services</h2>
<p className="text-base text-slate-600 font-light">Discover our range of bespoke beauty treatments designed to pamper you from head to toe.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl p-8 border border-rose-100/50 hover:shadow-xl hover:shadow-rose-100 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:stars-minimalistic-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-3">Bridal Makeup</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Flawless, long-lasting makeup for your special day. Look stunning from every angle.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-rose-100/50 hover:shadow-xl hover:shadow-rose-100 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:face-scan-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-3">Facial &amp; Skincare</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Rejuvenating facials tailored to your skin type for a natural, healthy glow.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-rose-100/50 hover:shadow-xl hover:shadow-rose-100 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:scissors-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-3">Hair Styling &amp; Cuts</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Trendy haircuts, coloring, and styling to perfectly frame your beautiful face.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-rose-100/50 hover:shadow-xl hover:shadow-rose-100 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-3">Hair Spa &amp; Treatment</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Deep conditioning and spa treatments to repair, nourish, and strengthen your hair.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-rose-100/50 hover:shadow-xl hover:shadow-rose-100 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-3">Waxing &amp; Threading</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Gentle and precise hair removal services for smooth, flawless skin.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-rose-100/50 hover:shadow-xl hover:shadow-rose-100 hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-center items-center text-center">
<h3 className="text-lg tracking-tight font-medium text-rose-600 mb-2">And Much More</h3>
<p className="text-xs text-slate-500 font-light mb-4">Manicure, Pedicure, Mehendi...</p>
<a className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors" href="#contact">
                        View Full Menu <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-slate-900 mb-4">Our Masterpieces</h2>
<p className="text-base text-slate-600 font-light">A glimpse into the stunning transformations crafted by our talented artists.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-600 hover:border-rose-200 transition-colors">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-600 hover:border-rose-200 transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<img alt="Bridal Makeup" className="w-full h-64 object-cover rounded-2xl hover:opacity-90 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&amp;fit=crop&amp;q=80"/>
<img alt="Hair Styling" className="w-full h-64 object-cover rounded-2xl hover:opacity-90 transition-opacity cursor-pointer md:col-span-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Facial Treatment" className="w-full h-64 object-cover rounded-2xl hover:opacity-90 transition-opacity cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Hair Spa" className="w-full h-64 object-cover rounded-2xl hover:opacity-90 transition-opacity cursor-pointer md:col-span-2" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&amp;fit=crop&amp;q=80"/>
<img alt="Nail Art" className="w-full h-64 object-cover rounded-2xl hover:opacity-90 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&amp;fit=crop&amp;q=80"/>
<img alt="Makeup Brush" className="w-full h-64 object-cover rounded-2xl hover:opacity-90 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&amp;fit=crop&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 bg-rose-950 text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-center mb-16">Loved by Our Clients</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
<div className="flex text-amber-400 mb-4">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-sm font-light text-rose-50/80 mb-6 leading-relaxed">"Absolutely loved my bridal makeup! The staff was incredibly polite and understood exactly what I wanted. Best parlour in Satna hands down."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-800 flex items-center justify-center text-sm font-medium">P</div>
<div>
<div className="text-sm font-medium tracking-tight">Priya Sharma</div>
<div className="text-xs text-rose-200/60 font-light">Bridal Client</div>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
<div className="flex text-amber-400 mb-4">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-sm font-light text-rose-50/80 mb-6 leading-relaxed">"I go here for my regular haircuts and facials. The hygiene they maintain is top-notch, and the environment is very relaxing."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-800 flex items-center justify-center text-sm font-medium">N</div>
<div>
<div className="text-sm font-medium tracking-tight">Neha Singh</div>
<div className="text-xs text-rose-200/60 font-light">Regular Client</div>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
<div className="flex text-amber-400 mb-4">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-half-bold" width="20"></iconify-icon>
</div>
<p className="text-sm font-light text-rose-50/80 mb-6 leading-relaxed">"Great service and reasonable prices. The hair spa completely transformed my damaged hair. Highly recommend A-one to everyone."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-800 flex items-center justify-center text-sm font-medium">A</div>
<div>
<div className="text-sm font-medium tracking-tight">Anjali Verma</div>
<div className="text-xs text-rose-200/60 font-light">Hair Care Client</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-slate-900 mb-4">Visit Our Parlour</h2>
<p className="text-sm text-slate-600 font-light mb-10">Ready for a transformation? Book your appointment or drop by our salon. We are excited to welcome you.</p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
<iconify-icon height="20" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 tracking-tight">Location</h4>
<p className="text-sm text-slate-500 font-light mt-1">Gandhi Chowk, Ganpat Marg, Nazirabad,<br/>Satna, Madhya Pradesh, India – 485001</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
<iconify-icon height="20" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 tracking-tight">Call Us</h4>
<a className="text-sm text-slate-500 font-light mt-1 hover:text-rose-600 transition-colors" href="tel:+919303959697">+91 9303959697</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
<iconify-icon height="20" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 tracking-tight">Hours</h4>
<p className="text-sm text-slate-500 font-light mt-1">Mon - Sun: 10:00 AM - 8:00 PM</p>
</div>
</div>
</div>

<div className="w-full h-64 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 relative group">

<iframe allowfullscreen="" className="grayscale group-hover:grayscale-0 transition-all duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Gandhi%20Chowk,%20Nazirabad,%20Satna&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%">
</iframe>
<a className="absolute bottom-4 left-4 bg-white px-4 py-2 text-xs font-medium rounded-full shadow-sm hover:shadow-md transition-shadow text-slate-700 flex items-center gap-2" href="https://maps.app.goo.gl/NwMxwyMnAopTNF8i61" target="_blank">
                            Open in Maps <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-rose-50/50 p-8 lg:p-12 rounded-[2.5rem] border border-rose-100/50">
<h3 className="text-2xl tracking-tight font-medium text-slate-900 mb-8">Book an Appointment</h3>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-slate-600 mb-2" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 bg-white border border-rose-200 rounded-2xl text-sm font-light text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-600 mb-2" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 bg-white border border-rose-200 rounded-2xl text-sm font-light text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all" id="phone" placeholder="+91 XXXXX XXXXX" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-600 mb-2" htmlFor="service">Service Required</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-white border border-rose-200 rounded-2xl text-sm font-light text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all" id="service">
<option disabled="" selected="" value="">Select a service</option>
<option value="bridal">Bridal Makeup</option>
<option value="facial">Facial &amp; Skincare</option>
<option value="hair">Haircut &amp; Styling</option>
<option value="spa">Hair Spa</option>
<option value="other">Other Services</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-600 mb-2" htmlFor="message">Special Requests (Optional)</label>
<textarea className="w-full px-4 py-3 bg-white border border-rose-200 rounded-2xl text-sm font-light text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all resize-none" id="message" placeholder="Any specific details..." rows="3"></textarea>
</div>
<button className="w-full py-4 text-sm font-medium text-white bg-rose-600 rounded-full hover:bg-rose-700 active:scale-[0.98] transition-all shadow-sm hover:shadow-lg hover:shadow-rose-600/20 mt-4" type="submit">
                            Confirm Booking Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<a className="inline-flex items-center gap-2 text-rose-900 mb-4" href="#">
<iconify-icon height="24" icon="solar:crown-star-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-lg tracking-tighter font-medium">A-ONE</span>
</a>
<p className="text-sm text-slate-500 font-light max-w-sm mb-6 leading-relaxed">
                        Enhancing your natural beauty with premium salon services in Satna. Experience luxury, care, and perfection.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors" href="#">
<iconify-icon height="20" icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors" href="#">
<iconify-icon height="20" icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 tracking-tight mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 font-light hover:text-rose-600 transition-colors" href="#home">Home</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-rose-600 transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-rose-600 transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-rose-600 transition-colors" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 tracking-tight mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 font-light hover:text-rose-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-rose-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-rose-600 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400 font-light">© 2023 A-one Beauty Parlour. All rights reserved.</p>
<p className="text-xs text-slate-400 font-light flex items-center gap-1">
                    Made with <iconify-icon className="text-rose-300" icon="solar:heart-bold"></iconify-icon> in Satna
                </p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/40 active:scale-95 transition-all group" href="https://wa.me/919303959697" rel="noopener noreferrer" target="_blank">
<svg fill="currentColor" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.375A9.933 9.933 0 0 0 11.99 22c5.46 0 9.914-4.448 9.92-9.916a9.837 9.837 0 0 0-2.909-6.976zM11.992 20.306c-1.474 0-2.923-.396-4.186-1.144l-.3-.178-3.111.815.832-3.033-.196-.31A8.217 8.217 0 0 1 3.774 11.91c.005-4.526 3.689-8.215 8.223-8.215a8.136 8.136 0 0 1 5.807 2.404 8.163 8.163 0 0 1 2.399 5.802c-.005 4.532-3.692 8.216-8.225 8.216h.014zM16.5 14.152c-.247-.124-1.463-.723-1.692-.806-.228-.084-.394-.124-.56.124-.166.248-.638.806-.782.97-.144.164-.288.186-.535.062-.247-.124-1.045-.385-1.99-1.23-.736-.656-1.232-1.467-1.376-1.715-.144-.248-.015-.382.108-.506.111-.112.247-.289.371-.433.124-.144.165-.248.248-.413.082-.165.041-.31-.021-.434-.062-.124-.56-1.35-.767-1.847-.201-.482-.406-.417-.56-.425-.144-.008-.31-.008-.476-.008a.91.91 0 0 0-.66.31c-.228.248-.868.847-.868 2.066 0 1.22.888 2.396 1.012 2.56.124.165 1.745 2.663 4.228 3.734.59.255 1.05.408 1.41.522.593.189 1.133.162 1.558.098.473-.07 1.463-.598 1.669-1.176.206-.578.206-1.074.144-1.176-.062-.103-.228-.165-.475-.289z"></path>
</svg>
</a>



    </>
  );
}

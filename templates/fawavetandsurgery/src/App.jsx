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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
body: ['"Inter"', 'sans-serif'],
},
colors: {
brand: {
50: '#f5f3ff',  /* Violet 50 */
100: '#ede9fe', /* Violet 100 */
200: '#ddd6fe', /* Violet 200 */
300: '#c4b5fd', /* Violet 300 */
400: '#a78bfa', /* Violet 400 */
500: '#8b5cf6', /* Violet 500 */
600: '#7c3aed', /* Violet 600 */
700: '#6d28d9', /* Violet 700 */
900: '#4c1d95', /* Violet 900 */
}
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/40">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:paw-bold" width="20"></iconify-icon>
</div>
<div>
<h1 className="font-bold text-sm leading-tight tracking-tight text-slate-900">Klinik Veterinar<br/>&amp; Surgeri Fawa</h1>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#team">The Team</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#info">Info</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900" href="tel:+601110215293">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    +60 11-1021 5293
                </a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-xl shadow-slate-900/10 flex items-center gap-2 group" href="https://wa.me/601110215293" target="_blank">
<span>Book Appointment</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 grid-bg -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-brand-200/40 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"></div>
<div className="absolute top-40 left-0 -z-10 w-[400px] h-[400px] bg-white rounded-full blur-3xl opacity-60 -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-xl animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-brand-100 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Open Today until 5:45PM
                </div>
<h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 text-balance leading-[1.1]">
                    Compassionate Care meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">Modern Medicine.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed font-body text-balance">
                    Experience personalized treatments and the latest in animal healthcare. Where every purr is our passion and your pet's happiness is our top priority.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5" href="#info">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
                        Visit Clinic
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-slate-900 border border-brand-100 px-8 py-4 rounded-2xl font-semibold hover:bg-white/50 transition-all hover:border-brand-200 shadow-sm" href="#services">
                        View Services
                    </a>
</div>

<div className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-500">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-brand-50 border-2 border-white flex items-center justify-center overflow-hidden">
<iconify-icon className="text-brand-300" icon="solar:cat-bold"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-brand-50 border-2 border-white flex items-center justify-center overflow-hidden">
<iconify-icon className="text-brand-300" icon="solar:dog-bold"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-brand-50 border-2 border-white flex items-center justify-center overflow-hidden">
<iconify-icon className="text-brand-300" icon="solar:heart-bold"></iconify-icon>
</div>
</div>
<span>Trusted by pet owners in Seri Kembangan</span>
</div>
</div>

<div className="relative animate-slide-up" style={{animationDelay: '200ms'}}>
<div className="relative rounded-[2.5rem] overflow-hidden border border-white/50 shadow-2xl shadow-brand-900/10 aspect-[4/3] group">
<img alt="Clinic Interior" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://cdn-image.sweetpew.com/Merchant/94e01e65-a0e5-4f86-a0cc-3219e398344f/Images/Shop/IMG8444_KAK_bisrzeju_20240807053138_xlarge.jpg"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg flex items-center justify-between">
<div>
<p className="text-xs text-slate-500 uppercase font-semibold">Location</p>
<p className="text-sm font-medium text-slate-900">Kawasan Perniagaan Desa Ria</p>
</div>
<div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-brand-400 to-pink-400 rounded-full blur-2xl opacity-40"></div>
<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-300 rounded-full blur-3xl opacity-40"></div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Comprehensive Services</h2>
<p className="text-slate-500 max-w-md font-body">From routine checkups to surgical procedures, we provide a full spectrum of veterinary care.</p>
</div>
<a className="text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-2 transition-colors" href="https://wa.me/601110215293">
                    Ask about a service
                    <iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-white border border-brand-100 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-brand-50 rounded-2xl border border-brand-100 flex items-center justify-center text-brand-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stethoscope-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Consultation &amp; Checkup</h3>
<p className="text-sm text-slate-500 leading-relaxed">Direct discussion with our veterinarians regarding health, behavior, nutrition, and prevention. Includes initial diagnosis and treatment planning.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-brand-100 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-brand-50 rounded-2xl border border-brand-100 flex items-center justify-center text-indigo-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-smile-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Pet Boarding</h3>
<p className="text-sm text-slate-500 leading-relaxed">Safe and comfortable accommodation for your pets when you are away. We provide a calm environment with full care, food, and litter.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-brand-100 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-brand-50 rounded-2xl border border-brand-100 flex items-center justify-center text-rose-500 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-plus-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Spaying &amp; Castration</h3>
<p className="text-sm text-slate-500 leading-relaxed">Surgical procedures to control reproduction and improve overall health. Helps prevent diseases and reduces aggressive behaviors.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-brand-100 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-brand-50 rounded-2xl border border-brand-100 flex items-center justify-center text-teal-500 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Dental Scaling</h3>
<p className="text-sm text-slate-500 leading-relaxed">Removal of plaque and tartar to maintain oral health. Prevents gum disease, tooth loss, and ensures fresher breath.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-brand-100 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-brand-50 rounded-2xl border border-brand-100 flex items-center justify-center text-amber-500 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bath-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cat Grooming</h3>
<p className="text-sm text-slate-500 leading-relaxed">Full grooming including bath, ear cleaning, nail trimming, and blow-dry. Keeps your cat looking best and feeling healthy.</p>
</div>

<div className="flex flex-col items-center justify-center p-8 rounded-3xl border border-dashed border-brand-200 bg-white/50 hover:bg-white transition-all">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 mb-4 shadow-sm">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<p className="font-medium text-slate-900">And much more</p>
<p className="text-xs text-slate-500 mt-1">Contact us for details</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="team">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-brand-900/10 border border-brand-100">
<div className="grid md:grid-cols-12 gap-10 items-center">

<div className="md:col-span-5 relative">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-brand-50 relative group">
<img alt="Dr. Muhammad Farid" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://cdn-image.sweetpew.com/Merchant/94e01e65-a0e5-4f86-a0cc-3219e398344f/Images/Staff/IMG8433_KAK_5brxl2ge_20240807054501_xlarge.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-24 md:hidden">
<p className="text-white font-bold text-lg">Dr. Muhammad Farid</p>
<p className="text-white/80 text-sm">Veterinarian</p>
</div>
</div>
</div>

<div className="md:col-span-7">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
                            Meet the Expert
                        </div>
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">Dr. Muhammad Farid Bin Ismail</h2>
<p className="text-brand-600 font-medium mb-6">Veterinarian &amp; Clinic Manager</p>
<div className="prose prose-slate prose-p:text-slate-500 font-body leading-relaxed mb-8">
<p>
                                Dr. Farid is a dedicated veterinarian who graduated in 2015 and has been practicing small animal medicine ever since. As both a practicing veterinarian and manager of a veterinary clinic, Dr. Farid combines clinical expertise with leadership skills to provide exceptional care for pets and ensure the smooth operation of the clinic.
                            </p>
</div>
<div className="flex items-center gap-6 pt-6 border-t border-brand-50">
<div>
<p className="text-2xl font-bold text-slate-900">9+</p>
<p className="text-xs text-slate-400 font-medium uppercase mt-1">Years Experience</p>
</div>
<div className="w-px h-10 bg-brand-100"></div>
<div>
<p className="text-2xl font-bold text-slate-900">1000+</p>
<p className="text-xs text-slate-400 font-medium uppercase mt-1">Pets Treated</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl -z-0 opacity-60"></div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="info">
<div className="mb-12">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Visit Us</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">

<div className="bg-slate-900 text-white p-8 rounded-[2rem] flex flex-col justify-between h-full relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:map-point-bold" width="120"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold mb-4 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Location
                    </h3>
<p className="text-slate-300 font-body leading-relaxed mb-8">
                        No. 14, Tingkat 1, Jalan PDR 5,<br/>
                        Kawasan Perniagaan Desa Ria,<br/>
                        43300 Seri Kembangan, Selangor
                    </p>
</div>
<a className="bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white hover:text-slate-900 text-white py-3 px-6 rounded-xl text-sm font-medium transition-all text-center" href="https://www.google.com/maps/search/?api=1&amp;query=Klinik%20Veterinar%20%26%20Surgeri%20Fawa%2C%20No.%2014%2C%20Tingkat%201%2C%20Jalan%20PDR%205%2C%20Kawasan%20Perniagaan%20Desa%20Ria%2C%20Seri%20Kembangan%2C%20Selangor%2C%2043300" target="_blank">
                    Get Directions
                </a>
</div>

<div className="bg-white border border-brand-100 p-8 rounded-[2rem] h-full lg:col-span-1">
<h3 className="text-lg font-bold mb-6 text-slate-900 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Operating Hours
                </h3>
<ul className="space-y-4 font-body text-sm">
<li className="flex justify-between items-center pb-3 border-b border-brand-50">
<span className="text-slate-500">Mon - Thu</span>
<span className="font-semibold text-slate-900">10:00am - 5:45pm</span>
</li>
<li className="flex justify-between items-center pb-3 border-b border-brand-50">
<span className="text-slate-500">Saturday</span>
<span className="font-semibold text-slate-900">10:00am - 5:45pm</span>
</li>
<li className="flex justify-between items-center pb-3 border-b border-brand-50">
<span className="text-slate-500">Sunday</span>
<span className="font-semibold text-slate-900">10:00am - 5:45pm</span>
</li>
<li className="flex justify-between items-center text-rose-500">
<span>Friday</span>
<span className="font-bold bg-rose-50 px-3 py-1 rounded-lg">Closed</span>
</li>
</ul>
</div>

<div className="bg-brand-100/50 border border-brand-200 p-8 rounded-[2rem] flex flex-col justify-center h-full">
<h3 className="text-lg font-bold mb-6 text-slate-900 flex items-center gap-2">
<iconify-icon icon="solar:chat-square-call-linear"></iconify-icon> Contact
                </h3>
<div className="space-y-4">
<a className="flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-100 hover:border-brand-300 hover:shadow-md transition-all group" href="tel:+601110215293">
<div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-semibold uppercase">Phone</p>
<p className="font-medium text-slate-900">+60 11-1021 5293</p>
</div>
</a>
<a className="flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-100 hover:border-brand-300 hover:shadow-md transition-all group" href="mailto:fawavetcare@gmail.com">
<div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-semibold uppercase">Email</p>
<p className="font-medium text-slate-900">fawavetcare@gmail.com</p>
</div>
</a>
</div>
</div>

<div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
<div className="rounded-2xl overflow-hidden aspect-square border border-white/50 shadow-sm">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://cdn-image.sweetpew.com/Merchant/94e01e65-a0e5-4f86-a0cc-3219e398344f/Images/Shop/IMG8643_KAK_bzclev3i_20240817005410_medium.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden aspect-square border border-white/50 shadow-sm">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://cdn-image.sweetpew.com/Merchant/94e01e65-a0e5-4f86-a0cc-3219e398344f/Images/Shop/IMG8424_KAK_kvjaiaj4_20240807053204_medium.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden aspect-square border border-white/50 shadow-sm">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://cdn-image.sweetpew.com/Merchant/94e01e65-a0e5-4f86-a0cc-3219e398344f/Images/Shop/IMG8410_KAK_j3pgznhr_20240807053230_medium.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden aspect-square border border-white/50 shadow-sm bg-white/60 flex items-center justify-center text-slate-400">
<div className="text-center">
<iconify-icon className="mb-2" icon="solar:gallery-linear" width="24"></iconify-icon>
<span className="block text-xs font-semibold">View Gallery</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-brand-200/60 bg-brand-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:paw-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">Klinik Veterinar &amp; Surgeri Fawa</span>
</div>
<div className="text-xs text-slate-500">
                © 2026 Fawa Vetcare Enterprise (002670402-A). All rights reserved.
            </div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white border border-brand-100 flex items-center justify-center text-slate-500 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all" href="#">
<iconify-icon icon="solar:facebook-bold" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white border border-brand-100 flex items-center justify-center text-slate-500 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all" href="#">
<iconify-icon icon="solar:instagram-bold" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 md:hidden z-50">
<a className="w-14 h-14 bg-brand-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-600/40 hover:scale-110 transition-transform" href="https://wa.me/601110215293">
<iconify-icon icon="solar:chat-round-dots-bold" width="28"></iconify-icon>
</a>
</div>

    </>
  );
}

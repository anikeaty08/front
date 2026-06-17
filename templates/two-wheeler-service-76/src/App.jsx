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
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
red: '#DC2626', // Red-600
dark: '#171717', // Neutral-900
gray: '#525252', // Neutral-600
light: '#F5F5F5', // Neutral-100
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold text-lg tracking-tighter">R</span>
</div>
<span className="font-semibold text-lg tracking-tight text-neutral-900">ROYAL AUTOMOBILES</span>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors" href="#spares">Spare Parts</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all shadow-sm" href="tel:07721078653">
<iconify-icon className="mr-2" icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        077210 78653
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-neutral-500 hover:text-neutral-900 focus:outline-none">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium border border-red-100">
<span className="w-2 h-2 rounded-full bg-red-600 mr-2 animate-pulse"></span>
                        Open today until 8:30 PM
                    </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tighter text-neutral-900 leading-[1.1]">
                        Best Two Wheeler Spares &amp; Repairing Shop in <span className="text-red-600">Nagpur</span>.
                    </h1>
<p className="text-lg text-neutral-500 max-w-xl leading-relaxed">
                        Trusted bike servicing, genuine spare parts, and expert mechanics. Specialized in Royal Enfield, Yamaha, and general maintenance at Godhani Road.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-neutral-900 hover:bg-neutral-800 transition-all shadow-sm" href="#contact">
                            Visit Us
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 text-base font-medium rounded-lg text-neutral-700 bg-white hover:bg-neutral-50 transition-all" href="tel:07721078653">
<iconify-icon className="mr-2" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            Call Now
                        </a>
</div>

<div className="pt-6 border-t border-neutral-100 flex items-center gap-6">
<div>
<div className="flex items-center gap-1 text-yellow-500">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 mt-1"><span className="font-semibold text-neutral-900">4.9/5</span> based on 422 Reviews</p>
</div>
<div className="h-8 w-px bg-neutral-200"></div>
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-300 flex items-center justify-center overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-xs font-medium text-neutral-600">
                                +400
                            </div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-red-100/50 to-transparent rounded-2xl transform rotate-3"></div>
<img alt="Royal Automobiles Workshop Mechanic working on bike" className="relative rounded-2xl shadow-xl border border-white object-cover h-[500px] w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-neutral-100 max-w-xs">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Genuine Spares</p>
<p className="text-xs text-neutral-500">Only authentic parts used</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-sm font-medium text-red-600 tracking-wide uppercase mb-3">Our Services</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">Expert Bike Care &amp; Repair</h3>
<p className="text-neutral-500 text-lg">Comprehensive two-wheeler solutions. From routine oil changes to complex engine overhauls.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-lg transition-shadow group">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-900 group-hover:bg-red-50 group-hover:text-red-600 transition-colors mb-6">
<iconify-icon icon="solar:wrench-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">General Bike Servicing</h4>
<p className="text-neutral-500 leading-relaxed">Complete checkup, washing, chain lubrication, and brake adjustments for smooth riding.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-lg transition-shadow group">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-900 group-hover:bg-red-50 group-hover:text-red-600 transition-colors mb-6">
<iconify-icon icon="solar:settings-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Engine Repair &amp; Rebuild</h4>
<p className="text-neutral-500 leading-relaxed">Expert diagnosis for engine noise, smoke issues, piston work, and valve adjustments.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-lg transition-shadow group">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-900 group-hover:bg-red-50 group-hover:text-red-600 transition-colors mb-6">
<iconify-icon icon="solar:bolt-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Electrical &amp; Wiring</h4>
<p className="text-neutral-500 leading-relaxed">Fixing starting trouble, battery issues, horn, lights, and complete wiring harness replacement.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-lg transition-shadow group">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-900 group-hover:bg-red-50 group-hover:text-red-600 transition-colors mb-6">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Royal Enfield Specialists</h4>
<p className="text-neutral-500 leading-relaxed">Dedicated tooling and expertise for Bullet, Classic 350, and Himalayan maintenance.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-lg transition-shadow group">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-900 group-hover:bg-red-50 group-hover:text-red-600 transition-colors mb-6">
<iconify-icon icon="solar:wheel-angle-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Tyres &amp; Tubes</h4>
<p className="text-neutral-500 leading-relaxed">Puncture repairs, tyre replacement, and wheel alignment for safety on Nagpur roads.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-lg transition-shadow group">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-900 group-hover:bg-red-50 group-hover:text-red-600 transition-colors mb-6">
<iconify-icon icon="solar:oil-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Oil Change &amp; Lube</h4>
<p className="text-neutral-500 leading-relaxed">Premium engine oils (Motul, Castrol, Shell) for better mileage and engine life.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="spares">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-sm font-medium text-red-600 tracking-wide uppercase mb-3">Genuine Products</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">Authentic Spare Parts Shop</h3>
<p className="text-neutral-500 text-lg">We stock genuine parts for Hero, Honda, Yamaha, TVS, Suzuki and Royal Enfield to ensure longevity.</p>
</div>
<a className="text-neutral-900 font-medium hover:text-red-600 flex items-center transition-colors" href="#contact">
                    Check Availability <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group relative overflow-hidden rounded-xl bg-neutral-50 aspect-square flex items-center justify-center p-6 border border-neutral-100">
<img alt="Engine Oil" className="object-cover w-full h-full rounded-lg mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white font-medium">Engine Oils</p>
<p className="text-white/80 text-xs">Motul, Castrol, Shell</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-neutral-50 aspect-square flex items-center justify-center p-6 border border-neutral-100">
<img alt="Mechanical Parts" className="object-cover w-full h-full rounded-lg mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white font-medium">Engine Parts</p>
<p className="text-white/80 text-xs">Pistons, Chains, Sprockets</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-neutral-50 aspect-square flex items-center justify-center p-6 border border-neutral-100">
<img alt="Car" className="object-cover w-full h-full rounded-lg mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white font-medium">Electricals</p>
<p className="text-white/80 text-xs">Batteries, Spark Plugs, Bosch</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-neutral-50 aspect-square flex items-center justify-center p-6 border border-neutral-100">
<img alt="Tyres" className="object-cover w-full h-full rounded-lg mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white font-medium">Tyres &amp; Tubes</p>
<p className="text-white/80 text-xs">MRF, CEAT, Michelin</p>
</div>
</div>
</div>
<div className="mt-8 flex flex-wrap gap-2 justify-center">
<span className="px-4 py-2 bg-neutral-50 rounded-full text-sm text-neutral-600 border border-neutral-200">Bosch</span>
<span className="px-4 py-2 bg-neutral-50 rounded-full text-sm text-neutral-600 border border-neutral-200">Hero Genuine Parts</span>
<span className="px-4 py-2 bg-neutral-50 rounded-full text-sm text-neutral-600 border border-neutral-200">Yamaha</span>
<span className="px-4 py-2 bg-neutral-50 rounded-full text-sm text-neutral-600 border border-neutral-200">Royal Enfield</span>
<span className="px-4 py-2 bg-neutral-50 rounded-full text-sm text-neutral-600 border border-neutral-200">Honda</span>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900 text-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-sm font-medium text-red-500 tracking-wide uppercase mb-3">Why Choose Us</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Experience You Can Trust</h3>
<div className="space-y-6 text-neutral-400">
<p>At Royal Automobiles &amp; Servicing Centre, we treat every bike as if it were our own. With years of experience serving the Nagpur community, specifically around Godhani Road, we have built a reputation for transparency.</p>
<p>We strictly avoid fake parts and unnecessary repairs. Our mechanics are trained to diagnose issues accurately, saving you time and money.</p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6">
<div>
<div className="text-3xl font-semibold text-white mb-1">100%</div>
<div className="text-sm text-neutral-500">Genuine Parts</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">10+</div>
<div className="text-sm text-neutral-500">Years Experience</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">Fast</div>
<div className="text-sm text-neutral-500">Turnaround Time</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">Fair</div>
<div className="text-sm text-neutral-500">Pricing Policy</div>
</div>
</div>
</div>
<div className="relative">
<img alt="Workshop Interior" className="rounded-2xl opacity-90 grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute -bottom-6 -left-6 bg-red-600 p-6 rounded-xl hidden md:block">
<p className="text-white font-semibold text-lg">Specializing in</p>
<p className="text-white/80 text-sm">Two Wheeler Engine Works</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h3 className="text-3xl font-semibold text-neutral-900 tracking-tight">Customer Reviews</h3>
<p className="mt-4 text-neutral-500">See what bike owners in Nagpur are saying.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-neutral-200">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 text-sm mb-6 leading-relaxed">"Best place for servicing in Godhani. They solved a starting issue in my Pulsar that 3 other mechanics couldn't fix. Very polite staff."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-neutral-500 text-xs">R</div>
<div>
<p className="text-sm font-medium text-neutral-900">Rahul Sharma</p>
<p className="text-xs text-neutral-500">Nagpur Local Guide</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-neutral-200">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 text-sm mb-6 leading-relaxed">"Genuine spare parts at reasonable rates. I service my Royal Enfield Classic 350 here regularly. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-neutral-500 text-xs">A</div>
<div>
<p className="text-sm font-medium text-neutral-900">Amit Deshmukh</p>
<p className="text-xs text-neutral-500">Bike Enthusiast</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-neutral-200">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 text-sm mb-6 leading-relaxed">"Quick service and transparent billing. No hidden charges. The owner is very knowledgeable about bike engines."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-neutral-500 text-xs">V</div>
<div>
<p className="text-sm font-medium text-neutral-900">Vikram Patil</p>
<p className="text-xs text-neutral-500">Local Customer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-sm font-medium text-red-600 tracking-wide uppercase mb-3">Visit Us</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">Contact Information</h3>
<p className="mt-4 text-neutral-500">Reach out for service booking or spare parts enquiry.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 flex flex-col items-center text-center hover:shadow-lg transition-all group">
<div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-red-600 mb-5 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:map-point-linear" width="26"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-neutral-900 mb-2">Our Location</h4>
<p className="text-neutral-500 text-sm leading-relaxed">Next to Sonu Restaurant, Godhani Road,<br/>Nagpur – 440030, Maharashtra</p>
</div>

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 flex flex-col items-center text-center hover:shadow-lg transition-all group">
<div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-red-600 mb-5 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="26"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-neutral-900 mb-2">Phone Number</h4>
<p className="text-neutral-500 text-sm leading-relaxed mb-2">Call us for appointments</p>
<a className="text-neutral-900 font-medium hover:text-red-600 transition-colors" href="tel:07721078653">077210 78653</a>
</div>

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 flex flex-col items-center text-center hover:shadow-lg transition-all group">
<div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-red-600 mb-5 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:clock-circle-linear" width="26"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-neutral-900 mb-2">Working Hours</h4>
<p className="text-neutral-500 text-sm leading-relaxed">10:00 AM to 8:30 PM</p>
<p className="text-green-600 text-xs font-medium mt-1">Open Daily</p>
</div>
</div>

<div className="w-full h-80 bg-neutral-100 rounded-2xl flex items-center justify-center relative overflow-hidden border border-neutral-200 group">
<div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Nagpur&amp;zoom=13&amp;size=600x300&amp;sensor=false')] bg-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col items-center">
<iconify-icon className="text-red-600 text-5xl drop-shadow-xl mb-3 animate-bounce" icon="solar:map-point-bold"></iconify-icon>
<a className="px-6 py-3 bg-white text-sm font-semibold rounded-full shadow-lg text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all transform hover:-translate-y-1" href="https://maps.google.com/?q=Godhani+Road+Nagpur" target="_blank">
                        Get Directions on Google Maps
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white border-t border-neutral-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold text-lg tracking-tighter">R</span>
</div>
<span className="font-semibold text-lg tracking-tight">Royal Automobiles</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                        The most trusted two-wheeler servicing centre in Nagpur. Genuine parts, expert mechanics, and reliable service for all bike brands.
                    </p>
</div>
<div>
<h5 className="font-semibold mb-4 text-white">Quick Links</h5>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-red-500 transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#spares">Spare Parts</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold mb-4 text-white">Contact</h5>
<ul className="space-y-2 text-sm text-neutral-400">
<li>Godhani Road, Nagpur</li>
<li>Next to Sonu Restaurant</li>
<li><a className="hover:text-red-500 transition-colors" href="tel:07721078653">077210 78653</a></li>
<li>Daily: 10:00 AM - 8:30 PM</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-500">© 2023 Royal Automobiles &amp; Servicing Centre. All rights reserved.</p>
<div className="flex space-x-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:whatsapp-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

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


document.write(new Date().getFullYear())
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
      

<header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
<div className="max-w-7xl mx-auto px-4 md:px-8 h-24 flex items-center justify-between">

<a className="group relative flex items-center justify-center" href="#">
<img alt="Hallman's Power Washing Logo" className="h-16 w-auto object-contain transition-transform group-hover:scale-105" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1771123303/hallmanpowerwashlogo_zqygpz.png"/>
</a>

<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-base font-medium group" href="tel:6094120632">
<div className="p-2 rounded-full bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
                    (609) 412-0632
                </a>
<a className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-base font-medium py-3 px-6 rounded-full transition-all shadow-lg shadow-blue-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 flex items-center gap-2" href="#quote">
                    Free Quote
                    <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="relative pt-36 pb-24 md:pt-52 md:pb-40 overflow-hidden bg-slate-900">

<div className="absolute inset-0 overflow-hidden">
<div className="bubble"></div>
<div className="bubble"></div>
<div className="bubble"></div>
<div className="bubble"></div>
<div className="bubble"></div>
<div className="bubble"></div>
<div className="bubble"></div>
</div>

<div className="absolute inset-0 z-0">

<img alt="Pristine white house exterior" className="w-full h-full object-cover opacity-55 scale-105" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1771123307/hero_yice3n.png"/>


<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-blue-900/10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-blue-500/10"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
<div className="max-w-4xl">

<div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full pl-2 pr-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" height="12" icon="solar:check-circle-bold" width="12"></iconify-icon>
</span>
<span className="text-white text-sm font-normal tracking-wide">#1 Rated in Atlantic County</span>
</div>
<h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tight mb-8 leading-[1.1] drop-shadow-sm">
                    Restore Your Home's<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white drop-shadow-lg">Sparkling Shine</span>
</h1>
<p className="text-blue-50 text-xl md:text-2xl font-normal mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                    Expert power washing that blasts away grime and algae. We bring the sparkle back to your siding, roof, and driveway.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-lg font-medium py-4 px-8 rounded-full transition-all shadow-lg shadow-blue-500/30 hover:shadow-cyan-400/50 hover:-translate-y-1 flex items-center justify-center gap-2" href="#quote">
                        Get Instant Quote
                    </a>
<a className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white text-lg font-normal py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 group" href="tel:6094120632">
<div className="bg-white/10 p-1 rounded-full group-hover:bg-white/20 transition-colors flex items-center justify-center">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
                        (609) 412-0632
                    </a>
</div>
<div className="flex flex-wrap items-center gap-6 md:gap-10 text-blue-100 text-sm font-medium tracking-wide uppercase shadow-sm">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-cyan-300" height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
                        Open 24 Hours
                    </div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-cyan-300" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
                        Egg Harbor &amp; Surroundings
                    </div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-cyan-300" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
                        Fully Insured
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>
<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-2xl">
<h2 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-4">Complete Exterior Cleaning</h2>
<p className="text-slate-500 text-xl leading-relaxed">We use specialized techniques for every surface, ensuring a deep clean without the damage of high pressure where it doesn't belong.</p>
</div>
<div className="hidden md:block">
<a className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all" href="#quote">
                        View all services 
                        <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl border border-slate-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all bg-slate-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:-translate-y-1 transition-transform">
<iconify-icon height="28" icon="solar:home-smile-linear" width="28"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold text-2xl mb-3">House &amp; Siding Soft Wash</h3>
<p className="text-slate-500 text-lg mb-6 leading-relaxed">Safely remove dirt and algae from vinyl, stucco, and wood siding using our gentle detergent blend.</p>
<a className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all gap-1 text-base" href="#quote">
                        Request Quote <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all bg-slate-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:-translate-y-1 transition-transform">
<iconify-icon height="28" icon="solar:streets-linear" width="28"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold text-2xl mb-3">Driveways &amp; Walkways</h3>
<p className="text-slate-500 text-lg mb-6 leading-relaxed">Restore concrete and pavers by blasting away oil stains, gum, and years of grime buildup.</p>
<a className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all gap-1 text-base" href="#quote">
                        Request Quote <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all bg-slate-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:-translate-y-1 transition-transform">
<iconify-icon height="28" icon="solar:sofa-linear" width="28"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold text-2xl mb-3">Decks &amp; Patios</h3>
<p className="text-slate-500 text-lg mb-6 leading-relaxed">Revitalize your outdoor living space. We clean wood, composite, and stone surfaces perfectly.</p>
<a className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all gap-1 text-base" href="#quote">
                        Request Quote <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all bg-slate-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:-translate-y-1 transition-transform">
<iconify-icon height="28" icon="solar:umbrella-linear" width="28"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold text-2xl mb-3">Roof Cleaning</h3>
<p className="text-slate-500 text-lg mb-6 leading-relaxed">Extend your roof's life by removing black streaks and moss with our zero-pressure system.</p>
<a className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all gap-1 text-base" href="#quote">
                        Request Quote <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all bg-slate-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:-translate-y-1 transition-transform">
<iconify-icon height="28" icon="solar:shop-linear" width="28"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold text-2xl mb-3">Commercial Services</h3>
<p className="text-slate-500 text-lg mb-6 leading-relaxed">Keep your storefront, parking lot, or office building looking professional for clients.</p>
<a className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all gap-1 text-base" href="#quote">
                        Request Quote <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all bg-slate-50 hover:bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:-translate-y-1 transition-transform">
<iconify-icon height="28" icon="solar:window-frame-linear" width="28"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold text-2xl mb-3">Window Cleaning</h3>
<p className="text-slate-500 text-lg mb-6 leading-relaxed">Crystal clear, streak-free window cleaning to let more natural light into your home.</p>
<a className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all gap-1 text-base" href="#quote">
                        Request Quote <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-6">Why Choose Hallman's?</h2>
<p className="text-slate-500 text-xl mb-8 leading-relaxed">
                        We don't just spray water; we restore the beauty of your property with care and precision. We are dedicated to delivering results that exceed expectations.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 bg-cyan-100 p-1.5 rounded-full text-cyan-600">
<iconify-icon height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium text-lg">Protect curb appeal and property value</h4>
<p className="text-slate-500 text-lg mt-1">Regular maintenance prevents long-term decay.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-cyan-100 p-1.5 rounded-full text-cyan-600">
<iconify-icon height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium text-lg">Remove dirt, algae, and buildup safely</h4>
<p className="text-slate-500 text-lg mt-1">We use the right pressure and solutions for every surface.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-cyan-100 p-1.5 rounded-full text-cyan-600">
<iconify-icon height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium text-lg">Respect for your home and business</h4>
<p className="text-slate-500 text-lg mt-1">Careful setup and thorough cleanup every time.</p>
</div>
</li>
</ul>
</div>
<div className="order-1 lg:order-2 relative h-[500px] rounded-[2rem] overflow-hidden bg-slate-200 shadow-2xl shadow-blue-900/10 ring-1 ring-slate-900/5">
<img alt="Pressure washer detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/50">
<div className="flex items-center gap-1 text-yellow-400 mb-2">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-900 text-lg font-medium leading-relaxed">"My driveway looks brand new again. Highly recommended!"</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<h2 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-4">5-Star Results Customers Talk About</h2>
<div className="flex items-center justify-center gap-3">
<span className="text-slate-900 font-extrabold text-3xl">5.0</span>
<span className="flex text-yellow-400 gap-0.5">
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
</span>
<span className="text-slate-500 text-xl font-normal">(155 reviews)</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative hover:shadow-lg transition-shadow">
<div className="flex text-yellow-400 mb-4 gap-0.5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6">"Fantastic job on my house siding. The green algae is completely gone and the team was super professional from start to finish."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">LC</div>
<div>
<p className="text-slate-900 text-base font-semibold">Local Customer</p>
<p className="text-cyan-600 text-sm font-medium">Homeowner</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative hover:shadow-lg transition-shadow">
<div className="flex text-yellow-400 mb-4 gap-0.5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6">"Hallman's Power Washing responded quickly and did an amazing job on our commercial walkway. It makes a huge difference!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">BO</div>
<div>
<p className="text-slate-900 text-base font-semibold">Business Owner</p>
<p className="text-cyan-600 text-sm font-medium">Commercial</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative hover:shadow-lg transition-shadow">
<div className="flex text-yellow-400 mb-4 gap-0.5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-lg leading-relaxed mb-6">"Great communication and even better results. My patio is ready for summer. Pricing was very fair too."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">JS</div>
<div>
<p className="text-slate-900 text-base font-semibold">John Smith</p>
<p className="text-cyan-600 text-sm font-medium">Egg Harbor Twp</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<h2 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">See The Difference</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6">

<div className="relative group overflow-hidden rounded-2xl aspect-square cursor-zoom-in shadow-lg">
<img alt="Driveway Restoration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1771123308/drivewaypowerwash_socwu4.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 text-white font-semibold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Driveway Restoration</div>
</div>

<div className="relative group overflow-hidden rounded-2xl aspect-square cursor-zoom-in shadow-lg">
<img alt="Siding Soft Wash" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1771123303/housesiding_znygg8.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 text-white font-semibold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Siding Soft Wash</div>
</div>

<div className="relative group overflow-hidden rounded-2xl aspect-square cursor-zoom-in shadow-lg">
<img alt="Patio Cleaning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1771123304/patiopowerwash_gm6akm.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 text-white font-semibold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Patio Cleaning</div>
</div>

<div className="relative group overflow-hidden rounded-2xl aspect-square cursor-zoom-in shadow-lg">
<img alt="Commercial Services" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1771123307/comercialpowerwash_j6lp0g.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 text-white font-semibold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Commercial Services</div>
</div>

<div className="relative group overflow-hidden rounded-2xl aspect-square cursor-zoom-in shadow-lg">
<img alt="Walkway Cleaning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1771123304/walkwaypowerwashing_mhriuh.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 text-white font-semibold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Walkway Cleaning</div>
</div>

<div className="relative group overflow-hidden rounded-2xl aspect-square cursor-zoom-in shadow-lg">
<img alt="Window Cleaning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 text-white font-semibold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Window Cleaning</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex flex-col md:flex-row gap-10 md:items-center">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/20">
<iconify-icon className="text-white" height="24" icon="solar:tag-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-semibold text-2xl">10% Off Returning Customers</p>
<p className="text-slate-400 text-base">We value your loyalty year after year.</p>
</div>
</div>
<div className="hidden md:block w-px h-12 bg-slate-800"></div>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-400/20">
<iconify-icon className="text-white" height="24" icon="solar:medal-star-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-semibold text-2xl">10% Off Military &amp; First Responders</p>
<p className="text-slate-400 text-base">Thank you for your service.</p>
</div>
</div>
</div>
<a className="bg-white hover:bg-cyan-50 text-slate-900 text-lg font-semibold py-3 px-8 rounded-full transition-colors whitespace-nowrap shadow-lg" href="#quote">
                Ask About Discounts
            </a>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-20">
<h2 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight">How It Works</h2>
<p className="text-slate-500 mt-3 text-xl">Professional cleaning in three simple steps.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-10 left-1/6 w-2/3 h-0.5 bg-gradient-to-r from-slate-200 via-cyan-200 to-slate-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-slate-200 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all rounded-3xl flex items-center justify-center mb-8">
<iconify-icon className="w-8 h-8 text-slate-400 group-hover:text-cyan-500 transition-colors" height="32" icon="solar:file-text-linear" width="32"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold text-2xl mb-3">1. Request a Quote</h3>
<p className="text-slate-500 text-lg leading-relaxed px-4">Fill out our simple form or give us a call. We'll give you a fair, transparent estimate.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-slate-200 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all rounded-3xl flex items-center justify-center mb-8">
<iconify-icon className="w-8 h-8 text-slate-400 group-hover:text-cyan-500 transition-colors" height="32" icon="solar:calendar-linear" width="32"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold text-2xl mb-3">2. Schedule Service</h3>
<p className="text-slate-500 text-lg leading-relaxed px-4">We'll find a time that works best for you. We operate 24 hours for maximum convenience.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-slate-200 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all rounded-3xl flex items-center justify-center mb-8">
<iconify-icon className="w-8 h-8 text-slate-400 group-hover:text-cyan-500 transition-colors" height="32" icon="solar:stars-linear" width="32"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold text-2xl mb-3">3. We Clean &amp; Shine</h3>
<p className="text-slate-500 text-lg leading-relaxed px-4">Our team arrives on time, completes the job with care, and leaves your property sparkling.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto px-4 md:px-8">
<h2 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-6">
<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-slate-900 font-medium text-xl mb-3 flex items-center gap-3">
<iconify-icon className="text-cyan-500" height="24" icon="solar:question-circle-linear" width="24"></iconify-icon>
                        What surfaces can you clean?
                    </h3>
<p className="text-slate-500 text-lg pl-9 leading-relaxed">We clean almost any exterior surface including vinyl siding, stucco, brick, concrete driveways, pavers, wooden decks, and roofing shingles.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-slate-900 font-medium text-xl mb-3 flex items-center gap-3">
<iconify-icon className="text-cyan-500" height="24" icon="solar:question-circle-linear" width="24"></iconify-icon>
                        Do you do residential and commercial?
                    </h3>
<p className="text-slate-500 text-lg pl-9 leading-relaxed">Yes! We provide professional exterior cleaning for both residential homes and commercial businesses in Egg Harbor Township and beyond.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-slate-900 font-medium text-xl mb-3 flex items-center gap-3">
<iconify-icon className="text-cyan-500" height="24" icon="solar:question-circle-linear" width="24"></iconify-icon>
                        Do you offer window cleaning?
                    </h3>
<p className="text-slate-500 text-lg pl-9 leading-relaxed">Absolutely. We offer professional window cleaning services to ensure your property looks great from every angle.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-slate-900 font-medium text-xl mb-3 flex items-center gap-3">
<iconify-icon className="text-cyan-500" height="24" icon="solar:question-circle-linear" width="24"></iconify-icon>
                        When are you open?
                    </h3>
<p className="text-slate-500 text-lg pl-9 leading-relaxed">Hallman's Power Washing is open 24 hours to accommodate your schedule and emergency cleaning needs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="quote">
<div className="max-w-xl mx-auto px-4 md:px-8 relative z-10">
<div className="text-center mb-10">
<h2 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-4">Get a Free Quote Fast</h2>
<p className="text-slate-500 text-xl">Tell us about your project and we'll be in touch shortly.</p>
</div>
<form className="space-y-6">
<div>
<label className="block text-slate-700 text-sm font-semibold uppercase tracking-wide mb-2">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 text-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-slate-700 text-sm font-semibold uppercase tracking-wide mb-2">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 text-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 outline-none transition-all placeholder:text-slate-400" placeholder="(609) 555-0123" type="tel"/>
</div>
<div>
<label className="block text-slate-700 text-sm font-semibold uppercase tracking-wide mb-2">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 text-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-slate-700 text-sm font-semibold uppercase tracking-wide mb-2">Property Address / Zip</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 text-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 outline-none transition-all placeholder:text-slate-400" placeholder="101 Park Ave, Egg Harbor Township" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-slate-700 text-sm font-semibold uppercase tracking-wide mb-2">Property Type</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 text-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 outline-none transition-all appearance-none cursor-pointer">
<option>Residential</option>
<option>Commercial</option>
</select>
<iconify-icon className="absolute right-4 top-4 text-slate-400 pointer-events-none" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<label className="block text-slate-700 text-sm font-semibold uppercase tracking-wide mb-2">Service Needed</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 text-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 outline-none transition-all appearance-none cursor-pointer">
<option>House / Siding Wash</option>
<option>Driveway / Walkway</option>
<option>Deck / Patio</option>
<option>Roof Cleaning</option>
<option>Commercial Exterior</option>
<option>Window Cleaning</option>
<option>Multiple Services</option>
</select>
<iconify-icon className="absolute right-4 top-4 text-slate-400 pointer-events-none" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-slate-700 text-sm font-semibold uppercase tracking-wide mb-2">Message (Optional)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 text-lg focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400 outline-none transition-all placeholder:text-slate-400" placeholder="Any specific details about your project?" rows="3"></textarea>
</div>
<div>
<label className="block text-slate-700 text-sm font-semibold uppercase tracking-wide mb-3">Preferred Contact Method</label>
<div className="flex gap-6">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 text-cyan-600 focus:ring-cyan-500 border-gray-300" name="contact" type="radio"/>
<span className="text-lg text-slate-600 group-hover:text-slate-900 transition-colors">Call</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 text-cyan-600 focus:ring-cyan-500 border-gray-300" name="contact" type="radio"/>
<span className="text-lg text-slate-600 group-hover:text-slate-900 transition-colors">Text</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 text-cyan-600 focus:ring-cyan-500 border-gray-300" name="contact" type="radio"/>
<span className="text-lg text-slate-600 group-hover:text-slate-900 transition-colors">Email</span>
</label>
</div>
</div>
<button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xl py-4 rounded-full transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 mt-4 flex items-center justify-center gap-2" type="submit">
                    Get My Free Quote
                </button>
<p className="text-center text-slate-400 text-sm mt-4">No credit card required for quotes.</p>
</form>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden">

<div className="absolute bottom-0 right-10 w-20 h-20 rounded-full bg-cyan-500/10 blur-xl"></div>
<div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">

<div className="flex items-center justify-center mb-8">
<img alt="Hallman's Power Washing" className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity" src="https://res.cloudinary.com/dhs9d8tou/image/upload/v1771123303/hallmanpowerwashlogo_zqygpz.png"/>
</div>
<p className="mb-3 text-white font-medium text-xl">101 Park Ave, Egg Harbor Township, NJ 08234</p>
<p className="mb-8 text-lg text-cyan-200/60">Open 24 Hours • Licensed &amp; Insured</p>
<a className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl transition-colors mb-12 font-medium text-lg border border-slate-700 hover:border-cyan-500/30" href="tel:6094120632">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                Call (609) 412-0632
            </a>
<div className="border-t border-slate-800/50 pt-10">
<p className="text-base text-slate-500">Proudly serving Egg Harbor Township, NJ and nearby Atlantic County areas.</p>
<p className="text-base text-slate-600 mt-4">©  Hallman's Power Washing. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}

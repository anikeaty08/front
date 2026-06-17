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
sans: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
brand: {
50: '#fff7ed', // Orange tint for NL
100: '#ffedd5',
500: '#f97316',
600: '#ea580c',
900: '#7c2d12',
},
italy: {
green: '#22c55e', // Subtle green for IT
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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="h-16 flex items-center justify-between">

<a className="text-xl font-bold tracking-tighter text-slate-900 flex items-center gap-2.5" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
<iconify-icon icon="solar:briefcase-linear" width="18"></iconify-icon>
</div>
                    Dailywork<span className="text-brand-500">.</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wide text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Sectors</a>
<a className="hover:text-slate-900 transition-colors" href="#companies">Employers</a>
<a className="hover:text-slate-900 transition-colors" href="#workers">Candidates</a>
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
</div>

<div className="flex items-center gap-4">

<div className="hidden md:flex bg-slate-100 rounded-md p-1 items-center">
<button className="px-2.5 py-1 text-[10px] font-bold text-slate-900 bg-white rounded shadow-sm">EN</button>
<button className="px-2.5 py-1 text-[10px] font-bold text-slate-400 hover:text-slate-700 transition-colors">NL</button>
<button className="px-2.5 py-1 text-[10px] font-bold text-slate-400 hover:text-slate-700 transition-colors">IT</button>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 group" href="#contact">
                        Get in Touch
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="lg:hidden text-slate-900 p-2" onclick="document.getElementById('mobile-menu').classList.toggle('open')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden border-t border-slate-100" id="mobile-menu">
<div className="py-4 space-y-4 flex flex-col items-center">
<a className="text-sm font-medium text-slate-900" href="#services">Sectors</a>
<a className="text-sm font-medium text-slate-900" href="#companies">For Employers</a>
<a className="text-sm font-medium text-slate-900" href="#workers">For Candidates</a>
<a className="text-sm font-medium text-brand-600" href="#contact">Contact Us</a>
<div className="flex gap-4 pt-2">
<span className="text-xs font-bold text-slate-900">EN</span>
<span className="text-xs font-bold text-slate-400">NL</span>
<span className="text-xs font-bold text-slate-400">IT</span>
</div>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50 via-white to-white"></div>
<div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-30">
<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-[11px] font-semibold uppercase tracking-wide mx-auto lg:mx-0">
<span className="w-2 h-2 rounded-full bg-brand-500"></span>
                        Connecting Milan <span className="text-slate-300 mx-1">—</span> Amsterdam
                    </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tighter text-balance leading-[1.1]">
                        The workforce <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500">Europe needs.</span>
</h1>
<p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 text-balance font-light leading-relaxed">
                        Dailywork bridges the gap between Italy's skilled professionals and the Netherlands' thriving industries. We handle recruitment, relocation, and compliance.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
<a className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all w-full sm:w-auto shadow-xl shadow-slate-900/10" href="#companies">
                            Find Talent
                        </a>
<a className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-sm font-semibold hover:border-brand-200 hover:text-brand-600 hover:shadow-lg hover:shadow-brand-500/5 transition-all w-full sm:w-auto" href="#workers">
                            Find Work
                        </a>
</div>

<div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-bold text-slate-900">NEN 4400-1</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:home-smile-linear"></iconify-icon>
<span className="text-xs font-bold text-slate-900">SNF Housing</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-bold text-slate-900">NBBU Member</span>
</div>
</div>
</div>

<div className="relative hidden lg:block">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl -z-10"></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100">
<img alt="Engineer" className="w-full h-48 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1581094794329-cd280bdad78d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="p-3">
<div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">Industry</div>
<div className="text-[10px] text-slate-500">Welding &amp; Assembly</div>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:plane-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-slate-900">Relocation</div>
<div className="text-[10px] text-slate-500">Full support included</div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-italy-green/10 flex items-center justify-center text-italy-green">
<iconify-icon icon="solar:user-check-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-slate-900">Verified Talent</div>
<div className="text-[10px] text-slate-500">Scouted in Italy</div>
</div>
</div>
<div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100">
<img alt="Healthcare" className="w-full h-48 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1576091160550-2187d80aeff2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="p-3">
<div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">Healthcare</div>
<div className="text-[10px] text-slate-500">Nursing &amp; Care</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-brand-600 font-bold tracking-wider text-xs uppercase mb-2 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Specialized Staffing</h2>
</div>
<p className="text-slate-500 text-sm md:text-base max-w-md font-light">We focus on sectors where Italian craftsmanship and work ethic meet Dutch demand.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Hospitality" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand-600 text-xl" icon="solar:chef-hat-linear"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900">Hospitality</h3>
</div>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-4">Chefs, baristas, and service staff with authentic Italian experience for Dutch hotels and restaurants.</p>
<ul className="text-xs text-slate-400 font-medium space-y-1">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-500 rounded-full"></div> Seasonal &amp; Permanent</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-500 rounded-full"></div> English Speaking</li>
</ul>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Industry" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand-600 text-xl" icon="solar:bolt-linear"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900">Technical Industry</h3>
</div>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-4">Certified welders, electricians, and mechanics ready for construction and manufacturing projects.</p>
<ul className="text-xs text-slate-400 font-medium space-y-1">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-500 rounded-full"></div> VCA Certified</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-500 rounded-full"></div> Technical Screening</li>
</ul>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Healthcare" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand-600 text-xl" icon="solar:heart-pulse-linear"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900">Healthcare</h3>
</div>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-4">Qualified nurses and care professionals. We provide intensive language training (A0 to B1) prior to arrival.</p>
<ul className="text-xs text-slate-400 font-medium space-y-1">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-500 rounded-full"></div> BIG Registration Support</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-500 rounded-full"></div> Language Course</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-0 bg-white">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="py-24 px-8 md:px-16 lg:px-24 bg-white border-b md:border-b-0 md:border-r border-slate-100" id="companies">
<div className="max-w-md mx-auto md:mx-0">
<div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center mb-6">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">For Employers</h2>
<p className="text-slate-500 mb-8 font-light">
                        Solve your personnel shortage with motivated, EU-certified staff. We take over the entire recruitment and administrative process.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex gap-3">
<iconify-icon className="text-brand-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600"><strong>No Administrative Burden:</strong> We handle payroll, taxes, and contracts.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-brand-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600"><strong>Housing Guaranteed:</strong> We arrange SNF-certified housing for all workers.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-brand-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600"><strong>Replacement Guarantee:</strong> Not a match? We find a replacement free of charge.</span>
</li>
</ul>
<a className="text-slate-900 text-sm font-semibold underline decoration-slate-300 underline-offset-4 hover:decoration-brand-500 transition-all" href="#contact">Request a quote</a>
</div>
</div>

<div className="py-24 px-8 md:px-16 lg:px-24 bg-slate-50" id="workers">
<div className="max-w-md mx-auto md:mx-0">
<div className="w-12 h-12 rounded-lg bg-white shadow-sm text-brand-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">For Candidates</h2>
<p className="text-slate-500 mb-8 font-light">
                        Start a new life in the Netherlands with security and support. We help you every step of the way, from Italy to your new Dutch home.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex gap-3">
<iconify-icon className="text-brand-600 mt-0.5 shrink-0" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-sm text-slate-600"><strong>Weekly Salary:</strong> Consistent payments, always on time according to Dutch CAO.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-brand-600 mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm text-slate-600"><strong>Accommodation:</strong> Single rooms, WiFi, and transport to work provided.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-brand-600 mt-0.5 shrink-0" icon="solar:chat-round-linear"></iconify-icon>
<span className="text-sm text-slate-600"><strong>Italian Coordinators:</strong> Someone who speaks your language is always available.</span>
</li>
</ul>
<a className="text-slate-900 text-sm font-semibold underline decoration-slate-300 underline-offset-4 hover:decoration-brand-500 transition-all" href="#contact">Register your CV</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-2xl font-semibold mb-8">Two cultures, one goal.</h2>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70">
<div className="flex flex-col items-center gap-3">
<iconify-icon icon="solar:cup-hot-linear" width="32"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest">Italian Passion</span>
</div>
<div className="w-16 h-px bg-slate-700 hidden md:block"></div>
<div className="flex flex-col items-center gap-3">
<iconify-icon icon="solar:bicycle-linear" width="32"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest">Dutch Efficiency</span>
</div>
<div className="w-16 h-px bg-slate-700 hidden md:block"></div>
<div className="flex flex-col items-center gap-3">
<iconify-icon icon="solar:hand-shake-linear" width="32"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest">Shared Success</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="space-y-12">
<div>
<span className="text-brand-600 font-bold tracking-wider text-xs uppercase mb-2 block">Contact Us</span>
<h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Let's work together.</h2>
<p className="text-slate-500 font-light">Whether you're a company looking for talent or a candidate looking for a job, we're here to help.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<span className="fi fi-nl"></span>
<h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Amsterdam HQ</h3>
</div>
<div className="text-sm text-slate-500 leading-relaxed font-light">
                                Keizersgracht 123<br/>
                                1015 CJ Amsterdam<br/>
                                The Netherlands
                            </div>
<a className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-brand-600 transition-colors" href="tel:+31201234567">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                                +31 20 123 4567
                            </a>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Milan Hub</h3>
</div>
<div className="text-sm text-slate-500 leading-relaxed font-light">
                                Via Alessandro Volta 12<br/>
                                20121 Milano MI<br/>
                                Italy
                            </div>
<a className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-brand-600 transition-colors" href="tel:+39021234567">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                                +39 02 123 4567
                            </a>
</div>
</div>

<div className="w-full h-48 bg-slate-50 rounded-2xl border border-slate-200 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

<div className="absolute top-1/4 left-3/4 w-3 h-3 bg-brand-500 rounded-full animate-ping"></div>
<div className="absolute top-1/4 left-3/4 w-3 h-3 bg-brand-500 rounded-full border-2 border-white shadow-sm"></div>
<div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-slate-400 rounded-full border-2 border-white shadow-sm"></div>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-[10px] font-bold text-slate-500 border border-slate-100">
                            Dailywork European Network
                        </div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl shadow-slate-200/50">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="col-span-2 sm:col-span-1 space-y-2">
<label className="text-xs font-bold text-slate-700 uppercase">First Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400 font-light" placeholder="Marco" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1 space-y-2">
<label className="text-xs font-bold text-slate-700 uppercase">Last Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400 font-light" placeholder="Rossi" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-700 uppercase">Email</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400 font-light" placeholder="marco@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-700 uppercase">I am a...</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="role" type="radio"/>
<div className="text-center py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-500 peer-checked:border-brand-500 peer-checked:text-brand-600 peer-checked:bg-brand-50 transition-all font-medium">
                                        Company
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="role" type="radio"/>
<div className="text-center py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-500 peer-checked:border-brand-500 peer-checked:text-brand-600 peer-checked:bg-brand-50 transition-all font-medium">
                                        Candidate
                                    </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-700 uppercase">Message</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400 font-light" placeholder="Tell us about your needs..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                            Send Request
                            <iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 font-light text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="text-lg font-bold tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-white text-[10px] shadow-sm">DW</div>
                        Dailywork.
                    </a>
<p className="text-xs leading-relaxed max-w-xs text-slate-500">
                        Connecting the finest Italian talent with leading Dutch businesses. Creating opportunities through cross-border mobility since 2013.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-brand-600 transition-colors" href="#">
<iconify-icon icon="brandico:linkedin" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-brand-600 transition-colors" href="#">
<iconify-icon icon="brandico:facebook" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-brand-600 transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="14"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Company</h4>
<ul className="space-y-3">
<li><a className="hover:text-brand-500 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#services">Sectors</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#companies">For Employers</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#workers">For Candidates</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Legal</h4>
<ul className="space-y-3">
<li><a className="hover:text-brand-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Cookie Statement</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">NBBU Conditions</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Contact</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@dailywork.nl">info@dailywork.nl</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+31201234567">+31 (0)20 123 4567</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<span>Mon - Fri, 08:30 - 17:30</span>
</li>
</ul>
</div>
</div>

<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<div>
                    © 2024 Dailywork Recruitment B.V. • KVK 12345678
                </div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>System Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}

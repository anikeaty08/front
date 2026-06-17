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
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb', // Primary Blue
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
950: '#172554',
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.05em',
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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-brand-200">A&amp;K</span>
                        PLUMBING &amp; GAS
                    </a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#testimonials">Reviews</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-all shadow-md shadow-brand-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600" href="#contact">
                        Get a Quote
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-brand-600 focus:outline-none" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50 via-white to-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
</span>
                        Gas Safe Registered: 569141
                    </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
                        Your Trusted Local <br/>
<span className="gradient-text">Plumbing Expert.</span>
</h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Professional, reliable, and honest domestic plumbing services. Proudly serving Beeston, Attenborough, Chilwell, and surrounding Nottingham areas.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 ring-1 ring-brand-700/10" href="#contact">
                            Book an Appointment
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-brand-600 hover:border-brand-200 transition-all" href="tel:07976763687">
<iconify-icon className="mr-2" icon="solar:phone-linear" width="20"></iconify-icon>
                            07976 763 687
                        </a>
</div>
</div>
<div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/10 fade-in-up delay-200 group ring-1 ring-slate-900/5">
<img alt="Plumbing work on a boiler" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-yellow-400 text-slate-900 text-xs font-bold rounded mb-2">
<iconify-icon icon="solar:star-bold"></iconify-icon> Top Rated
                        </div>
<p className="text-xl font-semibold tracking-tight">Expert Boiler Installations</p>
</div>
</div>
</div>
</div>
</div>

<div className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Plumbing Services</h2>
<p className="text-slate-600">From emergency leaks to full bathroom renovations. No job is too big or too small for our expert team.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-100 group-hover:text-brand-600 transition-all">
<iconify-icon className="text-slate-600 group-hover:text-brand-600 transition-colors" icon="solar:bath-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">Bathroom Installation</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
                        Design and installation. We help design your space, supply fixtures, and complete the fitting.
                    </p>
<div className="h-40 w-full rounded-lg overflow-hidden mt-auto relative">
<div className="absolute inset-0 bg-brand-600/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Bathroom" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-100 group-hover:text-brand-600 transition-all">
<iconify-icon className="text-slate-600 group-hover:text-brand-600 transition-colors" icon="solar:flame-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">Boiler Installation</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
                        Energy efficient boiler installation. Gas Safe registered and qualified for high pressure systems.
                    </p>
<div className="h-40 w-full rounded-lg overflow-hidden mt-auto relative">
<div className="absolute inset-0 bg-brand-600/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Boiler" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>

<div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-100 group-hover:text-brand-600 transition-all">
<iconify-icon className="text-slate-600 group-hover:text-brand-600 transition-colors" icon="solar:thermometer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">Heating Repairs</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
                        Stay warm. Servicing existing systems, fitting new radiators, and system balancing.
                    </p>
<div className="h-40 w-full rounded-lg overflow-hidden mt-auto relative">
<div className="absolute inset-0 bg-brand-600/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Radiator" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/caabb3_a66d3825229d4de7be8d8cf0e7f2ebd0~mv2.jpg"/>
</div>
</div>

<div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-100 group-hover:text-brand-600 transition-all">
<iconify-icon className="text-slate-600 group-hover:text-brand-600 transition-colors" icon="solar:water-drop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">Leaks &amp; Repairs</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
                        Emergency call outs available. Fixing leaking taps, burst pipes and general plumbing issues.
                    </p>
<div className="h-40 w-full rounded-lg overflow-hidden mt-auto relative">
<div className="absolute inset-0 bg-brand-600/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Tap Repair" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/caabb3_2294f8347e7e4fe5bbc4383fe582f47e~mv2.jpg"/>
</div>
</div>
</div>
</div>
</div>

<div className="py-24 bg-brand-50/50" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2 order-2 lg:order-1">
<div className="relative">

<div className="absolute -inset-4 bg-gradient-to-tr from-brand-200 to-brand-50 rounded-2xl transform rotate-2"></div>
<img alt="Navin Soni" className="relative rounded-xl shadow-lg shadow-brand-900/5 w-full max-w-md mx-auto lg:mx-0 object-cover h-[500px]" src="https://static.wixstatic.com/media/caabb3_ed23c6b41ab04b1c9b86971e2eb7f454~mv2.jpg/v1/crop/x_68,y_0,w_271,h_392/fill/w_379,h_549,al_c,lg_1,q_80,enc_avif,quality_auto/caabb3_ed23c6b41ab04b1c9b86971e2eb7f454~mv2.jpg"/>
<div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl shadow-brand-900/10 border border-brand-100 hidden lg:block">
<p className="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1">Operated By</p>
<p className="text-lg font-semibold text-slate-900">Navin Soni</p>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 order-1 lg:order-2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">A Passion for <span className="text-brand-600">Plumbing</span></h2>
<div className="prose prose-slate text-slate-600">
<p className="mb-4">
                            A&amp;K Plumbing &amp; Gas is run by Navin Soni - an experienced domestic wet and gas plumber and heating engineer.
                        </p>
<p className="mb-4">
                            Based in Beeston, I serve all surrounding areas of Nottingham including Attenborough, Chilwell, Toton, Bramcote, and Stapleford.
                        </p>
<p className="mb-6">
                            I pride myself on being advice-oriented and providing free quotes. Whether it's replacing old copper cylinders, fitting radiators, or a complete heating repair, I get the job done right.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="22"></iconify-icon>
<span>Gas Safe Registered</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="22"></iconify-icon>
<span>No VAT Charged</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="22"></iconify-icon>
<span>Competitive Pricing</span>
</li>
</ul>
<a className="text-brand-600 font-semibold hover:text-brand-800 inline-flex items-center gap-2 group" href="tel:07976763687">
                            Call me today 
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="py-24 bg-slate-900 relative overflow-hidden" id="testimonials">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Happy Customers</h2>
<div className="flex justify-center gap-1 text-yellow-400 mb-2">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
</div>
<div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur rounded-2xl p-8 lg:p-12 border border-slate-700 shadow-2xl relative">

<div className="absolute -top-6 -left-4 bg-brand-600 text-white p-4 rounded-xl shadow-lg transform -rotate-6">
<iconify-icon icon="solar:quote-up-square-bold" width="32"></iconify-icon>
</div>
<p className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-light italic mb-8 pt-4">
                    "I've used A&amp;K Plumbing a few times. I've had a new bathroom suite fitted, and various other smaller jobs. Navin always does lovely work and finish. I would recommend A&amp;K Plumbing &amp; Gas."
                </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-brand-400 to-purple-500">
<img alt="Customer" className="w-full h-full rounded-full object-cover border-2 border-slate-800" src="https://static.wixstatic.com/media/caabb3_0f9c1acef7614ab8a8ccc9c4c5a643f2~mv2_d_1508_1704_s_2.jpg/v1/crop/x_0,y_92,w_1508,h_1238/fill/w_460,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/caabb3_0f9c1acef7614ab8a8ccc9c4c5a643f2~mv2_d_1508_1704_s_2.jpg"/>
</div>
<div>
<p className="font-semibold text-white">Genuine Customer</p>
<p className="text-sm text-brand-300">Review via Facebook</p>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-brand-200 hover:text-white transition-colors" href="https://www.facebook.com/AandKPlumbingandGas" target="_blank">
<iconify-icon icon="logos:facebook" width="20"></iconify-icon>
                    See all reviews on Facebook
                </a>
</div>
</div>
</div>

<div className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-xl mx-auto text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Contact Me Today</h2>
<p className="text-slate-600">Get in touch for a <span className="text-brand-600 font-medium">free quotation</span> or emergency call out.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

<div className="space-y-8">
<div className="flex gap-4 items-start">
<div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 text-brand-600">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Address</h3>
<p className="text-slate-600">68 Beech Avenue<br/>Nottingham, NG9 1QD</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 text-brand-600">
<iconify-icon icon="solar:letter-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Email</h3>
<a className="text-slate-600 hover:text-brand-600 transition-colors" href="mailto:navin.soni@hotmail.co.uk">navin.soni@hotmail.co.uk</a>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 text-brand-600">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
<a className="text-slate-600 hover:text-brand-600 transition-colors" href="tel:07976763687">07976 763 687</a>
</div>
</div>
<div className="pt-8">
<a className="inline-flex items-center gap-2 px-5 py-3 bg-yellow-400 text-slate-900 rounded-lg font-bold text-sm hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-400/20" href="https://www.gassaferegister.co.uk/find-an-engineer/check-a-business/?id=Zd%2bEFO2bLy4xk0jfd3l8Vg%3d%3d" target="_blank">
<iconify-icon icon="solar:shield-check-bold" width="20"></iconify-icon>
                            Verify Gas Safe Register: 569141
                        </a>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-brand-900/5">
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="name">Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all outline-none bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400" id="name" placeholder="Your name" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all outline-none bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400" id="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="phone">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all outline-none bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400" id="phone" placeholder="07..." type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 transition-all outline-none bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400" id="message" placeholder="How can I help you?" rows="4"></textarea>
</div>
<button className="w-full px-6 py-3 text-base font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 shadow-lg shadow-brand-600/30" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</div>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded bg-brand-600 text-white flex items-center justify-center font-bold text-xs">A&amp;K</span>
<span className="text-sm font-bold text-slate-900">A&amp;K PLUMBING SERVICES</span>
</div>
<div className="text-sm text-slate-500">
                    © 2023 A&amp;K Plumbing Services. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="https://www.facebook.com/AandKPlumbingandGas/" target="_blank">
<iconify-icon icon="logos:facebook" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

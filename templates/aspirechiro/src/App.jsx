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
50: '#f0fdf4',
100: '#dcfce7',
500: '#4ade80', // Vibrant light green
600: '#16a34a', // Accessible green for text/buttons
900: '#14532d',
950: '#052e16',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
<span className="font-semibold text-lg tracking-tighter">A</span>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-semibold tracking-tight leading-none text-base">ASPIRE</span>
<span className="text-xs text-slate-500 tracking-wide uppercase">Chiropractic</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#care">Chiropractic Care</a>
<a className="hover:text-slate-900 transition-colors" href="#prices">Prices</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-2" href="tel:01423396948">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                    01423 396948
                </a>
<a className="bg-slate-900 text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center gap-2" href="#book">
                    Book Appointment
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern hero-pattern opacity-50 pointer-events-none -z-10"></div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-50/50 to-transparent pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        Accepting New Patients in Harrogate
                    </div>
<h1 className="text-5xl lg:text-6xl text-slate-900 font-medium tracking-tight leading-[1.1]">
                        A happier, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">healthier version</span>
                        of yourself.
                    </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                        We provide safe, gentle, and effective Chiropractic care for the whole family. From newborns to seniors, our aim is to improve your quality of life.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="h-12 px-8 rounded-full bg-brand-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-brand-500 transition-all shadow-xl shadow-brand-500/20" href="#book">
                            Book Consultation
                            <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</a>
<a className="h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-700 font-medium flex items-center justify-center gap-2 hover:border-slate-300 hover:bg-slate-50 transition-all" href="#learn-more">
                            How it works
                        </a>
</div>

<div className="flex items-center gap-6 pt-6 border-t border-slate-100">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-500">JD</div>
<div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-500">SM</div>
<div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-500">KL</div>
</div>
<div className="space-y-0.5">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-slate-500 font-medium">Trusted by Harrogate Families</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative">
<div className="relative w-full aspect-square max-w-lg mx-auto">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-100 to-teal-50 rounded-full blur-3xl -z-10"></div>

<div className="grid grid-cols-2 gap-4 h-full">
<div className="space-y-4 pt-12">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-48 flex flex-col justify-between">
<div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">100%</div>
<div className="text-sm text-slate-500">Safe Care</div>
</div>
</div>
<div className="bg-slate-900 p-6 rounded-2xl shadow-xl h-40 flex flex-col justify-center text-white relative overflow-hidden">
<iconify-icon className="absolute -right-4 -bottom-4 opacity-10" icon="solar:bone-linear" width="100"></iconify-icon>
<div className="text-lg font-medium leading-tight">Spinal Health Experts</div>
<div className="text-slate-400 text-sm mt-2">Certified Team</div>
</div>
</div>
<div className="space-y-4">
<div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 h-64 overflow-hidden relative group">

<div className="absolute inset-0 bg-slate-100"></div>
<img alt="Chiropractor adjusting patient" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-auto">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-slate-900">Recovery</span>
<span className="text-xs text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">+24%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-brand-600 h-1.5 rounded-full w-3/4"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="care">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Chiropractic for everyone</h2>
<p className="text-slate-500">Whether you are suffering from back pain, seeking preventative care, or looking to improve your athletic performance.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Family Care</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Gentle adjustments suitable for all ages. We believe healthy families are happy families.
                    </p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:face-scan-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Babies &amp; Pregnancy</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Specialized techniques to support mothers during pregnancy and gentle care for newborns.
                    </p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:running-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Active Lifestyle</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Enhance performance, recover from injury faster, and maintain optimal joint function.
                    </p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 relative">
<div className="absolute -top-4 -left-4 w-full h-full border-2 border-slate-100 rounded-3xl"></div>
<img alt="Consultation" className="relative rounded-3xl shadow-lg w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
<p className="text-slate-900 font-medium mb-1">"Life-changing results"</p>
<div className="flex text-yellow-400 text-xs mb-2">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-slate-500">Based on local reviews</p>
</div>
</div>
<div className="w-full lg:w-1/2 space-y-6">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">About Aspire Chiropractic</h2>
<p className="text-slate-500 leading-relaxed">
                        We as a team at Aspire Chiropractic are passionate about health. Our aim is to help our patients become a healthier and happier version of themselves by providing safe and gentle Chiropractic care to whole families within Harrogate and the surrounding areas.
                    </p>
<div className="space-y-4 pt-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-600 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-slate-900 font-medium">Highly Trained Team</h4>
<p className="text-sm text-slate-500 mt-1">Dedicated enthusiastic professionals who love what they do.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-600 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-slate-900 font-medium">Modern Facilities</h4>
<p className="text-sm text-slate-500 mt-1">State-of-the-art clinic designed for your comfort.</p>
</div>
</div>
</div>
<div className="pt-6">
<a className="inline-flex items-center text-slate-900 font-medium border-b border-slate-900 pb-0.5 hover:text-brand-600 hover:border-brand-600 transition-colors" href="#team">
                            Meet the Team <iconify-icon className="ml-2" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="prices">
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-[128px] opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[128px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-12">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Simple, Transparent Pricing</h2>
<p className="text-slate-400">No hidden fees. We believe in being upfront about the cost of your care.</p>
</div>
<a className="text-sm font-medium text-white bg-slate-800 border border-slate-700 px-6 py-3 rounded-full hover:bg-slate-700 transition-all" href="#full-price-list">
                    View Full Price List
                </a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
<div className="text-slate-400 text-sm font-medium mb-4">Initial Consultation</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight text-white">£60</span>
<span className="text-slate-500">/ session</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-3"><iconify-icon className="text-brand-400" icon="solar:check-read-linear"></iconify-icon> Full history review</li>
<li className="flex items-center gap-3"><iconify-icon className="text-brand-400" icon="solar:check-read-linear"></iconify-icon> Orthopedic testing</li>
<li className="flex items-center gap-3"><iconify-icon className="text-brand-400" icon="solar:check-read-linear"></iconify-icon> Report of findings</li>
</ul>
<a className="block w-full text-center bg-white text-slate-900 font-medium py-3 rounded-lg hover:bg-slate-100 transition-colors" href="#book">Book Now</a>
</div>

<div className="bg-gradient-to-b from-brand-900/50 to-slate-800/50 backdrop-blur border border-brand-500/30 rounded-2xl p-8 relative">
<div className="absolute top-4 right-4 bg-brand-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Popular</div>
<div className="text-brand-200 text-sm font-medium mb-4">Adjustment</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight text-white">£40</span>
<span className="text-slate-500">/ visit</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-3"><iconify-icon className="text-brand-400" icon="solar:check-read-linear"></iconify-icon> Gentle spine adjustment</li>
<li className="flex items-center gap-3"><iconify-icon className="text-brand-400" icon="solar:check-read-linear"></iconify-icon> Muscle release</li>
<li className="flex items-center gap-3"><iconify-icon className="text-brand-400" icon="solar:check-read-linear"></iconify-icon> Progress tracking</li>
</ul>
<a className="block w-full text-center bg-brand-600 text-white font-medium py-3 rounded-lg hover:bg-brand-500 transition-colors shadow-lg shadow-brand-900/50" href="#book">Book Now</a>
</div>

<div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
<div className="text-slate-400 text-sm font-medium mb-4">Re-examination</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight text-white">£50</span>
<span className="text-slate-500">/ session</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-3"><iconify-icon className="text-brand-400" icon="solar:check-read-linear"></iconify-icon> Detailed review</li>
<li className="flex items-center gap-3"><iconify-icon className="text-brand-400" icon="solar:check-read-linear"></iconify-icon> New care plan</li>
<li className="flex items-center gap-3"><iconify-icon className="text-brand-400" icon="solar:check-read-linear"></iconify-icon> Adjustment included</li>
</ul>
<a className="block w-full text-center bg-slate-700 text-white font-medium py-3 rounded-lg hover:bg-slate-600 transition-colors" href="#book">Book Now</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-slate-900">What happens during the first visit?</span>
<iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                        We start with a comprehensive consultation to understand your health history, followed by orthopedic and neurological testing to determine the root cause of your issues.
                    </div>
</details>

<details className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-slate-900">Is chiropractic care safe for children?</span>
<iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                        Absolutely. We use very gentle, specific techniques tailored for children and babies. Many parents bring their children for help with sleep, posture, and development.
                    </div>
</details>

<details className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-slate-900">Do I need a referral from a GP?</span>
<iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                        No, chiropractors are primary healthcare practitioners. You can book an appointment directly with us without seeing your GP first.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-8">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Visit Our Clinic</h2>
<p className="text-slate-500">We are conveniently located in Harrogate. Parking is available.</p>
</div>
<div className="grid sm:grid-cols-2 gap-8">
<div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Address</h4>
<p className="text-slate-600 text-sm leading-relaxed">
                                1 Arthington Avenue<br/>
                                Harrogate, HG1 5NB<br/>
                                United Kingdom
                            </p>
<a className="text-brand-600 text-sm font-medium mt-2 inline-block hover:underline" href="https://maps.google.com" target="_blank">Get Directions</a>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Contact</h4>
<p className="text-slate-600 text-sm leading-relaxed">
<a className="hover:text-brand-600 transition-colors" href="tel:01423396948">01423 396948</a><br/>
<a className="hover:text-brand-600 transition-colors" href="mailto:info@harrogatechiropractor.co.uk">info@harrogatechiropractor.co.uk</a>
</p>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Opening Hours</h4>
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden text-sm">
<div className="flex justify-between px-4 py-3 border-b border-slate-100">
<span className="text-slate-500">Mon - Wed</span>
<span className="font-medium text-slate-900">8:30am - 6:30pm</span>
</div>
<div className="flex justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
<span className="text-slate-500">Thursday</span>
<span className="font-medium text-slate-900">8:30am - 8:00pm</span>
</div>
<div className="flex justify-between px-4 py-3 border-b border-slate-100">
<span className="text-slate-500">Friday</span>
<span className="font-medium text-slate-900">8:00am - 1:30pm</span>
</div>
<div className="flex justify-between px-4 py-3">
<span className="text-slate-500">Saturday</span>
<span className="font-medium text-slate-900">9:00am - 2:00pm</span>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<h3 className="text-xl font-medium text-slate-900 mb-6">Send us a message</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none" rows="4"></textarea>
</div>
<div className="pt-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-brand-500">
<input className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" type="checkbox"/>
<iconify-icon className="text-brand-600 opacity-0 peer-checked:opacity-100 transition-opacity text-xs" icon="solar:check-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500 select-none">I agree to the privacy policy</span>
</label>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 mt-2" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<span className="font-semibold text-lg tracking-tighter">A</span>
</div>
<span className="text-slate-900 font-semibold tracking-tight">ASPIRE</span>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center hover:bg-slate-100 hover:text-brand-600 transition-all" href="#">
<iconify-icon icon="brandico:facebook" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center hover:bg-slate-100 hover:text-brand-600 transition-all" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2025 Aspire Chiropractic Harrogate. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Patient Resources</a>
<a className="hover:text-slate-900" href="#">Login</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

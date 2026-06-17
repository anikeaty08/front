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
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#F9F9F7',  /* Custom warm paper background */
100: '#F0EFEA',
200: '#E6E4DD',
800: '#2C2B29',
900: '#1A1918',
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
      

<div className="bg-stone-900 text-white py-3 px-4 text-center">
<p className="text-xs font-medium tracking-wide uppercase opacity-90">
            Available 24/7 for Free Case Evaluations
        </p>
</div>

<nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="group flex flex-col leading-none" href="#">
<span className="font-serif text-2xl tracking-tighter text-stone-900 group-hover:opacity-80 transition-opacity">ODEGARD LAW</span>
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-stone-500 font-medium ml-0.5">Injury Lawyers</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Practice Areas</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Attorneys</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Results</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Reviews</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-stone-900" href="tel:+1800000000">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    (801) 555-0123
                </a>
<button className="bg-stone-900 text-white text-xs font-medium uppercase tracking-wide px-5 py-3 hover:bg-stone-800 transition-all rounded-sm">
                    Free Consultation
                </button>
</div>
</div>
</nav>

<header className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wider">No Fees Unless We Win</span>
</div>
<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-stone-900 mb-6">
<span className="block">Relentless</span>
<span className="block text-stone-400 italic font-normal">Representation.</span>
</h1>
<p className="text-lg text-stone-600 font-light leading-relaxed max-w-md mb-10">
                    We specialize in catastrophic injury and wrongful death cases. When your future is on the line, we provide the unwavering advocacy you deserve.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 text-sm font-medium hover:bg-stone-800 transition-all rounded-sm w-full sm:w-auto">
<span>Review Your Case</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 border border-stone-300 bg-transparent text-stone-900 px-8 py-4 text-sm font-medium hover:bg-stone-100 transition-all rounded-sm w-full sm:w-auto">
                        View Practice Areas
                    </button>
</div>
<div className="mt-12 flex items-center gap-8 text-stone-500">
<div className="pr-8 border-r border-stone-200">
<p className="text-2xl font-serif text-stone-900">$100M+</p>
<p className="text-xs uppercase tracking-wide">Recovered</p>
</div>
<div>
<div className="flex -space-x-2 mb-1">
<div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-stone-50"></div>
<div className="w-8 h-8 rounded-full bg-stone-300 border-2 border-stone-50"></div>
<div className="w-8 h-8 rounded-full bg-stone-400 border-2 border-stone-50"></div>
<div className="w-8 h-8 rounded-full bg-stone-900 border-2 border-stone-50 flex items-center justify-center text-[10px] text-white font-medium">5k+</div>
</div>
<p className="text-xs uppercase tracking-wide">Clients Helped</p>
</div>
</div>
</div>

<div className="relative h-[500px] lg:h-[600px] w-full rounded-sm overflow-hidden bg-stone-200 group">

<img alt="Legal Building" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 grayscale contrast-[0.9]" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<blockquote className="font-serif text-2xl italic leading-tight mb-4">
                        "They fought for me when no one else would. The outcome changed my life completely."
                    </blockquote>
<cite className="not-italic text-sm font-medium tracking-wide opacity-90 block">— Sarah J., Car Accident Victim</cite>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-stone-200">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 mb-3">Practice Areas</h2>
<p className="text-stone-500 max-w-md font-light">Dedicated focus on personal injury law allows us to provide superior representation.</p>
</div>
<a className="text-sm font-medium text-stone-900 flex items-center gap-1 hover:opacity-70 transition-opacity" href="#">
                    View all areas 
                    <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">

<div className="bg-stone-50 p-10 group hover:bg-white transition-colors relative">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Car Accidents</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">Comprehensive legal support for victims of negligent drivers and automotive defects.</p>
<a className="absolute inset-0" href="#"></a>
</div>

<div className="bg-stone-50 p-10 group hover:bg-white transition-colors relative">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Truck Accidents</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">Fighting trucking companies and insurers to secure fair compensation for severe injuries.</p>
<a className="absolute inset-0" href="#"></a>
</div>

<div className="bg-stone-50 p-10 group hover:bg-white transition-colors relative">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Wrongful Death</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">Compassionate advocacy for families who have lost loved ones due to negligence.</p>
<a className="absolute inset-0" href="#"></a>
</div>

<div className="bg-stone-50 p-10 group hover:bg-white transition-colors relative">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:scooter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Motorcycle Injuries</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">Protecting the rights of riders against biased insurance tactics.</p>
<a className="absolute inset-0" href="#"></a>
</div>

<div className="bg-stone-50 p-10 group hover:bg-white transition-colors relative">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:dog-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Dog Bites</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">Holding pet owners accountable for attacks resulting in scarring and trauma.</p>
<a className="absolute inset-0" href="#"></a>
</div>

<div className="bg-stone-50 p-10 group hover:bg-white transition-colors relative">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Slip &amp; Fall</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 font-light">Premises liability cases involving hazardous conditions on private or public property.</p>
<a className="absolute inset-0" href="#"></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
<div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6">Why Choose Odegard Law?</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 text-stone-400">
<iconify-icon icon="solar:star-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg mb-2">Proven Track Record</h4>
<p className="text-stone-400 text-sm font-light leading-relaxed max-w-sm">
                                We have recovered millions of dollars in verdicts and settlements for our clients. Our reputation in the courtroom forces insurance companies to pay fair value.
                            </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-stone-400">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg mb-2">Personalized Attention</h4>
<p className="text-stone-400 text-sm font-light leading-relaxed max-w-sm">
                                You are not just a case number. You work directly with your attorney, not just paralegals, ensuring you are informed every step of the way.
                            </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-stone-400">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg mb-2">Contingency Fee Basis</h4>
<p className="text-stone-400 text-sm font-light leading-relaxed max-w-sm">
                                We front all costs of litigation. You pay absolutely nothing unless we win your case. There is zero financial risk to you.
                            </p>
</div>
</div>
</div>
</div>

<div className="bg-stone-50 text-stone-900 p-8 md:p-12 rounded-sm shadow-xl shadow-stone-950/20">
<h3 className="font-serif text-2xl tracking-tight mb-2">Free Case Evaluation</h3>
<p className="text-sm text-stone-500 mb-8 font-light">Tell us about your case. We'll get back to you within 24 hours.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="relative">
<input className="custom-input w-full text-sm py-3 text-stone-900 placeholder:text-stone-400" placeholder="First Name" type="text"/>
</div>
<div className="relative">
<input className="custom-input w-full text-sm py-3 text-stone-900 placeholder:text-stone-400" placeholder="Last Name" type="text"/>
</div>
</div>
<div className="relative">
<input className="custom-input w-full text-sm py-3 text-stone-900 placeholder:text-stone-400" placeholder="Email Address" type="email"/>
</div>
<div className="relative">
<input className="custom-input w-full text-sm py-3 text-stone-900 placeholder:text-stone-400" placeholder="Phone Number" type="tel"/>
</div>
<div className="relative pt-2">
<label className="text-xs text-stone-500 uppercase tracking-wide mb-3 block">Case Type</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="casetype" type="radio"/>
<span className="px-3 py-1.5 border border-stone-200 rounded-sm text-xs text-stone-600 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-colors">Auto Accident</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="casetype" type="radio"/>
<span className="px-3 py-1.5 border border-stone-200 rounded-sm text-xs text-stone-600 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-colors">Slip &amp; Fall</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="casetype" type="radio"/>
<span className="px-3 py-1.5 border border-stone-200 rounded-sm text-xs text-stone-600 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-colors">Other</span>
</label>
</div>
</div>
<div className="relative">
<textarea className="custom-input w-full text-sm py-3 text-stone-900 placeholder:text-stone-400 resize-none" placeholder="Briefly describe what happened..." rows="3"></textarea>
</div>
<button className="w-full bg-stone-900 text-white py-4 text-xs font-medium uppercase tracking-widest hover:bg-stone-800 transition-colors rounded-sm mt-4" type="button">
                        Submit Request
                    </button>
<p className="text-[10px] text-stone-400 text-center leading-tight">
                        By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
</form>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900">Client Voices</h2>
<div className="flex gap-2">
<button className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center hover:border-stone-900 transition-colors text-stone-900">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center hover:border-stone-900 transition-colors text-stone-900">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 bg-white border border-stone-100 shadow-sm rounded-sm">
<div className="flex text-yellow-500 mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6 text-sm leading-relaxed">
                        "I was skeptical about lawyers until I met the team at Odegard. They handled everything professionally and got me a settlement far beyond what I expected."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-serif font-bold text-stone-500">M</div>
<div className="text-xs">
<span className="block font-medium text-stone-900">Michael T.</span>
<span className="text-stone-400">Salt Lake City, UT</span>
</div>
</div>
</div>

<div className="p-8 bg-white border border-stone-100 shadow-sm rounded-sm">
<div className="flex text-yellow-500 mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6 text-sm leading-relaxed">
                        "After my accident, I felt helpless. This firm gave me hope and fought for every penny. Communication was excellent throughout the entire process."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-serif font-bold text-stone-500">J</div>
<div className="text-xs">
<span className="block font-medium text-stone-900">Jennifer R.</span>
<span className="text-stone-400">Provo, UT</span>
</div>
</div>
</div>

<div className="p-8 bg-white border border-stone-100 shadow-sm rounded-sm hidden lg:block">
<div className="flex text-yellow-500 mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-stone-600 font-light italic mb-6 text-sm leading-relaxed">
                        "Highly recommended. They know the law inside and out. I felt like I was in safe hands from the very first consultation."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-serif font-bold text-stone-500">D</div>
<div className="text-xs">
<span className="block font-medium text-stone-900">David K.</span>
<span className="text-stone-400">Ogden, UT</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="block font-serif text-xl tracking-tighter text-stone-900 mb-6" href="#">ODEGARD LAW</a>
<p className="text-xs text-stone-500 font-light leading-relaxed mb-6">
                        Dedicated to protecting the rights of the injured across Utah. We fight for justice, one client at a time.
                    </p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="16"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="16"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="brandico:linkedin" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-stone-900 mb-6">Practice Areas</h4>
<ul className="space-y-3 text-xs text-stone-500 font-light">
<li><a className="hover:text-stone-900 transition-colors" href="#">Car Accidents</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Truck Accidents</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Motorcycle Accidents</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Wrongful Death</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Dog Bites</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Slip &amp; Fall</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-stone-900 mb-6">Firm</h4>
<ul className="space-y-3 text-xs text-stone-500 font-light">
<li><a className="hover:text-stone-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Our Team</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Case Results</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Testimonials</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-stone-900 mb-6">Contact</h4>
<ul className="space-y-4 text-xs text-stone-500 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-stone-400" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>123 Legal Avenue, Suite 400<br/>Salt Lake City, UT 84101</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:phone-linear" width="16"></iconify-icon>
<span>(801) 555-0123</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="solar:letter-linear" width="16"></iconify-icon>
<span>info@odegardlawfirm.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-stone-400">© 2024 Odegard Law Firm. All rights reserved.</p>
<div className="flex gap-6 text-[10px] text-stone-400">
<a className="hover:text-stone-900" href="#">Privacy Policy</a>
<a className="hover:text-stone-900" href="#">Terms of Service</a>
<a className="hover:text-stone-900" href="#">Disclaimer</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

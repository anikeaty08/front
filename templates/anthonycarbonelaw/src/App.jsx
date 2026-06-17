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
primary: {
DEFAULT: '#21649c', // Navy from source
dark: '#153c5e',
light: '#3b82f6',
},
accent: {
DEFAULT: '#c05600', // Orange from source
hover: '#e06500',
},
neutral: {
50: '#f9fafb',
100: '#f3f4f6',
900: '#111827',
}
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu-overlay');
            const links = document.querySelectorAll('.mobile-link');

            // Toggle function
            const toggleMenu = () => {
                const isOpen = menu.classList.contains('open');
                if (isOpen) {
                    menu.classList.remove('open');
                    document.body.style.overflow = ''; // Restore scrolling
                    btn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28"></iconify-icon>';
                } else {
                    menu.classList.add('open');
                    document.body.style.overflow = 'hidden'; // Lock scrolling
                    btn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28" height="28"></iconify-icon>';
                }
            };

            // Event Listeners
            btn.addEventListener('click', toggleMenu);

            // Close on link click
            links.forEach(link => {
                link.addEventListener('click', () => {
                    if (menu.classList.contains('open')) toggleMenu();
                });
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
      

<div className="bg-slate-900 text-white text-xs py-2 px-4 hidden md:block">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 opacity-90">
<iconify-icon className="text-accent" icon="solar:star-circle-linear"></iconify-icon>
                    35+ Years Experience
                </span>
<span className="flex items-center gap-1.5 opacity-90">
<iconify-icon className="text-accent" icon="solar:map-point-linear"></iconify-icon>
                    Jersey City, NJ
                </span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-accent transition-colors" href="#reviews">See Reviews</a>
<span className="opacity-50">|</span>
<a className="font-semibold hover:text-accent transition-colors" href="tel:201-963-6000">24/7 Support</a>
</div>
</div>
</div>

<header className="sticky transition-all duration-300 bg-slate-400/95 z-50 border-slate-100 border-b top-0 shadow-sm backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex-shrink-0 relative z-50" href="#">
<img alt="Law Offices of Anthony Carbone" className="h-12 w-auto object-contain" src="https://anthonycarbonepersonalinjurylawyer.com/wp-content/uploads/2023/10/Carbone-logo-2023.webp"/>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#services">Practice Areas</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#attorney">Attorney Carbone</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#results">Verdicts</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#locations">Locations</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<div className="flex flex-col items-end mr-2">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Free Consultation</span>
<a className="text-lg font-bold text-slate-900 leading-none hover:text-accent transition-colors" href="tel:2019636000">201-963-6000</a>
</div>
<a className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" href="#contact">
                        Free Case Review
                    </a>
</div>

<button aria-label="Toggle menu" className="lg:hidden relative z-50 p-2 text-slate-800 focus:outline-none" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 pb-6 overflow-y-auto" id="mobile-menu-overlay">
<nav className="flex flex-col gap-6 text-lg font-medium text-slate-800 border-b border-slate-100 pb-6 mb-6">
<a className="mobile-link flex items-center justify-between" href="#home">Home <iconify-icon className="opacity-30" icon="solar:arrow-right-linear"></iconify-icon></a>
<a className="mobile-link flex items-center justify-between" href="#services">Practice Areas <iconify-icon className="opacity-30" icon="solar:arrow-right-linear"></iconify-icon></a>
<a className="mobile-link flex items-center justify-between" href="#attorney">Attorney Carbone <iconify-icon className="opacity-30" icon="solar:arrow-right-linear"></iconify-icon></a>
<a className="mobile-link flex items-center justify-between" href="#results">Verdicts &amp; Settlements <iconify-icon className="opacity-30" icon="solar:arrow-right-linear"></iconify-icon></a>
<a className="mobile-link flex items-center justify-between" href="#locations">Locations <iconify-icon className="opacity-30" icon="solar:arrow-right-linear"></iconify-icon></a>
</nav>
<div className="mt-auto space-y-4">
<a className="flex items-center justify-center gap-3 w-full border-2 border-slate-200 py-4 rounded-xl font-bold text-slate-800" href="tel:2019636000">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                Call 201-963-6000
            </a>
<a className="mobile-link flex items-center justify-center gap-3 w-full bg-accent text-white py-4 rounded-xl font-bold shadow-lg" href="#contact">
                Get Free Consultation
            </a>
</div>
</div>

<section className="relative bg-slate-900 pt-10 pb-20 lg:pt-20 lg:pb-28 overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Anthony Carbone Office Background" className="w-full h-full object-cover opacity-30" src="https://anthonycarbonepersonalinjurylawyer.com/wp-content/uploads/2023/06/promo-bg-anthony-carbone-35-years.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
<span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Serving New Jersey for 35 Years
                    </div>
<h1 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
                        Aggressive. <br/>
                        Relentless. <br/>
<span className="text-accent">Successful.</span>
</h1>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        New Jersey criminal defense &amp; injury attorney Anthony Carbone is a tireless fighter who will not rest until you get what you deserve. Don't face the legal system alone.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-lg text-white bg-accent hover:bg-accent-hover transition-all shadow-lg hover:shadow-orange-500/25" href="#contact">
                            Start Free Case Review
                        </a>
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-lg text-white bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all" href="tel:2019636000">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                            201-963-6000
                        </a>
</div>

<div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Super Lawyers" className="h-10 w-auto" src="https://anthonycarbonepersonalinjurylawyer.com/wp-content/themes/ENX2/images/badge-super-lawyers.png"/>
<img alt="Million Dollar Advocates" className="h-10 w-auto" src="https://anthonycarbonepersonalinjurylawyer.com/wp-content/themes/ENX2/images/badge-million-dollar.png"/>
<img alt="Martindale Hubbell" className="h-10 w-auto" src="https://anthonycarbonepersonalinjurylawyer.com/wp-content/themes/ENX2/images/badge-martindale-champion.png"/>
</div>
</div>

<div className="hidden lg:block bg-white rounded-2xl p-8 shadow-2xl border border-slate-100">
<h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Request A Consultation</h3>
<p className="text-sm text-slate-500 mb-6">Tell us about your case. We will contact you immediately.</p>
<form className="space-y-4" onsubmit="alert('Thank you. A member of our team has been notified and will contact you shortly.'); return false;">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">First Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Case Type</label>
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm text-slate-700">
<option>Personal Injury</option>
<option>Car Accident</option>
<option>Criminal Defense</option>
<option>Domestic Violence</option>
<option>Workers Compensation</option>
<option>Other</option>
</select>
</div>
<button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-lg transition-all" type="submit">
                            Get Free Case Evaluation
                        </button>
<p className="text-[10px] text-slate-400 text-center leading-tight">
                            By clicking submit, you agree to our privacy policy. Your information is confidential.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-accent font-bold tracking-widest text-xs uppercase mb-3">Legal Services</h2>
<h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">How We Can Help You</h3>
<p className="text-slate-600 leading-relaxed">
                    Every case is unique. Whether you are injured or facing charges, we provide the aggressive representation needed to secure the best possible outcome.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon icon="solar:wheel-angle-bold-duotone" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">Personal Injury</h4>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">
                        Auto accidents, slip and falls, and premises liability. We fight insurance companies to get you maximum compensation.
                    </p>
<span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon icon="solar:gavel-bold-duotone" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">Criminal Defense</h4>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">
                        Facing charges? We handle assault, theft, felonies, and more. Protect your rights and your future.
                    </p>
<span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-warning-bold-duotone" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">Domestic Violence</h4>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">
                        Representation for victims seeking restraining orders (FRO) and defense for those wrongly accused.
                    </p>
<span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon icon="solar:hard-hat-bold-duotone" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">Workers' Comp</h4>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">
                        Injured on the job? Construction accidents and denied claims. We ensure your medical bills are covered.
                    </p>
<span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="attorney">

<div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/50 skew-x-12 transform translate-x-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2">
<img alt="Attorney Anthony Carbone" className="rounded-2xl shadow-2xl border-4 border-white/10 w-full object-cover" src="https://anthonycarbonepersonalinjurylawyer.com/wp-content/uploads/2023/06/Screenshot-2023-06-27-at-3.23.41-PM.png"/>
</div>
<div className="lg:w-1/2">
<h2 className="text-accent font-bold tracking-widest text-xs uppercase mb-3">About The Firm</h2>
<h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">35 Years of Fighting For Jersey City</h3>
<div className="space-y-4 text-slate-300 leading-relaxed mb-8">
<p>
                            It's difficult to navigate the legal landscape without a good lawyer. You need someone who is aggressive, relentless, and has the experience to ensure your claim is successful.
                        </p>
<p>
                            Anthony Carbone has been fighting for the rights of people in Jersey City, Newark, and throughout New Jersey for over three decades. Whether you are suffering an injury or facing criminal charges, we will not rest until you receive justice.
                        </p>
<p className="font-semibold text-white">
                            We work on a contingency basis for injury cases — we don't get paid unless you win.
                        </p>
</div>
<div className="grid grid-cols-2 gap-8 mb-8">
<div>
<span className="block text-4xl font-bold text-white mb-1">$2.4M</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Bar Fight Verdict</span>
</div>
<div>
<span className="block text-4xl font-bold text-white mb-1">$1.3M</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Slip &amp; Fall</span>
</div>
</div>
<a className="inline-flex items-center text-accent font-bold hover:text-white transition-colors" href="#attorney">
                        Meet Anthony Carbone <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-accent font-bold tracking-widest text-xs uppercase mb-3">Client Success</h2>
<h3 className="text-3xl font-serif font-bold text-slate-900">What Our Clients Say</h3>
</div>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark shadow-md transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"Anthony is such an amazing attorney, he is very good at helping those in need with their cases. He fought for me when no one else would."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">AG</div>
<div>
<h5 className="font-bold text-slate-900 text-sm">Alberta Gonzalez</h5>
<span className="text-xs text-slate-400">Personal Injury Client</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"Professional, aggressive, and effective. The staff was always responsive to my calls. I highly recommend this firm."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">JS</div>
<div>
<h5 className="font-bold text-slate-900 text-sm">John Smith</h5>
<span className="text-xs text-slate-400">Defense Client</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"I was lost after my accident. Mr. Carbone took care of everything so I could focus on healing. The settlement was beyond expectations."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">MR</div>
<div>
<h5 className="font-bold text-slate-900 text-sm">Maria Rodriguez</h5>
<span className="text-xs text-slate-400">Auto Accident Client</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12">
<div>
<h2 className="text-accent font-bold tracking-widest text-xs uppercase mb-3">Our Office</h2>
<h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Serving Hudson County &amp; Beyond</h3>
<p className="text-slate-600 mb-8">
                        Based in Jersey City, we represent clients in Union City, North Bergen, Newark, Bayonne, Hoboken, and throughout New Jersey.
                    </p>
<div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-6">
<h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-primary" icon="solar:map-point-bold"></iconify-icon>
                            Jersey City (Main Office)
                        </h4>
<div className="space-y-3 text-sm text-slate-600">
<p className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0" icon="solar:map-arrow-right-linear"></iconify-icon>
                                12 Oakland Ave, Jersey City, NJ 07306
                            </p>
<p className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-primary font-medium" href="tel:2019636000">201-963-6000</a>
</p>
<p className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
                                Mon-Fri: 9:00 AM - 6:00 PM <br/>
                                Sat-Sun: By Appointment
                            </p>
</div>
<div className="mt-6 flex gap-3">
<a className="flex-1 bg-white border border-slate-200 text-slate-700 py-2.5 rounded-lg text-sm font-bold text-center hover:bg-slate-50 hover:border-slate-300 transition-colors" href="https://maps.google.com/?q=12+Oakland+Ave,+Jersey+City,+NJ+07306" target="_blank">
                                Get Directions
                            </a>
<a className="flex-1 bg-primary text-white py-2.5 rounded-lg text-sm font-bold text-center hover:bg-primary-dark transition-colors" href="tel:2019636000">
                                Call Now
                            </a>
</div>
</div>
</div>

<div className="bg-slate-100 rounded-2xl overflow-hidden h-96 lg:h-auto relative border border-slate-200">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.235123456!2d-74.05!3d40.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzM3LjIiTiA3NMKwMDMnMzYuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-20 bg-primary text-white relative" id="contact">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Get Your Free Consultation</h2>
<p className="text-primary-light text-lg">
                    Fill out the form below. We will contact you immediately to discuss your case.
                </p>
</div>
<form className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 text-slate-800" onsubmit="alert('Thank you. A member of our team has been notified and will contact you shortly.'); return false;">
<div className="grid md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="(201) 555-0123" required="" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-600">
<option>I need a Personal Injury Lawyer</option>
<option>I need a Criminal Defense Lawyer</option>
<option>I need a Domestic Violence Lawyer</option>
<option>I was injured at work</option>
<option>Other / General Inquiry</option>
</select>
</div>
</div>
<div className="mb-8">
<label className="block text-sm font-bold text-slate-700 mb-2">Brief Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Please describe your situation..." rows="4"></textarea>
</div>

<button className="w-full bg-accent hover:bg-accent-hover text-white font-bold text-lg py-4 rounded-xl shadow-lg transform active:scale-95 transition-all" type="submit">
                    Submit Request
                </button>
</form>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<img alt="Anthony Carbone Logo" className="h-12 w-auto mb-6 brightness-0 invert opacity-80" src="https://anthonycarbonepersonalinjurylawyer.com/wp-content/uploads/2023/10/Carbone-logo-2023.webp"/>
<p className="text-sm leading-relaxed mb-6">
                        Aggressive representation for personal injury and criminal defense in New Jersey. We don't rest until you win.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors" href="#"><iconify-icon icon="logos:facebook"></iconify-icon></a>
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors" href="#"><iconify-icon icon="logos:twitter"></iconify-icon></a>
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors" href="#"><iconify-icon icon="logos:linkedin-icon"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Practice Areas</a></li>
<li><a className="hover:text-white transition-colors" href="#attorney">About Anthony Carbone</a></li>
<li><a className="hover:text-white transition-colors" href="#results">Verdicts &amp; Settlements</a></li>
<li><a className="hover:text-white transition-colors" href="#reviews">Client Reviews</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Areas of Practice</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Car Accidents</a></li>
<li><a className="hover:text-white transition-colors" href="#">Slip &amp; Fall</a></li>
<li><a className="hover:text-white transition-colors" href="#">Workers' Compensation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Domestic Violence</a></li>
<li><a className="hover:text-white transition-colors" href="#">Criminal Defense</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-accent" icon="solar:map-point-linear"></iconify-icon>
<span>12 Oakland Ave,<br/>Jersey City, NJ 07306</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-accent" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:2019636000">201-963-6000</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-accent" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@carbonelaw.com">info@carbonelaw.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 text-xs text-slate-500 text-center">
<p className="mb-4 max-w-4xl mx-auto leading-relaxed">
                    Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Attorney advertising. Prior results do not guarantee similar outcomes.
                </p>
<p>© 2026 Law Offices of Anthony Carbone, P.C. All Rights Reserved.</p>
</div>
</div>
</footer>



    </>
  );
}

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
brand: {
50: '#F7F9F8',
100: '#EEF2F0',
200: '#DDE5E1',
300: '#C0D0C9',
400: '#9FB5AC',
500: '#829A90',
600: '#647D73',
700: '#51655D',
800: '#42524C',
900: '#384440',
},
sand: {
50: '#FAFAF9',
100: '#F5F5F4',
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 group-hover:bg-brand-200 transition-colors">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-serif text-lg tracking-tight text-stone-800 font-medium group-hover:text-brand-800 transition-colors">
                    Praveen Psychotherapy
                </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-brand-700 transition-colors" href="#about">About</a>
<a className="hover:text-brand-700 transition-colors" href="#services">Services</a>
<a className="hover:text-brand-700 transition-colors" href="#credentials">Credentials</a>
<a className="hover:text-brand-700 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-800 text-white text-sm font-medium rounded-full hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-200/50 transition-all transform hover:-translate-y-0.5" href="#book">
<span>Book Session</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-stone-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 hero-gradient overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs tracking-wide uppercase font-medium mb-8 animate-up">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                Based in Kuching, Sarawak
            </div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-stone-900 mb-8 leading-[1.1] animate-up delay-100 font-medium">
                Compassionate <i className="font-serif italic text-brand-600">Healing</i> &amp; Mental Wellness.
            </h1>
<p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-up delay-200">
                Led by Professor Dr. Praveen Kaur. 27+ years of clinical expertise, UN consultancy, and a safe, evidence-based approach to your mental health journey.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-up delay-300">
<a className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2" href="#book">
                    Book an Appointment
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-stone-200 text-stone-700 rounded-full font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-2" href="#about">
                    More About Dr. Praveen
                </a>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[500px] h-[500px] bg-stone-200 rounded-full blur-3xl opacity-40 -z-10"></div>
</header>

<section className="py-12 border-y border-stone-100 bg-white" id="credentials">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs text-stone-400 font-medium uppercase tracking-widest mb-8">Trusted by Global &amp; Local Institutions</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="font-serif text-xl font-medium tracking-tight text-stone-800">UNDP</span>
<span className="font-sans text-lg font-semibold tracking-tight text-stone-800">WWF Malaysia</span>
<span className="font-serif text-lg font-medium italic text-stone-800">National University of Singapore</span>
<span className="font-sans text-lg font-semibold tracking-tight text-stone-800">UNOPS</span>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="about">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="aspect-[4/5] bg-stone-200 rounded-2xl overflow-hidden relative">

<div className="absolute inset-0 bg-brand-50 flex flex-col items-center justify-center text-center p-8">
<iconify-icon className="text-brand-300 mb-4" icon="solar:user-heart-linear" width="64"></iconify-icon>
<p className="font-serif text-brand-800 text-lg italic">"Healing begins with feeling heard, safe, and understood."</p>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl shadow-stone-200/50 border border-stone-100 max-w-xs">
<div className="flex items-center gap-3 mb-1">
<iconify-icon className="text-brand-600" icon="solar:medal-star-linear" width="24"></iconify-icon>
<span className="font-serif text-2xl text-stone-900 font-medium">27+ Years</span>
</div>
<p className="text-sm text-stone-500 leading-snug">Of clinical excellence &amp; international consultancy.</p>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 tracking-tight font-medium">Human-centered care backed by global expertise.</h2>
<p className="text-stone-600 text-lg mb-6 leading-relaxed font-light">
                    At Praveen Psychotherapy, we believe that mental wellness is fundamental to a fulfilling life. Prof. Dr. Praveen Kaur brings a unique blend of high-level academic rigor and deep, compassionate empathy to her practice in Kuching.
                </p>
<p className="text-stone-600 mb-8 leading-relaxed font-light">
                    Whether serving as a consultant for the United Nations or guiding an individual through personal trauma, her philosophy remains consistent: ethical, inclusive, and evidence-based support tailored to your unique story.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-stone-700">
<iconify-icon className="text-brand-600" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm">Confidential &amp; Safe Environment</span>
</li>
<li className="flex items-center gap-3 text-stone-700">
<iconify-icon className="text-brand-600" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm">Trauma-Informed Approach</span>
</li>
<li className="flex items-center gap-3 text-stone-700">
<iconify-icon className="text-brand-600" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm">International Consultancy Background</span>
</li>
</ul>
<a className="text-brand-700 font-medium hover:text-brand-900 inline-flex items-center gap-1 group" href="#services">
                    View Services 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4 tracking-tight font-medium">Holistic Services</h2>
<p className="text-stone-500 font-light">Comprehensive support for individuals, families, and organizations, rooted in compassion and science.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-speak-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3 font-medium">Individual Therapy</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">One-on-one sessions addressing anxiety, depression, burnout, and personal growth in a private setting.</p>
<span className="text-xs font-medium text-brand-700 uppercase tracking-wide">For Adults &amp; Teens</span>
</div>

<div className="group p-8 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3 font-medium">Mental Wellness</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Holistic approaches to emotional wellbeing, stress management, and building resilience.</p>
<span className="text-xs font-medium text-brand-700 uppercase tracking-wide">Preventative Care</span>
</div>

<div className="group p-8 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3 font-medium">Family &amp; Relationship</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Navigating complex dynamics, communication breakdowns, and fostering healthier connections.</p>
<span className="text-xs font-medium text-brand-700 uppercase tracking-wide">Couples &amp; Families</span>
</div>

<div className="group p-8 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:women-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3 font-medium">Women &amp; Gender Focus</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Specialized support for women’s health, empowerment, and gender-specific challenges.</p>
<span className="text-xs font-medium text-brand-700 uppercase tracking-wide">Specialized Care</span>
</div>

<div className="group p-8 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:case-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3 font-medium">Corporate Consultancy</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">EAP programs, mental health workshops, and organizational wellness strategy.</p>
<span className="text-xs font-medium text-brand-700 uppercase tracking-wide">Institutions</span>
</div>

<div className="group p-8 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3 font-medium">Trauma-Informed Care</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Evidence-based approaches for processing trauma in a safe, paced manner.</p>
<span className="text-xs font-medium text-brand-700 uppercase tracking-wide">Specialized Care</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 border-y border-stone-100">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/2">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 tracking-tight font-medium">Why Praveen Psychotherapy?</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 text-brand-600">
<iconify-icon icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-stone-900 font-medium mb-1">International Standard of Care</h4>
<p className="text-stone-500 text-sm leading-relaxed">Practices aligned with UN and SDG mental health frameworks.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-brand-600">
<iconify-icon icon="solar:hand-heart-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-stone-900 font-medium mb-1">Deeply Empathetic</h4>
<p className="text-stone-500 text-sm leading-relaxed">We move beyond symptoms to understand the person as a whole.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-brand-600">
<iconify-icon icon="solar:lock-password-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-stone-900 font-medium mb-1">Strict Confidentiality</h4>
<p className="text-stone-500 text-sm leading-relaxed">A secure space where privacy is paramount for every client.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 relative">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
<h3 className="font-serif text-xl text-stone-900 mb-4">Our Practice in Kuching</h3>
<p className="text-stone-500 text-sm mb-6 leading-relaxed">
                        Located in a serene environment in Sarawak, our center is designed to be a sanctuary away from the noise of daily life. Accessibility, comfort, and safety are the pillars of our physical space.
                    </p>
<div className="flex items-center gap-2 text-brand-700 text-sm font-medium">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span>Kuching, Sarawak</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="book">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4 tracking-tight font-medium">Take the First Step</h2>
<p className="text-stone-500 font-light">Booking a session is a courageous act of self-care. We are here to support you.</p>
</div>

<div className="bg-stone-50 rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
<div className="p-1 bg-stone-100 border-b border-stone-200 flex text-center">
<div className="flex-1 py-2 text-xs font-medium text-brand-800 border-b-2 border-brand-500">1. Service</div>
<div className="flex-1 py-2 text-xs font-medium text-stone-400">2. Date &amp; Time</div>
<div className="flex-1 py-2 text-xs font-medium text-stone-400">3. Details</div>
</div>
<form className="p-6 md:p-10">

<div className="mb-8">
<label className="block text-stone-700 font-medium mb-4 text-sm">Select Type of Session</label>
<div className="grid md:grid-cols-2 gap-4">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="service" type="radio"/>
<div className="p-4 rounded-xl border border-stone-200 bg-white peer-checked:border-brand-500 peer-checked:bg-brand-50 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="font-medium text-stone-800 text-sm">Individual Therapy</span>
<iconify-icon className="text-stone-400 peer-checked:text-brand-600" icon="solar:user-circle-linear"></iconify-icon>
</div>
<p className="text-xs text-stone-500">60 Minutes • In-person</p>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="service" type="radio"/>
<div className="p-4 rounded-xl border border-stone-200 bg-white peer-checked:border-brand-500 peer-checked:bg-brand-50 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="font-medium text-stone-800 text-sm">Consultation Call</span>
<iconify-icon className="text-stone-400 peer-checked:text-brand-600" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<p className="text-xs text-stone-500">15 Minutes • Online</p>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="service" type="radio"/>
<div className="p-4 rounded-xl border border-stone-200 bg-white peer-checked:border-brand-500 peer-checked:bg-brand-50 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="font-medium text-stone-800 text-sm">Family Session</span>
<iconify-icon className="text-stone-400 peer-checked:text-brand-600" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<p className="text-xs text-stone-500">90 Minutes • In-person</p>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="service" type="radio"/>
<div className="p-4 rounded-xl border border-stone-200 bg-white peer-checked:border-brand-500 peer-checked:bg-brand-50 transition-all">
<div className="flex items-center justify-between mb-2">
<span className="font-medium text-stone-800 text-sm">Student/Concession</span>
<iconify-icon className="text-stone-400 peer-checked:text-brand-600" icon="solar:book-linear"></iconify-icon>
</div>
<p className="text-xs text-stone-500">60 Minutes • In-person</p>
</div>
</label>
</div>
</div>

<div className="space-y-4">
<label className="block text-stone-700 font-medium text-sm">Your Details</label>
<div className="grid md:grid-cols-2 gap-4">
<input className="custom-input w-full p-3 rounded-lg border border-stone-200 bg-white text-sm text-stone-700 placeholder:text-stone-400" placeholder="Full Name" type="text"/>
<input className="custom-input w-full p-3 rounded-lg border border-stone-200 bg-white text-sm text-stone-700 placeholder:text-stone-400" placeholder="Email Address" type="email"/>
</div>
<input className="custom-input w-full p-3 rounded-lg border border-stone-200 bg-white text-sm text-stone-700 placeholder:text-stone-400" placeholder="Phone Number (WhatsApp preferred)" type="tel"/>
<textarea className="custom-input w-full p-3 rounded-lg border border-stone-200 bg-white text-sm text-stone-700 placeholder:text-stone-400" placeholder="Briefly describe what you'd like to discuss (optional)" rows="3"></textarea>
</div>
<div className="mt-8 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-stone-500">
<iconify-icon className="text-brand-600" icon="solar:shield-check-linear"></iconify-icon>
<span>100% Confidential</span>
</div>
<button className="px-6 py-3 bg-brand-800 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200/50" type="button">
                            Proceed to Calendar
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 mb-12">
<div>
<h3 className="font-serif text-white text-xl mb-4">Praveen Psychotherapy</h3>
<p className="text-sm leading-relaxed mb-6">
                        Ethical, compassionate, and professional psychotherapy services in Kuching, Sarawak.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Kuching, Sarawak, Malaysia</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:phone-linear"></iconify-icon>
<span>+60 12-345-6789</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
<span>contact@praveenpsychotherapy.com</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">Practice Areas</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Individual Psychotherapy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Trauma &amp; PTSD</a></li>
<li><a className="hover:text-white transition-colors" href="#">Women's Mental Health</a></li>
<li><a className="hover:text-white transition-colors" href="#">Corporate Consultancy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 Praveen Psychotherapy. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

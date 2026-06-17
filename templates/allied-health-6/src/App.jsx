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
clinical: {
50: '#ecfdf5',
100: '#d1fae5',
500: '#10b981',
700: '#047857', // Primary Green
800: '#065f46',
900: '#064e3b',
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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<img alt="Alpaca Health Logo" className="w-10 h-10 rounded-full object-cover shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300" src="https://placehold.co/200x200/047857/ffffff?text=AH"/>
<span className="text-lg tracking-tight text-clinical-900 font-medium uppercase">
            Alpaca Health
          </span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-500">
<a className="hover:text-clinical-700 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-clinical-700 transition-colors" href="#about">
            About
          </a>
<a className="hover:text-clinical-700 transition-colors" href="#team">
            Specialists
          </a>
<a className="hover:text-clinical-700 transition-colors" href="#testimonials">
            Stories
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-clinical-700 hover:bg-clinical-800 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#contact">
<span>Book Appointment</span>
<iconify-icon icon="solar:calendar-add-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-slate-800">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-clinical-50/50">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-clinical-50 to-transparent opacity-60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1 text-center lg:text-left">
<h1 className="text-5xl lg:text-7xl text-slate-900 font-medium tracking-tight mb-6 leading-[1.1]">
              Allied health by
              <br/>
<span className="text-clinical-700">your bedside.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Professional physiotherapy, rehabilitation, and osteopathy
              delivered in the safety and comfort of your own home. Recovery
              starts where you feel most at ease.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-clinical-700 hover:bg-clinical-800 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-clinical-700/20 hover:shadow-clinical-700/30 flex items-center justify-center gap-2" href="#contact">
                Request Home Visit
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 hover:border-clinical-200 text-slate-600 hover:text-clinical-700 font-medium rounded-full transition-all duration-300 flex items-center justify-center" href="#services">
                View Services
              </a>
</div>
</div>
<div className="flex-1 w-full max-w-lg lg:max-w-none relative">

<div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-slate-200/50">
<img alt="Physiotherapist helping patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-lg border border-white/50">
<div className="flex items-start gap-4">
<div className="bg-clinical-100 p-3 rounded-full text-clinical-700">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-slate-900 font-semibold tracking-tight">
                      Licensed Specialists
                    </p>
<p className="text-slate-500 text-sm mt-1">
                      Our team is fully vetted, insured, and clinically
                      certified.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-y border-slate-50">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-slate-300">
          Medicare+
        </span>
<span className="text-xl font-bold tracking-tight text-slate-300">
          HealthFirst
        </span>
<span className="text-xl font-bold tracking-tight text-slate-300">
          Vitality
        </span>
<span className="text-xl font-bold tracking-tight text-slate-300">
          PureLife
        </span>
<span className="text-xl font-bold tracking-tight text-slate-300">
          Recover.io
        </span>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-clinical-700 font-medium text-sm tracking-wide uppercase">
            Clinical Services
          </span>
<h2 className="text-3xl md:text-4xl text-slate-900 font-medium tracking-tight mt-3 mb-4">
            Comprehensive care plans
          </h2>
<p className="text-slate-500">
            We bring the clinic to you, offering a full range of rehabilitation
            and therapeutic services tailored to your environment.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-clinical-50/50 border border-slate-100 hover:border-clinical-100 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 text-slate-400 group-hover:text-clinical-600 group-hover:border-clinical-200 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
<iconify-icon icon="solar:bone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
              Physiotherapy
            </h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
              Restoring movement and function through manual therapy, exercise,
              and education.
            </p>
<a className="inline-flex items-center text-sm font-medium text-clinical-700 hover:gap-2 transition-all" href="#">
              Learn more
              <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-clinical-50/50 border border-slate-100 hover:border-clinical-100 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 text-slate-400 group-hover:text-clinical-600 group-hover:border-clinical-200 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
              Post-Op Rehab
            </h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
              Specialized care pathways following orthopedic surgery to ensure
              optimal healing.
            </p>
<a className="inline-flex items-center text-sm font-medium text-clinical-700 hover:gap-2 transition-all" href="#">
              Learn more
              <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-clinical-50/50 border border-slate-100 hover:border-clinical-100 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 text-slate-400 group-hover:text-clinical-600 group-hover:border-clinical-200 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
<iconify-icon icon="solar:wheelchair-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
              Occupational Therapy
            </h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
              Helping you overcome barriers specifically within your home
              environment.
            </p>
<a className="inline-flex items-center text-sm font-medium text-clinical-700 hover:gap-2 transition-all" href="#">
              Learn more
              <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-clinical-50/50 border border-slate-100 hover:border-clinical-100 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 text-slate-400 group-hover:text-clinical-600 group-hover:border-clinical-200 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
<iconify-icon icon="solar:user-hand-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
              Elderly Care
            </h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
              Fall prevention, strength maintenance, and mobility support for
              seniors.
            </p>
<a className="inline-flex items-center text-sm font-medium text-clinical-700 hover:gap-2 transition-all" href="#">
              Learn more
              <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-clinical-50/50 border border-slate-100 hover:border-clinical-100 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 text-slate-400 group-hover:text-clinical-600 group-hover:border-clinical-200 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
<iconify-icon icon="solar:dumbbell-large-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
              Sports Injury
            </h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
              Targeted treatment plans for athletes to return to sport safely
              and efficiently.
            </p>
<a className="inline-flex items-center text-sm font-medium text-clinical-700 hover:gap-2 transition-all" href="#">
              Learn more
              <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-clinical-50/50 border border-slate-100 hover:border-clinical-100 transition-all duration-300 cursor-default">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 text-slate-400 group-hover:text-clinical-600 group-hover:border-clinical-200 flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
              Telehealth
            </h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
              Virtual consultations for follow-ups, advice, and exercise
              progression.
            </p>
<a className="inline-flex items-center text-sm font-medium text-clinical-700 hover:gap-2 transition-all" href="#">
              Learn more
              <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-clinical-50/30" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">

<div className="w-full md:w-1/2">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-clinical-100 rounded-full blur-2xl opacity-60"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-clinical-200 rounded-full blur-3xl opacity-60"></div>
<img alt="Clinical discussion" className="relative rounded-3xl shadow-xl w-full" src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>

<div className="w-full md:w-1/2">
<span className="text-clinical-700 font-medium text-sm tracking-wide uppercase">
              Why Alpaca Health
            </span>
<h2 className="text-3xl md:text-4xl text-slate-900 font-medium tracking-tight mt-3 mb-6">
              Evidence-based care,
              <br/>
              delivered with empathy.
            </h2>
<p className="text-slate-500 mb-6 leading-relaxed">
              We believe that the environment plays a crucial role in recovery.
              By removing the stress of travel and hospital waiting rooms, we
              allow patients to focus entirely on their rehabilitation.
            </p>
<p className="text-slate-500 mb-8 leading-relaxed">
              Our method integrates clinical expertise with the comfort of your
              daily life, ensuring exercises and treatments are practical,
              sustainable, and effective within your own home.
            </p>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-3xl font-semibold text-clinical-800 tracking-tight">
                  15+
                </h4>
<p className="text-sm text-slate-500 mt-1">Years of Experience</p>
</div>
<div>
<h4 className="text-3xl font-semibold text-clinical-800 tracking-tight">
                  2.5k
                </h4>
<p className="text-sm text-slate-500 mt-1">Home Visits/Year</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl text-slate-900 font-medium tracking-tight mb-4">
              Meet your specialists
            </h2>
<p className="text-slate-500">
              Our multidisciplinary team consists of registered physiotherapists
              and allied health professionals dedicated to your recovery.
            </p>
</div>
<a className="text-clinical-700 font-medium hover:underline underline-offset-4 decoration-clinical-200" href="#">
            View all specialists
          </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100">
<img alt="Dr. Sarah Jenkins" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">
              Dr. Sarah Jenkins
            </h3>
<p className="text-clinical-700 text-sm font-medium mb-1">
              Senior Physiotherapist
            </p>
<p className="text-slate-400 text-xs">Specializes in Neurology</p>
</div>

<div className="group">
<div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100">
<img alt="Marcus Chen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Marcus Chen</h3>
<p className="text-clinical-700 text-sm font-medium mb-1">
              Occupational Therapist
            </p>
<p className="text-slate-400 text-xs">Home Adaptations</p>
</div>

<div className="group">
<div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100">
<img alt="Dr. Emily Ross" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Dr. Emily Ross</h3>
<p className="text-clinical-700 text-sm font-medium mb-1">Osteopath</p>
<p className="text-slate-400 text-xs">Musculoskeletal Pain</p>
</div>

<div className="group">
<div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100">
<img alt="James Wilson" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">James Wilson</h3>
<p className="text-clinical-700 text-sm font-medium mb-1">
              Rehab Assistant
            </p>
<p className="text-slate-400 text-xs">Strength &amp; Conditioning</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-clinical-900 text-white" id="testimonials">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-clinical-400 mb-8 opacity-50" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<h3 className="text-2xl md:text-4xl font-light leading-relaxed mb-10">
          "The care my father received from Alpaca Health was transformative.
          Having the physiotherapist come to us meant he was more relaxed, and
          his progress was significantly faster than in the clinic."
        </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-clinical-800 flex items-center justify-center text-clinical-200 font-semibold">
            MJ
          </div>
<div className="text-left">
<p className="font-medium text-white">Michael Jenkins</p>
<p className="text-clinical-400 text-sm">Post-stroke recovery care</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl p-8 md:p-12">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">
              Begin your recovery
            </h2>
<p className="text-slate-500">
              Fill out the form below or call us directly. We usually respond
              within 2 hours.
            </p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                  First Name
                </label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinical-500/20 focus:border-clinical-500 transition-all text-slate-800 placeholder:text-slate-400" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                  Last Name
                </label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinical-500/20 focus:border-clinical-500 transition-all text-slate-800 placeholder:text-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Email Address
              </label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinical-500/20 focus:border-clinical-500 transition-all text-slate-800 placeholder:text-slate-400" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Service Required
              </label>
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-clinical-500/20 focus:border-clinical-500 transition-all text-slate-800">
<option>General Physiotherapy</option>
<option>Post-Op Rehab</option>
<option>Elderly Care</option>
<option>Telehealth Consultation</option>
</select>
</div>
<button className="w-full py-4 bg-clinical-700 hover:bg-clinical-800 text-white font-semibold rounded-lg shadow-lg shadow-clinical-700/20 transition-all duration-300 transform active:scale-[0.99]" type="button">
              Book Appointment
            </button>
</form>
<div className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-clinical-600" icon="solar:phone-calling-linear"></iconify-icon>
<span>+44 (0) 20 1234 5678</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-clinical-600" icon="solar:letter-linear"></iconify-icon>
<span>care@alpacahealth.com</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<img alt="Alpaca Health" className="w-8 h-8 rounded-full object-cover" src="https://placehold.co/100x100/047857/ffffff?text=AH"/>
<span className="text-sm tracking-tight text-clinical-900 font-medium uppercase">
            Alpaca Health
          </span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-clinical-700 transition-colors" href="#">
            Privacy
          </a>
<a className="hover:text-clinical-700 transition-colors" href="#">
            Terms
          </a>
<a className="hover:text-clinical-700 transition-colors" href="#">
            Cookies
          </a>
</div>
<p className="text-xs text-slate-400">
          © 2023 ALPACA HEALTH. All rights reserved.
        </p>
</div>
</footer>

    </>
  );
}

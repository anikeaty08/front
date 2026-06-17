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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
<i className="w-5 h-5" data-lucide="smile" strokeWidth="2"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-900 leading-none">ATHENS SMILE</span>
<span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">Dr. Despoina Kostomoiri</span>
</div>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#doctor">The Doctor</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#lifting">Lifting of Teeth</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#gallery">Before &amp; After</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex flex-col items-end mr-2">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Call Us</span>
<span className="text-sm font-semibold text-slate-900 tracking-tight">+30 210 36 22 522</span>
</div>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md" href="#appointment">
                    Book Appointment
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-medium mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                    Specialized in Aesthetic Dentistry since 1988
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
                    Athens Smile <br/>
<span className="text-slate-400 font-light">for a Lifetime.</span>
</h1>
<p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl font-light">
                    Do you want a beautiful and healthy smile forever? With 33 years of experience and worldwide patents, Dr. Kostomoiri creates smiles that change lives without pain or removal of healthy tooth substance.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-blue-600 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200/50 flex items-center justify-center gap-2">
<span>Book Consultation</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="play-circle"></i>
<span>See Real Results</span>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="lifting">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
<img alt="Dental Aesthetics" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
<div className="flex items-start gap-4">
<div className="bg-blue-50 p-3 rounded-lg text-blue-600">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Worldwide Patent</h4>
<p className="text-xs text-slate-500 leading-relaxed">No. 1004868 (O.B.I.)<br/>European Patent No. 1532933</p>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Lifting of Teeth</h2>
<p className="text-lg text-slate-500 mb-8 font-light leading-relaxed">
                        A revolutionary aesthetic intervention invented by Dr. Despoina Kostomoiri. We correct the imperfections of the teeth in a single visit.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="check"></i>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-1">No Pain, No Injections</h3>
<p className="text-sm text-slate-500 leading-relaxed">Correction of crooked, sparse, or discolored teeth without anesthesia or grinding healthy teeth.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="clock"></i>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-1">One Appointment</h3>
<p className="text-sm text-slate-500 leading-relaxed">Immediate results in just one visit using specialized resin veneers.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Long-lasting Results</h3>
<p className="text-sm text-slate-500 leading-relaxed">Excellent aesthetic results that last for many years with proper care.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-blue-600 font-semibold tracking-wider text-xs uppercase mb-2 block">Comprehensive Care</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Our Dental Services</h2>
<p className="text-slate-500 font-light">Combining health and aesthetics in every treatment.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6 text-slate-400 group-hover:text-blue-600" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Aesthetic Dentistry</h3>
<ul className="text-sm text-slate-500 space-y-2">
<li>• Lifting of teeth with resin veneers</li>
<li>• Porcelain Veneers</li>
<li>• Tooth Whitening (Laser)</li>
<li>• Gummy Smile Correction</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6 text-slate-400 group-hover:text-blue-600" data-lucide="hammer"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Prosthetic Dentistry</h3>
<ul className="text-sm text-slate-500 space-y-2">
<li>• Dental Implants</li>
<li>• Zirconia Crowns</li>
<li>• Bridges</li>
<li>• Full &amp; Partial Dentures</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6 text-slate-400 group-hover:text-blue-600" data-lucide="stethoscope"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">General Dentistry</h3>
<ul className="text-sm text-slate-500 space-y-2">
<li>• Teeth Cleaning &amp; Prevention</li>
<li>• Aesthetic White Fillings</li>
<li>• Root Canal Therapy</li>
<li>• Periodontal Treatments</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden" id="doctor">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/3">
<div className="relative">
<div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-3 opacity-20"></div>
<img alt="Dr. Despoina Kostomoiri" className="relative rounded-2xl shadow-2xl border border-slate-700 w-full aspect-[3/4] object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="w-full md:w-2/3">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-2">Dr. Despoina Kostomoiri</h2>
<p className="text-blue-400 text-lg mb-8 font-medium">Dental Surgeon &amp; Specialist in Aesthetic Dentistry</p>
<div className="space-y-6 text-slate-300 font-light leading-relaxed">
<p>
                            Dr. Kostomoiri is the Director of the "Athens Life Smile" dental clinic. She is a graduate of the Dental School of the University of Athens (1988) and has specialized in Aesthetic Dentistry.
                        </p>
<p>
                            She is the inventor of the "Lifting of Teeth" technique with resin veneers, holding worldwide patents. Her philosophy is based on achieving excellent aesthetic results without intervening on the healthy substance of the tooth.
                        </p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800 mt-8">
<div>
<span className="block text-3xl font-bold text-white mb-1">33+</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Years Experience</span>
</div>
<div>
<span className="block text-3xl font-bold text-white mb-1">100%</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Success Rate</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-16">Smile Transformations</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group">
<div className="relative overflow-hidden rounded-xl bg-slate-100 mb-4 border border-slate-200">
<div className="grid grid-cols-1 divide-y divide-white/20">
<div className="relative h-48">
<span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">BEFORE</span>
<img alt="Before" className="w-full h-full object-cover filter grayscale contrast-125" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="relative h-48">
<span className="absolute top-2 left-2 bg-blue-600/80 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">AFTER</span>
<img alt="After" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
<h3 className="font-medium text-slate-900">Diastema Closure</h3>
<p className="text-sm text-slate-500">Lifting of teeth with resin veneers</p>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-xl bg-slate-100 mb-4 border border-slate-200">
<div className="grid grid-cols-1 divide-y divide-white/20">
<div className="relative h-48">
<span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">BEFORE</span>
<img alt="Before" className="w-full h-full object-cover filter grayscale contrast-125" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="relative h-48">
<span className="absolute top-2 left-2 bg-blue-600/80 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">AFTER</span>
<img alt="After" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
<h3 className="font-medium text-slate-900">Smile Design</h3>
<p className="text-sm text-slate-500">Full arch rehabilitation</p>
</div>

<div className="group hidden lg:block">
<div className="relative overflow-hidden rounded-xl bg-slate-100 mb-4 border border-slate-200">
<div className="grid grid-cols-1 divide-y divide-white/20">
<div className="relative h-48">
<span className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">BEFORE</span>
<img alt="Before" className="w-full h-full object-cover filter grayscale contrast-125" src="https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="relative h-48">
<span className="absolute top-2 left-2 bg-blue-600/80 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">AFTER</span>
<img alt="After" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
<h3 className="font-medium text-slate-900">Whitening &amp; Alignment</h3>
<p className="text-sm text-slate-500">Non-invasive correction</p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">
                    View Full Gallery <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<div className="grid md:grid-cols-2">
<div className="p-10">
<h2 className="text-2xl font-semibold text-slate-900 mb-6">Contact Us</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="map-pin"></i>
<div>
<h4 className="font-medium text-slate-900 text-sm">Location</h4>
<p className="text-slate-500 text-sm">P. Anagnwstopoulou 44,<br/>Kolwnaki, 10673, Athens</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="phone"></i>
<div>
<h4 className="font-medium text-slate-900 text-sm">Phone</h4>
<p className="text-slate-500 text-sm">+30 210 36 22 522<br/>+30 210 36 05 919</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-5 h-5 text-blue-600 mt-1" data-lucide="mail"></i>
<div>
<h4 className="font-medium text-slate-900 text-sm">Email</h4>
<p className="text-slate-500 text-sm">smile2@otenet.gr</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 p-10 border-l border-slate-100">
<h2 className="text-2xl font-semibold text-slate-900 mb-6">Request Call</h2>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Phone Number</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" type="tel"/>
</div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                                Send Request
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6 text-blue-600" data-lucide="smile"></i>
<span className="text-lg font-bold text-slate-900 tracking-tight">ATHENS SMILE</span>
</div>
<div className="flex gap-8 mb-8 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">The Doctor</a>
<a className="hover:text-slate-900 transition-colors" href="#">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
</div>
<div className="text-center text-xs text-slate-400 font-light">
                © 2025 Athens Smile. All Rights Reserved. <br/>
                Dr. Despoina Kostomoiri - Dental Surgeon
            </div>
</div>
</footer>


    </>
  );
}

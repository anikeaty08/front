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
medical: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
600: '#0284c7', // Primary Blue
700: '#0369a1',
800: '#075985', // Deep Ocean
900: '#0c4a6e',
},
heritage: {
gold: '#d4af37',
red: '#e11d48', // Emergency/Action
}
},
boxShadow: {
'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
'card': '0 0 0 1px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.05)',
}
}
}
}



{
"@context": "https://schema.org",
"@type": "Dentist",
"name": "Jon Watts Denture Clinic",
"image": "https://jonwattsdentureclinic.com/logo.png",
"@id": "https://jonwattsdentureclinic.com",
"url": "https://jonwattsdentureclinic.com",
"telephone": "+16047926312",
"address": {
"@type": "PostalAddress",
"streetAddress": "45609 Hodgins Ave",
"addressLocality": "Chilliwack",
"addressRegion": "BC",
"postalCode": "V2P 1P2",
"addressCountry": "CA"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 49.1725,
"longitude": -121.9568
},
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday"
],
"opens": "08:30",
"closes": "16:30"
},
"priceRange": "$$",
"sameAs": [
"https://www.facebook.com/jonwattsdentureclinic"
]
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
      

<div className="bg-medical-900 text-white text-xs py-2 px-4">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
<p className="font-medium tracking-wide">Serving Chilliwack &amp; Fraser Valley Since 1964</p>
<div className="flex items-center gap-4">
<a className="hover:text-medical-100 transition-colors flex items-center gap-1.5" href="tel:6047926312">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                    604-792-6312
                </a>
<span className="hidden sm:inline text-slate-500">|</span>
<a className="hover:text-medical-100 transition-colors flex items-center gap-1.5" href="sms:6047926312">
<span className="iconify" data-icon="lucide:message-circle" data-width="14"></span>
                    Text Us
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3">
<div className="w-10 h-10 bg-medical-600 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:smile" data-width="24"></span>
</div>
<div>
<h1 className="font-serif font-semibold text-xl tracking-tight text-slate-900 leading-none">JON WATTS</h1>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Denture Clinic</p>
</div>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors" href="#faq">FAQ</a>
<a className="bg-medical-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-medical-700 transition-all shadow-lg shadow-medical-500/30 flex items-center gap-2" href="#contact">
                        Book Free Consult
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="md:hidden">
<button aria-label="Menu" className="text-slate-900 p-2">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
<div className="absolute inset-0 bg-[radial-gradient(#e0f2fe_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-50 border border-medical-100 text-medical-800 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-heritage-red opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-heritage-red"></span>
</span>
                        Same-Day Emergency Repairs Available
                    </div>
<h1 className="text-4xl lg:text-6xl font-serif font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Chilliwack's Most Trusted <span className="text-medical-600">Denture Clinic</span> Since 1964
                    </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Restoring confidence with custom-crafted smiles. We offer comprehensive denture care, repairs, and implant solutions in a family-owned, wheelchair-accessible clinic.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3.5 text-base font-medium text-white bg-medical-600 rounded-lg hover:bg-medical-700 transition-all shadow-lg shadow-medical-500/25" href="#contact">
                            Book Free Consultation
                        </a>
<a className="inline-flex justify-center items-center px-6 py-3.5 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all hover:border-slate-300" href="tel:6047926312">
<span className="iconify mr-2 text-slate-500" data-icon="lucide:phone" data-width="18"></span>
                            Call 604-792-6312
                        </a>
</div>
<div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
<div className="flex items-center gap-2">
<span className="iconify text-yellow-500" data-icon="lucide:star" data-width="16"></span>
<span>4.6/5 Star Rating</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-medical-600" data-icon="lucide:shield-check" data-width="16"></span>
<span>Direct Insurance Billing</span>
</div>
</div>
</div>

<div className="relative lg:ml-auto">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">

<img alt="Jon Watts Denture Clinic Professional Consultation" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=600"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-slate-100">
<div className="flex items-start gap-4">
<div className="bg-medical-50 p-2 rounded-lg text-medical-600">
<span className="iconify" data-icon="lucide:history" data-width="24"></span>
</div>
<div>
<p className="text-slate-900 font-semibold text-sm">60+ Years Experience</p>
<p className="text-slate-500 text-xs">Serving Fraser Valley families for three generations.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center justify-center gap-2">
<span className="iconify text-2xl" data-icon="lucide:award"></span>
<span className="font-semibold text-sm">College of Denturists BC</span>
</div>
<div className="flex items-center justify-center gap-2">
<span className="iconify text-2xl" data-icon="lucide:heart-handshake"></span>
<span className="font-semibold text-sm">Family Owned</span>
</div>
<div className="flex items-center justify-center gap-2">
<span className="iconify text-2xl" data-icon="lucide:accessibility"></span>
<span className="font-semibold text-sm">Wheelchair Accessible</span>
</div>
<div className="flex items-center justify-center gap-2">
<span className="iconify text-2xl" data-icon="lucide:clock"></span>
<span className="font-semibold text-sm">Same-Day Repairs</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-medical-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
<h3 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-4 tracking-tight">Comprehensive Denture Services</h3>
<p className="text-slate-500">From brand new smiles to emergency repairs, we provide personalized care tailored to your unique needs.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-100 bg-white shadow-card hover:shadow-soft transition-all duration-300 hover:border-medical-200">
<div className="w-12 h-12 bg-medical-50 text-medical-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:smile-plus" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Complete Dentures</h4>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Custom-fitted full upper and lower dentures designed for comfort, function, and a natural appearance.</p>
<a className="inline-flex items-center text-sm font-medium text-medical-600 hover:text-medical-700" href="#contact">
                        Learn more <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white shadow-card hover:shadow-soft transition-all duration-300 hover:border-medical-200">
<div className="w-12 h-12 bg-medical-50 text-medical-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:component" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Partial Dentures</h4>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Fill gaps in your smile with removable partials. Available in flexible, metal, or acrylic options.</p>
<a className="inline-flex items-center text-sm font-medium text-medical-600 hover:text-medical-700" href="#contact">
                        Learn more <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group p-8 rounded-2xl border border-heritage-red/10 bg-red-50/30 shadow-card hover:shadow-soft transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-heritage-red text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Fast</div>
<div className="w-12 h-12 bg-red-100 text-heritage-red rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:hammer" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Same-Day Repairs</h4>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Cracked denture? Broken tooth? Walk-ins are welcome for emergency repairs, often finished in hours.</p>
<a className="inline-flex items-center text-sm font-medium text-heritage-red hover:text-red-700" href="#contact">
                        Get repaired now <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white shadow-card hover:shadow-soft transition-all duration-300 hover:border-medical-200">
<div className="w-12 h-12 bg-medical-50 text-medical-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Denture Relines</h4>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Resurfacing the fitting side of your denture to improve stability and retention as your mouth changes.</p>
<a className="inline-flex items-center text-sm font-medium text-medical-600 hover:text-medical-700" href="#contact">
                        Learn more <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white shadow-card hover:shadow-soft transition-all duration-300 hover:border-medical-200">
<div className="w-12 h-12 bg-medical-50 text-medical-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:hourglass" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Immediate Dentures</h4>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Placed immediately after tooth extraction so you never have to go a single day without your smile.</p>
<a className="inline-flex items-center text-sm font-medium text-medical-600 hover:text-medical-700" href="#contact">
                        Learn more <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-white shadow-card hover:shadow-soft transition-all duration-300 hover:border-medical-200">
<div className="w-12 h-12 bg-medical-50 text-medical-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:messages-square" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Free Consultation</h4>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Not sure what you need? Come in for a no-obligation assessment and treatment plan tailored to your budget.</p>
<a className="inline-flex items-center text-sm font-medium text-medical-600 hover:text-medical-700" href="#contact">
                        Book now <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-medical-100 rounded-full blur-2xl opacity-70"></div>
<img alt="Chilliwack Heritage Building Clinic" className="relative rounded-2xl shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=1000"/>
<div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-slate-100">
<p className="font-serif italic text-lg text-slate-800 mb-2">"Excellent service with a personal touch."</p>
<div className="flex items-center gap-2">
<span className="text-yellow-400 flex text-xs">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</span>
<span className="text-xs font-semibold text-slate-400">- Google Review</span>
</div>
</div>
</div>
<div>
<h2 className="text-medical-600 font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Jon Watts</h2>
<h3 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-6 tracking-tight">Family-Owned Care Since 1964</h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-700">
<span className="iconify" data-icon="lucide:map-pin"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900">Local Heritage</h4>
<p className="text-sm text-slate-500 mt-1">Located in a beautiful heritage property across from Chilliwack Hospital. Easy ground-level access and ample free parking.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-700">
<span className="iconify" data-icon="lucide:users"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900">Personalized Attention</h4>
<p className="text-sm text-slate-500 mt-1">We are not a corporate chain. We treat every patient like family, taking the time to ensure the perfect fit and look.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-700">
<span className="iconify" data-icon="lucide:banknote"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900">Accessible &amp; Affordable</h4>
<p className="text-sm text-slate-500 mt-1">Free consultations, direct insurance billing, and honest pricing. We make quality denture care accessible to seniors.</p>
</div>
</div>
</div>
<div className="mt-10 border-t border-slate-200 pt-8 flex gap-8">
<div>
<p className="text-3xl font-bold text-slate-900 tracking-tight">10k+</p>
<p className="text-xs text-slate-500 uppercase tracking-wide font-medium mt-1">Smiles Restored</p>
</div>
<div>
<p className="text-3xl font-bold text-slate-900 tracking-tight">60</p>
<p className="text-xs text-slate-500 uppercase tracking-wide font-medium mt-1">Years Serving You</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h3 className="text-3xl font-serif font-semibold text-slate-900 tracking-tight">What Our Patients Say</h3>
<p className="text-slate-500 mt-2">Authentic reviews from your neighbors in Chilliwack.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl relative">
<span className="iconify text-4xl text-medical-200 absolute top-6 right-6" data-icon="lucide:quote"></span>
<div className="flex text-yellow-400 mb-4 text-sm">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-slate-700 text-sm leading-relaxed italic mb-6">"I would highly recommend Jon Watts Clinic! I broke my flipper (front tooth) and went in without an appointment. I was seen immediately and had it back by the next morning! I felt very welcomed."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-medical-600 flex items-center justify-center text-white font-bold text-sm">CW</div>
<div>
<p className="text-sm font-semibold text-slate-900">Carla White</p>
<p className="text-xs text-slate-500">Patient</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl relative">
<span className="iconify text-4xl text-medical-200 absolute top-6 right-6" data-icon="lucide:quote"></span>
<div className="flex text-yellow-400 mb-4 text-sm">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-slate-700 text-sm leading-relaxed italic mb-6">"The best service in the Fraser Valley. Jon and his team are kind, professional, and really took the time to explain my options. My new partial fits perfectly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm">RJ</div>
<div>
<p className="text-sm font-semibold text-slate-900">Robert Jenkins</p>
<p className="text-xs text-slate-500">Patient</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl relative">
<span className="iconify text-4xl text-medical-200 absolute top-6 right-6" data-icon="lucide:quote"></span>
<div className="flex text-yellow-400 mb-4 text-sm">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-slate-700 text-sm leading-relaxed italic mb-6">"Wheelchair access was a huge plus for my mother. The staff was incredibly patient with her. A true family business that cares about the community."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-heritage-gold flex items-center justify-center text-white font-bold text-sm">SM</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah M.</p>
<p className="text-xs text-slate-500">Daughter of Patient</p>
</div>
</div>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center text-sm font-semibold text-medical-600 hover:text-medical-800 border-b border-medical-200 hover:border-medical-600 transition-all pb-0.5" href="https://google.com" target="_blank">
                    Read more on Google Reviews <span className="iconify ml-1" data-icon="lucide:external-link" data-width="14"></span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h3 className="text-3xl font-serif font-semibold text-slate-900 tracking-tight text-center mb-10">Frequently Asked Questions</h3>
<div className="space-y-4">
<details className="group bg-white rounded-xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-medium">
                        How long does it take to get new dentures?
                        <span className="iconify transition duration-300 group-open:-rotate-180 text-slate-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                        The process typically takes 3-5 appointments over a period of 2-3 weeks. This allows us to ensure the fit is perfect at every stage. However, we also offer immediate dentures for those needing extractions, so you are never without teeth.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-medium">
                        Do you offer same-day denture repairs?
                        <span className="iconify transition duration-300 group-open:-rotate-180 text-slate-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                        Yes! We understand that a broken denture is an emergency. We provide prompt same-day repairs for most issues. Walk-ins are welcome for urgent repairs, though calling ahead is recommended.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-medium">
                        Do I need a referral from a dentist?
                        <span className="iconify transition duration-300 group-open:-rotate-180 text-slate-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                        No referral is necessary! You can book an appointment directly with us. Denturists are specialized primary oral health care providers.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-medium">
                        Will my insurance cover the cost?
                        <span className="iconify transition duration-300 group-open:-rotate-180 text-slate-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                        We accept all major dental insurance plans and offer direct billing to save you the hassle of paperwork. During your free consultation, we can help you understand your coverage.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100">

<div className="p-8 md:p-12 bg-medical-900 text-white">
<h3 className="text-3xl font-serif font-semibold mb-4">Book Your Free Consultation</h3>
<p className="text-medical-100 mb-8 text-sm">Fill out the form below or call us. We usually respond within 24 hours.</p>
<form action="#" className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-medical-200 mb-1" htmlFor="first-name">First Name</label>
<input className="w-full bg-medical-800 border-medical-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-white focus:border-transparent outline-none placeholder-medical-400/50" id="first-name" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-medical-200 mb-1" htmlFor="last-name">Last Name</label>
<input className="w-full bg-medical-800 border-medical-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-white focus:border-transparent outline-none placeholder-medical-400/50" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-medical-200 mb-1" htmlFor="phone">Phone Number</label>
<input className="w-full bg-medical-800 border-medical-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-white focus:border-transparent outline-none placeholder-medical-400/50" id="phone" placeholder="(604) 555-0123" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-medical-200 mb-1" htmlFor="service">Service Needed</label>
<select className="w-full bg-medical-800 border-medical-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-white focus:border-transparent outline-none text-white" id="service">
<option>Free Consultation</option>
<option>Denture Repair (Urgent)</option>
<option>New Dentures</option>
<option>Relines</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-medical-200 mb-1" htmlFor="message">Message (Optional)</label>
<textarea className="w-full bg-medical-800 border-medical-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-white focus:border-transparent outline-none placeholder-medical-400/50" id="message" placeholder="Tell us how we can help..." rows="3"></textarea>
</div>
<button className="w-full bg-white text-medical-900 font-semibold py-3.5 rounded-lg hover:bg-medical-50 transition-colors shadow-lg mt-2" type="submit">
                            Request Appointment
                        </button>
</form>
</div>

<div className="p-8 md:p-12 bg-slate-50 flex flex-col justify-between">
<div>
<h4 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h4>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="bg-white p-2.5 rounded-lg shadow-sm text-medical-600">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<p className="font-semibold text-slate-900 text-sm">Visit Us</p>
<p className="text-slate-500 text-sm leading-relaxed mt-1">45609 Hodgins Ave<br/>Chilliwack, BC V2P 1P2</p>
<p className="text-xs text-medical-600 mt-1">Across from Chilliwack General Hospital</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white p-2.5 rounded-lg shadow-sm text-medical-600">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<p className="font-semibold text-slate-900 text-sm">Call or Text</p>
<a className="text-slate-500 text-sm hover:text-medical-600 block mt-1" href="tel:6047926312">Phone: 604-792-6312</a>
<a className="text-slate-500 text-sm hover:text-medical-600 block" href="sms:6047926312">Text: 604-792-6312</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white p-2.5 rounded-lg shadow-sm text-medical-600">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
<div>
<p className="font-semibold text-slate-900 text-sm">Email</p>
<a className="text-slate-500 text-sm hover:text-medical-600 mt-1 block" href="mailto:jonwatts@jonwattsdentureclinic.com">jonwatts@jonwattsdentureclinic.com</a>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-xl overflow-hidden h-48 border border-slate-200 shadow-inner bg-slate-200 relative">

<iframe allowfullscreen="" className="opacity-80 hover:opacity-100 transition-opacity" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.6!2d-121.959!3d49.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54843fced0a02097%3A0x6e2671391996716f!2s45609%20Hodgins%20Ave%2C%20Chilliwack%2C%20BC%20V2P%201P2!5e0!3m2!1sen!2sca!4v1600000000000!5m2!1sen!2sca" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h3 className="text-2xl font-serif font-semibold text-slate-900 mb-8">Denture Care Tips</h3>
<div className="grid md:grid-cols-3 gap-6">
<article className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
<p className="text-xs text-medical-600 font-medium mb-2">Care &amp; Maintenance</p>
<h4 className="font-semibold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">How to Clean Your Dentures Properly</h4>
<p className="text-sm text-slate-500">Learn the daily routine that keeps your dentures looking new and your gums healthy.</p>
</article>
<article className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
<p className="text-xs text-medical-600 font-medium mb-2">New Patients</p>
<h4 className="font-semibold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">Adjusting to New Dentures: What to Expect</h4>
<p className="text-sm text-slate-500">The first 30 days are crucial. Here is a guide to eating, speaking, and comfort.</p>
</article>
<article className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
<p className="text-xs text-medical-600 font-medium mb-2">Repairs</p>
<h4 className="font-semibold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">What to Do When Your Denture Breaks</h4>
<p className="text-sm text-slate-500">Emergency steps to take before you reach our Chilliwack clinic.</p>
</article>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<h5 className="text-white font-serif font-semibold text-lg mb-4">Jon Watts Denture Clinic</h5>
<p className="text-sm leading-relaxed mb-6">Restoring smiles and confidence in the Fraser Valley since 1964. Family-owned and dedicated to your care.</p>
<div className="flex gap-4">
<a aria-label="Facebook" className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a aria-label="Map" className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:map" data-width="20"></span>
</a>
</div>
</div>
<div>
<h6 className="text-white font-medium text-sm uppercase tracking-wider mb-4">Quick Links</h6>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-medical-400 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h6 className="text-white font-medium text-sm uppercase tracking-wider mb-4">Services</h6>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-medical-400 transition-colors" href="#">Complete Dentures</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">Partial Dentures</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">Emergency Repairs</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">Implant Dentures</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">Relines</a></li>
</ul>
</div>
<div>
<h6 className="text-white font-medium text-sm uppercase tracking-wider mb-4">Service Areas</h6>
<div className="flex flex-wrap gap-2 text-xs">
<span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Chilliwack</span>
<span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Hope</span>
<span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Abbotsford</span>
<span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Mission</span>
<span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Agassiz</span>
<span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Harrison</span>
<span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Sardis</span>
<span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Rosedale</span>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Jon Watts Denture Clinic. All rights reserved.</p>
<p>Designed with care in BC.</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
<a className="flex-1 bg-slate-100 text-slate-900 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 text-sm border border-slate-200 active:bg-slate-200" href="tel:6047926312">
<span className="iconify" data-icon="lucide:phone" data-width="18"></span>
            Call
        </a>
<a className="flex-1 bg-medical-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 text-sm active:bg-medical-700 shadow-lg shadow-medical-500/30" href="sms:6047926312">
<span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
            Text Us
        </a>
</div>

<div className="fixed bottom-24 md:bottom-8 right-6 z-40 hidden md:block">
<button className="bg-medical-600 hover:bg-medical-700 text-white p-4 rounded-full shadow-xl shadow-medical-600/30 transition-all hover:-translate-y-1 flex items-center gap-2">
<span className="iconify" data-icon="lucide:message-square" data-width="24"></span>
<span className="font-medium text-sm pr-1">Chat with us</span>
</button>
</div>

    </>
  );
}

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



    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Aarupadai Veedu Medical College & Hospital",
      "alternateName": "AVMC",
      "url": "https://avmc.edu.in",
      "logo": "https://avmc.edu.in/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-413-2615449",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "ta"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "1057",
          "contactType": "emergency",
          "areaServed": "Puducherry"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pondy - Cuddalore Main Road, Kirumampakkam",
        "addressLocality": "Puducherry",
        "postalCode": "607402",
        "addressCountry": "IN"
      }
    }
    


        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-zinc-900" href="#">AVMC</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Academics</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Hospital</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Research</a>
<a className="text-zinc-900" href="#">Contact</a>
</div>
<button className="md:hidden text-zinc-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>
<main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-7 space-y-16">

<section className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600">
<span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                        Trusted healthcare &amp; education since 1998
                    </div>
<h1 className="text-4xl sm:text-5xl font-medium text-zinc-900 tracking-tight leading-[1.1]">
                        We are here to help.<br/>
<span className="text-zinc-400">How can we assist you today?</span>
</h1>
<p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
                        Whether you are a patient seeking care, a student applying for admission, or a partner looking to collaborate, connect with the right department below.
                    </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-teal-700 text-white font-medium text-sm hover:bg-teal-800 transition-all shadow-sm focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                            Book Appointment
                        </button>
<button className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-white border border-zinc-200 text-zinc-700 font-medium text-sm hover:bg-zinc-50 transition-all shadow-sm">
                            Student Admissions
                        </button>
</div>
</section>

<section className="scroll-mt-24" id="contact-form">
<div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="border-b border-zinc-200 bg-zinc-50/50 p-2 overflow-x-auto">
<div className="flex space-x-1 min-w-max">
<button className="px-4 py-2 rounded-lg bg-white shadow-sm border border-zinc-200 text-sm font-medium text-zinc-900">Patient</button>
<button className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 transition-colors">Student</button>
<button className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 transition-colors">Media</button>
<button className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 transition-colors">Vendor</button>
</div>
</div>
<div className="p-6 sm:p-8 space-y-6">
<div className="space-y-1">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Patient Inquiry</h3>
<p className="text-sm text-zinc-500">Schedule appointments or ask about our medical services.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Full Name</label>
<input className="w-full h-10 px-3 rounded-md bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-zinc-400" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Phone Number</label>
<input className="w-full h-10 px-3 rounded-md bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-zinc-400" placeholder="+91 00000 00000" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Department (Optional)</label>
<div className="relative">
<select className="w-full h-10 pl-3 pr-10 rounded-md bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 appearance-none transition-all">
<option>General Medicine</option>
<option>Cardiology</option>
<option>Pediatrics</option>
<option>Orthopedics</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-zinc-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Message / Symptoms</label>
<textarea className="w-full p-3 rounded-md bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-zinc-400 min-h-[100px]" placeholder="Briefly describe your inquiry..."></textarea>
</div>
<div className="flex items-start gap-3 pt-2">
<label className="custom-checkbox flex items-center cursor-pointer relative">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-zinc-300 bg-white flex items-center justify-center transition-all">
<i className="w-3.5 h-3.5 text-white hidden" data-lucide="check"></i>
</div>
</label>
<p className="text-xs text-zinc-500 leading-snug">
                                        I consent to AVMC storing my data for contact purposes. <a className="underline decoration-zinc-300 underline-offset-2 hover:text-zinc-800" href="#">Privacy Policy</a>.
                                    </p>
</div>
<button className="w-full sm:w-auto h-10 px-6 mt-2 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2" type="button">
                                    Send Message <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</section>

<section className="space-y-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight">Department Directory</h2>
<div className="relative w-full sm:w-64">
<i className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" data-lucide="search"></i>
<input className="w-full h-9 pl-9 pr-4 rounded-full bg-white border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:border-zinc-300 transition-all" placeholder="Search departments..." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all shadow-sm">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-medium text-zinc-900">Cardiology</h3>
<p className="text-xs text-zinc-500 mt-1">Block A, 2nd Floor</p>
</div>
<div className="p-2 rounded-full bg-zinc-50 group-hover:bg-teal-50 transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-teal-600 transition-colors" data-lucide="heart-pulse"></i>
</div>
</div>
<div className="space-y-2 mb-4">
<div className="flex items-center gap-2 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="user"></i>
<span>Dr. S. Ramesh (HOD)</span>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="clock"></i>
<span>Mon-Sat, 9am - 4pm</span>
</div>
</div>
<div className="pt-3 border-t border-zinc-100 flex gap-3">
<button className="flex-1 h-8 rounded-md bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors">Call Dept</button>
<button className="flex-1 h-8 rounded-md border border-zinc-200 text-zinc-700 text-xs font-medium hover:bg-zinc-50 transition-colors">Email</button>
</div>
</div>

<div className="group p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all shadow-sm">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-medium text-zinc-900">Admissions Office</h3>
<p className="text-xs text-zinc-500 mt-1">Admin Block, Ground Floor</p>
</div>
<div className="p-2 rounded-full bg-zinc-50 group-hover:bg-blue-50 transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-colors" data-lucide="graduation-cap"></i>
</div>
</div>
<div className="space-y-2 mb-4">
<div className="flex items-center gap-2 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="user"></i>
<span>Ms. Priya K. (Registrar)</span>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="clock"></i>
<span>Mon-Fri, 9am - 5pm</span>
</div>
</div>
<div className="pt-3 border-t border-zinc-100 flex gap-3">
<button className="flex-1 h-8 rounded-md bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors">Call Office</button>
<button className="flex-1 h-8 rounded-md border border-zinc-200 text-zinc-700 text-xs font-medium hover:bg-zinc-50 transition-colors">Email</button>
</div>
</div>
</div>
<button className="w-full py-3 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors border-t border-zinc-200">
                        View all 24 departments
                    </button>
</section>

<section>
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-6">Key Leadership</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-zinc-200 shadow-sm">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Dr. V. N. Mahalakshmi</h4>
<p className="text-xs text-zinc-500">Dean</p>
<a className="text-xs text-teal-700 hover:underline mt-1 block" href="mailto:dean@avmc.edu.in">dean@avmc.edu.in</a>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-zinc-200 shadow-sm">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Dr. Jayasingh</h4>
<p className="text-xs text-zinc-500">Medical Superintendent</p>
<a className="text-xs text-teal-700 hover:underline mt-1 block" href="mailto:ms@avmc.edu.in">ms@avmc.edu.in</a>
</div>
</div>
</div>
</section>

<section className="space-y-6">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group p-4 bg-white rounded-xl border border-zinc-200 shadow-sm open:ring-1 open:ring-zinc-200 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-900 text-sm list-none">
                                What are the visiting hours for inpatients?
                                <i className="w-4 h-4 text-zinc-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                                Visiting hours are 4:00 PM to 6:00 PM on weekdays and 10:00 AM to 12:00 PM &amp; 4:00 PM to 6:00 PM on weekends/holidays. Passes are required.
                            </p>
</details>
<details className="group p-4 bg-white rounded-xl border border-zinc-200 shadow-sm open:ring-1 open:ring-zinc-200 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-900 text-sm list-none">
                                How do I request a medical record transfer?
                                <i className="w-4 h-4 text-zinc-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                                Please visit the Medical Records Department (MRD) in Block B, Ground Floor, or email mrd@avmc.edu.in with your patient ID and a valid ID proof.
                            </p>
</details>
</div>
</section>
</div>

<div className="lg:col-span-5 relative">
<div className="sticky top-24 space-y-8">

<div className="space-y-4">
<div className="p-5 rounded-2xl bg-rose-50 border border-rose-100 flex flex-col items-center text-center space-y-3 shadow-sm">
<div className="p-2.5 bg-rose-100 text-rose-600 rounded-full">
<i className="w-6 h-6" data-lucide="ambulance"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-rose-900">Emergency &amp; Ambulance</h3>
<p className="text-xs text-rose-700/80 mt-1">24/7 Casualty Response</p>
</div>
<a className="text-3xl font-semibold tracking-tight text-rose-600 hover:text-rose-700 transition-colors" href="tel:1057">1057</a>
</div>
<div className="grid grid-cols-2 gap-3">
<a className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all flex flex-col items-start gap-2 group" href="tel:+914132615449">
<i className="w-5 h-5 text-zinc-400 group-hover:text-teal-600 transition-colors" data-lucide="phone"></i>
<div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">General Enquiry</span>
<span className="block text-sm font-semibold text-zinc-900 mt-0.5">0413 - 2615 449</span>
</div>
</a>
<a className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all flex flex-col items-start gap-2 group" href="tel:+914132615458">
<i className="w-5 h-5 text-zinc-400 group-hover:text-teal-600 transition-colors" data-lucide="calendar"></i>
<div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Appointments</span>
<span className="block text-sm font-semibold text-zinc-900 mt-0.5">0413 - 2615 458</span>
</div>
</a>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">

<div className="relative w-full h-56 bg-zinc-100 flex items-center justify-center group cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=11.9069,79.7925&amp;zoom=15&amp;size=600x300&amp;maptype=roadmap&amp;markers=color:red%7C11.9069,79.7925&amp;key=YOUR_API_KEY_HERE')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"></div>

<div className="absolute inset-0 bg-zinc-100 opacity-100 mix-blend-multiply" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<button className="relative z-10 px-5 py-2.5 rounded-full bg-white text-zinc-900 text-xs font-semibold shadow-lg hover:bg-zinc-50 transition-colors flex items-center gap-2">
<i className="w-3.5 h-3.5 text-rose-500" data-lucide="map-pin"></i> Open Campus Map
                            </button>
</div>
<div className="p-5 space-y-4">
<div>
<h4 className="text-sm font-semibold text-zinc-900">Aarupadai Veedu Medical College</h4>
<p className="text-sm text-zinc-500 mt-1">Pondy - Cuddalore Main Road, Kirumampakkam, Puducherry - 607402</p>
</div>
<div className="flex gap-2">
<button className="flex-1 h-9 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="navigation"></i> Get Directions
                                </button>
<button className="h-9 px-3 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors">
<i className="w-4 h-4" data-lucide="printer"></i>
</button>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-2xl p-6 text-white shadow-lg">
<h3 className="font-medium text-lg tracking-tight mb-4">Patient &amp; Visitor Resources</h3>
<ul className="space-y-3">
<li>
<a className="flex items-center justify-between group" href="#">
<span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Op. Procedure Checklist</span>
<i className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" data-lucide="download"></i>
</a>
</li>
<li className="w-full h-px bg-zinc-800"></li>
<li>
<a className="flex items-center justify-between group" href="#">
<span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Campus Parking Map</span>
<i className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" data-lucide="download"></i>
</a>
</li>
<li className="w-full h-px bg-zinc-800"></li>
<li>
<a className="flex items-center justify-between group" href="#">
<span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Visiting Hours Policy</span>
<i className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" data-lucide="file-text"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-zinc-200 bg-white mt-20">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-zinc-900">AVMC</span>
<span className="text-zinc-300">|</span>
<span className="text-xs text-zinc-500">© 2023 Aarupadai Veedu Medical College</span>
</div>
<div className="flex items-center gap-6">
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
</footer>




    </>
  );
}

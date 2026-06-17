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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-300/20 blur-[120px] pointer-events-none -z-10"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-300/20 blur-[120px] pointer-events-none -z-10"></div>

<nav className="sticky top-0 z-50 w-full glass-panel border-b-0">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="tracking-tighter font-semibold text-lg uppercase text-slate-900">NOVA</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#book">Book</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#dashboard">Portal</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex h-8 items-center justify-center rounded-md bg-teal-600 px-4 text-xs font-medium text-white shadow-md shadow-teal-600/20 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 transition-all duration-300" href="#book">
                    Book Appointment
                </a>
<button className="md:hidden flex items-center text-slate-500 hover:text-teal-600 transition-colors">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6 overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-gradient-to-tr from-teal-400 to-sky-300 shadow-xl opacity-60 animate-float blur-[2px] -z-10"></div>
<div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-2xl rotate-12 bg-gradient-to-bl from-sky-400 to-teal-200 shadow-xl opacity-40 animate-float-delayed blur-[1px] -z-10"></div>
<div className="absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full bg-gradient-to-t from-teal-500 to-teal-200 shadow-lg opacity-50 animate-float -z-10" style={{animationDelay: '1s'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-teal-700 text-xs font-medium mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                    Accepting new patients
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Advanced Care <br className="hidden sm:block"/>
                    for Your Health.
                </h1>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                    Experience state-of-the-art medical care in a premium environment. Our leading specialists combine cutting-edge technology with compassionate attention to your well-being.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="w-full sm:w-auto h-11 inline-flex items-center justify-center rounded-md bg-teal-600 px-6 text-sm font-medium text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/30 hover:-translate-y-0.5 transition-all duration-300" href="#book">
                        Book Appointment
                    </a>
<a className="w-full sm:w-auto h-11 inline-flex items-center justify-center rounded-md glass-card px-6 text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-white/80 hover:-translate-y-0.5 transition-all duration-300" href="#services">
                        Explore services
                    </a>
</div>
</div>
</section>

<section className="py-20 px-6 relative z-10" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-200 to-sky-100 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg animate-float"></div>
<div className="glass-panel p-2 rounded-3xl relative z-10 transform transition-transform duration-500 hover:scale-[1.02]">
<img alt="Doctor profile" className="rounded-2xl w-full h-[400px] object-cover object-top filter contrast-[0.95]" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl shadow-lg">
<h3 className="text-base font-semibold text-slate-900 tracking-tight">Dr. Sarah Jenkins</h3>
<p className="text-xs text-teal-600 font-medium mb-1">Chief Medical Officer</p>
<p className="text-xs text-slate-500">15+ years of clinical excellence</p>
</div>
</div>
</div>
<div className="space-y-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Redefining modern healthcare.</h2>
<p className="text-sm text-slate-500 leading-relaxed">
                            At NOVA Clinic, our mission is to provide proactive, personalized care that fits seamlessly into your life. We've replaced the waiting room with a calm, inviting environment and equipped our specialists with the latest medical technology.
                        </p>
<ul className="space-y-4 pt-2">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 mt-0.5">
<iconify-icon height="14" icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-700">World-class medical professionals and specialists.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 mt-0.5">
<iconify-icon height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-700">Zero wait times with guaranteed appointment slots.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 mt-0.5">
<iconify-icon height="14" icon="solar:laptop-minimalistic-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-700">Seamless digital access to records and prescriptions.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 relative z-10" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Care</h2>
<p className="text-sm text-slate-500">We provide a wide range of medical services tailored to your individual needs, delivered in a state-of-the-art facility.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group p-6 rounded-2xl glass-card hover:bg-white/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-white shadow-sm flex items-center justify-center mb-5 text-teal-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:stethoscope-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">General Checkup</h3>
<p className="text-sm text-slate-500 leading-relaxed">Comprehensive health assessments, routine screenings, and preventive care to keep you thriving.</p>
</div>
<div className="group p-6 rounded-2xl glass-card hover:bg-white/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-white shadow-sm flex items-center justify-center mb-5 text-teal-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:tooth-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Dental Care</h3>
<p className="text-sm text-slate-500 leading-relaxed">Advanced cosmetic and restorative dentistry in a pain-free, relaxing environment.</p>
</div>
<div className="group p-6 rounded-2xl glass-card hover:bg-white/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-white shadow-sm flex items-center justify-center mb-5 text-teal-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Skin Treatment</h3>
<p className="text-sm text-slate-500 leading-relaxed">Dermatological care and aesthetic treatments using modern laser and diagnostic technology.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="book">
<div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 md:p-12 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
<div className="text-center mb-10 relative z-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-3">Book an Appointment</h2>
<p className="text-sm text-slate-500">Select your preferred service, doctor, and complete your booking securely.</p>
</div>
<form className="space-y-8 relative z-10">

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 border-b border-slate-200/60 pb-2">1. Patient Information</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-700" htmlFor="patient-name">Full Name</label>
<input className="block w-full rounded-md border border-slate-200/60 bg-white/50 backdrop-blur-sm px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors shadow-sm" id="patient-name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-700" htmlFor="phone">Phone Number</label>
<input className="block w-full rounded-md border border-slate-200/60 bg-white/50 backdrop-blur-sm px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors shadow-sm" id="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-700" htmlFor="email">Email Address</label>
<input className="block w-full rounded-md border border-slate-200/60 bg-white/50 backdrop-blur-sm px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors shadow-sm" id="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-700" htmlFor="reason">Reason for Visit</label>
<input className="block w-full rounded-md border border-slate-200/60 bg-white/50 backdrop-blur-sm px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors shadow-sm" id="reason" placeholder="Brief description of symptoms or request" required="" type="text"/>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 border-b border-slate-200/60 pb-2">2. Appointment Schedule</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-700" htmlFor="doctor">Select Doctor</label>
<div className="relative">
<select className="block w-full rounded-md border border-slate-200/60 bg-white/50 backdrop-blur-sm px-3 py-2.5 text-sm text-slate-900 focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors cursor-pointer shadow-sm" id="doctor" required="">
<option disabled="" selected="" value="">Choose a specialist</option>
<option value="dr-jenkins">Dr. Sarah Jenkins (General Practice)</option>
<option value="dr-smith">Dr. Michael Smith (Dentistry)</option>
<option value="dr-lee">Dr. Amanda Lee (Dermatology)</option>
<option value="dr-patel">Dr. Raj Patel (Pediatrics)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-700" htmlFor="date">Select Date</label>
<div className="relative">
<input className="block w-full rounded-md border border-slate-200/60 bg-white/50 backdrop-blur-sm px-3 py-2.5 text-sm text-slate-900 focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-400 transition-colors cursor-pointer shadow-sm relative z-10" id="date" required="" type="date"/>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 z-0">
<iconify-icon height="16" icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<label className="block text-xs font-medium text-slate-700">Available Time Slots</label>
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">

<label className="cursor-pointer relative">
<input className="peer sr-only" name="time-slot" required="" type="radio" value="09:00"/>
<div className="text-center rounded-md border border-slate-200/60 bg-white/50 py-2 text-xs font-medium text-slate-600 peer-checked:border-teal-500 peer-checked:bg-teal-50 peer-checked:text-teal-700 hover:border-slate-300 transition-all shadow-sm">09:00 AM</div>
</label>

<label className="cursor-pointer relative">
<input className="peer sr-only" name="time-slot" required="" type="radio" value="09:30"/>
<div className="text-center rounded-md border border-slate-200/60 bg-white/50 py-2 text-xs font-medium text-slate-600 peer-checked:border-teal-500 peer-checked:bg-teal-50 peer-checked:text-teal-700 hover:border-slate-300 transition-all shadow-sm">09:30 AM</div>
</label>

<label className="cursor-pointer relative">
<input className="peer sr-only" name="time-slot" required="" type="radio" value="10:00"/>
<div className="text-center rounded-md border border-slate-200/60 bg-white/50 py-2 text-xs font-medium text-slate-600 peer-checked:border-teal-500 peer-checked:bg-teal-50 peer-checked:text-teal-700 hover:border-slate-300 transition-all shadow-sm">10:00 AM</div>
</label>

<label className="cursor-not-allowed opacity-50 relative">
<input className="peer sr-only" disabled="" name="time-slot" type="radio" value="10:30"/>
<div className="text-center rounded-md border border-slate-100 bg-slate-100 py-2 text-xs font-medium text-slate-400 decoration-slate-400 line-through">10:30 AM</div>
</label>

<label className="cursor-pointer relative">
<input className="peer sr-only" name="time-slot" required="" type="radio" value="11:00"/>
<div className="text-center rounded-md border border-slate-200/60 bg-white/50 py-2 text-xs font-medium text-slate-600 peer-checked:border-teal-500 peer-checked:bg-teal-50 peer-checked:text-teal-700 hover:border-slate-300 transition-all shadow-sm">11:00 AM</div>
</label>

<label className="cursor-pointer relative">
<input className="peer sr-only" name="time-slot" required="" type="radio" value="11:30"/>
<div className="text-center rounded-md border border-slate-200/60 bg-white/50 py-2 text-xs font-medium text-slate-600 peer-checked:border-teal-500 peer-checked:bg-teal-50 peer-checked:text-teal-700 hover:border-slate-300 transition-all shadow-sm">11:30 AM</div>
</label>
</div>
</div>
</div>

<div className="pt-2">
<h3 className="text-sm font-semibold text-slate-900 mb-4 border-b border-slate-200/60 pb-2 flex items-center justify-between">
<span>3. Payment &amp; Confirmation</span>
<span className="flex items-center gap-1 text-xs text-slate-500 font-normal">
<iconify-icon height="14" icon="solar:lock-password-linear" width="14"></iconify-icon> Secure Encrypted
                            </span>
</h3>
<div className="bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-5">
<div>
<p className="text-sm font-semibold text-slate-900">Consultation Booking Fee</p>
<p className="text-xs text-slate-500 mt-0.5">Required to secure your appointment</p>
</div>
<div className="text-lg font-semibold text-slate-900">$50.00</div>
</div>
<div className="space-y-4">
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-700">Card Information</label>
<div className="relative flex items-center border border-slate-200/80 bg-white rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-teal-400 focus-within:border-teal-400 transition-colors shadow-sm">
<div className="px-3 text-slate-400 flex items-center justify-center">
<iconify-icon height="16" icon="solar:card-linear" width="16"></iconify-icon>
</div>
<input className="block w-full py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="Card number" type="text"/>
<input className="block w-20 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none border-l border-slate-200/80 px-2" placeholder="MM/YY" type="text"/>
<input className="block w-16 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none border-l border-slate-200/80 px-2" placeholder="CVC" type="text"/>
</div>
</div>
</div>
</div>
</div>
<div className="pt-2">
<button className="w-full h-11 inline-flex items-center justify-center rounded-md bg-teal-600 px-6 text-sm font-medium text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 transition-all duration-300 gap-2" type="button">
<iconify-icon height="18" icon="solar:wallet-check-linear" width="18"></iconify-icon>
                            Pay $50.00 &amp; Confirm Appointment
                        </button>
<p className="text-center text-xs text-slate-500 mt-3">By confirming, you agree to our cancellation policy.</p>
</div>
</form>
</div>
</section>

<section className="py-20 px-6 relative z-10 border-t border-slate-200/50 bg-slate-100/50" id="dashboard">
<div className="max-w-6xl mx-auto">
<div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Clinic Portal</h2>
<p className="text-sm text-slate-500 mt-1">Manage appointments, schedules, and automated notifications.</p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors gap-2">
<iconify-icon height="16" icon="solar:printer-linear" width="16"></iconify-icon> Export
                        </button>
<button className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-xs font-medium text-white shadow-sm hover:bg-slate-800 transition-colors gap-2">
<iconify-icon height="16" icon="solar:settings-linear" width="16"></iconify-icon> Settings
                        </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 space-y-6">

<div className="glass-card rounded-2xl p-5 shadow-sm border border-slate-200/60">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-slate-900">Schedule</h3>
<div className="flex gap-1 text-slate-500">
<button className="p-1 hover:text-slate-900"><iconify-icon height="16" icon="solar:alt-arrow-left-linear" width="16"></iconify-icon></button>
<button className="p-1 hover:text-slate-900"><iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon></button>
</div>
</div>
<div className="text-xs font-medium text-slate-900 text-center mb-3">October 2024</div>
<div className="grid grid-cols-7 gap-1 text-center text-[10px] font-medium text-slate-400 mb-2">
<div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center text-xs">
<div className="py-1.5 text-slate-300">28</div><div className="py-1.5 text-slate-300">29</div><div className="py-1.5 text-slate-300">30</div>
<div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">1</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">2</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">3</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">4</div>
<div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">5</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">6</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">7</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">8</div><div className="py-1.5 rounded bg-teal-600 text-white font-semibold shadow-sm cursor-pointer">9</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">10</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">11</div>
<div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">12</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700 relative">13<span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full"></span></div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">14</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700 relative">15<span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full"></span></div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">16</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">17</div><div className="py-1.5 rounded hover:bg-slate-100 cursor-pointer text-slate-700">18</div>
</div>
</div>

<div className="glass-card rounded-2xl p-5 shadow-sm border border-slate-200/60">
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center justify-between">
                                System Logs
                                <span className="flex items-center gap-1 text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Active</span>
</h3>
<div className="space-y-4">
<div className="text-xs border-l-2 border-teal-500 pl-3">
<p className="text-slate-500 font-medium mb-1 flex items-center gap-1"><iconify-icon icon="solar:letter-linear"></iconify-icon> Email to Jane D.</p>
<p className="text-slate-600 leading-relaxed bg-white/50 p-2 rounded border border-slate-100">"Hello Jane Doe, your appointment with Dr. Sarah Jenkins has been successfully booked for Oct 9 at 10:00 AM. Your payment of $50.00 has been received. Thank you."</p>
</div>
<div className="text-xs border-l-2 border-blue-500 pl-3">
<p className="text-slate-500 font-medium mb-1 flex items-center gap-1"><iconify-icon icon="solar:smartphone-linear"></iconify-icon> SMS to Dr. Jenkins</p>
<p className="text-slate-600 leading-relaxed bg-white/50 p-2 rounded border border-slate-100">"New appointment booked. Patient: Jane Doe, Phone: +1 555-0198, Date: Oct 9, Time: 10:00 AM."</p>
</div>
<div className="text-xs border-l-2 border-amber-500 pl-3">
<p className="text-slate-500 font-medium mb-1 flex items-center gap-1"><iconify-icon icon="solar:bell-linear"></iconify-icon> Reminder (WhatsApp)</p>
<p className="text-slate-600 leading-relaxed bg-white/50 p-2 rounded border border-slate-100">"Reminder: You have an appointment tomorrow at 09:00 AM at NOVA Clinic."</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 glass-card rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden flex flex-col">
<div className="p-5 border-b border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h3 className="text-sm font-semibold text-slate-900">Today's Appointments</h3>
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" height="14" icon="solar:magnifer-linear" width="14"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 text-xs rounded-md border border-slate-200 bg-white/50 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 w-full sm:w-48" placeholder="Search patient..." type="text"/>
</div>
<select className="py-1.5 px-3 text-xs rounded-md border border-slate-200 bg-white/50 focus:outline-none focus:border-teal-400 cursor-pointer">
<option>All Doctors</option>
<option>Dr. Jenkins</option>
<option>Dr. Smith</option>
</select>
</div>
</div>

<div className="flex-1 overflow-x-auto">
<div className="min-w-[600px] p-5 space-y-3">

<div className="grid grid-cols-12 gap-4 text-xs font-semibold text-slate-500 pb-2 border-b border-slate-100">
<div className="col-span-3">Patient Details</div>
<div className="col-span-3">Doctor &amp; Time</div>
<div className="col-span-2">Payment</div>
<div className="col-span-4 text-right">Actions</div>
</div>

<div className="grid grid-cols-12 gap-4 items-center py-2 border-b border-slate-50 hover:bg-slate-50/50 transition-colors rounded-lg px-2 -mx-2">
<div className="col-span-3">
<p className="text-sm font-semibold text-slate-900">Jane Doe</p>
<p className="text-[10px] text-slate-500">+1 555-0198</p>
</div>
<div className="col-span-3">
<p className="text-xs font-medium text-slate-700">Dr. Sarah Jenkins</p>
<p className="text-[10px] text-slate-500">10:00 AM - Gen Checkup</p>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-medium border border-green-200/50">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Paid
                                        </span>
</div>
<div className="col-span-4 flex justify-end gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors">Reschedule</button>
<button className="px-3 py-1.5 text-xs font-medium text-red-600 bg-white border border-slate-200 rounded hover:bg-red-50 hover:border-red-200 transition-colors">Cancel</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 items-center py-2 border-b border-slate-50 hover:bg-slate-50/50 transition-colors rounded-lg px-2 -mx-2">
<div className="col-span-3">
<p className="text-sm font-semibold text-slate-900">Marcus Wright</p>
<p className="text-[10px] text-slate-500">+1 555-8832</p>
</div>
<div className="col-span-3">
<p className="text-xs font-medium text-slate-700">Dr. Amanda Lee</p>
<p className="text-[10px] text-slate-500">11:30 AM - Skin Consult</p>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-medium border border-green-200/50">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Paid
                                        </span>
</div>
<div className="col-span-4 flex justify-end gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors">Reschedule</button>
<button className="px-3 py-1.5 text-xs font-medium text-red-600 bg-white border border-slate-200 rounded hover:bg-red-50 hover:border-red-200 transition-colors">Cancel</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 items-center py-2 hover:bg-slate-50/50 transition-colors rounded-lg px-2 -mx-2 opacity-60">
<div className="col-span-3">
<p className="text-sm font-semibold text-slate-900 line-through">Sarah Connor</p>
<p className="text-[10px] text-slate-500">+1 555-4421</p>
</div>
<div className="col-span-3">
<p className="text-xs font-medium text-slate-700">Dr. Michael Smith</p>
<p className="text-[10px] text-slate-500">01:00 PM - Dental</p>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-medium border border-amber-200/50">
<iconify-icon icon="solar:refresh-circle-linear"></iconify-icon> Refunded
                                        </span>
</div>
<div className="col-span-4 flex justify-end gap-2">
<span className="text-xs font-medium text-red-500 py-1.5">Cancelled by Patient</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white/80 backdrop-blur-md border-t border-slate-200/50 py-12 px-6 mt-auto relative z-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<span className="tracking-tighter font-semibold text-lg uppercase text-slate-900 block mb-2">NOVA</span>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed">Providing exceptional, patient-centered healthcare with modern facilities and expert specialists.</p>
</div>
<div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1">Clinic</span>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#about">About Us</a>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#services">Services</a>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#dashboard">Admin Portal</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1">Legal</span>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-500 hover:text-teal-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-200/50 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Nova Clinic. All rights reserved.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-600 transition-all" href="#">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-600 transition-all" href="#">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-600 transition-all" href="#">
<iconify-icon height="16" icon="solar:phone-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}

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
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:activity" data-width="18"></span>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-lg group-hover:opacity-80 transition-opacity">NOVA<span className="font-normal text-slate-400">HEALTH</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#">Doctors</a>
<a className="hover:text-slate-900 transition-colors" href="#">Research</a>
<a className="hover:text-slate-900 transition-colors" href="#">Patients</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Sign in</a>
<a className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-sm shadow-slate-200" href="#book">
                    Book Visit
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    Accepting new patients for 2024
                </div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                    Modern healthcare <br/>
<span className="text-slate-400">simplified for you.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg font-light">
                    Experience a new standard of medical care. We combine advanced technology with human compassion to deliver precision diagnostics and personalized treatment plans.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200/50" href="#book">
                        Find a Specialist
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<button className="inline-flex justify-center items-center px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                        View Services
                    </button>
</div>
<div className="pt-8 border-t border-slate-100 flex gap-8">
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">15k+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Patients Healed</div>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">98%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Satisfaction</div>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Emergency</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl -z-10 blur-xl opacity-70"></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<span className="iconify" data-icon="lucide:heart-pulse" data-width="20"></span>
</div>
<h3 className="text-slate-900 font-medium">Cardiology</h3>
<p className="text-xs text-slate-500 mt-2">Comprehensive heart care and surgery.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
<span className="iconify" data-icon="lucide:microscope" data-width="20"></span>
</div>
<h3 className="text-slate-900 font-medium">Lab Research</h3>
<p className="text-xs text-slate-500 mt-2">Advanced pathology and diagnostics.</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="20"></span>
</div>
<h3 className="text-slate-900 font-medium">Neurology</h3>
<p className="text-xs text-slate-500 mt-2">Expert care for brain and spine health.</p>
</div>
<div className="bg-slate-900 p-6 rounded-2xl shadow-md text-white">
<div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="20"></span>
</div>
<h3 className="font-medium">Easy Booking</h3>
<p className="text-xs text-slate-400 mt-2">Schedule appointments in seconds.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Holistic medical services</h2>
<p className="text-slate-500 font-light">We provide a wide array of medical services utilizing state-of-the-art technology to ensure the best outcomes for our patients.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors mb-6" data-icon="lucide:stethoscope" data-width="28"></span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Primary Care</h3>
<p className="text-sm text-slate-500 leading-relaxed">Routine check-ups, preventative care, and health education for the whole family.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors mb-6" data-icon="lucide:baby" data-width="28"></span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Pediatrics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Specialized care for infants, children, and adolescents in a friendly environment.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors mb-6" data-icon="lucide:scan-eye" data-width="28"></span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Ophthalmology</h3>
<p className="text-sm text-slate-500 leading-relaxed">Complete eye care services ranging from vision tests to complex surgeries.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors mb-6" data-icon="lucide:bone" data-width="28"></span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Orthopedics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Diagnosis and treatment of musculoskeletal system issues and sports injuries.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors mb-6" data-icon="lucide:flask-conical" data-width="28"></span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Diagnostic Labs</h3>
<p className="text-sm text-slate-500 leading-relaxed">Fast and accurate laboratory results to assist in precise medical diagnoses.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300">
<span className="iconify text-slate-400 group-hover:text-slate-900 transition-colors mb-6" data-icon="lucide:pill" data-width="28"></span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Pharmacy</h3>
<p className="text-sm text-slate-500 leading-relaxed">In-house pharmacy providing prescription medications and health advice.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-100">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Leading Specialists</h2>
<p className="text-slate-500 font-light">Our team of board-certified doctors and medical professionals.</p>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors flex items-center gap-1" href="#">
                Meet the whole team <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid md:grid-cols-4 gap-8">

<div className="group">
<div className="aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-slate-200 group-hover:bg-slate-300 transition-colors duration-500">

<div className="w-full h-full flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:user" data-width="48"></span>
</div>
</div>
</div>
<h3 className="text-base font-medium text-slate-900">Dr. Sarah Chen</h3>
<p className="text-xs text-slate-500 mt-1">Chief Neurologist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-slate-200 group-hover:bg-slate-300 transition-colors duration-500">
<div className="w-full h-full flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:user" data-width="48"></span>
</div>
</div>
</div>
<h3 className="text-base font-medium text-slate-900">Dr. James Wilson</h3>
<p className="text-xs text-slate-500 mt-1">Senior Cardiologist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-slate-200 group-hover:bg-slate-300 transition-colors duration-500">
<div className="w-full h-full flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:user" data-width="48"></span>
</div>
</div>
</div>
<h3 className="text-base font-medium text-slate-900">Dr. Emily Davis</h3>
<p className="text-xs text-slate-500 mt-1">Pediatric Surgeon</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-slate-200 group-hover:bg-slate-300 transition-colors duration-500">
<div className="w-full h-full flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:user" data-width="48"></span>
</div>
</div>
</div>
<h3 className="text-base font-medium text-slate-900">Dr. Michael Ross</h3>
<p className="text-xs text-slate-500 mt-1">Orthopedic Specialist</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="book">
<div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
<div className="grid lg:grid-cols-2">
<div className="p-12 lg:p-20 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 to-transparent opacity-50"></div>
<div className="relative z-10">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">Ready to prioritize your health?</h2>
<p className="text-slate-400 font-light text-lg mb-8">Book an appointment today. Our digital scheduling system is fast, secure, and available 24/7.</p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<span className="iconify text-emerald-400 mt-1" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-slate-300 text-sm">Instant confirmation via email</span>
</div>
<div className="flex items-start gap-4">
<span className="iconify text-emerald-400 mt-1" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-slate-300 text-sm">No cancellation fees up to 24h prior</span>
</div>
<div className="flex items-start gap-4">
<span className="iconify text-emerald-400 mt-1" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-slate-300 text-sm">Direct insurance billing available</span>
</div>
</div>
</div>
<div className="relative z-10 mt-12 flex items-center gap-4 text-slate-500 text-xs">
<span className="iconify" data-icon="lucide:shield-check" data-width="16"></span>
                        HIPAA Compliant &amp; Secure
                    </div>
</div>
<div className="bg-white p-12 lg:p-20">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wide">First Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wide">Last Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wide">Email Address</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="jane@example.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wide">Department</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all appearance-none text-slate-600">
<option>General Practice</option>
<option>Cardiology</option>
<option>Pediatrics</option>
</select>
<span className="iconify absolute right-4 top-3.5 text-slate-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wide">Preferred Date</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all text-slate-600" type="date"/>
</div>
</div>
<div className="pt-2">
<button className="w-full py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-md flex justify-center items-center gap-2 group" type="submit">
                                Confirm Appointment
                                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:activity" data-width="14"></span>
</div>
<span className="text-slate-900 font-semibold tracking-tight">NOVA</span>
</a>
<p className="text-sm text-slate-500 mb-6">Advanced diagnostics and care for complex health needs.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Patient Care</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Find a Doctor</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Medical Services</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Patient Portal</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Pay Bill Online</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Nova</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">News &amp; Press</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Stay Updated</h4>
<p className="text-xs text-slate-500 mb-4">Subscribe to our newsletter for health tips.</p>
<div className="space-y-3">
<div className="flex gap-2">
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-slate-400" placeholder="Email address" type="email"/>
<button className="px-3 py-2 bg-slate-100 text-slate-900 rounded-md hover:bg-slate-200 text-sm font-medium transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
<div className="flex items-center gap-2">
<input className="custom-checkbox h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900/20 appearance-none border cursor-pointer" id="newsletter" type="checkbox"/>
<label className="text-xs text-slate-500 cursor-pointer select-none" htmlFor="newsletter">I agree to the privacy policy</label>
</div>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Nova Medical Center. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<a className="hover:text-slate-600" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

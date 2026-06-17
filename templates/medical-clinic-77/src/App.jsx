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



    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
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
      

<nav className="fixed top-0 w-full z-50 glass-effect border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:heart-pulse-bold-duotone" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight">MedCore Health</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-gray-600 hover:text-blue-600 transition-colors" href="#">Services</a>
<a className="text-gray-600 hover:text-blue-600 transition-colors" href="#">Specialists</a>
<a className="text-gray-600 hover:text-blue-600 transition-colors" href="#">Research</a>
<a className="text-gray-600 hover:text-blue-600 transition-colors" href="#">About</a>
<a className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2" href="#book-appointment">
<span>Book Appointment</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</nav>
<main className="max-w-7xl mx-auto pt-24 pb-20 px-4 sm:px-6 lg:px-8">

<div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between mb-16 opacity-0 animate-fade-in">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-6 uppercase tracking-wider">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
          Healthcare Excellence Certified
        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] font-semibold tracking-tight text-gray-900">
          Advanced Medical<br/>
<span className="font-normal text-blue-700">Care Solutions</span>
</h1>
<p className="text-lg text-gray-600 mt-6 leading-relaxed max-w-xl">
          Delivering cutting-edge healthcare with compassionate care, innovative technology, and evidence-based treatments for optimal patient outcomes.
        </p>
</div>

<div className="flex flex-col gap-6 lg:items-end opacity-0 animate-slide-left animate-delay-200">
<div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
<div className="flex space-x-1 text-blue-400">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div className="text-left">
<div className="font-semibold text-gray-900">4.9 Patient Rating</div>
<div className="text-sm text-gray-500">15,000+ reviews</div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-gray-600">Trusted by patients</span>
<div className="flex -space-x-3">
<img alt="Patient" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&amp;h=120&amp;fit=crop&amp;crop=face"/>
<img alt="Patient" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=120&amp;h=120&amp;fit=crop&amp;crop=face"/>
<img alt="Patient" className="w-10 h-10 object-cover border-white border-2 rounded-full shadow-sm" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=1080&amp;q=80"/>
<div className="w-10 h-10 bg-blue-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
<span className="text-xs font-semibold text-blue-700">15K+</span>
</div>
</div>
</div>
</div>
</div>

<section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 h-auto lg:h-[600px] mb-24">

<div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 lg:row-span-2 opacity-0 animate-scale-in animate-delay-400 h-[300px] lg:h-full">
<div className="relative rounded-3xl overflow-hidden shadow-xl group h-full">
<img alt="Medical professionals" className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover" src="https://images.unsplash.com/photo-1516670428252-df97bba108d1?w=1080&amp;q=80"/>
<div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-xs">
<div className="glass-effect p-4 lg:p-5 rounded-2xl shadow-xl">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
<iconify-icon icon="solar:stethoscope-bold-duotone" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold leading-tight">
                    Expert Medical Care
                  </h3>
<p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Board-certified physicians with 20+ years of experience.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2 opacity-0 animate-slide-up animate-delay-600 h-full">
<div className="h-full rounded-3xl bg-gradient-to-br from-blue-800 to-blue-900 text-white p-6 lg:p-8 relative overflow-hidden shadow-xl group">
<div className="absolute inset-0 opacity-10">
<div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/10"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur text-blue-100">
<iconify-icon icon="solar:medical-kit-bold-duotone" width="24"></iconify-icon>
</div>
<div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur">
                  Specialties
                </div>
</div>
<h3 className="text-xl lg:text-2xl font-semibold leading-tight mb-6">
                Comprehensive Healthcare
              </h3>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-300" icon="solar:heart-angle-linear"></iconify-icon>
<span>Cardiology &amp; Heart</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-300" icon="solar:bone-linear"></iconify-icon>
<span>Orthopedic Surgery</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-300" icon="solar:eye-linear"></iconify-icon>
<span>Ophthalmology</span>
</li>
</ul>
</div>
<button className="mt-6 w-full bg-white/10 hover:bg-white/20 backdrop-blur py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
              View Departments
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 opacity-0 animate-slide-left animate-delay-800 h-[200px] lg:h-full">
<div className="h-full rounded-3xl bg-red-50 p-5 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 group border border-red-100">
<div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bell-bing-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900 leading-tight">Emergency</h3>
<p className="text-xs text-red-600 mt-1 font-medium">24/7 Available</p>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-1 lg:row-span-1 opacity-0 animate-slide-up animate-delay-1000 h-[200px] lg:h-full">
<div className="h-full rounded-3xl bg-indigo-50 p-5 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 group border border-indigo-100">
<div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:test-tube-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900 leading-tight">Labs</h3>
<p className="text-xs text-indigo-600 mt-1 font-medium">Advanced Tech</p>
</div>
</div>
</div>
</section>

<div className="relative opacity-0 animate-fade-in animate-delay-200" id="book-appointment">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 rounded-[2.5rem] -z-10"></div>
<div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
<div className="grid lg:grid-cols-12 gap-0">

<div className="lg:col-span-5 bg-slate-900 text-white p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-blue-200 mb-8 border border-white/10">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
                            Online Scheduling
                        </div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">Request Your Appointment</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Experience world-class healthcare. Fill out the form and our team will get back to you within 2 hours to confirm your schedule.
                        </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-400">Emergency Line</div>
<div className="font-medium text-lg">+1 (800) 123-4567</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-400">Location</div>
<div className="font-medium text-lg">123 Medical Center Dr, NY</div>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-12 pt-12 border-t border-white/10">
<p className="text-sm text-slate-500">
                            "The attention to detail and care provided by the MedCore team is simply unmatched."
                        </p>
<div className="flex items-center gap-2 mt-4">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-xs text-slate-400 ml-2">Verified Patient</span>
</div>
</div>
</div>

<div className="lg:col-span-7 p-8 lg:p-14 bg-white">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
<input className="form-input block w-full pl-10 pr-3 py-3 rounded-xl text-sm" id="name" placeholder="John Doe" required="" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="phone">Phone Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<input className="form-input block w-full pl-10 pr-3 py-3 rounded-xl text-sm" id="phone" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<input className="form-input block w-full pl-10 pr-3 py-3 rounded-xl text-sm" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="date">Preferred Date</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<input className="form-input block w-full pl-10 pr-3 py-3 rounded-xl text-sm text-gray-500" id="date" type="date"/>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="department">Department</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:stomach-linear" width="20"></iconify-icon>
</div>
<select className="form-input block w-full pl-10 pr-3 py-3 rounded-xl text-sm appearance-none bg-none" id="department">
<option>General Medicine</option>
<option>Cardiology</option>
<option>Neurology</option>
<option>Orthopedics</option>
<option>Dental Care</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-gray-700" htmlFor="message">Medical Concerns (Optional)</label>
<textarea className="form-input block w-full px-4 py-3 rounded-xl text-sm" id="message" placeholder="Briefly describe your symptoms or reason for visit..." rows="3"></textarea>
</div>

<div className="flex items-start gap-3 pt-2">
<input className="custom-checkbox mt-0.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" id="consent" type="checkbox"/>
<label className="text-xs text-gray-500 leading-relaxed" htmlFor="consent">
                                I consent to having MedCore Health collect my details for appointment processing. View our <a className="text-blue-600 hover:underline" href="#">Privacy Policy</a>.
                            </label>
</div>

<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-4" type="submit">
<span>Confirm Appointment</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}

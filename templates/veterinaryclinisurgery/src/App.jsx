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
      

<div className="bg-red-50 border-b border-red-100 text-red-900 text-sm font-medium py-2 px-4 flex justify-center items-center gap-2 text-center relative z-50">
<iconify-icon height="18" icon="solar:danger-circle-linear" width="18"></iconify-icon>
<span>Night Emergency Vet Services Available in Petaling Jaya. <a className="underline hover:text-red-700 transition-colors" href="tel:0378805333">Call 03-7880 5333</a></span>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<iconify-icon className="text-zinc-700" height="24" icon="solar:cat-linear" width="24"></iconify-icon>
                PETS HEALTH
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#emergency">Emergency</a>
<a className="hover:text-zinc-900 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-zinc-900 transition-colors" href="#location">Location</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="tel:0378805333">
<iconify-icon height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    03-7880 5333
                </a>
<a className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-5 py-2.5 text-sm font-medium transition-colors inline-flex items-center gap-2 shadow-sm" href="#book">
                    Book Appointment
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-24 pb-32 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<span className="flex items-center gap-1 text-yellow-500">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-half-bold" width="14"></iconify-icon>
</span>
                        4.6 Rating from 667 Reviews
                    </div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-tight mb-6">
                        Advanced Medical Care for Your Best Friends.
                    </h1>
<p className="text-lg text-zinc-500 mb-8 max-w-lg leading-relaxed">
                        Trusted veterinary clinic in Petaling Jaya specializing in compassionate care for cats and dogs. From routine vaccinations to emergency night surgeries.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-6 py-3 text-base font-medium transition-colors text-center inline-flex justify-center items-center gap-2 shadow-sm" href="#book">
                            Schedule a Visit
                            <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 rounded-full px-6 py-3 text-base font-medium transition-colors text-center inline-flex justify-center items-center gap-2" href="tel:0378805333">
<iconify-icon height="18" icon="solar:phone-linear" width="18"></iconify-icon>
                            03-7880 5333
                        </a>
</div>
</div>

<div className="relative hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 to-white rounded-3xl transform rotate-3 scale-105 border border-zinc-200/50"></div>
<div className="relative bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight mb-6">Request Appointment</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">First Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Pet Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" placeholder="Luna" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2">Pet Type</label>
<div className="flex gap-4">
<label className="flex-1 relative cursor-pointer group">
<input checked="" className="peer sr-only" name="pet_type" type="radio"/>
<div className="w-full text-center bg-white border border-zinc-200 rounded-xl py-2 text-sm font-medium text-zinc-600 peer-checked:border-zinc-900 peer-checked:text-zinc-900 peer-checked:bg-zinc-50 transition-all flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:cat-linear" width="18"></iconify-icon> Cat
                                        </div>
</label>
<label className="flex-1 relative cursor-pointer group">
<input className="peer sr-only" name="pet_type" type="radio"/>
<div className="w-full text-center bg-white border border-zinc-200 rounded-xl py-2 text-sm font-medium text-zinc-600 peer-checked:border-zinc-900 peer-checked:text-zinc-900 peer-checked:bg-zinc-50 transition-all flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:bone-linear" width="18"></iconify-icon> Dog
                                        </div>
</label>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Service</label>
<div className="relative">
<select className="w-full appearance-none bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all text-zinc-900">
<option>General Checkup</option>
<option>Vaccination</option>
<option>Surgery</option>
<option>Other</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-zinc-900 text-white hover:bg-zinc-800 rounded-xl px-4 py-3 text-sm font-medium transition-colors mt-2 shadow-sm" type="button">
                                Continue
                            </button>
</form>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 w-[800px] h-[800px] bg-zinc-100/50 rounded-full blur-3xl pointer-events-none"></div>
</section>

<section className="py-24 bg-zinc-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Comprehensive Veterinary Services</h2>
<p className="text-base text-zinc-500">We offer a full spectrum of clinical services on-site to ensure your pet receives the highest standard of care without unnecessary referrals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all group">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:health-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Preventive Care</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Routine checkups, vaccinations, and parasite control to keep your pets healthy year-round.</p>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group/link" href="#">
                            Learn more <iconify-icon className="group-hover/link:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all group">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Diagnostics</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">On-site blood tests and advanced X-rays for rapid and accurate diagnosis of health issues.</p>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group/link" href="#">
                            Learn more <iconify-icon className="group-hover/link:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all group">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Surgery</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Fully equipped surgical suite for routine spay/neuter and complex soft tissue surgeries.</p>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group/link" href="#">
                            Learn more <iconify-icon className="group-hover/link:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="emergency">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-zinc-900 rounded-3xl overflow-hidden relative">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
<div className="relative p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
<div className="max-w-xl text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400 mb-6">
<iconify-icon height="14" icon="solar:alarm-linear" width="14"></iconify-icon>
                                Night Emergency Services
                            </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Pet Emergencies Don't Wait for Business Hours.</h2>
<p className="text-base text-zinc-400 leading-relaxed mb-8">
                                If your pet is experiencing severe trauma, difficulty breathing, or sudden illness after hours, our emergency team in Petaling Jaya is ready to help.
                            </p>
<ul className="space-y-3 text-sm text-zinc-300 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon> Immediate triage and stabilization
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon> Emergency surgery capabilities
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon> Oxygen therapy and critical care
                                </li>
</ul>
</div>
<div className="w-full md:w-auto shrink-0 flex flex-col gap-4">
<a className="bg-white text-zinc-900 hover:bg-zinc-100 rounded-full px-8 py-4 text-base font-semibold transition-colors text-center inline-flex justify-center items-center gap-2 w-full shadow-lg" href="tel:0378805333">
<iconify-icon className="text-red-500" height="20" icon="solar:phone-calling-bold" width="20"></iconify-icon>
                                Call 03-7880 5333
                            </a>
<p className="text-xs text-zinc-400 text-center">Please call ahead if possible so we can prepare.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">Visit Our Clinic</h2>
<p className="text-base text-zinc-500 mb-10">Conveniently located in Aman Suria, Petaling Jaya. Designed with accessibility in mind for all pet owners.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Address</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                                        38-G, Jalan PJU 1/45, Aman Suria,<br/>
                                        47301 Petaling Jaya, Selangor
                                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900">
<iconify-icon height="20" icon="solar:wheelchair-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Accessibility</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                                        Wheelchair-accessible entrance.<br/>
                                        Accessible restroom facilities on-site.
                                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900">
<iconify-icon height="20" icon="solar:parking-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Parking</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                                        Free street parking available.<br/>
                                        Free &amp; paid parking lots nearby.
                                    </p>
</div>
</div>
</div>
<div className="mt-10 pt-10 border-t border-zinc-200 flex flex-wrap gap-4">
<a className="bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 rounded-full px-5 py-2.5 text-sm font-medium transition-colors inline-flex items-center gap-2 shadow-sm" href="https://maps.google.com/?q=38-G,+Jalan+PJU+1/45,+Aman+Suria,+47301+Petaling+Jaya,+Selangor" rel="noopener noreferrer" target="_blank">
<iconify-icon height="18" icon="solar:routing-linear" width="18"></iconify-icon> Get Directions
                            </a>
</div>
</div>

<div className="bg-zinc-200 rounded-3xl h-[400px] lg:h-auto relative overflow-hidden border border-zinc-200/60 shadow-inner">
<div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400">
<iconify-icon className="mb-4 opacity-50" height="48" icon="solar:map-linear" width="48"></iconify-icon>
<span className="text-sm font-medium">Interactive Map Embed Area</span>
<span className="text-xs mt-1">38-G, Jalan PJU 1/45, Aman Suria</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<a className="text-base font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<iconify-icon className="text-zinc-700" height="20" icon="solar:cat-linear" width="20"></iconify-icon>
                    PETS HEALTH
                </a>
<p className="text-xs text-zinc-500">© 2024 Pets Health Veterinary Clinic And Surgery. All rights reserved.</p>
</div>
<div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Accessibility Statement</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}

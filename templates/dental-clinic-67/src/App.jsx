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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6">
<nav className="mx-auto max-w-7xl rounded-2xl backdrop-blur-xl border shadow-sm px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/80 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-3 group" href="https://justsmile.co.nz/">
<img alt="Symonds Street Dental Centre" className="h-10 w-auto object-contain" src="https://justsmile.co.nz/wp-content/themes/JustSmile/assets/img/logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-cyan-600" href="https://justsmile.co.nz/">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-cyan-600" href="https://justsmile.co.nz/the-team/">The Team</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-cyan-600" href="https://justsmile.co.nz/treatments/">Treatments</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-cyan-600" href="https://justsmile.co.nz/pricing/">Pricing</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-cyan-600" href="#contact-details">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-cyan-600 transition-colors" href="tel:093797380">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    09 379 7380
                </a>
<a className="inline-flex items-center gap-2 bg-slate-900 text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 hover:bg-cyan-600 text-white hover:-translate-y-0.5" href="https://apac.dentalhub.online/soe/new/%20?pid=NZSYM01">
                    Book Online
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
</div>
</nav>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-semibold tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                        Auckland City Dentist
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-slate-900">
                        Smile with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Confidence.</span>
</h1>
<p className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                        Based in Auckland City, Symonds Street Dental Centre offers dental treatments and long term dental care to patients, also benefiting from free parking on-site.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-cyan-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 hover:bg-cyan-600 text-white" href="https://apac.dentalhub.online/soe/new/%20?pid=NZSYM01">
                            Request Appointment
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-cyan-200 hover:text-cyan-600" href="https://justsmile.co.nz/treatments/">
                            Our Treatments
                        </a>
</div>

<div className="flex items-center gap-6 pt-4 text-sm text-slate-500 font-medium border-t border-slate-100 mt-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:map-point-linear" width="18"></iconify-icon>
                            73 Symonds Street, Grafton
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:car-linear" width="18"></iconify-icon>
                            Free On-site Parking
                        </div>
</div>
</div>

<div className="relative lg:h-[600px] w-full">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-full border border-slate-100 bg-white">

<img alt="Healthy Smile" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" src="https://justsmile.co.nz/wp-content/uploads/2015/06/banner1.jpg"/>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/90 p-6 rounded-2xl shadow-xl border border-white/50">
<div className="flex items-start gap-4">
<div className="bg-cyan-50 p-3 rounded-full text-cyan-500 shrink-0">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-bold text-lg">Interest Free Finance</h3>
<p className="text-slate-500 text-sm mt-1">Available on all treatments over $200. Get the care you need today.</p>
<a className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-cyan-600 mt-3 hover:text-cyan-700" href="https://justsmile.co.nz/treatments/finance/">
                                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-cyan-200/40"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-4xl mx-auto px-4 text-center">
<iconify-icon className="text-cyan-500 mb-6" icon="solar:crown-star-linear" width="48"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 leading-snug">
                Our Dental Clinic has been operating in the heart of Auckland for over <span className="text-cyan-500">60 years</span>, being in the current location since 1994.
            </h2>
<p className="text-lg text-slate-500 leading-relaxed font-medium">
                Everyone notices a beautiful confident smile. By offering a complete range of dental services we can provide you with the ability to smile with confidence and feel fantastic. Using state of the art technology and materials we aim to provide you with the highest quality dental care in a relaxing comfortable environment.
            </p>
</div>
</section>

<section className="py-24 bg-slate-50" id="treatments">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Our Services</h2>
<p className="text-slate-500 mt-2">Comprehensive care for your dental health.</p>
</div>
<a className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 flex items-center gap-1" href="https://justsmile.co.nz/treatments/">
                    View All Treatments <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1" href="https://justsmile.co.nz/treatments/full-mouth-examination/">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4">
<img alt="Full Mouth Examination" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://justsmile.co.nz/wp-content/uploads/2015/07/Examination-750x500.jpg"/>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">Full Mouth Examination</h3>
<p className="text-sm text-slate-400">Comprehensive check-up</p>
</div>
</a>

<a className="group bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1" href="https://justsmile.co.nz/treatments/hygienist/">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4">
<img alt="Hygienist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://justsmile.co.nz/wp-content/uploads/2015/07/Hygienist-750x500.jpg"/>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">Hygienist Services</h3>
<p className="text-sm text-slate-400">Professional cleaning</p>
</div>
</a>

<a className="group bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1" href="https://justsmile.co.nz/treatments/cosmetic-dentistry/">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4">
<img alt="Cosmetic Dentistry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://justsmile.co.nz/wp-content/uploads/2015/07/Cosmetic-750x500.jpg"/>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">Cosmetic Dentistry</h3>
<p className="text-sm text-slate-400">Whitening &amp; Veneers</p>
</div>
</a>

<a className="group bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1" href="https://justsmile.co.nz/treatments/finance/">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4">
<img alt="Finance" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" src="https://justsmile.co.nz/wp-content/uploads/2019/05/QCard_LTF-available-here_small.jpg"/>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">Finance Options</h3>
<p className="text-sm text-slate-400">QCard &amp; Payment plans</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-semibold tracking-wide uppercase mb-4">
                    Expert Care
                </div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">Meet Our Team</h2>
<p className="text-slate-500 mt-4 text-lg font-medium">
                    Our experienced and professional team of dentists and hygienists dedicated to your smile.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group flex flex-col items-center text-center">
<div className="relative overflow-hidden rounded-3xl bg-slate-100 aspect-[3/4] w-full mb-5 shadow-sm border border-slate-100">
<img alt="Andrew Grayson" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://justsmile.co.nz/wp-content/uploads/2015/07/andy-new.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="text-xl font-semibold text-slate-900">Andrew Grayson</h3>
<p className="text-cyan-600 font-medium text-sm mt-1">Dentist</p>
<a className="mt-3 text-sm text-slate-400 hover:text-cyan-600 transition-colors flex items-center gap-1" href="https://justsmile.co.nz/the-team/andrew-grayson/">
                        View Profile <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group flex flex-col items-center text-center">
<div className="relative overflow-hidden rounded-3xl bg-slate-100 aspect-[3/4] w-full mb-5 shadow-sm border border-slate-100">
<img alt="Karl Johnston" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://justsmile.co.nz/wp-content/uploads/2015/07/new-karl.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="text-xl font-semibold text-slate-900">Karl Johnston</h3>
<p className="text-cyan-600 font-medium text-sm mt-1">Dentist</p>
<a className="mt-3 text-sm text-slate-400 hover:text-cyan-600 transition-colors flex items-center gap-1" href="https://justsmile.co.nz/the-team/karl-johnston/">
                        View Profile <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group flex flex-col items-center text-center">
<div className="relative overflow-hidden rounded-3xl bg-slate-100 aspect-[3/4] w-full mb-5 shadow-sm border border-slate-100">
<img alt="Lisa Clarke" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://justsmile.co.nz/wp-content/uploads/2023/07/Lisa-Clark-700x1054.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="text-xl font-semibold text-slate-900">Lisa Clarke</h3>
<p className="text-cyan-600 font-medium text-sm mt-1">Dental Hygienist</p>
<a className="mt-3 text-sm text-slate-400 hover:text-cyan-600 transition-colors flex items-center gap-1" href="https://justsmile.co.nz/the-team/lisa-clarke/">
                        View Profile <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group flex flex-col items-center text-center">
<div className="relative overflow-hidden rounded-3xl bg-slate-100 aspect-[3/4] w-full mb-5 shadow-sm border border-slate-100">
<img alt="Heather Nicholls" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://justsmile.co.nz/wp-content/uploads/2024/09/Heather-Nicholls-700x1054.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h3 className="text-xl font-semibold text-slate-900">Heather Nicholls</h3>
<p className="text-cyan-600 font-medium text-sm mt-1">Dental Hygienist</p>
<a className="mt-3 text-sm text-slate-400 hover:text-cyan-600 transition-colors flex items-center gap-1" href="https://justsmile.co.nz/the-team/heather-nicholls/">
                        View Profile <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 pt-20 pb-10 rounded-t-[3rem]" id="contact-details">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

<div className="space-y-8">
<div>
<h3 className="text-white text-3xl font-semibold tracking-tight mb-2">Get in Touch</h3>
<p className="text-slate-400">We look forward to welcoming you.</p>
</div>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="tel:093797380">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone</p>
<p className="text-xl text-white font-medium">09 379 7380</p>
</div>
</a>
<a className="flex items-center gap-4 group" href="mailto:info@justsmile.co.nz">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</p>
<p className="text-xl text-white font-medium">info@justsmile.co.nz</p>
</div>
</a>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-slate-500">Location</p>
<p className="text-lg text-white font-medium">73 Symonds Street, Grafton,<br/>Auckland, New Zealand, 1010.</p>
<div className="mt-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 text-sm text-slate-400">
<span className="text-cyan-400 font-bold"><iconify-icon className="inline mb-0.5 mr-1" icon="solar:info-circle-linear"></iconify-icon>Parking Info:</span> 
                                    If you are coming by car we have free parking below the surgery - the entrance is on City Road, just off Symonds Street.
                                </div>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-sm">
<h4 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:clock-circle-linear"></iconify-icon>
                        Opening Times
                    </h4>
<ul className="space-y-4">
<li className="flex justify-between items-center border-b border-slate-700/50 pb-3">
<span className="font-medium text-slate-300">Monday</span>
<span className="font-semibold text-white">7.30am - 5.00pm</span>
</li>
<li className="flex justify-between items-center border-b border-slate-700/50 pb-3">
<span className="font-medium text-slate-300">Tuesday</span>
<span className="font-semibold text-white">7.30am - 5.00pm</span>
</li>
<li className="flex justify-between items-center border-b border-slate-700/50 pb-3">
<span className="font-medium text-slate-300">Wednesday</span>
<span className="font-semibold text-white">7.30am - 4.00pm</span>
</li>
<li className="flex justify-between items-center border-b border-slate-700/50 pb-3">
<span className="font-medium text-slate-300">Thursday</span>
<span className="font-semibold text-white">7.30am - 6.00pm</span>
</li>
<li className="flex justify-between items-center">
<span className="font-medium text-slate-300">Friday</span>
<span className="font-semibold text-white">7.30am - 2.00pm</span>
</li>
</ul>

<div className="mt-8 h-48 w-full rounded-2xl bg-slate-700 relative overflow-hidden group cursor-pointer">

<div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=-36.855,174.765&amp;zoom=14&amp;size=600x300&amp;sensor=false')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<a className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-cyan-50 transition-colors flex items-center gap-2" href="https://www.google.com/maps/place/Symonds+Street+Dental+Centre/@-36.855364,174.763328,15z" target="_blank">
<iconify-icon icon="solar:map-arrow-right-bold"></iconify-icon>
                                Open in Google Maps
                            </a>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-slate-500">
<p>© 2026 Symonds Street Dental Centre. All rights reserved.</p>
<div className="flex flex-wrap justify-center gap-6">
<a className="hover:text-cyan-400 transition-colors" href="https://justsmile.co.nz/privacy-policy/">Privacy Policy</a>
<a className="hover:text-cyan-400 transition-colors" href="https://justsmile.co.nz/cookie-policy/">Cookie Policy</a>
<a className="hover:text-cyan-400 transition-colors" href="https://justsmile.co.nz/site-map/">Site Map</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

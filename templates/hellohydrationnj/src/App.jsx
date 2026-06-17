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



        const toggleBtn = document.getElementById('mobile-toggle');
        const menu = document.getElementById('mobile-menu');
        const openIcon = document.getElementById('menu-open-icon');
        const closeIcon = document.getElementById('menu-close-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = menu.classList.contains('opacity-0');
            
            if (isClosed) {
                // Open
                menu.classList.remove('opacity-0', 'pointer-events-none');
                menu.classList.add('opacity-100', 'pointer-events-auto');
                openIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                // Close
                menu.classList.add('opacity-0', 'pointer-events-none');
                menu.classList.remove('opacity-100', 'pointer-events-auto');
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = ''; // Allow scrolling
            }
        }

        toggleBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all duration-300">

<div className="bg-[#046bd2] text-white py-2 text-xs font-medium text-center hidden md:block">
<span className="opacity-90">✨ Sign up today for 10% off your first service!</span>
</div>
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

<a className="flex items-center gap-2 group z-50 relative" href="#">
<div className="bg-[#8ABEAD] p-1.5 rounded-lg text-white">
<iconify-icon height="24" icon="solar:waterdrops-bold-duotone" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xl font-bold tracking-tight text-slate-900 leading-none">Hello Hydration</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-[#8ABEAD]">Medical Spa</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#046bd2] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#046bd2] transition-colors" href="#doctors">Doctors</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#046bd2] transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#046bd2] transition-colors" href="#new-patients">New Patients</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#046bd2] transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<div className="flex flex-col items-end mr-2">
<a className="text-xs font-bold text-slate-900 hover:text-[#046bd2] flex items-center gap-1" href="tel:+5514657083">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon> (551) 465-7083
                    </a>
<span className="text-[10px] text-slate-400 font-medium">Paramus • Hoboken • Secaucus</span>
</div>
<a className="inline-flex items-center gap-2 bg-[#046bd2] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:bg-[#045cb4] hover:-translate-y-0.5" href="https://hellohydration.janeapp.com/" target="_blank">
                    Book Now
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
</div>

<button aria-label="Toggle Menu" className="lg:hidden z-50 text-slate-900 p-2 -mr-2" id="mobile-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-open-icon" width="28"></iconify-icon>
<iconify-icon className="hidden" icon="solar:close-circle-linear" id="menu-close-icon" width="28"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-white z-40 pt-24 px-6 opacity-0 pointer-events-none transition-opacity duration-300 flex flex-col h-screen overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 text-center">
<a className="text-xl font-semibold text-slate-900 mobile-link" href="#services">Services</a>
<a className="text-xl font-semibold text-slate-900 mobile-link" href="#doctors">Doctors</a>
<a className="text-xl font-semibold text-slate-900 mobile-link" href="#locations">Locations</a>
<a className="text-xl font-semibold text-slate-900 mobile-link" href="#new-patients">New Patients</a>
<a className="text-xl font-semibold text-slate-900 mobile-link" href="#reviews">Reviews</a>
<a className="text-xl font-semibold text-slate-900 mobile-link" href="#contact">Contact</a>
<hr className="border-slate-100 my-2"/>
<a className="text-lg font-medium text-slate-600 flex items-center justify-center gap-2" href="tel:+5514657083">
<iconify-icon className="text-[#046bd2]" icon="solar:phone-calling-bold"></iconify-icon>
                    (551) 465-7083
                </a>
<a className="w-full bg-[#046bd2] text-white font-semibold text-lg py-4 rounded-xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2" href="https://hellohydration.janeapp.com/" target="_blank">
                    Book Appointment
                </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[#8ABEAD]/5 rounded-bl-[100px] -z-10 hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#046bd2] text-xs font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-[#046bd2] animate-pulse"></span>
                        NJ's Premier MedSpa
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-slate-900">
                        The Art of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#046bd2] to-[#8ABEAD]">Natural Aesthetics</span>
</h1>
<p className="text-lg text-slate-500 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Look and feel beautiful with physician-led care. We offer top-tier cosmetic treatments specializing in natural results for Paramus, Hoboken, and beyond.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex justify-center items-center gap-2 bg-[#046bd2] text-base font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 hover:bg-[#045cb4] text-white" href="https://hellohydration.janeapp.com/" target="_blank">
                            Book Appointment
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border bg-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-slate-50 text-slate-700 border-slate-200" href="tel:+5514657083">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            Call (551) 465-7083
                        </a>
</div>

<div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-semibold text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8ABEAD]" icon="solar:medal-star-circle-bold" width="20"></iconify-icon>
                            Physician Led
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            Natural Results
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="20"></iconify-icon>
                            Top Rated in NJ
                        </div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white">

<img alt="Natural Aesthetics Treatment" className="w-full h-[500px] lg:h-[650px] object-cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/90 p-6 rounded-2xl shadow-lg border border-white/50">
<div className="flex items-center gap-4">
<div className="bg-[#e6f0fa] p-3 rounded-full text-[#046bd2]">
<iconify-icon icon="solar:heart-angle-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-[#046bd2] mb-0.5">Our Promise</p>
<p className="font-semibold text-slate-900">Safety, Comfort &amp; Natural Beauty.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-[#046bd2] font-bold tracking-wider uppercase text-sm">Where to find us</span>
<h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Convenient New Jersey <span className="text-[#8ABEAD]">Locations</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#8ABEAD] transition-colors group">
<div className="w-10 h-10 rounded-full bg-[#e6f0fa] flex items-center justify-center text-[#046bd2] mb-4">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Paramus</h3>
<p className="text-sm text-slate-500 mb-4">1 Garden State Plaza<br/>Paramus, NJ 07652</p>
<a className="text-sm font-semibold text-[#046bd2] group-hover:text-[#045cb4] flex items-center gap-1" href="https://maps.google.com/maps?daddr=1%20Garden%20State%20Plaza,%20Paramus,%20NJ%2007652" target="_blank">
                        Get Directions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#8ABEAD] transition-colors group">
<div className="w-10 h-10 rounded-full bg-[#e6f0fa] flex items-center justify-center text-[#046bd2] mb-4">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Hoboken</h3>
<p className="text-sm text-slate-500 mb-4">132 Washington Street<br/>Hoboken, NJ 07030</p>
<a className="text-sm font-semibold text-[#046bd2] group-hover:text-[#045cb4] flex items-center gap-1" href="https://maps.google.com/maps?daddr=132%20Washington%20street,%20Hoboken,%20NJ%2007030" target="_blank">
                        Get Directions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#8ABEAD] transition-colors group">
<div className="w-10 h-10 rounded-full bg-[#e6f0fa] flex items-center justify-center text-[#046bd2] mb-4">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Secaucus</h3>
<p className="text-sm text-slate-500 mb-4">Secaucus, NJ<br/>Serving Hudson County</p>
<a className="text-sm font-semibold text-[#046bd2] group-hover:text-[#045cb4] flex items-center gap-1" href="#book">
                        Book Visit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#8ABEAD] transition-colors group">
<div className="w-10 h-10 rounded-full bg-[#e6f0fa] flex items-center justify-center text-[#046bd2] mb-4">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Parsippany</h3>
<p className="text-sm text-slate-500 mb-4">Parsippany-Troy Hills, NJ<br/>Serving Morris County</p>
<a className="text-sm font-semibold text-[#046bd2] group-hover:text-[#045cb4] flex items-center gap-1" href="#book">
                        Book Visit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f8fafc]" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Comprehensive <span className="text-[#046bd2]">Treatments</span></h2>
<p className="text-lg text-slate-500 font-medium max-w-xl">
                        Advanced aesthetic solutions tailored to your unique beauty goals.
                    </p>
</div>
<a className="text-[#046bd2] font-semibold flex items-center gap-2 hover:gap-3 transition-all" href="https://hellohydration.janeapp.com/">
                    View Full Menu <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#046bd2] flex items-center justify-center mb-6">
<iconify-icon icon="solar:syringe-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Injectables</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> Botox &amp; Wrinkle Relaxers
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> Dermal Fillers
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> Kybella/PCDC
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> PDO Threads
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> Sculptra
                        </li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#8ABEAD] flex items-center justify-center mb-6">
<iconify-icon icon="solar:face-scan-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Skin &amp; Face</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> HydraFacial
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> VI Peels
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> Skinvive
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> Hollywood Facial
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> AnteAGE Exosomes
                        </li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center mb-6">
<iconify-icon icon="solar:bolt-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-4">Technology &amp; Body</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> RF Microneedling
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> Body Sculpting
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> Laser Hair Removal
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> Medical Weight Loss
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-[#8ABEAD]" icon="solar:check-circle-linear"></iconify-icon> IV Hydration &amp; B12
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="doctors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                    Meet The <span className="text-[#046bd2]">Experts</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Led by experienced medical physicians and nurses, our team combines almost a decade of experience with a passion for natural aesthetics.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-3xl overflow-hidden cursor-pointer">
<img alt="Dr. Tameem" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
<h3 className="text-2xl font-bold mb-1">Dr. Tameem</h3>
<p className="text-[#8ABEAD] font-semibold text-sm uppercase tracking-wide">Medical Director / Physician</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden cursor-pointer">
<img alt="Elena" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
<h3 className="text-2xl font-bold mb-1">Elena</h3>
<p className="text-[#8ABEAD] font-semibold text-sm uppercase tracking-wide">Aesthetic Injector</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden cursor-pointer">
<img alt="Lorin" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
<h3 className="text-2xl font-bold mb-1">Lorin</h3>
<p className="text-[#8ABEAD] font-semibold text-sm uppercase tracking-wide">Aesthetic Nurse</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#046bd2] text-white rounded-t-[3rem] lg:rounded-t-[5rem]" id="new-patients">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/20">
                        New Patient Special
                    </div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get 10% Off Your First Visit</h2>
<p className="text-lg text-blue-100 font-medium leading-relaxed">
                        Start your journey to radiant, youthful skin today. Schedule your free consultation and discover why we are the preferred medical spa in Bergen &amp; Hudson County.
                    </p>
<div className="bg-white/10 p-6 rounded-2xl border border-white/10 mt-8">
<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
                            Buy Now, Pay Later
                        </h3>
<p className="text-blue-100 mb-6 text-sm">
                            We offer 0% APR interest-free financing options through our partners.
                        </p>
<div className="flex gap-4">
<div className="bg-white text-[#046bd2] px-4 py-2 rounded-lg font-bold text-sm">Cherry</div>
<div className="bg-white text-[#046bd2] px-4 py-2 rounded-lg font-bold text-sm">CareCredit</div>
</div>
</div>
</div>
<div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl">
<h3 className="text-2xl font-bold mb-6 text-center">Request Appointment</h3>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! We will contact you shortly to confirm your appointment.');">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-slate-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#046bd2] outline-none font-medium" placeholder="First Name" type="text"/>
<input className="w-full bg-slate-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#046bd2] outline-none font-medium" placeholder="Last Name" type="text"/>
</div>
<input className="w-full bg-slate-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#046bd2] outline-none font-medium" placeholder="Phone Number" type="tel"/>
<input className="w-full bg-slate-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#046bd2] outline-none font-medium" placeholder="Email Address" type="email"/>
<div className="relative">
<select className="w-full bg-slate-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#046bd2] outline-none font-medium appearance-none text-slate-500">
<option>Select Location</option>
<option>Paramus, NJ</option>
<option>Hoboken, NJ</option>
<option>Secaucus, NJ</option>
<option>Parsippany, NJ</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<select className="w-full bg-slate-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#046bd2] outline-none font-medium appearance-none text-slate-500">
<option>Preferred Service</option>
<option>Botox / Dysport</option>
<option>Dermal Fillers</option>
<option>HydraFacial</option>
<option>Microneedling</option>
<option>Consultation</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="w-full bg-[#8ABEAD] text-white font-bold py-4 rounded-xl hover:bg-[#7aa99a] transition-colors shadow-lg shadow-teal-500/20 mt-2" type="submit">
                            Submit Request
                        </button>
<p className="text-xs text-center text-slate-400 mt-2">
                            *Staff will contact you to confirm availability.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="reviews">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Loved by our <span className="text-[#046bd2]">Patients</span></h2>
<div className="flex justify-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm">
<p className="text-slate-600 mb-6 italic">"Amazing experience! All the nurses and assistants are so sweet. I went in for preventative Botox and absolutely fell in love with my results! Dr. T keeps it so natural and fresh."</p>
<div className="font-bold text-slate-900">- Christina C.</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm">
<p className="text-slate-600 mb-6 italic">"Dr. T offers friendly care and a relatively pain-free experience. The suite is clean, discreet and warm. I LOVE that my results are soft and natural."</p>
<div className="font-bold text-slate-900">- Arlettle R.</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm">
<p className="text-slate-600 mb-6 italic">"I had a lip flip done by Dr Tameem and he was awesome. Very knowledgeable and easy to talk to. The office is very cute and clean! I will definitely be back."</p>
<div className="font-bold text-slate-900">- Miranda A.</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-[#8ABEAD]" icon="solar:waterdrops-bold-duotone" width="28"></iconify-icon>
<span className="text-xl font-bold">Hello Hydration</span>
</div>
<p className="text-sm leading-relaxed text-slate-400">
                        The Art of Natural Aesthetics. Providing safe, effective, and physician-led cosmetic treatments in New Jersey.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-white hover:text-[#8ABEAD] transition-colors" href="https://www.instagram.com/hellohydrationnj">
<iconify-icon icon="mdi:instagram" width="24"></iconify-icon>
</a>
<a className="text-white hover:text-[#8ABEAD] transition-colors" href="https://www.tiktok.com/@hellohydrationmedspa">
<iconify-icon icon="ic:baseline-tiktok" width="24"></iconify-icon>
</a>
<a className="text-white hover:text-[#8ABEAD] transition-colors" href="https://www.youtube.com/channel/UCB0lIAeN9XOKfRFzbe-oujw">
<iconify-icon icon="mdi:youtube" width="24"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Media Appearance</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-4">Treatments</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Botox &amp; Dysport</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dermal Fillers</a></li>
<li><a className="hover:text-white transition-colors" href="#">RF Microneedling</a></li>
<li><a className="hover:text-white transition-colors" href="#">HydraFacial</a></li>
<li><a className="hover:text-white transition-colors" href="#">Medical Weight Loss</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#046bd2] mt-0.5" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>1 Garden State Plaza<br/>Paramus, NJ 07652</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#046bd2]" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<a className="hover:text-white" href="tel:+5514657083">(551) 465-7083</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#046bd2]" icon="solar:letter-linear" width="16"></iconify-icon>
<a className="hover:text-white" href="mailto:info@hellohydrationnj.com">info@hellohydrationnj.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                © 2024 Hello Hydration NJ. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}

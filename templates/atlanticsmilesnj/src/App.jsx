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



        // Mobile Menu Logic - Hidden by Default
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const iconOpen = document.getElementById('menu-icon-open');
        const iconClose = document.getElementById('menu-icon-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const header = document.getElementById('header');

        function toggleMenu() {
            // Toggle Opacity and Pointer Events
            const isClosed = mobileMenu.classList.contains('opacity-0');
            
            if (isClosed) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                iconOpen.classList.add('hidden');
                iconClose.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                iconOpen.classList.remove('hidden');
                iconClose.classList.add('hidden');
                document.body.style.overflow = ''; // Allow scrolling
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('opacity-0')) {
                    toggleMenu();
                }
            });
        });

        // Scroll shadow effect for header
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm" id="header">

<div className="hidden lg:block bg-[#589480] text-white py-2 px-4">
<div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium tracking-wide">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Egg Harbor Township &amp; Atlantic City
                    </span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon> New Patients Welcome
                    </span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-[#8ce6c7] transition-colors flex items-center gap-1.5" href="tel:6096451900">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon> (609) 645-1900
                    </a>
</div>
</div>
</div>
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

<a className="flex flex-col group relative z-50" href="#">
<span className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 font-serif group-hover:text-[#589480] transition-colors">
                    Atlantic Smiles
                </span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-900 hover:text-[#589480] transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#589480] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#589480] transition-colors" href="#about">About Us</a>
<div className="relative group h-full py-4">
<button className="text-sm font-medium text-slate-600 hover:text-[#589480] transition-colors flex items-center gap-1">
                        Locations <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-full left-0 w-56 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 p-2">
<a className="block px-4 py-2.5 text-sm rounded-lg hover:bg-slate-50 text-slate-600 hover:text-[#589480]" href="#locations">Egg Harbor Township</a>
<a className="block px-4 py-2.5 text-sm rounded-lg hover:bg-slate-50 text-slate-600 hover:text-[#589480]" href="#locations">Atlantic City</a>
</div>
</div>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="text-sm font-semibold text-slate-900 flex items-center gap-2 hover:text-[#589480]" href="tel:6096451900">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon> Call Now
                </a>
<a className="inline-flex items-center gap-2 bg-[#589480] text-sm font-medium px-6 py-2.5 rounded-full text-white shadow-lg shadow-[#589480]/20 hover:bg-[#467a68] transition-all hover:-translate-y-0.5" href="#book">
                    Request Appointment
                </a>
</div>

<button aria-label="Toggle Menu" className="lg:hidden relative z-50 p-2 text-slate-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon-open" width="28"></iconify-icon>
<iconify-icon className="hidden" icon="solar:close-circle-linear" id="menu-icon-close" width="28"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 z-40 bg-white opacity-0 pointer-events-none flex flex-col pt-24 px-6 pb-8 overflow-y-auto lg:hidden" id="mobile-menu">
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-xl font-serif text-slate-900" href="#">Home</a>
<a className="mobile-link text-xl font-serif text-slate-600" href="#services">Services</a>
<a className="mobile-link text-xl font-serif text-slate-600" href="#about">About Us</a>
<a className="mobile-link text-xl font-serif text-slate-600" href="#locations">Locations</a>
<hr className="border-slate-100 my-2"/>
<a className="flex items-center justify-center gap-2 text-lg font-medium text-[#589480]" href="tel:6096451900">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (609) 645-1900
                </a>
<a className="mobile-link w-full py-4 bg-[#589480] text-white rounded-xl text-lg font-medium shadow-md" href="#book">
                    Book Appointment
                </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Atlantic Smiles Dental Office" className="w-full h-full object-cover" src="https://img1.wsimg.com/isteam/ip/29830998-cdb7-4d67-b18f-27f67ec0f332/Screen%20Shot%202019-07-22%20at%209.51.43%20AM.png/:/rs=w:1920,m"/>

<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8ce6c7]/20 border border-[#8ce6c7]/30 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-[#8ce6c7]"></span>
<span className="text-xs font-semibold tracking-wide uppercase text-[#8ce6c7]">New Patients Welcome</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif leading-tight">
                    Dentistry for the <br/>
<span className="text-[#8ce6c7]">Whole Family.</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 font-medium max-w-lg leading-relaxed">
                    We are a team dedicated to improving and maintaining your oral health. Experience individualized care in Southern New Jersey.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#589480] text-base font-semibold px-8 py-4 rounded-full text-white shadow-xl shadow-[#589480]/30 hover:bg-[#467a68] transition-all hover:-translate-y-1" href="#book">
                        Book Appointment
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-base font-semibold px-8 py-4 rounded-full text-white hover:bg-white/20 transition-all" href="tel:6096451900">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon> (609) 645-1900
                    </a>
</div>

<div className="pt-8 flex flex-wrap gap-6 text-white/80 text-sm font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8ce6c7]" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Advanced Technology
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8ce6c7]" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Comfortable Care
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8ce6c7]" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        3 Locations
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif mb-6">
                    Comprehensive <span className="text-[#589480]">Services</span>
</h2>
<p className="text-lg text-slate-500">
                    From preventative care to cosmetic dentistry, we offer a full range of modern dental solutions tailored to meet your needs.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#589480]/30 hover:shadow-xl hover:shadow-[#589480]/10 transition-all duration-300 relative overflow-hidden">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#589480] shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 font-serif mb-3">Preventative Care</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Routine check-ups, cleanings, and digital x-rays to maintain optimal oral health for the whole family.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-bold text-[#589480] group-hover:gap-3 transition-all" href="#book">
                        Schedule Visit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#589480]/30 hover:shadow-xl hover:shadow-[#589480]/10 transition-all duration-300 relative overflow-hidden">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#589480] shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 font-serif mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Enhance your smile with whitening, veneers, and modern aesthetic solutions designed for you.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-bold text-[#589480] group-hover:gap-3 transition-all" href="#book">
                        Schedule Visit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#589480]/30 hover:shadow-xl hover:shadow-[#589480]/10 transition-all duration-300 relative overflow-hidden">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#589480] shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 font-serif mb-3">Family Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        We provide gentle, individualized care for patients of all ages, ensuring a comfortable experience.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-bold text-[#589480] group-hover:gap-3 transition-all" href="#book">
                        Schedule Visit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-10 -left-10 w-40 h-40 bg-[#8ce6c7]/20 rounded-full blur-3xl"></div>

<img alt="Dental Care Tools" className="relative z-10 w-full rounded-3xl shadow-2xl bg-white p-8 object-contain h-[400px]" src="https://img1.wsimg.com/isteam/ip/29830998-cdb7-4d67-b18f-27f67ec0f332/toothpaste-0002.png/:/rs=w:600,m"/>

<div className="absolute bottom-10 -right-4 md:-right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs z-20 border-l-4 border-[#589480]">
<p className="text-slate-700 font-medium italic">"We never use a one-size-fits-all approach to your dental plan."</p>
</div>
</div>
<div>
<span className="text-[#589480] font-bold tracking-wider uppercase text-sm">About Us</span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif mt-4 mb-6">
                        Individualized Care from <br/>
<span className="text-[#589480]">Experienced Professionals</span>
</h2>
<p className="text-slate-500 text-lg mb-6 leading-relaxed">
                        Our team values and respects our patients, and takes great pleasure in helping them maintain oral health goals. Our passion for dentistry, unwavering professional integrity, high standards of patient care and attention to details have earned our office a reputation as a leading dental practice in the Southern New Jersey Area.
                    </p>
<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-8">
<h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Meet Our Doctors</h3>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#589480]/10 flex items-center justify-center text-[#589480]">
<iconify-icon icon="solar:user-id-linear"></iconify-icon>
</div>
<span className="font-medium text-slate-700">Dr. Marc Pukenas</span>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#589480]/10 flex items-center justify-center text-[#589480]">
<iconify-icon icon="solar:user-id-linear"></iconify-icon>
</div>
<span className="font-medium text-slate-700">Dr. Apexa Mehta</span>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#589480]/10 flex items-center justify-center text-[#589480]">
<iconify-icon icon="solar:user-id-linear"></iconify-icon>
</div>
<span className="font-medium text-slate-700">Dr. Zahara Ayub</span>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#589480]/10 flex items-center justify-center text-[#589480]">
<iconify-icon icon="solar:user-id-linear"></iconify-icon>
</div>
<span className="font-medium text-slate-700">Dr. Deyanira Morgado</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-[#589480] font-bold tracking-wider uppercase text-sm">Visit Us</span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif mt-4">
                    Our Locations
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#589480] transition-all duration-300">
<div className="bg-slate-50 p-6 border-b border-slate-100">
<div className="flex justify-between items-start">
<h3 className="text-2xl font-bold text-slate-900 font-serif">Egg Harbor Township</h3>
<span className="px-3 py-1 bg-[#589480]/10 text-[#589480] text-xs font-bold rounded-full uppercase">Open</span>
</div>
</div>
<div className="p-8 space-y-6">
<div className="flex gap-4">
<iconify-icon className="text-[#589480] text-xl shrink-0 mt-1" icon="solar:map-point-linear"></iconify-icon>
<p className="text-slate-600 font-medium">3069 English Creek Ave, Suite 304<br/>Egg Harbor Township, NJ 08234</p>
</div>
<div className="flex gap-4">
<iconify-icon className="text-[#589480] text-xl shrink-0 mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<a className="text-slate-900 font-bold hover:text-[#589480]" href="tel:6096451900">(609) 645-1900</a>
</div>
<div className="pt-4 flex gap-3">
<a className="flex-1 text-center border border-slate-200 py-3 rounded-xl font-medium text-slate-700 hover:border-[#589480] hover:text-[#589480] transition-colors" href="https://maps.google.com/?q=3069+English+Creek+Ave+Suite+304+Egg+Harbor+Township+NJ+08234" target="_blank">
                                Directions
                            </a>
<a className="flex-1 text-center bg-[#589480] py-3 rounded-xl font-medium text-white hover:bg-[#467a68] transition-colors shadow-lg shadow-[#589480]/20" href="#book">
                                Book Now
                            </a>
</div>
</div>
</div>

<div className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#589480] transition-all duration-300">
<div className="bg-slate-50 p-6 border-b border-slate-100">
<div className="flex justify-between items-start">
<h3 className="text-2xl font-bold text-slate-900 font-serif">Atlantic City</h3>
<span className="px-3 py-1 bg-[#589480]/10 text-[#589480] text-xs font-bold rounded-full uppercase">Open</span>
</div>
</div>
<div className="p-8 space-y-6">
<div className="flex gap-4">
<iconify-icon className="text-[#589480] text-xl shrink-0 mt-1" icon="solar:map-point-linear"></iconify-icon>
<p className="text-slate-600 font-medium">Serving the Atlantic City Area<br/>Call for specific location details</p>
</div>
<div className="flex gap-4">
<iconify-icon className="text-[#589480] text-xl shrink-0 mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<a className="text-slate-900 font-bold hover:text-[#589480]" href="tel:6096451900">(609) 645-1900</a>
</div>
<div className="pt-4 flex gap-3">
<a className="flex-1 text-center border border-slate-200 py-3 rounded-xl font-medium text-slate-700 hover:border-[#589480] hover:text-[#589480] transition-colors" href="#book">
                                Details
                            </a>
<a className="flex-1 text-center bg-[#589480] py-3 rounded-xl font-medium text-white hover:bg-[#467a68] transition-colors shadow-lg shadow-[#589480]/20" href="#book">
                                Book Now
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#589480] relative overflow-hidden" id="book">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#8ce6c7 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="text-white">
<h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                        Ready for your <br/> <span className="text-[#8ce6c7]">New Smile?</span>
</h2>
<p className="text-lg text-slate-100 mb-8 font-medium">
                        Booking your next visit is simple. Fill out the form and we'll confirm your appointment shortly.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10">
<div className="w-12 h-12 rounded-full bg-white text-[#589480] flex items-center justify-center text-2xl">
<iconify-icon icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<div>
<p className="font-bold">Easy Scheduling</p>
<p className="text-sm text-white/80">Choose a time that works for you.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10">
<div className="w-12 h-12 rounded-full bg-white text-[#589480] flex items-center justify-center text-2xl">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<p className="font-bold">Insurance Accepted</p>
<p className="text-sm text-white/80">We work with most major providers.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-2xl shadow-slate-900/20">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! Your appointment request has been sent. We will contact you shortly to confirm.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#589480] focus:ring-1 focus:ring-[#589480] transition-all bg-slate-50" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#589480] focus:ring-1 focus:ring-[#589480] transition-all bg-slate-50" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#589480] focus:ring-1 focus:ring-[#589480] transition-all bg-slate-50" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-bold text-slate-700 mb-1">Preferred Location</label>
<select className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#589480] focus:ring-1 focus:ring-[#589480] bg-slate-50 appearance-none">
<option>Egg Harbor Township</option>
<option>Atlantic City</option>
</select>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-1">Preferred Day</label>
<select className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#589480] focus:ring-1 focus:ring-[#589480] bg-slate-50 appearance-none">
<option>Monday</option>
<option>Tuesday</option>
<option>Wednesday</option>
<option>Thursday</option>
<option>Friday</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-1">Reason for Visit</label>
<textarea className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#589480] focus:ring-1 focus:ring-[#589480] transition-all bg-slate-50" rows="3"></textarea>
</div>
<div className="pt-2">

<button className="w-full bg-[#589480] text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-[#589480]/20 hover:bg-[#467a68] transition-all flex items-center justify-center gap-2" type="submit">
                                Request Appointment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-center text-slate-400 mt-3">Our team will contact you to confirm the exact time.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 bg-slate-900 text-slate-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<span className="text-2xl font-bold text-white font-serif">Atlantic Smiles</span>
<p className="text-slate-400 leading-relaxed">
                        Leading dental practice in the Southern New Jersey Area. Dentistry for the whole family.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all" href="https://www.facebook.com/share/19aVf3FXBz/" target="_blank">
<iconify-icon icon="logos:facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all" href="https://www.instagram.com/atlanticsmiles?igsh=MXV6YmtrdHdvbjljaA==" target="_blank">
<iconify-icon icon="skill-icons:instagram"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold text-white mb-6 font-serif text-lg">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#589480] mt-1 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>3069 English Creek Ave, Suite 304<br/>Egg Harbor Township, NJ 08234</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#589480] shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white" href="tel:6096451900">(609) 645-1900</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6 font-serif text-lg">Quick Links</h4>
<ul className="space-y-3">
<li><a className="hover:text-[#589480] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#589480] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#589480] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#589480] transition-colors" href="#book">Request Appointment</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6 font-serif text-lg">Legal</h4>
<p className="text-sm text-slate-400 mb-4">
                        We use cookies to analyze website traffic and optimize your website experience.
                    </p>
<a className="text-xs text-[#589480] hover:text-white" href="#">Privacy Policy</a>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
<p>© 2025 Atlantic Smiles LLC. All Rights Reserved.</p>
<p className="text-slate-500">Designed with Care.</p>
</div>
</div>
</footer>



    </>
  );
}

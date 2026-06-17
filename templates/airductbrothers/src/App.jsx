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
},
colors: {
brand: {
50: '#f0f6fe',
100: '#deeafb',
200: '#c3daf8',
300: '#9bc4f3',
400: '#6ba5eb',
500: '#4887e2',
600: '#4473ba', /* Primary Brand Color from Source */
700: '#2d5493',
800: '#274678',
900: '#243b60',
}
},
boxShadow: {
'glow': '0 0 20px rgba(68, 115, 186, 0.3)',
}
}
}
}



        // Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('menu-closed')) {
                menu.classList.remove('menu-closed');
                menu.classList.add('menu-open');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('menu-closed');
                menu.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        }

        // Modal Logic
        function openModal() {
            const modal = document.getElementById('booking-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeModal() {
            const modal = document.getElementById('booking-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // Form Submission Mock
        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.classList.add('opacity-75');
            
            setTimeout(() => {
                alert('Thank you! Your request has been sent. A team member will contact you shortly.');
                closeModal();
                btn.innerText = originalText;
                btn.classList.remove('opacity-75');
                e.target.reset();
            }, 1000);
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-sm');
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                nav.classList.remove('shadow-sm');
                nav.style.background = 'rgba(255, 255, 255, 0.9)';
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
      

<div className="bg-brand-600 text-white text-xs md:text-sm font-medium py-2 text-center px-4 relative z-50">
<span className="inline-flex items-center gap-2">
<iconify-icon icon="solar:tag-price-linear" width="16"></iconify-icon>
            $50 Off Air Duct Cleaning — Mention Code: <strong>FEBRUARY WEB</strong>
</span>
</div>

<nav className="fixed top-8 w-full z-40 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="Air Duct Brothers" className="h-10 w-auto group-hover:opacity-90 transition-opacity" src="https://www.airductbrothers.com/wp-content/uploads/2015/10/air-duct-brothers.png"/>
<div className="hidden md:block">
<span className="block text-sm font-bold text-gray-900 leading-none">AIR DUCT</span>
<span className="block text-sm font-medium text-brand-600 leading-none tracking-wide">BROTHERS</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-brand-600" href="tel:2013475383">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    (201) 347-5383
                </a>
<button className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-lg shadow-brand-200 transition-all hover:-translate-y-0.5" onclick="openModal()">
                    Book Appointment
                </button>
</div>

<button className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 z-50 relative" onclick="toggleMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<div className="menu-closed fixed inset-0 z-40 lg:hidden" id="mobile-menu">

<div className="absolute inset-0 bg-black/20 backdrop-blur-sm" id="mobile-menu-overlay" onclick="toggleMenu()"></div>

<div className="absolute top-0 left-0 w-full bg-white shadow-xl pt-28 pb-8 px-6 border-b border-gray-100 flex flex-col gap-6" id="mobile-menu-content">
<div className="flex flex-col space-y-4">
<a className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-2" href="#services" onclick="toggleMenu()">Services</a>
<a className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-2" href="#locations" onclick="toggleMenu()">Locations</a>
<a className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-2" href="#gallery" onclick="toggleMenu()">Before &amp; After</a>
<a className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-2" href="#reviews" onclick="toggleMenu()">Reviews</a>
</div>
<div className="flex flex-col gap-3 mt-4">
<a className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-900 font-semibold py-3.5 rounded-xl" href="tel:2013475383">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Call (201) 347-5383
                </a>
<button className="w-full bg-brand-600 text-white font-semibold py-3.5 rounded-xl shadow-md" onclick="toggleMenu(); openModal()">
                    Request Appointment
                </button>
</div>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900">

<div className="absolute inset-0 z-0">
<img alt="Air Duct Cleaning NJ" className="w-full h-full object-cover opacity-60" src="https://www.airductbrothers.com/wp-content/uploads/2015/10/banner_img1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-200 text-xs font-semibold mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                    Fully Insured &amp; Bonded
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                    New Jersey's Best Air Duct Cleaning Services
                </h1>
<p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                    North New Jersey's trusted experts for industrial, commercial, and residential air quality. We treat your home like a castle with state-of-the-art equipment.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-base font-semibold px-8 py-4 rounded-xl shadow-glow transition-all hover:-translate-y-1" onclick="openModal()">
                        Get a Free Quote
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<a className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white text-base font-semibold px-8 py-4 rounded-xl transition-all" href="tel:2013475383">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        (201) 347-5383
                    </a>
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-6">
<div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-3">
<img alt="BBB Accredited" className="h-10 w-auto" src="https://seal-newjersey.bbb.org/seals/blue-seal-200-42-bbb-90237225.png"/>
<div className="text-xs font-medium text-gray-500">
<strong className="block text-gray-900">BBB Accredited</strong>
                        A+ Rating
                    </div>
</div>
<div className="flex items-center gap-3">
<img alt="Google Reviews" className="h-8 w-auto" src="https://www.airductbrothers.com/wp-content/uploads/2015/10/google.png"/>
<div className="text-xs font-medium text-gray-500">
<strong className="block text-gray-900">5-Star Rated</strong>
                        Verified Reviews
                    </div>
</div>
<div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
<iconify-icon className="text-brand-600" icon="solar:shield-check-linear" width="24"></iconify-icon>
                    Licensed &amp; Fully Insured
                </div>
<div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
<iconify-icon className="text-brand-600" icon="solar:clock-circle-linear" width="24"></iconify-icon>
                    Timely &amp; Reliable
                </div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Expert Cleaning Services</h2>
<p className="text-gray-600">From industrial HVAC systems to residential dryer vents, our certified technicians ensure complete satisfaction.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="service-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer" onclick="openModal()">
<div className="icon-wrapper w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 transition-all duration-300">
<iconify-icon icon="solar:wind-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Air Duct Cleaning</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">
                        High-pressure pneumatic cleaning of diffusers, branches, plenums, blower fans, and coils. Removes dust, dirt, and contaminants.
                    </p>
<span className="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="service-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer" onclick="openModal()">
<div className="icon-wrapper w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 transition-all duration-300">
<iconify-icon icon="solar:fire-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Dryer Vent Experts</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">
                        Remove lint and hazards. Clogged dryer vents are a leading cause of house fires. Recommended cleaning every year.
                    </p>
<span className="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="service-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer" onclick="openModal()">
<div className="icon-wrapper w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 transition-all duration-300">
<iconify-icon icon="solar:drop-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Water Damage</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">
                        Restoration for flooded areas. Includes air scrubbing, drying, sanitizing, and mold remediation to restore original condition.
                    </p>
<span className="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="service-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer" onclick="openModal()">
<div className="icon-wrapper w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 transition-all duration-300">
<iconify-icon icon="solar:sofa-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Steam Cleaning</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">
                        Deep carpet, tile, and upholstery cleaning using high-temperature steam and eco-friendly detergents.
                    </p>
<span className="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Air Duct Cleaning Tech" className="w-full h-full object-cover" src="https://www.airductbrothers.com/wp-content/uploads/2015/10/intro-img.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-bold text-xl">Commercial &amp; Residential</p>
<p className="text-sm text-gray-200">State of the art equipment</p>
</div>
</div>
<div>
<h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">The Right Choice for Clean Air</h2>
<p className="text-gray-600 mb-6 leading-relaxed">
                        Choosing the right company is critical. We have years of experience dealing with everything from cleaning industrial HVAC systems in hospitals to steam cleaning area rugs in living rooms.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-600 flex-shrink-0 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-gray-700 text-sm"><strong>Fully Insured &amp; Bonded</strong> for complete peace of mind.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-600 flex-shrink-0 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-gray-700 text-sm"><strong>Government &amp; Educational Facilities</strong> trust us (Schools, Military Bases).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-600 flex-shrink-0 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-gray-700 text-sm"><strong>Transparent Pricing</strong> with no hidden fees.</span>
</li>
</ul>
<button className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-lg font-medium transition-colors" onclick="openModal()">
                        Request Consultation
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-bold text-gray-900 mb-2">Service Areas</h2>
<p className="text-gray-600">Proudly serving North New Jersey and parts of New York.</p>
</div>
<a className="text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-1" href="#contact">
                    View Map <iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="relative h-40 rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all">
<img alt="Hudson County" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://www.airductbrothers.com/wp-content/uploads/2022/10/hudson-county-nj.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white font-bold">Hudson County, NJ</div>
</div>
<div className="relative h-40 rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all">
<img alt="Ocean County" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://www.airductbrothers.com/wp-content/uploads/2022/10/ocean-county-nj.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white font-bold">Ocean County, NJ</div>
</div>
<div className="relative h-40 rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all">
<img alt="Union County" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://www.airductbrothers.com/wp-content/uploads/2022/10/union-county-nj.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white font-bold">Union County, NJ</div>
</div>
<div className="relative h-40 rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all">
<img alt="Rockland County" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://www.airductbrothers.com/wp-content/uploads/2022/10/rockland-county-ny.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white font-bold">Rockland County, NY</div>
</div>

<div className="col-span-2 md:col-span-4 mt-4 text-center">
<p className="text-sm text-gray-500">Also serving: Sussex, Essex, Monmouth, and Somerset Counties.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white" id="reviews">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-brand-200 text-6xl mb-6" icon="solar:quote-up-bold"></iconify-icon>
<blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-normal mb-8">
                "Excellent service, 100 percent satisfied, will definitely recommend to anyone that is interested in a good air duct cleaning. Two thumbs up."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<img alt="Danny Diaz" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://www.airductbrothers.com/wp-content/uploads/2015/10/viewer_img1.jpg"/>
<div className="text-left">
<div className="font-bold text-gray-900">Danny Diaz</div>
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-t border-gray-100" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Real Results (Before &amp; After)</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
<img alt="Dirty Vent" className="rounded-lg w-full h-48 object-cover" src="https://www.airductbrothers.com/wp-content/uploads/2015/10/before_img3.jpg"/>
</div>
<div className="relative">
<span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
<img alt="Clean Vent" className="rounded-lg w-full h-48 object-cover" src="https://www.airductbrothers.com/wp-content/uploads/2015/10/after_img3.jpg"/>
</div>
</div>
<p className="text-center mt-4 font-medium text-gray-700">Commercial Ventilation</p>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hidden md:block">
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
<img alt="Dirty Duct" className="rounded-lg w-full h-48 object-cover" src="https://www.airductbrothers.com/wp-content/uploads/2015/10/before_img2.jpg"/>
</div>
<div className="relative">
<span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
<img alt="Clean Duct" className="rounded-lg w-full h-48 object-cover" src="https://www.airductbrothers.com/wp-content/uploads/2015/10/after_img2.jpg"/>
</div>
</div>
<p className="text-center mt-4 font-medium text-gray-700">Residential Air Duct</p>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

<div>
<img alt="Air Duct Brothers" className="h-10 mb-6 brightness-0 invert" src="https://www.airductbrothers.com/wp-content/uploads/2015/10/air-duct-brothers.png"/>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                    A family-owned business performing wide variety of HVAC, air duct, and cleaning services. Large enough to handle any job, small enough to care.
                </p>
<img alt="BBB" className="h-10 opacity-80" src="https://seal-newjersey.bbb.org/seals/blue-seal-200-42-bbb-90237225.png"/>
</div>

<div>
<h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-400 text-sm">
<iconify-icon className="text-brand-400 text-lg mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>
<strong>Main Office:</strong><br/>
                            291 Maple Ave<br/>
                            Wallington, NJ 07057
                        </span>
</li>
<li className="flex items-center gap-3 text-gray-400 text-sm">
<iconify-icon className="text-brand-400 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:2013475383">(201) 347-5383</a>
</li>
<li className="flex items-center gap-3 text-gray-400 text-sm">
<iconify-icon className="text-brand-400 text-lg" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:airductbrothers@gmail.com">airductbrothers@gmail.com</a>
</li>
</ul>
</div>

<div>
<h3 className="text-lg font-bold mb-6 text-white">Services</h3>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-brand-400 transition-colors" href="#">Air Duct Cleaning</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Dryer Vent Cleaning</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Water Damage Restoration</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Steam Cleaning</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 mt-8 text-center text-xs text-gray-500 max-w-7xl mx-auto px-6">
<p>© 2026 Air Duct Brothers. All Rights Reserved.</p>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="booking-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden transform transition-all scale-100">

<div className="bg-brand-600 px-6 py-4 flex items-center justify-between">
<h3 className="text-white font-bold text-lg">Request Appointment</h3>
<button className="text-white/80 hover:text-white" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<form className="p-6 space-y-4" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Name</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Phone</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500" placeholder="(201) 555-0123" required="" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Email</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Location</label>
<select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
<option>Hudson County</option>
<option>Ocean County</option>
<option>Union County</option>
<option>Sussex County</option>
<option>Rockland County</option>
<option>Other</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Service</label>
<select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
<option>Air Duct Cleaning</option>
<option>Dryer Vent Cleaning</option>
<option>Water Damage</option>
<option>Steam Cleaning</option>
<option>Commercial/Industrial</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Preferred Time</label>
<select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500">
<option>As soon as possible</option>
<option>Morning (8am - 12pm)</option>
<option>Afternoon (12pm - 5pm)</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Message</label>
<textarea className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500" placeholder="Describe your issue..." rows="3"></textarea>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-95" type="submit">
                    Submit Request
                </button>
<p className="text-[10px] text-center text-gray-400">
                    *Staff will receive this notification instantly. We typically reply within 1 hour.
                </p>
</form>
</div>
</div>



    </>
  );
}

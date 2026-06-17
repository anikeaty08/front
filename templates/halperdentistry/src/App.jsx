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
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', /* Vivid Cyan Blue reference */
600: '#0284c7',
900: '#0c4a6e',
950: '#082f49',
}
}
}
}
}



        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Open: remove hidden, add visible styles
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                // Close
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = ''; // Restore scrolling
            }
        }

        menuToggle.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">

<div className="hidden lg:block bg-brand-950 text-white text-xs py-2">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer">
<iconify-icon className="text-base" icon="solar:map-point-linear"></iconify-icon>
                        150 White Plains Road, Tarrytown, NY 10591
                    </span>
<span className="flex items-center gap-2 opacity-90 hover:opacity-100 cursor-pointer">
<iconify-icon className="text-base" icon="solar:clock-circle-linear"></iconify-icon>
                        Mon - Thu: 9-5 | Fri: 9-3
                    </span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-brand-200 transition-colors font-medium" href="tel:9146313880">Call Us: (914) 631-3880</a>
</div>
</div>
</div>
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">

<a className="flex items-center gap-2.5 z-50 relative" href="#">
<div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
<iconify-icon icon="solar:shield-star-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-slate-900 leading-none">Halper Dentistry</span>
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 leading-none mt-1">Est. 1969</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#services">Treatments</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#doctors">Our Doctors</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#new-patients">New Patients</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#locations">Location</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" href="#book">
                    Request Appointment
                    <iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
</a>
</div>

<button aria-label="Toggle Menu" className="lg:hidden p-2 text-slate-900 z-50 relative" id="menu-toggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl opacity-0 pointer-events-none flex flex-col pt-24 px-6 pb-6 lg:hidden" id="mobile-menu">
<div className="flex flex-col gap-6 text-lg font-medium text-slate-900">
<a className="mobile-link py-2 border-b border-slate-100" href="#home">Home</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#services">Treatments</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#doctors">Meet The Doctors</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#new-patients">New Patients</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#locations">Contact &amp; Location</a>
</div>
<div className="mt-auto flex flex-col gap-4">
<a className="w-full justify-center inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-900 text-base font-medium px-5 py-3.5 rounded-xl hover:bg-slate-50 transition-all" href="tel:9146313880">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                    (914) 631-3880
                </a>
<a className="mobile-link w-full justify-center inline-flex items-center gap-2 bg-brand-600 text-white text-base font-medium px-5 py-3.5 rounded-xl shadow-xl shadow-brand-500/20 hover:bg-brand-700 transition-all" href="#book">
                    Request Appointment
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white" id="home">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-brand-500"></span>
                        Serving Tarrytown Since 1969
                    </div>
<h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Three Generations of <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">Cosmetic Dentistry</span>
</h1>
<p className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                        State-of-the-art dental care in a caring, friendly atmosphere. From our family to yours, providing the best in dental care for nearly six decades.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-brand-600 text-white text-base font-semibold px-8 py-4 rounded-full shadow-xl shadow-brand-500/20 hover:bg-brand-700 transition-all hover:-translate-y-1" href="#book">
                            Book Appointment
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 text-base font-semibold px-8 py-4 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all" href="tel:9146313880">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                            (914) 631-3880
                        </a>
</div>

<div className="pt-8 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-4 items-center text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:medal-star-linear"></iconify-icon>
                            "Top Dentists" Award
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-500 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                            Family Owned &amp; Operated
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-lg" icon="solar:shield-check-linear"></iconify-icon>
                            Most Insurance Accepted
                        </div>
</div>
</div>

<div className="relative lg:h-[600px] h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 group">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>

<img alt="Halper Dentistry Office Tarrytown" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://www.halperdentistry.com/wp-content/uploads/sites/352/2012/11/OFFICE-PHOTO-11-201-1024x682.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
<p className="text-xs font-bold uppercase tracking-wider mb-2 text-brand-200">Our Promise</p>
<p className="text-xl font-semibold">Personalized care. <br/>From our family to yours.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4">Comprehensive Treatments</h2>
<p className="text-slate-500 text-lg">Whether you need a routine checkup or a complete smile makeover, our team covers the full spectrum of modern dentistry.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-100 transition-all group">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cosmetic Dentistry</h3>
<ul className="space-y-2 mb-6 text-slate-500 text-sm">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Porcelain Veneers</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Teeth Whitening</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Dental Bonding</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Clear Braces</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-100 transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Restorative Care</h3>
<ul className="space-y-2 mb-6 text-slate-500 text-sm">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Dental Implants</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Crowns &amp; Bridges</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Dentures</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Inlays &amp; Onlays</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-100 transition-all group">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">General &amp; Family</h3>
<ul className="space-y-2 mb-6 text-slate-500 text-sm">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Fillings / Restorations</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Pediatric Dentistry</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Dental Sealants</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>Nitrous Oxide</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="doctors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div className="max-w-xl">
<span className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Meet Us</span>
<h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mt-2 tracking-tight">Expert Care. <br/>Compassionate Touch.</h2>
</div>
<p className="text-slate-500 max-w-sm">
                    Named "Top Dentists" by Westchester Magazine, our doctors are dedicated to continuing a legacy of excellence started in 1969.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-100">
<div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
<img alt="Dr. Ira S. Halper" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" src="https://www.halperdentistry.com/wp-content/uploads/sites/352/2012/11/E6A3625B-45F5-4263-9D2E-F3A349BE97603.jpg"/>
</div>
<div className="p-8 bg-white">
<h3 className="text-2xl font-bold text-slate-900">Dr. Ira S. Halper, D.D.S.</h3>
<p className="text-brand-600 font-medium mb-4">General &amp; Cosmetic Dentist</p>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Practicing a full scope of general and cosmetic dentistry with expertise ranging from porcelain veneers to dental implants.
                        </p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-100">
<div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
<img alt="Dr. Sara Halper" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" src="https://www.halperdentistry.com/wp-content/uploads/sites/352/2012/11/544361CF-5E71-4686-A965-3B95FC26EBB02.jpg"/>
</div>
<div className="p-8 bg-white">
<h3 className="text-2xl font-bold text-slate-900">Dr. Sara Halper, D.D.S.</h3>
<p className="text-brand-600 font-medium mb-4">General &amp; Cosmetic Dentist</p>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            A third-generation dentist committed to providing the highest quality of care in a comfortable environment.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 relative" id="new-patients">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">New Patient Registration</h2>
<p className="text-slate-600 text-lg mb-8">
                        Save time during your first visit by filling out our secure online forms from the comfort of your home.
                    </p>
<div className="flex flex-col gap-4">
<a className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 hover:border-brand-200 group" href="https://portal.pbhs.com/Truform/01fc364a-f13a-4402-bfc8-7663bcec3d31/Submission/Create" target="_blank">
<div className="flex items-center gap-4">
<div className="p-3 bg-brand-100 text-brand-600 rounded-xl group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-plus-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Adult Registration Form</h4>
<p className="text-sm text-slate-500">Secure Online Form</p>
</div>
</div>
<iconify-icon className="text-slate-400 group-hover:text-brand-600" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 hover:border-brand-200 group" href="https://mysecurepractice.com/Truform/80ee7708-3b74-4170-9ca2-453ea246a4b2/Submission/Create" target="_blank">
<div className="flex items-center gap-4">
<div className="p-3 bg-pink-100 text-pink-600 rounded-xl group-hover:bg-pink-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Child Registration Form</h4>
<p className="text-sm text-slate-500">Secure Online Form</p>
</div>
</div>
<iconify-icon className="text-slate-400 group-hover:text-pink-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10">
<iconify-icon icon="solar:quote-up-bold" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex gap-1 text-yellow-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-2xl font-medium leading-relaxed mb-6">
                            "Dr. Halper redesigned my smile with veneers. The results are natural and stunning. The staff made me feel like family."
                        </blockquote>
<div className="flex items-center gap-4">
<a className="text-sm font-semibold hover:text-brand-300 transition-colors flex items-center gap-2" href="https://schedule.solutionreach.com/scheduling/reviews/5129?limit=0" target="_blank">
                                Read All Reviews on SolutionReach
                                <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1 space-y-6">
<h2 className="text-3xl font-bold text-slate-900">Tarrytown Location</h2>
<div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
<ul className="space-y-6">
<li className="flex gap-4">
<div className="mt-1 text-brand-600"><iconify-icon icon="solar:map-point-bold"></iconify-icon></div>
<div>
<h4 className="font-bold text-slate-900">Visit Us</h4>
<p className="text-slate-600">150 White Plains Road<br/>Tarrytown, NY 10591</p>
<a className="text-sm text-brand-600 font-semibold mt-1 inline-flex items-center gap-1 hover:underline" href="https://maps.google.com/?q=150+White+Plains+Road,+Tarrytown,+NY+10591" target="_blank">Get Directions</a>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 text-brand-600"><iconify-icon icon="solar:phone-calling-bold"></iconify-icon></div>
<div>
<h4 className="font-bold text-slate-900">Call Us</h4>
<p className="text-slate-600"><a className="hover:text-brand-600" href="tel:9146313880">(914) 631-3880</a></p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 text-brand-600"><iconify-icon icon="solar:clock-circle-bold"></iconify-icon></div>
<div>
<h4 className="font-bold text-slate-900">Hours</h4>
<p className="text-slate-600 text-sm">Mon - Thu: 9:00 AM - 5:00 PM</p>
<p className="text-slate-600 text-sm">Friday: 9:00 AM - 3:00 PM</p>
</div>
</li>
</ul>
</div>

<div className="h-64 rounded-3xl overflow-hidden bg-slate-200 relative">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.927237887342!2d-73.8475!3d41.0664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzAwLjAiTiA3M8KwNTAnNTEuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-white shadow-2xl shadow-slate-900/10" id="book">
<div className="mb-8">
<h2 className="text-3xl font-bold mb-2">Request an Appointment</h2>
<p className="text-slate-300">Fill out the form below and our team will reach out to confirm your slot.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. We will contact you shortly to confirm.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-white placeholder-slate-500" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-300 ml-1">Phone Number</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-white placeholder-slate-500" placeholder="(914) 555-0123" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-white placeholder-slate-500" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-300 ml-1">Reason for Visit</label>
<select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-white appearance-none cursor-pointer">
<option>General Checkup / Cleaning</option>
<option>Cosmetic Consultation</option>
<option>Tooth Pain / Emergency</option>
<option>New Patient Visit</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-300 ml-1">Preferred Day/Time</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-white placeholder-slate-500" placeholder="e.g. Tuesday Mornings" type="text"/>
</div>
<button className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-brand-500/20 mt-4 flex items-center justify-center gap-2" type="submit">
                            Submit Request
                            <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
<p className="text-xs text-slate-400 text-center mt-4">*Note: This form connects directly to our secure front desk system.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-slate-900 list-none">
                        Do you accept insurance?
                        <span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
                        Yes, Halper Dentistry accepts most major dental insurance plans. We will gladly process your claim. Please call our office at (914) 631-3880 to verify your specific coverage.
                    </p>
</details>
<details className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-slate-900 list-none">
                        Are you accepting new patients?
                        <span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
                        Absolutely! We welcome new patients of all ages. You can save time by filling out our secure online registration forms before your visit.
                    </p>
</details>
<details className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-slate-900 list-none">
                        What cosmetic services do you offer?
                        <span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
                        We offer a full range of cosmetic treatments including Porcelain Veneers, Teeth Whitening (Zoom), Dental Bonding, and Clear Braces to help redesign your smile.
                    </p>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-star-linear" width="18"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900">Halper Dentistry</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed">
                        Three generations of dental excellence in Tarrytown, NY. Cosmetic and General Dentistry in a caring environment.
                    </p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Practice</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600" href="#home">Home</a></li>
<li><a className="hover:text-brand-600" href="#doctors">Meet The Doctors</a></li>
<li><a className="hover:text-brand-600" href="#locations">Location</a></li>
<li><a className="hover:text-brand-600" href="https://www.halperdentistry.com/disclaimer/">Disclaimer</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Treatments</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-brand-600" href="#">Dental Implants</a></li>
<li><a className="hover:text-brand-600" href="#">Veneers</a></li>
<li><a className="hover:text-brand-600" href="#">Teeth Whitening</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>150 White Plains Road</li>
<li>Tarrytown, NY 10591</li>
<li><a className="hover:text-brand-600 font-medium" href="tel:9146313880">(914) 631-3880</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2026 Halper Dentistry. All Rights Reserved.</p>
<p>Website Redesign Concept.</p>
</div>
</div>
</footer>



    </>
  );
}

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



        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });

        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Vehicle selection from cards
        document.querySelectorAll('.vehicle-select').forEach(button => {
            button.addEventListener('click', () => {
                const vehicle = button.dataset.vehicle;
                document.getElementById('vehicleSelect').value = vehicle;
                document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Form submission
        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your booking request! We will contact you within 15 minutes to confirm.');
        });

        // Reinitialize icons after dynamic content
        setTimeout(() => {
            lucide.createIcons();
        }, 100);
    
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
      

<a className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110" href="https://wa.me/27123456789" target="_blank">
<svg fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
</svg>
</a>

<nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tighter">PC</span>
</div>
<span className="text-lg font-semibold tracking-tight">Pillars Cargo</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#vehicles">Vehicles</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#booking">Book Now</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden sm:inline-flex bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors" href="#booking">
                    Book a Ride
                </a>
<button className="md:hidden p-2" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-50 bg-white hidden" id="mobileMenu">
<div className="p-4 flex justify-between items-center border-b border-neutral-100">
<span className="font-semibold text-lg tracking-tight">Pillar Cargo</span>
<button className="p-2" id="closeMobileMenu">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-6 flex flex-col gap-4">
<a className="text-lg text-neutral-600 hover:text-neutral-900" href="#services">Services</a>
<a className="text-lg text-neutral-600 hover:text-neutral-900" href="#vehicles">Vehicles</a>
<a className="text-lg text-neutral-600 hover:text-neutral-900" href="#booking">Book Now</a>
<a className="text-lg text-neutral-600 hover:text-neutral-900" href="#reviews">Reviews</a>
<a className="text-lg text-neutral-600 hover:text-neutral-900" href="#contact">Contact</a>
<a className="bg-neutral-900 text-white px-4 py-3 rounded-lg text-center font-medium mt-4" href="#booking">Book a Ride</a>
</div>
</div>

<section className="sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-white pt-32 pr-4 pb-20 pl-4">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="">
<div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-amber-500 text-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                        Johannesburg's Trusted Shuttle Service
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight mb-6">
                        Premium Shuttle Services with a 
                        <span className="text-amber-600">Personal Touch</span>
</h1>
<p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                        Experience luxury airport transfers and local travel around Johannesburg. Dedicated service, immaculate vehicles, and attention to every detail.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors" href="#booking">
                            Book Your Ride
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-700 px-6 py-3 rounded-lg font-medium hover:bg-neutral-50 transition-colors" href="tel:+27123456789">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            Call Now
                        </a>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-5 h-5 text-green-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-neutral-600">Fully Insured</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-5 h-5 text-blue-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-neutral-600">24/7 Available</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl">
<img alt="Luxury Vehicle" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1746985094087-e703bf52c71b?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 pt-0 pr-4 pb-20 pl-4" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Our Services</h2>
<p className="text-neutral-600 max-w-2xl mx-auto">From airport pickups to city tours, we've got your travel needs covered with premium comfort.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group hover:bg-neutral-900 transition-all duration-300 bg-neutral-50 rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{color: 'black'}}>
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-neutral-800">
<svg className="lucide lucide-plane w-6 h-6 text-neutral-900 group-hover:text-white" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-white">Airport Transfers</h3>
<p className="text-neutral-600 group-hover:text-neutral-400">Seamless pickups and drop-offs at OR Tambo and Lanseria airports.</p>
</div>
<div className="group p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-neutral-800">
<svg className="lucide lucide-map-pin w-6 h-6 text-neutral-900 group-hover:text-white" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-white">Local Transfers</h3>
<p className="text-neutral-600 group-hover:text-neutral-400">Travel anywhere in and around Johannesburg in comfort and style.</p>
</div>
<div className="group p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-neutral-800">
<svg className="lucide lucide-briefcase w-6 h-6 text-neutral-900 group-hover:text-white" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-white">Corporate Travel</h3>
<p className="text-neutral-600 group-hover:text-neutral-400">Professional transport solutions for business executives and teams.</p>
</div>
<div className="group p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-neutral-800">
<svg className="lucide lucide-calendar w-6 h-6 text-neutral-900 group-hover:text-white" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-white">Special Events</h3>
<p className="text-neutral-600 group-hover:text-neutral-400">Weddings, parties, and special occasions with elegant transportation.</p>
</div>
<div className="group p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-neutral-800">
<svg className="lucide lucide-compass w-6 h-6 text-neutral-900 group-hover:text-white" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-white">City Tours</h3>
<p className="text-neutral-600 group-hover:text-neutral-400">Explore Johannesburg's attractions with a knowledgeable driver.</p>
</div>
<div className="group p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-neutral-800">
<svg className="lucide lucide-package w-6 h-6 text-neutral-900 group-hover:text-white" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-white">Light Cargo</h3>
<p className="text-neutral-600 group-hover:text-neutral-400">Safe transport for your valuable packages and light cargo needs.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50" id="vehicles">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Our Fleet</h2>
<p className="text-neutral-600 max-w-2xl mx-auto">Choose from our selection of premium, well-maintained vehicles.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-shadow">
<div className="aspect-video bg-neutral-100">
<img alt="Sedan" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1764090317623-06968349ad23?w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium">Executive Sedan</h3>
<span className="text-sm text-neutral-500">From R450</span>
</div>
<p className="text-sm text-neutral-600 mb-4">Perfect for business travel and airport transfers. Comfortable and elegant.</p>
<div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 3 Passengers
                            </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> 2 Bags
                            </span>
</div>
<button className="w-full py-2.5 border border-neutral-200 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors vehicle-select" data-vehicle="Executive Sedan">
                            Select Vehicle
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-shadow">
<div className="aspect-video bg-neutral-100">
<img alt="SUV" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1681965363638-0a59618faa1a?w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium">Luxury SUV</h3>
<span className="text-sm text-neutral-500">From R650</span>
</div>
<p className="text-sm text-neutral-600 mb-4">Spacious and comfortable for families or groups with extra luggage.</p>
<div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 5 Passengers
                            </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> 4 Bags
                            </span>
</div>
<button className="w-full py-2.5 border border-neutral-200 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors vehicle-select" data-vehicle="Luxury SUV">
                            Select Vehicle
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-shadow">
<div className="aspect-video bg-neutral-100">
<img alt="Van" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1597685204565-110abf469a1e?w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium">Premium Van</h3>
<span className="text-sm text-neutral-500">From R850</span>
</div>
<p className="text-sm text-neutral-600 mb-4">Ideal for larger groups, events, or when you need extra cargo space.</p>
<div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
<span className="flex items-center gap-1">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 7 Passengers
                            </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> 6 Bags
                            </span>
</div>
<button className="w-full py-2.5 border border-neutral-200 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors vehicle-select" data-vehicle="Premium Van">
                            Select Vehicle
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8" id="booking">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Book Your Ride</h2>
<p className="text-neutral-600">Fill in the details below and we'll confirm your booking within minutes.</p>
</div>
<form className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8" id="bookingForm">
<div className="grid sm:grid-cols-2 gap-6">

<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
<input className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" placeholder="Your name" required="" type="text"/>
</div>

<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" placeholder="+27 XX XXX XXXX" required="" type="tel"/>
</div>

<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" placeholder="you@example.com" required="" type="email"/>
</div>

<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Select Vehicle</label>
<div className="relative">
<select className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all appearance-none bg-white" id="vehicleSelect" required="">
<option value="">Choose a vehicle</option>
<option value="Executive Sedan">Executive Sedan - From R450</option>
<option value="Luxury SUV">Luxury SUV - From R650</option>
<option value="Premium Van">Premium Van - From R850</option>
</select>
<svg className="lucide lucide-chevron-down w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="">
<label className="block text-sm font-medium text-neutral-700 mb-2">Pickup Location</label>
<input className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" placeholder="e.g., OR Tambo Airport" required="" type="text"/>
</div>

<div className="">
<label className="block text-sm font-medium text-neutral-700 mb-2">Drop-off Location</label>
<input className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" placeholder="e.g., Sandton City" required="" type="text"/>
</div>

<div className="">
<label className="block text-sm font-medium text-neutral-700 mb-2">Pickup Date</label>
<input className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required="" type="date"/>
</div>

<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Pickup Time</label>
<input className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" required="" type="time"/>
</div>

<div className="">
<label className="block text-sm font-medium text-neutral-700 mb-2">Number of Passengers</label>
<input className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" max="7" min="1" placeholder="1" required="" type="number"/>
</div>

<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Number of Bags</label>
<input className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all" max="10" min="0" placeholder="0" type="number"/>
</div>
</div>

<div className="mt-6">
<label className="block text-sm font-medium text-neutral-700 mb-2">Special Requests (Optional)</label>
<textarea className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent outline-none transition-all resize-none" placeholder="Any special requirements or notes..." rows="3"></textarea>
</div>
<button className="w-full mt-6 bg-neutral-900 text-white py-4 rounded-lg font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2" type="submit">
<svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    Confirm Booking
                </button>
<p className="text-center text-sm text-neutral-500 mt-4">We'll contact you within 15 minutes to confirm your booking.</p>
</form>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">What Our Clients Say</h2>
<p className="text-neutral-600 max-w-2xl mx-auto">Don't just take our word for it - see what our satisfied customers have to say.</p>
</div>
<div className="grid lg:grid-cols-2 gap-8 mb-12">

<div className="bg-white rounded-2xl p-6 border border-neutral-200">
<div className="flex items-center gap-3 mb-6">
<svg className="w-8 h-8" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
<div>
<h3 className="font-medium">Google Reviews</h3>
<div className="flex items-center gap-1">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm text-neutral-600">5.0 (47 reviews)</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="p-4 bg-neutral-50 rounded-xl">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">T</div>
<span className="font-medium text-sm">Thabo M.</span>
<div className="flex ml-auto">
<svg className="lucide lucide-star w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-sm text-neutral-600">"Exceptional service! The vehicle was immaculate and arrived exactly on time. Highly recommend for airport transfers."</p>
</div>
<div className="p-4 bg-neutral-50 rounded-xl">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">S</div>
<span className="font-medium text-sm">Sarah K.</span>
<div className="flex ml-auto">
<svg className="lucide lucide-star w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-sm text-neutral-600">"Professional, punctual, and so pleasant. The personal touch really makes a difference. Will use again!"</p>
</div>
</div>
<a className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mt-4" href="#">
                        View all reviews <svg className="lucide lucide-external-link w-3 h-3" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>

<div className="bg-white rounded-2xl p-6 border border-neutral-200">
<div className="flex items-center gap-3 mb-6">
<svg className="w-8 h-8" viewbox="0 0 24 24">
<circle cx="12" cy="12" fill="#00AF87" r="12"></circle>
<path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" fill="white"></path>
<circle cx="12" cy="12" fill="white" r="2"></circle>
</svg>
<div>
<h3 className="font-medium">TripAdvisor</h3>
<div className="flex items-center gap-1">
<div className="flex">
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
</div>
<span className="text-sm text-neutral-600 ml-1">Excellent (32 reviews)</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="p-4 bg-neutral-50 rounded-xl">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm font-medium text-purple-600">J</div>
<span className="font-medium text-sm">John D.</span>
<span className="text-xs text-neutral-500 ml-auto">London, UK</span>
</div>
<p className="text-sm text-neutral-600">"Used Pillars Cargo for my business trip. Fantastic service from pickup to drop-off. Very knowledgeable about the city."</p>
</div>
<div className="p-4 bg-neutral-50 rounded-xl">
<div className="flex mb-2 gap-x-2 gap-y-2 items-center">
<div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-sm font-medium text-orange-600">L</div>
<span className="font-medium text-sm">Lisa R.</span>
<span className="text-xs text-neutral-500 ml-auto">Sydney, AU</span>
</div>
<p className="text-sm text-neutral-600">"Reliable and trustworthy. The personal service you get from a small business with luxury quality."</p>
</div>
</div>
<a className="inline-flex items-center gap-1 text-sm text-green-600 hover:text-green-700 mt-4" href="#">
                        View on TripAdvisor <svg className="lucide lucide-external-link w-3 h-3" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
<svg className="lucide lucide-heart w-3.5 h-3.5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                        About Pillar Cargo
                    </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">Dedicated Service, Every Journey</h2>
<p className="text-neutral-600 mb-4 leading-relaxed">
                        Pillar Cargo was founded with a simple mission: to provide Johannesburg with reliable, luxurious shuttle services that feel personal. As a woman-owned business, we understand the importance of safety, punctuality, and that extra touch of care.
                    </p>
<p className="text-neutral-600 mb-6 leading-relaxed">
                        Every ride with us is more than just transport – it's an experience. From the moment you book to the moment you arrive at your destination, you're our priority. Our fleet of premium vehicles and attention to detail ensure you travel in comfort and style.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div>
<div className="text-3xl font-semibold text-neutral-900 mb-1">500+</div>
<div className="text-sm text-neutral-500">Happy Customers</div>
</div>
<div className="">
<div className="text-3xl font-semibold text-neutral-900 mb-1">5.0</div>
<div className="text-sm text-neutral-500">Average Rating</div>
</div>
<div>
<div className="text-3xl font-semibold text-neutral-900 mb-1">24/7</div>
<div className="text-sm text-neutral-500">Available</div>
</div>
<div className="">
<div className="text-3xl font-semibold text-neutral-900 mb-1">100%</div>
<div className="text-sm text-neutral-500">Satisfaction</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="aspect-square overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl">
<img alt="Business Owner" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1717538850925-5139ec525d63?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">Get in Touch</h2>
<p className="text-neutral-400 mb-8">Have questions or need to book a ride? We're here to help 24/7.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-phone w-5 h-5 text-amber-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<div className="text-sm text-neutral-400">Call Us</div>
<a className="text-lg hover:text-amber-400 transition-colors" href="tel:+27123456789">+27 12 345 6789</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-mail w-5 h-5 text-amber-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<div className="text-sm text-neutral-400">Email Us</div>
<a className="text-lg hover:text-amber-400 transition-colors" href="mailto:info@pillarcargo.co.za">info@pillarcargo.co.za</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-map-pin w-5 h-5 text-amber-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<div className="text-sm text-neutral-400">Based In</div>
<span className="text-lg">Johannesburg, South Africa</span>
</div>
</div>
</div>
<div className="mt-8 flex gap-4">
<a className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</a>
<a className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
<a className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
</a>
</div>
</div>
<div className="bg-neutral-800 rounded-2xl p-6 sm:p-8">
<h3 className="text-xl font-medium mb-6">Send a Message</h3>
<form className="space-y-4">
<div>
<input className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder-neutral-400" placeholder="Your Name" type="text"/>
</div>
<div>
<input className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder-neutral-400" placeholder="Email Address" type="email"/>
</div>
<div className="">
<input className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder-neutral-400" placeholder="Phone Number" type="tel"/>
</div>
<div className="">
<textarea className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder-neutral-400 resize-none" placeholder="Your Message" rows="4"></textarea>
</div>
<button className="w-full bg-amber-500 text-neutral-900 py-3 rounded-lg font-medium hover:bg-amber-400 transition-colors" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-neutral-200">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-900 rounded flex items-center justify-center">
<span className="text-white font-semibold text-xs tracking-tighter">PC</span>
</div>
<span className="text-sm text-neutral-600">© 2024 Pillar Cargo. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}

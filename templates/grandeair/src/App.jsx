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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('hidden', !menuOpen);
  menuToggle.innerHTML = menuOpen
    ? '<iconify-icon icon="solar:close-circle-linear" width="22" height="22" style="color:#0B2545;"></iconify-icon>'
    : '<iconify-icon icon="solar:hamburger-menu-linear" width="22" height="22" style="color:#0B2545;"></iconify-icon>';
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.add('hidden');
    menuToggle.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="22" height="22" style="color:#0B2545;"></iconify-icon>';
  });
});

// Sticky CTA Bar — show after scrolling past hero
const stickyCta = document.getElementById('stickyCta');
const heroSection = document.getElementById('hero');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      stickyCta.classList.remove('visible');
    } else {
      stickyCta.classList.add('visible');
    }
  });
}, { threshold: 0 });

observer.observe(heroSection);

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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100">
<nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">

<a className="flex items-center gap-2.5 shrink-0" href="#">
<div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{backgroundColor: '#0B2545'}}>
<iconify-icon height="20" icon="solar:wind-linear" style={{color: '#D64545', fontSize: '20px'}} width="20"></iconify-icon>
</div>
<span className="font-heading font-bold text-lg tracking-tight hidden sm:block" style={{color: '#0B2545'}}>Grande Air Solutions</span>
</a>

<div className="hidden lg:flex items-center gap-7">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#services">Commercial Services</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#why-grande">Why Grande Air</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#service-areas">Service Areas</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#our-work">Our Work</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-colors" href="tel:5126774424" style={{color: '#0B2545'}}>
<iconify-icon height="16" icon="solar:phone-calling-linear" style={{color: '#D64545'}} width="16"></iconify-icon>
        (512) 677-4424
      </a>
<a className="text-xs md:text-sm px-4 py-2.5 md:px-5 md:py-2.5 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90" href="#contact" style={{backgroundColor: '#D64545'}}>
        Book Free Assessment
      </a>

<button className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-50 transition-colors" id="menuToggle">
<iconify-icon height="22" icon="solar:hamburger-menu-linear" style={{color: '#0B2545'}} width="22"></iconify-icon>
</button>
</div>
</nav>

<div className="hidden lg:hidden bg-white border-t border-gray-100 px-4 py-4" id="mobileMenu">
<div className="flex flex-col gap-1">
<a className="mobile-nav-link px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#services">Commercial Services</a>
<a className="mobile-nav-link px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#why-grande">Why Grande Air</a>
<a className="mobile-nav-link px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#service-areas">Service Areas</a>
<a className="mobile-nav-link px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#our-work">Our Work</a>
<a className="mobile-nav-link px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#contact">Contact</a>
<a className="sm:hidden px-4 py-3 text-sm font-semibold flex items-center gap-2" href="tel:5126774424" style={{color: '#D64545'}}>
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
        (512) 677-4424
      </a>
</div>
</div>
</header>
<main className="">

<section className="pt-28 md:pt-36 lg:pt-40 pb-12 md:pb-20 lg:pb-24 px-4 md:px-6 lg:px-8 relative overflow-hidden" id="hero">
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">

<div className="lg:col-span-3">
<div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase mb-6" style={{color: '#D64545', backgroundColor: 'rgba(214,69,69,0.07)'}}>
          COMMERCIAL HVAC • AUSTIN METRO
        </div>
<h1 className="animate-fade-up delay-100 font-heading font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.1] mb-6" style={{color: '#0B2545'}}>
          Commercial HVAC for Property Managers, Facilities Directors, and GCs in Austin Metro
        </h1>
<p className="animate-fade-up delay-200 text-base md:text-lg leading-relaxed mb-5 max-w-xl" style={{color: '#555'}}>
          Grande Air Solutions has served Austin since 2011. Licensed, bonded, and 4.9-star rated across 305+ customer reviews. Now taking commercial accounts across Pflugerville, Round Rock, Cedar Park, Georgetown, and the full Austin metro.
        </p>

<div className="animate-fade-up delay-200 flex items-center gap-2.5 mb-8">
<div className="flex gap-0.5">
<iconify-icon height="18" icon="solar:star-bold" style={{color: '#E8A020'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" style={{color: '#E8A020'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" style={{color: '#E8A020'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" style={{color: '#E8A020'}} width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" style={{color: '#E8A020'}} width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold" style={{color: '#0B2545'}}>4.9 / 5</span>
<span className="text-sm text-gray-400">from 305+ Google Reviews</span>
</div>

<div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 mb-10">
<a className="w-full sm:w-auto text-center px-7 py-4 rounded-lg text-sm font-bold text-white transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2" href="#contact" style={{backgroundColor: '#D64545'}}>
            Book Your Free Commercial Assessment
            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-center px-7 py-4 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 border-2 hover:bg-gray-50" href="#our-work" style={{color: '#0B2545', borderColor: '#0B2545'}}>
            See Our Commercial Work
          </a>
</div>

<div className="animate-fade-up delay-400 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="flex items-center gap-2.5 px-3.5 py-3 rounded-lg border border-gray-200 bg-white">
<iconify-icon height="18" icon="solar:calendar-linear" style={{color: '#0B2545'}} width="18"></iconify-icon>
<span className="text-xs font-semibold" style={{color: '#0B2545'}}>14 Years in Austin</span>
</div>
<div className="flex items-center gap-2.5 px-3.5 py-3 rounded-lg border border-gray-200 bg-white">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#0B2545'}} width="18"></iconify-icon>
<span className="text-xs font-semibold" style={{color: '#0B2545'}}>TACLA Licensed</span>
</div>
<div className="flex items-center gap-2.5 px-3.5 py-3 rounded-lg border border-gray-200 bg-white">
<iconify-icon height="18" icon="solar:alarm-linear" style={{color: '#0B2545'}} width="18"></iconify-icon>
<span className="text-xs font-semibold" style={{color: '#0B2545'}}>24/7 Emergency</span>
</div>
<div className="flex items-center gap-2.5 px-3.5 py-3 rounded-lg border border-gray-200 bg-white">
<iconify-icon height="18" icon="solar:settings-linear" style={{color: '#0B2545'}} width="18"></iconify-icon>
<span className="text-xs font-semibold" style={{color: '#0B2545'}}>All Major Brands</span>
</div>
</div>
</div>

<div className="animate-fade-up delay-300 lg:col-span-2 relative">
<div className="rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/40 max-h-[280px] md:max-h-none md:aspect-[4/5]">
<img alt="Commercial rooftop HVAC units on a building" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&amp;fit=crop&amp;q=80&amp;w=900&amp;h=1100"/>
</div>

<div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2.5 flex items-center gap-2.5 border border-gray-100">
<div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#0B2545'}}>
<iconify-icon height="16" icon="solar:verified-check-linear" style={{color: '#D64545'}} width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold" style={{color: '#0B2545'}}>Serving Austin</div>
<div className="text-xs text-gray-400">Since 2011</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8" style={{backgroundColor: '#F7F5F2'}}>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-10 md:mb-14">
<p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#D64545'}}>COMMON CONTRACTOR PROBLEMS</p>
<h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4 max-w-3xl mx-auto" style={{color: '#0B2545'}}>
        Problems Property Managers and Facilities Directors Run Into With the Wrong HVAC Contractor
      </h2>
<p className="text-base md:text-lg max-w-2xl mx-auto" style={{color: '#555'}}>
        Commercial HVAC is not residential. Here's what happens when you pick the wrong partner.
      </p>
</div>
<div className="grid md:grid-cols-3 gap-5 md:gap-6">

<div className="bg-white rounded-lg p-6 md:p-7 border border-gray-200">
<iconify-icon className="mb-5" height="32" icon="solar:clock-circle-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-lg md:text-xl mb-3 leading-snug" style={{color: '#0B2545'}}>4-Hour Response Times Shouldn't Be Normal</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          Your tenants are complaining. Your building is sitting at 85 degrees. Your contractor is 90 minutes away and booked until tomorrow. Commercial HVAC needs same-day response, not scheduling excuses.
        </p>
</div>

<div className="bg-white rounded-lg p-6 md:p-7 border border-gray-200">
<iconify-icon className="mb-5" height="32" icon="solar:dollar-minimalistic-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-lg md:text-xl mb-3 leading-snug" style={{color: '#0B2545'}}>Commercial Jobs Deserve Commercial Pricing Transparency</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          You signed a maintenance contract. The invoice shows labour charges you weren't told about. Parts marked up 3x. Service visits you didn't request. Commercial HVAC should be transparent from the first quote.
        </p>
</div>

<div className="bg-white rounded-lg p-6 md:p-7 border border-gray-200">
<iconify-icon className="mb-5" height="32" icon="solar:buildings-2-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-lg md:text-xl mb-3 leading-snug" style={{color: '#0B2545'}}>Your Building Isn't Somebody's House</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          Rooftop units, VRF systems, chillers, commercial duct systems — these aren't the same as a residential split system. You need a contractor who works commercial every day, not just when they have a slow week.
        </p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-white" id="why-grande">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-10 md:mb-14">
<p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#D64545'}}>WHY GRANDE AIR</p>
<h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight max-w-3xl mx-auto" style={{color: '#0B2545'}}>
        Why Austin Property Managers Partner With Grande Air Solutions
      </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-12">

<div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{backgroundColor: '#0B2545'}}>
<iconify-icon height="24" icon="solar:shield-check-linear" style={{color: '#D64545'}} width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-lg md:text-xl mb-3" style={{color: '#0B2545'}}>14 Years Serving the Austin Metro</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          We've been servicing Austin HVAC since 2011. We know the climate, the buildings, the permitting, and the utility rebates. We're not learning commercial on your dime.
        </p>
</div>

<div className="">
<div className="flex w-12 h-12 rounded-xl mb-5 items-center justify-center" style={{backgroundColor: '#0B2545'}}>
<iconify-icon height="24" icon="solar:wrench-linear" style={{color: '#D64545'}} width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-lg md:text-xl mb-3" style={{color: '#0B2545'}}>Every Major Brand, One Contractor</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          Carrier, Trane, Lennox, Goodman, Rheem, Bryant, York, American Standard, Daikin. Whatever's on your rooftop, we service, repair, and install it. No sub-contracting.
        </p>
</div>

<div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{backgroundColor: '#0B2545'}}>
<iconify-icon height="24" icon="solar:phone-calling-linear" style={{color: '#D64545'}} width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-lg md:text-xl mb-3" style={{color: '#0B2545'}}>24/7 Emergency Response</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          Commercial HVAC emergencies don't wait for business hours. Our Pflugerville HQ and Hutto office give us 10 to 15 minute response times across the Austin metro.
        </p>
</div>
</div>
</div>
</section>

<div className="w-full h-[180px] md:h-[280px] overflow-hidden">
<img alt="Commercial HVAC rooftop units on a commercial building" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&amp;fit=crop&amp;q=80&amp;w=1920&amp;h=500"/>
</div>

<section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8" id="services" style={{backgroundColor: '#F7F5F2'}}>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-10 md:mb-14">
<p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#D64545'}}>COMMERCIAL SERVICES</p>
<h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4" style={{color: '#0B2545'}}>
        Commercial HVAC Services for Austin Metro
      </h2>
<p className="text-base md:text-lg max-w-2xl mx-auto" style={{color: '#555'}}>
        Full-service commercial HVAC under one contractor. Licensed, bonded, insured.
      </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

<div className="bg-white rounded-lg p-6 md:p-7 border border-gray-200">
<iconify-icon className="mb-4" height="32" icon="solar:buildings-2-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-base md:text-lg mb-2" style={{color: '#0B2545'}}>Rooftop Unit Installation and Replacement</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          New construction, retrofits, and end-of-life replacements. All major commercial brands.
        </p>
</div>

<div className="bg-white rounded-lg p-6 md:p-7 border border-gray-200">
<iconify-icon className="mb-4" height="32" icon="solar:clipboard-check-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-base md:text-lg mb-2" style={{color: '#0B2545'}}>Preventive Maintenance Contracts</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          Quarterly and bi-annual service agreements. Keep tenants comfortable, extend equipment life, avoid emergency costs.
        </p>
</div>

<div className="bg-white rounded-lg p-6 md:p-7 border border-gray-200">
<iconify-icon className="mb-4" height="32" icon="solar:bolt-circle-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-base md:text-lg mb-2" style={{color: '#0B2545'}}>Commercial AC Repair</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          Same-day service across the Austin metro. Rooftop units, split systems, VRF.
        </p>
</div>

<div className="bg-white rounded-lg p-6 md:p-7 border border-gray-200">
<iconify-icon className="mb-4" height="32" icon="solar:fire-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-base md:text-lg mb-2" style={{color: '#0B2545'}}>Commercial Heating and Furnace Service</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          Gas and electric heating, dual-fuel systems, and heat pumps. Full repair and replacement.
        </p>
</div>

<div className="bg-white rounded-lg p-6 md:p-7 border border-gray-200">
<iconify-icon className="mb-4" height="32" icon="solar:tuning-square-2-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-base md:text-lg mb-2" style={{color: '#0B2545'}}>Ductwork Design and Installation</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          New builds, tenant improvements, and retrofits. Commercial duct systems, zoning, and airflow balancing.
        </p>
</div>

<div className="bg-white rounded-lg p-6 md:p-7 border border-gray-200">
<iconify-icon className="mb-4" height="32" icon="solar:health-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-base md:text-lg mb-2" style={{color: '#0B2545'}}>Indoor Air Quality Solutions</h3>
<p className="text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          REME-HALO whole-building purification, UV sanitizers, commercial-grade filtration for tenant health and compliance.
        </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 lg:py-28 px-4 md:px-6 lg:px-8" style={{backgroundColor: '#0B2545'}}>
<div className="max-w-4xl mx-auto text-center">
<div className="mb-6 opacity-20">
<iconify-icon height="48" icon="solar:chat-round-like-linear" style={{color: 'white'}} width="48"></iconify-icon>
</div>
<blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium text-white mb-8" style={{fontFamily: '\'Manrope\', sans-serif'}}>
      "I really appreciate skilled professionals that respect someone's property and take the time to explain what's going on. I've chosen to be part of their maintenance membership plan for years and have never been disappointed, even when I had an unexpected system failure while on vacation. These guys care about the quality of work they perform."
    </blockquote>
<div className="flex items-center justify-center gap-2 mb-3">
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
</div>
<p className="text-sm" style={{color: 'rgba(255,255,255,0.5)'}}>Verified Grande Air Customer, Google Review</p>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-white">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-10 md:mb-14">
<p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#D64545'}}>SIMPLE PROCESS</p>
<h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4" style={{color: '#0B2545'}}>
        Working With Grande Air Is Simple
      </h2>
<p className="text-base md:text-lg" style={{color: '#555'}}>Three steps from first call to comfortable tenants.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 md:gap-10 relative">

<div className="hidden md:block absolute top-10 left-[20%] right-[20%] border-t-2 border-dashed" style={{borderColor: '#0B2545', opacity: '0.15'}}></div>

<div className="flex flex-col items-center text-center relative">
<div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-heading font-bold text-white mb-6 relative z-10" style={{backgroundColor: '#0B2545'}}>
          1
        </div>
<h3 className="font-heading font-bold text-lg md:text-xl mb-3" style={{color: '#0B2545'}}>Book Your Free Commercial Assessment</h3>
<p className="text-sm md:text-base leading-relaxed max-w-xs" style={{color: '#555'}}>
          Call us or book online. We schedule a walkthrough of your property at no cost.
        </p>
</div>

<div className="flex flex-col items-center text-center relative">
<div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-heading font-bold text-white mb-6 relative z-10" style={{backgroundColor: '#0B2545'}}>
          2
        </div>
<h3 className="font-heading font-bold text-lg md:text-xl mb-3" style={{color: '#0B2545'}}>Get a Transparent Quote</h3>
<p className="text-sm md:text-base leading-relaxed max-w-xs" style={{color: '#555'}}>
          Detailed scope of work. Line-item pricing. No surprises. You decide.
        </p>
</div>

<div className="flex flex-col items-center text-center relative">
<div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-heading font-bold text-white mb-6 relative z-10" style={{backgroundColor: '#0B2545'}}>
          3
        </div>
<h3 className="font-heading font-bold text-lg md:text-xl mb-3" style={{color: '#0B2545'}}>We Get to Work</h3>
<p className="text-sm md:text-base leading-relaxed max-w-xs" style={{color: '#555'}}>
          Same-week scheduling for most jobs. Clean, professional, commercial-grade work.
        </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8" style={{backgroundColor: '#0B2545'}}>
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
<div className="text-center">
<div className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-2">14+</div>
<div className="text-xs md:text-sm" style={{color: 'rgba(255,255,255,0.45)'}}>Years Serving the Austin Metro</div>
</div>
<div className="text-center">
<div className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-2">4.9</div>
<div className="text-xs md:text-sm" style={{color: 'rgba(255,255,255,0.45)'}}>Stars from 305+ Reviews</div>
</div>
<div className="text-center">
<div className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-2">10+</div>
<div className="text-xs md:text-sm" style={{color: 'rgba(255,255,255,0.45)'}}>HVAC Brands Serviced</div>
</div>
<div className="text-center">
<div className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-2">24/7</div>
<div className="text-xs md:text-sm" style={{color: 'rgba(255,255,255,0.45)'}}>Emergency Response</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8" id="our-work" style={{backgroundColor: '#F7F5F2'}}>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-10 md:mb-14">
<p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#D64545'}}>CUSTOMER REVIEWS</p>
<h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight" style={{color: '#0B2545'}}>
        What Our Customers Say
      </h2>
</div>
<div className="grid md:grid-cols-3 gap-5 md:gap-6">

<div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 flex flex-col min-h-[240px]">
<div className="flex gap-0.5 mb-4">
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
</div>
<p className="text-sm md:text-base leading-relaxed flex-1" style={{color: '#555'}}>
          "Our AC went out late on a Friday. Grande Air was able to get us in Friday evening and got the system up and running in a short time. Prices were very reasonable even on a weekend."
        </p>
<div className="text-xs font-semibold text-gray-400 mt-5">— Google Review</div>
</div>

<div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 flex flex-col min-h-[240px]">
<div className="flex gap-0.5 mb-4">
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
</div>
<p className="text-sm md:text-base leading-relaxed flex-1" style={{color: '#555'}}>
          "Jaime was awesome. Professional and let us know each step he was taking in diagnosis and repair. Love Grande."
        </p>
<div className="text-xs font-semibold text-gray-400 mt-5">— Google Review</div>
</div>

<div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 flex flex-col min-h-[240px]">
<div className="flex gap-0.5 mb-4">
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" style={{color: '#E8A020'}} width="16"></iconify-icon>
</div>
<p className="text-sm md:text-base leading-relaxed flex-1" style={{color: '#555'}}>
          "Kassidy was excellent with scheduling options. A major shout out to Jamie and Carlo. They were excellent on providing education and explaining the why behind our duct issues."
        </p>
<div className="text-xs font-semibold text-gray-400 mt-5">— Google Review</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-white">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">

<div className="relative rounded-xl lg:rounded-2xl overflow-hidden aspect-[4/3] shadow-lg order-first">
<img alt="Commercial HVAC service truck at a commercial property" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>

<div className="">
<p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#D64545'}}>ABOUT US</p>
<h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-6" style={{color: '#0B2545'}}>
          Built by a Family. Trusted by Austin.
        </h2>
<div className="space-y-4 text-sm md:text-base leading-relaxed" style={{color: '#555', lineHeight: '1.7'}}>
<p>
            Grande Air Solutions was founded in 2011 by Isael Garcia and Petra Lugo. What started as a two-person operation out of Pflugerville has grown into one of the Austin metro's most trusted HVAC contractors — with a Hutto office, a licensed team of certified technicians, and over 305 five-star reviews.
          </p>
<p>
            Isael holds a TACLA37599E contractor license and maintains manufacturer certifications for every major HVAC brand.
          </p>
<p>
            Fourteen years in, we're still locally owned, still family operated, and still obsessed with quality workmanship.
          </p>
</div>
<div className="flex flex-wrap items-center gap-3 mt-7">
<a className="transition-colors hover:bg-gray-50 text-sm font-semibold border-2 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5" href="#our-work" style={{color: '#0B2545', borderColor: '#0B2545'}}>See Our Reviews</a>
<a className="px-5 py-2.5 rounded-lg text-sm font-semibold border-2 transition-colors hover:bg-gray-50" href="#contact" style={{color: '#0B2545', borderColor: '#0B2545'}}>Meet the Team</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8" style={{backgroundColor: '#F7F5F2'}}>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-10 md:mb-14">
<p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#D64545'}}>BUILT FOR COMMERCIAL</p>
<h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight" style={{color: '#0B2545'}}>
        Built for Austin's Commercial Market
      </h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

<div className="bg-white rounded-lg p-6 border border-gray-200">
<iconify-icon className="mb-4" height="32" icon="solar:buildings-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-base md:text-lg mb-2" style={{color: '#0B2545'}}>Property Managers</h3>
<p className="text-sm leading-relaxed" style={{color: '#555'}}>
          Multifamily, commercial, HOA. Keep tenants comfortable, avoid emergency costs, stay ahead of compliance.
        </p>
</div>

<div className="bg-white rounded-lg p-6 border border-gray-200">
<iconify-icon className="mb-4" height="32" icon="solar:clipboard-list-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-base md:text-lg mb-2" style={{color: '#0B2545'}}>Facilities Directors</h3>
<p className="text-sm leading-relaxed" style={{color: '#555'}}>
          Office parks, medical clinics, retail plazas. Preventive maintenance contracts that actually prevent problems.
        </p>
</div>

<div className="bg-white rounded-lg p-6 border border-gray-200">
<iconify-icon className="mb-4" height="32" icon="solar:ruler-cross-pen-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-base md:text-lg mb-2" style={{color: '#0B2545'}}>General Contractors</h3>
<p className="text-sm leading-relaxed" style={{color: '#555'}}>
          New commercial builds, tenant improvements, retrofits. A reliable commercial HVAC partner on every project.
        </p>
</div>

<div className="bg-white rounded-lg p-6 border border-gray-200">
<iconify-icon className="mb-4" height="32" icon="solar:key-linear" style={{color: '#0B2545'}} width="32"></iconify-icon>
<h3 className="font-heading font-bold text-base md:text-lg mb-2" style={{color: '#0B2545'}}>Building Owners</h3>
<p className="text-sm leading-relaxed" style={{color: '#555'}}>
          Commercial real estate investors and owner-occupiers across the Austin metro. One contractor for every HVAC need.
        </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 lg:py-28 px-4 md:px-6 lg:px-8" id="contact" style={{backgroundColor: '#0B2545'}}>
<div className="max-w-3xl mx-auto text-center">
<h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white mb-5 leading-tight">
      Ready to Work With a Commercial HVAC Contractor Who Actually Shows Up?
    </h2>
<p className="text-base md:text-lg mb-10 max-w-2xl mx-auto" style={{color: 'rgba(255,255,255,0.6)'}}>
      Book your free commercial assessment. We'll walk the property, look at your current systems, and send you a transparent quote. No obligation.
    </p>
<a className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-10 py-4 md:py-5 rounded-lg text-base md:text-lg font-bold text-white transition-all duration-300 hover:opacity-90" href="tel:5126774424" style={{backgroundColor: '#D64545'}}>
      Book Your Free Commercial Assessment
      <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="mt-5 text-sm" style={{color: 'rgba(255,255,255,0.4)'}}>
      Or call us directly: <a className="underline font-semibold text-white hover:opacity-80 transition-opacity" href="tel:5126774424">(512) 677-4424</a>
</p>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-white">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-10 md:mb-14">
<p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#D64545'}}>QUESTIONS ANSWERED</p>
<h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight" style={{color: '#0B2545'}}>
        Commercial HVAC Questions, Answered
      </h2>
</div>
<div className="divide-y divide-gray-200 border-t border-b border-gray-200">

<details className="group">
<summary className="flex justify-between items-center py-5 md:py-6 cursor-pointer select-none min-h-[44px]">
<span className="font-heading font-bold text-sm md:text-base pr-4" style={{color: '#0B2545'}}>Do you service all of Austin metro?</span>
<iconify-icon className="shrink-0 transition-transform duration-200 group-open:rotate-180" height="20" icon="solar:alt-arrow-down-linear" style={{color: '#999'}} width="20"></iconify-icon>
</summary>
<div className="pb-5 md:pb-6 text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          Yes. Our Pflugerville HQ and Hutto office cover Austin, Round Rock, Cedar Park, Pflugerville, Hutto, Georgetown, Leander, Manor, Buda, Kyle, Taylor, and all surrounding commercial areas.
        </div>
</details>

<details className="group">
<summary className="flex justify-between items-center py-5 md:py-6 cursor-pointer select-none min-h-[44px]">
<span className="font-heading font-bold text-sm md:text-base pr-4" style={{color: '#0B2545'}}>What HVAC brands do you service?</span>
<iconify-icon className="shrink-0 transition-transform duration-200 group-open:rotate-180" height="20" icon="solar:alt-arrow-down-linear" style={{color: '#999'}} width="20"></iconify-icon>
</summary>
<div className="pb-5 md:pb-6 text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          All major commercial brands including Carrier, Trane, Lennox, Goodman, Rheem, Bryant, American Standard, York, and Daikin. Rooftop units, VRF systems, split systems, and chillers.
        </div>
</details>

<details className="group">
<summary className="flex justify-between items-center py-5 md:py-6 cursor-pointer select-none min-h-[44px]">
<span className="font-heading font-bold text-sm md:text-base pr-4" style={{color: '#0B2545'}}>Do you offer preventive maintenance contracts?</span>
<iconify-icon className="shrink-0 transition-transform duration-200 group-open:rotate-180" height="20" icon="solar:alt-arrow-down-linear" style={{color: '#999'}} width="20"></iconify-icon>
</summary>
<div className="pb-5 md:pb-6 text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          Yes. We offer quarterly and bi-annual commercial maintenance contracts that cover inspection, cleaning, refrigerant checks, electrical tightening, and priority emergency response.
        </div>
</details>

<details className="group">
<summary className="flex justify-between items-center py-5 md:py-6 cursor-pointer select-none min-h-[44px]">
<span className="font-heading font-bold text-sm md:text-base pr-4" style={{color: '#0B2545'}}>What's your emergency response time?</span>
<iconify-icon className="shrink-0 transition-transform duration-200 group-open:rotate-180" height="20" icon="solar:alt-arrow-down-linear" style={{color: '#999'}} width="20"></iconify-icon>
</summary>
<div className="pb-5 md:pb-6 text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          10 to 15 minutes to most Austin metro addresses. 24/7 availability Monday through Saturday for commercial emergencies.
        </div>
</details>

<details className="group">
<summary className="flex justify-between items-center py-5 md:py-6 cursor-pointer select-none min-h-[44px]">
<span className="font-heading font-bold text-sm md:text-base pr-4" style={{color: '#0B2545'}}>Are you licensed and insured for commercial work?</span>
<iconify-icon className="shrink-0 transition-transform duration-200 group-open:rotate-180" height="20" icon="solar:alt-arrow-down-linear" style={{color: '#999'}} width="20"></iconify-icon>
</summary>
<div className="pb-5 md:pb-6 text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          Yes. TACLA37599E contractor license, fully insured for commercial installations and service.
        </div>
</details>

<details className="group">
<summary className="flex justify-between items-center py-5 md:py-6 cursor-pointer select-none min-h-[44px]">
<span className="font-heading font-bold text-sm md:text-base pr-4" style={{color: '#0B2545'}}>How do I get started?</span>
<iconify-icon className="shrink-0 transition-transform duration-200 group-open:rotate-180" height="20" icon="solar:alt-arrow-down-linear" style={{color: '#999'}} width="20"></iconify-icon>
</summary>
<div className="pb-5 md:pb-6 text-sm md:text-base leading-relaxed" style={{color: '#555'}}>
          Book a free commercial assessment using the button above. We'll walk your property, review your current systems, and send you a transparent quote within 48 hours.
        </div>
</details>
</div>
</div>
</section>

<section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8" id="service-areas" style={{backgroundColor: '#F7F5F2'}}>
<div className="max-w-6xl mx-auto text-center">
<p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: '#D64545'}}>SERVICE AREAS</p>
<h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-8" style={{color: '#0B2545'}}>
      Serving the Full Austin Metro
    </h2>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-200" style={{color: '#0B2545'}}>Austin</span>
<span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-200" style={{color: '#0B2545'}}>Round Rock</span>
<span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-200" style={{color: '#0B2545'}}>Cedar Park</span>
<span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-200" style={{color: '#0B2545'}}>Pflugerville</span>
<span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-200" style={{color: '#0B2545'}}>Hutto</span>
<span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-200" style={{color: '#0B2545'}}>Georgetown</span>
<span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-200" style={{color: '#0B2545'}}>Leander</span>
<span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-200" style={{color: '#0B2545'}}>Manor</span>
<span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-200" style={{color: '#0B2545'}}>Buda</span>
<span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-200" style={{color: '#0B2545'}}>Kyle</span>
<span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white border border-gray-200" style={{color: '#0B2545'}}>Taylor</span>
</div>
</div>
</section>
</main>

<footer className="pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 lg:px-8" style={{backgroundColor: '#0B2545'}}>
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-10 md:mb-14">

<div className="">
<div className="flex items-center gap-2.5 mb-5">
<div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{backgroundColor: 'rgba(255,255,255,0.08)'}}>
<iconify-icon height="20" icon="solar:wind-linear" style={{color: '#D64545', fontSize: '20px'}} width="20"></iconify-icon>
</div>
<span className="font-heading font-bold text-lg tracking-tight text-white">Grande Air Solutions</span>
</div>
<div className="space-y-2 text-sm" style={{color: 'rgba(255,255,255,0.5)'}}>
<p className="">2512 W Pecan St #320<br/>Pflugerville, TX 78660</p>
<p><a className="hover:text-white transition-colors font-semibold" href="tel:5126774424">(512) 677-4424</a></p>
<p><a className="hover:text-white transition-colors" href="mailto:isael@grandeairsolutions.com">isael@grandeairsolutions.com</a></p>
</div>
</div>

<div className="">
<h4 className="text-sm font-bold text-white mb-5 tracking-wide uppercase">Service Areas</h4>
<div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm" style={{color: 'rgba(255,255,255,0.5)'}}>
<span className="">Austin</span>
<span>Round Rock</span>
<span className="">Cedar Park</span>
<span>Pflugerville</span>
<span>Hutto</span>
<span>Georgetown</span>
<span className="">Leander</span>
<span className="">Manor</span>
<span>Buda</span>
<span>Kyle</span>
<span>Taylor</span>
</div>
</div>

<div className="">
<h4 className="text-sm font-bold text-white mb-5 tracking-wide uppercase">Quick Links</h4>
<div className="flex flex-col gap-2.5">
<a className="text-sm transition-colors hover:text-white" href="#services" style={{color: 'rgba(255,255,255,0.5)'}}>Commercial Services</a>
<a className="text-sm transition-colors hover:text-white" href="#why-grande" style={{color: 'rgba(255,255,255,0.5)'}}>Why Grande Air</a>
<a className="text-sm transition-colors hover:text-white" href="#our-work" style={{color: 'rgba(255,255,255,0.5)'}}>Our Work</a>
<a className="text-sm transition-colors hover:text-white" href="#contact" style={{color: 'rgba(255,255,255,0.5)'}}>Contact</a>
<a className="text-sm font-semibold transition-colors hover:text-white" href="#contact" style={{color: '#D64545'}}>Book Free Assessment</a>
</div>
</div>
</div>

<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-3 text-center" style={{borderColor: 'rgba(255,255,255,0.08)'}}>
<p className="text-xs" style={{color: 'rgba(255,255,255,0.25)'}}>
        License: TACLA37599E
      </p>
<p className="text-xs" style={{color: 'rgba(255,255,255,0.25)'}}>
        © 2026 Grande Air Solutions. All rights reserved.
      </p>
</div>
</div>
</footer>

<div className="sticky-cta-bar fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg px-4 py-3" id="stickyCta">
<a className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-sm font-bold text-white" href="tel:5126774424" style={{backgroundColor: '#D64545'}}>
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
    Book Your Free Commercial Assessment
  </a>
</div>


    </>
  );
}

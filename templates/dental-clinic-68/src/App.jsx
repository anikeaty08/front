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
surface: '#F8FAFC',
surfaceHighlight: '#F1F5F9',
primary: '#2E3384', // Updated to Texas Dental Center Navy
primaryDark: '#1E2368',
accent: '#C31B1B', // Updated to Texas Dental Center Red
accentLight: '#FEE2E2',
dark: '#0F172A',
darkText: '#1E293B',
muted: '#64748B',
border: '#E2E8F0',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
boxShadow: {
'soft': '0 10px 40px -10px rgba(46, 51, 132, 0.1)',
'lift': '0 20px 40px -15px rgba(46, 51, 132, 0.15)',
'glow': '0 0 20px rgba(195, 27, 27, 0.15)',
},
backgroundImage: {
'hero-gradient': 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)',
}
}
}
}



      // Reveal on Scroll Animation
      const observerOptions = {
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

      // Navbar Scroll Effect
      window.addEventListener('scroll', () => {
          const nav = document.getElementById('navbar');
          if (window.scrollY > 50) {
              nav.classList.add('shadow-sm', 'bg-white/95');
              nav.classList.remove('bg-white/90');
          } else {
              nav.classList.remove('shadow-sm', 'bg-white/95');
              nav.classList.add('bg-white/90');
          }
      });

      // Form Handling
      function selectTime(value) {
          document.getElementById('selected-time').innerText = value;
          document.getElementById('selected-time').classList.add('text-dark');
          document.getElementById('timeInput').value = value;
      }

      // Toggle Patient Type (Radio replacement)
      function togglePatientType() {
          const bg = document.getElementById('switch-bg');
          const newOpt = document.getElementById('opt-new');
          const currOpt = document.getElementById('opt-current');
          const input = document.getElementById('patientType');

          if (input.value === "New Patient") {
              bg.style.transform = 'translateX(100%)';
              newOpt.classList.remove('active');
              currOpt.classList.add('active');
              input.value = "Current Patient";
          } else {
              bg.style.transform = 'translateX(0)';
              currOpt.classList.remove('active');
              newOpt.classList.add('active');
              input.value = "New Patient";
          }
      }

      function handleSubmit() {
          const form = document.getElementById('bookingForm');
          const successMsg = document.getElementById('successMessage');

          const btn = form.querySelector('button[type="submit"]');
          const originalText = btn.innerHTML;
          btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl"></iconify-icon> Processing...';

          setTimeout(() => {
              form.classList.add('hidden');
              successMsg.classList.remove('hidden');
              btn.innerHTML = originalText;
          }, 1500);
      }

      function resetForm() {
          document.getElementById('bookingForm').reset();
          document.getElementById('bookingForm').classList.remove('hidden');
          document.getElementById('successMessage').classList.add('hidden');
          document.getElementById('selected-time').innerText = 'Preferred Time';
          // Reset Switch
          const bg = document.getElementById('switch-bg');
          const newOpt = document.getElementById('opt-new');
          const currOpt = document.getElementById('opt-current');
          const input = document.getElementById('patientType');
          bg.style.transform = 'translateX(0)';
          currOpt.classList.remove('active');
          newOpt.classList.add('active');
          input.value = "New Patient";
      }

      // Close dropdowns when clicking outside
      document.addEventListener('click', function(e) {
          const dropdowns = document.querySelectorAll('.custom-select-wrapper');
          dropdowns.forEach(dropdown => {
              if (!dropdown.contains(e.target)) {
                  dropdown.classList.remove('open');
              }
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
      

<div className="bg-primary text-white py-2 px-6 hidden md:block">
<div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:map-point-linear"></iconify-icon>
            123 Wellness Ave, Suite 100, Metro City, ST
          </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:clock-circle-linear"></iconify-icon>
            Mon - Fri: 9am - 6pm
          </span>
</div>
<a className="flex items-center gap-2 hover:text-accentLight transition-colors" href="tel:5551234567">
<iconify-icon className="text-base" icon="solar:phone-calling-linear"></iconify-icon>
          (555) 123-4567
        </a>
</div>
</div>

<nav className="fixed top-0 md:top-9 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-border" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
<iconify-icon height="24" icon="solar:tooth-linear" width="24"></iconify-icon>
</div>
<div>
<span className="font-heading font-semibold text-lg tracking-tight text-primary block leading-none">
              BRIGHT
            </span>
<span className="font-sans text-xs tracking-widest text-accent font-medium">
              SMILE DENTAL
            </span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted">
<a className="hover:text-primary transition-colors" href="#home">Home</a>
<a className="hover:text-primary transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-primary transition-colors" href="#insurance">
            Insurance
          </a>
<a className="hover:text-primary transition-colors" href="#about">
            About
          </a>
<a className="hover:text-primary transition-colors" href="#referrals">
            Referrals
          </a>
<a className="hover:text-primary transition-colors" href="#contact">
            Contact
          </a>
</div>
<div className="hidden md:flex">
<a className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors duration-300 shadow-lg shadow-accent/20 transform hover:-translate-y-0.5 flex items-center gap-2" href="#book">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
            Book Now
          </a>
</div>

<button className="lg:hidden text-primary" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-lg font-medium text-dark" href="#home">Home</a>
<a className="text-lg font-medium text-dark" href="#services">Services</a>
<a className="text-lg font-medium text-dark" href="#insurance">Insurance</a>
<a className="text-lg font-medium text-dark" href="#about">About</a>
<a className="text-lg font-medium text-dark" href="#referrals">Referrals</a>
<a className="text-lg font-medium text-dark" href="#contact">Contact</a>
<a className="bg-primary text-white text-center py-3 rounded-lg font-medium" href="#book">
          Book Appointment
        </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-hero-gradient" id="home">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-primary/5 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-red-50 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-primary/10 text-primary text-xs font-semibold mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
            Accepting New Patients
          </div>
<h1 className="font-heading font-semibold text-4xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-dark">
            Your Dental Office in
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Metro City, ST 12345
            </span>
</h1>
<p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
            Complete dental care under one roof. From same-day dentistry to
            advanced technology, we serve families in Downtown, Westside, and
            North Hills.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-primary text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primaryDark transition-all duration-300 shadow-soft shadow-primary/30 text-center flex items-center justify-center gap-2" href="#book">
              Book Appointment
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white border border-border text-darkText px-8 py-3.5 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300 text-center shadow-sm flex items-center justify-center gap-2" href="#offers">
              View Specials
              <iconify-icon className="text-lg" icon="solar:tag-price-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative reveal-on-scroll delay-200">
<div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 opacity-10 rounded-[2.5rem] transform rotate-3 scale-95 translate-y-4"></div>
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 h-[500px] group border border-white">
<img alt="Bright Smile Dental Clinic" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg flex items-center justify-between border border-white/50">
<div className="flex items-center gap-3">
<div className="bg-red-50 p-2 rounded-lg text-accent">
<iconify-icon height="24" icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-muted uppercase tracking-wider font-semibold">
                    Availability
                  </p>
<p className="font-heading font-semibold text-dark">
                    Saturday Dentist
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-surface border-y border-border relative" id="offers">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-border group hover:border-primary/30 transition-all hover:shadow-lg relative overflow-hidden reveal-on-scroll">
<div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
              LIMITED TIME
            </div>
<div className="text-accent mb-2">
<iconify-icon height="32" icon="solar:dollar-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-2xl text-dark mb-1">
              $1300 OFF
            </h3>
<p className="text-sm font-medium text-muted uppercase tracking-wide">
              Single Implants
            </p>
<a className="mt-4 inline-flex items-center text-xs font-semibold text-primary group-hover:underline" href="#book">
              Claim Offer
              <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-border group hover:border-primary/30 transition-all hover:shadow-lg reveal-on-scroll delay-100">
<div className="text-accent mb-2">
<iconify-icon height="32" icon="solar:star-fall-linear" width="32"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-2xl text-dark mb-1">
              $4100 OFF
            </h3>
<p className="text-sm font-medium text-muted uppercase tracking-wide">
              Orthodontic Treatment
            </p>
<a className="mt-4 inline-flex items-center text-xs font-semibold text-primary group-hover:underline" href="#book">
              Claim Offer
              <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-border group hover:border-primary/30 transition-all hover:shadow-lg reveal-on-scroll delay-200">
<div className="text-accent mb-2">
<iconify-icon height="32" icon="solar:sun-2-linear" width="32"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-2xl text-dark mb-1">
              $450 VALUE
            </h3>
<p className="text-sm font-medium text-muted uppercase tracking-wide">
              Zoom! Whitening Special
            </p>
<a className="mt-4 inline-flex items-center text-xs font-semibold text-primary group-hover:underline" href="#book">
              Claim Offer
              <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-gradient-to-br from-primary to-blue-900 p-6 rounded-2xl shadow-lg border border-primary/50 group text-white reveal-on-scroll delay-300">
<div className="text-white/80 mb-2">
<iconify-icon height="32" icon="solar:clipboard-check-linear" width="32"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-2xl text-white mb-1">
              FREE EXAM
            </h3>
<p className="text-sm font-medium text-white/70 uppercase tracking-wide">
              New Patient Exam &amp; X-Ray*
            </p>
<p className="text-[10px] text-white/50 mt-1">
              *For patients without insurance
            </p>
<a className="mt-4 inline-flex items-center text-xs font-semibold text-white group-hover:underline" href="#book">
              Book Now
              <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
<span className="text-accent font-semibold tracking-wide text-xs uppercase mb-2 block">
            Welcome to Bright Smile Dental
          </span>
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-dark mb-4 tracking-tight">
            Advanced Care in
            <span className="text-primary">Metro City</span>
</h2>
<p className="text-muted">
            We create a fun, safe, and welcoming environment for you and your
            family. Treating patients of all ages in Downtown, Westside, Uptown,
            and the suburbs.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-surface hover:bg-surfaceHighlight transition-colors duration-300 group reveal-on-scroll">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:home-smile-linear" width="32"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-dark mb-3">
              Complete Dental Care
            </h3>
<p className="text-sm text-muted leading-relaxed">
              No more referrals! We provide complete care under one roof, from
              implants to orthodontics with multiple specialists in-house.
            </p>
</div>

<div className="p-8 rounded-3xl bg-surface hover:bg-surfaceHighlight transition-colors duration-300 group reveal-on-scroll delay-100">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:scanner-linear" width="32"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-dark mb-3">
              Advanced Technology
            </h3>
<p className="text-sm text-muted leading-relaxed">
              We use the latest dentistry has to offer, from CS3600 intraoral
              scanners to lasers, providing safe and effective care.
            </p>
</div>

<div className="p-8 rounded-3xl bg-surface hover:bg-surfaceHighlight transition-colors duration-300 group reveal-on-scroll delay-200">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="32" icon="solar:clock-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-dark mb-3">
              Same-Day Dentistry
            </h3>
<p className="text-sm text-muted leading-relaxed">
              Dental emergency? We offer same-day dental care for patients
              seeking immediate relief in Metro City.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal-on-scroll">
<div className="max-w-2xl">
<span className="text-primary font-semibold tracking-wide text-xs uppercase mb-2 block">
              Our Expertise
            </span>
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-dark tracking-tight">
              Comprehensive Solutions
            </h2>
<p className="text-muted mt-4">
              We cover all your family's needs at our local dental office.
            </p>
</div>
<a className="text-primary font-semibold hover:text-primaryDark transition-colors inline-flex items-center gap-2 group" href="#book">
            See All Services
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4">
<iconify-icon height="24" icon="solar:face-scan-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-dark mb-2">
              Pediatric Dentistry
            </h3>
<p className="text-sm text-muted mb-4">
              Preventive care for children from infancy through early adulthood.
            </p>
<ul className="text-xs text-muted space-y-2 mb-4">
<li className="flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                First Visits
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                Sealants
              </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4">
<iconify-icon height="24" icon="solar:health-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-dark mb-2">
              General Dentistry
            </h3>
<p className="text-sm text-muted mb-4">
              Protect and preserve your natural smile with routine care.
            </p>
<ul className="text-xs text-muted space-y-2 mb-4">
<li className="flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                Cleanings
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                Fillings &amp; Crowns
              </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4">
<iconify-icon height="24" icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-dark mb-2">
              Cosmetic Dentistry
            </h3>
<p className="text-sm text-muted mb-4">
              Create a positive change in the appearance of your smile.
            </p>
<ul className="text-xs text-muted space-y-2 mb-4">
<li className="flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                Veneers
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                Teeth Whitening
              </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4">
<iconify-icon height="24" icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-lg text-dark mb-2">
              Orthodontics
            </h3>
<p className="text-sm text-muted mb-4">
              Treatment of irregularities of the teeth and jaws.
            </p>
<ul className="text-xs text-muted space-y-2 mb-4">
<li className="flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                Braces
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                Clear Aligners
              </li>
</ul>
</div>
</div>
</div>
</section>
<section className="py-20 bg-white relative reveal-on-scroll" id="insurance">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<span className="text-primary font-semibold tracking-wide text-xs uppercase mb-2 block">
              Payment Options
            </span>
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-dark mb-6 tracking-tight">
              Insurance &amp; Financing
            </h2>
<p className="text-muted mb-6">
              We accept most PPO insurance plans and Medicaid (up to age 20). No
              insurance? We offer flexible financing options.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-muted text-sm">
<iconify-icon className="text-accent text-lg" icon="solar:check-circle-linear"></iconify-icon>
                Most PPO Plans Accepted
              </li>
<li className="flex items-center gap-3 text-muted text-sm">
<iconify-icon className="text-accent text-lg" icon="solar:check-circle-linear"></iconify-icon>
                Medicaid &amp; CHIP
              </li>
<li className="flex items-center gap-3 text-muted text-sm">
<iconify-icon className="text-accent text-lg" icon="solar:check-circle-linear"></iconify-icon>
                CareCredit Financing
              </li>
</ul>
</div>
<div className="bg-surfaceHighlight p-8 rounded-3xl border border-border">
<h3 className="font-heading font-semibold text-xl text-dark mb-6 tracking-tight">
              Accepted Plans
            </h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-xl shadow-sm text-center text-sm font-semibold text-muted">
                Aetna
              </div>
<div className="bg-white p-4 rounded-xl shadow-sm text-center text-sm font-semibold text-muted">
                Cigna
              </div>
<div className="bg-white p-4 rounded-xl shadow-sm text-center text-sm font-semibold text-muted">
                Delta Dental
              </div>
<div className="bg-white p-4 rounded-xl shadow-sm text-center text-sm font-semibold text-muted">
                Medicaid
              </div>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 bg-surfaceHighlight reveal-on-scroll" id="referrals">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="max-w-2xl mx-auto">
<div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-accent mx-auto mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h2 className="font-heading font-semibold text-3xl text-dark mb-4 tracking-tight">
            Refer a Friend
          </h2>
<p className="text-muted mb-8">
            We appreciate the confidence you place in us. Refer your friends and
            family to experience our care.
          </p>
<a className="inline-flex items-center gap-2 bg-white text-darkText border border-border px-8 py-3 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm" href="#book">
            Refer a Patient
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-border">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="font-heading font-semibold text-3xl text-dark mb-8">
          Patient Testimonials
        </h2>
<div className="bg-surfaceHighlight border border-border rounded-2xl p-12 max-w-4xl mx-auto">
<div className="flex justify-center text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xl font-medium text-dark italic">
            "The team at Bright Smile Dental is amazing. They made my implant
            procedure seamless and comfortable. Highly recommend!"
          </p>
<div className="mt-6 text-sm text-muted font-semibold">
            - Verified Patient
          </div>
</div>
</div>
</section>

<section className="py-24 bg-surface relative" id="book">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 border border-border">
<div className="text-center mb-10">
<h2 className="font-heading font-semibold text-3xl text-dark mb-2">
              Book Your Appointment
            </h2>
<p className="text-muted">
              Fill out the form below. We accept most insurance plans.
            </p>
</div>
<form className="space-y-6" id="bookingForm" onsubmit="event.preventDefault(); handleSubmit();">

<div className="flex justify-center mb-8">
<div className="switch-container w-64" onclick="togglePatientType()">
<div className="switch-bg" id="switch-bg"></div>
<div className="switch-option active" id="opt-new">New Patient</div>
<div className="switch-option" id="opt-current">
                  Current Patient
                </div>
<input id="patientType" name="patient_type" type="hidden" value="New Patient"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="input-group">
<input className="input-field" id="name" placeholder=" " required="" type="text"/>
<label className="input-label" htmlFor="name">Full Name</label>
</div>

<div className="input-group">
<input className="input-field" id="phone" placeholder=" " required="" type="tel"/>
<label className="input-label" htmlFor="phone">Phone Number</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="input-group">
<input className="input-field" id="email" placeholder=" " required="" type="email"/>
<label className="input-label" htmlFor="email">Email Address</label>
</div>

<div className="custom-select-wrapper" onclick="this.classList.toggle('open')">
<div className="custom-select-trigger text-sm text-darkText">
<span id="selected-time">Preferred Time</span>
<iconify-icon className="text-primary" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="custom-select-options text-sm">
<div className="custom-option" onclick="selectTime('Morning')">
                    Morning
                  </div>
<div className="custom-option" onclick="selectTime('Afternoon')">
                    Afternoon
                  </div>
<div className="custom-option" onclick="selectTime('Evening')">
                    Evening
                  </div>
</div>
<input id="timeInput" name="time" type="hidden"/>
</div>
</div>

<div className="input-group">
<input className="input-field text-darkText" id="date" required="" type="date"/>
<label className="input-label bg-white px-1 -top-2.5 text-xs text-primary font-medium" htmlFor="date">
                Preferred Date
              </label>
</div>
<button className="w-full bg-primary text-white font-medium py-4 rounded-lg shadow-lg shadow-primary/25 hover:bg-primaryDark hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2" type="submit">
              Confirm Appointment
            </button>
<p className="text-center text-xs text-muted mt-4">
              By submitting this form, you agree to our privacy policy.
            </p>
</form>

<div className="hidden text-center py-12" id="successMessage">
<div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
<iconify-icon height="32" icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-heading font-semibold text-dark mb-2">
              Request Received!
            </h3>
<p className="text-muted">
              We will contact you at the number provided to confirm your slot.
            </p>
<button className="mt-6 text-primary font-medium hover:underline" onclick="resetForm()">
              Book another
            </button>
</div>
</div>
</div>
</section>

<footer className="bg-primaryDark pt-20 pb-10 text-white/80 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:tooth-linear" width="20"></iconify-icon>
</div>
<span className="font-heading font-semibold text-xl tracking-tight text-white">
                Bright Smile Dental
              </span>
</div>
<p className="text-sm leading-relaxed text-white/60 mb-6">
              Providing premium dental care in Metro City, ST 12345.
            </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#">
<iconify-icon icon="brandico:facebook"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#">
<iconify-icon icon="brandico:instagram"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-6">
              Contact Us
            </h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-accent mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>
                  123 Wellness Ave, Suite 100,
                  <br/>
                  Metro City, ST 12345
                </span>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<iconify-icon className="text-accent group-hover:scale-110 transition-transform" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-accent transition-colors" href="tel:5551234567">
                  (555) 123-4567
                </a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-accent" icon="solar:printer-linear"></iconify-icon>
<span>Fax: (555) 123-4568</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-6">
              Opening Hours
            </h4>
<ul className="space-y-2 text-sm">
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Mon - Fri</span>
<span className="text-white">9:00 AM - 6:00 PM</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Saturday</span>
<span className="text-white">9:00 AM - 3:00 PM</span>
</li>
<li className="flex justify-between pt-2">
<span>Sunday</span>
<span className="text-accent">Closed</span>
</li>
</ul>
</div>

<div className="rounded-xl overflow-hidden h-48 bg-gray-800 relative group border border-white/10">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841334460783!2d-73.98773198459365!3d40.748440579327666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire+State+Building!5e0!3m2!1sen!2sus!4v1537400526284" style={{border: '0', opacity: '0.6', filter: 'grayscale(100%)'}} width="100%"></iframe>
<a className="absolute inset-0 flex items-center justify-center bg-dark/20 group-hover:bg-dark/10 transition-colors" href="https://maps.google.com" target="_blank">
<span className="bg-white text-dark px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
<iconify-icon icon="solar:map-arrow-right-bold"></iconify-icon>
                Get Directions
              </span>
</a>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
<p>© 2026 Bright Smile Dental. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}

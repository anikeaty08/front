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
primary: '#0284C7', // Sky 600 - Professional Clinical Blue
primaryDark: '#0369A1',
accent: '#0EA5E9',
dark: '#0B1120',
darkText: '#334155',
muted: '#64748B',
border: '#E2E8F0',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
boxShadow: {
'soft': '0 4px 20px -5px rgba(2, 132, 199, 0.1)',
'lift': '0 10px 30px -10px rgba(2, 132, 199, 0.15)',
},
backgroundImage: {
'hero-gradient': 'linear-gradient(135deg, #F0F9FF 0%, #FFFFFF 100%)',
}
}
}
}



        // Scroll Reveal Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Close dropdown when clicking outside
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
      

<div className="bg-primary text-white text-xs py-2 px-6 text-center relative z-50">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-2">
<span className="flex items-center gap-2">
<iconify-icon icon="solar:calendar-date-linear" width="16"></iconify-icon>
<span className="opacity-90">Holiday Notice: Closed Dec 25th - 29th, 2025.</span>
</span>
<span className="hidden md:block opacity-50">|</span>
<span className="font-medium opacity-90">Note: Thursdays are for Orthodontist appointments only.</span>
</div>
</div>

<nav className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-lg border-b border-border transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="index.php">
<div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
<iconify-icon icon="solar:medical-kit-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<span className="font-heading font-semibold text-lg tracking-tight text-dark block leading-none">Mark's</span>
<span className="text-xs text-muted uppercase tracking-widest font-medium">Dental Clinic</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted">
<a className="hover:text-primary transition-colors" href="#home">Home</a>
<a className="hover:text-primary transition-colors" href="#about">About Us</a>
<a className="hover:text-primary transition-colors" href="#services">Services</a>
<a className="hover:text-primary transition-colors" href="#location">Location</a>
<a className="hover:text-primary transition-colors" href="#contact">Contact Us</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="text-muted hover:text-blue-600 transition-colors" href="https://web.facebook.com/mark.nartey.56" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="bg-dark text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-primary transition-colors duration-300 shadow-soft" href="#book">
                    Book Appointment
                </a>
</div>

<button className="lg:hidden text-dark p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-border p-6 shadow-xl flex flex-col gap-4 z-50" id="mobile-menu">
<a className="text-base font-medium text-dark" href="#home">Home</a>
<a className="text-base font-medium text-dark" href="#about">About Us</a>
<a className="text-base font-medium text-dark" href="#services">Services</a>
<a className="text-base font-medium text-dark" href="#location">Location</a>
<a className="text-base font-medium text-dark" href="#contact">Contact</a>
<a className="bg-primary text-white text-center py-3 rounded-lg text-sm font-medium mt-2" href="#book">Book Appointment</a>
</div>
</nav>

<section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-hero-gradient" id="home">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surfaceHighlight border border-primary/10 text-primary text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                    Accepting New Patients
                </div>
<h1 className="font-heading font-semibold text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-6 text-dark">
                    Advanced Dental Care<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tailored to You</span>
</h1>
<p className="text-base text-muted mb-8 max-w-md leading-relaxed">
                    Experience world-class dentistry in Accra. From routine checkups to specialized orthodontic treatments, Mark's Dental Clinic ensures your smile is our top priority.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-primary text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primaryDark transition-all duration-300 shadow-soft flex items-center gap-2 group" href="#book">
                        Book Appointment
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="bg-white border border-border text-darkText px-8 py-3.5 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300" href="#services">
                        View Services
                    </a>
</div>

<div className="mt-12 pt-8 border-t border-border/60 grid grid-cols-3 gap-4">
<div>
<p className="font-heading font-semibold text-2xl text-dark">15+</p>
<p className="text-xs text-muted">Years Experience</p>
</div>
<div>
<p className="font-heading font-semibold text-2xl text-dark">2k+</p>
<p className="text-xs text-muted">Happy Patients</p>
</div>
<div>
<p className="font-heading font-semibold text-2xl text-dark">100%</p>
<p className="text-xs text-muted">Safety Record</p>
</div>
</div>
</div>
<div className="relative reveal delay-100">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white">
<img alt="Mark's Dental Clinic Interior" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 max-w-xs">
<div className="flex items-start gap-3">
<div className="bg-green-50 p-2 rounded-lg text-green-600">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-heading font-semibold text-sm text-dark">Hygiene Guaranteed</p>
<p className="text-xs text-muted mt-1">We adhere to strict sterilization protocols for your safety.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-heading font-semibold text-3xl text-dark mb-4 tracking-tight">Comprehensive Services</h2>
<p className="text-muted text-sm">Providing specialized care including our dedicated Thursday Orthodontic sessions.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/20 relative overflow-hidden group hover:shadow-lift transition-all duration-300 reveal">
<div className="absolute top-0 right-0 bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Thursday Special</div>
<div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-lg text-dark mb-3">Orthodontics</h3>
<p className="text-sm text-muted leading-relaxed mb-6">Correcting teeth and jaws that are positioned improperly. Book your dedicated Thursday slot.</p>
<a className="text-xs font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all" href="#book">
                        Book Now <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-border group hover:shadow-lift transition-all duration-300 reveal delay-100">
<div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-darkText mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stethoscope-linear" width="28"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-lg text-dark mb-3">General Dentistry</h3>
<p className="text-sm text-muted leading-relaxed mb-6">Routine examinations, professional cleanings, and preventative care for long-term health.</p>
<a className="text-xs font-medium text-dark flex items-center gap-1 hover:gap-2 transition-all" href="#book">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-border group hover:shadow-lift transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-darkText mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:star-shine-linear" width="28"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-lg text-dark mb-3">Cosmetic Solutions</h3>
<p className="text-sm text-muted leading-relaxed mb-6">Teeth whitening and aesthetic improvements to give you the confidence to smile.</p>
<a className="text-xs font-medium text-dark flex items-center gap-1 hover:gap-2 transition-all" href="#book">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="book">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="bg-surface rounded-3xl p-8 lg:p-10 border border-border reveal">
<div className="mb-8">
<h2 className="font-heading font-semibold text-2xl text-dark mb-2">Request Appointment</h2>
<p className="text-sm text-muted">Fill out the form below and we will contact you to confirm.</p>
</div>
<form className="space-y-5" id="bookingForm" onsubmit="event.preventDefault(); alert('Request sent!');">
<div className="input-group">
<input className="input-field" id="name" placeholder=" " required="" type="text"/>
<label className="input-label" htmlFor="name">Full Name</label>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="input-group">
<input className="input-field" id="phone" placeholder=" " required="" type="tel"/>
<label className="input-label" htmlFor="phone">Phone</label>
</div>
<div className="input-group">
<input className="input-field" id="email" placeholder=" " type="email"/>
<label className="input-label" htmlFor="email">Email</label>
</div>
</div>

<div className="custom-select-wrapper" onclick="this.classList.toggle('open')">
<div className="custom-select-trigger text-sm text-muted">
<span id="selected-service">Select Service</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="custom-select-options">
<div className="custom-option" onclick="document.getElementById('selected-service').innerText='General Checkup'">General Checkup</div>
<div className="custom-option" onclick="document.getElementById('selected-service').innerText='Orthodontics (Thursday)'">Orthodontics (Thursday)</div>
<div className="custom-option" onclick="document.getElementById('selected-service').innerText='Teeth Cleaning'">Teeth Cleaning</div>
<div className="custom-option" onclick="document.getElementById('selected-service').innerText='Emergency Pain'">Emergency Pain</div>
</div>
</div>
<div className="input-group">
<textarea className="input-field" id="message" placeholder=" " rows="3"></textarea>
<label className="input-label" htmlFor="message">Additional Notes</label>
</div>
<button className="w-full bg-dark text-white font-medium py-3.5 rounded-lg hover:bg-primary transition-colors duration-300 shadow-lg shadow-dark/10 flex justify-center items-center gap-2" type="submit">
                            Submit Request <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</form>
</div>

<div className="flex flex-col justify-center reveal delay-100" id="location">
<span className="text-primary font-medium tracking-wide text-xs uppercase mb-2">Visit Us</span>
<h2 className="font-heading font-semibold text-3xl text-dark mb-6 tracking-tight">Conveniently Located in Accra</h2>
<p className="text-muted mb-10 leading-relaxed">
                        We are dedicated to providing the community with top-tier dental services. Visit us at our clinic for a consultation.
                    </p>
<div className="space-y-8">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-dark text-sm">Our Location</h4>
<p className="text-sm text-muted mt-1">PMB KA 130, Accra, Ghana</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-dark text-sm">Phone Support</h4>
<p className="text-sm text-muted mt-1 font-mono">+233-546-746209</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-dark text-sm">Email</h4>
<p className="text-sm text-muted mt-1">info@marksdental.com</p>
</div>
</div>
</div>

<div className="mt-10 rounded-xl overflow-hidden h-48 w-full relative group cursor-pointer border border-border">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="bg-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm text-dark flex items-center gap-2">
<iconify-icon icon="solar:map-arrow-right-linear"></iconify-icon> View on Map
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-dark pt-16 pb-8 text-white/70 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4 text-white">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
<span className="font-heading font-semibold text-lg">Mark's Dental Clinic</span>
</div>
<p className="mb-6 max-w-sm">Professional dental services in Ghana. Dedicated to restoring smiles with care and precision.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white" href="https://web.facebook.com/mark.nartey.56" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#">
<iconify-icon icon="solar:link-circle-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#book">Book Appointment</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Opening Hours</h4>
<ul className="space-y-3">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-white">8:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between">
<span>Thursdays</span>
<span className="text-accent font-medium">Orthodontics</span>
</li>
<li className="flex justify-between">
<span>Weekends</span>
<span className="text-white/50">Closed</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
<p>© 2024 Mark's Dental Clinic. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

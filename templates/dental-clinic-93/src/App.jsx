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
primary: '#0F766E', // Teal-700 for a clinical, premium look
primaryLight: '#14B8A6',
primaryDark: '#115E59',
accent: '#0EA5E9',
dark: '#020617',
darkText: '#1E293B',
muted: '#64748B',
border: '#E2E8F0',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Manrope', 'sans-serif'],
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(15, 118, 110, 0.1)',
'lift': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Reveal Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Smooth Navbar
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.remove('bg-white/80', 'py-0');
                nav.classList.add('bg-white/95', 'shadow-sm');
            } else {
                nav.classList.add('bg-white/80');
                nav.classList.remove('bg-white/95', 'shadow-sm');
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-border" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
<iconify-icon height="22" icon="solar:tooth-linear" width="22"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-heading font-bold text-lg tracking-tight text-dark leading-none">PARNELL</span>
<span className="text-[10px] uppercase tracking-widest text-muted font-semibold">Dentistry</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted">
<a className="hover:text-primary transition-colors" href="#home">Home</a>
<a className="hover:text-primary transition-colors" href="#about">Our Practice</a>
<a className="hover:text-primary transition-colors" href="#team">The Team</a>
<a className="hover:text-primary transition-colors" href="#treatments">Treatments</a>
<a className="hover:text-primary transition-colors" href="#contact">Contact</a>
</div>
<div className="hidden lg:flex items-center gap-4">
<div className="flex flex-col items-end mr-2">
<span className="text-xs text-muted font-medium">Call Us</span>
<a className="text-sm font-bold text-dark hover:text-primary transition-colors" href="tel:093030303">09 555 1234</a>
</div>
<a className="bg-dark text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary transition-colors duration-300 shadow-lg shadow-dark/10 hover:shadow-primary/20" href="#book">
                    Book Online
                </a>
</div>

<button className="lg:hidden text-dark p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-4 shadow-xl lg:hidden" id="mobile-menu">
<a className="text-lg font-medium text-dark" href="#home">Home</a>
<a className="text-lg font-medium text-dark" href="#about">Our Practice</a>
<a className="text-lg font-medium text-dark" href="#team">The Team</a>
<a className="text-lg font-medium text-dark" href="#treatments">Treatments</a>
<a className="bg-primary text-white text-center py-3 rounded-lg font-medium" href="#book">Book Appointment</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-surface to-surface -z-10"></div>
<div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-primary text-xs font-semibold mb-8">
<iconify-icon height="14" icon="solar:star-linear" width="14"></iconify-icon>
                    Serving Parnell for over 20 Years
                </div>
<h1 className="font-heading font-extrabold text-5xl lg:text-7xl tracking-tight leading-[1.1] mb-6 text-dark">
                    Your Smile, <br/>
<span className="text-gradient">Our Passion.</span>
</h1>
<p className="text-lg text-muted mb-10 max-w-lg leading-relaxed">
                    Experience modern, gentle dentistry in the heart of Parnell. We combine advanced technology with a compassionate approach to ensure your best smile.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-primary text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-primaryDark transition-all duration-300 shadow-soft shadow-primary/30 text-center flex items-center justify-center gap-2 group" href="#book">
                        Book Your Visit 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="bg-white border border-border text-darkText px-8 py-4 rounded-lg text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300 text-center" href="#treatments">
                        View Treatments
                    </a>
</div>
<div className="mt-12 flex items-center gap-6 border-t border-border pt-8">
<div>
<p className="font-heading font-bold text-2xl text-dark">4.9</p>
<p className="text-xs text-muted font-medium">Google Rating</p>
</div>
<div className="w-px h-8 bg-border"></div>
<div>
<p className="font-heading font-bold text-2xl text-dark">5k+</p>
<p className="text-xs text-muted font-medium">Patients</p>
</div>
<div className="w-px h-8 bg-border"></div>
<div>
<p className="font-heading font-bold text-2xl text-dark">100%</p>
<p className="text-xs text-muted font-medium">Local Team</p>
</div>
</div>
</div>

<div className="relative reveal-on-scroll delay-200 lg:h-[600px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-200/20 to-blue-200/20 rounded-[3rem] blur-3xl transform rotate-6"></div>
<div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white shadow-2xl shadow-slate-200/50">
<img alt="Parnell Dentistry Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 max-w-xs">
<div className="flex items-start gap-3">
<div className="bg-primary/10 p-2 rounded-lg text-primary">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-bold text-dark text-sm">Safe &amp; Sterile</p>
<p className="text-xs text-muted mt-1">We adhere to the strictest hygiene protocols for your safety.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-border" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 reveal-on-scroll">
<div className="grid grid-cols-2 gap-4">
<img className="rounded-2xl w-full h-64 object-cover mb-4" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img className="rounded-2xl w-full h-64 object-cover mt-8" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="order-1 lg:order-2 reveal-on-scroll delay-100">
<span className="text-primary font-bold tracking-wider text-xs uppercase mb-4 block">About Parnell Dentistry</span>
<h2 className="font-heading font-bold text-3xl lg:text-4xl text-dark mb-6">Traditional Care, <span className="text-muted">Modern Methods.</span></h2>
<p className="text-muted mb-6 leading-relaxed">
                        At Parnell Dentistry, we understand that visiting the dentist can be daunting. That’s why we’ve designed our practice to be a sanctuary of calm. Located in the historic suburb of Parnell, we combine old-school hospitality with cutting-edge dental technology.
                    </p>
<p className="text-muted mb-8 leading-relaxed">
                        Whether you are here for a routine check-up or a complex cosmetic procedure, our team takes the time to listen to your needs and explain every step of your treatment plan.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm font-medium text-dark">
<iconify-icon className="text-primary" icon="solar:check-circle-bold"></iconify-icon> Locally Owned &amp; Operated
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-dark">
<iconify-icon className="text-primary" icon="solar:check-circle-bold"></iconify-icon> Extended Hours for Busy Professionals
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-dark">
<iconify-icon className="text-primary" icon="solar:check-circle-bold"></iconify-icon> State-of-the-art Digital X-Rays
                        </li>
</ul>
<a className="text-primary font-semibold hover:text-dark transition-colors inline-flex items-center gap-2" href="#team">
                        Meet Our Specialists <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight" id="treatments">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-on-scroll">
<div className="max-w-xl">
<h2 className="font-heading font-bold text-3xl lg:text-4xl text-dark mb-4">Comprehensive Treatments</h2>
<p className="text-muted">We offer a full range of dental services under one roof, from preventative hygiene to advanced restorative work.</p>
</div>
<a className="text-dark font-semibold border-b-2 border-primary pb-1 hover:text-primary transition-colors" href="#book">View Price List</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lift transition-all duration-300 group reveal-on-scroll">
<div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-xl text-dark mb-3">General Dentistry</h3>
<p className="text-sm text-muted mb-6 leading-relaxed">Routine examinations, scaling, polishing, and fillings. The foundation of a healthy smile starts with regular maintenance.</p>
<span className="text-xs font-bold text-primary uppercase tracking-wide">Learn More</span>
</div>

<div className="bg-white p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lift transition-all duration-300 group reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-xl text-dark mb-3">Cosmetic &amp; Whitening</h3>
<p className="text-sm text-muted mb-6 leading-relaxed">Transform your smile with professional whitening, porcelain veneers, and composite bonding tailored to your face shape.</p>
<span className="text-xs font-bold text-accent uppercase tracking-wide">Learn More</span>
</div>

<div className="bg-white p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lift transition-all duration-300 group reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:screw-large-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-xl text-dark mb-3">Implants &amp; Surgery</h3>
<p className="text-sm text-muted mb-6 leading-relaxed">Permanent solutions for missing teeth. Our specialists use guided surgery for precise and comfortable implant placement.</p>
<span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">Learn More</span>
</div>

<div className="bg-white p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lift transition-all duration-300 group reveal-on-scroll">
<div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-xl text-dark mb-3">Orthodontics</h3>
<p className="text-sm text-muted mb-6 leading-relaxed">Straighten your teeth discreetly with Invisalign® clear aligners or traditional ceramic braces for complex cases.</p>
<span className="text-xs font-bold text-pink-500 uppercase tracking-wide">Learn More</span>
</div>

<div className="bg-white p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lift transition-all duration-300 group reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-xl text-dark mb-3">Emergency Care</h3>
<p className="text-sm text-muted mb-6 leading-relaxed">Toothache or injury? We set aside daily slots for dental emergencies to get you out of pain fast.</p>
<span className="text-xs font-bold text-orange-500 uppercase tracking-wide">Learn More</span>
</div>

<div className="bg-white p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lift transition-all duration-300 group reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:sleeping-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading font-bold text-xl text-dark mb-3">Sedation Dentistry</h3>
<p className="text-sm text-muted mb-6 leading-relaxed">Anxious? We offer IV sedation and happy gas options to ensure your treatment is completely stress-free.</p>
<span className="text-xs font-bold text-purple-600 uppercase tracking-wide">Learn More</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="text-primary font-bold tracking-wider text-xs uppercase mb-2 block">Our Experts</span>
<h2 className="font-heading font-bold text-3xl lg:text-4xl text-dark mb-4">Meet Your Parnell Dentists</h2>
<p className="text-muted">A highly qualified team dedicated to continuous education and patient care.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group reveal-on-scroll">
<div className="relative overflow-hidden rounded-xl mb-4 bg-surfaceHighlight">
<img alt="Doctor" className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-white text-xs font-medium">BDS (Otago), PhD</span>
</div>
</div>
<h3 className="font-heading font-bold text-lg text-dark">Dr. Sarah Bennett</h3>
<p className="text-sm text-primary font-medium">Principal Dentist</p>
</div>

<div className="group reveal-on-scroll delay-100">
<div className="relative overflow-hidden rounded-xl mb-4 bg-surfaceHighlight">
<img alt="Doctor" className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-white text-xs font-medium">DDS (Melbourne)</span>
</div>
</div>
<h3 className="font-heading font-bold text-lg text-dark">Dr. James Chen</h3>
<p className="text-sm text-primary font-medium">Cosmetic Specialist</p>
</div>

<div className="group reveal-on-scroll delay-200">
<div className="relative overflow-hidden rounded-xl mb-4 bg-surfaceHighlight">
<img alt="Doctor" className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-white text-xs font-medium">BOH (Auckland)</span>
</div>
</div>
<h3 className="font-heading font-bold text-lg text-dark">Emma Davis</h3>
<p className="text-sm text-primary font-medium">Lead Hygienist</p>
</div>

<div className="group reveal-on-scroll delay-300">
<div className="relative overflow-hidden rounded-xl mb-4 bg-surfaceHighlight">
<img alt="Doctor" className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-white text-xs font-medium">Patient Coordinator</span>
</div>
</div>
<h3 className="font-heading font-bold text-lg text-dark">Michael Ross</h3>
<p className="text-sm text-primary font-medium">Practice Manager</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark relative overflow-hidden" id="book">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[100px] rounded-full"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16">
<div className="text-white reveal-on-scroll">
<span className="text-accent font-bold tracking-wider text-xs uppercase mb-4 block">Contact Us</span>
<h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">Ready for a brighter smile?</h2>
<p className="text-gray-400 text-lg mb-10">
                    Book your consultation online or give us a call. New patients are always welcome at Parnell Dentistry.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="bg-accent/20 p-2 rounded-lg text-accent">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold mb-1">Visit Us</h4>
<p className="text-sm text-gray-400">123 Parnell Road, Parnell<br/>Auckland 1052, New Zealand</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="bg-accent/20 p-2 rounded-lg text-accent">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold mb-1">Call Us</h4>
<p className="text-sm text-gray-400">09 555 1234</p>
<p className="text-xs text-gray-500 mt-1">Mon-Fri: 8am - 6pm</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="bg-accent/20 p-2 rounded-lg text-accent">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold mb-1">Email</h4>
<p className="text-sm text-gray-400">reception@parnelldentistry.co.nz</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 lg:p-10 reveal-on-scroll delay-100 shadow-2xl">
<form className="space-y-5">
<h3 className="font-heading font-bold text-2xl text-dark mb-6">Request Appointment</h3>
<div className="grid grid-cols-2 gap-5">
<div className="input-group">
<input className="input-field" id="fname" placeholder=" " required="" type="text"/>
<label className="input-label" htmlFor="fname">First Name</label>
</div>
<div className="input-group">
<input className="input-field" id="lname" placeholder=" " required="" type="text"/>
<label className="input-label" htmlFor="lname">Last Name</label>
</div>
</div>
<div className="input-group">
<input className="input-field" id="email" placeholder=" " required="" type="email"/>
<label className="input-label" htmlFor="email">Email Address</label>
</div>
<div className="input-group">
<input className="input-field" id="phone" placeholder=" " required="" type="tel"/>
<label className="input-label" htmlFor="phone">Phone Number</label>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="input-group">
<select className="input-field appearance-none bg-white" style={{paddingTop: '1rem'}}>
<option>General Checkup</option>
<option>Hygiene / Clean</option>
<option>Pain / Emergency</option>
<option>Cosmetic Consult</option>
</select>
<label className="input-label">Reason</label>
<iconify-icon className="absolute right-3 top-4 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="input-group">
<input className="input-field text-darkText" required="" type="date"/>
<label className="input-label bg-white px-1 -top-2.5 text-xs text-primary font-semibold">Preferred Date</label>
</div>
</div>
<div className="input-group">
<textarea className="input-field" id="msg" placeholder=" " rows="3"></textarea>
<label className="input-label" htmlFor="msg">Additional Notes</label>
</div>
<button className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-lg hover:bg-primaryDark transition-all duration-300" type="submit">
                        Submit Request
                    </button>
<p className="text-xs text-center text-muted mt-4">By submitting this form, you agree to our privacy policy.</p>
</form>
</div>
</div>
</section>

<footer className="bg-surface border-t border-border pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white">
<iconify-icon height="18" icon="solar:tooth-linear" width="18"></iconify-icon>
</div>
<span className="font-heading font-bold text-lg text-dark">PARNELL</span>
</div>
<p className="text-sm text-muted leading-relaxed">
                        Providing premier dental care to the Parnell community and greater Auckland region since 2003.
                    </p>
</div>
<div>
<h4 className="font-bold text-dark mb-4">Services</h4>
<ul className="space-y-2 text-sm text-muted">
<li><a className="hover:text-primary transition-colors" href="#">General Dentistry</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Cosmetic Whitening</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Emergency Care</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-dark mb-4">Patients</h4>
<ul className="space-y-2 text-sm text-muted">
<li><a className="hover:text-primary transition-colors" href="#">New Patient Form</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Payment Options</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Insurance</a></li>
<li><a className="hover:text-primary transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-dark mb-4">Hours</h4>
<ul className="space-y-2 text-sm text-muted">
<li className="flex justify-between"><span>Mon - Thu</span> <span className="text-dark font-medium">8am - 7pm</span></li>
<li className="flex justify-between"><span>Friday</span> <span className="text-dark font-medium">8am - 5pm</span></li>
<li className="flex justify-between"><span>Saturday</span> <span className="text-dark font-medium">9am - 1pm</span></li>
<li className="flex justify-between"><span>Sunday</span> <span className="text-primary">Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
<p>© 2024 Parnell Dentistry Ltd. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-dark" href="#">Privacy Policy</a>
<a className="hover:text-dark" href="#">Terms of Service</a>
<a className="hover:text-dark" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

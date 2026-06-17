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
surface: '#F8FAFC', // Slate 50
surfaceHighlight: '#EFF6FF', // Blue 50
primary: '#2563EB', // Blue 600
primaryDark: '#1D4ED8', // Blue 700
accent: '#06B6D4', // Cyan 500
dark: '#0F172A', // Slate 900
darkText: '#1E293B', // Slate 800
muted: '#64748B', // Slate 500
border: '#E2E8F0', // Slate 200
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
boxShadow: {
'soft': '0 10px 40px -10px rgba(37, 99, 235, 0.1)',
'lift': '0 20px 40px -15px rgba(37, 99, 235, 0.15)',
'glow': '0 0 20px rgba(6, 182, 212, 0.15)',
},
backgroundImage: {
'hero-gradient': 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Reveal on Scroll Animation
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Trigger Counter Animation if it's a counter container
                    const counters = entry.target.querySelectorAll('.counter');
                    if(counters.length > 0) {
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000; // ms
                            const increment = target / (duration / 16); // 60fps
                            
                            let current = 0;
                            const updateCounter = () => {
                                current += increment;
                                if(current < target) {
                                    counter.innerText = Math.ceil(current) + (target > 100 ? '+' : '');
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target + (target > 100 ? '+' : '');
                                }
                            };
                            updateCounter();
                        });
                        // Stop observing once triggered
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-sm', 'bg-white/95');
                nav.classList.remove('bg-white/80');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/95');
                nav.classList.add('bg-white/80');
            }
        });

        // Accordion Logic
        function toggleAccordion(element) {
            // Close others
            const allItems = document.querySelectorAll('.accordion-item');
            allItems.forEach(item => {
                if(item !== element && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle clicked
            element.classList.toggle('active');
        }

        // Form Handling
        function selectOption(value) {
            document.getElementById('selected-treatment').innerText = value;
            document.getElementById('selected-treatment').classList.add('text-dark');
            document.getElementById('treatmentInput').value = value;
        }

        function selectTime(value) {
            document.getElementById('selected-time').innerText = value;
            document.getElementById('selected-time').classList.add('text-dark');
        }

        function handleSubmit() {
            const form = document.getElementById('bookingForm');
            const successMsg = document.getElementById('successMessage');
            
            // Simulate API call
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Processing...';
            lucide.createIcons();

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
            document.getElementById('selected-treatment').innerText = 'Select Treatment';
            document.getElementById('selected-time').innerText = 'Preferred Time';
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-border" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="smile"></i>
</div>
<span className="font-heading font-semibold text-lg md:text-xl tracking-tight text-dark uppercase">Singh Dental Care</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
<a className="hover:text-primary transition-colors" href="#home">Home</a>
<a className="hover:text-primary transition-colors" href="#about">About</a>
<a className="hover:text-primary transition-colors" href="#services">Services</a>
<a className="hover:text-primary transition-colors" href="#testimonials">Testimonials</a>
</div>
<div className="hidden md:flex">
<a className="bg-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary transition-colors duration-300 shadow-lg shadow-dark/20 hover:shadow-primary/30 transform hover:-translate-y-0.5" href="#book">
                    Book Appointment
                </a>
</div>

<button className="md:hidden text-dark" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-lg font-medium text-dark" href="#home">Home</a>
<a className="text-lg font-medium text-dark" href="#about">About</a>
<a className="text-lg font-medium text-dark" href="#services">Services</a>
<a className="bg-primary text-white text-center py-3 rounded-lg font-medium" href="#book">Book Now</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-hero-gradient" id="home">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surfaceHighlight border border-primary/20 text-primary text-xs font-semibold mb-6 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                    Accepting New Patients
                </div>
<h1 className="font-heading font-semibold text-4xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-dark">
                    Advanced Dental Care <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Designed for Comfort</span>
</h1>
<p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
                    Experience gentle treatments, modern technology, and a safe, hygienic clinic environment tailored for your peace of mind at Singh Dental Care.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-primary text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primaryDark transition-all duration-300 shadow-soft shadow-primary/30 text-center flex items-center justify-center gap-2" href="#book">
                        Book Appointment <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="bg-white border border-border text-darkText px-8 py-3.5 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300 text-center shadow-sm" href="#services">
                        Explore Services
                    </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-muted">
<div className="flex -space-x-2">
<img alt="Patient" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Patient" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Patient" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span>Trusted by <span className="text-primary font-semibold">5,000+</span> patients</span>
</div>
</div>

<div className="relative reveal-on-scroll delay-200">
<div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10 rounded-[2.5rem] transform rotate-3 scale-95 translate-y-4"></div>
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 h-[500px] group border border-white">
<img alt="Modern Dental Clinic" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg flex items-center justify-between border border-white/50">
<div className="flex items-center gap-3">
<div className="bg-surfaceHighlight p-2 rounded-lg text-primary">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-xs text-muted uppercase tracking-wider font-semibold">Hygiene Safety</p>
<p className="font-heading font-semibold text-dark">100% Compliant</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-b border-border">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-surface hover:bg-surfaceHighlight transition-colors duration-300 border border-transparent hover:border-blue-100 group reveal-on-scroll">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="font-heading font-semibold text-dark mb-2">Sterilized &amp; Safe</h3>
<p className="text-sm text-muted">Top-tier sterilization protocols ensuring a germ-free environment.</p>
</div>

<div className="p-6 rounded-2xl bg-surface hover:bg-surfaceHighlight transition-colors duration-300 border border-transparent hover:border-blue-100 group reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="microscope"></i>
</div>
<h3 className="font-heading font-semibold text-dark mb-2">Modern Tech</h3>
<p className="text-sm text-muted">Digital X-rays and intraoral cameras for precise diagnosis.</p>
</div>

<div className="p-6 rounded-2xl bg-surface hover:bg-surfaceHighlight transition-colors duration-300 border border-transparent hover:border-blue-100 group reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="font-heading font-semibold text-dark mb-2">Caring Staff</h3>
<p className="text-sm text-muted">Experienced specialists dedicated to your comfort and health.</p>
</div>

<div className="p-6 rounded-2xl bg-surface hover:bg-surfaceHighlight transition-colors duration-300 border border-transparent hover:border-blue-100 group reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="smile-plus"></i>
</div>
<h3 className="font-heading font-semibold text-dark mb-2">Gentle Care</h3>
<p className="text-sm text-muted">Pain-free techniques designed for anxious patients.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/2 relative reveal-on-scroll">
<div className="grid grid-cols-2 gap-4">
<img className="rounded-2xl object-cover h-64 w-full shadow-lg transform translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img className="rounded-2xl object-cover h-64 w-full shadow-lg" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl border-4 border-surface">
<span className="font-heading font-bold text-3xl text-accent">10+</span>
<span className="text-xs text-center leading-tight opacity-80">Years Exp.</span>
</div>
</div>

<div className="lg:w-1/2 reveal-on-scroll delay-100">
<span className="text-primary font-medium tracking-wide text-sm uppercase mb-2 block">About Our Clinic</span>
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-dark mb-6 tracking-tight">
                        Where Precision Meets <span className="text-primary">Compassion</span>
</h2>
<p className="text-muted mb-6 leading-relaxed">
                        At Singh Dental Care, we believe that a visit to the dentist should be a restorative experience. Led by Dr. Raju Singh, our team combines clinical excellence with a philosophy rooted in patient comfort.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-accent mt-0.5" data-lucide="check-circle-2"></i>
<div>
<h4 className="font-medium text-dark">Mission</h4>
<p className="text-sm text-muted">To provide world-class dental care with a focus on hygiene and comfort.</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-accent mt-0.5" data-lucide="check-circle-2"></i>
<div>
<h4 className="font-medium text-dark">Technology</h4>
<p className="text-sm text-muted">Utilizing state-of-the-art scanners and painless injection systems.</p>
</div>
</div>
</div>
<a className="text-primary font-medium hover:text-dark transition-colors inline-flex items-center gap-2 group" href="#book">
                        Meet Our Team <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="text-primary font-medium tracking-wide text-sm uppercase mb-2 block">Our Expertise</span>
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-dark mb-4 tracking-tight">Comprehensive Dental Solutions</h2>
<p className="text-muted">From routine checkups to complex cosmetic makeovers, we cover all your dental needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-surface rounded-2xl p-2 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative">
<div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="General Dentistry" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-lg text-dark">General Dentistry</h3>
<i className="w-5 h-5 text-primary" data-lucide="stethoscope"></i>
</div>
<p className="text-sm text-muted mb-4">Routine exams, cleanings, and fillings to maintain optimal oral health.</p>
<a className="text-xs font-medium text-primary uppercase tracking-wider hover:text-dark transition-colors" href="#book">Book Now</a>
</div>
</div>

<div className="bg-surface rounded-2xl p-2 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll delay-100">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative">
<div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Cosmetic Dentistry" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-lg text-dark">Cosmetic Dentistry</h3>
<i className="w-5 h-5 text-primary" data-lucide="sparkle"></i>
</div>
<p className="text-sm text-muted mb-4">Teeth whitening, veneers, and smile makeovers for a confident look.</p>
<a className="text-xs font-medium text-primary uppercase tracking-wider hover:text-dark transition-colors" href="#book">Book Now</a>
</div>
</div>

<div className="bg-surface rounded-2xl p-2 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll delay-200">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative">
<div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Implants" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-lg text-dark">Dental Implants</h3>
<i className="w-5 h-5 text-primary" data-lucide="anchor"></i>
</div>
<p className="text-sm text-muted mb-4">Permanent, natural-looking solutions for missing teeth replacement.</p>
<a className="text-xs font-medium text-primary uppercase tracking-wider hover:text-dark transition-colors" href="#book">Book Now</a>
</div>
</div>

<div className="bg-surface rounded-2xl p-2 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative">
<div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Orthodontics" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-lg text-dark">Braces &amp; Aligners</h3>
<i className="w-5 h-5 text-primary" data-lucide="align-center"></i>
</div>
<p className="text-sm text-muted mb-4">Invisible aligners and traditional braces for a perfectly straight smile.</p>
<a className="text-xs font-medium text-primary uppercase tracking-wider hover:text-dark transition-colors" href="#book">Book Now</a>
</div>
</div>

<div className="bg-surface rounded-2xl p-2 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll delay-100">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative">
<div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Root Canal" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-lg text-dark">Root Canal</h3>
<i className="w-5 h-5 text-primary" data-lucide="activity"></i>
</div>
<p className="text-sm text-muted mb-4">Pain-free therapy to save infected teeth and restore function.</p>
<a className="text-xs font-medium text-primary uppercase tracking-wider hover:text-dark transition-colors" href="#book">Book Now</a>
</div>
</div>

<div className="bg-surface rounded-2xl p-2 shadow-sm border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-300 group reveal-on-scroll delay-200">
<div className="overflow-hidden rounded-xl h-48 mb-4 relative">
<div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Pediatric" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-heading font-semibold text-lg text-dark">Pediatric Dentistry</h3>
<i className="w-5 h-5 text-primary" data-lucide="baby"></i>
</div>
<p className="text-sm text-muted mb-4">Gentle care for children ensuring a lifetime of healthy smiles.</p>
<a className="text-xs font-medium text-primary uppercase tracking-wider hover:text-dark transition-colors" href="#book">Book Now</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-dark text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="absolute inset-0 bg-gradient-to-r from-primaryDark/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
<div className="reveal-on-scroll">
<span className="block text-4xl lg:text-5xl font-heading font-semibold text-accent mb-2 counter" data-target="5000">0</span>
<span className="text-sm text-white/70">Happy Patients</span>
</div>
<div className="reveal-on-scroll delay-100">
<span className="block text-4xl lg:text-5xl font-heading font-semibold text-accent mb-2 counter" data-target="15">0</span>
<span className="text-sm text-white/70">Experts</span>
</div>
<div className="reveal-on-scroll delay-200">
<span className="block text-4xl lg:text-5xl font-heading font-semibold text-accent mb-2 counter" data-target="12">0</span>
<span className="text-sm text-white/70">Awards Won</span>
</div>
<div className="reveal-on-scroll delay-300">
<span className="block text-4xl lg:text-5xl font-heading font-semibold text-accent mb-2 counter" data-target="100">0</span>
<span className="text-sm text-white/70">% Safe &amp; Sterile</span>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<div>
<h2 className="font-heading font-semibold text-3xl text-dark">Patient Stories</h2>
<div className="flex items-center gap-2 mt-2">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-muted">4.9/5 from Google Reviews</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-colors reveal-on-scroll">
<p className="text-darkText italic mb-6">"I've always been afraid of dentists, but the team at Singh Dental Care made me feel so calm. The pain-free injection system is a game changer!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surfaceHighlight rounded-full flex items-center justify-center text-primary font-bold">JD</div>
<div>
<p className="font-semibold text-sm text-dark">James Doe</p>
<p className="text-xs text-muted">Root Canal Patient</p>
</div>
<i className="w-8 h-8 text-border ml-auto opacity-50" data-lucide="quote"></i>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-colors reveal-on-scroll delay-100">
<p className="text-darkText italic mb-6">"Incredibly modern clinic. Everything is spotless, and they explained every step of my implant procedure clearly."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-dark/5 rounded-full flex items-center justify-center text-dark font-bold">AS</div>
<div>
<p className="font-semibold text-sm text-dark">Anna Smith</p>
<p className="text-xs text-muted">Implant Patient</p>
</div>
<i className="w-8 h-8 text-border ml-auto opacity-50" data-lucide="quote"></i>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-colors reveal-on-scroll delay-200">
<p className="text-darkText italic mb-6">"Brought my kids here for their first checkup. The pediatric specialist was amazing. They actually want to go back!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold">MR</div>
<div>
<p className="font-semibold text-sm text-dark">Michael Ross</p>
<p className="text-xs text-muted">Family Care</p>
</div>
<i className="w-8 h-8 text-border ml-auto opacity-50" data-lucide="quote"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-border">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-primary font-medium tracking-wide text-sm uppercase mb-2 block">Common Questions</span>
<h2 className="font-heading font-semibold text-3xl text-dark tracking-tight">Everything you need to know</h2>
</div>
<div className="space-y-4">

<div className="accordion-item border-b border-border pb-4 reveal-on-scroll delay-100" onclick="toggleAccordion(this)">
<div className="flex justify-between items-center cursor-pointer py-2 group">
<h3 className="font-medium text-lg text-dark group-hover:text-primary transition-colors">Do you accept insurance plans?</h3>
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-muted group-hover:bg-surfaceHighlight group-hover:text-primary transition-colors accordion-icon">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</div>
<div className="accordion-content">
<p className="text-muted text-sm leading-relaxed py-2">Yes, we accept most major PPO dental insurance plans. Our team can also help you verify your benefits before your appointment to ensure transparency regarding costs.</p>
</div>
</div>

<div className="accordion-item border-b border-border pb-4 reveal-on-scroll delay-200" onclick="toggleAccordion(this)">
<div className="flex justify-between items-center cursor-pointer py-2 group">
<h3 className="font-medium text-lg text-dark group-hover:text-primary transition-colors">What if I have a dental emergency?</h3>
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-muted group-hover:bg-surfaceHighlight group-hover:text-primary transition-colors accordion-icon">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</div>
<div className="accordion-content">
<p className="text-muted text-sm leading-relaxed py-2">We reserve time daily for emergency cases. If you are in severe pain or have damaged a tooth, please call us immediately. For after-hours emergencies, our voicemail provides an emergency contact number.</p>
</div>
</div>

<div className="accordion-item border-b border-border pb-4 reveal-on-scroll delay-300" onclick="toggleAccordion(this)">
<div className="flex justify-between items-center cursor-pointer py-2 group">
<h3 className="font-medium text-lg text-dark group-hover:text-primary transition-colors">Are the procedures painful?</h3>
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-muted group-hover:bg-surfaceHighlight group-hover:text-primary transition-colors accordion-icon">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</div>
<div className="accordion-content">
<p className="text-muted text-sm leading-relaxed py-2">Our clinic specializes in "Gentle Dentistry." We use the latest pain-free injection technologies and offer sedation options for anxious patients to ensure a comfortable experience.</p>
</div>
</div>

<div className="accordion-item border-b border-border pb-4 reveal-on-scroll delay-300" onclick="toggleAccordion(this)">
<div className="flex justify-between items-center cursor-pointer py-2 group">
<h3 className="font-medium text-lg text-dark group-hover:text-primary transition-colors">How often should I visit for a checkup?</h3>
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-muted group-hover:bg-surfaceHighlight group-hover:text-primary transition-colors accordion-icon">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</div>
<div className="accordion-content">
<p className="text-muted text-sm leading-relaxed py-2">The American Dental Association recommends visiting your dentist at least twice a year (every 6 months) for a routine cleaning and examination to prevent long-term issues.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface relative" id="book">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 border border-border">
<div className="text-center mb-10">
<h2 className="font-heading font-semibold text-3xl text-dark mb-2">Book Your Visit</h2>
<p className="text-muted">Fill out the form below and our coordinator will confirm your slot shortly.</p>
</div>
<form className="space-y-6" id="bookingForm" onsubmit="event.preventDefault(); handleSubmit();">
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
<span id="selected-treatment">Select Treatment</span>
<i className="w-4 h-4 text-primary" data-lucide="chevron-down"></i>
</div>
<div className="custom-select-options text-sm">
<div className="custom-option" onclick="selectOption('General Checkup')">General Checkup</div>
<div className="custom-option" onclick="selectOption('Teeth Whitening')">Teeth Whitening</div>
<div className="custom-option" onclick="selectOption('Dental Implant')">Dental Implant</div>
<div className="custom-option" onclick="selectOption('Braces/Invisalign')">Braces/Invisalign</div>
<div className="custom-option" onclick="selectOption('Emergency Pain')">Emergency Pain</div>
</div>
<input id="treatmentInput" name="treatment" type="hidden"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="input-group">
<input className="input-field text-darkText" id="date" required="" type="date"/>
<label className="input-label bg-white px-1 -top-2.5 text-xs text-primary font-medium" htmlFor="date">Preferred Date</label>
</div>
<div className="custom-select-wrapper" onclick="this.classList.toggle('open')">
<div className="custom-select-trigger text-sm text-darkText">
<span id="selected-time">Preferred Time</span>
<i className="w-4 h-4 text-primary" data-lucide="clock"></i>
</div>
<div className="custom-select-options text-sm">
<div className="custom-option" onclick="selectTime('Morning (9AM - 12PM)')">Morning (9AM - 12PM)</div>
<div className="custom-option" onclick="selectTime('Afternoon (12PM - 4PM)')">Afternoon (12PM - 4PM)</div>
<div className="custom-option" onclick="selectTime('Evening (4PM - 8PM)')">Evening (4PM - 8PM)</div>
</div>
</div>
</div>

<div className="input-group">
<textarea className="input-field" id="message" placeholder=" " rows="3"></textarea>
<label className="input-label" htmlFor="message">Describe your concern (Optional)</label>
</div>
<button className="w-full bg-primary text-white font-medium py-4 rounded-lg shadow-lg shadow-primary/25 hover:bg-primaryDark hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2" type="submit">
                        Confirm Appointment
                    </button>
</form>

<div className="hidden text-center py-12" id="successMessage">
<div className="w-16 h-16 bg-surfaceHighlight rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
<i className="w-8 h-8" data-lucide="check"></i>
</div>
<h3 className="text-2xl font-heading font-semibold text-dark mb-2">Thank you!</h3>
<p className="text-muted">Our clinic coordinator will contact you shortly to confirm your appointment.</p>
<button className="mt-6 text-primary font-medium hover:underline" onclick="resetForm()">Book another</button>
</div>
</div>
</div>
</section>

<footer className="bg-dark pt-20 pb-10 text-white/80 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="smile"></i>
</div>
<span className="font-heading font-semibold text-lg tracking-tight text-white uppercase">Singh Dental Care</span>
</div>
<p className="text-sm leading-relaxed text-white/60 mb-6">
                        Providing premium dental care with a focus on hygiene, technology, and patient comfort since 2012.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-accent mt-0.5" data-lucide="map-pin"></i>
<span>120 Station Road,<br/>Near PyareLal Chauraha,<br/>Rasra City, Ballia (UP)</span>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<i className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" data-lucide="phone"></i>
<a className="hover:text-accent transition-colors" href="tel:6386474342">+91 6386474342</a>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-accent" data-lucide="mail"></i>
<a className="hover:text-accent transition-colors" href="mailto:rs.raju.singh08@gmail.com">rs.raju.singh08@gmail.com</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-6">Opening Hours</h4>
<ul className="space-y-2 text-sm">
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Mon - Fri</span>
<span className="text-white">9:00 AM - 8:00 PM</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Saturday</span>
<span className="text-white">10:00 AM - 6:00 PM</span>
</li>
<li className="flex justify-between pt-2">
<span>Sunday</span>
<span className="text-accent">Closed</span>
</li>
</ul>
</div>

<div className="rounded-xl overflow-hidden h-48 bg-gray-800 relative group">

<img alt="Map Location" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<a className="absolute inset-0 flex items-center justify-center bg-dark/20 group-hover:bg-dark/40 transition-colors" href="#">
<span className="bg-white text-dark px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2">
<i className="w-3 h-3" data-lucide="navigation"></i> Get Directions
                        </span>
</a>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
<p>© 2023 Singh Dental Care. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

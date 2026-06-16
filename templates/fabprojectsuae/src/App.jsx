import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
slate: {
50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617',
},
blue: {
50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554',
}
},
animation: {
'fade-up': 'fadeUp 0.8s ease-out forwards',
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



      document.addEventListener('DOMContentLoaded', () => {
        // Reveal Animations
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              if(entry.target.id === 'progress-line') {
                   entry.target.style.width = '100%';
              }
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Navigation Scroll Effect
        const navbar = document.getElementById('navbar');
        const stickyCta = document.getElementById('mobile-sticky-cta');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
          // Navbar Style
          if (window.scrollY > 50) {
            navbar.classList.add('border-slate-200', 'shadow-sm');
            navbar.classList.remove('border-transparent');
          } else {
            navbar.classList.remove('border-slate-200', 'shadow-sm');
            navbar.classList.add('border-transparent');
          }

          // Mobile Sticky Bar Logic (Always show, or hide on scroll down/show on up)
          // Simplified: Always show on mobile unless at very top to avoid clutter, 
          // or just keep it fixed. User said "buttons on the bottom... fix them".
          // I will keep it visible but ensure it doesn't bounce.
          if (window.scrollY > 100) {
              stickyCta.style.transform = 'translateY(0)';
          } else {
              // Optional: Hide at very top if hero buttons are visible
              // For now, let's keep it visible everywhere for ease of access
              stickyCta.style.transform = 'translateY(0)';
          }
        });

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');
        let isOpen = false;

        function toggleMenu() {
            isOpen = !isOpen;
            if(isOpen) {
                menu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
                btn.innerHTML = '<span class="iconify" data-icon="lucide:x" data-width="28"></span>';
            } else {
                menu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
                btn.innerHTML = '<span class="iconify" data-icon="lucide:menu" data-width="28"></span>';
            }
        }

        btn.addEventListener('click', toggleMenu);

        links.forEach(link => {
          link.addEventListener('click', () => {
            if(isOpen) toggleMenu();
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-transparent transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-white/90 backdrop-blur-md"></div>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-10">

<a className="flex items-center gap-2 group no-tap-highlight" href="#">
<span className="uppercase font-bold text-slate-950 text-xl tracking-tight">FAB Projects</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" href="#">Home</a>
<a className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" href="#about">About</a>
<a className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold tracking-wide rounded transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-600/30 transform hover:-translate-y-0.5" href="#contact">
            Book Now
          </a>
<button className="md:hidden p-2 text-slate-900 touch-manipulation no-tap-highlight" id="mobile-menu-btn">
<span className="iconify" data-icon="lucide:menu" data-width="28"></span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white translate-x-full transition-transform duration-300 flex flex-col pt-24 px-6 gap-6 h-[100dvh]" id="mobile-menu">
<a className="font-sans font-bold text-3xl text-slate-900 mobile-link no-tap-highlight" href="#">Home</a>
<a className="font-sans font-bold text-3xl text-slate-900 mobile-link no-tap-highlight" href="#about">About</a>
<a className="font-sans font-bold text-3xl text-slate-900 mobile-link no-tap-highlight" href="#services">Services</a>
<a className="font-sans font-bold text-3xl text-slate-900 mobile-link no-tap-highlight" href="#contact">Contact</a>
<a className="mt-4 w-full py-4 bg-blue-600 text-white font-bold text-center rounded mobile-link no-tap-highlight active:bg-blue-700 transition-colors" href="#contact">Book Now</a>
</div>

<section className="md:pt-48 md:pb-32 overflow-hidden bg-slate-50 pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 mb-6 reveal active">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
<span className="text-xs font-bold tracking-wide uppercase">Serving all of UAE</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] reveal stagger-1 active text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Transforming Spaces with
            <br/>
<span className="font-light italic text-blue-600 font-serif">Creative Vision</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed reveal stagger-2 active">
            Professional construction, renovation, and maintenance services. We build reliability and trust into every project.
          </p>
<div className="flex flex-col sm:flex-row gap-4 reveal stagger-3 active">

<a className="group inline-flex items-center justify-center gap-3 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 sm:w-auto text-white/90 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-400 to-blue-600 w-full max-w-fit rounded-3xl p-1 relative touch-manipulation no-tap-highlight" href="#contact" style={{boxShadow: 'inset 0 1px 0 rgba(56, 189, 248, 0.4)'}}>

<span className="pointer-events-none absolute -inset-1 rounded-full opacity-0 blur-xl transition duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(56,189,248,.55), rgba(56,189,248,0) 70%)'}}></span>

<span className="isolate w-full inline-flex items-center justify-center gap-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl py-3 px-8 relative overflow-hidden">
<span className="pointer-events-none absolute inset-0 rounded-[999px] opacity-70 [box-shadow:inset_0_1px_0_rgba(255,255,255,.08),inset_0_-6px_20px_rgba(0,0,0,.5)]"></span>

<span className="sparkle left-4 top-2" style={{animationDelay: '0s'}}></span>
<span className="sparkle left-20 top-3" style={{animationDelay: '0.6s'}}></span>
<span className="sparkle right-8 top-4" style={{animationDelay: '1.2s'}}></span>
<span className="z-10 font-bold tracking-tight relative text-white">Inquire Now</span>
<svg className="relative z-10 h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>

<a className="group inline-flex items-center justify-center gap-3 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 sm:w-auto text-white/90 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-400 to-blue-600 w-full max-w-fit rounded-3xl p-1 relative touch-manipulation no-tap-highlight" href="tel:+971503794217" style={{boxShadow: 'inset 0 1px 0 rgba(56, 189, 248, 0.4)'}}>

<span className="pointer-events-none absolute -inset-1 rounded-full opacity-0 blur-xl transition duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(56,189,248,.55), rgba(56,189,248,0) 70%)'}}></span>

<span className="isolate w-full inline-flex items-center justify-center gap-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl py-3 px-8 relative overflow-hidden">
<span className="pointer-events-none absolute inset-0 rounded-[999px] opacity-70 [box-shadow:inset_0_1px_0_rgba(255,255,255,.08),inset_0_-6px_20px_rgba(0,0,0,.5)]"></span>

<span className="sparkle left-10 top-6" style={{animationDelay: '0.3s'}}></span>
<span className="sparkle left-28 top-7" style={{animationDelay: '0.9s'}}></span>
<span className="sparkle right-16 top-8" style={{animationDelay: '1.5s'}}></span>
<span className="z-10 font-bold tracking-tight relative text-white">Call Now</span>
<svg className="relative z-10 h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" fill="currentColor" viewbox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
</span>
</a>
</div>
</div>

<div className="relative reveal stagger-3 active">
<div className="relative rounded overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-900/10">
<img alt="Modern Interior Renovation" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded shadow-xl border border-slate-100 hidden md:block">
<div className="flex items-center gap-3">
<div className="bg-blue-100 p-2 rounded-full text-blue-600">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<div>
<p className="font-bold text-slate-900 text-lg">100%</p>
<p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="about">
<div className="max-w-4xl mx-auto px-6 text-center reveal active">
<h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-6">About FAB Projects UAE</h2>
<div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
<p className="text-lg text-slate-600 leading-relaxed text-balance">
                Fix and Build Projects specializes in creating stunning transformations for homes and businesses. From full-scale renovations to essential maintenance, we deliver quality craftsmanship with meticulous attention to detail and on-time execution. Our team is dedicated to bringing your vision to life.
            </p>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal active">
<div>
<h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-4">Our Services</h2>
<p className="text-slate-600 max-w-md">Comprehensive solutions for residential and commercial properties.</p>
</div>
<a className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group transition-colors no-tap-highlight" href="#contact">
            Get a free quote
            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group p-6 rounded bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal stagger-1">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:home" data-width="24"></span>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900">Home Renovation</h3>
<p className="text-sm text-slate-500 mb-6">Complete home makeovers tailored to your style and needs.</p>
<a className="text-sm font-semibold text-blue-600 group-hover:underline no-tap-highlight" href="#contact">Enquire Now</a>
</div>

<div className="group p-6 rounded bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal stagger-2">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:building-2" data-width="24"></span>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900">Office Renovation</h3>
<p className="text-sm text-slate-500 mb-6">Modern workspace designs that enhance productivity.</p>
<a className="text-sm font-semibold text-blue-600 group-hover:underline no-tap-highlight" href="#contact">Enquire Now</a>
</div>

<div className="group p-6 rounded bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal stagger-3">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900">Electrician</h3>
<p className="text-sm text-slate-500 mb-6">Safe and certified electrical repairs and installations.</p>
<a className="text-sm font-semibold text-blue-600 group-hover:underline no-tap-highlight" href="#contact">Enquire Now</a>
</div>

<div className="group p-6 rounded bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal stagger-1">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:droplets" data-width="24"></span>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900">Plumbing</h3>
<p className="text-sm text-slate-500 mb-6">Expert leak repairs, installations, and drainage solutions.</p>
<a className="text-sm font-semibold text-blue-600 group-hover:underline no-tap-highlight" href="#contact">Enquire Now</a>
</div>

<div className="group p-6 rounded bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal stagger-2">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:layout-grid" data-width="24"></span>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900">Modular Kitchen</h3>
<p className="text-sm text-slate-500 mb-6">Custom kitchen designs maximizing space and functionality.</p>
<a className="text-sm font-semibold text-blue-600 group-hover:underline no-tap-highlight" href="#contact">Enquire Now</a>
</div>

<div className="group p-6 rounded bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal stagger-3">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:paint-roller" data-width="24"></span>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900">Painting</h3>
<p className="text-sm text-slate-500 mb-6">Interior and exterior painting with premium finishes.</p>
<a className="text-sm font-semibold text-blue-600 group-hover:underline no-tap-highlight" href="#contact">Enquire Now</a>
</div>

<div className="group p-6 rounded bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal stagger-1">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bug" data-width="24"></span>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900">Pest Control</h3>
<p className="text-sm text-slate-500 mb-6">Effective treatments to keep your property pest-free.</p>
<a className="text-sm font-semibold text-blue-600 group-hover:underline no-tap-highlight" href="#contact">Enquire Now</a>
</div>

<div className="group p-6 rounded bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal stagger-2">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:hammer" data-width="24"></span>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900">Carpentry</h3>
<p className="text-sm text-slate-500 mb-6">Custom furniture, repairs, and woodworks.</p>
<a className="text-sm font-semibold text-blue-600 group-hover:underline no-tap-highlight" href="#contact">Enquire Now</a>
</div>

<div className="group p-6 rounded bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal stagger-3">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:fan" data-width="24"></span>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900">AC Services</h3>
<p className="text-sm text-slate-500 mb-6">Installation, cleaning, and repair for all AC unit types.</p>
<a className="text-sm font-semibold text-blue-600 group-hover:underline no-tap-highlight" href="#contact">Enquire Now</a>
</div>

<div className="group p-6 rounded bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal stagger-1">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:layers" data-width="24"></span>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900">Flooring Work</h3>
<p className="text-sm text-slate-500 mb-6">Tile, marble, parquet, and vinyl flooring installation.</p>
<a className="text-sm font-semibold text-blue-600 group-hover:underline no-tap-highlight" href="#contact">Enquire Now</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-sans font-bold text-4xl text-slate-900 mb-4">Why Choose FAB Projects?</h2>
<p className="text-slate-600">Committed to excellence in every build.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center reveal stagger-1">
<div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
<span className="iconify" data-icon="lucide:hard-hat" data-width="32"></span>
</div>
<h3 className="font-bold text-lg mb-2 text-slate-900">Experienced</h3>
<p className="text-sm text-slate-600">A skilled team with years of industry expertise.</p>
</div>
<div className="text-center reveal stagger-2">
<div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
<span className="iconify" data-icon="lucide:award" data-width="32"></span>
</div>
<h3 className="font-bold text-lg mb-2 text-slate-900">High Quality</h3>
<p className="text-sm text-slate-600">Premium materials and attention to detail.</p>
</div>
<div className="text-center reveal stagger-3">
<div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
<span className="iconify" data-icon="lucide:clock" data-width="32"></span>
</div>
<h3 className="font-bold text-lg mb-2 text-slate-900">Reliable</h3>
<p className="text-sm text-slate-600">We respect deadlines and your schedule.</p>
</div>
<div className="text-center reveal stagger-1">
<div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
<span className="iconify" data-icon="lucide:coins" data-width="32"></span>
</div>
<h3 className="font-bold text-lg mb-2 text-slate-900">Affordable</h3>
<p className="text-sm text-slate-600">Competitive rates with no hidden costs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-sans font-bold text-4xl text-slate-900 mb-4">How It Works</h2>
<p className="text-slate-600">Simple steps to your new space.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-200">
<div className="h-full w-0 bg-blue-600 transition-all duration-1000" id="progress-line"></div>
</div>

<div className="relative flex flex-col items-center text-center reveal stagger-1 group">
<div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 group-hover:border-blue-500 transition-colors flex items-center justify-center mb-6 relative z-10 shadow-lg">
<span className="font-bold text-3xl text-slate-300 group-hover:text-blue-600 transition-colors">01</span>
</div>
<h3 className="font-bold text-xl text-slate-900 mb-3">Contact Us</h3>
<p className="text-sm text-slate-600 max-w-xs">Reach out via phone or WhatsApp with your requirements.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal stagger-2 group">
<div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 group-hover:border-blue-500 transition-colors flex items-center justify-center mb-6 relative z-10 shadow-lg">
<span className="font-bold text-3xl text-slate-300 group-hover:text-blue-600 transition-colors">02</span>
</div>
<h3 className="font-bold text-xl text-slate-900 mb-3">Get a Quote</h3>
<p className="text-sm text-slate-600 max-w-xs">We provide a detailed assessment and transparent pricing.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal stagger-3 group">
<div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 group-hover:border-blue-500 transition-colors flex items-center justify-center mb-6 relative z-10 shadow-lg">
<span className="font-bold text-3xl text-slate-300 group-hover:text-blue-600 transition-colors">03</span>
</div>
<h3 className="font-bold text-xl text-slate-900 mb-3">We Build</h3>
<p className="text-sm text-slate-600 max-w-xs">Our team executes the project with quality and efficiency.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-950 text-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-center reveal">
<span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4">Contact Us</span>
<h2 className="font-sans font-bold text-4xl md:text-5xl mb-8">Start Your Project</h2>
<p className="text-blue-200 text-lg mb-12 font-light">
              Ready to renovate or repair? Contact FAB Projects UAE today for professional service.
            </p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded border border-blue-800 bg-blue-900 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:phone" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-bold mb-1">Phone</h4>
<a className="text-2xl font-light text-blue-400 hover:text-white transition-colors no-tap-highlight touch-manipulation" href="tel:+971503794217">+971 50 379 4217</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded border border-blue-800 bg-blue-900 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:mail" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-bold mb-1">Email</h4>
<a className="text-lg font-light text-blue-400 hover:text-white transition-colors no-tap-highlight touch-manipulation" href="mailto:fabprojects.uae@gmail.com">fabprojects.uae@gmail.com</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded border border-blue-800 bg-blue-900 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:instagram" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-bold mb-1">Social</h4>
<a className="text-lg font-light text-blue-400 hover:text-white transition-colors no-tap-highlight" href="#">@fabprojects.uae</a>
</div>
</div>
</div>
</div>

<div className="bg-white rounded p-8 md:p-10 text-slate-900 shadow-2xl reveal stagger-2">
<h3 className="font-sans font-bold text-2xl mb-6">Request a Quote</h3>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Name</label>
<input className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-slate-50" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Phone</label>
<input className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-slate-50" placeholder="Mobile number" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Service Needed</label>
<div className="relative">
<select className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-slate-50 appearance-none text-slate-600">
<option>Select a service...</option>
<option>Renovation</option>
<option>AC Service</option>
<option>Plumbing/Electrical</option>
<option>Pest Control</option>
<option>Other</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Message</label>
<textarea className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-slate-50 resize-none" placeholder="Details about your project..." rows="3"></textarea>
</div>
<button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-lg transition-all active:scale-[0.98] touch-manipulation" type="submit">
                  Book Now
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white text-slate-600 py-16 border-t border-slate-200 text-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4 text-blue-900">
<span className="iconify" data-icon="lucide:hammer" data-width="24"></span>
<span className="font-sans text-xl font-extrabold tracking-tight uppercase">FAB PROJECTS UAE</span>
</div>
<p className="max-w-xs mb-6 text-slate-500">
            Fix and Build Projects. Professional construction, renovation, and maintenance services across the UAE.
          </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded border border-slate-200 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors no-tap-highlight" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded border border-slate-200 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors no-tap-highlight" href="mailto:fabprojects.uae@gmail.com">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
</a>
</div>
</div>
<div>
<h4 className="text-slate-900 font-bold mb-4">Services</h4>
<ul className="space-y-2">
<li><a className="hover:text-blue-600 transition-colors no-tap-highlight" href="#services">Renovation</a></li>
<li><a className="hover:text-blue-600 transition-colors no-tap-highlight" href="#services">Electrician &amp; Plumbing</a></li>
<li><a className="hover:text-blue-600 transition-colors no-tap-highlight" href="#services">AC Services</a></li>
<li><a className="hover:text-blue-600 transition-colors no-tap-highlight" href="#services">Pest Control</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-900 font-bold mb-4">Contact</h4>
<ul className="space-y-2">
<li><a className="hover:text-blue-600 transition-colors no-tap-highlight" href="tel:+971503794217">+971 50 379 4217</a></li>
<li><a className="hover:text-blue-600 transition-colors no-tap-highlight" href="mailto:fabprojects.uae@gmail.com">fabprojects.uae@gmail.com</a></li>
<li><span className="text-slate-400">UAE</span></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© FAB Projects UAE. All rights reserved.</p>
</div>
</footer>


<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 pb-safe z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] transform transition-transform duration-300" id="mobile-sticky-cta">
<a className="flex-1 py-3 bg-slate-50 active:bg-slate-200 text-slate-900 font-bold rounded text-center border border-slate-200 flex items-center justify-center gap-2 touch-manipulation no-tap-highlight transition-colors" href="tel:+971503794217">
<span className="iconify" data-icon="lucide:phone" data-width="18"></span>
        Call
      </a>
<a className="flex-1 py-3 bg-blue-600 active:bg-blue-700 text-white font-bold rounded text-center flex items-center justify-center gap-2 touch-manipulation no-tap-highlight transition-colors" href="https://wa.me/971503794217">
<span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
        WhatsApp
      </a>
</div>

<a className="hidden md:flex fixed bottom-8 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 items-center justify-center group" href="https://wa.me/971503794217" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-width="32"></span>
<span className="absolute right-full mr-3 bg-white text-slate-900 px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
        Chat on WhatsApp
      </span>
</a>


    </>
  );
}

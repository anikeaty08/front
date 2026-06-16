import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        // Simple Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Select elements to animate (basic implementation for demonstration)
        document.querySelectorAll('section > div').forEach((el) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.8s ease-out';
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl tracking-tighter text-[#1e3a5f] uppercase font-medium font-geist" href="#" style={{}}>
                Aeroflow
            </a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#1e3a5f] transition-colors font-geist" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1e3a5f] transition-colors font-geist" href="#why-us" style={{transition: 'outline 0.1s ease-in-out'}}>Why Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1e3a5f] transition-colors font-geist" href="#reviews" style={{transition: 'outline 0.1s ease-in-out'}}>Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1e3a5f] transition-colors font-geist" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-[#1e3a5f] font-medium text-sm font-geist" href="tel:5551234567" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                    (555) 123-4567
                </a>
<a className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-geist" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Get Free Estimate
                </a>
</div>
</div>
</nav>

<header className="relative h-screen flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Modern Interior" className="w-full h-full object-cover ken-burns" src="https://images.unsplash.com/photo-1694675879520-ff32d348fb7f?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-[#1e3a5f]/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs tracking-wide mb-6 fade-in-up font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="w-2 h-2 rounded-full bg-[#ff6b35]"></span>
                    Available 24/7 for Emergencies
                </div>
<h1 className="md:text-7xl leading-[1.1] fade-in-up delay-100 text-5xl font-medium text-white tracking-tight font-geist mb-6">
                    Reliable HVAC Solutions <br/> for Your Home &amp; Business
                </h1>
<p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mb-10 fade-in-up delay-200 font-light font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                    25+ years of excellence in heating, cooling, and air quality. Experience the comfort of premium climate control tailored to your lifestyle.
                </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-300">
<a className="group bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-4 rounded-lg text-base font-medium transition-all duration-300 shadow-[0_4px_20px_rgba(255,107,53,0.3)] hover:shadow-[0_4px_25px_rgba(255,107,53,0.5)] flex items-center justify-center gap-2 font-geist" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Get Free Estimate
                        <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-base font-medium transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 font-geist" href="tel:5551234567" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                        Call Now: (555) 123-4567
                    </a>
</div>

<div className="mt-12 flex items-center gap-8 fade-in-up delay-400 opacity-0">
<div className="flex items-center gap-3 text-white/80">
<div className="p-2 bg-white/10 rounded-full">
<svg className="lucide lucide-shield-check w-5 h-5 text-[#ff6b35]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-sm font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Licensed &amp; Insured</span>
</div>
<div className="flex items-center gap-3 text-white/80">
<div className="p-2 bg-white/10 rounded-full">
<svg className="lucide lucide-award w-5 h-5 text-[#ff6b35]" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<span className="text-sm font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>EPA Certified</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
<svg className="lucide lucide-chevron-down w-6 h-6 text-white/50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</header>

<section className="py-24 bg-[#f8f9fa]" id="services">
<div className="max-w-7xl mx-auto px-6 animate-in" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.8s ease-out'}}>
<div className="text-center mb-16 max-w-2xl mx-auto">
<span className="text-[#ff6b35] font-medium tracking-wide uppercase text-xs font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Our Expertise</span>
<h2 className="text-3xl md:text-4xl text-[#1e3a5f] mt-3 mb-4 tracking-tight font-medium font-geist" style={{}}>Complete HVAC Solutions</h2>
<p className="text-slate-500 text-lg font-light font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Comprehensive climate control services delivered with precision and care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 bg-white border-slate-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
<div className="w-12 h-12 bg-[#1e3a5f]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff6b35] transition-colors duration-300">
<svg className="lucide lucide-flame w-6 h-6 text-[#1e3a5f] group-hover:text-white transition-colors duration-300" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#1e3a5f] font-geist mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>Heating Systems</h3>
<p className="leading-relaxed text-sm text-slate-500 font-geist mb-6" style={{transition: 'outline 0.1s ease-in-out'}}>Expert installation and repair of furnaces and heat pumps to keep you warm.</p>
<a className="inline-flex items-center text-sm font-medium text-[#ff6b35] group-hover:translate-x-1 transition-transform font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Learn more <svg className="lucide lucide-chevron-right w-4 h-4 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 border border-slate-100">
<div className="w-12 h-12 bg-[#1e3a5f]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff6b35] transition-colors duration-300">
<svg className="lucide lucide-snowflake w-6 h-6 text-[#1e3a5f] group-hover:text-white transition-colors duration-300" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#1e3a5f] mb-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Cooling Solutions</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>High-efficiency AC installation and rapid repair services for summer comfort.</p>
<a className="inline-flex items-center text-sm font-medium text-[#ff6b35] group-hover:translate-x-1 transition-transform font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Learn more <svg className="lucide lucide-chevron-right w-4 h-4 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 border border-slate-100">
<div className="w-12 h-12 bg-[#1e3a5f]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff6b35] transition-colors duration-300">
<svg className="lucide lucide-wind w-6 h-6 text-[#1e3a5f] group-hover:text-white transition-colors duration-300" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#1e3a5f] mb-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Air Quality</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Advanced filtration and purification systems for healthier indoor living.</p>
<a className="inline-flex items-center text-sm font-medium text-[#ff6b35] group-hover:translate-x-1 transition-transform font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Learn more <svg className="lucide lucide-chevron-right w-4 h-4 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 border border-slate-100">
<div className="w-12 h-12 bg-[#1e3a5f]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff6b35] transition-colors duration-300">
<svg className="lucide lucide-clock w-6 h-6 text-[#1e3a5f] group-hover:text-white transition-colors duration-300" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-medium text-[#1e3a5f] mb-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Emergency Service</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>24/7 rapid response team ready to restore your comfort anytime.</p>
<a className="inline-flex items-center text-sm font-medium text-[#ff6b35] group-hover:translate-x-1 transition-transform font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Learn more <svg className="lucide lucide-chevron-right w-4 h-4 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block px-8 py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition-all duration-300 font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                    View All Services
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="why-us">
<div className="max-w-7xl mx-auto px-6 animate-in" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s ease-out'}}>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<span className="text-[#ff6b35] font-medium tracking-wide uppercase text-xs font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Why Choose Us</span>
<h2 className="text-3xl md:text-4xl text-[#1e3a5f] mt-3 mb-12 tracking-tight font-medium font-geist" style={{}}>Why Homeowners Trust Aeroflow</h2>
<div className="space-y-10 relative">

<div className="absolute left-[27px] top-4 bottom-4 w-px bg-slate-100 -z-10"></div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-[#ff6b35] transition-colors duration-300">
<span className="text-[#1e3a5f] font-semibold text-lg font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>25</span>
</div>
<div>
<h3 className="text-xl font-medium text-[#1e3a5f] mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Years of Experience</h3>
<p className="text-slate-500 text-sm leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Over 10,000 satisfied customers across the region rely on our expertise.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-[#ff6b35] transition-colors duration-300">
<svg className="lucide lucide-check-circle w-6 h-6 text-[#1e3a5f]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium text-[#1e3a5f] mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Licensed &amp; Certified</h3>
<p className="text-slate-500 text-sm leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Our technicians are EPA certified, background checked, and fully insured.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-[#ff6b35] transition-colors duration-300">
<svg className="lucide lucide-shield w-6 h-6 text-[#1e3a5f]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium text-[#1e3a5f] mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>100% Satisfaction Guarantee</h3>
<p className="text-slate-500 text-sm leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>We stand behind our work. If you're not happy, we make it right.</p>
</div>
</div>
</div>

<div className="mt-12 pt-10 border-t border-slate-100">
<p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-4 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Certified By</p>
<div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 flex items-center font-bold text-slate-400 tracking-tighter font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>NATE</div>
<div className="h-8 flex items-center font-bold text-slate-400 tracking-tighter font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>EPA</div>
<div className="h-8 flex items-center font-bold text-slate-400 tracking-tighter font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>ENERGY STAR</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-[#1e3a5f]/5 to-[#ff6b35]/5 rounded-3xl blur-2xl opacity-50"></div>
<div className="relative bg-white p-10 rounded-2xl border border-slate-100 shadow-xl">
<div className="flex gap-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<blockquote className="text-xl text-[#1e3a5f] font-light leading-relaxed mb-8 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                            "The professionalism of the Aeroflow team was outstanding. They diagnosed the issue quickly and the installation was seamless. My energy bills have dropped significantly since."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
<img alt="Customer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<div className="font-medium text-[#1e3a5f] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Michael Roberts</div>
<div className="text-sm text-slate-500 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Homeowner, Seattle</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#ff6b35] rounded-full opacity-10 blur-xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1e3a5f] relative overflow-hidden text-white">

<div className="absolute inset-0 opacity-10 animate-in" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s ease-out'}}>
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 animate-in" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s ease-out'}}>
<div className="grid lg:grid-cols-2 gap-16">

<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center group">
<img alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-105" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b35] opacity-75"></span>
<div className="relative inline-flex rounded-full h-4 w-4 bg-[#ff6b35] border-2 border-white"></div>
</div>
</div>
<div className="absolute top-1/3 left-1/3">
<div className="relative inline-flex rounded-full h-3 w-3 bg-white/80"></div>
</div>
<div className="absolute bottom-1/3 right-1/3">
<div className="relative inline-flex rounded-full h-3 w-3 bg-white/80"></div>
</div>
<div className="absolute bottom-6 left-6 right-6 bg-[#1e3a5f]/90 backdrop-blur p-4 rounded-xl border border-white/10">
<div className="flex items-center gap-3">
<svg className="lucide lucide-map-pin text-[#ff6b35] w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<p className="font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Serving Greater Metro Area</p>
<p className="text-xs text-slate-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Within 30 miles radius of downtown</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl mb-6 tracking-tight font-medium font-geist" style={{}}>Proudly Serving Your Neighborhood</h2>
<p className="text-slate-300 text-lg font-light mb-8 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>We provide same-day service to most locations within our coverage zone. Don't see your city listed? Call us to check availability.</p>
<div className="grid grid-cols-2 gap-4 mb-10">
<div className="flex items-center gap-2 text-sm text-slate-200 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check w-4 h-4 text-[#ff6b35]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Downtown
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-200 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check w-4 h-4 text-[#ff6b35]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> North Hills
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-200 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check w-4 h-4 text-[#ff6b35]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Westside
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-200 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check w-4 h-4 text-[#ff6b35]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Lakewood
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-200 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check w-4 h-4 text-[#ff6b35]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Riverdale
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-200 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check w-4 h-4 text-[#ff6b35]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Heights Park
                        </div>
</div>
<div className="bg-white/10 rounded-xl p-6 border border-white/10">
<div className="flex items-start gap-4">
<div className="p-2 bg-[#ff6b35] rounded-lg shrink-0">
<svg className="lucide lucide-truck w-6 h-6 text-white" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div>
<h4 className="font-medium mb-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Emergency Dispatch</h4>
<p className="text-sm text-slate-300 mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Our trucks are fully stocked and in your area.</p>
<a className="text-[#ff6b35] text-sm font-medium hover:text-white transition-colors font-geist" href="tel:5551234567" style={{transition: 'outline 0.1s ease-in-out'}}>Call (555) 123-4567 →</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f8f9fa]" id="reviews">
<div className="max-w-7xl mx-auto px-6 animate-in" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s ease-out'}}>
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-[#ff6b35] font-medium tracking-wide uppercase text-xs font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Testimonials</span>
<h2 className="text-3xl md:text-4xl text-[#1e3a5f] mt-3 tracking-tight font-medium font-geist" style={{}}>What Our Customers Say</h2>
</div>
<div className="text-left md:text-right">
<div className="text-3xl text-[#1e3a5f] font-medium font-geist" style={{}}>4.9/5</div>
<div className="flex items-center gap-1 my-1">
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-slate-500 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Based on 500+ verified reviews</p>
</div>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-1">
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Google</span>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>"Aeroflow saved us during the heatwave. The technician arrived within 2 hours of my call. Extremely professional and clean."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 bg-[url('https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80')] bg-cover"></div>
<div>
<div className="text-sm font-medium text-[#1e3a5f] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Sarah Jenkins</div>
<div className="text-xs text-slate-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>July 2023</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="mb-4 rounded-lg overflow-hidden h-40">
<img alt="Work" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex gap-1 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>"Complete system overhaul. The team was transparent about pricing and the new unit is whisper quiet. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-xs font-bold font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>DR</div>
<div>
<div className="text-sm font-medium text-[#1e3a5f] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>David Ross</div>
<div className="text-xs text-slate-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>August 2023</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-1">
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-slate-200" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Yelp</span>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>"Great service for routine maintenance. Technician was polite and on time. A bit pricey but worth it for the peace of mind."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80')] bg-cover"></div>
<div>
<div className="text-sm font-medium text-[#1e3a5f] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Marcus Chen</div>
<div className="text-xs text-slate-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>September 2023</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-7xl mx-auto px-6 animate-in" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s ease-out'}}>
<div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">

<div className="lg:w-3/5 p-10 md:p-14">
<span className="text-[#ff6b35] font-medium tracking-wide uppercase text-xs font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Get in Touch</span>
<h2 className="text-3xl text-[#1e3a5f] mt-3 mb-2 tracking-tight font-medium font-geist" style={{}}>Ready for Reliable Service?</h2>
<p className="text-slate-500 mb-10 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Free estimates, upfront pricing, satisfaction guaranteed.</p>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="relative pt-2">
<input className="premium-input block w-full px-4 py-3 text-slate-700 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1e3a5f] focus:bg-white focus:border-[#1e3a5f] transition-all peer" id="name" placeholder=" " type="text"/>
<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 font-geist" htmlFor="name" style={{transition: 'outline 0.1s ease-in-out'}}>Full Name</label>
</div>
<div className="relative pt-2">
<input className="premium-input block w-full px-4 py-3 text-slate-700 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1e3a5f] focus:bg-white focus:border-[#1e3a5f] transition-all peer" id="email" placeholder=" " type="email"/>
<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 font-geist" htmlFor="email" style={{transition: 'outline 0.1s ease-in-out'}}>Email Address</label>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="relative pt-2">
<input className="premium-input block w-full px-4 py-3 text-slate-700 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1e3a5f] focus:bg-white focus:border-[#1e3a5f] transition-all peer" id="phone" placeholder=" " type="tel"/>
<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 font-geist" htmlFor="phone" style={{transition: 'outline 0.1s ease-in-out'}}>Phone Number</label>
</div>
<div className="relative pt-2">
<select className="block w-full px-4 py-3 text-slate-700 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1e3a5f] focus:bg-white focus:border-[#1e3a5f] transition-all appearance-none cursor-pointer">
<option className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Service Type...</option>
<option className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Repair</option>
<option className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Installation</option>
<option className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Maintenance</option>
<option className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Emergency</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-5 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="relative pt-2">
<textarea className="premium-input block w-full px-4 py-3 text-slate-700 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1e3a5f] focus:bg-white focus:border-[#1e3a5f] transition-all peer" id="message" placeholder=" " rows="4"></textarea>
<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 font-geist" htmlFor="message" style={{transition: 'outline 0.1s ease-in-out'}}>How can we help?</label>
</div>
<button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-medium py-4 rounded-lg shadow-lg shadow-[#ff6b35]/20 hover:shadow-[#ff6b35]/40 transition-all duration-300 transform hover:-translate-y-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}} type="button">
                            Schedule Your Service Today
                        </button>
</form>
</div>

<div className="lg:w-2/5 bg-[#1e3a5f] p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
<div className="relative z-10">
<h3 className="text-xl font-medium mb-8 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Contact Information</h3>
<div className="space-y-8">
<div className="flex items-start gap-4 group">
<div className="p-3 rounded-lg bg-white/10 group-hover:bg-[#ff6b35] transition-colors duration-300">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<p className="text-xs text-white/50 uppercase tracking-wide mb-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Call Us 24/7</p>
<a className="text-lg font-medium hover:text-[#ff6b35] transition-colors font-geist" href="tel:5551234567" style={{transition: 'outline 0.1s ease-in-out'}}>(555) 123-4567</a>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 rounded-lg bg-white/10 group-hover:bg-[#ff6b35] transition-colors duration-300">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<p className="text-xs text-white/50 uppercase tracking-wide mb-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Email Us</p>
<a className="text-lg font-medium hover:text-[#ff6b35] transition-colors font-geist" href="mailto:service@aeroflow.com" style={{transition: 'outline 0.1s ease-in-out'}}>service@aeroflow.com</a>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 rounded-lg bg-white/10 group-hover:bg-[#ff6b35] transition-colors duration-300">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-xs text-white/50 uppercase tracking-wide mb-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Business Hours</p>
<p className="font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Mon - Fri: 7am - 7pm</p>
<p className="text-sm text-white/70 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Sat - Sun: 8am - 4pm</p>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-12 pt-8 border-t border-white/10">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-sm font-medium text-green-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Online Now</span>
</div>
<p className="text-sm text-white/70 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Chat with a specialist for immediate assistance.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-[#1e3a5f] font-semibold text-xl tracking-tighter uppercase font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Aeroflow</div>
<div className="text-sm text-slate-500 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>© 2023 Aeroflow HVAC Solutions. All rights reserved.</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-[#1e3a5f] transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-slate-400 hover:text-[#1e3a5f] transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-[#1e3a5f] transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</footer>


    </>
  );
}

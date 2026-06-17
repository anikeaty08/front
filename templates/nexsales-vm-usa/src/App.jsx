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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-animate').forEach((element) => {
                observer.observe(element);
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
      

<div className="floating-contact animate-slide-in">
<a href="#"><iconify-icon className="fs-xl" icon="solar:phone-linear"></iconify-icon></a>
<a href="#"><iconify-icon className="fs-xl" icon="solar:letter-linear"></iconify-icon></a>
<a href="#" style={{color: '#22c55e'}}><iconify-icon className="fs-xl" icon="solar:chat-round-dots-linear"></iconify-icon></a>
</div>

<nav className="sticky-top bg-white backdrop-blur border-bottom border-light z-3" style={{backgroundColor: 'rgba(255,255,255,0.9) !important'}}>
<div className="container-custom d-flex align-items-center justify-content-between" style={{height: '5rem'}}>

<div className="d-flex align-items-center gap-1 cursor-pointer" style={{transition: 'opacity 0.3s'}}>
<span className="fs-3xl fw-semibold text-dark-blue tracking-tight">Nexsales</span>
</div>

<div className="d-none d-lg-flex align-items-center gap-4 fs-sm fw-medium text-slate-600">
<a className="text-slate-600 text-decoration-none group" href="#">
<span className="group-hover-text-cyan transition-all-custom">About Us</span>
</a>
<div className="d-flex align-items-center gap-1 cursor-pointer group">
<span className="group-hover-text-cyan transition-all-custom">Services</span>
<iconify-icon className="fs-base group-hover-rotate transition-all-custom" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="d-flex align-items-center gap-1 cursor-pointer group">
<span className="group-hover-text-cyan transition-all-custom">Industries</span>
<iconify-icon className="fs-base group-hover-rotate transition-all-custom" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="d-flex align-items-center gap-1 cursor-pointer group">
<span className="group-hover-text-cyan transition-all-custom">Insights</span>
<iconify-icon className="fs-base group-hover-rotate transition-all-custom" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<a className="text-slate-600 text-decoration-none group" href="#">
<span className="group-hover-text-cyan transition-all-custom">Careers</span>
</a>
<a className="text-slate-600 text-decoration-none group" href="#">
<span className="group-hover-text-cyan transition-all-custom">Contact Us</span>
</a>
</div>

<div className="d-none d-md-block">
<a className="btn-custom btn-cyan group animate-shimmer" href="#">
<span className="position-relative z-1 d-flex align-items-center">
                        Schedule a Call 
                        <iconify-icon className="ms-1 fs-base group-hover-translate-xy transition-all-custom" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
</div>

<button className="btn d-lg-none border-0 p-0 text-slate-600">
<iconify-icon className="fs-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="position-relative overflow-hidden bg-slate-50 pt-section pb-section">
<div className="container-custom position-relative z-1">
<div className="row align-items-center gy-5">
<div className="col-lg-6">
<p className="scroll-animate fs-base fw-medium fst-italic text-cyan mb-3">Trusted by Enterprise &amp; High Growth Startups</p>
<h1 className="scroll-animate delay-100 fs-5xl fw-semibold text-dark-blue lh-sm tracking-tight mb-4">The GTM Partner to co-own your revenue goals</h1>
<p className="scroll-animate delay-200 fs-lg lh-lg text-slate-600 mb-5" style={{maxWidth: '500px'}}>Nexsales creates predictable, SQL-driven revenue and pipeline from target accounts and anonymous intent.</p>
<div className="scroll-animate delay-300 d-flex flex-wrap gap-3">
<a className="btn-custom btn-dark group animate-shimmer" href="#">
<span className="position-relative z-1 d-flex align-items-center gap-2">
                                Explore Our Services 
                                <iconify-icon className="fs-lg group-hover-translate-xy transition-all-custom" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
<a className="btn-custom btn-outline-custom group" href="#">
                            View Case Studies 
                            <iconify-icon className="fs-lg text-slate-400 group-hover-text-dark-blue group-hover-translate-xy transition-all-custom" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="col-lg-6 d-none d-lg-block position-relative" style={{height: '500px'}}>
<div className="scroll-animate delay-200 position-relative w-100 h-100" style={{transform: 'translateX(3rem)'}}>
<div className="position-absolute top-0 start-0 w-100 h-100 bg-cyan rounded-circle animate-pulse-soft" style={{opacity: '0.15', filter: 'blur(40px)'}}></div>
<img alt="Abstract Building Structure" className="animate-float position-absolute start-0 mix-blend-multiply w-100 h-100 object-cover top-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e2b37b2-08cf-43de-9152-b5896f65690d_1600w.png" style={{clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)', transition: 'transform 0.7s'}}/>
</div>
</div>
</div>
</div>
</section>

<section className="border-top border-bottom border-light bg-white py-4 overflow-hidden">
<div className="container-custom d-flex position-relative w-100">
<div className="d-flex align-items-center animate-marquee opacity-60 filter-grayscale" style={{gap: '6rem', paddingRight: '6rem'}}>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default"><span className="group-hover-text-cyan">ATKINS</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default"><span className="group-hover-text-cyan">BIM Road</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default d-flex align-items-center gap-2"><iconify-icon className="fs-2xl" icon="solar:buildings-linear"></iconify-icon> <span className="group-hover-text-cyan">Falcon</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default"><span className="group-hover-text-cyan">omnix</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default"><span className="group-hover-text-cyan">SIEMENS</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default d-flex align-items-center gap-2"><iconify-icon className="fs-2xl" icon="solar:record-circle-linear"></iconify-icon> <span className="group-hover-text-cyan">DMX</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default"><span className="group-hover-text-cyan">VOLTAS</span></span>
</div>

<div aria-hidden="true" className="d-flex align-items-center animate-marquee opacity-60 filter-grayscale" style={{gap: '6rem', paddingRight: '6rem'}}>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default"><span className="group-hover-text-cyan">ATKINS</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default"><span className="group-hover-text-cyan">BIM Road</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default d-flex align-items-center gap-2"><iconify-icon className="fs-2xl" icon="solar:buildings-linear"></iconify-icon> <span className="group-hover-text-cyan">Falcon</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default"><span className="group-hover-text-cyan">omnix</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default"><span className="group-hover-text-cyan">SIEMENS</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default d-flex align-items-center gap-2"><iconify-icon className="fs-2xl" icon="solar:record-circle-linear"></iconify-icon> <span className="group-hover-text-cyan">DMX</span></span>
<span className="fs-xl fw-semibold tracking-tight transition-all-custom group cursor-default"><span className="group-hover-text-cyan">VOLTAS</span></span>
</div>
</div>
</section>

<section className="text-center bg-white py-section">
<div className="container-custom">
<div className="scroll-animate mx-auto" style={{maxWidth: '56rem'}}>
<p className="text-cyan fst-italic fw-medium mb-3 fs-base">About Us</p>
<h2 className="fs-4xl fw-semibold text-dark-blue tracking-tight lh-sm mb-4">
                    Delivering world-class BIM and CAD solutions from our global delivery centre in India to leading AEC firms worldwide.
                </h2>
<p className="fs-lg text-slate-600 mb-5 lh-lg mx-auto" style={{maxWidth: '48rem'}}>
                    VectorQX is a global provider of advanced BIM and CAD services, helping architecture, engineering, and construction (AEC) firms streamline design and documentation through precision, quality, and scalability.
                </p>
<a className="btn-custom btn-dark group animate-shimmer" href="#">
<span className="position-relative z-1 d-flex align-items-center gap-2">
                        Know More 
                        <iconify-icon className="fs-lg group-hover-translate-xy transition-all-custom" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="position-relative bg-dark-blue py-section overflow-hidden group">

<div className="position-absolute top-0 start-0 w-100 h-100 object-cover transition-all-custom group-hover-scale" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfe046db-efac-4e2f-8e85-034a6088f5d8_3840w.png\')', backgroundSize: 'cover', backgroundPosition: 'center', transitionDuration: '20s'}}></div>

<div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none transition-all-custom group-hover-scale" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)', opacity: '0.2', transitionDuration: '20s'}}></div>
<div className="container-custom position-relative z-1">
<div className="row align-items-center gy-5">
<div className="col-lg-6">
<div className="scroll-animate pe-lg-5">
<p className="fs-sm fw-medium fst-italic text-cyan mb-3">Success</p>
<h2 className="fs-4xl text-white fw-semibold tracking-tight lh-sm mb-4">
                            Excellence Without Compromise
                        </h2>
<p className="fs-base text-slate-300 mb-5 lh-lg">
                            At VectorQX, our leadership brings over 31 years of experience delivering 20+ million sq.ft of petroleum, retail, logistics, and commercial infrastructure across multiple countries for global leaders.
                        </p>
<a className="btn-custom btn-white group" href="#">
<span className="position-relative z-1 d-flex align-items-center gap-2">
                                Know More 
                                <iconify-icon className="fs-lg group-hover-translate-xy transition-all-custom" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
</div>
</div>
<div className="col-lg-6">
<div className="row g-5 ps-lg-5 border-start-lg border-secondary" style={{borderColor: 'rgba(255,255,255,0.2) !important'}}>
<div className="col-6 scroll-animate delay-100 group hover-lift transition-all-custom">
<div className="fs-5xl fw-semibold text-white tracking-tight mb-2 d-flex align-items-center group-hover-text-cyan transition-all-custom">20<span className="text-cyan ms-1">+</span></div>
<p className="text-slate-400 fs-sm m-0 group-hover-text-white transition-all-custom">Million sq.ft delivered</p>
</div>
<div className="col-6 scroll-animate delay-200 group hover-lift transition-all-custom">
<div className="fs-5xl fw-semibold text-white tracking-tight mb-2 d-flex align-items-center group-hover-text-cyan transition-all-custom">98<span className="text-cyan ms-1">%</span></div>
<p className="text-slate-400 fs-sm m-0 group-hover-text-white transition-all-custom">On-time completion</p>
</div>
<div className="col-6 scroll-animate delay-300 group hover-lift transition-all-custom">
<div className="fs-5xl fw-semibold text-white tracking-tight mb-2 d-flex align-items-center group-hover-text-cyan transition-all-custom">$80M<span className="text-cyan ms-1">+</span></div>
<p className="text-slate-400 fs-sm m-0 group-hover-text-white transition-all-custom">Cumulative savings</p>
</div>
<div className="col-6 scroll-animate delay-300 group hover-lift transition-all-custom">
<div className="fs-5xl fw-semibold text-white tracking-tight mb-2 d-flex align-items-center group-hover-text-cyan transition-all-custom">$500M<span className="text-cyan ms-1">+</span></div>
<p className="text-slate-400 fs-sm m-0 group-hover-text-white transition-all-custom">Portfolio managed</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-section">
<div className="container-custom">
<div className="row justify-content-between align-items-end scroll-animate mb-5 pb-3">
<div className="col-lg-6 mb-4 mb-lg-0">
<p className="text-cyan fst-italic fw-medium mb-2 fs-sm">Services</p>
<h2 className="fs-4xl fw-semibold text-dark-blue tracking-tight lh-sm m-0">
                        Comprehensive Engineering Capabilities
                    </h2>
</div>
<div className="col-lg-5">
<p className="fs-base text-slate-600 m-0">
                        With decades of combined expertise and a commitment to technical excellence, we serve as a strategic partner for global firms tackling complex engineering challenges.
                    </p>
</div>
</div>
<div className="row g-4">

<div className="col-md-6 col-lg-4 scroll-animate">
<div className="position-relative rounded-3xl overflow-hidden aspect-4-3 bg-white shadow-sm shadow-hover group transition-all-custom">
<img alt="Manufacturing Engineering" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35d6a449-5b14-4957-b16e-cf1bb840823d_800w.png" style={{transitionDuration: '0.7s'}}/>
<div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay-dark opacity-75 group-hover-opacity transition-all-custom"></div>
<div className="position-absolute bottom-0 start-0 w-100 p-4 d-flex justify-content-between align-items-end transition-all-custom" style={{transform: 'translateY(0.5rem)'}}>
<h3 className="fs-xl fw-semibold text-white tracking-tight m-0" style={{maxWidth: '70%'}}>Manufacturing Engineering</h3>
<div className="rounded-circle d-flex align-items-center justify-content-center transition-all-custom group-hover-bg-cyan group-hover-rotate group-hover-scale" style={{width: '2.5rem', height: '2.5rem', background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)'}}>
<iconify-icon className="text-white fs-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4 scroll-animate delay-100">
<div className="position-relative rounded-3xl overflow-hidden aspect-4-3 bg-white shadow-sm shadow-hover group transition-all-custom">
<img alt="Construction Engineering" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1c9009a-e841-4098-abe8-05bbbd93ec3c_800w.png" style={{transitionDuration: '0.7s'}}/>
<div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay-dark opacity-75 group-hover-opacity transition-all-custom"></div>
<div className="position-absolute bottom-0 start-0 w-100 p-4 d-flex justify-content-between align-items-end transition-all-custom" style={{transform: 'translateY(0.5rem)'}}>
<h3 className="fs-xl fw-semibold text-white tracking-tight m-0" style={{maxWidth: '70%'}}>Construction Engineering</h3>
<div className="rounded-circle d-flex align-items-center justify-content-center transition-all-custom group-hover-bg-cyan group-hover-rotate group-hover-scale" style={{width: '2.5rem', height: '2.5rem', background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)'}}>
<iconify-icon className="text-white fs-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4 scroll-animate delay-200">
<div className="position-relative rounded-3xl overflow-hidden aspect-4-3 bg-white shadow-sm shadow-hover group transition-all-custom">
<img alt="Infrastructure Engineering" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/107fa3d4-ebbe-442b-a9ef-f900b427ddeb_800w.png" style={{transitionDuration: '0.7s'}}/>
<div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay-dark opacity-75 group-hover-opacity transition-all-custom"></div>
<div className="position-absolute bottom-0 start-0 w-100 p-4 d-flex justify-content-between align-items-end transition-all-custom" style={{transform: 'translateY(0.5rem)'}}>
<h3 className="fs-xl fw-semibold text-white tracking-tight m-0" style={{maxWidth: '70%'}}>Infrastructure Engineering</h3>
<div className="rounded-circle d-flex align-items-center justify-content-center transition-all-custom group-hover-bg-cyan group-hover-rotate group-hover-scale" style={{width: '2.5rem', height: '2.5rem', background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)'}}>
<iconify-icon className="text-white fs-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4 scroll-animate">
<div className="position-relative rounded-3xl overflow-hidden aspect-4-3 bg-white shadow-sm shadow-hover group transition-all-custom">
<img alt="Building Services" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f349ca08-4b8a-469d-89c1-d1b5fd70cb47_800w.png" style={{transitionDuration: '0.7s'}}/>
<div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay-dark opacity-75 group-hover-opacity transition-all-custom"></div>
<div className="position-absolute bottom-0 start-0 w-100 p-4 d-flex justify-content-between align-items-end transition-all-custom" style={{transform: 'translateY(0.5rem)'}}>
<h3 className="fs-xl fw-semibold text-white tracking-tight m-0" style={{maxWidth: '70%'}}>Building Services</h3>
<div className="rounded-circle d-flex align-items-center justify-content-center transition-all-custom group-hover-bg-cyan group-hover-rotate group-hover-scale" style={{width: '2.5rem', height: '2.5rem', background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)'}}>
<iconify-icon className="text-white fs-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4 scroll-animate delay-100">
<div className="position-relative rounded-3xl overflow-hidden aspect-4-3 bg-white shadow-sm shadow-hover group transition-all-custom">
<img alt="BIM Services" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80951af5-621b-4fa9-a825-5cb7a7e75940_800w.png" style={{transitionDuration: '0.7s'}}/>
<div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay-dark opacity-75 group-hover-opacity transition-all-custom"></div>
<div className="position-absolute bottom-0 start-0 w-100 p-4 d-flex justify-content-between align-items-end transition-all-custom" style={{transform: 'translateY(0.5rem)'}}>
<h3 className="fs-xl fw-semibold text-white tracking-tight m-0" style={{maxWidth: '70%'}}>BIM Services</h3>
<div className="rounded-circle d-flex align-items-center justify-content-center transition-all-custom group-hover-bg-cyan group-hover-rotate group-hover-scale" style={{width: '2.5rem', height: '2.5rem', background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)'}}>
<iconify-icon className="text-white fs-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4 scroll-animate delay-200">
<div className="position-relative rounded-3xl overflow-hidden aspect-4-3 bg-white shadow-sm shadow-hover group transition-all-custom">
<img alt="Signage Engineering" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b968ddfe-e0eb-4cfd-9657-049a646b1ce1_800w.png" style={{transitionDuration: '0.7s'}}/>
<div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay-dark opacity-75 group-hover-opacity transition-all-custom"></div>
<div className="position-absolute bottom-0 start-0 w-100 p-4 d-flex justify-content-between align-items-end transition-all-custom" style={{transform: 'translateY(0.5rem)'}}>
<h3 className="fs-xl fw-semibold text-white tracking-tight m-0" style={{maxWidth: '70%'}}>Signage Engineering</h3>
<div className="rounded-circle d-flex align-items-center justify-content-center transition-all-custom group-hover-bg-cyan group-hover-rotate group-hover-scale" style={{width: '2.5rem', height: '2.5rem', background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)'}}>
<iconify-icon className="text-white fs-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section bg-white">
<div className="container-custom">
<div className="row gy-5">
<div className="col-lg-6 pe-lg-5">
<div className="scroll-animate position-sticky top-0 pt-5">
<p className="text-cyan fst-italic fw-medium mb-2 fs-sm">Why Choose Us</p>
<h2 className="fs-4xl fw-semibold text-dark-blue tracking-tight lh-sm mb-4">
                            VectorQX Advantage
                        </h2>
<p className="fs-base text-slate-600 mb-5 lh-lg">
                            With a strong technical foundation, disciplined processes, and a commitment to excellence, VectorQX serves as an extension of your in-house team — delivering consistent, high-quality results across projects of any scale.
                        </p>
<a className="btn-custom btn-dark group animate-shimmer" href="#">
<span className="position-relative z-1 d-flex align-items-center gap-2">
                                Contact Us 
                                <iconify-icon className="fs-lg group-hover-translate-xy transition-all-custom" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
</div>
</div>
<div className="col-lg-6 ps-lg-4">
<div className="d-flex flex-column gap-5">
<div className="d-flex gap-4 group scroll-animate">
<div className="rounded-circle bg-cyan-50 d-flex align-items-center justify-content-center text-cyan flex-shrink-0 transition-all-custom group-hover-bg-cyan group-hover-text-white group-hover-scale" style={{width: '3.5rem', height: '3.5rem'}}>
<iconify-icon className="fs-2xl" icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<div>
<h3 className="fs-xl fw-semibold text-dark-blue mb-2 tracking-tight transition-all-custom group-hover-text-cyan">Technical Excellence</h3>
<p className="fs-base text-slate-600 m-0 lh-lg">Our teams are certified across leading AEC software platforms—Autodesk Revit, AutoCAD, Civil 3D, Navisworks, Tekla Structures, and Bentley MicroStation—and trained in global BIM standards.</p>
</div>
</div>
<div className="d-flex gap-4 group scroll-animate delay-100">
<div className="rounded-circle bg-cyan-50 d-flex align-items-center justify-content-center text-cyan flex-shrink-0 transition-all-custom group-hover-bg-cyan group-hover-text-white group-hover-scale" style={{width: '3.5rem', height: '3.5rem'}}>
<iconify-icon className="fs-2xl" icon="solar:global-linear"></iconify-icon>
</div>
<div>
<h3 className="fs-xl fw-semibold text-dark-blue mb-2 tracking-tight transition-all-custom group-hover-text-cyan">Global Experience</h3>
<p className="fs-base text-slate-600 m-0 lh-lg">VectorQX is led by professionals with over two decades of delivery experience across North America, the UK, the Middle East, and Europe.</p>
</div>
</div>
<div className="d-flex gap-4 group scroll-animate delay-200">
<div className="rounded-circle bg-cyan-50 d-flex align-items-center justify-content-center text-cyan flex-shrink-0 transition-all-custom group-hover-bg-cyan group-hover-text-white group-hover-scale" style={{width: '3.5rem', height: '3.5rem'}}>
<iconify-icon className="fs-2xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="fs-xl fw-semibold text-dark-blue mb-2 tracking-tight transition-all-custom group-hover-text-cyan">Quality Assurance</h3>
<p className="fs-base text-slate-600 m-0 lh-lg">Every project goes through a multi-tiered QA/QC framework—automated clash detection, peer review, and documented approval cycles.</p>
</div>
</div>
<div className="d-flex gap-4 group scroll-animate delay-300">
<div className="rounded-circle bg-cyan-50 d-flex align-items-center justify-content-center text-cyan flex-shrink-0 transition-all-custom group-hover-bg-cyan group-hover-text-white group-hover-scale" style={{width: '3.5rem', height: '3.5rem'}}>
<iconify-icon className="fs-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<h3 className="fs-xl fw-semibold text-dark-blue mb-2 tracking-tight transition-all-custom group-hover-text-cyan">Execution Velocity</h3>
<p className="fs-base text-slate-600 m-0 lh-lg">Through optimized workflows, secure cloud-based collaboration, and highly skilled offshore delivery teams, VectorQX ensures rapid project turnaround without compromising quality.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-5 px-3 scroll-animate">
<div className="container-custom">
<div className="position-relative rounded-3xl p-5 text-center overflow-hidden shadow-lg group bg-gradient-animated" style={{paddingTop: '5rem !important', paddingBottom: '5rem !important'}}>
<div className="position-absolute top-0 start-0 w-100 h-100 object-cover transition-all-custom group-hover-scale mix-blend-multiply" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d312dd9-bc22-4676-ac4f-ee8cd66598fd_3840w.png\')', backgroundSize: 'cover', backgroundPosition: 'center', transitionDuration: '1s'}}></div>
<div className="position-relative z-1 mx-auto" style={{maxWidth: '48rem'}}>
<p className="text-white fst-italic fw-medium mb-3 fs-sm opacity-75">Enquire Now</p>
<h2 className="fs-4xl text-white fw-semibold tracking-tight lh-sm mb-4">
                        Ready to Optimize Your Next Project?
                    </h2>
<p className="fs-lg text-slate-200 mb-5 lh-lg">
                        Let our team of expert engineers handle the complexity while you focus on growth.
                    </p>
<a className="btn-custom btn-white group" href="#">
                        Enquire Now 
                        <iconify-icon className="fs-lg group-hover-translate-xy transition-all-custom" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-section">
<div className="container-custom" style={{maxWidth: '1200px'}}>
<div className="position-relative rounded-3xl overflow-hidden aspect-video shadow-lg group cursor-pointer scroll-animate transition-all-custom shadow-hover">
<img alt="Video Thumbnail" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{transitionDuration: '1s'}}/>
<div className="position-absolute top-0 start-0 w-100 h-100 bg-dark transition-all-custom" style={{opacity: '0.3'}}></div>
<div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
<div className="bg-white rounded-circle d-flex align-items-center justify-content-center animate-pulse-soft transition-all-custom group-hover-scale" style={{width: '5rem', height: '5rem', boxShadow: '0 0 30px rgba(0,174,239,0.5)'}}>
<iconify-icon className="fs-4xl text-dark-blue ms-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-section bg-slate-50">
<div className="container-custom">
<div className="text-center mx-auto mb-5 pb-3 scroll-animate" style={{maxWidth: '48rem'}}>
<p className="text-cyan fst-italic fw-medium mb-3 fs-sm">Testimonials</p>
<h2 className="fs-4xl fw-semibold text-dark-blue tracking-tight lh-sm">
                    Proven Approach to Transform Your Business
                </h2>
</div>
<div className="row align-items-stretch g-4">

<div className="col-lg-4 scroll-animate group hover-lift transition-all-custom">
<div className="position-relative rounded-3xl overflow-hidden h-100 shadow-sm shadow-hover cursor-pointer" style={{minHeight: '400px'}}>
<img alt="Client Video" className="position-absolute w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1932&amp;auto=format&amp;fit=crop" style={{transitionDuration: '0.7s'}}/>
<div className="position-absolute w-100 h-100 bg-dark transition-all-custom" style={{opacity: '0.2'}}></div>
<div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
<div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow transition-all-custom group-hover-scale" style={{width: '4rem', height: '4rem'}}>
<iconify-icon className="fs-2xl text-dark-blue ms-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="col-lg-4 scroll-animate delay-100 group">
<div className="bg-white p-5 rounded-3xl shadow-sm hover-lift shadow-hover d-flex flex-column justify-content-between h-100 transition-all-custom" style={{minHeight: '400px'}}>
<div>
<div className="mb-4 fs-xl fw-semibold tracking-tight text-dark-blue opacity-75 transition-all-custom group-hover-text-cyan">ATKINS</div>
<p className="fs-xl text-dark-blue fw-medium lh-lg tracking-tight">
                                "VectorQX delivered infrastructure designs that were both future-ready and flawlessly compliant."
                            </p>
</div>
<div className="fs-sm text-slate-500 mt-4 fw-medium">Sara John</div>
</div>
</div>

<div className="col-lg-4 scroll-animate delay-200 group">
<div className="bg-white p-5 rounded-3xl shadow-sm hover-lift shadow-hover d-flex flex-column justify-content-between h-100 transition-all-custom" style={{minHeight: '400px'}}>
<div>
<div className="mb-4 fs-xl fw-semibold tracking-tight text-dark-blue opacity-75 transition-all-custom group-hover-text-cyan">BIM Road</div>
<p className="fs-xl text-dark-blue fw-medium lh-lg tracking-tight">
                                "Their BIM coordination transformed our project workflow, eliminating onsite clashes before they happened."
                            </p>
</div>
<div className="fs-sm text-slate-500 mt-4 fw-medium">James Philip</div>
</div>
</div>
</div>
<div className="d-flex justify-content-end gap-2 mt-5 scroll-animate">
<button className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center p-0 hover-lift transition-all-custom" style={{width: '2.5rem', height: '2.5rem', backgroundColor: 'var(--dark-blue)', border: 'none'}}><iconify-icon className="fs-lg text-white" icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center p-0 hover-lift transition-all-custom" style={{width: '2.5rem', height: '2.5rem', backgroundColor: 'var(--dark-blue)', border: 'none'}}><iconify-icon className="fs-lg text-white" icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
</section>

<section className="py-section bg-slate-50 border-top border-light">
<div className="container-custom">
<div className="row justify-content-between align-items-end mb-5 pb-3 scroll-animate">
<div className="col-md-8">
<p className="text-cyan fst-italic fw-medium mb-2 fs-sm">Case Studies</p>
<h2 className="fs-4xl fw-semibold text-dark-blue tracking-tight lh-sm m-0">
                        Proven Results for Complex Challenges
                    </h2>
</div>
<div className="col-md-4 text-md-end mt-4 mt-md-0">
<a className="btn-custom btn-dark group d-none d-md-inline-flex" href="#">
                        View All 
                        <iconify-icon className="fs-lg group-hover-translate-xy transition-all-custom" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="row g-5">

<div className="col-md-6 group cursor-pointer scroll-animate">
<div className="rounded-3xl overflow-hidden aspect-16-9 mb-4 shadow-sm shadow-hover transition-all-custom">
<img alt="Train" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2eff4742-ac66-44bb-b160-5c2142b975c6_800w.png" style={{transitionDuration: '0.7s'}}/>
</div>
<h3 className="fs-2xl fw-semibold text-dark-blue tracking-tight transition-all-custom group-hover-text-cyan group-hover-translate-x d-inline-block">Scan to CAD for Railway Stations</h3>
</div>

<div className="col-md-6 group cursor-pointer scroll-animate delay-100">
<div className="rounded-3xl overflow-hidden aspect-16-9 mb-4 shadow-sm shadow-hover transition-all-custom">
<img alt="Server Room" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63c877aa-f624-4e8b-9295-97887054989f_1600w.png" style={{transitionDuration: '0.7s'}}/>
</div>
<h3 className="fs-2xl fw-semibold text-dark-blue tracking-tight transition-all-custom group-hover-text-cyan group-hover-translate-x d-inline-block">BOQ Preparation for Data Centre Project</h3>
</div>
</div>
</div>
</section>

<section className="py-section" style={{backgroundColor: '#F4F5F7'}}>
<div className="container-custom" style={{maxWidth: '1200px'}}>
<div className="row gy-5 align-items-start">

<div className="col-lg-5 pe-lg-5 scroll-animate">
<p className="text-cyan fst-italic fw-medium mb-3 fs-base">Contact Us</p>
<h2 className="fs-4xl fw-semibold text-dark-blue tracking-tight lh-sm mb-5 pb-3">
                        Get In Touch With Us
                    </h2>
<div className="d-flex flex-column gap-5">
<div>
<p className="text-cyan fs-base mb-2 fw-medium">Call us</p>
<div className="fs-3xl fw-semibold text-dark-blue tracking-tight d-flex flex-column gap-1">
<p className="m-0">+91 12442 85001</p>
<p className="m-0">+44 20 4542 6066</p>
</div>
</div>
<div>
<p className="text-cyan fs-base mb-2 fw-medium">Drop a mail</p>
<p className="fs-3xl fw-semibold text-dark-blue tracking-tight m-0">
                                info@vectorqx.com
                            </p>
</div>
</div>
</div>

<div className="col-lg-7 ps-lg-5 scroll-animate delay-100">
<form className="d-flex flex-column gap-4 pt-lg-2">
<div>
<input className="form-control-custom fs-base" placeholder="Name" type="text"/>
</div>
<div>
<input className="form-control-custom fs-base" placeholder="Email Address" type="email"/>
</div>
<div>
<input className="form-control-custom fs-base" placeholder="Contact Number" type="tel"/>
</div>
<div>
<input className="form-control-custom fs-base" placeholder="Company Name" type="text"/>
</div>
<div className="d-flex justify-content-end pt-3">
<button className="btn-custom btn-dark group" type="submit">
                                Submit <iconify-icon className="fs-lg group-hover-translate-xy transition-all-custom" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-section bg-white">
<div className="container-custom">
<div className="row justify-content-between align-items-end mb-5 pb-3 scroll-animate">
<div className="col-md-8">
<p className="text-cyan fst-italic fw-medium mb-2 fs-sm">Insights</p>
<h2 className="fs-4xl fw-semibold text-dark-blue tracking-tight lh-sm m-0">
                        Engineering Insights &amp; Industry Trends
                    </h2>
</div>
<div className="col-md-4 text-md-end mt-4 mt-md-0">
<a className="btn-custom btn-dark group d-none d-md-inline-flex" href="#">
                        View All 
                        <iconify-icon className="fs-lg group-hover-translate-xy transition-all-custom" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="row g-5">

<div className="col-md-4 group cursor-pointer scroll-animate">
<div className="rounded-3xl overflow-hidden aspect-4-3 mb-4 shadow-sm shadow-hover transition-all-custom">
<img alt="Domino effect" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" style={{transitionDuration: '0.7s'}}/>
</div>
<p className="fs-sm text-slate-500 mb-2 transition-all-custom group-hover-translate-x d-inline-block">Blogs • 10 February 2026</p>
<h3 className="fs-xl fw-semibold text-dark-blue tracking-tight lh-sm transition-all-custom group-hover-text-cyan group-hover-translate-x">VectorQX Surpasses $550M in Total Project Value</h3>
</div>

<div className="col-md-4 group cursor-pointer scroll-animate delay-100">
<div className="rounded-3xl overflow-hidden aspect-4-3 mb-4 shadow-sm shadow-hover transition-all-custom">
<img alt="Workspace" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop" style={{transitionDuration: '0.7s'}}/>
</div>
<p className="fs-sm text-slate-500 mb-2 transition-all-custom group-hover-translate-x d-inline-block">Blogs • 10 February 2026</p>
<h3 className="fs-xl fw-semibold text-dark-blue tracking-tight lh-sm transition-all-custom group-hover-text-cyan group-hover-translate-x">Full Integration of Vectorworks 2026 Workflows</h3>
</div>

<div className="col-md-4 group cursor-pointer scroll-animate delay-200">
<div className="rounded-3xl overflow-hidden aspect-4-3 mb-4 shadow-sm shadow-hover transition-all-custom">
<img alt="Building under construction" className="w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{transitionDuration: '0.7s'}}/>
</div>
<p className="fs-sm text-slate-500 mb-2 transition-all-custom group-hover-translate-x d-inline-block">Blogs • 10 February 2026</p>
<h3 className="fs-xl fw-semibold text-dark-blue tracking-tight lh-sm transition-all-custom group-hover-text-cyan group-hover-translate-x">New Scan-to-BIM Framework Reduces Rework by 15%</h3>
</div>
</div>
</div>
</section>

<section className="py-5 px-3 scroll-animate">
<div className="container-custom">
<div className="position-relative rounded-3xl p-5 text-center overflow-hidden shadow-lg group" style={{paddingTop: '6rem !important', paddingBottom: '6rem !important'}}>
<img alt="Background architecture" className="position-absolute top-0 start-0 w-100 h-100 object-cover transition-all-custom group-hover-scale" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2071&amp;auto=format&amp;fit=crop" style={{transitionDuration: '15s', zIndex: '0'}}/>
<div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay-dark transition-all-custom mix-blend-multiply" style={{zIndex: '1'}}></div>
<div className="position-absolute top-0 start-0 w-100 h-100 transition-all-custom mix-blend-multiply opacity-75 group-hover-opacity" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d312dd9-bc22-4676-ac4f-ee8cd66598fd_1600w.png\')', backgroundSize: 'cover', backgroundPosition: 'center', transitionDuration: '0.7s', zIndex: '2'}}></div>
<div className="position-relative z-3 mx-auto" style={{maxWidth: '56rem'}}>
<p className="text-cyan fst-italic fw-medium mb-3 fs-sm animate-pulse-soft">Enquire Now</p>
<h2 className="fs-4xl text-white fw-semibold tracking-tight lh-sm mb-4">
                        Engineering Excellence is Just a Conversation Away
                    </h2>
<p className="fs-lg text-slate-200 mb-5 lh-lg mx-auto" style={{maxWidth: '42rem'}}>
                        Whether it's a large-scale infrastructure project or specialized manufacturing support, VectorQX has the technical precision you need.
                    </p>
<a className="btn-custom btn-white group" href="#">
                        Request a Callback 
                        <iconify-icon className="fs-lg group-hover-translate-xy transition-all-custom" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-top border-light py-5 scroll-animate pt-section">
<div className="container-custom">
<div className="row g-5 mb-5 pb-4">
<div className="col-lg-4 pe-lg-5">
<div className="d-flex align-items-center gap-1 mb-4 cursor-pointer transition-all-custom" onmouseout="this.style.opacity=1" onmouseover="this.style.opacity=0.8" style={{opacity: '1'}}>
<span className="fs-3xl fw-semibold tracking-tight text-dark-blue">Vector</span><span className="fs-3xl fw-semibold tracking-tight text-cyan">QX</span>
</div>
<p className="fs-sm text-slate-500 mb-4" style={{maxWidth: '20rem'}}>Excellence in Architecture &amp; Engineering Services</p>
<div className="d-flex gap-3 text-dark-blue">
<a className="rounded-circle border border-light d-flex align-items-center justify-content-center text-dark-blue transition-all-custom group-hover-bg-cyan group-hover-text-white hover-lift" href="#" style={{width: '2.5rem', height: '2.5rem'}}><iconify-icon className="fs-xl" icon="mdi:facebook"></iconify-icon></a>
<a className="rounded-circle border border-light d-flex align-items-center justify-content-center text-dark-blue transition-all-custom group-hover-bg-cyan group-hover-text-white hover-lift" href="#" style={{width: '2.5rem', height: '2.5rem'}}><iconify-icon className="fs-xl" icon="mdi:twitter"></iconify-icon></a>
<a className="rounded-circle border border-light d-flex align-items-center justify-content-center text-dark-blue transition-all-custom group-hover-bg-cyan group-hover-text-white hover-lift" href="#" style={{width: '2.5rem', height: '2.5rem'}}><iconify-icon className="fs-xl" icon="mdi:linkedin"></iconify-icon></a>
</div>
</div>
<div className="col-md-4 col-lg-2">
<h4 className="text-cyan fw-semibold mb-4 fs-sm tracking-tight">Quick Links</h4>
<ul className="list-unstyled d-flex flex-column gap-3 fs-sm text-slate-600 m-0">
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Home</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">About Us</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Careers</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Blogs</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">News and Events</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Case Studies</a></li>
</ul>
</div>
<div className="col-md-4 col-lg-3">
<h4 className="text-cyan fw-semibold mb-4 fs-sm tracking-tight">Services</h4>
<ul className="list-unstyled d-flex flex-column gap-3 fs-sm text-slate-600 m-0">
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Building Services</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Construction Engineering</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Infrastructure Engineering</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">BIM Services</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Signage Engineering</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Manufacturing Engineering</a></li>
</ul>
</div>
<div className="col-md-4 col-lg-3">
<h4 className="text-cyan fw-semibold mb-4 fs-sm tracking-tight">Industries</h4>
<ul className="list-unstyled d-flex flex-column gap-3 fs-sm text-slate-600 m-0">
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Commercial Real Estate</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Industrial &amp; Energy</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Government &amp; Public Works</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Healthcare &amp; Biotech</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Transportation</a></li>
<li><a className="text-slate-600 transition-all-custom d-inline-block hover-lift group-hover-text-cyan" href="#">Retail &amp; Hospitality</a></li>
</ul>
</div>
</div>
<div className="border-top border-light pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 fs-xs text-slate-500">
<p className="m-0">Copyright © 2026 VectorQX - All Rights Reserved.</p>
<div className="d-flex gap-4">
<a className="text-slate-500 transition-all-custom group-hover-text-cyan" href="#">Privacy Policy</a>
<a className="text-slate-500 transition-all-custom group-hover-text-cyan" href="#">Terms and Conditions</a>
</div>
</div>
</div>
</footer>





    </>
  );
}

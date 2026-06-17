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



      document.addEventListener("DOMContentLoaded", () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px 0px -50px 0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('reveal-active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          const hiddenElements = document.querySelectorAll('.reveal-wait');
          hiddenElements.forEach((el) => observer.observe(el));
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
      

<div className="w-full bg-neutral-900 border-b border-white/5 py-2 px-5 hidden md:flex justify-between items-center text-xs tracking-wider text-neutral-400">
<div className="flex gap-4">
<span className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Serving Woodbine, Howard, Carroll &amp; Frederick Counties</span>
<span className="flex items-center gap-2 text-[#cdae2f]"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> MHIC #122983</span>
</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Facebook</a>
<span className="opacity-20">|</span>
<a className="hover:text-white transition-colors" href="#">Google Reviews</a>
</div>
</div>

<header>
<div className="logo">
<iconify-icon icon="solar:home-angle-linear" style={{color: 'var(--color-accent)'}} width="28"></iconify-icon>
<span className="serif tracking-tight">DWM <span className="text-[#cdae2f] font-light">ROOFING</span></span>
</div>
<nav className="nav-links">
<a className="nav-link" href="#home">Home</a>
<a className="nav-link" href="#services">Services</a>
<a className="nav-link" href="#team">Our Team</a>
<a className="nav-link text-[#cdae2f]" href="#contact">Contact</a>
</nav>
<a className="btn-beam btn-beam-primary hidden md:inline-flex" href="tel:4107957600">
<span className="text-black text-xs font-bold tracking-widest">(410) 795-7600</span>
</a>
<button className="md:hidden text-white"><iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon></button>
</header>
<main>

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Roofing Background" className="w-full h-full object-cover opacity-40 grayscale" src="https://images.unsplash.com/photo-1632759132270-35c829141062?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
</div>
<div className="container relative z-10 text-center pt-20">
<div className="reveal-wait reveal-active">
<span className="accent-text mb-6">Maryland's Premier Roofing Company</span>
<h1 className="serif font-light italic mb-6">
                        Engineered <br/>
<span className="text-[#cdae2f] not-italic font-normal">Protection.</span>
</h1>
<p className="lead mx-auto mb-10">
                        Locally owned in Woodbine. We combine expert craftsmanship with a 10-year labor warranty to secure your home for decades.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="btn-beam btn-beam-primary" href="#contact">
<span className="text-black">Request Estimate</span>
</a>
<a className="btn-beam" href="#services">
<span>View Services</span>
</a>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-neutral-950/50 backdrop-blur-sm py-8">
<div className="container flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-serif"><iconify-icon className="text-[#cdae2f]" icon="solar:star-bold"></iconify-icon> Google Guaranteed</div>
<div className="flex items-center gap-2 text-xl font-serif"><iconify-icon icon="mdi:alpha-a-circle-outline"></iconify-icon> Angi Super Service</div>
<div className="flex items-center gap-2 text-xl font-serif"><iconify-icon icon="mdi:shield-check-outline"></iconify-icon> BBB A+ Rated</div>
<div className="flex items-center gap-2 text-xl font-serif"><iconify-icon icon="solar:home-smile-linear"></iconify-icon> NextDoor Fave</div>
</div>
</div>

<section id="services" style={{padding: 'var(--section-spacing) 0'}}>
<div className="container">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-wait">
<div className="max-w-2xl">
<span className="accent-text">Our Expertise</span>
<h2 className="serif font-light">Complete Roofing <br/>Solutions.</h2>
<p className="mt-4">From minor repairs to full architectural replacements, we use the highest quality materials backed by industry-leading warranties.</p>
</div>
<div className="hidden md:block pb-4">
<iconify-icon className="text-[#cdae2f] opacity-50" icon="solar:arrow-right-down-linear" width="48"></iconify-icon>
</div>
</div>
<div className="service-grid">

<div className="service-card reveal-wait delay-100 group">
<iconify-icon className="service-icon group-hover:scale-110 transition-transform" icon="solar:home-add-linear" width="40"></iconify-icon>
<h3 className="serif text-2xl mb-4">Roof Replacement</h3>
<p className="text-sm text-neutral-400 mb-6">
                            Complete tear-offs and architectural shingle installations. We maximize curb appeal and structural integrity.
                        </p>
<ul className="text-sm text-neutral-500 space-y-2 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-[#cdae2f]" icon="solar:check-circle-linear"></iconify-icon> Lifetime Workmanship Warranty</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#cdae2f]" icon="solar:check-circle-linear"></iconify-icon> Wide Selection of Shingles</li>
</ul>
<span className="text-[#cdae2f] text-xs uppercase tracking-widest font-bold group-hover:underline">Learn More</span>
</div>

<div className="service-card reveal-wait delay-200 group">
<iconify-icon className="service-icon group-hover:scale-110 transition-transform" icon="solar:hammer-linear" width="40"></iconify-icon>
<h3 className="serif text-2xl mb-4">Roof Repair</h3>
<p className="text-sm text-neutral-400 mb-6">
                            Leaks, missing shingles, or storm damage? Our technicians diagnose and fix issues before they become costly.
                        </p>
<ul className="text-sm text-neutral-500 space-y-2 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-[#cdae2f]" icon="solar:check-circle-linear"></iconify-icon> Emergency Service</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#cdae2f]" icon="solar:check-circle-linear"></iconify-icon> Leak Detection Experts</li>
</ul>
<span className="text-[#cdae2f] text-xs uppercase tracking-widest font-bold group-hover:underline">Learn More</span>
</div>

<div className="service-card reveal-wait delay-300 group">
<iconify-icon className="service-icon group-hover:scale-110 transition-transform" icon="solar:water-drops-linear" width="40"></iconify-icon>
<h3 className="serif text-2xl mb-4">Gutters &amp; Skylights</h3>
<p className="text-sm text-neutral-400 mb-6">
                            Protect your foundation with seamless gutters and bring natural light into your home with energy-efficient skylights.
                        </p>
<ul className="text-sm text-neutral-500 space-y-2 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-[#cdae2f]" icon="solar:check-circle-linear"></iconify-icon> Seamless Aluminum</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#cdae2f]" icon="solar:check-circle-linear"></iconify-icon> Velux Skylight Installers</li>
</ul>
<span className="text-[#cdae2f] text-xs uppercase tracking-widest font-bold group-hover:underline">Learn More</span>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] border-y border-white/5 py-24 relative overflow-hidden">
<div className="container relative z-10 grid md:grid-cols-2 gap-16 items-center">
<div className="reveal-wait">
<img alt="Roofing Worker" className="rounded-lg grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1624552097653-b097e3f6831d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="reveal-wait delay-200">
<span className="accent-text">The DWM Standard</span>
<h2 className="serif font-light mb-6">Our Promise <br/>To You.</h2>
<p className="mb-6">
                        DWM Roofing promises to provide the highest quality workmanship, using the industry's finest materials. Unlike many competitors, we stand firmly behind our work.
                    </p>
<div className="p-6 border border-[#cdae2f]/30 bg-[#cdae2f]/5 rounded-lg mb-8">
<h4 className="text-[#cdae2f] font-serif text-xl mb-2 flex items-center gap-2">
<iconify-icon icon="solar:medal-ribbon-star-linear"></iconify-icon>
                            10-Year Labor Warranty
                        </h4>
<p className="text-sm text-[#cdae2f]/80">
                            We guarantee your roof to be maintenance-free for 10 years from the date of completion. If there are any leaks or defects in our workmanship, DWM will fix it free of charge.
                        </p>
</div>
<a className="inline-flex items-center gap-2 text-white hover:text-[#cdae2f] transition-colors uppercase tracking-widest text-xs font-bold" href="#team">
                        Meet the experts <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section id="team" style={{padding: 'var(--section-spacing) 0'}}>
<div className="container">
<div className="text-center max-w-3xl mx-auto mb-16 reveal-wait">
<span className="accent-text">Who We Are</span>
<h2 className="serif font-light">Meet The Team.</h2>
<p>The dedicated craftsmen and professionals ensuring your home is protected. We are family-owned and locally operated.</p>
</div>
<div className="team-grid">

<div className="team-card reveal-wait delay-100">
<div className="team-img-wrapper">
<img alt="David Morris" className="team-img" src="https://dwmroofing.net/wp-content/uploads/2020/09/IMG_1655-2-scaled-e1600888269190-300x280.jpg"/>
</div>
<div className="team-info">
<h4 className="serif text-xl text-white">David Morris</h4>
<span className="text-[#cdae2f] text-xs uppercase tracking-widest font-bold mb-3 block">Owner</span>
<p className="text-sm text-neutral-400 line-clamp-3">
                                Started his roofing career in 1998. Founded DWM in 2003. Actively involved in day-to-day operations both in the office and the field.
                            </p>
</div>
</div>

<div className="team-card reveal-wait delay-200">
<div className="team-img-wrapper">
<img alt="Brandon Crone" className="team-img" src="https://dwmroofing.net/wp-content/uploads/2020/09/IMG_1638-scaled-e1600887937785-285x300.jpg"/>
</div>
<div className="team-info">
<h4 className="serif text-xl text-white">Brandon Crone</h4>
<span className="text-[#cdae2f] text-xs uppercase tracking-widest font-bold mb-3 block">Service Tech &amp; Estimator</span>
<p className="text-sm text-neutral-400 line-clamp-3">
                                With DWM since 2017. Following in his father’s footsteps with 18 years of industry experience. He handles leaks, repairs, and estimates.
                            </p>
</div>
</div>

<div className="team-card reveal-wait delay-300">
<div className="team-img-wrapper">
<img alt="Jill Carr" className="team-img" src="https://dwmroofing.net/wp-content/uploads/2020/10/5-scaled-e1602254255690-300x300.jpg"/>
</div>
<div className="team-info">
<h4 className="serif text-xl text-white">Jill Carr</h4>
<span className="text-[#cdae2f] text-xs uppercase tracking-widest font-bold mb-3 block">Chief Admin Officer</span>
<p className="text-sm text-neutral-400 line-clamp-3">
                                Joined in 2013. Coordinates job schedules, deliveries, warranties, and manages the office. Proud dog mom to Remi, the DWM mascot.
                            </p>
</div>
</div>

<div className="team-card reveal-wait delay-100">
<div className="team-img-wrapper">
<img alt="Pedro Martinez" className="team-img" src="https://dwmroofing.net/wp-content/uploads/2020/09/IMG_1664-300x225.jpg"/>
</div>
<div className="team-info">
<h4 className="serif text-xl text-white">Pedro Martinez</h4>
<span className="text-[#cdae2f] text-xs uppercase tracking-widest font-bold mb-3 block">Senior Job Foreman</span>
<p className="text-sm text-neutral-400 line-clamp-3">
                                With DWM for 16 years. Has 26 years of total roofing experience. Known for motivating his crew and efficient, quality work.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 border-t border-white/5 py-24" id="contact">
<div className="container bg-[#cdae2f] rounded-2xl p-12 md:p-24 relative overflow-hidden text-center">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="serif text-black mb-6 font-medium">Ready for a new roof?</h2>
<p className="text-neutral-900/80 mb-10 text-lg">
                        Get a no-hassle estimate from Maryland's most trusted roofing team. We service Howard, Carroll, and Frederick Counties.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2" href="tel:4107957600">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (410) 795-7600
                        </a>
<a className="bg-white/20 backdrop-blur border border-black/10 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/30 transition-colors" href="#">
                            Request Online
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer>
<div className="container grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="logo mb-6">
<iconify-icon icon="solar:home-angle-linear" style={{color: 'var(--color-accent)'}} width="24"></iconify-icon>
<span className="serif tracking-tight text-xl">DWM <span className="text-[#cdae2f] font-light">ROOFING</span></span>
</div>
<p className="text-sm text-neutral-500 mb-6">
                    Maryland's Premier Roofing Company based in Woodbine. Quality craftsmanship and integrity since 2003.
                </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-[#cdae2f] transition-colors" href="#"><iconify-icon icon="mdi:facebook" width="24"></iconify-icon></a>
<a className="text-neutral-400 hover:text-[#cdae2f] transition-colors" href="#"><iconify-icon icon="mdi:instagram" width="24"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#cdae2f] transition-colors" href="#">Roof Replacement</a></li>
<li><a className="hover:text-[#cdae2f] transition-colors" href="#">Roof Repair</a></li>
<li><a className="hover:text-[#cdae2f] transition-colors" href="#">Gutters &amp; Downspouts</a></li>
<li><a className="hover:text-[#cdae2f] transition-colors" href="#">Skylight Installation</a></li>
<li><a className="hover:text-[#cdae2f] transition-colors" href="#">Inspections</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Service Areas</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#cdae2f] transition-colors" href="#">Howard County</a></li>
<li><a className="hover:text-[#cdae2f] transition-colors" href="#">Carroll County</a></li>
<li><a className="hover:text-[#cdae2f] transition-colors" href="#">Frederick County</a></li>
<li><a className="hover:text-[#cdae2f] transition-colors" href="#">Woodbine, MD</a></li>
<li><a className="hover:text-[#cdae2f] transition-colors" href="#">Columbia, MD</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#cdae2f] mt-1" icon="solar:map-point-linear"></iconify-icon>
<span>518 Mabe Drive<br/>Woodbine, MD 21797</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#cdae2f]" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:4107957600">(410) 795-7600</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#cdae2f]" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@dwmroofing.com">info@dwmroofing.com</a>
</li>
</ul>
</div>
</div>
<div className="container border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 DWM Roofing, Inc. All rights reserved.</p>
<p>MHIC License #122983</p>
</div>
</footer>



    </>
  );
}

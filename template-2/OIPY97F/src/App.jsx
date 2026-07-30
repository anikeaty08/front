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



    // Set year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    (function(){
      const toggle = document.getElementById('mobileToggle');
      const menu = document.getElementById('mobileMenu');
      let open = false;
      toggle.addEventListener('click', () => {
        open = !open;
        if (open) {
          menu.style.transform = 'translateY(0)';
          menu.style.opacity = '1';
        } else {
          menu.style.transform = 'translateY(-8px)';
          menu.style.opacity = '0';
        }
      });

      // close mobile menu when clicking a link
      menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          open = false;
          menu.style.transform = 'translateY(-8px)'; menu.style.opacity = '0';
        });
      });
    })();

    // Intersection observer-driven reveal animations using inline styles only
    (function(){
      const ease = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      // elements to animate: set data-anim and optional data-delay (ms)
      const animTargets = [];

      // Build a set of target elements (common hero blocks and cards)
      document.querySelectorAll('h1, h2, h3, p, section img, .rounded-xl, .p-6, .grid > article, .grid.md\\:grid-cols-3 > article, .p-6.bg-white, .rounded-2xl').forEach(el => {
        // limit which elements receive animation (avoid huge flood)
        if (el.closest('header') || el.tagName.toLowerCase() === 'footer') return;
        // some elements we want subtler delay
        animTargets.push(el);
      });

      // apply initial inline styles
      animTargets.forEach((el, i) => {
        const delay = (i % 10) * 80; // stagger pattern
        el.style.opacity = '0';
        el.style.transform = 'translateY(18px)';
        el.style.transition = 'opacity 0.7s ' + ease + ' ' + (delay/1000) + 's, transform 0.7s ' + ease + ' ' + (delay/1000) + 's';
      });

      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.opacity = '1';
            el.style.transform = 'none';
            obs.unobserve(el);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

      animTargets.forEach(el => obs.observe(el));
    })();

    // Smooth scrolling for anchor links
    (function(){
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e){
          const href = this.getAttribute('href');
          if (!href || href === '#') return;
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    })();

    // Simple form submit handler (demo)
    (function(){
      const form = document.getElementById('quoteForm');
      form.addEventListener('submit', function(e){
        e.preventDefault();
        // Basic UX feedback
        const btn = form.querySelector('button[type="submit"]');
        const old = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = 'Sending...';
        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = old;
          alert('Thanks — your request was sent. We will reply within one business day.');
          form.reset();
        }, 900);
      });
    })();

    // FAQ accordion behavior (only one open at a time) with smooth animation
    (function(){
      const faqItems = Array.from(document.querySelectorAll('.faq-item'));
      if (!faqItems.length) return;

      // helper to close an item
      function closeItem(item) {
        const btn = item.querySelector('button');
        const answer = item.querySelector('.faq-answer');
        const chevron = item.querySelector('.faq-chevron');
        btn.setAttribute('aria-expanded', 'false');
        // collapsing: set max-height to 0 and fade/translate for inner
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        answer.style.transform = 'translateY(6px)';
        // rotate chevron back
        chevron.style.transform = 'rotate(0deg)';
        chevron.style.transition = 'transform 280ms cubic-bezier(0.2,0.9,0.2,1)';
        item.classList.remove('open');
      }

      // helper to open an item
      function openItem(item) {
        const btn = item.querySelector('button');
        const answer = item.querySelector('.faq-answer');
        const chevron = item.querySelector('.faq-chevron');
        btn.setAttribute('aria-expanded', 'true');
        // expand: set max-height to scrollHeight for smooth height transition
        // set immediate opacity/transform for inner content to animate in
        answer.style.maxHeight = answer.scrollHeight + 12 + 'px'; // small buffer
        answer.style.opacity = '1';
        answer.style.transform = 'none';
        // rotate chevron
        chevron.style.transform = 'rotate(180deg)';
        chevron.style.transition = 'transform 320ms cubic-bezier(0.2,0.9,0.2,1)';
        item.classList.add('open');
      }

      // initialize: ensure answers are collapsed
      faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        answer.style.transform = 'translateY(6px)';
        answer.style.transition = 'max-height 420ms cubic-bezier(0.2,0.9,0.2,1), opacity 320ms ease, transform 320ms ease';
        const chevron = item.querySelector('.faq-chevron');
        chevron.style.transition = 'transform 280ms cubic-bezier(0.2,0.9,0.2,1)';
        const btn = item.querySelector('button');
        btn.setAttribute('aria-expanded', 'false');

        // click handler
        btn.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');

          // close others
          faqItems.forEach(other => {
            if (other !== item) closeItem(other);
          });

          if (isOpen) {
            closeItem(item);
          } else {
            openItem(item);
            // After expanding, adjust maxHeight in case of images/fonts that change height
            // Use a small timeout to allow transition and then reset a stable maxHeight
            setTimeout(() => {
              const a = item.querySelector('.faq-answer');
              a.style.maxHeight = a.scrollHeight + 12 + 'px';
            }, 420);
          }
        });
      });

      // Accessibility: collapse all when Escape pressed inside any faq button
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          faqItems.forEach(closeItem);
        }
      });
    })();
  
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
      

<header className="fixed inset-x-0 top-0 z-50">
<div className="backdrop-blur-sm" style={{backgroundColor: `rgba(247,247,245,0.90)`, borderBottom: `1px solid rgba(198,200,202,0.18)`}}>
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center rounded-lg" style={{backgroundColor: `#0F2F55`, color: `#fff`}}>

<svg aria-hidden="" className="w-4 h-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<rect height="11" rx="2" width="18" x="3" y="5"></rect>
<path d="M7 16v3"></path>
<path d="M17 16v3"></path>
<path d="M3 10h18"></path>
<path d="M7 5v-1"></path>
</svg>
</div>
<span className="text-lg text-slate-900 tracking-tight" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Texas Bus Services</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-700 hover:text-[#0F2F55] transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-700 hover:text-[#0F2F55] transition-colors" href="#fleet">Fleet</a>
<a className="text-sm font-medium text-slate-700 hover:text-[#0F2F55] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-700 hover:text-[#0F2F55] transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-700 hover:text-[#0F2F55] transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition" href="#contact" style={{fontWeight: `600`, backgroundColor: `#0F2F55`, color: `#fff`}}>Get a Quote
              <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<button aria-label="Toggle menu" className="md:hidden p-2 rounded-md hover:bg-slate-100 transition" id="mobileToggle">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path>
</svg>
</button>
</div>
</div>
</nav>
</div>

<div className="absolute inset-x-4 top-16 rounded-xl shadow-lg bg-white border border-slate-100 md:hidden overflow-hidden" id="mobileMenu" style={{transform: `translateY(-8px)`, transition: `transform 0.28s ease, opacity 0.28s ease`, opacity: `0`}}>
<div className="px-4 py-4">
<div className="flex flex-col gap-3">
<a className="py-2 text-slate-700 font-medium rounded hover:bg-slate-50 px-2" href="#home">Home</a>
<a className="py-2 text-slate-700 font-medium rounded hover:bg-slate-50 px-2" href="#fleet">Fleet</a>
<a className="py-2 text-slate-700 font-medium rounded hover:bg-slate-50 px-2" href="#services">Services</a>
<a className="py-2 text-slate-700 font-medium rounded hover:bg-slate-50 px-2" href="#about">About</a>
<a className="py-2 text-slate-700 font-medium rounded hover:bg-slate-50 px-2" href="#contact">Contact</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition" href="#contact" style={{fontWeight: `600`, backgroundColor: `#0F2F55`, color: `#fff`}}>Get a Quote</a>
</div>
</div>
</div>
</header>

<main className="pt-24">
<section className="pt-12 pb-16" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div>
<p className="text-sm font-medium mb-3" style={{fontWeight: `600`, color: `#0E8D99`}}>Reliable Group Travel</p>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-tight font-medium" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>
              Charter buses for every trip — corporate, school, event, and tour
            </h1>
<p className="mt-6 text-lg text-slate-600 max-w-xl" style={{fontFamily: `'Source Sans Pro', system-ui`}}>
              Comfortable seating, professional drivers, modern fleet, and door-to-door service. Nationwide routes, hourly charters, and ADA-accessible options.
            </p>
<div className="mt-8 flex flex-wrap gap-4">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white transition" href="#contact" style={{fontWeight: `600`, backgroundColor: `#0F2F55`}}>
                Book a Trip
                <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition" href="#fleet" style={{fontWeight: `600`, fontFamily: `'Source Sans Pro', system-ui`}}>
                View Fleet
                <svg className="w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="mt-8 flex items-center gap-6">
<div className="flex -space-x-3">
<img alt="driver" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="bus interior" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=400&auto=format&fit=crop" />
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-slate-800 font-medium">20+</div>
</div>
<div>
<p className="text-sm text-slate-900 font-medium" style={{fontWeight: `600`, fontFamily: `'Gotham', 'Source Sans Pro', system-ui`}}>20+ Years of Safe Service</p>
<p className="text-sm text-slate-500" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Corporate, school, tours, and events</p>
</div>
</div>
</div>

<div className="relative">
<div className="rounded-2xl overflow-hidden shadow-xl">
<img alt="charter bus" className="w-full h-[420px] object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />

<div className="absolute top-5 left-5 rounded-lg p-3 shadow" style={{backgroundColor: `rgba(255,255,255,0.9)`, backdropFilter: `blur(6px)`, border: `1px solid rgba(15,47,85,0.06)`}}>
<div className="flex items-center gap-3">
<svg className="w-4 h-4" fill="none" height="18" stroke="#0F2F55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M12 20V10"></path><path d="M5 12l7-7 7 7"></path>
</svg>
<div>
<div className="text-sm text-slate-900 font-medium" style={{fontWeight: `600`, fontFamily: `'Gotham', 'Source Sans Pro', system-ui`}}>On-time rate</div>
<div className="text-lg text-slate-800 font-medium">98%</div>
</div>
</div>
</div>
<div className="absolute bottom-5 right-5 rounded-lg p-3 shadow" style={{backgroundColor: `rgba(255,255,255,0.9)`, backdropFilter: `blur(6px)`, border: `1px solid rgba(15,47,85,0.06)`}}>
<div className="flex items-center gap-3">
<svg className="w-4 h-4" fill="none" height="18" stroke="#0F2F55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M3 13h18"></path><path d="M6 21h.01"></path><path d="M18 21h.01"></path><rect height="7" rx="2" width="20" x="2" y="6"></rect>
</svg>
<div>
<div className="text-sm text-slate-900 font-medium" style={{fontWeight: `600`, fontFamily: `'Gotham', 'Source Sans Pro', system-ui`}}>Fleet size</div>
<div className="text-lg text-slate-800 font-medium">45+ buses</div>
</div>
</div>
</div>
</div>

<div aria-hidden="" className="mt-4 hidden lg:block"></div>
</div>
</div>
</div>
</section>

<section className="py-16" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<p className="text-sm font-medium" style={{fontWeight: `600`, color: `#0E8D99`}}>About Texas Bus Services</p>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-medium" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Committed to safety, punctuality, and comfort</h2>
<p className="mt-4 text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Family-owned with a professional operations team, rigorous vehicle maintenance, and ongoing driver training. Licensed and insured for interstate travel.</p>

<h3 className="mt-6 text-2xl tracking-tight font-medium text-slate-900" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Over 25 Years of Trusted Group Travel</h3>
<p className="mt-3 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>
              Founded in 2000, Texas Bus Services began with regular trips from Texas to Guanajuato, Mexico. Growing demand led to the opening of 2 regional offices and 4 international offices— a reflection of the trust and support from our community. 10 years later we began offering all inclusive charters to Mexico and our business continued to grow.
            </p>
<p className="mt-3 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>
              Today, we continue those long-distance routes while offering charter services across Texas and beyond — with friendly service and experienced drivers, we’re committed to delivering exceptional service every step of the way.
            </p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="p-4 rounded-lg border border-slate-100">
<div className="text-sm text-slate-900 font-medium" style={{fontWeight: `600`, fontFamily: `'Gotham', 'Source Sans Pro', system-ui`}}>24/7 Dispatch</div>
<p className="mt-1 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Support for last-minute changes and real-time tracking.</p>
</div>
<div className="p-4 rounded-lg border border-slate-100">
<div className="text-sm text-slate-900 font-medium" style={{fontWeight: `600`, fontFamily: `'Gotham', 'Source Sans Pro', system-ui`}}>Safety First</div>
<p className="mt-1 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Frequent inspections and CSA-compliant operations.</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="team" className="rounded-xl object-cover w-full h-full" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop" />
<img alt="bus interior" className="rounded-xl object-cover w-full h-full" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</div>
</div>
</div>
</section>

<section className="py-10" id="process" style={{backgroundColor: `#F7F7F5`, borderTop: `1px solid rgba(198,200,202,0.12)`}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-6">
<p className="text-sm font-medium" style={{fontWeight: `600`, color: `#0E8D99`}}>Our Process</p>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-medium" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Simple steps from quote to pickup</h2>
<p className="mt-4 text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Quick, transparent, and supported by our operations team every step of the way.</p>
</div>
<div className="grid sm:grid-cols-3 gap-6">
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col items-start">
<div className="w-12 h-12 rounded-lg bg-[#0F2F55] text-white flex items-center justify-center mb-3">

<svg aria-hidden="" className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Get Instant Quote</h3>
<p className="text-sm text-slate-600">Use our online tool to quickly check availability and pricing for your trip.</p>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col items-start">
<div className="w-12 h-12 rounded-lg bg-[#0F2F55] text-white flex items-center justify-center mb-3">

<svg aria-hidden="" className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 3.65 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.42-1.42a2 2 0 0 1 2.11-.45 13 13 0 0 0 3.65.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>We’ll Reach Out</h3>
<p className="text-sm text-slate-600">A member of our team will give you a quick call to finalize the details and answer any questions.</p>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col items-start">
<div className="w-12 h-12 rounded-lg bg-[#0F2F55] text-white flex items-center justify-center mb-3">

<svg aria-hidden="" className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<rect height="10" rx="2" width="20" x="2" y="7"></rect>
<path d="M16 3v4"></path>
<path d="M8 3v4"></path>
<path d="M2 13h20"></path>
<path d="M7 17v3"></path>
<path d="M17 17v3"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Enjoy the Ride</h3>
<p className="text-sm text-slate-600">We’ll get you where you need to go — comfortably and on time.</p>
</div>
</div>
</div>
</section>

<section className="py-16" id="fleet" style={{backgroundColor: `#ffffff`, borderTop: `1px solid rgba(198,200,202,0.06)`}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<p className="text-sm font-medium" style={{fontWeight: `600`, color: `#0E8D99`}}>Why Choose Us</p>
<h2 className="mt-3 text-4xl sm:text-5xl tracking-tight font-medium" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Why Choose Us</h2>
<p className="mt-4 text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Trusted transportation backed by experience, professionalism, and a commitment to reliability and comfort.</p>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-[#0F2F55] text-white flex items-center justify-center">

<svg aria-hidden="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<circle cx="12" cy="8" r="5"></circle>
<path d="M18.2 13.2 20 21l-8-5-8 5 1.8-7.8"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham','Source Sans Pro', system-ui`, fontWeight: `600`}}>25+ Years of Experience</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>We’ve been helping groups travel safely and comfortably since 2000.</p>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-[#0F2F55] text-white flex items-center justify-center">

<svg aria-hidden="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
<path d="M2 12h20"></path>
<path d="M12 2c2.5 3 4 7 4 10s-1.5 7-4 10"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham','Source Sans Pro', system-ui`, fontWeight: `600`}}>Bilingual, Professional Drivers</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Every driver is certified, experienced, and ready to assist — in English or Spanish.</p>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-[#0F2F55] text-white flex items-center justify-center">

<svg aria-hidden="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham','Source Sans Pro', system-ui`, fontWeight: `600`}}>On-Time, Every Time</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>We show up when we say we will. Reliability is part of our reputation.</p>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-[#0F2F55] text-white flex items-center justify-center">

<svg aria-hidden="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<rect height="10" rx="2" width="20" x="2" y="7"></rect>
<path d="M16 3v4"></path>
<path d="M8 3v4"></path>
<path d="M7 17v3"></path>
<path d="M17 17v3"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham','Source Sans Pro', system-ui`, fontWeight: `600`}}>Clean, Comfortable Buses</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Our fleet is regularly maintained and designed for comfort on long or short trips.</p>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-[#0F2F55] text-white flex items-center justify-center">

<svg aria-hidden="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<polygon points="1 6 8 3 16 6 23 3 23 19 16 22 8 19 1 22 1 6"></polygon>
<line x1="8" x2="8" y1="3" y2="19"></line>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham','Source Sans Pro', system-ui`, fontWeight: `600`}}>Custom Trip Options</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>From local events to out-of-state routes, we’ll help you plan the perfect itinerary.</p>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-[#0F2F55] text-white flex items-center justify-center">

<svg aria-hidden="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham','Source Sans Pro', system-ui`, fontWeight: `600`}}>Trusted by Schools & Organizations</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>We proudly serve school districts, churches, companies, and community groups.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="services" style={{backgroundColor: `#F7F7F5`}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<p className="text-sm font-medium" style={{fontWeight: `600`, color: `#0E8D99`}}>Services</p>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-medium" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Charter options designed for your needs</h2>
<p className="mt-4 text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Hourly charters, scheduled routes, corporate shuttles, school transportation, event logistics, and guided tours.</p>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg text-white flex items-center justify-center" style={{backgroundColor: `#0F2F55`}}>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M21 12v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7"></path><path d="M5 7h14"></path><path d="M7 7v3"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Weddings</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Coordinated pickup/dropoff for guests, ceremony transfers, and multi-stop itineraries.</p>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M3 13h18"></path><path d="M5 21h2"></path><path d="M17 21h2"></path><rect height="7" rx="2" width="20" x="2" y="6"></rect>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Corporate Travel</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Professional shuttles, executive transfers, and multi-day itineraries for teams and clients.</p>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M4 4h16v8H4z"></path><path d="M6 12v6"></path><path d="M18 12v6"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>School & Church Groups</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Scheduled routes, field trips, and faith-based group transportation with vetted drivers.</p>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M3 13h18"></path><path d="M7 21v-4"></path><path d="M17 21v-4"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Sports Teams</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Team transport with gear storage, pre-game logistics, and reliable schedules for away games.</p>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M3 6h18M5 6v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Tours</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Guided and self-guided tour transport with multi-stop planning and comfortable coaches.</p>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-sky-500 text-white flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path d="M12 2l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7z"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Tourist</h4>
<p className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Short- and long-distance tourist shuttles, airport transfers, and city sightseeing routes.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="faq" style={{backgroundColor: `#ffffff`, borderTop: `1px solid rgba(198,200,202,0.06)`}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-8">
<p className="text-sm font-medium" style={{fontWeight: `600`, color: `#0E8D99`}}>FAQ</p>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-medium" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Frequently asked questions</h2>
<p className="mt-3 text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Tap a question to reveal the answer. Only one answer opens at a time.</p>
</div>
<div className="max-w-3xl mx-auto space-y-3">

<div className="faq-item rounded-lg border border-slate-100 overflow-hidden" style={{backgroundColor: `#fff`}}>
<button aria-controls="faq1" aria-expanded="false" className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none" style={{fontFamily: `'Source Sans Pro', system-ui`}} type="button">
<div>
<div className="text-sm text-slate-900 font-medium" style={{fontWeight: `600`, fontFamily: `'Gotham','Source Sans Pro', system-ui`}}>How far in advance should I book a charter?</div>
<div className="mt-1 text-xs text-slate-500">Typical guidance for planning</div>
</div>
<svg aria-hidden="" className="faq-chevron w-5 h-5 text-slate-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M6 9l6 6 6-6"></path>
</svg>
</button>
<div className="faq-answer px-5 pb-4" id="faq1" style={{maxHeight: `0px`, overflow: `hidden`, transition: `max-height 420ms cubic-bezier(0.2,0.9,0.2,1), opacity 320ms ease, transform 320ms ease`, opacity: `0`, transform: `translateY(6px)`}}>
<div className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>
                For most standard charters we recommend booking 2–4 weeks in advance. For peak travel dates, large groups, or special requests, secure your booking as early as possible to ensure availability.
              </div>
</div>
</div>

<div className="faq-item rounded-lg border border-slate-100 overflow-hidden" style={{backgroundColor: `#fff`}}>
<button aria-controls="faq2" aria-expanded="false" className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none" style={{fontFamily: `'Source Sans Pro', system-ui`}} type="button">
<div>
<div className="text-sm text-slate-900 font-medium" style={{fontWeight: `600`, fontFamily: `'Gotham','Source Sans Pro', system-ui`}}>Are your vehicles ADA accessible?</div>
<div className="mt-1 text-xs text-slate-500">Accessibility options</div>
</div>
<svg aria-hidden="" className="faq-chevron w-5 h-5 text-slate-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M6 9l6 6 6-6"></path>
</svg>
</button>
<div className="faq-answer px-5 pb-4" id="faq2" style={{maxHeight: `0px`, overflow: `hidden`, transition: `max-height 420ms cubic-bezier(0.2,0.9,0.2,1), opacity 320ms ease, transform 320ms ease`, opacity: `0`, transform: `translateY(6px)`}}>
<div className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>
                Yes — we operate ADA-compliant vehicles with wheelchair lifts and securement systems. Please request accessible vehicles when you request a quote so we can assign the appropriate coach and trained staff.
              </div>
</div>
</div>

<div className="faq-item rounded-lg border border-slate-100 overflow-hidden" style={{backgroundColor: `#fff`}}>
<button aria-controls="faq3" aria-expanded="false" className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none" style={{fontFamily: `'Source Sans Pro', system-ui`}} type="button">
<div>
<div className="text-sm text-slate-900 font-medium" style={{fontWeight: `600`, fontFamily: `'Gotham','Source Sans Pro', system-ui`}}>Can I make last-minute changes to my reservation?</div>
<div className="mt-1 text-xs text-slate-500">Changes and cancellations</div>
</div>
<svg aria-hidden="" className="faq-chevron w-5 h-5 text-slate-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M6 9l6 6 6-6"></path>
</svg>
</button>
<div className="faq-answer px-5 pb-4" id="faq3" style={{maxHeight: `0px`, overflow: `hidden`, transition: `max-height 420ms cubic-bezier(0.2,0.9,0.2,1), opacity 320ms ease, transform 320ms ease`, opacity: `0`, transform: `translateY(6px)`}}>
<div className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>
                We offer 24/7 dispatch and can often accommodate reasonable last-minute changes. Depending on timing and resources there may be additional fees — contact our operations team as soon as possible and we’ll do our best to help.
              </div>
</div>
</div>

<div className="faq-item rounded-lg border border-slate-100 overflow-hidden" style={{backgroundColor: `#fff`}}>
<button aria-controls="faq4" aria-expanded="false" className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none" style={{fontFamily: `'Source Sans Pro', system-ui`}} type="button">
<div>
<div className="text-sm text-slate-900 font-medium" style={{fontWeight: `600`, fontFamily: `'Gotham','Source Sans Pro', system-ui`}}>What is included in the quote?</div>
<div className="mt-1 text-xs text-slate-500">Pricing and inclusions</div>
</div>
<svg aria-hidden="" className="faq-chevron w-5 h-5 text-slate-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M6 9l6 6 6-6"></path>
</svg>
</button>
<div className="faq-answer px-5 pb-4" id="faq4" style={{maxHeight: `0px`, overflow: `hidden`, transition: `max-height 420ms cubic-bezier(0.2,0.9,0.2,1), opacity 320ms ease, transform 320ms ease`, opacity: `0`, transform: `translateY(6px)`}}>
<div className="mt-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>
                Quotes typically include vehicle, driver, fuel surcharges, and standard insurance. Special requests (extras, extended wait times, cross-border fees) are quoted separately and noted in your estimate.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="contact" style={{backgroundColor: `#F7F7F5`}}>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-8">
<p className="text-sm font-medium" style={{fontWeight: `600`, color: `#0E8D99`}}>Request a Quote</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-medium" style={{fontFamily: `'Gotham', 'Source Sans Pro', system-ui`, fontWeight: `600`}}>Tell us about your trip</h3>
<p className="mt-2 text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>We'll respond within one business day with availability and pricing.</p>
</div>
<div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
<form className="space-y-4" id="quoteForm">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-700 mb-2" style={{fontFamily: `'Source Sans Pro', system-ui`}}>First name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none" name="first" required style={{fontFamily: `'Source Sans Pro', system-ui`, boxShadow: `0 0 0 4px rgba(14,141,153,0.06)`}} />
</div>
<div>
<label className="block text-sm text-slate-700 mb-2" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Last name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none" name="last" required style={{fontFamily: `'Source Sans Pro', system-ui`, boxShadow: `0 0 0 4px rgba(14,141,153,0.06)`}} />
</div>
</div>
<div>
<label className="block text-sm text-slate-700 mb-2" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none" name="email" required style={{fontFamily: `'Source Sans Pro', system-ui`, boxShadow: `0 0 0 4px rgba(14,141,153,0.06)`}} type="email" />
</div>
<div>
<label className="block text-sm text-slate-700 mb-2" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Trip type</label>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none" name="type" style={{fontFamily: `'Source Sans Pro', system-ui`, boxShadow: `0 0 0 4px rgba(14,141,153,0.06)`}}>
<option>One-way / Point-to-point</option>
<option>Round-trip</option>
<option>Hourly Charter</option>
<option>Shuttle</option>
<option>Special Event / Tour</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-700 mb-2" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Message / details (pickups, dates, number of passengers)</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none" name="message" rows="4" style={{fontFamily: `'Source Sans Pro', system-ui`, boxShadow: `0 0 0 4px rgba(14,141,153,0.06)`}}></textarea>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white transition" style={{fontWeight: `600`, backgroundColor: `#0F2F55`}} type="submit">
                Request Quote
                <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<div className="text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Or call <span className="font-medium text-slate-900" style={{fontFamily: `'Gotham','Source Sans Pro', system-ui`}}>1 (800) 555-0199</span></div>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 flex items-center justify-center rounded-lg" style={{backgroundColor: `#0F2F55`, color: `#fff`}}>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<rect height="11" rx="2" width="18" x="3" y="5"></rect>
<path d="M7 16v3"></path><path d="M17 16v3"></path>
</svg>
</div>
<span className="text-lg" style={{fontFamily: `'Gotham','Source Sans Pro', system-ui`, fontWeight: `600`}}>Texas Bus Services</span>
</div>
<p className="text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>Safe, punctual group travel. Insured, licensed, and experienced drivers serving events, schools, and organizations nationwide.</p>
</div>
<div>
<h4 className="text-sm font-medium mb-3" style={{fontFamily: `'Gotham','Source Sans Pro', system-ui`, fontWeight: `600`}}>Services</h4>
<ul className="space-y-2 text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>
<li><a className="hover:text-[#0F2F55]" href="#services">Hourly Charters</a></li>
<li><a className="hover:text-[#0F2F55]" href="#fleet">Fleet Options</a></li>
<li><a className="hover:text-[#0F2F55]" href="#contact">School Transportation</a></li>
<li><a className="hover:text-[#0F2F55]" href="#contact">Event Logistics</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-3" style={{fontFamily: `'Gotham','Source Sans Pro', system-ui`, fontWeight: `600`}}>Contact</h4>
<p className="text-sm text-slate-600" style={{fontFamily: `'Source Sans Pro', system-ui`}}>1 (800) 555-0199<br />hello@texasbusservices.example</p>
<div className="mt-4 flex items-center gap-3">
<a className="text-slate-600 hover:text-[#0F2F55]" href="#">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M22 4.01 12 13 2 4.01"></path><path d="M22 20H2"></path>
</svg>
</a>
<a className="text-slate-600 hover:text-[#0F2F55]" href="#">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><circle cx="12" cy="7" r="4"></circle>
</svg>
</a>
<a className="text-slate-600 hover:text-[#0F2F55]" href="#">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
<path d="M22 4.01c-1 .5-2 1-3 1.5C17 6 16 6.5 15 8s-3 2-4 3-3 0-4-1c-.8-1-1.8-2-3-2 0 0 .01 3 3 5 2 1.6 4 2 6 1 1.4-.7 2.4-1 3-1 .5 0 1 1 1 1"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="mt-8 text-center text-sm text-slate-500 border-t border-slate-100 pt-6" style={{fontFamily: `'Source Sans Pro', system-ui`}}>
        © <span id="year"></span> Texas Bus Services. All rights reserved.
      </div>
</div>
</footer>



    </>
  );
}

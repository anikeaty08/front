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



    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile menu
      const btn = document.getElementById('menuBtn');
      const closeBtn = document.getElementById('menuClose');
      const tray = document.getElementById('mobileMenu');
      const openMenu = () => { tray.classList.remove('translate-x-full'); btn?.setAttribute('aria-expanded', 'true'); };
      const closeMenu = () => { tray.classList.add('translate-x-full'); btn?.setAttribute('aria-expanded', 'false'); };
      btn?.addEventListener('click', openMenu);
      closeBtn?.addEventListener('click', closeMenu);
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

      // Section reveal
      const animated = document.querySelectorAll('[data-animate]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.remove('opacity-0','translate-y-2'); });
      }, { threshold: 0.15 });
      animated.forEach((el, i) => {
        el.classList.add('transition','duration-500','ease-in','opacity-0','translate-y-2');
        setTimeout(() => { el.classList.remove('opacity-0','translate-y-2'); }, 200 + i * 120);
        io.observe(el);
      });

      // Testimonials auto-scroll (guarded)
      const track = document.getElementById('testimonialTrack');
      const inner = document.getElementById('testimonialInner');
      if (track && inner) {
        let dir = 1;
        const step = () => {
          track.scrollLeft += dir * 1;
          if (track.scrollLeft + track.clientWidth >= inner.scrollWidth - 4) dir = -1;
          if (track.scrollLeft <= 0) dir = 1;
          requestAnimationFrame(step);
        };
        step();
      }

      // Enhance header on scroll
      const header = document.querySelector('header');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 8) header?.classList.add('bg-white/80'); else header?.classList.remove('bg-white/80');
      });
    });
  


    window.addEventListener('DOMContentLoaded', ()=> {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      const btn=document.getElementById('menuBtn'), closeBtn=document.getElementById('menuClose'), tray=document.getElementById('mobileMenu');
      const open=()=>{tray.classList.remove('translate-x-full');btn?.setAttribute('aria-expanded','true');};
      const close=()=>{tray.classList.add('translate-x-full');btn?.setAttribute('aria-expanded','false');};
      btn?.addEventListener('click',open); closeBtn?.addEventListener('click',close);
      document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
      const animated=document.querySelectorAll('[data-animate]'); const io=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting)en.target.classList.remove('opacity-0','translate-y-2');});},{threshold:0.15});
      animated.forEach((el,i)=>{el.classList.add('transition','duration-500','ease-in','opacity-0','translate-y-2'); setTimeout(()=>{el.classList.remove('opacity-0','translate-y-2')},200+i*120); io.observe(el);});
    });
  


    window.addEventListener('DOMContentLoaded', ()=> {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      const btn=document.getElementById('menuBtn'), closeBtn=document.getElementById('menuClose'), tray=document.getElementById('mobileMenu');
      const open=()=>{tray.classList.remove('translate-x-full');btn?.setAttribute('aria-expanded','true');};
      const close=()=>{tray.classList.add('translate-x-full');btn?.setAttribute('aria-expanded','false');};
      btn?.addEventListener('click',open); closeBtn?.addEventListener('click',close);
      document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
      const animated=document.querySelectorAll('[data-animate]'); const io=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting)en.target.classList.remove('opacity-0','translate-y-2');});},{threshold:0.15});
      animated.forEach((el,i)=>{el.classList.add('transition','duration-500','ease-in','opacity-0','translate-y-2'); setTimeout(()=>{el.classList.remove('opacity-0','translate-y-2')},200+i*120); io.observe(el);});
    });
  


    window.addEventListener('DOMContentLoaded', ()=> {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      const btn=document.getElementById('menuBtn'), closeBtn=document.getElementById('menuClose'), tray=document.getElementById('mobileMenu');
      const open=()=>{tray.classList.remove('translate-x-full');btn?.setAttribute('aria-expanded','true');};
      const close=()=>{tray.classList.add('translate-x-full');btn?.setAttribute('aria-expanded','false');};
      btn?.addEventListener('click',open); closeBtn?.addEventListener('click',close);
      document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
      const animated=document.querySelectorAll('[data-animate]'); const io=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting)en.target.classList.remove('opacity-0','translate-y-2');});},{threshold:0.15});
      animated.forEach((el,i)=>{el.classList.add('transition','duration-500','ease-in','opacity-0','translate-y-2'); setTimeout(()=>{el.classList.remove('opacity-0','translate-y-2')},200+i*120); io.observe(el);});
    });
  


    window.addEventListener('DOMContentLoaded', ()=> {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      const btn=document.getElementById('menuBtn'), closeBtn=document.getElementById('menuClose'), tray=document.getElementById('mobileMenu');
      const open=()=>{tray.classList.remove('translate-x-full');btn?.setAttribute('aria-expanded','true');};
      const close=()=>{tray.classList.add('translate-x-full');btn?.setAttribute('aria-expanded','false');};
      btn?.addEventListener('click',open); closeBtn?.addEventListener('click',close);
      document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
      const animated=document.querySelectorAll('[data-animate]'); const io=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting)en.target.classList.remove('opacity-0','translate-y-2');});},{threshold:0.15});
      animated.forEach((el,i)=>{el.classList.add('transition','duration-500','ease-in','opacity-0','translate-y-2'); setTimeout(()=>{el.classList.remove('opacity-0','translate-y-2')},200+i*120); io.observe(el);});
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
      

<header aria-label="Primary" className="sticky top-0 z-50 border-b border-slate-200/70 backdrop-blur-[10px] bg-white/70 supports-[backdrop-filter]:bg-white/60 transition-colors" role="banner">
<div className="max-w-7xl mx-auto px-5 md:px-8 py-4">
<div className="flex gap-4 items-center">

<a aria-label="Asmi Home" className="inline-flex items-center gap-2" href="index.html">
<span className="inline-flex items-center justify-center text-sm font-medium text-white tracking-tight bg-[#1E3A8A] w-8 h-8 rounded-md" style={{}}>logo</span>
<span className="sm:text-base text-sm font-light tracking-tight">ASMI Technology Consulting B.V.</span>
</a>

<nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 ml-4">
<a className="px-3 py-2 text-sm rounded-md text-[#1E3A8A] border border-[#4B5EAA] bg-white" href="index.html">Home</a>
<a className="hover:text-[#1E3A8A] hover:bg-slate-50 hover:border-slate-200 transition text-sm text-slate-700/90 border-transparent border rounded-md pt-2 pr-3 pb-2 pl-3" href="/about-us">About Us</a>
<a className="hover:text-[#1E3A8A] hover:bg-slate-50 hover:border-slate-200 transition text-sm text-slate-700/90 border-transparent border rounded-md pt-2 pr-3 pb-2 pl-3" href="/services">Services</a>
<a className="hover:text-[#1E3A8A] hover:bg-slate-50 hover:border-slate-200 transition text-sm text-slate-700/90 border-transparent border rounded-md pt-2 pr-3 pb-2 pl-3" href="/industries">Industries</a>
<a className="hover:text-[#1E3A8A] hover:bg-slate-50 hover:border-slate-200 transition text-sm text-slate-700/90 border-transparent border rounded-md pt-2 pr-3 pb-2 pl-3" href="/resources">Resources</a>
<a className="hover:text-[#1E3A8A] hover:bg-slate-50 hover:border-slate-200 transition text-sm text-slate-700/90 border-transparent border rounded-md pt-2 pr-3 pb-2 pl-3" href="/careers">Careers</a>
<a className="hover:text-[#1E3A8A] hover:bg-slate-50 hover:border-slate-200 transition text-sm text-slate-700/90 border-transparent border rounded-md pt-2 pr-3 pb-2 pl-3" href="/contact">Contact</a>
</nav>

<a className="hidden items-center gap-2 hover:shadow-[0_0_0_5px_rgba(212,160,23,0.25)] hover:brightness-105 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4A017]/50 sm:inline-flex sm:bg-blue-950 sm:text-slate-50 text-sm font-medium text-slate-900 bg-[#D4A017] border-slate-200 border rounded-full ml-auto pt-2 pr-4 pb-2 pl-4" href="contact.html">Contact Our Team<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>

<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Open menu" className="md:hidden ml-auto inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 text-slate-700 hover:text-[#1E3A8A] hover:bg-slate-50 transition" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

</header>

<section aria-labelledby="home-title" className="md:px-8 md:pt-16 max-w-7xl mr-auto ml-auto pt-16 pr-5 pl-5">
<div className="rounded-3xl bg-white/70 backdrop-blur-[10px] border border-slate-200 shadow-[0_30px_80px_-40px_rgba(2,6,23,0.15)] overflow-hidden transition duration-500 ease-in" data-animate="">
<div className="sm:p-8 md:p-12 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-start md:items-center gap-6 md:gap-10 flex-col md:flex-row">
<div className="flex-1">
<p className="text-[11px] uppercase font-light text-slate-500 tracking-[0.18em]">Leading SAP Consulting — Utrecht, Netherlands</p>
<h1 className="sm:text-5xl md:text-6xl text-4xl font-light text-slate-900 tracking-tight mt-2" id="home-title" style={{}}>Simplifying SAP, Amplifying Success.</h1>
<p className="sm:text-lg text-slate-700/80 max-w-2xl mt-4">At ASMI, we provide end-to-end SAP consulting that makes your business run smoother. From implementation to process optimization, we deliver practical solutions that drive efficiency, growth, and innovation.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="group inline-flex items-center gap-2 hover:shadow-[0_0_0_5px_rgba(212,160,23,0.25)] hover:brightness-105 transition text-sm font-medium text-slate-50 bg-blue-950 border-slate-200 border rounded-full pt-3 pr-5 pb-3 pl-5" href="contact.html">Request SAP Consultation<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span></a>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#1E3A8A] bg-white border border-[#4B5EAA] hover:bg-slate-50 hover:border-[#1E3A8A] transition" href="services.html#top">
                Explore Services
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-600/80">
</div>
</div>

<div className="w-full md:w-[440px] shrink-0 space-y-3">
<img alt="SAP workflow visual" className="backdrop-blur-[10px] bg-white/70 w-full border-slate-200 border rounded-2xl pt-2 pr-2 pb-2 pl-2" loading="lazy" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&amp;q=60&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
</div>
</section>

<section aria-labelledby="partners-title" className="max-w-7xl mx-auto px-5 md:px-8 pt-8 md:pt-12">
<div className="rounded-2xl bg-white/60 backdrop-blur-[10px] border border-slate-200 p-6 md:p-8 transition duration-500 ease-in" data-animate="">
<div className="flex items-center justify-between gap-3">
<h2 className="text-xl md:text-2xl tracking-tight font-light text-slate-900" id="partners-title">Trusted ecosystem partners</h2>
</div>
<div className="mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
<div className="flex hover:bg-slate-50 transition bg-white h-16 border-slate-200 border rounded-xl items-center justify-center"><span className="text-slate-500 text-sm">SAP</span></div>
<div className="flex items-center justify-center h-16 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"><span className="text-slate-500 text-sm">DSAG</span></div>
<div className="flex items-center justify-center h-16 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"><span className="text-slate-500 text-sm">EuroCloud</span></div>
<div className="flex items-center justify-center h-16 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"><span className="text-slate-500 text-sm">NEN7510</span></div>
<div className="flex items-center justify-center h-16 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"><span className="text-slate-500 text-sm">ISAE 3402</span></div>
<div className="flex items-center justify-center h-16 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"><span className="text-slate-500 text-sm">ISO/IEC 27001</span></div>
</div>
</div>
</section>

<section aria-labelledby="services-title" className="md:px-8 md:pt-12 max-w-7xl mr-auto ml-auto pt-8 pr-5 pl-5">
<div className="rounded-2xl bg-white/60 backdrop-blur-[10px] border border-slate-200 p-6 md:p-8 transition duration-500 ease-in" data-animate="">
<div className="flex items-center justify-between">
<h2 className="md:text-2xl text-xl font-light text-slate-900 tracking-tight" id="services-title" style={{}}>Our Services</h2>
<a className="inline-flex items-center gap-2 hover:bg-slate-50 transition text-sm font-medium text-[#1E3A8A] bg-white border-[#4B5EAA] border rounded-full pt-2 pr-4 pb-2 pl-4" href="services.html">
          Learn more
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
<article className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-[10px] p-5 hover:shadow-md transition">
<div className="flex items-start gap-4">
<img alt="Strategy session" className="bg-white/70 w-28 h-20 object-cover border-slate-200 border rounded-lg pt-1 pr-1 pb-1 pl-1" loading="lazy" src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=480&amp;q=60&amp;auto=format&amp;fit=crop"/>
<div className="">
<h3 className="mt-2 text-lg tracking-tight font-light">SAP Advisory &amp; Strategy</h3>
<p className="mt-2 text-slate-700/80">Transformation roadmaps and readiness grounded in value and governance best practice.</p>
</div>
</div>
</article>
<article className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-[10px] p-5 hover:shadow-md transition">
<div className="flex items-start gap-4">
<img alt="Migration planning" className="h-20 w-28 rounded-lg object-cover border border-slate-200 bg-white/70 p-1" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="">
<h3 className="mt-2 text-lg tracking-tight font-light">Implementation &amp; Migration</h3>
<p className="mt-2 text-slate-700/80">S/4HANA and ERP solutions delivered with proven templates and scalable DevOps.</p>
</div>
</div>
</article>
<article className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-[10px] p-5 hover:shadow-md transition">
<div className="flex items-start gap-4">
<img alt="Performance tuning" className="h-20 w-28 rounded-lg object-cover border border-slate-200 bg-white/70 p-1" loading="lazy" src="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=480&amp;q=60&amp;auto=format&amp;fit=crop"/>
<div className="">
<h3 className="mt-2 text-lg tracking-tight font-light">Optimization &amp; Support</h3>
<p className="mt-2 text-slate-700/80">Performance improvements, cost control, and resilient operations.</p>
</div>
</div>
</article>
<article className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-[10px] p-5 hover:shadow-md transition">
<div className="flex items-start gap-4">
<img alt="Industry blueprints" className="h-20 w-28 rounded-lg object-cover border border-slate-200 bg-white/70 p-1" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="">
<h3 className="mt-2 text-lg tracking-tight font-light">Industry Solutions</h3>
<p className="mt-2 text-slate-700/80">Composable blueprints for manufacturing, retail, finance, and healthcare.</p>
</div>
</div>
</article>
</div>
</div>
<section aria-labelledby="sectors" className="md:px-8 md:pt-12 max-w-7xl mr-auto ml-auto pt-8 pr-5 pl-5">
<div className="backdrop-blur-[10px] md:p-8 transition duration-500 ease-in bg-white/60 border-slate-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6" data-animate="">
<h2 className="md:text-2xl text-xl font-light text-slate-900 tracking-tight" id="sectors">Sectors we serve</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 gap-x-6 gap-y-6">

<article className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex text-sm text-slate-700/80 gap-x-2 gap-y-2 items-center"><svg className="lucide lucide-factory h-5 w-5 text-[#1E3A8A]" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg></div>
<h3 className="mt-3 text-base md:text-lg tracking-tight font-light text-slate-900">Manufacturing</h3>
<p className="mt-2 text-sm text-slate-700/90">From plan‑to‑produce to EWM, we optimize production and logistics with real‑time visibility.</p>
<ul className="mt-3 text-sm text-slate-700/80 list-disc list-inside space-y-1">
<li className="">MES &amp; IoT telemetry for predictive maintenance</li>
<li className="">Advanced ATP and supply planning</li>
<li className="">Quality management automation</li>
</ul>
<img alt="Factory floor" className="mt-4 w-full rounded-lg border border-slate-200" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</article>

<article className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2 text-sm text-slate-700/80"><svg className="lucide lucide-shopping-cart h-5 w-5 text-[#1E3A8A]" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg></div>
<h3 className="mt-3 text-base md:text-lg tracking-tight font-light text-slate-900">Retail</h3>
<p className="text-sm text-slate-700/90 mt-2">Unify channels and inventory while improving forecast accuracy and margin and.</p>
<ul className="mt-3 text-sm text-slate-700/80 list-disc list-inside space-y-1">
<li className="">Omni‑channel stock and fulfillment</li>
<li className="">Demand sensing and promotions</li>
<li className="">Loyalty and customer insights</li>
</ul>
<img alt="Retail analytics" className="mt-4 w-full rounded-lg border border-slate-200" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</article>

<article className="bg-white border-slate-200 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-2 text-sm text-slate-700/80"><svg className="lucide lucide-banknote h-5 w-5 text-[#1E3A8A]" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></div>
<h3 className="mt-3 text-base md:text-lg tracking-tight font-light text-slate-900">Finance</h3>
<p className="mt-2 text-sm text-slate-700/90">Shorten time‑to‑close, increase transparency, and ensure regulatory compliance.</p>
<ul className="mt-3 text-sm text-slate-700/80 list-disc list-inside space-y-1">
<li className="">Blackline‑style reconciliations</li>
<li className="">Profitability and cost analytics</li>
<li className="">IFRS and local GAAP reporting</li>
</ul>
<img alt="Finance dashboards" className="mt-4 w-full rounded-lg border border-slate-200" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</article>

<article className="bg-white border-slate-200 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-2 text-sm text-slate-700/80"><svg className="lucide lucide-stethoscope lucide-banknote w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="stethoscope" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(30, 58, 138)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg></div>
<h3 className="md:text-lg text-base font-light text-slate-900 tracking-tight mt-3">Healthcare</h3>
<p className="text-sm text-slate-700/90 mt-2">Protect patient data and streamline clinical supply while meeting regulations that.</p>
<ul className="mt-3 text-sm text-slate-700/80 list-disc list-inside space-y-1">
<li className="">Blackline‑style reconciliations</li>
<li className="">Profitability and cost analytics</li>
<li className="">IFRS and local GAAP reporting</li>
</ul>
<img alt="Finance dashboards" className="w-full object-cover border-slate-200 border rounded-lg mt-4" loading="lazy" src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&amp;q=80"/>
</article></div>
<div className="mt-6 rounded-xl border border-slate-200 bg-white px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<p className="text-sm text-slate-700/80">Need a tailored blueprint? We assemble composable modules to fit your constraints.</p>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#1E3A8A] bg-white border border-[#4B5EAA] hover:bg-slate-50" href="contact.html"><svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>Request a blueprint</a>
</div>
</div>
</section><title>Industries — Asmi Technology Consulting BV</title>


</section><section aria-labelledby="how-title" className="md:px-8 md:pt-12 max-w-7xl mr-auto ml-auto pt-8 pr-5 pl-5">
<div className="rounded-2xl bg-white/60 backdrop-blur-[10px] border border-slate-200 p-6 md:p-8 transition duration-500 ease-in" data-animate="">
<div className="flex items-center justify-between">
<h2 className="text-xl md:text-2xl tracking-tight font-light text-slate-900" id="how-title">How it works</h2>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
<article className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-[10px] p-5 hover:shadow-md transition">
<svg className="lucide lucide-search h-12 w-12 text-[#1E3A8A]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<h3 className="mt-3 text-lg tracking-tight font-light">Assess</h3>
<p className="mt-2 text-slate-700/80">Diagnostic assessments, stakeholder interviews, and landscape analysis to baseline SAP maturity and align to outcomes.</p>
<img alt="Assessment workshop" className="mt-4 w-full rounded-xl border border-slate-200 bg-white/70 backdrop-blur-[10px] p-2" loading="lazy" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&amp;q=60&amp;auto=format&amp;fit=crop"/>
</article>
<article className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-[10px] p-5 hover:shadow-md transition">
<svg className="lucide lucide-cog h-12 w-12 text-[#1E3A8A]" data-lucide="cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.27 7 3.34"></path><path d="m11 13.73-4 6.93"></path><path d="M12 22v-2"></path><path d="M12 2v2"></path><path d="M14 12h8"></path><path d="m17 20.66-1-1.73"></path><path d="m17 3.34-1 1.73"></path><path d="M2 12h2"></path><path d="m20.66 17-1.73-1"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m3.34 7 1.73 1"></path><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="12" r="8"></circle></svg>
<h3 className="mt-3 text-lg tracking-tight font-light">Implement</h3>
<p className="mt-2 text-slate-700/80">S/4HANA delivery with iterative pilots and governed roll‑outs to compress time‑to‑value and reduce change risk.</p>
<img alt="Implementation sprint" className="mt-4 w-full rounded-xl border border-slate-200 bg-white/70 backdrop-blur-[10px] p-2" loading="lazy" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&amp;q=60&amp;auto=format&amp;fit=crop"/>
</article>
<article className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-[10px] p-5 hover:shadow-md transition">
<svg className="lucide lucide-line-chart h-12 w-12 text-[#1E3A8A]" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<h3 className="mt-3 text-lg tracking-tight font-light">Optimize</h3>
<p className="mt-2 text-slate-700/80">Performance tuning, analytics, and continuous advisory to sustain KPIs and evolve your SAP stack.</p>
<img alt="Optimization dashboard" className="mt-4 w-full rounded-xl border border-slate-200 bg-white/70 backdrop-blur-[10px] p-2" loading="lazy" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&amp;q=60&amp;auto=format&amp;fit=crop"/>
</article>
</div>
</div>
</section><section aria-labelledby="testimonials-title" className="max-w-7xl mx-auto px-5 md:px-8 pt-8 md:pt-12">
<div className="rounded-2xl bg-white/60 backdrop-blur-[10px] border border-slate-200 p-6 md:p-8 transition duration-500 ease-in" data-animate="">
<div className="flex items-center justify-between">
<h2 className="text-xl md:text-2xl tracking-tight font-light text-slate-900" id="testimonials-title">What clients say</h2>
</div>
<div aria-label="Scrolling testimonials" className="mt-5 overflow-hidden" id="testimonialTrack">
<div className="flex gap-4 w-max will-change-transform" id="testimonialInner">
<article className="min-w-[320px] md:min-w-[420px] rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-[10px] p-5">
<div className="flex items-center gap-2 text-slate-700/80 text-sm">
<svg className="lucide lucide-building-2 h-5 w-5 text-[#1E3A8A]" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg><span className="">Manufacturing</span>
</div>
<p className="mt-3 text-slate-700/90">“Asmi led our S/4HANA cutover with zero downtime. We saw a 25% cost reduction across logistics within six months.”</p>
<p className="mt-2 text-sm text-slate-500">COO, EU manufacturer</p>
</article>
<article className="min-w-[320px] md:min-w-[420px] rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-[10px] p-5">
<div className="flex items-center gap-2 text-slate-700/80 text-sm">
<svg className="lucide lucide-shopping-cart h-5 w-5 text-[#1E3A8A]" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg><span>Retail</span>
</div>
<p className="mt-3 text-slate-700/90">“Inventory accuracy increased to 98% and our supply chain cycle time improved by 17% after Asmi’s optimization program.”</p>
<p className="mt-2 text-sm text-slate-500">Director of IT, retail group</p>
</article>
<article className="min-w-[320px] md:min-w-[420px] rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-[10px] p-5">
<div className="flex items-center gap-2 text-slate-700/80 text-sm">
<svg className="lucide lucide-banknote h-5 w-5 text-[#1E3A8A]" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg><span>Finance</span>
</div>
<p className="mt-3 text-slate-700/90">“Closing time dropped from 10 to 4 days with automated reconciliations and embedded analytics.”</p>
<p className="mt-2 text-sm text-slate-500">CFO, financial services</p>
</article>
<article className="min-w-[320px] md:min-w-[420px] rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-[10px] p-5">
<div className="flex items-center gap-2 text-slate-700/80 text-sm">
<svg className="lucide lucide-stethoscope h-5 w-5 text-[#1E3A8A]" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg><span>Healthcare</span>
</div>
<p className="mt-3 text-slate-700/90">“Compliance risk reduced by 32% with role redesigns, audit trails, and secure integrations.”</p>
<p className="mt-2 text-sm text-slate-500">CIO, healthcare network</p>
</article>
</div>
</div>
</div>
</section>





<section aria-labelledby="mission-title" className="md:px-8 md:pt-12 max-w-7xl mr-auto ml-auto pt-8 pr-5 pl-5">
<div className="backdrop-blur-[10px] md:p-8 transition duration-500 ease-in bg-white/60 border-slate-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6" data-animate="">
<h2 className="md:text-2xl text-xl font-light text-slate-900 tracking-tight" id="mission-title">Our mission</h2>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-2">
<p className="text-slate-700/80">We exist to make SAP simple to adopt and powerful to use. As a boutique partner, we combine senior expertise with pragmatic delivery to orchestrate seamless, secure integrations that unlock growth. Every engagement aligns technology to strategy—so your teams can move faster, make better decisions, and deliver measurable value.</p>
</div>
<img alt="Team collaboration image" className="w-full rounded-xl border border-slate-200 bg-white/70 backdrop-blur-[10px] p-2" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
</div>
</section>







<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>Services — Asmi Technology Consulting BV</title>
<meta content="SAP services: Advisory &amp; Strategy, Implementation &amp; Migration, Optimization &amp; Support. Transformation roadmaps, S/4HANA, performance tuning." name="description"/>
<meta content="SAP advisory, SAP strategy, S/4HANA implementation, SAP migration, SAP optimization, Netherlands" name="keywords"/>
<meta content="Asmi Technology Consulting BV" name="author"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet"/>















<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>Resources — Asmi Technology Consulting BV</title>
<meta content="Guides, articles, and templates to help you plan and deliver SAP programs with confidence." name="description"/>
<meta content="SAP resources, SAP guides, SAP templates, SAP webinars" name="keywords"/>
<meta content="Asmi Technology Consulting BV" name="author"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet"/>
<section aria-labelledby="library-title" className="md:px-8 md:pt-12 max-w-7xl mr-auto ml-auto pt-8 pr-5 pl-5">
<div className="rounded-2xl bg-white/60 backdrop-blur-[10px] border border-slate-200 p-6 md:p-8 transition duration-500 ease-in" data-animate="">
<div className="flex items-center justify-between">
<h2 className="text-xl md:text-2xl tracking-tight font-light text-slate-900" id="library-title">Latest from the library</h2>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#1E3A8A] bg-white border border-[#4B5EAA] hover:bg-slate-50" href="contact.html">Suggest a topic<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg></a>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="rounded-xl border border-slate-200 bg-white overflow-hidden">
<img alt="Performance tuning guide" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&amp;q=60&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-xs text-slate-500 uppercase tracking-wide">Guide</div>
<h3 className="mt-1 text-base font-light">S/4HANA Performance Tuning Checklist</h3>
<p className="mt-2 text-sm text-slate-700/80">A pragmatic list to diagnose and improve throughput, batch, and queries.</p>
<a className="mt-3 inline-flex items-center gap-2 text-[#1E3A8A] text-sm hover:text-[#4B5EAA]" href="#">Read now<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</article>
<article className="rounded-xl border border-slate-200 bg-white overflow-hidden">
<img alt="Migration whitepaper" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&amp;q=60&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-xs text-slate-500 uppercase tracking-wide">Whitepaper</div>
<h3 className="mt-1 text-base font-light">De‑risking Brownfield Migrations</h3>
<p className="mt-2 text-sm text-slate-700/80">Cutover patterns, rollback plans, and governance guardrails that work.</p>
<a className="mt-3 inline-flex items-center gap-2 text-[#1E3A8A] text-sm hover:text-[#4B5EAA]" href="#">Download PDF<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg></a>
</div>
</article>
<article className="rounded-xl border border-slate-200 bg-white overflow-hidden">
<img alt="Analytics webinar" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&amp;q=60&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-xs text-slate-500 uppercase tracking-wide">Webinar</div>
<h3 className="mt-1 text-base font-light">Building Decision‑Ready Analytics</h3>
<p className="mt-2 text-sm text-slate-700/80">Designing semantic layers and KPIs that business trusts.</p>
<a className="mt-3 inline-flex items-center gap-2 text-[#1E3A8A] text-sm hover:text-[#4B5EAA]" href="#">Watch on‑demand<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg></a>
</div>
</article>
</div>
</div>
</section>




<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>About Us — Asmi Technology Consulting BV</title>
<meta content="Learn about Asmi Technology Consulting BV: our story, leadership, mission, and certifications. Boutique SAP consultancy based in Utrecht, Netherlands." name="description"/><section aria-labelledby="faq-title" className="md:px-8 md:pt-12 max-w-7xl mr-auto ml-auto pt-8 pr-5 pl-5">
<div className="rounded-2xl bg-white/60 backdrop-blur-[10px] border border-slate-200 p-6 md:p-8 transition duration-500 ease-in" data-animate="">
<h2 className="text-xl md:text-2xl tracking-tight font-light text-slate-900" id="faq-title">FAQ</h2>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-2 space-y-3">
<details className="group rounded-xl border border-slate-200 bg-white p-4">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-slate-900 text-sm">How do you minimize risk during S/4HANA migrations?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-2 text-slate-700/80 text-sm">We start with a readiness assessment, pilot critical processes, and use phased cutovers with rollback plans. Governance gates, automated testing, and clear communication reduce both technical and change risk.</p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-4">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-slate-900 text-sm">Do you support hybrid and multi‑cloud SAP landscapes?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-2 text-slate-700/80 text-sm">Yes. We design resilient architectures across on‑prem, private, and public clouds with secure integrations, observability, and cost controls.</p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-4">
<summary className="cursor-pointer list-none flex items-center justify-between gap-4">
<span className="text-slate-900 text-sm">Can you help build a business case?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-2 text-slate-700/80 text-sm">We quantify benefits and costs—productivity gains, error reduction, working capital—and align KPIs with stakeholder priorities.</p>
</details>
</div>
<img alt="FAQ infographic" className="backdrop-blur-[10px] bg-white/70 w-full border-slate-200 border rounded-xl pt-2 pr-2 pb-2 pl-2" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</section>
<meta content="SAP consulting Utrecht, SAP partner Netherlands, SAP leadership, SAP certifications" name="keywords"/>
<meta content="Asmi Technology Consulting BV" name="author"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet"/>



<section aria-labelledby="newsletter-title" className="md:px-8 md:pt-16 max-w-7xl mr-auto ml-auto pt-8 pr-5 pb-16 pl-5">
<div className="rounded-2xl bg-white/70 backdrop-blur-[10px] border border-slate-200 p-6 md:p-8 transition duration-500 ease-in" data-animate="">
<div className="flex items-center justify-between gap-6 flex-col md:flex-row">
<div className="flex-1">
<h2 className="text-xl md:text-2xl tracking-tight font-light text-slate-900" id="newsletter-title">Get practical SAP tips in your inbox</h2>
<p className="mt-2 text-sm text-slate-700/80">Monthly updates, zero spam. Unsubscribe anytime.</p>
</div>
<form action="#" className="w-full md:w-[520px] flex gap-2" method="post" onsubmit="event.preventDefault()">
<label className="sr-only" htmlFor="email-news">Email</label>
<input className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#4B5EAA]/30" id="email-news" placeholder="you@company.com" required="" type="email"/>
<button className="inline-flex gap-2 hover:brightness-105 text-sm font-medium text-slate-50 bg-blue-950 border-slate-200 border rounded-xl px-4 py-3 gap-x-2 gap-y-2 items-center" type="submit"><svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>Subscribe</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="">
<div className="inline-flex items-center gap-2"><span className="inline-flex items-center justify-center text-sm font-medium text-white tracking-tight bg-[#1E3A8A] w-8 h-8 rounded-md">logo</span><span className="text-sm font-light">Asmi Technology Consulting BV</span></div>
<p className="mt-3 text-sm text-slate-700/70">SAP Partner aligned • GDPR compliant</p>
</div>
<div className="">
<h3 className="text-sm font-light">Quick links</h3>
<ul className="mt-2 text-sm text-slate-700/80 space-y-1">
<li className=""><a className="hover:text-[#1E3A8A]" href="services.html">Services</a></li>
<li className=""><a className="hover:text-[#1E3A8A]" href="industries.html">Industries</a></li>
<li><a className="hover:text-[#1E3A8A]" href="careers.html">Careers</a></li>
<li className=""><a className="hover:text-[#1E3A8A]" href="contact.html">Contact</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-light">Contact</h3>
<a className="mt-2 block text-sm text-[#1E3A8A] hover:text-[#4B5EAA]" href="mailto:hello@asmi.consulting">hello@asmi.consulting</a>
<a className="mt-1 block text-sm text-[#1E3A8A] hover:text-[#4B5EAA]" href="tel:+31301234567">+31 (0)30 123 4567</a>
<a className="mt-2 inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#4B5EAA]" href="https://www.linkedin.com" rel="noopener" target="_blank"><svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn</a>
</div>
</div>
<div className="text-xs text-slate-500 mt-8">© 2025 ASMI Technology Consulting B.V.</div>
</div>
</footer>

<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>Careers — Asmi Technology Consulting BV</title>
<meta content="Join our boutique team of SAP experts in Utrecht. Explore open roles and our culture of craft, clarity, and impact." name="description"/>
<meta content="SAP jobs Utrecht, SAP careers Netherlands, S/4HANA jobs" name="keywords"/>
<meta content="Asmi Technology Consulting BV" name="author"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet"/>




    </>
  );
}

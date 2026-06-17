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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    (function() {
      const root = document.getElementById('aura-emfjyfzcb');
      if (!root) return;
      const slides = root.querySelectorAll('[data-slide]');
      const dots = root.querySelectorAll('[data-dot]');
      const prev = root.querySelector('[data-prev]');
      const next = root.querySelector('[data-next]');
      let index = 0;

      function show(i) {
        index = (i + slides.length) % slides.length;
        slides.forEach((el, idx) => {
          el.style.opacity = idx === index ? '1' : '0';
        });
        dots.forEach((d, idx) => {
          if (idx === index) {
            d.classList.add('bg-teal-400');
            d.classList.remove('bg-neutral-500', 'w-1.5');
            d.classList.add('w-7');
          } else {
            d.classList.remove('bg-teal-400', 'w-7');
            d.classList.add('bg-neutral-500', 'w-1.5');
          }
        });
      }

      prev && prev.addEventListener('click', () => show(index - 1));
      next && next.addEventListener('click', () => show(index + 1));
      dots.forEach((d, idx) => d.addEventListener('click', () => show(idx)));
      show(0);
    })();
  


      // Current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Simple form handler (demo only)
      const form = document.getElementById('estimate-form');
      const status = document.getElementById('form-status');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          status.classList.remove('sr-only');
          status.textContent = 'Thanks! Your request has been received. We’ll contact you shortly.';
          form.reset();
          setTimeout(() => status.classList.add('sr-only'), 5000);
        });
      }
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
</div>

<div className="pointer-events-none absolute inset-0">
<img alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" src="https://irp.cdn-website.com/0a33985f/dms3rep/multi/PHOTO-2023-11-30-22-22-07+4.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/80 to-neutral-900"></div>
<div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"></div>
<div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"></div>
</div>

<div className="relative z-10 flex min-h-screen flex-col" style={{animation: 'fadeIn 0.7s ease-out both', animationDelay: '0.05s'}}>

<header className="px-6 md:px-10 pt-6">
<nav className="mx-auto max-w-7xl rounded-2xl border backdrop-blur-xl shadow-md border-gray-800 bg-white/5">
<div className="flex items-center justify-between px-5 py-4 md:px-6">

<a className="group inline-flex items-center gap-3" href="#">
<span className="grid h-9 w-9 place-items-center rounded-lg border shadow-md ring-1 transition group-hover:ring-teal-500/30 border-gray-800 bg-neutral-900/60 ring-black/0">
<span className="text-[13px] font-semibold tracking-tight font-geist text-teal-400" style={{fontFamily: '\'Open Sans\', ui-sans-serif'}}>E&amp;E</span>
</span>
<div className="flex flex-col leading-none">
<span className="text-[13px] font-geist text-neutral-300" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>E &amp; E Home Remodeling</span>
<span className="text-[11px] text-neutral-500 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>California</span>
</div>
</a>

<div className="hidden items-center gap-6 md:flex">
<a className="text-sm transition-colors font-geist text-neutral-300 hover:text-teal-400" href="#services" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Services</a>
<a className="text-sm transition-colors font-geist text-neutral-300 hover:text-teal-400" href="#projects" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Projects</a>
<a className="text-sm transition-colors font-geist text-neutral-300 hover:text-teal-400" href="#offices" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Offices</a>
<a className="text-sm transition-colors font-geist text-neutral-300 hover:text-teal-400" href="#contact" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Contact</a>
</div>

<div className="flex items-center gap-2">
<a className="hidden md:inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm shadow-md outline-none transition hover:shadow-md hover:shadow-teal-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40 font-geist border-gray-800 bg-neutral-900/60 text-neutral-200 hover:border-teal-600/50 hover:text-teal-400" href="tel:+18182001334" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>
<svg aria-hidden="true" className="lucide lucide-phone h-4 w-4 text-teal-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                Call
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border bg-teal-500/10 px-3.5 py-2 text-sm shadow-md outline-none transition hover:bg-teal-500/15 hover:border-teal-500/60 focus-visible:ring-2 focus-visible:ring-teal-500/40 font-geist border-teal-600/40 text-teal-300 hover:text-teal-200" href="#quote" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>
<svg aria-hidden="true" className="lucide lucide-sparkles h-4 w-4 text-teal-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Request a Quote
              </a>
</div>
</div>
</nav>
</header>

<main className="flex-1">
<section className="mx-auto max-w-7xl px-6 md:px-10 pt-10 md:pt-16">
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">

<div className="flex flex-col justify-center">
<h1 className="tracking-tight text-5xl md:text-6xl font-playfair font-medium text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500', animation: 'fadeIn 0.8s ease-out both', animationDelay: '0.1s'}}>
                E &amp; E Home Remodeling
              </h1>
<p className="mt-4 text-xl md:text-2xl font-playfair font-medium text-neutral-300" style={{fontFamily: '\'Varela Round\', ui-sans-serif', animation: 'fadeIn 0.8s ease-out both', animationDelay: '0.18s'}}>
                Renovations, additions, kitchens, baths, and exteriors—crafted with precision across the San Fernando Valley, Ventura, and Santa Barbara.
              </p>

<div className="mt-8 flex flex-col gap-3 sm:flex-row" style={{animation: 'fadeIn 0.8s ease-out both', animationDelay: '0.26s'}}>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border bg-teal-500/15 px-5 py-3 text-base shadow-md outline-none transition hover:bg-teal-500/20 hover:border-teal-500 focus-visible:ring-2 focus-visible:ring-teal-500/40 border-teal-600/50 text-teal-200 hover:text-white" href="#quote">
<svg aria-hidden="true" className="lucide lucide-clipboard-check h-5 w-5 text-teal-300" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
<span className="font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Get a Free Estimate</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-base shadow-md outline-none transition hover:shadow-teal-500/5 focus-visible:ring-2 focus-visible:ring-teal-500/40 border-gray-800 bg-neutral-900/60 text-neutral-200 hover:border-teal-600/50 hover:text-teal-300" href="tel:+18182001334">
<svg aria-hidden="true" className="lucide lucide-phone-call h-5 w-5 text-teal-300" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Call Our Team</span>
</a>
</div>

<div className="mt-6 flex flex-wrap items-center gap-3" style={{animation: 'fadeIn 0.8s ease-out both', animationDelay: '0.34s'}}>
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] shadow-md font-geist border-gray-800 bg-white/5 text-neutral-300">
<svg className="lucide lucide-shield-check h-4 w-4 text-teal-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  Licensed &amp; Insured
                </span>
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] shadow-md font-geist border-gray-800 bg-white/5 text-neutral-300">
<svg className="lucide lucide-clock-8 h-4 w-4 text-teal-400" data-lucide="clock-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l-4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  On-Time, On-Budget
                </span>
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] shadow-md font-geist border-gray-800 bg-white/5 text-neutral-300">
<svg className="lucide lucide-stars h-4 w-4 text-teal-400" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Quality Craftsmanship
                </span>
</div>
</div>

<aside className="md:p-6 bg-white/5 border-gray-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-md backdrop-blur-xl" style={{animation: 'fadeIn 0.8s ease-out both', animationDelay: '0.2s'}}>
<div className="flex items-start justify-between">
<h2 className="text-2xl font-medium text-white tracking-tight font-playfair" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Our Projects</h2>
<span className="inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[12px] shadow-md font-geist border-gray-800 bg-neutral-900/60 text-neutral-300">
<svg className="lucide lucide-map h-3.5 w-3.5 text-teal-300" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
      California
    </span>
</div>
<div className="mt-4">
<div className="relative overflow-hidden rounded-xl border shadow-md border-gray-800 bg-neutral-900/60">
<div className="relative aspect-[16/10] md:aspect-[21/9]">
<img alt="Remodeling project photo 1" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-100" data-slide="0" src="https://irp.cdn-website.com/0a33985f/dms3rep/multi/DSC00135.JPEG" style={{opacity: '1'}}/>
<img alt="Remodeling project photo 2" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-0" data-slide="1" src="https://irp.cdn-website.com/0a33985f/dms3rep/multi/PHOTO-2023-11-30-22-22-07+4.jpg" style={{opacity: '0'}}/>
<img alt="Remodeling project photo 3" className="absolute inset-0 transition-opacity duration-500 opacity-0 w-full h-full object-cover" data-slide="2" id="aura-emfjyq34k" onload="(function(img){try{var outer=(function(){var r=img.closest('.relative');return r?r.parentElement:img.parentElement;})();if(!outer)return;var slides=outer.querySelectorAll('[data-slide]');if(!slides.length)return;var dots=outer.querySelectorAll('[data-dot]');var index=0;for(var i=0;i&lt;slides.length;i++){var s=slides[i];var op=(s.style&amp;&amp;s.style.opacity)||'';if(op==='1'||s.classList.contains('opacity-100')){index=i;break;}}function show(i){index=(i+slides.length)%slides.length;for(var j=0;j&lt;slides.length;j++){slides[j].style.opacity=j===index?'1':'0';}if(dots&amp;&amp;dots.length){for(var k=0;k&lt;dots.length;k++){var d=dots[k];if(k===index){d.classList.add('bg-teal-400');d.classList.remove('bg-neutral-500','w-1.5');d.classList.add('w-7');}else{d.classList.remove('bg-teal-400','w-7');d.classList.add('bg-neutral-500','w-1.5');}}}}if(!img._auraAutoplay){img._auraAutoplay=true;setInterval(function(){show(index+1);},5000);} }catch(e){}})(this)" src="https://irp.cdn-website.com/0a33985f/dms3rep/multi/PHOTO-2023-11-30-22-22-07+8.jpg" style={{opacity: '0'}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"></div>
</div>
<button aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md border px-3 py-2 text-neutral-200 transition hover:text-teal-200 hover:border-teal-700/50 border-gray-800 bg-neutral-900/60" data-prev="" type="button">
<svg className="lucide lucide-chevron-left h-5 w-5 text-teal-300" data-lucide="chevron-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md border px-3 py-2 text-neutral-200 transition hover:text-teal-200 hover:border-teal-700/50 border-gray-800 bg-neutral-900/60" data-next="" type="button">
<svg className="lucide lucide-chevron-right h-5 w-5 text-teal-300" data-lucide="chevron-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
<button className="h-1.5 w-7 rounded-full bg-teal-400" data-dot="" type="button"></button>
<button className="h-1.5 w-1.5 rounded-full bg-neutral-500" data-dot="" type="button"></button>
<button className="h-1.5 w-1.5 rounded-full bg-neutral-500" data-dot="" type="button"></button>
</div>
</div>
<p className="mt-3 text-[12px] text-neutral-500 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Office details have been relocated below; explore our gallery above.</p>
</div>

</aside>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-16" id="services">
<div className="flex items-end justify-between">
<h2 className="tracking-tight text-3xl md:text-4xl font-playfair font-medium text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Services</h2>
<p className="hidden md:block text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Full-service remodeling, from concept to completion.</p>
</div>
<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md hover:border-teal-700/50 transition">
<div className="flex items-center gap-3">
<span className="grid h-10 w-10 place-items-center rounded-lg border border-gray-800 bg-neutral-900/60">
<svg className="lucide lucide-utensils text-teal-300" data-lucide="utensils" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<h3 className="text-lg tracking-tight font-geist text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Kitchens</h3>
</div>
<p className="mt-3 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Custom cabinetry, countertops, lighting, and layout optimization.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Design-Build</span>
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Permits</span>
</div>
</div>
<div className="group rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md hover:border-teal-700/50 transition">
<div className="flex items-center gap-3">
<span className="grid h-10 w-10 place-items-center rounded-lg border border-gray-800 bg-neutral-900/60">
<svg className="lucide lucide-shower-head text-teal-300" data-lucide="shower-head" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<h3 className="text-lg tracking-tight font-geist text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Bathrooms</h3>
</div>
<p className="mt-3 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Tilework, waterproofing, vanities, and spa-grade finishes.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Curbless</span>
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Heated Floors</span>
</div>
</div>
<div className="group rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md hover:border-teal-700/50 transition">
<div className="flex items-center gap-3">
<span className="grid h-10 w-10 place-items-center rounded-lg border border-gray-800 bg-neutral-900/60">
<svg className="lucide lucide-expand text-teal-300" data-lucide="expand" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<h3 className="text-lg tracking-tight font-geist text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Room Additions</h3>
</div>
<p className="mt-3 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Seamless additions that match your home’s style and structure.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Structural</span>
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Engineering</span>
</div>
</div>
<div className="group rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md hover:border-teal-700/50 transition">
<div className="flex items-center gap-3">
<span className="grid h-10 w-10 place-items-center rounded-lg border border-gray-800 bg-neutral-900/60">
<svg className="lucide lucide-home text-teal-300" data-lucide="home" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<h3 className="text-lg tracking-tight font-geist text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>ADUs &amp; Garage Conversions</h3>
</div>
<p className="mt-3 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Accessory dwelling units for rental income or family living.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Plans</span>
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Code</span>
</div>
</div>
<div className="group rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md hover:border-teal-700/50 transition">
<div className="flex items-center gap-3">
<span className="grid h-10 w-10 place-items-center rounded-lg border border-gray-800 bg-neutral-900/60">
<svg className="lucide lucide-panels-top-left text-teal-300" data-lucide="panels-top-left" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<h3 className="text-lg tracking-tight font-geist text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Exterior Renovations</h3>
</div>
<p className="mt-3 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Siding, roofing, windows, doors, and curb-appeal upgrades.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Energy</span>
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>HVAC</span>
</div>
</div>
<div className="group rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md hover:border-teal-700/50 transition">
<div className="flex items-center gap-3">
<span className="grid h-10 w-10 place-items-center rounded-lg border border-gray-800 bg-neutral-900/60">
<svg className="lucide lucide-paintbrush text-teal-300" data-lucide="paintbrush" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<h3 className="text-lg tracking-tight font-geist text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Interior Refresh</h3>
</div>
<p className="mt-3 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Flooring, paint, lighting, and finish carpentry.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>LVP</span>
<span className="rounded-md border border-gray-800 bg-neutral-900/60 px-2 py-1 text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Tile</span>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-16" id="projects">
<div className="flex items-end justify-between">
<h2 className="tracking-tight text-3xl md:text-4xl font-playfair font-medium text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Recent Projects</h2>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 font-geist" href="#quote" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>
              Get your project started
              <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

<article className="group relative overflow-hidden rounded-xl border border-gray-800 bg-white/5 shadow-md">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Contemporary kitchen with large island and pendant lighting" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://lirp.cdn-website.com/0a33985f/dms3rep/multi/opt/DSC04115-1920w.jpg?w=800&amp;q=80" style={{}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<div className="flex items-center justify-between">
<span className="rounded-md border border-teal-700/40 bg-teal-500/15 px-2 py-1 text-[12px] text-teal-200 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Kitchen</span>
<span className="text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Sherman Oaks</span>
</div>
<h3 className="mt-2 text-xl tracking-tight text-white font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Open-Concept Kitchen</h3>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-gray-800 bg-white/5 shadow-md">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Serene bathroom with freestanding tub and natural light" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://lirp.cdn-website.com/0a33985f/dms3rep/multi/opt/DSC03966-ae6881a0-1920w.jpg?w=800&amp;q=80" style={{}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<div className="flex items-center justify-between">
<span className="rounded-md border border-teal-700/40 bg-teal-500/15 px-2 py-1 text-[12px] text-teal-200 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Bathroom</span>
<span className="text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Ventura</span>
</div>
<h3 className="mt-2 text-xl tracking-tight text-white font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Spa-Style Ensuite</h3>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-gray-800 bg-white/5 shadow-md sm:col-span-2">
<div className="relative aspect-[21/9] overflow-hidden">
<img alt="Modern home exterior with warm lighting and landscaped entry" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://lirp.cdn-website.com/0a33985f/dms3rep/multi/opt/DSC00139-1920w.JPEG?w=800&amp;q=80" style={{}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center justify-between">
<span className="rounded-md border border-teal-700/40 bg-teal-500/15 px-2 py-1 text-[12px] text-teal-200 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Exterior</span>
<span className="text-[12px] text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Santa Barbara</span>
</div>
<h3 className="mt-2 text-2xl tracking-tight text-white font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Curb Appeal Renovation</h3>
<p className="mt-1 text-sm text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>New siding, windows, and lighting for a refined, modern look.</p>
</div>
</div>
</article>
</div>
</section>

<section className="md:px-10 md:pt-16 max-w-7xl mr-auto ml-auto pt-12 pr-6 pl-6">
<div className="mt-6 md:mt-8 relative overflow-hidden rounded-2xl border border-teal-700/40">
<div className="absolute inset-0">
<img alt="" className="h-full w-full object-cover opacity-30" src="https://irp.cdn-website.com/0a33985f/dms3rep/multi/download+%2852%29.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/50 to-neutral-900/80"></div>
</div>
<div className="relative md:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3">
<span className="grid h-10 w-10 place-items-center rounded-lg border border-teal-700/40 bg-neutral-900/60">
<svg className="lucide lucide-box text-teal-300" data-lucide="box" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<span className="rounded-md border border-teal-700/40 bg-teal-500/15 px-2 py-1 text-[12px] text-teal-200 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Included</span>
</div>
<h3 className="mt-3 text-2xl md:text-3xl tracking-tight text-white font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>See Your New Home Before We Build It</h3>
<p className="mt-1 text-sm text-teal-200 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>FREE 3D Design with Every Project!</p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-xl border bg-teal-500/15 px-5 py-2.5 text-sm shadow-md outline-none transition hover:bg-teal-500/20 hover:border-teal-500 focus-visible:ring-2 focus-visible:ring-teal-500/40 border-teal-600/50 text-teal-200 hover:text-white" href="#quote">
          Start My Project
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-16" id="process">
<div className="flex items-end justify-between">
<h2 className="tracking-tight text-3xl md:text-4xl font-playfair font-medium text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>How We Work</h2>
<p className="hidden md:block text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Transparent steps from first call to final walk-through.</p>
</div>
<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

<div className="rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg border border-gray-800 bg-neutral-900/60 text-teal-300 font-geist">1</span>
<h3 className="text-base tracking-tight font-geist text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Consultation</h3>
</div>
<p className="mt-2 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>We listen, measure, and outline options with an upfront estimate.</p>
</div>

<div className="rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg border border-gray-800 bg-neutral-900/60 text-teal-300 font-geist">2</span>
<h3 className="text-base tracking-tight font-geist text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Design &amp; Permits</h3>
</div>
<p className="mt-2 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Plans, selections, engineering, and city approvals—handled by us.</p>
</div>

<div className="rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg border border-gray-800 bg-neutral-900/60 text-teal-300 font-geist">3</span>
<h3 className="text-base tracking-tight font-geist text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Build &amp; Manage</h3>
</div>
<p className="mt-2 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Dedicated PM, schedule updates, inspections, and quality checks.</p>
</div>

<div className="rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md">
<div className="flex items-center gap-3">
<span className="grid h-9 w-9 place-items-center rounded-lg border border-gray-800 bg-neutral-900/60 text-teal-300 font-geist">4</span>
<h3 className="text-base tracking-tight font-geist text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Deliver &amp; Support</h3>
</div>
<p className="mt-2 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Final walkthrough, punch list, warranty, and post-project care.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-16" id="testimonials">
<div className="flex items-end justify-between">
<h2 className="tracking-tight text-3xl md:text-4xl font-playfair font-medium text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Client Reviews</h2>
<p className="hidden md:block text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Rated for communication, craftsmanship, and reliability.</p>
</div>
<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
<figure className="rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md">
<div className="flex items-center gap-2 text-teal-300">
<svg className="lucide lucide-star" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"></polygon></svg>
<span className="text-sm font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>5.0</span>
</div>
<blockquote className="mt-3 text-sm text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>E &amp; E remodeled our kitchen and it’s stunning. They finished on time and the crew was respectful of our home.</blockquote>
<figcaption className="mt-3 text-[13px] text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>— Marisa P., Sherman Oaks</figcaption>
</figure>
<figure className="rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md">
<div className="flex items-center gap-2 text-teal-300">
<svg className="lucide lucide-star" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"></polygon></svg>
<span className="text-sm font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>5.0</span>
</div>
<blockquote className="mt-3 text-sm text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Our ADU project was smooth from permits to final inspection. Great communication and top-notch workmanship.</blockquote>
<figcaption className="mt-3 text-[13px] text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>— Daniel R., Ventura</figcaption>
</figure>
<figure className="rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md">
<div className="flex items-center gap-2 text-teal-300">
<svg className="lucide lucide-star" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"></polygon></svg>
<span className="text-sm font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>4.9</span>
</div>
<blockquote className="mt-3 text-sm text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Bathroom remodel exceeded expectations. The tilework is flawless and they kept everything tidy.</blockquote>
<figcaption className="mt-3 text-[13px] text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>— Aisha L., Santa Barbara</figcaption>
</figure>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-16" id="quote">
<div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
<div className="lg:col-span-2">
<h2 className="tracking-tight text-3xl md:text-4xl font-playfair font-medium text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Request a Free Estimate</h2>
<p className="mt-2 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Tell us about your project and preferred timeline. A project manager will follow up within 1 business day.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span> Serving San Fernando Valley, Ventura, and Santa Barbara</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span> Licensed, insured, and permit-ready</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span> Clear, itemized proposals</li>
</ul>
</div>
<div className="lg:col-span-3">
<form className="rounded-2xl border border-gray-800 bg-white/5 p-5 md:p-6 shadow-md" id="estimate-form">
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
<div>
<label className="block text-sm text-neutral-300 font-geist" htmlFor="name" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Full name</label>
<input className="mt-1 w-full rounded-lg border border-gray-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-500/30" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-neutral-300 font-geist" htmlFor="phone" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Phone</label>
<input className="mt-1 w-full rounded-lg border border-gray-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-500/30" id="phone" name="phone" placeholder="(818) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="block text-sm text-neutral-300 font-geist" htmlFor="email" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Email</label>
<input className="mt-1 w-full rounded-lg border border-gray-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-500/30" id="email" name="email" placeholder="name@email.com" type="email"/>
</div>
<div>
<label className="block text-sm text-neutral-300 font-geist" htmlFor="city" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>City</label>
<input className="mt-1 w-full rounded-lg border border-gray-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-500/30" id="city" name="city" placeholder="Sherman Oaks" type="text"/>
</div>
<div className="md:col-span-1">
<label className="block text-sm text-neutral-300 font-geist" htmlFor="project" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Project type</label>
<select className="mt-1 w-full rounded-lg border border-gray-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-500/30" id="project" name="project">
<option>Kitchen</option>
<option>Bathroom</option>
<option>Room Addition</option>
<option>ADU / Garage Conversion</option>
<option>Exterior</option>
<option>Interior Refresh</option>
<option>Other</option>
</select>
</div>
<div className="md:col-span-1">
<label className="block text-sm text-neutral-300 font-geist" htmlFor="timeline" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Timeline</label>
<select className="mt-1 w-full rounded-lg border border-gray-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-500/30" id="timeline" name="timeline">
<option>ASAP</option>
<option>1–2 months</option>
<option>3–6 months</option>
<option>6+ months</option>
</select>
</div>
<div className="md:col-span-2">
<label className="block text-sm text-neutral-300 font-geist" htmlFor="message" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Project details</label>
<textarea className="mt-1 w-full rounded-lg border border-gray-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-500/30" id="message" name="message" placeholder="Tell us about your space, style, and goals..." rows="4"></textarea>
</div>
<div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<p className="text-[12px] text-neutral-500 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>By submitting, you agree to be contacted about your project.</p>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border bg-teal-500/15 px-5 py-2.5 text-sm shadow-md outline-none transition hover:bg-teal-500/20 hover:border-teal-500 focus-visible:ring-2 focus-visible:ring-teal-500/40 border-teal-600/50 text-teal-200 hover:text-white" type="submit">
<svg className="lucide lucide-send h-4 w-4 text-teal-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                      Request Free Estimate
                    </button>
</div>
</div>
<p aria-live="polite" className="sr-only" id="form-status"></p>
</form>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-16">
<div className="flex items-end justify-between">
<h2 className="tracking-tight text-3xl md:text-4xl font-playfair font-medium text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>FAQ</h2>
<p className="hidden md:block text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Answers to common remodeling questions.</p>
</div>
<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
<details className="group rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md">
<summary className="flex cursor-pointer list-none items-center justify-between text-left text-base text-white font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>
                Do you provide permits and plans?
                <span className="ml-4 grid h-7 w-7 place-items-center rounded-md border border-gray-800 bg-neutral-900/60 text-neutral-300 transition group-open:rotate-45">+</span>
</summary>
<p className="mt-3 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Yes. We manage all drawings, engineering, and city coordination so your project stays compliant and on schedule.</p>
</details>
<details className="group rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md">
<summary className="flex cursor-pointer list-none items-center justify-between text-left text-base text-white font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>
                Are you licensed and insured?
                <span className="ml-4 grid h-7 w-7 place-items-center rounded-md border border-gray-800 bg-neutral-900/60 text-neutral-300 transition group-open:rotate-45">+</span>
</summary>
<p className="mt-3 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Absolutely. We carry active licensing and full insurance, and we’ll provide documentation upon request.</p>
</details>
<details className="group rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md">
<summary className="flex cursor-pointer list-none items-center justify-between text-left text-base text-white font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>
                What’s a typical project timeline?
                <span className="ml-4 grid h-7 w-7 place-items-center rounded-md border border-gray-800 bg-neutral-900/60 text-neutral-300 transition group-open:rotate-45">+</span>
</summary>
<p className="mt-3 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Smaller interior updates can be 2–6 weeks; kitchens/baths are often 6–10 weeks; additions/ADUs vary based on scope and city approvals.</p>
</details>
<details className="group rounded-xl border border-gray-800 bg-white/5 p-5 shadow-md">
<summary className="flex cursor-pointer list-none items-center justify-between text-left text-base text-white font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>
                Do you offer financing?
                <span className="ml-4 grid h-7 w-7 place-items-center rounded-md border border-gray-800 bg-neutral-900/60 text-neutral-300 transition group-open:rotate-45">+</span>
</summary>
<p className="mt-3 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>We partner with financing providers for qualified projects. Ask during your consultation for current options.</p>
</details>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-16 pb-16" id="contact">
<div className="rounded-2xl border border-gray-800 bg-white/5 p-6 md:p-8">
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="md:col-span-2">
<h2 className="tracking-tight text-3xl md:text-4xl font-playfair font-medium text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Contact</h2>
<p className="mt-2 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Have a question? Reach our team directly.</p>
<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
<a className="inline-flex items-center gap-3 rounded-xl border border-gray-800 bg-neutral-900/60 px-4 py-3 text-sm text-neutral-200 transition hover:border-teal-600/50 hover:text-teal-200" href="tel:+18182001334">
<svg className="lucide lucide-phone text-teal-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
                    (818) 200-1334
                  </a>
<a className="inline-flex items-center gap-3 rounded-xl border border-gray-800 bg-neutral-900/60 px-4 py-3 text-sm text-neutral-200 transition hover:border-teal-600/50 hover:text-teal-200" href="mailto:hello@eeremodel.com">
<svg className="lucide lucide-mail text-teal-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z" opacity="0"></path><path d="m22 7-10 6L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                    hello@eeremodel.com
                  </a>
</div>
<div className="mt-6">
<h3 className="text-sm text-neutral-300 font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Service Areas</h3>
<p className="mt-1 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>San Fernando Valley • Ventura • Santa Barbara • Thousand Oaks • Calabasas • Burbank • Studio City</p>
</div>
</div>
<div className="md:col-span-1">
<div className="rounded-xl border border-gray-800 bg-neutral-900/60 p-4">
<h4 className="text-sm text-neutral-300 font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Office Hours</h4>
<ul className="mt-2 space-y-1 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>
<li>Mon–Sat: 8:00 AM – 6:00 PM</li>
<li>Sun: Closed</li>
</ul>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-lg border bg-teal-500/10 px-3.5 py-2 text-sm shadow-md outline-none transition hover:bg-teal-500/15 hover:border-teal-500/60 focus-visible:ring-2 focus-visible:ring-teal-500/40 font-geist border-teal-600/40 text-teal-300 hover:text-teal-200" href="#quote" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>
                      Start your estimate
                      <svg className="lucide lucide-arrow-right" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="mt-auto border-t border-gray-800/80 bg-neutral-950/60">
<div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
<div>
<a className="inline-flex items-center gap-2" href="#">
<span className="grid h-9 w-9 place-items-center rounded-lg border border-gray-800 bg-neutral-900/60 shadow-md">
<span className="text-[13px] font-semibold tracking-tight font-geist text-teal-400" style={{fontFamily: '\'Open Sans\', ui-sans-serif'}}>E&amp;E</span>
</span>
<span className="text-sm text-neutral-300 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>E &amp; E Home Remodeling</span>
</a>
<p className="mt-3 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>Renovations and additions across the San Fernando Valley, Ventura, and Santa Barbara.</p>
</div>
<div>
<h4 className="text-sm text-neutral-300 font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Company</h4>
<ul className="mt-2 space-y-2 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>
<li><a className="hover:text-teal-300" href="#services">Services</a></li>
<li><a className="hover:text-teal-300" href="#projects">Projects</a></li>
<li><a className="hover:text-teal-300" href="#process">Process</a></li>
<li><a className="hover:text-teal-300" href="#quote">Request a Quote</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-neutral-300 font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Contact</h4>
<ul className="mt-2 space-y-2 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>
<li><a className="hover:text-teal-300" href="tel:+18182001334">(818) 200-1334</a></li>
<li><a className="hover:text-teal-300" href="mailto:hello@eeremodel.com">hello@eeremodel.com</a></li>
<li>Mon–Sat: 8am–6pm</li>
</ul>
</div>
<div>
<h4 className="text-sm text-neutral-300 font-geist" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '500'}}>Legal</h4>
<ul className="mt-2 space-y-2 text-sm text-neutral-400 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>
<li>Licensed &amp; Insured • CSLB #0000000</li>
<li><a className="hover:text-teal-300" href="#">Privacy Policy</a></li>
<li><a className="hover:text-teal-300" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-800/80 pt-6 md:flex-row">
<p className="text-xs text-neutral-500 font-geist" style={{fontFamily: '\'Varela Round\', ui-sans-serif'}}>© <span id="year">2025</span> E &amp; E Home Remodeling. All rights reserved.</p>
<div className="flex items-center gap-3">
<a aria-label="Instagram" className="rounded-md border border-gray-800 bg-neutral-900/60 p-2 text-neutral-300 transition hover:border-teal-700/50 hover:text-teal-200" href="#">
<svg className="lucide lucide-instagram" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
<a aria-label="Facebook" className="rounded-md border border-gray-800 bg-neutral-900/60 p-2 text-neutral-300 transition hover:border-teal-700/50 hover:text-teal-200" href="#">
<svg className="lucide lucide-facebook" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
<a aria-label="Email" className="rounded-md border border-gray-800 bg-neutral-900/60 p-2 text-neutral-300 transition hover:border-teal-700/50 hover:text-teal-200" href="mailto:hello@eeremodel.com">
<svg className="lucide lucide-mail" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}

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



    // Carousel functionality
    let currentSlide = 0;
    const totalSlides = 2;
    const carousel = document.getElementById('testimonialCarousel');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      // Update indicators
      indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
          indicator.classList.remove('bg-white/30', 'hover:bg-white/50');
          indicator.classList.add('bg-white');
        } else {
          indicator.classList.remove('bg-white');
          indicator.classList.add('bg-white/30', 'hover:bg-white/50');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    function goToSlide(slideIndex) {
      currentSlide = slideIndex;
      updateCarousel();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => goToSlide(index));
    });

    // Auto-play functionality (optional)
    setInterval(nextSlide, 5000);
  


    // FAQ Toggle Functionality
    document.addEventListener('DOMContentLoaded', function() {
      const faqToggles = document.querySelectorAll('.faq-toggle');
      
      faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
          const faqIndex = this.getAttribute('data-faq');
          const content = this.nextElementSibling;
          const icon = this.querySelector('.faq-icon svg');
          const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
          
          // Close all other FAQs
          faqToggles.forEach((otherToggle, index) => {
            if (otherToggle !== this) {
              const otherContent = otherToggle.nextElementSibling;
              const otherIcon = otherToggle.querySelector('.faq-icon svg');
              otherContent.style.maxHeight = '0px';
              otherIcon.innerHTML = '<path d="M5 12h14"></path><path d="M12 5v14"></path>';
            }
          });
          
          // Toggle current FAQ
          if (isOpen) {
            content.style.maxHeight = '0px';
            icon.innerHTML = '<path d="M5 12h14"></path><path d="M12 5v14"></path>';
          } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.innerHTML = '<path d="M5 12h14"></path>';
          }
        });
      });
    });
  


      document.getElementById('year').textContent = new Date().getFullYear();
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[880px]"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
</div>
<header className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<nav className="mt-6 flex items-center justify-between">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center bg-emerald-500 rounded-full">
<svg className="lucide lucide-orbit h-4 w-4" data-lucide="orbit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg>
</span>
<span className="text-base font-medium tracking-tighter font-geist">FluxScale</span>
</a>
<div className="hidden gap-1 md:flex bg-white/5 border-white/10 border rounded-xl pt-1 pr-1 pb-1 pl-1 backdrop-blur items-center">
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#">About</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#">Blog</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#">Solutions</a>
<button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist">
              Process
              <svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<a className="inline-flex items-center gap-2 text-sm font-medium text-black font-geist bg-emerald-500 rounded-lg ml-2 pt-2 pr-3 pb-2 pl-3" href="#">
              
              Book a call
            </a>
</div>
<a className="md:hidden inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium backdrop-blur font-geist" href="#">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
            Menu
          </a>
</nav>

<section className="relative z-10 max-w-4xl sm:pt-20 md:pt-28 text-center mr-auto ml-auto pt-14 pb-12">

<div className="mb-6 flex items-center justify-center gap-4">
<div className="flex -space-x-3">
<img alt="Client 1" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2201bb49-ba9d-4655-9360-c0350107a9fd_320w.jpg" style={{}}/>
<img alt="Client 2" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1bfea42-f5c9-4b52-974e-36fe36212b17_320w.jpg" style={{}}/>
<img alt="Client 3" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<img alt="Client 4" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5bf79840-b7ed-4d8d-acd3-c5f5835a065e_320w.jpg" style={{}}/>
<img alt="Client 5" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/590efc90-e69f-4f7e-a7c1-e54d0a7fe400_320w.jpg" style={{}}/>
</div>
<div className="flex flex-col items-start">
<div className="flex items-center">
<svg className="lucide lucide-star h-4 w-4 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-1 text-xs font-medium text-white/70 font-geist">140+ happy partners</p>
</div>
</div>
<h1 className="max-w-5xl sm:text-5xl md:text-7xl text-4xl tracking-tighter font-geist mr-auto ml-auto" style={{}}>
            Ready to
            <span className="italic text-white tracking-tight font-instrument-serif" style={{fontFamily: '"Playfair Display", serif'}}>boost</span>
            your growth with performance ads?
          </h1>
<p className="max-w-2xl sm:text-lg text-base font-normal text-white/70 font-geist mt-6 mr-auto ml-auto">
            We engineer profitable acquisition systems for digital brands. If efficient, scalable growth is your goal, you’re in the right place.
          </p>
<div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center">
<a className="inline-flex items-center gap-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] text-base font-medium text-black font-geist bg-emerald-500 rounded-xl pt-3 pr-6 pb-3 pl-6" href="#">Get Started</a>
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#">
              
              Learn more
            </a>
</div>

</section>
</div>
</header>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-16 pl-4 mt-32">
<p className="mb-6 text-center text-sm font-medium text-white/50 font-geist">You’re in good hands</p>
<div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full bg-white/10"></span>
<span className="text-lg font-semibold text-white/80 tracking-tight font-geist">AURIC</span>
</div>
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-md bg-white/10"></span>
<span className="text-lg font-semibold tracking-tight text-white/80 font-geist">LOFTCO</span>
</div>
<div className="flex items-center gap-2">
<span className="h-5 w-5 bg-white/10 rounded-sm rotate-45"></span>
<span className="text-lg font-semibold tracking-tight text-white/80 font-geist">NIMBLE</span>
</div>
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full border border-white/20"></span>
<span className="text-lg font-semibold tracking-tight text-white/80 font-geist">ECHO</span>
</div>
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full bg-gradient-to-br from-white/20 to-transparent"></span>
<span className="text-lg font-semibold tracking-tight text-white/80 font-geist">POLAR</span>
</div>
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-sm bg-white/10"></span>
<span className="text-lg font-semibold tracking-tight text-white/80 font-geist">CIRCUIT</span>
</div>
</div>
</section>

<section className="relative overflow-hidden">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid items-center gap-10 md:grid-cols-2">
<div className="">
<h2 className="sm:text-4xl md:text-5xl text-3xl tracking-tighter font-geist" style={{}}>Creative that converts, data that guides.</h2>
<p className="mt-4 text-base text-white/70 font-geist">Our experiments compound over time. Transparent reporting, rapid iteration, and creative rigor — all focused on profitable outcomes.</p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/10 font-geist" href="#">
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                See case studies
              </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-black font-geist bg-emerald-500 rounded-lg pt-2 pr-4 pb-2 pl-4" href="#">
                
                Schedule intro
              </a>
</div>
</div>
<div className="relative">
<img alt="Mountain minimal" className="aspect-[4/3] w-full object-cover border-white/10 border rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2708f065-299d-4cc7-b08e-37d986f56c16_1600w.jpg" style={{}}/>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</div>
</section><section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/50 font-geist">What you get</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl font-normal tracking-tighter font-geist">Features built for efficient growth</h2>
<p className="mt-3 text-base text-white/70 font-geist">From unlimited creative requests to transparent pricing, our operating system helps you scale acquisition with confidence.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2">
<div className="relative">
<img alt="Neon next button 3D render" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9d2e8bbf-cec8-4dfd-a76d-6fc5e8c50d64_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
</div>
<div className="p-5 sm:p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
<span className="text-xs text-white/60 font-geist">Unlimited pipeline</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl font-medium tracking-tight font-geist">Launch experiments, not guesses</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 font-geist">Submit unlimited test ideas and creative requests. We prioritize by impact, ship fast, and report clearly so learnings stack every week.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#">
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
            See case studies
          </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-black font-geist bg-emerald-500 rounded-lg px-4 py-2" href="#">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
            Start a request
          </a>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="p-5 sm:p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-geist flex items-center gap-2">
            
            Requests &amp; revisions
          </h3>
<span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Iterate quickly with async requests and structured feedback. Every round ends with clear rationale and next steps.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="App UI preview" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e2b186b-730f-4956-8043-14955d1766bf_800w.jpg"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="p-5 sm:p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-geist flex items-center gap-2">
            
            Worry‑free pricing
          </h3>
<span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Simple plans, no surprises. Pause anytime. Scale up when you're ready.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Pricing illustration" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc543ce0-b776-4e3a-a6d5-933229659050_800w.jpg"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="p-5 sm:p-6">
<h3 className="text-lg font-medium tracking-tight font-geist flex items-center gap-2">
          
          Quick turnaround
          <span className="ml-2 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Most tasks ship in 48–72 hours without sacrificing quality.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Speed dashboard" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91cceaf5-3a72-47d0-9d15-ee799cfea874_800w.jpg"/>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight font-geist flex items-center gap-2">
          
          Go live in days
        </h3>
<p className="mt-2 text-sm text-white/70 font-geist">From first brief to live campaigns in a week, with tracking and QA handled.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Launch imagery" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70ea4bbd-c103-404b-bff1-cab817e4f4d6_800w.jpg"/>
</div>
</div>
</div>
<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight font-geist flex items-center gap-2">
          
          Go live in days
        </h3>
<p className="mt-2 text-sm text-white/70 font-geist">From first brief to live campaigns in a week, with tracking and QA handled.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Launch imagery" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a0573e8d-a170-4eda-aba7-4f4fc78c43b7_800w.jpg"/>
</div>
</div>
</div>
</div>
</section><section className="relative overflow-hidden">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">

<div className="max-w-4xl mx-auto text-center">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Client Success</span>
<h2 className="sm:text-4xl md:text-5xl text-3xl tracking-tighter font-geist mt-4">What our partners say about driving growth.</h2>
<p className="mt-4 text-base text-white/70 font-geist">Real results from real brands. See how we've helped companies scale their acquisition and maximize ROI.</p>

<div className="mt-6 flex items-center justify-center gap-8 text-white/50">
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full bg-white/10"></span>
<span className="text-sm font-medium tracking-tight font-geist">NEXUS</span>
</div>
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-sm bg-white/10"></span>
<span className="text-sm font-medium tracking-tight font-geist">APEX</span>
</div>
<div className="flex items-center gap-2">
<span className="h-5 w-5 rotate-45 rounded-sm bg-white/10"></span>
<span className="text-sm font-medium tracking-tight font-geist">SCALE</span>
</div>
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full border border-white/20"></span>
<span className="text-sm font-medium tracking-tight font-geist">ORBIT</span>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#">
        View all success stories
      </a>
</div>
</div>

<div className="mt-10 relative">

<div className="overflow-hidden">
<div className="flex transition-transform duration-500 ease-out" id="testimonialCarousel" style={{transform: 'translateX(0%)'}}>

<div className="w-full flex-shrink-0">
<div className="grid gap-6 md:grid-cols-3">

<div className="relative overflow-hidden sm:p-6 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Sarah Chen avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0f3907b-87b7-4671-99d8-ab70af2fa691_320w.jpg"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"FluxScale increased our ROAS by 340% in just 3 months. Their data-driven approach and creative testing methodology transformed our acquisition strategy."</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">Sarah Chen • CMO</p>
<p className="text-xs text-white/60 font-geist mt-1">TechFlow Solutions</p>
</div>
</div>

<div className="relative overflow-hidden sm:p-6 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Marcus Rodriguez avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7f6feef-fd3e-4901-bce6-7271aa74dc87_320w.jpg"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"The team reduced our CAC by 65% while scaling spend 4x. Their transparent reporting and rapid iteration cycle keeps us ahead of the competition."</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">Marcus Rodriguez • Growth Lead</p>
<p className="text-xs text-white/60 font-geist mt-1">Velocity Commerce</p>
</div>
</div>

<div className="relative overflow-hidden sm:p-6 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Jessica Park avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2201bb49-ba9d-4655-9360-c0350107a9fd_320w.jpg"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"From launch to scale in 6 weeks. FluxScale's systematic approach to creative testing and performance optimization delivered results beyond our expectations."</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">Jessica Park • Founder</p>
<p className="text-xs text-white/60 font-geist mt-1">Peak Performance Co</p>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0">
<div className="grid gap-6 md:grid-cols-3">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="David Kim avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1bfea42-f5c9-4b52-974e-36fe36212b17_320w.jpg"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"FluxScale transformed our entire funnel optimization approach. We saw a 280% improvement in conversion rates within the first quarter of working together."</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">David Kim • VP Marketing</p>
<p className="text-xs text-white/60 font-geist mt-1">Nexus Digital</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="Emma Thompson avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"Working with FluxScale has been game-changing. Their strategic approach to creative testing helped us break through our growth plateau and achieve sustainable scale."</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">Emma Thompson • CEO</p>
<p className="text-xs text-white/60 font-geist mt-1">Apex Ventures</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="Ryan Mitchell avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5bf79840-b7ed-4d8d-acd3-c5f5835a065e_320w.jpg"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"The ROI improvements speak for themselves - 450% increase in 8 weeks. FluxScale's data-driven methodology and execution speed are unmatched in the industry."</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">Ryan Mitchell • Co-Founder</p>
<p className="text-xs text-white/60 font-geist mt-1">Scale Dynamics</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between mt-6">
<button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-white/70 hover:text-white transition-colors" id="prevBtn">
<svg className="lucide lucide-chevron-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>

<div className="flex items-center gap-2">
<button className="carousel-indicator w-2 h-2 rounded-full bg-white transition-all duration-300" data-slide="0"></button>
<button className="carousel-indicator w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300" data-slide="1"></button>
</div>
<button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-white/70 hover:text-white transition-colors" id="nextBtn">
<svg className="lucide lucide-chevron-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>

</div>
</section><section className="sm:p-8 mt-10 mr-8 ml-8 pt-6 pr-6 pb-6 pl-6">
<div className="relative">

<div className="relative max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="text-xs font-normal">Pricing</span>
</div>
<h2 className="text-[40px] sm:text-6xl lg:text-6xl leading-[0.95] font-normal text-white tracking-tighter font-geist mt-4">Plans for all businesses</h2>
<p className="mt-3 text-sm sm:text-base text-white/70 font-geist max-w-2xl mx-auto">
        Our pricing plans are designed to make getting started as effortless as possible. With flexible options tailored to a variety of needs and budgets.
      </p>
</div>

<div className="relative max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 10% 0%, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div className="inline-flex items-center gap-2">
</div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Most Pick</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl text-white font-geist font-medium tracking-tight">Basic</h3>
<div className="mt-3 flex items-end justify-center gap-3">
<p className="text-4xl sm:text-5xl text-white font-geist font-medium tracking-tight">$99</p>
<span className="text-white/70 text-sm font-geist mb-1">/ Month</span>
<span className="text-2xl text-white/30 line-through font-geist">$450</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
            Our basic pricing plan is designed to offer great value while providing the essential features you need to get started.
          </p>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">100+ Projects</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">75+ Revisions</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">All templates unlocked</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Unlimited Licenses</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Lifetime Updates</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" style={{width: '14px', height: '14px', color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist">Email support</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/70 font-geist">30‑Days Money‑back Guarantee</span>
</li>
</ul>
<button className="mt-6 inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-emerald-500 text-black text-sm font-medium hover:bg-emerald-400 transition font-geist">
          Book an Appointment
          <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 90% -10%, rgba(99,102,241,0.16) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div className="inline-flex items-center gap-2">
</div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Recommended</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl text-white font-geist font-medium tracking-tight">Premium</h3>
<div className="mt-3 flex items-end justify-center gap-2">
<p className="text-4xl sm:text-5xl text-white font-geist font-medium tracking-tight">$2,599</p>
<span className="text-white/70 text-sm font-geist mb-1">/ Month</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
            Our pro pricing plan is designed for businesses looking for advanced features and premium support.
          </p>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">650+ Projects</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">250+ Revisions</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">All templates unlocked</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Unlimited Licenses</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Lifetime Updates</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Priority email support</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist">30‑Days Money‑back Guarantee</span>
</li>
</ul>
<button className="mt-6 inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-emerald-500 text-black text-sm font-medium hover:bg-emerald-400 transition font-geist">
          Book an Appointment
          <svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
</article>
</div>
</div>
</section><section className="relative overflow-hidden mt-16">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">

<div className="max-w-4xl mx-auto text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="text-xs font-normal">FAQ</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tighter font-geist mt-4">Frequently asked questions</h2>
<p className="mt-4 text-base text-white/70 font-geist">Everything you need to know about our services and how we work with growing businesses.</p>
</div>

<div className="max-w-4xl mx-auto">
<div className="grid gap-4">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
<button className="faq-toggle w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors" data-faq="0">
<h3 className="text-lg font-medium tracking-tight font-geist pr-4">How quickly can you start running campaigns for us?</h3>
<span className="faq-icon flex-shrink-0 w-5 h-5 text-white/60">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 max-h-0">
<div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
<p className="text-sm text-white/70 font-geist">We can typically have your first campaigns live within 5-7 business days. This includes account setup, creative development, tracking implementation, and initial campaign configuration. Our streamlined onboarding process ensures you start seeing results as quickly as possible.</p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
<button className="faq-toggle w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors" data-faq="1">
<h3 className="text-lg font-medium tracking-tight font-geist pr-4">What platforms do you run ads on?</h3>
<span className="faq-icon flex-shrink-0 w-5 h-5 text-white/60">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 max-h-0">
<div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
<p className="text-sm text-white/70 font-geist">We specialize in Facebook/Instagram, Google Ads, TikTok, YouTube, and emerging platforms like Snapchat and Pinterest. Our platform selection is based on where your target audience is most active and where we can achieve the best ROI for your specific business model.</p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
<button className="faq-toggle w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors" data-faq="2">
<h3 className="text-lg font-medium tracking-tight font-geist pr-4">Do you provide creative assets or do we need to create them?</h3>
<span className="faq-icon flex-shrink-0 w-5 h-5 text-white/60">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 max-h-0">
<div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
<p className="text-sm text-white/70 font-geist">We handle all creative development in-house. Our team includes designers, copywriters, and video editors who create high-converting ads tailored to your brand and audience. You'll receive unlimited creative requests and revisions as part of your plan.</p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
<button className="faq-toggle w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors" data-faq="3">
<h3 className="text-lg font-medium tracking-tight font-geist pr-4">What's your minimum ad spend requirement?</h3>
<span className="faq-icon flex-shrink-0 w-5 h-5 text-white/60">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 max-h-0">
<div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
<p className="text-sm text-white/70 font-geist">Our Basic plan requires a minimum monthly ad spend of $5,000, while our Premium plan is designed for businesses spending $15,000+ monthly. This ensures we have sufficient budget to run meaningful tests and optimize for the best results.</p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
<button className="faq-toggle w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors" data-faq="4">
<h3 className="text-lg font-medium tracking-tight font-geist pr-4">How do you measure and report on performance?</h3>
<span className="faq-icon flex-shrink-0 w-5 h-5 text-white/60">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 max-h-0">
<div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
<p className="text-sm text-white/70 font-geist">We provide detailed weekly reports covering all key metrics: ROAS, CAC, conversion rates, and more. You'll have access to a real-time dashboard plus regular strategy calls to review performance and plan next steps. Complete transparency is core to our approach.</p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
<button className="faq-toggle w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors" data-faq="5">
<h3 className="text-lg font-medium tracking-tight font-geist pr-4">Can I pause or cancel my plan anytime?</h3>
<span className="faq-icon flex-shrink-0 w-5 h-5 text-white/60">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 max-h-0">
<div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
<p className="text-sm text-white/70 font-geist">Yes, you can pause or cancel your plan at any time with 30 days notice. We believe in earning your business every month, not locking you into long-term contracts. If you're not seeing results, we'll work with you to improve or help you transition smoothly.</p>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto text-center mt-12">
<p className="text-base text-white/70 font-geist mb-6">Still have questions? We'd love to chat about your specific needs.</p>
<div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#">
<svg className="lucide lucide-message-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
          Start a conversation
        </a>
<a className="inline-flex items-center gap-2 text-base font-medium text-black font-geist bg-emerald-500 rounded-xl px-6 py-3 hover:bg-emerald-400 transition" href="#">
<svg className="lucide lucide-calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
          Book a call
        </a>
</div>
</div>
</div>

</section>
<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
<p className="text-sm text-white/50 font-geist">© <span className="font-geist" id="year">2025</span> FluxScale. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-white/60 hover:text-white" href="#"><svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-white/60 hover:text-white" href="#"><svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-white/60 hover:text-white" href="#"><svg className="lucide lucide-github h-5 w-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
</footer>




    </>
  );
}

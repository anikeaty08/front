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



(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();



(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();



      // Page entrance animation
      document.body.classList.add('loaded');

      // Intersection Observer for scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, observerOptions);

      // Observe all animated elements
      const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-up, .scale-in, .blur-in, .slide-in-left, .slide-in-right, .bounce-in, .float-in, .flip-in');
      animatedElements.forEach(el => observer.observe(el));

      // Carousel functionality
      let currentSlide = 0;
      const slides = 3;
      const carouselTrack = document.getElementById('carousel-track');
      
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides;
        const translateX = -((currentSlide + 1) * 100);
        carouselTrack.style.transform = `translateX(${translateX}%)`;
        
        // Reset to first slide if we're past the last actual slide
        setTimeout(() => {
          if (currentSlide === 0) {
            carouselTrack.style.transition = 'none';
            carouselTrack.style.transform = 'translateX(-100%)';
            setTimeout(() => {
              carouselTrack.style.transition = 'transform 700ms ease-in-out';
            }, 50);
          }
        }, 700);
      }

      // Auto-advance carousel
      setInterval(nextSlide, 4000);

      // Parallax effect for floating elements
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelectorAll('.parallax-slow');
        
        parallax.forEach(element => {
          const speed = 0.1;
          const yPos = -(scrolled * speed);
          element.style.transform = `translateY(${yPos}px)`;
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88d0cc0d-1d53-470c-81f5-3eb5328e26e6_3840w.jpg")'}}></div>

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-1/4 -left-1/4 h-[44rem] w-[44rem] rounded-full opacity-[0.15] blur-3xl floating" style={{background: 'radial-gradient(60% 60%, rgb(209, 250, 229) 0%, rgba(255, 255, 255, 0) 70%)'}}></div>
<div className="absolute -bottom-1/3 -right-1/4 h-[46rem] w-[46rem] rounded-full opacity-[0.18] blur-3xl floating-delayed" style={{background: 'radial-gradient(60% 60% at 50% 50%, #fef3c7 0%, rgba(255,255,255,0) 70%)'}}></div>
<div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full opacity-[0.12] blur-2xl floating" style={{background: 'radial-gradient(60% 60%, rgb(224, 242, 254) 0%, rgba(255, 255, 255, 0) 70%)'}}></div>
</div>

<header className="w-full fade-in delay-0 text-white bg-neutral-900" style={{}}>
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

<a className="slide-in-left delay-100 inline-flex items-center gap-3 hover:-translate-y-0.5 transition-transform" href="#" title="Link disabled in preview mode">
<div className="flex w-12 h-12 rounded-none items-center justify-center">
<img alt="YesBoba Logo" className="w-10 h-10 object-contain rounded-full" src="https://cdn.midjourney.com/bc87f761-dc32-49f8-8383-199d880c00cd/0_3.png" style={{}}/>
</div>
<div className="flex flex-col">
<span className="text-lg text-white tracking-tight font-quicksand" style={{}}>YesBoba</span>
<span className="text-xs text-neutral-400 tracking-wide font-quicksand" style={{}}>All-Natural Bubble Tea</span>
</div>
</a>

<div className="hidden gap-8 md:flex items-center">
<a className="fade-in delay-200 relative text-sm text-neutral-400 hover:text-white transition-colors group font-quicksand" href="#menu" style={{}} title="Link disabled in preview mode">
        Menu
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="fade-in delay-300 relative text-sm text-neutral-400 hover:text-white transition-colors group font-quicksand" href="#ingredients" style={{}} title="Link disabled in preview mode">
        Natural
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="fade-in delay-400 relative text-sm text-neutral-400 hover:text-white transition-colors group font-quicksand" href="#locations" style={{}} title="Link disabled in preview mode">
        Locations
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<div className="fade-in delay-500 w-px h-6 bg-neutral-700" style={{}}></div>
<a className="slide-in-right delay-600 jelly-btn jelly-btn-primary gap-2 text-sm font-quicksand" href="#" style={{width: '150px', height: '48px'}} title="Link disabled in preview mode">
<svg className="lucide lucide-shopping-bag h-4 w-4 transition group-hover:scale-105" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 10a4 4 0 0 1-8 0"></path><path className="" d="M3.103 6.034h17.794"></path><path className="" d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
        Order Now
</a>
</div>

<button aria-label="Open menu" className="bounce-in delay-700 md:hidden jelly-btn jelly-btn-outline" style={{width: '44px', height: '44px'}}>
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>
</header>

<main className="max-w-7xl md:pb-24 md:pt-20 mr-auto ml-auto pt-24 pr-6 pb-16 pl-6">
<div className="grid gap-10 md:grid-cols-2 items-center">

<div className="space-y-6">

<div className="bounce-in delay-800 inline-flex gap-2 ring-1 ring-white/20 text-xs text-emerald-700 bg-white border-white/20 border rounded-full pt-1 pr-3 pb-1 pl-3 shadow-lg backdrop-blur-xl items-center font-quicksand" style={{}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            100% natural ingredients
          </div>

<h1 className="fade-in-up delay-900 sm:text-5xl lg:text-6xl text-4xl text-neutral-900 font-quicksand tracking-tight font-semibold" style={{fontFamily: '"Baloo 2", sans-serif'}}>
            Pure bubble tea.<br className="hidden sm:block"/>
<span className="bg-clip-text text-transparent font-quicksand tracking-tight font-semibold" style={{backgroundImage: 'linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(38, 38, 38) 35%, rgb(64, 64, 64) 85%)', fontFamily: '"Baloo 2", sans-serif'}}>All-natural, guilt-free.</span>
</h1>

<p className="fade-in-up delay-1000 max-w-xl text-base leading-relaxed text-neutral-700 font-quicksand" style={{}}>
            Made with organic tea leaves, no artificial colors, low-sugar syrups, and fresh milk alternatives. Every cup is crafted with care for your health and taste buds.
          </p>

<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="bounce-in delay-1100 jelly-btn jelly-btn-primary gap-2 text-sm font-quicksand" href="#" style={{width: '150px', height: '55px'}} title="Link disabled in preview mode">
<svg className="h-5 w-5 transition group-hover:scale-105" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
              Order now
            </a>
<a className="bounce-in delay-1200 jelly-btn jelly-btn-secondary gap-2 text-sm font-quicksand" href="#" style={{width: '150px', height: '55px'}} title="Link disabled in preview mode">
<svg className="h-5 w-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Find a store
            </a>
</div>
</div>

<div className="blur-in delay-400 relative">

<div className="relative w-full max-w-md unified-card mr-auto ml-auto pt-3 pr-3 pb-3 pl-3">

<div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50" style={{}}>
<div className="flex transition-transform duration-700 ease-in-out" id="carousel-track" style={{transform: 'translateX(-300%)', transition: 'transform 700ms ease-in-out'}}>

<div className="w-full flex-shrink-0">
<div className="relative h-[420px] w-full">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/ffd82148-542c-474a-8927-9d62d15a12e1/0.mp4" title="Milk Tea"></video>
<div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 shadow-sm font-quicksand" style={{}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                      Classic
                    </div>
<div className="absolute bottom-3 left-3 right-3">
<div className="unified-card flex items-center justify-between px-3 py-2 text-sm text-neutral-800" style={{}}>
<div className="flex gap-2 items-center font-quicksand" style={{}}>Milk Tea<svg className="lucide lucide-cup-soda h-4 w-4" data-lucide="cup-soda" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"></path><path d="M5 8h14"></path><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path><path d="m12 8 1-6h2"></path></svg></div>
<div className="tracking-tight font-quicksand" style={{}}>$5.25</div>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0">
<div className="relative h-[420px] w-full">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/feaaf431-74ae-4286-ad6d-9c946037d7aa/0.mp4" title="Matcha Taro Latte"></video>
<div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700 shadow-sm font-quicksand" style={{}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Organic
                    </div>
<div className="absolute bottom-3 left-3 right-3">
<div className="unified-card flex items-center justify-between px-3 py-2 text-sm text-neutral-800" style={{}}>
<div className="flex gap-2 items-center font-quicksand" style={{}}>Matcha Taro Latte<svg className="lucide lucide-cup-soda h-4 w-4" data-lucide="cup-soda" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"></path><path d="M5 8h14"></path><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path><path d="m12 8 1-6h2"></path></svg></div>
<div className="tracking-tight font-quicksand" style={{}}>$6.50</div>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0">
<div className="relative h-[420px] w-full">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/9fdef590-f33a-4136-bd20-cfce0b5cb162/0.mp4" title="Classic Taro Milk Tea"></video>
<div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs text-purple-700 shadow-sm font-quicksand" style={{}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                      Popular
                    </div>
<div className="absolute bottom-3 left-3 right-3">
<div className="unified-card flex items-center justify-between px-3 py-2 text-sm text-neutral-800" style={{}}>
<div className="flex gap-2 items-center font-quicksand" style={{}}>Classic Taro Milk Tea<svg className="lucide lucide-cup-soda h-4 w-4" data-lucide="cup-soda" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"></path><path d="M5 8h14"></path><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path><path d="m12 8 1-6h2"></path></svg></div>
<div className="tracking-tight font-quicksand" style={{}}>$5.75</div>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0">
<div className="relative h-[420px] w-full">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/ffd82148-542c-474a-8927-9d62d15a12e1/0.mp4" title="Milk Tea"></video>
<div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 shadow-sm font-quicksand" style={{}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                      Classic
                    </div>
<div className="absolute bottom-3 left-3 right-3">
<div className="unified-card flex items-center justify-between px-3 py-2 text-sm text-neutral-800" style={{}}>
<div className="flex gap-2 items-center font-quicksand" style={{}}>Milk Tea<svg className="lucide lucide-cup-soda h-4 w-4" data-lucide="cup-soda" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"></path><path d="M5 8h14"></path><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path><path d="m12 8 1-6h2"></path></svg></div>
<div className="tracking-tight font-quicksand" style={{}}>$5.25</div>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0">
<div className="relative h-[420px] w-full">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/feaaf431-74ae-4286-ad6d-9c946037d7aa/0.mp4" title="Matcha Taro Latte"></video>
<div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700 shadow-sm font-quicksand" style={{}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Organic
                    </div>
<div className="absolute bottom-3 left-3 right-3">
<div className="unified-card flex items-center justify-between px-3 py-2 text-sm text-neutral-800" style={{}}>
<div className="flex gap-2 items-center font-quicksand" style={{}}>Matcha Taro Latte<svg className="lucide lucide-cup-soda h-4 w-4" data-lucide="cup-soda" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"></path><path d="M5 8h14"></path><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path><path d="m12 8 1-6h2"></path></svg></div>
<div className="tracking-tight font-quicksand" style={{}}>$6.50</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="max-w-7xl md:py-24 mr-auto ml-auto pt-0 pr-6 pb-16 pl-6" id="menu">
<div className="text-center mb-16">
<h2 className="fade-in-up text-3xl text-neutral-900 sm:text-4xl mb-4 font-quicksand tracking-tight font-semibold" style={{}}>
          Our signature drinks
        </h2>
<p className="fade-in-up delay-100 text-lg text-neutral-700 max-w-2xl mx-auto font-quicksand" style={{}}>
          Handcrafted with love, made with the finest natural ingredients. Customize your perfect cup.
        </p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="scale-in delay-200 unified-card group overflow-hidden">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Organic Matcha Latte" className="h-full w-full transition group-hover:scale-105 object-cover rounded-t-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/17ca7bce-950d-46a7-bf7d-a39f0133e556_800w.jpg" style={{}}/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>Organic Matcha Latte</h3>
<span className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>$6.50</span>
</div>
<p className="text-sm text-neutral-700 mb-4 font-quicksand" style={{}}>Premium ceremonial-grade matcha with choice of oat, almond, or soy milk. Naturally sweet and energizing.</p>
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700 font-quicksand" style={{}}>
<svg className="lucide lucide-leaf h-3 w-3" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                Organic
              </span>
<span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700 font-quicksand" style={{}}>
<svg className="lucide lucide-zap h-3 w-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                Caffeine
              </span>
</div>
<button className="jelly-btn jelly-btn-primary w-full gap-2 text-sm font-quicksand" style={{height: '44px'}}>
<svg className="h-4 w-4 transition group-hover:scale-105" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="m1 1 4 4 4.36 13.18a2 2 0 0 0 1.93 1.5h11.31"></path><path d="M7 8h15l-1.5 6h-12.5"></path></svg>
              Add to cart
            </button>
</div>
</div>

<div className="scale-in delay-300 unified-card group overflow-hidden">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Classic Taro Milk Tea" className="h-full w-full transition group-hover:scale-105 object-cover rounded-t-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d1298a91-54ea-4e4f-a5dc-151bc81499dc_800w.jpg" style={{}}/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>Classic Taro Milk Tea</h3>
<span className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>$5.75</span>
</div>
<p className="text-sm text-neutral-700 mb-4 font-quicksand" style={{}}>Creamy taro root blended with fresh milk alternatives. Natural purple color from real taro, no artificial dyes.</p>
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-700 font-quicksand" style={{}}>
<svg className="lucide lucide-heart h-3 w-3" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                Popular
              </span>
<span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-700 font-quicksand" style={{}}>
<svg className="lucide lucide-droplets h-3 w-3" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
                Low sugar
              </span>
</div>
<button className="jelly-btn jelly-btn-secondary w-full gap-2 text-sm font-quicksand" style={{height: '44px'}}>
<svg className="h-4 w-4 transition group-hover:scale-105" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="m1 1 4 4 4.36 13.18a2 2 0 0 0 1.93 1.5h11.31"></path><path d="M7 8h15l-1.5 6h-12.5"></path></svg>
              Add to cart
            </button>
</div>
</div>

<div className="scale-in delay-400 unified-card group overflow-hidden">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Earl Grey Bubble Tea" className="h-full w-full object-cover transition group-hover:scale-105 rounded-t-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2617e318-7da4-4294-9342-e9acd1e06485_800w.jpg"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>Earl Grey Bubble Tea</h3>
<span className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>$5.25</span>
</div>
<p className="text-sm text-neutral-700 mb-4 font-quicksand" style={{}}>Classic Earl Grey black tea with bergamot, served with chewy tapioca pearls and fresh milk of your choice.</p>
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700 font-quicksand" style={{}}>
<svg className="lucide lucide-coffee h-3 w-3" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
                Classic
              </span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700 font-quicksand" style={{}}>
<svg className="lucide lucide-leaf h-3 w-3" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                Organic
              </span>
</div>
<button className="jelly-btn jelly-btn-primary w-full gap-2 text-sm font-quicksand" style={{height: '44px'}}>
<svg className="h-4 w-4 transition group-hover:scale-105" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="m1 1 4 4 4.36 13.18a2 2 0 0 0 1.93 1.5h11.31"></path><path d="M7 8h15l-1.5 6h-12.5"></path></svg>
              Add to cart
            </button>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="fade-in-up delay-500 jelly-btn jelly-btn-outline gap-2 text-sm font-quicksand inline-flex" href="#" style={{height: '44px', padding: '0px 24px'}} title="Link disabled in preview mode">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 12h16"></path><path className="" d="M4 18h16"></path><path d="M4 6h16"></path></svg>
          View full menu
        </a>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-16 md:py-24" id="ingredients">
<div className="grid gap-10 lg:grid-cols-2 items-center">

<div className="flex flex-col space-y-8 justify-center">
<div className="space-y-8">
<div className="space-y-4">
<p className="fade-in-left uppercase text-xs text-emerald-700 tracking-[0.3em] font-quicksand" style={{}}>Pure Ingredients</p>
<h2 className="fade-in-left delay-100 text-3xl sm:text-4xl md:text-5xl leading-tight text-neutral-900 font-quicksand tracking-tight font-semibold" style={{fontFamily: '"Baloo 2", sans-serif'}}>
            Nature's finest
            <span className="text-neutral-950 font-quicksand tracking-tight font-semibold" style={{}}>in every cup</span>
</h2>
<p className="fade-in-left delay-200 max-w-lg text-base sm:text-lg text-neutral-700 leading-relaxed font-quicksand" style={{}}>
            We believe great taste comes from quality ingredients. That's why we source only the best organic teas and natural components for your health and enjoyment.
          </p>
</div>
<div className="space-y-6">
<div className="scale-in delay-300 unified-card hover:border-emerald-300 transition-all duration-300 pt-4 pr-4 pb-4 pl-4 items-center">
<div className="flex gap-4">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 ring-1 ring-emerald-200/50">
<svg className="w-5 h-5 text-emerald-600" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="">
<h3 className="font-semibold text-neutral-900 font-quicksand" style={{}}>100% Organic Tea Leaves</h3>
<p className="text-sm text-neutral-700 font-quicksand" style={{}}>Sustainably sourced from Taiwan and China</p>
</div>
</div>
</div>
<div className="scale-in delay-400 unified-card hover:border-blue-300 transition-all duration-300 pt-4 pr-4 pb-4 pl-4 items-center">
<div className="flex gap-4">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 ring-1 ring-blue-200/50">
<svg className="w-5 h-5 text-blue-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="font-semibold text-neutral-900 font-quicksand" style={{}}>No Artificial Colors</h3>
<p className="text-sm text-neutral-700 font-quicksand" style={{}}>Natural colors from real ingredients</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center">
<div className="w-full max-w-xl space-y-3">

<div className="fade-in-right delay-200 feature-card">
<button className="w-full flex items-center justify-between bg-transparent hover:bg-white/20 transition-all duration-300 p-6 group" type="button">
<div className="flex items-center gap-4">
<span className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100 ring-1 ring-emerald-200/50 group-hover:bg-emerald-200 transition-all duration-300">
<svg className="w-6 h-6 text-emerald-600" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</span>
<div className="text-left">
<span className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>Organic Tea Leaves</span>
<span className="text-sm text-neutral-700 font-quicksand" style={{}}>Premium quality, sustainably sourced</span>
</div>
</div>
<svg className="group-hover:text-emerald-600 transition-all duration-300 w-[20px] h-[20px]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(5, 150, 105)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="bg-gradient-to-r from-emerald-50/50 to-emerald-100/30 text-neutral-700 p-6 text-sm leading-relaxed border-t border-emerald-200/30 hidden font-quicksand" style={{}}>
            Premium organic black, green, and oolong teas sourced directly from sustainable farms in Taiwan and China. Our tea leaves are carefully selected for their exceptional flavor profiles and natural antioxidant properties.
            <div className="mt-3 flex items-center gap-2 text-emerald-600">
<svg className="w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-xs font-quicksand" style={{}}>Certified organic cultivation</span>
</div>
</div>
</div>

<div className="fade-in-right delay-300 feature-card">
<button className="w-full flex hover:bg-white/20 transition-all duration-300 group bg-transparent pt-6 pr-6 pb-6 pl-6 items-center justify-between" type="button">
<div className="flex items-center gap-4">
<span className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 ring-1 ring-blue-200/50 group-hover:bg-blue-200 transition-all duration-300">
<svg className="w-6 h-6 text-blue-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div className="text-left">
<span className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>No Artificial Colors</span>
<span className="text-sm text-neutral-700 font-quicksand" style={{}}>Natural ingredients only</span>
</div>
</div>
<svg className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transition-all duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="bg-gradient-to-r from-blue-50/50 to-blue-100/30 text-neutral-700 p-6 text-sm leading-relaxed border-t border-blue-200/30 font-quicksand" style={{}}>
            All colors come from natural ingredients like butterfly pea flowers, turmeric, and fruit extracts. We never use artificial dyes or synthetic coloring agents in any of our beverages.
            <div className="mt-3 flex items-center gap-2 text-blue-600">
<svg className="w-4 h-4" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
<span className="text-xs font-quicksand" style={{}}>Natural color extraction</span>
</div>
</div>
</div>

<div className="fade-in-right delay-400 feature-card">
<button className="w-full flex items-center justify-between bg-transparent hover:bg-white/20 transition-all duration-300 p-6 group" type="button">
<div className="flex items-center gap-4">
<span className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber-100 ring-1 ring-amber-200/50 group-hover:bg-amber-200 transition-all duration-300">
<svg className="w-6 h-6 text-amber-600" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</span>
<div className="text-left">
<span className="block text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>Low-Sugar Syrups</span>
<span className="text-sm text-neutral-700 font-quicksand" style={{}}>40% less sugar content</span>
</div>
</div>
<svg className="w-5 h-5 text-neutral-400 group-hover:text-amber-600 transition-all duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="bg-gradient-to-r from-amber-50/50 to-amber-100/30 text-neutral-700 p-6 text-sm leading-relaxed border-t border-amber-200/30 hidden font-quicksand" style={{}}>
            House-made syrups with 40% less sugar, sweetened with organic cane sugar and natural fruit concentrates. Each syrup is carefully crafted to enhance the natural tea flavors without overwhelming sweetness.
            <div className="mt-3 flex items-center gap-2 text-amber-600">
<svg className="w-4 h-4" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<span className="text-xs font-quicksand" style={{}}>Small-batch production</span>
</div>
</div>
</div>

<div className="fade-in-right delay-500 feature-card">
<button className="w-full flex items-center justify-between bg-transparent hover:bg-white/20 transition-all duration-300 p-6 group" type="button">
<div className="flex items-center gap-4">
<span className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-100 ring-1 ring-cyan-200/50 group-hover:bg-cyan-200 transition-all duration-300">
<svg className="w-6 h-6 text-cyan-600" data-lucide="milk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2h8"></path><path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"></path><path className="" d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path></svg>
</span>
<div className="text-left">
<span className="block text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>Fresh Milk Alternatives</span>
<span className="text-sm text-neutral-700 font-quicksand" style={{}}>Made fresh daily in-store</span>
</div>
</div>
<svg className="w-5 h-5 text-neutral-400 group-hover:text-cyan-600 transition-all duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="bg-gradient-to-r from-cyan-50/50 to-cyan-100/30 text-neutral-700 p-6 text-sm leading-relaxed border-t border-cyan-200/30 hidden font-quicksand" style={{}}>
            Choose from creamy oat milk, smooth almond milk, or rich soy milk - all made fresh daily in-store. Our plant-based alternatives provide the perfect complement to our organic teas without compromising on taste or texture.
            <div className="mt-3 flex items-center gap-2 text-cyan-600">
<svg className="w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-quicksand" style={{}}>Daily fresh preparation</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl md:py-24 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center mb-16">
<h2 className="fade-in-up text-3xl text-neutral-900 sm:text-4xl mb-4 font-quicksand tracking-tight font-semibold" style={{}}>
      Crafted with care
    </h2>
<p className="fade-in-up delay-100 text-lg text-neutral-700 max-w-2xl mx-auto font-quicksand" style={{}}>
      Every drink is made fresh to order using our time-tested brewing process and quality ingredients.
    </p>
</div>
<div className="space-y-6">

<div className="grid md:grid-cols-3 gap-6 items-center">

<div className="slide-in-left delay-200 feature-card flex flex-col items-center justify-center p-6 md:p-8 text-center">
<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 ring-1 ring-emerald-200/50">
<svg className="lucide lucide-leaf h-8 w-8 text-emerald-600" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-neutral-900 mb-3 text-2xl font-quicksand tracking-tight font-semibold" style={{}}>Fresh Tea Brewing</h3>
<p className="text-neutral-700 leading-relaxed font-quicksand" style={{}}>
          Our organic tea leaves are steeped at the perfect temperature and timing to extract maximum flavor and natural antioxidants.
        </p>
</div>

<div className="md:col-span-2">
<div className="slide-in-right delay-200 unified-card p-3">
<img alt="Fresh Tea Brewing" className="h-48 md:h-64 w-full object-cover rounded-xl" src="https://cdn.midjourney.com/25bf49be-b5b1-474e-a1df-39c099cf3425/0_2.png?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 items-center">

<div className="md:col-span-2 order-2 md:order-1">
<div className="slide-in-left delay-300 unified-card p-3">
<img alt="Natural Sweetening" className="h-48 md:h-64 w-full object-cover rounded-xl" src="https://cdn.midjourney.com/bbe2a26d-c087-41c4-8284-787bb2cb8dae/0_0.png?w=800&amp;q=80"/>
</div>
</div>

<div className="slide-in-right delay-300 feature-card flex flex-col md:p-8 order-1 md:order-2 text-center pt-6 pr-6 pb-6 pl-6 items-center justify-center">
<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 ring-1 ring-amber-200/50">
<svg className="lucide lucide-droplets h-8 w-8 text-amber-600" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="text-neutral-900 mb-3 text-2xl font-quicksand tracking-tight font-semibold" style={{}}>Natural Sweetening</h3>
<p className="text-neutral-700 leading-relaxed font-quicksand" style={{}}>
          We add our house-made low-sugar syrups and natural fruit concentrates, perfectly balanced to complement each tea's unique profile.
        </p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 items-center">

<div className="slide-in-left delay-400 feature-card flex flex-col items-center justify-center p-6 md:p-8 text-center">
<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 ring-1 ring-cyan-200/50">
<svg className="lucide lucide-cup-soda h-8 w-8 text-cyan-600" data-lucide="cup-soda" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"></path><path d="M5 8h14"></path><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path><path d="m12 8 1-6h2"></path></svg>
</div>
<h3 className="text-neutral-900 mb-3 text-2xl font-quicksand tracking-tight font-semibold" style={{}}>Perfect Assembly</h3>
<p className="text-neutral-700 leading-relaxed font-quicksand" style={{}}>
          Finally, we add your choice of fresh milk alternative and perfectly cooked tapioca pearls, then shake it all together for the perfect blend.
        </p>
</div>

<div className="md:col-span-2">
<div className="slide-in-right delay-400 unified-card p-3">
<img alt="Perfect Assembly" className="h-48 md:h-64 w-full object-cover rounded-xl" src="https://cdn.midjourney.com/eb1fb55a-4bf7-468e-bb27-294998aebf61/0_2.png?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-7xl md:py-24 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid gap-12 lg:grid-cols-2 items-center">

<div className="flex items-center justify-center">
<div className="relative">
<div className="delay-200 relative w-full unified-card pt-1 pr-1 pb-1 pl-1 blur-in">
<div className="overflow-hidden rounded-xl">
<img alt="Nathalie Chung" className="h-96 w-full object-cover" src="https://cdn.midjourney.com/ede4525b-6dfa-4bc2-9fdd-a997fb7ae7f8/0_1.png?w=800&amp;q=80"/>
</div>
</div>
<div className="grid grid-cols-3 gap-3 mt-8">
<div className="scale-in delay-400 unified-card group relative overflow-hidden transition">
<div className="aspect-square overflow-hidden">
<img alt="Tea brewing process" className="h-full w-full object-cover transition group-hover:scale-105 rounded-2xl" src="https://cdn.midjourney.com/b6ab73e6-2b0b-42ad-b002-c364c04f192a/0_1.png?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex bg-gradient-to-t from-black/60 via-transparent to-transparent bg-[url(https://cdn.midjourney.com/b6ab73e6-2b0b-42ad-b002-c364c04f192a/0_1.png?w=800&amp;q=80)] bg-cover rounded-2xl mx-1 my-1 items-end">
<div className="p-3">
<p className="text-white text-xs font-quicksand" style={{}}>Traditional brewing methods</p>
</div>
</div>
</div>
<div className="scale-in delay-500 unified-card group relative overflow-hidden transition">
<div className="aspect-square overflow-hidden">
<img alt="Sustainable tea farm" className="h-full w-full object-cover transition group-hover:scale-105 rounded-2xl" src="https://cdn.midjourney.com/d9823fe4-52f9-4cef-ab6e-abb6549415be/0_3.png?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end rounded-2xl">
<div className="p-3">
<p className="text-white text-xs font-quicksand" style={{}}>Organic tea farms in Taiwan</p>
</div>
</div>
</div>
<div className="scale-in delay-600 unified-card group relative overflow-hidden transition">
<div className="aspect-square overflow-hidden">
<img alt="Boba Boba store interior" className="h-full w-full object-cover transition group-hover:scale-105 rounded-2xl" src="https://cdn.midjourney.com/ed2ffffe-bc58-4acb-b57c-faaf1b18595c/0_1.png?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end rounded-2xl">
<div className="p-3">
<p className="text-white text-xs font-quicksand" style={{}}>Our first flagship store</p>
</div>
</div>
</div>
</div>

</div>
</div>

<div className="space-y-8">
<div className="space-y-6">
<div className="space-y-4">
<div className="flex items-center gap-3">
<p className="fade-in-left uppercase text-xs font-semibold text-neutral-950/80 tracking-[0.3em] font-quicksand" style={{}}>Meet Our Founder</p>
<div className="fade-in-left delay-100 inline-flex gap-2 ring-1 ring-black/5 text-xs text-neutral-700 font-quicksand bg-neutral-50/50 border-neutral-200/80 border rounded-full pt-1 pr-3 pb-1 pl-3 shadow-sm backdrop-blur items-center" style={{}}>
<svg className="w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Founded 2018
          </div>
</div>
<h2 className="fade-in-left delay-200 text-3xl sm:text-4xl md:text-5xl leading-tight text-neutral-900 font-quicksand tracking-tight font-semibold" style={{fontFamily: '"Baloo 2", sans-serif'}}>
          From traditional roots to
          <span className="text-neutral-950 font-quicksand tracking-tight font-semibold" style={{}}>modern wellness</span>
</h2>
<p className="fade-in-left delay-300 sm:text-lg leading-relaxed text-base text-neutral-950/80 font-quicksand" style={{}}>
          Nathalie Chung bridges two worlds: the authentic tea traditions of her Taiwanese heritage and the health-conscious innovation of modern California. Her journey from her grandmother's tea house in Taipei to founding Boba Boba reflects a deep commitment to honoring the past while creating a healthier future.
        </p>
</div>

<div className="grid gap-4 sm:grid-cols-2">
<div className="scale-in delay-400 unified-card pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-3 mb-2">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 ring-1 ring-emerald-200/50">
<svg className="w-4 h-4 text-emerald-600" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>Traditional Training</h3>
</div>
<p className="leading-relaxed text-base text-neutral-700 font-quicksand" style={{}}>Three years studying authentic tea brewing with fifth-generation masters in Taiwan's mountain regions.</p>
</div>
<div className="scale-in delay-500 unified-card pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-3 mb-2">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 ring-1 ring-blue-200/50">
<svg className="w-4 h-4 text-blue-600" data-lucide="lightbulb" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(37, 99, 235)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"></path><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>Innovation Vision</h3>
</div>
<p className="leading-relaxed text-base text-neutral-700 font-quicksand" style={{}}>Pioneering the first all-natural bubble tea chain, eliminating artificial ingredients without sacrificing taste.</p>
</div>
<div className="scale-in delay-600 unified-card pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-3 mb-2">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 ring-1 ring-amber-200/50">
<svg className="w-4 h-4 text-amber-600" data-lucide="award" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(217, 119, 6)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>Quality Awards</h3>
</div>
<p className="leading-relaxed text-base text-neutral-700 font-quicksand" style={{}}>Named "Best Natural Bubble Tea" by San Francisco Food Critics three years running.</p>
</div>
<div className="scale-in delay-700 unified-card pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-3 mb-2">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 ring-1 ring-purple-200/50">
<svg className="w-4 h-4 text-purple-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle className="" cx="9" cy="7" r="4"></circle><path d="m22 21-3-3"></path><circle cx="16" cy="11" r="3"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 font-quicksand" style={{}}>Community Impact</h3>
</div>
<p className="leading-relaxed text-base text-neutral-700 font-quicksand" style={{}}>Building relationships with local farmers and supporting sustainable tea cultivation practices worldwide.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-7xl md:py-24 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" id="locations">
<div className="text-center mb-16">
<div className="bounce-in inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/50 px-3 py-1 text-xs text-emerald-700 ring-1 ring-black/5 shadow-sm backdrop-blur mb-4 font-quicksand" style={{}}>
<svg className="w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
      Now serving 12 locations
    </div>
<h2 className="fade-in-up delay-100 text-3xl text-neutral-900 sm:text-4xl mb-4 font-quicksand tracking-tight font-semibold" style={{fontFamily: '"Baloo 2", sans-serif'}}>
      Find your nearest
      <span className="text-neutral-950 font-quicksand tracking-tight font-semibold" style={{}}>YesBoba location</span>
</h2>
<p className="fade-in-up delay-200 text-lg text-neutral-700 max-w-2xl mx-auto font-quicksand" style={{}}>
      Visit us at one of our carefully designed stores, each crafted to provide the perfect atmosphere for enjoying our all-natural bubble tea.
    </p>
</div>
<div className="grid gap-8 lg:grid-cols-2 unified-card pt-8 pr-8 pb-8 pl-8">

<div className="slide-in-left delay-300 relative overflow-hidden unified-card">
<div className="relative h-96 flex flex-col">
<div className="flex-1 relative">
<img alt="Store locations map" className="w-full h-full object-cover rounded-xl pt-30 pb-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84cd85d8-c9c1-4c8d-b0af-92e54afbcccf_1600w.jpg"/>

<div className="absolute top-1/4 left-1/3 group cursor-pointer">
<div className="animate-pulse">
<div className="w-4 h-4 bg-emerald-500 rounded-full shadow-lg ring-2 ring-white"></div>
</div>
<div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 unified-card p-3 min-w-max">
<p className="text-sm text-neutral-900 font-quicksand" style={{}}>San Francisco - Mission</p>
<p className="text-xs text-neutral-600 font-quicksand" style={{}}>3024 24th Street</p>
</div>
</div>
<div className="absolute top-2/3 right-1/4 group cursor-pointer">
<div className="animate-pulse" style={{animationDelay: '0.5s'}}>
<div className="w-4 h-4 bg-emerald-500 rounded-full shadow-lg ring-2 ring-white"></div>
</div>
<div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 unified-card p-3 min-w-max">
<p className="text-sm text-neutral-900 font-quicksand" style={{}}>Berkeley - Telegraph</p>
<p className="text-xs text-neutral-600 font-quicksand" style={{}}>2443 Telegraph Ave</p>
</div>
</div>
<div className="absolute top-1/2 left-1/2 group cursor-pointer">
<div className="animate-pulse" style={{animationDelay: '1s'}}>
<div className="w-4 h-4 bg-emerald-500 rounded-full shadow-lg ring-2 ring-white"></div>
</div>
<div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 unified-card p-3 min-w-max">
<p className="text-sm text-neutral-900 font-quicksand" style={{}}>Palo Alto - University</p>
<p className="text-xs text-neutral-600 font-quicksand" style={{}}>456 University Ave</p>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-gray-50/50 to-gray-100/30 border-t border-neutral-200/30 pt-6 pr-6 pb-6 pl-6 rounded-b-xl" style={{}}>
<div className="space-y-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100 ring-1 ring-emerald-200/50">
<svg className="w-6 h-6 text-emerald-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
</div>
<div className="">
<p className="text-base text-neutral-900 font-quicksand" style={{}}>Find YesBoba Near You</p>
<p className="text-sm text-neutral-600 font-quicksand" style={{}}>12 locations across the Bay Area</p>
</div>
</div>
<button className="jelly-btn jelly-btn-primary gap-2 text-sm font-quicksand" style={{height: '36px', padding: '0px 16px'}}>
<svg className="w-4 h-4" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
              Use My Location
            </button>
</div>

<div className="relative">
<input className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 pl-10 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm ring-1 ring-black/5 focus:border-emerald-500 focus:outline-none font-nunito" placeholder="Search by city, ZIP code, or address" style={{}} type="text"/>
<svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
</div>

</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="delay-400 feature-card group relative overflow-hidden border-neutral-950/10 border pt-6 pr-6 pb-6 pl-6 scale-in">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 ring-1 ring-emerald-200/50">
<svg className="w-5 h-5 text-emerald-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
</div>
<div className="">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700 mb-1 font-quicksand" style={{}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Flagship Store
            </span>
<h3 className="text-lg text-neutral-900 font-quicksand" style={{}}>San Francisco - Mission District</h3>
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex gap-2 text-sm text-neutral-700 items-center" style={{}}>
<svg className="w-4 h-4 text-emerald-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-quicksand" style={{}}>3024 24th Street, San Francisco, CA 94110</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-700" style={{}}>
<svg className="w-4 h-4 text-emerald-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span className="font-quicksand" style={{}}>7:00 AM - 9:00 PM Daily</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-700" style={{}}>
<svg className="w-4 h-4 text-emerald-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span className="font-quicksand" style={{}}>(415) 555-0123</span>
</div>
</div>
<div className="flex items-center gap-3 mt-4">
<button className="jelly-btn jelly-btn-primary flex-1 text-sm font-quicksand" style={{height: '40px'}}>
          Get Directions
        </button>
<button className="jelly-btn jelly-btn-outline text-sm font-quicksand" style={{height: '40px', padding: '0px 16px'}}>
          Call Store
        </button>
</div>
</div>

<div className="space-y-4">
<div className="fade-in-right delay-500 unified-card group transition border-neutral-950/10 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-neutral-900 font-quicksand" style={{}}>Berkeley - Telegraph Avenue</h3>
<p className="text-sm text-neutral-600 font-quicksand" style={{}}>2443 Telegraph Ave, Berkeley, CA</p>
<p className="text-xs text-neutral-500 font-quicksand" style={{}}>8:00 AM - 8:00 PM Daily</p>
</div>
<div className="flex gap-2 items-center">
<span className="text-xs text-emerald-600 font-quicksand" style={{}}>Open</span>
<svg className="w-4 h-4 text-neutral-400 group-hover:text-emerald-600 transition-colors" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
<div className="fade-in-right delay-600 unified-card group transition border-neutral-950/10 border pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-neutral-900 font-quicksand" style={{}}>Palo Alto - University Avenue</h3>
<p className="text-sm text-neutral-600 font-quicksand" style={{}}>456 University Ave, Palo Alto, CA</p>
<p className="text-xs text-neutral-500 font-quicksand" style={{}}>7:30 AM - 9:30 PM Daily</p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-emerald-600 font-quicksand" style={{}}>Open</span>
<svg className="w-4 h-4 text-neutral-400 group-hover:text-emerald-600 transition-colors" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
</div>

<div className="text-center pt-4">
<a className="fade-in-up delay-800 jelly-btn jelly-btn-outline gap-2 text-sm font-quicksand inline-flex" href="#" style={{height: '44px', padding: '0px 24px'}} title="Link disabled in preview mode">
<svg className="w-4 h-4" data-lucide="map" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
        View all 12 locations
      </a>
</div>
</div>
</div>
</section>
<section className="max-w-7xl md:py-24 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center mb-16">
<div className="bounce-in inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-pink-50/50 px-3 py-1 text-xs text-pink-700 ring-1 ring-black/5 shadow-sm backdrop-blur mb-4 font-quicksand" style={{}}>
<svg className="w-3 h-3" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
      @yesbobatea
    </div>
<h2 className="fade-in-up delay-100 text-3xl text-neutral-900 sm:text-4xl mb-4 font-quicksand tracking-tight font-semibold" style={{fontFamily: '"Baloo 2", sans-serif'}}>
      Follow us
      <span className="text-neutral-950 font-quicksand tracking-tight font-semibold" style={{}}>on the gram</span>
</h2>
<p className="fade-in-up delay-200 text-lg text-neutral-700 max-w-2xl mx-auto font-quicksand" style={{}}>
      Join our bubble tea community! See the latest drinks, behind-the-scenes moments, and share your #YesBobaMoments with us.
    </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

<div className="scale-in delay-200 unified-card group relative overflow-hidden transition cursor-pointer">
<div className="aspect-square overflow-hidden">
<img alt="Matcha creation process" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src="https://cdn.midjourney.com/4de72a82-eec6-49fd-951f-312b26e9a927/0_0.png?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
<div className="p-4">
<div className="flex items-center gap-2 text-white">
<svg className="w-4 h-4" data-lucide="heart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-xs font-quicksand">1.2k likes</span>
</div>
</div>
</div>
</div>

<div className="scale-in delay-300 unified-card group relative overflow-hidden transition cursor-pointer">
<div className="aspect-square overflow-hidden">
<img alt="Taro bubble tea styling" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src="https://cdn.midjourney.com/7d14dfb2-7ce3-45dc-81d5-ca319bda791e/0_0.png?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
<div className="p-4">
<div className="flex items-center gap-2 text-white">
<svg className="w-4 h-4" data-lucide="heart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-xs font-quicksand">924 likes</span>
</div>
</div>
</div>
</div>

<div className="scale-in delay-400 unified-card group relative overflow-hidden transition cursor-pointer">
<div className="aspect-square overflow-hidden">
<img alt="Store interior aesthetic" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src="https://cdn.midjourney.com/30ac4841-0371-4524-90d3-ab9d0c71d0f1/0_2.png?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
<div className="p-4">
<div className="flex items-center gap-2 text-white">
<svg className="w-4 h-4" data-lucide="heart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-xs font-quicksand">756 likes</span>
</div>
</div>
</div>
</div>

<div className="scale-in delay-500 unified-card group relative overflow-hidden transition cursor-pointer">
<div className="aspect-square overflow-hidden">
<img alt="Happy customers with boba" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src="https://cdn.midjourney.com/2791b229-007d-4120-9c9f-7ee0aac2e2d9/0_1.png?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
<div className="p-4">
<div className="flex items-center gap-2 text-white">
<svg className="w-4 h-4" data-lucide="heart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-xs font-quicksand">1.8k likes</span>
</div>
</div>
</div>
</div>
</div>

<div className="text-center">
<a className="fade-in-up delay-600 jelly-btn jelly-btn-primary gap-2 text-sm font-quicksand inline-flex" href="#" style={{height: '48px', padding: '0px 24px'}} title="Link disabled in preview mode">
<svg className="w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
      Follow @yesbobatea
    </a>
</div>
</section>

<footer className="bg-neutral-900 text-white">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

<div className="fade-in delay-200">
<div className="flex items-center gap-3 mb-6">
<img alt="YesBoba Logo" className="w-8 h-8 rounded-full" src="https://cdn.midjourney.com/bc87f761-dc32-49f8-8383-199d880c00cd/0_3.png"/>
<div>
<h3 className="text-lg font-semibold font-quicksand">YesBoba</h3>
<p className="text-xs text-neutral-400 font-quicksand">All-Natural Bubble Tea</p>
</div>
</div>
<p className="text-sm text-neutral-400 mb-6 font-quicksand">
              Premium bubble tea made with organic ingredients, no artificial colors, and fresh milk alternatives. Crafted with care for your health and taste buds.
            </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#" title="Link disabled in preview mode">
<svg data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#" title="Link disabled in preview mode">
<svg data-lucide="facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#" title="Link disabled in preview mode">
<svg data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>

<div className="fade-in delay-300">
<h4 className="text-lg font-semibold mb-6 font-quicksand">Menu</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Signature Drinks</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Seasonal Specials</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Tea Lattes</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Fresh Fruit Teas</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Add-ons &amp; Toppings</a></li>
</ul>
</div>

<div className="fade-in delay-400">
<h4 className="text-lg font-semibold mb-6 font-quicksand">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Our Story</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Locations</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Careers</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Press</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Contact</a></li>
</ul>
</div>

<div className="fade-in delay-500">
<h4 className="text-lg font-semibold mb-6 font-quicksand">Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">FAQ</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Order Help</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Nutrition Info</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Allergen Info</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Feedback</a></li>
</ul>
</div>
</div>

<div className="border-t border-neutral-800 mt-12 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-neutral-400 font-quicksand">
              © 2024 YesBoba. All rights reserved.
            </p>
<div className="flex gap-6">
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Privacy Policy</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Terms of Service</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-quicksand" href="#" title="Link disabled in preview mode">Cookie Policy</a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}

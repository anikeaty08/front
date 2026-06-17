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



      // Parallax scroll effect
      let ticking = false;
      
      function updateParallax() {
        const scrollY = window.pageYOffset * 0.5;
        document.documentElement.style.setProperty('--scroll-y', scrollY);
        ticking = false;
      }
      
      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }
      
      window.addEventListener('scroll', requestTick);
      
      // Initialize
      updateParallax();
    


    // Intersection Observer for animations
    const animateElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const delay = element.dataset.delay || 0;
          
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.filter = 'blur(0px)';
          }, delay);
          
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
      observer.observe(element);
    });
  


      lucide.createIcons();
    
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
      

<header className="absolute inset-x-0 top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-5">
<div className="flex items-center gap-12">
<a className="text-lg font-semibold text-white tracking-tight font-geist" href="/home">Gather</a>
<nav className="hidden md:flex items-center gap-8 text-white/90">
<a className="hover:text-white transition text-sm font-medium font-geist" href="/community">Community</a>
<a className="hover:text-white transition text-sm font-medium font-geist" href="/programs">Programs</a>
<a className="hover:text-white transition text-sm font-medium font-geist" href="/impact">Impact</a>
<a className="hover:text-white transition text-sm font-medium font-geist" href="/resources">Resources</a>
</nav>
</div>
<div className="flex items-center gap-6">
<a className="inline-flex items-center gap-2 hover:text-white transition text-sm font-medium text-white/90 font-geist" href="/join">
              Join Us
              <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="relative isolate">

<div className="absolute inset-0 -z-10" style={{transform: 'translateY(calc(var(--scroll-y, 0) * 0.3px))'}}>
<img alt="Lush farm field with wooden barn and mountain backdrop" className="object-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3a12feac-ae63-41dc-a265-adcc248c890a_3840w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
</div>

<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="sm:pt-32 md:pt-36 lg:pt-40 sm:pb-20 lg:pb-24 pt-28 pb-16">

<div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 opacity-0 translate-y-8 blur-sm" style={{animation: 'fadeSlideBlurIn 1.2s ease-out 0.2s forwards'}}>

<h1 className="sm:text-7xl md:text-8xl lg:text-9xl text-5xl font-medium text-white font-geist drop-shadow-xl tracking-tighter" style={{}}>
          Growing Communities Together
        </h1>
</div>

<p className="mt-6 max-w-2xl text-white/85 text-base sm:text-lg leading-relaxed font-geist opacity-0 translate-y-8 blur-sm" style={{animation: 'fadeSlideBlurIn 1.2s ease-out 0.6s forwards'}}>
        Building stronger communities through local food systems—connecting farmers, families, and neighborhoods to create resilient agricultural networks that nourish everyone.
      </p>

<div className="mt-8 flex flex-wrap items-center gap-4 opacity-0 translate-y-8 blur-sm" style={{animation: 'fadeSlideBlurIn 1.2s ease-out 1s forwards'}}>
<a className="group inline-flex items-center gap-2 hover:bg-emerald-300 transition text-sm font-semibold text-neutral-900 bg-emerald-400 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#start">
<span className="font-geist">Start Your Community Garden</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/15 transition text-sm font-semibold text-white font-geist bg-white/10 ring-white/20 ring-1 rounded-full pt-3 pr-5 pb-3 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur" href="#learn">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
          Watch Stories
        </a>
</div>

<div className="sm:mt-20 flex mt-16 justify-center opacity-0 translate-y-8 blur-sm" style={{animation: 'fadeSlideBlurIn 1.2s ease-out 1.4s forwards'}}>
<a className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition font-geist" href="#stats">
<svg className="lucide lucide-mouse lucide-arrow-down w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="mouse" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '16px', color: 'rgb(255, 255, 255)', animation: 'pulse 2s ease-in-out infinite'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="7" width="14" x="5" y="2"></rect><path d="M12 6v4"></path></svg>
          Scroll to See More
        </a>
</div>
</div>
<style>
      @keyframes fadeSlideBlurIn {
        0% {
          opacity: 0;
          transform: translateY(32px);
          filter: blur(8px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 0.8;
          transform: scale(1);
        }
        50% {
          opacity: 1;
          transform: scale(1.05);
        }
      }
    </style>

</div>
</section>

<div className="border-t border-neutral-200"></div>

<section className="bg-white" id="stats">
<div className="sm:px-6 lg:px-8 mix-blend-luminosity max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 sm:py-12">
<div className="relative">
<div className="text-4xl sm:text-5xl font-geist font-medium text-emerald-600 tracking-tighter" style={{}}>850+</div>
<div className="mt-2 text-sm text-neutral-600 font-geist">Community Gardens Established</div>
</div>
<div className="relative border-l border-neutral-200 pl-8 md:pl-0 md:border-l-0">
<div className="text-4xl sm:text-5xl font-geist font-medium text-emerald-600 tracking-tighter" style={{}}>15k+</div>
<div className="mt-2 text-sm text-neutral-600 font-geist">Families Connected to Local Food</div>
</div>
<div className="relative border-t border-neutral-200 pt-8 md:pt-0 md:border-t-0 md:border-l md:border-neutral-200 md:pl-8 lg:pl-0 lg:border-l-0">
<div className="text-4xl sm:text-5xl font-geist font-medium text-emerald-600 tracking-tighter" style={{}}>2.5M</div>
<div className="mt-2 text-sm text-neutral-600 font-geist">Pounds of Fresh Produce Grown</div>
</div>
<div className="relative border-l border-neutral-200 pl-8 border-t pt-8 md:pt-0 md:border-t-0 md:pl-0 md:border-l-0 lg:border-l lg:border-neutral-200 lg:pl-8">
<div className="text-4xl sm:text-5xl font-geist font-medium text-emerald-600 tracking-tighter" style={{}}>180</div>
<div className="mt-2 text-sm text-neutral-600 font-geist">Cities Building Food Security</div>
</div>
</div>
</div>
</section>

<div className="border-t border-neutral-200"></div>

<section className="sm:pb-20 sm:pt-20 bg-white pt-16 pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-10 items-start">
<div className="">
<h2 className="text-4xl sm:text-5xl md:text-6xl text-neutral-900 font-geist font-medium tracking-tighter" style={{}}>
              Growing Communities, One Garden at a Time
            </h2>
</div>
<div className="max-w-2xl">
<p className="text-neutral-700 leading-relaxed font-geist">
              We believe that food connects us all. Through neighborhood gardens, farmer partnerships, and educational programs, we're creating a movement where everyone has access to fresh, healthy food while strengthening local communities.
            </p>
<a className="mt-6 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-600 transition font-geist" href="#">
              Join Our Movement
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section><div className="border-t border-neutral-200"></div><section className="sm:pt-16 sm:pb-20 bg-white pt-12 pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-start opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out" data-animate="fade-up">
<p className="sm:text-sm text-xs text-neutral-500 font-geist">Our Impact</p>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
<figure className="overflow-hidden rounded-xl ring-1 ring-neutral-200/60 bg-neutral-50 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out" data-animate="fade-up" data-delay="100" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)'}}>
<div className="aspect-[4/3] w-full overflow-hidden">
<img alt="Community garden irrigation system" className="h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bd16fd20-b8ad-4094-affa-aa4b5215d97c_800w.jpg"/>
</div>
<figcaption className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-neutral-600 font-geist">Water-Wise Growing</figcaption>
</figure>
<figure className="overflow-hidden rounded-xl ring-1 ring-neutral-200/60 bg-neutral-50 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out" data-animate="fade-up" data-delay="200" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)'}}>
<div className="aspect-[4/3] w-full overflow-hidden">
<img alt="Hands harvesting leafy greens in community garden" className="h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58e861e1-0244-4721-8f1a-113276de6436_800w.jpg"/>
</div>
<figcaption className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-neutral-600 font-geist">Community Harvesting</figcaption>
</figure>
<figure className="overflow-hidden rounded-xl ring-1 ring-neutral-200/60 bg-neutral-50 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out" data-animate="fade-up" data-delay="300" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)'}}>
<div className="aspect-[4/3] w-full overflow-hidden">
<img alt="Local food distribution network" className="h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/28498091-6abc-46f4-a39e-1eaa48bea3db_800w.jpg"/>
</div>
<figcaption className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-neutral-600 font-geist">Food Network Connection</figcaption>
</figure>
</div>
<div className="mt-10 max-w-3xl opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out" data-animate="fade-up" data-delay="400" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)'}}>
<h3 className="text-3xl sm:text-4xl md:text-5xl text-neutral-900 font-geist font-medium tracking-tighter">Nurturing Resilient Communities Through Local Food Systems and Shared Abundance</h3>
<p className="mt-4 text-neutral-600 leading-relaxed font-geist">We empower neighborhoods to grow together, creating lasting connections between people, land, and nourishment — building food security one garden at a time.</p>
</div>
<div className="mt-8">
<a className="group flex items-center justify-between py-6 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out" data-animate="fade-up" data-delay="500" href="#" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)'}}>
<h4 className="text-2xl sm:text-3xl text-neutral-900 font-geist font-medium tracking-tight">Garden Education Programs</h4>
<svg className="lucide lucide-chevron-right w-5 h-5 text-neutral-400 group-hover:text-neutral-700 transition-colors" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<div className="border-t border-neutral-200"></div>
<a className="group flex items-center justify-between py-6 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out" data-animate="fade-up" data-delay="600" href="#" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)'}}>
<h4 className="text-2xl sm:text-3xl text-neutral-900 font-geist font-medium tracking-tight">Neighborhood Food Networks</h4>
<svg className="lucide lucide-chevron-right w-5 h-5 text-neutral-400 group-hover:text-neutral-700 transition-colors" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<div className="border-t border-neutral-200"></div>
<a className="mt-4 block rounded-xl bg-emerald-100 px-4 sm:px-6 py-6 ring-1 ring-emerald-200 hover:ring-emerald-300 transition opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out" data-animate="fade-up" data-delay="700" href="#" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)'}}>
<div className="flex items-center justify-between gap-4">
<div>
<h4 className="text-2xl sm:text-3xl text-neutral-900 font-geist font-medium tracking-tight">Community Garden Collective</h4>
<p className="mt-1 text-sm text-neutral-700/90 font-geist">Connecting local growers with families and schools to build sustainable food access for everyone.</p>
</div>
<span className="shrink-0 rounded-full bg-emerald-600 text-white p-2">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
</a>
</div>
</div>

</section><div className="border-t border-neutral-200"></div><section className="sm:pt-16 sm:pb-20 bg-white pt-12 pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="relative overflow-hidden rounded-2xl ring-1 ring-neutral-200/70 bg-neutral-900">
<img alt="Terraced rice fields at sunrise" className="absolute inset-0 h-full w-full object-cover object-center opacity-80" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ff31809e-948b-4785-acb3-06919d68411d_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
<div className="relative sm:px-6 md:px-10 sm:py-12 md:py-16 lg:py-20 pt-8 pr-4 pb-8 pl-4">
<div className="max-w-xl lg:max-w-2xl">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-geist font-medium tracking-tighter">Building Sustainable Communities Through Smart Agriculture</h2>
<p className="mt-3 sm:mt-4 text-white/85 text-sm sm:text-base md:text-lg leading-relaxed font-geist">Transform your neighborhood with innovative growing techniques. From water-smart systems to community seed exchanges, we're cultivating a future where everyone has access to fresh, healthy food.</p>
</div>
<div className="mt-6 sm:mt-8 flex items-center gap-3">
<button className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition" type="button">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition" type="button">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex gap-2 sm:text-sm ring-1 ring-white/20 text-xs text-white/85 font-geist bg-black/20 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur items-center">Canada<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
<div className="pointer-events-none hidden lg:block absolute right-4 sm:right-6 md:right-8 lg:right-12 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 w-80 sm:w-96 md:w-[420px] lg:w-[520px] rounded-xl overflow-hidden ring-1 ring-white/30 shadow-2xl">
<img alt="Sustainable farming community" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1f7be202-4b3c-4b14-b485-bdc89cfa78ce_1600w.jpg"/>
</div>
</div>
</div>

<div className="sm:mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mt-8">

<figure className="lg:col-span-5 overflow-hidden bg-neutral-50 ring-neutral-200/60 ring-1 rounded-xl">
<div className="aspect-[16/9] w-full overflow-hidden">
<img alt="Community harvest celebration" className="h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27c1f398-6399-4236-a537-87d611cebe9e_1600w.jpg" style={{}}/>
</div>
<figcaption className="px-4 py-3 text-xs sm:text-sm text-neutral-600 font-geist">
<div className="flex items-center justify-between">
<span className="font-medium">Community Harvest Day</span>
<div className="flex items-center gap-1 text-emerald-600">
<svg className="lucide lucide-calendar" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
<span className="text-xs">Oct 15</span>
</div>
</div>
<p className="mt-2 text-xs text-neutral-500 leading-relaxed">
      Over 120 neighbors came together to celebrate the autumn harvest from our community gardens. This year's yield included 850 lbs of fresh vegetables, herbs, and fruits that were distributed to local families and food pantries.
    </p>
<div className="mt-3 flex items-center gap-4 text-xs">
<div className="flex items-center gap-1 text-neutral-500">
<svg className="lucide lucide-users" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span>120 participants</span>
</div>
<div className="flex items-center gap-1 text-neutral-500">
<svg className="lucide lucide-map-pin" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Riverside Gardens</span>
</div>
</div>
</figcaption>
</figure>

<div className="lg:col-span-4 rounded-xl bg-neutral-900 ring-1 ring-neutral-800 overflow-hidden">
<div className="aspect-[16/9] w-full overflow-hidden">
<img alt="Urban farming technology" className="h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/691baa1d-1ffa-4e6d-87ba-20fbff870430_800w.jpg"/>
</div>
<div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between">
<p className="text-white text-sm sm:text-base leading-relaxed font-geist">"The seed sharing network connected us with 12 other gardens. Now we have access to heirloom varieties and cultural foods from around the world."</p>
<p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70 font-geist">Marcus Thompson — Urban Farmer</p>
</div>
</div>

<div className="lg:col-span-3 rounded-xl bg-white ring-1 ring-neutral-200/60 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
<p className="text-neutral-900 text-sm sm:text-base leading-relaxed font-geist">"Our community garden has transformed our neighborhood. With Gather's guidance, we've reduced water usage by 35% while doubling our harvest yield."</p>
<p className="mt-3 sm:mt-4 text-xs sm:text-sm text-neutral-600 font-geist">Sarah Chen — Community Leader, Portland</p>
</div>

<div className="lg:col-span-3 rounded-xl bg-neutral-900 ring-1 ring-neutral-800 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
<p className="text-white text-sm sm:text-base leading-relaxed font-geist">"The mobile app helps track our collective impact. Seeing our neighborhood's carbon footprint shrink while food security grows is incredibly motivating."</p>
<p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70 font-geist">David Park — Tech Volunteer</p>
</div>

<div className="lg:col-span-4 rounded-xl bg-neutral-900 ring-1 ring-neutral-800 overflow-hidden">
<div className="aspect-[16/9] w-full overflow-hidden">
<img alt="Sustainable farming community" className="h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/72c8b3bf-292e-4424-b26d-4fcb776f58d6_800w.jpg"/>
</div>
<div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between">
<p className="text-white text-sm sm:text-base leading-relaxed font-geist">"What started as a small plot became a movement. Our kids are learning where food comes from, and families are eating healthier than ever before."</p>
<p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70 font-geist">Jennifer Martinez — Parent &amp; Garden Coordinator</p>
</div>
</div>

<div className="lg:col-span-5 rounded-xl ring-1 ring-neutral-200/60 bg-neutral-50 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
<div className="">
<h3 className="text-xl sm:text-2xl md:text-3xl text-neutral-900 font-geist font-medium tracking-tight">Discover More Community Success Stories</h3>
<p className="mt-2 text-neutral-700 text-sm font-geist">See how neighborhoods worldwide are growing stronger together through local food systems.</p>
</div>
<a className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-600 transition font-geist" href="#">
          Explore Stories
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>
<footer className="bg-white">
<div className="border-t border-neutral-200"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-12 sm:py-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<div className="lg:col-span-5">
<a className="inline-flex items-center gap-2 text-neutral-900 text-lg font-geist font-semibold tracking-tight" href="#">
            Gather
          </a>
<p className="mt-3 text-sm text-neutral-600 leading-relaxed font-geist">
            Growing resilient neighborhoods through local food systems, education, and shared abundance.
          </p>
<form action="#" className="mt-6" method="post">
<label className="sr-only" htmlFor="newsletter">Email address</label>
<div className="flex gap-2">
<input autocomplete="email" className="w-full rounded-lg ring-1 ring-neutral-300 focus:ring-neutral-400 focus:outline-none px-3.5 py-2.5 bg-white text-neutral-900 placeholder-neutral-500 text-sm font-geist" id="newsletter" name="email" placeholder="Enter your email" required="" type="email"/>
<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2.5 text-sm font-semibold ring-1 ring-emerald-500/10 transition font-geist" type="submit">
                Subscribe
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<p className="mt-2 text-xs text-neutral-500 font-geist">No spam. Unsubscribe anytime.</p>
</form>
<div className="mt-6 flex items-center gap-3">
<a aria-label="Follow on X" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-200 hover:ring-neutral-300 text-neutral-700 hover:text-neutral-900 transition" href="#">
<svg className="lucide lucide-twitter w-4.5 h-4.5" data-lucide="twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Follow on Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-200 hover:ring-neutral-300 text-neutral-700 hover:text-neutral-900 transition" href="#">
<svg className="lucide lucide-instagram w-4.5 h-4.5" data-lucide="instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="View on GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-200 hover:ring-neutral-300 text-neutral-700 hover:text-neutral-900 transition" href="#">
<svg className="lucide lucide-github w-4.5 h-4.5" data-lucide="github" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a aria-label="Email us" className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-200 hover:ring-neutral-300 text-neutral-700 hover:text-neutral-900 transition" href="mailto:hello@gather.org">
<svg className="lucide lucide-mail w-4.5 h-4.5" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
<div>
<h4 className="text-base font-geist font-medium text-neutral-900 tracking-tight">Programs</h4>
<ul className="mt-3 space-y-2.5">
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Community Gardens</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Seed Sharing Network</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Water-Smart Systems</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Youth Education</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-geist font-medium text-neutral-900 tracking-tight">Resources</h4>
<ul className="mt-3 space-y-2.5">
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Guides &amp; Tutorials</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Tool Library</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Impact Reports</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Community Stories</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-geist font-medium text-neutral-900 tracking-tight">Company</h4>
<ul className="mt-3 space-y-2.5">
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">About</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Partners</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>

<div className="mt-10 border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs sm:text-sm text-neutral-500 font-geist">© <span className="align-baseline">2025</span> Gather. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-xs sm:text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Privacy</a>
<a className="text-xs sm:text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Terms</a>
<a className="text-xs sm:text-sm text-neutral-600 hover:text-neutral-900 transition font-geist" href="#">Accessibility</a>
</div>
</div>
</div>
</div>
</footer>




    </>
  );
}

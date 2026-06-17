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



  /* 
    Sequence animation on scroll when visible (Observer Logic)
  */
  (function () {
    const style = document.createElement("style");
    style.textContent = `
      .animate-on-scroll { animation-play-state: paused !important; }
      .animate-on-scroll.animate { animation-play-state: running !important; }
    `;
    document.head.appendChild(style);

    const once = true;

    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
    }

    window.initInViewAnimations = function (selector = ".animate-on-scroll") {
      document.querySelectorAll(selector).forEach((el) => {
        window.__inViewIO.observe(el);
      });
    };

    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
  })();



      (function() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileCloseButton = document.getElementById('mobile-close-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        const menuText = document.getElementById('menu-text');
        let isMenuOpen = false;

        function toggleMenu() {
          isMenuOpen = !isMenuOpen;
          
          if (isMenuOpen) {
            // Open menu
            mobileMenu.classList.remove('opacity-0', 'invisible');
            mobileMenu.classList.add('opacity-100', 'visible');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            menuText.textContent = 'Close';
            document.body.style.overflow = 'hidden';
          } else {
            // Close menu
            mobileMenu.classList.remove('opacity-100', 'visible');
            mobileMenu.classList.add('opacity-0', 'invisible');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            menuText.textContent = 'Menu';
            document.body.style.overflow = '';
          }
        }

        // Toggle menu on button click
        mobileMenuButton.addEventListener('click', toggleMenu);

        // Close menu on close button click
        mobileCloseButton.addEventListener('click', toggleMenu);

        // Close menu when clicking on links
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
          link.addEventListener('click', () => {
            if (isMenuOpen) {
              toggleMenu();
            }
          });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
          }
        });

        // Close menu when clicking outside (on the overlay)
        mobileMenu.addEventListener('click', (e) => {
          if (e.target === mobileMenu && isMenuOpen) {
            toggleMenu();
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa7551bb-d7f3-464e-ab32-7ffb482a0ef5_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<style className="">
  /* 
    The Animation Definition 
    Usage: animation: scrollBlur linear both;
  */
  @keyframes scrollBlur {
    0% {
      filter: blur(0px) brightness(1);
      transform: scale(1);
    }
    100% {
      filter: blur(20px) brightness(0.4);
      transform: scale(1.05);
    }
  }

  /* Intro Animations */
  @keyframes fadeSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
    }
  }
</style>


<header className="z-50 relative" style={{backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.5), transparent)'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-6 pb-6 items-center justify-between">
<a className="inline-flex items-center justify-center h-[40px] text-xl font-semibold tracking-tight text-white font-geist rounded" href="/">Prateek Mathur</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/programs">Transformations</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/coaches">Coaches</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/support">Support</a>
<button className="inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur items-center">
          Start Training
        </button>
</nav>

<button className="lg:hidden inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobile-menu-button">
<svg className="lucide lucide-menu w-[16px] h-[16px]" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x w-[16px] h-[16px] hidden" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
<span id="menu-text">Menu</span>
</button>
</div>

<div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-50 opacity-0 invisible transition-all duration-300 ease-out" id="mobile-menu">
<div className="flex flex-col h-full pt-6 pb-8 px-6">

<div className="flex justify-end mb-8">
<button className="inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur" id="mobile-close-button">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex-1">
<div className="space-y-6">
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/programs">Programs</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/coaches">Coaches</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/method">Method</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="#pricing">Pricing</a>
<a className="block text-2xl font-normal text-white/80 hover:text-white transition font-geist" href="#support">Support</a>
</div>
<div className="mt-12 pt-8 border-t border-white/10">
<button className="w-full inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur items-center justify-center">
              Start Training
            </button>
</div>
</nav>
</div>
</div>

</div>
</header>

<section className="flex min-h-[90vh] z-20 relative items-end" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \'Apple Color Emoji\', \'Segoe UI Emoji\''}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">

<div className="order-1 opacity-0 animate-[slideInBlur_1.2s_ease-out_0.4s_forwards]" style={{transform: 'translateY(30px)', filter: 'blur(10px)'}}>
<h1 className="sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] text-6xl font-semibold tracking-tighter font-geist">Stronger. Leaner. Rebuilt.<br className=""/><br className=""/></h1>
</div>

<div className="order-2 lg:order-2">
<div className="flex gap-3 animate-[fadeInSlide_0.8s_ease-out_0.6s_forwards] text-xs text-white/70 opacity-0 mb-6 gap-x-3 gap-y-3 items-center" style={{transform: 'translateX(20px)'}}>
<div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur border border-white/10">
<svg className="lucide lucide-star w-[14px] h-[14px] text-slate-50" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<span className="font-medium text-white/90 font-geist">4.9</span>
<span className="text-white/60 font-geist">rating</span>
</div>
<div className="hidden md:block w-px h-4 bg-white/20"></div>
<span className="hidden md:inline font-normal font-geist">Over 3k+ clients transformed</span>
</div>
<p className="sm:text-xl leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.8s_forwards] text-lg text-white/80 font-geist opacity-0 mb-8" style={{transform: 'translateY(20px)', filter: 'blur(5px)'}}>Take the leap today to get in the best shape of your life. My mission is to support you on your fitness and mental journey to create long-lasting change.</p>
<div className="border-t border-white/10 pt-6 mb-6 opacity-0 animate-[fadeInScale_0.8s_ease-out_1s_forwards]" style={{transform: 'translateX(20px)'}}>
<div className="flex flex-wrap gap-4 gap-x-4 gap-y-4 items-center">
<div className="relative inline-block group rounded-full">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] hover:bg-white/15 text-white bg-white/10 opacity-0 border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] cursor-pointer" onclick="window.location.href='/signin'" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" role="button" style={{'--x': '199.6484375px', '--y': '12px', '--o': '0', filter: 'blur(8px)'}}>
<span className="inline-flex items-center gap-2 font-normal font-geist z-10 rounded-full relative">Apply now<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 rounded-full" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="rounded-full" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 rounded-full"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10 rounded-full"></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
<div className="w-px h-6 bg-white/20"></div>
<button className="inline-flex gap-2 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 animate-[fadeInSlide_0.8s_ease-out_1.4s_forwards] text-base font-normal text-white/90 font-geist opacity-0 border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='/programs'" role="button" style={{filter: 'blur(4px)'}}>
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
          See the method
        </button>
</div>
</div>
<div className="border-t border-white/10 pt-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_1.6s_forwards]" style={{transform: 'translateX(20px)'}}>
<p className="text-sm text-white/45 font-geist">Join today for 1:1 weight loss and nutrition coaching.</p>
</div>
</div>
<style className="">
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
              filter: blur(8px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0px);
            }
          }

          @keyframes slideInBlur {
            from {
              opacity: 0;
              transform: translateX(-30px);
              filter: blur(8px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0px);
            }
          }

          @keyframes fadeInSlide {
            from {
              opacity: 0;
              transform: translateX(20px);
              filter: blur(4px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0px);
            }
          }

          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.95);
              filter: blur(3px);
            }

            to {
              opacity: 1;
              transform: scale(1);
              filter: blur(0px);
            }
          }
        </style>
</div>
</div>
</section>
<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">

<div className="text-center max-w-3xl mr-auto ml-auto">
<span className="inline-flex items-center gap-2 text-[11px] uppercase animate-on-scroll text-white/70 tracking-widest font-geist bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{animation: '1s ease-out 0.1s 1 normal both running fadeSlideIn'}}><svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path className="" d="M22 4h-4"></path><circle className="" cx="4" cy="20" r="2"></circle></svg> Transformations</span>
<h2 className="sm:text-5xl animate-on-scroll text-3xl font-semibold tracking-tight font-geist mt-4" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>Transform like my clients</h2>
<p className="leading-relaxed animate-on-scroll text-white/70 font-geist mt-3" style={{animation: '1s ease-out 0.3s 1 normal both running fadeSlideIn'}}>Real results with real people. I have helped thousands of people achieve amazing results from all different starting points. Some people want to lose 10 pounds some want to lose 100 pounds.</p>
</div>

<div className="text-center mt-10">
<p className="text-[11px] text-white/50 tracking-widest font-geist animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>01 / 04</p>
</div>

<div className="mt-6">
<div className="overflow-hidden animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>
<img alt="Athletes training under coach guidance" className="aspect-[16/9] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6993d88e-6d02-49b3-99c7-67c20b9e4d2f_1600w.jpg" style={{}}/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-2xl"></div>
</div>
</div>

<div className="flex animate-on-scroll mt-6 justify-center" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition text-sm font-medium text-white/90 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" href="#">Apply Now</a>
</div>


</div>
</section>
<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">

<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 text-[11px] uppercase animate-on-scroll text-white/70 tracking-widest font-geist bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}><svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="weight" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="3"></circle><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"></path></svg> Custom Fitness Plan</span>
<h2 className="sm:text-5xl animate-on-scroll text-3xl font-semibold tracking-tight font-geist mt-4" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>Elite Training Protocol</h2>
<p className="leading-relaxed animate-on-scroll text-white/70 font-geist mt-3" style={{animation: '1s ease-out 0.3s 1 normal both running fadeSlideIn'}}>My coaching is custom built for you. My team includes Certified Personal Trainers (NASM, ISSA, ACSM), Sports Nutritionists (NCCA, ISSA), and Physical Therapists to get you specialized support you need.</p>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 animate-on-scroll mt-12 gap-x-6 gap-y-6" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="biceps-flexed" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"></path><path d="M15 14a5 5 0 0 0-7.584 2"></path><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"></path></svg>
</div>
<p className="font-medium tracking-tight font-geist mt-3">Workout Tutorials</p>
<p className="text-sm text-white/60 font-geist mt-1">Whether you have a gym or not, watch me demonstrate exercises at every level.</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="lucide lucide-heart-handshake w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="heart-handshake" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762">
</path>
</svg>
</div>
<p className="font-medium tracking-tight font-geist mt-3">1:1 Coach Support</p>
<p className="text-sm text-white/60 font-geist mt-1">One-on-one communication with your coach.</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="users" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<p className="font-medium tracking-tight font-geist mt-3">Accountability Groups</p>
<p className="text-sm text-white/60 font-geist mt-1">Join a community of others looking to achieve their fitness goals.</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="banana" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"></path><path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"></path></svg>
</div>
<p className="font-medium tracking-tight font-geist mt-3">Personalized Nutrition</p>
<p className="text-sm text-white/60 font-geist mt-1">Every client gets a nutrition plan customized for their specific life situation.</p>
</div>
</div><div className="flex animate-on-scroll mt-8 justify-center" style={{animation: 'fadeSlideIn 1.0s ease-out 0.9s both'}}>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition text-sm font-medium text-white/90 font-geist border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" href="#">Apply Now</a>
</div></div>
</section>
<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<p className="uppercase text-xs text-white/50 tracking-widest font-geist" style={{}}>Food logging and workout app</p>
<h2 className="sm:text-5xl text-3xl font-semibold tracking-tight font-geist mt-3">I have developed the best fitness app you have ever seen</h2>
<p className="leading-relaxed text-white/70 font-geist mt-4">I spent months pouring over every feature in the app to dial in a custom experience for you. I am confident you will love using it as much as I do.</p>
<div className="mt-8 space-y-3">

<div className="group flex hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur items-center justify-between animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center sm:w-9 bg-white/5 w-16 h-9 border-white/10 border rounded-lg">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="scan-barcode" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 7v10"></path><path d="M12 7v10"></path><path d="M17 7v10"></path></svg>
</span>
<div className="">
<p className="font-medium tracking-tight font-geist">Instant food logging</p>
<p className="text-sm text-white/60 font-geist">Simply talk out loud and the app searches the databasee for you</p>
</div>
</div>
</div>

<div className="group flex hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur items-center justify-between animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center sm:w-9 bg-white/5 w-16 h-9 border-white/10 border rounded-lg">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="video" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</span>
<div className="">
<p className="font-medium tracking-tight font-geist">Video guided workouts</p>
<p className="text-sm text-white/60 font-geist">Follow along without the guesswork</p>
</div>
</div>
</div>

<div className="group flex hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur items-center justify-between animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center sm:w-9 bg-white/5 w-16 h-9 border-white/10 border rounded-lg">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="chart-area" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"></path></svg>
</span>
<div className="">
<p className="font-medium tracking-tight font-geist">Log progress</p>
<p className="text-sm text-white/60 font-geist">Integrate your connect scale, wearables, and Apple Health for a seamless experience</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<div className="relative overflow-hidden rounded-2xl border border-white/10">
<img alt="Focused athlete during recovery with serum dropper" className="aspect-square w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10a44c44-ef78-4c36-aa57-e016e3ef9a39_1600w.jpg" style={{}}/>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>

<div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur px-3 py-2">
<svg className="lucide lucide-gauge h-4 w-4 text-white/90" data-lucide="gauge" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m12 14 4-4"></path>
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
</svg>
<span className="text-xs font-medium text-white/90 font-geist">Readiness 87%</span>
</div>
<div className="absolute bottom-4 left-4 flex flex-col gap-2">
<div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur px-3 py-2">
<svg className="lucide lucide-activity w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="chart-scatter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle><circle cx="18.5" cy="5.5" fill="currentColor" r=".5"></circle><circle cx="11.5" cy="11.5" fill="currentColor" r=".5"></circle><circle cx="7.5" cy="16.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="14.5" fill="currentColor" r=".5"></circle><path d="M3 3v16a2 2 0 0 0 2 2h16"></path></svg>
<span className="text-xs font-medium text-white/90 font-geist">Weight -12 lbs</span>
</div>
<div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur px-3 py-2">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="chart-pie" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span className="text-xs font-medium text-white/90 font-geist">ORM +35 lbs</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-6 pl-6">
<div className="mb-10 flex items-end justify-between gap-6">
<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-geist">Meet the Coaches</h2>
<p className="mt-2 text-white/70 font-geist">World-class trainers dedicated to your progress.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/90 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition animate-on-scroll" href="#" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
          All coaches
        </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group overflow-hidden hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-2xl backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="relative h-56">
<img alt="Head coach — strength and conditioning" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6789185-8288-444d-b735-bb2e99496645_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<div className="">
<p className="text-lg font-medium font-geist tracking-tight">Avery Cole</p>
<p className="text-sm text-white/60 font-geist">Head Coach — S&amp;C</p>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Periodization</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Olympic Lifts</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Power</span>
</div>
</div>
</div>

<div className="group overflow-hidden hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-2xl backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="relative h-56">
<img alt="Hypertrophy specialist" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/578af862-1f22-4fc5-80fa-63d65b09b74b_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<div className="">
<p className="text-lg font-medium font-geist tracking-tight">Riley Park</p>
<p className="text-sm text-white/60 font-geist">Hypertrophy Specialist</p>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Volume Tuning</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Nutrition</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Recovery</span>
</div>
</div>
</div>

<div className="group overflow-hidden hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-2xl backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="relative h-56">
<img alt="Conditioning and mobility" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00552811-c9ca-4219-a1c3-c56163ce4db1_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<div className="">
<p className="text-lg font-medium font-geist tracking-tight">Jordan Lee</p>
<p className="text-sm text-white/60 font-geist">Conditioning &amp; Mobility</p>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">HIIT</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Mobility</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Breathwork</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 animate-on-scroll relative" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6">
<div className="mb-8 flex items-end justify-between gap-6">
<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<h2 className="sm:text-4xl text-3xl font-semibold tracking-tight font-geist" style={{}}>Join the family today</h2>
<p className="text-white/70 font-geist mt-2">We are excited for you to join our family.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="hover:bg-white/10 transition-colors bg-white/5 h-full border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="flex items-center gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="scroll-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12h-5"></path><path d="M15 8h-5"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></svg>
</div>
<div className="">
<p className="text-lg font-medium tracking-tight font-geist">Complete the form</p>
<p className="text-sm text-white/60 font-geist">subtitle</p>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Periodized compound lifts</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> RPE-based progression</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> 3–4 days/week</li>
</ul>
<div className="mt-5">
<button className="inline-flex hover:bg-white/10 transition text-sm font-medium text-white/90 border-white/10 border rounded-full pt-2 pr-3.5 pb-2 pl-3.5 gap-x-2 gap-y-2 items-center">Apply Now</button>
</div>
</div>

<div className="hover:bg-white/10 transition-colors bg-white/5 h-full border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="flex items-center gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="message-circle-more" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="M8 12h.01"></path><path d="M12 12h.01"></path><path d="M16 12h.01"></path></svg>
</div>
<div className="">
<p className="text-lg font-medium tracking-tight font-geist">Wait to be contacted</p>
<p className="text-sm text-white/60 font-geist">subtitle</p>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Volume and intensity blocks</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Isolation precision</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> 5 days/week</li>
</ul>
</div>

<div className="hover:bg-white/10 transition-colors bg-white/5 h-full border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>
<div className="flex items-center gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="lucide lucide-wind w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
</div>
<div className="">
<p className="text-lg font-medium tracking-tight font-geist">You are all set</p>
<p className="text-sm text-white/60 font-geist">subtitle</p>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Zone 2 + intervals</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Mobility integration</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> 3 days/week</li>
</ul>
</div>
</div>
</div>
</section>
<footer className="relative z-20 border-white/10 border-t">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-cover rounded bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d9f4e18-65b6-4e9a-8ccb-304b48a692cc_320w.png)]" href="#" style={{}}></a>
<p className="text-sm text-white/60 font-geist mt-4">Join the Faultline Fitness family today for life-changing fitness and nutrition coaching.</p>
<form className="mt-6 flex items-center gap-2">
<input className="flex-1 rounded-full bg-white/5 border border-white/10 px-3.5 py-2 text-sm text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 font-geist" placeholder="Email address" type="email"/>
<button className="inline-flex items-center gap-2 text-sm font-medium text-white/90 border border-white/10 rounded-full px-3.5 py-2 hover:bg-white/10 transition font-geist">
            Subscribe
            
          </button>
</form>
<p className="text-xs text-white/45 font-geist mt-2">Unsubscribe anytime.</p>
</div>


<div className="">
<p className="text-xs uppercase tracking-widest text-white/50 font-geist">Resources</p>
<ul className="mt-3 space-y-2">
<li className=""><a className="hover:text-white/90 transition text-sm text-white/70 font-geist" href="#">Meet our Coaches</a></li>
<li className=""><a className="hover:text-white/90 transition text-sm text-white/70 font-geist" href="#">See client transformations</a></li>
</ul>
</div>

<div className="">
<p className="uppercase text-xs text-white/50 tracking-widest font-geist">Company</p>
<ul className="mt-3 space-y-2">
<li className=""><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#">About</a></li>
<li className=""><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<p className="text-xs text-white/50 font-geist">© 2025 alwayscoach. All rights reserved.</p>
<div className="flex flex-wrap items-center gap-4">
<a className="text-xs text-white/60 hover:text-white/90 transition font-geist" href="#">Terms</a>
<span className="w-px h-3 bg-white/15"></span>
<a className="text-xs text-white/60 hover:text-white/90 transition font-geist" href="#">Privacy</a>
<span className="w-px h-3 bg-white/15"></span>
<a className="text-xs text-white/60 hover:text-white/90 transition font-geist" href="#">Cookies</a>
<span className="w-px h-3 bg-white/15"></span>
<a className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white transition font-geist" href="#">
            Status
            <svg className="lucide h-3 w-3" data-lucide="activity" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2">
</path>
</svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

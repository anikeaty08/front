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


  /* 
    Sequence animation on scroll when visible. Usage:
    1) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
  */
  (function () {
    // Inject CSS for paused/running states
    const style = document.createElement("style");
    style.textContent = `
      /* Default: paused */
      .animate-on-scroll { animation-play-state: paused !important; }
      /* Activated by JS */
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
        window.__inViewIO.observe(el); // observing twice is a no-op
      });
    };

    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
  })();



  (function() {
      const mobileMenuToggle = document.getElementById('mobileMenuToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      const closeMobile = document.getElementById('closeMobile');
      
      if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
          e.preventDefault();
          mobileMenu.classList.remove('hidden');
          if (typeof lucide !== 'undefined') {
            setTimeout(() => lucide.createIcons(), 10);
          }
        });
      }
      
      if (closeMobile && mobileMenu) {
        closeMobile.addEventListener('click', function() {
          mobileMenu.classList.add('hidden');
        });
        
        mobileMenu.addEventListener('click', function(e) {
          if (e.target === mobileMenu) {
            mobileMenu.classList.add('hidden');
          }
        });
      }
      
      // Close menu when clicking nav links
      const mobileNavLinks = mobileMenu?.querySelectorAll('a');
      if (mobileNavLinks) {
        mobileNavLinks.forEach(link => {
          link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
          });
        });
      }
    })();



          let currentSlide = 0;
          const totalSlides = 2;
          const carousel = document.getElementById('testimonialCarousel');
          const indicators = document.querySelectorAll('.carousel-indicator');
          const prevBtn = document.getElementById('prevBtn');
          const nextBtn = document.getElementById('nextBtn');

          function updateCarousel() {
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
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
          nextBtn.addEventListener('click', nextSlide);
          prevBtn.addEventListener('click', prevSlide);
          indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
          });
          setInterval(nextSlide, 6000);
        


      // Initialize Lucide icons
      lucide.createIcons();

      // Dynamic year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu toggling
      const mobileBtn = document.querySelector('nav .md\\:hidden');
      const mobileMenu = document.getElementById('mobileMenu');
      const closeMobile = document.getElementById('closeMobile');

      if (mobileBtn && mobileMenu && closeMobile) {
        mobileBtn.addEventListener('click', (e) => {
          e.preventDefault();
          mobileMenu.classList.remove('hidden');
          setTimeout(() => lucide.createIcons(), 10);
        });
        closeMobile.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
        mobileMenu.addEventListener('click', (e) => {
          if (e.target === mobileMenu) mobileMenu.classList.add('hidden');
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
      

<div className="aura-background-component -z-10 w-full h-[1040px] absolute top-0" style={{}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="vTTCp5g4cVl9nwjlT56Z"></div></div>

<style className="">
  /* 
    Sequence animation intro. Usage:
    1) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both]
  */
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

<header className="relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<nav className="flex mt-6 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d45e1ed5-9c50-4e62-a4eb-cfbc125c8210_1600w.png)] bg-cover rounded" data-element-id="aura-emg86nmla" href="/"></a>
<div className="hidden md:flex md:gap-x-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-x-2 gap-y-1 items-center">
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="#features">Features</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#community">Community</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#pricing">Pricing</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#faq">Support</a>
<div className="relative inline-block group text-xs rounded-full">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" style={{'--x': '199.6484375px', '--y': '12px', '--o': '0'}}>
<span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist" style={{}}>Download</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10 text-xs rounded-full" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 text-xs rounded-full" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
<button className="md:hidden inline-flex text-sm font-medium font-geist bg-white/5 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobileMenuToggle">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
    Menu
  </button>

</nav>

<section className="z-10 sm:pt-20 md:pt-64 md:pb-32 text-center max-w-5xl mr-auto ml-auto pt-20 pb-32 relative">

<div className="flex [animation:fadeSlideIn_1s_ease-out_0.1s_both] mb-6 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex -space-x-3">
<img alt="User 1" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ba5e679b-afdd-4900-b229-21fadbbb7107_320w.webp"/>
<img alt="User 2" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5c48395a-230d-4e2a-a017-84d6e79485f6_320w.webp"/>
<img alt="User 3" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46e6b3f0-588b-48b7-bf03-113640abac90_320w.webp"/>
<img alt="User 4" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e609d3b8-62f1-4b0b-afd1-81402d269b00_320w.webp"/>
<img alt="User 5" className="ring-2 ring-black/60 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d0ac812a-8d5f-4f8f-9db5-c35cd902357d_320w.jpg"/>
</div>
<div className="flex flex-col items-start opacity-50">
<div className="flex items-center">
<svg className="lucide lucide-star w-[16px] h-[16px] fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star fill-current w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star fill-current w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-1 text-xs font-medium text-white/70 font-geist">4.8 on the App Store • 300k+ members</p>
</div>
</div>
<h1 className="sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] text-4xl tracking-tighter font-geist opacity-0 max-w-5xl mr-auto ml-auto" style={{}}>
            Share photos that feel closer.
          </h1>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal text-white/70 font-geist max-w-2xl mt-6 mr-auto ml-auto">
            Beam makes it effortless to capture, relive, and share moments with the people who matter—without the noise. Original quality, live albums, and private by default.
          </p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-3 gap-y-3 items-center justify-center" id="download">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center">

<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Download for iOS</span>

<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md font-geist">Try for free</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</button>
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-base font-medium text-white/90 bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur font-geist" href="#">
              
              Watch demo
            </a>
</div>

<div className="relative mt-12">
<div className="relative mx-auto max-w-5xl">
</div>
</div>
</section>
</div>
</header>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-24 mr-auto ml-auto pr-6 pb-16 pl-6 relative">
<p className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-white/50 text-center mb-6 font-geist">Featured in</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d052699d-f578-4c01-9806-f5b6c8609489_320w.png)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3185425e-0207-434a-9554-cdb5bd455ea5_320w.png)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6c26c041-308e-4034-9227-5a6c57d94f4d_1600w.png)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8de253ef-3c06-4a22-8e14-1a6a9d8580d5_320w.png)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7d3f4a52-05b5-4539-987a-d4b1ff330ef1_1600w.png)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e561d59c-a675-431e-a035-187a88fbe4c2_1600w.png)] bg-cover rounded" href="#"></a>
</div>
</section>

<section className="overflow-hidden relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid md:grid-cols-2 gap-x-10 gap-y-10 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl md:text-5xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll font-geist tracking-tighter" style={{}}>Your photos, beautifully organized and always yours.</h2>
<p className="mt-4 text-base text-white/70 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll font-geist">Beam keeps your collection in original quality, auto‑curates your best shots, and makes sharing with family and friends effortless—without ads or clutter.</p>
<div className="flex [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll mt-6 gap-x-3 gap-y-3 items-center">
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-sm font-medium bg-white/5 border-white/10 border rounded-lg pt-2 pr-4 pb-2 pl-4 backdrop-blur font-geist" href="#">
<svg className="lucide lucide-film h-4 w-4" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
                See how it works
              </a>
<a className="inline-flex items-center gap-2 hover:bg-emerald-300 transition text-sm font-medium text-black bg-emerald-400 rounded-lg pt-2 pr-4 pb-2 pl-4 font-geist" href="#download">
<svg className="lucide lucide-download-cloud h-4 w-4" data-lucide="download-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8l-4-4"></path><path d="m12 21 4-4"></path><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"></path></svg>
                Get the app
              </a>
</div>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll relative">
<img alt="Gallery preview" className="aspect-[4/3] w-full object-cover border-white/10 border rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b0ec50b9-39d2-4e60-9d17-f3928794a5c3_1600w.webp"/>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6 relative" id="features">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">What you get</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll" style={{}}>Features built for real life</h2>
<p className="mt-3 text-base text-white/70 font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">Crisp quality, fast sharing, and thoughtful privacy. Everything just works—so you can stay in the moment.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="relative">
<img alt="Live Albums" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5badae71-a5f7-4201-aee1-3b316e682fb0_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
</div>
<div className="p-5 sm:p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-200 font-geist">NEW</span>
<span className="text-xs text-white/60 font-geist">Live Albums</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl font-geist tracking-tighter" style={{}}>Albums that update themselves</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 font-geist">Create a Beam and invite friends—new shots auto‑appear for everyone. Perfect for trips, events, and shared memories.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Invite friends
              </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-black bg-emerald-400 rounded-lg px-4 py-2 hover:bg-emerald-300 transition font-geist" href="#download">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Start a Beam
              </a>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
                Private by default
              </h3>
<span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-200 font-geist">NEW</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Share with the people you choose. No ads, no public follower counts, no weird DMs.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Privacy UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/65113ce9-a580-4434-aa12-2253604447d9_800w.jpg"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
                Original quality
              </h3>
<span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/15 px-2 py-0.5 text-[11px] font-medium text-sky-200 font-geist">HDR</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Beam preserves detail, color, and metadata—no more crushed, blurry sends.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Quality comparison" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b1ea7f91-6fdb-4ff8-ad33-2990e77b1b48_800w.webp"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
              Smart curation
              <span className="ml-2 inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/15 px-2 py-0.5 text-[11px] font-medium text-purple-200 font-geist">AI</span>
</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Beam suggests highlights and creates recap reels automatically.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Curation UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/57cac1f5-e6a1-4abb-b269-708e893cfb51_800w.jpg"/>
</div>
</div>
</div>

<div className="overflow-hidden bg-white/5 border-white/10 border rounded-2xl relative [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
              Lightning fast sharing
            </h3>
<p className="mt-2 text-sm text-white/70 font-geist">Send albums in seconds with smart background upload and offline support.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Speed UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/07790607-7723-4ad4-a2f9-0c434f5a1dbb_800w.webp"/>
</div>
</div>
</div>

<div className="overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
              Seamless collaboration
            </h3>
<p className="mt-2 text-sm text-white/70 font-geist">Everyone in your Beam can contribute—perfect for events, trips, and group memories.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Collaboration UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46e6b3f0-588b-48b7-bf03-113640abac90_800w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2fe969b3-d065-423f-92fe-fa71f1bcfe03_3840w.jpg)] bg-cover relative" id="community">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">

<div className="max-w-4xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Community</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 font-geist tracking-tighter" style={{}}>What people love about Beam.</h2>
<p className="mt-4 text-base text-white/70 font-geist">Real stories from everyday photographers, families, and creators.</p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#">
              Browse community gallery
            </a>
</div>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll mt-10 relative">
<div className="overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex transition-transform duration-500 ease-out" id="testimonialCarousel" style={{transform: 'translateX(-100%)'}}>

<div className="w-full flex-shrink-0">
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Ava" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7c7645fc-7cc0-4375-9c13-78e16a870b00_320w.jpg"/>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Ava Martinez</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Parent &amp; organizer</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"We made a Beam for our kid's soccer team—parents drop photos in and everyone gets instant highlights. It just works."</p>
</div>

<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Leo" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a25f67d8-f1c7-4daf-95c2-1a50d5a327c3_320w.webp"/>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Leo Park</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Travel photographer</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"No compression, no mess. My friends finally see trips the way I shot them."</p>
</div>

<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Maya" className="ring-2 ring-black/60 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/50f0bb10-f07d-4eb0-af6f-f89b9bccf411_320w.webp"/>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Maya Singh</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Creator</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"Beam's recap reels are so good I barely need to edit anymore."</p>
</div>
</div>
</div>

<div className="flex-shrink-0 w-full">
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="Noah" className="ring-black/60 ring-2 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5c48395a-230d-4e2a-a017-84d6e79485f6_320w.webp"/>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Noah Kim</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Designer</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"The privacy model is refreshing. Sharing feels intentional again."</p>
</div>

<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="Emma" className="ring-2 ring-black/60 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a8cacf3c-08e1-4aff-a935-dfb0346d5671_320w.webp"/>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Emma Thompson</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Event planner</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"We used Beam for our wedding week—every guest's photos, one beautiful album."</p>
</div>

<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="Riley" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e609d3b8-62f1-4b0b-afd1-81402d269b00_320w.webp"/>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Riley Chen</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Coach</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"Team highlights by Monday morning. Parents love it, players love it."</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between mt-6">
<button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-white/70 hover:text-white transition-colors" id="prevBtn">
<svg className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="flex items-center gap-2">
<button className="carousel-indicator w-2 h-2 rounded-full transition-all duration-300" data-slide="0"></button>
<button className="carousel-indicator w-2 h-2 rounded-full transition-all duration-300" data-slide="1"></button>
</div>
<button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-white/70 hover:text-white transition-colors" id="nextBtn">
<svg className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

</div>
</section>

<section className="sm:p-8 sm:ml-8 sm:mr-8 sm:mb-10 mt-10 mr-8 mb-10 ml-8 pt-6 pr-6 pb-6 pl-6" id="pricing">
<div className="relative">

<div className="relative max-w-5xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="text-xs font-normal font-geist">Pricing</span>
</div>
<h2 className="text-[40px] sm:text-6xl leading-[0.95] text-white mt-4 font-geist tracking-tighter" style={{}}>Simple, fair plans</h2>
<p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-geist">
            Start free. Upgrade to Beam+ for original quality backups, longer reels, and more live albums.
          </p>
</div>

<div className="relative max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 10% 0%, rgba(56,189,248,0.14) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div></div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Most Popular</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl text-white font-medium tracking-tight font-geist">Free</h3>
<div className="mt-3 flex items-end justify-center gap-3">
<p className="text-4xl sm:text-5xl text-white font-geist tracking-tighter" style={{}}>$0</p>
<span className="text-white/70 text-sm mb-1 font-geist">/ forever</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
                Everything to get started with friends and family.
              </p>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">2 Live Albums</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">720p Reels</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Private sharing</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Smart curation</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Basic backup</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist">iOS widgets</span>
</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-emerald-400 text-black text-sm font-medium hover:bg-emerald-300 transition font-geist" href="#download">
              Get started
              <svg className="lucide lucide-arrow-up-right w-4.5 h-4.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 90% -10%, rgba(168,85,247,0.16) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div></div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Recommended</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl text-white font-medium tracking-tight font-geist">Beam+</h3>
<div className="mt-3 flex items-end justify-center gap-2">
<p className="text-4xl sm:text-5xl text-white font-geist tracking-tighter" style={{}}>$4.99</p>
<span className="text-white/70 text-sm mb-1 font-geist">/ month</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
                Original quality uploads, longer reels, and more live albums.
              </p>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">Unlimited Live Albums</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">4K Reels</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Original quality backups</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Advanced AI search</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Shared journals</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80 font-geist">Priority support</span>
</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400 text-black text-sm font-medium hover:from-emerald-300 hover:to-sky-300 transition font-geist" href="#download">
              Upgrade to Beam+
              <svg className="lucide lucide-arrow-up-right w-4.5 h-4.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</article>
</div>

<p className="mt-6 text-center text-xs text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">Prices in USD. Cancel anytime. Some features require iOS 16+.</p>
</div>
</section>

<section className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/278bbef6-c861-4ed8-b799-a4713ff032b4_3840w.jpg)] bg-cover relative" id="faq">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="max-w-3xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Support</span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter" style={{}}>Answers to common questions</h2>
<p className="mt-3 text-base text-white/70 font-geist">Can't find what you're looking for? Email us at support@beam.app.</p>
</div>
<div className="mt-10 max-w-3xl mx-auto space-y-3 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<details className="group sm:p-5 bg-white/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">How private is Beam?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Albums are private by default. You control who can view or contribute, and there are no public feeds or follower counts.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">Do photos keep their original quality?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Yes. With Beam+, we store and share in original quality, preserving HDR, Live Photos metadata, and EXIF where applicable.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">Can Android friends view my albums?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Absolutely. Shared links work on any device. Contributors need the iOS app, but viewers can enjoy albums on the web.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">What happens if I cancel Beam+?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Your account reverts to Free features. Your photos remain yours—you can always download your content.</p>
</details>
</div>
<div className="mt-8 text-center [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#download">
            Contact support
            
          </a>
</div>
</div>
</section>


<div className="fixed z-50 hidden top-0 right-0 bottom-0 left-0" id="mobileMenu">
<div className="bg-black/60 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-lg"></div>
<div className="text-white bg-white/5 border-white/10 border rounded-2xl mt-16 mr-4 ml-4 relative">
<div className="flex border-white/10 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[80px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d45e1ed5-9c50-4e62-a4eb-cfbc125c8210_1600w.png)] bg-cover rounded" href="/"></a>
<button aria-label="Close menu" className="inline-flex hover:bg-white/10 transition bg-white/5 w-9 h-9 border-white/10 border rounded-lg items-center justify-center" id="closeMobile">
<svg className="lucide lucide-x w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="pt-3 pr-4 pb-3 pl-4">
<a className="block hover:bg-white/10 text-white/90 font-geist rounded-lg pt-2 pr-3 pb-2 pl-3" href="/#features">Features</a>
<a className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10 font-geist" href="#community">Community</a>
<a className="block hover:bg-white/10 text-white/90 font-geist rounded-lg pt-2 pr-3 pb-2 pl-3" href="#pricing">Pricing</a>
<a className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10 font-geist" href="#faq">Support</a>
<a className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-3 py-2 text-sm font-medium text-black hover:bg-emerald-300 transition font-geist" href="#download">
            Download for iOS
            <svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</nav>
</div>
</div>

<footer className="xl:mt-0 border-white/10 border-t mt-10 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<a className="inline-flex items-center justify-center bg-center w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d45e1ed5-9c50-4e62-a4eb-cfbc125c8210_1600w.png)] bg-cover rounded" href="#"></a>
<p className="mt-4 text-sm text-white/70 max-w-md font-geist">Beam is a thoughtful, private way to share photos with the people who matter—original quality, live albums, and effortless highlights.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 font-geist" href="#download">
                Get the app
                
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 font-geist" href="#community">
                Community
                
              </a>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Product</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#features">Features</a></li>
<li><a className="hover:text-white font-geist" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white font-geist" href="#faq">Support</a></li>
<li><a className="hover:text-white font-geist" href="#">Changelog</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#">About</a></li>
<li className=""><a className="hover:text-white font-geist" href="#">Careers</a></li>
<li className=""><a className="hover:text-white font-geist" href="#">Press</a></li>
<li className=""><a className="hover:text-white font-geist" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-white/50 font-geist">© <span className="font-geist" id="year">2025</span> Beam Labs, Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-white/60">
<a className="hover:text-white font-geist" href="#">Privacy</a>
<a className="hover:text-white font-geist" href="#">Terms</a>
<a className="hover:text-white font-geist" href="#">Status</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

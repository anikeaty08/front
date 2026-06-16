import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


  /* 
    Sequence animation on scroll when visible.
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
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 w-full h-[1040px] absolute top-0" style={{}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="vTTCp5g4cVl9nwjlT56Z"></div></div>
<style className="">
  /* 
    Sequence animation intro.
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
<a className="text-xl font-bold tracking-tighter flex items-center gap-2 font-geist" data-element-id="aura-emg86nmla" href="/">
<iconify-icon className="text-white" height="24" icon="solar:camera-minimalistic-linear" width="24"></iconify-icon>
    Optic
  </a>
<div className="hidden md:flex md:gap-x-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-x-2 gap-y-1 items-center">
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="#reviews">Reviews</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#marketplace">Marketplace</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#pricing">Membership</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#faq">FAQ</a>
<div className="relative inline-block group text-xs rounded-full">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" style={{-X: '199.6484375px', -Y: '12px', -O: '0'}}>
<span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist" style={{}}>Join Community</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10 text-xs rounded-full" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 text-xs rounded-full" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
<button className="md:hidden inline-flex text-sm font-medium font-geist bg-white/5 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobileMenuToggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
    Menu
  </button>

</nav>

<section className="z-10 sm:pt-20 md:pt-64 md:pb-32 text-center max-w-5xl mr-auto ml-auto pt-20 pb-32 relative">

<div className="flex [animation:fadeSlideIn_1s_ease-out_0.1s_both] mb-6 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex -space-x-3">
<img alt="User 1" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba5e679b-afdd-4900-b229-21fadbbb7107_320w.webp"/>
<img alt="User 2" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c48395a-230d-4e2a-a017-84d6e79485f6_320w.webp"/>
<img alt="User 3" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46e6b3f0-588b-48b7-bf03-113640abac90_320w.webp"/>
<img alt="User 4" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e609d3b8-62f1-4b0b-afd1-81402d269b00_320w.webp"/>
<img alt="User 5" className="ring-2 ring-black/60 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0ac812a-8d5f-4f8f-9db5-c35cd902357d_320w.jpg"/>
</div>
<div className="flex flex-col items-start opacity-50">
<div className="flex items-center">
<iconify-icon className="text-white fill-current" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-white fill-current" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-white fill-current" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-white fill-current" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="text-white fill-current" height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="mt-1 text-xs font-medium text-white/70 font-geist">Trusted by 50k+ photographers</p>
</div>
</div>
<h1 className="sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] text-4xl tracking-tighter font-geist opacity-0 max-w-5xl mr-auto ml-auto" style={{}}>
            Discover your next favorite lens.
          </h1>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal text-white/70 font-geist max-w-2xl mt-6 mr-auto ml-auto">
            The home for glass obsessives. Unbiased community reviews, high-res sample galleries, and a verified marketplace for vintage and modern optics.
          </p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-3 gap-y-3 items-center justify-center" id="download">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center">

<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Find a Lens</span>

<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md font-geist">Start Search</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</button>
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-base font-medium text-white/90 bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur font-geist" href="#marketplace">
              Sell Gear
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
<p className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-white/50 text-center mb-6 font-geist">Community members from</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d052699d-f578-4c01-9806-f5b6c8609489_320w.png)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3185425e-0207-434a-9554-cdb5bd455ea5_320w.png)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c26c041-308e-4034-9227-5a6c57d94f4d_1600w.png)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8de253ef-3c06-4a22-8e14-1a6a9d8580d5_320w.png)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d3f4a52-05b5-4539-987a-d4b1ff330ef1_1600w.png)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e561d59c-a675-431e-a035-187a88fbe4c2_1600w.png)] bg-cover rounded" href="#"></a>
</div>
</section>

<section className="overflow-hidden relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid md:grid-cols-2 gap-x-10 gap-y-10 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl md:text-5xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll font-geist tracking-tighter" style={{}}>Stop guessing.<br/>Start shooting.</h2>
<p className="mt-4 text-base text-white/70 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll font-geist">Don't rely on specs alone. Optic connects you with real-world performance, verified sample images, and technical breakdowns from people who actually own the gear.</p>
<div className="flex [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll mt-6 gap-x-3 gap-y-3 items-center">
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-sm font-medium bg-white/5 border-white/10 border rounded-lg pt-2 pr-4 pb-2 pl-4 backdrop-blur font-geist" href="#">
<iconify-icon height="18" icon="solar:camera-minimalistic-linear" width="18"></iconify-icon>
                Browse Sample Galleries
              </a>
<a className="inline-flex items-center gap-2 hover:bg-emerald-300 transition text-sm font-medium text-black bg-emerald-400 rounded-lg pt-2 pr-4 pb-2 pl-4 font-geist" href="#download">
<iconify-icon height="18" icon="solar:user-plus-rounded-linear" width="18"></iconify-icon>
                Create Account
              </a>
</div>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll relative">
<img alt="Lens Comparison Interface" className="aspect-[4/3] w-full object-cover border-white/10 border rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0ec50b9-39d2-4e60-9d17-f3928794a5c3_1600w.webp"/>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6 relative" id="features">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">Platform Features</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll" style={{}}>Everything for the gear head</h2>
<p className="mt-3 text-base text-white/70 font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">From MTF charts to vintage glass hunting. Built by photographers, for photographers.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="relative">
<img alt="Lens Sample Gallery" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5badae71-a5f7-4201-aee1-3b316e682fb0_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
</div>
<div className="p-5 sm:p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-200 font-geist">UPDATED</span>
<span className="text-xs text-white/60 font-geist">Sample Galleries</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl font-geist tracking-tighter" style={{}}>See what the glass can do</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 font-geist">Browse thousands of uncompressed images filtered by aperture, camera body, and focal length. No more relying on compressed social media uploads.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#">
<iconify-icon height="16" icon="solar:gallery-wide-linear" width="16"></iconify-icon>
                View Gallery
              </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-black bg-emerald-400 rounded-lg px-4 py-2 hover:bg-emerald-300 transition font-geist" href="#download">
<iconify-icon height="16" icon="solar:upload-track-linear" width="16"></iconify-icon>
                Upload Shots
              </a>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll" id="marketplace">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
                Verified Marketplace
              </h3>
<span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-200 font-geist">SAFE</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Buy and sell with confidence. Every seller is ID verified and rated by the community.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Marketplace UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65113ce9-a580-4434-aa12-2253604447d9_800w.jpg"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
                RAW Analytics
              </h3>
<span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/15 px-2 py-0.5 text-[11px] font-medium text-sky-200 font-geist">PRO</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Deep dive into sharpness, vignette, and distortion profiles with downloadable RAW files.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Analytics Comparison" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1ea7f91-6fdb-4ff8-ad33-2990e77b1b48_800w.webp"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
              Compatibility Check
              <span className="ml-2 inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/15 px-2 py-0.5 text-[11px] font-medium text-purple-200 font-geist">AI</span>
</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Instant mount matching. Find out which adapter you need for that vintage Leica lens.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Mount Matcher UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57cac1f5-e6a1-4abb-b269-708e893cfb51_800w.jpg"/>
</div>
</div>
</div>

<div className="overflow-hidden bg-white/5 border-white/10 border rounded-2xl relative [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
              The Vintage Vault
            </h3>
<p className="mt-2 text-sm text-white/70 font-geist">Dedicated section for legacy glass, including radioactive element warnings and coating types.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Vintage Lens UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07790607-7723-4ad4-a2f9-0c434f5a1dbb_800w.webp"/>
</div>
</div>
</div>

<div className="overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
              Local Gear Swaps
            </h3>
<p className="mt-2 text-sm text-white/70 font-geist">Connect with local photographers to test lenses before you buy.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Map UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46e6b3f0-588b-48b7-bf03-113640abac90_800w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fe969b3-d065-423f-92fe-fa71f1bcfe03_3840w.jpg)] bg-cover relative" id="reviews">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">

<div className="max-w-4xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Community</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 font-geist tracking-tighter" style={{}}>What the pros are saying.</h2>
<p className="mt-4 text-base text-white/70 font-geist">Real stories from the Optic community about finding the perfect glass.</p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" href="#">
              Read all reviews
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
<img alt="Ava" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c7645fc-7cc0-4375-9c13-78e16a870b00_320w.jpg"/>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Ava Martinez</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Portrait Photographer</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"I finally found a mint condition 85mm f/1.2 through the marketplace. The seller was verified and the lens is perfect."</p>
</div>

<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Leo" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a25f67d8-f1c7-4daf-95c2-1a50d5a327c3_320w.webp"/>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Leo Park</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Street Photographer</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"The sample galleries are a lifesaver. Checking RAW files helped me decide against a lens that had too much coma."</p>
</div>

<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Maya" className="ring-2 ring-black/60 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50f0bb10-f07d-4eb0-af6f-f89b9bccf411_320w.webp"/>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Maya Singh</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Landscape Pro</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"Sold my entire kit here with 0% fees on the Pro plan. Much better than eBay or forums."</p>
</div>
</div>
</div>

<div className="flex-shrink-0 w-full">
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="Noah" className="ring-black/60 ring-2 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c48395a-230d-4e2a-a017-84d6e79485f6_320w.webp"/>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Noah Kim</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Cinematographer</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"The vintage vault is incredible. Found a rehoused Soviet lens that gives my footage a unique look."</p>
</div>

<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="Emma" className="ring-2 ring-black/60 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8cacf3c-08e1-4aff-a935-dfb0346d5671_320w.webp"/>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Emma Thompson</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Wildlife Shooter</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"Compatibility matcher saved me buying the wrong adapter for my Z9. Highly recommended tool."</p>
</div>

<div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="Riley" className="w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e609d3b8-62f1-4b0b-afd1-81402d269b00_320w.webp"/>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Riley Chen</p>
<p className="text-xs text-white/60 mt-0.5 font-geist">Hobbyist</p>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">"I love that I can filter sample images by aperture. It really shows the bokeh character."</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between mt-6">
<button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-white/70 hover:text-white transition-colors" id="prevBtn">
<iconify-icon height="20" icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="flex items-center gap-2">
<button className="carousel-indicator w-2 h-2 rounded-full transition-all duration-300" data-slide="0"></button>
<button className="carousel-indicator w-2 h-2 rounded-full transition-all duration-300" data-slide="1"></button>
</div>
<button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-white/70 hover:text-white transition-colors" id="nextBtn">
<iconify-icon height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
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
<span className="text-xs font-normal font-geist">Membership</span>
</div>
<h2 className="text-[40px] sm:text-6xl leading-[0.95] text-white mt-4 font-geist tracking-tighter" style={{}}>Join the community</h2>
<p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-geist">
            Browse and learn for free. Upgrade to Optic Pro to sell gear with 0% fees and access RAW analytics.
          </p>
</div>

<div className="relative max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 10% 0%, rgba(56,189,248,0.14) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div></div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Observer</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl text-white font-medium tracking-tight font-geist">Free</h3>
<div className="mt-3 flex items-end justify-center gap-3">
<p className="text-4xl sm:text-5xl text-white font-geist tracking-tighter" style={{}}>$0</p>
<span className="text-white/70 text-sm mb-1 font-geist">/ forever</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
                Perfect for research and browsing sample galleries.
              </p>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">Unlimited Browsing</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">Forum Access</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-emerald-400" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-sm text-white/90 font-geist">View sample galleries</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-emerald-400" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-sm text-white/90 font-geist">Buy from marketplace</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-emerald-400" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-sm text-white/90 font-geist">Upload up to 50 photos</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-emerald-400" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-sm text-white/80 font-geist">Basic compatibility check</span>
</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-emerald-400 text-black text-sm font-medium hover:bg-emerald-300 transition font-geist" href="#download">
              Get started
              <iconify-icon height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 90% -10%, rgba(168,85,247,0.16) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div></div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Recommended</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl text-white font-medium tracking-tight font-geist">Optic Pro</h3>
<div className="mt-3 flex items-end justify-center gap-2">
<p className="text-4xl sm:text-5xl text-white font-geist tracking-tighter" style={{}}>$5.99</p>
<span className="text-white/70 text-sm mb-1 font-geist">/ month</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
                For active traders and pixel peepers.
              </p>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">0% Fee Sales</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">RAW Downloads</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-emerald-400" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-sm text-white/90 font-geist">Sell gear with 0% commission</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-emerald-400" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-sm text-white/90 font-geist">Download original RAW files</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-emerald-400" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-sm text-white/90 font-geist">Advanced MTF Charts</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-emerald-400" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
</span>
<span className="text-sm text-white/80 font-geist">Priority Alerts for Rare Glass</span>
</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400 text-black text-sm font-medium hover:from-emerald-300 hover:to-sky-300 transition font-geist" href="#download">
              Upgrade to Pro
              <iconify-icon height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</article>
</div>

<p className="mt-6 text-center text-xs text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">Prices in USD. Cancel anytime. Verification required for selling.</p>
</div>
</section>

<section className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/278bbef6-c861-4ed8-b799-a4713ff032b4_3840w.jpg)] bg-cover relative" id="faq">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="max-w-3xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Support</span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter" style={{}}>Common Questions</h2>
<p className="mt-3 text-base text-white/70 font-geist">Can't find what you're looking for? Email us at support@optic.app.</p>
</div>
<div className="mt-10 max-w-3xl mx-auto space-y-3 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<details className="group sm:p-5 bg-white/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">How do you verify sellers?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">We use a combination of ID verification and community reputation. Sellers must link active portfolios or social profiles to be approved for the marketplace.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">Are the sample images edited?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">We flag all images. Users can upload "Straight out of Camera" JPEGs or RAW files. Edited photos are clearly marked so you know what you're looking at.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">Does Optic take a commission on sales?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Optic Pro members pay 0% fees on sales. Free accounts are charged a standard 5% transaction fee to cover payment processing and platform costs.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">Do you support analog/film gear?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Yes! We have a dedicated section for vintage glass and film bodies, including a database of lens mount adapters.</p>
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
<a className="text-lg font-bold flex items-center gap-2 font-geist" href="/">
<iconify-icon height="20" icon="solar:camera-minimalistic-linear" width="20"></iconify-icon>
            Optic
          </a>
<button aria-label="Close menu" className="inline-flex hover:bg-white/10 transition bg-white/5 w-9 h-9 border-white/10 border rounded-lg items-center justify-center" id="closeMobile">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<nav className="pt-3 pr-4 pb-3 pl-4">
<a className="block hover:bg-white/10 text-white/90 font-geist rounded-lg pt-2 pr-3 pb-2 pl-3" href="/#reviews">Reviews</a>
<a className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10 font-geist" href="#marketplace">Marketplace</a>
<a className="block hover:bg-white/10 text-white/90 font-geist rounded-lg pt-2 pr-3 pb-2 pl-3" href="#pricing">Membership</a>
<a className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10 font-geist" href="#faq">Support</a>
<a className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-3 py-2 text-sm font-medium text-black hover:bg-emerald-300 transition font-geist" href="#download">
            Join Community
            <iconify-icon height="18" icon="solar:user-plus-rounded-linear" width="18"></iconify-icon>
</a>
</nav>
</div>
</div>

<footer className="xl:mt-0 border-white/10 border-t mt-10 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<a className="text-xl font-bold tracking-tighter flex items-center gap-2 font-geist text-white" href="/">
<iconify-icon height="24" icon="solar:camera-minimalistic-linear" width="24"></iconify-icon>
              Optic
            </a>
<p className="mt-4 text-sm text-white/70 max-w-md font-geist">Optic is the premier community for lens enthusiasts. Buy, sell, and research glass with confidence using our verified marketplace and sample archives.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 font-geist" href="#download">
                Browse Lenses
                
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 font-geist" href="#community">
                Community Rules
                
              </a>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Platform</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#features">Marketplace</a></li>
<li><a className="hover:text-white font-geist" href="#pricing">Membership</a></li>
<li><a className="hover:text-white font-geist" href="#faq">Support</a></li>
<li><a className="hover:text-white font-geist" href="#">Lens Database</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#">About</a></li>
<li className=""><a className="hover:text-white font-geist" href="#">Partner Program</a></li>
<li className=""><a className="hover:text-white font-geist" href="#">Press</a></li>
<li className=""><a className="hover:text-white font-geist" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-white/50 font-geist">© <span className="font-geist" id="year">2025</span> Optic Inc. All rights reserved.</p>
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

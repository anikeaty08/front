import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      // Icons
      try { lucide.createIcons(); } catch (_) {}

      // Mobile menu
      const openBtn = document.getElementById('openMenu');
      const closeBtn = document.getElementById('closeMenu');
      const mobileMenu = document.getElementById('mobileMenu');
      const backdrop = document.getElementById('backdrop');

      function toggleMenu(show) {
        if (show) mobileMenu.classList.remove('hidden');
        else mobileMenu.classList.add('hidden');
      }
      openBtn?.addEventListener('click', () => toggleMenu(true));
      closeBtn?.addEventListener('click', () => toggleMenu(false));
      backdrop?.addEventListener('click', () => toggleMenu(false));

      // Year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      // Gallery controls
      const gallery = document.getElementById('gallery');
      document.getElementById('scrollPrev')?.addEventListener('click', () => {
        gallery?.scrollBy({ left: -300, behavior: 'smooth' });
      });
      document.getElementById('scrollNext')?.addEventListener('click', () => {
        gallery?.scrollBy({ left: 300, behavior: 'smooth' });
      });

      // Sticky Buy Bar
      const buyBar = document.getElementById('buyBar');
      const buySection = document.getElementById('buy');
      if (buyBar && buySection) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              buyBar.classList.add('hidden');
            } else {
              buyBar.classList.remove('hidden');
            }
          });
        }, { threshold: 0 });
        io.observe(buySection);
      }

      // Simple configurator state
      const config = { finish: 'Satin Silver', storage: '256GB' };
      const configText = document.getElementById('configText');
      const buyPreview = document.getElementById('buyPreview');

      function updateConfig() {
        if (configText) configText.textContent = config.finish + ' • ' + config.storage;
        // Swap preview image loosely based on finish
        if (!buyPreview) return;
        const map = {
          'Satin Silver': 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1920&auto=format&fit=crop',
          'Graphite': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1920&auto=format&fit=crop',
          'Deep Blue': 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1920&auto=format&fit=crop',
          'Pebble': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop'
        };
        buyPreview.src = map[config.finish] || map['Satin Silver'];
      }

      document.querySelectorAll('[data-finish]').forEach(btn => {
        btn.addEventListener('click', () => {
          config.finish = btn.getAttribute('data-finish');
          updateConfig();
        });
      });

      document.querySelectorAll('[data-storage]').forEach(btn => {
        btn.addEventListener('click', () => {
          config.storage = btn.getAttribute('data-storage');
          updateConfig();
        });
      });

      updateConfig();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
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


<div className="aura-background-component -z-10 xl:bg-black w-full h-[800px] absolute top-0"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="sx6OtkwOFbqONd0P4xRy"></div>
</div>

<header className="sticky z-50 bg-white/70 border-neutral-200/80 border-b top-0 backdrop-blur">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-14 flex items-center justify-between">

<div className="flex items-center gap-2 lg:gap-6">
<button aria-label="Open menu" className="lg:hidden p-2 rounded-md hover:bg-neutral-100" id="openMenu">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<a className="hidden lg:inline-block text-sm text-neutral-700 hover:text-black" href="#">Store</a>
<a className="hidden lg:inline-block text-sm text-neutral-700 hover:text-black" href="#">Products</a>
<a className="hidden lg:inline-block text-sm text-neutral-700 hover:text-black" href="#">Support</a>
</div>

<a className="absolute left-1/2 -translate-x-1/2 text-center" href="#">
</a><a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f5b8b020-7d09-41e8-981c-0cb3cac51c38_320w.png)] bg-cover rounded" href="#"></a>

<div className="flex items-center gap-1.5">
<button aria-label="Search" className="p-2 rounded-md hover:bg-neutral-100">
<svg className="lucide lucide-search h-5 w-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-label="Account" className="hidden sm:inline-flex p-2 rounded-md hover:bg-neutral-100">
<svg className="lucide lucide-user h-5 w-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button aria-label="Bag" className="p-2 rounded-md hover:bg-neutral-100">
<svg className="lucide lucide-shopping-bag h-5 w-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</button>
</div>
</div>
</div>

<nav className="border-neutral-200/80 border-t">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<ul className="flex items-center gap-6 overflow-x-auto py-3 text-sm text-neutral-700">
<li className=""><a className="hover:text-black whitespace-nowrap" href="#overview">Overview</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#design">Design</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#features">Features</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#tech-specs">Tech Specs</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#compare">Compare</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#buy">Buy</a></li>
</ul>
</div>
</nav>
</header>

<div className="fixed inset-0 z-50 hidden" id="mobileMenu">
<div className="absolute inset-0 bg-black/30" id="backdrop"></div>
<div className="ml-auto h-full w-80 max-w-[85%] bg-white shadow-xl p-6 flex flex-col">
<div className="flex items-center justify-between">
<span className="text-lg tracking-tight font-semibold">Menu</span>
<button aria-label="Close menu" className="p-2 rounded-md hover:bg-neutral-100" id="closeMenu">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<ul className="mt-6 space-y-4 text-neutral-800">
<li><a className="block hover:text-black" href="#overview">Overview</a></li>
<li><a className="block hover:text-black" href="#design">Design</a></li>
<li><a className="block hover:text-black" href="#features">Features</a></li>
<li><a className="block hover:text-black" href="#tech-specs">Tech Specs</a></li>
<li><a className="block hover:text-black" href="#compare">Compare</a></li>
<li><a className="block hover:text-black" href="#buy">Buy</a></li>
<li><a className="block hover:text-black" href="#">Support</a></li>
</ul>
<div className="mt-auto flex gap-3 pt-6 border-t border-neutral-200">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-neutral-800">
<svg className="lucide lucide-user h-4 w-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Account
          </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-300 text-sm font-medium hover:bg-neutral-50">
<svg className="lucide lucide-shopping-bag h-4 w-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> Bag
          </button>
</div>
</div>
</div>

<section className="relative">
<div className="overflow-hidden relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid lg:grid-cols-2 gap-10 sm:pt-20 lg:pt-28 pt-20 pb-14 gap-x-10 gap-y-10 items-center">
<div className="lg:text-left text-center">
<p className="sm:text-sm uppercase text-xs text-neutral-400 tracking-wide">New</p>
<h1 className="sm:text-5xl lg:text-9xl text-4xl font-semibold text-white tracking-tight mt-2 [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
                Flux One
              </h1>
<p className="sm:text-base lg:mx-0 text-sm text-neutral-400 max-w-xl mt-4 mr-auto ml-auto [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
                Precision design. Effortless power. A seamless experience from silicon to software—crafted to do everything you love, brilliantly.
              </p>
<div className="flex flex-col sm:flex-row lg:justify-start mt-6 gap-x-3 gap-y-3 justify-center [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<a className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-neutral-200" href="#buy">
                  Buy
                </a>
<a className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800" href="#">
<svg className="lucide lucide-play h-4 w-4 mr-2" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Watch film
                </a>
</div>
<div className="flex lg:justify-start [animation:fadeSlideIn_1s_ease-out_0.4s_both] text-xs text-neutral-500 mt-6 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex items-center gap-1">
<svg className="lucide lucide-cpu h-4 w-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                  Custom performance core
                </div>
<div className="hidden sm:flex gap-1 gap-x-1 gap-y-1 items-center">
<svg className="lucide lucide-battery h-4 w-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
                  All‑day battery
                </div>
</div>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.3s_both] relative">
<div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/3] overflow-hidden"><iframe allowfullscreen="" className="border-none w-full h-full absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" frameborder="0" loading="lazy" src="https://my.spline.design/hands3duicopycopy-Mfz99nDHITWMEC1ftp6TkNjI/"></iframe>
</div>
<div className="-bottom-3 sm:-bottom-4 -translate-x-1/2 text-xs text-neutral-400 bg-neutral-900 border-neutral-700 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute left-1/2 shadow-sm">
                Satin Silver • 128–512GB
              </div>
</div>
</div>
</div>
<div className="border-neutral-800 border-t">
<div className="sm:px-6 lg:px-8 [animation:fadeSlideIn_1s_ease-out_0.5s_both] max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-800">
<div className="flex gap-3 pt-6 pr-4 pb-6 pl-4 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-zap h-5 w-5 text-neutral-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<div className="">
<p className="text-sm font-medium text-white">Ultra‑fast</p>
<p className="text-xs text-neutral-400">Next‑gen chip</p>
</div>
</div>
<div className="flex gap-3 pt-6 pr-4 pb-6 pl-4 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-monitor-smartphone h-5 w-5 text-neutral-300" data-lucide="monitor-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></svg>
<div className="">
<p className="text-sm font-medium text-white">Pro display</p>
<p className="text-xs text-neutral-400">120Hz adaptive</p>
</div>
</div>
<div className="flex gap-3 pt-6 pr-4 pb-6 pl-4 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-camera h-5 w-5 text-neutral-300" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<div className="">
<p className="text-sm font-medium text-white">Advanced camera</p>
<p className="text-xs text-neutral-400">Computational</p>
</div>
</div>
<div className="flex xl:pl-4 xl:pt-6 xl:pb-6 xl:pr-4 pt-6 pr-4 pb-6 pl-4 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-shield-check h-5 w-5 text-neutral-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="">
<p className="text-sm font-medium text-white">Secure</p>
<p className="text-xs text-neutral-400">On‑device privacy</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 lg:py-28 pt-16 pb-16" id="design">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Minimal. Durable. Beautiful.</h2>
<p className="mt-4 text-sm sm:text-base text-neutral-600">
              Aerospace‑grade alloy, ceramic shield glass, and a precision unibody enclosure. Every edge, refined. Every surface, seamless.
            </p>
<ul className="mt-6 space-y-3 text-sm text-neutral-700">
<li className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="cube" style={{strokeWidth: '1.5'}}></i> Unibody chassis
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-droplets h-4 w-4" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg> IP68 water resistance
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-sprout h-4 w-4" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg> Recycled materials
              </li>
</ul>
</div>
<div className="lg:col-span-7">
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl overflow-hidden border border-neutral-200/80 bg-neutral-50">
<img alt="Materials" className="w-full h-64 sm:h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a7bd2085-6bb2-4d53-81fb-315f00278443_800w.jpg" style={{}}/>
</div>
<div className="rounded-xl overflow-hidden border border-neutral-200/80 bg-neutral-50">
<img alt="Crafted edges" className="w-full h-64 sm:h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/22229cb8-6aff-4444-bc9a-97e2e90f1e3c_800w.jpg" style={{}}/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200/80" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Power that adapts to you.</h2>
<p className="mt-4 text-sm sm:text-base text-neutral-600">
            Intelligent performance cores balance speed and efficiency. The display responds to content. The system anticipates your next move.
          </p>
</div>
<div className="mt-12 grid lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-neutral-200/80 bg-white overflow-hidden">
<div className="aspect-[16/10] bg-neutral-100">
<img alt="Display" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/76d46583-8c5b-4a6a-b54c-92de3808d630_800w.webp" style={{}}/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-neutral-700">
<svg className="lucide lucide-monitor h-5 w-5" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<p className="text-sm font-medium">Adaptive 120Hz</p>
</div>
<p className="mt-2 text-sm text-neutral-600">
                Ultra‑smooth scrolling and video with dynamic refresh that saves power when you're still.
              </p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200/80 bg-white overflow-hidden">
<div className="aspect-[16/10] bg-neutral-100">
<img alt="Camera" className="w-full h-full object-cover" src="https://cdn.midjourney.com/c6e759e7-ba9e-4e45-aba5-c23d7f5374c1/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-neutral-700">
<svg className="lucide lucide-aperture h-5 w-5" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<p className="text-sm font-medium">Pro camera system</p>
</div>
<p className="mt-2 text-sm text-neutral-600">
                Advanced optics and computational photography for detail, depth, and natural color.
              </p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200/80 bg-white overflow-hidden">
<div className="aspect-[16/10] bg-neutral-100">
<img alt="Performance" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7342a04a-fa8f-4f4a-b7ff-4bf3c2a0d6a7_800w.jpg" style={{}}/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-neutral-700">
<svg className="lucide lucide-gauge h-5 w-5" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<p className="text-sm font-medium">Custom silicon</p>
</div>
<p className="mt-2 text-sm text-neutral-600">
                Dedicated neural engine accelerates voice, photos, and on‑device intelligence—privately.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">A closer look.</h2>
<div className="hidden sm:flex items-center gap-2 text-sm text-neutral-700">
<svg className="lucide lucide-arrow-left h-4 w-4 cursor-pointer hover:text-black" data-lucide="arrow-left" fill="none" height="24" id="scrollPrev" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<svg className="lucide lucide-arrow-right h-4 w-4 cursor-pointer hover:text-black" data-lucide="arrow-right" fill="none" height="24" id="scrollNext" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2" id="gallery">
<div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl overflow-hidden border border-neutral-200/80 bg-neutral-50">
<img alt="Edge detail" className="w-full h-56 sm:h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a23ec79a-2d8a-4d65-ad8e-2cb9e1c27423_1600w.webp" style={{}}/>
<div className="p-4">
<p className="text-sm font-medium">Edge‑to‑edge glass</p>
<p className="text-xs text-neutral-600 mt-1">Smooth contours, durable by design.</p>
</div>
</div>
<div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl overflow-hidden border border-neutral-200/80 bg-neutral-50">
<img alt="Color finish" className="sm:h-72 w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/477ed4ec-5b4d-4ce8-8e6e-5e561d10eb5e_1600w.jpg" style={{}}/>
<div className="p-4">
<p className="text-sm font-medium">Ceramic shield</p>
<p className="text-xs text-neutral-600 mt-1">Micro‑crystalline structure for everyday life.</p>
</div>
</div>
<div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl overflow-hidden border border-neutral-200/80 bg-neutral-50">
<img alt="Camera island" className="w-full h-56 sm:h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ad88aaec-238a-4a07-a96d-07356ce1ce04_800w.jpg" style={{}}/>
<div className="p-4">
<p className="text-sm font-medium">Stabilized optics</p>
<p className="text-xs text-neutral-600 mt-1">Sharper photos in any light.</p>
</div>
</div>
<div className="snap-start shrink-0 w-80 sm:w-[28rem] rounded-xl overflow-hidden border border-neutral-200/80 bg-neutral-50">
<img alt="Display" className="sm:h-72 w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/76b5c842-5fa4-4057-8226-7649312209d2_1600w.jpg" style={{}}/>
<div className="p-4">
<p className="text-sm font-medium">True‑to‑life color</p>
<p className="text-xs text-neutral-600 mt-1">High contrast, extreme brightness.</p>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 lg:py-28 border-y bg-neutral-50 border-neutral-200/80 pt-16 pb-16" id="compare">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Find your One.</h2>
<p className="mt-3 text-sm sm:text-base text-neutral-600">Choose the performance and size that's right for you.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-neutral-200/80 bg-white p-6 flex flex-col">
<img alt="One Mini" className="w-full h-[400px] object-cover border-neutral-200/80 border rounded-lg" src="https://cdn.midjourney.com/60ad6d24-7203-459e-a612-8a4ee700af7b/0_0.png?w=800&amp;q=80" style={{}}/>
<h3 className="mt-4 text-lg tracking-tight font-semibold">One Mini</h3>
<p className="text-sm text-neutral-600 mt-1">Compact power. Pocket‑friendly.</p>
<ul className="mt-4 text-sm text-neutral-700 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-cpu h-4 w-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> 6‑core chip</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-monitor h-4 w-4" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg> 5.6" 90Hz</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-battery h-4 w-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg> Up to 20 hrs</li>
</ul>
<div className="mt-6 flex items-center justify-between">
<span className="text-sm font-medium">$699</span>
<a className="inline-flex items-center rounded-md bg-black text-white text-xs font-medium px-3 py-2 hover:bg-neutral-800" href="#buy">Buy</a>
</div>
</div>

<div className="rounded-2xl border-2 border-neutral-900 bg-white p-6 shadow-sm flex flex-col">
<img alt="One" className="w-full h-[400px] object-cover border-neutral-200/80 border rounded-lg" src="https://cdn.midjourney.com/4ab698a0-8c33-4095-9a44-5e2ddc41b279/0_0.png?w=800&amp;q=80"/>
<h3 className="mt-4 text-lg tracking-tight font-semibold">One</h3>
<p className="text-sm text-neutral-600 mt-1">The perfect balance for most people.</p>
<ul className="mt-4 text-sm text-neutral-700 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-cpu h-4 w-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> 8‑core chip</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-monitor h-4 w-4" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg> 6.1" 120Hz</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-battery h-4 w-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg> Up to 26 hrs</li>
</ul>
<div className="mt-6 flex items-center justify-between">
<span className="text-sm font-medium">$899</span>
<a className="inline-flex items-center rounded-md bg-black text-white text-xs font-medium px-3 py-2 hover:bg-neutral-800" href="#buy">Buy</a>
</div>
</div>

<div className="rounded-2xl border border-neutral-200/80 bg-white p-6 flex flex-col">
<img alt="One Pro" className="w-full h-[400px] object-cover border-neutral-200/80 border rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/956df0f5-3669-478b-aaf5-c77550e21137_1600w.jpg" style={{}}/>
<h3 className="mt-4 text-lg tracking-tight font-semibold">One Pro</h3>
<p className="text-sm text-neutral-600 mt-1">Maximum performance. Ultimate display.</p>
<ul className="mt-4 text-sm text-neutral-700 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-cpu h-4 w-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> 10‑core chip</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-monitor h-4 w-4" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg> 6.7" 120Hz</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-battery-charging h-4 w-4" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg> Fast charge</li>
</ul>
<div className="mt-6 flex items-center justify-between">
<span className="text-sm font-medium">$1099</span>
<a className="inline-flex items-center rounded-md bg-black text-white text-xs font-medium px-3 py-2 hover:bg-neutral-800" href="#buy">Buy</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-28" id="tech-specs">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Tech Specs</h2>
<p className="mt-3 text-sm sm:text-base text-neutral-600">All the details.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-neutral-200/80 p-5">
<p className="text-sm font-medium">Chip</p>
<p className="text-sm text-neutral-600 mt-2">Custom 8‑core CPU, 10‑core GPU, 16‑core Neural Engine</p>
</div>
<div className="rounded-xl border border-neutral-200/80 p-5">
<p className="text-sm font-medium">Display</p>
<p className="text-sm text-neutral-600 mt-2">6.1" OLED, 120Hz adaptive refresh, HDR10, 2000 nits peak</p>
</div>
<div className="rounded-xl border border-neutral-200/80 p-5">
<p className="text-sm font-medium">Camera</p>
<p className="text-sm text-neutral-600 mt-2">48MP wide, 12MP ultra‑wide, 3x telephoto, RAW support</p>
</div>
<div className="rounded-xl border border-neutral-200/80 p-5">
<p className="text-sm font-medium">Battery</p>
<p className="text-sm text-neutral-600 mt-2">Up to 26 hrs video playback, 50% in ~30 min with fast charge</p>
</div>
<div className="rounded-xl border border-neutral-200/80 p-5">
<p className="text-sm font-medium">Durability</p>
<p className="text-sm text-neutral-600 mt-2">IP68 water and dust resistance, Ceramic Shield front</p>
</div>
<div className="rounded-xl border border-neutral-200/80 p-5">
<p className="text-sm font-medium">Connectivity</p>
<p className="text-sm text-neutral-600 mt-2">5G, Wi‑Fi 6E, Bluetooth 5.3, Dual eSIM</p>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2.5 text-sm font-medium hover:bg-neutral-50" href="#">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download full spec sheet
          </a>
</div>
</div>
</section>

<section className="sm:py-20 lg:py-28 border-y bg-neutral-50 border-neutral-200/80 pt-16 pb-16" id="buy">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Choose your finish.</h2>
<p className="mt-3 text-sm sm:text-base text-neutral-600">All finishes use the same durable alloy frame and Ceramic Shield front.</p>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
<button className="flex flex-col items-center gap-2 rounded-xl border border-neutral-300 bg-white p-4 hover:border-neutral-900" data-finish="Satin Silver">
<span className="h-8 w-8 rounded-full bg-neutral-300 border border-neutral-400"></span>
<span className="text-xs text-neutral-700">Satin Silver</span>
</button>
<button className="flex flex-col items-center gap-2 rounded-xl border border-neutral-300 bg-white p-4 hover:border-neutral-900" data-finish="Graphite">
<span className="h-8 w-8 rounded-full bg-neutral-700 border border-neutral-800"></span>
<span className="text-xs text-neutral-700">Graphite</span>
</button>
<button className="flex flex-col items-center gap-2 rounded-xl border border-neutral-300 bg-white p-4 hover:border-neutral-900" data-finish="Deep Blue">
<span className="h-8 w-8 rounded-full bg-blue-700 border border-blue-900"></span>
<span className="text-xs text-neutral-700">Deep Blue</span>
</button>
<button className="flex flex-col items-center gap-2 rounded-xl border border-neutral-300 bg-white p-4 hover:border-neutral-900" data-finish="Pebble">
<span className="h-8 w-8 rounded-full bg-neutral-200 border border-neutral-300"></span>
<span className="text-xs text-neutral-700">Pebble</span>
</button>
</div>
<div className="mt-6 grid grid-cols-3 gap-3">
<button className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm hover:border-neutral-900" data-storage="128GB">128GB</button>
<button className="rounded-lg border-2 border-neutral-900 bg-white px-3 py-2 text-sm" data-storage="256GB">256GB</button>
<button className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm hover:border-neutral-900" data-storage="512GB">512GB</button>
</div>
<div className="mt-6 flex items-center gap-4">
<a className="inline-flex items-center rounded-md bg-black text-white text-sm font-medium px-4 py-2.5 hover:bg-neutral-800" href="#">
<svg className="lucide lucide-credit-card h-4 w-4 mr-2" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> Continue to checkout
              </a>
<button className="inline-flex items-center rounded-md border border-neutral-300 text-sm font-medium px-4 py-2.5 hover:bg-neutral-50">
<svg className="lucide lucide-help-circle h-4 w-4 mr-2" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg> Chat with a Specialist
              </button>
</div>
<p className="mt-3 text-xs text-neutral-500">Free delivery and easy returns.</p>
</div>
<div className="relative">
<div className="rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-6">
<article className="overflow-hidden sm:rounded-3xl col-span-2 md:col-span-3 lg:col-span-4 min-h-[220px] sm:min-h-[280px] md:min-h-[500px] flex flex-col bg-zinc-950 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d30527df-7416-4ead-affa-cf9a2d9e3729_800w.jpg)] max-w-lg bg-cover border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-center justify-between text-zinc-300">
<svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></div>
<div className="mt-auto text-zinc-400 text-sm">
        smart infrastructure
      </div>
</article>
<div className="mt-4 flex items-center justify-between">
<div className="text-sm">
<p className="font-medium">Flux One</p>
<p className="text-neutral-600 mt-0.5" id="configText">Satin Silver • 256GB</p>
</div>
<div className="text-right">
<p className="text-sm font-medium">$899</p>
<p className="text-xs text-neutral-500">Before trade‑in</p>
</div>
</div>
</div>
<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-xs text-neutral-600 shadow-sm">
              0% financing available
            </div>
</div>
</div>
</div>
</section>

<div className="fixed bottom-4 inset-x-0 z-40 px-4 sm:px-6 lg:px-8" id="buyBar">
<div className="max-w-7xl mx-auto">
<div className="rounded-xl border border-neutral-200/80 bg-white/90 backdrop-blur px-4 py-3 sm:px-5 sm:py-3.5 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md overflow-hidden border border-neutral-200 bg-neutral-100">
<img alt="Mini preview" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/49a49d58-7acd-4a3b-bfc0-3faa1b69bd94_320w.webp" style={{}}/>
</div>
<div className="text-xs sm:text-sm">
<p className="font-medium">Flux One</p>
<p className="text-neutral-600">From $899</p>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center rounded-md bg-black text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 hover:bg-neutral-800" href="#buy">
              Buy
            </a>
<a className="inline-flex items-center rounded-md border border-neutral-300 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 hover:bg-neutral-50" href="#compare">
              Compare
            </a>
</div>
</div>
</div>
</div>

<footer className="border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
<div className="">
<h5 className="text-sm tracking-tight font-semibold">Flux</h5>
<p className="mt-3 text-sm text-neutral-600 max-w-xs">
              Crafted with intention. Designed to last. Built for everyday.
            </p>
</div>
<div className="">
<h6 className="text-sm tracking-tight font-semibold">Explore</h6>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-black" href="#overview">Overview</a></li>
<li><a className="hover:text-black" href="#features">Features</a></li>
<li className=""><a className="hover:text-black" href="#tech-specs">Tech Specs</a></li>
<li><a className="hover:text-black" href="#compare">Compare</a></li>
</ul>
</div>
<div className="">
<h6 className="text-sm tracking-tight font-semibold">Support</h6>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className=""><a className="hover:text-black" href="#">Help Center</a></li>
<li><a className="hover:text-black" href="#">Warranty</a></li>
<li><a className="hover:text-black" href="#">Order Status</a></li>
<li><a className="hover:text-black" href="#">Contact</a></li>
</ul>
</div>
<div>
<h6 className="text-sm tracking-tight font-semibold">Newsletter</h6>
<p className="mt-3 text-sm text-neutral-600">Get product stories and early releases.</p>
<form className="mt-4 flex gap-2">
<input className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Email address" type="email"/>
<button className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800" type="submit">
                Join <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© <span id="year">2025</span> Flux Studio. All rights reserved.</p>
<div className="flex gap-4 text-neutral-600">
<a className="text-xs hover:text-black" href="#">Privacy</a>
<a className="text-xs hover:text-black" href="#">Terms</a>
<a className="text-xs hover:text-black" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

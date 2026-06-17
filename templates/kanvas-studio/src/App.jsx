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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        let currentTestimonial = 0;
        const totalTestimonials = 5;
        let autoplayInterval;

        function goToTestimonial(index) {
          // Hide current testimonial
          document.getElementById(`testimonial-${currentTestimonial}`).classList.remove('opacity-100');
          document.getElementById(`testimonial-${currentTestimonial}`).classList.add('opacity-0');
          document.getElementById(`author-${currentTestimonial}`).classList.remove('opacity-100');
          document.getElementById(`author-${currentTestimonial}`).classList.add('opacity-0', 'hidden');

          // Reset current avatar to grayscale
          const currentAvatar = document.getElementById(`avatar-${currentTestimonial}`);
          currentAvatar.classList.remove('border-brand-accent');
          currentAvatar.classList.add('border-slate-600', 'grayscale');

          // Update current index
          currentTestimonial = index;

          // Show new testimonial
          document.getElementById(`testimonial-${currentTestimonial}`).classList.remove('opacity-0');
          document.getElementById(`testimonial-${currentTestimonial}`).classList.add('opacity-100');
          document.getElementById(`author-${currentTestimonial}`).classList.remove('opacity-0', 'hidden');
          document.getElementById(`author-${currentTestimonial}`).classList.add('opacity-100');

          // Highlight new avatar in color
          const newAvatar = document.getElementById(`avatar-${currentTestimonial}`);
          newAvatar.classList.remove('border-slate-600', 'grayscale');
          newAvatar.classList.add('border-brand-accent');

          // Reset autoplay timer
          clearInterval(autoplayInterval);
          startAutoplay();
        }

        function nextTestimonial() {
          const next = (currentTestimonial + 1) % totalTestimonials;
          goToTestimonial(next);
        }

        function startAutoplay() {
          autoplayInterval = setInterval(nextTestimonial, 5000);
        }

        // Start autoplay on load
        startAutoplay();
      


      // Menu Toggle
      const menuToggle = document.getElementById('menuToggle');
      const sideMenu = document.getElementById('sideMenu');
      const closeMenu = document.getElementById('closeMenu');
      const menuOverlay = document.getElementById('menuOverlay');
      const menuPanel = sideMenu.querySelector('.absolute.left-0');

      function openMenu() {
        sideMenu.classList.remove('opacity-0', 'pointer-events-none');
        sideMenu.classList.add('opacity-100', 'pointer-events-auto');
        setTimeout(() => {
          menuPanel.classList.remove('-translate-x-full');
          menuPanel.classList.add('translate-x-0');
        }, 10);
      }

      function closeMenuFn() {
        menuPanel.classList.remove('translate-x-0');
        menuPanel.classList.add('-translate-x-full');
        setTimeout(() => {
          sideMenu.classList.remove('opacity-100', 'pointer-events-auto');
          sideMenu.classList.add('opacity-0', 'pointer-events-none');
        }, 300);
      }

      menuToggle.addEventListener('click', openMenu);
      closeMenu.addEventListener('click', closeMenuFn);
      menuOverlay.addEventListener('click', closeMenuFn);

      // Cart Toggle (Projects Panel)
      const cartToggle = document.getElementById('cartToggle');
      const cartSidebar = document.getElementById('cartSidebar');
      const closeCart = document.getElementById('closeCart');
      const cartOverlay = document.getElementById('cartOverlay');
      const cartPanel = cartSidebar.querySelector('.absolute.right-0');

      function openCart() {
        cartSidebar.classList.remove('opacity-0', 'pointer-events-none');
        cartSidebar.classList.add('opacity-100', 'pointer-events-auto');
        setTimeout(() => {
          cartPanel.classList.remove('translate-x-full');
          cartPanel.classList.add('translate-x-0');
        }, 10);
      }

      function closeCartFn() {
        cartPanel.classList.remove('translate-x-0');
        cartPanel.classList.add('translate-x-full');
        setTimeout(() => {
          cartSidebar.classList.remove('opacity-100', 'pointer-events-auto');
          cartSidebar.classList.add('opacity-0', 'pointer-events-none');
        }, 300);
      }

      cartToggle.addEventListener('click', openCart);
      closeCart.addEventListener('click', closeCartFn);
      cartOverlay.addEventListener('click', closeCartFn);

      // Newsletter Modal
      const newsletterModal = document.getElementById('newsletterModal');
      const closeModal = document.getElementById('closeModal');
      const modalOverlay = document.getElementById('modalOverlay');

      setTimeout(() => newsletterModal.classList.remove('hidden'), 3000);
      closeModal.addEventListener('click', () => newsletterModal.classList.add('hidden'));
      modalOverlay.addEventListener('click', () => newsletterModal.classList.add('hidden'));

      // Back to Top
      const backToTop = document.getElementById('backToTop');
      window.addEventListener('scroll', () => {
          backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
      });
      backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    
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
      

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-0 h-full w-full opacity-10">
<div className="border-r border-slate-500 h-full"></div>
<div className="border-r border-slate-500 h-full hidden md:block"></div>
<div className="border-r border-slate-500 h-full"></div>
<div className="border-r border-slate-500 h-full hidden lg:block"></div>
<div className="border-r border-slate-500 h-full"></div>
<div className="border-r border-slate-500 h-full hidden md:block"></div>
<div className="border-r border-slate-500 h-full"></div>
<div className="border-r border-slate-500 h-full hidden lg:block"></div>
<div className="border-r border-slate-500 h-full"></div>
<div className="border-r border-slate-500 h-full hidden md:block"></div>
<div className="border-r border-slate-500 h-full"></div>
<div className="border-r border-slate-500 h-full"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-slate-800">
<div className="max-w-[1920px] mx-auto px-6 lg:px-12">
<div className="flex items-center justify-between h-20">

<button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-accent transition-colors" id="menuToggle">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden sm:inline">Menu</span>
</button>

<a className="w-12 h-12 border border-white/20 flex items-center justify-center font-bold text-white tracking-tighter hover:border-brand-accent hover:text-brand-accent transition-colors" href="#">
            KS
          </a>

<div className="flex items-center gap-6">
<button className="text-slate-500 hover:text-white transition-colors">
<svg aria-hidden="true" className="" data-icon="lucide:search" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m21 21l-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</g>
</svg>
</button>
<button className="text-slate-500 hover:text-white transition-colors hidden sm:block">
<svg aria-hidden="true" className="" data-icon="lucide:grid-3x3" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect className="" height="18" rx="2" width="18" x="3" y="3"></rect>
<path className="" d="M3 9h18M3 15h18M9 3v18m6-18v18"></path>
</g>
</svg>
</button>
<button className="relative text-slate-500 hover:text-brand-accent transition-colors group" id="cartToggle">
<svg aria-hidden="true" className="" data-icon="lucide:briefcase" data-icon-replaced="true" data-icon-set="lucide" data-lucide="shopping-cart" data-width="20" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="21" r="1"></circle>
<circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</svg>
<span className="-top-3 -right-2 text-white text-[10px] flex items-center justify-center font-bold w-4 h-4 rounded-sm absolute">
                1
              </span>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="sideMenu">
<div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm" id="menuOverlay"></div>
<div className="absolute left-0 top-0 bottom-0 w-80 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 ease-out -translate-x-full">
<div className="p-8 h-full flex flex-col">
<button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white mb-12" id="closeMenu">
<svg aria-hidden="true" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Close
          </button>
<nav className="space-y-6">
<a className="block text-3xl font-bold text-white hover:text-brand-accent tracking-tight transition-colors" href="#">
              HOME
            </a>
<a className="block text-3xl font-bold text-transparent text-stroke hover:text-white hover:text-stroke-none tracking-tight transition-all" href="#">
              WORK
            </a>
<a className="block text-3xl font-bold text-transparent text-stroke hover:text-white hover:text-stroke-none tracking-tight transition-all" href="#">
              STUDIO
            </a>
<a className="block text-3xl font-bold text-transparent text-stroke hover:text-white hover:text-stroke-none tracking-tight transition-all" href="#">
              SERVICES
            </a>
<a className="block text-3xl font-bold text-transparent text-stroke hover:text-white hover:text-stroke-none tracking-tight transition-all" href="#">
              PROJECTS
            </a>
<a className="block text-3xl font-bold text-transparent text-stroke hover:text-white hover:text-stroke-none tracking-tight transition-all" href="#">
              JOURNAL
            </a>
<a className="block text-3xl font-bold text-transparent text-stroke hover:text-white hover:text-stroke-none tracking-tight transition-all" href="#">
              CONTACT
            </a>
</nav>
<div className="mt-auto pt-8 border-t border-slate-800">
<div className="flex gap-6">
<a className="text-slate-500 hover:text-brand-accent" href="#">
<svg aria-hidden="true" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="text-slate-500 hover:text-brand-accent" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="text-slate-500 hover:text-brand-accent" href="#">
<svg aria-hidden="true" data-icon="lucide:dribbble" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"></path>
<path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
</g>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="cartSidebar">
<div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm" id="cartOverlay"></div>
<div className="absolute right-0 top-0 bottom-0 w-96 bg-slate-900 border-l border-slate-800 transform transition-transform duration-300 ease-out translate-x-full">
<div className="p-8 h-full flex flex-col">
<div className="flex justify-between items-center mb-8">
<h3 className="text-white font-bold uppercase tracking-wider text-sm">
              Active Projects
            </h3>
<button className="text-slate-500 hover:text-white" id="closeCart">
<svg aria-hidden="true" data-icon="lucide:x" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex-1 overflow-auto pr-2">
<div className="space-y-6">
<div className="flex gap-4 pb-6 border-b border-slate-800">
<div className="w-20 h-24 bg-slate-800 rounded-sm overflow-hidden">
<img alt="Project Thumbnail" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41438a62-3777-4cae-924c-e588db59dba3_320w.webp" style={{}}/>
</div>
<div className="flex-1">
<p className="text-sm font-bold text-white uppercase tracking-wide">
                    Neon Interface System
                  </p>
<p className="text-[10px] font-mono text-brand-accent mt-1">
                    STATUS: IN PROGRESS
                  </p>
<p className="text-sm font-bold text-slate-400 mt-2">
                    Est. £16,000
                  </p>
</div>
<button className="text-slate-600 hover:text-red-500 self-start transition-colors">
<svg aria-hidden="true" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-6 mt-4">
<div className="flex justify-between text-xs font-mono uppercase tracking-widest mb-3">
<span className="text-slate-500">Retainer</span>
<span className="font-bold text-white">£2,000/mo</span>
</div>
<div className="flex justify-between text-lg mb-8">
<span className="font-bold text-white tracking-tight">
                NEXT INVOICE
              </span>
<span className="font-bold text-brand-accent font-mono">Dec 28</span>
</div>
<button className="w-full py-4 bg-brand-accent text-brand-dark text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors mb-3">
              View Projects
            </button>
<button className="w-full py-4 border border-slate-700 text-white text-xs font-bold uppercase tracking-widest hover:border-white transition-colors">
              Book Intro Call
            </button>
</div>
</div>
</div>
</div>

<section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden border-b border-slate-800">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-panel to-black opacity-90"></div>
<div className="absolute top-0 right-0 w-3/4 h-3/4 bg-cover bg-center opacity-100 mix-blend-overlay bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/626b9891-8e97-414f-a0f1-7c1a223f78de_3840w.webp)] [mask-image:linear-gradient(to_right,transparent,black_40%,black)]" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/50 to-transparent pointer-events-none"></div>
</div>
<div className="lg:px-12 grid grid-cols-1 lg:grid-cols-12 w-full h-full max-w-[1920px] z-10 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative gap-x-8 gap-y-8 items-center">
<div className="lg:col-span-8">
<span className="inline-block py-1 px-3 border border-brand-accent/30 bg-brand-accent/5 text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            New Studio Reel 2024
          </span>
<h1 className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-bold tracking-tighter text-white mb-8">
            DIGITAL
            <br/>
<span className="text-stroke text-transparent">CREATIVE STUDIO</span>
</h1>
<div className="w-24 h-1 bg-brand-accent mb-8"></div>
<p className="text-slate-400 text-lg max-w-lg leading-relaxed font-light">
            We design expressive brands, cinematic visuals, and interactive
            experiences for teams building what’s next. Strategy, design, and
            motion—all under one roof.
          </p>
<div className="mt-12 flex gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-dark text-xs font-semibold uppercase tracking-widest transition-all duration-300 ease-out hover:bg-brand-accent hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(125,211,252,0.6)]" href="#">
              View Portfolio
            </a>
<a className="inline-flex items-center justify-center uppercase hover:border-white transition-colors text-xs font-bold text-white tracking-widest border-slate-700 border px-8 py-4" href="#">
              Download Deck
            </a>
</div>
</div>

<div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-2 pr-4">
<div className="text-right">
<div className="text-5xl font-bold text-white/10 font-mono">01</div>
<div className="text-xs text-brand-accent uppercase tracking-widest mt-2">
              Featured Case
            </div>
</div>

<div className="bg-white/5 max-w-xs border-white/5 border mt-12 pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<div className="flex justify-between items-center mb-4">
<span className="uppercase text-xs text-slate-300">
                Studio Status
              </span>
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
</div>
<p className="text-sm text-slate-300 font-mono">
              ACCEPTING PROJECTS
              <br/>
              Q1–Q2 2025 BOOKING
            </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800 bg-brand-dark relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800 border-b border-slate-800">

<div className="group relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
<div className="bg-center transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40 opacity-60 bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9df63a50-60c8-434f-b5f3-fc24be587c03_3840w.webp\')'}}></div>
<div className="bg-gradient-to-t from-brand-dark via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6 z-20">
<span className="text-xs font-mono text-brand-accent border border-brand-accent/20 px-2 py-1 bg-black/50 backdrop-blur-sm">
              01
            </span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
              Brand &amp; Web
            </p>
<h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
              Neon Grid Identity
            </h3>
<button className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              View Case Study
              <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b098c29a-9a00-4e0f-ae2c-2d810567550e_3840w.webp\')'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
<div className="absolute top-6 left-6 z-20">
<span className="text-xs font-mono text-brand-accent border border-brand-accent/20 px-2 py-1 bg-black/50 backdrop-blur-sm">
              02
            </span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
              Product Video
            </p>
<h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
              Midnight Interface Film
            </h3>
<button className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              View Case Study
              <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
<div className="bg-center transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40 opacity-60 bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c669426e-538c-46a9-b426-c5223887e80f_3840w.webp\')'}}></div>
<div className="bg-gradient-to-t from-brand-dark via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6 z-20">
<span className="text-xs font-mono text-brand-accent border border-brand-accent/20 px-2 py-1 bg-black/50 backdrop-blur-sm">
              03
            </span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
              Experiential
            </p>
<h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
              Immersive Gallery Space
            </h3>
<button className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              View Case Study
              <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-[1920px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(125,211,252,0.5)]"></span>
<span className="text-xs font-bold text-slate-500 tracking-widest uppercase font-mono">
                Capabilities
              </span>
</div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              FEATUREDSERVICES
            </h2>
</div>
<div className="w-full md:w-auto">
<a className="inline-flex items-center justify-center uppercase hover:border-white transition-colors text-xs font-bold text-white tracking-widest border-slate-700 border px-8 py-4" href="#">
<span className="text-xs font-bold text-white tracking-widest uppercase group-hover:text-brand-accent transition-colors">
                View Full Services
              </span>
<svg aria-hidden="true" className="" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">

<div className="group bg-brand-dark p-6 hover:bg-slate-900/50 transition-colors relative">
<div className="aspect-[3/4] bg-brand-panel overflow-hidden relative mb-6">
<div className="z-20 flex flex-col gap-2 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 opacity-0 absolute top-3 right-3 translate-x-2">
<button className="w-8 h-8 bg-brand-dark text-white border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors">
<svg aria-hidden="true" data-icon="lucide:heart" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="w-8 h-8 bg-brand-dark text-white border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors">
<svg aria-hidden="true" data-icon="lucide:maximize-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<img alt="Service" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/048e0a68-a97c-46dd-aed4-734f98009a4c_3840w.webp"/>
</div>
<div className="">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-mono text-slate-500 uppercase">
                  Service 001
                </span>
<div className="flex gap-0.5 text-brand-accent">
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1 group-hover:text-brand-accent transition-colors">
                Brand Systems
              </h3>
<div className="flex items-center justify-between mt-4">
<p className="text-sm font-mono font-bold text-slate-400">
                  From £4,000
                </p>
<button className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors">
                  Details
                </button>
</div>
</div>
</div>

<div className="group bg-brand-dark p-6 hover:bg-slate-900/50 transition-colors relative">
<div className="aspect-[3/4] bg-brand-panel overflow-hidden relative mb-6">
<div className="absolute top-3 right-3 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
<button className="w-8 h-8 bg-brand-dark text-white border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors">
<svg aria-hidden="true" data-icon="lucide:heart" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="w-8 h-8 bg-brand-dark text-white border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors">
<svg aria-hidden="true" data-icon="lucide:maximize-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<img alt="Service" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad97e439-6931-4e5e-bcf3-b69be4018905_3840w.webp" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
</div>
<div className="">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-mono text-slate-500 uppercase">
                  Service 002
                </span>
<div className="flex gap-0.5 text-brand-accent">
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1 group-hover:text-brand-accent transition-colors">
                Product Storytelling
              </h3>
<div className="flex items-center justify-between mt-4">
<div className="flex gap-2 items-baseline">
<p className="text-sm font-mono font-bold text-brand-accent">
                    From £6,500
                  </p>
<p className="text-xs font-mono text-slate-600 line-through">
                    £7,500
                  </p>
</div>
<button className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors">
                  Details
                </button>
</div>
</div>
</div>

<div className="group bg-brand-dark p-6 hover:bg-slate-900/50 transition-colors relative">
<div className="aspect-[3/4] bg-brand-panel overflow-hidden relative mb-6">
<div className="absolute top-3 right-3 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
<button className="w-8 h-8 bg-brand-dark text-white border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors">
<svg aria-hidden="true" className="" data-icon="lucide:heart" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="w-8 h-8 bg-brand-dark text-white border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors">
<svg aria-hidden="true" data-icon="lucide:maximize-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<img alt="Service" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52b4be58-0ae9-4f19-88ed-d742fc1abef3_3840w.jpg" style={{}}/>
</div>
<div className="">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-mono text-slate-500 uppercase">
                  Service 003
                </span>
<div className="flex gap-0.5 text-brand-accent">
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1 group-hover:text-brand-accent transition-colors">
                Studio Retainers
              </h3>
<div className="flex items-center justify-between mt-4">
<p className="text-sm font-mono font-bold text-slate-400">
                  From £3,000/mo
                </p>
<button className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors">
                  Details
                </button>
</div>
</div>
</div>

<div className="group bg-brand-dark p-6 hover:bg-slate-900/50 transition-colors relative">
<div className="aspect-[3/4] bg-brand-panel overflow-hidden relative mb-6">
<div className="absolute top-3 right-3 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
<button className="w-8 h-8 bg-brand-dark text-white border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors">
<svg aria-hidden="true" data-icon="lucide:heart" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="w-8 h-8 bg-brand-dark text-white border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors">
<svg aria-hidden="true" data-icon="lucide:maximize-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<img alt="Service" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71087bc3-4cb0-48eb-b49a-6a1587f575d7_3840w.jpg" style={{}}/>
</div>
<div className="">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-mono text-slate-500 uppercase">
                  Service 004
                </span>
<div className="flex gap-0.5 text-brand-accent">
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1 group-hover:text-brand-accent transition-colors">
                Interactive Prototypes
              </h3>
<div className="flex items-center justify-between mt-4">
<p className="text-sm font-mono font-bold text-slate-400">
                  From £5,000
                </p>
<button className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors">
                  Details
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-40 bg-fixed bg-cover bg-center border-y border-slate-800">

<div className="absolute inset-0 -z-20">
<div className="absolute inset-0" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div>

<div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[1px] -z-10"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(11,13,17,0.5)_2px,transparent_2px), linear-gradient(90deg,rgba(11,13,17,0.5)_2px,transparent_2px)] bg-[size:30px_30px] opacity-20 -z-10"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<button className="group w-24 h-24 bg-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center mx-auto hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 mb-12 rounded-sm" id="playVideo">
<svg aria-hidden="true" data-icon="lucide:play" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          IMMERSIVE
          <span className="text-stroke-accent text-transparent">STUDIO REEL</span>
</h2>
<p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
          A fast cut of brand systems, product launches, and motion pieces we
          crafted for teams in tech, culture, and commerce.
        </p>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative">
<div className="lg:px-12 max-w-[1920px] mr-auto ml-auto pr-6 pl-6">
<div className="flex border-slate-800 border-b mb-12 pb-8 items-end justify-between">
<h2 className="text-4xl font-bold tracking-tighter text-white">
            SIGNATURE
            <span className="text-brand-accent">WORK</span>
</h2>
<div className="flex gap-6 gap-x-8 gap-y-8 items-center">
<div className="w-full md:w-auto">
<a className="inline-flex items-center justify-center uppercase hover:border-white transition-colors text-xs font-bold text-white tracking-widest border-slate-700 border px-8 py-4" href="#">
<span className="uppercase group-hover:text-brand-accent transition-colors text-xs font-bold text-white tracking-widest">
                  View all projects
                </span>
<svg aria-hidden="true" className="" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-800 border border-slate-800">

<div className="grid grid-cols-2 gap-px bg-slate-800">

<div className="group bg-brand-dark p-6 hover:bg-slate-900/50 transition-colors">
<div className="aspect-[3/4] bg-brand-panel relative mb-4 overflow-hidden">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/792defd4-d702-4f36-b352-ba625129dfb5_3840w.webp" style={{}}/>
<button className="absolute bottom-4 left-4 z-20 text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-brand-dark px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Case
                </button>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] text-slate-500 uppercase font-mono mb-1">
                    Case 005
                  </p>
<h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    Coded Light Identity
                  </h3>
</div>
<p className="text-sm font-mono font-bold text-brand-accent">
                  Brand &amp; Web
                </p>
</div>
</div>

<div className="group bg-brand-dark p-6 hover:bg-slate-900/50 transition-colors">
<div className="aspect-[3/4] bg-brand-panel relative mb-4 overflow-hidden">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2607b57-3a19-48e4-8ad4-bdcf6e69b207_3840w.webp" style={{}}/>
<button className="absolute bottom-4 left-4 z-20 text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-brand-dark px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Case
                </button>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] text-slate-500 uppercase font-mono mb-1">
                    Case 006
                  </p>
<h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    Studio Launch Film
                  </h3>
</div>
<div className="text-right">
<p className="text-sm font-mono font-bold text-brand-accent">
                    Motion
                  </p>
<p className="text-[10px] font-mono text-slate-600 line-through">
                    Concept Only
                  </p>
</div>
</div>
</div>
</div>

<div className="relative bg-brand-panel flex items-end p-12 overflow-hidden group">
<div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcced374-a515-4136-bef9-e31a8cd1c18f_1600w.jpg)]" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-90"></div>
<div className="relative z-10 w-full">
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 bg-brand-accent text-brand-dark text-[10px] font-bold uppercase tracking-widest">
                  Flagship Project
                </span>
</div>
<h3 className="text-4xl font-bold text-white tracking-tighter leading-none mb-4">
                WARP INTERFACELAUNCH EXPERIENCE
              </h3>
<a className="inline-block mt-4 text-xs font-bold text-white border-b border-slate-500 pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors" href="#">
                Open Case Study
              </a>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-800 border-x border-b border-slate-800">

<div className="relative bg-brand-panel flex items-end p-12 overflow-hidden group order-2 lg:order-1">
<div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ffd0641a-688d-4761-a530-60fec416aab1_1600w.webp)]" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-90"></div>
<div className="relative z-10 w-full">
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-1 bg-white text-brand-dark text-[10px] font-bold uppercase tracking-widest">
                  New Series
                </span>
</div>
<h3 className="text-4xl font-bold text-white tracking-tighter leading-none mb-4">
                PORTRAITS OFCREATIVE SYSTEMS
              </h3>
<a className="inline-block mt-4 text-xs font-bold text-white border-b border-slate-500 pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors" href="#">
                View Collection
              </a>
</div>
</div>

<div className="grid grid-cols-2 gap-px bg-slate-800 order-1 lg:order-2">

<div className="group bg-brand-dark p-6 hover:bg-slate-900/50 transition-colors">
<div className="aspect-[3/4] bg-brand-panel relative mb-4 overflow-hidden">
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc8eb4cc-9875-4ac8-9d41-ce4604fb2ae9_800w.webp" style={{}}/>
<button className="absolute bottom-4 left-4 z-20 text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-brand-dark px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Case
                </button>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] text-slate-500 uppercase font-mono mb-1">
                    Case 007
                  </p>
<h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    Dark Mode System
                  </h3>
</div>
<p className="text-sm font-mono font-bold text-brand-accent">
                  Product
                </p>
</div>
</div>

<div className="group bg-brand-dark p-6 hover:bg-slate-900/50 transition-colors">
<div className="aspect-[3/4] bg-brand-panel relative mb-4 overflow-hidden">
<div className="group-hover:bg-transparent transition-colors z-10 bg-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Project" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3eba3b9c-9fcf-4da6-9371-116a96e97133_3840w.jpg" style={{}}/>
<button className="absolute bottom-4 left-4 z-20 text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-brand-dark px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Case
                </button>
</div>
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] text-slate-500 uppercase font-mono mb-1">
                    Case 008
                  </p>
<h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    Event Visual System
                  </h3>
</div>
<div className="text-right">
<p className="text-sm font-mono font-bold text-brand-accent">
                    Campaign
                  </p>
<p className="text-[10px] font-mono text-slate-600 line-through">
                    Concept Only
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-800 bg-[#0f1218] relative z-10">
<div className="max-w-[1920px] mx-auto px-6 lg:px-12">
<div className="flex items-center gap-4 mb 12"></div>
<div className="flex items-center gap-4 mb-12">
<span className="w-2 h-2 bg-brand-accent rounded-full"></span>
<h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Studio Journal
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-video bg-slate-800 overflow-hidden mb-6 border border-slate-800 relative">
<div className="group-hover:bg-brand-accent/10 transition-colors z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Journal" className="group-hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover z-10 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74ce626d-5eba-470d-a4e4-159b9c6cad3c_3840w.webp"/>
<div className="text-[10px] text-brand-accent uppercase border-brand-accent/20 font-mono bg-black/80 border pt-1 pr-2 pb-1 pl-2 absolute top-4 left-4">
                July 11, 2025
              </div>
</div>
<div>
<h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                Designing Systems That Don’t Feel Systematic
              </h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">
                By
                <span className="text-white">Kanvas Studio</span>
                / Process
              </p>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-slate-800 overflow-hidden mb-6 border border-slate-800 relative">
<div className="group-hover:bg-brand-accent/10 transition-colors z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Journal" className="group-hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79b36b7a-a9b2-4eb8-a45d-27fe69423a98_3840w.jpg"/>
<div className="text-[10px] text-brand-accent uppercase border-brand-accent/20 font-mono bg-black/80 border pt-1 pr-2 pb-1 pl-2 absolute top-4 left-4">
                June 03, 2025
              </div>
</div>
<div className="">
<h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                Behind the Scenes of Our Latest Product Film
              </h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">
                By
                <span className="text-white">Kanvas Studio</span>
                / Motion
              </p>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-slate-800 overflow-hidden mb-6 border border-slate-800 relative">
<div className="group-hover:bg-brand-accent/10 transition-colors z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Journal" className="group-hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover z-10 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb37e13b-1cf2-4a1f-ad35-d5499d2a18a2_3840w.webp"/>
<div className="text-[10px] text-brand-accent uppercase border-brand-accent/20 font-mono bg-black/80 z-10 border pt-1 pr-2 pb-1 pl-2 absolute top-4 left-4">
                May 19, 2025
              </div>
</div>
<div>
<h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                Why We Treat Every Brief Like a Short Film
              </h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">
                By
                <span className="text-white">Kanvas Studio</span>
                / Culture
              </p>
</div>
</article>
</div>
</div>
</section>

<section className="py-32 relative border-t border-slate-800 bg-brand-dark z-10 overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center">
<svg aria-hidden="true" className="mx-auto text-slate-600 mb-8" data-icon="lucide:quote" data-width="40" height="40" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>

<div className="relative h-40 md:h-32" id="testimonialContainer">
<div className="testimonial-item absolute inset-0 transition-all duration-500" id="testimonial-0">
<p className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed tracking-tight">
              "They didn't just ship visuals, they helped us rewrite how we talk
              about our product. The team feels proud to send people to our site
              now."
            </p>
</div>
<div className="testimonial-item absolute inset-0 transition-all duration-500" id="testimonial-1">
<p className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed tracking-tight">
              "Kanvas Studio transformed our brand identity completely. Their
              attention to detail and creative vision exceeded all our
              expectations."
            </p>
</div>
<div className="testimonial-item absolute inset-0 transition-all duration-500" id="testimonial-2">
<p className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed tracking-tight">
              "Working with them felt like having an extension of our own team.
              They understood our vision from day one and delivered beyond
              imagination."
            </p>
</div>
<div className="testimonial-item absolute inset-0 transition-all duration-500" id="testimonial-3">
<p className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed tracking-tight">
              "The motion work they created for our launch was absolutely
              stunning. Our engagement metrics doubled within the first week."
            </p>
</div>
<div className="testimonial-item absolute inset-0 transition-all duration-500" id="testimonial-4">
<p className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed tracking-tight">
              "Professional, creative, and incredibly responsive. They made the
              entire design process feel effortless and enjoyable."
            </p>
</div>
</div>

<div className="mt-12 h-16" id="authorContainer">
<div className="author-item transition-all duration-500" id="author-0">
<h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Jamie Collins
            </h4>
<p className="text-xs text-slate-500 font-mono mt-2">
              HEAD OF DESIGN, ORBITAL
            </p>
</div>
<div className="author-item transition-all duration-500" id="author-1">
<h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Sarah Mitchell
            </h4>
<p className="text-xs text-slate-500 font-mono mt-2">CEO, NEXUS TECH</p>
</div>
<div className="author-item transition-all duration-500" id="author-2">
<h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Marcus Chen
            </h4>
<p className="text-xs text-slate-500 font-mono mt-2">
              CREATIVE DIRECTOR, PULSE
            </p>
</div>
<div className="author-item transition-all duration-500" id="author-3">
<h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Elena Rodriguez
            </h4>
<p className="text-xs text-slate-500 font-mono mt-2">
              FOUNDER, LUMINARE
            </p>
</div>
<div className="author-item transition-all duration-500" id="author-4">
<h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              David Park
            </h4>
<p className="text-xs text-slate-500 font-mono mt-2">
              VP MARKETING, HORIZON
            </p>
</div>
</div>

<div className="flex justify-center gap-4 md:gap-6 mt-16">
<button className="avatar-btn w-12 h-12 rounded-full border-2 overflow-hidden transition-all duration-300" id="avatar-0" onclick="goToTestimonial(0)">
<img alt="Jamie Collins" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df748c19-7840-497b-84a2-85f34b0da910_320w.webp"/>
</button>
<button className="avatar-btn w-12 h-12 rounded-full border-2 overflow-hidden transition-all duration-300" id="avatar-1" onclick="goToTestimonial(1)">
<img alt="Sarah Mitchell" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6ec4622-d827-4c9e-9744-0c24c81f9515_320w.webp"/>
</button>
<button className="avatar-btn w-12 h-12 rounded-full border-2 overflow-hidden transition-all duration-300" id="avatar-2" onclick="goToTestimonial(2)">
<img alt="Marcus Chen" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8e30b9a-d4b3-47aa-9b4c-9f7d54f25460_320w.webp"/>
</button>
<button className="avatar-btn w-12 h-12 rounded-full border-2 overflow-hidden transition-all duration-300" id="avatar-3" onclick="goToTestimonial(3)">
<img alt="Elena Rodriguez" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c1f53d0-cc07-4bcf-8a06-9a7cf61f4757_320w.webp"/>
</button>
<button className="avatar-btn w-12 h-12 rounded-full border-2 overflow-hidden transition-all duration-300" id="avatar-4" onclick="goToTestimonial(4)">
<img alt="David Park" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e6a3c0b-6b9e-4eb4-8fe1-9182d0819de9_320w.webp"/>
</button>
</div>
</div>

</section>

<div className="border-t border-slate-800 bg-[#080a0e] px-6 lg:px-12 relative z-10">
<div className="flex items-center justify-between h-20 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
<button className="w-12 h-12 hover:bg-white/5 flex items-center justify-center transition-colors border-r border-slate-800">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="flex-1 flex justify-center gap-8 md:gap-24">
<span className="text-brand-accent">01 Home</span>
<span className="hover:text-white cursor-pointer">02 Work</span>
<span className="hover:text-white cursor-pointer">03 Services</span>
<span className="hover:text-white cursor-pointer">04 Contact</span>
</div>
<button className="w-12 h-12 bg-slate-800 text-white flex items-center justify-center transition-colors hover:bg-slate-700 border-l border-slate-700">
<svg aria-hidden="true" data-icon="lucide:arrow-up" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12l7-7l7 7m-7 7V5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<footer className="bg-brand-dark border-t border-slate-800 relative z-10">
<div className="max-w-[1920px] mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-2 border-b border-slate-800">

<div className="p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-center min-h-[400px]">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-8">
              LET'S BUILD
              <br/>
<span className="text-transparent text-stroke">WHAT'S NEXT.</span>
</h2>
<a className="group inline-flex items-center gap-4 text-white hover:text-brand-accent transition-colors w-max" href="#">
<span className="text-xs font-bold uppercase tracking-widest border-b border-white group-hover:border-brand-accent pb-1">
                Start a Project
              </span>
<svg className="transform group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="p-12 lg:p-20 flex flex-col justify-center bg-white/[0.02]">
<p className="text-slate-400 text-lg leading-relaxed max-w-md mb-12 font-light">
              We partner with ambitious brands to create digital products and
              experiences that leave a mark. Currently booking for Q1 2025.
            </p>
<div className="space-y-8">
<div>
<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  New Business
                </p>
<a className="text-2xl md:text-3xl font-bold text-white hover:text-brand-accent transition-colors tracking-tight" href="mailto:hello@kanvas.studio">
                  hello@kanvas.studio
                </a>
</div>
<div>
<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Connect
                </p>
<div className="flex gap-3">
<a className="w-10 h-10 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors bg-slate-900/50" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="w-10 h-10 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors bg-slate-900/50" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-10 h-10 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors bg-slate-900/50" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-800 border-b border-slate-800">
<div className="p-8 lg:p-12">
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">
              Studio
            </h4>
<ul className="space-y-3 text-xs font-mono text-slate-500 uppercase tracking-wide">
<li>
<a className="hover:text-brand-accent transition-colors" href="#">
                  Work
                </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors" href="#">
                  Services
                </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div className="p-8 lg:p-12">
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">
              Social
            </h4>
<ul className="space-y-3 text-xs font-mono text-slate-500 uppercase tracking-wide">
<li>
<a className="hover:text-brand-accent transition-colors" href="#">
                  Instagram
                </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors" href="#">
                  Twitter
                </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors" href="#">
                  LinkedIn
                </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors" href="#">
                  Read.cv
                </a>
</li>
</ul>
</div>
<div className="p-8 lg:p-12">
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">
              Legal
            </h4>
<ul className="space-y-3 text-xs font-mono text-slate-500 uppercase tracking-wide">
<li>
<a className="hover:text-brand-accent transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors" href="#">
                  Terms
                </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors" href="#">
                  Cookies
                </a>
</li>
</ul>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-between h-full bg-slate-900/20">
<div className="mb-8">
<div className="w-10 h-10 border border-white/20 flex items-center justify-center font-bold text-white text-sm tracking-tighter mb-4">
                KS
              </div>
<p className="text-[10px] font-bold text-white uppercase leading-tight tracking-widest">
                KANVAS STUDIO London, UK
              </p>
</div>
<p className="text-[10px] text-slate-600 font-mono">
              © 2024 Kanvas Studio. All rights reserved.
            </p>
</div>
</div>
</div>
</footer>


<button className="fixed bottom-6 right-6 w-12 h-12 bg-brand-accent text-brand-dark border border-brand-accent flex items-center justify-center opacity-0 transition-all hover:bg-transparent hover:text-brand-accent z-40" id="backToTop">
<svg aria-hidden="true" data-icon="lucide:chevron-up" data-width="20" height="20" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15l-6-6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>


    </>
  );
}

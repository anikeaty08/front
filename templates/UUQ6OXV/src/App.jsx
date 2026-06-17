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


      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) lucide.createIcons();

        // Mobile menu functionality
        const menuBtn = document.getElementById('menuBtn');
        const mobileNav = document.getElementById('mobileNav');
        const menuIcon = document.getElementById('menuIcon');
        const closeIcon = document.getElementById('closeIcon');
        let isMenuOpen = false;

        if (menuBtn && mobileNav) {
          menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
              mobileNav.classList.remove('hidden', 'scale-95', 'opacity-0');
              mobileNav.classList.add('scale-100', 'opacity-100');
              menuIcon.classList.add('hidden');
              closeIcon.classList.remove('hidden');
            } else {
              mobileNav.classList.add('scale-95', 'opacity-0');
              mobileNav.classList.remove('scale-100', 'opacity-100');
              setTimeout(() => {
                mobileNav.classList.add('hidden');
              }, 300);
              menuIcon.classList.remove('hidden');
              closeIcon.classList.add('hidden');
            }
          });

          // Close mobile menu when clicking on links
          const mobileLinks = document.querySelectorAll('.mobile-link');
          mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
              isMenuOpen = false;
              mobileNav.classList.add('scale-95', 'opacity-0');
              mobileNav.classList.remove('scale-100', 'opacity-100');
              setTimeout(() => {
                mobileNav.classList.add('hidden');
              }, 300);
              menuIcon.classList.remove('hidden');
              closeIcon.classList.add('hidden');
            });
          });
        }

        // Smooth scrolling for anchor links
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          });
        });

        // Progress bars animation
        const observerOptions = {
          threshold: 0.5,
          rootMargin: '0px 0px -100px 0px'
        };

        const progressObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const progressBars = entry.target.querySelectorAll('.progress-bar');
              const counters = entry.target.querySelectorAll('.counter');
              
              progressBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                if (targetWidth) {
                  setTimeout(() => {
                    bar.style.width = targetWidth;
                  }, 100);
                }
              });

              // Animate counters
              counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const isPercentage = counter.textContent.includes('%');
                animateCounter(counter, target, isPercentage);
              });
              
              progressObserver.unobserve(entry.target);
            }
          });
        }, observerOptions);

        const heroSection = document.querySelector('#product');
        if (heroSection) {
          progressObserver.observe(heroSection);
        }

        // Counter animation function
        function animateCounter(element, target, isPercentage = false) {
          let current = 0;
          const increment = target / 60; // 60 frames for smooth animation
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            const prefix = isPercentage ? '+' : '+';
            const suffix = isPercentage ? '%' : '';
            element.textContent = prefix + Math.floor(current) + suffix;
          }, 25);
        }

        // Rating number animation
        const ratingObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const ratingNumbers = entry.target.querySelectorAll('.rating-number');
              ratingNumbers.forEach(rating => {
                const target = parseFloat(rating.getAttribute('data-target'));
                const isDecimal = target % 1 !== 0;
                animateRating(rating, target, isDecimal);
              });
              ratingObserver.unobserve(entry.target);
            }
          });
        }, observerOptions);

        const techSection = document.querySelector('#tech-tabs')?.closest('section');
        if (techSection) {
          ratingObserver.observe(techSection);
        }

        function animateRating(element, target, isDecimal = false) {
          let current = 0;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            if (isDecimal) {
              element.textContent = current.toFixed(1);
            } else {
              element.textContent = Math.floor(current) + '%';
            }
          }, 30);
        }

        // Tech tabs functionality
        const techTabs = document.querySelectorAll('.tech-tab');
        const techContents = document.querySelectorAll('.tech-content');

        techTabs.forEach(tab => {
          tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Remove active states
            techTabs.forEach(t => {
              t.classList.remove('active', 'bg-emerald-400/10', 'text-emerald-300', 'ring-emerald-400/30');
              t.classList.add('bg-white/5', 'text-neutral-300', 'ring-white/10');
            });
            
            // Add active state to clicked tab
            tab.classList.add('active', 'bg-emerald-400/10', 'text-emerald-300', 'ring-emerald-400/30');
            tab.classList.remove('bg-white/5', 'text-neutral-300', 'ring-white/10');
            
            // Hide all content
            techContents.forEach(content => {
              content.classList.add('hidden');
            });
            
            // Show target content
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
              targetContent.classList.remove('hidden');
            }
          });
        });

        // Card carousel functionality
        const cards = document.querySelectorAll('#industry-cards > div');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentCard = 0;

        function updateCarousel() {
          cards.forEach((card, index) => {
            card.style.transform = index < currentCard ? 'translateX(-120%)' : 
                                   index === currentCard ? 'translateX(0%)' :
                                   'translateX(120%)';
            card.style.opacity = index === currentCard ? '1' : '0.6';
          });
          
          prevBtn.disabled = currentCard === 0;
          nextBtn.disabled = currentCard === cards.length - 1;
        }

        if (prevBtn && nextBtn && cards.length > 0) {
          prevBtn.addEventListener('click', () => {
            if (currentCard > 0) {
              currentCard--;
              updateCarousel();
            }
          });

          nextBtn.addEventListener('click', () => {
            if (currentCard < cards.length - 1) {
              currentCard++;
              updateCarousel();
            }
          });

          // Initialize carousel on mobile only
          function handleCarousel() {
            if (window.innerWidth < 1024) { // lg breakpoint
              cards.forEach((card, index) => {
                card.style.transition = 'all 0.3s ease-out';
              });
              updateCarousel();
            } else {
              cards.forEach(card => {
                card.style.transform = 'none';
                card.style.opacity = '1';
              });
            }
          }

          handleCarousel();
          window.addEventListener('resize', handleCarousel);
        }

        // Add some interactive color wheel behavior
        const colorWheels = document.querySelectorAll('[id^="colorWheel"]');
        colorWheels.forEach(wheel => {
          wheel.addEventListener('mouseenter', () => {
            wheel.style.animationPlayState = 'paused';
          });
          wheel.addEventListener('mouseleave', () => {
            wheel.style.animationPlayState = 'running';
          });
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
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[850px]"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4OF29NF3HVBYQsrwPvVq"></div></div>

<header className="fixed top-0 w-full z-20 bg-neutral-950/80 backdrop-blur-sm border-b border-white/5 opacity-0 animate-[slideDown_0.8s_ease-out_0.2s_forwards]" style={{transform: 'translateY(-100%)'}}>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-5 pb-5 items-center justify-between">

<a className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="#">
<span className="relative inline-grid h-10 w-10 place-items-center rounded-xl bg-neutral-900 ring-1 ring-white/10 hover:ring-emerald-400/30 transition-all duration-300">
<span className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"></span>
<span className="relative text-xl font-semibold tracking-tight font-sans" style={{}}>C</span>
</span>
<div className="flex flex-col leading-none">
<span className="text-sm font-medium text-neutral-300 font-sans" style={{}}>CHROMAMAX</span>
<span className="text-xs text-neutral-500 font-sans" style={{}}>SYSTEMS</span>
</div>
</a>

<nav className="hidden items-center gap-8 lg:flex">
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 hover:scale-105 transform font-sans" href="#product" style={{}}>Solutions</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 hover:scale-105 transform font-sans" href="#contact" style={{}}>Support</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 hover:scale-105 transform font-sans" href="#company" style={{}}>About</a>
</nav>

<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-3">
<a aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" href="#">
<svg className="lucide lucide-instagram h-4 w-4 text-neutral-300" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" href="#">
<svg className="lucide lucide-facebook h-4 w-4 text-neutral-300" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" href="#">
<svg className="lucide lucide-youtube h-4 w-4 text-neutral-300" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
<a className="relative inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:scale-105 transition-all duration-200" href="#buy">
<span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"></span>
<span className="absolute inset-0 rounded-lg ring-1 ring-emerald-400/40 group-hover:ring-emerald-400/60 transition-all"></span>
<span className="relative font-sans" style={{}}>Order Now</span>
<svg className="lucide lucide-arrow-right relative h-4 w-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button aria-label="Menu" className="lg:hidden grid h-10 w-10 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-200" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 transition-transform duration-200" data-lucide="menu" fill="none" height="24" id="menuIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<svg className="lucide lucide-x h-5 w-5 hidden transition-transform duration-200" data-lucide="x" fill="none" height="24" id="closeIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>

<div className="mx-6 hidden overflow-hidden rounded-2xl bg-neutral-900/80 ring-1 ring-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 transform scale-95 opacity-0 transition-all duration-300" id="mobileNav">
<div className="flex flex-col px-6 py-4">
<a className="py-2 text-sm font-medium text-neutral-300 hover:text-white hover:translate-x-2 transition-all duration-200 font-sans mobile-link" href="#product" style={{}}>Solutions</a>
<a className="py-2 text-sm font-medium text-neutral-300 hover:text-white hover:translate-x-2 transition-all duration-200 font-sans mobile-link" href="#contact" style={{}}>Support</a>
<a className="py-2 text-sm font-medium text-neutral-300 hover:text-white hover:translate-x-2 transition-all duration-200 font-sans mobile-link" href="#company" style={{}}>About</a>
</div>
</div>
</header>

<section className="relative z-10 pt-0 pb-0">
<div className="max-w-7xl md:pt-14 lg:pt-16 mt-[80px] mr-auto mb-20 ml-auto pt-0 pr-6 pb-20 pl-6">
<div className="grid gap-10 lg:grid-cols-2 items-center">

<div className="relative opacity-0 animate-[slideInLeft_1s_ease-out_0.4s_forwards]" style={{transform: 'translateX(-100px)'}}>

<div className="absolute -bottom-10 left-1/2 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 blur-2xl animate-pulse"></div>
<div className="relative w-full mr-auto ml-auto" style={{maxWidth: '486px'}}>

<div className="relative ring-1 ring-white/10 supports-[backdrop-filter]:bg-neutral-900/70 hover:ring-white/20 hover:scale-105 transition-all duration-500 bg-neutral-900/90 rounded-3xl mt-6 ml-10 pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="relative h-64 w-full overflow-hidden ring-1 ring-white/10 rounded-2xl">

<div className="absolute inset-0 grid place-items-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/30f0ac27-c43c-4c90-8477-ba67e474fc01_1600w.jpg)] bg-cover">
<div className="h-44 w-44 ring-1 ring-white/10 grid place-items-center bg-neutral-950/50 rounded-2xl backdrop-blur-lg">
<div className="h-36 w-36 rounded-full bg-[conic-gradient(at_center,_#06b6d4,_#22c55e,_#a855f7,_#06b6d4)] p-[6px] animate-spin" id="colorWheel1" style={{animationDuration: '8s', animationPlayState: 'running'}}>
<div className="h-full w-full rounded-full bg-neutral-950 grid place-items-center">
<div className="h-10 w-10 rounded-full bg-neutral-900 ring-1 ring-white/10 hover:ring-emerald-400/40 transition-all duration-300 cursor-pointer"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative -mt-10 -mr-10 ring-1 ring-white/10 supports-[backdrop-filter]:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 transition-all duration-500 bg-neutral-900/95 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<div className="relative h-72 w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
<div className="absolute inset-0 grid place-items-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9d7e01ff-667f-45be-8590-d67a8d2fdeae_1600w.jpg)] bg-cover">
<div className="h-52 w-52 ring-1 ring-white/10 grid place-items-center shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_40px_rgba(16,185,129,0.12)] bg-neutral-950/50 rounded-[28px] backdrop-blur-lg">
<div className="h-40 w-40 rounded-full bg-[conic-gradient(at_center,_#22c55e,_#06b6d4,_#a855f7,_#f59e0b,_#22c55e)] p-2 animate-spin" id="colorWheel2" style={{animationDuration: '6s', animationDirection: 'reverse', animationPlayState: 'running'}}>
<div className="h-full w-full rounded-full bg-neutral-950 grid place-items-center">
<div className="h-12 w-12 rounded-full bg-neutral-900 ring-1 ring-white/10 hover:ring-emerald-400/40 transition-all duration-300 cursor-pointer"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative opacity-0 animate-[slideInRight_1s_ease-out_0.6s_forwards] pr-20 pl-20" style={{transform: 'translateX(100px)'}}>
<div className="flex gap-2 text-xs text-neutral-400 mb-4 items-center">
<span className="uppercase tracking-widest font-sans" style={{}}>Precision Sensor</span>
<span className="h-1 w-1 rounded-full bg-neutral-600 animate-pulse"></span>
<span className="text-emerald-400 font-sans animate-pulse" style={{}}>Pro Series</span>
</div>
<div className="flex flex-col gap-2 pb-8 space-y-5 items-baseline">
<h2 className="text-6xl font-semibold text-white tracking-tight mt-2" style={{}}>The Next Generation of Color Sensing</h2>
<p className="group-hover:text-neutral-200 transition-colors text-base text-neutral-300 mb-4" style={{}}>Experience unmatched color accuracy and rapid detection engineered for professionals.</p>
</div>

<div className="grid grid-cols-3 gap-3 max-w-md mt-6">
<div className="flex gap-2 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105 hover:ring-cyan-400/30 transition-all duration-300 cursor-pointer group bg-white/5 rounded-xl pt-2 pr-3 pb-2 pl-3 backdrop-blur-xl items-center">
<span className="text-xs font-medium text-neutral-300 font-sans group-hover:text-white transition-colors" style={{}}>Wi-Fi 6E</span>
</div>
<div className="flex gap-2 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105 hover:ring-emerald-400/30 transition-all duration-300 cursor-pointer group bg-white/5 rounded-xl pt-2 pr-3 pb-2 pl-3 backdrop-blur-md items-center">
<span className="group-hover:text-white transition-colors text-xs font-medium text-neutral-300" style={{}}>5 Year Warranty</span>
</div>
<div className="flex gap-2 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105 hover:ring-cyan-400/30 transition-all duration-300 cursor-pointer group bg-white/5 rounded-xl pt-2 pr-3 pb-2 pl-3 backdrop-blur-md items-center">
<span className="text-xs font-medium text-neutral-300 font-sans group-hover:text-white transition-colors" style={{}}>Express Delivery</span>
</div>
</div>



<div className="mt-8 flex flex-wrap items-center gap-3" id="buy">
<a className="relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white hover:scale-105 transition-all duration-200 group" href="#">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"></span>
<span className="absolute inset-0 rounded-xl ring-1 ring-emerald-400/40 group-hover:ring-emerald-400/60 transition-all"></span>
<span className="relative font-sans" style={{}}>Order Now</span>
</a>
<button className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-neutral-200 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-200 font-sans group" style={{}}>
                
                View Demo
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]" style={{transform: 'translateY(50px)'}}>
<div className="max-w-7xl mr-auto ml-auto pr-6 pb-6 pl-6">
<div className="mb-8">
<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-400 ring-1 ring-white/10 font-sans hover:ring-emerald-400/30 transition-all duration-300" style={{}}>
<span className="rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] font-medium text-neutral-300 font-sans animate-pulse" style={{}}>2024</span>
            Innovation
          </div>
<h2 className="max-w-2xl text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold hover:text-emerald-200 transition-colors duration-500" style={{}}>Precision Color Analysis, Redefined</h2>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" id="industry-cards">

<div className="relative rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/40 hover:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group" style={{transform: 'none', opacity: '1'}}>
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-emerald-400/30 group-hover:bg-emerald-400/10 transition-all duration-300">
<svg className="lucide lucide-palette w-[20px] h-[20px] text-zinc-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="text-xs text-neutral-500 font-sans group-hover:text-emerald-400 transition-colors" style={{}}>01</span>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight font-sans group-hover:text-emerald-200 transition-colors" style={{}}>Fashion</h3>
<p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors font-sans" style={{}}>Perfect color matching for garments, fabrics, and fashion accessories with professional-grade accuracy.</p>
</div>

<div className="relative ring-1 ring-white/10 supports-[backdrop-filter]:bg-neutral-900/40 bg-neutral-900/60 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur hover:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group" style={{transform: 'none', opacity: '1'}}>
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-emerald-400/30 group-hover:bg-emerald-400/10 transition-all duration-300">
<svg className="lucide lucide-shopping-bag w-[20px] h-[20px] text-zinc-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<span className="text-xs text-neutral-500 font-sans group-hover:text-emerald-400 transition-colors" style={{}}>02</span>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight font-sans group-hover:text-emerald-200 transition-colors" style={{}}>Retail</h3>
<p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors font-sans" style={{}}>Streamline inventory management and quality control with instant color verification systems.</p>
</div>

<div className="relative overflow-hidden ring-1 ring-emerald-400/30 bg-neutral-900/70 rounded-3xl pt-6 pr-6 pb-6 pl-6 hover:bg-neutral-900/90 hover:ring-emerald-400/50 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group" style={{transform: 'none', opacity: '1'}}>
<span className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/30 font-sans group-hover:bg-emerald-400/20 group-hover:text-emerald-200 transition-all" style={{}}>
              Accelerate design workflows
            </span>
<h3 className="mb-2 text-xl font-semibold tracking-tight font-sans group-hover:text-emerald-200 transition-colors" style={{}}>Interior Design &amp; Architecture</h3>
<p className="group-hover:text-neutral-200 transition-colors text-sm text-neutral-300 mb-4" style={{}}>Transform creative vision into reality with precise color coordination for spaces and materials.</p>
<button className="inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 text-xs font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-700 hover:scale-105 transition-all duration-200 font-sans">
              Explore Use Cases
              <svg className="lucide lucide-arrow-right h-4 w-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="relative rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/40 hover:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group" style={{transform: 'none', opacity: '1'}}>
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-emerald-400/30 group-hover:bg-emerald-400/10 transition-all duration-300">
<svg className="lucide lucide-factory w-[20px] h-[20px] text-zinc-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
</div>
<span className="text-xs text-neutral-500 font-sans group-hover:text-emerald-400 transition-colors" style={{}}>04</span>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight font-sans group-hover:text-emerald-200 transition-colors" style={{}}>Manufacturing</h3>
<p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors font-sans" style={{}}>Ensure consistent product quality with automated color inspection and batch verification.</p>
</div>
</div>

<div className="mt-6 flex gap-2">
<button aria-label="Prev" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" id="prevBtn">
<svg className="lucide lucide-chevron-left h-4 w-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" id="nextBtn">
<svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</section>

<section className="relative z-10 opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]" style={{transform: 'translateY(50px)'}}>
<div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid gap-12 lg:grid-cols-2">

<div className="relative">
<div className="absolute -inset-6 -z-10 opacity-30">
<img alt="" className="h-full w-full rounded-3xl object-cover mix-blend-overlay hover:opacity-50 transition-opacity duration-500" src="https://cdn.midjourney.com/f50bf4af-8fd7-4c3c-b93c-e3927506a2c9/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="relative max-w-md ring-1 ring-white/10 bg-neutral-900/40 rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 hover:ring-white/20 hover:bg-neutral-900/60 transition-all duration-500">
<div className="relative aspect-square w-full">

<div className="absolute inset-0 rounded-2xl border border-dashed border-emerald-400/20 animate-pulse"></div>
<div className="absolute inset-6 rounded-2xl border border-dashed border-cyan-400/20 animate-pulse" style={{animationDelay: '0.5s'}}></div>

<div className="absolute left-6 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300 cursor-pointer group">
<div className="grid h-16 w-16 place-items-center rounded-full bg-neutral-900 ring-1 ring-white/10 group-hover:ring-emerald-400/40 group-hover:bg-neutral-800 transition-all duration-300">
<svg className="lucide lucide-target w-[24px] h-[24px] text-zinc-400 group-hover:text-emerald-400 transition-colors" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<p className="mt-2 text-sm text-neutral-300 group-hover:text-emerald-200 transition-colors font-sans" style={{}}>1.5 mm Precision</p>
</div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 text-right hover:scale-110 transition-transform duration-300 cursor-pointer group">
<div className="grid h-16 w-16 place-items-center rounded-full bg-neutral-900 ring-1 ring-white/10 group-hover:ring-emerald-400/40 group-hover:bg-neutral-800 transition-all duration-300">
<span className="text-xl font-semibold text-zinc-400 group-hover:text-emerald-400 transition-colors font-sans" style={{}}>45</span>
</div>
<p className="mt-2 text-sm text-neutral-300 group-hover:text-emerald-200 transition-colors font-sans" style={{}}>Spectral bands</p>
</div>
<div className="absolute left-1/2 top-6 -translate-x-1/2 hover:scale-110 transition-transform duration-300 cursor-pointer group">
<div className="grid h-16 w-16 place-items-center rounded-full bg-neutral-900 ring-1 ring-white/10 group-hover:ring-emerald-400/40 group-hover:bg-neutral-800 transition-all duration-300">
<svg className="lucide lucide-shield w-[24px] h-[24px] text-zinc-400 group-hover:text-emerald-400 transition-colors" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<p className="mt-2 text-sm text-neutral-300 text-center w-28 -ml-6 group-hover:text-emerald-200 transition-colors font-sans" style={{}}>Industrial Grade</p>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 hover:scale-110 transition-transform duration-300 cursor-pointer group">
<div className="grid h-16 w-16 place-items-center rounded-full bg-neutral-900 ring-1 ring-white/10 group-hover:ring-emerald-400/40 group-hover:bg-neutral-800 transition-all duration-300">
<span className="text-xl font-semibold text-zinc-400 group-hover:text-emerald-400 transition-colors font-sans" style={{}}>×8</span>
</div>
<p className="mt-2 text-sm text-neutral-300 text-center w-32 -ml-8 group-hover:text-emerald-200 transition-colors font-sans" style={{}}>Enhanced sensitivity</p>
</div>
</div>
</div>
</div>

<div className="">
<div className="mb-4 flex flex-wrap items-center gap-2 text-xs" id="tech-tabs">
<button className="tech-tab active rounded-full bg-emerald-400/10 px-3 py-1 font-medium text-emerald-300 ring-1 ring-emerald-400/30 font-sans transition-all duration-200" data-tab="technology" style={{}}>Technology</button>
<button className="tech-tab rounded-full bg-white/5 px-3 py-1 font-medium text-neutral-300 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-200 font-sans" data-tab="specs" style={{}}>Technical Specs</button>
<button className="tech-tab rounded-full bg-white/5 px-3 py-1 font-medium text-neutral-300 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-200 font-sans" data-tab="certifications" style={{}}>Certifications</button>
</div>
<div className="tech-content" id="technology">
<h3 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold hover:text-emerald-200 transition-colors duration-500" style={{}}>Industry‑leading precision, professionally certified</h3>
<p className="mt-4 text-neutral-300 font-sans" style={{}}>Advanced multi-spectral analysis technology delivers unmatched color accuracy across diverse materials and lighting conditions. Engineered for professionals who demand excellence in every measurement.</p>
</div>
<div className="tech-content hidden" id="specs">
<h3 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold" style={{}}>Technical Specifications</h3>
<p className="mt-4 text-neutral-300 font-sans" style={{}}>Precision engineered with cutting-edge hardware and software integration for professional color analysis workflows.</p>
<div className="mt-6 space-y-3">
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-sm text-neutral-400 font-sans">Spectral Range</span>
<span className="text-sm text-neutral-200 font-sans">380-780 nm</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-sm text-neutral-400 font-sans">Accuracy</span>
<span className="text-sm text-neutral-200 font-sans">±0.03 ΔE*ab</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-sm text-neutral-400 font-sans">Measurement Time</span>
<span className="text-sm text-neutral-200 font-sans">0.5 seconds</span>
</div>
</div>
</div>
<div className="tech-content hidden" id="certifications">
<h3 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold" style={{}}>Certifications &amp; Standards</h3>
<p className="mt-4 text-neutral-300 font-sans" style={{}}>Meets and exceeds international standards for color measurement and professional certification requirements.</p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
<div className="text-sm font-medium text-white font-sans">ISO 11664</div>
<div className="text-xs text-neutral-400 font-sans">Colorimetry Standards</div>
</div>
<div className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
<div className="text-sm font-medium text-white font-sans">CIE Standard</div>
<div className="text-xs text-neutral-400 font-sans">Illuminant D65</div>
</div>
</div>
</div>
<div className="mt-6 grid gap-6 sm:grid-cols-2">
<div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
<div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 transition-all">
<svg className="lucide lucide-star w-[20px] h-[20px] text-zinc-400 hover:text-emerald-400 transition-colors" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="">
<div className="flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-sans font-semibold rating-number" data-target="4.8" style={{}}>0</span>
<span className="text-sm text-neutral-400 font-sans" style={{}}>/5</span>
</div>
<p className="text-xs text-neutral-400 font-sans" style={{}}>22k+ professional reviews</p>
</div>
</div>
<div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
<div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 transition-all">
<svg className="lucide lucide-users w-[20px] h-[20px] text-gray-400 hover:text-emerald-400 transition-colors" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<div className="flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-sans font-semibold rating-number" data-target="94" style={{}}>0%</span>
</div>
<p className="text-xs text-neutral-400 font-sans" style={{}}>Users recommend to colleagues</p>
</div>
</div>
</div>
<div className="mt-8">
<a className="relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white hover:scale-105 transition-all duration-200 group" href="#">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"></span>
<span className="absolute inset-0 rounded-xl ring-1 ring-emerald-400/40 group-hover:ring-emerald-400/60 transition-all"></span>
<span className="relative font-sans" style={{}}>Technical Documentation</span>
<svg className="lucide lucide-chevrons-right relative h-4 w-4 group-hover:translate-x-1 transition-transform" data-lucide="chevrons-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 opacity-0 animate-[fadeInUp_1s_ease-out_1.4s_forwards]" style={{transform: 'translateY(50px)'}}>
<div className="max-w-7xl mr-auto ml-auto pr-6 pb-20 pl-6">
<div className="relative overflow-hidden md:p-12 ring-1 ring-zinc-800 rounded-3xl pt-8 pr-8 pb-8 pl-8 hover:ring-emerald-400/20 hover:scale-[1.02] transition-all duration-500 cursor-pointer group">
<div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08),transparent_35%)] group-hover:opacity-150 transition-opacity"></div>
<div className="absolute inset-0 opacity-[0.20]">
<img alt="" className="h-full w-full object-cover group-hover:opacity-30 transition-opacity duration-500" src="https://cdn.midjourney.com/235154ac-6c61-4975-8203-3d840d93cf8c/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="relative mx-auto max-w-3xl text-center">
<div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/20 group-hover:ring-emerald-400/50 group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-eye h-7 w-7 text-emerald-300 group-hover:scale-110 transition-transform" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold group-hover:text-emerald-200 transition-colors duration-500" style={{}}>Universal Color Standards</h3>
<p className="mx-auto mt-4 max-w-2xl text-neutral-300 group-hover:text-neutral-200 transition-colors font-sans" style={{}}>Instantly capture and convert colors to industry-standard formats including Pantone®, RAL, LAB, RGB, HSB, and HEX. The ChromaMax Pro ensures consistent color communication across all your workflows and teams.</p>
<div className="mt-7">
<a className="relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white hover:scale-105 transition-all duration-200 group/btn" href="#">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"></span>
<span className="absolute inset-0 rounded-xl ring-1 ring-emerald-400/40 group-hover/btn:ring-emerald-400/60 transition-all"></span>
<span className="relative font-sans" style={{}}>Discover Features</span>
<svg className="lucide lucide-arrow-right relative h-4 w-4 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 opacity-0 animate-[fadeInUp_1s_ease-out_1.6s_forwards]" id="company" style={{transform: 'translateY(50px)'}}>
<div className="border-white/10 border-t">
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="grid gap-10 md:grid-cols-3">
<div className="flex flex-col gap-4">
<a className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="#">
<span className="relative inline-grid h-10 w-10 place-items-center rounded-xl bg-neutral-900 ring-1 ring-white/10 hover:ring-emerald-400/30 transition-all">
<span className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"></span>
<span className="relative text-xl font-semibold tracking-tight font-sans" style={{}}>C</span>
</span>
<div className="flex flex-col leading-none">
<span className="text-sm font-medium text-neutral-300 font-sans" style={{}}>CHROMAMAX</span>
<span className="text-xs text-neutral-500 font-sans" style={{}}>SYSTEMS</span>
</div>
</a>
<div className="mt-2 flex items-center gap-3">
<a aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" href="#">
<svg className="lucide lucide-instagram h-4 w-4 text-neutral-300" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" href="#">
<svg className="lucide lucide-facebook h-4 w-4 text-neutral-300" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-200" href="#">
<svg className="lucide lucide-youtube h-4 w-4 text-neutral-300" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
<p className="mt-2 text-xs text-neutral-500 font-sans" style={{}}>© 2024 CHROMAMAX SYSTEMS. All rights reserved.</p>
</div>
<div className="grid grid-cols-3 gap-8 md:col-span-2">
<div className="">
<h4 className="mb-3 text-sm font-semibold tracking-tight text-white font-sans" style={{}}>Solutions</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#" style={{}}>Pro Sensor</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#" style={{}}>Accessories</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#" style={{}}>SDK &amp; APIs</a></li>
</ul>
</div>
<div className="" id="contact">
<h4 className="mb-3 text-sm font-semibold tracking-tight text-white font-sans" style={{}}>Support</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#" style={{}}>Help Center</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#" style={{}}>Contact Sales</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#" style={{}}>Training</a></li>
</ul>
</div>
<div className="">
<h4 className="mb-3 text-sm font-semibold tracking-tight text-white font-sans" style={{}}>About</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#" style={{}}>Our Story</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#" style={{}}>Press Kit</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#" style={{}}>Terms</a></li>
</ul>
</div>
</div>
</div>

<div className="mt-10 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-apple h-4 w-4" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg> App Store
            </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Google Play
            </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-monitor h-4 w-4" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg> Desktop App
            </a>
</div>
<div className="mt-6 flex flex-wrap gap-4 text-xs text-neutral-500">
<a className="hover:text-neutral-300 hover:scale-105 transition-all duration-200 font-sans" href="#" style={{}}>Terms of Service</a>
<a className="hover:text-neutral-300 hover:scale-105 transition-all duration-200 font-sans" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-neutral-300 hover:scale-105 transition-all duration-200 font-sans" href="#" style={{}}>Cookie Preferences</a>
</div>
</div>
</div>
</footer>



<style>
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-100%);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Ensure smooth scrolling */
      html {
        scroll-behavior: smooth;
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 6px;
      }

      ::-webkit-scrollbar-track {
        background: #171717;
      }

      ::-webkit-scrollbar-thumb {
        background: #404040;
        border-radius: 3px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #525252;
      }
    </style>

    </>
  );
}

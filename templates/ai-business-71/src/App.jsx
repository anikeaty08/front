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
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const indicators = document.querySelectorAll('.indicator');
        const images = document.querySelectorAll('.case-image');
        const contents = document.querySelectorAll('.case-content');
        
        let currentSlide = 0;
        const totalSlides = 3;

        function updateCarousel() {
          // Update images with slide effect
          images.forEach((img, index) => {
            if (index === currentSlide) {
              img.style.opacity = '1';
              img.style.transform = 'translateX(0)';
            } else if (index < currentSlide) {
              img.style.opacity = '0';
              img.style.transform = 'translateX(-100%)';
            } else {
              img.style.opacity = '0';
              img.style.transform = 'translateX(100%)';
            }
          });

          // Update content with fade effect
          contents.forEach((content, index) => {
            if (index === currentSlide) {
              content.style.opacity = '1';
              content.style.zIndex = '10';
            } else {
              content.style.opacity = '0';
              content.style.zIndex = '1';
            }
          });
          
          // Update indicators
          indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
              indicator.classList.remove('bg-white/20', 'w-2');
              indicator.classList.add('bg-white/50', 'w-8');
            } else {
              indicator.classList.remove('bg-white/50', 'w-8');
              indicator.classList.add('bg-white/20', 'w-2');
            }
          });

          // Update button states
          prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
          nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
        }

        function nextSlide() {
          if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateCarousel();
          }
        }

        function prevSlide() {
          if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
          }
        }

        function goToSlide(slideIndex) {
          if (slideIndex >= 0 && slideIndex < totalSlides) {
            currentSlide = slideIndex;
            updateCarousel();
          }
        }

        // Button event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Indicator event listeners
        indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', () => goToSlide(index));
        });

        // Initialize
        updateCarousel();
      })();
    


    (function() {
      const toggle = document.getElementById('billing-toggle');
      const toggleSwitch = document.getElementById('toggle-switch');
      const monthlyLabel = document.getElementById('monthly-label');
      const annualLabel = document.getElementById('annual-label');
      const growthPrice = document.getElementById('growth-price');
      const scalePrice = document.getElementById('scale-price');
      
      let isAnnual = false;
      
      const prices = {
        growth: {
          monthly: 89,
          annual: 71 // 20% discount: 89 * 0.8 = 71.2, rounded to 71
        },
        scale: {
          monthly: 199,
          annual: 159 // 20% discount: 199 * 0.8 = 159.2, rounded to 159
        }
      };
      
      function updatePricing() {
        if (isAnnual) {
          growthPrice.textContent = `$${prices.growth.annual}`;
          scalePrice.textContent = `$${prices.scale.annual}`;
          monthlyLabel.classList.remove('text-white/90');
          monthlyLabel.classList.add('text-white/80');
          annualLabel.classList.remove('text-white/80');
          annualLabel.classList.add('text-white/90');
        } else {
          growthPrice.textContent = `$${prices.growth.monthly}`;
          scalePrice.textContent = `$${prices.scale.monthly}`;
          monthlyLabel.classList.remove('text-white/80');
          monthlyLabel.classList.add('text-white/90');
          annualLabel.classList.remove('text-white/90');
          annualLabel.classList.add('text-white/80');
        }
      }
      
      function toggleBilling() {
        isAnnual = !isAnnual;
        
        // Update toggle appearance
        toggle.setAttribute('aria-pressed', isAnnual.toString());
        
        if (isAnnual) {
          // Move to annual (right side)
          toggleSwitch.style.transform = 'translateX(28px)';
          toggle.classList.remove('bg-gradient-to-r', 'from-[#4a5668]', 'to-slate-200/10', 'justify-start');
          toggle.classList.add('bg-gradient-to-l', 'from-slate-200/10', 'to-[#4a5668]', 'justify-end');
        } else {
          // Move to monthly (left side)
          toggleSwitch.style.transform = 'translateX(0px)';
          toggle.classList.remove('bg-gradient-to-l', 'from-slate-200/10', 'to-[#4a5668]', 'justify-end');
          toggle.classList.add('bg-gradient-to-r', 'from-[#4a5668]', 'to-slate-200/10', 'justify-start');
        }
        
        updatePricing();
      }
      
      toggle.addEventListener('click', toggleBilling);
      
      // Initialize
      updatePricing();
    })();
  


      // Starfield animation
      const canvas = document.getElementById('stars');
      const ctx = canvas.getContext('2d');
      
      let stars = [];
      let animationId;

      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initStars();
      }

      function initStars() {
        stars = [];
        const numStars = Math.floor((canvas.width * canvas.height) / 8000);
        
        for (let i = 0; i < numStars; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.2,
            alpha: Math.random() * 0.8 + 0.2,
            twinkleSpeed: Math.random() * 0.02 + 0.01
          });
        }
      }

      function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
          ctx.save();
          ctx.globalAlpha = star.alpha;
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          
          // Twinkling effect
          star.alpha += star.twinkleSpeed;
          if (star.alpha >= 1 || star.alpha <= 0.2) {
            star.twinkleSpeed = -star.twinkleSpeed;
          }
        });
      }

      function animate() {
        drawStars();
        animationId = requestAnimationFrame(animate);
      }

      // Initialize and start animation
      resizeCanvas();
      animate();

      // Handle resize
      window.addEventListener('resize', resizeCanvas);

      // Clean up on page unload
      window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationId);
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 saturate-0 absolute"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/fireparticleloaderanimationdrstrangeporta-2XtNK3LbyCGmClvus9SdgnYJ/" width="100%"></iframe></div></div>

<div className="relative min-h-screen" style={{}}>

<header className="sticky top-0 z-30" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{}}>
<div className="fade-in-blur delay-100 flex h-16 items-center justify-between rounded-b-xl bg-black/60 backdrop-blur border border-white/5 px-3 sm:px-4" style={{}}>

<a className="flex items-center gap-3" href="#">
<span className="inline-flex items-center justify-center bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<svg className="h-5 w-5 text-white/90" viewbox="0 0 24 24">
<defs>
<lineargradient id="g1" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#a78bfa"></stop>
<stop offset="100%" stop-color="#7c3aed"></stop>
</lineargradient>
</defs>
<path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm2.6 14.9a4.5 4.5 0 0 1-6.5-6.2l6.7 6.2a4.1 4.1 0 0 1-.2 0Zm1.8-1.8-6.7-6.2A4.5 4.5 0 0 1 16.4 15Z" fill="url(#g1)"></path>
</svg>
</span>
<span className="text-base font-semibold tracking-tight cursor-pointer" id="aura-emfvc3i44" onclick="window.location.href='/home'" role="button">Neural</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition text-sm font-medium text-white/80" href="/home" id="aura-emfvc3ewb">Home</a>
<a className="hover:text-white transition text-sm font-medium text-white/70" href="/about">About</a>
<a className="hover:text-white transition text-sm font-medium text-white/70" href="/solutions">Solutions</a>
<a className="hover:text-white transition text-sm font-medium text-white/70" href="/contact">Contact</a>
</nav>

<div className="flex items-center gap-2" style={{}}>
<button aria-label="Create Account" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2))'}} type="button">
<span className="flex items-center justify-center gap-2 text-[15px] leading-none min-w-[140px] transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 w-full h-full rounded-lg pt-3 pr-5 pb-3 pl-5" id="aura-emfvc2gfm" style={{}}>
<span className="cursor-pointer" id="aura-emfvc2d7p" onclick="window.location.href='/sign up'" role="button" style={{}}>Get Started</span>
<svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg ring-1 ring-white/10 hover:bg-white/5" style={{}}>
<svg className="lucide lucide-menu h-4 w-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16" style={{}}></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden" style={{}}>

<canvas className="absolute inset-0 z-0" height="902" style={{width: '1512px', height: '642.75px'}} width="1512"></canvas>

<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<div className="relative h-[44rem] w-[44rem] max-w-none opacity-40 animate-rotate-slow">
<div className="absolute inset-0 rounded-full blur-3xl bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.35),rgba(0,0,0,0)_60%)]"></div>
<div className="absolute inset-10 rounded-full blur-2xl bg-[conic-gradient(from_0deg_at_50%_50%,rgba(124,58,237,0.35),rgba(0,0,0,0)_30%,rgba(124,58,237,0.35)_60%,rgba(0,0,0,0)_85%)]"></div>
</div>
</div>
<div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24 text-center" style={{}}>

<div className="fade-in-blur delay-200 mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-inset ring-white/10 backdrop-blur" style={{}}>
<span className="text-[11px] font-semibold text-purple-300">New</span>
<span className="text-[12px] font-medium text-white/80" style={{}}>AI-Powered Business Automation</span>
</div>

<h1 className="fade-in-up delay-300 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-3xl font-semibold tracking-tight font-space-grotesk max-w-4xl mr-auto ml-auto" style={{}}>Your AI Transformation Partner</h1>

<p className="fade-in-up delay-400 mt-5 max-w-2xl mx-auto text-base sm:text-lg text-white/70" style={{}}>
            We build intelligent systems that streamline operations, boost productivity, and drive growth for modern enterprises.
          </p>

<div className="fade-in-up delay-500 flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 gap-x-3 gap-y-3 items-center justify-center" style={{}}>
<div className="relative inline-block group" style={{}}>
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/95 border-white/20 border rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" style={{'--x': '199.6484375px', '--y': '12px', '--o': '0'}}>
<span className="relative z-10 inline-flex items-center gap-2 font-semibold" style={{}}>Get Started Free<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-12 sm:py-20 fade-in-up delay-600" style={{}}>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4" style={{}}>
<div className="text-center mb-8 sm:mb-12">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wide">Trusted by innovative companies</p>
</div>

<div className="relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

<div className="ticker-track flex gap-8 sm:gap-16 pt-2 pb-2 items-center">

<div className="flex gap-8 sm:gap-16 shrink-0 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-normal tracking-tighter">StreamFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-bold tracking-tighter font-bricolage">ZenithLabs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-semibold tracking-tighter font-merriweather">DataVault</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-normal tracking-tighter font-instrument-serif">PulseCore</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-semibold tracking-tighter font-playfair">NovaTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-normal tracking-tighter">FlexiCore</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-bold tracking-tighter">ReactiveAI</span>
</div>
</div>

<div className="flex items-center gap-8 sm:gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-normal tracking-tighter">StreamFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-bold tracking-tighter font-bricolage">ZenithLabs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-semibold tracking-tighter font-merriweather">DataVault</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-normal tracking-tighter font-instrument-serif">PulseCore</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-semibold tracking-tighter font-playfair">NovaTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-normal tracking-tighter">FlexiCore</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-base sm:text-lg font-bold tracking-tighter">ReactiveAI</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-12 sm:py-20 max-w-7xl mr-auto ml-auto px-4 sm:px-6 lg:px-8" style={{}}>

<div className="fade-in-up delay-100 mx-auto max-w-4xl text-center mb-12 sm:mb-16" style={{}}>
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10">Our Solutions</span>
<h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight font-space-grotesk" style={{}}>AI-Powered Solutions That Scale Your Business</h2>
<p className="mt-4 text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl mx-auto">Transform your operations with intelligent automation that adapts, learns, and grows with your business needs</p>
</div>

<div className="grid gap-8 lg:gap-16 md:grid-cols-2 items-center mb-16 sm:mb-24" style={{}}>

<div className="fade-in-left delay-200 relative order-2 md:order-1" style={{}}>
<div className="ring-inset p-4 sm:p-6 bg-[#000000]/5 ring-white/10 ring-1 rounded-2xl" style={{}}>

<div className="mb-4 inline-flex items-center rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 p-1 text-xs text-white/70">
<span className="px-3 py-1 rounded-md bg-white/10 text-white">Active Tasks</span>
<span className="px-3 py-1 rounded-md">Pending Review</span>
</div>

<div className="space-y-2.5 relative overflow-hidden" style={{height: '240px'}}>

<div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>

<div className="animate-scroll-up" style={{}}>

<div className="flex items-center justify-between rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 px-3 py-2.5" style={{}}>
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-user-plus h-4 w-4 text-white/80" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</span>
<div>
<div className="text-sm font-medium text-white/90">Customer onboarding</div>
<div className="text-[11px] text-white/50">85% completion rate</div>
</div>
</div>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-trending-up h-3.5 w-3.5 text-white/70" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</span>
</div>

<div className="flex items-center justify-between rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 px-3 py-2.5" style={{}}>
<div className="flex items-center gap-3" style={{}}>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-file-check h-4 w-4 text-white/80" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
</span>
<div style={{}}>
<div className="text-sm font-medium text-white/90" style={{}}>Invoice processing</div>
<div className="text-[11px] text-white/50" style={{}}>Automated approval sent</div>
</div>
</div>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white/70" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</div>

<div className="flex items-center justify-between rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 px-3 py-2.5">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-package h-4 w-4 text-white/80" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</span>
<div>
<div className="text-sm font-medium text-white/90">Inventory management</div>
<div className="text-[11px] text-white/50">Restocking in progress</div>
</div>
</div>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-refresh-cw h-3.5 w-3.5 text-white/70" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</span>
</div>

<div className="flex items-center justify-between rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 px-3 py-2.5">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-shield-check h-4 w-4 text-white/80" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div>
<div className="text-sm font-medium text-white/90">Quality control</div>
<div className="text-[11px] text-white/50">3 days ago</div>
</div>
</div>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white/70" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</div>

<div className="flex items-center justify-between rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 px-3 py-2.5 opacity-90">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-bar-chart-3 h-4 w-4 text-white/80" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</span>
<div>
<div className="text-sm font-medium text-white/90">Campaign analysis</div>
<div className="text-[11px] text-white/50">Scheduled for review</div>
</div>
</div>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-clock h-3.5 w-3.5 text-white/70" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
</div>

<div className="flex items-center justify-between rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 px-3 py-2.5">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-server h-4 w-4 text-white/80" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</span>
<div>
<div className="text-sm font-medium text-white/90">System backup</div>
<div className="text-[11px] text-white/50">Completed successfully</div>
</div>
</div>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white/70" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 px-3 py-2.5">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-send h-4 w-4 text-white/80" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</span>
<div>
<div className="text-sm font-medium text-white/90">Email sequences</div>
<div className="text-[11px] text-white/50">Auto-scheduled delivery</div>
</div>
</div>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-clock h-3.5 w-3.5 text-white/70" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
</div>
</div>
</div>
</div>
</div>

<div className="fade-in-right delay-300 order-1 md:order-2" style={{}}>
<div className="mb-4 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10">Process Automation</div>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight font-space-grotesk" style={{}}>Eliminate Manual Work Forever</h3>
<p className="mt-3 text-sm sm:text-base lg:text-lg text-white/70" style={{}}>Transform repetitive tasks into intelligent workflows. Our AI handles everything from data entry to complex approval chains, reducing errors by 95% and saving 20+ hours per week.</p>
<div className="mt-6 flex flex-wrap items-center gap-3" style={{}}>
<span className="inline-flex items-center rounded-full bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm text-white/90 ring-1 ring-inset ring-white/10">Smart Workflows</span>
<span className="inline-flex items-center rounded-full bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm text-white/90 ring-1 ring-inset ring-white/10">200+ Integrations</span>
<span className="inline-flex items-center rounded-full bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm text-white/90 ring-1 ring-inset ring-white/10">Zero Downtime</span>
</div>
</div>
</div>

<div className="grid gap-8 lg:gap-16 md:grid-cols-2 mb-16 sm:mb-24 items-center">

<div className="fade-in-left delay-400 order-1">
<div className="mb-4 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10">AI Assistant</div>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight font-space-grotesk" style={{}}>Your 24/7 Business Intelligence</h3>
<p className="mt-3 text-sm sm:text-base lg:text-lg text-white/70">Deploy AI agents that never sleep. From customer support to data analysis, our intelligent assistants handle complex tasks while you focus on strategy and growth.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center rounded-full bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm text-white/90 ring-1 ring-inset ring-white/10">Natural Language</span>
<span className="inline-flex items-center rounded-full bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm text-white/90 ring-1 ring-inset ring-white/10">Multi-Modal</span>
<span className="inline-flex items-center rounded-full bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm text-white/90 ring-1 ring-inset ring-white/10">Enterprise Ready</span>
</div>
</div>

<div className="fade-in-right delay-500 order-2">
<div className="ring-inset p-4 sm:p-6 bg-[#000000]/5 ring-white/10 ring-1 rounded-2xl relative overflow-hidden">
<div className="ring-inset relative overflow-hidden bg-black/40 ring-white/10 ring-1 rounded-lg p-4 sm:p-5">

<div className="flex flex-col items-center text-center">
<div className="mt-3 text-sm font-medium text-white/90">How can I assist you today?</div>
<div className="mt-1 text-[11px] text-white/50 max-w-xs">Ask me about analytics, operations, customer insights, or any business process you'd like to optimize</div>
</div>

<div className="mt-4 rounded-md bg-white/5 ring-1 ring-inset ring-white/10 p-2.5">
<div className="flex items-center justify-between gap-2">
<div className="text-sm text-white/80">Generate monthly performance report</div>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-send h-3.5 w-3.5 text-white/70" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</span>
</div>
<button className="mt-2 inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-paperclip h-3.5 w-3.5 text-white/70" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
            Attach data source
          </button>
</div>

<div className="mt-4 h-20 relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>

<div className="animate-scroll-vertical flex flex-col gap-2">
<div className="flex flex-wrap gap-2 items-center">
<span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-brain h-3.5 w-3.5 text-white/70" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
                Analyze
              </span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-white/70" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Generate Content
              </span>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-search h-3.5 w-3.5 text-white/70" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                Research
              </span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-zap h-3.5 w-3.5 text-white/70" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                Automate
              </span>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-calendar-days h-3.5 w-3.5 text-white/70" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                Schedule
              </span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-shield-check h-3.5 w-3.5 text-white/70" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Secure Data
              </span>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-users h-3.5 w-3.5 text-white/70" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Team Collab
              </span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-file-bar-chart h-3.5 w-3.5 text-white/70" data-lucide="file-bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 18v-2"></path><path d="M12 18v-4"></path><path d="M16 18v-6"></path></svg>
                Reports
              </span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-b-2xl"></div>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mr-auto ml-auto pb-16 sm:pb-20">

<div className="fade-in-up delay-100 mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10">Our Process</span>
<h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight font-space-grotesk" style={{}}>How We Transform Your Business in 4 Steps</h2>
<p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl mx-auto">From analysis to optimization, we deliver scalable AI solutions that grow with your business</p>
</div>

<div className="grid gap-6 sm:gap-8 md:grid-cols-2 px-4 sm:px-6 lg:px-8">

<div className="slide-in-scale delay-200 rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-5 sm:p-6">
<div className="mb-3">
<span className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">Step 1</span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Deep Business Analysis</h3>
<p className="mt-2 text-sm text-white/70">We dive deep into your workflows, identifying bottlenecks and automation opportunities that deliver maximum impact.</p>
<div className="mt-4 rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 p-3 sm:p-4">
<div className="grid grid-cols-2 gap-3">

<div className="ring-inset flex bg-black/40 ring-white/10 ring-1 rounded-md pt-3 pr-3 pb-3 pl-3 items-center justify-center">
<div className="relative w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full transform -rotate-90" viewbox="0 0 120 120">
<circle cx="60" cy="60" fill="none" r="48" stroke="rgba(255,255,255,0.08)" strokeWidth="8"></circle>
</svg>

<svg className="absolute inset-0 w-full h-full transform -rotate-90" viewbox="0 0 120 120">
<circle cx="60" cy="60" fill="none" r="48" stroke="rgba(255,255,255,0.9)" stroke-dasharray="301.59" stroke-dashoffset="75.4" strokeLinecap="round" strokeWidth="8" style={{animation: 'progressRing 3s ease-in-out infinite'}}></circle>
</svg>

<div className="relative z-10 text-center">
<div className="text-base sm:text-lg font-semibold text-white/90">92%</div>
<div className="text-xs text-white/60 mt-1">Analyzed</div>
</div>
</div>
</div>

<div className="rounded-md ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="flex items-center justify-between px-3 py-2 text-[12px] bg-white/5 border-b border-white/10">
<span className="text-white/80">Workflow audit</span>
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white/70" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-[12px] border-b border-white/10">
<span className="text-white/80">Pain point mapping</span>
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white/70" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-[12px] border-b border-white/10">
<span className="text-white/80">ROI calculation</span>
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white/70" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-[12px] border-b border-white/10">
<span className="text-white/80">Tech stack review</span>
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white/70" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-[12px]">
<span className="text-white/80">Strategy roadmap</span>
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-clock h-3.5 w-3.5 text-white/70" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
</div>
</div>
</div>
<div className="mt-2 text-[11px] text-white/50">Analyzing current systems and processes...</div>
</div>
</div>

<div className="slide-in-scale delay-300 rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-5 sm:p-6">
<div className="mb-3">
<span className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">Step 2</span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">AI Solution Development</h3>
<p className="mt-2 text-sm text-white/70">Our expert team builds custom AI models and automation systems tailored to your specific business requirements.</p>
<div className="mt-4 rounded-lg bg-black/40 ring-1 ring-inset ring-white/10">

<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
</div>
<div className="text-[11px] text-white/50">neural_automation.py</div>
<div className="inline-flex h-6 w-6 items-center justify-center rounded bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-cpu h-3.5 w-3.5 text-white/70" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
</div>

<div className="text-[12px] leading-relaxed font-geist-mono pt-4 pr-4 pb-4 pl-4" style={{height: '260px', overflow: 'hidden', position: 'relative'}}>

<div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>

<div className="animate-smooth-code-scroll">
<pre className="whitespace-pre-wrap"><span className="text-white/50"># Neural Business Intelligence System</span>
<span className="text-purple-300">import</span> tensorflow <span className="text-purple-300">as</span> tf
<span className="text-purple-300">from</span> neural_optimizer <span className="text-purple-300">import</span> BusinessProcessor, ModelOrchestrator
<span className="text-purple-300">from</span> automation_core <span className="text-purple-300">import</span> WorkflowEngine

<span className="text-white/50"># Initialize AI components</span>
processor = BusinessProcessor(learning_rate=<span className="text-yellow-300">0.001</span>)
orchestrator = ModelOrchestrator()
workflow = WorkflowEngine()

<span className="text-white/50"># Smart trigger system</span>
<span className="text-purple-300">def</span> <span className="text-blue-300">intelligent_trigger</span>(data, context):
    predictions = processor.analyze(data)
    <span className="text-purple-300">if</span> predictions.confidence &gt; <span className="text-yellow-300">0.85</span>:
        workflow.execute(predictions.action)
        <span className="text-blue-300">return</span> <span className="text-green-300">"Automation executed successfully"</span>
    <span className="text-blue-300">return</span> <span className="text-green-300">"Waiting for higher confidence"</span>

<span className="text-white/50"># Advanced lead scoring with ML</span>
<span className="text-purple-300">def</span> <span className="text-blue-300">score_prospects</span>(leads_data):
    features = processor.extract_features(leads_data)
    scores = orchestrator.predict_conversion(features)
    
    <span className="text-purple-300">for</span> lead, score <span className="text-purple-300">in</span> zip(leads_data, scores):
        <span className="text-purple-300">if</span> score &gt; <span className="text-yellow-300">0.7</span>:
            workflow.prioritize_lead(lead, priority=<span className="text-green-300">"high"</span>)
            notify_sales_team(lead, score)
    
<span className="text-white/50"># Real-time model optimization</span>
<span className="text-purple-300">def</span> <span className="text-blue-300">continuous_learning</span>(feedback_data):
    model_performance = orchestrator.evaluate(feedback_data)
    
    <span className="text-purple-300">if</span> model_performance.accuracy &lt; <span className="text-yellow-300">0.9</span>:
        orchestrator.retrain_model(feedback_data)
        processor.update_parameters()
        
<span className="text-white/50"># Customer behavior prediction</span>
<span className="text-purple-300">def</span> <span className="text-blue-300">predict_churn</span>(customer_data):
    risk_scores = processor.calculate_churn_risk(customer_data)
    
    <span className="text-purple-300">for</span> customer, risk <span className="text-purple-300">in</span> risk_scores.items():
        <span className="text-purple-300">if</span> risk &gt; <span className="text-yellow-300">0.6</span>:
            workflow.trigger_retention_campaign(customer)
            
<span className="text-blue-300">return</span> <span className="text-green-300">"AI optimization complete"</span></pre>
</div>
</div>
</div>
</div>

<div className="slide-in-scale delay-400 ring-1 ring-inset ring-white/10 sm:p-6 bg-white/5 max-h-fit rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="mb-3">
<span className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10">Step 3</span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Seamless Integration</h3>
<p className="mt-2 text-sm text-white/70">We deploy and integrate AI solutions into your existing tech stack with zero downtime and full team training.</p>
<div className="mt-4 rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 p-4">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<div className="rounded-md bg-white/5 ring-1 ring-inset ring-white/10 p-3 flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-cloud h-4 w-4 text-white/80" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</span>
<div className="text-xs text-white/80">Cloud</div>
</div>
<div className="rounded-md bg-white/5 ring-1 ring-inset ring-white/10 p-3 flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-smartphone h-4 w-4 text-white/80" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</span>
<div className="text-xs text-white/80">Mobile</div>
</div>
<div className="rounded-md bg-white/5 ring-1 ring-inset ring-white/10 p-3 flex items-center gap-2 col-span-2 sm:col-span-1">
<span className="inline-flex h-7 w-7 items-center justify-center rounded bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-globe h-4 w-4 text-white/80" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</span>
<div className="text-xs text-white/80">Web APIs</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between rounded-md bg-white/5 ring-1 ring-inset ring-white/10 px-3 py-2">
<div className="text-[12px] text-white/80">Integration status</div>
<div className="inline-flex items-center gap-1 text-[11px] text-white/70">
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/5 ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            3/3 connected
          </div>
</div>
</div>
</div>

<div className="slide-in-scale delay-500 ring-inset p-5 sm:p-6 bg-white/5 ring-white/10 ring-1 rounded-2xl transition-all duration-500 ease-out hover:bg-white/8 hover:ring-white/15 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10 group">
<div className="mb-3">
<span className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10 group-hover:bg-white/8 transition-colors duration-300">Step 4</span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-white transition-colors duration-300">Performance Optimization</h3>
<p className="mt-2 text-sm text-white/70 group-hover:text-white/80 transition-colors duration-300">We continuously monitor, analyze, and optimize your AI systems for maximum efficiency and ROI.</p>
<div className="mt-4 rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 p-4 group-hover:bg-black/30 transition-colors duration-300">
<div className="ring-inset group-hover:bg-white/8 transition-colors duration-300 ring-white/10 ring-1 bg-white/5 rounded-md pt-3 pr-3 pb-3 pl-3">
<div className="text-[12px] group-hover:text-white/80 transition-colors duration-300 text-white/70 mb-2">Real-time Performance Dashboard</div>
<div className="h-32 w-full relative">
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 300 120">
<defs>
</defs>

<g opacity="0.1">
<line stroke="white" strokeWidth="0.5" x1="0" x2="300" y1="30" y2="30"></line>
<line stroke="white" strokeWidth="0.5" x1="0" x2="300" y1="60" y2="60"></line>
<line stroke="white" strokeWidth="0.5" x1="0" x2="300" y1="90" y2="90"></line>
<line stroke="white" strokeWidth="0.5" x1="75" x2="75" y1="0" y2="120"></line>
<line stroke="white" strokeWidth="0.5" x1="150" x2="150" y1="0" y2="120"></line>
<line stroke="white" strokeWidth="0.5" x1="225" x2="225" y1="0" y2="120"></line>
</g>

<polyline className="group-hover:stroke-width-4 transition-all duration-300" fill="none" points="0,90 40,75 80,70 120,55 160,45 200,50 240,35 280,25 300,20" stroke="url(#lineGrad)" strokeLinecap="round" strokeWidth="3" style={{filter: 'drop-shadow(0 0 4px rgba(168,85,247,0.3))', strokeDasharray: '600', strokeDashoffset: '600', animation: 'drawLine 3s ease-out forwards'}}></polyline>

<polygon className="group-hover:opacity-80 transition-opacity duration-300" fill="url(#fillGrad)" points="0,120 0,90 40,75 80,70 120,55 160,45 200,50 240,35 280,25 300,20 300,120" style={{opacity: '0', animation: 'fillArea 3s ease-out 1s forwards'}}></polygon>

<polyline fill="none" opacity="0.7" points="0,95 40,82 80,75 120,65 160,55 200,50 240,45 280,38 300,32" stroke="url(#efficiencyGrad)" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600', animation: 'drawLine 3s ease-out 0.5s forwards'}}></polyline>

<g className="data-points" style={{animation: 'fadeInPoints 3s ease-out 2s forwards', opacity: '0'}}>
<circle cx="120" cy="55" fill="rgba(168,85,247,0.9)" r="3" stroke="white" strokeWidth="1">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="2;4;2"></animate>
</circle>
<circle cx="200" cy="50" fill="rgba(168,85,247,0.9)" r="3" stroke="white" strokeWidth="1">
<animate attributename="r" begin="0.5s" dur="2s" repeatcount="indefinite" values="2;4;2"></animate>
</circle>
<circle cx="280" cy="25" fill="rgba(168,85,247,0.9)" r="3" stroke="white" strokeWidth="1">
<animate attributename="r" begin="1s" dur="2s" repeatcount="indefinite" values="2;4;2"></animate>
</circle>
</g>
</svg>

<div className="absolute top-1 right-1 bg-black/60 backdrop-blur rounded px-2 py-1 text-[10px] text-white/80 ring-1 ring-white/10" style={{animation: 'slideInMetric 3s ease-out 2.5s forwards', opacity: '0', transform: 'translateY(-10px)'}}>
              +47% efficiency
            </div>
<div className="absolute bottom-1 left-1 bg-black/60 backdrop-blur rounded px-2 py-1 text-[10px] text-white/80 ring-1 ring-white/10" style={{animation: 'slideInMetric 3s ease-out 3s forwards', opacity: '0', transform: 'translateY(10px)'}}>
              95% automation
            </div>
</div>
<div className="mt-2 flex items-center justify-between text-[11px] text-white/60 group-hover:text-white/70 transition-colors duration-300">
<span style={{animation: 'fadeInText 3s ease-out 3.5s forwards', opacity: '0'}}>Week 1</span>
<div className="flex items-center gap-2 text-[10px]">
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<span style={{animation: 'fadeInText 3s ease-out 4s forwards', opacity: '0'}}>Performance</span>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span style={{animation: 'fadeInText 3s ease-out 4.2s forwards', opacity: '0'}}>Efficiency</span>
</div>
</div>
<span style={{animation: 'fadeInText 3s ease-out 3.5s forwards', opacity: '0'}}>Week 6</span>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded bg-white/5 ring-1 ring-inset ring-white/10 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-trending-up h-3.5 w-3.5 text-white/80 group-hover:text-white transition-colors duration-300" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</span>
<span className="text-[12px] text-white/80 group-hover:text-white/90 transition-colors duration-300">+32% performance improvement in last iteration</span>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 max-w-7xl mr-auto ml-auto pb-16 sm:pb-20">
<div className="fade-in-up delay-100 mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10">Success Stories</span>
<h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight font-space-grotesk" style={{}}>Real Results from Real Businesses</h2>
<p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl mx-auto">See how our AI automation transforms operations and accelerates growth across different industries</p>
</div>
<div className="mt-10 sm:mt-12 px-4 sm:px-6 lg:px-8">
<div className="fade-in-blur delay-200 rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden relative">

<div className="absolute top-4 right-4 z-20 flex gap-2">
<button className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10 hover:bg-white/20 transition-colors backdrop-blur cursor-pointer" id="prevBtn" style={{opacity: '0.5'}}>
<svg className="h-5 w-5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10 hover:bg-white/20 transition-colors backdrop-blur cursor-pointer" id="nextBtn" style={{opacity: '1'}}>
<svg className="h-5 w-5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>

<div className="grid md:grid-cols-2 bg-zinc-950/5">

<div className="relative overflow-hidden">
<div className="aspect-[16/10] md:h-full relative">

<div className="case-image absolute inset-0 opacity-100 transition-all duration-700 ease-in-out transform translate-x-0" data-case="0" style={{opacity: '1', transform: 'translateX(0px)'}}>
<img alt="Advanced quantum computing setup" className="w-full h-full object-cover rounded-2xl pt-4 pr-4 pb-4 pl-4 saturate-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/988b7631-f2b3-46c9-af7d-b03d473ee2a7_1600w.jpg" style={{}}/>
</div>

<div className="case-image absolute inset-0 opacity-0 transition-all duration-700 ease-in-out transform translate-x-full" data-case="1" style={{opacity: '0', transform: 'translateX(100%)'}}>
<img alt="Modern business automation dashboard" className="w-full h-full object-cover rounded-2xl pt-4 pr-4 pb-4 pl-4" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7050fd5-9b66-45d7-a30a-569d8f5e9017_1600w.jpg" style={{}}/>
</div>

<div className="case-image absolute inset-0 opacity-0 transition-all duration-700 ease-in-out transform translate-x-full" data-case="2" style={{opacity: '0', transform: 'translateX(100%)'}}>
<img alt="AI analytics and performance metrics" className="w-full h-full object-cover rounded-2xl pt-4 pr-4 pb-4 pl-4" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/db127e05-8c5a-4002-9a45-18c89436e905_1600w.jpg"/>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
</div>

<div className="p-6 sm:p-8 relative">

<div className="case-content opacity-100 transition-opacity duration-500 ease-in-out" data-case="0" style={{opacity: '1', zIndex: '10'}}>
<div className="inline-flex gap-3 mb-4 items-center">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="h-5 w-5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
</span>
<span className="text-sm font-semibold text-white/80 tracking-tight">QuantumTech</span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">"AI-powered supply chain cut costs by 60% while improving delivery speed"</h3>
<p className="mt-3 text-sm text-white/70">QuantumTech struggled with inventory overflow and delayed shipments. Our predictive AI system transformed their supply chain, optimizing stock levels and automating procurement decisions.</p>
<div className="mt-5 text-sm text-white/80">Impact:</div>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span>60% Reduction in Supply Costs</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span>45% Faster Delivery Times</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span>90% Inventory Accuracy</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span>35% Improvement in Customer Satisfaction</span>
</li>
</ul>
</div>

<div className="case-content absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out p-6 sm:p-8" data-case="1" style={{opacity: '0', zIndex: '1'}}>
<div className="inline-flex gap-3 mb-4 items-center">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="h-5 w-5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="7.5,4.21 12,6.81 16.5,4.21"></polyline>
<polyline points="7.5,19.79 7.5,14.6 3,12"></polyline>
<polyline points="21,12 16.5,14.6 16.5,19.79"></polyline>
<polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</span>
<span className="text-sm font-semibold text-white/80 tracking-tight">StreamlineIO</span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">"Intelligent document processing eliminated 85% of manual data entry"</h3>
<p className="mt-3 text-sm text-white/70">StreamlineIO was drowning in paperwork and manual processes. Our AI document processing system automated invoice handling, contract analysis, and data extraction across all departments.</p>
<div className="mt-5 text-sm text-white/80">Impact:</div>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span>85% Less Manual Data Entry</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span>70% Faster Document Processing</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span>99.5% Data Accuracy</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span>50% Reduction in Processing Time</span>
</li>
</ul>
</div>

<div className="case-content absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out p-6 sm:p-8" data-case="2" style={{opacity: '0', zIndex: '1'}}>
<div className="inline-flex gap-3 mb-4 items-center">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="h-5 w-5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="M7 16l4-4 4 4 6-6"></path>
</svg>
</span>
<span className="text-sm font-semibold text-white/80 tracking-tight">Velocity Labs</span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">"Smart customer insights boosted conversion rates by 180%"</h3>
<p className="mt-3 text-sm text-white/70">Velocity Labs needed better customer understanding and personalization. Our AI analytics platform provides real-time behavioral insights and automated personalization across all customer touchpoints.</p>
<div className="mt-5 text-sm text-white/80">Impact:</div>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span className="">180% Higher Conversion Rates</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span className="">95% Personalization Accuracy</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span className="">65% Increase in Customer Lifetime Value</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/80">
<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
<span className="">40% Reduction in Churn Rate</span>
</li>
</ul>
</div>
</div>
</div>

<div className="flex gap-2 pt-4 pb-4 justify-center">
<button className="indicator h-2 w-8 rounded-full bg-white/50 transition-colors" data-slide="0"></button>
<button className="indicator h-2 w-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors" data-slide="1"></button>
<button className="indicator h-2 w-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors" data-slide="2"></button>
</div>
</div>

</div>
</section>
<section className="relative z-10 sm:pb-20 max-w-7xl mr-auto ml-auto pb-16" id="aura-emfve0uar">
<div className="fade-in-up delay-100 mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10">Investment Plans</span>
<h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight font-space-grotesk" style={{}}>Choose Your AI Transformation Package</h2>
<p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl mx-auto">Flexible plans designed to scale with your business growth and automation needs</p>

<div className="mt-6 flex items-center justify-center gap-3 text-sm">
<span className="text-white/90" id="monthly-label">Monthly</span>
<button aria-pressed="false" className="relative inline-flex ring-1 ring-inset ring-white/10 bg-gradient-to-r from-[#4a5668] to-slate-200/10 w-14 h-7 rounded-full pr-1 pl-1 items-center justify-start transition-all duration-300" id="billing-toggle" type="button">
<span className="h-5 w-5 rounded-full bg-white transition-transform duration-300" id="toggle-switch"></span>
</button>
<span className="font-medium text-white/80" id="annual-label">Annually <span className="text-purple-300 text-xs">(Save 20%)</span></span>
</div>
</div>
<div className="mt-10 sm:mt-12 px-4 sm:px-6 lg:px-8">
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="slide-in-scale delay-200 relative rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-5 sm:p-6 overflow-hidden">
<div className="inline-flex items-center gap-2 text-white/80">
<span className="text-base font-semibold tracking-tight">Growth</span>
</div>
<div className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
<span className="font-space-grotesk" id="growth-price" style={{}}>$89</span><span className="text-base align-top font-medium text-white/70">/month</span>
</div>
<p className="mt-2 text-sm text-white/70">Perfect for growing companies ready to automate core processes and boost efficiency.</p>
<button className="mt-5 inline-flex items-center justify-center w-full rounded-md bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 ring-1 ring-inset ring-white/10 hover:bg-white/10 transition">
          Start 14-Day Trial
        </button>
<div className="mt-6 text-sm text-white/80">Everything included:</div>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Advanced workflow automation
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Smart AI assistant &amp; analytics
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Real-time performance insights
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Priority support &amp; training
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Up to 15 AI integrations
          </li>
</ul>
<div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-gradient-to-t from-purple-600/30 to-transparent blur-3xl"></div>
</div>

<div className="slide-in-scale delay-300 relative ring-inset sm:p-6 overflow-hidden ring-white/10 ring-1 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-white/0 to-[#76668a]/25 rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="inline-flex items-center gap-2 text-white/90">
<span className="text-base font-semibold tracking-tight">Scale</span>
<span className="inline-flex items-center rounded-full bg-purple-400/20 px-2 py-0.5 text-xs text-purple-200 ring-1 ring-purple-400/30">Most Popular</span>
</div>
<div className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
<span className="font-space-grotesk" id="scale-price" style={{}}>$199</span><span className="text-base align-top font-medium text-white/70">/month</span>
</div>
<p className="mt-2 text-sm text-white/70">Ideal for scaling businesses that need advanced AI capabilities and premium support.</p>
<button className="mt-5 inline-flex items-center justify-center w-full rounded-md bg-gradient-to-b from-purple-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 hover:from-purple-400 hover:to-purple-600 transition">
          Start 14-Day Trial
        </button>
<div className="mt-6 text-sm text-white/80">Everything in Growth, plus:</div>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Advanced machine learning models
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Custom AI agent development
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Unlimited integrations
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            24/7 dedicated support
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Advanced security &amp; compliance
          </li>
</ul>
<div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-gradient-to-t from-purple-500/40 to-transparent blur-3xl"></div>
</div>

<div className="slide-in-scale delay-400 relative rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-5 sm:p-6 overflow-hidden">
<div className="inline-flex gap-2 text-white/80 items-center">
<span className="text-base font-semibold tracking-tight">Enterprise</span>
</div>
<div className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight font-space-grotesk" style={{}}>
          Custom<span className="text-base align-top font-medium text-white/70">/pricing</span>
</div>
<p className="text-sm text-white/70 mt-2">Tailored solutions for large organizations with complex requirements and dedicated.</p>
<button className="mt-5 inline-flex items-center justify-center w-full rounded-md bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 ring-1 ring-inset ring-white/10 hover:bg-white/10 transition">
          Contact Sales
        </button>
<div className="mt-6 text-sm text-white/80">Everything in Scale, plus:</div>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            White-label solutions
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            On-premise deployment
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Dedicated infrastructure
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Custom SLA agreements
          </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 mt-0.5 text-white/80" data-lucide="check" fill="none" height="24" strokeLinejoin="round" strokeap="round" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Dedicated account manager
          </li>
</ul>
<div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-gradient-to-t from-white/20 to-transparent blur-3xl"></div>
</div>
</div>
</div>

</section>

<section className="relative z-10 py-16 sm:py-20" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="fade-in-up delay-100 mx-auto max-w-4xl text-center mb-12 sm:mb-16">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10">Get Started</span>
<h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight font-space-grotesk" style={{}}>Ready to Transform Your Business?</h2>
<p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl mx-auto">Join thousands of businesses already using AI automation to scale efficiently and boost productivity</p>
</div>
<div className="fade-in-blur delay-200 rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-6 sm:p-8 lg:p-12">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

<div className="">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">Start Your Free Trial Today</h3>
<p className="text-sm text-white/70 mb-6">Get started with our Growth plan and experience the power of AI automation risk-free for 14 days.</p>
<form className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-white/80 mb-2">First Name</label>
<input className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-white/80 mb-2">Last Name</label>
<input className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-white/80 mb-2">Business Email</label>
<input className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" placeholder="john@company.com" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-white/80 mb-2">Company Size</label>
<select className="ring-inset focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ring-white/10 ring-1 text-sm text-white bg-white/5 w-full border-white/10 border rounded-md pt-2.5 pr-4 pb-2.5 pl-4">
<option>1-10 employees</option>
<option>11-50 employees</option>
<option>51-200 employees</option>
<option>200+ employees</option>
</select>
</div>
<div className="">
<label className="block text-sm font-medium text-white/80 mb-2">How can we help? (Optional)</label>
<textarea className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" placeholder="Tell us about your automation goals..." rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-purple-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/10 hover:from-purple-400 hover:to-purple-600 transition" type="submit">
                    Start Free Trial
                    <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
<div className="mt-6 text-xs text-white/60 text-center">
                  No credit card required • 14-day free trial • Cancel anytime
                </div>
</div>

<div className="">
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="text-center p-4 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>5K+</div>
<div className="text-xs sm:text-sm text-white/70">Businesses Automated</div>
</div>
<div className="text-center p-4 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>99.9%</div>
<div className="text-xs sm:text-sm text-white/70">Uptime Guaranteed</div>
</div>
<div className="text-center p-4 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>47%</div>
<div className="text-xs sm:text-sm text-white/70">Avg. Efficiency Gain</div>
</div>
<div className="text-center p-4 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>24/7</div>
<div className="text-xs sm:text-sm text-white/70">Expert Support</div>
</div>
</div>
<div className="space-y-4">
<h4 className="text-base font-semibold">What you get with your free trial:</h4>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      Full access to Growth plan features
                    </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      Personal onboarding session
                    </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      Custom automation setup
                    </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<svg className="lucide lucide-check h-4 w-4 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                      Priority email support
                    </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 py-12 sm:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

<div>
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center justify-center bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<svg className="h-5 w-5 text-white/90" viewbox="0 0 24 24">
<defs>
<lineargradient id="g2" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#a78bfa"></stop>
<stop offset="100%" stop-color="#7c3aed"></stop>
</lineargradient>
</defs>
<path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm2.6 14.9a4.5 4.5 0 0 1-6.5-6.2l6.7 6.2a4.1 4.1 0 0 1-.2 0Zm1.8-1.8-6.7-6.2A4.5 4.5 0 0 1 16.4 15Z" fill="url(#g2)"></path>
</svg>
</span>
<span className="text-base tracking-tight font-semibold">Neural</span>
</div>
<p className="text-sm text-white/70 mb-4">Transforming businesses with intelligent AI automation solutions.</p>
<div className="flex gap-3">
<a className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/80" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/80" fill="currentColor" viewbox="0 0 20 20">
<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/80" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white/90 mb-4">Solutions</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-white/70 hover:text-white transition" href="#">Process Automation</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">AI Assistant</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">Data Analytics</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">Custom Development</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">Enterprise</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white/90 mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-white/70 hover:text-white transition" href="#">About Us</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">Case Studies</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">Blog</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">Careers</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">Press</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white/90 mb-4">Support</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-white/70 hover:text-white transition" href="#">Help Center</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">Documentation</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">Contact Support</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">System Status</a></li>
<li><a className="text-white/70 hover:text-white transition" href="#">Community</a></li>
</ul>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="text-sm text-white/60">
              © 2024 Neural. All rights reserved.
            </div>
<div className="flex gap-6 text-sm">
<a className="text-white/60 hover:text-white/80 transition" href="#">Privacy Policy</a>
<a className="text-white/60 hover:text-white/80 transition" href="#">Terms of Service</a>
<a className="text-white/60 hover:text-white/80 transition" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}

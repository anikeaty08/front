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



      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ["Inter", "ui-sans-serif", "system-ui"],
            },
            colors: {
              surface: {
                DEFAULT: "#0f1419",
                foreground: "#1a2332",
              },
            },
            boxShadow: {
              card: "0 0 0 1px rgba(34,197,94,0.1), 0 4px 20px rgba(0,0,0,0.3)",
            },
            borderRadius: {
              xl2: "1.25rem",
            },
            animation: {
              'fade-in': 'fadeIn 0.8s ease-out forwards',
              'slide-up': 'slideUp 0.8s ease-out forwards',
              'blur-in': 'blurIn 1s ease-out forwards',
            },
            keyframes: {
              fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
              },
              slideUp: {
                '0%': { opacity: '0', transform: 'translateY(30px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              blurIn: {
                '0%': { opacity: '0', filter: 'blur(10px)' },
                '100%': { opacity: '1', filter: 'blur(0)' },
              },
            },
          },
        },
      };
    


      lucide.createIcons();

      const carousel = document.getElementById("carousel");
      const nextBtn = document.getElementById("nextBtn");
      const prevBtn = document.getElementById("prevBtn");
      const dots = document.querySelectorAll(".dot");
      let currentSlide = 0;

      function updateDots() {
        dots.forEach((dot, index) => {
          if (index === currentSlide) {
            dot.classList.remove("bg-neutral-600");
            dot.classList.add("bg-green-500", "scale-125");
          } else {
            dot.classList.remove("bg-green-500", "scale-125");
            dot.classList.add("bg-neutral-600");
          }
        });
      }

      function scrollToSlide(slideIndex) {
        const cardWidth = carousel.querySelector("div").getBoundingClientRect().width + 24;
        carousel.scrollTo({ left: cardWidth * slideIndex, behavior: "smooth" });
        currentSlide = slideIndex;
        updateDots();
      }

      function scrollByCard(direction = 1) {
        const newSlide = Math.max(0, Math.min(3, currentSlide + direction));
        scrollToSlide(newSlide);
      }

      nextBtn.addEventListener("click", () => scrollByCard(1));
      prevBtn.addEventListener("click", () => scrollByCard(-1));

      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => scrollToSlide(index));
      });

      // Auto-detect current slide on scroll
      carousel.addEventListener("scroll", () => {
        const cardWidth = carousel.querySelector("div").getBoundingClientRect().width + 24;
        const newSlide = Math.round(carousel.scrollLeft / cardWidth);
        if (newSlide !== currentSlide) {
          currentSlide = newSlide;
          updateDots();
        }
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
      
<main className="relative isolate overflow-hidden">
<section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start opacity-0 animate-fade-in" style={{animationDelay: `0.2s`}}>

<div className="lg:max-w-xl">
<span className="flex items-center gap-2 text-sm font-medium text-green-400 opacity-0 animate-slide-up" style={{animationDelay: `0.4s`}}>
<svg className="w-2 h-2 fill-current animate-pulse" viewBox="0 0 6 6">
<circle cx="3" cy="3" r="3"></circle>
</svg>
              Sustainable Technology Solutions
            </span>
<h1 className="mt-4 text-5xl sm:text-6xl font-semibold leading-tight tracking-tight opacity-0 animate-blur-in" style={{animationDelay: `0.6s`}}>
              Building a<br className="hidden lg:block" />
              greener future
            </h1>
</div>
<p className="mt-8 lg:mt-2 lg:max-w-md text-lg text-neutral-400 opacity-0 animate-slide-up" style={{animationDelay: `0.8s`}}>
            Discover EcoFlow's innovative green technology solutions that help businesses reduce their carbon footprint while improving efficiency and performance across all operations.
          </p>
</div>

<div className="relative mt-20 opacity-0 animate-fade-in" style={{animationDelay: `1s`}}>

<div className="absolute left-0 top-0 bottom-16 w-12 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-16 w-12 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
<div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4" id="carousel" style={{scrollbarWidth: `none`, msOverflowStyle: `none`}}>

<div className="relative shrink-0 snap-center w-80 h-[32rem] rounded-xl2 bg-gradient-to-br from-surface-foreground/90 to-green-900/20 backdrop-blur-md shadow-card border border-green-500/20 flex flex-col">
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center gap-3 text-sm mb-6">
<div className="p-2 rounded-full bg-green-500/10 border border-green-500/20">
<svg className="lucide lucide-leaf w-5 h-5 text-green-400" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="uppercase tracking-wide text-xs text-green-400 font-medium">Carbon Tracking</span>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Smart Carbon Analytics</h3>
<p className="text-base leading-relaxed text-neutral-300 flex-1 mb-6">
                  Real-time monitoring of your organization's carbon footprint with AI-powered insights. Track emissions across all operations, identify reduction opportunities, and achieve your net-zero goals faster.
                </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-neutral-400">98% accuracy</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-neutral-400">Real-time data</span>
</div>
</div>
</div>
<div className="mt-auto pt-0 pr-6 pb-6 pl-6">
<p className="text-sm font-medium text-green-300 mb-4">
                  Reduce emissions by up to 40%
                </p>
<button className="inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors px-4 py-2 rounded-lg border border-green-500/20 hover:bg-green-500/10 w-full justify-center">
                  Explore solution
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative shrink-0 snap-center w-80 h-[32rem] rounded-xl2 bg-gradient-to-br from-surface-foreground/90 to-green-900/20 backdrop-blur-md shadow-card border border-green-500/20 flex flex-col">
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center gap-3 text-sm mb-6">
<div className="p-2 rounded-full bg-green-500/10 border border-green-500/20">
<svg className="lucide lucide-zap w-5 h-5 text-green-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="uppercase tracking-wide text-xs text-green-400 font-medium">Energy Optimization</span>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Intelligent Power Management</h3>
<p className="text-base leading-relaxed text-neutral-300 flex-1 mb-6">
                  AI-driven energy optimization that automatically adjusts power consumption based on usage patterns, weather conditions, and grid demand to minimize costs and environmental impact.
                </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-neutral-400">24/7</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-neutral-400">Auto-optimization</span>
</div>
</div>
</div>
<div className="mt-auto pt-0 pr-6 pb-6 pl-6">
<p className="text-sm font-medium text-green-300 mb-4">
                  Save up to 35% on energy costs
                </p>
<button className="inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors px-4 py-2 rounded-lg border border-green-500/20 hover:bg-green-500/10 w-full justify-center">
                  Learn more
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative shrink-0 snap-center w-80 h-[32rem] rounded-xl2 bg-gradient-to-br from-surface-foreground/90 to-green-900/20 backdrop-blur-md shadow-card border border-green-500/20 flex flex-col">
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center gap-3 text-sm mb-6">
<div className="p-2 rounded-full bg-green-500/10 border border-green-500/20">
<svg className="lucide lucide-recycle w-5 h-5 text-green-400" data-lucide="recycle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
</div>
<span className="uppercase tracking-wide text-xs text-green-400 font-medium">Waste Reduction</span>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Circular Economy Platform</h3>
<p className="text-base leading-relaxed text-neutral-300 flex-1 mb-6">
                  Transform waste streams into valuable resources through our comprehensive circular economy platform. Connect with suppliers, track materials, and create sustainable supply chains.
                </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-neutral-400">Zero waste goal</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-neutral-400">Material tracking</span>
</div>
</div>
</div>
<div className="p-6 pt-0 mt-auto">
<p className="text-sm font-medium text-green-300 mb-4">
                  Achieve 90% waste diversion
                </p>
<button className="inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors px-4 py-2 rounded-lg border border-green-500/20 hover:bg-green-500/10 w-full justify-center">
                  Start today
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative shrink-0 snap-center w-80 h-[32rem] rounded-xl2 bg-gradient-to-br from-surface-foreground/90 to-green-900/20 backdrop-blur-md shadow-card border border-green-500/20 flex flex-col">
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center gap-3 text-sm mb-6">
<div className="p-2 rounded-full bg-green-500/10 border border-green-500/20">
<svg className="lucide lucide-trending-up w-5 h-5 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="uppercase tracking-wide text-xs text-green-400 font-medium">ESG Reporting</span>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Sustainability Dashboard</h3>
<p className="text-base leading-relaxed text-neutral-300 flex-1 mb-6">
                  Comprehensive ESG reporting and compliance tools that automatically generate sustainability reports, track progress against goals, and ensure regulatory compliance across all markets.
                </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-neutral-400">Automated</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-neutral-400">Compliance ready</span>
</div>
</div>
</div>
<div className="p-6 pt-0 mt-auto">
<p className="text-sm font-medium text-green-300 mb-4">
                  Streamline ESG compliance
                </p>
<button className="inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors px-4 py-2 rounded-lg border border-green-500/20 hover:bg-green-500/10 w-full justify-center">
                  View dashboard
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-8">
<button className="dot w-2 h-2 rounded-full bg-green-500 transition-all duration-300" data-slide="0"></button>
<button className="dot w-2 h-2 rounded-full bg-neutral-600 hover:bg-green-400 transition-all duration-300" data-slide="1"></button>
<button className="dot w-2 h-2 rounded-full bg-neutral-600 hover:bg-green-400 transition-all duration-300" data-slide="2"></button>
<button className="dot w-2 h-2 rounded-full bg-neutral-600 hover:bg-green-400 transition-all duration-300" data-slide="3"></button>
</div>

<div className="flex justify-center gap-3 mt-6">
<button className="size-12 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm flex items-center justify-center hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 text-green-400" id="prevBtn">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="size-12 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm flex items-center justify-center hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 text-green-400" id="nextBtn">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</section>
</main>



    </>
  );
}

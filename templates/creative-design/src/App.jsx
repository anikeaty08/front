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
  


    // Grid cursor animation
    document.addEventListener('DOMContentLoaded', () => {
      const cursorPosition = document.querySelector('.grid-lines_cursor-position');
      if (cursorPosition) {
        let targetX = 0, targetY = 0;
        let currentX = 0, currentY = 0;
        
        document.addEventListener('mousemove', (e) => {
          targetX = e.clientX;
          targetY = e.clientY;
        });
        
        function animate() {
          currentX += (targetX - currentX) * 0.1;
          currentY += (targetY - currentY) * 0.1;
          cursorPosition.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
          requestAnimationFrame(animate);
        }
        animate();
      }
    });
    
    // Scroll animations
    (function() {
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
      
      window.initInViewAnimations = function(selector = ".animate-on-scroll") {
        document.querySelectorAll(selector).forEach((el) => {
          window.__inViewIO.observe(el);
        });
      };
      
      document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0dd9b13b-ea30-4e17-8a26-53d1f9d1c6d3_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<div className="wrapper">

<div className="pre-footer_grid">
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
<div className="grid_cell"></div>
</div>
<div className="grid-lines">
<div className="grid-lines_cursor-position" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="grid-lines_cursor"></div>
</div>
</div>

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>

<nav className="fixed [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll z-50 top-6 left-0 right-0 w-full flex justify-center px-4">
<div className="flex bg-zinc-900/80 border-white/10 border rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur-xl gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-8 items-center w-full max-w-4xl">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="bg-center text-sm tracking-tight w-[100px] md:w-[120px] h-[30px] md:h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9b28ab35-9b71-4b8b-9e9f-c92a8db7c84c_320w.png)] bg-cover"></span>
</div>
<div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm flex-1 justify-center">
<a className="text-zinc-400 hover:text-white transition font-sans whitespace-nowrap" href="#work">Work</a>
<a className="text-zinc-400 hover:text-white transition font-sans whitespace-nowrap" href="#services">Services</a>
<a className="text-zinc-400 hover:text-white transition font-sans whitespace-nowrap" href="#about">About</a>
<a className="text-zinc-400 hover:text-white transition font-sans whitespace-nowrap" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition bg-white hover:bg-zinc-200 text-zinc-900 whitespace-nowrap" href="#contact">
<span className="font-sans">Let's Talk</span>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
<path className="" d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path>
</svg>
</a>

<button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 transition ml-auto">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="6" y2="6"></line>
<line className="" x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</div>
</nav>

<div className="bg-center z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a72ca2f3-9dd1-4fe4-84ba-fe86468a5237_3840w.webp)] bg-cover pt-24 md:pt-32 pb-12 md:pb-20 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'}}>
<div className="lg:px-8 max-w-7xl mt-12 md:mt-20 mr-auto mb-20 md:mb-40 ml-auto px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

<div className="lg:col-span-7 space-y-4 sm:space-y-6">
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="border-gradient inline-flex before:rounded-full bg-white/5 rounded-full pt-2 pr-3 sm:pr-4 pb-2 pl-3 sm:pl-4 backdrop-blur-lg gap-x-2 sm:gap-x-3 gap-y-2 sm:gap-y-3 items-center">
<span className="text-[10px] sm:text-xs tracking-wider uppercase flex items-center gap-1.5 sm:gap-2 font-sans text-zinc-300">
                  Award-Winning Design
                  <svg aria-hidden="true" className="iconify text-white iconify--solar sm:w-4 sm:h-4" data-icon="solar:star-bold-duotone" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
</span>
</div>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll font-medium tracking-tighter font-manrope drop-shadow-lg" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 40%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 40%, transparent)'}}>
              Crafting Digital<br/>
<span className="bg-clip-text font-medium text-transparent tracking-tighter font-manrope bg-gradient-to-br from-white to-[#ffcd75] pr-1">Experiences</span><br/>
              That Matter
            </h1>
<p className="[animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll text-base sm:text-lg text-white/70 max-w-xl">
              We design interfaces that combine beauty with functionality, creating seamless experiences that users love and businesses thrive on.
            </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<button className="group inline-flex transition-all duration-300 hover:shadow-lg hover:bg-zinc-200 text-sm font-medium text-zinc-900 bg-white rounded-full pt-3 sm:pt-4 pr-6 sm:pr-8 pb-3 sm:pb-4 pl-6 sm:pl-8 shadow-[5.7px_5.7px_8.6px_rgba(0,_0,_0,_0.07),_13.7px_13.7px_10.9px_rgba(0,_0,_0,_0.099),_25.7px_25.7px_20.5px_rgba(0,_0,_0,_0.123),_45.8px_45.8px_36.6px_rgba(0,_0,_0,_0.147),_85.8px_85.8px_68.5px_rgba(0,_0,_0,_0.176),_205px_205px_163.4px_rgba(0,_0,_0,_0.246)] gap-x-2 sm:gap-x-3 gap-y-2 sm:gap-y-3 items-center justify-center">
<span className="font-sans">View Portfolio</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</button>
<button className="group inline-flex hover:text-white transition-all duration-300 hover:border-white hover:bg-white/5 text-sm font-medium text-zinc-300 border-white/20 border rounded-full pt-3 sm:pt-4 pr-6 sm:pr-8 pb-3 sm:pb-4 pl-6 sm:pl-8 gap-x-2 sm:gap-x-3 gap-y-2 sm:gap-y-3 items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:play-bold-duotone" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M23 12c0-1.035-.53-2.07-1.591-2.647L8.597 2.385C6.534 1.264 4 2.724 4 5.033V12z" fill="currentColor" fill-rule="evenodd"></path><path d="m8.597 21.615l12.812-6.968A2.99 2.99 0 0 0 23 12H4v6.967c0 2.31 2.534 3.769 4.597 2.648" fill="currentColor" opacity=".5"></path></svg>
<span className="font-sans">Watch Showreel</span>
</button>
</div>
</div>

<div className="lg:col-span-5 space-y-4 sm:space-y-6">
<div className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border-gradient before:rounded-3xl bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-full h-fit rounded-2xl sm:rounded-3xl relative shadow-[2.8px_2.8px_2.2px_rgba(0,_0,_0,_0.034),_6.7px_6.7px_5.3px_rgba(0,_0,_0,_0.048),_12.5px_12.5px_10px_rgba(0,_0,_0,_0.06),_22.3px_22.3px_17.9px_rgba(0,_0,_0,_0.072),_41.8px_41.8px_33.4px_rgba(0,_0,_0,_0.086),_100px_100px_80px_rgba(0,_0,_0,_0.12)]" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)'}}>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll pt-6 sm:pt-8 pr-6 sm:pr-8 pb-6 sm:pb-8 pl-6 sm:pl-8 relative">
<div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ring-1 flex items-center justify-center bg-white/10 ring-white/20">
<svg aria-hidden="true" className="iconify text-white iconify--solar sm:w-6 sm:h-6" data-icon="solar:target-bold-duotone" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M9.25 12a.75.75 0 0 1 .75-.75h1.25V10a.75.75 0 0 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5h-1.25V14a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1-.75-.75m-7.222.75a10 10 0 0 1 0-1.5H5a.75.75 0 0 1 0 1.5zm10.722 9.222a10 10 0 0 1-1.5 0V19a.75.75 0 0 1 1.5 0zm9.222-10.722a10 10 0 0 1 0 1.5H19a.75.75 0 0 1 0-1.5zM12.75 2.028V5a.75.75 0 0 1-1.5 0V2.028a10 10 0 0 1 1.5 0" fill="currentColor"></path>
</svg>
</div>
<div>
<div className="text-2xl sm:text-3xl tracking-tighter font-manrope font-medium">150+</div>
<div className="text-xs sm:text-sm text-white/70 font-sans">Projects Delivered</div>
</div>
</div>
<div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
<div className="flex items-center justify-between">
<span className="text-xs sm:text-sm text-white/70 font-sans">Client Satisfaction</span>
<span className="text-xs sm:text-sm font-sans">98%</span>
</div>
<div className="h-1.5 sm:h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r rounded-full from-white to-white/70" style={{width: '98%'}}></div>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent my-3 sm:my-4"></div>
<div className="flex justify-between mb-3 sm:mb-4 gap-2">
<div className="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl sm:rounded-2xl hover:bg-white/5 hover:-translate-y-0.5 flex-1">
<div className="text-xl sm:text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-sans font-medium">5+</div>
<div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-wide font-sans">Years</div>
</div>
<div className="w-px h-10 sm:h-12 my-auto bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
<div className="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl sm:rounded-2xl hover:bg-white/5 hover:-translate-y-0.5 flex-1">
<div className="text-xl sm:text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-sans font-medium">24/7</div>
<div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-wide font-sans">Support</div>
</div>
<div className="w-px h-10 sm:h-12 my-auto bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
<div className="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl sm:rounded-2xl hover:bg-white/5 hover:-translate-y-0.5 flex-1">
<div className="text-xl sm:text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-sans font-medium">100%</div>
<div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-wide font-sans">Quality</div>
</div>
</div>
<div className="flex flex-wrap gap-1.5 sm:gap-2">
<span className="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-zinc-300 cursor-pointer transition-all duration-300 hover:-translate-y-px font-sans">
<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse"></div>
                    ACTIVE
                  </span>
<span className="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-zinc-300 cursor-pointer transition-all duration-300 hover:-translate-y-px font-sans">
<svg className="iconify iconify--solar sm:w-3 sm:h-3" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
                    PREMIUM
                  </span>
</div>
</div>
</div>
<div className="overflow-hidden transition-all duration-300 [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] animate-on-scroll border-gradient before:rounded-3xl bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-full h-fit rounded-2xl sm:rounded-3xl relative shadow-[4px_4px_6px_rgba(0,_0,_0,_0.049),_9.6px_9.6px_7.6px_rgba(0,_0,_0,_0.069),_18px_18px_14.3px_rgba(0,_0,_0,_0.086),_32px_32px_25.6px_rgba(0,_0,_0,_0.103),_60px_60px_47.8px_rgba(0,_0,_0,_0.123),_143px_143px_114.3px_rgba(0,_0,_0,_0.172)]" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)'}}>
<div className="pt-6 sm:pt-8 pr-6 sm:pr-8 pb-6 sm:pb-8 pl-6 sm:pl-8 relative">
<h3 className="text-base sm:text-lg mb-3 sm:mb-4 font-sans">Featured Clients</h3>
<div className="overflow-hidden relative">
<style>
                    @keyframes marquee-logos {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                  </style>
<div style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex gap-4 sm:gap-6 will-change-transform" style={{animation: 'marquee-logos 30s linear infinite'}}>
<div className="flex gap-4 sm:gap-6 shrink-0">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] sm:w-[120px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] sm:w-[120px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
</div>
<div className="flex gap-4 sm:gap-6 shrink-0">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] sm:w-[120px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] sm:w-[120px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] sm:w-[150px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-xl sm:rounded-2xl" href="#"></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="z-10 pt-40 pb-40 relative" id="work"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="inzENTvhzS9plyop7Z6g"></div>

</div></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl p-6 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
<div className="flex flex-col justify-between min-h-full">
<div className="">
<span className="text-sm text-zinc-500 font-sans">Featured Projects</span>
<h2 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 tracking-tighter font-manrope font-medium">
                  Recent Design Work
                </h2>
<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-zinc-600 bg-zinc-900 px-4 relative">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:add-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
<span className="text-sm font-sans">Web Design</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:add-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
<span className="text-sm font-sans">Mobile Apps</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:add-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
<span className="text-sm font-sans">Brand Identity</span>
</div>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<p className="text-sm text-zinc-100 tracking-tight font-sans">Award-winning creativity</p>
<p className="mt-1 text-sm text-zinc-400 font-sans">We transform ideas into stunning digital experiences that captivate audiences and drive results.</p>
<button className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm hover:bg-zinc-200 transition font-sans">
                    View All Projects
                    <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
</div>
<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent sm:block hidden"></div>
<p className="text-base text-zinc-300 leading-relaxed sm:text-right sm:pl-8 font-sans">
                    Our portfolio showcases
                    <span className="text-zinc-100 font-sans">innovative solutions</span>
                    across industries, delivering exceptional user experiences.
                  </p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-3xl group">
<div className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/47a93eff-f6bf-4c36-b162-aeb7150ce93b_800w.webp)]"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:widget-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5" fill="currentColor" opacity=".5"></path><path d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5m11-11c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5" fill="currentColor"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-xl bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-sans">Web Design</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg tracking-tight leading-tight font-sans">FinTech Platform</p>
</div>
</article>
<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-3xl group">
<div className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/99fcdfeb-131b-4c93-aec2-584787785177_800w.webp)] bg-center"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:smartphone-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.052 2c1.68 0 3.01 0 4.052.142c1.072.147 1.94.456 2.624 1.152s.988 1.58 1.132 2.67c.14 1.06.14 2.414.14 4.123v3.826c0 1.71 0 3.064-.14 4.123c-.144 1.09-.448 1.974-1.132 2.67s-1.552 1.005-2.624 1.152C15.063 22 13.732 22 12.052 22h-.104c-1.68 0-3.01 0-4.052-.142c-1.072-.147-1.94-.456-2.624-1.152s-.988-1.58-1.132-2.67C4 16.976 4 15.622 4 13.913v-3.826c0-1.71 0-3.064.14-4.123c.144-1.09.448-1.974 1.132-2.67S6.824 2.29 7.896 2.142C8.937 2 10.268 2 11.948 2z" fill="currentColor" opacity=".5"></path><path d="M8.571 18.511c0-.385.307-.697.686-.697h5.486c.378 0 .685.312.685.697a.69.69 0 0 1-.685.698H9.257a.69.69 0 0 1-.686-.698" fill="currentColor"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-xl bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-sans">Mobile App</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg tracking-tight leading-tight font-sans">Health Tracker</p>
</div>
</article>
<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-3xl group">
<div className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/19a4fa31-1158-4f3d-9d73-866e7c8e842c_800w.webp)] bg-center"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:chart-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M14 20.5V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5z" fill="currentColor" fill-rule="evenodd"></path><path d="M8 8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H8zm12 5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H20z" fill="currentColor" opacity=".7"></path><path d="M1.75 20.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z" fill="currentColor" opacity=".5"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-xl bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-sans">Dashboard</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg tracking-tight leading-tight font-sans">Analytics Pro</p>
</div>
</article>
<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-3xl group">
<div className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a32bbdd2-720f-4c85-b8bc-ba88363549f7_800w.webp)] bg-center"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:palette-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75" fill="currentColor"></path><path d="M10 18V6c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093C8.1 2 7.4 2 6 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092C10 20.1 10 19.4 10 18" fill="currentColor" opacity=".4"></path><path d="M10 8.243V18c0 .919 0 1.536-.077 2.003l3.299-3.299l5.838-6.09c.973-1.003 1.46-1.505 1.636-2.08a2.5 2.5 0 0 0-.011-1.503C20.5 6.458 20 5.958 19 4.959c-.9-.886-1.352-1.33-1.88-1.514a2.5 2.5 0 0 0-1.353-.085c-.547.118-1.049.502-2.053 1.27L13 5.243zm-1.997 13.68H8v.003z" fill="currentColor" opacity=".7"></path><path d="M15.814 14H17.9c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C21.9 15.9 21.9 16.6 21.9 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C20 22 19.3 22 17.9 22H6c.917 0 1.534 0 2-.077v.003l.003-.003c.245-.04.448-.102.632-.195a2.5 2.5 0 0 0 1.093-1.093c.093-.184.155-.387.195-.632l3.299-3.299z" fill="currentColor"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-xl bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-sans">Branding</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg tracking-tight leading-tight font-sans">Brand Identity</p>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative" id="services">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
<div className="">
<p className="text-sm text-zinc-400 font-sans">Our Expertise</p>
<h2 className="text-4xl md:text-5xl text-white tracking-tighter font-manrope font-medium">
            Services we offer
          </h2>
<p className="text-lg text-zinc-300 max-w-2xl mt-4 font-sans">
            From concept to launch, we deliver end-to-end design solutions tailored to your business goals.
          </p>
</div>
</div>
<div className="space-y-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="relative lg:col-span-2 ring-1 ring-white/10 p-10 overflow-hidden bg-zinc-950 border-zinc-900 rounded-3xl shadow-lg">
<div className="absolute -left-10 -top-16 h-64 w-64 bg-gradient-to-tr rounded-full blur-3xl from-white/10 to-white/5"></div>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:palette-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75" fill="currentColor"></path><path d="M10 18V6c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093C8.1 2 7.4 2 6 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092C10 20.1 10 19.4 10 18" fill="currentColor" opacity=".4"></path><path d="M10 8.243V18c0 .919 0 1.536-.077 2.003l3.299-3.299l5.838-6.09c.973-1.003 1.46-1.505 1.636-2.08a2.5 2.5 0 0 0-.011-1.503C20.5 6.458 20 5.958 19 4.959c-.9-.886-1.352-1.33-1.88-1.514a2.5 2.5 0 0 0-1.353-.085c-.547.118-1.049.502-2.053 1.27L13 5.243zm-1.997 13.68H8v.003z" fill="currentColor" opacity=".7"></path><path d="M15.814 14H17.9c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C21.9 15.9 21.9 16.6 21.9 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C20 22 19.3 22 17.9 22H6c.917 0 1.534 0 2-.077v.003l.003-.003c.245-.04.448-.102.632-.195a2.5 2.5 0 0 0 1.093-1.093c.093-.184.155-.387.195-.632l3.299-3.299z" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl md:text-3xl text-zinc-100 tracking-tighter font-manrope font-medium">UI/UX Design</h3>
</div>
<p className="text-zinc-300 max-w-2xl font-sans">
              User-centered design that combines aesthetics with functionality. We create intuitive interfaces that enhance user satisfaction and drive engagement through research-backed design decisions.
            </p>
<div className="mt-8 grid grid-cols-5 gap-4 md:gap-6">
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--solar" data-icon="solar:eye-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-sans">Research</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--solar" data-icon="solar:widget-2-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2 6.634a4.634 4.634 0 1 1 9.268 0a4.634 4.634 0 0 1-9.268 0" fill="currentColor" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M12.732 17.366a4.634 4.634 0 1 1 9.269 0a4.634 4.634 0 0 1-9.269 0" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5" fill="currentColor"></path><path d="M13 6.5c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5" fill="currentColor" opacity=".5"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-sans">Wireframe</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--solar" data-icon="solar:layers-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" fill="currentColor"></path><path clip-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" fill="currentColor" fill-rule="evenodd"></path><path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10l-2.021.809C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" fill="currentColor" opacity=".7"></path><path d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14l-2.021.809C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191z" fill="currentColor" opacity=".4"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-sans">Prototype</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--solar" data-icon="solar:users-group-rounded-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="6" fill="currentColor" opacity=".4" r="3"></circle><ellipse cx="16" cy="17" fill="currentColor" opacity=".4" rx="5" ry="3"></ellipse><circle cx="9.001" cy="6" fill="currentColor" r="4"></circle><ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4"></ellipse></svg>
</div>
<span className="text-xs text-zinc-400 font-sans">Testing</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-sans">Launch</span>
</div>
</div>
</div>
<div className="lg:col-span-1">
<article className="relative bg-zinc-900 border-white/10 border rounded-3xl p-6 h-full">
<div className="flex items-center justify-between">
<h3 className="text-white text-xl tracking-tight font-sans">Development</h3>
<span className="text-[11px] text-zinc-300 font-sans">Pro</span>
</div>
<p className="mt-2 text-sm text-zinc-300 font-sans">Pixel-perfect implementation with clean, maintainable code.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-2xl ring-1 px-3 py-2 ring-white/20 bg-white/10">
<span className="text-sm font-sans text-zinc-200">React/Next.js</span>
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
<div className="flex items-center justify-between rounded-2xl ring-1 px-3 py-2 ring-white/20 bg-white/10">
<span className="text-sm font-sans text-zinc-200">Tailwind CSS</span>
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
<div className="flex items-center justify-between rounded-2xl ring-1 px-3 py-2 ring-white/20 bg-white/10">
<span className="text-sm font-sans text-zinc-200">Animations</span>
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
<div className="flex items-center justify-between rounded-2xl ring-1 px-3 py-2 ring-white/20 bg-white/10">
<span className="text-sm font-sans text-zinc-200">Performance</span>
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-2 text-[11px] rounded-full px-2 py-1 ring-1 font-sans text-zinc-200 bg-white/10 ring-white/20">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
                  Enterprise ready
                </span>
</div>
</article>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-1">
<article className="relative bg-zinc-900 border-white/10 border rounded-3xl p-6 h-full">
<div className="flex items-center justify-between">
<h3 className="text-white text-xl tracking-tight font-sans">Branding</h3>
</div>
<p className="mt-2 text-sm text-zinc-300 font-sans">Create memorable brand identities that resonate with your audience.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-2xl ring-1 px-3 py-2 ring-white/20 bg-white/10">
<span className="text-sm font-sans text-zinc-200">Logo Design</span>
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
<div className="flex items-center justify-between rounded-2xl ring-1 px-3 py-2 ring-white/20 bg-white/10">
<span className="text-sm font-sans text-zinc-200">Style Guide</span>
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
<div className="flex items-center justify-between rounded-2xl ring-1 px-3 py-2 ring-white/20 bg-white/10">
<span className="text-sm font-sans text-zinc-200">Marketing Assets</span>
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
</div>
</article>
</div>
<div className="lg:col-span-2">
<aside className="relative overflow-hidden rounded-3xl flex flex-col bg-zinc-950 border-zinc-900 border p-8 h-full">
<div className="flex items-center justify-between text-sm text-zinc-400">
<span className="font-sans">Strategy &amp; Consulting</span>
</div>
<h4 className="mt-4 text-3xl md:text-4xl text-zinc-100 tracking-tighter font-manrope font-medium">
                Transform your vision into reality
              </h4>
<p className="text-base text-zinc-300 mt-3 font-sans">
                Strategic guidance from discovery to execution. We help you define goals, understand users, and create roadmaps for success with data-driven insights.
              </p>
<div className="mt-8 grid grid-cols-12 gap-2 h-16 items-end">
<span className="h-4 rounded-3xl bg-white/40"></span>
<span className="h-6 rounded-3xl bg-white/50"></span>
<span className="h-8 rounded-3xl bg-white/60"></span>
<span className="h-12 rounded-3xl bg-white/70"></span>
<span className="h-10 rounded-3xl bg-white/80"></span>
<span className="h-14 rounded-3xl bg-white/90"></span>
<span className="h-6 rounded-3xl bg-white/50"></span>
<span className="h-9 rounded-3xl bg-white/60"></span>
<span className="h-5 rounded-3xl bg-white/70"></span>
<span className="h-11 rounded-3xl bg-white/80"></span>
<span className="h-7 rounded-3xl bg-white/50"></span>
<span className="h-3 rounded-3xl bg-white/60"></span>
</div>
<div className="mt-6 flex items-center gap-2 text-zinc-300 text-sm">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:chart-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M14 20.5V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5z" fill="currentColor" fill-rule="evenodd"></path><path d="M8 8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H8zm12 5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H20z" fill="currentColor" opacity=".7"></path><path d="M1.75 20.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z" fill="currentColor" opacity=".5"></path></svg>
<span className="font-sans">Drive measurable growth and engagement.</span>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:pt-44 lg:pl-8 lg:pr-8 lg:pb-44 max-w-6xl mx-auto pt-44 pr-8 pb-44 pl-8">
<div className="mb-12">
<div className="text-center mb-12">
<div className="mb-6">
<div className="flex items-center justify-between text-sm font-medium uppercase tracking-tight text-zinc-400">
<span className="font-sans">Testimonials</span>
<span className="font-sans">(04)</span>
</div>
<div className="mt-2 h-px w-full bg-zinc-800"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
<div className="lg:col-span-7">
<h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] uppercase text-white tracking-tighter font-manrope font-medium">
                What Clients Say
              </h3>
</div>
<div className="lg:col-span-5">
<p className="text-lg text-zinc-300 max-w-3xl mb-6 font-sans">
                Real feedback from partnerships that drive exceptional results and lasting success.
              </p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 ring-1 ring-zinc-700 hover:shadow-lg transition bg-zinc-800 hover:bg-zinc-700 rounded-full p-2 hover:ring-white/20" href="#contact">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--solar" data-icon="solar:letter-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.2 3H9.8C5.652 3 3.577 3 2.289 4.318S1 7.758 1 12s0 6.364 1.289 7.682S5.652 21 9.8 21h4.4c4.148 0 6.223 0 7.511-1.318S23 16.242 23 12s0-6.364-1.289-7.682S18.348 3 14.2 3" fill="currentColor" opacity=".5"></path><path d="M19.128 8.033a.825.825 0 0 0-1.056-1.268l-2.375 1.98c-1.026.855-1.738 1.447-2.34 1.833c-.582.375-.977.5-1.357.5s-.774-.125-1.357-.5c-.601-.386-1.314-.978-2.34-1.834L5.928 6.765a.825.825 0 0 0-1.056 1.268l2.416 2.014c.975.812 1.765 1.47 2.463 1.92c.726.466 1.434.762 2.25.762c.814 0 1.522-.296 2.249-.763c.697-.448 1.487-1.107 2.462-1.92z" fill="currentColor"></path></svg>
</span>
<span className="px-3 text-sm font-sans">Get Started</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-sm ring-1 ring-zinc-800">
<div className="relative overflow-hidden text-white bg-zinc-900 p-6">
<div className="flex gap-2 mb-4 items-center">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:chat-square-bold-duotone" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.975 13.814A10.95 10.95 0 0 1 17 15.001C10.925 15 6 10.076 6 4q.001-.945.154-1.847c-.715.106-1.277.284-1.766.584a5 5 0 0 0-1.651 1.65C2 5.591 2 7.228 2 10.501v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706c.227-.547.319-1.182.356-2.1" fill="currentColor"></path><path clip-rule="evenodd" d="m13.087 21.389l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706c.227-.547.319-1.182.356-2.1A10.95 10.95 0 0 1 17 15.001C10.925 15 6 10.076 6 4q.001-.945.154-1.847c-.715.106-1.277.284-1.766.584a5 5 0 0 0-1.651 1.65C2 5.591 2 7.228 2 10.501v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0" fill="currentColor" fill-rule="evenodd"></path><path d="M13.5 2h-3c-1.94 0-3.305 0-4.346.153Q6.001 3.055 6 4c0 6.075 4.925 11 11 11c1.79 0 3.48-.428 4.975-1.187C22 13.192 22 12.441 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="flex items-center gap-1 mb-4 text-white">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
</div>
<p className="text-base leading-relaxed mb-6 font-sans">The team transformed our digital presence completely. Professional, creative, and delivered beyond expectations. Highly recommended!</p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-sans">Sarah Chen</div>
<div className="text-xs mt-1 text-zinc-400 font-sans">CEO, TechFlow</div>
</div>
<img alt="Sarah Chen" className="w-8 h-8 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1e297908-5f87-4f90-8344-59fcf6daec1f_320w.webp"/>
</div>
</div>
<div className="relative overflow-hidden text-zinc-900 bg-white p-6">
<div className="flex items-center gap-3 mb-4">
<img alt="Michael Ross" className="w-6 h-6 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7a0d9edd-455c-4f00-97d0-3796f05f9eb2_320w.webp"/>
<div>
<div className="text-sm font-sans">Michael Ross</div>
<div className="text-xs text-zinc-600 font-sans">CTO, DataVerse</div>
</div>
</div>
<div className="flex gap-1 mb-4 items-center text-zinc-900">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
</div>
<p className="leading-relaxed relative z-10 text-base font-sans">Outstanding work from start to finish. The design perfectly captures our vision and user experience has dramatically improved.</p>
</div>
<div className="relative overflow-hidden text-white bg-zinc-900 p-6">
<div className="flex items-center gap-2 mb-4">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:chat-square-bold-duotone" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.975 13.814A10.95 10.95 0 0 1 17 15.001C10.925 15 6 10.076 6 4q.001-.945.154-1.847c-.715.106-1.277.284-1.766.584a5 5 0 0 0-1.651 1.65C2 5.591 2 7.228 2 10.501v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706c.227-.547.319-1.182.356-2.1" fill="currentColor"></path><path clip-rule="evenodd" d="m13.087 21.389l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706c.227-.547.319-1.182.356-2.1A10.95 10.95 0 0 1 17 15.001C10.925 15 6 10.076 6 4q.001-.945.154-1.847c-.715.106-1.277.284-1.766.584a5 5 0 0 0-1.651 1.65C2 5.591 2 7.228 2 10.501v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0" fill="currentColor" fill-rule="evenodd"></path><path d="M13.5 2h-3c-1.94 0-3.305 0-4.346.153Q6.001 3.055 6 4c0 6.075 4.925 11 11 11c1.79 0 3.48-.428 4.975-1.187C22 13.192 22 12.441 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="flex items-center gap-1 mb-4 text-white">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
</div>
<p className="text-base leading-relaxed mb-6 font-sans">Exceptional creativity and attention to detail. They helped us stand out in a crowded market with stunning visuals.</p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-sans">Emma Taylor</div>
<div className="text-xs mt-1 text-zinc-400 font-sans">Founder, CreativeHub</div>
</div>
<img alt="Emma Taylor" className="w-8 h-8 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/16cc8289-7bfb-4aed-947b-a1af2f32ccb9_320w.webp"/>
</div>
</div>
<div className="lg:col-span-3 border-t border-zinc-800">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
<div className="text-white bg-zinc-900 border-zinc-800 border-r p-6">
<div className="text-4xl mb-2 tracking-tighter font-manrope font-medium">98%</div>
<div className="text-xs text-zinc-400 font-sans">Client satisfaction rate across all projects</div>
</div>
<div className="p-6 border-r bg-zinc-900 text-white border-zinc-800">
<div className="text-4xl mb-2 tracking-tighter font-manrope font-medium">5+ Years</div>
<div className="text-xs text-zinc-400 font-sans">Industry experience with top brands</div>
</div>
<div className="p-6 bg-zinc-900 text-white">
<div className="text-4xl mb-2 tracking-tighter font-manrope font-medium">150+</div>
<div className="text-xs text-zinc-400 font-sans">Successful projects delivered globally</div>
</div>
</div>
</div>
</div>
</section>

<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:pt-40 lg:pl-8 lg:pr-8 lg:pb-40 max-w-7xl z-10 mx-auto pt-40 pr-8 pb-40 pl-8 relative">
<div className="relative overflow-hidden rounded-3xl bg-zinc-900/60 ring-1 ring-white/10 p-10 backdrop-blur">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
<div className="">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs mb-3 font-sans border-white/30 bg-white/15 text-zinc-200">
              Pricing
            </span>
<h2 className="text-4xl sm:text-5xl text-white mt-2 tracking-tighter font-manrope font-medium">
              Simple plans for every need
            </h2>
</div>
<p className="text-base text-zinc-300 max-w-md font-sans">
            Choose the perfect package for your project. Flexible pricing, exceptional value.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 transition-colors">
<h3 className="text-xl text-white tracking-tight font-sans">Starter</h3>
<p className="text-sm text-zinc-400 mt-1 font-sans">For small projects</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tighter font-manrope font-medium">$2,500</span>
<span className="text-sm text-zinc-400 font-sans">/project</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
                Up to 5 pages
              </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
                Responsive design
              </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify text-zinc-600 iconify--solar" data-icon="solar:close-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" fill="currentColor"></path></svg>
                Custom animations
              </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify text-zinc-600 iconify--solar" data-icon="solar:close-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" fill="currentColor"></path></svg>
                Priority support
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm transition-colors font-sans" href="#contact">
              Get started
            </a>
</div>
<div className="bg-zinc-950 rounded-3xl p-6 relative border-gradient before:rounded-3xl">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
<span className="inline-flex items-center gap-1 text-xs border rounded-full px-3 py-1 backdrop-blur-md font-sans text-zinc-200 bg-white/15 border-white/30">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                Most popular
              </span>
</div>
<div className="relative z-10">
<div className="flex items-center justify-between">
<h3 className="text-xl text-white tracking-tight font-sans">Professional</h3>
</div>
<p className="text-sm text-zinc-400 mt-1 font-sans">For growing businesses</p>
<div className="flex gap-1 mt-4 items-baseline">
<span className="text-4xl text-white tracking-tighter font-manrope font-medium">$7,500</span>
<span className="text-sm text-zinc-400 font-sans">/project</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-zinc-300">
<li className="flex gap-2 items-center font-sans">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
                  Up to 15 pages
                </li>
<li className="flex gap-2 items-center font-sans">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
                  Custom animations
                </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
                  CMS integration
                </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
                  Priority support
                </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full text-zinc-900 h-11 ring-1 text-sm transition-colors shadow-lg font-sans bg-white hover:bg-zinc-200 ring-white/30" href="#contact">
                Start project
              </a>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 transition-colors">
<h3 className="text-xl text-white tracking-tight font-sans">Enterprise</h3>
<p className="text-sm text-zinc-400 mt-1 font-sans">For large organizations</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tighter font-manrope font-medium">Custom</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-zinc-300">
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
                Unlimited pages
              </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
                Advanced features
              </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
                Dedicated team
              </li>
<li className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:check-circle-bold-duotone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
                24/7 support
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm transition-colors font-sans" href="#contact">
              Contact sales
            </a>
</div>
</div>
</div>
</section>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll md:pt-40 md:pl-10 md:pr-10 md:pb-40 max-w-7xl mr-auto ml-auto pt-40 pr-10 pb-40 pl-10 relative" id="contact">
<div className="flex items-center justify-center gap-4 text-zinc-400 text-sm">
<span className="h-px w-12 bg-white/10"></span>
<span className="font-sans">Let's create together</span>
<span className="h-px w-12 bg-white/10"></span>
</div>
<h2 className="mt-4 text-5xl sm:text-6xl text-white text-center tracking-tighter font-manrope font-medium">
        Ready to Start Your <span className="tracking-tighter font-manrope font-medium text-zinc-400">Project?</span>
</h2>
<p className="mt-4 text-base text-zinc-400 max-w-xl mx-auto text-center font-sans">
        Let's discuss your vision and create something extraordinary together. Get in touch today.
      </p>
<div className="mt-6 flex justify-center">
<a className="inline-flex items-center gap-2 h-12 px-8 rounded-full ring-1 text-zinc-900 text-sm tracking-tight transition shadow-lg font-sans bg-white hover:bg-zinc-200 ring-white/20" href="mailto:hello@designstudio.com">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:letter-bold-duotone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14.2 3H9.8C5.652 3 3.577 3 2.289 4.318S1 7.758 1 12s0 6.364 1.289 7.682S5.652 21 9.8 21h4.4c4.148 0 6.223 0 7.511-1.318S23 16.242 23 12s0-6.364-1.289-7.682S18.348 3 14.2 3" fill="currentColor" opacity=".5"></path><path d="M19.128 8.033a.825.825 0 0 0-1.056-1.268l-2.375 1.98c-1.026.855-1.738 1.447-2.34 1.833c-.582.375-.977.5-1.357.5s-.774-.125-1.357-.5c-.601-.386-1.314-.978-2.34-1.834L5.928 6.765a.825.825 0 0 0-1.056 1.268l2.416 2.014c.975.812 1.765 1.47 2.463 1.92c.726.466 1.434.762 2.25.762c.814 0 1.522-.296 2.249-.763c.697-.448 1.487-1.107 2.462-1.92z" fill="currentColor"></path></svg>
          Contact Us
        </a>
</div>
<div className="flex gap-6 text-zinc-400 mt-8 gap-x-6 gap-y-6 items-center justify-center">
<a aria-label="Dribbble" className="hover:bg-white/5 hover:text-white transition rounded-2xl pt-2 pr-2 pb-2 pl-2" href="#">
<svg aria-hidden="true" className="iconify iconify--solar w-[20px] h-[20px]" data-icon="solar:palette-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="user-id-bold-duotone" data-width="20" height="20" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4" fill="#ffffff" opacity=".5"></path><path d="M13.25 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M9 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" fill="#ffffff"></path></svg>
</a>
<span className="h-6 w-px bg-white/10"></span>
<a aria-label="Dribbble" className="hover:bg-white/5 hover:text-white transition rounded-2xl pt-2 pr-2 pb-2 pl-2" href="#">
<svg aria-hidden="true" className="iconify iconify--solar w-[20px] h-[20px]" data-icon="solar:palette-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="shield-user-bold-duotone" data-width="20" height="20" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z" fill="#ffffff" opacity=".5"></path><path d="M14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" fill="#ffffff"></path></svg>
</a>
<span className="h-6 w-px bg-white/10"></span>
<a aria-label="Dribbble" className="hover:bg-white/5 hover:text-white transition rounded-2xl pt-2 pr-2 pb-2 pl-2" href="#">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:palette-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75" fill="currentColor"></path><path className="" d="M10 18V6c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093C8.1 2 7.4 2 6 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092C10 20.1 10 19.4 10 18" fill="currentColor" opacity=".4"></path><path d="M10 8.243V18c0 .919 0 1.536-.077 2.003l3.299-3.299l5.838-6.09c.973-1.003 1.46-1.505 1.636-2.08a2.5 2.5 0 0 0-.011-1.503C20.5 6.458 20 5.958 19 4.959c-.9-.886-1.352-1.33-1.88-1.514a2.5 2.5 0 0 0-1.353-.085c-.547.118-1.049.502-2.053 1.27L13 5.243zm-1.997 13.68H8v.003z" fill="currentColor" opacity=".7"></path><path className="" d="M15.814 14H17.9c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C21.9 15.9 21.9 16.6 21.9 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C20 22 19.3 22 17.9 22H6c.917 0 1.534 0 2-.077v.003l.003-.003c.245-.04.448-.102.632-.195a2.5 2.5 0 0 0 1.093-1.093c.093-.184.155-.387.195-.632l3.299-3.299z" fill="currentColor"></path></svg>
</a>
<span className="h-6 w-px bg-white/10"></span>
<a aria-label="Behance" className="p-2 rounded-2xl hover:bg-white/5 hover:text-white transition" href="#">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:gallery-bold-duotone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor"></path><path clip-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" fill="currentColor" fill-rule="evenodd"></path><path d="m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a3 3 0 0 0 .602-.859" fill="currentColor" opacity=".4"></path></svg>
</a>
</div>
<p className="mt-6 text-center">
<a className="text-sm text-zinc-300 underline underline-offset-4 hover:text-white font-sans" href="mailto:hello@designstudio.com">
          hello@designstudio.com
        </a>
</p>
<div className="mt-12 h-px bg-white/5"></div>
<div className="mt-6 flex items-center justify-between text-xs text-zinc-500">
<p className="font-sans">© 2025 Design Studio</p>
<p className="font-sans">Crafted with passion</p>
</div>
</div>
</div>


    </>
  );
}

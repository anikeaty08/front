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



    (function() {
      const rail = document.getElementById('testimonial-rail');
      const prevButton = document.getElementById('testimonial-prev');
      const nextButton = document.getElementById('testimonial-next');
      
      if (rail && prevButton && nextButton) {
        const scrollDistance = 540; // Card width + gap
        
        // Previous button click handler
        prevButton.addEventListener('click', function(e) {
          e.preventDefault();
          rail.scrollBy({
            left: -scrollDistance,
            behavior: 'smooth'
          });
        });
        
        // Next button click handler
        nextButton.addEventListener('click', function(e) {
          e.preventDefault();
          rail.scrollBy({
            left: scrollDistance,
            behavior: 'smooth'
          });
        });
        
        // Update button states based on scroll position
        function updateButtonStates() {
          const scrollLeft = rail.scrollLeft;
          const maxScroll = rail.scrollWidth - rail.clientWidth;
          
          // Disable/enable previous button
          if (scrollLeft <= 10) {
            prevButton.style.opacity = '0.5';
            prevButton.style.pointerEvents = 'none';
          } else {
            prevButton.style.opacity = '1';
            prevButton.style.pointerEvents = 'auto';
          }
          
          // Disable/enable next button
          if (scrollLeft >= maxScroll - 10) {
            nextButton.style.opacity = '0.5';
            nextButton.style.pointerEvents = 'none';
          } else {
            nextButton.style.opacity = '1';
            nextButton.style.pointerEvents = 'auto';
          }
        }
        
        // Initial button state update
        updateButtonStates();
        
        // Update button states on scroll
        rail.addEventListener('scroll', updateButtonStates);
        
        // Update button states on window resize
        window.addEventListener('resize', updateButtonStates);
      }
    })();
    


// Simple scroll-based section navigation
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  const sectionNumber = document.getElementById('section-number');
  
  // Section numbers mapping
  const sectionNumbers = {
    'home': '01',
    'projects': '02',
    'about': '03',
    'contact': '04'
  };

  function updateActiveSection() {
    let current = 'home';
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        current = section.id;
      }
    });

    // Update nav links
    navLinks.forEach(link => {
      if (link.getAttribute('data-section') === current) {
        link.style.opacity = '1';
        link.style.borderColor = 'rgba(255, 255, 255, 0.3)';
      } else {
        link.style.opacity = '0.7';
        link.style.borderColor = 'transparent';
      }
    });

    // Update section number
    if (sectionNumber && sectionNumbers[current]) {
      sectionNumber.textContent = sectionNumbers[current];
    }
  }

  // Smooth scroll for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Update active section on scroll
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection(); // Initial call

  // Fade in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in').forEach(el => {
    observer.observe(el);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="P1wGALfoq0LrONy85H4M"></div>
</div>

<div className="fixed inset-0 w-screen h-screen bg-center -z-10 transition-opacity duration-700 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20 bg-cover" style={{opacity: '1'}}></div>

<header className="fixed top-0 left-0 right-0 z-50 sm:pt-8 pt-6">
<div className="sm:px-8 lg:px-12 pr-6 pl-6">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-6">
<div className="flex sm:justify-start items-center justify-between">
<a className="inline-flex items-center justify-center h-[40px] w-[200px] bg-transparent rounded" href="#" style={{fontFamily: '\'Inter\', sans-serif'}}>
<span className="select-none text-lg font-semibold text-white tracking-tight cursor-pointer" onclick="window.location.href='/home'" role="button" style={{letterSpacing: '0.05em'}}>SOURASITH</span>
</a>
</div>
<div className="col-start-3 flex flex-col text-right items-end">
<span className="text-xs font-semibold tracking-tight">Based in Montreal, Canada</span>
<span className="text-[13px] text-slate-50/70">Creative Thinker &amp; Interface Builder</span>
</div>
</div>
</div>
</header>

<aside className="fixed left-6 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-40 hidden md:block">
<nav className="leading-6 text-sm space-y-3">
<a className="block hover:opacity-80 transition-all duration-300 hover:border-white/30 -ml-4 font-medium opacity-70 border-transparent border-l-2 pl-4" href="/home" style={{opacity: '1', borderColor: 'rgba(255, 255, 255, 0.3)'}}>Home</a>
<a className="block hover:opacity-80 transition-all duration-300 hover:border-white/30 -ml-4 font-medium opacity-70 border-transparent border-l-2 pl-4" href="/about" style={{opacity: '0.7', borderColor: 'transparent'}}>About</a>
<a className="block hover:opacity-80 transition-all duration-300 hover:border-white/30 -ml-4 font-medium opacity-70 border-transparent border-l-2 pl-4" href="/work" style={{opacity: '0.7', borderColor: 'transparent'}}>Work</a>
<a className="block hover:opacity-80 transition-all duration-300 hover:border-white/30 -ml-4 font-medium opacity-70 border-transparent border-l-2 pl-4" href="/contact" style={{opacity: '0.7', borderColor: 'transparent'}}>Contact</a>
</nav>
<div className="h-px w-12 bg-neutral-400/60 mt-16" style={{}}></div>
<button className="group flex gap-2 hover:opacity-70 transition-opacity text-sm text-neutral-300 items-center mt-8" style={{}}>
<span className="" style={{}}>My Resume</span>
<div className="transition-transform duration-300 group-hover:translate-x-0.5">
<svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</button>
</aside>

<aside className="fixed right-6 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40 hidden md:block">
<div className="flex items-center justify-end mb-8">
<div className="mr-3 h-px w-10 bg-neutral-400/60" style={{}}></div>
<div className="text-sm font-medium" id="section-number" style={{}}>01</div>
</div>

<div className="flex flex-col bg-white/5 max-w-fit border-white/15 border rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)', border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)'}}>
<style>
    .iso-pro span {
      opacity: 0;
      position: absolute;
      border-radius: 0.5rem;
      transition: all 0.3s;
      height: 42px;
      width: 42px;
      left: 0;
      top: 0;
      pointer-events: none;
      z-index: 1;
      background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%);
      backdrop-filter: blur(10px);
    }
    .iso-pro:hover span { opacity: 1; }
    .iso-pro:hover span:nth-child(1) { opacity: 0.4; }
    .iso-pro:hover span:nth-child(2) { opacity: 0.6; transform: translate(-6px, 0px);}
    .iso-pro:hover span:nth-child(3) { opacity: 0.8; transform: translate(-12px, 0px);}
    .iso-pro:hover a > .icon-wrapper { transform: translate(-15px, 0px); }
    .iso-pro .text { opacity: 0; transition: all 0.3s; }
    .iso-pro:hover .text {
      opacity: 1;
      transform: translateX(-60px) translateY(-6px);
    }
    .iso-pro:nth-child(1):hover .text {
      transform: translateX(-42px) translateY(-6px);
    }
  </style>
<ul className="flex flex-col gap-2.5 items-center justify-center list-none">

<li className="iso-pro relative cursor-pointer flex items-center">
<span></span>
<span></span>
<span></span>
<a className="relative z-10 flex items-center" href="#">
<div className="icon-wrapper flex transition-all duration-300 hover:bg-white/15 bg-white/10 w-8 h-8 border-white/10 border rounded-lg backdrop-blur-md items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.15)'}}>
<svg className="fill-white" height="16" viewbox="0 0 512 512" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
</svg>
</div>
<div className="text absolute text-xs font-medium font-geist rounded-md px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg whitespace-nowrap text-white" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
          X
        </div>
</a>
</li>

<li className="iso-pro relative cursor-pointer flex items-center">
<span></span>
<span></span>
<span></span>
<a className="relative z-10 flex items-center" href="#">
<div className="icon-wrapper flex transition-all duration-300 hover:bg-white/15 bg-white/10 backdrop-blur-md w-8 h-8 rounded-lg items-center justify-center border border-white/10" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.15)'}}>
<svg className="fill-white" height="16" viewbox="0 0 448 512" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
</svg>
</div>
<div className="text absolute text-xs font-medium font-geist rounded-md px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg whitespace-nowrap text-white" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
          Instagram
        </div>
</a>
</li>

<li className="iso-pro relative cursor-pointer flex items-center">
<span></span>
<span></span>
<span></span>
<a className="relative z-10 flex items-center" href="#">
<div className="icon-wrapper flex transition-all duration-300 hover:bg-white/15 bg-white/10 backdrop-blur-md w-8 h-8 rounded-lg items-center justify-center border border-white/10" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.15)'}}>
<svg className="fill-white" height="16" viewbox="0 0 448 512" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
</svg>
</div>
<div className="text absolute text-xs font-medium font-geist rounded-md px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg whitespace-nowrap text-white" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
          LinkedIn
        </div>
</a>
</li>
</ul>
</div>
</aside>
<main className="relative">

<section className="section w-screen h-screen flex flex-col relative" id="home">

<div className="pointer-events-none absolute inset-0 invisible">
<span className="absolute -right-24 top-1/3 h-px w-[150%] -rotate-[18deg] bg-neutral-600/20" style={{}}></span>
<span className="absolute -left-10 bottom-12 h-px w-[130%] rotate-[10deg] bg-neutral-600/15" style={{}}></span>
</div>

<div className="flex-none pt-32 sm:pt-40">
</div>

<div className="flex-1 flex flex-col sm:pb-20 lg:pb-24 pb-16 justify-end">
<div className="w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="grid grid-cols-12 gap-6">
<div className="col-span-12 md:col-span-10 md:col-start-2 flex flex-col space-y-0 justify-end">
<section className="w-full max-w-7xl mr-auto ml-auto">
<div className="max-w-7xl">

<div className="mb-16">
<h1 className="leading-none tracking-tight text-white select-none">
<span className="block text-[22vw] md:text-[16vw] xl:text-[12vw] 2xl:text-[10vw] font-extrabold" style={{overflow: 'hidden'}}>
<h1 className="sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-light tracking-tighter font-geist max-w-xl">
  Known for gradients and breaking design rules
</h1>
<style>
              @keyframes letterSlideIn {
                0% {
                  transform: translateY(-100%);
                  opacity: 0;
                  clip-path: inset(0 0 100% 0);
                }

                50% {
                  opacity: 0.5;
                  clip-path: inset(0 0 50% 0);
                }

                100% {
                  transform: translateY(0);
                  opacity: 1;
                  clip-path: inset(0 0 0% 0);
                }
              }
            </style>
</span>
</h1>
</div>
</div>
</section>
<section className="w-full max-w-7xl mr-auto ml-auto">
<div className="max-w-7xl">

<div className="mb-16">
<h1 className="leading-none tracking-tight text-white select-none">
<span className="block text-[22vw] md:text-[16vw] xl:text-[12vw] 2xl:text-[10vw] font-extrabold" style={{overflow: 'hidden'}}>
<span className="" style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>S</span><span className="" style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0.1s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>O</span><span className="" style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0.2s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>U</span><span className="" style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0.3s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>R</span><span className="" style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0.3s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>A</span><span className="" style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0.3s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>S</span><span className="" style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0.3s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>I</span><span className="" style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0.3s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>T</span><span className="" style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0.3s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>H</span>
<style>
              @keyframes letterSlideIn {
                0% {
                  transform: translateY(-100%);
                  opacity: 0;
                  clip-path: inset(0 0 100% 0);
                }

                50% {
                  opacity: 0.5;
                  clip-path: inset(0 0 50% 0);
                }

                100% {
                  transform: translateY(0);
                  opacity: 1;
                  clip-path: inset(0 0 0% 0);
                }
              }
            </style>
</span>
</h1>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</section>

<section className="fade-in-up py-24 visible">
<div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
<blockquote className="relative">
<div className="absolute -top-8 -left-4">
<svg className="text-white/20" fill="none" height="36" viewbox="0 0 48 36" width="48">
<path d="M0 36V18.75C0 11.5 2.5 5.25 7.5 0H18.75C14.5 2.5 11.25 6.25 9 11.25C8.25 13.25 7.75 15.25 7.5 17.25V36H0ZM20.25 36V18.75C20.25 11.5 22.75 5.25 27.75 0H39C34.75 2.5 31.5 6.25 29.25 11.25C28.5 13.25 28 15.25 27.75 17.25V36H20.25Z" fill="currentColor"></path>
</svg>
</div>
<p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 leading-relaxed tracking-tight font-instrument-serif italic">
          Good design is invisible, great design is unforgettable.
        </p>
<footer className="mt-6 text-sm text-white/60">
          — Design Philosophy
        </footer>
</blockquote>
</div>
</section>

<section className="section sm:px-8 lg:px-12 py-24 pr-6 pl-6" id="projects">
<div className="w-full max-w-7xl mr-auto ml-auto">
<section className="z-10 sm:p-8 animate-scaleIn animation-delay-300 bg-zinc-950/50 w-full max-w-7xl border-white/10 border rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur" style={{}}>

<div className="flex gap-6 sm:px-0 pr-1 pl-1 items-center animate-fadeInUp">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-white">Quick Facts</span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px h-10 bg-white/10" role="separator"></span>
<span className="text-sm text-neutral-300" style={{}}>Snapshot of me</span>
</div>
<div className="h-px bg-white/10 mt-4 animate-fadeIn animation-delay-100"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 gap-x-10 gap-y-10">
<div className="">
<div className="text-sm uppercase text-neutral-400" style={{}}>Specialty:</div>
<div className="text-lg font-medium text-white tracking-tight mt-1">UI/UX Designer</div>
<div className="h-px bg-white/10 mt-6"></div>
</div>
<div className="">
<div className="text-sm uppercase text-neutral-400" style={{}}>Availability:</div>
<div className="text-lg font-medium tracking-tight text-white mt-1">Open for work</div>
<div className="h-px bg-white/10 mt-6"></div>
</div>
<div className="">
<div className="text-sm uppercase text-neutral-400" style={{}}>Experience:</div>
<div className="text-lg font-medium text-white tracking-tight mt-1">5+ Years</div>
<div className="h-px bg-white/10 mt-6"></div>
</div>
<div className="">
<div className="text-sm uppercase text-neutral-400" style={{}}>Based in:</div>
<div className="text-lg font-medium text-white tracking-tight mt-1">Montreal, Canada</div>
<div className="h-px bg-white/10 mt-6"></div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-6 gap-x-10 gap-y-10">
<div className="group">
<button className="w-full flex items-center justify-between text-base tracking-tight text-white hover:opacity-80 transition">
<span className="">About</span>
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
</button>
</div>
<div className="group">
<button className="w-full flex items-center justify-between text-base tracking-tight text-white hover:opacity-80 transition">
<span className="">Works</span>
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
</button>
</div>
<div className="group">
<button className="w-full flex items-center justify-between text-base tracking-tight text-white hover:opacity-80 transition">
<span className="">Services</span>
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
<div className="group">
<button className="w-full flex items-center justify-between text-base tracking-tight text-white hover:opacity-80 transition">
<span>Contact</span>
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</section>
</div>
</section>

<section className="fade-in-up py-24 visible">
<div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
<blockquote className="relative">
<div className="absolute -top-8 -left-4">
<svg className="text-white/20" fill="none" height="36" viewbox="0 0 48 36" width="48">
<path d="M0 36V18.75C0 11.5 2.5 5.25 7.5 0H18.75C14.5 2.5 11.25 6.25 9 11.25C8.25 13.25 7.75 15.25 7.5 17.25V36H0ZM20.25 36V18.75C20.25 11.5 22.75 5.25 27.75 0H39C34.75 2.5 31.5 6.25 29.25 11.25C28.5 13.25 28 15.25 27.75 17.25V36H20.25Z" fill="currentColor"></path>
</svg>
</div>
<p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 leading-relaxed tracking-tight font-instrument-serif italic">
          The best interface is the one you don't notice – until you need it.
        </p>
<footer className="mt-6 text-sm text-white/60">
          — User Experience Philosophy
        </footer>
</blockquote>
</div>
</section>

<section className="section sm:px-8 lg:px-12 pt-24 pr-6 pb-24 pl-6" id="about">
<div className="w-full max-w-7xl mr-auto ml-auto">
<section className="z-10 sm:p-8 animate-scaleIn animation-delay-300 bg-zinc-950/50 w-full max-w-7xl border-white/10 border rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">

<div className="flex gap-6 sm:px-0 pr-1 pl-1 items-center animate-fadeInUp">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-white">About Me</span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px h-10 bg-white/10" role="separator"></span>
<span className="text-sm text-neutral-300" style={{}}>who I am</span>
</div>
<div className="h-px bg-white/10 mt-4 animate-fadeIn animation-delay-100"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start relative z-10 mt-6 sm:mt-8">

<div className="flex flex-col min-h-full justify-between lg:col-span-5 animate-fadeInLeft animation-delay-200">
<div className="">
<h2 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter" style={{}}>
          Passionate designer crafting digital experiences.
        </h2>

<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-300"></div>

<div className="mt-6 animate-fadeInUp animation-delay-400">
<p className="text-sm sm:text-base font-medium text-white tracking-tight">My Story</p>
<p className="text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed" style={{}}>
            I'm a Montreal-based UI/UX designer with over 5 years of experience creating digital products that users love. My passion lies in solving complex problems through simple, elegant design solutions.
          </p>
<p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed" style={{}}>
            When I'm not designing, you'll find me teaching design principles to the next generation of creatives, exploring new technologies, or capturing moments through photography.
          </p>
</div>

<div className="mt-6 animate-fadeInUp animation-delay-400">
<p className="text-sm font-medium text-white tracking-tight">Core Expertise</p>
<div className="mt-3 flex flex-wrap gap-2 stagger-animation">
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200" style={{}}>
<svg className="lucide lucide-palette w-3.5 h-3.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
              UI/UX Design
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200" style={{}}>
<svg className="lucide lucide-code w-3.5 h-3.5" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
              Frontend Development
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200" style={{}}>
<svg className="lucide lucide-graduation-cap w-3.5 h-3.5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
              Teaching &amp; Mentoring
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200" style={{}}>
<svg className="lucide lucide-camera w-3.5 h-3.5" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
              Photography
            </span>
</div>
</div>

<div className="mt-6 grid grid-cols-3 gap-4 stagger-animation">
<div className="hover-lift">
<div className="text-2xl font-semibold text-white">5+</div>
<div className="text-xs text-neutral-400" style={{}}>Years Experience</div>
</div>
<div className="hover-lift">
<div className="text-2xl font-semibold text-white">50+</div>
<div className="text-xs text-neutral-400" style={{}}>Projects Completed</div>
</div>
<div className="hover-lift">
<div className="text-2xl font-semibold text-white">200+</div>
<div className="text-xs text-neutral-400" style={{}}>Students Taught</div>
</div>
</div>
</div>
<div className="w-full mt-10 animate-fadeInUp animation-delay-500">
<div className="">
<p className="text-sm font-medium text-white tracking-tight">Let's work together</p>
<p className="text-sm text-neutral-300 max-w-sm mt-1" style={{}}>
            Always open to new opportunities and interesting projects. Let's create something amazing together.
          </p>
<div className="flex gap-6 animate-fadeInUp animation-delay-500 mt-5 gap-x-6 gap-y-6 items-center">
<div className="inline-block group relative">
<a className="" href="#resume" onmouseout="this.style.color='var(--purple)'; this.style.boxShadow='inset 0 0 10px rgba(155, 126, 218, 0.4), 0 0 9px 3px rgba(155, 126, 218, 0.1)';" onmouseover="this.style.color='#BFA3F3'; this.style.boxShadow='inset 0 0 10px rgba(155, 126, 218, 0.6), 0 0 9px 3px rgba(155, 126, 218, 0.2)';" style={{'--purple': '#9B7EDA', fontSize: '14px', padding: '0.8em 1.5em', letterSpacing: '0.08em', position: 'relative', fontFamily: 'inherit', borderRadius: '0.6em', overflow: 'hidden', transition: '0.3s', lineHeight: '1.4em', border: '2px solid var(--purple)', background: 'linear-gradient(to right, rgba(155, 126, 218, 0.1) 1%, transparent 40%, transparent 60%, rgba(155, 126, 218, 0.1) 100%)', color: 'var(--purple)', boxShadow: 'rgba(155, 126, 218, 0.4) 0px 0px 10px inset, rgba(155, 126, 218, 0.1) 0px 0px 9px 3px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer', marginTop: '1rem'}}>
<span className="" style={{position: 'relative', zIndex: '2', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>Get in touch</span>
<span className="" onmouseout="this.style.transform='translateX(0)'" onmouseover="this.style.transform='translateX(15em)'" style={{content: '""', position: 'absolute', left: '-4em', width: '4em', height: '100%', top: '0px', transition: 'transform 0.4s ease-in-out', background: 'linear-gradient(to right, transparent 1%, rgba(155, 126, 218, 0.1) 40%, rgba(155, 126, 218, 0.1) 60%, transparent 100%)', zIndex: '1', transform: 'translateX(0px)'}}></span>
</a>
</div>
<a className="" href="#resume" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'" onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px inset', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>Download Resume<svg className="lucide lucide-download lucide-arrow-right" data-icon-replaced="true" data-lucide="download" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg></span>
</a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 animate-fadeInRight animation-delay-300">
<div className="relative">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 hover:scale-[1.02] transition-transform duration-300" style={{}}>
<div className="aspect-[5/6] relative overflow-hidden">
<img alt="Sourasith portrait" className="w-full h-full object-cover" src="https://i.imgur.com/2sgJEdV.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="text-white text-lg font-medium tracking-tight">Sourasith</div>
<div className="text-white/80 text-sm">UI/UX Designer &amp; Creative Instructor</div>
<div className="text-white/60 text-xs mt-1">Montreal, Canada</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-4">
<div className="bg-neutral-900/60 border border-white/10 rounded-xl p-4 hover:bg-neutral-900/80 transition-colors duration-300" style={{}}>
<div className="flex items-center gap-3">
<div className="p-2 bg-purple-400/10 rounded-lg">
<svg className="lucide lucide-heart text-purple-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"></path></svg>
</div>
<div className="">
<div className="text-white text-sm font-medium">Design Philosophy</div>
<div className="text-neutral-400 text-xs" style={{}}>Function meets beauty</div>
</div>
</div>
</div>
<div className="bg-neutral-900/60 border border-white/10 rounded-xl p-4 hover:bg-neutral-900/80 transition-colors duration-300" style={{}}>
<div className="flex items-center gap-3">
<div className="p-2 bg-blue-400/10 rounded-lg">
<svg className="lucide lucide-coffee text-blue-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" x2="6" y1="2" y2="4"></line><line x1="10" x2="10" y1="2" y2="4"></line><line x1="14" x2="14" y1="2" y2="4"></line></svg>
</div>
<div className="">
<div className="text-white text-sm font-medium">Fuel of Choice</div>
<div className="text-neutral-400 text-xs" style={{}}>Coffee &amp; creativity</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</section>

<section className="fade-in-up py-24 visible">
<div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
<blockquote className="relative">
<div className="absolute -top-8 -left-4">
<svg className="text-white/20" fill="none" height="36" viewbox="0 0 48 36" width="48">
<path d="M0 36V18.75C0 11.5 2.5 5.25 7.5 0H18.75C14.5 2.5 11.25 6.25 9 11.25C8.25 13.25 7.75 15.25 7.5 17.25V36H0ZM20.25 36V18.75C20.25 11.5 22.75 5.25 27.75 0H39C34.75 2.5 31.5 6.25 29.25 11.25C28.5 13.25 28 15.25 27.75 17.25V36H20.25Z" fill="currentColor"></path>
</svg>
</div>
<p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 leading-relaxed tracking-tight font-instrument-serif italic">
          Design is not just what it looks like – design is how it works.
        </p>
<footer className="mt-6 text-sm text-white/60">
          — Steve Jobs
        </footer>
</blockquote>
</div>
</section>

<section className="section sm:px-8 lg:px-12 py-24 pr-6 pl-6">
<div className="w-full max-w-7xl mr-auto ml-auto">
<section className="z-10 sm:p-8 animate-scaleIn animation-delay-300 bg-zinc-950/50 w-full max-w-7xl border-white/10 border rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur" style={{}}>

<div className="flex gap-6 sm:px-0 pr-1 pl-1 items-center animate-fadeInUp">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-white">Featured Work</span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px h-10 bg-white/10" role="separator"></span>
<span className="text-sm text-neutral-300" style={{}}>UI/UX design portfolio</span>
</div>
<div className="h-px bg-white/10 mt-4 animate-fadeIn animation-delay-100"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start relative z-10 mt-6 sm:mt-8">

<div className="flex flex-col min-h-full justify-between lg:col-span-5 animate-fadeInLeft animation-delay-200">
<div className="">
<h2 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter" style={{}}>
          Designing experiences that users love.
        </h2>

<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-300"></div>

<div className="mt-6 animate-fadeInUp animation-delay-400">
<p className="text-sm font-medium text-white tracking-tight">Design Philosophy</p>
<p className="text-sm text-neutral-300 mt-2 leading-relaxed" style={{}}>
            I believe great design is invisible. It solves problems, delights users, and drives business goals without drawing attention to itself. Every pixel serves a purpose.
          </p>
</div>

<div className="mt-6 animate-fadeInUp animation-delay-400">
<p className="text-sm font-medium text-white tracking-tight">Design Expertise</p>
<div className="mt-3 flex flex-wrap gap-2 stagger-animation">
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200" style={{}}>
<svg className="lucide lucide-palette w-3.5 h-3.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
              UI Design
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200" style={{}}>
<svg className="lucide lucide-users w-3.5 h-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
              UX Research
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200" style={{}}>
<svg className="lucide lucide-smartphone w-3.5 h-3.5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
              Mobile Design
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200" style={{}}>
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              Prototyping
            </span>
</div>
</div>

<div className="mt-6 grid grid-cols-3 gap-4 stagger-animation">
<div className="hover-lift">
<div className="text-2xl font-semibold text-white">50+</div>
<div className="text-xs text-neutral-400" style={{}}>Apps Designed</div>
</div>
<div className="hover-lift">
<div className="text-2xl font-semibold text-white">5</div>
<div className="text-xs text-neutral-400" style={{}}>Years Exp.</div>
</div>
<div className="hover-lift">
<div className="text-2xl font-semibold text-white">98%</div>
<div className="text-xs text-neutral-400" style={{}}>User Satisfaction</div>
</div>
</div>
</div>
<div className="w-full mt-10 animate-fadeInUp animation-delay-500">
<div className="">
<p className="text-sm font-medium text-white tracking-tight">Ready to collaborate?</p>
<p className="text-sm text-neutral-300 max-w-sm mt-1" style={{}}>
            Let's create intuitive, beautiful, and impactful digital experiences together.
          </p>
<div className="flex gap-6 animate-fadeInUp animation-delay-500 mt-5 gap-x-6 gap-y-6 items-center">
<div className="inline-block group relative">
<a className="" href="#resume" onmouseout="this.style.color='var(--purple)'; this.style.boxShadow='inset 0 0 10px rgba(155, 126, 218, 0.4), 0 0 9px 3px rgba(155, 126, 218, 0.1)';" onmouseover="this.style.color='#BFA3F3'; this.style.boxShadow='inset 0 0 10px rgba(155, 126, 218, 0.6), 0 0 9px 3px rgba(155, 126, 218, 0.2)';" style={{'--purple': '#9B7EDA', fontSize: '14px', padding: '0.8em 1.5em', letterSpacing: '0.08em', position: 'relative', fontFamily: 'inherit', borderRadius: '0.6em', overflow: 'hidden', transition: '0.3s', lineHeight: '1.4em', border: '2px solid var(--purple)', background: 'linear-gradient(to right, rgba(155, 126, 218, 0.1) 1%, transparent 40%, transparent 60%, rgba(155, 126, 218, 0.1) 100%)', color: 'var(--purple)', boxShadow: 'rgba(155, 126, 218, 0.4) 0px 0px 10px inset, rgba(155, 126, 218, 0.1) 0px 0px 9px 3px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer', marginTop: '1rem'}}>
<span className="" style={{position: 'relative', zIndex: '2', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>view Full Portfolio</span>
<span className="" onmouseout="this.style.transform='translateX(0)'" onmouseover="this.style.transform='translateX(15em)'" style={{content: '""', position: 'absolute', left: '-4em', width: '4em', height: '100%', top: '0px', transition: 'transform 0.4s ease-in-out', background: 'linear-gradient(to right, transparent 1%, rgba(155, 126, 218, 0.1) 40%, rgba(155, 126, 218, 0.1) 60%, transparent 100%)', zIndex: '1', transform: 'translateX(0px)'}}></span>
</a>
</div>
<a className="" href="#resume" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'" onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px inset', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>Let's Work Together<svg className="lucide lucide-arrow-right lucide-download" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 animate-fadeInRight animation-delay-300">
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 stagger-animation">

<div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300 hover-lift" style={{}}>
<div className="aspect-[16/10] relative overflow-hidden">
<img alt="Fintech mobile app design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7050fd5-9b66-45d7-a30a-569d8f5e9017_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<svg className="lucide lucide-smartphone h-3.5 w-3.5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                Mobile App
              </span>
</div>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-external-link w-4 h-4 text-white" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="p-4">
<h3 className="text-base font-medium text-white tracking-tight">FinanceFlow</h3>
<p className="text-sm text-neutral-400 mt-1" style={{}}>Modern banking app with intuitive UX</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300 hover-lift" style={{}}>
<div className="aspect-square relative overflow-hidden">
<img alt="Dashboard UI design" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<svg className="lucide lucide-bar-chart-3 w-3.5 h-3.5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</span>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">Analytics Dashboard</h3>
<p className="text-xs text-neutral-400 mt-1" style={{}}>Data visualization interface</p>
</div>
</div>

<div className="relative overflow-hidden group hover:border-white/20 transition-all duration-300 bg-neutral-900 border-white/10 border rounded-2xl hover-lift" style={{}}>
<div className="aspect-square relative overflow-hidden">
<img alt="Food delivery app design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c987757e-3c22-4afb-8315-50113caa4754_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<svg className="lucide lucide-utensils w-3.5 h-3.5" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</span>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">FoodieHub</h3>
<p className="text-xs text-neutral-400 mt-1" style={{}}>Food delivery mobile app</p>
</div>
</div>

<div className="relative overflow-hidden group hover:border-white/20 transition-all duration-300 bg-neutral-900 border-white/10 border rounded-2xl hover-lift" style={{}}>
<div className="aspect-square relative overflow-hidden">
<img alt="Design system components" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6739d5c9-2ec9-43c0-94be-ec961704a2e0_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<svg className="lucide lucide-layers w-3.5 h-3.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</span>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">Design System</h3>
<p className="text-xs text-neutral-400 mt-1" style={{}}>Component library &amp; tokens</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300 hover-lift" style={{}}>
<div className="aspect-square relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-600/20">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</div>

<div className="absolute inset-0 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dcb7f82e-bf8a-4d5c-8c36-ce765f8a2932_800w.jpg)] bg-cover items-center justify-center">
<div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-mouse-pointer h-6 w-6 text-white" data-lucide="mouse-pointer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 12.586 19 19"></path><path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path></svg>
</div>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">Interactive Prototype</h3>
<p className="text-xs text-neutral-400 mt-1" style={{}}>Micro-interactions showcase</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</section>

<section className="fade-in-up py-24 visible">
<div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
<blockquote className="relative">
<div className="absolute -top-8 -left-4">
<svg className="text-white/20" fill="none" height="36" viewbox="0 0 48 36" width="48">
<path d="M0 36V18.75C0 11.5 2.5 5.25 7.5 0H18.75C14.5 2.5 11.25 6.25 9 11.25C8.25 13.25 7.75 15.25 7.5 17.25V36H0ZM20.25 36V18.75C20.25 11.5 22.75 5.25 27.75 0H39C34.75 2.5 31.5 6.25 29.25 11.25C28.5 13.25 28 15.25 27.75 17.25V36H20.25Z" fill="currentColor"></path>
</svg>
</div>
<p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 leading-relaxed tracking-tight font-instrument-serif italic">
          Creativity is intelligence having fun.
        </p>
<footer className="mt-6 text-sm text-white/60">
          — Albert Einstein
        </footer>
</blockquote>
</div>
</section>

<section className="section sm:px-8 lg:px-12 pt-24 pr-6 pb-24 pl-6">
<div className="w-full max-w-7xl mr-auto ml-auto">
<section className="z-10 sm:p-8 animate-scaleIn animation-delay-500 bg-zinc-950/60 w-full max-w-7xl border-white/10 border rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur" style={{}}>

<div className="flex gap-6 sm:px-0 pr-1 pl-1 items-center animate-fadeInUp">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-white">Services</span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-white/10 h-10" role="separator"></span>
<span className="text-sm text-neutral-300" style={{}}>what I offer</span>
</div>
<div className="h-px bg-white/10 mt-4 animate-fadeIn animation-delay-100"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-10 mt-6 sm:mt-8">

<div className="lg:col-span-6 animate-fadeInLeft animation-delay-200">

<h1 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter" style={{}}>Ready to Create Something Amazing Together?</h1>

<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-300"></div>

<div className="mt-6 animate-fadeInUp animation-delay-400">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl text-zinc-100 font-sans font-light tracking-tighter" style={{}}>Learn Design</h3>
<span className="inline-flex items-center rounded-full px-3 py-1 text-sm text-zinc-200 bg-white/5 ring-1 ring-white/10 font-sans hover:bg-white/10 transition-colors duration-200" style={{}}>with DesignCode</span>
</div>
<p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans" style={{}}>Master UI/UX design through comprehensive courses and hands-on projects</p>
</div>

<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-500"></div>

<div className="mt-6 animate-fadeInUp animation-delay-600">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl text-zinc-100 font-sans font-light tracking-tighter" style={{}}>Start a Project</h3>
<span className="inline-flex items-center rounded-full px-3 py-1 text-sm text-zinc-200 bg-white/5 ring-1 ring-white/10 font-sans hover:bg-white/10 transition-colors duration-200" style={{}}>with me</span>
</div>
<p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans" style={{}}>Collaborate on your next digital project with personalized design solutions</p>
</div>

<div className="flex gap-6 animate-fadeInUp animation-delay-500 mt-5 gap-x-6 gap-y-6 items-center">
<div className="inline-block group relative">
<a className="" href="#resume" onmouseout="this.style.color='var(--purple)'; this.style.boxShadow='inset 0 0 10px rgba(155, 126, 218, 0.4), 0 0 9px 3px rgba(155, 126, 218, 0.1)';" onmouseover="this.style.color='#BFA3F3'; this.style.boxShadow='inset 0 0 10px rgba(155, 126, 218, 0.6), 0 0 9px 3px rgba(155, 126, 218, 0.2)';" style={{'--purple': '#9B7EDA', fontSize: '14px', padding: '0.8em 1.5em', letterSpacing: '0.08em', position: 'relative', fontFamily: 'inherit', borderRadius: '0.6em', overflow: 'hidden', transition: '0.3s', lineHeight: '1.4em', border: '2px solid var(--purple)', background: 'linear-gradient(to right, rgba(155, 126, 218, 0.1) 1%, transparent 40%, transparent 60%, rgba(155, 126, 218, 0.1) 100%)', color: 'var(--purple)', boxShadow: 'rgba(155, 126, 218, 0.4) 0px 0px 10px inset, rgba(155, 126, 218, 0.1) 0px 0px 9px 3px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer', marginTop: '1rem'}}>
<span className="" style={{position: 'relative', zIndex: '2', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>View My Work</span>
<span className="" onmouseout="this.style.transform='translateX(0)'" onmouseover="this.style.transform='translateX(15em)'" style={{content: '""', position: 'absolute', left: '-4em', width: '4em', height: '100%', top: '0px', transition: 'transform 0.4s ease-in-out', background: 'linear-gradient(to right, transparent 1%, rgba(155, 126, 218, 0.1) 40%, rgba(155, 126, 218, 0.1) 60%, transparent 100%)', zIndex: '1', transform: 'translateX(0px)'}}></span>
</a>
</div>
<a className="" href="#resume" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'" onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px inset', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>Get In Touch<svg className="lucide lucide-download lucide-arrow-right" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</a>
</div>
</div>

<div className="lg:col-span-6 animate-fadeInRight animation-delay-300">
<div className="relative mx-auto w-full max-w-[860px] hover-lift" style={{filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.6))'}}>

<div className="rounded-[28px] bg-neutral-900/60 ring-1 ring-white/10 p-3" style={{}}>

<div className="relative overflow-hidden rounded-[22px] bg-neutral-950 border border-white/10" style={{}}>

<div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
<span className="h-3 w-3 rounded-full bg-zinc-700" style={{}}></span>
<span className="h-3 w-3 rounded-full bg-zinc-700/70" style={{}}></span>
<span className="h-3 w-3 rounded-full bg-zinc-700/50" style={{}}></span>
</div>

<div className="p-4 sm:p-6">
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 stagger-animation">
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300" style={{}}>
<img alt="Project preview 1" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5607922-3e3a-4da8-958a-13f3bb19c07c_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300" style={{}}>
<img alt="Project preview 2" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c7939795-f326-4a4c-9541-6cd5ee24e793_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 md:row-span-2 hover:scale-105 transition-transform duration-300" style={{}}>
<img alt="Project preview 3" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62af90a3-7459-4c4f-be9c-04149b391218_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300" style={{}}>
<img alt="Project preview 4" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5c3d7b58-631c-4dce-a85d-327c0dbb183b_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300" style={{}}>
<img alt="Project preview 5" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -right-24 bottom-0 w-72 h-72 rounded-full bg-white/10 blur-3xl">
</div>
<div className="pointer-events-none absolute -left-24 -top-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</section>

<section className="fade-in-up pt-24 pb-24 visible" id="contact">
<div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
<blockquote className="relative">
<div className="absolute -top-8 -left-4">
<svg className="text-white/20" fill="none" height="36" viewbox="0 0 48 36" width="48">
<path d="M0 36V18.75C0 11.5 2.5 5.25 7.5 0H18.75C14.5 2.5 11.25 6.25 9 11.25C8.25 13.25 7.75 15.25 7.5 17.25V36H0ZM20.25 36V18.75C20.25 11.5 22.75 5.25 27.75 0H39C34.75 2.5 31.5 6.25 29.25 11.25C28.5 13.25 28 15.25 27.75 17.25V36H20.25Z" fill="currentColor"></path>
</svg>
</div>
<p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 leading-relaxed tracking-tight font-instrument-serif italic">
          Great design happens when creativity meets collaboration.
        </p>
<footer className="mt-6 text-sm text-white/60">
          — Collaboration Mindset
        </footer>
</blockquote>
</div>
</section><section className="section sm:px-8 lg:px-12 pt-24 pr-6 pb-24 pl-6">
<div className="w-full max-w-7xl mr-auto ml-auto">
<section className="z-10 sm:p-8 animate-scaleIn animation-delay-400 bg-zinc-950 w-full max-w-7xl border-white/10 border rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur" style={{}}>

<div className="flex gap-6 sm:px-0 animate-fadeInUp pr-1 pl-1 items-center">
<h2 className="text-4xl font-medium text-white font-geist tracking-tight" style={{}}>Client Testimonials</h2>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-white/10 h-10" role="separator"></span>
<p className="sm:text-base text-sm text-neutral-300 mt-1 font-geist tracking-tight" style={{}}>What clients say about working with me on their design projects.</p>
</div>
<div className="h-px animate-fadeIn animation-delay-100 bg-white/10 mt-4"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 sm:mt-8 mt-6 items-center">

<div className="lg:col-span-12 relative">
<div className="relative overflow-hidden h-[420px] rounded-3xl mt-6">

<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10" style={{}}></div>
<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10" style={{}}></div>

<div className="flex gap-6 overflow-x-auto scroll-smooth pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center" id="testimonial-rail" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-neutral-900/60 border border-white/10 rounded-[24px] p-8 text-white hover-lift backdrop-blur-sm snap-center -rotate-2 shadow-2xl" style={{}}>
<p className="text-lg sm:text-xl md:text-2xl text-white font-geist tracking-tighter" style={{}}>
                "Sourasith transformed our app's UX completely. The user engagement increased by 240% after the redesign."
              </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="text-sm font-geist tracking-tight text-white" style={{}}>Sarah Chen</div>
<div className="text-xs text-neutral-400 font-geist tracking-tight" style={{}}>Product Manager, TechFlow</div>
</div>
</div>
</article>

<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-neutral-900/60 border border-white/10 rounded-[24px] p-8 text-white hover-lift backdrop-blur-sm snap-center rotate-1 shadow-2xl" style={{}}>
<p className="text-lg sm:text-xl md:text-2xl text-white font-geist tracking-tighter" style={{}}>
                "Exceptional design skills and attention to detail. The design system he created streamlined our entire workflow."
              </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="text-sm font-geist tracking-tight text-white" style={{}}>Marcus Rodriguez</div>
<div className="text-xs text-neutral-400 font-geist tracking-tight" style={{}}>Design Lead, InnovateLab</div>
</div>
</div>
</article>

<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-neutral-900/60 border border-white/10 rounded-[24px] p-8 text-white hover-lift backdrop-blur-sm snap-center -rotate-1 shadow-2xl" style={{}}>
<p className="text-lg sm:text-xl md:text-2xl text-white font-geist tracking-tighter" style={{}}>
                "Working with Sourasith was incredible. He understands both user needs and business goals perfectly."
              </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="text-sm font-geist tracking-tight text-white" style={{}}>Emma Thompson</div>
<div className="text-xs text-neutral-400 font-geist tracking-tight" style={{}}>Founder, Digital Ventures</div>
</div>
</div>
</article>

<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-neutral-900/60 border border-white/10 rounded-[24px] p-8 text-white hover-lift backdrop-blur-sm snap-center rotate-2 shadow-2xl" style={{}}>
<p className="text-lg sm:text-xl md:text-2xl text-white font-geist tracking-tighter" style={{}}>
                "His teaching approach is amazing. I learned more in his course than in years of self-study."
              </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-geist tracking-tight text-white" style={{}}>Alex Morgan</div>
<div className="text-xs text-neutral-400 font-geist tracking-tight" style={{}}>Junior Designer, Creative Studios</div>
</div>
</div>
</article>

<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-neutral-900/60 border border-white/10 rounded-[24px] p-8 text-white hover-lift backdrop-blur-sm snap-center -rotate-3 shadow-2xl" style={{}}>
<p className="text-lg sm:text-xl md:text-2xl text-white font-geist tracking-tighter" style={{}}>
                "The prototypes he created helped us secure $2M in funding. His work speaks for itself."
              </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-geist tracking-tight text-white" style={{}}>Priya Patel</div>
<div className="text-xs text-neutral-400 font-geist tracking-tight" style={{}}>CEO, StartupCorp</div>
</div>
</div>
</article>
</div>

<div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
<button aria-label="Previous" className="hover:bg-white/15 transition-colors inline-flex text-white bg-white/10 w-10 h-10 border-white/10 border rounded-full items-center justify-center backdrop-blur" id="testimonial-prev" style={{opacity: '0.5', pointerEvents: 'none'}}>
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Next" className="w-10 h-10 rounded-full text-black bg-white hover:bg-white/90 transition-colors inline-flex items-center justify-center" id="testimonial-next" style={{opacity: '1', pointerEvents: 'auto'}}>
<svg className="lucide lucide-arrow-right w-[24px] h-[20px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '24px', height: '20px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

</section>
</div>
</section><section className="fade-in-up pt-24 pb-24 visible" id="contact">
<div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
<blockquote className="relative">
<div className="absolute -top-8 -left-4">
<svg className="text-white/20" fill="none" height="36" viewbox="0 0 48 36" width="48">
<path className="" d="M0 36V18.75C0 11.5 2.5 5.25 7.5 0H18.75C14.5 2.5 11.25 6.25 9 11.25C8.25 13.25 7.75 15.25 7.5 17.25V36H0ZM20.25 36V18.75C20.25 11.5 22.75 5.25 27.75 0H39C34.75 2.5 31.5 6.25 29.25 11.25C28.5 13.25 28 15.25 27.75 17.25V36H20.25Z" fill="currentColor"></path>
</svg>
</div>
<p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 leading-relaxed tracking-tight font-instrument-serif italic">
          Great design happens when creativity meets collaboration.
        </p>
<footer className="mt-6 text-sm text-white/60">
          — Collaboration Mindset
        </footer>
</blockquote>
</div>
</section>
</main>

<footer className="mt-32 mb-8">
<div className="z-10 sm:p-8 animate-scaleIn animation-delay-600 w-full max-w-7xl border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur space-y-6">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute left-0 bottom-0 w-[60%] h-[80%] rounded-[40%] bg-gradient-to-tr from-white/5 to-transparent blur-3xl">
</div>
</div>


<h2 className="mt-4 text-4xl sm:text-6xl text-white text-center font-sans font-light tracking-tighter animate-fadeInUp animation-delay-200" style={{}}>
    Let's Stay <span className="text-white/90 font-sans font-light tracking-tighter" style={{}}>Connected</span>
</h2>

<p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto text-center font-sans animate-fadeInUp animation-delay-300" style={{}}>Got questions or want to
    collaborate? Feel free to reach out—We're open to new projects or just a casual chat!</p>


<div className="flex animate-fadeInUp animation-delay-500 text-neutral-400 mt-8 gap-x-6 gap-y-6 items-center justify-center" style={{}}>
<a aria-label="X (Twitter)" className="hover:bg-white/5 hover:text-white transition hover:scale-110 duration-200 rounded pt-2 pr-2 pb-2 pl-2" href="#">
<svg className="" fill="none" height="24" viewbox="0 0 25 24" width="25" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.0324 10.0936L21.3178 1.625H19.5914L13.2655 8.9782L8.21307 1.625H2.38567L10.026 12.7443L2.38567 21.625H4.11216L10.7924 13.8598L16.1282 21.625H21.9556L14.032 10.0936H14.0324ZM11.6678 12.8423L10.8936 11.7351L4.73424 2.92468H7.38603L12.3567 10.0349L13.1309 11.1422L19.5922 20.3844H16.9404L11.6678 12.8427V12.8423Z" fill="currentColor"></path>
</svg>
</a>
<span className="h-6 w-px bg-white/10"></span>
<a aria-label="Instagram" className="p-2 rounded hover:bg-white/5 hover:text-white transition hover:scale-110 duration-200" href="#">
<svg className="" fill="none" height="24" viewbox="0 0 25 24" width="25" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M19.7247 22H5.04467C3.57467 22 2.38467 20.81 2.38467 19.34V4.66C2.38467 3.19 3.57467 2 5.04467 2H19.7147C21.1947 2 22.3847 3.19 22.3847 4.66V19.33C22.3847 20.81 21.1947 22 19.7247 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M16.3847 12C16.3847 14.21 14.5947 16 12.3847 16C10.1747 16 8.38467 14.21 8.38467 12C8.38467 9.79 10.1747 8 12.3847 8C14.5947 8 16.3847 9.79 16.3847 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M19.3847 5.5C19.3847 5.78 19.1647 6 18.8847 6C18.6047 6 18.3847 5.78 18.3847 5.5C18.3847 5.22 18.6047 5 18.8847 5C19.1647 5 19.3847 5.22 19.3847 5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
</svg>
</a>
<span className="w-px bg-white/10 h-6"></span>
<a aria-label="Facebook" className="hover:bg-white/5 hover:text-white transition hover:scale-110 duration-200 rounded pt-2 pr-2 pb-2 pl-2" href="https://www.linkedin.com/in/sourasith-phomhome/">
<svg className="" fill="none" height="24" viewbox="0 0 25 24" width="25" xmlns="http://www.w3.org/2000/svg">
<g className="" clipPath="url(#clip0_5602_16557)">
<path className="" d="M19.8878 19.0417H16.9245V14.4C16.9245 13.2933 16.9045 11.8683 15.3828 11.8683C13.8395 11.8683 13.6028 13.075 13.6028 14.3183V19.0417H10.6395V9.49666H13.4845V10.8017H13.5245C14.1045 9.81166 15.1845 9.21833 16.3312 9.26C19.3345 9.26 19.8895 11.235 19.8895 13.8067L19.8878 19.04V19.0417ZM7.29618 8.19166C6.84097 8.18948 6.405 8.00779 6.08296 7.68606C5.76092 7.36433 5.5788 6.92854 5.57618 6.47333C5.57618 5.53 6.35284 4.75333 7.29618 4.75333C8.23951 4.75333 9.01451 5.53 9.01618 6.47333C9.01618 7.41666 8.23951 8.19166 7.29618 8.19166ZM8.77784 19.0417H5.81118V9.49666H8.77784V19.0417ZM21.3628 1.99999H4.32118C3.93476 1.99775 3.56307 2.14809 3.28688 2.41835C3.01069 2.68862 2.85232 3.05695 2.84618 3.44333V20.5567C2.85232 20.943 3.01069 21.3114 3.28688 21.5816C3.56307 21.8519 3.93476 22.0022 4.32118 22H21.3645C21.7518 22.0031 22.1247 21.8533 22.4022 21.583C22.6796 21.3128 22.8392 20.9439 22.8462 20.5567V3.44166C22.8392 3.05471 22.6795 2.68621 22.4019 2.41648C22.1244 2.14674 21.7515 1.99764 21.3645 2.00166L21.3628 1.99999Z" fill="currentColor"></path>
</g>
<defs>
</defs>
</svg>
</a><span className="w-px bg-white/10 h-6"></span><a aria-label="Facebook" className="hover:bg-white/5 hover:text-white transition hover:scale-110 duration-200 rounded pt-2 pr-2 pb-2 pl-2" href="#">
<svg className="" fill="none" height="36" viewbox="0 0 120 36" width="120" xmlns="http://www.w3.org/2000/svg">
<g className="" clipPath="url(#clip0_5582_15132)">
<path className="" d="M108.058 19.1525C108.106 19.0951 108.166 19.0493 108.234 19.0188C108.303 18.9883 108.377 18.9738 108.452 18.9764C108.526 18.9791 108.599 18.9988 108.665 19.0341C108.731 19.0694 108.788 19.1193 108.832 19.18L109.559 20.1751C109.628 20.2679 109.665 20.3805 109.665 20.4961C109.665 20.6118 109.628 20.7243 109.559 20.8171C108.295 22.4572 106.082 24.0271 103.41 24.1799C101.3 24.2992 99.5609 23.5012 98.6147 21.991C98.5733 21.922 98.5154 21.8642 98.4461 21.8231C98.3769 21.782 98.2985 21.7587 98.218 21.7553C98.1375 21.752 98.0574 21.7687 97.985 21.804C97.9126 21.8393 97.8501 21.892 97.8031 21.9574C96.6796 23.4661 95.3207 24.6446 93.9037 24.7256C91.3816 24.8693 90.6693 23.1772 91.293 19.4475C91.3094 19.3645 91.3048 19.2786 91.2796 19.1978C91.2543 19.117 91.2093 19.0437 91.1485 18.9848C91.0877 18.9258 91.0132 18.883 90.9316 18.8603C90.85 18.8375 90.7641 18.8355 90.6816 18.8545C90.1473 18.9999 89.5918 19.0516 89.0399 19.0073C88.9251 18.9971 88.8102 19.0268 88.7147 19.0914C88.6192 19.156 88.5489 19.2516 88.5156 19.3619C87.5817 22.4282 85.3607 25.2805 82.4855 25.4456C80.6512 25.551 77.9075 24.4994 78.1826 20.1048C78.1909 20.0239 78.1794 19.9422 78.1493 19.8666C78.1191 19.791 78.0712 19.7239 78.0094 19.6709C77.9477 19.6179 77.8741 19.5806 77.7949 19.5622C77.7156 19.5438 77.6331 19.5448 77.5544 19.5652C76.9615 19.7494 76.3389 19.8184 75.7201 19.7685C75.6055 19.7584 75.4908 19.7882 75.3956 19.8528C75.3004 19.9174 75.2303 20.0129 75.1973 20.1232C74.2634 23.1894 72.0424 26.0417 69.1672 26.2068C67.3329 26.3123 64.5892 25.2606 64.8643 20.866C64.8726 20.7851 64.8612 20.7034 64.831 20.6278C64.8009 20.5523 64.7529 20.4851 64.6912 20.4321C64.6295 20.3791 64.5559 20.3418 64.4766 20.3234C64.3974 20.305 64.3148 20.3061 64.2361 20.3265C63.6434 20.5113 63.0206 20.5803 62.4018 20.5297C62.2872 20.5196 62.1726 20.5494 62.0773 20.614C61.9821 20.6786 61.9121 20.7741 61.8791 20.8844C60.9467 23.9613 58.7257 26.8106 55.8566 26.9756C54.5512 27.0505 52.7842 26.5385 51.9741 24.6553C51.9414 24.5733 51.8872 24.5017 51.8173 24.4479C51.7473 24.3941 51.6641 24.3602 51.5765 24.3497C51.4889 24.3392 51.4 24.3525 51.3194 24.3883C51.2387 24.4241 51.1691 24.4809 51.1181 24.5529C49.9747 26.1013 48.5929 27.3242 47.1438 27.4082C45.6642 27.4938 44.851 26.8992 44.5025 25.8399C44.4761 25.7558 44.4274 25.6804 44.3618 25.6216C44.2961 25.5628 44.2158 25.5228 44.1293 25.5057C44.0428 25.4887 43.9533 25.4952 43.8703 25.5247C43.7872 25.5542 43.7136 25.6056 43.6572 25.6733C42.6468 26.861 41.4958 27.7323 40.3311 27.798C38.5366 27.902 37.5033 26.5752 37.4177 24.9595C37.3198 23.0794 38.133 20.8767 39.041 18.4738C39.0713 18.3979 39.0832 18.3158 39.0758 18.2344C39.0683 18.1529 39.0418 18.0744 38.9983 18.0051C38.9548 17.9359 38.8956 17.8778 38.8255 17.8358C38.7553 17.7937 38.6762 17.7688 38.5947 17.7631C38.0307 17.7412 37.4689 17.6804 36.9132 17.5812C36.7892 17.5587 36.6613 17.584 36.5552 17.6521C36.4491 17.7202 36.3728 17.8259 36.3416 17.948C35.2716 21.7832 33.6223 25.5419 32.2343 27.7644C32.1996 27.8231 32.1529 27.8738 32.0973 27.9133C32.0417 27.9528 31.9785 27.9802 31.9116 27.9938C31.8448 28.0073 31.7759 28.0067 31.7093 27.9919C31.6427 27.9771 31.58 27.9486 31.5251 27.9081L30.4658 27.1285C30.3603 27.0484 30.2884 26.9318 30.2641 26.8015C30.2398 26.6713 30.2648 26.5366 30.3344 26.4238C32.3398 23.2139 34.1206 18.1819 34.7335 14.4614C34.7504 14.3488 34.8049 14.2452 34.8882 14.1675C34.9715 14.0897 35.0786 14.0425 35.1921 14.0334L36.6014 13.9524C36.6785 13.9501 36.755 13.9651 36.8255 13.9964C36.8959 14.0277 36.9584 14.0744 37.0083 14.1331C37.0582 14.1918 37.0943 14.261 37.1138 14.3356C37.1333 14.4102 37.1358 14.4882 37.1211 14.5638V14.599C37.1078 14.6675 37.1084 14.7379 37.1229 14.8062C37.1374 14.8744 37.1656 14.939 37.2057 14.9961C37.2458 15.0532 37.297 15.1016 37.3563 15.1385C37.4156 15.1753 37.4817 15.1997 37.5506 15.2104C38.8148 15.3846 40.704 15.406 41.9834 15.3556C42.0682 15.3549 42.1518 15.375 42.2269 15.4142C42.3021 15.4534 42.3664 15.5104 42.4143 15.5804C42.4622 15.6503 42.4921 15.7309 42.5015 15.8151C42.5108 15.8994 42.4993 15.9846 42.468 16.0633C41.4393 18.7994 40.0621 22.5902 40.14 24.0913C40.1767 24.7684 40.4748 25.1399 41.0021 25.1093C42.0094 25.0512 43.5579 23.0274 44.7318 20.7728C44.7536 20.7324 44.7695 20.6892 44.7792 20.6444C45.1751 18.8789 45.762 16.9101 46.3551 14.9215L46.3918 14.7977C46.4199 14.6979 46.4782 14.6092 46.5586 14.5438C46.6391 14.4784 46.7378 14.4395 46.8412 14.4324L48.5226 14.3361C48.6053 14.3338 48.6873 14.3515 48.7618 14.3877C48.8362 14.4239 48.9008 14.4774 48.9501 14.5439C48.9995 14.6103 49.0321 14.6876 49.0452 14.7693C49.0583 14.851 49.0515 14.9347 49.0255 15.0132L48.7656 15.8631C47.2799 20.7315 46.0326 24.8204 47.7125 24.7287C48.81 24.666 50.366 22.8027 51.705 20.1507C51.7269 20.1066 51.7428 20.0598 51.7524 20.0116C51.8197 19.6646 51.9053 19.3023 52.0016 18.9232C52.7827 15.8065 53.6662 12.7189 54.5527 9.62659C54.8258 8.67278 55.0984 7.71794 55.3705 6.76209C55.398 6.65958 55.4571 6.56836 55.5394 6.5014C55.6218 6.43443 55.7231 6.39515 55.8291 6.38912L57.5624 6.28977C57.6457 6.28742 57.7284 6.30531 57.8032 6.34192C57.8781 6.37852 57.943 6.43275 57.9923 6.49994C58.0416 6.56713 58.0738 6.64527 58.0863 6.72767C58.0988 6.81007 58.091 6.89426 58.0638 6.97302C57.3714 9.14357 56.6484 11.4563 55.9605 13.6818C55.9261 13.7816 55.9238 13.8895 55.9538 13.9907C55.9837 14.0918 56.0446 14.181 56.1278 14.2459C56.211 14.3107 56.3124 14.3479 56.4178 14.3523C56.5232 14.3567 56.6273 14.328 56.7156 14.2703C57.3753 13.8016 58.1486 13.5181 58.955 13.4495C60.9054 13.3379 62.2322 14.9429 62.359 17.3595C62.359 17.4864 62.3743 17.624 62.3774 17.7646C62.3789 17.8904 62.4263 18.0113 62.5108 18.1045C62.5953 18.1977 62.7109 18.2567 62.8359 18.2705C63.3005 18.3152 63.7692 18.2639 64.2131 18.1199C64.657 17.9758 65.0664 17.7419 65.4161 17.4329C65.4912 17.3654 65.5444 17.2771 65.569 17.1792C66.2874 14.3896 67.0807 11.6198 67.8741 8.84703C68.1461 7.89831 68.4172 6.94857 68.6872 5.99781C68.7147 5.89531 68.7738 5.80408 68.8562 5.73712C68.9385 5.67016 69.0399 5.63087 69.1458 5.62485L70.8777 5.52549C70.961 5.52325 71.0436 5.54119 71.1185 5.57779C71.1933 5.6144 71.2583 5.66857 71.3077 5.7357C71.3571 5.80282 71.3895 5.8809 71.4022 5.96327C71.4149 6.04565 71.4075 6.12987 71.3805 6.20875C70.6881 8.37929 69.9651 10.692 69.2773 12.9176C69.2429 13.0173 69.2405 13.1253 69.2705 13.2264C69.3005 13.3275 69.3613 13.4168 69.4445 13.4816C69.5277 13.5465 69.6291 13.5837 69.7345 13.5881C69.8399 13.5924 69.9441 13.5638 70.0324 13.5061C70.6921 13.0374 71.4654 12.754 72.2717 12.6852C74.2221 12.5736 75.5489 14.1786 75.6773 16.5953C75.6773 16.7221 75.6911 16.8597 75.6956 17.0003C75.6971 17.1261 75.7446 17.247 75.829 17.3402C75.9135 17.4334 76.0292 17.4925 76.1542 17.5063C76.6187 17.5509 77.0875 17.4995 77.5313 17.3554C77.9752 17.2114 78.3847 16.9776 78.7344 16.6686C78.8093 16.601 78.8625 16.5127 78.8873 16.4149C79.6057 13.6253 80.399 10.8555 81.1923 8.08275C81.4644 7.13301 81.7355 6.18277 82.0055 5.23201C82.033 5.1295 82.0921 5.03828 82.1744 4.97132C82.2568 4.90436 82.3581 4.86507 82.4641 4.85904L84.1974 4.75968C84.2807 4.75733 84.3634 4.77523 84.4382 4.81184C84.5131 4.84844 84.578 4.90267 84.6273 4.96986C84.6766 5.03704 84.7088 5.11519 84.7213 5.19759C84.7338 5.27999 84.7261 5.36419 84.6988 5.44295C84.0064 7.61349 83.2834 9.92619 82.5971 12.1518C82.5627 12.2515 82.5603 12.3595 82.5903 12.4606C82.6203 12.5617 82.6811 12.651 82.7643 12.7158C82.8475 12.7807 82.9489 12.8179 83.0543 12.8223C83.1597 12.8266 83.2639 12.798 83.3522 12.7402C84.0118 12.2714 84.7851 11.988 85.5915 11.9194C87.5419 11.8078 88.8687 13.4128 88.9971 15.8294C88.9971 15.9578 89.0109 16.0939 89.0139 16.2345C89.0157 16.3602 89.0633 16.4809 89.1477 16.574C89.2321 16.6672 89.3476 16.7264 89.4725 16.7405C89.9213 16.7835 90.3742 16.7372 90.805 16.6042C91.2358 16.4712 91.636 16.2541 91.9824 15.9655C92.0618 15.8966 92.1179 15.8047 92.1429 15.7026C92.9606 12.5492 94.1621 8.41751 95.3207 4.46315C95.3486 4.36284 95.407 4.27368 95.4878 4.20797C95.5686 4.14226 95.6677 4.10324 95.7716 4.09629L97.4882 3.99694C97.5707 3.99461 97.6525 4.01214 97.7268 4.04804C97.8011 4.08394 97.8657 4.13716 97.9151 4.20323C97.9646 4.2693 97.9974 4.34628 98.0109 4.42768C98.0244 4.50909 98.0181 4.59255 97.9926 4.67103C96.3983 9.96593 95.0975 14.5974 94.3807 17.329C93.4284 21.0357 93.3902 22.1042 94.4739 22.0415C95.391 21.9895 96.6139 20.6979 97.7649 18.7475C97.81 18.6708 97.8353 18.5841 97.8382 18.4952C97.9911 14.5898 100.383 11.0374 103.943 10.8341C106.328 10.6981 107.633 12.4987 107.726 14.2703C107.904 17.653 104.561 19.8144 101.32 19.6203C101.232 19.6169 101.144 19.6363 101.066 19.6766C100.987 19.7169 100.92 19.7768 100.871 19.8505C100.822 19.9242 100.793 20.0092 100.787 20.0974C100.78 20.1856 100.797 20.2739 100.834 20.354C101.293 21.3215 102.24 21.8626 103.867 21.7679C105.414 21.6792 107.036 20.3433 108.058 19.1525ZM54.4931 20.1018C53.7288 23.1848 54.6582 24.3909 55.8688 24.3221C57.8559 24.209 59.7681 20.5756 59.6214 17.7722C59.5557 16.5494 58.8403 15.9105 58.0042 15.9579C56.6086 16.0373 55.1091 17.6423 54.4946 20.1018H54.4931ZM67.8068 19.3375C67.0425 22.419 67.9719 23.6266 69.1825 23.5578C71.1696 23.4447 73.0834 19.8113 72.9366 17.008C72.8724 15.7851 72.1555 15.1462 71.3194 15.1936C69.9193 15.2746 68.4228 16.8796 67.8068 19.339V19.3375ZM81.1205 18.5732C80.3562 21.6563 81.2856 22.8623 82.4962 22.7935C84.4833 22.6804 86.397 19.0471 86.2503 16.2437C86.1861 15.0209 85.4692 14.3819 84.6331 14.4293C83.236 14.5118 81.7365 16.1168 81.122 18.5763L81.1205 18.5732ZM105.192 14.5439C105.18 13.7369 104.683 13.1514 103.879 13.1973C102.297 13.289 101.06 15.001 100.669 17.0767C100.653 17.1521 100.653 17.2302 100.67 17.3053C100.688 17.3804 100.722 17.4508 100.77 17.5111C100.818 17.5714 100.879 17.6203 100.948 17.6541C101.017 17.6879 101.093 17.7058 101.17 17.7065C103.211 17.6591 105.258 16.3186 105.194 14.547L105.192 14.5439ZM31.0482 16.0465C30.8418 9.78862 26.7682 5.65236 20.758 5.87247C18.1763 5.99017 15.2216 6.96844 12.9991 8.72016C12.8975 8.80174 12.8293 8.91754 12.807 9.04587C12.7848 9.17419 12.8101 9.30621 12.8783 9.41718L13.8214 10.9457C13.8579 11.0069 13.9074 11.0594 13.9663 11.0995C14.0252 11.1396 14.0922 11.1663 14.1625 11.1778C14.2328 11.1893 14.3048 11.1853 14.3734 11.1661C14.442 11.1468 14.5056 11.1129 14.5597 11.0665C16.3257 9.62122 18.5042 8.77253 20.7824 8.6422C24.9095 8.47101 27.9315 11.1093 28.1073 16.2055C28.3289 22.1408 24.3394 28.9291 17.9302 29.296C17.707 29.3082 17.4716 29.3128 17.2408 29.3128C17.1627 29.3108 17.0861 29.2912 17.0167 29.2553C16.9474 29.2195 16.887 29.1684 16.8402 29.1058C16.7935 29.0433 16.7615 28.971 16.7466 28.8943C16.7318 28.8177 16.7346 28.7386 16.7547 28.6632C17.9913 23.6725 19.4343 18.321 20.9063 13.341C20.9312 13.2627 20.937 13.1796 20.9232 13.0986C20.9094 13.0176 20.8765 12.941 20.8271 12.8754C20.7777 12.8097 20.7134 12.7568 20.6394 12.721C20.5654 12.6853 20.484 12.6678 20.4018 12.6699L18.5278 12.7769C18.4225 12.7827 18.3216 12.8213 18.2393 12.8874C18.157 12.9535 18.0976 13.0437 18.0693 13.1453C16.6554 18.0367 15.2399 23.3484 13.9666 28.3284C13.9523 28.396 13.924 28.4598 13.8837 28.5158C13.8433 28.5718 13.7917 28.6188 13.7321 28.6537C13.6726 28.6887 13.6064 28.7108 13.5378 28.7188C13.4693 28.7267 13.3998 28.7203 13.3338 28.6999C12.7133 28.4975 12.1142 28.2343 11.5454 27.9142C11.4863 27.8805 11.4208 27.8595 11.3531 27.8525C11.2853 27.8456 11.2169 27.8528 11.1522 27.8738C11.0875 27.8948 11.0278 27.9291 10.9771 27.9745C10.9263 28.0199 10.8856 28.0753 10.8576 28.1373L10.052 29.8188C9.99363 29.938 9.98213 30.0749 10.0198 30.2023C10.0574 30.3296 10.1415 30.4382 10.2553 30.5066C12.0804 31.5414 14.8517 32.133 17.6367 31.974C26.808 31.4482 31.2912 22.9831 31.0482 16.048V16.0465ZM49.0591 8.35637C47.9448 8.42056 46.9558 9.67245 47.0246 10.9931C47.0705 11.8629 47.636 12.4452 48.4966 12.3963C49.6109 12.3321 50.6274 11.0206 50.5617 9.75652C50.5173 8.88677 49.8647 8.31051 49.0606 8.35637H49.0591Z" fill="currentColor"></path>
</g>
<defs>
</defs>
</svg>
</a>
</div>

<p className="animate-fadeInUp animation-delay-600 text-center mt-6">
<a className="underline underline-offset-4 hover:text-white hover:scale-105 inline-block transition-all duration-200 text-sm text-neutral-300" href="/mailto:sourasith@me.studio" style={{}}>sourasith@me.studio</a>
</p>

<div className="h-px animate-fadeIn animation-delay-600 bg-white/5 mt-12"></div>
<div className="flex flex-col sm:flex-row gap-4 text-xs text-neutral-400 gap-x-4 gap-y-4 items-center justify-between" style={{}}>
<div className="flex items-center gap-4">
<span className="">© 2024 Sourasith. All rights reserved.</span>
</div>
<div className="flex items-center gap-4">
<span className="">Designed &amp; Developed with ❤️ in Montreal</span>
</div>
</div>
</div>
</footer>


    </>
  );
}

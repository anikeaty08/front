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
  


    // Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile menu toggle
    const openBtn = document.querySelector('button[aria-label="Open menu"]');
    const closeBtn = document.getElementById('closeMenu');
    const menu = document.getElementById('mobileMenu');

    function toggleMenu(show) {
      if (!menu) return;
      menu.classList.toggle('hidden', !show);
      document.body.style.overflow = show ? 'hidden' : '';
    }
    if (openBtn) openBtn.addEventListener('click', () => toggleMenu(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
    if (menu) menu.addEventListener('click', (e) => { if (e.target === menu) toggleMenu(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggleMenu(false); });

    // Chart
    try {
      const ctx = document.getElementById('velocityChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 12 }, (_, i) => `M${i + 1}`),
            datasets: [{
              data: [6, 9, 8, 12, 13, 12, 15, 17, 16, 19, 21, 22],
              backgroundColor: 'rgba(167, 139, 250, 0.18)',
              borderColor: 'rgba(167, 139, 250, 0.9)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 5
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false }, suggestedMin: 0, suggestedMax: 24 }
            },
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false }
            }
          }
        });
      }
    } catch (e) { console.log('Chart init error', e); }
  
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
      <div className="aura-background-component top-0 -z-10 w-full h-screen absolute"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="inzENTvhzS9plyop7Z6g"></div>

</div></div>

<div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/30 via-neutral-950/60 to-neutral-950"></div>

<header className="relative w-full">
<div className="w-full">
<div className="relative overflow-hidden sm:p-6 md:p-8 pt-4 pr-4 pb-4 pl-4">

<div className="pointer-events-none absolute inset-0 invisible" style={{background: 'radial-gradient(1200px 420px at 10% 0%, rgba(30,30,30,0.9), rgba(23,23,23,0.85) 60%, rgba(10,10,10,0.6) 100%)'}}></div>

<div className="relative z-10 flex max-w-7xl mr-auto ml-auto items-center justify-between">
<a className="inline-flex items-center gap-3" href="/home" id="aura-emfp75vos">
<span className="h-7 w-7 rounded-xl overflow-hidden ring-1 ring-white/20">
<img alt="" className="w-full h-full object-cover invert" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1f71e922-535f-4aaa-8ec1-be337e3db393_320w.jpg"/>
</span>
<span className="text-sm text-white tracking-tight font-geist">Alex Carter</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white transition-colors font-medium font-geist" href="/projects">Projects</a>
<a className="hover:text-white transition-colors font-medium font-geist" href="/services">Services</a>
<a className="hover:text-white transition-colors font-medium font-geist" href="/contact">Contact</a>
<div className="relative inline-block group text-sm rounded-full">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-xs font-semibold text-white/70 tracking-tight rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] items-center justify-center" onclick="window.location.href='/contact'" role="button" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 font-normal rounded-full text-xs">Get in touch</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 rounded-full text-xs" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</nav>
<div className="md:hidden">
<button aria-label="Open menu" className="inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/20 bg-white/10 text-white hover:bg-white/15">
<svg className="lucide lucide-menu" fill="none" height="20" style={{stroke: 'currentColor', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</button>
</div>
</div>

<section className="relative z-10 sm:px-6 lg:px-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 text-center max-w-7xl mt-8 mr-auto ml-auto pr-4 pl-4">
<style>
    @keyframes fadeInSlide {
      0% {
        opacity: 0;
        transform: translateY(20px);
        filter: blur(8px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0px);
      }
    }

    @keyframes slideInFromLeft {
      0% {
        opacity: 0;
        transform: translateX(-30px);
        filter: blur(6px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
        filter: blur(0px);
      }
    }

    @keyframes slideInFromRight {
      0% {
        opacity: 0;
        transform: translateX(30px);
        filter: blur(6px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
        filter: blur(0px);
      }
    }

    @keyframes scaleBlurIn {
      0% {
        opacity: 0;
        transform: scale(0.9);
        filter: blur(10px);
      }
      100% {
        opacity: 1;
        transform: scale(1);
        filter: blur(0px);
      }
    }

    .animate-hero-element {
      opacity: 0;
      animation-fill-mode: forwards;
    }

    .animate-profile-pic {
      animation: slideInFromLeft 0.8s ease-out 0.2s forwards;
    }

    .animate-word-hey {
      animation: fadeInSlide 0.6s ease-out 0.4s forwards;
    }

    .animate-word-im {
      animation: fadeInSlide 0.6s ease-out 0.6s forwards;
    }

    .animate-word-alex {
      animation: fadeInSlide 0.6s ease-out 0.8s forwards;
    }

    .animate-title-coding {
      animation: scaleBlurIn 0.8s ease-out 1.2s forwards;
    }

    .animate-title-consultant {
      animation: scaleBlurIn 0.8s ease-out 1.4s forwards;
    }

    .animate-gallery-1 {
      animation: slideInFromRight 0.7s ease-out 1.8s forwards;
    }

    .animate-gallery-2 {
      animation: slideInFromRight 0.7s ease-out 2.0s forwards;
    }

    .animate-description {
      animation: fadeInSlide 0.8s ease-out 2.4s forwards;
    }

    .animate-cta-1 {
      animation: slideInFromLeft 0.7s ease-out 2.8s forwards;
    }

    .animate-cta-2 {
      animation: slideInFromRight 0.7s ease-out 3.0s forwards;
    }
  </style>
<div className="inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
<span className="overflow-hidden w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ring-white/20 ring-1 rounded-xl sm:rounded-2xl shadow animate-hero-element animate-profile-pic">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/87f2e020-31e0-48b2-ab03-7ee0c17b3572_320w.jpg"/>
</span>
<h1 className="sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-3xl font-medium text-white tracking-tighter font-geist">
<span className="animate-hero-element animate-word-hey">Hey,</span>
<span className="animate-hero-element animate-word-im">I'm</span>
<span className="animate-hero-element animate-word-alex">Alex</span>
</h1>
</div>
<div className="inline-flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 items-center justify-center">
<h2 className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] sm:leading-[1.05] text-4xl font-medium text-white tracking-tighter font-geist">
<span className="animate-hero-element animate-title-coding">Coding</span>
<span className="animate-hero-element animate-title-consultant">Consultant</span>
</h2>
<span className="hidden sm:inline-flex items-center gap-1 sm:gap-2 h-full">
<span className="overflow-hidden w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 ring-white/20 ring-1 rounded-xl sm:rounded-2xl shadow animate-hero-element animate-gallery-1">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a6bf4caa-826f-4f8e-a0f5-1b90d5644e4f_320w.jpg"/>
</span>
<span className="overflow-hidden ring-white/20 ring-1 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl shadow animate-hero-element animate-gallery-2">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_320w.jpg"/>
</span>
</span>
</div>
<p className="sm:text-base md:text-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl sm:mt-4 md:mt-6 sm:px-4 text-sm text-neutral-300 font-geist text-center max-w-xs mt-3 mr-auto ml-auto pr-2 pl-2 animate-hero-element animate-description">
    I help teams ship better products through design engineering, developer experience, and frontend architecture.
  </p>

<div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 sm:mt-8 md:mt-10 sm:px-0 mt-6 pr-4 pl-4 items-center justify-center">
<a className="styled-button inline-flex items-center justify-center transition sm:text-base sm:w-auto animate-hero-element animate-cta-1 text-sm font-medium text-white font-geist w-full" href="/projects" style={{position: 'relative', padding: '0.75rem 1.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#ffffff', background: 'linear-gradient(to bottom, #171717, #242424)', borderRadius: '9999px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.4)', transition: 'all 0.2s ease', border: '1px solid #292929'}}>
<style>
        .styled-button::before {
          content: "";
          position: absolute;
          top: -2px;
          right: -1px;
          bottom: -1px;
          left: -1px;
          background: linear-gradient(to bottom, #292929, #000000);
          z-index: -1;
          border-radius: 9999px;
          transition: all 0.2s ease;
          opacity: 1;
        }
        .styled-button:hover {
          background: linear-gradient(to bottom, #1a1a1a, #2a2a2a);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 1), 0 15px 30px rgba(0, 0, 0, 0.6);
        }
        .styled-button:hover::before {
          background: linear-gradient(to bottom, #3a3a3a, #1a1a1a);
        }
        .styled-button:hover .inner-button {
          background: linear-gradient(to bottom, #1d1d1d, #303030);
        }
        .styled-button:hover .inner-button::before {
          background: linear-gradient(to bottom, #3a3a3a, #1a1a1a);
        }
        .styled-button .inner-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to bottom, #171717, #242424);
          width: 32px;
          height: 32px;
          margin-left: 8px;
          border-radius: 50%;
          box-shadow: 0 0 1px rgba(0, 0, 0, 1);
          border: 1px solid #252525;
          transition: all 0.2s ease;
        }
        .styled-button .inner-button::before {
          content: "";
          position: absolute;
          top: -2px;
          right: -1px;
          bottom: -1px;
          left: -1px;
          background: linear-gradient(to bottom, #292929, #000000);
          z-index: -1;
          border-radius: 9999px;
          transition: all 0.2s ease;
          opacity: 1;
        }
        .styled-button .inner-button .icon {
          filter: drop-shadow(0 10px 20px rgba(26, 25, 25, 0.9)) drop-shadow(0 0 4px rgba(0, 0, 0, 1));
          transition: all 0.4s ease-in-out;
        }
        .styled-button .inner-button .icon:hover {
          filter: drop-shadow(0 10px 20px rgba(50, 50, 50, 1)) drop-shadow(0 0 20px rgba(2, 2, 2, 1));
          transform: rotate(-35deg);
        }
        .styled-button:hover .inner-button::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 60%);
          border-radius: 50%;
          pointer-events: none;
        }
      </style>
      View Work
      <div className="inner-button">
<svg className="lucide lucide-arrow-up-right icon lucide-briefcase w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white transition sm:text-base sm:px-6 sm:py-3 sm:w-auto animate-hero-element animate-cta-2 text-sm font-medium text-white/70 font-geist bg-white/5 w-full h-14 ring-white/10 ring-1 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm backdrop-blur" href="/contact">
      Book a Call
    </a>
</div>
</section>

</div>
</div>
</header>

<section className="relative z-10 sm:mt-24 mt-20 mb-20">
<div className="text-center mb-8 max-w-7xl mx-auto">
<p className="text-sm text-neutral-400 mb-2 font-geist">Recent Projects</p>
<h3 className="sm:text-3xl text-2xl font-normal text-white tracking-tighter font-geist">Building products that matter</h3>
</div>
<div className="relative overflow-hidden py-4 group">
<style>
            @keyframes marquee {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
            }
        </style>
<div className="absolute inset-y-0 left-0 w-24 md:w-48 z-10 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 md:w-48 z-10 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none"></div>
<div className="flex gap-4 px-2" style={{animation: 'marquee 60s linear infinite', animationPlayState: 'running'}}>

<div className="relative aspect-square w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Dashboard Design" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f60cb04d-11d0-4cc7-941b-2d6c15a14f36_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">Analytics Dashboard</p>
<p className="text-white/70 text-xs font-geist">React • TypeScript</p>
</div>
</div>
<div className="relative aspect-square w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Mobile App" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f75cabb2-4c26-4ee7-8e0a-ed4dd02838ae_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">Mobile Banking</p>
<p className="text-white/70 text-xs font-geist">React Native • API</p>
</div>
</div>
<div className="relative aspect-square w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="E-commerce" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/52d57fce-8e18-473e-b20d-26a32d001f8e_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">E-commerce Platform</p>
<p className="text-white/70 text-xs font-geist">Next.js • Stripe</p>
</div>
</div>
<div className="relative aspect-square w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Data Visualization" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/472d582d-a6f3-45d7-a6e8-c3a32f605acc_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">Data Visualization</p>
<p className="text-white/70 text-xs font-geist">D3.js • WebGL</p>
</div>
</div>

<div aria-hidden="true" className="relative aspect-square w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Dashboard Design" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f60cb04d-11d0-4cc7-941b-2d6c15a14f36_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">Analytics Dashboard</p>
<p className="text-white/70 text-xs font-geist">React • TypeScript</p>
</div>
</div>
<div aria-hidden="true" className="relative aspect-square w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Mobile App" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f75cabb2-4c26-4ee7-8e0a-ed4dd02838ae_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">Mobile Banking</p>
<p className="text-white/70 text-xs font-geist">React Native • API</p>
</div>
</div>
<div aria-hidden="true" className="relative aspect-square w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="E-commerce" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/52d57fce-8e18-473e-b20d-26a32d001f8e_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">E-commerce Platform</p>
<p className="text-white/70 text-xs font-geist">Next.js • Stripe</p>
</div>
</div>
<div aria-hidden="true" className="relative aspect-square w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Data Visualization" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/472d582d-a6f3-45d7-a6e8-c3a32f605acc_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">Data Visualization</p>
<p className="text-white/70 text-xs font-geist">D3.js • WebGL</p>
</div>
</div>
</div>
</div>
<div className="text-center max-w-7xl mt-8 mr-auto ml-auto">
<a className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-geist" href="#services">
          View all projects
          <svg className="lucide lucide-arrow-right" height="16" style={{stroke: 'currentColor', strokeWidth: '1.5', fill: 'none'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section><section className="sm:p-8 max-w-7xl mt-24 mr-auto mb-24 ml-auto pr-4 pl-4">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900/60 border border-white/10">
<div className="relative grid grid-cols-1 lg:grid-cols-2">

<div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center min-h-[520px]">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-white/90 font-geist w-max">
<span className="h-2 w-2 rounded-full bg-white/80"></span>
          Available for projects
        </span>
<h2 className="sm:text-6xl lg:text-7xl leading-[1.05] text-5xl font-medium text-white tracking-tight font-geist mt-6">
          Your trusted partner for exceptional software development
        </h2>
<p className="mt-4 sm:mt-6 text-sm sm:text-base text-neutral-300 max-w-[48ch] font-geist">
          VIBE delivers expert coding solutions, creating scalable and performant applications with cutting-edge technology.
        </p>
<div className="mt-8">
<a className="inline-flex items-center justify-between gap-3 hover:bg-white/10 transition-colors text-sm text-white font-geist bg-white/5 h-12 ring-white/10 ring-1 rounded-full pr-2 pl-5" href="/services">
            Start your project
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white text-neutral-900">
<svg className="lucide lucide-arrow-up-right" height="16" style={{stroke: 'currentColor', strokeWidth: '1.8', fill: 'none'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17 17 7"></path><path d="M7 7h10v10"></path>
</svg>
</span>
</a>
</div>
</div>

<div className="relative overflow-hidden rounded-none lg:rounded-l-none lg:rounded-r-3xl">
<img alt="Modern software development workspace with code on multiple monitors" className="aspect-[4/5] lg:aspect-auto w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/08789e3b-6419-426d-b545-c4af828ed7a7_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section aria-labelledby="about-title" className="relative z-10 sm:px-6 lg:px-8 max-w-7xl mt-20 mr-auto mb-20 ml-auto pt-20 pr-4 pb-20 pl-4">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
<div className="space-y-3">
<span className="inline-flex w-max items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/90 ring-1 ring-white/10 font-geist">Our Approach</span>
<h2 className="sm:text-5xl md:text-6xl text-4xl font-medium text-white tracking-tight font-geist">
        Design Engineering Excellence
      </h2>
</div>
<p className="sm:text-lg text-base text-neutral-300 font-geist max-w-[85ch]">
      We craft beautiful, performant digital experiences that bridge design and technology. 
      Our team combines creative vision with technical expertise to deliver products that users love and developers trust—built for scale, optimized for performance.
    </p>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
<div className="relative aspect-square overflow-hidden ring-white/10 ring-1 rounded-xl">
<img alt="Frontend Development" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6739d5c9-2ec9-43c0-94be-ec961704a2e0_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">Frontend Architecture</p>
<p className="text-white/70 text-xs font-geist">React • Next.js • TypeScript</p>
</div>
</div>
<div className="relative aspect-square overflow-hidden ring-white/10 ring-1 rounded-xl">
<img alt="Design Systems" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3393b787-4136-4ac8-915d-4b7a5185821d_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">Design Systems</p>
<p className="text-white/70 text-xs font-geist">Component Libraries • Figma</p>
</div>
</div>
<div className="relative aspect-square overflow-hidden ring-white/10 ring-1 rounded-xl">
<img alt="Performance Optimization" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/31acf2d9-1bfb-4a1c-8b2c-708955038c1c_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">Performance Optimization</p>
<p className="text-white/70 text-xs font-geist">Core Web Vitals • Lighthouse</p>
</div>
</div>
<div className="relative aspect-square overflow-hidden ring-white/10 ring-1 rounded-xl">
<img alt="Analytics &amp; Testing" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-sm font-medium font-geist">Analytics &amp; Testing</p>
<p className="text-white/70 text-xs font-geist">A/B Testing • User Analytics</p>
</div>
</div>
</div>


<div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10 sm:mt-14">
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-medium">5+</p>
<p className="text-sm text-neutral-200 font-geist">Years of expertise</p>
<p className="text-xs text-neutral-400 font-geist">Proven track record in design engineering</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-medium">150+</p>
<p className="text-sm text-neutral-200 font-geist">Projects delivered</p>
<p className="text-xs text-neutral-400 font-geist">From startups to enterprise solutions</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-medium">20+</p>
<p className="text-sm text-neutral-200 font-geist">Tech stack mastery</p>
<p className="text-xs text-neutral-400 font-geist">Modern frameworks and cutting-edge tools</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-medium">98%</p>
<p className="text-sm text-neutral-200 font-geist">Client satisfaction</p>
<p className="text-xs text-neutral-400 font-geist">Excellence in delivery and communication</p>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 sm:mt-24 lg:mt-32 sm:mb-24 lg:mb-32 sm:pt-12 lg:pt-16 sm:pr-6 sm:pb-12 lg:pb-16 sm:pl-6 mt-16 mr-auto mb-16 ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="relative overflow-hidden sm:p-8 lg:p-12 bg-neutral-900 max-w-7xl ring-white/10 ring-1 rounded-2xl sm:rounded-3xl mx-auto pt-6 sm:pt-8 pr-4 sm:pr-8 pb-6 sm:pb-8 pl-4 sm:pl-8">
<div className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12">
<div className="text-center sm:text-left">
<p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-neutral-400 font-geist">Method</p>
<h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight sm:tracking-tighter font-geist font-medium">A practical path to shipping</h2>
</div>
<p className="text-sm sm:text-base lg:text-lg text-neutral-300 max-w-full sm:max-w-[42ch] font-geist text-center sm:text-left mx-auto sm:mx-0">
        Small surface area, rapid feedback, and clear tradeoffs—so we always know what's next and why.
      </p>
</div>

<div className="mb-12 sm:mb-16">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
<div className="text-center">
<div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
<div className="text-2xl sm:text-3xl font-medium text-emerald-400 mb-2 font-geist">01</div>
<h3 className="text-base sm:text-lg font-medium text-white mb-2 font-geist">Strategy</h3>
<p className="text-xs sm:text-sm text-neutral-400 font-geist">Define goals, scope, and success metrics</p>
</div>
</div>
<div className="text-center">
<div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
<div className="text-2xl sm:text-3xl font-medium text-indigo-400 mb-2 font-geist">02</div>
<h3 className="text-base sm:text-lg font-medium text-white mb-2 font-geist">Execution</h3>
<p className="text-xs sm:text-sm text-neutral-400 font-geist">Build with precision and continuous feedback</p>
</div>
</div>
<div className="text-center">
<div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
<div className="text-2xl sm:text-3xl font-medium text-emerald-400 mb-2 font-geist">03</div>
<h3 className="text-base sm:text-lg font-medium text-white mb-2 font-geist">Delivery</h3>
<p className="text-xs sm:text-sm text-neutral-400 font-geist">Launch, monitor, and iterate for success</p>
</div>
</div>
</div>
</div>

<div className="mt-6 sm:mt-8">
<h3 className="text-lg sm:text-xl font-medium text-white font-geist mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">Development Timeline</h3>

<div className="sm:hidden space-y-6">
<div className="flex items-start gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-500/50 bg-neutral-800 flex-shrink-0">
<img alt="Discovery phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6739d5c9-2ec9-43c0-94be-ec961704a2e0_800w.jpg"/>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[10px] text-neutral-300 mb-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              DISCOVERY
            </div>
<p className="text-sm text-neutral-400 mb-2 font-geist">Research &amp; planning phase with stakeholder alignment</p>
<div className="text-xs text-neutral-500 font-geist">1-2 weeks</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-500/50 bg-neutral-800 flex-shrink-0">
<img alt="Architecture phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3393b787-4136-4ac8-915d-4b7a5185821d_800w.jpg"/>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[10px] text-neutral-300 mb-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              ARCHITECTURE
            </div>
<p className="text-sm text-neutral-400 mb-2 font-geist">System design &amp; technical foundation</p>
<div className="text-xs text-neutral-500 font-geist">1-2 weeks</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-indigo-400/50 bg-neutral-800 flex-shrink-0">
<img alt="Build phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/31acf2d9-1bfb-4a1c-8b2c-708955038c1c_800w.jpg"/>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[10px] text-neutral-300 mb-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
              BUILD
            </div>
<p className="text-sm text-neutral-400 mb-2 font-geist">Active development with iterative feedback</p>
<div className="text-xs text-neutral-500 font-geist">4-8 weeks</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-neutral-600/50 bg-neutral-700 flex-shrink-0">
<img alt="QA phase" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_800w.jpg"/>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[10px] text-neutral-300 mb-2">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-600"></span>
              QA
            </div>
<p className="text-sm text-neutral-400 mb-2 font-geist">Testing &amp; quality assurance</p>
<div className="text-xs text-neutral-500 font-geist">1-2 weeks</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-neutral-600/50 bg-neutral-700 flex-shrink-0">
<img alt="Launch phase" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f60cb04d-11d0-4cc7-941b-2d6c15a14f36_800w.jpg"/>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[10px] text-neutral-300 mb-2">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-600"></span>
              LAUNCH
            </div>
<p className="text-sm text-neutral-400 mb-2 font-geist">Deployment &amp; go-live support</p>
<div className="text-xs text-neutral-500 font-geist">1 week</div>
</div>
</div>
</div>

<div className="hidden sm:block relative">
<div className="absolute top-6 sm:top-8 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/15 to-white/0"></div>
<div className="grid grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
<div className="flex flex-col gap-3 sm:gap-4 font-geist text-center items-center">
<div className="relative">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 sm:ring-3 ring-emerald-500/50 bg-neutral-800">
<img alt="Discovery phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6739d5c9-2ec9-43c0-94be-ec961704a2e0_800w.jpg"/>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-neutral-300">
<span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500"></span>
              DISCOVERY
            </div>
<p className="leading-relaxed text-xs sm:text-sm text-neutral-400 px-1 sm:px-2 font-geist">Research &amp; planning phase with stakeholder alignment</p>
<div className="text-xs text-neutral-500 font-geist">1-2 weeks</div>
</div>
<div className="flex flex-col items-center gap-3 sm:gap-4 font-geist text-center">
<div className="relative">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 sm:ring-3 ring-emerald-500/50 bg-neutral-800">
<img alt="Architecture phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3393b787-4136-4ac8-915d-4b7a5185821d_800w.jpg"/>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-neutral-300">
<span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500"></span>
              ARCHITECTURE
            </div>
<p className="leading-relaxed text-xs sm:text-sm text-neutral-400 px-1 sm:px-2 font-geist">System design &amp; technical foundation</p>
<div className="text-xs text-neutral-500 font-geist">1-2 weeks</div>
</div>
<div className="flex flex-col items-center gap-3 sm:gap-4 font-geist text-center">
<div className="relative">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 sm:ring-3 ring-indigo-400/50 bg-neutral-800">
<img alt="Build phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/31acf2d9-1bfb-4a1c-8b2c-708955038c1c_800w.jpg"/>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-neutral-300">
<span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-indigo-400"></span>
              BUILD
            </div>
<p className="leading-relaxed text-xs sm:text-sm text-neutral-400 px-1 sm:px-2 font-geist">Active development with iterative feedback</p>
<div className="text-xs text-neutral-500 font-geist">4-8 weeks</div>
</div>
<div className="flex flex-col items-center gap-3 sm:gap-4 font-geist text-center">
<div className="relative">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 sm:ring-3 ring-neutral-600/50 bg-neutral-700">
<img alt="QA phase" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_800w.jpg"/>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-neutral-300">
<span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-neutral-600"></span>
              QA
            </div>
<p className="leading-relaxed text-xs sm:text-sm text-neutral-400 px-1 sm:px-2 font-geist">Testing &amp; quality assurance</p>
<div className="text-xs text-neutral-500 font-geist">1-2 weeks</div>
</div>
<div className="flex flex-col items-center gap-3 sm:gap-4 font-geist text-center">
<div className="relative">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 sm:ring-3 ring-neutral-600/50 bg-neutral-700">
<img alt="Launch phase" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f60cb04d-11d0-4cc7-941b-2d6c15a14f36_800w.jpg"/>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-neutral-300">
<span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-neutral-600"></span>
              LAUNCH
            </div>
<p className="leading-relaxed text-xs sm:text-sm text-neutral-400 px-1 sm:px-2 font-geist">Deployment &amp; go-live support</p>
<div className="text-xs text-neutral-500 font-geist">1 week</div>
</div>
</div>
</div>
</div>

<div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-white/10">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
<div className="text-center">
<div className="text-xl sm:text-2xl font-medium text-emerald-400 mb-1 font-geist">40%</div>
<div className="text-xs text-neutral-400 font-geist">Faster delivery</div>
</div>
<div className="text-center">
<div className="text-xl sm:text-2xl font-medium text-indigo-400 mb-1 font-geist">95%</div>
<div className="text-xs text-neutral-400 font-geist">Performance score</div>
</div>
<div className="text-center">
<div className="text-xl sm:text-2xl font-medium text-emerald-400 mb-1 font-geist">60%</div>
<div className="text-xs text-neutral-400 font-geist">Reduced bugs</div>
</div>
<div className="text-center">
<div className="text-xl sm:text-2xl font-medium text-indigo-400 mb-1 font-geist">24h</div>
<div className="text-xs text-neutral-400 font-geist">Response time</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-24 pl-4">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
<div className="relative grid grid-cols-1 lg:grid-cols-2">
<div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
<p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-geist">Partner up</p>
<h2 className="mt-2 text-3xl sm:text-4xl text-white tracking-tighter font-geist font-medium">Let’s build what’s next</h2>
<p className="mt-3 text-sm text-neutral-300 font-geist">Tell me about your goals, timeline, and constraints. I’ll reply within 24 hours.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-3 text-neutral-200 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Senior-only execution
            </li>
<li className="flex items-center gap-3 text-neutral-200 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Sprint or retainer
            </li>
<li className="flex items-center gap-3 text-neutral-200 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              From idea to launch
            </li>
</ul>
</div>
<form action="#" aria-label="Contact form" className="p-6 sm:p-10 space-y-4" method="post">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-neutral-300 font-geist">Name</span>
<input className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" name="name" placeholder="Jane Doe" required="" type="text"/>
</label>
<label className="block">
<span className="text-sm text-neutral-300 font-geist">Email</span>
<input className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" name="email" placeholder="jane@company.com" required="" type="email"/>
</label>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-sm text-neutral-300 font-geist">Company</span>
<input className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" name="company" placeholder="Acme Inc." type="text"/>
</label>
<label className="block">
<span className="text-sm text-neutral-300 font-geist">Budget</span>
<select className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" name="budget">
<option className="bg-neutral-900 font-geist" value="">Select a range</option>
<option className="bg-neutral-900 font-geist">$10k–$25k</option>
<option className="bg-neutral-900 font-geist">$25k–$60k</option>
<option className="bg-neutral-900 font-geist">$60k+</option>
</select>
</label>
</div>
<label className="block">
<span className="text-sm text-neutral-300 font-geist">Project details</span>
<textarea className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" name="message" placeholder="What are you building? What outcomes matter?" required="" rows="4"></textarea>
</label>
<label className="mt-2 inline-flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-white/20 bg-neutral-900 text-emerald-500 focus:ring-emerald-500/50" required="" type="checkbox"/>
<span className="text-xs text-neutral-400 font-geist">I agree to the processing of my information in line with the privacy policy.</span>
</label>
<div className="pt-2">
<div className="relative inline-block group text-sm rounded-full">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-xs font-semibold text-white/70 tracking-tight rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] items-center justify-center" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 text-xs font-normal rounded-full">Request intro</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 rounded-full text-xs" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</form>
</div>
</div>
</section>

<footer className="sm:p-8 bg-neutral-900/50 border border-neutral-800 rounded-3xl mx-4 mt-4 mb-10 p-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
<div className="">
<h3 className="text-3xl sm:text-4xl text-neutral-100 tracking-tighter font-geist font-medium" style={{}}>
          Ready to level up your product and developer experience?
          <span className="underline decoration-neutral-600 underline-offset-4 font-geist font-medium" style={{}}>Let’s get started</span>.
        </h3>
<div className="mt-6 flex items-center gap-3">
<div className="h-10 w-10 flex bg-cover border border-neutral-700 rounded-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/57ff8f09-a1ef-4c2d-a129-c6e65a08af58_320w.jpg)] bg-center"></div>
<div>
<p className="text-sm font-medium tracking-tight text-neutral-100 font-geist">Alex “Vibe” Carter</p>
<p className="text-xs text-neutral-500 font-geist">Coding Consultant</p>
</div>
</div>
<div className="mt-8 space-y-2">
<p className="text-sm text-neutral-400 font-geist">support@vibecode.dev</p>
<a className="inline-flex items-center gap-3 text-2xl sm:text-3xl text-neutral-100 underline decoration-neutral-600 underline-offset-4 font-geist font-medium" href="mailto:hello@vibecode.dev" style={{}}>
<span className="inline-flex h-7 w-7 items-center justify-center text-neutral-900 bg-neutral-100 rounded-full">
<svg className="lucide lucide-plus" height="14" style={{stroke: 'currentColor', strokeWidth: '1.5', fill: 'none'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
</span>
            hello@vibecode.dev
          </a>
</div>
</div>
<div className="">
<h4 className="text-2xl sm:text-3xl text-neutral-100 tracking-tighter font-geist font-medium" style={{}}>Stay Updated</h4>
<form className="mt-6 space-y-6">
<div className="">
<input className="w-full bg-transparent border-b border-neutral-700 focus:border-neutral-400 outline-none py-3 text-sm text-neutral-100 placeholder-neutral-500" placeholder="Your name *" type="text"/>
</div>
<div className="">
<input className="w-full bg-transparent border-b border-neutral-700 focus:border-neutral-400 outline-none py-3 text-sm text-neutral-100 placeholder-neutral-500" placeholder="Email *" type="email"/>
</div>
<div className="flex items-center gap-4">
<button className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-neutral-100 text-neutral-900 text-sm font-normal hover:bg-neutral-200 transition font-geist" type="submit">
              Subscribe
              <span className="inline-flex h-2 w-2 rounded-full bg-neutral-900"></span>
</button>
<p className="text-sm text-neutral-500 font-geist">Weekly notes on shipping, DX, and system design.</p>
</div>
</form>
<div className="grid grid-cols-2 gap-8 mt-10">
<div>
<p className="text-xs text-neutral-500 font-geist">Quick Links</p>
<ul className="mt-3 space-y-2">
<li><a className="text-lg font-medium tracking-tight text-neutral-100 hover:underline underline-offset-4 font-geist" href="#work">Work</a></li>
<li><a className="text-lg font-medium tracking-tight text-neutral-100 hover:underline underline-offset-4 font-geist" href="#services">Services</a></li>
<li><a className="text-lg font-medium tracking-tight text-neutral-100 hover:underline underline-offset-4 font-geist" href="#approach">Approach</a></li>
<li><a className="text-lg font-medium tracking-tight text-neutral-100 hover:underline underline-offset-4 font-geist" href="#contact">Contact</a></li>
</ul>
</div>
<div className="">
<p className="text-xs text-neutral-500 font-geist">Connect</p>
<ul className="mt-3 space-y-2">
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-neutral-100 hover:underline underline-offset-4 font-geist" href="#">
                  GitHub
                  <svg className="lucide lucide-external-link" height="14" style={{stroke: 'currentColor', strokeWidth: '1.5', fill: 'none'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6"></path><path d="m10 14 9-9"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
</svg>
</a>
</li>
<li>
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-neutral-100 hover:underline underline-offset-4 font-geist" href="#">
                  LinkedIn
                  <svg className="lucide lucide-external-link" height="14" style={{stroke: 'currentColor', strokeWidth: '1.5', fill: 'none'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6"></path><path d="m10 14 9-9"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
</svg>
</a>
</li>
<li className="">
<a className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-neutral-100 hover:underline underline-offset-4 font-geist" href="#">
                  Twitter
                  <svg className="lucide lucide-external-link" height="14" style={{stroke: 'currentColor', strokeWidth: '1.5', fill: 'none'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6"></path><path d="m10 14 9-9"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
</svg>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-[36px] h-[36px] md:w-14 md:h-14" style={{strokeWidth: '2'}} viewbox="0 0 48 48">
<path d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
</svg>
<span className="text-sm font-medium tracking-tight font-geist">VIBE</span>
</div>
<p className="text-xs text-neutral-500 font-geist">© <span className="font-geist" id="year">2025</span> VIBE — All rights reserved</p>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="mobileMenu">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative ml-auto h-full w-[85%] max-w-sm bg-neutral-950 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<span className="text-white font-semibold font-geist">VIBE</span>
<button aria-label="Close menu" className="inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/10 bg-white/10 text-white hover:bg-white/15" id="closeMenu">
<svg className="lucide lucide-x" height="20" style={{stroke: 'currentColor', strokeWidth: '1.5', fill: 'none'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<nav className="mt-6 flex flex-col gap-2 text-base">
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="#work">Work</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="#services">Services</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="#approach">Approach</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="#contact">Contact</a>
</nav>
<div className="mt-6">
<a className="inline-flex items-center justify-center w-full text-sm text-white bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-600 rounded-full h-11 px-6 ring-1 ring-emerald-400/30 font-geist" href="#contact">
          Get Started
        </a>
</div>
</div>
</div>



    </>
  );
}

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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      !function () {
        if (!window.UnicornStudio) {
          window.UnicornStudio = { isInitialized: !1 };
          var i = document.createElement("script");
          i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
          i.onload = function () {
            window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
          },
          (document.head || document.body).appendChild(i)
        }
      }();
    


        (function() {
          const container = document.querySelector('.guest-story-slide').parentElement;
          const slides = document.querySelectorAll('.guest-story-slide');
          const prev = document.getElementById('story-prev');
          const next = document.getElementById('story-next');
          let idx = 0;
          const total = slides.length;

          function update() {
            slides.forEach((s, i) => {
              if (i === idx) {
                s.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
                s.classList.add('opacity-100', 'z-10', 'relative');
                s.classList.remove('absolute');
              } else {
                s.classList.remove('opacity-100', 'z-10', 'relative');
                s.classList.add('opacity-0', 'pointer-events-none', 'z-0', 'absolute');
              }
            });
          }

          next.addEventListener('click', () => {
            idx = (idx + 1) % total;
            update();
          });

          prev.addEventListener('click', () => {
            idx = (idx - 1 + total) % total;
            update();
          });
        })();
      


    // Mobile Menu Logic
    const menuBtn = document.getElementById('open-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    function toggleMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');

        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.remove('opacity-0');
            }, 10);
            body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('opacity-0');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
            body.style.overflow = '';
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: `linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)`, webkitMaskImage: `linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)`}}><div className="fixed inset-0 -z-10 bg-black">
<div className="aura-background-component absolute inset-0 w-full h-full" data-alpha-mask="80" style={{/* Fade from solid to transparent near bottom */
      WebkitMaskImage: `linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%)`, maskImage: `linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%)`, webkitMaskRepeat: `no-repeat`, maskRepeat: `no-repeat`, webkitMaskSize: `100% 100%`, maskSize: `100% 100%`}}>
<div className="absolute inset-0 w-full h-full bg-neutral-950" data-us-project="XxCmD31vVBmiINgvYCho">
</div>

</div>
</div></div>

<div className="max-w-[1600px] mx-auto min-h-screen bg-[#0E0F11] relative overflow-hidden">

<div className="fixed inset-0 bg-[#0E0F11]/95 backdrop-blur-xl z-[100] hidden opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-[#F5F5F5]" id="close-menu-btn">
<svg aria-hidden="true" data-icon="lucide:x" data-stroke-width="1.5" data-width="32" height="32" role="img" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<nav className="flex flex-col gap-8 text-center text-3xl font-heading font-medium tracking-tight text-[#F5F5F5]">
<a className="hover:text-[#D6FF4F] transition-colors" href="#">Projects</a>
<a className="hover:text-[#D6FF4F] transition-colors" href="#">Services</a>
<a className="hover:text-[#D6FF4F] transition-colors" href="#">Studio</a>
<a className="hover:text-[#D6FF4F] transition-colors" href="#">Insights</a>
</nav>
<div className="mt-12 flex gap-6">
<a className="text-xs font-sans uppercase tracking-widest text-[#A1A1A6] hover:text-[#F5F5F5] border-b border-[#23252B] pb-1" href="#">Start a Project</a>
</div>
</div>

<div className="fixed flex bg-[#000006] z-50 pt-6 top-0 right-0 left-0 justify-center">
<nav className="flex shadow-black/50 bg-[#000006]/80 w-full max-w-[1500px] border-[#23252B] border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-2xl backdrop-blur-md items-center justify-between">

<div className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium text-[#F5F5F5] hover:text-[#D6FF4F] transition-colors" href="#">Projects</a>
<a className="text-sm font-medium text-[#A1A1A6] hover:text-[#F5F5F5] transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-[#A1A1A6] hover:text-[#F5F5F5] transition-colors" href="#">Insights</a>
</div>

<button className="md:hidden p-1 text-[#F5F5F5]" id="open-menu-btn">
<svg aria-hidden="true" data-icon="lucide:menu" data-stroke-width="1.5" data-width="24" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<div className="absolute left-1/2 -translate-x-1/2">
<a className="flex items-center gap-2" href="#">
<div className="w-3 h-3 bg-[#D6FF4F] rounded-full"></div>
<span className="text-lg tracking-tight font-heading font-semibold text-[#F5F5F5] uppercase">
              STUDIO
            </span>
</a>
</div>

<div className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium text-[#A1A1A6] hover:text-[#F5F5F5] transition-colors" href="#">About</a>
<a className="bg-[#F5F5F5] hover:bg-[#D6FF4F] text-[#0E0F11] px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors" href="#">
            Contact
          </a>
</div>

<a className="md:hidden p-1 text-[#F5F5F5]" href="#">
<svg aria-hidden="true" data-icon="lucide:mail" data-stroke-width="1.5" data-width="24" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</a>
</nav>
</div>
<main className="bg-[#000006] w-full mt-24">

<div className="md:px-8 md:pt-12 md:pb-12 bg-[#000006] max-w-[1550px] mx-auto pt-10 pb-10">
<h1 className="text-[14vw] md:text-[11vw] leading-[0.85] font-heading font-medium text-[#F5F5F5] tracking-tight text-center w-full mb-8 sm:mb-12 break-words">
          Visual<br /><span className="text-[#23252B] stroke-text">Language</span>
</h1>
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8 text-sm sm:text-base text-[#A1A1A6] mb-8 md:px-4">
<p className="leading-relaxed max-w-xs sm:max-w-sm">
<span className="block text-[#F5F5F5]">Digital-first branding agency.</span>
<span className="block">Crafting identities for future-tech leaders.</span>
</p>
<p className="leading-relaxed text-left sm:text-right max-w-xs sm:max-w-sm">
<span className="block text-[#F5F5F5]">We build systems, not just pages.</span>
<span className="block">London based, globally connected.</span>
</p>
</div>

<div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] overflow-hidden group rounded-[2.5rem] border border-[#23252B] bg-[#15171B]">
<div className="absolute inset-0 w-full h-full" id="hero-slideshow">
<img alt="Abstract 3D Design" className="hero-slide absolute inset-0 w-full h-full object-cover opacity-80" src="/assets/68c70ed3-3617-478c-b904-4a86ef50ff12_3840w.webp" style={{transition: `outline 0.1s ease-in-out`}} />
<img alt="Liquid Metal" className="hero-slide absolute inset-0 w-full h-full object-cover opacity-80" src="/assets/feda1066-8c70-434c-9899-9f49ec90da32_3840w.webp" style={{}} />
<img alt="Dark Architecture" className="hero-slide opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="/assets/0a460363-bc5b-4b38-8915-07bc183dc66b_3840w.png" />
</div>
<div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10">
<button className="bg-[#D6FF4F] text-[#0E0F11] pl-6 pr-2 py-2 rounded-full flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:bg-[#F5F5F5] transition-all hover:pr-6 hover:pl-6 duration-300">
              View Showreel
              <div className="w-8 h-8 bg-[#0E0F11] rounded-full flex items-center justify-center text-[#D6FF4F]">
<svg aria-hidden="true" data-icon="lucide:play" data-stroke-width="3" data-width="12" height="12" role="img" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</button>
</div>
</div>
</div>

<div className="md:px-8 bg-[#000006] max-w-[1550px] mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-8">
<div className="">
<span className="text-[10px] font-mono text-[#D6FF4F] block mb-4 border-b border-[#23252B] w-fit pb-1 tracking-widest">
              01 — EXPERTISE
            </span>
<h2 className="text-3xl md:text-5xl text-[#F5F5F5] font-heading font-medium tracking-tight leading-tight">
              Core Capabilities
            </h2>
<a className="mt-8 inline-flex items-center gap-3 bg-[#23252B] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#F5F5F5] transition-colors hover:bg-[#D6FF4F] hover:text-[#0E0F11]" href="#">
              All Services
              <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<p className="leading-relaxed text-[#A1A1A6] max-w-sm md:text-right">
<span className="block">Holistic design systems for brands</span>
<span className="block">ready to define their category.</span>
</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-[#23252B] bg-[#15171B]" href="#">
<img className="opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 w-full h-full object-cover" src="/assets/46281a5c-f67e-419c-9644-02c7d3b25deb_800w.webp" style={{}} />
<div className="bg-center bg-[url(/assets/f8b428da-9ed3-47c6-9392-c6b7f5e466dc_800w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="text-[10px] font-sans uppercase tracking-widest text-[#D6FF4F] mb-1 block">
                Category
              </span>
<h3 className="text-xl md:text-2xl font-heading font-medium text-[#F5F5F5]">
                Branding
              </h3>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-[#23252B] bg-[#15171B]" href="#">
<img className="opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 w-full h-full object-cover" src="/assets/bde9069b-1960-4868-9138-c74f2a623acd_800w.webp" style={{}} />
<div className="bg-[url(/assets/49c51142-771e-4d9e-87c8-58472375cdc6_800w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="text-[10px] font-sans uppercase tracking-widest text-[#D6FF4F] mb-1 block">
                Category
              </span>
<h3 className="text-xl md:text-2xl font-heading font-medium text-[#F5F5F5]">
                Product
              </h3>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-[#23252B] bg-[#15171B]" href="#">
<img className="opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 w-full h-full object-cover" src="/assets/039a9170-346c-47e5-8218-e281b3d525dd_800w.webp" />
<div className="bg-center bg-[url(/assets/6a0da6d9-39eb-45e0-8f25-70e05f4ce244_800w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="text-[10px] font-sans uppercase tracking-widest text-[#D6FF4F] mb-1 block">
                Category
              </span>
<h3 className="text-xl md:text-2xl font-heading font-medium text-[#F5F5F5]">
                Motion
              </h3>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-[#23252B] bg-[#15171B]" href="#">
<img className="opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 w-full h-full object-cover" src="/assets/981546c5-4246-4dec-90f8-8fba1e9dd71d_800w.webp" />
<div className="bg-center bg-[url(/assets/6796dd95-e78d-4408-a398-e3926294042f_800w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<span className="text-[10px] font-sans uppercase tracking-widest text-[#D6FF4F] mb-1 block">
                Category
              </span>
<h3 className="text-xl md:text-2xl font-heading font-medium text-[#F5F5F5]">
                Web
              </h3>
</div>
</a>
</div>
</div>

<div className="sticky md:px-8 z-40 mb-8 pt-4 pr-4 pb-4 pl-4 top-24">
<div className="max-w-[1550px] mx-auto">
<div className="flex flex-col md:flex-row bg-[#15171B]/90 border-[#23252B] border rounded-3xl pt-2 pr-2 pb-2 pl-2 shadow-xl backdrop-blur-xl gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center px-4 w-full md:w-auto">
<span className="text-sm font-heading font-medium text-[#F5F5F5] whitespace-nowrap mr-4">
                Filter Projects
              </span>
</div>
<div className="flex flex-col sm:flex-row w-full gap-2 md:contents">

<div className="flex items-center bg-[#0E0F11] rounded-full px-4 py-2 gap-3 w-full sm:w-auto md:w-auto border border-[#23252B] focus-within:border-[#D6FF4F] transition-colors">
<svg aria-hidden="true" data-icon="lucide:layers" data-width="14" height="14" role="img" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<input className="bg-transparent border-none text-xs font-medium text-[#F5F5F5] placeholder-[#52525B] focus:outline-none w-full sm:w-28 uppercase tracking-wide" placeholder="Discipline" type="text" />
</div>

<div className="flex items-center bg-[#0E0F11] rounded-full px-4 py-2 gap-3 w-full sm:w-auto md:w-auto border border-[#23252B] focus-within:border-[#D6FF4F] transition-colors">
<svg aria-hidden="true" data-icon="lucide:clock" data-width="14" height="14" role="img" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<input className="bg-transparent border-none text-xs font-medium text-[#F5F5F5] placeholder-[#52525B] focus:outline-none w-full sm:w-28 uppercase tracking-wide" placeholder="Timeline" type="text" />
</div>

<div className="flex items-center bg-[#0E0F11] rounded-full px-4 py-2 gap-3 w-full sm:w-auto md:w-auto border border-[#23252B] focus-within:border-[#D6FF4F] transition-colors">
<svg aria-hidden="true" data-icon="lucide:wallet" data-width="14" height="14" role="img" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
<input className="bg-transparent border-none text-xs font-medium text-[#F5F5F5] placeholder-[#52525B] focus:outline-none w-full sm:w-28 uppercase tracking-wide" placeholder="Budget" type="text" />
</div>
<button className="px-6 py-2 bg-[#D6FF4F] text-[#0E0F11] rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#F5F5F5] transition-colors w-full md:w-auto">
                Search
              </button>
</div>
</div>
</div>
</div>

<div className="border-t border-[#23252B] bg-[#0E0F11]">
<div className="max-w-[1550px] mx-auto grid grid-cols-1 md:grid-cols-12">

<div className="flex flex-col md:col-span-3 md:p-8 md:border-r md:min-h-[600px] bg-[#000006] h-auto border-[#23252B] px-6 py-6 justify-between">
<div className="md:sticky md:top-48">
<span className="text-[10px] font-mono text-[#D6FF4F] block mb-4 border-b border-[#23252B] w-fit pb-1 tracking-widest">
                02 — WORK
              </span>
<h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-[0.95] mb-6 text-[#F5F5F5]">
                Selected Case Studies
              </h2>
<p className="text-sm text-[#A1A1A6] leading-relaxed max-w-[240px]">
                A curation of our most recent work defining brands across fintech, lifestyle, and culture.
              </p>
<div className="mt-12 w-full h-px bg-[#23252B] hidden md:block"></div>
</div>
<div className="mt-8 md:mt-0">
<button className="w-full bg-[#15171B] border border-[#23252B] rounded-full text-[#F5F5F5] px-6 py-4 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-widest hover:border-[#D6FF4F] hover:text-[#D6FF4F] transition-colors group">
                View Archive
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#23252B]">

<div className="group cursor-pointer bg-[#0E0F11] p-6 hover:bg-[#15171B] transition-colors">
<div className="relative aspect-[4/3] bg-[#15171B] rounded-2xl overflow-hidden mb-5 border border-[#23252B]">
<img className="opacity-80 group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="/assets/c55b9091-b0ca-4842-92d7-7be239f76440_800w.webp" />
<div className="absolute top-3 right-3 bg-[#0E0F11]/80 backdrop-blur border border-[#23252B] px-3 py-1 rounded-full text-[10px] font-medium text-[#F5F5F5] uppercase tracking-wider">
                  Featured
                </div>
</div>
<div className="flex justify-between items-start mb-2">
<div className="">
<h3 className="text-lg font-heading font-medium text-[#F5F5F5] tracking-tight">
                    Nexus Protocol
                  </h3>
<p className="uppercase text-[10px] text-[#A1A1A6] tracking-widest">
                    Fintech / Web3
                  </p>
</div>
</div>
<div className="flex justify-between items-center text-xs text-[#52525B] mt-4 pt-4 border-t border-[#23252B]">
<span className="font-medium text-[#A1A1A6]">4 Weeks</span>
<span className="text-[#F5F5F5] font-medium">$50k — $80k</span>
</div>
</div>

<div className="group cursor-pointer bg-[#0E0F11] p-6 hover:bg-[#15171B] transition-colors">
<div className="relative aspect-[4/3] bg-[#15171B] rounded-2xl overflow-hidden mb-5 border border-[#23252B]">
<img className="opacity-80 group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="/assets/d3d4d588-f8cc-4129-8a9b-d0f004d15ab4_800w.webp" />
</div>
<div className="flex justify-between items-start mb-2">
<div className="">
<h3 className="text-lg font-heading font-medium text-[#F5F5F5] tracking-tight">
                    Aether Labs
                  </h3>
<p className="uppercase text-[10px] text-[#A1A1A6] tracking-widest">
                    AI Research
                  </p>
</div>
</div>
<div className="flex justify-between items-center text-xs text-[#52525B] mt-4 pt-4 border-t border-[#23252B]">
<span className="font-medium text-[#A1A1A6]">8 Weeks</span>
<span className="text-[#F5F5F5] font-medium">$100k+</span>
</div>
</div>

<div className="group cursor-pointer bg-[#0E0F11] p-6 hover:bg-[#15171B] transition-colors">
<div className="relative aspect-[4/3] bg-[#15171B] rounded-2xl overflow-hidden mb-5 border border-[#23252B]">
<img className="opacity-80 group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="/assets/3d80181f-00cd-4e1e-9a4b-d2a9c4811268_800w.webp" style={{}} />
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-heading font-medium text-[#F5F5F5] tracking-tight">
                    Mono Objects
                  </h3>
<p className="uppercase text-[10px] text-[#A1A1A6] tracking-widest">
                    E-Commerce
                  </p>
</div>
</div>
<div className="flex justify-between items-center text-xs text-[#52525B] mt-4 pt-4 border-t border-[#23252B]">
<span className="font-medium text-[#A1A1A6]">6 Weeks</span>
<span className="text-[#F5F5F5] font-medium">$30k — $50k</span>
</div>
</div>

<div className="group cursor-pointer bg-[#0E0F11] p-6 hover:bg-[#15171B] transition-colors">
<div className="relative aspect-[4/3] bg-[#15171B] rounded-2xl overflow-hidden mb-5 border border-[#23252B]">
<img className="opacity-80 group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="/assets/ce5b89c0-9457-4f7b-8448-33b0e21f643a_800w.webp" />
<div className="absolute top-3 right-3 bg-[#0E0F11]/80 backdrop-blur border border-[#23252B] px-3 py-1 rounded-full text-[10px] font-medium text-[#F5F5F5] uppercase tracking-wider">
                  Awarded
                </div>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-heading font-medium text-[#F5F5F5] tracking-tight">
                    Lumina
                  </h3>
<p className="uppercase text-[10px] text-[#A1A1A6] tracking-widest">
                    SaaS Platform
                  </p>
</div>
</div>
<div className="flex justify-between items-center text-xs text-[#52525B] mt-4 pt-4 border-t border-[#23252B]">
<span className="font-medium text-[#A1A1A6]">12 Weeks</span>
<span className="text-[#F5F5F5] font-medium">$80k — $120k</span>
</div>
</div>

<div className="group cursor-pointer bg-[#0E0F11] p-6 hover:bg-[#15171B] transition-colors">
<div className="relative aspect-[4/3] bg-[#15171B] rounded-2xl overflow-hidden mb-5 border border-[#23252B]">
<img className="opacity-80 group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="/assets/809511d8-3f42-4b75-a11a-ae6515af0d22_800w.webp" />
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-heading font-medium text-[#F5F5F5] tracking-tight">
                    Carbon
                  </h3>
<p className="uppercase text-[10px] text-[#A1A1A6] tracking-widest">
                    Sustainability
                  </p>
</div>
</div>
<div className="flex justify-between items-center text-xs text-[#52525B] mt-4 pt-4 border-t border-[#23252B]">
<span className="font-medium text-[#A1A1A6]">5 Weeks</span>
<span className="text-[#F5F5F5] font-medium">$40k — $60k</span>
</div>
</div>

<div className="group cursor-pointer bg-[#0E0F11] p-6 hover:bg-[#15171B] transition-colors">
<div className="relative aspect-[4/3] bg-[#15171B] rounded-2xl overflow-hidden mb-5 border border-[#23252B]">
<img className="opacity-80 group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-heading font-medium text-[#F5F5F5] tracking-tight">
                    Vanguard
                  </h3>
<p className="uppercase text-[10px] text-[#A1A1A6] tracking-widest">
                    Architecture
                  </p>
</div>
</div>
<div className="flex justify-between items-center text-xs text-[#52525B] mt-4 pt-4 border-t border-[#23252B]">
<span className="font-medium text-[#A1A1A6]">10 Weeks</span>
<span className="text-[#F5F5F5] font-medium">$90k+</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#000006] border-[#23252B] border-t px-6 py-24">
<div className="max-w-5xl mx-auto text-center">
<span className="block text-[10px] text-[#D6FF4F] font-mono w-fit border-b border-[#23252B] mx-auto mb-8 pb-1 tracking-widest">
            03 — METHODOLOGY
          </span>
<h2 className="text-4xl md:text-5xl font-medium font-heading text-[#F5F5F5] tracking-tight mb-16">
            Precision in Process
          </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-[28px] left-0 right-0 h-px border-t border-dashed border-[#23252B] z-0"></div>
<div className="flex flex-col items-center gap-4 relative z-10 group">
<div className="w-14 h-14 rounded-full bg-[#15171B] border border-[#23252B] flex items-center justify-center text-[#A1A1A6] group-hover:text-[#D6FF4F] group-hover:border-[#D6FF4F] transition-all">
<svg aria-hidden="true" data-icon="lucide:telescope" data-width="24" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m10.065 12.493l-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44m-2.875 6.493l4.332-.924M16 21l-3.105-6.21"></path><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455zM6.158 8.633l1.114 4.456M8 21l3.105-6.21"></path><circle cx="12" cy="13" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-heading font-medium text-[#F5F5F5]">Strategy</h3>
<p className="text-[#A1A1A6] text-sm leading-relaxed max-w-[240px]">
<span className="block">Deep dive discovery.</span>
<span className="block">Positioning and market analysis.</span>
</p>
</div>
<div className="flex flex-col items-center gap-4 relative z-10 group">
<div className="w-14 h-14 rounded-full bg-[#15171B] border border-[#23252B] flex items-center justify-center text-[#A1A1A6] group-hover:text-[#D6FF4F] group-hover:border-[#D6FF4F] transition-all">
<svg aria-hidden="true" data-icon="lucide:pen-tool" data-width="24" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-heading font-medium text-[#F5F5F5]">Design</h3>
<p className="text-[#A1A1A6] text-sm leading-relaxed max-w-[240px]">
<span className="block">Iterative visual exploration.</span>
<span className="block">Systematized UI/UX craft.</span>
</p>
</div>
<div className="flex flex-col items-center gap-4 relative z-10 group">
<div className="w-14 h-14 rounded-full bg-[#15171B] border border-[#23252B] flex items-center justify-center text-[#A1A1A6] group-hover:text-[#D6FF4F] group-hover:border-[#D6FF4F] transition-all">
<svg aria-hidden="true" data-icon="lucide:code-2" data-width="24" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-heading font-medium text-[#F5F5F5]">Develop</h3>
<p className="text-[#A1A1A6] text-sm leading-relaxed max-w-[240px]">
<span className="block">Pixel-perfect implementation.</span>
<span className="block">Scalable, clean code.</span>
</p>
</div>
</div>
</div>
</div>

<div className="border-t border-[#23252B] max-w-[1550px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="flex flex-col lg:col-span-5 md:p-16 lg:border-r bg-[#000006] border-[#23252B] px-8 py-8 justify-center">
<div className="max-w-lg">
<span className="text-[10px] font-mono text-[#D6FF4F] block mb-6 border-b border-[#23252B] w-fit pb-1 tracking-widest">
                04 — STUDIO PHILOSOPHY
              </span>
<h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-8 text-[#F5F5F5]">
                The Studio Standard
              </h2>
<p className="text-lg text-[#A1A1A6] mb-12 leading-relaxed">
                We believe in design that serves a function. No fluff, no templates. Just rigorous attention to detail and a commitment to future-proof aesthetics.
              </p>
<div className="space-y-10">
<div className="flex gap-5 group">
<div className="shrink-0 text-[#23252B] group-hover:text-[#D6FF4F] transition-colors mt-1">
<svg aria-hidden="true" data-icon="lucide:scan-face" data-width="24" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m5-3s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-sm font-bold font-sans uppercase tracking-widest text-[#F5F5F5] mb-2">
                      User Centric
                    </h3>
<p className="text-sm text-[#A1A1A6] leading-relaxed">
                      Every pixel is placed with intent. We design for the human on the other side of the screen.
                    </p>
</div>
</div>
<div className="flex gap-5 group">
<div className="shrink-0 text-[#23252B] group-hover:text-[#D6FF4F] transition-colors mt-1">
<svg aria-hidden="true" data-icon="lucide:diamond" data-width="24" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="text-sm font-bold font-sans uppercase tracking-widest text-[#F5F5F5] mb-2">
                      Pixel Perfection
                    </h3>
<p className="text-sm text-[#A1A1A6] leading-relaxed">
                      We obsess over the details that others miss. Typography, spacing, and micro-interactions.
                    </p>
</div>
</div>
<div className="flex gap-5 group">
<div className="shrink-0 text-[#23252B] group-hover:text-[#D6FF4F] transition-colors mt-1">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="24" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="text-sm font-bold font-sans uppercase tracking-widest text-[#F5F5F5] mb-2">
                      Performance First
                    </h3>
<p className="leading-relaxed text-sm text-[#A1A1A6]" style={{}}>Beauty means nothing if it doesn't load instantly. We optimize for speed and efficiency.</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#23252B]">
<div className="relative overflow-hidden group h-[400px] sm:h-auto bg-[#15171B]">
<img className="group-hover:scale-105 transition-transform duration-700 opacity-60 w-full h-full object-cover" src="/assets/a795a8d9-4bac-4f56-b06c-0cfaba3dbc9a_1600w.webp" />
<div className="absolute bottom-6 left-6 bg-[#0E0F11]/80 backdrop-blur px-4 py-2 rounded-full text-[10px] text-[#F5F5F5] font-mono border border-[#23252B]">
                Fig. 01 — Workspace
              </div>
</div>
<div className="grid grid-rows-2 gap-px">
<div className="relative overflow-hidden group h-[300px] sm:h-auto bg-[#15171B]">
<img className="group-hover:scale-105 transition-transform duration-700 opacity-60 w-full h-full object-cover" src="/assets/b9fdfc28-8272-467a-b305-f09454abb35a_1600w.webp" style={{transition: `outline 0.1s ease-in-out`, outline: `rgb(245, 158, 11) solid 2px`, outlineOffset: `2px`}} />
<div className="absolute bottom-6 left-6 bg-[#0E0F11]/80 backdrop-blur px-4 py-2 rounded-full text-[10px] text-[#F5F5F5] font-mono border border-[#23252B]">
                  Fig. 02 — Materials
                </div>
</div>
<div className="relative overflow-hidden group h-[300px] sm:h-auto bg-[#15171B]">
<img className="group-hover:scale-105 transition-transform duration-700 opacity-60 w-full h-full object-cover" src="/assets/3a6e12d2-345b-4681-a0ae-d817646753f8_1600w.webp" style={{transition: `outline 0.1s ease-in-out`}} />
<div className="absolute bottom-6 left-6 bg-[#0E0F11]/80 backdrop-blur px-4 py-2 rounded-full text-[10px] text-[#F5F5F5] font-mono border border-[#23252B]">
                  Fig. 03 — Output
                </div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#15171B] border-t border-[#23252B] py-20 px-4 md:px-8">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col text-center pb-12 items-center justify-center">
<span className="block text-[10px] text-[#D6FF4F] font-mono w-fit border-b border-[#23252B] mb-4 pb-1 tracking-widest">
              05 — CLIENT VOICES
            </span>
</div>
<div className="relative min-h-[500px]">

<div className="guest-story-slide transition-opacity duration-500 ease-in-out opacity-100 z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#0E0F11] rounded-[2rem] border border-[#23252B] p-6 md:p-12">
<div className="md:col-span-5 h-full">
<div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#23252B] relative h-full">
<img className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500" src="/assets/3e6a3c0b-6b9e-4eb4-8fe1-9182d0819de9_1600w.webp" />
</div>
</div>
<div className="md:col-span-7 flex flex-col justify-center">
<div className="mb-8">
<svg aria-hidden="true" data-icon="lucide:quote" data-width="32" height="32" role="img" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<blockquote className="text-2xl md:text-4xl font-heading font-medium leading-tight text-[#F5F5F5] mb-8">
                  "They didn't just redesign our website; they reimagined how we communicate as a brand."
                </blockquote>
<div>
<div className="text-[#F5F5F5] font-semibold text-lg">Alex Chen</div>
<div className="text-[#A1A1A6] text-sm uppercase tracking-widest mt-1">CTO, Nexus Protocol</div>
</div>
</div>
</div>

<div className="guest-story-slide absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out opacity-0 pointer-events-none z-0 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#0E0F11] rounded-[2rem] border border-[#23252B] p-6 md:p-12">
<div className="md:col-span-5 h-full">
<div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#23252B] relative h-full">
<img className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500" src="/assets/f23d6400-b168-45c4-9907-f18dab7fda64_1600w.webp" />
</div>
</div>
<div className="md:col-span-7 flex flex-col justify-center">
<div className="mb-8">
<svg aria-hidden="true" data-icon="lucide:quote" data-width="32" height="32" role="img" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<blockquote className="text-2xl md:text-4xl font-heading font-medium leading-tight text-[#F5F5F5] mb-8">
                  "The attention to detail is unmatched. Our conversion rates doubled within a month of launch."
                </blockquote>
<div>
<div className="text-[#F5F5F5] font-semibold text-lg">Sarah Jenkins</div>
<div className="text-[#A1A1A6] text-sm uppercase tracking-widest mt-1">CMO, Lumina SaaS</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-4 mt-8">
<button className="w-12 h-12 rounded-full border border-[#23252B] bg-[#0E0F11] flex items-center justify-center text-[#A1A1A6] hover:text-[#0E0F11] hover:bg-[#D6FF4F] transition-all" id="story-prev">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-width="20" height="20" role="img" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-[#23252B] bg-[#0E0F11] flex items-center justify-center text-[#A1A1A6] hover:text-[#0E0F11] hover:bg-[#D6FF4F] transition-all" id="story-next">
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>


<footer className="bg-[#0E0F11] text-[#F5F5F5] pt-20 pb-10 border-t border-[#23252B] mt-24">
<div className="w-full text-center text-[10px] uppercase tracking-[0.3em] text-[#A1A1A6]/50 mb-16 font-sans select-none">
          Design for the digital age
        </div>
<div className="max-w-[1550px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-[#23252B] pb-16">

<div className="md:col-span-4 pr-0 md:pr-12">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-2 h-2 bg-[#D6FF4F] rounded-full"></div>
<span className="text-xl tracking-tight font-heading font-semibold uppercase">
                STUDIO
              </span>
</a>
<p className="leading-relaxed text-[#A1A1A6] max-w-sm mb-8 text-sm">
              We help ambitious companies build future-proof brands and digital products that stand the test of time.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-[#23252B] flex items-center justify-center hover:bg-[#F5F5F5] hover:text-[#0E0F11] transition-colors text-[#A1A1A6]" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="w-10 h-10 rounded-full border border-[#23252B] flex items-center justify-center hover:bg-[#F5F5F5] hover:text-[#0E0F11] transition-colors text-[#A1A1A6]" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border border-[#23252B] flex items-center justify-center hover:bg-[#F5F5F5] hover:text-[#0E0F11] transition-colors text-[#A1A1A6]" href="#">
<svg aria-hidden="true" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>

<div className="grid grid-cols-2 gap-8 md:contents">
<div className="md:col-span-2">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#52525B] mb-6 font-sans">
                Sitemap
              </h4>
<ul className="space-y-4 text-sm text-[#A1A1A6]">
<li><a className="hover:text-[#D6FF4F] transition-colors" href="#">Projects</a></li>
<li><a className="hover:text-[#D6FF4F] transition-colors" href="#">Services</a></li>
<li><a className="hover:text-[#D6FF4F] transition-colors" href="#">Studio</a></li>
<li><a className="hover:text-[#D6FF4F] transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#52525B] mb-6 font-sans">
                Socials
              </h4>
<ul className="space-y-4 text-sm text-[#A1A1A6]">
<li><a className="hover:text-[#D6FF4F] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[#D6FF4F] transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-[#D6FF4F] transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-[#D6FF4F] transition-colors" href="#">Dribbble</a></li>
</ul>
</div>
</div>

<div className="md:col-span-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#52525B] mb-6 font-sans">
              New Business
            </h4>
<p className="text-[#A1A1A6] text-sm mb-6">
              Currently accepting new projects for Q3 2024. Let's build something great.
            </p>
<a className="text-2xl md:text-3xl font-heading font-medium text-[#F5F5F5] hover:text-[#D6FF4F] transition-colors underline decoration-[#23252B] underline-offset-8 decoration-1" href="mailto:hello@studio.com">
              hello@studio.com
            </a>
</div>
</div>
<div className="max-w-[1550px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#52525B] font-sans tracking-wide uppercase">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-[#F5F5F5]" href="#">Privacy</a>
<a className="hover:text-[#F5F5F5]" href="#">Terms</a>
</div>
<span>© 2025 Studio Inc.</span>
</div>
</footer>
</main>
</div>


    </>
  );
}

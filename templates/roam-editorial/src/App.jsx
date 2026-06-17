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
                  const container = document.currentScript.parentElement;
                  const slides = container.querySelectorAll('.guest-story-slide');
                  const prev = container.querySelector('#story-prev');
                  const next = container.querySelector('#story-next');
                  let idx = 0;
                  const total = slides.length;

                  function update() {
                    slides.forEach((s, i) => {
                      if (i === idx) {
                        s.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
                        s.classList.add('opacity-100', 'z-10');
                      } else {
                        s.classList.remove('opacity-100', 'z-10');
                        s.classList.add('opacity-0', 'pointer-events-none', 'z-0');
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
              // Open Menu
              mobileMenu.classList.remove('hidden');
              setTimeout(() => {
                  mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
              }, 10);
              body.classList.add('menu-open');
          } else {
              // Close Menu
              mobileMenu.classList.add('opacity-0', 'pointer-events-none');
              setTimeout(() => {
                  mobileMenu.classList.add('hidden');
              }, 300);
              body.classList.remove('menu-open');
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
      

<div className="max-w-[1600px] mx-auto border-x border-[#C7D0C8] min-h-screen bg-[#F1F4F1] relative">

<div className="fixed inset-0 bg-[#F1F4F1] z-[100] hidden opacity-0 pointer-events-none flex flex-col items-center justify-center" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-[#2C2A26]" id="close-menu-btn">
<svg aria-hidden="true" data-icon="lucide:x" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<nav className="flex flex-col gap-8 text-center text-3xl font-medium italic">
<a className="hover:text-[#5F6F65] transition-colors" href="#">Stays</a>
<a className="hover:text-[#5F6F65] transition-colors" href="#">
            Experiences
          </a>
<a className="hover:text-[#5F6F65] transition-colors" href="#">Online</a>
<a className="hover:text-[#5F6F65] transition-colors" href="#">Journal</a>
</nav>
<div className="mt-12 flex gap-6">
<a className="text-sm font-sans uppercase tracking-widest border-b border-[#1F2D26] pb-1" href="#">
            Host
          </a>
<a className="text-sm font-sans uppercase tracking-widest border-b border-[#1F2D26] pb-1" href="#">
            Login
          </a>
</div>
</div>

<nav className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between text-base font-medium tracking-tight border-b border-[#C7D0C8] bg-[#F1F4F1]/95 backdrop-blur-sm">

<div className="hidden md:flex gap-8">
<a className="hover:text-[#5F6F65] transition-colors italic" href="#">
            Stays
          </a>
<a className="hover:text-[#8C867D] transition-colors italic" href="#">
            Experiences
          </a>
<a className="hover:text-[#8C867D] transition-colors italic" href="#">
            Journal
          </a>
</div>

<button className="md:hidden p-1" id="open-menu-btn">
<svg aria-hidden="true" className="" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>

<div className="absolute left-1/2 -translate-x-1/2">
<a className="flex items-center gap-2" href="#">
<span className="text-xl tracking-tight font-semibold uppercase">
              ROAM
            </span>
</a>
</div>

<div className="hidden md:flex gap-8">
<a className="hover:text-[#8C867D] transition-colors italic" href="#">
            Become a Host
          </a>
<a className="hover:text-[#8C867D] transition-colors italic" href="#">
            Login
          </a>
</div>

<a className="md:hidden p-1 relative" href="#">
<svg aria-hidden="true" className="" data-icon="lucide:user" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</g>
</svg>
</a>
</nav>
<main className="w-full">

<div className="border-[#C7D0C8] border-b pt-10 pr-4 pb-10 pl-4 md:px-6 md:pt-12 md:pb-12">
<h1 className="text-[18vw] sm:text-[16vw] md:text-[14rem] leading-[0.8] md:text-left break-words font-medium text-[#1F2D26] tracking-tight text-center w-full mb-8 sm:mb-10">
    Elsewhere
  </h1>
<div className="flex flex-col sm:flex-row sm:items-start md:flex-row md:items-start text-base sm:text-lg text-[#5F6F65] mb-6 sm:mb-8 pr-1 pl-1 items-start sm:items-end justify-between gap-6 sm:gap-8">
<p className="leading-snug italic max-w-xs sm:max-w-sm">
<span className="block">Find your next great adventure.</span>
<span className="block">Discover cabins, estates, and homes.</span>
</p>
<p className="leading-snug md:mt-0 italic text-left sm:text-right max-w-xs sm:max-w-sm mt-0 sm:mt-0">
<span className="block">Curated stays for those who</span>
<span className="block">travel with intention.</span>
</p>
</div>
<div className="relative w-full h-[320px] sm:h-[420px] md:h-[600px] overflow-hidden group border border-[#C7D0C8]">
<div className="absolute inset-0 w-full h-full" id="hero-slideshow">
<img alt="Hero Background" className="hero-slide absolute inset-0 w-full h-full object-cover grayscale-[10%] sepia-[5%] transition-transform duration-[2000ms] ease-in-out scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3813664-aae4-4fb1-b103-668b2131fbed_3840w.jpg"/>
<img alt="Hero Background" className="hero-slide absolute inset-0 w-full h-full object-cover grayscale-[10%] sepia-[5%] transition-transform duration-[2000ms] ease-in-out scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32f0e634-c09b-40be-95b6-f56d07589c20_3840w.jpg"/>
<img alt="Hero Background" className="hero-slide absolute inset-0 w-full h-full object-cover grayscale-[10%] sepia-[5%] transition-transform duration-[2000ms] ease-in-out scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b7dd38f-dfbc-42a9-b53d-9e7945e432ae_3840w.jpg"/>
<img alt="Hero Background" className="hero-slide absolute inset-0 w-full h-full object-cover grayscale-[10%] sepia-[5%] transition-transform duration-[2000ms] ease-in-out scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68bdb9df-9481-4e0a-bbf3-ecec37d5af63_1600w.webp"/>
</div>
<div className="absolute bottom-0 right-0 p-4 sm:p-6 md:p-8 flex gap-4 items-end w-full sm:w-auto justify-center sm:justify-end">
<button className="bg-[#3E6B4E] text-[#F1F4F1] px-6 sm:px-8 py-3 flex items-center gap-3 text-sm font-medium hover:bg-[#2F5B41] transition-colors uppercase tracking-widest font-sans w-full sm:w-auto justify-center">
        Explore Stays
        <svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="hidden md:flex absolute bottom-8 left-8 gap-4"></div>
</div>
</div>
<div className="border-b border-[#C7D0C8] bg-[#F1F4F1]">
<div className="sm:pt-14 sm:pr-6 sm:pb-14 sm:pl-6 md:text-left md:pt-10 pt-12 pr-4 pb-12 pl-4">
<div className="flex flex-col md:items-end md:mb-10 mt-0 mb-12 gap-x-6 gap-y-6 items-start justify-between md:flex-row">
<div className="">
<span className="text-xs font-mono text-[#9FB5A5] block mb-4 border-b border-[#C7D0C8] w-fit pb-1">
      01 — COLLECTIONS
    </span>
<h2 className="sm:text-4xl md:text-5xl text-[#1F2D26 text-3xl font-medium tracking-tight">
      Curated Destinations
    </h2>
<a className="mt-6 sm:mt-8 inline-flex items-center gap-3 bg-[#1F2D26] px-5 sm:px-6 py-3 text-xs font-sans font-medium uppercase tracking-widest text-[#F1F4F1] transition-colors hover:bg-[#3E6B4E]" href="#">
      View Collection
      <svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(241, 244, 241)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<p className="leading-snug lg:text-right italic text-[#5F6F65] text-left max-w-sm">
<span className="lg:text-right">
      Discover hand-picked selections for every mood.
    </span>
<span className="block">
      From high-altitude retreats to sun-soaked coastlines.
    </span>
</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 border-[#C7D0C8] border-t border-l">
<a className="group relative aspect-[3/4] overflow-hidden border-r border-b border-[#C7D0C8] bg-[#EBE9E4]" href="#">
<img className="grayscale-[10%] group-hover:scale-105 transition-transform duration-1000 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ff7fe2d-7c2c-4715-a112-5b0e3dbec252_1600w.jpg"/>
<div className="grayscale-[10%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover"></div>
<div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full">
<span className="text-[10px] font-sans uppercase tracking-widest text-white/80 mb-1 block">
          Collection
        </span>
<h3 className="text-xl sm:text-2xl font-medium italic text-white">
          Alpine Stillness
        </h3>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden border-r border-b border-[#C7D0C8] bg-[#EBE9E4]" href="#">
<img className="grayscale-[10%] group-hover:scale-105 transition-transform duration-1000 object-auto bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52b99abc-ab2f-4490-a6b8-eb7a3032fb74_1600w.jpg"/>
<div className="grayscale-[10%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover"></div>
<div className="w-full pt-4 sm:pt-6 pr-4 sm:pr-6 pb-4 sm:pb-6 pl-4 sm:pl-6 absolute bottom-0 left-0">
<span className="text-[10px] font-sans uppercase tracking-widest text-white/80 mb-1 block">
          Collection
        </span>
<h3 className="text-xl sm:text-2xl font-medium italic text-white">
          Coastal Drift
        </h3>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden border-r border-b border-[#C7D0C8] bg-[#EBE9E4]" href="#">
<img className="grayscale-[10%] group-hover:scale-105 transition-transform duration-1000 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6e634ed-5601-417f-917b-f6dc85e993ba_1600w.jpg"/>
<div className="grayscale-[10%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover"></div>
<div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full">
<span className="text-[10px] font-sans uppercase tracking-widest text-white/80 mb-1 block">
          Collection
        </span>
<h3 className="text-xl sm:text-2xl font-medium italic text-white">
          Forest Haven
        </h3>
</div>
</a>
<a className="group relative aspect-[3/4] overflow-hidden border-r border-b border-[#C7D0C8] bg-[#EBE9E4]" href="#">
<img className="grayscale-[10%] group-hover:scale-105 transition-transform duration-1000 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f752d182-a962-407c-b999-06057b6e3970_1600w.webp"/>
<div className="grayscale-[10%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover"></div>
<div className="w-full pt-4 sm:pt-6 pr-4 sm:pr-6 pb-4 sm:pb-6 pl-4 sm:pl-6 absolute bottom-0 left-0">
<span className="text-[10px] font-sans uppercase tracking-widest text-white/80 mb-1 block">
          Collection
        </span>
<h3 className="text-xl sm:text-2xl font-medium italic text-white">
          Remote Solitude
        </h3>
</div>
</a>
</div>
</div>
</div>

<div className="sticky flex flex-wrap md:px-6 md:flex-nowrap md:pt-8 md:pb-8 bg-[#F1F4F1]/95 z-40 border-[#C7D0C8] border-b pt-8 pr-4 pb-8 pl-4 top-[60px] backdrop-blur-md gap-x-4 gap-y-4 items-center justify-between">
<div className="flex md:w-auto overflow-x-auto no-scrollbar md:pb-0 flex-wrap md:flex-nowrap w-full pb-0 gap-x-3 gap-y-3 items-center">
<span className="text-base font-medium italic whitespace-nowrap mr-2 text-[#9FB5A5] w-full md:w-auto md:mr-2">
      Book your stay
    </span>
<div className="flex flex-wrap w-full gap-x-3 gap-y-3 md:w-auto md:flex-nowrap md:contents">
<div className="flex items-center border border-[#C7D0C8] bg-[#E7ECE8] px-4 py-1.5 gap-2 w-full sm:w-auto md:w-auto">
<svg aria-hidden="true" className="" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
<input className="bg-transparent border-none text-xs uppercase tracking-wider font-sans font-medium placeholder-[#2C2A26] focus:outline-none w-full sm:w-40 md:w-24" placeholder="Where to?" type="text"/>
</div>
<div className="flex items-center border border-[#C7D0C8] bg-[#E7ECE8] px-4 py-1.5 gap-2 w-full sm:w-auto md:w-auto">
<svg aria-hidden="true" className="" data-icon="lucide:calendar" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g -width="2" className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
<path d="M8 2v4m8-4v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path className="" d="M3 10h18"></path>
</g>
</svg>
<input className="bg-transparent border-none text-xs uppercase tracking-wider font-sans font-medium placeholder-[#2C2A26] focus:outline-none w-full sm:w-28 md:w-24" placeholder="Dates" type="text"/>
</div>
<div className="flex items-center border border-[#C7D0C8] bg-[#EECE8] px-4 py-1.5 gap-2 w-full sm:w-auto md:w-auto">
<svg aria-hidden="true" className="" data-icon="lucide:users" data-width="14" height="14" role="img" view="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
<input className="bg-transparent border-none text-xs uppercase tracking-wider font-sans font-medium placeholder-[#2C2A26] focus:outline-none w-full sm:w-24 md:w-20" placeholder="Guests" type="text"/>
</div>
<button className="px-5 py-1.5 bg-[#3E6B4E] text-[#F1F4F1] border border-[#3E6B4E] text-xs uppercase tracking-wider font-sans font-medium flex items-center gap-2 whitespace-nowrap hover:bg-[#2F5B41] transition w-full sm:w-auto md:w-auto justify-center">
        Search
      </button>
</div>
</div>
<div className="flex md:hidden w-full gap-4 items-center">
<span className="text-base font-medium italic text-[#9FB5A5] inline-flex items-center gap-2 whitespace-nowrap">
      Quick find
      <svg aria-hidden="true" className="" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<div className="relative flex items-center flex-1 min-w-[200px]">
<input className="focus:border-[#1F2D26] focus:outline-none placeholder:text-[#9FB5A5] text-sm bg-transparent w-full border-[#C7D0C8] border-b pt-1 pr-8 pb-1 pl-0 font-sans pr-10" placeholder="Search destinations..." type="text"/>
<svg aria-hidden="true" className="absolute right-0 top-1/2 -translate-y-1/2 text-[#9FB5A5]" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m21 21l-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</g>
</svg>
</div>
</div>
<div className="hidden md:flex gap-4 md:w-auto w-full border-[#C7D0C8] border-l pl-6 gap-x-4 gap-y-4 items-center">
<span className="text-base font-medium italic text-[#9FB5A5] inline-flex items-center gap-2">
      Quick find
      <svg aria-hidden="true" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path currentcolor"="" d="m9 18l6-6l-6-6" fill="none stroke=" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<div className="relative flex items-center">
<input className="focus:border-[#1F2D26] focus:outline-none placeholder:text-[#9FB5A5] text-sm bg-transparent w-48 border-[#C7D0C8] border-b pt-1 pr-8 pb-1 pl-0 font-sans pr-10" placeholder="Search destinations..." type="text"/>
<svg aria-hidden="true" className="absolute right-0 top-1/2 -translate-y-1/2 text-[#9FB5A5]" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m21 21l-4.34-4.34"></path>
<circle className="" cx="11" cy="11" r="8"></circle>
</g>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#C7D0C8]">

<div className="md:col-span-3 p-6 border-b md:border-b-0 md:border-r border-[#C7D0C8] flex flex-col justify-between h-auto md:min-h-[400px]">
<div className="md:sticky md:top-40">
<span className="text-xs font-mono text-[#9FB5A5] block mb-4 border-b border-[#C7D0C8] w-fit pb-1">
                02 — DISCOVER
              </span>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-[0.95] mb-6 text-[#1F2D26]">
                Featured Stays
              </h2>
<p className="text-base text-[#5F6F65] leading-relaxed max-w-[240px] italic">
                Curated selection of homes for every style of traveler. From
                beachfront villas to secluded mountain cabins.
              </p>
<div className="mt-12 w-full h-px bg-[#C7D0C8] hidden md:block"></div>
</div>
<div className="mt-8 md:mt-0">
<button className="w-full bg-[#E7ECE8] border border-[#C7D0C8] text-[#1F2D26] px-4 py-3 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#DDE5DF] transition-colors group font-sans">
                View All Homes
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

<div className="group cursor-pointer border-b border-r border-[#C7D0C8] p-4 hover:bg-[#E7ECE8] transition-colors">
<div className="relative aspect-[3/4] bg-[#E7ECE8] overflow-hidden mb-4 border border-[#C7D0C8]">
<img className="grayscale-[10%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3dbfe575-ccd5-4a25-a28a-c1c59d146363_800w.jpg"/>
<div className="absolute top-2 right-2 bg-[#F1F4F1] px-2 py-0.5 text-[10px] font-sans uppercase tracking-widest border border-[#C7D0C8]">
                  Superhost
                </div>
</div>
<div className="flex justify-between items-start mb-1">
<div className="leading-tight">
<h3 className="text-xl font-medium text-[#1F2D26] tracking-tight">
                    The Coastal Frame
                  </h3>
<p className="uppercase text-xs font-sans text-[#5F6F65] tracking-widest">
                    Malibu, California
                  </p>
</div>
<div className="flex items-center gap-1">
<span className="text-[#3E6B4E]">
<svg aria-hidden="true" data-icon="lucide:star" data-strokeWidth="2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-xs font-sans">4.98</span>
</div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#5F6F65] mt-2 font-sans">
<span className="uppercase tracking-widest">Oct 22 - 27</span>
<span className="text-[#2C2A26] text-base font-medium font-serif">
                  $350
                  <span className="text-xs font-sans text-[#635F59]">/night</span>
</span>
</div>
</div>

<div className="group cursor-pointer hover:bg-[#E7ECE8] transition-colors border-[#C7D0C8] border-b pt-4 pr-4 pb-4 pl-4">
<div className="relative aspect-[3/4] bg-[#EBE9E4] overflow-hidden mb-4 border border-[#D1CEC7]">
<img className="grayscale-[10%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e30f1dc0-1c1b-490d-909f-279231f746ce_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-1">
<div className="leading-tight">
<h3 className="text-xl font-medium tracking-tight text-[#1F2D26]">
                    The Glass Lodge
                  </h3>
<p className="text-xs font-sans uppercase tracking-widest text-[#5F6F65]">
                    Mont-Tremblant, Quebec
                  </p>
</div>
<div className="flex items-center gap-1">
<span className="text-[#D4A373]">
<svg aria-hidden="true" data-icon="lucide:star" data-strokeWidth="2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-xs">4.98</span>
</div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#635F59] mt-2 font-sans">
<span className="uppercase tracking-widest">Dec 26 - 31</span>
<span className="text-base font-medium text-[#2C2A26] font-serif">
                  $650
                  <span className="text-xs font-sans text-[#5F6F65]">/night</span>
</span>
</div>
</div>

<div className="group cursor-pointer border-b border-[#C7D0C8] p-4 hover:bg-[#E7ECE8] transition-colors">
<div className="relative aspect-[3/4] bg-[#EBE9E4] overflow-hidden mb-4 border border-[#D1CEC7]">
<img className="grayscale-[10%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/660c0440-9729-40b0-adeb-f97d8f1edbd8_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-1">
<div className="leading-tight">
<h3 className="font-medium text-xl tracking-tight text-[#1F2D26]">
                    The Aurora Houses
                  </h3>
<p className="text-xs font-sans uppercase tracking-widest text-[#5F6F65]">
                    Aspen, Colorado
                  </p>
</div>
<div className="flex items-center gap-1">
<span className="text-[#D4A373]">
<svg aria-hidden="true" data-icon="lucide:star" data-strokeWidth="2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-xs font-sans">5.0</span>
</div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#635F59] mt-2 font-sans">
<span className="uppercase tracking-widest">Dec 15 - 20</span>
<span className="text-[#2C2A26] text-base font-medium font-serif">
                  $850
                  <span className="text-xs font-sans text-[#5F6F65]">/night</span>
</span>
</div>
</div>

<div className="group cursor-pointer border-b md:border-b-0 border-r border-[#C7D0C8] p-4 hover:bg-[#E7ECE8] transition-colors">
<div className="relative aspect-[3/4] bg-[#EBE9E4] overflow-hidden mb-4 border border-[#D1CEC7]">
<img className="grayscale-[10%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4008e7b8-e0fc-4429-bfcc-c3ada0d74214_800w.webp"/>
<div className="absolute top-2 right-2 bg-[#F1F4F1] px-2 py-0.5 text-[10px] font-sans uppercase tracking-widest border border-[#C7D0C8]">
                  Guest Favorite
                </div>
</div>
<div className="flex justify-between items-start mb-1">
<div className="leading-tight">
<h3 className="font-medium text-xl tracking-tight text-[#1F2D26]">
                    The Horizon House
                  </h3>
<p className="text-xs font-sans uppercase tracking-widest text-[#5F6F65]">
                    Tulum, Mexico
                  </p>
</div>
<div className="flex items-center gap-1">
<span className="text-[#D4A373]">
<svg aria-hidden="true" data-icon="lucide:star" data-strokeWidth="2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-xs">4.99</span>
</div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#635F59] mt-2 font-sans">
<span className="uppercase tracking-widest">Jan 10 - 15</span>
<span className="text-[#2C2A26] text-base font-medium font-serif">
                  $420
                  <span className="text-xs font-sans text-[#635F59]">/night</span>
</span>
</div>
</div>

<div className="group cursor-pointer border-b md:border-b-0 md:border-r border-[#C7D0C8] p-4 hover:bg-[#E7ECE8] transition-colors">
<div className="relative aspect-[3/4] bg-[#EBE9E4] overflow-hidden mb-4 border border-[#D1CEC7]">
<img className="grayscale-[10%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88ca61f6-bdb7-4716-996b-e4feacd6919d_800w.jpg"/>
</div>
<div className="flex justify-between items-start mb-1">
<div className="leading-tight">
<h3 className="font-medium text-xl tracking-tight text-[#1F2D26]">
                    The Mirror Cabin
                  </h3>
<p className="text-xs font-sans uppercase tracking-widest text-[#5F6F65]">
                    Dalarna, Sweden
                  </p>
</div>
<div className="flex items-center gap-1">
<span className="text-[#D4A373]">
<svg aria-hidden="true" data-icon="lucide:star" data-strokeWidth="2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-xs font-sans">4.99</span>
</div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#635F59] mt-2 font-sans">
<span className="uppercase tracking-widest">Feb 14 - 16</span>
<span className="text-[#2C2A26] text-base font-medium font-serif">
                  $650
                  <span className="text-xs font-sans text-[#635F59]">/night</span>
</span>
</div>
</div>

<div className="group cursor-pointer p-4 hover:bg-[#E7ECE8] transition-colors">
<div className="relative aspect-[3/4] bg-[#EBE9E4] overflow-hidden mb-4 border border-[#D1CEC7]">
<img className="grayscale-[10%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ec8485b-26fc-4ed1-8926-77a76f01db8a_800w.jpg"/>
</div>
<div className="flex justify-between items-start mb-1">
<div className="leading-tight">
<h3 className="text-xl font-medium tracking-tight text-[#1F2D26]">
                    The Aegean House
                  </h3>
<p className="text-xs font-sans uppercase tracking-widest text-[#5F6F65]">
                    Santorini, Greece
                  </p>
</div>
<div className="flex items-center gap-1">
<span className="text-[#D4A373]">
<svg aria-hidden="true" className="" data-icon="lucide:star" data-strokeWidth="2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-xs font-sans">4.88</span>
</div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#635F59] mt-2 font-sans">
<span className="uppercase tracking-widest">Mar 20 - 30</span>
<span className="text-[#2C2A26] text-base font-medium font-serif">
                  $130
                  <span className="text-xs font-sans text-[#635F59]">/night</span>
</span>
</div>
</div>
</div>
</div>
<div className="border-b border-[#C7D0C8] bg-[#F1F4F1] py-20">
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<span className="block text-xs text-[#9FB5A5] font-mono w-fit border-[#C7D0C8] border-b mr-auto mb-8 ml-auto pb-1">
              03 — HOW IT WORKS
            </span>
<h2 className="md:text-5xl text-4xl font-medium text-[#1F2D26] tracking-tight mb-12">
              Considered at Every Step
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:relative md:before:content-[''] md:before:absolute md:before:left-0 md:before:right-0 md:before:top-[14px] md:before:border-t md:before:border-dashed md:before:border-[#C7D0C8]">
<div className="flex flex-col items-center gap-3">
<h3 className="text-2xl font-medium italic tracking-tight text-[#1F2D26] bg-[#F1F4F1] px-4 relative z-10">
                  Discover
                </h3>
<p className="text-[#5F6F65] text-sm leading-relaxed">
<span className="block">Find your perfect sanctuary.</span>
<span className="block">Curated stays, reviewed by hand.</span>
</p>
</div>
<div className="flex flex-col items-center gap-3">
<h3 className="text-2xl font-medium italic tracking-tight text-[#1F2D26] bg-[#F1F4F1] px-4 relative z-10">
                  Book
                </h3>
<p className="text-[#5F6F65] text-sm leading-relaxed">
<span className="block">Reserve with complete confidence.</span>
<span className="block">
                    Transparent pricing. Secure checkout.
                  </span>
</p>
</div>
<div className="flex flex-col items-center gap-3">
<h3 className="text-2xl font-medium italic tracking-tight text-[#1F2D26] bg-[#F1F4F1] px-4 relative z-10">
                  Stay
                </h3>
<p className="text-[#5F6F65] text-sm leading-relaxed">
<span className="block">Arrive, exhale, and enjoy.</span>
<span className="block">24/7 support if you need it.</span>
</p>
</div>
</div>
</div>
</div>

<div className="border-b border-[#C7D0C8]">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-4 md:p-12 lg:border-b-0 lg:border-r flex flex-col min-h-[500px] bg-[#EBE9E4] h-full border-[#D1CEC7] border-b pt-8 pr-8 pb-8 pl-8 justify-center">
<div className="max-w-lg">
<span className="text-xs font-mono text-[#9FB5A5] block mb-6 border-b border-[#C7D0C8] w-fit pb-1">
                  04 — WHY ROAM
                </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#1F2D26]">
                  The Roam Standard
                </h2>
<p className="text-lg text-[#5F6F65] italic mb-12 leading-relaxed">
                  We believe that where you stay should be as inspiring as where
                  you go. Our collection is curated with an editorial eye,
                  ensuring privacy, character, and comfort.
                </p>
<div className="space-y-10">
<div className="flex gap-5">
<div className="shrink-0 text-[#2C2A26] mt-1">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</div>
<div className="">
<h3 className="text-sm font-bold font-sans uppercase tracking-widest text-[#1F2D26] mb-2">
                        Curated Homes
                      </h3>
<p className="text-sm text-[#5F6F65] leading-relaxed">
                        We review thousands of homes but select only a few. Each
                        property is chosen for its design, location, and soul.
                      </p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 text-[#2C2A26] mt-1">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<h3 className="text-sm font-bold font-sans uppercase tracking-widest text-[#1F2D26] mb-2">
                        Quality Assurance
                      </h3>
<p className="text-sm text-[#5F6F65] leading-relaxed">
                        Verified for comfort and cleanliness. We check the water
                        pressure, the linen quality, and the wifi speed.
                      </p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 text-[#2C2A26] mt-1">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
</svg>
</div>
<div className="">
<h3 className="text-sm font-bold font-sans uppercase tracking-widest text-[#1F2D26] mb-2">
                        Human Support
                      </h3>
<p className="text-sm text-[#5F6F65] leading-relaxed">
                        Our concierge team is available to assist with every
                        detail of your stay, from booking to departure.
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 lg:order-none md:order-last">
<div className="overflow-hidden group md:h-auto lg:border-r border-[#C7D0C8] h-[280px] border-b relative">
<img className="hover:scale-105 transition-transform duration-700 sepia-[10%] grayscale-[10%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7f3cac8-5609-4ac0-8baf-38048221f3f6_1600w.jpg"/>
<div className="absolute bottom-4 left-4 bg-[#F1F4F1] px-3 py-1 text-xs font-mono border border-[#C7D0C8]">
                  Fig. 01 — Interiors
                </div>
</div>
<div className="grid grid-rows-2 h-full min-h-[280px] md:min-h-[240px] lg:min-h-0">
<div className="relative overflow-hidden group border-b border-[#C7D0C8]">
<img className="hover:scale-105 transition-transform duration-700 grayscale-[20%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5ade93a-ad05-40e1-a50a-65e1d0899679_1600w.webp" style={{}}/>
<div className="absolute bottom-4 left-4 bg-[#F1F4F1] px-3 py-1 text-xs font-mono border border-[#C7D0C8]">
                    Fig. 02 — Details
                  </div>
</div>
<div className="relative overflow-hidden group">
<img className="hover:scale-105 transition-transform duration-700 sepia-[10%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68bdb9df-9481-4e0a-bbf3-ecec37d5af63_1600w.webp" style={{}}/>
<div className="absolute bottom-4 left-4 bg-[#F2F0E9] px-3 py-1 text-xs font-mono border border-[#D1CEC7]">
                    Fig. 03 — Location
                  </div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#F1F4F1] border-[#C7D0C8] border-b pt-10 pr-6 pb-10 pl-6">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col h-full">
<div className="flex flex-col text-center pb-5 items-center justify-center">
<span className="block text-xs text-[#9FB5A5] font-mono w-fit border-[#C7D0C8] border-b mb-6 pb-1">
                  05 — VOICES FROM ROAM
                </span>
</div>
<div className="grid grid-cols-1 relative min-h-[600px] md:min-h-[500px]">

<div className="guest-story-slide col-start-1 row-start-1 grid grid-cols-1 md:grid-cols-12 gap-12 transition-opacity duration-500 ease-in-out opacity-100 z-10 items-start">
<div className="md:col-span-5 h-full">
<div className="aspect-[4/5] overflow-hidden border border-[#C7D0C8] relative h-full">
<img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88ca61f6-bdb7-4716-996b-e4feacd6919d_800w.jpg"/>
<div className="absolute bottom-4 right-4 text-[9px] font-sans font-medium uppercase tracking-widest text-white/90 drop-shadow-md">
                        Early light, first day
                      </div>
</div>
</div>
<div className="flex flex-col md:col-span-7 pt-0">
<p className="font-mono text-xs text-[#9FB5A5] mb-6 uppercase tracking-widest">
                      Stayed at The Mirror Cabin — Dalarna, Sweden
                    </p>
<svg className="text-[#1F2D26] opacity-20 mb-6" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<blockquote className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-[#1F2D26] mb-8 max-w-md">
<span className="italic block mb-2 opacity-80">
                        “The cabin was absolutely breathtaking.”
                      </span>
                      Every detail felt intentional — from the way the light
                      moved through the space to the firewood already stacked by
                      the door. It didn’t feel like a rental. It felt like being
                      welcomed.
                    </blockquote>
<div className="mb-8">
<span className="text-xs font-sans uppercase tracking-widest text-[#5F6F65]">
                        California, USA
                      </span>
</div>
</div>
</div><div className="flex flex-col text-center mt-10 mb-10 items-center justify-center">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-[#1F2D26] pb-0.5 hover:text-[#5F6F65] hover:border-[#5F6F65] transition-colors font-sans font-medium mb-6" href="#">
                  Read Guest Stories
                  <svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14m-7-7l7 7l-7 7"></path>
</svg>
</a>
<div className="flex gap-3">
<button className="w-10 h-10 border border-[#C7D0C8]/60 flex items-center justify-center hover:bg-[#E7ECE8] transition-colors text-[#9FB5A5] hover:text-[#5F6F65]" id="story-prev">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="w-10 h-10 border border-[#C7D0C8]/60 flex items-center justify-center hover:bg-[#E7ECE8] transition-colors text-[#9FB5A5] hover:text-[#5F6F65]" id="story-next">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>

<div className="guest-story-slide col-start-1 row-start-1 grid grid-cols-1 md:grid-cols-12 gap-12 transition-opacity duration-500 ease-in-out opacity-0 pointer-events-none z-0 items-start">
<div className="md:col-span-5 h-full">
<div className="aspect-[4/5] overflow-hidden border border-[#C7D0C8] relative h-full">
<img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e30f1dc0-1c1b-490d-909f-279231f746ce_800w.webp"/>
<div className="absolute bottom-4 right-4 text-[9px] font-sans font-medium uppercase tracking-widest text-white/90 drop-shadow-md">
                        Afternoon calm
                      </div>
</div>
</div>
<div className="md:col-span-7 flex flex-col">
<p className="font-mono text-xs text-[#9FB5A5] mb-6 uppercase tracking-widest">
                      Stayed at The Glass Lodge — Mont-Tremblant, Quebec
                    </p>
<svg className="text-[#1F2D26] opacity-20 mb-6" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<blockquote className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-[#1F2D26] mb-8 max-w-md">
<span className="italic block mb-2 opacity-80">
                        “We arrived tired and left completely reset.”
                      </span>
                      The quiet, the views, the way the house was laid out — it
                      all encouraged us to slow down without trying. We’re
                      already planning our return.
                    </blockquote>
<div className="mb-8">
<span className="text-xs font-sans uppercase tracking-widest text-[#5F6F65]">
                        Montreal, Canada
                      </span>
</div>
</div>
</div>

<div className="guest-story-slide col-start-1 row-start-1 grid grid-cols-1 md:grid-cols-12 gap-12 transition-opacity duration-500 ease-in-out opacity-0 pointer-events-none z-0 items-start">
<div className="md:col-span-5 h-full">
<div className="aspect-[4/5] overflow-hidden border border-[#C7D0C8] relative h-full">
<img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3dbfe575-ccd5-4a25-a28a-c1c59d146363_800w.jpg"/>
<div className="absolute bottom-4 right-4 text-[9px] font-sans font-medium uppercase tracking-widest text-white/90 drop-shadow-md">
                        Pacific breeze
                      </div>
</div>
</div>
<div className="md:col-span-7 flex flex-col">
<p className="font-mono text-xs text-[#9FB5A5] mb-6 uppercase tracking-widest">
                      Stayed at The Coastal Frame — Malibu, California
                    </p>
<svg className="text-[#1F2D26] opacity-20 mb-6" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<blockquote className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-[#1F2D26] mb-8 max-w-md">
<span className="italic block mb-2 opacity-80">
                        “I didn’t realize how much the place you stay shapes the
                        experience until this trip.”
                      </span>
                      The house framed the landscape perfectly — mornings felt
                      longer, evenings felt calmer. It stayed with us.
                    </blockquote>
<div className="mb-8">
<span className="text-xs font-sans uppercase tracking-widest text-[#5F6F65]">
                        New York, USA
                      </span>
</div>
</div>
</div>

<div className="guest-story-slide col-start-1 row-start-1 grid grid-cols-1 md:grid-cols-12 gap-12 transition-opacity duration-500 ease-in-out opacity-0 pointer-events-none z-0 items-start">
<div className="md:col-span-5 h-full">
<div className="aspect-[4/5] overflow-hidden border border-[#C7D0C8] relative h-full">
<img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/660c0440-9729-40b0-adeb-f97d8f1edbd8_800w.webp"/>
<div className="absolute bottom-4 right-4 text-[9px] font-sans font-medium uppercase tracking-widest text-white/90 drop-shadow-md">
                        Alpine dusk
                      </div>
</div>
</div>
<div className="md:col-span-7 flex flex-col">
<p className="font-mono text-xs text-[#9FB5A5] mb-6 uppercase tracking-widest">
                      Stayed at The Aurora Houses — Aspen, Colorado
                    </p>
<svg className="text-[#1F2D26] opacity-20 mb-6" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<blockquote className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-[#1F2D26] mb-8 max-w-md">
<span className="italic block mb-2 opacity-80">
                        “Everything was exactly as described, but somehow
                        better.”
                      </span>
                      The house felt lived-in, thoughtful, and warm. It was the
                      kind of place where you stop checking your phone without
                      noticing.
                    </blockquote>
<div className="mb-8">
<span className="text-xs font-sans uppercase tracking-widest text-[#5F6F65]">
                        Austin, USA
                      </span>
</div>
</div>
</div>

<div className="guest-story-slide col-start-1 row-start-1 grid grid-cols-1 md:grid-cols-12 gap-12 transition-opacity duration-500 ease-in-out opacity-0 pointer-events-none z-0 items-start">
<div className="md:col-span-5 h-full">
<div className="aspect-[4/5] overflow-hidden border border-[#C7D0C8] relative h-full">
<img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4008e7b8-e0fc-4429-bfcc-c3ada0d74214_800w.webp"/>
<div className="absolute bottom-4 right-4 text-[9px] font-sans font-medium uppercase tracking-widest text-white/90 drop-shadow-md">
                        Open air
                      </div>
</div>
</div>
<div className="md:col-span-7 flex flex-col">
<p className="font-mono text-xs text-[#9FB5A5] mb-6 uppercase tracking-widest">
                      Stayed at The Horizon House — Tulum, Mexico
                    </p>
<svg className="text-[#1F2D26] opacity-20 mb-6" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<blockquote className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-[#1F2D26] mb-8 max-w-md">
<span className="italic block mb-2 opacity-80">
                        “The transition between inside and outside was
                        seamless.”
                      </span>
                      Mornings started slow, afternoons disappeared, and nights
                      were quiet. It didn’t feel like a vacation rental — it
                      felt like a rhythm.
                    </blockquote>
<div className="mb-8">
<span className="text-xs font-sans uppercase tracking-widest text-[#5F6F65]">
                        Mexico City, MX
                      </span>
</div>
</div>
</div>

<div className="guest-story-slide col-start-1 row-start-1 grid grid-cols-1 md:grid-cols-12 gap-12 transition-opacity duration-500 ease-in-out opacity-0 pointer-events-none z-0 items-start">
<div className="md:col-span-5 h-full">
<div className="aspect-[4/5] overflow-hidden border border-[#C7D0C8] relative h-full">
<img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ec8485b-26fc-4ed1-8926-77a76f01db8a_800w.jpg"/>
<div className="absolute bottom-4 right-4 text-[9px] font-sans font-medium uppercase tracking-widest text-white/90 drop-shadow-md">
                        Island view
                      </div>
</div>
</div>
<div className="md:col-span-7 flex flex-col">
<p className="font-mono text-xs text-[#9FB5A5] mb-6 uppercase tracking-widest">
                      Stayed at The Aegean House — Santorini, Greece
                    </p>
<svg className="text-[#1F2D26] opacity-20 mb-6" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<blockquote className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-[#1F2D26] mb-8 max-w-md">
<span className="italic block mb-2 opacity-80">
                        “We chose this stay for the view, but what surprised us
                        was the calm.”
                      </span>
                      Nothing felt overdone. The space let the island speak for
                      itself.
                    </blockquote>
<div className="mb-8">
<span className="text-xs font-sans uppercase tracking-widest text-[#5F6F65]">
                        Athens, GR
                      </span>
</div>
</div>
</div>
</div>

</div>
</div>
</div>

<footer className="bg-[#1F2D26] text-[#F1F4F1] pt-16 pb-8 border-t border-[#C7D0C8]">
<div className="w-full text-center text-[10px] uppercase tracking-[0.25em] text-[#9FB5A5]/40 mb-12 font-sans select-none">
            A quieter way to travel.
          </div>
<div className="px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-[#F1F4F1]/10 pb-16">

<div className="md:col-span-4 pr-0 md:pr-12">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="text-2xl tracking-tight font-semibold uppercase">
                  ROAM
                </span>
</a>
<p className="leading-relaxed text-[#9FB5A5] max-w-sm mb-8">
                Curating considered places to stay — for travelers who move with
                intention.
              </p>
<div className="flex gap-4">
<a className="w-10 h-10 border border-[#F1F4F1]/20 flex items-center justify-center hover:bg-[#F1F4F1] hover:text-[#1F2D26] transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
</a>
<a className="w-10 h-10 border border-[#F1F4F1]/20 flex items-center justify-center hover:bg-[#F1F4F1] hover:text-[#1F2D26] transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="w-10 h-10 border border-[#F1F4F1]/20 flex items-center justify-center hover:bg-[#F1F4F1] hover:text-[#1F2D26] transition-colors" href="#">
<svg aria-hidden="true" className="" data-icon="lucide:facebook" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="grid grid-cols-2 gap-8 md:contents">
<div className="md:col-span-2">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#9FB5A5] mb-6 font-sans">
                  Help &amp; Care
                </h4>
<ul className="space-y-4 text-sm text-[#9FB5A5]">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                      Help Center
                    </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                      AirCover
                    </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                      Cancellation
                    </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                      Safety
                    </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#8C867D] mb-6 font-sans">
                  For Hosts
                </h4>
<ul className="space-y-4 text-sm text-[#AAA69D]">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                      Host with Roam
                    </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                      Host Coverage
                    </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                      Hosting Resources
                    </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                      Host Community
                    </a>
</li>
</ul>
</div>
</div>

<div className="md:col-span-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#8C867D] mb-6 font-sans">
                Newsletter
              </h4>
<p className="text-[#9FB5A5] text-sm mb-4">
                Get exclusive offers and travel inspiration delivered.
              </p>
<form className="flex w-full border-b border-[#F1F4F1]/20 pb-2">
<input className="bg-transparent w-full outline-none text-[#F1F4F1] placeholder-[#9FB5A5]/60 font-sans text-sm" placeholder="email@address.com" type="email"/>
<button className="text-[#F1F4F1] hover:text-[#9FB5A5] uppercase text-xs font-semibold tracking-widest font-sans">
                  Join
                </button>
</form>
<p className="text-[10px] text-[#9FB5A5]/50 mt-3 font-sans leading-relaxed">
                Stories, places, and considered escapes — sent occasionally.
              </p>
</div>
</div>
<div className="px-6 md:px-20 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#9FB5A5]/40 font-sans tracking-wide">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-[#F1F4F1]" href="#">Privacy Policy</a>
<a className="hover:text-[#F1F4F1]" href="#">Terms of Service</a>
</div>
<span className="">© 2025 Roam, Inc. All rights reserved.</span>
</div>
</footer>
</main>
</div>


    </>
  );
}

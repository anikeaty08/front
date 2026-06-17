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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
                  mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
              }, 10);
              body.classList.add('menu-open');
          } else {
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
      

<div className="border-x min-h-screen bg-[#F2F0E9] max-w-[1600px] border-[#D1CEC7] mr-auto ml-auto relative">
<div className="absolute left-[-1px] top-0 h-full w-[1px] overflow-hidden z-50 pointer-events-none hidden md:block">
<div className="animate-beam bg-gradient-to-b from-transparent via-[#8C867D] to-transparent w-full h-[200px] absolute left-0"></div>
</div>
<div className="overflow-hidden z-50 pointer-events-none hidden md:block w-[1px] h-full absolute top-0 right-[-1px]">
<div className="animate-beam-delayed bg-gradient-to-b from-transparent via-[#8C867D] to-transparent w-full h-[200px] absolute left-0"></div>
</div>

<div className="fixed inset-0 bg-[#F2F0E9] z-[100] hidden opacity-0 pointer-events-none flex flex-col items-center justify-center" id="mobile-menu">
<button className="flex text-[#2C2A26] pt-2 pr-2 pb-2 pl-2 absolute top-6 right-6 items-center justify-center" id="close-menu-btn">
<svg className="text-3xl" data-icon-set="solar" data-solar="close-square-linear" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path><path d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path></g></svg>
</button>
<nav className="flex flex-col gap-8 text-3xl font-normal italic tracking-tight text-center">
<a className="hover:text-[#8C867D] transition-colors" href="#">Optical</a>
<a className="hover:text-[#8C867D] transition-colors" href="#">Sun</a>
<a className="hover:text-[#8C867D] transition-colors" href="#">
            Eye Care
          </a>
<a className="hover:text-[#8C867D] transition-colors" href="/about-us">
            Our Story
          </a>
<a className="hover:text-[#8C867D] transition-colors" href="#">
            Book Exam
          </a>
</nav>
<div className="mt-12 flex gap-6">
<a className="text-sm font-sans uppercase tracking-widest border-b border-[#2C2A26] pb-1" href="#">
            Account
          </a>
<a className="text-sm font-sans uppercase tracking-widest border-b border-[#2C2A26] pb-1" href="#">
            Bag (1)
          </a>
</div>
</div>

<nav className="sticky flex z-50 text-base font-normal tracking-tight bg-[#F2F0E9]/95 w-full border-[#D1CEC7] border-b pt-4 pr-6 pb-4 pl-6 top-0 backdrop-blur-sm items-center justify-between">

<div className="hidden md:flex gap-8">
<a className="hover:text-[#8C867D] transition-colors italic" href="#">
            Optical
          </a>
<a className="hover:text-[#8C867D] transition-colors italic" href="#">
            Sun
          </a>
<a className="hover:text-[#8C867D] transition-colors italic" href="#">
            Eye Care
          </a>
</div>

<button className="md:hidden flex text-2xl pt-1 pr-1 pb-1 pl-1 items-center justify-center" id="open-menu-btn">
<svg className="" data-icon-set="solar" data-solar="hamburger-menu-linear" height="24" style={{color: 'rgb(44, 42, 38)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4m16 5H4m16 5H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>

<div className="-translate-x-1/2 absolute left-1/2">
<a className="flex items-center gap-2" href="#">
<svg className="text-2xl text-[#2C2A26]" data-icon-set="solar" data-solar="eye-linear" height="24" style={{color: 'rgb(44, 42, 38)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4s7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704Z"></path><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></path></g></svg>
<span className="uppercase cursor-pointer text-xl font-medium tracking-tight" onclick="window.location.href='/home'" role="button">
              Crane
            </span>
</a>
</div>

<div className="hidden md:flex gap-8 items-center">
<a className="hover:text-[#8C867D] transition-colors italic" href="/about-us">
            About Us
          </a>
<a className="hover:text-[#8C867D] transition-colors italic" href="#">
            Book Exam
          </a>
<a className="hover:text-[#8C867D] transition-colors italic" href="#">
            Bag (1)
          </a>
</div>

<a className="md:hidden flex items-center justify-center text-xl pt-1 pr-1 pb-1 pl-1 relative" href="#">
<svg className="" data-icon-set="solar" data-solar="bag-2-linear" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3.742 20.555C4.942 22 7.174 22 11.64 22h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 20.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 6.922C17.125 6 15.536 6 12.361 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></path><path d="m15 11l1 6m-7-6l-1 6M9 6V5a3 3 0 1 1 6 0v1" strokeLinecap="round"></path></g></svg>
<span className="-top-1 -right-1 text-[10px] flex items-center justify-center text-[#F2F0E9] font-sans bg-[#2C2A26] w-4 h-4 rounded-full absolute">
            1
          </span>
</a>
</nav>
<main className="w-full">

<div className="md:px-6 border-[#D1CEC7] border-b pt-12 pr-4 pb-12 pl-4">
<div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-0 text-lg text-[#635F59] mb-8 pr-1 pl-1 items-start justify-between">
<p className="leading-snug italic max-w-xs text-left">
              Curated independent eyewear. Precision optometry for the modern
              individual.
            </p>
<p className="leading-snug italic text-left md:text-right max-w-xs">
              See the world differently. Frames that define your presence.
            </p>
</div>
<div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group border border-[#D1CEC7]">
<img alt="Person wearing stylish glasses" className="grayscale-[15%] sepia-[5%] group-hover:scale-105 transition-transform duration-1000 ease-in-out object-top w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbcbc00a-5abb-4831-adb7-55b94214c4e5_1600w.webp"/>
<div className="absolute bottom-0 right-0 p-6 md:p-8 flex gap-4 items-end">
<button className="bg-[#2C2A26] text-[#F2F0E9] px-8 py-3 flex items-center gap-3 text-sm font-normal hover:bg-[#4A4640] transition-colors uppercase tracking-widest font-sans">
                Shop Frames
                <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
<div className="hidden md:flex absolute bottom-8 left-8 gap-4">
<div className="bg-[#F2F0E9] p-3 border border-[#D1CEC7] shadow-sm flex flex-col w-36">
<div className="bg-[#EBE9E4] h-28 mb-3 overflow-hidden border border-[#D1CEC7]">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<span className="text-xs font-medium uppercase tracking-wider px-1 font-sans">
                  Sun
                </span>
</div>
<div className="bg-[#F2F0E9] p-3 border border-[#D1CEC7] shadow-sm flex flex-col w-36">
<div className="bg-[#EBE9E4] h-28 mb-3 overflow-hidden border border-[#D1CEC7]">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<span className="text-xs font-medium uppercase tracking-wider px-1 font-sans">
                  Optical
                </span>
</div>
</div>
</div>
</div>

<div className="sticky top-[60px] z-40 bg-[#F2F0E9]/95 backdrop-blur-md py-4 px-4 md:px-6 border-b border-[#D1CEC7] flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
<div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
<span className="text-base font-normal italic whitespace-nowrap mr-2 text-[#8C867D]">
              Refine
            </span>
<button className="px-5 py-1.5 border border-[#D1CEC7] bg-[#EBE9E4] text-xs uppercase tracking-wider font-sans font-normal hover:bg-[#E5E2DC] transition-colors flex items-center gap-2 whitespace-nowrap">
              Shape
              <iconify-icon className="" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="px-5 py-1.5 border border-[#D1CEC7] bg-[#EBE9E4] text-xs uppercase tracking-wider font-sans font-normal hover:bg-[#E5E2DC] transition-colors flex items-center gap-2 whitespace-nowrap">
              Material
              <iconify-icon className="" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="px-5 py-1.5 bg-[#2C2A26] text-[#F2F0E9] border border-[#2C2A26] text-xs uppercase tracking-wider font-sans font-normal flex items-center gap-2 whitespace-nowrap group">
<span className="w-1.5 h-1.5 bg-[#D4A373]"></span>
              Acetate
              <div className="ml-1 group-hover:text-white flex items-center">
<iconify-icon icon="solar:close-square-linear"></iconify-icon>
</div>
</button>
</div>
<div className="hidden md:flex items-center gap-4 w-full md:w-auto border-l border-[#D1CEC7] pl-6">
<span className="text-base font-normal italic text-[#8C867D]">
              Search
            </span>
<div className="relative flex items-center">
<input className="pl-0 pr-8 py-1 bg-transparent border-b border-[#D1CEC7] text-sm w-48 focus:border-[#2C2A26] focus:outline-none placeholder:text-[#AAA69D] font-sans" placeholder="Find frames..." type="text"/>
<iconify-icon className="absolute right-0 text-[#AAA69D] text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 border-[#D1CEC7] border-b">
<div className="md:col-span-3 md:border-b-0 md:border-r flex flex-col md:min-h-[400px] h-auto border-[#D1CEC7] border-b pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="md:sticky md:top-40">
<span className="block text-xs text-[#8C867D] font-mono w-fit border-[#D1CEC7] border-b mb-4 pb-1">
                CURATION
              </span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-[0.95] mb-6 text-[#1A1917]">
                Signature Acetate
              </h2>
<p className="text-base text-[#635F59] leading-relaxed max-w-[240px] italic">
                Hand-polished frames carved from premium cellulose acetate.
                Designed for structural integrity and timeless profile.
              </p>
<div className="mt-12 w-full h-px bg-[#D1CEC7] hidden md:block"></div>
</div>
<div className="mt-8 md:mt-0">
<button className="w-full bg-[#EBE9E4] border border-[#D1CEC7] text-[#2C2A26] px-4 py-3 flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-widest hover:bg-[#E5E2DC] transition-colors group font-sans">
                View All Frames
                <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

<div className="group cursor-pointer border-b border-r border-[#D1CEC7] p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="relative aspect-[4/3] bg-[#F9F8F6] overflow-hidden mb-4 border border-[#D1CEC7] flex items-center justify-center p-6">
<img className="w-full h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-normal text-xl tracking-tight">The Arthur</h3>
<div className="flex text-[#D4A373] text-sm">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center text-xs font-medium text-[#635F59] mt-2 font-sans">
<span className="tracking-widest">48-22-145</span>
<span className="text-[#2C2A26] text-base font-normal font-serif">
                  $285
                </span>
</div>
</div>

<div className="group cursor-pointer border-b md:border-r border-[#D1CEC7] p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="relative aspect-[4/3] bg-[#F9F8F6] overflow-hidden mb-4 border border-[#D1CEC7] flex items-center justify-center p-6">
<img className="group-hover:scale-105 transition-transform duration-700 mix-blend-multiply w-full h-auto object-contain" src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-normal text-xl tracking-tight">Nova Sun</h3>
<div className="flex text-[#D4A373] text-sm">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center text-xs font-medium text-[#635F59] mt-2 font-sans">
<span className="tracking-widest">51-20-140</span>
<span className="text-[#2C2A26] text-base font-normal font-serif">
                  $310
                </span>
</div>
</div>

<div className="group cursor-pointer border-b border-[#D1CEC7] p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="relative aspect-[4/3] bg-[#F9F8F6] overflow-hidden mb-4 border border-[#D1CEC7] flex items-center justify-center p-6">
<img className="w-full h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1589642380614-4a8c2147b857?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-normal text-xl tracking-tight">Atlas</h3>
<div className="flex text-[#D4A373] text-sm">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center text-xs font-medium text-[#635F59] mt-2 font-sans">
<span className="tracking-widest">46-24-145</span>
<span className="text-[#2C2A26] text-base font-normal font-serif">
                  $295
                </span>
</div>
</div>

<div className="group cursor-pointer border-b md:border-b-0 border-r border-[#D1CEC7] p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="relative aspect-[4/3] bg-[#F9F8F6] overflow-hidden mb-4 border border-[#D1CEC7] flex items-center justify-center p-6">
<img className="group-hover:scale-105 transition-transform duration-700 mix-blend-multiply w-full h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f12e0dc-e5fe-44af-a5d7-38283898ba40_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-normal text-xl tracking-tight">Kensington</h3>
</div>
<div className="flex justify-between items-center text-xs font-medium text-[#635F59] mt-2 font-sans">
<span className="tracking-widest">49-21-140</span>
<span className="text-[#2C2A26] text-base font-normal font-serif">
                  $275
                </span>
</div>
</div>

<div className="group cursor-pointer border-b md:border-b-0 md:border-r border-[#D1CEC7] p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="aspect-[4/3] overflow-hidden flex bg-[#F9F8F6] border-[#D1CEC7] border mb-4 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<img className="group-hover:scale-105 transition-transform duration-700 mix-blend-multiply w-full h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7eb92d3a-c9bf-4f0e-9d1a-5584011ad28c_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-normal text-xl tracking-tight">Olsen</h3>
<div className="flex text-[#D4A373] text-sm">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center text-xs font-medium text-[#635F59] mt-2 font-sans">
<span className="tracking-widest">50-20-145</span>
<span className="text-[#2C2A26] text-base font-normal font-serif">
                  $320
                </span>
</div>
</div>

<div className="group cursor-pointer p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="relative aspect-[4/3] bg-[#F9F8F6] overflow-hidden mb-4 border border-[#D1CEC7] flex items-center justify-center p-6">
<img className="w-full h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-normal text-xl tracking-tight">Mercer</h3>
</div>
<div className="flex justify-between items-center text-xs font-medium text-[#635F59] mt-2 font-sans">
<span className="tracking-widest">47-23-145</span>
<span className="text-[#2C2A26] text-base font-normal font-serif">
                  $285
                </span>
</div>
</div>
</div>
</div>

<div className="border-[#D1CEC7] border-b">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-12 flex flex-col md:p-12 bg-[#EBE9E4] border-[#D1CEC7] border-b pt-8 pr-8 pb-8 pl-8">
<div className="max-w-3xl mb-12">
<span className="block text-xs text-[#8C867D] font-mono w-fit border-[#D1CEC7] border-b mb-6 pb-1">
                  THE PRACTICE
                </span>
<h2 className="md:text-5xl text-4xl font-light text-[#1A1917] tracking-tight mb-6">
                  Precision Care
                </h2>
<p className="text-lg text-[#635F59] italic mb-8 leading-relaxed font-light">
                  Beyond aesthetics lies the core of our practice:
                  uncompromising clinical excellence. Using advanced diagnostic
                  technology to ensure your vision is as sharp as your style.
                </p>
<div className="flex flex-wrap gap-6 text-sm font-normal font-sans">
<div className="flex items-center gap-3 text-[#2C2A26]">
<div className="w-2 h-2 rounded-full bg-[#D4A373]"></div>
<span className="uppercase tracking-wider">
                      Comprehensive Exams
                    </span>
</div>
<div className="hidden md:block w-px bg-[#D1CEC7] h-6 relative overflow-hidden">
<div className="absolute left-0 w-full h-[10px] bg-gradient-to-b from-transparent via-[#2C2A26] to-transparent animate-beam-fast"></div>
</div>
<div className="flex items-center gap-3 text-[#2C2A26]">
<div className="w-2 h-2 rounded-full bg-[#8C867D]"></div>
<span className="uppercase tracking-wider">
                      Custom Lens Mapping
                    </span>
</div>
<div className="hidden md:block w-px bg-[#D1CEC7] h-6 relative overflow-hidden">
<div className="absolute left-0 w-full h-[10px] bg-gradient-to-b from-transparent via-[#2C2A26] to-transparent animate-beam-fast"></div>
</div>
<div className="flex items-center gap-3 text-[#2C2A26]">
<div className="w-2 h-2 rounded-full bg-[#2C2A26]"></div>
<span className="uppercase tracking-wider">Frame Fitting</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<div className="aspect-[4/3] md:aspect-square relative overflow-hidden group border border-[#D1CEC7] bg-[#F9F8F6]">
<img alt="Diagnostics equipment" className="grayscale-[20%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a94db889-231b-42aa-8fcb-d724a03e16f7_800w.png"/>
</div>
<div className="aspect-[4/3] md:aspect-square relative overflow-hidden group border border-[#D1CEC7] bg-[#F9F8F6]">
<img alt="Lens crafting details" className="grayscale-[20%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2a98f1dc-d670-4b52-aebf-e3933ce75967_800w.png"/>
</div>
<div className="aspect-[4/3] md:aspect-square relative overflow-hidden group border border-[#D1CEC7] bg-[#F9F8F6]">
<img alt="Final adjustments" className="sepia-[10%] group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35f1ed3f-d164-4f4c-966b-42ee1ab5625b_800w.png"/>
</div>
<div className="aspect-[4/3] md:aspect-square relative overflow-hidden group border border-[#D1CEC7] bg-[#F9F8F6]">
<img alt="Client wearing frames" className="grayscale-[15%] sepia-[5%] group-hover:scale-105 transition-transform duration-700 object-top w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8ad3922-6c59-49b9-accf-1f76eeb63c49_800w.png"/>
</div>
</div>
</div>

</div>
</div>

<div className="bg-[#F9F8F6] border-[#D1CEC7] border-b pt-20 pr-6 pb-20 pl-6">
<div className="max-w-5xl mx-auto">
<span className="block text-3xl md:text-5xl text-[#8C867D] text-center mb-12">
              PHILOSOPHY
            </span>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 relative">
<div className="aspect-[4/5] overflow-hidden border border-[#D1CEC7] relative">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="font-normal text-lg tracking-tight leading-none">
                      Dr. Alistair Crane
                    </p>
<p className="text-xs opacity-80 mt-1 uppercase tracking-widest font-sans">
                      Lead Optometrist
                    </p>
</div>
</div>
</div>
<div className="md:col-span-7">
<h3 className="text-3xl md:text-5xl font-normal leading-tight mb-8 text-[#1A1917] tracking-tight">
                  "Eyewear is the ultimate intersection of medical device and
                  personal expression. We don't just correct vision; we clarify
                  how you present yourself to the world."
                </h3>
<a className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium border-b border-[#2C2A26] pb-0.5 hover:text-[#635F59] hover:border-[#635F59] transition-colors font-sans" href="#">
                  Read Our Story
                  <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<footer className="bg-[#2C2A26] text-[#F2F0E9] pt-16 pb-8 border-t border-[#D1CEC7]">
<div className="px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-[#F2F0E9]/10 pb-16">

<div className="md:col-span-4 pr-0 md:pr-12">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-2xl text-[#F2F0E9]" icon="solar:eye-linear"></iconify-icon>
<span className="text-2xl tracking-tight font-medium uppercase">
                  Crane
                </span>
</a>
<p className="text-[#AAA69D] mb-8 leading-relaxed max-w-sm">
                Independent eyewear and comprehensive eye care. A curated
                optical experience focused on clinical precision and timeless
                design.
              </p>
<div className="flex gap-4 font-sans text-sm tracking-wider uppercase">
<a className="hover:text-[#AAA69D] transition-colors" href="#">
                  Instagram
                </a>
<span className="text-[#555]">•</span>
<a className="hover:text-[#AAA69D] transition-colors" href="#">
                  Journal
                </a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="text-xs font-medium uppercase tracking-widest text-[#8C867D] mb-6 font-sans">
                Optical
              </h4>
<ul className="space-y-4 text-sm text-[#AAA69D]">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Acetate Frames
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Titanium Core
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Sunglasses
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Lens Guide
                  </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-medium uppercase tracking-widest text-[#8C867D] mb-6 font-sans">
                Practice
              </h4>
<ul className="space-y-4 text-sm text-[#AAA69D]">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Book an Exam
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Insurance
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Location &amp; Hours
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Contact
                  </a>
</li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="text-xs font-medium uppercase tracking-widest text-[#8C867D] mb-6 font-sans">
                Dispatch
              </h4>
<p className="text-[#AAA69D] text-sm mb-4">
                Subscribe for notes on eye health, new frame arrivals, and
                studio news.
              </p>
<form className="flex w-full border-b border-[#F2F0E9]/20 pb-2">
<input className="bg-transparent w-full outline-none text-[#F2F0E9] placeholder-[#555] font-sans text-sm" placeholder="Email address" type="email"/>
<button className="text-[#F2F0E9] hover:text-[#AAA69D] uppercase text-xs font-medium tracking-widest font-sans">
                  Submit
                </button>
</form>
</div>
</div>
<div className="px-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#635F59] font-sans">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-[#AAA69D]" href="#">Privacy Policy</a>
<a className="hover:text-[#AAA69D]" href="#">Terms of Service</a>
</div>
<span>© 2024 Crane Optical. All rights reserved.</span>
</div>
</footer>
</main>
</div>


    </>
  );
}

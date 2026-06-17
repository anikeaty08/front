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



        lucide.createIcons();

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
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                }, 10);
                body.classList.add('menu-open');
            } else {
                // Close Menu
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300); // Match transition duration
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
      

<div className="max-w-[1600px] mx-auto border-x border-[#D1CEC7] min-h-screen bg-[#F2F0E9] relative">

<div className="fixed inset-0 bg-[#F2F0E9] z-[100] hidden opacity-0 pointer-events-none flex flex-col items-center justify-center" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-[#2C2A26]" id="close-menu-btn">
<svg className="lucide lucide-x w-8 h-8 stroke-[1.5]" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<nav className="flex flex-col gap-8 text-center text-3xl font-medium italic">
<a className="hover:text-[#8C867D] transition-colors" href="#">Men</a>
<a className="hover:text-[#8C867D] transition-colors" href="#">Women</a>
<a className="hover:text-[#8C867D] transition-colors" href="#">Collection</a>
<a className="hover:text-[#8C867D] transition-colors" href="#">Atelier</a>
<a className="hover:text-[#8C867D] transition-colors" href="#">Stories</a>
</nav>
<div className="mt-12 flex gap-6">
<a className="text-sm font-sans uppercase tracking-widest border-b border-[#2C2A26] pb-1" href="#">Account</a>
<a className="text-sm font-sans uppercase tracking-widest border-b border-[#2C2A26] pb-1" href="#">Cart (2)</a>
</div>
</div>

<nav className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between text-base font-medium tracking-tight border-b border-[#D1CEC7] bg-[#F2F0E9]/95 backdrop-blur-sm">

<div className="hidden md:flex gap-8">
<a className="hover:text-[#8C867D] transition-colors italic" href="#">Men</a>
<a className="hover:text-[#8C867D] transition-colors italic" href="#">Women</a>
</div>

<button className="md:hidden p-1" id="open-menu-btn">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<div className="absolute left-1/2 -translate-x-1/2">
<a className="flex items-center gap-2" href="#">
<svg className="text-[#2C2A26] w-[22px] h-[22px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="adventofcode" height="22" strokeWidth="2" style={{color: 'rgb(44, 42, 38)', width: '22px', height: '22px'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m14.05 13.236l6.498 9.606L18.91 24l-6.905-9.47L5.1 24l-1.637-1.158l6.498-9.606L.553 9.22l.615-1.69l9.596 3.463L11.087 0h1.826l.323 10.993l9.596-3.462l.615 1.69l-9.387 4.015z" fill="#2c2a26"></path></svg>
<span className="text-xl tracking-tight font-semibold uppercase">Vestra</span>
</a>
</div>

<div className="hidden md:flex gap-8">
<a className="hover:text-[#8C867D] transition-colors italic" href="#">Wishlist</a>
<a className="hover:text-[#8C867D] transition-colors italic" href="#">Cart (2)</a>
</div>

<a className="md:hidden p-1 relative" href="#">
<svg className="lucide lucide-shopping-bag w-5 h-5 stroke-[1.5]" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 bg-[#2C2A26] text-[#F2F0E9] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">2</span>
</a>
</nav>
<main className="w-full">

<div className="px-4 md:px-6 pt-12 pb-12 border-b border-[#D1CEC7]">
<h1 className="text-[13vw] md:text-[12rem] leading-[0.8] font-medium tracking-tight text-center md:text-left mb-10 w-full break-words text-[#1A1917]">
                    Elevated
                </h1>
<div className="flex flex-col md:flex-row justify-between items-end md:items-start text-lg text-[#635F59] mb-8 px-1">
<p className="max-w-xs leading-snug italic">
                        Redefining the layers you live in. Engineered simplicity for the modern motion.
                    </p>
<p className="max-w-xs text-right leading-snug mt-6 md:mt-0 italic">
                        Intuitive design for daily rituals.  Style that amplifies your presence.
                    </p>
</div>
<div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group border border-[#D1CEC7]">
<img alt="Abstract Orange Fabric" className="w-full h-full object-cover grayscale-[20%] sepia-[10%] group-hover:scale-105 transition-transform duration-1000 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c3c539c-3652-4f65-8b64-14356c3bae10_3840w.webp"/>
<div className="absolute bottom-0 right-0 p-6 md:p-8 flex gap-4 items-end">
<button className="bg-[#2C2A26] text-[#F2F0E9] px-8 py-3 flex items-center gap-3 text-sm font-medium hover:bg-[#4A4640] transition-colors uppercase tracking-widest font-sans">
                            Shop Collection
                            <svg className="lucide lucide-arrow-up-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="hidden md:flex absolute bottom-8 left-8 gap-4">
<div className="bg-[#F2F0E9] p-3 border border-[#D1CEC7] shadow-sm flex flex-col w-36">
<div className="bg-[#EBE9E4] h-28 mb-3 overflow-hidden border border-[#D1CEC7]">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/397f9668-0d0d-47ac-9e84-285e2bfe9700_320w.webp"/>
</div>
<span className="text-xs font-semibold uppercase tracking-wider px-1 font-sans">Tees</span>
</div>
<div className="bg-[#F2F0E9] p-3 border border-[#D1CEC7] shadow-sm flex flex-col w-36">
<div className="bg-[#EBE9E4] h-28 mb-3 overflow-hidden border border-[#D1CEC7]">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83ac61bb-94a0-4ff1-b565-bac8240373e9_320w.webp"/>
</div>
<span className="text-xs font-semibold uppercase tracking-wider px-1 font-sans">Outerwear</span>
</div>
<div className="bg-[#F2F0E9] p-3 border border-[#D1CEC7] shadow-sm flex flex-col w-36">
<div className="bg-[#EBE9E4] h-28 mb-3 overflow-hidden border border-[#D1CEC7]">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8062ab92-9380-4cdd-82af-36258ceb2eeb_320w.webp"/>
</div>
<span className="text-xs font-semibold uppercase tracking-wider px-1 font-sans">Bottoms</span>
</div>
</div>
</div>
</div>

<div className="sticky top-[60px] z-40 bg-[#F2F0E9]/95 backdrop-blur-md py-4 px-4 md:px-6 border-b border-[#D1CEC7] flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
<div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
<span className="text-base font-medium italic whitespace-nowrap mr-2 text-[#8C867D]">Filter by</span>
<button className="px-5 py-1.5 border border-[#D1CEC7] bg-[#EBE9E4] text-xs uppercase tracking-wider font-sans font-medium hover:bg-[#E5E2DC] transition-colors flex items-center gap-2 whitespace-nowrap">
                        Category <svg className="lucide lucide-chevron-down w-3 h-3 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="px-5 py-1.5 border border-[#D1CEC7] bg-[#EBE9E4] text-xs uppercase tracking-wider font-sans font-medium hover:bg-[#E5E2DC] transition-colors flex items-center gap-2 whitespace-nowrap">
                        Size <svg className="lucide lucide-chevron-down w-3 h-3 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="px-5 py-1.5 bg-[#2C2A26] text-[#F2F0E9] border border-[#2C2A26] text-xs uppercase tracking-wider font-sans font-medium flex items-center gap-2 whitespace-nowrap group">
<span className="w-1.5 h-1.5 bg-[#D4A373]"></span>
                        Citrus
                        <div className="ml-1 group-hover:text-white">
<svg className="lucide lucide-x w-3 h-3 stroke-[1.5]" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
</button>
<button className="px-5 py-1.5 border border-[#D1CEC7] bg-[#EBE9E4] text-xs uppercase tracking-wider font-sans font-medium hover:bg-[#E5E2DC] transition-colors flex items-center gap-2 whitespace-nowrap">
                        Price <svg className="lucide lucide-chevron-down w-3 h-3 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="hidden md:flex items-center gap-4 w-full md:w-auto border-l border-[#D1CEC7] pl-6">
<span className="text-base font-medium italic text-[#8C867D]">Search</span>
<div className="relative">
<input className="pl-0 pr-8 py-1 bg-transparent border-b border-[#D1CEC7] text-sm w-48 focus:border-[#2C2A26] focus:outline-none placeholder:text-[#AAA69D] font-sans" placeholder="Type to search..." type="text"/>
<svg className="lucide lucide-search absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAA69D] stroke-[1.5]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#D1CEC7]">
<div className="md:col-span-3 p-6 border-b md:border-b-0 md:border-r border-[#D1CEC7] flex flex-col justify-between h-auto md:min-h-[400px]">
<div className="md:sticky md:top-40">
<span className="text-xs font-mono text-[#8C867D] block mb-4 border-b border-[#D1CEC7] w-fit pb-1">02 — COLLECTION</span>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-[0.95] mb-6 text-[#1A1917]">
                            Citrus  Zest
                        </h2>
<p className="text-base text-[#635F59] leading-relaxed max-w-[240px] italic">
                            Inject warmth into your daily rotation with soft edges and bold hues. Engineered for effortless transition from studio to street.
                        </p>
<div className="mt-12 w-full h-px bg-[#D1CEC7] hidden md:block"></div>
</div>
<div className="mt-8 md:mt-0">
<button className="w-full bg-[#EBE9E4] border border-[#D1CEC7] text-[#2C2A26] px-4 py-3 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#E5E2DC] transition-colors group font-sans">
                            Explore Collection
                            <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">


<div className="group cursor-pointer border-b border-r border-[#D1CEC7] p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="relative aspect-[3/4] bg-[#EBE9E4] overflow-hidden mb-4 border border-[#D1CEC7]">
<img className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09347a52-21f8-4775-bba3-c520ff7a1176_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-xl tracking-tight">Solaris Tee</h3>
<div className="flex text-[#D4A373] gap-0.5"><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg></div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#635F59] mt-2 font-sans">
<span className="uppercase tracking-widest">XS - XXXL</span>
<span className="text-[#2C2A26] text-base font-medium font-serif">$180</span>
</div>
</div>

<div className="group cursor-pointer border-b md:border-r border-[#D1CEC7] p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="relative aspect-[3/4] bg-[#EBE9E4] overflow-hidden mb-4 border border-[#D1CEC7]">
<img className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13a4ca1e-1e33-4f48-ae23-bc7ee5b578af_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-xl tracking-tight">Meridian Crew</h3>
<div className="flex text-[#D4A373] gap-0.5"><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold-duotone" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg></div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#635F59] mt-2 font-sans">
<span className="uppercase tracking-widest">S - XXL</span>
<span className="text-[#2C2A26] text-base font-medium font-serif">$240</span>
</div>
</div>

<div className="group cursor-pointer border-b border-[#D1CEC7] p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="relative aspect-[3/4] bg-[#EBE9E4] overflow-hidden mb-4 border border-[#D1CEC7]">
<img className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68c61711-0d8c-4918-b004-f0f8a4317faa_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-xl tracking-tight">Kinetic Coat</h3>
<div className="flex text-[#D4A373] gap-0.5"><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg></div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#635F59] mt-2 font-sans">
<span className="uppercase tracking-widest">M - XL</span>
<span className="text-[#2C2A26] text-base font-medium font-serif">$420</span>
</div>
</div>

<div className="group cursor-pointer border-b md:border-b-0 border-r border-[#D1CEC7] p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="relative aspect-[3/4] bg-[#EBE9E4] overflow-hidden mb-4 border border-[#D1CEC7]">
<img className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3abab22a-da51-4018-92c2-80b25f948328_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-xl tracking-tight">Ray Knit</h3>
<div className="flex text-[#D4A373] gap-0.5"><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold-duotone" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg></div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#635F59] mt-2 font-sans">
<span className="uppercase tracking-widest">S - XL</span>
<span className="text-[#2C2A26] text-base font-medium font-serif">$155</span>
</div>
</div>

<div className="group cursor-pointer border-b md:border-b-0 md:border-r border-[#D1CEC7] p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="relative aspect-[3/4] bg-[#EBE9E4] overflow-hidden mb-4 border border-[#D1CEC7]">
<img className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b34437e8-3ac9-470c-a94b-85424f7ddb2e_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-xl tracking-tight">Dawn Hoodie</h3>
<div className="flex text-[#D4A373] gap-0.5"><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg></div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#635F59] mt-2 font-sans">
<span className="uppercase tracking-widest">XS - XXL</span>
<span className="text-[#2C2A26] text-base font-medium font-serif">$195</span>
</div>
</div>

<div className="group cursor-pointer p-4 hover:bg-[#EBE9E4] transition-colors">
<div className="relative aspect-[3/4] bg-[#EBE9E4] overflow-hidden mb-4 border border-[#D1CEC7]">
<img className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f235a5b-1989-4b1f-909f-a5f9b699a097_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-xl tracking-tight">Flare Pullover</h3>
<div className="flex text-[#D4A373] gap-0.5"><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg className="" data-icon-set="solar" data-solar="star-bold-duotone" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg></div>
</div>
<div className="flex justify-between items-center text-xs font-semibold text-[#635F59] mt-2 font-sans">
<span className="uppercase tracking-widest">S - L</span>
<span className="text-[#2C2A26] text-base font-medium font-serif">$130</span>
</div>
</div>
</div>
</div>

<div className="border-b border-[#D1CEC7]">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#D1CEC7] bg-[#EBE9E4] flex flex-col justify-between">
<div>
<span className="text-xs font-mono text-[#8C867D] block mb-6 border-b border-[#D1CEC7] w-fit pb-1">03 — BEHIND THE SCENES</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">The Atelier</h2>
<p className="text-lg text-[#635F59] italic mb-8 leading-relaxed">
                                Every thread tells a story of intention. From the raw fibers in Osaka to the final stitch in Milan, our process is a study in patience and precision.
                            </p>
<div className="space-y-4 font-sans text-sm font-medium">
<div className="flex items-center gap-4 text-[#2C2A26]">
<div className="w-2 h-2 rounded-full bg-[#D4A373]"></div>
<span className="uppercase tracking-wider">Sourcing</span>
</div>
<div className="w-px h-6 bg-[#D1CEC7] ml-[3px]"></div>
<div className="flex items-center gap-4 text-[#2C2A26]">
<div className="w-2 h-2 rounded-full bg-[#8C867D]"></div>
<span className="uppercase tracking-wider">Pattern Making</span>
</div>
<div className="w-px h-6 bg-[#D1CEC7] ml-[3px]"></div>
<div className="flex items-center gap-4 text-[#2C2A26]">
<div className="w-2 h-2 rounded-full bg-[#2C2A26]"></div>
<span className="uppercase tracking-wider">Construction</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2">
<div className="relative h-[400px] md:h-auto border-b md:border-b-0 md:border-r border-[#D1CEC7] overflow-hidden group">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 sepia-[20%]" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-[#F2F0E9] px-3 py-1 text-xs font-mono border border-[#D1CEC7]">Fig. 01 — Draping</div>
</div>
<div className="grid grid-rows-2 h-full min-h-[400px]">
<div className="relative overflow-hidden group border-b border-[#D1CEC7]">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac0f264c-d99a-4580-8375-38964aafc491_1600w.webp"/>
<div className="absolute bottom-4 left-4 bg-[#F2F0E9] px-3 py-1 text-xs font-mono border border-[#D1CEC7]">Fig. 02 — Texture</div>
</div>
<div className="relative overflow-hidden group">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 sepia-[10%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fb5427f-3469-41ee-93aa-3e687e948299_1600w.webp"/>
<div className="absolute bottom-4 left-4 bg-[#F2F0E9] px-3 py-1 text-xs font-mono border border-[#D1CEC7]">Fig. 03 — Final Fit</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#F9F8F6] py-20 px-6 border-b border-[#D1CEC7]">
<div className="max-w-5xl mx-auto">
<span className="text-xs font-mono text-[#8C867D] block mb-12 text-center">04 — VOICES OF DESIGN</span>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 relative">
<div className="aspect-[4/5] overflow-hidden border border-[#D1CEC7] relative">
<img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a97a0c41-fd53-4e71-a67c-d1621d1c359f_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="font-medium text-lg leading-none">Elena Vestra</p>
<p className="text-xs opacity-80 mt-1 uppercase tracking-widest font-sans">Creative Director</p>
</div>
</div>
</div>
<div className="md:col-span-7">
<iconify-icon className="text-[#D1CEC7] text-4xl mb-6" icon="fa6-solid:quote-left"></iconify-icon>
<h3 className="text-3xl md:text-5xl font-medium leading-tight mb-8 text-[#1A1917]">
                                "We don't design for the shelf; we design for the movement of life. Every seam is a decision, every fabric choice is a dialogue with the wearer."
                            </h3>
<a className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold border-b border-[#2C2A26] pb-0.5 hover:text-[#635F59] hover:border-[#635F59] transition-colors font-sans" href="#">
                                Read Full Interview
                                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>

<footer className="bg-[#2C2A26] text-[#F2F0E9] pt-16 pb-8 border-t border-[#D1CEC7]">
<div className="px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-[#F2F0E9]/10 pb-16">

<div className="md:col-span-4 pr-0 md:pr-12">
<a className="flex items-center gap-2 mb-6" href="#">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="adventofcode" height="24" strokeWidth="2" style={{color: 'rgb(242, 240, 233)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14.05 13.236l6.498 9.606L18.91 24l-6.905-9.47L5.1 24l-1.637-1.158l6.498-9.606L.553 9.22l.615-1.69l9.596 3.463L11.087 0h1.826l.323 10.993l9.596-3.462l.615 1.69l-9.387 4.015z" fill="#f2f0e9"></path></svg>
<span className="text-2xl tracking-tight font-semibold uppercase">Vestra</span>
</a>
<p className="text-[#AAA69D] mb-8 leading-relaxed max-w-sm">
                            Elevating the everyday through engineered simplicity and timeless aesthetics. Designed in Stockholm, worn worldwide.
                        </p>
<div className="flex gap-4">
<a className="w-10 h-10 border border-[#F2F0E9]/20 flex items-center justify-center hover:bg-[#F2F0E9] hover:text-[#2C2A26] transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5 stroke-[1.5]" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 border border-[#F2F0E9]/20 flex items-center justify-center hover:bg-[#F2F0E9] hover:text-[#2C2A26] transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5 stroke-[1.5]" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#8C867D] mb-6 font-sans">Shop</h4>
<ul className="space-y-4 text-sm text-[#AAA69D]">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#8C867D] mb-6 font-sans">Support</h4>
<ul className="space-y-4 text-sm text-[#AAA69D]">
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#8C867D] mb-6 font-sans">Newsletter</h4>
<p className="text-[#AAA69D] text-sm mb-4">Subscribe for early access to drops and editorials.</p>
<form className="flex w-full border-b border-[#F2F0E9]/20 pb-2">
<input className="bg-transparent w-full outline-none text-[#F2F0E9] placeholder-[#555] font-sans text-sm" placeholder="email@address.com" type="email"/>
<button className="text-[#F2F0E9] hover:text-[#AAA69D] uppercase text-xs font-bold tracking-widest font-sans">Join</button>
</form>
</div>
</div>
<div className="px-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#635F59] font-sans">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-[#AAA69D]" href="#">Privacy Policy</a>
<a className="hover:text-[#AAA69D]" href="#">Terms of Service</a>
</div>
<span>© 2024 Vestra Inc. All rights reserved.</span>
</div>
</footer>
</main>
</div>


    </>
  );
}

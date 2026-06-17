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



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    


      document.getElementById('next-btn').addEventListener('click',()=>{let s=document.getElementById('portfolio-slider');s.scrollBy({left:s.firstElementChild.offsetWidth+24,behavior:'smooth'})});document.getElementById('prev-btn').addEventListener('click',()=>{let s=document.getElementById('portfolio-slider');s.scrollBy({left:-(s.firstElementChild.offsetWidth+24),behavior:'smooth'})});
    


      (function() {
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const iconOpen = document.getElementById('menu-icon-open');
        const iconClose = document.getElementById('menu-icon-close');
        if (btn && menu) {
          btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            iconOpen.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
          });
        }
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
      

<header className="z-50 bg-gradient-to-b from-black/90 via-black/50 to-transparent w-full pb-10 absolute top-0">
<div className="max-w-7xl mx-auto px-6 py-4 relative">

<div className="flex flex-row justify-between items-center mb-6 md:mb-6 gap-4 w-full">

<div className="flex items-center space-x-4">
<a className="flex items-center space-x-3 group" href="#">
<img alt="Logo RS Detail's" className="hover:border-white transition-colors w-10 h-10 object-cover bg-center border-neutral-600 border rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54cfe80f-ebeb-4bd6-9c26-a31b8dea7d92_320w.png"/>
<span className="text-xl font-semibold text-white tracking-tight">
                RS Detail's
              </span>
</a>
</div>

<button aria-label="Menu" className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-50" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" id="menu-icon-open"></i>
<i className="w-6 h-6 hidden" data-lucide="x" id="menu-icon-close"></i>
</button>

<div className="hidden md:flex items-center space-x-6 text-base">
<a className="flex items-center space-x-2 text-white hover:text-neutral-300 transition-colors group" href="tel:+420777607134">
<div className="relative flex items-center justify-center w-5 h-5">
<i className="absolute w-5 h-5 text-[#ff0033] animate-ping opacity-75" data-lucide="phone"></i>
<i className="absolute w-5 h-5 text-[#ff0033] animate-ping opacity-75" data-lucide="phone"></i>
</div>
<span className="font-medium">+420 777 607 134</span>
</a>
<div className="flex space-x-4">
<a className="text-neutral-300 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="send"></i>
</a>
</div>
</div>
</div>

<nav className="hidden md:flex flex-col md:flex-row justify-center md:justify-end gap-y-4 md:gap-x-6 md:gap-y-0 md:gap-10 text-sm font-medium uppercase tracking-wider text-neutral-300 absolute md:relative top-full mt-2 md:mt-0 left-6 right-6 md:left-auto md:right-auto bg-[#0a0a0c] md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-2xl md:shadow-none border border-neutral-800 md:border-none z-40" id="mobile-menu">

<div className="md:hidden flex flex-col items-center mb-4 pb-4 border-b border-neutral-800 space-y-4 w-full">
<a className="flex items-center justify-center space-x-2 text-white" href="tel:+420777607134">
<div className="relative flex items-center justify-center w-5 h-5">
<i className="absolute w-5 h-5 text-[#ff0033] animate-ping opacity-75" data-lucide="phone"></i>
<i className="absolute w-5 h-5 text-[#ff0033] animate-ping opacity-75" data-lucide="phone"></i>
</div>
<span className="font-medium">+420 777 607 134</span>
</a>
<div className="flex space-x-6 justify-center">
<a className="text-neutral-300 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="send"></i>
</a>
</div>
</div>
<a className="text-white text-center" href="#">DOMŮ</a>
<a className="hover:text-white transition-colors text-center" href="#">
            SLUŽBY
          </a>
<a className="hover:text-white transition-colors text-center" href="#">
            REALIZACE
          </a>
<a className="hover:text-white transition-colors text-center" href="#">
            CENÍK
          </a>
<a className="hover:text-white transition-colors text-center" href="#">
            KONTAKT
          </a>
</nav>
</div>
</header>

<section className="relative pt-44 pb-20 lg:pt-52 lg:pb-40 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Car wrap background" className="object-center bg-center opacity-30 w-full h-full object-cover" src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>
<div className="bg-center bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-100 bg-[url(https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=3840&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-none">
<span className="block text-white mb-2">PRÉMIOVÝ</span>
<span className="block text-[#ff0033]">DETAILING</span>
<span className="block text-[#ff0033]">AUTOMOBILŮ</span>
</h1>
<p className="mt-6 text-xl text-neutral-300 max-w-lg">
              Profesionální péče o váš vůz – čištění interiéru, leštění laku a
              keramická ochrana.
            </p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#050505] relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">
<div className="">
<div className="flex items-center space-x-3 mb-4">
<i className="w-5 h-5 text-[#ff0033]" data-lucide="check-circle-2"></i>
<h3 className="text-xl font-semibold text-[#ff0033] tracking-tight">
                Ochranná fólie
              </h3>
</div>
<p className="text-neutral-300 text-base leading-relaxed">
              Chraňte svůj vůz před škrábanci, oděrkami a jinými poškozeními
              pomocí profesionálního polepu ochrannou fólií.
            </p>
</div>
<div className="">
<div className="flex items-center space-x-3 mb-4">
<i className="w-5 h-5 text-white" data-lucide="check-circle-2"></i>
<h3 className="text-xl font-semibold text-[#ff0033] tracking-tight">Detailing exteriéru
</h3>
</div>
<p className="leading-relaxed text-base text-neutral-300">Detailing exteriéru
Kompletní péče o exteriér vozu včetně ošetření plastů, skel a kol.</p>
</div>
<div className="">
<div className="flex items-center space-x-3 mb-4">
<i className="w-5 h-5 text-white" data-lucide="check-circle-2"></i>
<h3 className="text-xl font-semibold text-[#ff0033] tracking-tight">
                Leštění a ochrana laku
              </h3>
</div>
<p className="text-neutral-300 text-base leading-relaxed">
              Obnovte vzhled svého auta pomocí profesionální renovace laku a
              následného ošetření ochrannými vrstvami (keramická ochrana, vosk).
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-end gap-4 mt-[-1rem]">
<button aria-label="Předchozí" className="w-12 h-12 rounded-full border border-neutral-800 bg-[#111] flex items-center justify-center text-white hover:bg-[#ff0033] hover:border-[#ff0033] transition-colors" id="prev-btn">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button aria-label="Další" className="w-12 h-12 rounded-full border border-neutral-800 bg-[#111] flex items-center justify-center text-white hover:bg-[#ff0033] hover:border-[#ff0033] transition-colors" id="next-btn">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div><div className="md:pl-12 lg:pl-[max(3rem,calc((100vw-1400px)/2+1.5rem))] pl-6">
<div className="flex overflow-x-auto snap-x snap-mandatory [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-6 pb-12 gap-x-6 gap-y-6" id="portfolio-slider">
<div className="min-w-[300px] md:min-w-[380px] w-[300px] md:w-[380px] bg-white rounded-[24px] overflow-hidden flex flex-col snap-start shrink-0">
<div className="h-[220px] overflow-hidden relative">
<div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-white/10">
                Před / Po
              </div><img alt="Audi S8" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8c5bb41-e29a-4fc7-b8c8-9ad5d80a30b6_800w.jpg"/>
</div>
<div className="p-6 md:p-8 flex flex-col grow">
<span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">
                DETAILING &amp; ČIŠTĚNÍ
              </span>
<h3 className="text-2xl font-semibold text-black tracking-tight mb-8">
                Ukázka realizace
              </h3>
<div className="mt-auto">
<button className="bg-[#ff0033] text-white px-5 py-2.5 rounded-full text-base font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-colors">
<i className="w-4 h-4" data-lucide="image"></i>
                  Více fotek
                </button>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[380px] w-[300px] md:w-[380px] bg-white rounded-[24px] overflow-hidden flex flex-col snap-start shrink-0">
<div className="h-[220px] overflow-hidden relative">
<img alt="BMW X5" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/013e62e0-b5d5-4862-86e5-2c739c7b5f59_800w.jpg"/>
<div className="uppercase text-xs font-semibold text-white tracking-wider bg-black/70 z-10 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 backdrop-blur-md">
                Před / Po
              </div>
</div>
<div className="p-6 md:p-8 flex flex-col grow">
<span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">
                DETAILING &amp; ČIŠTĚNÍ
              </span>
<h3 className="text-2xl font-semibold text-black tracking-tight mb-8">
                Ukázka realizace
              </h3>
<div className="mt-auto">
<button className="bg-[#ff0033] text-white px-5 py-2.5 rounded-full text-base font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-colors">
<i className="w-4 h-4" data-lucide="image"></i>
                  Více fotek
                </button>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[380px] w-[300px] md:w-[380px] bg-white rounded-[24px] overflow-hidden flex flex-col snap-start shrink-0">
<div className="h-[220px] overflow-hidden relative">
<img alt="Mercedes-Benz GLE" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0e86f2a-ef78-4f0f-a6d0-9e0d3727bf68_800w.jpg"/>
<div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-white/10">
                Před / Po
              </div>
</div>
<div className="p-6 md:p-8 flex flex-col grow">
<span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">
                DETAILING &amp; ČIŠTĚNÍ
              </span>
<h3 className="text-2xl font-semibold text-black tracking-tight mb-8">
                Ukázka realizace
              </h3>
<div className="mt-auto">
<button className="bg-[#ff0033] text-white px-5 py-2.5 rounded-full text-base font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-colors">
<i className="w-4 h-4" data-lucide="image"></i>
                  Více fotek
                </button>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[380px] w-[300px] md:w-[380px] bg-white rounded-[24px] overflow-hidden flex flex-col snap-start shrink-0">
<div className="h-[220px] overflow-hidden relative">
<img alt="BMW X7" className="w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-white/10">
                Před / Po
              </div>
</div>
<div className="p-6 md:p-8 flex flex-col grow">
<span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">
                DETAILING &amp; ČIŠTĚNÍ
              </span>
<h3 className="text-2xl font-semibold text-black tracking-tight mb-8">
                Ukázka realizace
              </h3>
<div className="mt-auto">
<button className="bg-[#ff0033] text-white px-5 py-2.5 rounded-full text-base font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-colors">
<i className="w-4 h-4" data-lucide="image"></i>
                  Více fotek
                </button>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[380px] w-[300px] md:w-[380px] bg-white rounded-[24px] overflow-hidden flex flex-col snap-start shrink-0">
<div className="h-[220px] overflow-hidden relative">
<div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-white/10">
                Před / Po
              </div><img alt="Tesla Model 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&amp;q=80"/>
</div>
<div className="p-6 md:p-8 flex flex-col grow">
<span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">
                DETAILING &amp; ČIŠTĚNÍ
              </span>
<h3 className="text-2xl font-semibold text-black tracking-tight mb-8">
                Ukázka realizace
              </h3>
<div className="mt-auto">
<button className="bg-[#ff0033] text-white px-5 py-2.5 rounded-full text-base font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-colors">
<i className="w-4 h-4" data-lucide="image"></i>
                  Více fotek
                </button>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[380px] w-[300px] md:w-[380px] bg-white rounded-[24px] overflow-hidden flex flex-col snap-start shrink-0">
<div className="h-[220px] overflow-hidden relative">
<img alt="BMW iX" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-white/10">
                Před / Po
              </div>
</div>
<div className="p-6 md:p-8 flex flex-col grow">
<span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">
                DETAILING &amp; ČIŠTĚNÍ
              </span>
<h3 className="text-2xl font-semibold text-black tracking-tight mb-8">
                Ukázka realizace
              </h3>
<div className="mt-auto">
<button className="bg-[#ff0033] text-white px-5 py-2.5 rounded-full text-base font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-colors">
<i className="w-4 h-4" data-lucide="image"></i>
                  Více fotek
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#050505] border-t border-neutral-900/50">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white uppercase">
          Naše služby
        </h2>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="relative w-full h-[500px] rounded-[24px] overflow-hidden group">
<img alt="Ochranná fólie PPF" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent pointer-events-none"></div>
<div className="md:p-8 flex flex-col bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ca39079-43ca-4e84-b49c-49767316a089_800w.jpg?w=800&amp;q=80)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3 pointer-events-auto">
                Čištění interiéru
              </h3>
<p className="text-base text-neutral-300 mb-8 leading-relaxed">
                Hloubkové čištění sedaček, koberců, plastů a stropu – váš
                interiér jako nový.
              </p>
<div className="">
<a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#111] border border-neutral-800 text-[#ff0033] text-base font-medium hover:bg-neutral-800 transition-colors" href="#">
                  Více informací
                </a>
</div>
</div>
</div>
<div className="relative w-full h-[500px] rounded-[24px] overflow-hidden group">
<img alt="Barevná fólie" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
<div className="md:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                Leštění a korekce laku
              </h3>
<p className="text-base text-neutral-300 mb-8 leading-relaxed">
                Odstranění škrábanců, oxidace a swirl marks – lak září jako ze
                showroomu.
              </p>
<div className="">
<a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#111] border border-neutral-800 text-[#ff0033] text-base font-medium hover:bg-neutral-800 transition-colors" href="#">
                  Více informací
                </a>
</div>
</div>
</div>
<div className="relative w-full h-[500px] rounded-[24px] overflow-hidden group">
<img alt="Leštění laku" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
<div className="md:p-8 flex flex-col bg-[url(https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&amp;q=80)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                Keramická ochrana
              </h3>
<p className="text-base text-neutral-300 mb-8 leading-relaxed">
                Dlouhodobá ochrana laku keramickým povlakem – hydrofobní efekt a
                odolnost až 5 let.
              </p>
<div className="">
<a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#111] border border-neutral-800 text-[#ff0033] text-base font-medium hover:bg-neutral-800 transition-colors" href="#">
                  Více informací
                </a>
</div>
</div>
</div>
<div className="relative w-full h-[500px] rounded-[24px] overflow-hidden group">
<img alt="Leštění světlometů" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
<div className="md:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                Čištění motorového prostoru
              </h3>
<p className="text-base text-neutral-300 mb-8 leading-relaxed">
                Bezpečné odmašťování a čištění motoru – perfektní výsledek bez
                poškození.
              </p>
<div className="">
<a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#111] border border-neutral-800 text-[#ff0033] text-base font-medium hover:bg-neutral-800 transition-colors" href="#">
                  Více informací
                </a>
</div>
</div>
</div>
<div className="relative w-full h-[500px] rounded-[24px] overflow-hidden group">
<img alt="Tónování autoskel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                Detailing exteriéru
              </h3>
<p className="text-base text-neutral-300 mb-8 leading-relaxed">
                Kompletní péče o exteriér vozu včetně ošetření plastů, skel a
                kol.
              </p>
<div className="">
<a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#111] border border-neutral-800 text-[#ff0033] text-base font-medium hover:bg-neutral-800 transition-colors" href="#">
                  Více informací
                </a>
</div>
</div>
</div>
<div className="relative w-full h-[500px] rounded-[24px] overflow-hidden group">
<img alt="Odstranění promáčklin" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
<div className="md:p-8 flex flex-col pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                Ochranné fólie PPF
              </h3>
<p className="text-base text-neutral-300 mb-8 leading-relaxed">
                Ochrana laku před kamínky a škrábanci pomocí prémiových
                ochranných fólií.
              </p>
<div className="">
<a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#111] border border-neutral-800 text-[#ff0033] text-base font-medium hover:bg-neutral-800 transition-colors" href="#">
                  Více informací
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-[#050505] border-t border-neutral-900/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="-translate-y-16">
<h2 className="lg:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight mb-10">
              Proč si vybrat RS Detail's?
            </h2>
<ul className="space-y-6 mb-12">
<li className="flex items-start space-x-4">
<div className="w-6 h-6 rounded-full bg-[#ff0033] flex items-center justify-center shrink-0 mt-0.5">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</div>
<span className="text-lg font-medium text-white">
                  Profesionální přístup a prémiové výsledky
                </span>
</li>
<li className="flex items-start space-x-4">
<div className="w-6 h-6 rounded-full bg-[#ff0033] flex items-center justify-center shrink-0 mt-0.5">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</div>
<span className="text-lg font-medium text-white">
                  Použití certifikovaných produktů a technologií
                </span>
</li>
<li className="flex items-start space-x-4">
<div className="w-6 h-6 rounded-full bg-[#ff0033] flex items-center justify-center shrink-0 mt-0.5">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</div>
<span className="text-lg font-medium text-white">
                  Každý vůz ošetřen individuálně
                </span>
</li>
<li className="flex items-start space-x-4">
<div className="w-6 h-6 rounded-full bg-[#ff0033] flex items-center justify-center shrink-0 mt-0.5">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</div>
<span className="text-lg font-medium text-white">
                  Spokojenost zákazníka na prvním místě
                </span>
</li>
</ul>
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#ff0033] text-white rounded-full font-semibold text-base hover:bg-red-700 transition-colors" href="#">
              Získejte nezávaznou nabídku
            </a>
</div>

<img alt="Ukázka práce RS Detail's" className="aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[400px] hover:border-neutral-700 transition-colors bg-center w-full object-cover border-transparent border-2 rounded-[24px] translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/013e62e0-b5d5-4862-86e5-2c739c7b5f59_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#080808]">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold text-center tracking-tight text-white mb-20">
          Jak probíhá práce?
        </h2>
<div className="relative">

<div className="hidden md:block absolute top-4 left-4 w-[calc(75%+24px)] h-[2px] bg-[#ff0033] z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

<div className="relative z-10 flex flex-col">
<div className="w-8 h-8 rounded-full bg-[#ff0033] text-white flex items-center justify-center font-semibold text-base mb-6">
                1
              </div>
<h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                Poptávka a konzultace
              </h3>
<ul className="space-y-2.5">
<li className="flex items-start">
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2 mr-3"></span>
<span className="text-base text-neutral-300">
                    Konzultace zdarma
                  </span>
</li>
<li className="flex items-start">
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2 mr-3"></span>
<span className="text-base text-neutral-300">
                    Popis stavu vozu
                  </span>
</li>
<li className="flex items-start">
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2 mr-3"></span>
<span className="text-base text-neutral-300">
                    Výběr služby a termínu
                  </span>
</li>
</ul>
</div>

<div className="relative z-10 flex flex-col">
<div className="w-8 h-8 rounded-full bg-[#ff0033] text-white flex items-center justify-center font-semibold text-base mb-6">
                2
              </div>
<h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                Příjem a příprava vozu
              </h3>
<ul className="space-y-2.5">
<li className="flex items-start">
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2 mr-3"></span>
<span className="text-base text-neutral-300">Přijetí vozu</span>
</li>
<li className="flex items-start">
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2 mr-3"></span>
<span className="text-base text-neutral-300">
                    Prvotní čištění
                  </span>
</li>
<li className="flex items-start">
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2 mr-3"></span>
<span className="text-base text-neutral-300">
                    Posouzení stavu laku
                  </span>
</li>
</ul>
</div>

<div className="relative z-10 flex flex-col">
<div className="w-8 h-8 rounded-full bg-[#ff0033] text-white flex items-center justify-center font-semibold text-base mb-6">
                3
              </div>
<h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                Profesionální zpracování
              </h3>
<ul className="space-y-2.5">
<li className="flex items-start">
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2 mr-3"></span>
<span className="text-base text-neutral-300">
                    Detailní ruční práce
                  </span>
</li>
<li className="flex items-start">
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2 mr-3"></span>
<span className="text-base text-neutral-300">
                    Precizní péče o každý díl
                  </span>
</li>
</ul>
</div>

<div className="relative z-10 flex flex-col">
<div className="w-8 h-8 rounded-full bg-[#ff0033] text-white flex items-center justify-center font-semibold text-base mb-6">
                4
              </div>
<h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                Předání a kontrola
              </h3>
<ul className="space-y-2.5">
<li className="flex items-start">
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2 mr-3"></span>
<span className="text-base text-neutral-300">
                    Finální kontrola kvality
                  </span>
</li>
<li className="flex items-start">
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2 mr-3"></span>
<span className="text-base text-neutral-300">Předání vozu</span>
</li>
<li className="flex items-start">
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2 mr-3"></span>
<span className="text-base text-neutral-300">
                    Instrukce k údržbě
                  </span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#0a0a0c]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="rounded-[24px] overflow-hidden">
<img alt="Profesionální péče a auto detailing" className="aspect-square md:aspect-[4/3] w-full object-cover bg-center" src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&amp;q=80"/>
</div>

<div className="flex flex-col items-start">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-3">
              Profesionální Péče o vůz
            </h2>
<div className="text-[#ff0033] uppercase text-base tracking-wider font-medium mb-6">
              AUTO DETAILING
            </div>
<div className="w-12 h-px bg-neutral-600 mb-8"></div>
<p className="text-neutral-300 text-lg leading-relaxed mb-6">
              V RS Detail's kombinujeme dlouholeté zkušenosti s nejmodernějšími
              technologiemi v aplikaci fólií a profesionálním detailingu.
              Specializujeme se na ochranné PPF fólie a změnu barvy vozidel za
              použití prémiových materiálů od světových lídrů, jako jsou X-BASE,
              3M, XPEL. Každému projektu věnujeme individuální přístup, dbáme na
              precizní zpracování a zaručujeme vysokou kvalitu služeb.
            </p>
<p className="leading-relaxed text-lg text-neutral-300 mb-10">Naši zákazníci v Morkovicích-Slížanech nám důvěřují, protože nabízíme komplexní servis od konzultace až po předání vozu v klimatizovaném a čistém prostředí s nejvyššími standardy.</p>
<a className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white text-white rounded-md font-medium text-base hover:bg-white hover:text-black transition-colors" href="#">
              Kdo jsme
            </a>
</div>
</div>
</div>
</section>


<section className="relative py-20 md:py-32 overflow-hidden bg-[#050505]">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-12 text-center">
          Časté otázky
        </h2>
<div className="space-y-4">

<div className="bg-white rounded-2xl p-6 md:p-8">
<div className="flex items-center justify-between cursor-pointer">
<h3 className="text-base font-semibold text-black uppercase tracking-wide pr-4">
                Jaké služby RS Detail's poskytuje?
              </h3>
<div className="w-8 h-8 rounded-full bg-[#ff0033] flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-white" data-lucide="x"></i>
</div>
</div>
<div className="mt-4 text-base text-neutral-600 leading-relaxed pr-8">
              Nabízíme komplexní péči o automobily – čištění interiéru, leštění
              a korekci laku, keramickou ochranu, detailing exteriéru a ochranné
              fólie PPF.
            </div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-neutral-50 transition-colors">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-black uppercase tracking-wide pr-4">
                Jak dlouho práce trvá?
              </h3>
<div className="w-8 h-8 rounded-full bg-[#ff0033] flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</div>
</div>
<div className="mt-4 text-base text-neutral-600 leading-relaxed pr-8 hidden">
              Doba závisí na typu a rozsahu služby. Čištění interiéru trvá
              obvykle 3–5 hodin, kompletní detailing i celý den. Přesný čas
              upřesníme při konzultaci.
            </div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-neutral-50 transition-colors">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-black uppercase tracking-wide pr-4">
                Musím se objednat předem?
              </h3>
<div className="w-8 h-8 rounded-full bg-[#ff0033] flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</div>
</div>
<div className="mt-4 text-base text-neutral-600 leading-relaxed pr-8 hidden">
              Ano, pracujeme výhradně na objednávku, abychom každému vozu
              věnovali plnou pozornost a dostatek času.
            </div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-neutral-50 transition-colors">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-black uppercase tracking-wide pr-4">
                Jaké produkty používáte?
              </h3>
<div className="w-8 h-8 rounded-full bg-[#ff0033] flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</div>
</div>
<div className="mt-4 text-base text-neutral-600 leading-relaxed pr-8 hidden">
              Používáme pouze prémiové certifikované přípravky od prověřených
              značek, které jsou šetrné k laku i interiéru vašeho vozu.
            </div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-neutral-50 transition-colors">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-black uppercase tracking-wide pr-4">
                Poskytujete záruku na práci?
              </h3>
<div className="w-8 h-8 rounded-full bg-[#ff0033] flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-white" data-lucide="plus"></i>
</div>
</div>
<div className="mt-4 text-base text-neutral-600 leading-relaxed pr-8 hidden">
              Ano, na naše služby poskytujeme záruku. Na keramickou ochranu
              nabízíme garanci dle použitého produktu.
            </div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#0a0a0c]">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10">
              Kontakt
            </h2>
<div className="space-y-6">
<div className="">
<a className="text-2xl md:text-3xl font-semibold tracking-tight text-white hover:text-neutral-300 transition-colors block mb-2" href="tel:+420777607134">
                  +420 777 607 134
                </a>
<a className="text-base font-medium text-[#ff0033] hover:text-red-400 transition-colors" href="mailto:radim.stastnik@seznam.cz">
                  radim.stastnik@seznam.cz
                </a>
</div>
<div className="text-base text-white font-medium pt-4">
                Uhřická 378, 768 33 Morkovice-Slížany, Česká republika
              </div>

<div className="flex items-center space-x-3 pt-6"></div>
</div>
</div>

<div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative border border-neutral-800">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Uh%C5%99ick%C3%A1%20378,%20768%2033%20Morkovice-Sl%C3%AD%C5%BEany,%20%C4%8Cesk%C3%A1%20republika&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-[#0a0a0c] text-center border-t border-neutral-900/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-base text-neutral-300">
          © 2026 RS Detail's. Všechna práva vyhrazena.
        </p>
</div>
</footer>


<a className="fixed bottom-6 right-6 z-50 md:hidden bg-[#ff0033] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(255,0,51,0.5)] hover:bg-red-700 transition-colors" href="tel:+420777607134">
<i className="w-6 h-6" data-lucide="phone"></i>
</a>


    </>
  );
}

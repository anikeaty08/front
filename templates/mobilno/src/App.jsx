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



      // Category Navigation Logic
      document.addEventListener('DOMContentLoaded', () => {
          const catBtns = document.querySelectorAll('.cat-btn');
          const subPanel = document.getElementById('sub-panel');
          const subLists = document.querySelectorAll('.sub-list');
          let activeTarget = null;

          function closePanel() {
              activeTarget = null;
              subPanel.classList.remove('opacity-100', 'visible', 'h-[72px]');
              subPanel.classList.add('opacity-0', 'invisible', 'h-0');

              catBtns.forEach(btn => {
                  btn.classList.remove('text-[#ff623e]', 'border-[#ff623e]');
                  btn.classList.add('text-gray-500', 'border-transparent');

                  if(btn.getAttribute('data-target') === 'none' && !activeTarget && btn.textContent.trim() === 'Všetky') {
                      btn.classList.remove('text-gray-500', 'border-transparent');
                      btn.classList.add('text-[#ff623e]', 'border-[#ff623e]');
                  }
              });
          }

          function openPanel(targetId, currentBtn) {
              activeTarget = targetId;

              subPanel.classList.remove('opacity-0', 'invisible', 'h-0');
              subPanel.classList.add('opacity-100', 'visible', 'h-[72px]');

              subLists.forEach(list => list.classList.add('hidden'));
              subLists.forEach(list => list.classList.remove('flex'));

              const targetList = document.getElementById(targetId);
              if (targetList) {
                  targetList.classList.remove('hidden');
                  targetList.classList.add('flex');
              }

              catBtns.forEach(btn => {
                  btn.classList.remove('text-[#ff623e]', 'border-[#ff623e]');
                  btn.classList.add('text-gray-500', 'border-transparent');
              });
              currentBtn.classList.remove('text-gray-500', 'border-transparent');
              currentBtn.classList.add('text-[#ff623e]', 'border-[#ff623e]');
          }

          catBtns.forEach(btn => {
              btn.addEventListener('click', (e) => {
                  e.stopPropagation();
                  const targetId = btn.getAttribute('data-target');

                  if (targetId === 'none') {
                      closePanel();
                      catBtns.forEach(b => {
                          b.classList.remove('text-[#ff623e]', 'border-[#ff623e]');
                          b.classList.add('text-gray-500', 'border-transparent');
                      });
                      btn.classList.remove('text-gray-500', 'border-transparent');
                      btn.classList.add('text-[#ff623e]', 'border-[#ff623e]');
                      return;
                  }

                  if (activeTarget === targetId) {
                      closePanel();
                      catBtns[0].classList.remove('text-gray-500', 'border-transparent');
                      catBtns[0].classList.add('text-[#ff623e]', 'border-[#ff623e]');
                  } else {
                      openPanel(targetId, btn);
                  }
              });
          });

          document.addEventListener('click', (e) => {
              if (!e.target.closest('header')) {
                  closePanel();
                  catBtns[0].classList.remove('text-gray-500', 'border-transparent');
                  catBtns[0].classList.add('text-[#ff623e]', 'border-[#ff623e]');
              }
          });

          // Handle all horizontal carousels (Main sections & Subcategories)
          document.querySelectorAll('.carousel-container, .scroll-container').forEach(container => {
              const wrapper = container.closest('.section-carousel, .sub-list');
              if(!wrapper) return;

              const btnLeft = wrapper.querySelector('.carousel-prev, .scroll-left');
              const btnRight = wrapper.querySelector('.carousel-next, .scroll-right');

              if(btnLeft && btnRight) {
                  btnLeft.addEventListener('click', (e) => {
                      e.preventDefault();
                      const scrollAmount = window.innerWidth > 768 ? container.offsetWidth * 0.75 : 300;
                      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                  });

                  btnRight.addEventListener('click', (e) => {
                      e.preventDefault();
                      const scrollAmount = window.innerWidth > 768 ? container.offsetWidth * 0.75 : 300;
                      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                  });
              }
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
      


<header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-[0_1px_2px_rgba(255,98,62,0.04)]">

<div className="border-b border-[#ff623e]/5">
<div className="max-w-[1800px] mx-auto px-6 md:px-10 flex items-center justify-between h-20 md:h-auto md:py-3">

<div className="flex-none flex items-center gap-6 lg:gap-10">
<a className="flex items-center gap-2 text-[#ff623e] hover:opacity-90 transition" href="#">
<iconify-icon className="text-3xl" icon="solar:widget-linear"></iconify-icon>
<span className="text-xl font-medium tracking-tight hidden lg:block text-[#ff623e]">
                Mobilno
              </span>
</a>
<nav className="hidden lg:flex items-center gap-1">
<a className="text-[15px] font-semibold text-[#ff623e] bg-[#ff623e]/10 px-4 py-2 rounded-full transition" href="#">
                Služby
              </a>
<a className="text-[15px] font-medium text-gray-600 hover:text-[#ff623e] hover:bg-[#ff623e]/5 px-4 py-2 rounded-full transition" href="#">
                Dopyty
              </a>
<a className="text-[15px] font-medium text-gray-600 hover:text-[#ff623e] hover:bg-[#ff623e]/5 px-4 py-2 rounded-full transition" href="#">
                Odborníci
              </a>
</nav>
</div>

<div className="hidden md:flex flex-1 items-center justify-center px-4 lg:px-12">
<div className="w-full max-w-xl relative flex items-center group">
<iconify-icon className="absolute left-5 text-gray-400 text-xl group-focus-within:text-[#ff623e] transition-colors" icon="lucide:search"></iconify-icon>
<input className="w-full bg-gray-50/80 hover:bg-gray-100/80 focus:bg-white border border-gray-200/80 focus:border-[#ff623e]/40 rounded-full py-3.5 pl-14 pr-12 shadow-sm focus:shadow-md outline-none transition-all text-[15px] font-medium text-gray-900 placeholder:text-gray-500" placeholder="Hľadať služby, odborníkov..." type="text"/>
<button className="absolute right-2 bg-[#ff623e] hover:bg-[#ff623e]/90 text-white rounded-full w-9 h-9 flex items-center justify-center transition shadow-sm">
<iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>

<div className="flex-none flex items-center gap-2">
<a className="hidden md:block text-sm font-medium hover:bg-[#ff623e]/5 px-4 py-2.5 rounded-full transition text-gray-700 hover:text-[#ff623e]" href="#">
              Stať sa odborníkom
            </a>
<button className="flex items-center gap-3 bg-white border border-[#ff623e]/10 rounded-full py-2 pl-3 pr-2 shadow-sm hover:shadow-md hover:border-[#ff623e]/20 transition">
<iconify-icon className="text-xl text-gray-600" icon="solar:hamburger-menu-linear"></iconify-icon>
<div className="bg-gray-500 text-white rounded-full p-1.5 flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:user-linear"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="md:hidden px-6 py-4 border-b border-[#ff623e]/5">
<div className="relative flex items-center group w-full">
<iconify-icon className="absolute left-4 text-gray-400 text-xl group-focus-within:text-[#ff623e] transition-colors" icon="lucide:search"></iconify-icon>
<input className="w-full bg-gray-50/80 focus:bg-white border border-gray-200/80 focus:border-[#ff623e]/40 rounded-full py-3 pl-12 pr-4 shadow-sm focus:shadow-md outline-none transition-all text-[15px] font-medium text-gray-900 placeholder:text-gray-500" placeholder="Hľadať služby..." type="text"/>
</div>
</div>

<div className="relative bg-white z-20 border-b border-[#ff623e]/5 shadow-[0_1px_2px_rgba(255,98,62,0.02)]">
<div className="max-w-[1800px] mx-auto px-6 md:px-10 flex items-center gap-8 overflow-x-auto no-scrollbar pt-4 pb-0">
<button className="cat-btn flex flex-col items-center gap-2 min-w-max text-[#ff623e] border-b-2 border-[#ff623e] pb-3 transition" data-target="none">
<iconify-icon className="text-2xl" icon="solar:stars-linear"></iconify-icon>
<span className="text-sm font-medium">Všetky</span>
</button>
<button className="cat-btn group flex flex-col items-center gap-2 min-w-max text-gray-500 hover:text-[#ff623e] hover:border-b-2 hover:border-[#ff623e]/50 border-b-2 border-transparent pb-3 transition" data-target="sub-home">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:home-angle-linear"></iconify-icon>
<div className="flex items-center gap-1">
<span className="text-sm font-medium">Domácnosť</span>
<iconify-icon className="text-xs opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<button className="cat-btn group flex flex-col items-center gap-2 min-w-max text-gray-500 hover:text-[#ff623e] hover:border-b-2 hover:border-[#ff623e]/50 border-b-2 border-transparent pb-3 transition" data-target="sub-garden">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:leaf-linear"></iconify-icon>
<div className="flex items-center gap-1">
<span className="text-sm font-medium">Záhrada</span>
<iconify-icon className="text-xs opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<button className="cat-btn group flex flex-col items-center gap-2 min-w-max text-gray-500 hover:text-[#ff623e] hover:border-b-2 hover:border-[#ff623e]/50 border-b-2 border-transparent pb-3 transition" data-target="sub-crafts">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="lucide:hammer"></iconify-icon>
<div className="flex items-center gap-1">
<span className="text-sm font-medium">Remeselníci</span>
<iconify-icon className="text-xs opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<button className="cat-btn group flex flex-col items-center gap-2 min-w-max text-gray-500 hover:text-[#ff623e] hover:border-b-2 hover:border-[#ff623e]/50 border-b-2 border-transparent pb-3 transition" data-target="none">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:scissors-linear"></iconify-icon>
<span className="text-sm font-medium">Krása a telo</span>
</button>
<button className="cat-btn group flex flex-col items-center gap-2 min-w-max text-gray-500 hover:text-[#ff623e] hover:border-b-2 hover:border-[#ff623e]/50 border-b-2 border-transparent pb-3 transition" data-target="none">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:dumbbell-linear"></iconify-icon>
<span className="text-sm font-medium">Šport a fitness</span>
</button>
<button className="cat-btn group flex flex-col items-center gap-2 min-w-max text-gray-500 hover:text-[#ff623e] hover:border-b-2 hover:border-[#ff623e]/50 border-b-2 border-transparent pb-3 transition" data-target="none">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:heart-pulse-linear"></iconify-icon>
<span className="text-sm font-medium">Zdravie</span>
</button>
<button className="cat-btn group flex flex-col items-center gap-2 min-w-max text-gray-500 hover:text-[#ff623e] hover:border-b-2 hover:border-[#ff623e]/50 border-b-2 border-transparent pb-3 transition" data-target="sub-digital">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<div className="flex items-center gap-1">
<span className="text-sm font-medium">IT a digitál</span>
<iconify-icon className="text-xs opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<button className="cat-btn group flex flex-col items-center gap-2 min-w-max text-gray-500 hover:text-[#ff623e] hover:border-b-2 hover:border-[#ff623e]/50 border-b-2 border-transparent pb-3 transition" data-target="none">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:cat-linear"></iconify-icon>
<span className="text-sm font-medium">Zvieratá</span>
</button>
<button className="cat-btn group flex flex-col items-center gap-2 min-w-max text-gray-500 hover:text-[#ff623e] hover:border-b-2 hover:border-[#ff623e]/50 border-b-2 border-transparent pb-3 transition" data-target="none">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:camera-linear"></iconify-icon>
<span className="text-sm font-medium">Zábava a eventy</span>
</button>
</div>
</div>

<div className="absolute top-full left-0 w-full bg-white shadow-md border-b border-[#ff623e]/5 transition-all duration-300 ease-in-out origin-top opacity-0 invisible h-0 z-10" id="sub-panel">

<div className="sub-list hidden relative max-w-[1800px] mx-auto px-6 md:px-10 h-full items-center group/slider" id="sub-home">
<button className="scroll-left hidden md:flex absolute left-4 z-10 bg-white/90 backdrop-blur shadow-sm border border-[#ff623e]/10 rounded-full w-8 h-8 items-center justify-center text-gray-700 hover:scale-105 hover:text-[#ff623e] hover:border-[#ff623e]/30 transition">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="scroll-container flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full py-4">
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Pravidelné upratovanie
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Hĺbkové tepovanie
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Umývanie okien
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Žehlenie a pranie
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Hodinový manžel
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Sťahovanie nábytku
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Vypratávanie pivníc
            </button>
<div className="h-6 w-px bg-gray-200 mx-2 shrink-0"></div>
<button className="whitespace-nowrap px-4 py-2 rounded-full font-medium text-[#ff623e] hover:bg-[#ff623e]/10 transition text-sm flex items-center gap-1.5 shrink-0">
              Zobraziť všetky
              <iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<button className="scroll-right hidden md:flex absolute right-4 z-10 bg-white/90 backdrop-blur shadow-sm border border-[#ff623e]/10 rounded-full w-8 h-8 items-center justify-center text-gray-700 hover:scale-105 hover:text-[#ff623e] hover:border-[#ff623e]/30 transition">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="sub-list hidden relative max-w-[1800px] mx-auto px-6 md:px-10 h-full items-center group/slider" id="sub-garden">
<button className="scroll-left hidden md:flex absolute left-4 z-10 bg-white/90 backdrop-blur shadow-sm border border-[#ff623e]/10 rounded-full w-8 h-8 items-center justify-center text-gray-700 hover:scale-105 hover:text-[#ff623e] hover:border-[#ff623e]/30 transition">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="scroll-container flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full py-4">
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Kosenie trávnikov
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Strihanie stromov a kríkov
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Údržba bazénov
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Krajinná architektúra
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Zavlažovacie systémy
            </button>
<div className="h-6 w-px bg-gray-200 mx-2 shrink-0"></div>
<button className="whitespace-nowrap px-4 py-2 rounded-full font-medium text-[#ff623e] hover:bg-[#ff623e]/10 transition text-sm flex items-center gap-1.5 shrink-0">
              Zobraziť všetky
              <iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<button className="scroll-right hidden md:flex absolute right-4 z-10 bg-white/90 backdrop-blur shadow-sm border border-[#ff623e]/10 rounded-full w-8 h-8 items-center justify-center text-gray-700 hover:scale-105 hover:text-[#ff623e] hover:border-[#ff623e]/30 transition">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="sub-list hidden relative max-w-[1800px] mx-auto px-6 md:px-10 h-full items-center group/slider" id="sub-crafts">
<button className="scroll-left hidden md:flex absolute left-4 z-10 bg-white/90 backdrop-blur shadow-sm border border-[#ff623e]/10 rounded-full w-8 h-8 items-center justify-center text-gray-700 hover:scale-105 hover:text-[#ff623e] hover:border-[#ff623e]/30 transition">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="scroll-container flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full py-4">
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Inštalatér
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Elektrikár
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Stolár
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Murár
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Zámočník
            </button>
<div className="h-6 w-px bg-gray-200 mx-2 shrink-0"></div>
<button className="whitespace-nowrap px-4 py-2 rounded-full font-medium text-[#ff623e] hover:bg-[#ff623e]/10 transition text-sm flex items-center gap-1.5 shrink-0">
              Zobraziť všetky
              <iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<button className="scroll-right hidden md:flex absolute right-4 z-10 bg-white/90 backdrop-blur shadow-sm border border-[#ff623e]/10 rounded-full w-8 h-8 items-center justify-center text-gray-700 hover:scale-105 hover:text-[#ff623e] hover:border-[#ff623e]/30 transition">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="sub-list hidden relative max-w-[1800px] mx-auto px-6 md:px-10 h-full items-center group/slider" id="sub-digital">
<button className="scroll-left hidden md:flex absolute left-4 z-10 bg-white/90 backdrop-blur shadow-sm border border-[#ff623e]/10 rounded-full w-8 h-8 items-center justify-center text-gray-700 hover:scale-105 hover:text-[#ff623e] hover:border-[#ff623e]/30 transition">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="scroll-container flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full py-4">
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Servis PC a notebookov
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Tvorba webstránok
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Grafický dizajn
            </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-sm font-medium text-gray-700 hover:border-[#ff623e]/30 hover:text-[#ff623e] hover:bg-white transition">
              Správa sietí
            </button>
<div className="h-6 w-px bg-gray-200 mx-2 shrink-0"></div>
<button className="whitespace-nowrap px-4 py-2 rounded-full font-medium text-[#ff623e] hover:bg-[#ff623e]/10 transition text-sm flex items-center gap-1.5 shrink-0">
              Zobraziť všetky
              <iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<button className="scroll-right hidden md:flex absolute right-4 z-10 bg-white/90 backdrop-blur shadow-sm border border-[#ff623e]/10 rounded-full w-8 h-8 items-center justify-center text-gray-700 hover:scale-105 hover:text-[#ff623e] hover:border-[#ff623e]/30 transition">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="max-w-[1800px] mx-auto px-6 md:px-10 pt-10 pb-16 space-y-16">

<section className="section-carousel relative">
<div className="flex items-end justify-between mb-6 relative">
<h2 className="text-2xl font-medium tracking-tight text-gray-900 hover:text-[#ff623e] transition-colors cursor-pointer">
            Nové a obľúbené služby
          </h2>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-gray-600 hover:text-[#ff623e] transition" href="#">
              Zobraziť všetky →
            </a>
<div className="flex items-center gap-2">
<button className="carousel-prev w-8 h-8 rounded-full bg-white shadow-sm border border-[#ff623e]/10 flex items-center justify-center text-gray-600 hover:text-[#ff623e] hover:border-[#ff623e]/30 hover:shadow transition">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="carousel-next w-8 h-8 rounded-full bg-white shadow-sm border border-[#ff623e]/10 flex items-center justify-center text-gray-600 hover:text-[#ff623e] hover:border-[#ff623e]/30 hover:shadow transition">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="carousel-container -mx-6 md:-mx-10 px-6 md:px-10 flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 scroll-smooth">

<article className="group cursor-pointer flex flex-col gap-3 flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Záhradník" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95 drop-shadow-md">
<iconify-icon className="text-[28px] drop-shadow-md" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 border border-[#ff623e]/5">
<iconify-icon className="text-sm text-[#ff623e]" icon="solar:medal-star-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Overený</span>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start gap-2">
<h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-[#ff623e] transition-colors">
                  ZáhradyPetras
                </h3>
<div className="flex items-center gap-1 text-base shrink-0 mt-0.5">
<iconify-icon className="text-base text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="font-normal text-gray-900">5.0</span>
</div>
</div>
<p className="text-base text-gray-500 truncate mt-0.5">
                Kompletná údržba záhrad
              </p>
<p className="text-base text-gray-500 truncate">
                Bratislava a okolie
              </p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-lg font-medium text-gray-900">Dohodou</span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-3 flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Upratovanie" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95 drop-shadow-md">
<iconify-icon className="text-[28px] drop-shadow-md" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start gap-2">
<h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-[#ff623e] transition-colors">
                  Čistý Domov s.r.o.
                </h3>
<div className="flex items-center gap-1 text-base shrink-0 mt-0.5">
<iconify-icon className="text-base text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="font-normal text-gray-900">4.9</span>
</div>
</div>
<p className="text-base text-gray-500 truncate mt-0.5">
                Hĺbkové tepovanie a upratovanie
              </p>
<p className="text-base text-gray-500 truncate">Košice</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-lg font-medium text-gray-900">Od 15 €</span>
<span className="text-base text-gray-600">/ hod</span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-3 flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Fitness tréner" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95 drop-shadow-md">
<iconify-icon className="text-[28px] drop-shadow-md" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 border border-[#ff623e]/5">
<iconify-icon className="text-sm text-[#ff623e]" icon="solar:medal-star-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Nový</span>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start gap-2">
<h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-[#ff623e] transition-colors">
                  René Rajko
                </h3>
<div className="flex items-center gap-1 text-base shrink-0 mt-0.5">
<iconify-icon className="text-base text-gray-400 font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="font-normal text-gray-500">Nové</span>
</div>
</div>
<p className="text-base text-gray-500 truncate mt-0.5">
                Osobný tréner, Box
              </p>
<p className="text-base text-gray-500 truncate">Žilina</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-lg font-medium text-gray-900">25 €</span>
<span className="text-base text-gray-600">/ tréning</span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-3 flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Maliar" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95 drop-shadow-md">
<iconify-icon className="text-[28px] drop-shadow-md" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start gap-2">
<h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-[#ff623e] transition-colors">
                  Maliarstvo Kováč
                </h3>
<div className="flex items-center gap-1 text-base shrink-0 mt-0.5">
<iconify-icon className="text-base text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="font-normal text-gray-900">4.8</span>
</div>
</div>
<p className="text-base text-gray-500 truncate mt-0.5">
                Interiérové maľby a stierky
              </p>
<p className="text-base text-gray-500 truncate">Trnava</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-lg font-medium text-gray-900">Dohodou</span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-3 flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Masáž" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95 drop-shadow-md">
<iconify-icon className="text-[28px] drop-shadow-md" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 border border-[#ff623e]/5">
<iconify-icon className="text-sm text-[#ff623e]" icon="solar:medal-star-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Obľúbené</span>
</div>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start gap-2">
<h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-[#ff623e] transition-colors">
                  Uzdrav Telo
                </h3>
<div className="flex items-center gap-1 text-base shrink-0 mt-0.5">
<iconify-icon className="text-base text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="font-normal text-gray-900">5.0</span>
</div>
</div>
<p className="text-base text-gray-500 truncate mt-0.5">
                Fyzioterapia a masáže u vás
              </p>
<p className="text-base text-gray-500 truncate">Trenčín</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-lg font-medium text-gray-900">Od 40 €</span>
<span className="text-base text-gray-600">/ sedenie</span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-3 flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Doučovanie" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95 drop-shadow-md">
<iconify-icon className="text-[28px] drop-shadow-md" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start gap-2">
<h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-[#ff623e] transition-colors">
                  Angličtina s Emmou
                </h3>
<div className="flex items-center gap-1 text-base shrink-0 mt-0.5">
<iconify-icon className="text-base text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="font-normal text-gray-900">4.9</span>
</div>
</div>
<p className="text-base text-gray-500 truncate mt-0.5">
                Konverzácie a gramatika
              </p>
<p className="text-base text-gray-500 truncate">Online</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-lg font-medium text-gray-900">20 €</span>
<span className="text-base text-gray-600">/ lekcia</span>
</div>
</div>
</article>
</div>
</section>

<section className="section-carousel relative">
<div className="flex items-end justify-between mb-6">
<h2 className="text-2xl font-medium tracking-tight text-gray-900 hover:text-[#ff623e] transition-colors cursor-pointer">
            Vybrané služby – Remeselníci
          </h2>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-gray-600 hover:text-[#ff623e] transition" href="#">
              Zobraziť všetky →
            </a>
<div className="flex items-center gap-2">
<button className="carousel-prev w-8 h-8 rounded-full bg-white shadow-sm border border-[#ff623e]/10 flex items-center justify-center text-gray-600 hover:text-[#ff623e] hover:border-[#ff623e]/30 hover:shadow transition">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="carousel-next w-8 h-8 rounded-full bg-white shadow-sm border border-[#ff623e]/10 flex items-center justify-center text-gray-600 hover:text-[#ff623e] hover:border-[#ff623e]/30 hover:shadow transition">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="carousel-container -mx-6 md:-mx-10 px-6 md:px-10 flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 scroll-smooth">

<article className="group cursor-pointer flex flex-col gap-3 flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Inštalatér" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95 drop-shadow-md">
<iconify-icon className="text-[28px] drop-shadow-md" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start gap-2">
<h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-[#ff623e] transition-colors">
                  Voda-Plyn Profi
                </h3>
<div className="flex items-center gap-1 text-base shrink-0 mt-0.5">
<iconify-icon className="text-base text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="font-normal text-gray-900">4.8</span>
</div>
</div>
<p className="text-base text-gray-500 truncate mt-0.5">
                Inštalatérske práce a havárie
              </p>
<p className="text-base text-gray-500 truncate">Žilina</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-lg font-medium text-gray-900">Dohodou</span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-3 flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Elektrikár" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95 drop-shadow-md">
<iconify-icon className="text-[28px] drop-shadow-md" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start gap-2">
<h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-[#ff623e] transition-colors">
                  Elektro Michal
                </h3>
<div className="flex items-center gap-1 text-base shrink-0 mt-0.5">
<iconify-icon className="text-base text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="font-normal text-gray-900">5.0</span>
</div>
</div>
<p className="text-base text-gray-500 truncate mt-0.5">
                Kompletné elektroinštalácie
              </p>
<p className="text-base text-gray-500 truncate">Banská Bystrica</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-lg font-medium text-gray-900">Od 20 €</span>
<span className="text-base text-gray-600">/ hod</span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-3 flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Stolár" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95 drop-shadow-md">
<iconify-icon className="text-[28px] drop-shadow-md" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start gap-2">
<h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-[#ff623e] transition-colors">
                  Stolárstvo DrevoDizajn
                </h3>
<div className="flex items-center gap-1 text-base shrink-0 mt-0.5">
<iconify-icon className="text-base text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="font-normal text-gray-900">4.9</span>
</div>
</div>
<p className="text-base text-gray-500 truncate mt-0.5">
                Výroba nábytku na mieru
              </p>
<p className="text-base text-gray-500 truncate">Prešov</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-lg font-medium text-gray-900">Dohodou</span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-3 flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Maliar" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95 drop-shadow-md">
<iconify-icon className="text-[28px] drop-shadow-md" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start gap-2">
<h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-[#ff623e] transition-colors">
                  Ján S. - Maľovanie
                </h3>
<div className="flex items-center gap-1 text-base shrink-0 mt-0.5">
<iconify-icon className="text-base text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="font-normal text-gray-900">4.7</span>
</div>
</div>
<p className="text-base text-gray-500 truncate mt-0.5">
                Interiérové maľby a stierky
              </p>
<p className="text-base text-gray-500 truncate">Nitra</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-lg font-medium text-gray-900">Od 12 €</span>
<span className="text-base text-gray-600">/ hod</span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-3 flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Strechár" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95 drop-shadow-md">
<iconify-icon className="text-[28px] drop-shadow-md" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-start gap-2">
<h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-[#ff623e] transition-colors">
                  Strechár Profi
                </h3>
<div className="flex items-center gap-1 text-base shrink-0 mt-0.5">
<iconify-icon className="text-base text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="font-normal text-gray-900">4.9</span>
</div>
</div>
<p className="text-base text-gray-500 truncate mt-0.5">
                Opravy a realizácie striech
              </p>
<p className="text-base text-gray-500 truncate">Martin</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-lg font-medium text-gray-900">Dohodou</span>
</div>
</div>
</article>
</div>
</section>

<section className="section-carousel relative z-10">

<div className="flex items-end justify-between mb-6">
<h2 className="text-2xl font-medium tracking-tight text-gray-900 hover:text-[#ff623e] transition-colors cursor-pointer">
            Vybraní odborníci
          </h2>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-gray-600 hover:text-[#ff623e] transition" href="#">
              Zobraziť všetkých →
            </a>
<div className="flex items-center gap-2">
<button className="carousel-prev w-8 h-8 rounded-full bg-white shadow-sm border border-[#ff623e]/10 flex items-center justify-center text-gray-600 hover:text-[#ff623e] hover:border-[#ff623e]/30 hover:shadow transition">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="carousel-next w-8 h-8 rounded-full bg-white shadow-sm border border-[#ff623e]/10 flex items-center justify-center text-gray-600 hover:text-[#ff623e] hover:border-[#ff623e]/30 hover:shadow transition">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="carousel-container -mx-6 md:-mx-10 px-6 md:px-10 flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 scroll-smooth">

<div className="group flex flex-col items-center justify-center p-8 bg-white border border-[#ff623e]/[0.05] shadow-sm hover:shadow-md hover:border-[#ff623e]/20 rounded-2xl transition-all cursor-pointer flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<img alt="Expert" className="w-28 h-28 rounded-full object-cover mb-4 group-hover:scale-105 transition-transform duration-300 ring-4 ring-white shadow-sm" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<h3 className="text-lg font-medium text-gray-900 w-full text-center truncate group-hover:text-[#ff623e] transition-colors">
              Martin Kováč
            </h3>
<p className="text-sm text-gray-500 w-full text-center truncate mt-0.5">
              Certifikovaný elektrikár
            </p>
<div className="flex items-center justify-center gap-1 mt-1 text-sm text-gray-500">
<iconify-icon className="text-sm text-[#ff623e]/80" icon="solar:map-point-linear"></iconify-icon>
              Bratislava
            </div>
<div className="flex items-center gap-1 mt-4 bg-gray-50/80 border border-gray-100 px-3 py-1 rounded-full group-hover:bg-[#ff623e]/5 transition-colors">
<iconify-icon className="text-sm text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">4.9</span>
</div>
</div>

<div className="group flex flex-col items-center justify-center p-8 bg-white border border-[#ff623e]/[0.05] shadow-sm hover:shadow-md hover:border-[#ff623e]/20 rounded-2xl transition-all cursor-pointer flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<img alt="Expert" className="w-28 h-28 rounded-full object-cover mb-4 group-hover:scale-105 transition-transform duration-300 ring-4 ring-white shadow-sm" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<h3 className="text-lg font-medium text-gray-900 w-full text-center truncate group-hover:text-[#ff623e] transition-colors">
              Lucia Nováková
            </h3>
<p className="text-sm text-gray-500 w-full text-center truncate mt-0.5">
              Interiérová dizajnérka
            </p>
<div className="flex items-center justify-center gap-1 mt-1 text-sm text-gray-500">
<iconify-icon className="text-sm text-[#ff623e]/80" icon="solar:map-point-linear"></iconify-icon>
              Trnava
            </div>
<div className="flex items-center gap-1 mt-4 bg-gray-50/80 border border-gray-100 px-3 py-1 rounded-full group-hover:bg-[#ff623e]/5 transition-colors">
<iconify-icon className="text-sm text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">5.0</span>
</div>
</div>

<div className="group flex flex-col items-center justify-center p-8 bg-white border border-[#ff623e]/[0.05] shadow-sm hover:shadow-md hover:border-[#ff623e]/20 rounded-2xl transition-all cursor-pointer flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<img alt="Expert" className="w-28 h-28 rounded-full object-cover mb-4 group-hover:scale-105 transition-transform duration-300 ring-4 ring-white shadow-sm" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<h3 className="text-lg font-medium text-gray-900 w-full text-center truncate group-hover:text-[#ff623e] transition-colors">
              Peter Nagy
            </h3>
<p className="text-sm text-gray-500 w-full text-center truncate mt-0.5">
              Záhradný architekt
            </p>
<div className="flex items-center justify-center gap-1 mt-1 text-sm text-gray-500">
<iconify-icon className="text-sm text-[#ff623e]/80" icon="solar:map-point-linear"></iconify-icon>
              Žilina
            </div>
<div className="flex items-center gap-1 mt-4 bg-gray-50/80 border border-gray-100 px-3 py-1 rounded-full group-hover:bg-[#ff623e]/5 transition-colors">
<iconify-icon className="text-sm text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">4.8</span>
</div>
</div>

<div className="group flex flex-col items-center justify-center p-8 bg-white border border-[#ff623e]/[0.05] shadow-sm hover:shadow-md hover:border-[#ff623e]/20 rounded-2xl transition-all cursor-pointer flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<img alt="Expert" className="w-28 h-28 rounded-full object-cover mb-4 group-hover:scale-105 transition-transform duration-300 ring-4 ring-white shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<h3 className="text-lg font-medium text-gray-900 w-full text-center truncate group-hover:text-[#ff623e] transition-colors">
              Tomáš Varga
            </h3>
<p className="text-sm text-gray-500 w-full text-center truncate mt-0.5">
              Murár a obkladač
            </p>
<div className="flex items-center justify-center gap-1 mt-1 text-sm text-gray-500">
<iconify-icon className="text-sm text-[#ff623e]/80" icon="solar:map-point-linear"></iconify-icon>
              Košice
            </div>
<div className="flex items-center gap-1 mt-4 bg-gray-50/80 border border-gray-100 px-3 py-1 rounded-full group-hover:bg-[#ff623e]/5 transition-colors">
<iconify-icon className="text-sm text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">4.9</span>
</div>
</div>

<div className="group flex flex-col items-center justify-center p-8 bg-white border border-[#ff623e]/[0.05] shadow-sm hover:shadow-md hover:border-[#ff623e]/20 rounded-2xl transition-all cursor-pointer flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<img alt="Expert" className="w-28 h-28 rounded-full object-cover mb-4 group-hover:scale-105 transition-transform duration-300 ring-4 ring-white shadow-sm" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<h3 className="text-lg font-medium text-gray-900 w-full text-center truncate group-hover:text-[#ff623e] transition-colors">
              Andrea Malá
            </h3>
<p className="text-sm text-gray-500 w-full text-center truncate mt-0.5">
              Tepovanie a upratovanie
            </p>
<div className="flex items-center justify-center gap-1 mt-1 text-sm text-gray-500">
<iconify-icon className="text-sm text-[#ff623e]/80" icon="solar:map-point-linear"></iconify-icon>
              Nitra
            </div>
<div className="flex items-center gap-1 mt-4 bg-gray-50/80 border border-gray-100 px-3 py-1 rounded-full group-hover:bg-[#ff623e]/5 transition-colors">
<iconify-icon className="text-sm text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">5.0</span>
</div>
</div>

<div className="group flex flex-col items-center justify-center p-8 bg-white border border-[#ff623e]/[0.05] shadow-sm hover:shadow-md hover:border-[#ff623e]/20 rounded-2xl transition-all cursor-pointer flex-none w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[320px] 2xl:w-[340px] snap-start">
<img alt="Expert" className="w-28 h-28 rounded-full object-cover mb-4 group-hover:scale-105 transition-transform duration-300 ring-4 ring-white shadow-sm" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<h3 className="text-lg font-medium text-gray-900 w-full text-center truncate group-hover:text-[#ff623e] transition-colors">
              Jozef Krátky
            </h3>
<p className="text-sm text-gray-500 w-full text-center truncate mt-0.5">
              Inštalatér
            </p>
<div className="flex items-center justify-center gap-1 mt-1 text-sm text-gray-500">
<iconify-icon className="text-sm text-[#ff623e]/80" icon="solar:map-point-linear"></iconify-icon>
              Prešov
            </div>
<div className="flex items-center gap-1 mt-4 bg-gray-50/80 border border-gray-100 px-3 py-1 rounded-full group-hover:bg-[#ff623e]/5 transition-colors">
<iconify-icon className="text-sm text-[#ff623e] font-semibold" icon="solar:star-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">4.8</span>
</div>
</div>
</div>
</section>
</main>

<section className="relative max-w-[1800px] mx-auto px-6 md:px-10 py-16 border-t border-[#ff623e]/10 bg-white">
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-8 relative z-10">
        Objavte služby vo vašom meste
      </h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 relative z-10">

<a className="group block bg-white shadow-sm rounded-xl p-4 border border-[#ff623e]/[0.05] hover:border-[#ff623e]/20 hover:shadow-md transition" href="#">
<span className="block text-base font-medium text-gray-900 group-hover:text-[#ff623e] transition">
            Bratislava
          </span>
<span className="block text-sm text-gray-500 mt-1">1,200+ služieb</span>
</a>
<a className="group block bg-white shadow-sm rounded-xl p-4 border border-[#ff623e]/[0.05] hover:border-[#ff623e]/20 hover:shadow-md transition" href="#">
<span className="block text-base font-medium text-gray-900 group-hover:text-[#ff623e] transition">
            Košice
          </span>
<span className="block text-sm text-gray-500 mt-1">850+ služieb</span>
</a>
<a className="group block bg-white shadow-sm rounded-xl p-4 border border-[#ff623e]/[0.05] hover:border-[#ff623e]/20 hover:shadow-md transition" href="#">
<span className="block text-base font-medium text-gray-900 group-hover:text-[#ff623e] transition">
            Žilina
          </span>
<span className="block text-sm text-gray-500 mt-1">620+ služieb</span>
</a>
<a className="group block bg-white shadow-sm rounded-xl p-4 border border-[#ff623e]/[0.05] hover:border-[#ff623e]/20 hover:shadow-md transition" href="#">
<span className="block text-base font-medium text-gray-900 group-hover:text-[#ff623e] transition">
            Trnava
          </span>
<span className="block text-sm text-gray-500 mt-1">540+ služieb</span>
</a>
<a className="group block bg-white shadow-sm rounded-xl p-4 border border-[#ff623e]/[0.05] hover:border-[#ff623e]/20 hover:shadow-md transition" href="#">
<span className="block text-base font-medium text-gray-900 group-hover:text-[#ff623e] transition">
            Nitra
          </span>
<span className="block text-sm text-gray-500 mt-1">490+ služieb</span>
</a>
<a className="group block bg-white shadow-sm rounded-xl p-4 border border-[#ff623e]/[0.05] hover:border-[#ff623e]/20 hover:shadow-md transition" href="#">
<span className="block text-base font-medium text-gray-900 group-hover:text-[#ff623e] transition">
            Prešov
          </span>
<span className="block text-sm text-gray-500 mt-1">410+ služieb</span>
</a>
</div>
</section>

<footer className="relative bg-white border-t border-[#ff623e]/10 py-12">
<div className="max-w-[1800px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Podpora</h4>
<ul className="space-y-3 text-sm text-gray-600">
<li>
<a className="hover:text-[#ff623e] transition-colors" href="#">
                Centrum pomoci
              </a>
</li>
<li>
<a className="hover:text-[#ff623e] transition-colors" href="#">
                Bezpečnosť
              </a>
</li>
<li>
<a className="hover:text-[#ff623e] transition-colors" href="#">
                Zrušenie rezervácie
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Komunita</h4>
<ul className="space-y-3 text-sm text-gray-600">
<li>
<a className="hover:text-[#ff623e] transition-colors" href="#">
                Mobilno blog
              </a>
</li>
<li>
<a className="hover:text-[#ff623e] transition-colors" href="#">
                Fórum pre poskytovateľov
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">
            Poskytovanie služieb
          </h4>
<ul className="space-y-3 text-sm text-gray-600">
<li>
<a className="hover:text-[#ff623e] transition-colors" href="#">
                Začnite ponúkať služby
              </a>
</li>
<li>
<a className="hover:text-[#ff623e] transition-colors" href="#">
                Ochrana poskytovateľov
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Mobilno</h4>
<ul className="space-y-3 text-sm text-gray-600">
<li>
<a className="hover:text-[#ff623e] transition-colors" href="#">
                O nás
              </a>
</li>
<li>
<a className="hover:text-[#ff623e] transition-colors" href="#">
                Kariéra
              </a>
</li>
<li>
<a className="hover:text-[#ff623e] transition-colors" href="#">
                Investori
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-[1800px] mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-[#ff623e]/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 relative z-10">
<p>© 2024 Mobilno s.r.o. Všetky práva vyhradené.</p>
</div>
</footer>


    </>
  );
}

import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function() {
      function fixMegaMenuOverlay() {
        const aura = document.getElementById('mega-menu-aura');
        const inner = document.getElementById('mega-menu-inner');
        if (!aura || !inner) return;

        // 1. Переместить кнопку закрытия (крестик) направо
        const closeBtn = aura.querySelector("button[aria-label='Закрыть меню']");
        if (closeBtn && closeBtn.classList.contains('left-6')) {
          closeBtn.classList.remove('left-6', 'md:left-8');
          closeBtn.classList.add('right-6', 'md:right-8');
        }

        // 2. Опустить огромный текст BAZIKO PREMIUM вниз, чтобы он не загораживал ссылки
        const textContainer = inner.querySelector('.mix-blend-multiply');
        if (textContainer && textContainer.classList.contains('inset-0')) {
          textContainer.classList.remove('inset-0', 'items-center', 'z-30');
          textContainer.classList.add('bottom-0', 'left-0', 'right-0', 'items-end', 'pb-6', 'md:pb-10', 'z-10');
          textContainer.style.height = 'auto';
          textContainer.style.top = 'auto';
          
          const h2 = textContainer.querySelector('h2');
          if (h2) {
            h2.classList.remove('text-[14vw]', 'md:text-[8vw]');
            h2.classList.add('text-[11vw]', 'md:text-[6vw]');
          }
        }

        // 3. Исправить кликабельность ссылок и добавить плавный скролл к нужным блокам
        const navLinks = inner.querySelectorAll('nav a');
        const targets = ['#about-us-parallax', '#video-gallery', '#faq-section', 'footer'];
        
        navLinks.forEach((link, idx) => {
          if (!link.hasAttribute('data-fixed')) {
            link.setAttribute('data-fixed', 'true');
            // Удаляем старые inline обработчики
            link.removeAttribute('onclick');
            
            link.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              
              // Закрыть меню
              aura.classList.add('invisible', 'opacity-0');
              inner.classList.add('scale-95', 'opacity-0');
              
              // Выполнить скролл к секции
              setTimeout(() => {
                if (targets[idx] === 'footer') {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                } else {
                  const targetEl = document.querySelector(targets[idx]);
                  if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              }, 400); // Ждем завершения анимации закрытия меню
            });
          }
        });
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixMegaMenuOverlay);
      } else {
        fixMegaMenuOverlay();
      }
      
      // Наблюдатель на случай динамического рендера
      const observer = new MutationObserver(() => {
        fixMegaMenuOverlay();
      });
      observer.observe(document.body, { childList: true, subtree: true });
    })();
    


        document.getElementById('menuBtn').addEventListener('click', function() {
            const nav = document.getElementById('mobileNav');
            nav.classList.toggle('hidden');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex h-20 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="flex items-center gap-3 group cursor-pointer z-50 relative" href="#" onclick="router('/')">
<div className="flex items-center gap-3">
<img alt="BAZIKO logo" className="w-8 h-8 object-contain" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{width: '2.56rem', height: '2.56rem'}}/>
<div className="flex flex-col">
<span className="text-dark leading-none text-xl font-medium tracking-tight">BAZIKO</span>
<span className="text-xs font-normal text-taupe tracking-widest uppercase mt-0.5">Premium</span>
</div>
</div>
</a>

<nav className="hidden md:flex z-40 flex-1 min-w-0 pr-6 pl-6 relative justify-center">
<div className="flex items-center gap-4 lg:gap-6">
<a className="text-dark/60 hover:text-dark transition-colors text-sm font-normal tracking-tight font-manrope whitespace-nowrap" href="#about-us-parallax" onclick="document.querySelector('#about-us-parallax')?.scrollIntoView({behavior:'smooth'}); return false;">О
        нас</a>
<a className="text-dark/60 hover:text-dark transition-colors whitespace-nowrap text-sm font-normal tracking-tight font-manrope" href="#video-gallery" onclick="document.querySelector('#video-gallery')?.scrollIntoView({behavior:'smooth'}); return false;">Галерея</a>
<a className="text-dark/60 hover:text-dark transition-colors text-sm font-normal tracking-tight font-manrope whitespace-nowrap" href="#faq-section" onclick="document.querySelector('#faq-section')?.scrollIntoView({behavior:'smooth'}); return false;">FAQ</a>
<a className="text-dark/60 hover:text-dark transition-colors whitespace-nowrap text-sm font-normal tracking-tight font-manrope" href="#footer" onclick="document.querySelector('footer')?.scrollIntoView({behavior:'smooth'}); return false;">Контакты</a>
</div>

</nav>

<div className="flex items-center gap-3 md:gap-4 z-50 relative">

<a className="hidden md:flex items-center gap-2 uppercase transition hover:bg-premium-hover text-dark whitespace-nowrap text-xs font-semibold tracking-widest rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="https://wa.me/996998154550?text=Здравствуйте%20🤝%20Хотим%20обсудить%20пошив%20нашей%20коллекции" rel="noopener noreferrer" target="_blank">
<span className="font-manrope">Связаться</span>
<iconify-icon height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button aria-label="Открыть меню" className="md:hidden flex flex-col hover:bg-dark/10 transition-colors w-14 h-14 rounded-xl ml-auto items-center justify-center gap-1" onclick="document.getElementById('mega-menu-aura').classList.remove('invisible', 'opacity-0'); document.getElementById('mega-menu-inner').classList.remove('scale-95', 'opacity-0');">
<svg className="text-dark" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22">

<path d="M3 18h18v2H3z"></path>

<path d="M18 18V8c0-2.2-1.8-4-4-4H9C7.3 4 6 5.3 6 7v6"></path>

<path d="M6 13v5"></path>

<path d="M5 18h2"></path>

<circle className="" cx="18" cy="11" r="2.5"></circle>

<path d="M13 4v-2"></path>
</svg>
<span className="text-[9px] font-space-mono font-semibold uppercase tracking-widest text-dark leading-none">Menu</span>
</button>

<button aria-label="Открыть меню" className="hidden md:flex items-center gap-2 text-dark hover:text-premium transition-colors" onclick="document.getElementById('mega-menu-aura').classList.remove('invisible', 'opacity-0'); document.getElementById('mega-menu-inner').classList.remove('scale-95', 'opacity-0');">
<iconify-icon className="" height="26" icon="lucide:menu" strokeWidth="1.5" width="26"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 z-[100] bg-[#C9B5AA] p-4 md:p-12 invisible opacity-0 transition-all duration-500 ease-out flex items-center justify-center" id="mega-menu-aura">

<button aria-label="Закрыть меню" className="absolute top-6 md:top-8 z-[110] text-dark hover:text-white transition-colors p-2 cursor-pointer right-6 md:right-8" onclick="document.getElementById('mega-menu-aura').classList.add('invisible', 'opacity-0'); document.getElementById('mega-menu-inner').classList.add('scale-95', 'opacity-0');">
<iconify-icon height="32" icon="lucide:x" strokeWidth="1.5" width="32"></iconify-icon>
</button>

<div className="w-full h-full max-w-[1200px] max-h-[85vh] relative flex flex-col md:flex-row shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] scale-95 opacity-0 bg-white overflow-hidden" id="mega-menu-inner">

<div className="w-full md:w-[45%] h-full relative flex bg-white z-20">

<div className="hidden md:flex w-16 h-full flex-col justify-end items-center pb-16 relative shrink-0 border-r border-grey-light/40">
<div className="flex flex-col gap-16 -rotate-90 absolute bottom-32 whitespace-nowrap transform origin-center text-[10px] font-manrope font-semibold tracking-widest text-dark/40 uppercase">
<a className="hover:text-dark transition-colors" href="#">Twitter</a>
<a className="hover:text-dark transition-colors" href="#">Instagram</a>
<a className="hover:text-dark transition-colors" href="#">Facebook</a>
</div>
</div>

<div className="flex flex-col justify-center pl-8 pr-8 md:pl-16 md:pr-12 w-full relative z-20 h-full">
<nav className="flex flex-col w-full relative z-40">
<div className="flex flex-col w-full border-b border-grey-light/30">
<a className="flex items-center justify-between w-full py-5 group/lnk" data-fixed="true" href="#about-us-parallax">
<span className="text-sm font-manrope font-semibold uppercase tracking-widest text-dark group-hover/lnk:text-premium transition-colors">О нас</span>
<div className="flex items-center gap-4 opacity-0 group-hover/lnk:opacity-100 transition-opacity">
<span className="w-4 h-[1.5px] bg-dark"></span>
<span className="text-[10px] font-manrope font-semibold text-dark">01</span>
</div>
</a>
</div>
<div className="flex flex-col w-full border-b border-grey-light/30">
<a className="flex items-center justify-between w-full py-5 group/lnk" data-fixed="true" href="#video-gallery">
<span className="text-sm font-manrope font-semibold uppercase tracking-widest text-dark group-hover/lnk:text-premium transition-colors">Галерея</span>
<div className="flex items-center gap-4 opacity-0 group-hover/lnk:opacity-100 transition-opacity">
<span className="w-4 h-[1.5px] bg-dark"></span>
<span className="text-[10px] font-manrope font-semibold text-dark">02</span>
</div>
</a>
</div>
<div className="flex flex-col w-full border-b border-grey-light/30">
<a className="flex items-center justify-between w-full py-5 group/lnk" data-fixed="true" href="#faq-section">
<span className="text-sm font-manrope font-semibold uppercase tracking-widest text-dark group-hover/lnk:text-premium transition-colors">FAQ</span>
<div className="flex items-center gap-4 opacity-0 group-hover/lnk:opacity-100 transition-opacity">
<span className="w-4 h-[1.5px] bg-dark"></span>
<span className="text-[10px] font-manrope font-semibold text-dark">03</span>
</div>
</a>
</div>
<div className="flex flex-col w-full last:border-0">
<a className="flex items-center justify-between w-full py-5 group/lnk" data-fixed="true" href="#">
<span className="text-sm font-manrope font-semibold uppercase tracking-widest text-dark group-hover/lnk:text-premium transition-colors">Контакты</span>
<div className="flex items-center gap-4 opacity-0 group-hover/lnk:opacity-100 transition-opacity">
<span className="w-4 h-[1.5px] bg-dark"></span>
<span className="text-[10px] font-manrope font-semibold text-dark">04</span>
</div>
</a>
</div>
</nav>

<div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 z-40 max-w-[18rem]">
<p className="text-xs font-manrope font-normal text-dark/60 leading-relaxed">
              Выберите раздел — меню закроется и страница плавно прокрутится к нужному блоку.
            </p>
</div>
</div>
</div>

<div className="hidden md:block w-[55%] h-full relative z-10 bg-[#f8f6f5]">
<div className="absolute left-8 top-1/2 -translate-y-1/2 w-[45%] h-[75%] z-20 shadow-2xl bg-white p-2 transition-transform duration-700 hover:scale-105 cursor-pointer">
<img alt="Collection Preview" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5102adb-a0f6-4f63-9278-bb77331d9751_800w.jpg"/>
</div>
<div className="absolute right-0 top-0 w-[65%] h-full z-10">
<img alt="Fashion Editorial" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0220fa5c-a2c1-4438-b157-e54a8b232534_800w.jpg"/>
<div className="absolute inset-0 bg-dark/10"></div>
</div>
</div>

<div className="absolute flex justify-center pointer-events-none px-4 mix-blend-multiply bottom-0 left-0 right-0 items-end pb-6 md:pb-10 z-10" style={{height: 'auto', top: 'auto'}}>
<h2 className="font-manrope font-semibold uppercase tracking-tighter text-dark leading-none text-center select-none opacity-90 drop-shadow-sm text-[11vw] md:text-[6vw]">
          BAZIKO PREMIUM
        </h2>
</div>
</div>
</div>
</div>

<div className="lg:hidden hidden pb-6" id="mobileNav">
<div className="pt-2 grid gap-2">
<a className="rounded-xl px-4 py-3 text-sm font-medium tracking-[0.2em] uppercase text-black/80 hover:bg-black/[0.03] transition-colors" href="#kollekcii">КОЛЛЕКЦИИ</a>
<a className="rounded-xl px-4 py-3 text-sm font-medium tracking-[0.2em] uppercase text-black/80 hover:bg-black/[0.03] transition-colors" href="#fabrika">О ФАБРИКЕ</a>
<a className="rounded-xl px-4 py-3 text-sm font-medium tracking-[0.2em] uppercase text-black/80 hover:bg-black/[0.03] transition-colors" href="#kontakty">КОНТАКТЫ</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-xs font-medium tracking-[0.22em] uppercase text-black hover:border-black/30 transition-colors" href="#kontakty">
<span>НАПИСАТЬ НАМ</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</header>
<main className="mx-auto max-w-7xl px-4 sm:px-6">

<section className="pt-14 sm:pt-20 lg:pt-24 pb-10 sm:pb-14" id="kollekcii">
<div className="max-w-4xl">
<p className="uppercase text-xs font-medium text-black/60 tracking-[0.26em]">КАТАЛОГ / ПРЕМИУМ КАЧЕСТВО</p>
<h1 className="sm:text-5xl lg:text-6xl uppercase text-4xl font-light text-black tracking-tight mt-6">
                    КОЛЛЕКЦИЯ BAZIKO PREMIUM 2026</h1>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 uppercase hover:border-black/30 transition-colors text-xs font-medium text-black tracking-[0.22em] border-black/15 border rounded-full pt-3 pr-6 pb-3 pl-6" href="https://wa.me/996557154550" rel="noopener noreferrer" target="_blank">
<span className="">ЗАПРОСИТЬ ПРАЙС</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full bg-black/[0.03] px-6 py-3 text-xs font-medium tracking-[0.22em] uppercase text-black/80 hover:bg-black/[0.05] transition-colors" href="#fabrika">
<span className="">О ФАБРИКЕ</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="relative overflow-hidden bg-black/[0.02] mt-8 aspect-[16/9] md:aspect-[4/3]">
<video autoplay="" className="z-20 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" src="https://pub-b2098c594208457a9a738e4773a4f74e.r2.dev/Fashion_model_in_elegant_casual_style__blue_oversized_shirt%2C_beige_midi_skirt%2C_sunglasses._She_poses_seed3512116558.mp4" style={{objectPosition: '50% 8%'}}></video>
</div>
</div>
</section>

<section aria-label="Навигация по линиям" className="pb-16 sm:pb-20 lg:pb-24">
<div className="border-black/10 border-t pt-10">
<div className="grid gap-3 sm:grid-cols-3">
<a className="group rounded-2xl border border-black/10 bg-white px-6 py-6 transition-colors hover:bg-[#D4C5B9]" href="#mens-wear">
<div className="flex items-center justify-between gap-4">
<p className="text-sm font-medium tracking-[0.28em] uppercase text-black">МУЖСКАЯ ЛИНИЯ</p>
<svg aria-hidden="true" className="lucide lucide-arrow-right h-4 w-4 text-black/80" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<div className="mt-3 h-px w-full bg-black/10"></div>
<p className="mt-3 text-sm text-black/60">Каталог мужской коллекции</p>
</a>
<a className="group rounded-2xl border border-black/10 bg-white px-6 py-6 transition-colors hover:bg-[#D4C5B9]" href="#womens-wear">
<div className="flex items-center justify-between gap-4">
<p className="text-sm font-medium tracking-[0.28em] uppercase text-black">ЖЕНСКАЯ ЛИНИЯ</p>
<svg aria-hidden="true" className="lucide lucide-arrow-right h-4 w-4 text-black/80" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<div className="mt-3 h-px w-full bg-black/10"></div>
<p className="mt-3 text-sm text-black/60">Платья, блузы и капсулы</p>
</a>
<a className="group rounded-2xl border border-black/10 bg-white px-6 py-6 transition-colors hover:bg-[#D4C5B9]" href="#kids-wear">
<div className="flex items-center justify-between gap-4">
<p className="text-sm font-medium tracking-[0.28em] uppercase text-black">ДЕТСКАЯ ЛИНИЯ</p>
<svg aria-hidden="true" className="lucide lucide-arrow-right h-4 w-4 text-black/80" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<div className="mt-3 h-px w-full bg-black/10"></div>
<p className="mt-3 text-sm text-black/60">Школа и повседневный стиль</p>
</a>
</div>
</div>
</section>

<section aria-label="Мужская одежда" className="pb-16 sm:pb-20 lg:pb-24" id="mens-wear">
<div className="border-black/10 border-t pt-10">
<div className="max-w-3xl">
<h2 className="text-xl sm:text-2xl font-medium tracking-tight uppercase text-black">МУЖСКАЯ КОЛЛЕКЦИЯ
                    </h2>
<p className="text-base text-black/60 mt-4">Идеальные лекала и премиальный хлопок</p>
</div>
<div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-12">
<article className="group col-span-2 md:col-span-1">
<div className="overflow-hidden bg-black/[0.02]">
<img alt="Костюм «СЕНАТОР»" className="w-full object-cover aspect-[3/4] transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5ac18d6-5f21-4fd2-8774-8ff960dd283e_800w.jpg"/>
</div>
<div className="mt-5">
<h3 className="uppercase text-sm font-medium text-black tracking-[0.2em]">РУБАШКА «СЕНАТОР»</h3>
<p className="mt-2 text-base text-black/55">Арт. 55-BZ / Шерсть Super 150s</p>
</div>
</article>
<article className="group col-span-1 md:col-span-1 md:mt-24">
<div className="overflow-hidden bg-black/[0.02]">
<img alt="Пальто «ДИПЛОМАТ»" className="w-full object-cover aspect-[3/5] transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/034ba1a1-90e4-48ed-b274-8217cefabb07_800w.jpg"/>
</div>
<div className="mt-5">
<h3 className="uppercase text-sm font-medium text-black tracking-[0.2em]">РУБАШКА «ШАХ &amp; »</h3>
<p className="mt-2 text-base text-black/55">Арт. 55-BZ / Шерсть Super 150s</p>
</div>
</article>
<article className="group col-span-1 md:col-span-1">
<div className="overflow-hidden">
<img alt="Пиджак «ОСКАР»" className="aspect-[3/4] transition-transform duration-700 ease-out group-hover:scale-105 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5df74aa-050d-4fcd-98dd-d97f7d6ba4a4_800w.png"/>
</div>
<div className="mt-5">
<h3 className="uppercase text-sm font-medium text-black tracking-[0.2em]">Коллекция «ОСКАР»</h3>
<p className="mt-2 text-base text-black/55">Арт. 55-BZ / Шерсть Super 150s</p>
</div>
</article>
</div>
</div>
</section>

<section aria-label="Женская одежда" className="pb-16 sm:pb-20 lg:pb-24" id="womens-wear">
<div className="border-t border-black/10 pt-10">
<div className="max-w-3xl">
<h2 className="text-xl sm:text-2xl font-medium tracking-tight uppercase text-black">ЖЕНСКАЯ ЛИНИЯ</h2>
</div>
<div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-12 md:gap-12">
<article className="group md:col-span-5">
<div className="overflow-hidden bg-black/[0.02]">
<img alt="Платье" className="aspect-[3/4] transition-transform duration-700 ease-out group-hover:scale-105 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ec0dc1e-3553-4478-8ee4-0dab1b21fc96_1600w.jpg"/>
</div>
<p className="mt-4 text-xs font-medium tracking-[0.22em] uppercase text-black/70">ПЛАТЬЯ</p>
</article>
<article className="group md:col-span-4 md:mt-20">
<div className="overflow-hidden bg-black/[0.02]">
<img alt="Блуза" className="aspect-[2/3] transition-transform duration-700 ease-out group-hover:scale-105 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7ea47c9-a11a-4d4a-a5fe-e41cc6604a00_800w.jpg"/>
</div>
<p className="uppercase text-xs font-medium text-black/70 tracking-[0.22em] mt-4">ПЛАТЬЯ</p>
</article>
<article className="group md:col-span-3">
<div className="overflow-hidden bg-black/[0.02]">
<img alt="Капсула" className="aspect-[3/5] transition-transform duration-700 ease-out group-hover:scale-105 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b64afc39-d403-4d82-9db8-243340bd5a56_800w.jpg"/>
</div>
<p className="mt-4 text-xs font-medium tracking-[0.22em] uppercase text-black/70">КАПСУЛЫ</p>
</article>
<article className="group col-span-2 md:col-span-6 md:mt-12">
<div className="overflow-hidden bg-black/[0.02]">
<img alt="Платье (деталь)" className="aspect-[16/9] transition-transform duration-700 ease-out group-hover:scale-105 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dda5d04a-12e4-4a57-a081-e6b74091e2d8_1600w.jpg"/>
</div>
<p className="mt-4 text-xs font-medium tracking-[0.22em] uppercase text-black/70">ЖУРНАЛЬНАЯ ПОДАЧА
                        </p>
</article>
</div>
</div>
</section>

<section aria-label="Детская одежда" className="pb-16 sm:pb-20 lg:pb-24" id="kids-wear">
<div className="rounded-3xl border border-black/10 bg-[#F9F7F5] px-4 sm:px-6 py-10">
<div className="max-w-3xl">
<h2 className="sm:text-2xl uppercase text-xl font-medium text-black tracking-tight">BAZILO KIDS</h2>
<p className="mt-4 text-base text-black/60">Гипоаллергенные ткани. Школьная форма и повседневный стиль
                    </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6">
<div className="overflow-hidden rounded-2xl bg-black/[0.02]">
<img alt="Kids 1" className="aspect-square transition-transform duration-700 ease-out hover:scale-105 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b441f04-78da-4295-84c8-a4c43f08f935_800w.jpg"/>
</div>
<div className="overflow-hidden rounded-2xl bg-black/[0.02]">
<img alt="Kids 2" className="aspect-square transition-transform duration-700 ease-out hover:scale-105 w-full object-cover" src="https://basket-17.wbbasket.ru/vol2707/part270753/270753886/images/big/1.webp?w=800&amp;q=80"/>
</div>
<div className="overflow-hidden rounded-2xl bg-black/[0.02]">
<img alt="Kids 3" className="aspect-square transition-transform duration-700 ease-out hover:scale-105 w-full object-cover" src="https://basket-21.wbbasket.ru/vol3664/part366472/366472276/images/c516x688/1.webp?w=800&amp;q=80"/>
</div>
<div className="overflow-hidden rounded-2xl">
<img alt="Kids 4" className="aspect-square transition-transform duration-700 ease-out hover:scale-105 w-full object-cover" src="https://cdn.crockid.ru/crockid/catalog/thumbs/4_b0e72b03-10de-11ef-a973-3cecef7f0f5b.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section aria-label="Материалы и качество" className="pb-16 sm:pb-20 lg:pb-24">
<div className="border-t border-black/10 pt-10">
<div className="max-w-3xl">
<h2 className="text-xl sm:text-2xl font-medium tracking-tight uppercase text-black">ВНИМАНИЕ К ДЕТАЛЯМ
                    </h2>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">
<figure className="group">
<div className="mx-auto overflow-hidden rounded-full bg-black/[0.02] border border-black/10 max-w-xs">
<img alt="Синяя хлопковая ткань на столе" className="aspect-square transition-transform duration-700 ease-out group-hover:scale-110 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69995bdb-d6ba-4234-be15-e35c9ef991b0_800w.jpg"/>
</div>
<figcaption className="mt-5 text-center text-sm font-medium tracking-[0.22em] uppercase text-black/70">
                            ЕГИПЕТСКИЙ ХЛОПОК</figcaption>
</figure>
<figure className="group">
<div className="mx-auto overflow-hidden rounded-full bg-black/[0.02] border border-black/10 max-w-xs">
<img alt="Текстура шелка" className="aspect-square transition-transform duration-700 ease-out group-hover:scale-110 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31acefa1-c16e-4d40-9151-b7401c3a9d1e_800w.jpg"/>
</div>
<figcaption className="mt-5 text-center text-sm font-medium tracking-[0.22em] uppercase text-black/70">
                            НАТУРАЛЬНЫЙ ШЕЛК</figcaption>
</figure>
<figure className="group">
<div className="mx-auto overflow-hidden rounded-full bg-black/[0.02] border border-black/10 max-w-xs">
<img alt="Фурнитура" className="aspect-square transition-transform duration-700 ease-out group-hover:scale-110 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cfd1202-5577-4f42-8437-39be97153a3f_800w.png"/>
</div>
<figcaption className="mt-5 text-center text-sm font-medium tracking-[0.22em] uppercase text-black/70">
                            ПРЕМИУМ ПУГОВИЦЫ</figcaption>
</figure>
</div>
</div>
</section>

<section aria-label="Private label" className="sm:pb-20 lg:pb-24 pb-16">
<div className="overflow-hidden rounded-3xl border border-black/10 bg-[#1A1A1A] text-white">
<div className="grid lg:grid-cols-2">
<div className="sm:px-10 lg:py-14 pt-12 pr-6 pb-12 pl-6 bg-[#4A3221] h-full">
<p className="text-xs font-medium tracking-[0.26em] uppercase text-white/70">B2B / PRIVATE LABEL</p>
<h2 className="mt-5 text-2xl sm:text-3xl font-medium tracking-tight uppercase text-white">ВАШ БРЕНД ПОД КЛЮЧ</h2>
<div className="mt-6 h-px w-24 bg-white/20"></div>
<p className="mt-6 text-base text-white/75">
                            Полный цикл упаковки для маркетплейсов и бутиков. Мы разработаем лекала, отошьем партию и
                            нанесем ваш логотип (бирки, вышивка, упаковка).
                        </p>
<div className="mt-9 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-xs font-medium tracking-[0.22em] uppercase text-white hover:bg-white/15 transition-colors" href="#lead">
<span>ОБСУДИТЬ ПРОЕКТ</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-medium tracking-[0.22em] uppercase text-white/90 hover:border-white/35 transition-colors" href="#kontakty">
<span>КОНТАКТЫ</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<div className="relative">
<img alt="Брендированная бирка / упаковка" className="aspect-[4/3] lg:aspect-auto w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7ea47c9-a11a-4d4a-a5fe-e41cc6604a00_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/40 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</section>

<section aria-label="Форма заявки" className="pb-16 sm:pb-20 lg:pb-24" id="lead">
<div className="sm:px-10 bg-[#D4C5B9] border-black/10 border rounded-3xl pt-12 pr-6 pb-12 pl-6">
<div className="grid gap-10 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<p className="text-xs font-medium tracking-[0.26em] uppercase text-black/70">ЗАЯВКА ДЛЯ B2B</p>
<h2 className="mt-5 text-2xl sm:text-3xl font-medium tracking-tight uppercase text-[#1A1A1A]">
        РАССЧИТАТЬ СТОИМОСТЬ ПАРТИИ
      </h2>
<p className="mt-5 text-base text-black/60">Оставьте контакты — мы вернемся с расчетом по срокам, тканям и
        комплектации.</p>
</div>
<form action="https://api.web3forms.com/submit" className="lg:col-span-7" method="POST">
<input name="access_key" type="hidden" value="69152d22-453b-4502-a7b2-944707c72e76"/>
<div className="grid gap-4 sm:grid-cols-2">
<label className="block">
<span className="text-xs font-medium tracking-[0.22em] uppercase text-black/70">Имя</span>
<input className="mt-2 w-full rounded-2xl border border-black/15 bg-white/70 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20" name="name" placeholder="Ваше имя" required="" type="text"/>
</label>
<label className="block">
<span className="text-xs font-medium tracking-[0.22em] uppercase text-black/70">Телефон</span>
<input className="mt-2 w-full rounded-2xl border border-black/15 bg-white/70 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20" name="phone" placeholder="+996 ___ __ __ __" type="tel"/>
</label>
<label className="block sm:col-span-2">
<span className="text-xs font-medium tracking-[0.22em] uppercase text-black/70">Email</span>
<input className="mt-2 w-full rounded-2xl border border-black/15 bg-white/70 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20" name="email" placeholder="your@email.com" required="" type="email"/>
</label>
<label className="block sm:col-span-2">
<span className="text-xs font-medium tracking-[0.22em] uppercase text-black/70">Комментарий</span>
<textarea className="mt-2 w-full rounded-2xl border border-black/15 bg-white/70 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20" name="message" placeholder="Объем партии, изделия, ткани, сроки" required="" rows="4"></textarea>
</label>
</div>
<div className="mt-6 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-7 py-3 text-xs font-medium tracking-[0.22em] uppercase text-white hover:bg-black transition-colors" type="submit">
<span>ОТПРАВИТЬ ЗАЯВКУ</span>
<svg className="lucide lucide-arrow-right h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="overflow-hidden flex flex-col min-h-[800px] bg-[#181311] w-full border-white/5 border-t pt-32 pb-8 relative items-center">

<div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top_center,rgba(212,197,185,0.08)_0%,transparent_70%)] z-10 pointer-events-none">
</div>

<div className="pointer-events-none absolute inset-0 z-40 w-full h-full opacity-30 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}>
</div>

<div className="relative z-30 flex flex-col items-center text-center px-6 mb-24 w-full">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-normal text-white tracking-tight mb-2">Готовы создать
      историю</h2>
<h2 className="md:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight font-manrope">которая вас
      выделит ?</h2>
<a className="flex items-center justify-center gap-3 hover:bg-white hover:text-[#181311] transition-all duration-300 group text-sm text-white font-manrope border-white/20 border rounded-full mt-10 pt-3.5 pr-8 pb-3.5 pl-8" href="https://wa.me/996557154550?text=Здравствуйте,%20пишу%20из%20сайта%20Baziko%20Premium" rel="noopener noreferrer" target="_blank">
<span className="">Связаться с нами</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 py-12 border-t border-b border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm font-manrope text-white/50 mb-8">

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Меню</h4>
<a className="hover:text-white transition-colors w-fit" href="#">Галерея</a>
<a className="hover:text-white transition-colors w-fit" href="#about-us-parallax" onclick="document.querySelector('#about-us-parallax')?.scrollIntoView({behavior:'smooth'}); return false;">О нас</a>
<a className="hover:text-white transition-colors w-fit" href="#">Услуги</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Социальные сети</h4>
<a className="hover:text-white transition-colors w-fit" href="https://www.instagram.com/baziko.premium?igsh=MXdqa3doOHU4MDdpaA==">Instagram</a>
<a className="hover:text-white transition-colors w-fit" href="https://t.me/bazikopremium">Telegram</a>
<a className="hover:text-white transition-colors w-fit" href="https://wa.me/996557154550?text=Здравствуйте,%20пишу%20из%20сайта%20Baziko%20Premium" rel="noopener noreferrer" target="_blank">WhatsApp</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Связь с нами</h4>
<a className="hover:text-white transition-colors w-fit" href="mailto:bazikokg@gmail.com">bazikokg@gmail.com</a>
<div className="flex flex-col gap-2 mt-2">
<span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Отдел продаж</span>
<a className="hover:text-white transition-colors w-fit" href="tel:+996500048555">+996 500 048 555</a>
<a className="hover:text-white transition-colors w-fit" href="tel:+996995154550">+996 995 154 550</a>
<a className="hover:text-white transition-colors w-fit" href="tel:+996557154550">+996 557 154 550</a>
</div>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Адрес</h4>
<p className="leading-relaxed text-white/60">
        Кыргызстан, Бишкек<br/>
<span className="block mt-2">ул. Асаналиева 96 — 1 фабрика</span>
<span className="block mt-1">ул. Абдыкадырова 101 — 2 фабрика</span>
</p>
</div>
</div>

<div className="flex-grow flex overflow-hidden min-h-[400px] md:min-h-[500px] w-full relative items-center justify-center">
<style>
      @keyframes premiumSpin3D {
        0% {
          transform: rotateX(15deg) rotateY(0deg) rotateZ(5deg);
        }

        100% {
          transform: rotateX(15deg) rotateY(360deg) rotateZ(5deg);
        }
      }

      @keyframes luxuriousShimmer {
        0% {
          background-position: 200% center;
        }

        100% {
          background-position: -200% center;
        }
      }

      .volumetric-layer {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        will-change: transform;
      }
    </style>

<div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-90" style={{perspective: '1200px'}}>
<div className="relative w-[250px] h-[250px] md:w-[500px] md:h-[500px]" style={{transformStyle: 'preserve-3d', animation: 'premiumSpin3D 20s infinite linear'}}>

<img alt="" className="volumetric-layer drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.1) blur(2px)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.2)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.3)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.4)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.5)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.6)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.7)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.8)'}}/>
<img alt="" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(0.9)'}}/>
<img alt="BAZIKO Logo Front" className="volumetric-layer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{filter: 'brightness(1) drop-shadow(rgba(212, 197, 185, 0.4) 0px 0px 15px)'}}/>
</div>
</div>

<h1 className="relative z-20 text-[18vw] leading-[0.85] font-manrope font-semibold uppercase tracking-tighter text-transparent bg-clip-text text-center select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] w-full px-4" style="
                background-image: linear-gradient(
                    -75deg,
                    #A89B90 10%,
                    #ffffff 30%,
                    #D4C5B9 50%,
                    #ffffff 70%,
                    #A89B90 90%
                );
                background-size: 200% auto;
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                animation: luxuriousShimmer 6s linear infinite;
            ">
      BAZIKO<br/>PREMIUM
    </h1>
</div>

<div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-end mt-4 pb-4">
<span className="md:mb-0 text-xs text-white/40 tracking-wide font-manrope mb-4">© 2026 BAZIKO PREMIUM. Все права защищены.</span>
<div className="flex gap-6 font-manrope text-xs text-white/40 tracking-wide">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
</div>
</div>
</footer>

<a aria-label="Написать в WhatsApp" className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a]" href="https://wa.me/996557154550?text=Здравствуйте,%20пишу%20из%20сайта%20Baziko%20Premium" rel="noopener noreferrer" target="_blank">
<iconify-icon className="" height="32" icon="mdi:whatsapp" style={{color: 'rgb(255, 255, 255)'}} width="32"></iconify-icon>
</a>


    </>
  );
}

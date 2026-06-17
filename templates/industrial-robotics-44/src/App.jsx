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



    const slides = Array.from(document.querySelectorAll('.slide'));
    const total = slides.length;

    function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

    function showSlide(n){
      const idx = clamp(n, 1, total);
      slides.forEach(s => s.classList.add('hidden'));
      const active = slides.find(s => Number(s.dataset.slide) === idx);
      if(active) active.classList.remove('hidden');
      window.location.hash = `#${idx}`;
      current = idx;
    }

    let current = 1;

    function parseHash(){
      const h = (window.location.hash || '').replace('#','').trim();
      const n = Number(h);
      return Number.isFinite(n) && n>=1 && n<=total ? n : null;
    }

    document.getElementById('prevBtn').addEventListener('click', () => showSlide(current - 1));
    document.getElementById('nextBtn').addEventListener('click', () => showSlide(current + 1));

    window.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowLeft') showSlide(current - 1);
      if(e.key === 'ArrowRight') showSlide(current + 1);

      if(/^[1-9]$/.test(e.key)){
        const n = Number(e.key);
        showSlide(n);
      }
      if(e.key === '0') showSlide(10);
      if(e.key === '-') showSlide(11);
    });

    window.addEventListener('hashchange', () => {
      const n = parseHash();
      if(n) showSlide(n);
    });

    const initial = parseHash() || 1;
    showSlide(initial);
  
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
      

<div className="min-h-screen w-full flex items-center justify-center p-6 sm:p-10">
<div className="w-full max-w-[90rem]">

<div className="relative w-full aspect-video rounded-[2.75rem] overflow-hidden bg-white shadow-[0_30px_80px_rgba(47,51,52,0.18)]" id="deck">

<div className="absolute inset-0">

<section className="slide absolute inset-0 p-10 sm:p-14 lg:p-16 text-white hidden" data-slide="1" style="background:
              radial-gradient(1100px 600px at 20% 25%, rgba(139,92,246,0.35), rgba(0,0,0,0) 60%),
              radial-gradient(900px 540px at 85% 15%, rgba(59,130,246,0.22), rgba(0,0,0,0) 55%),
              linear-gradient(135deg, #050607, #0B1020 55%, #101035);
            ">

<div className="absolute inset-0 opacity-[0.20] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22280%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22280%22 height=%22280%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E\')', mixBlendMode: 'overlay'}}></div>
<div className="relative h-full grid grid-cols-12 gap-6">
<div className="col-span-12 lg:col-span-8 flex flex-col justify-between">
<div className="pt-2">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/80">DECK 2026</span>
<span className="h-4 w-px bg-white/20"></span>
<span className="text-xs sm:text-sm text-white/80">ускорение роботизации</span>
</div>
</div>
<div className="max-w-4xl">
<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.02]">
                    Роботизация.<br/>Пенза 2026
                  </h1>
<div className="mt-6 flex flex-col gap-2 text-sm sm:text-base text-white/75">
<div className="flex items-center gap-2">
<span>Форум промышленности•Правительство Пензенской области</span>
</div>
<div className="flex items-center gap-2">
<span>Прайд-Автоматикс</span>
</div>
</div>
</div>

<div className="mt-10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-3.5 w-3.5 rounded-[0.35rem] bg-white/90"></div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-white/65">
<span className="font-medium">Контекст</span>
<span className="h-3 w-px bg-white/15"></span>
<span>Кейсы</span>
<span className="h-3 w-px bg-white/15"></span>
<span>План 2026</span>
</div>
</div>
<div className="text-xs sm:text-sm text-white/70 tabular-nums">01</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-4 hidden lg:flex flex-col justify-end">
<div className="rounded-[2.5rem] border border-white/12 bg-white/5 p-8">
<div className="flex items-start justify-between">
<div>
<div className="text-xs tracking-[0.18em] uppercase text-white/60 font-medium">Фокус</div>
<div className="mt-2 text-lg text-white/85">типовые РТК + быстрый эффект</div>
</div>
<iconify-icon className="text-white/70 text-2xl" icon="solar:programming-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
<div className="mt-6 grid grid-cols-2 gap-3">
<div className="rounded-[1.75rem] bg-white/6 border border-white/10 p-4">
<div className="text-xs text-white/55">срок до эффекта</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-white/90">3–6 мес</div>
</div>
<div className="rounded-[1.75rem] bg-white/6 border border-white/10 p-4">
<div className="text-xs text-white/55">типичная окупаемость</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-white/90">7–18 мес</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 p-10 sm:p-14 lg:p-16 bg-white hidden" data-slide="2">
<div className="h-full grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-7">
<div className="h-full rounded-[4rem] overflow-hidden border border-[#DDE1E1] bg-[#F1F3F3] relative">
<div className="absolute inset-0" style="background:
                      radial-gradient(900px 540px at 30% 25%, rgba(255,106,85,0.10), rgba(0,0,0,0) 55%),
                      linear-gradient(135deg, rgba(47,51,52,0.06), rgba(47,51,52,0.02));
                    ">
</div>
<div className="relative h-full p-8 sm:p-10 flex flex-col justify-between">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-3 rounded-full bg-white/70 border border-[#DDE1E1] px-5 py-2">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/80">PHOTO</span>
<span className="text-xs sm:text-sm text-[#2F3334]/70">factory</span>
</div>
<div className="hidden sm:flex items-center gap-2 text-[#2F3334]/55 text-xs sm:text-sm">
<iconify-icon className="text-xl" icon="solar:camera-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span>placeholder</span>
</div>
</div>
<div className="max-w-lg">
<div className="text-sm sm:text-base text-[#2F3334]/60">Производство → стандартизация → тираж</div>
<div className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[#2F3334]">
                        Наращивание темпа — вопрос системности
                      </div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 flex flex-col">
<div className="rounded-[4rem] bg-[#2F3334] text-white border border-white/10 p-10 sm:p-12 flex-1 flex flex-col justify-between">
<div>
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/60">Контекст</div>
<h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                      Мир уже ускорился
                    </h2>
<div className="mt-4 text-lg sm:text-xl text-white/70">
                      роботов на 10 000 сотрудников
                    </div>
</div>
<div className="mt-10 grid grid-cols-2 gap-4">

<div className="rounded-[2rem] bg-white/6 border border-white/10 p-6">
<div className="text-xs tracking-[0.18em] uppercase text-white/55 font-medium">Мир (2024)</div>
<div className="mt-3 text-4xl font-semibold tracking-tight tabular-nums">177</div>
</div>
<div className="rounded-[2rem] bg-white/6 border border-white/10 p-6">
<div className="text-xs tracking-[0.18em] uppercase text-white/55 font-medium">Азия</div>
<div className="mt-3 text-4xl font-semibold tracking-tight tabular-nums">204</div>
</div>
<div className="rounded-[2rem] bg-white/6 border border-white/10 p-6">
<div className="text-xs tracking-[0.18em] uppercase text-white/55 font-medium">Европа</div>
<div className="mt-3 text-4xl font-semibold tracking-tight tabular-nums">148</div>
</div>
<div className="rounded-[2rem] bg-white/6 border border-white/10 p-6">
<div className="text-xs tracking-[0.18em] uppercase text-white/55 font-medium">Америки</div>
<div className="mt-3 text-4xl font-semibold tracking-tight tabular-nums">131</div>
</div>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-3.5 w-3.5 rounded-[0.35rem] bg-[#2F3334]"></div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-[#2F3334]/55">
<span className="font-medium">Контекст</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span>Кейсы</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span>План 2026</span>
</div>
</div>
<div className="text-xs sm:text-sm text-[#2F3334]/60 tabular-nums">02</div>
</div>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 p-10 sm:p-14 lg:p-16 hidden" data-slide="3" style={{background: '#2F3334'}}>
<div className="h-full grid grid-cols-12 gap-6 text-white">
<div className="col-span-12">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-3 rounded-full bg-white/8 border border-white/10 px-5 py-2">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/70">Факты</span>
<span className="text-xs sm:text-sm text-white/60">география установок</span>
</div>
<div className="hidden sm:flex items-center gap-2 text-white/55 text-xs sm:text-sm">
<iconify-icon className="text-xl" icon="solar:chart-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span>структура рынка</span>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
<div className="relative rounded-[4rem] border border-white/10 bg-white/5 p-10 sm:p-12">
<div className="absolute left-0 top-10 bottom-10 w-1 rounded-full" style={{background: '#FF6A55'}}></div>
<div className="pl-6">
<div className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight tabular-nums leading-[0.95]">74%</div>
<div className="mt-3 text-lg sm:text-xl text-white/75">новых установок в Азии</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
<div className="relative rounded-[4rem] border border-white/10 bg-white/5 p-10 sm:p-12">
<div className="absolute left-0 top-10 bottom-10 w-1 rounded-full" style={{background: '#FF6A55'}}></div>
<div className="pl-6">
<div className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight tabular-nums leading-[0.95]">54%</div>
<div className="mt-3 text-lg sm:text-xl text-white/75">в Китае</div>
</div>
</div>
</div>

<div className="col-span-12 self-end">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-3.5 w-3.5 rounded-[0.35rem] bg-white/90"></div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-white/65">
<span className="font-medium">Контекст</span>
<span className="h-3 w-px bg-white/15"></span>
<span>Кейсы</span>
<span className="h-3 w-px bg-white/15"></span>
<span>План 2026</span>
</div>
</div>
<div className="text-xs sm:text-sm text-white/70 tabular-nums">03</div>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 p-10 sm:p-14 lg:p-16 bg-white hidden" data-slide="4">
<div className="h-full grid grid-cols-12 gap-6">
<div className="col-span-12 grid grid-cols-12 gap-6">
<div className="col-span-12 lg:col-span-7">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                    Россия: разрыв и цель
                  </h2>
</div>
<div className="col-span-12 lg:col-span-5 flex items-end">
<div className="text-lg sm:text-xl text-[#2F3334]/60 leading-snug">
<div>нужно ускорять внедрение</div>
<div>и тиражировать типовые решения</div>
</div>
</div>
</div>
<div className="col-span-12">
<div className="rounded-[4.25rem] bg-[#F1F3F3] border border-[#DDE1E1] p-8 sm:p-10 lg:p-12">
<div className="flex items-center justify-between gap-6 flex-wrap">
<div className="inline-flex items-center gap-3 rounded-full bg-white border border-[#DDE1E1] px-5 py-2">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/70">Фактор</span>
<span className="text-xs sm:text-sm text-[#2F3334]/60">скорость внедрения</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full px-5 py-2 border border-[#DDE1E1] bg-white">
<span className="text-sm sm:text-base font-medium tracking-tight text-[#2F3334]">×4–5</span>
<span className="text-xs sm:text-sm text-[#2F3334]/55">Chip</span>
</div>
</div>

<div className="mt-8 grid grid-cols-12 gap-4 sm:gap-6">
<div className="col-span-12 md:col-span-4">
<div className="h-full rounded-[2rem] bg-white border border-[#DDE1E1] p-8">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums leading-[0.95]">~40</div>
<div className="mt-3 text-sm sm:text-base text-[#2F3334]/60">конец 2025</div>
</div>
</div>
<div className="col-span-12 md:col-span-4 md:pt-6">
<div className="h-full rounded-[2rem] bg-white border border-[#DDE1E1] p-8">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums leading-[0.95]">177</div>
<div className="mt-3 text-sm sm:text-base text-[#2F3334]/60">мир 2024</div>
</div>
</div>
<div className="col-span-12 md:col-span-4 md:pt-12">
<div className="h-full rounded-[2rem] bg-white border border-[#DDE1E1] p-8">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums leading-[0.95]">145</div>
<div className="mt-3 text-sm sm:text-base text-[#2F3334]/60">цель 2030</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 self-end">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-3.5 w-3.5 rounded-[0.35rem] bg-[#2F3334]"></div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-[#2F3334]/55">
<span className="font-medium">Контекст</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span>Кейсы</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span>План 2026</span>
</div>
</div>
<div className="text-xs sm:text-sm text-[#2F3334]/60 tabular-nums">04</div>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 p-10 sm:p-14 lg:p-16 bg-white hidden" data-slide="5">
<div className="h-full grid grid-cols-12 gap-6">
<div className="col-span-12">
<div className="rounded-[4.25rem] bg-[#F1F3F3] border border-[#DDE1E1] p-10 sm:p-12">
<div className="flex items-start justify-between gap-6 flex-wrap">
<div>
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/60">Highlights</div>
<h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                        С чего начинать: 5 операций<br className="hidden sm:block"/> с быстрым эффектом
                      </h2>
</div>
<div className="hidden md:flex items-center gap-2 text-[#2F3334]/55">
<iconify-icon className="text-2xl" icon="solar:bolt-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span className="text-sm">быстрый ROI</span>
</div>
</div>
<div className="mt-10 grid grid-cols-12 gap-4 sm:gap-6">

<div className="col-span-12 md:col-span-6">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-8">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">Операция</div>
<div className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3334]">Паллетирование</div>
</div>
</div>
<div className="col-span-12 md:col-span-6">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-8">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">Операция</div>
<div className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3334]">Сварка</div>
</div>
</div>
<div className="col-span-12 md:col-span-6">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-8">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">Операция</div>
<div className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3334]">Загрузка ЧПУ</div>
</div>
</div>
<div className="col-span-12 md:col-span-6">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-8">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">Операция</div>
<div className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3334]">Упаковка / конвейер</div>
</div>
</div>
<div className="col-span-12">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-8 flex items-center justify-between gap-6 flex-wrap">
<div>
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">Операция</div>
<div className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3334]">Логистика AGV</div>
</div>
<div className="flex items-center gap-3 rounded-full bg-[#F1F3F3] border border-[#DDE1E1] px-5 py-2">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">минимум</span>
<span className="text-xs sm:text-sm text-[#2F3334]/60">перестроек</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 self-end">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-3.5 w-3.5 rounded-[0.35rem] bg-[#2F3334]"></div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-[#2F3334]/55">
<span className="font-medium">Контекст</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span>Кейсы</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span>План 2026</span>
</div>
</div>
<div className="text-xs sm:text-sm text-[#2F3334]/60 tabular-nums">05</div>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 p-10 sm:p-14 lg:p-16 bg-white hidden" data-slide="6">
<div className="h-full grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-7">
<div className="h-full rounded-[4rem] overflow-hidden border border-[#DDE1E1] bg-[#F1F3F3] relative">
<div className="absolute inset-0" style="background:
                      radial-gradient(900px 540px at 25% 20%, rgba(255,106,85,0.12), rgba(0,0,0,0) 60%),
                      linear-gradient(135deg, rgba(47,51,52,0.06), rgba(47,51,52,0.02));
                    ">
</div>
<div className="relative h-full p-8 sm:p-10 flex flex-col justify-between">
<div className="inline-flex items-center gap-3 rounded-full bg-white/70 border border-[#DDE1E1] px-5 py-2 w-fit">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/80">PHOTO</span>
<span className="text-xs sm:text-sm text-[#2F3334]/70">welding cell</span>
</div>
<div className="flex items-end justify-between gap-6 flex-wrap">
<div className="text-sm sm:text-base text-[#2F3334]/60">Сварка → качество → повторяемость</div>
<div className="hidden sm:flex items-center gap-2 text-[#2F3334]/55 text-xs sm:text-sm">
<iconify-icon className="text-xl" icon="solar:settings-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span>РТК</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 flex flex-col">
<div className="rounded-[4rem] bg-[#2F3334] text-white border border-white/10 p-10 sm:p-12 flex-1 flex flex-col justify-between">
<div>
<div className="inline-flex items-center rounded-full bg-white/8 border border-white/10 px-5 py-2">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/70">КЕЙС 1</span>
</div>
<h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                      ЗАО «ЗМК»•Энгельс
                    </h2>
<div className="mt-4 text-lg sm:text-xl text-white/70">Роботизация сварки фиттингов</div>
<div className="mt-8 text-lg sm:text-xl text-white/80">
                      Запущено 3 РТК (+1 на дочернем предприятии)
                    </div>
</div>
<div className="flex items-center gap-3 rounded-full bg-white/6 border border-white/10 px-5 py-2 w-fit">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/60">эффект</span>
<span className="text-xs sm:text-sm text-white/70">рост выпуска</span>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-3.5 w-3.5 rounded-[0.35rem] bg-[#2F3334]"></div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-[#2F3334]/55">
<span>Контекст</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span className="font-medium">Кейсы</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span>План 2026</span>
</div>
</div>
<div className="text-xs sm:text-sm text-[#2F3334]/60 tabular-nums">06</div>
</div>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 p-10 sm:p-14 lg:p-16 bg-white hidden" data-slide="7">
<div className="h-full grid grid-cols-12 gap-6">
<div className="col-span-12 flex items-start justify-between gap-6 flex-wrap">
<div>
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/60">КЕЙС 1 — KPI</div>
<h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                    Эффект в цифрах
                  </h2>
</div>
<div className="inline-flex items-center gap-3 rounded-full bg-[#F1F3F3] border border-[#DDE1E1] px-5 py-2">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/60">внедрение</span>
<span className="text-xs sm:text-sm text-[#2F3334]/60">сварка</span>
</div>
</div>

<div className="col-span-12 grid grid-cols-12 gap-4 sm:gap-6">
<div className="col-span-12 lg:col-span-7 grid grid-cols-12 gap-4 sm:gap-6">
<div className="col-span-12 sm:col-span-7">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-8 h-full">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">выпуск</div>
<div className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums leading-[1.02]">60→240</div>
<div className="mt-3 text-sm sm:text-base text-[#2F3334]/60">вагонокомплектов (×4)</div>
</div>
</div>
<div className="col-span-12 sm:col-span-5">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-[#F1F3F3] p-8 h-full">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">режим</div>
<div className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums leading-[1.02]">3</div>
<div className="mt-3 text-sm sm:text-base text-[#2F3334]/60">смены</div>
</div>
</div>
<div className="col-span-12 sm:col-span-5">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-8 h-full">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">ассортимент</div>
<div className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums leading-[1.02]">+22</div>
<div className="mt-3 text-sm sm:text-base text-[#2F3334]/60">детали номенклатуры</div>
</div>
</div>
<div className="col-span-12 sm:col-span-7">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-[#F1F3F3] p-8 h-full">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">комплекс</div>
<div className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums leading-[1.02]">3 РТК + 1 РТК</div>
<div className="mt-3 text-sm sm:text-base text-[#2F3334]/60">на дочернем предприятии</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-5">
<div className="h-full rounded-[2rem] border border-[#DDE1E1] bg-[#2F3334] text-white p-10 sm:p-12 flex flex-col justify-between">
<div className="flex items-center justify-between">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/60">окупаемость</div>
<div className="h-10 w-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
<div className="h-2 w-2 rounded-full" style={{background: '#FF6A55'}}></div>
</div>
</div>
<div>
<div className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight tabular-nums leading-[0.95]">
                        7
                      </div>
<div className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">месяцев</div>
</div>
<div className="text-sm sm:text-base text-white/70">ключевая цифра проекта</div>
</div>
</div>
</div>

<div className="col-span-12 self-end">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-3.5 w-3.5 rounded-[0.35rem] bg-[#2F3334]"></div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-[#2F3334]/55">
<span>Контекст</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span className="font-medium">Кейсы</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span>План 2026</span>
</div>
</div>
<div className="text-xs sm:text-sm text-[#2F3334]/60 tabular-nums">07</div>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 p-10 sm:p-14 lg:p-16 bg-white hidden" data-slide="8">
<div className="h-full grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-7">
<div className="h-full rounded-[4rem] overflow-hidden border border-[#DDE1E1] bg-[#F1F3F3] relative">
<div className="absolute inset-0" style="background:
                      radial-gradient(900px 540px at 25% 20%, rgba(255,106,85,0.12), rgba(0,0,0,0) 60%),
                      linear-gradient(135deg, rgba(47,51,52,0.06), rgba(47,51,52,0.02));
                    ">
</div>
<div className="relative h-full p-8 sm:p-10 flex flex-col justify-between">
<div className="inline-flex items-center gap-3 rounded-full bg-white/70 border border-[#DDE1E1] px-5 py-2 w-fit">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/80">PHOTO</span>
<span className="text-xs sm:text-sm text-[#2F3334]/70">palletizing line</span>
</div>
<div className="flex items-end justify-between gap-6 flex-wrap">
<div className="text-sm sm:text-base text-[#2F3334]/60">Паллетирование → стабильность → пропускная способность</div>
<div className="hidden sm:flex items-center gap-2 text-[#2F3334]/55 text-xs sm:text-sm">
<iconify-icon className="text-xl" icon="solar:box-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span>линия</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 flex flex-col">
<div className="rounded-[4rem] bg-[#2F3334] text-white border border-white/10 p-10 sm:p-12 flex-1 flex flex-col justify-between">
<div>
<div className="inline-flex items-center rounded-full bg-white/8 border border-white/10 px-5 py-2">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/70">КЕЙС 2</span>
</div>
<h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                      «Невская косметика»•Ангарск
                    </h2>
<div className="mt-4 text-lg sm:text-xl text-white/70">Паллетирование коробок</div>
<div className="mt-8 text-lg sm:text-xl text-white/80">
                      Убрали узкое горло и вывели линию на 100%
                    </div>
</div>
<div className="flex items-center gap-3 rounded-full bg-white/6 border border-white/10 px-5 py-2 w-fit">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/60">эффект</span>
<span className="text-xs sm:text-sm text-white/70">без ручного труда</span>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-3.5 w-3.5 rounded-[0.35rem] bg-[#2F3334]"></div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-[#2F3334]/55">
<span>Контекст</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span className="font-medium">Кейсы</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span>План 2026</span>
</div>
</div>
<div className="text-xs sm:text-sm text-[#2F3334]/60 tabular-nums">08</div>
</div>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 p-10 sm:p-14 lg:p-16 bg-white hidden" data-slide="9">
<div className="h-full grid grid-cols-12 gap-6">
<div className="col-span-12 flex items-start justify-between gap-6 flex-wrap">
<div>
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/60">КЕЙС 2 — KPI</div>
<h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                    Пропускная способность
                  </h2>
</div>
<div className="inline-flex items-center gap-3 rounded-full bg-[#F1F3F3] border border-[#DDE1E1] px-5 py-2">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/60">внедрение</span>
<span className="text-xs sm:text-sm text-[#2F3334]/60">паллетирование</span>
</div>
</div>
<div className="col-span-12 grid grid-cols-12 gap-4 sm:gap-6">
<div className="col-span-12 lg:col-span-7">
<div className="h-full rounded-[2rem] border border-[#DDE1E1] bg-[#2F3334] text-white p-10 sm:p-12 flex flex-col justify-between">
<div className="flex items-center justify-between">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/60">главная метрика</div>
<div className="h-10 w-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-white/70 text-2xl" icon="solar:timer-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
<div>
<div className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight tabular-nums leading-[0.98]">
                        13 860
                      </div>
<div className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">коробок / 24ч</div>
</div>
<div className="text-sm sm:text-base text-white/70">стабильный выпуск</div>
</div>
</div>
<div className="col-span-12 lg:col-span-5 grid grid-cols-12 gap-4 sm:gap-6">
<div className="col-span-12">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-8">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">загрузка линии</div>
<div className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums leading-[1.02]">80%→100%</div>
</div>
</div>
<div className="col-span-12 sm:col-span-6 lg:col-span-12">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-[#F1F3F3] p-8 h-full">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">персонал</div>
<div className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums leading-[1.02]">−3</div>
<div className="mt-3 text-sm sm:text-base text-[#2F3334]/60">человека / смена</div>
</div>
</div>
<div className="col-span-12 sm:col-span-6 lg:col-span-12">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-8 h-full">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">результат</div>
<div className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3334] leading-snug">
                        стабильный выпуск<br/>без ручного паллетирования
                      </div>
</div>
</div>
</div>
</div>

<div className="col-span-12 self-end">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-3.5 w-3.5 rounded-[0.35rem] bg-[#2F3334]"></div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-[#2F3334]/55">
<span>Контекст</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span className="font-medium">Кейсы</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span>План 2026</span>
</div>
</div>
<div className="text-xs sm:text-sm text-[#2F3334]/60 tabular-nums">09</div>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 p-10 sm:p-14 lg:p-16 bg-white hidden" data-slide="10">
<div className="h-full grid grid-cols-12 gap-6">
<div className="col-span-12">
<div className="flex items-start justify-between gap-6 flex-wrap">
<div>
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/60">Roadmap</div>
<h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                      План ускорения для региона (2026)
                    </h2>
</div>
<div className="hidden sm:flex items-center gap-3 rounded-full bg-[#F1F3F3] border border-[#DDE1E1] px-5 py-2">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/60">формат</span>
<span className="text-xs sm:text-sm text-[#2F3334]/60">конвейер внедрений</span>
</div>
</div>
</div>
<div className="col-span-12 grid grid-cols-12 gap-4 sm:gap-6">
<div className="col-span-12 lg:col-span-4">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-10 sm:p-12 h-full">
<div className="flex items-center justify-between">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">Goal 1</div>
<div className="h-10 w-10 rounded-full bg-[#F1F3F3] border border-[#DDE1E1] flex items-center justify-center">
<iconify-icon className="text-[#2F3334]/70 text-2xl" icon="solar:flag-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-8 text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums">20</div>
<div className="mt-2 text-lg sm:text-xl text-[#2F3334]/70">предприятий</div>
<div className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3334]">Пилоты</div>
</div>
</div>
<div className="col-span-12 lg:col-span-4">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-[#F1F3F3] p-10 sm:p-12 h-full">
<div className="flex items-center justify-between">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">Goal 2</div>
<div className="h-10 w-10 rounded-full bg-white border border-[#DDE1E1] flex items-center justify-center">
<iconify-icon className="text-[#2F3334]/70 text-2xl" icon="solar:layers-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-8 text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3334]">Типовые решения</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-white border border-[#DDE1E1] px-4 py-2 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/60">сварка</span>
<span className="inline-flex items-center rounded-full bg-white border border-[#DDE1E1] px-4 py-2 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/60">паллета</span>
<span className="inline-flex items-center rounded-full bg-white border border-[#DDE1E1] px-4 py-2 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/60">ЧПУ</span>
</div>
<div className="mt-8 text-sm sm:text-base text-[#2F3334]/60">минимум кастомизации</div>
</div>
</div>
<div className="col-span-12 lg:col-span-4">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-10 sm:p-12 h-full">
<div className="flex items-center justify-between">
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">Goal 3</div>
<div className="h-10 w-10 rounded-full bg-[#F1F3F3] border border-[#DDE1E1] flex items-center justify-center">
<iconify-icon className="text-[#2F3334]/70 text-2xl" icon="solar:user-check-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-8 text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3334]">Кадры</div>
<div className="mt-6 grid gap-3">
<div className="rounded-[1.75rem] bg-[#F1F3F3] border border-[#DDE1E1] p-5">
<div className="text-lg sm:text-xl font-medium tracking-tight text-[#2F3334]">обучение</div>
</div>
<div className="rounded-[1.75rem] bg-[#F1F3F3] border border-[#DDE1E1] p-5">
<div className="text-lg sm:text-xl font-medium tracking-tight text-[#2F3334]">аттестация</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-span-12">
<div className="rounded-[2rem] border border-[#DDE1E1] bg-white p-8 sm:p-10 flex items-center justify-between gap-6 flex-wrap">
<div className="text-lg sm:text-xl text-[#2F3334]/70">
                    Нужен конвейер внедрений, а не единичные проекты
                  </div>
<div className="h-px flex-1 min-w-24 bg-[#DDE1E1]"></div>
<div className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#2F3334]/55">2026</div>
</div>
</div>

<div className="col-span-12 self-end">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-3.5 w-3.5 rounded-[0.35rem] bg-[#2F3334]"></div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-[#2F3334]/55">
<span>Контекст</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span>Кейсы</span>
<span className="h-3 w-px bg-[#DDE1E1]"></span>
<span className="font-medium">План 2026</span>
</div>
</div>
<div className="text-xs sm:text-sm text-[#2F3334]/60 tabular-nums">10</div>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 p-10 sm:p-14 lg:p-16 text-white hidden" data-slide="11" style="background:
              radial-gradient(1100px 600px at 18% 30%, rgba(139,92,246,0.35), rgba(0,0,0,0) 60%),
              radial-gradient(900px 560px at 86% 18%, rgba(59,130,246,0.22), rgba(0,0,0,0) 55%),
              linear-gradient(135deg, #050607, #0B1020 55%, #101035);
            ">

<div className="absolute inset-0 opacity-[0.20] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22280%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22280%22 height=%22280%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E\')', mixBlendMode: 'overlay'}}></div>
<div className="relative h-full grid grid-cols-12 gap-6">
<div className="col-span-12 lg:col-span-9 flex flex-col justify-between">
<div className="pt-2">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2">
<span className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-white/80">Финал</span>
<span className="h-4 w-px bg-white/20"></span>
<span className="text-xs sm:text-sm text-white/80">вход через задачи</span>
</div>
</div>
<div className="max-w-5xl">
<h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.02]">
                    Дайте задачи—мы покажем эффект в цифрах
                  </h1>
<div className="mt-10 grid grid-cols-12 gap-3 sm:gap-4">

<div className="col-span-12 md:col-span-4">
<div className="h-full rounded-full bg-white/10 border border-white/15 px-6 py-5">
<div className="text-base sm:text-lg font-medium">Срок 3–6 мес до эффекта</div>
</div>
</div>
<div className="col-span-12 md:col-span-4">
<div className="h-full rounded-full bg-white/10 border border-white/15 px-6 py-5">
<div className="text-base sm:text-lg font-medium">Окупаемость 7–18 мес типично</div>
</div>
</div>
<div className="col-span-12 md:col-span-4">
<div className="h-full rounded-full bg-white/10 border border-white/15 px-6 py-5">
<div className="text-base sm:text-lg font-medium">Рост выпуска без роста штата</div>
</div>
</div>
</div>
</div>

<div className="mt-10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-3.5 w-3.5 rounded-[0.35rem] bg-white/90"></div>
<div className="flex items-center gap-4 text-xs sm:text-sm text-white/65">
<span>Контекст</span>
<span className="h-3 w-px bg-white/15"></span>
<span>Кейсы</span>
<span className="h-3 w-px bg-white/15"></span>
<span className="font-medium">План 2026</span>
</div>
</div>
<div className="text-xs sm:text-sm text-white/70 tabular-nums">11</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-3 hidden lg:flex flex-col justify-end">
<div className="rounded-[2.5rem] border border-white/12 bg-white/5 p-8">
<div className="text-xs tracking-[0.18em] uppercase text-white/60 font-medium">Контакт</div>
<div className="mt-3 text-lg text-white/85">Прайд-Автоматикс</div>
<div className="mt-6 h-px bg-white/10"></div>
<div className="mt-6 flex items-center gap-3 text-white/70 text-sm">
<iconify-icon className="text-2xl" icon="solar:letter-linear" style={{'--iconify-stroke-width': '1.5'}}></iconify-icon>
<span>demo@pride-automatics.ru</span>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="absolute left-6 right-6 top-6 flex items-center justify-between pointer-events-none">
<div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-[#DDE1E1] px-3 py-2">
<div className="h-7 w-7 rounded-full bg-[#2F3334] text-white flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight">PA</span>
</div>
<div className="hidden sm:block text-xs sm:text-sm text-[#2F3334]/70">
              Роботизация — Пензенская область
            </div>
</div>
<div className="pointer-events-auto flex items-center gap-2">
<button className="rounded-full bg-white/80 backdrop-blur border border-[#DDE1E1] px-4 py-2 text-sm font-medium text-[#2F3334] hover:bg-white" id="prevBtn">
              Назад
            </button>
<button className="rounded-full text-white px-4 py-2 text-sm font-medium border border-white/10 hover:opacity-95" id="nextBtn" style={{background: '#2F3334'}}>
              Вперёд
            </button>
</div>
</div>

<div className="absolute left-6 right-6 bottom-6 flex items-center justify-center pointer-events-none">
<div className="pointer-events-auto rounded-full bg-white/70 backdrop-blur border border-[#DDE1E1] px-4 py-2 text-xs sm:text-sm text-[#2F3334]/60">
            Клавиши: ← → • 1–11
          </div>
</div>
</div>

<div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-[#2F3334]/60">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full" style={{background: '#FF6A55'}}></div>
<span>Единая сетка, радиусы и микронavigation на каждом слайде</span>
</div>
<div className="tabular-nums">
          1920×1080 • 16:9
        </div>
</div>
</div>
</div>


    </>
  );
}

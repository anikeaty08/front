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
      

<header className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-slate-900">

<div className="absolute inset-0">
<img alt="Music Class" className="h-full w-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
</div>

<nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
<span className="font-serif text-xl font-medium">Sf</span>
</div>
<div className="hidden flex-col text-sm opacity-90 md:flex">
<span className="font-medium">Школа-студия Sforzando</span>
<span className="text-xs text-slate-300">Нас выбрали 4 174 человека</span>
</div>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium transition hover:text-white/80" href="#">Главная</a>
<a className="text-sm font-medium transition hover:text-white/80" href="#">Услуги</a>
<a className="text-sm font-medium transition hover:text-white/80" href="#">Контакты</a>
</div>
<button className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900 focus:ring-2 focus:ring-white/50">
                Оставить заявку
            </button>
</nav>

<div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white pb-32">
<h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                ШКОЛА-СТУДИЯ ИСКУССТВ <br className="hidden md:block"/> SFORZANDO
            </h1>
<p className="mt-6 max-w-2xl text-lg font-light text-slate-200 md:text-xl">
                Школа-студия искусств «Sforzando» в Приморском районе Санкт-Петербурга. 
                <span className="block text-slate-300/80 mt-1 text-base md:text-lg">Качественное и душевное обучение для детей и взрослых</span>
</p>
<button className="mt-10 rounded-full bg-white px-8 py-4 text-base font-medium text-slate-900 shadow-xl transition transform hover:scale-105 hover:bg-slate-50">
                Оставить заявку
            </button>
</div>

<div className="absolute bottom-12 left-0 right-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 text-white">
<button className="rounded-full bg-white/10 p-3 backdrop-blur-md hover:bg-white/20">
<i className="h-6 w-6 stroke-[1.5]" data-lucide="chevron-left"></i>
</button>
<div className="flex flex-col items-center gap-3">
<span className="text-lg font-medium tracking-tight">Мы тщательно подбираем преподавателей</span>
<div className="flex gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-white"></div>
<div className="h-1.5 w-1.5 rounded-full bg-white/40"></div>
<div className="h-1.5 w-1.5 rounded-full bg-white/40"></div>
<div className="h-1.5 w-1.5 rounded-full bg-white/40"></div>
</div>
</div>
<button className="rounded-full bg-white/10 p-3 backdrop-blur-md hover:bg-white/20">
<i className="h-6 w-6 stroke-[1.5]" data-lucide="chevron-right"></i>
</button>
</div>
</header>

<section className="mx-auto max-w-7xl px-6 py-24">
<h2 className="mb-12 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Товары и услуги</h2>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-50 transition lg:col-span-5">
<div className="h-[500px] w-full overflow-hidden">
<img alt="Kids Singing" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-slate-900">Курсы вокала</h3>
<p className="mt-2 text-lg text-slate-500">650–2 500 ₽</p>
</div>
</div>

<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-7">

<div className="group flex flex-col overflow-hidden rounded-2xl bg-slate-50 transition">
<div className="h-64 w-full overflow-hidden">
<img alt="Painting" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-5">
<h3 className="text-lg font-medium text-slate-900">Рисование: живопись, скетчинг</h3>
<p className="mt-1 text-base text-slate-500">650–1 200 ₽</p>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-2xl bg-slate-50 transition">
<div className="h-64 w-full overflow-hidden">
<img alt="Musical" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-5">
<h3 className="text-lg font-medium text-slate-900">Мюзикл</h3>
<p className="mt-1 text-base text-slate-500">600–1 200 ₽</p>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-2xl bg-slate-50 transition">
<div className="h-64 w-full overflow-hidden">
<img alt="Clay" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="p-5">
<h3 className="text-lg font-medium text-slate-900">Лепка: пластилин, глина</h3>
<p className="mt-1 text-base text-slate-500">650–1 200 ₽</p>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-2xl bg-slate-50 transition">
<div className="h-64 w-full overflow-hidden">
<img alt="Theater" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5">
<h3 className="text-lg font-medium text-slate-900">Театральная студия</h3>
<p className="mt-1 text-base text-slate-500">650–1 200 ₽</p>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-blue-700">
                Показать больше
            </button>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-12">
<h2 className="mb-10 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Подарочный сертификат на занятия творчеством</h2>
<div className="flex flex-col items-start gap-4 sm:flex-row">
<div className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md">
<div className="aspect-video w-full overflow-hidden bg-slate-100">
<img alt="Gift Card" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-5">
<h3 className="text-lg font-medium text-slate-900">Подарочный сертификат</h3>
<p className="mt-1 text-lg text-slate-500">3 000 ₽</p>
</div>
</div>
</div>
</section>

<section className="mx-auto mt-12 max-w-7xl px-6">
<div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-blue-600 p-8 shadow-lg md:flex-row md:p-12">
<div className="max-w-xl">
<h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    Сертификат до 1000₽ на искусство в подарок! До 30 ноября
                </h3>
</div>
<div className="w-full max-w-md">
<div className="flex gap-2">
<input className="w-full rounded-lg border-0 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-white/50" placeholder="Номер телефона" type="text"/>
<button className="rounded-lg bg-white/20 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition hover:bg-white/30">
                        Получить
                    </button>
</div>
<div className="mt-3 flex items-start gap-2">
<div className="relative flex items-center">
<input checked="" className="h-4 w-4 rounded border-white/30 bg-white/10 text-blue-500 focus:ring-offset-blue-600" type="checkbox"/>
</div>
<label className="text-xs text-blue-100">
                        Отправляя форму, вы соглашаетесь с <a className="underline decoration-blue-300/50 underline-offset-2 hover:text-white" href="#">политикой конфиденциальности</a>
</label>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24">
<h2 className="mb-12 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Галерея фото</h2>
<div className="relative group">
<div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth">

<div className="h-80 min-w-[300px] flex-none overflow-hidden rounded-xl md:min-w-[400px]">
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="h-80 min-w-[300px] flex-none overflow-hidden rounded-xl md:min-w-[400px]">
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>

<div className="h-80 min-w-[300px] flex-none overflow-hidden rounded-xl md:min-w-[400px]">
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>

<div className="h-80 min-w-[300px] flex-none overflow-hidden rounded-xl md:min-w-[400px]">
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:scale-110 focus:outline-none">
<i className="h-5 w-5 text-slate-900 stroke-[1.5]" data-lucide="chevron-left"></i>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:scale-110 focus:outline-none">
<i className="h-5 w-5 text-slate-900 stroke-[1.5]" data-lucide="chevron-right"></i>
</button>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-24">
<h2 className="mb-12 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Контакты</h2>
<div className="grid gap-12 lg:grid-cols-2">

<div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
<img alt="Map" className="h-full w-full object-cover grayscale-[20%]" src="https://static-maps.yandex.ru/1.x/?ll=30.298284,60.024738&amp;z=15&amp;size=600,400&amp;l=map&amp;pt=30.298284,60.024738,pm2blm"/>
<div className="absolute bottom-4 left-4 rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                    Санкт-Петербург
                </div>
</div>

<div className="flex flex-col justify-center space-y-8">
<div>
<a className="text-lg font-medium text-blue-600 hover:text-blue-700" href="#">Мы ВКонтакте</a>
<a className="mt-1 block text-lg font-medium text-blue-600 hover:text-blue-700" href="#">school_sforzando</a>
</div>
<div className="space-y-4">
<div>
<h4 className="text-base font-medium text-slate-900">Афанасьевская ул., 1, Санкт-Петербург</h4>
<p className="mt-1 text-lg text-slate-500">+7 (921) 403-57-30</p>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Комендантский пр., 56, Санкт-Петербург</h4>
<p className="mt-1 text-lg text-slate-500">+7 (931) 249-85-41</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-100 bg-slate-50 py-16">
<div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
<div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
<span className="font-serif text-3xl font-medium text-slate-900">Sf</span>
</div>
<h3 className="mt-6 text-lg font-medium text-slate-900">Школа-студия искусств Sforzando</h3>
<p className="mt-2 text-base text-slate-500">Нас выбирают 4 174 человека</p>
<button className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-sm transition hover:bg-blue-700">
                Оставить заявку
            </button>
<a className="mt-6 text-base font-medium text-blue-600 hover:text-blue-700" href="#">Мы ВКонтакте</a>
</div>
<div className="mx-auto mt-16 flex max-w-7xl items-center justify-between px-6 text-sm text-slate-400">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="globe"></i>
<span>Сайты ВКонтакте</span>
</div>
<a className="hover:text-slate-600" href="#">Политика конфиденциальности</a>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="shield"></i>
</div>
</div>
</footer>


    </>
  );
}

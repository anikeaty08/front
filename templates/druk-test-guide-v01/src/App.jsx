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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-2xl font-semibold tracking-tighter flex items-center">
<span className="text-red-600">D</span>RUK
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-red-600 transition-colors" href="#about">Про гайд</a>
<a className="hover:text-red-600 transition-colors" href="#preview">Що всередині</a>
<a className="hover:text-red-600 transition-colors" href="#value">Цінність</a>
</div>
<a className="bg-black text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-red-600 transition-all uppercase tracking-wider" href="#form">
                Завантажити
            </a>
</div>
</nav>

<section className="overflow-hidden pt-16 pb-24 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<div className="inline-flex gap-2 text-xs font-semibold text-red-600 bg-red-50 rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Оновлено у березні 2026 року</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        Стратегія, що перетворює <span className="text-red-600 italic">трафік</span> у клієнтів
                    </h1>
<p className="text-zinc-500 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-lg">
                        Вичерпний PDF-посібник для креативного бізнесу: від налаштування першої кампанії до автоматизації продажів.
                    </p>
<div className="grid grid-cols-2 gap-6 mb-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-100">
<iconify-icon className="text-red-600" icon="solar:document-text-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight">42 сторінки</span>
<span className="text-xs text-zinc-400">Чистого контенту</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-100">
<iconify-icon className="text-red-600" icon="solar:course-up-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight">12 кейсів</span>
<span className="text-xs text-zinc-400">Реального досвіду</span>
</div>
</div>
</div>
</div>
<div className="relative flex justify-center lg:justify-end">

<div className="relative w-full max-w-md">
<div className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-50"></div>
<div className="absolute -bottom-10 -right-10 w-60 h-60 bg-zinc-100 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10 bg-white p-4 rounded-3xl border border-zinc-200 guide-shadow rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="aspect-[3/4] bg-zinc-950 rounded-2xl overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10"></div>
<div className="absolute top-8 left-8 z-20">
<div className="w-8 h-1 bg-red-600 mb-4"></div>
<div className="text-3xl font-semibold text-white tracking-tighter uppercase leading-none">
                                        DRUK<br/><span className="text-zinc-500 text-lg font-light lowercase tracking-normal">guide v2.0</span>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8 z-20">
<div className="text-xs font-medium text-zinc-400 uppercase tracking-[0.2em] mb-2">digital marketing</div>
<div className="text-xl font-medium text-white tracking-tight leading-snug">Еволюція вашого бренду в мережі</div>
</div>

<div className="absolute top-1/2 right-0 w-48 h-48 bg-red-600 rounded-full blur-[80px] opacity-40"></div>
</div>
</div>

<div className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 glass-effect p-4 rounded-2xl border border-zinc-200 shadow-xl hidden md:block">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
<div className="w-full h-full bg-red-100 flex items-center justify-center text-[10px] font-bold">A</div>
</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
<div className="w-full h-full bg-zinc-800 flex items-center justify-center text-[10px] text-white font-bold">M</div>
</div>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold">+1.2k читачів</span>
<span className="text-[10px] text-zinc-400">вже застосовують</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="preview">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="h-48 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center p-6 relative overflow-hidden group">
<iconify-icon className="text-zinc-200 absolute -bottom-4 -left-4" icon="solar:graph-up-linear" style={{fontSize: '8rem'}}></iconify-icon>
<span className="relative z-10 text-xs font-medium text-zinc-500 uppercase tracking-widest">Ріст охоплень</span>
</div>
<div className="h-64 bg-zinc-900 rounded-2xl p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-red-500" icon="solar:shield-check-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<span className="text-xs text-white/40 tracking-widest">CHAPTER 03</span>
</div>
<div className="text-white text-lg font-medium tracking-tight">Аналітика без зайвої води</div>
</div>
</div>
<div className="space-y-4 pt-8">
<div className="h-64 bg-red-50 rounded-2xl p-6 flex flex-col justify-between border border-red-100">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-red-600" icon="solar:bolt-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
</div>
<div className="text-zinc-900 text-lg font-medium tracking-tight leading-snug">Швидкі результати для новачків</div>
</div>
<div className="h-48 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center p-6 relative overflow-hidden group">
<iconify-icon className="text-zinc-200 absolute -top-4 -right-4" icon="solar:smartphone-2-linear" style={{fontSize: '8rem'}}></iconify-icon>
<span className="relative z-10 text-xs font-medium text-zinc-500 uppercase tracking-widest text-center">Контент-плани</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Більше ніж просто текст — це <span className="text-red-600">фреймворк.</span></h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="text-red-600 font-medium text-sm pt-1">01</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight mb-2">Глибокий аналіз ніші</h4>
<p className="text-zinc-500 text-sm font-light">Розбираємо, як відрізнити ваш продукт від конкурентів за допомогою унікальної торгової пропозиції.</p>
</div>
</div>
<div className="flex gap-6">
<div className="text-red-600 font-medium text-sm pt-1">02</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight mb-2">Побудова воронки</h4>
<p className="text-zinc-500 text-sm font-light">Покрокова схема перетворення холодного відвідувача на постійного покупця та амбасадора.</p>
</div>
</div>
<div className="flex gap-6">
<div className="text-red-600 font-medium text-sm pt-1">03</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight mb-2">Технічне налаштування</h4>
<p className="text-zinc-500 text-sm font-light">Зі знімками екранів та інструкціями щодо рекламних кабінетів, пікселів та аналітики.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-2xl md:text-3xl font-semibold tracking-tighter mb-1">94%</div>
<div className="text-xs text-zinc-400 uppercase tracking-widest">Корисність</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl font-semibold tracking-tighter mb-1">2.5х</div>
<div className="text-xs text-zinc-400 uppercase tracking-widest">Зростання ROI</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl font-semibold tracking-tighter mb-1">45хв</div>
<div className="text-xs text-zinc-400 uppercase tracking-widest">На читання</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl font-semibold tracking-tighter mb-1">Безко</div>
<div className="text-xs text-zinc-400 uppercase tracking-widest">Для вас</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="form">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-zinc-50 rounded-[3rem] p-8 md:p-16 border border-zinc-100">
<div className="text-center max-w-xl mx-auto mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Готові масштабуватись?</h2>
<p className="text-zinc-500 font-light">Введіть свої дані, щоб ми надіслали PDF-гайд прямо на вашу пошту. Ніякого спаму, лише знання.</p>
</div>
<form className="grid md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest ml-4">Ваше ім'я</label>
<input className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 transition-all text-sm focus:ring-4 focus:ring-red-50" placeholder="Олександр" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest ml-4">Email</label>
<input className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 transition-all text-sm focus:ring-4 focus:ring-red-50" placeholder="example@gmail.com" type="email"/>
</div>
<button className="md:col-span-2 mt-4 bg-black text-white py-5 rounded-2xl font-semibold tracking-tight hover:bg-zinc-800 transition-all flex items-center justify-center gap-3" type="submit">
                        Отримати гайд безкоштовно
                        <iconify-icon icon="solar:download-square-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<p className="md:col-span-2 text-center text-[10px] text-zinc-400 mt-2">PDF файл • 12MB • Доступний для читання на будь-яких пристроях</p>
</form>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
<div className="text-[20rem] font-bold text-zinc-100 tracking-tighter leading-none select-none">DRUK</div>
</div>
</section>

<footer className="py-12 bg-white border-t border-zinc-100">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
<div className="text-xl font-semibold tracking-tighter">
<span className="text-red-600">D</span>RUK
            </div>
<div className="flex gap-8 text-zinc-400 font-light">
<a className="hover:text-zinc-900 transition-colors" href="#">Політика конфіденційності</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Підтримка</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Telegram</a>
</div>
<div className="text-zinc-400 font-light">
                © 2024 DRUK Agency
            </div>
</div>
</footer>

    </>
  );
}

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
      

<header className="max-w-3xl mx-auto w-full mt-10 mb-8 px-4 sm:px-6">
<div className="flex items-center gap-3 text-sm text-slate-500 mb-4 hover:text-slate-900 w-fit cursor-pointer transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
<span className="font-medium text-xs">Назад до профілю</span>
</div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Створіть професійне резюме</h1>
<p className="text-sm text-slate-500 mt-1">Заповніть форму нижче для генерації ідеального шаблону.</p>
</header>

<main className="max-w-3xl mx-auto w-full px-4 sm:px-6 space-y-6">

<section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h2 className="text-base font-semibold text-slate-900 mb-5 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:user-linear" width="18"></iconify-icon>
                Особиста інформація
            </h2>
<div className="flex flex-col sm:flex-row gap-6">

<div className="flex flex-col items-center gap-2 shrink-0">
<div className="w-24 h-24 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:border-slate-500 hover:text-slate-600 hover:bg-slate-50 cursor-pointer transition-all bg-white relative overflow-hidden group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500">Завантажити фото</span>
</div>

<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Ім'я</label>
<input className="form-input text-sm" placeholder="Тарас" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Прізвище</label>
<input className="form-input text-sm" placeholder="Шевченко" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Бажана посада</label>
<input className="form-input text-sm" placeholder="Senior Frontend Developer" type="text"/>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h2 className="text-base font-semibold text-slate-900 mb-5 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:letter-linear" width="18"></iconify-icon>
                Контактні дані
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Електронна пошта</label>
<input className="form-input text-sm" placeholder="your.email@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Номер телефону</label>
<input className="form-input text-sm" placeholder="+380 (99) 000-00-00" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Місто та країна</label>
<input className="form-input text-sm" placeholder="Київ, Україна" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">LinkedIn / Портфоліо</label>
<input className="form-input text-sm" placeholder="https://linkedin.com/in/username" type="url"/>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h2 className="text-base font-semibold text-slate-900 mb-5 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear" width="18"></iconify-icon>
                Про себе
            </h2>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Короткий опис вашого досвіду та цілей</label>
<textarea className="form-input text-sm min-h-[120px] resize-y" placeholder="Досвідчений розробник з 5-річним стажем у створенні масштабованих веб-додатків..."></textarea>
<p className="text-xs text-slate-400 mt-2 text-right">0 / 500 символів</p>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-5">
<h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:case-linear" width="18"></iconify-icon>
                    Досвід роботи
                </h2>
<button className="text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors px-2 py-1 rounded-md hover:bg-slate-50">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    Додати
                </button>
</div>

<div className="relative pl-4 border-l-2 border-slate-100 space-y-4">
<div className="absolute w-3 h-3 bg-slate-200 rounded-full -left-[7px] top-2 border-2 border-white"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/50 p-4 rounded-lg border border-slate-100">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Посада</label>
<input className="form-input text-sm bg-white" placeholder="Frontend Developer" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Компанія</label>
<input className="form-input text-sm bg-white" placeholder="Tech Innovations LLC" type="text"/>
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Початок</label>
<input className="form-input text-sm bg-white text-slate-500" type="month"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Закінчення</label>
<input className="form-input text-sm bg-white text-slate-500" type="month"/>
</div>
</div>
<div className="flex items-center mt-6">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Працюю тут зараз</span>
</label>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Обов'язки та досягнення</label>
<textarea className="form-input text-sm bg-white min-h-[80px]" placeholder="Розробка архітектури проекту, оптимізація швидкодії..."></textarea>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-5">
<h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:diploma-linear" width="18"></iconify-icon>
                    Освіта
                </h2>
<button className="text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors px-2 py-1 rounded-md hover:bg-slate-50">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    Додати
                </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/50 p-4 rounded-lg border border-slate-100">
<div className="sm:col-span-2">
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Навчальний заклад</label>
<input className="form-input text-sm bg-white" placeholder="Київський політехнічний інститут" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Спеціальність / Ступінь</label>
<input className="form-input text-sm bg-white" placeholder="Магістр комп'ютерних наук" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Рік закінчення</label>
<input className="form-input text-sm bg-white" max="2030" min="1950" placeholder="2020" type="number"/>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h2 className="text-base font-semibold text-slate-900 mb-5 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
                Навички
            </h2>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Ключові навички (через кому)</label>
<div className="relative">
<input className="form-input text-sm pb-12" placeholder="JavaScript, React, Tailwind CSS..." type="text"/>

<div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 flex items-center gap-1">
                            HTML/CSS
                            <button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:close-circle-linear" width="12"></iconify-icon></button>
</span>
<span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 flex items-center gap-1">
                            Figma
                            <button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:close-circle-linear" width="12"></iconify-icon></button>
</span>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-200 py-4 px-4 sm:px-6 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
<div className="max-w-3xl mx-auto flex items-center justify-between">
<button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon>
<span className="hidden sm:inline">Попередній перегляд</span>
<span className="sm:hidden">Огляд</span>
</button>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors px-3">
                    Скинути
                </button>
<button className="px-5 py-2 bg-slate-900 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 flex items-center gap-2">
<iconify-icon icon="solar:diskette-linear" width="16"></iconify-icon>
                    Зберегти резюме
                </button>
</div>
</div>
</div>

    </>
  );
}

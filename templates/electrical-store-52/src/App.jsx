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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon height="20" icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-lg uppercase">Електросвіт</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-500 hover:text-blue-600 transition-colors" href="#about">Про нас</a>
<a className="text-slate-500 hover:text-blue-600 transition-colors" href="#solutions">Рішення</a>
<a className="text-slate-500 hover:text-blue-600 transition-colors" href="#gallery">Галерея</a>
<a className="text-slate-500 hover:text-blue-600 transition-colors" href="#contacts">Контакти</a>
</div>

<div className="hidden md:block">
<a className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-full hover:bg-slate-800 transition-all shadow-sm" href="tel:+380971657000">
<span>+38 (097) 165-70-00</span>
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
</a>
</div>

<button className="md:hidden text-slate-900 p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Modern Lighting Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
<div className="hero-gradient absolute inset-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-blue-100 text-xs font-medium tracking-wide">Вінниця, пр. Коцюбинського 70</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 text-glow">
                Електросвіт — електротовари<br/> та освітлення
            </h1>
<p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                Від розетки до люстри. Сучасні рішення для дому, бізнесу та ремонту. Надійність та естетика в кожній деталі.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2" href="#contacts">
                    Звʼязатися з нами
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/10 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2" href="tel:+380971657000">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                    Зателефонувати
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-white" height="24" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 rounded-full blur-3xl"></div>
<img alt="Електросвіт Шоурум" className="relative rounded-2xl shadow-xl shadow-slate-200/60 w-full object-cover aspect-[4/3] grayscale-[10%] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">
                        Простір світла <br/>та надійної електрики
                    </h2>
<div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
<p>
                            Магазин <strong className="text-slate-900 font-medium">«Електросвіт»</strong> — це не просто точка продажу, це простір сучасних електротоварів та освітлення у Вінниці.
                        </p>
<p>
                            Ми допомагаємо підібрати надійні та актуальні рішення для квартир, будинків, офісів і комерційних обʼєктів. Консультуємо, підказуємо та працюємо напряму з клієнтом, щоб ваше світло було комфортним, а електрика — безпечною.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<div className="mt-1 text-blue-600">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium text-sm">Гарантія якості</h4>
<p className="text-xs text-slate-500 mt-1">Сертифікований товар</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-blue-600">
<iconify-icon height="24" icon="solar:user-speak-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium text-sm">Експертність</h4>
<p className="text-xs text-slate-500 mt-1">Живі консультації</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200/60" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-blue-600 text-xs font-semibold tracking-wider uppercase mb-2 block">Асортимент</span>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Що ми пропонуємо</h2>
<p className="mt-4 text-slate-500 font-light">Ми зібрали найкращі категорії товарів для повного циклу електромонтажу та декорування.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:lamp-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Освітлення</h3>
<p className="text-sm text-slate-500 leading-relaxed">Люстри, LED-панелі, трекові системи та точкове світло для будь-якого інтер'єру.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:lightbulb-bolt-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Декоративне світло</h3>
<p className="text-sm text-slate-500 leading-relaxed">Акцентні світильники, бра, торшери та настільні лампи для затишку.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:power-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Розетки та вимикачі</h3>
<p className="text-sm text-slate-500 leading-relaxed">Стильна фурнітура від провідних брендів. Розумні вимикачі та автоматика.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="ph:cable-car-light" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Кабель та провід</h3>
<p className="text-sm text-slate-500 leading-relaxed">Якісна електропроводка, гофра, кабель-канали для безпечного монтажу.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:accumulator-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Енергонезалежність</h3>
<p className="text-sm text-slate-500 leading-relaxed">Генератори, стабілізатори напруги та джерела безперебійного живлення.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Електромонтаж</h3>
<p className="text-sm text-slate-500 leading-relaxed">Інструменти, витратні матеріали, щитове обладнання та аксесуари.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-50 rounded-full">
<iconify-icon icon="solar:shop-linear" width="24"></iconify-icon>
</div>
<h4 className="text-slate-900 font-medium mb-1">Широкий вибір</h4>
<p className="text-xs text-slate-500">Все в одному місці</p>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-50 rounded-full">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h4 className="text-slate-900 font-medium mb-1">Консультації</h4>
<p className="text-xs text-slate-500">Допомога експертів</p>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-50 rounded-full">
<iconify-icon icon="solar:lightbulb-minimalistic-linear" width="24"></iconify-icon>
</div>
<h4 className="text-slate-900 font-medium mb-1">LED-рішення</h4>
<p className="text-xs text-slate-500">Економія та стиль</p>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-50 rounded-full">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h4 className="text-slate-900 font-medium mb-1">Доставка</h4>
<p className="text-xs text-slate-500">По всій Україні</p>
</div>
</div>
</div>
</section>


<section className="py-24 bg-slate-50" id="contacts">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-10 md:p-14 bg-slate-50 border-r border-slate-100 flex flex-col justify-between">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-8">Контакти</h2>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-slate-900 font-medium mb-1">Адреса</h5>
<p className="text-slate-500 text-sm leading-relaxed">м. Вінниця<br/>проспект Коцюбинського, 70</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-slate-900 font-medium mb-1">Телефон</h5>
<a className="text-slate-500 text-sm hover:text-blue-600 transition-colors" href="tel:+380971657000">+38 (097) 165-70-00</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-slate-900 font-medium mb-1">Графік роботи</h5>
<p className="text-slate-500 text-sm">Пн-Пт: 09:00 — 19:00<br/>Сб-Нд: 10:00 — 17:00</p>
</div>
</div>
</div>
</div>
<div className="mt-12 flex gap-3">
<a className="w-full text-center py-3 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm font-medium hover:bg-slate-50 hover:border-blue-300 transition-all" href="#">
                                Написати
                            </a>
<a className="w-full text-center py-3 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-all shadow-lg shadow-slate-200" href="tel:+380971657000">
                                Подзвонити
                            </a>
</div>
</div>

<div className="p-10 md:p-14 bg-white">
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">Напишіть нам</h3>
<p className="text-slate-500 text-sm mb-8">Залиште заявку на консультацію або запитайте про наявність товару.</p>
<form className="space-y-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide" htmlFor="name">Імʼя</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" id="name" placeholder="Ваше імʼя" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide" htmlFor="phone">Телефон</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" id="phone" placeholder="+38 (___) ___-__-__" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wide" htmlFor="message">Повідомлення</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none" id="message" placeholder="Що вас цікавить?" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2" type="button">
<span>Залишити заявку</span>
<iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon>
</button>
<p className="text-[10px] text-slate-400 text-center mt-4">Натискаючи кнопку, ви погоджуєтесь на обробку даних.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" width="14"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight uppercase text-sm">Електросвіт</span>
</div>
<p className="text-xs text-slate-400 font-medium">
                © 2025 Електросвіт Вінниця. Всі права захищені.
            </p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}

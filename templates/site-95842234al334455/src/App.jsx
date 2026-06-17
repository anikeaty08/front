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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-[#FF0000] text-white flex items-center justify-center rounded-lg group-hover:rotate-3 transition-transform duration-300">
<span className="font-bold text-xl tracking-tighter">M</span>
</div>
<span className="font-medium text-lg tracking-tight group-hover:text-[#FF0000] transition-colors">MINIMAL</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-[#FF0000] transition-colors" href="#hero">
<iconify-icon icon="solar:home-angle-linear" width="18"></iconify-icon>
                    Головна
                </a>
<a className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-[#FF0000] transition-colors" href="#features">
<iconify-icon icon="solar:bolt-linear" width="18"></iconify-icon>
                    Послуги
                </a>
<a className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-[#FF0000] transition-colors" href="#gallery">
<iconify-icon icon="solar:gallery-linear" width="18"></iconify-icon>
                    Галерея
                </a>
<a className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-[#FF0000] transition-colors" href="#contact">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                    Контакти
                </a>
</nav>

<button className="md:hidden text-zinc-800 hover:text-[#FF0000]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6" id="hero">
<div className="max-w-5xl mx-auto text-center">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Ваш успіх — <br/>
<span className="text-[#FF0000]">наша мета.</span>
</h1>
<p className="text-xl text-zinc-500 font-light mb-10 tracking-wide">
                Швидко. Якісно. Доступно.
            </p>
<div className="flex justify-center mb-16">
<a className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF0000] text-white rounded-full overflow-hidden transition-all hover:shadow-lg hover:shadow-red-500/30 active:scale-95" href="#contact">
<span className="relative font-medium text-lg">Дізнатися більше</span>
<iconify-icon className="relative group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</a>
</div>

<div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/50 group">
<img alt="Hero Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="flex flex-col items-start group">
<div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 group-hover:border-[#FF0000]/30 transition-colors">
<iconify-icon className="text-[#FF0000]" icon="solar:stopwatch-linear" width="64"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Швидкість</h3>
<p className="text-zinc-500 leading-relaxed">Миттєве виконання завдань без втрати якості.</p>
</div>

<div className="flex flex-col items-start group">
<div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 group-hover:border-[#FF0000]/30 transition-colors">
<iconify-icon className="text-[#FF0000]" icon="solar:medal-star-linear" width="64"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Якість</h3>
<p className="text-zinc-500 leading-relaxed">Безкомпромісні стандарти у кожній деталі.</p>
</div>

<div className="flex flex-col items-start group">
<div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 group-hover:border-[#FF0000]/30 transition-colors">
<iconify-icon className="text-[#FF0000]" icon="solar:shield-check-linear" width="64"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Гарантія</h3>
<p className="text-zinc-500 leading-relaxed">Повна відповідальність за результат.</p>
</div>

<div className="flex flex-col items-start group">
<div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 group-hover:border-[#FF0000]/30 transition-colors">
<iconify-icon className="text-[#FF0000]" icon="solar:chat-round-dots-linear" width="64"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Підтримка</h3>
<p className="text-zinc-500 leading-relaxed">Завжди на зв'язку, 24/7 для вас.</p>
</div>

<div className="flex flex-col items-start group">
<div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 group-hover:border-[#FF0000]/30 transition-colors">
<iconify-icon className="text-[#FF0000]" icon="solar:palette-linear" width="64"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Дизайн</h3>
<p className="text-zinc-500 leading-relaxed">Естетика, що надихає та продає.</p>
</div>

<div className="flex flex-col items-start group">
<div className="mb-6 p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 group-hover:border-[#FF0000]/30 transition-colors">
<iconify-icon className="text-[#FF0000]" icon="solar:tag-price-linear" width="64"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Ціна</h3>
<p className="text-zinc-500 leading-relaxed">Чесна вартість без прихованих платежів.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900">Останні роботи</h2>
<div className="hidden md:flex gap-2">
<button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 text-zinc-400 hover:text-[#FF0000] transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 text-zinc-400 hover:text-[#FF0000] transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Work 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" icon="solar:magnifer-linear" width="40"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Work 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" icon="solar:magnifer-linear" width="40"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Work 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" icon="solar:magnifer-linear" width="40"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Work 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" icon="solar:magnifer-linear" width="40"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Work 5" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" icon="solar:magnifer-linear" width="40"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Work 6" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" icon="solar:magnifer-linear" width="40"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Work 7" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" icon="solar:magnifer-linear" width="40"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Work 8" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" icon="solar:magnifer-linear" width="40"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-center mb-16">Клієнти довіряють нам</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col gap-6">
<div className="flex gap-1 text-[#FF0000]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-zinc-600 font-light">"Чудова робота! Все виконано вчасно та неймовірно якісно."</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div>
<div className="font-medium text-zinc-900">Олена К.</div>
<div className="text-xs text-zinc-400">Підприємець</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col gap-6">
<div className="flex gap-1 text-[#FF0000]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-zinc-600 font-light">"Найкращий сервіс, з яким доводилось працювати. Рекомендую!"</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<div className="font-medium text-zinc-900">Андрій М.</div>
<div className="text-xs text-zinc-400">Менеджер</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col gap-6">
<div className="flex gap-1 text-[#FF0000]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-zinc-600 font-light">"Професіоналізм на вищому рівні. Дякую команді."</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div>
<div className="font-medium text-zinc-900">Ірина В.</div>
<div className="text-xs text-zinc-400">Дизайнер</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="contact">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#FF0000]/5 blur-[100px] rounded-full -z-10"></div>
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-4">Готові почати?</h2>
<p className="text-zinc-500">Заповніть форму, і ми зв'яжемося з вами найближчим часом.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-[#FF0000] transition-colors">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<input className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-all text-zinc-900 placeholder:text-zinc-400" placeholder="Ім'я" type="text"/>
</div>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-[#FF0000] transition-colors">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<input className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-all text-zinc-900 placeholder:text-zinc-400" placeholder="Телефон" type="tel"/>
</div>
</div>
<div className="relative group">
<div className="absolute top-4 left-0 pl-4 pointer-events-none text-zinc-400 group-focus-within:text-[#FF0000] transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<textarea className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-all text-zinc-900 placeholder:text-zinc-400 resize-none" placeholder="Повідомлення" rows="4"></textarea>
</div>
<button className="w-full bg-[#FF0000] text-white font-medium text-lg py-4 rounded-xl hover:bg-red-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-500/20" type="button">
<span>Надіслати</span>
<iconify-icon icon="solar:letter-linear" width="22"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center rounded-lg">
<span className="font-bold text-sm">M</span>
</div>
<span className="font-medium text-lg tracking-tight">MINIMAL</span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Створюємо цифрові рішення, що допомагають вашому бізнесу зростати.
                    </p>
</div>

<div className="col-span-1 md:col-span-2 md:pl-12">
<h4 className="font-medium text-zinc-900 mb-6">Контакти</h4>
<div className="space-y-4 text-sm text-zinc-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#FF0000]" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Київ, Україна</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#FF0000]" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>+380 99 123 45 67</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#FF0000]" icon="solar:mailbox-linear" width="18"></iconify-icon>
<span>hello@company.com</span>
</div>
</div>
</div>

<div className="col-span-1">
<h4 className="font-medium text-zinc-900 mb-6">Соцмережі</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-[#FF0000] hover:bg-red-50 transition-all" href="#">
<iconify-icon icon="fe:facebook" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-[#FF0000] hover:bg-red-50 transition-all" href="#">
<iconify-icon icon="fe:instagram" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-[#FF0000] hover:bg-red-50 transition-all" href="#">
<iconify-icon icon="fe:telegram" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-400">
                    © 2026 Компанія. Всі права захищено.
                </div>
<div className="flex gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-600" href="#">Політика конфіденційності</a>
<a className="hover:text-zinc-600" href="#">Умови використання</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

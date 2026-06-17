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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-2xl font-bold logo-tracking" href="#">RMRP</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">О проекте</a>
<a className="hover:text-white transition-colors" href="#how-to-start">Как начать</a>
<a className="hover:text-white transition-colors" href="#">Донат</a>
<a className="hover:text-white transition-colors" href="#">Форум</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex flex-col items-end mr-4">
<span className="text-xs text-neutral-500 uppercase tracking-widest">Онлайн</span>
<span className="text-sm font-medium text-[#00C77F] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#00C77F] animate-pulse"></span>
                        4,821 Игроков
                    </span>
</div>
<button className="bg-[#00C77F] text-black text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-[#00b070] transition-all">
                    Начать играть
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/40 z-10"></div>
<img alt="Russian City Landscape" className="w-full h-full object-cover grayscale-[0.2]" src="https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 hero-gradient z-20"></div>
</div>
<div className="relative z-30 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C77F]/10 border border-[#00C77F]/20 text-xs font-medium backdrop-blur-md mb-6 text-[#00C77F]">
<iconify-icon icon="solar:fire-linear"></iconify-icon>
                    Крупнейший RP проект в российском сеттинге
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
                    Твоя история в <br/> <span className="text-neutral-400">сердце России.</span>
</h1>
<p className="text-lg text-neutral-300 mb-10 leading-relaxed max-w-xl">
                    От обычного работяги до криминального авторитета. Исследуй детально проработанные города, кастомизируй отечественные авто и создай свою империю.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#00C77F] text-black text-base font-semibold py-4 px-10 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                        Начать играть бесплатно
                        <iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="bg-white/5 border border-white/10 text-white text-base font-medium py-4 px-10 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors">
                        Смотреть трейлер
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 hidden lg:flex gap-12 text-sm">
<div className="flex flex-col">
<span className="text-neutral-500 mb-1">Серверов</span>
<span className="font-medium text-[#00C77F]">12 Активных</span>
</div>
<div className="w-[1px] h-10 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-neutral-500 mb-1">Транспорта</span>
<span className="font-medium">500+ Моделей</span>
</div>
<div className="w-[1px] h-10 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-neutral-500 mb-1">Комьюнити</span>
<span className="font-medium">1.2М Игроков</span>
</div>
</div>
</section>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Жизнь без ограничений</h2>
<p className="text-neutral-500 text-lg max-w-2xl mx-auto">Мы воссоздали атмосферу, которую невозможно перепутать. От хрущевок до элитных небоскребов.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 aspect-[4/5] flex flex-col justify-end p-8">
<img alt="Cars" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-[#00C77F]/10 backdrop-blur-md flex items-center justify-center mb-4">
<iconify-icon className="text-[#00C77F]" icon="solar:wheel-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-2">Автопарк мечты</h3>
<p className="text-neutral-400 text-sm leading-relaxed">От классики ВАЗ до последних иномарок. Глубокий тюнинг и реалистичная физика управления.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 aspect-[4/5] flex flex-col justify-end p-8">
<img alt="Police" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-[#00C77F]/10 backdrop-blur-md flex items-center justify-center mb-4">
<iconify-icon className="text-[#00C77F]" icon="solar:shield-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-2">Фракции и Карьера</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Служи в полиции, спасай жизни в МЧС или возглавь криминальную группировку города.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 aspect-[4/5] flex flex-col justify-end p-8">
<img alt="Economy" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-[#00C77F]/10 backdrop-blur-md flex items-center justify-center mb-4">
<iconify-icon className="text-[#00C77F]" icon="solar:banknote-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-2">Живая Экономика</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Владей бизнесом, торгуй на рынке и инвестируй в недвижимость. Твой капитал — твоя власть.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 border-y border-white/5" id="how-to-start">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="flex-1">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Начни играть за <br/><span className="text-neutral-500">5 минут</span></h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00C77F] text-black flex items-center justify-center font-bold">1</div>
<div>
<h4 className="text-lg font-medium mb-1">Скачай лаунчер</h4>
<p className="text-neutral-500 text-sm">Наш удобный лаунчер сам установит все необходимые файлы для игры.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center font-bold">2</div>
<div>
<h4 className="text-lg font-medium mb-1">Установи игру</h4>
<p className="text-neutral-500 text-sm">Следуй простым инструкциям установщика. Это полностью безопасно.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center font-bold">3</div>
<div>
<h4 className="text-lg font-medium mb-1">Создай персонажа</h4>
<p className="text-neutral-500 text-sm">Выбери внешность, имя и начни свой путь в одном из городов.</p>
</div>
</div>
</div>
<button className="mt-12 bg-[#00C77F] text-black font-semibold py-4 px-10 rounded-xl hover:bg-[#00b070] transition-all flex items-center gap-3">
<iconify-icon icon="solar:download-minimalistic-linear" width="22"></iconify-icon>
                        Скачать лаунчер (Windows)
                    </button>
</div>
<div className="flex-1 relative">
<div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Launcher Preview" className="w-full" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00C77F]/5 blur-3xl rounded-full"></div>
<div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#00C77F]/5 blur-3xl rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight">Жизнь сервера</h2>
<p className="text-neutral-500 text-sm mt-2">Прямые эфиры и яркие моменты наших игроков</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="aspect-square rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="aspect-square rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="aspect-square rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="relative rounded-[3rem] bg-[#00C77F] text-black p-12 md:p-24 overflow-hidden flex flex-col items-center text-center">

<div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -mr-20 -mt-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-20 -mb-20"></div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 relative z-10">
                    Готов начать новую жизнь?
                </h2>
<p className="text-black/60 text-lg max-w-xl mb-12 relative z-10 leading-relaxed font-medium">
                    Присоединяйся к тысячам игроков уже сегодня. Твоя история в RMRP начинается с одного клика.
                </p>
<div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
<button className="bg-black text-white px-12 py-5 rounded-2xl font-semibold hover:scale-105 transition-transform">
                        Играть сейчас
                    </button>
<button className="bg-black/5 border border-black/10 px-12 py-5 rounded-2xl font-semibold hover:bg-black/10 transition-colors">
                        Сообщество VK
                    </button>
</div>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2">
<a className="text-2xl font-bold logo-tracking mb-6 block" href="#">RMRP</a>
<p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
                        Лучший RolePlay проект в GTA 5, объединяющий игроков со всего СНГ. Мы создаем мир, в котором каждый может стать тем, кем всегда мечтал.
                    </p>
</div>
<div>
<h5 className="text-white font-medium mb-6">Проект</h5>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Карта серверов</a></li>
<li><a className="hover:text-[#00C77F] transition-colors" href="#">Магазин</a></li>
<li><a className="hover:text-white transition-colors" href="#">Правила</a></li>
<li><a className="hover:text-white transition-colors" href="#">База знаний</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-6">Поддержка</h5>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Тех. поддержка</a></li>
<li><a className="hover:text-white transition-colors" href="#">Форум</a></li>
<li><a className="hover:text-[#00C77F] transition-colors" href="#">Discord</a></li>
<li><a className="hover:text-[#00C77F] transition-colors" href="#">VK Group</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 RMRP Team. Все права защищены. Rockstar Games, Grand Theft Auto и GTA 5 являются торговыми марками Take-Two Interactive.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Оферта</a>
<a className="hover:text-white transition-colors" href="#">Конфиденциальность</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

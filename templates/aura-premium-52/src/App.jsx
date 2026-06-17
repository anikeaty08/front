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
      

<nav className="fixed w-full top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#6B1D1D]/10">
<div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
<div className="flex-1 flex justify-start hidden md:flex gap-8 text-sm font-light text-[#2D2A26]/70">
<a className="hover:text-[#6B1D1D] transition-colors" href="#">Каталог</a>
<a className="hover:text-[#6B1D1D] transition-colors" href="#about">Про нас</a>
</div>
<a className="font-['Playfair_Display',serif] text-2xl tracking-tighter text-[#6B1D1D] font-medium flex-1 text-center" href="#">
                A U R A
            </a>
<div className="flex-1 flex justify-end gap-5 text-[#2D2A26]">
<button className="hover:text-[#6B1D1D] transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hover:text-[#6B1D1D] transition-colors">
<iconify-icon className="text-xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hover:text-[#6B1D1D] transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bag-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#6B1D1D] text-[10px] text-white">2</span>
</button>
</div>
</div>
</nav>
<main>

<section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="relative rounded-2xl overflow-hidden bg-[#EFEBE4] aspect-[4/3] md:aspect-[21/9] flex items-center">
<img alt="Порцеляновий посуд" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 p-8 md:p-16 max-w-2xl">
<span className="text-sm font-light tracking-widest uppercase text-[#6B1D1D] mb-4 block">Нова колекція</span>
<h1 className="font-['Playfair_Display',serif] text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-[#2D2A26] mb-6 leading-tight">
                        Мистецтво на вашому столі
                    </h1>
<p className="text-base md:text-lg font-light text-[#2D2A26]/80 mb-10 max-w-md">
                        Вишукана порцеляна, створена для тих, хто цінує естетику кожної миті.
                    </p>
<a className="inline-flex items-center justify-center bg-[#6B1D1D] text-white px-8 py-4 text-sm font-medium hover:bg-[#521515] transition-colors rounded-sm" href="#catalog">
                        Перейти до каталогу
                    </a>
</div>
</div>
</section>

<section className="py-12 bg-[#F3EFE9]">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#6B1D1D]/10">
<div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6 first:pt-0">
<div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#6B1D1D] flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Преміальна якість</h3>
<p className="text-sm font-light text-[#2D2A26]/70">Використовуємо лише високоякісну кістяну та тверду порцеляну.</p>
</div>
<div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6">
<div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#6B1D1D] flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Надійне пакування</h3>
<p className="text-sm font-light text-[#2D2A26]/70">Багатошаровий захист гарантує цілісність під час доставки.</p>
</div>
<div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6">
<div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#6B1D1D] flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:pallete-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Унікальний дизайн</h3>
<p className="text-sm font-light text-[#2D2A26]/70">Авторські розписи та елегантні форми для будь-якого інтер'єру.</p>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6 md:px-12" id="catalog">
<div className="flex justify-between items-end mb-10">
<h2 className="font-['Playfair_Display',serif] text-3xl tracking-tight font-medium text-[#2D2A26]">Категорії</h2>
<a className="text-sm font-medium text-[#6B1D1D] hover:underline underline-offset-4 decoration-[#6B1D1D]/30 hidden sm:block" href="#">Дивитися всі</a>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<a className="group relative aspect-square bg-[#EFEBE4] overflow-hidden rounded-md" href="#">
<img alt="Сервізи" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1578643463396-0997cb5328c1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<h3 className="text-lg font-medium tracking-tight">Сервізи</h3>
</div>
</a>

<a className="group relative aspect-square bg-[#EFEBE4] overflow-hidden rounded-md" href="#">
<img alt="Тарілки" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1603199506016-b9a594b593c0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<h3 className="text-lg font-medium tracking-tight">Тарілки</h3>
</div>
</a>

<a className="group relative aspect-square bg-[#EFEBE4] overflow-hidden rounded-md" href="#">
<img alt="Чашки" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1568285527376-78e583d78216?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<h3 className="text-lg font-medium tracking-tight">Чашки та блюдця</h3>
</div>
</a>

<a className="group relative aspect-square bg-[#EFEBE4] overflow-hidden rounded-md" href="#">
<img alt="Чайники" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594246830588-467610be58d4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<h3 className="text-lg font-medium tracking-tight">Чайники</h3>
</div>
</a>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-12">
<h2 className="font-['Playfair_Display',serif] text-3xl tracking-tight font-medium text-[#2D2A26] mb-3">Рекомендовані товари</h2>
<p className="text-sm font-light text-[#2D2A26]/70">Вибір наших клієнтів та експертів</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group flex flex-col">
<div className="relative bg-[#FAF8F5] aspect-[4/5] rounded-md overflow-hidden mb-4">
<img alt="Product" className="w-full h-full object-cover object-center mix-blend-darken transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#2D2A26] hover:bg-[#6B1D1D] hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 shadow-sm">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<h4 className="text-sm font-medium tracking-tight mb-1">Набір тарілок "Білий Лотос"</h4>
<p className="text-xs font-light text-[#2D2A26]/60 mb-2">Порцеляна, 6 шт</p>
<p className="text-base font-medium text-[#6B1D1D]">12 500 грн</p>
</div>

<div className="group flex flex-col">
<div className="relative bg-[#FAF8F5] aspect-[4/5] rounded-md overflow-hidden mb-4">
<img alt="Product" className="w-full h-full object-cover object-center mix-blend-darken transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1592659616086-5dce776e0242?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#2D2A26] hover:bg-[#6B1D1D] hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 shadow-sm">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<h4 className="text-sm font-medium tracking-tight mb-1">Чайна пара "Ермітаж"</h4>
<p className="text-xs font-light text-[#2D2A26]/60 mb-2">Кістяна порцеляна, золото</p>
<p className="text-base font-medium text-[#6B1D1D]">4 200 грн</p>
</div>

<div className="group flex flex-col">
<div className="relative bg-[#FAF8F5] aspect-[4/5] rounded-md overflow-hidden mb-4">
<span className="absolute top-4 left-4 bg-[#6B1D1D] text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm z-10">Хіт</span>
<img alt="Product" className="w-full h-full object-cover object-center mix-blend-darken transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1616422285623-14df6373f135?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#2D2A26] hover:bg-[#6B1D1D] hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 shadow-sm">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<h4 className="text-sm font-medium tracking-tight mb-1">Супниця з орнаментом</h4>
<p className="text-xs font-light text-[#2D2A26]/60 mb-2">Порцеляна, 2.5 л</p>
<p className="text-base font-medium text-[#6B1D1D]">8 900 грн</p>
</div>

<div className="group flex flex-col">
<div className="relative bg-[#FAF8F5] aspect-[4/5] rounded-md overflow-hidden mb-4">
<img alt="Product" className="w-full h-full object-cover object-center mix-blend-darken transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1517260739337-6799d239ce83?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#2D2A26] hover:bg-[#6B1D1D] hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 shadow-sm">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<h4 className="text-sm font-medium tracking-tight mb-1">Кавовий сервіз "Мокко"</h4>
<p className="text-xs font-light text-[#2D2A26]/60 mb-2">На 6 персон</p>
<p className="text-base font-medium text-[#6B1D1D]">18 000 грн</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#2D2A26] text-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 relative aspect-square lg:aspect-auto lg:h-[600px] rounded-xl overflow-hidden bg-white/5 p-8 flex items-center justify-center">

<div className="relative w-full max-w-sm aspect-square border border-[#6B1D1D]/50 rounded-lg p-6 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center group">
<div className="absolute inset-2 border border-dashed border-white/20 rounded"></div>
<iconify-icon className="text-8xl text-[#FAF8F5]/80 mb-4 transition-transform group-hover:-translate-y-2" icon="solar:box-linear" strokeWidth="1"></iconify-icon>
<div className="flex gap-2">
<span className="w-8 h-8 rounded-full bg-[#6B1D1D]/80 flex items-center justify-center"><iconify-icon className="text-white text-sm" icon="solar:shield-check-linear"></iconify-icon></span>
<span className="w-8 h-8 rounded-full bg-[#6B1D1D]/80 flex items-center justify-center"><iconify-icon className="text-white text-sm" icon="solar:leaf-linear"></iconify-icon></span>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl tracking-tight font-medium mb-6 text-[#FAF8F5]">
                        Гарантія бездоганної доставки
                    </h2>
<p className="text-base font-light text-white/70 mb-8 leading-relaxed">
                        Ми розуміємо цінність та крихкість порцеляни. Тому процес пакування — це окремий вид мистецтва в нашій компанії. Кожна деталь обгортається індивідуально, щоб виключити найменший ризик пошкодження.
                    </p>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-[#6B1D1D]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[#FAF8F5] mb-1">Багатошаровий захист</h4>
<p className="text-xs font-light text-white/60">Повітряно-бульбашкова плівка та крафт-папір для кожної позиції.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-[#6B1D1D]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[#FAF8F5] mb-1">Спеціальні ложементи</h4>
<p className="text-xs font-light text-white/60">Фіксація посуду всередині коробки за допомогою індивідуальних форм.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-[#6B1D1D]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[#FAF8F5] mb-1">Повне страхування</h4>
<p className="text-xs font-light text-white/60">Кожне відправлення застраховане на повну вартість замовлення.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-12">
<h2 className="font-['Playfair_Display',serif] text-3xl tracking-tight font-medium text-[#2D2A26] mb-3">Ідеї для подарунка</h2>
<p className="text-sm font-light text-[#2D2A26]/70">Готові рішення для важливих подій</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="group relative h-80 rounded-lg overflow-hidden bg-[#EFEBE4]" href="#">
<img alt="Весілля" className="w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-xs font-medium text-white/80 uppercase tracking-widest block mb-1">Колекції</span>
<h3 className="font-['Playfair_Display',serif] text-2xl tracking-tight text-white mb-2">На весілля</h3>
<span className="text-sm text-white/90 font-light flex items-center gap-1 group-hover:gap-2 transition-all">Дивитися добірку <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
<a className="group relative h-80 rounded-lg overflow-hidden bg-[#EFEBE4]" href="#">
<img alt="День народження" className="w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1603504113222-793b5b15beba?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-xs font-medium text-white/80 uppercase tracking-widest block mb-1">Подарунки</span>
<h3 className="font-['Playfair_Display',serif] text-2xl tracking-tight text-white mb-2">День народження</h3>
<span className="text-sm text-white/90 font-light flex items-center gap-1 group-hover:gap-2 transition-all">Дивитися добірку <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
<a className="group relative h-80 rounded-lg overflow-hidden bg-[#EFEBE4]" href="#">
<img alt="Новосілля" className="w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-xs font-medium text-white/80 uppercase tracking-widest block mb-1">Затишний дім</span>
<h3 className="font-['Playfair_Display',serif] text-2xl tracking-tight text-white mb-2">На новосілля</h3>
<span className="text-sm text-white/90 font-light flex items-center gap-1 group-hover:gap-2 transition-all">Дивитися добірку <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
</div>
</section>

<section className="py-20 bg-[#F3EFE9]" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<span className="text-xs font-medium tracking-widest uppercase text-[#6B1D1D] mb-4 block">Про нас</span>
<h2 className="font-['Playfair_Display',serif] text-3xl tracking-tight font-medium text-[#2D2A26] mb-6">
                            Традиції якості, непідвладні часу
                        </h2>
<p className="text-sm font-light text-[#2D2A26]/80 mb-6 leading-relaxed">
                            AURA — це не просто магазин посуду. Ми ретельно відбираємо колекції від найкращих світових мануфактур, де секрети роботи з порцеляною передаються з покоління в покоління.
                        </p>
<p className="text-sm font-light text-[#2D2A26]/80 leading-relaxed mb-8">
                            Наша місія — привнести у ваш дім естетику справжньої краси. Будь то сімейна вечеря чи урочистий прийом, наша порцеляна стане ідеальним полотном для ваших кулінарних шедеврів.
                        </p>
<img alt="Craftsmanship" className="w-full h-48 object-cover rounded-md grayscale opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1617082315750-f8ba6bc36149?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex flex-col justify-center">
<span className="text-xs font-medium tracking-widest uppercase text-[#6B1D1D] mb-4 block">Відгуки</span>
<h2 className="font-['Playfair_Display',serif] text-3xl tracking-tight font-medium text-[#2D2A26] mb-8">
                            Слова наших клієнтів
                        </h2>
<div className="space-y-6">

<div className="bg-white p-6 rounded-md shadow-sm border border-[#2D2A26]/5">
<div className="flex gap-1 text-[#6B1D1D] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-light text-[#2D2A26]/80 mb-4 italic">
                                    "Замовляла сервіз на ювілей батькам. Хвилювалася за доставку, але спаковано було так, що можна скидати з літака. Сам сервіз — витвір мистецтва."
                                </p>
<p className="text-xs font-medium text-[#2D2A26]">— Олена В., м. Київ</p>
</div>

<div className="bg-white p-6 rounded-md shadow-sm border border-[#2D2A26]/5">
<div className="flex gap-1 text-[#6B1D1D] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-light text-[#2D2A26]/80 mb-4 italic">
                                    "Шукав мінімалістичні чашки для кави. Якість чудова, дуже тонка, але міцна порцеляна. Приємно тримати в руках. Дякую!"
                                </p>
<p className="text-xs font-medium text-[#2D2A26]">— Михайло С.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6 md:px-12">
<div className="text-center mb-12">
<h2 className="font-['Playfair_Display',serif] text-3xl tracking-tight font-medium text-[#2D2A26] mb-3">Часті запитання</h2>
</div>
<div className="space-y-4">

<details className="group border-b border-[#2D2A26]/10 pb-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer text-base font-medium text-[#2D2A26] list-none">
                        Чи можна мити ваш посуд у посудомийній машині?
                        <span className="transition duration-300 group-open:rotate-45 text-[#6B1D1D]">
<iconify-icon className="text-xl" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="pt-4 text-sm font-light text-[#2D2A26]/70 leading-relaxed">
                        Більшість наших колекцій (без золотої або платинової облямівки) підходять для миття у посудомийній машині на делікатному режимі. Для сервізів з дорогоцінними металами ми рекомендуємо виключно ручне миття м'якими засобами.
                    </div>
</details>

<details className="group border-b border-[#2D2A26]/10 pb-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer text-base font-medium text-[#2D2A26] list-none">
                        Що робити, якщо посуд приїде розбитим?
                        <span className="transition duration-300 group-open:rotate-45 text-[#6B1D1D]">
<iconify-icon className="text-xl" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="pt-4 text-sm font-light text-[#2D2A26]/70 leading-relaxed">
                        Ми ретельно пакуємо кожне замовлення, тому відсоток бою становить менше 0.1%. Якщо це все ж сталося, просто сфотографуйте пошкодження при отриманні у відділенні або при кур'єрі, і ми безкоштовно надішлемо заміну в найкоротші терміни.
                    </div>
</details>

<details className="group border-b border-[#2D2A26]/10 pb-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer text-base font-medium text-[#2D2A26] list-none">
                        Терміни та вартість доставки?
                        <span className="transition duration-300 group-open:rotate-45 text-[#6B1D1D]">
<iconify-icon className="text-xl" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="pt-4 text-sm font-light text-[#2D2A26]/70 leading-relaxed">
                        Доставка по Києву займає 1-2 дні. В регіони відправляємо транспортними компаніями (Нова Пошта), середній термін 1-3 дні. Вартість розраховується автоматично при оформленні замовлення. При замовленні від 5 000 грн доставка по Україні безкоштовна.
                    </div>
</details>
</div>
</section>
</main>

<footer className="bg-[#2D2A26] text-[#FAF8F5] pt-16 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="font-['Playfair_Display',serif] text-2xl tracking-tighter text-white font-medium mb-6 block" href="#">
                        A U R A
                    </a>
<p className="text-xs font-light text-white/60 mb-6 max-w-xs">
                        Преміальна порцеляна для вашого дому. Мистецтво сервірування, доступне кожному.
                    </p>
<div className="flex gap-4 text-white/80">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white/90">Каталог</h4>
<ul className="space-y-2 text-xs font-light text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Сервізи</a></li>
<li><a className="hover:text-white transition-colors" href="#">Тарілки та блюда</a></li>
<li><a className="hover:text-white transition-colors" href="#">Чашки та кружки</a></li>
<li><a className="hover:text-white transition-colors" href="#">Чайники та кавники</a></li>
<li><a className="hover:text-white transition-colors" href="#">Новинки</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white/90">Клієнтам</h4>
<ul className="space-y-2 text-xs font-light text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Доставка та оплата</a></li>
<li><a className="hover:text-white transition-colors" href="#">Гарантія цілісності</a></li>
<li><a className="hover:text-white transition-colors" href="#">Повернення товару</a></li>
<li><a className="hover:text-white transition-colors" href="#">Догляд за порцеляною</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white/90">Підписка</h4>
<p className="text-xs font-light text-white/60 mb-4">Дізнавайтесь першими про нові колекції та закриті розпродажі.</p>
<div className="flex border-b border-white/30 focus-within:border-white transition-colors pb-2">
<input className="bg-transparent border-none outline-none text-sm w-full text-white placeholder:text-white/40" placeholder="Ваш e-mail" type="email"/>
<button className="text-[#FAF8F5] hover:text-[#6B1D1D] transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[10px] font-light text-white/40">
<p>© 2023 AURA Porcelain. Всі права захищені.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white/80" href="#">Політика конфіденційності</a>
<a className="hover:text-white/80" href="#">Угода користувача</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

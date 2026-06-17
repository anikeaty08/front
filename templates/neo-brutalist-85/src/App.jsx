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



tailwind.config = {
theme: {
extend: {
fontFamily: {
space: ['Manrope', 'sans-serif'],
},
colors: {
credione: '#E31E24',
canvas: '#FFFFFF',
ink: '#000000',
surface: '#F3F4F6',
},
boxShadow: {
'hard': '10px 10px 0px 0px #000000',
'hard-sm': '4px 4px 0px 0px #000000',
}
}
}
}



        // Simple script for calculator interactions
        // Note: Real functionality would go here
    
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
      

<nav className="sticky top-0 z-50 bg-canvas border-b-4 border-black px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-credione border-4 border-black flex items-center justify-center">
<span className="iconify text-white" data-height="20" data-icon="lucide:zap" data-width="20"></span>
</div>
<span className="text-2xl font-black tracking-tighter uppercase">CrediOne</span>
</div>
<div className="hidden md:flex gap-8 font-bold text-lg uppercase tracking-tight">
<a className="hover:underline decoration-4 decoration-credione underline-offset-4" href="#">Лични</a>
<a className="hover:underline decoration-4 decoration-credione underline-offset-4" href="#">Бизнес</a>
<a className="hover:underline decoration-4 decoration-credione underline-offset-4" href="#">Ресурси</a>
</div>
<div className="flex gap-4">
<button className="hidden md:block font-bold uppercase hover:text-credione transition-colors">Вход</button>
<button className="bg-black text-white px-6 py-2 font-bold uppercase border-4 border-black hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_#888] hover:shadow-hard-sm hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                Изтегли
            </button>
</div>
</nav>

<main>

<section className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh] border-b-4 border-black bg-surface">

<div className="lg:col-span-7 flex flex-col justify-center px-6 py-12 lg:p-20 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-canvas">
<div className="inline-flex self-start bg-credione text-white border-2 border-black px-3 py-1 font-bold text-sm uppercase tracking-wider mb-6 shadow-hard-sm">
                    Бета Достъпът е Активен
                </div>
<h1 className="text-7xl lg:text-9xl font-black leading-[0.85] uppercase tracking-tighter mb-8">
                    Пари.<br/>
<span className="text-stroke-black">Бързо.</span><br/>
                    Сега.
                </h1>
<p className="text-xl lg:text-2xl font-medium max-w-lg leading-tight mb-12">
                    Необруталистичният финансов двигател за модерния играч. Без скрити такси. Само чист капитал.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-credione text-white text-xl px-10 py-4 font-bold uppercase border-4 border-black shadow-hard hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-3">
                        Започни Сега
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="24"></span>
</button>
<button className="bg-white text-black text-xl px-10 py-4 font-bold uppercase border-4 border-black shadow-hard hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
                        Как работи
                    </button>
</div>
</div>

<div className="lg:col-span-5 flex items-center justify-center p-6 lg:p-12 bg-pattern bg-[#F3F4F6] relative overflow-hidden">

<div className="absolute top-10 right-10 text-9xl opacity-5 font-black select-none pointer-events-none">%</div>
<div className="absolute bottom-10 left-10 text-9xl opacity-5 font-black select-none pointer-events-none">лв</div>
<div className="w-full max-w-md bg-white border-8 border-black p-8 shadow-[16px_16px_0px_0px_#000000] relative z-10">
<div className="flex justify-between items-center mb-8 border-b-4 border-black pb-4">
<h3 className="text-3xl font-black uppercase tracking-tight">Калкулатор</h3>
<span className="iconify" data-icon="lucide:calculator" data-width="32"></span>
</div>

<div className="mb-8">
<div className="flex justify-between font-bold text-lg mb-4 uppercase">
<label>Сума</label>
<span className="bg-black text-white px-2" id="amountDisplay">5,000 лв.</span>
</div>
<input className="w-full" max="50000" min="1000" oninput="document.getElementById('amountDisplay').innerText = parseInt(this.value).toLocaleString() + ' лв.'" step="500" type="range" value="5000"/>
<div className="flex justify-between text-xs font-bold mt-2 uppercase text-gray-500">
<span>1 хил. лв.</span>
<span>50 хил. лв.</span>
</div>
</div>

<div className="mb-10">
<div className="flex justify-between font-bold text-lg mb-4 uppercase">
<label>Срок</label>
<span className="bg-black text-white px-2" id="termDisplay">12 Месеца</span>
</div>
<input className="w-full" max="36" min="3" oninput="document.getElementById('termDisplay').innerText = this.value + ' Месеца'" step="1" type="range" value="12"/>
<div className="flex justify-between text-xs font-bold mt-2 uppercase text-gray-500">
<span>3м</span>
<span>36м</span>
</div>
</div>

<div className="bg-surface border-4 border-black p-4 mb-8">
<div className="flex justify-between items-end">
<span className="font-bold uppercase text-sm">Месечна Вноска</span>
<span className="text-4xl font-black tracking-tighter text-credione">458 лв.</span>
</div>
</div>
<button className="w-full bg-black text-white py-5 text-xl font-bold uppercase border-4 border-black hover:bg-credione transition-colors shadow-hard-sm active:translate-y-1 active:translate-x-1 active:shadow-none flex justify-center items-center gap-2">
                        Кандидатствай
                        <span className="iconify" data-icon="lucide:check" data-width="24"></span>
</button>
</div>
</div>
</section>

<div className="border-b-4 border-black bg-credione text-white overflow-hidden py-3">
<div className="flex gap-12 whitespace-nowrap animate-marquee font-black uppercase text-2xl tracking-tight">
<span>• Моментално Одобрение</span>
<span>• Без Хартия</span>
<span>• Брутално Просто</span>
<span>• 0% Глупости</span>
<span>• Моментално Одобрение</span>
<span>• Без Хартия</span>
<span>• Брутално Просто</span>
<span>• 0% Глупости</span>
<span>• Моментално Одобрение</span>
<span>• Без Хартия</span>
<span>• Брутално Просто</span>
<span>• 0% Глупости</span>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-black">

<div className="p-10 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white hover:bg-surface transition-colors group">
<div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center shadow-hard-sm mb-6 group-hover:-translate-y-2 group-hover:shadow-[6px_6px_0px_0px_#E31E24] transition-all">
<span className="iconify" data-icon="lucide:zap" data-width="32"></span>
</div>
<h3 className="text-4xl font-black uppercase mb-4 tracking-tighter">Светкавична Скорост</h3>
<p className="font-medium text-lg leading-relaxed">
                    Нашият AI ви оценява за милисекунди. Парите са в сметката ви преди да успеете да мигнете.
                </p>
</div>

<div className="p-10 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white hover:bg-surface transition-colors group">
<div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center shadow-hard-sm mb-6 group-hover:-translate-y-2 group-hover:shadow-[6px_6px_0px_0px_#E31E24] transition-all">
<span className="iconify" data-icon="lucide:shield-check" data-width="32"></span>
</div>
<h3 className="text-4xl font-black uppercase mb-4 tracking-tighter">Желязна Сигурност</h3>
<p className="font-medium text-lg leading-relaxed">
                    Банково криптиране в бруталистична обвивка. Данните ви са заключени в дигитална крепост.
                </p>
</div>

<div className="p-10 bg-white hover:bg-surface transition-colors group">
<div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center shadow-hard-sm mb-6 group-hover:-translate-y-2 group-hover:shadow-[6px_6px_0px_0px_#E31E24] transition-all">
<span className="iconify" data-icon="lucide:infinity" data-width="32"></span>
</div>
<h3 className="text-4xl font-black uppercase mb-4 tracking-tighter">Гъвкав Мащаб</h3>
<p className="font-medium text-lg leading-relaxed">
                    От микрокредити до мега-капитал. Регулирайте сроковете си за погасяване без наказателни такси.
                </p>
</div>
</section>

<section className="bg-black text-white border-b-4 border-black py-20 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
<div>
<div className="text-6xl font-black mb-2 text-credione">500М+ лв</div>
<div className="font-bold uppercase tracking-widest text-sm">Раздадени</div>
</div>
<div>
<div className="text-6xl font-black mb-2 text-credione">24ч</div>
<div className="font-bold uppercase tracking-widest text-sm">Поддръжка</div>
</div>
<div>
<div className="text-6xl font-black mb-2 text-credione">15сек</div>
<div className="font-bold uppercase tracking-widest text-sm">Одобрение</div>
</div>
<div>
<div className="text-6xl font-black mb-2 text-credione">4.9/5</div>
<div className="font-bold uppercase tracking-widest text-sm">Оценка</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface flex flex-col items-center text-center">
<h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 max-w-4xl">
                Готови да <span className="text-stroke-black text-transparent" style={{WebkitTextStroke: '2px black', color: 'transparent'}}>разбиете</span> банката?
            </h2>
<p className="text-xl font-medium max-w-2xl mb-12">
                Присъединете се към 100 000+ потребители, избрали най-бързата платформа на земята.
            </p>
<div className="flex flex-col md:flex-row gap-6 w-full max-w-md md:max-w-none justify-center">
<input className="bg-white border-4 border-black p-4 text-xl font-bold uppercase placeholder:text-gray-400 focus:outline-none focus:shadow-hard transition-shadow w-full md:w-96" placeholder="ВЪВЕДИ ИМЕЙЛ" type="email"/>
<button className="bg-credione text-white text-xl px-12 py-4 font-bold uppercase border-4 border-black shadow-hard hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all whitespace-nowrap">
                    Начало
                </button>
</div>
</section>
</main>

<footer className="bg-white border-t-4 border-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-black flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:zap" data-width="16"></span>
</div>
<span className="text-xl font-black tracking-tighter uppercase">CrediOne</span>
</div>
<p className="font-medium text-sm">
                    Преоткриваме финансите с груба сила и елегантен код.
                </p>
</div>
<div>
<h4 className="font-black uppercase mb-6 text-lg">Продукт</h4>
<ul className="space-y-4 font-bold text-sm uppercase">
<li><a className="hover:text-credione hover:underline decoration-4" href="#">Кредити</a></li>
<li><a className="hover:text-credione hover:underline decoration-4" href="#">Спестявания</a></li>
<li><a className="hover:text-credione hover:underline decoration-4" href="#">Карти</a></li>
</ul>
</div>
<div>
<h4 className="font-black uppercase mb-6 text-lg">Компания</h4>
<ul className="space-y-4 font-bold text-sm uppercase">
<li><a className="hover:text-credione hover:underline decoration-4" href="#">За нас</a></li>
<li><a className="hover:text-credione hover:underline decoration-4" href="#">Кариери</a></li>
<li><a className="hover:text-credione hover:underline decoration-4" href="#">Преса</a></li>
</ul>
</div>
<div>
<h4 className="font-black uppercase mb-6 text-lg">Правни</h4>
<ul className="space-y-4 font-bold text-sm uppercase">
<li><a className="hover:text-credione hover:underline decoration-4" href="#">Условия</a></li>
<li><a className="hover:text-credione hover:underline decoration-4" href="#">Поверителност</a></li>
<li><a className="hover:text-credione hover:underline decoration-4" href="#">Лицензи</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-bold text-xs uppercase">© 2024 CrediOne Fintech Inc. Всички права запазени.</p>
<div className="flex gap-4">
<a className="w-10 h-10 border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="w-10 h-10 border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="w-10 h-10 border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
</div>
</div>
</footer>


    </>
  );
}

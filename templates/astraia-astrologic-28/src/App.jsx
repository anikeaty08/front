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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      // Initialize Lucide icons
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<div className="fixed inset-0 pointer-events-none -z-10 flex justify-center overflow-hidden">

<div className="absolute inset-0 opacity-[0.25] mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=%2230%22 height=%2230%22 viewBox=%220 0 30 30%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%2215%22 cy=%2215%22 r=%221%22 fill=%22%2364748b%22/%3E%3C/svg%3E\')'}}></div>

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] text-blue-400/20" fill="none" stroke="currentColor" strokeWidth="0.2" style={{animation: 'spin 180s linear infinite'}} viewbox="0 0 200 200">
<circle cx="100" cy="100" r="95"></circle>
<circle cx="100" cy="100" r="88" stroke-dasharray="1 3"></circle>
<circle cx="100" cy="100" r="75"></circle>
<circle cx="100" cy="100" r="55"></circle>
<path d="M5 100 L195 100 M100 5 L100 195 M32.8 32.8 L167.2 167.2 M32.8 167.2 L167.2 32.8"></path>
<polygon points="100,5 167.2,32.8 195,100 167.2,167.2 100,195 32.8,167.2 5,100 32.8,32.8"></polygon>
<polygon points="100,25 115,85 175,100 115,115 100,175 85,115 25,100 85,85" strokeWidth="0.15"></polygon>
</svg>

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] text-indigo-400/20" fill="none" stroke="currentColor" strokeWidth="0.25" style={{animation: 'spin 120s linear infinite reverse'}} viewbox="0 0 200 200">
<circle cx="100" cy="100" r="80" stroke-dasharray="4 4"></circle>
<polygon points="100,20 156.5,43.5 180,100 156.5,156.5 100,180 43.5,156.5 20,100 43.5,43.5"></polygon>
<polygon points="100,40 142.4,57.6 160,100 142.4,142.4 100,160 57.6,142.4 40,100 57.6,57.6"></polygon>
</svg>

<div className="absolute top-0 w-full max-w-7xl h-[1000px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] to-transparent from-white/95 via-white/60"></div>
<div className="absolute -left-[10%] top-[10%] w-[50%] h-[60%] blur-[120px] rounded-full bg-indigo-300/20"></div>
<div className="absolute -right-[10%] top-[30%] w-[40%] h-[60%] blur-[120px] rounded-full bg-blue-300/20"></div>
<div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-[60%] h-[40%] blur-[120px] rounded-full bg-blue-200/20"></div>
</div>

<header className="w-full flex justify-between items-center px-8 py-8 max-w-6xl mx-auto">
<div className="text-xs uppercase tracking-[0.2em] font-medium font-nunito text-neutral-400">
        Astraia
      </div>
<div className="flex items-center gap-6">
<span className="text-xs uppercase tracking-[0.2em] cursor-pointer transition-colors font-nunito text-neutral-400 hover:text-neutral-600">
          Про метод
        </span>
<div className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-colors border-neutral-200 hover:bg-white/50">
<i className="w-4 h-4 text-neutral-500" data-lucide="grid-3x3" strokeWidth="1.5"></i>
</div>
</div>
</header>

<main className="flex flex-col max-w-4xl mr-auto ml-auto pt-20 pr-6 pb-32 pl-6 relative items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 text-[24rem] leading-none mix-blend-overlay opacity-60 -z-10 select-none pointer-events-none tracking-tighter font-nunito font-semibold text-white">
        22
      </div>

<div className="text-center max-w-2xl mb-24">
<h1 className="text-5xl md:text-6xl tracking-tight mb-8 font-nunito font-semibold text-neutral-900">
          Матриця Вашої Долі
        </h1>
<p className="leading-relaxed text-lg font-light text-neutral-500 font-nunito">
          Введіть дату свого народження, щоб розкрити унікальний енергетичний
          код. Наш алгоритм розрахує ключові аркани, які формують ваш характер,
          таланти та життєвий шлях.
        </p>
</div>

<div className="absolute right-0 top-64 hidden lg:flex items-center gap-4 border rounded-full px-5 py-2.5 backdrop-blur-md opacity-70 border-indigo-200/60 bg-white/30">
<span className="text-xs font-nunito text-neutral-400">Розрахунок за секунду</span>
<i className="w-3 h-3 text-indigo-400" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>

<div className="relative w-full max-w-md">

<form className="flex flex-col gap-6 relative z-10">
<div className="relative">
<label className="sr-only font-nunito" htmlFor="birthdate">Дата народження</label>
<div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
<i className="w-5 h-5 text-neutral-400" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<input className="w-full backdrop-blur-sm border rounded-full pl-14 pr-6 py-4 text-lg font-light focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:border-indigo-300 transition-all shadow-[0_4px_20px_rgb(0,0,0,0.02)] bg-white/60 border-neutral-200/80 text-neutral-700" id="birthdate" type="date" value="1995-05-12"/>
</div>
<button className="group relative w-full flex items-center justify-center gap-3 rounded-full px-8 py-4 text-lg font-normal transition-all duration-300 shadow-lg bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/10" type="button">
<span className="font-nunito">Порахувати Матрицю</span>
<div className="w-6 h-6 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors bg-white/10">
<i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</button>
</form>

<div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
<div className="w-[1px] h-16 bg-gradient-to-b to-transparent from-neutral-300"></div>
<div className="w-6 h-6 rounded-full border flex items-center justify-center border-neutral-200 bg-white/50">
<i className="w-3 h-3 text-neutral-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
</main>

<section className="max-w-5xl mx-auto px-6 py-32 relative">
<div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
<div className="md:col-span-2">
<h2 className="text-4xl tracking-tight mb-4 font-nunito font-semibold text-neutral-900">
            Деталізація Енергій
          </h2>
<p className="text-lg text-neutral-500 font-light max-w-xl font-nunito">
            Ваша матриця базується на 22 вищих арканах. Кожне число несе певну
            вібрацію, що проявляється як у позитивному, так і в негативному
            руслі в залежності від ваших дій.
          </p>
</div>
<div className="flex justify-start md:justify-end">
<div className="inline-flex flex-col border rounded-2xl p-5 backdrop-blur-sm border-neutral-200/60 bg-white/40">
<span className="text-xs uppercase tracking-widest mb-1 font-nunito text-neutral-400">
              Аналіз для
            </span>
<span className="text-lg font-medium font-nunito text-neutral-800">
              12 Травня 1995
            </span>
</div>
</div>
</div>

<div className="w-full">
<div className="grid grid-cols-12 gap-6 pb-6 border-b text-xs uppercase tracking-[0.15em] font-medium border-neutral-200 text-neutral-400">
<div className="col-span-12 md:col-span-3 px-2 font-nunito">Сфера життя</div>
<div className="col-span-12 md:col-span-2 px-2 hidden md:block text-center font-nunito">
            Аркан
          </div>
<div className="col-span-12 md:col-span-7 px-2 font-nunito">
            Опис та прояв енергії
          </div>
</div>
<div className="flex flex-col">

<div className="grid grid-cols-12 gap-6 py-10 border-b group transition-colors rounded-xl px-2 border-neutral-100/80 hover:bg-white/40">
<div className="col-span-12 md:col-span-3 flex flex-col pt-2">
<span className="text-lg font-medium mb-1 font-nunito text-neutral-800">
                Центр Матриці
              </span>
<span className="text-base font-light font-nunito text-neutral-400">
                Характер та суть
              </span>
</div>
<div className="col-span-12 md:col-span-2 flex items-start md:justify-center pt-1">
<div className="w-14 h-14 rounded-full border flex items-center justify-center bg-[#f8fbfe] text-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] font-nunito font-semibold border-indigo-100 text-neutral-700">
                8
              </div>
</div>
<div className="col-span-12 md:col-span-7 pt-2">
<h3 className="text-lg font-medium mb-3 font-nunito text-neutral-800">
                Справедливість та Рівновага
              </h3>
<p className="text-lg text-neutral-500 font-light leading-relaxed font-nunito">
                Ви володієте глибоким розумінням причинно-наслідкових зв'язків.
                Прагнете до чесності та структурності. У плюсі ви — надійний
                партнер та об'єктивний спостерігач. Важливо уникати засудження
                інших та ділення світу лише на чорне та біле.
              </p>
</div>
</div>

<div className="grid grid-cols-12 gap-6 py-10 border-b group transition-colors rounded-xl px-2 border-neutral-100/80 hover:bg-white/40">
<div className="col-span-12 md:col-span-3 flex flex-col pt-2">
<span className="text-lg font-medium mb-1 font-nunito text-neutral-800">
                Вище Призначення
              </span>
<span className="text-base font-light font-nunito text-neutral-400">
                Духовний шлях
              </span>
</div>
<div className="col-span-12 md:col-span-2 flex items-start md:justify-center pt-1">
<div className="w-14 h-14 rounded-full border flex items-center justify-center bg-[#f8fbfe] text-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] font-nunito font-semibold border-indigo-100 text-neutral-700">
                12
              </div>
</div>
<div className="col-span-12 md:col-span-7 pt-2">
<h3 className="text-lg font-medium mb-3 font-nunito text-neutral-800">
                Нове бачення та Служіння
              </h3>
<p className="text-lg text-neutral-500 font-light leading-relaxed font-nunito">
                Ваша місія — приносити у світ нестандартні ідеї та допомагати
                іншим через емпатію. Ви здатні бачити ситуації з незвичного
                ракурсу. Головне завдання — навчитися служити людям без шкоди
                для себе, не впадаючи в позицію жертви.
              </p>
</div>
</div>

<div className="grid grid-cols-12 gap-6 py-10 border-b group transition-colors rounded-xl px-2 border-neutral-100/80 hover:bg-white/40">
<div className="col-span-12 md:col-span-3 flex flex-col pt-2">
<span className="text-lg font-medium mb-1 font-nunito text-neutral-800">
                Лінія Добробуту
              </span>
<span className="text-base font-light font-nunito text-neutral-400">
                Фінанси та реалізація
              </span>
</div>
<div className="col-span-12 md:col-span-2 flex items-start md:justify-center pt-1">
<div className="w-14 h-14 rounded-full border flex items-center justify-center bg-[#f8fbfe] text-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] font-nunito font-semibold border-indigo-100 text-neutral-700">
                15
              </div>
</div>
<div className="col-span-12 md:col-span-7 pt-2">
<h3 className="text-lg font-medium mb-3 font-nunito text-neutral-800">
                Проявленість та Харизма
              </h3>
<p className="text-lg text-neutral-500 font-light leading-relaxed font-nunito">
                Потужна енергія матеріального світу. Гроші приходять через
                вміння впливати, керувати ресурсами та бачити приховані мотиви.
                Ви володієте магнетизмом. Важливо розвиватися чесним шляхом,
                уникаючи маніпуляцій та залежностей.
              </p>
</div>
</div>
</div>
</div>

<div className="mt-24 flex justify-center">
<div className="w-24 h-[1px] bg-neutral-200"></div>
</div>
</section>

<footer className="max-w-6xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light text-neutral-400">
<div className="font-nunito">© 2024 Astraia Matrix. Всі права захищено.</div>
<div className="flex gap-6 uppercase tracking-widest text-xs">
<a className="transition-colors font-nunito hover:text-neutral-600" href="#">
          Політика конфіденційності
        </a>
<a className="transition-colors font-nunito hover:text-neutral-600" href="#">
          Умови використання
        </a>
</div>
</footer>


    </>
  );
}

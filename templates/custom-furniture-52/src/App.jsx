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
      

<header className="sticky top-0 z-50 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight uppercase">Target</span>
</div>
<nav className="hidden md:flex gap-8 items-center">
<a className="text-base text-gray-900 font-medium hover:text-[#4B6051] transition-colors" href="#">Головна</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Послуги</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Портфоліо</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Сертифікати</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Ціноутворення</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Про нас</a>
</nav>
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-5 h-5 bg-blue-500 rounded-sm relative overflow-hidden flex items-center justify-center">
<div className="absolute top-0 w-full h-1/2 bg-yellow-400"></div>
</div>
<span className="text-base font-medium">UA</span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</header>

<section className="relative h-[600px] flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://placehold.co/1920x800/2a2a2a/333333')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">Салон меблів TARGET</h1>
<p className="text-lg md:text-xl text-gray-200">Створюємо меблі під замовлення в Одесі, що використовують кожний сантиметр простору</p>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">TARGET салон меблів в Одесі</h2>
<p className="text-lg text-gray-600 mb-8">
            Ми виготовляємо меблі під індивідуальне замовлення в Одесі з 2014 року.
        </p>
<p className="text-lg text-gray-600 mb-8">
<span className="font-semibold text-gray-900">TARGET</span> — це власне виробництво повного циклу: від розробки проєкту й прорахунку всієї меблів для квартири до виготовлення, збірки та монтажу.
        </p>
<p className="text-lg text-gray-600 mb-16">
            Ми працюємо не з окремими предметами, а з простором загалом. Продумуємо меблі так, щоб вони точно відповідали вашому плануванню, звичкам і способу життя, використовували кожен сантиметр і залишались зручними щодня.
        </p>
<div className="flex flex-col items-center">
<i className="w-8 h-8 text-gray-300 mb-6 rotate-180" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-2xl font-medium italic tracking-tight mb-8">Меблі мають бути <span className="text-gray-900">про вас та для вас</span>, а не для візуалізації</p>
<button className="bg-[#4B6051] text-white px-8 py-3 rounded-full text-base font-medium flex items-center gap-2 hover:bg-[#3a4a3f] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                Детальніше
            </button>
</div>
</section>

<div className="fixed bottom-6 right-6 z-50 bg-white shadow-xl border border-gray-100 p-6 rounded-2xl w-[320px] flex flex-col gap-4">
<div className="flex justify-between items-start">
<p className="text-xs text-gray-500 leading-relaxed pr-4">Для вашої зручності ми використовуємо файли cookie. Ознайомтеся з нашою Політикою конфіденційності, щоб дізнатися більше.</p>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<button className="bg-gray-900 text-white text-xs font-medium py-2 px-4 rounded-md self-start hover:bg-gray-800 transition-colors">Прийняти</button>
</div>

<section className="py-24 bg-[#F9FAFB]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">Чому саме салон меблів TARGET?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="bg-white p-10 rounded-[2rem] shadow-sm text-left flex flex-col items-center text-center">
<div className="w-20 h-20 bg-[#F1F3F2] rounded-full flex items-center justify-center mb-6">
<i className="w-8 h-8 text-[#4B6051]" data-lucide="ruler" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Індивідуальні рішення під ваш простір</h3>
<p className="text-base text-gray-500">Меблі виготовляються точно під ваші розміри, наші майстри в декілька етапів ретельно роблять заміри всієї квартири. Ми використовуємо кожен сантиметр простору з користю, без порожніх зон і нефункціональних рішень.</p>
</div>

<div className="bg-white p-10 rounded-[2rem] shadow-sm text-left flex flex-col items-center text-center">
<div className="w-20 h-20 bg-[#F1F3F2] rounded-full flex items-center justify-center mb-6">
<i className="w-8 h-8 text-[#4B6051]" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Ваш спосіб життя та звички у центрі</h3>
<p className="text-base text-gray-500">Перед проєктуванням меблів на етапі переговорів ми з'ясовуємо ваш спосіб життя, звички, побутові сценарії тощо, аби меблі органічно вписувалися у ваш ритм життя</p>
</div>

<div className="bg-white p-10 rounded-[2rem] shadow-sm text-left flex flex-col items-center text-center">
<div className="w-20 h-20 bg-[#F1F3F2] rounded-full flex items-center justify-center mb-6">
<i className="w-8 h-8 text-[#4B6051]" data-lucide="palette" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Професійний дизайн + функціональність</h3>
<p className="text-base text-gray-500">Наші меблі виглядають сучасно, але перш за все — зручні у використанні. Над їх створенням працюють професійні дизайнери та майстри, тому ми не жертвуємо функціональністю заради просто красивої картинки.</p>
</div>

<button className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md items-center justify-center text-gray-400 hover:text-gray-900 transition-colors z-10">
<i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex justify-center gap-2 mt-12">
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-800"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F5F3]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Наші послуги</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Target full home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://placehold.co/600x400/3d3d3d/666666"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
<h3 className="text-2xl font-medium tracking-tight mb-4">Target full home</h3>
<button className="bg-[#4B6051]/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-medium flex items-center gap-2 hover:bg-[#4B6051] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                            Детальніше
                        </button>
</div>
</div>

<div className="relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Кухня" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://placehold.co/600x400/4a4a4a/777777"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
<h3 className="text-2xl font-medium tracking-tight mb-4">Кухня</h3>
<button className="bg-[#4B6051]/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-medium flex items-center gap-2 hover:bg-[#4B6051] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                            Детальніше
                        </button>
</div>
</div>

<div className="relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Спальня" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://placehold.co/600x400/555555/888888"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
<h3 className="text-2xl font-medium tracking-tight mb-4">Спальня</h3>
<button className="bg-[#4B6051]/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-medium flex items-center gap-2 hover:bg-[#4B6051] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                            Детальніше
                        </button>
</div>
</div>

<div className="relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Вітальня" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://placehold.co/600x400/3a3a3a/666666"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
<h3 className="text-2xl font-medium tracking-tight mb-4">Вітальня</h3>
<button className="bg-[#4B6051]/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-medium flex items-center gap-2 hover:bg-[#4B6051] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                            Детальніше
                        </button>
</div>
</div>

<div className="relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Ванна кімната" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://placehold.co/600x400/4d4d4d/7a7a7a"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
<h3 className="text-2xl font-medium tracking-tight mb-4">Ванна кімната</h3>
<button className="bg-[#4B6051]/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-medium flex items-center gap-2 hover:bg-[#4B6051] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                            Детальніше
                        </button>
</div>
</div>

<div className="relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Шафа та гардеробна" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://placehold.co/600x400/5a5a5a/8c8c8c"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
<h3 className="text-2xl font-medium tracking-tight mb-4">Шафа та гардеробна</h3>
<button className="bg-[#4B6051]/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-medium flex items-center gap-2 hover:bg-[#4B6051] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                            Детальніше
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Портфоліо</h2>
<p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
                За роки роботи ми вибудували чіткі процеси, які дозволяють реалізовувати проєкти стабільно, якісно, своєчасно й без компромісів
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-12">

<div className="flex flex-col">
<div className="relative h-[300px] rounded-3xl overflow-hidden mb-4">
<img alt="ЖК Атмосфера" className="w-full h-full object-cover" src="https://placehold.co/600x400/e0e0e0/a0a0a0"/>

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-gray-400" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
<span className="text-xs text-gray-500">Натисніть, щоб збільшити</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">ЖК Атмосфера</h3>
<p className="text-base text-gray-600 mb-4 line-clamp-3">Реалізація послуги <span className="font-medium text-gray-900">Target Full Home</span> у ЖК «Атмосфера»: створення гарного простору на стику сучасного лаконічності та класичних деталей.</p>
<p className="text-sm text-gray-500 mb-6">Ми поєднали глибокі дерев'яні фасади, виразну фактуру мармуру і латунні акценти, підкресливши геометрію кімнат освітленням.</p>
<button className="mt-auto self-start bg-[#4B6051] text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#3a4a3f] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                        Детальніше
                    </button>
</div>

<div className="flex flex-col">
<div className="relative h-[300px] rounded-3xl overflow-hidden mb-4">
<img alt="ЖК Модерн" className="w-full h-full object-cover" src="https://placehold.co/600x400/d0d0d0/909090"/>

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-gray-400" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
<span className="text-xs text-gray-500">Натисніть, щоб збільшити</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">ЖК Модерн</h3>
<p className="text-base text-gray-600 mb-4 line-clamp-3">Реалізація послуги <span className="font-medium text-gray-900">Target Full Home</span> у ЖК «Модерн»: ми побудували інтер'єр на контрасті дерев'яних текстур, декор штукатурки і світлими акцентам.</p>
<p className="text-sm text-gray-500 mb-6">Робоча зона кухні з матовими зеленими фасадами та прихованими системами зберігання Wash стала функціональним центром квартири.</p>
<button className="mt-auto self-start bg-[#4B6051] text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#3a4a3f] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                        Детальніше
                    </button>
</div>

<div className="flex flex-col">
<div className="relative h-[300px] rounded-3xl overflow-hidden mb-4">
<img alt="ЖК Родос" className="w-full h-full object-cover" src="https://placehold.co/600x400/c0c0c0/808080"/>

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-gray-400" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
<span className="text-xs text-gray-500">Натисніть, щоб збільшити</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">ЖК Родос</h3>
<p className="text-base text-gray-600 mb-4 line-clamp-3">Реалізація послуги <span className="font-medium text-gray-900">Target Full Home</span> у ЖК «Родос»: створення затишного простору з естетикою теплого мінімалізму.</p>
<p className="text-sm text-gray-500 mb-6">Ми поєднали природні дерев'яні текстури та атмосферну LED-підсвітку з функціональними рішеннями для кожної кімнати.</p>
<button className="mt-auto self-start bg-[#4B6051] text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#3a4a3f] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                        Детальніше
                    </button>
</div>


<div className="flex flex-col">
<div className="relative h-[300px] rounded-3xl overflow-hidden mb-4">
<img alt="ЖК 4 сезони" className="w-full h-full object-cover" src="https://placehold.co/600x400/d0d0d0/909090"/>

<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-gray-400" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
<span className="text-xs text-gray-500">Натисніть, щоб збільшити</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">ЖК 4 сезони</h3>
<p className="text-base text-gray-600 mb-4 line-clamp-3">Реалізація послуги <span className="font-medium text-gray-900">Target Full Home</span> у ЖК «4 сезони»: створення світлого та графічного простору з акцентом на чисті лінії.</p>
<p className="text-sm text-gray-500 mb-6">Ми поєднали матові білі фасади й теплі дерев'яні текстури з контрастними чорними деталями та прихованими системами зберігання.</p>
<button className="mt-auto self-start bg-[#4B6051] text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#3a4a3f] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                        Детальніше
                    </button>
</div>

<div className="flex flex-col">
<div className="relative h-[300px] rounded-3xl overflow-hidden mb-4">
<img alt="ЖК Чайка" className="w-full h-full object-cover" src="https://placehold.co/600x400/e0e0e0/a0a0a0"/>

<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-gray-400" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
<span className="text-xs text-gray-500">Натисніть, щоб збільшити</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">ЖК Чайка</h3>
<p className="text-base text-gray-600 mb-4 line-clamp-3">Реалізація послуги <span className="font-medium text-gray-900">Target Full Home</span> у ЖК «Чайка»: створення світлого та ергономічного простору з акцентом на глянцеві поверхні.</p>
<p className="text-sm text-gray-500 mb-6">Ми поєднали білі фасади й чорний мармур із продуманими системами зберігання, органічно вписавши робочі зони та місця для відпочинку.</p>
<button className="mt-auto self-start bg-[#4B6051] text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#3a4a3f] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                        Детальніше
                    </button>
</div>

<div className="flex flex-col">
<div className="relative h-[300px] rounded-3xl overflow-hidden mb-4">
<img alt="ЖК Модерн" className="w-full h-full object-cover" src="https://placehold.co/600x400/c0c0c0/808080"/>

<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-gray-400" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
<span className="text-xs text-gray-500">Натисніть, щоб збільшити</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">ЖК Модерн</h3>
<p className="text-base text-gray-600 mb-4 line-clamp-3">Реалізація послуги <span className="font-medium text-gray-900">Target Full Home</span> у ЖК «Модерн»: створення затишного простору з естетикою теплого мінімалізму.</p>
<p className="text-sm text-gray-500 mb-6">Ми поєднали матові фасади у відтінку кашемір та фактуру дерева з підвісними системами зберігання, зберігши легкість у кожній кімнаті.</p>
<button className="mt-auto self-start bg-[#4B6051] text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#3a4a3f] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
                        Детальніше
                    </button>
</div>
</div>
<button className="bg-[#4B6051] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-[#3a4a3f] transition-colors">
                Переглянути всі кейси
            </button>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-center">Працювати з нами це про комфорт та швидкість!</h2>
<p className="text-lg text-gray-600 mb-16 text-center">
                За 12 років ми налагодили процес так, щоб клієнти витрачали мінімум часу на комунікацію та зайвий контроль!
            </p>
<div className="flex flex-col gap-10">

<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
<img alt="Крок 1" className="w-32 h-32 rounded-full object-cover shrink-0" src="https://placehold.co/120x120/e0e0e0/a0a0a0"/>
<div className="text-center sm:text-left pt-2">
<h3 className="text-xl font-semibold tracking-tight mb-2">Крок №1: Заявка на сайті</h3>
<p className="text-base text-gray-600">Ви заповнюєте форму та залишаєте заявку. Наш менеджер зв'язується з вами, відповідає на запитання та погоджує першу зустріч</p>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
<img alt="Крок 2" className="w-32 h-32 rounded-full object-cover shrink-0" src="https://placehold.co/120x120/d0d0d0/909090"/>
<div className="text-center sm:text-left pt-2">
<h3 className="text-xl font-semibold tracking-tight mb-2">Крок №2: Перша зустріч в салоні</h3>
<p className="text-base text-gray-600">Ми зустрічаємося особисто, обговорюємо ваші побажання, задачі та очікування від меблів. На цьому етапі прораховуємо орієнтовну вартість проєкту</p>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
<img alt="Крок 3" className="w-32 h-32 rounded-full object-cover shrink-0" src="https://placehold.co/120x120/c0c0c0/808080"/>
<div className="text-center sm:text-left pt-2">
<h3 className="text-xl font-semibold tracking-tight mb-2">Крок №3: Заміри приміщення</h3>
<p className="text-base text-gray-600">Наші спеціалісти виконують перші точні заміри всієї зони, де плануються меблі. Це основа для коректного дизайну та прорахунку</p>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
<img alt="Крок 4" className="w-32 h-32 rounded-full object-cover shrink-0" src="https://placehold.co/120x120/d0d0d0/909090"/>
<div className="text-center sm:text-left pt-2">
<h3 className="text-xl font-semibold tracking-tight mb-2">Крок №4: Дизайн і підбір матеріалів</h3>
<p className="text-base text-gray-600">Робимо детальний проєкт меблів, підбираємо матеріали та фурнітуру відповідно до вашого бюджету й стилю. Усі рішення узгоджуються з вами</p>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
<img alt="Крок 5" className="w-32 h-32 rounded-full object-cover shrink-0" src="https://placehold.co/120x120/e0e0e0/a0a0a0"/>
<div className="text-center sm:text-left pt-2">
<h3 className="text-xl font-semibold tracking-tight mb-2">Крок №5: Фінальна вартість і договір</h3>
<p className="text-base text-gray-600">Після затвердження дизайну формуємо фінальну вартість, фіксуємо строки та підписуємо договір. Жодних прихованих змін у процесі</p>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
<img alt="Крок 6" className="w-32 h-32 rounded-full object-cover shrink-0" src="https://placehold.co/120x120/c0c0c0/808080"/>
<div className="text-center sm:text-left pt-2">
<h3 className="text-xl font-semibold tracking-tight mb-2">Крок №6: Виробництво та монтаж</h3>
<p className="text-base text-gray-600">Ми виготовляємо меблі на власному виробництві та робимо монтаж. Ви просто оцінюєте готовий результат, який повністю адаптований саме під ваш простір</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Наші партнери</h2>
<p className="text-base text-gray-500 mb-12">Саме ці компанії допомагають нам забезпечувати найвищу якість для наших клієнтів</p>
<div className="flex items-center justify-center gap-8 md:gap-16">
<button className="text-gray-300 hover:text-gray-600 transition-colors">
<i className="w-8 h-8" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<div className="flex items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">

<span className="text-3xl font-semibold tracking-tight text-orange-600 italic">blum</span>
<div className="flex flex-col items-center">
<span className="text-2xl font-bold tracking-tighter text-red-600">E</span>
<span className="text-xl font-bold tracking-tight text-gray-900">EGGER</span>
</div>
<span className="text-3xl font-bold tracking-tight text-gray-900">Hettich</span>
</div>
<button className="text-gray-300 hover:text-gray-600 transition-colors">
<i className="w-8 h-8" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<section className="py-24 bg-[#F9FAFB]">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Сертифікати та винагороди</h2>
<p className="text-lg text-gray-600 mb-16">
                А також ми одні з небагатьох салонів меблів, хто офіційно співпрацює з вищезазначеними партнерами<br/>
                І тому маємо доступ до сертифікатів підтвердження якості від них, а також від українських державних органів
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">

<div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center">
<img alt="Certificate" className="w-full md:w-1/2 object-contain bg-gray-50 rounded-xl p-2" src="https://placehold.co/200x150/f0f0f0/a0a0a0"/>
<div className="w-full md:w-1/2">
<h3 className="text-lg font-semibold tracking-tight mb-2">Сертифікат Fraunhofer WKI E[D2020]</h3>
<p className="text-sm text-gray-500">Матеріали відповідають новітньому німецькому стандарту E[D2020], який ще суворіший за звичайний клас E1. Максимальна екологічна чистота.</p>
</div>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row-reverse gap-6 items-center">
<img alt="Certificate" className="w-full md:w-1/2 object-contain bg-gray-50 rounded-xl p-2" src="https://placehold.co/200x150/f0f0f0/a0a0a0"/>
<div className="w-full md:w-1/2">
<h3 className="text-lg font-semibold tracking-tight mb-2">Сертифікат системи менеджменту якості ISO</h3>
<p className="text-sm text-gray-500">Цей сертифікат підтверджує, що наш партнер компанія Egger має бездоганну систему контролю якості виробництва світового рівня.</p>
</div>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center">
<img alt="Certificate" className="w-full md:w-1/2 object-contain bg-gray-50 rounded-xl p-2" src="https://placehold.co/200x150/f0f0f0/a0a0a0"/>
<div className="w-full md:w-1/2">
<h3 className="text-lg font-semibold tracking-tight mb-2">Сертифікат ОБ-RPPD на ДСП типу P2</h3>
<p className="text-sm text-gray-500">Документ підтверджує, що наші стільниці вироблені з вологостійкої плити типу P3. Вони витримують кухонні умови та не розбухають від вологості.</p>
</div>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row-reverse gap-6 items-center">
<img alt="Certificate" className="w-full md:w-1/2 object-contain bg-gray-50 rounded-xl p-2" src="https://placehold.co/200x150/f0f0f0/a0a0a0"/>
<div className="w-full md:w-1/2">
<h3 className="text-lg font-semibold tracking-tight mb-2">Сертифікат SGS (FSC Chain-of-Custody)</h3>
<p className="text-sm text-gray-500">Міжнародний знак якості, який гарантує, що деревина для наших плит отримана з легальних лісів, де дбають про відновлення природи, а не з браконьєрських вирубок.</p>
</div>
</div>
</div>
<button className="bg-[#4B6051] text-white px-8 py-3 rounded-full text-base font-medium flex items-center justify-center gap-2 mx-auto hover:bg-[#3a4a3f] transition-colors">
<i className="w-5 h-5" data-lucide="plus-circle" strokeWidth="1.5"></i>
                Більше сертифікатів
            </button>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Що говорять клієнти про нас?</h2>
<p className="text-lg text-gray-600 mb-16">
                Якість наших виробів підтверджується не тільки сертифікатами, а й відгуками десятків задоволених клієнтів
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">

<div className="bg-[#F0F2F5] rounded-[2.5rem] p-4 shadow-sm relative overflow-hidden h-[500px]">
<div className="bg-white/50 backdrop-blur-md text-xs py-1 rounded-full w-24 mx-auto mb-4 mt-2">Сьогодні 09:45</div>
<div className="flex flex-col gap-3 text-sm text-left px-2">
<div className="flex items-end gap-2 self-start">
<div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden"><img alt="avatar" src="https://placehold.co/24x24/ccc/999"/></div>
<div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm max-w-[80%]">Как вам новая мебель от Target?</div>
</div>
<div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-none shadow-sm max-w-[80%] self-end">Все ли вам понравилось?</div>
<div className="flex items-end gap-2 self-start mt-2">
<div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden"><img alt="avatar" src="https://placehold.co/24x24/ccc/999"/></div>
<div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm max-w-[85%]">Нравится!!! Всем довольна!!!<br/>С вами по-другому и не бывает)<br/>Спасибо большущее, всегда вы лучшие ❤️</div>
</div>
<div className="bg-blue-500 text-white p-3 rounded-2xl rounded-br-none shadow-sm max-w-[80%] self-end mt-2">Мы очень рады что вам все нравится ⭐️ Мы старались!</div>
</div>
</div>

<div className="bg-[#E4EFE9] rounded-[2.5rem] p-0 shadow-sm relative overflow-hidden h-[500px] flex flex-col">
<div className="bg-white/80 backdrop-blur-md p-3 flex items-center justify-between border-b border-gray-100/50">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-gray-600" data-lucide="arrow-left" strokeWidth="1.5"></i>
<div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"><img alt="avatar" src="https://placehold.co/32x32/ccc/999"/></div>
<span className="font-medium text-sm">Оксана</span>
</div>
</div>
<div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden text-sm text-left">
<div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm max-w-[90%] self-start relative">
                            Любовь, добрый вечер! Хотим сказать Вам большое спасибо за шкаф, за вашу работу, все быстро и качественно (просто супер) ребенок доволен 😊
                            <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">20:31</span>
</div>
<img alt="Photo" className="rounded-xl w-3/4 self-start shadow-sm mt-2" src="https://placehold.co/200x300/e0e0e0/a0a0a0"/>
</div>

<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
</div>
</div>

<div className="bg-[#F0F2F5] rounded-[2.5rem] p-4 shadow-sm relative overflow-hidden h-[500px] flex flex-col">
<img alt="Room" className="rounded-xl mb-4 w-full h-40 object-cover shadow-sm" src="https://placehold.co/300x200/d0d0d0/909090"/>
<div className="flex flex-col gap-2 text-sm text-left">
<div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm self-start relative pr-10">
                            Уютно очень
                            <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">15:05</span>
</div>
<div className="bg-[#E1FFC7] p-3 rounded-2xl rounded-br-none shadow-sm self-end relative pr-10">
                            Мне тоже очень нравится спасибо
                            <span className="text-[10px] text-gray-500 absolute bottom-1 right-2">15:24</span>
</div>
<div className="bg-[#E1FFC7] p-3 rounded-2xl rounded-br-none shadow-sm self-end relative pr-10 mt-1">
                            За тумбочки спасибо
                            <span className="text-[10px] text-gray-500 absolute bottom-1 right-2">15:24</span>
</div>
<div className="bg-[#E1FFC7] p-3 rounded-2xl rounded-br-none shadow-sm self-end relative pr-10 mt-1">
                            Симпатичные
                            <span className="text-[10px] text-gray-500 absolute bottom-1 right-2">15:24</span>
</div>
<div className="bg-[#E1FFC7] p-3 rounded-2xl rounded-br-none shadow-sm self-end relative pr-10 mt-1">
                            Пока будут
                            <span className="text-[10px] text-gray-500 absolute bottom-1 right-2">15:24</span>
</div>
</div>

<button className="absolute -right-4 top-1/2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white z-10">
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex justify-center gap-2 mt-8">
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-800"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-center">Ціноутворення TARGET</h2>
<p className="text-base text-gray-500 mb-16 text-center max-w-4xl mx-auto">
                Нижче наведені приклади стандартної комплектації тих чи інших приміщень з орієнтовною вартістю. Фактична вартість вашого проєкту буде залежати від комплектації, виду матеріалів та фурнітури
            </p>
<div className="flex flex-col border-t border-gray-200">

<div className="flex flex-col md:flex-row items-center py-6 border-b border-gray-200 gap-6">
<img alt="Спальня" className="w-24 h-24 rounded-2xl object-cover shrink-0" src="https://placehold.co/100x100/e0e0e0/a0a0a0"/>
<h3 className="text-xl font-medium w-full md:w-1/5 text-center md:text-left">Спальня</h3>
<div className="w-full md:w-2/5 text-center md:text-left text-sm text-gray-600">
<p>Шафа ДСП/МДФ</p>
<p>Дві приліжкових тумби</p>
<p>Косметичний столик</p>
</div>
<div className="w-full md:w-1/5 text-center font-medium text-gray-900">Від 1400 $ до 2200 $</div>
<div className="w-full md:w-1/5 flex justify-center md:justify-end">
<button className="bg-[#4B6051] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#3a4a3f] transition-colors">Замовити</button>
</div>
</div>

<div className="flex flex-col md:flex-row items-center py-6 border-b border-gray-200 gap-6">
<img alt="Кухня" className="w-24 h-24 rounded-2xl object-cover shrink-0" src="https://placehold.co/100x100/d0d0d0/909090"/>
<h3 className="text-xl font-medium w-full md:w-1/5 text-center md:text-left">Кухня</h3>
<div className="w-full md:w-2/5 text-center md:text-left text-sm text-gray-600">
<p>Довжина 3 метри</p>
<p>Фасад МДФ</p>
<p>Стільниця ДСП</p>
</div>
<div className="w-full md:w-1/5 text-center font-medium text-gray-900">Від 2000 $ до 3000 $</div>
<div className="w-full md:w-1/5 flex justify-center md:justify-end">
<button className="bg-[#4B6051] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#3a4a3f] transition-colors">Замовити</button>
</div>
</div>

<div className="flex flex-col md:flex-row items-center py-6 border-b border-gray-200 gap-6">
<img alt="Вітальня" className="w-24 h-24 rounded-2xl object-cover shrink-0" src="https://placehold.co/100x100/c0c0c0/808080"/>
<h3 className="text-xl font-medium w-full md:w-1/5 text-center md:text-left">Вітальня</h3>
<div className="w-full md:w-2/5 text-center md:text-left text-sm text-gray-600">
<p>Тумба ТВ з висувними шухлядами 2 метри</p>
<p>Або Тумба ТВ з вітриною 2.4 м довжини</p>
</div>
<div className="w-full md:w-1/5 text-center font-medium text-gray-900">Від 300 $ до 1100 $</div>
<div className="w-full md:w-1/5 flex justify-center md:justify-end">
<button className="bg-[#4B6051] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#3a4a3f] transition-colors">Замовити</button>
</div>
</div>

<div className="flex flex-col md:flex-row items-center py-6 border-b border-gray-200 gap-6">
<img alt="Ванна кімната" className="w-24 h-24 rounded-2xl object-cover shrink-0" src="https://placehold.co/100x100/d0d0d0/909090"/>
<h3 className="text-xl font-medium w-full md:w-1/5 text-center md:text-left">Ванна кімната</h3>
<div className="w-full md:w-2/5 text-center md:text-left text-sm text-gray-600">
<p>Пенал 80*2.6 з глибиною 400 ДСП/МДФ</p>
<p>Тумба 1 метр з ДСП стільницею</p>
<p>Інсталяція зверху ДСП/МДФ</p>
</div>
<div className="w-full md:w-1/5 text-center font-medium text-gray-900">Від 1250 $ до 1900 $</div>
<div className="w-full md:w-1/5 flex justify-center md:justify-end">
<button className="bg-[#4B6051] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#3a4a3f] transition-colors">Замовити</button>
</div>
</div>

<div className="flex flex-col md:flex-row items-center py-6 border-b border-gray-200 gap-6">
<img alt="Гардеробна" className="w-24 h-24 rounded-2xl object-cover shrink-0" src="https://placehold.co/100x100/e0e0e0/a0a0a0"/>
<h3 className="text-xl font-medium w-full md:w-1/5 text-center md:text-left">Гардеробна</h3>
<div className="w-full md:w-2/5 text-center md:text-left text-sm text-gray-600">
<p>Г-подібна форма</p>
<p>Або П-подібна форма</p>
</div>
<div className="w-full md:w-1/5 text-center font-medium text-gray-900">Від 900 $ до 1500 $</div>
<div className="w-full md:w-1/5 flex justify-center md:justify-end">
<button className="bg-[#4B6051] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#3a4a3f] transition-colors">Замовити</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Життєвий цикл меблів</h2>
<p className="text-lg text-gray-600 mb-16 max-w-4xl mx-auto">
                Ми надаємо гарантію на меблі, консультуємо після встановлення та проєктуємо рішення з розрахунком на повноцінний життєвий цикл, з урахуванням зносу, навантаження та змін у житті
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gray-200 -z-10"></div>

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-[#526054] text-white flex items-center justify-center text-xl font-medium mb-6 z-10 border-4 border-white">
                        1-5 р
                    </div>
<p className="text-base text-gray-600 px-4">Меблі виглядають як нові. Фурнітура працює безшумно</p>
</div>

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-[#526054] text-white flex items-center justify-center text-xl font-medium mb-6 z-10 border-4 border-white">
                        5-10 р
                    </div>
<p className="text-base text-gray-600 px-4">Потрібне лише мінімальне регулювання петель (це нормальний процес усадки будівлі)</p>
</div>

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-[#526054] text-white flex items-center justify-center text-xl font-medium mb-6 z-10 border-4 border-white">
                        15+ р
                    </div>
<p className="text-base text-gray-600 px-4">Фасади та корпуси залишаються цілими завдяки якісним матеріалам. За бажанням ви зможете просто змінити колір фасадів (рефейсинг), залишивши надійну основу та фурнітуру, що заощадить вам 60% вартості нової кухні в майбутньому.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9FAFB]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-center">Лайфхаки від TARGET</h2>
<p className="text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                Завдяки цим лайфхакам вже сотні наших клієнтів змогли зробити своє помешкання ще більш зручним, ергономічним та естетичним
            </p>

<div className="flex flex-wrap justify-center gap-6 mb-12 border-b border-gray-200 pb-4">
<button className="flex items-center gap-2 text-gray-900 font-medium border-b-2 border-gray-900 pb-4 -mb-[18px]">
<i className="w-5 h-5" data-lucide="chef-hat" strokeWidth="1.5"></i> Кухня
                </button>
<button className="flex items-center gap-2 text-gray-400 hover:text-gray-900 font-medium pb-4">
<i className="w-5 h-5" data-lucide="bed-double" strokeWidth="1.5"></i> Спальня
                </button>
<button className="flex items-center gap-2 text-gray-400 hover:text-gray-900 font-medium pb-4">
<i className="w-5 h-5" data-lucide="sofa" strokeWidth="1.5"></i> Вітальня
                </button>
<button className="flex items-center gap-2 text-gray-400 hover:text-gray-900 font-medium pb-4">
<i className="w-5 h-5" data-lucide="bath" strokeWidth="1.5"></i> Ванна кімната
                </button>
<button className="flex items-center gap-2 text-gray-400 hover:text-gray-900 font-medium pb-4">
<i className="w-5 h-5" data-lucide="shirt" strokeWidth="1.5"></i> Гардеробна
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-[2rem] p-6 shadow-sm">
<img alt="Лайфхак 1" className="w-full h-48 object-cover rounded-2xl mb-6" src="https://placehold.co/400x250/e0e0e0/a0a0a0"/>
<h3 className="text-lg font-semibold tracking-tight mb-3">U-подібна шухляда під мийкою</h3>
<p className="text-sm text-gray-600 mb-4">Розумне використання простору, який зазвичай гуляє навколо сифону. Спеціальна форма шухляди змушує кожен вільний сантиметр цієї зони.</p>
<p className="text-sm text-gray-600">Це ідеальне місце для організованого зберігання губок, таблеток для посудомийки та миючих засобів, які завжди мають бути під рукою, але не на видноті.</p>
</div>

<div className="bg-white rounded-[2rem] p-6 shadow-sm">
<img alt="Лайфхак 2" className="w-full h-48 object-cover rounded-2xl mb-6" src="https://placehold.co/400x250/d0d0d0/909090"/>
<h3 className="text-lg font-semibold tracking-tight mb-3">Гараж для техніки</h3>
<p className="text-sm text-gray-600 mb-4">Окрема ніша з розетками, прихована за ролетою або фасадами. Чайник, тостер та кавомашина завжди підключені до мережі, але не створюють візуального шуму.</p>
<p className="text-sm text-gray-600">Треба кава? Відкрили секцію. Прийшли гості? Закрили одним рухом — і ваша кухня миттєво виглядає ідеально прибраною та мінімалістичною.</p>
</div>

<div className="bg-white rounded-[2rem] p-6 shadow-sm">
<img alt="Лайфхак 3" className="w-full h-48 object-cover rounded-2xl mb-6" src="https://placehold.co/400x250/c0c0c0/808080"/>
<h3 className="text-lg font-semibold tracking-tight mb-3">Мобільний тримач для тарілок</h3>
<p className="text-sm text-gray-600 mb-4">Надійне зберігання стосу тарілок у глибоких шухлядах без зайвого шуму та пошкоджень. Легко регулюється під будь-який діаметр вашого посуду.</p>
<p className="text-sm text-gray-600">Головна перевага — мобільність. Ви просто берете весь стос за зручні ручки та несете його на стіл для швидкого та ефектного сервірування.</p>
</div>

<div className="bg-white rounded-[2rem] p-6 shadow-sm">
<img alt="Лайфхак 4" className="w-full h-48 object-cover rounded-2xl mb-6" src="https://placehold.co/400x250/d0d0d0/909090"/>
<h3 className="text-lg font-semibold tracking-tight mb-3">Цокольна система SPACE STEP</h3>
<p className="text-sm text-gray-600 mb-4">Рішення 2-в-1 для кухонь під стелю, це додаткова висувна шухляда у цоколі та надійна сходинка, що витримує вагу дорослої людини.</p>
<p className="text-sm text-gray-600">Більше жодних табуреток: ви отримуєте легкий доступ до верхніх ярусів шаф та додаткове приховане місце для зберігання рідко використовуваних речей.</p>
</div>

<div className="bg-white rounded-[2rem] p-6 shadow-sm">
<img alt="Лайфхак 5" className="w-full h-48 object-cover rounded-2xl mb-6" src="https://placehold.co/400x250/e0e0e0/a0a0a0"/>
<h3 className="text-lg font-semibold tracking-tight mb-3">Мертвий кут</h3>
<p className="text-sm text-gray-600 mb-4">Найкращий спосіб ефективно задіяти "мертву зону" кутової кухні. Система полиць повністю виїжджає назовні при відкриванні фасаду.</p>
<p className="text-sm text-gray-600">Це забезпечує 100% огляд та зручний доступ до габаритного посуду та каструль, які зазвичай губляться в глибині кутових шаф.</p>
</div>

<div className="bg-white rounded-[2rem] p-6 shadow-sm">
<img alt="Лайфхак 6" className="w-full h-48 object-cover rounded-2xl mb-6" src="https://placehold.co/400x250/c0c0c0/808080"/>
<h3 className="text-lg font-semibold tracking-tight mb-3">Висувні системи сортування</h3>
<p className="text-sm text-gray-600 mb-4">Професійна система контейнерів, яка виїжджає при відкриванні фасаду. Це робить сортування відходів простим, гігієнічним та зручним.</p>
<p className="text-sm text-gray-600">Щільні кришки залишаються всередині секції, блокуючи запахи, а змиви відра легко мити. Ідеальний порядок навіть там, де його зазвичай ніхто не бачить.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="grid grid-cols-2 gap-4 h-[600px]">
<img alt="Collage 1" className="w-full h-full object-cover rounded-3xl" src="https://placehold.co/300x600/e0e0e0/a0a0a0"/>
<div className="grid grid-rows-2 gap-4">
<img alt="Collage 2" className="w-full h-full object-cover rounded-3xl" src="https://placehold.co/300x290/d0d0d0/909090"/>
<img alt="Collage 3" className="w-full h-full object-cover rounded-3xl" src="https://placehold.co/300x290/c0c0c0/808080"/>
</div>
</div>

<div className="flex flex-col">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Залишайте заявку</h2>
<p className="text-base text-gray-600 mb-8">
                        Та отримуйте безкоштовний розрахунок вартості. А також дизайн-проєкт меблів у подарунок
                    </p>
<form className="flex flex-col gap-6">
<input className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-gray-900 transition-colors text-base placeholder:text-gray-400" placeholder="Ім'я" type="text"/>
<input className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-gray-900 transition-colors text-base placeholder:text-gray-400" placeholder="+38(000)000-00-00" type="tel"/>
<div className="relative w-full">
<select className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-gray-900 transition-colors text-base text-gray-500 appearance-none cursor-pointer">
<option disabled="" selected="" value="">Тип приміщення</option>
<option value="flat">Квартира</option>
<option value="house">Будинок</option>
</select>
<i className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-3 mt-4">
<p className="text-sm font-medium text-gray-900 mb-1">Для якої кімнати бажаєте замовити меблі?*</p>

<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-[#4B6051] peer-checked:border-[#4B6051] transition-colors">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Кухня</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-[#4B6051] peer-checked:border-[#4B6051] transition-colors">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Спальня</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-[#4B6051] peer-checked:border-[#4B6051] transition-colors">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Вітальня</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-[#4B6051] peer-checked:border-[#4B6051] transition-colors">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Ванна кімната</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-[#4B6051] peer-checked:border-[#4B6051] transition-colors">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Гардеробна</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-[#4B6051] peer-checked:border-[#4B6051] transition-colors">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Передпокій</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-[#4B6051] peer-checked:border-[#4B6051] transition-colors">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Вся квартира</span>
</label>
</div>
<div className="mt-4 relative w-full border-b border-gray-300 pb-2">
<p className="text-sm text-gray-500 mb-2">На яку дату було б зручно зустрітись у нашому салоні?*</p>
<div className="flex items-center justify-between cursor-pointer">
<span className="text-base text-gray-400">Вибрати дату</span>
<i className="w-5 h-5 text-gray-400" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
</div>
<button className="w-full bg-[#4B6051] text-white px-6 py-4 rounded-full text-base font-medium flex items-center justify-center gap-2 hover:bg-[#3a4a3f] transition-colors mt-4" type="button">
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
                            Надіслати
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Часті запитання</h2>
<div className="flex flex-col border-t border-gray-200">

<div className="py-6 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Скільки часу займає виготовлення меблів?</h3>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="py-6 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">З чого починається співпраця?</h3>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="py-6 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Чи можна замовити меблі одразу для всієї квартири?</h3>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="py-6 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Яка мінімальна сума замовлення?</h3>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="py-6 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Які матеріали та фурнітуру ви використовуєте?</h3>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="py-6 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Чи можна скоригувати проєкт під бюджет?</h3>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="py-6 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Чи фіксується ціна після погодження проєкту?</h3>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="py-6 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Хто виконує заміри та монтаж?</h3>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="py-6 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Чи надаєте ви гарантію на меблі?</h3>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="py-6 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Чи можна звернутися до вас із готовим дизайн проєктом?</h3>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<footer className="bg-[#F9FAFB] py-16 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight uppercase mb-6">Target</span>
<p className="text-sm text-gray-500 mb-6">12 років створюємо меблі, що влучають у ваші мрії</p>
<p className="text-sm font-medium mb-4">Контакти:</p>
<p className="text-sm text-gray-500 mb-2">Адреса: Одеса, вул. Олександрівська 50-70 (Малиновський район)</p>
<p className="text-sm text-gray-500 mb-6">Номери телефонів: +380961765385 та +380731085852</p>
<div className="flex items-center gap-4 mb-8">
<a className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
<a className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i> 
</a>
</div>
<p className="text-xs text-gray-400 mt-auto">TARGET © 2014—2025. Всі права захищені</p>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-base font-medium mb-2">Навігація</h4>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Головна</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Послуги</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Портфоліо</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Сертифікати</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Про нас</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Ціноутворення</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Політика конфіденційності</a>
</div>

<div className="lg:col-span-2 rounded-2xl overflow-hidden h-64 lg:h-auto relative border border-gray-200">
<img alt="Map" className="w-full h-full object-cover" src="https://placehold.co/800x600/f0f0f0/a0a0a0?text=Map"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<i className="w-8 h-8 text-red-500 fill-white" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<button className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:bg-white transition-colors text-blue-600">
<i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
                        Відкрити на Картах
                    </button>
</div>
</div>
</div>
</footer>


    </>
  );
}

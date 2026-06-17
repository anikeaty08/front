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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200 glass">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center gap-2">
<iconify-icon className="text-emerald-700" height="20" icon="lucide:leaf" width="20"></iconify-icon>
<span className="font-heading text-xl tracking-tight text-stone-900 mt-1">VEGAN PRODUCTS</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-500">
<a className="hover:text-emerald-700 transition-colors" href="#benefits">Преимущества</a>
<a className="hover:text-emerald-700 transition-colors" href="#how-it-works">Как это работает</a>
<a className="hover:text-emerald-700 transition-colors" href="#products">Каталог</a>
<a className="hover:text-emerald-700 transition-colors" href="#chef">Шеф</a>
<a className="hover:text-emerald-700 transition-colors" href="#reviews">Отзывы</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-emerald-800 hover:bg-emerald-900 transition-all duration-300 shadow-sm hover:shadow-md" href="#order">
                    Заказать
                </a>
<div className="md:hidden flex items-center">
<button className="text-stone-500 hover:text-stone-900">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
<div className="absolute top-0 left-0 -translate-y-12 -translate-x-12 w-96 h-96 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6 uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                100% Натуральный состав
            </div>
<h1 className="font-heading text-6xl md:text-8xl text-stone-900 leading-none mb-6">
                Вкусная еда <br className="hidden md:block"/>
<span className="text-emerald-800">Без компромиссов</span>
</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-stone-600 font-light">
                Растительные продукты без ГМО, сахара и химии. Мы отобрали лучшее, чтобы вы наслаждались здоровьем каждый день.
            </p>
<div className="mt-10 mb-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 bg-emerald-800 text-white rounded-lg font-medium text-lg hover:bg-emerald-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 group" href="#order">
                    Заказать пробный набор
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-stone-700 border border-stone-200 rounded-lg font-medium text-lg hover:border-stone-400 hover:bg-stone-50 transition-all duration-300 flex items-center justify-center" href="#products">
                    Смотреть меню
                </a>
</div>

<div className="relative max-w-4xl mx-auto mt-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent z-10"></div>
<img alt="Healthy Vegan Food" className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute bottom-6 left-6 z-20 text-white text-left">
<div className="text-sm font-medium bg-emerald-600/90 backdrop-blur px-3 py-1 rounded-full inline-block mb-2">Хит продаж</div>
<div className="font-heading text-2xl tracking-wide">Боул с киноа и авокадо</div>
</div>
</div>
<div className="mt-12 flex items-center justify-center gap-4 text-sm text-stone-500">
<div className="flex -space-x-2">
<img alt="User 1" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">+5k</div>
</div>
<p>Довольных клиентов выбирают нас</p>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-stone-100" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-heading text-4xl md:text-5xl text-stone-900 mb-4">Честный подход к еде</h2>
<p className="text-stone-500 text-lg max-w-2xl mx-auto">Мы решаем главные проблемы поиска качественных веганских продуктов.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-700 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:search-x" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mb-2 text-stone-400 text-sm line-through decoration-stone-400">Устали читать мелкий шрифт в составе?</div>
<h3 className="text-xl font-semibold text-stone-900">Прозрачный и понятный состав</h3>
<p className="mt-2 text-stone-600 text-sm leading-relaxed">
                        Никаких скрытых ингредиентов под кодами "Е". Только то, что вы можете найти на собственной кухне.
                    </p>
</div>
<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-700 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:carrot" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mb-2 text-stone-400 text-sm line-through decoration-stone-400">Пластиковый вкус магазинных аналогов?</div>
<h3 className="text-xl font-semibold text-stone-900">Натуральный вкус продуктов</h3>
<p className="mt-2 text-stone-600 text-sm leading-relaxed">
                        Мы используем технологии бережной обработки, чтобы сохранить текстуру и вкус настоящих овощей и орехов.
                    </p>
</div>
<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-700 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:truck" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mb-2 text-stone-400 text-sm line-through decoration-stone-400">Сложно найти всё в одном месте?</div>
<h3 className="text-xl font-semibold text-stone-900">Доставка полной корзины</h3>
<p className="mt-2 text-stone-600 text-sm leading-relaxed">
                        От завтраков до ужинов. Соберите полноценный рацион в одном заказе с доставкой до двери.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-b border-stone-200" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div>
<span className="text-emerald-700 font-semibold text-sm tracking-wider uppercase mb-2 block">Процесс</span>
<h2 className="font-heading text-4xl md:text-5xl text-stone-900">Путь к здоровью прост</h2>
</div>
<div className="hidden md:block h-px flex-grow mx-8 bg-stone-200 relative top-[-10px]"></div>
<p className="text-stone-500 max-w-sm text-right md:text-left">Всего 4 простых шага отделяют вас от идеального рациона.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="relative group">
<div className="text-8xl font-heading text-stone-100 absolute -top-8 -left-4 -z-10 group-hover:text-emerald-50 transition-colors">01</div>
<div className="w-14 h-14 bg-white border border-stone-200 rounded-full flex items-center justify-center text-emerald-700 mb-6 z-10 relative shadow-sm">
<iconify-icon icon="lucide:mouse-pointer-click" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Выбор продуктов</h3>
<p className="text-sm text-stone-500 leading-relaxed">Соберите корзину на сайте или доверьтесь готовым наборам от наших нутрициологов.</p>
</div>

<div className="relative group">
<div className="text-8xl font-heading text-stone-100 absolute -top-8 -left-4 -z-10 group-hover:text-emerald-50 transition-colors">02</div>
<div className="w-14 h-14 bg-white border border-stone-200 rounded-full flex items-center justify-center text-emerald-700 mb-6 z-10 relative shadow-sm">
<iconify-icon icon="lucide:chef-hat" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Приготовление</h3>
<p className="text-sm text-stone-500 leading-relaxed">Готовим в день заказа. Используем вакуумную упаковку для максимальной свежести.</p>
</div>

<div className="relative group">
<div className="text-8xl font-heading text-stone-100 absolute -top-8 -left-4 -z-10 group-hover:text-emerald-50 transition-colors">03</div>
<div className="w-14 h-14 bg-white border border-stone-200 rounded-full flex items-center justify-center text-emerald-700 mb-6 z-10 relative shadow-sm">
<iconify-icon icon="lucide:rocket" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Быстрая доставка</h3>
<p className="text-sm text-stone-500 leading-relaxed">Курьер привезет заказ в удобный интервал времени. В термосумке.</p>
</div>

<div className="relative group">
<div className="text-8xl font-heading text-stone-100 absolute -top-8 -left-4 -z-10 group-hover:text-emerald-50 transition-colors">04</div>
<div className="w-14 h-14 bg-white border border-stone-200 rounded-full flex items-center justify-center text-emerald-700 mb-6 z-10 relative shadow-sm">
<iconify-icon icon="lucide:heart-handshake" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Польза и вкус</h3>
<p className="text-sm text-stone-500 leading-relaxed">Наслаждайтесь едой, которая наполняет энергией, а не тяжестью.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="font-heading text-4xl md:text-5xl text-stone-900">Наш ассортимент</h2>
<p className="mt-2 text-stone-500">Только растительные ингредиенты высшего качества</p>
</div>
<a className="text-emerald-700 font-medium hover:text-emerald-800 flex items-center gap-1 group" href="#">
                    Весь каталог <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl bg-stone-50 border border-stone-200 flex flex-col items-center justify-center p-6 hover:border-emerald-500 transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-stone-300 group-hover:text-emerald-600 transition-colors mb-4 relative z-10" icon="lucide:glass-water" strokeWidth="1" width="48"></iconify-icon>
<h3 className="font-medium text-stone-900 relative z-10">Растительное молоко</h3>
<p className="text-xs text-stone-500 mt-1 relative z-10">Миндаль, кокос, овес</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl bg-stone-50 border border-stone-200 flex flex-col items-center justify-center p-6 hover:border-emerald-500 transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-stone-300 group-hover:text-emerald-600 transition-colors mb-4 relative z-10" icon="lucide:cookie" strokeWidth="1" width="48"></iconify-icon>
<h3 className="font-medium text-stone-900 relative z-10">Полезные снеки</h3>
<p className="text-xs text-stone-500 mt-1 relative z-10">Без сахара и глютена</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl bg-stone-50 border border-stone-200 flex flex-col items-center justify-center p-6 hover:border-emerald-500 transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-stone-300 group-hover:text-emerald-600 transition-colors mb-4 relative z-10" icon="lucide:utensils" strokeWidth="1" width="48"></iconify-icon>
<h3 className="font-medium text-stone-900 relative z-10">Готовые блюда</h3>
<p className="text-xs text-stone-500 mt-1 relative z-10">Разогрей и съешь</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl bg-stone-50 border border-stone-200 flex flex-col items-center justify-center p-6 hover:border-emerald-500 transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-stone-300 group-hover:text-emerald-600 transition-colors mb-4 relative z-10" icon="lucide:sprout" strokeWidth="1" width="48"></iconify-icon>
<h3 className="font-medium text-stone-900 relative z-10">Суперфуды</h3>
<p className="text-xs text-stone-500 mt-1 relative z-10">Семена, порошки, масла</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50 relative overflow-hidden" id="chef">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/5] rounded-2xl bg-stone-800 border border-stone-700 overflow-hidden relative group">

<img alt="Chef Alexey Mironov" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent z-10"></div>
<div className="absolute bottom-8 left-8 z-20">
<div className="text-2xl font-heading tracking-wider">АЛЕКСЕЙ МИРОНОВ</div>
<div className="text-emerald-500 text-sm font-medium mt-1">Бренд-шеф Vegan Products</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-600 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
</div>

<div className="w-full lg:w-1/2">
<iconify-icon className="text-emerald-600 mb-6" icon="lucide:quote" width="40"></iconify-icon>
<h2 className="font-heading text-4xl md:text-5xl mb-6 leading-tight">Мы не имитируем мясо. <br/> Мы раскрываем потенциал растений.</h2>
<div className="space-y-6 text-stone-300 text-lg font-light leading-relaxed">
<p>
                            Моя философия проста: еда должна быть лекарством, которое хочется есть. Многие считают, что веганская кухня — это ограничения. Я доказываю, что это бесконечное поле для кулинарных открытий.
                        </p>
<p>
                            В каждом нашем блюде — выверенный баланс нутриентов. Мы используем пророщенные зерна для максимальной пользы, ферментацию для улучшения пищеварения и низкотемпературную сушку для сохранения энзимов.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-stone-800">
<div>
<div className="text-3xl font-heading text-white">12+</div>
<div className="text-sm text-stone-400">Лет опыта в Green кухне</div>
</div>
<div>
<div className="text-3xl font-heading text-white">Le Cordon</div>
<div className="text-sm text-stone-400">Международный диплом</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-emerald-900 text-emerald-50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-heading text-4xl md:text-5xl mb-6">Доверие, подтвержденное цифрами</h2>
<p className="text-emerald-200 text-lg mb-8 font-light">
                        Мы гордимся тем, что создаем сообщество людей, заботящихся о своем здоровье и планете.
                    </p>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-4xl font-semibold text-white tracking-tight mb-1">5 000+</div>
<div className="text-emerald-300 text-sm">Постоянных клиентов</div>
</div>
<div>
<div className="text-4xl font-semibold text-white tracking-tight mb-1">24ч</div>
<div className="text-emerald-300 text-sm">Среднее время доставки</div>
</div>
<div>
<div className="text-4xl font-semibold text-white tracking-tight mb-1">150+</div>
<div className="text-emerald-300 text-sm">Наименований товаров</div>
</div>
<div>
<div className="text-4xl font-semibold text-white tracking-tight mb-1">0%</div>
<div className="text-emerald-300 text-sm">Химии и ГМО</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-emerald-800/50 rounded-2xl transform rotate-3"></div>
<div className="relative bg-emerald-950 p-8 rounded-2xl border border-emerald-800">
<div className="flex items-center gap-1 mb-4 text-yellow-400">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg italic text-emerald-100 mb-6">
                            "Наконец-то нашла магазин, где не нужно проверять каждую этикетку. Вкус невероятный, особенно кокосовый йогурт. Доставка всегда вовремя, упаковка экологичная."
                        </p>
<div className="flex items-center gap-4">

<img alt="Анна Смирнова" className="w-12 h-12 rounded-full object-cover border-2 border-emerald-700" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div>
<div className="font-medium text-white">Анна Смирнова</div>
<div className="text-xs text-emerald-400">Веган 3 года</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-emerald-800 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="font-heading text-xl text-white tracking-widest">VEGANSOCIETY</span>
<span className="font-heading text-xl text-white tracking-widest">BIO-ORG</span>
<span className="font-heading text-xl text-white tracking-widest">ECO-CONTROL</span>
<span className="font-heading text-xl text-white tracking-widest">GREENLIFE</span>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-stone-50 rounded-2xl p-8 md:p-12 border border-stone-100">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg">
<iconify-icon icon="lucide:package-check" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-stone-900">Бесплатная доставка</h3>
<p className="text-sm text-stone-500 mt-1">При заказе от 3500₽ по Москве и МО</p>
</div>
</div>
<div className="w-px h-12 bg-stone-200 hidden md:block"></div>
<div className="flex items-start gap-4">
<div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg">
<iconify-icon icon="lucide:calendar-check" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-stone-900">Удобная подписка</h3>
<p className="text-sm text-stone-500 mt-1">Скидка 10% при регулярной доставке</p>
</div>
</div>
<div className="w-px h-12 bg-stone-200 hidden md:block"></div>
<div className="flex items-start gap-4">
<div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-stone-900">Гарантия качества</h3>
<p className="text-sm text-stone-500 mt-1">Вернем деньги, если продукт не понравится</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-12">
<h2 className="font-heading text-4xl md:text-5xl text-stone-900">Идеи и Рецепты</h2>
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-emerald-700 transition-colors" href="#">
                    Читать блог
                    <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="aspect-video bg-stone-200 rounded-xl mb-4 overflow-hidden relative">

<img alt="Smoothie Bowl" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors"></div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-emerald-800">Рецепт</div>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">Зеленый смузи-боул за 5 минут</h3>
<p className="text-stone-500 text-sm mb-4 line-clamp-2">Идеальный завтрак для бодрости. Секретный ингредиент — спирулина и авокадо.</p>
<div className="mt-auto flex items-center text-xs text-stone-400 font-medium">
<iconify-icon className="mr-1" icon="lucide:clock" width="14"></iconify-icon> 5 мин
                    </div>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="aspect-video bg-stone-200 rounded-xl mb-4 overflow-hidden relative">
<img alt="Protein Salad" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors"></div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-stone-800">Статья</div>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">Где брать белок вегану?</h3>
<p className="text-stone-500 text-sm mb-4 line-clamp-2">Разбираем мифы о дефиците белка. Топ-10 растительных продуктов с максимальным содержанием аминокислот.</p>
<div className="mt-auto flex items-center text-xs text-stone-400 font-medium">
<iconify-icon className="mr-1" icon="lucide:clock" width="14"></iconify-icon> 8 мин
                    </div>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="aspect-video bg-stone-200 rounded-xl mb-4 overflow-hidden relative">
<img alt="Plant Milk" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors"></div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-emerald-800">Гид</div>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">Как выбрать растительное молоко</h3>
<p className="text-stone-500 text-sm mb-4 line-clamp-2">Какое молоко лучше для кофе, а какое для каши? Полный гид по видам и брендам.</p>
<div className="mt-auto flex items-center text-xs text-stone-400 font-medium">
<iconify-icon className="mr-1" icon="lucide:clock" width="14"></iconify-icon> 6 мин
                    </div>
</article>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-stone-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-heading text-3xl md:text-4xl text-center text-stone-900 mb-12">Частые вопросы</h2>
<div className="space-y-4">
<details className="group bg-stone-50 rounded-lg border border-stone-200 open:border-emerald-200 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-stone-900 font-medium">
                        Как хранить ваши продукты?
                        <span className="transform group-open:rotate-180 transition-transform text-stone-400">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed">
                        Большинство наших продуктов имеют длительный срок хранения благодаря вакуумной упаковке. Свежие десерты и молочные альтернативы следует хранить в холодильнике не более 5-7 дней.
                    </div>
</details>
<details className="group bg-stone-50 rounded-lg border border-stone-200 open:border-emerald-200 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-stone-900 font-medium">
                        Есть ли в составе глютен?
                        <span className="transform group-open:rotate-180 transition-transform text-stone-400">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed">
                        80% нашего ассортимента не содержит глютена. Такие товары помечены специальным значком «Gluten Free» на упаковке и в каталоге.
                    </div>
</details>
<details className="group bg-stone-50 rounded-lg border border-stone-200 open:border-emerald-200 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-stone-900 font-medium">
                        Как быстро вы доставляете?
                        <span className="transform group-open:rotate-180 transition-transform text-stone-400">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed">
                        Заказы, оформленные до 14:00, доставляются в тот же день по Москве. В другие регионы сроки зависят от транспортной компании (обычно 2-4 дня).
                    </div>
</details>
<details className="group bg-stone-50 rounded-lg border border-stone-200 open:border-emerald-200 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-stone-900 font-medium">
                        Можно ли вернуть товар?
                        <span className="transform group-open:rotate-180 transition-transform text-stone-400">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed">
                        Да, если упаковка не нарушена или если вы обнаружили проблему с качеством. Просто напишите нам в поддержку, и мы решим вопрос.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden" id="order">
<div className="absolute inset-0 bg-stone-900"></div>
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-700 via-stone-900 to-stone-900"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-6 animate-pulse">
<iconify-icon icon="lucide:flame" width="14"></iconify-icon>
                        Акция: Только до конца недели
                    </div>
<h2 className="font-heading text-5xl md:text-6xl text-white mb-6">Ваше здоровье начинается здесь</h2>
<p className="text-stone-300 text-lg mb-8 font-light max-w-xl">
                        Оформите заявку на персональный набор. Мы свяжемся с вами, чтобы уточнить вкусовые предпочтения и сформировать идеальную корзину.
                    </p>
<div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10 max-w-md">
<div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
<iconify-icon icon="lucide:gift" width="24"></iconify-icon>
</div>
<div>
<div className="text-white font-medium">Подарок в первом заказе</div>
<div className="text-stone-400 text-sm">При оформлении сегодня — десерт бесплатно</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<form className="bg-white p-8 rounded-2xl shadow-2xl space-y-5">
<div className="flex justify-between items-center mb-2">
<h3 className="text-xl font-semibold text-stone-900">Получить подборку</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Осталось 18 мест</span>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="name">Ваше имя</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-stone-400 text-stone-900 text-sm" id="name" placeholder="Иван" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="phone">Номер телефона</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-stone-400 text-stone-900 text-sm" id="phone" placeholder="+7 (999) 000-00-00" type="tel"/>
</div>
<div className="pt-2">
<button className="w-full py-4 bg-emerald-700 text-white rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0" type="button">
                                Получить предложение
                            </button>
</div>
<p className="text-xs text-center text-stone-400 mt-4">
                            Нажимая кнопку, вы соглашаетесь с <a className="underline hover:text-stone-500" href="#">политикой конфиденциальности</a>
</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-100 py-12 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-700" height="20" icon="lucide:leaf" width="20"></iconify-icon>
<span className="font-heading text-xl tracking-tight text-stone-900 mt-1">VEGAN PRODUCTS</span>
</div>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-emerald-700 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-emerald-700 transition-colors" href="#"><iconify-icon icon="lucide:send" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-emerald-700 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-200 pt-8">
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Компания</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-emerald-700" href="#">О нас</a></li>
<li><a className="hover:text-emerald-700" href="#">Контакты</a></li>
<li><a className="hover:text-emerald-700" href="#">Партнерам</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Помощь</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-emerald-700" href="#">Доставка</a></li>
<li><a className="hover:text-emerald-700" href="#">Оплата</a></li>
<li><a className="hover:text-emerald-700" href="#">Возврат</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Контакты</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li>8 800 000-00-00</li>
<li>hello@veganprod.ru</li>
<li>Москва, ул. Лесная 5</li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Документы</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-emerald-700" href="#">Политика конфиденциальности</a></li>
<li><a className="hover:text-emerald-700" href="#">Оферта</a></li>
</ul>
</div>
</div>
<div className="mt-12 text-center text-xs text-stone-400">
                © 2023 VEGAN PRODUCTS. Все права защищены. Дизайн в стиле минимализма.
            </div>
</div>
</footer>

    </>
  );
}

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
      

<header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full">

<div className="absolute inset-0 z-0">
<img alt="Dark moody sea" className="w-full h-full object-cover object-center opacity-60" src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
</div>

<nav className="absolute top-0 w-full flex justify-between items-center px-8 py-10 z-20">
<div className="text-white flex items-center gap-3">
<i className="w-8 h-8" data-lucide="anchor" strokeWidth="1.5"></i>
</div>
<div className="flex items-center gap-8 hidden md:flex">
<a className="text-sm text-neutral-300 hover:text-white uppercase tracking-widest transition-colors font-medium" href="#about">О шоу</a>
<a className="text-sm text-neutral-300 hover:text-white uppercase tracking-widest transition-colors font-medium" href="#program">Программа</a>
<a className="text-sm text-amber-500 hover:text-amber-400 uppercase tracking-widest transition-colors font-medium" href="#contacts">Заказать</a>
</div>
<button className="md:hidden text-white">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mt-20">
<h1 className="font-serif text-7xl md:text-9xl text-white font-medium tracking-tight drop-shadow-2xl mb-4 leading-none">
                ПИРАТЫ
            </h1>
<div className="flex items-center gap-4 mb-10 opacity-90">
<div className="h-px w-12 bg-amber-500/50 hidden sm:block"></div>
<h2 className="text-xl md:text-2xl text-amber-500 uppercase tracking-widest font-medium">
                    BreakFire Extreme Show
                </h2>
<div className="h-px w-12 bg-amber-500/50 hidden sm:block"></div>
</div>
<p className="text-lg md:text-xl text-neutral-200 italic max-w-3xl leading-relaxed opacity-90">
                Театрализованное зрелище, где огонь, акробатика и образ морского разбойника сплавляются в нечто, что не забываешь никогда.
            </p>
</div>

<a className="absolute bottom-16 flex flex-col items-center gap-4 text-neutral-400 hover:text-white transition-colors z-20 animate-pulse group" href="#about">
<span className="text-xs uppercase tracking-widest font-medium group-hover:-translate-y-1 transition-transform">Scroll Down</span>
<i className="w-6 h-6" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
</header>

<main className="w-full relative z-10 bg-neutral-950 pb-32">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-amber-500/30 to-transparent"></div>
<div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-40 pt-32">

<section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center" id="about">
<div className="lg:col-span-5 relative">
<div className="absolute -inset-4 bg-amber-500/5 rounded-3xl blur-2xl"></div>
<img alt="Fire sparkler" className="relative rounded-2xl w-full h-auto object-cover border border-neutral-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-7 flex flex-col justify-center">
<span className="text-sm text-amber-500 uppercase tracking-widest font-medium mb-6 flex items-center gap-3">
<i className="w-5 h-5" data-lucide="eye" strokeWidth="1.5"></i> Attention
                    </span>
<h2 className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight mb-8">
                        Шоу, которое невозможно игнорировать
                    </h2>
<div className="space-y-6 text-lg text-neutral-400 leading-relaxed font-light">
<p>Вечер идёт своим чередом. Гости расслаблены, атмосфера устоялась — и вдруг на площадке появляются они.</p>
<p>В костюмах морских разбойников, с горящим реквизитом в руках. Не аниматоры с улыбкой на заказ — персонажи с характером, историей и огнём в буквальном смысле.</p>
<p>Первые секунды — тишина. Потом — восторг.</p>
<p>«Пираты» — это театрализованная шоу-программа, в которой брейкданс-хореография переплетается с огненным шоу в единую постановку. Экстремальные трюки, живой огонь в метре от зрителей, синхронные акробатические связки и образы, выдержанные до последней детали — от костюма до манеры держаться на сцене.</p>
<p>Программа создана для взрослой аудитории: свадеб, корпоративов, закрытых вечеринок, гала-ужинов и звёздных ночей в турецких отелях. Здесь нет ничего детского — только зрелищность, артистизм и выверенный риск.</p>
</div>
<div className="mt-12 p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<p className="relative text-xl text-amber-200/90 italic leading-relaxed">
                            30–35 минут. 3–4 артиста. 6 видов реквизита. Два типа огня. Один вечер, о котором будут говорить.
                        </p>
</div>
</div>
</section>
<hr className="border-neutral-800/60 w-3/4 mx-auto"/>

<section className="flex flex-col gap-16" id="program">
<div className="text-center max-w-3xl mx-auto">
<span className="text-sm text-amber-500 uppercase tracking-widest font-medium mb-6 flex justify-center items-center gap-3">
<i className="w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i> Interest
                    </span>
<h2 className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight mb-6">
                        Что происходит на сцене
                    </h2>
<p className="text-lg text-neutral-400">Программа состоит из двух частей — каждая со своей атмосферой и задачей.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="bg-neutral-900/30 border border-neutral-800/80 rounded-3xl p-8 md:p-12">
<h3 className="text-2xl font-serif font-medium text-white tracking-tight mb-8 pb-4 border-b border-neutral-800 flex items-center justify-between">
                            Часть 1 — Шоу
                            <span className="text-base font-sans text-amber-500/70 font-normal">12–15 минут</span>
</h3>
<p className="text-lg text-neutral-400 mb-8 italic">Сюжетная постановка разворачивается как маленький спектакль. Артисты не просто исполняют номера — они живут в образе пирата от первого появления до финала.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-1" data-lucide="zap" strokeWidth="1.5"></i>
<p className="text-lg text-neutral-400"><span className="text-neutral-200 font-medium">Фаер-шоу:</span> около 6 видов реквизита с двумя принципиально разными типами огня. Керосин даёт плавные, тягучие факельные движения. Спаркл — взрывные искровые вспышки, которые эффектно смотрятся даже на видео.</p>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-1" data-lucide="rotate-cw" strokeWidth="1.5"></i>
<p className="text-lg text-neutral-400"><span className="text-neutral-200 font-medium">Фаер-брейк:</span> стойки, фризы и вращения брейкданса — с горящим реквизитом в руках. Это не просто танец с огнём, а полноценная акробатика на грани жанров.</p>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-1" data-lucide="wind" strokeWidth="1.5"></i>
<p className="text-lg text-neutral-400"><span className="text-neutral-200 font-medium">Файербризинг:</span> вспышки пламени изо рта в кульминационные моменты постановки — один из самых зрелищных элементов шоу.</p>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-1" data-lucide="users" strokeWidth="1.5"></i>
<p className="text-lg text-neutral-400"><span className="text-neutral-200 font-medium">Групповые синхроны:</span> артисты работают как единый организм — акробатические связки с огнём и без, выверенные до долей секунды.</p>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-1" data-lucide="camera" strokeWidth="1.5"></i>
<p className="text-lg text-neutral-400"><span className="text-neutral-200 font-medium">Интерактив:</span> желающие из зала могут исполнить трюки рядом с артистами. Безопасно, неожиданно, и именно это чаще всего становится главным воспоминанием вечера.</p>
</li>
</ul>
</div>

<div className="flex flex-col gap-12">
<div className="bg-neutral-900/30 border border-neutral-800/80 rounded-3xl p-8 md:p-12 h-full flex flex-col">
<h3 className="text-2xl font-serif font-medium text-white tracking-tight mb-8 pb-4 border-b border-neutral-800 flex items-center justify-between">
                                Часть 2 — Интерактив
                                <span className="text-base font-sans text-amber-500/70 font-normal">20–30 минут</span>
</h3>
<p className="text-lg text-neutral-400 mb-6 font-medium text-white">Шоу закончилось, но вечер — нет.</p>
<p className="text-lg text-neutral-400 mb-8 flex-grow">Артисты остаются на площадке и приглашают гостей к живому горящему реквизиту. Фотографии получаются такими, каких нет ни у кого из знакомых. После — пиратская игра в кости: победители уходят с памятными призами, атмосфера набирает новый виток.</p>
<div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
<span className="block text-sm uppercase tracking-widest text-amber-500 font-medium mb-4">Реквизит программы</span>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-300">Факелы</span>
<span className="px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-300">Пои</span>
<span className="px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-300">Стаффы</span>
<span className="px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-300">Веера</span>
<span className="px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-300">Спаркл-реквизит</span>
<span className="px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-300">Огненные перчатки</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-16">
<div className="text-center max-w-3xl mx-auto">
<span className="text-sm text-amber-500 uppercase tracking-widest font-medium mb-6 flex justify-center items-center gap-3">
<i className="w-5 h-5" data-lucide="star" strokeWidth="1.5"></i> Desire
                    </span>
<h2 className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight mb-6">
                        Почему нас выбирают
                    </h2>
<p className="text-lg text-neutral-400">Шоу-программа — это не украшение вечера. Это точка, вокруг которой выстраивается весь event.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 hover:border-amber-500/30 transition-colors">
<i className="w-8 h-8 text-amber-500 mb-6" data-lucide="building-2" strokeWidth="1.5"></i>
<h4 className="text-xl font-serif font-medium text-white tracking-tight mb-4">Для отелей и ресторанов</h4>
<p className="text-lg text-neutral-400">Готовая вечерняя программа. Гости получают зрелище — вы репутацию места, куда хочется вернуться. Идеально вписывается в регулярную анимацию.</p>
</div>
<div className="p-8 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 hover:border-amber-500/30 transition-colors">
<i className="w-8 h-8 text-amber-500 mb-6" data-lucide="heart-handshake" strokeWidth="1.5"></i>
<h4 className="text-xl font-serif font-medium text-white tracking-tight mb-4">Для свадеб</h4>
<p className="text-lg text-neutral-400">Не банальная «программа», а момент, обсуждаемый годами. Интерактив и фотосессия вовлекают всех, а не только первый ряд зрителей.</p>
</div>
<div className="p-8 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 hover:border-amber-500/30 transition-colors">
<i className="w-8 h-8 text-amber-500 mb-6" data-lucide="glass-water" strokeWidth="1.5"></i>
<h4 className="text-xl font-serif font-medium text-white tracking-tight mb-4">Для корпоративов</h4>
<p className="text-lg text-neutral-400">Программа самодостаточна — не требует сцены или сложной адаптации. Формат нейтрален и органично вписывается в любой контекст.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
<div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 md:p-10">
<h4 className="text-xl font-serif font-medium text-white tracking-tight mb-8">Преимущества для организатора</h4>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-300">Полная самостоятельность: привозим реквизит, костюмы и технику сами</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-300">Чёткий хронометраж — вы точно знаете, что и когда происходит</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-300">Безопасное взаимодействие со зрителями — техник контролирует всё на площадке</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-300">Реквизит для фото остаётся после шоу — гости фотографируются ещё 20–30 минут</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-300">Работаем на открытых площадках: пляж, терраса, сад, бассейн</span>
</li>
</ul>
</div>
<div className="lg:col-span-5 p-8 md:p-10">
<h4 className="text-sm text-amber-500 uppercase tracking-widest font-medium mb-8">Форматы участия</h4>
<div className="space-y-6">
<div className="flex items-center gap-4 text-lg text-neutral-300 border-b border-neutral-800 pb-4">
<span className="text-2xl">🏨</span>
<div>
<span className="block text-white font-medium">Турецкие отели</span>
<span className="text-base text-neutral-500">Регулярные выступления</span>
</div>
</div>
<div className="flex items-center gap-4 text-lg text-neutral-300 border-b border-neutral-800 pb-4">
<span className="text-2xl">💍</span>
<div>
<span className="block text-white font-medium">Свадьбы</span>
<span className="text-base text-neutral-500">Вечернее шоу</span>
</div>
</div>
<div className="flex items-center gap-4 text-lg text-neutral-300 border-b border-neutral-800 pb-4">
<span className="text-2xl">🎉</span>
<div>
<span className="block text-white font-medium">Корпоративы</span>
<span className="text-base text-neutral-500">Тематический entertainment</span>
</div>
</div>
<div className="flex items-center gap-4 text-lg text-neutral-300">
<span className="text-2xl">🥂</span>
<div>
<span className="block text-white font-medium">Закрытые вечеринки</span>
<span className="text-base text-neutral-500">И гала-ужины</span>
</div>
</div>
</div>
</div>
</div>
</section>
<hr className="border-neutral-800/60 w-3/4 mx-auto"/>

<section className="space-y-16">
<div className="text-center max-w-3xl mx-auto">
<span className="text-sm text-amber-500 uppercase tracking-widest font-medium mb-6 flex justify-center items-center gap-3">
<i className="w-5 h-5" data-lucide="calculator" strokeWidth="1.5"></i> Action
                    </span>
<h2 className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight mb-6">
                        Стоимость и условия
                    </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="bg-neutral-900/30 border border-neutral-800 rounded-3xl p-8 overflow-hidden relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
<h3 className="text-xl font-serif font-medium text-white tracking-tight mb-2">Состав команды</h3>
<p className="text-lg text-neutral-400 mb-8">3–4 артиста + 1 технический специалист</p>
<div className="overflow-x-auto">
<table className="w-full text-left text-lg">
<thead>
<tr className="border-b border-neutral-800">
<th className="py-4 font-normal text-neutral-500 uppercase tracking-wider text-sm">Позиция</th>
<th className="py-4 font-normal text-neutral-500 uppercase tracking-wider text-sm text-right">Сумма</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-neutral-800/50">
<td className="py-4 text-neutral-300">Артист (за 1 человека)</td>
<td className="py-4 text-white font-medium text-right">$200</td>
</tr>
<tr className="border-b border-neutral-800/50">
<td className="py-4 text-neutral-300">Технический специалист</td>
<td className="py-4 text-white font-medium text-right">$50</td>
</tr>
<tr className="border-b border-neutral-800/50">
<td className="py-4 text-neutral-300">Расходные материалы</td>
<td className="py-4 text-white font-medium text-right">$10</td>
</tr>
</tbody>
<tfoot>
<tr>
<td className="py-5 text-amber-500 font-medium">Команда из 3 артистов + техник</td>
<td className="py-5 text-amber-500 font-medium text-right">от $660</td>
</tr>
<tr className="border-t border-neutral-800">
<td className="py-5 text-amber-500 font-medium">Команда из 4 артистов + техник</td>
<td className="py-5 text-amber-500 font-medium text-right">от $860</td>
</tr>
</tfoot>
</table>
</div>
</div>

<div className="space-y-10">
<div>
<h3 className="text-xl font-serif font-medium text-white tracking-tight mb-6 flex items-center gap-3">
<i className="w-6 h-6 text-amber-500" data-lucide="map-pin" strokeWidth="1.5"></i>
                                Условия проведения
                            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
<span className="text-lg text-neutral-400">Выступления на открытом воздухе</span>
</li>
<li className="flex items-start gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
<span className="text-lg text-neutral-400">Периодичность: 3–4 раза в неделю</span>
</li>
<li className="flex items-start gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
<span className="text-lg text-neutral-400">Площадка: ровная поверхность от 6×6 м, без навесов в зоне огня</span>
</li>
</ul>
</div>
<div>
<h3 className="text-xl font-serif font-medium text-white tracking-tight mb-6 flex items-center gap-3">
<i className="w-6 h-6 text-amber-500" data-lucide="briefcase" strokeWidth="1.5"></i>
                                Организационные условия
                            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
<span className="text-lg text-neutral-400">Проживание и питание на территории отеля для каждого участника команды</span>
</li>
<li className="flex items-start gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
<span className="text-lg text-neutral-400">Авиабилеты в обе стороны — за счёт принимающей стороны</span>
</li>
</ul>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="relative bg-neutral-950 border-t border-neutral-900 pt-24 pb-16 overflow-hidden" id="contacts">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-900/10 rounded-t-[100%] blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight mb-6">
                Готовы обсудить даты?
            </h2>
<p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
                Напишите нам — расскажем подробнее о программе, пришлём видео и ответим на любые вопросы. Отвечаем быстро. Оставьте заявку — и мы свяжемся с вами в течение нескольких часов.
            </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-20">
<a className="flex flex-col items-center gap-3 group" href="mailto:spaceinsidespb2305@gmail.com">
<div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
<i className="w-6 h-6 text-neutral-300 group-hover:text-amber-400" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-neutral-300 group-hover:text-white transition-colors">Email</span>
</a>
<a className="flex flex-col items-center gap-3 group" href="tel:+79522302988">
<div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
<i className="w-6 h-6 text-neutral-300 group-hover:text-amber-400" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-neutral-300 group-hover:text-white transition-colors">+7 952 230-29-88</span>
</a>
<a className="flex flex-col items-center gap-3 group" href="https://t.me/mangol2305" target="_blank">
<div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
<i className="w-6 h-6 text-neutral-300 group-hover:text-amber-400" data-lucide="send" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-neutral-300 group-hover:text-white transition-colors">@mangol2305</span>
</a>
</div>
<div className="pt-12 border-t border-neutral-900/50 flex flex-col items-center gap-4">
<i className="w-6 h-6 text-neutral-700" data-lucide="anchor" strokeWidth="1.5"></i>
<p className="font-serif text-lg text-neutral-500 tracking-widest uppercase italic">
                    «Пираты» — BreakFire Extreme Show.<br className="md:hidden"/> Огонь. Акробатика. История.
                </p>
</div>
</div>
</footer>


    </>
  );
}

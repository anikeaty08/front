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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<section className="w-full max-w-5xl bg-[#FAF6F0] rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[600px] aspect-auto sm:aspect-[16/9] p-8 sm:p-12">

<div className="absolute top-10 left-10 text-[#F46B83] rotate-[-15deg]">
<svg fill="currentColor" height="40" stroke="none" viewbox="0 0 24 24" width="40"><path d="M12 2C12 2 15 8 22 8C22 8 16 12 18 20C18 20 12 15 6 20C6 20 8 12 2 8C2 8 9 8 12 2Z"></path></svg>
</div>
<div className="absolute bottom-20 right-20 text-[#A3B18A] rotate-[20deg] scale-150 opacity-80">
<svg fill="currentColor" height="60" stroke="none" viewbox="0 0 24 24" width="60"><path d="M12 2C12 2 15 8 22 8C22 8 16 12 18 20C18 20 12 15 6 20C6 20 8 12 2 8C2 8 9 8 12 2Z"></path></svg>
</div>
<div className="absolute top-24 right-32 text-[#F4AB40]">
<i className="w-16 h-16" data-lucide="cat"></i>
</div>
<p className="text-3xl sm:text-4xl text-[#D9A05B] mb-4 rotate-[-4deg] self-center ml-0 sm:ml-64 z-10" style={{fontFamily: '\'Caveat\', cursive'}}>проект по обществознанию</p>
<h1 className="text-4xl sm:text-6xl text-center uppercase tracking-tight font-semibold leading-tight z-10" style={{fontFamily: '\'Syncopate\', sans-serif'}}>
            Анатомия<br/>
<span className="inline-block mt-2 pb-2 border-b-4 border-[#2D2A26]">Влияния</span>
</h1>
<p className="text-2xl sm:text-3xl text-gray-500 mt-4 tracking-tight" style={{fontFamily: '\'Caveat\', cursive'}}>от ТВ к алгоритмам</p>
<div className="mt-auto pt-16 flex flex-col sm:flex-row w-full justify-between items-end text-lg text-gray-600">
<div>
<p className="font-medium">Джалагония Ева, 10 класс</p>
<p>Руководитель: Агошкина Н.А.</p>
</div>
<p className="mt-4 sm:mt-0 font-semibold">Воронеж, 2026</p>
</div>
</section>

<section className="w-full max-w-5xl bg-[#F46B83] rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col md:flex-row">

<div className="w-full md:w-1/3 bg-[#F8A5B4] p-8 flex flex-col justify-between" style={{borderTopRightRadius: '50% 10%', borderBottomRightRadius: '30% 50%'}}>
<h2 className="text-white text-3xl sm:text-4xl uppercase tracking-tight font-semibold writing-vertical md:rotate-180" style={{fontFamily: '\'Syncopate\', sans-serif', writingMode: 'vertical-rl'}}>Контекст</h2>
<div className="text-white opacity-50 hidden md:block">
<i className="w-32 h-32" data-lucide="brain-circuit"></i>
</div>
</div>

<div className="w-full md:w-2/3 p-8 sm:p-16 flex flex-col justify-center bg-white/95 rounded-l-[3rem] -ml-8 md:ml-[-50px] my-4 md:my-0 shadow-[-10px_0_20px_rgba(0,0,0,0.05)] relative z-10">
<h3 className="text-4xl text-[#F46B83] mb-2 tracking-tight" style={{fontFamily: '\'Caveat\', cursive'}}>проблема исследования</h3>
<p className="text-xl sm:text-2xl leading-relaxed mb-6 font-medium text-gray-800">
                Мы живем в эпоху информационного перенасыщения. Традиционные подходы к оценке влияния СМИ на продажи устарели.
            </p>
<p className="text-lg sm:text-xl leading-relaxed text-gray-600 mb-8">
                Если 20 лет назад покупали эфирное время на ТВ, то сегодня покупают доступ к <span className="bg-[#F8A5B4] text-white px-2 py-1 rounded-md font-medium">«цифровым двойникам»</span> пользователей у алгоритмов. Власть перешла от редакторов к математическим моделям.
            </p>
<div className="flex items-center gap-4 text-[#A3B18A] font-semibold text-xl bg-[#F0F4EC] p-4 rounded-2xl w-fit">
<i className="w-8 h-8" data-lucide="target"></i>
<span>Молодежь — наиболее уязвимая группа</span>
</div>
</div>
</section>

<section className="w-full max-w-5xl bg-[#FAF6F0] rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col p-8 sm:p-16 border-8 border-[#A3B18A]">
<div className="flex items-baseline gap-6 mb-12">
<h2 className="text-4xl sm:text-5xl uppercase tracking-tight font-semibold" style={{fontFamily: '\'Syncopate\', sans-serif'}}>Эволюция</h2>
<p className="text-3xl text-[#A3B18A]" style={{fontFamily: '\'Caveat\', cursive'}}>от Гутенберга до нейросетей</p>
</div>
<div className="flex flex-col md:flex-row justify-between items-start flex-1 gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-[#A3B18A]/30 -translate-y-1/2 z-0"></div>

<div className="flex flex-col items-center text-center z-10 bg-[#FAF6F0] p-4 md:w-1/4">
<div className="w-24 h-24 rounded-full bg-[#E8CDBB] flex items-center justify-center mb-6 shadow-lg border-4 border-white text-[#8A5A44]">
<i className="w-10 h-10" data-lucide="book-open"></i>
</div>
<h4 className="text-xl font-semibold mb-2 uppercase tracking-tight">Печать</h4>
<p className="text-lg text-gray-500">XV - XVII века. Газеты, массовое тиражирование.</p>
</div>

<div className="flex flex-col items-center text-center z-10 bg-[#FAF6F0] p-4 md:w-1/4 md:-mt-12">
<div className="w-24 h-24 rounded-full bg-[#F8A5B4] flex items-center justify-center mb-6 shadow-lg border-4 border-white text-white">
<i className="w-10 h-10" data-lucide="radio"></i>
</div>
<h4 className="text-xl font-semibold mb-2 uppercase tracking-tight">Эфир</h4>
<p className="text-lg text-gray-500">XX век. Радио и ТВ. Единое инфополе.</p>
</div>

<div className="flex flex-col items-center text-center z-10 bg-[#FAF6F0] p-4 md:w-1/4">
<div className="w-24 h-24 rounded-full bg-[#A3B18A] flex items-center justify-center mb-6 shadow-lg border-4 border-white text-white">
<i className="w-10 h-10" data-lucide="monitor-smartphone"></i>
</div>
<h4 className="text-xl font-semibold mb-2 uppercase tracking-tight">Цифра</h4>
<p className="text-lg text-gray-500">Конец XX. Интернет, децентрализация.</p>
</div>

<div className="flex flex-col items-center text-center z-10 bg-[#FAF6F0] p-4 md:w-1/4 md:-mt-12">
<div className="w-24 h-24 rounded-full bg-[#2D2A26] flex items-center justify-center mb-6 shadow-lg border-4 border-white text-white">
<i className="w-10 h-10" data-lucide="cpu"></i>
</div>
<h4 className="text-xl font-semibold mb-2 uppercase tracking-tight">Алгоритмы</h4>
<p className="text-lg text-gray-500">XXI век. Персонализация, нейросети, RTB.</p>
</div>
</div>
</section>

<section className="w-full max-w-5xl bg-[#E8CDBB] rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col items-center justify-center p-8 sm:p-12">

<svg className="absolute inset-0 w-full h-full object-cover opacity-20" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z" fill="#8A5A44"></path>
<path d="M0,70 Q25,40 50,70 T100,70 L100,100 L0,100 Z" fill="#A3B18A"></path>
</svg>
<div className="bg-white/90 backdrop-blur-md w-full max-w-4xl rounded-3xl p-8 sm:p-12 shadow-xl z-10 border-2 border-white/50">
<h2 className="text-3xl sm:text-4xl uppercase tracking-tight font-semibold mb-8 text-center" style={{fontFamily: '\'Syncopate\', sans-serif'}}>Механизмы влияния</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex gap-4 items-start bg-[#FAF6F0] p-4 rounded-2xl">
<div className="bg-[#F46B83] text-white p-3 rounded-xl shrink-0"><i data-lucide="users"></i></div>
<div>
<h5 className="text-xl font-semibold mb-1">Соц. доказательство</h5>
<p className="text-lg text-gray-600 leading-snug">«Выбор миллионов», отзывы, рейтинги. Копирование поведения.</p>
</div>
</div>

<div className="flex gap-4 items-start bg-[#FAF6F0] p-4 rounded-2xl">
<div className="bg-[#A3B18A] text-white p-3 rounded-xl shrink-0"><i data-lucide="badge-check"></i></div>
<div>
<h5 className="text-xl font-semibold mb-1">Авторитет</h5>
<p className="text-lg text-gray-600 leading-snug">Врачи, эксперты, сертификаты качества.</p>
</div>
</div>

<div className="flex gap-4 items-start bg-[#FAF6F0] p-4 rounded-2xl">
<div className="bg-[#F4AB40] text-white p-3 rounded-xl shrink-0"><i data-lucide="timer"></i></div>
<div>
<h5 className="text-xl font-semibold mb-1">Дефицит и срочность</h5>
<p className="text-lg text-gray-600 leading-snug">«Осталось 2 штуки», таймеры акций. Иллюзия ценности.</p>
</div>
</div>

<div className="flex gap-4 items-start bg-[#FAF6F0] p-4 rounded-2xl">
<div className="bg-[#8A5A44] text-white p-3 rounded-xl shrink-0"><i data-lucide="eye-off"></i></div>
<div>
<h5 className="text-xl font-semibold mb-1">Скрытая реклама</h5>
<p className="text-lg text-gray-600 leading-snug">Интеграция в контент без отторжения (нативка, продакт-плейсмент).</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-5xl bg-[#FAF6F0] rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col md:flex-row p-8 sm:p-12">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#F46B83] rounded-bl-full opacity-20 blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A3B18A] rounded-tr-full opacity-20 blur-3xl"></div>
<div className="md:w-1/2 pr-0 md:pr-12 flex flex-col justify-center z-10">
<h2 className="text-5xl sm:text-6xl uppercase tracking-tight font-semibold text-[#2D2A26] leading-none mb-6" style={{fontFamily: '\'Syncopate\', sans-serif'}}>
                Инфо-<br/><span className="text-[#F46B83]">пузырь</span>
</h2>
<p className="text-2xl font-medium text-gray-800 mb-4">Переход власти к алгоритмам.</p>
<p className="text-xl text-gray-600 leading-relaxed">
                Состояние информационной изоляции. Алгоритм анализирует поведение и показывает только то, что с высокой вероятностью вызовет реакцию. Кругозор сужается.
            </p>
</div>
<div className="md:w-1/2 mt-8 md:mt-0 flex flex-col gap-4 z-10 justify-center">
<div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-center transform transition hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
<i className="text-gray-500" data-lucide="newspaper"></i>
</div>
<div>
<h5 className="font-semibold text-lg uppercase tracking-tight text-gray-400">СМИ</h5>
<p className="text-xl font-medium">Редакционный отбор, единое поле, пассивная аудитория.</p>
</div>
</div>
<div className="bg-[#2D2A26] text-white p-6 rounded-3xl shadow-xl flex gap-4 items-center transform rotate-2 scale-105 z-20">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<i className="text-[#F4AB40]" data-lucide="bot"></i>
</div>
<div>
<h5 className="font-semibold text-lg uppercase tracking-tight text-white/50">Алгоритмы</h5>
<p className="text-xl font-medium">Персональный отбор, миллионы лент, управление вниманием.</p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-5xl bg-[#A3B18A] rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden min-h-[600px] p-8 sm:p-12 text-white flex flex-col">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
<div>
<p className="text-2xl text-[#E0E7D3] mb-2" style={{fontFamily: '\'Caveat\', cursive'}}>результаты исследования</p>
<h2 className="text-3xl sm:text-5xl uppercase tracking-tight font-semibold" style={{fontFamily: '\'Syncopate\', sans-serif'}}>Опрос подростков</h2>
</div>
<div className="bg-white/20 px-6 py-2 rounded-full mt-4 md:mt-0">
<p className="text-xl font-medium">50 респондентов, 15-17 лет</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-12 flex-1">

<div className="md:w-1/2 flex flex-col gap-6 justify-center">
<h3 className="text-2xl font-semibold mb-2">Источники информации</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-lg mb-1"><span className="font-medium">Блогеры</span><span>82%</span></div>
<div className="w-full bg-white/20 rounded-full h-4"><div className="bg-[#F4AB40] h-4 rounded-full" style={{width: '82%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-lg mb-1"><span className="font-medium">Таргет. реклама</span><span>56%</span></div>
<div className="w-full bg-white/20 rounded-full h-4"><div className="bg-[#F4AB40]/80 h-4 rounded-full" style={{width: '56%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-lg mb-1"><span className="font-medium">ТВ реклама</span><span className="opacity-50">16%</span></div>
<div className="w-full bg-white/20 rounded-full h-4"><div className="bg-white/40 h-4 rounded-full" style={{width: '16%'}}></div></div>
</div>
</div>
</div>

<div className="md:w-1/2 flex flex-col gap-6 justify-center bg-white/10 p-8 rounded-3xl border border-white/20">
<h3 className="text-2xl font-semibold mb-4 text-[#E0E7D3]">Ключевые инсайты</h3>
<ul className="space-y-4 text-xl">
<li className="flex items-start gap-3">
<i className="text-[#F4AB40] shrink-0 mt-1" data-lucide="check-circle-2"></i>
<span><strong className="text-white">68%</strong> доверяют друзьям и семье больше, чем официальной рекламе (12%).</span>
</li>
<li className="flex items-start gap-3">
<i className="text-[#F4AB40] shrink-0 mt-1" data-lucide="check-circle-2"></i>
<span><strong className="text-white">94%</strong> замечают персонализацию рекламы (алгоритмы).</span>
</li>
<li className="flex items-start gap-3">
<i className="text-[#F46B83] shrink-0 mt-1" data-lucide="alert-triangle"></i>
<span><strong className="text-white">70%</strong> жалели об импульсивной покупке под влиянием рекламы.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="w-full max-w-5xl bg-[#FAF6F0] rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col items-center justify-center p-8 sm:p-12 border-[12px] border-[#F46B83]">
<div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">

<svg height="800" viewbox="0 0 200 200" width="800" xmlns="http://www.w3.org/2000/svg">
<path d="M43,-77.3C55.6,-69.1,65.6,-56.3,73.1,-42.6C80.6,-28.9,85.6,-14.4,85.8,0.1C86,14.6,81.4,29.3,74.1,42.8C66.8,56.4,56.8,68.9,43.5,75.9C30.3,82.8,15.1,84.1,1.1,82.2C-13,80.3,-26,-75.1,-38.7,-68.1C-51.4,-61,-63.9,-51.9,-72.5,-39.8C-81.1,-27.6,-85.9,-12.3,-84.3,2.4C-82.7,17.1,-74.6,31.2,-64.5,42.9C-54.4,54.6,-42.3,63.9,-29,70.5C-15.7,77.1,-1.2,81,13.1,79.5C27.4,78,41.4,71.2,52.2,60.9C63,50.7,70.5,37,76.5,22.7C82.5,8.4,87,-6.6,83.9,-20.5C80.8,-34.4,70.1,-47.2,57.5,-56.2C44.9,-65.2,30.3,-70.4,15.6,-74.8C1,-79.1,-13.6,-82.5,-27.4,-81.4C-41.2,-80.4,-54.2,-74.8,-63.4,-64.8L0,0Z" fill="#F46B83" transform="translate(100 100) scale(1.1)"></path>
</svg>
</div>
<div className="z-10 text-center max-w-3xl">
<p className="text-3xl text-[#F46B83] mb-4" style={{fontFamily: '\'Caveat\', cursive'}}>главный вывод</p>
<h2 className="text-4xl sm:text-5xl uppercase tracking-tight font-semibold mb-8 text-[#2D2A26] leading-tight" style={{fontFamily: '\'Syncopate\', sans-serif'}}>Двухуровневая модель</h2>
<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-pink-100 flex flex-col md:flex-row gap-6 items-center text-left">
<div className="flex-1">
<h4 className="text-2xl font-semibold mb-2 text-[#F46B83]">1. Медиа-уровень</h4>
<p className="text-xl text-gray-700">Блогеры и обзоры создают желание, моду и выстраивают доверие (Эмоция).</p>
</div>
<div className="text-[#A3B18A] md:rotate-0 rotate-90">
<i className="w-12 h-12" data-lucide="arrow-right"></i>
</div>
<div className="flex-1">
<h4 className="text-2xl font-semibold mb-2 text-[#A3B18A]">2. Алгоритмы</h4>
<p className="text-xl text-gray-700">Таргетинг и ретаргетинг совершают точечное «добивание», подводя к покупке (Логика/Действие).</p>
</div>
</div>
<p className="text-2xl mt-10 font-medium text-gray-800 bg-[#FAF6F0]/90 inline-block px-6 py-2 rounded-full">
                Реклама больше не кричит миллионам, она шепчет лично вам.
            </p>
</div>
</section>

<section className="w-full max-w-5xl bg-[#2D2A26] rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col p-8 sm:p-12 text-[#FAF6F0]">
<h2 className="text-3xl sm:text-4xl uppercase tracking-tight font-semibold mb-12 text-center" style={{fontFamily: '\'Syncopate\', sans-serif'}}>Рекомендации</h2>
<div className="flex flex-col md:flex-row gap-8 flex-1">

<div className="flex-1 bg-[#3A3632] p-8 rounded-3xl">
<div className="flex items-center gap-4 mb-6 text-[#F4AB40]">
<i className="w-8 h-8" data-lucide="briefcase"></i>
<h3 className="text-2xl font-semibold uppercase tracking-tight">Для бизнеса</h3>
</div>
<ul className="space-y-4 text-xl text-gray-300">
<li className="flex items-start gap-3"><span className="text-[#F4AB40] mt-1">•</span> Работайте с микроблогерами (аутентичность выше).</li>
<li className="flex items-start gap-3"><span className="text-[#F4AB40] mt-1">•</span> Создавайте полезный контент, а не прямую рекламу.</li>
<li className="flex items-start gap-3"><span className="text-[#F4AB40] mt-1">•</span> Используйте ретаргетинг для замыкания воронки.</li>
</ul>
</div>

<div className="flex-1 bg-[#FAF6F0] text-[#2D2A26] p-8 rounded-3xl">
<div className="flex items-center gap-4 mb-6 text-[#F46B83]">
<i className="w-8 h-8" data-lucide="user-check"></i>
<h3 className="text-2xl font-semibold uppercase tracking-tight">Потребителям</h3>
</div>
<ul className="space-y-4 text-xl text-gray-700">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded border-2 border-[#F46B83] flex items-center justify-center shrink-0 mt-1"><div className="w-3 h-3 bg-[#F46B83] rounded-sm"></div></div>
<span>Осознавайте наличие инфопузыря.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded border-2 border-[#F46B83] flex items-center justify-center shrink-0 mt-1"><div className="w-3 h-3 bg-[#F46B83] rounded-sm"></div></div>
<span>Применяйте правило 24 часов перед покупкой.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded border-2 border-[#F46B83] flex items-center justify-center shrink-0 mt-1"><div className="w-3 h-3 bg-[#F46B83] rounded-sm"></div></div>
<span>Критически оценивайте "искренние" советы блогеров.</span>
</li>
</ul>
</div>
</div>
<div className="mt-12 text-center text-lg text-gray-400">
            Развитие медиаграмотности — условие осознанной жизни в цифровом мире.
        </div>
</section>



    </>
  );
}

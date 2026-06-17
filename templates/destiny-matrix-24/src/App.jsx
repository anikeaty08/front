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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-violet-900/20 blur-[100px] rounded-full opacity-50"></div>
<div className="absolute bottom-0 right-0 w-[60rem] h-[40rem] bg-indigo-900/10 blur-[100px] rounded-full opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<iconify-icon className="text-violet-500" icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
                DESTINY MATRIX
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#calculator">Калькулятор</a>
<a className="hover:text-white transition-colors" href="#guide">Что в гайде?</a>
<a className="hover:text-white transition-colors" href="#consultation">Консультация</a>
</div>

<a className="hidden md:flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all" href="#calculator">
                Рассчитать
            </a>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8 animate-float">
<span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                Узнай свое истинное предназначение
            </div>
<h1 className="text-4xl sm:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Матрица твоей души <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">в одном PDF файле.</span>
</h1>
<p className="leading-relaxed text-lg text-slate-50 text-center mb-10">Глубокий анализ вашей личности по дате рождения. Раскройте свои таланты, финансовый потенциал и кармические задачи с помощью древней нумерологической системы.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<a className="shiny-cta" href="#calculator">
<span className="">
<iconify-icon icon="lucide:calculator" strokeWidth="1.5" width="18"></iconify-icon>
                        Рассчитать Матрицу
                    </span>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-white font-medium rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-2" href="#guide">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="18"></iconify-icon>
                    Пример гайда
                </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-0 pointer-events-none opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full z-0 pointer-events-none opacity-40"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full z-0 pointer-events-none opacity-50"></div>
</section>

<section className="pt-24 pb-24 relative" id="calculator">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-violet-900/20 backdrop-blur-sm">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Калькулятор Матрицы</h2>
<p className="text-slate-400 text-sm mb-8">Введите дату рождения для построения вашей персональной карты.</p>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 ml-1">Имя</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm" placeholder="Ваше имя" type="text"/>
</div>
<div className="grid grid-cols-3 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 ml-1">День</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-center text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm" max="31" min="1" placeholder="DD" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 ml-1">Месяц</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-center text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm" max="12" min="1" placeholder="MM" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 ml-1">Год</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-center text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm" max="2024" min="1900" placeholder="YYYY" type="number"/>
</div>
</div>
<div className="pt-4">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-slate-700 rounded bg-slate-950 peer-checked:bg-violet-600 peer-checked:border-violet-600 transition-colors"></div>
<iconify-icon className="absolute top-0.5 left-0.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="16"></iconify-icon>
</div>
<span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Я принимаю условия обработки данных</span>
</label>
</div>

<button className="shiny-cta w-full mt-4 !rounded-lg !px-4 !py-4" type="button">
<span>
                                    Рассчитать и получить гайд
                                    <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</span>
</button>
</form>
</div>

<div className="relative flex items-center justify-center h-full min-h-[300px] border-l border-white/5 pl-0 lg:pl-12">

<div className="relative w-64 h-64 animate-float">
<svg className="w-full h-full drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" viewbox="0 0 200 200">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<rect height="160" stroke="rgba(255,255,255,0.2)" width="1" x="100" y="20"></rect>
<rect height="1" stroke="rgba(255,255,255,0.2)" width="160" x="20" y="100"></rect>
<rect fill="none" height="114" stroke="rgba(255,255,255,0.1)" transform="rotate(45 100 100)" width="114" x="43" y="43"></rect>
<rect fill="none" height="114" stroke="url(#grad1)" strokeWidth="1.5" width="114" x="43" y="43"></rect>
<circle cx="100" cy="100" fill="#fff" r="4"></circle>
<circle cx="100" cy="20" fill="#8b5cf6" r="3"></circle>
<circle cx="180" cy="100" fill="#8b5cf6" r="3"></circle>
<circle cx="100" cy="180" fill="#ec4899" r="3"></circle>
<circle cx="20" cy="100" fill="#ec4899" r="3"></circle>
</svg>

<div className="absolute -top-4 -right-4 bg-slate-800/80 backdrop-blur border border-slate-700 px-3 py-1.5 rounded-lg text-xs text-violet-300 shadow-xl">
                                🌟 Личное предназначение
                            </div>
<div className="absolute -bottom-4 -left-4 bg-slate-800/80 backdrop-blur border border-slate-700 px-3 py-1.5 rounded-lg text-xs text-pink-300 shadow-xl">
                                💰 Финансовый код
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="guide">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Полная расшифровка твоей судьбы</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Наш PDF-гайд — это 40+ страниц уникальной информации о вас, основанной на точных расчетах энергий.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Портрет личности</h3>
<p className="text-sm text-slate-400 leading-relaxed">Ваши базовые энергии, как вас видят окружающие и какие таланты даны вам от рождения.</p>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:coins" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Финансы и карьера</h3>
<p className="text-sm text-slate-400 leading-relaxed">Сферы для максимального дохода, что блокирует денежный поток и как его открыть.</p>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-pink-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:heart" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Отношения и любовь</h3>
<p className="text-sm text-slate-400 leading-relaxed">Образ идеального партнера, кармические уроки в отношениях и совместимость.</p>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:flame" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Кармический хвост</h3>
<p className="text-sm text-slate-400 leading-relaxed">Ошибки прошлых воплощений, которые влияют на текущую жизнь, и способы их проработки.</p>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:compass" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Предназначение</h3>
<p className="text-sm text-slate-400 leading-relaxed">Ваши задачи до 40 лет, духовное предназначение и планетарная миссия.</p>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Прогноз на год</h3>
<p className="text-sm text-slate-400 leading-relaxed">Энергии текущего и следующего года. Рекомендации по планированию важных событий.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-slate-900/20">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 relative order-2 lg:order-1">
<div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-slate-800 rounded shadow-2xl rotate-[-6deg] border border-slate-700/50 flex flex-col overflow-hidden transition-transform hover:rotate-0 duration-500">
<div className="h-2/3 bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex flex-col justify-center items-center text-center">
<iconify-icon className="text-violet-500 mb-4 opacity-80" icon="lucide:sparkles" width="48"></iconify-icon>
<h4 className="text-2xl font-serif italic text-white/90">Matrix of Destiny</h4>
<p className="text-xs text-slate-500 mt-2 uppercase tracking-widest">Персональный Гайд</p>
</div>
<div className="h-1/3 bg-white p-6 flex flex-col justify-between">
<div className="space-y-2">
<div className="h-2 w-3/4 bg-slate-100 rounded"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded"></div>
</div>
<div className="flex justify-between items-end">
<div className="h-8 w-8 rounded-full bg-violet-100"></div>
<div className="text-xs font-bold text-slate-900">PDF</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-violet-500/20 blur-[80px] -z-10"></div>
</div>

<div className="flex-1 order-1 lg:order-2">
<div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium mb-6">
                        Мгновенная отправка
                    </div>
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-6">Ваша настольная книга жизни</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Получите подробный PDF-файл (50+ страниц), который навсегда останется с вами. Это не просто гороскоп, это инструкция к вашей жизни, написанная языком энергий.
                    </p>
<div className="flex items-baseline gap-3 mb-8">
<span className="text-4xl font-semibold text-white">$19</span>
<span className="text-lg text-slate-500 line-through">$49</span>
</div>
<ul className="space-y-3 mb-10">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-500" icon="lucide:check-circle-2"></iconify-icon>
<span>Готовность в течение 5 минут</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-500" icon="lucide:check-circle-2"></iconify-icon>
<span>Удобный формат для телефона и печати</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-500" icon="lucide:check-circle-2"></iconify-icon>
<span>Пожизненный доступ</span>
</li>
</ul>

<a className="shiny-cta w-full sm:w-auto !px-12" href="#calculator">
<span>Заказать разбор</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="consultation">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
<div className="shrink-0 relative">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden relative z-10">

<div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
<iconify-icon icon="lucide:user" width="48"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full -z-10 animate-pulse"></div>
</div>
<div className="flex-1">
<h2 className="text-2xl font-medium text-white mb-3">Личная консультация</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Иногда текста недостаточно. Если у вас сложная жизненная ситуация или вы хотите глубже проработать свои энергии, запишитесь на онлайн-встречу с нашим ведущим нумерологом. Разбор конкретных запросов в режиме реального времени.
                    </p>
<div className="flex flex-wrap gap-4 justify-center md:justify-start">

<button className="shiny-cta !px-8">
<span>Записаться ($75)</span>
</button>
<button className="px-6 py-3 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-medium rounded-full transition-colors">
                            Узнать подробнее
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-slate-950">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600" icon="lucide:sparkles" width="16"></iconify-icon>
<span className="text-slate-500 font-medium tracking-tight">DESTINY MATRIX</span>
</div>
<div className="flex gap-8 text-xs text-slate-500">
<a className="hover:text-slate-300 transition-colors" href="#">Договор оферты</a>
<a className="hover:text-slate-300 transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-slate-300 transition-colors" href="#">Контакты</a>
</div>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:send" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}

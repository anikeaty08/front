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



        function toggleView(viewId) {
            const landing = document.getElementById('landing-page');
            const report = document.getElementById('report-page');
            
            if (viewId === 'report-page') {
                landing.classList.add('hidden');
                report.classList.remove('hidden');
            } else {
                report.classList.add('hidden');
                landing.classList.remove('hidden');
            }
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    
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
      

<div className="flex flex-col min-h-screen" id="landing-page">

<nav className="fixed top-0 w-full z-50 border-b border-black/5 bg-white/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tighter text-xl">MIR.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
<a className="hover:text-black transition-colors" href="#problem">Проблема</a>
<a className="hover:text-black transition-colors" href="#what-we-do">Что мы делаем</a>
<a className="hover:text-black transition-colors" href="#output">Результат</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors" href="#order">
                        Найти пользователей
                    </a>
</div>
</div>
</nav>

<section className="md:pt-52 md:pb-32 overflow-hidden pt-40 pb-20 relative">
<div className="absolute inset-0 top-0 h-[50vh] bg-grid -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[40vh] bg-gray-200/50 blur-[120px] rounded-full -z-10"></div>
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-medium text-gray-600 mb-8">
<iconify-icon className="text-black" icon="solar:rocket-linear"></iconify-icon>
<span>Для SaaS разработчиков</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-tight text-4xl font-semibold tracking-tight max-w-5xl mr-auto mb-8 ml-auto">Есть идея продукта?<span className="text-gradient">
Поймите рынок прежде чем вложиться в разработку</span></h1>
<p className="md:text-xl leading-relaxed text-lg text-gray-500 tracking-normal max-w-3xl mr-auto mb-10 ml-auto">Помогаем SaaS-стартапам понять свой рынок и запустить маркетинг раньше, чем будет написана первая строчка кода.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto text-sm font-medium bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2" onclick="toggleView('report-page')">
                        Пример GTM-отчета
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<span className="text-sm text-gray-500">Анализ рынка + GTM стратегия</span>
</div>
</div>
</section>

<section className="border-y bg-gray-50/50 border-black/5 pt-20 pb-20" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Хватит строить в пустоту.</h2>
<p className="text-base text-gray-500 max-w-2xl">Разработчики создают отличные сервисы, но часто не знают, где найти первых юзеров и как масштабировать привлечение.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="card-subtle p-8 rounded-2xl">
<div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center mb-6 border border-black/10">
<iconify-icon className="text-xl text-gray-700" icon="solar:map-arrow-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Где искать?</h3>
<p className="text-sm text-gray-500">Вы провалидировали гипотезу, но не понимаете, в какие каналы идти: SEO, холодные рассылки, Ads или комьюнити?</p>
</div>
<div className="card-subtle p-8 rounded-2xl">
<div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center mb-6 border border-black/10">
<iconify-icon className="text-xl text-gray-700" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Кого звать?</h3>
<p className="text-sm text-gray-500">У рынка есть потенциал, но нет четких сегментов ЦА. Кому продукт нужнее всего прямо сейчас?</p>
</div>
<div className="card-subtle p-8 rounded-2xl">
<div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center mb-6 border border-black/10">
<iconify-icon className="text-xl text-gray-700" icon="solar:pencile-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Что писать?</h3>
<p className="text-sm text-gray-500">Нет понимания семантики и болей конкурентов. Как выделиться и привлечь внимание в перегруженной нише?</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="what-we-do">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Два этапа к <span className="text-gradient">росту SaaS.</span></h2>
<p className="text-base text-gray-500 mb-10 leading-relaxed">
                            Мы берем ваше предложение и превращаем его в пошаговый план захвата рынка.
                        </p>
<div className="space-y-10">
<div>
<h3 className="text-lg font-semibold tracking-tight mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded bg-black text-white text-xs flex items-center justify-center font-bold">1</span>
                                    Оценка рынка и конкурентов
                                </h3>
<ul className="space-y-3 ml-8">
<li className="flex gap-2 text-sm text-gray-500"><iconify-icon className="text-blue-500 mt-1" icon="solar:check-read-linear"></iconify-icon> Обзор и глубокая оценка емкости ниши</li>
<li className="flex gap-2 text-sm text-gray-500"><iconify-icon className="text-blue-500 mt-1" icon="solar:check-read-linear"></iconify-icon> Анализ конкурентов и их слабых мест</li>
<li className="flex gap-2 text-sm text-gray-500"><iconify-icon className="text-blue-500 mt-1" icon="solar:check-read-linear"></iconify-icon> GAP-анализ: где рынок не закрывает потребности</li>
</ul>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded bg-black text-white text-xs flex items-center justify-center font-bold">2</span>
                                    Вводные для GTM и Growth
                                </h3>
<ul className="space-y-3 ml-8">
<li className="flex gap-2 text-sm text-gray-500"><iconify-icon className="text-blue-500 mt-1" icon="solar:check-read-linear"></iconify-icon> Портреты ЦА и сегментация пользователей</li>
<li className="flex gap-2 text-sm text-gray-500"><iconify-icon className="text-blue-500 mt-1" icon="solar:check-read-linear"></iconify-icon> Каналы и гео: где дешевле всего искать юзеров</li>
<li className="flex gap-2 text-sm text-gray-500"><iconify-icon className="text-blue-500 mt-1" icon="solar:check-read-linear"></iconify-icon> Семантика и тактика продвижения (креативы, посылы)</li>
</ul>
</div>
</div>
</div>
<div className="relative cursor-pointer group" onclick="toggleView('report-page')">
<div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-3xl -z-10 group-hover:bg-black/5 transition-colors"></div>
<div className="card-subtle rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
<div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
<span className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg flex items-center gap-2">
                                    Открыть пример GTM-отчета <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
<div className="flex items-center justify-between border-b border-black/5 pb-4 mb-4">
<div className="text-sm font-semibold tracking-tight">GTM Strategy Input</div>
<div className="text-xs text-gray-500">Market: B2B SaaS</div>
</div>
<div className="space-y-4">
<div className="h-4 bg-black/5 rounded w-3/4"></div>
<div className="h-4 bg-black/5 rounded w-full"></div>
<div className="py-4 border-y border-black/5 my-4">
<div className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Ключевой канал</div>
<div className="flex items-center gap-2 text-sm text-blue-700 bg-blue-100 px-3 py-2 rounded-md w-max">
<iconify-icon icon="solar:ranking-linear"></iconify-icon>
                                        Organic Search (High Intent)
                                    </div>
</div>
<div className="grid grid-cols-2 gap-4 pt-2">
<div className="bg-black/5 rounded-lg p-4">
<div className="text-xs text-gray-500 mb-1">ЦА Сегмент</div>
<div className="text-sm font-medium italic">Marketing Ops</div>
</div>
<div className="bg-black/5 rounded-lg p-4">
<div className="text-xs text-gray-500 mb-1">CPA (Est.)</div>
<div className="text-sm font-medium text-blue-600">$12 - $18</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-gray-50/50 border-black/5 border-t pt-32 pb-32 relative" id="order">
<div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-black/5 blur-[100px] rounded-full -z-10"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="md:text-5xl text-3xl font-semibold tracking-tight mb-6">Получите вводные для стратегии роста.</h2>
<p className="text-base md:text-lg text-gray-500 mb-10">
            Расскажите о вашем SaaS-сервисе. Мы проведем анализ и дадим практические рекомендации по шагам реализации вашего GTM.
        </p>
<form className="max-w-xl mx-auto space-y-5 text-left">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-black mb-1.5">Имя</label>
<input className="w-full bg-white border border-black/10 rounded-md px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black/30 transition-colors" placeholder="Ваше имя" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-black mb-1.5">Email</label>
<input className="w-full bg-white border border-black/10 rounded-md px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black/30 transition-colors" placeholder="work@email.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-black mb-1.5">О продукте</label>
<textarea className="w-full bg-white border border-black/10 rounded-md px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black/30 transition-colors resize-y" placeholder="Опишите продукт, фичи, дифференциатор и нишу..." rows="3"></textarea>
</div>
<div className="">
<label className="block text-sm font-medium text-black mb-1.5">Конкуренты</label>
<textarea className="w-full bg-white border border-black/10 rounded-md px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black/30 transition-colors resize-y" placeholder="Ссылки на прямых и косвенных конкурентов (URL)..." rows="2"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-black text-white font-medium text-sm px-4 py-3 rounded-md hover:bg-gray-800 transition-colors" type="button">
                    Начать анализ
                </button>
</div>
</form>
</div>
</section>
<footer className="py-8 border-t border-black/5 text-center text-sm text-gray-500 mt-auto bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="font-semibold tracking-tighter text-black">MIR.</div>
<div>© 2026 SaaS Market Intelligence. Помогаем расти быстрее.</div>
</div>
</footer>
</div>

<div className="hidden min-h-screen bg-[#fafafa] flex flex-col fade-in" id="report-page">
<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 h-14 flex items-center justify-between px-4 md:px-6">
<button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors font-medium" onclick="toggleView('landing-page')">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
<span>Назад</span>
</button>
<div className="hidden md:flex items-center gap-3">
<span className="text-sm font-semibold tracking-tight text-gray-800 italic">Example GTM Report: DevTools SaaS</span>
</div>
<button className="text-xs md:text-sm font-medium bg-white border border-black/10 text-black px-3 py-1.5 rounded-md hover:bg-black/5 transition-colors flex items-center gap-2 shadow-sm">
<iconify-icon className="text-base" icon="solar:download-minimalistic-linear"></iconify-icon>
<span className="hidden sm:inline">PDF</span>
</button>
</nav>
<div className="flex-1 max-w-5xl mx-auto w-full px-4 md:px-8 py-8 md:py-12">
<header className="mb-10">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/5 text-xs font-medium text-gray-600 mb-4 uppercase tracking-wider">
                    Результат: Экспертный отчет и рекомендации
                </div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">DevTools Market &amp; GTM Strategy</h1>
<p className="text-gray-500 text-sm max-w-2xl">Аналитика рынка, конкурентный GAP-анализ и вводные для Growth стратегии.</p>
</header>

<section className="mb-12">
<h2 className="text-xl font-semibold tracking-tight mb-6 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:chart-2-linear"></iconify-icon>
                    Этап 1: Оценка рынка и GAP-анализ
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
<div className="bg-white border border-black/5 rounded-xl p-5 shadow-sm">
<div className="text-xs text-gray-500 mb-1 font-medium">Market Maturity</div>
<div className="text-2xl font-semibold tracking-tight mb-2">High Growth</div>
<p className="text-xs text-gray-400 leading-relaxed">Ниша не консолидирована. Основные игроки сфокусированы на Enterprise, оставляя SMB сегмент свободным.</p>
</div>
<div className="bg-white border border-black/5 rounded-xl p-5 shadow-sm">
<div className="text-xs text-gray-500 mb-1 font-medium">Competitor Weakness (GAP)</div>
<div className="text-2xl font-semibold tracking-tight mb-2 text-purple-600">Onboarding</div>
<p className="text-xs text-gray-400 leading-relaxed">Среднее время до первого ценного действия у конкурентов — 14 дней. Ваша возможность: Time-to-Value &lt; 1 часа.</p>
</div>
</div>
<div className="bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-black/5 bg-gray-50/50 text-xs text-gray-500 uppercase">
<th className="py-3 px-5 font-medium">Конкурент</th>
<th className="py-3 px-5 font-medium">Фокус ЦА</th>
<th className="py-3 px-5 font-medium">Каналы роста</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-black/5">
<td className="py-4 px-5 font-medium">Competitor A</td>
<td className="py-4 px-5 text-gray-500">Fortune 500</td>
<td className="py-4 px-5"><span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Direct Sales</span></td>
</tr>
<tr>
<td className="py-4 px-5 font-medium">Competitor B</td>
<td className="py-4 px-5 text-gray-500">Solo-devs</td>
<td className="py-4 px-5"><span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Product Hunt</span></td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="mb-12">
<h2 className="text-xl font-semibold tracking-tight mb-6 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:walking-linear"></iconify-icon>
                    Этап 2: Вводные для GTM и привлечения
                </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="card-subtle p-6 rounded-xl">
<div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Кто: ЦА Сегменты</div>
<ul className="space-y-3 text-sm">
<li className="font-medium">1. Lead Developers в стартапах</li>
<li className="font-medium">2. DevOps Freelancers</li>
<li className="font-medium text-gray-400 italic">3. [Заблокировано в демо]</li>
</ul>
</div>
<div className="card-subtle p-6 rounded-xl">
<div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Где: Каналы и Гео</div>
<ul className="space-y-3 text-sm">
<li className="font-medium">Twitter (X) - Tech niche</li>
<li className="font-medium">Reddit - r/saas, r/devops</li>
<li className="font-medium text-gray-400 italic">[Заблокировано в демо]</li>
</ul>
</div>
<div className="card-subtle p-6 rounded-xl">
<div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Как: Тактика</div>
<ul className="space-y-3 text-sm">
<li className="font-medium">Side-project marketing</li>
<li className="font-medium">Semantic SEO (Long-tail)</li>
<li className="font-medium text-gray-400 italic">[Заблокировано в демо]</li>
</ul>
</div>
</div>
</section>

<section className="mb-12">
<div className="bg-black text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
<div className="max-w-md">
<h3 className="text-xl font-semibold tracking-tight mb-2">Хотите такой отчет для своего SaaS?</h3>
<p className="text-gray-400 text-sm">Мы проанализируем именно вашу нишу и подготовим пошаговый план привлечения первых 100+ пользователей.</p>
</div>
<button className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors whitespace-nowrap" onclick="toggleView('landing-page')">
                        Обсудить мой проект
                    </button>
</div>
</section>
</div>
</div>


    </>
  );
}

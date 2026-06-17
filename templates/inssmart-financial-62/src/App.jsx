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
      

<div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-50 md:hidden flex flex-col gap-2 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
<button className="w-full bg-[#ff8a00] hover:bg-[#e67c00] text-white font-semibold py-4 px-8 rounded-full transition-colors text-base shadow-lg shadow-orange-500/30 flex justify-center items-center gap-2" onclick="document.getElementById('register').scrollIntoView()">
            Занять место бесплатно
            <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<p className="text-xs text-center text-gray-500 font-medium">Осталось 12 мест на сегодня</p>
</div>

<section className="bg-[#0b1121] text-white relative overflow-hidden min-h-[90vh] flex items-center">

<div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
<img alt="Background" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79e12c5c-e294-4f0a-bfda-11ec3b673e6b_1600w.png"/>
</div>
<div className="absolute inset-0 opacity-20 pointer-events-none z-0">
<svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-opacity="0.2" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10 flex flex-col lg:flex-row items-center gap-12 w-full">
<div className="lg:w-1/2 space-y-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-lg shadow-blue-500/20">
<iconify-icon className="text-white" height="20" icon="solar:shield-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight uppercase tracking-widest text-blue-400">ИНССМАРТ</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                    Как создать онлайн-бизнес в страховании и выйти на доход от <span className="text-blue-400">100 000 ₽</span> в месяц
                </h1>
<p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Работая с 25+ страховыми через единую IT-систему. Получите первые <span className="font-semibold text-white bg-blue-600/30 px-2 py-0.5 rounded">2 000 — 5 000 ₽</span> уже в день старта.
                </p>
<div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex items-start gap-4 border border-white/10 hover:bg-white/10 transition-colors">
<div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-3 shrink-0 shadow-lg">
<iconify-icon className="text-white" height="24" icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-lg mb-1 text-white">Подарок после регистрации</h3>
<p className="text-sm text-gray-300">«Закрытый доступ» к сервису Инссмарт — для всех участников вебинара.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
<button className="w-full sm:w-auto bg-[#ff8a00] hover:bg-[#e67c00] text-white font-semibold py-4 px-10 rounded-full transition-all transform hover:scale-105 text-lg shadow-[0_0_40px_rgba(255,138,0,0.3)] relative overflow-hidden group" id="register">
<span className="relative z-10">Занять место на вебинаре</span>
<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
</button>
<div className="flex flex-col gap-2 text-sm text-gray-400">
<span className="flex items-center gap-2 font-medium text-gray-300"><iconify-icon className="text-green-400" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon> Без вложений</span>
<span className="flex items-center gap-2 font-medium text-gray-300"><iconify-icon className="text-blue-400" height="18" icon="solar:laptop-linear" width="18"></iconify-icon> Полностью онлайн</span>
</div>
</div>
</div>
<div className="lg:w-1/2 relative flex justify-center w-full mt-8 lg:mt-0">
<div className="relative w-full max-w-lg aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-800 border border-white/10 shadow-2xl group">
<img alt="Professional Woman" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6677f0b7-92fe-4026-866c-5aa3f3970039_800w.png"/>

<div className="absolute top-6 left-6 w-2/3 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 shadow-2xl transform -rotate-2">
<img alt="Analytics" className="w-full rounded-xl opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f69e94c-9d76-4c7d-b2c1-ec840c1e992a_800w.png"/>
</div>
<div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 shadow-2xl flex items-center gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
<div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0 border border-green-500/30">
<iconify-icon height="24" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-300 font-medium">Первый доход</p>
<p className="font-semibold text-xl text-white">4 850 ₽ <span className="text-sm font-normal text-green-400">+ сегодня</span></p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<div className="p-6 rounded-3xl bg-gray-50 flex items-center md:items-start gap-4 border border-gray-100 hover:shadow-md transition-shadow">
<div className="p-4 bg-blue-100 rounded-2xl text-blue-600 shrink-0">
<iconify-icon height="28" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight mb-1">100к+</p>
<p className="text-sm text-gray-500 font-medium">Пользователей системы</p>
</div>
</div>
<div className="p-6 rounded-3xl bg-gray-50 flex items-center md:items-start gap-4 border border-gray-100 hover:shadow-md transition-shadow">
<div className="p-4 bg-green-100 rounded-2xl text-green-600 shrink-0">
<iconify-icon height="28" icon="solar:wad-of-money-linear" width="28"></iconify-icon>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight mb-1">2 млрд</p>
<p className="text-sm text-gray-500 font-medium">Рублей выплачено</p>
</div>
</div>
<div className="p-6 rounded-3xl bg-gray-50 flex items-center md:items-start gap-4 border border-gray-100 hover:shadow-md transition-shadow">
<div className="p-4 bg-pink-100 rounded-2xl text-pink-600 shrink-0">
<iconify-icon height="28" icon="solar:buildings-linear" width="28"></iconify-icon>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight mb-1">25+</p>
<p className="text-sm text-gray-500 font-medium">Страховых и банков</p>
</div>
</div>
<div className="p-6 rounded-3xl bg-gray-50 flex items-center md:items-start gap-4 border border-gray-100 hover:shadow-md transition-shadow">
<div className="p-4 bg-orange-100 rounded-2xl text-orange-600 shrink-0">
<iconify-icon height="28" icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight mb-1">15%</p>
<p className="text-sm text-gray-500 font-medium">Рост рынка в год</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0b1121] text-white py-16 md:py-32 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
<img alt="Blue Strokes" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79e12c5c-e294-4f0a-bfda-11ec3b673e6b_1600w.png"/>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/2 w-full relative">

<div className="absolute -inset-10 opacity-20 bg-blue-500/10 blur-3xl rounded-full z-0"></div>

<div className="relative z-10 w-4/5 mx-auto rounded-[2rem] overflow-hidden aspect-[3/4] bg-slate-800 border-4 border-white/10 shadow-2xl">
<img alt="Марина Никитина" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84ab377a-994d-4177-9b16-4d1566d67fb6_800w.png"/>
</div>

<div className="absolute top-10 -left-6 lg:-left-12 w-2/3 max-w-[280px] z-20 transform -rotate-6 hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-2xl overflow-hidden border border-white/20">
<img alt="Receipt" className="w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d16170f7-1d7c-4b7b-b157-7bc96651f457_800w.png"/>
</div>
<div className="absolute bottom-10 -right-6 lg:-right-12 w-2/3 max-w-[280px] z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-2xl overflow-hidden border border-white/20">
<img alt="Receipt Dashboard" className="w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/947a9116-5267-4109-a0e8-c3626bed54af_800w.png"/>
</div>
</div>

<div className="lg:w-1/2 space-y-8 z-10 mt-12 lg:mt-0">
<div className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                        Спикер вебинара
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Марина Никитина</h2>
<div className="space-y-6 text-lg text-gray-300">
<p className="font-medium text-white text-xl">
                            Построила бизнес с нуля. Начала работать в страховании без опыта.
                        </p>
<p className="leading-relaxed">
                            Через систему Инссмарт вышла на стабильный доход и теперь помогает другим сделать то же самое. Ее месячный доход сейчас составляет более <span className="font-semibold text-white px-2 py-1 bg-green-500/20 rounded text-green-400 border border-green-500/20">320 000 ₽</span>.
                        </p>
</div>

<div className="pt-8 border-t border-white/10">
<p className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wider">Работает с топ-компаниями РФ</p>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors">СберСтрахование</span>
<span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors">АльфаСтрахование</span>
<span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors">Тинькофф</span>
<span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors">РЕСО-Гарантия</span>
<span className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors">ВСК</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2 space-y-8">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                    Готовый IT-инструмент для вашего заработка
                </h2>
<div className="space-y-6 text-gray-600 text-lg">
<p>Рынок страхования растет на 10-15% ежегодно. Мы даём вам <span className="font-medium text-gray-900">полностью готовый интерфейс</span>, чтобы забрать свою долю.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" height="24" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span>Сравнение полисов от 25 компаний в один клик</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" height="24" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span>Мгновенный расчет вашего комиссионного вознаграждения</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" height="24" icon="solar:check-circle-bold" width="24"></iconify-icon>
<span>Автоматический вывод средств на карту</span>
</li>
</ul>
</div>
</div>
<div className="lg:w-1/2 w-full relative">
<div className="bg-gray-50 rounded-[2.5rem] p-4 border border-gray-200 shadow-xl relative z-10">
<img alt="Policy Comparison Interface" className="w-full rounded-3xl shadow-sm border border-gray-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/814c8871-f862-4172-be70-3910a70f7358_800w.png"/>
</div>

<div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl z-0"></div>
<div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-100 rounded-full blur-3xl z-0"></div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Пассивный доход от вашей сети агентов</h2>
<p className="text-xl text-gray-600">
                    Вы приглашаете агентов или риелторов — и получаете процент с каждой их сделки. Доход растёт без вашего участия.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600" height="28" icon="solar:user-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-xl">Партнёр из региона</h3>
<p className="text-gray-500">Построил сеть из 15 агентов</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden mb-8 border border-gray-100 shadow-sm">

<img alt="Statistics Dashboard" className="w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/594442bf-1ff6-4a0c-b7d5-0438310ba0f0_800w.png"/>
</div>
<div className="bg-blue-50 rounded-2xl p-5 mb-4">
<p className="text-3xl font-semibold tracking-tight mb-1 text-gray-900">240 000 ₽ <span className="text-lg font-normal text-gray-500">/ мес</span></p>
<p className="text-sm text-blue-700 font-medium">Стабильный пассивный доход</p>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-green-600" height="28" icon="solar:case-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-xl">Бывший менеджер</h3>
<p className="text-gray-500">Работает 3 месяца в системе</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden mb-8 border border-gray-100 shadow-sm">

<img alt="Income Widget" className="w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ff7ed7d-3dbe-49a4-b156-078c69952f49_800w.png"/>
</div>
<div className="bg-green-50 rounded-2xl p-5 mb-4">
<p className="text-3xl font-semibold tracking-tight mb-1 text-gray-900">127 000 ₽ <span className="text-lg font-normal text-gray-500">/ мес</span></p>
<p className="text-sm text-green-700 font-medium">Заработок без вложений</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-center">Остались вопросы?</h2>
<p className="text-gray-500 text-lg text-center mb-12">Мы знаем, о чём вы думаете. Вот честные ответы</p>
<div className="space-y-4 mb-12">
<details className="group bg-gray-50 rounded-2xl border border-gray-100 transition-all open:bg-white open:shadow-lg open:border-blue-100" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-lg">
<span>«У меня нет опыта в страховании»</span>
<span className="transition-transform duration-300 group-open:rotate-180 bg-white p-2 rounded-full shadow-sm group-open:bg-blue-50 group-open:text-blue-600">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-gray-600 text-base leading-relaxed">
                        Мы даём готовые скрипты и обучение. Всё понятно даже новичку. Вы не продаёте, вы подключаете клиентов к системе через удобный интерфейс.
                    </div>
</details>
<details className="group bg-gray-50 rounded-2xl border border-gray-100 transition-all open:bg-white open:shadow-lg open:border-blue-100">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-lg">
<span>«Нужно будет продавать друзьям?»</span>
<span className="transition-transform duration-300 group-open:rotate-180 bg-white p-2 rounded-full shadow-sm group-open:bg-blue-50 group-open:text-blue-600">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-gray-600 text-base leading-relaxed">
                        Нет. Вы работаете через IT-систему — клиенты находят вас или вы привлекаете агентов. Доход идёт от продаж партнёров, а не от ваших личных продаж друзьям.
                    </div>
</details>
<details className="group bg-gray-50 rounded-2xl border border-gray-100 transition-all open:bg-white open:shadow-lg open:border-blue-100">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-lg">
<span>«Это вложения?»</span>
<span className="transition-transform duration-300 group-open:rotate-180 bg-white p-2 rounded-full shadow-sm group-open:bg-blue-50 group-open:text-blue-600">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-gray-600 text-base leading-relaxed">
                        Нет вложений. Регистрация, обучение, доступ к системе — всё бесплатно. Вы начинаете зарабатывать сразу после вебинара.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-[#0b1121] text-white py-16 md:py-32 relative overflow-hidden rounded-t-[3rem] mt-4">

<div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
<img alt="Background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79e12c5c-e294-4f0a-bfda-11ec3b673e6b_1600w.png"/>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                    Готовы создать свой бизнес и выйти на доход от <span className="text-blue-400">100 000 ₽</span>?
                </h2>
<div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-start gap-4">
<div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center shrink-0 border border-orange-500/30">
<iconify-icon height="24" icon="solar:stopwatch-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-semibold text-lg text-white mb-1">Доступ закроется скоро</p>
<p className="text-gray-400 text-sm">«Закрытый доступ» к сервису получат только зарегистрированные участники.</p>
</div>
</div>
<div className="space-y-4 w-full sm:max-w-md hidden md:block">
<button className="w-full bg-[#ff8a00] hover:bg-[#e67c00] text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 text-lg shadow-[0_0_40px_rgba(255,138,0,0.3)]" onclick="document.getElementById('register').scrollIntoView()">
                        Занять место на вебинаре
                    </button>
<p className="text-sm text-center text-gray-400 font-medium">Бесплатно • 60 минут • Без опыта</p>
</div>
</div>
<div className="lg:w-1/2 w-full relative">
<div className="relative w-full aspect-video md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
<img alt="Working on Laptop" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b314856-0cb2-46ac-ba7a-2d7688317bac_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

    </>
  );
}

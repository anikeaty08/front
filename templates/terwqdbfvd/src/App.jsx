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
colors: {
emerald: {
900: '#011C12', // Deep Dark Background
800: '#022c1e',
},
mint: {
DEFAULT: '#00D68F', // Primary Accent
light: '#7CFFC4',
},
tg: {
bg: '#212d3b', // Telegram Dark BG
btn: '#2b3947',
btnHover: '#3a4a5d'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
boxShadow: {
'glow': '0 0 40px -10px rgba(0, 214, 143, 0.3)',
'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-mint/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-mint-light/5 rounded-full blur-[120px]"></div>
</div>

<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-emerald-900/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<iconify-icon className="text-mint" height="24" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
                FitFormAdmin
            </a>

<button className="bg-mint text-white text-sm font-medium px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(0,214,143,0.3)] hover:shadow-[0_0_25px_rgba(0,214,143,0.5)] transition-all transform hover:-translate-y-0.5">
                Попробовать бесплатно
            </button>
</div>
</header>
<main className="relative z-10 pt-24">

<section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-mint/20 rounded-full blur-[150px] -z-10"></div>
<div className="reveal max-w-4xl mx-auto space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mint/30 bg-mint/5 backdrop-blur-sm text-mint text-xs font-medium tracking-wide uppercase mb-4">
<iconify-icon icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
                    AI-Powered Automation
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
                    Освободи своё время.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Верни себе свободу.</span>
</h1>
<p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                    FitFormAdmin — это автопилот для твоей тренерской рутины. Больше никаких отмен, переносов и путаницы в расписании. Только ты, твои клиенты и твоё свободное время.
                </p>
<div className="pt-8">
<button className="group relative bg-mint text-white text-base font-medium px-8 py-4 rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,214,143,0.4)]">
<span className="relative z-10 flex items-center gap-2">
                            Начать экономить время
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Поставь рутину на автопилот</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="reveal float-slow bg-emerald-800/30 border border-white/5 backdrop-blur-sm rounded-3xl p-8 hover:border-mint/30 transition-colors shadow-card">
<div className="mb-6 flex justify-center">

<div className="w-full max-w-xs bg-tg-bg rounded-2xl p-4 text-sm shadow-lg text-left">
<div className="mb-2 text-gray-400 text-xs">Bot • сейчас</div>
<div className="text-white mb-3">📅 <b>Ваше расписание на неделю:</b></div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 bg-white/5 rounded">
<span>Пн, 24 Окт</span>
<span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">4 записи</span>
</div>
<div className="flex items-center justify-between p-2 bg-white/5 rounded">
<span>Вт, 25 Окт</span>
<span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">6 записей</span>
</div>
</div>
<button className="w-full mt-3 bg-tg-btn hover:bg-tg-btnHover text-white py-2 rounded-lg text-sm font-medium transition-colors">
                                Редактировать слоты
                            </button>
</div>
</div>
<p className="text-center text-lg text-gray-200 font-medium">Автоматическое ведение расписания</p>
</div>

<div className="reveal float-medium bg-emerald-800/30 border border-white/5 backdrop-blur-sm rounded-3xl p-8 hover:border-mint/30 transition-colors shadow-card">
<div className="mb-6 flex justify-center">

<div className="w-full max-w-xs bg-tg-bg rounded-2xl p-4 text-sm shadow-lg text-left">
<div className="mb-2 text-gray-400 text-xs">Bot • сейчас</div>
<div className="text-white mb-3">👥 <b>Ваши клиенты (Активные):</b></div>
<div className="space-y-2">
<div className="flex items-center gap-3 border-b border-white/5 pb-2">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs">АИ</div>
<div>
<div className="text-sm">Алексей Иванов</div>
<div className="text-xs text-gray-400">Осталось: 4 тр.</div>
</div>
</div>
<div className="flex items-center gap-3 pb-2">
<div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs">МС</div>
<div>
<div className="text-sm">Мария Смирнова</div>
<div className="text-xs text-gray-400">Осталось: 8 тр.</div>
</div>
</div>
</div>
<button className="w-full mt-2 bg-tg-btn hover:bg-tg-btnHover text-white py-2 rounded-lg text-sm font-medium">
                                Добавить клиента
                            </button>
</div>
</div>
<p className="text-center text-lg text-gray-200 font-medium">Удобный список всех клиентов</p>
</div>

<div className="reveal float-medium bg-emerald-800/30 border border-white/5 backdrop-blur-sm rounded-3xl p-8 hover:border-mint/30 transition-colors shadow-card">
<div className="mb-6 flex justify-center">

<div className="w-full max-w-xs bg-tg-bg rounded-2xl p-4 text-sm shadow-lg text-left">
<div className="text-white mb-3 text-center">Выберите время записи:</div>
<div className="grid grid-cols-3 gap-2">
<button className="bg-tg-btn hover:bg-tg-btnHover text-white py-2 rounded text-xs transition-colors">10:00</button>
<button className="bg-tg-btn hover:bg-tg-btnHover text-white py-2 rounded text-xs transition-colors">11:30</button>
<button className="bg-tg-btn opacity-50 cursor-not-allowed text-gray-400 py-2 rounded text-xs border border-red-500/30 relative">
                                    13:00
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
</button>
<button className="bg-tg-btn hover:bg-tg-btnHover text-white py-2 rounded text-xs transition-colors">15:00</button>
<button className="bg-tg-btn hover:bg-tg-btnHover text-white py-2 rounded text-xs transition-colors">16:30</button>
<button className="bg-tg-btn hover:bg-tg-btnHover text-white py-2 rounded text-xs transition-colors">18:00</button>
</div>
</div>
</div>
<p className="text-center text-lg text-gray-200 font-medium">Онлайн-запись для клиентов 24/7</p>
</div>

<div className="reveal float-fast bg-emerald-800/30 border border-white/5 backdrop-blur-sm rounded-3xl p-8 hover:border-mint/30 transition-colors shadow-card">
<div className="mb-6 flex justify-center">

<div className="w-full max-w-xs bg-tg-bg rounded-2xl p-4 text-sm shadow-lg text-left">
<div className="mb-2 text-gray-400 text-xs">Bot • сейчас</div>
<div className="text-white mb-2">⚠️ <b>Клиент отменил запись</b></div>
<p className="text-gray-300 text-xs mb-3">Иван Петров отменил тренировку на завтра в 10:00. Слот автоматически открыт для записи.</p>
<div className="flex gap-2">
<button className="flex-1 bg-tg-btn hover:bg-tg-btnHover text-white py-2 rounded-lg text-xs font-medium">
                                    Предложить другому
                                </button>
<button className="flex-1 bg-tg-btn hover:bg-tg-btnHover text-white py-2 rounded-lg text-xs font-medium">
                                    Ок, спасибо
                                </button>
</div>
</div>
</div>
<p className="text-center text-lg text-gray-200 font-medium">Безопасные отмены и переносы</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-emerald-900/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Масштабируй доход, а не усилия</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="reveal p-8 rounded-3xl bg-gradient-to-b from-emerald-800/40 to-emerald-900/40 border border-white/10 hover:border-mint/50 transition-all group">
<div className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Tier 1</div>
<div className="text-4xl font-semibold text-white mb-1 group-hover:text-mint transition-colors">20 USD</div>
<div className="text-sm text-gray-300">за каждого приглашенного тренера</div>
</div>

<div className="reveal p-8 rounded-3xl bg-gradient-to-b from-emerald-800/40 to-emerald-900/40 border border-white/10 hover:border-mint/50 transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:graph-up-linear" width="64"></iconify-icon>
</div>
<div className="text-sm font-medium text-mint uppercase tracking-wider mb-2">Tier 2</div>
<div className="text-4xl font-semibold text-white mb-1 group-hover:text-mint transition-colors">25 USD</div>
<div className="text-sm text-gray-300">после 5 успешных активаций</div>
</div>

<div className="reveal p-8 rounded-3xl bg-gradient-to-b from-mint/10 to-emerald-900/40 border border-mint/20 hover:border-mint transition-all shadow-glow group">
<div className="flex items-center gap-2 mb-2">
<div className="text-sm font-medium text-mint uppercase tracking-wider">Ambassador</div>
<iconify-icon className="text-mint" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div className="text-4xl font-semibold text-white mb-1">30 USD</div>
<div className="text-sm text-gray-300">за каждого реферала со статусом "Амбассадор"</div>
</div>
</div>

<div className="reveal max-w-2xl mx-auto bg-tg-bg rounded-2xl p-6 border border-white/5 shadow-2xl">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
<span className="text-white font-medium">📊 Реферальная статистика</span>
<span className="text-xs text-mint bg-mint/10 px-2 py-1 rounded">Обновлено только что</span>
</div>
<div className="grid grid-cols-2 gap-4 text-center">
<div className="bg-white/5 rounded-xl p-4">
<div className="text-xs text-gray-400 mb-1">Всего приглашено</div>
<div className="text-2xl font-bold text-white">124</div>
</div>
<div className="bg-white/5 rounded-xl p-4">
<div className="text-xs text-gray-400 mb-1">Заработано</div>
<div className="text-2xl font-bold text-mint">$ 2,480</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="reveal space-y-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">AI-ассистент всегда на связи</h2>
<p className="text-lg text-gray-300 leading-relaxed">
                        Ответит на вопросы клиентов о питании, добавках и восстановлении, пока ты занят.
                    </p>
<div className="space-y-4 mt-8">
<div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-default">
<iconify-icon className="text-mint text-xl" icon="solar:question-circle-linear"></iconify-icon>
<span>"Сколько белка мне нужно в день?"</span>
</div>
<div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-default">
<iconify-icon className="text-mint text-xl" icon="solar:clock-circle-linear"></iconify-icon>
<span>"Когда лучше принимать креатин?"</span>
</div>
<div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-default">
<iconify-icon className="text-mint text-xl" icon="solar:running-linear"></iconify-icon>
<span>"Как быстрее восстановиться после ног?"</span>
</div>
</div>
</div>

<div className="reveal relative">
<div className="absolute inset-0 bg-mint/20 blur-[60px] rounded-full"></div>
<div className="relative bg-tg-bg border border-white/10 rounded-3xl p-6 shadow-2xl float-slow">
<div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-mint to-blue-500 flex items-center justify-center shadow-lg">
<iconify-icon className="text-white text-xl" icon="solar:smart-home-angle-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">Ответ AI-ассистента</h3>
<span className="text-xs text-mint flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse"></span>
                                    Online
                                </span>
</div>
</div>
<div className="bg-white/5 rounded-2xl p-4 rounded-tl-none">
<p className="text-gray-200 leading-relaxed text-sm">
                                "Для набора мышечной массы рекомендуется потреблять 1.6-2.2 грамма белка на килограмм веса тела. Для ваших 80 кг это составляет примерно 128-176 граммов в день. Распределите это количество на 4-5 приемов пищи для лучшего усвоения."
                            </p>
</div>
<div className="flex justify-end mt-2">
<span className="text-[10px] text-gray-500">12:42</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[400px] bg-gradient-to-r from-mint/30 to-mint-light/10 blur-[120px] rounded-full -z-10"></div>
<div className="reveal max-w-4xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">
                    Готов вернуть себе до 10 часов в неделю?
                </h2>
<button className="relative group bg-mint text-white text-lg font-medium px-10 py-5 rounded-full shadow-[0_0_40px_rgba(0,214,143,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(0,214,143,0.7)]">
<span className="relative z-10 flex items-center gap-2">
                        Да, хочу автопилот!
                        <iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
</span>
<div className="absolute inset-0 rounded-full ring-2 ring-white/30 animate-ping opacity-50"></div>
</button>
</div>
</section>
</main>

<footer className="bg-[#00100a] border-t border-white/5 py-12 text-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="text-center md:text-left space-y-2">
<a className="text-lg font-semibold tracking-tight text-white flex items-center justify-center md:justify-start gap-2" href="#">
<iconify-icon className="text-mint" icon="solar:bolt-circle-linear"></iconify-icon>
                    FitFormAdmin
                </a>
<p className="text-gray-500">© 2026 FitFormAdmin. All rights reserved.</p>
</div>

<div className="flex justify-center gap-8">
<a className="text-gray-400 hover:text-white transition-colors" href="#">Главная</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">Функции</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">Цены</a>
</div>

<div className="flex justify-center md:justify-end gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-mint transition-colors text-white" href="#">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-mint transition-colors text-white" href="#">
<iconify-icon icon="solar:camera-minimalistic-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}

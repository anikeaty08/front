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



        // Initialize Icons
        lucide.createIcons();

        // Navigation Logic
        function navigateTo(screenId) {
            // Hide all screens
            const screens = ['onboarding', 'dashboard', 'goals', 'chat', 'profile'];
            screens.forEach(s => {
                document.getElementById('screen-' + s).classList.add('hidden');
            });

            // Show target screen
            document.getElementById('screen-' + screenId).classList.remove('hidden');

            // Handle Bottom Nav Visibility
            const nav = document.getElementById('bottom-nav');
            if (screenId === 'onboarding') {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
                updateNavState(screenId);
            }
        }

        function updateNavState(activeScreen) {
            // Reset all nav buttons
            const navBtns = document.querySelectorAll('.neu-icon-btn');
            navBtns.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('text-gray-400');
            });

            // Set active state
            const activeBtn = document.getElementById('nav-' + activeScreen);
            if (activeBtn && activeBtn.classList.contains('neu-icon-btn')) {
                activeBtn.classList.add('active');
                activeBtn.classList.remove('text-gray-400');
            }
        }

        // Init
        // Start at onboarding
        // navigateTo('onboarding'); 
    
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
      

<div className="relative w-full max-w-sm h-[850px] bg-[#F0F0F3] rounded-[3rem] shadow-2xl overflow-hidden border-8 border-[#F0F0F3] ring-1 ring-black/5 flex flex-col">

<div className="h-10 w-full flex justify-between items-center px-6 pt-2 z-50">
<span className="text-xs font-semibold text-gray-500">9:41</span>
<div className="flex space-x-1">
<div className="w-4 h-4 bg-gray-300 rounded-full neu-pressed"></div>
<div className="w-4 h-4 bg-gray-300 rounded-full neu-pressed"></div>
</div>
</div>

<main className="flex-1 overflow-y-auto no-scrollbar relative" id="app-content">

<section className="absolute inset-0 flex flex-col justify-between p-8 fade-in z-20 bg-[#F0F0F3]" id="screen-onboarding">
<div className="flex flex-col items-center mt-12">
<div className="w-24 h-24 rounded-full neu-flat flex items-center justify-center mb-8 text-[#7B61FF]">
<i className="w-10 h-10" data-lucide="brain-circuit"></i>
</div>
<h1 className="text-3xl font-bold tracking-tight text-gray-700 mb-2">Mani.ai</h1>
<p className="text-center text-sm text-gray-500 leading-relaxed max-w-[200px]">
                        Ваш личный финансовый коуч с искусственным интеллектом.
                    </p>
</div>
<div className="space-y-6 mb-8">

<div className="flex items-center space-x-4 p-4 rounded-2xl neu-flat">
<div className="text-[#7B61FF]"><i className="w-6 h-6" data-lucide="sparkles"></i></div>
<div>
<h3 className="text-sm font-bold text-gray-700">AI Инсайты</h3>
<p className="text-xs text-gray-400">Умный анализ расходов</p>
</div>
</div>
<div className="flex items-center space-x-4 p-4 rounded-2xl neu-flat">
<div className="text-[#7B61FF]"><i className="w-6 h-6" data-lucide="target"></i></div>
<div>
<h3 className="text-sm font-bold text-gray-700">Цели</h3>
<p className="text-xs text-gray-400">Достигайте мечты быстрее</p>
</div>
</div>
<button className="w-full py-4 rounded-2xl neu-btn-accent font-semibold tracking-wide text-sm mt-8 flex items-center justify-center space-x-2" onclick="navigateTo('dashboard')">
<span>Подключить банк</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="text-center text-xs text-gray-400">Безопасное соединение через API банка</p>
</div>
</section>

<section className="hidden absolute inset-0 flex flex-col p-6 space-y-8 pb-24 fade-in" id="screen-dashboard">

<div className="flex justify-between items-center">
<div>
<p className="text-xs text-gray-400 font-medium">Доброе утро,</p>
<h2 className="text-xl font-bold text-gray-700 tracking-tight">Александр</h2>
</div>
<div className="w-10 h-10 rounded-full neu-flat flex items-center justify-center overflow-hidden cursor-pointer border-2 border-[#F0F0F3]" onclick="navigateTo('profile')">
<img alt="avatar" className="w-8 h-8" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>

<div className="neu-flat rounded-3xl p-6 relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-bold text-gray-600">Финансовое здоровье</h3>
<span className="text-xs text-[#7B61FF] font-semibold bg-[#7B61FF]/10 px-2 py-0.5 rounded-lg">Отлично</span>
</div>
<i className="text-[#7B61FF] w-5 h-5" data-lucide="activity"></i>
</div>
<div className="flex items-end space-x-2 mb-2">
<span className="text-3xl font-bold text-gray-800 tracking-tight">85</span>
<span className="text-sm text-gray-400 mb-1">/ 100</span>
</div>

<div className="w-full h-3 rounded-full neu-pressed relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[85%] bg-[#7B61FF] rounded-full"></div>
</div>
<p className="text-xs text-gray-400 mt-3 leading-tight">Ваши расходы оптимизированы на 12% лучше, чем в прошлом месяце.</p>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-bold text-gray-700">Мои Цели</h3>
<button className="text-xs text-[#7B61FF] font-semibold" onclick="navigateTo('goals')">Все</button>
</div>
<div className="flex space-x-4 overflow-x-auto no-scrollbar pb-4">

<div className="min-w-[140px] neu-flat p-4 rounded-2xl flex flex-col justify-between h-32">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mb-2">
<i className="w-4 h-4" data-lucide="car"></i>
</div>
<div>
<p className="text-xs font-bold text-gray-700">Tesla Model 3</p>
<p className="text-xs text-gray-400 mt-1">45%</p>
</div>
<div className="w-full h-1.5 rounded-full neu-pressed mt-2">
<div className="h-full w-[45%] bg-orange-400 rounded-full"></div>
</div>
</div>

<div className="min-w-[140px] neu-flat p-4 rounded-2xl flex flex-col justify-between h-32">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mb-2">
<i className="w-4 h-4" data-lucide="plane"></i>
</div>
<div>
<p className="text-xs font-bold text-gray-700">Отпуск</p>
<p className="text-xs text-gray-400 mt-1">20%</p>
</div>
<div className="w-full h-1.5 rounded-full neu-pressed mt-2">
<div className="h-full w-[20%] bg-blue-400 rounded-full"></div>
</div>
</div>

<div className="min-w-[60px] neu-pressed rounded-2xl flex items-center justify-center cursor-pointer" onclick="navigateTo('goals')">
<i className="text-gray-400 w-6 h-6" data-lucide="plus"></i>
</div>
</div>
</div>

<div>
<h3 className="text-base font-bold text-gray-700 mb-4">Транзакции</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl neu-flat flex items-center justify-center text-gray-600">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</div>
<div>
<p className="text-sm font-bold text-gray-700">Супермаркет</p>
<p className="text-xs text-gray-400">Сегодня, 14:30</p>
</div>
</div>
<span className="text-sm font-bold text-gray-700">- 4,200 ₽</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl neu-flat flex items-center justify-center text-gray-600">
<i className="w-5 h-5" data-lucide="coffee"></i>
</div>
<div>
<p className="text-sm font-bold text-gray-700">Кофейня</p>
<p className="text-xs text-gray-400">Вчера, 09:15</p>
</div>
</div>
<span className="text-sm font-bold text-gray-700">- 350 ₽</span>
</div>

<div className="flex items-center justify-between opacity-50">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl bg-gray-200 animate-pulse"></div>
<div className="space-y-2">
<div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
<div className="h-2 w-12 bg-gray-200 rounded animate-pulse"></div>
</div>
</div>
<div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
</div>
</div>
</div>
</section>

<section className="hidden absolute inset-0 flex flex-col p-6 pb-24 fade-in bg-[#F0F0F3]" id="screen-goals">
<div className="flex items-center space-x-4 mb-8">
<button className="w-10 h-10 rounded-full neu-flat flex items-center justify-center text-gray-600" onclick="navigateTo('dashboard')">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<h2 className="text-xl font-bold text-gray-700">Новая цель</h2>
</div>
<div className="flex-1 flex flex-col space-y-8">

<div className="flex justify-center my-4">
<div className="w-24 h-24 rounded-full neu-pressed flex items-center justify-center text-[#7B61FF]">
<i className="w-10 h-10" data-lucide="monitor"></i>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-bold text-gray-500 ml-1">Название цели</label>
<input className="w-full p-4 rounded-2xl bg-[#F0F0F3] neu-pressed outline-none text-gray-700 font-semibold placeholder-gray-400 text-sm focus:ring-1 focus:ring-[#7B61FF]/30 transition-all" placeholder="Например: Новый Macbook" type="text"/>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs font-bold text-gray-500 ml-1">Сумма</label>
<span className="text-lg font-bold text-[#7B61FF]">120,000 ₽</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#7B61FF] neu-pressed" max="500000" min="0" type="range"/>
<div className="flex justify-between text-xs text-gray-400">
<span>0 ₽</span>
<span>500к+</span>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-bold text-gray-500 ml-1">Дата достижения</label>
<div className="w-full p-4 rounded-2xl bg-[#F0F0F3] neu-flat flex justify-between items-center text-gray-700">
<span className="text-sm font-semibold">Декабрь 2024</span>
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i>
</div>
</div>
<div className="mt-auto">
<button className="w-full py-4 rounded-2xl neu-btn-accent font-semibold tracking-wide text-sm shadow-lg" onclick="navigateTo('dashboard')">
                            Создать цель
                        </button>
</div>
</div>
</section>

<section className="hidden absolute inset-0 flex flex-col fade-in bg-[#F0F0F3]" id="screen-chat">

<div className="px-6 pt-6 pb-4 neu-flat rounded-b-3xl z-10 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-[#7B61FF] flex items-center justify-center text-white shadow-md relative">
<i className="w-6 h-6" data-lucide="bot"></i>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#F0F0F3] rounded-full"></div>
</div>
<div>
<h3 className="text-sm font-bold text-gray-700">Mani Ассистент</h3>
<p className="text-xs text-green-500 font-semibold">Онлайн</p>
</div>
</div>
<button className="text-gray-400"><i className="w-5 h-5" data-lucide="more-vertical"></i></button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar pb-24">

<div className="flex justify-center"><span className="text-xs text-gray-400 bg-gray-200/50 px-2 py-1 rounded-full">Сегодня</span></div>

<div className="flex items-start space-x-2">
<div className="w-8 h-8 rounded-full bg-[#7B61FF]/10 flex items-center justify-center text-[#7B61FF] mt-1 shrink-0">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<div className="neu-flat p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm text-gray-600 leading-relaxed">
                            Привет, Александр! 👋 Я проанализировал твои расходы за неделю. Ты потратил на 15% больше в категории "Развлечения".
                        </div>
</div>

<div className="flex items-end justify-end space-x-2">
<div className="bg-[#7B61FF] text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-lg shadow-[#7B61FF]/20 leading-relaxed">
                            Покажи детали по этой категории.
                        </div>
</div>

<div className="flex items-start space-x-2">
<div className="w-8 h-8 rounded-full bg-[#7B61FF]/10 flex items-center justify-center text-[#7B61FF] mt-1 shrink-0">
<i className="w-4 h-4" data-lucide="pie-chart"></i>
</div>
<div className="neu-flat p-4 rounded-2xl rounded-tl-none w-[220px]">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-bold text-gray-500">Развлечения</span>
<span className="text-xs font-bold text-red-400">+15% 📈</span>
</div>
<div className="h-32 flex items-end justify-between space-x-1 mb-3 px-2 border-b border-gray-200 pb-2">
<div className="w-3 bg-gray-300 rounded-t-sm h-[40%]"></div>
<div className="w-3 bg-gray-300 rounded-t-sm h-[60%]"></div>
<div className="w-3 bg-gray-300 rounded-t-sm h-[30%]"></div>
<div className="w-3 bg-[#7B61FF] rounded-t-sm h-[85%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] bg-gray-800 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition">5к</div>
</div>
<div className="w-3 bg-gray-300 rounded-t-sm h-[45%]"></div>
</div>
<button className="w-full py-2 rounded-xl border border-[#7B61FF] text-[#7B61FF] text-xs font-bold hover:bg-[#7B61FF] hover:text-white transition">Подробнее</button>
</div>
</div>

<div className="flex items-start space-x-2 opacity-0 animate-[fadeIn_0.5s_1s_forwards]">
<div className="w-8 h-8 rounded-full bg-[#7B61FF]/10 flex items-center justify-center text-[#7B61FF] mt-1 shrink-0">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<div className="neu-flat px-4 py-3 rounded-2xl rounded-tl-none flex items-center space-x-1">
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
<div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
</div>
</div>
</div>

<div className="absolute bottom-20 left-0 right-0 px-4 py-2">
<div className="flex items-center space-x-3">
<div className="flex-1 neu-pressed rounded-2xl p-1 flex items-center pr-2">
<input className="w-full bg-transparent p-3 text-sm outline-none text-gray-700 placeholder-gray-400" placeholder="Спроси Mani..." type="text"/>
<button className="p-2 text-gray-400 hover:text-[#7B61FF] transition"><i className="w-5 h-5" data-lucide="mic"></i></button>
</div>
<button className="w-12 h-12 rounded-full neu-btn-accent flex items-center justify-center shadow-lg">
<i className="w-5 h-5 ml-0.5" data-lucide="send"></i>
</button>
</div>
</div>
</section>

<section className="hidden absolute inset-0 flex flex-col p-6 space-y-6 pb-24 fade-in" id="screen-profile">
<div className="flex justify-center mt-4">
<div className="relative">
<div className="w-28 h-28 rounded-full neu-flat flex items-center justify-center p-1">
<img alt="profile" className="w-full h-full rounded-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="absolute bottom-1 right-1 w-8 h-8 bg-[#7B61FF] rounded-full border-4 border-[#F0F0F3] flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="edit-2"></i>
</div>
</div>
</div>
<div className="text-center mb-4">
<h2 className="text-xl font-bold text-gray-700">Александр Иванов</h2>
<p className="text-sm text-gray-400">Pro план активен</p>
</div>

<div className="space-y-4">

<div className="neu-flat p-4 rounded-2xl flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="bell"></i>
</div>
<span className="text-sm font-semibold text-gray-600">Уведомления</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-[#7B61FF] transition-all duration-200 top-0.5 left-0.5" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>

<div className="neu-flat p-4 rounded-2xl flex items-center justify-between cursor-pointer active:scale-[0.98] transition">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="credit-card"></i>
</div>
<span className="text-sm font-semibold text-gray-600">Способы оплаты</span>
</div>
<i className="text-gray-400 w-4 h-4" data-lucide="chevron-right"></i>
</div>

<div className="neu-flat p-4 rounded-2xl flex items-center justify-between cursor-pointer active:scale-[0.98] transition">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-lg bg-green-50 text-green-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shield"></i>
</div>
<span className="text-sm font-semibold text-gray-600">Безопасность</span>
</div>
<i className="text-gray-400 w-4 h-4" data-lucide="chevron-right"></i>
</div>
</div>

<button className="mt-auto w-full py-4 rounded-2xl neu-flat text-red-500 font-bold text-sm hover:text-red-600 transition flex items-center justify-center space-x-2" onclick="navigateTo('onboarding')">
<i className="w-4 h-4" data-lucide="log-out"></i>
<span>Выйти</span>
</button>
</section>
</main>


<nav className="hidden h-20 bg-[#F0F0F3] z-50 flex justify-between items-center px-8 pb-4 shadow-[0_-5px_15px_rgba(255,255,255,0.8)]" id="bottom-nav">
<button className="neu-icon-btn w-12 h-12 text-gray-400 active" id="nav-dashboard" onclick="navigateTo('dashboard')">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
</button>
<button className="neu-icon-btn w-12 h-12 text-gray-400" id="nav-goals" onclick="navigateTo('goals')">
<i className="w-5 h-5" data-lucide="target"></i>
</button>

<div className="-mt-8">
<button className="w-14 h-14 rounded-full bg-[#7B61FF] text-white flex items-center justify-center shadow-lg shadow-[#7B61FF]/40 hover:scale-105 transition-transform" id="nav-chat" onclick="navigateTo('chat')">
<i className="w-6 h-6" data-lucide="message-square-plus"></i>
</button>
</div>
<button className="neu-icon-btn w-12 h-12 text-gray-400 hidden" id="nav-chat-placeholder" onclick="navigateTo('chat')">

</button>
<button className="neu-icon-btn w-12 h-12 text-gray-400" id="nav-profile" onclick="navigateTo('profile')">
<i className="w-5 h-5" data-lucide="user"></i>
</button>
</nav>
</div>


    </>
  );
}

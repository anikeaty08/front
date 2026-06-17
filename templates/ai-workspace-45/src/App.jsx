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
      

<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50" x-show="currentStep === 'login'" x-transition.opacity.duration.500ms="">
<div className="glass-panel w-full max-w-sm p-8 rounded-3xl shadow-xl shadow-indigo-100/50 flex flex-col items-center">
<div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-800 mb-2">Assist</h1>
<p className="text-sm text-slate-500 mb-8 text-center">Вход в рабочее пространство</p>
<form @submit.prevent="login" className="w-full space-y-4">
<div>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400" placeholder="Логин" type="text" x-model="loginInput"/>
</div>
<div>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400" placeholder="Пароль" type="password" x-model="passwordInput"/>
</div>
<button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-medium transition-colors shadow-lg shadow-slate-200" type="submit">
                    Войти
                </button>
</form>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50" x-show="currentStep === 'onboarding'" x-transition.opacity.duration.500ms="">
<div className="glass-panel w-full max-w-sm p-8 rounded-3xl shadow-xl shadow-indigo-100/50 flex flex-col items-center">
<div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
<span className="iconify text-indigo-600" data-icon="lucide:user" data-width="24"></span>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-800 mb-2">Давайте знакомиться</h2>
<p className="text-sm text-slate-500 mb-6 text-center">Как к вам обращаться?</p>
<form @submit.prevent="setName" className="w-full space-y-4">
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400" placeholder="Имя Фамилия" type="text" x-model="usernameInput"/>
<button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-colors shadow-lg shadow-indigo-200" type="submit">
                    Продолжить
                </button>
</form>
</div>
</div>

<div className="flex h-full w-full" x-show="currentStep === 'dashboard'" x-transition.opacity.duration.700ms="">

<aside className="hidden md:flex flex-col w-64 h-full border-r border-slate-200 bg-white/50 backdrop-blur-xl px-6 py-8 justify-between shrink-0">
<div>
<div className="flex items-center gap-3 mb-10">
<div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="18"></span>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">Assist</span>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-900 bg-slate-100 rounded-xl" href="#">
<span className="iconify" data-icon="lucide:layout-grid" data-width="18"></span>
                        Главная
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors" href="#">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="18"></span>
                        Аналитика
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors" href="mailto:team@adminpriority.ru">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
                        Контакты
                    </a>
</nav>
</div>
<div className="flex items-center gap-3 px-3 py-3 border-t border-slate-100">
<div className="h-9 w-9 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold text-xs border border-indigo-200">
<span x-text="user.initials.substring(0,2)"></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900 leading-none mb-1" x-text="user.initials"></span>
<span className="text-xs text-slate-500">Pro Plan</span>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto h-full relative">
<div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-12">

<header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-2">
                            Добрый день, <span x-text="user.name.split(' ')[0]"></span>!
                        </h1>
<p className="text-sm text-slate-500">Готовы оптимизировать работу сегодня?</p>
</div>
<div className="relative w-full md:w-80 group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="18"></span>
</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm transition-all placeholder:text-slate-400" placeholder="Спросите Assist..." type="text"/>
</div>
</header>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">

<a className="group relative flex flex-col justify-between h-48 md:h-56 p-6 rounded-[20px] bg-card-blue hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-blue-100/50" href="https://chatgpt.com/g/g-68581034582c81919a0b0fc6d6c8719f-admin-documents" target="_blank">
<div className="bg-white/40 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
<span className="iconify text-slate-800" data-icon="lucide:file-text" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium leading-tight text-slate-900 mb-1 tracking-tight">Создание документов</h3>
<p className="text-xs text-slate-600/80 mb-2">Сценарии и регламенты</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-white/50 text-slate-700">
<span className="iconify mr-1" data-icon="lucide:globe" data-width="10"></span> VPN Singapore
                            </span>
</div>
</a>

<a className="group relative flex flex-col justify-between h-48 md:h-56 p-6 rounded-[20px] bg-card-lilac hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-purple-100/50" href="https://aistudio.google.com/apps/drive/1DmY_hIf9WTtGiATuGgWz9GdwmAhr3w9V?fullscreenApplet=true&amp;showPreview=true&amp;showAssistant=true" target="_blank">
<div className="bg-white/40 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
<span className="iconify text-slate-800" data-icon="lucide:workflow" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium leading-tight text-slate-900 mb-1 tracking-tight">Анализ процессов</h3>
<p className="text-xs text-slate-600/80 mb-2">Оптимизация рутины</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-white/50 text-slate-700">
<span className="iconify mr-1" data-icon="lucide:globe" data-width="10"></span> VPN US/Can
                            </span>
</div>
</a>

<a className="group relative flex flex-col justify-between h-48 md:h-56 p-6 rounded-[20px] bg-card-pink hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-pink-100/50" href="https://aistudio.google.com/apps/drive/1KC-T9PWyuiMO8_TavZ9KT-Gqc1TJRQnr?fullscreenApplet=true&amp;showPreview=true&amp;showAssistant=true" target="_blank">
<div className="bg-white/40 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
<span className="iconify text-slate-800" data-icon="lucide:mic" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium leading-tight text-slate-900 mb-1 tracking-tight">Анализ встреч</h3>
<p className="text-xs text-slate-600/80 mb-2">Транскрибация и саммари</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-white/50 text-slate-700">
<span className="iconify mr-1" data-icon="lucide:globe" data-width="10"></span> VPN US/Can
                            </span>
</div>
</a>

<a className="group relative flex flex-col justify-between h-48 md:h-56 p-6 rounded-[20px] bg-card-pinkblue hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-indigo-100/50" href="https://magic-creator-rus.lovable.app/" target="_blank">
<div className="bg-white/40 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
<span className="iconify text-slate-800" data-icon="lucide:image" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium leading-tight text-slate-900 mb-1 tracking-tight">Генерация контента</h3>
<p className="text-xs text-slate-600/80 mb-2">Изображения и креативы</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-white/50 text-slate-700">
<span className="iconify mr-1" data-icon="lucide:globe" data-width="10"></span> VPN
                            </span>
</div>
</a>

<a className="group relative flex flex-col justify-between h-48 md:h-56 p-6 rounded-[20px] bg-card-orange hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-orange-100/50" href="https://adminpriority.ru" target="_blank">
<div className="bg-white/40 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
<span className="iconify text-slate-800" data-icon="lucide:truck" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium leading-tight text-slate-900 mb-1 tracking-tight">Найти поставщика</h3>
<p className="text-xs text-slate-600/80 mb-2">База AdminPriority</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-white/50 text-slate-700">
                                Direct Link
                            </span>
</div>
</a>

<a className="group relative flex flex-col justify-between h-48 md:h-56 p-6 rounded-[20px] bg-card-violet hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-violet-100/50" href="https://prompt-optimizer-0f9e88c7.base44.app/" target="_blank">
<div className="bg-white/40 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
<span className="iconify text-slate-800" data-icon="lucide:wand-2" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium leading-tight text-slate-900 mb-1 tracking-tight">Усилитель промптов</h3>
<p className="text-xs text-slate-600/80 mb-2">Точнее запросы в ИИ</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-white/50 text-slate-700">
<span className="iconify mr-1" data-icon="lucide:globe" data-width="10"></span> VPN
                            </span>
</div>
</a>

<a className="group relative flex flex-col justify-between h-48 md:h-56 p-6 rounded-[20px] bg-card-deepblue hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-blue-200/50" href="https://ai-team-boost-766fcd1c.base44.app" target="_blank">
<div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
<span className="iconify text-white" data-icon="lucide:graduation-cap" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium leading-tight text-white mb-1 tracking-tight">Курс по ИИ</h3>
<p className="text-xs text-white/80 mb-2">Обучение для команды</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-md">
                                Exclusive
                            </span>
</div>
</a>

<a className="group relative flex flex-col justify-between h-48 md:h-56 p-6 rounded-[20px] bg-card-cyan hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-cyan-100/50" href="https://chatgpt.com/" target="_blank">
<div className="bg-white/40 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
<span className="iconify text-slate-800" data-icon="lucide:message-circle-question" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium leading-tight text-slate-900 mb-1 tracking-tight">Задать вопрос</h3>
<p className="text-xs text-slate-600/80 mb-2">Переход в ChatGPT</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-white/50 text-slate-700">
<span className="iconify mr-1" data-icon="lucide:globe" data-width="10"></span> VPN
                            </span>
</div>
</a>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
<h3 className="text-lg font-medium text-slate-900 mb-4">Я не знаю, что мне нужно</h3>
<div className="flex flex-col md:flex-row gap-4">
<div className="flex-1 relative">
<input @keyup.enter="analyzeTask" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="Опишите задачу (например: нужно сделать сценарий встречи...)" type="text" x-model="taskQuery"/>
<button @click="analyzeTask" className="absolute right-2 top-2 p-1.5 bg-slate-200 hover:bg-slate-300 rounded-lg text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>
</div>

<div className="mt-6 pt-6 border-t border-slate-100 animate-pulse-once" x-show="suggestedTools.length &gt; 0">
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Рекомендуемые инструменты:</p>
<div className="flex flex-wrap gap-3">
<template x-htmlFor="tool in suggestedTools">
<a :href="tool.url" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors" target="_blank">
<span className="iconify" data-icon="lucide:link" data-width="14"></span>
<span x-text="tool.title"></span>
</a>
</template>
</div>
</div>
</div>

<div className="border-t border-slate-200 pt-12 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
<div className="lg:col-span-1">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Зачем нужен Assist?</h2>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                                Assist — это единое рабочее место сотрудника. Мы объединили лучшие AI-инструменты, чтобы вы могли экономить до 5 часов в неделю на рутинных задачах.
                            </p>
<button className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                                Подробнее о продукте
                            </button>
</div>
<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-3">
<h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:zap" data-width="16"></span>
                                    Функционал
                                </h4>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Анализ процессов и встреч</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Создание документов и сценариев</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Генерация вижуалов и контента</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Усиление промптов</li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:users" data-width="16"></span>
                                    Для кого
                                </h4>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Административные директора</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>HR и офис-менеджеры</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Операционные директора</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-300 rounded-full"></div>Специалисты по закупкам</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}

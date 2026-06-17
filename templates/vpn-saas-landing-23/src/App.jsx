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



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                menu.classList.add('hidden');
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
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
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] opacity-40"></div>
<div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] opacity-20"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-slate-800/20 rounded-full blur-[120px] opacity-30"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center shadow-2xl shadow-black/50 max-w-4xl w-full justify-between">

<a className="flex items-center gap-2 pl-4 pr-2 cursor-pointer group" href="#">
<div className="text-white group-hover:text-emerald-400 transition-colors">
<iconify-icon icon="lucide:disc" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="font-medium text-white tracking-tight hidden sm:block">Puffy</span>
</a>

<div className="hidden md:flex items-center bg-white/5 rounded-full px-1 py-1 border border-white/5">
<a className="px-5 py-2 text-sm text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-full" href="#features">Преимущества</a>
<a className="px-5 py-2 text-sm text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-full" href="#how">Как это работает</a>
<a className="px-5 py-2 text-sm text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-full" href="#pricing">Тарифы</a>
<a className="px-5 py-2 text-sm text-slate-400 hover:text-white transition-colors hover:bg-white/5 rounded-full" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-2 pr-1">
<a className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#pricing">
                    Вход
                </a>
<a className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-emerald-50 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="https://t.me/PuffyVPN_bot?start=site" target="_blank">
<span className="hidden sm:inline">Создать аккаунт</span>
<span className="sm:hidden">Start</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>

<button className="md:hidden p-2 text-slate-400 hover:text-white ml-1" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden absolute top-20 w-[90%] bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2" id="mobile-menu">
<a className="p-3 rounded-lg hover:bg-white/5 text-slate-300" href="#features">Преимущества</a>
<a className="p-3 rounded-lg hover:bg-white/5 text-slate-300" href="#how">Как подключить</a>
<a className="p-3 rounded-lg hover:bg-white/5 text-slate-300" href="#pricing">Тарифы</a>
<a className="p-3 rounded-lg hover:bg-white/5 text-slate-300" href="#faq">FAQ</a>
</div>
</nav>

<section className="relative pt-44 pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">

<div className="absolute top-1/3 left-[10%] hidden lg:block">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:triangle" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Stable</div>
<div className="text-[10px] text-emerald-500 font-mono">99.9% Uptime</div>
</div>
</div>
<div className="w-[150px] h-[1px] bg-gradient-to-r from-white/20 to-transparent mt-5 ml-5 transform rotate-12"></div>
</div>

<div className="absolute top-1/3 right-[10%] hidden lg:block text-right">
<div className="flex items-center gap-3 justify-end">
<div>
<div className="text-xs text-slate-400">Speed</div>
<div className="text-[10px] text-emerald-500 font-mono">1 Gbps+</div>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:zap" width="16"></iconify-icon>
</div>
</div>
<div className="w-[150px] h-[1px] bg-gradient-to-l from-white/20 to-transparent mt-5 mr-5 transform -rotate-12 ml-auto"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[500px] w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
<div className="absolute top-1/2 left-[40%] h-[300px] w-[1px] bg-gradient-to-b from-white/5 to-transparent mt-20"></div>
<div className="absolute top-1/2 right-[40%] h-[300px] w-[1px] bg-gradient-to-b from-white/5 to-transparent mt-20"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-4 text-center animate-fade-in">

<a className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors mb-10 group cursor-pointer backdrop-blur-md" href="#how">
<iconify-icon className="text-emerald-400" icon="lucide:sparkles" width="14"></iconify-icon>
<span className="text-sm text-slate-300 group-hover:text-white transition-colors">Новый стандарт скорости</span>
<iconify-icon className="text-slate-500 group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
<span className="text-gradient">One-click for</span> <br/>
                Freedom Access
            </h1>

<p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Puffy VPN — это мгновенный доступ к зарубежным сервисам через Telegram. 
                Без приложений, без сложных настроек. Просто работает.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white rounded-full hover:bg-slate-200 hover:scale-105 transition-all" href="https://t.me/PuffyVPN_bot?start=site" target="_blank">
                    Открыть бота
                    <iconify-icon className="ml-2" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm" href="#features">
                    Узнать больше
                </a>
</div>

<div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-black/40 backdrop-blur-sm text-xs text-slate-500">
<div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
<iconify-icon icon="lucide:arrow-down" width="14"></iconify-icon>
</div>
<span>Scroll down</span>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-black/50 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-lg font-medium text-white"><iconify-icon icon="lucide:shield-check" width="24"></iconify-icon> Secure</div>
<div className="flex items-center gap-2 text-lg font-medium text-white"><iconify-icon icon="lucide:zap" width="24"></iconify-icon> Fast</div>
<div className="flex items-center gap-2 text-lg font-medium text-white"><iconify-icon icon="lucide:globe" width="24"></iconify-icon> Global</div>
<div className="flex items-center gap-2 text-lg font-medium text-white"><iconify-icon icon="lucide:smartphone" width="24"></iconify-icon> Mobile</div>
<div className="flex items-center gap-2 text-lg font-medium text-white"><iconify-icon icon="lucide:message-circle" width="24"></iconify-icon> Support</div>
</div>
</div>
</div>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Доступ к сервисам</h3>
<p className="text-slate-400 leading-relaxed">YouTube в 4K, Instagram, Netflix и другие привычные сервисы работают без ограничений.</p>
</div>

<div className="group p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Старт за 1 минуту</h3>
<p className="text-slate-400 leading-relaxed">Всё управление через Telegram-бота. Никаких сложных регистраций и email.</p>
</div>

<div className="group p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="lucide:smartphone-charging" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Мульти-девайс</h3>
<p className="text-slate-400 leading-relaxed">Один ключ подходит для 5 устройств одновременно. iOS, Android, PC, Mac.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative overflow-hidden" id="how">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">Как подключить</h2>
<p className="text-lg text-slate-400">Технология VLESS для стабильного соединения</p>
</div>
<a className="mt-6 md:mt-0 text-white hover:text-emerald-400 transition-colors flex items-center gap-2" href="https://t.me/PuffyVPN_bot?start=site">
                    Перейти в бота <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="relative pt-8">
<div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-[#050505] border-2 border-emerald-500 z-10"></div>
<div className="h-full border-l border-white/5 md:border-0 pl-8 md:pl-0">
<h3 className="text-xl font-medium text-white mb-3">1. Откройте бота</h3>
<p className="text-slate-400 leading-relaxed">Запустите Telegram-бота и выберите удобный тариф. Оплата картой РФ без комиссий.</p>
</div>
</div>

<div className="relative pt-8">
<div className="absolute top-0 left-0 md:left-0 w-4 h-4 rounded-full bg-[#050505] border-2 border-white/20 z-10 md:ml-0"></div>
<div className="h-full border-l border-white/5 md:border-0 pl-8 md:pl-0">
<h3 className="text-xl font-medium text-white mb-3">2. Получите ключ</h3>
<p className="text-slate-400 leading-relaxed">Бот мгновенно выдаст вам ключ доступа и ссылку на приложение для вашего устройства.</p>
</div>
</div>

<div className="relative pt-8">
<div className="absolute top-0 left-0 md:left-0 w-4 h-4 rounded-full bg-[#050505] border-2 border-white/20 z-10 md:ml-0"></div>
<div className="h-full border-l border-white/5 md:border-0 pl-8 md:pl-0">
<h3 className="text-xl font-medium text-white mb-3">3. Нажмите старт</h3>
<p className="text-slate-400 leading-relaxed">Вставьте ключ в приложение и нажмите кнопку подключения. Интернет свободен.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">Тарифные планы</h2>
<p className="text-lg text-slate-400">Простые условия. Честные цены.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-slate-300 mb-2">1 месяц</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white">199</span>
<span className="text-slate-500">₽</span>
</div>
<ul className="space-y-4 mb-8 text-slate-400">
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> 5 устройств</li>
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Высокая скорость</li>
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Поддержка 24/7</li>
</ul>
<a className="block w-full py-3 px-4 rounded-full bg-white/5 hover:bg-white/10 text-white text-center font-medium transition-colors border border-white/5" href="https://t.me/PuffyVPN_bot?start=site" target="_blank">
                        Выбрать
                    </a>
</div>

<div className="p-10 rounded-[2rem] bg-[#0f0f0f] border border-white/10 shadow-2xl shadow-emerald-900/10 relative transform md:scale-105">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        Popular
                    </div>
<h3 className="text-xl font-medium text-white mb-2">3 месяца</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl font-medium text-white">499</span>
<span className="text-slate-500">₽</span>
</div>
<ul className="space-y-4 mb-10 text-slate-300">
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Все возможности</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Экономия 15%</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Приоритетная поддержка</li>
</ul>
<a className="block w-full py-4 px-6 rounded-full bg-white text-black hover:bg-slate-200 text-center font-medium transition-colors" href="https://t.me/PuffyVPN_bot?start=site" target="_blank">
                        Подключить сейчас
                    </a>
</div>

<div className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-slate-300 mb-2">1 год</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white">1490</span>
<span className="text-slate-500">₽</span>
</div>
<ul className="space-y-4 mb-8 text-slate-400">
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> 5 устройств</li>
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Максимальная выгода</li>
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Стабильность надолго</li>
</ul>
<a className="block w-full py-3 px-4 rounded-full bg-white/5 hover:bg-white/10 text-white text-center font-medium transition-colors border border-white/5" href="https://t.me/PuffyVPN_bot?start=site" target="_blank">
                        Выбрать
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-12 text-center">Частые вопросы</h2>
<div className="space-y-4">
<details className="group bg-[#0A0A0A] rounded-2xl border border-white/5 open:bg-[#0F0F0F] transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-slate-200 hover:text-white transition-colors">
                        Как происходит настройка?
                        <span className="text-slate-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed border-t border-transparent group-open:border-white/5 mt-2">
                        После оплаты бот пришлет вам уникальный ключ доступа и инструкцию. Вам нужно скачать приложение (V2Ray/Streisand и др.), вставить ключ и нажать кнопку подключения.
                    </div>
</details>
<details className="group bg-[#0A0A0A] rounded-2xl border border-white/5 open:bg-[#0F0F0F] transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-slate-200 hover:text-white transition-colors">
                        Повлияет ли VPN на скорость?
                        <span className="text-slate-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed border-t border-transparent group-open:border-white/5 mt-2">
                        Мы используем современные протоколы (VLESS/Reality), которые минимально влияют на скорость. Вы сможете смотреть видео в 4K без задержек.
                    </div>
</details>
<details className="group bg-[#0A0A0A] rounded-2xl border border-white/5 open:bg-[#0F0F0F] transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-slate-200 hover:text-white transition-colors">
                        Можно ли вернуть деньги?
                        <span className="text-slate-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed border-t border-transparent group-open:border-white/5 mt-2">
                        Если сервис не будет работать на вашем устройстве, и поддержка не сможет помочь — мы вернем деньги за неиспользованный период.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#020202] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:disc" width="24"></iconify-icon>
<span className="text-xl font-medium text-white">Puffy VPN</span>
</div>
<div className="flex gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="https://t.me/PuffyVPN_support" target="_blank">Support</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="https://t.me/PuffyVPN_bot?start=site">
<iconify-icon icon="lucide:send" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
<p>© 2023 Puffy VPN. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-300" href="#">Privacy Policy</a>
<a className="hover:text-slate-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

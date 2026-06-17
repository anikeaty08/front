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
background: '#000000',
surface: '#0A0A0A',
surfaceHover: '#141414',
accent: '#0088CC',
accentHover: '#0077B3',
textMain: '#EDEDED',
textMuted: '#888888',
borderMuted: 'rgba(255, 255, 255, 0.1)'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(1rem)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



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
      

<div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-accent/20 blur-[150px] rounded-full pointer-events-none -z-10 opacity-50 mix-blend-screen"></div>

<header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/[0.05]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-sans font-semibold tracking-tighter text-lg flex items-center" href="#">
                MAX<span className="text-textMuted transition-colors duration-300 hover:text-white">DIGITAL</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-textMuted">
<a className="hover:text-white transition-colors" href="#services">Услуги</a>
<a className="hover:text-white transition-colors" href="#cases">Кейсы</a>
<a className="hover:text-white transition-colors" href="#process">Процесс</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-[1.02]" href="#contacts">
                Связаться
            </a>
<button className="md:hidden text-textMuted hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col gap-8 relative z-10 opacity-0 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-textMuted w-fit backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
                        Автоматизация нового поколения
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] text-white">
                        Эволюция <br/>
<span className="bg-gradient-to-b from-white to-white/40 text-gradient">вашего бизнеса</span>
</h1>
<p className="text-lg md:text-xl text-textMuted max-w-xl leading-relaxed font-light">
                        Проектируем и внедряем интеллектуальных чат-ботов и Mini Apps для MAX и Telegram. Бесшовная интеграция с CRM, снижение издержек и рост конверсии.
                    </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="inline-flex items-center justify-center bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-[1.02] gap-2" href="#contacts">
                            Обсудить проект
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center bg-transparent border border-white/10 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white/5 transition-all duration-300" href="#cases">
                            Смотреть кейсы
                        </a>
</div>
</div>

<div className="relative w-full max-w-[500px] mx-auto lg:ml-auto aspect-square perspective-1000 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>

<div className="absolute inset-4 glass-panel border border-white/10 rounded-2xl flex flex-col overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 z-20 animate-float">
<div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
<span className="mx-auto text-xs font-mono text-textMuted tracking-tight">max_bot_interface</span>
</div>
<div className="flex-1 p-5 flex flex-col gap-4 font-mono text-xs text-textMuted relative">
<div className="bg-white/5 border border-white/10 text-white rounded-lg rounded-tl-none p-3 max-w-[80%] self-start shadow-sm backdrop-blur-md">
                                Зафиксирован новый лид. Запустить сценарий квалификации?
                            </div>
<div className="bg-accent text-white rounded-lg rounded-tr-none p-3 max-w-[80%] self-end shadow-[0_4px_20px_rgba(0,136,204,0.3)] mt-2">
                                Да, передать данные в AmoCRM.
                            </div>
<div className="bg-white/5 border border-white/10 text-textMuted rounded-lg rounded-tl-none p-3 max-w-[80%] self-start mt-2 flex flex-col gap-2">
<div className="flex items-center gap-2 pb-2 border-b border-white/10">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-emerald-400/80">Сделка создана успешно</span>
</div>
<span>ID: #94812</span>
<span>Менеджер: Назначен</span>
</div>
</div>
</div>

<div className="absolute bottom-10 -left-6 glass-panel border border-white/10 rounded-xl p-4 shadow-2xl z-30 animate-float-delayed">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-textMuted font-medium mb-0.5">Конверсия</div>
<div className="text-lg font-semibold tracking-tighter text-white">+42%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/[0.05] bg-surface/50">
<div className="max-w-7xl mx-auto px-6 overflow-hidden mask-edges">
<p className="text-xs font-medium text-textMuted text-center uppercase tracking-[0.2em] mb-8">Интегрируем с ведущими платформами</p>
<div className="flex flex-wrap justify-between gap-8 items-center opacity-60">
<div className="flex items-center gap-2 text-textMuted hover:text-white transition-all duration-300 cursor-default">
<iconify-icon className="text-xl" icon="solar:shield-network-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-base">MAX</span>
</div>
<div className="flex items-center gap-2 text-textMuted hover:text-white transition-all duration-300 cursor-default">
<iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-base">Telegram</span>
</div>
<div className="flex items-center gap-2 text-textMuted hover:text-white transition-all duration-300 cursor-default">
<iconify-icon className="text-xl" icon="solar:cloud-storage-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-base">Битрикс24</span>
</div>
<div className="flex items-center gap-2 text-textMuted hover:text-white transition-all duration-300 cursor-default">
<iconify-icon className="text-xl" icon="solar:database-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-base">AmoCRM</span>
</div>
<div className="flex items-center gap-2 text-textMuted hover:text-white transition-all duration-300 cursor-default">
<iconify-icon className="text-xl" icon="solar:cpu-linear"></iconify-icon>
<span className="font-mono text-base tracking-tighter">n8n</span>
</div>
<div className="flex items-center gap-2 text-textMuted hover:text-white transition-all duration-300 cursor-default">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-base">AI Models</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Архитектура <span className="text-textMuted">решений</span></h2>
<p className="text-textMuted text-lg max-w-2xl font-light leading-relaxed">Проектируем отказоустойчивые системы, которые автоматизируют рутину и создают новый пользовательский опыт.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">

<div className="group relative md:col-span-2 lg:col-span-2 md:row-span-2 bg-surface border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full group-hover:bg-accent/20 transition-colors duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
<div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white mb-auto relative z-10 backdrop-blur-md">
<iconify-icon className="text-2xl" icon="solar:widget-add-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-12">
<h3 className="text-2xl font-semibold tracking-tighter text-white mb-3">Mini Apps (Web Apps)</h3>
<p className="text-sm text-textMuted leading-relaxed max-w-sm">
                                Полноценные интерфейсы внутри мессенджера. Заменяют сайты и приложения: интернет-магазины, личные кабинеты, системы бронирования с нативным UX.
                            </p>
</div>
</div>

<div className="group relative md:col-span-1 lg:col-span-2 bg-surface border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col justify-between">
<div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white relative z-10">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-8">
<h3 className="text-lg font-semibold tracking-tighter text-white mb-2">Умные чат-боты</h3>
<p className="text-sm text-textMuted leading-relaxed">
                                Автоматизация поддержки и продаж. Сложные ветвления логики и бесшовная передача диалога оператору.
                            </p>
</div>
</div>

<div className="group relative bg-surface border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col justify-between">
<div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white relative z-10">
<iconify-icon className="text-xl" icon="solar:sitemap-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-8">
<h3 className="text-lg font-semibold tracking-tighter text-white mb-2">n8n Workflow</h3>
<p className="text-sm text-textMuted leading-relaxed">
                                Связываем любые API без кода. Гибкая маршрутизация данных.
                            </p>
</div>
</div>

<div className="group relative bg-surface border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col justify-between">
<div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white relative z-10">
<iconify-icon className="text-xl" icon="solar:database-linear"></iconify-icon>
</div>
<div className="relative z-10 mt-8">
<h3 className="text-lg font-semibold tracking-tighter text-white mb-2">Синхронизация CRM</h3>
<p className="text-sm text-textMuted leading-relaxed">
                                Двусторонний обмен данными с AmoCRM и Битрикс24 в реальном времени.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-white/[0.05] relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-8">Код, который <br/><span className="text-textMuted">работает на вас</span></h2>
<p className="text-lg text-textMuted font-light mb-12">Мы не используем шаблонные конструкторы. Наш подход — кастомная разработка на современных фреймворках, обеспечивающая масштабируемость и безопасность.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 text-white">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-white tracking-tighter mb-1">Отечественная инфраструктура</h4>
<p className="text-sm text-textMuted leading-relaxed">Серверы в РФ, полное соответствие ФЗ-152. Защита от блокировок зарубежных сервисов.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-white">
<iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-white tracking-tighter mb-1">Высокая производительность</h4>
<p className="text-sm text-textMuted leading-relaxed">Микросервисная архитектура позволяет выдерживать пиковые нагрузки при рассылках.</p>
</div>
</div>
</div>
</div>

<div className="glass-panel border border-white/10 rounded-2xl p-4 font-mono text-xs md:text-sm shadow-2xl">
<div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
</div>
<span className="text-textMuted text-xs tracking-tight">handler.ts</span>
<div className="w-10"></div> 
</div>
<pre className="text-[#A1A1AA] leading-loose overflow-x-auto">
<span className="text-[#C678DD]">import</span> { MaxBot, Context } <span className="text-[#C678DD]">from</span> <span className="text-[#98C379]">'@max/core'</span>;
<span className="text-[#C678DD]">import</span> { CRMService } <span className="text-[#C678DD]">from</span> <span className="text-[#98C379]'./services'&lt;/span&gt;; &lt;span class=" text-[#c678dd]"="">const</span> bot = <span className="text-[#56B6C2]">new</span> MaxBot(process.env.TOKEN);

bot.command(<span className="text-[#98C379]">'start'</span>, <span className="text-[#C678DD]">async</span> (ctx: Context) =&gt; {
  <span className="text-[#7F848E] italic">// Инициализация пользователя</span>
  <span className="text-[#C678DD]">const</span> user = <span className="text-[#C678DD]">await</span> CRMService.sync(ctx.from);
  
  <span className="text-[#C678DD]">if</span> (user.isNew) {
    <span className="text-[#C678DD]">await</span> ctx.reply(<span className="text-[#98C379]">'Добро пожаловать в систему!'</span>, {
      keyboard: buildMainMenu()
    });
  }
});</pre>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/[0.05]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left divider-x divider-white/10">
<div className="flex-1">
<div className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-2">40M+</div>
<div className="text-sm font-medium text-textMuted uppercase tracking-widest">Аудитория платформы</div>
</div>
<div className="flex-1">
<div className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-2">~10d</div>
<div className="text-sm font-medium text-textMuted uppercase tracking-widest">Средний срок запуска</div>
</div>
<div className="flex-1">
<div className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-2">99.9%</div>
<div className="text-sm font-medium text-textMuted uppercase tracking-widest">Uptime сервисов</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="cases">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Избранные <span className="text-textMuted">проекты</span></h2>
<p className="text-textMuted text-lg max-w-xl font-light">Результаты внедрения автоматизации в реальный бизнес.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group border border-white/10 rounded-3xl p-8 bg-surface hover:bg-surfaceHover transition-all duration-500 cursor-pointer flex flex-col min-h-[400px]">
<div className="flex justify-between items-start mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-textMuted">
                                E-commerce
                            </div>
<iconify-icon className="text-2xl text-textMuted group-hover:text-white transition-colors duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="text-2xl font-semibold tracking-tighter text-white mb-4">Магазин уличной одежды</h3>
<p className="text-sm text-textMuted mb-8 leading-relaxed max-w-md">Разработка Mini App с каталогом, корзиной и онлайн-оплатой. Полная синхронизация остатков с 1С:УТ.</p>
<div className="flex items-center gap-8 border-t border-white/10 pt-6">
<div>
<div className="text-xs text-textMuted mb-1 font-mono uppercase tracking-widest">Конверсия</div>
<div className="text-xl font-semibold text-white tracking-tighter">+28%</div>
</div>
<div>
<div className="text-xs text-textMuted mb-1 font-mono uppercase tracking-widest">Снижение нагрузки</div>
<div className="text-xl font-semibold text-white tracking-tighter">-45%</div>
</div>
</div>
</div>
</div>

<div className="group border border-white/10 rounded-3xl p-8 bg-surface hover:bg-surfaceHover transition-all duration-500 cursor-pointer flex flex-col min-h-[400px]">
<div className="flex justify-between items-start mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-textMuted">
                                Услуги
                            </div>
<iconify-icon className="text-2xl text-textMuted group-hover:text-white transition-colors duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="text-2xl font-semibold tracking-tighter text-white mb-4">Сеть барбершопов</h3>
<p className="text-sm text-textMuted mb-8 leading-relaxed max-w-md">Интерактивный бот для записи клиентов, выбора мастера и отправки PUSH-напоминаний через YCLIENTS API.</p>
<div className="flex items-center gap-8 border-t border-white/10 pt-6">
<div>
<div className="text-xs text-textMuted mb-1 font-mono uppercase tracking-widest">Возвращаемость</div>
<div className="text-xl font-semibold text-white tracking-tighter">+35%</div>
</div>
<div>
<div className="text-xs text-textMuted mb-1 font-mono uppercase tracking-widest">Неявки (No-show)</div>
<div className="text-xl font-semibold text-white tracking-tighter">-60%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-surface/30 border-y border-white/[0.05]" id="process">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-20 text-center">Процесс <span className="text-textMuted">интеграции</span></h2>
<div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-16">
<div className="relative pl-10 md:pl-16 group">
<div className="absolute w-4 h-4 rounded-full bg-surface border-2 border-white/20 left-0 top-1.5 -translate-x-1/2 group-hover:border-white transition-colors duration-300"></div>
<div className="text-xs font-mono text-textMuted uppercase tracking-widest mb-3">Шаг 01</div>
<h3 className="text-xl font-semibold tracking-tighter text-white mb-3">Системный анализ</h3>
<p className="text-sm text-textMuted leading-relaxed">Изучаем бизнес-логику, выявляем узкие места. Формируем архитектуру будущего решения и выбираем стек технологий.</p>
</div>
<div className="relative pl-10 md:pl-16 group">
<div className="absolute w-4 h-4 rounded-full bg-surface border-2 border-white/20 left-0 top-1.5 -translate-x-1/2 group-hover:border-white transition-colors duration-300"></div>
<div className="text-xs font-mono text-textMuted uppercase tracking-widest mb-3">Шаг 02</div>
<h3 className="text-xl font-semibold tracking-tighter text-white mb-3">Прототипирование (UX)</h3>
<p className="text-sm text-textMuted leading-relaxed">Создаем интерактивные макеты интерфейсов и блок-схемы диалогов. Утверждаем пользовательский путь.</p>
</div>
<div className="relative pl-10 md:pl-16 group">
<div className="absolute w-4 h-4 rounded-full bg-white border-2 border-white left-0 top-1.5 -translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
<div className="text-xs font-mono text-white uppercase tracking-widest mb-3">Шаг 03</div>
<h3 className="text-xl font-semibold tracking-tighter text-white mb-3">Разработка &amp; API</h3>
<p className="text-sm text-textMuted leading-relaxed">Пишем чистый код, подключаем базы данных, настраиваем защищенные шлюзы для обмена данными с вашей CRM.</p>
</div>
<div className="relative pl-10 md:pl-16 group">
<div className="absolute w-4 h-4 rounded-full bg-surface border-2 border-white/20 left-0 top-1.5 -translate-x-1/2 group-hover:border-white transition-colors duration-300"></div>
<div className="text-xs font-mono text-textMuted uppercase tracking-widest mb-3">Шаг 04</div>
<h3 className="text-xl font-semibold tracking-tighter text-white mb-3">Деплой и саппорт</h3>
<p className="text-sm text-textMuted leading-relaxed">Разворачиваем проект на серверах, проводим нагрузочное тестирование и обучаем команду заказчика.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-16 text-center">Ответы на <span className="text-textMuted">вопросы</span></h2>
<div className="divide-y divide-white/10 border-y border-white/10">
<details className="group py-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between text-lg font-medium tracking-tight text-white outline-none">
                            Какова вилка стоимости проекта?
                            <span className="transition-transform duration-300 group-open:-rotate-180 text-textMuted">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pt-4 text-sm text-textMuted leading-relaxed">
                            Бюджет зависит от архитектуры. Базовые боты поддержки — от 30 000 ₽. Комплексные Mini Apps с интеграцией 1С/CRM — от 100 000 ₽. Точный эстимейт даем после первого брифа.
                        </div>
</details>
<details className="group py-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between text-lg font-medium tracking-tight text-white outline-none">
                            На чьих серверах работает система?
                            <span className="transition-transform duration-300 group-open:-rotate-180 text-textMuted">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pt-4 text-sm text-textMuted leading-relaxed">
                            Мы можем развернуть инфраструктуру на надежных облачных серверах в РФ (Yandex Cloud, Selectel) или на ваших собственных мощностях (On-Premise).
                        </div>
</details>
<details className="group py-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between text-lg font-medium tracking-tight text-white outline-none">
                            Нужно ли мне разбираться в коде для управления?
                            <span className="transition-transform duration-300 group-open:-rotate-180 text-textMuted">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pt-4 text-sm text-textMuted leading-relaxed">
                            Нет. Вы получаете удобную панель администратора (или работу напрямую через интерфейс вашей привычной CRM), где можно менять тексты, товары и отслеживать аналитику.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="contacts">
<div className="max-w-5xl mx-auto">
<div className="glass-panel border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-16 items-start relative z-10">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Готовы к <br/>трансформации?</h2>
<p className="text-base text-textMuted mb-12 font-light leading-relaxed">
                                Заполните форму, и мы организуем ознакомительный звонок. Разберем ваши процессы и предложим оптимальную архитектуру решения.
                            </p>
<div className="space-y-6">
<div className="text-xs font-mono uppercase text-textMuted tracking-widest">Прямые линии</div>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-textMuted hover:text-white hover:border-white/30 transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-textMuted hover:text-white hover:border-white/30 transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:shield-network-linear"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-textMuted hover:text-white hover:border-white/30 transition-all duration-300" href="mailto:hello@maxdigital.pro">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<form className="flex flex-col gap-5">
<div>
<input className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-textMuted/50 focus:outline-none focus:border-white/30 transition-all duration-300" placeholder="Как к вам обращаться?" type="text"/>
</div>
<div className="relative">
<select className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-sm text-textMuted appearance-none focus:outline-none focus:border-white/30 transition-all duration-300">
<option disabled="" selected="" value="">Предпочтительный способ связи</option>
<option value="tg">Telegram</option>
<option value="max">Мессенджер MAX</option>
<option value="phone">Мобильный телефон</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-textMuted pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<input className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-textMuted/50 focus:outline-none focus:border-white/30 transition-all duration-300" placeholder="Контактные данные (@username или номер)" type="text"/>
</div>
<div>
<textarea className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-textMuted/50 focus:outline-none focus:border-white/30 transition-all duration-300 resize-none" placeholder="Краткое описание задачи (опционально)" rows="3"></textarea>
</div>
<button className="mt-2 w-full flex items-center justify-center bg-white text-black text-sm font-medium px-6 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-[1.02]" type="button">
                                Отправить запрос
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/[0.05] bg-background pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<a className="font-sans font-semibold tracking-tighter text-sm flex items-center" href="#">
                MAX<span className="text-textMuted">DIGITAL</span>
</a>
<nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-textMuted">
<a className="hover:text-white transition-colors" href="#services">Услуги</a>
<a className="hover:text-white transition-colors" href="#cases">Кейсы</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-6 text-textMuted">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:shield-network-linear"></iconify-icon></a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.05] text-center text-xs font-mono text-textMuted/50 tracking-widest uppercase">
            © 2026 MAX DIGITAL. Все права защищены.
        </div>
</footer>

    </>
  );
}

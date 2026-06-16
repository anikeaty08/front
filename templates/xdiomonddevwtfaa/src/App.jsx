import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
glass: "rgba(255, 255, 255, 0.05)",
glassBorder: "rgba(255, 255, 255, 0.08)",
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center">

<a className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity" href="#">X</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Услуги</a>
<a className="hover:text-white transition-colors" href="#projects">Проекты</a>
<a className="hover:text-white transition-colors" href="#about">Обо мне</a>
</div>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
</a>
<a className="hidden sm:flex liquid-glass px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-all" href="#contact">
                    Связаться
                </a>
</div>
</div>
</nav>

<main className="relative flex flex-col items-center justify-center pt-32 pb-40 md:pt-48 md:pb-64 overflow-hidden">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            Открыт к заказам
        </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-center text-white tracking-tight mb-6 max-w-5xl px-4 z-10 glow-text">
            Создаю красоту <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300 italic">из ваших мечтаний</span>
</h1>
<p className="text-xl md:text-2xl text-slate-400 text-center max-w-2xl px-4 mb-12 font-light leading-relaxed z-10">
            Разработка Web3, Telegram ботов и премиальных интерфейсов с фокусом на liquid glass эстетику.
        </p>

<div className="relative w-full max-w-2xl px-4 z-20 group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur transition duration-500 group-hover:opacity-40"></div>
<div className="relative flex flex-col md:flex-row items-center justify-between p-2 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl">
<div className="flex items-center gap-3 w-full px-4 py-3">
<i className="w-5 h-5 text-blue-400 animate-pulse" data-lucide="sparkles" strokeWidth="1.5"></i>
<input className="w-full bg-transparent border-none focus:ring-0 text-slate-300 placeholder-slate-500 text-lg font-light outline-none" placeholder="Опишите вашу идею..." readonly="" type="text" value="Нужен Telegram Mini App для DeFi..."/>
</div>
<button className="w-full md:w-auto mt-2 md:mt-0 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 whitespace-nowrap">
<span>Обсудить</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex justify-center gap-4 mt-6 text-xs text-slate-500">
<span className="flex items-center gap-1 hover:text-slate-300 transition-colors cursor-default">
<i className="w-3 h-3" data-lucide="box" strokeWidth="1.5"></i> Web3
                </span>
<span className="flex items-center gap-1 hover:text-slate-300 transition-colors cursor-default">
<i className="w-3 h-3" data-lucide="message-circle" strokeWidth="1.5"></i> Telegram API
                </span>
<span className="flex items-center gap-1 hover:text-slate-300 transition-colors cursor-default">
<i className="w-3 h-3" data-lucide="layout" strokeWidth="1.5"></i> React/Vue
                </span>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[45%] w-[160vw] md:w-[120vw] aspect-square rounded-full border-t border-blue-400/60 shadow-[0_-10px_120px_-20px_rgba(59,130,246,0.6)] bg-[#0A0A0A] z-0 pointer-events-none">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 horizon-glow rounded-full"></div>
</div>
</main>

<section className="relative z-10 py-24 px-6 bg-[#0A0A0A]" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Технологический стек</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">Современные решения для сложных задач. От смарт-контрактов до интерактивных интерфейсов.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="liquid-glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-blue-400" data-lucide="blocks" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Web3 &amp; Blockchain</h3>
<p className="text-slate-400 font-light leading-relaxed">Разработка dApps, интеграция кошельков (WalletConnect, TonConnect) и написание смарт-контрактов.</p>
</div>

<div className="liquid-glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-purple-400" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Telegram Bots</h3>
<p className="text-slate-400 font-light leading-relaxed">Создание сложных ботов и Mini Apps (TWA). Платежные системы, магазины и игровые механики внутри мессенджера.</p>
</div>

<div className="liquid-glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-emerald-400" data-lucide="palette" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">UI/UX &amp; Frontend</h3>
<p className="text-slate-400 font-light leading-relaxed">Pixel-perfect верстка. Адаптивные сайты с упором на анимации, стекло и высокую производительность.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0A0A0A]" id="projects">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Избранные проекты</h2>
<a className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors text-sm" href="#">
                    Все работы <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
<div className="aspect-video bg-gradient-to-br from-slate-800 to-black flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>

<div className="w-3/4 h-3/4 liquid-glass rounded-t-xl border-t border-l border-r border-white/20 shadow-2xl translate-y-8 group-hover:translate-y-6 transition-transform duration-500"></div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-medium text-white">DeFi Exchange Dashboard</h3>
<p className="text-slate-500 text-sm mt-1">Web3, React, Tailwind</p>
</div>
<div className="bg-white/5 p-2 rounded-full border border-white/5">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-slate-400 font-light text-base">
                            Интерфейс децентрализованной биржи с аналитикой в реальном времени и интеграцией кошельков.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
<div className="aspect-video bg-gradient-to-br from-slate-900 to-black flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors"></div>

<div className="w-48 h-full liquid-glass rounded-t-2xl border-t border-x border-white/20 shadow-2xl translate-y-12 group-hover:translate-y-8 transition-transform duration-500"></div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-medium text-white">Telegram Mini App Store</h3>
<p className="text-slate-500 text-sm mt-1">Telegram API, Node.js</p>
</div>
<div className="bg-white/5 p-2 rounded-full border border-white/5">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-slate-400 font-light text-base">
                            Полноценный e-commerce внутри Telegram. Каталог, корзина и оплата криптовалютой TON.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#0A0A0A] pt-24 pb-12 px-6" id="contact">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">Готовы начать проект?</h2>
<p className="text-xl text-slate-400 font-light mb-10">Превращаем идеи в работающий код. Напишите мне, чтобы обсудить детали.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
                    Написать на Email
                </a>
<a className="w-full sm:w-auto px-8 py-4 liquid-glass text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#">
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
                    Telegram
                </a>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-slate-500 text-sm">
<div className="mb-4 md:mb-0">
                    © 2026 X. Built with Tailwind.
                </div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>


    </>
  );
}

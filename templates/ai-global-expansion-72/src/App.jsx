import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] bg-[#050505]">
<div className="glow-blob top-[-10%] left-[-10%]"></div>
<div className="glow-blob bottom-[-10%] right-[-10%]" style={{animationDelay: '-4s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#050505]/50 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-medium tracking-tighter text-white uppercase">
                Д100В
            </div>
<div className="flex items-center gap-6 text-sm font-light text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">Метод</a>
<a className="hover:text-white transition-colors" href="#bento">Система</a>
<a className="px-4 py-2 rounded-full border border-white/10 hover:border-burgundy hover:text-white transition-all" href="#contact">Начать</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-burgundy bg-burgundy/10 text-burgundy text-xs font-normal mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-burgundy opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-burgundy"></span>
</span>
                Открыт набор для экспертов
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight title-gradient mb-6 leading-tight">
                Захвати рынок США.<br/>
<span className="text-neutral-500 italic font-light">С помощью ИИ.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-10 tracking-tight">
                Мы берем вашу русскоязычную экспертизу и превращаем ее в монетизируемый бренд в американском Instagram. Без знания языка. Без записи новых видео.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-6 py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors w-full sm:w-auto" href="#bento">
                    Как это работает
                </a>
<a className="px-6 py-3 rounded-xl border border-white/10 text-white font-normal text-sm hover:bg-white/5 transition-colors flex items-center gap-2 w-full sm:w-auto group" href="#contact">
<iconify-icon className="text-lg group-hover:text-burgundy transition-colors" icon="solar:play-circle-linear"></iconify-icon>
                    Смотреть кейсы
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#050505] z-10"></div>
</section>

<section className="relative py-24 px-4 md:px-6 z-20" id="bento">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-2">Архитектура экспансии</h2>
<p className="text-sm text-neutral-400 font-light">Ваш опыт + Наши технологии = $$$</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-auto min-h-[800px]">

<div className="bento-card col-span-1 md:col-span-2 md:row-span-2 rounded-3xl p-8 relative overflow-hidden group hover-border-burgundy flex flex-col justify-between">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-burgundy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<iconify-icon className="text-3xl text-burgundy" icon="solar:magic-stick-3-linear"></iconify-icon>
<label className="custom-toggle">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-2">Нейро-адаптация</h3>
<p className="text-sm font-light text-neutral-400 max-w-xs">Переводим смыслы, интонацию и мимику. Ваш аватар говорит на идеальном английском без вашего участия.</p>
</div>

<div className="relative h-40 w-full mt-8 rounded-2xl border border-white/5 bg-black/50 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8)_50%)] bg-[length:100%_4px] z-10 opacity-20"></div>
<div className="absolute w-full h-1 bg-burgundy/50 top-0 left-0 animate-[scanline_3s_linear_infinite] z-20 blur-sm"></div>
<div className="flex items-center gap-4 z-30 transition-transform duration-700 group-hover:scale-110">
<div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-xs text-neutral-500 bg-[#0a0a0a]">RU</div>
<iconify-icon className="text-xl text-burgundy opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
<div className="w-16 h-16 rounded-full border border-burgundy flex items-center justify-center text-xs text-white bg-burgundy/10 shadow-[0_0_20px_rgba(138,21,26,0.4)]">US</div>
</div>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-1 md:row-span-2 rounded-3xl p-8 relative overflow-hidden group flex flex-col">
<div className="mb-4">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-xl text-white" icon="solar:dollar-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-2">Доход в $</h3>
<p className="text-xs font-light text-neutral-400">Прямая монетизация американской аудитории через премиальные продукты.</p>
</div>
<div className="mt-auto relative w-full h-48 rounded-2xl border border-white/5 bg-gradient-to-t from-white/5 to-transparent overflow-hidden">

<div className="absolute bottom-0 left-0 w-full h-full flex items-end px-4 gap-2 pb-4 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="w-full bg-neutral-800 rounded-t-sm h-[20%] transition-all duration-500 group-hover:h-[30%]"></div>
<div className="w-full bg-neutral-700 rounded-t-sm h-[35%] transition-all duration-500 group-hover:h-[50%]"></div>
<div className="w-full bg-neutral-600 rounded-t-sm h-[50%] transition-all duration-500 group-hover:h-[75%]"></div>
<div className="w-full bg-burgundy rounded-t-sm h-[65%] transition-all duration-700 group-hover:h-[100%] relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity delay-300">Max</div>
</div>
</div>
</div>
</div>

<div className="bento-card col-span-1 rounded-3xl p-6 relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-125 transform">
<iconify-icon height="120" icon="solar:global-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-lg font-normal tracking-tight text-white mb-1">Охваты x10</h3>
<p className="text-xs font-light text-neutral-400">Алгоритмы Instagram в США работают на другой скорости.</p>
</div>
</div>

<div className="bento-card col-span-1 rounded-3xl p-6 flex flex-col justify-center group hover-border-burgundy">
<div className="flex items-center gap-3 mb-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-[#050505]"></div>
<div className="w-8 h-8 rounded-full bg-neutral-700 border border-[#050505]"></div>
<div className="w-8 h-8 rounded-full bg-burgundy border border-[#050505] flex items-center justify-center text-[10px] text-white">+</div>
</div>
</div>
<h3 className="text-base font-normal tracking-tight text-white mb-1">Закрытый клуб</h3>
<p className="text-xs font-light text-neutral-400">Окружение тех, кто уже там.</p>
</div>

<div className="bento-card col-span-1 md:col-span-2 rounded-3xl p-1 bg-gradient-to-r from-burgundy/20 to-transparent border-none group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-burgundy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="bg-[#0a0a0a] w-full h-full rounded-[23px] p-6 flex items-center justify-between relative z-10 border border-white/5 group-hover:border-burgundy/50 transition-colors">
<div>
<h3 className="text-xl font-normal tracking-tight text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-burgundy transition-all duration-300">Дети 100 В</h3>
<p className="text-xs font-light text-neutral-400">Оставить заявку на разбор профиля</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-burgundy group-hover:border-burgundy transition-all duration-300 transform group-hover:rotate-45">
<iconify-icon className="text-xl text-white" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-2 rounded-3xl p-6 flex items-center justify-between group">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-neutral-500 group-hover:text-white transition-colors animate-pulse" icon="solar:stopwatch-linear"></iconify-icon>
<div>
<h3 className="text-base font-normal tracking-tight text-white mb-0.5">Экономия 80% времени</h3>
<p className="text-xs font-light text-neutral-400">Процесс создания контента полностью автоматизирован.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative py-20 px-6 border-t border-white/5 mt-20 overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-10 -translate-y-full"></div>
<div className="max-w-4xl mx-auto text-center relative z-20">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-6">Готовы к масштабу?</h2>
<p className="text-sm text-neutral-400 font-light mb-10 max-w-md mx-auto">
                Оставьте заявку. Мы свяжемся с вами, чтобы обсудить потенциал вашего блога на американском рынке.
            </p>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-black font-medium text-sm hover:scale-105 transition-transform duration-300" href="#">
                Заполнить анкету
            </a>
<div className="mt-24 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-600 font-light">
<div className="text-base font-medium tracking-tighter text-neutral-500 mb-4 md:mb-0">Д100В</div>
<div>© 2024 Дети 100 В. Все права защищены.</div>
</div>
</div>
</footer>

    </>
  );
}

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
}
},
plugins: [
function({ addUtilities }) {
const perspectiveUtilities = {
".perspective-1000": { perspective: "1000px" },
};
addUtilities({
...perspectiveUtilities,
});
}
]
};



      lucide.createIcons();

      // 3D Globe Initialization using Cobe
      import createGlobe from 'https://cdn.skypack.dev/cobe';

      const canvas = document.getElementById("cobe");

      let phi = 0;
      let width = 0;

      const onResize = () => canvas.width = canvas.offsetWidth * 2;
      window.addEventListener('resize', onResize);
      onResize();

      createGlobe(canvas, {
          devicePixelRatio: 2,
          width: 1000 * 2,
          height: 1000 * 2,
          phi: 0,
          theta: 0,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 12000,
          mapBrightness: 6,
          baseColor: [0.05, 0.05, 0.05], // Very Dark Neutral
          markerColor: [0.96, 0.62, 0.04], // Amber-500 approx
          glowColor: [0.3, 0.15, 0.05], // Brighter glow in Cobe
          markers: [
              { location: [55.7558, 37.6173], size: 0.05 }, // Moscow
              { location: [59.9343, 30.3351], size: 0.04 }, // St. Petersburg
              { location: [56.8389, 60.6057], size: 0.03 }, // Yekaterinburg
              { location: [55.0084, 82.9357], size: 0.03 }, // Novosibirsk
          ],
          onRender: (state) => {
              // Auto-rotate FASTER
              state.phi = phi;
              phi += 0.008; // Increased speed from 0.003
              state.width = width * 2;
              state.height = width * 2;
          }
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
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
      

<svg className="hidden">
<defs>
<lineargradient id="logoGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#FDE68A"></stop>
<stop offset="50%" stop-color="#D97706"></stop>
<stop offset="100%" stop-color="#FDE68A"></stop>
</lineargradient>
<symbol id="logo-icon" viewbox="0 0 200 120">
<path d="M100,20 L110,10 L130,15 L135,35 L155,40 L160,60 L180,65 L175,85 L155,90 L150,110 L130,105 L125,125 L100,120" fill="none" stroke="url(#logoGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>
<circle cx="60" cy="60" fill="none" r="30" stroke="url(#logoGradient)" strokeWidth="6"></circle>
<line stroke="url(#logoGradient)" strokeWidth="6" x1="60" x2="90" y1="60" y2="90"></line>
</symbol>
</defs>
</svg>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-12 h-8 relative flex items-center justify-center">
<svg className="w-full h-full drop-shadow-[0_0_8px_rgba(245,158,11,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.6)] transition-all duration-300">
<use href="#logo-icon"></use>
</svg>
</div>
<span className="text-lg font-semibold tracking-tighter text-white group-hover:text-amber-100 transition-colors uppercase">
            ПРОМ-СЕРВИС
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-amber-400 transition-colors" href="#about">
            О нас
          </a>
<a className="hover:text-amber-400 transition-colors" href="#services">
            Услуги
          </a>
<a className="hover:text-amber-400 transition-colors" href="#process">
            Процесс
          </a>
<a className="hover:text-amber-400 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-6">
<a className="bg-white text-black px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#booking">
            СВЯЗАТЬСЯ
          </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-amber-900/20 rounded-full blur-[130px] pointer-events-none animate-glow-pulse"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-600/30 rounded-full blur-[90px] pointer-events-none animate-glow-pulse-fast mix-blend-screen"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[60px] pointer-events-none mix-blend-plus-lighter"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

<div className="absolute inset-0 z-0 flex items-center justify-center globe-fade-in pointer-events-auto">
<canvas className="aspect-square opacity-90 mix-blend-plus-lighter w-full max-w-[1000px]" height="2000" id="cobe" style={{width: '1000px', height: '1000px'}} width="2000"></canvas>
</div>
<div className="container mx-auto px-6 text-center z-10 fade-in-up pointer-events-none" style={{animationDelay: '0.1s'}}>
<div className="inline-flex pointer-events-auto gap-2 bg-neutral-900/80 border-neutral-800 border rounded-full mb-10 pt-1 pr-3 pb-1 pl-3 shadow-[0_0_20px_rgba(245,158,11,0.2)] backdrop-blur-sm gap-x-2 gap-y-2 items-center hover:border-amber-500/30 transition-colors">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_12px_rgba(245,158,11,0.8)]"></span>
<span className="text-xs font-semibold tracking-wide text-neutral-300">
            ОПЕРАТИВНАЯ ПОМОЩЬ ПОДРЯДЧИКАМ
          </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05] drop-shadow-2xl">
          Инжиниринг и
          <span className="text-gold-gradient font-serif italic pr-2 drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]">
            Автоматизация
          </span>
          Процессов
        </h1>
<p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg">
          «Скорая помощь» для подрядных организаций. Мы берем на себя аудит, разработку ТЗ и согласование документации для АСУ ТП и инженерных систем.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 pointer-events-auto">
<a className="group relative px-8 py-3.5 bg-white text-black rounded-full font-semibold tracking-tight overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-shadow" href="#booking">
<div className="absolute inset-0 w-full h-full bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10 flex items-center gap-2">
              Заказать Аудит
              <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[2px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<a className="px-8 py-3.5 text-neutral-300 border border-neutral-700 rounded-full font-medium tracking-tight hover:bg-neutral-800 hover:text-white hover:border-neutral-500 transition-all bg-black/40 backdrop-blur-md" href="#services">
            Все Услуги
          </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500 z-20">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</section>

<section className="py-24 md:py-32 relative z-20 bg-neutral-950" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-16 uppercase tracking-wider">
<span className="text-amber-500">О компании</span>
<span className="text-neutral-700">/</span>
<span>Экспертиза</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
<div className="fade-in-up">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">
              Решаем сложные задачи
              <span className="text-neutral-600">автоматизации</span>
              в сжатые сроки.
            </h2>
<div className="space-y-6 text-neutral-400 leading-relaxed text-lg font-light">
<p>
                Мы специализируемся на помощи генподрядчикам и монтажным организациям в моменты, когда проект «горит». Наша задача — оперативно закрыть вопросы по технической документации и аудиту.
              </p>
<p>
                От составления ТЗ на диспетчеризацию до детальной проработки ВОР для пусконаладочных работ — мы обеспечиваем инженерную точность, чтобы вы могли сдать объект вовремя.
              </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
<div>
<div className="text-4xl font-light text-amber-500/90 mb-2">
                  100%
                </div>
<div className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">
                  Соответствие ГОСТ
                </div>
</div>
<div>
<div className="text-4xl font-light text-amber-500/90 mb-2">
                  24/7
                </div>
<div className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">
                  Поддержка проектов
                </div>
</div>
</div>
</div>
<div className="relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-amber-900/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
<div className="flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] bg-neutral-900/80 h-[450px] border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-md justify-between">
<div className="absolute top-0 right-0 p-4 opacity-5">
<svg className="w-[256px] h-[256px]" strokeWidth="2" style={{color: 'rgb(212, 212, 212)', width: '256px', height: '256px'}} viewbox="0 0 200 120">
<use href="#logo-icon"></use>
</svg>
</div>
<div className="z-10">
<div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path>
<path d="M2 12l5-5"></path>
<path d="M22 12l-5 5"></path>
<path d="M12 2v20"></path>
</svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                  Системный Подход
                </h3>
<p className="text-neutral-500 text-sm max-w-xs">
                  Интеграция АСУ ТП и мониторинга инженерных систем любой сложности.
                </p>
</div>
<div className="flex w-full h-32 mt-8 pr-2 pl-2 gap-x-3 gap-y-3 items-end">
<div className="w-full bg-neutral-800/50 h-[40%] rounded-t-sm hover:bg-amber-600/40 transition-all duration-300"></div>
<div className="hover:bg-amber-600/50 transition-all duration-300 delay-75 bg-neutral-800/50 w-full h-[60%] rounded-t-sm"></div>
<div className="w-full bg-neutral-800/50 h-[30%] rounded-t-sm hover:bg-amber-600/40 transition-all duration-300 delay-100"></div>
<div className="w-full bg-neutral-800/50 h-[80%] rounded-t-sm hover:bg-amber-600/60 transition-all duration-300 delay-150"></div>
<div className="w-full bg-gradient-to-t from-amber-600 to-amber-400 h-[95%] rounded-t-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] relative group-hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300"></div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
<div className="p-8 border border-white/5 bg-neutral-900/30 rounded-2xl hover:bg-neutral-900/50 transition duration-300 group">
<div className="text-amber-500 mb-6 bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</div>
<h3 className="text-white text-xl font-medium mb-3">Технический Аудит</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              Глубокий анализ производственных процессов для выявления узких мест и точек роста эффективности.
            </p>
</div>
<div className="p-8 border border-white/5 bg-neutral-900/30 rounded-2xl hover:bg-neutral-900/50 transition duration-300 group">
<div className="text-amber-500 mb-6 bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10 9 9 9 8 9"></polyline>
</svg>
</div>
<h3 className="text-white text-xl font-medium mb-3">Документация (ТЗ/ПЗ)</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              Разработка и согласование с заказчиком технических заданий на автоматизацию и диспетчеризацию.
            </p>
</div>
<div className="p-8 border border-white/5 bg-neutral-900/30 rounded-2xl hover:bg-neutral-900/50 transition duration-300 group">
<div className="text-amber-500 mb-6 bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="M12 11h4"></path>
<path d="M12 16h4"></path>
<path d="M8 11h.01"></path>
<path d="M8 16h.01"></path>
</svg>
</div>
<h3 className="text-white text-xl font-medium mb-3">Ведомости (ВОР)</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              Точное составление ВОР на монтажные работы и настройку автоматики для обоснования бюджета.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5 relative z-20" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:flex md:items-end md:justify-between border-b border-white/5 pb-10">
<div>
<span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3 block">
              Спектр услуг
            </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              Наши Компетенции
            </h2>
</div>
<p className="mt-6 md:mt-0 text-neutral-400 max-w-md text-sm leading-relaxed">
            Полный цикл инженерного сопровождения: от аудита текущего состояния до ввода систем в эксплуатацию.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/60 hover:border-amber-500/20 transition duration-500">
<div className="w-12 h-12 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<svg className="lucide w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h10"></path>
<path d="M9 4v16"></path>
<path d="M3 9l3 3-3 3"></path>
<path d="M12 9l3 3-3 3"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              Технический Аудит
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 h-10">
              Комплексная проверка производственных процессов и инженерной инфраструктуры.
            </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Анализ процессов
              </li>
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Дефектовка оборудования
              </li>
</ul>
</div>
<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/60 hover:border-amber-500/20 transition duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/5 to-transparent blur-3xl rounded-bl-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<svg className="lucide w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              ТЗ и ПЗ на АСУ ТП
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 h-10">
              Составление и согласование документации на местную автоматику и системы мониторинга.
            </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Инженерные системы зданий
              </li>
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Согласование с заказчиком
              </li>
</ul>
</div>
<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/60 hover:border-amber-500/20 transition duration-500">
<div className="w-12 h-12 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<svg className="lucide w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M12 12h.01"></path>
<path d="M12 17h.01"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
              Ведомости (ВОР)
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 h-10">
              Расчет объемов вспомогательных работ при внедрении и настройке автоматики.
            </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Монтажные работы
              </li>
<li className="flex items-center text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-2.5 text-amber-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Настройка и конфигурирование
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden bg-[#050505] z-20">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
          Отзывы Партнеров
        </h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300">
<div className="flex gap-1 text-amber-500 mb-5">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-neutral-300 text-sm mb-8 leading-relaxed font-light">
            "Помогли сдать исполнительную документацию и согласовать ТЗ на автоматизацию вентиляции в рекордные сроки. Настоящие профи."
          </p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
              АВ
            </div>
<div className="text-xs">
<div className="text-white font-medium">Алексей В.</div>
<div className="text-neutral-500">Гл. Инженер</div>
</div>
</div>
</div>
<div className="p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300">
<div className="flex gap-1 text-amber-500 mb-5">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-neutral-300 text-sm mb-8 leading-relaxed font-light">
            "Грамотно составили ВОР на пусконаладку. Заказчик принял смету без лишних вопросов. Спасибо за оперативность."
          </p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
              СМ
            </div>
<div className="text-xs">
<div className="text-white font-medium">Сергей М.</div>
<div className="text-neutral-500">Директор СК</div>
</div>
</div>
</div>
<div className="p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300 hidden lg:block">
<div className="flex gap-1 text-amber-500 mb-5">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-neutral-300 text-sm mb-8 leading-relaxed font-light">
            "Аудит выявил серьезные упущения в проекте до начала монтажа, что сэкономило нам кучу денег. Рекомендую."
          </p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
              ДП
            </div>
<div className="text-xs">
<div className="text-white font-medium">Дмитрий П.</div>
<div className="text-neutral-500">Руководитель проекта</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-neutral-950 z-20" id="booking">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-neutral-950 to-neutral-950"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Нужна помощь с документацией?
        </h2>
<p className="text-neutral-400 mb-12 text-lg max-w-xl mx-auto font-light">
          Запишитесь на консультацию для обсуждения вашего проекта, составления ТЗ или аудита.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
            Оставить заявку
          </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 text-white font-medium rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group">
<svg className="lucide lucide-calendar w-4 h-4 group-hover:text-amber-600 transition-colors" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
            Заказать звонок
          </button>
</div>
<div className="mt-8 text-xs text-neutral-600 uppercase tracking-widest font-semibold">
          Работаем с объектами любой сложности
        </div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5 z-20 relative" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-12 text-center">
          Часто Задаваемые Вопросы
        </h2>
<div className="space-y-4">
<details className="group border-b border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4">
<span className="text-neutral-200 font-medium text-sm group-hover:text-amber-500 transition-colors">
                Какие исходные данные нужны для составления ТЗ?
              </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-2 leading-relaxed pb-4 px-2">
              Нам потребуются поэтажные планы, разделы ОВ/ВК/ЭОМ (если есть) и общее описание задачи. Если документации нет, мы можем провести выездной аудит объекта.
            </div>
</details>
<details className="group border-b border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4">
<span className="text-neutral-200 font-medium text-sm group-hover:text-amber-500 transition-colors">
                Вы делаете ВОР только на автоматику?
              </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-2 leading-relaxed pb-4 px-2">
              Мы составляем ВОР на вспомогательные монтажные, строительные работы, а также на пусконаладку (ПНР) и конфигурирование систем.
            </div>
</details>
<details className="group border-b border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4">
<span className="text-neutral-200 font-medium text-sm group-hover:text-amber-500 transition-colors">
                Как быстро вы работаете?
              </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-2 leading-relaxed pb-4 px-2">
              Мы понимаем специфику работы подрядчиков. В срочных случаях готовы выдать первичную документацию или результаты аудита в течение 24-48 часов.
            </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 z-20 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6 group" href="#">
<div className="w-8 h-6 relative flex items-center justify-center">
<svg className="w-full h-full text-neutral-400 group-hover:text-amber-400 transition-colors">
<use href="#logo-icon"></use>
</svg>
</div>
<span className="text-lg font-bold tracking-tighter text-white uppercase">
                ПРОМ-СЕРВИС
              </span>
</a>
<p className="text-neutral-500 text-sm max-w-sm mb-8 leading-relaxed">
              Ваш надежный партнер в мире промышленной автоматизации. Технический аудит, документация и внедрение АСУ ТП.
            </p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">
              Навигация
            </h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-amber-500 transition-colors" href="#about">
                  О нас
                </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="#services">
                  Услуги
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">
              Информация
            </h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-amber-500 transition-colors" href="#">
                  Политика конфиденциальности
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-neutral-600">
            © 2023 Пром-Сервис. Все права защищены.
          </div>
</div>
</div>
</footer>


    </>
  );
}

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



      lucide.createIcons();
    
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
      

<div className="fixed inset-0 bg-grid pointer-events-none z-[-1]"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2F4BFF]/10 blur-[150px] rounded-full pointer-events-none z-[-1]"></div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-[#1C2640] backdrop-blur-xl bg-[#020617]/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-[#FFFFFF] font-normal text-sm uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#2F4BFF]"></span>
          СИСТЕМА
        </div>
<a className="text-sm font-normal text-[#FFFFFF] border border-[#1C2640] hover:border-[#2F4BFF]/50 hover:bg-[#121A30] px-5 py-2 rounded-md transition-all duration-300" href="#apply">
          Подать заявку
        </a>
</div>
</nav>

<section className="relative pt-48 pb-24 lg:pt-56 lg:pb-32 px-6 flex flex-col items-center text-center">
<div className="max-w-4xl relative z-10 flex flex-col items-center">
<div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-[#1C2640] bg-[#121A30]/50 backdrop-blur-sm mb-8">
<span className="text-sm text-[#2F4BFF] font-normal uppercase tracking-widest">
            Regenta Consulting
          </span>
</div>
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-[#FFFFFF] mb-8 leading-[1.05]">
          СИСТЕМА
        </h1>
<p className="text-xl md:text-2xl text-[#9AA4C1] mb-8 max-w-2xl font-light">
          Закрытый стратегический Telegram-канал.
          <br/>
          О том, как управлять бизнесом через стратегию и цифры.
        </p>
<div className="flex flex-wrap justify-center gap-4 text-sm tracking-widest uppercase text-[#9AA4C1] mb-12">
<span>Стратегия</span>
<span className="text-[#2F4BFF]">•</span>
<span>Финансы</span>
<span className="text-[#2F4BFF]">•</span>
<span>Приоритеты</span>
<span className="text-[#2F4BFF]">•</span>
<span>Масштабирование</span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 mb-12 text-base text-[#FFFFFF]">
<div className="px-5 py-2 rounded-md bg-[#121A30] border border-[#1C2640]">
            4 000 ₽ / месяц
          </div>
<div className="hidden sm:block w-px h-6 bg-[#1C2640]"></div>
<div className="text-[#9AA4C1]">Доступ по заявке</div>
</div>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#2F4BFF] text-[#FFFFFF] hover:bg-[#3A5BFF] hover:shadow-[0_0_20px_rgba(47,75,255,0.3)] font-normal text-base rounded-md px-12 py-4 transition-all duration-300" href="#apply">
          Подать заявку
        </a>
</div>
</section>

<section className="pb-32 px-6 border-b border-[#1C2640]/50 relative z-10 overflow-hidden flex justify-center">
<div className="relative w-full max-w-5xl mx-auto flex justify-center py-10" style={{perspective: '1000px'}}>
<div className="relative w-40 h-40" style={{transformStyle: 'preserve-3d', animation: 'spin-3d 24s linear infinite'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#2F4BFF] rounded-full blur-xl opacity-70"></div>

<div className="absolute inset-0 border border-[#2F4BFF]/40 bg-[#121A30]/10 backdrop-blur-[2px]" style={{transform: 'translateZ(80px)'}}></div>
<div className="absolute inset-0 border border-[#2F4BFF]/40 bg-[#121A30]/10 backdrop-blur-[2px]" style={{transform: 'rotateY(180deg) translateZ(80px)'}}></div>
<div className="absolute inset-0 border border-[#2F4BFF]/40 bg-[#121A30]/10 backdrop-blur-[2px]" style={{transform: 'rotateY(90deg) translateZ(80px)'}}></div>
<div className="absolute inset-0 border border-[#2F4BFF]/40 bg-[#121A30]/10 backdrop-blur-[2px]" style={{transform: 'rotateY(-90deg) translateZ(80px)'}}></div>
<div className="absolute inset-0 border border-[#2F4BFF]/40 bg-[#121A30]/10 backdrop-blur-[2px]" style={{transform: 'rotateX(90deg) translateZ(80px)'}}></div>
<div className="absolute inset-0 border border-[#2F4BFF]/40 bg-[#121A30]/10 backdrop-blur-[2px]" style={{transform: 'rotateX(-90deg) translateZ(80px)'}}></div>

<div className="absolute inset-4" style={{transformStyle: 'preserve-3d', animation: 'spin-3d 12s linear infinite reverse'}}>
<div className="absolute inset-0 border border-[#FFFFFF]/20" style={{transform: 'translateZ(56px)'}}></div>
<div className="absolute inset-0 border border-[#FFFFFF]/20" style={{transform: 'rotateY(180deg) translateZ(56px)'}}></div>
<div className="absolute inset-0 border border-[#FFFFFF]/20" style={{transform: 'rotateY(90deg) translateZ(56px)'}}></div>
<div className="absolute inset-0 border border-[#FFFFFF]/20" style={{transform: 'rotateY(-90deg) translateZ(56px)'}}></div>
<div className="absolute inset-0 border border-[#FFFFFF]/20" style={{transform: 'rotateX(90deg) translateZ(56px)'}}></div>
<div className="absolute inset-0 border border-[#FFFFFF]/20" style={{transform: 'rotateX(-90deg) translateZ(56px)'}}></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-[#1C2640]/50 relative">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-[#FFFFFF] mb-16 text-center">
          Когда бизнес упирается в потолок — есть 2 пути:
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 border-t border-dashed border-[#1C2640]"></div>

<div className="bg-transparent border border-[#1C2640] rounded-xl p-8 md:p-12">
<div className="text-sm text-[#9AA4C1] font-normal uppercase tracking-widest mb-8 flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#9AA4C1]"></span>
              Путь 1
            </div>
<h3 className="text-xl font-normal tracking-tight text-[#FFFFFF] mb-8">
              Оставаться в реакции
            </h3>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-base">
<i className="w-5 h-5 text-[#1C2640]" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Хаотичные решения</span>
</li>
<li className="flex items-center gap-4 text-base">
<i className="w-5 h-5 text-[#1C2640]" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Рост без прибыли</span>
</li>
<li className="flex items-center gap-4 text-base text-[#9AA4C1]">
<i className="w-5 h-5 text-[#1C2640]" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Стагнация</span>
</li>
</ul>
</div>

<div className="bg-[#121A30] border border-[#2F4BFF]/30 rounded-xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_40px_rgba(47,75,255,0.05)]">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#2F4BFF]/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="text-sm text-[#2F4BFF] font-normal uppercase tracking-widest mb-8 flex items-center gap-3 relative z-10">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F4BFF] shadow-[0_0_10px_#2F4BFF]"></span>
              Путь 2
            </div>
<h3 className="text-xl font-normal tracking-tight text-[#FFFFFF] mb-8 relative z-10">
              Построить систему
            </h3>
<ul className="space-y-4 relative z-10">
<li className="flex items-center gap-4 text-base text-[#FFFFFF]">
<i className="w-5 h-5 text-[#2F4BFF]" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Приоритеты</span>
</li>
<li className="flex items-center gap-4 text-base text-[#FFFFFF]">
<i className="w-5 h-5 text-[#2F4BFF]" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Экономика</span>
</li>
<li className="flex items-center gap-4 text-base text-[#FFFFFF]">
<i className="w-5 h-5 text-[#2F4BFF]" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Управляемый рост</span>
</li>
</ul>
</div>
</div>
<div className="mt-16 text-center text-base text-[#FFFFFF] flex items-center justify-center gap-3">
<span className="w-8 h-px bg-[#1C2640]"></span>
          СИСТЕМА — про второй путь.
          <span className="w-8 h-px bg-[#1C2640]"></span>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-[#1C2640]/50 bg-[#020617]">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#FFFFFF] mb-16 leading-[1.1]">
          Прибыль
          <span className="text-[#2F4BFF]">=</span>
          Маржа
          <span className="text-[#1C2640]">×</span>
          Управляемость
          <span className="text-[#1C2640]">×</span>
          Приоритеты
        </h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-base text-[#9AA4C1]">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#1C2640]" data-lucide="x-circle" strokeWidth="1.5"></i>
            Маржа без контроля → иллюзия
          </div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#1C2640]" data-lucide="x-circle" strokeWidth="1.5"></i>
            Рост без приоритетов → распыление
          </div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#1C2640]" data-lucide="x-circle" strokeWidth="1.5"></i>
            Управление без цифр → случайность
          </div>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-[#1C2640]/50 bg-[#121A30]/30 relative overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-[#FFFFFF] mb-6">
            Где бизнес теряет деньги
          </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-7 flex flex-col gap-8">

<div className="bg-[#121A30] border border-[#1C2640] p-8 md:p-10 rounded-xl">
<div className="text-4xl md:text-6xl font-normal tracking-tight text-[#FFFFFF] mb-4">
                15
                <span className="text-[#9AA4C1]">–</span>
                30
                <span className="text-[#2F4BFF]">%</span>
</div>
<div className="text-base text-[#9AA4C1] max-w-sm">
                прибыли теряется из-за управленческих ошибок.
              </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-transparent border border-[#1C2640] p-6 rounded-xl flex flex-col justify-between">
<div className="text-base font-normal text-[#FFFFFF] mb-4">
                  Ценообразование
                </div>
<div className="flex items-center gap-3 text-sm text-[#9AA4C1]">
<i className="w-4 h-4 text-[#2F4BFF]" data-lucide="arrow-right" strokeWidth="1.5"></i>
                  Теряется маржа
                </div>
</div>
<div className="bg-transparent border border-[#1C2640] p-6 rounded-xl flex flex-col justify-between">
<div className="text-base font-normal text-[#FFFFFF] mb-4">
                  Юнит-экономика
                </div>
<div className="flex items-center gap-3 text-sm text-[#9AA4C1]">
<i className="w-4 h-4 text-[#2F4BFF]" data-lucide="arrow-right" strokeWidth="1.5"></i>
                  Убытки выглядят прибылью
                </div>
</div>
<div className="bg-transparent border border-[#1C2640] p-6 rounded-xl flex flex-col justify-between">
<div className="text-base font-normal text-[#FFFFFF] mb-4">
                  Финмодель
                </div>
<div className="flex items-center gap-3 text-sm text-[#9AA4C1]">
<i className="w-4 h-4 text-[#2F4BFF]" data-lucide="arrow-right" strokeWidth="1.5"></i>
                  Кассовые разрывы
                </div>
</div>
<div className="bg-transparent border border-[#1C2640] p-6 rounded-xl flex flex-col justify-between">
<div className="text-base font-normal text-[#FFFFFF] mb-4">
                  Фокус
                </div>
<div className="flex items-center gap-3 text-sm text-[#9AA4C1]">
<i className="w-4 h-4 text-[#2F4BFF]" data-lucide="arrow-right" strokeWidth="1.5"></i>
                  Распыление ресурсов
                </div>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-[#121A30] border border-[#1C2640] rounded-xl p-8 md:p-10 flex flex-col">
<div className="text-sm text-[#9AA4C1] font-normal uppercase tracking-widest mb-10">
              Система здоровья бизнеса
            </div>
<div className="space-y-8 flex-grow">

<div>
<div className="flex justify-between text-base mb-3">
<span className="text-[#FFFFFF]">Финконтроль</span>
<span className="text-[#9AA4C1]">20%</span>
</div>
<div className="w-full h-1 bg-[#020617] rounded-full overflow-hidden">
<div className="h-full bg-[#2F4BFF] w-[20%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-base mb-3">
<span className="text-[#FFFFFF]">Маржинальность</span>
<span className="text-[#9AA4C1]">35%</span>
</div>
<div className="w-full h-1 bg-[#020617] rounded-full overflow-hidden">
<div className="h-full bg-[#2F4BFF] w-[35%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-base mb-3">
<span className="text-[#FFFFFF]">Приоритеты</span>
<span className="text-[#9AA4C1]">15%</span>
</div>
<div className="w-full h-1 bg-[#020617] rounded-full overflow-hidden">
<div className="h-full bg-[#2F4BFF] w-[15%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-base mb-3">
<span className="text-[#FFFFFF]">Стратегия</span>
<span className="text-[#9AA4C1]">10%</span>
</div>
<div className="w-full h-1 bg-[#020617] rounded-full overflow-hidden">
<div className="h-full bg-[#2F4BFF] w-[10%]"></div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-[#1C2640] text-sm text-[#9AA4C1]">
              Типовая картина бизнеса без выстроенной системы.
            </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-[#1C2640]/50 bg-[#020617]">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<div className="text-sm text-[#2F4BFF] font-normal uppercase tracking-widest mb-4">
            О результатах regenta consulting
          </div>
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-[#FFFFFF]">
            СИСТЕМА — проект Regenta Consulting
          </h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

<div className="bg-transparent border border-[#1C2640] rounded-xl p-8 md:p-10 flex flex-col justify-between">
<div>
<div className="text-sm text-[#9AA4C1] font-normal uppercase tracking-widest mb-8">
                Финансовый эффект
              </div>
<div className="space-y-6">
<div className="flex items-baseline gap-4">
<div className="text-2xl md:text-3xl font-normal text-[#FFFFFF] w-32">
                    +18–34%
                  </div>
<div className="text-base text-[#9AA4C1]">Маржинальность</div>
</div>
<div className="flex items-baseline gap-4">
<div className="text-2xl md:text-3xl font-normal text-[#FFFFFF] w-32">
                    +22–41%
                  </div>
<div className="text-base text-[#9AA4C1]">Выручка</div>
</div>
<div className="flex items-baseline gap-4">
<div className="text-2xl md:text-3xl font-normal text-[#FFFFFF] w-32">
                    −12–27%
                  </div>
<div className="text-base text-[#9AA4C1]">Расходы</div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-[#1C2640] text-base text-[#FFFFFF]">
              83% проектов показали финансовый рост в первые 6–9 месяцев.
            </div>
</div>

<div className="bg-[#121A30] border border-[#1C2640] rounded-xl p-8 md:p-10 flex flex-col justify-between">
<div>
<div className="text-sm text-[#9AA4C1] font-normal uppercase tracking-widest mb-8">
                Масштабирование
              </div>
<div className="text-4xl font-normal tracking-tight text-[#FFFFFF] mb-4">
                19 компаний
              </div>
<div className="text-base text-[#9AA4C1] mb-8">
                вышли на новые рынки
              </div>
<div className="space-y-4 text-base text-[#FFFFFF]">
<div className="flex items-center justify-between border-b border-[#1C2640] pb-2">
<span>Новые регионы РФ</span>
<span>11</span>
</div>
<div className="flex items-center justify-between border-b border-[#1C2640] pb-2">
<span>Страны СНГ</span>
<span>5</span>
</div>
<div className="flex items-center justify-between border-b border-[#1C2640] pb-2">
<span>Рынок ЕС</span>
<span>3</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-transparent border border-[#1C2640] rounded-xl p-8 md:p-10">
<div className="text-sm text-[#9AA4C1] font-normal uppercase tracking-widest mb-8">
            Структура портфеля проектов
          </div>

<div className="w-full h-3 flex rounded-full overflow-hidden mb-8">
<div className="h-full bg-[#2F4BFF]" style={{width: '38%'}}></div>
<div className="h-full bg-[#2F4BFF]/80" style={{width: '27%'}}></div>
<div className="h-full bg-[#2F4BFF]/60" style={{width: '18%'}}></div>
<div className="h-full bg-[#2F4BFF]/40" style={{width: '11%'}}></div>
<div className="h-full bg-[#1C2640]" style={{width: '6%'}}></div>
</div>

<div className="flex flex-wrap gap-x-8 gap-y-4 text-base">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#2F4BFF]"></span>
<span className="text-[#FFFFFF]">38%</span>
<span className="text-[#9AA4C1]">Стратегия роста</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#2F4BFF]/80"></span>
<span className="text-[#FFFFFF]">27%</span>
<span className="text-[#9AA4C1]">Маркет-анализ</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#2F4BFF]/60"></span>
<span className="text-[#FFFFFF]">18%</span>
<span className="text-[#9AA4C1]">Финмодель</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#2F4BFF]/40"></span>
<span className="text-[#FFFFFF]">11%</span>
<span className="text-[#9AA4C1]">GTM</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#1C2640]"></span>
<span className="text-[#FFFFFF]">6%</span>
<span className="text-[#9AA4C1]">Операционка</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-[#1C2640]/50 bg-[#121A30]/30 relative">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-[#FFFFFF] mb-16">
          Внутри: материалы + разборы + инструменты
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
<div className="border-t border-[#2F4BFF] pt-6">
<div className="text-xl text-[#FFFFFF] font-normal mb-2">
              2–3 материала в неделю
            </div>
<div className="text-base text-[#9AA4C1]">
              Структурные разборы без воды.
            </div>
</div>
<div className="border-t border-[#1C2640] pt-6">
<div className="text-xl text-[#FFFFFF] font-normal mb-2">
              1 разбор в месяц
            </div>
<div className="text-base text-[#9AA4C1]">
              Глубокое погружение в одну тему.
            </div>
</div>
<div className="border-t border-[#1C2640] pt-6">
<div className="text-xl text-[#FFFFFF] font-normal mb-2">
              Инструменты в архив
            </div>
<div className="text-base text-[#9AA4C1]">
              Шаблоны, модели и чек-листы.
            </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">

<div className="lg:col-span-4">
<div className="text-sm text-[#9AA4C1] font-normal uppercase tracking-widest mb-8 border-b border-[#1C2640] pb-4">
              Рубрикатор
            </div>
<ul className="space-y-4">
<li className="text-base text-[#FFFFFF] flex items-center gap-3">
<span className="w-1 h-1 bg-[#2F4BFF]"></span>
                Стратегия (3–6 месяцев)
              </li>
<li className="text-base text-[#FFFFFF] flex items-center gap-3">
<span className="w-1 h-1 bg-[#2F4BFF]"></span>
                Юнит-экономика и маржа
              </li>
<li className="text-base text-[#FFFFFF] flex items-center gap-3">
<span className="w-1 h-1 bg-[#2F4BFF]"></span>
                Ценообразование
              </li>
<li className="text-base text-[#FFFFFF] flex items-center gap-3">
<span className="w-1 h-1 bg-[#2F4BFF]"></span>
                Каналы и приоритеты
              </li>
<li className="text-base text-[#FFFFFF] flex items-center gap-3">
<span className="w-1 h-1 bg-[#2F4BFF]"></span>
                Масштабирование и риски
              </li>
<li className="text-base text-[#FFFFFF] flex items-center gap-3">
<span className="w-1 h-1 bg-[#2F4BFF]"></span>
                Финансовая дисциплина
              </li>
</ul>
</div>

<div className="lg:col-span-8">
<div className="text-sm text-[#9AA4C1] font-normal uppercase tracking-widest mb-8 border-b border-[#1C2640] pb-4">
              Примеры материалов
            </div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-[#121A30] border border-[#1C2640] p-5 rounded-lg text-base text-[#FFFFFF]">
                «Стратегия на 90 дней: как выбрать правильный фокус»
              </div>
<div className="bg-[#121A30] border border-[#1C2640] p-5 rounded-lg text-base text-[#FFFFFF]">
                «GTM-план: что делать перед выходом на новый рынок»
              </div>
<div className="bg-[#121A30] border border-[#1C2640] p-5 rounded-lg text-base text-[#FFFFFF]">
                «Как отличить маркетинг от имитации активности»
              </div>
<div className="bg-[#121A30] border border-[#1C2640] p-5 rounded-lg text-base text-[#FFFFFF]">
                «Юнит-экономика простыми цифрами для владельца»
              </div>
<div className="bg-[#121A30] border border-[#1C2640] p-5 rounded-lg text-base text-[#FFFFFF]">
                «Как выстроить систему контроля финансов без микроменеджмента»
              </div>
<div className="bg-[#121A30] border border-[#1C2640] p-5 rounded-lg text-base text-[#FFFFFF]">
                «Когда увольнять маркетолога, а когда менять стратегию»
              </div>
<div className="bg-[#121A30] border border-[#1C2640] p-5 rounded-lg text-base text-[#FFFFFF]">
                «Как оценить эффективность подрядчиков»
              </div>
<div className="bg-[#121A30] border border-[#1C2640] p-5 rounded-lg text-base text-[#FFFFFF]">
                «Как перестать зависеть от одного канала»
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-[#1C2640]/50 bg-[#121A30]/30 relative" id="apply">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

<div className="lg:col-span-5 space-y-16">
<div>
<h2 className="text-2xl font-normal tracking-tight text-[#FFFFFF] mb-8">
              Как получить доступ
            </h2>
<div className="space-y-6">
<div className="flex items-start gap-4 text-base">
<span className="text-[#2F4BFF] font-normal mt-0.5">01</span>
<div>
<div className="text-[#FFFFFF] mb-1">Заявка</div>
<div className="text-[#9AA4C1] text-sm">
                    Заполнение короткой анкеты справа
                  </div>
</div>
</div>
<div className="flex items-start gap-4 text-base">
<span className="text-[#2F4BFF] font-normal mt-0.5">02</span>
<div>
<div className="text-[#FFFFFF] mb-1">Подтверждение</div>
<div className="text-[#9AA4C1] text-sm">
                    Менеджер изучает профиль
                  </div>
</div>
</div>
<div className="flex items-start gap-4 text-base">
<span className="text-[#2F4BFF] font-normal mt-0.5">03</span>
<div>
<div className="text-[#FFFFFF] mb-1">Оплата</div>
<div className="text-[#9AA4C1] text-sm">
                    Закрытая ссылка на 4 000 ₽ / мес
                  </div>
</div>
</div>
<div className="flex items-start gap-4 text-base">
<span className="text-[#2F4BFF] font-normal mt-0.5">04</span>
<div>
<div className="text-[#FFFFFF] mb-1">Доступ в канал</div>
<div className="text-[#9AA4C1] text-sm">Система открыта</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<form action="https://formspree.io/f/mvgerjpa" className="p-8 md:p-12 rounded-xl border border-[#1C2640] space-y-8 relative overflow-hidden bg-[#020617]" method="POST">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#2F4BFF]/5 blur-[100px] pointer-events-none"></div>

<div>
<label className="block text-sm uppercase tracking-widest text-[#9AA4C1] mb-3">
                1. Роль в бизнесе
              </label>
<input className="w-full bg-transparent border-b border-[#1C2640] py-3 text-base text-[#FFFFFF] placeholder-[#1C2640] focus:border-[#2F4BFF] focus:outline-none transition-colors" name="role" placeholder="Владелец / Сооснователь / Запуск" type="text"/>
</div>

<div>
<label className="block text-sm uppercase tracking-widest text-[#9AA4C1] mb-3">
                2. Текущая стадия
              </label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<label className="relative cursor-pointer">
<input className="peer sr-only" name="stage" type="radio" value="Идея"/>
<div className="px-4 py-3 rounded-md border border-[#1C2640] bg-[#121A30] text-base text-center text-[#9AA4C1] transition-all">
                    Идея
                  </div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="stage" type="radio" value="До 1 млн"/>
<div className="px-4 py-3 rounded-md border border-[#1C2640] bg-[#121A30] text-base text-center text-[#9AA4C1] transition-all">
                    До 1 млн
                  </div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="stage" type="radio" value="1–10 млн"/>
<div className="px-4 py-3 rounded-md border border-[#1C2640] bg-[#121A30] text-base text-center text-[#9AA4C1] transition-all">
                    1–10 млн
                  </div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="stage" type="radio" value="10+ млн"/>
<div className="px-4 py-3 rounded-md border border-[#1C2640] bg-[#121A30] text-base text-center text-[#9AA4C1] transition-all">
                    10+ млн
                  </div>
</label>
</div>
</div>

<div>
<label className="block text-sm uppercase tracking-widest text-[#9AA4C1] mb-3">
                3. Ниша
              </label>
<input className="w-full bg-transparent border-b border-[#1C2640] py-3 text-base text-[#FFFFFF] placeholder-[#1C2640] focus:border-[#2F4BFF] focus:outline-none transition-colors" name="niche" placeholder="IT, Ритейл, Услуги..." type="text"/>
</div>

<div>
<label className="block text-sm uppercase tracking-widest text-[#9AA4C1] mb-3">
                4. Есть ли финмодель / юнит-экономика
              </label>
<div className="grid grid-cols-2 gap-3">
<label className="relative cursor-pointer">
<input className="peer sr-only" name="fin" type="radio" value="Да"/>
<div className="px-4 py-3 rounded-md border border-[#1C2640] bg-[#121A30] text-base text-center text-[#9AA4C1] transition-all">
                    Да
                  </div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="fin" type="radio" value="Нет"/>
<div className="px-4 py-3 rounded-md border border-[#1C2640] bg-[#121A30] text-base text-center text-[#9AA4C1] transition-all">
                    Нет
                  </div>
</label>
</div>
</div>

<div>
<label className="block text-sm uppercase tracking-widest text-[#9AA4C1] mb-3">
                5. Главная цель на 3 месяца
              </label>
<div className="space-y-2">
<label className="relative cursor-pointer block">
<input className="peer sr-only" name="goal" type="radio" value="Выйти из кассовых разрывов"/>
<div className="px-4 py-3 rounded-md border border-[#1C2640] bg-[#121A30] text-base text-[#9AA4C1] transition-all text-left">
                    Выйти из кассовых разрывов
                  </div>
</label>
<label className="relative cursor-pointer block">
<input className="peer sr-only" name="goal" type="radio" value="Найти точки роста маржи"/>
<div className="px-4 py-3 rounded-md border border-[#1C2640] bg-[#121A30] text-base text-[#9AA4C1] transition-all text-left">
                    Найти точки роста маржи
                  </div>
</label>
<label className="relative cursor-pointer block">
<input className="peer sr-only" name="goal" type="radio" value="Построить архитектуру для масштаба"/>
<div className="px-4 py-3 rounded-md border border-[#1C2640] bg-[#121A30] text-base text-[#9AA4C1] transition-all text-left">
                    Построить архитектуру для масштаба
                  </div>
</label>
<label className="relative cursor-pointer block">
<input className="peer sr-only" name="goal" type="radio" value="Настроить управленческую дисциплину"/>
<div className="px-4 py-3 rounded-md border border-[#1C2640] bg-[#121A30] text-base text-[#9AA4C1] transition-all text-left">
                    Настроить управленческую дисциплину
                  </div>
</label>
</div>
</div>

<div>
<label className="block text-sm uppercase tracking-widest text-[#9AA4C1] mb-3">
                6. Ваш Email
              </label>
<input className="w-full bg-transparent border-b border-[#1C2640] py-3 text-base text-[#FFFFFF] placeholder-[#1C2640] focus:border-[#2F4BFF] focus:outline-none transition-colors" name="email" placeholder="email@example.com" required="" type="email"/>
</div>

<div>
<label className="block text-sm uppercase tracking-widest text-[#9AA4C1] mb-3">
                7. Контакт для связи (Telegram / Телефон)
              </label>
<input className="w-full bg-transparent border-b border-[#1C2640] py-3 text-base text-[#FFFFFF] placeholder-[#1C2640] focus:border-[#2F4BFF] focus:outline-none transition-colors" name="contact" placeholder="@username или +7..." type="text"/>
</div>

<div>
<label className="block text-sm uppercase tracking-widest text-[#9AA4C1] mb-3">
                8. Ваше сообщение
              </label>
<textarea className="w-full bg-transparent border-b border-[#1C2640] py-3 text-base text-[#FFFFFF] placeholder-[#1C2640] focus:border-[#2F4BFF] focus:outline-none transition-colors resize-none" name="message" placeholder="Дополнительная информация..." rows="3"></textarea>
</div>
<div className="pt-8">
<button className="w-full bg-[#2F4BFF] text-[#FFFFFF] hover:bg-[#3A5BFF] hover:shadow-[0_0_20px_rgba(47,75,255,0.3)] font-normal text-base rounded-md py-4 transition-all" type="submit">
                Отправить заявку
              </button>
</div>
</form>
</div>
</div>
</section>

<section className="py-40 px-6 text-center relative overflow-hidden bg-[#020617]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2F4BFF]/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="text-6xl md:text-8xl font-normal tracking-tight text-[#FFFFFF] mb-8 leading-none">
          Хаос
          <br/>
<span className="text-3xl md:text-5xl text-[#1C2640] block my-6">
            или
          </span>
<span className="text-[#2F4BFF]">СИСТЕМА</span>
</h2>
<a className="mt-16 inline-flex items-center justify-center bg-[#2F4BFF] text-[#FFFFFF] hover:bg-[#3A5BFF] hover:shadow-[0_0_30px_rgba(47,75,255,0.4)] font-normal text-base rounded-md px-12 py-4 transition-all duration-300" href="#apply">
          Подать заявку
        </a>
</div>
</section>

<footer className="py-12 border-t border-[#1C2640] px-6 text-center text-sm text-[#9AA4C1] bg-[#020617]">
<div className="font-normal tracking-widest uppercase mb-2">
        Regenta Consulting
      </div>
<div className="opacity-50">
        © 2023. СИСТЕМА — закрытый стратегический канал.
      </div>
</footer>


    </>
  );
}

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
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter text-white">
          N U L L
        </div>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">
            О проекте
          </a>
<a className="hover:text-white transition-colors" href="#work">Процесс</a>
<a className="hover:text-white transition-colors" href="#contact">
            Сотрудничество
          </a>
</div>
<button className="bg-white text-black text-xs font-semibold px-5 py-2 rounded-full hover:bg-neutral-200 transition-all">
          Запросить доступ
        </button>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden grid-pattern">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-3/5">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs text-cyan-400 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
              System v2.0 Online
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight mb-6">
              NULL — цифровая система
              <span className="text-neutral-500">нового поколения</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed">
              Мы создаем технологические решения, которые упрощают сложные
              процессы и ускоряют рост проектов через архитектуру будущего.
            </p>
<div className="flex flex-wrap gap-4 mb-16">
<button className="bg-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-violet-500 transition-all shadow-lg shadow-violet-600/20">
                Присоединиться
              </button>
<button className="border border-neutral-800 bg-neutral-900/50 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-800 transition-all">
                Узнать больше
              </button>
</div>
<div className="grid grid-cols-3 gap-8 border-t border-neutral-900 pt-10">
<div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1">
                  25+
                </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">
                  Решений
                </div>
</div>
<div className="">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">
                  1200+
                </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">
                  Пользователей
                </div>
</div>
<div className="">
<div className="text-3xl font-semibold text-cyan-500 tracking-tight mb-1">
                  -35%
                </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">
                  Затрат
                </div>
</div>
</div>
</div>

<div className="lg:w-2/5 relative">
<div className="relative w-full aspect-square flex items-center justify-center">
<div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full"></div>
<div className="relative w-full h-full glass rounded-3xl overflow-hidden border border-neutral-800 glow-cyan">
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<div className="w-full h-[1px] bg-violet-500 absolute rotate-45"></div>
<div className="w-full h-[1px] bg-cyan-500 absolute -rotate-45"></div>
<div className="w-64 h-64 border border-cyan-500 rounded-full animate-pulse"></div>
<div className="w-48 h-48 border border-neutral-700 rounded-full"></div>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="h-32 w-full flex items-end gap-1">
<div className="flex-1 bg-violet-500/40 h-[40%]"></div>
<div className="flex-1 bg-violet-500/40 h-[60%]"></div>
<div className="flex-1 bg-violet-500/40 h-[30%]"></div>
<div className="flex-1 bg-violet-500/60 h-[80%]"></div>
<div className="flex-1 bg-violet-500/40 h-[50%]"></div>
<div className="flex-1 bg-violet-500 h-[100%]"></div>
<div className="flex-1 bg-violet-500/40 h-[70%]"></div>
</div>
<div className="mt-4 text-[10px] font-mono text-cyan-500/50 uppercase tracking-tighter">
                    System data encryption active // process.001
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-xs font-semibold text-cyan-500 uppercase tracking-[0.2em] mb-4">
            О проекте
          </h2>
<h3 className="text-4xl font-semibold text-white tracking-tight mb-6">
            Что такое NULL?
          </h3>
<p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
            NULL — это независимая цифровая инициатива, направленная на создание
            гибких, масштабируемых и эффективных решений для современных задач.
            Мы объединяем передовые технологии, глубокую аналитику и
            стратегическое видение.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 glass rounded-2xl border border-neutral-900 hover:border-neutral-700 transition-all group">
<iconify-icon className="text-3xl text-cyan-500 mb-6 block group-hover:scale-110 transition-transform" icon="solar:globus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-lg font-semibold text-white mb-3">Масштабируемая архитектура</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
              Готовность к любым нагрузкам и динамическому росту вашего бизнеса
              без потери скорости.
            </p>
</div>
<div className="p-8 glass rounded-2xl border border-neutral-900 hover:border-neutral-700 transition-all group">
<iconify-icon className="text-3xl text-cyan-500 mb-6 block group-hover:scale-110 transition-transform" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-lg font-semibold text-white mb-3">
              Быстрая интеграция
            </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
              Минимальные сроки внедрения благодаря модульной системе и открытым
              API протоколам.
            </p>
</div>
<div className="p-8 glass rounded-2xl border border-neutral-900 hover:border-neutral-700 transition-all group">
<iconify-icon className="text-3xl text-cyan-500 mb-6 block group-hover:scale-110 transition-transform" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-lg font-semibold text-white mb-3">
              Высокая производительность
            </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
              Оптимизированный код и современные алгоритмы обработки данных для
              максимального отклика.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-900" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl font-semibold text-white tracking-tight">
            Как работает система
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="relative text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 mx-auto md:mx-0 text-cyan-500 font-mono">
              01
            </div>
<iconify-icon className="text-4xl text-white mb-4 block" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Анализ
            </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
              Изучаем задачи, выявляем узкие места и определяем ключевые цели
              развития проекта.
            </p>
</div>

<div className="relative text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 mx-auto md:mx-0 text-cyan-500 font-mono">
              02
            </div>
<iconify-icon className="text-4xl text-white mb-4 block" icon="solar:code-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Разработка
            </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
              Создаем адаптивное технологическое решение, используя современные
              стеки разработки.
            </p>
</div>

<div className="relative text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 mx-auto md:mx-0 text-cyan-500 font-mono">
              03
            </div>
<iconify-icon className="text-4xl text-white mb-4 block" icon="solar:settings-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Оптимизация
            </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
              Внедряем систему, мониторим показатели и проводим финальную
              калибровку эффективности.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="contact">
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
          Готовы перейти на новый уровень?
        </h2>
<p className="text-lg text-neutral-400 mb-12">
          Присоединяйтесь к проекту NULL и станьте частью цифровой трансформации
          уже сегодня.
        </p><div className="glass md:p-12 max-w-2xl border-neutral-800 border rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">
<form className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Ваше имя" type="text"/>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Email" type="email"/>
</div>
<button className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-neutral-200 transition-all shadow-xl">
              Начать сотрудничество
            </button>
<p className="text-[10px] text-neutral-600 uppercase tracking-widest mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
</form>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] -z-10 rounded-full"></div>
</section>

<footer className="py-12 border-t border-neutral-900 text-center">
<div className="max-w-7xl mx-auto px-6">
<div className="text-sm font-semibold tracking-tighter text-white mb-6">
          N U L L
        </div>
<div className="flex justify-center gap-6 mb-8 text-neutral-500 text-xs uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Telegram</a>
</div>
<div className="text-xs text-neutral-600">
          © 2024 NULL Initiative. Все права защищены.
        </div>
</div>
</footer>

    </>
  );
}

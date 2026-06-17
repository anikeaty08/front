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
      

<div className="slide">

<div className="h-16 flex items-center justify-between px-8 pt-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500">Aura.build</span>
<span className="text-[10px] font-mono text-neutral-600">01/09</span>
</div>

<div className="flex-1 flex flex-col justify-center px-8 relative z-10">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 blur-[60px] rounded-full"></div>
<h1 className="text-5xl font-semibold text-white leading-[1.1] tracking-tight-custom mb-6">
                Почему твой <br/>
<span className="text-neutral-400">«полезный контент»</span> <br/>
                не приносит <br/>
                денег?
            </h1>
<p className="text-lg text-neutral-500 font-light leading-relaxed max-w-sm">
                Ты стараешься, даёшь максимум пользы, а продажи идут мимо. Разбираем ошибку.
            </p>
</div>

<div className="h-20 px-8 flex items-center justify-between border-t border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
<i className="w-3 h-3" data-lucide="user"></i>
</div>
<span className="text-xs text-neutral-400">@username</span>
</div>
<i className="text-white w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>

<div className="slide bg-grid">
<div className="h-16 flex items-center justify-between px-8 pt-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500">Диагностика</span>
<span className="text-[10px] font-mono text-neutral-600">02/09</span>
</div>
<div className="flex-1 px-8 flex flex-col justify-center">
<h2 className="text-3xl font-semibold text-white mb-10 tracking-tight">Что ты делаешь сейчас</h2>
<ul className="space-y-8">
<li className="flex items-start gap-4 group">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors"></div>
<div>
<p className="text-lg text-white font-medium mb-1">Бесплатная энциклопедия</p>
<p className="text-sm text-neutral-500 leading-relaxed">Разжёвываешь каждую деталь, не оставляя интриги.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors"></div>
<div>
<p className="text-lg text-white font-medium mb-1">Посты-сохранялки</p>
<p className="text-sm text-neutral-500 leading-relaxed">Люди сохраняют «на потом», но не покупают сейчас.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors"></div>
<div>
<p className="text-lg text-white font-medium mb-1">Фокус на «КАК»</p>
<p className="text-sm text-neutral-500 leading-relaxed">Даёшь инструкции вместо того, чтобы продавать идею результата.</p>
</div>
</li>
</ul>
</div>
<div className="h-20 px-8 flex items-center justify-end border-t border-white/5">
<i className="text-neutral-600 w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>

<div className="slide">
<div className="h-16 flex items-center justify-between px-8 pt-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500">Проблема</span>
<span className="text-[10px] font-mono text-neutral-600">03/09</span>
</div>
<div className="flex-1 px-8 flex flex-col items-center justify-center text-center relative">
<div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="bg-black border border-white/10 p-8 rounded-2xl relative z-10 shadow-2xl max-w-sm">
<div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
<i className="w-5 h-5 text-white" data-lucide="alert-circle"></i>
</div>
<h2 className="text-xl font-semibold text-white mb-4">Разрыв логики</h2>
<p className="text-base text-neutral-400 leading-relaxed">
                    Ты прокачиваешь людям мозг, но не даёшь им причину работать <span className="text-white border-b border-white/30">именно с тобой</span>.
                </p>
</div>
<p className="mt-10 text-sm text-neutral-600 font-mono uppercase tracking-widest">«Я попробую сам»</p>
</div>
<div className="h-20 px-8 flex items-center justify-end border-t border-white/5">
<i className="text-neutral-600 w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>

<div className="slide">
<div className="h-16 flex items-center justify-between px-8 pt-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500">Ошибки</span>
<span className="text-[10px] font-mono text-neutral-600">04/09</span>
</div>
<div className="flex-1 px-8 pt-8">
<h2 className="text-3xl font-semibold text-white mb-10 tracking-tight">Три главные <br/>ошибки</h2>
<div className="space-y-6">

<div className="flex gap-5 items-start">
<span className="text-4xl font-thin text-neutral-700 leading-none">1</span>
<p className="text-lg text-neutral-300 font-light leading-snug pt-1">
                        Учишь, но не показываешь <strong className="text-white font-medium">цену бездействия</strong>.
                    </p>
</div>
<div className="w-full h-px bg-white/5"></div>

<div className="flex gap-5 items-start">
<span className="text-4xl font-thin text-neutral-700 leading-none">2</span>
<p className="text-lg text-neutral-300 font-light leading-snug pt-1">
                        Даёшь шаги, но не продаёшь <strong className="text-white font-medium">конечный результат</strong>.
                    </p>
</div>
<div className="w-full h-px bg-white/5"></div>

<div className="flex gap-5 items-start">
<span className="text-4xl font-thin text-neutral-700 leading-none">3</span>
<p className="text-lg text-neutral-300 font-light leading-snug pt-1">
                        Контент оторван от твоего <strong className="text-white font-medium">продукта</strong>.
                    </p>
</div>
</div>
</div>
<div className="h-20 px-8 flex items-center justify-end border-t border-white/5">
<i className="text-neutral-600 w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>

<div className="slide relative">
<div className="gradient-corner top-0 left-0"></div>
<div className="h-16 flex items-center justify-between px-8 pt-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500">Сдвиг</span>
<span className="text-[10px] font-mono text-neutral-600">05/09</span>
</div>
<div className="flex-1 px-8 flex flex-col justify-center items-center text-center">
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-6">Смени фокус</p>
<div className="mb-8 opacity-40">
<p className="text-xl text-neutral-400 line-through decoration-neutral-500 font-light">«Как дать побольше пользы?»</p>
</div>
<i className="text-white w-6 h-6 mb-8 animate-bounce" data-lucide="arrow-down"></i>
<div className="p-6 border border-white rounded-xl bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.15)]">
<p className="text-xl font-semibold leading-tight">
                    «Какой контент заставит человека понять, что ему нужен <span className="italic font-serif">именно</span> этот специалист?»
                </p>
</div>
</div>
<div className="h-20 px-8 flex items-center justify-end border-t border-white/5">
<i className="text-neutral-600 w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>

<div className="slide">
<div className="h-16 flex items-center justify-between px-8 pt-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500">Формула</span>
<span className="text-[10px] font-mono text-neutral-600">06/09</span>
</div>
<div className="flex-1 px-8 flex flex-col justify-center">
<h2 className="text-3xl font-semibold text-white mb-12 tracking-tight">3 типа контента, <br/>которые <span className="text-neutral-500">продают</span></h2>
<div className="pl-4 border-l border-white/10 space-y-10">

<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-black border border-white rounded-full"></div>
<h3 className="text-xl font-semibold text-white mb-1">Осознанность</h3>
<p className="text-sm text-neutral-400">Вскрываешь проблему, которую клиент не замечал, и показываешь её цену.</p>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-black border border-neutral-600 rounded-full"></div>
<h3 className="text-xl font-semibold text-white mb-1">Решение (Твой метод)</h3>
<p className="text-sm text-neutral-400">Объясняешь свой подход и почему старые методы не работают.</p>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-black border border-neutral-600 rounded-full"></div>
<h3 className="text-xl font-semibold text-white mb-1">Доверие</h3>
<p className="text-sm text-neutral-400">Кейсы, твоя позиция, ценности. Почему ты?</p>
</div>
</div>
</div>
<div className="h-20 px-8 flex items-center justify-end border-t border-white/5">
<i className="text-neutral-600 w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>

<div className="slide">
<div className="h-16 flex items-center justify-between px-8 pt-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500">Пример</span>
<span className="text-[10px] font-mono text-neutral-600">07/09</span>
</div>
<div className="flex-1 px-8 flex flex-col justify-center gap-6">
<h2 className="text-2xl font-semibold text-white mb-2">Как переделать тему</h2>

<div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
<div className="flex items-center gap-2 mb-3 text-red-400 font-bold uppercase text-[10px] tracking-widest">
<i className="w-3 h-3" data-lucide="x"></i> Было
                </div>
<p className="text-lg text-neutral-300 font-light leading-snug">
                    «5 способов повысить охваты в сторис»
                </p>
<p className="mt-3 text-xs text-red-500/60 font-mono">→ Полезно, но скучно.</p>
</div>

<div className="flex justify-center -my-2 relative z-10">
<div className="bg-black border border-white/10 rounded-full p-1.5">
<i className="w-4 h-4 text-white" data-lucide="arrow-down"></i>
</div>
</div>

<div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 blur-xl rounded-full"></div>
<div className="flex items-center gap-2 mb-3 text-green-400 font-bold uppercase text-[10px] tracking-widest">
<i className="w-3 h-3" data-lucide="check"></i> Стало
                </div>
<p className="text-lg text-white font-medium leading-snug">
                    «Почему твои сторис не продают, даже если охваты высокие — и что с этим делать»
                </p>
<p className="mt-3 text-xs text-green-500/60 font-mono">→ Бьёт в боль + интрига.</p>
</div>
</div>
<div className="h-20 px-8 flex items-center justify-end border-t border-white/5">
<i className="text-neutral-600 w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>

<div className="slide">
<div className="h-16 flex items-center justify-between px-8 pt-4">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500">Чек-лист</span>
<span className="text-[10px] font-mono text-neutral-600">08/09</span>
</div>
<div className="flex-1 px-8 pt-10">
<h2 className="text-3xl font-semibold text-white mb-2 tracking-tight">Перед публикацией</h2>
<p className="text-sm text-neutral-500 mb-10">Проверь пост по 3 пунктам:</p>
<div className="space-y-4">
<div className="p-5 border border-white/10 rounded-xl bg-white/[0.02]">
<div className="flex items-center gap-4 mb-2">
<div className="w-5 h-5 rounded border border-neutral-600 flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<span className="text-white font-medium">Проблема ясна?</span>
</div>
<p className="text-xs text-neutral-400 pl-9">Читатель узнал себя в первом абзаце?</p>
</div>
<div className="p-5 border border-white/10 rounded-xl bg-white/[0.02]">
<div className="flex items-center gap-4 mb-2">
<div className="w-5 h-5 rounded border border-neutral-600 flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<span className="text-white font-medium">Результат желанный?</span>
</div>
<p className="text-xs text-neutral-400 pl-9">Понятно, зачем это читать?</p>
</div>
<div className="p-5 border border-white/20 rounded-xl bg-white/5 shadow-inner">
<div className="flex items-center gap-4 mb-2">
<div className="w-5 h-5 rounded bg-white flex items-center justify-center">
<i className="w-3 h-3 text-black" data-lucide="check"></i>
</div>
<span className="text-white font-medium">Экспертность видна?</span>
</div>
<p className="text-xs text-neutral-300 pl-9">Понятно, почему лучше идти к тебе?</p>
</div>
</div>
</div>
<div className="h-20 px-8 flex items-center justify-end border-t border-white/5">
<i className="text-neutral-600 w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>

<div className="slide">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/30 via-black to-black"></div>
<div className="h-16 flex items-center justify-between px-8 pt-4 relative z-10">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500">Финал</span>
<span className="text-[10px] font-mono text-neutral-600">09/09</span>
</div>
<div className="flex-1 px-8 flex flex-col items-center justify-center text-center relative z-10">
<div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-white/[0.02]">
<i className="w-8 h-8 text-white" data-lucide="bookmark"></i>
</div>
<h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">
                Хочешь контент, <br/>который готовит <br/>к покупке?
            </h2>
<p className="text-neutral-400 text-sm mb-10 max-w-[250px]">
                Сохрани этот пост, чтобы не потерять структуру.
            </p>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10"></div>
<p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Нужна помощь?</p>
<div className="inline-flex px-8 py-3 rounded-lg border border-white text-white font-mono font-bold text-lg tracking-tight hover:bg-white hover:text-black transition-colors cursor-pointer">
                ПИШИ «КОНТЕНТ»
            </div>
</div>
<div className="h-20 px-8 flex items-center justify-center border-t border-white/5 relative z-10 bg-black">
<span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-neutral-600">Aura.build Concept</span>
</div>
</div>


    </>
  );
}

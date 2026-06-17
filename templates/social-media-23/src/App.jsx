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
      


<main className="w-full max-w-lg flex flex-col gap-4">

<div className="relative w-full aspect-[4/5] bg-gradient-to-br from-[#2a0a0a] via-[#1a0505] to-black border border-red-900/30 overflow-hidden flex flex-col p-10 text-white rounded-none shadow-2xl">

<div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-6 text-red-500">
<i className="w-5 h-5" data-lucide="alert-circle"></i>
<span className="text-xs uppercase tracking-widest font-medium opacity-80">Слайд 1 (Хук / Экспозиция)</span>
</div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                        Я думал, что со мной что-то не так, потому что не мог выбрать «одну нишу».
                    </h1>
</div>
<div className="space-y-6">
<div className="p-6 bg-red-950/20 border-l-2 border-red-600 backdrop-blur-sm">
<p className="text-lg sm:text-xl font-light text-red-50 leading-relaxed opacity-90">
                            Мне говорили: «Хватит распыляться. Выбери одно дело и долби в точку». И я верил. Я смотрел на узких спецов и чувствовал себя сломанным механизмом.
                        </p>
</div>
<div className="flex justify-end">
<i className="w-12 h-12 text-red-600 opacity-80" data-lucide="crosshair"></i>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/5] bg-[#0f0202] border border-red-900/30 overflow-hidden flex flex-col p-10 text-white rounded-none shadow-2xl">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-950/40 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4 text-red-500 opacity-60">
<span className="text-xs uppercase tracking-widest font-medium">Слайд 2 (Конфликт / Боль)</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-red-500 mb-8">
                    «Ад бесконечного обучения»
                </h2>
<div className="space-y-6">
<p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
                        Я попал в ловушку. Учил дизайн, потом бросал. Учил код, бросал. Маркетинг, тексты, видео...
                    </p>
<hr className="border-red-900/40"/>
<p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
                        Внешне я выглядел как «вечный студент». Внутри я был дофаминовым наркоманом. Я получал кайф от ощущения «я умный», но по факту у меня не было ничего. Ноль результатов. Пустой кошелек.
                    </p>
</div>
<div className="mt-8 flex gap-4 opacity-40">
<i className="w-8 h-8 text-red-400" data-lucide="book-open"></i>
<i className="w-8 h-8 text-red-400" data-lucide="code-2"></i>
<i className="w-8 h-8 text-red-400" data-lucide="pen-tool"></i>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/5] bg-gradient-to-b from-[#1a0505] to-[#2b0808] border border-red-900/30 overflow-hidden flex flex-col p-10 text-white rounded-none shadow-2xl">

<div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(220,38,38,0.15)_0%,transparent_70%)] pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="mb-auto">
<span className="text-xs uppercase tracking-widest font-medium text-red-400 mb-2 block">Слайд 3 (Поворотный момент / Инсайт)</span>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<i className="w-10 h-10 text-red-500 shrink-0 mt-1" data-lucide="zap"></i>
<h2 className="text-3xl font-semibold tracking-tight text-white leading-tight">
                            А потом я понял: они все врут.
                        </h2>
</div>
<div className="bg-black/20 backdrop-blur-md p-6 border border-red-500/20">
<p className="text-lg font-light text-neutral-200 leading-relaxed mb-4">
                            Мир изменился, а нам продолжают впаривать заводские настройки 19-го века. Нас учат быть винтиками (один человек — одна операция).
                        </p>
<p className="text-lg font-light text-neutral-200 leading-relaxed mb-4">
                            Но сейчас винтиков заменяет нейросеть за секунду.
                        </p>
<p className="text-lg font-medium text-white leading-relaxed">
                            Я осознал: моя «проблема» с кучей интересов — это единственное, что нельзя скопировать.
                        </p>
</div>
</div>
<div className="mt-auto"></div>
</div>
</div>

<div className="relative w-full aspect-[4/5] bg-neutral-950 border border-red-900/30 overflow-hidden flex flex-col p-10 text-white rounded-none shadow-2xl">

<div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(#dc2626 1px, transparent 1px), linear-gradient(90deg, #dc2626 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10 h-full flex flex-col justify-center items-start">
<span className="text-xs uppercase tracking-widest font-medium text-red-500 mb-6">Слайд 4 (Суть / Решение)</span>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-8 border-l-4 border-red-600 pl-4">
                    Мне не хватало всего одной вещи.
                </h2>
<div className="space-y-6">
<p className="text-lg font-light text-neutral-300 leading-relaxed">
                        Проблема была не в том, что интересов много. Проблема была в отсутствии <span className="text-white font-medium">Сосуда</span>.
                    </p>
<p className="text-lg font-light text-neutral-300 leading-relaxed">
                        Мне нужно было место, куда можно слить все мои навыки, чтобы они работали вместе, а не мешали друг другу.
                    </p>
<div className="mt-4 p-5 bg-gradient-to-r from-red-950 to-transparent border border-red-900/50 flex items-center gap-4">
<div className="p-2 bg-red-900/30 rounded-none border border-red-500/30">
<i className="w-6 h-6 text-red-400" data-lucide="box"></i>
</div>
<p className="text-lg font-medium text-white leading-relaxed">
                            Этим сосудом стал <span className="text-red-400">Личный Бренд</span>.
                        </p>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/5] bg-[#120303] border border-red-900/30 overflow-hidden flex flex-col p-10 text-white rounded-none shadow-2xl">
<div className="absolute right-0 top-0 w-64 h-64 bg-red-800/10 blur-3xl"></div>
<div className="relative z-10 h-full flex flex-col">
<span className="text-xs uppercase tracking-widest font-medium text-neutral-500 mb-8">Слайд 5 (Как это работает / Продукт)</span>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-8">
                    Как я превратил хаос в систему (Бизнес одного человека).
                </h2>
<div className="flex-grow space-y-6">
<p className="text-lg font-light text-neutral-200 leading-relaxed">
                        Я перестал выбирать. Я стал <span className="text-white font-medium decoration-red-600 decoration-2 underline underline-offset-4">Генералистом</span>.
                    </p>
<ul className="space-y-4">
<li className="flex gap-4 items-start">
<i className="w-5 h-5 text-red-500 mt-1.5 shrink-0" data-lucide="check"></i>
<span className="text-lg font-light text-neutral-300">Мой контент = то, что я изучаю прямо сейчас.</span>
</li>
<li className="flex gap-4 items-start">
<i className="w-5 h-5 text-red-500 mt-1.5 shrink-0" data-lucide="check"></i>
<span className="text-lg font-light text-neutral-300">Мой продукт = мой путь и опыт, упакованный для тех, кто на шаг позади.</span>
</li>
</ul>
<p className="text-lg font-light text-neutral-200 leading-relaxed mt-6 pt-6 border-t border-red-900/30">
                        Я не эксперт в одной теме. Я переводчик идей через призму своего опыта.
                    </p>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/5] bg-gradient-to-tr from-neutral-950 to-[#220505] border border-red-900/30 overflow-hidden flex flex-col p-10 text-white rounded-none shadow-2xl">
<div className="relative z-10 h-full flex flex-col justify-center">
<span className="text-xs uppercase tracking-widest font-medium text-red-500/70 mb-6">Слайд 6 (Развязка / Мораль)</span>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">
                    Специализация — для роботов. Твоя сила — в синтезе.
                </h2>
<div className="space-y-6 text-lg font-light text-neutral-300 leading-relaxed">
<p>
                        Сегодня побеждает не тот, кто лучше всех крутит одну гайку. Побеждает тот, кто умеет соединять несоединимое.
                    </p>
<div className="flex items-center gap-4 py-2">
<i className="w-8 h-8 text-red-500 opacity-80" data-lucide="combine"></i>
<div className="h-px w-20 bg-red-900"></div>
</div>
<p>
                        Да Винчи был художником, инженером и анатомом. И никто не говорил ему «выбери нишу».
                    </p>
<p className="text-white font-medium">
                        Ты живешь во втором Ренессансе. Пользуйся этим.
                    </p>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/5] bg-[#3f0909] border border-red-500/20 overflow-hidden flex flex-col p-10 text-white rounded-none shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-b from-[#1a0505] to-[#450a0a]"></div>
<div className="relative z-10 h-full flex flex-col items-center text-center justify-center">
<span className="text-xs uppercase tracking-widest font-medium text-red-300 opacity-60 mb-8">Слайд 7 (Призыв / CTA)</span>
<h2 className="text-4xl font-semibold tracking-tight text-white mb-8">
                    Перестань себя ломать.
                </h2>
<p className="text-xl font-light text-red-100/90 leading-relaxed mb-10 max-w-sm">
                    Если у тебя куча интересов — тебе не нужно их урезать. Тебе нужно построить свой Сосуд.
                </p>
<div className="w-full bg-white text-red-900 py-6 px-8 flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)] group cursor-pointer transition-transform hover:scale-[1.02]">
<span className="text-xl font-semibold tracking-tight">Начни строить свой «бизнес одного человека» уже сегодня.</span>
<i className="w-6 h-6 text-red-900 mt-2 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</main>


    </>
  );
}

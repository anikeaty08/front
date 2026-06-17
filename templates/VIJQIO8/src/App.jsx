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
      
  lucide.createIcons({strokeWidth:1.5});

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
      

<header className="max-w-6xl mx-auto mb-10">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
    Выберите период посадки и подходящее дерево
  </h1>
</header>

<section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">

<article className="bg-neutral-800/60 border border-neutral-700 rounded-2xl p-6 flex flex-col gap-6">
<header className="flex items-center gap-3">
<div className="w-9 h-9 flex items-center justify-center bg-neutral-800 border border-neutral-700 rounded-xl">
<i className="w-5 h-5 stroke-current text-emerald-400" data-lucide="apple" strokeWidth="1.5"></i>
</div>
<h2 className="text-xl font-semibold tracking-tight">Хотите собирать урожай?</h2>
</header>

<div className="grid sm:grid-cols-2 gap-4">

<div className="bg-neutral-800/40 border border-neutral-700 rounded-xl p-4 flex flex-col gap-2">
<span className="flex items-center gap-1 text-xs text-emerald-300">
<i className="w-4 h-4" data-lucide="sun"></i> Весенняя посадка
        </span>
<p className="text-sm leading-relaxed text-neutral-400">
          • Косточковые и семечковые<br/>
          • Юг: конец марта<br/>
          • Центр: апрель – начало мая<br/>
          • Север: начало – середина мая
        </p>
</div>

<div className="bg-neutral-800/40 border border-neutral-700 rounded-xl p-4 flex flex-col gap-2">
<span className="flex items-center gap-1 text-xs text-blue-300">
<i className="w-4 h-4" data-lucide="cloud-rain"></i> Осенняя посадка
        </span>
<p className="text-sm leading-relaxed text-neutral-400">
          • Зимостойкие яблони, груши<br/>
          • Центр: сер. сент. – сер. окт.<br/>
          • Север: нач. сент. – нач. окт.<br/>
          • Юг: окт. – сер. нояб.
        </p>
</div>
</div>

<div className="border-t border-neutral-700 pt-4 text-sm leading-relaxed text-neutral-400">
<p><strong className="font-medium text-neutral-200">Почва:</strong> суглинок, реже — супесь.</p>
<p><strong className="font-medium text-neutral-200">pH:</strong> косточковые и орехи — нейтральная / слабо-щелочная; яблоня и груша — нейтральная / слабо-кислая; вишня — кислая.</p>
</div>

<footer className="border-t border-neutral-700 pt-4 mt-auto text-xs text-neutral-500 flex items-start gap-2">
<i className="w-4 h-4 flex-shrink-0" data-lucide="info"></i>
      Чтобы определить кислотность, купите индикатор-палочку в садовом магазине и следуйте инструкции.
    </footer>
</article>

<article className="bg-neutral-800/60 border border-neutral-700 rounded-2xl p-6 flex flex-col gap-6">
<header className="flex items-center gap-3">
<div className="w-9 h-9 flex items-center justify-center bg-neutral-800 border border-neutral-700 rounded-xl">
<i className="w-5 h-5 stroke-current text-sky-400" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h2 className="text-xl font-semibold tracking-tight">Больше интересует эстетика?</h2>
</header>

<div className="grid sm:grid-cols-2 gap-4">

<div className="bg-neutral-800/40 border border-neutral-700 rounded-xl p-4 flex flex-col gap-2">
<span className="flex items-center gap-1 text-xs text-emerald-300">
<i className="w-4 h-4" data-lucide="sun"></i> Весенняя посадка
        </span>
<p className="text-sm leading-relaxed text-neutral-400">
          • Берёза<br/>
          • Дуб
        </p>
</div>

<div className="bg-neutral-800/40 border border-neutral-700 rounded-xl p-4 flex flex-col gap-2">
<span className="flex items-center gap-1 text-xs text-blue-300">
<i className="w-4 h-4" data-lucide="cloud-rain"></i> Осенняя посадка
        </span>
<p className="text-sm leading-relaxed text-neutral-400">
          • Хвойные породы: туи, можжевельники<br/>
          • Лиственные: тополь, клён, липа, ольха, ясень, ива
        </p>
</div>
</div>

<div className="border-t border-neutral-700 pt-4 text-sm leading-relaxed text-neutral-400">
<p><strong className="font-medium text-neutral-200">Почва:</strong> суглинок или супесь.</p>
<p><strong className="font-medium text-neutral-200">pH:</strong> хвойные — кислая; лиственные — слабо-кислая или нейтральная.</p>
</div>

<footer className="border-t border-neutral-700 pt-4 mt-auto text-xs text-neutral-500 flex items-start gap-2">
<i className="w-4 h-4 flex-shrink-0" data-lucide="lightbulb"></i>
      Выбирайте породы, которые уже растут в вашей местности, и покупайте саженцы в ближайших питомниках.
    </footer>
</article>
</section>

<section className="max-w-6xl mx-auto mt-10">
<article className="bg-neutral-800/60 border border-neutral-700 rounded-2xl p-6 flex flex-col gap-6">
<header className="flex items-center gap-3">
<div className="w-9 h-9 flex items-center justify-center bg-neutral-800 border border-neutral-700 rounded-xl">
<i className="w-5 h-5 stroke-current text-purple-400" data-lucide="flask-conical" strokeWidth="1.5"></i>
</div>
<h2 className="text-xl font-semibold tracking-tight">Как определить состав почвы</h2>
</header>
<ol className="list-decimal pl-5 space-y-1 text-sm leading-relaxed text-neutral-400">
<li>Возьмите горсть земли.</li>
<li>Смочите её небольшим количеством воды.</li>
<li>Разомните руками до густоты теста.</li>
<li>Слепите шарик с грецкий орех.</li>
<li>Раскатайте из него подобие шнура.</li>
<li>Сверните его в кольцо.</li>
<li>Сравните результат.</li>
</ol>
<p className="border-t border-neutral-700 pt-4 text-xs text-neutral-500">
<strong className="text-neutral-300">Важно!</strong> После того, как вы определились с породами саженцев, удостоверьтесь, что они поладят, и обязательно соблюдайте необходимое расстояние между ними. Чем крупнее будет взрослое растение, тем больше ему понадобится места в будущем.
    </p>
</article>
</section>



    </>
  );
}

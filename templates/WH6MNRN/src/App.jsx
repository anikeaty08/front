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
      
    lucide.createIcons({ strokeWidth: 1.5 });

    const coniferCtx = document.getElementById('coniferChart').getContext('2d');
    const deciduousCtx = document.getElementById('deciduousChart').getContext('2d');

    /* Coniferous growth */
    new Chart(coniferCtx, {
      type: 'line',
      data: {
        labels: ['1 год', '5 лет', '10 лет', '15 лет', '20 лет'],
        datasets: [{
          data: [0.3, 2.1, 5.2, 8.4, 12],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.2)',
          tension: 0.35,
          fill: true
        }]
      },
      options: {
        scales: {
          x: { ticks: { color: '#9ca3af', font: { family: 'Montserrat', size: 10 } }, grid: { display: false } },
          y: { ticks: { color: '#9ca3af', font: { family: 'Montserrat', size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } }
        },
        plugins: { legend: { display: false } },
        responsive: true,
        maintainAspectRatio: false
      }
    });

    /* Deciduous growth */
    new Chart(deciduousCtx, {
      type: 'line',
      data: {
        labels: ['1 год', '5 лет', '10 лет', '15 лет', '20 лет'],
        datasets: [{
          data: [0.5, 3.8, 8.1, 13, 18],
          borderColor: '#34d399',
          backgroundColor: 'rgba(52,211,153,0.2)',
          tension: 0.35,
          fill: true
        }]
      },
      options: {
        scales: {
          x: { ticks: { color: '#9ca3af', font: { family: 'Montserrat', size: 10 } }, grid: { display: false } },
          y: { ticks: { color: '#9ca3af', font: { family: 'Montserrat', size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } }
        },
        plugins: { legend: { display: false } },
        responsive: true,
        maintainAspectRatio: false
      }
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/claritystream-a72K0KUwFoZV82QBzvu52Kai" width="100%"></iframe></div>

<header className="relative z-10">
<nav className="flex items-center justify-between px-6 lg:px-10 pt-5 pb-4">
<a className="flex items-center gap-1" href="#">
<span className="text-base font-semibold tracking-tight font-geist">Arbor</span>
<span className="text-base font-semibold tracking-tight text-indigo-400 font-geist">Peak</span>
</a>
<span className="text-sm text-neutral-400 font-geist hidden sm:inline">Энциклопедия деревьев</span>
</nav>
<div className="h-px bg-white/10"></div>
</header>

<section className="relative z-10 mx-auto max-w-3xl pt-14 lg:pt-20 px-6 lg:px-10 text-center space-y-6 mb-16">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight font-bricolage">Основные группы деревьев</h1>
<p className="text-neutral-400 text-base md:text-lg leading-relaxed font-geist">Узнайте различия между хвойными и лиственными породами и их ролью в экосистемах.</p>
</section>

<main className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 pb-24 grid gap-8 grid-cols-1 md:grid-cols-2">

<section className="bg-white/5 backdrop-blur-lg ring-1 ring-white/10 rounded-3xl p-6 flex flex-col gap-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-indigo-600/20 text-indigo-400 flex items-center justify-center rounded-full">
<i className="w-5 h-5" data-lucide="tree-pine"></i>
</div>
<h2 className="text-lg font-semibold tracking-tight font-geist">Хвойные</h2>
</div>
<p className="text-sm text-neutral-300 font-geist">Такие породы называют вечнозелёными. Игольчатая листва сохраняется круглый год, что помогает им выживать в суровых климатах.</p>
<div>
<h3 className="font-semibold mb-1 tracking-tight font-geist">Популярные виды</h3>
<ul className="text-sm text-neutral-400 list-disc list-inside space-y-1 font-geist">
<li>Сосна обыкновенная</li>
<li>Ель европейская</li>
<li>Кедр сибирский</li>
<li>Пихта белая</li>
</ul>
</div>
<div className="space-y-2">
<h3 className="font-semibold tracking-tight font-geist">Мировое распределение</h3>
<div>
<div className="bg-white/10 h-1.5 rounded-full">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '35%'}}></div>
</div>
<p className="text-xs text-neutral-400 mt-1 font-geist">Около 35 % мировых лесов</p>
</div>
</div>
<div className="space-y-3">
<h3 className="font-semibold tracking-tight font-geist">Темпы роста</h3>
<div className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="relative">
<div>
<canvas height="140" id="coniferChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white/5 backdrop-blur-lg ring-1 ring-white/10 rounded-3xl p-6 flex flex-col gap-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-emerald-600/20 text-emerald-400 flex items-center justify-center rounded-full">
<i className="w-5 h-5" data-lucide="leaf"></i>
</div>
<h2 className="text-lg font-semibold tracking-tight font-geist">Лиственные</h2>
</div>
<p className="text-sm text-neutral-300 font-geist">Сюда входят цветущие и плодовые деревья. Осенью они сбрасывают листву, создавая яркие пейзажи.</p>
<div>
<h3 className="font-semibold mb-1 tracking-tight font-geist">Популярные виды</h3>
<ul className="text-sm text-neutral-400 list-disc list-inside space-y-1 font-geist">
<li>Берёза повислая</li>
<li>Дуб черешчатый</li>
<li>Клён ясенелистный</li>
<li>Яблоня домашняя</li>
</ul>
</div>
<div className="space-y-2">
<h3 className="font-semibold tracking-tight font-geist">Мировое распределение</h3>
<div>
<div className="bg-white/10 h-1.5 rounded-full">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
<p className="text-xs text-neutral-400 mt-1 font-geist">Около 65 % мировых лесов</p>
</div>
</div>
<div className="space-y-3">
<h3 className="font-semibold tracking-tight font-geist">Темпы роста</h3>
<div className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div>
<canvas height="140" id="deciduousChart"></canvas>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}

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



    // Generate stars for background
    const starsContainer = document.getElementById('stars');
    const count = 90;
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 2 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.opacity = Math.random() * 0.8 + 0.2;
      star.style.animationDuration = (Math.random() * 5 + 6) + 's';
      starsContainer.appendChild(star);
    }
  
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
      

<div id="stars"></div>

<div className="nebula" style={{top: `20%`, left: `-10%`}}></div>
<div className="nebula" style={{top: `60%`, left: `60%`}}></div>

<div className="relative min-h-screen flex flex-col justify-center items-center z-20 px-6 py-10">
<header className="mb-10 text-center">
<h1 className="text-4xl md:text-6xl font-extrabold text-blue-200 drop-shadow-lg tracking-wide animate-pulse">
        Снижение за туманностью
      </h1>
<p className="mt-4 text-lg md:text-xl text-blue-100/80">
        Навигатор вашего звездолёта сканирует окрестности туманности и готовит безопасное снижение.
      </p>
</header>
<main className="w-full max-w-xl bg-gradient-to-br from-blue-950/80 via-blue-900/60 to-black/90 rounded-3xl shadow-2xl border border-blue-900/70 p-8 backdrop-blur-md">
<form className="flex flex-col gap-5">
<label className="flex flex-col gap-2">
<span className="text-blue-200 font-bold uppercase tracking-wide">Точка захода</span>
<input className="bg-transparent border-b border-blue-700 text-blue-100 placeholder-blue-400 outline-none px-2 py-2 focus:border-blue-300 transition" placeholder="Введите координаты (например, X:120, Y:44)" type="text" />
</label>
<label className="flex flex-col gap-2">
<span className="text-blue-200 font-bold uppercase tracking-wide">Уровень снижения</span>
<select className="bg-transparent border-b border-blue-700 text-blue-100 outline-none px-2 py-2 focus:border-blue-300 transition">
<option className="bg-blue-950" value="">Выберите уровень</option>
<option className="bg-blue-950" value="smooth">Плавное</option>
<option className="bg-blue-950" value="rapid">Быстрое</option>
<option className="bg-blue-950" value="stealth">Скрытое</option>
</select>
</label>
<button className="mt-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-900 text-blue-50 font-bold tracking-wide py-3 rounded-xl shadow-lg transition hover:from-blue-500 hover:to-indigo-700 hover:scale-105 duration-200" type="submit">
          Начать снижение
        </button>
</form>
</main>
<footer className="mt-14 text-blue-200/60 text-sm text-center opacity-80">
      © 2024 Станция "Глубокий Космос" — Все права защищены
    </footer>
</div>


    </>
  );
}

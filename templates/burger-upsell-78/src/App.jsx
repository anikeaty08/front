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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
        const refuseBtn = document.getElementById('refuse-btn');
        const modal = document.getElementById('april-fools-modal');
        const modalPanel = document.getElementById('modal-panel');
        const closeIcon = document.getElementById('close-icon');
        const closeBtn = document.getElementById('close-btn');
        const backdrop = document.getElementById('modal-backdrop');

        function openModal() {
            modal.classList.remove('hidden');
            // Small delay to ensure the display:block is applied before transitioning opacity/scale
            requestAnimationFrame(() => {
                modal.classList.remove('opacity-0');
                modalPanel.classList.remove('scale-95');
                modalPanel.classList.add('scale-100');
                modal.setAttribute('aria-hidden', 'false');
            });
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalPanel.classList.remove('scale-100');
            modalPanel.classList.add('scale-95');
            modal.setAttribute('aria-hidden', 'true');

            // Wait for transition to finish before hiding completely
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        refuseBtn.addEventListener('click', openModal);
        closeIcon.addEventListener('click', closeModal);
        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);
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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[500px] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<header className="w-full p-6 sm:p-8 flex justify-between items-center z-10 absolute top-0">
<div className="text-xl font-semibold tracking-tighter text-white">Eat&amp;Fit</div>
</header>

<main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 mt-16 sm:mt-0">
<div className="w-full max-w-3xl mx-auto flex flex-col items-center group relative z-10">

<div className="relative w-full aspect-square sm:aspect-[16/10] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]">

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10"></div>

<img alt="Gourmet Burger" className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1500&amp;q=80"/>
</div>

<div className="mt-10 flex flex-col items-center text-center z-20 w-full max-w-xl px-4">
<h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-10">
                Забирайте бургер дополнительно к к вашему рациону!
            </h1>

<div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
<button className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-zinc-950 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-200 active:scale-[0.98]">
<iconify-icon className="text-lg" icon="solar:bag-4-linear" strokeWidth="1.5"></iconify-icon>
                    Заказать
                </button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-zinc-900/50 hover:bg-zinc-800/80 border border-zinc-800 text-zinc-300 rounded-full text-sm font-medium transition-all duration-200 active:scale-[0.98]" id="refuse-btn">
<iconify-icon className="text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Отказаться
                </button>
</div>
</div>
</div>
</main>

<footer className="w-full py-6 text-center text-xs text-zinc-600 font-medium tracking-wide mt-auto">
</footer>

<div aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300 pointer-events-none" id="april-fools-modal">

<div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm pointer-events-auto" id="modal-backdrop"></div>

<div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-sm w-full mx-4 shadow-2xl transform scale-95 transition-all duration-300 pointer-events-auto flex flex-col" id="modal-panel">
<button aria-label="Close modal" className="absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors" id="close-icon">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="mb-6 mt-2">
<h2 className="text-xl font-medium tracking-tight text-white mb-3">Вот это сила воли!</h2>
<p className="text-sm text-zinc-400 leading-relaxed">
                Мы рады, что вы выбираете здоровую еду даже тогда, когда никто не видит.<br/><br/>С 1 апреля 😄
            </p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
<p className="text-xs font-medium text-zinc-500 tracking-wide">Ваш <span className="text-green-500">Eat&amp;Fit!</span></p>
<button className="px-5 py-2 bg-white text-zinc-950 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors active:scale-95" id="close-btn">
                Закрыть
            </button>
</div>
</div>
</div>


    </>
  );
}

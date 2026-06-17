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

      const tabContainer = document.querySelector('[role="tablist"]');
      const tabs = [...tabContainer.querySelectorAll('[role="tab"]')];
      const viewContainer = document.querySelector('[role="group"][aria-label="Режим отображения"]');
      const viewButtons = [...viewContainer.querySelectorAll('button[data-view]')];
      const statusLabel = document.getElementById('statusLabel');

      const activePill = ['bg-white','text-slate-900','shadow-sm','ring-1','ring-slate-200','font-semibold','tracking-tight'];
      const inactivePill = ['text-slate-600','hover:text-slate-800','hover:bg-white/60','font-medium','tracking-tight'];

      function setActiveTab(btn) {
        tabs.forEach(b => {
          b.setAttribute('aria-selected', 'false');
          b.classList.remove(...activePill);
          if (!b.classList.contains('ring-1')) b.classList.add('ring-0'); // no stray ring
          b.classList.add(...inactivePill);
        });
        btn.setAttribute('aria-selected', 'true');
        btn.classList.remove(...inactivePill);
        btn.classList.add(...activePill);
      }

      function setActiveView(btn) {
        viewButtons.forEach(b => {
          b.setAttribute('aria-pressed','false');
          b.classList.remove(...activePill);
          b.classList.add('text-slate-600','hover:text-slate-800','hover:bg-white/60');
        });
        btn.setAttribute('aria-pressed','true');
        btn.classList.remove('text-slate-600','hover:text-slate-800','hover:bg-white/60');
        btn.classList.add(...activePill);
      }

      tabs.forEach(btn => {
        btn.addEventListener('click', () => {
          setActiveTab(btn);
          const currentView = viewButtons.find(v => v.getAttribute('aria-pressed') === 'true')?.dataset.view || 'list';
          statusLabel.textContent = `Показаны: ${btn.dataset.tab} — вид «${currentView === 'list' ? 'Список' : 'Сетка'}»`;
        });
      });

      viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          setActiveView(btn);
          const currentTab = tabs.find(t => t.getAttribute('aria-selected') === 'true')?.dataset.tab || 'актуальные';
          statusLabel.textContent = `Показаны: ${currentTab} — вид «${btn.dataset.view === 'list' ? 'Список' : 'Сетка'}»`;
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
      
<main className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
<header className="mb-5 flex items-center justify-between gap-4">
<h1 className="text-[22px] sm:text-2xl tracking-tight font-semibold">Заявки</h1>
<div className="hidden sm:flex items-center gap-3 text-sm text-slate-500">
<span className="inline-flex items-center gap-1">
<i className="size-4" data-lucide="activity"></i>
            обновлено 2 мин назад
          </span>
</div>
</header>
<section className="flex items-center justify-between gap-4">

<div className="flex-1">
<div className="w-full overflow-x-auto scrollbar-none">
<div aria-label="Статусы заявок" className="inline-flex items-center gap-1 rounded-2xl bg-slate-50 ring-1 ring-slate-200/80 shadow-sm p-1 h-12" role="tablist">

<button aria-selected="true" className="group relative inline-flex items-center gap-2 rounded-xl px-4 h-10 text-[15px] font-semibold tracking-tight bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 transition" data-tab="актуальные" role="tab">
                актуальные
                <span className="text-[11px] font-medium text-slate-400 -translate-y-0.5">97</span>
</button>
<button aria-selected="false" className="group relative inline-flex items-center gap-2 rounded-xl px-4 h-10 text-[15px] font-medium tracking-tight text-slate-600 hover:text-slate-800 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 transition" data-tab="архив" role="tab">
                архив
                <span className="text-[11px] font-medium text-slate-400 -translate-y-0.5">12552</span>
</button>
<button aria-selected="false" className="group relative inline-flex items-center gap-2 rounded-xl px-4 h-10 text-[15px] font-medium tracking-tight text-slate-600 hover:text-slate-800 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 transition" data-tab="отклонены" role="tab">
                отклонены
                <span className="text-[11px] font-medium text-slate-400 -translate-y-0.5">1444</span>
</button>
<button aria-selected="false" className="group relative inline-flex items-center gap-2 rounded-xl px-4 h-10 text-[15px] font-medium tracking-tight text-slate-600 hover:text-slate-800 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 transition" data-tab="успешные сделки" role="tab">
                успешные сделки
                <span className="text-[11px] font-medium text-slate-400 -translate-y-0.5">4</span>
</button>
<button aria-selected="false" className="group relative inline-flex items-center gap-2 rounded-xl px-4 h-10 text-[15px] font-medium tracking-tight text-slate-600 hover:text-slate-800 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 transition" data-tab="все" role="tab">
                все
                <span className="text-[11px] font-medium text-slate-400 -translate-y-0.5">16544</span>
</button>
</div>
</div>
</div>

<div aria-label="Режим отображения" className="shrink-0 inline-flex items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200/80 shadow-sm p-1 h-12" role="group">
<button aria-pressed="true" className="inline-flex items-center justify-center rounded-xl h-10 w-10 bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 transition" data-view="list" title="Список" type="button">
<i className="size-5" data-lucide="list"></i>
</button>
<button aria-pressed="false" className="inline-flex items-center justify-center rounded-xl h-10 w-10 text-slate-600 hover:text-slate-800 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 transition" data-view="grid" title="Сетка" type="button">
<i className="size-5" data-lucide="grid-3x3"></i>
</button>
</div>
</section>

<section className="mt-6" id="content">
<div className="rounded-xl border border-slate-200/70 p-4 sm:p-5">
<div className="flex items-center justify-between gap-3">
<p className="text-[15px] font-medium text-slate-700" id="statusLabel">
              Показаны: актуальные — вид «Список»
            </p>
<span className="hidden sm:inline-flex items-center gap-1 text-[13px] text-slate-500">
<i className="size-4" data-lucide="info"></i>
              подсказка: кликайте по вкладкам и иконкам справа
            </span>
</div>
</div>
</section>
</main>


    </>
  );
}

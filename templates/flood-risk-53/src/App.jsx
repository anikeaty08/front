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



    document.addEventListener('DOMContentLoaded', () => {
      // Render icons
      lucide.createIcons();

      const modal = document.getElementById('docsModal');
      const overlay = document.getElementById('modalOverlay');
      const openBtns = document.querySelectorAll('[data-open-modal]');
      const closeBtns = document.querySelectorAll('[data-close-modal]');

      const openModal = () => {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        // Focus first actionable element
        const first = modal.querySelector('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
        if (first) first.focus();
      };
      const closeModal = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      };

      openBtns.forEach(btn => btn.addEventListener('click', openModal));
      closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
      overlay && overlay.addEventListener('click', closeModal);
      window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

      // Accordions
      const toggleAccordion = (key, btn) => {
        const panel = document.querySelector(`[data-accordion-panel="${key}"]`);
        if (!panel) return;
        const icon = btn.querySelector('[data-lucide="chevron-down"]');
        const isHidden = panel.classList.contains('hidden');
        document.querySelectorAll('[data-accordion-panel]').forEach(p => p !== panel && p.classList.add('hidden'));
        document.querySelectorAll('[data-accordion]').forEach(b => {
          const chevron = b.querySelector('[data-lucide="chevron-down"]');
          if (chevron) chevron.style.transform = 'rotate(0deg)';
        });
        if (isHidden) {
          panel.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
          panel.classList.add('hidden');
          if (icon) icon.style.transform = 'rotate(0deg)';
        }
      };

      document.querySelectorAll('[data-accordion]').forEach(btn => {
        btn.addEventListener('click', () => toggleAccordion(btn.getAttribute('data-accordion'), btn));
      });

      // Open modal from banner
      document.getElementById('openModalBtn')?.addEventListener('click', openModal);
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
      
<main className="mx-auto max-w-6xl p-4 md:p-8">

<div className="mb-6 flex items-center justify-between">
<div>
<h1 className="text-[26px] leading-7 tracking-tight font-semibold">Fiche projet</h1>
<p className="mt-1 text-sm text-gray-600">Synthèse du contexte et pièces à fournir</p>
</div>
<div className="hidden md:flex items-center gap-3 text-sm text-gray-500">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>Parcelle n° A-152 • Nivelles</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<section className="relative overflow-hidden rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50 to-white">
<div className="p-5 md:p-6 flex items-start gap-4">
<div className="shrink-0 rounded-lg bg-amber-100 text-amber-700 p-2 ring-1 ring-amber-200">
<i className="w-5 h-5" data-lucide="alert-triangle"></i>
</div>
<div className="flex-1">
<h2 className="text-[22px] leading-7 tracking-tight font-semibold">Risque d’inondation détecté</h2>
<p className="mt-1.5 text-sm text-gray-700">
                Airplan a identifié un aléa d’inondation sur votre projet. Pour garantir la conformité du dossier, certaines pièces doivent être ajoutées.
              </p>
<div className="mt-4 flex flex-col sm:flex-row items-start gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3.5 py-2.5 text-sm font-medium hover:bg-gray-800 active:bg-gray-900/90 transition" data-open-modal="" id="openModalBtn">
<i className="w-4 h-4" data-lucide="file-warning"></i>
                  Voir les documents requis
                </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
<i className="w-4 h-4" data-lucide="book-open"></i>
                  Ouvrir le guide
                </button>
</div>
</div>
</div>
</section>

<section className="rounded-xl border border-gray-200 bg-white p-5 md:p-6">
<div className="flex items-center gap-2 text-gray-800">
<i className="w-4 h-4" data-lucide="layers"></i>
<h3 className="text-[20px] tracking-tight font-semibold">Contexte réglementaire</h3>
</div>
<p className="mt-2 text-sm text-gray-600">
            Les couches de contexte et contraintes urbanistiques sont listées ici. Utilisez le panneau latéral pour explorer les périmètres et aléas.
          </p>
</section>
</div>

<aside className="lg:col-span-1">
<div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-700" data-lucide="compass"></i>
<p className="text-sm font-medium text-gray-800">Contexte</p>
</div>
<div className="flex items-center gap-1.5">
<button className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-50">+ / −</button>
<button className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 hover:bg-gray-50">Layer</button>
</div>
</div>
<div className="relative aspect-[4/3] bg-gray-100">
<img alt="Aerial preview" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 rounded-md bg-white/90 backdrop-blur px-2 py-1 text-[11px] text-gray-700 ring-1 ring-gray-200">
              Inondations et ruissellement
            </div>
</div>
<div className="px-4 py-3 border-t border-gray-200">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-amber-600 mt-0.5" data-lucide="info"></i>
<p className="text-xs text-gray-600">
                Aléa d’inondation détecté à proximité. Vérifiez la liste des pièces nécessaires.
              </p>
</div>
</div>
</div>
</aside>
</div>
</main>

<div className="hidden fixed inset-0 z-50 items-end sm:items-center justify-center" id="docsModal">
<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" id="modalOverlay"></div>
<section aria-labelledby="docs-title" aria-modal="true" className="relative w-full sm:max-w-2xl sm:rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200" role="dialog">

<header className="flex items-start justify-between gap-3 px-5 py-4 border-b border-gray-200">
<div>
<h2 className="text-[22px] leading-7 tracking-tight font-semibold" id="docs-title">Documents requis</h2>
<p className="mt-0.5 text-sm text-gray-600">Pièces à joindre en cas d’aléa d’inondation</p>
</div>
<button aria-label="Fermer" className="rounded-lg p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition" data-close-modal="">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</header>

<div className="px-5 py-4 space-y-4 max-h-[65vh] overflow-y-auto">

<div className="rounded-lg border border-gray-200">
<button className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-gray-50 transition" data-accordion="overflow">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center rounded-md bg-blue-50 text-blue-700 ring-1 ring-blue-200 p-1.5">
<i className="w-4 h-4" data-lucide="waves"></i>
</span>
<p className="font-medium text-gray-900">Si aléa d’inondation par débordement</p>
</div>
<i aria-hidden="true" className="w-4 h-4 text-gray-500 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 pt-2 space-y-3" data-accordion-panel="overflow">
<div>
<p className="text-sm font-medium text-gray-800">À joindre à votre dossier :</p>
<ul className="mt-1.5 space-y-2 text-sm text-gray-700">
<li className="flex gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="dot"></i>
<span>Une note ou un rapport démontrant que le projet n’aggrave pas la situation existante (étude hydro, imperméabilisation, mesures compensatoires).</span>
</li>
<li className="flex gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="dot"></i>
<span>Un plan à l’échelle 1/500 ou 1/1000 (périmètre de 100 m) indiquant les zones d’aléa, remblais/déblais, bâtiments et berges.</span>
</li>
<li className="flex gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="dot"></i>
<span>Une coupe transversale du fond de parcelle à la berge opposée (1/500 si possible).</span>
</li>
</ul>
</div>
<p className="flex items-start gap-2 text-xs text-gray-600">
<i className="w-4 h-4 mt-0.5" data-lucide="book-open"></i>
<span>Consultez les pages 25, 26, 77–78 du guide pour le format attendu.</span>
</p>
</div>
</div>

<div className="rounded-lg border border-gray-200">
<button className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-gray-50 transition" data-accordion="runoff">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center rounded-md bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 p-1.5">
<i className="w-4 h-4" data-lucide="cloud-rain"></i>
</span>
<p className="font-medium text-gray-900">Si aléa d’inondation par ruissellement</p>
</div>
<i aria-hidden="true" className="w-4 h-4 text-gray-500 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 pt-2 space-y-3 hidden" data-accordion-panel="runoff">
<div>
<p className="text-sm font-medium text-gray-800">À joindre à votre dossier :</p>
<ul className="mt-1.5 space-y-2 text-sm text-gray-700">
<li className="flex gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="dot"></i>
<span>Une note ou un rapport prouvant que le projet n’aggrave pas la situation existante.</span>
</li>
<li className="flex gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="dot"></i>
<span>Un plan (1/500 ou 1/1000) sur 100 m indiquant les axes de ruissellement, bâtiments, remblais, vallons secs et points d’exutoire.</span>
</li>
</ul>
</div>
<p className="flex items-start gap-2 text-xs text-gray-600">
<i className="w-4 h-4 mt-0.5" data-lucide="book-open"></i>
<span>Consultez la page 25 pour la règle d’adjacence et les pages 32–33 pour la matrice aléa/vulnérabilité.</span>
</p>
</div>
</div>

<div className="rounded-lg border border-gray-200">
<button className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-gray-50 transition" data-accordion="more">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center rounded-md bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200 p-1.5">
<i className="w-4 h-4" data-lucide="help-circle"></i>
</span>
<p className="font-medium text-gray-900">En savoir plus</p>
</div>
<i aria-hidden="true" className="w-4 h-4 text-gray-500 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-4 pb-4 pt-2 space-y-3 hidden" data-accordion-panel="more">
<p className="text-sm text-gray-700">
              Airplan vous aide à déterminer si l’implantation du projet est adéquate selon la matrice aléa/vulnérabilité.
              Exemple : “L’implantation est jugée conforme pour un aléa faible et une vulnérabilité moyenne.”
            </p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3.5 py-2.5 text-sm font-medium hover:bg-gray-800 transition" href="#">
<i className="w-4 h-4" data-lucide="grid"></i>
                Consulter la matrice de décision
              </a>
<button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
<i className="w-4 h-4" data-lucide="download"></i>
                Exporter les exigences
              </button>
</div>
</div>
</div>
</div>

<div className="px-5 py-4 border-t border-gray-200 flex items-center justify-between">
<p className="text-xs text-gray-500">Assurez-vous que les plans sont lisibles et à l’échelle indiquée.</p>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition" data-close-modal="">
            Annuler
          </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3.5 py-2.5 text-sm font-medium hover:bg-gray-800 transition" data-close-modal="">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
            Compris
          </button>
</div>
</div>
</section>
</div>


    </>
  );
}

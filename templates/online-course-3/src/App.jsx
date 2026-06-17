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



        const pages = [
            {
                id: 1,
                title: "Introduction au Business",
                content: `
                    <div class="editable-block mb-6" contenteditable="true">
                        <h1 class="text-4xl font-bold tracking-tight text-zinc-900 outline-none">Introduction au Business</h1>
                    </div>
                    <div class="editable-block mb-8 text-zinc-600 leading-relaxed outline-none" contenteditable="true">
                        <p>Bienvenue dans cette première leçon. Nous allons voir ensemble les fondamentaux nécessaires pour lancer votre activité en ligne.</p>
                    </div>
                    <div class="group relative mb-8 rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center shadow-lg ring-1 ring-zinc-900/5">
                        <div class="bg-center opacity-50 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop')] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
                        <button class="relative z-10 w-16 h-16 rounded-full bg-orange-600/90 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer border border-white/20 hover:bg-orange-500">
                            <iconify-icon icon="lucide:play" width="24" fill="white"></iconify-icon>
                        </button>
                        <div class="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded backdrop-blur">12:40 • Vidéo HD</div>
                    </div>
                    <div class="editable-block mb-6 text-zinc-600 leading-relaxed outline-none" contenteditable="true">
                        <h2 class="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Points clés à retenir</h2>
                        <ul class="list-disc pl-5 space-y-1 marker:text-orange-500">
                            <li>Identifier son marché cible avec précision.</li>
                            <li>Ne pas <span class="font-semibold text-zinc-900 bg-orange-100 px-1 rounded">sous-estimer</span> la phase de recherche.</li>
                            <li>Créer une offre irrésistible (<i>The Grand Slam Offer</i>).</li>
                        </ul>
                    </div>
                `
            },
            {
                id: 2,
                title: "Mindset Entrepreneur",
                content: `
                    <div class="editable-block mb-6" contenteditable="true">
                        <h1 class="text-4xl font-bold tracking-tight text-zinc-900 outline-none">Le Mindset de l'Entrepreneur</h1>
                    </div>
                    <div class="editable-block mb-8 text-zinc-600 leading-relaxed outline-none" contenteditable="true">
                        <p class="mb-4">Avant de parler stratégie, parlons psychologie. 80% de votre succès dépendra de votre capacité à encaisser les échecs.</p>
                        <div class="pl-4 border-l-4 border-orange-500 italic text-zinc-700 text-lg my-6">
                            "Si vous n'êtes pas prêt à échouer, vous n'êtes pas prêt à réussir."
                        </div>
                        <p>Dans cette vidéo, j'analyse les traits communs des fondateurs qui réussissent versus ceux qui abandonnent.</p>
                    </div>
                    <div class="group relative mb-8 rounded-xl overflow-hidden bg-zinc-900 aspect-video flex items-center justify-center shadow-lg ring-1 ring-zinc-900/5">
                        <div class="bg-center opacity-60 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop')] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
                         <button class="relative z-10 w-16 h-16 rounded-full bg-orange-600/90 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer border border-white/20 hover:bg-orange-500">
                            <iconify-icon icon="lucide:play" width="24" fill="white"></iconify-icon>
                        </button>
                         <div class="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded backdrop-blur">45:12 • Masterclass</div>
                    </div>
                `
            },
            {
                id: 3,
                title: "Définir sa niche",
                content: `
                    <div class="editable-block mb-6" contenteditable="true">
                        <h1 class="text-4xl font-bold tracking-tight text-zinc-900 outline-none">Définir sa Niche</h1>
                    </div>
                    <div class="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-8">
                        <div class="flex items-start gap-3">
                            <iconify-icon icon="lucide:info" class="text-orange-500 mt-1" width="20"></iconify-icon>
                            <div>
                                <h3 class="text-sm font-bold text-orange-900 mb-1">Exercice Pratique</h3>
                                <p class="text-sm text-orange-800/80">Remplissez le PDF joint à cette leçon avant de continuer la lecture.</p>
                            </div>
                        </div>
                    </div>
                    <div class="editable-block mb-8 text-zinc-600 leading-relaxed outline-none" contenteditable="true">
                        <h2 class="text-xl font-semibold text-zinc-900 mb-3">La méthode des 3 cercles</h2>
                        <p class="mb-4">Pour trouver une niche rentable, vous devez trouver l'intersection entre :</p>
                        <ol class="list-decimal pl-5 space-y-2 marker:text-orange-600 marker:font-bold">
                            <li>Ce que vous aimez faire (Passion).</li>
                            <li>Ce que vous savez faire (Compétence).</li>
                            <li>Ce que les gens sont prêts à payer (Marché).</li>
                        </ol>
                    </div>
                `
            }
        ];

        function switchPage(id) {
            // Update Sidebar UI
            document.querySelectorAll('[id^="nav-"]').forEach(el => {
                // Reset to inactive style
                el.className = "group flex items-start gap-2 p-2 rounded-lg hover:bg-zinc-100 border border-transparent hover:border-zinc-200 cursor-pointer transition-all";
                // Reset Icon Container inside
                const iconContainer = el.querySelector('div.flex-1 > div:first-child');
                if(iconContainer) {
                    iconContainer.className = "h-16 w-full bg-zinc-100 rounded mb-1.5 flex items-center justify-center text-zinc-300 group-hover:text-zinc-400";
                    // If page has specific icons, restore them (simplified logic for demo)
                    if(el.id === 'nav-1') iconContainer.innerHTML = '<iconify-icon icon="lucide:layout" width="16"></iconify-icon>'; 
                    // Note: In a real app we would store the icon type in data attribute
                }
                // Reset Text color
                const title = el.querySelector('span.truncate');
                if(title) {
                    title.className = "text-xs font-medium text-zinc-600 truncate block";
                    title.classList.remove('font-semibold', 'text-zinc-900');
                }
                 // Reset Number color
                const num = el.querySelector('span.text-[10px]');
                if(num) num.className = "text-[10px] font-bold text-zinc-400 mt-1";
            });

            // Set Active Style
            const activeEl = document.getElementById('nav-' + id);
            if (activeEl) {
                activeEl.className = "group flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-300 shadow-sm cursor-pointer relative transition-all";
                
                // Update Number
                activeEl.querySelector('span.text-[10px]').className = "text-[10px] font-bold text-orange-500 mt-1";
                
                // Update Title
                const title = activeEl.querySelector('span.truncate');
                title.className = "text-xs font-semibold text-zinc-900 truncate block";

                // Update Icon Container (Visual Active State)
                const iconContainer = activeEl.querySelector('div.flex-1 > div:first-child');
                iconContainer.className = "h-16 w-full bg-orange-50/50 border border-orange-100 rounded mb-1.5 flex flex-col p-1 overflow-hidden";
                // Fake Content Lines for visual representation
                iconContainer.innerHTML = `
                     <div class="h-1 w-2/3 bg-orange-200 rounded-full mb-1"></div>
                     <div class="h-1 w-full bg-orange-100 rounded-full mb-0.5"></div>
                     <div class="h-1 w-4/5 bg-orange-100 rounded-full"></div>
                `;
            }

            // Update Content
            const pageData = pages.find(p => p.id === id);
            const contentContainer = document.getElementById('page-content');
            
            // Fade out effect
            contentContainer.style.opacity = '0.5';
            
            setTimeout(() => {
                // Determine Cover (Optional - keeping the generic one for consistency or removing)
                const coverHTML = `
                    <div class="group relative w-full h-40 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg mb-8 flex items-center justify-center overflow-hidden border border-dashed border-transparent hover:border-orange-300 transition-all">
                        <div class="text-center">
                            <iconify-icon icon="lucide:image" width="24" class="text-orange-200 mb-2 mx-auto"></iconify-icon>
                            <span class="text-xs text-orange-300 font-medium">Ajouter une couverture</span>
                        </div>
                         <button class="absolute top-2 right-2 bg-white/80 backdrop-blur text-xs px-2 py-1 rounded text-zinc-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 hover:bg-white hover:text-orange-600">
                            <iconify-icon icon="lucide:upload" width="12"></iconify-icon> Changer
                        </button>
                    </div>
                `;

                contentContainer.innerHTML = coverHTML + pageData.content;
                
                // Fade in
                contentContainer.style.opacity = '1';
                contentContainer.classList.remove('fade-in');
                void contentContainer.offsetWidth; // trigger reflow
                contentContainer.classList.add('fade-in');
            }, 100);
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
      

<header className="h-14 bg-white border-b border-zinc-200 flex items-center justify-between px-4 shrink-0 z-30">
<div className="flex items-center gap-4">
<a className="text-zinc-500 hover:text-zinc-900 transition-colors p-1 hover:bg-zinc-100 rounded-md" href="#">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<div className="h-6 w-px bg-zinc-200"></div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-semibold text-sm tracking-tight text-zinc-900">Business Mastery 101</span>
<span className="text-[10px] bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded border border-orange-200 font-medium">Édition</span>
</div>
<span className="text-[10px] text-zinc-400">Dernière sauvegarde : 10:42</span>
</div>
</div>

<div className="hidden md:flex items-center gap-1 bg-zinc-50 border border-zinc-200 rounded-lg p-1 shadow-sm">
<button className="p-1.5 text-zinc-600 hover:text-orange-600 hover:bg-white hover:shadow-sm rounded transition-all" title="Undo">
<iconify-icon icon="lucide:undo-2" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-zinc-400 hover:text-orange-600 hover:bg-white hover:shadow-sm rounded transition-all mr-2" title="Redo">
<iconify-icon icon="lucide:redo-2" width="16"></iconify-icon>
</button>
<div className="w-px h-4 bg-zinc-200 mx-1"></div>
<div className="relative group">
<button className="flex items-center gap-1 p-1.5 text-xs font-medium text-zinc-700 hover:bg-white hover:shadow-sm rounded w-24 justify-between">
                    Normal
                    <iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</button>
</div>
<div className="w-px h-4 bg-zinc-200 mx-1"></div>
<button className="p-1.5 text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded transition-all font-semibold">
<iconify-icon icon="lucide:bold" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded transition-all italic">
<iconify-icon icon="lucide:italic" width="16"></iconify-icon>
</button>
<div className="w-px h-4 bg-zinc-200 mx-1"></div>
<button className="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded transition-all">
<iconify-icon icon="lucide:link" width="16"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-3">
<div className="hidden lg:flex items-center -space-x-2 mr-2">
<div className="w-7 h-7 rounded-full bg-orange-600 border-2 border-white text-white text-[10px] flex items-center justify-center font-bold">S</div>
<div className="w-7 h-7 rounded-full bg-zinc-800 border-2 border-white text-white text-[10px] flex items-center justify-center font-bold">M</div>
</div>
<button className="text-zinc-500 hover:text-orange-600 transition-colors">
<iconify-icon icon="lucide:play" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-medium px-4 py-2 rounded-lg shadow-sm transition-all active:scale-[0.98]">
                Publier
            </button>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="hidden lg:flex w-60 flex-col border-r border-zinc-200 bg-zinc-50 overflow-y-auto z-20">
<div className="p-3 border-b border-zinc-200 flex justify-between items-center sticky top-0 bg-zinc-50 z-10">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Plan du cours</span>
<button className="text-zinc-400 hover:text-orange-600">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<div className="p-2 space-y-1" id="sidebar-list">

<div className="px-2 py-2 mt-2 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="lucide:chevron-down" width="12"></iconify-icon>
<span className="text-xs font-semibold text-zinc-900">Module 1 : Les bases</span>
</div>

<div className="group flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-300 shadow-sm cursor-pointer relative transition-all" id="nav-1" onclick="switchPage(1)">
<span className="text-[10px] font-bold text-orange-500 mt-1">1</span>
<div className="flex-1 min-w-0">
<div className="h-16 w-full bg-orange-50/50 border border-orange-100 rounded mb-1.5 flex flex-col p-1 overflow-hidden">
<div className="h-1 w-2/3 bg-orange-200 rounded-full mb-1"></div>
<div className="h-1 w-full bg-orange-100 rounded-full mb-0.5"></div>
<div className="h-1 w-4/5 bg-orange-100 rounded-full"></div>
</div>
<span className="text-xs font-semibold text-zinc-900 truncate block">Introduction</span>
</div>
</div>

<div className="group flex items-start gap-2 p-2 rounded-lg hover:bg-zinc-100 border border-transparent hover:border-zinc-200 cursor-pointer transition-all" id="nav-2" onclick="switchPage(2)">
<span className="text-[10px] font-bold text-zinc-400 mt-1">2</span>
<div className="flex-1 min-w-0">
<div className="h-16 w-full bg-zinc-100 rounded mb-1.5 flex items-center justify-center text-zinc-300 group-hover:text-zinc-400">
<iconify-icon icon="lucide:video" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-600 truncate block">Mindset Entrepreneur</span>
</div>
</div>

<div className="group flex items-start gap-2 p-2 rounded-lg hover:bg-zinc-100 border border-transparent hover:border-zinc-200 cursor-pointer transition-all" id="nav-3" onclick="switchPage(3)">
<span className="text-[10px] font-bold text-zinc-400 mt-1">3</span>
<div className="flex-1 min-w-0">
<div className="h-16 w-full bg-zinc-100 rounded mb-1.5 flex items-center justify-center text-zinc-300 group-hover:text-zinc-400">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-600 truncate block">Définir sa niche</span>
</div>
</div>

<div className="px-2 py-2 mt-4 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="lucide:chevron-right" width="12"></iconify-icon>
<span className="text-xs font-semibold text-zinc-500">Module 2 : Vente</span>
</div>
<button className="w-full mt-2 py-3 border-2 border-dashed border-zinc-200 rounded-lg flex items-center justify-center gap-2 text-zinc-400 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
<iconify-icon icon="lucide:plus-circle" width="16"></iconify-icon>
<span className="text-xs font-medium">Ajouter une page</span>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto flex lg:p-12 cursor-text bg-zinc-100/50 pt-8 pr-8 pb-8 pl-8 relative justify-center">

<div className="min-h-[1100px] lg:p-16 bg-white w-full max-w-[800px] border-zinc-200 border rounded-sm pt-12 pr-12 pb-12 pl-12 relative shadow-sm fade-in" id="editor-canvas">

<div id="page-content">

<div className="group relative w-full h-40 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg mb-8 flex items-center justify-center overflow-hidden border border-dashed border-transparent hover:border-orange-300 transition-all">
<div className="text-center">
<iconify-icon className="text-orange-200 mb-2 mx-auto" icon="lucide:image" width="24"></iconify-icon>
<span className="text-xs text-orange-300 font-medium">Ajouter une couverture</span>
</div>
<button className="absolute top-2 right-2 bg-white/80 backdrop-blur text-xs px-2 py-1 rounded text-zinc-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 hover:bg-white hover:text-orange-600">
<iconify-icon icon="lucide:upload" width="12"></iconify-icon> Changer
                        </button>
</div>

<div className="editable-block mb-6" contenteditable="true">
<h1 className="text-4xl font-bold tracking-tight text-zinc-900 outline-none placeholder-zinc-300">Introduction au Business</h1>
</div>

<div className="editable-block mb-8 text-zinc-600 leading-relaxed outline-none" contenteditable="true">
<p className="">Bienvenue dans cette première leçon. Nous allons voir ensemble les fondamentaux nécessaires pour lancer votre activité en ligne.</p>
</div>

<div className="group relative mb-8 rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center shadow-lg ring-1 ring-zinc-900/5">
<div className="bg-center opacity-50 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<button className="relative z-10 w-16 h-16 rounded-full bg-orange-600/90 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer border border-white/20 hover:bg-orange-500">
<iconify-icon fill="white" icon="lucide:play" width="24"></iconify-icon>
</button>
<div className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded backdrop-blur">12:40 • Vidéo HD</div>
</div>

<div className="editable-block mb-6 text-zinc-600 leading-relaxed outline-none" contenteditable="true">
<h2 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Points clés à retenir</h2>
<ul className="list-disc pl-5 space-y-1 marker:text-orange-500">
<li>Identifier son marché cible avec précision.</li>
<li>Ne pas <span className="font-semibold text-zinc-900 bg-orange-100 px-1 rounded">sous-estimer</span> la phase de recherche.</li>
<li>Créer une offre irrésistible (<i>The Grand Slam Offer</i>).</li>
</ul>
</div>
</div>

<div className="group relative py-4 flex items-center justify-center mt-8">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-zinc-200 group-hover:border-orange-200 transition-colors"></div>
</div>
<div className="relative flex justify-center">
<button className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-1.5 text-xs font-medium text-zinc-500 shadow-sm hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 focus:outline-none transition-all">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
<span>Ajouter un bloc</span>
</button>
</div>
</div>
</div>
<div className="h-20"></div>
</main>

<aside className="hidden xl:flex w-80 flex-col border-l border-zinc-200 bg-zinc-50 z-20">
<div className="flex border-b border-zinc-200 bg-white">
<button className="flex-1 py-3 text-xs font-semibold text-orange-600 border-b-2 border-orange-600">Insérer</button>
<button className="flex-1 py-3 text-xs font-medium text-zinc-500 hover:text-zinc-900">Style</button>
<button className="flex-1 py-3 text-xs font-medium text-zinc-500 hover:text-zinc-900">Paramètres</button>
</div>
<div className="flex-1 overflow-y-auto p-5">
<div className="mb-8">
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-3">Médias</h3>
<div className="grid grid-cols-2 gap-3">
<button className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:border-orange-300 hover:shadow-md transition-all group">
<iconify-icon className="text-zinc-400 group-hover:text-orange-500" icon="lucide:image" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900">Image</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:border-orange-300 hover:shadow-md transition-all group">
<iconify-icon className="text-zinc-400 group-hover:text-orange-500" icon="lucide:video" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900">Vidéo</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:border-orange-300 hover:shadow-md transition-all group">
<iconify-icon className="text-zinc-400 group-hover:text-orange-500" icon="lucide:mic" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900">Audio</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:border-orange-300 hover:shadow-md transition-all group">
<iconify-icon className="text-zinc-400 group-hover:text-orange-500" icon="lucide:file" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900">Fichier</span>
</button>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-3">Intéractif</h3>
<div className="grid grid-cols-1 gap-2">
<button className="flex items-center gap-3 p-3 bg-orange-50 border border-orange-100 rounded-lg hover:border-orange-300 hover:shadow-sm transition-all text-left">
<iconify-icon className="text-orange-600" icon="lucide:help-circle" width="20"></iconify-icon>
<div>
<span className="text-xs font-bold text-orange-900 block">Quiz / Test</span>
<span className="text-[10px] text-orange-600/80">Valider les connaissances</span>
</div>
</button>
<button className="flex items-center gap-3 p-3 bg-zinc-50 border border-zinc-200 rounded-lg hover:border-zinc-300 hover:shadow-sm transition-all text-left">
<iconify-icon className="text-zinc-600" icon="lucide:download" width="20"></iconify-icon>
<div>
<span className="text-xs font-bold text-zinc-900 block">Ressource</span>
<span className="text-[10px] text-zinc-500">PDF, Excel à télécharger</span>
</div>
</button>
</div>
</div>
</div>
<div className="p-4 border-t border-zinc-200 bg-white mt-auto">
<div className="flex items-center justify-between text-xs text-zinc-500">
<span>Mots: 452</span>
<span>Modifié il y a 2m</span>
</div>
</div>
</aside>
</div>



    </>
  );
}

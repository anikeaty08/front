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



        // --- Data & Configuration ---
        
        const navItems = [
            { id: 'home', label: 'Home' },
            { id: 'start', label: 'Start' },
            { id: 'learn', label: 'Lernweg' },
            { id: 'forum', label: 'Forum' },
            { id: 'library', label: 'Bibliothek' },
            { id: 'login', label: 'Login' }
        ];

        const contentData = {
            'home': {
                type: 'hero',
                content: `
                    <div class="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
                        <!-- Background Effects -->
                        <div class="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-[#122421] via-[#0f2e28] to-[#0a1f1b] z-0"></div>
                        
                        <!-- Decorative Abstract Icon -->
                        <div class="absolute right-[-10%] bottom-[-10%] opacity-5 pointer-events-none rotate-12">
                            <iconify-icon icon="solar:lotus-linear" width="800" height="800" style="color: #6EE7B7;"></iconify-icon>
                        </div>

                        <!-- Hero Content -->
                        <div class="relative z-10 max-w-6xl mx-auto px-6 w-full pb-20 md:pb-0">
                            <div class="max-w-3xl">
                                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm mb-8 backdrop-blur-sm">
                                    <span class="flex h-2 w-2 relative">
                                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    Neue Saison gestartet
                                </div>
                                <h1 class="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                                    Dein Garten.<br/>
                                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-500">Kein Platzproblem.</span>
                                </h1>
                                <p class="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light max-w-2xl">
                                    Die erste strukturierte Akademie für Urban Gardening. Verwandle deinen Balkon oder Fenstersims in ein produktives Ökosystem.
                                </p>
                                <div class="flex flex-col sm:flex-row gap-4">
                                    <button onclick="navigateTo('start')" class="bg-white text-[#122421] px-8 py-4 rounded-[4px] font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
                                        Kostenlos Starten <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform" width="20"></iconify-icon>
                                    </button>
                                    <button onclick="navigateTo('learn')" class="border border-white/20 text-white px-8 py-4 rounded-[4px] font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                                        Kursübersicht <iconify-icon icon="solar:list-linear" width="20"></iconify-icon>
                                    </button>
                                </div>
                                
                                <!-- Stats -->
                                <div class="grid grid-cols-3 gap-8 mt-16 border-t border-white/10 pt-8 max-w-lg">
                                    <div>
                                        <div class="text-2xl font-bold text-white mb-1">50+</div>
                                        <div class="text-sm text-gray-500">Pflanzenarten</div>
                                    </div>
                                    <div>
                                        <div class="text-2xl font-bold text-white mb-1">6</div>
                                        <div class="text-sm text-gray-500">Lern-Phasen</div>
                                    </div>
                                    <div>
                                        <div class="text-2xl font-bold text-white mb-1">100%</div>
                                        <div class="text-sm text-gray-500">Bio-Anbau</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            'start': {
                title: 'Start',
                parent: 'home',
                content: `
                    <div class="max-w-3xl">
                        <span class="text-emerald-600 font-semibold tracking-wider text-xs uppercase mb-3 block">Onboarding</span>
                        <h1 class="text-4xl font-bold mb-8">Der Micro-Garten Ansatz</h1>
                        
                        <div class="prose prose-lg text-slate-600 mb-12">
                            <p class="text-xl leading-relaxed font-light">
                                Wir haben Gärtnern radikal vereinfacht. Statt Intuition setzen wir auf Systeme. 
                                Statt Fläche nutzen wir Effizienz.
                            </p>
                        </div>

                        <div class="space-y-4">
                            ${[
                                {title: '1. Analyse', text: 'Wir scannen deinen Standort auf Licht und Wind.', icon: 'solar:ruler-pen-linear'},
                                {title: '2. Setup', text: 'Auswahl der perfekten Gefäße für dein Platzangebot.', icon: 'solar:box-linear'},
                                {title: '3. Routine', text: 'Ein Pflegeplan, der in 5 Minuten pro Tag passt.', icon: 'solar:clock-circle-linear'}
                            ].map(item => `
                                <div class="flex items-start gap-5 p-6 border border-gray-100 rounded-lg bg-gray-50/50 hover:bg-white hover:shadow-sm hover:border-emerald-100 transition-all cursor-default">
                                    <div class="text-emerald-600 bg-white p-3 rounded-md shadow-sm border border-gray-100">
                                        <iconify-icon icon="${item.icon}" width="24"></iconify-icon>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold mb-1">${item.title}</h3>
                                        <p class="text-slate-500 text-sm leading-relaxed">${item.text}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        <div class="mt-12 p-8 bg-[#122421] rounded-lg text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div>
                                <h4 class="font-semibold text-lg mb-1">Bereit für Phase 1?</h4>
                                <p class="text-gray-400 text-sm">Starte direkt mit der Standortanalyse.</p>
                            </div>
                            <button onclick="navigateTo('learn')" class="bg-white text-[#122421] px-6 py-3 rounded-[4px] font-semibold hover:bg-emerald-50 transition-colors flex items-center gap-2 whitespace-nowrap">
                                Zum Lernweg <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                            </button>
                        </div>
                    </div>
                `
            },
            'learn': {
                title: 'Lernweg',
                parent: 'home',
                content: `
                    <div class="flex justify-between items-end mb-10 border-b border-gray-100 pb-8">
                        <div>
                            <h1 class="text-3xl md:text-4xl font-bold mb-4">Lernweg</h1>
                            <p class="text-slate-500">Das 6-Phasen Programm zur Ernte.</p>
                        </div>
                        <div class="hidden md:block text-right">
                            <div class="text-sm font-semibold text-emerald-600 mb-1">Gesamtfortschritt</div>
                            <div class="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-emerald-500 w-[0%]"></div>
                            </div>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${[
                            {id: 'learn_step1', title: 'Phase 1: Grundlagen', desc: 'Raum-Analyse & Licht.'},
                            {id: 'learn_step2', title: 'Phase 2: Containers', desc: 'Töpfe, Erde & Drainage.'},
                            {id: 'learn_step3', title: 'Phase 3: Auswahl', desc: 'Die besten Sorten.'},
                            {id: 'learn_step4', title: 'Phase 4: Anbau', desc: 'Pflanztechniken.'},
                            {id: 'learn_step5', title: 'Phase 5: Pflege', desc: 'Dünger & Schutz.'},
                            {id: 'learn_step6', title: 'Phase 6: Ernte', desc: 'Verarbeitung & Lagerung.'}
                        ].map((step, i) => `
                            <button onclick="navigateTo('${step.id}')" class="group flex flex-col text-left p-6 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all bg-white h-full relative overflow-hidden">
                                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all">
                                    <iconify-icon icon="solar:leaf-linear" width="60" height="60"></iconify-icon>
                                </div>
                                <div class="flex items-center justify-between w-full mb-4">
                                    <span class="text-[10px] font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 px-2 py-1 rounded-sm border border-emerald-100">Modul 0${i+1}</span>
                                </div>
                                <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors pr-8">${step.title}</h3>
                                <p class="text-sm text-slate-500 leading-relaxed">${step.desc}</p>
                                <div class="mt-auto pt-6 flex items-center text-xs font-semibold text-slate-400 group-hover:text-emerald-600 transition-colors">
                                    STARTEN <iconify-icon icon="solar:alt-arrow-right-linear" class="ml-1"></iconify-icon>
                                </div>
                            </button>
                        `).join('')}
                    </div>
                `
            },
            'forum': {
                title: 'Forum',
                parent: 'home',
                content: `
                    <div class="flex items-center justify-between mb-8">
                        <h1 class="text-3xl font-bold">Community</h1>
                        <button class="bg-[#122421] text-white px-5 py-2.5 rounded-[4px] text-sm font-semibold hover:bg-opacity-90 flex items-center gap-2">
                            <iconify-icon icon="solar:pen-new-square-linear"></iconify-icon> Beitrag
                        </button>
                    </div>
                    
                    <div class="space-y-4">
                        ${[1,2,3].map(i => `
                        <div class="p-6 bg-white border border-gray-200 rounded-lg hover:border-emerald-200 transition-colors cursor-pointer group">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-base font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                    ${i === 1 ? 'Welche Tomatensorte für Nordbalkon?' : i === 2 ? 'Mehltau natürlich bekämpfen' : 'Winterharte Kräuter für Anfänger'}
                                </h3>
                                <span class="text-xs font-medium bg-gray-100 text-gray-500 px-2 py-1 rounded">Frage</span>
                            </div>
                            <p class="text-sm text-slate-500 mb-4 line-clamp-1">Hallo zusammen, ich habe dieses Jahr zum ersten Mal versucht auf meinem kleinen Balkon...</p>
                            <div class="flex items-center gap-6 text-xs text-slate-400 font-medium">
                                <span class="flex items-center gap-1.5"><iconify-icon icon="solar:user-circle-linear" width="14"></iconify-icon> User${i*82}</span>
                                <span class="flex items-center gap-1.5"><iconify-icon icon="solar:chat-line-linear" width="14"></iconify-icon> ${i*4} Antworten</span>
                                <span>vor ${i} Std.</span>
                            </div>
                        </div>
                        `).join('')}
                    </div>
                `
            },
            'library': {
                title: 'Bibliothek',
                parent: 'home',
                content: `
                    <h1 class="text-3xl font-bold mb-8">Bibliothek</h1>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="p-8 border border-gray-200 rounded-lg flex items-start gap-4 hover:shadow-sm transition-all">
                            <div class="p-3 bg-emerald-50 text-emerald-600 rounded-lg"><iconify-icon icon="solar:book-bookmark-linear" width="24"></iconify-icon></div>
                            <div>
                                <h3 class="font-bold text-lg mb-2">Pflanzen-Lexikon</h3>
                                <p class="text-sm text-slate-500 mb-4">Datenblätter zu über 50 Sorten.</p>
                                <button class="text-emerald-600 text-sm font-semibold hover:underline">Öffnen</button>
                            </div>
                        </div>
                        <div class="p-8 border border-gray-200 rounded-lg flex items-start gap-4 hover:shadow-sm transition-all">
                            <div class="p-3 bg-emerald-50 text-emerald-600 rounded-lg"><iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon></div>
                            <div>
                                <h3 class="font-bold text-lg mb-2">Heilkräuter</h3>
                                <p class="text-sm text-slate-500 mb-4">Wirkung und Anwendung.</p>
                                <button class="text-emerald-600 text-sm font-semibold hover:underline">Öffnen</button>
                            </div>
                        </div>
                    </div>
                `
            },
            'login': {
                title: 'Login',
                parent: 'home',
                content: `
                    <div class="max-w-md mx-auto py-12">
                        <div class="bg-white p-10 rounded-xl border border-gray-200 shadow-sm text-center">
                            <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
                            </div>
                            <h1 class="text-2xl font-bold mb-2">Willkommen zurück</h1>
                            <p class="text-slate-500 text-sm mb-8">Greife auf deine Kurse und Fortschritte zu.</p>
                            
                            <form class="space-y-4 text-left">
                                <div>
                                    <label class="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Email</label>
                                    <input type="email" class="w-full px-4 py-2.5 bg-gray-50 focus:bg-white transition-colors" placeholder="name@beispiel.de">
                                </div>
                                <div>
                                    <label class="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Passwort</label>
                                    <input type="password" class="w-full px-4 py-2.5 bg-gray-50 focus:bg-white transition-colors">
                                </div>
                                <button type="button" class="w-full bg-[#122421] text-white py-3 rounded-[4px] font-semibold hover:bg-emerald-900 transition-colors mt-2">
                                    Einloggen
                                </button>
                            </form>
                            <div class="mt-8 pt-8 border-t border-gray-100">
                                <p class="text-xs text-slate-400">
                                    Noch kein Konto? <a href="#" class="text-emerald-600 font-semibold hover:underline">Registrieren</a>
                                </p>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        // --- Generate Sub-pages for Learn Path ---
        ['learn_step1', 'learn_step2', 'learn_step3', 'learn_step4', 'learn_step5', 'learn_step6'].forEach((id, index) => {
            const stepTitle = contentData.learn.content.match(new RegExp(`id: '${id}', title: '([^']*)'`))?.[1].split(': ')[1] || `Schritt ${index + 1}`;
            contentData[id] = {
                title: stepTitle,
                parent: 'learn',
                content: `
                    <div class="flex items-center gap-2 text-xs font-semibold text-emerald-600 mb-4 uppercase tracking-wider">
                        <span class="w-6 h-[1px] bg-emerald-600"></span> Phase ${index + 1}
                    </div>
                    <h1 class="text-3xl font-bold text-slate-900 mb-8">${stepTitle}</h1>
                    
                    <!-- Video Placeholder -->
                    <div class="w-full aspect-video bg-slate-900 rounded-lg mb-8 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-lg">
                        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10"></div>
                        <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000" class="absolute inset-0 w-full h-full object-cover opacity-60">
                        <div class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                            <iconify-icon icon="solar:play-bold" width="24" class="text-white ml-1"></iconify-icon>
                        </div>
                    </div>

                    <div class="prose prose-slate max-w-none">
                        <h3 class="font-bold text-lg mb-4">Über diese Lektion</h3>
                        <p class="text-slate-600 leading-relaxed mb-6">
                            Willkommen in Phase ${index + 1}. In diesem Modul konzentrieren wir uns auf die praktische Umsetzung von ${stepTitle}. 
                            Es ist wichtig, dass du die vorherigen Schritte verstanden hast, bevor wir fortfahren.
                        </p>
                        
                        <div class="bg-gray-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
                            <h4 class="font-bold text-emerald-800 text-sm mb-2 flex items-center gap-2">
                                <iconify-icon icon="solar:info-circle-linear"></iconify-icon> Pro Tipp
                            </h4>
                            <p class="text-emerald-900/80 text-sm">Achte besonders auf die Ausrichtung zur Sonne. Ein Fehler hier kann später kaum korrigiert werden.</p>
                        </div>

                        <h3 class="font-bold text-lg mb-4">Materialien</h3>
                        <ul class="space-y-3 mb-8 text-slate-600 list-none pl-0">
                            <li class="flex items-center gap-3">
                                <iconify-icon icon="solar:check-square-linear" class="text-emerald-500"></iconify-icon> Checkliste PDF
                            </li>
                            <li class="flex items-center gap-3">
                                <iconify-icon icon="solar:check-square-linear" class="text-emerald-500"></iconify-icon> Einkaufsliste
                            </li>
                        </ul>
                    </div>
                    
                    <div class="border-t border-gray-100 mt-12 pt-8 flex justify-between">
                        <button onclick="navigateTo('learn')" class="text-slate-500 hover:text-slate-900 text-sm font-semibold flex items-center gap-2">
                            <iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Zur Übersicht
                        </button>
                        ${index < 5 ? `
                        <button onclick="navigateTo('learn_step${index+2}')" class="bg-[#122421] text-white px-6 py-3 rounded-[4px] text-sm font-semibold hover:bg-opacity-90 flex items-center gap-2">
                            Nächste Phase <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                        </button>` : ''}
                    </div>
                `
            };
        });

        let currentRoute = 'home';

        // --- Core Functions ---

        function renderNav() {
            const container = document.getElementById('nav-container');
            container.innerHTML = navItems.map(item => {
                let isActive = item.id === currentRoute;
                // Parent check
                if (!isActive && contentData[currentRoute].parent) {
                    if (contentData[currentRoute].parent === item.id) isActive = true;
                }
                
                const styleClass = isActive ? 'tab-active' : 'tab-inactive';
                
                return `
                    <button 
                        onclick="navigateTo('${item.id}')"
                        class="tab-base ${styleClass}">
                        ${item.label}
                    </button>
                `;
            }).join('');
        }

        function renderContent() {
            const mainContainer = document.getElementById('main-container');
            const data = contentData[currentRoute];
            if (!data) return;

            window.scrollTo(0, 0);

            if (data.type === 'hero') {
                // Hero Layout (Dark Fullscreen)
                mainContainer.innerHTML = `<div class="fade-enter-active">${data.content}</div>`;
            } else {
                // Inner Page Layout (White Sheet)
                let breadcrumbsHtml = '';
                if (data.parent) {
                    const parent = contentData[data.parent];
                    const parentLabel = navItems.find(n => n.id === data.parent)?.label || parent.title;
                    
                    breadcrumbsHtml = `
                        <nav class="flex mb-8 text-xs font-medium" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center space-x-2">
                                <li>
                                    <a href="#" onclick="navigateTo('${data.parent}'); return false;" class="text-slate-400 hover:text-emerald-600 transition-colors flex items-center gap-1">
                                        <iconify-icon icon="solar:arrow-left-linear"></iconify-icon> ${parentLabel}
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    `;
                }

                mainContainer.innerHTML = `
                    <div class="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 fade-enter-active">
                        <div class="bg-white min-h-[600px] rounded-xl shadow-sm border border-gray-200 p-8 md:p-12 relative overflow-hidden">
                            ${breadcrumbsHtml}
                            ${data.content}
                        </div>
                    </div>
                `;
            }
            
            renderNav();
            
            // Animation Trigger
            const el = mainContainer.firstElementChild;
            el.classList.remove('fade-enter-active');
            el.classList.add('fade-enter');
            requestAnimationFrame(() => {
                el.classList.remove('fade-enter');
                el.classList.add('fade-enter-active');
            });
        }

        function navigateTo(routeId) {
            if (contentData[routeId]) {
                currentRoute = routeId;
                renderContent();
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderNav();
            renderContent();
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
      

<header className="fixed md:pt-8 transition-all duration-300 bg-[#122421] pt-8 top-0 right-0 left-0">
<div className="max-w-6xl mx-auto px-4 md:px-6">

<div className="flex items-end justify-between border-b border-white/10">

<nav className="flex overflow-x-auto no-scrollbar gap-1 items-end h-[44px] w-full">
<div className="flex flex-row h-full items-end" id="nav-container">
<button className="tab-base tab-active" onclick="navigateTo('home')">
                        Home
                    </button>
<button className="tab-base tab-inactive" onclick="navigateTo('start')">STARTE HIER</button>
<button className="tab-base tab-inactive" onclick="navigateTo('learn')">LERNE</button>
<button className="tab-base tab-inactive" onclick="navigateTo('forum')">COMMUNITY FORUM</button>
<button className="tab-base tab-inactive" onclick="navigateTo('library')">ÜBER UNS</button>
<button className="tab-base tab-inactive" onclick="navigateTo('login')">
                        Login
                    </button>
</div>
</nav>
</div>
</div>
</header>

<main className="flex-grow w-full mt-[80px] relative" id="main-container"><div className="fade-enter">
<div className="min-h-[calc(100vh-80px)] flex overflow-hidden w-full relative items-center justify-center">

<div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-[#122421] via-[#0f2e28] to-[#0a1f1b] z-0"></div>

<div className="pointer-events-none opacity-5 absolute right-[-10%] bottom-[-10%] rotate-12">
<iconify-icon className="" height="800" icon="solar:lotus-linear" style={{color: '#6EE7B7'}} width="800"></iconify-icon>
</div>

<div className="z-10 md:pb-0 w-full max-w-6xl mr-auto ml-auto pr-6 pb-20 pl-6 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                                    Neue Saison gestartet
                                </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-bold text-white tracking-tight mb-8">
                                    Dein Garten.
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-500">Kein Platzproblem.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light max-w-2xl">
                                    Die erste strukturierte Akademie für Urban Gardening. Verwandle deinen Balkon oder Fenstersims in ein produktives Ökosystem.
                                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-[#122421] px-8 py-4 rounded-[4px] font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group" onclick="navigateTo('start')">
                                        Kostenlos Starten <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="border border-white/20 text-white px-8 py-4 rounded-[4px] font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2" onclick="navigateTo('learn')">
                                        Kursübersicht <iconify-icon icon="solar:list-linear" width="20"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-3 gap-8 mt-16 border-t border-white/10 pt-8 max-w-lg">
<div>
<div className="text-2xl font-bold text-white mb-1">50+</div>
<div className="text-sm text-gray-500">Pflanzenarten</div>
</div>
<div>
<div className="text-2xl font-bold text-white mb-1">6</div>
<div className="text-sm text-gray-500">Lern-Phasen</div>
</div>
<div>
<div className="text-2xl font-bold text-white mb-1">100%</div>
<div className="text-sm text-gray-500">Bio-Anbau</div>
</div>
</div>
</div>
</div>
</div>
</div></main>


    </>
  );
}

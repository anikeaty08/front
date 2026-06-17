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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      

<header className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
<div className="flex items-center gap-5">
<button className="text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-5 h-5" data-lucide="panel-left" strokeWidth="1.5"></i>
</button>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-gray-800" data-lucide="inbox" strokeWidth="1.5"></i>
<h1 className="text-xl font-medium tracking-tight text-gray-900">Nachrichten</h1>

<div className="flex items-center gap-2 ml-3 bg-gray-50 border border-gray-200 rounded-full pl-3 pr-1 py-1">
<span className="text-sm font-medium text-gray-600">Experimental</span>
<button className="w-9 h-5 bg-emerald-500 rounded-full relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 transition-colors">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform"></div>
</button>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 bg-blue-600 text-white px-3.5 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="mail-plus" strokeWidth="1.5"></i>
                Neue Nachricht
                <div className="flex items-center border-l border-blue-500 pl-2 ml-1 opacity-80 gap-0.5">
<i className="w-3 h-3" data-lucide="command" strokeWidth="1.5"></i>
<i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="1.5"></i>
<span className="text-xs">M</span>
</div>
</button>
<button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-3.5 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                Aktivität protokollieren
                <div className="flex items-center text-gray-400 ml-1 gap-0.5">
<i className="w-3 h-3" data-lucide="command" strokeWidth="1.5"></i>
<span className="text-xs">E</span>
</div>
</button>
<button className="p-1.5 border border-gray-200 rounded-md hover:bg-gray-50 text-gray-500 shadow-sm flex items-center gap-1">
<i className="w-4 h-4" data-lucide="more-vertical" strokeWidth="1.5"></i>
<div className="flex items-center text-gray-400 gap-0.5 pr-1">
<i className="w-3 h-3" data-lucide="command" strokeWidth="1.5"></i>
<span className="text-xs">K</span>
</div>
</button>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="w-[380px] flex-shrink-0 flex flex-col border-r border-gray-200 bg-white">
<div className="p-3 border-b border-gray-100 space-y-3">
<div className="relative">
<i className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-base text-gray-800 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400" placeholder="Suche nach Kundennamen..." type="text"/>
</div>
<div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
<button className="flex items-center gap-1.5 px-3 py-1.5 border border-blue-100 text-blue-600 bg-blue-50/50 rounded-md text-sm font-medium whitespace-nowrap hover:bg-blue-50 transition-colors">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i>
                        Nach Objekt filtern
                    </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 border border-blue-100 text-blue-600 bg-blue-50/50 rounded-md text-sm font-medium whitespace-nowrap hover:bg-blue-50 transition-colors">
<i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i>
                        Nach Zuständigem filtern
                    </button>
</div>
</div>
<div className="flex items-center justify-between p-3 border-b border-gray-100 bg-gray-50/30">
<div className="flex items-center gap-1">
<button className="p-1.5 bg-white border border-gray-200 rounded shadow-sm text-gray-700 hover:bg-gray-50">
<i className="w-4 h-4" data-lucide="inbox" strokeWidth="1.5"></i>
</button>
<button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4" data-lucide="archive" strokeWidth="1.5"></i>
</button>
</div>
<button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
<i className="w-4 h-4" data-lucide="rotate-cw" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto">

<div className="p-4 border-b border-gray-100 border-l-2 border-l-blue-600 bg-blue-50/10 cursor-pointer relative group">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<span className="text-base font-medium text-gray-900">Marco Steiner</span>

<span className="px-1.5 py-0.5 rounded text-xs font-medium bg-cyan-50 text-cyan-700 border border-cyan-100 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="building" strokeWidth="1.5"></i> smg
                            </span>
</div>
<img alt="Property" className="w-12 h-8 object-cover rounded shadow-sm border border-gray-200" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=120&amp;h=80"/>
</div>
<div className="text-base font-medium text-gray-800 truncate mb-1">Neue Kontaktanfrage für Ins...</div>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Marco Steiner: Guten Tag · Wir sind auf der Suche nach neuen Büroräumlichkeiten im Raum Baden...</p>
<div className="flex justify-end mt-2 text-xs text-gray-400">vor 19 Tagen</div>
</div>

<div className="p-4 border-b border-gray-100 border-l-2 border-l-transparent hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<span className="text-base font-medium text-gray-900">Lucas Pelloni</span>
<span className="px-1.5 py-0.5 rounded text-xs font-medium bg-cyan-50 text-cyan-700 border border-cyan-100 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="building" strokeWidth="1.5"></i> smg
                            </span>
</div>
<img alt="Property" className="w-12 h-8 object-cover rounded shadow-sm border border-gray-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="text-base font-medium text-gray-800 truncate mb-1">Neue Kontaktanfrage für Ins...</div>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Lucas Pelloni: Sehr geehrte Damen und Herren...</p>
<div className="flex justify-end mt-2 text-xs text-gray-400">vor etwa 1 Monat</div>
</div>

<div className="p-4 border-b border-gray-100 border-l-2 border-l-transparent hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<span className="text-base font-medium text-gray-900">Louise Jaquard</span>
</div>
<div className="w-12 h-8 bg-gray-100 rounded border border-gray-200 flex items-center justify-center">
<i className="w-4 h-4 text-gray-400" data-lucide="image" strokeWidth="1.5"></i>
</div>
</div>
<div className="text-base font-medium text-gray-800 truncate mb-1">Modèle 1 - Merci</div>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">sofia.luraschi@nestermind.com: Cher monsieur...</p>
<div className="flex justify-end mt-2 text-xs text-gray-400">vor 3 Monaten</div>
</div>
</div>
</aside>

<section className="flex-1 flex flex-col min-w-0 bg-white">

<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
<div className="flex items-center gap-3 overflow-hidden">
<button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors shrink-0">
<i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i>
</button>
<h2 className="text-base font-medium text-gray-900 truncate">Neue Kontaktanfrage für Inserat 45021051.45021051.45021051 in 3454 Sumiswald</h2>
</div>
<div className="flex items-center gap-1 shrink-0 ml-4 border border-gray-200 rounded-md p-0.5">
<button className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded">
<i className="w-4 h-4" data-lucide="chevron-up" strokeWidth="1.5"></i>
</button>
<div className="w-px h-4 bg-gray-200"></div>
<button className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 py-6 scroll-smooth">

<div className="max-w-3xl mx-auto">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-base font-medium border border-green-200">
                                M
                            </div>
<div>
<div className="flex items-center gap-2">
<span className="text-base font-medium text-gray-900">Marco Steiner</span>
<span className="px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                        Portal Inquiry
                                    </span>
<span className="text-xs text-gray-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="building" strokeWidth="1.5"></i> via smg
                                    </span>
</div>
<div className="text-sm text-gray-500 mt-0.5">An: Lucas Pelloni</div>
</div>
</div>
<div className="text-sm text-gray-500">5 Feb., 2026 08:36</div>
</div>
<div className="pl-13 text-base text-gray-800 leading-relaxed space-y-4">
<p>Guten Tag</p>
<p>Wir sind auf der Suche nach neuen Büroräumlichkeiten im Raum Baden / Mägenwil / Lenzburg. Ihr Objekt auf dem CAMPUS Mägenwil mit 1'437 m² hat unser Interesse geweckt.</p>
<p>Besonders wichtig für uns wären:</p>
<ul className="list-none space-y-2 text-base text-gray-800">
<li className="flex gap-2"><span className="text-gray-400">-</span> Flexible Arbeitsplätze mit Kombination aus Open Space und Rückzugszonen</li>
<li className="flex gap-2"><span className="text-gray-400">-</span> Meetingräume für ca. 6–20 PersonenGute Erreichbarkeit mit ÖV und Auto</li>
<li className="flex gap-2"><span className="text-gray-400">-</span> Parkmöglichkeiten für Mitarbeitende und Besucher</li>
<li className="flex gap-2"><span className="text-gray-400">-</span> Möglichkeit für Ausbau eines Mitarbeiter-Loungebereichs</li>
</ul>
<p>Idealerweise möchten wir den Standort im Q4 2026 beziehen.</p>
<p>Können Sie uns mitteilen:</p>
</div>
</div>

<div className="max-w-3xl mx-auto mt-10 relative">

<div className="absolute left-5 top-[-30px] bottom-0 w-px bg-gray-100 z-0"></div>
<div className="relative z-10 flex gap-4">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 border border-purple-100 text-purple-600 shadow-sm">
<i className="w-5 h-5" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<div className="flex-1 bg-white border border-purple-100 rounded-lg p-5 shadow-sm">
<div className="flex items-center justify-between mb-3 border-b border-purple-50 pb-3">
<div className="flex items-center gap-2">
<span className="font-medium text-base text-purple-900 flex items-center gap-1.5">
                                        Auto-Responder with Language Detection.
                                        <i className="w-4 h-4 text-purple-500" data-lucide="sparkles" strokeWidth="1.5"></i>
</span>
</div>
<span className="text-sm text-gray-400">Automatisch · 5 Feb., 08:37</span>
</div>
<div className="text-base text-gray-700 leading-relaxed space-y-3">
<p>Sehr geehrter Herr Steiner,</p>
<p>Vielen Dank für Ihr Interesse an den Büroräumlichkeiten im CAMPUS Mägenwil. Wir haben Ihre Anfrage erhalten und prüfen derzeit die Verfügbarkeit basierend auf Ihren spezifischen Anforderungen (Flexible Arbeitsplätze, Meetingräume, Parkmöglichkeiten).</p>
<p>Ein zuständiger Makler wird sich in Kürze mit Ihnen in Verbindung setzen, um Ihre Fragen im Detail zu besprechen.</p>
<p>Freundliche Grüße,<br/>Ihr Vermarktungs-Team</p>
</div>
</div>
</div>
</div>
</div>

<div className="shrink-0 p-4 border-t border-gray-200 bg-white">
<div className="max-w-3xl mx-auto border border-gray-200 rounded-lg shadow-sm focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all bg-white">
<div className="px-4 py-2 border-b border-gray-100 bg-gray-50/50 rounded-t-lg flex items-center text-sm text-gray-500">
<span className="font-medium mr-1 text-gray-600">Antwort auf</span> Neue Kontaktanfrage für Inserat 45021051...
                        <button className="ml-1 text-gray-400 hover:text-gray-600"><i className="w-3 h-3" data-lucide="edit-2" strokeWidth="1.5"></i></button>
</div>
<textarea className="w-full p-4 text-base text-gray-800 placeholder-gray-400 border-none focus:ring-0 resize-none min-h-[100px] bg-transparent" placeholder="Enter text or type '/' for commands"></textarea>
<div className="flex items-center justify-between p-3 border-t border-gray-50 bg-gray-50/30 rounded-b-lg">
<div className="flex gap-2">
<button className="flex items-center gap-1.5 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-md text-sm font-medium transition-colors">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i> Senden
                            </button>

<button className="flex items-center gap-1.5 bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-100 px-4 py-2 rounded-md text-sm font-medium transition-colors">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i> Generieren
                            </button>
</div>
<div className="text-gray-400 hover:text-gray-600 cursor-pointer p-1">
<i className="w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<aside className="w-[340px] flex-shrink-0 flex flex-col border-l border-gray-200 bg-gray-50/50 overflow-y-auto">
<div className="p-4 border-b border-gray-200 bg-white sticky top-0 z-10 flex items-center justify-between">
<h3 className="text-base font-medium text-gray-900 flex items-center gap-2">
<i className="w-4 h-4 text-gray-500" data-lucide="sidebar-open" strokeWidth="1.5"></i>
                    Konversationskontext
                </h3>
<button className="text-gray-400 hover:text-gray-600"><i className="w-4 h-4" data-lucide="panel-right-close" strokeWidth="1.5"></i></button>
</div>
<div className="p-4 space-y-4">

<div className="grid grid-cols-2 gap-3">
<div>
<div className="text-xs text-gray-500 mb-1.5">Kontakt</div>
<div className="bg-white border border-gray-200 rounded-md px-2.5 py-1.5 flex items-center gap-2 text-sm text-gray-800 shadow-sm truncate">
<div className="w-4 h-4 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-medium shrink-0">M</div>
<span className="truncate">Marco Stein...</span>
</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1.5">Objekt</div>
<div className="bg-white border border-gray-200 rounded-md px-2.5 py-1.5 flex items-center gap-2 text-sm text-gray-800 shadow-sm truncate">
<img alt="thumb" className="w-4 h-4 rounded object-cover shrink-0" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=40&amp;h=40"/>
<span className="truncate">1'437 m² auf dem...</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<div className="px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 border-b border-gray-100">
<div className="flex items-center gap-2 text-base font-medium text-gray-900">
<i className="w-4 h-4 text-purple-500" data-lucide="sparkles" strokeWidth="1.5"></i>
                            AI Actions
                        </div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-up" strokeWidth="1.5"></i>
</div>
<div className="p-4 bg-gray-50/50 space-y-4">

<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100 mt-0.5 shadow-sm">
<span className="text-xs font-medium">1</span>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Language Detection</h4>
<p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Determines the language for the auto-response.</p>
</div>
</div>
<div className="ml-2.5 pl-5 border-l border-gray-200 space-y-3 pb-1">

<div className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-md shadow-sm">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-purple-500" data-lucide="languages" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-gray-800">Deutsch</span>
</div>
<span className="text-xs text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100 font-medium">Auto-detected</span>
</div>

<div>
<label className="block text-xs text-gray-500 mb-1 font-medium">Override Language</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-xs rounded-md pl-2.5 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 cursor-pointer shadow-sm">
<option selected="" value="de">Deutsch (Auto)</option>
<option value="en">English</option>
<option value="fr">Français</option>
<option value="it">Italiano</option>
</select>
<i className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-1.5 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="space-y-3 pt-1">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-gray-50 text-gray-400 flex items-center justify-center shrink-0 border border-gray-200 mt-0.5">
<span className="text-xs font-medium">2</span>
</div>
<div>
<h4 className="text-sm font-medium text-gray-500">Draft Generation</h4>
<p className="text-xs text-gray-400 mt-0.5 leading-relaxed">Waiting for language confirmation...</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm">
<div className="px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 border-b border-gray-100">
<div className="flex items-center gap-2 text-base font-medium text-gray-900">
<i className="w-4 h-4 text-gray-500" data-lucide="user-square-2" strokeWidth="1.5"></i>
                            Kontaktdaten
                        </div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-up" strokeWidth="1.5"></i>
</div>
<div className="p-4 space-y-3">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<div className="text-sm text-gray-800 break-all">severin.wullschleger+02052@gmail.c...</div>
</div>
<div className="flex items-center gap-3 justify-between">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-400 shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<div className="text-sm text-gray-800">+41 79 833 42 32</div>
</div>
</div>
<div className="flex items-start gap-3 justify-between">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<div className="text-sm text-gray-800 text-right">Randostrasse 10, Zürich, 8002</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-2 text-base font-medium text-gray-900">
<i className="w-4 h-4 text-gray-500" data-lucide="heart" strokeWidth="1.5"></i>
                        Interesse
                    </div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-2 text-base font-medium text-gray-900">
<i className="w-4 h-4 text-gray-500" data-lucide="home" strokeWidth="1.5"></i>
                        Suchprofil
                    </div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-2 text-base font-medium text-gray-900">
<i className="w-4 h-4 text-gray-500" data-lucide="building-2" strokeWidth="1.5"></i>
                        Details der Immobilie
                    </div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-2 text-base font-medium text-gray-900">
<i className="w-4 h-4 text-gray-500" data-lucide="message-square" strokeWidth="1.5"></i>
                        Andere Unterhaltungen
                    </div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</aside>
</main>


    </>
  );
}

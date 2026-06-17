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
      

<aside className="w-64 bg-[#050505] border-r border-white/5 flex-col hidden md:flex shrink-0">

<div className="h-14 flex items-center px-5 border-b border-white/5 shrink-0">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-normal tracking-tighter text-xs">
            E
          </div>
<span className="text-white font-normal tracking-tight text-base group-hover:opacity-80 transition-opacity">
            ESTATE
          </span>
<iconify-icon className="w-4 h-4 text-zinc-600 ml-1" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar py-4 px-3 flex flex-col gap-6">

<div className="flex flex-col gap-0.5">
<a className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors font-normal" href="#">
<iconify-icon className="w-5 h-5 opacity-70" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
            Dashboard
          </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors font-normal" href="#">
<iconify-icon className="w-5 h-5 text-zinc-300" icon="solar:inbox-linear" strokeWidth="1.5"></iconify-icon>
            Inbox
            <span className="ml-auto bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded font-mono">
              12
            </span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors font-normal" href="clienti.html">
<iconify-icon className="w-5 h-5 opacity-70" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
            Clienti
          </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-lg bg-white/10 text-white font-normal" href="#">
<iconify-icon className="w-5 h-5 opacity-70" icon="solar:home-angle-2-linear" strokeWidth="1.5"></iconify-icon>
            Immobili
          </a>
</div>

<div className="flex flex-col gap-0.5">
<div className="text-xs text-zinc-600 font-normal tracking-wider mb-2 px-2">
            WORKSPACE AI
          </div>
<a className="flex items-center justify-between px-2 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors font-normal group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="w-5 h-5 opacity-70 group-hover:text-purple-400 transition-colors" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
              Smart Matching
            </div>
</a>
<a className="flex items-center justify-between px-2 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors font-normal group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="w-5 h-5 opacity-70 group-hover:text-blue-400 transition-colors" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
              Analisi Mercato
            </div>
</a>
<a className="flex items-center justify-between px-2 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors font-normal group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="w-5 h-5 opacity-70 group-hover:text-green-400 transition-colors" icon="solar:robot-linear" strokeWidth="1.5"></iconify-icon>
              Agenti AI
            </div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</a>
</div>

<div className="flex flex-col gap-0.5">
<div className="text-xs text-zinc-600 font-normal tracking-wider mb-2 px-2 flex justify-between items-center">
            TEAM
            <iconify-icon className="w-4 h-4 cursor-pointer hover:text-zinc-300" icon="solar:add-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors font-light" href="#">
<div className="w-4 h-4 rounded border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-xs text-purple-400">
              V
            </div>
            Vendite
          </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors font-light" href="#">
<div className="w-4 h-4 rounded border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-xs text-blue-400">
              A
            </div>
            Acquisizioni
          </a>
</div>
</div>

<div className="p-4 border-t border-white/5 shrink-0">
<div className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-[#111] border border-[#222] flex items-center justify-center shrink-0 overflow-hidden">
<img alt="Avatar" className="w-full h-full opacity-80" src="https://api.dicebear.com/7.x/notionists/svg?seed=Marco&amp;backgroundColor=transparent"/>
</div>
<div className="flex-1 min-w-0">
<div className="text-white font-normal truncate">Marco Rossi</div>
<div className="text-xs text-zinc-500 font-light truncate">
              marco@estate.app
            </div>
</div>
<iconify-icon className="w-5 h-5 text-zinc-500" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#000]">

<header className="h-14 border-b border-white/5 bg-[#050505] flex items-center justify-between px-4 lg:px-6 shrink-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon className="w-6 h-6" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="hidden sm:flex items-center gap-2 text-zinc-500 font-light">
<iconify-icon className="w-4 h-4" icon="solar:home-angle-2-linear" strokeWidth="1.5"></iconify-icon>
<span>Immobili</span>
<span className="text-zinc-700">/</span>
<span className="text-white font-normal">Tutti gli Immobili</span>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden lg:flex items-center bg-[#111] border border-[#222] rounded-md px-3 py-1.5 w-64 group hover:border-[#333] transition-colors">
<iconify-icon className="w-4 h-4 text-zinc-500 mr-2" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="bg-transparent border-none outline-none text-white text-xs w-full placeholder-zinc-600 font-light" placeholder="Cerca immobili, zone..." type="text"/>
<div className="text-xs text-zinc-600 font-mono border border-[#333] rounded px-1.5 ml-2">
              ⌘K
            </div>
</div>
<div className="w-px h-4 bg-[#222] hidden sm:block"></div>
<button className="text-zinc-400 hover:text-white relative">
<iconify-icon className="w-5 h-5" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-blue-500 rounded-full border border-[#050505]"></span>
</button>
<button className="bg-white text-black font-normal px-3 py-1.5 rounded-md hover:bg-zinc-200 transition-colors flex items-center gap-1.5 text-xs">
<iconify-icon className="w-4 h-4" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
            Nuovo Immobile
          </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="w-full lg:w-[400px] border-r border-white/5 bg-[#050505] flex flex-col shrink-0">

<div className="p-4 border-b border-[#222] shrink-0">
<div className="flex items-center justify-between mb-4">
<div className="flex gap-4 text-xs font-normal">
<span className="text-white border-b border-white pb-1 cursor-pointer">
                  In Vendita (42)
                </span>
<span className="text-zinc-500 hover:text-zinc-300 cursor-pointer">
                  In Affitto (15)
                </span>
<span className="text-zinc-500 hover:text-zinc-300 cursor-pointer">
                  Bozze (3)
                </span>
</div>
<button className="text-zinc-500 hover:text-white">
<iconify-icon className="w-4 h-4" icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex gap-2">
<button className="bg-[#111] border border-[#222] text-zinc-300 px-3 py-1.5 rounded-md text-xs font-light hover:border-[#333] transition-colors flex-1 text-left flex justify-between items-center">
                Prezzo
                <iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="bg-[#111] border border-[#222] text-zinc-300 px-3 py-1.5 rounded-md text-xs font-light hover:border-[#333] transition-colors flex-1 text-left flex justify-between items-center">
                Zona
                <iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar">

<div className="p-4 border-b border-[#222] bg-white/[0.03] relative cursor-pointer group">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-500"></div>
<div className="flex gap-3">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#333]">
<img alt="Attico" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<div className="flex justify-between items-start mb-1">
<span className="text-white font-normal text-sm tracking-tight truncate">
                      Attico Panoramico
                    </span>
<span className="text-xs text-zinc-500 font-light shrink-0">
                      Oggi
                    </span>
</div>
<span className="text-xs text-zinc-400 font-light block mb-2 truncate">
                    Via Fiori Chiari, Brera
                  </span>
<div className="flex items-center gap-2">
<span className="text-xs text-white font-medium">
                      € 1.250.000
                    </span>
<span className="w-1 h-1 rounded-full bg-[#333]"></span>
<span className="text-xs text-zinc-500 font-light">180 mq</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-b border-[#222] hover:bg-white/[0.02] transition-colors cursor-pointer group">
<div className="flex gap-3">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#222] group-hover:border-[#333] transition-colors relative">
<img alt="Appartamento" className="w-full h-full object-cover opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<div className="flex justify-between items-start mb-1">
<span className="text-zinc-300 group-hover:text-white font-normal text-sm tracking-tight truncate transition-colors">
                      Quadrilocale Ristrutturato
                    </span>
<span className="text-xs text-zinc-600 font-light shrink-0">
                      2g fa
                    </span>
</div>
<span className="text-xs text-zinc-500 font-light block mb-2 truncate">
                    Corso Garibaldi, Moscova
                  </span>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-300 font-medium">
                      € 1.100.000
                    </span>
<span className="w-1 h-1 rounded-full bg-[#222]"></span>
<span className="text-xs text-zinc-500 font-light">160 mq</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-b border-[#222] hover:bg-white/[0.02] transition-colors cursor-pointer group">
<div className="flex gap-3">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#222] group-hover:border-[#333] transition-colors relative">
<img alt="Appartamento" className="w-full h-full object-cover opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<div className="flex justify-between items-start mb-1">
<span className="text-zinc-300 group-hover:text-white font-normal text-sm tracking-tight truncate transition-colors">
                      Bilocale Investimento
                    </span>
<span className="text-xs text-zinc-600 font-light shrink-0">
                      5g fa
                    </span>
</div>
<span className="text-xs text-zinc-500 font-light block mb-2 truncate">
                    Via Ampère, Città Studi
                  </span>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-300 font-medium">
                      € 400.000
                    </span>
<span className="w-1 h-1 rounded-full bg-[#222]"></span>
<span className="text-xs text-zinc-500 font-light">65 mq</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex flex-1 flex-col bg-[#0A0A0A] relative overflow-hidden">

<div className="h-20 border-b border-[#222] flex items-center justify-between px-8 bg-[#0A0A0A] shrink-0">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg border border-[#333] overflow-hidden shrink-0">
<img alt="Thumbnail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex flex-col justify-center">
<div className="flex items-center gap-3 mb-1">
<h2 className="text-xl text-white font-normal tracking-tight">
                    Attico Panoramico
                  </h2>
<span className="text-xs font-mono text-emerald-400 px-1.5 py-0.5 border border-emerald-400/20 rounded bg-emerald-400/10">
                    In Vendita
                  </span>
</div>
<div className="flex items-center gap-4 text-xs font-light text-zinc-500">
<span className="flex items-center gap-1.5">
<iconify-icon className="w-3.5 h-3.5" icon="solar:map-point-linear"></iconify-icon>
                    Via Fiori Chiari, Brera, Milano
                  </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="w-3.5 h-3.5" icon="solar:tag-price-linear"></iconify-icon>
                    Rif: MI-0482
                  </span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="bg-[#111] border border-[#222] text-zinc-300 px-3 py-1.5 rounded-md text-xs font-normal hover:bg-[#1a1a1a] hover:border-[#333] transition-colors flex items-center gap-2">
<iconify-icon className="w-3.5 h-3.5" icon="solar:pen-linear"></iconify-icon>
                Modifica Immobile
              </button>
<button className="w-8 h-8 rounded-md border border-[#222] bg-[#111] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#333] transition-colors">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="p-8 border-b border-[#222] bg-white/[0.01] shrink-0">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm text-white font-normal flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:info-circle-linear"></iconify-icon>
                Caratteristiche Principali
              </h3>
<div className="flex gap-2">
<button className="bg-[#111] border border-[#222] text-zinc-300 px-3 py-1.5 rounded-md text-xs font-normal hover:bg-[#1a1a1a] hover:border-[#333] transition-colors flex items-center gap-2">
<iconify-icon icon="solar:gallery-linear"></iconify-icon>
                  Media
                </button>
<button className="bg-[#111] border border-[#222] text-zinc-300 px-3 py-1.5 rounded-md text-xs font-normal hover:bg-[#1a1a1a] hover:border-[#333] transition-colors flex items-center gap-2">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
                  Documenti
                </button>
</div>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="bg-[#050505] border border-[#222] rounded-xl p-4">
<div className="text-xs text-zinc-500 font-mono mb-1 uppercase tracking-wider">
                  Prezzo Richiesto
                </div>
<div className="text-lg text-white font-normal tracking-tight">
                  € 1.250.000
                </div>
</div>
<div className="bg-[#050505] border border-[#222] rounded-xl p-4">
<div className="text-xs text-zinc-500 font-mono mb-1 uppercase tracking-wider">
                  Superficie
                </div>
<div className="text-sm text-white font-normal tracking-tight mt-1">
                  180 mq commerciali
                </div>
</div>
<div className="bg-[#050505] border border-[#222] rounded-xl p-4">
<div className="text-xs text-zinc-500 font-mono mb-1 uppercase tracking-wider">
                  Disposizione
                </div>
<div className="text-sm text-white font-normal tracking-tight mt-1">
                  4 Locali • 2 Bagni
                </div>
</div>
<div className="bg-[#050505] border border-[#222] rounded-xl p-4">
<div className="text-xs text-zinc-500 font-mono mb-1 uppercase tracking-wider">
                  Piano
                </div>
<div className="text-sm text-white font-normal tracking-tight mt-1">
                  5° ed Ultimo (con Asc.)
                </div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar p-8 bg-[#0A0A0A]">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
<iconify-icon className="w-5 h-5 text-purple-400" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm text-white font-normal">
                    Smart Match Acquirenti
                  </h3>
<p className="text-xs text-zinc-500 font-light mt-0.5">
                    Trovati 3 potenziali acquirenti in target nel tuo database
                  </p>
</div>
</div>
<button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg text-xs font-normal hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-purple-500/20">
<iconify-icon className="w-4 h-4" icon="solar:restart-linear"></iconify-icon>
                Ricalcola Affinità
              </button>
</div>
<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

<div className="bg-[#111] border border-purple-500/30 rounded-xl overflow-hidden group hover:border-purple-500/50 transition-colors flex flex-col relative p-5">
<div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg z-10 flex items-center gap-1">
<iconify-icon icon="solar:medal-star-linear"></iconify-icon>
                  95% MATCH
                </div>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-sm text-blue-400 font-normal shrink-0">
                    AC
                  </div>
<div>
<h4 className="text-base text-white font-normal tracking-tight mb-0.5">
                      Alessandro Conti
                    </h4>
<div className="flex items-center gap-2 text-xs text-zinc-500 font-light">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:wallet-linear"></iconify-icon>
                        Budget: € 1.2M
                      </span>
<span>•</span>
<span>Acquirente Premium</span>
</div>
</div>
</div>
<div className="bg-purple-500/5 border border-purple-500/10 rounded-lg p-3 mb-5">
<p className="text-xs text-purple-300/80 font-light leading-relaxed flex gap-2">
<iconify-icon className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" icon="solar:magic-stick-3-linear"></iconify-icon>
<span>
                      L'immobile rispetta pienamente la zona richiesta (Brera) e
                      le caratteristiche chiave (Ultimo piano, 4 locali). Il
                      prezzo supera il budget di 50.000€, margine trattabile.
                    </span>
</p>
</div>
<div className="mt-auto flex items-center gap-2">
<button className="flex-1 bg-white text-black text-xs py-2 rounded-lg font-normal hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="w-4 h-4" icon="solar:letter-linear"></iconify-icon>
                    Invia Proposta
                  </button>
<button className="px-4 bg-[#222] border border-[#333] text-zinc-300 text-xs py-2 rounded-lg font-normal hover:text-white hover:border-[#444] transition-colors">
                    Vedi Cliente
                  </button>
</div>
</div>

<div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden group hover:border-[#333] transition-colors flex flex-col relative p-5">
<div className="absolute top-4 right-4 bg-[#222] text-zinc-300 text-xs font-bold px-2 py-1 rounded border border-[#333] z-10 flex items-center gap-1">
                  82% MATCH
                </div>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-sm text-zinc-400 font-normal shrink-0">
                    MR
                  </div>
<div>
<h4 className="text-base text-white font-normal tracking-tight mb-0.5">
                      Martina Rinaldi
                    </h4>
<div className="flex items-center gap-2 text-xs text-zinc-500 font-light">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:wallet-linear"></iconify-icon>
                        Budget: € 1.3M
                      </span>
<span>•</span>
<span>Investimento</span>
</div>
</div>
</div>
<div className="bg-white/5 border border-white/5 rounded-lg p-3 mb-5">
<p className="text-xs text-zinc-400 font-light leading-relaxed flex gap-2">
<iconify-icon className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<span>
                      Budget perfettamente in linea. L'area d'interesse include
                      Brera, ma preferirebbe una metratura leggermente superiore
                      o la possibilità di frazionamento.
                    </span>
</p>
</div>
<div className="mt-auto flex items-center gap-2">
<button className="flex-1 bg-[#222] text-white text-xs py-2 rounded-lg font-normal hover:bg-[#333] transition-colors flex items-center justify-center gap-2 border border-[#333]">
<iconify-icon className="w-4 h-4" icon="solar:letter-linear"></iconify-icon>
                    Invia Proposta
                  </button>
<button className="px-4 bg-[#222] border border-[#333] text-zinc-300 text-xs py-2 rounded-lg font-normal hover:text-white hover:border-[#444] transition-colors">
                    Vedi Cliente
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}

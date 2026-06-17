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
      

<div aria-hidden="true" className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-semibold tracking-tight flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md p-1" href="#">
<span className="iconify text-indigo-400" data-icon="lucide:play" data-strokeWidth="1.5"></span>
                STREAMVERSE
            </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
<a className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-1" href="#">Preise</a>
<a className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-1" href="#">Login</a>
</div>
</div>
</nav>

<header className="pt-20 pb-12 px-6 text-center">
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Wähle deinen Plan
        </h1>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Transparente Preise für jeden Bedarf. Vergleiche alle Funktionen und finde das passende Abo.
        </p>
</header>

<main className="w-full max-w-[1600px] mx-auto px-4 md:px-6 pb-24">

<div aria-hidden="true" className="md:hidden text-zinc-400 text-sm mb-2 flex items-center gap-2">
<span className="iconify" data-icon="lucide:arrow-right-left" data-strokeWidth="1.5"></span>
            Tabelle nach rechts scrollen für mehr Details
        </div>
<div className="relative w-full border border-white/20 rounded-xl bg-[#0a0a0a] shadow-2xl">

<div aria-label="Vergleichstabelle der Streaming-Abonnements" className="overflow-x-auto custom-scrollbar rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50" role="region" tabindex="0">

<table className="w-full min-w-[1200px] text-left border-collapse">

<caption className="text-left text-sm text-zinc-400 p-6 border-b border-white/10 bg-[#0a0a0a] font-medium">
                        Detaillierter Vergleich aller Abo-Modelle hinsichtlich Videoqualität, parallelen Streams und Zusatzfunktionen.
                    </caption>
<thead>
<tr>

<th className="sticky left-0 z-20 bg-[#0a0a0a] border-b border-r border-white/20 p-6 min-w-[220px] align-bottom shadow-[4px_0_24px_rgba(0,0,0,0.5)]" scope="col">
<span className="text-base font-semibold text-zinc-200">Funktionen</span>
</th>
<th className="border-b border-white/10 p-6 min-w-[160px] bg-[#0a0a0a]" scope="col">
<div className="text-sm font-medium text-zinc-400 mb-2">Mini</div>
<div className="text-2xl font-semibold text-white tracking-tight">Free</div>
</th>
<th className="border-b border-white/10 p-6 min-w-[160px] bg-[#0a0a0a]" scope="col">
<div className="text-sm font-medium text-zinc-400 mb-2">Mobile</div>
<div className="text-2xl font-semibold text-white tracking-tight">3,99€</div>
</th>
<th className="border-b border-white/10 p-6 min-w-[160px] bg-[#0a0a0a]" scope="col">
<div className="text-sm font-medium text-zinc-400 mb-2">Basic</div>
<div className="text-2xl font-semibold text-white tracking-tight">7,99€</div>
</th>

<th className="relative border-b border-white/20 bg-indigo-500/[0.05] p-6 min-w-[160px]" scope="col">
<div className="absolute top-0 left-0 w-full h-[2px] bg-indigo-500"></div>
<div className="text-sm font-semibold text-indigo-300 mb-2">Standard</div>
<div className="text-2xl font-bold text-white tracking-tight">12,99€</div>
</th>
<th className="border-b border-white/10 p-6 min-w-[160px] bg-[#0a0a0a]" scope="col">
<div className="text-sm font-medium text-zinc-400 mb-2">Family</div>
<div className="text-2xl font-semibold text-white tracking-tight">17,99€</div>
</th>
<th className="border-b border-white/10 p-6 min-w-[160px] bg-[#0a0a0a]" scope="col">
<div className="text-sm font-medium text-zinc-400 mb-2">Premium</div>
<div className="text-2xl font-semibold text-white tracking-tight">21,99€</div>
</th>
<th className="border-b border-white/10 p-6 min-w-[160px] bg-[#0a0a0a]" scope="col">
<div className="text-sm font-medium text-zinc-400 mb-2">Ultimate</div>
<div className="text-2xl font-semibold text-white tracking-tight">29,99€</div>
</th>
<th className="border-b border-white/10 p-6 min-w-[160px] bg-[#0a0a0a]" scope="col">
<div className="text-sm font-medium text-emerald-300 mb-2">Jahrespass</div>
<div className="text-2xl font-semibold text-white tracking-tight">199€</div>
</th>
</tr>
</thead>

<tbody className="text-base text-zinc-300">


<tr className="even:bg-white/[0.03] hover:bg-white/[0.06] transition-colors">

<th className="sticky left-0 z-10 bg-[#0a0a0a] border-b border-r border-white/20 p-5 font-medium text-zinc-200 shadow-[4px_0_24px_rgba(0,0,0,0.5)]" scope="row">
                                Videoqualität
                            </th>
<td className="border-b border-white/10 p-5 text-center text-zinc-400">SD (480p)</td>
<td className="border-b border-white/10 p-5 text-center">HD (720p)</td>
<td className="border-b border-white/10 p-5 text-center">FHD (1080p)</td>
<td className="border-b border-white/20 bg-indigo-500/[0.05] p-5 text-center font-medium text-white">FHD (1080p)</td>
<td className="border-b border-white/10 p-5 text-center text-white">4K UHD</td>
<td className="border-b border-white/10 p-5 text-center text-white">4K UHD</td>
<td className="border-b border-white/10 p-5 text-center text-indigo-300 font-medium">8K Ready</td>
<td className="border-b border-white/10 p-5 text-center text-white">4K UHD</td>
</tr>

<tr className="even:bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
<th className="sticky left-0 z-10 bg-[#0a0a0a] border-b border-r border-white/20 p-5 font-medium text-zinc-200 shadow-[4px_0_24px_rgba(0,0,0,0.5)]" scope="row">
                                Gleichzeitige Streams
                            </th>
<td className="border-b border-white/10 p-5 text-center text-zinc-400">1 Gerät</td>
<td className="border-b border-white/10 p-5 text-center text-zinc-400">1 Gerät</td>
<td className="border-b border-white/10 p-5 text-center">2 Geräte</td>
<td className="border-b border-white/20 bg-indigo-500/[0.05] p-5 text-center font-medium text-white">2 Geräte</td>
<td className="border-b border-white/10 p-5 text-center text-white">4 Geräte</td>
<td className="border-b border-white/10 p-5 text-center text-white">4 Geräte</td>
<td className="border-b border-white/10 p-5 text-center text-indigo-300 font-medium">Unbegrenzt</td>
<td className="border-b border-white/10 p-5 text-center text-white">4 Geräte</td>
</tr>

<tr className="even:bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
<th className="sticky left-0 z-10 bg-[#0a0a0a] border-b border-r border-white/20 p-5 font-medium text-zinc-200 shadow-[4px_0_24px_rgba(0,0,0,0.5)]" scope="row">
                                Download-Funktion
                            </th>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Nicht enthalten</span>

<span aria-hidden="true" className="iconify text-zinc-500 inline-block" data-icon="lucide:x" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Enthalten</span>
<span aria-hidden="true" className="iconify text-zinc-300 inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Enthalten</span>
<span aria-hidden="true" className="iconify text-zinc-300 inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/20 bg-indigo-500/[0.05] p-5 text-center">
<span className="sr-only">Enthalten</span>
<span aria-hidden="true" className="iconify text-indigo-400 inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Enthalten</span>
<span aria-hidden="true" className="iconify text-white inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Enthalten</span>
<span aria-hidden="true" className="iconify text-white inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Enthalten</span>
<span aria-hidden="true" className="iconify text-indigo-400 inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Enthalten</span>
<span aria-hidden="true" className="iconify text-white inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
</tr>

<tr className="even:bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
<th className="sticky left-0 z-10 bg-[#0a0a0a] border-b border-r border-white/20 p-5 font-medium text-zinc-200 shadow-[4px_0_24px_rgba(0,0,0,0.5)]" scope="row">
                                Werbefreiheit
                            </th>
<td className="border-b border-white/10 p-5 text-center text-sm text-zinc-400">Mit Werbung</td>
<td className="border-b border-white/10 p-5 text-center text-sm text-zinc-400">Mit Werbung</td>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Werbefrei</span>
<span aria-hidden="true" className="iconify text-zinc-300 inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/20 bg-indigo-500/[0.05] p-5 text-center">
<span className="sr-only">Werbefrei</span>
<span aria-hidden="true" className="iconify text-indigo-400 inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Werbefrei</span>
<span aria-hidden="true" className="iconify text-white inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Werbefrei</span>
<span aria-hidden="true" className="iconify text-white inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Werbefrei</span>
<span aria-hidden="true" className="iconify text-indigo-400 inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
<td className="border-b border-white/10 p-5 text-center">
<span className="sr-only">Werbefrei</span>
<span aria-hidden="true" className="iconify text-white inline-block" data-icon="lucide:check" data-strokeWidth="2"></span>
</td>
</tr>

<tr className="even:bg-white/[0.03]">
<th className="sticky left-0 z-10 bg-[#0a0a0a] border-r border-white/20 p-5 font-medium text-zinc-200 align-middle shadow-[4px_0_24px_rgba(0,0,0,0.5)]" scope="row">
                                Abo wählen
                            </th>

<td className="p-5 align-middle">
<button aria-label="Mini Plan wählen" className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">Wählen</button>
</td>
<td className="p-5 align-middle">
<button aria-label="Mobile Plan wählen" className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">Wählen</button>
</td>
<td className="p-5 align-middle">
<button aria-label="Basic Plan wählen" className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">Wählen</button>
</td>
<td className="bg-indigo-500/[0.05] p-5 align-middle border-b border-transparent">
<button aria-label="Standard Plan jetzt starten" className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 border border-indigo-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">Starten</button>
</td>
<td className="p-5 align-middle">
<button aria-label="Family Plan wählen" className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">Wählen</button>
</td>
<td className="p-5 align-middle">
<button aria-label="Premium Plan wählen" className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">Wählen</button>
</td>
<td className="p-5 align-middle">
<button aria-label="Ultimate Plan wählen" className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">Wählen</button>
</td>
<td className="p-5 align-middle">
<button aria-label="Jahrespass wählen und sparen" className="w-full py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-sm font-semibold text-emerald-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">Sparen</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p className="mt-8 text-center text-zinc-400 text-sm">
            * Alle Preise verstehen sich inkl. der gesetzlichen Mehrwertsteuer. Das Abonnement ist monatlich kündbar.
        </p>
</main>

    </>
  );
}

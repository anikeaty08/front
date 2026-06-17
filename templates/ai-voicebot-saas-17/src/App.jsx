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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#ecfdf5',
100: '#d1fae5',
200: '#a7f3d0',
300: '#6ee7b7',
400: '#34d399',
500: '#10b981', // Emerald 500 equivalent
600: '#059669',
700: '#047857',
800: '#065f46',
900: '#064e3b',
950: '#022c22',
}
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-white font-semibold tracking-tighter text-lg">X-TALK</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Funkcje</a>
<a className="hover:text-white transition-colors" href="#integrations">Integracje</a>
<a className="hover:text-white transition-colors" href="#process">Proces</a>
<a className="hover:text-white transition-colors" href="#cases">Zastosowanie</a>
</div>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 text-xs font-medium text-white transition-colors hover:bg-white/10 hover:text-brand-400" href="#contact">
                Strefa Klienta
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden gradient-bg">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-400 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        AI Voicebot &amp; Chatbot 24/7
                    </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                        Voicebot AI – telefony <br/>
<span className="text-brand-400 glow-text">wykonywane i odbierane</span> <br/>
                        za Ciebie
                    </h1>
<p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-lg">
                        X-TALK to asystent głosowy AI działający 24/7, dostępny także w formie chatbota: odbiera telefony i oddzwania, odpowiada na wiadomości oraz obsługuje zapytania bez kolejek i opóźnień – tak, aby żadne zgłoszenie nie pozostało bez odpowiedzi.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-12 px-6 rounded-lg bg-brand-600 text-white font-medium text-sm hover:bg-brand-500 transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2">
                            Zapytaj o X-TALK
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-12 px-6 rounded-lg border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                            Zadzwoń do X-TALKa
                        </button>
</div>
</div>

<div className="relative h-[400px] w-full flex items-center justify-center">
<div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-full opacity-20"></div>

<div className="absolute border border-white/5 rounded-full w-[300px] h-[300px] animate-[spin_10s_linear_infinite]"></div>
<div className="absolute border border-white/10 rounded-full w-[450px] h-[450px] border-dashed animate-[spin_20s_linear_infinite_reverse]"></div>

<div className="absolute top-10 right-10 glass-card p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-lg shadow-black/50" style={{animationDuration: '3s'}}>
<div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
<span className="iconify" data-icon="lucide:phone-incoming" data-width="16"></span>
</div>
<div>
<div className="text-xs text-neutral-400">Połączenie przychodzące</div>
<div className="text-sm text-white font-medium">Jan Kowalski</div>
</div>
</div>
<div className="absolute bottom-10 left-0 glass-card p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-lg shadow-black/50" style={{animationDuration: '4s'}}>
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:calendar-check" data-width="16"></span>
</div>
<div>
<div className="text-xs text-neutral-400">Spotkanie umówione</div>
<div className="text-sm text-white font-medium">Jutro, 14:00</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Więcej spraw załatwianych automatycznie</h2>
<p className="text-neutral-400">Produkty X-TALK mogą działać jak jeden agent, niezależnie od punktu kontaktu. Klient może rozpocząć rozmowę telefonicznie, a dokończyć na czacie.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group hover:border-brand-500/30 transition-colors">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-brand-500/10 group-hover:text-brand-400 transition-colors">
<span className="iconify" data-icon="lucide:mic" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Voicebot</h3>
<p className="text-sm text-neutral-400">Naturalna rozmowa telefoniczna. Odbieranie i wykonywanie połączeń z ludzką intonacją.</p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-brand-500/30 transition-colors">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-brand-500/10 group-hover:text-brand-400 transition-colors">
<span className="iconify" data-icon="lucide:message-square" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Chatbot</h3>
<p className="text-sm text-neutral-400">Inteligentny chat na stronie www. Odpowiada natychmiastowo na pytania klientów.</p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-brand-500/30 transition-colors">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-brand-500/10 group-hover:text-brand-400 transition-colors">
<span className="iconify" data-icon="lucide:smartphone" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">SMS i WhatsApp</h3>
<p className="text-sm text-neutral-400">Obsługa asynchroniczna. Wysyłanie podsumowań, linków i przypomnień.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="integrations">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Integracje z innymi systemami</h2>
<p className="text-neutral-400 text-sm">X-TALK łączy się z Twoją infrastrukturą w czasie rzeczywistym.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300">CRM</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300">ERP</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300">Calendar</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="glass-card p-6 rounded-xl flex items-start gap-4">
<div className="mt-1 text-brand-400"><span className="iconify" data-icon="lucide:package-check" data-width="20"></span></div>
<div>
<h4 className="text-white font-medium text-sm">Status zamówienia</h4>
<p className="text-xs text-neutral-500 mt-1">Weryfikacja statusu przesyłki w czasie rzeczywistym.</p>
</div>
</div>
<div className="glass-card p-6 rounded-xl flex items-start gap-4">
<div className="mt-1 text-brand-400"><span className="iconify" data-icon="lucide:calendar-clock" data-width="20"></span></div>
<div>
<h4 className="text-white font-medium text-sm">Dostępność terminów</h4>
<p className="text-xs text-neutral-500 mt-1">Sprawdzanie i rezerwacja w CRM/Kalendarzach.</p>
</div>
</div>
<div className="glass-card p-6 rounded-xl flex items-start gap-4">
<div className="mt-1 text-brand-400"><span className="iconify" data-icon="lucide:wallet" data-width="20"></span></div>
<div>
<h4 className="text-white font-medium text-sm">Finanse i limity</h4>
<p className="text-xs text-neutral-500 mt-1">Saldo klienta, płatności i limity kredytowe (ERP).</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Jak działa voicebot X-TALK?</h2>
<p className="text-neutral-400 mt-2">Poznaj proces, dzięki któremu voicebot sprawdza się tak dobrze.</p>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4 relative shadow-[0_0_15px_rgba(0,0,0,0.5)]">
<span className="iconify" data-icon="lucide:phone-call" data-width="16"></span>
</div>
<span className="text-xs font-medium text-white">Połączenie</span>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
<span className="iconify" data-icon="lucide:file-audio" data-width="16"></span>
</div>
<span className="text-xs font-medium text-white">Transkrypcja</span>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="16"></span>
</div>
<span className="text-xs font-medium text-white">Analiza</span>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
<span className="iconify" data-icon="lucide:cpu" data-width="16"></span>
</div>
<span className="text-xs font-medium text-white">Przetwarzanie</span>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-brand-500/50 flex items-center justify-center text-brand-400 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<span className="iconify" data-icon="lucide:network" data-width="16"></span>
</div>
<span className="text-xs font-medium text-brand-400">Integracje</span>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
<span className="iconify" data-icon="lucide:message-circle-reply" data-width="16"></span>
</div>
<span className="text-xs font-medium text-white">Odpowiedź</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Zobacz X-TALK w akcji</h2>
<div className="rounded-2xl border border-white/10 bg-[#080808] overflow-hidden shadow-2xl relative">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
<div className="ml-4 px-3 py-1 bg-black/40 rounded text-[10px] text-neutral-500 font-mono">live-call-session-042.log</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 h-[500px]">

<div className="md:col-span-2 p-6 flex flex-col justify-end gap-4 border-r border-white/5 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)]">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
<span className="iconify text-brand-400" data-icon="lucide:bot" data-width="14"></span>
</div>
<div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-4 max-w-sm">
<p className="text-sm text-neutral-300">Dzień dobry, tu wirtualny asystent X-Talk. W czym mogę pomóc?</p>
<div className="mt-2 flex items-center gap-2">
<div className="h-4 w-24 bg-brand-500/20 rounded flex items-center px-1 gap-0.5">
<div className="h-2 w-0.5 bg-brand-500 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="h-3 w-0.5 bg-brand-500 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="h-1 w-0.5 bg-brand-500 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="h-2 w-0.5 bg-brand-500 animate-[pulse_1.1s_ease-in-out_infinite]"></div>
</div>
<span className="text-[10px] text-neutral-500">Audio generated</span>
</div>
</div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
<span className="iconify text-neutral-400" data-icon="lucide:user" data-width="14"></span>
</div>
<div className="bg-neutral-800 border border-white/5 rounded-2xl rounded-tr-none p-4 max-w-sm">
<p className="text-sm text-neutral-300">Chciałbym sprawdzić status mojego zamówienia numer 4590.</p>
</div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
<span className="iconify text-brand-400" data-icon="lucide:bot" data-width="14"></span>
</div>
<div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-4 max-w-sm">
<p className="text-sm text-neutral-300">Twoje zamówienie jest w trakcie pakowania. Przewidywana dostawa to jutro.</p>
</div>
</div>
</div>

<div className="p-6 bg-black/20">
<div className="mb-6">
<h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Live Analysis</h4>
<div className="space-y-3">
<div className="bg-white/5 rounded p-3 border border-white/5">
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-400">Sentiment</span>
<span className="text-green-400">Positive</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-green-500 w-[85%] h-full"></div>
</div>
</div>
<div className="bg-white/5 rounded p-3 border border-white/5">
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-400">Intent</span>
<span className="text-white">Order Status</span>
</div>
<div className="text-[10px] text-neutral-500 font-mono mt-1">confidence: 0.98</div>
</div>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">CRM Context</h4>
<div className="bg-white/5 rounded p-3 border border-white/5 space-y-2">
<div className="flex items-center gap-2 text-xs text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:user" data-width="12"></span>
                                    Marek Nowak
                                </div>
<div className="flex items-center gap-2 text-xs text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:mail" data-width="12"></span>
                                    marek@firma.pl
                                </div>
<div className="flex items-center gap-2 text-xs text-brand-400">
<span className="iconify" data-icon="lucide:check-circle" data-width="12"></span>
                                    Verified Client
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Aktywne pozyskiwanie leadów</h2>
<p className="text-neutral-400 mb-8">Zautomatyzuj proces wychodzący. X-TALK potrafi samodzielnie dzwonić do bazy kontaktów i kwalifikować potencjalnych klientów.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-brand-900/50 border border-brand-500/20 flex items-center justify-center text-brand-400 text-xs font-bold">1</div>
<div>
<h4 className="text-white font-medium text-sm">Agent dzwoni do kontaktów</h4>
<p className="text-sm text-neutral-500 mt-1">Import bazy CSV lub API CRM. Automatyczne wybieranie.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-brand-900/50 border border-brand-500/20 flex items-center justify-center text-brand-400 text-xs font-bold">2</div>
<div>
<h4 className="text-white font-medium text-sm">Kwalifikuje leada</h4>
<p className="text-sm text-neutral-500 mt-1">Zadaje pytania filtrujące, sprawdza zainteresowanie.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-brand-900/50 border border-brand-500/20 flex items-center justify-center text-brand-400 text-xs font-bold">3</div>
<div>
<h4 className="text-white font-medium text-sm">Umawia spotkanie / Przekazuje kontekst</h4>
<p className="text-sm text-neutral-500 mt-1">Rezerwuje termin w kalendarzu lub przełącza do handlowca z notatką.</p>
</div>
</div>
</div>
</div>
<div className="glass-card p-1 rounded-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent pointer-events-none"></div>
<div className="bg-black/80 rounded-xl p-8 border border-white/5 relative z-10">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-medium text-neutral-400">Campaign: Cold Calling Q3</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-400">Active</span>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm text-white">Firma XYZ Sp. z o.o.</span>
</div>
<span className="text-xs text-neutral-500">W trakcie rozmowy...</span>
</div>
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 opacity-50">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
<span className="text-sm text-white">Startup ABC</span>
</div>
<span className="text-xs text-neutral-500">W kolejce</span>
</div>
<div className="flex items-center justify-between p-3 rounded bg-emerald-900/20 border border-emerald-500/20">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm text-emerald-100">Tech Solutions</span>
</div>
<span className="text-xs text-emerald-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:check" data-width="12"></span> Spotkanie umówione
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12">
<div className="flex-1">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Voicebot, który zna dostępność konsultantów</h2>
<p className="text-neutral-400 mb-6">Pełna synchronizacja z godzinami pracy i kalendarzami zespołu. Jeśli konsultant jest zajęty, bot zaproponuje oddzwonienie lub inny termin.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<span className="iconify text-brand-400" data-icon="lucide:check" data-width="16"></span>
                            Integracja z Google Calendar / Outlook
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<span className="iconify text-brand-400" data-icon="lucide:check" data-width="16"></span>
                            Obsługa godzin pracy i stref czasowych
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<span className="iconify text-brand-400" data-icon="lucide:check" data-width="16"></span>
                            Fallback do wiadomości głosowej
                        </li>
</ul>
</div>
<div className="flex-1">

<div className="glass-card p-6 rounded-2xl">
<div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
<span className="text-sm font-medium text-white">Dostępność zespołu</span>
<span className="text-xs text-neutral-500">Today</span>
</div>
<div className="grid grid-cols-4 gap-2 text-center text-xs text-neutral-500 mb-2">
<div>9:00</div>
<div>10:00</div>
<div>11:00</div>
<div>12:00</div>
</div>
<div className="space-y-2">

<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs text-white">JK</div>
<div className="flex-1 h-8 bg-neutral-800 rounded relative overflow-hidden">
<div className="absolute left-[10%] w-[40%] h-full bg-red-900/40 border-l border-r border-red-500/20 flex items-center justify-center text-[10px] text-red-300">Zajęty</div>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs text-white">AM</div>
<div className="flex-1 h-8 bg-neutral-800 rounded relative overflow-hidden">
<div className="absolute left-[60%] w-[30%] h-full bg-brand-900/40 border-l border-r border-brand-500/20 flex items-center justify-center text-[10px] text-brand-300">Wolny</div>
</div>
</div>
</div>
<div className="mt-4 p-3 bg-brand-500/10 rounded border border-brand-500/20 flex items-start gap-3">
<span className="iconify text-brand-400 mt-0.5" data-icon="lucide:bot" data-width="16"></span>
<p className="text-xs text-brand-100">"Widzę, że Anna jest wolna o 11:30. Czy mam połączyć?"</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-12 text-center">Trzy filary X-TALK</h2>
<div className="grid md:grid-cols-3 gap-6 mb-6">

<div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-64">
<div>
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 text-white"><span className="iconify" data-icon="lucide:mic-2" data-width="20"></span></div>
<h3 className="text-lg font-medium text-white mb-2">Odpowiedni głos AI</h3>
<p className="text-sm text-neutral-400">Naturalnie brzmiący lektorzy. Ultra-niskie opóźnienia.</p>
</div>

<div className="bg-black/30 rounded-lg p-3 flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:play" data-width="10"></span>
</div>
<div className="flex-1 flex items-center gap-0.5 h-4">
<div className="w-1 bg-brand-500 h-2"></div>
<div className="w-1 bg-brand-500 h-4"></div>
<div className="w-1 bg-brand-500 h-3"></div>
<div className="w-1 bg-brand-500 h-2"></div>
<div className="w-1 bg-neutral-700 h-1"></div>
<div className="w-1 bg-neutral-700 h-1"></div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-64">
<div>
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 text-white"><span className="iconify" data-icon="lucide:zap" data-width="20"></span></div>
<h3 className="text-lg font-medium text-white mb-2">Obsługa zdarzeń</h3>
<p className="text-sm text-neutral-400">Reakcja na przerwanie wypowiedzi, ciszę i zmianę kontekstu.</p>
</div>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-1 rounded bg-white/10 text-neutral-300">Barge-in</span>
<span className="text-[10px] px-2 py-1 rounded bg-white/10 text-neutral-300">Silence detect</span>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-64">
<div>
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 text-white"><span className="iconify" data-icon="lucide:workflow" data-width="20"></span></div>
<h3 className="text-lg font-medium text-white mb-2">Integracje</h3>
<p className="text-sm text-neutral-400">Łatwe połączenie z dowolnym API biznesowym.</p>
</div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px]">API</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px]">WEB</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px]">SQL</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-l-4 border-l-brand-500">
<div>
<h3 className="text-xl font-semibold text-white mb-2">Inteligentne zarządzanie kolejką</h3>
<p className="text-neutral-400 text-sm max-w-lg">
                        Możliwość obsługi tysięcy numerów telefonicznych jednocześnie. Gdy linia jest zajęta, bot proponuje automatyczne oddzwonienie, eliminując frustrację klienta.
                    </p>
</div>
<div className="flex items-center gap-8">
<div className="text-center">
<div className="text-2xl font-bold text-white">∞</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wide">Równoczesnych połączeń</div>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="text-center">
<div className="text-2xl font-bold text-brand-400">0s</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wide">Czas oczekiwania</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20" id="cases">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Zastosowania</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="iconify text-brand-400 mb-3" data-icon="lucide:shopping-cart" data-width="24"></span>
<h4 className="text-white font-medium mb-1">E-commerce</h4>
<p className="text-xs text-neutral-500">Statusy zamówień, zwroty.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="iconify text-brand-400 mb-3" data-icon="lucide:graduation-cap" data-width="24"></span>
<h4 className="text-white font-medium mb-1">Edukacja</h4>
<p className="text-xs text-neutral-500">Rekrutacja, plany zajęć.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="iconify text-brand-400 mb-3" data-icon="lucide:briefcase" data-width="24"></span>
<h4 className="text-white font-medium mb-1">B2B Sprzedaż</h4>
<p className="text-xs text-neutral-500">Lead generation, umawianie.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="iconify text-brand-400 mb-3" data-icon="lucide:shield-check" data-width="24"></span>
<h4 className="text-white font-medium mb-1">Finanse</h4>
<p className="text-xs text-neutral-500">Windykacja, weryfikacja.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight text-center mb-16">Dlaczego X-TALK?</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
<div className="relative bg-black rounded-2xl p-8 border border-white/10 h-full">
<h3 className="text-lg font-medium text-white mb-3">Automatyzacja z jakością</h3>
<p className="text-sm text-neutral-400">Redukcja kosztów obsługi klienta o 60% przy zachowaniu wysokiego CSAT.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
<div className="relative bg-black rounded-2xl p-8 border border-white/10 h-full">
<h3 className="text-lg font-medium text-white mb-3">Spójność omnichannel</h3>
<p className="text-sm text-neutral-400">Ta sama baza wiedzy i ton komunikacji w telefonie, czacie i mailu.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
<div className="relative bg-black rounded-2xl p-8 border border-white/10 h-full">
<h3 className="text-lg font-medium text-white mb-3">Szybkie wdrożenie</h3>
<p className="text-sm text-neutral-400">Gotowe scenariusze branżowe pozwalają na uruchomienie bota w kilka dni.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#030303]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Stwórz agenta w 5 minut</h2>
<p className="text-neutral-400 mb-8 text-sm">Konfigurator no-code. Wybierz cel, wgraj bazę wiedzy i gotowe.</p>
<div className="glass-card p-6 rounded-xl border border-white/10">
<div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-brand-500 text-black flex items-center justify-center text-xs font-bold">1</span>
<span className="text-xs text-white">Cel</span>
</div>
<div className="w-8 h-px bg-white/10"></div>
<div className="flex items-center gap-2 opacity-50">
<span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold">2</span>
<span className="text-xs text-white">Wiedza</span>
</div>
<div className="w-8 h-px bg-white/10"></div>
<div className="flex items-center gap-2 opacity-50">
<span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold">3</span>
<span className="text-xs text-white">Głos</span>
</div>
</div>
<div className="space-y-4">
<div>
<label className="text-xs text-neutral-400 mb-2 block">Nazwa Agenta</label>
<input className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-brand-500/50 outline-none" placeholder="np. Asystent Sprzedaży" type="text"/>
</div>
<div>
<label className="text-xs text-neutral-400 mb-2 block">Typ zadania</label>
<div className="grid grid-cols-2 gap-2">
<button className="bg-brand-500/20 border border-brand-500/50 text-brand-300 px-3 py-2 rounded text-xs text-left">Obsługa klienta</button>
<button className="bg-white/5 border border-white/10 text-neutral-400 px-3 py-2 rounded text-xs text-left hover:bg-white/10">Sprzedaż / Cold Call</button>
</div>
</div>
<button className="w-full bg-white text-black font-medium text-xs py-2 rounded mt-2 hover:bg-neutral-200">Dalej</button>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Platforma dla biznesu</h2>
<p className="text-neutral-400 mb-8 text-sm">Centralny panel zarządzania wynikami i analityką.</p>
<div className="grid grid-cols-2 gap-4">

<div className="glass-card p-4 rounded-xl">
<div className="text-xs text-neutral-500 mb-2">Automatyzacja</div>
<div className="text-2xl font-semibold text-white">87%</div>
<div className="text-[10px] text-green-400 mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="10"></span> +12%
                             </div>
</div>

<div className="glass-card p-4 rounded-xl">
<div className="text-xs text-neutral-500 mb-2">Śr. czas rozmowy</div>
<div className="text-2xl font-semibold text-white">1m 42s</div>
</div>

<div className="col-span-2 glass-card p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-blue-500/20 text-blue-400 p-2 rounded">
<span className="iconify" data-icon="lucide:calendar" data-width="16"></span>
</div>
<div>
<div className="text-xs text-white font-medium">Cal.com Integration</div>
<div className="text-[10px] text-neutral-500">Sync active</div>
</div>
</div>
<div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black" id="contact">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-white font-semibold tracking-tighter text-xl">X-TALK</div>
<div className="text-sm text-neutral-500">© 2024 X-TALK AI. Wszystkie prawa zastrzeżone.</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
</div>
</div>
</footer>

    </>
  );
}

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
      

<header className="border-b border-gray-900 bg-black/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="font-mono text-2xl font-semibold tracking-tight text-white flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<i className="w-6 h-6 text-[#00F0FF]" data-lucide="terminal" strokeWidth="1.5"></i> DUCTLY_
            </a>
<nav className="hidden md:flex gap-8 font-mono text-base text-gray-400">
<a className="hover:text-[#00F0FF] transition-colors focus:outline-none focus:text-[#00F0FF]" href="#korzysci">/korzysci</a>
<a className="hover:text-[#00F0FF] transition-colors focus:outline-none focus:text-[#00F0FF]" href="#wyzwania">/wyzwania</a>
<a className="hover:text-[#00F0FF] transition-colors focus:outline-none focus:text-[#00F0FF]" href="#proces">/proces</a>
</nav>
<a className="hidden md:inline-flex border border-gray-700 text-gray-300 px-5 py-2.5 text-base font-mono font-medium hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors rounded-none focus:outline-none focus:ring-1 focus:ring-[#00F0FF]" href="#cta">
                INITIATE
            </a>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 border border-gray-800 bg-[#050505] px-4 py-1.5 text-base font-mono text-[#00F0FF]">
<div className="w-2 h-2 bg-[#00F0FF] animate-pulse"></div>
                &gt; SYSTEM STATUS: OPTIMIZATION REQUIRED
            </div>
<h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white uppercase leading-[1.1]">
                Przestań zatrudniać <span className="text-[#00F0FF] relative inline-block"><span className="relative z-10">ludzi</span><span className="absolute bottom-0 left-0 w-full h-1/3 bg-[#00F0FF]/20 -z-0"></span></span> do pracy, którą powinien robić kod.
            </h1>
<p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Wdrażamy bezlitosną automatyzację dla biznesu. Zastępujemy chaos powtarzalnych zadań precyzyjnymi skryptami, uwalniając Twój czas i kapitał.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center gap-3 bg-[#00F0FF] text-black px-8 py-5 font-mono text-lg font-medium hover:bg-white transition-colors rounded-none group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#00F0FF]" href="#cta">
                    ZAREZERWUJ ANALIZĘ ROI
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px] border border-gray-800 bg-[#020202] p-8 flex items-center justify-center overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-4 w-full h-full max-w-md max-h-md">
<div className="border border-gray-800 bg-black flex items-center justify-center group-hover:border-gray-600 transition-colors duration-500"></div>
<div className="border border-[#00F0FF]/30 bg-[#00F0FF]/5 flex items-center justify-center">
<i className="w-8 h-8 text-[#00F0FF] opacity-50" data-lucide="binary" strokeWidth="1.5"></i>
</div>
<div className="border border-gray-800 bg-black"></div>
<div className="border border-gray-800 bg-black flex items-center justify-center">
<i className="w-8 h-8 text-gray-600" data-lucide="database" strokeWidth="1.5"></i>
</div>
<div className="border border-[#00F0FF] bg-black flex items-center justify-center relative shadow-[0_0_30px_rgba(0,240,255,0.2)]">
<i className="w-12 h-12 text-[#00F0FF]" data-lucide="cpu" strokeWidth="1.5"></i>

<div className="absolute inset-0 border-t border-[#00F0FF] opacity-50 translate-y-[-100%] animate-[scan_3s_linear_infinite]"></div>
</div>
<div className="border border-gray-800 bg-black flex items-center justify-center">
<i className="w-8 h-8 text-gray-600" data-lucide="network" strokeWidth="1.5"></i>
</div>
<div className="border border-gray-800 bg-black"></div>
<div className="border border-[#00F0FF]/30 bg-[#00F0FF]/5 flex items-center justify-center">
<i className="w-8 h-8 text-[#00F0FF] opacity-50" data-lucide="code" strokeWidth="1.5"></i>
</div>
<div className="border border-gray-800 bg-black flex items-center justify-center group-hover:border-gray-600 transition-colors duration-500"></div>
</div>
<style>
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(500%); }
                }
            </style>
</div>
</section>

<section className="border-t border-gray-900 bg-[#050505]" id="korzysci">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="mb-16">
<h2 className="font-mono text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 uppercase flex items-center gap-3">
<span className="text-[#00F0FF]">/</span> KORZYŚCI_SYSTEMOWE
                </h2>
<p className="text-lg text-gray-400 max-w-2xl">Mierzalne wyniki wdrożenia bezwzględnej architektury procesowej DUCTLY.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border border-gray-800 p-8 hover:border-[#00F0FF]/60 transition-colors duration-300 group bg-black relative">
<div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-gray-800 group-hover:border-[#00F0FF]/60 transition-colors duration-300"></div>
<i className="w-8 h-8 text-[#00F0FF] mb-6" data-lucide="trending-up" strokeWidth="1.5"></i>
<h3 className="font-mono text-2xl font-medium text-white mb-4 tracking-tight">Eksplozja ROI</h3>
<p className="text-lg text-gray-400">Zwróć koszt wdrożenia w tygodnie, nie lata. Zastąp miesięczne koszty operacyjne jednorazową, strategiczną inwestycją w kod.</p>
</div>

<div className="border border-gray-800 p-8 hover:border-[#00F0FF]/60 transition-colors duration-300 group bg-black relative">
<div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-gray-800 group-hover:border-[#00F0FF]/60 transition-colors duration-300"></div>
<i className="w-8 h-8 text-[#00F0FF] mb-6" data-lucide="clock" strokeWidth="1.5"></i>
<h3 className="font-mono text-2xl font-medium text-white mb-4 tracking-tight">Odzyskany Czas</h3>
<p className="text-lg text-gray-400">Procesy trwające godzinami skracamy do ułamków sekund. Uwalniamy przepustowość, by Twój zespół mógł wrócić do pracy koncepcyjnej.</p>
</div>

<div className="border border-gray-800 p-8 hover:border-[#00F0FF]/60 transition-colors duration-300 group bg-black relative">
<div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-gray-800 group-hover:border-[#00F0FF]/60 transition-colors duration-300"></div>
<i className="w-8 h-8 text-[#00F0FF] mb-6" data-lucide="shield-alert" strokeWidth="1.5"></i>
<h3 className="font-mono text-2xl font-medium text-white mb-4 tracking-tight">Zero Błędów</h3>
<p className="text-lg text-gray-400">Skrypty nie mają gorszych dni i nie zapominają. Całkowicie eliminujemy kosztowne błędy ludzkie (tzw. "czynnik białkowy").</p>
</div>

<div className="border border-gray-800 p-8 hover:border-gray-500 transition-colors duration-300 group bg-black relative">
<div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-gray-800 group-hover:border-gray-500 transition-colors duration-300"></div>
<i className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300 mb-6" data-lucide="zap" strokeWidth="1.5"></i>
<h3 className="font-mono text-2xl font-medium text-white mb-4 tracking-tight">Skalowalność 24/7</h3>
<p className="text-lg text-gray-400">Twój cyfrowy pracownik może obsłużyć x10 lub x1000 zapytań bez zmiany kosztów, przerw na kawę i narzekania.</p>
</div>

<div className="border border-gray-800 p-8 hover:border-gray-500 transition-colors duration-300 group bg-black relative">
<div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-gray-800 group-hover:border-gray-500 transition-colors duration-300"></div>
<i className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300 mb-6" data-lucide="database-backup" strokeWidth="1.5"></i>
<h3 className="font-mono text-2xl font-medium text-white mb-4 tracking-tight">Spójność Danych</h3>
<p className="text-lg text-gray-400">Koniec z ręcznym przepisywaniem danych między arkuszami a CRM. Gwarantujemy pełną synchronizację w czasie rzeczywistym.</p>
</div>

<div className="border border-gray-800 p-8 hover:border-gray-500 transition-colors duration-300 group bg-black relative">
<div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-gray-800 group-hover:border-gray-500 transition-colors duration-300"></div>
<i className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300 mb-6" data-lucide="lock" strokeWidth="1.5"></i>
<h3 className="font-mono text-2xl font-medium text-white mb-4 tracking-tight">Pełna Kontrola</h3>
<p className="text-lg text-gray-400">Oprzyj procesy o niezawodne API, a nie pamięć pracowników. Ty jako właściciel odzyskujesz pełną kontrolę nad infrastrukturą.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-900 bg-black" id="wyzwania">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="mb-16">
<h2 className="font-mono text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 uppercase flex items-center gap-3">
<span className="text-gray-600">/</span> WYKRYTE_ANOMALIE
                </h2>
<p className="text-lg text-gray-400 max-w-2xl">Zdiagnozowaliśmy krytyczne słabości w standardowych procesach operacyjnych małych i średnich firm.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border-l-2 border-red-900/50 bg-[#050505] p-8 relative">
<div className="font-mono text-base text-red-500/80 mb-6 tracking-tight">&gt; ERR_01: MANUAL_OVERLOAD</div>
<h3 className="font-mono text-2xl font-medium text-white mb-4 tracking-tight">Kosztowny Chaos</h3>
<p className="text-lg text-gray-400">Zatrudniasz świetnych ekspertów, ale każesz im wykonywać powtarzalną robotę typu "kopiuj-wklej". Przepalasz ich potencjał, motywację i własny budżet na etaty.</p>
</div>

<div className="border-l-2 border-red-900/50 bg-[#050505] p-8 relative">
<div className="font-mono text-base text-red-500/80 mb-6 tracking-tight">&gt; ERR_02: BOTTLENECK_DETECTED</div>
<h3 className="font-mono text-2xl font-medium text-white mb-4 tracking-tight">Wąskie Gardła</h3>
<p className="text-lg text-gray-400">Rozwój Twojej firmy brutalnie blokuje przepustowość zespołu. Gdy rośnie sprzedaż, cały system zatyka się pod toną nieprzeczytanych maili i rozjeżdżających się tabelek.</p>
</div>

<div className="border-l-2 border-red-900/50 bg-[#050505] p-8 relative">
<div className="font-mono text-base text-red-500/80 mb-6 tracking-tight">&gt; ERR_03: KNOWLEDGE_LEAK</div>
<h3 className="font-mono text-2xl font-medium text-white mb-4 tracking-tight">Utrata Wiedzy</h3>
<p className="text-lg text-gray-400">Kluczowe procesy istnieją wyłącznie w głowach konkretnych pracowników. Gdy ktoś bierze urlop lub odchodzi, firma natychmiast traci płynność działania i bezpieczeństwo.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/10 via-black to-black overflow-hidden relative" id="proces">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center relative z-10">
<h2 className="font-mono text-3xl md:text-4xl font-semibold tracking-tight text-white mb-20 uppercase flex justify-center items-center gap-3">
<span className="text-[#00F0FF]">/</span> FLOW_EGZEKUCJI
            </h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 lg:gap-8 max-w-5xl mx-auto">

<div className="w-full md:w-72 border border-gray-800 bg-[#050505] p-8 relative text-left">
<div className="absolute -top-3 -left-3 bg-[#00F0FF] text-black font-mono text-xs px-2 py-1 font-medium">INPUT</div>
<i className="w-6 h-6 text-gray-500 mb-6" data-lucide="zap" strokeWidth="1.5"></i>
<h4 className="font-mono text-lg font-medium text-white tracking-tight mb-3">Wyzwalacz (Trigger)</h4>
<p className="text-base text-gray-400 leading-relaxed">System nasłuchuje 24/7. Nowy lead w CRM, mail od klienta, czy płatność na koncie inicjuje proces.</p>
</div>

<div className="flex flex-col items-center justify-center py-2 md:py-0">
<div className="w-px h-8 md:w-12 md:h-px bg-gray-800"></div>
<i className="hidden md:block w-5 h-5 text-gray-600 -ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
<i className="md:hidden w-5 h-5 text-gray-600 -mt-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>

<div className="w-full md:w-72 border border-[#00F0FF]/30 bg-[#00F0FF]/5 p-8 relative text-left shadow-[0_0_20px_rgba(0,240,255,0.05)]">
<i className="w-6 h-6 text-[#00F0FF] mb-6" data-lucide="cpu" strokeWidth="1.5"></i>
<h4 className="font-mono text-lg font-medium text-[#00F0FF] tracking-tight mb-3">Logika &amp; AI</h4>
<p className="text-base text-gray-400 leading-relaxed">Dane są formatowane, sprawdzane warunki. Sztuczna inteligencja analizuje tekst, kategoryzuje i podejmuje decyzje wg Twoich reguł.</p>
</div>

<div className="flex flex-col items-center justify-center py-2 md:py-0">
<div className="w-px h-8 md:w-12 md:h-px bg-gray-800"></div>
<i className="hidden md:block w-5 h-5 text-gray-600 -ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
<i className="md:hidden w-5 h-5 text-gray-600 -mt-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>

<div className="w-full md:w-72 border border-gray-800 bg-[#050505] p-8 relative text-left">
<div className="absolute -top-3 -right-3 bg-gray-800 text-white font-mono text-xs px-2 py-1 font-medium">OUTPUT</div>
<i className="w-6 h-6 text-gray-500 mb-6" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<h4 className="font-mono text-lg font-medium text-white tracking-tight mb-3">Akcja (Action)</h4>
<p className="text-base text-gray-400 leading-relaxed">Zapis w bazie danych, wystawienie faktury, wysłanie spersonalizowanej wiadomości SMS/Mail bez udziału człowieka.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-900 bg-black">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="space-y-8 order-2 lg:order-1">
<h2 className="font-mono text-3xl md:text-4xl font-semibold tracking-tight text-white uppercase">
<span className="text-gray-600">/</span> CYFROWA_HYDRAULIKA
                </h2>
<p className="text-lg text-gray-400 leading-relaxed">
                    Nie budujemy zabawek ani prostych "zapów". Projektujemy i wdrażamy przemysłową architekturę danych dla Twojego biznesu. Łączymy systemy, które z założenia miały ze sobą nie rozmawiać.
                </p>
<div className="space-y-6 pt-4">
<div className="flex gap-4">
<div className="mt-1"><i className="w-6 h-6 text-[#00F0FF]" data-lucide="square-terminal" strokeWidth="1.5"></i></div>
<div>
<h4 className="font-mono text-xl font-medium text-white tracking-tight mb-2">Make.com jako rdzeń</h4>
<p className="text-lg text-gray-400">Wykorzystujemy zaawansowane możliwości Make do budowy centralnego routera danych, odpornego na błędy i gotowego na skalowanie.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1"><i className="w-6 h-6 text-[#00F0FF]" data-lucide="message-square-dashed" strokeWidth="1.5"></i></div>
<div>
<h4 className="font-mono text-xl font-medium text-white tracking-tight mb-2">Whapi (WhatsApp API)</h4>
<p className="text-lg text-gray-400">Wdrażamy bezobsługową komunikację z klientami tam, gdzie są najbardziej aktywni. Boty, które brzmią i działają jak najlepsi handlowcy.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1"><i className="w-6 h-6 text-[#00F0FF]" data-lucide="brain-circuit" strokeWidth="1.5"></i></div>
<div>
<h4 className="font-mono text-xl font-medium text-white tracking-tight mb-2">LLMs (OpenAI / Claude)</h4>
<p className="text-lg text-gray-400">Wpinamy sztuczną inteligencję jako moduł decyzyjny i analityczny, nie tylko generator tekstu. Przetwarzamy nieustrukturyzowane dane na konkretne zmienne.</p>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] border border-gray-800 bg-[#020202] p-6 sm:p-12 flex items-center justify-center order-1 lg:order-2 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative z-10 w-full max-w-md flex flex-col items-center">

<div className="w-full flex justify-between items-center border border-gray-700 bg-black p-4 mb-8">
<div className="font-mono text-sm text-gray-400">WEBHOOK_IN</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse"></span>
<span className="w-2 h-2 rounded-full bg-gray-800"></span>
<span className="w-2 h-2 rounded-full bg-gray-800"></span>
</div>
</div>

<div className="w-px h-8 bg-gray-700 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-gray-500 bg-black"></div>
</div>

<div className="border border-[#00F0FF] bg-[#00F0FF]/5 p-6 text-center w-full z-10 relative">
<div className="absolute -left-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#00F0FF] rotate-[-90deg]">ROUTER</div>
<div className="font-mono text-lg text-[#00F0FF] font-medium tracking-tight">MAKE.COM_CORE</div>
<div className="mt-2 text-xs font-mono text-gray-500">PROCESSING...</div>
</div>

<div className="flex justify-between w-3/4 h-8 relative -z-0">
<div className="w-px h-full bg-gray-700 relative left-0"></div>
<div className="w-px h-full bg-gray-700 absolute left-1/2 -translate-x-1/2"></div>
<div className="w-px h-full bg-gray-700 relative right-0"></div>

<div className="absolute top-0 left-0 w-full h-px bg-gray-700"></div>
</div>

<div className="w-full grid grid-cols-3 gap-4 relative z-10">
<div className="border border-gray-800 bg-black p-3 text-center">
<i className="w-5 h-5 text-gray-500 mx-auto mb-2" data-lucide="message-circle" strokeWidth="1.5"></i>
<div className="font-mono text-[10px] sm:text-xs text-gray-400">WHAPI</div>
</div>
<div className="border border-gray-800 bg-[#050505] p-3 text-center">
<i className="w-5 h-5 text-gray-500 mx-auto mb-2" data-lucide="database" strokeWidth="1.5"></i>
<div className="font-mono text-[10px] sm:text-xs text-gray-400">CRM_DB</div>
</div>
<div className="border border-gray-800 bg-black p-3 text-center">
<i className="w-5 h-5 text-[#00F0FF] mx-auto mb-2" data-lucide="bot" strokeWidth="1.5"></i>
<div className="font-mono text-[10px] sm:text-xs text-[#00F0FF]">OPENAI</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-900 bg-[#050505]">
<div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
<h2 className="font-mono text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 text-center uppercase">
                / DOKUMENTACJA_FAQ
            </h2>
<div className="space-y-4">

<details className="group border border-gray-800 bg-black [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 sm:p-8 font-mono text-lg font-medium text-white tracking-tight select-none focus:outline-none focus:bg-gray-900/50 transition-colors">
                        Czy moje dane biznesowe są bezpieczne?
                        <i className="w-6 h-6 text-gray-600 group-open:hidden group-hover:text-[#00F0FF] transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#00F0FF] hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</summary>
<div className="p-6 sm:p-8 pt-0 text-lg text-gray-400 border-t border-gray-900 mt-2 leading-relaxed">
                        Tak. Wykorzystujemy wyłącznie szyfrowane połączenia (OAuth 2.0, bezpieczne klucze API). Dane przepływają przez naszą architekturę, ale nie są w niej trwale magazynowane bez wyraźnego wymogu procesowego. Całość jest projektowana w oparciu o standardy bezpieczeństwa i wytyczne RODO.
                    </div>
</details>

<details className="group border border-gray-800 bg-black [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 sm:p-8 font-mono text-lg font-medium text-white tracking-tight select-none focus:outline-none focus:bg-gray-900/50 transition-colors">
                        Jak długo trwa wdrożenie systemu?
                        <i className="w-6 h-6 text-gray-600 group-open:hidden group-hover:text-[#00F0FF] transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#00F0FF] hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</summary>
<div className="p-6 sm:p-8 pt-0 text-lg text-gray-400 border-t border-gray-900 mt-2 leading-relaxed">
                        Czas zależy bezpośrednio od skomplikowania węzłów decyzyjnych. Pojedyncze, proste automatyzacje (np. zrzut leadów do CRM) uruchamiamy w 48 godzin. Złożone ekosystemy integrujące komunikację, księgowość i AI budujemy średnio w 2 do 4 tygodni.
                    </div>
</details>

<details className="group border border-gray-800 bg-black [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 sm:p-8 font-mono text-lg font-medium text-white tracking-tight select-none focus:outline-none focus:bg-gray-900/50 transition-colors">
                        Co w przypadku awarii usług zewnętrznych (np. Make.com)?
                        <i className="w-6 h-6 text-gray-600 group-open:hidden group-hover:text-[#00F0FF] transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#00F0FF] hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</summary>
<div className="p-6 sm:p-8 pt-0 text-lg text-gray-400 border-t border-gray-900 mt-2 leading-relaxed">
                        Opieramy infrastrukturę o rozwiązania klasy Enterprise (uptime &gt;99.9%). Zawsze projektujemy zaawansowane mechanizmy obsługi błędów (Error Handling). Jeśli API docelowe nie odpowiada, system buforuje dane operacyjne i ponawia próbę (Incomplete Executions), powiadamiając administratora, by żadna informacja nie uległa utracie.
                    </div>
</details>

<details className="group border border-gray-800 bg-black [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 sm:p-8 font-mono text-lg font-medium text-white tracking-tight select-none focus:outline-none focus:bg-gray-900/50 transition-colors">
                        Czy muszę mieć techniczną wiedzę, by tym zarządzać?
                        <i className="w-6 h-6 text-gray-600 group-open:hidden group-hover:text-[#00F0FF] transition-colors" data-lucide="plus" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#00F0FF] hidden group-open:block" data-lucide="minus" strokeWidth="1.5"></i>
</summary>
<div className="p-6 sm:p-8 pt-0 text-lg text-gray-400 border-t border-gray-900 mt-2 leading-relaxed">
                        Nie. Otrzymujesz od nas system typu "Black Box" – na wejściu dajesz dane, na wyjściu otrzymujesz wynik, proces dzieje się w tle. Tworzymy również dedykowane, proste dashboardy do podglądu statystyk, jeśli proces tego wymaga. Po wdrożeniu przekazujemy pełną dokumentację i wsparcie.
                    </div>
</details>
</div>
</div>
</section>

<section className="border-t border-[#00F0FF]/30 bg-black relative" id="cta">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,240,255,0.05)_0,transparent_50%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
<div>
<div className="inline-flex items-center gap-2 border border-[#00F0FF]/50 bg-[#00F0FF]/10 px-4 py-1.5 text-base font-mono text-[#00F0FF] mb-10 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
<i className="w-4 h-4" data-lucide="terminal-square" strokeWidth="1.5"></i>
                    &gt; INICJACJA_PROTOKOŁU_AUDYTU
                </div>
<h2 className="font-mono text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight mb-8">
                    Gotowy na zrzucenie balastu?
                </h2>
<p className="text-lg text-gray-400 mb-10 leading-relaxed">
                    Wypełnij formularz kalibracyjny po prawej. Przeanalizujemy Twoje obecne procesy biznesowe i wydamy werdykt: czy i ile roboczogodzin (oraz kapitału) jesteśmy w stanie dla Ciebie odzyskać. Bez obietnic bez pokrycia, wyłącznie twarde estymacje.
                </p>
<div className="font-mono text-base text-gray-500 space-y-3 bg-[#050505] border border-gray-900 p-6">
<p className="flex items-center gap-3"><i className="w-5 h-5 text-gray-600" data-lucide="timer" strokeWidth="1.5"></i> ETA wypełnienia: <span className="text-white">~2 minuty</span></p>
<p className="flex items-center gap-3"><i className="w-5 h-5 text-gray-600" data-lucide="mail-check" strokeWidth="1.5"></i> SLA odpowiedzi: <span className="text-white">MAX 24H</span></p>
</div>
</div>

<div className="w-full h-[600px] border border-gray-800 bg-[#020202] flex flex-col items-center justify-center p-8 text-center relative group">

<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00F0FF]/30 group-hover:border-[#00F0FF] transition-colors"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00F0FF]/30 group-hover:border-[#00F0FF] transition-colors"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00F0FF]/30 group-hover:border-[#00F0FF] transition-colors"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00F0FF]/30 group-hover:border-[#00F0FF] transition-colors"></div>
<i className="w-12 h-12 text-gray-700 mb-6" data-lucide="code-2" strokeWidth="1.5"></i>
<h3 className="font-mono text-xl text-gray-300 mb-2 tracking-tight">/ IFRAME_CONTAINER</h3>
<p className="text-base text-gray-600 max-w-sm">W tym miejscu zostanie zaimplementowany skrypt osadzający z formularzem Tally.com.</p>

<div className="w-48 h-1 bg-gray-900 mt-8 overflow-hidden">
<div className="w-1/3 h-full bg-gray-700 animate-[pulse_2s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-900 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-mono text-xl font-semibold tracking-tight text-gray-500 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="terminal" strokeWidth="1.5"></i> DUCTLY_
            </div>
<div className="font-mono text-sm text-gray-600 flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
<span>© 2024 Wszystkie prawa zastrzeżone.</span>
<span className="hidden sm:inline-block text-gray-800">|</span>
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#00F0FF]"></span> System Status: Online</span>
</div>
</div>
</footer>



    </>
  );
}

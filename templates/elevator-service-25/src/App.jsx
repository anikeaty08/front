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
      

<header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<a className="flex items-center" href="#">
<svg className="md:h-12 hover:text-gray-900 transition-colors w-[56px] h-[83px]" data-icon-replaced="true" strokeWidth="2" style={{width: '56px', height: '83px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 160 230" xmlns="http://www.w3.org/2000/svg">

<path d="M55 5 L55 85 L30 85 Z" fill="#e63f11"></path>

<rect fill="currentColor" height="14" width="75" x="65" y="30"></rect>
<rect fill="currentColor" height="14" width="75" x="65" y="52"></rect>
<rect fill="currentColor" height="14" width="75" x="65" y="74"></rect>

<text className="" fill="currentColor" fontFamily="'Inter', sans-serif" fontSize="34" font-weight="800" letter-spacing="-1.5" x="8" y="125">RW LIFT</text>

<path className="" d="M22 145 L55 145 L55 225 L5 225 Z" fill="#e63f11"></path>

<rect className="" fill="currentColor" height="14" width="75" x="65" y="145"></rect>
<rect className="" fill="currentColor" height="14" width="75" x="65" y="167"></rect>
<rect className="" fill="currentColor" height="14" width="75" x="65" y="189"></rect>
<rect className="" fill="currentColor" height="14" width="75" x="65" y="211"></rect>
</svg>
</a>

<nav className="hidden md:flex space-x-8">
<a className="hover:text-[#111827] transition-colors text-base font-medium text-gray-600" href="#uslugi">Usługi</a>
<a className="hover:text-[#111827] transition-colors text-base font-medium text-gray-600" href="#urzadzenia">Urządzenia</a>
<a className="hover:text-[#111827] transition-colors text-base font-medium text-gray-600" href="#vimec">VIMEC</a>
<a className="hover:text-[#111827] transition-colors text-base font-medium text-gray-600" href="#kontakt">Kontakt</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<div className="text-right">
<div className="text-xs font-medium text-gray-500">Pogotowie 24/7</div>
<a className="text-lg font-semibold text-[#111827] tracking-tight" href="tel:531110000">531 110 000</a>
</div>
<a className="bg-[#e63f11] hover:bg-[#cc370f] text-white px-5 py-2.5 rounded-lg text-base font-medium transition-all shadow-sm hover:shadow flex items-center gap-2" href="tel:531110000">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
                        Zadzwoń
                    </a>
</div>

<button className="md:hidden text-gray-600 p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 z-50 flex gap-2">
<a className="flex-1 bg-[#e63f11] text-white flex justify-center items-center gap-2 py-3.5 rounded-xl font-semibold text-lg shadow-lg active:scale-95 transition-transform" href="tel:531110000">
<i className="w-5 h-5" data-lucide="phone-call" strokeWidth="1.5"></i>
            Pogotowie: 531 110 000
        </a>
</div>

<section className="relative bg-[#111827] pt-32 pb-48 lg:pt-48 lg:pb-64 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4de44a3a-deda-4475-b6c9-f5f3a630da78_3840w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 z-[9999]"></div>
<img alt="Winda industrialna" className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="max-w-3xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#e63f11] animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-white uppercase">Pogotowie Dźwigowe 24/7 - Jesteśmy gotowi</span>
</div>

<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Serwis Wind i Pogotowie <span className="text-[#e63f11]">Dźwigowe 24/7</span>
</h1>
<p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                    Szybka reakcja, uczciwe podejście i pełna dostępność 24/7. Obsługujemy windy i urządzenia dla niepełnosprawnych na terenie Wielkopolski i okolic.
                </p>

<div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-400 mb-10">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-[#e63f11]" data-lucide="check-circle-2" strokeWidth="1.5"></i> 17+ lat doświadczenia</span>
<span className="hidden sm:inline text-gray-600">|</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-[#e63f11]" data-lucide="settings-2" strokeWidth="1.5"></i> Ponad 500 urządzeń w stałej konserwacji</span>
<span className="hidden sm:inline text-gray-600">|</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-[#e63f11]" data-lucide="shield-check" strokeWidth="1.5"></i> Autoryzacja VIMEC</span>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4 gap-x-4 gap-y-4 items-start">
<div className="">
<a className="inline-flex items-center justify-center gap-3 hover:bg-[#cc370f] transition-all hover:-translate-y-1 hover:shadow-[#e63f11]/25 group text-lg font-semibold text-white bg-[#e63f11] rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-lg" href="tel:531110000">Zadzwoń teraz – 799 330 431</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 -mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow bg-white border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Czas reakcji</div>
<div className="text-3xl font-semibold tracking-tight text-[#111827] mb-2">&lt; 60 min</div>
<p className="text-base text-gray-500">Błyskawiczny dojazd na terenie całego miasta i okolic w przypadku awarii.</p>
</div>

<div className="hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow bg-white border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Doświadczenie</div>
<div className="text-3xl font-semibold tracking-tight text-[#111827] mb-2">17+ lat</div>
<p className="text-base text-gray-500">Wieloletnia praktyka w branży Urządzeń Transportu Bliskiego (UTB).</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 border-b-4 border-b-[#e63f11] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
<div className="text-xs font-semibold text-[#e63f11] uppercase tracking-wider mb-2">Autoryzacja</div>
<div className="text-3xl font-semibold tracking-tight text-[#111827] mb-2">VIMEC</div>
<p className="text-base text-gray-500">Oficjalny, certyfikowany partner serwisowy urządzeń marki VIMEC.</p>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="uslugi">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111827] mb-4">Nasze Usługi</h2>
<p className="text-lg text-gray-500">Kompleksowa obsługa urządzeń transportu bliskiego. Od doradztwa, przez montaż, aż po całodobowy serwis i konserwację.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-[#f8fafc] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 bg-[#e63f11]/10 text-[#e63f11] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#111827] mb-3">Konserwacja urządzeń</h3>
<p className="text-base text-gray-600 leading-relaxed">Regularne przeglądy, umowy stałe oraz przygotowanie i asysta przy badaniach UDT. Zapewniamy bezawaryjność.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#f8fafc] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 bg-[#e63f11]/10 text-[#e63f11] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="settings" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#111827] mb-3">Serwis i naprawy</h3>
<p className="text-base text-gray-600 leading-relaxed">Szybka diagnostyka i skuteczne usuwanie usterek. Pracujemy na oryginalnych częściach lub sprawdzonych zamiennikach.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#f8fafc] hover:bg-white border border-[#e63f11]/20 hover:border-[#e63f11]/30 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-[#e63f11]/5 rounded-bl-full -z-10"></div>
<div className="w-12 h-12 bg-[#e63f11] text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
<i className="w-6 h-6" data-lucide="siren" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#111827] mb-3">Pogotowie 24/7</h3>
<p className="text-base text-gray-600 leading-relaxed">Dostępność 24 godziny na dobę, 7 dni w tygodniu. Natychmiastowe uwolnienia pasażerów i usuwanie krytycznych awarii.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#f8fafc] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 bg-[#e63f11]/10 text-[#e63f11] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="refresh-cw" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#111827] mb-3">Modernizacje</h3>
<p className="text-base text-gray-600 leading-relaxed">Przywracamy nowoczesność, podnosimy bezpieczeństwo i energooszczędność wysłużonych systemów dźwigowych.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#f8fafc] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 bg-[#e63f11]/10 text-[#e63f11] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#111827] mb-3">Montaż i instalacje</h3>
<p className="text-base text-gray-600 leading-relaxed">Profesjonalny montaż nowych dźwigów w budynkach mieszkalnych, biurowych, przemysłowych i użyteczności publicznej.</p>
</div>

<div className="group hover:bg-white hover:border-gray-100 hover:shadow-xl transition-all duration-300 bg-[#f8fafc] border-transparent border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-[#e63f11]/10 text-[#e63f11] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="messages-square" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#111827] mb-3">Doradztwo techniczne</h3>
<p className="text-base text-gray-600 leading-relaxed">Wsparcie w doborze optymalnych rozwiązań, audyty techniczne oraz pełna reprezentacja przed urzędem dozoru (UDT).</p>
</div>
</div>
</div>
</section>

<section className="text-white bg-[#111827] pt-24 pb-24" id="urzadzenia">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Obsługiwane urządzenia</h2>
<p className="text-lg text-gray-400 max-w-2xl">Specjalizujemy się w zaawansowanych systemach pionowego transportu osób i towarów.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group overflow-hidden bg-gray-800 h-80 rounded-2xl relative">
<div className="transition-opacity group-hover:opacity-80 z-10 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent absolute top-0 right-0 bottom-0 left-0">
<div className="transition-opacity group-hover:opacity-80 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e65824f8-30d6-424e-8c65-62eea51ba3d0_800w.jpg?w=800&amp;q=80)] bg-cover z-10 absolute top-0 right-0 bottom-0 left-0"></div></div>
<img alt="Windy osobowe" className="transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 inset-x-0 p-6 z-20">
<h3 className="text-xl font-semibold tracking-tight">Windy osobowe</h3>
</div>
</div>

<div className="group overflow-hidden bg-gray-800 h-80 rounded-2xl relative">
<div className="transition-opacity group-hover:opacity-80 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac9b5b5a-2241-4249-acab-1dacd3fc272d_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 z-[9999]"></div>
<img alt="Windy towarowe" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-0 inset-x-0 p-6 z-20">
<h3 className="text-xl font-semibold tracking-tight">Windy towarowe</h3>
</div>
</div>

<div className="group relative h-80 rounded-2xl overflow-hidden bg-gray-800">
<div className="transition-opacity group-hover:opacity-80 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b062c3a6-7ea7-4457-84ab-fe27fceff549_3840w.jpg)] bg-contain z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Windy samochodowe" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="z-20 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0">
<h3 className="text-xl font-semibold tracking-tight">Windy samochodowe</h3>
</div>
</div>

<div className="group relative h-80 rounded-2xl overflow-hidden bg-gray-800 border border-[#e63f11]/30 shadow-[0_0_30px_rgba(230,63,17,0.1)]">
<div className="bg-center z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e7b15ae-fadd-4fab-89ec-ce0628af24c0_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Urządzenia dla niepełnosprawnych" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 inset-x-0 p-6 z-20">
<div className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#e63f11] text-white mb-3">
<i className="w-5 h-5" data-lucide="accessibility" strokeWidth="2"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#e63f11]">Dla niepełnosprawnych</h3>
<p className="text-sm text-gray-300 mt-1">Platformy, podnośniki, krzesełka</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f8fafc] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111827] mb-8">Dlaczego RW LIFT?</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100"><i className="w-5 h-5 text-[#e63f11]" data-lucide="zap" strokeWidth="1.5"></i></div>
<div className="">
<h4 className="text-lg font-semibold text-[#111827]">Szybka reakcja</h4>
<p className="text-base text-gray-600 mt-1">Nie każemy czekać. W sytuacjach awaryjnych działamy natychmiast, minimalizując czas przestoju.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100"><i className="w-5 h-5 text-[#e63f11]" data-lucide="shield-check" strokeWidth="1.5"></i></div>
<div className="">
<h4 className="text-lg font-semibold text-[#111827]">Uczciwość</h4>
<p className="text-base text-gray-600 mt-1">Jasne zasady współpracy, transparentne koszty napraw i rzetelna ocena stanu technicznego.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100"><i className="w-5 h-5 text-[#e63f11]" data-lucide="clock" strokeWidth="1.5"></i></div>
<div className="">
<h4 className="text-lg font-semibold text-[#111827]">Pełna dostępność 24/7</h4>
<p className="text-base text-gray-600 mt-1">Awarie nie wybierają godzin pracy. Nasze pogotowie jest w gotowości w dni robocze, weekendy i święta.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100"><i className="w-5 h-5 text-[#e63f11]" data-lucide="users-2" strokeWidth="1.5"></i></div>
<div className="">
<h4 className="text-lg font-semibold text-[#111827]">Doświadczeni technicy</h4>
<p className="text-base text-gray-600 mt-1">Zgrany zespół specjalistów z uprawnieniami UDT, potrafiący rozwiązać najtrudniejsze problemy techniczne.</p>
</div>
</div>
</div>
</div>

<div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden" id="vimec">
<div className="absolute top-0 right-0 p-8 opacity-5">
<i className="w-48 h-48" data-lucide="award"></i>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
<i className="w-4 h-4" data-lucide="check-badge" strokeWidth="2"></i>
                            Certyfikowany Partner
                        </div>
<h3 className="text-3xl font-semibold tracking-tight text-[#111827] mb-4">Autoryzowany serwis VIMEC</h3>
<p className="text-lg text-gray-600 mb-8">Jako oficjalny partner włoskiego producenta urządzeń dla osób niepełnosprawnych, gwarantujemy najwyższą jakość obsługi.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg font-medium text-gray-800">
<i className="w-5 h-5 text-[#e63f11]" data-lucide="check" strokeWidth="2"></i>
                                Dostęp do oryginalnych części
                            </li>
<li className="flex items-center gap-3 text-lg font-medium text-gray-800">
<i className="w-5 h-5 text-[#e63f11]" data-lucide="check" strokeWidth="2"></i>
                                Pełna zgodność z procedurami producenta
                            </li>
<li className="flex items-center gap-3 text-lg font-medium text-gray-800">
<i className="w-5 h-5 text-[#e63f11]" data-lucide="check" strokeWidth="2"></i>
                                Profesjonalna diagnostyka systemowa
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-center bg-[#e63f11] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96ccdc4f-75bc-4aac-8fca-ff3aee3baf82_3840w.jpg)] bg-cover pt-24 pb-24 relative">

<div className=""></div>
<div className="sm:px-6 lg:px-8 z-10 text-center max-w-4xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
<i className="w-8 h-8 text-white" data-lucide="siren" strokeWidth="1.5"></i>
</div>
<h2 className="md:text-5xl text-4xl font-semibold text-slate-50 tracking-tight mb-6">Awaria windy? Działamy natychmiast</h2>
<p className="text-xl font-medium text-slate-50/90 max-w-2xl mb-10">
                Zadzwoń – jesteśmy dostępni 24/7 i dojeżdżamy w mniej niż 60 minut. Twoje bezpieczeństwo to nasz priorytet.
            </p>
<a className="block md:text-8xl lg:text-[100px] hover:text-white/90 transition-colors text-6xl font-semibold text-slate-50 tracking-tighter mb-6 drop-shadow-md" href="tel:531110000">
                531 110 000
            </a>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="info" strokeWidth="2"></i>
                Dla nowych zgłoszeń i pilnych awarii
            </div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="kontakt">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111827] mb-4">Kontakt</h2>
<p className="text-lg text-gray-500">Masz pytania dotyczące stałej współpracy, modernizacji lub spraw administracyjnych? Skontaktuj się z naszym biurem.</p>
</div>
<div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-[#111827] mb-6">RW LIFT Robert Woźniak</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1"><i className="w-6 h-6 text-gray-400" data-lucide="map-pin" strokeWidth="1.5"></i></div>
<div className="">
<p className="text-lg text-gray-800 font-medium">ul. Poniatowskiego 14</p>
<p className="text-lg text-gray-600">60-030 Luboń</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1"><i className="w-6 h-6 text-gray-400" data-lucide="mail" strokeWidth="1.5"></i></div>
<div className="">
<a className="text-lg text-gray-800 font-medium hover:text-[#e63f11] transition-colors" href="mailto:biuro@rwlift.pl">biuro@rwlift.pl</a>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-gray-600" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Kontakt biurowy</h4>
<p className="text-base text-gray-500 mb-4 pb-4 border-b border-gray-100">Sprawy administracyjne, wyceny, umowy stałe i modernizacje.</p>
<a className="text-3xl font-semibold tracking-tight text-[#111827] hover:text-[#e63f11] transition-colors flex items-center gap-3" href="tel:799330431">
<i className="w-6 h-6 text-[#e63f11]" data-lucide="phone" strokeWidth="2"></i>
                            799 330 431
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#111827] pt-16 pb-8 border-t border-gray-800 md:pb-8 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-2">
<a className="inline-flex items-center mb-6 opacity-90 hover:opacity-100 transition-opacity" href="#">
<svg className="h-10 md:h-12 w-auto text-white" viewbox="0 0 160 230" xmlns="http://www.w3.org/2000/svg">

<path d="M55 5 L55 85 L30 85 Z" fill="#e63f11"></path>

<rect fill="currentColor" height="14" width="75" x="65" y="30"></rect>
<rect fill="currentColor" height="14" width="75" x="65" y="52"></rect>
<rect fill="currentColor" height="14" width="75" x="65" y="74"></rect>

<text fill="currentColor" fontFamily="'Inter', sans-serif" fontSize="34" font-weight="800" letter-spacing="-1.5" x="8" y="125">RW LIFT</text>

<path d="M22 145 L55 145 L55 225 L5 225 Z" fill="#e63f11"></path>

<rect fill="currentColor" height="14" width="75" x="65" y="145"></rect>
<rect fill="currentColor" height="14" width="75" x="65" y="167"></rect>
<rect fill="currentColor" height="14" width="75" x="65" y="189"></rect>
<rect fill="currentColor" height="14" width="75" x="65" y="211"></rect>
</svg>
</a>
<p className="text-base text-gray-400 leading-relaxed max-w-sm">
                        Profesjonalny serwis wind i całodobowe pogotowie dźwigowe. Zapewniamy ciągłość pracy urządzeń i bezpieczeństwo pasażerów na terenie całej Wielkopolski.
                    </p>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Nawigacja</h4>
<ul className="space-y-3">
<li className=""><a className="text-base text-gray-400 hover:text-white transition-colors" href="#uslugi">Usługi</a></li>
<li className=""><a className="hover:text-white transition-colors text-base text-gray-400" href="#urzadzenia">Urządzenia</a></li>
<li><a className="text-base text-gray-400 hover:text-white transition-colors" href="#vimec">Autoryzacja VIMEC</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-[#e63f11] uppercase tracking-wider mb-4">Pogotowie 24/7</h4>
<p className="text-base text-gray-400 mb-2">Zgłoś awarię natychmiast:</p>
<a className="text-2xl font-semibold text-white tracking-tight hover:text-[#e63f11] transition-colors" href="tel:531110000">531 110 000</a>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500">
                    © 2023 RW LIFT Robert Woźniak. Wszelkie prawa zastrzeżone.
                </p>
<div className="text-sm text-gray-500">
                    Projekt i realizacja dla RW LIFT
                </div>
</div>
</div>
</footer>




    </>
  );
}

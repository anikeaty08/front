import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Reveal Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<a className="flex items-center gap-2 group" href="#">
<svg fill="none" height="32" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M5 14 V 9 L 16 3.5 L 27 9 V 14 Z" stroke="#D1D5DB" strokeLinejoin="round" strokeWidth="3.5"></path>
<path d="M5 18 V 23 L 16 28.5 L 27 23 V 18 Z" stroke="#DC2626" strokeLinejoin="round" strokeWidth="3.5"></path>
</svg>
<span className="text-[22px] text-slate-900 tracking-tight font-medium uppercase mt-0.5 ml-1">
                Elproma
            </span>
</a>
<div className="hidden md:flex gap-8 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#problem">Sytuacja</a>
<a className="hover:text-slate-900 transition-colors" href="#wartosc">Wartość</a>
<a className="hover:text-slate-900 transition-colors" href="#agenda">Agenda</a>
<a className="hover:text-slate-900 transition-colors" href="#ofirmie">O nas</a>
</div>
<a className="text-xs font-medium uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-0.5" href="#rejestracja">
            Zarejestruj się
        </a>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-24 pr-4 pl-4 relative items-center justify-center bg-grid">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-50 via-white to-transparent pointer-events-none"></div>
<div className="relative z-10 max-w-4xl w-full text-center space-y-8">

<div className="inline-flex gap-3 reveal-on-scroll is-visible text-sm font-medium text-red-700 bg-red-50 border-red-200/60 border rounded-full mb-2 pt-1.5 pr-4 pb-1.5 pl-4 gap-x-3 gap-y-3 items-center">
                Bezpłatny webinar online • 22 Kwiecień 2026
                <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-slate-900 reveal-on-scroll is-visible">
                Jak zabezpieczyć infrastrukturę wodociągową… <span className="text-red-600 block mt-2">zanim będzie za późno?</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto reveal-on-scroll delay-100 leading-relaxed font-normal is-visible">
                Masz środki na cyberbezpieczeństwo. W 45 minut pokażemy, jak podejść do tematu mądrze — bez chaosu i bez przepalania budżetu.
            </p>

<div className="flex flex-col items-center gap-4 reveal-on-scroll delay-200 pt-6 is-visible">
<a className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium text-base rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] flex items-center gap-2" href="#rejestracja">
                    Zarejestruj się na webinar
                    <i className="transition-transform group-hover:translate-x-1" data-lucide="arrow-right" height="20" strokeWidth="1.5" width="20"></i>
</a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce">
<i data-lucide="arrow-down-circle" height="24" strokeWidth="1.5" width="24"></i>
</div>
</section>

<section className="py-24 px-4 bg-white relative z-20 border-y border-slate-100" id="problem">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 space-y-4 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight font-medium">
                    Dziś większość wodociągów jest w tym samym miejscu
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="glass-panel p-8 rounded-2xl reveal-on-scroll bg-slate-50 border border-slate-200/80">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
<i data-lucide="radar" height="20" strokeWidth="1.5" width="20"></i>
</div>
<h3 className="text-lg text-slate-900 font-medium">Stan obecny</h3>
</div>
<ul className="space-y-4 text-base text-slate-600">
<li className="flex items-start gap-3">
<i className="text-red-500 mt-0.5" data-lucide="check-circle" height="20" strokeWidth="1.5" width="20"></i>
<span>Są środki (Cyberbezpieczne Wodociągi / KPO)</span>
</li>
<li className="flex items-start gap-3">
<i className="text-red-500 mt-0.5" data-lucide="shield-alert" height="20" strokeWidth="1.5" width="20"></i>
<span>Są twarde wymagania dyrektywy NIS2</span>
</li>
<li className="flex items-start gap-3">
<i className="text-red-500 mt-0.5" data-lucide="clock" height="20" strokeWidth="1.5" width="20"></i>
<span>Zegar tyka i rośnie presja czasu</span>
</li>
<li className="flex items-start gap-3 font-medium text-slate-800">
<i className="text-orange-500 mt-0.5" data-lucide="alert-triangle" height="20" strokeWidth="1.5" width="20"></i>
<span>Ale… brakuje jasnej ścieżki działania</span>
</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl reveal-on-scroll delay-100 bg-white border border-slate-200/80">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
<i data-lucide="x-circle" height="20" strokeWidth="1.5" width="20"></i>
</div>
<h3 className="text-lg text-slate-900 font-medium">Ryzykowne efekty</h3>
</div>
<ul className="space-y-4 text-base text-slate-600">
<li className="flex items-start gap-3">
<i className="text-slate-400 mt-0.5" data-lucide="arrow-right" height="20" strokeWidth="1.5" width="20"></i>
<span>Decyzje podejmowane „na szybko” bez analizy</span>
</li>
<li className="flex items-start gap-3">
<i className="text-slate-400 mt-0.5" data-lucide="arrow-right" height="20" strokeWidth="1.5" width="20"></i>
<span>Zakupy punktowe, bez spójnej architektury</span>
</li>
<li className="flex items-start gap-3">
<i className="text-slate-400 mt-0.5" data-lucide="arrow-right" height="20" strokeWidth="1.5" width="20"></i>
<span>Poważne ryzyko, że system nie będzie działał jako bezpieczna całość</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 relative z-10 bg-slate-50" id="wartosc">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20 space-y-4 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight font-medium">
                    Ten webinar nie sprzedaje. <span className="text-red-600">On porządkuje temat.</span>
</h2>
<p className="text-slate-500 max-w-2xl mx-auto font-normal text-base">
                    Po tym spotkaniu będziesz wiedzieć dokładnie, jak zaplanować kolejne kroki:
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="tech-border-gradient bg-white p-8 rounded-2xl reveal-on-scroll group">
<div className="w-10 h-10 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-transform">
<i data-lucide="map-pin" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="text-base text-slate-900 font-medium mb-2">Punkt wyjścia</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">
                        Od czego naprawdę zacząć zabezpieczenie infrastruktury OT, żeby zbudować solidne fundamenty.
                    </p>
</div>
<div className="tech-border-gradient bg-white p-8 rounded-2xl reveal-on-scroll delay-100 group">
<div className="w-10 h-10 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-transform">
<i data-lucide="arrow-up-down" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="text-base text-slate-900 font-medium mb-2">Priorytetyzacja</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">
                        Które elementy systemu są absolutnie krytyczne, a z którymi inwestycjami możesz poczekać.
                    </p>
</div>
<div className="tech-border-gradient bg-white p-8 rounded-2xl reveal-on-scroll delay-200 group">
<div className="w-10 h-10 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-transform">
<i data-lucide="shield-off" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="text-base text-slate-900 font-medium mb-2">Luki bezpieczeństwa</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">
                        Gdzie najczęściej powstają krytyczne podatności w sektorze infrastruktury komunalnej.
                    </p>
</div>
<div className="tech-border-gradient bg-white p-8 rounded-2xl reveal-on-scroll delay-300 group">
<div className="w-10 h-10 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-transform">
<i data-lucide="wallet" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="text-base text-slate-900 font-medium mb-2">Mądre inwestycje</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">
                        Jak mądrze rozdysponować budżet z KPO i nie przepalić środków na nietrafione rozwiązania.
                    </p>
</div>
<div className="tech-border-gradient bg-white p-8 rounded-2xl reveal-on-scroll delay-400 group md:col-span-2 lg:col-span-2">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center h-full">
<div className="flex-1">
<div className="w-10 h-10 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
<i data-lucide="network" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="text-base text-slate-900 font-medium mb-2">Podejście systemowe</h3>
<p className="text-slate-500 text-base leading-relaxed font-normal">
                                Nauczysz się jak traktować infrastrukturę jako całość — unikając punktowych, niespójnych zakupów, które nie współpracują ze sobą na poziomie architektury.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-slate-100 pt-24 pr-4 pb-24 pl-4" id="agenda">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-16">

<div className="flex-1 space-y-8 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-slate-900 leading-tight">
                    Co pokażemy w trakcie <span className="text-red-600">webinaru</span>
</h2>
<div className="space-y-4">
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
<i data-lucide="alert-circle" height="18" strokeWidth="1.5" width="18"></i>
</div>
<div className="pt-1">
<h4 className="text-slate-900 font-medium text-base mb-1">Najczęstsze błędy</h4>
<p className="text-slate-500 text-base font-normal">Analiza pomyłek w zabezpieczaniu infrastruktury OT.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
<i data-lucide="route" height="18" strokeWidth="1.5" width="18"></i>
</div>
<div className="pt-1">
<h4 className="text-slate-900 font-medium text-base mb-1">Podejście krok po kroku</h4>
<p className="text-slate-500 text-base font-normal">Budowa bezpiecznej architektury od fundamentów.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
<i data-lucide="server" height="18" strokeWidth="1.5" width="18"></i>
</div>
<div className="pt-1">
<h4 className="text-slate-900 font-medium text-base mb-1">Przykłady z praktyki</h4>
<p className="text-slate-500 text-base font-normal">Rozwiązania i technologie stosowane w rzeczywistych obiektach (m.in. Nordic Semiconductor).</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
<i data-lucide="message-square" height="18" strokeWidth="1.5" width="18"></i>
</div>
<div className="pt-1">
<h4 className="text-slate-900 font-medium text-base mb-1">Sesja Q&amp;A</h4>
<p className="text-slate-500 text-base font-normal">Czas na Twoje techniczne i projektowe pytania.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-slate-50 border border-slate-200/80 p-8 rounded-2xl reveal-on-scroll delay-100">
<h3 className="text-2xl tracking-tight font-medium text-slate-900 mb-6">Dla kogo jest ten webinar</h3>
<p className="text-base text-slate-500 mb-6 font-normal">Ten webinar jest specjalnie dla Ciebie, jeśli:</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-base text-slate-700">
<i className="text-red-600 mt-0.5" data-lucide="check" height="20" strokeWidth="1.5" width="20"></i>
<span className="font-normal">Odpowiadasz za infrastrukturę wodociągową (IT/OT, Automatyka)</span>
</li>
<li className="flex items-start gap-3 text-base text-slate-700">
<i className="text-red-600 mt-0.5" data-lucide="check" height="20" strokeWidth="1.5" width="20"></i>
<span className="font-normal">Masz środki na inwestycje w cyberbezpieczeństwo</span>
</li>
<li className="flex items-start gap-3 text-base text-slate-700">
<i className="text-red-600 mt-0.5" data-lucide="check" height="20" strokeWidth="1.5" width="20"></i>
<span className="font-normal">Nie chcesz popełnić kosztownych, architektonicznych błędów</span>
</li>
<li className="flex items-start gap-3 text-base text-slate-700">
<i className="text-red-600 mt-0.5" data-lucide="check" height="20" strokeWidth="1.5" width="20"></i>
<span className="font-normal">Szukasz konkretnej wiedzy, a nie marketingowego bełkotu</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-4 relative bg-slate-900 text-white overflow-hidden" id="ofirmie">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-400 via-transparent to-transparent"></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-8 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white">
                    Dlaczego warto nas posłuchać
                </h2>
<div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed font-normal">
<p>
<strong className="text-white font-medium">Elproma</strong> to polska firma technologiczna pracująca z infrastrukturą krytyczną. Od lat wspieramy sektory wymagające najwyższej niezawodności.
                    </p>
<p>
                        Specjalizujemy się w:
                    </p>
<ul className="space-y-3 pl-2">
<li className="flex items-center gap-3"><i className="text-red-400" data-lucide="chevron-right" height="18" strokeWidth="1.5" width="18"></i> synchronizacji czasu w systemach OT/ICS</li>
<li className="flex items-center gap-3"><i className="text-red-400" data-lucide="chevron-right" height="18" strokeWidth="1.5" width="18"></i> rozwiązaniach dla przemysłu i infrastruktury</li>
<li className="flex items-center gap-3"><i className="text-red-400" data-lucide="chevron-right" height="18" strokeWidth="1.5" width="18"></i> systemach wymagających wysokiej niezawodności</li>
</ul>
<p className="pt-4 border-t border-slate-700/50">
                        Rozumiemy, że cyberbezpieczeństwo to nie pojedynczy produkt — to cała architektura. Dlatego zamiast sprzedawać pudełka, pomagamy zrozumieć, jak to powinno działać na poziomie systemowym.
                    </p>
</div>
</div>

<div className="hidden md:flex justify-center items-center reveal-on-scroll delay-100">
<div className="relative w-full aspect-square max-w-md border border-slate-700/50 rounded-full flex items-center justify-center p-8 bg-slate-800/20 backdrop-blur-sm shadow-[0_0_60px_-15px_rgba(220,38,38,0.3)]">
<div className="absolute inset-0 border border-red-500/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute inset-8 border border-slate-600/30 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
<div className="w-24 h-24 bg-red-600 rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-red-900/50">
<i className="text-white -rotate-45" data-lucide="shield" height="40" strokeWidth="1.5" width="40"></i>
</div>

<div className="absolute top-10 left-20 w-3 h-3 bg-red-400 rounded-full shadow-[0_0_10px_rgba(248,113,113,0.8)]"></div>
<div className="absolute bottom-20 right-16 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
<div className="absolute top-1/2 right-4 w-2 h-2 bg-red-300 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-10 bg-slate-50" id="rejestracja">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10 space-y-3 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight font-medium">Zarejestruj się na webinar</h2>
<p className="text-slate-500 text-base font-normal">Wypełnij krótki formularz, aby otrzymać link do transmisji.</p>
</div>
<div className="bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-sm reveal-on-scroll delay-100">
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700" htmlFor="name">Imię i nazwisko</label>
<input className="custom-input" id="name" placeholder="Jan Kowalski" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700" htmlFor="email">Adres e-mail (służbowy)</label>
<input className="custom-input" id="email" placeholder="jan.kowalski@wodociagi.pl" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700" htmlFor="company">Nazwa firmy / Zakładu</label>
<input className="custom-input" id="company" placeholder="Zakład Wodociągów i Kanalizacji" required="" type="text"/>
</div>
<div className="pt-4">
<button className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-medium text-base rounded-xl transition-all shadow-sm hover:shadow-md flex justify-center items-center gap-2 group" type="submit">
                            Zapisz się bezpłatnie
                            <i className="transition-transform group-hover:translate-x-1" data-lucide="arrow-right" height="20" strokeWidth="1.5" width="20"></i>
</button>
</div>
<p className="text-xs text-center text-slate-400 mt-4 leading-tight">
                        Zapisując się, akceptujesz regulamin i zgadzasz się na przetwarzanie danych osobowych w celu organizacji wydarzenia.
                    </p>
</form>
</div>
</div>
</section>

<section className="py-20 text-center bg-white border-y border-slate-100">
<div className="max-w-2xl mx-auto px-4 reveal-on-scroll">
<div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 mx-auto mb-6">
<i data-lucide="building-2" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="text-slate-900 font-medium text-2xl tracking-tight mb-4">Masz już plan inwestycji?</h3>
<p className="text-slate-500 text-base mb-8 leading-relaxed">
                Jeśli jesteś w trakcie podejmowania decyzji lub chcesz upewnić się, że idziesz w dobrym kierunku — możemy pomóc Ci to poukładać. <br/><strong className="font-medium text-slate-700">Bez sprzedaży. Bez zobowiązań.</strong>
</p>
<a className="inline-flex items-center gap-2 text-slate-700 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 px-6 py-3 rounded-xl transition-all text-sm font-medium shadow-sm" href="https://www.elpromaelectronics.com/pl/kontakt/" target="_blank">
<i data-lucide="mail" height="18" strokeWidth="1.5" width="18"></i>
                Skontaktuj się z nami
            </a>
</div>
</section>

<footer className="py-10 px-6 bg-slate-50 border-t border-slate-200 text-center md:text-left">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg fill="none" height="24" viewbox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 14 V 9 L 16 3.5 L 27 9 V 14 Z" stroke="#D1D5DB" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M5 18 V 23 L 16 28.5 L 27 23 V 18 Z" stroke="#DC2626" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
<span className="text-slate-900 tracking-tight font-medium text-sm uppercase">
                    Elproma
                </span>
</div>
<div className="text-slate-400 text-sm">
                © 2024 Elproma. Wszelkie prawa zastrzeżone.
            </div>
<div className="flex justify-center md:justify-end gap-6 text-slate-400 text-sm">
<a className="hover:text-slate-900 transition-colors" href="#">Polityka Prywatności</a>
<a className="hover:text-slate-900 transition-colors" href="https://www.elpromaelectronics.com/pl/" target="_blank">Strona Główna</a>
</div>
</div>
</footer>



    </>
  );
}

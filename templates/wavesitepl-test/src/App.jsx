import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Single Page App Logic
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-content').forEach(el => {
                el.classList.remove('active-flex', 'active-block');
            });

            // Show target page
            const target = document.getElementById(pageId);
            if(target) {
                // 'home' uses flex row on large screens, others use flex col by default
                if(pageId === 'home') {
                    target.classList.add('active-flex');
                } else {
                    target.classList.add('active-flex');
                }
            }

            // Update Navigation active states
            document.querySelectorAll('.nav-link').forEach(el => {
                if(el.getAttribute('href') === '#' + pageId) {
                    el.classList.add('text-stone-100', 'bg-neutral-700/50');
                    el.classList.remove('text-stone-400');
                } else {
                    el.classList.remove('text-stone-100', 'bg-neutral-700/50');
                    el.classList.add('text-stone-400');
                }
            });
        }

        // Handle routing based on URL hash
        function handleRoute() {
            const hash = window.location.hash.replace('#', '');
            const validPages = ['home', 'services', 'projects', 'process', 'pricing'];
            
            if(hash && validPages.includes(hash)) {
                showPage(hash);
            } else {
                showPage('home'); // Default to home
            }
        }

        // Listen for hash changes and initial load
        window.addEventListener('hashchange', handleRoute);
        window.addEventListener('DOMContentLoaded', handleRoute);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-[85vh] flex flex-col overflow-hidden bg-stone-900 w-full max-w-[1400px] border-neutral-800 border rounded-3xl relative shadow-md" style={{animation: 'scaleIn 0.6s linear 1 normal forwards'}}>

<div className="pointer-events-none border-[0.5px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] [background-size:4rem_4rem] opacity-30 border-neutral-800/40 absolute top-0 right-0 bottom-0 left-0">
</div>

<header className="z-20 flex lg:px-10 bg-stone-900/80 w-full border-neutral-800 border-b pt-4 pr-6 pb-4 pl-6 relative backdrop-blur-md items-center justify-between">
<a className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="#home">
<i className="w-7 h-7 text-blue-500" data-lucide="waves" strokeWidth="1.5"></i>
<span className="text-xl font-serif font-medium tracking-normal text-stone-100">WaveSite.pl</span>
</a>
<nav className="hidden md:flex bg-neutral-800/40 border-neutral-800 border rounded-lg pt-1 pr-1 pb-1 pl-1 items-center">
<a className="nav-link hover:text-stone-100 hover:bg-neutral-700/50 transition-all text-sm font-medium text-stone-400 rounded-md pt-2 pr-5 pb-2 pl-5" href="#services">Usługi</a>
<a className="nav-link hover:text-stone-100 hover:bg-neutral-700/50 transition-all text-sm font-medium text-stone-400 rounded-md pt-2 pr-5 pb-2 pl-5" href="#projects">Realizacje</a>
<a className="nav-link hover:text-stone-100 hover:bg-neutral-700/50 transition-all text-sm font-medium text-stone-400 rounded-md pt-2 pr-5 pb-2 pl-5" href="#process">Proces</a>
<a className="nav-link px-5 py-2 text-sm font-medium text-stone-400 hover:text-stone-100 hover:bg-neutral-700/50 rounded-md transition-all" href="#pricing">Cennik</a>
</nav>
<div className="flex items-center gap-6">
<a className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors border border-blue-400/20 shadow-sm flex items-center gap-2" href="#pricing">
                    Rozpocznij projekt
                </a>
</div>
</header>

<main className="flex-1 z-10 flex flex-col w-full relative">

<div className="page-content flex-1 flex-col lg:flex-row lg:p-16 pt-8 pr-8 pb-8 pl-8 items-center justify-center active-flex" id="home">
<div className="flex-1 flex flex-col gap-8 w-full max-w-2xl gap-x-8 gap-y-8 items-start">
<h1 className="lg:text-6xl leading-[1.15] text-5xl font-medium text-stone-100 tracking-normal font-serif">
                        Tworzymy strony, które <br className="hidden sm:block"/>
<span className="italic text-stone-400">budują biznes.</span>
</h1>
<p className="text-lg text-stone-400 leading-relaxed max-w-xl">
                        WaveSite.pl to zaufany partner w tworzeniu nowoczesnych, szybkich i w pełni responsywnych stron
                        internetowych. Przekształcamy Twoją wizję w profesjonalne narzędzie sprzedaży, wykorzystując
                        najlepsze technologie i przemyślany design.
                    </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="hover:bg-white transition-colors flex items-center gap-2 text-base font-medium text-stone-900 bg-stone-100 rounded-lg pt-3.5 pr-6 pb-3.5 pl-6" href="#pricing">Zobacz Więcej --&gt;</a>
<a className="px-6 py-3.5 bg-transparent border border-neutral-700 hover:border-neutral-500 text-stone-300 hover:text-stone-100 text-base font-medium rounded-lg transition-colors flex items-center gap-2" href="#process">
<i className="w-4 h-4" data-lucide="code-2" strokeWidth="1.5"></i>
                            Jak pracujemy
                        </a>
</div>
</div>
<div className="flex-1 w-full max-w-xl relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-stone-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500">
</div>
<div className="relative w-full border border-neutral-800 rounded-xl bg-[#111111] backdrop-blur-sm p-6 font-mono text-sm shadow-lg overflow-hidden">
<div className="flex items-center gap-2 mb-6 border-b border-neutral-800/80 pb-4">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="ml-4 text-xs text-neutral-500 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="folder" strokeWidth="1.5"></i>
                                wavesite_project / config.ts
                            </div>
</div>
<div className="text-stone-400 space-y-1.5 leading-relaxed overflow-x-auto">
<p className=""><span className="text-blue-400">import</span> { <span className="text-stone-200">WaveSite</span>
                                } <span className="text-blue-400">from</span>
<span className="text-green-400">'@wavesite/core'</span>;</p>
<p className="mt-4"><span className="text-blue-400">const</span>
<span className="text-stone-200">project</span> = <span className="text-blue-400">new</span>
<span className="text-amber-300">WaveSite</span>({</p>
<p className="pl-4"><span className="text-stone-300">client:</span>
<span className="text-green-400">"Twoja Firma"</span>,</p>
<p className="pl-4"><span className="text-stone-300">focus:</span> [</p>
<p className="pl-8"><span className="text-green-400">"Konwersja"</span>,</p>
<p className="pl-8"><span className="text-green-400">"Wydajność SEO"</span>,</p>
<p className="pl-8"><span className="text-green-400">"Design Premium"</span></p>
<p className="pl-4">],</p>
<p className="pl-4"><span className="text-stone-300">metrics:</span> {</p>
<p className="pl-8"><span className="text-stone-300">speedScore:</span>
<span className="text-orange-400">100</span>,</p>
<p className="pl-8"><span className="text-stone-300">uptime:</span>
<span className="text-green-400">"99.9%"</span></p>
<p className="pl-4">},</p>
<p className="pl-4"><span className="text-stone-300">status:</span>
<span className="text-blue-400">"Wdrażanie"</span><span className="inline-block w-2 h-4 bg-blue-500 ml-1 translate-y-1" style={{animation: 'pulse 1s infinite'}}></span>
</p>
<p>});</p>
</div>
</div>
</div>
</div>

<div className="page-content flex-1 flex-col p-8 lg:p-16 w-full max-w-6xl mx-auto" id="services">
<div className="mb-12">
<h2 className="text-4xl lg:text-5xl font-serif font-medium text-stone-100 mb-4">Rozwiązania szyte na
                        miarę</h2>
<p className="text-stone-400 text-lg max-w-2xl">Zapewniamy kompleksowe usługi cyfrowe, które pomagają
                        firmom rosnąć w internecie.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 border border-neutral-800 rounded-2xl bg-[#111111]/60 hover:bg-[#111111] transition-all group">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
<i data-lucide="layout" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-stone-200 mb-3 font-serif">Web Design</h3>
<p className="text-stone-400 text-sm leading-relaxed">Projektujemy unikalne, estetyczne i intuicyjne
                            interfejsy zorientowane na użytkownika i wysoką konwersję.</p>
</div>
<div className="p-8 border border-neutral-800 rounded-2xl bg-[#111111]/60 hover:bg-[#111111] transition-all group">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
<i data-lucide="code" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-stone-200 mb-3 font-serif">Development</h3>
<p className="text-stone-400 text-sm leading-relaxed">Kodujemy w oparciu o najnowsze technologie
                            (React, Next.js), zapewniając błyskawiczne ładowanie i niezawodność.</p>
</div>
<div className="p-8 border border-neutral-800 rounded-2xl bg-[#111111]/60 hover:bg-[#111111] transition-all group">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
<i data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-stone-200 mb-3 font-serif">E-Commerce</h3>
<p className="text-stone-400 text-sm leading-relaxed">Tworzymy zyskowne sklepy internetowe, które
                            zachęcają do zakupów i upraszczają zarządzanie sprzedażą.</p>
</div>
<div className="p-8 border border-neutral-800 rounded-2xl bg-[#111111]/60 hover:bg-[#111111] transition-all group">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
<i data-lucide="search" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-stone-200 mb-3 font-serif">Optymalizacja SEO</h3>
<p className="text-stone-400 text-sm leading-relaxed">Strony zoptymalizowane pod kątem wyszukiwarek,
                            osiągające maksymalne wyniki w Google PageSpeed.</p>
</div>
<div className="p-8 border border-neutral-800 rounded-2xl bg-[#111111]/60 hover:bg-[#111111] transition-all group">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
<i data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-stone-200 mb-3 font-serif">Branding</h3>
<p className="text-stone-400 text-sm leading-relaxed">Projektowanie logotypów i systemów
                            identyfikacji wizualnej, które wyróżnią Cię na tle konkurencji.</p>
</div>
<div className="p-8 border border-neutral-800 rounded-2xl bg-[#111111]/60 hover:bg-[#111111] transition-all group">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
<i data-lucide="server" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-stone-200 mb-3 font-serif">Wsparcie i Hosting</h3>
<p className="text-stone-400 text-sm leading-relaxed">Bezpieczne utrzymanie serwerów, regularne
                            kopie zapasowe i priorytetowe wsparcie techniczne.</p>
</div>
</div>
</div>

<div className="page-content flex-1 flex-col lg:p-16 w-full max-w-6xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8" id="projects">
<div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-12 justify-between">
<div className="">
<h2 className="text-4xl lg:text-5xl font-serif font-medium text-stone-100 mb-4">Wybrane Realizacje
                        </h2>
<p className="text-stone-400 text-lg max-w-xl">Zobacz, jak pomogliśmy naszym klientom zdominować ich
                            branże poprzez wyjątkowy design i technologię.</p>
</div>
<a className="text-sm font-medium text-stone-300 hover:text-white flex items-center gap-2 pb-2" href="#">
                        Zobacz wszystkie <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group cursor-pointer rounded-2xl border border-neutral-800 bg-[#111111]/40 overflow-hidden hover:border-neutral-600 transition-colors">
<div className="h-64 w-full bg-neutral-800/50 flex items-center justify-center border-b border-neutral-800 relative overflow-hidden group-hover:bg-neutral-800 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
</div>
<i className="w-10 h-10 text-neutral-600" data-lucide="image" strokeWidth="1"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">E-COMMERCE</span>
<span className="text-[10px] font-mono text-stone-400 bg-neutral-800 px-2 py-1 rounded">NEXT.JS</span>
</div>
<h3 className="text-xl font-medium text-stone-200 mb-2">Sklep Premium Fashion</h3>
<p className="text-sm text-stone-400">Kompleksowe wdrożenie platformy e-commerce z integracją
                                płatności i zoptymalizowanym lejkiem sprzedaży.</p>
</div>
</div>

<div className="group cursor-pointer rounded-2xl border border-neutral-800 bg-[#111111]/40 overflow-hidden hover:border-neutral-600 transition-colors">
<div className="h-64 w-full bg-neutral-800/50 flex items-center justify-center border-b border-neutral-800 relative overflow-hidden group-hover:bg-neutral-800 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
</div>
<i className="w-10 h-10 text-neutral-600" data-lucide="image" strokeWidth="1"></i>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">SAAS</span>
<span className="text-[10px] font-mono text-stone-400 bg-neutral-800 px-2 py-1 rounded">REACT</span>
</div>
<h3 className="text-xl font-medium text-stone-200 mb-2">Aplikacja Finansowa FinTrack</h3>
<p className="text-sm text-stone-400">Projekt UI/UX i development frontendu dla nowoczesnego
                                startupu z branży fintech.</p>
</div>
</div>
</div>
</div>

<div className="page-content flex-1 flex-col p-8 lg:p-16 w-full max-w-6xl mx-auto" id="process">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-serif font-medium text-stone-100 mb-4">Proces Tworzenia</h2>
<p className="text-stone-400 text-lg max-w-2xl mx-auto">Od pierwszego pomysłu aż po wdrożenie na serwer.
                        Pracujemy transparentnie i terminowo.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

<div className="hidden lg:block absolute top-[4.5rem] left-[12%] right-[12%] h-[1px] bg-neutral-800 z-0">
</div>
<div className="relative z-10 flex flex-col items-center lg:items-start group">
<div className="w-16 h-16 rounded-2xl bg-[#111111] border border-neutral-700 flex items-center justify-center mb-6 text-2xl font-serif text-stone-300 shadow-lg group-hover:-translate-y-2 group-hover:border-blue-500/50 transition-all">
                            01</div>
<h3 className="text-xl font-medium text-stone-200 mb-3 text-center lg:text-left">Odkrycie</h3>
<p className="text-stone-400 text-sm leading-relaxed text-center lg:text-left">Analizujemy Twoją
                            branżę, konkurencję i cele biznesowe. Ustalamy strategię i architekturę informacji.</p>
</div>
<div className="relative z-10 flex flex-col items-center lg:items-start group">
<div className="w-16 h-16 rounded-2xl bg-[#111111] border border-neutral-700 flex items-center justify-center mb-6 text-2xl font-serif text-stone-300 shadow-lg group-hover:-translate-y-2 group-hover:border-blue-500/50 transition-all">
                            02</div>
<h3 className="text-xl font-medium text-stone-200 mb-3 text-center lg:text-left">Design UI/UX</h3>
<p className="text-stone-400 text-sm leading-relaxed text-center lg:text-left">Tworzymy interaktywne
                            makiety i projekt graficzny, dostosowując estetykę do profilu Twojej marki.</p>
</div>
<div className="relative z-10 flex flex-col items-center lg:items-start group">
<div className="w-16 h-16 rounded-2xl bg-[#111111] border border-neutral-700 flex items-center justify-center mb-6 text-2xl font-serif text-stone-300 shadow-lg group-hover:-translate-y-2 group-hover:border-blue-500/50 transition-all">
                            03</div>
<h3 className="text-xl font-medium text-stone-200 mb-3 text-center lg:text-left">Development</h3>
<p className="text-stone-400 text-sm leading-relaxed text-center lg:text-left">Piszemy czysty,
                            wydajny kod. Integrujemy systemy CMS, animacje i dbamy o responsywność (RWD).</p>
</div>
<div className="relative z-10 flex flex-col items-center lg:items-start group">
<div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6 text-2xl font-serif text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:-translate-y-2 transition-all">
                            04</div>
<h3 className="text-xl font-medium text-stone-200 mb-3 text-center lg:text-left">Start &amp; Testy
                        </h3>
<p className="text-stone-400 text-sm leading-relaxed text-center lg:text-left">Rygorystycznie
                            testujemy stronę przed publikacją, zapewniając bezbłędne działanie na każdym urządzeniu.</p>
</div>
</div>
</div>

<div className="page-content flex-1 flex-col p-8 lg:p-16 w-full max-w-6xl mx-auto" id="pricing">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-serif font-medium text-stone-100 mb-4">Przejrzysty Cennik</h2>
<p className="text-stone-400 text-lg max-w-2xl mx-auto">Wybierz pakiet idealny dla Twojego biznesu. Brak
                        ukrytych kosztów.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

<div className="p-8 border border-neutral-800 rounded-3xl bg-[#111111]/40 flex flex-col">
<h3 className="text-xl font-medium text-stone-200 mb-2">Standard</h3>
<p className="text-sm text-stone-400 mb-6">Idealne dla małych firm i freelancerów.</p>
<div className="mb-8">
<span className="text-4xl font-serif text-stone-100">2 500</span>
<span className="text-stone-500 ml-1">PLN</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-stone-300">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Strona typu One-Page</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> RWD (Mobile First)</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Formularz kontaktowy</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Podstawowe SEO</li>
</ul>
<button className="w-full py-3 px-4 border border-neutral-700 hover:bg-neutral-800 text-stone-200 rounded-lg transition-colors font-medium text-sm">Wybieram pakiet</button>
</div>

<div className="p-8 border border-blue-500/30 rounded-3xl bg-[#111111] relative shadow-2xl lg:-translate-y-4 flex flex-col">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                            Najpopularniejszy</div>
<h3 className="text-xl font-medium text-blue-400 mb-2">Pro Business</h3>
<p className="text-sm text-stone-400 mb-6">Pełnowymiarowa witryna dla rosnących firm.</p>
<div className="mb-8">
<span className="text-4xl font-serif text-stone-100">4 900</span>
<span className="text-stone-500 ml-1">PLN</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-stone-300">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Do 10 podstron</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Panel CMS (Zarządzanie
                                treścią)</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Zaawansowane animacje</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Pełna optymalizacja PageSpeed
                            </li>
</ul>
<button className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]">Rozpocznij projekt</button>
</div>

<div className="p-8 border border-neutral-800 rounded-3xl bg-[#111111]/40 flex flex-col">
<h3 className="text-xl font-medium text-stone-200 mb-2">E-Commerce</h3>
<p className="text-sm text-stone-400 mb-6">Dla ambitnych sklepów internetowych.</p>
<div className="mb-8">
<span className="text-xl text-stone-400 mr-2">od</span>
<span className="text-4xl font-serif text-stone-100">8 000</span>
<span className="text-stone-500 ml-1">PLN</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-stone-300">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Niestandardowy projekt
                                sklepu</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Integracje bramek płatności
                            </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Integracja z systemami
                                kurierskimi</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-500" data-lucide="check"></i> Zoptymalizowany koszyk
                                (Checkout)</li>
</ul>
<button className="w-full py-3 px-4 border border-neutral-700 hover:bg-neutral-800 text-stone-200 rounded-lg transition-colors font-medium text-sm">Wyceń indywidualnie</button>
</div>
</div>
</div>
</main>

<footer className="md:p-10 flex flex-col bg-stone-900/50 w-full border-neutral-800 border-t mt-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="flex flex-wrap gap-8 md:gap-16 lg:gap-24 hover:grayscale-0 transition-all duration-500 opacity-60 grayscale translate-y-2 gap-x-8 gap-y-8 items-center justify-center">
<div className="flex gap-2 text-xl font-medium text-stone-300 tracking-normal font-serif gap-x-2 gap-y-2 items-center">Firma1</div>
<div className="flex gap-2 text-xl font-medium text-stone-300 tracking-normal font-serif gap-x-2 gap-y-2 items-center">Firma2
</div>
<div className="flex gap-2 text-xl font-medium text-stone-300 tracking-normal font-serif gap-x-2 gap-y-2 items-center">Firma3</div>
<div className="flex gap-2 hidden sm:flex text-xl font-medium text-stone-300 tracking-normal font-serif gap-x-2 gap-y-2 items-center">Firma4
</div>
<div className="flex gap-2 hidden md:flex text-xl font-medium text-stone-300 tracking-normal font-serif gap-x-2 gap-y-2 items-center">Firma5
</div>
</div><p className="uppercase -translate-x-3 -translate-y-3 -translate-y-16 -translate-y-12 text-xs font-medium text-stone-500 tracking-widest absolute -translate-x-2 -translate-y-6">Firmy,które nam zaufały</p>
</footer>
</div>


    </>
  );
}
